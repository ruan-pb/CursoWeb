import React from 'react'
import ReactDOM from 'react-dom'
import Saudacao from './componentes/Saudacao.jsx'
import Multi from './componentes/Mulltiplo.jsx'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

//const elemento = <h1>React</h1>

//ReactDOM.render(<h1>React</h1>,document.getElementById('root'))//vou inserir o nome React na divisória(div) que estiver nomeada como Root

//ReactDOM.render(<BomDia nome = 'Guilherme' idade={23} />,document.getElementById('root'))//vou inserir o nome React na divisória(div) que estiver nomeada como Root


ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome = "Silva">
            <Filho nome= "Pedro" sobrenome="Silva"></Filho>
            <Filho nome= "Paulo" sobrenome="Silva"></Filho>
            <Filho nome= "Carla" sobrenome="Silva"></Filho>     
            
        </Pai>
    </div>
)
/*
ReactDOM.render(
    <div>
        <Saudacao nome ='Edu' tipo='Bom Dia'/>
    </div>
)
*/

/*ReactDOM.render(
    <div>

        <Multi.BoaTarde nome ='Ruan Cruz'/>
        <Multi.BoaNoite nome = 'Carol'/>

    </div>,document.getElementById('root'))
*/



/*ReactDOM.render( para executar maid do que uma tag, no caso vai inserir na pagina sem nenhum grupo(tag)
    <React.Fragment>

        <BoaTarde nome ='Ruan Cruz'/>
        <BoaNoite nome = 'Carol'/>

    </React.Fragment>,document.getElementById('root')
)*/

