import OpenAI from "openai";
import React from "react";

export async function POST(request) {
  const req = await request.json();
  const messages = req.messages;
  console.log(messages);

  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: req.userMessage }], // tum yazisma degil, sadece tek soru
      model: "gpt-3.5-turbo-16k",
    });
    return Response.json({ status: "success", completion: completion });
  } catch (error) {
    return Response.json({ status: "error", message: error.message });
  }
}
