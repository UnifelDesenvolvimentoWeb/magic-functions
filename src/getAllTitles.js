const movies = require("../data/movies");

const getAllTitles = (movies) => {

  return movies.map((filme) => filme.titulo)
 
}

module.exports = {
  getAllTitles
}