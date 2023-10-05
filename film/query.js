const getAllFilmsQuery = `SELECT * FROM film`;
const getFilmByIdQuery = `SELECT * FROM film WHERE film_id=$1`;

module.exports = {
  getAllFilmsQuery,
  getFilmByIdQuery,
};
