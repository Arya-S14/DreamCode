const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/generate-code", async (req, res) => {
  const { prompt, language } = req.body;

  if (!prompt || !language) {
    return res.status(400).json({ error: "Prompt and language are required" });
  }

  const fullPrompt = `Write ${language} code for: ${prompt}`;

  try {
    const response = await axios.post(
      "https://dreamcode-8ezd.onrender.com/api/generate",
      {
        model: "deepseek-coder",
        prompt: fullPrompt,
        stream: false
      },
      {
        headers: { "Content-Type": "application/json" },
        timeout: 90000
      }
    );

    res.json({ code: response.data.response });
  } catch (error) {
    console.error("Ollama API Error:", error.response?.data || error.message || error);

    res.status(500).json({
      error: "Failed to fetch code from Ollama.",
      details: error.response?.data || error.message
    });
  }
});

const PORT = 5000;
const publicURL = 'https://dreamcode-8ezd.onrender.com';
app.listen(PORT, () => {
  console.log(`Server running at ${publicURL}`);
});
