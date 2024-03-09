const movies = require("../data/movies");

function getMovieById(id) {
  if(id === null){
    return undefined;
  }
  else if (typeof id === !"number"){
    return undefined;
  }
  else if(id < 1 || id > movies.length){
    return undefined;
  }
  return movies.find((movie) => movie.id === id)
}

module.exports = {
  getMovieById
}