/*
 * Música de fundo, tocada em todas as páginas.
 * Trilha: src/musicas/trilha.mp3 (piano suave original, feito para o jogo). Para trocar,
 * substitua o arquivo ou mude o caminho abaixo.
 *
 * Como cada tela é uma página, a posição da música é guardada ao sair e retomada na próxima,
 * para a trilha não recomeçar do zero a cada clique.
 */
const Musica = (() => {
  const ARQUIVO = "src/musicas/trilha.mp3";
  const CHAVE_POSICAO = "seeupudessevoltar.musica.posicao";

  const musica = new Audio(caminho(ARQUIVO));
  musica.loop = true;

  const ouvintes = new Set();
  const avisar = () => ouvintes.forEach(fn => fn(!musica.paused));
  musica.addEventListener("play", avisar);
  musica.addEventListener("pause", avisar);

  try {
    const pos = Number(sessionStorage.getItem(CHAVE_POSICAO));
    if (pos) musica.currentTime = pos;
  } catch { /* ignora */ }

  addEventListener("pagehide", () => {
    try { sessionStorage.setItem(CHAVE_POSICAO, String(musica.currentTime)); } catch { /* ignora */ }
  });

  function iniciar() {
    if (!Estado.config.musica || !musica.paused) return;
    musica.volume = Estado.config.volume;
    musica.play().catch(() => {
      // o navegador bloqueou o som até o jogador interagir: tenta de novo no primeiro clique/tecla
      const tentar = () => { iniciar(); removeEventListener("pointerdown", tentar); removeEventListener("keydown", tentar); };
      addEventListener("pointerdown", tentar);
      addEventListener("keydown", tentar);
    });
  }

  function alternar() {
    Estado.config.musica = !Estado.config.musica;
    Estado.salvarConfig();
    if (Estado.config.musica) iniciar(); else musica.pause();
  }

  function definirVolume(valor) {
    Estado.config.volume = valor;
    Estado.salvarConfig();
    musica.volume = valor;
  }

  // começa sozinha em toda página
  document.addEventListener("DOMContentLoaded", iniciar);

  return { iniciar, alternar, definirVolume, tocando: () => !musica.paused, aoMudar: fn => ouvintes.add(fn) };
})();
