import { db } from './db/index'; // your neon-http drizzle instance
import { sql } from 'drizzle-orm';
import { eq } from 'drizzle-orm';
import { users, usage_logs } from './db/schema'; // your schema tables

type DeductResult = 
  | { success: true; newBalance: number; creditsUsedThisOp: number }
  | { success: false; reason: 'INSUFFICIENT_FUNDS' | 'ERROR' | 'BLOCKED' | string; details?: any };

export async function tryDeductCredits(
  clerkId: string,
  amount: number,
  action = 'generate',
  metadata: any = {}
): Promise<DeductResult> {
  return db.transaction(async (tx) => {
    // Lock and select user (equivalent to SELECT FOR UPDATE)
    const userRows = await tx
      .select({ id: users.id, creditsBalance: users.creditsBalance, creditsUsed: users.creditsUsed, planTier: users.planTier })
      .from(users)
      .where(eq(users.clerkId, clerkId))
      .for('update'); // This provides row-level locking

    if (userRows.length === 0) {
      throw new Error('USER_NOT_FOUND');
    }

    const userRow = userRows[0];
    const currentBalance = Number(userRow.creditsBalance);

    if (currentBalance < amount) {
      throw new Error('INSUFFICIENT_FUNDS');
    }

    const newBalance = currentBalance - amount;
    const creditsUsed = Number(userRow.creditsUsed || 0) + amount;

    // Update user balance atomically
    await tx
      .update(users)
      .set({ 
        creditsBalance: newBalance, 
        creditsUsed: creditsUsed 
      })
      .where(eq(users.id, userRow.id));

    // Log usage
    await tx.insert(usageLogs).values({
      userId: userRow.id,
      creditsUsed: amount,
      action,
      metadata: metadata || {}
    });

    return { success: true, newBalance, creditsUsedThisOp: amount } as DeductResult;
  })
  .catch((err) => {
    const reason = err.message === 'USER_NOT_FOUND' || err.message === 'INSUFFICIENT_FUNDS' 
      ? err.message 
      : 'ERROR';
    return { success: false, reason: reason as any, details: err };
  });
}
