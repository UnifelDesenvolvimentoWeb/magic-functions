const movies = require("../data/movies");

const filmsAvailable = (movies) => movies.filter((movie)=> movie.disponivel === true).map((movie)=>movie.titulo)

module.exports = {
  filmsAvailable
}