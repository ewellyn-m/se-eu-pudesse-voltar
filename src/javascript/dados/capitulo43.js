/*
 * =====================================================================
 *  CAPÍTULO 43 — A pé
 *  Sábado (curto) e segunda-feira, depois do Capítulo 42.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Cenas com todos os meninos em todas as rotas. Bloco de rota à noite.
 *
 *  CONTEXTO (Cap. 42)
 *    • O Kaito ficou distante, repetiu a frase da Serena ("você trata todo mundo igual").
 *    • Na chuva, ele olhou pra SN e levou a Serena na garupa, com o capacete vermelho da SN. Não fechou a fivela dela.
 *    • O celular vibrou duas vezes à meia-noite. A SN não olhou.
 *    • Sábado, 19h: a placa da oficina do Victor, quando a mãe dele chega.
 *
 *  O QUE ACONTECE
 *    • Sábado: as mensagens da meia-noite eram do Kaito. Ela não responde. A placa do Victor (curto).
 *    • Segunda, 7h: o Kaito NÃO vem. Ele foi buscar a Serena (ela ligou chorando às 6h20). Story: "carona de novo 🤍".
 *      A SN vai a pé, sozinha. No portão, ele chega com a Serena de garupa e tenta falar. "Eu sou o quê?"
 *    • A FORÇA: com raiva, a SN quebra coisas sem querer, sem conseguir controlar (celular, caixote, portão, pia, maçaneta).
 *    • Escola normal, todos os meninos. A SN não senta no banco. A Serena devolve o "obrigada pelo capacete".
 *    • Saída: o Kaito espera do lado da moto. Ela passa e vai a pé de novo.
 *    • Bloco de rota à noite.
 *
 *  REGRAS
 *    • Sala da SN: Takeo, Mio, Hana, Reina, Ren, Akane. Kaito, Blake, Ryuji, Victor e Serena são de outras salas.
 *    • Sem xadrez no Ren. O Ren não manda mensagem. Sem narrar roupa. Sem flashback.
 *    • A Serena não explica plano nenhum. O Kaito fica em dúvida, não com raiva da SN.
 *    • A SN não é vítima: ela está com raiva, e decide.
 *
 *  PERSONAGENS
 *    Mio, Hana, Reina, Kaito, Takeo, Victor, Blake, Ryuji, Ren, Serena, Caramelo.
 *    Sem sprite / rótulo: Victor, Ren, Mãe do Victor.
 *
 *  CENÁRIOS
 *    quarto-sn · beco-mercado (garagem do Victor / rua) · apartamento (hall) · saida-colegio · sala-de-aula
 *    patio-fundos · corredor · vestiario
 *
 *  Crie a entrada "capitulo43" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo43", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — SÁBADO DE MANHÃ =================== */
    c1_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Sábado, 9h — Cena 1", sprite: null, texto: "Sábado. Ela acorda tarde, com o travesseiro marcado no rosto e o celular ainda virado para baixo em cima da mesinha, do mesmo jeito que ela deixou à meia-noite.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "Ela fica olhando para ele um tempo, sem pegar, como quem olha um bicho que pode morder. Depois pega.", proxima: "c1_03" },
    c1_03: { quem: "mensagem", rotulo: "Mensagem — Kaito (00h04)", texto: "Desculpa.", proxima: "c1_04" },
    c1_04: { quem: "mensagem", rotulo: "Mensagem — Kaito (00h11)", texto: "Segunda eu passo. Sete horas.", proxima: "c1_05" },
    c1_05: { tipo: "pensamento", texto: "Desculpa. Desculpa pelo quê? Ele não diz. Ele nunca diz. Sete minutos entre uma mensagem e outra, e nesses sete minutos ele não achou uma palavra a mais pra colocar.", proxima: "c1_06" },
    c1_06: { tipo: "narracao", texto: "O dedo dela fica em cima do teclado. Ela escreve “desculpa pelo quê”. Apaga. Escreve “não precisa passar”. Apaga. Escreve “ok”. Apaga também.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", texto: "Ela bloqueia a tela e deixa o celular em cima da cama, com as duas mensagens lá, lidas, sem resposta.", proxima: "c1_08" },
    c1_08: { tipo: "pensamento", texto: "Ele escolheu ela. Na frente do portão inteiro, olhando pra mim. Então que fique com ela.", proxima: "c1_09" },
    c1_09: { caminhos: [
      { flag: "Rota_Kaito", proxima: "c1_09k" }
    ], proxima: "c1_09d" },
    c1_09k: { tipo: "pensamento", texto: "Eu beijei ele. No jardim da Reina, com a música lá dentro, eu beijei ele e ele me beijou de volta como se fosse a coisa mais certa do mundo. E uma semana depois ele coloca o meu capacete na cabeça de outra.", proxima: "c1_10" },
    c1_09d: { tipo: "pensamento", texto: "A boca dele encostou na minha no hall, um segundo, e eu passei semanas pensando nesse segundo. O forno. O cookie. As sete horas. E ele coloca o meu capacete na cabeça de outra.", proxima: "c1_10" },
    c1_10: { tipo: "pensamento", texto: "Eu sou o quê, então? A que fecha a fivela sozinha?", proxima: "c1_11" },
    c1_11: { tipo: "narracao", texto: "Ela levanta. Lava o rosto com água fria, duas vezes. E decide que hoje ela não vai passar o dia inteiro deitada olhando para o teto por causa de um menino de moto. Hoje tem uma placa.", proxima: "c2_01" },

    /* =================== CENA 2 — A PLACA =================== */
    c2_01: { roupa: "fora", foto: "caramelo", tipo: "narracao", cenario: "quintal-victor", transicao: "tempo", legenda: "Sábado, 18h50 — Cena 2", sprite: null, texto: "Às sete menos dez, ela chega na garagem do Victor. A porta de enrolar está aberta pela metade, o rádio velho tocando baixinho, e a placa está pendurada em cima da porta da oficina, coberta com um lençol de florzinha preso com fita crepe.", proxima: "c2_02" },
    c2_02: { sprite: "victor", tipo: "narracao", texto: "O Victor está na calçada, andando de um lado para o outro, com o Caramelo atrás dele andando de um lado para o outro também, porque o Caramelo acha que é um jogo.", proxima: "c2_03" },
    c2_03: { quem: "victor", texto: "Você veio. Você veio mesmo. Eu achei que você não ia vir, depois de ontem. Eu ia entender. Mas você veio.", proxima: "c2_04" },
    c2_04: { quem: "eu", texto: "Eu prometi.", proxima: "c2_05" },
    c2_05: { tipo: "narracao", texto: "Ele para de andar. Olha para ela. Parece que vai falar alguma coisa sobre ontem, sobre a chuva, sobre o capacete. Não fala. Só faz que sim, sério, e entrega para ela a ponta do barbante que segura o lençol.", proxima: "c2_06" },
    c2_06: { quem: "victor", texto: "Quando ela virar a esquina, você puxa. Eu não consigo. A minha mão está tremendo. Olha. Tremendo. Eu nunca tremo.", proxima: "c2_07" },
    c2_07: { tipo: "narracao", texto: "Às sete e cinco, uma mulher vira a esquina, devagar, com a bolsa no ombro e o andar de quem trabalhou o dia inteiro em pé. O Caramelo sai correndo na direção dela, latindo. Ela abaixa para fazer carinho nele, rindo, cansada.", proxima: "c2_08" },
    c2_08: { quem: "victor", texto: "Agora. Agora, agora, agora.", proxima: "c2_09" },
    c2_09: { tipo: "narracao", texto: "Ela puxa o barbante. O lençol de florzinha escorrega devagar, a fita crepe soltando de um lado, depois do outro, até cair inteiro na calçada. E a placa aparece, com o nome da mãe dele pintado reto, em azul, em cima da porta da oficina.", proxima: "c2_10" },
    c2_10: { tipo: "narracao", texto: "A mãe do Victor para no meio da calçada. Com a mão ainda no Caramelo. Olhando para cima.", proxima: "c2_11" },
    c2_11: { quem: "desconhecido", rotulo: "Mãe do Victor", texto: "...Victor. O que é isso.", proxima: "c2_12" },
    c2_12: { quem: "victor", texto: "É a sua oficina, mãe. Sempre foi. Agora está escrito.", proxima: "c2_13" },
    c2_13: { tipo: "narracao", texto: "Ela não fala mais nada. Ela coloca a mão na boca e chora, ali mesmo, no meio da calçada, com a bolsa escorregando do ombro. O Victor vai até ela e abraça, e ela abraça de volta com tanta força que ele fica na ponta do pé.", proxima: "c2_14" },
    c2_14: { tipo: "narracao", texto: "A SN fica parada na porta da garagem, com o barbante na mão, e sente o olho arder. Não é por causa do Kaito. Pela primeira vez desde ontem, não é por causa do Kaito.", proxima: "c2_15" },
    c2_15: { quem: "desconhecido", rotulo: "Mãe do Victor", texto: "E você é a menina da placa. Ele falou de você a semana inteira. Entra. Entra que eu vou fazer um café. Não, um café não, um jantar. Victor, vai no mercado comprar margarina.", proxima: "c2_16" },
    c2_16: { quem: "victor", texto: "Mãe, eu já comprei margarina. Tem margarina pra um ano.", proxima: "c2_17" },
    c2_17: { tipo: "narracao", texto: "Ela ri. A SN ri. O Victor fica vermelho até a orelha. E, por uma hora inteira, na cozinha pequena da casa dele, com o Caramelo debaixo da mesa esperando cair arroz, ela não pensa em capacete nenhum.", proxima: "c2_18" },
    c2_18: { tipo: "narracao", texto: "Quando ela vai embora, o Victor acompanha ela até a esquina. Para ali, com as mãos no bolso.", proxima: "c2_19" },
    c2_19: { quem: "victor", texto: "Obrigado. De novo. Eu vou ficar falando obrigado pra você até ficar chato.", proxima: "c2_esc1" },

    // ▶ ESCOLHA 1 — Na esquina
    c2_esc1: { escolhas: [
      { texto: "A. “Já está chato.” E sorrir.", proxima: "c2_1a_1", pontos: { victor: 2 }, flags: ["Ja_chato"] },
      { texto: "B. “Obrigada você. Eu precisava de hoje.”", proxima: "c2_1b_1", pontos: { victor: 3 }, flags: ["Precisava_hoje"] },
      { texto: "C. Abraçar ele. Rápido. E ir embora antes que ele fale alguma coisa.", proxima: "c2_1c_1", pontos: { victor: 3 }, flags: ["Abraco_esquina"] }
    ]},
    c2_1a_1: { quem: "eu", texto: "Já está chato.", proxima: "c2_1a_2" },
    c2_1a_2: { quem: "victor", texto: "Ótimo. Então eu estou no caminho certo.", proxima: "c3_01" },
    c2_1b_1: { quem: "eu", texto: "Obrigada você. Eu precisava de hoje.", proxima: "c2_1b_2" },
    c2_1b_2: { tipo: "narracao", texto: "Ele olha para ela, sem piada nenhuma. Faz que sim, devagar, como quem guarda uma coisa no bolso para olhar depois.", proxima: "c3_01" },
    c2_1c_1: { tipo: "narracao", texto: "Ela abraça ele. Rápido. Ele fica com os braços parados no ar, sem saber o que fazer. Quando ele decide abraçar de volta, ela já soltou e já está andando, e ele fica ali na esquina, abraçando o nada, com o Caramelo olhando para ele sem entender.", proxima: "c3_01" },

    /* =================== CENA 3 — SEGUNDA, SETE HORAS =================== */
    c3_01: { roupa: "escolar", tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Segunda, 6h50 — Cena 3", sprite: null, texto: "Segunda-feira. Ela acorda antes do despertador, se arruma, coloca a mochila nas costas e fica parada na sala, olhando para o relógio da cozinha, com o celular na mão.", proxima: "c3_02" },
    c3_02: { tipo: "pensamento", texto: "“Segunda eu passo. Sete horas.” Se ele vier, eu desço. Eu desço, mas eu não subo na moto antes de ele falar. Ele vai ter que falar.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", texto: "Sete horas. Ela fica ouvindo a rua. Um ônibus. Um cachorro. A vizinha do segundo andar descendo a escada. Nenhum ronco de moto.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", texto: "Sete e cinco. Nada. O celular não vibra. Nem “embaixo”. Nem nada.", proxima: "c3_05" },
    c3_05: { tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", texto: "Sete e dez. Ela desce mesmo assim. Os três degraus da fita preta. E o hall está vazio. O pedaço de parede onde ele encosta toda manhã está ali, vazio, só a parede.", proxima: "c3_06" },
    c3_06: { tipo: "pensamento", texto: "Ele está atrasado. Só isso. Pneu furado. O tio pediu alguma coisa. Ele está atrasado.", proxima: "c3_07" },
    c3_07: { tipo: "narracao", texto: "O celular vibra. O coração dela pula. Não é ele. É a Mio. Um print, sem nenhuma palavra.", proxima: "c3_08" },
    c3_08: { tipo: "narracao", texto: "Um story da Serena, postado às sete e dois. A foto é de cima, da garupa, mostrando um pedaço da jaqueta preta na frente e, no reflexo do retrovisor, um capacete vermelho. Na legenda: “carona de novo 🤍 meu pé agradece”.", proxima: "c3_09" },
    c3_09: { tipo: "narracao", efeito: "tremor", texto: "Um estalo. Seco. Embaixo do polegar dela, a tela do celular racha, uma teia fina saindo do canto e atravessando a foto da Serena de ponta a ponta.", proxima: "c3_10" },
    c3_10: { tipo: "pensamento", texto: "Eu não apertei. Eu juro que não apertei. Eu só estava segurando.", proxima: "c3_11" },
    c3_11: { tipo: "pensamento", texto: "É sempre assim quando eu fico desse jeito. A força escapa sozinha, como água de um balde cheio demais. Eu não mando nela. Ela que manda em mim.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", texto: "Ela coloca o celular rachado no bolso, devagar, com cuidado, como quem guarda uma coisa que pode explodir. E abre a porta do prédio com dois dedos só, para não arrancar a maçaneta.", proxima: "c3_13" },
    c3_13: { tipo: "pensamento", texto: "Ele escolheu ela. De novo. Ele mandou “segunda eu passo” e passou na casa dela. Então que fique com ela.", proxima: "c3_14" },
    c3_14: { tipo: "narracao", cenario: "rua", transicao: "tempo", texto: "Ela vai a pé. Sozinha. Pela calçada, pelo beco do mercado, entre as caixas de verdura e os carrinhos de mão, com o cheiro de banana madura e o sol começando a esquentar a nuca.", proxima: "c3_15" },
    c3_15: { tipo: "narracao", texto: "No meio do beco, ela apoia a mão num caixote de madeira para desviar de um carrinho. O caixote afunda. As tábuas estalam e abrem para os lados, e uma avalanche de laranjas rola pelo chão do beco.", proxima: "c3_16" },
    c3_16: { quem: "desconhecido", rotulo: "Feirante", texto: "Ô, menina! O que você comeu no café?!", proxima: "c3_17" },
    c3_17: { tipo: "narracao", texto: "Ela pede desculpa três vezes, catando laranja no chão, com as mãos tremendo, segurando cada laranja com a pontinha dos dedos para não esmagar. Deixa todas as moedas que tem no bolso em cima da banca. E sai rápido, antes que mais alguma coisa quebre.", proxima: "c3_18" },
    c3_18: { tipo: "pensamento", texto: "Eu não vou chorar. Eu tenho vinte e oito anos por dentro. Eu não vou chorar no beco do mercado por causa de um menino de moto.", proxima: "c3_19" },
    c3_19: { tipo: "narracao", texto: "Ela não chora. Ela anda. Vinte minutos. As pernas dela são fortes, e a raiva ajuda. Ela chega na escola cinco minutos antes do sinal, com o rosto vermelho de andar rápido.", proxima: "c4_01" },

    /* =================== CENA 4 — O PORTÃO =================== */
    c4_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Segunda, 7h25 — Cena 4", sprite: "serena", texto: "Do outro lado da rua, a moto, no lugar de sempre. E na garupa, descendo devagar, apoiada no braço do Kaito, a Serena, tirando o capacete vermelho com as duas mãos, como quem tira uma coroa.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "Ela entrega o capacete para ele com um sorriso. Ele pega. Pendura no guidão. E aí ele levanta os olhos e vê a SN chegando a pé, pela calçada, sozinha.", proxima: "c4_03" },
    c4_03: { tipo: "narracao", sprite: "kaito", texto: "A cara dele muda. Ele olha para o relógio do celular. Olha para ela. E ela vê, no rosto dele, o exato segundo em que ele entende o que fez. Ele atravessa a rua quase correndo, deixando a Serena na calçada.", proxima: "c4_04" },
    c4_04: { quem: "kaito", texto: "SN. Eu ia passar. Eu ia passar depois, eu...", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "Ela para na frente do portão. Ele para na frente dela. As meninas que sempre olham para o Kaito estão olhando. A rede de fofoca está olhando. Ela não liga.", proxima: "c3_esc2" },

    // ▶ ESCOLHA 2 — No portão
    c3_esc2: { escolhas: [
      { texto: "A. “Eu sou o quê, Kaito?”", proxima: "c3_2a_1", pontos: { kaito: 2 }, flags: ["Eu_sou_o_que"] },
      { texto: "B. “Você escolheu ela. Então fica com ela.”", proxima: "c3_2b_1", pontos: { kaito: 1 }, flags: ["Fica_com_ela"] },
      { texto: "C. “Não precisa passar mais. Eu vou a pé. Todo dia.”", proxima: "c3_2c_1", pontos: {}, flags: ["Vou_a_pe"] }
    ]},
    c3_2a_1: { quem: "eu", texto: "Eu sou o quê, Kaito? Você manda “segunda eu passo, sete horas”, e eu fico no hall esperando, olhando pra parede, e você está na casa dela. Com o meu capacete. De novo.", proxima: "c3_2a_2" },
    c3_2a_2: { caminhos: [
      { flag: "Rota_Kaito", proxima: "c3_2a_3k" }
    ], proxima: "c3_2a_3d" },
    c3_2a_3k: { quem: "eu", texto: "Eu te beijei. Você lembra disso? Ou ela falou alguma coisa e você esqueceu?", proxima: "c3_2a_4" },
    c3_2a_3d: { quem: "eu", texto: "Você nem falou comigo. Você nem me perguntou nada. Ela falou alguma coisa e você acreditou, e eu nem sei o que foi.", proxima: "c3_2a_4" },
    c3_2a_4: { quem: "kaito", texto: "Ela ligou. Seis e vinte. Chorando. A mãe dela tinha saído, o pé... Eu achei que dava tempo. Levar ela e voltar pra te buscar.", proxima: "c3_2a_5" },
    c3_2a_5: { quem: "eu", texto: "Voltar depois. Então é isso que eu sou. O depois.", proxima: "c3_2a_6" },
    c3_2a_6: { tipo: "narracao", texto: "A voz dela não treme. Ela fica surpresa com isso. Ele abre a boca. Fecha. Não tem nada para colocar ali.", proxima: "c4_06" },
    c3_2b_1: { quem: "eu", texto: "Você escolheu ela. Então fica com ela.", proxima: "c3_2b_2" },
    c3_2b_2: { quem: "kaito", texto: "Não é isso. Ela ligou chorando, ela...", proxima: "c3_2b_3" },
    c3_2b_3: { quem: "eu", texto: "Ela sempre liga chorando, Kaito. Ela sempre está chorando quando você está olhando.", proxima: "c3_2b_4" },
    c3_2b_4: { tipo: "narracao", texto: "Ele olha para trás, sem querer, para a calçada do outro lado. A Serena está lá, com a mão no peito, a cara preocupada, perfeita. Quando ele volta a olhar para a SN, ela vê a dúvida passando no rosto dele, e odeia ver.", proxima: "c4_06" },
    c3_2c_1: { quem: "eu", texto: "Não precisa passar mais. Eu vou a pé. Todo dia.", proxima: "c3_2c_2" },
    c3_2c_2: { quem: "kaito", texto: "SN, são vinte minutos, eu...", proxima: "c3_2c_3" },
    c3_2c_3: { quem: "eu", texto: "Eu sei andar. Eu sei fechar fivela sozinha também. Você me ensinou isso na sexta.", proxima: "c3_2c_4" },
    c3_2c_4: { tipo: "narracao", texto: "A frase acerta ele no meio do peito. Ela vê. A mão dele, que estava levantando na direção do braço dela, para no ar e abaixa.", proxima: "c4_06" },

    // (todas as opções continuam aqui)
    c4_06: { tipo: "narracao", sprite: null, texto: "Ela passa por ele. Na passagem, a mão dela fecha na barra do portão, só para se apoiar, só para dar o passo.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", efeito: "tremor", texto: "O ferro range. Um gemido de metal, comprido. Quando ela solta, a barra está torta, envergada para dentro, com a marca dos dedos dela na tinta verde.", proxima: "c4_08" },
    c4_08: { tipo: "pensamento", texto: "Não. Não, não, não. Ninguém viu. Ninguém pode ter visto.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "Ela não para. Ela entra, andando rápido, com a mão fechada encostada na barriga, como se pudesse prender a força ali dentro. Atrás dela, alguém comenta que o portão sempre foi meio torto. Alguém concorda.", proxima: "c4_10" },
    c4_10: { tipo: "narracao", sprite: "serena", texto: "E, mais atrás, a voz da Serena, doce, preocupada, alta o suficiente para chegar no pátio.", proxima: "c4_11" },
    c4_11: { quem: "serena", texto: "Kaito... ela está brava com você? Por minha causa? Ai, eu não queria... eu falei pra você que eu podia ir de ônibus...", proxima: "c4_12" },
    c4_12: { tipo: "narracao", sprite: null, texto: "Ela não falou. A SN sabe que ela não falou. E ela não vira para ver a cara dele ouvindo aquilo.", proxima: "c5_01" },

    /* =================== CENA 5 — A SALA =================== */
    c5_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Primeira aula — Cena 5", sprite: "mio", texto: "Na sala, a Mio está em pé do lado da carteira dela, esperando, com o celular na mão.", proxima: "c5_02" },
    c5_02: { quem: "mio", texto: "Você veio a pé. E ele chegou com ela. A rede inteira viu. E alguém está dizendo que um caminhão bateu no portão, porque a grade amanheceu torta.", proxima: "c5_03" },
    c5_03: { quem: "eu", texto: "Eu vim a pé.", proxima: "c5_04" },
    c5_04: { tipo: "narracao", texto: "A Mio olha para ela. Olha para a mão dela, ainda fechada. E, em vez de perguntar mais, abraça ela de lado, forte, rápido, do jeito que a Mio abraça quando não sabe o que falar.", proxima: "c5_05" },
    c5_05: { quem: "mio", texto: "Eu estou com raiva e com vontade de chorar ao mesmo tempo. Senta. Eu vou ficar do seu lado o dia inteiro. No banheiro também. Não discute.", proxima: "c5_06" },
    c5_06: { tipo: "narracao", sprite: "hana", texto: "A Hana chega com a prancheta e coloca em cima da carteira dela, sem falar nada, um papel. É uma tabela. “Segunda-feira — plano de contenção”. Tem horário de intervalo, rota alternativa para o banheiro que não passa pelo corredor do bloco C, e, no final, escrito à mão: “chocolate às 10h15”.", proxima: "c5_07" },
    c5_07: { quem: "hana", texto: "É provisório. Eu fiz ontem à noite. Eu posso ajustar.", proxima: "c5_08" },
    c5_08: { tipo: "narracao", sprite: "reina", texto: "A Reina, da carteira da frente, vira só a cabeça, com o cabelo perfeito de segunda-feira.", proxima: "c5_09" },
    c5_09: { quem: "reina", texto: "Eu não vou comentar. Eu só quero dizer que na minha casa, na sexta da festa, eu vi quem estava com cara de boba olhando pra quem. E não era você olhando pra ele. Quer dizer, era também. Mas era mais ele. Pronto. Comentei.", proxima: "c5_10" },
    c5_10: { tipo: "narracao", sprite: "takeo:escolar", texto: "O Takeo, da carteira de trás, não cutuca o ombro dela hoje. Ele coloca, em cima da carteira dela, sem falar nada, uma bala de gengibre da avó. Embrulhada no papel de sempre.", proxima: "c5_11" },
    c5_11: { quem: "takeo", sprite: "takeo:escolar", texto: "A minha avó disse que é pra quem andou muito. Eu não contei nada pra ela. Ela adivinhou. Ela adivinha tudo.", proxima: "c5_12" },
    c5_12: { quem: "takeo", sprite: "takeo:escolar", texto: "Quarta-feira eu tiro o gesso. Se você quiser, quarta-feira eu te levo a pé. Com dois braços. Eu sou péssimo de moto mesmo.", proxima: "c5_esc3" },

    // ▶ ESCOLHA 3 — Na sala
    c5_esc3: { escolhas: [
      { texto: "A. Pegar a bala. “Fala pra sua avó que ela adivinhou certo.”", proxima: "c5_3a_1", pontos: { takeo: 3 }, flags: ["Avo_adivinhou"] },
      { texto: "B. “Quarta-feira, então. A pé. Com dois braços.”", proxima: "c5_3b_1", pontos: { takeo: 3 }, flags: ["Quarta_a_pe"] },
      { texto: "C. Rir. “Takeo, você não sabe nem andar de bicicleta.”", proxima: "c5_3c_1", pontos: { takeo: 2 }, flags: ["Nem_bicicleta"] }
    ]},
    c5_3a_1: { quem: "eu", texto: "Fala pra sua avó que ela adivinhou certo.", proxima: "c5_3a_2" },
    c5_3a_2: { tipo: "narracao", texto: "Ela coloca a bala na boca. O gengibre arde. É bom. O Takeo sorri e volta para o caderno, satisfeito, como quem entregou uma encomenda importante.", proxima: "c5_13" },
    c5_3b_1: { quem: "eu", texto: "Quarta-feira, então. A pé. Com dois braços.", proxima: "c5_3b_2" },
    c5_3b_2: { tipo: "narracao", texto: "O Takeo fica parado um segundo, como se não esperasse que ela fosse aceitar. Depois faz que sim, sério, e escreve alguma coisa na capa do caderno. Ela vê de canto de olho. “Quarta. A pé.” Sublinhado duas vezes.", proxima: "c5_13" },
    c5_3c_1: { quem: "eu", texto: "Takeo, você não sabe nem andar de bicicleta.", proxima: "c5_3c_2" },
    c5_3c_2: { quem: "takeo", sprite: "takeo:escolar", texto: "Por isso que é a pé. Eu pensei em tudo.", proxima: "c5_13" },

    // (todas as opções continuam aqui)
    c5_13: { tipo: "narracao", sprite: "ren", texto: "Perto da porta, o Ren está lendo, como sempre. Quando ela senta, ele levanta os olhos do livro. Olha para o tênis dela, ainda com poeira da rua. Depois para ela.", proxima: "c5_14" },
    c5_14: { quem: "ren", texto: "Andou bem.", proxima: "c5_15" },
    c5_15: { tipo: "narracao", texto: "E volta para o livro. Duas palavras. Ela não sabe se é sobre o caminho ou sobre o portão. Ela não pergunta. Ela não quer que o Ren seja a pessoa que entendeu primeiro.", proxima: "c6_01" },

    /* =================== CENA 6 — O INTERVALO =================== */
    c6_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Intervalo — Cena 6", sprite: null, texto: "No intervalo, ela não vai para o banco da árvore torta. Ela senta no muro do bebedouro com a Mio, a Hana e a Reina, do outro lado do pátio. A Hana marca um tique na prancheta.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", sprite: "kaito", texto: "Do banco, o Kaito está olhando para o muro. Ele está sentado na ponta do banco, de novo, com o onigiri do tio na mão, sem comer, de novo. E do lado dele, perto demais, a Serena, com o tornozelo enfaixado esticado em cima do banco como se fosse uma prova.", proxima: "c6_03" },
    c6_03: { tipo: "narracao", texto: "Ela está falando com ele, baixinho. Ele não está respondendo. Ele está olhando para o muro do bebedouro.", proxima: "c6_04" },
    c6_04: { tipo: "pensamento", texto: "Não olha. Não olha. Se você olhar, ele vai achar que você quer que ele venha. E você não quer. Você não quer.", proxima: "c6_05" },
    c6_05: { tipo: "narracao", sprite: "blake", texto: "O Blake levanta do banco. Atravessa o pátio com a lancheira azul. E senta no muro do bebedouro, do lado dela. Sem pedir. Ele abre a lancheira e estende metade do sanduíche de frango.", proxima: "c6_06" },
    c6_06: { quem: "blake", texto: "O banco ficou cheio. Aqui tem mais espaço.", proxima: "c6_07" },
    c6_07: { tipo: "narracao", texto: "Não tem mais espaço. O muro é estreito, e com o Blake são cinco pessoas espremidas. Mas ninguém fala nada. A Mio se encolhe um pouco para o lado e fica vermelha, olhando para outra coisa.", proxima: "c6_08" },
    c6_08: { quem: "blake", texto: "Ele não dormiu. Ele chegou no treino domingo e bateu no saco de pancada uma hora. Não falou nada. Eu não perguntei. Eu só quero que você saiba que ele não está bem. Não pra você voltar. Só pra você saber.", proxima: "c6_09" },
    c6_09: { quem: "eu", texto: "Ele sabe onde eu moro, Blake. Hoje ele não foi.", proxima: "c6_10" },
    c6_10: { tipo: "narracao", texto: "O Blake olha para ela. Faz que sim, devagar. E não defende o amigo. Ele só come o sanduíche do lado dela, em silêncio, o que, vindo do Blake, é escolher um lado sem precisar falar.", proxima: "c6_11" },
    c6_11: { tipo: "narracao", sprite: "ryuji", texto: "Dois minutos depois, o Ryuji também atravessa o pátio, com três coxinhas num guardanapo, e senta no chão na frente do muro, porque no muro não cabe mais ninguém.", proxima: "c6_12" },
    c6_12: { quem: "ryuji", texto: "O banco está com um clima horrível. Parece velório. Eu não aguento velório, eu rio em velório. Eu vim pra cá. Toma uma coxinha. São três, uma é sua, uma é minha, a outra a gente divide no par ou ímpar.", proxima: "c6_13" },
    c6_13: { tipo: "narracao", texto: "Ela ri. Pela metade, mas ri. O Ryuji levanta os dois braços como quem marcou gol.", proxima: "c6_14" },
    c6_14: { tipo: "narracao", sprite: "victor", texto: "E aí alguém sobe no muro atrás dela, de pé, se equilibrando como quem anda numa corda, com um pirulito de morango na boca.", proxima: "c6_15" },
    c6_15: { quem: "victor", texto: "Isso aqui virou o banco novo? Ninguém me avisou? A minha mãe mandou isso pra você. Ela fez ontem à noite. Ela disse que se você não comer ela vai saber.", proxima: "c6_16" },
    c6_16: { tipo: "narracao", texto: "Ele entrega um potinho com bolinho de chuva, ainda morno, enrolado num pano de prato. A Mio arregala o olho. O Ryuji também. O Blake não arregala nada, mas olha para o potinho com muito interesse.", proxima: "c6_17" },
    c6_17: { quem: "victor", texto: "Ela falou de você o domingo inteiro. A placa, a placa, a placa. Ela saiu na calçada três vezes pra olhar a placa. Eu acho que ela vai pedir você em casamento antes de mim.", proxima: "c6_18" },
    c6_18: { tipo: "narracao", texto: "Ele fala rápido, como sempre, mas a última frase escapa. Ele fica vermelho. O Ryuji engasga com a coxinha. A Mio dá um tapinha nas costas do Ryuji muito mais forte do que precisava.", proxima: "c6_esc4" },

    // ▶ ESCOLHA 4 — No muro
    c6_esc4: { escolhas: [
      { texto: "A. Abrir o potinho e dividir com todo mundo do muro.", proxima: "c6_4a_1", pontos: { victor: 1, blake: 1, ryuji: 1 }, flags: ["Dividiu_bolinho"] },
      { texto: "B. “Fala pra ela que eu aceito. O casamento. Com ela.” E deixar o Victor sem resposta.", proxima: "c6_4b_1", pontos: { victor: 3 }, flags: ["Casamento_mae"] },
      { texto: "C. Comer um bolinho. Olhar, só um segundo, para o banco.", proxima: "c6_4c_1", pontos: { kaito: 1 }, flags: ["Olhou_banco"] }
    ]},
    c6_4a_1: { tipo: "narracao", texto: "Ela abre o potinho e passa pelo muro. Cada um pega um. O Ryuji pega dois. O Blake fala “bom”, uma palavra, que vindo dele é crítica gastronômica de restaurante caro. Por cinco minutos, o muro do bebedouro é o lugar mais barulhento do pátio.", proxima: "c6_19" },
    c6_4b_1: { quem: "eu", texto: "Fala pra ela que eu aceito. O casamento. Com ela.", proxima: "c6_4b_2" },
    c6_4b_2: { tipo: "narracao", texto: "O Victor fica parado em cima do muro, com o pirulito no meio do caminho. Abre a boca. Fecha. Pela primeira vez na vida dele, não tem nenhuma resposta pronta. A Mio aplaude baixinho.", proxima: "c6_19" },
    c6_4c_1: { tipo: "narracao", texto: "Ela come um bolinho. Ainda está morno. E, mesmo sem querer, olha para o banco. Só um segundo.", proxima: "c6_4c_2" },
    c6_4c_2: { tipo: "narracao", texto: "O Kaito está olhando para ela. Ele não desvia quando ela olha. Ele fica. E a Serena, do lado dele, segue o olhar dele até o muro, e a cara dela muda, por meio segundo, antes de voltar a ser doce.", proxima: "c6_19" },

    // (todas as opções continuam aqui)
    c6_19: { tipo: "narracao", sprite: "kaito", texto: "Do outro lado do pátio, o Kaito levanta do banco. Assim, de repente, no meio de uma frase da Serena. Ele deixa o onigiri em cima do banco e vai embora para dentro do prédio, sozinho, com as mãos no bolso.", proxima: "c6_20" },
    c6_20: { tipo: "narracao", sprite: "serena", texto: "A Serena fica sentada no banco, sozinha, com o tornozelo enfaixado em cima do banco e a boca ainda aberta no meio da frase. Ela olha em volta. Ninguém está olhando para ela. Todo mundo está olhando para o muro do bebedouro, onde o Ryuji está tentando equilibrar uma coxinha no nariz.", proxima: "c7_01" },

    /* =================== CENA 7 — O VESTIÁRIO (Serena) =================== */
    c7_01: { tipo: "narracao", cenario: "vestiario", transicao: "tempo", legenda: "Depois do intervalo — Cena 7", sprite: null, texto: "Antes da aula, ela vai lavar o rosto no banheiro do vestiário. A Mio fica do lado de fora, de guarda, como prometeu. A torneira está fria. Ela fica com as mãos embaixo da água um tempo.", proxima: "c7_02" },
    c7_02: { tipo: "narracao", sprite: "serena", texto: "No espelho, atrás dela, a porta abre. A Serena entra. Andando normal. Sem mancar nada. Ela para na pia do lado, abre a torneira, e lava as mãos devagar, olhando para o espelho. Para o reflexo da SN.", proxima: "c7_03" },
    c7_03: { tipo: "pensamento", texto: "A Mio estava na porta. Como ela entrou?", proxima: "c7_04" },
    c7_04: { quem: "serena", texto: "Eu queria te agradecer.", proxima: "c7_05" },
    c7_05: { tipo: "narracao", texto: "A voz dela é doce. É a voz que ela usa com os professores, com as tias da cantina, com o Kaito.", proxima: "c7_06" },
    c7_06: { quem: "serena", texto: "Pelo capacete. Na sexta. Ele é tão confortável. Vermelho combina comigo, né? O Kaito disse que eu podia usar quando precisasse.", proxima: "c7_07" },
    c7_07: { tipo: "narracao", texto: "Ela fecha a torneira. Seca as mãos no papel, um dedo de cada vez. Sorri para o espelho. E sai, sem esperar resposta, andando normal, sem mancar nada, até a porta. Na porta, ela começa a mancar de novo.", proxima: "c7_08" },
    c7_08: { tipo: "pensamento", texto: "“O Kaito disse que eu podia usar quando precisasse.” Ele disse? Ou ela está dizendo que ele disse? Eu não sei. E ela sabe que eu não sei. É exatamente isso que ela quer.", proxima: "c7_esc5" },

    // ▶ ESCOLHA 5 — No espelho
    c7_esc5: { escolhas: [
      { texto: "A. Não fazer nada. Ela quer uma reação. Ela não vai ganhar uma.", proxima: "c7_5a_1", pontos: {}, flags: ["Sem_reacao"] },
      { texto: "B. Falar alto, antes da porta fechar: “Seu tornozelo melhorou rápido, Serena.”", proxima: "c7_5b_1", pontos: {}, flags: ["Tornozelo_rapido"] },
      { texto: "C. Respirar. Segurar na pia. Contar até dez.", proxima: "c7_5c_1", pontos: {}, flags: ["Contou_dez"] }
    ]},
    c7_5a_1: { tipo: "narracao", texto: "Ela não faz nada. Ela termina de lavar o rosto. Seca. Olha para o próprio reflexo no espelho, com os olhos secos. E apoia as duas mãos na pia para respirar.", proxima: "c7_crack" },
    c7_5b_1: { quem: "eu", texto: "Seu tornozelo melhorou rápido, Serena.", proxima: "c7_5b_2" },
    c7_5b_2: { tipo: "narracao", texto: "A Serena para na porta. Um segundo. Não vira. E sai mancando. Mancando um pouco mais do que antes, do outro pé. A SN fica com as mãos apoiadas na pia, respirando.", proxima: "c7_crack" },
    c7_5c_1: { tipo: "narracao", texto: "Ela segura na beirada da pia e conta. Um. Dois. Três. Devagar, de olho fechado, do jeito que a gente conta quando está tentando não fazer uma coisa.", proxima: "c7_crack" },
    c7_crack: { tipo: "narracao", efeito: "tremor", texto: "Um estalo seco. Embaixo das mãos dela, a louça da pia racha, e uma linha fina corre pela pia branca, da beirada até o ralo, devagar, como gelo quebrando num lago.", proxima: "c7_crack2" },
    c7_crack2: { tipo: "pensamento", texto: "Eu não apertei. Eu estava contando. Eu estava tentando. E mesmo assim. Hoje foi o celular, o caixote, o portão, a pia. Se eu encostar em alguém desse jeito...", proxima: "c7_crack3" },
    c7_crack3: { tipo: "narracao", texto: "Ela tira as mãos da pia devagar, como quem solta uma bomba. Fica olhando para as próprias mãos, abertas, vermelhas nas palmas. E coloca as duas nos bolsos do casaco antes de sair.", proxima: "c7_09" },

    // (todas as opções continuam aqui)
    c7_09: { tipo: "narracao", sprite: "mio", cenario: "corredor", transicao: "tempo", texto: "No corredor, a Mio está pálida.", proxima: "c7_10" },
    c7_10: { quem: "mio", texto: "Ela falou que a professora estava me chamando na secretaria. Eu fui. Ninguém estava me chamando. Quando eu voltei ela já estava saindo. O que ela falou?", proxima: "c7_11" },
    c7_11: { quem: "eu", texto: "Ela agradeceu o capacete.", proxima: "c7_12" },
    c7_12: { tipo: "narracao", sprite: null, texto: "A Mio fala um palavrão. Um palavrão grande, no meio do corredor, que faz um menino do primeiro ano olhar assustado. A SN não ri. Mas quase. E não tira as mãos do bolso até o fim da aula.", proxima: "c8_01" },

    /* =================== CENA 8 — A SAÍDA =================== */
    c8_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Saída — Cena 8", sprite: null, texto: "Na saída, o céu está limpo. Não vai chover. Ela sai pelo portão com a Mio e a Hana, e para um segundo na calçada.", proxima: "c8_02" },
    c8_02: { tipo: "narracao", sprite: "kaito", texto: "Do outro lado da rua, o Kaito está do lado da moto, com o capacete dele pendurado no guidão e o vermelho na mão. Ele não está olhando para o portão de um jeito qualquer. Ele está procurando ela. E acha.", proxima: "c8_03" },
    c8_03: { tipo: "narracao", sprite: "serena", texto: "No muro, a Serena levanta, devagar, com o tornozelo enfaixado. Olha para o Kaito. E começa a atravessar a rua na direção da moto, mancando, com o celular na mão.", proxima: "c8_04" },
    c8_04: { tipo: "narracao", sprite: null, texto: "A SN não espera para ver o que ele faz dessa vez. Ela já viu uma vez. Uma vez basta.", proxima: "c8_05" },
    c8_05: { quem: "eu", texto: "Tchau, Mio. Tchau, Hana. Eu vou a pé.", proxima: "c8_06" },
    c8_06: { quem: "mio", sprite: "mio", texto: "Eu vou com você.", proxima: "c8_07" },
    c8_07: { quem: "eu", texto: "Não. Sozinha. Eu quero andar sozinha.", proxima: "c8_08" },
    c8_08: { tipo: "narracao", sprite: null, texto: "A Mio olha para ela. Entende. E solta o braço dela.", proxima: "c8_09" },
    c8_09: { tipo: "narracao", texto: "Ela vira para a direita e começa a andar pela calçada. Atrás dela, ela ouve a voz da Serena chamando o nome dele, doce, alta, alta o suficiente para a rua inteira ouvir.", proxima: "c8_10" },
    c8_10: { tipo: "narracao", texto: "Ela não ouve o que ele responde. Ela não quer ouvir. Ela coloca o fone de ouvido, sem música nenhuma tocando, só para não ouvir.", proxima: "c8_11" },
    c8_11: { tipo: "narracao", cenario: "rua", transicao: "tempo", texto: "Ela anda. Vinte minutos. O beco do mercado, as caixas de verdura, o cheiro de banana madura. O sol batendo na nuca. Ninguém do lado dela. Nenhuma moto. Nenhum capacete.", proxima: "c8_12" },
    c8_12: { tipo: "pensamento", texto: "Ele não veio atrás. De manhã ele não veio, e agora também não. Pelo menos ele é coerente.", proxima: "c8_13" },
    c8_13: { tipo: "pensamento", texto: "Ela atravessou a rua. Eu sei que atravessou. Eu sei o que ela fez, porque é o que ela sempre faz.", proxima: "c8_14" },
    c8_14: { tipo: "pensamento", texto: "Eu não vou perguntar pra ninguém o que ele fez. Eu não vou olhar o story dela. Eu não vou.", proxima: "c8_15" },
    c8_15: { cenario: "frente-casa-sn", transicao: "tempo", tipo: "narracao", texto: "Ela chega em casa. Sobe os três degraus da fita preta sem olhar para o lugar onde ele espera. Entra. Fecha a porta. E a maçaneta fica na mão dela, solta, com o parafuso pendurado.", proxima: "c8_16" },
    c8_16: { tipo: "pensamento", texto: "Ótimo. Mais uma. Amanhã eu explico pro síndico. Ou não explico.", proxima: "c8_17" },
    c8_17: { tipo: "narracao", texto: "Ela coloca a maçaneta em cima da mesa, do lado do celular rachado, e senta no chão da sala, de mochila ainda nas costas, encostada na porta. E só então deixa sair o ar que estava segurando desde as sete da manhã.", proxima: "r_cam" },

    /* =================== ROTA — SEGUNDA À NOITE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Segunda, 21h", sprite: null, texto: "Às nove da noite, o interfone toca. Uma vez. Ela fica parada no corredor, olhando para o aparelho na parede. Toca de novo.", proxima: "rk_02" },
    rk_02: { quem: "kaito", texto: "...Sou eu. Não precisa descer. Eu só... eu vou falar daqui. Se você não quiser ouvir, pode desligar.", proxima: "rk_03" },
    rk_03: { tipo: "narracao", texto: "A voz dele sai chiada pelo interfone velho do prédio. Ela segura o aparelho. Não fala nada. Não desliga.", proxima: "rk_04" },
    rk_04: { quem: "kaito", texto: "Hoje de manhã. Eu errei. Eu achei que dava tempo. Não deu. Na saída, ela pediu de novo. Eu falei que não. Eu falei “hoje não”. Ela foi de ônibus.", proxima: "rk_05" },
    rk_05: { tipo: "pensamento", texto: "“Hoje não.” Não “nunca”. Hoje não.", proxima: "rk_06" },
    rk_06: { quem: "kaito", texto: "Eu não fui atrás de você na saída porque... eu achei que, se eu fosse, você ia me odiar mais.", proxima: "rk_07" },
    rk_07: { quem: "kaito", texto: "Eu vi uma coisa. Na quinta. Que me deixou... eu fiquei pensando um monte de coisa. E eu não te perguntei. Eu devia ter te perguntado. Eu não sei perguntar.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. “Então pergunta agora.”", proxima: "rk_a1", pontos: { kaito: 3 }, flags: ["Pergunta_agora"] },
      { texto: "B. “Eu sou o quê, Kaito? Responde isso primeiro.”", proxima: "rk_b1", pontos: { kaito: 3 }, flags: ["Responde_primeiro"] },
      { texto: "C. Desligar o interfone. Sem falar nada.", proxima: "rk_c1", pontos: { desvio: 1 }, flags: ["Desligou_interfone"] }
    ]},
    rk_a1: { quem: "eu", texto: "Então pergunta agora.", proxima: "rk_a2" },
    rk_a2: { tipo: "narracao", texto: "Silêncio no interfone. Um chiado comprido. Ela ouve ele respirar do outro lado, lá embaixo, na rua.", proxima: "rk_a3" },
    rk_a3: { quem: "kaito", texto: "...Não por aqui. Não pelo interfone. Amanhã. Sete horas. Se você descer, eu pergunto. Se você não descer, eu volto quarta. E quinta. Até você descer.", proxima: "rk_a4" },
    rk_a4: { tipo: "narracao", texto: "Ela ouve a moto ligar. Ir embora devagar. Ela fica com o interfone na mão, ouvindo o chiado, muito tempo depois de ele ter ido.", proxima: "r_fim" },
    rk_b1: { quem: "eu", texto: "Eu sou o quê, Kaito? Responde isso primeiro.", proxima: "rk_b2" },
    rk_b2: { tipo: "narracao", texto: "Silêncio. Muito silêncio. Ela acha que ele foi embora. Que ele largou o interfone e foi embora sem responder.", proxima: "rk_b3" },
    rk_b3: { quem: "kaito", texto: "Você é o motivo de eu acordar às seis e meia. Hoje eu acordei. E fui pro lugar errado.", proxima: "rk_b4" },
    rk_b4: { quem: "kaito", texto: "Isso não é uma resposta boa. Eu sei. É a única que eu tenho agora. Amanhã. Sete horas. Eu vou estar lá.", proxima: "rk_b5" },
    rk_b5: { tipo: "narracao", texto: "A moto liga. Vai embora. Ela fica parada no corredor com a testa encostada na parede, do lado do interfone, sem saber se está com mais raiva ou menos.", proxima: "r_fim" },
    rk_c1: { tipo: "narracao", texto: "Ela coloca o interfone no gancho. Devagar. Sem falar nada.", proxima: "rk_c2" },
    rk_c2: { tipo: "narracao", texto: "Lá embaixo, a moto não liga. Ela vai até a janela e afasta a cortina com um dedo. Ele está sentado no degrau do prédio, de costas, com o capacete vermelho no colo. Ele fica ali meia hora. Depois vai.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Segunda, 20h", sprite: null, texto: "Às oito, o celular vibra. O Takeo. Não é mensagem. É ligação. Ele nunca liga.", proxima: "rt_02" },
    rt_02: { quem: "takeo", sprite: "takeo:escolar", texto: "Oi. Desculpa ligar. Eu não sei mandar mensagem boa. A minha avó falou pra eu ligar e perguntar se você chegou bem em casa. Andando. Sozinha.", proxima: "rt_03" },
    rt_03: { quem: "takeo", sprite: "takeo:escolar", texto: "...Tá. Mentira. Ela não falou. Eu que quis ligar.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. “Cheguei. Fica na linha um pouco?”", proxima: "rt_a1", pontos: { takeo: 3 }, flags: ["Fica_na_linha"] },
      { texto: "B. “Você é péssimo mentiroso, Takeo.” E rir.", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["Pessimo_Takeo"] },
      { texto: "C. “Takeo. Quarta-feira. Promete que vem mesmo?”", proxima: "rt_c1", pontos: { takeo: 3 }, flags: ["Promete_quarta"] }
    ]},
    rt_a1: { quem: "eu", texto: "Cheguei. Fica na linha um pouco?", proxima: "rt_a2" },
    rt_a2: { tipo: "narracao", texto: "Ele fica. Uma hora. Ele não fala do Kaito uma vez. Ele fala do caquizeiro, da corda nova do balanço, da avó brigando com o gato do vizinho. Ela adormece no meio. Ele percebe pela respiração dela, e fica mais um pouco na linha, em silêncio, antes de desligar.", proxima: "r_fim" },
    rt_b1: { quem: "eu", texto: "Você é péssimo mentiroso, Takeo.", proxima: "rt_b2" },
    rt_b2: { quem: "takeo", sprite: "takeo:escolar", texto: "Eu sei. Por isso que eu falo a verdade logo depois. Economiza tempo.", proxima: "r_fim" },
    rt_c1: { quem: "eu", texto: "Takeo. Quarta-feira. Promete que vem mesmo?", proxima: "rt_c2" },
    rt_c2: { quem: "takeo", sprite: "takeo:escolar", texto: "Seis e quarenta. Na frente do seu prédio. Antes de qualquer moto. Eu prometo.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Segunda, 21h", sprite: null, texto: "Às nove, uma mensagem do Blake.", proxima: "rb_02" },
    rb_02: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu falei com ele. Depois da aula. Ele disse que fez besteira. Ele não disse qual.", proxima: "rb_03" },
    rb_03: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu não vou defender ele. Eu só queria te dizer que hoje, no muro, foi a primeira vez que eu sentei longe dele no intervalo desde que a gente se conhece.", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. “Por que você sentou do meu lado?”", proxima: "rb_a1", pontos: { blake: 3 }, flags: ["Por_que_Blake"] },
      { texto: "B. “Obrigada, Blake. Pelo sanduíche. E pelo resto.”", proxima: "rb_b1", pontos: { blake: 3 }, flags: ["Pelo_resto"] },
      { texto: "C. “Não briga com ele por minha causa.”", proxima: "rb_c1", pontos: { blake: 2 }, flags: ["Nao_briga_Blake"] }
    ]},
    rb_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Por que você sentou do meu lado?", proxima: "rb_a2" },
    rb_a2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Porque era o lado certo.", proxima: "r_fim" },
    rb_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Obrigada, Blake. Pelo sanduíche. E pelo resto.", proxima: "rb_b2" },
    rb_b2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Amanhã tem metade de novo. Frango. Eu já separei.", proxima: "r_fim" },
    rb_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Não briga com ele por minha causa.", proxima: "rb_c2" },
    rb_c2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Não é briga. É ele aprendendo. Ele aprende devagar. Mas aprende.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Segunda, 20h30", sprite: null, texto: "Às oito e meia, a Relâmpago buzina lá embaixo. Duas vezes curtas. Ela vai até a janela.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", sprite: "ryuji", texto: "Eu fiquei sabendo que você anda a pé agora! Eu vim te ensinar a andar de bicicleta! A Relâmpago tem garupa! Não é moto, mas também não é capacete vermelho, então já é uma vantagem!", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. Descer e dar uma volta no quarteirão na garupa da Relâmpago.", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Volta_Relampago"] },
      { texto: "B. “Ryuji, eu sei andar de bicicleta.”", proxima: "rr_b1", pontos: { ryuji: 2 }, flags: ["Sei_bicicleta"] },
      { texto: "C. Descer só pra sentar com ele no degrau.", proxima: "rr_c1", pontos: { ryuji: 3 }, flags: ["Degrau_Ryuji"] }
    ]},
    rr_a1: { tipo: "narracao", cenario: "rua-noite", transicao: "tempo", texto: "Ela desce e senta na garupa da Relâmpago. O Ryuji pedala, cantando alto uma música que ele inventa na hora, sobre uma menina que anda a pé e um menino de moto que é bobo. Ela ri tanto que quase cai. Ele pedala mais rápido.", proxima: "r_fim" },
    rr_b1: { quem: "eu", texto: "Ryuji, eu sei andar de bicicleta.", proxima: "rr_b2" },
    rr_b2: { quem: "ryuji", texto: "Eu sei que você sabe! Eu só precisava de uma desculpa pra vir! Desce! Eu trouxe pão de queijo!", proxima: "r_fim" },
    rr_c1: { tipo: "narracao", cenario: "frente-casa-sn-noite", texto: "Ela desce e senta com ele no degrau do hall, em cima da fita preta. Ele não fala nada por um tempo, o que é um recorde. Depois encosta o ombro no dela.", proxima: "rr_c2" },
    rr_c2: { quem: "ryuji", texto: "Se ele não vier amanhã às sete, eu venho. De bicicleta. Atrasado, mas venho.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Segunda, 20h", sprite: null, texto: "Às oito, uma foto do Victor. A placa da oficina, acesa embaixo de uma lâmpada amarela que ele pendurou com fio. Embaixo, a mãe dele, de braços cruzados, olhando para a placa com um sorriso enorme.", proxima: "rv_02" },
    rv_02: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Ela saiu pra olhar de novo. É a sexta vez hoje. Eu instalei uma luz pra ela poder olhar de noite. Acho que eu criei um monstro.", proxima: "rv_03" },
    rv_03: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Você chegou bem? A pé? Eu fiquei com vontade de ir junto. Mas você falou pra Mio que queria ir sozinha. Eu ouvi. Eu respeitei. Foi difícil.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. “Amanhã, se você quiser, você vai junto.”", proxima: "rv_a1", pontos: { victor: 4 }, flags: ["Amanha_junto_Victor"] },
      { texto: "B. “Obrigada por respeitar. Ninguém respeita.”", proxima: "rv_b1", pontos: { victor: 3 }, flags: ["Respeitou_Victor"] },
      { texto: "C. “A luz ficou linda. Você ficou lindo também, na foto da placa.”", proxima: "rv_c1", pontos: { victor: 4 }, flags: ["Lindo_foto"] }
    ]},
    rv_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Amanhã, se você quiser, você vai junto.", proxima: "rv_a2" },
    rv_a2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Eu quero. Seis e quarenta? Eu levo o Caramelo. Ele adora andar. Eu adoro andar com você. Os dois.", proxima: "r_fim" },
    rv_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Obrigada por respeitar. Ninguém respeita.", proxima: "rv_b2" },
    rv_b2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Eu respeito. Mas se você quiser companhia, é só falar uma palavra. Qualquer uma. Eu entendo até “embaixo”.", proxima: "r_fim" },
    rv_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "A luz ficou linda. Você ficou lindo também, na foto da placa.", proxima: "rv_c2" },
    rv_c2: { tipo: "narracao", texto: "Digitando. Para. Digitando. Para. Três minutos inteiros.", proxima: "rv_c3" },
    rv_c3: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Eu não estou na foto.", proxima: "rv_c4" },
    rv_c4: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "...Ah. Você está falando de sábado. Do lado da placa. Tá. Tá bom. Eu vou dormir agora. Ou tentar. Boa noite. Obrigado. Boa noite.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Segunda, 23h", sprite: null, texto: "Onze da noite. Ela coloca o despertador para seis e meia. Depois fica olhando para o número na tela.", proxima: "f_02" },
    f_02: { tipo: "pensamento", texto: "Amanhã, às sete, ele diz que vai estar lá. Ele também disse isso no sábado.", proxima: "f_03" },
    f_03: { tipo: "pensamento", texto: "E eu não sei se eu vou descer.", proxima: "f_04" },
    f_04: { tipo: "pensamento", texto: "Ele escolheu ela uma vez. Na frente de todo mundo. Uma vez é o suficiente pra eu aprender a andar sozinha.", proxima: "f_05" },
    f_05: { tipo: "pensamento", texto: "E se ele for pro lugar errado de novo, eu não vou estar parada no hall olhando pra parede. Eu vou estar andando.", proxima: "f_06" },
    f_06: { tipo: "narracao", texto: "Ela apaga a luz. No escuro, a última coisa que ela pensa, antes de dormir, não é no Kaito, nem na Serena, nem na fivela.", proxima: "f_07" },
    f_07: { tipo: "pensamento", texto: "É nas próprias mãos, abertas em cima do cobertor. Um celular, um caixote, um portão, uma pia, uma maçaneta. Se eu não aprender a segurar isso, um dia eu vou machucar alguém. E vai ser alguém que eu gosto.", proxima: "ep_fim" },

    // Fim do Capítulo 43 (crie a entrada "capitulo43" em dados/capitulos.js).
    ep_fim: { fim: "capitulo43" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 44 (anotações do roteiro)
 *  • Mensagens da meia-noite de sexta: "Desculpa." / "Segunda eu passo. Sete horas." Sem resposta.
 *  • SÁBADO: a placa da oficina. A mãe do Victor chorou na calçada; jantar; margarina pra um ano.
 *  • SEGUNDA, 7h: o Kaito NÃO veio. Buscou a Serena ("ela ligou chorando, 6h20, achei que dava tempo").
 *    A SN esperou no hall vazio e foi a pé. No portão: "Eu sou o quê?" / "Fica com ela" / "Eu vou a pé. Todo dia."
 *    "Então é isso que eu sou. O depois." Serena: "Ela está brava por minha causa? Eu falei que podia ir de ônibus..." (mentira)
 *  • A FORÇA FORA DE CONTROLE (raiva): tela do celular rachou, caixote de laranja no beco, barra do portão envergada
 *    ("foi um caminhão"), pia do vestiário rachada, maçaneta de casa arrancada. Ninguém percebeu que foi ela. Ela tem medo
 *    de machucar alguém que gosta.
 *  • Takeo: bala de gengibre; quarta tira o gesso e se oferece pra levar ela a pé.
 *  • Ren: "Andou bem." (duas palavras, sem mensagem).
 *  • Intervalo: a SN no muro do bebedouro com Mio, Hana, Reina; Blake, Ryuji e Victor foram pra lá também.
 *    Bolinho de chuva da mãe do Victor. O Kaito largou o onigiri e saiu do banco no meio da frase da Serena.
 *  • Vestiário: a Serena tirou a Mio da porta com uma mentira, entrou sem mancar e agradeceu "pelo capacete":
 *    "O Kaito disse que eu podia usar quando precisasse." (verdade ou não, a SN não sabe.)
 *  • Saída: a Serena atravessou a rua até a moto. A SN foi a pé sozinha, sem ver o que ele fez.
 *  • ROTA KAITO: interfone 21h. "Ela pediu de novo. Eu falei que não. Hoje não." "Eu vi uma coisa. Na quinta."
 *    Pergunta agora / "Eu sou o quê?" ("a única pessoa que eu acordo às seis e meia pra ir buscar") / desligou.
 *    Ele vai voltar terça às sete. "Até você descer."
 *  • Takeo/Victor (rotas): ofereceram ir a pé com ela (Takeo quarta 6h40; Victor amanhã 6h40 com o Caramelo).
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 Na esquina (Victor) · 2 No portão · 3 Na sala (Takeo) · 4 No muro · 5 No espelho (Serena) · Rota (1 por rota)
 *
 * FLAGS NOVAS
 *  Ja_chato · Precisava_hoje · Abraco_esquina · Eu_sou_o_que · Fica_com_ela · Vou_a_pe
 *  Avo_adivinhou · Quarta_a_pe · Nem_bicicleta · Dividiu_bolinho · Casamento_mae · Olhou_banco
 *  Sem_reacao · Tornozelo_rapido · Contou_dez · Pergunta_agora · Responde_primeiro · Desligou_interfone
 *  Fica_na_linha · Pessimo_Takeo · Promete_quarta · Por_que_Blake · Pelo_resto · Nao_briga_Blake
 *  Volta_Relampago · Sei_bicicleta · Degrau_Ryuji · Amanha_junto_Victor · Respeitou_Victor · Lindo_foto
 */