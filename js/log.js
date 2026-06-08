const historicoMaratonas = [
    {
        tipo: "mineira",
        ano: 2026,
        titulo: "XIII Maratona Mineira de Programação (2026)",
        data: "29 e 30 de Maio, 2026",
        local: "Itabira - MG, Brasil",
        qtdEquipes: 58,
        resultados: [
            { posicaoInterna: "1º", medalha: "🏆", classeCor: "placar-ouro", nome: "Os Caramelos", membros: "Guilherme, Luiz, Rafael", posicaoGeral: "31º" },
            { posicaoInterna: "2º", medalha: "🥈", classeCor: "placar-prata", nome: "Bird Codes", membros: "Arthur, Pedro, Yury", posicaoGeral: "50º" }
        ]
    },
    {
        tipo: "icpc",
        ano: 2025,
        titulo: "Final Brasileira: Maratona SBC de Programação (2025) - ICPC",
        data: "6 a 9 de Novembro, 2025",
        local: "São Paulo - SP, Brasil",
        qtdEquipes: 66,
        resultados: [
            { posicaoInterna: "1º", medalha: "🏆", classeCor: "placar-ouro", nome: "Faltam 4 horas e 4 minutos pra chegar em Ubá", membros: "Guilherme, Júlia, Rhuan", posicaoGeral: "64º" }
        ]
    },
    {
        tipo: "icpc",
        ano: 2025,
        titulo: "Primeira Fase: Maratona SBC de Programação (2025) - ICPC",
        data: "13 de Setembro, 2025",
        local: "Uberlândia - MG, Brasil",
        qtdEquipes: 1025,
        resultados: [
            // Adicionamos a tag posicaoSede para destacar o ranking local da ICPC
            { posicaoInterna: "1º", medalha: "🏆", classeCor: "placar-ouro", nome: "Faltam 4 horas e 4 minutos pra chegar em Ubá", membros: "Guilherme, Júlia, Rhuan", posicaoSede: "4º", posicaoGeral: "166º", classificadoFinal: true },
            { posicaoInterna: "2º", medalha: "🥈", classeCor: "placar-prata", nome: "Compila e Reza", membros: "Luiz, Matheus, Rafael", posicaoSede: "7º", posicaoGeral: "314º" },
            { posicaoInterna: "3º", medalha: "🥉", classeCor: "placar-bronze", nome: "Os xadrez", membros: "Carlos, Rafael, Matheus", posicaoSede: "10º", posicaoGeral: "577º" },
            { posicaoInterna: "4º", medalha: "🏅", classeCor: "", nome: "Contra Júlia e Daniele", membros: "Guilherme, Victor, Maria", posicaoSede: "11º", posicaoGeral: "592º" },
            { posicaoInterna: "5º", medalha: "🏅", classeCor: "", nome: "From 0 'til 1", membros: "Ézio, Gil, Marcelo", posicaoSede: "5º", posicaoGeral: "20º" }
        ]
    },
    {
        tipo: "mineira",
        ano: 2025,
        titulo: "XII Maratona Mineira de Programação (2025)",
        data: "30 e 31 de Maio, 2025",
        local: "Ubá - MG, Brasil",
        qtdEquipes: 60,
        resultados: [
            { posicaoInterna: "1º", medalha: "🏆", classeCor: "placar-ouro", nome: "Peugeot 207 CodeBurners", membros: "Guilherme, Júlia, Rhuan", posicaoGeral: "32º"},
            { posicaoInterna: "2º", medalha: "🥈", classeCor: "placar-prata", nome: "Loop Infinito", membros: "Matheus, Vanessa, Victor", posicaoGeral: "47º" }
        ]
    },
    {
        tipo: "cerrado",
        ano: 2025,
        titulo: "I Maratona SBC de Programação do Cerrado (2025)",
        data: "6 de Abril, 2025",
        local: "Uberlândia - MG, Brasil",
        qtdEquipes: 55,
        resultados: [
            { posicaoInterna: "1º", medalha: "🏆", classeCor: "placar-ouro", nome: "Exilados do cerrado", membros: "Guilherme, Júlia, Rhuan", posicaoGeral: "30º"},
            { posicaoInterna: "2º", medalha: "🥈", classeCor: "placar-prata", nome: "Os xadrez", membros: "Carlos, Rafael, Matheus", posicaoGeral: "37º" },
            { posicaoInterna: "3º", medalha: "🥉", classeCor: "placar-bronze", nome: "Linux Skynyrd", membros: "Caio, Igor, Maria", posicaoGeral: "39º" }
        ]
    },
    {
        tipo: "icpc",
        ano: 2024,
        titulo: "Primeira Fase: Maratona SBC de Programação (2024) - ICPC",
        data: "31 de Agosto, 2024",
        local: "Patrocínio - MG, Brasil",
        qtdEquipes: 880,
        resultados: [
            { posicaoInterna: "1º", medalha: "🏆", classeCor: "placar-ouro", nome: "Nokia Tijolão", membros: "Lucas, Júlia, Rhuan", posicaoSede: "3º", posicaoGeral: "264º"},
            { posicaoInterna: "2º", medalha: "🥈", classeCor: "placar-prata", nome: "Linux Skynyrd", membros: "Caio, Igor, Maria", posicaoSede: "8º", posicaoGeral: "395º" },
            { posicaoInterna: "3º", medalha: "🥉", classeCor: "placar-bronze", nome: "No localhost funciona", membros: "João, Leonardo, Leonardo", posicaoSede: "10º", posicaoGeral: "512º" },
            { posicaoInterna: "4º", medalha: "🏅", classeCor: "", nome: "os xadrez", membros: "Carlos, Rafael, Matheus", posicaoSede: "19º", posicaoGeral: "705º" },
            { posicaoInterna: "5º", medalha: "🏅", classeCor: "", nome: "brastemp540L", membros: "Ana, Athina, Camilly", posicaoSede: "26º", posicaoGeral: "778º" },
            { posicaoInterna: "6º", medalha: "🏅", classeCor: "", nome: "semNome.c", membros: "Carlos, Rafael, Matheus", posicaoSede: "29º", posicaoGeral: "799º" }
        ]
    },
    {
        tipo: "mineira",
        ano: 2024,
        titulo: "XI Maratona Mineira de Programação (2024)",
        data: "7 e 8 de Junho, 2024",
        local: "Monte Carmelo - MG, Brasil",
        qtdEquipes: 60,
        resultados: [
            { posicaoInterna: "1º", medalha: "🏆", classeCor: "placar-ouro", nome: "MotorolaDoVitao.mp3", membros: "Júlia, Lucas, Rhuan", posicaoGeral: "34º"},
            { posicaoInterna: "2º", medalha: "🥈", classeCor: "placar-prata", nome: "brastemp540L", membros: "Ana, Bianca, Camilly", posicaoGeral: "42º" },
            { posicaoInterna: "3º", medalha: "🥉", classeCor: "placar-bronze", nome: "Protocolo FNP", membros: "Caio, Enzo, Igor", posicaoGeral: "44º" },
            { posicaoInterna: "4º", medalha: "🏅", classeCor: "", nome: "Bânêmos", membros: "César, Isadora, Kamilly", posicaoGeral: "49º" }
        ]
    },
    
];

