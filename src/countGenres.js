const movies = require("../data/movies");

function countGenres(movies) {
 const genresCount = {}

  if (movies.lenght === 0) {
   return genresCount
}
  movies.forEach((movie) => {
    if (movie.genero && movie.genero.length >0) {
      movie.genero.forEach((genre) => {
        if (genresCount.hasOwnProperty(genre)) {
          genresCount[genre]++
        } else {
          genresCount[genre] =1
        }
      })
    }
  })
  return genresCount
}

module.exports = {
  countGenres
}
