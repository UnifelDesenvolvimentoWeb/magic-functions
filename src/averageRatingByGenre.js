const movies = require("../data/movies");
function averageRatingByGenre(genero) {
  if(!genero || genero === ""){
    return `O parâmetro é obrigatório.`;
  }

  if(typeof genero === "string"){
    let aval = movies.filter((movie) => {
      return movie.genero.includes(genero);
    }).map((movie) => {
      return movie.avaliacao;
    })

    const a = aval.length;
    if(a === 0){
      return `Não há filmes do gênero ${genero}.`;
    }
    
    aval = aval.reduce((acc, curr) => {
      return acc = acc + curr;
    })
    return `A média de avaliação dos filmes do gênero ${genero} é ${(aval / a).toFixed(2)}.`;
  }
  else{
    return `O parâmetro tem que ser uma string.`;
  }
}
module.exports = { 
  averageRatingByGenre
}