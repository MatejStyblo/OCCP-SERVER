const express = require("express");
const { getUserInfo } = require("../controllers/userController");
const authenticateToken = require("../middleware/authenticate");

const router = express.Router();

router.get("/user", authenticateToken, getUserInfo);

module.exports = router;
