const movies = require("../data/movies");

function moviesWithActor(ator) {

  if (typeof ator !== "string") {
    return [];
  }

const n = movies.filter ((movie) => movie.elenco.includes (ator))
return n;
}

console.log( moviesWithActor("Chadwick Boseman"));

module.exports = {
  moviesWithActor
}