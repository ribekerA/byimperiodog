import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { message } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4", // ou "gpt-3.5-turbo"
      messages: [{ role: "user", content: message }],
    });

    return res.status(200).json({ result: completion.choices[0].message.content });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || "Erro ao conectar com OpenAI" });
  }
}
