//Object.precentExtensions(não consegue adicionar nem alterar os elementos do objeto)

const produto = Object.preventExtensions({
nome:'Qualquer', preco:1.99, tag:'promoção'
})

console.log('Extensivel:',Object.isExtensible(produto))

produto.nome = 'Boracha'
produto.descricao = 'Boracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal(não consegue adicionar ou excluir os elementos do objeto, mas pode modificar os atributos)
const pessoa = {
    nome:'Juliana',
    idade: 35
}
Object.seal(pessoa)
console.log('Selando',Object.isSealed(pessoa))


pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa)