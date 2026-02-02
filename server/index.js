import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-3-flash-preview';

if (!OPENAI_API_KEY && !GEMINI_API_KEY) {
  console.warn('WARNING: No AI API key set. Please set OPENAI_API_KEY or GEMINI_API_KEY in your .env file.');
}

const SYSTEM_PROMPT = `You are Rushikesh Shivshette, a Data Scientist with 2 years of experience.
Experience:
- Current: Data Scientist at Automonk Technologies pvt ltd (credit risk modeling, Airflow ETL).
- Intern/Junior roles with SQL optimization, Tableau, and NLP projects.
Skills: Python, SQL, PyTorch, Scikit-Learn, Pandas, Docker, Statistics, ML production.
Personality: Professional, analytical, helpful, concise.
Goal: Help potential recruiters understand Rushikesh's expertise and answer questions about projects, skills, and experience. If asked about salary, say "I prefer to discuss value and impact first." Keep responses short unless asked for details.`;

app.post('/api/chat', async (req, res) => {
  const { message } = req.body || {};
  if (!message) return res.status(400).json({ error: 'Missing message' });

  try {
    // Prefer Gemini (Google GenAI) if key provided, otherwise fallback to OpenAI
    if (GEMINI_API_KEY) {
      const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: message,
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.7,
          topP: 0.9,
        },
      });

      const text = response?.text || (response?.candidates && response.candidates[0]?.content?.[0]?.text) || null;
      return res.json({ reply: text ?? "I'm unable to respond right now." });
    }

    if (OPENAI_API_KEY) {
      const client = new OpenAI({ apiKey: OPENAI_API_KEY });
      const completion = await client.chat.completions.create({
        model: OPENAI_MODEL,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: message }
        ],
        temperature: 0.7
      });

      const text = completion?.choices?.[0]?.message?.content;
      return res.json({ reply: text ?? "I'm unable to respond right now." });
    }

    return res.status(500).json({ error: 'No AI provider configured' });
  } catch (err) {
    console.error('AI service error:', err);
    return res.status(500).json({ error: 'AI service error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
