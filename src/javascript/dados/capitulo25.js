/*
 * =====================================================================
 *  CAPÍTULO 25 — Dívida de honra
 *  Sábado (lan house, continua do fim do Cap. 24) e domingo.
 * =====================================================================
 *
 *  O QUE ACONTECE
 *    • Sábado: lan com o Kaito, o Blake e o Ryuji. Interrogatório: onde a moto dormiu?
 *      A SN vira outra pessoa no jogo de novo. O Ryuji aprende a apertar o R.
 *    • Domingo: o Victor chama a SN pra passear com o Caramelo e pagar o sorvete que ele deve
 *      desde a recuperação de história (Cap. 19).
 *    • Praça do lago: o Caramelo apronta. O Victor dá em cima de todo mundo menos dela
 *      ("gatinha" é pra todo mundo).
 *    • Sorveteria: o Victor conta o que quer ser. Oficina de moto. Com o nome da mãe.
 *    • Três caras zoando um moleque de skate. O Victor entra no meio, sem pensar, igual sempre.
 *      A SN dá uma ajudinha que ninguém percebe.
 *    • Gancho: o Victor viu o carro preto na doca do mercado. Um cara de terno entregando
 *      um envelope pro pai de uma menina do laço rosa. E ouviu um sobrenome: Sakuma.
 *
 *  TOM
 *    • Leve e engraçado. Sem nhenhenhém. O Victor é galinha com o mundo, não fica dando em cima dela.
 *    • Nada de gangue dentro da escola. O Ren não aparece.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Victor, Caramelo (o cachorro), Kaito, Blake, Ryuji (na lan).
 *    Sem nome: Moça da sorveteria, Moleque do skate, Valentão da praça.
 *
 *  CENÁRIOS
 *    Lan house → "lan-house" · Calçada → "beco-mercado" · Praça do lago, sorveteria e pista → "praca-estacao" · Rua do prédio → "frente-casa-sn-tarde"
 *    Quarto da SN → "quarto-sn"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Sorvete_Victor, Victor_volta, Victor_toda_quinta.
 *
 *  Crie a entrada "capitulo25" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo25", {
  inicio: "c0_01",
  cenas: {

    /* =================== CENA 0 — LAN DE SÁBADO =================== */
    // Cenário: lan house do beco do mercado, sábado 10h (usa "beco-mercado"). Continua do fim do Cap. 24.
    c0_01: { roupa: "fora", tipo: "narracao", cenario: "lan-house", transicao: "tempo", legenda: "Sábado, 10h02 — Cena 0", sprite: null, texto: "Sábado. Dez e dois. A porta de vidro da lan abre com o sininho. O Kaito entra primeiro. Ela entra atrás, com o capacete vermelho-escuro embaixo do braço.", proxima: "c0_02" },
    c0_02: { tipo: "narracao", sprite: "blake", texto: "Nas máquinas dez e onze, já sentados, de braços cruzados, esperando, como dois pais na porta de casa às três da manhã: o Blake. E o Ryuji.", proxima: "c0_03" },
    c0_03: { quem: "ryuji", sprite: "ryuji", texto: "Bom dia. Senta. A gente precisa conversar.", proxima: "c0_04" },
    c0_04: { quem: "kaito", sprite: "kaito", texto: "Ryuji, você nem joga sábado.", proxima: "c0_05" },
    c0_05: { quem: "ryuji", sprite: "ryuji", texto: "Hoje eu jogo. Hoje é um dia especial. Hoje é o dia em que a moto do líder não dormiu na lojinha.", proxima: "c0_06" },
    c0_06: { quem: "blake", sprite: "blake", texto: "Choveu. Alagou a avenida. Você não atendeu o telefone.", proxima: "c0_07" },
    c0_07: { quem: "ryuji", sprite: "ryuji", texto: "E o tio disse, e eu cito: “Ele está num lugar seguro, com uma senhora muito brava.”", proxima: "c0_08" },
    c0_08: { tipo: "narracao", sprite: null, texto: "Os dois olham para o Kaito. Depois para o capacete vermelho-escuro embaixo do braço dela. Depois para o Kaito de novo.", proxima: "c0_09" },
    c0_09: { quem: "kaito", sprite: "kaito", texto: "Eu dormi no sofá. Ponto. A mãe dela é enfermeira. Ela me obrigou.", proxima: "c0_10" },
    c0_10: { quem: "ryuji", sprite: "ryuji", texto: "A MÃE DELA ESTAVA LÁ? Você conheceu a mãe dela? Antes de mim?", proxima: "c0_11" },
    c0_11: { quem: "kaito", sprite: "kaito", texto: "Por que você ia conhecer a mãe dela antes de mim?", proxima: "c0_12" },
    c0_12: { quem: "ryuji", sprite: "ryuji", texto: "Porque eu sou simpático! As mães me amam! Eu sou o tipo que as mães amam!", proxima: "c0_13" },
    c0_13: { quem: "blake", sprite: "blake", texto: "Ela te deu café?", proxima: "c0_14" },
    c0_14: { tipo: "narracao", sprite: "kaito", texto: "O Kaito não responde. Senta na máquina doze. A dela. Vê que é a dela. Levanta. Senta na treze.", proxima: "c0_15" },
    c0_15: { quem: "eu", texto: "Deu. Na caneca de bolinha.", proxima: "c0_16" },
    c0_16: { quem: "blake", sprite: "blake", texto: "...Caneca de bolinha.", proxima: "c0_17" },
    c0_17: { tipo: "narracao", sprite: null, texto: "O Blake não sabe o que é a caneca de bolinha. Mas, pela cara dela, entende que é importante. Ele olha para o Kaito com um respeito novo.", proxima: "c0_18" },
    c0_18: { tipo: "narracao", texto: "Ela senta na doze. Liga o computador. A musiquinha de trombeta. Estala o pescoço. Estala os dedos. Os três meninos ficam quietos na hora. Eles já conhecem esse barulho.", proxima: "c0_19" },
    c0_19: { quem: "ryuji", sprite: "ryuji", texto: "Ai, não. Ela virou.", proxima: "c0_20" },
    c0_20: { tipo: "narracao", transicao: "tempo", sprite: null, texto: "Primeira partida. Os quatro no mesmo time. O Ryuji escolhe um mago cheio de efeito brilhante que morre em dois golpes. Ele morre em dois golpes. Quatro vezes.", proxima: "c0_21" },
    c0_21: { quem: "eu", texto: "RYUJI! VOCÊ É UM MAGO! MAGO FICA ATRÁS! ATRÁS! ATRÁS DO GOLEM! O GOLEM É UMA PAREDE! USA A PAREDE!", proxima: "c0_22" },
    c0_22: { quem: "ryuji", sprite: "ryuji", texto: "EU ESTAVA ATRÁS DA PAREDE! A PAREDE ANDOU!", proxima: "c0_23" },
    c0_23: { quem: "kaito", sprite: "kaito", texto: "A parede foi ajudar a raposa.", proxima: "c0_24" },
    c0_24: { quem: "eu", texto: "A raposa não precisava de ajuda! A raposa estava ganhando! A raposa está SEMPRE ganhando!", proxima: "c0_25" },
    c0_25: { quem: "blake", sprite: "blake", texto: "Ela gritou isso na lan inteira.", proxima: "c0_26" },
    c0_26: { tipo: "narracao", sprite: null, texto: "O dono da lan, no balcão, nem olha mais. Ele só aumenta o volume do rádio. O garoto da máquina treze puxou uma cadeira e está assistindo com um saco de pipoca.", proxima: "c0_esc0" },

    // ▶ ESCOLHA 0 — O Ryuji morreu de novo
    c0_esc0: { escolhas: [
      { texto: "A. Ensinar o Ryuji. Gritando. Com amor.", proxima: "c0_0a_1", pontos: { ryuji: 2 }, flags: ["Ensinou_Ryuji_lan"] },
      { texto: "B. “Blake, troca de boneco com ele. Ryuji, vai de suporte. Você cura e fica quieto.”", proxima: "c0_0b_1", pontos: { ryuji: 1, blake: 1 }, flags: ["Ryuji_suporte"] },
      { texto: "C. Carregar o time sozinha e dedicar a vitória ao Ryuji no chat.", proxima: "c0_0c_1", pontos: { ryuji: 2 }, flags: ["Vitoria_pro_Ryuji"] }
    ]},
    c0_0a_1: { quem: "eu", texto: "Ryuji. Olha pra mim. Você vê o arbusto? VÊ O ARBUSTO? Você entra no arbusto. Você espera. Quando eu falar “agora”, você aperta o R. Só o R. Nada mais.", proxima: "c0_0a_2" },
    c0_0a_2: { quem: "ryuji", sprite: "ryuji", texto: "Só o R.", proxima: "c0_0a_3" },
    c0_0a_3: { quem: "eu", texto: "AGORA!", proxima: "c0_0a_4" },
    c0_0a_4: { tipo: "narracao", texto: "O Ryuji aperta o R. A tela explode em luz. Três inimigos caem de uma vez. Ele levanta da cadeira gritando, derruba o refrigerante do Blake e abraça o Kaito por trás do pescoço.", proxima: "c0_0a_5" },
    c0_0a_5: { quem: "ryuji", texto: "EU APERTEI O R! EU SOU UM DEUS!", proxima: "c0_27" },
    c0_0b_1: { tipo: "narracao", texto: "O Ryuji vira suporte. Fica atrás. Cura. Fica quieto. Pela primeira vez em toda a história da lan, o Ryuji fica quieto por vinte minutos.", proxima: "c0_0b_2" },
    c0_0b_2: { quem: "blake", sprite: "blake", texto: "Isso é um milagre.", proxima: "c0_0b_3" },
    c0_0b_3: { quem: "ryuji", sprite: "ryuji", texto: "Eu estou concentrado. Não fala comigo. Eu sou um monge agora.", proxima: "c0_27" },
    c0_0c_1: { tipo: "narracao", texto: "Ela carrega. Sozinha. Vinte e cinco abates. A tela de vitória aparece. E ela digita no chat da partida inteira.", proxima: "c0_0c_2" },
    c0_0c_2: { quem: "mensagem", rotulo: "Chat — SN", texto: "essa vitória é dedicada ao mago que morreu 11 vezes. ele é o coração do time. descanse em paz", proxima: "c0_0c_3" },
    c0_0c_3: { quem: "ryuji", sprite: "ryuji", texto: "...Eu não sei se isso foi carinho ou humilhação.", proxima: "c0_0c_4" },
    c0_0c_4: { quem: "kaito", sprite: "kaito", texto: "Os dois.", proxima: "c0_27" },

    // (todas as opções continuam aqui)
    c0_27: { tipo: "narracao", sprite: null, cenario: "beco-mercado", transicao: "tempo", texto: "Meio-dia e meia. Coxinha de frango na calçada, os quatro sentados no meio-fio. O Ryuji conta para o Blake, com gestos, a jogada do R. O Blake escuta como se fosse a décima vez. É a décima vez.", proxima: "c0_28" },
    c0_28: { tipo: "narracao", sprite: "kaito", texto: "O Kaito come em silêncio, do lado dela. Uma hora, sem olhar, ele empurra o saquinho de molho de pimenta para perto dela. Ela não pediu. Ela ia pedir.", proxima: "c0_29" },
    c0_29: { quem: "ryuji", sprite: "ryuji", texto: "Amanhã a gente faz o quê? Domingo. Lan de novo?", proxima: "c0_30" },
    c0_30: { quem: "eu", texto: "Amanhã eu não posso. Eu tenho um compromisso. De honra.", proxima: "c0_31" },
    c0_31: { tipo: "narracao", texto: "O Kaito para de mastigar. Por meio segundo. Depois continua. Ele não pergunta. O Blake olha para ele, olha para ela, e come a coxinha muito devagar.", proxima: "c1_01" },

    /* =================== CENA 1 — DÍVIDA DE HONRA =================== */
    // Cenário: quarto da SN, domingo de manhã. Música: violão malandro.
    c1_01: { roupa: "fora", tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Domingo, 11h20 — Cena 1", sprite: null, texto: "Domingo. Ela está no chão do quarto, ainda de pijama, jogando no celular. Perdendo. O que é raro. Ela está brava. O que é comum.", proxima: "c1_02" },
    c1_02: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Gatinha. Dívida de honra. Eu te devo um sorvete desde a guerra da Revolução Industrial.", proxima: "c1_03" },
    c1_03: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Hoje. Duas da tarde. Praça do lago. Leva tênis, o Caramelo puxa.", proxima: "c1_04" },
    c1_04: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "E não fala nada pro líder. Ele me olha esquisito quando eu falo seu nome. Eu tenho medo de acordar sem moto.", proxima: "c1_cam1" },
    c1_cam1: { caminhos: [
      { flag: "Sorvete_Victor", proxima: "c1_casquinha" }
    ], proxima: "c1_esc1" },
    c1_casquinha: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "O de casquinha da padaria, com cobertura. Eu prometi. Eu sou um homem generoso.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — Resposta para o Victor
    c1_esc1: { escolhas: [
      { texto: "A. “Duas horas. Eu levo o tênis. Você leva o dinheiro.”", proxima: "c1_1a_1", pontos: { victor: 2 }, flags: ["Aceitou_sorvete_Victor"] },
      { texto: "B. “Dois sorvetes. Juros.”", proxima: "c1_1b_1", pontos: { victor: 2 }, flags: ["Aceitou_sorvete_Victor", "Juros_sorvete"] },
      { texto: "C. “Só vou se o Caramelo confirmar presença.”", proxima: "c1_1c_1", pontos: { victor: 2 }, flags: ["Aceitou_sorvete_Victor", "Caramelo_confirma"] }
    ]},
    c1_1a_1: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Eu levo o dinheiro. Eu contei. Dá pra dois sorvetes e meio. O meio é do Caramelo.", proxima: "c1_05" },
    c1_1b_1: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Juros??? Isso é agiotagem. Tá. Dois. Mas o segundo é pequeno.", proxima: "c1_05" },
    c1_1c_1: { tipo: "narracao", texto: "Trinta segundos depois chega uma foto. O Caramelo, de óculos escuros, sentado num banquinho, com uma plaquinha de papel pendurada no pescoço: “CONFIRMADO”.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Ele confirmou. Ele assinou com a pata. Eu tenho testemunha.", proxima: "c1_05" },

    // (todas as opções continuam aqui)
    c1_05: { tipo: "narracao", texto: "Ela larga o celular. Perdeu a partida. Nem liga.", proxima: "c2_01" },

    /* =================== CENA 2 — A PRAÇA DO LAGO =================== */
    // Cenário: praça do lago, domingo à tarde (usa "saida-colegio"). Música: violão, dia de sol.
    c2_01: { roupa: "fora", tipo: "narracao", cenario: "praca-estacao", transicao: "tempo", legenda: "Cena 2 — A praça do lago", sprite: null, texto: "Duas horas. A praça do lago está cheia. Família, pipa, carrinho de pipoca, um senhor dando milho pros pombos. E, no portão, alguém de regata, bermuda e chinelo, com um pirulito na boca e um cachorro caramelo do tamanho de uma mala pulando no lugar.", proxima: "c2_02" },
    c2_02: { quem: "victor", sprite: "victor", texto: "Gatinha! Pontual! Igual uma inglesa!", proxima: "c2_03" },
    c2_03: { foto: "caramelo", tipo: "narracao", texto: "O Caramelo vê ela. Arranca a guia da mão do Victor. Atravessa o portão correndo, de orelha para trás, e pula. Em cima dela. Com as quatro patas.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", texto: "Ela não se mexe. Nem um passo para trás. O Caramelo bate nela como quem bate num muro, escorrega e cai sentado na grama, confuso. Depois abana o rabo e tenta de novo.", proxima: "c2_05" },
    c2_05: { quem: "victor", sprite: "victor", texto: "Ele derruba o Ryuji. Ele derrubou o líder uma vez. Ele derrubou um poste. Você nem balançou.", proxima: "c2_06" },
    c2_06: { quem: "eu", texto: "Eu estava preparada.", proxima: "c2_07" },
    c2_07: { quem: "victor", sprite: "victor", texto: "Ninguém está preparado pro Caramelo.", proxima: "c2_08" },
    c2_08: { tipo: "narracao", texto: "Eles andam pela beira do lago. O Victor segura a guia com as duas mãos e é arrastado. A cada vinte metros ele para para cumprimentar alguém.", proxima: "c2_09" },
    c2_09: { quem: "victor", sprite: "victor", texto: "Boa tarde, gatinha! — Isso é para a moça da pipoca. — Que vestido lindo, gatinha! — Para uma senhora de setenta anos com um poodle. — Fala, gatinho! — Para um menino de cinco anos com uma bola.", proxima: "c2_10" },
    c2_10: { tipo: "narracao", texto: "A senhora do poodle dá risada e bate no braço dele com a bolsa. O menino da bola chuta a bola nele. A moça da pipoca dá um saquinho de graça.", proxima: "c2_11" },
    c2_11: { quem: "eu", texto: "Você chama todo mundo de gatinha.", proxima: "c2_12" },
    c2_12: { quem: "victor", sprite: "victor", texto: "Todo mundo. Assim ninguém fica de fora. É um serviço social.", proxima: "c2_13" },
    c2_13: { tipo: "pensamento", texto: "Então “gatinha” não é nada. É tipo “bom dia”. Que alívio. E que engraçado.", proxima: "c2_14" },
    c2_14: { tipo: "narracao", texto: "No meio da ponte do lago, o Caramelo vê um pato. O pato vê o Caramelo. Os dois param. Se encaram. Por três segundos, o mundo inteiro espera.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — Caramelo contra o pato
    c2_esc2: { escolhas: [
      { texto: "A. Pegar a guia da mão do Victor. Firmar o pé. Ninguém vai pro lago hoje.", proxima: "c2_2a_1", pontos: { victor: 1 }, flags: ["Segurou_Caramelo"] },
      { texto: "B. Não fazer nada. Deixar o destino agir.", proxima: "c2_2b_1", pontos: { victor: 2 }, flags: ["Caramelo_lago"] },
      { texto: "C. Ficar na frente do Caramelo e dar uma ordem, com a voz da mãe. “Senta.”", proxima: "c2_2c_1", pontos: { victor: 2 }, flags: ["Senta_Caramelo"] }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "O Caramelo arranca. A guia estica. Ela segura. O Caramelo para no ar, como desenho animado, e cai sentado na ponte. O pato sai nadando, ofendido.", proxima: "c2_2a_2" },
    c2_2a_2: { quem: "victor", sprite: "victor", texto: "...Gatinha. Você é forte pra caramba. Eu já falei isso? Eu vou falar toda semana até a formatura.", proxima: "c2_15" },
    c2_2b_1: { tipo: "narracao", texto: "O Caramelo arranca. O Victor, que estava segurando a guia com uma mão e a pipoca com a outra, vai junto. Os dois voam por cima do corrimão baixo da ponte. Splash. Splash.", proxima: "c2_2b_2" },
    c2_2b_2: { tipo: "narracao", texto: "O lago tem meio metro de fundura. O Victor está sentado na água, com a pipoca boiando em volta e o pirulito ainda na boca. O Caramelo está nadando atrás do pato, muito feliz. O pato está ganhando.", proxima: "c2_2b_3" },
    c2_2b_3: { quem: "victor", sprite: "victor", texto: "...Isso foi planejado. Eu precisava de um banho.", proxima: "c2_2b_4" },
    c2_2b_4: { tipo: "narracao", texto: "Ela ri tanto que precisa sentar na ponte. As pessoas tiram foto. O Victor acena para as fotos, de dentro do lago, como um galã.", proxima: "c2_15" },
    c2_2c_1: { tipo: "narracao", texto: "Ela fica na frente do Caramelo. Olha nos olhos dele. E fala, com a voz exata da mãe às onze da noite.", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "eu", texto: "Senta.", proxima: "c2_2c_3" },
    c2_2c_3: { tipo: "narracao", texto: "O Caramelo senta. Na hora. Abaixa a orelha. O pato também para de nadar. O Victor senta também, no chão da ponte, sem saber por quê.", proxima: "c2_2c_4" },
    c2_2c_4: { quem: "victor", sprite: "victor", texto: "Por que eu sentei? Eu não sou cachorro. Por que eu sentei?", proxima: "c2_15" },

    // (todas as opções continuam aqui)
    c2_15: { tipo: "narracao", texto: "Do outro lado do lago, a sorveteria. Um quiosque azul com um cone de gesso gigante em cima, desbotado de sol.", proxima: "c2_16" },
    c2_16: { quem: "victor", sprite: "victor", texto: "Hora de pagar a dívida. Um homem que não paga dívida não é um homem. É um pirulito.", proxima: "c3_01" },

    /* =================== CENA 3 — A OFICINA =================== */
    // Cenário: sorveteria (usa "corredor"). Música: violão leve.
    c3_01: { tipo: "narracao", cenario: "praca-estacao", transicao: "tempo", legenda: "Cena 3 — A oficina", sprite: null, texto: "Na sorveteria, o Victor esvazia o bolso no balcão. Moedas. Um parafuso. Uma tampinha de garrafa. Um papel dobrado. Mais moedas. Ele conta uma por uma, em voz alta.", proxima: "c3_02" },
    c3_02: { quem: "desconhecido", rotulo: "Moça da sorveteria", texto: "Victor. Você conta moeda aqui todo domingo. Eu já sei que dá.", proxima: "c3_03" },
    c3_03: { quem: "victor", sprite: "victor", texto: "Eu sei, gatinha. É pelo ritual.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", texto: "Ela pede frango. Não tem sorvete de frango. Ela pede chocolate. Ele pede o pior sabor do cardápio: chiclete com milho verde. Os dois sentam num banco de cimento com o Caramelo deitado no meio, lambendo a casquinha que caiu.", proxima: "c3_05" },
    c3_05: { quem: "eu", texto: "O que é esse parafuso?", proxima: "c3_06" },
    c3_06: { quem: "victor", sprite: "victor", texto: "Da moto do Ryuji. Caiu ontem no estacionamento. Ele nem percebeu. Se ele andar sem isso, o farol cai na terceira lombada.", proxima: "c3_07" },
    c3_07: { quem: "eu", texto: "Você sabe de qual parte da moto é um parafuso só de olhar?", proxima: "c3_08" },
    c3_08: { quem: "victor", sprite: "victor", texto: "Gatinha. Eu sei o barulho de cada moto do bairro. Eu sei qual tem a corrente frouxa só de ouvir passar na esquina. A do Blake tem uma vibração no pedal direito faz dois meses e ele nem sentiu.", proxima: "c3_09" },
    c3_09: { tipo: "narracao", texto: "Ele fala isso lambendo sorvete de chiclete com milho, como quem fala de futebol. Mas os olhos mudam. Brilham.", proxima: "c3_10" },
    c3_10: { quem: "victor", sprite: "victor", texto: "Eu vou abrir uma oficina. De moto. Pequena. No começo, num quintal. Depois numa garagem. Depois numa esquina, com placa e tudo.", proxima: "c3_11" },
    c3_11: { quem: "victor", sprite: "victor", texto: "E a placa vai ter o nome da minha mãe. Ela carregou caixa a vida inteira. Eu quero que ela passe na frente e veja o nome dela lá em cima. Grande. Iluminado.", proxima: "c3_12" },
    c3_12: { quem: "victor", sprite: "victor", texto: "Por isso eu preciso passar de ano. Ninguém leva moto em mecânico que repetiu de ano duas vezes. É questão de marketing.", proxima: "c3_cam1" },
    c3_cam1: { caminhos: [
      { flag: "Victor_toda_quinta", proxima: "c3_quinta" }
    ], proxima: "c3_esc3" },
    c3_quinta: { quem: "victor", sprite: "victor", texto: "E com você toda quinta no banco, eu vou passar. Geografia eu tirei sete. Sete! Rio é fronteira!", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — A oficina do Victor
    c3_esc3: { escolhas: [
      { texto: "A. “Eu vou ser a primeira cliente. Mesmo sem moto.”", proxima: "c3_3a_1", pontos: { victor: 3 }, flags: ["Primeira_cliente"] },
      { texto: "B. “E qual é o nome da sua mãe? Pra eu já ir treinando falar o nome da oficina.”", proxima: "c3_3b_1", pontos: { victor: 3 }, flags: ["Nome_oficina"] },
      { texto: "C. “Começa agora. Conserta a moto do Ryuji de graça. Propaganda.”", proxima: "c3_3c_1", pontos: { victor: 2, ryuji: 1 }, flags: ["Propaganda_oficina"] }
    ]},
    c3_3a_1: { quem: "victor", sprite: "victor", texto: "Sem moto? O que você vai consertar?", proxima: "c3_3a_2" },
    c3_3a_2: { quem: "eu", texto: "Sei lá. Um patinete. A bicicleta de entrega do Kaito.", proxima: "c3_3a_3" },
    c3_3a_3: { quem: "victor", sprite: "victor", texto: "Aquela bicicleta não tem conserto. Aquela bicicleta é um acidente que ainda não aconteceu.", proxima: "c3_13" },
    c3_3b_1: { tipo: "narracao", texto: "Ele para de lamber o sorvete. Olha para ela. Ninguém nunca perguntou o nome da mãe dele.", proxima: "c3_3b_2" },
    c3_3b_2: { quem: "victor", sprite: "victor", texto: "Ela odeia o nome dela. Ela diz que é nome de novela antiga. Eu vou colocar mesmo assim. Em neon. Ela vai brigar comigo na inauguração. Vai ser lindo.", proxima: "c3_3b_3" },
    c3_3b_3: { quem: "eu", texto: "Eu vou na inauguração. Pra ver a briga.", proxima: "c3_3b_4" },
    c3_3b_4: { quem: "victor", sprite: "victor", texto: "Combinado. Eu te dou o primeiro brinde. Um chaveiro de parafuso.", proxima: "c3_13" },
    c3_3c_1: { quem: "victor", sprite: "victor", texto: "De graça? Pro Ryuji? Ele vai contar pra cidade inteira. Ele vai fazer um vídeo. Ele vai gritar no pátio.", proxima: "c3_3c_2" },
    c3_3c_2: { quem: "eu", texto: "Exatamente. Propaganda.", proxima: "c3_3c_3" },
    c3_3c_3: { tipo: "narracao", texto: "Ele pensa. Lambe o sorvete. Pensa mais.", proxima: "c3_3c_4" },
    c3_3c_4: { quem: "victor", sprite: "victor", texto: "...Gatinha. Você é uma gênia dos negócios. Eu vou te contratar. Gerente de marketing. Salário: sorvete.", proxima: "c3_13" },

    // (todas as opções continuam aqui)
    c3_13: { tipo: "narracao", texto: "O Caramelo levanta a cabeça de repente. As orelhas em pé. Rosna, baixinho, para o lado da pista de skate.", proxima: "c4_01" },

    /* =================== CENA 4 — A PISTA DE SKATE =================== */
    // Cenário: praça do lago, pista de skate (usa "saida-colegio"). Música: corta, depois rock.
    c4_01: { tipo: "narracao", cenario: "praca-estacao", transicao: "tempo", legenda: "Cena 4 — A pista", sprite: null, texto: "Na pista de skate, três caras de uns dezenove anos. Em volta de um moleque magrelo, de uns doze, com um skate todo riscado debaixo do braço.", proxima: "c4_02" },
    c4_02: { quem: "desconhecido", rotulo: "Valentão da praça", texto: "Empresta aí, nanico. Só uma volta. Depois eu devolvo. Talvez.", proxima: "c4_03" },
    c4_03: { tipo: "narracao", texto: "O moleque segura o skate mais forte. Um dos caras empurra o ombro dele. O moleque cai sentado no cimento. O skate escorrega e para no pé do maior dos três.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", texto: "O Victor já não está mais no banco.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "Ela nem viu ele levantar. O sorvete de chiclete com milho está no banco, de cabeça para baixo. O Victor está atravessando a praça. Rápido. De chinelo. Com o pirulito na boca.", proxima: "c4_06" },
    c4_06: { tipo: "pensamento", texto: "Igual ao Kaito aos treze anos, atrás do campinho. Cinco contra um não é briga. É covardia. Ele aprendeu com o melhor.", proxima: "c4_07" },
    c4_07: { quem: "victor", sprite: "victor", texto: "Ô, gatinho. Devolve o skate do moleque.", proxima: "c4_08" },
    c4_08: { tipo: "narracao", texto: "Os três viram. Olham o Victor de cima a baixo. Regata. Bermuda. Chinelo. Pirulito. Eles riem.", proxima: "c4_09" },
    c4_09: { quem: "desconhecido", rotulo: "Valentão da praça", texto: "E quem é você? O pai dele? De chinelo?", proxima: "c4_10" },
    c4_10: { quem: "victor", sprite: "victor", texto: "Eu sou o cara que vai fazer você devolver o skate. O chinelo é pra você não se sentir tão humilhado depois.", proxima: "c4_11" },
    c4_11: { tipo: "narracao", texto: "O maior dos três larga o skate. Estala os dedos. E vai pra cima.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", efeito: "tremor", texto: "O Victor desvia do primeiro soco rindo. Do segundo também. O terceiro pega de raspão na bochecha, e ele ri mais ainda. Ele briga do jeito que fala: alto, bagunçado, feliz. Os outros dois entram junto.", proxima: "c4_13" },
    c4_13: { tipo: "narracao", texto: "Três contra um. O Victor segurando dois. O terceiro dando a volta por trás dele.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — A ajudinha
    c4_esc4: { escolhas: [
      { texto: "A. Chutar o skate do chão, de longe. Ele atravessa a pista e acerta o tornozelo do cara de trás.", proxima: "c4_4a_1", pontos: { victor: 2 }, flags: ["Skate_tornozelo"] },
      { texto: "B. Soltar a guia do Caramelo. “Vai, Caramelo.”", proxima: "c4_4b_1", pontos: { victor: 3 }, flags: ["Soltou_Caramelo"] },
      { texto: "C. Ir até lá, andando. Segurar o cara de trás pela gola. E colocar ele sentado no banco. Com educação.", proxima: "c4_4c_1", pontos: { victor: 2, desvio: 1 }, flags: ["Sentou_valentao"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "Ela chuta o skate. Só um tapinha com a ponta do tênis. O skate sai voando pelo cimento como uma bala, bate no tornozelo do cara de trás e ele cai de cara na rampa.", proxima: "c4_4a_2" },
    c4_4a_2: { tipo: "narracao", texto: "Ninguém viu quem chutou. Todo mundo acha que o skate escorregou sozinho. O moleque de doze anos olha para o skate. Depois para ela. E arregala os olhos. Ela coloca o dedo na boca: shh.", proxima: "c4_14" },
    c4_4b_1: { tipo: "narracao", texto: "Ela solta a guia. O Caramelo, que estava rosnando faz cinco minutos, sai disparado. Trinta quilos de cachorro caramelo atingem o cara de trás na altura do joelho.", proxima: "c4_4b_2" },
    c4_4b_2: { tipo: "narracao", texto: "O cara cai. O Caramelo senta em cima dele. Literalmente. E começa a lamber a cara dele, abanando o rabo. O cara grita como se estivesse sendo atacado por um leão.", proxima: "c4_4b_3" },
    c4_4b_3: { quem: "victor", sprite: "victor", texto: "CARAMELO! MEU FILHO! ISSO! LAMBE A CARA DELE ATÉ ELE PEDIR DESCULPA!", proxima: "c4_14" },
    c4_4c_1: { tipo: "narracao", texto: "Ela atravessa a pista andando. Sem pressa. Segura o cara de trás pela gola da camiseta, no meio do passo dele. Puxa. Ele para.", proxima: "c4_4c_2" },
    c4_4c_2: { tipo: "narracao", texto: "Ela leva ele até o banco do lado da pista. E senta ele. Com cuidado. Como quem senta uma criança. Ele tenta levantar. Ela coloca a mão no ombro dele. Ele não levanta.", proxima: "c4_4c_3" },
    c4_4c_3: { quem: "eu", texto: "Fica aí. Já vai acabar.", proxima: "c4_4c_4" },
    c4_4c_4: { tipo: "narracao", texto: "O cara fica. Com a cara de quem não entendeu nada do que acabou de acontecer. Ele tem dezenove anos. Ela tem um e sessenta.", proxima: "c4_14" },

    // (todas as opções continuam aqui)
    c4_14: { tipo: "narracao", texto: "Sem o terceiro, o Victor acaba com os outros dois em dez segundos. Um empurrão no lago. Outro sentado na rampa, segurando o nariz. O Victor pega o skate. Entrega para o moleque. Bate a poeira do ombro dele.", proxima: "c4_15" },
    c4_15: { quem: "victor", sprite: "victor", texto: "Tá inteiro, gatinho?", proxima: "c4_16" },
    c4_16: { quem: "desconhecido", rotulo: "Moleque do skate", texto: "...Tô. Valeu. Você é de alguma gangue?", proxima: "c4_17" },
    c4_17: { quem: "victor", sprite: "victor", texto: "Eu sou de uma família. Ela anda de moto. Se esses três aparecerem de novo, fala que o cara do pirulito manda lembranças.", proxima: "c4_18" },
    c4_18: { tipo: "narracao", texto: "O moleque sai correndo com o skate. Os três valentões vão embora mancando, um deles pingando água do lago. O Victor volta para o banco. Olha o sorvete de cabeça para baixo no cimento.", proxima: "c4_19" },
    c4_19: { quem: "victor", sprite: "victor", texto: "Meu chiclete com milho. Morreu em combate.", proxima: "c4_20" },
    c4_20: { tipo: "narracao", texto: "Ele tem um arranhão na bochecha. Um pouco de sangue no canto da boca. E o maior sorriso do dia.", proxima: "c4_cam1" },
    c4_cam1: { caminhos: [
      { flag: "Victor_volta", proxima: "c4_mindinho" }
    ], proxima: "c4_21" },
    c4_mindinho: { tipo: "narracao", texto: "Ele levanta o mindinho para ela. Reto. Ela engancha o dela. Ele aperta.", proxima: "c4_mindinho2" },
    c4_mindinho2: { quem: "victor", sprite: "victor", texto: "Voltei. Inteiro. Promessa mantida.", proxima: "c4_21" },
    c4_21: { quem: "victor", sprite: "victor", texto: "Viu? É por isso que eu preciso da oficina logo. Briga não paga conta. Mas é o meu hobby.", proxima: "c4_22" },
    c4_22: { quem: "eu", texto: "Você não pensa antes, né?", proxima: "c4_23" },
    c4_23: { quem: "victor", sprite: "victor", texto: "Penso. Depois. Quando eu já estou no meio. Dá tempo.", proxima: "c4_24" },
    c4_24: { tipo: "narracao", texto: "Ela compra outro sorvete de chiclete com milho para ele. Com o dinheiro dela. Ele protesta que a dívida é dele. Ela fala que isso é outra dívida. Ele aceita, porque está com sangue na boca e o sorvete é gelado.", proxima: "c5_01" },

    /* =================== CENA 5 — SAKUMA =================== */
    // Cenário: rua do prédio da SN, fim de tarde (usa "saida-colegio"). Música: violão, depois baixo grave.
    c5_01: { tipo: "narracao", cenario: "frente-casa-sn-tarde", sprite: "victor", transicao: "tempo", legenda: "Cena 5 — O sobrenome", texto: "Fim de tarde. O Victor leva ela até a esquina do prédio. A pé. O Caramelo, exausto, deitado nos braços dele como um bebê de trinta quilos.", proxima: "c5_02" },
    c5_02: { quem: "victor", sprite: "victor", texto: "Ah, lembrei. Uma coisa estranha. Você que é das ideias, você vai saber o que é.", proxima: "c5_03" },
    c5_03: { quem: "victor", sprite: "victor", texto: "Ontem de madrugada, na doca do mercado. Eu estava descarregando batata. Parou um carro preto. Bonito. Vidro escuro.", proxima: "c5_04" },
    c5_04: { tipo: "narracao", texto: "A SN para de andar.", proxima: "c5_05" },
    c5_05: { quem: "victor", sprite: "victor", texto: "Desceu um cara de terno, de gel no cabelo. E veio um outro cara, mais velho, a pé, tremendo. Eu conheço esse mais velho. Ele busca a filha na escola. A do laço rosa. A Sayuri.", proxima: "c5_06" },
    c5_06: { quem: "victor", sprite: "victor", texto: "O de terno entregou um envelope grosso pra ele. Falou um monte de coisa baixo. E aí, no final, falou mais alto: “O senhor Sakuma mandou lembrar do prazo.”", proxima: "c5_07" },
    c5_07: { tipo: "narracao", efeito: "eco", texto: "Sakuma.", proxima: "c5_08" },
    c5_08: { tipo: "pensamento", texto: "Ren Sakuma. Dezessete anos. Gosta de xadrez, de ler e de conhecer pessoas novas.", proxima: "c5_09" },
    c5_09: { tipo: "pensamento", texto: "O patrão. O dinheiro. O pai da Sayuri. O carro. O peão no painel. Tudo com o mesmo sobrenome.", proxima: "c5_10" },
    c5_10: { tipo: "pensamento", texto: "Não é o Ren que empresta dinheiro. É o pai dele. E o Ren usa o que o pai tem como se fosse peça dele.", proxima: "c5_11" },
    c5_11: { quem: "victor", sprite: "victor", texto: "Sakuma não é o sobrenome daquele moleque metido da sua sala? O do xadrez? Que sumiu um tempo?", proxima: "c5_12" },
    c5_12: { tipo: "narracao", texto: "Ele pergunta isso com o Caramelo no colo, despreocupado. Como quem pergunta do tempo.", proxima: "c5_esc5" },

    // ▶ ESCOLHA 5 — O que dizer para o Victor
    c5_esc5: { escolhas: [
      { texto: "A. “Victor. Não repete esse nome pra ninguém. Nem pro Kaito ainda. Deixa comigo.”", proxima: "c5_5a_1", pontos: { victor: 2 }, flags: ["Segredo_Sakuma_Victor"] },
      { texto: "B. “Conta pro Kaito. Hoje. Exatamente do jeito que você me contou.”", proxima: "c5_5b_1", pontos: { victor: 1, kaito: 1 }, flags: ["Victor_conta_Kaito"] },
      { texto: "C. “Você lembra a data do prazo? Falou algum dia?”", proxima: "c5_5c_1", pontos: { victor: 2, desvio: 1 }, flags: ["Prazo_Sakuma"] }
    ]},
    c5_5a_1: { tipo: "narracao", texto: "O Victor para de sorrir. Olha para ela. Pela primeira vez no dia, sério.", proxima: "c5_5a_2" },
    c5_5a_2: { quem: "victor", sprite: "victor", texto: "...Isso é coisa grande, né?", proxima: "c5_5a_3" },
    c5_5a_3: { quem: "eu", texto: "É.", proxima: "c5_5a_4" },
    c5_5a_4: { quem: "victor", sprite: "victor", texto: "Tá. Boca de siri. Mas se ficar perigoso, eu conto. Pro líder. Não discute. Eu prometi de mindinho uma vez, eu não vou ficar de fora de nada.", proxima: "c5_13" },
    c5_5b_1: { quem: "victor", sprite: "victor", texto: "Hoje? Ele vai me perguntar por que eu estava com você no domingo.", proxima: "c5_5b_2" },
    c5_5b_2: { quem: "eu", texto: "Fala que você estava pagando uma dívida.", proxima: "c5_5b_3" },
    c5_5b_3: { quem: "victor", sprite: "victor", texto: "Ele vai me olhar esquisito.", proxima: "c5_5b_4" },
    c5_5b_4: { quem: "eu", texto: "Ele sempre te olha esquisito.", proxima: "c5_5b_5" },
    c5_5b_5: { quem: "victor", sprite: "victor", texto: "...Verdade. Tá. Hoje. Depois do turno.", proxima: "c5_13" },
    c5_5c_1: { tipo: "narracao", texto: "O Victor pensa. Coça a cabeça. O Caramelo boceja.", proxima: "c5_5c_2" },
    c5_5c_2: { quem: "victor", sprite: "victor", texto: "Falou. “Até o fim do mês.” E o pai da menina disse que não tinha como. E o de terno disse “então a filha resolve, igual da outra vez”.", proxima: "c5_5c_3" },
    c5_5c_3: { tipo: "pensamento", texto: "Igual da outra vez. O balde. A página. Tudo foi a filha resolvendo a dívida do pai.", proxima: "c5_5c_4" },
    c5_5c_4: { tipo: "pensamento", texto: "Fim do mês. Faltam doze dias. Eles vão mandar a Sayuri fazer alguma coisa de novo. Comigo. Ou com alguém perto de mim.", proxima: "c5_13" },

    // (todas as opções continuam aqui)
    c5_13: { tipo: "narracao", texto: "Na esquina, o Victor coloca o Caramelo no chão. O Caramelo deita de novo na calçada, morto de cansaço.", proxima: "c5_14" },
    c5_14: { quem: "victor", sprite: "victor", texto: "Valeu pelo domingo, SN. Melhor que domingo de doca.", proxima: "c5_15" },
    c5_15: { tipo: "narracao", texto: "Ele falou o nome dela. Não gatinha. Ele faz um aceno com a mão do pirulito e vai embora, carregando o Caramelo de novo depois de três passos, porque o Caramelo se recusa a andar.", proxima: "c5_16" },
    c5_16: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", sprite: null, texto: "No quarto, ela pega o peão preto da escrivaninha. Gira entre os dedos.", proxima: "c5_17" },
    c5_17: { tipo: "pensamento", texto: "Sakuma. Agora a peça tem nome.", proxima: "c5_18" },
    c5_18: { tipo: "pensamento", texto: "E quem sabe o nome da peça sabe onde ela mora.", proxima: "ep_fim" },

    // Fim do Capítulo 25 (crie a entrada "capitulo25" em dados/capitulos.js).
    ep_fim: { fim: "capitulo25" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 26 (anotações do roteiro)
 *  • SAKUMA: o "patrão" que empresta dinheiro ao pai da Sayuri é o pai do Ren (senhor Sakuma).
 *    O Ren usa os homens e o dinheiro do pai como peças dele.
 *  • Prazo: fim do mês (doze dias). "Então a filha resolve, igual da outra vez." (Prazo_Sakuma)
 *  • O Victor sabe o sobrenome. Guarda segredo (Segredo_Sakuma_Victor) ou conta pro Kaito (Victor_conta_Kaito).
 *  • Victor: quer abrir uma oficina de moto com o nome da mãe na placa.
 *  • A SN derrubou/segurou um valentão na praça. Só o moleque do skate viu (Skate_tornozelo).
 *
 * ESCOLHAS DO CAPÍTULO (5)
 *  1 Resposta para o Victor · 2 Caramelo contra o pato · 3 A oficina do Victor · 4 A ajudinha
 *  5 O que dizer para o Victor
 *
 * FLAGS NOVAS
 *  Ensinou_Ryuji_lan · Ryuji_suporte · Vitoria_pro_Ryuji · Aceitou_sorvete_Victor · Juros_sorvete · Caramelo_confirma · Segurou_Caramelo · Caramelo_lago
 *  Senta_Caramelo · Primeira_cliente · Nome_oficina · Propaganda_oficina · Skate_tornozelo
 *  Soltou_Caramelo · Sentou_valentao · Segredo_Sakuma_Victor · Victor_conta_Kaito · Prazo_Sakuma
 */