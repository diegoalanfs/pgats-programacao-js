
const listaInteiroEString = [10, "String", "A", 2, "Test", 30, 4.5, -6]

console.log("==============================================")

const listaDeInterios = filtrarInteiros(listaInteiroEString)
console.log("*** Lista de Inteiros e Strings ***")
console.log(listaInteiroEString)
console.log("*** Lista filtrada por Inteiros ***")
console.log(listaDeInterios)
console.log("==============================================")


function filtrarInteiros(lista) {
    const listaFiltrada = [];

    for (let i = 0; i < lista.length; i++) {
        if (typeof lista[i] === 'number' && Number.isInteger(lista[i])) {
            listaFiltrada.push(lista[i]);
        }
    }
    return listaFiltrada;
}



const vogais = ["a", "e", "i", "o", "u"]
const textos = [{ texto: "Teste de Vogais", }
    , { texto: "Why", }
    , { texto: "Contador", }]

console.log("================= Contador de Vogais ===========")

console.table([{
    Texto: textos[0].texto,
    QdtVogais: contarVogais(textos[0].texto, vogais),
},
{
    Texto: textos[1].texto,
    QdtVogais: contarVogais(textos[1].texto, vogais),
},
{
    Texto: textos[2].texto,
    QdtVogais: contarVogais(textos[2].texto, vogais),
}])
console.log("================================================")

function contarVogais(texto, vogais) {
    let numeroDeVogais = 0;

    for (let i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])) {
            numeroDeVogais++;
        }
    }
    return numeroDeVogais;
}