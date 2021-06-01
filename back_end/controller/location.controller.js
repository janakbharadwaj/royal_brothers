const express = require("express");
const router = express.Router();
const Location = require("../model/location.model");
const Bikes = require("../model/bike.model");

router.get("/locations", async (req, res) => {
  const location = await Location.find({}).lean().exec();
  res.status(200).json({ data: location });
});

router.get("/locations/:searchQuery", async (req, res) => {
  const location = await Location.find({
    location_name: {
      $regex: req.params.searchQuery,
      $options: "i",
    },
  })
    .lean()
    .exec();
  res.status(200).json({ data: location });
});

router.get("/location/:locationid/bikes", async (req, res) => {
  const bikes = await Bikes.find({ locationId: req.params.locationid })
    .lean()
    .exec();
  const location = await Location.findById(req.params.locationid);
  res.status(200).json({ data: { bikes, location } });
});
module.exports = router;
