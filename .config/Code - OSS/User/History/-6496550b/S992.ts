"use server";

import { genAI } from "./gemini.client";
import { SYSTEM_PROMPTS, SupportedContentType } from "./prompts";

interface GenerateContentParams {
  prompt: string;
  contentType: SupportedContentType;
  tone: string;
  temperature?: number;
  maxOutputTokens?: number;
}

export async function generateContent({
  prompt,
  contentType,
  tone,
  temperature = 0.7,
  maxOutputTokens = 1024,
}: GenerateContentParams): Promise<string> {
  const systemPrompt = SYSTEM_PROMPTS[contentType];

  const fullPrompt = `
${systemPrompt}

Tone: ${tone}

User request:
${prompt}
`;

  const response = await genAI.models.generateContent({
    model: "gemini-1.5-flash",
    contents: [
      {
        role: "user",
        parts: [{ text: fullPrompt }],
      },
    ],
    generationConfig: {
      temperature,
      maxOutputTokens,
    },
  });

  const text = response.text;

  if (!text?.trim()) {
    throw new Error("Gemini returned empty output");
  }

  return text.trim();
}
