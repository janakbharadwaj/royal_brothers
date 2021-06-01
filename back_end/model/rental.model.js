const mongoose = require("mongoose");

const rentalsSchema = mongoose.Schema({
  bikeId: { type: mongoose.Schema.Types.ObjectId, ref: "bikes" },
  userId: String,
  pickup_date: Date,
  pickup_time: String,
  drop_date: Date,
  drop_time: String,
  paid: Number,
});

module.exports = mongoose.model("rentals", rentalsSchema);
