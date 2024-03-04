const movies = require("../data/movies");

const filmSorted = (movies) => {

  if (movies.length === 0) {
    return [];
  } else {
    const movie = [...movies];
    movie.sort((a, b) => a.anoLancamento - b.anoLancamento);
    return movie;
  }
  
}

module.exports = {
  filmSorted
}