"use client";
import { useMemo, useState, useEffect } from "react";
import Stats from "./_components/Stats";
import StartCreating from "./_components/StartCreating";
import PlanCard from "./_components/PlanCard";
import RecentContent from "./_components/RecentContent";
import { FileText, Lightbulb, Instagram, Video } from "lucide-react";
import { HistoryProps, UserInfo } from "@/types";
import { useAuth } from "@clerk/nextjs";

type DashboardPageProps = {
    history: HistoryProps[];
};

export default function DashboardPageUI({ history }: DashboardPageProps) {
    const { userId, isLoaded } = useAuth();
    const recentContent = useMemo(() => history.slice(0, 5), [history]);

    const [stats, setStats] = useState([
        { label: "Words Generated", value: 0 },
        { label: "Documents Created", value: 0 },
        { label: "Templates Used", value: 0 },
        { label: "API Credits", value: 0 },
    ]);
    const [userData, setUserData] = useState<UserInfo>({
        id: "N/A",
        planTier: "free",
        creditsBalance: 0,
        creditsUsed: 0,
        lastReset: new Date(),
        role: "User",
        createdAt: new Date(),
    });

    // Compute real stats
    const computedStats = useMemo(() => {
        const totalDocs = history.length;
        let totalWords = 0;
        const typeMap: Record<string, number> = {};

        function countWords(text: string | null | undefined): number {
            if (!text || typeof text !== "string") return 0;

            let cleaned = text.replace(/<[^>]*>/g, " ");
            cleaned = cleaned
                .replace(/[`*_>{}[\]()#+\-]/g, " ")
                .replace(/``````/g, " ");

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

        return [
            { label: "Words Generated", value: totalWords },
            { label: "Documents Created", value: totalDocs },
            { label: "Templates Used", value: templateCount },
            { label: "API Credits", value: userData.creditsBalance },
        ];
    }, [history]);

    useEffect(() => {
        if (!isLoaded || !userId) return;

        const getData = async () => {
            try {
                const res = await fetch("/api/user", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    cache: "no-store",
                });

                const data = await res.json();
                setUserData(data);
            } catch (err) {
                console.error(err);
            }
        };

        getData();
    }, [isLoaded, userId]);

        useEffect(() => {
        const timer = setTimeout(() => {
            setStats(computedStats);
        }, 200);

        return () => clearTimeout(timer);
    }, [computedStats, userData]);


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
                    <Stats items={stats} />
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
}
