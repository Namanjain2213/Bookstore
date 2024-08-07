const express = require("express");
const { signup } = require("../Controller/usecontroller.js");

const router = express.Router();

router.post("/signup", signup);

module.exports = router;
