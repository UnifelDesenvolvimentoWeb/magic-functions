const movies = require("../data/movies");

function getMovieById(id) {

  if (id === undefined || typeof id !== 'number') {
    return undefined;
  }

  const foundMovie = movies.find(movie => movie.id === id);
  return foundMovie || undefined
  
}

module.exports = {
  getMovieById
}