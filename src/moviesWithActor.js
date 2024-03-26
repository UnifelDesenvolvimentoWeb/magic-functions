const movies = require("../data/movies");

function moviesWithActor(ator) {
  const filter = movies.filter((movie) => movie.ator === ator)
  return filter
}

module.exports = {
  moviesWithActor
}