const { movies } = require("../data/list1");

const titlesAndDirectors = (movies) => {
  if (movies.length === 0 ) {
    return;
  }

  movies.forEach(movie => {
    if (movie.titulo && movie.diretor) {
      console.log(`Título: ${movie.titulo} - Diretor: ${movie.diretor}`);
    } else {
      console.log("O filme não tem título ou diretor definidos.")
    }
  })
}

module.exports = {
  titlesAndDirectors
}