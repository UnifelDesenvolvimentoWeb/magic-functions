const { list1 } = require("../data/list1");
const { list2 } = require("../data/list2");
const { list3 } = require("../data/list3");
const { bestRatedFilm } = require("../src/bestRatedFilm")

describe('bestRatedFilm', () => {

  it('should return the movie with the highest rating when given an array of movies with valid ratings', () => {

    const [,,,mockMovie] = list1

    const result = bestRatedFilm(list1);

    expect(result).toEqual(mockMovie);
  });

  it('should return the first movie in the array when given an array of movies with only one movie', () => {
    const [,mockMovie] = list2

    const result = bestRatedFilm(list2);

    expect(result).toEqual(mockMovie);
  });

  it('should return the first movie in the array when given an array of movies with equal ratings', () => {
    const [,,,,,mockMovie] = list3

    const result = bestRatedFilm(list3);

    expect(result).toEqual(mockMovie);
  });

  it('should return undefined when given an empty array', () => {
    const movies = [];

    const result = bestRatedFilm(movies);

    expect(result).toBeUndefined();
  });

});
