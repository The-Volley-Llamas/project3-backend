require("dotenv/config");
require("./db");
const express = require("express");

const { isAuthenticated } = require("./middleware/jwt.middleware");

const app = express();
require("./config")(app);


// 👇 Start handling routes here
const allRoutes = require("./routes");
app.use("/api", allRoutes);

const userRouter = require("./routes/user.routes");
app.use("/api", userRouter);

const eventsRouter = require("./routes/event.routes");
app.use("/api", eventsRouter);

const venuesRouter = require("./routes/venue.routes");
app.use("/api", venuesRouter);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

require("./error-handling")(app);

module.exports = app;