const express = require("express");
const mongoose = require("mongoose");
const RouterFile = require("./router/userRouter.js");

const PORT = 5001;
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Use the router from RouterFile
app.use('/', RouterFile);

// Database connection
mongoose
  .connect("mongodb://localhost:27017/AyushDetail") // Added options
  .then(() => {
    console.log("Connection successfully established to MongoDB");
  })
  .catch((error) => { // Fixed error handling
    console.error("Error connecting to MongoDB:", error);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
