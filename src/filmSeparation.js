const movies = require("../data/movies");

function filmSeparation(movies, details = true) {
  
  let sortedFilms = {};
  let genres = [];

  movies.forEach(movie => {
    genres.push(...movie.genero);
  })

  genres = [...new Set(genres)].sort();
  genres.forEach(genre => sortedFilms[genre] = [])
  
  movies.forEach(movie => {

    movie.genero.forEach(genre => {

      if(sortedFilms[genre]) {

        if(details) {
          sortedFilms[genre].push({"anoLancamento": movie.anoLancamento, "avaliacao": movie.avaliacao, "diretor": movie.diretor, "id": movie.id, "titulo": movie.titulo});
        } 
        else {
          sortedFilms[genre].push(movie.titulo);
        }
      }
    })
  })

  for(let key in sortedFilms) {
    if(details) {
      sortedFilms[key] = sortedFilms[key].sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
    else {
      sortedFilms[key] = sortedFilms[key].sort();
    }
  } 

  return sortedFilms;
}

module.exports = {
  filmSeparation
}
