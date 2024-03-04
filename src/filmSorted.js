const movies = require("../data/movies");

const filmSorted = (movies) => {

  const sortedMovies = [...movies];

  sortedMovies.sort((a, b) => a.anoLancamento - b.anoLancamento);

  return sortedMovies;
  
}

module.exports = {
  filmSorted
}