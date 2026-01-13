import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import DashboardPageUI from "./DashboardPageUI";

export const dynamic = "force-dynamic"; // ensures SSR (no static caching)

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return <DashboardPageUI />;
}
