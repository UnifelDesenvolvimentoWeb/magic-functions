const movies = require("../data/movies");

const filmsAvailable = (movies) => {
 const availableMovies = movies.filter(movie => movie.disponivel === true)
 const titlesOfAvailableMovies = availableMovies.map(movie => movie.titulo)
 return titlesOfAvailableMovies
}

module.exports = {
  filmsAvailable
}