const { getChargingCollection } = require("../models/ChargingSession");

const getChargingData = (req, res) => {
  const chargingData = {
    message: "Stanice 1",
    data: {
      charger_id: "home_charger_123",
      status: "Charging",
      connector_id: 1,
      connector_status: "Occupied",
      power: "7.2kW",
      current: "32A",
      voltage: "230V",
      session: {
        transaction_id: "TX_123456789",
        start_time: new Date().toISOString(),
        end_time: null,
        energy_consumed: "25kWh",
        meter_start: "15000kWh",
        meter_now: "15005.5kWh",
      },
      error: null,
      authorization: {
        status: "Accepted",
        id_tag: "RFID_67890",
      },
    },
  };
  res.json(chargingData);
};

const saveChargingData = async (userId, date, status, cost) => {
  const chargingCollection = getChargingCollection();
  const result = await chargingCollection.updateOne(
    { userId, date },
    { $set: { status, cost } },
    { upsert: true }
  );
  return result;
};

const updateChargingData = async (req, res) => {
  const { status, cost } = req.body;
  const userId = req.user.id;
  const date = new Date().toLocaleDateString("en-CA");

  try {
    const result = await saveChargingData(userId, date, status, cost);
    res.json({ message: `Status updated to ${status}`, data: result });
  } catch (error) {
    res.status(500).json({ error: "Error saving charging data" });
  }
};

module.exports = { getChargingData, updateChargingData };
