const movies = require("../data/movies");

const nolanFilms = (movies) => {
  
  const FilmNolan = movies.filter((element) => element.diretor == "Christopher Nolan")
  return FilmNolan.sort((a , b)=> b - a)
}
nolanFilms(movies)
module.exports = {
  nolanFilms
}