/*
 * Estado persistente: progresso (save único), perfil da protagonista e configurações.
 * Progresso, perfil e escolhas acumuladas são de cada conta (a chave leva o id da conta logada);
 * as configurações (música, velocidade) são do aparelho e valem para todas as contas.
 */
const Estado = (() => {
  const conta = Sessao.atual()?.id || "visitante";
  const daConta = nome => `seeupudessevoltar.${conta}.${nome}.v1`;
  const CHAVE_SAVE = daConta("save");
  const CHAVE_CONFIG = "seeupudessevoltar.config.v1";
  const CHAVE_PROGRESSO = daConta("progresso");
  const CHAVE_PERFIL = daConta("perfil");
  const CHAVE_ACUMULADO = daConta("acumulado");

  const CONFIG_PADRAO = {
    musica: true,
    volume: 0.5,
    velocidadeTexto: 30,   // ms por caractere (menor = mais rápido; 0 = instantâneo)
    atrasoAuto: 1600
  };

  function ler(chave, padrao) {
    try {
      const bruto = localStorage.getItem(chave);
      return bruto ? JSON.parse(bruto) : padrao;
    } catch {
      return padrao;
    }
  }

  function gravar(chave, valor) {
    try { localStorage.setItem(chave, JSON.stringify(valor)); } catch { /* armazenamento indisponível */ }
  }

  function apagar(chave) {
    try { localStorage.removeItem(chave); } catch { /* ignora */ }
  }

  const config = { ...CONFIG_PADRAO, ...ler(CHAVE_CONFIG, {}) };
  const progresso = { concluidos: [], ...ler(CHAVE_PROGRESSO, {}) };

  return {
    config,
    salvarConfig() { gravar(CHAVE_CONFIG, config); },

    /* Save da partida em andamento */
    carregarJogo: () => ler(CHAVE_SAVE, null),
    salvarJogo: dados => gravar(CHAVE_SAVE, { ...dados, salvoEm: Date.now() }),
    temJogo: () => !!ler(CHAVE_SAVE, null),
    apagarJogo: () => apagar(CHAVE_SAVE),

    /* Capítulos concluídos (desbloqueiam capítulos e a ficha do "cara do porão") */
    concluido: id => progresso.concluidos.includes(id),
    concluir(id) {
      if (!progresso.concluidos.includes(id)) {
        progresso.concluidos.push(id);
        gravar(CHAVE_PROGRESSO, progresso);
      }
    },

    /* Afinidade, desvio e flags acumulados até o último capítulo concluído */
    acumulado: () => ({ pontos: {}, flags: [], ...ler(CHAVE_ACUMULADO, {}) }),
    salvarAcumulado: ({ pontos, flags }) => gravar(CHAVE_ACUMULADO, { pontos, flags }),

    /* Perfil da conta: nome (do cadastro) e aparência da personagem */
    perfil: () => ler(CHAVE_PERFIL, null),
    salvarPerfil: perfil => gravar(CHAVE_PERFIL, perfil),

    /* Conta recém-criada: começa sem save nem capítulos concluídos, só com o perfil do cadastro */
    iniciarConta(idConta, perfil) {
      gravar(`seeupudessevoltar.${idConta}.perfil.v1`, perfil);
    },

    apagarTudo() {
      // apaga o progresso; o perfil (nome e aparência) é da conta e continua
      apagar(CHAVE_SAVE);
      apagar(CHAVE_ACUMULADO);
      apagar(CHAVE_PROGRESSO);
      progresso.concluidos = [];
    }
  };
})();
