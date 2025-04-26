
const dogs = [{
    nome: "Luke",
    peso: 10
},
{
    nome: "Theo",
    peso: 10.1
},
{
    nome: "Shayra",
    peso: 12.5
}]

console.log("============= Classificador de Porte Automático ===============")
console.table([{
    Nome: dogs[0].nome,
    Peso: dogs[0].peso,
    Porte: verificarPorte(dogs[0])
},
{
    Nome: dogs[1].nome,
    Peso: dogs[1].peso,
    Porte: verificarPorte(dogs[1])
},
{
    Nome: dogs[2].nome,
    Peso: dogs[2].peso,
    Porte: verificarPorte(dogs[2])
}])
console.log("===============================================================")


function verificarPorte(dog) {
    const porte = dog.peso <= 10 ? "Pequeno" : "Médio"
    console.log(`Nome: ${dog.nome}`)
    console.log(`Peso: ${dog.peso}`)
    console.log(`Porte: ${porte}\n`)

    return porte
}

/*
console.log(`Nome: ${dogs[0].nome}`)
console.log(`Peso: ${dogs[0].peso}`)
console.log(`Porte: ${verificarPorte(dogs[0].peso)}`)
*/