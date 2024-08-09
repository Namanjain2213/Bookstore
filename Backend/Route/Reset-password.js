const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require('../Model/Usermodel'); // Adjust the path based on your project structure
const express = require('express');
const router = express.Router();
require("dotenv").config();

router.post('/reset-password/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;

        // Validate password
        if (!password || password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
        }

        // Verify the reset token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the user by the ID from the token
        const user = await User.findById(decoded._id);

        if (!user) {
            return res.status(404).json({ message: 'Invalid token or user does not exist.' });
        }

        // Hash the new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Update the user's password in the database
        user.password = hashedPassword;
        await user.save();

        return res.status(200).json({ message: 'Password reset successful.' });
    } catch (error) {
        console.error('Error in reset password:', error);
        if (error.name === 'JsonWebTokenError') {
            return res.status(400).json({ message: 'Invalid token.' });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(400).json({ message: 'Token has expired.' });
        }
        return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

module.exports = router;
