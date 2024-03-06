const movies = require("../data/movies");

function getMovieById(id) {

  if(isNaN(id) || id === null) {
    return undefined
  } else {
    const movie = movies.find((m) => m.id === id);
    return movie;   
  }
  
}

module.exports = {
  getMovieById
}