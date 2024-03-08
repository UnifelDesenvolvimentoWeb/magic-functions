const movies = require("../data/movies");

const getAllTitles = (movies) => {
 
const todosTitulos = movies.map((movie) => {

return movie.titulo

})

return todosTitulos

}
console.log(getAllTitles(movies));
module.exports = {
  getAllTitles
}
