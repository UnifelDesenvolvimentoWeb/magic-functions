const movies = require("../data/movies");

const filmsAvailable = (movies) => {
  let titles = [];
  movies.forEach(e => {
    if(e.disponivel) {titles.push(e.titulo)}
  })
  return titles;
}

module.exports = {
  filmsAvailable
}