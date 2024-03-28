const { movies } = require("../data/list1");

const titlesAndDirectors = (movies) => {
  movies.forEach(e => {
    console.log(`Título: ${e.titulo} - Diretor: ${e.diretor}`)
  })
}

module.exports = {
  titlesAndDirectors
}