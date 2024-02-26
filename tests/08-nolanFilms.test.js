const { list1 } = require("../data/list1");
const { list2 } = require("../data/list2");
const { list3 } = require("../data/list3");
const { nolanFilms } = require("../src/nolanFilms");

describe('nolanFilms', () => {

  it('should return a list of movies directed by Christopher Nolan, sorted by rating in descending order', () => {
    const movies = [
      { title: 'Inception', diretor: 'Christopher Nolan', avaliacao: 9.2 },
      { title: 'The Dark Knight', diretor: 'Christopher Nolan', avaliacao: 9.0 },
      { title: 'Interstellar', diretor: 'Christopher Nolan', avaliacao: 8.6 },
      { title: 'Dunkirk', diretor: 'Christopher Nolan', avaliacao: 8.0 },
    ];

    const expected = [
      { title: 'Inception', diretor: 'Christopher Nolan', avaliacao: 9.2 },
      { title: 'The Dark Knight', diretor: 'Christopher Nolan', avaliacao: 9.0 },
      { title: 'Interstellar', diretor: 'Christopher Nolan', avaliacao: 8.6 },
      { title: 'Dunkirk', diretor: 'Christopher Nolan', avaliacao: 8.0 },
    ];

    const result = nolanFilms(movies);

    expect(result).toEqual(expected);
  });

  it('should return an empty list when no movies are directed by Christopher Nolan', () => {

    const expected = [];

    const result = nolanFilms(list3);

    expect(result).toEqual(expected);
  });

  it('should return an empty list when input is an empty list', () => {
    const movies = [];

    const expected = [];

    const result = nolanFilms(movies);

    expect(result).toEqual(expected);
  });

  it('should return a list of movies directed by Christopher Nolan, sorted by rating in descending order, when all movies are directed by Christopher Nolan', () => {
    const [,,,,,expected] = list2

    const result = nolanFilms(list2);

    expect(result).toEqual([expected]);
  });

  it('should return a list of movies directed by Christopher Nolan, sorted by rating in descending order, when some movies are directed by Christopher Nolan and some are not', () => {
    const movies = [
      { title: 'Inception', diretor: 'Christopher Nolan', avaliacao: 9.2 },
      { title: 'The Dark Knight', diretor: 'Christopher Nolan', avaliacao: 9.0 },
      { title: 'Interstellar', diretor: 'Steven Spielberg', avaliacao: 8.6 },
      { title: 'Dunkirk', diretor: 'Quentin Tarantino', avaliacao: 8.0 },
    ];

    const expected = [
      { title: 'Inception', diretor: 'Christopher Nolan', avaliacao: 9.2 },
      { title: 'The Dark Knight', diretor: 'Christopher Nolan', avaliacao: 9.0 },
    ];

    const result = nolanFilms(movies);

    expect(result).toEqual(expected);
  });

  it('should return a list that contains only movies directed by Christopher Nolan', () => {
    const movies = [
      { title: 'Inception', diretor: 'Christopher Nolan', avaliacao: 9.2 },
      { title: 'The Dark Knight', diretor: 'Christopher Nolan', avaliacao: 9.0 },
      { title: 'Interstellar', diretor: 'Steven Spielberg', avaliacao: 8.6 },
      { title: 'Dunkirk', diretor: 'Quentin Tarantino', avaliacao: 8.0 },
    ];

    const result = nolanFilms(movies);

    result.forEach(movie => {
      expect(movie.diretor).toBe('Christopher Nolan');
    });
  });
});
