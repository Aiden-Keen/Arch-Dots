"use client";
import { Badge } from "@/components/ui/badge";
import { useUsageStore } from "@/stores/useUsageStore";
import React from "react";

const PlanCard = () => {
    const user = useUsageStore((s) => s.user);

    const total = 100;
    const used = user?.creditsUsed ?? 0;
    const percentage = Math.min((used / total) * 100, 100);

    return (
        <div className="bg-white p-6 rounded-xl border shadow-sm w-full">
            <div className="mb-4 flex justify-between">
                <h2 className="text-lg font-semibold">Your Plan</h2>
                <Badge variant="outline" className="">
                    {user?.planTier ?? "N/A"}
                </Badge>
            </div>

            <div className="w-full bg-gray-200 h-2 rounded mt-4">
                <div
                    className="bg-blue-600 h-2 rounded"
                    style={{ width: `${percentage}%` }}
                />
            </div>

            <p className="text-sm text-gray-600 mt-2 mb-3">
                <span className="font-bold">
                    {used} / {total}
                </span>{" "}
                credits used
            </p>

            <button className="mt-auto w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition">
                Upgrade Plan
            </button>
        </div>
    );
};

export default PlanCard;
