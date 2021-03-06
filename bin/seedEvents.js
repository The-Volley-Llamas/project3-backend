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
      {
        // FOOTBALL EVENTS
        sport: "Football",
        numberOfPlayers: 14,
        players: [],
        date: "23/12/2021",
        time: "17:00",
        price: 5,
      },
      {
        sport: "Football",
        numberOfPlayers: 10,
        players: [],
        date: "23/12/2021",
        time: "20:00",
        price: 7.5,
      },
      {
        sport: "Football",
        numberOfPlayers: 22,
        players: [],
        date: "23/12/2021",
        time: "20:00",
        price: 5,
      },
      {
        sport: "Football",
        numberOfPlayers: 10,
        players: [],
        date: "24/12/2021",
        time: "17:00",
        price: 5,
      },
      {
        sport: "Football",
        numberOfPlayers: 10,
        players: [],
        date: "24/12/2021",
        time: "20:00",
        price: 7.5,
      },
      {
        sport: "Football",
        numberOfPlayers: 14,
        players: [],
        date: "24/12/2021",
        time: "20:00",
        price: 10,
      },

      {
        sport: "Football",
        numberOfPlayers: 10,
        players: [],
        date: "27/12/2021",
        time: "18:00",
        price: 5,
      },

      {
        sport: "Football",
        numberOfPlayers: 14,
        players: [],
        date: "29/12/2021",
        time: "12:00",
        price: 8,
      },
      {
        sport: "Football",
        numberOfPlayers: 14,
        players: [],
        date: "29/12/2021",
        time: "12:00",
        price: 8,
      },
      {
        sport: "Football",
        numberOfPlayers: 14,
        players: [],
        date: "29/12/2021",
        time: "12:00",
        price: 8,
      },

      //END

      {
        //BASKETBALL EVENTS
        sport: "Basketball",
        numberOfPlayers: 6,
        players: [],
        date: "23/12/2021",
        time: "17:00",
        price: 5,
      },
      {
        sport: "Basketball",
        numberOfPlayers: 4,
        players: [],
        date: "23/12/2021",
        time: "18:00",
        price: 7.5,
      },
      {
        sport: "Basketball",
        numberOfPlayers: 10,
        players: [],
        date: "23/12/2021",
        time: "19:30",
        price: 5,
      },
      {
        sport: "Basketball",
        numberOfPlayers: 10,
        players: [],
        date: "24/12/2021",
        time: "17:00",
        price: 5,
      },
      {
        sport: "Basketball",
        numberOfPlayers: 10,
        players: [],
        date: "24/12/2021",
        time: "20:00",
        price: 7.5,
      },
      {
        sport: "Basketball",
        numberOfPlayers: 14,
        players: [],
        date: "24/12/2021",
        time: "20:00",
        price: 10,
      },

      {
        sport: "Basketball",
        numberOfPlayers: 10,
        players: [],
        date: "27/12/2021",
        time: "18:00",
        price: 5,
      },

      {
        sport: "Basketball",
        numberOfPlayers: 4,
        players: [],
        date: "29/12/2021",
        time: "09:00",
        price: 5,
      },
      {
        sport: "Basketball",
        numberOfPlayers: 12,
        players: [],
        date: "29/12/2021",
        time: "10:00",
        price: 5,
      },
      {
        sport: "Basketball",
        numberOfPlayers: 10,
        players: [],
        date: "29/12/2021",
        time: "12:00",
        price: 8,
      },

      //END

      {
        // BEACH VOLLEYBALL EVENTS
        sport: "Beach Volleyball",
        numberOfPlayers: 6,
        players: [],
        date: "23/12/2021",
        time: "17:00",
        price: 5,
      },
      {
        sport: "Beach Volleyball",
        numberOfPlayers: 4,
        players: [],
        date: "23/12/2021",
        time: "18:00",
        price: 7.5,
      },
      {
        sport: "Beach Volleyball",
        numberOfPlayers: 10,
        players: [],
        date: "23/12/2021",
        time: "19:30",
        price: 5,
      },
      {
        sport: "Beach Volleyball",
        numberOfPlayers: 10,
        players: [],
        date: "24/12/2021",
        time: "17:00",
        price: 5,
      },
      {
        sport: "Beach Volleyball",
        numberOfPlayers: 10,
        players: [],
        date: "24/12/2021",
        time: "20:00",
        price: 7.5,
      },
      {
        sport: "Beach Volleyball",
        numberOfPlayers: 10,
        players: [],
        date: "24/12/2021",
        time: "20:00",
        price: 5,
      },

      {
        sport: "Beach Volleyball",
        numberOfPlayers: 10,
        players: [],
        date: "27/12/2021",
        time: "18:00",
        price: 5,
      },

      {
        sport: "Beach Volleyball",
        numberOfPlayers: 4,
        players: [],
        date: "29/12/2021",
        time: "09:00",
        price: 5,
      },
      {
        sport: "Beach Volleyball",
        numberOfPlayers: 12,
        players: [],
        date: "29/12/2021",
        time: "10:00",
        price: 5,
      },
      {
        sport: "Beach Volleyball",
        numberOfPlayers: 10,
        players: [],
        date: "29/12/2021",
        time: "12:00",
        price: 8,
      },

      // END

      {
        // TENNIS EVENTS
        sport: "Tennis",
        numberOfPlayers: 2,
        players: [],
        date: "23/12/2021",
        time: "17:00",
        price: 5,
      },
      {
        sport: "Tennis",
        numberOfPlayers: 4,
        players: [],
        date: "23/12/2021",
        time: "18:00",
        price: 7.5,
      },
      {
        sport: "Tennis",
        numberOfPlayers: 2,
        players: [],
        date: "23/12/2021",
        time: "19:30",
        price: 5,
      },
      {
        sport: "Tennis",
        numberOfPlayers: 2,
        players: [],
        date: "24/12/2021",
        time: "17:00",
        price: 5,
      },
      {
        sport: "Tennis",
        numberOfPlayers: 4,
        players: [],
        date: "24/12/2021",
        time: "20:00",
        price: 7.5,
      },
      {
        sport: "Tennis",
        numberOfPlayers: 2,
        players: [],
        date: "24/12/2021",
        time: "20:00",
        price: 10,
      },

      {
        sport: "Tennis",
        numberOfPlayers: 2,
        players: [],
        date: "27/12/2021",
        time: "18:00",
        price: 5,
      },

      {
        sport: "Tennis",
        numberOfPlayers: 4,
        players: [],
        date: "29/12/2021",
        time: "09:00",
        price: 5,
      },
      {
        sport: "Tennis",
        numberOfPlayers: 2,
        players: [],
        date: "29/12/2021",
        time: "10:00",
        price: 5,
      },
      {
        sport: "Tennis",
        numberOfPlayers: 2,
        players: [],
        date: "29/12/2021",
        time: "12:00",
        price: 8,
      },

      // END

      {
        // TABLE-TENNIS EVENTS
        sport: "Table-tennis",
        numberOfPlayers: 2,
        players: [],
        date: "23/12/2021",
        time: "17:00",
        price: 5,
      },
      {
        sport: "Table-tennis",
        numberOfPlayers: 4,
        players: [],
        date: "23/12/2021",
        time: "18:00",
        price: 7.5,
      },
      {
        sport: "Table-tennis",
        numberOfPlayers: 2,
        players: [],
        date: "23/12/2021",
        time: "19:30",
        price: 5,
      },
      {
        sport: "Table-tennis",
        numberOfPlayers: 2,
        players: [],
        date: "24/12/2021",
        time: "17:00",
        price: 5,
      },
      {
        sport: "Table-tennis",
        numberOfPlayers: 4,
        players: [],
        date: "24/12/2021",
        time: "20:00",
        price: 7.5,
      },
      {
        sport: "Table-tennis",
        numberOfPlayers: 2,
        players: [],
        date: "24/12/2021",
        time: "20:00",
        price: 10,
      },

      {
        sport: "Table-tennis",
        numberOfPlayers: 2,
        players: [],
        date: "27/12/2021",
        time: "18:00",
        price: 5,
      },

      {
        sport: "Table-tennis",
        numberOfPlayers: 4,
        players: [],
        date: "29/12/2021",
        time: "09:00",
        price: 5,
      },
      {
        sport: "Table-tennis",
        numberOfPlayers: 2,
        players: [],
        date: "29/12/2021",
        time: "10:00",
        price: 5,
      },
      {
        sport: "Table-tennis",
        numberOfPlayers: 2,
        players: [],
        date: "29/12/2021",
        time: "12:00",
        price: 8,
      },

      // END

      {
        // YOGA EVENTS
        sport: "Yoga",
        numberOfPlayers: 10,
        players: [],
        date: "23/12/2021",
        time: "17:00",
        price: 5,
      },
      {
        sport: "Yoga",
        numberOfPlayers: 6,
        players: [],
        date: "23/12/2021",
        time: "18:00",
        price: 7.5,
      },
      {
        sport: "Yoga",
        numberOfPlayers: 10,
        players: [],
        date: "23/12/2021",
        time: "19:30",
        price: 5,
      },
      {
        sport: "Yoga",
        numberOfPlayers: 10,
        players: [],
        date: "24/12/2021",
        time: "17:00",
        price: 5,
      },
      {
        sport: "Yoga",
        numberOfPlayers: 6,
        players: [],
        date: "24/12/2021",
        time: "20:00",
        price: 7.5,
      },
      {
        sport: "Yoga",
        numberOfPlayers: 10,
        players: [],
        date: "24/12/2021",
        time: "20:00",
        price: 10,
      },

      {
        sport: "Yoga",
        numberOfPlayers: 5,
        players: [],
        date: "27/12/2021",
        time: "18:00",
        price: 5,
      },

      {
        sport: "Yoga",
        numberOfPlayers: 10,
        players: [],
        date: "29/12/2021",
        time: "09:00",
        price: 5,
      },
      {
        sport: "Yoga",
        numberOfPlayers: 6,
        players: [],
        date: "29/12/2021",
        time: "10:00",
        price: 5,
      },
      {
        sport: "Yoga",
        numberOfPlayers: 12,
        players: [],
        date: "29/12/2021",
        time: "12:00",
        price: 8,
      },

      // END
      
      {
        // PADEL EVENTS
        sport: "Padel",
        numberOfPlayers: 2,
        players: [],
        date: "23/12/2021",
        time: "17:00",
        price: 5,
      },
      {
        sport: "Padel",
        numberOfPlayers: 4,
        players: [],
        date: "23/12/2021",
        time: "18:00",
        price: 7.5,
      },
      {
        sport: "Padel",
        numberOfPlayers: 4,
        players: [],
        date: "23/12/2021",
        time: "19:30",
        price: 5,
      },
      {
        sport: "Padel",
        numberOfPlayers: 4,
        players: [],
        date: "24/12/2021",
        time: "17:00",
        price: 5,
      },
      {
        sport: "Padel",
        numberOfPlayers: 2,
        players: [],
        date: "24/12/2021",
        time: "20:00",
        price: 7.5,
      },
      {
        sport: "Padel",
        numberOfPlayers: 2,
        players: [],
        date: "24/12/2021",
        time: "20:00",
        price: 10,
      },

      {
        sport: "Padel",
        numberOfPlayers: 2,
        players: [],
        date: "27/12/2021",
        time: "18:00",
        price: 5,
      },

      {
        sport: "Padel",
        numberOfPlayers: 2,
        players: [],
        date: "29/12/2021",
        time: "09:00",
        price: 5,
      },
      {
        sport: "Padel",
        numberOfPlayers: 4,
        players: [],
        date: "29/12/2021",
        time: "10:00",
        price: 5,
      },
      {
        sport: "Padel",
        numberOfPlayers: 4,
        players: [],
        date: "29/12/2021",
        time: "12:00",
        price: 8,
      },
      {
        // INDUVIDUAL EVENTS
        sport: "Hiking",
        numberOfPlayers: 10,
        players: [],
        date: "23/12/2021",
        time: "17:00",
        price: 5,
      },
      {
        sport: "Hiking",
        numberOfPlayers: 6,
        players: [],
        date: "23/12/2021",
        time: "18:00",
        price: 7.5,
      },
      {
        sport: "Hiking",
        numberOfPlayers: 10,
        players: [],
        date: "23/12/2021",
        time: "19:30",
        price: 5,
      },
      {
        sport: "Hiking",
        numberOfPlayers: 10,
        players: [],
        date: "24/12/2021",
        time: "17:00",
        price: 5,
      },
      {
        sport: "Hiking",
        numberOfPlayers: 6,
        players: [],
        date: "24/12/2021",
        time: "20:00",
        price: 7.5,
      },
      {
        sport: "Hiking",
        numberOfPlayers: 10,
        players: [],
        date: "24/12/2021",
        time: "20:00",
        price: 10,
      },

      {
        sport: "Hiking",
        numberOfPlayers: 5,
        players: [],
        date: "27/12/2021",
        time: "18:00",
        price: 5,
      },

      {
        sport: "Hiking",
        numberOfPlayers: 10,
        players: [],
        date: "29/12/2021",
        time: "09:00",
        price: 5,
      },
      {
        sport: "Hiking",
        numberOfPlayers: 6,
        players: [],
        date: "29/12/2021",
        time: "10:00",
        price: 5,
      },
      {
        sport: "Hiking",
        numberOfPlayers: 12,
        players: [],
        date: "29/12/2021",
        time: "12:00",
        price: 8,
      },

      // END

      {
        // ACCESSIBLE EVENTS
        sport: "Hiking for the blind",
        numberOfPlayers: 10,
        players: [],
        date: "23/12/2021",
        time: "17:00",
        price: 5,
      },
      {
        sport: "Wheelchair accessible diving",
        numberOfPlayers: 6,
        players: [],
        date: "23/12/2021",
        time: "18:00",
        price: 7.5,
      },
      {
        sport: "Hiking for the blind",
        numberOfPlayers: 10,
        players: [],
        date: "23/12/2021",
        time: "19:30",
        price: 5,
      },
      {
        sport: "Wheelchair accessible diving",
        numberOfPlayers: 10,
        players: [],
        date: "24/12/2021",
        time: "17:00",
        price: 5,
      },
      {
        sport: "Adapted Golf",
        numberOfPlayers: 6,
        players: [],
        date: "24/12/2021",
        time: "20:00",
        price: 7.5,
      },
      {
        sport: "Wheelchair accessible diving",
        numberOfPlayers: 10,
        players: [],
        date: "24/12/2021",
        time: "20:00",
        price: 10,
      },

      {
        sport: "Adapted Golf",
        numberOfPlayers: 5,
        players: [],
        date: "27/12/2021",
        time: "18:00",
        price: 5,
      },

      {
        sport: "Hiking for the blind",
        numberOfPlayers: 10,
        players: [],
        date: "29/12/2021",
        time: "09:00",
        price: 5,
      },
      {
        sport: "Adapted Golf",
        numberOfPlayers: 6,
        players: [],
        date: "29/12/2021",
        time: "10:00",
        price: 5,
      },
      {
        sport: "Wheelchair accessible diving",
        numberOfPlayers: 12,
        players: [],
        date: "29/12/2021",
        time: "12:00",
        price: 8,
      },

      // END
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