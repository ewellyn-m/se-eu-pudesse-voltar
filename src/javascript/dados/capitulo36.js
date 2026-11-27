/*
 * =====================================================================
 *  CAPÍTULO 36 — Bacia hidrográfica
 *  Quinta-feira, logo depois do Capítulo 35.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Cenas com os cinco meninos em TODAS as rotas. Bloco de rota à noite.
 *
 *  O QUE ACONTECE
 *    • Manhã: o Kaito busca a SN de moto, como todo dia. Ela ensaiou falar do "beijo" de um segundo
 *      (ela quer mais, mas não pode dizer isso). Não consegue. No portão, a Serena dá bom dia pro Kaito,
 *      e ele responde pelo nome, porque a SN mandou ontem. A SN se arrepende de ter mandado.
 *    • Aula de geografia: a professora pega no pé da SN e da Mio por conversarem e passa um trabalho de dez
 *      páginas, em dupla, para amanhã. Bacia hidrográfica.
 *    • Intervalo: a Serena senta do lado do Kaito no banco e leva marmita "sem cenoura". Ele come.
 *      A SN odeia. O Blake percebe ("você está quebrando o lápis"). O Victor traz notícias.
 *    • O Ren tenta se aproximar. Na biblioteca, ele deixa um livro marcado na mesa dela. Fala pouco. Ela corta.
 *    • Tarde inteira na biblioteca com a Mio, surtando com o trabalho. O Ryuji aparece com coxinha e entende
 *      tudo de bacia hidrográfica (por causa de enchente e resgate). Ela passa a tarde com ele.
 *    • Enquanto isso, a Serena vai atrás do Kaito até a lojinha. A rede de fofoca avisa. A SN fica com raiva
 *      do Kaito, mesmo sabendo que não faz sentido. O Takeo (plantão da biblioteca) e o Blake aparecem.
 *    • O Ryuji leva a SN em casa. Bloco de rota.
 *
 *  REGRAS
 *    • Sala da SN: Takeo, Mio, Hana, Reina, Ren, Akane. Kaito, Blake, Ryuji, Victor e Serena são de outras salas.
 *    • O Kaito busca a SN de moto todo dia. Sem xadrez no Ren. O Ren não manda mensagem.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Mio, Hana, Reina, Akane, Kaito, Takeo, Victor, Blake, Ryuji, Ren, Serena, Tio do Kaito.
 *    Sem nome / rótulo: Professora de geografia, Amiga da Serena.
 *
 *  CENÁRIOS
 *    Hall → "apartamento" · Escola: saida-colegio, sala-de-aula, corredor, patio-fundos
 *    Biblioteca → "clube-leitura" · Lojinha / rua → "beco-mercado" · Quarto → "quarto-sn"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Rota_*, Oi_Serena, Nao_esqueci, Voce_esqueceu, Guardou_cartao.
 *
 *  Crie a entrada "capitulo36" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo36", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — O ENSAIO =================== */
    // Cenário: quarto da SN e hall, quinta cedo. Música: leve, nervosa.
    c1_01: { roupa: "escolar", tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Quinta, 6h40 — Cena 1", sprite: null, texto: "Quinta-feira. Ela está na frente do espelho do armário, de uniforme, com a escova de cabelo na mão como se fosse um microfone, ensaiando.", proxima: "c1_02" },
    c1_02: { quem: "eu", texto: "“Kaito, sobre terça. No hall. Eu queria falar uma coisa.” Não. Muito sério.", proxima: "c1_03" },
    c1_03: { quem: "eu", texto: "“E aí, Kaito, lembra do hall? Haha.” Não. Pior. Muito pior.", proxima: "c1_04" },
    c1_04: { quem: "eu", texto: "“Kaito, aquele segundo. Eu queria mais uns. Segundos. Tipo, vários.”", proxima: "c1_05" },
    c1_05: { tipo: "narracao", texto: "Ela larga a escova em cima da cômoda e cobre o rosto com as duas mãos.", proxima: "c1_06" },
    c1_06: { tipo: "pensamento", texto: "Eu não posso falar isso. Eu não posso falar nada disso. Ontem ele começou “ontem, no hall” e desviou pra fita preta. Se ele desviou, e eu falo que quero mais, eu viro a maluca do hall.", proxima: "c1_cam_msg" },
    c1_cam_msg: { caminhos: [
      { flag: "Nao_esqueci", proxima: "c1_esq" },
      { flag: "Voce_esqueceu", proxima: "c1_sal" }
    ], proxima: "c1_07" },
    c1_esq: { tipo: "pensamento", texto: "Ele respondeu “eu também não”. Eu também não esqueci. Isso quer dizer alguma coisa. Ou não quer dizer nada. Ou quer dizer tudo. Eu li essa mensagem dezessete vezes.", proxima: "c1_07" },
    c1_sal: { tipo: "pensamento", texto: "“Eu coloquei o café no sal.” Isso é um sim. Isso é um sim de quem não sabe falar sim. Eu acho. Eu quase tenho certeza. Eu tenho oitenta por cento de certeza.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", texto: "Sete horas. O celular vibra. “Tô embaixo, desce.” Ele voltou a mandar mensagem com três palavras.", proxima: "c1_08" },
    c1_08: { tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", sprite: "kaito", texto: "No hall, o Kaito está no mesmo lugar, no pé dos três degraus com a fita preta, com o capacete vermelho dela no braço e um saquinho de papel com pão de queijo. Hoje ele olha para ela quando ela aparece. Olha e não desvia. Normal. Quase normal.", proxima: "c1_09" },
    c1_09: { quem: "kaito", texto: "Bom dia.", proxima: "c1_10" },
    c1_10: { quem: "eu", texto: "Bom dia.", proxima: "c1_11" },
    c1_11: { tipo: "pensamento", texto: "Agora. Fala agora. “Kaito, sobre terça.” Três palavras. Você enfrentou doze da Midorata. Três palavras.", proxima: "c1_12" },
    c1_12: { quem: "eu", texto: "Kaito, sobre...", proxima: "c1_13" },
    c1_13: { quem: "kaito", texto: "Sobre?", proxima: "c1_14" },
    c1_14: { tipo: "narracao", texto: "Ele está olhando para ela com o pão de queijo na mão, esperando, com aquela cara séria de quem leva cada palavra a sério. E ela olha para a boca dele sem querer. Por meio segundo. E perde a coragem inteira.", proxima: "c1_15" },
    c1_15: { quem: "eu", texto: "...sobre esse pão de queijo. Ele está com cara de bom.", proxima: "c1_16" },
    c1_16: { quem: "kaito", texto: "Ele é bom. O tio fez de novo com queijo de verdade.", proxima: "c1_17" },
    c1_17: { tipo: "pensamento", texto: "Pão de queijo. Eu desviei pro pão de queijo. Ontem ele desviou pra fita preta. A gente é um casal de covardes. Não. A gente não é um casal. A gente é dois covardes separados.", proxima: "c1_18" },
    c1_18: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", sprite: null, texto: "Na frente da escola, ele para no meio-fio do portão, como sempre. E a Serena está no muro, como sempre. Só que hoje ela não está olhando para a SN.", proxima: "c1_19" },
    c1_19: { tipo: "narracao", sprite: "serena", texto: "Ela desencosta do muro quando o Kaito tira o capacete. Vem andando até a moto, com o cabelo comprido balançando, os chaveiros da mochila tilintando, e um sorriso que hoje é bonito de verdade, sem nada de ameaça.", proxima: "c1_20" },
    c1_20: { quem: "serena", texto: "Bom dia, Kaito.", proxima: "c1_cam_oi" },
    c1_cam_oi: { caminhos: [
      { flag: "Oi_Serena", proxima: "c1_oi" }
    ], proxima: "c1_semoi" },
    c1_oi: { quem: "kaito", sprite: "kaito", texto: "...Bom dia, Serena.", proxima: "c1_oi2" },
    c1_oi2: { tipo: "pensamento", texto: "Ele respondeu pelo nome. Porque ontem eu mandei. Eu falei “fala com ela, um oi, só um oi, pelo nome”. Eu. Eu fiz isso. Eu sou a pessoa mais burra desse portão.", proxima: "c1_21" },
    c1_semoi: { quem: "kaito", sprite: "kaito", texto: "...Bom dia. Serena. Né? Do bolo.", proxima: "c1_semoi2" },
    c1_semoi2: { tipo: "pensamento", texto: "“Do bolo.” Ele lembrou. Ontem ele não lembrava, e hoje ele lembra, porque eu expliquei pra ele no portão. Eu. Eu fiz isso. Eu sou a pessoa mais burra desse portão.", proxima: "c1_21" },
    c1_21: { tipo: "narracao", sprite: "serena", texto: "A Serena fica vermelha, de felicidade, e não esconde. Ela olha para a SN por cima do ombro do Kaito. E agora o sorriso tem uma ponta de vitória, pequena, afiada.", proxima: "c1_22" },
    c1_22: { quem: "serena", texto: "Eu fiz uma coisa pra você. Eu te entrego no intervalo. Tchau, Kaito.", proxima: "c1_23" },
    c1_23: { tipo: "narracao", sprite: null, texto: "E vai embora para o portão, com as duas amigas atrás, que olham para trás e riem baixinho. O Kaito fica parado com o capacete na mão, sem entender absolutamente nada.", proxima: "c1_24" },
    c1_24: { sprite: "kaito", quem: "kaito", texto: "Ela fez uma coisa pra mim?", proxima: "c1_25" },
    c1_25: { quem: "eu", texto: "Parece que sim.", proxima: "c1_26" },
    c1_26: { quem: "kaito", texto: "Por quê?", proxima: "c1_27" },
    c1_27: { tipo: "pensamento", texto: "Porque ela gosta de você desde o primeiro ano, seu tapado. Porque você deu bom dia pelo nome. Porque você é o único menino da escola que não percebe quando uma menina leva bolo de aniversário.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — No portão
    c1_esc1: { escolhas: [
      { texto: "A. “Sei lá, Kaito. Vai ver ela é muito educada.” Com a voz mais doce e mais falsa do mundo.", proxima: "c1_1a_1", pontos: { kaito: 1 }, flags: ["Voz_falsa"] },
      { texto: "B. “Porque você deu bom dia pra ela.” E entrar pelo portão sem esperar resposta.", proxima: "c1_1b_1", pontos: { kaito: 2 }, flags: ["Entrou_sem_esperar"] },
      { texto: "C. Pegar o pão de queijo da mão dele e morder. “Não sei. Tchau.” De boca cheia.", proxima: "c1_1c_1", pontos: { kaito: 2 }, flags: ["Roubou_pao"] }
    ]},
    c1_1a_1: { quem: "eu", texto: "Sei lá, Kaito. Vai ver ela é muito educada.", proxima: "c1_1a_2" },
    c1_1a_2: { tipo: "narracao", texto: "Ela fala com uma voz tão doce que dá cárie. O Kaito franze a testa, olhando para ela como quem olha para uma panela que está fazendo um barulho estranho.", proxima: "c1_1a_3" },
    c1_1a_3: { quem: "kaito", texto: "...Você está brava?", proxima: "c1_1a_4" },
    c1_1a_4: { quem: "eu", texto: "Eu? Imagina. Eu estou ótima. Eu estou maravilhosa. Bom dia de aula.", proxima: "c1_28" },
    c1_1b_1: { quem: "eu", texto: "Porque você deu bom dia pra ela.", proxima: "c1_1b_2" },
    c1_1b_2: { tipo: "narracao", texto: "Ela vira e entra pelo portão sem olhar para trás. Atrás dela, ela escuta o Kaito falar “mas você que mandou...”, baixinho, confuso, para ninguém.", proxima: "c1_28" },
    c1_1c_1: { tipo: "narracao", texto: "Ela pega o pão de queijo da mão dele e dá uma mordida enorme.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "eu", texto: "Não sei. Tchau.", proxima: "c1_1c_3" },
    c1_1c_3: { tipo: "narracao", texto: "Sai de boca cheia, com metade do pão de queijo dele na mão. O Kaito fica olhando para a própria mão vazia, depois para ela indo embora, depois para a mão de novo.", proxima: "c1_28" },

    // (todas as opções continuam aqui)
    c1_28: { tipo: "pensamento", texto: "Eu não estou com ciúme. Eu tenho vinte e oito anos por dentro. Mulher de vinte e oito anos não tem ciúme de menina de dezesseis com chaveiro na mochila.", proxima: "c1_29" },
    c1_29: { tipo: "pensamento", texto: "Eu estou com muito ciúme.", proxima: "c2_01" },

    /* =================== CENA 2 — A PROFESSORA =================== */
    // Cenário: sala de aula, aula de geografia. Música: tensa, cômica.
    c2_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Geografia — Cena 2", sprite: null, texto: "A aula de geografia é a primeira. A professora de geografia é conhecida na escola inteira por três coisas: o coque perfeito, a caneta vermelha, e a capacidade de ouvir um cochicho do outro lado da sala com as costas viradas.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", sprite: "mio", texto: "A Mio, do lado, rabisca no caderno e passa para ela: “O QUE ACONTECEU NO PORTÃO. A REDE DE FOFOCA DISSE QUE A SERENA DEU BOM DIA PRO KAITO E ELE RESPONDEU.”", proxima: "c2_03" },
    c2_03: { quem: "eu", texto: "Ele respondeu porque eu mandei.", proxima: "c2_04" },
    c2_04: { quem: "mio", texto: "Você mandou?! Por quê?!", proxima: "c2_05" },
    c2_05: { quem: "eu", texto: "Porque eu sou uma pessoa boa e burra.", proxima: "c2_06" },
    c2_06: { quem: "desconhecido", rotulo: "Professora de geografia", texto: "SN. Mio.", proxima: "c2_07" },
    c2_07: { tipo: "narracao", sprite: null, texto: "A professora não vira. Ela continua escrevendo no quadro, de costas, e mesmo assim as duas param de respirar.", proxima: "c2_08" },
    c2_08: { quem: "desconhecido", rotulo: "Professora de geografia", texto: "Essa é a terceira semana seguida que vocês duas conversam na minha aula. E ontem a professora de português me contou que a SN respondeu “fita preta” numa pergunta sobre metáfora.", proxima: "c2_09" },
    c2_09: { tipo: "narracao", texto: "A sala inteira ri. Na frente, a Reina vira para trás e faz um sinal de positivo, satisfeita. A SN quer derreter na carteira.", proxima: "c2_10" },
    c2_10: { quem: "desconhecido", rotulo: "Professora de geografia", texto: "Já que vocês têm tanta coisa pra conversar, vocês vão conversar sobre bacia hidrográfica. Trabalho em dupla. Dez páginas. Escrito à mão. Com mapa desenhado. Para amanhã, primeira aula.", proxima: "c2_11" },
    c2_11: { quem: "mio", texto: "Amanhã?! Dez páginas até amanhã?!", proxima: "c2_12" },
    c2_12: { quem: "desconhecido", rotulo: "Professora de geografia", texto: "Doze, se continuar falando.", proxima: "c2_13" },
    c2_13: { tipo: "narracao", texto: "A Mio fecha a boca com tanta força que dá para ouvir os dentes. A Hana, do outro lado, já está abrindo o caderno de gatinho numa página nova, com cara de quem vai montar um cronograma de resgate.", proxima: "c2_14" },
    c2_14: { tipo: "narracao", sprite: "takeo:machucado", texto: "Da carteira de trás, o Takeo cutuca o ombro dela com a mão boa, e sussurra tão baixo que só ela ouve.", proxima: "c2_15" },
    c2_15: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu estou de plantão na biblioteca hoje à tarde. Eu reservo a mesa do canto pra vocês. A que tem tomada. E eu sei onde ficam os atlas.", proxima: "c2_16" },
    c2_16: { quem: "eu", texto: "Takeo, você é um anjo.", proxima: "c2_17" },
    c2_17: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu sou um anjo de um braço só. Mas eu sei usar o fichário.", proxima: "c2_18" },
    c2_18: { tipo: "narracao", sprite: "ren", texto: "Na carteira perto da porta, o Ren levanta os olhos do livro. Ele olha para a SN. Não por um segundo. Por mais tempo. Depois volta para a página.", proxima: "c2_19" },
    c2_19: { tipo: "pensamento", texto: "Ele ouviu tudo. Dez páginas. Bacia hidrográfica. Biblioteca à tarde.", proxima: "c3_01" },

    /* =================== CENA 3 — SEM CENOURA =================== */
    // Cenário: pátio dos fundos, intervalo. Música: leve, depois irritada.
    c3_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Intervalo — Cena 3", sprite: null, texto: "No intervalo, ela desce para o pátio dos fundos com a Mio, e as duas sentam no muro baixo do lado do bebedouro com o caderno aberto, tentando começar o trabalho. A Mio escreve “Bacia hidrográfica é” e para.", proxima: "c3_02" },
    c3_02: { quem: "mio", texto: "Bacia hidrográfica é... o quê? Uma bacia? De água? Tipo de lavar roupa?", proxima: "c3_03" },
    c3_03: { tipo: "narracao", texto: "A SN não responde. Ela está olhando para o banco de concreto do lado da árvore torta. O banco onde ela come com o Blake. Onde hoje está o Kaito, sozinho, de pernas abertas, comendo um onigiri do tio.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", sprite: "serena", texto: "E onde, agora, chega a Serena. Com uma marmita de plástico rosa, embrulhada num pano de prato com laço. Ela senta do lado dele. Não longe. Do lado.", proxima: "c3_05" },
    c3_05: { quem: "serena", texto: "Eu fiz pra você. Yakisoba. Sem cenoura. Eu lembrei que você não gosta de cenoura.", proxima: "c3_06" },
    c3_06: { tipo: "narracao", texto: "A voz dela chega até o muro do bebedouro. Todo mundo no pátio está ouvindo, porque a rede de fofoca está trabalhando ao vivo hoje.", proxima: "c3_07" },
    c3_07: { tipo: "narracao", sprite: "kaito", texto: "O Kaito olha para a marmita. Olha para a Serena. Olha para a marmita de novo, com a cara de quem está tentando lembrar quando foi que ele contou que não gosta de cenoura.", proxima: "c3_08" },
    c3_08: { quem: "kaito", texto: "...Como você sabe que eu não gosto de cenoura?", proxima: "c3_09" },
    c3_09: { quem: "serena", sprite: "serena", texto: "O bolo. Do primeiro ano. Você deu pro Ryuji. Eu perguntei pra ele por quê.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", sprite: "kaito", texto: "O Kaito fica em silêncio um tempo. Depois pega a marmita. Abre. Pega os hashis. E come. Ele come o yakisoba sem cenoura da Serena, no banco da árvore torta, na frente do pátio inteiro.", proxima: "c3_11" },
    c3_11: { quem: "kaito", texto: "...Está bom. Obrigado.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", sprite: "serena", texto: "A Serena sorri tanto que parece que vai explodir. Ela não fala mais nada. Só fica sentada do lado, olhando ele comer, com as mãos no colo.", proxima: "c3_13" },
    c3_13: { tipo: "narracao", sprite: null, efeito: "tremor", texto: "Do muro do bebedouro, faz um estalo seco. A Mio olha para baixo. O lápis da SN está partido ao meio. As duas metades na mão dela. Ela nem percebeu que estava apertando.", proxima: "c3_14" },
    c3_14: { quem: "mio", sprite: "mio", texto: "...SN. Você quebrou o lápis.", proxima: "c3_15" },
    c3_15: { quem: "eu", texto: "Ele era fraco. Era um lápis muito fraco.", proxima: "c3_16" },
    c3_16: { tipo: "pensamento", texto: "Ele comeu. Ele pegou a marmita e comeu. Ele nem pergunta quando o tio manda pão de queijo pra mim, ele só entrega. E agora ele está comendo yakisoba rosa de laço.", proxima: "c3_17" },
    c3_17: { tipo: "pensamento", texto: "Eu não tenho direito nenhum de ficar brava. Ele não é meu. A gente não é nada. Foi um segundo sem querer num hall.", proxima: "c3_18" },
    c3_18: { tipo: "pensamento", texto: "Eu estou muito brava.", proxima: "c3_19" },
    c3_19: { tipo: "narracao", sprite: "blake", texto: "Alguém senta do outro lado dela no muro. É o Blake, com a lancheira térmica azul, que foi expulso do próprio banco e não reclamou. Ele olha para o lápis quebrado na mão dela. Depois para o banco. Depois para ela.", proxima: "c3_20" },
    c3_20: { quem: "blake", texto: "Ela pegou o meu banco.", proxima: "c3_21" },
    c3_21: { quem: "eu", texto: "Ela pegou o seu banco.", proxima: "c3_22" },
    c3_22: { quem: "blake", texto: "E você quebrou um lápis.", proxima: "c3_23" },
    c3_23: { quem: "eu", texto: "O lápis era fraco, Blake.", proxima: "c3_24" },
    c3_24: { tipo: "narracao", texto: "Ele não fala nada. Ele abre a lancheira, tira um lápis novo do bolso de fora, que ele sempre carrega porque perde lápis o tempo todo, e coloca na mão dela, no lugar das duas metades.", proxima: "c3_25" },
    c3_25: { quem: "blake", texto: "Esse é mais forte. É de marcenaria.", proxima: "c3_esc2" },

    // ▶ ESCOLHA 2 — No muro do bebedouro
    c3_esc2: { escolhas: [
      { texto: "A. “Obrigada.” E apertar o lápis de marcenaria com toda a força. Ele não quebra. Ela fica decepcionada.", proxima: "c3_2a_1", pontos: { blake: 2 }, flags: ["Lapis_marcenaria"] },
      { texto: "B. “Você não vai falar nada? Do banco?”", proxima: "c3_2b_1", pontos: { blake: 2 }, flags: ["Falar_banco"] },
      { texto: "C. Encostar a cabeça no ombro do Blake. Só um pouco. “Me empresta o seu ombro um minuto.”", proxima: "c3_2c_1", pontos: { blake: 3 }, flags: ["Ombro_Blake"] }
    ]},
    c3_2a_1: { tipo: "narracao", texto: "Ela aperta o lápis com força. Muita força. Ele não quebra. É de marcenaria mesmo. Ela olha para ele com uma decepção sincera.", proxima: "c3_2a_2" },
    c3_2a_2: { quem: "blake", texto: "Eu sabia que você ia tentar.", proxima: "c3_2a_3" },
    c3_2a_3: { tipo: "narracao", texto: "Ele fala isso olhando para a frente, e ela vê o canto da boca dele tremer, e de repente ela está rindo, e a raiva diminui um pouco, só um pouco, o suficiente para ela conseguir respirar.", proxima: "c3_26" },
    c3_2b_1: { quem: "eu", texto: "Você não vai falar nada? Do banco? Ela tomou o seu banco.", proxima: "c3_2b_2" },
    c3_2b_2: { quem: "blake", texto: "O banco não é meu. Eu só sento lá.", proxima: "c3_2b_3" },
    c3_2b_3: { tipo: "narracao", texto: "Ele fala isso devagar, olhando para o Kaito e a Serena, e depois olha para ela, de lado, um segundo a mais.", proxima: "c3_2b_4" },
    c3_2b_4: { quem: "blake", texto: "Tem coisa que a gente acha que é da gente porque está acostumado. Não quer dizer que é.", proxima: "c3_2b_5" },
    c3_2b_5: { tipo: "pensamento", texto: "Ele não está falando do banco. Ele está falando de mim. Ou do Kaito. Ou dele mesmo. O Blake fala pouco e acerta sempre.", proxima: "c3_26" },
    c3_2c_1: { tipo: "narracao", texto: "Ela encosta a cabeça no ombro dele. Ele fica duro como uma porta. Depois, devagar, relaxa. Não mexe o braço. Não fala nada. Só fica ali, servindo de ombro, olhando para a árvore torta.", proxima: "c3_2c_2" },
    c3_2c_2: { quem: "blake", texto: "...Um minuto.", proxima: "c3_2c_3" },
    c3_2c_3: { tipo: "narracao", texto: "Passa um minuto. Passam dois. Ele não fala que acabou. Quando ela levanta a cabeça, as orelhas dele estão vermelhas até a ponta, e ele está olhando fixo para a lancheira como se fosse a coisa mais interessante do mundo.", proxima: "c3_26" },

    // (todas as opções continuam aqui)
    c3_26: { tipo: "narracao", sprite: "victor", texto: "O Victor aparece correndo do bloco C, com o pirulito na boca e o celular na mão, e para na frente das duas, ofegante.", proxima: "c3_27" },
    c3_27: { quem: "victor", texto: "Boletim da rede. A Serena acordou às cinco da manhã pra fazer o yakisoba. As amigas dela contaram pra menina do primeiro ano, que contou pra moça da cantina, que contou pra mim. Ela pesquisou receita. Ela fez três vezes até ficar bom.", proxima: "c3_28" },
    c3_28: { quem: "mio", sprite: "mio", texto: "Três vezes?", proxima: "c3_29" },
    c3_29: { quem: "victor", texto: "A primeira queimou, a segunda ficou salgada. A terceira é essa. O líder está comendo a terceira tentativa da Serena.", proxima: "c3_30" },
    c3_30: { tipo: "narracao", texto: "Ele olha para a SN. Para o lápis de marcenaria na mão dela. Para as duas metades do lápis quebrado no colo. E o sorriso torto dele diminui um pouco.", proxima: "c3_31" },
    c3_31: { quem: "victor", texto: "...Você quer que eu vá lá contar a história do Caramelo comendo o sofá? Eu ofereci. Eu estou oferecendo. É a minha arma mais perigosa.", proxima: "c3_32" },
    c3_32: { quem: "eu", texto: "Não, Victor. Deixa.", proxima: "c3_33" },
    c3_33: { quem: "victor", texto: "Tá. Mas a oferta continua. Ela não vence. É uma oferta vitalícia.", proxima: "c3_34" },
    c3_34: { tipo: "narracao", texto: "O sinal toca. No banco, a Serena guarda a marmita vazia, levanta, e antes de ir, olha para o muro do bebedouro. Para a SN. Não sorri. Só levanta a sobrancelha, uma vez.", proxima: "c3_35" },
    c3_35: { tipo: "pensamento", texto: "Primeiro round pra ela. Tudo bem. Eu não estou competindo. Eu não estou competindo com ninguém.", proxima: "c3_36" },
    c3_36: { tipo: "pensamento", texto: "Eu estou anotando os pontos.", proxima: "c4_01" },

    /* =================== CENA 4 — O LIVRO (Ren) =================== */
    // Cenário: biblioteca, depois da aula (usa "clube-leitura"). Música: silêncio.
    c4_01: { tipo: "narracao", cenario: "clube-leitura", transicao: "tempo", legenda: "Biblioteca, 13h — Cena 4", sprite: "takeo:machucado", texto: "Depois da aula, a biblioteca. O Takeo, de plantão, reservou a mesa do canto com o papelzinho “ocupada pelo plantão” e empilhou em cima dela quatro atlas, dois livros de geografia física e uma régua.", proxima: "c4_02" },
    c4_02: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu separei tudo que fala de bacia hidrográfica. O atlas verde é o melhor. O vermelho tem mapa bonito mas está desatualizado, ainda tem país que não existe mais.", proxima: "c4_03" },
    c4_03: { quem: "mio", sprite: "mio", texto: "Takeo, eu vou te dar um rim. Escolhe qual.", proxima: "c4_04" },
    c4_04: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu não preciso de rim. Eu preciso que vocês não façam barulho, porque a bibliotecária me deu esse plantão em confiança.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", sprite: null, texto: "Ele volta para o balcão, mancando menos, e de lá fica olhando para a mesa do canto de vez em quando, como um guarda de museu muito dedicado.", proxima: "c4_06" },
    c4_06: { tipo: "narracao", texto: "Uma hora depois, elas têm uma página e meia. A Mio já chorou uma vez, de raiva, em silêncio, em cima do atlas verde. A SN apagou o mapa do rio São Francisco três vezes.", proxima: "c4_07" },
    c4_07: { quem: "mio", sprite: "mio", texto: "Eu odeio rio. Eu odeio afluente. Eu odeio essa professora e o coque dela. Eu vou largar a escola e virar locutora de rádio de madrugada agora, hoje, sem diploma.", proxima: "c4_08" },
    c4_08: { quem: "eu", texto: "Você precisa de diploma pra ser locutora.", proxima: "c4_09" },
    c4_09: { quem: "mio", sprite: "mio", texto: "Não precisa! Precisa? Eu não sei! Eu não sei nada! Eu não sei nem o que é jusante!", proxima: "c4_10" },
    c4_10: { tipo: "narracao", sprite: null, texto: "Uma sombra cai em cima da mesa. Alguém parou do lado delas. A SN levanta os olhos.", proxima: "c4_11" },
    c4_11: { tipo: "narracao", sprite: "ren", texto: "É o Ren.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", texto: "De uniforme, com a mochila num ombro, com um livro na mão. Um livro grosso, de capa azul, com uma tira de papel marcando uma página no meio. Ele coloca o livro em cima da mesa, do lado do caderno dela. Sem barulho.", proxima: "c4_13" },
    c4_13: { quem: "ren", texto: "Página cento e doze. Tem o mapa.", proxima: "c4_14" },
    c4_14: { tipo: "narracao", texto: "A Mio fica completamente parada, com a caneta no ar. Na mesa do balcão, o Takeo para de carimbar e fica olhando.", proxima: "c4_15" },
    c4_15: { tipo: "narracao", texto: "A SN olha para o livro. Depois para ele. Ele não está olhando para o livro. Está olhando para ela. Para a cara cansada dela, para o lápis de marcenaria na mão dela, para as duas metades do lápis quebrado que ela guardou no estojo.", proxima: "c4_16" },
    c4_16: { quem: "ren", texto: "Você está cansada.", proxima: "c4_17" },
    c4_17: { tipo: "narracao", texto: "Não é pergunta. Ele fala do mesmo jeito que falou “vai pela rua da padaria, tem luz”. Como quem cuida. E é por isso que dá arrepio.", proxima: "c4_18" },
    c4_18: { tipo: "pensamento", texto: "Ele estava na aula. Ele ouviu a professora. Ele foi procurar o livro certo, na página certa, com o mapa certo. Ele ficou pensando em mim a manhã inteira.", proxima: "c4_19" },
    c4_19: { tipo: "pensamento", texto: "E eu vi a cara dele no corredor do bloco C, terça. Quando eu saí do armário com o Victor.", proxima: "c4_esc3" },

    // ▶ ESCOLHA 3 — O livro do Ren
    c4_esc3: { escolhas: [
      { texto: "A. Empurrar o livro de volta pra ele, devagar, pela mesa. “Não precisa.”", proxima: "c4_3a_1", pontos: { desvio: 1 }, flags: ["Devolveu_livro"] },
      { texto: "B. Ficar com o livro. “Obrigada.” Seca. E voltar pro caderno sem olhar mais pra ele.", proxima: "c4_3b_1", pontos: {}, flags: ["Ficou_livro"] },
      { texto: "C. “Você estava me ouvindo na aula de novo, Ren.”", proxima: "c4_3c_1", pontos: { desvio: 1 }, flags: ["Ouvindo_Ren"] }
    ]},
    c4_3a_1: { tipo: "narracao", texto: "Ela coloca a mão em cima do livro e empurra, devagar, pela mesa, até a beirada, do lado dele.", proxima: "c4_3a_2" },
    c4_3a_2: { quem: "eu", texto: "Não precisa.", proxima: "c4_3a_3" },
    c4_3a_3: { tipo: "narracao", texto: "Ele olha para o livro na beirada da mesa. Não pega. Fica parado, um segundo, dois. Depois tira a tira de papel da página cento e doze, guarda no bolso, e deixa o livro ali, na beirada, sem marcação, e vai embora.", proxima: "c4_3a_4" },
    c4_3a_4: { tipo: "pensamento", texto: "Ele deixou o livro. Só tirou a marcação. Como quem diz: o livro fica, a ajuda não. Eu não sei se isso é ele aceitando ou ele insistindo.", proxima: "c4_20" },
    c4_3b_1: { quem: "eu", texto: "Obrigada.", proxima: "c4_3b_2" },
    c4_3b_2: { tipo: "narracao", texto: "Ela fala seco, sem olhar para ele, e volta para o caderno. Ele fica parado mais um segundo do lado da mesa. Ela sente ele esperando alguma coisa. Ela não dá.", proxima: "c4_3b_3" },
    c4_3b_3: { tipo: "narracao", texto: "Ele vai embora. Quando a porta da biblioteca fecha, ela abre o livro na página cento e doze. O mapa é perfeito. Exatamente o que elas precisavam. Ela odeia que seja perfeito.", proxima: "c4_20" },
    c4_3c_1: { quem: "eu", texto: "Você estava me ouvindo na aula de novo, Ren.", proxima: "c4_3c_2" },
    c4_3c_2: { tipo: "narracao", texto: "Ele não nega. Ele olha para ela, para a Mio, que está paralisada, e para o Takeo, lá no balcão, que está segurando o carimbo no ar.", proxima: "c4_3c_3" },
    c4_3c_3: { quem: "ren", texto: "Você fala alto quando está nervosa.", proxima: "c4_3c_4" },
    c4_3c_4: { tipo: "narracao", texto: "Ele fala isso baixo, e vai embora antes que ela consiga responder, e deixa o livro na mesa, aberto na página cento e doze. A Mio solta a respiração que estava segurando.", proxima: "c4_20" },

    // (todas as opções continuam aqui)
    c4_20: { quem: "mio", sprite: "mio", texto: "...O Ren. O Ren da carteira da porta. Ele trouxe um livro pra você. Ele FALOU com você. O Ren não fala com ninguém. O que está acontecendo nessa escola?", proxima: "c4_21" },
    c4_21: { tipo: "narracao", sprite: "takeo:machucado", texto: "O Takeo vem do balcão, mancando rápido, e para do lado da mesa, olhando para a porta por onde o Ren saiu, com uma cara que ela nunca viu nele. Não é ciúme. É outra coisa. Uma coisa desconfiada, quieta.", proxima: "c4_22" },
    c4_22: { quem: "takeo", sprite: "takeo:machucado", texto: "Ele te incomodou?", proxima: "c4_23" },
    c4_23: { quem: "eu", texto: "Não. Ele trouxe um livro.", proxima: "c4_24" },
    c4_24: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu não gosto do jeito que ele olha pra você.", proxima: "c4_25" },
    c4_25: { tipo: "narracao", texto: "O Takeo fala isso sem pensar, e depois percebe o que falou, e fica vermelho, e olha para o chão. Mas não retira. Ele volta para o balcão e passa o resto da tarde olhando para a porta, de cinco em cinco minutos.", proxima: "c4_26" },
    c4_26: { tipo: "pensamento", texto: "O Takeo percebeu. O Takeo, que não sabe de nada, percebeu.", proxima: "c5_01" },

    /* =================== CENA 5 — REFORÇOS (Ryuji) =================== */
    // Cenário: biblioteca, tarde. Música: animada, depois doce.
    c5_01: { tipo: "narracao", transicao: "tempo", legenda: "Biblioteca, 14h30 — Cena 5", sprite: null, texto: "Às duas e meia, a porta da biblioteca abre de novo. Dessa vez, com barulho. Muito barulho. Alguém tropeçou no tapete da entrada e bateu na estante de revistas.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", sprite: "ryuji", texto: "É o Ryuji. Com a faixa na testa, a mochila nas costas, e um saco de papel gigante da cantina na mão, cheirando a coxinha a dez metros de distância.", proxima: "c5_03" },
    c5_03: { quem: "ryuji", texto: "A rede de fofoca disse que vocês estão presas na biblioteca com dez páginas de bacia hidrográfica. Eu trouxe reforços. Oito coxinhas. Dois sucos. E eu.", proxima: "c5_04" },
    c5_04: { quem: "takeo", sprite: "takeo:machucado", texto: "Não pode comer na biblioteca!", proxima: "c5_05" },
    c5_05: { quem: "ryuji", sprite: "ryuji", texto: "Takeo, eu trouxe duas coxinhas pra você. De frango com catupiry.", proxima: "c5_06" },
    c5_06: { quem: "takeo", sprite: "takeo:machucado", texto: "...Come na mesa do canto. Rápido. Eu não vi nada.", proxima: "c5_07" },
    c5_07: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji senta do lado da SN, colado, porque a mesa do canto é pequena e ele é grande. Distribui as coxinhas. Pega o caderno dela. Lê a página e meia. E faz uma cara que ela nunca viu nele: concentrado.", proxima: "c5_08" },
    c5_08: { quem: "ryuji", texto: "Vocês estão fazendo errado. Vocês estão escrevendo sobre bacia como se fosse coisa de livro. Bacia hidrográfica é coisa de enchente. É coisa de resgate.", proxima: "c5_09" },
    c5_09: { quem: "mio", sprite: "mio", texto: "Como assim coisa de resgate?", proxima: "c5_10" },
    c5_10: { quem: "ryuji", sprite: "ryuji", texto: "Bombeiro tem que saber pra onde a água vai quando chove muito. Se você sabe o desenho da bacia, você sabe onde vai encher primeiro. Você sabe onde as pessoas vão ficar presas. O rio principal, os afluentes, o divisor de águas, a montante, a jusante.", proxima: "c5_11" },
    c5_11: { quem: "mio", sprite: "mio", texto: "Jusante! O que é jusante?!", proxima: "c5_12" },
    c5_12: { quem: "ryuji", sprite: "ryuji", texto: "É pra onde a água desce. Rio abaixo. Se a enchente começa a montante, você corre pra avisar quem está a jusante, porque a água vai chegar lá depois. É assim que a gente salva gente.", proxima: "c5_13" },
    c5_13: { tipo: "narracao", sprite: null, texto: "A Mio fica olhando para ele de boca aberta. A SN também. O Ryuji, que nunca para quieto, que faz piada de tudo, que estaciona torto, está explicando geografia física com as mãos, desenhando rios no ar, com os olhos brilhando.", proxima: "c5_14" },
    c5_14: { quem: "eu", texto: "Ryuji. Você sabe tudo isso de cor?", proxima: "c5_15" },
    c5_15: { quem: "ryuji", sprite: "ryuji", texto: "Tá nos cartões. Cartão dezessete até o vinte e três. Enchente e deslizamento.", proxima: "c5_16" },
    c5_16: { tipo: "narracao", sprite: null, texto: "Pelas próximas duas horas, o Ryuji dita e as duas escrevem. Ele desenha o mapa da bacia do São Francisco no caderno da SN, com a régua do Takeo, apertando a língua entre os dentes, com a letra de eletrocardiograma dele indicando cada afluente. Ele erra o nome de um rio e inventa outro. A SN corrige. Ele diz que o dele é melhor.", proxima: "c5_17" },
    c5_17: { tipo: "narracao", texto: "Às quatro e meia, a Mio recebe uma mensagem da mãe. Tem que ir buscar o irmão no inglês. Ela faz as contas: seis páginas e meia prontas. Faltam três e meia.", proxima: "c5_18" },
    c5_18: { quem: "mio", sprite: "mio", texto: "Eu faço uma e meia em casa hoje à noite. Você faz duas. Amanhã a gente junta no portão. Ryuji, eu te amo, mas de um jeito totalmente amigo, de um jeito de jusante.", proxima: "c5_19" },
    c5_19: { quem: "ryuji", sprite: "ryuji", texto: "Eu aceito o amor de jusante.", proxima: "c5_20" },
    c5_20: { tipo: "narracao", sprite: null, texto: "A Mio vai embora. Na mesa do canto, ficam a SN e o Ryuji, com as coxinhas acabando, o atlas verde aberto, o livro azul do Ren fechado num canto, e a biblioteca quase vazia, só o Takeo no balcão.", proxima: "c5_21" },
    c5_21: { tipo: "narracao", texto: "O celular dela vibra em cima da mesa, virado para baixo. Ela vira.", proxima: "c5_22" },
    c5_22: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "SN. NÃO SURTA. A rede de fofoca disse que a Serena foi atrás do Kaito na saída e seguiu ele até a lojinha. Ela está lá agora. Comendo caldo. No balcão. Do lado dele.", proxima: "c5_23" },
    c5_23: { tipo: "narracao", texto: "Logo embaixo, chega outra.", proxima: "c5_24" },
    c5_24: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Cadê você? Saí e você não estava no portão.", proxima: "c5_25" },
    c5_25: { tipo: "narracao", efeito: "tremor", texto: "A SN fica olhando para as duas mensagens, uma em cima da outra. Sente o rosto esquentar. Sente a mão apertar o celular. Lembra do lápis. Solta o celular na mesa antes que ele vire duas metades também.", proxima: "c5_26" },
    c5_26: { tipo: "pensamento", texto: "“Cadê você.” Ele está na lojinha com a Serena comendo caldo no balcão e manda “cadê você”. O balcão é meu. Não é meu. É do tio. Mas eu que sento lá. Eu que corto cebolinha lá.", proxima: "c5_27" },
    c5_27: { tipo: "pensamento", texto: "E ele vai colocar cebolinha demais no caldo dela também? Vai? Vai dizer “eu fiz caldo” com a orelha vermelha pra ela?", proxima: "c5_28" },
    c5_28: { tipo: "pensamento", texto: "Eu estou sendo ridícula. Eu sei que estou. Eu fiquei na biblioteca porque a professora do coque me deu dez páginas. Ele não tem culpa de nada. Ele nem sabe que ela gosta dele.", proxima: "c5_29" },
    c5_29: { tipo: "pensamento", texto: "Eu estou com muita raiva dele.", proxima: "c5_30" },
    c5_30: { quem: "ryuji", sprite: "ryuji", texto: "...SN? Você está fazendo uma cara de incêndio classe A. Do tipo que espalha rápido.", proxima: "c5_esc4" },

    // ▶ ESCOLHA 4 — A mensagem do Kaito
    c5_esc4: { escolhas: [
      { texto: "A. Não responder o Kaito. Virar o celular pra baixo. “Vamos terminar o mapa, Ryuji.”", proxima: "c5_4a_1", pontos: { ryuji: 2, desvio: 1 }, flags: ["Ignorou_Kaito"] },
      { texto: "B. Responder seco: “Biblioteca. Trabalho.” E virar o celular pra baixo.", proxima: "c5_4b_1", pontos: { ryuji: 1 }, flags: ["Seco_Kaito"] },
      { texto: "C. Desabafar com o Ryuji. Tudo. O portão, o yakisoba, a lojinha. Rápido, sem respirar.", proxima: "c5_4c_1", pontos: { ryuji: 3 }, flags: ["Desabafou_Ryuji"] }
    ]},
    c5_4a_1: { tipo: "narracao", texto: "Ela vira o celular para baixo com força. Pega a régua. Puxa o caderno.", proxima: "c5_4a_2" },
    c5_4a_2: { quem: "eu", texto: "Vamos terminar o mapa, Ryuji. A jusante. Agora.", proxima: "c5_4a_3" },
    c5_4a_3: { tipo: "narracao", texto: "O Ryuji olha para o celular virado. Olha para ela. Não pergunta nada. Ele pega a outra régua e começa a desenhar o afluente que faltava, em silêncio, do lado dela, mais perto do que precisa, como quem fica perto de quem está com frio.", proxima: "c5_31" },
    c5_4b_1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Biblioteca. Trabalho.", proxima: "c5_4b_2" },
    c5_4b_2: { tipo: "narracao", texto: "Ela vira o celular para baixo antes que ele responda. Sente ele vibrar contra a mesa uma vez. Duas. Não vira.", proxima: "c5_4b_3" },
    c5_4b_3: { quem: "ryuji", texto: "Ele está vibrando.", proxima: "c5_4b_4" },
    c5_4b_4: { quem: "eu", texto: "Ele é um celular. Celular vibra. É a função dele.", proxima: "c5_31" },
    c5_4c_1: { quem: "eu", texto: "A Serena deu bom dia e ele respondeu porque eu mandei, aí ela levou yakisoba sem cenoura que ela fez três vezes, e ele comeu, e agora ela seguiu ele até a lojinha e está comendo caldo no balcão, no meu banquinho, não, no banquinho do canto, que não é meu, e ele manda “cadê você” como se nada!", proxima: "c5_4c_2" },
    c5_4c_2: { tipo: "narracao", texto: "Ela fala tudo de uma vez, sem respirar, em voz baixa e muito rápida, para o Takeo não ouvir do balcão. O Ryuji escuta tudo, de olho arregalado, segurando a última coxinha no ar.", proxima: "c5_4c_3" },
    c5_4c_3: { quem: "ryuji", texto: "...Uau.", proxima: "c5_4c_4" },
    c5_4c_4: { quem: "eu", texto: "Eu sei. Eu sei que eu estou parecendo maluca.", proxima: "c5_4c_5" },
    c5_4c_5: { quem: "ryuji", texto: "Não. Você está parecendo alguém que gosta de alguém. É diferente. Eu conheço a diferença. A minha irmã de nove anos tem as duas coisas.", proxima: "c5_4c_6" },
    c5_4c_6: { tipo: "narracao", texto: "Ele coloca a última coxinha na mão dela. Ela olha para a coxinha. Depois para ele. Ele está sorrindo, mas o sorriso é menor que o normal, e tem uma coisa nos olhos dele que ela não consegue ler direito.", proxima: "c5_31" },

    // (todas as opções continuam aqui)
    c5_31: { tipo: "narracao", sprite: null, transicao: "tempo", legenda: "18h", texto: "Às seis, a bibliotecária avisa que vai fechar. As duas páginas da SN estão prontas, com o mapa do Ryuji na última, colorido com o lápis de cor do estojo do Takeo. Ficou o mapa mais bonito que ela já fez na vida. Ela não fez. Ele fez.", proxima: "c5_32" },
    c5_32: { tipo: "narracao", sprite: "ryuji", texto: "Na saída da biblioteca, o Ryuji para na porta, com a mochila nas costas e o capacete amarelo na mão.", proxima: "c5_33" },
    c5_33: { quem: "ryuji", texto: "Eu te levo. Na Relâmpago. Está escurecendo e a sua casa é no caminho da minha. Mais ou menos no caminho. Se eu der uma volta grande.", proxima: "c5_34" },
    c5_34: { tipo: "narracao", texto: "Ela pensa no Kaito. Que todo dia leva ela. Que hoje está na lojinha com a Serena. Que mandou “cadê você”, e depois vibrou mais duas vezes, e ela não leu.", proxima: "c5_esc5" },

    // ▶ ESCOLHA 5 — A carona
    c5_esc5: { escolhas: [
      { texto: "A. “Eu aceito. Mas pela volta grande.”", proxima: "c5_5a_1", pontos: { ryuji: 3 }, flags: ["Volta_grande"] },
      { texto: "B. “Eu aceito.” E colocar o capacete amarelo sem falar mais nada.", proxima: "c5_5b_1", pontos: { ryuji: 2 }, flags: ["Capacete_amarelo"] },
      { texto: "C. “Obrigada pelo mapa, Ryuji. De verdade. Hoje você me salvou.”", proxima: "c5_5c_1", pontos: { ryuji: 3 }, flags: ["Salvou_hoje"] }
    ]},
    c5_5a_1: { quem: "eu", texto: "Eu aceito. Mas pela volta grande.", proxima: "c5_5a_2" },
    c5_5a_2: { tipo: "narracao", texto: "O Ryuji abre o maior sorriso da vida dele. Coloca o capacete amarelo nela, ele mesmo, e fecha a fivela embaixo do queixo dela com cuidado, os dedos encostando no pescoço dela, devagar, como quem ajusta equipamento de segurança. Só que demora mais do que precisa.", proxima: "c6_01" },
    c5_5b_1: { tipo: "narracao", texto: "Ela pega o capacete amarelo e coloca sem falar nada. Ele fica olhando ela fechar a fivela, e quando ela não consegue fechar de primeira, ele estende a mão para ajudar, e para no meio, e espera ela pedir. Ela não pede. Ela fecha sozinha. Ele sorri assim mesmo.", proxima: "c6_01" },
    c5_5c_1: { quem: "eu", texto: "Obrigada pelo mapa, Ryuji. De verdade. Hoje você me salvou.", proxima: "c5_5c_2" },
    c5_5c_2: { tipo: "narracao", texto: "O Ryuji fica parado na porta da biblioteca. Pela primeira vez desde que ela conhece ele, ele não faz piada de bombeiro. Ele só olha para ela, e fica vermelho, e coça a nuca.", proxima: "c5_5c_3" },
    c5_5c_3: { quem: "ryuji", texto: "...Primeiro resgate de verdade. De papel. Mas conta.", proxima: "c6_01" },

    /* =================== CENA 6 — A RELÂMPAGO =================== */
    // Cenário: rua, de noite (usa "saida-colegio"). Música: motor, depois só vento.
    c6_01: { tipo: "narracao", cenario: "beco-mercado", sprite: "ryuji", transicao: "tempo", legenda: "18h20 — Cena 6", sprite: null, texto: "Na garupa da Relâmpago, ela segura na cintura do Ryuji, porque ele não tem jaqueta para segurar, só a camiseta do uniforme. Ele percebe. As costas dele ficam duras no primeiro quarteirão. No segundo, relaxam.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", texto: "Ele vai devagar. Pela volta grande, que é muito grande, que passa pelo parque, pela avenida, pela rua das floriculturas, que nem é caminho de lugar nenhum. O sol está acabando, laranja, e a moto amarela fica dourada de verdade, de novo, por uns segundos.", proxima: "c6_03" },
    c6_03: { quem: "eu", texto: "Ryuji. Ela está dourada de novo.", proxima: "c6_04" },
    c6_04: { quem: "ryuji", texto: "EU SEMPRE FALEI.", proxima: "c6_05" },
    c6_05: { tipo: "narracao", texto: "Ela ri, encostando a testa do capacete nas costas dele, e ele ri também, e o riso dele vibra nas costas dela. Por uns minutos, ela esquece a lojinha, a Serena, o yakisoba, o banquinho do canto.", proxima: "c6_06" },
    c6_06: { tipo: "narracao", texto: "Num sinal vermelho, na frente da floricultura fechada, ele para. Não fala nada um tempo. Depois, sem virar a cabeça, fala alto o suficiente para ela ouvir por cima do motor.", proxima: "c6_07" },
    c6_07: { quem: "ryuji", texto: "O Kaito é meu amigo desde o primário. Eu não vou falar mal dele. Nunca.", proxima: "c6_08" },
    c6_08: { quem: "ryuji", texto: "Mas se ele não perceber o que está na frente dele, ele é muito, muito burro. Mais burro que eu. E eu sou bem burro.", proxima: "c6_09" },
    c6_09: { tipo: "narracao", texto: "O sinal abre. Ele arranca. E não fala mais nada até a frente do prédio dela.", proxima: "c6_10" },
    c6_10: { tipo: "narracao", cenario: "frente-casa-sn-tarde", sprite: "ryuji", transicao: "tempo", texto: "Na frente do prédio, ela desce, tira o capacete amarelo, devolve. Ele fica sentado na moto, com o capacete no colo, olhando para os três degraus de granito do hall, com a fita preta nova.", proxima: "c6_11" },
    c6_11: { quem: "ryuji", texto: "Fita antiderrapante. Boa. Bombeiro aprova.", proxima: "c6_12" },
    c6_12: { tipo: "pensamento", texto: "Foi o Kaito que trouxe. Ele não sabe. Eu não vou falar.", proxima: "c6_13" },
    c6_13: { tipo: "narracao", texto: "O celular dela vibra no bolso. Ela não olha. Ela sabe de quem é. Ela vai olhar depois, sozinha, no quarto, com raiva, e vai ler umas dez vezes.", proxima: "r_cam" },

    /* =================== ROTA — QUINTA À NOITE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { roupa: "fora", tipo: "narracao", cenario: "frente-casa-sn-noite", transicao: "tempo", legenda: "Quinta, 21h", sprite: "kaito", texto: "Às nove da noite, o interfone toca. Ela atende. Do outro lado, uma respiração, e depois a voz dele, baixa, meio sem jeito.", proxima: "rk_02" },
    rk_02: { quem: "kaito", texto: "Sou eu. Desce um minuto? Só um minuto.", proxima: "rk_03" },
    rk_03: { tipo: "narracao", texto: "Ela desce, de moletom, devagar, pisando bem na fita preta. Ele está no pé dos três degraus, no lugar de sempre, sem capacete, sem pão de queijo, com as mãos nos bolsos da jaqueta e uma cara de quem pensou muito antes de vir.", proxima: "rk_04" },
    rk_04: { quem: "kaito", texto: "Você está brava comigo.", proxima: "rk_05" },
    rk_05: { quem: "eu", texto: "Não estou.", proxima: "rk_06" },
    rk_06: { quem: "kaito", texto: "Você não respondeu direito as minhas mensagens, e você sempre responde. Você estava esquisita no portão hoje de manhã. Você está brava.", proxima: "rk_07" },
    rk_07: { quem: "kaito", texto: "A Serena foi na lojinha. Eu não chamei. Ela apareceu. O tio deu caldo pra ela porque o tio dá caldo pra todo mundo. Eu fiquei esperando você chegar. Você não chegou.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. “Ela gosta de você, Kaito. Desde o primeiro ano. Todo mundo sabe. Menos você.”", proxima: "rk_a1", pontos: { kaito: 2 }, flags: ["Contou_Serena_gosta"] },
      { texto: "B. “E se eu estiver brava? Muda alguma coisa?”", proxima: "rk_b1", pontos: { kaito: 3 }, flags: ["Muda_alguma_coisa"] },
      { texto: "C. “Você ficou me esperando?”", proxima: "rk_c1", pontos: { kaito: 3 }, flags: ["Ficou_esperando_Kaito"] }
    ]},
    rk_a1: { quem: "eu", texto: "Ela gosta de você, Kaito. Desde o primeiro ano. Todo mundo sabe. Menos você.", proxima: "rk_a2" },
    rk_a2: { tipo: "narracao", texto: "O Kaito fica parado. Pisca. Muito tempo. Ela vê a informação entrar na cabeça dele devagar, como água num terreno seco.", proxima: "rk_a3" },
    rk_a3: { quem: "kaito", texto: "...O bolo de cenoura.", proxima: "rk_a4" },
    rk_a4: { quem: "eu", texto: "O bolo de cenoura.", proxima: "rk_a5" },
    rk_a5: { quem: "kaito", texto: "E você ficou brava porque... ela gosta de mim.", proxima: "rk_a6" },
    rk_a6: { tipo: "narracao", texto: "Não é pergunta. Ele fala devagar, chegando na conclusão sozinho, olhando para ela. E alguma coisa muda no rosto dele. Ela não espera ele terminar de entender. Ela sobe os três degraus correndo, pisando na fita preta, e fecha a porta do hall.", proxima: "r_fim" },
    rk_b1: { quem: "eu", texto: "E se eu estiver brava? Muda alguma coisa?", proxima: "rk_b2" },
    rk_b2: { tipo: "narracao", texto: "Ele olha para ela. Tira as mãos dos bolsos. Dá um passo, um degrau, e fica no primeiro degrau, de baixo, com o rosto quase na altura do dela, que está no segundo.", proxima: "rk_b3" },
    rk_b3: { quem: "kaito", texto: "Muda tudo.", proxima: "rk_b4" },
    rk_b4: { tipo: "narracao", texto: "Os dois ficam ali. No mesmo lugar do hall. Ela no degrau de cima, ele no de baixo, perto. Ela pensa no segundo. Ele pensa no segundo. Dá para ver que os dois pensam no mesmo segundo.", proxima: "rk_b5" },
    rk_b5: { tipo: "narracao", texto: "E aí a luz da escada apaga sozinha, no tempo dela. Os dois ficam no escuro. Ele ri, baixo, pelo nariz, e sobe o braço para apertar o interruptor, e a luz volta, e o momento passa.", proxima: "rk_b6" },
    rk_b6: { quem: "kaito", texto: "...Amanhã. Sete horas. Não fica brava até lá.", proxima: "r_fim" },
    rk_c1: { quem: "eu", texto: "Você ficou me esperando?", proxima: "rk_c2" },
    rk_c2: { quem: "kaito", texto: "Eu cortei cebolinha pra dois. A tarde inteira. O tio perguntou se eu estava abrindo outra lojinha.", proxima: "rk_c3" },
    rk_c3: { tipo: "narracao", texto: "Ela olha para ele. A raiva inteira do dia escorre de uma vez, como a água da bacia, pra jusante, para longe. Sobra só uma coisa quente no peito.", proxima: "rk_c4" },
    rk_c4: { quem: "eu", texto: "Pra dois. Não pra três.", proxima: "rk_c5" },
    rk_c5: { quem: "kaito", texto: "Pra dois.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quinta, 21h", sprite: null, texto: "Às nove da noite, chega uma mensagem do Takeo, com uma foto. É a mesa do canto da biblioteca, vazia, com o atlas verde fechado, o livro azul do Ren e o papelzinho “ocupada pelo plantão”.", proxima: "rt_02" },
    rt_02: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Eu guardei os atlas. Deixei o livro azul na mesa. Eu não quis tocar nele.", proxima: "rt_03" },
    rt_03: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Eu sei que eu falei aquilo do jeito que ele olha pra você. Eu não retiro. Mas eu fiquei com vergonha a tarde inteira. Desculpa se pareceu ciúme. Não era ciúme. Era... era um pouco ciúme. Mas era mais medo.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. Responder: “Não precisa pedir desculpa. Você tem razão.”", proxima: "rt_a1", pontos: { takeo: 3 }, flags: ["Razao_Takeo"] },
      { texto: "B. Responder: “Um pouco ciúme?”", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["Pouco_ciume"] },
      { texto: "C. Ligar pra ele, em vez de escrever.", proxima: "rt_c1", pontos: { takeo: 3 }, flags: ["Ligou_Takeo"] }
    ]},
    rt_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Não precisa pedir desculpa. Você tem razão.", proxima: "rt_a2" },
    rt_a2: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Então amanhã eu sento perto da porta. Do lado dele. Eu não sei brigar, mas eu sei ficar no meio do caminho. Eu sou bom em ficar no meio do caminho. Pergunta pra qualquer um.", proxima: "r_fim" },
    rt_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Um pouco ciúme?", proxima: "rt_b2" },
    rt_b2: { tipo: "narracao", texto: "Digitando. Para. Digitando. Para. Digitando muito tempo.", proxima: "rt_b3" },
    rt_b3: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Eu vou dormir. Boa noite. A minha avó mandou um beijo. Não, ela não mandou. Eu que mandei. Boa noite.", proxima: "r_fim" },
    rt_c1: { tipo: "narracao", texto: "Ela liga. Ele atende no primeiro toque, sem fôlego, como quem estava segurando o celular.", proxima: "rt_c2" },
    rt_c2: { quem: "takeo", sprite: "takeo:machucado", texto: "...Alô? Aconteceu alguma coisa? Você está bem?", proxima: "rt_c3" },
    rt_c3: { quem: "eu", texto: "Estou. Eu só queria ouvir a sua voz falando que é um pouco ciúme.", proxima: "rt_c4" },
    rt_c4: { tipo: "narracao", texto: "Silêncio do outro lado. Um silêncio longo, com a respiração dele, e o barulho da avó lavando louça lá no fundo.", proxima: "rt_c5" },
    rt_c5: { quem: "takeo", sprite: "takeo:machucado", texto: "...É um pouco ciúme. Pronto. Falei. Agora eu vou desligar e morrer embaixo do caquizeiro.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quinta, 21h", sprite: null, texto: "Às nove da noite, chega uma mensagem do Blake. Uma foto. Um lápis de marcenaria, igual ao que ele deu para ela, só que inteiro, com uma etiqueta colada à mão: “À prova de SN”.", proxima: "rb_02" },
    rb_02: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Comprei mais cinco. Pra quando você precisar.", proxima: "rb_03" },
    rb_03: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Hoje no muro. Você ficou com raiva por causa do Kaito.", proxima: "rb_04" },
    rb_04: { tipo: "narracao", texto: "Não é pergunta. Ele não colocou ponto de interrogação. O Blake nunca coloca ponto de interrogação no que ele já sabe.", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. Responder: “Fiquei.”", proxima: "rb_a1", pontos: { blake: 2 }, flags: ["Fiquei_Blake"] },
      { texto: "B. Responder: “E você ficou com raiva de alguma coisa hoje?”", proxima: "rb_b1", pontos: { blake: 3 }, flags: ["Raiva_Blake"] },
      { texto: "C. Responder: “Obrigada pelo lápis.”", proxima: "rb_c1", pontos: { blake: 3 }, flags: ["Obrigada_lapis"] }
    ]},
    rb_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Fiquei.", proxima: "rb_a2" },
    rb_a2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Tá.", proxima: "rb_a3" },
    rb_a3: { tipo: "narracao", texto: "Só isso. Mas, um minuto depois, chega outra mensagem, que demorou muito para ser escrita, ela sabe, porque ficou “digitando” o minuto inteiro.", proxima: "rb_a4" },
    rb_a4: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Amanhã o banco é seu. Eu chego cedo e guardo.", proxima: "r_fim" },
    rb_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "E você ficou com raiva de alguma coisa hoje?", proxima: "rb_b2" },
    rb_b2: { tipo: "narracao", texto: "Visualizado. Digitando. Para. Digitando. Para. Ela fica esperando cinco minutos inteiros.", proxima: "rb_b3" },
    rb_b3: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Fiquei. Mas não do Kaito.", proxima: "rb_b4" },
    rb_b4: { tipo: "pensamento", texto: "Não do Kaito. Então de quem? Ou de quê? O Blake fala pouco, e quando fala, deixa a gente pensando até dormir.", proxima: "r_fim" },
    rb_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Obrigada pelo lápis.", proxima: "rb_c2" },
    rb_c2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu tenho mais cinco.", proxima: "rb_c3" },
    rb_c3: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "E um ombro sem fazer nada. Se precisar.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quinta, 21h", sprite: null, texto: "Às nove da noite, chega uma mensagem do Ryuji. Uma foto tirada de dentro do capacete amarelo, de noite, na frente do prédio dela, com a fita preta do hall no fundo, desfocada.", proxima: "rr_02" },
    rr_02: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Eu fiquei aqui embaixo mais uns dez minutos depois que você subiu. Não sei por quê. A Relâmpago não quis ir embora.", proxima: "rr_03" },
    rr_03: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "O que eu falei no sinal. Sobre o Kaito ser burro. Eu falei sério. Mas eu também queria dizer outra coisa e não disse. Bombeiro não pode ter medo e eu fiquei com medo.", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. Responder: “Que outra coisa?”", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Outra_coisa_Ryuji"] },
      { texto: "B. Responder: “Bombeiro pode ter medo. Tem que ter. É assim que ele avalia a cena.”", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Avalia_cena"] },
      { texto: "C. Responder: “Amanhã você me fala. Sem capacete.”", proxima: "rr_c1", pontos: { ryuji: 3 }, flags: ["Amanha_sem_capacete"] }
    ]},
    rr_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Que outra coisa?", proxima: "rr_a2" },
    rr_a2: { tipo: "narracao", texto: "Digitando. Para. Digitando. Para. Muitas vezes.", proxima: "rr_a3" },
    rr_a3: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Que se ele continuar burro, eu não vou ficar esperando ele ficar esperto. Boa noite. Desculpa. Não desculpa. Boa noite.", proxima: "r_fim" },
    rr_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Bombeiro pode ter medo. Tem que ter. É assim que ele avalia a cena.", proxima: "rr_b2" },
    rr_b2: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Você decorou o cartão um.", proxima: "rr_b3" },
    rr_b3: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Então eu avaliei a cena. A cena é que eu gosto de passar a tarde com você mais do que de passar a tarde com qualquer pessoa. Pronto. Avaliado. Boa noite.", proxima: "r_fim" },
    rr_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Amanhã você me fala. Sem capacete.", proxima: "rr_c2" },
    rr_c2: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Sem capacete é mais difícil.", proxima: "rr_c3" },
    rr_c3: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu sei.", proxima: "rr_c4" },
    rr_c4: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "...Tá. Amanhã. Eu vou treinar no espelho.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quinta, 21h", sprite: null, texto: "Às nove da noite, chega uma mensagem do Victor. Um áudio. Ela aperta o play.", proxima: "rv_02" },
    rv_02: { quem: "mensagem", rotulo: "Áudio — Victor", texto: "Gatinha... SN. Boletim noturno da rede. A Serena saiu da lojinha às seis e meia. O líder levou ela até a esquina, a pé, e voltou. Só até a esquina. Eu sei porque eu estava passando com o Caramelo. Por acaso. Totalmente por acaso.", proxima: "rv_03" },
    rv_03: { quem: "mensagem", rotulo: "Áudio — Victor", texto: "E ele ficou olhando pro portão da lojinha a tarde inteira, segundo o tio. Esperando alguém. Não era a Serena.", proxima: "rv_04" },
    rv_04: { quem: "mensagem", rotulo: "Áudio — Victor", texto: "...Eu não sei por que eu estou te contando isso. Eu devia estar torcendo pelo outro lado. Boa noite. O Caramelo mandou um beijo. Ele está comendo o sofá de novo.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. Responder: “Que outro lado, Victor?”", proxima: "rv_a1", pontos: { victor: 3 }, flags: ["Outro_lado_Victor"] },
      { texto: "B. Responder com um áudio: “Obrigada por passar lá por acaso.” Rindo.", proxima: "rv_b1", pontos: { victor: 2 }, flags: ["Por_acaso_Victor"] },
      { texto: "C. Responder: “Diz pro Caramelo que eu mandei um beijo de volta. E pra você também.”", proxima: "rv_c1", pontos: { victor: 3 }, flags: ["Beijo_volta_Victor"] }
    ]},
    rv_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Que outro lado, Victor?", proxima: "rv_a2" },
    rv_a2: { tipo: "narracao", texto: "Visualizado. Gravando áudio. Para. Gravando de novo. Para. Ele desiste do áudio.", proxima: "rv_a3" },
    rv_a3: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "O meu. Boa noite. Esquece. Não esquece. Boa noite.", proxima: "r_fim" },
    rv_b1: { quem: "mensagem", rotulo: "Áudio — SN", texto: "Obrigada por passar lá por acaso, Victor. Muito por acaso.", proxima: "rv_b2" },
    rv_b2: { quem: "mensagem", rotulo: "Áudio — Victor", texto: "Foi muito por acaso. Eu só dei três voltas no quarteirão. Com o Caramelo. Ele estava precisando de exercício. Os dois estávamos.", proxima: "r_fim" },
    rv_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Diz pro Caramelo que eu mandei um beijo de volta. E pra você também.", proxima: "rv_c2" },
    rv_c2: { tipo: "narracao", texto: "Visualizado. Nada. Um minuto. Dois. Depois, uma foto: o Caramelo deitado no sofá meio comido, e, no canto da foto, sem querer, metade do rosto do Victor, completamente vermelho.", proxima: "rv_c3" },
    rv_c3: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Entregue. Os dois receberam. Um deles não está lidando bem.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quinta, 23h", sprite: null, texto: "Mais tarde, deitada no escuro, ela finalmente abre as mensagens do Kaito que ela não leu de tarde. Estão lá, embaixo do “cadê você”.", proxima: "f_02" },
    f_02: { quem: "mensagem", rotulo: "Mensagem — Kaito (17h40)", texto: "Tô na lojinha. Cortei cebolinha.", proxima: "f_03" },
    f_03: { quem: "mensagem", rotulo: "Mensagem — Kaito (18h15)", texto: "Você vem?", proxima: "f_04" },
    f_04: { tipo: "narracao", texto: "Duas mensagens. Simples. Sem nada. Ela fica olhando para elas no escuro, com o rosto iluminado pela tela.", proxima: "f_05" },
    f_05: { tipo: "pensamento", texto: "Eu quero falar do hall. Eu quero falar daquele segundo. Eu quero dizer que eu não esqueci, que eu não quero esquecer, que eu queria mais uns segundos. Muitos.", proxima: "f_06" },
    f_06: { tipo: "pensamento", texto: "Mas eu não posso. Ele desviou pra fita preta. E agora tem uma menina que acorda às cinco da manhã pra fazer yakisoba sem cenoura pra ele. Três vezes.", proxima: "f_07" },
    f_07: { tipo: "pensamento", texto: "E eu tenho um trabalho de bacia hidrográfica pra entregar amanhã, um mapa que o Ryuji desenhou, um livro azul que o Ren deixou na mesa, e o Takeo olhando pra porta de cinco em cinco minutos.", proxima: "f_08" },
    f_08: { tipo: "pensamento", texto: "Amanhã. Sete horas. No hall. Eu falo. Eu juro que eu falo.", proxima: "f_09" },
    f_09: { tipo: "pensamento", texto: "...Provavelmente eu vou falar do pão de queijo de novo.", proxima: "ep_fim" },

    // Fim do Capítulo 36 (crie a entrada "capitulo36" em dados/capitulos.js).
    ep_fim: { fim: "capitulo36" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 37 (anotações do roteiro)
 *  • SERENA avançando: bom dia no portão (o Kaito respondeu pelo nome por causa da SN), yakisoba sem cenoura
 *    (acordou às cinco, fez três vezes) que o Kaito comeu no banco, e seguiu ele até a lojinha. Comeu caldo
 *    no balcão. O Kaito levou ela até a esquina (Victor viu) e ficou esperando a SN a tarde inteira.
 *  • SN com ciúme e raiva do Kaito, sabendo que não faz sentido. Quer falar do "beijo" (quer mais), não consegue.
 *    Desvia pro pão de queijo. O lápis partido ao meio.
 *  • O trabalho de bacia hidrográfica (dez páginas, com a Mio) para sexta, primeira aula.
 *  • O REN se aproximou: deixou um livro azul marcado na página 112 (o mapa certo). "Você está cansada."
 *    O Takeo: "Eu não gosto do jeito que ele olha pra você." Sem xadrez, sem mensagem.
 *  • RYUJI: passou a tarde inteira com ela. Explicou bacia por causa de enchente e resgate (cartões 17 a 23).
 *    Desenhou o mapa. Levou ela em casa pela volta grande. No sinal: "Se ele não perceber o que está na frente
 *    dele, ele é muito burro." Rota Ryuji: mensagem à noite.
 *  • BLAKE: perdeu o banco pra Serena; deu um lápis de marcenaria pra SN; "Tem coisa que a gente acha que é
 *    da gente porque está acostumado."
 *  • VICTOR: oferta vitalícia da história do Caramelo comendo o sofá.
 *  • A lojinha: 25 dias.
 *  • SEGREDOS: o Ren matou o Takeo na primeira linha do tempo · a infância (a SN tinha uns 5 anos) · a tia.
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 No portão · 2 No muro do bebedouro (Blake) · 3 O livro do Ren · 4 A mensagem do Kaito (com o Ryuji)
 *  5 A carona (Ryuji) · Rota (1 por rota)
 *
 * FLAGS NOVAS
 *  Voz_falsa · Entrou_sem_esperar · Roubou_pao · Lapis_marcenaria · Falar_banco · Ombro_Blake
 *  Devolveu_livro · Ficou_livro · Ouvindo_Ren · Ignorou_Kaito · Seco_Kaito · Desabafou_Ryuji
 *  Volta_grande · Capacete_amarelo · Salvou_hoje · Contou_Serena_gosta · Muda_alguma_coisa
 *  Ficou_esperando_Kaito · Razao_Takeo · Pouco_ciume · Ligou_Takeo · Fiquei_Blake · Raiva_Blake
 *  Obrigada_lapis · Outra_coisa_Ryuji · Avalia_cena · Amanha_sem_capacete · Outro_lado_Victor
 *  Por_acaso_Victor · Beijo_volta_Victor
 */