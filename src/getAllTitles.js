const movies = require("../data/movies");

const getAllTitles = (movies) => movies.map((movie)=> movie.titulo)


module.exports = {
  getAllTitles
}