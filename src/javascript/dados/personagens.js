/*
 * Personagens, cenários e itens — fonte única usada pela história, pela galeria e pelo menu.
 *
 * Os ids (kaito, blake, hana...) são os usados no roteiro (dados/capitulo1.js) em  quem: "..."
 * NOMES PROVISÓRIOS do roteiro: Kaito, Ryuji, Hana e Reina. Para trocar um nome:
 *   1) mude "nome" aqui;  2) use Localizar e Substituir no capitulo1.js para trocar no texto.
 *
 * Roupas de ocasião: "roupas: { festival: ... }" troca o sprite enquanto o roteiro estiver com roupa: "festival".
 * Imagens: cada personagem usa um arquivo de src/imagens/personagens/. Personagem sem imagem
 * aparece só com a inicial na galeria e sem sprite na história.
 * Fichas (descricao, gosta, naoGosta, ficha) são opcionais; a galeria mostra só o que existir.
 *   ficha: { "Idade": "16", "Altura": "1,60 m" }
 */
const IMG = caminho("src/imagens/personagens/");
const CEN = caminho("src/imagens/cenarios/");

const Personagens = {
  /* ---------- amigas e rival ---------- */

  mio: {
    nome: "Mio", grupo: "amigos", cor: "#e0a74a",
    papel: "Melhor amiga de infância",
    retrato: IMG + "Mio-Retrato.png", corpo: IMG + "mio.png", sprite: IMG + "mio.png",
    roupas: { festa: IMG + "Mio-festa-sem-fundo.png", festival: IMG + "mio-kimoto-festival.png", fantasma: IMG + "mio-fantasma.png", shopping: IMG + "mio-shopping.png", fora: IMG + "mio-fora-escola-sem-fundo.png" },
    descricao: "Mio é uma garota extremamente animada e espontânea, conhecida por ser a alegria do grupo. Ela não se preocupa com o que os outros pensam e demonstra sua personalidade sem medo de julgamentos. É amiga de infância da protagonista e sempre esteve ao seu lado. As duas se conheceram ainda crianças, quando alguns valentões roubaram e amassaram um desenho da protagonista, e Mio foi a única que decidiu defendê-la. Por morarem perto, elas cresceram juntas e frequentaram a mesma escola durante a infância. Leal e protetora, Mio está sempre disposta a defender quem ama. Apesar de toda a sua confiança, ela fica um pouco diferente quando o assunto é Blake, por quem secretamente tem uma queda.",
    ficha: { "Altura": "1,70 cm", "Peso": "52 kg", "Aniversário": "10 de Novembro", "Futuro:": "Desconhecido" }
  },
  hana: {
    nome: "Hana", grupo: "amigos", cor: "#8f9ad0",
    papel: "Amiga do clube de leitura",
    retrato: IMG + "Hana-Retrato.png", corpo: IMG + "ameni.png", sprite: IMG + "ameni.png",
    roupas: { festa: IMG + "Hana-festa.png", festival: IMG + "hana-festival.png", shopping: IMG + "hana-shopping-sem-fundo.png", fora: IMG + "hana-fora-escola-sem-fundo.png" },
    descricao: "Hana é uma garota reservada, tímida e observadora. Ela prefere ouvir a falar e costuma ficar um pouco sem jeito quando recebe muita atenção. Apesar de seu jeito quieto, é inteligente, perspicaz e percebe facilmente detalhes que os outros deixam passar. Hana conheceu SN na adolescência, quando as duas entraram para o mesmo clube na escola, e aos poucos se tornaram amigas próximas. Embora não faça parte do grupo mais extrovertido, ela é alguém em quem SN pode confiar. Por trás de sua timidez, Hana também tem um lado divertido que poucos conhecem e é apaixonada por karaokê, onde costuma deixar a vergonha de lado.",
    ficha: { "Altura": "1,51 cm", "Peso": "42 kg", "Aniversário": "07 de Fevereiro", "Futuro:": "Desconhecido" }
  },
  reina: {
    nome: "Reina", grupo: "amigos", cor: "#e590b5",
    papel: "A garota mais popular do colégio",
    retrato: IMG + "Reina-Retrato.png", corpo: IMG + "reina.png", sprite: IMG + "reina.png",
    roupas: { festa: IMG + "Reina-festa-sem-fundo.png", festival: IMG + "Reina-festival.png", pijama: IMG + "reina-pijama-sem-fundo.png", fora: IMG + "reina-fora-da-escola-sem-fundo.png" },
    descricao: "Reina é uma garota confiante, inteligente e independente, conhecida por sua beleza e popularidade na escola. Apesar de parecer apenas uma aluna elegante e tranquila, esconde um grande segredo: é a líder de uma das gangues mais poderosas da cidade a Lirio negro. Forte, estratégica e respeitada por seus membros, Reina mantém sua vida como líder completamente separada da escola. Ela é apaixonada por Takeo e vê SN como sua principal rival romântica. Competitiva e provocadora, costuma implicar com SN, mas não é cruel e, com o tempo, passa a respeitá-la.",
    ficha: { "Altura": "1,60 cm", "Peso": "47 kg", "Aniversário": "18 de Dezembro", "Futuro:": "Desconhecido" }
  },

  /* ---------- rotas de romance ---------- */
    takeo: {
    nome: "Takeo", grupo: "paquera", cor: "#e08a5a",
    papel: "O amigo de infancia",
    retrato: IMG + "Takeo-Retrato.png", corpo: IMG + "takeo.png", sprite: IMG + "takeo.png",
    roupas: { festa: IMG + "Takeo-festa-sem-fundo.png", festival: IMG + "takeo-festival.png", fora: IMG + "takeo-fora-escola-sem-fundo.png", machucado: IMG + "takeo-machucado-31-sem-fundo.png" },  // machucado: capítulos 31-32 (use sprite "takeo:machucado"),
    descricao: "Takeo é um rapaz gentil e determinado. Ele é amigo de infância da protagonista, com quem se conhece desde os seis anos, e sempre foi apaixonado por ela. Quando criança, costumava apanhar dos valentões da escola por defender os mais fracos e nunca desistir do que acreditava ser certo. Ele não suporta ver alguém sozinho e está sempre tentando se aproximar de pessoas isoladas. Takeo faz parte da gangue Black Dragons e é um dos amigos mais próximos de Blake.",
    ficha: { "Altura": "1,72 cm", "Peso": "58 kg", "Aniversário": "14 de Março", "Futuro:": "Morreu protegendo alguem..." }
  },

  kaito: {
   nome: "Kaito", grupo: "paquera", cor: "#1b25a8",
    papel: "Garoto do parquinho",
    retrato: IMG + "Kaito-Retrato.png", corpo: IMG + "kaito.png", sprite: IMG + "kaito.png",
    roupas: { festa: IMG + "Kaito-festa.png", festival: IMG + "kaito-festival.png", cap9: IMG + "kaito-cap9.png", fora: IMG + "kaito-fora-da-escola-sem-fundo.png" },  // fora: à noite, fora da escola (cap. 12 em diante)
    descricao: "Kaito é o líder dos Black Dragons e o rapaz mais forte da gangue. Nunca foi derrotado por ninguém, exceto pela protagonista, quando eram crianças. Ele é respeitado por todos e costuma manter uma postura séria e intimidadora, passando a impressão de ser alguém difícil de se aproximar. Apesar disso, Kaito é gentil, protetor e odeia injustiças. Mora com o avô, que é a única família com quem vive atualmente. Seu braço direito é Blake, em quem confia completamente. Kaito deseja criar uma nova geração de delinquentes e construir um grupo que siga seus próprios ideais, sem se submeter às regras dos outros.",
    ficha: { "Altura": "1,77 cm", "Peso": "60 kg", "Aniversário": "28 de Dezembro", "Futuro:": "Desconhecido" }
  },

  blake: {
    nome: "Blake", grupo: "paquera", cor: "#c9a95c",
    papel: "Deliquente tatuado",
    retrato: IMG + "Blanke-Retrato.png", corpo: IMG + "blanke.png", sprite: IMG + "blanke.png",
    roupas: { festa: IMG + "Blake-festa.png", festival: IMG + "blake-festival.png", shopping: IMG + "blake-shopping-sem-fundo.png", fora: IMG + "blake-fora-escola.png" },
    descricao: "Blake é o chefe da 1ª divisão dos Black Dragons, melhor amigo e braço direito de Kaito. É o rapaz mais alto da escola e de toda a gangue, com uma aparência intimidadora e um olhar que parece dizer “não mexa comigo”. Apesar da fama de valentão, Blake é uma pessoa gentil e leal. É o único que realmente consegue entender Kaito e também quem consegue fazê-lo manter os pés no chão e evitar problemas.",
    ficha: { "Altura": "1,90 cm", "Peso": "71 kg", "Aniversário": "18 de Abril", "Futuro:": "Desconhecido" }
  },

  ryuji: {
    nome: "Ryuji", grupo: "paquera", cor: "#c0573f",
    papel: "O encrenqueiro",
    retrato: IMG + "Ryuji-Retrato.png", corpo: IMG + "Ryuji.png", sprite: IMG + "Ryuji.png",
    roupas: { festa: IMG + "Ryuji-festa.png", festival: IMG + "ryuji-festival.png", shopping: IMG + "ryuji-shopping.png", fora: IMG + "ryuji-fora-escola.png" },
    descricao: "Ryuji é um rapaz debochado e irônico, conhecido por viver se metendo em encrenca na escola. Seu passatempo favorito parece ser ficar de castigo. Apesar da pose de durão e do jeito provocador, ele é uma pessoa prestativa e está sempre disposto a ajudar os amigos quando precisam. Ryuji é membro dos Black Dragons e costuma ser um dos responsáveis por transformar qualquer situação simples em uma confusão.",
    ficha: { "Altura": "1,81 cm", "Peso": "76 kg", "Aniversário": "02 de Setembro", "Futuro:": "Desconhecido" }
  },

    victor: {
    nome: "Victor", grupo: "paquera", cor: "#8a6f5e",
    papel: "Fantasma",
    retrato: IMG + "Victor-Retrato.png", corpo: IMG + "victor.png", sprite: IMG + "victor.png",
    roupas: { festa: IMG + "Victor-festa.png", festival: IMG + "victor-festival.png", cap9: IMG + "victor-cap9.png" },
    descricao: "Victor é um rapaz reservado e difícil de conhecer. Ele quase nunca aparece na escola e prefere ficar sozinho, evitando chamar atenção ou criar vínculos com outras pessoas. Por trás de seu jeito distante, existem problemas familiares que o fazem se afastar cada vez mais da vida escolar. Apesar de parecer indiferente, Victor é observador e guarda muito mais sentimentos do que demonstra.",
    ficha: { "Altura": "1,78 cm", "Peso": "70 kg", "Aniversário": "30 de Janeiro", "Futuro:": "Desconhecido" }
  },

  /* ---------- fora do capítulo 1 ---------- */

  serena: {
    nome: "Serena", grupo: "outros", cor: "#a14141",
    papel: "",
    retrato: IMG + "serena-Retrato.png", corpo: IMG + "serena.png", sprite: IMG + "serena.png",
    roupas: { festa: IMG + "Serena-festa.png" },
    descricao: "",
    ficha: { "Altura": "1,69 cm", "Peso": "47 kg", "Aniversário": "13 de Agosto", "Futuro:": "Desconhecido" }
  },

    sayuri: {
    nome: "Sayuri", grupo: "outros", cor: "#c96898",
    papel: "Fazia bullying com a SN",
    retrato: IMG + "sayuri-Retrato.png", corpo: IMG + "sayuri.png", sprite: IMG + "sayuri.png",
    roupas: { festival: IMG + "sayuri-festival.png", semlaco: IMG + "sayuri-sem-laco.png", fora: IMG + "sayuri-fora-da-escola.png" },  // sem laço: fundo tirado de sayuri-sem-laço.png
    descricao: "Sayuri tem 16 anos é colega de turma da protagonista. Está sempre com o rabo de cavalo alto, o laço rosa e as unhas pintadas da mesma cor da caneta que usa nos bilhetes. Popular e sempre acompanhada de duas amigas que riem de tudo o que ela diz, ela foi quem inventou o apelido Fantasma e é a responsável pelo bullying que a protagonista sofre desde o primeiro ano: sapatos cheios de lixo, cadernos jogados na piscina e risadas sempre que ela entra na sala. Sayuri só se sente forte quando tem alguém para humilhar. Por isso, quando a protagonista para de abaixar a cabeça, ela começa a planejar uma vingança.",
    ficha: { "Altura": "1,62 cm", "Peso": "50 kg", "Aniversário": "—", "Futuro:": "Desconhecido" }
  },

  mae: {
    nome: "Mãe", grupo: "outros", cor: "#9c6b6b",
    papel: "Mãe da SN",
    retrato: IMG + "mae-Retrato.png", corpo: IMG + "mae.png", sprite: IMG + "mae.png",
    descricao: "Mãe da protagonista, tem 44 anos e trabalha como enfermeira no hospital do bairro. Carinhosa e prática, é a primeira a perceber quando a filha muda de comportamento. Como todas as mulheres da família, herdou a força física extraordinária que passa de geração em geração apenas entre as mulheres, um segredo que ninguém de fora pode descobrir. No hospital, consegue levantar pacientes sozinha e atribui isso à 'experiência'. Foi ela quem ensinou a filha, desde pequena, a esconder a própria força e a seguir a regra da família: a força existe para proteger, nunca para ferir.",
    ficha: { "Altura": "1,62 cm", "Peso": "58 kg", "Aniversário": "14 de Março", "Futuro:": "Desconhecido" }
  },

  goro: {
    nome: "Goro", grupo: "outros", cor: "#6e6a6a",
    papel: "Irmão mais velho dos Oda (Colégio Técnico)",
    retrato: IMG + "Goro-Retrato.png", corpo: IMG + "goro.png", sprite: IMG + "goro.png",
    descricao: "Goro é o mais velho dos irmãos Oda e um dos maiores encrenqueiros da cidade. Já se envolveu em inúmeras brigas e chegou a ser preso, carregando uma reputação perigosa por onde passa. Apesar de não fazer parte de nenhuma gangue específica, ele e os irmãos trabalham como contratados, aceitando serviços de quem estiver disposto a pagar. Não são conhecidos por serem honestos ou confiáveis e preferem usar armas e truques em vez de lutar de forma justa. Goro é grande, experiente e intimidador, sendo considerado um dos homens mais fortes da cidade.",
    ficha: { "Altura": "1,80 cm", "Peso": "95 kg", "Aniversário": "04 de Julho", "Futuro:": "Desconhecido" }
  },

  shinji: {
    nome: "Shinji", grupo: "outros", cor: "#4e5b73",
    papel: "Irmão mais novo dos Oda (Colégio Técnico)",
    retrato: IMG + "Shinji-Retrato.png", corpo: IMG + "shinji.png", sprite: IMG + "shinji.png",
    descricao: "Shinji é o irmão mais novo de Goro e compartilha da mesma reputação perigosa. Aos 17 anos, já se envolveu em diversas brigas e é conhecido por sua personalidade agressiva e pouco confiável. Diferente do irmão, nunca foi preso, mas não pretende seguir um caminho muito diferente. Shinji não pertence a nenhuma gangue e trabalha ao lado dos irmãos como contratado, fazendo o que for necessário para quem os pagar. Luta usando correntes e não se importa em usar métodos desleais para vencer. Por algum motivo, Shinji nutre um forte desprezo por SN e não perde a oportunidade de provocá-la ou dificultar sua vida.",
    ficha: { "Altura": "1,81 cm", "Peso": "73 kg", "Aniversário": "03 de Junho", "Futuro:": "Desconhecido" }
  },

  jin: {
    nome: "Jin", grupo: "outros", cor: "#3f4a52",
    papel: "O homem do carro preto",
    retrato: IMG + "Jin-Retrato.png", corpo: IMG + "jin.png", sprite: IMG + "jin.png",
    descricao: "Jin tem vinte e poucos anos e é bem mais velho que os alunos da escola. É loiro, usa o cabelo penteado para trás, veste um casaco preto longo e tem um anel prateado no mindinho. É educado, calmo e nunca levanta a voz, mas é o homem mais perigoso da cidade. Ele se diz “homem de negócios” e paga membros de várias gangues para trabalharem para ele, inclusive gente do Lírio Negro, pelas costas da Reina. Por algum motivo, está obcecado por SN, a garota que sabe de coisas que não deveria saber.",
    ficha: { "Altura": "1,83 cm", "Peso": "72 kg", "Aniversário": "30 de Janeiro", "Futuro:": "Desconhecido" }
  },

  akane: {
    nome: "Akane", grupo: "outros", cor: "#5b4a6e",
    papel: "Braço direito da Reina no Lírio Negro",
    retrato: IMG + "Akane.png", corpo: IMG + "Akane.png", sprite: IMG + "Akane.png",
    roupas: { festa: IMG + "Akane-festa-sem-fundo.png", escolar: IMG + "akane-escolar-sem-fundo.png", fora: IMG + "akane-fora-escola-sem-fundo.png" }   // uniforme da escola (fundo tirado de akane-escolar.png); use roupa: "escolar" no capítulo
  },

  avo_takeo: {
    nome: "Avó do Takeo", grupo: "outros", cor: "#9a7f6a",
    papel: "Avó do Takeo",
    retrato: IMG + "Avó-Takeo.png", corpo: IMG + "Avó-Takeo.png", sprite: IMG + "Avó-Takeo.png"
  },

  tio_kaito: {
    nome: "Tio do Kaito", grupo: "outros", cor: "#7a4a3a",
    papel: "Dono da lojinha de lámen",
    retrato: IMG + "Tio-Kaito.png", corpo: IMG + "Tio-Kaito.png", sprite: IMG + "Tio-Kaito.png"
  },

  momo: {
    nome: "Momo", grupo: "outros", cor: "#e27a8f",
    papel: "Irmã do Ryuji (8 anos)",
    retrato: IMG + "Momo.png", corpo: IMG + "Momo.png", sprite: IMG + "Momo.png"
  },

  noah: {
    nome: "Noah", grupo: "outros", cor: "#4f6fa8",
    papel: "Irmão gêmeo do Blake (6 anos)",
    retrato: IMG + "Noah.png", corpo: IMG + "Noah.png", sprite: IMG + "Noah.png"
  },

  theo: {
    nome: "Theo", grupo: "outros", cor: "#6b7a4a",
    papel: "Irmão gêmeo do Blake (6 anos)",
    retrato: IMG + "Theo.png", corpo: IMG + "Theo.png", sprite: IMG + "Theo.png"
  },

  ren: {
    nome: "Ren Sakuma", grupo: "outros", cor: "#6f7a86",
    papel: "Aluno transferido. Líder da Matilha",
    retrato: IMG + "Ren.png", corpo: IMG + "Ren.png", sprite: IMG + "Ren.png",
    roupas: { festa: IMG + "Ren-festa.png", festival: IMG + "ren-festival.png", fora: IMG + "ren-fora-escola-sem-fundo.png" }
  },

  yuto: {
    nome: "Yuto", grupo: "outros", cor: "#5d6b7a",
    papel: "Calouro do primeiro ano",
    retrato: IMG + "yuto.png", corpo: IMG + "yuto.png", sprite: IMG + "yuto.png"
  },

  professor: {
    nome: "Professor", grupo: "outros", cor: "#7a6a5a",
    papel: "Professor de inglês",
    retrato: IMG + "Professor.png", corpo: IMG + "Professor.png", sprite: IMG + "Professor.png"
  },

  /* ---------- só na história (não aparecem na galeria) ---------- */
  eu: { nome: "Você", protagonista: true, cor: "#c98aa6" },
  desconhecido: { nome: "???", cor: "#9a929c" },
  mensagem: { nome: "Mensagem", cor: "#9b8bc4" },
  coordenador: { nome: "Coordenador", cor: "#8a8288" },
  bone: { nome: "Garoto de boné", cor: "#7c6f6a" },
  midorata: { nome: "Membro da Midorata", cor: "#3f5a3a", sprite: IMG + "membro-midorata.png" },
  amiga_victor: { nome: "Menina na porta", cor: "#b07aa8", sprite: IMG + "amiga-victor.png" },  // figurante do capítulo 9 (fliperama)
  professora: { nome: "Professora", cor: "#5c6f8a", sprite: IMG + "professora-quimica.png" },   // professora de química (fundo tirado de professora-de-queimica.png)
  diretora: { nome: "Diretora", cor: "#6a5a7a", sprite: IMG + "diretora.png" },   // diretora da escola (capítulo 34)
  zelador: { nome: "Zelador", cor: "#7a7368", sprite: IMG + "zelador.png" },
  avo: { nome: "Avó", cor: "#8a4a5a", sprite: IMG + "avó-da-sn.png" },   // avó da SN (mãe da mãe)
  amiga_sayuri: { nome: "Amiga da Sayuri", cor: "#c48aa0", sprite: IMG + "amiga-sayuri.png" },
  valentoes: { nome: "Cara na rua", cor: "#6b6466", sprite: IMG + "tres-valentoes.png" }          // os três da loja de conveniência (capítulo 11)
};

