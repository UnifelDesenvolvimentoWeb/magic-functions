const movies = require("../data/movies");

function filmSeparation(movies, details = true) {
 const filmPorgenero = {};

  for (const movie of movies) {
    if (movie.genero?.length > 0) {
      for (const genre of movie.genero) {
        if (filmPorgenero[genre] === undefined) {
          filmPorgenero[genre] = [];
        }
        const itemDoArray = details ? {
          anoLancamento: movie.anoLancamento,
          avaliacao: movie.avaliacao,
          diretor: movie.diretor,
          id: movie.id,
          titulo: movie.titulo
        } : movie.titulo;
        filmPorgenero[genre].push(itemDoArray);
      }
    }
  }
  const filmOrder = {}
  const generosOrder = Object.keys(filmPorgenero).sort();
  for (const genero of generosOrder) {
    filmOrder[genero] = details ? filmPorgenero[genero].sort((a, b) => {
      const titleA = a.titulo.toUpperCase(); 
      const titleB = b.titulo.toUpperCase(); 

      if (titleA < titleB) {
          return -1;
      }
      if (titleA > titleB) {
          return 1;
      }
      return 0; 
  }) : filmPorgenero[genero].sort();
  }
  return filmOrder

}
console.log(filmSeparation(movies))

module.exports = {
  filmSeparation
}
