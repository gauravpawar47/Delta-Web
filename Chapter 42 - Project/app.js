const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderLust";
async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("Connected To Database");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hi I'm Root");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Index Route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
});

// Show Route

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My Home",
//     description: "By The Beach",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India",
//   });

//   await sampleListing.save();
//   console.log("Sample Was Saved");
//   res.send("Sample Test Was Saved");
// });

app.listen(port, () => {
  console.log("App is Running");
});
