const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Fullname is required"],
        minlength: [2, "Fullname must be at least 2 characters long"],
        maxlength: [100, "Fullname can't exceed 100 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    number: {
        type: String, // Changed from Number to String
        required: [true, "Phone number is required"],
        minlength: [10, "Phone number must be at least 10 digits long"],
        maxlength: [15, "Phone number can't exceed 15 digits"],
        match: [/^\d{10,15}$/, 'Please enter a valid phone number']
    },
    message: {
        type: String,
        required: [true, "Message is required"],
        minlength: [5, "Message must be at least 5 characters long"],
        maxlength: [1000, "Message can't exceed 1000 characters"]
    }
}, { timestamps: true }); // Add timestamps

const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;
