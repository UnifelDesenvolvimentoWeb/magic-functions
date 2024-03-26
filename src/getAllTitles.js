const movies = require('../data/movies');

const getAllTitles = (movies) => {
  if (!movies || !movies.length) {
    return [];
  }

  return movies.map(({ titulo }) => titulo);
};

module.exports = {
  getAllTitles,
};

console.log(getAllTitles(movies));
