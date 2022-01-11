this.a = 1
exports.b = 2
module.exports.c=3

//na pagina pode até chamar essas 3 variaveis, mas para exporta somente a ultima será exportada module.exports


module.exports = {publico:true}  //unico jeito de exporta