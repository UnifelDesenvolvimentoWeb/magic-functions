const movies = require("../data/movies");

const getAllTitles = (movies) => {
  let titles = [];
  movies.forEach(e=> {
    titles.push(e.titulo)    
  })
  
  return titles;
}

module.exports = {
  getAllTitles
}