const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../Model/Usermodel'); // Adjust the path based on your project structure
const nodemailer = require('nodemailer');

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

        // Create a reset token
        const resetToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Configure the email transport
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Use a different service or configure OAuth2 for Gmail
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const resetUrl = `https://bookbank-nine-lime.vercel.app/reset-password/${resetToken}`;

        // Define email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: 'Password Reset Request',
            text: `You requested a password reset. Please click on the link below to reset your password:\n\n${resetUrl}\n\nIf you did not request this, please ignore this email.`,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'Password reset link sent to your email.' });
    } catch (error) {
        console.error('Error in forgot password:', error);
        return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

module.exports = router;
