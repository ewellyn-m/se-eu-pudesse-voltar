/*
 * =====================================================================
 *  CAPÍTULO 37 — Gotas de chocolate
 *  Sexta-feira, logo depois do Capítulo 36.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Cenas com os cinco meninos em TODAS as rotas. Bloco de rota no fim da tarde.
 *
 *  O QUE ACONTECE
 *    • Madrugada: a SN acorda às quatro e meia para fazer cookies de gota de chocolate para o Kaito.
 *      Ela cozinha muito mal. É uma atrocidade. Farinha no teto, sal no lugar do açúcar, a colher de pau
 *      quebrada (força demais), a primeira fornada queimada. A mãe chega do plantão e encontra a cozinha.
 *      Sobram sete cookies feios. Ela leva assim mesmo.
 *    • Hall: ela esconde o pote atrás das costas e não entrega. O Kaito sente cheiro de fumaça.
 *    • Primeira aula: o trabalho de bacia hidrográfica (o mapa do Ryuji).
 *    • Intervalo: o pote cai na mão dos meninos antes de chegar no Kaito. Degustação trágica.
 *      O Kaito chega, pega o pote e come todos os que sobraram. "São meus." A Serena vê.
 *    • Saída: "Da próxima vez, faz comigo."
 *    • Bloco de rota no fim da tarde.
 *
 *  REGRAS
 *    • Sala da SN: Takeo, Mio, Hana, Reina, Ren, Akane. Os outros meninos e a Serena são de outras salas.
 *    • O Kaito busca a SN de moto todo dia. Sem xadrez no Ren. O Ren não manda mensagem.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Mio, Hana, Reina, Akane, Kaito, Takeo, Victor, Blake, Ryuji, Ren, Serena, Mãe, Tio do Kaito.
 *    Sem nome / rótulo: Professora de geografia.
 *
 *  CENÁRIOS
 *    Cozinha da SN / hall → "apartamento" · Escola: saida-colegio, sala-de-aula, patio-fundos, corredor
 *    Lojinha / rua → "beco-mercado" · Quarto → "quarto-sn"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Rota_*, Muda_alguma_coisa, Ficou_esperando_Kaito, Contou_Serena_gosta.
 *
 *  Crie a entrada "capitulo37" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo37", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — A ATROCIDADE =================== */
    // Cenário: cozinha da SN, madrugada (usa "apartamento"). Música: suspense de filme de terror, depois cômica.
    c1_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Sexta, 4h30 — Cena 1", sprite: null, texto: "Quatro e meia da manhã. O despertador toca baixinho, embaixo do travesseiro, para não acordar ninguém, mesmo que não tenha ninguém em casa, porque a mãe está no plantão até as sete.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "Ela abre os olhos. Fica olhando para o teto escuro. E lembra da decisão que tomou à meia-noite, deitada, lendo pela décima vez a mensagem “Cortei cebolinha. Você vem?”.", proxima: "c1_03" },
    c1_03: { tipo: "pensamento", texto: "A Serena acordou às cinco pra fazer yakisoba. Três vezes. Eu acordo às quatro e meia.", proxima: "c1_04" },
    c1_04: { tipo: "pensamento", texto: "Eu não estou competindo. Eu só vou fazer um agradecimento. Pelas cebolinhas. Pelo pão de queijo. Pela fita preta. Um agradecimento normal de amiga normal às quatro e meia da manhã.", proxima: "c1_05" },
    c1_05: { tipo: "pensamento", texto: "Cookies. Com gota de chocolate. Todo mundo gosta. Não tem cenoura. É impossível dar errado.", proxima: "c1_06" },
    c1_06: { tipo: "pensamento", texto: "Eu tenho vinte e oito anos por dentro e nunca fiz um cookie na vida. Mas eu vi um vídeo ontem. Duas vezes.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", cenario: "cozinha-sn-noite", transicao: "tempo", legenda: "4h40", texto: "Na cozinha, ela acende a luz. Coloca o celular encostado no pote de açúcar, com o vídeo da receita aberto. Uma moça sorridente numa cozinha branca perfeita diz que “é tão fácil que até uma criança faz”.", proxima: "c1_08" },
    c1_08: { quem: "eu", texto: "Ótimo. Eu sou uma criança. Legalmente. Isso vai dar certo.", proxima: "c1_09" },
    c1_09: { tipo: "narracao", texto: "Passo um: farinha. Ela abre o pacote de farinha com força demais. O pacote não abre. O pacote explode. Uma nuvem branca sobe até o teto, cobre o armário, o fogão, o celular, o cabelo dela, e desce devagar, como neve.", proxima: "c1_10" },
    c1_10: { tipo: "narracao", texto: "Ela fica parada no meio da nuvem, toda branca, com os olhos piscando. Lá no celular, embaixo da farinha, a moça sorridente continua falando que é muito fácil.", proxima: "c1_11" },
    c1_11: { tipo: "pensamento", texto: "Eu esqueci que eu tenho a força da família. Pacote de farinha não é feito pra força da família.", proxima: "c1_12" },
    c1_12: { tipo: "narracao", texto: "Passo dois: manteiga e açúcar. Ela pega o pote branco do armário, aquele do lado do pote branco, e coloca duas xícaras na tigela. Mistura com a colher de pau.", proxima: "c1_13" },
    c1_13: { tipo: "narracao", efeito: "tremor", texto: "A manteiga está dura de geladeira. Ela mistura com mais força. E mais. A colher de pau faz um estalo e parte ao meio, e metade fica dentro da massa, em pé, como uma bandeira de rendição.", proxima: "c1_14" },
    c1_14: { quem: "eu", texto: "...Não. Não, não, não. Colher, não.", proxima: "c1_15" },
    c1_15: { tipo: "narracao", texto: "Ela pega outra colher. De metal. Mistura com muito cuidado, com a força de quem segura passarinho, como o Victor ensinou. A colher entorta só um pouquinho. Ela finge que não viu.", proxima: "c1_16" },
    c1_16: { tipo: "narracao", texto: "Passo três: ovo. Ela quebra o ovo na borda da tigela. O ovo não quebra. O ovo é esmagado. Gema, clara e casca caem dentro da massa ao mesmo tempo, em pedacinhos. Ela passa cinco minutos catando casca com a ponta do garfo.", proxima: "c1_17" },
    c1_17: { tipo: "narracao", texto: "Passo quatro: gotas de chocolate. Essa parte é fácil. Ela despeja o pacote inteiro. Depois pega um punhado e come. Depois pega outro. Depois percebe que comeu metade.", proxima: "c1_18" },
    c1_18: { tipo: "narracao", texto: "Ela prova a massa com a ponta do dedo. Para. Faz uma cara. Prova de novo.", proxima: "c1_19" },
    c1_19: { tipo: "pensamento", texto: "Está salgado. Por que está salgado? Cookie não é salgado. Eu coloquei açúcar. Eu peguei o pote branco do lado do...", proxima: "c1_20" },
    c1_20: { tipo: "narracao", texto: "Ela olha para o armário. Tem dois potes brancos iguais, um do lado do outro. Um com uma etiqueta que diz “AÇÚCAR”, na letra da mãe. Outro com uma etiqueta que diz “SAL”, na letra da mãe. O pote do sal está aberto.", proxima: "c1_21" },
    c1_21: { tipo: "pensamento", texto: "Ele colocou o café no sal. Eu coloquei o sal no cookie. A gente é perfeito um pro outro. Que desastre.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — O sal
    c1_esc1: { escolhas: [
      { texto: "A. Começar tudo de novo. Do zero. Com o pote certo. São só cinco e dez.", proxima: "c1_1a_1", pontos: { kaito: 2 }, flags: ["Recomecou_cookie"] },
      { texto: "B. Compensar. Jogar mais açúcar em cima do sal. Muito açúcar. Química resolve.", proxima: "c1_1b_1", pontos: { kaito: 1 }, flags: ["Compensou_acucar"] },
      { texto: "C. Ligar pra Mio às cinco da manhã. Desesperada.", proxima: "c1_1c_1", pontos: { mio: 2, kaito: 1 }, flags: ["Ligou_Mio_cookie"] }
    ]},
    c1_1a_1: { tipo: "narracao", texto: "Ela joga a massa fora, com a meia colher de pau junto, e começa tudo de novo. Farinha, agora abrindo o pacote com uma tesoura. Manteiga, agora derretida no micro-ondas. Açúcar, do pote certo, conferindo a etiqueta três vezes. O ovo ela quebra com uma faca, de longe, como quem desarma uma bomba.", proxima: "c1_1a_2" },
    c1_1a_2: { tipo: "pensamento", texto: "Segunda tentativa. A Serena fez três. Eu estou na segunda. Eu não estou competindo.", proxima: "c1_22" },
    c1_1b_1: { tipo: "narracao", texto: "Ela pega o pote certo e despeja açúcar em cima da massa salgada. Uma xícara. Duas. Três. Prova. Ainda salgado, só que agora também doce, as duas coisas ao mesmo tempo, brigando dentro da boca dela.", proxima: "c1_1b_2" },
    c1_1b_2: { tipo: "pensamento", texto: "É um sabor novo. É gourmet. Tem restaurante que cobra caro por isso. Caramelo salgado existe. Cookie salgado-doce pode existir.", proxima: "c1_22" },
    c1_1c_1: { tipo: "narracao", texto: "Ela liga. A Mio atende no sexto toque, com a voz de quem estava no fundo de um sonho.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "mio", texto: "...Quem morreu?", proxima: "c1_1c_3" },
    c1_1c_3: { quem: "eu", texto: "Ninguém. Ainda. Mio, eu coloquei sal no cookie no lugar do açúcar e quebrei a colher de pau e explodi a farinha e o meu cabelo está branco.", proxima: "c1_1c_4" },
    c1_1c_4: { quem: "mio", texto: "Você está fazendo cookie? Às cinco da manhã? Pra quem?", proxima: "c1_1c_5" },
    c1_1c_5: { tipo: "narracao", texto: "Silêncio. Do outro lado da linha, dá para ouvir a Mio acordar inteira de uma vez.", proxima: "c1_1c_6" },
    c1_1c_6: { quem: "mio", texto: "...Ah. AH. É pro Kaito. Por causa do yakisoba. Joga fora, começa de novo, abre a farinha com tesoura, e me manda foto. Muitas fotos. Isso é o melhor dia da minha vida.", proxima: "c1_22" },

    // (todas as opções continuam aqui)
    c1_22: { tipo: "narracao", transicao: "tempo", legenda: "6h10", texto: "Seis e dez. A primeira fornada entra no forno. Ela senta no chão da cozinha, encostada no armário, toda branca de farinha, e fica olhando pela portinha do forno, com o cronômetro do celular ligado.", proxima: "c1_23" },
    c1_23: { tipo: "narracao", texto: "Ela fecha os olhos. Só um minuto. Ela dormiu quatro horas. Só um minutinho.", proxima: "c1_24" },
    c1_24: { tipo: "narracao", efeito: "tremor", texto: "O cheiro acorda ela. Não é cheiro de cookie. É cheiro de fumaça. Uma fumaça preta saindo pela borda da portinha do forno, subindo até o teto, onde a farinha ainda está grudada.", proxima: "c1_25" },
    c1_25: { quem: "eu", texto: "NÃO!", proxima: "c1_26" },
    c1_26: { tipo: "narracao", texto: "Ela abre o forno. A fumaça sai de uma vez, no rosto dela. Ela tira a forma com o pano de prato. Doze círculos pretos, perfeitamente redondos, duros como carvão, fumegando. O cronômetro do celular continua contando, porque ela esqueceu de dar o play.", proxima: "c1_27" },
    c1_27: { tipo: "narracao", texto: "Ela abre a janela da cozinha. Abana a fumaça com o pano. E nesse exato momento, a porta da sala abre.", proxima: "c1_28" },
    c1_28: { sprite: "mae", quem: "mae", texto: "Cheguei, filha, o plantão foi um inferno, eu vou dormir até...", proxima: "c1_29" },
    c1_29: { tipo: "narracao", texto: "A mãe para na porta da cozinha. De uniforme de hospital, com a bolsa no ombro, com a cara cansada de doze horas acordada. Ela olha para o teto branco de farinha. Para a fumaça saindo pela janela. Para a meia colher de pau na lixeira. Para a colher de metal entortada. Para a filha, branca da cabeça aos pés, segurando uma forma com doze pedaços de carvão.", proxima: "c1_30" },
    c1_30: { tipo: "narracao", texto: "Silêncio. Muito silêncio.", proxima: "c1_31" },
    c1_31: { quem: "mae", texto: "...Eu trabalhei doze horas num pronto-socorro. Eu vi uma fratura exposta, uma intoxicação e um homem que engoliu uma chave. E isso aqui ainda é a coisa mais assustadora da minha noite.", proxima: "c1_32" },
    c1_32: { quem: "eu", texto: "Eu estou fazendo cookies.", proxima: "c1_33" },
    c1_33: { quem: "mae", texto: "Isso eu estou vendo. Pra quem?", proxima: "c1_34" },
    c1_34: { tipo: "narracao", texto: "A SN não responde. A mãe olha para o relógio da cozinha. Seis e vinte e cinco. Ela sabe que horas o Kaito chega. Ela sabe quem chega às sete. Ela já costurou a sobrancelha dele.", proxima: "c1_35" },
    c1_35: { quem: "mae", texto: "Ah. Tá. Entendi.", proxima: "c1_36" },
    c1_36: { tipo: "narracao", texto: "Ela larga a bolsa na cadeira. Tira o casaco. Lava as mãos na pia, com sabão, como enfermeira, até o cotovelo. E pega uma tigela limpa.", proxima: "c1_37" },
    c1_37: { quem: "mae", texto: "Sobrou massa?", proxima: "c1_38" },
    c1_38: { quem: "eu", texto: "Sobrou um pouco.", proxima: "c1_39" },
    c1_39: { quem: "mae", texto: "Então vem. Forno a cento e oitenta, não a duzentos e cinquenta. E você vai ficar em pé do lado dele, olhando, sem sentar no chão. Eu te conheço. Você dorme em qualquer lugar.", proxima: "c1_40" },
    c1_40: { cenario: "cozinha", tipo: "narracao", texto: "Às seis e cinquenta e dois, sai a segunda fornada. Sete cookies. Tortos. Cada um de um tamanho. Um parece um coração, se você olhar de lado e com boa vontade. Outro parece o mapa do Brasil. Todos com gotas de chocolate demais de um lado e nenhuma do outro.", proxima: "c1_41" },
    c1_41: { tipo: "narracao", texto: "Mas são marrons, e não pretos. E cheiram a cookie, e não a incêndio. A mãe prova um pedacinho da borda. Mastiga. Faz uma cara que é metade enfermeira e metade mãe.", proxima: "c1_42" },
    c1_42: { quem: "mae", texto: "...Comestível. Leva. Ele vai comer. Eles sempre comem.", proxima: "c1_43" },
    c1_43: { tipo: "narracao", texto: "Ela beija a testa da filha, cheia de farinha, e vai para o quarto arrastando o chinelo. Da porta, sem virar, ela fala mais uma coisa.", proxima: "c1_44" },
    c1_44: { quem: "mae", texto: "E a cozinha você limpa hoje à tarde. Inteira. Incluindo o teto.", proxima: "c1_45" },
    c1_45: { sprite: null, tipo: "narracao", texto: "A SN coloca os sete cookies num pote de plástico com tampa azul, o único limpo que sobrou. Corre para o banheiro. Lava o rosto, tira farinha do cabelo, da orelha, de dentro da gola. Troca de uniforme. São sete horas em ponto. O celular vibra.", proxima: "c2_01" },

    /* =================== CENA 2 — ATRÁS DAS COSTAS =================== */
    // Cenário: hall do prédio, 7h. Música: leve, nervosa.
    c2_01: { roupa: "escolar", tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", legenda: "7h — Cena 2", sprite: "kaito", texto: "No hall, o Kaito está no lugar de sempre, no pé dos três degraus com a fita preta, com o capacete vermelho no braço e o saquinho de pão de queijo. Ela desce com o pote de tampa azul escondido atrás das costas.", proxima: "c2_cam" },
    c2_cam: { caminhos: [
      { flag: "Ficou_esperando_Kaito", proxima: "c2_dois" },
      { flag: "Muda_alguma_coisa", proxima: "c2_muda" }
    ], proxima: "c2_02" },
    c2_dois: { tipo: "pensamento", texto: "“Pra dois.” Ontem à noite, aqui, no mesmo degrau. Cebolinha pra dois. Agora eu tenho cookie pra um. Pra ele.", proxima: "c2_02" },
    c2_muda: { tipo: "pensamento", texto: "“Muda tudo.” Ontem à noite, aqui, no mesmo degrau. E aí a luz apagou. Eu tenho certeza de que ele também pensou nisso a noite inteira.", proxima: "c2_02" },
    c2_02: { quem: "kaito", texto: "Bom dia.", proxima: "c2_03" },
    c2_03: { quem: "eu", texto: "Bom dia.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", texto: "Ele cheira o ar. Franze a testa. Chega um pouco mais perto e cheira de novo, perto do cabelo dela.", proxima: "c2_05" },
    c2_05: { quem: "kaito", texto: "Por que você está com cheiro de fumaça?", proxima: "c2_06" },
    c2_06: { quem: "eu", texto: "Fumaça? Que fumaça? Não tem fumaça.", proxima: "c2_07" },
    c2_07: { quem: "kaito", texto: "E farinha. Você tem farinha na orelha.", proxima: "c2_08" },
    c2_08: { tipo: "narracao", texto: "Ele estica a mão e tira, com a ponta do dedo, um pouco de farinha de trás da orelha dela. Devagar. O dedo dele encosta na pele. Ela para de respirar. O pote atrás das costas quase cai.", proxima: "c2_09" },
    c2_09: { quem: "kaito", texto: "Você estava cozinhando?", proxima: "c2_10" },
    c2_10: { tipo: "pensamento", texto: "Entrega. Entrega agora. Tira o pote de trás das costas e fala “fiz pra você”. Três palavras. Você enfrentou doze da Midorata.", proxima: "c2_11" },
    c2_11: { tipo: "pensamento", texto: "Ele vai abrir. Ele vai ver o cookie em formato de mapa do Brasil. Ele vai provar. E se estiver ruim? E se ele fizer cara? E se ele disser “valeu” igual disse pra Serena dois anos seguidos?", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — No hall
    c2_esc2: { escolhas: [
      { texto: "A. “Não. Foi a minha mãe. Ela queimou uma coisa.” E continuar escondendo o pote.", proxima: "c2_2a_1", pontos: {}, flags: ["Culpou_mae"] },
      { texto: "B. “Um pouco.” E continuar escondendo o pote.", proxima: "c2_2b_1", pontos: { kaito: 1 }, flags: ["Um_pouco"] },
      { texto: "C. Quase tirar o pote. Ver a mão dele ainda perto da orelha dela. Perder a coragem. “Vamos atrasar.”", proxima: "c2_2c_1", pontos: { kaito: 1 }, flags: ["Quase_entregou"] }
    ]},
    c2_2a_1: { quem: "eu", texto: "Não. Foi a minha mãe. Ela queimou uma coisa.", proxima: "c2_2a_2" },
    c2_2a_2: { tipo: "pensamento", texto: "Desculpa, mãe. Você me salvou às seis e meia e eu te joguei embaixo do ônibus às sete.", proxima: "c2_2a_3" },
    c2_2a_3: { quem: "kaito", texto: "Ela está bem? Ela se queimou?", proxima: "c2_2a_4" },
    c2_2a_4: { quem: "eu", texto: "Ela está ótima. Ela está dormindo. Ela é enfermeira. Ela se cuida.", proxima: "c2_12" },
    c2_2b_1: { quem: "eu", texto: "Um pouco.", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "kaito", texto: "Você cozinha?", proxima: "c2_2b_3" },
    c2_2b_3: { quem: "eu", texto: "Eu estou aprendendo.", proxima: "c2_2b_4" },
    c2_2b_4: { tipo: "narracao", texto: "Ele olha para ela com aquela cara de quem já viu muita gente cozinhar e sabe exatamente o que cheiro de fumaça às sete da manhã significa. Ele não fala nada. Mas o canto da boca dele treme.", proxima: "c2_12" },
    c2_2c_1: { tipo: "narracao", texto: "A mão dela começa a sair de trás das costas, com o pote. Ele ainda está muito perto, com a mão parada do lado da orelha dela, olhando para ela. Ela vê a boca dele. Lembra do segundo. E a mão volta sozinha para trás das costas.", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "eu", texto: "...Vamos atrasar.", proxima: "c2_12" },

    // (todas as opções continuam aqui)
    c2_12: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", sprite: null, texto: "Na garupa, ela segura na camisa dele com uma mão e o pote dentro da mochila com a outra, abraçando a mochila no colo como se fosse um bebê. No sinal, ele vira a cabeça um pouco.", proxima: "c2_13" },
    c2_13: { quem: "kaito", texto: "Por que você está segurando a mochila assim?", proxima: "c2_14" },
    c2_14: { quem: "eu", texto: "Tem um trabalho de geografia dentro. Dez páginas. Com mapa. É frágil.", proxima: "c2_15" },
    c2_15: { tipo: "pensamento", texto: "Não é mentira. O trabalho também está dentro. Do lado de sete cookies em formato de desastre.", proxima: "c2_16" },
    c2_16: { tipo: "narracao", texto: "Na frente da escola, no meio-fio do portão, a Serena está no muro. Hoje com uma caixinha de papelão rosa na mão, amarrada com fita. Ela acena para o Kaito. Ele acena de volta, porque agora ele sabe o nome dela.", proxima: "c2_17" },
    c2_17: { tipo: "pensamento", texto: "Uma caixa rosa. Com fita. Ela tem caixa. Eu tenho um pote de plástico com tampa azul que era da marmita da minha mãe.", proxima: "c2_18" },
    c2_18: { tipo: "pensamento", texto: "Eu não estou competindo.", proxima: "c3_01" },

    /* =================== CENA 3 — DEZ PÁGINAS =================== */
    // Cenário: sala de aula, primeira aula. Música: tensa, depois vitoriosa.
    c3_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Geografia — Cena 3", sprite: "mio", texto: "Primeira aula. Geografia. A Mio está com olheira até o queixo, mas com o rosto brilhando, segurando as três páginas e meia dela como quem segura um troféu.", proxima: "c3_02" },
    c3_02: { quem: "mio", texto: "Eu fiz até as duas da manhã. Eu sonhei com afluente. Eu sei o que é jusante. Eu nunca mais vou esquecer o que é jusante. E você? Me manda as fotos do cookie. Você não mandou.", proxima: "c3_03" },
    c3_03: { quem: "eu", texto: "Depois.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", sprite: null, texto: "A professora de geografia entra, com o coque perfeito e a caneta vermelha atrás da orelha. Para na mesa delas. Estende a mão sem falar nada.", proxima: "c3_05" },
    c3_05: { tipo: "narracao", texto: "Elas entregam. Dez páginas, juntas com grampo. A professora folheia ali mesmo, em pé, na frente de todo mundo, devagar. Para na última. No mapa.", proxima: "c3_06" },
    c3_06: { tipo: "narracao", texto: "O mapa do Ryuji. A bacia do São Francisco, com a régua do Takeo, colorida com o lápis de cor do estojo do Takeo, cada afluente com o nome escrito em letra de eletrocardiograma, e no canto, bem pequeno, um bonequinho de bombeiro segurando uma placa: “JUSANTE →”.", proxima: "c3_07" },
    c3_07: { quem: "desconhecido", rotulo: "Professora de geografia", texto: "...Quem fez esse mapa?", proxima: "c3_08" },
    c3_08: { quem: "eu", texto: "Um consultor externo.", proxima: "c3_09" },
    c3_09: { tipo: "narracao", texto: "A professora olha para ela por cima do mapa. A sala inteira prende a respiração. Ela pega a caneta vermelha de trás da orelha.", proxima: "c3_10" },
    c3_10: { quem: "desconhecido", rotulo: "Professora de geografia", texto: "Diga pro consultor externo que é o melhor mapa de bacia que eu recebi em onze anos. E que bombeiro de placa é desnecessário, mas eu gostei.", proxima: "c3_11" },
    c3_11: { tipo: "narracao", texto: "Ela escreve alguma coisa na última página. Devolve para a mesa. Volta para o quadro. A Mio pega o trabalho com as duas mãos. Na última página, em vermelho: “9,5. Parem de conversar.”", proxima: "c3_12" },
    c3_12: { quem: "mio", sprite: "mio", texto: "NOVE E MEIO.", proxima: "c3_13" },
    c3_13: { quem: "desconhecido", rotulo: "Professora de geografia", texto: "Mio.", proxima: "c3_14" },
    c3_14: { tipo: "narracao", sprite: "takeo:machucado", texto: "A Mio tapa a boca com o trabalho. Da carteira de trás, o Takeo cutuca o ombro da SN e mostra o polegar para cima, com a mão boa, sorrindo. Depois cheira o ar.", proxima: "c3_15" },
    c3_15: { quem: "takeo", sprite: "takeo:machucado", texto: "...Por que você está com cheiro de cookie queimado?", proxima: "c3_16" },
    c3_16: { quem: "eu", texto: "Por que todo mundo hoje tem o nariz de perdigueiro?", proxima: "c3_17" },
    c3_17: { quem: "takeo", sprite: "takeo:machucado", texto: "A sua mochila está com cheiro de chocolate. E de fumaça. É um cheiro muito específico. A minha avó queimou um bolo assim uma vez, no meu aniversário. Eu comi o bolo inteiro e disse que estava perfeito.", proxima: "c3_18" },
    c3_18: { tipo: "narracao", texto: "Ele fala isso sem saber de nada, e volta para o caderno. A SN fica olhando para a mochila, abraçada no colo dela, com o pote de tampa azul dentro.", proxima: "c3_19" },
    c3_19: { tipo: "narracao", sprite: "ren", texto: "Na carteira perto da porta, o Ren também levanta os olhos. Para a mochila dela. Ele sentiu o cheiro também. Ele olha para a mochila, depois para ela, um segundo, e volta para o livro. A página dele não vira mais a aula inteira.", proxima: "c3_20" },
    c3_20: { tipo: "pensamento", texto: "Ele sabe que é pro Kaito. Ele sempre sabe.", proxima: "c4_01" },

    /* =================== CENA 4 — A DEGUSTAÇÃO =================== */
    // Cenário: pátio dos fundos, intervalo. Música: comédia.
    c4_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Intervalo — Cena 4", sprite: null, texto: "No intervalo, ela desce para o pátio dos fundos com a mochila no ombro e um plano. O plano é: ir até o banco da árvore torta, onde o Kaito sempre come. Tirar o pote. Entregar. Falar “fiz pra você, pelas cebolinhas”. Sair andando antes que ele abra.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "O plano dura até a escada do pátio. No banco da árvore torta, não tem Kaito. Tem o Blake, sozinho, com a lancheira térmica azul, ocupando o banco inteiro, guardando o banco.", proxima: "c4_03" },
    c4_03: { quem: "blake", sprite: "blake", texto: "Eu cheguei cedo. Guardei. A Serena veio, eu fiquei. Ela foi embora.", proxima: "c4_04" },
    c4_04: { quem: "eu", texto: "Cadê o Kaito?", proxima: "c4_05" },
    c4_05: { quem: "blake", texto: "Foi chamado na coordenação. Por causa da advertência do Victor, de terça. O Victor falou que o líder era testemunha do espirro. Ele está lá explicando o que é um espirro de gatinho pra coordenadora.", proxima: "c4_06" },
    c4_06: { tipo: "narracao", texto: "Ela senta no banco do lado do Blake, com a mochila no colo. Ele cheira o ar. Olha para a mochila.", proxima: "c4_07" },
    c4_07: { quem: "blake", texto: "Cookie. Queimado.", proxima: "c4_08" },
    c4_08: { quem: "eu", texto: "Não está queimado! Quer dizer. Os que estão aqui não estão queimados. Os queimados ficaram em casa.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "E é aí que dá tudo errado, porque do outro lado do pátio, vindo da cantina, aparecem o Victor e o Ryuji, juntos, e o Victor tem o nariz mais rápido da escola.", proxima: "c4_10" },
    c4_10: { sprite: "victor", quem: "victor", texto: "Eu sinto cheiro de chocolate. Eu sinto cheiro de chocolate a quinze metros. É o meu dom. Igual o inspetor.", proxima: "c4_11" },
    c4_11: { quem: "ryuji", sprite: "ryuji", texto: "E de fumaça! Isso é cheiro de incêndio classe A! Material sólido! Alguém queimou alguma coisa!", proxima: "c4_12" },
    c4_12: { tipo: "narracao", sprite: null, texto: "Os dois chegam no banco ao mesmo tempo. O Victor vê o pote de tampa azul saindo da mochila aberta antes que ela consiga fechar o zíper. E pega. Com a velocidade de quem já roubou muito pirulito na vida.", proxima: "c4_13" },
    c4_13: { quem: "eu", texto: "Victor! Devolve! Isso não é pra...", proxima: "c4_14" },
    c4_14: { tipo: "narracao", texto: "Tarde demais. Ele abriu a tampa. Os quatro olham para dentro do pote ao mesmo tempo. O Takeo, que acabou de chegar mancando, também olha, por cima do ombro do Blake.", proxima: "c4_15" },
    c4_15: { tipo: "narracao", texto: "Sete cookies. Tortos. Um que parece um coração, se você olhar de lado. Um que parece o mapa do Brasil. Gotas de chocolate demais de um lado, nenhuma do outro. Um levemente esverdeado, ninguém sabe por quê.", proxima: "c4_16" },
    c4_16: { sprite: "victor", quem: "victor", texto: "...Gatinha. SN. Você fez isso?", proxima: "c4_17" },
    c4_17: { quem: "ryuji", sprite: "ryuji", texto: "Eu vou provar. Bombeiro tem que avaliar a cena.", proxima: "c4_18" },
    c4_18: { tipo: "narracao", sprite: null, texto: "Antes que ela consiga impedir, cada um pega um. O Ryuji, o Victor, o Blake, o Takeo. Quatro cookies sumindo do pote. Sobram três.", proxima: "c4_19" },
    c4_19: { tipo: "narracao", texto: "O Ryuji morde primeiro. Para. O rosto dele faz uma viagem. Começa feliz. Passa por confuso. Passa por uma coisa que parece dor física. Termina numa cara de quem está segurando o choro com muita dignidade.", proxima: "c4_20" },
    c4_20: { quem: "ryuji", sprite: "ryuji", texto: "...É crocante. É muito crocante. É crocante de um jeito que eu acho que eu perdi um dente. Eu vou checar. Não, está aqui. Ainda está aqui.", proxima: "c4_21" },
    c4_21: { sprite: "victor", quem: "victor", texto: "O meu é salgado. Por que o meu é salgado e doce ao mesmo tempo? É uma experiência. É uma experiência religiosa. Eu vi Deus. Deus me pediu um copo de água.", proxima: "c4_22" },
    c4_22: { quem: "takeo", sprite: "takeo:machucado", texto: "O meu está... bom. Está bom. Está ótimo. É o melhor cookie que eu já comi. Eu estou falando sério.", proxima: "c4_23" },
    c4_23: { quem: "victor", texto: "Takeo, você está chorando.", proxima: "c4_24" },
    c4_24: { quem: "takeo", sprite: "takeo:machucado", texto: "É de emoção!", proxima: "c4_25" },
    c4_25: { tipo: "narracao", sprite: "blake", texto: "O Blake come o dele inteiro. Devagar. Em silêncio. Mastigando muito tempo, com a cara séria, olhando para a árvore torta, sem nenhuma expressão. Quando termina, ele engole, fica parado mais um segundo, e fala.", proxima: "c4_26" },
    c4_26: { quem: "blake", texto: "Quantas vezes você fez?", proxima: "c4_27" },
    c4_27: { quem: "eu", texto: "...Duas. A primeira virou carvão.", proxima: "c4_28" },
    c4_28: { quem: "blake", texto: "A segunda está melhor que a primeira.", proxima: "c4_29" },
    c4_29: { tipo: "narracao", texto: "Ele fala isso sério, e é a coisa mais gentil e mais devastadora que alguém já disse para ela. Os outros três explodem de rir. O Victor bate no joelho. O Ryuji deita no chão do pátio. O Takeo ri e pede desculpa ao mesmo tempo.", proxima: "c4_esc3" },

    // ▶ ESCOLHA 3 — A degustação
    c4_esc3: { escolhas: [
      { texto: "A. Rir junto. Muito. “Eu sei! Eu sei que está horrível! Eu quebrei a colher de pau!”", proxima: "c4_3a_1", pontos: { ryuji: 1, victor: 1, blake: 1, takeo: 1 }, flags: ["Riu_junto"] },
      { texto: "B. Arrancar o pote da mão do Victor. “Não era pra vocês!” Vermelha até a orelha.", proxima: "c4_3b_1", pontos: { kaito: 1 }, flags: ["Nao_era_pra_voces"] },
      { texto: "C. Cruzar os braços. “Vocês quatro vão pedir desculpa pro cookie.”", proxima: "c4_3c_1", pontos: { ryuji: 1, victor: 1 }, flags: ["Desculpa_cookie"] }
    ]},
    c4_3a_1: { quem: "eu", texto: "Eu sei! Eu sei que está horrível! Eu quebrei a colher de pau! Eu explodi a farinha! A minha mãe chegou do plantão e disse que foi a coisa mais assustadora da noite dela!", proxima: "c4_3a_2" },
    c4_3a_2: { tipo: "narracao", texto: "Ela ri tanto que perde o ar. Os quatro riem mais ainda. O Ryuji, deitado no chão, levanta o braço e pede, sem fôlego, para ela contar de novo a parte da colher. O Blake, do lado, ri em silêncio, sacudindo os ombros, olhando para ela com uma coisa no rosto que parece muito com carinho.", proxima: "c4_30" },
    c4_3b_1: { tipo: "narracao", texto: "Ela arranca o pote da mão do Victor e fecha a tampa. Fica segurando no peito, vermelha da testa até o pescoço.", proxima: "c4_3b_2" },
    c4_3b_2: { quem: "eu", texto: "Não era pra vocês!", proxima: "c4_3b_3" },
    c4_3b_3: { tipo: "narracao", texto: "Silêncio. Os quatro param de rir ao mesmo tempo. Olham para ela. Para o pote. Para ela de novo. E os quatro, ao mesmo tempo, sem precisar falar, entendem para quem era.", proxima: "c4_3b_4" },
    c4_3b_4: { quem: "victor", texto: "...Ah. Ahhh. Desculpa. Desculpa, cookie. Desculpa, SN. Eu comi o cookie de outra pessoa.", proxima: "c4_30" },
    c4_3c_1: { quem: "eu", texto: "Vocês quatro vão pedir desculpa pro cookie.", proxima: "c4_3c_2" },
    c4_3c_2: { tipo: "narracao", texto: "Ela fala muito séria, de braços cruzados. Os quatro se olham. E, um por um, eles fazem. O Ryuji se ajoelha no chão do pátio. O Victor faz uma reverência de garçom. O Takeo abaixa a cabeça com a mão no peito. O Blake só fala “desculpa”, muito sério, olhando para o pote.", proxima: "c4_3c_3" },
    c4_3c_3: { quem: "ryuji", sprite: "ryuji", texto: "Desculpa, cookie. Você foi muito corajoso. Você sobreviveu ao forno. Nós não merecíamos você.", proxima: "c4_30" },

    // (todas as opções continuam aqui)
    c4_30: { tipo: "narracao", sprite: "kaito", texto: "E, no meio disso, ele chega. O Kaito, vindo da coordenação, com a mochila num ombro só, cansado, com a cara de quem passou vinte minutos explicando espirro de gatinho para uma coordenadora sem senso de humor.", proxima: "c4_31" },
    c4_31: { tipo: "narracao", texto: "Ele vê o Ryuji deitado no chão. O Victor com farelo no queixo. O Takeo com lágrima de emoção no olho. O Blake sério. E a SN, em pé, com um pote de tampa azul na mão, com três cookies tortos dentro.", proxima: "c4_32" },
    c4_32: { quem: "kaito", texto: "...O que é isso?", proxima: "c4_33" },
    c4_33: { tipo: "narracao", texto: "Ninguém responde. Os quatro olham para a SN. A SN olha para o pote. O pátio inteiro, que já estava assistindo porque a rede de fofoca nunca dorme, fica em silêncio.", proxima: "c4_34" },
    c4_34: { tipo: "narracao", sprite: "serena", texto: "Do outro lado do pátio, perto da cantina, com a caixinha rosa de fita ainda na mão, parada, a Serena. Ela estava vindo para o banco. Ela parou no meio do caminho quando viu o pote.", proxima: "c4_35" },
    c4_35: { tipo: "pensamento", texto: "Agora. É agora. Ou eu entrego, ou eu jogo o pote no lixo e me mudo pra outra cidade.", proxima: "c4_36" },
    c4_36: { tipo: "narracao", sprite: "kaito", texto: "Ela estende o pote. Para ele. Com o braço esticado, sem olhar para a cara dele, olhando para o botão da camisa dele.", proxima: "c4_37" },
    c4_37: { quem: "eu", texto: "Fiz pra você. Pelas cebolinhas. E pelo pão de queijo. E pela fita preta. Eles comeram quatro. Sobraram três. Estão ruins. Pode jogar fora.", proxima: "c4_38" },
    c4_38: { tipo: "narracao", texto: "O Kaito olha para o pote. Pega. Abre a tampa. Olha para os três cookies. O que parece um coração. O que parece o mapa do Brasil. O levemente esverdeado.", proxima: "c4_39" },
    c4_39: { quem: "kaito", texto: "Você acordou que horas?", proxima: "c4_40" },
    c4_40: { quem: "eu", texto: "...Quatro e meia.", proxima: "c4_41" },
    c4_41: { tipo: "narracao", texto: "Ele não fala nada. Pega o cookie do mapa do Brasil. Morde. Mastiga. Não faz cara nenhuma. Não para. Morde de novo. Termina. Pega o do coração. Come também. Inteiro. Pega o esverdeado.", proxima: "c4_42" },
    c4_42: { quem: "ryuji", sprite: "ryuji", texto: "Líder, esse é verde. Ninguém sabe por que ele é verde.", proxima: "c4_43" },
    c4_43: { tipo: "narracao", sprite: "kaito", texto: "O Kaito come o verde. Os três. Sem parar. Sem beber água. Sem fazer cara. Na frente do pátio inteiro. Na frente da Serena, parada com a caixa rosa na mão.", proxima: "c4_44" },
    c4_44: { tipo: "narracao", texto: "Quando termina, ele fecha a tampa do pote vazio. Olha para a SN. E fala, com a boca ainda um pouco cheia, com farelo no canto do lábio.", proxima: "c4_45" },
    c4_45: { quem: "kaito", texto: "São meus.", proxima: "c4_46" },
    c4_46: { tipo: "narracao", texto: "Ele não está falando com ela. Ele está falando com os quatro. Olhando para o Victor, que comeu um. Para o Ryuji. Para o Takeo. Para o Blake.", proxima: "c4_47" },
    c4_47: { quem: "kaito", texto: "Da próxima vez que ela fizer cookie, ninguém come. São meus.", proxima: "c4_48" },
    c4_48: { tipo: "narracao", sprite: null, texto: "Silêncio. O Victor ergue as duas mãos, rendido. O Ryuji, do chão, faz continência. O Takeo olha para baixo. O Blake só olha para o Kaito, muito tempo, e depois para a SN, e não fala nada.", proxima: "c4_49" },
    c4_49: { tipo: "narracao", texto: "Do outro lado do pátio, a Serena abaixa a caixinha rosa. Fica parada mais um segundo. Depois vira, joga o cabelo por cima do ombro, e vai embora com as amigas, sem olhar para trás.", proxima: "c4_50" },
    c4_50: { tipo: "pensamento", texto: "Ele comeu. Os três. O verde também. Eles estavam horríveis. Ele sabe que estavam horríveis. O Ryuji quase perdeu um dente.", proxima: "c4_51" },
    c4_51: { tipo: "pensamento", texto: "E ele disse “são meus”.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — "São meus"
    c4_esc4: { escolhas: [
      { texto: "A. “Estavam horríveis, Kaito.”", proxima: "c4_4a_1", pontos: { kaito: 2 }, flags: ["Estavam_horriveis"] },
      { texto: "B. Tirar o farelo do canto da boca dele com o polegar. Sem falar nada.", proxima: "c4_4b_1", pontos: { kaito: 3 }, flags: ["Farelo_Kaito"] },
      { texto: "C. Pegar o pote vazio da mão dele. “Eu faço de novo. Melhor.”", proxima: "c4_4c_1", pontos: { kaito: 3 }, flags: ["Faco_de_novo"] }
    ]},
    c4_4a_1: { quem: "eu", texto: "Estavam horríveis, Kaito.", proxima: "c4_4a_2" },
    c4_4a_2: { quem: "kaito", texto: "Estavam.", proxima: "c4_4a_3" },
    c4_4a_3: { quem: "eu", texto: "Então por que você comeu os três?", proxima: "c4_4a_4" },
    c4_4a_4: { tipo: "narracao", texto: "Ele olha para ela. Não responde. Mas o canto da boca dele sobe, só um pouco, e as orelhas ficam vermelhas, na frente de todo mundo, e ele não tenta esconder.", proxima: "c4_52" },
    c4_4b_1: { tipo: "narracao", texto: "Ela levanta a mão e tira o farelo do canto da boca dele com o polegar. Devagar. O polegar encosta no lábio dele. Um segundo. Talvez nem isso.", proxima: "c4_4b_2" },
    c4_4b_2: { tipo: "narracao", texto: "O Kaito fica completamente parado. Os quatro meninos ficam completamente parados. O pátio inteiro faz um barulho coletivo, um “oooh” abafado, como plateia de novela. Ela percebe o que fez na frente de todo mundo, e tira a mão, e não consegue olhar para ninguém.", proxima: "c4_4b_3" },
    c4_4b_3: { tipo: "pensamento", texto: "Um segundo. De novo. Eu tenho um problema com segundos.", proxima: "c4_52" },
    c4_4c_1: { tipo: "narracao", texto: "Ela pega o pote vazio da mão dele. Abraça no peito.", proxima: "c4_4c_2" },
    c4_4c_2: { quem: "eu", texto: "Eu faço de novo. Melhor.", proxima: "c4_4c_3" },
    c4_4c_3: { quem: "kaito", texto: "Não precisa ser melhor.", proxima: "c4_4c_4" },
    c4_4c_4: { tipo: "narracao", texto: "Ele fala isso baixo, só para ela, mas todo mundo ouve, porque o pátio está em silêncio. Ela sente o rosto esquentar inteiro, até a raiz do cabelo, onde ainda tem um pouco de farinha.", proxima: "c4_52" },

    // (todas as opções continuam aqui)
    c4_52: { tipo: "narracao", texto: "O sinal toca. Ninguém se mexe por um segundo. Depois todo mundo se mexe ao mesmo tempo, fingindo que não estava assistindo.", proxima: "c4_53" },
    c4_53: { sprite: "victor", quem: "victor", texto: "...Eu vou contar isso pros meus netos. Eu vou contar isso pros netos dos meus netos.", proxima: "c5_01" },

    /* =================== CENA 5 — FAZ COMIGO =================== */
    // Cenário: saída e hall. Música: doce.
    c5_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Saída — Cena 5", sprite: null, texto: "O resto do dia passa num borrão. A Mio, na aula de matemática, escreve no caderno dela “SÃO MEUS” em letra de forma, cercado de coraçãozinho, e mostra por baixo da carteira. A Reina vira para trás e faz um sinal de positivo com as duas mãos. A Hana, sem falar nada, desenha uma nova coluna na tabela dela: “Cookies: 1 – Yakisoba: 0”.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", sprite: "kaito", texto: "Na saída, o Kaito está encostado na moto no meio-fio, com o capacete vermelho no braço. O pote de tampa azul, vazio, lavado, está pendurado na mão dele, dentro de um saquinho.", proxima: "c5_03" },
    c5_03: { quem: "kaito", texto: "Eu lavei. Na pia do banheiro masculino. O Ryuji segurou o sabão.", proxima: "c5_04" },
    c5_04: { tipo: "narracao", texto: "Ele estende o pote. Ela pega. Ele não solta logo. Os dois ficam segurando o pote, cada um de um lado, no meio do portão.", proxima: "c5_05" },
    c5_05: { quem: "kaito", texto: "Da próxima vez...", proxima: "c5_06" },
    c5_06: { quem: "eu", texto: "Eu sei. Ninguém come. São seus.", proxima: "c5_07" },
    c5_07: { quem: "kaito", texto: "Não. Da próxima vez, faz comigo. Na lojinha. Eu te ensino. O tio tem forno de verdade. E colher de pau reforçada.", proxima: "c5_08" },
    c5_08: { tipo: "narracao", texto: "Ele solta o pote. Coloca o capacete na cabeça dela, ele mesmo, e fecha a fivela embaixo do queixo dela, devagar, os dedos encostando no pescoço. Ele nunca fez isso antes. Ele sempre só entrega.", proxima: "c5_09" },
    c5_09: { quem: "kaito", texto: "E você explica como quebrou a colher de pau. Eu quero saber. O Victor contou e eu não acreditei.", proxima: "c5_10" },
    c5_10: { tipo: "pensamento", texto: "Eu não posso explicar como eu quebrei a colher de pau. Eu também não sei explicar como eu quebrei a barra de ferro na fábrica. Ele sabe da barra. Ele nunca perguntou.", proxima: "c5_11" },
    c5_11: { quem: "eu", texto: "Manteiga dura de geladeira.", proxima: "c5_12" },
    c5_12: { quem: "kaito", texto: "Tá.", proxima: "c5_13" },
    c5_13: { tipo: "narracao", texto: "Ele não acredita. Ela vê. Ele não pergunta mais. Ele sobe na moto, espera ela subir, e ela segura na camisa dele. E no primeiro sinal, ela muda a mão. Segura na cintura dele. Ele fica duro. Depois, devagar, relaxa.", proxima: "c5_14" },
    c5_14: { tipo: "pensamento", texto: "Eu ainda não falei do hall. Eu ainda não falei do segundo. Mas hoje eu falei com cookie. Cookie horrível. E ele entendeu.", proxima: "r_cam" },

    /* =================== ROTA — SEXTA À TARDE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", legenda: "Sexta, 13h", sprite: "kaito", texto: "Na frente do prédio, ela desce da moto, tira o capacete. Ele não liga a moto de novo. Ele fica sentado, olhando para os três degraus com a fita preta.", proxima: "rk_02" },
    rk_02: { quem: "kaito", texto: "A sua mãe falou que você tem que limpar a cozinha. O teto também.", proxima: "rk_03" },
    rk_03: { quem: "eu", texto: "Como você sabe?", proxima: "rk_04" },
    rk_04: { quem: "kaito", texto: "Ela me mandou mensagem. Ela pegou o meu número quando costurou a minha sobrancelha. Ela disse “se você comeu, você ajuda a limpar”.", proxima: "rk_05" },
    rk_05: { tipo: "narracao", texto: "Ele tira o capacete. Desce da moto. Pega a mochila. E sobe os três degraus do hall, na frente dela, como quem já decidiu.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. “Você vai limpar o meu teto, Kaito?”", proxima: "rk_a1", pontos: { kaito: 2 }, flags: ["Teto_Kaito"] },
      { texto: "B. Subir atrás dele sem falar nada, com o coração batendo nos ouvidos.", proxima: "rk_b1", pontos: { kaito: 3 }, flags: ["Subiu_atras"] },
      { texto: "C. “A minha mãe está dormindo. Faz silêncio. Ela acorda e a gente morre.”", proxima: "rk_c1", pontos: { kaito: 3 }, flags: ["Silencio_mae"] }
    ]},
    rk_a1: { cenario: "cozinha", transicao: "tempo", quem: "eu", texto: "Você vai limpar o meu teto, Kaito?", proxima: "rk_a2" },
    rk_a2: { quem: "kaito", texto: "Eu sou mais alto. Você não alcança.", proxima: "rk_a3" },
    rk_a3: { tipo: "narracao", texto: "Ele limpa o teto em cima de uma cadeira, com um pano úmido, por quarenta minutos, enquanto ela lava a louça embaixo. Ele não reclama uma vez. Quando termina, desce da cadeira, com farinha no cabelo inteiro, e ela ri tanto que tem que sentar no chão.", proxima: "rk_a4" },
    rk_a4: { quem: "kaito", texto: "Agora a gente está igual.", proxima: "r_fim" },
    rk_b1: { cenario: "cozinha", transicao: "tempo", tipo: "narracao", texto: "Ela sobe atrás dele. Os dois limpam a cozinha juntos, sem falar quase nada, ele em cima da cadeira, ela embaixo, passando o pano, trocando o balde. Os ombros se encostam quando ela entrega o pano. Os dedos se encostam quando ele devolve.", proxima: "rk_b2" },
    rk_b2: { tipo: "narracao", texto: "Quando termina, os dois ficam parados no meio da cozinha limpa, cheirando a sabão e a um restinho de chocolate. Ele olha para ela. Ela olha para ele. O segundo do hall fica no ar, entre os dois, pesado.", proxima: "rk_b3" },
    rk_b3: { quem: "kaito", texto: "...Amanhã é sábado. A lojinha abre às dez. O forno é de verdade.", proxima: "rk_b4" },
    rk_b4: { quem: "eu", texto: "Eu levo a farinha. Fechada. Com tesoura.", proxima: "r_fim" },
    rk_c1: { cenario: "cozinha", transicao: "tempo", tipo: "narracao", texto: "Eles limpam em silêncio absoluto, porque a mãe está dormindo no quarto do lado, e toda vez que um balde bate na pia, os dois congelam, de olhos arregalados, olhando para a porta, segurando a risada.", proxima: "rk_c2" },
    rk_c2: { tipo: "narracao", texto: "Numa dessas vezes, os dois ficam congelados tão perto, ombro com ombro na frente da pia, que ela sente a respiração dele no cabelo dela. Nenhum dos dois se mexe. Nem depois que fica claro que a mãe não acordou.", proxima: "rk_c3" },
    rk_c3: { quem: "desconhecido", rotulo: "Mãe (do quarto)", texto: "Eu estou ouvindo, viu. Limpa direito o teto, Kaito.", proxima: "rk_c4" },
    rk_c4: { quem: "kaito", texto: "...Sim, senhora.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { roupa: "fora", tipo: "narracao", cenario: "frente-casa-sn-tarde", transicao: "tempo", legenda: "Sexta, 16h", sprite: "takeo:machucado", texto: "No fim da tarde, a campainha toca. É o Takeo, na porta do apartamento, com o braço na tipoia e um pote de vidro embrulhado no pano de prato florido da avó.", proxima: "rt_02" },
    rt_02: { quem: "takeo", sprite: "takeo:machucado", texto: "A minha avó mandou. É farinha. A boa. Ela disse que, se você estava com cheiro de cookie queimado, você precisava de farinha boa e de uma aula.", proxima: "rt_03" },
    rt_03: { quem: "eu", texto: "Takeo, você contou pra sua avó do cookie?", proxima: "rt_04" },
    rt_04: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu contei que eu chorei de emoção. Ela entendeu tudo. Ela já queimou muito bolo na vida.", proxima: "rt_05" },
    rt_05: { cenario: "cozinha", transicao: "tempo", tipo: "narracao", texto: "Ele entra. Olha para a cozinha, que ela está limpando. Para o teto, ainda meio branco. Sem perguntar, ele pega um pano com a mão boa e começa a limpar a porta do armário, que está na altura dele.", proxima: "rt_06" },
    rt_06: { quem: "takeo", sprite: "takeo:machucado", texto: "O cookie era pro Kaito. Eu sei. Eu vi. Todo mundo viu.", proxima: "rt_07" },
    rt_07: { quem: "takeo", sprite: "takeo:machucado", texto: "Mas eu comi um. E foi o melhor cookie da minha vida. Isso continua verdade mesmo ele sendo pro Kaito.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. “Takeo, ele era horrível.”", proxima: "rt_a1", pontos: { takeo: 2 }, flags: ["Horrivel_Takeo"] },
      { texto: "B. “Então o próximo eu faço pra você. Com a farinha boa da sua avó.”", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["Proximo_Takeo"] },
      { texto: "C. Abraçar ele de lado, pelo braço bom, com o pano de prato na mão. “Obrigada por ter chorado.”", proxima: "rt_c1", pontos: { takeo: 3 }, flags: ["Obrigada_chorou"] }
    ]},
    rt_a1: { quem: "eu", texto: "Takeo, ele era horrível.", proxima: "rt_a2" },
    rt_a2: { quem: "takeo", sprite: "takeo:machucado", texto: "Era. Mas foi você que fez. A minha avó diz que comida não é o gosto. É quem fez e quantas vezes tentou.", proxima: "rt_a3" },
    rt_a3: { tipo: "narracao", texto: "Ele fala isso limpando o armário, sem olhar para ela, e ela fica parada com o pano na mão, olhando para as costas dele.", proxima: "r_fim" },
    rt_b1: { quem: "eu", texto: "Então o próximo eu faço pra você. Com a farinha boa da sua avó.", proxima: "rt_b2" },
    rt_b2: { tipo: "narracao", texto: "O Takeo para de limpar. Vira. Fica muito vermelho.", proxima: "rt_b3" },
    rt_b3: { quem: "takeo", sprite: "takeo:machucado", texto: "Pra mim? Mas o Kaito disse “são meus”.", proxima: "rt_b4" },
    rt_b4: { quem: "eu", texto: "Ele disse que os cookies são dele. Ele não falou nada de bolo de caqui.", proxima: "rt_b5" },
    rt_b5: { quem: "takeo", sprite: "takeo:machucado", texto: "...Bolo de caqui. A minha avó vai desmaiar de felicidade. Eu vou desmaiar primeiro.", proxima: "r_fim" },
    rt_c1: { tipo: "narracao", texto: "Ela abraça ele de lado, pelo braço bom, com o pano de prato ainda na mão dela. Ele fica parado, com o pano dele na mão também, os dois abraçados no meio da cozinha cheirando a sabão.", proxima: "rt_c2" },
    rt_c2: { quem: "eu", texto: "Obrigada por ter chorado.", proxima: "rt_c3" },
    rt_c3: { quem: "takeo", sprite: "takeo:machucado", texto: "...Foi de emoção. Foi de emoção mesmo. Não foi o sal.", proxima: "rt_c4" },
    rt_c4: { quem: "eu", texto: "Foi o sal, Takeo.", proxima: "rt_c5" },
    rt_c5: { quem: "takeo", sprite: "takeo:machucado", texto: "Foi um pouco o sal.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: "fora", tipo: "narracao", cenario: "livraria-shopping", transicao: "tempo", legenda: "Sexta, 16h", sprite: "blake", texto: "No fim da tarde, ela passa pela livraria do shopping para devolver o lápis de marcenaria. O Blake está atrás do balcão, de avental verde, com um livro aberto em cima do caixa. Ele fecha quando ela chega. O título está virado para baixo.", proxima: "rb_02" },
    rb_02: { quem: "eu", texto: "Eu vim devolver o lápis. Ele não quebrou.", proxima: "rb_03" },
    rb_03: { quem: "blake", texto: "Fica com ele. É à prova de SN.", proxima: "rb_04" },
    rb_04: { tipo: "narracao", texto: "Ela olha para o livro virado para baixo. Ele percebe. Fica parado um tempo. Depois vira o livro. É um livro de receitas. “Cookies para iniciantes absolutos.”", proxima: "rb_05" },
    rb_05: { quem: "blake", texto: "Chegou hoje. Na caixa de devolução. Eu separei.", proxima: "rb_06" },
    rb_06: { quem: "blake", texto: "Não é pra você fazer pro Kaito. É pra você não se queimar. A página trinta tem uma parte sobre forno. Eu marquei.", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. “Você separou um livro de cookie pra mim, Blake?”", proxima: "rb_a1", pontos: { blake: 3 }, flags: ["Livro_cookie"] },
      { texto: "B. “E pra quem eu faço, então?”", proxima: "rb_b1", pontos: { blake: 3 }, flags: ["Pra_quem_Blake"] },
      { texto: "C. Abrir na página trinta. Ler em voz alta. Rir da parte do forno.", proxima: "rb_c1", pontos: { blake: 2 }, flags: ["Pagina_trinta"] }
    ]},
    rb_a1: { quem: "eu", texto: "Você separou um livro de cookie pra mim, Blake?", proxima: "rb_a2" },
    rb_a2: { quem: "blake", texto: "Você quase perdeu um dente do Ryuji.", proxima: "rb_a3" },
    rb_a3: { tipo: "narracao", texto: "Ele fala isso sério, e ela ri, e ele olha para ela rindo com a cara que ele fez no pátio, a que parece muito com carinho. Depois desvia, rápido, e vai arrumar uma estante que não precisa ser arrumada.", proxima: "r_fim" },
    rb_b1: { quem: "eu", texto: "E pra quem eu faço, então?", proxima: "rb_b2" },
    rb_b2: { tipo: "narracao", texto: "O Blake para. Olha para ela. Abre a boca. Fecha. Abre de novo.", proxima: "rb_b3" },
    rb_b3: { quem: "blake", texto: "...Pros gêmeos. Eles comem qualquer coisa.", proxima: "rb_b4" },
    rb_b4: { tipo: "pensamento", texto: "Ele ia falar outra coisa. Eu vi. Ele trocou no meio. O Blake pensa devagar, mas troca rápido.", proxima: "r_fim" },
    rb_c1: { tipo: "narracao", texto: "Ela abre na página trinta e lê em voz alta: “Atenção: nunca durma na frente do forno. Use sempre o cronômetro. Iniciantes absolutos tendem a superestimar a própria atenção.”", proxima: "rb_c2" },
    rb_c2: { quem: "eu", texto: "Blake. Esse livro me conhece.", proxima: "rb_c3" },
    rb_c3: { quem: "blake", texto: "Eu sublinhei essa parte. Duas vezes.", proxima: "rb_c4" },
    rb_c4: { tipo: "narracao", texto: "Ela ri tão alto que a dona da livraria aparece na porta do estoque. O Blake fica do lado, com as mãos no bolso do avental, rindo também, em silêncio, sacudindo os ombros.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { roupa: "fora", tipo: "narracao", cenario: "frente-casa-sn-tarde", transicao: "tempo", legenda: "Sexta, 16h", sprite: "ryuji", texto: "No fim da tarde, o Ryuji aparece na frente do prédio dela, na Relâmpago, buzinando duas vezes curtas. Ele tira o capacete antes de falar, de propósito.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", texto: "Sem capacete. Igual você pediu. Eu treinei no espelho.", proxima: "rr_03" },
    rr_03: { tipo: "narracao", texto: "Ele fica sentado na moto, com o capacete no colo, olhando para ela. Respira fundo. Coça a nuca. Respira fundo de novo.", proxima: "rr_04" },
    rr_04: { quem: "ryuji", texto: "Hoje, no pátio. O líder disse “são meus”. Eu fiz continência. Eu fiz continência porque eu respeito ele. Ele é o líder. Ele é meu amigo desde o primário.", proxima: "rr_05" },
    rr_05: { quem: "ryuji", texto: "Mas eu comi um. E quase perdi um dente. E eu comeria de novo. Todos. Os queimados também. É isso. Eu treinei mais coisa, mas eu esqueci o resto.", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. “Os queimados ficaram em casa. Eu posso te dar um. De lembrança.”", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Queimado_lembranca"] },
      { texto: "B. “Você esqueceu o resto de propósito?”", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Esqueceu_proposito"] },
      { texto: "C. Sentar na garupa da moto parada. “Então fica mais um pouco até lembrar.”", proxima: "rr_c1", pontos: { ryuji: 3 }, flags: ["Fica_ate_lembrar"] }
    ]},
    rr_a1: { tipo: "narracao", texto: "Ela sobe, pega um dos doze cookies pretos da primeira fornada, que a mãe colocou num saquinho para jogar fora, e desce. Entrega para ele. Ele segura como quem segura uma medalha.", proxima: "rr_a2" },
    rr_a2: { quem: "ryuji", texto: "Um incêndio classe A. Contido. Eu vou guardar. No porta-luvas da Relâmpago. Pra sempre.", proxima: "rr_a3" },
    rr_a3: { quem: "eu", texto: "Ryuji, ele vai apodrecer.", proxima: "rr_a4" },
    rr_a4: { quem: "ryuji", texto: "Isso aqui não apodrece. Isso aqui é carvão. Vai durar mais que a gente.", proxima: "r_fim" },
    rr_b1: { quem: "eu", texto: "Você esqueceu o resto de propósito?", proxima: "rr_b2" },
    rr_b2: { tipo: "narracao", texto: "O Ryuji fica vermelho. Começa pelas orelhas, desce pelo pescoço, e ele não pode colocar o capacete para esconder, porque prometeu que não ia.", proxima: "rr_b3" },
    rr_b3: { quem: "ryuji", texto: "...Um pouco de propósito. O resto ainda não pode. Ainda está na parte do rescaldo. Tem brasa escondida.", proxima: "r_fim" },
    rr_c1: { tipo: "narracao", texto: "Ela senta na garupa da Relâmpago, parada, desligada, na calçada. O Ryuji fica rígido na frente. Depois relaxa.", proxima: "rr_c2" },
    rr_c2: { quem: "eu", texto: "Então fica mais um pouco até lembrar.", proxima: "rr_c3" },
    rr_c3: { tipo: "narracao", texto: "Eles ficam ali uma hora inteira, na moto parada, sem ir a lugar nenhum. Ele não lembra do resto. Mas conta histórias do quartel, e da irmã de nove anos, e do dia que a Relâmpago pegou fogo no carburador, e ela ri, e ele nunca coloca o capacete de volta.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: "fora", tipo: "narracao", cenario: "frente-casa-sn-tarde", transicao: "tempo", legenda: "Sexta, 16h", sprite: "victor", texto: "No fim da tarde, a campainha toca. É o Victor, na porta do apartamento, com a caixa de ferramentas enferrujada numa mão e o Caramelo na coleira na outra.", proxima: "rv_02" },
    rv_02: { quem: "victor", texto: "Fiquei sabendo da colher de pau. E da colher de metal entortada. Eu vim consertar. É serviço da oficina.", proxima: "rv_03" },
    rv_03: { cenario: "cozinha", transicao: "tempo", tipo: "narracao", texto: "Ele entra na cozinha. Pega a colher de metal entortada. Coloca em cima da pia. Desentorta com um alicate, devagar, assobiando, com muito cuidado, como quem conserta um guidão.", proxima: "rv_04" },
    rv_04: { quem: "victor", texto: "Pronto. Reta. Quase. Tem uma curvinha, mas dá pra mexer massa. Massa não liga pra curvinha.", proxima: "rv_05" },
    rv_05: { quem: "victor", texto: "Eu comi o seu cookie hoje. O salgado-doce. E aí o líder falou “são meus”, e eu levantei as mãos. Porque eu sei a hora de levantar as mãos. Eu sempre sei.", proxima: "rv_06" },
    rv_06: { quem: "victor", texto: "Mas eu queria que você soubesse que eu levantei as mãos por respeito ao líder. Não porque eu não queria o cookie.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. “Você queria o cookie, Victor?”", proxima: "rv_a1", pontos: { victor: 3 }, flags: ["Queria_cookie"] },
      { texto: "B. Dar a colher desentortada pra ele. “Então faz comigo da próxima. Você mexe. Você sabe a força certa.”", proxima: "rv_b1", pontos: { victor: 3 }, flags: ["Forca_certa"] },
      { texto: "C. “O Caramelo pode comer os queimados?”", proxima: "rv_c1", pontos: { victor: 2 }, flags: ["Caramelo_queimados"] }
    ]},
    rv_a1: { quem: "eu", texto: "Você queria o cookie, Victor?", proxima: "rv_a2" },
    rv_a2: { tipo: "narracao", texto: "Ele para com o alicate na mão. Olha para ela. O pirulito na boca para de mexer.", proxima: "rv_a3" },
    rv_a3: { quem: "victor", texto: "...Eu queria quem fez o cookie pensando em mim às quatro e meia da manhã. Mas isso é outra coisa. Isso não se conserta com alicate.", proxima: "r_fim" },
    rv_b1: { tipo: "narracao", texto: "Ela pega a colher desentortada e coloca na mão dele. Ele fica olhando para a colher, e para a mão dela em cima da dele.", proxima: "rv_b2" },
    rv_b2: { quem: "eu", texto: "Então faz comigo da próxima. Você mexe. Você sabe a força certa. Força de quem segura passarinho.", proxima: "rv_b3" },
    rv_b3: { quem: "victor", texto: "Você lembra.", proxima: "rv_b4" },
    rv_b4: { quem: "eu", texto: "Eu lembro.", proxima: "rv_b5" },
    rv_b5: { tipo: "narracao", texto: "Ele não faz piada. Ele guarda a colher no bolso da jaqueta, sem perguntar se pode, e ela não pede de volta.", proxima: "r_fim" },
    rv_c1: { quem: "eu", texto: "O Caramelo pode comer os queimados?", proxima: "rv_c2" },
    rv_c2: { quem: "victor", texto: "O Caramelo come sofá. O Caramelo pode comer qualquer coisa.", proxima: "rv_c3" },
    rv_c3: { tipo: "narracao", texto: "Ela dá um cookie preto para o Caramelo. Ele cheira. Olha para ela. Olha para o Victor. E deita no chão da cozinha, de barriga para cima, recusando, com um suspiro de cachorro ofendido.", proxima: "rv_c4" },
    rv_c4: { quem: "victor", texto: "...Ele come sofá e recusou o seu cookie. Isso nunca aconteceu. Eu vou chamar um especialista.", proxima: "rv_c5" },
    rv_c5: { tipo: "narracao", texto: "Ela ri tanto que senta no chão do lado do Caramelo. O Victor senta também, do outro lado. Os três no chão da cozinha meio limpa, até a mãe dela sair do quarto e perguntar se tem um cachorro dentro de casa.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Sexta, 23h", sprite: null, texto: "À noite, no quarto, ela abre a galeria do celular. As fotos que a Mio pediu. A nuvem de farinha. A colher de pau partida. Os doze círculos pretos. Os sete tortos. O do mapa do Brasil.", proxima: "f_02" },
    f_02: { tipo: "narracao", texto: "Ela manda todas para a Mio. A resposta chega em três segundos.", proxima: "f_03" },
    f_03: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "EU ESTOU CHORANDO. O VERDE. POR QUE UM É VERDE. ELE COMEU O VERDE. ELE COMEU O VERDE NA FRENTE DA SERENA. “SÃO MEUS.” EU VOU FAZER UM PROGRAMA DE RÁDIO SÓ SOBRE ISSO.", proxima: "f_04" },
    f_04: { tipo: "narracao", texto: "Ela ri sozinha no escuro. Vira para o lado. Fecha os olhos.", proxima: "f_05" },
    f_05: { tipo: "pensamento", texto: "Ele comeu os três. O verde também. E disse “são meus”. E disse “faz comigo”. E fechou a fivela do capacete no meu queixo.", proxima: "f_06" },
    f_06: { tipo: "pensamento", texto: "Eu ainda não falei do hall. Mas eu acho que eu não preciso mais falar tanto assim.", proxima: "f_07" },
    f_07: { tipo: "pensamento", texto: "Amanhã é sábado. A lojinha abre às dez. O forno é de verdade.", proxima: "f_08" },
    f_08: { tipo: "pensamento", texto: "...Eu vou levar a farinha fechada. E uma tesoura.", proxima: "ep_fim" },

    // Fim do Capítulo 37 (crie a entrada "capitulo37" em dados/capitulos.js).
    ep_fim: { fim: "capitulo37" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 38 (anotações do roteiro)
 *  • OS COOKIES: a SN acordou às 4h30. Farinha explodiu (força da família), sal no lugar do açúcar, colher de pau
 *    quebrada, colher de metal entortada, ovo esmagado, primeira fornada virou carvão (dormiu na frente do forno).
 *    A mãe chegou do plantão e ajudou na segunda fornada: sete cookies tortos (um coração, um mapa do Brasil, um verde).
 *  • Os meninos comeram quatro no pátio (Ryuji quase perdeu um dente; Victor viu Deus; Takeo chorou "de emoção";
 *    Blake: "A segunda está melhor que a primeira."). O Kaito comeu os três que sobraram, o verde também,
 *    na frente da Serena: "São meus. Da próxima vez que ela fizer cookie, ninguém come."
 *  • A Serena viu e foi embora com a caixinha rosa. A Hana: "Cookies: 1 – Yakisoba: 0".
 *  • Saída: "Da próxima vez, faz comigo. Na lojinha." Ele fechou a fivela do capacete dela. Ela segurou na cintura.
 *  • Sábado: a lojinha abre às dez, forno de verdade (convite).
 *  • O trabalho de geografia: 9,5. "Melhor mapa em onze anos" (o mapa do Ryuji, com o bombeiro "JUSANTE →").
 *  • O Ren sentiu o cheiro do cookie na mochila. Não virou a página a aula inteira. Sem xadrez, sem mensagem.
 *  • Ainda não falaram do hall.
 *  • SEGREDOS: o Ren matou o Takeo na primeira linha do tempo · a infância (a SN tinha uns 5 anos) · a tia.
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 O sal · 2 No hall · 3 A degustação · 4 "São meus" · Rota (1 por rota)
 *
 * FLAGS NOVAS
 *  Recomecou_cookie · Compensou_acucar · Ligou_Mio_cookie · Culpou_mae · Um_pouco · Quase_entregou
 *  Riu_junto · Nao_era_pra_voces · Desculpa_cookie · Estavam_horriveis · Farelo_Kaito · Faco_de_novo
 *  Teto_Kaito · Subiu_atras · Silencio_mae · Horrivel_Takeo · Proximo_Takeo · Obrigada_chorou
 *  Livro_cookie · Pra_quem_Blake · Pagina_trinta · Queimado_lembranca · Esqueceu_proposito
 *  Fica_ate_lembrar · Queria_cookie · Forca_certa · Caramelo_queimados
 */