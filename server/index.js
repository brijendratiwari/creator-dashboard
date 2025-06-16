const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAI = require('openai');


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/generate', async (req, res) => {
console.log("Received request:", req.body);
  const { topic, niche } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", 
      messages: [
        {
          role: "user",
          content: `You are a content strategist. Suggest one trending Instagram reel idea for a creator in the ${niche} niche. Include a caption, 5 relevant hashtags, and a strong opening hook. The topic is: ${topic}`,
        },
      ],
    });

    res.json({ result: completion.choices[0].message.content });
  } catch (err) {
    
    res.status(500).json({ error: "Failed to generate content." });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
