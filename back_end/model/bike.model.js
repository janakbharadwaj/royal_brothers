const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
  bike_name: String,
  bike_image: String,
  hourly_rate: Number,
  kilometer_limit: Number,
  locationId: String,
});

module.exports = mongoose.model("bikes", bikeSchema);
