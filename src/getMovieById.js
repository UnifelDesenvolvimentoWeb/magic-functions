

const movies = require("../data/movies");



function getMovieById(id) {
  
  const idFilme = movies.find((filtro) => {
      return filtro.id === id
  })
      return idFilme 
};

console.log(getMovieById(1));


//filter retorna um array com todos os itens filtrados find só retorna o primeiro item q é true


module.exports = {
  getMovieById
}


