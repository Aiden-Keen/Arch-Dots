import { useUsageStore } from "@/stores/useUsageStore";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export const UsageLineChart = () => {
    const usageData = useUsageStore((s) => s.usageOverTime)
    
    return (
    <div className="bg-white border rounded-xl pb-6 shadow-sm h-[50vh]">
        {/* <h3 className="font-semibold mb-4">Usage Over Time</h3> */}
        <p className="text-gray-600 font-semibold p-3 mb-2 border-b-[1px]">
            Usage Over Time
        </p>

        <ResponsiveContainer width="96%" height="90%">
            <LineChart data={usageData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="words"
                    stroke="#2563eb"
                    strokeWidth={2}
                />
            </LineChart>
        </ResponsiveContainer>
    </div>
)};
