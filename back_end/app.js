const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = "8080";

app.use(express.json());

const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/royal_brothers", {
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
});

const Bikes = mongoose.model("bikes", bikeSchema);

app.get("/bikes", async (req, res) => {
  const bikes = await Bikes.find({}).lean().exec();
  res.status(200).json({ data: bikes });
});

async function start() {
  await connect();
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

start();
