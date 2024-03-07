const movies = require("../data/movies");

const nolanFilms = (movies) => {
 const nolanMovies = movies.filter(movie => movie.diretor === "Christopher Nolan")
 const sortedMovies = nolanMovies.sort((a, b) => b.avaliacao - a.avaliacao)
 return sortedMovies
}
const sortedNolanMovies = nolanFilms(movies);
console.log("Filmes dirigidos por Christopher Nolan, ordenados pela avaliação em ordem decrescente:");
sortedNolanMovies.forEach(movie => {
  console.log(`Título: ${movie.titulo} - Avaliação: ${movie.avaliacao}`);
});

module.exports = {
  nolanFilms
}
