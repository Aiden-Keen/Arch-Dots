"use client";
import { Badge } from "@/components/ui/badge";
import { useUsageStore } from "@/stores/useUsageStore";
import React from "react";

const PlanCard = () => {
    const user = useUsageStore((s) => s.user);

    if (!user) return null;

    const total = 100;
    const used = user.creditsUsed;
    const percentage = Math.min((used / total) * 100, 100);

    return (
        <div className="bg-white p-6 rounded-xl border shadow-sm w-full">
            <div className="mb-4 flex justify-between">
                <h2 className="text-lg font-semibold">Your Plan</h2>
                <Badge variant="secondary" className="">Free</Badge>
            </div>

            <p className="text-gray-700 font-medium">{user.planTier}</p>

            <div className="w-full bg-gray-200 h-2 rounded mt-4">
                <div
                    className="bg-blue-600 h-2 rounded"
                    style={{ width: `${percentage}%` }}
                />
            </div>

            <p className="text-sm text-gray-600 mt-2">
                <span className="font-bold">
                    {used} / {total}
                </span>{" "}
                words used
            </p>

            {/* <p className="text-sm text-gray-500 mb-4">
                Resets in {data.daysLeft} days
            </p> */}

            <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition">
                Upgrade Plan
            </button>
        </div>
    );
};

export default PlanCard;
