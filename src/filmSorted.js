const movies = require("../data/movies");

const filmSorted = (movies) => {
  
  const copiedMovies = [...movies];

  copiedMovies.sort((a, b) => a.anoLancamento - b.anoLancamento);

  return copiedMovies;
}

module.exports = {
  filmSorted
};