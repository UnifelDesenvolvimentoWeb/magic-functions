const movies = require("../data/movies");

function moviesWithActor(ator) {
  const filmeComAtor = movies.filter(movie => movie.elenco.includes(ator))
  return filmeComAtor
 
}

module.exports = {
  moviesWithActor
}