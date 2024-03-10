const movies = require("../data/movies");

const nolanFilms = (movies) => {
  

  const nolanMovies = movies.filter(movie => movie.diretor === 'Christopher Nolan')

  nolanMovies.sort((a, b) => b.avaliada - a.avaliada)

  return nolanMovies
 
}

module.exports = {
  nolanFilms
}