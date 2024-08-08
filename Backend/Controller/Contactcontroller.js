const nodemailer = require('nodemailer');
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

        // Set up nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // You can use any email service like Gmail, Yahoo, etc.
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS  // Your email password or an app-specific password
            }
        });

        // Define email options
        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender address
            to: email, // Receiver's email
            subject: 'Thank you for contacting us!',
            text: `Dear ${fullname},\n\nThank you for visiting our website. We have received your message and will contact you soon.\n\nBest regards,\nYour Company Name`
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({
                    success: false,
                    message: "Contact saved, but error sending email"
                });
            } else {
                console.log('Email sent:', info.response);
                return res.status(201).json({
                    success: true,
                    message: "Data saved successfully, and email sent",
                    contact: {
                        _id: newcontact._id,
                        fullname: newcontact.fullname,
                        email: newcontact.email,
                        number: newcontact.number,
                        message: newcontact.message
                    }
                });
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

module.exports = {contact};