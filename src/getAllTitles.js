const movies = require("../data/movies");

const getAllTitles = (movies) => {
  if (movies.length === 0) {
    return [];
  } else {
    const titulo = movies.map((movies) => movies.titulo)
    return titulo
  }
}
console.log(getAllTitles(movies));

module.exports = {
  getAllTitles
}