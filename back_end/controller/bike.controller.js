const express = require("express");
const router = express.Router();
const Bikes = require("../model/bike.model");

router.get("/bikes", async (req, res) => {
  const bikes = await Bikes.find({}).lean().exec();
  res.status(200).json({ data: bikes });
});

router.get("/bikes/:id", async (req, res) => {
  const bikeId = req.params.id;
  const bikes = await Bikes.findById(bikeId).lean().exec();
  res.status(200).json({ data: bikes });
});

router.post("/filters/bikes", async (req, res) => {
  const arr = req.body;
  const bikes = await Bikes.find({ bike_name: { $in: arr } })
    .lean()
    .exec();
  res.status(200).json(bikes);
});

router.post("/bikes/filter/gg", async (req, res) => {
  console.log(req.body.arr);
  const bikes = await Bikes.find({ _id: { $in: req.body.arr } })
    .lean()
    .exec();
  res.status(200).json({ data: bikes });
});

module.exports = router;
