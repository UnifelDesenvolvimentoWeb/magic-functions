const movies = require("../data/movies");

function averageRatingByGenre(genero) {
 if (genero === undefined) {
    return "O parâmetro é obrigatório.";
 }
 if (typeof genero !== 'string') {
    return "O parâmetro tem que ser uma string.";
 }
 if (genero.trim() === '') {
    return "O parâmetro é obrigatório.";
 }
 const genreMovies = movies.filter(movie => movie.genero.includes(genero));

 if (genreMovies.length === 0) {
    return `Não há filmes do gênero ${genero}.`;
 }
 const totalRating = genreMovies.reduce((acc, movie) => acc + movie.avaliacao, 0);
 const averageRating = totalRating / genreMovies.length;
 const formattedAverageRating = averageRating.toFixed(2);
 const resultMessage = `A média de avaliação dos filmes do gênero ${genero} é ${formattedAverageRating}.`;
 return resultMessage;
}

module.exports = { 
 averageRatingByGenre
};