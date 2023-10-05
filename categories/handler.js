const pool = require("../db/db_connect");
const { getAllCategoriesQuery } = require("./query");

const getAllCategories = (req, res) => {
  return new Promise((resolve, reject) => {
    pool.query(getAllCategoriesQuery, (error, results) => {
      error ? reject(error) : resolve(results.rows)
    });
  })
    .then((data) => {
      data.length === 0 ? res.send("Data Empty") : res.send(data)
    })
    .catch((error) => res.status(500).send("Internal Server Error"));
};

module.exports = {
  getAllCategories,
};
