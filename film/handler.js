const pool = require("../db/db_connect");
const { getAllFilmsQuery, getFilmByIdQuery } = require("./query");

const getAllFilms = (req, res) => {
  return new Promise((resolve, reject) => {
    pool.query(getAllFilmsQuery, (error, results) => {
      error ? reject(error) : resolve(results.rows)
    });
  })
    .then((data) => {
      data.length === 0 ? send("Data Empty") : res.send(data)
    })
    .catch((error) => res.status(500).send("Internal Server Error"));
};

const getFilmById = (req, res) => {
  return new Promise((resolve, reject) => {
    const { filmId } = req.params;

    pool.query(getFilmByIdQuery, [filmId], (error, results) => {
      error ? reject(error) : resolve(results.rows)
    });
  })
    .then((data) => {
      data.length === 0 ? send("Data Empty") : res.send(data)
    })
    .catch((error) => res.status(500).send("Internal Server Error"));
};

module.exports = {
  getAllFilms,
  getFilmById,
};
