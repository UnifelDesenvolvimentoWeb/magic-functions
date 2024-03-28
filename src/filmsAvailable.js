const movies = require("../data/movies");

const filmsAvailable = (movies) => {
  const filme= movies.filter ((element) => element.disponivel === true ).map ((element) => element.titulo)
  return filme
}

console.log(filmsAvailable(movies));
module.exports = {
  filmsAvailable
}