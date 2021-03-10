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

const bikeSchema = mongoose.Schema({
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
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { first_name, last_name, email, password } = req.body;

    let user = await User.findOne({
      email,
    });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    user = await User.create({
      first_name,
      last_name,
      email,
      password,
    });

    res
      .status(200)
      .json({ message: "Registration Successful", userId: user.id });
  }
);

//login
app.post(
  "/users/login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Invalid password").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    let user = await User.findOne({
      email,
    });
    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
      });
    }

    if (user.password !== password) {
      return res.status(400).json({
        message: "Incorrect Password",
      });
    }
    res.status(200).json({ message: "Login  Successful", userId: user.id });
  }
);

async function start() {
  await connect();
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

start();
