const movies = require("../data/movies");

const bestRatedFilm = (movies) => {
  let bestRated = movies[0];

  for (let i = 1; i < movies.length; i++) {
    if (movies[i].avaliacao > bestRated.avaliacao) {
      bestRated = movies[i]
    }
  }
  return bestRated;
}

module.exports = {
  bestRatedFilm
}