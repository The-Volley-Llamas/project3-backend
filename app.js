require("dotenv/config");
require("./db");
const express = require("express");

const { isAuthenticated } = require("./middleware/jwt.middleware");

console.log(process.env)


const app = express();
require("./config")(app);


// 👇 Start handling routes here
const allRoutes = require("./routes");
app.use("/api", allRoutes);

const eventsRouter = require("./routes/event.routes");
app.use("/api", eventsRouter);


// const authRouter = require("./routes/auth.routes");
// app.use("/auth", authRouter);
const venuesRouter = require("./routes/venue.routes");
app.use("/api", venuesRouter);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

require("./error-handling")(app);

module.exports = app;
