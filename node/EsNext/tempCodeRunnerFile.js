
function Pessoa(){
    this.tempo = 0
    this.contador = 0
setInterval(function(){
    this.tempo++
    console.log(this.tempo)
        if(this.tempo == 60){
            tempo = 0
            console.log(`mais 1 minutos, ja vai em${this.contador +=1}`)
        }
    }.bind(this),1000)}


    new Pessoa
