const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bookroute = require("./Route/Book_route");
const userroute = require("./Route/User_route");

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const url = process.env.MONGODB_URL;

mongoose.connect(url)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error("Failed to connect to MongoDB:", err);
  });

app.use(cors()); // Use cors middleware
app.use(express.json()); // Parse JSON bodies

app.use("/book", bookroute);
app.use("/user", userroute);

