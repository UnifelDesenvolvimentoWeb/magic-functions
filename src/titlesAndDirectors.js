const { movies } = require( "../data/list1" );

const titlesAndDirectors = ( movies ) =>
{
  if ( !Array.isArray( movies ) )
  {
    throw new TypeError( "O parâmetro 'movies' deve ser um array" );
  }

  if ( movies.length === 0 )
  {
    return;
  }

  for ( const movie of movies )
  {
    if ( typeof movie !== 'object' || movie === null || !movie.titulo || !movie.diretor )
    {
      continue;
    }

    console.log( `Título: ${ movie.titulo } - Diretor: ${ movie.diretor }` );
  }
};

module.exports = {
  titlesAndDirectors,
};
