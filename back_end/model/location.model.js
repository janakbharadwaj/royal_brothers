const mongoose = require("mongoose");

const locationBikesSchema = mongoose.Schema(
  {
    location_name: { type: String, required: true },
    location_image: { type: String, required: true },
  },
  { versionKey: false }
);

module.exports = mongoose.model("location", locationBikesSchema);
