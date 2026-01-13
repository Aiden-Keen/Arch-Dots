"use client";
import React from "react";

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <div className="bg-red-500 min-h-screen">
            <div className="overflow-y-auto">{children}</div>
        </div>
    );
}
