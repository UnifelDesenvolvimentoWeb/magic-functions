const movies = require("../data/movies");

const bestRatedFilm = (movies) => {
  const lista =  movies.map((item) => item.avaliacao)
  const maiorAV = lista.reduce((acc, curr) => acc > curr? acc : curr, 0)
  const findFilm = movies.find((item) => item.avaliacao == maiorAV)
  return  findFilm
}
const li = [] 
console.log( bestRatedFilm(li))
module.exports = {
  bestRatedFilm
}