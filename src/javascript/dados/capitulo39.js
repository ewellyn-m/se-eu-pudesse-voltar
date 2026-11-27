/*
 * =====================================================================
 *  CAPÍTULO 39 — Um mês inteiro
 *  Domingo (curto) e segunda-feira, logo depois do Capítulo 38.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Cenas com os cinco meninos em TODAS as rotas. Bloco de rota à noite.
 *
 *  O QUE ACONTECE
 *    • Domingo: na casa da Mio, a SN conta o sábado "com gestos" (o forno, o centímetro, o timer, o Ryuji).
 *    • Segunda: o Kaito busca a SN de moto. Os dois sem graça e felizes depois do quase beijo.
 *    • A Serena continua: bom dia no portão, onigiri para o Kaito, senta do lado dele no intervalo.
 *      Está furiosa com a SN por causa dos cookies ("são meus"). Encurrala a SN de novo, derruba suco
 *      no uniforme dela "sem querer". A SN não abaixa a cabeça.
 *    • Cenas com o Takeo (sala), o Blake (banco), o Ryuji (hora grátis), o Victor (boletim da rede).
 *    • Depois da aula, a SN fica para a escala de limpeza da sala. O Ren aparece. A sós.
 *      Ele tenta contar tudo. Não consegue. Conta mais um pedaço:
 *        – que, depois que ela sumiu, ele voltou no mesmo lugar todo dia, por um mês inteiro;
 *        – que uma mulher levou ela embora com pressa (a voz do flash);
 *        – que ele descobriu quem era essa mulher, e entendeu por que ela nunca mais voltou.
 *      Ele NÃO diz quem era. NÃO diz onde. NÃO fala do Takeo. NÃO fala por que ataca a gangue do Kaito.
 *    • Bloco de rota à noite.
 *
 *  REGRAS
 *    • Sala da SN: Takeo, Mio, Hana, Reina, Ren, Akane. Os outros meninos e a Serena são de outras salas.
 *    • O Kaito busca a SN de moto todo dia. Sem xadrez no Ren. O Ren não manda mensagem.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Mio, Hana, Reina, Akane, Kaito, Takeo, Victor, Blake, Ryuji, Ren, Serena, Mãe da Mio (citada).
 *    Sem nome / rótulo: Amiga da Serena, Professora de português.
 *
 *  CENÁRIOS
 *    Casa da Mio → "apartamento" · Hall → "apartamento" · Escola: saida-colegio, sala-de-aula, corredor,
 *    patio-fundos, vestiario · Rua / lojinha → "beco-mercado" · Quarto → "quarto-sn"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Rota_*, Fala_de_novo, Testa_Kaito, Falta_centimetro, Cavalo_especial.
 *
 *  Crie a entrada "capitulo39" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo39", {
  inicio: "c0_01",
  cenas: {

    /* =================== CENA 0 — DOMINGO, COM GESTOS =================== */
    // Cenário: quarto da Mio, domingo à tarde (usa "apartamento"). Música: leve, de amigas.
    c0_01: { roupa: "fora", tipo: "narracao", cenario: "quarto-mio", transicao: "tempo", legenda: "Domingo, 15h — Cena 0", sprite: "mio", texto: "Domingo à tarde. O quarto da Mio, com os pôsteres de rádio antigo na parede e o microfone de brinquedo rosa em cima da cama. A Mio está sentada no chão, de pernas cruzadas, abraçando uma almofada, com os olhos arregalados, esperando.", proxima: "c0_02" },
    c0_02: { quem: "mio", texto: "Pessoalmente. Com gestos. Você prometeu. Começa do avental.", proxima: "c0_03" },
    c0_03: { tipo: "narracao", texto: "A SN conta. Com gestos. Ela mostra o laço do avental, os dedos dele na cintura. A mão em cima da mão na colher. A cabeça no ombro, na frente do forno. E a frase.", proxima: "c0_04" },
    c0_04: { quem: "eu", texto: "“Eu não quero que tenha sido só sem querer.”", proxima: "c0_05" },
    c0_05: { tipo: "narracao", texto: "A Mio solta um grito abafado dentro da almofada. Longo. Muito longo. Depois tira a cara da almofada, vermelha.", proxima: "c0_06" },
    c0_06: { quem: "mio", texto: "E AÍ? E AÍ O QUE ACONTECEU?", proxima: "c0_07" },
    c0_07: { quem: "eu", texto: "Ele chegou perto. Um centímetro. Eu fechei os olhos. E aí o timer do forno tocou e o Ryuji entrou gritando “LAN HOUSE”.", proxima: "c0_08" },
    c0_08: { tipo: "narracao", texto: "A Mio fica completamente parada. Depois deita no chão do quarto, de barriga para cima, com a almofada em cima do rosto, e não fala nada por dez segundos.", proxima: "c0_09" },
    c0_09: { quem: "mio", texto: "(abafado) Eu vou matar o Ryuji. Eu amo o Ryuji. Eu vou matar o Ryuji com muito amor.", proxima: "c0_cam" },
    c0_cam: { caminhos: [
      { flag: "Fala_de_novo", proxima: "c0_rua" },
      { flag: "Testa_Kaito", proxima: "c0_rua" },
      { flag: "Falta_centimetro", proxima: "c0_rua" }
    ], proxima: "c0_10" },
    c0_rua: { quem: "eu", texto: "E depois, de noite, ele me levou numa rua alta. Dava pra ver a cidade inteira. E a gente ficou lá. E ele falou de novo. Sem timer.", proxima: "c0_rua2" },
    c0_rua2: { tipo: "narracao", texto: "A Mio tira a almofada do rosto. Olha para ela. E começa a chorar. De verdade. De felicidade, com a boca tremendo.", proxima: "c0_rua3" },
    c0_rua3: { quem: "mio", texto: "Eu não acredito que eu perdi uma rua alta. Eu vou fazer um programa inteiro sobre rua alta.", proxima: "c0_10" },
    c0_10: { tipo: "narracao", texto: "Elas ficam a tarde inteira assim. A Mio fazendo perguntas, a SN respondendo com gestos, as duas rindo até a mãe da Mio bater na porta perguntando se alguém morreu.", proxima: "c0_11" },
    c0_11: { quem: "mio", texto: "Agora uma pergunta séria. De melhor amiga.", proxima: "c0_12" },
    c0_12: { quem: "mio", texto: "Você gosta dele?", proxima: "c0_13" },
    c0_13: { tipo: "pensamento", texto: "Eu gosto de um menino de dezesseis anos que corta cebolinha e coloca café no sal. Eu tenho vinte e oito anos por dentro. Eu deveria ter vergonha.", proxima: "c0_14" },
    c0_14: { tipo: "pensamento", texto: "Eu não tenho vergonha nenhuma.", proxima: "c0_esc0" },

    // ▶ ESCOLHA 0 — "Você gosta dele?"
    c0_esc0: { escolhas: [
      { texto: "A. “Gosto.” Simples. Sem gesto nenhum.", proxima: "c0_0a_1", pontos: { mio: 2, kaito: 1 }, flags: ["Gosto_Mio"] },
      { texto: "B. “Eu não sei. Eu gosto de muita gente.” E ficar pensando nos outros.", proxima: "c0_0b_1", pontos: { mio: 1 }, flags: ["Nao_sei_Mio"] },
      { texto: "C. Pegar o microfone de brinquedo rosa e falar dentro dele: “Sem comentários.”", proxima: "c0_0c_1", pontos: { mio: 2 }, flags: ["Sem_comentarios"] }
    ]},
    c0_0a_1: { quem: "eu", texto: "Gosto.", proxima: "c0_0a_2" },
    c0_0a_2: { tipo: "narracao", texto: "A Mio não grita dessa vez. Ela só sorri, um sorriso devagar, e se aproxima, e abraça a SN de lado, encostando a cabeça no ombro dela.", proxima: "c0_0a_3" },
    c0_0a_3: { quem: "mio", texto: "Que bom. Ele é bom. Ele é bobo, mas é bom.", proxima: "c0_15" },
    c0_0b_1: { quem: "eu", texto: "Eu não sei. Eu gosto de muita gente.", proxima: "c0_0b_2" },
    c0_0b_2: { tipo: "pensamento", texto: "Do Takeo, que pesquisa as coisas que doem. Do Blake, que fica na escada. Do Ryuji, que buzina duas vezes. Do Victor, que fica quieto só perto de mim. E do Kaito, que fala “eu fiz caldo”.", proxima: "c0_0b_3" },
    c0_0b_3: { quem: "mio", texto: "Muita gente. Tá. Isso é uma resposta muito perigosa, SN. Isso é resposta de protagonista de novela.", proxima: "c0_15" },
    c0_0c_1: { tipo: "narracao", texto: "Ela pega o microfone de brinquedo rosa. Aperta. Acende.", proxima: "c0_0c_2" },
    c0_0c_2: { quem: "eu", texto: "Sem comentários.", proxima: "c0_0c_3" },
    c0_0c_3: { quem: "mio", texto: "Isso é um sim. Isso é o maior sim da história da rádio. Quem fala “sem comentários” no microfone está gritando sim.", proxima: "c0_15" },

    // (todas as opções continuam aqui)
    c0_15: { quem: "mio", texto: "Só toma cuidado com a Serena amanhã. A rede de fofoca disse que ela passou o domingo inteiro postando foto de livro de receita. Ela vai voltar com tudo.", proxima: "c1_01" },

    /* =================== CENA 1 — SEGUNDA =================== */
    // Cenário: hall e portão, segunda cedo. Música: leve, sem graça e feliz.
    c1_01: { roupa: "escolar", tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", legenda: "Segunda, 7h — Cena 1", sprite: "kaito", texto: "Segunda-feira. Sete horas. O celular vibra, “Tô embaixo, desce”, e ela desce os três degraus da fita preta, e ele está lá, no lugar de sempre, com o capacete vermelho no braço.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "Os dois se olham. E os dois sorriem, ao mesmo tempo, sem querer, e desviam o olhar, ao mesmo tempo, sem querer. É a primeira vez que eles se veem desde a lan, desde o forno.", proxima: "c1_03" },
    c1_03: { quem: "kaito", texto: "...Bom dia.", proxima: "c1_04" },
    c1_04: { quem: "eu", texto: "Bom dia.", proxima: "c1_05" },
    c1_05: { tipo: "narracao", texto: "Ele estende o pão de queijo. Ela pega. Os dedos encostam. Ninguém solta rápido dessa vez. Os dois ficam segurando o saquinho de papel, cada um de um lado, um segundo, dois, três.", proxima: "c1_06" },
    c1_06: { quem: "kaito", texto: "O tio jogou o timer fora. Eu pedi. Ele comprou um novo. Que não toca. Só pisca uma luz.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", texto: "Ela ri. Ele ri também, pelo nariz, com as orelhas vermelhas. E aí, ele faz uma coisa nova. Ele pega o capacete do braço e, em vez de entregar, coloca ele mesmo na cabeça dela, e fecha a fivela embaixo do queixo dela. Devagar.", proxima: "c1_08" },
    c1_08: { tipo: "pensamento", texto: "Ele vai fazer isso todo dia agora. Eu sei que vai. Eu vou ter que aprender a respirar com os dedos dele no meu pescoço às sete da manhã.", proxima: "c1_09" },
    c1_09: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", sprite: null, texto: "Na garupa, ela segura na cintura dele. Desde o começo. Sem passar pela camisa primeiro. Ele percebe. As costas dele ficam duras um quarteirão, e depois relaxam, e no sinal ele põe a mão dele em cima da mão dela, na cintura, um segundo, antes de arrancar.", proxima: "c1_10" },
    c1_10: { tipo: "narracao", texto: "Na frente da escola, no meio-fio do portão. E, no muro, a Serena. Hoje sem as amigas. Sozinha. Com uma caixa de bento de madeira, de verdade, com três andares, embrulhada num pano de seda azul.", proxima: "c1_11" },
    c1_11: { tipo: "narracao", sprite: "serena", texto: "Ela vê a SN descendo da garupa. Vê a mão da SN saindo da cintura do Kaito. Vê o Kaito tirando o capacete da cabeça da SN, ele mesmo, abrindo a fivela. E o rosto dela fica branco. Depois vermelho. Depois branco de novo.", proxima: "c1_12" },
    c1_12: { tipo: "narracao", texto: "Mesmo assim, ela vem. Anda até a moto, com a caixa de bento nas mãos, o queixo alto, o sorriso perfeito no lugar.", proxima: "c1_13" },
    c1_13: { quem: "serena", texto: "Bom dia, Kaito. Eu fiz onigiri. De salmão. E tamagoyaki. E um tonkatsu sem cenoura no acompanhamento. Eu fiquei sabendo que você gosta de comida de verdade.", proxima: "c1_14" },
    c1_14: { tipo: "narracao", texto: "Ela fala “comida de verdade” olhando para a SN. Só um segundo. Depois volta o sorriso para o Kaito.", proxima: "c1_15" },
    c1_15: { tipo: "pensamento", texto: "“Comida de verdade.” Ela está falando dos meus cookies verdes. A rede de fofoca contou do verde.", proxima: "c1_16" },
    c1_16: { quem: "kaito", sprite: "kaito", texto: "...Obrigado, Serena. Mas eu já comi. O tio fez pão de queijo.", proxima: "c1_17" },
    c1_17: { quem: "serena", sprite: "serena", texto: "Então você come no intervalo. Eu guardo pra você. Eu sento com você no banco.", proxima: "c1_18" },
    c1_18: { tipo: "narracao", sprite: null, texto: "Ela não espera resposta. Vira, com a caixa de bento, e vai para o portão. No caminho, passa do lado da SN. Perto. E fala baixo, sem parar de andar, sem olhar para ela.", proxima: "c1_19" },
    c1_19: { quem: "serena", texto: "Cookie verde. Que fofo.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — "Cookie verde. Que fofo."
    c1_esc1: { escolhas: [
      { texto: "A. Falar alto, pra ela ouvir, sem virar: “Ele comeu os três. O verde também.”", proxima: "c1_1a_1", pontos: { kaito: 2 }, flags: ["Comeu_os_tres"] },
      { texto: "B. Não responder. Deixar ela ir. Guardar pra depois.", proxima: "c1_1b_1", pontos: {}, flags: ["Guardou_Serena"] },
      { texto: "C. “Bom dia pra você também, Serena.” Com um sorriso enorme e muito simpático.", proxima: "c1_1c_1", pontos: { kaito: 1 }, flags: ["Bom_dia_Serena"] }
    ]},
    c1_1a_1: { quem: "eu", texto: "Ele comeu os três. O verde também.", proxima: "c1_1a_2" },
    c1_1a_2: { tipo: "narracao", sprite: "serena", texto: "A Serena para no meio do portão. As costas dela ficam retas como uma régua. Ela não vira. Fica parada um segundo. Depois continua andando, mais rápido, com os chaveiros da mochila balançando com raiva.", proxima: "c1_1a_3" },
    c1_1a_3: { quem: "kaito", sprite: "kaito", texto: "...O que foi isso?", proxima: "c1_1a_4" },
    c1_1a_4: { quem: "eu", texto: "Nada. Conversa de menina.", proxima: "c1_20" },
    c1_1b_1: { tipo: "narracao", texto: "Ela não responde. Ela deixa a Serena ir. Respira fundo uma vez. Guarda.", proxima: "c1_1b_2" },
    c1_1b_2: { tipo: "pensamento", texto: "Eu tenho vinte e oito anos por dentro. Eu não vou brigar com uma menina de dezesseis no portão da escola por causa de cookie verde. Eu vou brigar depois. Com calma. Com estratégia.", proxima: "c1_20" },
    c1_1c_1: { quem: "eu", texto: "Bom dia pra você também, Serena.", proxima: "c1_1c_2" },
    c1_1c_2: { tipo: "narracao", texto: "Ela fala com o sorriso mais simpático e mais enorme do mundo. A Serena trava no meio do passo. Vira a cabeça. Olha para o sorriso. E não sabe o que fazer com ele. Ela queria guerra. Ela recebeu um sorriso de propaganda de pasta de dente.", proxima: "c1_1c_3" },
    c1_1c_3: { tipo: "narracao", texto: "Ela vira e vai embora sem responder, e a SN vê, pelo jeito das costas dela, que funcionou melhor que qualquer resposta.", proxima: "c1_20" },

    // (todas as opções continuam aqui)
    c1_20: { quem: "kaito", sprite: "kaito", texto: "Eu vou falar pra ela parar. Com o bento.", proxima: "c1_21" },
    c1_21: { quem: "eu", texto: "Não precisa.", proxima: "c1_22" },
    c1_22: { quem: "kaito", texto: "Precisa. Você está fazendo cara de lápis quebrado.", proxima: "c1_23" },
    c1_23: { tipo: "narracao", texto: "Ela olha para ele. Ele está olhando para ela, sério, com o capacete na mão. Ele sabe do lápis. A rede de fofoca contou do lápis também.", proxima: "c1_24" },
    c1_24: { tipo: "pensamento", texto: "Ele sabe do lápis. E ele não ficou bravo. Ele ficou... ele ficou com cara de quem gostou de saber.", proxima: "c2_01" },

    /* =================== CENA 2 — NA SALA (Takeo) =================== */
    // Cenário: sala de aula, primeira aula. Música: leve.
    c2_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Primeira aula — Cena 2", sprite: null, texto: "Na sala, a aula de português é sobre poesia. A professora de português lê um soneto antigo em voz alta, com muita emoção, e metade da sala está dormindo de olho aberto.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", sprite: "takeo:machucado", texto: "Da carteira de trás, o Takeo cutuca o ombro dela com a mão boa. Ela vira. Ele está com o gesso apoiado na carteira, e no gesso, do lado do caqui pequenininho, alguém desenhou uma pizza do tamanho de uma roda.", proxima: "c2_03" },
    c2_03: { quem: "takeo", sprite: "takeo:machucado", texto: "Foi o Ryuji. No sábado. Enquanto eu estava apitando. Ele disse que é o troféu.", proxima: "c2_04" },
    c2_04: { quem: "eu", texto: "Ficou bonita.", proxima: "c2_05" },
    c2_05: { quem: "takeo", sprite: "takeo:machucado", texto: "Ficou parecendo um sol com tumor. Mas eu gostei.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", texto: "Ele fica quieto um tempo. Olha para a nuca dela, quando ela vira de volta. Depois cutuca de novo.", proxima: "c2_07" },
    c2_07: { quem: "takeo", sprite: "takeo:machucado", texto: "O médico disse que eu tiro o gesso daqui a duas semanas. Duas semanas e eu jogo do seu lado. De suporte. Eu andei assistindo mais vídeo. Eu já sei curar gente, e não árvore.", proxima: "c2_08" },
    c2_08: { tipo: "narracao", texto: "Ele fala isso baixinho, para a professora não ouvir, com aquela cara de quem pesquisou o assunto a madrugada inteira.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — Com o Takeo
    c2_esc2: { escolhas: [
      { texto: "A. “Duas semanas. Eu vou contar. Eu vou riscar no calendário.”", proxima: "c2_2a_1", pontos: { takeo: 3 }, flags: ["Calendario_Takeo"] },
      { texto: "B. “Você assistiu mais vídeo? Takeo, você dormiu?”", proxima: "c2_2b_1", pontos: { takeo: 2 }, flags: ["Dormiu_Takeo"] },
      { texto: "C. Passar um bilhete pra trás: “Quando tirar o gesso, eu assino. Igual eu prometi.”", proxima: "c2_2c_1", pontos: { takeo: 3 }, flags: ["Assina_gesso"] }
    ]},
    c2_2a_1: { quem: "eu", texto: "Duas semanas. Eu vou contar. Eu vou riscar no calendário.", proxima: "c2_2a_2" },
    c2_2a_2: { tipo: "narracao", texto: "O Takeo fica vermelho. Ele olha para o gesso, para a pizza, para o caqui, e passa o dedo da mão boa em volta do caqui, devagar, sem perceber.", proxima: "c2_2a_3" },
    c2_2a_3: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu também vou riscar. No meu. Aí a gente risca junto.", proxima: "c2_09" },
    c2_2b_1: { quem: "eu", texto: "Você assistiu mais vídeo? Takeo, você dormiu?", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "takeo", sprite: "takeo:machucado", texto: "Umas três horas. A minha avó me encontrou com o celular na cara às quatro da manhã e me deu uma bronca de dez minutos. Depois ela sentou e assistiu um vídeo comigo. Ela agora sabe o que é um caçador.", proxima: "c2_2b_3" },
    c2_2b_3: { tipo: "narracao", texto: "A SN tem que tapar a boca para não rir alto no meio do soneto. A professora olha. Os dois fingem que estão emocionados com a poesia.", proxima: "c2_09" },
    c2_2c_1: { tipo: "narracao", texto: "Ela escreve num pedaço de papel e passa para trás, por cima do ombro. Ouve o papel abrir. Depois um silêncio comprido.", proxima: "c2_2c_2" },
    c2_2c_2: { tipo: "narracao", texto: "Quando ela vira, um pouco, de lado, vê o Takeo guardando o bilhete dentro da capa do caderno. Do lado de outro papel, mais velho, dobrado. Ela não sabe o que é o outro papel. Ele vê que ela viu, e fecha o caderno rápido.", proxima: "c2_09" },

    // (todas as opções continuam aqui)
    c2_09: { tipo: "narracao", sprite: "ren", texto: "Na carteira perto da porta, o Ren está lendo. Ele não olhou para ela quando ela entrou. Mas, quando o Takeo cutucou o ombro dela pela segunda vez, a página dele parou. Não virou mais.", proxima: "c2_10" },
    c2_10: { tipo: "pensamento", texto: "Ele está prestando atenção. Desde quinta, ele presta atenção de um jeito diferente. Antes ele só olhava. Agora ele parece que está esperando alguma coisa.", proxima: "c3_01" },

    /* =================== CENA 3 — O BENTO (Serena, Blake, Victor) =================== */
    // Cenário: pátio dos fundos, intervalo. Música: tensa, depois cômica.
    c3_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Intervalo — Cena 3", sprite: "blake", texto: "No intervalo, o banco da árvore torta. O Blake chegou cedo e está sentado no meio, com a lancheira azul aberta, ocupando o máximo de espaço possível, como um muro com sanduíche.", proxima: "c3_02" },
    c3_02: { quem: "blake", texto: "Eu guardei. Ela veio. Eu não saí.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", sprite: null, texto: "Ele aponta com o queixo. Na outra ponta do banco, a Serena está sentada com a caixa de bento de três andares aberta no colo, os hashis prontos, esperando. Esperando o Kaito, que ainda não desceu.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", texto: "A SN senta do outro lado do Blake. Agora o Blake está no meio, uma montanha entre as duas, comendo o sanduíche de frango como se nada estivesse acontecendo.", proxima: "c3_05" },
    c3_05: { tipo: "narracao", sprite: "kaito", texto: "O Kaito desce. Vê o banco. Vê a Serena numa ponta, a SN na outra, o Blake no meio. Para no meio do pátio, como quem chegou num campo minado.", proxima: "c3_06" },
    c3_06: { quem: "serena", sprite: "serena", texto: "Kaito! Aqui! Eu guardei o lugar!", proxima: "c3_07" },
    c3_07: { tipo: "narracao", sprite: "kaito", texto: "O Kaito olha para o lugar do lado da Serena. Olha para o lugar do lado da SN, que não existe, porque o banco acabou. E faz a única coisa que dá para fazer. Ele senta no chão, na frente do banco, encostado na árvore torta, de frente para os três.", proxima: "c3_08" },
    c3_08: { quem: "kaito", texto: "Eu sento aqui. É mais fresco.", proxima: "c3_09" },
    c3_09: { tipo: "narracao", sprite: "serena", texto: "A Serena pisca. Depois desce do banco e senta no chão também, do lado dele, com a caixa de bento. Ela abre o primeiro andar. Onigiri de salmão, perfeito, com a alga cortada em formato de estrela.", proxima: "c3_10" },
    c3_10: { quem: "serena", texto: "Come um. Só um. Eu acordei às cinco de novo.", proxima: "c3_11" },
    c3_11: { tipo: "narracao", sprite: "kaito", texto: "O Kaito olha para o onigiri. Para a Serena. Para a SN, no banco. E pega um. Come. Educado. Agradece.", proxima: "c3_12" },
    c3_12: { quem: "kaito", texto: "Está bom. Obrigado. Mas você não precisa acordar às cinco por minha causa, Serena. Sério.", proxima: "c3_13" },
    c3_13: { tipo: "narracao", sprite: "serena", texto: "A Serena fica parada com os hashis no ar. “Você não precisa.” Ela ouve o que tem embaixo. Todo mundo no pátio ouve. Ela sorri mesmo assim, mas o sorriso fica duro, como um vidro que trincou e não quebrou ainda.", proxima: "c3_14" },
    c3_14: { quem: "serena", texto: "Eu acordo às cinco se eu quiser.", proxima: "c3_15" },
    c3_15: { tipo: "narracao", sprite: "blake", texto: "No banco, o Blake mastiga o sanduíche, devagar, olhando para a árvore. Depois, sem virar a cabeça, fala baixo, só para a SN.", proxima: "c3_16" },
    c3_16: { quem: "blake", texto: "Ele disse “não precisa”. Ele nunca disse isso pra ninguém. Ele sempre aceita e esquece. Hoje ele disse.", proxima: "c3_17" },
    c3_17: { quem: "eu", texto: "Isso é bom ou ruim?", proxima: "c3_18" },
    c3_18: { quem: "blake", texto: "Pra você, bom. Pra ela, ruim.", proxima: "c3_19" },
    c3_19: { tipo: "narracao", texto: "Ele fala isso e estende metade do sanduíche de frango para ela, sem olhar, como todo dia. Ela pega. E ele fica olhando para a árvore com uma cara que ela não consegue ler, uma cara de quem está fazendo uma conta difícil e não está gostando do resultado.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — Com o Blake
    c3_esc3: { escolhas: [
      { texto: "A. “E pra você, Blake? É bom ou ruim?”", proxima: "c3_3a_1", pontos: { blake: 3 }, flags: ["Pra_voce_Blake"] },
      { texto: "B. “Obrigada por guardar o banco. De novo.”", proxima: "c3_3b_1", pontos: { blake: 2 }, flags: ["Banco_de_novo"] },
      { texto: "C. Dividir a metade do sanduíche de novo e devolver um quarto pra ele. “Matemática.”", proxima: "c3_3c_1", pontos: { blake: 2 }, flags: ["Um_quarto"] }
    ]},
    c3_3a_1: { quem: "eu", texto: "E pra você, Blake? É bom ou ruim?", proxima: "c3_3a_2" },
    c3_3a_2: { tipo: "narracao", texto: "O Blake para de mastigar. Fica muito tempo parado. Olhando para o Kaito, no chão. Depois para ela.", proxima: "c3_3a_3" },
    c3_3a_3: { quem: "blake", texto: "Eu ainda estou pensando.", proxima: "c3_3a_4" },
    c3_3a_4: { tipo: "pensamento", texto: "Ele sempre está pensando. Mas dessa vez a cara dele é de quem já sabe a resposta e não quer saber.", proxima: "c3_20" },
    c3_3b_1: { quem: "eu", texto: "Obrigada por guardar o banco. De novo.", proxima: "c3_3b_2" },
    c3_3b_2: { quem: "blake", texto: "Eu guardo todo dia. Até alguém precisar de outro banco.", proxima: "c3_20" },
    c3_3c_1: { tipo: "narracao", texto: "Ela parte a metade do sanduíche no meio e devolve um quarto para ele. Ele olha para o pedaço minúsculo na mão dele.", proxima: "c3_3c_2" },
    c3_3c_2: { quem: "eu", texto: "Matemática.", proxima: "c3_3c_3" },
    c3_3c_3: { quem: "blake", texto: "...Agora eu tenho dois sanduíches e um quarto. Isso é pior que dois e meio.", proxima: "c3_3c_4" },
    c3_3c_4: { tipo: "narracao", texto: "Ele come o quarto em uma mordida, sério, e o canto da boca dele treme. Ela ri. A Serena, lá embaixo, olha para o banco com o rosto vermelho.", proxima: "c3_20" },

    // (todas as opções continuam aqui)
    c3_20: { tipo: "narracao", sprite: "victor", texto: "O Victor aparece do bloco C com o pirulito e o celular, e para do lado do banco, olhando para a cena, para o Kaito no chão, para a Serena no chão do lado, para o bento de três andares.", proxima: "c3_21" },
    c3_21: { quem: "victor", texto: "Boletim da rede. O bento é de madeira de verdade. Ela comprou no domingo, na loja de importados do shopping. Custou mais que a minha moto. Não, mentira. Custou o mesmo que o pneu da minha moto. Ainda é muito.", proxima: "c3_22" },
    c3_22: { quem: "victor", texto: "E ela postou foto de livro de receita japonesa o domingo inteiro. Quarenta e três fotos. Eu contei. A minha mãe diz que isso é amor ou é guerra. Às vezes é os dois.", proxima: "c3_23" },
    c3_23: { tipo: "narracao", texto: "Ele senta no braço do banco, do lado da SN, e encosta o ombro no dela, de leve, como quem diz “estou aqui” sem precisar dizer.", proxima: "c3_24" },
    c3_24: { quem: "victor", texto: "A oferta vitalícia continua de pé. A história do Caramelo comendo o sofá. Eu conto pra ela agora. Ela não vai aguentar nem o primeiro capítulo.", proxima: "c3_25" },
    c3_25: { quem: "eu", texto: "O primeiro capítulo?", proxima: "c3_26" },
    c3_26: { quem: "victor", texto: "A história tem sete capítulos. O sofá era muito grande.", proxima: "c4_01" },

    /* =================== CENA 4 — O SUCO (Serena) =================== */
    // Cenário: vestiário feminino, depois do intervalo (usa "vestiario"). Música: tensa.
    c4_01: { tipo: "narracao", cenario: "vestiario", transicao: "tempo", legenda: "Fim do intervalo — Cena 4", sprite: null, texto: "No fim do intervalo, ela vai até o vestiário feminino para encher a garrafa de água no filtro que fica lá dentro, o único gelado da escola. O vestiário está vazio. Só o barulho do filtro e uma torneira pingando.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "A porta abre atrás dela. Ela não precisa virar para saber quem é. Os chaveiros fazem barulho antes da voz.", proxima: "c4_03" },
    c4_03: { tipo: "narracao", sprite: "serena", texto: "A Serena entra. Sozinha. Com um copo de suco de uva da cantina na mão, cheio até a borda, e a caixa de bento de três andares embaixo do braço, ainda com dois andares cheios.", proxima: "c4_04" },
    c4_04: { quem: "serena", texto: "Ele disse “você não precisa”.", proxima: "c4_05" },
    c4_05: { quem: "eu", texto: "Eu ouvi.", proxima: "c4_06" },
    c4_06: { quem: "serena", texto: "Ele nunca disse isso. Em dois anos, ele nunca disse “não precisa”. Ele dizia “valeu”. “Valeu” eu aguentava. “Valeu” não é não. “Não precisa” é não.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", texto: "A voz dela sai firme, mas a mão que segura o copo de suco está tremendo um pouco. A SN vê.", proxima: "c4_08" },
    c4_08: { quem: "serena", texto: "E sabe quando ele começou a dizer não? Quando você apareceu com aquele cookie. Aquele cookie horrível. Verde. A escola inteira sabe que era verde. E ele comeu. E disse “são meus”. Na frente de todo mundo. Na minha frente.", proxima: "c4_09" },
    c4_09: { quem: "serena", texto: "Eu fiz um bento de três andares. Eu acordei às cinco. Eu comprei uma caixa de madeira. E você fez um cookie verde e ganhou.", proxima: "c4_10" },
    c4_10: { tipo: "narracao", texto: "Ela dá um passo para frente. Perto. E o copo de suco de uva, na mão dela, vira. Inteiro. Em cima da camisa branca do uniforme da SN. Da gola até a barra. Roxo.", proxima: "c4_11" },
    c4_11: { quem: "serena", texto: "Ops. Sem querer.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", texto: "Silêncio. O suco pinga no chão do vestiário. A camisa da SN gruda no corpo, gelada, roxa, pingando. A Serena fica parada, com o copo vazio na mão, esperando. Esperando o choro. O grito. Alguma coisa.", proxima: "c4_13" },
    c4_13: { tipo: "pensamento", texto: "Ela jogou suco em mim. Uma menina de dezesseis anos jogou suco de uva em mim no vestiário. Eu tenho vinte e oito anos por dentro e eu nunca, nunca, nem na outra vida, levei suco na cara.", proxima: "c4_14" },
    c4_14: { tipo: "pensamento", texto: "Eu podia partir aquela caixa de bento de madeira ao meio com uma mão. Eu podia dobrar a porta do armário dela. Eu podia fazer ela nunca mais encostar o pé nessa escola.", proxima: "c4_15" },
    c4_15: { tipo: "pensamento", texto: "Mas ela está tremendo. A mão dela está tremendo. Ela fez isso e agora está com medo do que fez.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — O suco
    c4_esc4: { escolhas: [
      { texto: "A. Tirar a camisa molhada (camiseta por baixo), torcer em cima da pia, olhando pra ela. “Uva. Boa escolha. Sai mais fácil que café.”", proxima: "c4_4a_1", pontos: {}, flags: ["Torceu_camisa"] },
      { texto: "B. Chegar muito perto. Baixo. “Faz de novo, Serena. Eu quero ver se você tem coragem de fazer de propósito.”", proxima: "c4_4b_1", pontos: { desvio: 1 }, flags: ["Faz_de_novo_Serena"] },
      { texto: "C. “Você não ganhou nem perdeu nada. Ele não é prêmio. Ninguém é prêmio.”", proxima: "c4_4c_1", pontos: { kaito: 1 }, flags: ["Nao_e_premio"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "Ela tira a camisa do uniforme, devagar. Por baixo, a camiseta branca, agora meio roxa também. Ela vai até a pia, torce a camisa em cima do ralo, e o suco escorre roxo, como se fosse sangue de desenho animado. Ela faz tudo isso olhando para a Serena pelo espelho.", proxima: "c4_4a_2" },
    c4_4a_2: { quem: "eu", texto: "Uva. Boa escolha. Sai mais fácil que café.", proxima: "c4_4a_3" },
    c4_4a_3: { tipo: "narracao", sprite: "serena", texto: "A Serena fica parada, com o copo vazio. Ela não esperava isso. Ninguém espera alguém torcendo a camisa e dando dica de lavanderia.", proxima: "c4_16" },
    c4_4b_1: { tipo: "narracao", texto: "Ela dá um passo. Chega perto. Muito perto. Ela é bem mais baixa que a Serena, mas a Serena dá um passo para trás mesmo assim, até as costas encostarem no armário de metal.", proxima: "c4_4b_2" },
    c4_4b_2: { quem: "eu", texto: "Faz de novo, Serena. Eu quero ver se você tem coragem de fazer de propósito. Olhando pra mim.", proxima: "c4_4b_3" },
    c4_4b_3: { tipo: "narracao", sprite: "serena", texto: "A Serena não faz. O copo está vazio, mas não é por isso. A boca dela abre, fecha. Os olhos dela, de rímel perfeito, ficam úmidos. Ela vira o rosto.", proxima: "c4_16" },
    c4_4c_1: { quem: "eu", texto: "Você não ganhou nem perdeu nada. Ele não é prêmio. Ninguém é prêmio. Ele não escolheu o cookie porque era melhor. Ele escolheu porque... porque escolheu.", proxima: "c4_4c_2" },
    c4_4c_2: { tipo: "narracao", sprite: "serena", texto: "A Serena fica parada. Os olhos dela, de rímel perfeito, ficam úmidos de repente, e ela pisca muito rápido para não deixar escorrer.", proxima: "c4_4c_3" },
    c4_4c_3: { quem: "serena", texto: "...É isso que dói. Ele escolheu.", proxima: "c4_16" },

    // (todas as opções continuam aqui)
    c4_16: { quem: "serena", sprite: "serena", texto: "Você acha que eu não sei? Que eu não sei que é ridículo? Acordar às cinco. Comprar caixa de madeira. Quarenta e três fotos de livro de receita. Eu sei que é ridículo.", proxima: "c4_17" },
    c4_17: { quem: "serena", texto: "Mas eu gostei dele primeiro. Dois anos antes de você. E ele nunca olhou. E aí você chega e ele olha. Do nada. Por quê? O que você tem?", proxima: "c4_18" },
    c4_18: { tipo: "narracao", texto: "Ela não espera resposta. Larga o copo vazio na pia, pega a caixa de bento, e sai do vestiário rápido, com o rosto virado, os chaveiros batendo. A porta fecha. A SN fica sozinha, molhada, roxa, com o barulho do filtro.", proxima: "c4_19" },
    c4_19: { tipo: "pensamento", texto: "“O que você tem?” Eu não sei. Eu não sei o que eu tenho. Eu sei que eu sou uma pessoa que voltou doze anos no tempo pra salvar outro menino e acabou numa cozinha às quatro e meia da manhã fazendo cookie verde pra esse.", proxima: "c4_20" },
    c4_20: { tipo: "pensamento", texto: "Eu não ganhei nada. Ela tem razão em uma coisa só: dói ela ter gostado primeiro.", proxima: "c4_21" },
    c4_21: { tipo: "narracao", sprite: "mio", texto: "A Mio entra no vestiário dois minutos depois, procurando ela, e para na porta. Vê a camisa roxa. A cara da SN. O copo de suco vazio na pia.", proxima: "c4_22" },
    c4_22: { quem: "mio", texto: "...A Serena. Eu vi ela saindo. Ela estava chorando. Você fez ela chorar?", proxima: "c4_23" },
    c4_23: { quem: "eu", texto: "Ela jogou suco de uva em mim.", proxima: "c4_24" },
    c4_24: { quem: "mio", texto: "E VOCÊ fez ELA chorar?", proxima: "c4_25" },
    c4_25: { quem: "eu", texto: "Mais ou menos. Me empresta o seu casaco? A minha camisa está parecendo um crime.", proxima: "c4_26" },
    c4_26: { tipo: "narracao", texto: "A Mio tira o casaco do uniforme e coloca nela, fechando o zíper até o queixo, como uma mãe brava. Pelo resto do dia, a SN anda pela escola com o casaco da Mio, dois números maior, e a rede de fofoca trabalha como nunca.", proxima: "c5_01" },

    /* =================== CENA 5 — A HORA GRÁTIS (Ryuji) =================== */
    // Cenário: corredor, troca de aula. Música: animada.
    c5_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Troca de aula — Cena 5", sprite: "ryuji", texto: "Na troca de aula, o Ryuji aparece no corredor do bloco A, na frente da sala dela, como todo dia agora. Ele vê o casaco da Mio, dois números maior, fechado até o queixo.", proxima: "c5_02" },
    c5_02: { quem: "ryuji", texto: "...Por que você está de casaco? Está trinta graus. Você está doente? Febre? Hipotermia? Eu sei os sintomas. Cartão quarenta e um.", proxima: "c5_03" },
    c5_03: { tipo: "narracao", texto: "Ela abre o zíper um pouco, só para mostrar a gola roxa da camisa. O Ryuji arregala os olhos.", proxima: "c5_04" },
    c5_04: { quem: "ryuji", texto: "Isso é suco de uva. Eu conheço mancha de suco de uva. A minha irmã de nove anos é especialista. Quem foi?", proxima: "c5_05" },
    c5_05: { quem: "eu", texto: "Não importa.", proxima: "c5_06" },
    c5_06: { quem: "ryuji", texto: "Foi a Serena. A rede de fofoca já sabe. Eu só queria ouvir de você.", proxima: "c5_07" },
    c5_07: { tipo: "narracao", texto: "Ele fica sério. O Ryuji sério é raro. Ele coça a nuca, olha para o chão, e depois tira do bolso da mochila um papel dobrado.", proxima: "c5_08" },
    c5_08: { quem: "ryuji", texto: "Eu ia te dar isso de qualquer jeito. Mas agora eu vou dar com mais vontade.", proxima: "c5_09" },
    c5_09: { tipo: "narracao", texto: "É um cupom impresso da lan house, com o carimbo do dono: “1 MÊS DE HORA GRÁTIS — VÁLIDO PARA 2 PESSOAS”. Embaixo, com a letra de eletrocardiograma dele, ele escreveu: “Ryuji + capitã”.", proxima: "c5_10" },
    c5_10: { quem: "ryuji", texto: "O prêmio era pra uma pessoa. Eu fui lá no domingo e convenci o dono a fazer pra duas. Eu falei que você é a melhor jogadora do bairro e que se você não jogasse lá você ia jogar na outra lan, a da avenida.", proxima: "c5_11" },
    c5_11: { quem: "ryuji", texto: "Ele ficou com medo. Ele lembra de você em pé na cadeira.", proxima: "c5_esc5" },

    // ▶ ESCOLHA 5 — O cupom
    c5_esc5: { escolhas: [
      { texto: "A. “Ryuji + capitã. Você escreveu isso no cupom oficial?”", proxima: "c5_5a_1", pontos: { ryuji: 3 }, flags: ["Ryuji_capita"] },
      { texto: "B. “Hoje à tarde. Eu preciso matar umas pessoas no jogo. Depois do suco.”", proxima: "c5_5b_1", pontos: { ryuji: 3 }, flags: ["Hoje_lan"] },
      { texto: "C. Abraçar ele rápido, de lado, com o casaco da Mio. “Obrigada.”", proxima: "c5_5c_1", pontos: { ryuji: 3 }, flags: ["Abraco_cupom"] }
    ]},
    c5_5a_1: { quem: "eu", texto: "“Ryuji + capitã.” Você escreveu isso no cupom oficial?", proxima: "c5_5a_2" },
    c5_5a_2: { quem: "ryuji", texto: "O dono deixou. Ele disse que eu podia escrever o que eu quisesse, desde que eu saísse da lan e parasse de falar. Eu fiquei lá uma hora.", proxima: "c5_5a_3" },
    c5_5a_3: { tipo: "narracao", texto: "Ele ri, e ela ri, e ele fica vermelho, e o sinal toca, e ele sai correndo de costas, quase batendo num professor, de novo, gritando “a gente começa amanhã!”.", proxima: "c5_12" },
    c5_5b_1: { quem: "eu", texto: "Hoje à tarde. Eu preciso matar umas pessoas no jogo. Depois do suco.", proxima: "c5_5b_2" },
    c5_5b_2: { quem: "ryuji", texto: "Hoje? Hoje eu tenho a aula preparatória do curso às quatro. Mas eu posso faltar. Não. Eu não posso faltar. Amanhã. Amanhã eu te ajudo a matar todo mundo.", proxima: "c5_5b_3" },
    c5_5b_3: { tipo: "narracao", texto: "Ele fala isso dividido, quase sofrendo, e ela vê que ele quase faltou no curso de bombeiro por causa dela. Quase. O Ryuji nunca faltaria no curso. Mas ele quase.", proxima: "c5_12" },
    c5_5c_1: { tipo: "narracao", texto: "Ela abraça ele de lado, rápido, com o casaco da Mio fazendo barulho de plástico. O Ryuji fica completamente parado, com os braços no ar, sem saber onde colocar. Depois coloca um, de leve, nas costas dela.", proxima: "c5_5c_2" },
    c5_5c_2: { quem: "eu", texto: "Obrigada.", proxima: "c5_5c_3" },
    c5_5c_3: { quem: "ryuji", texto: "...De nada. De nada. Você está com cheiro de uva.", proxima: "c5_12" },

    // (todas as opções continuam aqui)
    c5_12: { tipo: "narracao", sprite: null, texto: "O resto do dia passa. Na última aula, a professora de português lê a escala de limpeza da semana. Cada dia, duas pessoas ficam depois da aula para apagar o quadro, recolher o lixo e arrumar as carteiras.", proxima: "c5_13" },
    c5_13: { quem: "desconhecido", rotulo: "Professora de português", texto: "Segunda-feira: SN e Ren.", proxima: "c5_14" },
    c5_14: { tipo: "narracao", texto: "A sala inteira continua conversando, guardando material, ninguém liga para a escala de limpeza. Mas a Mio, do lado, para de guardar o estojo. E o Takeo, atrás, para de respirar. E na carteira perto da porta, o Ren não levanta os olhos do livro. Mas fecha o livro.", proxima: "c5_15" },
    c5_15: { tipo: "pensamento", texto: "A escala é sorteada. Eu sei que é sorteada. A professora sorteia no começo do bimestre.", proxima: "c5_16" },
    c5_16: { tipo: "pensamento", texto: "Não é coincidência. Nada com ele é coincidência.", proxima: "c6_01" },

    /* =================== CENA 6 — A SÓS (Ren) =================== */
    // Cenário: sala de aula vazia, depois da aula. Música: silêncio, depois piano baixo.
    c6_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Depois da aula — Cena 6", sprite: null, texto: "Depois da aula, a sala esvazia. A Mio é a última a sair. Ela para na porta, olha para a SN, olha para o Ren, e faz um sinal com dois dedos, apontando para os próprios olhos e depois para ela: estou de olho. Do lado de fora, o Takeo fica parado no corredor, encostado na parede, de braços cruzados com o gesso, sem ir embora.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", texto: "A porta fecha. Agora são só os dois. A sala vazia, com as carteiras tortas, o quadro cheio de soneto, o sol da tarde entrando de lado pela janela, laranja, cheio de pó dançando.", proxima: "c6_03" },
    c6_03: { sprite: "ren", tipo: "narracao", texto: "O Ren pega o apagador sem falar nada. Vai até o quadro. Começa a apagar o soneto. Devagar, de cima para baixo, em linhas retas, como faz tudo.", proxima: "c6_04" },
    c6_04: { tipo: "narracao", texto: "Ela pega o saco de lixo e começa a recolher papel das carteiras. Não fala nada também. Por cinco minutos, os dois trabalham em silêncio. Só o barulho do apagador e do papel.", proxima: "c6_05" },
    c6_05: { quem: "ren", texto: "Suco de uva.", proxima: "c6_06" },
    c6_06: { tipo: "narracao", texto: "Ele não vira. Continua apagando. Ela para com o saco de lixo na mão.", proxima: "c6_07" },
    c6_07: { quem: "eu", texto: "Não é da sua conta.", proxima: "c6_08" },
    c6_08: { quem: "ren", texto: "Não.", proxima: "c6_09" },
    c6_09: { tipo: "narracao", texto: "Ele concorda. Simples assim. Continua apagando. Ela fica olhando para as costas dele.", proxima: "c6_10" },
    c6_10: { tipo: "pensamento", texto: "Ele vai fazer alguma coisa com a Serena. Do jeito dele. Uma empresa, um prédio, um pai. Eu sei que vai.", proxima: "c6_11" },
    c6_11: { quem: "eu", texto: "Não encosta nela, Ren.", proxima: "c6_12" },
    c6_12: { tipo: "narracao", texto: "O apagador para no meio do quadro. Ele fica parado, de costas, com o braço levantado.", proxima: "c6_13" },
    c6_13: { quem: "ren", texto: "Ela jogou suco em você.", proxima: "c6_14" },
    c6_14: { quem: "eu", texto: "E eu resolvi. Sozinha. Não encosta nela. Nem no pai dela, nem na casa dela, nem no que ela gosta. Eu já falei no prédio. Se você mexer com quem está perto de mim, eu derrubo tudo.", proxima: "c6_15" },
    c6_15: { tipo: "narracao", texto: "Silêncio. Ele abaixa o braço. Coloca o apagador na borda do quadro. E vira. Pela primeira vez desde que entrou, ele olha para ela.", proxima: "c6_16" },
    c6_16: { quem: "ren", texto: "Tá.", proxima: "c6_17" },
    c6_17: { tipo: "narracao", texto: "Ele fala isso e senta na carteira mais perto do quadro. Não na dele, perto da porta. Na da frente. Ele senta e fica olhando para as mãos, em cima da carteira, os dedos entrelaçados, apertados.", proxima: "c6_18" },
    c6_18: { tipo: "narracao", texto: "Ela nunca viu o Ren assim. Ele sempre fica em pé. Ele sempre fica longe. Quatro metros. Agora ele está sentado, a dois metros dela, olhando para as próprias mãos como quem procura coragem embaixo das unhas.", proxima: "c6_19" },
    c6_19: { quem: "ren", texto: "No prédio, eu falei uma parte.", proxima: "c6_20" },
    c6_20: { quem: "eu", texto: "Você contou o começo. E guardou o resto.", proxima: "c6_21" },
    c6_21: { tipo: "narracao", texto: "Ele levanta os olhos. Um canto da boca mexe. Quase nada. Ele gostou que ela lembrou.", proxima: "c6_22" },
    c6_22: { quem: "ren", texto: "Eu vim contar o resto.", proxima: "c6_23" },
    c6_23: { tipo: "narracao", texto: "A SN larga o saco de lixo no chão, devagar. Senta na carteira do lado da dele. Não muito perto. Uma carteira de distância. O sol laranja batendo nos dois.", proxima: "c6_24" },
    c6_24: { quem: "eu", texto: "Então conta.", proxima: "c6_25" },
    c6_25: { tipo: "narracao", texto: "Ele abre a boca. Fecha. Abre de novo. Os dedos entrelaçados apertam mais. Ela vê a garganta dele subir e descer.", proxima: "c6_26" },
    c6_26: { quem: "ren", texto: "Depois que você sumiu, eu voltei.", proxima: "c6_27" },
    c6_27: { quem: "ren", texto: "No mesmo lugar. No mesmo horário. Todo dia. Com o tabuleiro dobrado embaixo do braço. Pra caso você voltasse e quisesse jogar errado de novo.", proxima: "c6_28" },
    c6_28: { quem: "ren", texto: "Um mês inteiro. Trinta e um dias. Eu contei. Choveu em nove. Eu fui nos nove.", proxima: "c6_29" },
    c6_29: { tipo: "narracao", texto: "Ele fala isso sem tremer a voz. Baixo. Igual. Como quem lê uma lista de compras. E é por isso que dói. Porque ela imagina. Um menino de óculos grandes, de armação marrom, sozinho, na chuva, com um tabuleiro dobrado embaixo do braço, esperando, por trinta e um dias.", proxima: "c6_30" },
    c6_30: { tipo: "narracao", efeito: "flashback", texto: "Um flash, de leve. Um par de óculos enorme, embaçado de chuva. Um dedo pequeno, o dela, desenhando uma carinha no vidro embaçado da lente. Uma risada de menino, baixa, a primeira que ela ouviu dele.", proxima: "c6_31" },
    c6_31: { tipo: "narracao", texto: "Some. Ela pisca. A sala. O sol laranja. O Ren, sentado, olhando para as mãos.", proxima: "c6_32" },
    c6_32: { tipo: "pensamento", texto: "Ele riu. Uma vez. Por causa de mim. Eu lembro da risada. Eu não lembro do rosto. Eu lembro da risada.", proxima: "c6_33" },
    c6_33: { quem: "eu", texto: "Por que eu sumi, Ren?", proxima: "c6_34" },
    c6_34: { tipo: "narracao", texto: "Ele fica parado muito tempo. Lá fora, no corredor, ela ouve o gesso do Takeo bater de leve na parede, uma vez, como quem muda de posição.", proxima: "c6_35" },
    c6_35: { quem: "ren", texto: "No último dia que você foi, uma mulher veio te buscar. Com pressa. Muita pressa. Ela pegou você pelo braço. Você deixou o cavalo branco cair. Ela nem olhou pra mim.", proxima: "c6_36" },
    c6_36: { tipo: "narracao", efeito: "eco", texto: "“Vem, a gente tem que ir. Agora. Larga isso aí.”", proxima: "c6_37" },
    c6_37: { tipo: "pensamento", texto: "A voz. A voz do meu flash. A mulher com pressa. Era real. Ela existiu. Ela me tirou de lá.", proxima: "c6_38" },
    c6_38: { quem: "eu", texto: "Quem era ela?", proxima: "c6_39" },
    c6_39: { tipo: "narracao", texto: "O Ren olha para ela. E ela vê. Pela primeira vez, ela vê ele decidir. Os olhos dele, que nunca mudam, mudam. Ele vai falar. Ele abre a boca para falar.", proxima: "c6_40" },
    c6_40: { quem: "ren", texto: "Eu descobri quem era. Anos depois. Eu procurei. Eu achei. E eu entendi por que você nunca mais voltou.", proxima: "c6_41" },
    c6_41: { quem: "ren", texto: "Ela era...", proxima: "c6_42" },
    c6_42: { tipo: "narracao", texto: "Ele para. Ela vê a palavra chegar até a boca dele e parar ali, presa nos dentes. Ele fecha a boca. Os dedos entrelaçados soltam, devagar. Ele olha para a janela, para o sol.", proxima: "c6_43" },
    c6_43: { quem: "ren", texto: "...Não.", proxima: "c6_44" },
    c6_44: { quem: "eu", texto: "Ren. Fala.", proxima: "c6_45" },
    c6_45: { quem: "ren", texto: "Se eu falar, você vai embora de novo.", proxima: "c6_46" },
    c6_46: { tipo: "narracao", texto: "Ele fala isso baixo, muito baixo, olhando para a janela, e a voz dele, pela primeira vez, não é igual. Treme. Só um pouco. Só na última palavra.", proxima: "c6_47" },
    c6_47: { tipo: "pensamento", texto: "“Vai embora de novo.” Ele não está com medo de mim. Ele está com medo de eu ir embora. Igual da outra vez. Quando ele ficou trinta e um dias na chuva.", proxima: "c6_48" },
    c6_48: { tipo: "pensamento", texto: "E ele é o mesmo cara que quebrou a mão de um da Midorata. Que comprou o prédio da lojinha do tio do Kaito. Que mandou quebrar o braço do Takeo no escuro. As duas coisas são ele. O menino da chuva e esse.", proxima: "c6_esc6" },

    // ▶ ESCOLHA 6 — "Se eu falar, você vai embora de novo."
    c6_esc6: { escolhas: [
      { texto: "A. “Eu não vou a lugar nenhum. Mas eu também não vou ficar do seu lado enquanto você machuca os outros.”", proxima: "c6_6a_1", pontos: {}, flags: ["Nao_vou_embora"] },
      { texto: "B. “Então eu descubro sozinha. Eu sempre descubro.”", proxima: "c6_6b_1", pontos: { desvio: 1 }, flags: ["Descubro_sozinha"] },
      { texto: "C. Não falar nada. Ficar sentada do lado dele, uma carteira de distância, até o sol acabar.", proxima: "c6_6c_1", pontos: { desvio: 2 }, flags: ["Ficou_sol"] }
    ]},
    c6_6a_1: { quem: "eu", texto: "Eu não vou a lugar nenhum, Ren. Mas eu também não vou ficar do seu lado enquanto você machuca os outros. As duas coisas são verdade.", proxima: "c6_6a_2" },
    c6_6a_2: { tipo: "narracao", texto: "Ele olha para ela. Muito tempo. Ela não sabe o que ele vê. Mas ele faz que sim com a cabeça, uma vez, como quem aceita uma regra de um jogo que ele não escolheu.", proxima: "c6_49" },
    c6_6b_1: { quem: "eu", texto: "Então eu descubro sozinha. Eu sempre descubro.", proxima: "c6_6b_2" },
    c6_6b_2: { tipo: "narracao", texto: "O canto da boca dele sobe. Não é sorriso. É quase. É a cara de quem esperava exatamente essa resposta, e gostou, e tem medo de ter gostado.", proxima: "c6_6b_3" },
    c6_6b_3: { quem: "ren", texto: "Eu sei. Por isso eu não preciso falar.", proxima: "c6_49" },
    c6_6c_1: { tipo: "narracao", texto: "Ela não fala nada. Ela fica sentada, uma carteira de distância, olhando para o quadro meio apagado, com metade do soneto ainda lá. Ele fica também. Os dois em silêncio, com o sol laranja descendo devagar pela parede.", proxima: "c6_6c_2" },
    c6_6c_2: { tipo: "narracao", texto: "Ninguém fala por dez minutos. O sol chega no chão. Ele levanta primeiro. Pega o apagador. Termina de apagar o soneto. Sem pressa. Ela sente que foi a primeira vez em muito tempo que ele ficou dez minutos do lado de alguém sem querer nada.", proxima: "c6_49" },

    // (todas as opções continuam aqui)
    c6_49: { tipo: "narracao", texto: "Ele pega a mochila. Vai até a porta. Para com a mão na maçaneta.", proxima: "c6_cam_cav" },
    c6_cam_cav: { caminhos: [
      { flag: "Cavalo_especial", proxima: "c6_cav" }
    ], proxima: "c6_50" },
    c6_cav: { quem: "ren", texto: "O seu cavalo. Ainda é especial. Você escreveu isso. Eu li umas cem vezes.", proxima: "c6_50" },
    c6_50: { quem: "ren", texto: "Ninguém encosta na Serena. Você pediu.", proxima: "c6_51" },
    c6_51: { tipo: "narracao", texto: "Ele abre a porta. No corredor, o Takeo está encostado na parede, de braços cruzados com o gesso. Os dois se olham. Um segundo. O Ren olha para o gesso. O Takeo não desvia. Fica parado, no meio do caminho, do jeito que ele disse que é bom em ficar.", proxima: "c6_52" },
    c6_52: { sprite: "ren", tipo: "narracao", texto: "O Ren passa do lado dele sem falar nada. Mas, no meio do corredor, ele olha para trás uma vez. Para o Takeo. E a cara dele faz aquilo. A janela fechando por dentro. Fria.", proxima: "c6_53" },
    c6_53: { tipo: "narracao", sprite: "takeo:machucado", texto: "O Takeo entra na sala, mancando. Para do lado dela. Olha para ela. Ela ainda está sentada na carteira, olhando para o quadro limpo.", proxima: "c6_54" },
    c6_54: { quem: "takeo", sprite: "takeo:machucado", texto: "Você está bem?", proxima: "c6_55" },
    c6_55: { quem: "eu", texto: "...Ele ficou trinta e um dias na chuva, Takeo.", proxima: "c6_56" },
    c6_56: { quem: "takeo", sprite: "takeo:machucado", texto: "Quem?", proxima: "c6_57" },
    c6_57: { tipo: "narracao", texto: "Ela não responde. O Takeo não pergunta de novo. Ele senta na carteira do outro lado dela. Agora ela está entre os dois lugares onde eles sentaram. O do Ren, vazio. O do Takeo, ocupado. O sol acabando.", proxima: "c6_58" },
    c6_58: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu fiquei no corredor o tempo todo. Eu não ouvi nada. A porta é grossa. Mas eu fiquei.", proxima: "c6_59" },
    c6_59: { tipo: "pensamento", texto: "Eu não sei por quê. Mas, quando o Ren olhou pra ele no corredor, eu senti a mesma coisa gelada na nuca do fliperama. “Ele anda sozinho à noite.”", proxima: "c6_60" },
    c6_60: { quem: "eu", texto: "Takeo. Hoje você volta comigo. Pela rua da padaria. Tem luz.", proxima: "r_cam" },

    /* =================== ROTA — SEGUNDA À NOITE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { tipo: "narracao", cenario: "loja-lamen", transicao: "tempo", legenda: "Segunda, 19h", sprite: "kaito", texto: "Depois de deixar o Takeo no portão verde, ela vai até a lojinha. O Kaito está atrás do balcão, cortando cebolinha. Ele levanta os olhos quando ela entra. Vê o casaco da Mio, ainda fechado até o queixo.", proxima: "rk_02" },
    rk_02: { quem: "kaito", texto: "A rede contou. Do suco.", proxima: "rk_03" },
    rk_03: { quem: "eu", texto: "Eu resolvi.", proxima: "rk_04" },
    rk_04: { quem: "kaito", texto: "Eu sei que resolveu. Você sempre resolve. Mas eu fui falar com ela mesmo assim. No portão da saída.", proxima: "rk_05" },
    rk_05: { tipo: "narracao", texto: "Ele para de cortar. Coloca a faca na tábua. Olha para ela.", proxima: "rk_06" },
    rk_06: { quem: "kaito", texto: "Eu falei que ela não precisa acordar às cinco. Que ela não precisa fazer bento. Que eu agradeço, de verdade, o bolo de cenoura do primeiro ano. E que eu sinto muito não ter percebido antes. E que eu não vou... que eu já...", proxima: "rk_07" },
    rk_07: { tipo: "narracao", texto: "Ele não termina. Mas olha para ela de um jeito que termina a frase sozinho.", proxima: "rk_08" },
    rk_08: { quem: "kaito", texto: "Ela chorou. Eu nunca fiz ninguém chorar sem bater. Foi pior que bater.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. “Você fez certo. Foi difícil, mas foi certo.”", proxima: "rk_a1", pontos: { kaito: 3 }, flags: ["Fez_certo"] },
      { texto: "B. “Você já o quê, Kaito? Termina a frase.”", proxima: "rk_b1", pontos: { kaito: 3 }, flags: ["Termina_frase"] },
      { texto: "C. Ir até o balcão, tirar o casaco da Mio, e mostrar a camisa roxa. “Ela também chorou comigo. A gente está quite, todo mundo.”", proxima: "rk_c1", pontos: { kaito: 2 }, flags: ["Quite_todos"] }
    ]},
    rk_a1: { quem: "eu", texto: "Você fez certo. Foi difícil, mas foi certo.", proxima: "rk_a2" },
    rk_a2: { tipo: "narracao", texto: "Ele solta o ar. Fica olhando para a tábua com a cebolinha cortada pela metade. Depois volta a cortar. Devagar.", proxima: "rk_a3" },
    rk_a3: { quem: "kaito", texto: "Cebolinha pra dois.", proxima: "r_fim" },
    rk_b1: { quem: "eu", texto: "Você já o quê, Kaito? Termina a frase.", proxima: "rk_b2" },
    rk_b2: { tipo: "narracao", texto: "Ele olha para ela. Não desvia. Pela segunda vez em três dias, ele não desvia.", proxima: "rk_b3" },
    rk_b3: { quem: "kaito", texto: "Que eu já gosto de outra pessoa.", proxima: "rk_b4" },
    rk_b4: { tipo: "narracao", texto: "Ele fala isso e volta a cortar cebolinha, muito rápido, com as orelhas pegando fogo. Ela fica parada no meio da lojinha, com o casaco da Mio e a camisa roxa por baixo, e não consegue falar nada.", proxima: "rk_b5" },
    rk_b5: { quem: "kaito", texto: "...Não fala nada. Senta. Eu fiz caldo.", proxima: "r_fim" },
    rk_c1: { tipo: "narracao", texto: "Ela abre o zíper do casaco da Mio e mostra a camisa roxa. Da gola até a barra. O Kaito olha. Fica sério. Depois a boca dele treme. Depois ele começa a rir, pelo nariz, sem conseguir parar.", proxima: "rk_c2" },
    rk_c2: { quem: "kaito", texto: "Desculpa. Desculpa. É que parece um polvo explodiu em você.", proxima: "rk_c3" },
    rk_c3: { quem: "eu", texto: "Um polvo de uva.", proxima: "rk_c4" },
    rk_c4: { tipo: "narracao", texto: "Os dois riem. O tio, da cozinha, grita para eles pararem de rir no meio do expediente. Eles não param.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { tipo: "narracao", cenario: "casa-takeo-noite", transicao: "tempo", legenda: "Segunda, 18h", sprite: "takeo:machucado", texto: "Pela rua da padaria, que tem luz. Ela leva o Takeo até o portão verde descascado. Ele não fala quase nada o caminho inteiro. Mas, na frente do portão, ele para.", proxima: "rt_02" },
    rt_02: { quem: "takeo", sprite: "takeo:machucado", texto: "Hoje, no corredor. Ele olhou pra mim. O Ren. Depois que saiu da sala.", proxima: "rt_03" },
    rt_03: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu não sei explicar. Foi igual a noite que eu apanhei. Antes de eles saírem do escuro. Eu senti a mesma coisa. Uma coisa fria.", proxima: "rt_04" },
    rt_04: { tipo: "pensamento", texto: "Ele sentiu. O Takeo sentiu. Ele não sabe de nada, e sentiu.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. “Eu sei. Eu também senti. Por isso eu te trouxe.”", proxima: "rt_a1", pontos: { takeo: 3 }, flags: ["Tambem_senti"] },
      { texto: "B. Segurar a mão boa dele. “Amanhã eu te busco aqui. E depois de amanhã. Até tirar o gesso.”", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["Busco_Takeo"] },
      { texto: "C. “Takeo. Promete de novo. Nunca no escuro.”", proxima: "rt_c1", pontos: { takeo: 3 }, flags: ["Nunca_escuro"] }
    ]},
    rt_a1: { quem: "eu", texto: "Eu sei. Eu também senti. Por isso eu te trouxe.", proxima: "rt_a2" },
    rt_a2: { tipo: "narracao", texto: "O Takeo olha para ela. Depois para a rua da padaria, toda iluminada. Ele entende. Não tudo. Mas o suficiente.", proxima: "rt_a3" },
    rt_a3: { quem: "takeo", sprite: "takeo:machucado", texto: "Então eu não estou ficando maluco.", proxima: "rt_a4" },
    rt_a4: { quem: "eu", texto: "Você é a pessoa menos maluca que eu conheço.", proxima: "r_fim" },
    rt_b1: { tipo: "narracao", texto: "Ela segura a mão boa dele. Ele fica parado, olhando para a mão dela na dele, embaixo do poste.", proxima: "rt_b2" },
    rt_b2: { quem: "eu", texto: "Amanhã eu te busco aqui. E depois de amanhã. Até tirar o gesso.", proxima: "rt_b3" },
    rt_b3: { quem: "takeo", sprite: "takeo:machucado", texto: "E depois de tirar o gesso?", proxima: "rt_b4" },
    rt_b4: { quem: "eu", texto: "Depois a gente vê.", proxima: "rt_b5" },
    rt_b5: { tipo: "narracao", texto: "Ele não solta a mão dela. Abre o portão com a outra mão, a do gesso, desajeitado, e fica parado na soleira, segurando a mão dela por cima do portão, até a avó acender a luz da varanda e tossir alto.", proxima: "r_fim" },
    rt_c1: { quem: "eu", texto: "Takeo. Promete de novo. Nunca no escuro.", proxima: "rt_c2" },
    rt_c2: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu prometo. Mas você está me assustando.", proxima: "rt_c3" },
    rt_c3: { quem: "eu", texto: "Eu sei. Desculpa. Promete mesmo assim.", proxima: "rt_c4" },
    rt_c4: { quem: "takeo", sprite: "takeo:machucado", texto: "...Prometo. Nunca no escuro. Nunca sozinho. Pela rua que tem luz.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { tipo: "narracao", cenario: "livraria-shopping", transicao: "tempo", legenda: "Segunda, 19h", sprite: "blake", texto: "Depois de deixar o Takeo, ela passa pela livraria do shopping. O Blake está atrás do balcão. Ele vê o casaco da Mio, fechado até o queixo. Não pergunta. Vai até o estoque e volta com uma camiseta branca, nova, ainda com etiqueta, da loja do lado.", proxima: "rb_02" },
    rb_02: { quem: "blake", texto: "Eu comprei no intervalo da tarde. Quando a rede contou. Eu chutei o tamanho.", proxima: "rb_03" },
    rb_03: { tipo: "narracao", texto: "Ela pega a camiseta. É do tamanho certo. Exatamente o tamanho certo.", proxima: "rb_04" },
    rb_04: { quem: "eu", texto: "Como você acertou?", proxima: "rb_05" },
    rb_05: { quem: "blake", texto: "Você bate no meu ombro. Eu sei a sua altura de cor.", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. Trocar no banheiro da livraria e voltar. “Ficou perfeita.”", proxima: "rb_a1", pontos: { blake: 3 }, flags: ["Camiseta_Blake"] },
      { texto: "B. “Você sabe a minha altura de cor?”", proxima: "rb_b1", pontos: { blake: 3 }, flags: ["Altura_de_cor"] },
      { texto: "C. “Blake. Hoje no banco. Você ia falar uma coisa.”", proxima: "rb_c1", pontos: { blake: 2 }, flags: ["Ia_falar_Blake"] }
    ]},
    rb_a1: { tipo: "narracao", texto: "Ela troca no banheiro dos funcionários, no fundo do estoque, e volta com a camiseta nova, branca, e a camisa roxa dobrada embaixo do braço. O Blake fica olhando. Depois desvia, rápido, para a pilha de livros.", proxima: "rb_a2" },
    rb_a2: { quem: "eu", texto: "Ficou perfeita.", proxima: "rb_a3" },
    rb_a3: { quem: "blake", texto: "...Ficou.", proxima: "r_fim" },
    rb_b1: { quem: "eu", texto: "Você sabe a minha altura de cor?", proxima: "rb_b2" },
    rb_b2: { tipo: "narracao", texto: "O Blake fica vermelho. Percebe o que falou. Não retira.", proxima: "rb_b3" },
    rb_b3: { quem: "blake", texto: "Um metro e sessenta. Você bate no meu ombro quando senta no banco. Na escada, você fica dois degraus abaixo de mim e bate no meu queixo. Eu reparo nas coisas. Só demoro pra falar.", proxima: "r_fim" },
    rb_c1: { quem: "eu", texto: "Blake. Hoje no banco. Você ia falar uma coisa. “Pra você, bom. Pra ela, ruim.” E pra você?", proxima: "rb_c2" },
    rb_c2: { tipo: "narracao", texto: "O Blake coloca o livro na pilha. Ajeita. Não olha para ela.", proxima: "rb_c3" },
    rb_c3: { quem: "blake", texto: "Pra mim, é igual sempre. Eu fico no banco. Eu fico na escada. Eu fico.", proxima: "rb_c4" },
    rb_c4: { tipo: "pensamento", texto: "Ele não disse ruim. Ele não disse bom. Ele disse “eu fico”. O Blake fica. Mesmo quando ficar dói.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { tipo: "narracao", cenario: "rua-padaria-noite", transicao: "tempo", legenda: "Segunda, 19h", sprite: "ryuji", texto: "Depois de deixar o Takeo, ela encontra o Ryuji na esquina da rua da padaria, saindo da aula preparatória do curso de bombeiro, de uniforme do curso, laranja, com uma faixa nova na testa.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", texto: "SN! Hoje a gente teve aula de resgate em altura! Eu subi uma escada de doze metros! Eu não olhei pra baixo! Eu olhei pra baixo uma vez e quase vomitei! Mas não vomitei!", proxima: "rr_03" },
    rr_03: { tipo: "narracao", texto: "Ele fala sem respirar, com os olhos brilhando, e depois para, e olha para o casaco da Mio fechado até o queixo.", proxima: "rr_04" },
    rr_04: { quem: "ryuji", texto: "...Você ainda está de casaco. Você não foi pra casa trocar.", proxima: "rr_05" },
    rr_05: { quem: "eu", texto: "Eu fiquei na escala de limpeza. Com o Ren.", proxima: "rr_06" },
    rr_06: { tipo: "narracao", texto: "O Ryuji fica sério. Muito sério. Mais sério que na noite da blitz.", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. “Está tudo bem. Ele só falou. Me conta da escada de doze metros.”", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Escada_doze"] },
      { texto: "B. Encostar a testa no ombro dele, do uniforme laranja. “Me leva pra casa. Pela volta grande.”", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Volta_grande_39"] },
      { texto: "C. “Ryuji, você olharia pra baixo uma segunda vez? Se fosse pra salvar alguém?”", proxima: "rr_c1", pontos: { ryuji: 2 }, flags: ["Segunda_vez"] }
    ]},
    rr_a1: { quem: "eu", texto: "Está tudo bem. Ele só falou. Me conta da escada de doze metros.", proxima: "rr_a2" },
    rr_a2: { tipo: "narracao", texto: "O Ryuji olha para ela, desconfiado. Depois decide acreditar, porque ele sempre prefere a versão que tem piada. E conta. Da escada, do instrutor que gritava, do colega que travou no oitavo metro, dele mesmo cantando para não olhar para baixo.", proxima: "rr_a3" },
    rr_a3: { quem: "ryuji", texto: "E eu cantei aquela da Hana. A do karaokê. “Depois da Chuva.” O instrutor mandou eu parar. Eu não parei.", proxima: "r_fim" },
    rr_b1: { tipo: "narracao", texto: "Ela encosta a testa no ombro dele, no uniforme laranja do curso, que cheira a suor e a corda. O Ryuji fica parado. Depois, devagar, coloca a mão na cabeça dela, de leve, como quem confere se ela está inteira.", proxima: "rr_b2" },
    rr_b2: { quem: "eu", texto: "Me leva pra casa. Pela volta grande.", proxima: "rr_b3" },
    rr_b3: { quem: "ryuji", texto: "A volta grande é a minha preferida.", proxima: "r_fim" },
    rr_c1: { quem: "eu", texto: "Ryuji, você olharia pra baixo uma segunda vez? Se fosse pra salvar alguém?", proxima: "rr_c2" },
    rr_c2: { quem: "ryuji", texto: "Olharia. Olharia mil vezes. Vomitaria mil vezes. Mas olharia.", proxima: "rr_c3" },
    rr_c3: { tipo: "narracao", texto: "Ele fala isso sem pensar, sério, e depois percebe que ela não estava falando de escada. Ele fica olhando para ela, embaixo do poste, e não pergunta de quem ela estava falando.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { tipo: "narracao", cenario: "quintal-victor-noite", transicao: "tempo", legenda: "Segunda, 19h", sprite: "victor", texto: "Depois de deixar o Takeo, ela passa pela oficina, a garagem do Victor. Ele está deitado embaixo de uma moto, só as pernas para fora, e o Caramelo dormindo em cima do peito dele.", proxima: "rv_02" },
    rv_02: { quem: "victor", texto: "Gatinha... SN. Eu reconheço o seu tênis. Senta. Eu tenho um boletim especial. Exclusivo. Sem rede de fofoca. Direto da fonte.", proxima: "rv_03" },
    rv_03: { tipo: "narracao", texto: "Ele sai de baixo da moto, deslizando no carrinho, com o Caramelo ainda dormindo em cima. Senta. Tira o pirulito da boca.", proxima: "rv_04" },
    rv_04: { quem: "victor", texto: "Na saída, o líder foi falar com a Serena. No portão. Eu estava perto. Por acaso. Ele falou que já gosta de outra pessoa.", proxima: "rv_05" },
    rv_05: { quem: "victor", texto: "Ela chorou. Mas não com raiva. Chorou de um jeito que eu conheço. O jeito de quem levou o fora mais educado da vida. Eu levei dois. Eu sei.", proxima: "rv_06" },
    rv_06: { tipo: "narracao", texto: "Ele fica olhando para o Caramelo, acariciando a cabeça dele, devagar.", proxima: "rv_07" },
    rv_07: { quem: "victor", texto: "Eu não sei por que eu estou te contando. Talvez porque eu queria que alguém tivesse me contado, quando eu era a Serena. Que não é culpa de ninguém. Que a pessoa só escolheu outra.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. “Você já foi a Serena de alguém, Victor?”", proxima: "rv_a1", pontos: { victor: 3 }, flags: ["Ja_foi_Serena"] },
      { texto: "B. Sentar no chão da garagem do lado dele. Fazer carinho no Caramelo também. Ficar.", proxima: "rv_b1", pontos: { victor: 3 }, flags: ["Ficou_garagem"] },
      { texto: "C. “Amanhã eu vou falar com ela. Não pra brigar. Só pra falar.”", proxima: "rv_c1", pontos: { victor: 2 }, flags: ["Falar_Serena"] }
    ]},
    rv_a1: { quem: "eu", texto: "Você já foi a Serena de alguém, Victor?", proxima: "rv_a2" },
    rv_a2: { tipo: "narracao", texto: "O Victor para de fazer carinho no Caramelo. Olha para ela. O sorriso torto não vem.", proxima: "rv_a3" },
    rv_a3: { quem: "victor", texto: "...Eu estou sendo. Agora. Mas eu sou melhor que ela nisso. Eu não jogo suco em ninguém. Eu só conserto bicicleta.", proxima: "r_fim" },
    rv_b1: { tipo: "narracao", texto: "Ela senta no chão da garagem, do lado dele, encostada na moto desmontada. Faz carinho no Caramelo também. As mãos dos dois se encontram na cabeça do cachorro. Nenhum dos dois tira.", proxima: "rv_b2" },
    rv_b2: { tipo: "narracao", texto: "Eles ficam assim, no chão sujo de graxa, com o cachorro dormindo entre os dois, o rádio da garagem tocando baixinho, e o Victor sem falar nada por quase meia hora. Um recorde absoluto.", proxima: "r_fim" },
    rv_c1: { quem: "eu", texto: "Amanhã eu vou falar com ela. Não pra brigar. Só pra falar.", proxima: "rv_c2" },
    rv_c2: { quem: "victor", texto: "Com a Serena? Depois do suco?", proxima: "rv_c3" },
    rv_c3: { quem: "eu", texto: "Ela gostou dele primeiro. Isso merece pelo menos uma conversa.", proxima: "rv_c4" },
    rv_c4: { tipo: "narracao", texto: "O Victor olha para ela muito tempo. Depois coloca o pirulito de volta na boca e sorri, o sorriso torto, só que mais quieto.", proxima: "rv_c5" },
    rv_c5: { quem: "victor", texto: "É por isso. É por isso que todo mundo olha pra você. Você é a única que dá conversa pra quem jogou suco.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Segunda, 23h", sprite: null, texto: "À noite, no quarto, a camisa roxa de molho num balde no banheiro. Ela deitada no escuro, de olhos abertos.", proxima: "f_02" },
    f_02: { tipo: "pensamento", texto: "Trinta e um dias. Choveu em nove. Ele foi nos nove.", proxima: "f_03" },
    f_03: { tipo: "pensamento", texto: "Uma mulher com pressa. Que me tirou de lá pelo braço. Que nem olhou pra ele. Que fez eu deixar o cavalo branco cair.", proxima: "f_04" },
    f_04: { tipo: "pensamento", texto: "Ele sabe quem era. Ele ia falar. A palavra chegou até a boca dele. E ele engoliu.", proxima: "f_05" },
    f_05: { tipo: "pensamento", texto: "“Se eu falar, você vai embora de novo.”", proxima: "f_06" },
    f_06: { tipo: "pensamento", texto: "Quem era ela? Quem me tirava de algum lugar com tanta pressa quando eu tinha cinco anos?", proxima: "f_07" },
    f_07: { tipo: "narracao", efeito: "flashback", texto: "No escuro, quase dormindo, a voz volta. “Vem, a gente tem que ir. Agora.” E, dessa vez, junto com a voz, vem um cheiro. Um perfume. Doce, forte, de flor. Um cheiro que ela conhece de algum lugar. De muito perto. De muitas vezes.", proxima: "f_08" },
    f_08: { tipo: "pensamento", texto: "Eu conheço esse cheiro.", proxima: "f_09" },
    f_09: { tipo: "pensamento", texto: "Eu conheço esse cheiro, e eu não sei de onde.", proxima: "ep_fim" },

    // Fim do Capítulo 39 (crie a entrada "capitulo39" em dados/capitulos.js).
    ep_fim: { fim: "capitulo39" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 40 (anotações do roteiro)
 *  • O REN, a sós, na escala de limpeza (não foi coincidência): tentou contar tudo. Não conseguiu.
 *    Contou: depois que ela sumiu, ele voltou no mesmo lugar, no mesmo horário, todo dia, com o tabuleiro
 *    dobrado, por um mês inteiro. "Trinta e um dias. Choveu em nove. Eu fui nos nove."
 *    No último dia, uma mulher veio buscar a SN com pressa, pegou pelo braço; ela deixou o cavalo branco cair;
 *    a mulher nem olhou pra ele. Ele descobriu quem era, anos depois. "Ela era..." — parou.
 *    "Se eu falar, você vai embora de novo." (a voz tremeu).
 *    NÃO DISSE: quem era (a TIA, Sora), onde (a praça do balanço), o Takeo, por que ataca a gangue do Kaito.
 *  • FLASHES: os óculos embaçados de chuva, ela desenhando uma carinha na lente, a primeira risada dele.
 *    À noite: um PERFUME doce, forte, de flor, junto com a voz. Ela conhece esse cheiro. (É da tia. Não revelar.)
 *  • O Ren prometeu: "Ninguém encosta na Serena. Você pediu."
 *  • O Ren olhou pro Takeo no corredor: a janela fechando, fria. O Takeo sentiu o mesmo frio da noite em que
 *    apanhou. A SN levou ele em casa pela rua da padaria.
 *  • SERENA: bento de três andares, onigiri de estrela, "cookie verde, que fofo", jogou suco de uva na SN no
 *    vestiário ("Ops. Sem querer."). "Eu gostei dele primeiro. O que você tem?" O Kaito disse "você não precisa".
 *    Rota Kaito / Victor: o Kaito disse pra Serena que já gosta de outra pessoa. Ela chorou.
 *  • RYUJI: cupom da lan "Ryuji + capitã", um mês, para duas pessoas. Aula de resgate em altura (rota).
 *  • BLAKE: "Pra você, bom. Pra ela, ruim." / "Eu fico." Camiseta nova do tamanho certo (rota).
 *  • TAKEO: tira o gesso em duas semanas. Ficou no corredor o tempo todo.
 *  • A lojinha: 23 dias.
 *  • SEGREDOS: o Ren matou o Takeo na primeira linha do tempo · a tia · a SN e o Kaito se conheceram crianças.
 *
 * ESCOLHAS DO CAPÍTULO
 *  0 "Você gosta dele?" · 1 "Cookie verde, que fofo" · 2 Com o Takeo · 3 Com o Blake · 4 O suco
 *  5 O cupom · 6 "Se eu falar, você vai embora de novo" · Rota (1 por rota)
 *
 * FLAGS NOVAS
 *  Gosto_Mio · Nao_sei_Mio · Sem_comentarios · Comeu_os_tres · Guardou_Serena · Bom_dia_Serena
 *  Calendario_Takeo · Dormiu_Takeo · Assina_gesso · Pra_voce_Blake · Banco_de_novo · Um_quarto
 *  Torceu_camisa · Faz_de_novo_Serena · Nao_e_premio · Ryuji_capita · Hoje_lan · Abraco_cupom
 *  Nao_vou_embora · Descubro_sozinha · Ficou_sol · Fez_certo · Termina_frase · Quite_todos
 *  Tambem_senti · Busco_Takeo · Nunca_escuro · Camiseta_Blake · Altura_de_cor · Ia_falar_Blake
 *  Escada_doze · Volta_grande_39 · Segunda_vez · Ja_foi_Serena · Ficou_garagem · Falar_Serena
 */