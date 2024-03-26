const movies = require("../data/movies");

const filmsAvailable = (movies) => {
  const verification = movies.filter((element) => element.disponivel == true).map((element) => element.titulo)
 return verification
}

module.exports = {
  filmsAvailable
}