const prod1 = {
    nome:'...',
    preco:45
}
const prod1 = {
    nome:'...',
    preco:45
}

//função factory para diminuir a repetição de objetos

function criarPessoa(){
    return{
        nome:'Ana',
        Sobrenome: 'Soares'
    }
}

console.log(criarPessoa())



function criarProduto(nome,valor){
    const d = 5
    const desconto = valor - d
    return{
        nome:nome,
        preco:valor,
        ProdutoComDesconto:desconto
    }
}

console.log(criarProduto('Ruan',50))

function criarProduto01(nome,valor){
    return {
    nome,
    valor,
    desconto:0.1
    }
}

console.log(criarProduto01('Victor',80))