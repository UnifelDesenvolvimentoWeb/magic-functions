const movies = require("../data/movies");

function getMovieById(id) {
 
  const getAllTitles = movies.find ((movie) => {

return movie.id === id


  })

return getAllTitles

}

module.exports = {
  getMovieById
}