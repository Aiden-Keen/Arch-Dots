"use client";
import { Badge } from "@/components/ui/badge";
import { useUsageStore } from "@/stores/useUsageStore";
import React from "react";

const PlanCard = () => {
    const user = useUsageStore((s) => s.user);

    const total = 100;
    const used = user?.creditsUsed ?? 0;
    const percentage = Math.min((used / total) * 100, 100);

    const isLoading = !user;

    return (
        <div className="bg-white p-6 flex flex-col rounded-xl border shadow-sm w-full">
            <div className="mb-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold">Your Plan</h2>

                {isLoading ? (
                    <div className="h-6 w-20 rounded bg-gray-200 animate-pulse" />
                ) : (
                    <Badge variant="outline">{user.planTier}</Badge>
                )}
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 h-2 rounded mt-4 overflow-hidden">
                <div
                    className={`h-2 rounded transition-all ${
                        isLoading ? "bg-gray-300" : "bg-blue-600"
                    }`}
                    style={{ width: `${percentage}%` }}
                />
            </div>

            <p className="text-sm text-gray-600 mt-2 mb-3">
                {isLoading ? (
                    <span className="inline-block h-4 w-32 bg-gray-200 rounded animate-pulse" />
                ) : (
                    <>
                        <span className="font-bold">
                            {used} / {total}
                        </span>{" "}
                        credits used
                    </>
                )}
            </p>

            <button
                disabled={isLoading}
                className={`mt-auto w-full py-2 rounded-lg font-medium transition
                    ${
                        isLoading
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-orange-500 text-white hover:bg-orange-600"
                    }
                `}
            >
                {isLoading ? "Loading plan..." : "Upgrade Plan"}
            </button>
        </div>
    );
};

export default PlanCard;
