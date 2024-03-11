const movies = require("../data/movies");

function listOverdueLoans(movies) {
 const currentDate = new Date();
 currentDate.setHours(0, 0, 0, 0); 
 const overdueLoans = [];

 movies.forEach(movie => {
 if (movie.emprestimos && movie.emprestimos.length > 0) {
    movie.emprestimos.forEach(loan => {
      const loanReturnDate = new Date(loan.dataDevolucao);
      loanReturnDate.setHours(0, 0, 0, 0); 
      if (loanReturnDate < currentDate) {
        overdueLoans.push({
          id: movie.id,
          titulo: movie.titulo,
          dataEmprestimo: loan.dataEmprestimo,
          dataDevolucao: loan.dataDevolucao,
          nomePessoa: loan.nomePessoa 
        });
      }
    })
 }
 });
 return overdueLoans;
}

module.exports = {
 listOverdueLoans
};