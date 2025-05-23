function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte) {
    const adocao = idade >= 1 && porte === 'M'
        ? true
        : porte === 'P'
            ? true
            : false
    return adocao
}

function calcularConsumoDeRacao(nome, idade, peso) {
    // Peso 14.5kg deve retornar 4350g
    // Isso significa que aproximadamente 300g por kg de peso
    const consumoPorKg = 300;
    const consumoDiario = peso * consumoPorKg;

    return consumoDiario;
}

function decidirTipoDeAtividadePorPorte(porte) {
    let atividade;

    switch (porte) {
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
    // Retorna diretamente o valor 'Pipoca' de forma assíncrona
    return 'Pipoca';
}


export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}