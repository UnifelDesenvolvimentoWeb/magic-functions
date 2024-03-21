const movies = require("../data/movies");

function getMovieById(id) {
  let movie = movies.filter(e => {
    return e.id === id;
  })
  return movie[0] || undefined;
}

module.exports = {
  getMovieById
}