const movies = require("../data/movies");

function moviesWithActor(actor) {
  
  if (typeof actor !== 'string' || actor.trim() === '') {
    return [];
  }

  const moviesWithGivenActor = movies.filter(movie => movie.elenco && movie.elenco.includes(actor));

  return moviesWithGivenActor;
}

module.exports = {
  moviesWithActor
};