const movies = require("../data/movies");

const filmSorted = (movies) => {
  
  const newArr = movies.map((item) => item)
  return newArr.sort((a, b) => a.anoLancamento - b.anoLancamento)
}
module.exports = {
  filmSorted
}