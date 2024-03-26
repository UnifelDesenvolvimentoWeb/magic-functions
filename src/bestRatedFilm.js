const movies = require("../data/movies");

const bestRatedFilm = (movies) => {
    const sorted = movies.sort((a, b) => {
    a.avaliacao - b.avaliacao
    }) .find((movies) => movies.avaliacao > 0)
    return sorted
}

module.exports = {
  bestRatedFilm
}