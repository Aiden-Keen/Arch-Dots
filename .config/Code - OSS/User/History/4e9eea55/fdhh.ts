// "use client";
import { HistoryProps } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type HistoryStore = {
    history: HistoryProps[];
    isLoading: boolean;
    isHydrated: boolean;
    rehydrate: () => Promise<void>;
    refreshHistory: (userId: string) => Promise<HistoryProps[]>;
    getCachedHistory: () => HistoryProps[];
    addToHistory: (item: HistoryProps) => void;
};

const useHistoryStore = create<HistoryStore>()(
    persist(
        (set, get) => ({
            history: [],
            isLoading: false,
            isHydrated: false,

            // Returns whatever exists locally — NO NETWORK
            getCachedHistory: () => {
                return get().history;
            },

            // Append new item, keep last 100
            addToHistory: (item: HistoryProps) => {
                const next = [...get().history, item].slice(-100);
                set({ history: next });
            },

            // Force fresh fetch from server and update store
            refreshHistory: async (userId: string) => {
                try {
                    set({ isLoading: true });

                    const response = await fetch("/api/history", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "user-id": userId,
                        },
                        cache: "no-store",
                    });

                    if (!response.ok) {
                        throw new Error("Failed to fetch history");
                    }

                    const json = await response.json();
                    const items = Array.isArray(json?.data) ? json.data : [];

                    set({ history: items, isLoading: false });
                    return items;
                } catch (err) {
                    console.error("History fetch error:", err);
                    set({ isLoading: false });
                    return get().history; // fallback to whatever's in memory
                }
            },

            // Called to mark hydration finished. We also provide a method to call rehydrate() if needed.
            rehydrate: async () => {
                // If persist exposes rehydrate, call it. This is the same as before.
                // If using Zustand v4+, persist.rehydrate should exist.
                try {
                    // @ts-ignore
                    if (useHistoryStore.persist?.rehydrate) {
                        // rehydrate returns a promise in some impls
                        const maybe = useHistoryStore.persist.rehydrate();
                        if (maybe instanceof Promise) await maybe;
                    }
                } catch (e) {
                    // swallow, we'll rely on onRehydrateStorage below
                }
            },
        }),
        {
            name: "history-storage",
            // Let persist automatically rehydrate on load. Use onRehydrateStorage to set isHydrated flag.
            onRehydrateStorage: () => (state) => {
                // This callback runs when rehydration completes, so set the hydrated flag
                // We can't call set from here directly, but the state param can be used for logging.
                // We'll set the flag by calling the store setter right after rehydrate finishes via the persist API:
                // However to be safe, we'll set isHydrated using a small timeout (works across versions)
                setTimeout(() => {
                    useHistoryStore.setState({ isHydrated: true }); // TODO Remove me and related stuff
                }, 0);
            },
        }
    )
);

export default useHistoryStore;
