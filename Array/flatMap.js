const escola = [
    {nome:'turma',
    alunos:[{
        nome:'Gustavo',
        notas:8.1
    
    },{
        nome:'Ana',
        notas:9.3
    }]

},{
    nome:'turma M2',
    alunos:[{
        nome:'Rebeca',
        notas:8.9
    },{
        nome:'Roberta',
        notas:7.3
    }]
}]


const getNotaDoAluno = aluno => aluno.nota


const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)


console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)
