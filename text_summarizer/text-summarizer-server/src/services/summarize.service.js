exports.generateSummary = (text) => {
  // Simple summary: first 100 characters
  return text.slice(0, 100) + (text.length > 100 ? "..." : "");
};
