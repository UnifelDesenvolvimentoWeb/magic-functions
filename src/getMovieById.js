const { list1 } = require("../data/list1");
const movies = require("../data/movies");

function getMovieById(id) {
  
  const idfilme = movies.find((filmeid) => {

    return filmeid.id === id

    })
   return idfilme

    // const idfilme = movies.find((filmeid) => {
        
    //   return filmeid.id === id
    // } )
    // console.log(idfilme)
    // return idfilme
}




module.exports = {
  getMovieById
}

//OK