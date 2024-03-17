const movies = require("../data/movies");

const bestRatedFilm = (movies) => {

  if (movies.length === 0) {
    return undefined;
  }

  const filmeClassificaçãoMax = movies.filter(filme => filme.avaliacao === Math.max(...movies.map(f => f.avaliacao)));

  return filmeClassificaçãoMax[0];
  
}

module.exports = {
  bestRatedFilm
}
