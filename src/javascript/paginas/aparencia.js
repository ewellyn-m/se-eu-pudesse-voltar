/*
 * aparencia.html — perfil da personagem (cabelo e olhos; desenho em comum/avatar.js).
 * Primeira vez na conta: "Monte a sua personagem" e, ao salvar, entra no jogo.
 * Depois: é a página Perfil (botão no cabeçalho do menu), onde só a aparência muda.
 * O nome vem do cadastro e não pode ser alterado aqui.
 */
document.addEventListener("DOMContentLoaded", () => {
  const perfil = Estado.perfil() || {};
  const nome = perfil.nome || Sessao.atual()?.nome || "";
  const primeiraVez = !perfil.aparencia;

  const atual = structuredClone(perfil.aparencia || Avatar.PADRAO);
  let parte = "cabelo";
  const el = {
    preview: $("[data-avatar-preview]"),
    abas: $$("[data-parte]"),
    estilos: $("[data-estilos]"),
    cores: $("[data-cores]"),
    rotuloCor: $("[data-rotulo-cor]"),
    salvo: $("[data-salvo]")
  };

  $("[data-nome]").textContent = nome;
  if (primeiraVez) {
    $("[data-sobretitulo]").textContent = `Bem-vinda(o), ${nome}`;
    $("[data-titulo]").textContent = "Monte a sua personagem";
    $('[data-acao="salvar"]').textContent = "Salvar e entrar no jogo";
  } else {
    $$("[data-so-perfil]").forEach(e => (e.hidden = false));
  }

  function atualizar() {
    const cat = Avatar.catalogo[parte];
    const sel = atual[parte];
    Avatar.desenhar(el.preview, atual);
    el.abas.forEach(a => a.setAttribute("aria-selected", String(a.dataset.parte === parte)));
    el.salvo.textContent = "";

    el.estilos.innerHTML = "";
    cat.estilos.forEach(estilo => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "opcao-estilo";
      b.setAttribute("aria-pressed", String(estilo.id === sel.estilo));
      b.innerHTML = `<img src="${cat.miniatura(estilo.id, sel.cor)}" alt=""><span>${estilo.nome}</span>`;
      b.onclick = () => { sel.estilo = estilo.id; atualizar(); };
      el.estilos.appendChild(b);
    });

    el.cores.innerHTML = "";
    cat.cores.forEach(cor => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "amostra";
      b.style.setProperty("--amostra", cor.hex);
      b.title = cor.nome;
      b.setAttribute("aria-label", cor.nome);
      b.setAttribute("aria-pressed", String(cor.id === sel.cor));
      b.onclick = () => { sel.cor = cor.id; atualizar(); };
      el.cores.appendChild(b);
    });
    el.rotuloCor.textContent = `Cor ${parte === "cabelo" ? "do cabelo" : "dos olhos"}: ${cat.cores.find(c => c.id === sel.cor).nome}`;
  }

  el.abas.forEach(aba => (aba.onclick = () => { parte = aba.dataset.parte; atualizar(); }));
  atualizar();

  $('[data-acao="salvar"]').onclick = () => {
    Estado.salvarPerfil({ ...perfil, nome, aparencia: structuredClone(atual) });
    // a partida em andamento passa a usar a aparência nova também
    const save = Estado.carregarJogo();
    if (save) Estado.salvarJogo({ ...save, aparencia: structuredClone(atual) });

    if (primeiraVez) { irPara("menu"); return; }
    el.salvo.textContent = "Aparência salva ✓";
  };
});
