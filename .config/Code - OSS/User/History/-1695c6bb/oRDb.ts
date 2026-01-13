"use server";
import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyBEeMbkeJSfEdpSNGhtOy5hmvAt_RgRkBg";

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is missing");
}

export const genAI = new GoogleGenAI({ apiKey });
