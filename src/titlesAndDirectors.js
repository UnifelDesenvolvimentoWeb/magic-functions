const { movies } = require("../data/list1");

const titlesAndDirectors = (movies) => {
  if (movies.length !== 0) {
    movies.forEach(movie => {
      console.log(`Título: ${movie.titulo} - Diretor: ${movie.diretor}`);
    });
  }
}

module.exports = {
  titlesAndDirectors
}