/* capitulos.html — lista de capítulos (cada um libera quando o anterior é concluído) */
document.addEventListener("DOMContentLoaded", () => {
  const lista = $("[data-lista-capitulos]");
  [...Capitulos, { ...CapituloEmBreve, emBreve: true }].forEach((cap, i) => {
    const anterior = Capitulos[i - 1];
    const liberado = !cap.emBreve && (!anterior || Estado.concluido(anterior.id));
    const concluido = !cap.emBreve && Estado.concluido(cap.id);
    const card = document.createElement("article");
    card.className = `capitulo-card ${liberado ? "" : "bloqueado"}`;
    card.innerHTML = `
      <div class="capitulo-capa" style="background-image:url('${caminho(cap.capa)}')"></div>
      <div class="capitulo-info">
        <p class="sobretitulo">Capítulo ${cap.numero}${concluido ? " · concluído" : ""}</p>
        <h2>${escapar(cap.titulo)}</h2>
        <p>${escapar(cap.descricao)}</p>
        <button type="button" class="botao ${liberado ? "botao-primario" : ""}" ${liberado ? "" : "disabled"}>
          ${cap.emBreve ? "Em breve" : !liberado ? `Conclua o capítulo ${anterior.numero}` : concluido ? "Jogar de novo" : "Jogar"}
        </button>
      </div>`;
    if (liberado) {
      $("button", card).onclick = async () => {
        if (Estado.temJogo() && !(await confirmar("Começar este capítulo? A partida em andamento será substituída."))) return;
        irPara(cap.pagina);
      };
    }
    lista.appendChild(card);
  });
});
