const numeros = [1,2,3,4,5]

let resultado02 = numeros.map(x => x*2)

console.log(resultado02)


let resultado = numeros.map(function(e){
    return e*2
})

console.log(resultado)




const soma = e=> e+10
console.log(soma)


const triplo = e=> e*3
console.log(triplo)

const paraDinheiro = e=> `RS ${parseFloat(e).toFixed(2).replace('.',',')}`

let resultado03 = numeros.map(soma).map(triplo).map(paraDinheiro)

console.log(paraDinheiro)


console.log(resultado03)