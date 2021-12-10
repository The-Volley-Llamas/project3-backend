const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multerUploader = require("../config/cloudinary");

const Event = require("../models/Event.model");
const Venue = require("../models/Venue.model");
const isLoggedIn = require("../middleware/isLoggedIn");

//  POST /api/events  -  Creates a new events
router.post("/event/add", isLoggedIn, (req, res, next) => {
  const { sport, numberOfPlayers, user, venue, time, price } =
    req.body;
  console.log(req.body);

  Event.create({
    sport,
    numberOfPlayers,
    players: [user._id],
    venue: [venue._id],
    time,
    price,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//  GET /api/events -  Retrieves all of the events
router.get("/event", (req, res, next) => {
  Event.find()
    .populate("venue")
    .then((allEvents) => res.json(allEvents))
    .catch((err) => res.json(err));
});

//  GET /api/events/:eventsId -  Retrieves a specific event by id
router.get("/event/:eventId", (req, res, next) => {
  const { eventId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  // Each event document has `venues` array holding `_id`s of venue documents
  // We use .populate() method to get swap the `_id`s for the actual venue documents
  Event.findById(eventId)
    .populate("venue")
    .then((event) => res.status(200).json(event))
    .catch((error) => res.json(error));
});

// PUT  /api/events/:eventId  -  Updates a specific event by id
router.put("/events/:eventsId", (req, res, next) => {
  const { eventsId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Event.findByIdAndUpdate(eventId, req.body, { new: true })
    .then((updatedEvent) => res.json(updatedEvent))
    .catch((error) => res.json(error));
});

// DELETE  /api/events/:eventId  -  Deletes a specific event by id
router.delete("/events/:eventId", (req, res, next) => {
  const { eventId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Event.findByIdAndRemove(eventId)
    .then(() =>
      res.json({
        message: `Event with ${eventId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});

module.exports = router;
