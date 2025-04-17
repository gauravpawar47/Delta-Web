const express = require("express");
const router = express.Router({ mergeParams: true }); // 👈 Important fix
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review");
const Listing = require("../models/listing");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

// Route to create a new review
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(async (req, res) => {
    const cleanId = req.params.id.trim(); // Sanitize the ID
    const listing = await Listing.findById(cleanId);

    if (!listing) {
      return res.status(404).send("Listing not found");
    }

    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    req.flash("success", "New Review Created !");
    res.redirect(`/listings/${listing._id}`);
  })
);

// Route to delete a review
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted !");
    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;
