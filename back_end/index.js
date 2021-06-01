require("dotenv").config();
const express = require("express");
const app = express();
const connect = require("./config/db");
const cors = require("cors");
const port = process.env.PORT || 8080;

console.log(process.env.PORT, "PORT");

//parsing json
app.use(express.json());

//cors
app.use(cors());

//controllers
const userRouter = require("./controller/user.controller");
const bikeRouter = require("./controller/bike.controller");
const locationRouter = require("./controller/location.controller");
const rentalRouter = require("./controller/rental.controller");
const monthRouter = require("./controller/month.controller");

//routes
app.use("/", userRouter);
app.use("/", bikeRouter);
app.use("/", locationRouter);
app.use("/", rentalRouter);
app.use("/", monthRouter);

app.get("/", async (req, res) => {
  res.send("Welcome to the server");
});

async function start() {
  await connect();
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

start();
