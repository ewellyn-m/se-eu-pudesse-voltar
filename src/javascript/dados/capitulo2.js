/*
 * =====================================================================
 *  CAPÍTULO 2 — Uma pessoa diferente
 *  Continua na manhã seguinte ao Capítulo 1 (quinta-feira).
 *  Mesmo formato do capitulo1.js: cada linha é uma cena.
 * =====================================================================
 *
 *  PERSONAGENS NOVOS (ainda não existem em dados/personagens.js)
 *    Mãe da SN, Sayuri (a garota que fazia bullying com a SN), Goro e Shinji Oda
 *    (irmãos encrenqueiros do Colégio Técnico). Por enquanto eles falam com
 *    quem: "desconhecido" + rotulo com o nome. Quando criar os personagens,
 *    troque quem por "mae", "sayuri", "goro" e "shinji".
 *
 *  CENÁRIOS (todos já existem)
 *    A rua até a escola e a caminhada da noite usam "saida-colegio".
 *    Os armários de sapato usam "corredor". O galpão usa "beco-mercado".
 *    Se criar "rua", "armarios" ou "galpao", é só trocar o cenario nessas cenas.
 *
 *  FLAGS DO CAPÍTULO 1 USADAS AQUI (com caminhos)
 *    Rota_Takeo/Kaito/Blake/Ryuji, Takeo_sabe_da_forca, Mio_ferida,
 *    Ryuji_suspenso, Kaito_lembranca_parquinho, Promessa_Mio, Hana_suspeita.
 *
 *  Título, capa e gancho ficam em dados/capitulos.js: crie a entrada "capitulo2".
 */
