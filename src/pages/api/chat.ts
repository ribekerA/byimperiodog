import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Formato inválido de mensagens" });
    }

    const response = await openai.createChatCompletion({
      model: process.env.NEXT_PUBLIC_OPENAI_MODEL || "gpt-3.5-turbo",
      messages,
      temperature: 0.7
    });

    const completion = response.data.choices[0].message;
    return res.status(200).json({ message: completion });
  } catch (error: any) {
    console.error("Erro na API /api/chat:", error.message || error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
}
