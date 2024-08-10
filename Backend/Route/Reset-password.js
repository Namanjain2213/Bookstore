const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require('../Model/Usermodel'); // Adjust the path based on your project structure
const express = require('express');
const router = express.Router();
require("dotenv").config();

router.post('/verify-otp', async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;

        // Find the user with the provided email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User with this email does not exist.' });
        }

        // Check if the OTP matches and is not expired
        if (user.resetOtp !== otp || Date.now() > user.otpExpires) {
            return res.status(400).json({ message: 'Invalid or expired OTP.' });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 12);

        // Reset the password
        user.password = hashedPassword; // Save hashed password
        user.resetOtp = undefined; // Clear the OTP fields
        user.otpExpires = undefined;
        await user.save();

        return res.status(200).json({ message: 'Password has been reset successfully.' });
    } catch (error) {
        console.error('Error in verifying OTP:', error);
        return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

module.exports = router;
