"use server";
import "dotenv/config"
import { GoogleGenerativeAI } from "@google/generative-ai";

// List all supported content types for type safety
export type SupportedContentType =
  | "article"
  | "blog-post"
  | "script"
  | "social-media"
  | "product-description"
  | "email"
  | "ad-copy"
  | "newsletter"
  | "case-study"
  | "white-paper"
  | "press-release"
  | "faq"
  | "testimonial"
  | "review"
  | "headline"
  | "meta-description"
  | "instruction";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export interface GenerateContentOptions {
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
}: GenerateContentOptions): Promise<string> {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });

  const systemPrompt = getSystemPrompt(contentType);
  const fullPrompt = [
    systemPrompt,
    `User Request: ${prompt}`,
    `Tone: ${tone}`,
    `Content Type: ${contentType}`,
  ].join("\n\n");

  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: fullPrompt }] }],
      generationConfig: {
        temperature,
        maxOutputTokens,
      },
    });
    const response = await result.response;
    const text = response.text();
    if (!text || !text.trim()) {
      throw new Error("Empty response from Gemini model");
    }
    return text.trim();
  } catch (error: any) {
    console.error("Gemini content generation error:", error?.message || error);
    throw new Error(
      `Failed to generate content for type "${contentType}": ${
        error?.message || error
      }`
    );
  }
}

function getSystemPrompt(contentType: SupportedContentType): string {
  const prompts: Record<SupportedContentType, string> = {
    article:
      "You are a professional article writer. Create well-structured, informative articles with clear headings, engaging introductions, and comprehensive content.",
    "blog-post":
      "You are a skilled blog writer. Create engaging, conversational blog posts that connect with readers and provide valuable insights.",
    script:
      "You are a creative scriptwriter. Write clear, engaging scripts for video or audio, with scene directions and natural dialogue.",
    "social-media":
      "You are a social media expert. Create engaging, concise posts optimized for social media platforms with appropriate hashtags and calls-to-action.",
    email:
      "You are an email marketing specialist. Create compelling email content with strong subject lines, clear messaging, and effective calls-to-action.",
    "product-description":
      "You are a product copywriter. Create compelling product descriptions that highlight benefits, features, and drive conversions.",
    "ad-copy":
      "You are an advertising copywriter. Create persuasive ad copy that grabs attention, communicates value, and drives action.",
    newsletter:
      "You are a newsletter editor. Write informative, engaging newsletters with clear sections and valuable updates.",
    "case-study":
      "You are a business analyst. Write detailed case studies highlighting challenges, solutions, and measurable results.",
    "white-paper":
      "You are a technical writer. Create in-depth white papers that explain complex topics clearly and authoritatively.",
    "press-release":
      "You are a PR specialist. Write official press releases with a strong headline, key facts, and a professional tone.",
    faq: "You are a customer support expert. Write clear, concise answers to frequently asked questions.",
    testimonial:
      "You are a satisfied customer. Write authentic testimonials that highlight positive experiences.",
    review:
      "You are a product reviewer. Write honest, detailed reviews covering pros, cons, and recommendations.",
    headline:
      "You are a headline specialist. Write attention-grabbing, concise headlines that summarize the main idea.",
    "meta-description":
      "You are an SEO expert. Write short, compelling meta descriptions that summarize content and improve search visibility.",
    instruction:
      "You are a technical writer. Write clear, step-by-step instructions for users to follow.",
  };

  return prompts[contentType] || prompts["article"];
}
