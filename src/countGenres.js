 const movies = require("../data/movies");

function countGenres(movies) {
  
  if (movies.length === 0) {
    return {};
  }

const genreCounts = {};

movies.forEach(movie => {
  
  if (movie.genero && movie.genero.length) {
      
    movie.genero.forEach(genre => {
      genreCounts[genre] = genreCounts[genre] ? genreCounts[genre] + 1 : 1;
    });
  }
});

  return genreCounts;
}

module.exports = {
  countGenres
};
