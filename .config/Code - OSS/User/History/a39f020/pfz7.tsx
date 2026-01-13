"use client";
import React, { useEffect, useMemo } from "react";
import { redirect } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import useHistoryStore from "@/stores/useHistoryStore";
import Stats from "./_components/Stats";
import { FileText, Lightbulb, Instagram, Video } from "lucide-react";

import StartCreating from "./_components/StartCreating";
import PlanCard from "./_components/PlanCard";
import RecentContent from "./_components/RecentContent";

const Dashboard: React.FC = () => {
    const history = useHistoryStore((s) => s.history);
    const isHydrated = useHistoryStore((s) => s.isHydrated);
    const { userId, isLoaded } = useAuth();
    const historyStore = useHistoryStore();
    const recentContent = useMemo(() => history.slice(-5).reverse(), [history]);
    const computedStats = useMemo(() => {
        const totalDocs = history.length;
        let totalWords = 0;
        const typeMap: Record<string, number> = {};

        function countWords(text: string | null | undefined): number {
            if (!text || typeof text !== "string") return 0;

            let cleaned = text.replace(/<[^>]*>/g, " ");

            cleaned = cleaned
                .replace(/[`*_>{}[\]()#+\-]/g, " ")
                .replace(/```[\s\S]*?```/g, " ");

            cleaned = cleaned.replace(/\s+/g, " ").trim();

            if (!cleaned) return 0;

            return cleaned.split(" ").filter(Boolean).length;
        }

        for (const item of history) {
            if (typeof item.generatedContent === "string") {
                totalWords += countWords(item.generatedContent);
            }

            if (item.contentType) {
                typeMap[item.contentType] =
                    (typeMap[item.contentType] || 0) + 1;
            }
        }

        const templateCount = Object.keys(typeMap).length;

        const mostUsedTemplate =
            Object.entries(typeMap).sort((a, b) => b[1] - a[1])[0]?.[0] ??
            "N/A";

        return [
            {
                label: "Words Generated",
                value: totalWords > 0 ? totalWords.toLocaleString() : "0",
                sublabel: "Based on generated content",
                color: "text-green-600",
            },
            {
                label: "Documents Created",
                value: totalDocs.toString(),
                sublabel: "Total items in history",
            },
            {
                label: "Templates Used",
                value: templateCount.toString(),
                sublabel: `Most used: ${mostUsedTemplate}`,
            },
            {
                label: "API Credits",
                value: "4,200",
                sublabel: "2,800 remaining",
                color: "text-red-500",
            },
        ];
    }, [history]);

    // Redirect unauthenticated users once Clerk reports null
    useEffect(() => {
        if (userId === undefined && isLoaded) redirect("/sign-in");
    }, [userId]);

    useEffect(() => {
        if (!userId) return;

        function fetchHistory() {
            historyStore.refreshHistory(userId!);
        }

        fetchHistory();
    }, [userId]);

    if (!isHydrated || !isLoaded) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                Loading...
            </div>
        );
    }

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

    const plan = {
        planName: "Pro Plan – Monthly",
        used: 7500,
        total: 10000,
        daysLeft: 12,
    };

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
                <div className="mb-10">
                    <Stats items={computedStats} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 w-full">
                    <div className="lg:col-span-2">
                        <StartCreating items={creatingOptions} />
                    </div>

                    <PlanCard data={plan} />
                </div>

                <RecentContent data={recentContent} />
            </div>
        </div>
    );
};

export default Dashboard;
