const movies = require("../data/movies");

const filmsAvailable = (movies) => {
 if (movies.length === 0) {
  return [];
 } else {
    const movie = movies.filter((m) => m.disponivel === true).map((m) => m.titulo);
    return movie;
  

  

 }
}

module.exports = {
  filmsAvailable
}