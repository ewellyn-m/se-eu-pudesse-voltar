/*
 * =====================================================================
 *  CAPÍTULO 22 — Ronco
 *  Sábado às cinco (o balanço) e segunda-feira.
 * =====================================================================
 *
 *  O QUE ACONTECE
 *    • O balanço: o Takeo fala o que queria falar. Ele gosta dela. Ele não pede resposta.
 *      Depois os dois apostam quem vai mais alto, igual aos seis anos.
 *    • Segunda: as motos saem do conserto / da garagem. A gangue do Kaito chega de moto
 *      e estaciona do outro lado da rua da escola (fora da escola). A escola inteira para.
 *      A bicicleta de entrega era porque a moto do Kaito estava no conserto.
 *    • Na saída, o Kaito tem um capacete a mais. Primeira garupa de moto.
 *    • Gancho: o carro preto estacionado na frente do prédio da SN. O Kaito vai até ele. O carro vai embora.
 *
 *  TOM
 *    • Menos vitimista. A SN está mais segura, mais engraçada, responde na hora.
 *    • Romance devagar. Ninguém fica dando em cima dela.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Takeo, Kaito, Blake, Ryuji, Victor, Mio, Hana.
 *
 *  MOTOS (descrição para arte)
 *    Kaito: preta, tanque vermelho-escuro, montada com o tio, peças de ferro-velho. Barulho grave.
 *    Blake: enorme, preta fosca, sem enfeite nenhum. Igual ele.
 *    Ryuji: amarela, chamativa, com um raio pintado no tanque. Ele chama de "Relâmpago".
 *    Victor: velha, barulhenta, cheia de adesivo, escapamento que solta estalo.
 *
 *  CENÁRIOS
 *    Praça do balanço → "parquinho" · Frente da escola → "saida-colegio"
 *    Sala de aula → "sala-de-aula" · Rua do prédio da SN → "frente-casa-sn"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Chega_antes_Takeo, Bolinho_balanco, Lan_todo_sabado.
 *
 *  Crie a entrada "capitulo22" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo22", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — O BALANÇO =================== */
    // Cenário: praça do balanço, sábado, 16h55 (usa "saida-colegio"). Música: violão leve, quente.
    c1_01: { roupa: "fora", tipo: "narracao", cenario: "parquinho", transicao: "tempo", legenda: "Sábado, 16h55 — Cena 1", sprite: "takeo", texto: "Ela chega sem fôlego. O Takeo levanta do balanço tão rápido que o pote de bolinho quase cai do colo dele.", proxima: "c1_cam1" },
    c1_cam1: { caminhos: [
      { flag: "Chega_antes_Takeo", proxima: "c1_antes" }
    ], proxima: "c1_02" },
    c1_antes: { quem: "eu", texto: "Eu falei que ia chegar antes. Você trapaceou.", proxima: "c1_antes2" },
    c1_antes2: { quem: "takeo", texto: "Eu cheguei às quatro. Eu não aguentei ficar em casa.", proxima: "c1_02" },
    c1_02: { roupa: "fora", quem: "takeo", texto: "Senta. No seu. Eu guardei.", proxima: "c1_03" },
    c1_03: { tipo: "narracao", texto: "Ela senta no balanço da esquerda. A corrente está gelada. Ele senta no da direita. Os dois balançam devagar, só com a ponta do pé, um olhando para a frente e o outro também.", proxima: "c1_cam2" },
    c1_cam2: { caminhos: [
      { flag: "Bolinho_balanco", proxima: "c1_bolinho" }
    ], proxima: "c1_04" },
    c1_bolinho: { tipo: "narracao", texto: "Ele abre o pote. Bolinho de frango. Parte um no meio. Fica com a metade maior. Olha para ela, desafiando. Ela pega a metade maior da mão dele. Ele ri.", proxima: "c1_04" },
    c1_04: { quem: "takeo", texto: "Tá. Eu vou falar. Se eu não falar agora, eu vou falar só daqui a dez anos, e aí eu vou ter quarenta anos de bochecha.", proxima: "c1_05" },
    c1_05: { tipo: "narracao", texto: "Ele para de balançar. Firma os pés na areia. Vira para ela. Os óculos tortos, o roxo do olho quase sumindo, amarelinho.", proxima: "c1_06" },
    c1_06: { quem: "takeo", texto: "Eu gosto de você. Não do jeito de amigo. Do outro jeito. Faz tempo. Talvez desde os seis anos, mas aos seis eu não sabia o nome disso.", proxima: "c1_07" },
    c1_07: { quem: "takeo", texto: "Eu não estou pedindo resposta. Sério. Eu só não queria mais guardar. Guardar é pesado. Eu carreguei isso a semana inteira com ervilha no olho.", proxima: "c1_08" },
    c1_08: { tipo: "narracao", texto: "Ele fala tudo isso olhando direto para ela. Sem gaguejar. Vermelho até a raiz do cabelo, mas sem desviar. O Takeo tímido é também o Takeo mais corajoso do mundo.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — Resposta para o Takeo
    c1_esc1: { escolhas: [
      { texto: "A. “Eu também gosto de você. Só não sei ainda se do mesmo jeito. Me dá um tempo?”", proxima: "c1_1a_1", pontos: { takeo: 2 }, flags: ["Takeo_tempo"] },
      { texto: "B. Sorrir. “Eu sei.”", proxima: "c1_1b_1", pontos: { takeo: 2 }, flags: ["Takeo_eu_sei"] },
      { texto: "C. Inclinar do balanço e dar um beijo na bochecha dele. A do roxo.", proxima: "c1_1c_1", pontos: { takeo: 3 }, flags: ["Beijo_bochecha_Takeo"] }
    ]},
    c1_1a_1: { quem: "takeo", texto: "Tempo? Claro. Eu sou ótimo com tempo. Eu sou o campeão mundial de tempo.", proxima: "c1_1a_2" },
    c1_1a_2: { quem: "eu", texto: "Eu sei. Sua avó me contou da janela.", proxima: "c1_1a_3" },
    c1_1a_3: { quem: "takeo", texto: "Eu vou proibir a minha avó de falar com você.", proxima: "c1_1a_4" },
    c1_1a_4: { quem: "eu", texto: "Ela não vai obedecer.", proxima: "c1_1a_5" },
    c1_1a_5: { quem: "takeo", texto: "Não vai mesmo.", proxima: "c1_09" },
    c1_1b_1: { quem: "takeo", texto: "...Como assim você sabe?", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "eu", texto: "Takeo. Na quarta você ficou de quatro cores no meio da sala. Com uma ervilha congelada na cara. E falou de bolinho.", proxima: "c1_1b_3" },
    c1_1b_3: { tipo: "narracao", texto: "Ele abre a boca. Fecha. Cobre o rosto com as duas mãos. E ri. Muito. De um jeito que faz o balanço dele balançar sozinho.", proxima: "c1_1b_4" },
    c1_1b_4: { quem: "takeo", texto: "Eu sou o pior em guardar segredo. Eu passei a semana achando que estava sendo discreto.", proxima: "c1_09" },
    c1_1c_1: { tipo: "narracao", texto: "Ela se inclina. O balanço dela vai para o lado do dele. Ela beija a bochecha dele, rápido, bem em cima do amarelinho do roxo.", proxima: "c1_1c_2" },
    c1_1c_2: { tipo: "narracao", texto: "O Takeo fica imóvel. Totalmente. Por cinco segundos inteiros. Depois leva a mão na bochecha.", proxima: "c1_1c_3" },
    c1_1c_3: { quem: "takeo", texto: "...Isso foi um sim? Um talvez? Um obrigada pelo bolinho?", proxima: "c1_1c_4" },
    c1_1c_4: { quem: "eu", texto: "Foi um beijo na bochecha. Não complica.", proxima: "c1_1c_5" },
    c1_1c_5: { quem: "takeo", texto: "Tá. Não complico. Eu só vou ficar pensando nisso até o fim do ano.", proxima: "c1_09" },

    // (todas as opções continuam aqui)
    c1_09: { roupa: "fora", tipo: "narracao", texto: "Ele volta a balançar. Um pouco mais forte. Depois olha para ela de lado, com aquele sorriso de janela aberta.", proxima: "c1_10" },
    c1_10: { quem: "takeo", texto: "Quem vai mais alto?", proxima: "c1_11" },
    c1_11: { quem: "eu", texto: "Você perdia sempre.", proxima: "c1_12" },
    c1_12: { quem: "takeo", texto: "Eu tinha seis anos e pesava dezoito quilos. Agora eu sou um homem.", proxima: "c1_13" },
    c1_13: { tipo: "narracao", texto: "Os dois balançam. Mais alto. Mais alto. O Takeo grita na subida. Ela não grita. Ela dá impulso com as pernas, só um pouco mais forte do que devia, e o balanço dela sobe tanto que a corrente fica frouxa no topo.", proxima: "c1_14" },
    c1_14: { tipo: "narracao", efeito: "tremor", texto: "Por meio segundo, ela flutua. Lá em cima. Com a praça inteira laranja embaixo.", proxima: "c1_15" },
    c1_15: { quem: "takeo", texto: "DESCE DAÍ! VOCÊ VAI DAR A VOLTA NO FERRO! VOCÊ PARECE A SUA AVÓ GRITANDO NA JANELA E EU PAREÇO A SUA AVÓ GRITANDO NA JANELA!", proxima: "c1_16" },
    c1_16: { tipo: "narracao", texto: "Ela desce rindo. Freia com o pé. A areia voa. Ele está pendurado no balanço dele, com os óculos na ponta do nariz, rindo também.", proxima: "c1_17" },
    c1_17: { quem: "takeo", texto: "Você ganhou. De novo. Igual aos seis anos. Algumas coisas não mudam.", proxima: "c1_18" },
    c1_18: { quem: "eu", texto: "E outras mudam.", proxima: "c1_19" },
    c1_19: { tipo: "narracao", sprite: null, texto: "Ele não pergunta o que ela quis dizer. Só sorri. Eles ficam no balanço até o poste da praça acender.", proxima: "c2_01" },

    /* =================== CENA 2 — O RONCO =================== */
    // Cenário: frente da escola, segunda de manhã (usa "saida-colegio"). Música: rock, baixo pesado.
    // As motos ficam do outro lado da rua. Fora da escola.
    c2_01: { roupa: null, tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Segunda, 7h08 — Cena 2", sprite: null, texto: "Segunda-feira. Sete e oito da manhã. A SN e a Mio estão no portão quando a rua inteira começa a tremer.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", efeito: "tremor", texto: "Um ronco grave. Depois outro. Depois mais dois. Vindo da esquina da padaria. Os vidros da janela da secretaria vibram.", proxima: "c2_03" },
    c2_03: { tipo: "narracao", texto: "Quatro motos viram a esquina. Em fila. Devagar. Do jeito de quem quer que todo mundo veja.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", sprite: "kaito", texto: "Na frente, uma moto preta, com o tanque vermelho-escuro, cheia de peça que não combina, montada à mão. O ronco mais grave de todos. Em cima dela, de jaqueta escura e capacete aberto, o Kaito.", proxima: "c2_05" },
    c2_05: { tipo: "narracao", sprite: "blake", texto: "Atrás, uma moto enorme, preta fosca, sem um adesivo, sem um enfeite. O Blake. Ela parece ter sido feita para ele.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", sprite: "ryuji", texto: "Depois, uma moto amarela. Amarela de verdade. Com um raio pintado no tanque. O Ryuji, de óculos escuros, acenando para todo mundo como se fosse um desfile.", proxima: "c2_07" },
    c2_07: { tipo: "narracao", sprite: "victor", texto: "E por último, a mais barulhenta: uma moto velha, coberta de adesivo, com o escapamento soltando um estalo a cada dez metros. Pá. Pá. O Victor, sem capacete, com um pirulito na boca.", proxima: "c2_08" },
    c2_08: { tipo: "narracao", texto: "Eles estacionam do outro lado da rua, enfileirados na frente da banca de jornal. Desligam juntos. O silêncio depois é quase pior do que o barulho.", proxima: "c2_09" },
    c2_09: { tipo: "narracao", texto: "O portão inteiro está olhando. Os alunos do primeiro ano estão de boca aberta. Uma professora para no meio da escada.", proxima: "c2_10" },
    c2_10: { quem: "mio", sprite: "mio", texto: "Desde quando eles têm moto? DESDE QUANDO ELES TÊM MOTO?", proxima: "c2_11" },
    c2_11: { quem: "hana", sprite: "hana", texto: "Sempre tiveram. A do Kaito estava no conserto desde o começo do mês. A do Blake estava sem pneu. A do Ryuji estava sem documento. A do Victor só estava sem gasolina. Eu anoto as placas que passam na frente da minha casa.", proxima: "c2_12" },
    c2_12: { quem: "mio", sprite: "mio", texto: "Hana, isso é assustador.", proxima: "c2_13" },
    c2_13: { quem: "hana", sprite: "hana", texto: "É organizado.", proxima: "c2_14" },
    c2_14: { tipo: "pensamento", texto: "A bicicleta de entrega. Todo esse tempo. Era porque a moto estava no conserto. E eu achando que ele gostava de pedalar.", proxima: "c2_15" },
    c2_15: { tipo: "narracao", sprite: "ryuji", texto: "Os quatro atravessam a rua. O Ryuji vem na frente, tirando os óculos escuros com a maior lentidão possível.", proxima: "c2_16" },
    c2_16: { quem: "ryuji", texto: "Bom dia, plebe.", proxima: "c2_17" },
    c2_17: { quem: "eu", texto: "Ryuji. Sua moto é amarela.", proxima: "c2_18" },
    c2_18: { quem: "ryuji", texto: "O nome dela é Relâmpago. E ela não é amarela. Ela é dourada de luz.", proxima: "c2_19" },
    c2_19: { quem: "victor", sprite: "victor", texto: "Ela é amarela, cara. Parece um ônibus escolar.", proxima: "c2_20" },
    c2_20: { quem: "ryuji", sprite: "ryuji", texto: "A sua solta tiro!", proxima: "c2_21" },
    c2_21: { quem: "victor", sprite: "victor", texto: "É o charme. Ela anuncia que eu cheguei.", proxima: "c2_22" },
    c2_22: { tipo: "narracao", sprite: "kaito", texto: "O Kaito chega por último. Tira o capacete. Ajeita o cabelo com a mão. Para do lado dela no portão, como se nada.", proxima: "c2_23" },
    c2_23: { quem: "eu", texto: "Então era por isso a bicicleta de entrega.", proxima: "c2_24" },
    c2_24: { quem: "kaito", texto: "A embreagem quebrou. O tio e eu levamos três semanas pra achar a peça no ferro-velho.", proxima: "c2_25" },
    c2_25: { quem: "ryuji", sprite: "ryuji", texto: "Três semanas vendo o líder pedalar bicicleta de entrega com caixa térmica nas costas. Foi a coisa mais triste que eu já vi na minha vida.", proxima: "c2_26" },
    c2_26: { quem: "kaito", sprite: "kaito", texto: "Era bicicleta da lojinha. Ela é ótima.", proxima: "c2_27" },
    c2_27: { quem: "blake", sprite: "blake", texto: "Ela é lenta.", proxima: "c2_28" },
    c2_28: { quem: "kaito", sprite: "kaito", texto: "Você nunca andou nela.", proxima: "c2_29" },
    c2_29: { quem: "blake", sprite: "blake", texto: "Eu vi você subindo a ladeira da igreja.", proxima: "c2_30" },
    c2_30: { tipo: "narracao", sprite: null, texto: "O Kaito não responde. O sinal toca. Os quatro entram na escola. Dentro, são só alunos de novo. Uniforme, mochila, cara de sono. Lá fora, do outro lado da rua, as quatro motos ficam enfileiradas, brilhando no sol.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — No portão
    c2_esc2: { escolhas: [
      { texto: "A. “A sua é a mais bonita, Kaito. Só não fala pro Ryuji.”", proxima: "c2_2a_1", pontos: { kaito: 2 }, flags: ["Moto_bonita_Kaito"] },
      { texto: "B. “Ryuji, eu quero dar uma volta na Relâmpago.”", proxima: "c2_2b_1", pontos: { ryuji: 3 }, flags: ["Volta_Relampago"] },
      { texto: "C. “Victor, coloca um silenciador nesse negócio.”", proxima: "c2_2c_1", pontos: { victor: 2 }, flags: ["Silenciador_Victor"] }
    ]},
    c2_2a_1: { tipo: "narracao", sprite: "kaito", texto: "O Kaito para no degrau. Não vira. Mas a orelha fica vermelha.", proxima: "c2_2a_2" },
    c2_2a_2: { quem: "ryuji", sprite: "ryuji", texto: "EU OUVI ISSO!", proxima: "c3_01" },
    c2_2b_1: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji para. Vira. Coloca a mão no peito.", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "ryuji", texto: "Finalmente. Alguém com bom gosto nessa escola. Sexta-feira. Volta no quarteirão. Você vai sentir a luz dourada.", proxima: "c2_2b_3" },
    c2_2b_3: { quem: "blake", sprite: "blake", texto: "É amarela.", proxima: "c3_01" },
    c2_2c_1: { quem: "victor", sprite: "victor", texto: "Silenciador? Gatinha, ela não é uma moto. Ela é um anúncio. Se ela não fizer barulho, como as pessoas vão saber que eu cheguei?", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "eu", texto: "Elas vão saber pelo pirulito.", proxima: "c2_2c_3" },
    c2_2c_3: { tipo: "narracao", texto: "O Victor tira o pirulito da boca. Olha para ele. Olha para ela. Coloca de volta.", proxima: "c2_2c_4" },
    c2_2c_4: { quem: "victor", sprite: "victor", texto: "...Justo.", proxima: "c3_01" },

    /* =================== CENA 3 — O CAPACETE =================== */
    // Cenário: frente da escola, segunda à tarde. Música: rock leve.
    c3_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Cena 3 — O capacete", sprite: null, texto: "Na saída, a Mio vai embora com a Hana. O Takeo tem plantão na biblioteca. A SN atravessa o portão sozinha.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", sprite: "kaito", texto: "Do outro lado da rua, o Kaito está encostado na moto preta. Sozinho. Os outros já foram. Ele está segurando dois capacetes. Um preto, arranhado, o dele. E um novo. Vermelho-escuro. Igual ao tanque.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", texto: "Ela atravessa. Ele estende o capacete novo. Sem falar nada.", proxima: "c3_04" },
    c3_04: { quem: "eu", texto: "Esse é novo.", proxima: "c3_05" },
    c3_05: { quem: "kaito", texto: "O tio tinha sobrando.", proxima: "c3_06" },
    c3_06: { quem: "eu", texto: "Ainda está com a etiqueta.", proxima: "c3_07" },
    c3_07: { tipo: "narracao", texto: "Ele olha para a etiqueta pendurada. Arranca. Enfia no bolso. Muito rápido.", proxima: "c3_08" },
    c3_08: { quem: "kaito", texto: "Sobe. É caminho.", proxima: "c3_09" },
    c3_09: { quem: "eu", texto: "Nunca é caminho.", proxima: "c3_10" },
    c3_10: { quem: "kaito", texto: "Agora é. De moto, tudo é caminho.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — Garupa
    c3_esc3: { escolhas: [
      { texto: "A. Colocar o capacete e subir. Sem falar nada.", proxima: "c3_3a_1", pontos: { kaito: 2 }, flags: ["Garupa_Kaito"] },
      { texto: "B. “Se você correr demais, eu pulo.”", proxima: "c3_3b_1", pontos: { kaito: 2 }, flags: ["Garupa_Kaito", "Ameaca_pular"] },
      { texto: "C. “Na caixa térmica era mais confortável.”", proxima: "c3_3c_1", pontos: { kaito: 3 }, flags: ["Garupa_Kaito", "Caixa_termica_piada"] }
    ]},
    c3_3a_1: { tipo: "narracao", texto: "Ela coloca o capacete. Fica um pouco grande. Ele vê. Ajeita a fivela embaixo do queixo dela, com dois dedos, sem olhar nos olhos. Depois sobe na moto.", proxima: "c3_11" },
    c3_3b_1: { quem: "kaito", texto: "Você pula de uma moto andando?", proxima: "c3_3b_2" },
    c3_3b_2: { quem: "eu", texto: "Pulo. E caio de pé.", proxima: "c3_3b_3" },
    c3_3b_3: { tipo: "narracao", texto: "Ele olha para ela. Ele sabe que é verdade. Ele é o único que sabe que é verdade. Ele ri pelo nariz.", proxima: "c3_3b_4" },
    c3_3b_4: { quem: "kaito", texto: "Então eu não corro. Pra não estragar o seu tênis.", proxima: "c3_11" },
    c3_3c_1: { quem: "kaito", texto: "A caixa térmica tinha cheiro de cebolinha.", proxima: "c3_3c_2" },
    c3_3c_2: { quem: "eu", texto: "Eu gostava do cheiro de cebolinha.", proxima: "c3_3c_3" },
    c3_3c_3: { tipo: "narracao", texto: "Ele para. Olha para ela. Ela sabe que ele está pensando na cebolinha bordada. Ele sabe que ela sabe. Os dois desviam o olhar ao mesmo tempo.", proxima: "c3_3c_4" },
    c3_3c_4: { quem: "kaito", texto: "...Sobe logo.", proxima: "c3_11" },

    // (todas as opções continuam aqui)
    c3_11: { tipo: "narracao", efeito: "tremor", texto: "Ela sobe. A moto ronca. O banco vibra. Ela segura na jaqueta dele, pelos lados. Ele espera um segundo. E sai.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", texto: "A rua passa rápido. Muito mais rápido que a bicicleta. O vento entra pela abertura do capacete. Na descida da igreja, ele não freia. Ela não grita. Ela ri. Alto. Dentro do capacete.", proxima: "c3_13" },
    c3_13: { quem: "kaito", texto: "TÁ RINDO DE QUÊ?", proxima: "c3_14" },
    c3_14: { quem: "eu", texto: "DA SUA MOTO! ELA É MUITO MELHOR QUE A BICICLETA!", proxima: "c3_15" },
    c3_15: { quem: "kaito", texto: "EU SEI!", proxima: "c3_16" },
    c3_16: { tipo: "narracao", texto: "No viaduto, ele diminui. Não por causa do trânsito. O sol está baixo, batendo nos prédios, e a cidade inteira aparece lá embaixo. Ele vai devagar o viaduto inteiro. Ela entende por quê. Ele queria que ela visse.", proxima: "c3_17" },
    c3_17: { tipo: "pensamento", texto: "Eu já vi essa cidade de cima mil vezes. Do ônibus, do metrô, da janela do trabalho. Nunca desse jeito.", proxima: "c4_01" },

    /* =================== CENA 4 — CARRO PRETO =================== */
    // Cenário: rua do prédio da SN, fim de tarde (usa "saida-colegio"). Música: corta. Baixo grave.
    c4_01: { tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", legenda: "Cena 4 — Carro preto", texto: "Na rua do prédio dela, ele vira a esquina devagar. E para. No meio da rua. Com o motor ligado.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "Do outro lado da calçada, na frente do portão do prédio dela, um carro preto. Vidros escuros. Motor ligado também. Parado ali como quem espera alguém sair.", proxima: "c4_03" },
    c4_03: { tipo: "narracao", texto: "A SN sente as costas do Kaito ficarem duras embaixo da mão dela. Ela conhece o carro. Ela viu na praça.", proxima: "c4_04" },
    c4_04: { quem: "kaito", texto: "Você conhece esse carro.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "Não é pergunta.", proxima: "c4_06" },
    c4_06: { quem: "eu", texto: "Passou na praça. Domingo passado. Quando eu estava com o Ryuji.", proxima: "c4_07" },
    c4_07: { quem: "kaito", texto: "O Ryuji me contou de um cara de terno. Não me contou do carro.", proxima: "c4_08" },
    c4_08: { quem: "kaito", texto: "Desce. Fica aqui.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — O carro preto
    c4_esc4: { escolhas: [
      { texto: "A. Descer. E ficar. Ele sabe o que está fazendo.", proxima: "c4_4a_1", pontos: { kaito: 2 }, flags: ["Ficou_calcada_carro"] },
      { texto: "B. Não descer. “Se você vai até lá, eu vou junto.”", proxima: "c4_4b_1", pontos: { kaito: 3, desvio: 1 }, flags: ["Foi_junto_carro"] },
      { texto: "C. Descer e ir andando direto para o portão do prédio, passando do lado do carro, sem olhar.", proxima: "c4_4c_1", pontos: { desvio: 1 }, flags: ["Passou_carro"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "Ela desce. Fica na calçada, com o capacete na mão. O Kaito acelera. Devagar. A moto anda até o carro e para do lado da janela do motorista. A centímetros.", proxima: "c4_4a_2" },
    c4_4a_2: { tipo: "narracao", efeito: "tremor", texto: "Ele não fala nada. Não bate no vidro. Só fica ali. E acelera a moto parada. Uma vez. O ronco grave enche a rua inteira e faz os vidros do prédio tremer.", proxima: "c4_09" },
    c4_4b_1: { tipo: "narracao", texto: "Ele vira a cabeça. Olha para ela por cima do ombro. Ela não desce. Ele sabe que ela não vai descer.", proxima: "c4_4b_2" },
    c4_4b_2: { quem: "kaito", texto: "...Segura firme.", proxima: "c4_4b_3" },
    c4_4b_3: { tipo: "narracao", efeito: "tremor", texto: "A moto anda até o carro. Para do lado da janela do motorista. Os dois em cima da moto, olhando para o vidro escuro. Sem falar nada. O Kaito acelera parado. O ronco faz os vidros do prédio tremerem.", proxima: "c4_09" },
    c4_4c_1: { tipo: "narracao", texto: "Ela desce. Tira o capacete. E anda. Pela calçada. Do lado do carro. Bem do lado. Devagar. Sem olhar para o vidro. Como quem passa por um poste.", proxima: "c4_4c_2" },
    c4_4c_2: { tipo: "narracao", texto: "Atrás dela, ela ouve a moto do Kaito andando junto, no meio da rua, no mesmo ritmo dos passos dela. Ele não fala nada. Ele só acompanha.", proxima: "c4_09" },

    // (todas as opções continuam aqui)
    c4_09: { tipo: "narracao", texto: "Por três segundos, nada acontece.", proxima: "c4_10" },
    c4_10: { tipo: "narracao", texto: "Depois o carro preto liga o pisca. Sai devagar. Sem pressa nenhuma. Vira a esquina. Some.", proxima: "c4_11" },
    c4_11: { tipo: "narracao", sprite: "kaito", texto: "O Kaito desliga a moto. O silêncio volta para a rua. Um senhor na janela do segundo andar fecha a cortina.", proxima: "c4_12" },
    c4_12: { quem: "kaito", texto: "Amanhã eu te busco. Sete horas.", proxima: "c4_13" },
    c4_13: { quem: "eu", texto: "Eu sei me cuidar, Kaito.", proxima: "c4_14" },
    c4_14: { quem: "kaito", texto: "Eu sei que sabe. Eu vi o que você faz com uma barra de ferro.", proxima: "c4_15" },
    c4_15: { quem: "kaito", texto: "Eu vou buscar mesmo assim. Não porque você precisa. Porque eu quero saber quem está mandando um carro ficar parado na frente da sua casa.", proxima: "c4_16" },
    c4_16: { tipo: "narracao", texto: "Ele fala isso sem levantar a voz. Do jeito que fala quando já decidiu. Ela não discute. Tem coisa que não vale a pena discutir com o Kaito.", proxima: "c4_cam1" },
    c4_cam1: { caminhos: [
      { flag: "Lan_todo_sabado", proxima: "c4_lan" }
    ], proxima: "c4_17" },
    c4_lan: { quem: "kaito", texto: "E sábado tem lan. Você ainda me deve uma revanche.", proxima: "c4_lan2" },
    c4_lan2: { quem: "eu", texto: "Eu não te devo nada. Você perdeu.", proxima: "c4_lan3" },
    c4_lan3: { quem: "kaito", texto: "Por isso que é revanche.", proxima: "c4_17" },
    c4_17: { tipo: "narracao", sprite: null, texto: "Ela devolve o capacete. Ele não pega.", proxima: "c4_18" },
    c4_18: { quem: "kaito", sprite: "kaito", texto: "Fica. É seu. O tio não precisa.", proxima: "c4_19" },
    c4_19: { tipo: "narracao", sprite: null, texto: "Ele liga a moto e vai. O ronco some na esquina, na mesma direção que o carro preto foi. Ela fica na calçada segurando um capacete vermelho-escuro, igual ao tanque.", proxima: "c4_20" },
    c4_20: { tipo: "pensamento", texto: "Alguém está mandando um carro me seguir. Alguém que tem tempo, dinheiro e paciência.", proxima: "c4_21" },
    c4_21: { tipo: "pensamento", texto: "Ótimo. Eu também tenho.", proxima: "ep_fim" },

    // Fim do Capítulo 22 (crie a entrada "capitulo22" em dados/capitulos.js).
    ep_fim: { fim: "capitulo22" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 23 (anotações do roteiro)
 *  • O Takeo se declarou no balanço. Ele não pediu resposta. (Takeo_tempo / Takeo_eu_sei / Beijo_bochecha_Takeo)
 *  • A gangue do Kaito voltou a andar de moto. As motos ficam do lado de fora da escola.
 *  • O Kaito deu um capacete vermelho-escuro para a SN. Vai buscar ela às sete, a partir de terça.
 *  • O carro preto estava parado na frente do prédio da SN. O Kaito foi atrás dele quando saiu.
 *    O Kaito agora sabe do carro e do homem de terno. Ele não sabe ainda que é coisa do Ren.
 *  • Ryuji: volta na Relâmpago na sexta (Volta_Relampago).
 *
 * ESCOLHAS DO CAPÍTULO (4)
 *  1 Resposta para o Takeo · 2 No portão · 3 Garupa · 4 O carro preto
 *
 * FLAGS NOVAS
 *  Takeo_tempo · Takeo_eu_sei · Beijo_bochecha_Takeo · Moto_bonita_Kaito · Volta_Relampago
 *  Silenciador_Victor · Garupa_Kaito · Ameaca_pular · Caixa_termica_piada · Ficou_calcada_carro
 *  Foi_junto_carro · Passou_carro
 */