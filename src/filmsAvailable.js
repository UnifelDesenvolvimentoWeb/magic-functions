const movies = require("../data/movies");

const filmsAvailable = (movies) => {

  const available = movies.filter(movie => movie.disponivel)


  if (available.length === 0) {
    return [] 
  }


  const availableTitles = available.map(movie => movie.titulo)

  return availableTitles
}

module.exports = {
  filmsAvailable
}