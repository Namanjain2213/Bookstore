const express = require('express');
const User = require('../Model/Usermodel'); // Adjust the path based on your project structure
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const router = express.Router();
require("dotenv").config();

router.post('/forgot-password', async (req, res) => {
    try {
        const { email } = req.body;

        // Find the user with the provided email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User with this email does not exist.' });
        }

        // Generate a random OTP
        const otp = crypto.randomInt(100000, 999999).toString();

        // Store the OTP and its expiration time in the user's record
        user.resetOtp = otp;
        user.otpExpires = Date.now() + 3600000; // OTP expires in 1 hour
        await user.save();

        // Configure the email transport
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Use a different service or configure OAuth2 for Gmail
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Define email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: 'Password Reset OTP',
            text: `Your OTP for resetting your password is: ${otp}\n\nThis OTP is valid for 1 hour. If you did not request this, please ignore this email.`,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'OTP sent to your email.' });
    } catch (error) {
        console.error('Error in forgot password:', error);
        return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

module.exports = router;
