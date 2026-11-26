/*
 * Página de capítulo (capitulo1.html, capitulo2.html...).
 * O capítulo vem do atributo data-capitulo do <body>; o roteiro vem do script dados/capituloN.js.
 */
document.addEventListener("DOMContentLoaded", () => {
  const idCapitulo = document.body.dataset.capitulo;
  const perfil = Estado.perfil();
  if (!perfil?.aparencia) { irPara("perfil"); return; }   // personagem ainda não foi montada

  Roteiro.validar();
  Motor.montar({ aoPausar: abrirPausa, aoHistorico: abrirHistorico });

  // ?continuar=1 retoma o save (se ele for deste capítulo); senão começa do início
  const save = Estado.carregarJogo();
  const continuar = new URLSearchParams(location.search).has("continuar");
  const cenaSalva = save?.cena && Roteiro.chave(save.cena, idCapitulo);   // aceita saves antigos ("c1_05")
  if (continuar && save?.capitulo === idCapitulo && Roteiro.cenas[cenaSalva]) Motor.continuar({ ...save, cena: cenaSalva });
  else Motor.comecar({ nome: perfil.nome, aparencia: perfil.aparencia || Avatar.PADRAO, capitulo: idCapitulo });

  // a partir daqui o endereço sempre leva ?continuar=1: se a página for atualizada (F5),
  // o jogo volta para a cena salva em vez de recomeçar o capítulo
  if (!continuar) history.replaceState(null, "", `${location.pathname}?continuar=1${location.hash}`);

  /* HUD */
  const btnMusica = $('[data-acao="musica"]');
  const marcarMusica = () => btnMusica.setAttribute("aria-pressed", String(Estado.config.musica));
  Musica.aoMudar(marcarMusica);
  marcarMusica();

  const acoes = {
    historico: abrirHistorico,
    auto: () => Motor.alternarAuto(),
    musica: () => Musica.alternar(),
    pausa: abrirPausa,
    retomar: () => $("#modal-pausa").close(),
    config: () => { PainelConfig.montar($("[data-painel-config]")); abrirModal("#modal-config"); }
  };
  document.addEventListener("click", e => {
    const alvo = e.target.closest("[data-acao]");
    if (alvo && acoes[alvo.dataset.acao]) { e.stopPropagation(); acoes[alvo.dataset.acao](); }
  });

  function abrirModal(sel) {
    const d = $(sel);
    if (!d.open) d.showModal();
    Motor.pausar();
    d.addEventListener("close", Motor.retomar, { once: true });
    return d;
  }

  function abrirPausa() {
    abrirModal("#modal-pausa");
  }

  function abrirHistorico() {
    const lista = $("[data-historico]");
    lista.innerHTML = "";
    Motor.historico().forEach(h => {
      const li = document.createElement("li");
      li.className = h.escolha ? "escolhido" : h.nome ? "" : "narracao";
      if (h.quem) li.style.setProperty("--cor", Personagens[h.quem]?.cor);
      if (h.nome) {
        const nome = document.createElement("strong");
        nome.textContent = h.escolha ? `${h.nome} (escolha)` : h.nome;
        li.appendChild(nome);
      }
      const texto = document.createElement("span");
      texto.textContent = h.texto;
      li.appendChild(texto);
      lista.appendChild(li);
    });
    abrirModal("#modal-historico");
    lista.scrollTop = lista.scrollHeight;
  }
});
