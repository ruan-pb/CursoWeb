// funcao sem retorno

function imprimirSoma(a, b){
    console.log(a+b)
}
imprimirSoma(2,3)

imprimirSoma(2)

imprimirSoma(2,3,5,6,4,8)

//funcao com retorno


function soma(a,b=1){
    return a+b
}

console.log(soma(2,3))

console.log(soma(2))

//Armazenado uma função em uma variavel
const imprimirSoma02 = function(a,b){
    console.log(2,3)
}
imprimirSoma02(2,3)

//Armazenando uma funcao arrow em uma variavel
const soma02 = (a,b) =>{
    return a+b
}
console.log(2,3)

//retorno implicito
const subtracao = (a,b) => a-b

console.log(subtracao2,3)






