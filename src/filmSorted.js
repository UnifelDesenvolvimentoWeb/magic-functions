const movies = require("../data/movies");

const filmSorted = (movies) => {
  
  return movies.toSorted((a,b) => a.anoLancamento - b.anoLancamento)
}

module.exports = {
  filmSorted
}