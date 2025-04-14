const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderLust";
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

// Database Connection
async function main() {
  await mongoose.connect(MONGO_URL);
}
main()
  .then(() => console.log("Connected To Database"))
  .catch((err) => console.log("DB Connection Error:", err));

// Middleware & Configurations
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// Root Route
app.get("/", (req, res) => {
  res.send("Hi, I'm Root");
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

// Adding Express Error
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found !"));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something Went Wrong" } = err;
  res.status(statusCode).render("error.ejs", { err });
});

// Start Server
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
