/*
 * Motor da visual novel: cenários, sprites, diálogo com digitação, escolhas,
 * cartões de capítulo, transições, histórico, modo automático e save.
 */
const Motor = (() => {
  const $ = sel => document.querySelector(sel);
  const el = {};
  const estado = {
    cena: null,            // id da cena atual
    capitulo: null,        // id do capítulo atual
    nome: "Você",
    aparencia: null,
    cenario: null,
    sprite: null,
    roupa: null,           // roupa da ocasião (ex.: "festival"); vale até uma cena trocar
    historico: [],         // [{ quem, nome, texto, escolha? }]
    pontos: {},            // afinidade e "desvio": { takeo: 3, desvio: 1, ... }
    flags: []              // marcas para usar depois: ["Mio_desconfiada", ...]
  };

  let digitando = false;
  let textoCompleto = "";
  let timerDigitacao = null;
  let timerAuto = null;
  let auto = false;
  let aguardandoClique = false;
  let ocupado = false;     // durante transições/cartões

  /* ---------- utilidades ---------- */
  const esperar = ms => new Promise(r => setTimeout(r, ms));

  /* "SN" no roteiro vira o nome escolhido pelo jogador; *ação* vira itálico;
     (comentários) no meio de uma fala viram aparte */
  function comNome(texto) {
    return texto.replace(/\bSN\b/g, estado.nome).replace(/\{ROTA\}/g, nomeDaRota);
  }

  /* "{ROTA}" no roteiro vira o nome do menino escolhido no Cap. 27 (flag Rota_Kaito, Rota_Takeo...) */
  function nomeDaRota() {
    const f = (estado.flags || []).find(x => /^Rota_/.test(x));
    const id = f ? f.slice(5).toLowerCase() : "kaito";
    return Personagens[id]?.nome ?? "Kaito";
  }

  function formatar(texto) {
    return escapar(comNome(texto))
      .replace(/\*\s*([^*]+?)\s*\*/g, "<em>$1</em>")
      .replace(/\(([^()]+)\)/g, '<span class="aparte">($1)</span>');
  }

  function nomeDe(quem) {
    if (quem === "eu") return estado.nome;
    return Personagens[quem]?.nome ?? "???";
  }

  /* ---------- afinidade, desvio e flags ---------- */
  function aplicarConsequencias({ pontos, flags }) {
    if (pontos) for (const [quem, valor] of Object.entries(pontos)) estado.pontos[quem] = (estado.pontos[quem] || 0) + valor;
    if (flags) [].concat(flags).forEach(f => { if (!estado.flags.includes(f)) estado.flags.push(f); });
  }

  /* cena "caminhos": vai para a primeira opção cuja flag existe (ou para "proxima") */
  function resolverCaminho(cena) {
    const achou = cena.caminhos.find(c => estado.flags.includes(c.flag));
    return achou ? achou.proxima : cena.proxima;
  }

  /* ---------- montagem ---------- */
  let acoes = {};          // aoPausar, aoHistorico (definidos pela página do capítulo)

  function montar(opcoes = {}) {
    acoes = opcoes;
    const palco = $(".palco");
    Object.assign(el, {
      palco,
      camadas: palco.querySelectorAll(".cenario"),
      sprite: palco.querySelector(".sprite"),
      item: palco.querySelector(".item"),
      caixa: palco.querySelector(".caixa"),
      placa: palco.querySelector(".placa-nome"),
      retrato: palco.querySelector(".retrato-avatar"),
      texto: palco.querySelector(".texto"),
      escolhas: palco.querySelector(".escolhas"),
      cartao: palco.querySelector(".cartao"),
      fim: palco.querySelector(".fim"),
      btnAuto: palco.querySelector('[data-acao="auto"]')
    });

    // Avançar: clique na cena/caixa ou teclado
    palco.querySelector(".area-clique").addEventListener("click", avancar);
    el.caixa.addEventListener("click", avancar);
    document.addEventListener("keydown", tecla);
  }

  function tecla(e) {
    if (document.querySelector("dialog[open]")) return;
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); avancar(); }
    else if (/^[1-9]$/.test(e.key)) {
      const b = el.escolhas.querySelectorAll("button")[Number(e.key) - 1];
      if (b) b.click();
    } else if (e.key.toLowerCase() === "h") acoes.aoHistorico?.();
    else if (e.key.toLowerCase() === "a") alternarAuto();
    else if (e.key === "Escape") { e.preventDefault(); acoes.aoPausar?.(); }   // evita que o mesmo Esc feche a pausa
  }

  /* ---------- fluxo ---------- */
  function avancar() {
    if (ocupado) return;
    if (digitando) { completarTexto(); return; }
    if (!aguardandoClique) return;
    const cena = Roteiro.cenas[estado.cena];
    if (cena?.proxima) mostrarCena(cena.proxima);
  }

  async function mostrarCena(idCena) {
    // "c1_01" vira "capituloAtual/c1_01" (cada capítulo tem os próprios nomes de cena)
    const id = Roteiro.chave(idCena, estado.capitulo);
    const cena = Roteiro.cenas[id];
    if (!cena) { console.error("Cena inexistente:", id); return; }
    if (cena.caminhos) { aplicarConsequencias(cena); mostrarCena(resolverCaminho(cena)); return; }
    clearTimeout(timerAuto);
    aguardandoClique = false;
    ocupado = true;

    if (cena.fim) {
      Estado.concluir(cena.fim);
      // afinidade, desvio e flags seguem para o próximo capítulo
      Estado.salvarAcumulado({ pontos: estado.pontos, flags: estado.flags });
      Estado.apagarJogo();
      ocupado = false;
      mostrarFim(cena.fim);
      return;
    }

    // Mudança de capítulo: marca o anterior como concluído e mostra o cartão do novo
    const capitulo = Roteiro.capituloDaCena[id];
    if (capitulo !== estado.capitulo) {
      if (estado.capitulo) Estado.concluir(estado.capitulo);
      estado.capitulo = capitulo;
      await cartaoCapitulo(capituloPorId(capitulo));
    }

    if (cena.transicao === "desmaio") await desmaio();
    if (cena.transicao === "tempo") await cartaoTempo(cena.legenda);

    estado.cena = id;
    aplicarConsequencias(cena);
    if ("roupa" in cena) estado.roupa = cena.roupa || null;
    aplicarCenario(cena);
    aplicarSprite(cena);
    aplicarItem(cena);
    if (cena.efeito) efeito(cena.efeito);

    ocupado = false;
    salvar();

    if (cena.texto) {
      mostrarFala(cena);
    } else {
      el.caixa.classList.add("apagada");
    }
    if (cena.escolhas && !cena.texto) mostrarEscolhas(cena.escolhas);
  }

  /* ---------- camadas visuais ---------- */
  let camadaAtiva = 0;
  function aplicarCenario(cena, instantaneo = false) {
    if (!cena.cenario || cena.cenario === estado.cenario) return;
    const def = Cenarios[cena.cenario];
    estado.cenario = cena.cenario;
    const proxima = el.camadas[1 - camadaAtiva];
    const anterior = el.camadas[camadaAtiva];
    proxima.style.backgroundImage = `url("${def.img}")`;
    proxima.className = `cenario ${def.tom ? "tom-" + def.tom : ""}`;
    el.palco.dataset.clima = def.clima || "";
    if (instantaneo) proxima.classList.add("sem-transicao");
    requestAnimationFrame(() => {
      proxima.classList.add("visivel");
      anterior.classList.remove("visivel");
    });
    camadaAtiva = 1 - camadaAtiva;
    // Troca de ambiente tira o personagem de cena (a menos que a cena defina um sprite)
    if (!("sprite" in cena)) definirSprite(null);
  }

  function aplicarSprite(cena) {
    if ("sprite" in cena) return definirSprite(cena.sprite);
    if (!cena.quem || cena.quem === "eu") return definirSprite(estado.sprite); // narração/protagonista: mantém quem está em cena (com a roupa atual)
    definirSprite(Personagens[cena.quem]?.sprite ? cena.quem : null);
  }

  /* "mio" usa a roupa da ocasião (estado.roupa); "mio:fantasma" força uma roupa só nessa cena */
  function imagemDoSprite(id) {
    const [base, roupa] = id.split(":");
    const p = Personagens[base];
    if (!p?.sprite) return null;
    return { base, p, src: p.roupas?.[roupa || estado.roupa] || p.sprite };
  }

  let spriteSrc = null;
  let trocaSprite = 0;
  function definirSprite(id) {
    const img = id ? imagemDoSprite(id) : null;
    if (!img) id = null;                              // personagem ainda sem imagem
    if (id === estado.sprite && (img?.src || null) === spriteSrc) return;
    estado.sprite = id;
    spriteSrc = img?.src || null;
    const s = el.sprite;
    const vez = ++trocaSprite;                        // cliques rápidos: só a troca mais recente aparece
    s.classList.remove("visivel");
    if (!id) return;
    const p = img.p;
    const trocar = () => {
      if (vez !== trocaSprite) return;
      s.src = img.src;
      s.alt = p.nome;
      s.dataset.personagem = img.base;
      requestAnimationFrame(() => s.classList.add("visivel"));
    };
    if (s.getAttribute("src")) setTimeout(trocar, 180); else trocar();
  }

  function aplicarItem(cena) {
    // "foto": retrato rápido, como uma foto, com o cenário atrás (Fotos em dados/personagens.js)
    const foto = cena.foto && typeof Fotos !== "undefined" ? Fotos[cena.foto] : null;
    if (foto) {
      el.item.classList.add("foto");
      el.item.classList.toggle("horizontal", foto.formato === "horizontal");
      el.item.style.backgroundImage = foto.fundo ? `url("${foto.fundo}")` : "";
      el.item.src = foto.img;
      el.item.classList.add("visivel");
    } else if (cena.item) {
      el.item.classList.remove("foto");
      el.item.classList.remove("horizontal");
      el.item.style.backgroundImage = "";
      el.item.src = Itens[cena.item];
      el.item.classList.add("visivel");
    } else {
      el.item.classList.remove("visivel");
    }
  }

  function efeito(nome) {
    el.palco.classList.remove(`efeito-${nome}`);
    void el.palco.offsetWidth;            // reinicia a animação
    el.palco.classList.add(`efeito-${nome}`);
    setTimeout(() => el.palco.classList.remove(`efeito-${nome}`), 1600);
  }

  /* ---------- diálogo ---------- */
  function mostrarFala(cena) {
    const pensamento = cena.tipo === "pensamento";
    const narracao = !cena.quem && !pensamento;
    const quem = pensamento ? "eu" : cena.quem;
    el.caixa.classList.remove("apagada");
    el.caixa.classList.toggle("narracao", narracao);
    el.caixa.classList.toggle("pensamento", pensamento);
    el.caixa.classList.toggle("mensagem", quem === "mensagem");
    el.caixa.classList.toggle("com-retrato", quem === "eu");
    el.caixa.style.setProperty("--cor-falante", narracao ? "var(--tinta-suave)" : (Personagens[quem]?.cor || "var(--rosa)"));
    el.placa.textContent = narracao || pensamento ? "" : (cena.rotulo || nomeDe(quem));
    el.placa.hidden = narracao || pensamento;
    if (quem === "eu") Avatar.desenhar(el.retrato, estado.aparencia || Avatar.PADRAO);

    estado.historico.push({ quem: quem || null, nome: narracao || pensamento ? null : (cena.rotulo || nomeDe(quem)), texto: comNome(cena.texto), pensamento });
    if (estado.historico.length > 200) estado.historico.shift();

    escolhasLimpar();
    digitar(formatar(cena.texto));
  }

  function digitar(html) {
    clearInterval(timerDigitacao);
    textoCompleto = html;
    const velocidade = Estado.config.velocidadeTexto;
    if (!velocidade) { completarTexto(); return; }
    // Digita sobre o texto já formatado, revelando caractere a caractere sem quebrar as tags
    el.texto.innerHTML = html;
    const nos = [];
    const walker = document.createTreeWalker(el.texto, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) nos.push({ no: walker.currentNode, texto: walker.currentNode.textContent });
    nos.forEach(n => (n.no.textContent = ""));
    let i = 0, j = 0;
    digitando = true;
    el.caixa.classList.remove("pronto");
    timerDigitacao = setInterval(() => {
      if (i >= nos.length) { completarTexto(); return; }
      const atual = nos[i];
      atual.no.textContent = atual.texto.slice(0, ++j);
      if (j >= atual.texto.length) { i++; j = 0; }
    }, velocidade);
  }

  function completarTexto() {
    clearInterval(timerDigitacao);
    el.texto.innerHTML = textoCompleto;
    digitando = false;
    const cena = Roteiro.cenas[estado.cena];
    if (cena.escolhas) {
      mostrarEscolhas(cena.escolhas);
    } else {
      aguardandoClique = true;
      el.caixa.classList.add("pronto");
      agendarAuto(cena);
    }
  }

  function agendarAuto(cena) {
    clearTimeout(timerAuto);
    if (!auto || !cena.proxima) return;
    timerAuto = setTimeout(avancar, Estado.config.atrasoAuto + cena.texto.length * 18);
  }

  function alternarAuto() {
    auto = !auto;
    el.btnAuto.setAttribute("aria-pressed", String(auto));
    if (auto && aguardandoClique) agendarAuto(Roteiro.cenas[estado.cena]);
    if (!auto) clearTimeout(timerAuto);
  }

  /* ---------- escolhas ---------- */
  function escolhasLimpar() {
    el.escolhas.innerHTML = "";
    el.escolhas.classList.remove("visivel");
  }

  function mostrarEscolhas(escolhas) {
    el.caixa.classList.remove("pronto");
    // escolha com "sugerir": destaca a opção do personagem com mais afinidade (todas continuam disponíveis)
    const cena = Roteiro.cenas[estado.cena];
    if (cena?.sugerir) {
      const melhor = escolhas.filter(o => o.personagem)
        .sort((a, b) => (estado.pontos[b.personagem] || 0) - (estado.pontos[a.personagem] || 0))[0];
      escolhas = escolhas.map(o => ({ ...o, sugerida: o === melhor && (estado.pontos[o.personagem] || 0) > 0 }));
    }
    el.escolhas.innerHTML = "";
    const varias = escolhas.length > 1;
    escolhas.forEach((op, i) => {
      // "A. texto" -> selo "A" + texto (as letras do roteiro original viram selos)
      const m = op.texto.match(/^([A-Z])\.\s*(.*)$/s);
      const letra = m ? m[1] : (varias ? String.fromCharCode(65 + i) : "›");
      const texto = m ? m[2] : op.texto;
      const b = document.createElement("button");
      b.type = "button";
      b.className = "escolha";
      b.style.setProperty("--atraso", `${i * 70}ms`);
      b.innerHTML = `<span class="selo">${letra}</span><span class="escolha-texto">${formatar(texto)}</span>`;
      if (op.sugerida) b.classList.add("sugerida");
      b.onclick = e => {
        e.stopPropagation();
        aplicarConsequencias(op);
        estado.historico.push({ quem: "eu", nome: estado.nome, texto: comNome(texto), escolha: true });
        escolhasLimpar();
        mostrarCena(op.proxima);
      };
      el.escolhas.appendChild(b);
    });
    el.escolhas.classList.toggle("unica", !varias);
    el.escolhas.classList.toggle("sem-caixa", el.caixa.classList.contains("apagada"));
    requestAnimationFrame(() => el.escolhas.classList.add("visivel"));
  }

  /* ---------- transições e cartões ---------- */
  async function cartaoCapitulo(cap) {
    el.cartao.innerHTML = `
      <div class="cartao-fundo" style="background-image:url('${caminho(cap.capa)}')"></div>
      <div class="cartao-conteudo">
        <p class="cartao-sobre">Capítulo ${cap.numero}</p>
        <h2 class="cartao-titulo">${escapar(cap.titulo)}</h2>
        ${cap.subtitulo ? `<p class="cartao-sub">${escapar(cap.subtitulo)}</p>` : ""}
      </div>`;
    el.caixa.classList.add("apagada");
    escolhasLimpar();
    await mostrarCartao(2600);
  }

  async function cartaoTempo(legenda) {
    const [sobre, titulo] = (legenda || "...").split(" — ");
    el.cartao.innerHTML = titulo
      ? `<div class="cartao-conteudo"><p class="cartao-sobre">${escapar(sobre)}</p><h2 class="cartao-titulo cartao-titulo-cena">${escapar(titulo)}</h2></div>`
      : `<div class="cartao-conteudo"><p class="cartao-tempo">${escapar(sobre)}</p></div>`;
    el.caixa.classList.add("apagada");
    await mostrarCartao(1900);
  }

  async function mostrarCartao(ms) {
    el.cartao.classList.add("visivel");
    await esperar(ms);
    el.cartao.classList.remove("visivel");
    await esperar(500);
  }

  async function desmaio() {
    el.caixa.classList.add("apagada");
    el.palco.classList.add("desmaiando");
    await esperar(1700);
    el.palco.classList.remove("desmaiando");
  }

  /* Fim de capítulo. Se existir o próximo, aparece o aviso dele com título,
     descrição e o botão "Continuar", que leva direto para a página do próximo capítulo. */
  async function mostrarFim(idCapitulo) {
    const cap = capituloPorId(idCapitulo);
    const seguinte = Capitulos.find(c => c.numero === cap.numero + 1);
    el.caixa.classList.add("apagada");
    escolhasLimpar();

    if (seguinte) {
      // deixa o "Continuar" do menu apontando para o próximo capítulo
      Estado.salvarJogo({ capitulo: seguinte.id, cena: null, nome: estado.nome, aparencia: estado.aparencia });
    }

    // 1) "Fim do Capítulo N"
    el.fim.innerHTML = `
      <div class="fim-conteudo">
        <p class="cartao-sobre">Fim do Capítulo ${cap.numero}</p>
        <h2 class="cartao-titulo">${escapar(cap.titulo)}</h2>
      </div>`;
    el.fim.classList.add("visivel");

    // 2) aviso do próximo capítulo
    await esperar(2200);
    const prox = seguinte || CapituloEmBreve;
    el.fim.insertAdjacentHTML("beforeend", `
      <div class="aviso-capitulo" role="dialog" aria-modal="true" aria-labelledby="aviso-titulo">
        ${prox.capa ? `<div class="aviso-capa" style="background-image:url('${caminho(prox.capa)}')"></div>` : ""}
        <div class="aviso-corpo">
          <p class="cartao-sobre">${seguinte ? "Próximo capítulo" : "Em breve"} · Capítulo ${prox.numero}</p>
          <h2 class="aviso-titulo" id="aviso-titulo">${escapar(prox.titulo)}</h2>
          <p class="aviso-descricao">${escapar(comNome(prox.descricao))}</p>
          <div class="acoes">
            <button type="button" class="botao" data-ir="menu">Voltar ao menu</button>
            ${seguinte ? `<button type="button" class="botao botao-primario" data-fim="continuar">Continuar</button>` : ""}
          </div>
        </div>
      </div>`);
    const btn = el.fim.querySelector('[data-fim="continuar"]');
    if (btn) {
      btn.onclick = () => irPara(seguinte.pagina);
      btn.focus();
    }
  }

  /* ---------- save ---------- */
  function salvar() {
    Estado.salvarJogo({
      cena: estado.cena,
      capitulo: estado.capitulo,
      nome: estado.nome,
      aparencia: estado.aparencia,
      cenario: estado.cenario,
      sprite: estado.sprite,
      roupa: estado.roupa,
      pontos: estado.pontos,
      flags: estado.flags,
      historico: estado.historico.slice(-60)
    });
  }

  /* ---------- API pública ---------- */
  function reiniciarPalco() {
    clearInterval(timerDigitacao);
    clearTimeout(timerAuto);
    el.camadas.forEach(c => { c.className = "cenario"; c.style.backgroundImage = ""; });
    el.sprite.classList.remove("visivel");
    el.sprite.removeAttribute("src");
    spriteSrc = null;
    el.item.classList.remove("visivel");
    el.fim.classList.remove("visivel");
    el.cartao.classList.remove("visivel");
    el.texto.innerHTML = "";
    escolhasLimpar();
    Object.assign(estado, { cena: null, capitulo: null, cenario: null, sprite: null, roupa: null, historico: [], pontos: {}, flags: [] });
  }

  /* Começa um capítulo do início */
  function comecar({ nome, aparencia, capitulo }) {
    reiniciarPalco();
    estado.nome = nome;
    estado.aparencia = aparencia;
    // Capítulo 1 começa do zero; os seguintes herdam afinidade, desvio e flags dos anteriores
    if (capituloPorId(capitulo).numero === 1) Estado.salvarAcumulado({ pontos: {}, flags: [] });
    const herdado = Estado.acumulado();
    estado.pontos = { ...herdado.pontos };
    estado.flags = [...herdado.flags];
    mostrarCena(Roteiro.inicio[capitulo]);
  }

  /* Retoma um save */
  function continuar(save) {
    reiniciarPalco();
    Object.assign(estado, {
      nome: save.nome,
      aparencia: save.aparencia,
      capitulo: save.capitulo,
      roupa: save.roupa || null,
      pontos: save.pontos || {},
      flags: save.flags || [],
      historico: save.historico || []
    });
    // Restaura o último cenário/sprite sem animação de capítulo
    const cena = Roteiro.cenas[save.cena];
    if (!cena) { irPara("menu"); return; }
    if (save.cenario) aplicarCenario({ cenario: save.cenario, sprite: save.sprite }, true);
    definirSprite(save.sprite);
    mostrarCena(save.cena);            // o save é gravado antes da fala entrar no histórico
  }

  return {
    montar,
    comecar,
    continuar,
    alternarAuto,
    pausar: () => { clearTimeout(timerAuto); },
    retomar: () => { if (aguardandoClique) agendarAuto(Roteiro.cenas[estado.cena]); },
    historico: () => estado.historico,
    pontos: () => ({ ...estado.pontos }),
    flags: () => [...estado.flags]
  };
})();
