const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getUsersCollection } = require("../models/user");

const login = async (req, res) => {
  const { username, password } = req.body;
  const usersCollection = getUsersCollection();

  const user = await usersCollection.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, "your_jwt_secret", {
    expiresIn: "1h",
  });
  res.json({ token, userId: user._id });
};

module.exports = { login };
