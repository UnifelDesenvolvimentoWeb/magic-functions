const movies = require("../data/movies");

const nolanFilms = (movies) => {
  const nolan = movies.filter((element) => element.diretor == 'Christopher Nolan')
  return nolan.sort((a,b) => b - a)
  
 
}



module.exports = {
  nolanFilms
}