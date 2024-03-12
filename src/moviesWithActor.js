const movies = require("../data/movies");

function moviesWithActor(ator) {
 if (!ator || typeof ator !== 'string') {
  return [];
 }
 const filmesAtor = movies.filter(filme => filme.elenco.includes(ator))
 return filmesAtor
}
console.log(moviesWithActor("Leandro Firmino"));
module.exports = {
  moviesWithActor
}