Roteiro.registrar("capitulo2", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — AINDA AQUI =================== */
    // Cenário: quarto da SN aos 16, amanhecer. Música: piano do prólogo, mais claro.
    c1_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Cena 1 — Ainda aqui", sprite: null, texto: "Um despertador toca. Não é o toque do celular dela. É um despertador de verdade, com dois sininhos em cima, berrando como se o mundo estivesse acabando.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "A SN abre os olhos devagar. Ela não quer olhar. Ela tem medo do que vai ver.", proxima: "c1_03" },
    c1_03: { tipo: "pensamento", texto: "Se eu abrir os olhos e vir as caixas da mudança... acabou.", proxima: "c1_04" },
    c1_04: { tipo: "pensamento", texto: "Se eu abrir os olhos e vir a colcha de estrelinhas...", proxima: "c1_05" },
    c1_05: { tipo: "narracao", texto: "Ela abre os olhos.", proxima: "c1_06" },
    c1_06: { tipo: "narracao", texto: "Estrelinhas. Pôsteres desbotados. O caderno azul caído no chão, aberto na página onde ela escreveu “Eu voltei”.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", texto: "Ela fica um tempo sem se mexer. Depois cobre o rosto com as mãos e solta o ar, num som que fica no meio do caminho entre um riso e um choro.", proxima: "c1_08" },
    c1_08: { tipo: "pensamento", texto: "Ainda aqui.", proxima: "c1_09" },
    c1_09: { tipo: "pensamento", texto: "Eu dormi três horas. E ainda estou aqui.", proxima: "c1_10" },
    c1_10: { quem: "mae", rotulo: "Mãe (lá de baixo)", sprite: null, texto: "SN! Desce, que o café esfria! E não vem com aquela cara de quem virou a noite estudando, que eu vi a luz acesa!", proxima: "c1_11" },
    c1_11: { tipo: "narracao", texto: "A voz da mãe dela. Mais nova. Mais forte. Sem a tosse que ela pegou anos depois e nunca mais largou.", proxima: "c1_12" },
    c1_12: { tipo: "pensamento", texto: "Eu esqueci que a voz dela era assim.", proxima: "c1_13" },
    c1_13: { tipo: "narracao", texto: "A SN pega o caderno do chão. Senta na beira da cama. Passa um bom tempo só olhando para a página.", proxima: "c1_14" },
    c1_14: { tipo: "pensamento", texto: "Ontem eu passei o dia inteiro tentando provar que isso era um sonho.", proxima: "c1_15" },
    c1_15: { tipo: "pensamento", texto: "Hoje eu não vou perder tempo com isso. Seja o que for, eu estou aqui. E aqui é onde as coisas ainda podem mudar.", proxima: "c1_16" },
    c1_16: { tipo: "narracao", texto: "Ela vira para uma página em branco e escreve, devagar, com a letra redonda de dezesseis anos:", proxima: "c1_17" },
    c1_17: { tipo: "narracao", texto: "REGRAS DA SEGUNDA CHANCE", proxima: "c1_18" },
    c1_18: { tipo: "narracao", texto: "1. Nada de “um dia”. Se eu quero fazer, eu faço hoje.", proxima: "c1_19" },
    c1_19: { tipo: "narracao", texto: "2. Não abaixar a cabeça. Pra ninguém.", proxima: "c1_20" },
    c1_20: { tipo: "narracao", texto: "3. Ser forte. De verdade. Não só nos braços.", proxima: "c1_21" },
    c1_21: { tipo: "narracao", texto: "4. Ninguém morre. Ninguém.", proxima: "c1_22" },
    c1_22: { tipo: "narracao", texto: "Ela olha para a lista. Depois, embaixo, acrescenta uma quinta regra, menor, quase escondida.", proxima: "c1_23" },
    c1_23: { tipo: "narracao", texto: "5. Viver. Dessa vez, viver.", proxima: "c1_24" },
    c1_24: { tipo: "pensamento", texto: "Parece lista de resolução de Ano-Novo. Daquelas que ninguém cumpre.", proxima: "c1_25" },
    c1_25: { tipo: "pensamento", texto: "Só que eu não tenho mais tempo pra não cumprir.", proxima: "c1_26" },
    c1_26: { tipo: "narracao", texto: "O celular vibra em cima da escrivaninha.", proxima: "c1_cam1" },

    // Mensagem da manhã: muda conforme o Capítulo 1
    c1_cam1: { caminhos: [
      { flag: "Mio_ferida", proxima: "c1_m_ferida" },
      { flag: "Promessa_Mio", proxima: "c1_m_promessa" }
    ], proxima: "c1_m_normal" },
    c1_m_ferida: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "Bom dia! Meu joelho tá roxo igual uva. O Blake me mandou mensagem às 7h perguntando se eu tava viva. O BLAKE. Me liga AGORA.", proxima: "c1_27" },
    c1_m_promessa: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "Bom dia, chata! Promessa de mindinho continua valendo, tá? Já tô pensando no que vou te obrigar a fazer hoje.", proxima: "c1_27" },
    c1_m_normal: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "Bom dia! Você ontem tava muito estranha. Hoje eu vou te vigiar. Já aviso.", proxima: "c1_27" },

    c1_27: { tipo: "narracao", texto: "A SN sorri para a tela. Sozinha no quarto, sorrindo para uma mensagem. Ela não lembra a última vez que fez isso.", proxima: "c1_28" },
    c1_28: { tipo: "narracao", texto: "Antes de descer, ela para na frente do espelho do guarda-roupa. A franja torta. O cabelo preso apertado, do jeito que ela prendia para ninguém reparar nela.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — Como começar o primeiro dia de verdade?
    c1_esc1: { escolhas: [
      { texto: "A. Soltar o cabelo. Só isso. Mas é muito.", proxima: "c1_1a_1", pontos: { desvio: 1 }, flags: ["SN_cabelo_solto"] },
      { texto: "B. Responder a Mio: “Passa aqui. Vamos juntas hoje.”", proxima: "c1_1b_1", pontos: { mio: 2 } },
      { texto: "C. Mandar uma mensagem pro Takeo: “Bom dia. Como está o rosto?”", proxima: "c1_1c_1", pontos: { takeo: 2 }, flags: ["SN_mensagem_Takeo"] }
    ]},
    c1_1a_1: { tipo: "narracao", texto: "Ela puxa o elástico. O cabelo cai pelos ombros. A garota no espelho parece a mesma e, ao mesmo tempo, não parece.", proxima: "c1_1a_2" },
    c1_1a_2: { tipo: "pensamento", texto: "Aos dezesseis, eu achava que se ninguém me visse, ninguém ia me machucar.", proxima: "c1_1a_3" },
    c1_1a_3: { tipo: "pensamento", texto: "Não funcionou. Então vamos tentar o contrário.", proxima: "c1_29" },

    c1_1b_1: { tipo: "narracao", texto: "A resposta da Mio chega em menos de cinco segundos.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "QUEM É VOCÊ E O QUE FEZ COM A MINHA AMIGA. Chego em 15 min. Não foge.", proxima: "c1_1b_3" },
    c1_1b_3: { tipo: "pensamento", texto: "Em três anos de escola, eu nunca chamei a Mio pra nada. Era sempre ela que vinha.", proxima: "c1_29" },

    c1_1c_1: { tipo: "narracao", texto: "Ela escreve. Apaga. Escreve de novo. Apaga de novo. No fim, manda a primeira versão antes que possa se arrepender.", proxima: "c1_1c_2" },
    c1_1c_2: { tipo: "narracao", texto: "Três pontinhos aparecem. Somem. Aparecem de novo. Ficam muito tempo ali.", proxima: "c1_1c_3" },
    c1_1c_3: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "bom dia!! tá ok. quer dizer, tá roxo. mas tá ok. vc tá bem? posso te esperar na esquina?", proxima: "c1_1c_4" },
    c1_1c_4: { tipo: "pensamento", texto: "Ele demorou um minuto inteiro pra escrever isso. Eu conheço esse minuto. Eu passei a vida inteira nele.", proxima: "c1_29" },

    // (todas as opções continuam aqui)
    c1_29: { tipo: "narracao", cenario: "cozinha", sprite: "mae", texto: "Na cozinha, a mãe coloca um prato de ovos na frente dela e fica parada, com a espátula na mão, estudando o rosto da filha.", proxima: "c1_30" },
    c1_30: { quem: "mae", texto: "Você está diferente.", proxima: "c1_31" },
    c1_31: { quem: "eu", texto: "Todo mundo fala isso.", proxima: "c1_32" },
    c1_32: { quem: "mae", texto: "Diferente bom. Parece que você acordou de verdade.", proxima: "c1_33" },
    c1_33: { tipo: "narracao", texto: "A SN não consegue responder. Ela só abraça a mãe por trás, rápido, antes de pegar a mochila e sair.", proxima: "c2_01" },

    /* =================== CENA 2 — O CAMINHO DA ESCOLA =================== */
    // Cenário: rua até o colégio, manhã (usa "saida-colegio"). Música: tema leve, com violão.
    c2_01: { tipo: "narracao", cenario: "rua", transicao: "tempo", legenda: "Cena 2 — O caminho da escola", sprite: null, texto: "A rua até o colégio é exatamente como ela lembrava. A padaria da esquina. O cachorro que late para todo mundo. O muro com a mesma pichação torta.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", sprite: "takeo", texto: "E, encostado no poste da esquina, com a jaqueta grande demais e um curativo novo na bochecha, está o Takeo.", proxima: "c2_03" },
    c2_03: { tipo: "pensamento", texto: "Ele está esperando. Por mim.", proxima: "c2_04" },
    c2_04: { tipo: "pensamento", texto: "Ele sempre esperava aqui? Ou isso é novo? Eu... não lembro.", proxima: "c2_05" },
    c2_05: { quem: "takeo", texto: "Oi! Eu, é... eu passo por aqui todo dia. Coincidência.", proxima: "c2_06" },
    c2_06: { quem: "eu", texto: "Sua casa fica do outro lado.", proxima: "c2_07" },
    c2_07: { quem: "takeo", texto: "...Coincidência grande.", proxima: "c2_08" },
    c2_08: { tipo: "narracao", texto: "Ele estende uma caixinha de leite de morango, ainda gelada. A marca que ela tomava todo dia no intervalo, quando tinha dezesseis anos e achava que ninguém reparava.", proxima: "c2_09" },
    c2_09: { quem: "takeo", texto: "Você gosta desse, né? Eu vi na cantina. Uma vez. Ou algumas.", proxima: "c2_10" },
    c2_10: { tipo: "pensamento", texto: "Ele reparava.", proxima: "c2_11" },
    c2_11: { tipo: "pensamento", texto: "Esse tempo todo, ele reparava.", proxima: "c2_12" },
    c2_12: { tipo: "narracao", texto: "Eles andam lado a lado. O Takeo anda um pouquinho mais devagar do que o normal, e a SN percebe que é para ela não ter que apertar o passo.", proxima: "c2_cam1" },

    // O que o Takeo lembra de ontem depende da rota do Capítulo 1
    c2_cam1: { caminhos: [
      { flag: "Takeo_sabe_da_forca", proxima: "c2_t_forca" },
      { flag: "Rota_Kaito", proxima: "c2_t_kaito" },
      { flag: "Rota_Blake", proxima: "c2_t_blake" },
      { flag: "Rota_Ryuji", proxima: "c2_t_ryuji" }
    ], proxima: "c2_t_kaito" },
    c2_t_forca: { quem: "takeo", texto: "Sua mão... está doendo?", proxima: "c2_t_forca2" },
    c2_t_forca2: { tipo: "narracao", texto: "Ela mostra a palma. O corte já fechou, coberto por um curativo de bichinho que era o único que tinha em casa. O Takeo segura a mão dela com cuidado, vira de um lado e do outro, como se estivesse examinando um vidro.", proxima: "c2_t_forca3" },
    c2_t_forca3: { quem: "takeo", texto: "Eu não contei pra ninguém. Sobre o cano. Eu prometi.", proxima: "c2_13" },
    c2_t_kaito: { quem: "takeo", texto: "O Kaito disse que foi você que avisou ele ontem. Que você apareceu do nada no pátio e mandou ele ir.", proxima: "c2_t_kaito2" },
    c2_t_kaito2: { quem: "takeo", texto: "Ninguém manda o Kaito fazer nada, SN. Ninguém.", proxima: "c2_13" },
    c2_t_blake: { quem: "takeo", texto: "A Mio está bem? Eu fiquei a noite inteira pensando que ela se machucou por minha causa.", proxima: "c2_t_blake2" },
    c2_t_blake2: { tipo: "pensamento", texto: "Ele se culpa por tudo. Até pelo que não é culpa dele. Eu tinha esquecido disso também.", proxima: "c2_13" },
    c2_t_ryuji: { quem: "takeo", texto: "O Ryuji foi suspenso por minha causa. Ele vai me matar.", proxima: "c2_t_ryuji2" },
    c2_t_ryuji2: { quem: "eu", texto: "Ele não vai te matar. Ele pareceu bem feliz, na verdade.", proxima: "c2_t_ryuji3" },
    c2_t_ryuji3: { quem: "takeo", texto: "...Isso é o que me assusta.", proxima: "c2_13" },

    c2_13: { tipo: "narracao", texto: "Eles passam pela padaria. O cheiro de pão quente se mistura com o barulho dos ônibus. Por alguns segundos, parece só uma manhã comum.", proxima: "c2_14" },
    c2_14: { quem: "eu", texto: "Takeo. Ontem, aquele garoto gritou que você “sabe o que fez”.", proxima: "c2_15" },
    c2_15: { tipo: "narracao", texto: "O Takeo tropeça no próprio pé. De verdade, dessa vez.", proxima: "c2_16" },
    c2_16: { quem: "takeo", texto: "Ah. Aquilo. Eles falam um monte de coisa.", proxima: "c2_17" },
    c2_17: { quem: "eu", texto: "Você ficou branco quando ele falou.", proxima: "c2_18" },
    c2_18: { tipo: "narracao", texto: "Ele não responde logo. Ele fica olhando para a frente, apertando a alça da mochila.", proxima: "c2_19" },
    c2_19: { quem: "takeo", texto: "Eu vi uma coisa que eu não devia ter visto. Só isso. É melhor você não saber.", proxima: "c2_20" },
    c2_20: { tipo: "pensamento", texto: "“Eu preciso te contar uma coisa. Não sobre mim. Sobre a—”", proxima: "c2_21" },
    c2_21: { tipo: "pensamento", texto: "Dez anos atrás, ele quis me contar. E eu nunca ouvi.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — Insistir com o Takeo?
    c2_esc2: { escolhas: [
      { texto: "A. Parar no meio da calçada: “Me conta. Eu não vou a lugar nenhum.”", proxima: "c2_2a_1", pontos: { takeo: 1, desvio: 1 }, flags: ["Takeo_pressionado"] },
      { texto: "B. “Tá bom. Mas quando você quiser contar, eu vou estar aqui. Promete que vai me procurar?”", proxima: "c2_2b_1", pontos: { takeo: 2 }, flags: ["Takeo_promessa"] },
      { texto: "C. Mudar de assunto e deixar ele respirar: “O leite estava ótimo, aliás.”", proxima: "c2_2c_1", pontos: { takeo: 1 } }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "O Takeo para também. Ele olha para ela, e por um segundo parece que vai falar.", proxima: "c2_2a_2" },
    c2_2a_2: { quem: "takeo", texto: "SN... se eu te contar, você vai ficar no meio disso. E eu não aguento a ideia de você se machucar.", proxima: "c2_2a_3" },
    c2_2a_3: { quem: "eu", texto: "Eu já estou no meio.", proxima: "c2_2a_4" },
    c2_2a_4: { quem: "takeo", texto: "...Hoje não. Por favor. Hoje não.", proxima: "c2_2a_5" },
    c2_2a_5: { tipo: "pensamento", texto: "Eu empurrei. E ele se fechou mais. Na minha cabeça de vinte e oito anos, isso era o certo a fazer.", proxima: "c2_22" },

    c2_2b_1: { tipo: "narracao", texto: "O Takeo fica tão vermelho que o curativo quase some no meio.", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "takeo", texto: "Prometo. Você vai ser a primeira pessoa.", proxima: "c2_2b_3" },
    c2_2b_3: { quem: "takeo", texto: "Na verdade, você vai ser a única.", proxima: "c2_2b_4" },
    c2_2b_4: { tipo: "pensamento", texto: "Dessa vez, quando ele ligar, eu vou atender.", proxima: "c2_22" },

    c2_2c_1: { tipo: "narracao", texto: "O ombro do Takeo relaxa na hora. Ele ri, aliviado.", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "takeo", texto: "Sério? Eu fiquei na dúvida entre esse e o de chocolate. Fiquei uns dez minutos na frente da geladeira da padaria.", proxima: "c2_2c_3" },
    c2_2c_3: { quem: "eu", texto: "Dez minutos?", proxima: "c2_2c_4" },
    c2_2c_4: { quem: "takeo", texto: "...Quinze. Não conta pra ninguém.", proxima: "c2_22" },

    // (todas as opções continuam aqui)
    c2_22: { tipo: "narracao", texto: "O portão do colégio aparece no fim da rua. O Takeo diminui ainda mais o passo, como se não quisesse que a caminhada acabasse.", proxima: "c2_23" },
    c2_23: { quem: "takeo", texto: "SN. Você mudou.", proxima: "c2_24" },
    c2_24: { quem: "eu", texto: "Pra pior?", proxima: "c2_25" },
    c2_25: { quem: "takeo", texto: "Não. É que antes... você olhava pro chão o tempo todo. Agora você olha pras pessoas.", proxima: "c2_26" },
    c2_26: { quem: "takeo", texto: "É bom. Ser olhado por você.", proxima: "c2_27" },
    c2_27: { tipo: "narracao", texto: "Ele percebe o que disse um segundo depois. Arregala os olhos, murmura alguma coisa sobre esquecer o livro de inglês e sai praticamente correndo pelo portão.", proxima: "c2_28" },
    c2_28: { tipo: "pensamento", texto: "O livro de inglês está na mão dele.", proxima: "c3_01" },

    /* =================== CENA 3 — O QUE EU TINHA ESQUECIDO =================== */
    // Cenário: armários de sapato na entrada do colégio (usa "corredor"). Música: some de repente.
    c3_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Cena 3 — O que eu tinha esquecido", sprite: null, texto: "Na entrada, os armários de sapato. Fileiras e fileiras de portinhas de metal com o nome de cada aluno.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "A SN abre o dela sem pensar.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", texto: "Os sapatos de dentro da escola estão encharcados. Cheios de restos de suco, papel molhado e casca de tangerina. Em cima deles, um bilhete dobrado.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", texto: "Ela abre o bilhete. Escrito com caneta rosa, letra cheia de bolinhas: “Bom dia, FANTASMA. Ninguém sentiu sua falta.”", proxima: "c3_05" },
    c3_05: { tipo: "narracao", efeito: "flashback", texto: "E, de repente, ela lembra.", proxima: "c3_06" },
    c3_06: { tipo: "narracao", efeito: "flashback", texto: "Lembra do apelido. Fantasma. Porque ela era tão quieta que “ninguém sabia se ela estava ali ou não”.", proxima: "c3_07" },
    c3_07: { tipo: "narracao", efeito: "flashback", texto: "Lembra do caderno jogado na piscina no primeiro ano. Das risadas quando ela entrava na sala. Do almoço comido escondida no banheiro, com os pés em cima do vaso para ninguém ver por baixo da porta.", proxima: "c3_08" },
    c3_08: { tipo: "narracao", efeito: "flashback", texto: "Lembra de nunca contar para a Mio. Porque a Mio ia brigar. E ela não queria dar trabalho para ninguém.", proxima: "c3_09" },
    c3_09: { tipo: "pensamento", texto: "Eu tinha apagado isso.", proxima: "c3_10" },
    c3_10: { tipo: "pensamento", texto: "Doze anos dizendo “eu não gostava da escola porque eu era tímida”. Não era só isso. Eu não gostava da escola porque, aqui dentro, todo dia, alguém me lembrava que eu não valia nada.", proxima: "c3_11" },
    c3_11: { tipo: "narracao", texto: "Atrás dela, uma risada. Aguda, ensaiada. A SN reconhece antes mesmo de virar.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", sprite: "sayuri", texto: "Três garotas encostadas na parede dos armários. No meio, uma de rabo de cavalo alto, laço rosa, unhas pintadas da mesma cor da caneta do bilhete.", proxima: "c3_13" },
    c3_13: { tipo: "pensamento", texto: "Sayuri.", proxima: "c3_14" },
    // Sayuri: troque quem por "sayuri" quando criar a personagem.
    c3_14: { quem: "sayuri", texto: "Ai, Fantasma, que cara é essa? Seus sapatinhos estão com cheirinho de fruta. A gente pensou em você.", proxima: "c3_15" },
    c3_15: { tipo: "narracao", texto: "As duas amigas dela riem na hora certa, como sempre riam.", proxima: "c3_16" },
    c3_16: { quem: "sayuri", texto: "Ouvi dizer que ontem você foi atrás do Takeo até o mercado. Que coisa triste. Nem o garoto mais fraco da gangue vai querer uma fantasma.", proxima: "c3_17" },
    c3_17: { tipo: "narracao", texto: "Por um segundo, a SN de dezesseis anos aparece. O estômago fecha. A mão aperta o bilhete. A cabeça começa a abaixar sozinha, num reflexo antigo.", proxima: "c3_18" },
    c3_18: { tipo: "pensamento", texto: "Regra número 2.", proxima: "c3_19" },
    c3_19: { tipo: "narracao", texto: "A cabeça para no meio do caminho. E volta a subir.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — Enfrentar a Sayuri
    c3_esc3: { escolhas: [
      { texto: "A. Calma, olhando nos olhos: “Daqui a dez anos, você vai lembrar disso e vai sentir vergonha. Eu só vou ter esquecido seu nome.”", proxima: "c3_3a_1", pontos: { desvio: 2 }, flags: ["Sayuri_humilhada"] },
      { texto: "B. Jogar os sapatos no lixo, calçar só as meias e passar por elas de cabeça erguida.", proxima: "c3_3b_1", pontos: { desvio: 1 }, flags: ["SN_de_meias"] },
      { texto: "C. “Fala de mim o quanto quiser. Mas não fala do Takeo.”", proxima: "c3_3c_1", pontos: { takeo: 1, desvio: 1 }, flags: ["Sayuri_raiva"] }
    ]},
    c3_3a_1: { tipo: "narracao", texto: "O sorriso da Sayuri trava. Ela abre a boca. Fecha. Abre de novo.", proxima: "c3_3a_2" },
    c3_3a_2: { quem: "sayuri", texto: "...Desde quando você fala, Fantasma?", proxima: "c3_3a_3" },
    c3_3a_3: { quem: "eu", texto: "Desde sempre. Você só nunca ficou quieta tempo suficiente pra ouvir.", proxima: "c3_3a_4" },
    c3_3a_4: { tipo: "narracao", texto: "Uma das amigas solta uma risadinha. Dessa vez, não é para a SN. A Sayuri vira para ela com um olhar de gelo.", proxima: "c3_20" },

    c3_3b_1: { tipo: "narracao", texto: "A SN tira os sapatos molhados do armário, um de cada vez, e joga os dois na lixeira do canto. Depois fecha a portinha devagar, calça só as meias e começa a andar.", proxima: "c3_3b_2" },
    c3_3b_2: { tipo: "narracao", texto: "O piso está gelado. Algumas pessoas olham. Ela não olha de volta para o chão. Ela olha para a frente.", proxima: "c3_3b_3" },
    c3_3b_3: { quem: "sayuri", texto: "Ela ficou louca! Gente, a Fantasma ficou louca!", proxima: "c3_3b_4" },
    c3_3b_4: { tipo: "pensamento", texto: "Talvez. Mas de meias, de cabeça erguida, eu me sinto mais inteira do que em três anos de sapato seco.", proxima: "c3_20" },

    c3_3c_1: { tipo: "narracao", texto: "A voz da SN sai baixa. Tão baixa que as três precisam parar de rir para ouvir.", proxima: "c3_3c_2" },
    c3_3c_2: { quem: "sayuri", texto: "Ai, que fofa. Defendendo o namoradinho.", proxima: "c3_3c_3" },
    c3_3c_3: { tipo: "narracao", texto: "A Sayuri dá um passo à frente e empurra o ombro da SN com dois dedos. Depois tenta de novo, mais forte.", proxima: "c3_3c_4" },
    c3_3c_4: { tipo: "narracao", efeito: "tremor", texto: "A SN não se mexe nem um centímetro. A Sayuri é quem recua, sacudindo a mão, como se tivesse empurrado uma parede.", proxima: "c3_20" },

    // (todas as opções continuam aqui)
    c3_20: { tipo: "narracao", texto: "Uma voz preguiçosa corta o corredor.", proxima: "c3_21" },
    c3_21: { quem: "kaito", sprite: "kaito", texto: "Algum problema aqui?", proxima: "c3_22" },
    c3_22: { tipo: "narracao", texto: "O Kaito está encostado na porta da entrada, mochila pendurada num ombro só, a tatuagem aparecendo por baixo da manga. Ele não levanta a voz. Não precisa.", proxima: "c3_23" },
    c3_23: { tipo: "narracao", texto: "As três garotas somem tão rápido que parece truque de mágica.", proxima: "c3_24" },
    c3_24: { tipo: "narracao", texto: "O Kaito olha para os sapatos na lixeira. Depois para o bilhete amassado na mão da SN. Ele estica a mão e pega o papel antes que ela consiga esconder.", proxima: "c3_25" },
    c3_25: { quem: "kaito", texto: "“Fantasma.” Criativo.", proxima: "c3_26" },
    c3_26: { quem: "kaito", texto: "Há quanto tempo isso acontece?", proxima: "c3_27" },
    c3_27: { quem: "eu", texto: "Não é da sua conta.", proxima: "c3_28" },
    c3_28: { quem: "kaito", texto: "Tudo que acontece nessa escola é da minha conta. É meio que o meu trabalho.", proxima: "c3_29" },
    c3_29: { tipo: "narracao", texto: "Ele amassa o bilhete numa bolinha e acerta a lixeira, em cima dos sapatos.", proxima: "c3_cam1" },

    // O Kaito lembra do parquinho? (Rota B do Capítulo 1)
    c3_cam1: { caminhos: [
      { flag: "Kaito_lembranca_parquinho", proxima: "c3_k_lembra" }
    ], proxima: "c3_k_normal" },
    c3_k_lembra: { quem: "kaito", texto: "Sabe, eu sonhei com você essa noite. Quer dizer. Não com você. Com uma menina num parquinho. Ela me jogou no chão de areia.", proxima: "c3_k_lembra2" },
    c3_k_lembra2: { quem: "kaito", texto: "Eu acordei com o braço doendo. Do nada.", proxima: "c3_k_lembra3" },
    c3_k_lembra3: { tipo: "pensamento", texto: "Parquinho? Do que ele está falando?", proxima: "c3_30" },
    c3_k_normal: { quem: "kaito", texto: "Engraçado. Ontem você me encarou no pátio como se eu fosse um mosquito. E hoje três garotinhas te deixam desse jeito?", proxima: "c3_k_normal2" },
    c3_k_normal2: { quem: "eu", texto: "Não é a mesma coisa.", proxima: "c3_k_normal3" },
    c3_k_normal3: { quem: "kaito", texto: "Não. Não é. Comigo você não tinha medo. Com elas, você tem um medo velho. Dá pra ver.", proxima: "c3_30" },

    c3_30: { quem: "kaito", texto: "Se elas fizerem isso de novo, me fala.", proxima: "c3_esc4" },

    // ▶ ESCOLHA 4 — Aceitar a ajuda do Kaito?
    c3_esc4: { escolhas: [
      { texto: "A. “Eu não preciso que você me salve.”", proxima: "c3_4a_1", pontos: { kaito: 2 } },
      { texto: "B. “...Obrigada. De verdade.”", proxima: "c3_4b_1", pontos: { kaito: 1 } },
      { texto: "C. “E o que você vai fazer? Bater numa menina de laço rosa?”", proxima: "c3_4c_1", pontos: { kaito: 2 }, flags: ["Kaito_riu"] }
    ]},
    c3_4a_1: { tipo: "narracao", texto: "O Kaito sorri. Não aquele sorriso convencido do pátio. Um sorriso mais curto, mais verdadeiro.", proxima: "c3_4a_2" },
    c3_4a_2: { quem: "kaito", texto: "Eu sei que não. Foi por isso que eu ofereci.", proxima: "c3_4a_3" },
    c3_4a_3: { quem: "kaito", texto: "Quem precisa ser salvo nunca ouve isso de mim. Eu só ofereço pra quem aguenta sozinho.", proxima: "c3_31" },

    c3_4b_1: { tipo: "narracao", texto: "O Kaito pisca, pego de surpresa. Ele claramente esperava uma briga.", proxima: "c3_4b_2" },
    c3_4b_2: { quem: "kaito", texto: "...De nada. Eu acho. Ninguém me agradece muito.", proxima: "c3_4b_3" },
    c3_4b_3: { tipo: "narracao", texto: "Ele coça a nuca. Por um segundo, o líder da gangue parece só um garoto de dezessete anos sem saber o que fazer com as mãos.", proxima: "c3_31" },

    c3_4c_1: { tipo: "narracao", texto: "O Kaito solta uma gargalhada tão alta que um professor coloca a cabeça para fora da sala dos professores.", proxima: "c3_4c_2" },
    c3_4c_2: { quem: "kaito", texto: "Não. Mas eu posso olhar pra ela. Bem assim.", proxima: "c3_4c_3" },
    c3_4c_3: { tipo: "narracao", texto: "Ele faz uma cara séria, assustadora, de sobrancelha baixa. Depois desmancha tudo num sorriso. A SN tem que morder o lábio para não rir.", proxima: "c3_31" },

    // (todas as opções continuam aqui)
    c3_31: { tipo: "narracao", texto: "O Kaito tira o par de sapatos de dentro da escola do próprio armário, enormes e gastos, e coloca no chão na frente dela.", proxima: "c3_32" },
    c3_32: { quem: "kaito", texto: "Toma. Vai ficar grande, mas é melhor que andar com o pé gelado o dia inteiro.", proxima: "c3_33" },
    c3_33: { quem: "eu", texto: "E você?", proxima: "c3_34" },
    c3_34: { quem: "kaito", texto: "Eu sou o líder. Ninguém vai reclamar do meu pé.", proxima: "c3_35" },
    c3_35: { tipo: "narracao", sprite: null, texto: "Ele sai andando de meias pelo corredor, como se fosse a coisa mais normal do mundo. Dois garotos da gangue que passam por ele tiram os sapatos na hora e seguem descalços também, sem perguntar nada.", proxima: "c3_36" },
    c3_36: { tipo: "pensamento", texto: "Naquela época, eu achava que a gangue era o problema. Agora eu estou usando o sapato do líder dela.", proxima: "c4_01" },

    /* =================== CENA 4 — A AULA VAGA =================== */
    // Cenário: sala de aula, aula vaga (professor faltou). Música: tema leve do colégio.
    c4_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Cena 4 — A aula vaga", sprite: null, texto: "O professor de história faltou. Aula vaga. Metade da turma dorme, a outra metade joga baralho no fundo da sala.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", sprite: "mio", texto: "A Mio puxa a cadeira para a mesa da SN e da Hana, senta ao contrário e apoia o queixo no encosto.", proxima: "c4_cam1" },
    c4_cam1: { caminhos: [
      { flag: "Mio_ferida", proxima: "c4_m_ferida" }
    ], proxima: "c4_03" },
    c4_m_ferida: { tipo: "narracao", texto: "O joelho dela está enfaixado com uma atadura colorida de dinossauro. Ela jura que foi a única que achou na farmácia. Ninguém acredita.", proxima: "c4_03" },
    c4_03: { quem: "mio", texto: "Muito bem. Reunião de emergência. Por que a SN está usando o sapato do Kaito?", proxima: "c4_04" },
    c4_04: { tipo: "narracao", sprite: "hana", texto: "A Hana, que estava lendo, levanta os olhos devagar e olha para os pés da SN. Os sapatos são uns três números maiores.", proxima: "c4_05" },
    c4_05: { quem: "hana", texto: "...Eu estava me perguntando a mesma coisa há duas aulas.", proxima: "c4_06" },
    c4_06: { quem: "eu", texto: "É uma longa história.", proxima: "c4_07" },
    c4_07: { quem: "mio", texto: "A aula vaga tem cinquenta minutos. Começa.", proxima: "c4_08" },
    c4_08: { tipo: "pensamento", texto: "Eu nunca contei pra elas. Nem uma vez. Nem sobre a Sayuri, nem sobre o banheiro, nem sobre o apelido.", proxima: "c4_09" },
    c4_09: { tipo: "pensamento", texto: "Regra número 1. Nada de “um dia”.", proxima: "c4_esc5" },

    // ▶ ESCOLHA 5 — Contar sobre o bullying?
    c4_esc5: { escolhas: [
      { texto: "A. Contar tudo. Do apelido ao almoço no banheiro.", proxima: "c4_5a_1", pontos: { mio: 2, hana: 2 }, flags: ["Amigas_sabem_bullying"] },
      { texto: "B. Contar só o de hoje: “A Sayuri encheu meu sapato de lixo.”", proxima: "c4_5b_1", pontos: { mio: 1, hana: 1 } },
      { texto: "C. “Meu sapato molhou. O Kaito emprestou o dele. Só isso.”", proxima: "c4_5c_1", pontos: { hana: 1 }, flags: ["Hana_suspeita"] }
    ]},
    c4_5a_1: { tipo: "narracao", texto: "A SN fala. Devagar no começo, depois mais rápido, como uma torneira que estava travada há muito tempo.", proxima: "c4_5a_2" },
    c4_5a_2: { tipo: "narracao", texto: "Ela conta do caderno na piscina. Do bilhete de hoje. Do apelido. Do banheiro. A Mio fica cada vez mais quieta. A Hana para de fingir que está lendo.", proxima: "c4_5a_3" },
    c4_5a_3: { quem: "mio", texto: "Desde o primeiro ano?", proxima: "c4_5a_4" },
    c4_5a_4: { quem: "eu", texto: "Desde o primeiro ano.", proxima: "c4_5a_5" },
    c4_5a_5: { quem: "mio", texto: "E você nunca me contou?", proxima: "c4_5a_6" },
    c4_5a_6: { quem: "eu", texto: "Eu não queria te dar trabalho.", proxima: "c4_5a_7" },
    c4_5a_7: { tipo: "narracao", texto: "A Mio fica em silêncio. A Mio, que nunca fica em silêncio. Os olhos dela se enchem d'água, e ela esfrega com força, brava consigo mesma.", proxima: "c4_5a_8" },
    c4_5a_8: { quem: "mio", texto: "Você é minha melhor amiga desde os seis anos, sua idiota. Você nunca dá trabalho. Você é o meu trabalho favorito.", proxima: "c4_5a_9" },
    c4_5a_9: { tipo: "narracao", texto: "A Hana estende a mão por cima da mesa e segura a mão da SN. Não diz nada. Não precisa.", proxima: "c4_5a_10" },
    c4_5a_10: { quem: "hana", texto: "Eu almoçava na biblioteca. Por um motivo parecido. Se quiser, a partir de hoje, a gente almoça junto. Longe de banheiro.", proxima: "c4_5a_11" },
    c4_5a_11: { tipo: "pensamento", texto: "A Hana também? Esse tempo todo, a gente estava escondida em lugares diferentes da mesma escola.", proxima: "c4_10" },

    c4_5b_1: { quem: "mio", texto: "A SAYURI?!", proxima: "c4_5b_2" },
    c4_5b_2: { tipo: "narracao", efeito: "grito", texto: "A Mio levanta tão rápido que a cadeira cai para trás. Metade da turma acorda.", proxima: "c4_5b_3" },
    c4_5b_3: { quem: "mio", texto: "Onde ela está? Eu vou lá agora. Eu vou enfiar aquele laço rosa no...", proxima: "c4_5b_4" },
    c4_5b_4: { quem: "hana", texto: "Mio. Senta.", proxima: "c4_5b_5" },
    c4_5b_5: { tipo: "narracao", texto: "A Hana fala tão baixo e tão firme que a Mio senta. A SN olha para a Hana, impressionada. A Hana dá de ombros.", proxima: "c4_5b_6" },
    c4_5b_6: { quem: "hana", texto: "Brigar resolve hoje. Mas não resolve amanhã. A gente pensa em outra coisa. Juntas.", proxima: "c4_10" },

    c4_5c_1: { tipo: "narracao", texto: "A Mio aceita a resposta com um “hmmm” desconfiado. A Hana não diz nada.", proxima: "c4_5c_2" },
    c4_5c_2: { tipo: "narracao", texto: "Mas, quando a Mio vira para conversar com alguém da outra mesa, a Hana desliza um papel dobrado para a SN. Dentro, a letra caprichada de sempre e um gatinho desenhado:", proxima: "c4_5c_3" },
    c4_5c_3: { tipo: "narracao", texto: "“Você está mentindo. Tudo bem. Mas quando quiser contar a verdade, eu estou aqui.”", proxima: "c4_5c_4" },
    c4_5c_4: { tipo: "pensamento", texto: "Ela sempre sabe.", proxima: "c4_10" },

    // (todas as opções continuam aqui)
    c4_10: { tipo: "narracao", texto: "Lá fora, alguém grita no pátio. Depois mais gente. Um apito de professor. Barulho de passos correndo.", proxima: "c4_11" },
    c4_11: { tipo: "narracao", texto: "Os alunos que jogavam baralho correm para a janela. A SN vai junto.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", texto: "No portão do colégio, do lado de fora da grade, dois garotos de uniforme cinza, de outra escola. Um alto e largo, de cabeça raspada. Outro mais baixo, de cabelo descolorido e um sorriso que dá frio na barriga só de ver.", proxima: "c4_13" },
    c4_13: { quem: "mio", texto: "Ih. Os irmãos Oda. Do Colégio Técnico do outro lado do rio.", proxima: "c4_14" },
    c4_14: { quem: "eu", texto: "Quem?", proxima: "c4_15" },
    c4_15: { quem: "mio", texto: "Você não conhece? O Goro é o grandão. O Shinji é o baixinho. O baixinho é o pior. Eles vivem arrumando briga pra subir de nome. Dizem que não pertencem a gangue nenhuma. Que trabalham pra quem pagar.", proxima: "c4_16" },
    c4_16: { tipo: "pensamento", texto: "Irmãos Oda.", proxima: "c4_17" },
    c4_17: { tipo: "pensamento", texto: "Eu não lembro deles. Nem um pouco. Eu tenho quase certeza de que, naquela época, eles nunca apareceram aqui.", proxima: "c4_18" },
    c4_18: { tipo: "narracao", texto: "Lá embaixo, o mais baixo, Shinji, grita alguma coisa para dentro do colégio, as mãos em volta da boca. O vento traz só um pedaço da frase.", proxima: "c4_19" },
    // Shinji: troque quem por "shinji" quando criar o personagem.
    c4_19: { quem: "shinji", rotulo: "Shinji (lá do portão)", sprite: null, efeito: "eco", texto: "...hoje, às cinco, no galpão! Avisa o Kaito! E avisa o magrelo também!", proxima: "c4_20" },
    c4_20: { tipo: "narracao", texto: "O professor de plantão corre até o portão. Os dois irmãos vão embora sem pressa, rindo.", proxima: "c4_21" },
    c4_21: { tipo: "pensamento", texto: "Às cinco. No galpão.", proxima: "c4_22" },
    c4_22: { tipo: "pensamento", texto: "O galpão. O lugar onde a briga deveria ter acontecido ontem, da primeira vez.", proxima: "c4_23" },
    c4_23: { tipo: "pensamento", texto: "Eu tirei a briga de ontem do caminho. E o caminho trouxe outra. Maior.", proxima: "c4_24" },
    c4_24: { tipo: "narracao", sprite: "hana", texto: "A Hana para do lado da SN na janela. Ela não olha para o portão. Ela olha para o rosto da SN.", proxima: "c4_25" },
    c4_25: { quem: "hana", texto: "Você não ficou surpresa. Você ficou com medo. São coisas diferentes.", proxima: "c5_01" },

    /* =================== CENA 5 — A ARQUIBANCADA VAZIA =================== */
    // Cenário: pátio dos fundos, intervalo do almoço. A arquibancada está vazia. Música: guitarra baixa.
    c5_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Cena 5 — A arquibancada vazia", sprite: null, texto: "No almoço, a gangue do Kaito some da arquibancada. Reunião, alguém comenta. Por causa dos irmãos Oda.", proxima: "c5_cam1" },

    // O Ryuji está suspenso? (Rota D do Capítulo 1)
    c5_cam1: { caminhos: [
      { flag: "Ryuji_suspenso", proxima: "c5_r_susp" }
    ], proxima: "c5_r_normal" },
    c5_r_susp: { tipo: "narracao", texto: "A SN vai até lá mesmo assim, com o almoço na mão, procurando um lugar quieto. Do outro lado da grade dos fundos, na calçada, alguém assobia.", proxima: "c5_r_susp2" },
    c5_r_susp2: { tipo: "narracao", sprite: "ryuji", texto: "É o Ryuji. De moletom, sem uniforme, sentado no muro baixo do terreno vizinho, como se morasse ali.", proxima: "c5_r_susp3" },
    c5_r_susp3: { quem: "ryuji", texto: "Suspenso não é preso, princesa. Vim cobrar minha visita. Você não apareceu.", proxima: "c5_r_susp4" },
    c5_r_susp4: { quem: "eu", texto: "Foi ontem à noite que você foi suspenso. Faz doze horas.", proxima: "c5_r_susp5" },
    c5_r_susp5: { quem: "ryuji", texto: "Doze horas muito longas.", proxima: "c5_02" },
    c5_r_normal: { tipo: "narracao", texto: "A SN vai até lá mesmo assim, com o almoço na mão, procurando um lugar quieto. Mas a arquibancada não está vazia.", proxima: "c5_r_normal2" },
    c5_r_normal2: { tipo: "narracao", sprite: "ryuji", texto: "No degrau mais alto, deitado com um braço cobrindo os olhos, está o Ryuji. Matando aula, obviamente.", proxima: "c5_r_normal3" },
    c5_r_normal3: { quem: "ryuji", texto: "Olha só. A rainha da adrenalina. Veio me procurar?", proxima: "c5_r_normal4" },
    c5_r_normal4: { quem: "eu", texto: "Vim almoçar.", proxima: "c5_r_normal5" },
    c5_r_normal5: { quem: "ryuji", texto: "No território da gangue. Sozinha. Claro.", proxima: "c5_02" },

    c5_02: { tipo: "narracao", texto: "Do lado dele, meio escondida, a SN vê uma marmita. Rosa. Com adesivo de coelhinho na tampa. E um bilhete preso com fita: “Come tudo, mano!!! ♡”", proxima: "c5_03" },
    c5_03: { tipo: "narracao", texto: "O Ryuji percebe o olhar dela e joga o casaco em cima da marmita tão rápido que quase derruba tudo.", proxima: "c5_04" },
    c5_04: { quem: "ryuji", texto: "Você não viu nada.", proxima: "c5_05" },
    c5_05: { quem: "eu", texto: "Eu vi um coelhinho.", proxima: "c5_06" },
    c5_06: { quem: "ryuji", texto: "Você não viu coelhinho nenhum.", proxima: "c5_07" },
    c5_07: { quem: "eu", texto: "E um coração.", proxima: "c5_08" },
    c5_08: { tipo: "narracao", texto: "O Ryuji fica vermelho até a raiz do cabelo, que já é vermelho. O efeito é impressionante.", proxima: "c5_09" },
    c5_09: { quem: "ryuji", texto: "...É da minha irmã. Ela tem oito anos. Ela faz minha marmita desde que nossa mãe começou a trabalhar à noite. Se você contar pra alguém, eu...", proxima: "c5_10" },
    c5_10: { quem: "eu", texto: "Você o quê?", proxima: "c5_11" },
    c5_11: { quem: "ryuji", texto: "...Eu fico muito triste. Pronto. Satisfeita?", proxima: "c5_12" },
    c5_12: { tipo: "pensamento", texto: "O garoto que eu passei três anos evitando no corredor almoça sozinho uma marmita de coelhinho feita pela irmã de oito anos.", proxima: "c5_13" },
    c5_13: { tipo: "pensamento", texto: "Eu não sabia nada sobre ninguém naquela época. Eu só sabia ter medo.", proxima: "c5_14" },
    c5_14: { tipo: "narracao", texto: "Ela senta dois degraus abaixo dele e abre o próprio almoço. Os dois comem em silêncio por um tempo. Não é um silêncio ruim.", proxima: "c5_15" },
    c5_15: { quem: "ryuji", texto: "E aí? Você vai me contar como segura uma pilha de cadeiras com uma mão ou eu vou ter que descobrir sozinho?", proxima: "c5_16" },
    c5_16: { quem: "eu", texto: "Adrenalina.", proxima: "c5_17" },
    c5_17: { quem: "ryuji", texto: "Para de falar adrenalina! Eu pesquisei no Google! Adrenalina não faz isso!", proxima: "c5_18" },
    c5_18: { tipo: "narracao", texto: "Ele se senta, apoia o cotovelo no degrau entre eles e estende a mão aberta, com um sorriso de desafio.", proxima: "c5_19" },
    c5_19: { quem: "ryuji", texto: "Queda de braço. Agora. Se eu ganhar, você me conta a verdade.", proxima: "c5_20" },
    c5_20: { quem: "eu", texto: "E se eu ganhar?", proxima: "c5_21" },
    c5_21: { quem: "ryuji", texto: "Você não vai ganhar.", proxima: "c5_esc6" },

    // ▶ ESCOLHA 6 — A queda de braço com o Ryuji
    c5_esc6: { escolhas: [
      { texto: "A. Perder de propósito, bem devagar, fazendo cara de esforço.", proxima: "c5_6a_1", pontos: { ryuji: 1 }, flags: ["Ryuji_desconfia_derrota"] },
      { texto: "B. Ganhar. Em um segundo.", proxima: "c5_6b_1", pontos: { ryuji: 2, desvio: 1 }, flags: ["Ryuji_perdeu_queda"] },
      { texto: "C. Segurar no empate o tempo todo, sem deixar ele ganhar nem perder.", proxima: "c5_6c_1", pontos: { ryuji: 2 }, flags: ["Ryuji_empate"] }
    ]},
    c5_6a_1: { tipo: "narracao", texto: "Ela deixa o braço ir descendo aos pouquinhos, fazendo careta, bufando, até a mão tocar o degrau.", proxima: "c5_6a_2" },
    c5_6a_2: { quem: "ryuji", texto: "Ganhei.", proxima: "c5_6a_3" },
    c5_6a_3: { tipo: "narracao", texto: "Mas ele não comemora. Ele fica olhando para a mão dela, com a testa franzida.", proxima: "c5_6a_4" },
    c5_6a_4: { quem: "ryuji", texto: "Você me deixou ganhar.", proxima: "c5_6a_5" },
    c5_6a_5: { quem: "eu", texto: "Você ganhou porque é forte.", proxima: "c5_6a_6" },
    c5_6a_6: { quem: "ryuji", texto: "Não. Seu braço não tremeu nem uma vez. Quem perde de verdade treme.", proxima: "c5_6a_7" },
    c5_6a_7: { quem: "ryuji", texto: "...Tudo bem. Guarda seu segredo. Mas não mente pra mim de novo. Eu odeio que mintam pra mim.", proxima: "c5_22" },

    c5_6b_1: { tipo: "narracao", efeito: "tremor", texto: "Um segundo. A mão do Ryuji bate no degrau com um barulho seco. Uma lata de refrigerante pula e rola arquibancada abaixo.", proxima: "c5_6b_2" },
    c5_6b_2: { tipo: "narracao", texto: "Silêncio. O Ryuji fica olhando para a própria mão, deitada no degrau, como se fosse de outra pessoa.", proxima: "c5_6b_3" },
    c5_6b_3: { quem: "ryuji", texto: "...De novo.", proxima: "c5_6b_4" },
    c5_6b_4: { tipo: "narracao", texto: "Ela ganha de novo. E de novo. Na quinta vez, ele deita na arquibancada e começa a rir, um riso que vem lá de dentro, rouco, sem nenhuma provocação.", proxima: "c5_6b_5" },
    c5_6b_5: { quem: "ryuji", texto: "Você é um monstro. Um monstrinho de um metro e sessenta.", proxima: "c5_6b_6" },
    c5_6b_6: { quem: "ryuji", texto: "Eu gostei. Não sei por quê, mas eu gostei.", proxima: "c5_22" },

    c5_6c_1: { tipo: "narracao", texto: "Os braços ficam parados no meio. Um minuto. Dois. O Ryuji está suando, com uma veia saltando na testa. A SN continua comendo o almoço com a outra mão.", proxima: "c5_6c_2" },
    c5_6c_2: { quem: "ryuji", texto: "Você... está... comendo?", proxima: "c5_6c_3" },
    c5_6c_3: { quem: "eu", texto: "Está gostoso.", proxima: "c5_6c_4" },
    c5_6c_4: { tipo: "narracao", texto: "Ele solta o braço, cai para trás e cobre o rosto com as duas mãos.", proxima: "c5_6c_5" },
    c5_6c_5: { quem: "ryuji", texto: "Isso foi a coisa mais humilhante que já aconteceu comigo. E eu já fui pego pela minha irmã fantasiado de princesa pra festa dela.", proxima: "c5_6c_6" },
    c5_6c_6: { quem: "eu", texto: "Tem foto?", proxima: "c5_6c_7" },
    c5_6c_7: { quem: "ryuji", texto: "NÃO.", proxima: "c5_22" },

    // (todas as opções continuam aqui)
    c5_22: { tipo: "narracao", texto: "O sinal toca. O Ryuji pega a marmita de coelhinho com cuidado, como quem segura uma coisa preciosa, e enfia dentro do casaco.", proxima: "c5_23" },
    c5_23: { quem: "ryuji", texto: "Princesa. Hoje à tarde. O galpão.", proxima: "c5_24" },
    c5_24: { quem: "eu", texto: "O que tem?", proxima: "c5_25" },
    c5_25: { quem: "ryuji", texto: "Não vai. É sério. Os Oda não são que nem a turma de ontem. Eles brigam sujo.", proxima: "c5_26" },
    c5_26: { quem: "eu", texto: "Você vai?", proxima: "c5_27" },
    c5_27: { quem: "ryuji", texto: "Claro que eu vou. Mas eu não sou você.", proxima: "c5_28" },
    c5_28: { quem: "eu", texto: "Ainda bem.", proxima: "c5_29" },
    c5_29: { tipo: "narracao", sprite: null, texto: "Ele ri e vai embora. Mas, antes de sumir, olha para trás uma vez. Do mesmo jeito que o Takeo olhou ontem.", proxima: "c6_01" },

    /* =================== CENA 6 — O QUE O BLAKE PERCEBEU =================== */
    // Cenário: vestiário vazio, depois da educação física. Música: tema calmo e grave.
    c6_01: { tipo: "narracao", cenario: "vestiario", transicao: "tempo", legenda: "Cena 6 — O que o Blake percebeu", sprite: null, texto: "Depois da educação física, a SN volta ao vestiário para buscar a garrafa d'água que esqueceu. Os corredores já estão vazios.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", sprite: "blake", texto: "Ela não está sozinha. Sentado no banco comprido, com uma bolsa de gelo apoiada nos dedos, está o Blake.", proxima: "c6_03" },
    c6_03: { tipo: "narracao", texto: "Os nós dos dedos dele estão inchados e roxos. Ele não parece surpreso por ela estar ali. Parece que estava esperando.", proxima: "c6_04" },
    c6_04: { quem: "blake", texto: "Senta.", proxima: "c6_05" },
    c6_05: { tipo: "narracao", texto: "Não é um pedido. Mas também não é uma ordem. É o jeito Blake de falar. A SN senta na outra ponta do banco.", proxima: "c6_06" },
    c6_06: { quem: "eu", texto: "Sua mão.", proxima: "c6_07" },
    c6_07: { quem: "blake", texto: "Saco de pancada. Treinei demais ontem à noite.", proxima: "c6_08" },
    c6_08: { quem: "eu", texto: "Por quê?", proxima: "c6_09" },
    c6_09: { quem: "blake", texto: "Porque eu não consegui dormir.", proxima: "c6_10" },
    c6_10: { tipo: "narracao", texto: "Ele vira a bolsa de gelo. O gelo faz barulho lá dentro. Por um tempo, é o único som do vestiário.", proxima: "c6_11" },
    c6_11: { quem: "blake", texto: "Ontem você sabia onde ia ser a briga. Antes de todo mundo. Antes de mim.", proxima: "c6_12" },
    c6_12: { quem: "blake", texto: "Hoje de manhã, quando os Oda gritaram no portão, eu olhei pra janela da sua sala. Todo mundo estava assustado. Você, não. Você estava com cara de quem fez uma conta e deu errado.", proxima: "c6_13" },
    c6_13: { tipo: "pensamento", texto: "Ele estava olhando pra minha janela.", proxima: "c6_14" },
    c6_14: { quem: "blake", texto: "Eu não vou te forçar a nada. Mas eu tenho uma regra: eu não confio em quem eu não entendo. E eu quero confiar em você.", proxima: "c6_15" },
    c6_15: { quem: "blake", texto: "Então me ajuda a entender.", proxima: "c6_esc7" },

    // ▶ ESCOLHA 7 — O que dizer ao Blake?
    c6_esc7: { escolhas: [
      { texto: "A. Contar uma parte da verdade: “Eu sei que coisas ruins vão acontecer. Não sei explicar como.”", proxima: "c6_7a_1", pontos: { blake: 2, desvio: 2 }, flags: ["Blake_sabe_parte"] },
      { texto: "B. “Eu presto atenção. Igual a você. Só que eu tenho mais tempo pra isso.”", proxima: "c6_7b_1", pontos: { blake: 1 } },
      { texto: "C. Devolver a pergunta: “E por que você estava olhando pra minha janela, Blake?”", proxima: "c6_7c_1", pontos: { blake: 2 }, flags: ["Blake_sem_resposta"] }
    ]},
    c6_7a_1: { tipo: "narracao", texto: "O Blake não ri. Não arregala os olhos. Ele só fica quieto, pensando, do jeito que ele faz antes de qualquer briga.", proxima: "c6_7a_2" },
    c6_7a_2: { quem: "blake", texto: "Que tipo de coisa ruim?", proxima: "c6_7a_3" },
    c6_7a_3: { quem: "eu", texto: "Do tipo que não tem volta.", proxima: "c6_7a_4" },
    c6_7a_4: { tipo: "narracao", texto: "Ele olha para ela por muito tempo. Depois concorda com a cabeça, uma vez, devagar.", proxima: "c6_7a_5" },
    c6_7a_5: { quem: "blake", texto: "Tá. Eu não entendo. Mas eu acredito que você acredita. Por enquanto, isso basta.", proxima: "c6_7a_6" },
    c6_7a_6: { quem: "blake", texto: "Quando a coisa ruim for chegar, você me avisa. Antes. Combinado?", proxima: "c6_16" },

    c6_7b_1: { tipo: "narracao", texto: "O canto da boca do Blake se mexe. Quase um sorriso. Quase.", proxima: "c6_7b_2" },
    c6_7b_2: { quem: "blake", texto: "Resposta de quem não vai responder.", proxima: "c6_7b_3" },
    c6_7b_3: { quem: "eu", texto: "Resposta de quem não sabe como responder.", proxima: "c6_7b_4" },
    c6_7b_4: { quem: "blake", texto: "...Essa eu aceito.", proxima: "c6_16" },

    c6_7c_1: { tipo: "narracao", texto: "O Blake abre a boca. Fecha. A bolsa de gelo escorrega da mão dele e cai no chão.", proxima: "c6_7c_2" },
    c6_7c_2: { tipo: "narracao", texto: "Pela primeira vez desde que ela o conhece, o gigante de tatuagem no pescoço parece não saber o que dizer.", proxima: "c6_7c_3" },
    c6_7c_3: { quem: "blake", texto: "...Eu estava olhando pra Mio. Pra ver se ela estava bem.", proxima: "c6_7c_4" },
    c6_7c_4: { quem: "eu", texto: "A Mio senta na outra ponta da sala.", proxima: "c6_7c_5" },
    c6_7c_5: { quem: "blake", texto: "Ponto seu.", proxima: "c6_7c_6" },
    c6_7c_6: { tipo: "narracao", texto: "Ele pega a bolsa de gelo do chão e não olha para ela pelo resto da conversa. As orelhas dele estão vermelhas.", proxima: "c6_16" },

    // (todas as opções continuam aqui)
    c6_16: { tipo: "narracao", texto: "O Blake se levanta e pega a jaqueta do gancho.", proxima: "c6_17" },
    c6_17: { quem: "blake", texto: "Os Oda não querem o Kaito. Eles querem o Takeo. O Kaito é só a desculpa.", proxima: "c6_18" },
    c6_18: { quem: "eu", texto: "Por que o Takeo?", proxima: "c6_19" },
    c6_19: { quem: "blake", texto: "É isso que eu queria saber. Ele não fala. Nem comigo, nem com o Kaito.", proxima: "c6_20" },
    c6_20: { quem: "blake", texto: "Mas ele fala com você.", proxima: "c6_21" },
    c6_21: { tipo: "narracao", sprite: null, texto: "Ele sai do vestiário. A porta balança atrás dele, devagar, até fechar.", proxima: "c6_22" },
    c6_22: { tipo: "pensamento", texto: "Kaito, Blake, Ryuji. Todos me pediram a mesma coisa hoje, cada um do seu jeito: não vai ao galpão.", proxima: "c6_23" },
    c6_23: { tipo: "pensamento", texto: "E todos eles vão.", proxima: "c6_24" },
    c6_24: { tipo: "pensamento", texto: "Regra número 4. Ninguém morre. Ninguém.", proxima: "c7_01" },

    /* =================== CENA 7 — O GALPÃO =================== */
    // Cenário: galpão velho atrás da escola, 17h (usa "beco-mercado"). Céu cinza. Música: tema de tensão, mais pesado que no Capítulo 1.
    c7_01: { tipo: "narracao", cenario: "galpao", transicao: "tempo", legenda: "Cena 7 — O galpão", sprite: null, texto: "O galpão fica no terreno baldio atrás da quadra. Telhas quebradas, portão enferrujado, mato até o joelho. Ninguém usa há anos. Só as gangues.", proxima: "c7_02" },
    c7_02: { tipo: "narracao", texto: "A SN chega às 16h58, escondida atrás da caixa d'água, e o estômago dela afunda.", proxima: "c7_03" },
    c7_03: { tipo: "narracao", texto: "Não são dois. Os irmãos Oda trouxeram gente. Oito, talvez nove garotos de uniforme cinza, alguns segurando pedaços de pau, um com uma corrente enrolada no punho.", proxima: "c7_04" },
    c7_04: { tipo: "narracao", sprite: "kaito", texto: "Do outro lado, o Kaito, o Blake e mais quatro da gangue. O Ryuji chega pulando o muro, atrasado, de moletom. E, um pouco atrás de todos, tentando parecer maior do que é, o Takeo.", proxima: "c7_05" },
    c7_05: { tipo: "pensamento", texto: "Seis contra nove. Com pedaços de pau.", proxima: "c7_06" },
    c7_06: { tipo: "pensamento", texto: "Isso não existia da primeira vez. Isso é culpa minha.", proxima: "c7_07" },
    // Goro: troque quem por "goro" quando criar o personagem.
    c7_07: { quem: "goro", texto: "Olha só. O famoso Kaito. Pensei que ia ser mais alto.", proxima: "c7_08" },
    c7_08: { quem: "kaito", texto: "E eu pensei que você ia ser mais inteligente. Nove contra seis? Que vergonha, Goro.", proxima: "c7_09" },
    c7_09: { quem: "shinji", texto: "Ninguém aqui quer você, Kaito. Entrega o magrelo e todo mundo vai pra casa jantar.", proxima: "c7_10" },
    c7_10: { tipo: "narracao", texto: "Todos olham para o Takeo. Ele está pálido, tremendo. Mas dá um passo à frente.", proxima: "c7_11" },
    c7_11: { quem: "takeo", texto: "Se é comigo, é comigo. Deixa eles fora disso.", proxima: "c7_12" },
    c7_12: { quem: "blake", texto: "Takeo. Volta pra trás. Agora.", proxima: "c7_13" },
    c7_13: { quem: "ryuji", texto: "Magrelo, se você der mais um passo eu mesmo te bato.", proxima: "c7_14" },
    c7_14: { tipo: "narracao", texto: "O Shinji sorri. Ele tira alguma coisa do bolso e joga para o alto, pegando de volta. Um celular. Com uma capinha azul.", proxima: "c7_15" },
    c7_15: { quem: "shinji", texto: "Procurando isso, magrelo? Achamos no beco ontem. A foto que você tirou não está mais aqui. Mas o Jin quer saber se você fez cópia.", proxima: "c7_16" },
    c7_16: { tipo: "pensamento", texto: "Jin?", proxima: "c7_17" },
    c7_17: { tipo: "pensamento", texto: "Foto?", proxima: "c7_18" },
    c7_18: { tipo: "narracao", texto: "O Takeo fica completamente branco. O Kaito vira para ele devagar.", proxima: "c7_19" },
    c7_19: { quem: "kaito", texto: "Takeo. Que foto?", proxima: "c7_20" },
    c7_20: { tipo: "narracao", texto: "O Takeo não responde. E o Goro não espera.", proxima: "c7_21" },
    c7_21: { quem: "goro", efeito: "grito", texto: "Pega eles!", proxima: "c7_22" },
    c7_22: { tipo: "narracao", efeito: "tremor", texto: "Tudo explode ao mesmo tempo. Gritos. Madeira batendo em madeira. Alguém cai no mato. O Kaito luta rindo, o Blake luta em silêncio, o Ryuji luta xingando todo mundo.", proxima: "c7_23" },
    c7_23: { tipo: "narracao", texto: "E a SN, atrás da caixa d'água, vê tudo de uma vez. Quatro pessoas em perigo. Ela só consegue chegar a tempo em uma.", proxima: "c7_24" },
    c7_24: { tipo: "pensamento", texto: "Eu prometi que ia salvar todo mundo.", proxima: "c7_25" },
    c7_25: { tipo: "pensamento", texto: "Eu sou uma só.", proxima: "c7_esc8" },

    // ▶ ESCOLHA 8 — Quem ela ajuda primeiro? (os pontos somam à rota; não define rota nova)
    c7_esc8: { sugerir: true, escolhas: [
      { texto: "A. O Takeo: o Shinji está indo direto nele, com uma corrente.", proxima: "c7_8a_1", personagem: "takeo", pontos: { takeo: 3 }, flags: ["Galpao_salvou_Takeo"] },
      { texto: "B. O Kaito: dois garotos estão vindo por trás dele com pedaços de pau.", proxima: "c7_8b_1", personagem: "kaito", pontos: { kaito: 3 }, flags: ["Galpao_salvou_Kaito"] },
      { texto: "C. O Blake: o Goro está mirando nas mãos já machucadas dele.", proxima: "c7_8c_1", personagem: "blake", pontos: { blake: 3 }, flags: ["Galpao_salvou_Blake"] },
      { texto: "D. O Ryuji: ele está cercado por três, sozinho, perto do portão.", proxima: "c7_8d_1", personagem: "ryuji", pontos: { ryuji: 3 }, flags: ["Galpao_salvou_Ryuji"] }
    ]},

    /* ---------- A — Takeo ---------- */
    c7_8a_1: { tipo: "narracao", sprite: "takeo", texto: "O Shinji gira a corrente no ar e vai direto no Takeo, que levanta os braços na frente do rosto, sem fugir.", proxima: "c7_8a_2" },
    c7_8a_2: { tipo: "narracao", efeito: "tremor", texto: "A SN chega antes. Ela segura a corrente no meio do giro, enrola no próprio pulso e puxa. O Shinji é arrancado do chão e cai de costas no mato, sem entender o que aconteceu.", proxima: "c7_8a_3" },
    c7_8a_3: { quem: "shinji", texto: "Que... que diabos é você?", proxima: "c7_8a_4" },
    c7_8a_4: { quem: "eu", texto: "A Fantasma.", proxima: "c7_8a_5" },
    c7_8a_5: { tipo: "narracao", texto: "Ela joga a corrente longe, no telhado do galpão. Depois vira para o Takeo, que está olhando para ela de boca aberta.", proxima: "c7_8a_6" },
    c7_8a_6: { quem: "takeo", texto: "SN, você... você não devia...", proxima: "c7_8a_7" },
    c7_8a_7: { quem: "eu", texto: "Eu sei. Você vai me dizer isso o resto da vida, né?", proxima: "c7_8a_8" },
    c7_8a_8: { quem: "takeo", texto: "...Se você deixar, eu vou.", proxima: "c7_26" },

    /* ---------- B — Kaito ---------- */
    c7_8b_1: { tipo: "narracao", sprite: "kaito", texto: "O Kaito está ocupado com o Goro. Ele não vê os dois que chegam por trás dele com os pedaços de pau erguidos.", proxima: "c7_8b_2" },
    c7_8b_2: { tipo: "narracao", efeito: "tremor", texto: "A SN pega os dois pedaços de pau no ar, um em cada mão. Gira. Os dois garotos caem sentados, de mãos vazias.", proxima: "c7_8b_3" },
    c7_8b_3: { tipo: "narracao", texto: "O Kaito vira bem a tempo de ver. Ela de pé, um pedaço de pau em cada mão, o cabelo bagunçado, os sapatos dele enormes nos pés.", proxima: "c7_8b_4" },
    c7_8b_4: { tipo: "narracao", efeito: "flashback", texto: "Os olhos dele ficam distantes. Um parquinho. Uma menininha furiosa. O chão de areia batendo nas costas dele.", proxima: "c7_8b_5" },
    c7_8b_5: { quem: "kaito", texto: "...Era você.", proxima: "c7_8b_6" },
    c7_8b_6: { quem: "eu", texto: "O quê?", proxima: "c7_8b_7" },
    c7_8b_7: { quem: "kaito", texto: "Depois. Abaixa!", proxima: "c7_8b_8" },
    c7_8b_8: { tipo: "narracao", texto: "Ela abaixa. O punho do Kaito passa por cima da cabeça dela e acerta o Goro, que tinha levantado. Os dois ficam de costas um para o outro no meio da briga, como se tivessem feito isso a vida inteira.", proxima: "c7_26" },

    /* ---------- C — Blake ---------- */
    c7_8c_1: { tipo: "narracao", sprite: "blake", texto: "O Goro é o único ali do tamanho do Blake. E ele sabe exatamente onde bater: nas mãos já machucadas.", proxima: "c7_8c_2" },
    c7_8c_2: { tipo: "narracao", texto: "Na primeira pancada, o Blake solta um som abafado de dor. Na segunda, o braço dele cai.", proxima: "c7_8c_3" },
    c7_8c_3: { tipo: "narracao", efeito: "tremor", texto: "Na terceira, a SN está no meio. Ela segura o punho do Goro com as duas mãos. Ele empurra com o corpo inteiro. Ela não se mexe.", proxima: "c7_8c_4" },
    c7_8c_4: { quem: "eu", texto: "Ele já está machucado. Isso é covardia.", proxima: "c7_8c_5" },
    c7_8c_5: { tipo: "narracao", texto: "Ela empurra de volta. Só um pouco. O Goro, com todos os seus cem quilos, voa para trás e cai sentado num monte de telhas velhas.", proxima: "c7_8c_6" },
    c7_8c_6: { tipo: "narracao", texto: "O Blake fica olhando para ela, segurando a mão machucada.", proxima: "c7_8c_7" },
    c7_8c_7: { quem: "blake", texto: "...Ok. Isso eu também não entendo.", proxima: "c7_8c_8" },
    c7_8c_8: { quem: "eu", texto: "Mas você confia?", proxima: "c7_8c_9" },
    c7_8c_9: { quem: "blake", texto: "Agora mais do que antes.", proxima: "c7_26" },

    /* ---------- D — Ryuji ---------- */
    c7_8d_1: { tipo: "narracao", sprite: "ryuji", texto: "Três garotos de uniforme cinza encurralaram o Ryuji perto do portão. Ele já tem sangue no lábio e um olho começando a inchar. E continua sorrindo.", proxima: "c7_8d_2" },
    c7_8d_2: { quem: "ryuji", texto: "Só três? Tô até ofendido.", proxima: "c7_8d_3" },
    c7_8d_3: { tipo: "narracao", efeito: "tremor", texto: "A SN pega o portão de ferro enferrujado pela grade e puxa. A dobradiça arrebenta com um estalo. O portão inteiro cai em cima do mato, entre o Ryuji e os três garotos.", proxima: "c7_8d_4" },
    c7_8d_4: { tipo: "narracao", texto: "Os três olham para o portão no chão. Depois para a garota pequena de cabelo bagunçado. Depois uns para os outros. E correm.", proxima: "c7_8d_5" },
    c7_8d_5: { quem: "ryuji", texto: "...Você arrancou um portão.", proxima: "c7_8d_6" },
    c7_8d_6: { quem: "eu", texto: "Ele estava velho.", proxima: "c7_8d_7" },
    c7_8d_7: { quem: "ryuji", texto: "Se você falar adrenalina eu juro que eu choro.", proxima: "c7_8d_8" },
    c7_8d_8: { quem: "eu", texto: "Não ia falar.", proxima: "c7_8d_9" },
    c7_8d_9: { tipo: "narracao", texto: "Ele limpa o sangue do lábio com o polegar e ri, ofegante, olhando para ela como se estivesse vendo o céu pela primeira vez.", proxima: "c7_26" },

    // (todas as opções continuam aqui) — o preço
    c7_26: { tipo: "narracao", texto: "Uma sirene. Desta vez, de verdade, e perto. Os garotos de uniforme cinza se espalham pelo terreno como baratas quando a luz acende.", proxima: "c7_27" },
    c7_27: { tipo: "narracao", texto: "Na correria, alguém derruba a SN. Quando ela levanta, vê o que não viu enquanto salvava uma pessoa só.", proxima: "c7_cam_preco" },

    // O preço: quem ela não ajudou se machucou mais.
    c7_cam_preco: { caminhos: [
      { flag: "Galpao_salvou_Takeo", proxima: "c7_p_takeo" },
      { flag: "Galpao_salvou_Kaito", proxima: "c7_p_kaito" },
      { flag: "Galpao_salvou_Blake", proxima: "c7_p_blake" },
      { flag: "Galpao_salvou_Ryuji", proxima: "c7_p_ryuji" }
    ], proxima: "c7_p_takeo" },
    c7_p_takeo: { tipo: "narracao", sprite: "ryuji", flags: ["Ryuji_ferido"], texto: "O Ryuji está sentado encostado no muro, com o braço dobrado num ângulo estranho. Ele ficou sozinho contra três. Mesmo assim, quando vê a SN, levanta o polegar da mão boa.", proxima: "c7_28" },
    c7_p_kaito: { tipo: "narracao", sprite: "takeo", flags: ["Takeo_ferido"], texto: "O Takeo está no chão, encolhido, com a mão na barriga. O Shinji o alcançou. Ele está consciente, mas não consegue levantar sozinho.", proxima: "c7_28" },
    c7_p_blake: { tipo: "narracao", sprite: "kaito", flags: ["Kaito_ferido"], texto: "O Kaito tem um corte feio na sobrancelha, sangrando pelo rosto inteiro. Os dois de trás o pegaram. Ele ri mesmo assim, mas cambaleia ao levantar.", proxima: "c7_28" },
    c7_p_ryuji: { tipo: "narracao", sprite: "blake", flags: ["Blake_ferido"], texto: "O Blake está ajoelhado, segurando a mão direita contra o peito. O Goro o pegou de novo. Os dedos não fecham mais.", proxima: "c7_28" },

    c7_28: { tipo: "pensamento", texto: "Eu salvei um. E outro se machucou.", proxima: "c7_29" },
    c7_29: { tipo: "pensamento", texto: "De novo. Igual a ontem. Toda vez que eu puxo alguém pra fora, o mundo empurra outro pra dentro.", proxima: "c7_30" },
    c7_30: { tipo: "pensamento", efeito: "eco", texto: "“Primeiro eu tentaria entender por que vai acontecer. Senão, acontece de outro jeito.”", proxima: "c7_31" },
    c7_31: { tipo: "pensamento", texto: "A Hana tinha razão.", proxima: "c7_32" },
    c7_32: { tipo: "narracao", sprite: null, texto: "Do outro lado do terreno, já perto da rua, o Shinji para por um segundo antes de fugir. Ele olha direto para ela.", proxima: "c7_33" },
    c7_33: { quem: "shinji", efeito: "grito", texto: "Ei, Fantasma! O Jin vai adorar saber de você!", proxima: "c8_01" },

    /* =================== CENA 8 — A CAMINHADA DA NOITE =================== */
    // Cenário: rua do bairro, noite (usa "saida-colegio"). Postes acesos. Música: piano, bem lento.
    c8_01: { tipo: "narracao", cenario: "rua-noite", transicao: "tempo", legenda: "Cena 8 — A caminhada da noite", sprite: null, texto: "Já é noite quando a SN finalmente sai do pronto-socorro do bairro, onde levaram quem se machucou. O Kaito, o Blake e o Ryuji ficaram lá dentro, discutindo com a enfermeira.", proxima: "c8_02" },
    c8_02: { tipo: "narracao", sprite: "takeo", texto: "O Takeo está esperando na calçada. Com um curativo novo, em cima do curativo velho.", proxima: "c8_03" },
    c8_03: { quem: "takeo", texto: "Eu te levo em casa.", proxima: "c8_04" },
    c8_04: { quem: "eu", texto: "Eu moro perto.", proxima: "c8_05" },
    c8_05: { quem: "takeo", texto: "Eu sei. Eu te levo em casa mesmo assim.", proxima: "c8_06" },
    c8_06: { tipo: "narracao", texto: "Eles andam em silêncio. As ruas estão vazias. Só o barulho dos sapatos grandes demais da SN batendo na calçada, e um cachorro latindo longe.", proxima: "c8_07" },
    c8_07: { tipo: "narracao", texto: "Na pracinha da esquina, o Takeo para. Senta no balanço. Depois de um tempo, a SN senta no balanço do lado.", proxima: "c8_08" },
    c8_08: { quem: "takeo", texto: "Você quer saber da foto.", proxima: "c8_09" },
    c8_09: { quem: "eu", texto: "Eu quero saber se você está bem.", proxima: "c8_10" },
    c8_10: { tipo: "narracao", texto: "Ele ri, baixinho, olhando para os pés.", proxima: "c8_11" },
    c8_11: { quem: "takeo", texto: "Você sempre faz isso. Pergunta a coisa certa.", proxima: "c8_12" },
    c8_12: { tipo: "narracao", texto: "Ele balança um pouco. Para. Balança de novo.", proxima: "c8_13" },
    c8_13: { quem: "takeo", texto: "Semana passada, eu fui comprar remédio pra minha avó tarde da noite. No caminho, passei pelo estacionamento atrás do mercado.", proxima: "c8_14" },
    c8_14: { quem: "takeo", texto: "Tinha um carro preto lá. E um cara que eu nunca tinha visto entregando um envelope pra alguém da gangue da Reina. Muito dinheiro. Dava pra ver.", proxima: "c8_15" },
    c8_15: { quem: "takeo", texto: "Eu tirei uma foto. Eu não sei por quê. Achei que a Reina devia saber o que o pessoal dela fazia pelas costas dela.", proxima: "c8_16" },
    c8_16: { quem: "takeo", texto: "O cara do carro me viu. Eu corri. Depois descobri que o nome dele é Jin.", proxima: "c8_17" },
    c8_17: { tipo: "pensamento", texto: "“Eu preciso te contar uma coisa. Não sobre mim. Sobre a—”", proxima: "c8_18" },
    c8_18: { tipo: "pensamento", texto: "Sobre a Reina. Sobre a gangue dela. Era isso que ele queria me contar, dez anos atrás?", proxima: "c8_19" },
    c8_19: { quem: "eu", texto: "Você fez cópia? Da foto?", proxima: "c8_20" },
    c8_20: { tipo: "narracao", texto: "O Takeo não responde. Ele só olha para ela. E é a resposta.", proxima: "c8_21" },
    c8_21: { quem: "takeo", texto: "SN... eu não sou forte. Todo mundo sabe disso. Eu entrei na gangue porque o Kaito e o Blake me protegiam quando a gente era criança, e eu não queria ficar pra trás.", proxima: "c8_22" },
    c8_22: { quem: "takeo", texto: "Hoje, no galpão, eu fiquei com tanto medo que eu achei que ia vomitar. Que tipo de membro de gangue tem medo assim?", proxima: "c8_esc9" },

    // ▶ ESCOLHA 9 — O que dizer ao Takeo no balanço?
    c8_esc9: { escolhas: [
      { texto: "A. “Coragem não é não ter medo. É ficar mesmo com medo. Você sempre fica, Takeo.”", proxima: "c8_9a_1", pontos: { takeo: 3 }, flags: ["Takeo_coragem"] },
      { texto: "B. Segurar a corrente do balanço dele, para ele parar e olhar pra ela: “Você não precisa ser forte. Pra isso você tem a gente.”", proxima: "c8_9b_1", pontos: { takeo: 2 } },
      { texto: "C. “Então sai da gangue. Por favor. Antes que seja tarde.”", proxima: "c8_9c_1", pontos: { takeo: 1, desvio: 2 }, flags: ["Pediu_Takeo_sair"] }
    ]},
    c8_9a_1: { tipo: "narracao", texto: "O Takeo fica imóvel no balanço. Depois esfrega os olhos com a manga da jaqueta grande demais.", proxima: "c8_9a_2" },
    c8_9a_2: { quem: "takeo", texto: "Ninguém nunca me disse isso.", proxima: "c8_9a_3" },
    c8_9a_3: { quem: "eu", texto: "Então eu vou dizer até você acreditar.", proxima: "c8_9a_4" },
    c8_9a_4: { quem: "takeo", texto: "...Pode demorar.", proxima: "c8_9a_5" },
    c8_9a_5: { quem: "eu", texto: "Eu tenho tempo.", proxima: "c8_9a_6" },
    c8_9a_6: { tipo: "pensamento", texto: "Dessa vez, eu tenho.", proxima: "c8_23" },

    c8_9b_1: { tipo: "narracao", texto: "O balanço dele para. Os dois ficam muito perto, só a corrente entre eles.", proxima: "c8_9b_2" },
    c8_9b_2: { quem: "takeo", texto: "A gente?", proxima: "c8_9b_3" },
    c8_9b_3: { quem: "eu", texto: "O Kaito, o Blake, o Ryuji, a Mio, a Hana. Eu.", proxima: "c8_9b_4" },
    c8_9b_4: { quem: "takeo", texto: "Você falou você por último.", proxima: "c8_9b_5" },
    c8_9b_5: { quem: "eu", texto: "Porque é a mais importante.", proxima: "c8_9b_6" },
    c8_9b_6: { tipo: "narracao", texto: "O Takeo prende a respiração. A SN percebe o que disse. Nenhum dos dois solta a corrente.", proxima: "c8_23" },

    c8_9c_1: { tipo: "narracao", texto: "O rosto do Takeo muda. Não fica bravo. Fica triste.", proxima: "c8_9c_2" },
    c8_9c_2: { quem: "takeo", texto: "Se eu sair agora, quem vai me proteger do Jin? E quem vai proteger eles de mim, se eu falar alguma coisa errada?", proxima: "c8_9c_3" },
    c8_9c_3: { quem: "takeo", texto: "Não dá pra sair de uma coisa dessas no meio, SN. Você não sabe como é.", proxima: "c8_9c_4" },
    c8_9c_4: { tipo: "pensamento", texto: "Eu sei. Eu sei melhor do que ninguém como isso termina. E eu não posso contar.", proxima: "c8_23" },

    // (todas as opções continuam aqui)
    c8_23: { tipo: "narracao", texto: "Eles levantam dos balanços e andam o último quarteirão. Na frente do portão da casa dela, o Takeo para e mexe no bolso da jaqueta.", proxima: "c8_24" },
    c8_24: { tipo: "narracao", texto: "Ele tira um pendrive pequeno, azul, com um chaveiro de gatinho pendurado. Fica um tempo olhando para ele. Depois coloca na mão dela e fecha os dedos dela em volta.", proxima: "c8_25" },
    c8_25: { quem: "takeo", texto: "A cópia. Ninguém vai procurar com você.", proxima: "c8_26" },
    c8_26: { quem: "eu", texto: "Takeo, isso é perigoso pra você.", proxima: "c8_27" },
    c8_27: { quem: "takeo", texto: "É por isso que eu quero que fique com a pessoa em quem eu mais confio.", proxima: "c8_28" },
    c8_28: { tipo: "narracao", texto: "Ele sorri. O mesmo sorriso da foto. E vai embora antes que ela consiga devolver.", proxima: "c8_29" },
    c8_29: { tipo: "narracao", sprite: null, flags: ["SN_tem_pendrive"], texto: "A SN fica parada no portão de casa, com o pendrive apertado na mão, até o Takeo virar a esquina.", proxima: "ep_01" },

    /* =================== EPÍLOGO — O QUE EU SEI (2) =================== */
    // Cenário: quarto da SN, noite. Música: piano do prólogo.
    ep_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Epílogo — O que eu sei", sprite: null, texto: "No quarto, ela coloca o pendrive dentro do estojo, embaixo das canetas, e abre o caderno azul.", proxima: "ep_02" },
    ep_02: { tipo: "narracao", texto: "Na página das regras, ela passa o dedo pela regra número 4. Ninguém morre. Hoje, por pouco, ninguém morreu.", proxima: "ep_03" },
    ep_03: { tipo: "narracao", texto: "Ela vira a página e continua a lista de ontem:", proxima: "ep_04" },
    ep_04: { tipo: "narracao", texto: "6. A Sayuri. Eu lembro agora. Eu não vou esquecer de novo.", proxima: "ep_05" },
    ep_05: { tipo: "narracao", texto: "7. Os irmãos Oda não existiam da primeira vez. Ou existiam e nunca vieram até aqui.", proxima: "ep_06" },
    ep_06: { tipo: "narracao", texto: "8. Jin. Carro preto. Envelope com dinheiro para a gangue da Reina.", proxima: "ep_07" },
    ep_07: { tipo: "narracao", texto: "9. O Takeo tirou uma foto. A cópia está comigo.", proxima: "ep_08" },
    ep_08: { tipo: "narracao", texto: "10. Toda vez que eu salvo alguém, outra pessoa se machuca.", proxima: "ep_09" },
    ep_09: { tipo: "narracao", texto: "Ela para na décima linha por um bom tempo.", proxima: "ep_10" },
    ep_10: { tipo: "pensamento", texto: "Eu sou teimosa. A vovó sempre disse. “Quando você cisma, nem um caminhão te tira do lugar.”", proxima: "ep_11" },
    ep_11: { tipo: "pensamento", texto: "Então eu vou cismar. Se salvar um machuca outro, eu vou ter que ficar mais forte. Mais rápida. Mais esperta. Até dar pra salvar todos.", proxima: "ep_12" },
    ep_12: { tipo: "pensamento", texto: "...Ou até descobrir que não dá.", proxima: "ep_13" },
    ep_13: { tipo: "narracao", texto: "Ela tenta lembrar do rosto da Mio aos vinte e oito anos. Da franja. Do cachorro da foto.", proxima: "ep_14" },
    ep_14: { tipo: "narracao", efeito: "eco", texto: "Ela lembra do cachorro. Mas o rosto da Mio adulta já está borrado, como uma foto tirada com a mão tremendo.", proxima: "ep_15" },
    ep_15: { tipo: "pensamento", texto: "Está indo embora. A vida que eu tinha está indo embora, um pedacinho por dia.", proxima: "ep_16" },
    ep_16: { tipo: "pensamento", texto: "E eu não sei se fico triste ou aliviada.", proxima: "ep_17" },
    ep_17: { tipo: "narracao", texto: "O celular vibra. Uma mensagem. Número desconhecido de novo. Mas, desta vez, a mensagem vem assinada.", proxima: "ep_18" },
    ep_18: { quem: "mensagem", rotulo: "Número desconhecido", efeito: "eco", texto: "Precisamos conversar. Sozinhas. Amanhã, depois do karaokê. Não traz o Takeo. — R.", proxima: "ep_19" },
    ep_19: { tipo: "pensamento", texto: "R. Reina.", proxima: "ep_20" },
    ep_20: { tipo: "pensamento", texto: "Como ela sabe do karaokê?", proxima: "ep_21" },
    ep_21: { tipo: "narracao", texto: "A SN olha para o estojo, onde o pendrive está escondido. Depois para a janela, para a rua escura lá fora.", proxima: "ep_22" },
    ep_22: { tipo: "narracao", texto: "Lá embaixo, do outro lado da rua, um carro preto está parado com o farol apagado.", proxima: "ep_23" },
    ep_23: { tipo: "narracao", texto: "Ela pisca. Quando olha de novo, o carro já foi embora.", proxima: "ep_24" },
    ep_24: { tipo: "pensamento", texto: "Amanhã é sexta. Prova de física. Karaokê com a Hana. E a Reina.", proxima: "ep_25" },
    ep_25: { tipo: "pensamento", texto: "Regra número 5. Viver.", proxima: "ep_26" },
    ep_26: { tipo: "pensamento", texto: "Ninguém disse que ia ser fácil.", proxima: "ep_fim" },

    // Fim do Capítulo 2 (crie a entrada "capitulo2" em dados/capitulos.js)
    ep_fim: { fim: "capitulo2" }
  }
});

