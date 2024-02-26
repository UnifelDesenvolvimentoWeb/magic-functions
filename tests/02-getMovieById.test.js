const movies = require("../data/movies");
const { getMovieById } = require("../src/getMovieById");


describe('getMovieById', () => {

  it('should return the movie object with the given id', () => {
    const movie = getMovieById(5);
    expect(movie).toEqual(movies[4]);
  });

  it('should return the movie object with the given id', () => {
    const movie = getMovieById(7);
    expect(movie).toEqual(movies[6]);
  });

  it('should return the movie object with the given id', () => {
    const movie = getMovieById(12);
    expect(movie).toEqual(movies[11]);
  });

  it('should return undefined if no movie with the given id is found', () => {
    const movie = getMovieById(100);
    expect(movie).toBeUndefined();
  });

  it('should return undefined if the id parameter is not provided', () => {
    const movie = getMovieById();
    expect(movie).toBeUndefined();
  });

  it('should return undefined if the id parameter is not a number', () => {
    const movie = getMovieById("1");
    expect(movie).toBeUndefined();
  });

  it('should return undefined if the id parameter is negative', () => {
    const movie = getMovieById(-1);
    expect(movie).toBeUndefined();
  });

  it('should return undefined if the id parameter is zero', () => {
    const movie = getMovieById(0);
    expect(movie).toBeUndefined();
  });
});
