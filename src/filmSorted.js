const filmSorted = ( movies ) =>
{
  const sortedMovies = movies.slice();

  sortedMovies.sort( ( a, b ) => a.anoLancamento - b.anoLancamento );

  return sortedMovies;
};

module.exports = {
  filmSorted
};
