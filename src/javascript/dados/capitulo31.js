/*
 * =====================================================================
 *  CAPÍTULO 31 — Seja homem
 *  Quinta e sexta-feira, logo depois do Capítulo 30.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Bloco de rota pequeno na quinta (a chegada do Takeo) e bloco grande na sexta.
 *
 *  O QUE ACONTECE
 *    • Quinta, depois do tabuleiro: o Takeo chega atrasado. Faixa na cabeça, braço quebrado na
 *      tipoia, mancando. Apanhou ontem à noite. Estava escuro. Era a Midorata: ele viu o verde das motos.
 *      Na escola ele diz que "caiu da escada". Gangue não entra na escola.
 *    • A SN se sente culpada por tudo. Victor, Ryuji, Blake, Kaito. E agora o Takeo.
 *      Sem nhenhenhém: a culpa vira decisão.
 *    • O Takeo lembra de uma coisa: um deles falou "volta pro fliperama". A SN acha o fliperama
 *      fechado atrás do mercado, cheio de moto verde. É o esconderijo da Midorata.
 *    • Quinta à noite, sozinha, sem ninguém saber: ela entra. Os caras da Midorata intimidam,
 *      cercam, mexem com ela (assédio leve: o rabo de cavalo, o braço no ombro, "baixinha").
 *      Ela só quer saber onde está o Ren.
 *    • O Ren aparece. Uma palavra: "Fora." Todo mundo vaza. Para o que mexeu no cabelo dela: "Você fica."
 *    • A conversa. Ela exige: para de derrubar os outros. "Se tem alguma coisa pra falar ou resolver,
 *      seja homem e fala direto comigo."
 *    • Sexta: as coisas começam a voltar (Victor, Ryuji, Blake). A gangue acha que foi o plano.
 *      A SN não conta. A lojinha do tio continua com o aviso.
 *    • Gancho: o cara que mexeu no cabelo dela aparece na rua com a mão enfaixada e atravessa
 *      a rua para não passar perto dela. Ela não fez nada com ele.
 *
 *  SEGREDOS (NÃO REVELAR)
 *    • Na primeira linha do tempo, quem matou o Takeo foi o Ren. A SN não sabe.
 *    • O Ren é obcecado por ela. Faz qualquer coisa para ela não ficar com ninguém, mas não
 *      consegue chegar nela. Ele quase não fala. Ele não diz o motivo.
 *    • A praça do balanço e a infância continuam escondidas.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Mio, Hana, Reina, Sayuri, Takeo, Kaito, Blake, Ryuji, Victor, Ren, Mãe (mensagem), Avó do Takeo.
 *    Sem nome / rótulo: Cara da Midorata (jaqueta verde), Cara do cabelo raspado, Cara do boné verde.
 *
 *  CENÁRIOS
 *    Escola: sala-de-aula, corredor, patio-fundos, saida-colegio · Quarto da SN → "quarto-sn"
 *    Fliperama fechado / rua do mercado / lojinha → "beco-mercado" · Casa do Takeo → "apartamento"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Rota_*, Poltrona_quarto_SN, Contou_Sakuma_gangue, Ninguem_bate, Peao_no_tabuleiro, Culpa_SN_Kaito.
 *
 *  Crie a entrada "capitulo31" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo31", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — CAIU DA ESCADA =================== */
    // Cenário: sala de aula, quinta, primeira aula. Logo depois do tabuleiro do Ren.
    c1_01: { roupa: "escolar", tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Quinta, 7h50 — Cena 1", sprite: null, texto: "Primeira aula. Matemática. O Ren já está com o livro aberto e o café pela metade, como se o tabuleiro nunca tivesse existido. A cadeira do lado da janela está vazia. A do Takeo.", proxima: "c1_02" },
    c1_02: { tipo: "pensamento", texto: "O Takeo nunca atrasa. Ele chega antes do porteiro. Ele diz que gosta de ver a escola vazia porque ela parece outra escola.", proxima: "c1_03" },
    c1_03: { tipo: "narracao", texto: "Oito e dez. Alguém bate na porta. A professora abre.", proxima: "c1_04" },
    c1_04: { tipo: "narracao", efeito: "tremor", sprite: "takeo", texto: "É o Takeo. Uma faixa branca em volta da cabeça, com uma mancha amarelada de remédio na testa. O braço esquerdo engessado, numa tipoia azul. Ele está mancando. Cada passo da porta até a carteira é uma conta que ele faz de cabeça.", proxima: "c1_05" },
    c1_05: { tipo: "narracao", texto: "A sala inteira para. Até o Ren levanta os olhos do livro. Um segundo. Depois volta para a página.", proxima: "c1_06" },
    c1_06: { quem: "desconhecido", rotulo: "Professora", texto: "Takeo! Meu Deus. O que aconteceu?", proxima: "c1_07" },
    c1_07: { quem: "takeo", texto: "Caí da escada. Lá de casa. Desculpa o atraso. Tive que passar no posto pra trocar o curativo.", proxima: "c1_08" },
    c1_08: { tipo: "narracao", texto: "Ele sorri. O sorriso dele de sempre, meio sem graça. Só que o lábio está cortado no canto, e o sorriso para no meio.", proxima: "c1_09" },
    c1_09: { tipo: "pensamento", texto: "A casa do Takeo é térrea. Eu já fui lá. Tem um degrau só. O da porta da cozinha.", proxima: "c1_10" },
    c1_10: { tipo: "narracao", texto: "Ele senta. Demora para achar um jeito de colocar o braço. O olhar dele cruza com o dela do outro lado da sala. Ele faz um sinal pequeno com a cabeça: depois.", proxima: "c1_11" },
    c1_11: { tipo: "narracao", texto: "A aula continua. A SN não escuta uma palavra. Ela conta as vezes que o Takeo faz careta quando mexe o braço. Onze. Em uma aula só.", proxima: "c1_12" },

    // Intervalo
    c1_12: { roupa: "escolar", tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Intervalo", sprite: "takeo", texto: "No intervalo, o pátio dos fundos, atrás do bebedouro quebrado. Ela leva o Takeo pelo braço bom. Ele vai mancando e reclamando que consegue andar sozinho.", proxima: "c1_13" },
    c1_13: { quem: "eu", texto: "Escada.", proxima: "c1_14" },
    c1_14: { quem: "takeo", texto: "...Tá. Não foi escada.", proxima: "c1_15" },
    c1_15: { quem: "takeo", texto: "Ontem à noite. Eu estava voltando. Uns caras saíram do escuro do lado do terreno baldio. Quatro. Ou cinco. Não falaram nada. Nem pediram celular. Nem dinheiro. Só bateram.", proxima: "c1_cam1" },
    c1_cam1: { caminhos: [
      { flag: "Rota_Takeo", proxima: "c1_rt" },
      { flag: "Rota_Kaito", proxima: "c1_rk" },
      { flag: "Rota_Blake", proxima: "c1_rb" },
      { flag: "Rota_Ryuji", proxima: "c1_rr" },
      { flag: "Rota_Victor", proxima: "c1_rv" }
    ], proxima: "c1_rk" },
    // Na Rota Takeo, ele estava voltando depois de deixar a SN no prédio (Cap. 30).
    c1_rt: { quem: "takeo", texto: "Foi depois de te deixar no prédio. Eu estava feliz. Eu estava andando pensando na mesa da biblioteca. Na que tem tomada.", proxima: "c1_rt2" },
    c1_rt2: { tipo: "pensamento", texto: "Ele estava voltando de mim. Ele me levou até a porta, segurou a minha mão em cima da pasta, e voltou sozinho. No escuro.", proxima: "c1_16" },
    c1_rk: { quem: "takeo", texto: "Eu estava voltando da lojinha. Da reunião. A pé. O Kaito ofereceu carona e eu disse que não precisava.", proxima: "c1_16" },
    c1_rb: { quem: "takeo", texto: "Eu estava voltando da lojinha. Da reunião. O Blake saiu na frente com uma poltrona amarrada na moto e eu fui a pé.", proxima: "c1_16" },
    c1_rr: { quem: "takeo", texto: "Eu estava voltando da lojinha. Da reunião. O Ryuji ia comigo, mas ficou na calçada, olhando o lugar da moto. Eu fui na frente.", proxima: "c1_16" },
    c1_rv: { quem: "takeo", texto: "Eu estava voltando da lojinha. Da reunião. O Victor ficou sentado no meio-fio e eu não quis atrapalhar. Fui na frente.", proxima: "c1_16" },
    c1_16: { quem: "takeo", texto: "Estava escuro. Eu não vi rosto. Mas eu vi as motos depois, indo embora. Verdes. Todas verdes.", proxima: "c1_17" },
    c1_17: { quem: "eu", texto: "Midorata.", proxima: "c1_18" },
    c1_18: { quem: "takeo", texto: "Eu sou da gangue do Kaito faz dois anos e nunca ninguém encostou em mim. Nem na fábrica. Eu sempre fico atrás. Eu sou o que segura os casacos.", proxima: "c1_19" },
    c1_19: { quem: "takeo", texto: "Eu sumi essas semanas. Por causa da minha avó. Por causa de... sei lá. E aí, no primeiro dia que eu volto pra uma reunião, isso.", proxima: "c1_20" },
    c1_20: { tipo: "narracao", texto: "Ele tenta rir. Não consegue. Ele encosta a cabeça enfaixada no muro.", proxima: "c1_21" },
    c1_21: { quem: "takeo", texto: "Não conta pro Kaito ainda. Ele já está com a lojinha. Eu conto. Hoje. Fora daqui.", proxima: "c1_22" },
    c1_22: { tipo: "narracao", texto: "Ela faz que sim. Coisa de gangue fica fora da escola. Ela não é de fofoquinha. Mas a mão dela está fechada tão forte que as unhas marcam a palma.", proxima: "c1_23" },
    c1_23: { quem: "takeo", texto: "Ah. Uma coisa. Eu estava no chão. Um deles falou pro outro: “Bora, volta pro fliperama antes que alguém passe.” Fliperama. Eu fiquei repetindo isso no posto pra não esquecer.", proxima: "c1_24" },
    c1_24: { tipo: "pensamento", texto: "Fliperama.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — Com o Takeo, no pátio
    c1_esc1: { escolhas: [
      { texto: "A. Arrumar a faixa da cabeça dele, que está torta. Com cuidado. Sem falar nada.", proxima: "c1_1a_1", pontos: { takeo: 2 }, flags: ["Faixa_Takeo"] },
      { texto: "B. “Você não é o que segura os casacos. Você é o que volta. Isso é mais difícil.”", proxima: "c1_1b_1", pontos: { takeo: 2 }, flags: ["Volta_Takeo"] },
      { texto: "C. “Quem fez isso vai se arrepender.” Baixo. Firme. Sem sorrir.", proxima: "c1_1c_1", pontos: { takeo: 1, desvio: 1 }, flags: ["Promessa_Takeo"] }
    ]},
    c1_1a_1: { tipo: "narracao", texto: "Ela desenrola um pedaço da faixa e enrola de novo, mais reta. Os dedos encostam no cabelo dele. Ele fica parado. Respira devagar, como se respirar rápido fosse estragar.", proxima: "c1_1a_2" },
    c1_1a_2: { quem: "takeo", texto: "A minha avó fez isso hoje de manhã. Ela chorou enquanto fazia. Você fez melhor.", proxima: "c1_1a_3" },
    c1_1a_3: { quem: "eu", texto: "Porque eu não chorei.", proxima: "c1_1a_4" },
    c1_1a_4: { quem: "takeo", texto: "...Você está com cara de quem vai chorar depois.", proxima: "c1_25" },
    c1_1b_1: { tipo: "narracao", texto: "O Takeo vira a cabeça devagar para olhar para ela. A faixa escorrega um pouco.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "takeo", texto: "Você fala umas coisas como se tivesse vivido muito mais que eu.", proxima: "c1_1b_3" },
    c1_1b_3: { tipo: "pensamento", texto: "Doze anos a mais. Eu vivi doze anos a mais. E em todos eles você não estava.", proxima: "c1_25" },
    c1_1c_1: { tipo: "narracao", texto: "O Takeo olha para ela. Ele conhece essa voz. Ele ouviu essa voz uma vez só: no dia da viga.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "takeo", texto: "Não faz nada idiota. Promete.", proxima: "c1_1c_3" },
    c1_1c_3: { quem: "eu", texto: "Eu não faço coisa idiota. Eu faço coisa eficiente.", proxima: "c1_1c_4" },
    c1_1c_4: { quem: "takeo", texto: "Isso é pior.", proxima: "c1_25" },

    // (todas as opções continuam aqui)
    c1_25: { tipo: "narracao", texto: "O sinal toca. Ele levanta com o braço bom. Ela segura a mochila dele. Ele deixa.", proxima: "c2_01" },

    /* =================== CENA 2 — A CULPA =================== */
    // Cenário: refeitório e depois banheiro feminino (usa "corredor"). Música: um piano só.
    c2_01: { roupa: "escolar", tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Almoço — Cena 2", sprite: "mio", texto: "No almoço, a mesa das cinco. A Mio, a Hana, a Reina, a Akane. A Reina não come. Ela está olhando para o Takeo do outro lado do refeitório. Ele está tentando abrir o pote de arroz com uma mão só.", proxima: "c2_02" },
    c2_02: { quem: "reina", sprite: "reina", texto: "Escada. Ele disse escada. A casa dele é térrea.", proxima: "c2_03" },
    c2_03: { quem: "mio", sprite: "mio", texto: "Reina...", proxima: "c2_04" },
    c2_04: { quem: "reina", sprite: "reina", texto: "Eu sei. Eu não vou perguntar. Ele não quer que pergunte. Eu só vou lá abrir o pote.", proxima: "c2_05" },
    c2_05: { tipo: "narracao", texto: "Ela levanta. Atravessa o refeitório com o queixo alto. Abre o pote do Takeo sem dizer nada. Volta. Senta. Os olhos dela estão vermelhos.", proxima: "c2_06" },
    c2_06: { quem: "akane", texto: "Briga limpa não tem regra pra isso, né.", proxima: "c2_07" },
    c2_07: { quem: "reina", sprite: "reina", texto: "Não. Isso é só gostar de alguém que apanhou.", proxima: "c2_08" },
    c2_08: { tipo: "narracao", sprite: "hana", texto: "A Hana está com o caderno de gatinho aberto no colo, embaixo da mesa. A SN vê. A tabela de ontem. Ela escreveu mais uma linha, em letra pequena: “Takeo — quarta à noite.” E um ponto de interrogação.", proxima: "c2_09" },
    c2_09: { tipo: "narracao", texto: "A SN levanta. Diz que vai no banheiro.", proxima: "c2_10" },
    c2_10: { tipo: "narracao", cenario: "banheiro", transicao: "tempo", sprite: null, texto: "O banheiro do segundo andar. O que ninguém usa porque a descarga faz barulho de avião. Ela tranca a porta da cabine. Senta na tampa fechada.", proxima: "c2_11" },
    c2_11: { tipo: "pensamento", texto: "O Victor. Demitido no meio do turno. A mãe dele vai voltar pra três empregos.", proxima: "c2_12" },
    c2_12: { tipo: "pensamento", texto: "O Ryuji. Dois anos de panfleto no sinal. A moto amarela que ele chama de dourada pra não ficar triste.", proxima: "c2_13" },
    c2_13: { tipo: "pensamento", texto: "O Blake. Uma livraria que ainda nem existia. Só uma poltrona.", proxima: "c2_14" },
    c2_14: { tipo: "pensamento", texto: "O Kaito. O tio sentado na cozinha a noite inteira olhando a panela.", proxima: "c2_15" },
    c2_15: { tipo: "pensamento", texto: "E o Takeo. Com o braço quebrado. O Takeo, que eu voltei doze anos pra salvar.", proxima: "c2_16" },
    c2_16: { tipo: "narracao", efeito: "eco", texto: "“Você anda com gente que fica de costas.”", proxima: "c2_17" },
    c2_17: { tipo: "pensamento", texto: "Na primeira vez, eu não estava no meio de nada disso. Agora eu estou no meio de tudo. Lan. Moto. Último andar.", proxima: "c2_18" },
    c2_18: { tipo: "pensamento", texto: "Eu mexi em tudo. Eu entrei na frente de uma barra de ferro. Eu fui atrás da Sayuri. Eu devolvi o peão. Eu fiquei rindo na frente de um tabuleiro hoje de manhã como se fosse um jogo.", proxima: "c2_19" },
    c2_19: { tipo: "pensamento", texto: "É culpa minha. Tudo. Cada um deles.", proxima: "c2_20" },
    c2_20: { tipo: "narracao", texto: "Ela fica ali um tempo. O barulho de avião da descarga da cabine do lado. Alguém rindo no corredor. O sinal tocando longe.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — O que fazer com a culpa
    c2_esc2: { escolhas: [
      { texto: "A. Chorar. Uma vez. Sem barulho. E depois lavar o rosto.", proxima: "c2_2a_1", pontos: {}, flags: ["Chorou_banheiro"] },
      { texto: "B. Dar um soco na parede da cabine. Devagar. Só o suficiente pra rachar o azulejo.", proxima: "c2_2b_1", pontos: { desvio: 1 }, flags: ["Azulejo_rachado"] },
      { texto: "C. Ficar de pé. “Culpa não conserta braço.” E sair.", proxima: "c2_2c_1", pontos: {}, flags: ["Culpa_nao_conserta"] }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "Ela chora. Uma vez. Com a mão na boca. Dura menos de um minuto. Depois ela sai da cabine, abre a torneira, joga água no rosto três vezes.", proxima: "c2_2a_2" },
    c2_2a_2: { tipo: "pensamento", texto: "Pronto. Isso foi pra mim. O resto é pra eles.", proxima: "c2_21" },
    c2_2b_1: { tipo: "narracao", efeito: "tremor", texto: "O punho encosta na parede da cabine. Devagar. Quase carinho. O azulejo racha em estrela, de um canto ao outro. Um pedacinho cai no chão. Faz um barulhinho de nada.", proxima: "c2_2b_2" },
    c2_2b_2: { tipo: "pensamento", texto: "Força eu tenho. Muita. E ela não serviu pra nada essa semana. Ninguém bateu em ninguém. Não tinha onde colocar.", proxima: "c2_2b_3" },
    c2_2b_3: { tipo: "pensamento", texto: "Agora tem.", proxima: "c2_21" },
    c2_2c_1: { tipo: "narracao", texto: "Ela levanta. Destranca a porta. Se olha no espelho manchado. O rabo de cavalo torto. A cara de quem dormiu pouco.", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "eu", texto: "Culpa não conserta braço.", proxima: "c2_2c_3" },
    c2_2c_3: { tipo: "narracao", texto: "Ela fala isso para o espelho como quem dá ordem pra alguém do time. Arruma o rabo de cavalo. Sai.", proxima: "c2_21" },

    // (todas as opções continuam aqui)
    c2_21: { tipo: "pensamento", texto: "Ele quer falar comigo. Ele só fala com peça de xadrez, com bilhete, com carro preto, com homem de terno. Ele derruba todo mundo em volta de mim e não chega nem perto.", proxima: "c2_22" },
    c2_22: { tipo: "pensamento", texto: "Então eu vou até ele. Hoje. Sozinha. Sem ninguém saber. Sem a Hana com cronômetro. Sem ninguém esperando do lado de fora.", proxima: "c2_23" },
    c2_23: { tipo: "pensamento", texto: "Fliperama.", proxima: "c3_01" },

    /* =================== CENA 3 — O FLIPERAMA =================== */
    // Cenário: rua atrás do mercado, quinta depois da aula (usa "beco-mercado"). Música: baixo seco.
    c3_01: { roupa: "escolar", tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Quinta, saída — Cena 3", sprite: "mio", texto: "Na saída, a Mio pega o braço dela.", proxima: "c3_02" },
    c3_02: { quem: "mio", texto: "Vamos lá em casa? A minha mãe fez bolo de fubá. Você está com cara de quem precisa de bolo de fubá.", proxima: "c3_03" },
    c3_03: { quem: "eu", texto: "Hoje não dá. Tenho que ajudar a minha mãe com uma coisa.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", texto: "A Mio olha para ela. A Mio conhece todas as caras dela. Essa ela não conhece. Ela solta o braço.", proxima: "c3_05" },
    c3_05: { quem: "mio", texto: "Tá. Mas se a sua mãe precisar de bolo de fubá, você me liga.", proxima: "c3_06" },
    c3_06: { tipo: "pensamento", texto: "Desculpa, Mio. É a primeira vez que eu minto pra você nessa vida. Na outra eu menti muito mais.", proxima: "c3_07" },
    c3_07: { roupa: null, tipo: "narracao", cenario: "beco-mercado", transicao: "tempo", sprite: null, texto: "Ela anda pelas ruas de trás do mercado. Fliperama. Tinha um ali, quando ela era pequena. Um com uma estrela no letreiro. Fechou quando ela tinha nove ou dez. Ninguém sabe por quê.", proxima: "c3_08" },
    c3_08: { tipo: "narracao", texto: "Ela acha. A fachada pintada de azul descascado. A porta de enrolar abaixada até a metade. O letreiro sem as luzes. E, na calçada, estacionadas de qualquer jeito: sete motos. Todas verdes.", proxima: "c3_09" },
    c3_09: { tipo: "pensamento", texto: "Achei vocês.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", cenario: "sala-sn-noite", transicao: "tempo", legenda: "Quinta, 20h40", texto: "Ela vai para casa. Janta. A mãe sai às nove para o plantão da noite. Dá um beijo na testa dela. Diz que tem bolinho de frango na geladeira.", proxima: "c3_11" },
    c3_11: { quem: "mensagem", rotulo: "Mensagem — Mãe", texto: "Tranca a porta. Te amo. Come o bolinho.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", cenario: "quarto-sn-noite", texto: "Ela não come o bolinho. Ela coloca uma calça escura, o tênis de correr e a jaqueta. Ela pega o boné. Olha para ele. Guarda de volta na gaveta.", proxima: "c3_13" },
    c3_13: { tipo: "pensamento", texto: "Sem boné. Sem máscara. Hoje eu vou com a minha cara. Ele já sabe quem eu sou.", proxima: "c3_14" },
    c3_14: { tipo: "narracao", texto: "O celular vibra em cima da cama.", proxima: "c3_cam_msg" },
    c3_cam_msg: { caminhos: [
      { flag: "Rota_Kaito", proxima: "c3_mk" },
      { flag: "Rota_Takeo", proxima: "c3_mt" },
      { flag: "Rota_Blake", proxima: "c3_mb" },
      { flag: "Rota_Ryuji", proxima: "c3_mr" },
      { flag: "Rota_Victor", proxima: "c3_mv" }
    ], proxima: "c3_mk" },
    c3_mk: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "O Takeo me contou. Tô indo na casa dele agora. Fica em casa hoje. Por favor.", proxima: "c3_mk2" },
    c3_mk2: { tipo: "pensamento", texto: "Ele nunca fala por favor. Ele está com medo. Por mim.", proxima: "c3_15" },
    c3_mt: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "A minha avó fez canja e disse que eu tenho que ligar pra “menina da viga” pra contar que estou vivo. Estou vivo. O braço coça. Boa noite.", proxima: "c3_mt2" },
    c3_mt2: { tipo: "pensamento", texto: "Vivo. Continua assim.", proxima: "c3_15" },
    c3_mb: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Soube do Takeo. Tranca a porta.", proxima: "c3_mb2" },
    c3_mb2: { tipo: "pensamento", texto: "Três palavras. Pro Blake, isso é um discurso.", proxima: "c3_15" },
    c3_mr: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Soube do Takeo. Eu vou dormir no sofá da casa dele hoje. A avó dele me deu um cobertor de florzinha. Se a Midorata voltar, eles vão ter que passar pela florzinha.", proxima: "c3_mr2" },
    c3_mr2: { tipo: "pensamento", texto: "Ele vai dormir lá. Bom. Ninguém encosta no Takeo hoje.", proxima: "c3_15" },
    c3_mv: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Soube do Takeo. Gatinha... SN. Não sai hoje. Eu tô falando sério. É a primeira vez que eu falo sério nesse celular.", proxima: "c3_mv2" },
    c3_mv2: { tipo: "pensamento", texto: "Ele trocou o “gatinha” pelo meu nome. O Victor está com medo.", proxima: "c3_15" },
    c3_15: { tipo: "narracao", texto: "Ela não responde. Desliga a tela. Tranca a porta de casa. Por fora.", proxima: "c3_16" },

    // O fliperama
    c3_16: { tipo: "narracao", cenario: "frente-fliperama", transicao: "tempo", legenda: "Quinta, 21h30", texto: "O fliperama. As sete motos verdes viraram nove. A porta de enrolar continua pela metade. Lá de dentro, luz colorida piscando e barulho de máquina velha. Alguém ainda liga as máquinas.", proxima: "c3_17" },
    c3_17: { tipo: "narracao", texto: "Ela abaixa e passa por baixo da porta.", proxima: "c3_18" },
    c3_18: { tipo: "narracao", cenario: "fliperama-midorata", sprite: "midorata", texto: "Dentro: máquinas de fliperama encostadas nas paredes, metade apagada, metade piscando. Uma mesa de sinuca com o pano rasgado. Latas de refrigerante. Fumaça. E uns doze caras. Jaquetas verdes. Todo mundo para.", proxima: "c3_19" },
    c3_19: { tipo: "narracao", texto: "Um silêncio. Só a música de uma máquina, tocando em loop, uma musiquinha de oito notas, alegre demais.", proxima: "c3_20" },
    c3_20: { quem: "midorata", rotulo: "Cara da jaqueta verde", texto: "Ih. Olha só. Entrou uma baixinha.", proxima: "c3_21" },
    c3_21: { tipo: "narracao", texto: "Risada. Os caras vão levantando. Devagar. Do jeito de quem tem todo o tempo do mundo. Eles vão chegando perto. Fazendo uma roda.", proxima: "c3_22" },
    c3_22: { quem: "eu", texto: "Cadê o Ren?", proxima: "c3_23" },
    c3_23: { quem: "midorata", rotulo: "Cara do cabelo raspado", texto: "Ren? Quem é Ren? Aqui não tem Ren. Aqui tem a gente.", proxima: "c3_24" },
    c3_24: { tipo: "narracao", texto: "Mais risada. Ele dá um passo para frente. Fica perto demais. Ela é baixa. Ele é alto. Ele abaixa a cabeça para olhar para ela, como quem olha pra uma criança.", proxima: "c3_25" },
    c3_25: { quem: "midorata", rotulo: "Cara do cabelo raspado", texto: "Você se perdeu, anjinho? O shopping é pro outro lado.", proxima: "c3_26" },
    c3_26: { quem: "eu", texto: "Eu não me perdi. Cadê o Ren?", proxima: "c3_27" },
    c3_27: { tipo: "narracao", texto: "O da jaqueta verde vem por trás. Pega o rabo de cavalo dela entre os dedos. Puxa de leve. Brincando. Como quem testa um brinquedo.", proxima: "c3_28" },
    c3_28: { quem: "midorata", rotulo: "Cara da jaqueta verde", texto: "Cabelo bonito. Cheiroso. Você veio arrumada pra gente?", proxima: "c3_29" },
    c3_29: { tipo: "narracao", texto: "O terceiro, de boné verde, passa o braço por cima do ombro dela. Pesado. Como se fossem amigos. Como se ela tivesse pedido.", proxima: "c3_30" },
    c3_30: { quem: "midorata", rotulo: "Cara do boné verde", texto: "Fica um pouco. Joga uma partida com a gente. Se você ganhar, a gente fala onde ele está. Se perder... a gente pensa.", proxima: "c3_31" },
    c3_31: { tipo: "narracao", texto: "Os outros riem. Assobiam. Alguém fala alguma coisa sobre a altura dela, e todos riem mais.", proxima: "c3_32" },
    c3_32: { tipo: "pensamento", texto: "Doze. Num lugar fechado. Eu derrubo doze. Mas aí a Midorata inteira sabe o que eu consigo fazer. E o Ren usa isso contra todo mundo que eu gosto. De novo.", proxima: "c3_33" },
    c3_33: { tipo: "pensamento", texto: "E esse braço no meu ombro. E essa mão no meu cabelo. Eu tenho vinte e oito anos por dentro. Eu já conheci uns caras assim. Eles não ficam maiores quando você tem medo. Eles ficam menores quando você não tem.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — O braço no ombro e a mão no cabelo
    c3_esc3: { escolhas: [
      { texto: "A. Tirar o braço do ombro e a mão do cabelo. Devagar. Sem força. Como quem tira um casaco que não é dela.", proxima: "c3_3a_1", pontos: {}, flags: ["Tirou_mao_calma"] },
      { texto: "B. Segurar o pulso do que puxou o cabelo. Só apertar. Um pouco. O suficiente pra ele soltar e ficar branco.", proxima: "c3_3b_1", pontos: { desvio: 1 }, flags: ["Apertou_pulso_Midorata"] },
      { texto: "C. Não se mexer. Olhar para o de cabelo raspado. “Se você não sabe onde ele está, você não serve pra mim.”", proxima: "c3_3c_1", pontos: { desvio: 1 }, flags: ["Nao_serve_Midorata"] }
    ]},
    c3_3a_1: { tipo: "narracao", texto: "Ela pega o braço do de boné verde pelo pulso e tira do ombro. Devagar. Coloca de volta do lado do corpo dele. Depois tira a mão do outro do cabelo dela. Dedo por dedo.", proxima: "c3_3a_2" },
    c3_3a_2: { quem: "eu", texto: "Não encosta.", proxima: "c3_3a_3" },
    c3_3a_3: { tipo: "narracao", texto: "Ela fala isso sem levantar a voz. Os dois ficam um segundo sem saber o que fazer. O de boné verde ri, sem graça. O da jaqueta não ri.", proxima: "c3_34" },
    c3_3b_1: { tipo: "narracao", efeito: "tremor", texto: "A mão dela sobe e fecha no pulso do da jaqueta verde. Ela aperta. Pouco. Muito pouco, pra ela. Os dedos dele abrem sozinhos. O cabelo dela cai de volta.", proxima: "c3_3b_2" },
    c3_3b_2: { quem: "midorata", rotulo: "Cara da jaqueta verde", texto: "Aí... aí, aí, solta, solta...", proxima: "c3_3b_3" },
    c3_3b_3: { tipo: "narracao", texto: "Ela solta. Ele recua com a mão no peito. O de boné verde tira o braço do ombro dela sozinho, rápido, como se tivesse encostado em panela quente.", proxima: "c3_34" },
    c3_3c_1: { tipo: "narracao", texto: "Ela não se mexe. Nem um músculo. O braço no ombro dela parece pesar menos de repente. Ela olha para o de cabelo raspado, lá de baixo. Sem piscar.", proxima: "c3_3c_2" },
    c3_3c_2: { quem: "eu", texto: "Se você não sabe onde ele está, você não serve pra mim. Sai da frente.", proxima: "c3_3c_3" },
    c3_3c_3: { tipo: "narracao", texto: "O de cabelo raspado abre a boca. Fecha. O sorriso dele vai murchando. Ninguém naquele fliperama nunca falou com ele assim. Ainda mais uma baixinha.", proxima: "c3_34" },

    // (todas as opções continuam aqui)
    c3_34: { quem: "midorata", rotulo: "Cara do cabelo raspado", texto: "Olha aqui, sua...", proxima: "c3_35" },
    c3_35: { tipo: "narracao", efeito: "eco", texto: "A porta de enrolar sobe. Inteira. Até em cima. O barulho de metal enche o fliperama.", proxima: "c3_36" },
    c3_36: { tipo: "narracao", sprite: "ren", texto: "Na calçada, com a luz do poste atrás, o Ren. Uniforme da escola ainda. A mochila num ombro só. As mãos nos bolsos.", proxima: "c3_37" },
    c3_37: { tipo: "narracao", texto: "Ele não entra logo. Ele fica olhando. Primeiro para ela. Depois para o braço do de boné verde. Depois para a mão do da jaqueta. Ele olha cada coisa uma vez. Como quem anota.", proxima: "c3_38" },
    c3_38: { quem: "ren", texto: "Fora.", proxima: "c3_39" },
    c3_39: { tipo: "narracao", texto: "Uma palavra. Baixa. Doze caras levantam ao mesmo tempo. Ninguém pergunta nada. Ninguém pega a lata de refrigerante. Eles saem, em fila, abaixando a cabeça quando passam por ele, do jeito que a gente abaixa a cabeça embaixo de uma porta baixa.", proxima: "c3_40" },
    c3_40: { tipo: "narracao", texto: "O da jaqueta verde é o último. Quando ele passa pelo Ren, o Ren tira uma mão do bolso. Não encosta nele. Só levanta a mão. O cara para.", proxima: "c3_41" },
    c3_41: { quem: "ren", texto: "Você fica. Lá fora.", proxima: "c3_42" },
    c3_42: { tipo: "narracao", texto: "O da jaqueta verde fica branco. Muito mais branco do que qualquer aperto de pulso deixaria. Ele sai e fica parado na calçada, do lado das motos, olhando para o chão.", proxima: "c3_43" },
    c3_43: { tipo: "narracao", texto: "O Ren abaixa a porta de enrolar até a metade de novo. Agora são só os dois. E a musiquinha de oito notas, tocando em loop.", proxima: "c4_01" },

    /* =================== CENA 4 — SEJA HOMEM =================== */
    // Cenário: dentro do fliperama (usa "beco-mercado"). Música: a musiquinha de oito notas, depois silêncio.
    c4_01: { roupa: null, tipo: "narracao", cenario: "fliperama-midorata", sprite: "ren", transicao: "tempo", legenda: "Cena 4", texto: "Ele não chega perto. Ele encosta numa máquina apagada, do outro lado da mesa de sinuca. Uns quatro metros. Sempre essa distância. No último andar também.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "Ele vai até a máquina que toca a música. Aperta um botão atrás dela. A música para. Silêncio.", proxima: "c4_03" },
    c4_03: { quem: "ren", texto: "Você entrou sozinha.", proxima: "c4_04" },
    c4_04: { quem: "eu", texto: "Você nunca vem sozinho. Alguém tinha que vir.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "Um canto da boca dele mexe. Quase nada.", proxima: "c4_06" },
    c4_06: { quem: "eu", texto: "O Victor. A doca. O Ryuji. A moto. O Blake. A livraria. O tio do Kaito. A lojinha. Tudo com o seu rei de xadrez no canto do papel.", proxima: "c4_07" },
    c4_07: { quem: "eu", texto: "E ontem o Takeo. Braço quebrado. Cabeça aberta. Mancando. Ele é o que segura os casacos, Ren. Ele nunca bateu em ninguém.", proxima: "c4_08" },
    c4_08: { tipo: "narracao", texto: "Quando ela fala o nome do Takeo, alguma coisa muda no rosto dele. Não é culpa. Não é surpresa. É mais frio. Como uma janela que alguém fecha por dentro.", proxima: "c4_09" },
    c4_09: { quem: "ren", texto: "Ele anda sozinho à noite.", proxima: "c4_10" },
    c4_10: { tipo: "narracao", texto: "Ele não diz que foi ele. Ele não diz que não foi. Ele diz isso do jeito que alguém diz que vai chover.", proxima: "c4_11" },
    c4_11: { tipo: "pensamento", texto: "Ele anda sozinho à noite. Isso não é uma desculpa. Isso é um aviso.", proxima: "c4_12" },
    c4_12: { tipo: "pensamento", texto: "Uma coisa gelada sobe pela minha nuca. Uma coisa que eu não entendo. Como se eu já tivesse ouvido essa frase. Numa vida que eu não lembro direito.", proxima: "c4_13" },
    c4_13: { tipo: "narracao", efeito: "flashback", texto: "Um flash. Da outra vida. Uma voz no telefone, contando do Takeo. “Ninguém viu quem foi. Estava escuro.”", proxima: "c4_14" },
    c4_14: { tipo: "narracao", texto: "Some. Ela pisca. O fliperama de novo. O Ren encostado na máquina, olhando para ela.", proxima: "c4_15" },
    c4_15: { tipo: "pensamento", texto: "Estava escuro. Na primeira vez também estava escuro.", proxima: "c4_16" },
    c4_16: { tipo: "pensamento", texto: "Não. Não agora. Foco.", proxima: "c4_17" },
    c4_17: { tipo: "narracao", texto: "Ela dá a volta na mesa de sinuca. Um passo. Dois. Ele não se mexe. Ela para do outro lado da mesa. Um metro e meio. Mais perto do que ele jamais deixou.", proxima: "c4_18" },
    c4_18: { quem: "eu", texto: "Para.", proxima: "c4_19" },
    c4_19: { quem: "eu", texto: "Para de derrubar os outros. Eles não têm nada a ver com isso. Seja lá o que “isso” for.", proxima: "c4_20" },
    c4_20: { quem: "eu", texto: "Você me mandou bilhete. Peão. Carro preto. Homem de terno. Menina com balde. Você usa todo mundo pra chegar perto de mim e nunca chega.", proxima: "c4_21" },
    c4_21: { quem: "eu", texto: "Se você tem alguma coisa pra falar, ou pra resolver, seja homem e fala direto comigo. Comigo. Não com o emprego do Victor. Não com o braço do Takeo.", proxima: "c4_22" },
    c4_22: { tipo: "narracao", texto: "Silêncio. O Ren olha para ela. Muito tempo. Ela não abaixa os olhos. Lá fora, uma moto verde liga e desliga.", proxima: "c4_23" },
    c4_23: { quem: "ren", texto: "Eu estou falando.", proxima: "c4_24" },
    c4_24: { quem: "eu", texto: "Não está. Você está me olhando. É diferente.", proxima: "c4_25" },
    c4_25: { tipo: "narracao", texto: "Ele não responde. Pela primeira vez, ela vê o Ren sem resposta. Os olhos dele vão para o rabo de cavalo dela. O lugar onde a mão do outro estava. E voltam para o rosto dela.", proxima: "c4_26" },
    c4_26: { quem: "eu", texto: "Quero tudo de volta. O emprego. A moto. A livraria. A lojinha. Do jeito que estava. E ninguém encosta no Takeo. Nunca mais. Nem em nenhum deles.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — Como fechar a exigência
    c4_esc4: { escolhas: [
      { texto: "A. “Senão eu volto aqui. E da próxima vez eu não abaixo pra passar pela porta.”", proxima: "c4_4a_1", pontos: { desvio: 1 }, flags: ["Ameacou_porta"] },
      { texto: "B. “Você quer falar comigo? Então essa é a única conversa que vai ter. Escolhe.”", proxima: "c4_4b_1", pontos: { desvio: 1 }, flags: ["Unica_conversa"] },
      { texto: "C. Pegar a bola branca da mesa de sinuca. Fechar a mão. Abrir. Pó de resina na mesa. Não falar nada.", proxima: "c4_4c_1", pontos: { desvio: 2 }, flags: ["Bola_po"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "Ela olha para a porta de enrolar. Ele olha também. Uma porta de aço. Ele sabe. Ele viu a barra de ferro quebrar no meio na fábrica.", proxima: "c4_4a_2" },
    c4_4a_2: { tipo: "narracao", texto: "Ele não fica com medo. Mas ele não ri.", proxima: "c4_27" },
    c4_4b_1: { tipo: "narracao", texto: "O Ren fica parado. A palavra “única” fica no ar entre os dois. Ela vê ele pesar essa palavra. Como se fosse a coisa mais séria que alguém já disse para ele.", proxima: "c4_27" },
    c4_4c_1: { tipo: "narracao", efeito: "tremor", texto: "Ela pega a bola branca. Fecha a mão. Um estalo seco. Ela abre a mão em cima do pano rasgado. Cai um montinho de pó branco e uns pedaços pequenos.", proxima: "c4_4c_2" },
    c4_4c_2: { tipo: "narracao", texto: "O Ren olha para o pó. Depois para a mão dela, que está limpa, sem um arranhão. Ele não se assusta. Ele fica olhando para a mão dela do jeito que olhou para o tabuleiro hoje de manhã.", proxima: "c4_27" },

    // (todas as opções continuam aqui)
    c4_27: { quem: "ren", texto: "Amanhã.", proxima: "c4_28" },
    c4_28: { quem: "eu", texto: "Amanhã o quê?", proxima: "c4_29" },
    c4_29: { quem: "ren", texto: "Volta.", proxima: "c4_30" },
    c4_30: { quem: "eu", texto: "Tudo?", proxima: "c4_31" },
    c4_31: { tipo: "narracao", texto: "Ele desencosta da máquina. Pega a mochila. Vai até a porta de enrolar. Para com a mão nela.", proxima: "c4_32" },
    c4_32: { quem: "ren", texto: "O rei, não.", proxima: "c4_33" },
    c4_33: { tipo: "pensamento", texto: "O rei. O logotipo. A lojinha do tio do Kaito.", proxima: "c4_34" },
    c4_34: { quem: "eu", texto: "Por que o Kaito? O que ele te fez?", proxima: "c4_35" },
    c4_35: { tipo: "narracao", texto: "Ele não responde. Ele levanta a porta. O ar da rua entra. Lá fora, o da jaqueta verde continua parado do lado das motos, olhando para o chão.", proxima: "c4_36" },
    c4_36: { quem: "ren", texto: "Vai pra casa. Pela rua da padaria. Tem luz.", proxima: "c4_37" },
    c4_37: { tipo: "narracao", texto: "Ele fala isso sem olhar para ela. Como quem lembra alguém de levar guarda-chuva.", proxima: "c4_38" },
    c4_38: { tipo: "pensamento", texto: "Ele mandou quebrar o braço do Takeo no escuro. E está me dizendo pra ir pela rua que tem luz.", proxima: "c4_39" },
    c4_39: { tipo: "pensamento", texto: "Eu não sei se isso é pior ou melhor. Eu acho que é pior.", proxima: "c4_esc5" },

    // ▶ ESCOLHA 5 — A saída
    c4_esc5: { escolhas: [
      { texto: "A. Ir pela rua da padaria. Não porque ele mandou. Porque tem luz.", proxima: "c4_5a_1", pontos: {}, flags: ["Rua_padaria"] },
      { texto: "B. Ir pela rua escura. De propósito. Passando do lado do da jaqueta verde.", proxima: "c4_5b_1", pontos: { desvio: 1 }, flags: ["Rua_escura"] },
      { texto: "C. Parar na porta. “Se encostar no Takeo de novo, a gente não conversa mais. A gente faz outra coisa.”", proxima: "c4_5c_1", pontos: { takeo: 1, desvio: 1 }, flags: ["Avisou_Ren_Takeo"] }
    ]},
    c4_5a_1: { tipo: "narracao", texto: "Ela sai. Vira à direita. A rua da padaria. Cheia de poste. Ela não olha para trás. Mas sabe que ele está parado na porta do fliperama, olhando ela ir, até a esquina.", proxima: "c4_40" },
    c4_5b_1: { tipo: "narracao", texto: "Ela vira à esquerda. A rua escura. Passa do lado das motos verdes. Do lado do da jaqueta verde. Ele dá dois passos para trás, contra a parede, para ela passar. Ele não levanta os olhos do chão.", proxima: "c4_5b_2" },
    c4_5b_2: { tipo: "pensamento", texto: "Ele não está com medo de mim. Ele está com medo do que vai acontecer com ele quando eu for embora.", proxima: "c4_40" },
    c4_5c_1: { tipo: "narracao", texto: "Ela para na porta, do lado dele. Perto. Mais perto do que nunca. Ela é bem mais baixa. Ela olha para cima. Ele olha para baixo.", proxima: "c4_5c_2" },
    c4_5c_2: { quem: "eu", texto: "Se encostar no Takeo de novo, a gente não conversa mais. A gente faz outra coisa.", proxima: "c4_5c_3" },
    c4_5c_3: { tipo: "narracao", texto: "Quando ela fala o nome do Takeo, a janela fecha de novo no rosto dele. Ele não responde. Mas ele dá um passo para o lado. Para ela passar.", proxima: "c4_40" },

    // (todas as opções continuam aqui)
    c4_40: { tipo: "narracao", cenario: "cozinha-sn-noite", sprite: null, transicao: "tempo", legenda: "Quinta, 23h10", texto: "Em casa. Ela destranca a porta. A casa vazia. A mãe no plantão. Ela abre a geladeira. O bolinho de frango embrulhado no papel-alumínio.", proxima: "c4_41" },
    c4_41: { tipo: "narracao", texto: "Ela come o bolinho em pé, no escuro, na frente da geladeira aberta. A mão tremendo um pouco. Não de medo. De tudo que ela não fez lá dentro.", proxima: "c4_42" },
    c4_42: { tipo: "pensamento", texto: "“Ele anda sozinho à noite.” Estava escuro. Na primeira vez também estava escuro.", proxima: "c4_43" },
    c4_43: { tipo: "pensamento", texto: "Não. Eu estou cansada. Eu estou vendo coisa onde não tem. Amanhã eu vejo se ele cumpriu.", proxima: "c5_01" },

    /* =================== CENA 5 — VOLTA =================== */
    // Cenário: escola, sexta. As notícias chegam por mensagem, fora da escola.
    c5_01: { roupa: "escolar", tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Sexta, 7h — Cena 5", sprite: null, texto: "Sexta. Ela chega no portão às sete. O celular vibra três vezes no bolso antes do sinal.", proxima: "c5_02" },
    c5_02: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "O ENCARREGADO ME LIGOU. Seis e meia da manhã. Disse que “houve um engano”. Que eu volto segunda. Com o mesmo turno. Ele estava com mais vergonha ainda. Eu chorei? Não. Talvez. Não conta.", proxima: "c5_03" },
    c5_03: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "A RELÂMPAGO. Ligaram do pátio. Erro no sistema. O documento estava em dia o tempo todo. Eu vou buscar depois da aula. DOURADA DE LUZ VOLTANDO PRA CASA.", proxima: "c5_04" },
    c5_04: { quem: "mensagem", rotulo: "Mensagem — Blake (no grupo)", texto: "A dona da livraria recebeu uma carta. O comprador desistiu. Sem multa. Ela não entendeu nada. Ela está fazendo bolo.", proxima: "c5_05" },
    c5_05: { tipo: "narracao", texto: "Ela fica parada no portão. Lendo de novo. Três de quatro. Em uma noite.", proxima: "c5_06" },
    c5_06: { quem: "mensagem", rotulo: "Mensagem — Kaito (no grupo)", texto: "O plano funcionou. O advogado do Ryuji, os caras da doca, o contrato. Eles recuaram. A lojinha ainda não. Mas eles recuaram.", proxima: "c5_07" },
    c5_07: { tipo: "pensamento", texto: "Eles acham que foi o plano. Que o advogado assustou. Que os caras da doca assustaram. Que a gente ganhou sem soco.", proxima: "c5_esc6" },

    // ▶ ESCOLHA 6 — Contar do fliperama?
    c5_esc6: { escolhas: [
      { texto: "A. Não contar. Deixar eles acharem que foi o plano. Eles precisam ganhar uma.", proxima: "c5_6a_1", pontos: { desvio: 1 }, flags: ["Segredo_fliperama"] },
      { texto: "B. Não contar no grupo. Mas guardar pra contar pro {ROTA}. Só pra ele. Depois.", proxima: "c5_6b_1", pontos: {}, flags: ["Conta_rota_fliperama"] },
      { texto: "C. Mandar no grupo: “Não comemorem. A lojinha é o que ele mais quer.”", proxima: "c5_6c_1", pontos: { kaito: 1 }, flags: ["Aviso_lojinha_grupo"] }
    ]},
    c5_6a_1: { tipo: "pensamento", texto: "Eles precisam ganhar uma. Pelo menos uma vez, eles precisam achar que ganharam sozinhos.", proxima: "c5_08" },
    c5_6b_1: { tipo: "pensamento", texto: "Pra um. Só pra um. Quando der. Não hoje.", proxima: "c5_08" },
    c5_6c_1: { quem: "mensagem", rotulo: "Mensagem — SN (no grupo)", texto: "Não comemorem ainda. A lojinha é o que ele mais quer.", proxima: "c5_6c_2" },
    c5_6c_2: { quem: "mensagem", rotulo: "Mensagem — Kaito (no grupo)", texto: "...Como você sabe?", proxima: "c5_6c_3" },
    c5_6c_3: { tipo: "pensamento", texto: "Ótimo. Eu e minha boca. Eu não respondo. O sinal toca. Salva pelo sinal.", proxima: "c5_08" },

    // (todas as opções continuam aqui)
    c5_08: { tipo: "narracao", sprite: "ren", cenario: "sala-de-aula", transicao: "tempo", texto: "Na sala, o Ren na carteira perto da porta. O livro aberto. O café. Ele não olha para ela. Ela não olha para ele. A sala inteira normal.", proxima: "c5_09" },
    c5_09: { tipo: "narracao", sprite: "takeo", texto: "O Takeo chega no horário. Ainda mancando, menos. A avó desenhou uma flor de caneta no gesso. Alguém da sala já escreveu “melhoras” em letra torta embaixo.", proxima: "c5_10" },
    c5_10: { tipo: "narracao", texto: "Quando o Takeo passa pela carteira do Ren, o Ren levanta os olhos do livro. Olha para o gesso. Um segundo. Depois volta para a página. Vira uma folha.", proxima: "c5_11" },
    c5_11: { tipo: "pensamento", texto: "Ele olhou pro gesso. Do mesmo jeito que olhou pro meu rabo de cavalo ontem. Como quem confere um trabalho.", proxima: "c5_12" },
    c5_12: { tipo: "narracao", sprite: "sayuri", texto: "A Sayuri passa pela carteira dela no caminho para a lousa. Fala sem parar de andar. Baixinho.", proxima: "c5_13" },
    c5_13: { quem: "sayuri", texto: "Você foi lá. Dá pra ver na sua cara. Você é burra. E eu não vou contar pra ninguém.", proxima: "c5_14" },
    c5_14: { tipo: "pensamento", texto: "Ela não sabe de nada. Ela adivinhou. A pior dupla da escola tem um radar.", proxima: "r_cam" },

    /* =================== ROTA — SEXTA À TARDE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { roupa: "fora", tipo: "narracao", cenario: "loja-lamen", transicao: "tempo", legenda: "Sexta, 17h", sprite: "kaito", texto: "Depois da aula, a lojinha. O aviso de despejo continua colado na parede, do lado do cardápio. Alguém riscou o “30” e escreveu “29” embaixo. Letra do tio.", proxima: "rk_02" },
    rk_02: { tipo: "narracao", texto: "O Kaito está de avental, cortando cebolinha. Muito rápido. Muita cebolinha. Mais do que a lojinha vai usar na semana inteira.", proxima: "rk_03" },
    rk_03: { quem: "kaito", texto: "Três voltaram em uma noite. O advogado do Ryuji nem tinha ligado ainda. O Victor nem tinha falado com os caras da doca. O Blake nem tinha lido o contrato.", proxima: "rk_04" },
    rk_04: { tipo: "narracao", texto: "Ele para de cortar. Coloca a faca em cima da tábua. Olha para ela.", proxima: "rk_05" },
    rk_05: { quem: "kaito", texto: "Você saiu ontem à noite.", proxima: "rk_06" },
    rk_06: { tipo: "narracao", texto: "Não é pergunta. Ela sabe que não é pergunta.", proxima: "rk_07" },
    rk_07: { quem: "kaito", texto: "Eu passei no seu prédio às onze, depois da casa do Takeo. A luz estava apagada. A sua mãe estava no plantão. Você não respondeu a minha mensagem. Você sempre responde. Nem que seja com um ponto.", proxima: "rk_esc" },

    // ▶ ESCOLHA — Rota Kaito
    rk_esc: { escolhas: [
      { texto: "A. Contar. Tudo. O fliperama. Os caras. O Ren. “Amanhã. Volta. O rei, não.”", proxima: "rk_a1", pontos: { kaito: 3 }, flags: ["Contou_fliperama_Kaito"] },
      { texto: "B. “Eu fui resolver uma coisa. Funcionou em três. Não funcionou no seu. Ainda.”", proxima: "rk_b1", pontos: { kaito: 2 }, flags: ["Meio_fliperama_Kaito"] },
      { texto: "C. Pegar a faca e a tábua. Continuar cortando a cebolinha dele. “Você está cortando torto.”", proxima: "rk_c1", pontos: { kaito: 2 }, flags: ["Cebolinha_Kaito"] }
    ]},
    rk_a1: { tipo: "narracao", texto: "Ela conta. Ele escuta sem mexer um músculo. Na parte do cabelo, a mão dele fecha em cima da tábua. Na parte do braço no ombro, a tábua faz um barulho de rachar.", proxima: "rk_a2" },
    rk_a2: { quem: "kaito", texto: "Sozinha. Num lugar fechado. Com doze.", proxima: "rk_a3" },
    rk_a3: { quem: "eu", texto: "Eu estou aqui. Sem um arranhão.", proxima: "rk_a4" },
    rk_a4: { quem: "kaito", texto: "Eu sei. Eu sei que você aguenta. Eu vi a barra.", proxima: "rk_a5" },
    rk_a5: { tipo: "narracao", texto: "É a primeira vez que ele fala da barra em voz alta. Ele olha para ela. Ele não está bravo. Está outra coisa.", proxima: "rk_a6" },
    rk_a6: { quem: "kaito", texto: "Não é sobre aguentar. Da próxima vez, eu fico de costas pra você. Do lado de fora. Não precisa entrar ninguém. Mas eu fico lá.", proxima: "r_fim" },
    rk_b1: { tipo: "narracao", texto: "O Kaito olha para ela muito tempo. Depois olha para o aviso de despejo. O 29.", proxima: "rk_b2" },
    rk_b2: { quem: "kaito", texto: "Você foi falar com ele.", proxima: "rk_b3" },
    rk_b3: { quem: "eu", texto: "Eu fui resolver uma coisa.", proxima: "rk_b4" },
    rk_b4: { quem: "kaito", texto: "...Tá. Quando você quiser contar o resto, eu estou cortando cebolinha. Todo dia. Às cinco.", proxima: "r_fim" },
    rk_c1: { tipo: "narracao", texto: "Ela vai para trás do balcão. Tira a faca da mão dele. Puxa a tábua. Corta. Reto. Fino. Rápido.", proxima: "rk_c2" },
    rk_c2: { quem: "kaito", texto: "Quem te ensinou a cortar assim?", proxima: "rk_c3" },
    rk_c3: { tipo: "pensamento", texto: "Você. Em outra vida. Não. Nessa. Na semana passada. Eu fiquei olhando.", proxima: "rk_c4" },
    rk_c4: { quem: "eu", texto: "Eu fiquei olhando você.", proxima: "rk_c5" },
    rk_c5: { tipo: "narracao", texto: "Ele fica parado. Do lado dela, atrás do balcão. Ele não pergunta mais nada da noite anterior. Ele pega outra faca. Os dois cortando cebolinha, ombro com ombro, até o tio mandar parar porque não tem mais pote.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { roupa: "fora", tipo: "narracao", cenario: "casa-takeo", transicao: "tempo", legenda: "Sexta, 17h", sprite: "takeo", texto: "Depois da aula, a casa do Takeo. A avó abre a porta antes de ela bater. Abraça ela. Forte. Com cheiro de canja.", proxima: "rt_02" },
    rt_02: { quem: "avo_takeo", texto: "A menina da viga. Entra. Ele está no quintal. Não quer ficar deitado. Diz que deitado ele pensa demais.", proxima: "rt_03" },
    rt_03: { tipo: "narracao", texto: "No quintal, embaixo do caquizeiro, o Takeo sentado no balanço de corda. Com uma mão só. O gesso apoiado no joelho. Balançando bem devagar, com a ponta do pé no chão.", proxima: "rt_04" },
    rt_04: { quem: "takeo", texto: "É pra quando a gente tiver setenta. Eu estou treinando. Com setenta a gente também vai ter alguma coisa quebrada.", proxima: "rt_05" },
    rt_05: { tipo: "narracao", texto: "Ela ri. Não consegue não rir. E aí, no meio do riso, a garganta fecha.", proxima: "rt_06" },
    rt_06: { tipo: "pensamento", texto: "Setenta. Na primeira vez ele não chegou lá. Na primeira vez estava escuro.", proxima: "rt_07" },
    rt_07: { quem: "takeo", texto: "Ei. Ei. Que cara é essa?", proxima: "rt_esc" },

    // ▶ ESCOLHA — Rota Takeo
    rt_esc: { escolhas: [
      { texto: "A. “Foi culpa minha. Você voltou de mim. No escuro.”", proxima: "rt_a1", pontos: { takeo: 3 }, flags: ["Culpa_SN_Takeo"] },
      { texto: "B. Sentar no chão, do lado do balanço. Encostar a cabeça no joelho bom dele.", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["Cabeca_joelho_Takeo"] },
      { texto: "C. “De hoje em diante, eu te levo em casa. Não o contrário.”", proxima: "rt_c1", pontos: { takeo: 3 }, flags: ["Leva_Takeo_casa"] }
    ]},
    rt_a1: { tipo: "narracao", texto: "O Takeo para o balanço com o pé.", proxima: "rt_a2" },
    rt_a2: { quem: "takeo", texto: "Eu voltei de você feliz. Eu estava pensando na mesa da biblioteca. Isso não é culpa. Isso é a melhor parte da minha quarta-feira.", proxima: "rt_a3" },
    rt_a3: { quem: "takeo", texto: "A culpa é de quem estava no escuro. Não de quem estava na luz.", proxima: "rt_a4" },
    rt_a4: { tipo: "narracao", texto: "Ela olha para ele. Ele fala isso sem saber o que está falando. Sem saber de nada. E acerta tudo.", proxima: "r_fim" },
    rt_b1: { tipo: "narracao", texto: "Ela senta na terra, embaixo do caquizeiro. Encosta a cabeça no joelho bom dele. Ele fica parado. Depois a mão boa dele vai até o cabelo dela. Bem devagar. Pergunta antes de encostar.", proxima: "rt_b2" },
    rt_b2: { quem: "takeo", texto: "Posso?", proxima: "rt_b3" },
    rt_b3: { tipo: "pensamento", texto: "Ontem um cara pegou meu cabelo sem perguntar. Hoje o Takeo pergunta.", proxima: "rt_b4" },
    rt_b4: { quem: "eu", texto: "Pode.", proxima: "rt_b5" },
    rt_b5: { tipo: "narracao", texto: "Os dois ficam ali. O balanço parado. Um caqui cai no telhado do vizinho. A avó espiando pela janela da cozinha e fingindo que está lavando louça.", proxima: "r_fim" },
    rt_c1: { quem: "takeo", texto: "Você vai me levar em casa? Eu sou mais alto que você.", proxima: "rt_c2" },
    rt_c2: { quem: "eu", texto: "Você é mais alto. Eu sou mais eficiente.", proxima: "rt_c3" },
    rt_c3: { quem: "takeo", texto: "Isso vai ser muito ruim pra minha reputação na gangue.", proxima: "rt_c4" },
    rt_c4: { quem: "eu", texto: "A sua reputação na gangue é segurar casaco.", proxima: "rt_c5" },
    rt_c5: { tipo: "narracao", texto: "Ele ri tão alto que dói o braço. Ele reclama do braço rindo. A avó grita da janela que ele vai abrir os pontos da testa.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: "fora", tipo: "narracao", cenario: "livraria-shopping", transicao: "tempo", legenda: "Sexta, 17h", sprite: "blake", texto: "Depois da aula, a livraria do shopping. A folha do vidro foi arrancada. Só ficou o durex nos cantos. A dona está atrás do balcão, cortando um bolo de laranja em quadradinhos para qualquer pessoa que entrar.", proxima: "rb_cam" },
    rb_cam: { caminhos: [
      { flag: "Poltrona_quarto_SN", proxima: "rb_pq" }
    ], proxima: "rb_pn" },
    rb_pq: { tipo: "narracao", texto: "O Blake chega atrasado. Com a poltrona de veludo nas costas. Ele buscou no quarto dela de manhã, antes da aula. A mãe dela abriu a porta de novo e disse “Hm” de novo.", proxima: "rb_02" },
    rb_pn: { tipo: "narracao", texto: "O Blake chega atrasado. Com a poltrona de veludo nas costas. Ela passou a noite na sala da casa dele, e os gêmeos fizeram uma cabana em volta dela.", proxima: "rb_02" },
    rb_02: { tipo: "narracao", texto: "Ele coloca a poltrona no canto. No lugar exato. Tem quatro marcas no carpete onde os pés dela ficaram anos. Ele encaixa nas marcas.", proxima: "rb_03" },
    rb_03: { quem: "blake", texto: "Voltou.", proxima: "rb_04" },
    rb_04: { tipo: "narracao", texto: "Ele senta. Do jeito que a dona disse que só ele senta. Ele fecha os olhos. Ela nunca viu o Blake de olho fechado num lugar público.", proxima: "rb_05" },
    rb_05: { quem: "blake", texto: "Ninguém desiste de comprar um prédio do nada.", proxima: "rb_06" },
    rb_06: { tipo: "narracao", texto: "Ele abre os olhos. Olha para ela. O Blake fala pouco. Mas ele não é burro. Nunca foi. Ele só lê devagar.", proxima: "rb_07" },
    rb_07: { quem: "blake", texto: "Você fez alguma coisa.", proxima: "rb_esc" },

    // ▶ ESCOLHA — Rota Blake
    rb_esc: { escolhas: [
      { texto: "A. “Eu fiz. Não pergunta o quê. Senta na sua poltrona.”", proxima: "rb_a1", pontos: { blake: 3 }, flags: ["Fez_algo_Blake"] },
      { texto: "B. “Foi o seu contrato. Você leu ele três vezes. Lembra?”", proxima: "rb_b1", pontos: { blake: 2 }, flags: ["Mentiu_contrato_Blake"] },
      { texto: "C. Sentar no braço da poltrona. Do lado dele. Pegar um quadradinho do bolo de laranja.", proxima: "rb_c1", pontos: { blake: 3 }, flags: ["Braco_poltrona_Blake"] }
    ]},
    rb_a1: { tipo: "narracao", texto: "Ele não pergunta. Ele fica olhando para ela da poltrona. Muito tempo.", proxima: "rb_a2" },
    rb_a2: { quem: "blake", texto: "Na arquibancada. No festival. Agora.", proxima: "rb_a3" },
    rb_a3: { quem: "eu", texto: "Isso é uma lista?", proxima: "rb_a4" },
    rb_a4: { quem: "blake", texto: "É a lista das vezes que você fez alguma coisa e não contou.", proxima: "rb_a5" },
    rb_a5: { tipo: "narracao", texto: "Ele levanta. Dá a poltrona pra ela. Ela senta. Ele fica em pé do lado, encostado na estante. Como um guarda. Ele não fala mais nada. Mas ele não sai de perto.", proxima: "r_fim" },
    rb_b1: { tipo: "narracao", texto: "O Blake olha para ela. Ele sabe que não foi o contrato. Ele não leu o contrato ainda. Ela sabe que ele sabe.", proxima: "rb_b2" },
    rb_b2: { quem: "blake", texto: "...Foi o contrato.", proxima: "rb_b3" },
    rb_b3: { tipo: "narracao", texto: "Ele aceita a mentira. Do jeito que a gente aceita um presente embrulhado errado. Por causa de quem deu.", proxima: "r_fim" },
    rb_c1: { tipo: "narracao", texto: "Ela senta no braço da poltrona. Pega um quadradinho de bolo da bandeja. Ele pega outro. Os dois comendo bolo de laranja num canto de livraria.", proxima: "rb_c2" },
    rb_c2: { quem: "desconhecido", rotulo: "Dona da livraria", texto: "Ah, que bonitinho. A poltrona aguenta dois. Ela aguentou o meu marido e eu por trinta anos.", proxima: "rb_c3" },
    rb_c3: { tipo: "narracao", texto: "O Blake engasga com o bolo. Fica vermelho até a orelha. Não levanta. Não sai do lugar. Continua do lado dela. Vermelho.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { roupa: "fora", tipo: "narracao", cenario: "patio-apreendidos", transicao: "tempo", legenda: "Sexta, 17h", sprite: "ryuji", texto: "Depois da aula, o pátio de veículos apreendidos. O Ryuji pede para ela ir junto. “Pra ter testemunha.” Testemunha do quê, ele não explica.", proxima: "rr_02" },
    rr_02: { tipo: "narracao", texto: "O funcionário abre o portão. No meio de cem carros cinza e motos pretas, uma moto amarela. Torta no descanso. Com um adesivo de raio meio descolado.", proxima: "rr_03" },
    rr_03: { quem: "ryuji", texto: "Relâmpago!", proxima: "rr_04" },
    rr_04: { tipo: "narracao", texto: "Ele corre. Abraça a moto. Abraça de verdade. Encosta o rosto no tanque. O funcionário do pátio olha para a SN. Ela dá de ombros.", proxima: "rr_05" },
    rr_05: { quem: "ryuji", texto: "Eles tiraram o adesivo do raio. Olha. Meio tiraram. Que tipo de gente meio tira um adesivo?", proxima: "rr_06" },
    rr_06: { tipo: "narracao", texto: "Ele passa o dedo no adesivo, tentando colar de novo. Depois para. Fica sério.", proxima: "rr_07" },
    rr_07: { quem: "ryuji", texto: "“Erro no sistema.” Eu não sou idiota, SN. Ninguém erra sistema de madrugada e conserta de manhã.", proxima: "rr_esc" },

    // ▶ ESCOLHA — Rota Ryuji
    rr_esc: { escolhas: [
      { texto: "A. “Não foi erro. Mas a moto está aqui. Liga ela.”", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Liga_Relampago"] },
      { texto: "B. “Foi o seu advogado. Você é o cara mais assustador da faculdade de direito.”", proxima: "rr_b1", pontos: { ryuji: 2 }, flags: ["Advogado_Ryuji"] },
      { texto: "C. Pegar o adesivo do raio e colar de volta. Bem esticado. “Agora ela está inteira.”", proxima: "rr_c1", pontos: { ryuji: 3 }, flags: ["Adesivo_Ryuji"] }
    ]},
    rr_a1: { tipo: "narracao", texto: "Ele olha para ela. Vê alguma coisa no rosto dela. Não pergunta. Liga a moto. O motor tosse duas vezes e pega.", proxima: "rr_a2" },
    rr_a2: { quem: "ryuji", texto: "Sobe. Primeira volta oficial depois da prisão. Você é a testemunha. Você tem que estar em cima.", proxima: "rr_a3" },
    rr_a3: { tipo: "narracao", texto: "Ela sobe. Ele sai do pátio devagar, fazendo curva, buzinando para ninguém. O sol das cinco bate no tanque. A moto amarela fica dourada de verdade. Um pouco. Por uns três segundos.", proxima: "rr_a4" },
    rr_a4: { quem: "eu", texto: "...Tá dourada.", proxima: "rr_a5" },
    rr_a5: { quem: "ryuji", texto: "EU FALEI! Eu sempre falei!", proxima: "r_fim" },
    rr_b1: { quem: "ryuji", texto: "O advogado é uma moça de vinte e três anos que ainda está no quarto semestre e tem medo de cachorro.", proxima: "rr_b2" },
    rr_b2: { quem: "eu", texto: "Ela é muito assustadora pra quem tem medo de faculdade.", proxima: "rr_b3" },
    rr_b3: { tipo: "narracao", texto: "Ele ri. Sabe que não foi o advogado. Aceita assim mesmo. O Ryuji sempre prefere a versão que tem piada.", proxima: "r_fim" },
    rr_c1: { tipo: "narracao", texto: "Ela pega o adesivo do raio. Estica. Alisa com o polegar até não ter bolha. O Ryuji fica olhando para a mão dela no tanque da moto dele.", proxima: "rr_c2" },
    rr_c2: { quem: "eu", texto: "Agora ela está inteira.", proxima: "rr_c3" },
    rr_c3: { quem: "ryuji", texto: "Ninguém nunca colou o meu adesivo. Nem eu. Eu sempre deixo meio torto.", proxima: "rr_c4" },
    rr_c4: { tipo: "narracao", texto: "Ele fica quieto. O Ryuji quieto. Pela terceira vez na vida dela. Depois liga a moto e não fala nada no caminho inteiro. Mas buzina em todo cruzamento.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: "fora", tipo: "narracao", cenario: "beco-mercado", transicao: "tempo", legenda: "Sexta, 17h", sprite: "victor", texto: "Depois da aula, a calçada do mercado. A doca. O Victor está na frente dela, de braços abertos, como quem apresenta um palácio.", proxima: "rv_02" },
    rv_02: { quem: "victor", texto: "Senhoras e senhores. A doca. A doca que me ama de volta. Segunda-feira, dez da noite, eu e ela de novo.", proxima: "rv_03" },
    rv_03: { tipo: "narracao", texto: "Ele está com dois pirulitos na boca. Um de cada lado. Comemoração.", proxima: "rv_04" },
    rv_04: { quem: "victor", texto: "A minha mãe chorou. De novo. Mas foi um choro bom. Ela fez feijoada numa sexta. Feijoada é sábado. Ela quebrou a regra da casa. Isso nunca aconteceu.", proxima: "rv_05" },
    rv_05: { tipo: "narracao", texto: "Ele tira um pirulito da boca. Fica olhando para ela. O sorriso torto diminui um pouco.", proxima: "rv_06" },
    rv_06: { quem: "victor", texto: "O encarregado me pediu desculpa três vezes. Ele disse que “o pessoal de cima” mudou de ideia de madrugada. Gente de cima não muda de ideia de madrugada. Gente de cima dorme.", proxima: "rv_07" },
    rv_07: { quem: "victor", texto: "Você não respondeu a minha mensagem ontem. A que eu falei sério.", proxima: "rv_esc" },

    // ▶ ESCOLHA — Rota Victor
    rv_esc: { escolhas: [
      { texto: "A. “Eu dormi cedo.” E roubar o pirulito que ele tirou da boca. Não. Pegar um novo.", proxima: "rv_a1", pontos: { victor: 2 }, flags: ["Dormiu_cedo_Victor"] },
      { texto: "B. “Eu fui garantir que você voltasse pra doca. Agora me deve dois sorvetes.”", proxima: "rv_b1", pontos: { victor: 3 }, flags: ["Dois_sorvetes"] },
      { texto: "C. “Leva feijoada pra mim amanhã? Sexta e sábado. Quebra a regra duas vezes.”", proxima: "rv_c1", pontos: { victor: 3 }, flags: ["Feijoada_dupla"] }
    ]},
    rv_a1: { quem: "victor", texto: "Dormiu cedo. Você. A pessoa que ficou acordada até as três jogando Arena dos Reinos na terça.", proxima: "rv_a2" },
    rv_a2: { quem: "eu", texto: "Eu estava cansada.", proxima: "rv_a3" },
    rv_a3: { tipo: "narracao", texto: "Ele tira um pirulito novo do bolso. Entrega. Não acredita nela. Não insiste. O Victor sabe a hora de não insistir. É a única hora que ele sabe.", proxima: "r_fim" },
    rv_b1: { tipo: "narracao", texto: "O Victor fica parado com o pirulito na mão. Olhando para ela. A piada que ele ia fazer não sai.", proxima: "rv_b2" },
    rv_b2: { quem: "victor", texto: "...Garantir como?", proxima: "rv_b3" },
    rv_b3: { quem: "eu", texto: "Dois sorvetes. Não é hora de pergunta. É hora de pagamento.", proxima: "rv_b4" },
    rv_b4: { quem: "victor", texto: "Gatinha... SN. Você é a pior cobradora do mundo. E eu vou pagar os dois. Com cobertura.", proxima: "r_fim" },
    rv_c1: { quem: "victor", texto: "Duas vezes? Na mesma semana? A minha mãe vai achar que é casamento.", proxima: "rv_c2" },
    rv_c2: { quem: "eu", texto: "Fala que é feijoada de aniversário da doca.", proxima: "rv_c3" },
    rv_c3: { tipo: "narracao", texto: "Ele ri. Alto. Os caras da doca olham. Ele acena para eles com os dois pirulitos. Depois olha para ela de novo. Não está mais rindo. Está sorrindo. É diferente.", proxima: "rv_c4" },
    rv_c4: { quem: "victor", texto: "Amanhã. Meio-dia. Feijoada de aniversário da doca. Você é a convidada de honra.", proxima: "r_fim" },

    /* =================== CENA 6 — A MÃO ENFAIXADA =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "beco-mercado", transicao: "tempo", legenda: "Sexta, 19h — Cena 6", sprite: null, texto: "Ela volta para casa pela rua de trás do mercado. Ainda tem sol. Pouco. Ela passa pela esquina do fliperama sem olhar. As motos verdes não estão lá.", proxima: "c6_01" },
    c6_01: { tipo: "narracao", texto: "Na calçada da frente, vindo na direção dela, um cara de jaqueta verde. Ela reconhece pela jaqueta. Depois pelo jeito de andar. O que pegou o rabo de cavalo dela.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", efeito: "tremor", texto: "A mão direita dele está enfaixada. Inteira. Do pulso até a ponta dos dedos. Os dedos presos em tala. A mão que pegou o cabelo dela.", proxima: "c6_cam" },
    c6_cam: { caminhos: [
      { flag: "Apertou_pulso_Midorata", proxima: "c6_apertou" }
    ], proxima: "c6_nao" },
    c6_apertou: { tipo: "pensamento", texto: "Eu apertei o pulso dele. Pouco. Eu sei quanto eu apertei. Eu sei a diferença entre um pulso vermelho e uma mão quebrada. Não fui eu.", proxima: "c6_03" },
    c6_nao: { tipo: "pensamento", texto: "Eu nem encostei nele com força. Eu só tirei a mão dele do meu cabelo. Não fui eu.", proxima: "c6_03" },
    c6_03: { tipo: "narracao", texto: "Ele levanta os olhos. Vê ela. E para. No meio da calçada. A cara fica cinza.", proxima: "c6_04" },
    c6_04: { tipo: "narracao", texto: "Ele atravessa a rua. Sem olhar para os carros. Um carro buzina. Ele não liga. Ele vai para a outra calçada, a mão enfaixada apertada contra o peito, e anda rápido. Quase correndo. Sem olhar para trás.", proxima: "c6_05" },
    c6_05: { tipo: "narracao", efeito: "eco", texto: "“Você fica. Lá fora.”", proxima: "c6_06" },
    c6_06: { tipo: "pensamento", texto: "Ele não quebrou a mão dele porque o cara me desrespeitou. Ele quebrou porque o cara encostou.", proxima: "c6_07" },
    c6_07: { tipo: "pensamento", texto: "Encostou em mim.", proxima: "c6_08" },
    c6_08: { tipo: "narracao", texto: "Ela fica parada na calçada. O sol acaba. Os postes acendem um por um. A rua da padaria, lá na frente, toda iluminada.", proxima: "c6_09" },
    c6_09: { tipo: "pensamento", texto: "O Victor. O Ryuji. O Blake. O Kaito. Todos em volta de mim. Ele derrubou um por um. E devolveu em uma noite, porque eu pedi.", proxima: "c6_10" },
    c6_10: { tipo: "pensamento", texto: "E o Takeo ele não devolveu. Braço não se devolve.", proxima: "c6_11" },
    c6_11: { tipo: "pensamento", texto: "“Ele anda sozinho à noite.”", proxima: "c6_12" },
    c6_12: { tipo: "pensamento", texto: "Eu achei que eu tinha ido lá pra fazer ele parar. Agora eu acho que eu só mostrei pra ele que funciona. Que se ele derrubar todo mundo, eu vou até ele.", proxima: "c6_13" },
    c6_13: { tipo: "pensamento", texto: "Não. Eu fui lá porque eu quis. E vou de novo se precisar. Mas da próxima vez eu vou saber o que ele quer.", proxima: "c6_14" },
    c6_14: { tipo: "narracao", texto: "Ela vai para casa. Pela rua da padaria. Porque tem luz. Só por isso.", proxima: "ep_fim" },

    // Fim do Capítulo 31 (crie a entrada "capitulo31" em dados/capitulos.js).
    ep_fim: { fim: "capitulo31" }
  }
});

/*
 * LORE DO REN (NÃO REVELAR AINDA): quando criança era outro menino. Vivia com um xadrez, óculos gigantes,
 *    sofria bullying em casa e na escola. A SN brincou com ele um dia, sem julgar, como igual. Depois ele
 *    descobriu quem era a tia dela (Sora), e ela sumiu. Desde então é obcecado, mas não consegue chegar perto.
 *    Virou quem é para ganhar o reconhecimento do pai — e porque é ruim mesmo.
 *
 * GANCHOS PARA O CAPÍTULO 32 (anotações do roteiro)
 *  • VOLTOU: Victor (doca, segunda), Ryuji (Relâmpago), Blake (livraria, poltrona no lugar).
 *    NÃO VOLTOU: a lojinha do tio do Kaito. Aviso riscado: "29". O Ren: "O rei, não."
 *  • A gangue acha que foi o plano. A SN não contou no grupo (Segredo_fliperama / Conta_rota_fliperama /
 *    Aviso_lojinha_grupo: o Kaito perguntou "como você sabe?").
 *  • O Takeo: braço quebrado, faixa, mancando. Ele é da gangue, estava sumido. Na escola: "caí da escada".
 *  • O cara da jaqueta verde: a mão quebrada. Não foi a SN. Foi o Ren (não é dito).
 *  • SEGREDO (NÃO REVELAR): na primeira linha do tempo, foi o Ren que matou o Takeo.
 *    Pistas deste capítulo: a "janela fechando" no rosto dele quando ela fala do Takeo; "Ele anda sozinho
 *    à noite"; o flash da calçada, do guarda-chuva e do "estava escuro". A SN não liga os pontos.
 *  • O Ren obcecado: derruba quem fica perto dela, mas não consegue chegar. "Eu estou falando." /
 *    "Não está. Você está me olhando." Ele ficou sem resposta.
 *  • O esconderijo da Midorata: fliperama fechado atrás do mercado (fechou quando a SN tinha 9 ou 10).
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 Com o Takeo, no pátio · 2 O que fazer com a culpa · 3 O braço e a mão (fliperama)
 *  4 Como fechar a exigência · 5 A saída · 6 Contar do fliperama? · Rota (1 escolha por rota)
 *
 * FLAGS NOVAS
 *  Faixa_Takeo · Volta_Takeo · Promessa_Takeo · Chorou_banheiro · Azulejo_rachado · Culpa_nao_conserta
 *  Tirou_mao_calma · Apertou_pulso_Midorata · Nao_serve_Midorata · Ameacou_porta · Unica_conversa · Bola_po
 *  Rua_padaria · Rua_escura · Avisou_Ren_Takeo · Segredo_fliperama · Conta_rota_fliperama · Aviso_lojinha_grupo
 *  Contou_fliperama_Kaito · Meio_fliperama_Kaito · Cebolinha_Kaito · Culpa_SN_Takeo · Cabeca_joelho_Takeo
 *  Leva_Takeo_casa · Fez_algo_Blake · Mentiu_contrato_Blake · Braco_poltrona_Blake · Liga_Relampago
 *  Advogado_Ryuji · Adesivo_Ryuji · Dormiu_cedo_Victor · Dois_sorvetes · Feijoada_dupla
 */