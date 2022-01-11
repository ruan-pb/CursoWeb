const notas = [7.7,8.9,6.5,9.0,3.2]

let notasBaixas =[]

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com Callback
const notasBaixas2=notas.filter(function(nota){
    return nota<7
})


//com Arrow
const notasBaixas3 = notas.filter(notas =>  notas <7)

console.log(notasBaixas3)


const NotasMenorQue7 = nota => nota <7

const notasBaixas4 = notas.filter(NotasMenorQue7);

console.log(notasBaixas4)