const express = require("express");
const router = express.Router();
require("dotenv").config();

router.post("/", async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Gemini API Error:", errorData);
      return res
        .status(500)
        .json({ reply: "Gemini API error: " + errorData.error?.message });
    }

    const data = await response.json();
    const responseText =
      data.candidates[0]?.content?.parts[0]?.text || "No response";

    res.json({ reply: responseText });
  } catch (error) {
    console.error("Gemini error:", error);
    res.status(500).json({ reply: "AI error. Try again later." });
  }
});

module.exports = router;
