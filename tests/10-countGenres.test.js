const { list2 } = require("../data/list2");
const movies = require("../data/movies");
const { countGenres } = require("../src/countGenres");

describe('countGenres', () => {

  it('should return an empty object when the input array is empty', () => {
    const movies = [];
    const result = countGenres(movies);
    expect(result).toEqual({});
  });

  it('should return an object with the count of genres when the input array has one or more movies with one or more genres', () => {
    const result = countGenres(movies);
    expect(result).toEqual({ 
    "Aventura": 9,
    "Ação": 10,
    "Biografia": 1,
    "Comédia": 3,
    "Crime": 1,
    "Drama": 12,
    "Família": 1,
    "Fantasia": 4,
    "Ficção Científica": 7,
    "Romance": 3,
    "Suspense": 3,
    "Terror": 3, 
  });
  });

  it('should return an object with the count of genres when the input array has one or more movies with one or more genres', () => {
    const result = countGenres(list2);
    expect(result).toEqual({ 
      "Aventura": 1,
      "Ação": 1,
      "Comédia": 1,
      "Drama": 4,
      "Família": 1,
      "Fantasia": 1,
      "Ficção Científica": 2,
      "Romance": 1,
  });
  });

  it('should return an object with the count of genres when the input array has one or more movies with one or more genres, even if some genres are repeated', () => {
    const movies = [
      { genero: ['Action', 'Adventure'] },
      { genero: ['Comedy', 'Action'] },
      { genero: ['Drama', 'Romance'] }
    ];
    const result = countGenres(movies);
    expect(result).toEqual({ Action: 2, Adventure: 1, Comedy: 1, Drama: 1, Romance: 1 });
  });

  it('should return an empty object when the input array has one or more movies with no genres', () => {
    const movies = [
      { genero: [] },
      { genero: ['Drama'] },
      { genero: [] }
    ];
    const result = countGenres(movies);
    expect(result).toEqual({ Drama: 1});
  });

});
