"use client";
import React from "react";
import NumberFlow from "@number-flow/react";

export type StatsProps = {
    items: {
        label: string;
        value: number;
    }[];
};

const Stats = ({ items }: StatsProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
            {items.map((stat, i) => (
                <div
                    key={i}
                    className="bg-white rounded-xl border shadow-sm h-40 w-4h-40 flex flex-col"
                >
                    <div>{stat.label}</div>

                    <div className="bg-red-100 flex flex-1 justify-center lg:text-4xl sm:text-2xl font-bold">
                        <NumberFlow className="" value={stat.value} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Stats;
