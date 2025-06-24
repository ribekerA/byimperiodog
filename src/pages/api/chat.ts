import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  console.warn("⚠️ OPENAI_API_KEY não está definida.");
}

const openai = openaiApiKey ? new OpenAI({ apiKey: openaiApiKey }) : null;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!openai) {
    return res.status(500).json({ error: "OPENAI_API_KEY não configurada" });
  }

  const { message } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    res.status(200).json({ result: completion.choices[0].message.content });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Erro desconhecido" });
  }
}
