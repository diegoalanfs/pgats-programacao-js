
const idadeMinimaParaAdocao = 2
const dogs = [{
    nome: "Luke",
    idade: 1,
    porte: "PEQUENO"
},
{
    nome: "Theo",
    idade: 2,
    porte: "Médio"
},
{
    nome: "Shayra",
    idade: 1,
    porte: "Grande"
}]

console.log("============= Validador de Idade Mínima para adoção ===============")
console.table([{
    Nome: dogs[0].nome,
    Idade: dogs[0].idade,
    Porte: dogs[0].porte.charAt(0).toUpperCase() + dogs[0].porte.slice(1).toLowerCase(),
    Status: verificarSePodeSerAdotado(dogs[0].idade, dogs[0].porte, idadeMinimaParaAdocao),
},
{
    Nome: dogs[1].nome,
    Idade: dogs[1].idade,
    Porte: dogs[1].porte.charAt(0).toUpperCase() + dogs[1].porte.slice(1).toLowerCase(),
    Status: verificarSePodeSerAdotado(dogs[1].idade, dogs[1].porte, idadeMinimaParaAdocao),
},
{
    Nome: dogs[2].nome,
    Idade: dogs[2].idade,
    Porte: dogs[2].porte.charAt(0).toUpperCase() + dogs[2].porte.slice(1).toLowerCase(),
    Status: verificarSePodeSerAdotado(dogs[2].idade, dogs[2].porte, idadeMinimaParaAdocao),
}])
console.log("===============================================================")


function verificarSePodeSerAdotado(idade, porte, idadeMinimaParaAdocao) {
    const status = porte.toLowerCase() === "pequeno" ? "Apto para Adoção" : idade >= idadeMinimaParaAdocao ? "Apto para Adoção" : "Não apto para adoção"
    return status
}


/*console.log(`Nome: ${dogs[0].nome}`)
console.log(`Idade: ${dogs[0].idade}`)
console.log(`Idade: ${dogs[0].porte.charAt(0).toUpperCase()}${dogs[0].porte.slice(1).toLowerCase()}`)
console.log(`Status: ${verificarSePodeSerAdotado(dogs[0].idade,dogs[0].porte,idadeMinimaParaAdocao)}`)
*/