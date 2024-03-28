const movies = require("../data/movies");

const filmSorted = (movies) => {
  return movies.slice().sort((movieA, movieB) => movieA.anoLancamento - movieB.anoLancamento
  );
}

console.log(filmSorted(movies));
module.exports = {
  filmSorted
}