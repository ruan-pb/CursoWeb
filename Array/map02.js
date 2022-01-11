const carrinho = [
    '{"nome":"Borracha", "Preco":3.45}',
    '{"nome":"Caderno",  "Preco":13.90}',
    '{"nome":"Kit de Lapis", "Preco":41.22}',
    '{"nome":"Caneta", "Preco":7.50}',
]


const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.Preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)


console.log(resultado)