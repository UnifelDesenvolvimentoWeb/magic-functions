const movies = require("../data/movies");

function moviesWithActor(ator) {
  let movie = movies.filter(e => {
    return e.elenco.includes(ator);
  })

  return (movie || []) ;
}

module.exports = {
  moviesWithActor
}