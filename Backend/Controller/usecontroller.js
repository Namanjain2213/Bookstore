const User = require("../Model/Usermodel");
const bcrypt = require('bcryptjs');



const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Check if all required fields are provided
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email" });
        }

        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            fullname,
            email,
            password: hashedPassword
        });
        await newUser.save();

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User cannot be created"
        });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        return res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Failed to login" });
    }
}

module.exports = { signup, login };


