




const movies = require("../data/movies");



function moviesWithActor(ator) {
 
  const actor = movies.filter((movie) => {
      return movie.elenco.includes(ator)
  })  
      return actor
}

console.log(moviesWithActor('Cary Elwes'));




module.exports = {
  moviesWithActor
}