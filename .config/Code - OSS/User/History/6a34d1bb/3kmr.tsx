"use client";
import React from "react";

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <div className="bg-background min-h-screen">
            <div className="">{children}</div>
        </div>
    );
}
