const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bookroute = require("./Route/Book_route");
const userroute = require("./Route/User_route");
const contactroute = require("./Route/Contact_route");
const forgetroute = require('./Route/Forget-password');
const verifyroute = require('./Route/Reset-password');

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

app.use(cors({
    origin: 'https://bookbank-nine-lime.vercel.app', // Allow only your frontend
    credentials: true
}));
app.use(express.json()); // Parse JSON bodies

app.use("/book", bookroute);
app.use("/user", userroute);
app.use("/contact", contactroute);
app.use('/forget', forgetroute);
app.use('/reset', verifyroute);

// Handle 404 errors
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});
