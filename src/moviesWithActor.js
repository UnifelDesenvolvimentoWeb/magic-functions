const movies = require('../data/movies');

function moviesWithActor(ator) {
  const atorLowerCase = ator.toLowerCase();

  const filmesComAtor = movies.filter((movie) => {
    const elencoLowerCase = movie.elenco.map((ator) => ator.toLowerCase());

    return elencoLowerCase.includes(atorLowerCase);
  });

  return filmesComAtor;
}

module.exports = {
  moviesWithActor,
};

console.log(moviesWithActor('Keanu Reeves'));
