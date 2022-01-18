let p = new Promise(function(resolve){
    resolve(['Ana','Bia','Carlos','Daniel'])
})
function primeiroElemento(array){
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

//o resultado sempre passa para o próximo
p   .then(valor => valor[0]) //pegou o primeiro elemento do array, que no caso seria 'Ana'
   // .then(primeiroElemento)
    .then(primeiro => primeiro[0])//pegou a primeira letra
    .then(letra => letra.toLowerCase()) //transforma em letra minuscula
    //.then(letraMinuscula)
   //.then(letraMinuscula => console.log(letraMinuscula))//printou a primeira letra do nome de Ana de forma minusculça
    .then(console.log)
