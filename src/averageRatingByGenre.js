const movies = require("../data/movies");

function averageRatingByGenre(genero) {
  if(!genero) {
    return "O parâmetro é obrigatório."
  }
  else if(typeof genero !== 'string') {
    return "O parâmetro tem que ser uma string."
  }

  let ratings = 0;
  let movieCounter = 0;

  movies.forEach(movie => {
    if(movie.genero.includes(genero)) {
      movieCounter++;
      ratings += movie.avaliacao;
    }
  })

  return (movieCounter) ? `A média de avaliação dos filmes do gênero ${genero} é ${(ratings/movieCounter).toFixed(2)}.` : `Não há filmes do gênero ${genero}.` 
}

module.exports = { 
  averageRatingByGenre
}