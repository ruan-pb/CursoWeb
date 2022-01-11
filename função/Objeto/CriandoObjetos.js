//usando a notação literal

const obj1 ={}
console.log(obj1)

//Object em JS
const obj2 = new Object
console.log(obj2)

//funções construtoras
function Produto (nome,preco,desconto){
    this.nome = nome,
    this.getPrecoComDesconto = () =>{
        return preco*(1-desconto)
    }
}
const p1 = new Produto('Caneta',5.0,0.15)
const p2 = new Produto('Lapis',2.0,0.10)

console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())


//função factory
function criarFuncioario(nome,salario,faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario/30)*(30-faltas)
        }
    }
}
const f1 = criarFuncioario('Ruan',8000,3)

const f2 = criarFuncioario('Valdir',9000,0)

console.log(f1.getSalario())

console.log(f2.getSalario())


//Object create

const filha = Object.create
filha.nome = 'Ana'
console.log(filha)

//uma função famosa que retorna um Objeto
const fromJson = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJson.info)


//Função que congela tudo, parecido com o 'Const'
//Object.freeze

