const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    resetOtp: {
        type: String,
        // Optional: Add validation or default value if needed
    },
    otpExpires: {
        type: Date,
        // Optional: Add validation or default value if needed
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
