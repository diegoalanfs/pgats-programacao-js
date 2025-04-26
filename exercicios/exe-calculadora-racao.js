
const estoqueAtualRacao = 2000
const dog = {
    nome: "Luke",
    peso: 5.8
}
const gramasPorDia = verificarQtdRacaoPorDia(dog.peso)
const duracaoDoEstoque = verificarDuracaoDoEstoque(estoqueAtualRacao, gramasPorDia)

console.log("============= Calculadora de Ração Diária ===============")
console.table({
    Nome: dog.nome,
    Peso: `${dog.peso} Kg`,
    RacaoPorDia: `${gramasPorDia}g`,
    Duracao: `${duracaoDoEstoque} dias`,
})
console.log("=========================================================")

function verificarQtdRacaoPorDia(peso) {
    return peso * 30
}

function verificarDuracaoDoEstoque(estoqueAtualRacao, gramasPorDia) {
    //return Math.floor(estoqueAtualRacao/gramasPorDia)
    return parseInt(estoqueAtualRacao / gramasPorDia)
}