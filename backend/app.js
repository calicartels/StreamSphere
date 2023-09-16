// Package imports
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = express();

// File Imports
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

// Config
dotenv.config({ path: "./config/config.env" });
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error(err));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server up and running on port " + process.env.PORT || 5000);
});
