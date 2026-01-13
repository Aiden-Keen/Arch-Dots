"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { History, Settings, Layout, Wand2 } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import PlanCard from "../dashboard/_components/PlanCard";

interface NavItem {
    path: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
}

const navItems: NavItem[] = [
    { path: "/dashboard", icon: Layout, label: "Dashboard" },
    { path: "/generate", icon: Wand2, label: "Content Generator" },
    { path: "/history", icon: History, label: "Content History" },
];

const Sidebar: React.FC = () => {
    const pathname = usePathname();

    return (
        <nav className="bg-white border-r border-gray-200 sticky top-0 left-0 h-screen w-72 flex flex-col justify-between z-50">
            <div className="flex items-center px-6 space-x-2 border-b-[1px] max-h-20 h-20">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AI</span>
                </div>

                <span className="text-xl font-bold text-gray-900">
                    ContentGen
                </span>
            </div>

            <div className="flex flex-col flex-1 px-4 py-6 justify-between">
                <div className="space-y-2">
                    {navItems.map(({ path, icon: Icon, label }) => {
                        const isActive = pathname === path;
                        return (
                            <Link
                                key={path}
                                href={path}
                                passHref
                                className={`flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium transition-colors duration-250 h-[39px] ${
                                    isActive
                                        ? "text-purple-600 bg-purple-100"
                                        : "text-gray-700 hover:text-purple-600 hover:bg-purple-100"
                                }`}
                                aria-current={isActive ? "page" : undefined}
                            >
                                <Icon className="w-[18px] h-[18px]" />
                                <span>{label}</span>
                            </Link>
                        );
                    })}
                </div>


                <div>
                <PlanCard />
                    <Link
                        href={"/settings"}
                        passHref
                        className={`flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium transition-colors duration-250 h-[39px] mt-2 ${
                            pathname === "/settings"
                                ? "text-purple-600 bg-purple-100"
                                : "text-gray-700 hover:text-purple-600 hover:bg-purple-100"
                        }`}
                        aria-current={
                            pathname === "/settings" ? "page" : undefined
                        }
                    >
                        <Settings className="w-[18px] h-[18px]" />
                        <span>User Settings</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
