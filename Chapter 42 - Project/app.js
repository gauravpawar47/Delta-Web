const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const Review = require("./models/review");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderLust";

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

// ✅ FIXED New Route (Avoids Conflict)
app.get("/listings/new", (req, res) => {
  res.render("./listings/new.ejs");
});

// Index Route - Show all listings
app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
  })
);

// Validation for Schema (Middlewares) - Listings
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, error);
  } else {
    next();
  }
};

// Validation for Schema (Middlewares) - Reviews
const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Create Route - Add new listing
app.post(
  "/listings",
  validateListing,
  wrapAsync(async (req, res, next) => {
    let result = listingSchema.validate(req.body);
    if (result.error) {
      throw new ExpressError(400, result.error);
    }

    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  })
);

// Show Route - Show details of a listing
app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
      return res.status(404).send("Listing not found");
    }
    res.render("./listings/show.ejs", { listing });
  })
);

// Edit Route - Show edit form
app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).send("Listing not found");
    }
    res.render("./listings/edit.ejs", { listing });
  })
);

// Update Route - Update listing details
app.put(
  "/listings/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  })
);

// Delete Route - Delete a listing
app.delete(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    if (!deletedListing) {
      return res.status(404).send("Listing not found");
    }
    res.redirect("/listings");
  })
);

// Reviews - Post Route
app.post(
  "/listings/:id/reviews",
  validateReview,
  wrapAsync(async (req, res) => {
    const cleanId = req.params.id.trim(); // ← sanitize the ID
    let listing = await Listing.findById(cleanId);

    if (!listing) {
      return res.status(404).send("Listing not found");
    }

    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    console.log("New Review Saved !");
    res.redirect(`/listings/${listing._id}`);
  })
);

// Reviews - Delete Route
app.delete(
  "/listings/:id/reviews/:reviewId",
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
  })
);

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
