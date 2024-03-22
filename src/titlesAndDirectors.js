const { movies } = require("../data/list1");

const titlesAndDirectors = (movies) => {

  if (movies.length === 0) {
    return;
  }

  if (movies.length === 1) {
    const { titulo, diretor } = movies[0];
    console.log(`Título: ${titulo} - Diretor: ${diretor}`)
    return;
  }

  movies.forEach((movie) => {
    const { titulo, diretor } = movie
    console.log(`Título: ${titulo} - Diretor: ${diretor}`)
  })
 
}


module.exports = {
  titlesAndDirectors
}