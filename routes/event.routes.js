const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const fileUploader = require("../config/cloudinary.config");
const User = require("../models/User.model");
const Event = require("../models/Event.model");
const Venue = require("../models/Venue.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");



//  POST /api/events  -  Creates a new events
router.post("/event/add", isAuthenticated, (req, res, next) => {
const { formState: {sport, numberOfPlayers, venue, date, time, price }, user:{_id}} = req.body;

  Event.create({
    sport,
    numberOfPlayers,
    players: [_id],
    venue: venue,
    date,
    time,
    price,
  })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => res.json(err));
});

//  GET /api/events -  Retrieves all of the events
router.get("/event", (req, res, next) => {
  Event.find()
    .sort({date: 1}).populate("venue")
    .then((allEvents) => {
      res.json(allEvents)}
      )
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
   .populate("players")
    .then((event) => res.status(200).json(event))
    .catch((error) => res.json(error));
});

// PUT  /api/events/:eventId  -  Updates a specific event by id
router.put("/event/:eventId", (req, res, next) => {
  const { eventId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Event.findByIdAndUpdate(eventId, req.body, { new: true })

    .then((updatedEvent) => res.json(updatedEvent))
    .catch((error) => res.json(error));
});

router.put("/join/:eventId/:userId", isAuthenticated, (req, res, next) => {
  const { eventId, userId } = req.params;
  if (
    !mongoose.Types.ObjectId.isValid(eventId) ||
    !mongoose.Types.ObjectId.isValid(userId)
  ) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Event.findById(eventId)
    .then((response) => {
      if (response.players.includes(userId)) {
        res.status(200).json({ message: "Already signed up!" });
      } else if(response.players.length < response.numberOfPlayers) {
        return Event.findByIdAndUpdate(
          eventId,
          { $addToSet: { players: userId } },
          { new: true }
        )
          .then((updatedEvent) => res.json({updatedEvent, message: "✅ You have joined the game!"}))
          .catch((error) => res.status(500).json(error));
      }
    })
    .catch((error) => res.status(500).json(error));
});


router.put("/remove/:eventId/:userId", isAuthenticated, (req, res, next) => {
  const { eventId, userId } = req.params;
  if (
    !mongoose.Types.ObjectId.isValid(eventId) ||
    !mongoose.Types.ObjectId.isValid(userId)
  ) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Event.findByIdAndUpdate(
          eventId,
          { $pull: { players: userId } },
          { new: true }
        )
          .then((updatedEvent) =>
            res.json({ updatedEvent, message: "You have been removed from the game!" })
          )
          .catch((error) => res.status(500).json(error));
      }
);


module.exports = router;
