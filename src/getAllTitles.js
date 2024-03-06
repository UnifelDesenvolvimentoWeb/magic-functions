const { list1 } = require("../data/list1");
const movies = require("../data/movies");

const getAllTitles = (movies) => {

  const alltitles = movies.map((titulofilm) => { 
     
    return titulofilm.titulo
  } )
 return alltitles
}
// console.log(getAllTitles(movies));

module.exports = {
  getAllTitles
}

// OK