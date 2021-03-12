require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { check, validationResult } = require("express-validator");
const port = "8080";
const User = require("./Auth/userSchema");

app.use(express.json());

const connect = () => {
  return mongoose.connect(process.env.API_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};
const locationBikesSchema = mongoose.Schema(
  {
    location_name: { type: String, required: true },
    location_image: { type: String, required: true },
  },
  { versionKey: false }
);

const LocationBikes = mongoose.model("location", locationBikesSchema);

const bikeSchema = new mongoose.Schema({
  bike_name: String,
  bike_image: String,
  hourly_rate: Number,
  kilometer_limit: Number,
  locationId: String,
});

const Bikes = mongoose.model("bikes", bikeSchema);

app.get("/bikes", async (req, res) => {
  const bikes = await Bikes.find({}).lean().exec();
  res.status(200).json({ data: bikes });
});

app.get("/bikes/:id", async (req, res) => {
  const bikeId = req.params.id;
  const bikes = await Bikes.findById(bikeId).lean().exec();
  res.status(200).json({ data: bikes });
});

//user auth

//signup
app.post(
  "/users/signup",
  [
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Password should consist of minimum 8 characters"
    ).isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ message: errors.errors[0].msg });
    }

    const { first_name, last_name, email, password } = req.body;

    let user = await User.findOne({
      email,
    });
    if (user) {
      return res.send({
        message: "User already exists",
      });
    }

    user = await User.create({
      first_name,
      last_name,
      email,
      password,
    });

    res.status(200).json({ message: "Success", userId: user.id });
  }
);

//login

app.post("/users/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({
    email,
  });
  if (!user) {
    return res.send({
      isAuth: false,
      message: "User does not exist",
    });
  }

  if (user.password !== password) {
    return res.send({
      isAuth: false,
      message: "Incorrect Password",
    });
  }
  res.status(200).json({ message: "Success", userData: user, isAuth: true });
});

app.get("/locations", async (req, res) => {
  const location = await LocationBikes.find({}).lean().exec();
  res.status(200).json({ data: location });
});

app.get("/locations/:searchQuery", async (req, res) => {
  const location = await LocationBikes.find({
    location_name: {
      $regex: req.params.searchQuery,
      $options: "i",
    },
  })
    .lean()
    .exec();
  res.status(200).json({ data: location });
});

app.get("/location/:locationid/bikes", async (req, res) => {
  const bikes = await Bikes.find({ locationId: req.params.locationid })
    .lean()
    .exec();
  const location = await LocationBikes.findById(req.params.locationid);
  res.status(200).json({ data: { bikes, location } });
});

app.post("/filters/bikes", async (req, res) => {
  const arr = req.body;
  const bikes = await Bikes.find({ bike_name: { $in: arr } })
    .lean()
    .exec();
  res.status(200).json(bikes);
});

//for rentals
const rentalsSchema = mongoose.Schema({
  bikeId: { type: mongoose.Schema.Types.ObjectId, ref: "bikes" },
  userId: String,
  pickup_date: Date,
  pickup_time: String,
  drop_date: Date,
  drop_time: String,
  paid: Number,
});

const Rentals = mongoose.model("rentals", rentalsSchema);

app.get("/rentals/:id", async (req, res) => {
  const rentals = await Rentals.find({ userId: req.params.id })
    .populate("bikeId")
    .exec();

  res.status(200).json(rentals);
});

app.post("/rentals", async (req, res) => {
  const rentals = await Rentals.create(req.body);
  res.status(201).json(rentals);
});

//for months subscription
const monthsSchema = mongoose.Schema({
  bikeId: { type: mongoose.Schema.Types.ObjectId, ref: "bikes" },
  userId: String,
  pickup_date: String,
  price: Number,
  deposit: Number,
  month: Number,
  expiry: Date,
});

const Months = mongoose.model("months", monthsSchema);

app.get("/months/:id", async (req, res) => {
  const months = await Months.find({ userId: req.params.id })
    .populate("bikeId")
    .exec();
  res.status(200).json(months);
});

app.post("/months", async (req, res) => {
  const months = await Months.create(req.body);
  res.status(201).json(months);
});

// Starting the server
async function start() {
  await connect();
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

start();
