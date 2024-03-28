const movies = require("../data/movies");

const bestRatedFilm = (movies) => {
  let sortMv = movies.sort((a,b) => b.avaliacao - a.avaliacao)
  return sortMv[0]
}

module.exports = {
  bestRatedFilm
}