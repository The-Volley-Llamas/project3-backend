const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multerUploader = require("../config/cloudinary");

const User = require("../models/User.model");
const Event = require("../models/Event.model");
const Venue = require("../models/Venue.model");
const isAuthenticated = require("../middleware/jwt.middleware")

router.use(isAuthenticated);
/* GET users listing. */
//user will be send from the front in the req body
router.get("/profile", async (req, res, next)=> {
    console.log(req.body)
  const userPopulated = await User.findById(_id).populate("event");
  res.status(200).json({userPopulated, message: "user found"});
   .catch((error) => res.json(error))
});

router.get("/event", async (req, res) => {
  try {
    const userPopulated = await User.findById(_id).populate("event");
    res.status(200).json({ userPopulated, message:"event found"});
  }  .catch((error) => res.json(error))
});

router.post("/event/:id", async (req, res) => {
  try {
    const eventd = req.params.id;
    const user = await User.findByIdAndUpdate(_id, {
      $push: { event: eventId },
    });

    res.redirect("/users/event");
  }  .catch((error) => res.json(error));
  
});

router.post("/:id/delete", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedEvent = await User.findByIdAndUpdate(_id, {
      $pull: { event: id },
    });
    res.redirect("/event");
  }  .catch((error) => res.json(error))
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
    })
     .catch((error) => res.json(error));
  });

module.exports = router;
