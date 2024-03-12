function filmSeparation(movies, details = true) {
  const separatedFilms = {};

  movies.forEach(movie => {
    
    movie.genero.forEach(genre => {
      
      if (!separatedFilms.hasOwnProperty(genre)) {
        separatedFilms[genre] = [];
      }

      const filmDetails = {
        titulo: movie.titulo,
        anoLancamento: movie.anoLancamento,
        avaliacao: movie.avaliacao,
        diretor: movie.diretor,
        id: movie.id
      };

      if (details) {
        separatedFilms[genre].push(filmDetails);
      } else {
        separatedFilms[genre].push(movie.titulo);
      }
    });
  });

  for (const genre in separatedFilms) {
    separatedFilms[genre].sort((a, b) => {
      if (typeof a === 'object' && typeof b === 'object') {
        return a.titulo.localeCompare(b.titulo);
      } else {
        return a.localeCompare(b);
      }
    });
  }

  return separatedFilms;
}

module.exports = {
  filmSeparation
}

