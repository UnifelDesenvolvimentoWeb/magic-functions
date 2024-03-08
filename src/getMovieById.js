const movies = require("../data/movies");

function getMovieById(id) {
    
  return movies.find((movie) => movie.id === id)
  
  


  
}

module.exports = {
  getMovieById
}