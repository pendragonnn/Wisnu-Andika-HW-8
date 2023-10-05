const express = require("express");
const router = express.Router();
const { getAllCategories } = require("./handler");

router.get("/", async (req, res) => await getAllCategories(req, res));

module.exports = router;
