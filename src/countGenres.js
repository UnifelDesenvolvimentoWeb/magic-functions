const movies = require("../data/movies");

function countGenres(movies) {
  let genreList = [];
  let genreCount = {};

  movies.forEach(movie => {
    genreList.push(...movie.genero)
  })
  
  genreList.forEach(genre => {
    if(!genreCount[genre]) {
      genreCount[genre] = 1
    }
    else {
      genreCount[genre]++;
    }
  })
  
  return genreCount;
}

module.exports = {
  countGenres
}
