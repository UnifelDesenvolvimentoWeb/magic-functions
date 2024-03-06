const movies = require("../data/movies");
function averageRatingByGenre(genero) {

  if (!genero) {
    return 'O parâmetro é obrigatório.';
  }
  if (typeof genero !== 'string') {
    return 'O parâmetro tem que ser uma string.';
  }

  const filmesDoGenero = movies.filter(m => m.genero?.includes(genero));

  if (filmesDoGenero.length === 0) {
    return 'Não há filmes do gênero ' + genero + '.'
  }

  const somaAvaliacoes = filmesDoGenero.reduce((acumulado, m) => acumulado + m.avaliacao, 0);
  const avaliacaoMedia = somaAvaliacoes / filmesDoGenero.length;
  return `A média de avaliação dos filmes do gênero ${genero} é ${avaliacaoMedia.toFixed(2)}.`;
}

module.exports = { 
  averageRatingByGenre
}