const movies = require("../data/movies");

function countGenres(movies) {

  const generoCounts = {};

  if (movies.length === 0) {
    return generoCounts; 
  }

  for (const movie of movies) {
    if (movie.genero && movie.genero.length > 0) {
      for (const genre of movie.genero) {
        generoCounts[genre] = (generoCounts[genre] || 0) + 1;
      }
    }

  }

  return generoCounts;
 
}

module.exports = {
  countGenres
}
