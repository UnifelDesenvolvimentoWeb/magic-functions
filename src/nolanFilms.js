const movies = require("../data/movies");

const nolanFilms = (movies) => movies.filter((movie)=> movie.diretor === 'Christopher Nolan').sort((a,b)=> b.avaliacao - a.avaliacao)

module.exports = {
  nolanFilms
}