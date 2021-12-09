const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multerUploader = require("../config/cloudinary");

const Venue = require("../models/Venue.model");
const Event = require("../models/Event.model");


//  POST /api/tasks  -  Creates a new task
/*router.post("/tasks", (req, res, next) => {
  const { title, description, eventId } = req.body;

  Task.create({ title, description, event: eventId })
    .then((newTask) => {
      return Event.findByIdAndUpdate(eventId, {
        $push: { tasks: newTask._id },
      });
    })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});*/

//  GET /api/tasks/:taskId  - Retrieves a specific task by id
router.get("/venue/:venueId", (req, res, next) => {
  const { venueId } = req.params;

  Task.findById(venueId)
    .then((venue) => res.json(venue))
    .catch((error) => res.json(error));
});

// PUT  /api/tasks/:taskId  - Updates a specific task by id
/*router.put("/tasks/:taskId", (req, res, next) => {
  const { taskId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Task.findByIdAndUpdate(taskId, req.body, { new: true })
    .then((updatedTask) => res.json(updatedTask))
    .catch((err) => res.json(err));
});*/

//  DELETE /api/tasks/:taskId  - Deletes a specific task by id
/*router.delete("/tasks/:taskId", (req, res, next) => {
  const { taskId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Task.findByIdAndRemove(taskId)
    .then(() =>
      res.json({ message: `Task with ${taskId} is removed successfully.` })
    )
    .catch((error) => res.json(error));
});*/

module.exports = router;
