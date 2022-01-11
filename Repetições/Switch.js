const imprimirResultado = function (nota){
    const valor = ''
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('quadro de Honra')
            break
        case 8:case 7:
            console.log('Aprovado')
            break
        case 6:case 5:case 4:
            console.log('Recuperação')
            break
        case 3:case 2:case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Invalida')
    }
} 

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(5)
imprimirResultado(2)
imprimirResultado(11)
imprimirResultado(-1)