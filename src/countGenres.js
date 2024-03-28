const movies = require("../data/movies");

function countGenres(movies) {
  if (movies.length === 0) {
    return {};
  }
  const genreCounts = {};

  movies.forEach(movie => {
    if(movie.genero && movie.genero.length > 0){
      movie.genero.forEach(genero => {
        if(genreCounts.hasOwnProperty(genero)){
          genreCounts[genero]++;
        }
        else{
          genreCounts[genero] = 1;
        }
      })
    }
  });
  return genreCounts
}

    console.log(countGenres(movies))

    module.exports = {
      countGenres
    }
