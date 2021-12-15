const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const fileUploader = require("../config/cloudinary.config");

const Venue = require("../models/Venue.model");
const Event = require("../models/Event.model");
//const isAuthenticated = require("../middleware/jwt.middleware");

//  GET /api/venue -  Retrieves all of the venues
router.get("/venue", (req, res, next) => {
  Venue.find()
    .populate("venue")
    .then((allVenues) => res.json(allVenues))
    .catch((err) => res.json(err));
});

//  GET /api/venue/:venueId  - Retrieves a specific venue by id
router.get("/venue/:venueId", (req, res, next) => {
  const { venueId } = req.params;

  Venue.findById(venueId)
    .then((venue) => res.json(venue))
    .catch((error) => res.json(error));
});

// PUT  /api/venue/:venueId  - Updates a specific venue by id
router.put("/venue/:venueId", (req, res, next) => {
  const { venueId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(venueId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Venue.findByIdAndUpdate(venueId, req.body, { new: true })
    .then((updateVenue) => res.json(updatedVenue))
    .catch((err) => res.json(err));
});

module.exports = router;
