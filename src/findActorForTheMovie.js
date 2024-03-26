const movies = require("../data/movies");

const findActorForTheMovie = (titulo) => {
  
  if (typeof(titulo) != 'string'){
    return "Filme não encontrado."
  }

  const listTitle = movies.map((item) => item.titulo.toUpperCase())  
  if(!listTitle.includes(titulo.toUpperCase())){
    return "Filme não encontrado."
  } 
  
  const actores = movies.find((item) => item.titulo.toUpperCase() == titulo.toUpperCase()).elenco
  return [actores[0], actores[1]]
}


module.exports = {
  findActorForTheMovie
}