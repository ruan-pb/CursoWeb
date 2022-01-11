{
    {
        {
             var sera = 'Será'

        }
    }
}
console.log(sera)//mesmo fora do escopo retorna a variavel

// nesse caso a varialvel loval não pode ser chamada fora do escopo, pq se trata de um escopo de função

function teste(){
    var loval = 123
}

teste()

//exemplo02
//chama os dos console.log sem dar erro
var numero =1

{
    var numero = 2
    console.log('dentro = ',numero)
}
console.log('fora =',numero)


//exemplo03 com for
// a variavel var não respeita o indice i do for
const funcs = []

for(var i=0; i<10;i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()