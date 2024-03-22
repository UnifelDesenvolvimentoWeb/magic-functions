const movies = require("../data/movies");

const findActorForTheMovie = (titulo) => {

  if (!titulo) {
    return "Filme não encontrado."
  }

  const movie = movies.find((m) => m.titulo.toLowerCase() === titulo.toLowerCase())

  if (!movie) {
    return "Filme não encontrado."
  }

  if (!movie.elenco || movie.elenco.length < 2) {
    return "Elenco indefinido ou insuficiente."
  }

  return movie.elenco.slice(0, 2)

}

module.exports = {
  findActorForTheMovie
}