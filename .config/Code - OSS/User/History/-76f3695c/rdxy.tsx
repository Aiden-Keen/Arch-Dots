"use client";
import { useUsageStore } from "@/stores/useUsageStore";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#2563eb", "#e5e7eb"];

export const UsageDonut = () => {
    const user = useUsageStore((s) => s.user);

    if (!user) return null;

    const total = 100;
    const used = user.creditsUsed;
    const percentage = Math.min((used / total) * 100, 100);

    const data = [
        { name: "Used", value: 50 },
        { name: "Remaining", value: total - used },
    ];

    return (
        <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Credit Usage</h3>

            <PieChart width={200} height={200}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((_, i) => (
                        <Cell key={i} fill={COLORS[i]} />
                    ))}
                </Pie>
            </PieChart>

            <p className="text-center text-sm text-gray-600 mt-2">
                {percentage.toFixed(1)}% used
            </p>
        </div>
    );
};
