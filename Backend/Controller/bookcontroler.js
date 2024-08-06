const Book = require("../Model/Book_model");

const getbook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json({ success: true, data: book });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error occurred in fetching data" });
  }
};

module.exports = { getbook };
