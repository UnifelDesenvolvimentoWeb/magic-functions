const movies = require("../data/movies");

const getAllTitles = (movies) => {
    const filme = movies.map((movies) => movies.titulo)
    return filme
}

module.exports = {
  getAllTitles
}