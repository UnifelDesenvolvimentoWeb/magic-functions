const movies = require("../data/movies");

const bestRatedFilm = (movies) => {
  if (movies.length === 0) {
    return undefined;
  }

  let filmes = movies[0];
  let avaliaçãoalta = movies[0].avaliacao;
  
  for (const movie of movies) {
    if (movie.avaliacao > avaliaçãoalta) {
      filmes = movie;
      avaliaçãoalta = movie.avaliacao;
    }
  }

  return filmes; 
}
console.log(bestRatedFilm(movies));

module.exports = {
  bestRatedFilm
}