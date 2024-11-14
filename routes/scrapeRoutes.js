const express = require("express");
const authenticateToken = require("../middleware/authenticate");
const { scrapeData } = require("../controllers/scrapeController");

const router = express.Router();

router.get("/scrape", async (req, res) => {
  // Přidání asynchronní funkce
  try {
    const data = await scrapeData(); // Volání funkce scrapeData
    res.json(data); // Odeslání výsledku jako JSON odpověď
  } catch (error) {
    console.error("Error scraping data:", error);
    res.status(500).json({ error: "Failed to scrape data" });
  }
});

module.exports = router;
