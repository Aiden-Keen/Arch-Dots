import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const usageData = [
    { date: "Mon", words: 1200 },
    { date: "Tue", words: 800 },
    { date: "Wed", words: 2400 },
    { date: "Thu", words: 1800 },
    { date: "Fri", words: 3200 },
];

export const UsageLineChart = () => (
    <div className="bg-white border rounded-xl pb-6 shadow-sm h-[50vh]">
        {/* <h3 className="font-semibold mb-4">Usage Over Time</h3> */}
        <p className="text-gray-600 font-semibold mb-4 p-3 border-b-[1px]">
            Usage Over Time
        </p>

        <ResponsiveContainer width="96%" height="90%">
            <LineChart data={usageData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="data"
                    stroke="#2563eb"
                    strokeWidth={2}
                />
            </LineChart>
        </ResponsiveContainer>
    </div>
);
