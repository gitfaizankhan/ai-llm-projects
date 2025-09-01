const express = require("express");
const router = express.Router();
const summarizeController = require("../controllers/summarize.controller");

router.post("/", summarizeController.summarizeText);

module.exports = router;
