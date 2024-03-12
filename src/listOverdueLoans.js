const movies = require("../data/movies");

function listOverdueLoans(movies) {
  let emprestimosAtrasados = []
  const data = new Date()
  const diaAtual =  data.getDate()
  const mesAtual = data.getMonth()+1
  const anoAtual = data.getFullYear()
  
  
  
  for(let movie of movies){
    for(let emprestimo of movie.emprestimos){

      let objTrasado = {
        dataDevolucao : emprestimo.dataDevolucao,
        dataEmprestimo : emprestimo.dataEmprestimo,
        id : movie.id,
        nomePessoa : emprestimo.nomePessoa,
        titulo : movie.titulo,
      }
      let parts = emprestimo.dataDevolucao.split("-")
      dataDev = new Date(parts[0], parts[1] - 1, parts[2])
      
      if(dataDev <+ data){
        emprestimosAtrasados.push(objTrasado)
      } 
      
      
    }
  }
  
  return emprestimosAtrasados
}

listOverdueLoans(movies)
module.exports = {
  listOverdueLoans
}