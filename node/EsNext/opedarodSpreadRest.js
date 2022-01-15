// operador ... Rest(Juntar) / Spread(espalhar)

//usar rest com parametro de função

// usar spread com objeto

const funcionario = {nome:'Maria', salario:12458.99}

const clone = {ativo:true,...funcionario} //significa dizer que estou espalhando dentro desse objeto clone todos atributos de funcionario

console.log(clone)

const grupoA = ['João','Pedro','Gloria']

const grupoFina = ['Maria','Rafaela',...grupoA]