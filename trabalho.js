function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte) {
    const adocao = idade === 1 && porte === 'M'
        ? true
        : false
    return adocao
}

function calcularConsumoDeRacao(nome, idade, peso) {
    // Peso 14.5kg deve retornar 4350g
    // Isso significa que aproximadamente 300g por kg
    const consumoPorKg = 300;
    const consumoDiario = peso * consumoPorKg;

    return consumoDiario;
}

function decidirTipoDeAtividadePorPorte(porte) {
    let atividade;

    switch (porte.toLowerCase()) {
        case 'pequeno':
            atividade = 'brincar dentro de casa';
            break;
        case 'médio':
            atividade = 'caminhada no quarteirão';
            break;
        case 'grande':
            atividade = 'correr no parque';
            break;
        default:
            atividade = 'porte inválido';
    }

    return atividade;
}

async function buscarDadoAsync() {
    const dado = "Pipoca"
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dado);
        }, 1000);
    });
}


export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}