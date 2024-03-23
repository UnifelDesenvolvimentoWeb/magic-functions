const movies = require("../data/movies");

function getMovieById ( id )
{
  if ( typeof id !== "number" )
  {
    return undefined;
  }

  const movie = movies.find( ( m ) => m.id === id );

  return movie || undefined;
}

module.exports = {
  getMovieById
}
