

const movies = require("../data/movies");

const getAllTitles = (movies) => {

  const nomeDeFilmes = movies.map((filtro) => {
    return filtro.titulo
  })
    return nomeDeFilmes
}


console.log(getAllTitles(movies));








module.exports = {
  getAllTitles
}