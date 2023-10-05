const express = require("express");
const router = express.Router();
const { getAllFilms, getFilmById } = require("./handler");

router.get("/", async (req, res) => await getAllFilms(req, res));

router.get("/:filmId", async (req, res) => await getFilmById(req, res));

module.exports = router;