/*
 * GANCHO PARA O CAPÍTULO 3 (anotações do roteiro)
 *  • Sexta-feira: prova de física e karaokê com a Hana.
 *  • A Reina quer conversar sozinha com a SN. O que ela sabe? Como sabe do karaokê?
 *  • Quem é o Jin? O que estava no envelope? O carro preto na rua era dele?
 *  • O que tem na foto do pendrive?
 *  • A Sayuri vai se vingar?
 *  • O Kaito descobriu que a SN é a menina do parquinho (Galpao_salvou_Kaito)?
 *  • Quem se machucou no galpão (Ryuji_ferido, Takeo_ferido, Kaito_ferido ou Blake_ferido)?
 *
 * ESCOLHAS DO CAPÍTULO (9)
 *  1 Como começar o dia · 2 Takeo (caminho) · 3 Sayuri · 4 Kaito · 5 Mio e Hana (bullying)
 *  6 Ryuji (queda de braço) · 7 Blake · 8 Galpão (quem salvar) · 9 Takeo (balanço)
 *
 * FLAGS NOVAS
 *  SN_cabelo_solto · SN_mensagem_Takeo · Takeo_pressionado · Takeo_promessa
 *  Sayuri_humilhada · SN_de_meias · Sayuri_raiva · Kaito_riu · Amigas_sabem_bullying
 *  Hana_suspeita (5C) · Ryuji_desconfia_derrota · Ryuji_perdeu_queda · Ryuji_empate
 *  Blake_sabe_parte · Blake_sem_resposta · Galpao_salvou_Takeo/Kaito/Blake/Ryuji
 *  Ryuji_ferido / Takeo_ferido / Kaito_ferido / Blake_ferido · Takeo_coragem
 *  Pediu_Takeo_sair · SN_tem_pendrive
 */