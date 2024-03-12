const movies = require( "../data/movies" );

function moviesWithActor ( ator )
{
  if ( typeof ator !== "string" )
  {
    return [];
  }

  const matchingMovies = movies.filter( ( movie ) =>
    movie.elenco.includes( ator )
  );

  return matchingMovies;
}

module.exports = {
  moviesWithActor,
};
