import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "XXXXXXXXXXXXXXXXXXXXXXXX" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Hello",
  });
  console.log(response.text);
}

main();