const movies = require("../data/movies");

const getAllTitles = ( movies ) =>
{
  if ( !Array.isArray( movies ) || movies.length === 0 )
  {
    return [];
  }

  const titles = movies.map( ( movie ) => movie.titulo );

  return titles;
};

module.exports = {
  getAllTitles
}

//Teste
const titles = getAllTitles( movies );
console.log( titles );
