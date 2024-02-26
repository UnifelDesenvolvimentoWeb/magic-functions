const movies = require("../data/movies");
const { list1 } = require("../data/list1");
const { list2 } = require("../data/list2");
const { list3 } = require("../data/list3");
const { getAllTitles } = require("../src/getAllTitles");
const { mockTitles1, mockTitles2, mockTitles3 } = require("./mocks/mock");

describe('getAllTitles', () => {

  it('should return an array of movie titles when the function is called with valid input', () => {
    const result = getAllTitles(movies);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(movies.length);
    expect(result).toEqual([...mockTitles1, ...mockTitles2, ...mockTitles3]);
  });

  it('should return an array of movie titles when the function is called with valid input', () => {
    const result = getAllTitles(list1);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(list1.length);
    expect(result).toEqual(mockTitles1);
  });

  it('should return an array of movie titles when the function is called with valid input', () => {
    const result = getAllTitles(list2);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(list2.length);
    expect(result).toEqual(mockTitles2);
  });

  it('should return an array of movie titles when the function is called with valid input', () => {
    const result = getAllTitles(list3);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(list3.length);
    expect(result).toEqual(mockTitles3);
  });

  it('should return an array empty when the function is called with array empty', () => {
    const result = getAllTitles([]);
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual([]);
  });

});
