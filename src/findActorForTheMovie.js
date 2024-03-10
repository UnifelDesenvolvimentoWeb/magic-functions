const movies = require("../data/movies");

const findActorForTheMovie = (movieTitle) => {
  
  if (!movieTitle || typeof movieTitle !== 'string' || movieTitle.trim() === '') {
    return "Filme não encontrado.";
  }

  const movie = movies.find(movie => movie.titulo === movieTitle);

  if (!movie || !movie.elenco || movie.elenco.length === 0) {
    return "Filme não encontrado.";
  }

  const firstTwoActors = movie.elenco.slice(0, 2);

  return firstTwoActors.length > 0 ? firstTwoActors : "Elenco indefinido ou com menos de dois atores.";
}

module.exports = {
  findActorForTheMovie
};