// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required" });
    } else {
      const openai = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPEN_AI_KEY,
      });
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      });
      if (response?.data) {
        return res.status(200).json({ imageData: response?.data });
      } else {
        return res.status(400).json({ message: "Image not generated" });
      }
    }
  }
}