const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const config = require("./config");
const summarizeRoutes = require("./routes/summarize.routes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/summarize", summarizeRoutes);

// Error handling
app.use(errorHandler);

// Start server
app.listen(config.PORT, () => {
  console.log(`Server running on http://localhost:${config.PORT}`);
});
