//Cadeia de protótipos (prototype chain)

Object.prototype

const avo = {attr1:'A'}
const pai = {__proto__:avo, attr2:'B'}
const filho = {__proto__:pai, attr3:'C'}


console.log(filho.attr1,filho.attr2,filho.attr3)

const carro = {
    velAtual:0,
    velMaxima:200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMaxima){
            this.velMaxima+=delta
        }
        else{
            this.velAtual
        }
    },
    status(){
        return `${this.velAtual}KM de ${this.velMaxima}KM/h`
    }
}

const ferrari = {
    modelo:'f40',
    velMaxima: 324

}

const volvo = {
    modelo:'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
 
    }

}
Object.setPrototypeOf(ferrari,carro)  //ferrari tem carro como seu protótipo
Object.setPrototypeOf(volvo,carro)  //volvo tem carro como seu protótipo

console.log(ferrari)
console.log(volvo)

console.log(volvo.status())
