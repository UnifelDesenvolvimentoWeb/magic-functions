const { list2 } = require("../data/list2");
const { list3 } = require("../data/list3");
const { titlesAndDirectors } = require("../src/titlesAndDirectors");

describe('titlesAndDirectors', () => {

  it('should iterate through the movies array and log the title and director of each movie', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    titlesAndDirectors(list2);

    expect(consoleSpy).toHaveBeenCalledWith('Título: Esqueceram de Mim - Diretor: Chris Columbus');
    expect(consoleSpy).toHaveBeenCalledWith('Título: Clube da Luta - Diretor: David Fincher');
    expect(consoleSpy).toHaveBeenCalledWith('Título: Gladiador - Diretor: Ridley Scott');

    consoleSpy.mockRestore();
  });

  it('should handle an empty movies array', () => {
    const movies = [];

    const consoleSpy = jest.spyOn(console, 'log');

    titlesAndDirectors(movies);

    expect(consoleSpy).not.toHaveBeenCalled();

    consoleSpy.mockRestore();
  });

  it('should handle movies array with a single movie object', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    titlesAndDirectors(list3);

    expect(consoleSpy).toHaveBeenCalledWith('Título: Pantera Negra - Diretor: Ryan Coogler');
    expect(consoleSpy).toHaveBeenCalledWith('Título: Vingadores: Ultimato - Diretor: Anthony Russo, Joe Russo');

    consoleSpy.mockRestore();
  });

  it('should handle a null movies parameter', () => {
    const movies = null;

    expect(() => {
      titlesAndDirectors(movies);
    }).toThrow(TypeError);
  });

  it('should handle a non-array movies parameter', () => {
    const movies = 'not an array';

    expect(() => {
      titlesAndDirectors(movies);
    }).toThrow(TypeError);
  });
});
