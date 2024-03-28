const movies = require("../data/movies");

function filmSeparation(movies, details = true) {
  return movies.reduce((acc, movie)=>{
    movie.genero.forEach((genero)=> {
      const {anoLancamento, avaliacao, diretor, id, titulo} = movie
      const movieDetails = details === false ? titulo : {anoLancamento, avaliacao, diretor, id, titulo}

      acc[genero] ? acc[genero].push(movieDetails) : acc[genero] = [movieDetails]
      
      details === false ? acc[genero].sort() : acc[genero].sort((a,b)=> a.titulo.localeCompare(b.titulo))
    })
  return acc
  }, {})
}

module.exports = {
  filmSeparation
}
