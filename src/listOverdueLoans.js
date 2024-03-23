const movies = require("../data/movies");

function listOverdueLoans ( movies )
{
  const currentDate = new Date();
  currentDate.setHours( 0, 0, 0, 0 ); // Zerando as horas, minutos, segundos e milissegundos para a garantia de uma comparação precisa

  const overdueLoans = [];

  for ( const movie of movies )
  {
    if ( movie.emprestimos && movie.emprestimos.length > 0 )
    {
      for ( const loan of movie.emprestimos )
      {
        const loanReturnDate = new Date( loan.dataDevolucao );
        loanReturnDate.setHours( 0, 0, 0, 0 ); // Zerando as horas, minutos, segundos e milissegundos para a garantia de uma comparação precisa

        if ( loanReturnDate < currentDate )
        {
          overdueLoans.push( {
            id: movie.id,
            titulo: movie.titulo,
            dataEmprestimo: loan.dataEmprestimo,
            dataDevolucao: loan.dataDevolucao,
            nomePessoa: loan.nomePessoa
          } );
        }
      }
    }
  }

  return overdueLoans;
}

module.exports = {
  listOverdueLoans
};
