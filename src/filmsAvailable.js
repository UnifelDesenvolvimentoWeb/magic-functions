const movies = require("../data/movies");

const filmsAvailable = (movies) => {
  
  const availableMovies = movies.filter(movie => movie.disponivel === true);

  const availableTitles = availableMovies.map(movie => movie.titulo);

  return availableTitles;
}

module.exports = {
  filmsAvailable
};