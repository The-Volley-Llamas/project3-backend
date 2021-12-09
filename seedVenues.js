const mongoose = require("mongoose");
const MONGODB = process.env.MONGODB_URI;
//const Event = require("INSERT MODEL PATH");

// connect to the database
const seedVenues = async () => {
  mongoose
    .connect(MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => console.log("Connected to the database succesfully"))
    .catch((err) => console.log("Connection failed"));
  //seeding function
  try {
    const allVenues = {
      event: ["objectId of populated events"],
      location: "",
      rating: "",
      type: "",
    };
    const createdEvents = await Venue.create(allVenues);
    console.log(allVenues);
  } catch (error) {
    console.log(error);
  }
  // disconnect after seeding
  mongoose.disconnect();
};

seedVenues();
