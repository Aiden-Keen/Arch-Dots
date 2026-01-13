"use server";

import { getGeminiModel } from "./gemini.client";
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
  const model = getGeminiModel();

  const systemPrompt = SYSTEM_PROMPTS[contentType];

  const fullPrompt = `
${systemPrompt}

Tone: ${tone}

User request:
${prompt}
`;

  const result = await model.generateContent({
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

  const text = result.response.text();

  if (!text?.trim()) {
    throw new Error("Gemini returned empty output");
  }

  return text.trim();
}
