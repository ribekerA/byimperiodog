// src/pages/api/chat.ts
import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Certifique-se de que essa variável está no .env.local
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Mensagem ausente." });
  }

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4", // ou "gpt-3.5-turbo"
      messages: [{ role: "user", content: message }],
    });

    const reply = chatCompletion.choices[0].message.content;
    res.status(200).json({ reply });
  } catch (error: any) {
    console.error("Erro na API OpenAI:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}
