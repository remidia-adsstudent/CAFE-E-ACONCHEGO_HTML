// Função para trocar as abas ativas
function mudarAba(idAba) {
    // Esconde todas as abas
    const abas = document.querySelectorAll('.aba');
    abas.forEach(aba => aba.classList.remove('ativa'));

    // Remove classe ativa dos botões de navegação
    document.getElementById('nav-inicio').classList.remove('btn-ativo');
    document.getElementById('nav-reservas').classList.remove('btn-ativo');

    // Exibe a aba selecionada
    document.getElementById(idAba).classList.add('ativa');

    // Destaca o botão da nav correspondente
    if (idAba === 'inicio') {
        document.getElementById('nav-inicio').classList.add('btn-ativo');
    } else if (idAba === 'reservas') {
        document.getElementById('nav-reservas').classList.add('btn-ativo');
    }

    // Rola suavemente para o topo do conteúdo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função executada ao enviar o formulário de reserva
function processarReserva(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Pega os valores dos campos
    const nome = document.getElementById('nome').value;
    const pessoas = document.getElementById('pessoas').value;
    const dataHoraRaw = document.getElementById('data-hora').value;

    // Formatando a data/hora para um formato legível (Dia/Mês/Ano Hora:Minuto)
    const dataObjeto = new Date(dataHoraRaw);
    const dataFormatada = dataObjeto.toLocaleString('pt-BR', {
        dateStyle: 'short',
        timeStyle: 'short'
    });

    // Gerando um código de reserva aleatório
    const codigoReserva = 'CAF-' + Math.floor(100000 + Math.random() * 900000);

    // Atualiza os dados na tela de confirmação
    document.getElementById('resumo-nome').innerHTML = `<strong>Cliente:</strong> ${nome}`;
    document.getElementById('resumo-pessoas').innerHTML = `<strong>Quantidade:</strong> ${pessoas}`;
    document.getElementById('resumo-data').innerHTML = `<strong>Data/Hora:</strong> ${dataFormatada}`;
    document.getElementById('resumo-codigo').innerHTML = `<strong>Código da Reserva:</strong> <span style="color: #b07542;">${codigoReserva}</span>`;

    // Limpa o formulário
    document.getElementById('form-reserva').reset();

    // Direciona para a aba de confirmação
    mudarAba('confirmacao');
}

// Funções para abrir/fechar o Modal de Cardápio
function abrirModalCardapio() {
    document.getElementById('modal-cardapio').style.display = 'flex';
}

function fecharModalCardapio() {
    document.getElementById('modal-cardapio').style.display = 'none';
}

// Função do botão de localização
function abrirMapa() {
    alert('Redirecionando para a rota da Cafeteria Aroma & Arte no Google Maps...');
    window.open('https://maps.google.com', '_blank');
}
