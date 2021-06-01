const mongoose = require("mongoose");

const monthsSchema = mongoose.Schema({
  bikeId: { type: mongoose.Schema.Types.ObjectId, ref: "bikes" },
  userId: String,
  pickup_date: String,
  price: Number,
  deposit: Number,
  month: Number,
  expiry: Date,
});

module.exports = mongoose.model("months", monthsSchema);
