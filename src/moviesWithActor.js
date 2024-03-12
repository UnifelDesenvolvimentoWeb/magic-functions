const movies = require("../data/movies");

function moviesWithActor(ator) {
  
  let MovieList = []
  movies.forEach((item, index) => {
    let filtro = item.elenco.includes(ator) ? MovieList.push(item) : false
  })

  return MovieList
}

module.exports = {
  moviesWithActor
}