const fs = require('fs')

const produto = {
    nome:'Celular',
    preco:1249.99,
    desconto:0.15
}

fs.writeFile(__dirname + 'arquivoGerado.json',JSON.stringify(produto),err => {  //JSON.stringify trasforma objeto em json
    console.log(err || 'Arquivo Salvo!')
})