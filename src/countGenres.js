
const movies = require("../data/movies");

function countGenres(movies) {
  if (movies.length === 0) {
    return {};
  }

  let contGenero = {};
  
  movies.forEach(movie => {
    if(movie.genero && movie.genero.length > 0){
      movie.genero.forEach(genero => {
        if(contGenero.hasOwnProperty(genero)){
          contGenero[genero]++;
        }
        else{
          contGenero[genero] = 1;
        }
      })
    }
  });
  return contGenero
}

module.exports = {
  countGenres
}
