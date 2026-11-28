/*
 * =====================================================================
 *  CAPÍTULO 49 — A resposta inteira
 *  Domingo, logo depois do Capítulo 48.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Cenas com todos os meninos em todas as rotas. Bloco de rota à noite.
 *
 *  CONTEXTO (Cap. 48)
 *    • Sexta à noite: a gangue do Kaito ganhou da do Taijo. O Kaito sem arranhão, "brigou com raiva".
 *    • Ultimato da SN. O Kaito não fala com ela. Na rota Kaito, ele marcou: domingo, 19h, no hall, "a resposta inteira".
 *    • O Ren: a loja de lámen sem ninguém na porta. A marca de uma mão na cara dele. "Não conta pra ele."
 *
 *  O QUE ACONTECE
 *    • Domingo à tarde: Mio, Hana e Reina na casa da SN. O grupo dos meninos manda mensagem o dia inteiro.
 *    • O Kaito manda mensagem (em todas as rotas): "Sete horas. No hall. Se você quiser descer."
 *    • Fim de tarde: a SN encontra o Ren sozinho no balanço da pracinha. Pouca fala. "Espera a verdadeira."
 *    • 19h: o Kaito vem DECIDIDO. Ele falou com a Serena hoje, na porta da casa dela, alto: não. Nunca. Para de me ligar
 *      chorando. E que ele sabe que a foto foi ela. Ela chorou. Ele não voltou atrás.
 *      Pra SN: "Eu escolho você. Eu não vou te pedir nada agora. Eu vou te mostrar."
 *      A SN: NADA DE NAMORO AGORA. Ele: "Eu sei. Eu não pedi."
 *    • O capacete vermelho: "Ninguém mais usa esse. Só você."
 *    • Bloco de rota à noite.
 *
 *  REGRAS
 *    • Sem xadrez no Ren. O Ren não manda mensagem. Fala pouco. Sem narrar roupa. Sem flashback.
 *    • A Serena não explica plano (aparece só por story, à noite). Ela não desiste.
 *    • NADA DE NAMORO. Nem na rota Kaito.
 *
 *  PERSONAGENS
 *    Mio, Hana, Reina, Kaito, Takeo, Victor, Blake, Ryuji, Ren, Serena (story).
 *    Sem sprite / rótulo: Victor, Ren, Mãe.
 *
 *  CENÁRIOS
 *    quarto-sn · apartamento (hall) · beco-mercado (rua / pracinha)
 *
 *  Crie a entrada "capitulo49" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo49", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — DOMINGO =================== */
    c1_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Domingo, 10h — Cena 1", sprite: null, texto: "Domingo. Ela acorda com cheiro de café e com a voz da mãe no telefone, na cozinha, falando com a vizinha sobre o preço do tomate. Coisa normal. Coisa de domingo.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "O celular rachado na mesinha. Ela pega. Uma mensagem. Mandada às sete da manhã.", proxima: "c1_03" },
    c1_03: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Hoje. Sete da noite. No hall. Eu vou estar lá com uma resposta inteira. Se você quiser descer, desce. Se não quiser, eu entendo, e eu volto amanhã às sete da manhã do mesmo jeito.", proxima: "c1_04" },
    c1_04: { tipo: "pensamento", texto: "Uma resposta inteira. Ele falou isso com todas as letras. Ele nunca fala com todas as letras.", proxima: "c1_05" },
    c1_05: { tipo: "pensamento", texto: "E se a resposta inteira for “ela”? E se ele vier dizer que pensou e escolheu ela, educadinho, com o capacete na mão?", proxima: "c1_06" },
    c1_06: { tipo: "pensamento", texto: "Então eu vou ter a minha resposta também. E eu vou ficar bem. Não hoje, talvez. Mas eu vou.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", texto: "Ela não responde. Ela coloca o celular virado para baixo. E manda no grupo das meninas uma mensagem só.", proxima: "c1_08" },
    c1_08: { quem: "mensagem", rotulo: "Mensagem — SN (grupo das meninas)", texto: "Ele vem hoje às 7. Com uma “resposta inteira”. Socorro.", proxima: "c1_09" },
    c1_09: { tipo: "narracao", texto: "Em menos de um minuto, três respostas.", proxima: "c1_10" },
    c1_10: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "CHEGO AÍ EM 20 MIN", proxima: "c1_11" },
    c1_11: { quem: "mensagem", rotulo: "Mensagem — Hana", texto: "Chego em 25. Vou levar a prancheta.", proxima: "c1_12" },
    c1_12: { quem: "mensagem", rotulo: "Mensagem — Reina", texto: "Eu levo o bolo. Não é pra comemorar. É pra emergência. Bolo serve pros dois casos.", proxima: "c2_01" },

    /* =================== CENA 2 — AS MENINAS =================== */
    c2_01: { roupa: "fora", tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Domingo, 14h — Cena 2", sprite: "mio", texto: "Às duas da tarde, o quarto dela parece uma sala de reunião. A Mio sentada na cama, de pernas cruzadas. A Hana na cadeira da escrivaninha, com a prancheta. A Reina no chão, cortando o bolo de chocolate em pedaços perfeitamente iguais com uma régua.", proxima: "c2_02" },
    c2_02: { quem: "mio", texto: "Ok. Cenários. Cenário um: ele vem, fala que escolheu você, que mandou a Serena pastar, e você chora.", proxima: "c2_03" },
    c2_03: { quem: "eu", texto: "Eu não vou chorar.", proxima: "c2_04" },
    c2_04: { quem: "mio", texto: "Você vai chorar. Cenário dois: ele vem, fala que escolheu a Serena, e você quebra o prédio.", proxima: "c2_05" },
    c2_05: { quem: "eu", texto: "Eu não vou quebrar o prédio.", proxima: "c2_06" },
    c2_06: { quem: "mio", texto: "Licitação. O prédio é de 1980. Ninguém ia desconfiar.", proxima: "c2_07" },
    c2_07: { tipo: "narracao", sprite: "hana", texto: "A Hana levanta a prancheta. Na folha, uma tabela de três colunas: “Cenário”, “Probabilidade”, “Ação recomendada”.", proxima: "c2_08" },
    c2_08: { quem: "hana", texto: "Pelos dados da semana, cenário um tem sessenta e oito por cento. Cenário dois, doze. O resto é ele aparecer e não conseguir falar nada, que é vinte por cento, porque é o Kaito.", proxima: "c2_09" },
    c2_09: { quem: "eu", texto: "Que dados, Hana?", proxima: "c2_10" },
    c2_10: { quem: "hana", texto: "Ele passou direto pela Serena no pátio. Não pegou o suco. Não falou com ela na sexta. E o Victor contou pra Mio, que contou pra mim, que ele brigou com o Taijo com cara de quem estava bravo consigo mesmo. Gente brava consigo mesma geralmente já sabe o que fez de errado.", proxima: "c2_11" },
    c2_11: { tipo: "narracao", texto: "Silêncio no quarto. A Mio olha para a Hana. A Reina para de cortar o bolo, com a régua no ar.", proxima: "c2_15" },
    c2_15: { quem: "reina", sprite: "reina", texto: "Agora, sério. Seja qual for a resposta. Você vai descer?", proxima: "c2_esc1" },

    // ▶ ESCOLHA 1 — Vai descer?
    c2_esc1: { escolhas: [
      { texto: "A. “Vou. Eu dei o ultimato. Agora eu tenho que ouvir a resposta.”", proxima: "c2_1a_1", pontos: { kaito: 2 }, flags: ["Vou_descer"] },
      { texto: "B. “Vou. Mas se ele começar com “é complicado”, eu subo na hora.”", proxima: "c2_1b_1", pontos: { kaito: 1 }, flags: ["Sobe_complicado"] },
      { texto: "C. “Eu não sei. Eu vou decidir às sete menos um.”", proxima: "c2_1c_1", pontos: {}, flags: ["Sete_menos_um"] }
    ]},
    c2_1a_1: { quem: "eu", texto: "Vou. Eu dei o ultimato. Agora eu tenho que ouvir a resposta. Seja qual for.", proxima: "c2_1a_2" },
    c2_1a_2: { quem: "reina", texto: "Adulta. Assustadoramente adulta. Toma um pedaço de bolo.", proxima: "c2_16" },
    c2_1b_1: { quem: "eu", texto: "Vou. Mas se ele começar com “é complicado”, eu subo na hora. Na hora.", proxima: "c2_1b_2" },
    c2_1b_2: { quem: "mio", texto: "Justo. Muito justo. A Hana anota isso.", proxima: "c2_1b_3" },
    c2_1b_3: { tipo: "narracao", texto: "A Hana anota. “Gatilho de saída: ‘é complicado’.”", proxima: "c2_16" },
    c2_1c_1: { quem: "eu", texto: "Eu não sei. Eu vou decidir às sete menos um.", proxima: "c2_1c_2" },
    c2_1c_2: { quem: "mio", texto: "Ninguém decide nada às sete menos um. Às sete menos um a gente só entra em pânico. Mas tá. Eu respeito o pânico.", proxima: "c2_16" },

    // (todas as opções continuam aqui)
    c2_16: { tipo: "narracao", sprite: null, texto: "O celular vibra. E vibra de novo. E de novo. O grupo dos meninos, que alguém colocou ela dentro na semana do torneio e ninguém tirou. Está explodindo.", proxima: "c2_17" },
    c2_17: { quem: "mensagem", rotulo: "Mensagem — Victor (grupo)", texto: "Gente. O líder pediu emprestado o meu desodorante hoje. Ele NUNCA pede nada emprestado. Alguma coisa vai acontecer.", proxima: "c2_18" },
    c2_18: { quem: "mensagem", rotulo: "Mensagem — Ryuji (grupo)", texto: "Ele passou duas horas lavando a moto! DUAS HORAS! A moto está tão limpa que eu me vi nela! Eu estou bonito!", proxima: "c2_19" },
    c2_19: { quem: "mensagem", rotulo: "Mensagem — Blake (grupo)", texto: "Ele foi na casa da Serena hoje de manhã. Sozinho. Voltou com a cara séria. Não falou o que foi fazer.", proxima: "c2_20" },
    c2_20: { quem: "mensagem", rotulo: "Mensagem — Takeo (grupo)", texto: "Eu ainda estou bravo por sexta. Mas eu espero que hoje dê certo. Isso não significa que eu não estou bravo.", proxima: "c2_21" },
    c2_21: { quem: "mensagem", rotulo: "Mensagem — Victor (grupo)", texto: "Ninguém fala nada do líder no grupo porque a SN está no grupo. Ops.", proxima: "c2_22" },
    c2_22: { quem: "mensagem", rotulo: "Mensagem — Victor (grupo)", texto: "Eu apaguei. Ninguém viu. Licitação.", proxima: "c2_23" },
    c2_23: { tipo: "narracao", texto: "A Mio está lendo por cima do ombro dela. A Reina também. A Hana também, de pé, atrás das três.", proxima: "c2_24" },
    c2_24: { quem: "mio", sprite: "mio", texto: "Ele foi na casa da Serena. De manhã. Sozinho.", proxima: "c2_25" },
    c2_25: { tipo: "pensamento", texto: "Ele foi na casa dela. Antes de vir aqui. E voltou sério.", proxima: "c2_26" },
    c2_26: { tipo: "narracao", texto: "A mão dela aperta a beirada da cama. O estrado faz um barulho de madeira estalando, comprido. As três meninas olham para a cama. Ela solta.", proxima: "c2_27" },
    c2_27: { quem: "hana", sprite: "hana", texto: "Isso não muda as probabilidades. Ou muda pra cima, ou muda pra baixo. Ir lá sozinho, de manhã, sério, é o que alguém faz quando vai terminar uma coisa. Não começar.", proxima: "c2_28" },
    c2_28: { quem: "reina", sprite: "reina", texto: "Ou começar. Mas ninguém começa uma coisa pedindo desodorante emprestado pro Victor.", proxima: "c2_29" },
    c2_29: { tipo: "narracao", sprite: null, texto: "Ela ri. Pela metade. E pega o terceiro pedaço de bolo.", proxima: "c3_01" },

    /* =================== CENA 3 — O BALANÇO =================== */
    c3_01: { tipo: "narracao", cenario: "frente-casa-sn-tarde", transicao: "tempo", legenda: "Domingo, 17h30 — Cena 3", sprite: null, texto: "Às cinco e meia, as meninas vão embora com uma lista de instruções que ela não vai seguir. A mãe pede para ela comprar pão para o jantar. Ela vai. Precisa sair de casa. Precisa andar.", proxima: "c3_02" },
    c3_02: { cenario: "parquinho-tarde", tipo: "narracao", texto: "No caminho da padaria, tem uma pracinha pequena, com dois bancos de concreto, um escorregador descascado e um balanço de corrente que range. Ninguém vai lá. As crianças do bairro preferem o parque novo.", proxima: "c3_03" },
    c3_03: { sprite: "ren", tipo: "narracao", texto: "No balanço, sozinho, balançando devagar, com os pés arrastando na terra, o Ren.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", texto: "Ela para na calçada. Ele não percebeu ainda. Ele está olhando para o chão, para os próprios pés, indo e voltando. A marca na bochecha está mais clara hoje. O corte na boca, com casquinha.", proxima: "c3_05" },
    c3_05: { tipo: "pensamento", texto: "O Ren num balanço. Sozinho, num domingo. Igual um menino.", proxima: "c3_06" },
    c3_06: { tipo: "narracao", texto: "Ela atravessa a pracinha. Ele levanta os olhos quando ela chega perto. Para o balanço com os pés. Não fala nada.", proxima: "c3_07" },
    c3_07: { quem: "eu", texto: "Desinchou.", proxima: "c3_08" },
    c3_08: { quem: "ren", texto: "Um pouco.", proxima: "c3_09" },
    c3_09: { tipo: "narracao", texto: "Ela senta no outro balanço. A corrente range. Aguenta. Ela não balança. Ele também não.", proxima: "c3_10" },
    c3_10: { quem: "ren", texto: "Os meus não voltaram lá. Hoje também não.", proxima: "c3_11" },
    c3_11: { quem: "eu", texto: "Eu sei. Eu passei na frente. O tio estava cantando.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", texto: "O canto da boca dele sobe. Do lado que não está cortado. Pequeno.", proxima: "c3_13" },
    c3_13: { quem: "ren", texto: "Canta mal?", proxima: "c3_14" },
    c3_14: { quem: "eu", texto: "Muito mal.", proxima: "c3_15" },
    c3_15: { tipo: "narracao", texto: "O sorriso fica. Um segundo a mais. Depois some. Os dois ficam olhando o escorregador descascado.", proxima: "c3_16" },
    c3_16: { quem: "eu", texto: "Hoje ele vem me dar uma resposta. Às sete.", proxima: "c3_17" },
    c3_17: { tipo: "narracao", texto: "Ela não sabe por que contou. Saiu. O Ren não pergunta quem é “ele”. Ele sabe.", proxima: "c3_18" },
    c3_18: { quem: "ren", texto: "Qual resposta você quer?", proxima: "c3_esc2" },

    // ▶ ESCOLHA 2 — No balanço
    c3_esc2: { escolhas: [
      { texto: "A. “A verdadeira.”", proxima: "c3_2a_1", pontos: {}, flags: ["A_verdadeira"] },
      { texto: "B. “Eu não sei mais, Ren.”", proxima: "c3_2b_1", pontos: {}, flags: ["Nao_sei_mais"] },
      { texto: "C. “Por que você quer saber?”", proxima: "c3_2c_1", pontos: {}, flags: ["Por_que_quer_saber"] }
    ]},
    c3_2a_1: { quem: "eu", texto: "A verdadeira.", proxima: "c3_2a_2" },
    c3_2a_2: { quem: "ren", texto: "Então espera a verdadeira. Se ele vier com outra, não aceita.", proxima: "c3_19" },
    c3_2b_1: { quem: "eu", texto: "Eu não sei mais, Ren.", proxima: "c3_2b_2" },
    c3_2b_2: { tipo: "narracao", texto: "Ele fica quieto. Empurra o balanço com o pé, uma vez, devagar. Volta.", proxima: "c3_2b_3" },
    c3_2b_3: { quem: "ren", texto: "Sabe sim. Você só tem medo de saber.", proxima: "c3_19" },
    c3_2c_1: { quem: "eu", texto: "Por que você quer saber?", proxima: "c3_2c_2" },
    c3_2c_2: { tipo: "narracao", texto: "Ele não responde na hora. Olha para as mãos, as duas segurando a corrente do balanço.", proxima: "c3_2c_3" },
    c3_2c_3: { quem: "ren", texto: "Pra saber se é pra ficar feliz por você. Ou não.", proxima: "c3_19" },

    // (todas as opções continuam aqui)
    c3_19: { tipo: "narracao", texto: "Ela olha para ele. O Ren, que mandou foto ameaçando, que mandou atormentar uma loja. O Ren, falando de esperar a resposta verdadeira de outro menino. Para ela.", proxima: "c3_20" },
    c3_20: { tipo: "pensamento", texto: "Ele está sendo bom comigo. Até sobre o Kaito. Ele está sendo bom comigo até sobre o Kaito.", proxima: "c3_21" },
    c3_21: { tipo: "narracao", texto: "Ela levanta do balanço. A corrente range. Ela vai até a padaria, pede seis pães e um sonho. Volta para a pracinha. O Ren ainda está lá. Ela coloca o sonho, embrulhado no papel, no colo dele, e vai embora antes de ele falar alguma coisa.", proxima: "c3_22" },
    c3_22: { tipo: "narracao", texto: "Na esquina, ela olha para trás. Ele está olhando o sonho no colo, sem abrir, como quem olha um bicho que não sabe se morde. Depois abre. E dá uma mordida, do lado da boca que não está cortado.", proxima: "c4_01" },

    /* =================== CENA 4 — SETE HORAS =================== */
    c4_01: { tipo: "narracao", cenario: "sala-sn-noite", transicao: "tempo", legenda: "Domingo, 18h58 — Cena 4", sprite: null, texto: "Seis e cinquenta e oito. Ela está parada na sala, do lado da porta, olhando para o relógio da cozinha. De novo. Igual segunda. Só que dessa vez não tem raiva no peito. Tem outra coisa. Medo, talvez. Ou o contrário de medo.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "Lá embaixo, o ronco da moto. Devagar. Parando. A moto mais limpa do bairro, segundo o Ryuji.", proxima: "c4_03" },
    c4_03: { caminhos: [
      { flag: "Sete_menos_um", proxima: "c4_03a" }
    ], proxima: "c4_04" },
    c4_03a: { tipo: "pensamento", texto: "Sete menos um. É agora. Eu falei que ia decidir agora. Eu vou descer. Eu vou descer porque eu quero ouvir. Não porque ele quer falar.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", texto: "Sete horas. Ela abre a porta de casa com dois dedos. Desce a escada. E para no alto dos três degraus da fita preta.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", cenario: "frente-casa-sn-noite", transicao: "tempo", legenda: "Domingo, 19h", sprite: "kaito", texto: "Ele está lá. Em pé, não encostado. No meio do hall. Com o capacete vermelho nas mãos, as duas, segurando na frente do corpo como quem segura uma coisa importante. Limpo. Brilhando, igual a moto.", proxima: "c4_06" },
    c4_06: { tipo: "narracao", texto: "Quando ela aparece, ele não desencosta de nada, porque não está encostado em nada. Ele só levanta a cabeça. E não desvia os olhos. Nem um segundo.", proxima: "c4_07" },
    c4_07: { quem: "kaito", texto: "Você desceu.", proxima: "c4_08" },
    c4_08: { quem: "eu", texto: "Eu desci pra ouvir. Fala.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "Ela fica no degrau de cima. Ele fica embaixo. Os três degraus no meio. Ele respira fundo. Ela vê ele respirar.", proxima: "c4_10" },
    c4_10: { quem: "kaito", texto: "Hoje de manhã eu fui na casa da Serena.", proxima: "c4_11" },
    c4_11: { tipo: "narracao", texto: "Ela não se mexe. Ele continua, devagar, sem parar, como quem leva uma caixa muito pesada sem colocar no chão no meio do caminho.", proxima: "c4_12" },
    c4_12: { quem: "kaito", texto: "Eu toquei a campainha. Ela abriu sorrindo. A mãe dela estava na sala. Eu não entrei. Eu falei na porta. Alto. Pra mãe dela ouvir também.", proxima: "c4_13" },
    c4_13: { quem: "kaito", texto: "Eu falei que não. Que nunca vai ter nada. Que eu não quero carona, não quero dueto, não quero marmita, não quero suco de pêssego. Que ela tem que parar de me ligar chorando. Que, se ela me ligar chorando de novo, eu vou ligar pra mãe dela.", proxima: "c4_14" },
    c4_14: { quem: "kaito", texto: "E eu falei que eu sei que a foto foi ela. A da garagem. Ela disse que não. Ela chorou. Eu não acredito nela.", proxima: "c4_15" },
    c4_15: { quem: "kaito", texto: "Ela chorou muito. Na frente da mãe. E eu fiquei. Eu não voltei atrás. Eu não falei “desculpa”. Eu esperei ela acabar de chorar e falei de novo, mais devagar, pra ela não poder dizer que não entendeu. E fui embora.", proxima: "c4_16" },
    c4_16: { tipo: "narracao", texto: "Ele para. A mão dele está apertando o capacete com tanta força que os nós dos dedos estão brancos.", proxima: "c4_17" },
    c4_17: { quem: "kaito", texto: "Foi a coisa mais difícil que eu já fiz. Mais difícil que o Taijo. Eu odeio ver alguém chorar. Mas eu odeio mais ver você no hall olhando pra parede.", proxima: "c4_18" },
    c4_18: { tipo: "pensamento", texto: "Ele foi lá. Ele falou alto. Na frente da mãe dela. Ele não voltou atrás.", proxima: "c4_19" },
    c4_19: { tipo: "pensamento", texto: "Ele decidiu.", proxima: "c4_20" },
    c4_20: { quem: "kaito", texto: "Essa é a primeira metade da resposta. A segunda é mais curta.", proxima: "c4_21" },
    c4_21: { caminhos: [
      { flag: "Rota_Kaito", proxima: "c4_21k" }
    ], proxima: "c4_21d" },
    c4_21k: { quem: "kaito", texto: "Eu escolho você. Não ela. Não ninguém. Você. Desde a fivela do primeiro dia. Desde antes, eu acho. Eu só demorei pra ter coragem de falar em voz alta.", proxima: "c4_22" },
    c4_21d: { quem: "kaito", texto: "Eu escolho você. Não ela. Eu não sei ainda o nome disso que eu sinto, mas eu sei que é você que eu quero buscar às sete. Não ela. Não ninguém.", proxima: "c4_22" },
    c4_22: { quem: "kaito", texto: "Mas eu não vou te pedir nada agora. Eu não mereço pedir agora. Eu deixei você esperando, eu levei ela no seu capacete, eu subi no palco. Eu não vou chegar aqui com uma frase bonita e achar que está tudo certo.", proxima: "c4_23" },
    c4_23: { quem: "kaito", texto: "Eu vou te mostrar. Todo dia. Até você achar que eu mereço pedir. Se você achar.", proxima: "c4_24" },
    c4_24: { tipo: "narracao", texto: "Silêncio no hall. A lâmpada do teto zumbindo baixinho. Lá fora, um carro passa devagar. Ela fica olhando para ele, no pé dos degraus, com o capacete vermelho nas mãos, a cara de quem acabou de carregar a caixa mais pesada do mundo até o último andar.", proxima: "c4_25" },
    c4_25: { tipo: "pensamento", texto: "A Hana estava certa. Sessenta e oito por cento. E a Mio também. Eu estou quase chorando.", proxima: "c4_26" },
    c4_26: { tipo: "pensamento", texto: "Mas eu não vou. E eu não vou descer esses três degraus correndo pra cair no colo dele como se nada tivesse acontecido. Aconteceu. Uma semana inteira aconteceu.", proxima: "c4_esc3" },

    // ▶ ESCOLHA 3 — A resposta dela
    c4_esc3: { escolhas: [
      { texto: "A. “Obrigada por ter decidido. Mas nada de namoro agora, Kaito.”", proxima: "c4_3a_1", pontos: { kaito: 3 }, flags: ["Nada_de_namoro"] },
      { texto: "B. “Mostra, então. Eu vou estar olhando.”", proxima: "c4_3b_1", pontos: { kaito: 3 }, flags: ["Mostra_entao"] },
      { texto: "C. “Você demorou uma semana. Eu vou demorar o tempo que eu quiser.”", proxima: "c4_3c_1", pontos: { kaito: 3 }, flags: ["Meu_tempo"] }
    ]},
    c4_3a_1: { quem: "eu", texto: "Obrigada por ter decidido. De verdade. Mas nada de namoro agora, Kaito.", proxima: "c4_3a_2" },
    c4_3a_2: { quem: "kaito", texto: "Eu sei. Eu não pedi.", proxima: "c4_3a_3" },
    c4_3a_3: { quem: "eu", texto: "Eu sei que você não pediu. Eu estou falando antes, pra você não pedir.", proxima: "c4_3a_4" },
    c4_3a_4: { tipo: "narracao", texto: "Ele quase sorri. Quase. Faz que sim, sério, como quem recebe uma regra nova e vai seguir à risca.", proxima: "c4_27" },
    c4_3b_1: { quem: "eu", texto: "Mostra, então. Eu vou estar olhando. Todo dia.", proxima: "c4_3b_2" },
    c4_3b_2: { quem: "kaito", texto: "Pode olhar. Eu não vou errar de lugar de novo.", proxima: "c4_3b_3" },
    c4_3b_3: { quem: "eu", texto: "E nada de namoro agora. Pra deixar claro.", proxima: "c4_3b_4" },
    c4_3b_4: { quem: "kaito", texto: "Claro. Eu entendi. Eu não sou burro. Eu sou só lerdo. O Pipoca falou.", proxima: "c4_27" },
    c4_3c_1: { quem: "eu", texto: "Você demorou uma semana. Eu vou demorar o tempo que eu quiser. E nada de namoro agora.", proxima: "c4_3c_2" },
    c4_3c_2: { quem: "kaito", texto: "Justo. Demora. Eu espero. Eu tenho prática de esperar no hall, agora.", proxima: "c4_3c_3" },
    c4_3c_3: { quem: "eu", texto: "Você esperou dez minutos uma vez, Kaito. Eu esperei uma segunda-feira inteira.", proxima: "c4_3c_4" },
    c4_3c_4: { quem: "kaito", texto: "...Então eu vou esperar mais que uma segunda-feira inteira. Pra empatar.", proxima: "c4_27" },

    // (todas as opções continuam aqui)
    c4_27: { tipo: "narracao", texto: "Ele levanta o capacete vermelho. Estende para ela. Não sobe os degraus. Espera ela descer.", proxima: "c4_28" },
    c4_28: { quem: "kaito", texto: "Esse aqui. Eu lavei. Três vezes. Ninguém mais usa esse. Só você. Nem chovendo. Nem com o pé torcido. Nem se o prédio cair.", proxima: "c4_29" },
    c4_29: { tipo: "narracao", texto: "Ela desce os três degraus. Um. Dois. Três. Devagar. Para na frente dele. Pega o capacete. Os dedos dela encostam nos dele. Dessa vez ninguém tira a mão rápido.", proxima: "c4_30" },
    c4_30: { quem: "kaito", texto: "Amanhã. Sete horas. Posso?", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — Amanhã
    c4_esc4: { escolhas: [
      { texto: "A. “Pode.”", proxima: "c4_4a_1", pontos: { kaito: 3 }, flags: ["Pode_amanha"] },
      { texto: "B. “Seis e cinquenta e cinco. Você chega antes.”", proxima: "c4_4b_1", pontos: { kaito: 3 }, flags: ["Chega_antes"] },
      { texto: "C. “Amanhã eu vou a pé com o Takeo. Terça, talvez.”", proxima: "c4_4c_1", pontos: { kaito: 1, takeo: 2 }, flags: ["Terca_talvez"] }
    ]},
    c4_4a_1: { quem: "eu", texto: "Pode.", proxima: "c4_4a_2" },
    c4_4a_2: { tipo: "narracao", texto: "Uma palavra. Ele fecha os olhos um segundo, como quem ouve a melhor música do mundo. Depois abre. E não fala mais nada. Não precisa.", proxima: "c4_31" },
    c4_4b_1: { quem: "eu", texto: "Seis e cinquenta e cinco. Você chega antes.", proxima: "c4_4b_2" },
    c4_4b_2: { quem: "kaito", texto: "Seis e quarenta. Eu vou contar os azulejos de novo. Cento e doze. Eu vou contar até você descer.", proxima: "c4_31" },
    c4_4c_1: { quem: "eu", texto: "Amanhã eu vou a pé com o Takeo. Ele prometeu. Com dois braços. Terça, talvez.", proxima: "c4_4c_2" },
    c4_4c_2: { tipo: "narracao", texto: "Ele faz que sim. Não reclama. Não faz cara de nada.", proxima: "c4_4c_3" },
    c4_4c_3: { quem: "kaito", texto: "Terça, talvez. Eu estou aqui na terça. E na quarta. Se o talvez virar não, eu continuo vindo do mesmo jeito.", proxima: "c4_31" },

    // (todas as opções continuam aqui)
    c4_31: { tipo: "narracao", texto: "Ela devolve o capacete para ele. Ele não entende. Ela coloca no braço dele, do jeito que ele carrega toda manhã.", proxima: "c4_32" },
    c4_32: { quem: "eu", texto: "Fica com ele até amanhã. Ele é meu. Mas quem traz é você.", proxima: "c4_33" },
    c4_33: { tipo: "narracao", texto: "E aí ele sorri. Não o quase. O sorriso inteiro. O do forno. O do jardim. O que ela não vê há uma semana. Ela vira as costas antes de sorrir também, porque se sorrir agora, vai parecer que acabou. E não acabou. Começou de novo. Do zero. Do jeito certo.", proxima: "c4_34" },
    c4_34: { tipo: "narracao", texto: "Ela sobe os três degraus. Não olha para trás. Mas no alto da escada, antes de abrir a porta de casa, ela ouve a voz dele, lá embaixo, baixinho, sozinho no hall.", proxima: "c4_35" },
    c4_35: { quem: "kaito", texto: "...Cento e doze.", proxima: "c4_36" },
    c4_36: { cenario: "sala-sn-noite", tipo: "narracao", sprite: null, texto: "Ela ri. Dentro da porta, de costas para a porta, sozinha. Ri até a mãe gritar da cozinha perguntando o que foi.", proxima: "c4_37" },
    c4_37: { quem: "mae", texto: "Era aquele menino da moto? Ele vai voltar a vir de manhã? Eu gosto dele. Ele cumprimenta o porteiro.", proxima: "c4_38" },
    c4_38: { quem: "eu", texto: "...Vai, mãe. Vai voltar.", proxima: "c4_39" },
    c4_39: { tipo: "narracao", texto: "O celular vibra. A rede de fofoca. A Mio mandou um print sem nenhuma palavra. Um story da Serena, postado agora. Uma foto do céu escuro, sem nada. A legenda: “algumas pessoas não sabem o valor do que perdem. mas eu sei esperar 🤍”.", proxima: "c4_40" },
    c4_40: { tipo: "pensamento", texto: "Ela não desistiu. Claro que não desistiu. Ela nunca vai desistir assim, com uma conversa na porta.", proxima: "c4_41" },
    c4_41: { tipo: "pensamento", texto: "Mas hoje ele escolheu. Em voz alta. Na frente da mãe dela. E isso ela não consegue apagar com story nenhum.", proxima: "r_cam" },

    /* =================== ROTA — DOMINGO À NOITE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Domingo, 22h", sprite: null, texto: "Dez da noite. Ela está deitada. O celular vibra. Uma foto. O capacete vermelho, em cima da mesa do quarto dele, do lado de uma luminária. Sozinho. Como um troféu.", proxima: "rk_02" },
    rk_02: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Ele está seguro. Eu vou dormir olhando pra ele. Isso é estranho? Eu acho que é estranho. Eu não ligo.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. “É estranho. Continua.”", proxima: "rk_a1", pontos: { kaito: 3 }, flags: ["Estranho_continua"] },
      { texto: "B. “Kaito. Eu ainda não te perdoei inteiro. Mas hoje foi um começo.”", proxima: "rk_b1", pontos: { kaito: 3 }, flags: ["Comeco"] },
      { texto: "C. “Boa noite, Kaito.” Só isso. Mas com um ponto, não sem.", proxima: "rk_c1", pontos: { kaito: 2 }, flags: ["Boa_noite_ponto"] }
    ]},
    rk_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "É estranho. Continua.", proxima: "rk_a2" },
    rk_a2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Continuo. Boa noite. Seis e quarenta. Cento e doze azulejos.", proxima: "r_fim" },
    rk_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Kaito. Eu ainda não te perdoei inteiro. Mas hoje foi um começo.", proxima: "rk_b2" },
    rk_b2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Começo é bom. Eu não preciso do inteiro agora. Eu preciso de amanhã. Depois eu preciso do outro amanhã. Eu vou juntando.", proxima: "r_fim" },
    rk_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Boa noite, Kaito.", proxima: "rk_c2" },
    rk_c2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Boa noite. (Você colocou ponto. Eu vi o ponto. Eu vou pensar no ponto a noite inteira.)", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Domingo, 21h", sprite: null, texto: "Às nove, o Takeo liga. Ela atende. Ele fala antes dela.", proxima: "rt_02" },
    rt_02: { quem: "takeo", texto: "O Ryuji falou no grupo que o Kaito saiu do seu prédio sorrindo. O Ryuji passou de bicicleta na frente. Ele passa na frente do seu prédio muitas vezes. Isso é outro assunto.", proxima: "rt_03" },
    rt_03: { quem: "takeo", texto: "Eu só queria perguntar se você está bem. Não se deu certo com ele. Se você está bem.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. “Eu estou bem, Takeo. E nada de namoro. Eu falei pra ele.”", proxima: "rt_a1", pontos: { takeo: 3 }, flags: ["Contou_Takeo_namoro"] },
      { texto: "B. “Você é o único que perguntou se eu estou bem. Todo mundo perguntou se deu certo.”", proxima: "rt_b1", pontos: { takeo: 4 }, flags: ["Unico_perguntou"] },
      { texto: "C. “Amanhã você vem a pé comigo mesmo assim?”", proxima: "rt_c1", pontos: { takeo: 3 }, flags: ["A_pe_mesmo_assim"] }
    ]},
    rt_a1: { quem: "eu", texto: "Eu estou bem, Takeo. E nada de namoro. Eu falei pra ele.", proxima: "rt_a2" },
    rt_a2: { tipo: "narracao", texto: "Silêncio do outro lado. Um silêncio que ela não consegue ler.", proxima: "rt_a3" },
    rt_a3: { quem: "takeo", texto: "...Tá. Bom. Que bom que você está bem. Isso que importa. A minha avó mandou um beijo.", proxima: "r_fim" },
    rt_b1: { quem: "eu", texto: "Você é o único que perguntou se eu estou bem. Todo mundo perguntou se deu certo.", proxima: "rt_b2" },
    rt_b2: { quem: "takeo", texto: "Porque dar certo é dele. Você estar bem é seu. Eu me importo mais com o que é seu.", proxima: "r_fim" },
    rt_c1: { quem: "eu", texto: "Amanhã você vem a pé comigo mesmo assim?", proxima: "rt_c2" },
    rt_c2: { quem: "takeo", texto: "Se ele vier de moto, eu vou a pé do lado da moto. Eu não ligo. Eu prometi dois braços. Eu cumpro.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Domingo, 21h", sprite: null, texto: "Às nove, uma mensagem do Blake.", proxima: "rb_02" },
    rb_02: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Ele me ligou. Ele falou que fez direito. Que foi na casa dela e falou alto. Eu falei que estava orgulhoso dele. É a primeira vez que eu falo isso pra ele.", proxima: "rb_03" },
    rb_03: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Você está bem?", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. “Estou. Nada de namoro. Mas estou.”", proxima: "rb_a1", pontos: { blake: 3 }, flags: ["Estou_Blake"] },
      { texto: "B. “E você, Blake? Você ficou com raiva dele essa semana?”", proxima: "rb_b1", pontos: { blake: 3 }, flags: ["Raiva_Blake"] },
      { texto: "C. “Obrigada por ter ficado do meu lado no muro a semana inteira.”", proxima: "rb_c1", pontos: { blake: 4 }, flags: ["Muro_semana"] }
    ]},
    rb_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Estou. Nada de namoro. Mas estou.", proxima: "rb_a2" },
    rb_a2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Bom. As duas coisas são boas.", proxima: "r_fim" },
    rb_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "E você, Blake? Você ficou com raiva dele essa semana?", proxima: "rb_b2" },
    rb_b2: { tipo: "narracao", texto: "Digitando. Para. Digitando. Para. Muito tempo.", proxima: "rb_b3" },
    rb_b3: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Fiquei. Bastante. Eu bati no saco de pancada pensando nele. Hoje eu parei. Amanhã eu sento no banco de novo. Do lado dele. E do seu.", proxima: "r_fim" },
    rb_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Obrigada por ter ficado do meu lado no muro a semana inteira.", proxima: "rb_c2" },
    rb_c2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "O muro é bom. Eu vou continuar sentando lá. Mesmo com o banco consertado.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Domingo, 20h30", sprite: null, texto: "Às oito e meia, uma mensagem do Ryuji.", proxima: "rr_02" },
    rr_02: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Eu passei na frente do seu prédio de bicicleta. Por acaso. Totalmente por acaso. Eu passo muito por acaso. Eu vi o Kaito saindo. Ele estava sorrindo. Eu fiquei feliz. E também um pouco esquisito. As duas coisas.", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. “Por que esquisito, Ryuji?”", proxima: "rr_a1", pontos: { ryuji: 4 }, flags: ["Por_que_esquisito"] },
      { texto: "B. “Nada de namoro. Eu falei pra ele.”", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Contou_Ryuji_namoro"] },
      { texto: "C. “Você passa muito por acaso aqui.”", proxima: "rr_c1", pontos: { ryuji: 3 }, flags: ["Muito_acaso"] }
    ]},
    rr_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Por que esquisito, Ryuji?", proxima: "rr_a2" },
    rr_a2: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Eu não sei. Eu vou descobrir e te conto. Ou não te conto. Depende do que eu descobrir. Boa noite!!", proxima: "r_fim" },
    rr_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Nada de namoro. Eu falei pra ele.", proxima: "rr_b2" },
    rr_b2: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "AH. Ok. Ok ok ok. Isso é... ok! Isso é muito ok! Eu estou digitando muito ok! Boa noite!", proxima: "r_fim" },
    rr_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Você passa muito por acaso aqui.", proxima: "rr_c2" },
    rr_c2: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "É o melhor caminho pra qualquer lugar. Pra padaria. Pro curso. Pra lua. Tudo passa pelo seu prédio. É geografia.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Domingo, 21h", sprite: null, texto: "Às nove, o Victor manda uma foto. A parede da oficina, do lado da placa. Uma foto dela, impressa, colada com fita, com uma moldura feita de papelão pintado de azul. Embaixo, escrito à mão pela mãe dele: “Nossa padroeira”.", proxima: "rv_02" },
    rv_02: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Eu avisei. Eu tentei impedir. Ela é mais forte que eu. Ela é mais forte que todo mundo, menos você.", proxima: "rv_03" },
    rv_03: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "O Ryuji falou no grupo do líder. Que deu certo. Eu fiquei feliz por ele. Eu juro. Eu também fiquei um pouco... deixa. Você está bem?", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. “Estou. E nada de namoro, Victor. Eu falei pra ele.”", proxima: "rv_a1", pontos: { victor: 3 }, flags: ["Contou_Victor_namoro"] },
      { texto: "B. “Você ficou um pouco o quê?”", proxima: "rv_b1", pontos: { victor: 4 }, flags: ["Um_pouco_o_que"] },
      { texto: "C. “Fala pra sua mãe que a padroeira agradece. E quer bolinho de chuva.”", proxima: "rv_c1", pontos: { victor: 3 }, flags: ["Padroeira_bolinho"] }
    ]},
    rv_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Estou. E nada de namoro, Victor. Eu falei pra ele.", proxima: "rv_a2" },
    rv_a2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "...Anotado. Muito bem anotado. Eu vou dormir com isso anotado. Boa noite, padroeira.", proxima: "r_fim" },
    rv_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Você ficou um pouco o quê?", proxima: "rv_b2" },
    rv_b2: { tipo: "narracao", texto: "Digitando. Para. Digitando. Para. Três minutos.", proxima: "rv_b3" },
    rv_b3: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Um pouco Caramelo olhando a placa. Sem entender direito. Mas abanando o rabo mesmo assim.", proxima: "r_fim" },
    rv_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Fala pra sua mãe que a padroeira agradece. E quer bolinho de chuva.", proxima: "rv_c2" },
    rv_c2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Ela ouviu. Ela já está na cozinha. São nove da noite. Eu criei um monstro. Amanhã eu levo pra escola.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Domingo, 23h", sprite: null, texto: "Onze da noite. Ela coloca o despertador para seis e meia. Olha o número na tela. Dessa vez sem medo.", proxima: "f_02" },
    f_02: { tipo: "pensamento", texto: "Ele foi na casa dela e falou alto. Na frente da mãe dela. Ele não voltou atrás quando ela chorou. Ele decidiu.", proxima: "f_03" },
    f_03: { tipo: "pensamento", texto: "E eu falei “nada de namoro agora”. E ele falou “eu sei, eu não pedi”. E é exatamente assim que eu queria.", proxima: "f_04" },
    f_04: { tipo: "pensamento", texto: "Começar de novo. Do zero. Ele traz o capacete. Eu decido se desço. Todo dia.", proxima: "f_05" },
    f_05: { tipo: "pensamento", texto: "E a Serena vai esperar. “Eu sei esperar.” Que espere. Eu também sei.", proxima: "f_06" },
    f_06: { tipo: "narracao", texto: "Ela vira de lado. Na mesinha, o livro do Ren, ainda inteiro. Ela pensa no balanço da pracinha. No sonho embrulhado no colo dele. Em “pra saber se é pra ficar feliz por você”.", proxima: "f_07" },
    f_07: { tipo: "pensamento", texto: "Eu espero que ele tenha comido o sonho inteiro.", proxima: "ep_fim" },

    // Fim do Capítulo 49 (crie a entrada "capitulo49" em dados/capitulos.js).
    ep_fim: { fim: "capitulo49" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 50 (anotações do roteiro)
 *  • Domingo à tarde: Mio, Hana e Reina no quarto da SN (cenários da Hana: 68% / 12% / 20%). Bolo de emergência da Reina.
 *  • Grupo dos meninos: o Kaito pediu desodorante pro Victor, lavou a moto duas horas, foi na casa da Serena de manhã sozinho.
 *  • PRACINHA: o Ren sozinho no balanço. "Os meus não voltaram lá." "Qual resposta você quer?" / "Espera a verdadeira." /
 *    "Você só tem medo de saber." / "Pra saber se é pra ficar feliz por você. Ou não." A SN deixou um sonho no colo dele.
 *  • 19H, O HALL: O KAITO VEIO DECIDIDO.
 *    — Foi na casa da Serena de manhã, falou na porta, alto, com a mãe dela ouvindo: não, nunca; sem carona, dueto, marmita,
 *      suco; "se você me ligar chorando de novo, eu ligo pra sua mãe"; "eu sei que a foto foi você". Ela chorou. Ele não
 *      voltou atrás. "Mais difícil que o Taijo."
 *    — "Eu escolho você. Não ela." (rota Kaito: "Desde a fivela do primeiro dia. Desde antes, eu acho.")
 *    — "Eu não vou te pedir nada agora. Eu não mereço pedir agora. Eu vou te mostrar. Todo dia."
 *    — A SN: NADA DE NAMORO AGORA. Ele: "Eu sei. Eu não pedi."
 *    — O capacete vermelho: "Ninguém mais usa esse. Só você." Ela devolveu: "Fica com ele até amanhã. Ele é meu. Mas quem
 *      traz é você." Ele sorriu o sorriso inteiro. "...Cento e doze."
 *    — Amanhã: "Pode." / 6h55 / ou a pé com o Takeo (terça, talvez).
 *  • A mãe da SN gosta do Kaito ("Ele cumprimenta o porteiro").
 *  • SERENA não desistiu: story "algumas pessoas não sabem o valor do que perdem. mas eu sei esperar 🤍".
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 Vai descer? · 2 No balanço (Ren) · 3 A resposta dela · 4 Amanhã · Rota (1 por rota)
 *
 * FLAGS NOVAS
 *  Vou_descer · Sobe_complicado · Sete_menos_um · A_verdadeira · Nao_sei_mais · Por_que_quer_saber
 *  Nada_de_namoro · Mostra_entao · Meu_tempo · Pode_amanha · Chega_antes · Terca_talvez
 *  Estranho_continua · Comeco · Boa_noite_ponto · Contou_Takeo_namoro · Unico_perguntou · A_pe_mesmo_assim
 *  Estou_Blake · Raiva_Blake · Muro_semana · Por_que_esquisito · Contou_Ryuji_namoro · Muito_acaso
 *  Contou_Victor_namoro · Um_pouco_o_que · Padroeira_bolinho
 */