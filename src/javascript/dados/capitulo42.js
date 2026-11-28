/*
 * =====================================================================
 *  CAPÍTULO 42 — Capacete vermelho
 *  Sexta-feira, logo depois do Capítulo 41.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Cenas com todos os meninos em todas as rotas. Bloco de rota à noite.
 *
 *  CONTEXTO (Cap. 41, versão alterada pela autora)
 *    • A SN pintou a placa da oficina SÓ com o Victor (o Takeo foi fazer raio-x). Quase-momento: o Victor tirou um
 *      risco de tinta azul da bochecha dela com o polegar e olhou pra boca dela. O Caramelo latiu.
 *    • Do outro lado da rua, alguém (chaveiros) tirou foto exatamente desse segundo. A Serena mandou a foto pro Kaito:
 *      "achei que você devia saber 🤍". O Kaito viu, não contou nada pra SN. "Amanhã. Sete horas."
 *    • "Ele fala da foto das caixas. Ele não fala da outra."
 *
 *  O QUE ACONTECE
 *    • O Kaito vem às sete, mas está diferente. Não fecha a fivela. Não coloca a mão em cima da dela no sinal.
 *    • A Serena, pelos lados, vem falando pra ele há dias que a SN "vive com os outros caras", que "trata todo
 *      mundo igual", que ele é "só mais um". A SN não ouve isso. Ela vê os dois conversando de longe e vê o efeito.
 *    • O Kaito fica cada vez mais distante. Responde com uma palavra. Senta longe no intervalo.
 *    • A SN fica muito chateada. Não chora na frente de ninguém. Mas fica.
 *    • O Victor se aproxima mais: percebe, fica do lado, faz ela rir, lembra da placa amanhã.
 *    • Takeo: o osso colou, tira o gesso semana que vem. Blake e Ryuji percebem que tem alguma coisa errada.
 *    • A Serena tenta mais: na educação física, "torce o pé". Começa a chover na saída.
 *    • E o Kaito cede? Ele leva a Serena pra casa na garupa. Com o capacete vermelho. O da SN.
 *    • Bloco de rota à noite.
 *
 *  REGRAS
 *    • Sala da SN: Takeo, Mio, Hana, Reina, Ren, Akane. Kaito, Blake, Ryuji, Victor e Serena são de outras salas.
 *    • Sem xadrez no Ren. O Ren não manda mensagem. Sem narrar roupa. Sem flashback de passado.
 *    • A Serena não conta os planos dela pra SN. Ela age e sorri.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Mio, Hana, Reina, Akane, Kaito, Takeo, Victor, Blake, Ryuji, Ren, Serena, Caramelo.
 *    Sem nome / rótulo: Professor de educação física, Amiga da Serena.
 *
 *  CENÁRIOS
 *    Hall → "apartamento" · Escola: saida-colegio, sala-de-aula, corredor, patio-fundos, vestiario
 *    Rua / garagem do Victor → "beco-mercado" · Quarto → "quarto-sn"
 *
 *  Crie a entrada "capitulo42" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo42", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — SETE HORAS =================== */
    c1_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Sexta, 6h55 — Cena 1", sprite: null, texto: "Sexta-feira. Ela acordou antes do despertador e ficou deitada, olhando o celular. A conversa com o Kaito. A última mensagem dele, sobre a foto das caixas. E nada sobre a outra coisa. A coisa que deixou ele com aquela cara na esquina da padaria.", proxima: "c1_02" },
    c1_02: { tipo: "pensamento", texto: "Ele disse “amanhã, sete horas”. Ele sempre vem. Ele vai vir.", proxima: "c1_03" },
    c1_03: { tipo: "narracao", texto: "Sete horas. O celular vibra. Ela solta o ar que estava segurando sem perceber.", proxima: "c1_04" },
    c1_04: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Embaixo.", proxima: "c1_05" },
    c1_05: { tipo: "pensamento", texto: "Uma palavra. Nem “tô”. Nem “desce”. Só “embaixo”.", proxima: "c1_06" },
    c1_06: { roupa: "escolar", tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", sprite: "kaito", texto: "No hall, ele está no lugar de sempre, no pé dos três degraus com a fita preta. Mas não está encostado na parede. Está em pé, reto, com o capacete vermelho na mão. Não no braço. Na mão, estendido, pronto para entregar.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", texto: "Ele não sorri quando ela aparece no degrau. Ele não sorri antes de ela chegar. Ele olha para ela, rápido, e depois olha para o capacete.", proxima: "c1_08" },
    c1_08: { quem: "kaito", texto: "Bom dia.", proxima: "c1_09" },
    c1_09: { quem: "eu", texto: "Bom dia.", proxima: "c1_10" },
    c1_10: { tipo: "narracao", texto: "Ela desce os três degraus. Ele estende o capacete. Ela pega. Ela espera. Todo dia, desde a lan, ele fecha a fivela embaixo do queixo dela, devagar, com os dedos no pescoço. Ela espera.", proxima: "c1_11" },
    c1_11: { tipo: "narracao", texto: "Ele já está virando para a moto.", proxima: "c1_12" },
    c1_12: { tipo: "narracao", texto: "Ela fecha a fivela sozinha. Os dedos dela erram duas vezes. Na terceira, fecha.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — O hall
    c1_esc1: { escolhas: [
      { texto: "A. “Kaito. Aconteceu alguma coisa?”", proxima: "c1_1a_1", pontos: { kaito: 1 }, flags: ["Aconteceu_algo"] },
      { texto: "B. Não falar nada. Subir na moto. Se ele quer silêncio, ela também sabe ficar em silêncio.", proxima: "c1_1b_1", pontos: {}, flags: ["Silencio_moto"] },
      { texto: "C. “Você esqueceu a fivela.” Leve. Como piada. Pra ver o que ele faz.", proxima: "c1_1c_1", pontos: { kaito: 1 }, flags: ["Esqueceu_fivela"] }
    ]},
    c1_1a_1: { quem: "eu", texto: "Kaito. Aconteceu alguma coisa?", proxima: "c1_1a_2" },
    c1_1a_2: { tipo: "narracao", texto: "Ele para com a mão no guidão. Fica de costas para ela. Um segundo. Dois.", proxima: "c1_1a_3" },
    c1_1a_3: { quem: "kaito", texto: "...Não. Vamos atrasar.", proxima: "c1_13" },
    c1_1b_1: { tipo: "narracao", texto: "Ela não fala nada. Sobe na moto. Ele também não fala nada. Os dois em silêncio no hall, como dois estranhos esperando o mesmo ônibus.", proxima: "c1_13" },
    c1_1c_1: { quem: "eu", texto: "Você esqueceu a fivela.", proxima: "c1_1c_2" },
    c1_1c_2: { tipo: "narracao", texto: "Ela fala leve, como piada. Ele vira. Olha para a fivela já fechada embaixo do queixo dela. Olha para ela.", proxima: "c1_1c_3" },
    c1_1c_3: { quem: "kaito", texto: "Você fecha sozinha.", proxima: "c1_1c_4" },
    c1_1c_4: { tipo: "narracao", texto: "Não é grosseiro. Não é nada. É só uma constatação. E é exatamente isso que machuca.", proxima: "c1_13" },

    // (todas as opções continuam aqui)
    c1_13: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", sprite: null, texto: "Na garupa, ela segura na camisa dele. Não na cintura. Ela não sabe por quê. A mão dela escolheu sozinha. No primeiro sinal vermelho, ele não coloca a mão em cima da dela. No segundo também não. No terceiro, ela para de esperar.", proxima: "c1_14" },
    c1_14: { tipo: "narracao", texto: "Na frente da escola, ele para no meio-fio. Ela desce. Tira o capacete. Devolve. Os dedos não se encostam. Ele pendura o capacete vermelho no guidão e vai estacionar do outro lado da rua sem falar “bom dia de aula”, nem nada.", proxima: "c1_15" },
    c1_15: { tipo: "narracao", sprite: "serena", texto: "No muro, a Serena. Sozinha. Ela não olha para a SN. Ela olha para o Kaito estacionando, do outro lado da rua. E sorri. Um sorriso pequeno, contente, de quem está vendo uma planta crescer.", proxima: "c1_16" },
    c1_16: { tipo: "pensamento", texto: "Ela sabe. Ela sabe o que mudou. Eu não sei, e ela sabe.", proxima: "c2_01" },

    /* =================== CENA 2 — A MIO =================== */
    c2_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Primeira aula — Cena 2", sprite: "mio", texto: "Na sala, a Mio olha para ela uma vez quando ela senta. Só uma. E fecha o caderno.", proxima: "c2_02" },
    c2_02: { quem: "mio", texto: "O que aconteceu.", proxima: "c2_03" },
    c2_03: { tipo: "narracao", texto: "Não é pergunta. A Mio conhece todas as caras dela.", proxima: "c2_04" },
    c2_04: { quem: "eu", texto: "Nada. Ele está esquisito. Desde ontem. Desde a esquina da padaria. Ele não fechou a fivela hoje.", proxima: "c2_05" },
    c2_05: { quem: "mio", texto: "Ele não fechou a fivela.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", texto: "A Mio fala isso como se fosse a coisa mais grave que já aconteceu no mundo. E é, um pouco.", proxima: "c2_07" },
    c2_07: { quem: "mio", texto: "Ontem à noite a rede de fofoca disse que a Serena ficou na saída conversando com ele. Bastante. Perto da moto. Eu não sei sobre o quê. Ninguém ouviu. Ela sempre fala baixo.", proxima: "c2_08" },
    c2_08: { quem: "mio", texto: "Ele mandou alguma coisa? Ele falou alguma coisa?", proxima: "c2_09" },
    c2_09: { quem: "eu", texto: "Ele falou “embaixo”. Uma palavra.", proxima: "c2_10" },
    c2_10: { tipo: "narracao", texto: "A Mio pega a mão dela por baixo da carteira. Aperta. Não fala nada. Ela não precisa.", proxima: "c2_11" },
    c2_11: { tipo: "narracao", sprite: "takeo:escolar", texto: "Da carteira de trás, o Takeo cutuca o ombro dela. Ela vira. Ele está sorrindo, com o gesso levantado como troféu.", proxima: "c2_12" },
    c2_12: { quem: "takeo", sprite: "takeo:escolar", texto: "O osso colou! O raio-x de ontem. O médico disse que colou perfeito. Quarta-feira eu tiro o gesso. Quarta! A minha avó fez bolo de comemoração antes da hora. Ela diz que dá sorte.", proxima: "c2_13" },
    c2_13: { tipo: "narracao", texto: "Ele para. Olha para a cara dela. O sorriso dele diminui um pouco.", proxima: "c2_14" },
    c2_14: { quem: "takeo", sprite: "takeo:escolar", texto: "...Você está com cara de quem não dormiu. De novo.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — Com o Takeo
    c2_esc2: { escolhas: [
      { texto: "A. “Quarta-feira. Eu vou bater palma de pé quando você levantar o braço.” Sorrir de verdade, por ele.", proxima: "c2_2a_1", pontos: { takeo: 3 }, flags: ["Palma_quarta"] },
      { texto: "B. “Eu dormi pouco. Me conta do raio-x. Com detalhes. Eu preciso de uma coisa boa hoje.”", proxima: "c2_2b_1", pontos: { takeo: 3 }, flags: ["Coisa_boa_Takeo"] },
      { texto: "C. “Tô bem, Takeo.” E virar pra frente.", proxima: "c2_2c_1", pontos: { takeo: 1 }, flags: ["To_bem_Takeo"] }
    ]},
    c2_2a_1: { quem: "eu", texto: "Quarta-feira. Eu vou bater palma de pé quando você levantar o braço.", proxima: "c2_2a_2" },
    c2_2a_2: { tipo: "narracao", texto: "Ela sorri. De verdade. Por ele. E o Takeo sorri de volta, aliviado, como quem conseguiu consertar uma coisa pequena.", proxima: "c2_15" },
    c2_2b_1: { quem: "eu", texto: "Eu dormi pouco. Me conta do raio-x. Com detalhes. Eu preciso de uma coisa boa hoje.", proxima: "c2_2b_2" },
    c2_2b_2: { tipo: "narracao", texto: "O Takeo conta. Com detalhes demais. A máquina de raio-x, o avental de chumbo que pesava mais que ele, a enfermeira que achou que a avó era a mãe dele, a avó que ficou muito feliz com isso. Ela ri no meio. Ele percebe que ela riu, e conta mais devagar, para durar mais.", proxima: "c2_15" },
    c2_2c_1: { quem: "eu", texto: "Tô bem, Takeo.", proxima: "c2_2c_2" },
    c2_2c_2: { tipo: "narracao", texto: "Ela vira para frente. Atrás dela, o Takeo fica quieto. Ele não insiste. Mas, quando a aula acaba, ela encontra, dentro do estojo dela, um papelzinho dobrado com a letra dele: “Quando você quiser contar, eu sou bom em ouvir. E em guardar.”", proxima: "c2_15" },

    // (todas as opções continuam aqui)
    c2_15: { tipo: "narracao", sprite: "ren", texto: "Na carteira perto da porta, o Ren está lendo. Quando ela passa, para ir apontar o lápis, ele levanta os olhos. Olha para a cara dela. Um segundo. E volta para o livro. Ela não para. Ela não quer saber o que ele viu.", proxima: "c3_01" },

    /* =================== CENA 3 — O BANCO VAZIO =================== */
    c3_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Intervalo — Cena 3", sprite: null, texto: "No intervalo, ela desce para o pátio dos fundos. O banco da árvore torta. O Blake está lá, com a lancheira azul. O Ryuji está lá, comendo a segunda coxinha. E o Kaito não está.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "Ela olha em volta. Ele está do outro lado do pátio, perto da quadra, encostado na grade, sozinho. Com um onigiri do tio na mão, sem comer.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", texto: "Ela vai até lá. Atravessa o pátio inteiro. Para do lado dele, na grade.", proxima: "c3_04" },
    c3_04: { quem: "eu", texto: "Você não vai sentar no banco hoje?", proxima: "c3_05" },
    c3_05: { quem: "kaito", sprite: "kaito", texto: "Aqui está mais fresco.", proxima: "c3_06" },
    c3_06: { tipo: "narracao", texto: "É a mesma desculpa que ele deu na terça, quando sentou no chão na frente do banco para não ficar do lado da Serena. Só que hoje ele está usando com ela.", proxima: "c3_07" },
    c3_07: { tipo: "pensamento", texto: "Ele está fugindo de mim. Com a mesma desculpa que usou pra fugir dela.", proxima: "c3_08" },
    c3_08: { tipo: "narracao", texto: "Ela fica do lado dele mesmo assim. Encostada na grade. Os dois olhando a quadra vazia. Ele dá uma mordida no onigiri. Mastiga muito tempo.", proxima: "c3_09" },
    c3_09: { quem: "kaito", texto: "Você foi na garagem do Victor ontem.", proxima: "c3_10" },
    c3_10: { quem: "eu", texto: "Fui. A placa. Eu te falei. Ficou bonita.", proxima: "c3_11" },
    c3_11: { quem: "kaito", texto: "Só vocês dois.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", texto: "Não é pergunta. Ela olha para ele. Ele está olhando para a quadra.", proxima: "c3_13" },
    c3_13: { quem: "eu", texto: "O Takeo foi fazer raio-x. Eu te falei isso também.", proxima: "c3_14" },
    c3_14: { quem: "kaito", texto: "...Falou.", proxima: "c3_15" },
    c3_15: { tipo: "narracao", texto: "Ele termina o onigiri. Amassa o papel. Fica com a bolinha de papel na mão, apertando.", proxima: "c3_16" },
    c3_16: { quem: "kaito", texto: "Você anda muito com eles. Com o Victor. Com o Takeo. Com o Blake. Com o Ryuji. Você trata todo mundo igual.", proxima: "c3_17" },
    c3_17: { tipo: "narracao", texto: "Ele fala devagar, como quem repete uma frase que ouviu e ainda está decidindo se acredita. A frase não é dele. Ela percebe. O Kaito não fala desse jeito. O Kaito fala três palavras por vez, e nunca sobre os outros.", proxima: "c3_18" },
    c3_18: { quem: "kaito", texto: "Eu achei que... deixa. Não é nada.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — Na grade
    c3_esc3: { escolhas: [
      { texto: "A. “Quem te disse isso, Kaito? Isso não é coisa que você fala.”", proxima: "c3_3a_1", pontos: { kaito: 2 }, flags: ["Quem_disse"] },
      { texto: "B. “Eles são meus amigos. Você é... você sabe o que você é.”", proxima: "c3_3b_1", pontos: { kaito: 2 }, flags: ["Voce_sabe"] },
      { texto: "C. Não responder. Ir embora da grade. Se ele quer ficar sozinho com a frase dos outros, que fique.", proxima: "c3_3c_1", pontos: { desvio: 1 }, flags: ["Saiu_grade"] }
    ]},
    c3_3a_1: { quem: "eu", texto: "Quem te disse isso, Kaito? Isso não é coisa que você fala.", proxima: "c3_3a_2" },
    c3_3a_2: { tipo: "narracao", texto: "Ele fica parado. A bolinha de papel na mão. Ela vê ele quase responder. A boca abre. E fecha.", proxima: "c3_3a_3" },
    c3_3a_3: { quem: "kaito", texto: "Ninguém. Eu que pensei.", proxima: "c3_3a_4" },
    c3_3a_4: { tipo: "pensamento", texto: "Mentira. O Kaito mente mal. Ele ficou vermelho na orelha. Não de vergonha. De mentira.", proxima: "c3_19" },
    c3_3b_1: { quem: "eu", texto: "Eles são meus amigos. Você é... você sabe o que você é.", proxima: "c3_3b_2" },
    c3_3b_2: { tipo: "narracao", texto: "Ele vira a cabeça. Olha para ela. Pela primeira vez no dia, de verdade, nos olhos. E por um segundo, ela vê o Kaito de antes. O do forno. O do jardim.", proxima: "c3_3b_3" },
    c3_3b_3: { quem: "kaito", texto: "...Eu sei?", proxima: "c3_3b_4" },
    c3_3b_4: { tipo: "narracao", texto: "Ele não fala mais nada. Ele vira de volta para a quadra. O segundo passou. Mas existiu.", proxima: "c3_19" },
    c3_3c_1: { tipo: "narracao", texto: "Ela não responde. Ela desencosta da grade e vai embora, atravessando o pátio de volta, sem olhar para trás.", proxima: "c3_3c_2" },
    c3_3c_2: { tipo: "pensamento", texto: "Ele vai me chamar. Ele vai falar “espera”. Ele sempre fala alguma coisa.", proxima: "c3_3c_3" },
    c3_3c_3: { tipo: "narracao", texto: "Ele não chama.", proxima: "c3_19" },

    // (todas as opções continuam aqui)
    c3_19: { tipo: "narracao", sprite: "serena", texto: "Quando ela volta para o banco, ela vê, pelo canto do olho, a Serena atravessar o pátio. Devagar. Com uma latinha de suco de pêssego na mão. E parar do lado do Kaito, na grade. No mesmo lugar onde ela estava. Ela entrega a latinha. Ele pega. Ela fala alguma coisa baixo. Ele ouve.", proxima: "c3_20" },
    c3_20: { tipo: "narracao", sprite: null, texto: "A SN não ouve o que ela fala. Ninguém ouve. A Serena sempre fala baixo.", proxima: "c3_21" },
    c3_21: { tipo: "narracao", sprite: "blake", texto: "No banco, o Blake estende metade do sanduíche de frango para ela, sem perguntar. Ela pega. Ele olha para a grade. Depois para ela.", proxima: "c3_22" },
    c3_22: { quem: "blake", texto: "Ele está assim desde ontem à noite. Ele não falou com ninguém na mensagem do grupo. O tio perguntou se ele estava doente.", proxima: "c3_23" },
    c3_23: { quem: "ryuji", sprite: "ryuji", texto: "Ele colocou sal no meu suco hoje. De propósito? Não sei. Eu bebi mesmo assim. Por solidariedade.", proxima: "c3_24" },
    c3_24: { tipo: "narracao", sprite: null, texto: "O Ryuji tenta fazer ela rir. Ela tenta rir. Sai pela metade. O Ryuji para de tentar e fica quieto do lado dela, o que para o Ryuji é a maior demonstração de afeto possível.", proxima: "c3_25" },
    c3_25: { tipo: "narracao", texto: "E aí alguém senta no braço do banco, do lado dela, perto demais, com um pirulito de morango na boca.", proxima: "c4_01" },

    /* =================== CENA 4 — O VICTOR =================== */
    c4_01: { tipo: "narracao", transicao: "tempo", legenda: "Cena 4", sprite: "victor", texto: "O Victor. Ele não fala nada no começo. Ele olha para a grade, onde a Serena está do lado do Kaito. Olha para o sanduíche intocado na mão dela. Olha para a cara dela.", proxima: "c4_02" },
    c4_02: { quem: "victor", texto: "Tá. Eu vou falar uma coisa e você vai fingir que não ouviu, porque eu não sou bom nessas coisas.", proxima: "c4_03" },
    c4_03: { quem: "victor", texto: "Quem fica com essa cara por causa de uma fivela de capacete merece uma fivela melhor.", proxima: "c4_04" },
    c4_04: { quem: "eu", texto: "Como você sabe da fivela?", proxima: "c4_05" },
    c4_05: { quem: "victor", texto: "A Mio contou pra Hana, que contou pra mim, que estava passando. A rede de fofoca hoje está trabalhando pra você. Não contra.", proxima: "c4_06" },
    c4_06: { tipo: "narracao", texto: "Ele tira o pirulito da boca. Olha para ela de lado. E, pela primeira vez desde que ela conhece ele, não tem nenhuma piada pronta no rosto dele.", proxima: "c4_07" },
    c4_07: { quem: "victor", texto: "Ontem. Na garagem. Foi o melhor dia da minha semana. Talvez do mês. Você pintou o nome da minha mãe reto. Ninguém nunca fez nada reto pra mim.", proxima: "c4_08" },
    c4_08: { quem: "victor", texto: "Eu não sei o que deu no líder. Eu não vou falar mal dele. Mas se ele não está vendo o que tem na frente dele hoje, alguém tem que ver.", proxima: "c4_09" },
    c4_09: { tipo: "pensamento", texto: "O Victor sem piada. Duas vezes em dois dias. E ele está olhando pra mim do jeito que ele olhou na garagem. Um palmo. O polegar. A tinta azul.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — O Victor
    c4_esc4: { escolhas: [
      { texto: "A. Encostar o ombro no dele. “Obrigada, Victor. Por ver.”", proxima: "c4_4a_1", pontos: { victor: 3 }, flags: ["Obrigada_ver"] },
      { texto: "B. “Me faz rir. Qualquer coisa. Eu preciso.”", proxima: "c4_4b_1", pontos: { victor: 3 }, flags: ["Me_faz_rir"] },
      { texto: "C. “Victor. Ontem, na garagem. A tinta. O que foi aquilo?”", proxima: "c4_4c_1", pontos: { victor: 2 }, flags: ["O_que_foi_tinta"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "Ela encosta o ombro no dele. Ele fica parado. Depois encosta de volta, devagar, com cuidado, como quem segura passarinho.", proxima: "c4_4a_2" },
    c4_4a_2: { quem: "eu", texto: "Obrigada, Victor. Por ver.", proxima: "c4_4a_3" },
    c4_4a_3: { quem: "victor", texto: "...Eu sempre vejo você. É fácil. Você é a única coisa colorida nesse pátio.", proxima: "c4_10" },
    c4_4b_1: { quem: "eu", texto: "Me faz rir. Qualquer coisa. Eu preciso.", proxima: "c4_4b_2" },
    c4_4b_2: { tipo: "narracao", texto: "O Victor levanta. Fica em pé na frente dela, no meio do pátio. Junta as mãos, abaixa os olhos, e começa a imitar o Caramelo tentando entender a placa da oficina. Latido incluído. Cabeça inclinada incluída. A coceira atrás da orelha com o pé incluída.", proxima: "c4_4b_3" },
    c4_4b_3: { tipo: "narracao", texto: "Ela ri. Primeiro pela metade. Depois inteira. Depois tão alto que o pátio inteiro vira, e o Ryuji cai do banco, e o Blake sorri de canto, e a Mio aplaude do muro do bebedouro.", proxima: "c4_4b_4" },
    c4_4b_4: { quem: "victor", texto: "Pronto. Riu. Missão cumprida. Agora eu vou ter que lidar com o fato de que eu fiz isso no meio da escola.", proxima: "c4_10" },
    c4_4c_1: { quem: "eu", texto: "Victor. Ontem, na garagem. A tinta. O que foi aquilo?", proxima: "c4_4c_2" },
    c4_4c_2: { tipo: "narracao", texto: "Ele para com o pirulito no meio do caminho da boca. Fica vermelho. O Victor vermelho, no meio do pátio.", proxima: "c4_4c_3" },
    c4_4c_3: { quem: "victor", texto: "...Tinha tinta no seu rosto. Eu tirei. Só isso.", proxima: "c4_4c_4" },
    c4_4c_4: { tipo: "narracao", texto: "Ele fala “só isso” do jeito que o Kaito fala “não é nada”. Ela percebe. Ele percebe que ela percebeu. E coloca o pirulito na boca rápido, para não ter que falar mais.", proxima: "c4_10" },

    // (todas as opções continuam aqui)
    c4_10: { quem: "victor", texto: "Amanhã. A placa. Sete horas. A minha mãe chega do trabalho. Você vem, né? Você prometeu. Você tem que ver ela chorar com a margarina e com a placa no mesmo dia.", proxima: "c4_11" },
    c4_11: { quem: "eu", texto: "Eu vou.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", texto: "Do outro lado do pátio, na grade, o Kaito está olhando para o banco. Para ela. Para o Victor no braço do banco, encostado no ombro dela. A latinha de suco de pêssego da Serena na mão dele, fechada. E a Serena do lado, falando baixinho, olhando para a mesma coisa que ele.", proxima: "c4_13" },
    c4_13: { tipo: "pensamento", texto: "Ele está vendo exatamente o que ela quer que ele veja. Eu e o Victor. No banco. Igual na foto.", proxima: "c4_14" },
    c4_14: { tipo: "pensamento", texto: "Que foto?", proxima: "c4_15" },
    c4_15: { tipo: "narracao", texto: "Ela não sabe da foto. Ela só sabe que, quando o Kaito vira de costas para a grade, ele vira devagar, como quem desiste de uma coisa.", proxima: "c5_01" },

    /* =================== CENA 5 — O TORNOZELO (Serena) =================== */
    c5_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Educação física — Cena 5", sprite: null, texto: "A última aula é educação física, junto com a turma do bloco C, porque a quadra é uma só. Vôlei. O céu está cinza, pesado, com aquele cheiro de chuva que ainda não caiu.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", texto: "A turma da Serena tem aula vaga, e metade dela está sentada na arquibancada, assistindo. Ela está na primeira fila. Do lado da rede. Do lado de onde o Kaito está jogando.", proxima: "c5_03" },
    c5_03: { tipo: "narracao", texto: "No meio do jogo, uma bola sai da quadra e vai parar na arquibancada. A Serena levanta para pegar. Desce os degraus correndo, com a bola na mão, sorrindo. E, no último degrau, o pé dela vira.", proxima: "c5_04" },
    c5_04: { tipo: "narracao", efeito: "tremor", texto: "Ela cai sentada no chão da quadra, com a bola rolando, e grita. Um grito fino, de dor. As amigas dela correm. O professor de educação física apita.", proxima: "c5_05" },
    c5_05: { quem: "desconhecido", rotulo: "Professor de educação física", texto: "Ninguém mexe! Deixa eu ver!", proxima: "c5_06" },
    c5_06: { tipo: "narracao", sprite: "serena", texto: "Ele olha o tornozelo. Não está inchado. Não está roxo. A Serena está chorando, segurando o tornozelo com as duas mãos, mordendo o lábio, olhando para a quadra. Para o Kaito, parado do lado da rede.", proxima: "c5_07" },
    c5_07: { quem: "desconhecido", rotulo: "Professor de educação física", texto: "Parece só uma torção leve. Gelo e repouso. Alguém leva ela até a enfermaria?", proxima: "c5_08" },
    c5_08: { quem: "serena", texto: "Kaito... você pode me ajudar? Só até a enfermaria. Eu não consigo apoiar.", proxima: "c5_09" },
    c5_09: { tipo: "narracao", sprite: null, texto: "Na frente da turma inteira. Na frente da arquibancada. O Kaito olha para ela no chão. Olha em volta. Olha, um segundo, para a SN, do outro lado da quadra.", proxima: "c5_10" },
    c5_10: { tipo: "narracao", texto: "E vai. Ele vai até ela. Passa o braço dela por cima dos ombros dele e levanta ela do chão, devagar, com cuidado. Do mesmo jeito que a SN levou o Takeo na escada. A Serena encosta a cabeça no ombro dele enquanto eles saem mancando da quadra.", proxima: "c5_11" },
    c5_11: { tipo: "narracao", texto: "Quando eles passam do lado da SN, a Serena levanta os olhos do ombro do Kaito. Olha para ela. Não sorri. Não fala nada. Só olha. E a SN entende tudo naquele olhar sem precisar de uma palavra.", proxima: "c5_12" },
    c5_12: { tipo: "pensamento", texto: "O pé não virou. Eu vi. Ela desceu o último degrau devagar, colocou o pé de lado com cuidado e sentou. Eu vi, porque eu sei como as pessoas caem de verdade. Eu já caí em cima de alguém num hall.", proxima: "c5_13" },
    c5_13: { tipo: "narracao", sprite: "mio", texto: "A Mio para do lado dela, na quadra, com a bola de vôlei esquecida na mão.", proxima: "c5_14" },
    c5_14: { quem: "mio", texto: "Ela não torceu nada. Ela desceu igual atriz de novela.", proxima: "c5_15" },
    c5_15: { quem: "eu", texto: "Eu sei.", proxima: "c5_16" },
    c5_16: { quem: "mio", texto: "Você não vai falar nada?", proxima: "c5_17" },
    c5_17: { tipo: "pensamento", texto: "Falar o quê? Que ela fingiu? Que ela se molhou de ponche sozinha? Que ela ficou no caminho das caixas? Eu já falei. Ele ficou com “tá”. Ele ficou com “eu não vi”. Se eu falar mais uma vez, eu viro a menina ciumenta que acusa a coitada do tornozelo.", proxima: "c5_18" },
    c5_18: { tipo: "pensamento", texto: "O Victor tinha razão. Se eu brigar, eu viro a vilã.", proxima: "c5_19" },
    c5_19: { quem: "eu", texto: "Não, Mio. Hoje não.", proxima: "c5_20" },
    c5_20: { tipo: "narracao", sprite: null, texto: "Lá em cima, o céu cinza faz um barulho comprido. O primeiro trovão. As primeiras gotas caem na quadra, grossas, espaçadas, como moedas.", proxima: "c6_01" },

    /* =================== CENA 6 — O CAPACETE =================== */
    c6_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Saída — Cena 6", sprite: null, texto: "Na saída, chove. Forte. Do tipo que enche a calçada em dois minutos. O portão está cheio de gente esperando embaixo da marquise, com mochila na cabeça, ligando para os pais.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", texto: "Ela fica embaixo da marquise com a Mio e a Hana. Do outro lado da rua, o Kaito está do lado da moto, com o capacete dele na cabeça e o capacete vermelho dela na mão. Molhado. Esperando.", proxima: "c6_03" },
    c6_03: { tipo: "pensamento", texto: "Ele está esperando. Ele vai me levar. Na chuva. Como na noite do lámen. Ele vai me levar e na moto eu pergunto. Eu pergunto tudo.", proxima: "c6_04" },
    c6_04: { tipo: "narracao", texto: "Ela segura a alça da mochila. Vai dar o primeiro passo para fora da marquise. E vê.", proxima: "c6_05" },
    c6_05: { tipo: "narracao", sprite: "serena", texto: "A Serena sai pelo portão, mancando, apoiada numa amiga, com um saquinho de gelo da enfermaria enrolado no tornozelo. Ela para na calçada, embaixo da chuva, sem guarda-chuva. Olha para a rua. Olha para o ponto de ônibus, longe, do outro lado do quarteirão. E olha para o Kaito.", proxima: "c6_06" },
    c6_06: { quem: "serena", texto: "Kaito. O ônibus é muito longe. Eu não consigo andar até lá. A minha mãe não atende. Você... você passa perto da minha rua, não passa?", proxima: "c6_07" },
    c6_07: { tipo: "narracao", sprite: null, texto: "Ela fala alto. Alto o suficiente para atravessar a rua e a chuva. Alto o suficiente para o portão inteiro ouvir.", proxima: "c6_08" },
    c6_08: { tipo: "narracao", sprite: "kaito", texto: "O Kaito fica parado na chuva, do lado da moto. Com o capacete vermelho na mão. Ele olha para a Serena, mancando, encharcada, com o gelo no tornozelo. Ele olha para a marquise. Para a SN, embaixo dela, seca.", proxima: "c6_09" },
    c6_09: { tipo: "narracao", texto: "Os olhos dele encontram os dela. Por um segundo. Ela não sabe o que tem naquele olhar. Culpa. Dúvida. Uma pergunta que ele não fez. Ou uma resposta que ele acha que já tem.", proxima: "c6_esc6" },

    // ▶ ESCOLHA 5 — Na marquise
    c6_esc6: { escolhas: [
      { texto: "A. Sair da marquise. Atravessar a rua na chuva. Ir até ele.", proxima: "c6_6a_1", pontos: { kaito: 2 }, flags: ["Atravessou_chuva"] },
      { texto: "B. Ficar parada. Não fazer nada. Deixar ele escolher sozinho.", proxima: "c6_6b_1", pontos: {}, flags: ["Deixou_escolher"] },
      { texto: "C. Virar as costas antes de ver o que ele faz.", proxima: "c6_6c_1", pontos: { desvio: 1 }, flags: ["Virou_costas_chuva"] }
    ]},
    c6_6a_1: { tipo: "narracao", texto: "Ela sai da marquise. A chuva cai em cima dela de uma vez, gelada. Ela dá três passos na direção da rua.", proxima: "c6_10" },
    c6_6b_1: { tipo: "narracao", texto: "Ela fica parada embaixo da marquise. Segurando a alça da mochila tão forte que a mão fica branca. Ela não vai pedir. Ela não vai correr. Se ele quiser, ele sabe onde ela está.", proxima: "c6_10" },
    c6_6c_1: { tipo: "narracao", texto: "Ela vira as costas para a rua. Ela não quer ver. Se for ruim, ela não quer ver. Mas a Mio, do lado dela, vê. E ela vê a cara da Mio.", proxima: "c6_10" },

    // (todas as opções continuam aqui)
    c6_10: { tipo: "narracao", texto: "O Kaito abaixa os olhos. Olha para o capacete vermelho na mão dele. E atravessa a rua. Não na direção dela.", proxima: "c6_11" },
    c6_11: { tipo: "narracao", efeito: "eco", texto: "Na direção da Serena.", proxima: "c6_12" },
    c6_12: { tipo: "narracao", sprite: "serena", texto: "Ele para na frente dela. Fala alguma coisa. Ela faz que sim, com os olhos brilhando. Ele ajuda ela a mancar até a moto. Ajuda ela a subir na garupa, segurando pelo braço.", proxima: "c6_13" },
    c6_13: { tipo: "narracao", texto: "E coloca o capacete vermelho na cabeça dela.", proxima: "c6_14" },
    c6_14: { tipo: "narracao", sprite: null, efeito: "tremor", texto: "O capacete vermelho. O dela. O que ele carrega no braço toda manhã, o que ele fecha embaixo do queixo dela todo dia às sete. Na cabeça da Serena.", proxima: "c6_15" },
    c6_15: { tipo: "narracao", texto: "Ele não fecha a fivela para ela. A Serena fecha sozinha. Ela vê isso, do outro lado da rua, na chuva. Ele não fecha a fivela. É a única coisa que ela consegue segurar. Ele não fechou a fivela.", proxima: "c6_16" },
    c6_16: { tipo: "narracao", texto: "A Serena passa os braços em volta da cintura dele. Não na camisa. Na cintura. E encosta a lateral do capacete vermelho nas costas dele. E, por cima do ombro do Kaito, por um segundo, ela olha para a marquise.", proxima: "c6_17" },
    c6_17: { tipo: "narracao", texto: "A moto liga. Ronca. E vai embora pela rua alagada, levantando água dos dois lados, com o capacete vermelho na garupa, até virar a esquina.", proxima: "c6_18" },
    c6_18: { tipo: "narracao", texto: "O portão inteiro viu. A rede de fofoca já está digitando. Ela ouve os celulares vibrando em volta dela, um atrás do outro, como grilo.", proxima: "c6_19" },
    c6_19: { tipo: "pensamento", texto: "Ele levou ela. Com o meu capacete.", proxima: "c6_20" },
    c6_20: { tipo: "pensamento", texto: "Ela torceu o pé de mentira. Ela pediu na frente de todo mundo. Ele é o Kaito. Ele carrega caixa pra qualquer um. Ele levaria qualquer um na chuva. Eu sei disso. Eu sei. Eu sei.", proxima: "c6_21" },
    c6_21: { tipo: "pensamento", texto: "Mas ele olhou pra mim antes. E escolheu ela.", proxima: "c6_22" },
    c6_22: { tipo: "narracao", sprite: "mio", texto: "A Mio segura o braço dela. A Hana fica do outro lado, em silêncio, sem prancheta. Nenhuma das duas fala nada. A chuva continua.", proxima: "c6_23" },
    c6_23: { tipo: "narracao", sprite: null, texto: "E aí alguém para na frente dela. Com um guarda-chuva preto, enorme, de homem, meio torto, com uma vareta quebrada. E um pirulito de morango na boca.", proxima: "c6_24" },
    c6_24: { sprite: "victor", quem: "victor", texto: "Eu não tenho moto hoje. Ela está na garagem com a placa. Mas eu tenho um guarda-chuva quebrado e duas pernas. Eu te levo em casa. A pé. Na chuva. É romântico se você não pensar muito.", proxima: "c6_25" },
    c6_25: { tipo: "narracao", texto: "Ele não fala do Kaito. Ele não fala da Serena. Ele não fala do capacete. Ele só fica ali, segurando o guarda-chuva torto em cima dela, deixando o próprio ombro tomar chuva.", proxima: "c6_esc7" },

    // ▶ ESCOLHA 6 — O guarda-chuva
    c6_esc7: { escolhas: [
      { texto: "A. Entrar embaixo do guarda-chuva. Sem falar nada. Deixar ele levar.", proxima: "c6_7a_1", pontos: { victor: 3 }, flags: ["Guarda_chuva_Victor"] },
      { texto: "B. “Victor. Você está tomando chuva no ombro inteiro.”", proxima: "c6_7b_1", pontos: { victor: 3 }, flags: ["Ombro_chuva"] },
      { texto: "C. “Obrigada. Mas hoje eu quero ir sozinha.”", proxima: "c6_7c_1", pontos: { victor: 1 }, flags: ["Sozinha_chuva"] }
    ]},
    c6_7a_1: { tipo: "narracao", texto: "Ela entra embaixo do guarda-chuva. Ele não fala nada. Eles andam. A vareta quebrada pinga água no ombro dele o caminho inteiro. Ele não reclama uma vez. No meio do caminho, sem perceber, ela segura no braço dele. Ele percebe. E anda mais devagar.", proxima: "c6_26" },
    c6_7b_1: { quem: "eu", texto: "Victor. Você está tomando chuva no ombro inteiro.", proxima: "c6_7b_2" },
    c6_7b_2: { quem: "victor", texto: "O meu ombro é à prova d'água. É de fábrica. Eu sou praticamente um peixe.", proxima: "c6_7b_3" },
    c6_7b_3: { tipo: "narracao", texto: "Ela ri. Pela metade. Na chuva, com os olhos ardendo. E ele vê ela rir, e chega o guarda-chuva mais para o lado dela, e toma mais chuva ainda, e parece feliz.", proxima: "c6_26" },
    c6_7c_1: { quem: "eu", texto: "Obrigada. Mas hoje eu quero ir sozinha.", proxima: "c6_7c_2" },
    c6_7c_2: { tipo: "narracao", texto: "O Victor olha para ela. Faz que sim. E, em vez de ir embora, entrega o guarda-chuva torto na mão dela, e sai andando na chuva sem nada, com as mãos no bolso, assobiando.", proxima: "c6_7c_3" },
    c6_7c_3: { quem: "victor", texto: "Sozinha, mas seca! Amanhã, sete horas! A placa! Traz o guarda-chuva, ele é da minha mãe!", proxima: "c6_26" },

    // (todas as opções continuam aqui)
    c6_26: { tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", legenda: "Sexta, 13h30", texto: "Em casa, ela tira o tênis encharcado no hall, no pé dos três degraus com a fita preta. Fica parada ali um tempo, no lugar exato onde ele espera toda manhã.", proxima: "c6_27" },
    c6_27: { tipo: "narracao", texto: "O celular vibra no bolso molhado. Ela pega. Por um segundo, o coração pula.", proxima: "c6_28" },
    c6_28: { tipo: "narracao", texto: "Não é ele. É a rede de fofoca. A Mio mandou um print sem falar nada. Um story da Serena. A foto é de baixo, da garupa, mostrando as costas de uma jaqueta preta molhada e um pedaço da rua alagada. Na legenda, só um emoji: um capacete. E um coração vermelho.", proxima: "r_cam" },

    /* =================== ROTA — SEXTA À NOITE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Sexta, 22h", sprite: null, texto: "Dez da noite. Ela não jantou. Está deitada no escuro, com o celular virado para baixo em cima da barriga. Lá fora, a chuva parou. A rua está molhada e quieta.", proxima: "rk_02" },
    rk_02: { tipo: "narracao", texto: "Um barulho de moto. Baixo. Devagar. Parando na frente do prédio. Ela conhece esse ronco. Ela levanta, vai até a janela, e afasta a cortina com um dedo.", proxima: "rk_03" },
    rk_03: { tipo: "narracao", sprite: "kaito", texto: "Lá embaixo, embaixo do poste, o Kaito. Sentado na moto desligada. Sem capacete. Olhando para cima. Para a janela dela. O capacete vermelho está pendurado no guidão, ainda molhado.", proxima: "rk_04" },
    rk_04: { tipo: "narracao", texto: "Ele não manda mensagem. Ele não toca o interfone. Ele fica ali, sentado, olhando para a janela. Cinco minutos. Dez.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. Descer. Agora. De pijama. E perguntar tudo.", proxima: "rk_a1", pontos: { kaito: 3 }, flags: ["Desceu_noite"] },
      { texto: "B. Abrir a janela e ficar olhando de volta. Sem descer. Ele que suba, se quiser.", proxima: "rk_b1", pontos: { kaito: 2 }, flags: ["Janela_aberta"] },
      { texto: "C. Fechar a cortina. Hoje não.", proxima: "rk_c1", pontos: { desvio: 1 }, flags: ["Fechou_cortina"] }
    ]},
    rk_a1: { tipo: "narracao", cenario: "frente-casa-sn-noite", transicao: "tempo", texto: "Ela desce. De pijama, de chinelo, os três degraus da fita preta. Abre a porta do prédio. Ele levanta da moto quando ela aparece. Fica parado.", proxima: "rk_a2" },
    rk_a2: { quem: "eu", texto: "O que eu fiz, Kaito?", proxima: "rk_a3" },
    rk_a3: { tipo: "narracao", texto: "Ele abre a boca. Fecha. Pega o celular do bolso. Olha para a tela. Ela vê a mão dele parada em cima de uma foto que ela não consegue ver. Ele bloqueia a tela.", proxima: "rk_a4" },
    rk_a4: { quem: "kaito", texto: "...Ela torceu o pé. Eu só levei. Era o caminho.", proxima: "rk_a5" },
    rk_a5: { quem: "eu", texto: "Eu não perguntei da Serena. Eu perguntei o que eu fiz.", proxima: "rk_a6" },
    rk_a6: { tipo: "narracao", texto: "Silêncio. Ele olha para o chão do hall. Para a fita preta que ele mesmo levou para o síndico.", proxima: "rk_a7" },
    rk_a7: { quem: "kaito", texto: "Você não fez nada. Eu que... eu preciso pensar. Desculpa. Eu não devia ter vindo.", proxima: "rk_a8" },
    rk_a8: { tipo: "narracao", texto: "Ele sobe na moto. Coloca o capacete dele. Não olha para o vermelho no guidão. E vai embora. Ela fica parada no hall, de pijama, olhando a rua molhada.", proxima: "r_fim" },
    rk_b1: { tipo: "narracao", texto: "Ela abre a janela. O ar molhado entra. Ela fica olhando para ele, lá embaixo. Ele olha de volta. Ninguém fala nada. Ninguém faz nada.", proxima: "rk_b2" },
    rk_b2: { tipo: "narracao", texto: "Depois de muito tempo, ele levanta a mão. Devagar. Não é um aceno. É só a mão aberta, levantada, como quem diz “eu estou aqui” e “eu não sei o que fazer” ao mesmo tempo.", proxima: "rk_b3" },
    rk_b3: { tipo: "narracao", texto: "Ela não levanta a mão de volta. Ela não consegue. Ele abaixa a mão. Liga a moto. E vai embora devagar, olhando para cima até virar a esquina.", proxima: "r_fim" },
    rk_c1: { tipo: "narracao", texto: "Ela fecha a cortina. Volta para a cama. Deita. Fica ouvindo. Cinco minutos depois, a moto liga lá embaixo. Ronca. E vai embora devagar.", proxima: "rk_c2" },
    rk_c2: { tipo: "pensamento", texto: "Ele veio. Ele ficou dez minutos olhando pra minha janela. E não tocou o interfone. E eu não abri. Os dois covardes separados. Igual no começo.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Sexta, 20h", sprite: null, texto: "Às oito, chega uma mensagem do Takeo. Uma foto. O caquizeiro do quintal dele, molhado de chuva, com o balanço de corda pendurado torto. Embaixo, uma mensagem.", proxima: "rt_02" },
    rt_02: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "A rede contou. Do capacete. Eu não vou perguntar nada. Eu só queria que você soubesse que quarta-feira eu tiro o gesso e o primeiro nó do balanço eu vou dar com você segurando a corda. Isso não mudou.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. Responder: “Obrigada, Takeo. Isso não mudou.”", proxima: "rt_a1", pontos: { takeo: 3 }, flags: ["Nao_mudou_Takeo"] },
      { texto: "B. Ligar pra ele. Só pra ouvir uma voz que não está esquisita.", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["Ligou_Takeo_42"] },
      { texto: "C. Responder: “Takeo. Você seria capaz de levar outra pessoa no meu lugar?”", proxima: "rt_c1", pontos: { takeo: 2 }, flags: ["No_meu_lugar"] }
    ]},
    rt_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Obrigada, Takeo. Isso não mudou.", proxima: "rt_a2" },
    rt_a2: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Nada que é importante muda por causa de chuva. A minha avó que fala. Ela é especialista em chuva.", proxima: "r_fim" },
    rt_b1: { tipo: "narracao", texto: "Ela liga. Ele atende no primeiro toque. Não pergunta nada. Ele começa a contar do bolo de comemoração antes da hora da avó, e de como ela errou a receita e o bolo afundou no meio, e de como ela disse que bolo afundado dá mais sorte. Ela fica ouvindo, deitada no escuro, e não percebe quando começa a sorrir.", proxima: "r_fim" },
    rt_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Takeo. Você seria capaz de levar outra pessoa no meu lugar?", proxima: "rt_c2" },
    rt_c2: { tipo: "narracao", texto: "Digitando. Para. Digitando. Muito tempo.", proxima: "rt_c3" },
    rt_c3: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Eu sou péssimo em levar gente. Eu tenho um braço só. Mas o seu lugar é o seu lugar. Eu não sento ninguém nele. Nem na chuva.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Sexta, 21h", sprite: null, texto: "Às nove, chega uma mensagem do Blake. Só uma.", proxima: "rb_02" },
    rb_02: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Ela não torceu o pé.", proxima: "rb_03" },
    rb_03: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu estava na arquibancada. Eu vi ela descer. Eu já caí de escada muitas vezes. Não é assim que se cai.", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. Responder: “Eu sei. Eu vi também.”", proxima: "rb_a1", pontos: { blake: 3 }, flags: ["Vi_tambem_Blake"] },
      { texto: "B. Responder: “Fala isso pra ele, Blake. Ele acredita em você.”", proxima: "rb_b1", pontos: { blake: 2 }, flags: ["Fala_pra_ele_Blake"] },
      { texto: "C. Responder: “Obrigada por ver. De novo.”", proxima: "rb_c1", pontos: { blake: 3 }, flags: ["Obrigada_ver_Blake"] }
    ]},
    rb_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu sei. Eu vi também.", proxima: "rb_a2" },
    rb_a2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Então somos dois. Amanhã eu falo com ele. Do jeito dele. Com soco no saco de pancada primeiro.", proxima: "r_fim" },
    rb_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Fala isso pra ele, Blake. Ele acredita em você.", proxima: "rb_b2" },
    rb_b2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu vou falar. Mas ele vai ter que ver sozinho. Eu conheço ele. Ele só aprende quando perde.", proxima: "r_fim" },
    rb_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Obrigada por ver. De novo.", proxima: "rb_c2" },
    rb_c2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu sempre vejo. Hoje eu queria não ter visto a sua cara na marquise.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Sexta, 21h", sprite: null, texto: "Às nove, a Relâmpago buzina duas vezes curtas lá embaixo. Ela vai até a janela. O Ryuji, molhado, com dois copos de chocolate quente da padaria nas mãos, olhando para cima.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", sprite: "ryuji", texto: "Protocolo de vítima de chuva! Chocolate quente! Eu não sei se você está com frio, mas quem leva chuva emocional também precisa de chocolate quente! É científico! Está no cartão quarenta e dois!", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. Descer e tomar o chocolate com ele, sentados no degrau do hall.", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Chocolate_Ryuji"] },
      { texto: "B. “Não tem cartão quarenta e dois, Ryuji.”", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Cartao_42"] },
      { texto: "C. Descer e abraçar ele antes de pegar o chocolate.", proxima: "rr_c1", pontos: { ryuji: 3 }, flags: ["Abraco_chocolate"] }
    ]},
    rr_a1: { tipo: "narracao", cenario: "frente-casa-sn-noite", texto: "Ela desce. Eles sentam no degrau do hall, em cima da fita preta, com os copos de chocolate. O Ryuji não pergunta do capacete. Ele conta qualquer coisa, de tudo, sem parar, do jeito dele. Ela ri no meio. Ele percebe que ela riu, e conta mais, até o chocolate acabar.", proxima: "r_fim" },
    rr_b1: { quem: "eu", texto: "Não tem cartão quarenta e dois, Ryuji.", proxima: "rr_b2" },
    rr_b2: { quem: "ryuji", texto: "Tem agora! Eu escrevi hoje! “Chuva emocional: aplicar chocolate quente e presença.” Desce! Ele está esfriando!", proxima: "r_fim" },
    rr_c1: { tipo: "narracao", cenario: "frente-casa-sn-noite", texto: "Ela desce e abraça ele antes de pegar o copo. Com força. Ele fica parado, de braços abertos, com um chocolate quente em cada mão, sem poder abraçar de volta. Depois encosta o queixo na cabeça dela e deixa.", proxima: "rr_c2" },
    rr_c2: { quem: "ryuji", texto: "...O chocolate vai esfriar. Eu não ligo. Fica.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: "fora", tipo: "narracao", cenario: "quintal-victor-noite", transicao: "tempo", legenda: "Sexta, 19h", sprite: "victor", texto: "Às sete, ela não aguenta ficar em casa. Pega o guarda-chuva torto do Victor, que ficou com ela, e vai até a garagem dele devolver. Sabe que é desculpa. Vai mesmo assim.", proxima: "rv_02" },
    rv_02: { foto: "caramelo", tipo: "narracao", texto: "A porta de enrolar está meio aberta. O rádio velho tocando baixinho. A placa, seca, encostada na parede, esperando amanhã. O Victor está sentado no chão na frente dela, com o Caramelo no colo, como se estivesse esperando alguém.", proxima: "rv_03" },
    rv_03: { quem: "victor", texto: "Eu sabia que você ia vir devolver o guarda-chuva. Ele não é da minha mãe. Eu menti. Ele é meu. Eu menti pra você ter motivo de voltar.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. Sentar no chão do lado dele. “Eu não precisava de motivo.”", proxima: "rv_a1", pontos: { victor: 4 }, flags: ["Sem_motivo_Victor"] },
      { texto: "B. “Você é um péssimo mentiroso, Victor.” E rir, pela primeira vez no dia, inteira.", proxima: "rv_b1", pontos: { victor: 3 }, flags: ["Pessimo_mentiroso_Victor"] },
      { texto: "C. “Victor. Hoje, na chuva. Você deixou o seu ombro molhar inteiro.”", proxima: "rv_c1", pontos: { victor: 4 }, flags: ["Ombro_molhado"] }
    ]},
    rv_a1: { tipo: "narracao", texto: "Ela senta do lado dele, no chão da garagem. O Caramelo muda de colo. O Victor não fala nada. Ela também não. Os dois olhando para a placa com o nome da mãe dele, reto, azul.", proxima: "rv_a2" },
    rv_a2: { quem: "eu", texto: "Eu não precisava de motivo.", proxima: "rv_a3" },
    rv_a3: { tipo: "narracao", texto: "Ele vira a cabeça devagar. Olha para ela. E fica olhando. Um palmo. Igual ontem. Ninguém tira tinta de ninguém. Ninguém late. Os dois só ficam ali, olhando, até ele desviar primeiro, vermelho, para a placa.", proxima: "rv_a4" },
    rv_a4: { quem: "victor", texto: "...Amanhã é a placa. Eu não posso fazer nada antes da placa. É regra.", proxima: "r_fim" },
    rv_b1: { quem: "eu", texto: "Você é um péssimo mentiroso, Victor.", proxima: "rv_b2" },
    rv_b2: { tipo: "narracao", texto: "Ela ri. Inteira. Pela primeira vez no dia. Ele ri junto, de alívio, e o Caramelo late, e os três ficam rindo no chão da garagem, com a chuva pingando do toldo lá fora.", proxima: "r_fim" },
    rv_c1: { quem: "eu", texto: "Victor. Hoje, na chuva. Você deixou o seu ombro molhar inteiro.", proxima: "rv_c2" },
    rv_c2: { quem: "victor", texto: "O seu não molhou. Era isso que importava.", proxima: "rv_c3" },
    rv_c3: { tipo: "narracao", texto: "Ele fala isso sem piada, olhando para a placa. Ela fica olhando para o ombro dele, ainda úmido. E percebe que ele não trocou de roupa desde a saída da escola. Ele ficou ali, esperando, com o ombro molhado, a tarde inteira.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Sexta, 23h30", sprite: null, texto: "Onze e meia. Deitada no escuro. O celular em cima da mesinha, virado para baixo.", proxima: "f_02" },
    f_02: { tipo: "pensamento", texto: "Ele não fechou a fivela dela. Eu vi. Ele não fechou.", proxima: "f_03" },
    f_03: { tipo: "pensamento", texto: "É ridículo. É a coisa mais ridícula que eu já me agarrei na vida. Uma fivela. Mas é a única coisa que eu tenho hoje.", proxima: "f_04" },
    f_04: { tipo: "pensamento", texto: "“Você trata todo mundo igual.” Alguém colocou isso na boca dele. Eu sei quem. Eu não posso provar. E ela sabe que eu não posso.", proxima: "f_05" },
    f_05: { tipo: "pensamento", texto: "Amanhã é sábado. Amanhã não tem sete horas. Amanhã não tem hall.", proxima: "f_06" },
    f_06: { tipo: "pensamento", texto: "Amanhã tem a placa do Victor. Às sete da noite. E eu prometi que ia.", proxima: "f_07" },
    f_07: { tipo: "narracao", texto: "O celular vibra. Uma vez. Ela não vira. Vibra de novo. Ela não vira. Ela fica olhando para o teto, ouvindo ele vibrar contra a madeira da mesinha, até parar.", proxima: "f_08" },
    f_08: { tipo: "pensamento", texto: "Se for ele, ele pode esperar até amanhã. Eu esperei o dia inteiro.", proxima: "ep_fim" },

    // Fim do Capítulo 42 (crie a entrada "capitulo42" em dados/capitulos.js).
    ep_fim: { fim: "capitulo42" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 43 (anotações do roteiro)
 *  • O KAITO, DISTANTE: "Embaixo." (uma palavra). Não fechou a fivela da SN ("Você fecha sozinha."). Não pôs a mão
 *    em cima da dela no sinal. Sentou na grade da quadra, longe do banco ("Aqui está mais fresco").
 *    Repetiu a frase da Serena: "Você anda muito com eles... Você trata todo mundo igual." A frase não é dele.
 *    Ele viu a foto (o polegar do Victor no rosto dela) e não contou nada.
 *  • A SERENA TENTOU MAIS, E ELE CEDEU (em parte): suco de pêssego na grade; "torceu o pé" de mentira no vôlei
 *    (a SN viu que foi fingido; o Blake também); o Kaito levou ela até a enfermaria, apoiada no ombro dele.
 *    Na chuva, ela pediu carona na frente do portão inteiro. ELE OLHOU PRA SN E ESCOLHEU A SERENA.
 *    COLOCOU O CAPACETE VERMELHO DA SN NELA. NÃO FECHOU A FIVELA (a Serena fechou sozinha).
 *    Ela abraçou a cintura dele. Story: costas da jaqueta molhada + emoji de capacete + coração vermelho.
 *  • ROTA KAITO: ele foi na frente do prédio às 22h, ficou dez minutos olhando a janela. Desceu / janela / cortina.
 *    "Ela torceu o pé. Eu só levei. Era o caminho." / "Eu preciso pensar. Eu não devia ter vindo."
 *  • VICTOR mais perto: "Quem fica com essa cara por causa de uma fivela merece uma fivela melhor." Imitou o
 *    Caramelo no pátio. Guarda-chuva torto na chuva, o ombro dele molhando. Rota Victor: o guarda-chuva era dele,
 *    mentiu "pra você ter motivo de voltar". A PLACA: sábado, 19h, quando a mãe dele chega.
 *  • TAKEO: o osso colou, tira o gesso QUARTA. O nó do balanço do caquizeiro com ela segurando a corda.
 *  • BLAKE: "Ela não torceu o pé. Não é assim que se cai." RYUJI: chocolate quente, "cartão 42".
 *  • A SN: muito chateada. Não chora em público. Não acusa a Serena ("se eu brigar, eu viro a vilã").
 *    Não sabe da foto. "Que foto?" Agarrada a um detalhe: ele não fechou a fivela da Serena.
 *  • Sábado: sem hall, sem sete horas. A placa do Victor às 19h. O celular vibrou duas vezes à meia-noite.
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 O hall · 2 Com o Takeo · 3 Na grade (Kaito) · 4 O Victor · 5 Na marquise · 6 O guarda-chuva
 *  Rota (1 por rota)
 *
 * FLAGS NOVAS
 *  Aconteceu_algo · Silencio_moto · Esqueceu_fivela · Palma_quarta · Coisa_boa_Takeo · To_bem_Takeo
 *  Quem_disse · Voce_sabe · Saiu_grade · Obrigada_ver · Me_faz_rir · O_que_foi_tinta
 *  Atravessou_chuva · Deixou_escolher · Virou_costas_chuva · Guarda_chuva_Victor · Ombro_chuva · Sozinha_chuva
 *  Desceu_noite · Janela_aberta · Fechou_cortina · Nao_mudou_Takeo · Ligou_Takeo_42 · No_meu_lugar
 *  Vi_tambem_Blake · Fala_pra_ele_Blake · Obrigada_ver_Blake · Chocolate_Ryuji · Cartao_42 · Abraco_chocolate
 *  Sem_motivo_Victor · Pessimo_mentiroso_Victor · Ombro_molhado
 */