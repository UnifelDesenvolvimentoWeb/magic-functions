const { list2 } = require("../data/list2");
const { list3 } = require("../data/list3");
const movies = require("../data/movies");
const { classifyMovies } = require("../src/classifyMovies");
const { classifyMoviesList2Mock, filmeExtraMock, classifyMoviesList3Mock } = require("./mocks/listMock");

describe('classifyMovies', () => {

  it('should return an object with keys', () => {
    const movies = [];
    const result = classifyMovies(movies);
    expect(result).toHaveProperty('avaliacao');
    expect(result).toHaveProperty('disponibilidade');
    expect(result.disponibilidade).toHaveProperty('disponiveis');
    expect(result.disponibilidade).toHaveProperty('naoDisponiveis');

  });

  it('should contain an object with three keys in the \'avaliacao\' key', () => {
    const moviesList = [...movies, filmeExtraMock ]

    const result = classifyMovies(moviesList);

    expect('0-4.9' in result.avaliacao).toBe(true);
    expect('5.0-7.9' in result.avaliacao).toBe(true);
    expect('8.0-10.0' in result.avaliacao).toBe(true);
  });

  it('should sort movies within each rating interval by title', () => {

    const result = classifyMovies(list2);
  
    expect(result).toEqual(classifyMoviesList2Mock);
  });

  it('should contain an array of movies sorted by title in each key of the \'avaliacao\' object', () => {
    const result = classifyMovies(list3);
    expect(result.avaliacao['0-4.9']).toEqual([]);
    expect(result.avaliacao['5.0-7.9']).toEqual(classifyMoviesList3Mock.avaliacao['5.0-7.9']);
    expect(result.avaliacao['8.0-10.0']).toEqual(classifyMoviesList3Mock.avaliacao['8.0-10.0']);
  });

  it('should return an object with empty arrays for both \'disponiveis\' and \'naoDisponiveis\' keys when no movies are passed', () => {
    const movies = [];
    const result = classifyMovies(movies);
    expect(result.disponibilidade.disponiveis).toEqual([]);
    expect(result.disponibilidade.naoDisponiveis).toEqual([]);
  });

  it('should return an object with empty arrays for all keys in the \'avaliacao\' object when no movies are passed', () => {
    const movies = [];
    const result = classifyMovies(movies);
    expect(result.avaliacao['0-4.9']).toEqual([]);
    expect(result.avaliacao['5.0-7.9']).toEqual([]);
    expect(result.avaliacao['8.0-10.0']).toEqual([]);
  });

  it('should return an object with empty array for the \'naoDisponiveis\' key when all movies have \'disponivel\' set to true', () => {
    const result = classifyMovies(list3);
    expect(result.disponibilidade.naoDisponiveis).toEqual([]);
  });
});
