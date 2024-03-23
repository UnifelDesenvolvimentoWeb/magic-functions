const movies = require("../data/movies");

const findActorForTheMovie = (titulo) => {
  if ( typeof titulo !== 'string' || titulo.trim() === '' ) { return "Filme não encontrado."; }

  const movie = movies.find( movie => movie.titulo === titulo );

  if ( !movie ) { return "Filme não encontrado."; }
  if ( !movie.elenco ) { return "Filme não encontrado."; }

  const firstTwoActors = movie.elenco.slice( 0, 2 );

  return firstTwoActors;
};

module.exports = {
  findActorForTheMovie
};
