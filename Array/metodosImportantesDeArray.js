const pilotos = ['Vettel','Alonso','Raikkonen','Massa']

pilotos.pop()//remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')//adiciona um novo elementna ultima posição
console.log(pilotos)


pilotos.shift()//remove o primeiro
console.log(pilotos)



pilotos.unshift('Hamilton')//adiciona um novo elemento na primeira posição
console.log(pilotos)

//adicionar
pilotos.splice(2,0,'Botas','Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1)
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2)//novo array
console.log(algunsPilotos1)



const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)





console.log(pilotos)

