function filmSeparation ( movies, details = true )
{
  const separatedMovies = {};

  movies.forEach( movie =>
  {
    movie.genero.forEach( genre =>
    {
      if ( !separatedMovies[ genre ] )
      {
        separatedMovies[ genre ] = [];
      }

      if ( details )
      {
        separatedMovies[ genre ].push( {
          titulo: movie.titulo,
          anoLancamento: movie.anoLancamento,
          avaliacao: movie.avaliacao,
          diretor: movie.diretor,
          id: movie.id
        } );
      } else
      {
        separatedMovies[ genre ].push( movie.titulo );
      }
    } );
  } );

  for ( const genre in separatedMovies )
  {
    separatedMovies[ genre ].sort( ( a, b ) => typeof a === 'string' ? a.localeCompare( b ) : a.titulo.localeCompare( b.titulo ) );
  }

  return separatedMovies;
}

module.exports = {
  filmSeparation
};
