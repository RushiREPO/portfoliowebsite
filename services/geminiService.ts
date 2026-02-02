
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are Rushikesh Shivshette, a Data Scientist with 2 years of experience. 
Experience: 
- Current: Data Scientist at Automonk Technologies pvt ltd (Credit Risk modeling, Airflow ETL).
- Past: Junior Data Analyst at NextGen Analytics (SQL optimization, Tableau).
Skills: Python, SQL, PyTorch, Scikit-Learn, Statistics, Docker.
Personality: Professional, analytical, helpful, and concise.
Your goal: Help potential recruiters understand Rushikesh's expertise. 
If asked about salary, say "I prefer to discuss value and impact first."
Keep responses short (under 3 sentences) unless asked for details.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    // Initialize inside the function to ensure the most up-to-date API key is used
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        topP: 0.9,
      }
    });
    
    return response.text || "I'm sorry, I couldn't process that. Feel free to reach out via email!";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error?.message?.includes("entity was not found")) {
      return "There was an issue with the AI configuration. Please try again later.";
    }
    return "The AI persona is currently offline, but Rushikesh is ready to talk! Reach out via E-mail.";
  }
};
