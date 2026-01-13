import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const font = Urbanist({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-urbanist",
});

export const metadata: Metadata = {
    title: "Verzify - AI-Powered Content Generator",
    description:
        "Generate AI-powered content like blog titles and SEO-friendly YouTube titles with Verzify.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body className={`${font.className} antialiased`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
