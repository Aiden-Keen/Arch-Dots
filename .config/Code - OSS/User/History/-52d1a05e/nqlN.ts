"use client";
import { create } from "zustand";
import { UserInfo, HistoryProps } from "@/types";

type UsageStats = {
    wordsGenerated: number;
    documentsCreated: number;
    templatesUsed: number;
};

type UsagePoint = {
    date: string;
    words: number;
};

type UsageStore = {
    user: UserInfo | null;
    stats: UsageStats;
    usageOverTime: UsagePoint[];
    isLoading: boolean;

    setUser: (user: UserInfo) => void;
    recomputeFromHistory: (history: HistoryProps[]) => void;
    fetchUser: () => Promise<void>;
};

export const useUsageStore = create<UsageStore>((set) => ({
    user: null,
    stats: {
        wordsGenerated: 0,
        documentsCreated: 0,
        templatesUsed: 0,
    },
    usageOverTime: [],
    isLoading: false,

    setUser: (user) => set({ user }),

    fetchUser: async () => {
        try {
            set({ isLoading: true });

            const res = await fetch("/api/user", { cache: "no-store" });
            if (!res.ok) throw new Error("Failed to fetch user");

            const data = await res.json();
            set({ user: data.user, isLoading: false });
        } catch (err) {
            console.error(err);
            set({ isLoading: false });
        }
    },

    recomputeFromHistory: (history) => {
        let totalWords = 0;
        const templateMap: Record<string, number> = {};
        const dailyMap: Record<string, number> = {};

        const countWords = (text?: string | null) => {
            if (!text) return 0;
            return text
                .replace(/<[^>]*>/g, " ")
                .replace(/\s+/g, " ")
                .trim()
                .split(" ")
                .filter(Boolean).length;
        };

        for (const item of history) {
            const words = countWords(item.generatedContent);
            totalWords += words;

            if (item.contentType) {
                templateMap[item.contentType] =
                    (templateMap[item.contentType] || 0) + 1;
            }

            const dateKey = new Date(item.createdAt).toLocaleDateString(
                "en-US",
                {
                    weekday: "short",
                }
            );

            dailyMap[dateKey] = (dailyMap[dateKey] || 0) + words;
        }

        const usageOverTime = Object.entries(dailyMap).map(([date, words]) => ({
            date,
            words,
        }));

        set({
            stats: {
                wordsGenerated: totalWords,
                documentsCreated: history.length,
                templatesUsed: Object.keys(templateMap).length,
            },
            usageOverTime,
        });
    },
}));
