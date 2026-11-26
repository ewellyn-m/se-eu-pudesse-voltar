/*
 * entrar.html — login e cadastro.
 *
 * O jogo é só front-end (HTML, CSS e JS, sem servidor), então as contas ficam guardadas
 * no próprio navegador (localStorage, chave Sessao.CHAVE_CONTAS). A senha nunca é guardada:
 * guardamos só um "hash" dela (PBKDF2 com SHA-256 e um sal aleatório por conta), gerado
 * pela criptografia do próprio navegador (Web Crypto). No login, a senha digitada passa
 * pelo mesmo cálculo e o resultado é comparado com o hash salvo.
 *
 * Limite: as contas existem só neste navegador/aparelho. Para entrar com a mesma conta
 * em outro aparelho, seria preciso um servidor (backend) guardando as contas.
 */
document.addEventListener("DOMContentLoaded", () => {
  // já está logado: vai direto para o jogo
  if (Sessao.atual()) { irPara("menu"); return; }

  const ITERACOES = 210000;
  const formEntrar = $("#form-entrar");
  const formCadastro = $("#form-cadastro");

  /* ---------- contas ---------- */
  const lerContas = () => { try { return JSON.parse(localStorage.getItem(Sessao.CHAVE_CONTAS)) || {}; } catch { return {}; } };
  const gravarContas = contas => localStorage.setItem(Sessao.CHAVE_CONTAS, JSON.stringify(contas));
  const normalizarEmail = email => email.trim().toLowerCase();

  const paraBase64 = bytes => btoa(String.fromCharCode(...new Uint8Array(bytes)));
  const deBase64 = texto => Uint8Array.from(atob(texto), c => c.charCodeAt(0));

  async function gerarHash(senha, sal, iteracoes) {
    const chave = await crypto.subtle.importKey("raw", new TextEncoder().encode(senha), "PBKDF2", false, ["deriveBits"]);
    const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: sal, iterations: iteracoes }, chave, 256);
    return paraBase64(bits);
  }

  // compara sem parar no primeiro caractere diferente
  const iguais = (a, b) => a.length === b.length && [...a].reduce((dif, c, i) => dif | (c.charCodeAt(0) ^ b.charCodeAt(i)), 0) === 0;

  /* ---------- tela ---------- */
  // o login fica na barra do topo (no celular, numa janelinha que desce);
  // o cadastro abre numa janela por cima da página
  const janelaCadastro = $("#janela-cadastro");
  const barraLogin = $("#barra-login");
  const celular = () => matchMedia("(max-width: 760px)").matches;

  function mostrar(qual) {
    limpar(formEntrar); limpar(formCadastro);
    janelaCadastro.hidden = qual !== "cadastro";
    barraLogin.classList.toggle("aberta", qual === "entrar" && celular());
    document.body.style.overflow = qual === "cadastro" ? "hidden" : "";
    if (qual) (qual === "entrar" ? formEntrar : formCadastro).querySelector("input").focus();
  }

  function fechar() {
    janelaCadastro.hidden = true;
    barraLogin.classList.remove("aberta");
    document.body.style.overflow = "";
  }

  document.addEventListener("keydown", e => { if (e.key === "Escape") fechar(); });

  function limpar(form) {
    $$("[data-erro]", form).forEach(el => (el.textContent = ""));
    $$("[aria-invalid]", form).forEach(el => el.removeAttribute("aria-invalid"));
    $("[data-aviso]", form).textContent = "";
  }

  function erroCampo(form, campo, msg) {
    $(`[data-erro="${campo}"]`, form).textContent = msg;
    form.elements[campo]?.setAttribute("aria-invalid", "true");
  }

  const aviso = (form, msg) => ($("[data-aviso]", form).textContent = msg);

  function ocupado(form, sim) {
    const botao = form.querySelector('[type="submit"]');
    botao.disabled = sim;
    botao.classList.toggle("carregando", sim);
  }

  function entrarNoJogo(conta) {
    Sessao.iniciar(conta);
    const destino = Sessao.destino();
    if (destino) location.href = destino; else irPara("menu");
  }

  // a criptografia do navegador só existe em arquivo local (file://), https ou localhost
  const criptografiaOk = () => !!window.crypto?.subtle;

  const EMAIL_VALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  document.addEventListener("click", e => {
    const ver = e.target.closest("[data-ver]");
    if (ver) mostrar(ver.dataset.ver);
    if (e.target.closest("[data-fechar]")) fechar();
  });

  /* ---------- login ---------- */
  formEntrar.addEventListener("submit", async e => {
    e.preventDefault();
    limpar(formEntrar);
    const email = normalizarEmail(formEntrar.email.value);
    const senha = formEntrar.senha.value;

    let ok = true;
    if (!email) { erroCampo(formEntrar, "email", "Digite o seu e-mail."); ok = false; }
    else if (!EMAIL_VALIDO.test(email)) { erroCampo(formEntrar, "email", "Esse e-mail não parece válido."); ok = false; }
    if (!senha) { erroCampo(formEntrar, "senha", "Digite a sua senha."); ok = false; }
    if (!ok) return;
    if (!criptografiaOk()) { aviso(formEntrar, "Este navegador não permite entrar por aqui. Abra o jogo pelo arquivo index.html ou por um endereço https."); return; }

    const conta = lerContas()[email];
    if (!conta) { aviso(formEntrar, "Não encontramos uma conta com esse e-mail."); return; }

    ocupado(formEntrar, true);
    try {
      const hash = await gerarHash(senha, deBase64(conta.sal), conta.iteracoes);
      if (!iguais(hash, conta.hash)) { aviso(formEntrar, "E-mail ou senha incorretos."); formEntrar.senha.select(); return; }
      entrarNoJogo(conta);
    } catch {
      aviso(formEntrar, "Não foi possível entrar agora. Tente de novo.");
    } finally {
      ocupado(formEntrar, false);
    }
  });

  /* ---------- cadastro ---------- */
  formCadastro.addEventListener("submit", async e => {
    e.preventDefault();
    limpar(formCadastro);
    const nome = formCadastro.nome.value.trim();
    const email = normalizarEmail(formCadastro.email.value);
    const senha = formCadastro.senha.value;
    const confirmar = formCadastro.confirmar.value;

    let ok = true;
    const erro = (campo, msg) => { erroCampo(formCadastro, campo, msg); ok = false; };
    // o nome vale para a conta e para a protagonista (mesmas regras da tela de perfil).
    // pode repetir entre contas: só o e-mail é único
    if (!nome) erro("nome", "Digite o seu nome.");
    else if (nome.length < 2) erro("nome", "Use pelo menos 2 letras.");
    else if (!/^[\p{L}][\p{L} ]*$/u.test(nome)) erro("nome", "Use só letras, sem números ou símbolos.");
    if (!email) erro("email", "Digite o seu e-mail.");
    else if (!EMAIL_VALIDO.test(email)) erro("email", "Esse e-mail não parece válido. Ex.: voce@email.com");
    if (!senha) erro("senha", "Crie uma senha.");
    else if (senha.length < 6) erro("senha", "A senha precisa ter pelo menos 6 caracteres.");
    if (senha && confirmar !== senha) erro("confirmar", "As senhas não são iguais.");
    if (!formCadastro.idade.checked) erro("idade", "Para criar a conta, confirme que tem 16 anos ou mais.");
    if (!ok) return;
    if (!criptografiaOk()) { aviso(formCadastro, "Este navegador não permite criar conta por aqui. Abra o jogo pelo arquivo index.html ou por um endereço https."); return; }

    const contas = lerContas();
    if (contas[email]) { erro("email", "Este e-mail já possui uma conta."); return; }

    ocupado(formCadastro, true);
    try {
      const sal = crypto.getRandomValues(new Uint8Array(16));
      const conta = {
        id: (crypto.randomUUID?.() || paraBase64(crypto.getRandomValues(new Uint8Array(12))).replace(/[^a-z0-9]/gi, "")),
        nome, email,
        sal: paraBase64(sal),
        hash: await gerarHash(senha, sal, ITERACOES),
        iteracoes: ITERACOES,
        maiorDe16: true,
        criadaEm: Date.now()
      };
      contas[email] = conta;
      gravarContas(contas);
      // conta nova começa do zero, só com o nome escolhido aqui
      Estado.iniciarConta(conta.id, { nome });
      entrarNoJogo(conta);
    } catch {
      aviso(formCadastro, "Não foi possível criar a conta agora. Tente de novo.");
    } finally {
      ocupado(formCadastro, false);
    }
  });

  if (!celular()) formEntrar.email.focus();

  /* ---------- vitrine dos garotos (dados/personagens.js, grupo "paquera") ---------- */
  const garotos = Object.values(typeof Personagens === "undefined" ? {} : Personagens)
    .filter(p => p.grupo === "paquera" && p.corpo);
  const corpo = $("#vitrine-corpo");
  const rostos = $("#vitrine-rostos");
  let atual = null;

  function verGaroto(p) {
    if (p === atual) return;
    atual = p;
    $("#vitrine-nome").textContent = p.nome;
    $("#vitrine-texto").textContent = p.descricao || "";
    $$(".rosto", rostos).forEach(b => b.setAttribute("aria-selected", String(b.dataset.nome === p.nome)));
    corpo.classList.add("trocando");
    setTimeout(() => {
      corpo.onload = () => corpo.classList.remove("trocando");
      corpo.src = p.corpo;
      corpo.alt = p.nome;
      if (corpo.complete) corpo.classList.remove("trocando");
    }, 200);
  }

  garotos.forEach(p => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "rosto";
    botao.dataset.nome = p.nome;
    botao.setAttribute("role", "tab");
    botao.setAttribute("aria-label", p.nome);
    botao.style.setProperty("--cor", p.cor || "#ccc");
    botao.innerHTML = `<img src="${p.retrato || p.corpo}" alt="" loading="lazy">`;
    botao.addEventListener("click", () => verGaroto(p));
    rostos.append(botao);
  });
  if (garotos.length) verGaroto(garotos.find(p => p.nome === "Kaito") || garotos[0]);
});
