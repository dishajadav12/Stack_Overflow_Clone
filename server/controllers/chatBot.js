import mongoose from "mongoose";

export const chatBot = async (req, res) => {
    const { prompt } = req.body;
  
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        max_tokens: 512,
        temperature:0,
        prompt: prompt,
    });
  
    res.send(completion.data.choices[0].text);
  
  }