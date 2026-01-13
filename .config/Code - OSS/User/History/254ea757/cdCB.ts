import { generateContent as geminiGenerate } from "./gemini.service";

export const ai = {
  generateContent: geminiGenerate,
};
