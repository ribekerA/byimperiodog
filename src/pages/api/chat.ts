import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.message }],
    });

    res.status(200).json({ result: completion.choices[0].message.content });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Erro desconhecido" });
  }
}
