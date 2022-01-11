let dobro = function(a){
    return 2*a
}

//Arrow function
dobro = (a) => {
    return 2*a
}

//Arrow Function mas resumido
dobro = a => 2*a
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = (nome) =>`Olá Mundo, ${nome} Seja Bem vindo`

console.log(ola('Ruan'))