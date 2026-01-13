import { PoolClient } from 'pg';
import { pool } from './db'; // exported pg Pool

type DeductResult =
  | { success: true; newBalance: number; creditsUsedThisOp: number }
  | { success: false; reason: 'INSUFFICIENT_FUNDS' | 'ERROR' | 'BLOCKED' | string; details?: any };

export async function tryDeductCredits(
  clerkId: string,
  amount: number,
  action = 'generate',
  metadata: any = {}
): Promise<DeductResult> {
  const client: PoolClient = await pool.connect();
  try {
    await client.query('BEGIN');

    // lock the user row (SELECT FOR UPDATE)
    const selectRes = await client.query(
      `SELECT id, credits_balance, credits_used, plan_tier FROM users WHERE clerk_id = $1 FOR UPDATE`,
      [clerkId]
    );

    if (selectRes.rowCount === 0) {
      await client.query('ROLLBACK');
      return { success: false, reason: 'ERROR', details: 'USER_NOT_FOUND' };
    }

    const userRow = selectRes.rows[0];
    const currentBalance: number = Number(userRow.credits_balance);

    // Example: hard block if negative or 0
    if (currentBalance < amount) {
      // You could implement a soft-grace period here
      await client.query('ROLLBACK');
      return { success: false, reason: 'INSUFFICIENT_FUNDS' };
    }

    const newBalance = currentBalance - amount;
    const creditsUsed = Number(userRow.credits_used || 0) + amount;

    // update balances
    await client.query(
      `UPDATE users SET credits_balance = $1, credits_used = $2 WHERE id = $3`,
      [newBalance, creditsUsed, userRow.id]
    );

    // insert usage log (atomic)
    await client.query(
      `INSERT INTO usage_logs (user_id, credits_used, action, metadata) VALUES ($1, $2, $3, $4)`,
      [userRow.id, amount, action, JSON.stringify(metadata || {})]
    );

    await client.query('COMMIT');
    return { success: true, newBalance, creditsUsedThisOp: amount };
  } catch (err) {
    await client.query('ROLLBACK');
    return { success: false, reason: 'ERROR', details: err };
  } finally {
    client.release();
  }
}
