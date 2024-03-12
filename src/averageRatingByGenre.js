const movies = require("../data/movies");
function averageRatingByGenre(genero) {
  let count = 0
  let soma = 0
  if(genero === undefined || genero == ""){
    return "O parâmetro é obrigatório."
  }
  if(typeof(genero) != "string" ){
    return "O parâmetro tem que ser uma string."
  }
  for(let movie of movies){
    for(let gener of movie.genero){
      if(gener == genero){
        soma += movie.avaliacao
        count += 1 
      }
    }
  }
  if(count == 0){
    return `Não há filmes do gênero ${genero}.`
  }
  
  let media = soma / count
  return`A média de avaliação dos filmes do gênero ${genero} é ${media.toFixed(2)}.`
  
}
console.log(averageRatingByGenre('Ação'))
module.exports = { 
  averageRatingByGenre
}