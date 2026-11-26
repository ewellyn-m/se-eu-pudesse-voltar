/* personagens.html — galeria com abas por grupo e ficha de cada personagem */
document.addEventListener("DOMContentLoaded", () => {
  const abas = $("[data-abas-personagens]");
  const lista = $("[data-galeria-lista]");
  const detalhe = $("[data-galeria-detalhe]");
  let grupo = GruposPersonagens[0].id;

  const doGrupo = () => Object.entries(Personagens).filter(([, p]) => p.grupo === grupo);
  const bloqueado = p => p.desbloqueio && !Estado.concluido(p.desbloqueio);
  const inicial = p => `<div class="sem-imagem" style="--cor:${p.cor}">${escapar(p.nome[0])}</div>`;

  function mostrarGrupo() {
    abas.innerHTML = "";
    GruposPersonagens.forEach(g => {
      const b = document.createElement("button");
      b.type = "button";
      b.role = "tab";
      b.textContent = g.nome;
      b.setAttribute("aria-selected", String(g.id === grupo));
      b.onclick = () => { grupo = g.id; mostrarGrupo(); };
      abas.appendChild(b);
    });

    lista.innerHTML = "";
    doGrupo().forEach(([id, p], i) => {
      const li = document.createElement("li");
      li.innerHTML = `<button type="button" class="galeria-item ${bloqueado(p) ? "bloqueado" : ""}" style="--cor:${p.cor}" data-id="${id}">
        ${p.retrato ? `<img src="${p.retrato}" alt="">` : inicial(p)}
        <span>${bloqueado(p) ? "???" : escapar(p.nomeGaleria || p.nome)}</span></button>`;
      $("button", li).onclick = () => mostrarFicha(id);
      lista.appendChild(li);
      if (i === 0) mostrarFicha(id);
    });
  }

  function mostrarFicha(id) {
    const p = Personagens[id];
    $$(".galeria-item").forEach(b => b.setAttribute("aria-current", String(b.dataset.id === id)));
    detalhe.style.setProperty("--cor", p.cor);
    if (bloqueado(p)) {
      detalhe.innerHTML = `<div class="detalhe-corpo bloqueado"><img src="${p.corpo}" alt=""></div>
        <div class="detalhe-texto"><h2>???</h2><p>Conclua o capítulo para descobrir quem é.</p></div>`;
      return;
    }
    const ficha = p.ficha ? `<dl class="ficha">${Object.entries(p.ficha).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>` : "";
    detalhe.innerHTML = `
      <div class="detalhe-corpo"${p.extra ? ' data-alternar title="Clique para ver outra pose"' : ""}>
        ${p.corpo ? `<img src="${p.corpo}" alt="${escapar(p.nome)}">` : inicial(p)}
      </div>
      <div class="detalhe-texto">
        <h2>${escapar(p.nomeGaleria || p.nome)}</h2>
        ${p.papel ? `<p class="detalhe-papel">${escapar(p.papel)}</p>` : ""}
        <p>${p.descricao || '<span class="em-breve">Ficha completa em breve.</span>'}</p>
        ${p.gosta ? `<div class="gostos"><p><strong>Gosta</strong>${p.gosta}</p><p><strong>Não gosta</strong>${p.naoGosta}</p></div>` : ""}
        ${ficha}
      </div>`;
    const alternar = $("[data-alternar]", detalhe);
    if (alternar) {
      const img = $("img", alternar);
      alternar.onclick = () => { img.src = img.src.endsWith(p.extra.split("/").pop()) ? p.corpo : p.extra; };
    }
  }

  mostrarGrupo();
});
