const movies = require("../data/movies");

const findActorForTheMovie = (titulo) => {
  let movie = movies.filter(movie => movie.titulo === titulo)[0];
  return (movie) ? movie.elenco.splice(0, 2) : "Filme não encontrado.";
}


module.exports = {
  findActorForTheMovie
}