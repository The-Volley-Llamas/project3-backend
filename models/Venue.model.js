const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const venueSchema = new Schema({
  event: [{ type: Schema.Types.ObjectId, ref: "Event" }],
  description: String,
  location: String,
  rating: Number,
  image: {
    type: String,
    default: "https://.jpg",
  },
});

module.exports = model("Venue", venueSchema);
