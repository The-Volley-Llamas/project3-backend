const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multerUploader = require("../config/cloudinary");

const User = require("../models/User.model");
const Event = require("../models/Event.model");
const Venue = require("../models/Venue.model");
const isAuthenticated = require("../middleware/jwt.middleware")


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

  // DELETE  /api/profile/:userId  -  Deletes a specific user by id
  //how to delete your won account??=>
router.delete("/profile/:userId", isAuthenticated, (req, res, next) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: "" });
    return;
  }

  Event.findByIdAndRemove(userId)
    .then(() =>
      res.json({
        message: `User with ${userId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});


module.exports = router;


/*router
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
*/