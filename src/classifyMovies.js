const movies = require("../data/movies");

function classifyMovies(movies) {
  let obj = {
    avaliacao : {
    "0-4.9" : [],
    "5.0-7.9": [],
    "8.0-10.0" : [],
    },
    disponibilidade : {
      disponiveis : [],
      naoDisponiveis: []
    
    }
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
    if ((element.avaliacao > 0) && (element.avaliacao < 4.9) ) {
      obj.avaliacao["0-4.9"].push(film)
    }else if((element.avaliacao < 7.9) ) {
      obj.avaliacao["5.0-7.9"].push(film)
    }else if ((element.avaliacao <= 10)){
      obj.avaliacao["8.0-10.0"].push(film)
    }

    element.disponivel ? obj.disponibilidade.disponiveis.push(objDispo) :
    obj.disponibilidade.naoDisponiveis.push(objDispo)
      
  })

const ajuste = obj.avaliacao["5.0-7.9"].sort((a , b) =>{
  const titleA = a.titulo.toUpperCase(); 
  const titleB = b.titulo.toUpperCase(); 
      if (titleA < titleB) {
          return -1;
      }
      if (titleA > titleB) {
          return 1;
      }
      return 0;  
})
const oganizaAliacao = obj.avaliacao["8.0-10.0"].sort((a , b) =>{
  const titleA = a.titulo.toUpperCase(); 
  const titleB = b.titulo.toUpperCase(); 
      if (titleA < titleB) {
          return -1;
      }
      if (titleA > titleB) {
          return 1;
      }
      return 0;  
})
const organizaAvaliacao3 = obj.avaliacao["0-4.9"].sort((a , b) =>{
  const titleA = a.titulo.toUpperCase(); 
  const titleB = b.titulo.toUpperCase(); 
      if (titleA < titleB) {
          return -1;
      }
      if (titleA > titleB) {
          return 1;
      }
      return 0;  
})
  for(f of obj.avaliacao["8.0-10.0"]){
    console.log(f);
  }
  return obj
}
classifyMovies(movies)
module.exports = {
  classifyMovies
}