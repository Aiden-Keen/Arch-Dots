import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { content_generations } from "@/lib/db/schema";
import { and, desc, eq, ne } from "drizzle-orm";
import DashboardPageUI from "./DashboardPageUI";

export const dynamic = "force-dynamic"; // ensures SSR (no static caching)

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const history = await db
    .select()
    .from(content_generations)
    .where(
      and(
        eq(content_generations.userId, userId),
        ne(content_generations.isDeleted, true)
      )
    )
    .orderBy(desc(content_generations.createdAt))
    .limit(5);

  return <DashboardPageUI history={history} />;
}
