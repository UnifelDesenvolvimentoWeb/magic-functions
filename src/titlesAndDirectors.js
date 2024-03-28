const { movies } = require("../data/list1");

const titlesAndDirectors = (movies) => {
  if (!movies) {
    console.error("Dados de filmes não encontrados ou inválidos.");
    return; 
  }
  if (movies.length === 0) {
    console.log("Nenhum filme encontrado."); 
    return;
  }
  for (const movie of movies) {
    if (!movie.titulo || !movie.diretor) {
      console.warn(`Movie data incomplete for: ${movie.title}`);
      continue; 
    }

    console.log(`Título: ${movie.titulo} - Diretor: ${movie.diretor}`);
  
};
}

console.log(titlesAndDirectors(movies));




module.exports = {
  titlesAndDirectors
}