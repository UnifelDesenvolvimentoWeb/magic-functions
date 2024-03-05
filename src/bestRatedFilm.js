const movies = require("../data/movies");

const bestRatedFilm = (movies) => {
  return movies.sort((a, b) => b.avaliacao - a.avaliacao).find((movie) => {
    if (movie.avaliacao > 0){
      return movie
    }
  })
}

module.exports = {
  bestRatedFilm
}