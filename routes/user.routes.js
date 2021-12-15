const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const fileUploader = require("../config/cloudinary.config");

const User = require("../models/User.model");
const Event = require("../models/Event.model");
const Venue = require("../models/Venue.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");

/* GET users listing. */
//user will be send from the front in the req body
// PUT  /api/profile/:userId  -  Updates profile by id
router.put("/profile/:userId", isAuthenticated, (req, res, next) => {
  const { userId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: "" });
    return;
  }
  User.findByIdAndUpdate(userId, req.body, { new: true })
    .then((updatedProfile) => res.json(updatedProfile))
    .catch((error) => res.json(error));
});

router.get("/profile/:userId/usergames", isAuthenticated, (req, res, next) => {
  const { userId } = req.params;
  console.log(userId)
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: "" });
    return;
  }
  Event.find({ players: { $in: [userId] } })
  .populate("venue players")
    .sort({ date: 1 })
    .then((userEvents) => {
      console.log("userGames", userEvents);
      res.json(userEvents);
    })
    .catch((error) => res.json(error));
});

router
  .route("/profile/edit/:id")
  .get((req, res) => {
    User.findById(req.params.id).then((user) => {
      res.render("users/edit-profile", { user, userLoggedIn: true });
    });
  })
  /*
  .post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {
    const userId = req.params.id;
    const { email, name } = req.body;
    let image;
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }
    res.json({ secure_url: req.file.path });
  });
User.findByIdAndUpdate(userId, { name, email, image })
  .then((user) => {
    res.redirect(`/users/profile`);
  })
  .catch((error) => res.json(error));
  */
// DELETE  /api/profile/:userId  -  Deletes a specific user by id
//how to delete your won account??=>
router.delete("/profile/:userId", isAuthenticated, (req, res, next) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: "" });
    return;
  }

  User.findByIdAndRemove(userId)
    .then(() =>
      res.json({
        message: `User with ${userId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});

module.exports = router;
