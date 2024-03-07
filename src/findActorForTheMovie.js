const movies = require("../data/movies");

const findActorForTheMovie = (titulo) => {
  const movie = movies.find((movie) => {
    return movie.titulo === titulo
  })
  if(!movie){
    return "Filme não encontrado."
  }
  if(!movie.elenco || movie.elenco.length === 0){
    return "Filme não encontrado."
  }
  return movie.elenco.slice(0, 2)
}

module.exports = {
  findActorForTheMovie
}