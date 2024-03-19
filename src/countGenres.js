const movies = require("../data/movies");

function countGenres(movies) {
  const generoCount = {
  };
  // Itera sobre a lista de filmes

for ( const movie of movies ) { if ( movie.genero && movie.genero.length > 0 ) { for ( const genero of movie.genero ) { if ( generoCount[ genero ] ) { generoCount[ genero ]++; } else { generoCount[ genero ] = 1; }}}
}

return generoCount;
};

module.exports = { countGenres };
