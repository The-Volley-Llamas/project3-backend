const mongoose = require("mongoose");
const MONGODB = process.env.MONGODB_URI;
//const Event = require("INSERT MODEL PATH");

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
    const allEvents = {
      name: "",
      email: "",
      password: "",
      profileImage: "",
    };
    const createdEvents = await Event.create(allEvents);
    console.log(allEvents);
  } catch (error) {
    console.log(error);
  }
  // disconnect after seeding
  mongoose.disconnect();
};

seedEvents();
