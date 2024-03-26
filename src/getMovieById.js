const movies = require('../data/movies');

function getMovieById(id) {
  if (!id || isNaN(id)) {
    return undefined;
  }

  return movies.find(({ id: movieId }) => movieId === id);
}

module.exports = {
  getMovieById,
};

console.log(getMovieById(6));
