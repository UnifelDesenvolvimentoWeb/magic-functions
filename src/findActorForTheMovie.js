const movies = require("../data/movies");

const findActorForTheMovie = (titulo) => {

    const movie = movies.find((m) => m.titulo === titulo);
    if  (movie) {
      const elenco = movie.elenco.slice(0, 2);
      return elenco;
    } else {
      return "Filme não encontrado."
    }
}

module.exports = {
  findActorForTheMovie
}