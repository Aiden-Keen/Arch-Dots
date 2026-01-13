"use client";
import { create } from "zustand";
import { UserInfo, HistoryProps } from "@/types";

type UsageStats = {
  wordsGenerated: number;
  documentsCreated: number;
  templatesUsed: number;
};

type UsageStore = {
  user: UserInfo | null;
  stats: UsageStats;
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
  isLoading: false,

  setUser: (user) => set({ user }),

  recomputeFromHistory: (history) => {
    let totalWords = 0;
    const templateMap: Record<string, number> = {};

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
      totalWords += countWords(item.generatedContent);
      if (item.contentType) {
        templateMap[item.contentType] =
          (templateMap[item.contentType] || 0) + 1;
      }
    }

    set({
      stats: {
        wordsGenerated: totalWords,
        documentsCreated: history.length,
        templatesUsed: Object.keys(templateMap).length,
      },
    });
  },
}));
