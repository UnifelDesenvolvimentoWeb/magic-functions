const movies = require("../data/movies");

function filmSeparation(movies, details = true) {
  const generosEFilmes = {};

  // para cada obj filme da lista
  for (const movie of movies) {
    // por segurança testa se o filme de fato possui generos
    if (movie.genero?.length > 0) {
      // para cada genero do filme:
      for (const genre of movie.genero) {
        // testa se o genero em questao ja existe no objeto:
        if (generosEFilmes[genre] === undefined) {
          // caso não exista, inicializa o mesmo com um array vazio:
          generosEFilmes[genre] = [];
        }
        // uma vez garantido que o array de filmes do genero já existe no objeto, adiciona o filme no array:
        const itemDoArray = details ? {
          anoLancamento: movie.anoLancamento,
          avaliacao: movie.avaliacao,
          diretor: movie.diretor,
          id: movie.id,
          titulo: movie.titulo
        } : movie.titulo;
        generosEFilmes[genre].push(itemDoArray);
      }
    }
  }

  // ordena os generos e seus filmes alfabeticamente
  const generosEFilmesOrdenados = {};
  const generosOrdenados = Object.keys(generosEFilmes).sort();
  for (const genero of generosOrdenados) {
    generosEFilmesOrdenados[genero] = details ? generosEFilmes[genero].sort((a, b) => {
      const tituloA = a.titulo.toUpperCase(); // Ignorar maiúsculas e minúsculas
      const tituloB = b.titulo.toUpperCase(); // Ignorar maiúsculas e minúsculas
  
      if (tituloA < tituloB) {
          return -1;
      }
      if (tituloA > tituloB) {
          return 1;
      }
      return 0; // Se forem iguais
  }) : generosEFilmes[genero].sort();
  }

  return generosEFilmesOrdenados;
}

module.exports = {
  filmSeparation
}
