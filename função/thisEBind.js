const pessoa = {
    saudacao:'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()//conflito entre paradigmas: funcionao e OO, por causa de querer atribuir uma função
        //com o mesmo nome do médodo e fazer a chamada

const falarDePessoa = pessoa.falar.bind(pessoa) //bind sempre que referencia o this o this sera o objeto que vc passou para a função chamada

falarDePessoa()


