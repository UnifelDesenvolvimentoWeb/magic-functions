const movies = require("../data/movies");
const { moviesWithActor } = require("../src/moviesWithActor");

describe('moviesWithActor', () => {

  it('should return an array of movies that includes the given actor in its cast', () => {
    const actor = "Keanu Reeves";
    const result = moviesWithActor(actor);

    expect(result).toEqual([movies[2]]);
  });

  it('should return an empty array if no movie includes the given actor in its cast', () => {
    const actor = "Robert Downey Jr.";

    const result = moviesWithActor(actor);

    expect(result).toEqual([movies[7], movies[21]]);
  });

  it('should return an empty array if the input is not a string', () => {
    const actor = 123;
    const expectedMovies = [];

    const result = moviesWithActor(actor);

    expect(result).toEqual(expectedMovies);
  });

  it('should return an empty array if the input is an empty string', () => {
    const actor = "";
    const expectedMovies = [];

    const result = moviesWithActor(actor);

    expect(result).toEqual(expectedMovies);
  });

  it('should return an empty array if the input actor does not exist in the list of movies', () => {
    const actor = "Brad Pitt";

    const result = moviesWithActor(actor);

    expect(result).toEqual([movies[15]]);
  });
});
