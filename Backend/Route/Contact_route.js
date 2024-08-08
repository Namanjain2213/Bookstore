const express = require("express");
const { contact } = require("../Controller/Contactcontroller.js");

const router = express.Router();

router.post("/ct", contact);


module.exports = router;