const GruposPersonagens = [
  { id: "paquera", nome: "Paquera" },
  { id: "amigos", nome: "Amigos" },
  { id: "outros", nome: "Outros" }
];

/*
 * Cenários. Os lugares que ainda não têm imagem própria usam provisoriamente a mais parecida:
 * quando tiver a imagem, coloque em src/imagens/cenarios/ e troque só o "img" daqui.
 *   tom:   filtro de clima (capitulo.css .tom-*): "noite", "entardecer", "lembranca"
 *   clima: "chuva" desenha chuva por cima do cenário
 */
const Cenarios = {
  "sala-de-aula":    { img: CEN + "sala-de-aula.jpg" },
  corredor:          { img: CEN + "corredor.jpg" },
  patio:             { img: CEN + "patio.jpg" },
  "sala-de-estar":   { img: CEN + "sala-de-estar.jpg" },
  "banheiro":        { img: CEN + "banheiro-escola.png" },
  cozinha:           { img: CEN + "cozinha.png" },
  quarto:            { img: CEN + "quarto.png" },
  rua:               { img: CEN + "rua.png" },
  "rua-noite":       { img: CEN + "rua.png", tom: "noite" },
  "beco-noite":      { img: CEN + "rua.png", tom: "noite" },
  galpao:            { img: CEN + "galpao.png" },
  "sala-de-karaoke": { img: CEN + "sala-de-karaoke.png" },
  "loja-lamen":      { img: CEN + "loja-lamen.png" },
  parquinho:         { img: CEN + "parquinho.png" },
  ponte:             { img: CEN + "Ponte-Enferrujada.png" },
  olaria:            { img: CEN + "Olaria.png" },
  "corredor-hospital": { img: CEN + "Corredor-hospital.png" },
  "beira-rio":       { img: CEN + "beira-do-rio.png" },
  beco:              { img: CEN + "beco.png" },
  festival:          { img: CEN + "festival.png" },                 // festival cultural, à noite
  "atras-palco":     { img: CEN + "beco-festival.png" },            // atrás do palco do festival
  "rua-padaria":     { img: CEN + "rua-padaria.png" },              // esquina da padaria (capítulo 9)
  fliperama:         { img: CEN + "fliperama.png" },                // fliperama da estação
  "praca-estacao":   { img: CEN + "praca-perto-da-estaçao.png" },    // praça perto da estação, de dia
  "pet-shop":        { img: CEN + "pet shop.png" },                 // pet shop do bairro
  "estacao-dia":     { img: CEN + "Estação Central ao Sol com Pombos.png" }, // estação de dia
  "estacao-por-do-sol": { img: CEN + "estaçao-por-do-sol.png" },    // estação ao pôr do sol
  "frente-lamen":    { img: CEN + "esquina-loja-de-lamen.png" },     // frente da lojinha de lámen do tio do Kaito
  "frente-lamen-noite": { img: CEN + "esquina-loja-de-lamen.png", tom: "noite" },
  "loja-lamen-noite": { img: CEN + "loja-lamen.png", tom: "noite" },  // lojinha de luz apagada (capítulo 30)
  "rua-padaria-noite": { img: CEN + "rua-padaria.png", tom: "noite" }, // esquina da padaria, à noite
  terraco:           { img: CEN + "Terraço-Bloco-B.png" },          // terraço do bloco B
  laboratorio:       { img: CEN + "Laboratório.png" },              // laboratório de biologia (aquário)
  "loja-conveniencia": { img: CEN + "Loja-de-Conveniência.png" }, // loja de conveniência da avenida, à noite
  "parquinho-noite": { img: CEN + "parquinho.png", tom: "noite" },  // pracinha do balanço, à noite
  "casa-takeo":      { img: CEN + "frente-casa-takeo.png" },        // frente da casa do Takeo (portão azul)
  "casa-takeo-sala": { img: CEN + "casa-takeo-sala.png" },          // sala da casa do Takeo
  shopping:          { img: CEN + "shopping.png" },                 // corredores e lojas do shopping (capítulo 14)
  "praca-alimentacao": { img: CEN + "Praça-de-Alimentação-shopping.png" },
  "livraria-shopping": { img: CEN + "livraria-shopping.png" },      // livraria do terceiro andar, onde o Blake trabalha
  "cabine-fotos":    { img: CEN + "cabine-de-fotos.png" },
  "galpao-noite":    { img: CEN + "galpao.png", tom: "noite" },      // a visão da briga na fábrica de cimento (capítulo 16)

  // provisórios (sem imagem própria ainda)
  apartamento:       { img: CEN + "sala-de-estar.jpg", tom: "noite", clima: "chuva" }, // prólogo, aos 28
  "patio-fundos":    { img: CEN + "patio-gangue.png" },                                       // território da gangue
  "clube-leitura":   { img: CEN + "clube-de-leitura.png" },         // sala do clube de leitura
  "saida-colegio":   { img: CEN + "portao-escola.png" },            // portão da escola, na saída
  "beco-mercado":    { img: CEN + "rua.png", tom: "entardecer" },
  vestiario:         { img: CEN + "vestiario.png" },                // vestiário da escola
  "ginasio-boxe":    { img: CEN + "clube-box.png" },                // ginásio de boxe do bairro (encontro com o Kaito)
  "fundos-ginasio":  { img: CEN + "corredor.jpg", tom: "entardecer" }, // fundos do ginásio (provisório)
  "sala-castigo":    { img: CEN + "sala-de-aula.jpg", tom: "entardecer" },
  "casa-reina":      { img: CEN + "sala-reina.png" },                   // sala da casa da Reina
  "cozinha-reina":   { img: CEN + "cozinha-reina.png" },                // cozinha da Reina
  "quarto-reina":    { img: CEN + "quarto-reina.png", tom: "noite" },   // quarto da Reina, luz apagada
  "frente-casa-reina": { img: CEN + "frente-casa-reina.png" },          // rua em frente à casa da Reina
  "frente-casa-sn":  { img: CEN + "frente-casa-sn.png" },               // porta do prédio da SN
  "bicicletario":    { img: CEN + "Bicicletário-do-Hospital.png" },     // bicicletário (capítulo 16)
  "esconderijo-lirio": { img: CEN + "patio-gangue.png", tom: "noite" }, // garagem do Lírio Negro (provisório)
  "fundos-lamen":    { img: CEN + "beco.png" },                         // fundos da lojinha de lámen, do lado da caçamba
  "fabrica-cimento": { img: CEN + "galpao.png", tom: "entardecer" },  // pátio da fábrica de cimento, fim de tarde de céu cinza
  "beira-rio-noite": { img: CEN + "beira-do-rio.png", tom: "noite" },
  "sala-sn":         { img: CEN + "sala-de-estar.jpg" },              // sala da casa da SN (aos 16)
  "sala-sn-noite":   { img: CEN + "sala-de-estar.jpg", tom: "noite" },
  "doca-mercado":    { img: CEN + "beco.png", tom: "noite" },          // doca nos fundos do mercado (capítulo 19)
  "lan-house":       { img: CEN + "lanhouse.png" },                    // lan house do beco do mercado (capítulo 21)
  "frente-casa-sn-noite": { img: CEN + "frente-casa-sn.png", tom: "noite" }, // porta do prédio da SN, à noite (capítulo 23)
  "quarto-sn-noite": { img: CEN + "quarto.png", tom: "noite" },
  "frente-casa-sn-chuva": { img: CEN + "frente-casa-sn.png", tom: "noite", clima: "chuva" }, // temporal na porta do prédio (capítulo 24)
  "cozinha-sn-chuva": { img: CEN + "cozinha.png", tom: "noite", clima: "chuva" },  // cozinha da SN, noite de temporal
  "sala-sn-chuva":   { img: CEN + "sala-de-estar.jpg", tom: "noite", clima: "chuva" },
  "sala-sn-escuro":  { img: CEN + "sala-de-estar.jpg", tom: "noite", clima: "chuva" }, // sem luz, só vela (capítulo 24)
  "frente-casa-sn-tarde": { img: CEN + "frente-casa-sn.png", tom: "entardecer" }, // esquina do prédio da SN, fim de tarde (capítulo 25)
  "casa-blake":      { img: CEN + "casa-blake-festa.png" },         // casa do Blake (festa dos gêmeos)
  "casa-blake-noite": { img: CEN + "casa-blake-festa.png", tom: "noite" },
  "quintal-victor":  { img: CEN + "quintal-casa-victor.png" },      // quintal / oficina do Victor
  "quintal-victor-noite": { img: CEN + "quintal-casa-victor.png", tom: "noite" },
  "frente-shopping": { img: CEN + "frente-shopping.png" },          // entrada do shopping, à noite
  "cozinha-blake":   { img: CEN + "cozinha.png", tom: "entardecer" }, // cozinha do Blake (provisório)
  "estacionamento-topo": { img: CEN + "Garagem.png" }, // último andar do estacionamento do shopping
  "quarto-sn":       { img: CEN + "quarto.png" },                 // epílogo, aos 16
  "frente-fliperama": { img: CEN + "beco.png" },                    // porta do fliperama fechado da Midorata, à noite (capítulo 31)
  "fliperama-midorata": { img: CEN + "fliperama-abandonado.png" },  // dentro do fliperama fechado da Midorata
  "cozinha-sn-noite": { img: CEN + "cozinha.png", tom: "noite" },
  "patio-apreendidos": { img: CEN + "Garagem.png", tom: "entardecer" }, // pátio de veículos apreendidos (provisório)
  "casa-takeo-noite": { img: CEN + "frente-casa-takeo.png", tom: "noite" }, // portão da casa do Takeo, à noite (capítulo 32)
  "quarto-hana":     { img: CEN + "quarto-hana.png" },                // quarto da Hana
  "quarto-mio":      { img: CEN + "quarto.png", tom: "entardecer" },  // quarto da Mio (provisório: troque por quarto-mio.png)
  "casa-reina-noite": { img: CEN + "sala-reina.png", tom: "noite" },       // sala da Reina, festa (capítulo 40)
  "festa-reina":     { img: CEN + "festa.png" },                      // festa na casa da Reina (capítulo 40)
  "frente-casa-reina-noite": { img: CEN + "frente-casa-reina.png", tom: "noite" }, // portão e varanda da Reina, à noite
  "piscina-reina":   { img: CEN + "frente-casa-reina.png", tom: "noite" },  // piscina da Reina (provisório: troque por piscina-reina.png)
  "jardim-reina":    { img: CEN + "frente-casa-reina.png", tom: "noite" },  // jardim da Reina com luzinhas (provisório: troque por jardim-reina.png)
  "banheiro-reina":  { img: CEN + "banheiro-escola.png", tom: "noite" },    // banheiro de cima da Reina (provisório: troque por banheiro-reina.png)
  "escadaria-escola": { img: CEN + "escadaria-escola.png" },          // escada do bloco B
  "armario":         { img: CEN + "armario.png" },                    // armário de limpeza do bloco C
  "predio-abandonado": { img: CEN + "galpao.png", tom: "noite" },      // prédio inacabado do pai do Ren, por fora (provisório)
  "predio-abandonado-topo": { img: CEN + "predio-abandonado.png" }  // último andar do prédio abandonado, à noite
};

