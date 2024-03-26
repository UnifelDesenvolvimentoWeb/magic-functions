const movies = require("../data/movies");

function getMovieById(id) {
    const movie = movies.find((id) => movies.id === id)
    return movie
}

module.exports = {
  getMovieById
}