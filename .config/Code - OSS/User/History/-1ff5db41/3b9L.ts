import { db } from './db'
import { sql } from 'drizzle-orm'
import { users, usage_logs } from './db/schema'

type DeductResult =
  | { success: true; newBalance: number; creditsUsedThisOp: number }
  | { success: false; reason: 'INSUFFICIENT_FUNDS' | 'USER_NOT_FOUND' | 'ERROR'; details?: any }

export async function tryDeductCredits(
  clerkId: string,
  amount: number,
  action = 'generate',
  metadata: any = {}
): Promise<DeductResult> {
  try {
    // Atomic deduction
    const result = await db.execute(sql`
      UPDATE ${users}
      SET
        "creditsBalance" = "creditsBalance" - ${amount},
        "creditsUsed" = "creditsUsed" + ${amount}
      WHERE
        "clerkId" = ${clerkId}
        AND "creditsBalance" >= ${amount}
      RETURNING "id", "creditsBalance";
    `)

    if (result.rows.length === 0) {
      return { success: false, reason: 'INSUFFICIENT_FUNDS' }
    }

    const user = result.rows[0]

    await db.insert(usage_logs).values({
      userId: user.id,
      creditsUsed: amount,
      action,
      metadata,
    })

    return {
      success: true,
      newBalance: Number(user.creditsBalance),
      creditsUsedThisOp: amount,
    }
  } catch (err) {
    console.error(err)
    return { success: false, reason: 'ERROR', details: err }
  }
}
