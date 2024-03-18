const array = [10, 5, 23, 40, 2, 87]

const filter = array.filter((elementoAtual) => {
    return elementoAtual > 22
}).map((elementoAtual) => {
    return elementoAtual * 2
})


console.log(filter);
// retorno atual
// [ undefined, undefined, 46, 80, undefined, 174 ]

// retorno esperado 
// [ 46, 80, 174 ]