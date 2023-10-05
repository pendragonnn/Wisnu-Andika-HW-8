const express = require("express");
const film = require("./film/routes");
const categories = require("./categories/routes");
const filmsByCategory = require("./film-by-category/routes");
const pool = require("./db/db_connect");

const app = express();

const port = 3000;

app.use("/film", film);

app.use("/categories", categories);

app.use("/films-by-category", filmsByCategory);

pool.connect((err) => {
  if (err) throw err;
  console.log("Database Connected");
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server running on https://localhost:${port}`);
});
