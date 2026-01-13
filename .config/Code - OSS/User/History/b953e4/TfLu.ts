import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { users, usage_logs } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
    const { userId } = await auth();
    if (!userId)
        return NextResponse.json({ error: "unauthenticated" }, { status: 401 });

    const user = await db
        .select()
        .from(users)
        .where(eq(users.clerkId, userId))
        .limit(1);

    if (!user || user.length === 0)
        return NextResponse.json({ error: "user_not_found" }, { status: 404 });

    const logs = await db
        .select()
        .from(usage_logs)
        .where(eq(usage_logs.userId, user[0].id))
        .orderBy(desc(usage_logs.timestamp))
        .limit(20);

    return NextResponse.json({
        balance: user[0].creditsBalance,
        credits_used: user[0].creditsUsed,
        logs,
    });
}
