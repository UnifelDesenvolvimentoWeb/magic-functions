const movies = require("../data/movies");

const getAllTitles = (movies) => {

  if(movies.isEmpaty) return [];
  return movies.map(title => title.titulo);
}

console.log(getAllTitles(movies))

module.exports = {
  getAllTitles
}