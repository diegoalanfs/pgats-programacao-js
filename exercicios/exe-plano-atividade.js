
const tempoDisponívelParaAtividade = 31
const pets = [{
    nome: "Luke",
    porte: "PEQUENO",
    tempoAtividade: 14
},
{
    nome: "Theo",
    porte: "Médio",
    tempoAtividade: 15
},
{
    nome: "Shayra",
    porte: "GRANDE",
    tempoAtividade: 30
}]

// Exemplo de uso:
exibirTabelaPets(
    pets,
    tempoDisponívelParaAtividade
);

function verificarAtividadePorPorte(pet) {
    const atividade = pet.porte.toLowerCase() === "pequeno" ? "Brincar dentro de casa"
        : pet.porte.toLowerCase() === "médio" ? "Caminhada no quarteirão"
            : pet.porte.toLowerCase() === "grande" ? "Correr no parque"
                : "Porte inválido"
    return atividade
}

function ajustarMensagemTempo(tempo) {
    const mensagem = tempo < 15 ? "Atividade rápido: "
        : tempo >= 15 && tempo < 30 ? "Tempo ideal: "
            : "Hora da diversão: "
    return mensagem
}

// Função auxiliar para formatar o porte (primeira letra maiúscula)
function formatarPorte(porte) {
    return porte.charAt(0).toUpperCase() + porte.slice(1).toLowerCase();
}

// Função para formatar e exibir a tabela de informações dos pets
function exibirTabelaPets(pets, tempoDisponivel) {
    // Cria um array de objetos com as informações formatadas de cada pet
    const dadosPets = pets.map(pet => ({
        Nome: pet.nome,
        Porte: formatarPorte(pet.porte),
        TempoAtividade: `${pet.tempoAtividade} min`,
        Plano: `${ajustarMensagemTempo(pet.tempoAtividade)}${verificarAtividadePorPorte(pet)}`
    }));
    
    // Exibe o título da tabela
    console.log(`============= Plano de Atividades para o Pet ==================`);

    // Exibe a tabela com os dados formatados
    console.table(dadosPets);

    // Exibe a linha de rodapé
    console.log("===============================================================");
}



