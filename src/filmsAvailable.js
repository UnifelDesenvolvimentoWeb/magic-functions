const movies = require("../data/movies");

const filmsAvailable = (movies) => {

  const availableMovies = movies.filter(movie => movie.disponivel)

  
  if (availableMovies.length === 0) {
    return [] 
  }

  
  const availableTitles = availableMovies.map(movie => movie.titulo)

  return availableTitles
 
}

module.exports = {
  filmsAvailable
}