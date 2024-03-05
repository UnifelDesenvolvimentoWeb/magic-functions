const movies = require("../data/movies");

const nolanFilms = (movies) => {

    const movieNolan = movies.filter((m) => m.diretor.includes("Christopher Nolan"));
    movieNolan.sort((a, b) => b.avaliacao - a.avaliacao);
    return movieNolan;
 
}

module.exports = {
  nolanFilms
}