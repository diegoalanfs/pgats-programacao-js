const nome = "luke"
let idade = 2
let peso = 5.2
const raca = "sHIH TZU"
let adotado = true

console.log("============= Tag de Identificação ===============")
console.log(`Nome: ${nome.toUpperCase()}`)
console.log(`Raça: ${raca.slice(0, 1).toUpperCase()}${raca.slice(1).toLowerCase()}`)
console.log(`Peso: ${peso} kg`)

console.table([{
    Nome: nome.toUpperCase(),
    Raça: `${raca.charAt(0).toUpperCase()}${raca.slice(1).toLowerCase()}`,
    Peso: `${peso} kg`,
}])
console.log("==================================================")
