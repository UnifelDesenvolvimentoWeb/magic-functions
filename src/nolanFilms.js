const movies = require("../data/movies");

const nolanFilms = (movies) => {
  let nolanMovies = [];
  movies.forEach(movie => {
    if(movie.diretor.includes("Nolan")) {nolanMovies.push(movie)};
  })

  return nolanMovies.toSorted((a,b) => {a.avaliacao - b.avaliacao});
}

module.exports = {
  nolanFilms
}