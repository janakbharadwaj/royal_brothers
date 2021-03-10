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

//Bikes table

const bikeSchema = mongoose.Schema({
  bike_name: String,
  bike_image: String,
  hourly_rate: Number,
  kilometer_limit: Number,
  locationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "locations",
    required: true,
  },
});

const Bikes = mongoose.model("bikes", bikeSchema);

app.get("/bikes", async (req, res) => {
  const bikes = await Bikes.find({}).lean().exec();
  res.status(200).json({ data: bikes });
});

//users
const userSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
});

const Users = mongoose.model("users", userSchema);

app.get("/users", async (req, res) => {
  const user = await Users.find({}).lean().exec();
  res.status(200).json({ data: user });
});

//locations

const locationSchema = new mongoose.Schema(
  {
    location_name: { type: String, required: true },
    location_image: { type: String, required: true },
    bikes: [
      {
        isEngaged: Boolean,
        bikeid: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "bikes",
          required: true,
        },
      },
    ],
  },
  { versionKey: false }
);

const Locations = mongoose.model("location", locationSchema);

app.get("/location", async (req, res) => {
  const location = await Locations.find({}).lean().exec();
  res.status(200).json({ data: location });
});

async function start() {
  await connect();
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

start();
