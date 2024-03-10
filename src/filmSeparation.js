const movies = require("../data/movies");

function filmSeparation(movies, details = true) {
  if (movies.length === 0) {
    return {};
  }

  const genreMap = {};

  movies.forEach(movie => {
    movie.genero.forEach(genre => {
      if (!genreMap[genre]) {
        genreMap[genre] = [];
      }

      const movieInfo = details ? {
        titulo: movie.titulo,
        anoLancamento: movie.anoLancamento,
        avaliacao: movie.avaliacao,
        diretor: movie.diretor,
        id: movie.id
      } : movie.titulo;
      
      genreMap[genre].push(movieInfo);
    });
  });

  Object.keys(genreMap).forEach(genre => {
    genreMap[genre].sort((a, b) => {
      const titleA = typeof a === 'string' ? a : a.titulo;
      const titleB = typeof b === 'string' ? b : b.titulo;
      return titleA.localeCompare(titleB);
    });
  });

  return genreMap;
}

module.exports = {
  filmSeparation
};