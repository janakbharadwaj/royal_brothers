require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = "8080";

app.use(express.json());

const connect = () => {
  return mongoose.connect(process.env.API_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

const bikeSchema = mongoose.Schema({
  bike_name: String,
  bike_image: String,
  hourly_rate: Number,
  kilometer_limit: Number,
  locationId: String,
});
// {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "locations",
//   required: true,
// },

const Bikes = mongoose.model("bikes", bikeSchema);

app.get("/bikes", async (req, res) => {
  const bikes = await Bikes.find({}).lean().exec();
  res.status(200).json({ data: bikes });
});

app.get("/bikes/:id", async (req, res) => {
  console.log(req.params.id);
  const bikes = await Bikes.find({ locationId: req.params.id }).lean().exec();
  const location = await LocationBikes.findById(req.params.id);
  res.status(200).json({ location, bikes });
});

//location

const locationBikesSchema = new mongoose.Schema(
  {
    location_name: { type: String, required: true },
    location_image: { type: String, required: true },
  },
  { versionKey: false }
);

const LocationBikes = mongoose.model("location", locationBikesSchema);

app.get("/location", async (req, res) => {
  const location = await LocationBikes.find({}).lean().exec();
  res.status(200).json({ data: location });
});

// app.get("/location/:id", async (req, res) => {
//   const output = await LocationBikes.findById(req.params.id)
//     .populate("bikes")
//     .lean()
//     .exec();
//   res.status(200).json({ data: output });
// });

async function start() {
  await connect();
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

start();
