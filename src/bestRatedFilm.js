const movies = require("../data/movies");

const bestRatedFilm = (movies) => {
  if (movies.length === 0) {
    return undefined;
  }
  let bestFilm = movies[0];

  for (let i = 1; i < movies.length; i++) {
    if (movies[i].avaliacao > bestFilm.avaliacao) {
      bestFilm = movies[i]
    }
  }
  return bestFilm;
}
const bestFilm = bestRatedFilm(movies)
console.log(bestFilm);
module.exports = {
  bestRatedFilm
}