const movies = require("../data/movies");

function listOverdueLoans(movies) {

  const currentDate = new Date();
  const overdueRentals = [];

  for (const movie of movies) {
    if (movie.emprestimos && movie.emprestimos.length > 0) {
      for (const loan of movie.emprestimos) {
        if (new Date(loan.dataDevolucao) < currentDate) {
          loan.status = "atrasado";
          overdueRentals.push({
            id: movie.id,
            titulo: movie.titulo,
            dataEmprestimo: loan.dataEmprestimo,
            dataDevolucao: loan.dataDevolucao,
            nomePessoa: loan.nomePessoa
          });
        }
      }
    }
  }

  return overdueRentals;

}

module.exports = {
  listOverdueLoans
}