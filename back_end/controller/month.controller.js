const express = require("express");
const router = express.Router();
const Months = require("../model/month.model");

router.get("/months/:id", async (req, res) => {
  const months = await Months.find({ userId: req.params.id })
    .populate("bikeId")
    .exec();
  res.status(200).json(months);
});

router.post("/months", async (req, res) => {
  const months = await Months.create(req.body);
  res.status(201).json(months);
});
module.exports = router;
