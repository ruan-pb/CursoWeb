function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2,9,4,7))
console.log(soma(2,9,4,7,"Teste"))


function soma2(a=1,b=1,c=1){
    return a+b+c
}
console.log(soma(2,9,4,7),soma(2),soma())

