const movies = require("../data/movies");

function moviesWithActor(ator) {
  
  if (typeof ator !== 'string') {
    return []
  } else {
    const movie = movies.filter((m) => m.elenco.includes(ator));
    return movie  
    
  }
}

module.exports = {
  moviesWithActor
}