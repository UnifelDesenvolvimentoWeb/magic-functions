const movies = require("../data/movies");

function averageRatingByGenre(genero) {
  if (genero === '' || genero === null || genero === undefined) {
    return "O parâmetro é obrigatório."
  } else if (typeof genero !== "string") {
    return "O parâmetro tem que ser uma string."
  } else {
    if (movies.some((movie)=> movie.genero.includes(genero))) {
      let media = movies
      .filter((movie)=> movie.genero.includes(genero))
      .reduce((acc, movie)=>{
        acc.soma += movie.avaliacao
        acc.count += 1
        return acc
      },{soma: 0, count:0})
      const totalMedia = media.soma / media.count
      return `A média de avaliação dos filmes do gênero ${genero} é ${totalMedia.toFixed(2)}.`
    }
    return `Não há filmes do gênero ${genero}.`
  }
}

module.exports = { 
  averageRatingByGenre
}