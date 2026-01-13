"use client";
import { Badge } from "@/components/ui/badge";
import { useUsageStore } from "@/stores/useUsageStore";
import React from "react";

const PlanCard = () => {
    const user = useUsageStore((s) => s.user);

    if (!user) return null;

    const total = 10000;
    const used = user.creditsUsed;
    const percentage = Math.min((used / total) * 100, 100);

    return (
        <div className="bg-white p-6 rounded-xl border shadow-sm w-full">
            <Badge variant="outline" className="absolute top-4 right-4">
                FREE
            </Badge>

            <h2 className="text-lg font-semibold mb-4">Your Plan</h2>

      <Badge variant="secondary" className="mb-4">
        {user.planTier.toUpperCase()}
      </Badge>

            <div className="w-full bg-gray-200 h-2 rounded mt-4">
                <div
                    className="bg-blue-600 h-2 rounded"
                    style={{ width: `${percentage}%` }}
                />
            </div>

            <p className="text-sm text-gray-600 mt-2 mb-4">
                <span className="font-bold">
                    {used} / {total}
                </span>{" "}
                words used
            </p>

            <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition">
                Upgrade Plan
            </button>
        </div>
    );
};

export default PlanCard;
