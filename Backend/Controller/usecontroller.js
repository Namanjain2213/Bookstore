const User = require("../Model/Usermodel");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

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
        const createuser = new User({
            fullname,
            email,
            password: hashedPassword
        });
        await createuser.save();

        return res.status(201).json({
            success: true,
            message: "User created successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = { signup };
