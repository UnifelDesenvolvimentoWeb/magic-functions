const movies = require("../data/movies");

const getAllTitles = (movies) => {
  arrTitulos = []
  movies.forEach( (item, index, array) => {
    arrTitulos.push(item.titulo);
  })
  return arrTitulos


}
console.log(getAllTitles(movies))

module.exports = {
  getAllTitles
}