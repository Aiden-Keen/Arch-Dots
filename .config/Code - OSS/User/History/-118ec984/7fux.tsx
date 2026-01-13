"use client";
import { useMemo, useState, useEffect } from "react";
import Stats from "./_components/Stats";
import StartCreating from "./_components/StartCreating";
import PlanCard from "./_components/PlanCard";
import RecentContent from "./_components/RecentContent";
import { FileText, Lightbulb, Instagram, Video } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import useHistoryStore from "@/stores/useHistoryStore";
import { useUsageStore } from "@/stores/useUsageStore";
import { UsageDonut } from "@/components/UsageDonut";
import { UsageLineChart } from "@/components/UsageLineChart";

export default function DashboardPageUI() {
    const { userId, isLoaded } = useAuth();

    const history = useHistoryStore((s) => s.history);
    const refreshHistory = useHistoryStore((s) => s.refreshHistory);
    const recentContent = useMemo(() => history.slice(0, 5), [history]);
    const fetchUser = useUsageStore((s) => s.fetchUser);

    const { user, stats, setUser, recomputeFromHistory } = useUsageStore();

    // Load user once
    useEffect(() => {
        if (!isLoaded || !userId) return;

        fetchUser();
    }, [isLoaded, userId]);

    // Load history & recompute usage
    useEffect(() => {
        if (!userId) return;

        refreshHistory(userId).then((items) => {
            recomputeFromHistory(items);
        });
    }, [userId]);

    const creatingOptions = [
        {
            href: "/generate?type=article",
            label: "New Article",
            icon: <FileText className="text-blue-600" />,
        },
        {
            href: "/generate?type=blog_ideas",
            label: "Blog Ideas",
            icon: <Lightbulb className="text-green-600" />,
        },
        {
            href: "/generate?type=social_post",
            label: "Social Post",
            icon: <Instagram className="text-orange-600" />,
        },
        {
            href: "/generate?type=video_script",
            label: "Video Script",
            icon: <Video className="text-purple-600" />,
        },
    ];

    const statsItems = [
        { label: "Words Generated", value: stats.wordsGenerated },
        { label: "Documents Created", value: stats.documentsCreated },
        { label: "Templates Used", value: stats.templatesUsed },
        { label: "API Credits", value: user?.creditsBalance ?? 0 },
    ];

    return (
        <div className="h-screen bg-gray-50">
            <div className="h-20 border-b-[1px] flex items-center gap-3 px-6">
                <h1 className="text-2xl font-bold text-gray-900 leading-none truncate">
                    Welcome Back!
                </h1>
                <p className="text-sm text-gray-600 leading-none truncate">
                    Here's your content creation snapshot for today.
                </p>
            </div>

            <div className="p-6">
                    <UsageLineChart />
                <div className="mb-2 flex flex-row gap-2 mt-2">
                    <UsageDonut />
                    <Stats items={statsItems} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-2 w-full">
                    <div className="lg:col-span-2">
                        <StartCreating items={creatingOptions} />
                    </div>

                    <PlanCard />
                </div>

                <RecentContent data={recentContent} />
            </div>
        </div>
    );
}
