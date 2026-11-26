/* index.html — menu inicial: carteirinha, capítulo para continuar, linha do tempo e corações */
document.addEventListener("DOMContentLoaded", () => {
  // primeira vez na conta: antes de tudo, montar a personagem
  const perfil = Estado.perfil();
  if (!perfil?.aparencia) { irPara("perfil"); return; }

  const nome = perfil.nome || Sessao.atual()?.nome || "";
  $$("[data-usuario]").forEach(el => (el.textContent = nome));
  Avatar.desenhar($("[data-avatar-mini]"), perfil.aparencia);
  Avatar.desenhar($("[data-avatar-foto]"), perfil.aparencia);

  $('[data-acao="sair"]').onclick = async () => {
    if (await confirmar("Sair da conta? Seu progresso fica salvo para quando você voltar.")) Sessao.sair();
  };

  /* ---------- situação de cada capítulo ---------- */
  const save = Estado.carregarJogo();
  const capSave = save && capituloPorId(save.capitulo);
  const situacao = cap => {
    const anterior = Capitulos[Capitulos.indexOf(cap) - 1];
    if (capSave && cap.id === capSave.id) return "andamento";
    if (Estado.concluido(cap.id)) return "concluido";
    if (!anterior || Estado.concluido(anterior.id)) return "liberado";
    return "bloqueado";
  };

  // o capítulo "da vez": o salvo; senão o primeiro liberado que ainda não foi concluído
  const capAtual = capSave
    || Capitulos.find(c => situacao(c) === "liberado")
    || Capitulos[Capitulos.length - 1];

  const concluidos = Capitulos.filter(c => Estado.concluido(c.id)).length;
  $("[data-concluidos]").textContent = concluidos;
  $("[data-total]").textContent = Capitulos.length;

  async function abrir(cap) {
    if (capSave && cap.id !== capSave.id &&
        !(await confirmar("Começar este capítulo? A partida em andamento será substituída."))) return;
    irPara(cap.pagina);
  }
  const jogar = cap => (situacao(cap) === "andamento" ? irPara(cap.pagina, { continuar: 1 }) : abrir(cap));

  /* ---------- bilhete do capítulo da vez ---------- */
  const tudoConcluido = !capSave && concluidos === Capitulos.length;
  $("[data-bilhete-capa]").style.backgroundImage = `url('${caminho(capAtual.capa)}')`;
  $("[data-bilhete-numero]").textContent = `Capítulo ${capAtual.numero}`;
  $("[data-bilhete-titulo]").textContent = capAtual.titulo;
  $("[data-bilhete-descricao]").textContent = capAtual.descricao;
  $("[data-bilhete-chamada]").textContent =
    capSave ? "Continue de onde parou" :
    tudoConcluido ? "Você chegou ao fim (por enquanto)" :
    concluidos ? "Próximo capítulo" : "Comece a história";
  const principal = $('[data-acao="principal"]');
  principal.textContent = capSave ? "Continuar" : tudoConcluido ? "Jogar de novo" : "Jogar";
  principal.onclick = () => jogar(capAtual);

  /* ---------- linha do tempo ---------- */
  const trilha = $("[data-trilha]");
  const ROTULO = { andamento: "Em andamento", concluido: "Concluído", liberado: "Disponível", bloqueado: "Bloqueado", embreve: "Em breve" };

  [...Capitulos, { ...CapituloEmBreve, emBreve: true }].forEach(cap => {
    const sit = cap.emBreve ? "embreve" : situacao(cap);
    const li = document.createElement("li");
    li.className = `parada parada-${sit}`;
    if (cap.id === capAtual.id) li.classList.add("parada-da-vez");
    const clicavel = sit !== "bloqueado" && sit !== "embreve";
    li.innerHTML = `
      <span class="parada-ponto" aria-hidden="true">${sit === "concluido" ? "✓" : cap.numero}</span>
      <${clicavel ? "button type=\"button\"" : "div"} class="parada-cartao">
        <span class="parada-capa" style="background-image:url('${caminho(cap.capa)}')" aria-hidden="true"></span>
        <span class="parada-numero">Capítulo ${cap.numero}</span>
        <span class="parada-titulo">${escapar(cap.titulo)}</span>
        <span class="parada-selo">${ROTULO[sit]}</span>
      </${clicavel ? "button" : "div"}>`;
    if (clicavel) $(".parada-cartao", li).onclick = () => jogar(cap);
    trilha.append(li);
  });

  // deixa o capítulo da vez à vista na trilha
  const daVez = $(".parada-da-vez", trilha);
  if (daVez) trilha.scrollLeft = Math.max(0, daVez.offsetLeft - trilha.offsetLeft - 190);

  /* ---------- polaroids: afinidade com os garotos de paquera ---------- */
  const pontos = save?.pontos || Estado.acumulado().pontos || {};
  const garotos = Object.entries(typeof Personagens === "undefined" ? {} : Personagens)
    .filter(([, p]) => p.grupo === "paquera")
    .map(([id, p]) => ({ id, p, valor: Math.max(0, pontos[id] || 0) }))
    .sort((a, b) => b.valor - a.valor);
  const maior = Math.max(1, ...garotos.map(g => g.valor));
  const lista = $("[data-coracoes]");

  garotos.forEach(({ p, valor }, i) => {
    // até 5 corações, proporcionais ao garoto com mais pontos
    const cheios = valor ? Math.max(1, Math.round((valor / maior) * 5)) : 0;
    const li = document.createElement("li");
    li.className = "polaroid";
    li.style.setProperty("--giro", `${[-3, 2, -1.5, 3, -2.5, 1.5][i % 6]}deg`);
    li.style.setProperty("--cor", p.cor || "var(--destaque)");
    li.innerHTML = `
      <span class="fita-adesiva" aria-hidden="true"></span>
      <img src="${p.retrato || p.corpo}" alt="" loading="lazy">
      <span class="polaroid-nome">${escapar(p.nome)}</span>
      <span class="polaroid-coracoes" aria-label="${valor} pontos de afinidade">${"♥".repeat(cheios)}<i>${"♥".repeat(5 - cheios)}</i></span>`;
    lista.append(li);
  });

  const favorito = garotos[0];
  $("[data-favorito]").textContent = favorito && favorito.valor > 0 ? favorito.p.nome : "ninguém ainda";
});
