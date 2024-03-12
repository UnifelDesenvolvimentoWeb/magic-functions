const movies = require("../data/movies");

function classifyMovies(movies) {
  
    let avaliacao = {
    "0-4.9" : [],
    "5.0-7.9": [],
    "8.0-10.0" : [],
    }
    let disponibilidade = {
      disponiveis : [],
      naoDisponiveis: []
    }
  
  movies.forEach(element => {
    let film = {
      titulo: element.titulo,
      diretor: element.diretor,
      genero: element.genero,
      anoLancamento: element.anoLancamento,
      avaliacao: element.avaliacao,
    }
    let objDispo = {
      titulo: element.titulo
    }
    if ((element.avaliacao > 0) && (element.avaliacao < 5) ) {
      avaliacao["0-4.9"].push(film)
    }else if((element.avaliacao < 8) ) {
      avaliacao["5.0-7.9"].push(film)
    }else if ((element.avaliacao <= 10)){
      avaliacao["8.0-10.0"].push(film)
    }

    if (element.disponivel) {
      disponibilidade.disponiveis.push(objDispo);
    } else {
      disponibilidade.naoDisponiveis.push(objDispo);
    }
      
  })

  avaliacao["0-4.9"].sort((a, b) => a.titulo.toUpperCase() > b.titulo.toUpperCase() ? 1 : -1);
  avaliacao["5.0-7.9"].sort((a, b) => a.titulo.toUpperCase() > b.titulo.toUpperCase() ? 1 : -1);
  avaliacao["8.0-10.0"].sort((a, b) => a.titulo.toUpperCase() > b.titulo.toUpperCase() ? 1 : -1);
  for(f of avaliacao["5.0-7.9"]){
    console.log(f);
  }
  return {avaliacao, disponibilidade}
}
classifyMovies(movies)
module.exports = {
  classifyMovies
}