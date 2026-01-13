import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
    const { userId, isAuthenticated } = await auth();
    
    if (!userId || !isAuthenticated) {
        return NextResponse.json({ error: "unauthenticated" }, { status: 401 });
    }
    
    console.log(userId);
    
    const rows = await db
        .select()
        .from(users)
        .where(eq(users.clerkId, userId))
        .limit(1);

    if (!rows || rows.length === 0)
        return NextResponse.json({ error: "user_not_found" }, { status: 404 });

    const user = rows[0];

    return NextResponse.json({
        user,
    });
}
