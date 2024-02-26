const { findActorForTheMovie } = require("../src/findActorForTheMovie");

describe('findActorForTheMovie', () => {

  it('should return the first two actors of a movie\'s cast when given a valid movie title', () => {
    const result = findActorForTheMovie("Matrix");
    expect(result).toEqual(["Keanu Reeves", "Laurence Fishburne"]);
  });

  it('should return the first two actors of a movie\'s cast when given a valid movie title', () => {
    const result = findActorForTheMovie("Homem de Ferro");
    expect(result).toEqual(["Robert Downey Jr.", "Gwyneth Paltrow"]);
  });

  it('should return an error message when given an invalid movie title', () => {
    const result = findActorForTheMovie("Invalid Movie");
    expect(result).toEqual("Filme não encontrado.");
  });

  it('should return an error message when the movie\'s cast is undefined', () => {
    const result = findActorForTheMovie("Undefined Cast Movie");
    expect(result).toEqual("Filme não encontrado.");
  });

  it('should return an error message when the movie title is null', () => {
    const result = findActorForTheMovie(null);
    expect(result).toEqual("Filme não encontrado.");
  });

  it('should return an error message when the movie title is an empty string', () => {
    const result = findActorForTheMovie("");
    expect(result).toEqual("Filme não encontrado.");
  });
});
