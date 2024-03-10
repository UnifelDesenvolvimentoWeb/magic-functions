const movies = require("../data/movies");

const bestRatedFilm = (movieList) => {

  if (!movieList || movieList.length === 0) {
    return undefined;
  }

  const maxRating = movieList.reduce((max, currentMovie) => Math.max(max, currentMovie.avaliacao), 0);

  const highestRatedMovie = movieList.find(movie => movie.avaliacao === maxRating);

  return highestRatedMovie;
}

module.exports = {
  bestRatedFilm
};