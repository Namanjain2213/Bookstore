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

        // Save the contact to the database
        await newcontact.save();

        return res.status(201).json({
            success: true,
            message: "Data saved successfully",
            user: {
                _id: newcontact._id,
                fullname: newcontact.fullname,
                email: newcontact.email,
                number: newcontact.number,
                message: newcontact.message
            }
        });
    } catch (error) {
        // Handle duplicate email error (or any validation error)
        // if (error.name === 'MongoError' && error.code === 11000) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "Email already exists. Please use a different email address."
        //     });
        // }

        console.error("Error saving contact:", error.message); // Log error message and stack trace
        return res.status(500).json({
            success: false,
            message: "Something went wrong, could not save the data."
        });
    }
};

module.exports = { contact };
