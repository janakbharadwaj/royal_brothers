const express = require("express");
const router = express.Router();
const Rentals = require("../model/rental.model");

router.get("/rentals/:id", async (req, res) => {
  const rentals = await Rentals.find({ userId: req.params.id })
    .populate("bikeId")
    .exec();

  res.status(200).json(rentals);
});

router.post("/rentals", async (req, res) => {
  const rentals = await Rentals.create(req.body);
  res.status(201).json(rentals);
});
module.exports = router;
