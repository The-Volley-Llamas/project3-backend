const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventSchema = new Schema({
  sport: String,
  numberOfPlayers: Number,
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  venue: { type: Schema.Types.ObjectId, ref: "Venue" },
  location: String,
  time: Number,
  price: Number,
});

module.exports = model("Event", eventSchema);
