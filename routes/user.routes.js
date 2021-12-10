const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multerUploader = require("../config/cloudinary");

const User = require("../models/User.model");
const Event = require("../models/Event.model");
const Venue = require("../models/Venue.model");
const isLoggedIn = require("../middleware/isLoggedIn");

const multerUploader = require("../config/cloudinary");

router.use(isLoggedIn);
/* GET users listing. */
router.get("/profile", async function (req, res, next) {
  const { _id } = req.session.loggedInUser;
  const userPopulated = await User.findById(_id).populate("event");
  res.render("users/profile", { userPopulated, userLoggedIn: true });
});

router.get("/event", async (req, res) => {
  try {
    const { _id } = req.session.loggedInUser;
    const userPopulated = await User.findById(_id).populate("event");
    res.render("users/event", { userPopulated, userLoggedIn: true });
  } catch (err) {
    (err) => console.log(err);
  }
});
router.post("/event/:id", async (req, res) => {
  try {
    const eventd = req.params.id;
    const { _id } = req.session.loggedInUser;
    const user = await User.findByIdAndUpdate(_id, {
      $push: { event: eventId },
    });

    res.redirect("/users/event");
  } catch (err) {
    console.log(err);
  }
});

router.post("/:id/delete", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { _id } = req.session.loggedInUser;
    const deletedEvent = await User.findByIdAndUpdate(_id, {
      $pull: { event: id },
    });
    res.redirect("/event");
  } catch (err) {
    console.log(err);
  }
});
router
  .route("/edit/:id")
  .get((req, res) => {
    User.findById(req.params.id).then((user) => {
      res.render("users/edit-profile", { user, userLoggedIn: true });
    });
  })
  .post(multerUploader.single("image"), (req, res) => {
    const userId = req.params.id;
    const { email, name } = req.body;
    let image;
    if (req.file) {
      image = req.file.path;
    } else {
      image =
        "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";
    }
    User.findByIdAndUpdate(userId, { name, email, image }).then((user) => {
      res.redirect(`/users/profile`);
    });
  });

module.exports = router;
