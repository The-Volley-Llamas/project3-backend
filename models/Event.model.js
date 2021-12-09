const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventSchema = new Schema({
  sport: String,
  numberOfPlayers: Number,
  players: [{ type: Schema.Types.ObjectId, ref: "User"}],
  venue: { type: Schema.Types.ObjectId, ref: "Venue"},
  time: String,
  price: Number,
});

module.exports = model("Event", eventSchema);
