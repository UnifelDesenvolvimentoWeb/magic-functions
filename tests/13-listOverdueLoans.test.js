const { list2 } = require("../data/list2");
const { list3 } = require("../data/list3");
const { listOverdueLoans } = require("../src/listOverdueLoans");
const { list2OverdueLoansMock, list3OverdueLoansMock } = require("./mocks/listMock");

describe('listOverdueLoans', () => {

  it('should return an empty array when passed an empty array of movies', () => {
    const movies = [];
    const result = listOverdueLoans(movies);
    expect(result).toEqual([]);
  });

  it('should return an array of overdue loans when passed an array of movies with overdue loans', () => {
  
    const result = listOverdueLoans(list2);

    expect(result).toEqual(list2OverdueLoansMock);
  });

  it('should return an empty array when passed an array of movies with no overdue loans', () => {    
    const result = listOverdueLoans(list3);
    expect(result).toEqual(list3OverdueLoansMock);
  });

  it('should return an empty array when passed an array of movies with no loans', () => {
    const movies = [
      {
        id: 1,
        titulo: 'Movie 1',
        emprestimos: []
      },
      {
        id: 2,
        titulo: 'Movie 2',
        emprestimos: []
      }
    ];
    const result = listOverdueLoans(movies);
    expect(result).toEqual([]);
  });

  it('should return an empty array when passed an array of movies with loans that are not yet due', () => {
    const [,,,,,movie] = list3

    const result = listOverdueLoans([movie]);
    expect(result).toEqual([]);
  });

});
