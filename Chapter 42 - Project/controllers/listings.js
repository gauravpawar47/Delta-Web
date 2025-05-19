const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

// Index Function
module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
};

// New Function
module.exports.renderNewForm = (req, res) => {
  res.render("./listings/new.ejs");
};

// Show Function
module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Requested Listing Does Not Exist");
    res.redirect("/listings");
  }

  console.log(listing);
  res.render("./listings/show.ejs", { listing });
};

// Create Function
module.exports.createListing = async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  newListing.geometry = response.body.features[0].geometry;
  
  let savedListing = await newListing.save();

  console.log(savedListing);
  req.flash("success", "New Listing Created !");
  res.redirect("/listings");
};

// Edit Function
module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Requested Listing Does Not Exist");
    res.redirect("/listings");
  }

  let ogImageURL = listing.image.url;
  ogImageURL = ogImageURL.replace("/upload", "/upload/h_300,w_250");
  res.render("./listings/edit.ejs", { listing, ogImageURL });
};

// Update Function
module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file != "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing Updated !");
  res.redirect(`/listings/${id}`);
};

// Destroy Function
module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  if (!deletedListing) {
    return res.status(404).send("Listing not found");
  }

  req.flash("success", "Listing Deleted !");
  res.redirect("/listings");
};
