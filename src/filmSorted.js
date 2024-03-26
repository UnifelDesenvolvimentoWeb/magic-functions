const movies = require("../data/movies");

const filmSorted = (movies) => sorted = movies.slice().sort((a,b)=> a.anoLancamento - b.anoLancamento)

module.exports = {
  filmSorted
}