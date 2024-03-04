const movies = require("../data/movies");

const getAllTitles = (movies) => {
 
  if (!Array.isArray(movies) || movies.length === 0) {
    return [];
  }

  const titles = movies.filter(movie => movie && movie.titulo).map(movie => movie.titulo);

  return titles;
}


module.exports = {
  getAllTitles
}