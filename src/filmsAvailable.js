const movies = require("../data/movies");

const filmsAvailable = (movies) => {

  const av = movies.filter((element) => element.disponivel == true).map((elemant) => elemant.titulo)
  return av
}
filmsAvailable(movies)
module.exports = {
  filmsAvailable
}