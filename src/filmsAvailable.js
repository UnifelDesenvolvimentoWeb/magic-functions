const movies = require("../data/movies");

const filmsAvailable = (movies) => {
  return movies.filter((movie) => {
    return movie.disponivel === true
  }).map((movie) => {
    return movie.titulo
  })
}

module.exports = {
  filmsAvailable
}