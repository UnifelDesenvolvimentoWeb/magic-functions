const movies = require("../data/movies");

const filmSorted = (movies) => {

  const sorted = [...movies];

  sorted.sort((a, b) => a.anoLancamento - b.anoLancamento);

  return sorted;
  
}

module.exports = {
  filmSorted
}