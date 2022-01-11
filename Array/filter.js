//map() transforma um array em outro (não altera o tamanho do array)
//filter() sempre que precisar filtrar um array(true or false) altera o tamanho do array


const produtos = [
    { nome: 'Notebook',preco:2499, fragil: true},
    { nome: 'Ipad Pro',preco:4199, fragil: true},
    { nome: 'Copo de Vidro',preco:12.49, fragil: true},
    { nome: 'Copo de Plástico',preco:18.99, fragil: false}]




    console.log(produtos.filter(function(e){
        return e.preco > 2499
    }))


    let caro = produtos => produtos.preco>2400

    let fragil = produtos => produtos.fragil=true

    let resultado = produtos.filter(caro).filter(fragil)

    console.log(resultado)