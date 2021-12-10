const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const venueSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String, default: "Point" }, coordinates: Array },
  rating: Number,
  image: {
    type: String,
    default:
      "https://deportesurbanos.com/wp-content/uploads/2020/05/pista-multideportiva-antivandalica.jpg",
  },
});

module.exports = model("Venue", venueSchema);
