const movies = require("../data/movies");

function countGenres(movies) {
  return movies.reduce((acc, movie)=>{
    movie.genero.forEach((gen) => {
      if (acc[gen]) {
        acc[gen] += 1
      } else {
        acc[gen] = 1
      }
    })
    return acc
  }, {})  
}

module.exports = {
  countGenres
}
