const movies = require("../data/movies");

function getMovieById(id) {
  const movie =  movies.find((item) => item.id === id)
  return movie
}

//console.log( getMovieById())
//getMovieById()
module.exports = {
  getMovieById
}