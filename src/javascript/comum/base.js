/*
 * Utilidades usadas por todas as páginas. Carregue este arquivo primeiro.
 *
 * RAIZ: caminho da página até a raiz do projeto. Cada página informa o seu em
 *   <html data-raiz="...">  (index.html: "" · páginas em src/html/: "../../")
 * Assim os dados podem usar caminhos a partir da raiz ("src/imagens/...") em qualquer página.
 */
const RAIZ = document.documentElement.dataset.raiz || "";

/* Endereços das páginas, a partir da raiz */
const Paginas = {
  entrar: "src/html/entrar.html",
  menu: "index.html",
  perfil: "src/html/aparencia.html",       // perfil = montar/alterar a aparência
  capitulos: "src/html/capitulos.html",
  personagens: "src/html/personagens.html",
  configuracoes: "src/html/configuracoes.html",
  sobre: "src/html/sobre.html"
};

function caminho(relativoARaiz) {
  return RAIZ + relativoARaiz;
}

/*
 * Sessão da conta (login). As contas ficam em dados guardados no navegador (ver paginas/entrar.js).
 * Toda página, menos a de entrada (<html data-publica>), exige alguém logado: sem sessão,
 * a página manda para a tela de entrada e, depois do login, volta para onde estava.
 */
const Sessao = (() => {
  const CHAVE_SESSAO = "seeupudessevoltar.sessao.v1";
  const CHAVE_CONTAS = "seeupudessevoltar.contas.v1";
  const CHAVE_VOLTAR = "seeupudessevoltar.voltar";

  const ler = (armazem, chave) => { try { return JSON.parse(armazem.getItem(chave)); } catch { return null; } };

  function atual() {
    const sessao = ler(localStorage, CHAVE_SESSAO);
    const contas = ler(localStorage, CHAVE_CONTAS) || {};
    // a sessão só vale se a conta ainda existir
    return sessao && contas[sessao.email]?.id === sessao.id ? sessao : null;
  }

  return {
    CHAVE_CONTAS,
    atual,
    iniciar({ id, nome, email }) {
      try { localStorage.setItem(CHAVE_SESSAO, JSON.stringify({ id, nome, email, desde: Date.now() })); } catch { /* ignora */ }
    },
    sair() {
      try { localStorage.removeItem(CHAVE_SESSAO); } catch { /* ignora */ }
      irPara("entrar");
    },
    /* página para onde voltar depois do login (só endereços deste próprio jogo) */
    lembrarDestino: url => { try { sessionStorage.setItem(CHAVE_VOLTAR, url); } catch { /* ignora */ } },
    destino() {
      try {
        const url = sessionStorage.getItem(CHAVE_VOLTAR);
        sessionStorage.removeItem(CHAVE_VOLTAR);
        return url && new URL(url, location.href).origin === location.origin ? url : null;
      } catch { return null; }
    }
  };
})();

const SEM_LOGIN = !document.documentElement.hasAttribute("data-publica") && !Sessao.atual();
if (SEM_LOGIN) {
  Sessao.lembrarDestino(location.href);
  document.documentElement.style.visibility = "hidden";
  location.replace(caminho(Paginas.entrar));
}

function irPara(pagina, parametros) {
  if (SEM_LOGIN) return;   // a página já está indo para a tela de entrada
  const url = caminho(Paginas[pagina] || pagina);
  location.href = parametros ? `${url}?${new URLSearchParams(parametros)}` : url;
}

const $ = (sel, raiz = document) => raiz.querySelector(sel);
const $$ = (sel, raiz = document) => [...raiz.querySelectorAll(sel)];

function escapar(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* Caixa de confirmação (criada na hora, não precisa de HTML na página) */
function confirmar(texto) {
  const d = document.createElement("dialog");
  d.className = "modal modal-pequeno";
  d.innerHTML = `<p>${escapar(texto)}</p>
    <div class="acoes">
      <button type="button" class="botao" data-r="nao">Cancelar</button>
      <button type="button" class="botao botao-primario" data-r="sim">Confirmar</button>
    </div>`;
  document.body.appendChild(d);
  d.showModal();
  return new Promise(resolver => {
    const fim = valor => { d.close(); d.remove(); resolver(valor); };
    d.addEventListener("click", e => { const b = e.target.closest("[data-r]"); if (b) fim(b.dataset.r === "sim"); });
    d.addEventListener("cancel", () => fim(false));
  });
}

/* Comportamentos comuns: links [data-ir="pagina"], fechar janelas [data-fechar], clique fora fecha */
document.addEventListener("click", e => {
  const ir = e.target.closest("[data-ir]");
  if (ir) { e.preventDefault(); irPara(ir.dataset.ir); return; }
  if (e.target.closest("[data-fechar]")) e.target.closest("dialog").close();
  if (e.target.tagName === "DIALOG") e.target.close();
});
