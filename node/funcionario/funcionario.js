//npm i --save axios
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

let chinesa = f => f.pais ==='China'
let mulher = f => f.genero ==='F'

const menosSalario = (func,funcAtual)=>{
    return func.salario < funcAtual ? func : funcAtual
}

axios.get(url).then(response =>{
    const funcionarios = response.data
    console.log(funcionarios)


    let resultado = funcionarios.filter(mulher).filter(chinesa).reduce(menosSalario)
    console.log(resultado)

})

