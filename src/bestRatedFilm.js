const movies = require("../data/movies");

const bestRatedFilm = (movies) => {

  if(movies.length === 0) {
    return undefined
  } else {
    
    let maiorAvaliacao = 0;

    for (let i = 0; i < movies.length; i++) { 

      if(movies[i].avaliacao > maiorAvaliacao) {
        maiorAvaliacao = movies[i].avaliacao;
      }      
    
    }

    const movie = movies.find((m) => m.avaliacao == maiorAvaliacao);
    return movie

  }
  
}

module.exports = {
  bestRatedFilm
}