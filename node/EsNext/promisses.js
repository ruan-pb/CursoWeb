//promisse é uma promessa que pode ser rejeita e quando aceita executa a ação

//resolver
function falarDepouisDe(segundos,frase){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(frase)
        },segundos*1000)

    })
}

falarDepouisDe(3,'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))


//Reject
function falarDepouisDe(segundos,frase){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(frase)
        },segundos*1000)

    })
}

falarDepouisDe(3,'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch( e => console.log(e))//para fazer o tratamento de erro
