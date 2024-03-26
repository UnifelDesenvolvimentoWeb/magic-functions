const movies = require("../data/movies");

const bestRatedFilm = (movies) => {
  //sort
  if (movies > 0) {
    const sorted = movies.sort((a, b) => {
    b.avaliacao - a.avaliacao
    }) .find((movies) => movies.avaliacao > 0)
    return sorted
  } else {
    return undefined
  }
}

module.exports = {
  bestRatedFilm
}