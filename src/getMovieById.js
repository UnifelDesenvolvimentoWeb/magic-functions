const movies = require("../data/movies");

function getMovieById(id) {

  const film = movies.find ((movie) => {

    return movie.id === id
    
    
      })
    
    return film
    
    }

module.exports = {
  getMovieById
}