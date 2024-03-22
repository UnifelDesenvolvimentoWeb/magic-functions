const movies = require("../data/movies");

const filmSorted = (movies) => {

  const random = [...movies]

  random.sort((a, b) => a.anoLancamento - b.anoLancamento)

  return random
  
}

module.exports = {
  filmSorted
}