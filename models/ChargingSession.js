const { getDb } = require("../config/database");

const getChargingCollection = () => getDb().collection("charging");

module.exports = { getChargingCollection };
