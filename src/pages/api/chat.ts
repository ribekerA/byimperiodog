import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4", // ou gpt-3.5-turbo
      messages: [{ role: "user", content: message }],
    });

    return res.status(200).json({ result: chatCompletion.choices[0].message.content });
  } catch (error: any) {
    console.error("Erro na OpenAI:", error);
    return res.status(500).json({ error: error?.message || "Erro interno do servidor" });
  }
}
