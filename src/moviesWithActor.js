const movies = require("../data/movies");

function moviesWithActor(ator) {
  /*const movie =  movies.find((item) => item.elenco === id)
  return movie*/
  let MovieList = []
  movies.forEach((item, index) => {
    let filtro = item.elenco.includes(ator) ? MovieList.push(item) : false
  })
  return MovieList

  //const filtro = movies.filter((item) => item.elenco[0] == "Leandro Firmino")
  
}
console.log(moviesWithActor('Leigh'))
module.exports = {
  moviesWithActor
}