// server.js
const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./config/database");

const authRoutes = require("./routes/authRoutes");
const chargingRoutes = require("./routes/chargingRoutes");
const scrapeRoutes = require("./routes/scrapeRoutes");
const userData = require("./routes/userData");

const app = express();
const port = 5000;

app.use(cors({ origin: "*" }));
app.use(express.json());

// Připojení k databázi při spuštění serveru
connectToDatabase();

// Nastavení tras
app.use("/auth", authRoutes);
app.use("/charging", chargingRoutes);
app.use("/api", scrapeRoutes);
app.use("/settings", userData);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
