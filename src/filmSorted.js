const movies = require("../data/movies");

const filmSorted = (movies) => {
  const sortedMovies = [...movies]
  sortedMovies.sort((a, b) => a.anoLancamento - b.anoLancamento)
  return sortedMovies
}
const sortedMovies = filmSorted(movies)

console.log("Filmes ordenados:")
sortedMovies.forEach(movie => {
  console.log(`Título: ${movie.titulo} - Ano: ${movie.anoLancamento}`)
})
module.exports = {
  filmSorted
}