const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventSchema = new Schema({
  sport: String,
  numberOfPlayers: Number,
  players: [{ type: Schema.Types.ObjectId, ref: "Players" }],
  venue: [{ type: Schema.Types.ObjectId, ref: "Venue" }]
  location: String,
  time: Number,
  price: Number,
});

module.exports = model("Event", eventSchema);
module.exports = Event;