const movies = require("../data/movies");

const getAllTitles = (movies) => {
  if (!movies || movies.length === 0) {
    return [];
}

  return movies.map(filme => filme.titulo);
}

console.log(getAllTitles(movies))

module.exports = {
  getAllTitles
}