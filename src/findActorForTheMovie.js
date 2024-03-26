const movies = require("../data/movies");

const findActorForTheMovie = (titulo) => {
  if (movies.some((movie)=> movie.titulo === titulo)){
    return movies.find((movie)=> movie.titulo === titulo).elenco.slice(0,2)
  }
  return 'Filme não encontrado.'
}

module.exports = {
  findActorForTheMovie
}