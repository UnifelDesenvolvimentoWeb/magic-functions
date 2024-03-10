const movies = require("../data/movies");

function moviesWithActor(ator) {

  if (typeof ator !== 'string') {
    return [];
  }

  const encontrarFilmes = movies.filter(movie => movie.elenco.includes(ator)
  );

  return encontrarFilmes;

}

module.exports = {
  moviesWithActor
}