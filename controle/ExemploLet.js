
//vai respeitar o escopo
var numero =1
{
    let numero = 2
    console.log('dentro = ',numero)
}
console.log('fora =',numero)


// a variavel let respeita o indice i do for
const funcs = []

for(let i=0; i<10;i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()