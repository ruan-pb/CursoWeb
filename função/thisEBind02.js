function Pessoa(){
    this.idade = 0
    this.contador = 0

setInterval(function(){
    this.idade++
    console.log(this.idade)
    if(this.idade == 60){
        this.idade = 0
        console.log(`Já vai em ${this.contador += 1} Minutos`)
    }
}.bind(this),1000)

}
// Ou

/*
function Pessoa(){
    this.idade = 0
    this.contador = 0
    const self = this

setInterval(function(){
    this.idade++
    console.log(this.idade)
    if(this.idade == 60){
        this.idade = 0
        console.log(self.idade)
        console.log(`Já vai em ${this.contador += 1} Minutos`)
    }
}.bind(this),1000)

}
*/


new Pessoa