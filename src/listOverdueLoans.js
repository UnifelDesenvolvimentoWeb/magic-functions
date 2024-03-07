const movies = require("../data/movies");

function listOverdueLoans(movies) {

  const currentDate = new Date()
  const overdueLoans = []

 
  for (const movie of movies) {
    
    if (movie.emprestimos && movie.emprestimos.length > 0) {
      
      for (const emprestimo of movie.emprestimos) {
        
        if (new Date(emprestimo.dataDevolucao) < currentDate) {
          
          emprestimo.status = "atrasado"
          
          overdueLoans.push({
            id: movie.id,
            titulo: movie.titulo,
            dataEmprestimo: emprestimo.dataEmprestimo,
            dataDevolucao: emprestimo.dataDevolucao,
            nomePessoa: emprestimo.nomePessoa
          })
        }
      }
    }
  }

  return overdueLoans
 
}

module.exports = {
  listOverdueLoans
}