"use server";
import { NextResponse } from "next/server";
import { generateContent } from "@/lib/gemini";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { content_generations } from "@/lib/db/schema";
import { tryDeductCredits } from "@/lib/usage-guard";

export async function POST(req: Request) {
    const { prompt, contentType, tone } = await req.json();
    const userId = (await auth()).userId;

    if (!userId) {
        return NextResponse.json(
            { error: "User unauthorized." },
            { status: 401 }
        );
    }

    if (!prompt || prompt.trim().length === 0) {
        return NextResponse.json(
            { error: "Prompt text is required." },
            { status: 400 }
        );
    }

    const cost = Number(1);

    const result = await tryDeductCredits(userId, cost, "generate", { prompt });

    if (!result.success) {
        if (result.reason === "INSUFFICIENT_FUNDS") {
            return NextResponse.json(
                { error: "insufficient_credits" },
                { status: 402 }
            );
        }
        return NextResponse.json(
            { error: "deduction_failed", details: result },
            { status: 500 }
        );
    }

    try {
        const generatedContent = await generateContent({
            prompt: prompt.trim(),
            contentType,
            tone,
        });

        await db.insert(content_generations).values({
            userId,
            inputPrompt: prompt.trim(),
            generatedContent,
            contentType,
            tone,
        });

        return NextResponse.json({ generatedContent, status: 200 });
    } catch (error: any) {
        console.error("Gemini generation error:", error);
        return NextResponse.json(
            { error: "Failed to generate text from Gemini API." },
            { status: 500 }
        );
    }
}
