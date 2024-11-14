// config/database.js
const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://matej:1VQHS81sHST6THFW@chagringdb.a8jm9.mongodb.net/?retryWrites=true&w=majority&appName=ChagringDB&tls=true";
const client = new MongoClient(uri);

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

const getDb = () => client.db("chagringDB");

module.exports = { connectToDatabase, getDb };
