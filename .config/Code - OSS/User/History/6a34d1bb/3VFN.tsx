"use client";
import React from "react";

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <div className="bg-background max-h-[150px]">
            <div className="overflow-y-auto">{children}</div>
        </div>
    );
}
