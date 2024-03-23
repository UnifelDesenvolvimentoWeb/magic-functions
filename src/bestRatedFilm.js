const bestRatedFilm = ( movies ) =>
{
  if ( movies.length === 0 )
  {
    return undefined;
  }

  let highestRatedFilm = movies[ 0 ];

  for ( let i = 1; i < movies.length; i++ )
  {
    if ( movies[ i ].avaliacao > highestRatedFilm.avaliacao )
    {
      highestRatedFilm = movies[ i ];
    }
  }

  return highestRatedFilm;
};

module.exports = {
  bestRatedFilm
};
