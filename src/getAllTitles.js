const movies = require("../data/movies");

const getAllTitles = (movies) => {

  if(movies.length === 0) {
    return [];
  } else {
    const titulos = movies.map((movie) => movie.titulo);
    return titulos;
  }

 
}

module.exports = {
  getAllTitles
}