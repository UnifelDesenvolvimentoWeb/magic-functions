const movies = require("../data/movies");

function filmSeparation(movies, details = true) {
  const filmPorgenero = {}
  let listaGeneros = []
  
  for(movie of movies){
    for(i of movie.genero){
      if(!listaGeneros.includes(i)){
        listaGeneros.push(i)
        let lis = movies.filter((item) => item.genero.includes(i))
        lis.sort()
        
        let SoTitulo = lis.map((item) => item.titulo)
        SoTitulo.sort()
        
        if(details){
          filmPorgenero[i] = lis
        }
        else{
          filmPorgenero[i] = SoTitulo

        }
      }
      
    }
  }




return filmPorgenero
  

}
console.log(filmSeparation(movies))
//filmSeparation(movies)
module.exports = {
  filmSeparation
}
