
function gerarNumeroEntre(min,max,numerosProibidos){
    if(min,max)[max,min,] = [min,max]
    return new Promise((resolve,reject) => {
        const fator = max - min +1
        const aleatorio = parseInt(Math.random*fator)+min
        if(numerosProibidos.includes(aleatorio)){
            reject('Numero Repetido')
        }
        else{
            resolve(aleatorio)
        }

    })
}
async function gerarMegaSena(qtdNumeros, tentativas = 1){
    try{
    const numeros = []
    for(let _ of Array(qtdNumeros).fill(10)){
        numeros.push(await gerarNumeroEntre(1,60,numeros))
    }

        return numeros
    }catch(e){
        if(tentativas > 10){
            throw "Não deu certo"

        }
        else{
            return gerarMegaSena(qtdNumeros,tentativas + 1)
        }
    }
        
}



gerarMegaSena(15)
    .then(console.log)
    .then(console.log)

