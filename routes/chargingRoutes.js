const express = require("express");
const authenticateToken = require("../middleware/authenticate");
const {
  getChargingData,
  updateChargingData,
} = require("../controllers/chargingController");

const router = express.Router();

router.get("/data", authenticateToken, getChargingData);
router.post("/data", authenticateToken, updateChargingData);

module.exports = router;
