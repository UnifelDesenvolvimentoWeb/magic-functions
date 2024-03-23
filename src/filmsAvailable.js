const filmsAvailable = ( movies ) =>
{
  const availableFilms = movies.filter( ( film ) => film.disponivel );

  const availableFilmTitles = availableFilms.map( ( film ) => film.titulo );

  return availableFilmTitles;
};

module.exports = {
  filmsAvailable
};
