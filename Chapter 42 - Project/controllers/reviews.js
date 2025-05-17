const Review = require("../models/review");
const Listing = require("../models/listing");

module.exports.createReview = async (req, res) => {
  const cleanId = req.params.id.trim(); // Sanitize the ID
  const listing = await Listing.findById(cleanId);

  if (!listing) {
    return res.status(404).send("Listing not found");
  }
  const newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  await newReview.save(); // First save review
  
  listing.reviews.push(newReview._id); // Then push only review._id
  await listing.save(); // Then save listing

  req.flash("success", "New Review Created !");
  res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyReview = async (req, res) => {
  const { id, reviewId } = req.params;

  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);

  req.flash("success", "Review Deleted !");
  res.redirect(`/listings/${id}`);
};
