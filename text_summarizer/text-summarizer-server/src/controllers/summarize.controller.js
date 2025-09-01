const summarizeService = require("../services/summarize.service");
const logger = require("../utils/logger");

exports.summarizeText = (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  const summary = summarizeService.generateSummary(text);

  logger.log(`Text summarized: ${text.substring(0, 30)}...`);

  res.json({ summary });
};
