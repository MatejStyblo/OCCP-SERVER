const { getDb } = require("../config/database");

const getUsersCollection = () => getDb().collection("users");

module.exports = { getUsersCollection };
