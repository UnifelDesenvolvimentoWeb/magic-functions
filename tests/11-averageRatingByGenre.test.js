const { averageRatingByGenre } = require("../src/averageRatingByGenre");

describe('averageRatingByGenre', () => {

  it('should return the average rating of movies for a given genre', () => {
      const genre = 'Ação';
      const expected = 'A média de avaliação dos filmes do gênero Ação é 7.72.';
      const result = averageRatingByGenre(genre);
      expect(result).toEqual(expected);
  });

  it('should return a message if there are no movies for a given genre', () => {
      const genre = 'Filme Clássico';
      const expected = 'Não há filmes do gênero Filme Clássico.';
      const result = averageRatingByGenre(genre);
      expect(result).toEqual(expected);
  });

  it('should return the average rating with two decimal places', () => {
      const genre = 'Comédia';
      const expected = 'A média de avaliação dos filmes do gênero Comédia é 7.97.';
      const result = averageRatingByGenre(genre);
      expect(result).toEqual(expected);
  });

  it('should return an error if the genre parameter is not provided', () => {
      const expected = 'O parâmetro é obrigatório.';
      const result = averageRatingByGenre();
      expect(result).toEqual(expected);
  });

  it('should return an error if the genre parameter is not a string', () => {
      const genre = 123;
      const expected = 'O parâmetro tem que ser uma string.';
      const result = averageRatingByGenre(genre);
      expect(result).toEqual(expected);
  });

  it('should return an error if the genre parameter is an empty string', () => {
      const genre = '';
      const expected = 'O parâmetro é obrigatório.';
      const result = averageRatingByGenre(genre);
      expect(result).toEqual(expected);
  });
});
