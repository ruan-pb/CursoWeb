const pessoa = {
    nome:'Ana',
    idade: 5,
    endereco:{
        logradouro:'Rua ABC',
        numero: 1000
    }
}

const {nome,idade} = pessoa // ao invés de usar a notacao ponto com objecto


const {nome:n,idade: i} = pessoa 

console.log(n,i)


