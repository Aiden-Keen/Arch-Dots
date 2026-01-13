import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'
import { db } from '@/lib/db' // adjust path
import { users } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)

    if (evt.type === 'user.created') {
      const {
        id: clerkId,
        email_addresses,
      } = evt.data

      // Optional: primary email (Clerk guarantees order)
      const email = email_addresses?.[0]?.email_address ?? null

      // Idempotent insert (safe on retries)
      await db
        .insert(users)
        .values({
          clerkId,
          planTier: 'free',
          creditsBalance: 0,
          creditsUsed: 0,
          role: 'User',
        })
        .onConflictDoNothing({
          target: users.clerkId,
        })

      console.log(`User ${clerkId} inserted`)
    }

    return new Response('OK', { status: 200 })
  } catch (err) {
    console.error('Webhook error:', err)
    return new Response('Invalid webhook', { status: 400 })
  }
}
