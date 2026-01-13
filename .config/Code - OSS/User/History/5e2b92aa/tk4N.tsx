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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
            {items.map((stat, i) => (
                <div
                    key={i}
                    className="bg-white rounded-xl border shadow-sm flex flex-col overflow-hidden"
                >
                    <p className="text-gray-600 font-semibold p-3 border-b-[1px]">
                        {stat.label}
                    </p>

                    <div className="bg-neutral-100 flex flex-col flex-1 text-center justify-center lg:text-5xl md:text-4xl sm:text-2xl font-bold">
                        <NumberFlow value={stat.value} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Stats;
