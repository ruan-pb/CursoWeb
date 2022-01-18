// //interval fica chamando recursivamente

// setTimeout(function (){
//     console.log('Executando Callback')

//     setTimeout(function() {
//         console.log('Executando callback02')
//     },2000)
// },2000)


function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promisse...')
            resolve()
        },tempo)
    })
}

//let p = esperarPor(3000).then(texto => console.log(texto))

esperarPor()
    .then(() => esperarPor)
    .then(esperarPor)
    .catch('Erro ao tentar esperar por 3 segundos')

function Pessoa(){
    this.tempo = 0
    this.contador = 0
setInterval(function(){
    this.tempo++
    console.log(this.tempo)
        if(this.tempo == 60){
            tempo = 0
            console.log(`mais 1 minutos, ja vai em${this.contador +=1}`)
        }
    }.bind(this),1000)}


    new Pessoa


