const movies = require("../data/movies");

function moviesWithActor(ator) {
  return movies.filter((movie) => {
    if(movie.elenco.includes(ator)){
      return movie;
    }
    else if(typeof ator === !"string"){
      return []
    }
  })
}

module.exports = {
  moviesWithActor
}