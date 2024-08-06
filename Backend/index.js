const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const url = process.env.MONGODB_URL;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
