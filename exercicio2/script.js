
let receba = +prompt("Digite um numero")
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11]

for(i in array ){
    let resultado = receba*++i
    let multiplicado
    multiplicado = `${receba} X ${i} = ${resultado}`

console.log(multiplicado)
}
