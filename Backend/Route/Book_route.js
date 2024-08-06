const express = require("express");
const { getbook } = require("../Controller/bookcontroler.js");

const router = express.Router();

router.get("/", getbook);

module.exports = router;
