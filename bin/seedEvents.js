const mongoose = require("mongoose");
require("dotenv/config");
const MONGODB = process.env.MONGODB_URI;
const Event = require("../models/Event.model");

// connect to the database
const seedEvents = async () => {
  mongoose
    .connect(MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => console.log("Connected to the database succesfully"))
    .catch((err) => console.log("Connection failed"));
  //seeding function
  try {
    const allEvents = [
     
      
    ];

    const createdEvents = await Event.create(allEvents);
    console.log(createdEvents);
  } catch (error) {
    console.log(error);
  }
  // disconnect after seeding
  mongoose.disconnect();
};

seedEvents();
