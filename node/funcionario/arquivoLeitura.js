const fs = require('fs')

//Sincrono
const caminho = __dirname + '/arquivo.json'  //__dirname = diretorio atual

const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)


//assincrono
fs.readFile(caminho,'utf-8',(err,conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})


const config = require('./arquivo.json')
console.log(config.db)


fs.readdir(__dirname,(err,arquivos) =>{ //ler um diretorio e lista todos os arquivos nesse diretorio
    console.log('Conteudo da pasta')
    console.log(arquivos)

})