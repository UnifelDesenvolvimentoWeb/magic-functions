const movies = require("../data/movies");

const nolanFilms = ( movies ) =>
{
  const nolanMovies = movies.filter( movie => movie.diretor === 'Christopher Nolan' );

  nolanMovies.sort( ( a, b ) => b.avaliacao - a.avaliacao );

  return nolanMovies;
};

module.exports = {
  nolanFilms
};
