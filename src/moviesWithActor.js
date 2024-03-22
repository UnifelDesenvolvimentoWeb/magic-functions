const movies = require("../data/movies");

function moviesWithActor(ator) {
  return movies.filter((movie)=> movie.elenco.some((actor)=> actor===ator))
}

module.exports = {
  moviesWithActor
}