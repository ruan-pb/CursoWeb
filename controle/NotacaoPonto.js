console.log(Math.ceil(6.1))

const onj1 = {}
onj1.nome = 'bola'
console.log(onj1.nome)

function Obj(){
    this.nome = this.nome
    this.exec = function(){
        console.log('Exec...')
    }
}


const obj2 = new obj('cadeira')
const obj3 = new obj('mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec
