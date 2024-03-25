const movies = require("../data/movies");

function getMovieById(id) {

  if (typeof id !== "number") {
    return undefined;
  }

  const movies = movies.find ((filmes) => filmes.id === id) ;
  return movies || undefined; 
  
}

console.log(getMovieById (movies)); 

module.exports = {
  getMovieById
}