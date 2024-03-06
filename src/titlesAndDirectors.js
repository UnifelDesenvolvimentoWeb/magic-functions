const { movies } = require("../data/list1");

const titlesAndDirectors = (movies) => {

  if(movies.length === 0) {
    return;
  } else {
    movies.map((m) => console.log(`Título: ${m.titulo} - Diretor: ${m.diretor}`));
  }
 
}

module.exports = {
  titlesAndDirectors
}