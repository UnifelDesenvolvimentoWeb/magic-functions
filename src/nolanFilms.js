const movies = require("../data/movies");

const nolanFilms = (movies) => {
  return movies.filter((element) => element.diretor === 'Christopher Nolan')

 
}
console.log(nolanFilms(movies));

module.exports = {
  nolanFilms
}