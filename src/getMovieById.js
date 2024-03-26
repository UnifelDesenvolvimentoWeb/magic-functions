const movies = require("../data/movies");

function getMovieById(id) {
    const movie = movies.find((movie) => movie.id === id)
    return movie
}

module.exports = {
  getMovieById
}