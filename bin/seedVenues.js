const mongoose = require("mongoose");
require("dotenv/config");
const MONGODB = process.env.MONGODB_URI;
const Venue = require("../models/Venue.model");

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
    const allVenues = [
      {
        event: ["61b21425f633352e8c148414", "61b21425f633352e8c148415"],
        description: "Artificial surface",
        location: "Carrer de Margarit 58, 08004",
        rating: 4.5,
        image:
          "https://lh3.googleusercontent.com/proxy/RtIvYzyAhS6staD8A8omCf8TCXGPU7xJp-OxOQlvcCXP9bKljvFRYrC4VKits23OdgmtqWIAFgZXoSAD_SbC5taceH2aASwAq2BBOEhlQO-_DZarxsYDlycNiST9",
      },
      {
        event: ["61b21425f633352e8c148415"],
        description: "Natural grass",
        location: "Carrer del Dr.Aiguader 58, 08003",
        rating: 4.1,
        image:
          "https://www.barcelonaaldia.com/wp-content/uploads/2020/12/baro_viver_campo.jpg",
      },
      {
        event: ["61b21425f633352e8c148416"],
        description: "Artificial surface",
        location: "Avenida del Litoral 85, 08005",
        rating: 5.0,
        image:
          "https://lh5.googleusercontent.com/p/AF1QipP-_4ygOU_oQWhN6UE0pzk8gYQQD7SI-fMq-dHm=w1080-k-no",
      },
    ];
    const createdEvents = await Venue.create(allVenues);
    console.log(allVenues);
  } catch (error) {
    console.log(error);
  }
  // disconnect after seeding
  mongoose.disconnect();
};

seedVenues();
