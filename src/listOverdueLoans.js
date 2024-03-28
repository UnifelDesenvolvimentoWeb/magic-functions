const movies = require("../data/movies");

function listOverdueLoans(movies) {
	let overdueMovies = [];
	let date = new Date;
	currentDate = Date.parse(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`)


movies.forEach(movie => {
	if(movie.emprestimos[0] !== undefined) {
		movie.emprestimos.forEach(loan => {
			if(Date.parse(loan.dataDevolucao) < currentDate) {
				overdueMovies.push({
					"dataEmprestimo":loan.dataEmprestimo,
					"dataDevolucao":loan.dataDevolucao,
					"id":movie.id,
					"nomePessoa":loan.nomePessoa,
					"titulo":movie.titulo,
				});
			} 
		})
    }
})

return overdueMovies;
}


module.exports = {
  listOverdueLoans
}