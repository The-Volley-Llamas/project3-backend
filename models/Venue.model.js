const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const venueSchema = new Schema({
  name: String,
  description: String,
  location: {type: {type: String, default: "Point"}, coordinates: Array},
  rating: Number,
  image: {
    type: String,
    default: "https://i.redd.it/vzr4p6prv3801.jpg",
  },
});

module.exports = model("Venue", venueSchema);


