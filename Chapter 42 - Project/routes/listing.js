const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(listingController.index)) // Index Route - Show all listings
  // .post(
  //   isLoggedIn,
  //   validateListing,
  //   wrapAsync(listingController.createListing)
  // ); // Create Route - Add new listing
  .post(upload.single("listing[image]"), (req, res) => {
    res.send(req.file);
  });

// ✅ FIXED New Route (Avoids Conflict)
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
  .route("/:id")
  .put(
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing)
  ) // Update Route - Update listing details

  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing)) // Delete Route - Delete a listing

  .get(wrapAsync(listingController.showListing)); // Show Route - Show details of a listing

// Edit Route - Show edit form
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
