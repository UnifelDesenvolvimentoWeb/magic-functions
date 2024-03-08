const movies = require("../data/movies");

function averageRatingByGenre(genre) {
  
  if (genre === undefined || genre === '') {
    return "O parâmetro é obrigatório.";
  }
  if (typeof genre !== 'string') {
    return "O parâmetro tem que ser uma string.";
  }

  const filteredMovies = movies.filter(movie => movie.genero.includes(genre));

  if (filteredMovies.length === 0) {
    return `Não há filmes do gênero ${genre}.`;
  }

  const averageRating = filteredMovies.reduce((acc, movie) => acc + movie.avaliacao, 0) / filteredMovies.length;

  return `A média de avaliação dos filmes do gênero ${genre} é ${averageRating.toFixed(2)}.`;
}

module.exports = { 
  averageRatingByGenre
};