/*
 * =====================================================================
 *  CAPÍTULO 13 — Você trouxe duas?
 *  Sexta à noite, continuação direta do Capítulo 12 (porta da casa do Takeo).
 * =====================================================================
 *
 *  O QUE ACONTECE
 *    • A visita: a avó do Takeo, os três tipos de bolinho, o pudim da Reina,
 *      o álbum de fotos (com a SN criança), a física na mesinha da sala.
 *    • A Reina e a SN disputam sem disputar. A avó já tem uma preferida ("a menina da viga"),
 *      mas trata a Reina com carinho também.
 *    • No fim, o Kaito aparece "por acaso" com a bicicleta de entrega e diz que leva a SN pra casa.
 *      O Takeo diz que ele leva. ESCOLHA: quem leva a SN?
 *        – Kaito → caminho de bicicleta, os dois rindo e brincando.
 *        – Takeo → a Reina cisma em ir junto.
 *
 *  REGRAS QUE ESTE CAPÍTULO SEGUE
 *    • Nada de gangue. O Ren não aparece. Ninguém fala o apelido antigo.
 *    • Romance devagar (sem confissão).
 *    • Os meninos acham a SN forte, não "com poder".
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Reina, Avó do Takeo (rótulo "desconhecido"), Kaito, Takeo, Mio (só mensagem).
 *
 *  CENÁRIOS
 *    Dentro da casa do Takeo → "apartamento" (troque por "casa-takeo" se criar)
 *    Rua / portão azul → "saida-colegio" · Quarto da SN → "quarto-sn"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Provocou_Reina_visita, Tocou_campainha, Mao_guidao_Kaito, Pediu_Kaito_esperar,
 *    SN_admitiu_ciume_Takeo.
 *
 *  Crie a entrada "capitulo13" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo13", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — DUAS =================== */
    // Cenário: portão azul, depois a sala da casa. Música: violão leve, um pouco cômico.
    c1_01: { roupa: "fora", tipo: "narracao", cenario: "casa-takeo", transicao: "tempo", legenda: "Cena 1 — Duas", sprite: null, texto: "A pergunta fica pendurada no ar. “Você trouxe duas?” O Takeo abre a boca. Fecha. Abre de novo. Nada sai.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", sprite: "reina", texto: "A Reina é a primeira a se mexer. Ela solta o braço do Takeo, dá um passo à frente e faz uma reverência perfeita. Educada. Treinada.", proxima: "c1_03" },
    c1_03: { quem: "reina", texto: "Boa noite, senhora. Eu sou a Reina. Colega de sala do Takeo. Eu me convidei sozinha, a culpa não é dele. Eu trouxe pudim pra compensar.", proxima: "c1_04" },
    c1_04: { tipo: "narracao", texto: "A avó olha para a sacola do pudim. Para a Reina. Para a sacola de novo. E sorri.", proxima: "c1_05" },
    c1_05: { quem: "avo_takeo", texto: "Quem traz pudim nunca é visita demais. Entra, minha filha. Entra as duas. Takeo, fecha a boca, vai entrar mosquito.", proxima: "c1_06" },
    c1_06: { tipo: "narracao", cenario: "casa-takeo-sala", transicao: "tempo", legenda: "A casa do Takeo", sprite: null, texto: "A casa é pequena. Uma sala com uma mesinha baixa, almofadas no chão e vasos de planta em todo canto possível. Cheira a gengibre, a arroz e a sabão de coco.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", texto: "Na parede, um calendário de farmácia com a sexta-feira circulada em caneta vermelha. Embaixo, escrito com letra de senhora: “A menina vem!!!”. Três pontos de exclamação.", proxima: "c1_08" },
    c1_08: { tipo: "pensamento", texto: "Eu já estive aqui. Não nessa vida. Na outra. Uma vez, com seis anos, e depois... depois só no dia em que fui devolver um livro dele pra avó. Quando ele já não estava.", proxima: "c1_09" },
    c1_09: { tipo: "pensamento", texto: "Ela me abraçou na porta e não falou nada. Só me abraçou. E o calendário na parede era esse mesmo. De farmácia.", proxima: "c1_10" },
    c1_10: { tipo: "narracao", texto: "A SN fica parada no meio da sala um segundo a mais do que devia.", proxima: "c1_cam1" },
    c1_cam1: { caminhos: [
      { flag: "Tocou_campainha", proxima: "c1_campainha" }
    ], proxima: "c1_esc1" },
    c1_campainha: { quem: "avo_takeo", texto: "E foi você que tocou a campainha, não foi? O Takeo nunca toca. Ele fica dez minutos procurando a chave. Gostei de você logo de cara.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — Cumprimentando a avó
    c1_esc1: { escolhas: [
      { texto: "A. Fazer uma reverência e agradecer pelo convite, bem educada.", proxima: "c1_1a_1", pontos: { takeo: 1 }, flags: ["Reverencia_avo"] },
      { texto: "B. Abraçar a avó. Sem pensar. Do jeito que ela abraçou você um dia, em outra vida.", proxima: "c1_1b_1", pontos: { takeo: 3 }, flags: ["Abracou_avo"] },
      { texto: "C. “Posso ajudar na cozinha?”", proxima: "c1_1c_1", pontos: { takeo: 2 }, flags: ["Ajudou_cozinha_avo"] }
    ]},
    c1_1a_1: { tipo: "narracao", texto: "Ela se curva. A avó se curva de volta. A Reina se curva também, para não ficar para trás. O Takeo se curva sem motivo nenhum, porque todo mundo está se curvando.", proxima: "c1_1a_2" },
    c1_1a_2: { quem: "avo_takeo", texto: "Chega, chega, senão a gente passa a noite inteira se dobrando. Senta, senta.", proxima: "c1_11" },
    c1_1b_1: { tipo: "narracao", texto: "Ela abraça a avó. Forte. A avó é tão pequena que a cabeça dela fica na altura do queixo da SN.", proxima: "c1_1b_2" },
    c1_1b_2: { tipo: "narracao", texto: "A avó fica surpresa por um segundo. Depois dá tapinhas nas costas dela. E não solta. Fica ali, abraçando de volta, sem perguntar nada.", proxima: "c1_1b_3" },
    c1_1b_3: { quem: "avo_takeo", texto: "...Ora, ora. Parece que a gente se conhece faz tempo, né?", proxima: "c1_1b_4" },
    c1_1b_4: { tipo: "pensamento", texto: "A senhora não faz ideia.", proxima: "c1_1b_5" },
    c1_1b_5: { tipo: "narracao", texto: "Atrás delas, o Takeo está olhando a cena com uma cara que ela nunca viu nele. Como se alguém tivesse colocado uma coisa no lugar certo.", proxima: "c1_11" },
    c1_1c_1: { tipo: "narracao", texto: "A avó levanta as sobrancelhas por cima dos óculos.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "avo_takeo", texto: "Visita não entra na minha cozinha. Mas você pode me ajudar a carregar a bandeja. Ela pesa. Eu fiz bolinho demais.", proxima: "c1_1c_3" },
    c1_1c_3: { tipo: "narracao", texto: "A SN carrega a bandeja com uma mão só, sem perceber. A avó fica olhando.", proxima: "c1_1c_4" },
    c1_1c_4: { quem: "avo_takeo", texto: "Uma mão só. É mesmo a menina da viga.", proxima: "c1_11" },

    // (todas as opções continuam aqui)
    c1_11: { tipo: "narracao", sprite: "reina", texto: "A Reina entrega o pudim. A avó abre a tampa com cuidado, como quem abre um presente.", proxima: "c1_cam2" },
    c1_cam2: { caminhos: [
      { flag: "Provocou_Reina_visita", proxima: "c1_pudim_choc" }
    ], proxima: "c1_pudim_leite" },
    c1_pudim_choc: { tipo: "narracao", texto: "É de chocolate. A Reina olha para a SN com um sorrisinho vitorioso. Ela não caiu na dica.", proxima: "c1_pudim_choc2" },
    c1_pudim_choc2: { quem: "avo_takeo", texto: "Chocolate! O meu preferido. Quem te contou?", proxima: "c1_pudim_choc3" },
    c1_pudim_choc3: { quem: "reina", texto: "Ninguém, senhora. Eu tenho instinto.", proxima: "c1_pudim_choc4" },
    c1_pudim_choc4: { tipo: "pensamento", texto: "Ela vai me lembrar disso pelo resto da vida.", proxima: "c1_12" },
    c1_pudim_leite: { tipo: "narracao", texto: "É de leite. Liso, brilhante, numa forma de plástico com o adesivo da padaria do lado da escola ainda colado na tampa.", proxima: "c1_pudim_leite2" },
    c1_pudim_leite2: { quem: "avo_takeo", texto: "Que bonito. É da padaria da esquina da escola, não é? Eu conheço esse adesivo.", proxima: "c1_pudim_leite3" },
    c1_pudim_leite3: { quem: "reina", texto: "É. Eu comprei correndo, enquanto o Takeo procurava o casaco na sala. Desculpa não ser caseiro.", proxima: "c1_pudim_leite4" },
    c1_pudim_leite4: { tipo: "pensamento", texto: "Ela se convidou e saiu correndo pra comprar pudim em cinco minutos. A líder do Lírio Negro, correndo pra padaria pra impressionar a avó do Takeo.", proxima: "c1_pudim_leite5" },
    c1_pudim_leite5: { tipo: "pensamento", texto: "Isso não é só provocação. Ela quer mesmo que essa senhora goste dela.", proxima: "c1_12" },
    c1_12: { quem: "avo_takeo", texto: "Então você vai ser a menina do pudim. Pronto. Agora eu tenho duas meninas: a da viga e a do pudim.", proxima: "c1_13" },
    c1_13: { tipo: "narracao", texto: "A Reina sorri. Mas, por um segundo, só por um segundo, o sorriso dela treme no canto. “A da viga” veio primeiro.", proxima: "c2_01" },

    /* =================== CENA 2 — TRÊS TIPOS =================== */
    // Cenário: sala, mesinha baixa. Música: violão leve.
    c2_01: { tipo: "narracao", cenario: "casa-takeo-sala", transicao: "tempo", legenda: "Cena 2 — Três tipos", sprite: null, texto: "Os quatro sentam no chão, em volta da mesinha. A bandeja fica no meio. Três montinhos de bolinho de arroz, arrumados como soldados.", proxima: "c2_02" },
    c2_02: { quem: "avo_takeo", texto: "Esse é de frango. Esse é de salmão. E esse aqui é de alga com gergelim, que é o que o Takeo come escondido de madrugada e acha que eu não sei.", proxima: "c2_03" },
    c2_03: { quem: "takeo", sprite: "takeo", texto: "Vó!", proxima: "c2_04" },
    c2_04: { quem: "avo_takeo", texto: "Eu conto os bolinhos, Takeo. Eu sou velha, não sou cega.", proxima: "c2_05" },
    c2_05: { tipo: "narracao", texto: "A SN pega o de frango sem pensar. A avó repara.", proxima: "c2_06" },
    c2_06: { quem: "avo_takeo", texto: "Frango. Igual quando você era pequena. Você vinha aqui depois da escola e só comia o de frango. O resto você dava pro Takeo.", proxima: "c2_07" },
    c2_07: { quem: "reina", sprite: "reina", texto: "...Ela vinha aqui quando era pequena?", proxima: "c2_08" },
    c2_08: { quem: "avo_takeo", texto: "Toda semana! Os dois eram grudados. Depois ela mudou de bairro e sumiu. E aí, semana passada, o Takeo chega em casa com o braço machucado, sujo de poeira, e diz: “Vó, ela voltou. E ela segurou uma viga em cima de mim.”", proxima: "c2_09" },
    c2_09: { tipo: "narracao", texto: "A Reina para de mastigar.", proxima: "c2_10" },
    c2_10: { quem: "reina", texto: "Uma viga.", proxima: "c2_11" },
    c2_11: { quem: "avo_takeo", texto: "De madeira! Grandona! Ele não parava de falar. A noite inteira. “Ela segurou, vó. Ela segurou e não soltou.”", proxima: "c2_12" },
    c2_12: { tipo: "narracao", texto: "Todo mundo olha para a SN. A Reina com os olhos estreitos. A avó com orgulho. O Takeo com as orelhas vermelhas.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — A história da viga
    c2_esc2: { escolhas: [
      { texto: "A. “Não foi nada demais. Eu tive sorte. A viga estava meio podre.”", proxima: "c2_2a_1", pontos: { takeo: 1 }, flags: ["Diminuiu_viga"] },
      { texto: "B. Deixar o Takeo contar a história. Do jeito dele.", proxima: "c2_2b_1", pontos: { takeo: 3 }, flags: ["Takeo_contou_viga"] },
      { texto: "C. “Ele também não soltou. Ele ficou segurando a minha mão o tempo todo.”", proxima: "c2_2c_1", pontos: { takeo: 2 }, flags: ["Contou_mao_viga"] }
    ]},
    c2_2a_1: { quem: "takeo", sprite: "takeo", texto: "Não estava podre. Eu vi depois. Tinha prego pra todo lado. Ela só não quer que ninguém ache estranho.", proxima: "c2_2a_2" },
    c2_2a_2: { tipo: "narracao", texto: "Ele fala isso direto, olhando para ela, sem gaguejar. Do jeito que ele fala só quando acha que é importante.", proxima: "c2_2a_3" },
    c2_2a_3: { quem: "takeo", texto: "Não é estranho. É você.", proxima: "c2_14" },
    c2_2b_1: { tipo: "narracao", texto: "Ela olha para o Takeo e faz que sim com a cabeça. Ele respira fundo.", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "takeo", sprite: "takeo", texto: "Eu estava preso. Tinha poeira em tudo. Eu achei que... eu achei que ia ficar ali. E aí eu ouvi a voz dela. Ela não gritou. Ela falou baixinho: “Eu estou aqui.”", proxima: "c2_2b_3" },
    c2_2b_3: { quem: "takeo", texto: "E eu pensei: tá bom. Se ela está aqui, então tá bom.", proxima: "c2_2b_4" },
    c2_2b_4: { tipo: "narracao", texto: "A sala fica em silêncio. A avó tira os óculos e limpa com a ponta do avental, bem devagar. A Reina olha para a própria mão.", proxima: "c2_2b_5" },
    c2_2b_5: { tipo: "pensamento", texto: "Ele lembra disso assim. Não da viga. Da minha voz.", proxima: "c2_14" },
    c2_2c_1: { tipo: "narracao", texto: "O Takeo fica vermelho até o pescoço. A avó cobre a boca com a mão, encantada.", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "takeo", sprite: "takeo", texto: "Era... era pra ela não ficar sozinha. Só isso.", proxima: "c2_2c_3" },
    c2_2c_3: { quem: "avo_takeo", texto: "“Só isso”, ele diz. Igualzinho ao avô. O avô dele também dizia “só isso” pra tudo que era importante.", proxima: "c2_14" },

    // (todas as opções continuam aqui)
    c2_14: { tipo: "narracao", sprite: "reina", texto: "A Reina pega um bolinho de salmão. Morde. Mastiga devagar. E fala, com a voz bem calma, sem olhar para ninguém.", proxima: "c2_15" },
    c2_15: { quem: "reina", texto: "Eu também levantei uma coisa pesada uma vez. Uma mesa. No primeiro ano. Pra pegar um brinco que caiu.", proxima: "c2_16" },
    c2_16: { tipo: "narracao", texto: "Silêncio.", proxima: "c2_17" },
    c2_17: { quem: "avo_takeo", texto: "Que força, minha filha! Uma mesa!", proxima: "c2_18" },
    c2_18: { tipo: "narracao", texto: "A avó fala isso com toda a sinceridade do mundo. A Reina fica vermelha. Ela não esperava que alguém levasse a sério.", proxima: "c2_19" },
    c2_19: { tipo: "pensamento", texto: "Ela está competindo com uma viga usando uma mesa. E a avó está deixando ela ganhar um pouquinho.", proxima: "c2_20" },
    c2_20: { tipo: "pensamento", texto: "Essa senhora é muito mais esperta do que parece.", proxima: "c3_01" },

    /* =================== CENA 3 — O ÁLBUM =================== */
    // Cenário: sala. Música: piano suave, nostálgico.
    c3_01: { tipo: "narracao", cenario: "casa-takeo-sala", transicao: "tempo", legenda: "Cena 3 — O álbum", sprite: null, texto: "Depois do segundo bolinho, a avó levanta, vai até o armário e volta com um álbum enorme, de capa de couro falso, com as pontas gastas.", proxima: "c3_02" },
    c3_02: { quem: "takeo", sprite: "takeo", texto: "Não. Vó. Não. Por favor. Eu escondi isso debaixo da minha cama.", proxima: "c3_03" },
    c3_03: { quem: "avo_takeo", texto: "E eu achei. Eu limpo debaixo da sua cama, Takeo. Toda semana.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", texto: "Ela abre o álbum no meio da mesinha. A Reina se inclina tanto que quase deita em cima. A SN também.", proxima: "c3_05" },
    c3_05: { tipo: "narracao", texto: "Primeira página: um bebê redondo, careca, com a bochecha enorme e uma cara de quem está muito ofendido com a existência.", proxima: "c3_06" },
    c3_06: { quem: "reina", sprite: "reina", texto: "Ai, meu Deus. Takeo. Você era um bolinho de arroz.", proxima: "c3_07" },
    c3_07: { quem: "takeo", sprite: "takeo", texto: "Eu era um bebê normal!", proxima: "c3_08" },
    c3_08: { quem: "avo_takeo", texto: "Quatro quilos e oitocentos. Não tinha nada de normal.", proxima: "c3_09" },
    c3_09: { tipo: "narracao", texto: "A avó vira as páginas. O Takeo de um ano, sentado num balde. O Takeo de três anos, chorando porque um pombo roubou o pão dele. O Takeo de cinco, com um curativo na testa e um sorriso sem dente.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", texto: "E então, na página seguinte, outra criança aparece do lado dele.", proxima: "c3_11" },
    c3_11: { foto: "takeo-sn", sprite: null, tipo: "narracao", texto: "Uma menina de seis anos, de joelho ralado, segurando um bolinho de frango com as duas mãos. Do lado, o Takeo, segurando o resto da bandeja. Os dois rindo para a câmera com a boca cheia.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", texto: "A SN para de respirar.", proxima: "c3_13" },
    c3_13: { tipo: "pensamento", texto: "Eu não lembrava dessa foto. Eu lembrava do dia, mais ou menos. Mas não dessa foto.", proxima: "c3_14" },
    c3_14: { tipo: "narracao", texto: "A página seguinte tem mais. A menina e o Takeo no balanço da praça. Os dois dormindo no chão dessa mesma sala, embaixo de um cobertor de patinhos. Os dois fantasiados no festival de verão, ela de raposa, ele de... alguma coisa redonda.", proxima: "c3_15" },
    c3_15: { quem: "takeo", sprite: "takeo", texto: "Eu era um bolinho de arroz. Tá bom. Eu admito. Ela que escolheu a fantasia.", proxima: "c3_16" },
    c3_16: { tipo: "narracao", sprite: "reina", texto: "A Reina ri. Mas é um riso mais baixo agora. Ela fica olhando para as fotos por muito tempo. Página por página. Dez anos de foto que ela não está.", proxima: "c3_17" },
    c3_17: { tipo: "pensamento", texto: "Eu devia me sentir vencendo. Eu não me sinto.", proxima: "c3_18" },
    c3_18: { tipo: "pensamento", texto: "Na outra vida, esse álbum parou numa página. A última foto dele tinha dezesseis anos. A avó me mostrou, depois do enterro. Ela disse: “daqui pra frente é tudo em branco”.", proxima: "c3_19" },
    c3_19: { tipo: "narracao", efeito: "flashback", texto: "Um álbum aberto numa página em branco. Uma senhora de cabelo mais branco ainda, sozinha numa sala com vasos de planta mortos. O calendário de farmácia parado num mês que não muda mais.", proxima: "c3_20" },
    c3_20: { tipo: "narracao", texto: "A SN pisca. A sala volta. As plantas estão vivas. A avó está rindo de uma foto do Takeo com uma panela na cabeça.", proxima: "c3_21" },
    c3_21: { tipo: "pensamento", texto: "Dessa vez as páginas vão continuar. Eu vou garantir isso. Nem que eu precise segurar o mundo inteiro.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — Uma foto do álbum
    c3_esc3: { escolhas: [
      { texto: "A. Apontar a foto dos dois dormindo embaixo do cobertor de patinhos.", proxima: "c3_3a_1", pontos: { takeo: 2 }, flags: ["Foto_cobertor"] },
      { texto: "B. Apontar a foto do festival: “Eu sabia que você ia ficar fofo de bolinho.”", proxima: "c3_3b_1", pontos: { takeo: 2 }, flags: ["Foto_festival"] },
      { texto: "C. Virar o álbum para a Reina: “Ele tem uma foto chorando por causa de um pombo. Você precisa ver de perto.”", proxima: "c3_3c_1", pontos: { takeo: 1 }, flags: ["Incluiu_Reina_album"] }
    ]},
    c3_3a_1: { quem: "avo_takeo", texto: "Essa! Vocês tinham assistido um filme de fantasma e ficaram com medo de dormir separados. Arrastaram o colchão pra sala. Eu achei os dois de mão dada de manhã.", proxima: "c3_3a_2" },
    c3_3a_2: { tipo: "narracao", texto: "O Takeo esconde o rosto nas mãos. A Reina aperta o bolinho com tanta força que o arroz sai pelos lados.", proxima: "c3_3a_3" },
    c3_3a_3: { quem: "takeo", sprite: "takeo", texto: "A gente tinha sete anos, vó...", proxima: "c3_3a_4" },
    c3_3a_4: { tipo: "narracao", texto: "Mas, quando ele tira as mãos do rosto, ele olha para a SN. E sorri. Um sorriso que diz que ele lembra também.", proxima: "c3_22" },
    c3_3b_1: { quem: "takeo", sprite: "takeo", texto: "Você me obrigou! Você disse que se eu não fosse de bolinho, você não ia ser raposa!", proxima: "c3_3b_2" },
    c3_3b_2: { quem: "eu", texto: "E eu tinha razão. Olha essa bochecha.", proxima: "c3_3b_3" },
    c3_3b_3: { tipo: "narracao", texto: "Ela aperta a bochecha dele. A de verdade. Ele fica parado, de olho arregalado, e não reclama.", proxima: "c3_3b_4" },
    c3_3b_4: { quem: "takeo", texto: "...Esse ano tem festival de novo. Em agosto. Se você quiser ser raposa de novo... eu posso ser bolinho de novo.", proxima: "c3_3b_5" },
    c3_3b_5: { tipo: "pensamento", texto: "Ele disse isso na frente da Reina. Sem gaguejar. Às vezes eu esqueço que o Takeo tímido é também o Takeo mais direto do mundo.", proxima: "c3_22" },
    c3_3c_1: { tipo: "narracao", texto: "A Reina olha para ela, desconfiada. Depois para a foto. Depois cai na gargalhada.", proxima: "c3_3c_2" },
    c3_3c_2: { quem: "reina", sprite: "reina", texto: "O pombo é maior que ele! Takeo! O pombo está ganhando!", proxima: "c3_3c_3" },
    c3_3c_3: { quem: "takeo", sprite: "takeo", texto: "Ele era um pombo muito grande!", proxima: "c3_3c_4" },
    c3_3c_4: { tipo: "narracao", texto: "A Reina e a SN riem juntas, debruçadas no álbum. A avó olha para as duas por cima dos óculos, com cara de quem está entendendo muita coisa.", proxima: "c3_3c_5" },
    c3_3c_5: { quem: "reina", texto: "...Valeu. Por me mostrar.", proxima: "c3_3c_6" },
    c3_3c_6: { tipo: "narracao", texto: "Ela fala baixinho, rápido, e logo volta a fazer cara de quem não falou nada.", proxima: "c3_22" },

    // (todas as opções continuam aqui)
    c3_22: { tipo: "narracao", sprite: null, texto: "Quando a avó fecha o álbum, ela tira uma foto de dentro da última página, uma cópia, e coloca na mão da SN. A dos dois com o bolinho de frango.", proxima: "c3_23" },
    c3_23: { quem: "avo_takeo", texto: "Eu tinha duas. Guardei uma pra você, caso você voltasse. Demorou, hein.", proxima: "c3_24" },
    c3_24: { tipo: "pensamento", texto: "Ela guardou. Por anos. Caso eu voltasse.", proxima: "c3_25" },
    c3_25: { tipo: "narracao", texto: "A SN guarda a foto no bolso da saia. Junto com a conta da Hana. Ela está começando a ter coisas demais no bolso. Coisas boas.", proxima: "c4_01" },

    /* =================== CENA 4 — PLANO INCLINADO =================== */
    // Cenário: sala, mesinha. Depois cozinha (mesmo cenário). Música: violão calmo.
    c4_01: { tipo: "narracao", cenario: "casa-takeo-sala", transicao: "tempo", legenda: "Cena 4 — Plano inclinado", sprite: null, texto: "Era para estudarem física. Esse era o motivo oficial. Às sete da noite, o livro finalmente aparece em cima da mesinha.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", sprite: "reina", texto: "A Reina senta do lado do Takeo. Bem do lado. Tão perto que o ombro dela encosta no dele cada vez que ela vira a página.", proxima: "c4_03" },
    c4_03: { quem: "reina", texto: "Takeo, não entendi essa parte. O bloquinho desce sozinho por quê?", proxima: "c4_04" },
    c4_04: { quem: "takeo", sprite: "takeo", texto: "Ah... por causa do... da gravidade. E do atrito. Que é... menor que a... componente do peso...", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "Ele fala cada vez mais baixo, porque a Reina está cada vez mais perto. A SN, do outro lado da mesa, rabisca polias de carinha na margem do caderno. Com muita força.", proxima: "c4_06" },
    c4_06: { quem: "eu", texto: "É só desenhar as forças. Olha. Peso pra baixo. Normal pra cima, reta com a rampa. Atrito contra o movimento.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", texto: "Ela vira o caderno para a Reina. Desenhado. Simples. Com uma setinha e um bloquinho de carinha triste descendo a rampa.", proxima: "c4_08" },
    c4_08: { quem: "reina", sprite: "reina", texto: "...Por que o bloquinho está triste?", proxima: "c4_09" },
    c4_09: { quem: "eu", texto: "Porque ele está descendo sozinho.", proxima: "c4_10" },
    c4_10: { tipo: "narracao", texto: "A Reina fica olhando para o desenho. Depois, devagar, pega a caneta e desenha um segundo bloquinho do lado do primeiro. Descendo junto. Com carinha de bravo.", proxima: "c4_11" },
    c4_11: { quem: "reina", texto: "Pronto. Agora ele não está sozinho. Está com um amigo mal-humorado.", proxima: "c4_12" },
    c4_12: { tipo: "pensamento", texto: "...Por que eu quase gostei dela agora?", proxima: "c4_13" },
    c4_13: { tipo: "narracao", sprite: null, texto: "A avó chama da cozinha. Precisa de ajuda para cortar o pudim, porque “essa faca é muito fina e as minhas mãos são muito velhas”. A Reina levanta na hora.", proxima: "c4_14" },
    c4_14: { quem: "reina", sprite: "reina", texto: "Eu vou! Fui eu que trouxe. Eu corto.", proxima: "c4_15" },
    c4_15: { tipo: "narracao", sprite: "takeo", texto: "Ela some na cozinha. E, pela primeira vez na noite, a SN e o Takeo ficam sozinhos na sala.", proxima: "c4_16" },
    c4_16: { tipo: "narracao", texto: "O Takeo fecha o livro. Fica olhando para a capa. Respira. Do jeito que respira antes de falar alguma coisa difícil.", proxima: "c4_17" },
    c4_17: { quem: "takeo", texto: "Posso falar uma coisa? Rápido. Antes dela voltar.", proxima: "c4_18" },
    c4_18: { quem: "eu", texto: "Pode.", proxima: "c4_19" },
    c4_19: { quem: "takeo", texto: "Quando a Reina engancha o braço no meu, eu fico sem jeito.", proxima: "c4_20" },
    c4_20: { quem: "takeo", texto: "Quando você aperta a minha bochecha, ou senta do meu lado, ou só... olha pra mim do outro lado da mesa... eu também fico sem jeito.", proxima: "c4_21" },
    c4_21: { quem: "takeo", texto: "Mas é outro sem jeito. É diferente. Eu queria que você soubesse que é diferente.", proxima: "c4_22" },
    c4_22: { tipo: "narracao", texto: "Ele fala olhando direto para ela. As orelhas vermelhas, a voz firme. Ele não pede resposta. Ele só queria que ela soubesse.", proxima: "c4_cam1" },
    c4_cam1: { caminhos: [
      { flag: "SN_admitiu_ciume_Takeo", proxima: "c4_t_ciume" }
    ], proxima: "c4_esc4" },
    c4_t_ciume: { quem: "takeo", texto: "Você disse na terça que ficou com ciúme. Eu fiquei pensando nisso a semana inteira. Não pra te provocar. É que ninguém nunca teve ciúme de mim.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — O “sem jeito diferente” do Takeo
    c4_esc4: { escolhas: [
      { texto: "A. “Eu também fico sem jeito com você. Desde os seis anos.”", proxima: "c4_4a_1", pontos: { takeo: 3 }, flags: ["Sem_jeito_Takeo"] },
      { texto: "B. Pegar a mão dele em cima do livro. Só por um segundo.", proxima: "c4_4b_1", pontos: { takeo: 3 }, flags: ["Mao_livro_Takeo"] },
      { texto: "C. “Eu sei. Eu também estou tentando entender o meu.”", proxima: "c4_4c_1", pontos: { takeo: 1 }, flags: ["Entendendo_Takeo"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "O Takeo sorri. Aquele sorriso inteiro, de janela aberta. E não fala nada. Não precisa.", proxima: "c4_23" },
    c4_4b_1: { tipo: "narracao", texto: "Ela coloca a mão em cima da dele. A mão do Takeo está quente e tem um calo na ponta do dedo, de tanto segurar lápis.", proxima: "c4_4b_2" },
    c4_4b_2: { tipo: "narracao", texto: "Ele vira a mão. Devagar. E segura a dela de volta. Igual na olaria. Igual na foto do cobertor de patinhos.", proxima: "c4_4b_3" },
    c4_4b_3: { tipo: "narracao", texto: "Da cozinha, a voz da Reina: “Takeo! Onde fica o prato bonito?”. Eles soltam ao mesmo tempo.", proxima: "c4_23" },
    c4_4c_1: { tipo: "narracao", texto: "O Takeo concorda com a cabeça. Sem pressa. Sem tristeza.", proxima: "c4_4c_2" },
    c4_4c_2: { quem: "takeo", texto: "Tudo bem. Eu espero você entender. Eu sou bom em esperar. Eu esperei você voltar por dez anos.", proxima: "c4_4c_3" },
    c4_4c_3: { tipo: "pensamento", texto: "Dez anos. Ele não sabe, mas na outra vida eu também esperei. Do jeito errado. Num lugar onde ele não estava mais.", proxima: "c4_23" },

    // (todas as opções continuam aqui)
    c4_23: { tipo: "narracao", sprite: null, texto: "Na cozinha, a Reina corta o pudim em fatias perfeitas. A avó está do lado dela, segurando o prato. Quando a SN entra para buscar as colheres, ouve um pedaço da conversa.", proxima: "c4_24" },
    c4_24: { quem: "avo_takeo", texto: "...e você não precisa se esforçar tanto, minha filha. Pudim de padaria, pudim caseiro, pudim que racha. Quem gosta da gente gosta de qualquer um.", proxima: "c4_25" },
    c4_25: { tipo: "narracao", sprite: "reina", texto: "A Reina não responde. Ela continua cortando. Mas a faca para no meio da fatia por um segundo.", proxima: "c4_26" },
    c4_26: { tipo: "narracao", texto: "Ela vê a SN na porta. O rosto dela fecha na hora. A máscara volta.", proxima: "c4_27" },
    c4_27: { quem: "reina", texto: "Que foi? Veio ver se eu sei cortar pudim? Eu sei.", proxima: "c4_28" },
    c4_28: { quem: "eu", texto: "Vim buscar colher.", proxima: "c4_29" },
    c4_29: { tipo: "narracao", texto: "A Reina empurra o porta-talheres na direção dela, sem olhar. E, quando a SN pega as colheres, a Reina fala, ainda sem olhar:", proxima: "c4_30" },
    c4_30: { quem: "reina", texto: "O desenho do bloquinho estava bom. Não acostuma.", proxima: "c5_01" },

    /* =================== CENA 5 — ENTREGA =================== */
    // Cenário: sala, depois o portão. Música: tema do Kaito, versão leve.
    c5_01: { tipo: "narracao", cenario: "casa-takeo-sala", transicao: "tempo", legenda: "Cena 5 — Entrega", sprite: null, texto: "Oito e meia da noite. O pudim acabou. Os bolinhos também, menos dois de alga com gergelim que o Takeo está fingindo que não viu.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", texto: "A campainha toca.", proxima: "c5_03" },
    c5_03: { quem: "avo_takeo", texto: "Ué. Quem toca campainha a essa hora?", proxima: "c5_04" },
    c5_04: { tipo: "narracao", cenario: "casa-takeo", texto: "A avó abre o portão azul. Na rua, encostado numa bicicleta de entrega com a caixa térmica nas costas, está o Kaito. De boné. Segurando uma sacola de papel.", proxima: "c5_05" },
    c5_05: { quem: "kaito", sprite: "kaito", texto: "Boa noite. Entrega. Dois lámen de missô.", proxima: "c5_06" },
    c5_06: { quem: "avo_takeo", texto: "Eu não pedi lámen, meu filho.", proxima: "c5_07" },
    c5_07: { tipo: "narracao", texto: "O Kaito olha para a sacola. Olha para a avó. Não muda a cara. Nem um pouco.", proxima: "c5_08" },
    c5_08: { quem: "kaito", texto: "Então é cortesia.", proxima: "c5_09" },
    c5_09: { tipo: "narracao", texto: "Atrás da avó, a SN aparece na porta. O Kaito vê. E olha, de repente, para um poste muito interessante.", proxima: "c5_10" },
    c5_10: { quem: "avo_takeo", texto: "Ora... você é o menino da lojinha de lámen! O sobrinho! Você vinha aqui pequeno buscar o Takeo pra jogar bola e sempre quebrava meus vasos.", proxima: "c5_11" },
    c5_11: { quem: "kaito", texto: "...Dois vasos, senhora. Só dois.", proxima: "c5_12" },
    c5_12: { quem: "avo_takeo", texto: "Três. Mas eu gosto de você mesmo assim. Entra, toma um chá.", proxima: "c5_13" },
    c5_13: { quem: "kaito", texto: "Não precisa. Eu só estava passando. Por acaso.", proxima: "c5_14" },
    c5_14: { tipo: "narracao", texto: "Ele vira o rosto para a SN. Fala do jeito mais casual possível. Casual demais.", proxima: "c5_15" },
    c5_15: { quem: "kaito", texto: "Já que eu estou aqui, eu levo você pra casa. É caminho.", proxima: "c5_16" },
    c5_16: { tipo: "pensamento", texto: "Não é caminho. A casa do Takeo fica no meio do nada. Não é caminho pra lugar nenhum.", proxima: "c5_17" },
    c5_17: { tipo: "narracao", sprite: "takeo", texto: "O Takeo aparece do lado dela na porta. Ele olha para o Kaito. Para a bicicleta. Para o Kaito de novo. E dá um passo à frente.", proxima: "c5_18" },
    c5_18: { quem: "takeo", texto: "Eu levo ela.", proxima: "c5_19" },
    c5_19: { tipo: "narracao", texto: "Ele fala sem gaguejar. Sem olhar para o chão. Baixo e direto, do jeito que ele fala quando já decidiu.", proxima: "c5_20" },
    c5_20: { quem: "takeo", texto: "Ela veio na minha casa. Eu levo ela de volta. É o certo.", proxima: "c5_21" },
    c5_21: { tipo: "narracao", sprite: "kaito", texto: "O Kaito não responde. Ele só olha para o Takeo. Não é o olhar do corredor, que faz os garotos do primeiro ano descerem a escada. É outro. Quase de respeito.", proxima: "c5_22" },
    c5_22: { tipo: "narracao", sprite: null, texto: "Os dois olham para ela. A avó olha para ela. Lá dentro, a Reina parou de lavar a louça para escutar.", proxima: "c5_cam1" },
    c5_cam1: { caminhos: [
      { flag: "Pediu_Kaito_esperar", proxima: "c5_k_portao" }
    ], proxima: "c5_esc5" },
    c5_k_portao: { tipo: "pensamento", texto: "Hoje de manhã ele me esperou no portão da escola. Como eu pedi. E agora está aqui, no portão do Takeo, com dois lámen que ninguém pediu.", proxima: "c5_esc5" },

    // ▶ ESCOLHA 5 — Quem leva a SN pra casa?
    c5_esc5: { sugerir: true, escolhas: [
      { texto: "A. Ir com o Kaito.", proxima: "k_01", pontos: { kaito: 3 }, flags: ["Voltou_com_Kaito"], personagem: "kaito" },
      { texto: "B. Ir com o Takeo.", proxima: "t_01", pontos: { takeo: 3 }, flags: ["Voltou_com_Takeo"], personagem: "takeo" }
    ]},

    /* =================== CAMINHO KAITO — DE BICICLETA =================== */
    // Cenário: rua à noite (usa "saida-colegio"). Música: tema do Kaito, leve e brincalhão.
    k_01: { tipo: "narracao", cenario: "casa-takeo", sprite: "takeo", texto: "O Takeo concorda com a cabeça. Devagar. Ele não insiste. Ele nunca insiste.", proxima: "k_02" },
    k_02: { quem: "takeo", texto: "Tá. Então... me manda mensagem quando chegar. Promete?", proxima: "k_03" },
    k_03: { quem: "eu", texto: "Prometo. Obrigada por hoje, Takeo. De verdade.", proxima: "k_04" },
    k_04: { tipo: "narracao", texto: "Ele sorri. Um pouco menor que o sorriso de janela aberta. Mas sorri. A avó coloca os dois bolinhos de alga num pote e enfia na mão dela.", proxima: "k_05" },
    k_05: { quem: "avo_takeo", texto: "Pro caminho. E volta. Volta sozinha da próxima vez, que eu quero te contar umas coisas desse menino.", proxima: "k_06" },
    k_06: { tipo: "narracao", sprite: "kaito", texto: "O Kaito entrega os dois lámen para a avó mesmo assim. “Cortesia.” E empurra a bicicleta até a esquina, esperando ela alcançar.", proxima: "k_07" },
    k_07: { quem: "kaito", texto: "Sobe.", proxima: "k_08" },
    k_08: { quem: "eu", texto: "Na garupa? Isso é uma bicicleta de entrega. Tem uma caixa térmica.", proxima: "k_09" },
    k_09: { quem: "kaito", texto: "A caixa está vazia. Senta na caixa.", proxima: "k_10" },
    k_10: { tipo: "narracao", texto: "Ela senta na caixa térmica. Ela é pequena, mas a bicicleta balança mesmo assim. O Kaito quase cai no primeiro metro e finge que foi de propósito.", proxima: "k_11" },
    k_11: { quem: "eu", texto: "Você quase caiu.", proxima: "k_12" },
    k_12: { quem: "kaito", texto: "Foi um teste de equilíbrio. Você passou.", proxima: "k_13" },
    k_13: { cenario: "rua-noite", tipo: "narracao", texto: "Ele pedala. A rua está vazia, só os postes amarelos e o barulho da corrente. Na descida, ele para de pedalar e deixa a bicicleta ir sozinha. O vento bate no rosto dela.", proxima: "k_14" },
    k_14: { tipo: "narracao", texto: "E ela ri. Alto. Sem querer. Segurando na jaqueta dele para não cair.", proxima: "k_15" },
    k_15: { quem: "kaito", texto: "Para de rir, você está balançando a bicicleta!", proxima: "k_16" },
    k_16: { quem: "eu", texto: "Você que está rindo também!", proxima: "k_17" },
    k_17: { quem: "kaito", texto: "Eu não estou rindo. É o vento.", proxima: "k_18" },
    k_18: { tipo: "narracao", texto: "Ele está rindo. Ela consegue sentir pelas costas dele, tremendo.", proxima: "k_19" },
    k_19: { tipo: "narracao", texto: "No fim da descida, ele para do lado de uma máquina de bebida. Uma das velhas, com a luz piscando.", proxima: "k_20" },
    k_20: { quem: "kaito", texto: "Pedra, papel e tesoura. Quem perder paga.", proxima: "k_21" },
    k_21: { tipo: "narracao", texto: "Ela ganha. Ele pede melhor de três. Ela ganha de novo. Ele pede melhor de cinco.", proxima: "k_22" },
    k_22: { quem: "eu", texto: "Kaito. Você é o líder de uma gangue. Você está pedindo melhor de cinco no pedra, papel e tesoura.", proxima: "k_23" },
    k_23: { quem: "kaito", texto: "Líder também tem direito a revanche.", proxima: "k_24" },
    k_24: { tipo: "narracao", texto: "Ele perde a quinta. Coloca a moeda na máquina, resmungando. A máquina engole a moeda e não solta nada.", proxima: "k_25" },
    k_25: { tipo: "narracao", texto: "Ele bate na máquina. Nada. Bate de novo. Nada. Ele chuta. A máquina continua lá, piscando, debochando dele.", proxima: "k_esc6" },

    // ▶ ESCOLHA 6K — A máquina de bebida
    k_esc6: { escolhas: [
      { texto: "A. Dar um tapinha de lado na máquina. Só um.", proxima: "k_6a_1", pontos: { kaito: 2 }, flags: ["Maquina_tapa"] },
      { texto: "B. Rir dele até ele desistir.", proxima: "k_6b_1", pontos: { kaito: 2 }, flags: ["Riu_maquina"] },
      { texto: "C. Colocar a sua própria moeda e dividir a bebida com ele.", proxima: "k_6c_1", pontos: { kaito: 3 }, flags: ["Dividiu_bebida_Kaito"] }
    ]},
    k_6a_1: { tipo: "narracao", texto: "Ela dá um tapinha de lado na máquina. Leve. Pelo menos, ela acha que é leve. A máquina estremece inteira e solta três latas de uma vez.", proxima: "k_6a_2" },
    k_6a_2: { tipo: "narracao", texto: "O Kaito olha para as três latas no chão. Para a máquina. Para a mão dela.", proxima: "k_6a_3" },
    k_6a_3: { quem: "kaito", texto: "...Essa máquina é velha. Eu já tinha soltado ela. Você só deu o último toque.", proxima: "k_6a_4" },
    k_6a_4: { quem: "eu", texto: "Claro. Você amoleceu ela pra mim.", proxima: "k_6a_5" },
    k_6a_5: { quem: "kaito", texto: "Exatamente. Que bom que você entende.", proxima: "k_6a_6" },
    k_6a_6: { tipo: "pensamento", texto: "Ele realmente acredita nisso. Ou finge muito bem. Eu deixo ele achar que ganhou.", proxima: "k_26" },
    k_6b_1: { tipo: "narracao", texto: "Ela ri. Ele chuta a máquina de novo. Ela ri mais. Ele aponta para ela com cara de bravo, o que só faz ela rir mais ainda.", proxima: "k_6b_2" },
    k_6b_2: { quem: "kaito", texto: "Isso é uma injustiça. Eu perdi no jogo e perdi pra máquina na mesma noite.", proxima: "k_6b_3" },
    k_6b_3: { quem: "eu", texto: "Você é um péssimo perdedor.", proxima: "k_6b_4" },
    k_6b_4: { quem: "kaito", texto: "Eu sou um ótimo perdedor. Eu tenho muita prática hoje.", proxima: "k_6b_5" },
    k_6b_5: { tipo: "narracao", texto: "E então ele ri também. De verdade. Encostado na máquina, com a mão no rosto. Do jeito que ele só ri com o Ryuji e o Blake, quando ninguém mais está olhando.", proxima: "k_26" },
    k_6c_1: { tipo: "narracao", texto: "Ela coloca a moeda dela. A máquina, por algum milagre, funciona. Cai uma lata de chá de pêssego.", proxima: "k_6c_2" },
    k_6c_2: { tipo: "narracao", texto: "Ela abre, bebe um gole e estende para ele. Ele fica olhando para a lata um segundo a mais do que precisa.", proxima: "k_6c_3" },
    k_6c_3: { quem: "kaito", texto: "...Você bebeu nela.", proxima: "k_6c_4" },
    k_6c_4: { quem: "eu", texto: "Bebi. Você não quer?", proxima: "k_6c_5" },
    k_6c_5: { tipo: "narracao", texto: "Ele pega a lata. Bebe. Rápido. Devolve sem olhar para ela. A orelha está vermelha de novo. Ela começa a achar que a orelha dele é o lugar mais sincero que ele tem.", proxima: "k_26" },

    // (todas as opções continuam aqui)
    k_26: { tipo: "narracao", texto: "Eles voltam a andar. Ele empurra a bicicleta, ela vai do lado, comendo um dos bolinhos de alga da avó. Ela oferece o outro. Ele come em duas mordidas.", proxima: "k_27" },
    k_27: { quem: "kaito", texto: "O Takeo ia levar você.", proxima: "k_28" },
    k_28: { quem: "eu", texto: "Ia.", proxima: "k_29" },
    k_29: { quem: "kaito", texto: "Ele falou firme. Eu não sabia que ele falava assim.", proxima: "k_30" },
    k_30: { tipo: "narracao", texto: "Ele não pergunta por que ela escolheu ele. Ela percebe que ele quer muito perguntar. E percebe que ele não vai.", proxima: "k_cam1" },
    k_cam1: { caminhos: [
      { flag: "Mao_guidao_Kaito", proxima: "k_guidao" }
    ], proxima: "k_31" },
    k_guidao: { tipo: "narracao", texto: "No meio da rua, sem falar nada, ele tira uma mão do guidão. Deixa ela ali, solta, do lado. Esperando. Ela segura no guidão de novo. O mindinho dele encosta no dela. Igual ontem.", proxima: "k_31" },
    k_31: { tipo: "narracao", cenario: "rua-noite", texto: "Na frente do prédio dela, ele para.", proxima: "k_32" },
    k_32: { quem: "kaito", texto: "Manda mensagem pro Takeo. Você prometeu.", proxima: "k_33" },
    k_33: { quem: "eu", texto: "Você está me lembrando de mandar mensagem pro Takeo?", proxima: "k_34" },
    k_34: { quem: "kaito", texto: "Promessa é promessa.", proxima: "k_35" },
    k_35: { tipo: "narracao", texto: "Ele fala isso sério. Do jeito que ele fala da única regra que nunca quebrou. E, depois, mais baixo, já subindo na bicicleta:", proxima: "k_36" },
    k_36: { quem: "kaito", texto: "Foi bom hoje. A descida. A máquina. ...Foi bom.", proxima: "k_37" },
    k_37: { tipo: "narracao", texto: "Ele pedala antes que ela consiga responder. Para o outro lado do bairro. Na esquina, sem olhar para trás, ele levanta a mão.", proxima: "fim_01" },

    /* =================== CAMINHO TAKEO — TRÊS NA RUA =================== */
    // Cenário: rua à noite (usa "saida-colegio"). Música: violão leve, um pouco cômico.
    t_01: { tipo: "narracao", cenario: "casa-takeo", sprite: "kaito", texto: "O Kaito fica parado um segundo. Depois faz que sim com a cabeça. Uma vez. Como quem aceita uma regra.", proxima: "t_02" },
    t_02: { quem: "kaito", texto: "Tá. Leva ela direito.", proxima: "t_03" },
    t_03: { tipo: "narracao", texto: "Ele entrega os dois lámen para a avó. “Cortesia.” Sobe na bicicleta. E, antes de ir, olha para a SN. Só um olhar rápido, que ele corta no meio.", proxima: "t_04" },
    t_04: { tipo: "narracao", sprite: null, texto: "Ele vai embora pedalando. Sem pressa. Sem olhar para trás. A SN fica olhando até a bicicleta virar a esquina.", proxima: "t_05" },
    t_05: { tipo: "narracao", sprite: "reina", texto: "Atrás dela, uma voz. A Reina, com a mochila já nas costas e o pote vazio do pudim embaixo do braço.", proxima: "t_06" },
    t_06: { quem: "reina", texto: "Ótimo. Então eu vou junto.", proxima: "t_07" },
    t_07: { quem: "takeo", sprite: "takeo", texto: "Junto? Mas a sua casa é pro outro lado, Reina...", proxima: "t_08" },
    t_08: { quem: "reina", sprite: "reina", texto: "E daí? Você leva ela, depois você me leva. É justo. Eu também vim na sua casa. Eu também trouxe pudim. Corri até a padaria por esse pudim, inclusive.", proxima: "t_09" },
    t_09: { tipo: "narracao", sprite: "takeo", texto: "O Takeo abre a boca para argumentar. Olha para a Reina. Olha para a SN. Fecha a boca.", proxima: "t_10" },
    t_10: { quem: "takeo", texto: "...Tá bom.", proxima: "t_11" },
    t_11: { quem: "avo_takeo", texto: "Leva as duas, Takeo. E volta antes das dez, senão eu ligo pra lojinha de lámen mandar o sobrinho te buscar de bicicleta.", proxima: "t_12" },
    t_12: { tipo: "narracao", sprite: null, texto: "A avó enfia os dois bolinhos de alga num pote e coloca na mão da SN. E, quando a Reina não está olhando, cochicha no ouvido dela:", proxima: "t_13" },
    t_13: { quem: "avo_takeo", texto: "Volta sozinha da próxima vez. Que eu quero te contar umas coisas desse menino.", proxima: "t_14" },
    t_14: { cenario: "rua-noite", tipo: "narracao", texto: "Os três andam pela rua estreita. A Reina no meio, dessa vez. Ela se colocou lá antes que alguém pudesse discutir.", proxima: "t_15" },
    t_15: { quem: "reina", sprite: "reina", texto: "Takeo, a sua avó é a melhor pessoa do mundo. Eu vou voltar toda sexta. Vou trazer um pudim diferente cada vez.", proxima: "t_16" },
    t_16: { quem: "takeo", sprite: "takeo", texto: "Toda... sexta?", proxima: "t_17" },
    t_17: { quem: "reina", sprite: "reina", texto: "Ela me chamou de menina do pudim. Agora eu tenho uma responsabilidade.", proxima: "t_18" },
    t_18: { tipo: "pensamento", texto: "Ela está falando sério. E o pior é que a avó dele vai adorar.", proxima: "t_19" },
    t_19: { tipo: "narracao", texto: "Na segunda esquina, o celular da Reina toca. Ela olha a tela e a cara dela muda. Fica séria. Dura.", proxima: "t_20" },
    t_20: { quem: "reina", texto: "Esperem aqui. Um minuto. É... da minha casa.", proxima: "t_21" },
    t_21: { tipo: "narracao", sprite: null, texto: "Ela vai até o meio do quarteirão, de costas, falando baixo no telefone. A SN e o Takeo ficam embaixo de um poste, sozinhos.", proxima: "t_22" },
    t_22: { tipo: "narracao", sprite: "takeo", texto: "O Takeo coloca a mão no bolso. Tira um papel dobrado. Entrega para ela.", proxima: "t_23" },
    t_23: { quem: "takeo", texto: "Eu ia te dar no portão. Mas o Kaito chegou. E agora tem a Reina. Então... agora.", proxima: "t_24" },
    t_24: { tipo: "narracao", texto: "Ela desdobra. É um desenho. Feito a lápis, com cuidado. Uma raposa e um bolinho de arroz, de mão dada, descendo uma rampa de plano inclinado. Com as setinhas de força todas certinhas.", proxima: "t_25" },
    t_25: { tipo: "narracao", texto: "Embaixo, na letra torta dele: “Pra você não descer sozinha.”", proxima: "t_26" },
    t_26: { quem: "takeo", texto: "Eu fiz enquanto você e a Reina estavam na cozinha. Ficou feio. A raposa parece um cachorro.", proxima: "t_esc6" },

    // ▶ ESCOLHA 6T — O desenho do Takeo
    t_esc6: { escolhas: [
      { texto: "A. “Não ficou feio. É a coisa mais bonita que alguém já me deu.”", proxima: "t_6a_1", pontos: { takeo: 3 }, flags: ["Amou_desenho_Takeo"] },
      { texto: "B. Guardar o desenho junto da foto da avó, no mesmo bolso.", proxima: "t_6b_1", pontos: { takeo: 2 }, flags: ["Guardou_desenho_Takeo"] },
      { texto: "C. “A raposa parece um cachorro mesmo. Eu adorei.”", proxima: "t_6c_1", pontos: { takeo: 2 }, flags: ["Brincou_desenho_Takeo"] }
    ]},
    t_6a_1: { tipo: "narracao", texto: "O Takeo fica vermelho até a raiz do cabelo. Ele não sabe o que fazer com as mãos. Coloca no bolso, tira do bolso, coloca de novo.", proxima: "t_6a_2" },
    t_6a_2: { quem: "takeo", texto: "...Eu faço outro. Melhor. Com a raposa parecendo raposa.", proxima: "t_6a_3" },
    t_6a_3: { quem: "eu", texto: "Não. Eu quero esse.", proxima: "t_27" },
    t_6b_1: { tipo: "narracao", texto: "Ela dobra o desenho com cuidado e guarda no bolso da saia. Junto da foto dos dois com o bolinho de frango.", proxima: "t_6b_2" },
    t_6b_2: { tipo: "narracao", texto: "O Takeo vê onde ela guardou. E não fala nada. Mas fica com aquela cara de novo. A de quando alguém coloca uma coisa no lugar certo.", proxima: "t_27" },
    t_6c_1: { quem: "takeo", texto: "Eu sabia! Eu sabia que parecia cachorro!", proxima: "t_6c_2" },
    t_6c_2: { quem: "eu", texto: "É um cachorro-raposa. É melhor que uma raposa normal.", proxima: "t_6c_3" },
    t_6c_3: { tipo: "narracao", texto: "Os dois riem embaixo do poste. O riso dele é igual ao da foto. Com a boca cheia de bolinho, aos seis anos.", proxima: "t_27" },

    // (todas as opções continuam aqui)
    t_27: { tipo: "narracao", sprite: "reina", texto: "A Reina volta. Rápido. O rosto já arrumado de novo, o sorriso de capa de revista no lugar. Mas os olhos estão um pouco vermelhos.", proxima: "t_28" },
    t_28: { quem: "reina", texto: "Pronto. Vamos. Por que vocês estão com essa cara?", proxima: "t_29" },
    t_29: { tipo: "pensamento", texto: "Ela chorou. Rápido, no telefone, de costas pra gente. E voltou como se nada tivesse acontecido.", proxima: "t_30" },
    t_30: { tipo: "pensamento", texto: "Eu não vou perguntar. Não é da minha conta. Mas eu vi.", proxima: "t_31" },
    t_31: { tipo: "narracao", cenario: "rua-noite", sprite: null, texto: "Na frente do prédio da SN, os três param.", proxima: "t_32" },
    t_32: { quem: "takeo", sprite: "takeo", texto: "Chegou. Entregue. Inteira.", proxima: "t_33" },
    t_33: { quem: "reina", sprite: "reina", texto: "Agora eu. Vamos, Takeo. A minha casa é longe. Você vai ter que me contar mais histórias do pombo no caminho.", proxima: "t_34" },
    t_34: { tipo: "narracao", texto: "Ela engancha o braço no braço dele. O Takeo olha para trás, por cima do ombro, para a SN. Faz uma careta pequena de socorro. E sorri.", proxima: "t_35" },
    t_35: { tipo: "narracao", sprite: null, texto: "A SN fica no portão, olhando os dois virarem a esquina. A Reina falando. O Takeo ouvindo. O braço dela no dele.", proxima: "t_36" },
    t_36: { tipo: "pensamento", texto: "Eu tenho o desenho dele no bolso. E ela tem o braço dele agora.", proxima: "t_37" },
    t_37: { tipo: "pensamento", texto: "Eu não sei qual dos dois vale mais. Hoje eu acho que é o desenho. Amanhã eu vou achar que é o braço. Ciúme é isso, eu acho.", proxima: "t_38" },
    t_38: { tipo: "narracao", texto: "O celular vibra no bolso.", proxima: "t_39" },
    t_39: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Chegou?", proxima: "t_40" },
    t_40: { tipo: "narracao", texto: "Só isso. Uma palavra. Mandada exatamente na hora em que ela chegou no portão. Como se ele soubesse quanto tempo leva da casa do Takeo até ali, andando.", proxima: "t_41" },
    t_41: { tipo: "pensamento", texto: "Ele calculou. Ele calculou e ficou esperando pra mandar.", proxima: "fim_01" },

    /* =================== FIM DA NOITE (os dois caminhos) =================== */
    // Cenário: quarto da SN. Música: piano baixo.
    fim_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Sexta, 22h", sprite: null, texto: "No quarto, ela tira tudo do bolso e espalha em cima da cama. A carta da avó dela. O bilhete da olaria. A conta da Hana. A foto dos dois com o bolinho de frango.", proxima: "fim_cam1" },
    fim_cam1: { caminhos: [
      { flag: "Voltou_com_Takeo", proxima: "fim_t" }
    ], proxima: "fim_k" },
    fim_t: { tipo: "narracao", texto: "E o desenho. A raposa que parece cachorro e o bolinho de arroz, descendo a rampa juntos.", proxima: "fim_02" },
    fim_k: { tipo: "narracao", texto: "E o pote vazio dos bolinhos de alga da avó, que ela esqueceu de devolver. De propósito, talvez.", proxima: "fim_02" },
    fim_02: { tipo: "pensamento", texto: "Na outra vida, eu tinha uma caixa embaixo da cama. Ela ficou vazia por doze anos.", proxima: "fim_03" },
    fim_03: { tipo: "pensamento", texto: "Nessa, eu estou começando a precisar de uma caixa maior.", proxima: "fim_04" },
    fim_04: { tipo: "narracao", texto: "O celular vibra. Duas mensagens. Uma atrás da outra.", proxima: "fim_cam2" },
    fim_cam2: { caminhos: [
      { flag: "Voltou_com_Takeo", proxima: "fim_msg_t" }
    ], proxima: "fim_msg_k" },
    fim_msg_k: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Chegou? Minha avó perguntou três vezes. Eu perguntei quatro. Ela ganhou o lámen do Kaito. Disse que ele pode quebrar mais um vaso.", proxima: "fim_05" },
    fim_msg_t: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Deixei a Reina em casa. Ela me contou a história do pombo de volta, do jeito dela, umas cinco vezes. Minha avó mandou dizer que guardou o resto do pudim pra você.", proxima: "fim_05" },
    fim_05: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "E AS FOTOS DE BEBÊ????? EU QUERO RELATÓRIO COMPLETO. COM DESENHO.", proxima: "fim_06" },
    fim_06: { tipo: "narracao", texto: "Ela ri sozinha no quarto. Deita. Fica olhando para o teto, com as coisas do bolso espalhadas em volta dela, como uma constelação pequena.", proxima: "fim_07" },
    fim_07: { tipo: "pensamento", texto: "Pela primeira vez desde que eu voltei, eu dormi pensando no dia que passou. E não no dia que ainda pode dar errado.", proxima: "ep_fim" },

    // Fim do Capítulo 13 (crie a entrada "capitulo13" em dados/capitulos.js).
    ep_fim: { fim: "capitulo13" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 14 (anotações do roteiro)
 *  • A ligação da Reina (caminho Takeo): ela chorou rápido, de costas. Problema em casa?
 *    A SN viu e não perguntou.
 *  • A avó quer que a SN volte sozinha: "eu quero te contar umas coisas desse menino".
 *  • O Kaito apareceu com lámen que ninguém pediu. Ele não perguntou por que ela escolheu ele
 *    (ou mandou "Chegou?" no caminho Takeo).
 *  • O Takeo falou firme na frente do Kaito pela primeira vez.
 *  • A Sayuri e quem mandou o balde continuam em aberto.
 *  • O Ren continua sumido.
 *
 * ESCOLHAS DO CAPÍTULO (6 por caminho)
 *  1 Cumprimentando a avó · 2 A história da viga · 3 Uma foto do álbum
 *  4 O "sem jeito diferente" do Takeo · 5 QUEM LEVA A SN (Kaito / Takeo)
 *  6K A máquina de bebida · 6T O desenho do Takeo
 *
 * FLAGS NOVAS
 *  Reverencia_avo · Abracou_avo · Ajudou_cozinha_avo · Diminuiu_viga · Takeo_contou_viga
 *  Contou_mao_viga · Foto_cobertor · Foto_festival · Incluiu_Reina_album · Sem_jeito_Takeo
 *  Mao_livro_Takeo · Entendendo_Takeo · Voltou_com_Kaito · Voltou_com_Takeo · Maquina_tapa
 *  Riu_maquina · Dividiu_bebida_Kaito · Amou_desenho_Takeo · Guardou_desenho_Takeo
 *  Brincou_desenho_Takeo
 */