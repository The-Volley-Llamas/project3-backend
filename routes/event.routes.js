const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multerUploader = require("../config/cloudinary");
const Event = require("../models/Event.model");
const Task = require("../models/Task.model");

//  POST /api/events  -  Creates a new events
router.post("/events", (req, res, next) => {
  const { title, description } = req.body;

  Event.create({ title, description, tasks: [] })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//  GET /api/events -  Retrieves all of the events
router.get("/events", (req, res, next) => {
  Project.find()
    .populate("tasks")
    .then((allEvents) => res.json(allEvents))
    .catch((err) => res.json(err));
});

//  GET /api/projects/:eventsId -  Retrieves a specific project by id
router.get("/events/:eventsId", (req, res, next) => {
  const { eventsId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(eventsId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  // Each event document has `tasks` array holding `_id`s of Task documents
  // We use .populate() method to get swap the `_id`s for the actual Task documents
  Event.findById(eventId)
    .populate("tasks")
    .then((event) => res.status(200).json(event))
    .catch((error) => res.json(error));
});

// PUT  /api/projects/:eventId  -  Updates a specific project by id
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

// DELETE  /api/events/:eventId  -  Deletes a specific project by id
router.delete("/events/:eventId", (req, res, next) => {
  const { eventId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Event.findByIdAndRemove(eventId)
    .then(() =>
      res.json({
        message: `Project with ${eventId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});

module.exports = router;
