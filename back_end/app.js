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
const locationBikesSchema=  mongoose.Schema({
  location_name:{type:String,required:true},
  location_image:{type:String,required:true},
  
} , {versionKey:false});

const LocationBikes=mongoose.model("location",locationBikesSchema)

const bikeSchema =  new mongoose.Schema({
  bike_name: String,
  bike_image: String,
  hourly_rate: Number,
  kilometer_limit: Number,
  locationId: String
});

const Bikes = mongoose.model("bikes", bikeSchema);

app.get("/bikes", async (req, res) => {
  const bikes = await Bikes.find({}).lean().exec();
  res.status(200).json({ data: bikes });
});

app.get("/bikes/:id", async (req, res) => {
  const bikes = await Bikes.find({}).lean().exec();
  res.status(200).json({ data: bikes });
});


app.get("/locations",async (req,res)=>{
  const location=await LocationBikes.find({}).lean().exec();
  res.status(200).json({data:location})
})

app.get("/location/:locationid/bikes",async (req,res)=>{
  const bikes=await Bikes.find({locationId: req.params.locationid}).lean().exec()
  const location=await LocationBikes.findById(req.params.locationid)
  res.status(200).json({data:bikes})
})
async function start() {
  await connect();
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

start();
