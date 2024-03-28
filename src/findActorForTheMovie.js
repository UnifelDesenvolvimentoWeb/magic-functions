const movies = require("../data/movies");

const findActorForTheMovie = (titulo) => {
  if (!titulo) {
    return "Filme não encontrado1.";
  }
  const movie = movies.find((m) => m.titulo.toUpperCase() === titulo.toUpperCase());
  if (!movie) {
    return "Filme não encontrado2.";

  }

  if (!movie.elenco || movie.elenco.length <= 2) {
    return "Filme não encontrado3";
  }

  return movie.elenco.slice (0,2);
};
const ator = findActorForTheMovie("Matrix");
if (typeof ator === "string") {
  console.error(ator);
} else {
  console.log(`encontrado: ${ator}`);
}





module.exports = {
  findActorForTheMovie
}