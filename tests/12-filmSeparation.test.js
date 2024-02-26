const { list1 } = require("../data/list1");
const { list2 } = require("../data/list2");
const { list3 } = require("../data/list3");
const { filmSeparation } = require("../src/filmSeparation");
const { detailsMocklist2, detailsMocklist3, noDetailsMockList1, noDetailsMockList2 } = require("./mocks/separateMock");

describe('filmSeparation', () => {

  it('should correctly separate movies by genre when there are multiple genres for each movie', () => {
    const result = filmSeparation(list2)

    expect(result).toEqual(detailsMocklist2);
  });

  it('should correctly sort movies alphabetically by title when there are multiple movies', () => {
    const result = filmSeparation(list3)

    expect(result).toEqual(detailsMocklist3);
  });

  it('should correctly include movie details when \'details\' parameter is false', () => {
    const result = filmSeparation(list1, false)

    expect(result).toEqual(noDetailsMockList1);
  });

  it('should correctly include movie details when \'details\' parameter is false', () => {
    const result = filmSeparation(list2, false)

    expect(result).toEqual(noDetailsMockList2);
  });

  it('should correctly handle empty input', () => {
    const movies = [];

    const expectedOutput = {};

    expect(filmSeparation(movies)).toEqual(expectedOutput);
  });

  it('should correctly handle input with no genres', () => {
    const movies = [
      { id: 1, titulo: 'Movie 1', genero: [] },
      { id: 2, titulo: 'Movie 2', genero: [] },
    ];

    const expectedOutput = {};

    expect(filmSeparation(movies)).toEqual(expectedOutput);
  });

  it('should correctly handle input with no movies', () => {
    const movies = [];

    const expectedOutput = {};

    expect(filmSeparation(movies)).toEqual(expectedOutput);
  });
});
