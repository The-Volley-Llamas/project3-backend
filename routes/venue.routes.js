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

/*
//  POST /api/venue  -  Creates a new venue
router.post("/venue", isAuthenticated, (req, res, next) => {
  const { name, description, location, rating, image } = req.body;
 console.log(req.body);
  Venue.create({ name, description, location, rating, image })
    .then((newVenue) => {
      return 
      Event.findByIdAndUpdate(eventId, {
        $push: { venue: newVenue._id },
      });
    })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//  DELETE /api/venue/:venueId  - Deletes a specific venue by id
router.delete("/venue/:venueId", isAuthenticated, (req, res, next) => {
  const { venueId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(venueId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Venue.findByIdAndRemove(venueId)
    .then(() =>
      res.json({ message: `venue with ${venueId} is removed successfully.` })
    )
    .catch((error) => res.json(error));
});
*/
module.exports = router;
