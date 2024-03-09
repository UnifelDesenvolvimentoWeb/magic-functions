const movies = require("../data/movies");

const getAllTitles = (movies) => {
  if(movies.length === 0){
    return [];
  }
  return movies.map((movie) => movie.titulo)
}
console.log(getAllTitles(movies))
module.exports = {
  getAllTitles
}