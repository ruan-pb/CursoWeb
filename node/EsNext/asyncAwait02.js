function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        },tempo)
    })
}

/*Executa tudo de uma só vez
async function executar(){
    esperarPor(1500)
    console.log('Async/Wait 1...')

    esperarPor(1500)
    console.log('Async/Wait 2...')

    esperarPor(1500)
    console.log('Async/Wait 3...')
}
*///executa pausadamente
async function executar(){

    await esperarPor(1500)
    console.log('Async/Wait 1...')

    await esperarPor (1500)
    console.log('Async/Wait 2...')

    await esperarPor(1500)
    console.log('Async/Wait 3...')
}

async function executarDeVerdade(){//métdodo para pegar o valor no sicronismo
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()