let paginaAtual = 1;
const itensPorPagina = 5; 

function aplicarFiltros() {
    paginaAtual = 1; 
    renderizarMaratonas();
}

function mudarPagina(novaPagina) {
    paginaAtual = novaPagina;
    renderizarMaratonas();
    window.scrollTo({ top: document.getElementById('filtro-tipo').offsetTop - 50, behavior: 'smooth' });
}

function renderizarMaratonas() {
    const containerMaratonas = document.getElementById('container-maratonas');
    const valorFiltroTipo = document.getElementById('filtro-tipo').value;
    const valorFiltroAno = document.getElementById('filtro-ano').value;

    let listaFiltrada = historicoMaratonas.filter(maratona => {
        let passaFiltroTipo = (valorFiltroTipo === 'todos' || maratona.tipo === valorFiltroTipo);
        let passaFiltroAno = (valorFiltroAno === 'todos' || maratona.ano.toString() === valorFiltroAno);
        return passaFiltroTipo && passaFiltroAno;
    });

    const totalPaginas = Math.ceil(listaFiltrada.length / itensPorPagina);
    const indiceInicio = (paginaAtual - 1) * itensPorPagina;
    const indiceFim = indiceInicio + itensPorPagina;
    const maratonasDestaPagina = listaFiltrada.slice(indiceInicio, indiceFim);

    let htmlFinal = "";

    if (maratonasDestaPagina.length === 0) {
        htmlFinal = `<div class="text-center py-5 text-muted"><h5>Nenhuma competição encontrada para estes filtros.</h5></div>`;
    } else {
        maratonasDestaPagina.forEach(maratona => {
            let linhasPlacar = "";
            
            maratona.resultados.forEach(equipe => {
                
                let badgeClassificado = equipe.classificadoFinal 
                    ? `<span style="background-color: #ffd700; color: #2a0066; font-size: 11px; padding: 4px 10px; border-radius: 12px; margin-top: 6px; display: inline-block; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">✈️ Classificados para a Final Brasileira</span>` 
                    : '';

                let badgeSede = equipe.posicaoSede 
                    ? `<span class="badge rounded-pill" style="background-color: #2a0066; color: #ffffff; border: 1px solid #2a0066; padding: 8px 15px; font-size: 14px; font-weight: normal;">
                           Sede: <strong style="font-size: 16px;">${equipe.posicaoSede}</strong>
                       </span>` 
                    : '';

                linhasPlacar += `
                    <div class="placar-row ${equipe.classeCor}">
                        
                        <div class="equipe-info">
                            <span class="posicao" title="Posição Interna">${equipe.medalha} ${equipe.posicaoInterna}</span>
                            <div class="equipe-detalhes">
                                <strong class="nome-equipe">${equipe.nome}</strong>
                                <span class="membros">🧑‍💻 ${equipe.membros}</span>
                                ${badgeClassificado} 
                            </div>
                        </div>
                        
                        <div class="equipe-score d-flex align-items-center gap-2">
                            ${badgeSede}
                            <span class="badge rounded-pill" style="background-color: #e6e6fa; color: #2a0066; border: 1px solid #2a0066; padding: 8px 15px; font-size: 14px; font-weight: normal;">
                                Geral: <strong style="font-size: 16px;">${equipe.posicaoGeral}</strong>
                            </span>
                        </div>

                    </div>
                `;
            });

            htmlFinal += `
                <div class="log-card mb-5">
                    <h2 class="log-titulo">${maratona.titulo}</h2>
                    <div class="log-infos mt-2 mb-4">
                        <span><i class="fa-regular fa-calendar-days"></i> ${maratona.data}</span>
                        <span><i class="fa-solid fa-location-dot"></i> ${maratona.local}</span>
                        <span><i class="fa-solid fa-users"></i> ${maratona.qtdEquipes} Equipes no Total</span>
                    </div>
                    <div class="placar-container">
                        ${linhasPlacar}
                    </div>
                </div>
            `;
        });
    }

    containerMaratonas.innerHTML = htmlFinal;
    renderizarBotoesPaginacao(totalPaginas);
}

function renderizarBotoesPaginacao(totalPaginas) {
    const containerPaginacao = document.getElementById('paginacao-container');
    let htmlPaginacao = "";

    if (totalPaginas <= 1) {
        containerPaginacao.innerHTML = "";
        return;
    }

    htmlPaginacao += `
        <li class="page-item ${paginaAtual === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="event.preventDefault(); mudarPagina(${paginaAtual - 1})">Anterior</a>
        </li>
    `;

    for (let i = 1; i <= totalPaginas; i++) {
        htmlPaginacao += `
            <li class="page-item ${paginaAtual === i ? 'active' : ''}">
                <a class="page-link" href="#" onclick="event.preventDefault(); mudarPagina(${i})">${i}</a>
            </li>
        `;
    }

    htmlPaginacao += `
        <li class="page-item ${paginaAtual === totalPaginas ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="event.preventDefault(); mudarPagina(${paginaAtual + 1})">Próximo</a>
        </li>
    `;

    containerPaginacao.innerHTML = htmlPaginacao;
}

renderizarMaratonas();