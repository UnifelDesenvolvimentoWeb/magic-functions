const movies = require("../data/movies");

const findActorForTheMovie = (titulo) => {
  if (!titulo || typeof titulo !== 'string' || titulo.trim() === '') {
    return "Filme não encontrado."
  }
  const movie = movies.find(movie => movie.titulo.toLowerCase() === titulo.toLocaleLowerCase())
  if (!movie) {
    return "Filme não encontrado."
  }
  if (!movie.elenco || movie.elenco.length <2) {
    return "Elenco do filme não encontrado."
  }
  return movie.elenco.slice(0,2)
}
//Testes 
console.log("Teste:");
console.log(findActorForTheMovie("Matrix"));
console.log("\nTeste 2:");
console.log(findActorForTheMovie("Invalido"));

module.exports = {
  findActorForTheMovie
}