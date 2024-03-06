const movies = require("../data/movies");

function listOverdueLoans(movies) {

  const dataAtual = new Date();
  const emprestimosAtrasados = [];

  // para cada obj filme da lista
  for (const movie of movies) {
    // verifica se o filme tem emprestimos e se a lista de emprestimos não está vazia
    if (movie.emprestimos && movie.emprestimos.length > 0) {
      // percorre cada filme que possui emprestimos
      for (const emprestimo of movie.emprestimos) {
        // verifica se o filme está com emprestimo atrasado
        if (new Date(emprestimo.dataDevolucao) < dataAtual) {
          //atualiza o status do emprestimo para atrasado
          emprestimo.status = "atrasado";
          // adiciona o filme que possui emprestimo atrasado no array
          emprestimosAtrasados.push({
            id: movie.id,
            titulo: movie.titulo,
            dataEmprestimo: emprestimo.dataEmprestimo,
            dataDevolucao: emprestimo.dataDevolucao,
            nomePessoa: emprestimo.nomePessoa
          });
        }
      }
    }
  }

  return emprestimosAtrasados;

}

module.exports = {
  listOverdueLoans
}