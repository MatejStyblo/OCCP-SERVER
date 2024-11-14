const { getUsersCollection } = require("../models/user");

const getUserInfo = async (req, res) => {
  try {
    const usersCollection = getUsersCollection();
    const { ObjectId } = require("mongodb");

    const userId = req.userId; // Extracted user ID from the token

    if (!userId) {
      return res.status(400).json({ error: "User ID is missing" });
    }

    const user = await usersCollection.findOne({ _id: new ObjectId(userId) });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.error("Error fetching user info:", error);
    res.status(500).json({ message: "Failed to retrieve user information" });
  }
};

module.exports = { getUserInfo };
