const movies = require("../data/movies");

function countGenres(movies) {
  contGenero = {}
  for(let movie of movies){
    for(let gener of movie.genero){
      if(contGenero[gener] == undefined){
        contGenero[gener] = 0
      }
      contGenero[gener]++
    }      
  }
  return contGenero
}
console.log(countGenres(movies))
module.exports = {
  countGenres
}
