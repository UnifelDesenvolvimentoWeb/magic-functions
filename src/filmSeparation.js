const movies = require("../data/movies");

function filmSeparation(movies, details = true) {

  const genderMovies = {}

  
  for (const movie of movies) {
    
    if (movie.genero?.length > 0) {
      
      for (const genre of movie.genero) {
        
        if (genderMovies[genre] === undefined) {
          
          genderMovies[genre] = []
        }
        
        const itemsArray = details ? {
          anoLancamento: movie.anoLancamento,
          avaliacao: movie.avaliacao,
          diretor: movie.diretor,
          id: movie.id,
          titulo: movie.titulo
        } : movie.titulo
        genderMovies[genre].push(itemsArray)
      }
    }
  }

 
  const genderMoviesOrd = {}
  const genderOrd = Object.keys(genderMovies).sort()
  for (const genero of genderOrd) {
    genderMoviesOrd[genero] = details ? genderMovies[genero].sort((a, b) => {
      const tituloA = a.titulo.toUpperCase() 
      const tituloB = b.titulo.toUpperCase()

      if (tituloA < tituloB) {
          return -1
      }
      if (tituloA > tituloB) {
          return 1
      }
      return 0 
  }) : genderMovies[genero].sort()
  }

  return genderMoviesOrd

}

module.exports = {
  filmSeparation
}
