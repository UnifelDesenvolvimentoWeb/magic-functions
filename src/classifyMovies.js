const movies = require("../data/movies");

function classifyMovies(movies) {
    let sortedMovies = movies.toSorted((a,b) => a.titulo.localeCompare(b.titulo)) 
    let avaliacao = {"0-4.9": [], "5.0-7.9": [], "8.0-10.0": []}
    let disponibilidade = {disponiveis: [], naoDisponiveis: []}

    sortedMovies.forEach(movie => {
        const {anoLancamento, diretor, genero, titulo} = movie
        let requiredProperties = {anoLancamento, "avaliacao":movie.avaliacao, diretor, genero, titulo}
        
        if(movie.avaliacao <= 4.9) {
            avaliacao["0-4.9"].push(requiredProperties);
        }
        else if(movie.avaliacao >= 5 && movie.avaliacao <= 7.9) {
            avaliacao["5.0-7.9"].push(requiredProperties);
        }
        else {
            avaliacao["8.0-10.0"].push(requiredProperties);
        }
    })
    
    movies.forEach(movie => {
        if(movie.disponivel) {
            disponibilidade.disponiveis.push({titulo:movie.titulo});
        }
        else {
            disponibilidade.naoDisponiveis.push({titulo:movie.titulo});
        }
        })
  
    return ({avaliacao, disponibilidade});
}

module.exports = {
    classifyMovies
}