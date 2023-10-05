const pool = require("../db/db_connect");
const { getFilmsByCategoryQuery } = require("./query");

const getFilmsByCategory = (req, res) => {
  return new Promise((resolve, reject) => {
    const { category } = req.params;

    pool.query(getFilmsByCategoryQuery, [category], (error, results) => {
      if (error) {
        reject(error); 
      } else {
        resolve(results.rows);
      }
    });
  })
    .then((data) => {
      if (data.length === 0) res.send("Data Empty"); 
      res.send(data);
    })
    .catch((error) => res.status(500).send("Internal Server Error"));
};

module.exports = {
  getFilmsByCategory,
};
