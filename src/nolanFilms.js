const movies = require("../data/movies");

const nolanFilms = (movies) => {

  const nolan = movies.filter(movie => movie.diretor === 'Christopher Nolan')

  nolan.sort((a, b) => b.avaliação - a.avaliação)

  return nolan


}

module.exports = {
  nolanFilms
}