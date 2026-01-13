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

            const dateKey = new Date(item.createdAt).toISOString().slice(0, 10); // YYYY-MM-DD

            dailyMap[dateKey] = (dailyMap[dateKey] || 0) + words;
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const allDates = Object.keys(dailyMap).sort();

        // 2️⃣ Decide range start
        let startDate: Date;

        if (allDates.length === 0) {
            // No data at all → last 5 days ending today
            startDate = new Date(today);
            startDate.setDate(startDate.getDate() - 4);
        } else {
            const earliest = new Date(allDates[0]);
            earliest.setHours(0, 0, 0, 0);

            const fiveDaysAgo = new Date(today);
            fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 4);

            // If lifetime is longer than 5 days → show lifetime
            startDate = earliest < fiveDaysAgo ? earliest : fiveDaysAgo;
        }

        // 3️⃣ Generate continuous date range (start → today)
        const usageOverTime = [];
        const cursor = new Date(startDate);

        while (cursor <= today) {
            const key = cursor.toISOString().slice(0, 10);

            usageOverTime.push({
                date: cursor.toLocaleDateString("en-US", {
                    weekday: "short",
                }),
                words: dailyMap[key] ?? 0,
            });

            cursor.setDate(cursor.getDate() + 1);
        }

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
