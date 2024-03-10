const movies = require("../data/movies");

function getMovieById(id) {
  
  if (typeof id !== 'number' || isNaN(id)) {
  return undefined;
  }

  const movie = movies.find(movie => movie.id === id);

  return movie !== undefined ? movie : undefined;
}

module.exports = {
  getMovieById
}