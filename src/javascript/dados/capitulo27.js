/*
 * =====================================================================
 *  CAPÍTULO 27 — Cinco convites
 *  Terça e quarta-feira, depois do Capítulo 26.
 * =====================================================================
 *
 *  ★ SISTEMA DE ROTAS (vale a partir deste capítulo) ★
 *    Neste capítulo o jogador escolhe a ROTA. A escolha marca UMA destas flags:
 *        Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor
 *    • A história principal (Ren, Sakuma, Sayuri, viagem no tempo) é IGUAL para todas as rotas.
 *    • A partir daqui, todo capítulo tem pelo menos um bloco "ROTA", com
 *      caminhos: [ { flag: "Rota_Kaito", ... }, { flag: "Rota_Takeo", ... }, ... ]
 *      onde só o menino da rota tem as cenas românticas. Os outros continuam amigos.
 *    • Ninguém fica sem história: cada rota tem seu próprio arco.
 *
 *  O QUE ACONTECE
 *    • Terça: a SN encontra a Sayuri escondido. A ordem do Sakuma: colocar um celular "roubado"
 *      na mochila da Hana e chamar a coordenação. A Sayuri não vai fazer. A SN tem um plano.
 *    • Quarta: cinco convites para a mesma tarde. A ESCOLHA DE ROTA.
 *        Kaito  → aprender a pilotar a moto no estacionamento do mercado.
 *        Takeo  → colher caqui no quintal da avó.
 *        Blake  → aniversário de sete anos dos gêmeos, Noah e Theo.
 *        Ryuji  → dia aberto do corpo de bombeiros: simulado da prova física.
 *        Victor → a primeira moto consertada na "oficina" do quintal. E a feijoada da mãe.
 *    • Quarta à noite (todas as rotas): a Sayuri manda o dia. Sexta.
 *
 *  TOM
 *    • Leve, sem nhenhenhém. Romance devagar, mas cada rota ganha um momento só seu.
 *    • Nada de gangue dentro da escola. O Ren não aparece.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Sayuri, Kaito, Takeo, Blake, Ryuji, Victor, Mio, Hana.
 *    Sem nome / rótulo: Tio do Kaito, Avó do Takeo, Noah, Theo, Mãe do Blake, Bombeiro, Mãe do Victor.
 *
 *  CENÁRIOS
 *    Bicicletário → "bicicletario" · Sala → "sala-de-aula"
 *    Estacionamento do mercado → "beco-mercado" · Quintal da avó do Takeo → "casa-takeo"
 *    Casa do Blake → "casa-blake" / "cozinha-blake" (provisório) · Quartel dos bombeiros → "patio-fundos" (provisório)
 *    Quintal do Victor → "beco-mercado" · Quarto da SN → "quarto-sn-noite"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Ofereceu_ajuda_Sayuri, Elastico_Sayuri.
 *
 *  Crie a entrada "capitulo27" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo27", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — O BICICLETÁRIO DE NOVO =================== */
    // Cenário: bicicletário atrás da escola, terça (usa "saida-colegio"). Música: baixo grave, firme.
    c1_01: { roupa: null, tipo: "narracao", cenario: "bicicletario", transicao: "tempo", legenda: "Terça — Cena 1", sprite: null, texto: "Terça, depois da aula. Ela respondeu a Sayuri de manhã com uma palavra só: “Bicicletário.” A Sayuri respondeu com outra: “Quatro.” Quatro da tarde. Ninguém passa no bicicletário às quatro.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", sprite: "sayuri", texto: "A Sayuri está agachada do lado da bicicleta rosa. Mexendo no cadeado que nunca abre. Ela não está tentando abrir. É só pra ter o que fazer com as mãos.", proxima: "c1_cam1" },
    c1_cam1: { caminhos: [
      { flag: "Elastico_Sayuri", proxima: "c1_elastico" }
    ], proxima: "c1_03" },
    c1_elastico: { tipo: "narracao", texto: "No pulso dela, por cima da manga, o elástico preto. O da SN. Ela ainda está usando.", proxima: "c1_03" },
    c1_03: { quem: "eu", texto: "O que eles querem?", proxima: "c1_04" },
    c1_04: { tipo: "narracao", texto: "A Sayuri não enrola. Ela também cansou.", proxima: "c1_05" },
    c1_05: { quem: "sayuri", sprite: "sayuri", texto: "Um celular. Roubado. Eles me entregam na quinta. Eu coloco na mochila da Hana na sexta, no intervalo. Depois eu vou na coordenação e digo que vi ela pegando de alguém.", proxima: "c1_06" },
    c1_06: { quem: "sayuri", sprite: "sayuri", texto: "A Hana. Que nunca fez nada de errado na vida. Que anota tudo. Eles sabem que ela é sua amiga. Eles querem que você veja ela sendo levada pra sala do diretor.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", texto: "A mão da SN fecha. Ela abre de novo. Respira. Raiva não ajuda agora. Plano ajuda.", proxima: "c1_08" },
    c1_08: { quem: "sayuri", sprite: "sayuri", texto: "Eu não vou fazer. Eu já te falei. Mas se eu não fizer, eles cobram do meu pai. E depois do meu irmão.", proxima: "c1_09" },
    c1_09: { quem: "eu", texto: "Então você faz.", proxima: "c1_10" },
    c1_10: { tipo: "narracao", texto: "A Sayuri levanta a cabeça. Rápido. Os olhos arregalados.", proxima: "c1_11" },
    c1_11: { quem: "eu", texto: "Você pega o celular na quinta. Você diz pra eles que vai fazer. Eles acham que ganharam. E na sexta você me entrega o celular, não pra Hana.", proxima: "c1_12" },
    c1_12: { quem: "sayuri", sprite: "sayuri", texto: "E aí? O que você faz com um celular roubado?", proxima: "c1_13" },
    c1_13: { quem: "eu", texto: "Eu devolvo pro dono. Celular roubado tem dono. E o dono vai querer saber quem deu pra você.", proxima: "c1_cam2" },
    c1_cam2: { caminhos: [
      { flag: "Ofereceu_ajuda_Sayuri", proxima: "c1_ajuda" }
    ], proxima: "c1_esc1" },
    c1_ajuda: { quem: "sayuri", sprite: "sayuri", texto: "...Você disse no banheiro, lá atrás. Que se um dia eu quisesse dizer não, você ajudava. Eu achei que você estava sendo boazinha. Você estava falando sério.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — O plano com a Sayuri
    c1_esc1: { escolhas: [
      { texto: "A. “Ninguém fica sabendo. Nem a Hana. Nem os meninos. Só eu e você.”", proxima: "c1_1a_1", pontos: { desvio: 1 }, flags: ["Plano_so_duas"] },
      { texto: "B. “A Hana precisa saber. Ela anota tudo. Ela vai querer anotar isso também.”", proxima: "c1_1b_1", pontos: { hana: 2 }, flags: ["Plano_com_Hana"] },
      { texto: "C. “Me fala o nome do homem que vai te entregar o celular. E o lugar.”", proxima: "c1_1c_1", pontos: { desvio: 1 }, flags: ["Plano_lugar_entrega"] }
    ]},
    c1_1a_1: { quem: "sayuri", sprite: "sayuri", texto: "Só nós duas. Que dupla estranha.", proxima: "c1_1a_2" },
    c1_1a_2: { quem: "eu", texto: "A mais estranha da escola.", proxima: "c1_14" },
    c1_1b_1: { tipo: "narracao", texto: "A Sayuri morde o lábio. Pensa. A Hana. A pessoa que ela ia prejudicar.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "sayuri", sprite: "sayuri", texto: "...Tá. Mas você conta. Eu não consigo olhar pra ela e dizer isso.", proxima: "c1_1b_3" },
    c1_1b_3: { quem: "eu", texto: "Eu conto. E aposto que ela vai fazer uma planilha.", proxima: "c1_14" },
    c1_1c_1: { quem: "sayuri", sprite: "sayuri", texto: "O de anel. Ele usa anel em todos os dedos. Na quinta, sete da noite, no ponto de ônibus da frente da farmácia.", proxima: "c1_1c_2" },
    c1_1c_2: { tipo: "pensamento", texto: "O de anel. O que correu pro carro sem fechar a porta. Ele vai lembrar de mim.", proxima: "c1_1c_3" },
    c1_1c_3: { tipo: "pensamento", texto: "Ótimo.", proxima: "c1_14" },

    // (todas as opções continuam aqui)
    c1_14: { tipo: "narracao", texto: "A Sayuri levanta. Pega a bicicleta. O cadeado continua fechado. Ela olha para ele. Para a SN.", proxima: "c1_15" },
    c1_15: { quem: "sayuri", sprite: "sayuri", texto: "0-3-1-4. Puxa enquanto gira.", proxima: "c1_16" },
    c1_16: { tipo: "narracao", texto: "A SN abre o cadeado. Como da primeira vez. A Sayuri vai embora pedalando. Sem olhar para trás. Mas dessa vez, a SN vê, ela está com as costas retas.", proxima: "c2_01" },

    /* =================== CENA 2 — CINCO CONVITES =================== */
    // Cenário: sala de aula / corredor, quarta. Música: pop leve.
    c2_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Quarta — Cena 2", sprite: null, texto: "Quarta. Na última aula, o professor de geografia avisa: amanhã não tem aula de manhã, reunião de professores. Meia sala comemora. A outra meia já sabia, porque a Hana avisou no grupo ontem à noite.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", texto: "Ela está guardando o caderno quando o celular vibra. Uma vez. Duas. Três. Quatro. Cinco. Cinco mensagens. Cinco pessoas diferentes. Em dois minutos.", proxima: "c2_03" },
    c2_03: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "O estacionamento do mercado fica vazio às quatro. Você quer aprender a pilotar? Eu ensino.", proxima: "c2_04" },
    c2_04: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "A minha avó pediu pra eu perguntar se você pode ajudar a colher os caquis hoje. A árvore está cheia. Eu tenho medo de escada. Ela sabe. Por isso pediu você.", proxima: "c2_05" },
    c2_05: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Os gêmeos fazem sete anos hoje. Eles pediram você na festa. Eu disse que não. Eles choraram. Os dois. Ao mesmo tempo.", proxima: "c2_06" },
    c2_06: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "DIA ABERTO NO QUARTEL DOS BOMBEIROS HOJE. TEM SIMULADO DA PROVA FÍSICA. EU VOU TENTAR. PRECISO DE ALGUÉM COM CRONÔMETRO E COM CORAGEM DE GRITAR MEU NOME.", proxima: "c2_07" },
    c2_07: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Gatinha. A primeira moto da oficina do quintal fica pronta hoje. A do vizinho. E a minha mãe fez a feijoada. Ela disse que se você não vier, ela vai na sua casa entregar.", proxima: "c2_08" },
    c2_08: { tipo: "narracao", texto: "Ela fica olhando para as cinco mensagens. Empilhadas na tela. Todas para a mesma tarde.", proxima: "c2_09" },
    c2_09: { tipo: "pensamento", texto: "Na outra vida, ninguém me chamava pra nada. Agora são cinco ao mesmo tempo. Eu vou ter que escolher. E escolher é bom. Escolher é estar viva.", proxima: "c2_esc_rota" },

    // ▶ ESCOLHA DE ROTA — Para onde a SN vai hoje
    c2_esc_rota: { sugerir: true, escolhas: [
      { texto: "Kaito — Aprender a pilotar a moto.", proxima: "rk_01", pontos: { kaito: 3 }, flags: ["Rota_Kaito"], personagem: "kaito" },
      { texto: "Takeo — Colher caqui com a avó dele.", proxima: "rt_01", pontos: { takeo: 3 }, flags: ["Rota_Takeo"], personagem: "takeo" },
      { texto: "Blake — O aniversário dos gêmeos.", proxima: "rb_01", pontos: { blake: 3 }, flags: ["Rota_Blake"], personagem: "blake" },
      { texto: "Ryuji — O simulado no quartel dos bombeiros.", proxima: "rr_01", pontos: { ryuji: 3 }, flags: ["Rota_Ryuji"], personagem: "ryuji" },
      { texto: "Victor — A oficina do quintal e a feijoada.", proxima: "rv_01", pontos: { victor: 3 }, flags: ["Rota_Victor"], personagem: "victor" }
    ]},

    /* =================== ROTA KAITO — O ESTACIONAMENTO =================== */
    // Cenário: estacionamento dos fundos do mercado (usa "beco-mercado"). Música: rock leve.
    rk_01: { roupa: "fora", tipo: "narracao", cenario: "beco-mercado", transicao: "tempo", legenda: "Rota Kaito — O estacionamento", sprite: "kaito", texto: "Quatro da tarde. O estacionamento dos fundos do mercado está vazio. Só caixote empilhado num canto e uma fileira de cones laranja que o Kaito montou sozinho, em zigue-zague.", proxima: "rk_02" },
    rk_02: { quem: "kaito", sprite: "kaito", texto: "Regra número um: ela é pesada. Ela vai querer cair pro lado. Você não deixa.", proxima: "rk_03" },
    rk_03: { quem: "eu", texto: "Pesada pra quem?", proxima: "rk_04" },
    rk_04: { tipo: "narracao", texto: "Ele olha para ela. Lembra da barra de ferro. Fecha a boca.", proxima: "rk_05" },
    rk_05: { quem: "kaito", sprite: "kaito", texto: "...Regra número um cancelada. Regra número dois: embreagem devagar. Devagar mesmo. Ela foi montada com peça de ferro-velho. Ela é sensível.", proxima: "rk_06" },
    rk_06: { tipo: "narracao", texto: "Ela sobe na frente. Ele fica atrás, em pé do lado, com as mãos em cima das dela no guidão. Mostrando. Embreagem. Marcha. Acelerador. Ele está tão perto que ela sente ele respirar no capacete.", proxima: "rk_07" },
    rk_07: { quem: "kaito", sprite: "kaito", texto: "Agora solta a embreagem. Devagar.", proxima: "rk_08" },
    rk_08: { tipo: "narracao", efeito: "tremor", texto: "Ela solta. Não devagar. A moto pula. Literalmente. A roda da frente sai do chão. O Kaito, que estava segurando o guidão, sai correndo do lado da moto gritando, pendurado.", proxima: "rk_09" },
    rk_09: { quem: "kaito", sprite: "kaito", texto: "SOLTA O ACELERADOR! SOLTA! NÃO É O FREIO! ISSO É A BUZINA!", proxima: "rk_10" },
    rk_10: { tipo: "narracao", texto: "A moto passa reto pelos cinco cones. Derruba todos. Para a dez centímetros da pilha de caixote. A buzina continua tocando. Ela tira a mão da buzina.", proxima: "rk_11" },
    rk_11: { tipo: "narracao", sprite: "tio_kaito", texto: "Silêncio. Do canto do estacionamento, o tio do Kaito, de avental, com um cigarro apagado na boca, aplaude devagar.", proxima: "rk_12" },
    rk_12: { quem: "tio_kaito", sprite: "tio_kaito", texto: "Ele fez igual na primeira vez. Só que ele bateu nos caixotes. Tinha tomate. Foi um massacre.", proxima: "rk_13" },
    rk_13: { quem: "kaito", sprite: "kaito", texto: "Tio!", proxima: "rk_14" },
    rk_14: { tipo: "narracao", sprite: "kaito", transicao: "tempo", texto: "Na terceira tentativa, ela pega o jeito. Na quinta, ela faz o zigue-zague inteiro sem derrubar cone. Na sétima, ela faz rápido demais e o Kaito para de respirar na curva.", proxima: "rk_15" },
    rk_15: { tipo: "narracao", texto: "Quando ela para do lado dele e tira o capacete, ele está com as duas mãos na cabeça. Depois ri. Sem conseguir parar. Igual na calçada do boné.", proxima: "rk_16" },
    rk_16: { quem: "kaito", sprite: "kaito", texto: "Você aprende rápido demais. Isso é irritante.", proxima: "rk_17" },
    rk_17: { quem: "eu", texto: "Você que ensina bem.", proxima: "rk_18" },
    rk_18: { tipo: "narracao", texto: "Ele para de rir. Olha para a moto. Depois para ela. Passa a mão no tanque vermelho-escuro.", proxima: "rk_19" },
    rk_19: { quem: "kaito", sprite: "kaito", texto: "Ninguém pilotou ela além de mim. Nem o Blake. Nem o tio. Eu montei ela peça por peça desde os catorze. Você é a primeira.", proxima: "rk_esc" },

    // ▶ ESCOLHA — Rota Kaito
    rk_esc: { escolhas: [
      { texto: "A. “Então ela é um pouco minha agora.”", proxima: "rk_a1", pontos: { kaito: 3 }, flags: ["Moto_um_pouco_minha"] },
      { texto: "B. “Por que eu?”", proxima: "rk_b1", pontos: { kaito: 3 }, flags: ["Por_que_eu_Kaito"] },
      { texto: "C. Devolver a chave na mão dele e fechar os dedos dele em volta dela.", proxima: "rk_c1", pontos: { kaito: 2 }, flags: ["Chave_Kaito"] }
    ]},
    rk_a1: { quem: "kaito", sprite: "kaito", texto: "Um pouco. O pneu de trás.", proxima: "rk_a2" },
    rk_a2: { quem: "eu", texto: "Só o pneu de trás?", proxima: "rk_a3" },
    rk_a3: { quem: "kaito", sprite: "kaito", texto: "Por enquanto.", proxima: "rk_a4" },
    rk_a4: { tipo: "narracao", texto: "Ele fala isso olhando para a moto, não para ela. Mas a orelha está vermelha. A SN já sabe ler a orelha dele melhor que qualquer frase.", proxima: "rk_20" },
    rk_b1: { tipo: "narracao", texto: "Ele não responde rápido. Ele mexe na chave pendurada no guidão. Tira. Coloca de volta.", proxima: "rk_b2" },
    rk_b2: { quem: "kaito", sprite: "kaito", texto: "Porque você não precisa dela. Você não precisa de moto, de capacete, de mim na porta às sete. Você consegue sozinha. Eu vi.", proxima: "rk_b3" },
    rk_b3: { quem: "kaito", sprite: "kaito", texto: "E mesmo assim você deixa eu levar você. Ninguém nunca deixou eu cuidar de nada. Você deixa.", proxima: "rk_b4" },
    rk_b4: { tipo: "pensamento", texto: "Ele disse mais em duas frases do que disse no mês inteiro.", proxima: "rk_20" },
    rk_c1: { tipo: "narracao", texto: "Ela tira a chave. Coloca na mão dele. Fecha os dedos dele em volta, com a mão dela por cima. Fica assim um segundo.", proxima: "rk_c2" },
    rk_c2: { quem: "eu", texto: "Ela é sua. Você montou. Eu só piloto quando você deixar.", proxima: "rk_c3" },
    rk_c3: { tipo: "narracao", texto: "Ele olha para as duas mãos. A dele embaixo. A dela em cima. A chave no meio. Ele não puxa. Ela também não. O tio, do canto, finge que está olhando o céu.", proxima: "rk_20" },
    rk_20: { tipo: "narracao", sprite: null, texto: "No fim da tarde, eles arrumam os cones juntos. O tio traz dois lámen. Os três comem sentados nos caixotes, olhando o sol se pôr atrás do estacionamento.", proxima: "fim_01" },

    /* =================== ROTA TAKEO — O CAQUIZEIRO =================== */
    // Cenário: quintal da casa da avó do Takeo (usa "apartamento"). Música: violão, tarde quente.
    rt_01: { roupa: "fora", tipo: "narracao", cenario: "casa-takeo", transicao: "tempo", legenda: "Rota Takeo — O caquizeiro", sprite: "takeo", texto: "Atrás da casa do portão azul tem um quintal que a SN não conhecia. Pequeno, de terra batida, com um varal, um tanque e, no meio, um caquizeiro velho, torto, carregado de fruta laranja.", proxima: "rt_02" },
    rt_02: { quem: "avo_takeo", sprite: "avo_takeo", texto: "Menina da viga! Sobe lá. O Takeo segura a escada. Ele tem medo de altura desde que caiu do balanço com cinco anos. Do balanço! Da altura de uma cadeira!", proxima: "rt_03" },
    rt_03: { quem: "takeo", sprite: "takeo", texto: "Vó, eu tinha cinco anos e o chão era de pedra!", proxima: "rt_04" },
    rt_04: { tipo: "narracao", texto: "Ela sobe a escada. Ele segura embaixo, com as duas mãos, com uma força que não precisa, olhando para cima com a cara de quem está assistindo um filme de terror.", proxima: "rt_05" },
    rt_05: { quem: "takeo", sprite: "takeo", texto: "Cuidado no terceiro degrau. Ele balança. E no quinto. E no sexto também, na verdade.", proxima: "rt_06" },
    rt_06: { tipo: "narracao", texto: "Lá de cima, ela joga os caquis um por um. Ele pega. Erra metade. Os caquis caem na cabeça dele, no ombro, um explode no pé. A avó, sentada num banquinho com uma bacia, ri tanto que derruba a bacia.", proxima: "rt_07" },
    rt_07: { quem: "avo_takeo", sprite: "avo_takeo", texto: "Ele pegava melhor quando tinha seis anos! Você jogava os caquis assim e ele pegava todos!", proxima: "rt_08" },
    rt_08: { quem: "takeo", sprite: "takeo", texto: "Eu tinha óculos novos aos seis!", proxima: "rt_09" },
    rt_09: { tipo: "narracao", transicao: "tempo", texto: "Quando a árvore está pela metade, a avó entra para fazer chá. O Takeo sobe dois degraus da escada. Só dois. Fica lá, agarrado, branco, do lado da perna dela.", proxima: "rt_10" },
    rt_10: { quem: "takeo", sprite: "takeo", texto: "Eu queria ver a vista daqui. Você vê a vista daqui o tempo todo. Eu nunca vejo.", proxima: "rt_11" },
    rt_11: { tipo: "narracao", texto: "Do alto da escada, dá para ver o telhado da vizinhança. As antenas. A praça do balanço, lá longe, pequenininha, com o sol batendo.", proxima: "rt_12" },
    rt_12: { quem: "takeo", sprite: "takeo", texto: "Olha. Dá pra ver o nosso balanço daqui.", proxima: "rt_13" },
    rt_13: { quem: "takeo", sprite: "takeo", texto: "Eu amarrei uma corda no galho de cima. Semana passada. Escondido da vó. Ela não sabe. Ainda não tem assento. Eu vou fazer um de madeira.", proxima: "rt_14" },
    rt_14: { quem: "eu", texto: "Um balanço? No caquizeiro?", proxima: "rt_15" },
    rt_15: { quem: "takeo", sprite: "takeo", texto: "Pra quando a gente tiver setenta anos. A praça vai ser longe demais pra ir andando. Aí a gente balança aqui.", proxima: "rt_16" },
    rt_16: { tipo: "narracao", texto: "Ele fala isso sem gaguejar. Agarrado na escada, branco de medo, olhando direto para ela. O Takeo mais corajoso do mundo, a dois degraus do chão.", proxima: "rt_esc" },

    // ▶ ESCOLHA — Rota Takeo
    rt_esc: { escolhas: [
      { texto: "A. “Então eu faço o assento. Você não sabe usar serrote.”", proxima: "rt_a1", pontos: { takeo: 3 }, flags: ["Assento_balanco"] },
      { texto: "B. “Setenta anos é muito tempo, Takeo.” “Eu sou bom em esperar.” Sorrir.", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["Setenta_anos_Takeo"] },
      { texto: "C. Descer um degrau e ficar no mesmo degrau que ele. Pra ele não ficar sozinho lá em cima.", proxima: "rt_c1", pontos: { takeo: 3 }, flags: ["Degrau_Takeo"] }
    ]},
    rt_a1: { quem: "takeo", sprite: "takeo", texto: "Eu sei usar serrote. Eu só não sei usar serrote sem me cortar.", proxima: "rt_a2" },
    rt_a2: { quem: "eu", texto: "Então eu serro e você lixa.", proxima: "rt_a3" },
    rt_a3: { quem: "takeo", sprite: "takeo", texto: "Combinado. E o balanço vai ter o nosso nome entalhado. Torto. Do lado de baixo, pra vó não ver.", proxima: "rt_17" },
    rt_b1: { tipo: "narracao", texto: "Ela fala “setenta anos é muito tempo”. Ele responde antes dela terminar: “Eu sou bom em esperar.” E os dois falam juntos, ao mesmo tempo, a mesma frase. E riem. A escada balança. Ele grita. Ela segura a escada com uma mão só.", proxima: "rt_17" },
    rt_c1: { tipo: "narracao", texto: "Ela desce um degrau. Fica no mesmo degrau dele. Apertados. A escada range. Ele para de tremer.", proxima: "rt_c2" },
    rt_c2: { quem: "takeo", sprite: "takeo", texto: "...Assim dá. Assim não dá medo.", proxima: "rt_c3" },
    rt_c3: { tipo: "narracao", texto: "Eles ficam lá, os dois no mesmo degrau, olhando a praça longe, até a avó chamar para o chá. Nenhum dos dois quer descer primeiro.", proxima: "rt_17" },
    rt_17: { tipo: "narracao", sprite: null, texto: "No fim da tarde, a avó embrulha seis caquis num pano de prato e coloca na mão dela. Um deles está amassado. É o que caiu na cabeça do Takeo. A avó diz que é o mais doce.", proxima: "fim_01" },

    /* =================== ROTA BLAKE — SETE ANOS =================== */
    // Cenário: casa do Blake (usa "apartamento"). Música: festa infantil, depois piano calmo.
    rb_01: { roupa: "fora", tipo: "narracao", cenario: "casa-blake", transicao: "tempo", legenda: "Rota Blake — Sete anos", sprite: null, texto: "A casa do Blake é pequena e está explodindo. Bexiga no teto. Bexiga no chão. Doze crianças de sete anos correndo em volta de uma mesa com um bolo de chocolate em forma de dinossauro.", proxima: "rb_02" },
    rb_02: { tipo: "narracao", texto: "Antes que ela consiga tirar o tênis, dois meninos idênticos, de chapeuzinho de papel, batem nas pernas dela ao mesmo tempo.", proxima: "rb_03" },
    rb_03: { quem: "noah", sprite: "noah", texto: "Ela veio! A moça do bloquinho! O Blake disse que você não vinha!", proxima: "rb_04" },
    rb_04: { quem: "theo", sprite: "theo", texto: "Ele mentiu! Ele mente pra gente! Ele disse que dinossauro não existe mais!", proxima: "rb_05" },
    rb_05: { tipo: "narracao", sprite: "blake", texto: "O Blake está na porta da cozinha. De avental de florzinha da mãe. Segurando uma faca de bolo. Com uma bexiga presa no cabelo que ninguém avisou.", proxima: "rb_06" },
    rb_06: { quem: "blake", sprite: "blake", texto: "...Você veio.", proxima: "rb_07" },
    rb_07: { quem: "eu", texto: "Eles choraram, você disse. Os dois. Ao mesmo tempo.", proxima: "rb_08" },
    rb_08: { quem: "blake", sprite: "blake", texto: "Choraram. Foi horrível. É em estéreo.", proxima: "rb_09" },
    rb_09: { tipo: "narracao", transicao: "tempo", texto: "A festa é um caos. A SN vê um Blake que ela nunca viu. Ele carrega três crianças ao mesmo tempo nas costas, de cavalinho. Ele faz voz de dinossauro. Uma voz grave, ridícula, que faz as doze crianças gritarem e correrem.", proxima: "rb_10" },
    rb_10: { tipo: "pensamento", texto: "Esse é o Blake? O que fala uma palavra por semana? Ele está rugindo. Na frente de todo mundo. Sem vergonha nenhuma.", proxima: "rb_11" },
    rb_11: { quem: "theo", sprite: "theo", texto: "Agora a brincadeira da menina do boné! Você é a menina do boné! Toma o boné! O Blake é o vilão!", proxima: "rb_12" },
    rb_12: { tipo: "narracao", texto: "O Theo coloca na cabeça dela um boné preto de brinquedo, de papelão. E entrega uma barra de espuma de piscina. O Blake se ajoelha no chão da sala, com os braços levantados, fazendo cara de malvado.", proxima: "rb_13" },
    rb_13: { quem: "noah", sprite: "noah", texto: "Agora você quebra a barra no meio! Igual ela fez!", proxima: "rb_14" },
    rb_14: { tipo: "pensamento", texto: "Isso é muito, muito irônico.", proxima: "rb_15" },
    rb_15: { tipo: "narracao", texto: "Ela segura a barra de espuma com as duas mãos. Faz força de mentira. E dobra. As doze crianças gritam. O Blake cai de costas no chão, morrendo de um jeito muito dramático, com a língua para fora.", proxima: "rb_16" },
    rb_16: { tipo: "narracao", cenario: "cozinha-blake", transicao: "tempo", sprite: "blake", texto: "Depois do bolo, quando as crianças estão vendo desenho na sala, o Blake lava a louça. Ela seca. A janela da cozinha dá para um muro. O barulho do desenho vem baixinho da sala.", proxima: "rb_17" },
    rb_17: { quem: "blake", sprite: "blake", texto: "Obrigado. Por vir. Eles falaram de você a semana inteira.", proxima: "rb_18" },
    rb_18: { quem: "eu", texto: "Eu não sabia que você fazia voz de dinossauro.", proxima: "rb_19" },
    rb_19: { quem: "blake", sprite: "blake", texto: "Só pra eles. Ninguém mais.", proxima: "rb_20" },
    rb_20: { tipo: "narracao", texto: "Ele passa um prato para ela. Ela seca. Ele passa outro. Os dedos encostam. Ele não puxa rápido. Ela também não.", proxima: "rb_21" },
    rb_21: { quem: "blake", sprite: "blake", texto: "Desde o festival...", proxima: "rb_22" },
    rb_22: { tipo: "narracao", texto: "Ele para. Olha para o prato na mão. A água do tanque escorrendo.", proxima: "rb_23" },
    rb_23: { quem: "blake", sprite: "blake", texto: "...Nada. Esquece.", proxima: "rb_esc" },

    // ▶ ESCOLHA — Rota Blake
    rb_esc: { escolhas: [
      { texto: "A. “Termina a frase, Blake.”", proxima: "rb_a1", pontos: { blake: 3 }, flags: ["Termina_frase_Blake"] },
      { texto: "B. Não insistir. Só tirar a bexiga presa no cabelo dele.", proxima: "rb_b1", pontos: { blake: 3 }, flags: ["Bexiga_Blake"] },
      { texto: "C. “Desde o festival eu também penso em uma coisa. Mas eu também não vou falar agora.”", proxima: "rb_c1", pontos: { blake: 2 }, flags: ["Tambem_nao_falo_Blake"] }
    ]},
    rb_a1: { tipo: "narracao", texto: "Ele fica quieto. Muito tempo. A torneira continua aberta.", proxima: "rb_a2" },
    rb_a2: { quem: "blake", sprite: "blake", texto: "Desde o festival, quando você apareceu atrás do palco, do nada, eu fico pensando em por que você estava lá. Por que você sabia.", proxima: "rb_a3" },
    rb_a3: { quem: "blake", sprite: "blake", texto: "E fico pensando que eu queria que você estivesse lá de novo. Em qualquer lugar. Não por causa de briga.", proxima: "rb_a4" },
    rb_a4: { tipo: "narracao", texto: "Ele fecha a torneira. Não olha para ela. Pega outro prato que já está limpo e lava de novo.", proxima: "rb_24" },
    rb_b1: { tipo: "narracao", texto: "Ela levanta a mão. Ele fica parado. Ela tira a bexiga do cabelo dele. Uma bexiga verde, pequena, presa numa mecha.", proxima: "rb_b2" },
    rb_b2: { quem: "blake", sprite: "blake", texto: "...Desde quando isso estava aí?", proxima: "rb_b3" },
    rb_b3: { quem: "eu", texto: "Desde que eu cheguei.", proxima: "rb_b4" },
    rb_b4: { tipo: "narracao", texto: "Ele olha para ela. E ri. De verdade. Alto. O riso do Blake é grave igual a voz de dinossauro. Da sala, os gêmeos gritam “O BLAKE TÁ RINDO!” como quem anuncia um eclipse.", proxima: "rb_24" },
    rb_c1: { tipo: "narracao", texto: "Ele vira a cabeça. Olha para ela. Pela primeira vez na conversa.", proxima: "rb_c2" },
    rb_c2: { quem: "blake", sprite: "blake", texto: "Então a gente fica assim. Os dois sem falar.", proxima: "rb_c3" },
    rb_c3: { quem: "eu", texto: "Você é bom nisso.", proxima: "rb_c4" },
    rb_c4: { quem: "blake", sprite: "blake", texto: "Você está ficando boa também.", proxima: "rb_24" },
    rb_24: { tipo: "narracao", sprite: null, texto: "Na saída, a mãe do Blake embrulha dois pedaços de bolo de dinossauro para ela. O Noah e o Theo dão tchau da janela. Usando o boné de papelão. Os dois ao mesmo tempo. Em estéreo.", proxima: "fim_01" },

    /* =================== ROTA RYUJI — O QUARTEL =================== */
    // Cenário: pátio do quartel dos bombeiros (usa "patio-fundos"). Música: rock, depois piano.
    rr_01: { roupa: "fora", tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Rota Ryuji — O quartel", sprite: "ryuji", texto: "O pátio do quartel dos bombeiros está cheio de gente. Crianças subindo no caminhão vermelho. Um bombeiro de bigode distribuindo adesivo. E, no fundo, uma torre de treino de quatro andares, com uma escada de ferro do lado de fora.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", sprite: "ryuji", texto: "O simulado é assim: subir os quatro andares da torre carregando um boneco de oitenta quilos. Descer. Em menos de quatro minutos. Quem faz em menos de quatro, passa.", proxima: "rr_03" },
    rr_03: { quem: "eu", texto: "E você já tentou?", proxima: "rr_04" },
    rr_04: { quem: "ryuji", sprite: "ryuji", texto: "Ano passado. Escondido. Eu fiz em cinco e meio. E vomitei na escada.", proxima: "rr_05" },
    rr_05: { tipo: "narracao", texto: "Ele fala isso sem piada. Olhando para a torre. A faixa na testa. O tênis de corrida velho, com a sola descolando de um lado.", proxima: "rr_06" },
    rr_06: { quem: "desconhecido", rotulo: "Bombeiro", texto: "Próximo! Você de faixa! Vai?", proxima: "rr_07" },
    rr_07: { quem: "ryuji", sprite: "ryuji", texto: "Vou.", proxima: "rr_08" },
    rr_08: { tipo: "narracao", texto: "Ele coloca o boneco nas costas. Oitenta quilos de lona e areia. As pernas dobram. Ele firma. Olha para ela.", proxima: "rr_09" },
    rr_09: { quem: "ryuji", sprite: "ryuji", texto: "Cronômetro. E grita o meu nome. Alto. Com função.", proxima: "rr_10" },
    rr_10: { tipo: "narracao", transicao: "tempo", efeito: "tremor", texto: "Ele sobe. Primeiro andar rápido. Segundo andar mais devagar. No terceiro, ele para. Encosta na grade. O boneco escorrega. A SN olha o cronômetro. Dois minutos e quarenta.", proxima: "rr_esc" },

    // ▶ ESCOLHA — Rota Ryuji
    rr_esc: { escolhas: [
      { texto: "A. Gritar o nome dele. O mais alto que já gritou na vida.", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Gritou_Ryuji"] },
      { texto: "B. Gritar: “VOCÊ TIRA AS PESSOAS DO ARMÁRIO, RYUJI! TIRA O BONECO DESSA TORRE!”", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Armario_torre"] },
      { texto: "C. Gritar a contagem. Cada segundo. Igual um jogo. “MINUTO TRÊS! VAI QUE DÁ!”", proxima: "rr_c1", pontos: { ryuji: 2 }, flags: ["Contagem_Ryuji"] }
    ]},
    rr_a1: { quem: "eu", texto: "RYUUUUUJIIIII!", proxima: "rr_a2" },
    rr_a2: { tipo: "narracao", texto: "O pátio inteiro vira. As crianças no caminhão. O bombeiro de bigode. Um cachorro do outro lado da rua. Lá em cima, o Ryuji levanta a cabeça. E ri. E sobe.", proxima: "rr_11" },
    rr_b1: { tipo: "narracao", texto: "Lá em cima, ele para. Ouve. A palavra “armário” no meio de um pátio cheio de gente. Ninguém entende. Só ele.", proxima: "rr_b2" },
    rr_b2: { tipo: "narracao", texto: "Ele arruma o boneco nas costas. E sobe. Sem parar. Como se alguém tivesse aberto uma porta dentro dele.", proxima: "rr_11" },
    rr_c1: { tipo: "narracao", texto: "Ela grita os segundos. Igual na lan, igual na partida perdida. “Três e dez! Três e quinze!” O Ryuji escuta. E corre, porque ele nunca deixou uma partida acabar sem tentar.", proxima: "rr_11" },
    rr_11: { tipo: "narracao", texto: "Ele chega no quarto andar. Bate a mão no sino de treino. Desce. Os joelhos tremendo. O boneco quicando nas costas. Pula os dois últimos degraus. Cai de joelhos no chão do pátio com o boneco em cima.", proxima: "rr_12" },
    rr_12: { tipo: "narracao", efeito: "eco", texto: "Ela para o cronômetro. Três minutos e cinquenta e oito.", proxima: "rr_13" },
    rr_13: { quem: "desconhecido", rotulo: "Bombeiro", texto: "Três e cinquenta e oito. Passou, moleque. Com dois segundos de sobra. Volta daqui a dois anos com o documento. A gente vai lembrar de você.", proxima: "rr_14" },
    rr_14: { tipo: "narracao", texto: "O Ryuji não levanta. Ele fica sentado no chão, embaixo do boneco, respirando. Ela corre até ele. Tira o boneco de cima dele com uma mão só. O bombeiro de bigode arregala o olho. Ela finge que pesou.", proxima: "rr_15" },
    rr_15: { quem: "ryuji", sprite: "ryuji", texto: "...Dois segundos.", proxima: "rr_16" },
    rr_16: { quem: "eu", texto: "Dois segundos.", proxima: "rr_17" },
    rr_17: { tipo: "narracao", texto: "Ele olha para ela. Sentado no chão, suado, com a faixa torta na testa. E não faz piada. Nenhuma.", proxima: "rr_18" },
    rr_18: { quem: "ryuji", sprite: "ryuji", texto: "Ninguém nunca veio me ver em nada. Nem na escola. Nem no futebol. Nem no ano passado, quando eu vomitei na escada. Você é a primeira.", proxima: "rr_19" },
    rr_19: { quem: "ryuji", sprite: "ryuji", texto: "No karaokê, eu fiquei olhando pra Hana porque eu não sabia que alguém da gente cantava daquele jeito. Mas quando eu estou com medo, eu olho pra você. Desde a loja dos coelhos.", proxima: "rr_20" },
    rr_20: { tipo: "narracao", texto: "Ele fala isso e fica vermelho até o pescoço. O Ryuji. Que nunca fica vermelho. Ele levanta rápido e começa a reclamar do tênis descolado, alto demais, para mudar de assunto.", proxima: "rr_21" },
    rr_21: { tipo: "narracao", sprite: null, texto: "Na saída, o bombeiro de bigode dá um adesivo para cada um. O Ryuji cola o dele no tanque da Relâmpago. Ela cola o dela no capacete. Ele vê. Não fala nada. Mas fica olhando o adesivo no capacete dela o caminho inteiro.", proxima: "fim_01" },

    /* =================== ROTA VICTOR — A OFICINA DO QUINTAL =================== */
    // Cenário: quintal da casa do Victor (usa "beco-mercado"). Música: violão malandro, depois calmo.
    rv_01: { roupa: "fora", tipo: "narracao", cenario: "beco-mercado", transicao: "tempo", legenda: "Rota Victor — A oficina do quintal", sprite: null, texto: "A casa do Victor fica no fim de uma rua de terra. O quintal é de cimento rachado, com um varal, um tanque, um pé de limão e, embaixo de uma lona azul amarrada em dois postes, a oficina. Uma moto velha desmontada. Caixa de ferramenta. Um rádio de pilha tocando samba.", proxima: "rv_02" },
    rv_02: { tipo: "narracao", texto: "O Caramelo vem correndo da casa, pula nela com as quatro patas e quica de volta. Igual no lago. E, atrás do Caramelo, de avental, com um pano de prato no ombro, uma mulher pequena, de cabelo preso, com a cara do Victor.", proxima: "rv_03" },
    rv_03: { quem: "desconhecido", rotulo: "Mãe do Victor", texto: "Então é você. A professora do banco da vergonha. Entra, minha filha. Senta. Come. Você está magra. Ele disse que você era forte. Forte não pode ser magra.", proxima: "rv_04" },
    rv_04: { tipo: "narracao", texto: "Ela é puxada para dentro. Sentada numa mesa de plástico. Na frente dela, aparece um prato de feijoada do tamanho de uma calota. A mãe do Victor senta na frente dela. E fica olhando ela comer.", proxima: "rv_05" },
    rv_05: { quem: "desconhecido", rotulo: "Mãe do Victor", texto: "A prova de história tá na geladeira. Com ímã de abacaxi. A de geografia vai ganhar ímã de uva. Você ajudou a passar nas duas. Então come mais.", proxima: "rv_06" },
    rv_06: { tipo: "narracao", sprite: "victor", texto: "O Victor aparece na porta da cozinha. Sem camisa, com graxa até o cotovelo, uma chave inglesa na mão. A mãe olha para ele.", proxima: "rv_07" },
    rv_07: { quem: "desconhecido", rotulo: "Mãe do Victor", texto: "VICTOR. VISITA. CAMISA.", proxima: "rv_08" },
    rv_08: { quem: "victor", sprite: "victor", texto: "Mãe, eu estou trabalhando!", proxima: "rv_09" },
    rv_09: { quem: "desconhecido", rotulo: "Mãe do Victor", texto: "CAMISA.", proxima: "rv_10" },
    rv_10: { tipo: "narracao", transicao: "tempo", texto: "Depois da feijoada, com o Victor de camisa, os dois no quintal. Ele deita embaixo da moto desmontada. Ela segura a lanterna. Ele pede a chave dez. Ela dá a chave doze. Ele pede a dez de novo. Ela dá a dez.", proxima: "rv_11" },
    rv_11: { quem: "victor", sprite: "victor", texto: "É do vizinho da frente. Ele não tem dinheiro pra levar no mecânico. Eu cobrei um pudim. A mãe dele faz um pudim que não racha nunca.", proxima: "rv_12" },
    rv_12: { quem: "eu", texto: "A Reina ia querer essa receita.", proxima: "rv_13" },
    rv_13: { quem: "victor", sprite: "victor", texto: "Ninguém tem essa receita. É segredo de Estado.", proxima: "rv_14" },
    rv_14: { tipo: "narracao", texto: "No fim da tarde, ele aperta o último parafuso. Sobe na moto. Pisa na partida. Uma vez. Nada. Duas. Nada. Na terceira, a moto engasga, tosse, e liga. O quintal inteiro enche de fumaça e barulho.", proxima: "rv_15" },
    rv_15: { quem: "victor", sprite: "victor", texto: "LIGOU! LIGOU! MÃE! A PRIMEIRA DA OFICINA LIGOU!", proxima: "rv_16" },
    rv_16: { tipo: "narracao", texto: "A mãe aparece na janela. Com o pano de prato. Ela não grita. Ela só fica olhando o filho em cima da moto, no meio da fumaça. E coloca a mão na boca.", proxima: "rv_17" },
    rv_17: { tipo: "narracao", texto: "Quando a fumaça baixa, o Victor senta no caixote do lado dela. Sujo de graxa até o pescoço. Sem pirulito. Olhando a moto ligada.", proxima: "rv_18" },
    rv_18: { quem: "victor", sprite: "victor", texto: "Sabe por que eu chamo todo mundo de gatinha?", proxima: "rv_19" },
    rv_19: { quem: "eu", texto: "Serviço social.", proxima: "rv_20" },
    rv_20: { quem: "victor", sprite: "victor", texto: "É. Mas também porque, se eu chamar todo mundo, ninguém percebe quando eu chamo alguém de outro jeito. Eu nunca trouxe ninguém aqui. Nem as gatinhas. As gatinhas eu levo no sorvete. Aqui é a minha casa.", proxima: "rv_esc" },

    // ▶ ESCOLHA — Rota Victor
    rv_esc: { escolhas: [
      { texto: "A. “E qual é o outro jeito?”", proxima: "rv_a1", pontos: { victor: 3 }, flags: ["Outro_jeito_Victor"] },
      { texto: "B. Passar o polegar na bochecha dele, onde tem graxa. “Você está sujo.”", proxima: "rv_b1", pontos: { victor: 3 }, flags: ["Graxa_Victor"] },
      { texto: "C. “Obrigada por me trazer na sua casa.” E encostar o ombro no dele.", proxima: "rv_c1", pontos: { victor: 2 }, flags: ["Ombro_Victor"] }
    ]},
    rv_a1: { tipo: "narracao", texto: "Ele olha para ela. Pela primeira vez sem sorriso torto. Sem piada pronta.", proxima: "rv_a2" },
    rv_a2: { quem: "victor", sprite: "victor", texto: "Pelo nome.", proxima: "rv_a3" },
    rv_a3: { tipo: "narracao", texto: "E ele não fala o nome. Ele só fica olhando para ela. Ela entende. Toda vez que ele chamou ela de SN, em vez de gatinha, não foi por acaso.", proxima: "rv_21" },
    rv_b1: { tipo: "narracao", texto: "Ela passa o polegar na bochecha dele. A graxa sai. Só um pouco. Espalha mais. Ele fica parado. O Victor, que não para quieto nunca, parado.", proxima: "rv_b2" },
    rv_b2: { quem: "victor", sprite: "victor", texto: "...Agora você também está suja.", proxima: "rv_b3" },
    rv_b3: { tipo: "narracao", texto: "Ela olha o polegar preto de graxa. Ele ri. Ela ri. A mãe dele, na janela, fecha a cortina devagar, rindo também.", proxima: "rv_21" },
    rv_c1: { tipo: "narracao", texto: "Ela encosta o ombro no dele. Ele fica rígido. Depois relaxa. Os dois ficam assim, olhando a primeira moto da oficina funcionando, soltando fumaça, fazendo um barulho horrível.", proxima: "rv_c2" },
    rv_c2: { quem: "victor", sprite: "victor", texto: "É a coisa mais bonita que eu já vi. E não é a moto.", proxima: "rv_c3" },
    rv_c3: { tipo: "narracao", texto: "Ele fala isso olhando para a moto. Ela não responde. Ele não precisa de resposta. O Caramelo deita no pé dos dois.", proxima: "rv_21" },
    rv_21: { tipo: "narracao", sprite: null, texto: "Na saída, a mãe do Victor entrega um pote de feijoada embrulhado num pano. E sussurra, quando ele não está ouvindo: “Ele nunca trouxe ninguém. Nunca.”", proxima: "fim_01" },

    /* =================== FIM — QUARTA À NOITE (todas as rotas) =================== */
    // Cenário: quarto da SN. Música: piano, depois baixo grave.
    fim_01: { tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quarta, 22h10", sprite: null, texto: "À noite, ela deita na cama ainda com a roupa da tarde.", proxima: "fim_cam1" },
    fim_cam1: { caminhos: [
      { flag: "Rota_Kaito", proxima: "fim_k0" },
      { flag: "Rota_Takeo", proxima: "fim_t0" },
      { flag: "Rota_Blake", proxima: "fim_b0" },
      { flag: "Rota_Ryuji", proxima: "fim_r0" },
      { flag: "Rota_Victor", proxima: "fim_v0" }
    ], proxima: "fim_02" },
    fim_k0: { tipo: "narracao", texto: "O moletom ainda está com cheiro de gasolina e de pneu quente. E as mãos ainda formigam do guidão.", proxima: "fim_k" },
    fim_t0: { tipo: "narracao", texto: "A camiseta ainda está com cheiro de caqui. Tem uma mancha laranja no ombro, do caqui que explodiu no pé do Takeo.", proxima: "fim_t" },
    fim_b0: { tipo: "narracao", texto: "A camiseta ainda está com cheiro de bolo de chocolate. E tem um pedaço de bexiga verde grudado no tênis.", proxima: "fim_b" },
    fim_r0: { tipo: "narracao", texto: "A roupa ainda está com cheiro de lona e de fumaça de quartel. No capacete, em cima da mesa, o adesivo dos bombeiros.", proxima: "fim_r" },
    fim_v0: { tipo: "narracao", texto: "As mãos ainda estão pretas de graxa, de tanto passar chave pro Victor. E a roupa inteira está com cheiro de feijoada.", proxima: "fim_v" },
    fim_k: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "O tio disse que você pilota melhor que eu. Eu disse que ele está ficando velho. Amanhã às sete.", proxima: "fim_02" },
    fim_t: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "A vó achou a corda no caquizeiro. Ela não brigou. Ela perguntou se o assento vai ser de madeira boa. Eu acho que ela aprovou o balanço.", proxima: "fim_02" },
    fim_b: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eles dormiram de boné de papelão. Obrigado.", proxima: "fim_02" },
    fim_r: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Eu colei a foto do cronômetro na parede do quarto. Três e cinquenta e oito. Do lado da bola murcha. Não conta pra ninguém que eu chorei no banho.", proxima: "fim_02" },
    fim_v: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "O vizinho trouxe o pudim. Não rachou mesmo. Eu guardei um pedaço pra você. A minha mãe guardou dois.", proxima: "fim_02" },
    fim_02: { tipo: "narracao", texto: "Ela sorri para a tela. E, logo depois, chega outra mensagem. De um número que ela salvou ontem como “S”.", proxima: "fim_03" },
    fim_03: { quem: "mensagem", rotulo: "Mensagem — S", texto: "Eles mudaram o dia. Não é mais o celular. É outra coisa. Eles vão me falar só amanhã à noite.", proxima: "fim_04" },
    fim_04: { quem: "mensagem", rotulo: "Mensagem — S", texto: "O de anel disse: “O filho do patrão quer ver de perto dessa vez.”", proxima: "fim_05" },
    fim_05: { tipo: "pensamento", texto: "O filho do patrão. Ren Sakuma. Pela primeira vez, ele vai sair de cima do caminhão.", proxima: "fim_06" },
    fim_06: { tipo: "pensamento", texto: "Ótimo. Eu estava cansada de olhar pra peça. Eu quero olhar pra quem mexe.", proxima: "ep_fim" },

    // Fim do Capítulo 27 (crie a entrada "capitulo27" em dados/capitulos.js).
    ep_fim: { fim: "capitulo27" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 28 (anotações do roteiro)
 *  • HISTÓRIA PRINCIPAL: a Sayuri finge que vai obedecer. Mudaram o plano. "O filho do patrão quer
 *    ver de perto dessa vez." O Ren vai aparecer em pessoa. Entrega de detalhes: quinta à noite.
 *  • ROTA (flag escolhida neste capítulo):
 *      Rota_Kaito  → ele deixou ela pilotar a moto dele. Primeira pessoa. Chave nas duas mãos.
 *      Rota_Takeo  → o balanço no caquizeiro "pra quando a gente tiver setenta". Assento de madeira.
 *      Rota_Blake  → "Desde o festival..." Ele quase falou. Voz de dinossauro só pros gêmeos e pra ela.
 *      Rota_Ryuji  → 3min58. "Quando eu estou com medo, eu olho pra você."
 *      Rota_Victor → a casa dele. "Gatinha" é pra todo mundo. O nome dela é diferente.
 *    A partir do 28, cada capítulo tem um bloco de rota com o menino escolhido.
 *  • Plano com a Sayuri: só as duas (Plano_so_duas), com a Hana (Plano_com_Hana), ou a SN sabe o lugar
 *    da entrega (Plano_lugar_entrega).
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 O plano com a Sayuri · ROTA (Kaito/Takeo/Blake/Ryuji/Victor) · 1 escolha dentro de cada rota
 *
 * FLAGS NOVAS
 *  Plano_so_duas · Plano_com_Hana · Plano_lugar_entrega · Rota_Kaito · Rota_Takeo · Rota_Blake
 *  Rota_Ryuji · Rota_Victor · Moto_um_pouco_minha · Por_que_eu_Kaito · Chave_Kaito · Assento_balanco
 *  Setenta_anos_Takeo · Degrau_Takeo · Termina_frase_Blake · Bexiga_Blake · Tambem_nao_falo_Blake
 *  Gritou_Ryuji · Armario_torre · Contagem_Ryuji · Outro_jeito_Victor · Graxa_Victor · Ombro_Victor
 */