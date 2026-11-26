# Se eu pudesse voltar...

Visual novel em HTML, CSS e JavaScript puro. Abra `index.html` no navegador; não precisa de build.

## Páginas

Cada tela é uma página HTML com o seu próprio CSS e o seu próprio JavaScript:

| Página | HTML | CSS | JavaScript da página |
|---|---|---|---|
| Menu inicial | `index.html` | `src/css/menu.css` | `src/javascript/paginas/menu.js` |
| Nome da protagonista | `src/html/perfil.html` | `src/css/perfil.css` | `src/javascript/paginas/perfil.js` |
| Aparência | `src/html/aparencia.html` | `src/css/aparencia.css` | `src/javascript/paginas/aparencia.js` |
| **Capítulo 1** | `src/html/capitulo1.html` | `src/css/capitulo.css` | `src/javascript/paginas/capitulo.js` |
| **Capítulo 2** | `src/html/capitulo2.html` | `src/css/capitulo.css` | `src/javascript/paginas/capitulo.js` |
| Capítulos | `src/html/capitulos.html` | `src/css/capitulos.css` | `src/javascript/paginas/capitulos.js` |
| Personagens | `src/html/personagens.html` | `src/css/personagens.css` | `src/javascript/paginas/personagens.js` |
| Configurações | `src/html/configuracoes.html` | `src/css/configuracoes.css` | `src/javascript/paginas/configuracoes.js` |
| Sobre | `src/html/sobre.html` | `src/css/sobre.css` | (não precisa) |

Todas as páginas usam também `src/css/reset.css` e `src/css/base.css` (cores do tema, botões, campos e janelas).

Fluxo: `index.html` → `perfil.html` → `aparencia.html` → `capitulo1.html` → (aviso do próximo capítulo) → `capitulo2.html`

## Onde fica cada coisa

```
index.html
src/
  html/                 páginas (perfil, aparência, capítulo 1, capítulos, personagens, configurações, sobre)
  css/                  reset.css, base.css + um arquivo por página
  javascript/
    comum/              usado por várias páginas
      base.js           caminhos das páginas, atalhos ($, irPara, confirmar)
      estado.js         save, perfil, configurações
      musica.js         música de fundo (continua de onde parou ao trocar de página)
      avatar.js         cabelos/olhos da protagonista + ENCAIXE (tamanho e posição)
      motor.js          motor da visual novel
      configuracoes.js  painel de configurações (página e janela do capítulo)
    dados/
      personagens.js    personagens e cenários
      capitulos.js      lista de capítulos (título, capa, descrição, página)
      roteiro.js        registro das cenas
      capitulo1.js      HISTÓRIA DO CAPÍTULO 1
      capitulo2.js      HISTÓRIA DO CAPÍTULO 2
    paginas/            um script para cada página
  imagens/
    capa/               capa da obra
    cenarios/           sala de aula, corredor, pátio, sala de estar
    personagens/        sprites e fotos da galeria
    aparencia/          corpo, camadas de cabelo/olhos e miniaturas
  musicas/trilha.mp3    trilha de fundo
```

## A história (Capítulo 1)

Está toda em `src/javascript/dados/capitulo1.js`, uma cena por linha, na mesma ordem do roteiro:
prólogo (`pro_`), cenas 1 a 6 (`c1_` … `c6_`), rotas A–D (`rA_` … `rD_`), tronco comum (`tr_`) e epílogo (`ep_`).
O formato está explicado no topo do arquivo. Exemplos:

```js
c1_06: { quem: "mio", texto: "Finalmente. Achei que você tinha morrido. Quer metade?", proxima: "c1_07" },
c1_07: { tipo: "pensamento", texto: "Mio. Com dezesseis anos...", proxima: "c1_08" },
c1_esc1: { escolhas: [
  { texto: "A. Abraçar a Mio sem dizer nada.", proxima: "c1_1a_1", pontos: { mio: 2, desvio: 1 } },
  { texto: "C. “Eu senti sua falta.”", proxima: "c1_1c_1", pontos: { mio: 1, desvio: 2 }, flags: ["Mio_desconfiada"] }
]},
```

- `SN` no texto vira o nome que o jogador escolheu.
- Afinidade (`kaito`, `blake`, `takeo`, `ryuji`, `mio`, `hana`), `desvio` e flags ficam guardados no save.
- A Escolha 8 destaca a opção do personagem com mais afinidade; a Escolha 9 muda conforme a rota.
- Nomes provisórios (Kaito, Ryuji, Hana, Reina): troque o `nome` em `dados/personagens.js` e use Localizar e Substituir no `capitulo1.js`.

Cada capítulo tem os próprios nomes de cena: pode usar `c1_01` no capítulo 2 sem conflito com o capítulo 1.
Afinidade, desvio e flags passam de um capítulo para o outro.

**Novo capítulo:** copie `src/html/capitulo1.html` para `capitulo2.html`, troque `data-capitulo="capitulo1"` e o script
`dados/capitulo1.js` por `dados/capitulo2.js`, crie esse arquivo e acrescente o capítulo em `dados/capitulos.js`.

## Tamanho do cabelo e dos olhos

Bloco `ENCAIXE` em `src/javascript/comum/avatar.js`.

## Música

`src/musicas/trilha.mp3` é um piano suave original, feito para o jogo. Para trocar, substitua o arquivo
(ou mude o caminho em `src/javascript/comum/musica.js`).
