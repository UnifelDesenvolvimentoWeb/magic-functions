const movies = require("../data/movies");

function averageRatingByGenre(genero) {

  if (!genero) {
    return 'O parâmetro é obrigatório.';
  }
  if (typeof genero !== 'string') {
    return 'O parâmetro tem que ser uma string.';
  }

  const moviesGender = movies.filter(m => m.genero?.includes(genero));

  if (moviesGender.length === 0) {
    return `Não há filmes do gênero ${genero}.`
  }

  const somAva = moviesGender.reduce((acumulado, m) => acumulado + m.avaliacao, 0);
  const avaMedia = somAva / moviesGender.length;
  return `A média de avaliação dos filmes do gênero ${genero} é ${avaMedia.toFixed(2)}.`;

}

module.exports = { 
  averageRatingByGenre
}