const { list2 } = require("../data/list2");
const { list3 } = require("../data/list3");
const { filmsAvailable } = require("../src/filmsAvailable");

describe('filmsAvailable', () => {

  it("should return an array of available movie titles when given an array of movie objects with 'disponivel' property set to true", () => {
    const result = filmsAvailable(list2);
    expect(result).toEqual([
    "Clube da Luta",
    "Gladiador",
    "A Chegada",
    "Amor Além da Vida",
    "Interestelar",
  ]);
  });

  it('should return an empty array when given an empty array of movie objects', () => {
    const movies = [];
    const result = filmsAvailable(movies);
    expect(result).toEqual([]);
  });

  it("should return an empty array when given an array of movie objects with all 'disponivel' properties set to false", () => {
    const movies = [
      { titulo: 'Movie 1', disponivel: false },
      { titulo: 'Movie 2', disponivel: false },
      { titulo: 'Movie 3', disponivel: false }
    ];
    const result = filmsAvailable(movies);
    expect(result).toEqual([]);
  });

  it("should return an array of available movie titles when given an array of movie objects with only one movie object and 'disponivel' property set to true", () => {
    const movies = [
      { titulo: 'Movie 1', disponivel: true }
    ];
    const result = filmsAvailable(movies);
    expect(result).toEqual(['Movie 1']);
  });

  it("should return an empty array when given an array of movie objects with only one movie object and 'disponivel' property set to false", () => {
    const movies = [
      { titulo: 'Movie 1', disponivel: false }
    ];
    const result = filmsAvailable(movies);
    expect(result).toEqual([]);
  });

  it("should return an array of available movie titles when given an array of movie objects with multiple movie objects and some 'disponivel' properties set to true and some set to false", () => {
    const result = filmsAvailable(list3);
    expect(result).toEqual([
    "Pantera Negra",
    "Vingadores: Ultimato",
    "Mad Max: Estrada da Fúria",
    "Um Lugar Silencioso",
    "Se Beber, Não Case",
    "Star Wars: Episódio IV - Uma Nova Esperança",
  ]);
  });
});
