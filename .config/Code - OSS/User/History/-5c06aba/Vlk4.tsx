"use client"
import React from "react";
import Link from "next/link";

type CreationItem = {
    href: string;
    label: string;
    icon: React.ReactNode;
};

type StartCreatingProps = {
    items: CreationItem[];
};

const StartCreating = ({ items }: StartCreatingProps) => {
    return (
        <div className="bg-white p-6 rounded-xl border shadow-sm w-full">
            <h2 className="text-lg font-semibold mb-4">Start Creating</h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                {items.map((item, i) => (
                    <Link key={i} href={item.href}>
                        <div className="cursor-pointer p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border flex items-center space-x-3 transition">
                            {item.icon}
                            <span className="font-medium text-sm">
                                {item.label}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default StartCreating;
