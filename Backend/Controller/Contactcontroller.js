const Contact = require("../Model/Contact_model");

const contact = async (req, res) => {
    try {
        const { fullname, email, number, message } = req.body;

        // Check if all required fields are provided
        if (!fullname || !email || !number || !message) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        // Create a new contact
        const newcontact = new Contact({
            fullname,
            email,
            number,
            message
        });

        await newcontact.save();

        return res.status(201).json({
            success: true,
            message: "Data saved successfully",
            contact: {
                _id: newcontact._id,
                fullname: newcontact.fullname,
                email: newcontact.email,
                number: newcontact.number,
                message: newcontact.message
            }
        });
    } catch (error) {
        if (error.code === 11000) {
            // Handle duplicate key error
            return res.status(400).json({
                success: false,
                message: "A contact with this email already exists."
            });
        }

        console.error('Server Error:', error);
        return res.status(500).json({
            success: false,
            message: "Server error: Unable to save contact information."
        });
    }
};


module.exports = { contact };
