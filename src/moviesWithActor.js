const movies = require("../data/movies");

function moviesWithActor(ator) {

    const movact = movies.filter((mact) => {
      
      return  mact.elenco.includes(ator)  
    })
     return movact

}
// console.log(moviesWithActor('Christopher Atkins'))
module.exports = {
  moviesWithActor
}
//OK