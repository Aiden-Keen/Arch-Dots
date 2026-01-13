import { db } from './db'
import { users, usage_logs } from './db/schema'
import { and, eq, gte, sql } from 'drizzle-orm'

type DeductResult =
  | { success: true; newBalance: number; creditsUsedThisOp: number }
  | {
      success: false
      reason: 'INSUFFICIENT_FUNDS' | 'USER_NOT_FOUND' | 'ERROR'
      details?: any
    }

export async function tryDeductCredits(
  clerkId: string,
  amount: number,
  action = 'generate',
  metadata: any = {}
): Promise<DeductResult> {
  try {
    /**
     * Atomic UPDATE:
     * - deducts credits
     * - only succeeds if balance >= amount
     * - returns updated row
     */
    const updatedUsers = await db
      .update(users)
      .set({
        creditsBalance: sql`${users.creditsBalance} - ${amount}`,
        creditsUsed: sql`${users.creditsUsed} + ${amount}`,
      })
      .where(
        and(
          eq(users.clerkId, clerkId),
          gte(users.creditsBalance, amount)
        )
      )
      .returning({
        id: users.id,
        creditsBalance: users.creditsBalance,
      })

    if (updatedUsers.length === 0) {
      // Either user doesn't exist or insufficient credits
      return {
        success: false,
        reason: 'INSUFFICIENT_FUNDS',
      }
    }

    const user = updatedUsers[0]

    // Log usage (non-transactional is fine here)
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
    console.error('Credit deduction error:', err)
    return {
      success: false,
      reason: 'ERROR',
      details: err,
    }
  }
}
