const tecnologias = new Map()

tecnologias.set('react',{ framework:true})

tecnologias.set('Angular',{ framework:true})

console.log(tecnologias.react)// daria erro

console.log(tecnologias.get('react').framework)//daria certo

const chavesVariadas = new Map([

[function(){}, 'Função'],
[{},'Objeto'],
[123,'Numero'], 


])

chavesVariadas.forEach((vl,ch)=> {
    console.log(ch,vl)
})

console.log(chavesVariadas.has(123)) //verificar se o elemento dentro do has existe no array