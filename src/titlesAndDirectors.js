const { movies } = require("../data/list1");

const titlesAndDirectors = (movies) => {
  movies.map((movie) => {
    console.log(`Título: ${movie.titulo} - Diretor: ${movie.diretor}`)
  })
}

module.exports = {
  titlesAndDirectors
}