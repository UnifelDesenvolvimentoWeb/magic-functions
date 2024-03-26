const movies = require("../data/movies");

const bestRatedFilm = (movies) => {
  if (movies.length === 0) {
    return undefined
  } else {
    return movies.reduce((acc, movie)=>movie.avaliacao > acc.avaliacao ? movie : acc)
  }
}

module.exports = {
  bestRatedFilm
}