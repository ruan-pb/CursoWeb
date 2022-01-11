//console.log(global)


//é equivalente a variavel estatica dojava, é possivel ser chamada de todos os lugares
global.MinhaApp ={
    Saudacao(){
        return 'Estou em todos os lugares'
    },
    nome:'Sistema Legal'
}
/* Evita a alteração de parametros
global.MinhaApp = Object.freeze({
    Saudacao(){
        return 'Estou em todos os lugares'
    },
    nome:'Sistema Legal'
})
*/