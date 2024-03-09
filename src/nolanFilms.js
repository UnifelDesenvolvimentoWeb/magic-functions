const movies = require("../data/movies");

const nolanFilms = (movies) => {
  return movies.sort((a, b) => b.avaliacao - a.avaliacao).filter((movies) => {
    return movies.diretor === "Christopher Nolan"
  })
}

module.exports = {
  nolanFilms
}