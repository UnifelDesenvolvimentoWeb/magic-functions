const { movies} = require("../data/list1");

const titlesAndDirectors = (movies) => {

  movies.forEach(film => {
    const {titulo , diretor} = film
    console.log(`Título: ${titulo} - Diretor: ${diretor}`);
  });

}

module.exports = {
  titlesAndDirectors
}