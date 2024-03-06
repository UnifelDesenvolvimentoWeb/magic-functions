const movies = require("../data/movies");

function countGenres(movies) {
  const genresCount = {};

  // para cada obj filme da lista
  for (const movie of movies) {
    // por segurança testa se o filme de fato possui generos
    if (movie.genero?.length > 0) {
      // para cada genero do filme:
      for (const genre of movie.genero) {
        // testa se o genero em questao ja existe no objeto:
        if (genresCount[genre] === undefined) {
          // caso não exista, inicializa o mesmo com zero:
          genresCount[genre] = 0;
        }
        // uma vez garantido que o genero já existe no objeto, simplesmente o incrementa:
        genresCount[genre]++;
      }
    }
  }

  return genresCount;
  
}

module.exports = {
  countGenres
}