const Itens = {};

/* Fotos rápidas no meio da cena (campo "foto" do roteiro): personagem com o cenário atrás */
const Fotos = {
  // cenas especiais (formato "cg"): a imagem aparece grande e fecha quando a cena acaba
  "kaito-sn-34": { img: CEN + "kaito-sn-34.png", formato: "cg" },
  "takeo-sn-34": { img: CEN + "takeo-sn-34.png", formato: "cg" },
  "victor-sn-34": { img: CEN + "victor-sn-34.png", formato: "cg" },
  "blake-sn-34": { img: CEN + "blake-sn-34.png", formato: "cg" },
  "sn-festival": { img: IMG + "Sn-festival.png", fundo: CEN + "festival.png" },
  "sn-festa": { img: IMG + "Sm-festa.png", fundo: CEN + "festa.png" },   // a SN arrumada pra festa da Reina (capítulo 40)
  caramelo: { img: IMG + "caramelo.png" },                                   // a foto já tem fundo próprio
  "takeo-sn": { img: IMG + "foto-takeo-sn.png", formato: "horizontal" },
  "sn-pijama": { img: IMG + "sn-pijama.png", fundo: CEN + "quarto-reina.png" }   // noite na casa da Reina (capítulo 16)       // álbum da avó do Takeo (capítulo 13); foto deitada
};
