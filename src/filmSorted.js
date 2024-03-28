const movies = require("../data/movies");

const filmSorted = (movies) => {
  let moviesCopy = [...movies];
  return moviesCopy.sort((a,b) => a.anoLancamento - b.anoLancamento);
}

module.exports = {
  filmSorted
}