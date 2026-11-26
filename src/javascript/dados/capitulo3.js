/*
 * =====================================================================
 *  CAPÍTULO 3 — O microfone e a faca
 *  Sexta-feira, o dia seguinte ao Capítulo 2.
 *  Mesmo formato do capitulo1.js e do capitulo2.js: cada linha é uma cena.
 * =====================================================================
 *
 *  PERSONAGENS NOVOS OU AINDA SEM FICHA NO JOGO
 *    Jin, Shinji e Sayuri falam com quem: "desconhecido" + rotulo com o nome.
 *    Quando criar os personagens em dados/personagens.js, troque quem por
 *    "jin", "shinji" e "sayuri".
 *
 *  CENÁRIOS (todos já existem)
 *    A sala de karaokê usa "clube-leitura" (é uma salinha fechada).
 *    A calçada do karaokê e a rua da noite usam "saida-colegio".
 *    O beco onde o Shinji encurrala a SN usa "beco-mercado".
 *    Se criar "karaoke" ou "rua-noite", é só trocar o cenario nessas cenas.
 *
 *  MÚSICAS DO KARAOKÊ: os títulos são inventados e não há letra de música no
 *  roteiro. Se for usar músicas reais no jogo, coloque só o título e o artista.
 *
 *  FLAGS DOS CAPÍTULOS ANTERIORES USADAS AQUI (com caminhos)
 *    Takeo_ferido, Kaito_ferido, Blake_ferido, Ryuji_ferido, Mio_ferida,
 *    Galpao_salvou_Kaito, Kaito_lembranca_parquinho, Amigas_sabem_bullying,
 *    Reina_desarmada, Reina_rivalidade_forte.
 *
 *  Título, capa e gancho ficam em dados/capitulos.js: crie a entrada "capitulo3".
 */
Roteiro.registrar("capitulo3", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — A CARTEIRA DO TAKEO =================== */
    // Cenário: sala de aula, prova de física. Silêncio, só o barulho dos lápis. Música: nenhuma.
    c1_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Cena 1 — A carteira do Takeo", sprite: null, texto: "Sexta-feira. Prova de física. A sala inteira em silêncio, só o barulho de lápis arranhando papel e do ventilador de teto girando torto.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "A SN não está olhando para a prova. Ela está olhando para a terceira carteira da fileira da janela.", proxima: "c1_03" },
    c1_03: { tipo: "narracao", efeito: "flashback", texto: "Da primeira vez, essa carteira ficou vazia. A professora entregou a prova, olhou para o lugar vazio, suspirou e anotou alguma coisa na lista de chamada.", proxima: "c1_04" },
    c1_04: { tipo: "narracao", efeito: "flashback", texto: "No dia seguinte, o Takeo apareceu com o braço engessado. E nunca fez aquela prova.", proxima: "c1_cam1" },

    c1_cam1: { caminhos: [
      { flag: "Takeo_ferido", proxima: "c1_t_ferido" }
    ], proxima: "c1_t_normal" },
    c1_t_ferido: { tipo: "narracao", sprite: "takeo", texto: "Hoje, a carteira não está vazia. O Takeo está lá, um pouco curvado por causa da barriga ainda dolorida, segurando o lápis com força, mordendo a ponta da língua de concentração.", proxima: "c1_05" },
    c1_t_normal: { tipo: "narracao", sprite: "takeo", texto: "Hoje, a carteira não está vazia. O Takeo está lá, com o curativo duplo na bochecha, segurando o lápis com força, mordendo a ponta da língua de concentração.", proxima: "c1_05" },

    c1_05: { tipo: "pensamento", texto: "Ele está aqui. Ele está fazendo a prova.", proxima: "c1_06" },
    c1_06: { tipo: "pensamento", texto: "É uma coisa tão pequena. Uma prova de física. Mas é a primeira coisa que eu mudei e que eu consigo ver com os meus próprios olhos.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", texto: "Os olhos dela ardem. Ela abaixa a cabeça para a prova antes que alguém perceba.", proxima: "c1_08" },
    c1_08: { tipo: "narracao", sprite: "sayuri", texto: "Do outro lado da sala, a Sayuri está olhando para ela. Não com aquele sorriso de sempre. Com um olhar fixo, quieto, de quem está guardando alguma coisa para depois.", proxima: "c1_09" },
    c1_09: { tipo: "pensamento", sprite: null, texto: "Ela vai tentar alguma coisa. Eu conheço esse olhar. Eu passei três anos com medo dele.", proxima: "c1_10" },
    c1_10: { tipo: "pensamento", texto: "Agora eu só presto atenção nele.", proxima: "c1_11" },
    c1_11: { tipo: "narracao", sprite: null, texto: "O sinal toca. A professora recolhe as provas. A sala explode em conversa e reclamação.", proxima: "c1_12" },
    c1_12: { tipo: "narracao", sprite: "takeo", texto: "O Takeo vem até a mesa dela com a cara de quem acabou de sair de uma guerra.", proxima: "c1_13" },
    c1_13: { quem: "takeo", texto: "Eu acho que eu zerei. A questão quatro tinha uma polia. Eu não sei o que é uma polia, SN. Eu nunca vi uma polia na vida.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — O que dizer ao Takeo depois da prova?
    c1_esc1: { escolhas: [
      { texto: "A. “Se você zerou, eu te ajudo a estudar pra recuperação. Toda tarde.”", proxima: "c1_1a_1", pontos: { takeo: 2 }, flags: ["Estudar_com_Takeo"] },
      { texto: "B. “Você estava aqui. Isso já é uma vitória.”", proxima: "c1_1b_1", pontos: { takeo: 2, desvio: 1 } },
      { texto: "C. “Polia é tipo uma rodinha com corda. Você usa toda vez que sobe a bandeira da escola.”", proxima: "c1_1c_1", pontos: { takeo: 1, hana: 1 } }
    ]},
    c1_1a_1: { tipo: "narracao", texto: "O Takeo congela. Depois tenta parecer tranquilo, e falha completamente.", proxima: "c1_1a_2" },
    c1_1a_2: { quem: "takeo", texto: "Toda tarde? Tipo, todas? Você e eu? Estudando?", proxima: "c1_1a_3" },
    c1_1a_3: { quem: "eu", texto: "Se você quiser.", proxima: "c1_1a_4" },
    c1_1a_4: { quem: "takeo", texto: "Eu quero. Quer dizer. Pela física. Eu quero muito aprender física.", proxima: "c1_1a_5" },
    c1_1a_5: { tipo: "narracao", sprite: "mio", texto: "Atrás dele, a Mio faz um coração com as mãos e mexe as sobrancelhas. A SN finge que não viu.", proxima: "c1_14" },

    c1_1b_1: { tipo: "narracao", texto: "O Takeo inclina a cabeça, confuso.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "takeo", texto: "Claro que eu estava aqui. Onde mais eu ia estar?", proxima: "c1_1b_3" },
    c1_1b_3: { tipo: "pensamento", texto: "No hospital. Com o braço quebrado. Sozinho.", proxima: "c1_1b_4" },
    c1_1b_4: { quem: "eu", texto: "Em qualquer lugar. Mas você escolheu aqui.", proxima: "c1_1b_5" },
    c1_1b_5: { tipo: "narracao", texto: "Ele não entende. Mas sorri mesmo assim, como se ela tivesse dito a coisa mais bonita do mundo.", proxima: "c1_14" },

    c1_1c_1: { tipo: "narracao", texto: "O Takeo fica em silêncio. Depois bate a mão na testa.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "takeo", texto: "A BANDEIRA. Eu ajudo a subir a bandeira toda segunda!", proxima: "c1_1c_3" },
    c1_1c_3: { tipo: "narracao", sprite: "hana", texto: "Da mesa ao lado, a Hana solta uma risada pelo nariz, baixinha. Ela tapa a boca, surpresa consigo mesma.", proxima: "c1_14" },

    // (todas as opções continuam aqui)
    c1_14: { tipo: "narracao", cenario: "corredor", sprite: null, texto: "No caminho para o intervalo, a SN passa pelo armário de sapatos. Ela abre o dela devagar, preparada para o pior.", proxima: "c1_15" },
    c1_15: { tipo: "narracao", texto: "Está limpo. Os sapatos novos que a mãe comprou ontem à noite estão secos, intactos. Do lado, dobrado, um bilhete.", proxima: "c1_16" },
    c1_16: { tipo: "narracao", texto: "Não é caneta rosa. É uma letra grande, torta, apertada, de quem escreve pouco: “Elas não vão mexer no seu armário de novo. — K.”", proxima: "c1_17" },
    c1_17: { tipo: "pensamento", texto: "Kaito.", proxima: "c1_18" },
    c1_18: { tipo: "narracao", texto: "Dentro do bilhete, um adesivo de caveira. Do tipo que vem em chiclete. Ela fica olhando para ele mais tempo do que deveria.", proxima: "c2_01" },

    /* =================== CENA 2 — A ÚNICA DERROTA =================== */
    // Cenário: pátio dos fundos, arquibancada, intervalo. Música: tema da gangue, mais suave.
    c2_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Cena 2 — A única derrota", sprite: null, texto: "No intervalo, um garoto da gangue que ela nunca viu antes para na porta da sala, nervoso, e pede para ela ir até o pátio dos fundos. “O Kaito quer falar com você.”", proxima: "c2_02" },
    c2_02: { tipo: "narracao", texto: "A Mio levanta para ir junto. O garoto diz “só ela” com uma voz tão sofrida que a Mio fica com pena e senta de novo.", proxima: "c2_03" },
    c2_03: { tipo: "narracao", texto: "A arquibancada está vazia. Só o Kaito, sentado no degrau mais alto, quicando a bola de tênis no chão. Ele não está com aquele sorriso de sempre.", proxima: "c2_cam1" },

    c2_cam1: { caminhos: [
      { flag: "Kaito_ferido", proxima: "c2_k_ferido" }
    ], proxima: "c2_04" },
    c2_k_ferido: { tipo: "narracao", sprite: "kaito", texto: "A sobrancelha dele tem três pontos, uma linha escura costurada no meio do rosto. Ele parece mais perigoso do que nunca. E, de algum jeito, mais cansado também.", proxima: "c2_04" },

    c2_04: { tipo: "narracao", sprite: "kaito", texto: "Ele faz um sinal com a cabeça. Ela sobe os degraus e senta um abaixo dele.", proxima: "c2_05" },
    c2_05: { quem: "kaito", texto: "Obrigada pelo bilhete. Quer dizer. Obrigado. Ah. De nada. Você entendeu.", proxima: "c2_06" },
    c2_06: { quem: "eu", texto: "Eu que agradeço. O adesivo de caveira foi um toque especial.", proxima: "c2_07" },
    c2_07: { quem: "kaito", texto: "Foi o único que eu tinha. Não comenta.", proxima: "c2_08" },
    c2_08: { tipo: "narracao", texto: "Ele quica a bola de novo. Uma vez. Duas. Depois segura.", proxima: "c2_09" },
    c2_09: { quem: "kaito", texto: "Eu vou te contar uma coisa que ninguém sabe. Nem o Blake. Se você rir, eu te jogo dessa arquibancada.", proxima: "c2_10" },
    c2_10: { quem: "eu", texto: "Você não conseguiria.", proxima: "c2_11" },
    c2_11: { quem: "kaito", texto: "...É exatamente sobre isso que eu quero falar.", proxima: "c2_12" },
    c2_12: { quem: "kaito", texto: "Quando eu tinha uns seis anos, eu fui num parquinho do outro lado do bairro. Eu já era o maior da minha turma. Eu já achava que mandava em tudo.", proxima: "c2_13" },
    c2_13: { quem: "kaito", texto: "Tinha uns garotos mais velhos mexendo com uma menina nova. Eles amassaram um desenho dela. E eu... eu ri junto. Eu queria que os mais velhos achassem que eu era legal.", proxima: "c2_14" },
    c2_14: { tipo: "narracao", efeito: "flashback", texto: "Alguma coisa se mexe no fundo da memória da SN. Um banco de parquinho. Um desenho de lápis de cor. Uma mão amassando o papel.", proxima: "c2_15" },
    c2_15: { quem: "kaito", texto: "Aí apareceu uma outra menina. Loira, barulhenta. Ficou na frente da menina do desenho. Os mais velhos foram embora quando um adulto chegou. Mas eu fiquei.", proxima: "c2_16" },
    c2_16: { quem: "kaito", texto: "No dia seguinte, eu voltei sozinho. A menina do desenho estava lá, no mesmo banco. E eu fui lá terminar o que os mais velhos começaram. Eu peguei o desenho novo dela.", proxima: "c2_17" },
    c2_17: { tipo: "narracao", efeito: "flashback", texto: "A memória fica mais nítida. Um menino de cabelo preto bagunçado. O desenho novo, de um gato, na mão dele. A raiva que veio de algum lugar que ela nem sabia que existia.", proxima: "c2_18" },
    c2_18: { quem: "kaito", texto: "Ela me empurrou. Uma vez. Eu voei. Eu caí de costas na areia tão forte que fiquei sem ar. Ela pegou o desenho, sentou de novo no banco e continuou pintando. Como se eu não existisse.", proxima: "c2_19" },
    c2_19: { quem: "kaito", texto: "Eu nunca perdi uma briga depois disso. Nenhuma. Eu treinei a vida inteira pra nunca mais sentir aquilo.", proxima: "c2_cam2" },

    // A revelação depende de ele já ter percebido no galpão
    c2_cam2: { caminhos: [
      { flag: "Galpao_salvou_Kaito", proxima: "c2_r_sabe" },
      { flag: "Kaito_lembranca_parquinho", proxima: "c2_r_sabe" }
    ], proxima: "c2_r_descobre" },
    c2_r_sabe: { quem: "kaito", texto: "E ontem, no galpão, eu vi o mesmo olhar. A mesma cara de quem não está nem aí pra mim. Era você, SN. A menina do parquinho era você.", proxima: "c2_20" },
    c2_r_descobre: { quem: "kaito", texto: "A menina tinha uma franja torta. Cortada em casa. E desenhava gatos. Eu vi seu caderno ontem, quando você saiu do galpão. Tinha um gato no canto da página.", proxima: "c2_r_descobre2" },
    c2_r_descobre2: { quem: "kaito", texto: "Era você. A menina do parquinho era você.", proxima: "c2_20" },

    c2_20: { tipo: "narracao", texto: "A SN fica olhando para ele. O parquinho. A areia. O desenho do gato. Ela sempre lembrou da Mio salvando ela. Ela nunca lembrou do dia seguinte.", proxima: "c2_21" },
    c2_21: { tipo: "pensamento", texto: "Eu empurrei um menino. Um só. A vovó ficou uma semana sem falar comigo. Foi a primeira vez que ela me disse que nossa força não existia para ferir.", proxima: "c2_22" },
    c2_22: { tipo: "pensamento", texto: "Eu apaguei o menino da memória. Eu só lembrei da bronca.", proxima: "c2_23" },
    c2_23: { quem: "eu", texto: "...Era eu.", proxima: "c2_24" },
    c2_24: { quem: "kaito", texto: "Eu sabia!", proxima: "c2_25" },
    c2_25: { quem: "eu", texto: "Mas eu não lembrava de você. Só lembrava da bronca da minha avó.", proxima: "c2_26" },
    c2_26: { tipo: "narracao", texto: "O Kaito fica completamente imóvel. A bola de tênis escapa da mão dele e desce a arquibancada, quicando degrau por degrau.", proxima: "c2_27" },
    c2_27: { quem: "kaito", texto: "Você. Não. Lembrava.", proxima: "c2_28" },
    c2_28: { quem: "eu", texto: "Não.", proxima: "c2_29" },
    c2_29: { quem: "kaito", texto: "Eu passei onze anos pensando nisso. Onze anos. Eu construí uma reputação inteira por causa de você. E você não lembrava?!", proxima: "c2_30" },
    c2_30: { tipo: "narracao", texto: "Ele se joga para trás na arquibancada, cobre o rosto com as duas mãos e solta um gemido longo, sofrido, de quem acabou de levar o maior golpe da vida.", proxima: "c2_31" },
    c2_31: { tipo: "narracao", texto: "A SN tenta segurar. Não consegue. A risada escapa.", proxima: "c2_32" },
    c2_32: { quem: "kaito", texto: "Você está RINDO?", proxima: "c2_33" },
    c2_33: { quem: "eu", texto: "Desculpa. Desculpa. É que você está fazendo bico.", proxima: "c2_34" },
    c2_34: { quem: "kaito", texto: "Eu não faço bico. Líder de gangue não faz bico.", proxima: "c2_35" },
    c2_35: { tipo: "narracao", texto: "Ele está fazendo bico. Depois de um tempo, ele tira as mãos do rosto e olha para o céu. A voz fica mais baixa.", proxima: "c2_36" },
    c2_36: { quem: "kaito", texto: "Sabe o que é engraçado? Eu ri dos garotos mais velhos amassando seu desenho porque eu queria ser forte igual a eles. E quem me ensinou o que é força de verdade foi você.", proxima: "c2_37" },
    c2_37: { quem: "kaito", texto: "Você não me bateu de raiva. Você me empurrou porque eu estava machucando você. E depois voltou a pintar. Eu nunca esqueci isso.", proxima: "c2_38" },
    c2_38: { tipo: "narracao", texto: "Ele senta de novo. O olhar convencido volta, mas com outra coisa por baixo. Uma coisa que parece muito com respeito.", proxima: "c2_39" },
    c2_39: { quem: "kaito", texto: "Eu quero uma revanche.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — A revanche do Kaito
    c2_esc2: { escolhas: [
      { texto: "A. “Aceito. Mas, se eu ganhar de novo, você me deve onze anos de pedido de desculpas.”", proxima: "c2_2a_1", pontos: { kaito: 2 }, flags: ["Revanche_marcada"] },
      { texto: "B. “Não. Eu não brigo com quem eu gosto.”", proxima: "c2_2b_1", pontos: { kaito: 3, desvio: 1 }, flags: ["Kaito_ouviu_gosto"] },
      { texto: "C. “Primeiro você pede desculpa pela menina do desenho. Depois a gente conversa.”", proxima: "c2_2c_1", pontos: { kaito: 2 }, flags: ["Kaito_pediu_desculpa"] }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "Os olhos do Kaito brilham como os de uma criança na frente de um presente.", proxima: "c2_2a_2" },
    c2_2a_2: { quem: "kaito", texto: "Fechado. Mas não hoje. Eu preciso treinar. Uns seis meses. Talvez um ano.", proxima: "c2_2a_3" },
    c2_2a_3: { quem: "eu", texto: "Eu espero.", proxima: "c2_2a_4" },
    c2_2a_4: { quem: "kaito", texto: "Você fala isso com uma calma que me dá medo, sabia?", proxima: "c2_40" },

    c2_2b_1: { tipo: "narracao", texto: "Silêncio. Um silêncio enorme.", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "kaito", texto: "...Você gosta de mim?", proxima: "c2_2b_3" },
    c2_2b_3: { tipo: "narracao", texto: "A SN percebe o que acabou de dizer. O rosto inteiro dela esquenta.", proxima: "c2_2b_4" },
    c2_2b_4: { quem: "eu", texto: "Como amigo. Gosto como amigo. Gosto como eu gosto de... pão de queijo.", proxima: "c2_2b_5" },
    c2_2b_5: { quem: "kaito", texto: "Você me comparou a um pão de queijo.", proxima: "c2_2b_6" },
    c2_2b_6: { quem: "eu", texto: "É um elogio. A Mio ama pão de queijo.", proxima: "c2_2b_7" },
    c2_2b_7: { tipo: "narracao", texto: "O Kaito ri. Mas, quando ela olha de novo, ele está olhando para ela de um jeito que não tem nada de pão de queijo.", proxima: "c2_40" },

    c2_2c_1: { tipo: "narracao", texto: "O Kaito abre a boca para discutir. Depois fecha. Depois desce dois degraus até ficar na altura dela.", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "kaito", texto: "Desculpa. Pelo desenho. Pelo gato. Por ter rido. Eu era um idiota.", proxima: "c2_2c_3" },
    c2_2c_3: { quem: "eu", texto: "Era?", proxima: "c2_2c_4" },
    c2_2c_4: { quem: "kaito", texto: "...Estou tentando ser menos. Isso conta?", proxima: "c2_2c_5" },
    c2_2c_5: { tipo: "pensamento", texto: "Ninguém nunca me pediu desculpa por nada daquela época. Nem uma vez.", proxima: "c2_40" },

    // (todas as opções continuam aqui)
    c2_40: { tipo: "narracao", texto: "O sinal toca. O Kaito levanta, desce a arquibancada e pega a bola de tênis no chão. Antes de ir, ele vira.", proxima: "c2_41" },
    c2_41: { quem: "kaito", texto: "SN. O Blake me contou do Jin. Do carro preto. Eu não sei o que o Takeo meteu a gente, mas é maior que briga de escola.", proxima: "c2_42" },
    c2_42: { quem: "kaito", texto: "Hoje à noite, não anda sozinha. Por favor.", proxima: "c2_43" },
    c2_43: { tipo: "pensamento", texto: "“Por favor.” O Kaito falou “por favor”.", proxima: "c2_44" },
    c2_44: { tipo: "pensamento", texto: "E eu já sei que não vou obedecer.", proxima: "c3_01" },

    /* =================== CENA 3 — AULA PARTICULAR =================== */
    // Cenário: sala do clube de leitura, depois da aula. Música: violino suave.
    c3_01: { tipo: "narracao", cenario: "clube-leitura", transicao: "tempo", legenda: "Cena 3 — Aula particular", sprite: null, texto: "Depois da aula, a SN vai para o clube de leitura esperar a Hana e a Mio. O karaokê é às sete. Ainda faltam duas horas.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", sprite: "blake", texto: "Quando ela abre a porta, quem está lá não é a Hana. É o Blake. Sentado numa cadeira pequena demais para ele, com o livro de física aberto e uma cara de profunda derrota.", proxima: "c3_cam1" },

    c3_cam1: { caminhos: [
      { flag: "Blake_ferido", proxima: "c3_b_ferido" }
    ], proxima: "c3_03" },
    c3_b_ferido: { tipo: "narracao", texto: "A mão direita dele está imobilizada, dois dedos presos numa tala. Ele está tentando segurar o lápis com a mão esquerda. A letra está parecendo de criança de cinco anos.", proxima: "c3_03" },

    c3_03: { quem: "blake", texto: "Você é boa em física.", proxima: "c3_04" },
    c3_04: { quem: "eu", texto: "Isso foi uma pergunta?", proxima: "c3_05" },
    c3_05: { quem: "blake", texto: "Foi uma constatação. Eu vi sua nota do bimestre passado no mural.", proxima: "c3_06" },
    c3_06: { tipo: "narracao", texto: "Ele empurra a prova de física da manhã pela mesa. Ainda não corrigida, mas ele já sabe. Tem pelo menos cinco questões em branco.", proxima: "c3_07" },
    c3_07: { quem: "blake", texto: "Se eu tirar menos que cinco na recuperação, o treinador me tira do time de judô. E o judô é a única coisa que me mantém longe de... certas brigas.", proxima: "c3_08" },
    c3_08: { quem: "blake", texto: "Eu não peço ajuda pra ninguém. Eu estou pedindo pra você.", proxima: "c3_09" },
    c3_09: { tipo: "pensamento", texto: "O Blake, o maior aluno da escola, sentado numa cadeirinha do clube de leitura, pedindo ajuda em física.", proxima: "c3_10" },
    c3_10: { tipo: "pensamento", texto: "Se eu contasse isso pra mim mesma aos dezesseis, eu não ia acreditar.", proxima: "c3_11" },
    c3_11: { tipo: "narracao", texto: "Ela puxa uma cadeira e senta do lado dele. Durante quase uma hora, os dois estudam. Polias. Planos inclinados. Força de atrito.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", texto: "O Blake não é burro. Longe disso. Ele só nunca teve ninguém com paciência para explicar. Quando ele entende a primeira questão sozinho, ele fica olhando para o papel como se tivesse ganhado uma luta.", proxima: "c3_13" },
    c3_13: { quem: "blake", texto: "...É só isso? A força vai pra baixo e a corda puxa pra cima?", proxima: "c3_14" },
    c3_14: { quem: "eu", texto: "É só isso.", proxima: "c3_15" },
    c3_15: { quem: "blake", texto: "Por que o professor fala como se fosse a coisa mais difícil do mundo?", proxima: "c3_16" },
    c3_16: { quem: "eu", texto: "Porque às vezes quem sabe muito esquece como era não saber.", proxima: "c3_17" },
    c3_17: { tipo: "narracao", texto: "O Blake olha para ela de um jeito estranho, como se ela tivesse dito alguma coisa que não era sobre física.", proxima: "c3_18" },
    c3_18: { tipo: "narracao", texto: "Ele fecha o livro. Fica um tempo mexendo na tampa da caneta.", proxima: "c3_19" },
    c3_19: { quem: "blake", texto: "A Mio vai no karaokê hoje?", proxima: "c3_20" },
    c3_20: { quem: "eu", texto: "Vai. Por quê?", proxima: "c3_21" },
    c3_21: { quem: "blake", texto: "Por nada.", proxima: "c3_22" },
    c3_22: { tipo: "narracao", texto: "Ele pergunta de novo dois minutos depois, de outro jeito. “Ela vai voltar sozinha pra casa?” E, mais um minuto depois: “Ela ainda está mancando?”", proxima: "c3_23" },
    c3_23: { tipo: "pensamento", texto: "Ah.", proxima: "c3_24" },
    c3_24: { tipo: "pensamento", texto: "A Mio gosta do Blake. E o Blake... talvez não saiba ainda o que sente. Mas ele pergunta dela três vezes em cinco minutos.", proxima: "c3_25" },
    c3_25: { tipo: "pensamento", texto: "E ele está estudando física comigo. E me olhou daquele jeito agora há pouco.", proxima: "c3_26" },
    c3_26: { tipo: "pensamento", texto: "...Isso vai ficar complicado.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — A Mio, o Blake e a SN
    c3_esc3: { escolhas: [
      { texto: "A. “Você podia perguntar isso pra ela. Ela ia adorar.”", proxima: "c3_3a_1", pontos: { blake: 1, mio: 2 }, flags: ["SN_empurrou_Blake_Mio"] },
      { texto: "B. “Você pergunta muito da Mio. E de mim, você não pergunta nada?”", proxima: "c3_3b_1", pontos: { blake: 3, desvio: 1 }, flags: ["SN_provocou_Blake"] },
      { texto: "C. “Você se preocupa com todo mundo, Blake. Quem se preocupa com você?”", proxima: "c3_3c_1", pontos: { blake: 2 }, flags: ["Blake_desabafou"] }
    ]},
    c3_3a_1: { tipo: "narracao", texto: "O Blake fica vermelho. O Blake, que nunca fica vermelho.", proxima: "c3_3a_2" },
    c3_3a_2: { quem: "blake", texto: "Ela ia fazer piada. Ela faz piada de tudo.", proxima: "c3_3a_3" },
    c3_3a_3: { quem: "eu", texto: "Ela faz piada quando está nervosa. Com você, ela faz muita piada.", proxima: "c3_3a_4" },
    c3_3a_4: { tipo: "narracao", texto: "O Blake fica um bom tempo em silêncio, processando isso como processou a polia.", proxima: "c3_3a_5" },
    c3_3a_5: { quem: "blake", texto: "...Ah.", proxima: "c3_3a_6" },
    c3_3a_6: { tipo: "pensamento", texto: "Eu fiz certo. Eu acho. Por que eu estou sentindo um aperto estranho no peito, então?", proxima: "c3_27" },

    c3_3b_1: { tipo: "narracao", texto: "O Blake vira para ela devagar.", proxima: "c3_3b_2" },
    c3_3b_2: { quem: "blake", texto: "Você quer que eu pergunte de você?", proxima: "c3_3b_3" },
    c3_3b_3: { quem: "eu", texto: "Eu só achei injusto. Eu estou aqui há uma hora te ensinando polia.", proxima: "c3_3b_4" },
    c3_3b_4: { tipo: "narracao", texto: "O canto da boca dele se mexe. Dessa vez, vira um sorriso de verdade. Pequeno, torto, mas de verdade.", proxima: "c3_3b_5" },
    c3_3b_5: { quem: "blake", texto: "Tá. Você vai voltar sozinha pra casa?", proxima: "c3_3b_6" },
    c3_3b_6: { quem: "eu", texto: "Talvez.", proxima: "c3_3b_7" },
    c3_3b_7: { quem: "blake", texto: "Você ainda está com aquela cara de quem fez uma conta e deu errado?", proxima: "c3_3b_8" },
    c3_3b_8: { quem: "eu", texto: "Um pouco.", proxima: "c3_3b_9" },
    c3_3b_9: { quem: "blake", texto: "Pronto. Perguntei três vezes. Está empatado.", proxima: "c3_27" },

    c3_3c_1: { tipo: "narracao", texto: "O Blake para de mexer na caneta.", proxima: "c3_3c_2" },
    c3_3c_2: { quem: "blake", texto: "Ninguém precisa.", proxima: "c3_3c_3" },
    c3_3c_3: { quem: "eu", texto: "Todo mundo precisa.", proxima: "c3_3c_4" },
    c3_3c_4: { tipo: "narracao", texto: "Um silêncio longo. Lá fora, alguém treina trompete muito mal.", proxima: "c3_3c_5" },
    c3_3c_5: { quem: "blake", texto: "Meu pai foi embora quando eu tinha nove. Eu tenho dois irmãos menores. Eu cuido deles, eu cuido do Kaito, eu cuido do Takeo. Se eu parar pra alguém cuidar de mim, quem segura o resto?", proxima: "c3_3c_6" },
    c3_3c_6: { quem: "eu", texto: "Ninguém disse que você tem que parar. Só que você podia deixar alguém segurar um pedaço.", proxima: "c3_3c_7" },
    c3_3c_7: { tipo: "narracao", texto: "Ele olha para ela por muito tempo. Depois empurra o livro de física para o meio da mesa, entre os dois.", proxima: "c3_3c_8" },
    c3_3c_8: { quem: "blake", texto: "...Começa por esse pedaço, então. A questão sete.", proxima: "c3_27" },

    // (todas as opções continuam aqui)
    c3_27: { tipo: "narracao", sprite: null, texto: "A porta do clube se abre de uma vez.", proxima: "c3_28" },
    c3_28: { quem: "mio", sprite: "mio", efeito: "grito", texto: "KARAOKÊ! KARAOKÊ! KARA... ah. Oi, Blake.", proxima: "c3_29" },
    c3_29: { tipo: "narracao", texto: "A Mio congela na porta, com o braço ainda levantado, ao ver o Blake sentado do lado da SN. Atrás dela, a Hana espia por cima do ombro.", proxima: "c3_30" },
    c3_30: { quem: "blake", sprite: "blake", texto: "Oi.", proxima: "c3_31" },
    c3_31: { quem: "mio", texto: "Vocês dois estavam... estudando? Sozinhos? Que legal! Muito legal. Super legal.", proxima: "c3_32" },
    c3_32: { tipo: "narracao", texto: "A voz da Mio está um tom mais alta que o normal. O sorriso, um pouco largo demais. A SN conhece esse sorriso. É o sorriso que a Mio usa para esconder quando alguma coisa machuca.", proxima: "c3_33" },
    c3_33: { quem: "blake", texto: "Física. Ela me ajudou com física.", proxima: "c3_34" },
    c3_34: { quem: "mio", texto: "Claro! A SN é um gênio. A gente vai indo, então! Tchau, Blake! Boa física!", proxima: "c3_35" },
    c3_35: { tipo: "narracao", texto: "Ela agarra o braço da SN e sai puxando. O Blake fica sozinho no clube, olhando para a porta, com a caneta parada no ar.", proxima: "c4_01" },

    /* =================== CENA 4 — QUANDO O MICROFONE LIGA =================== */
    // Cenário: sala de karaokê, noite (usa "clube-leitura"). Luzes coloridas, sofá de couro rasgado. Música: tema animado.
    c4_01: { tipo: "narracao", cenario: "sala-de-karaoke", transicao: "tempo", legenda: "Cena 4 — Quando o microfone liga", sprite: null, texto: "O karaokê novo perto da estação é pequeno, cheira a pipoca e desinfetante, e a sala que elas alugaram tem um sofá de couro rasgado e uma bola de discoteca que gira com um barulhinho de motor velho.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "A SN nunca foi a um karaokê. Nem aos dezesseis, nem aos vinte e oito. Ela sempre arrumou uma desculpa.", proxima: "c4_03" },
    c4_03: { tipo: "pensamento", texto: "Regra número 5.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", sprite: "mio", texto: "A Mio já está com o controle na mão, digitando números de música sem parar. Desde que saíram do clube, ela fala sem parar. De tudo. Menos do Blake.", proxima: "c4_05" },
    c4_05: { quem: "mio", texto: "Eu começo! Eu sempre começo! Depois a Hana, depois a SN, e depois a gente faz dueto, e depois a gente faz trio, e depois...", proxima: "c4_06" },
    c4_06: { quem: "hana", sprite: "hana", texto: "Mio. Respira.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", sprite: "mio", texto: "A Mio canta uma música pop animada, inventada para o jogo, chamada “Coração de Neon”. Ela canta mal. Muito mal. Desafinada, alta, dançando em cima do sofá, errando a letra de propósito para fazer as duas rirem.", proxima: "c4_08" },
    c4_08: { tipo: "narracao", texto: "E funciona. A SN ri tanto que precisa segurar a barriga.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", sprite: "hana", texto: "Depois é a vez da Hana. Ela pega o microfone com as duas mãos, como se fosse uma coisa que pudesse explodir. Fica de pé, de costas para elas, encarando a tela.", proxima: "c4_10" },
    c4_10: { quem: "hana", texto: "Não olhem. Por favor. Pelo menos no começo.", proxima: "c4_11" },
    c4_11: { tipo: "narracao", texto: "A música começa. Uma balada lenta, de piano, chamada “Depois da Chuva”. A Hana canta a primeira frase tão baixo que quase não dá para ouvir.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", texto: "Na segunda frase, um pouco mais alto. Na terceira, ela fecha os olhos.", proxima: "c4_13" },
    c4_13: { tipo: "narracao", texto: "E, no refrão, alguma coisa acontece. A voz dela abre como uma janela. Limpa, forte, cheia, enchendo a salinha inteira. A Mio para de mexer no celular. A SN para de respirar.", proxima: "c4_14" },
    c4_14: { tipo: "narracao", texto: "A Hana vira de frente para elas sem perceber. Os olhos ainda fechados. As mãos não tremem mais. Ela parece outra pessoa. Ela parece ela mesma, finalmente.", proxima: "c4_15" },
    c4_15: { tipo: "pensamento", texto: "Três anos dividindo a mesma mesa. E eu nunca soube que ela cantava assim.", proxima: "c4_16" },
    c4_16: { tipo: "pensamento", texto: "Quantas coisas eu perdi por estar ocupada demais tendo medo?", proxima: "c4_17" },
    c4_17: { tipo: "narracao", texto: "Quando a música acaba, a Hana abre os olhos. Ela vê as duas olhando para ela, de boca aberta, e fica vermelha da testa ao pescoço.", proxima: "c4_18" },
    c4_18: { quem: "hana", texto: "Eu falei pra não olhar.", proxima: "c4_19" },
    c4_19: { quem: "mio", texto: "HANA. VOCÊ É UMA CANTORA. UMA CANTORA DE VERDADE. POR QUE VOCÊ ESCONDEU ISSO DE MIM?", proxima: "c4_20" },
    c4_20: { quem: "hana", texto: "Ninguém nunca perguntou.", proxima: "c4_21" },
    c4_21: { tipo: "narracao", texto: "A frase fica no ar. A SN sente ela entrar no peito e ficar lá.", proxima: "c4_22" },
    c4_22: { tipo: "narracao", texto: "A Hana estende o microfone para ela.", proxima: "c4_23" },
    c4_23: { quem: "hana", texto: "Sua vez.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — A vez da SN
    c4_esc4: { escolhas: [
      { texto: "A. Cantar sozinha. Mesmo morrendo de vergonha.", proxima: "c4_4a_1", pontos: { hana: 1, mio: 1, desvio: 1 }, flags: ["SN_cantou_sozinha"] },
      { texto: "B. “Canta comigo, Hana? Um dueto?”", proxima: "c4_4b_1", pontos: { hana: 3 }, flags: ["Dueto_Hana"] },
      { texto: "C. Puxar as duas e fazer um trio, gritando mais do que cantando.", proxima: "c4_4c_1", pontos: { hana: 1, mio: 2 }, flags: ["Trio_karaoke"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "A SN pega o microfone. As mãos estão suando. Ela escolhe uma música que ouvia escondida no quarto, aos quinze anos, chamada “Um Dia”.", proxima: "c4_4a_2" },
    c4_4a_2: { tipo: "pensamento", texto: "Claro que eu ia escolher uma música chamada “Um Dia”.", proxima: "c4_4a_3" },
    c4_4a_3: { tipo: "narracao", texto: "Ela canta mal no começo. A voz falha. Mas a Mio grita o nome dela como se fosse um show, e a Hana bate palmas no ritmo, e na metade da música a SN para de se importar.", proxima: "c4_4a_4" },
    c4_4a_4: { tipo: "narracao", texto: "Quando acaba, ela está ofegante, rindo, com o rosto molhado sem saber exatamente quando começou a chorar.", proxima: "c4_4a_5" },
    c4_4a_5: { tipo: "pensamento", texto: "Doze anos esperando por esse dia. E ele era só isso. Uma salinha que cheira a pipoca. E foi perfeito.", proxima: "c4_24" },

    c4_4b_1: { tipo: "narracao", texto: "A Hana arregala os olhos. Depois concorda, quase imperceptível.", proxima: "c4_4b_2" },
    c4_4b_2: { tipo: "narracao", texto: "Elas cantam juntas uma música calma chamada “Janela Aberta”. A SN desafina. A Hana, sem parar de cantar, aperta de leve a mão dela, e ajusta a própria voz para cobrir as notas que a SN erra.", proxima: "c4_4b_3" },
    c4_4b_3: { tipo: "narracao", texto: "No fim, as duas estão rindo. A Hana encosta a testa no ombro da SN.", proxima: "c4_4b_4" },
    c4_4b_4: { quem: "hana", texto: "Obrigada por ter vindo. Eu ia desistir de vir sozinha, sabia? Eu desisto de tudo sozinha.", proxima: "c4_4b_5" },
    c4_4b_5: { quem: "eu", texto: "Então a gente não faz mais nada sozinha.", proxima: "c4_24" },

    c4_4c_1: { tipo: "narracao", texto: "A SN pega o microfone, puxa a Mio pelo braço e a Hana pela mão, e escolhe a música mais barulhenta da lista, uma chamada “Grita Mais Alto”.", proxima: "c4_4c_2" },
    c4_4c_2: { tipo: "narracao", texto: "Ninguém canta. Elas gritam. Pulam no sofá rasgado. A Mio canta no cabo do guarda-chuva. A Hana, que nunca sobe em nada, sobe na mesa.", proxima: "c4_4c_3" },
    c4_4c_3: { tipo: "narracao", texto: "Um funcionário bate na porta para pedir silêncio. Elas fingem que não ouviram.", proxima: "c4_4c_4" },
    c4_4c_4: { tipo: "pensamento", texto: "Se a SN de vinte e oito anos me visse agora, ia achar que eu enlouqueci. E ia ter um pouco de inveja.", proxima: "c4_24" },

    // (todas as opções continuam aqui)
    c4_24: { tipo: "narracao", sprite: null, texto: "Mais tarde, deitadas no sofá, cansadas, com a bola de discoteca girando no teto, a Mio vira de lado e apoia a cabeça na mão.", proxima: "c4_25" },
    c4_25: { quem: "mio", sprite: "mio", texto: "Tá. Rodada da verdade. Ninguém mente. SN, você primeiro.", proxima: "c4_26" },
    c4_26: { quem: "eu", texto: "Por que eu primeiro?", proxima: "c4_27" },
    c4_27: { quem: "mio", texto: "Porque essa semana você andou com o Takeo de manhã, usou o sapato do Kaito, almoçou com o Ryuji e estudou com o Blake. Sozinha. Isso é mais menino do que você falou nos últimos dez anos.", proxima: "c4_28" },
    c4_28: { quem: "hana", sprite: "hana", texto: "Ela tem razão. Eu fiz uma tabela mental.", proxima: "c4_29" },
    c4_29: { quem: "mio", sprite: "mio", texto: "Então. Se você tivesse que escolher um. Só um. Hoje. Agora. Quem?", proxima: "c4_esc5" },

    // ▶ ESCOLHA 5 — A rodada da verdade (afinidade de romance)
    c4_esc5: { escolhas: [
      { texto: "A. “...O Takeo.”", proxima: "c4_5a_1", pontos: { takeo: 2 }, flags: ["Verdade_Takeo"] },
      { texto: "B. “...O Kaito.”", proxima: "c4_5b_1", pontos: { kaito: 2 }, flags: ["Verdade_Kaito"] },
      { texto: "C. “...O Blake.”", proxima: "c4_5c_1", pontos: { blake: 2 }, flags: ["Verdade_Blake"] },
      { texto: "D. “...O Ryuji.”", proxima: "c4_5d_1", pontos: { ryuji: 2 }, flags: ["Verdade_Ryuji"] },
      { texto: "E. “Nenhum. Eu não sei. Eu acabei de chegar.”", proxima: "c4_5e_1", pontos: { mio: 1, hana: 1 } }
    ]},
    c4_5a_1: { quem: "mio", texto: "EU SABIA. Ele te espera na esquina! Ninguém mora do lado de lá e espera na esquina de cá!", proxima: "c4_5a_2" },
    c4_5a_2: { quem: "hana", sprite: "hana", texto: "Ele olha pra você como se você fosse a última coisa bonita do mundo. Eu reparei no primeiro dia de aula.", proxima: "c4_30" },
    c4_5b_1: { quem: "mio", texto: "O KAITO?! O líder?! A SN?! A minha SN?!", proxima: "c4_5b_2" },
    c4_5b_2: { quem: "hana", sprite: "hana", texto: "Ele deu o sapato dele. Ninguém dá o sapato. Isso é quase um pedido de casamento.", proxima: "c4_30" },
    c4_5c_1: { tipo: "narracao", sprite: "mio", texto: "A Mio fica em silêncio. Por um segundo inteiro, ela não diz nada. Depois sorri. Grande demais.", proxima: "c4_5c_2" },
    c4_5c_2: { quem: "mio", flags: ["Mio_magoada_Blake"], texto: "Faz sentido! Vocês combinam! Os dois quietos! Perfeito!", proxima: "c4_5c_3" },
    c4_5c_3: { tipo: "pensamento", texto: "Mio. Seu sorriso está tremendo.", proxima: "c4_30" },
    c4_5d_1: { quem: "mio", texto: "O RYUJI?! O ruivo? O da advertência? SN, ele foi suspenso três vezes só esse ano!", proxima: "c4_5d_2" },
    c4_5d_2: { quem: "eu", texto: "Ele almoça marmita de coelhinho.", proxima: "c4_5d_3" },
    c4_5d_3: { quem: "mio", texto: "...O quê?", proxima: "c4_5d_4" },
    c4_5d_4: { quem: "eu", texto: "Nada. Esquece. Eu prometi.", proxima: "c4_30" },
    c4_5e_1: { quem: "mio", texto: "“Acabei de chegar”? Você estuda aqui há dois anos!", proxima: "c4_5e_2" },
    c4_5e_2: { tipo: "pensamento", texto: "Ela não faz ideia de como essa frase é verdadeira.", proxima: "c4_30" },

    // (todas as opções continuam aqui)
    c4_30: { quem: "hana", sprite: "hana", texto: "Minha vez, então. Eu não gosto de ninguém. Eu gosto de gatos e de ficar em casa.", proxima: "c4_31" },
    c4_31: { quem: "mio", sprite: "mio", texto: "Mentira. Mas eu aceito. Minha vez... eu passo.", proxima: "c4_32" },
    c4_32: { quem: "eu", texto: "Mio. Ninguém passa na rodada da verdade. Foi você que inventou a regra.", proxima: "c4_33" },
    c4_33: { tipo: "narracao", texto: "A Mio olha para o teto. Para a bola de discoteca girando. Fica muito tempo assim.", proxima: "c4_34" },
    c4_34: { quem: "mio", texto: "Tem um menino. Ele é muito sério e muito chato e nunca ri das minhas piadas. E eu faço piada só pra ver se um dia ele ri.", proxima: "c4_35" },
    c4_35: { quem: "mio", texto: "Hoje ele riu. No clube. Com você.", proxima: "c4_36" },
    c4_36: { tipo: "narracao", texto: "Silêncio. Só o barulhinho do motor da bola de discoteca.", proxima: "c4_37" },
    c4_37: { quem: "mio", texto: "Mas tudo bem! Sério! É só uma queda boba. Daqui a pouco passa. Próxima música!", proxima: "c4_38" },
    c4_38: { tipo: "narracao", texto: "Ela pula do sofá e pega o controle. A SN olha para a Hana. A Hana olha de volta. As duas entendem a mesma coisa ao mesmo tempo, e nenhuma das duas sabe o que dizer.", proxima: "c4_39" },
    c4_39: { tipo: "pensamento", texto: "Naquela época, eu nunca soube disso. A Mio nunca me contou. Ou eu nunca estive perto o bastante pra ela contar.", proxima: "c4_40" },
    c4_40: { tipo: "pensamento", texto: "Agora eu sei. E não sei o que fazer com isso.", proxima: "c4_41" },
    c4_41: { tipo: "narracao", texto: "O celular da SN vibra dentro da bolsa.", proxima: "c4_42" },
    c4_42: { quem: "mensagem", rotulo: "Mensagem — R.", texto: "Estou na calçada. Sai sem elas. Cinco minutos.", proxima: "c5_01" },

    /* =================== CENA 5 — A LÍDER =================== */
    // Cenário: calçada na frente do karaokê, noite (usa "saida-colegio"). Neon piscando. Música: violino tenso.
    c5_01: { tipo: "narracao", cenario: "rua-noite", transicao: "tempo", legenda: "Cena 5 — A líder", sprite: null, texto: "A SN diz que vai ao banheiro. Desce a escada estreita do prédio e sai na calçada. O letreiro de neon do karaokê pisca em cima dela, rosa e azul.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", sprite: "reina", texto: "A Reina está encostada na parede do outro lado da rua. Não de uniforme. De jaqueta de couro preta, calça escura, o cabelo longo preso num rabo alto. Ela parece mais velha. E muito mais perigosa.", proxima: "c5_03" },
    c5_03: { tipo: "narracao", texto: "Atrás dela, nas sombras, três garotas de jaqueta igual. Uma flor branca bordada nas costas de cada jaqueta. Um lírio.", proxima: "c5_04" },
    c5_04: { tipo: "pensamento", texto: "Um lírio. Eu já vi esse desenho. Pichado no muro do galpão.", proxima: "c5_05" },
    c5_05: { quem: "reina", texto: "Pontual. Eu gosto.", proxima: "c5_06" },
    c5_06: { quem: "eu", texto: "Como você sabia do karaokê?", proxima: "c5_07" },
    c5_07: { quem: "reina", texto: "A Hana te convidou com a porta do clube aberta. Metade do corredor ouviu. Você precisa aprender a fechar portas, SN.", proxima: "c5_08" },
    c5_08: { tipo: "narracao", texto: "Ela atravessa a rua devagar. As três garotas ficam onde estão.", proxima: "c5_09" },
    c5_09: { quem: "reina", texto: "Vou facilitar pra você. Na escola, eu sou a garota popular. Fora dela, eu sou quem manda no Lírio Negro.", proxima: "c5_10" },
    c5_10: { quem: "reina", texto: "A gangue que o Takeo acha que mandou bater nele. A gangue que, na verdade, eu mandei não encostar nele.", proxima: "c5_11" },
    c5_11: { tipo: "narracao", texto: "A SN não diz nada. Ela já tinha ouvido a ligação no clube. Mas ouvir da boca da Reina, olhando nos olhos dela, é diferente.", proxima: "c5_cam1" },

    // Como a Reina trata a SN depende da Escolha 7 do Capítulo 1
    c5_cam1: { caminhos: [
      { flag: "Reina_desarmada", proxima: "c5_r_desarmada" },
      { flag: "Reina_rivalidade_forte", proxima: "c5_r_rival" }
    ], proxima: "c5_r_curiosa" },
    c5_r_desarmada: { quem: "reina", texto: "Você disse que eu também não queria que ele se machucasse. Lá no clube. Eu fiquei com raiva de você a noite inteira. Porque era verdade.", proxima: "c5_12" },
    c5_r_rival: { quem: "reina", texto: "Você disse que não ia seguir meu conselho. Não seguiu mesmo. Foi atrás dele no mercado e depois no galpão. Eu odeio admitir, mas eu respeito isso.", proxima: "c5_12" },
    c5_r_curiosa: { quem: "reina", texto: "Você disse que não estava tentando tirar ele de ninguém. Eu procurei a mentira na sua cara. Até agora não achei. Isso me irrita muito.", proxima: "c5_12" },

    c5_12: { quem: "reina", texto: "Tem gente minha recebendo dinheiro de um cara chamado Jin. Pelas minhas costas. Brigando com quem eu mandei deixar em paz.", proxima: "c5_13" },
    c5_13: { quem: "reina", texto: "O Takeo viu. O Takeo tirou uma foto. E o Takeo nunca anda com nada importante, porque ele perde tudo. Então ele deu pra alguém guardar.", proxima: "c5_14" },
    c5_14: { tipo: "narracao", texto: "Ela para na frente da SN. Perto. Perto demais.", proxima: "c5_15" },
    c5_15: { quem: "reina", texto: "E ele confia em uma pessoa só no mundo.", proxima: "c5_16" },
    c5_16: { tipo: "narracao", texto: "A Reina segura o pulso da SN. Rápido, firme, com uma força de quem treina há anos. Um teste.", proxima: "c5_17" },
    c5_17: { tipo: "narracao", efeito: "tremor", texto: "A SN não puxa o braço. Ela só não deixa ele ser puxado. A mão da Reina aperta mais. Nada se mexe.", proxima: "c5_18" },
    c5_18: { tipo: "narracao", texto: "Os olhos da Reina se estreitam. Depois, devagar, ela solta.", proxima: "c5_19" },
    c5_19: { quem: "reina", texto: "Eu sabia. Desde o clube. Você esconde alguma coisa nesse braço.", proxima: "c5_20" },
    c5_20: { quem: "reina", texto: "Eu não vou perguntar o quê. Eu também escondo coisas. Mas eu preciso daquela foto. Eu preciso saber quem da minha gangue está me traindo.", proxima: "c5_21" },
    c5_21: { quem: "reina", texto: "E se o Jin achar a foto antes de mim, o Takeo...", proxima: "c5_22" },
    c5_22: { tipo: "narracao", texto: "Ela não termina a frase. Pela primeira vez, a voz perfeita da Reina falha.", proxima: "c5_23" },
    c5_23: { tipo: "pensamento", texto: "“Ele morreu protegendo alguém.”", proxima: "c5_24" },
    c5_24: { tipo: "pensamento", texto: "E se esse alguém... era ela?", proxima: "c5_esc6" },

    // ▶ ESCOLHA 6 — O pendrive
    c5_esc6: { escolhas: [
      { texto: "A. Contar que está com o pendrive e mostrar a foto pra ela no celular, ali mesmo.", proxima: "c5_6a_1", pontos: { desvio: 2 }, flags: ["Reina_viu_foto", "Alianca_Reina"] },
      { texto: "B. Mentir: “Eu não tenho foto nenhuma.”", proxima: "c5_6b_1", pontos: { takeo: 1 }, flags: ["Mentiu_Reina"] },
      { texto: "C. Propor um acordo: “Eu te mostro. Mas, em troca, você protege o Takeo. Pessoalmente.”", proxima: "c5_6c_1", pontos: { takeo: 1, desvio: 1 }, flags: ["Acordo_Reina", "Alianca_Reina"] }
    ]},
    c5_6a_1: { tipo: "narracao", texto: "A SN tira o pendrive do estojo, encaixa no adaptador do celular e abre a única foto que tem lá.", proxima: "c5_6a_2" },
    c5_6a_2: { tipo: "narracao", texto: "Granulada, escura. Um carro preto. Um homem de casaco longo e cabelo penteado para trás, de perfil. Na frente dele, recebendo um envelope gordo, uma garota de jaqueta com um lírio bordado nas costas.", proxima: "c5_6a_3" },
    c5_6a_3: { tipo: "narracao", texto: "A Reina olha para a foto. O rosto dela não mexe. Mas a mão que segura o celular aperta tanto que os nós dos dedos ficam brancos.", proxima: "c5_6a_4" },
    c5_6a_4: { quem: "reina", texto: "...Akane. Minha braço direito. Desde os doze anos.", proxima: "c5_6a_5" },
    c5_6a_5: { quem: "reina", texto: "Obrigada, SN. Eu não esperava que você confiasse em mim.", proxima: "c5_6a_6" },
    c5_6a_6: { quem: "eu", texto: "Eu também não esperava.", proxima: "c5_25" },

    c5_6b_1: { tipo: "narracao", texto: "A Reina olha para ela por muito tempo. Sem raiva. Quase com pena.", proxima: "c5_6b_2" },
    c5_6b_2: { quem: "reina", texto: "Você mente mal. Mas mente por ele. Eu entendo.", proxima: "c5_6b_3" },
    c5_6b_3: { quem: "reina", texto: "Só que, se você não confia em mim, então você está sozinha nisso. E o Jin não brinca com quem está sozinho.", proxima: "c5_25" },

    c5_6c_1: { tipo: "narracao", texto: "A Reina levanta uma sobrancelha. Um sorriso pequeno aparece no canto da boca dela.", proxima: "c5_6c_2" },
    c5_6c_2: { quem: "reina", texto: "Você está negociando comigo. Comigo. Ninguém negocia comigo.", proxima: "c5_6c_3" },
    c5_6c_3: { quem: "eu", texto: "Eu estou.", proxima: "c5_6c_4" },
    c5_6c_4: { quem: "reina", texto: "...Fechado. Eu não ia deixar nada acontecer com ele de qualquer jeito. Mas agora é promessa.", proxima: "c5_6c_5" },
    c5_6c_5: { tipo: "narracao", texto: "A SN mostra a foto no celular. Um carro preto. Um homem de casaco longo. Uma garota de lírio nas costas recebendo um envelope. A Reina reconhece a garota na hora. O maxilar dela trava.", proxima: "c5_6c_6" },
    c5_6c_6: { quem: "reina", texto: "Akane. Minha braço direito. Eu vou cuidar disso.", proxima: "c5_25" },

    // (todas as opções continuam aqui)
    c5_25: { tipo: "narracao", texto: "A Reina dá um passo para trás. Ajeita a jaqueta. A máscara perfeita volta para o rosto dela, mas agora a SN consegue ver as rachaduras.", proxima: "c5_26" },
    c5_26: { quem: "reina", texto: "Mais uma coisa. Eu gosto do Takeo. Desde o primeiro ano. Você sabe disso.", proxima: "c5_27" },
    c5_27: { quem: "reina", texto: "E ele gosta de você. Eu também sei disso. Eu não vou fingir que não dói.", proxima: "c5_28" },
    c5_28: { quem: "reina", texto: "Mas, se eu tiver que escolher entre ganhar ele e ver ele vivo, eu escolho ele vivo. Toda vez.", proxima: "c5_29" },
    c5_29: { tipo: "pensamento", texto: "Ela é a rival. A garota que todo mundo diz que é perfeita. E, nesse momento, ela está dizendo exatamente o que eu sinto.", proxima: "c5_30" },
    c5_30: { quem: "reina", texto: "Volta pra dentro. E vai pra casa de táxi. Hoje não é noite pra andar a pé.", proxima: "c5_31" },
    c5_31: { tipo: "narracao", sprite: null, texto: "Ela vira e vai embora com as três garotas do lírio atrás dela. A SN fica sozinha na calçada, debaixo do neon piscando.", proxima: "c6_01" },

    /* =================== CENA 6 — O BECO =================== */
    // Cenário: rua escura e depois o beco (usa "saida-colegio" e "beco-mercado"). Música: tensão, batida lenta.
    c6_01: { tipo: "narracao", cenario: "rua-noite", transicao: "tempo", legenda: "Cena 6 — O beco", sprite: null, texto: "Às dez da noite, as três saem do karaokê. A Mio e a Hana moram do mesmo lado da estação. A SN, do outro.", proxima: "c6_02" },
    c6_02: { quem: "mio", sprite: "mio", texto: "Divide o táxi com a gente! A gente dá a volta!", proxima: "c6_03" },
    c6_03: { quem: "eu", texto: "São só dez minutos a pé. Eu vou bem.", proxima: "c6_04" },
    c6_04: { tipo: "pensamento", texto: "Mentira. Mas se o Jin estiver procurando o pendrive, eu não quero que ele procure perto delas.", proxima: "c6_05" },
    c6_05: { tipo: "pensamento", texto: "“Quando você cisma, nem um caminhão te tira do lugar.” Obrigada, vovó.", proxima: "c6_06" },
    c6_06: { tipo: "narracao", sprite: null, texto: "O táxi vai embora. A SN começa a andar. A rua da estação fica cada vez mais vazia, os postes cada vez mais espaçados.", proxima: "c6_07" },
    c6_07: { tipo: "narracao", texto: "Passos atrás dela. Ela para. Os passos param.", proxima: "c6_08" },
    c6_08: { tipo: "narracao", texto: "Ela anda de novo. Os passos voltam. Mais de uma pessoa.", proxima: "c6_09" },
    c6_09: { tipo: "pensamento", texto: "Não corre. Se você correr, eles sabem que você sabe.", proxima: "c6_10" },
    c6_10: { tipo: "narracao", texto: "Com o celular escondido dentro do bolso do casaco, ela abre a última conversa e aperta o botão de mandar localização. Ela só tem tempo para um nome.", proxima: "c6_esc7" },

    // ▶ ESCOLHA 7 — Para quem mandar a localização? (define quem chega no fim do capítulo)
    c6_esc7: { sugerir: true, escolhas: [
      { texto: "A. Takeo.", proxima: "c6_11", personagem: "takeo", pontos: { takeo: 2 }, flags: ["Chamou_Takeo"] },
      { texto: "B. Kaito.", proxima: "c6_11", personagem: "kaito", pontos: { kaito: 2 }, flags: ["Chamou_Kaito"] },
      { texto: "C. Blake.", proxima: "c6_11", personagem: "blake", pontos: { blake: 2 }, flags: ["Chamou_Blake"] },
      { texto: "D. Ryuji.", proxima: "c6_11", personagem: "ryuji", pontos: { ryuji: 2 }, flags: ["Chamou_Ryuji"] }
    ]},

    c6_11: { tipo: "narracao", texto: "Enviado. Ela não sabe se ele vai ver. Ela não sabe se vai dar tempo.", proxima: "c6_12" },
    c6_12: { tipo: "narracao", texto: "Na esquina seguinte, dois garotos de uniforme cinza aparecem na frente dela. Ela vira. Mais um atrás. E, encostado num poste, com as mãos no bolso e aquele sorriso que dá frio na barriga, está o Shinji.", sprite: "shinji", proxima: "c6_13" },
    // Shinji: troque quem por "shinji" quando criar o personagem.
    c6_13: { quem: "shinji", texto: "Fantasma. Que coincidência.", proxima: "c6_14" },
    c6_14: { tipo: "narracao", texto: "Eles vão chegando. Ela vai recuando. Até as costas dela baterem em alguma coisa fria. Uma grade. A entrada de um beco sem saída, atrás de uma loja fechada.", proxima: "c6_15" },
    c6_15: { tipo: "narracao", cenario: "beco-noite", texto: "Caixas de papelão. Uma lixeira de metal. Uma lâmpada amarela piscando em cima de uma porta trancada. E nenhuma saída.", proxima: "c6_16" },
    c6_16: { quem: "shinji", texto: "Ontem, no galpão, você me fez de idiota. Na frente do meu irmão. Na frente de todo mundo.", proxima: "c6_17" },
    c6_17: { quem: "shinji", texto: "Mas hoje eu vim preparado.", proxima: "c6_18" },
    c6_18: { tipo: "narracao", efeito: "tremor", texto: "Ele tira a mão do bolso. Um estalo seco. Um canivete. A lâmina pega a luz amarela da lâmpada.", proxima: "c6_19" },
    c6_19: { tipo: "pensamento", texto: "Força não para lâmina. A vovó sempre disse isso também. A gente é forte. A gente não é de ferro.", proxima: "c6_20" },
    c6_20: { quem: "shinji", texto: "Cadê a foto, Fantasma? O magrelo deu pra você. Todo mundo sabe que ele é apaixonado por você desde o primeiro ano.", proxima: "c6_21" },
    c6_21: { quem: "shinji", texto: "Me dá o pendrive, e talvez eu só corte seu cabelo. Pra você lembrar de mim.", proxima: "c6_esc8" },

    // ▶ ESCOLHA 8 — Encurralada pelo Shinji
    c6_esc8: { escolhas: [
      { texto: "A. Ganhar tempo, falando calma: “Se você me machucar, a Reina vai saber. E o Jin também. Você acha que ele vai gostar?”", proxima: "c6_8a_1", pontos: { desvio: 1 }, flags: ["SN_ganhou_tempo"] },
      { texto: "B. Pegar a tampa da lixeira de metal como escudo e ficar em posição.", proxima: "c6_8b_1", pontos: { desvio: 1 }, flags: ["SN_escudo"] },
      { texto: "C. Atacar primeiro, antes que ele se aproxime mais.", proxima: "c6_8c_1", pontos: { desvio: 2 }, flags: ["SN_atacou_Shinji"] }
    ]},
    c6_8a_1: { tipo: "narracao", texto: "O Shinji para. Só por meio segundo. Mas para.", proxima: "c6_8a_2" },
    c6_8a_2: { quem: "shinji", texto: "O Jin? O que você sabe do Jin?", proxima: "c6_8a_3" },
    c6_8a_3: { quem: "eu", texto: "Sei que ele não paga quem faz besteira. E isso aqui é uma besteira enorme.", proxima: "c6_8a_4" },
    c6_8a_4: { tipo: "narracao", texto: "Os dois garotos de cinza trocam um olhar nervoso. O Shinji percebe. A mão dele aperta o canivete.", proxima: "c6_8a_5" },
    c6_8a_5: { quem: "shinji", texto: "Para de falar!", proxima: "c6_22" },

    c6_8b_1: { tipo: "narracao", texto: "Ela arranca a tampa da lixeira de metal e segura na frente do corpo, como um escudo. O barulho ecoa pelo beco.", proxima: "c6_8b_2" },
    c6_8b_2: { tipo: "narracao", efeito: "tremor", texto: "O primeiro garoto de cinza avança. Ela gira a tampa. O garoto bate nela como se tivesse batido num carro e cai sentado nas caixas de papelão.", proxima: "c6_8b_3" },
    c6_8b_3: { quem: "shinji", texto: "Ela é só uma! Vai todo mundo junto!", proxima: "c6_22" },

    c6_8c_1: { tipo: "narracao", efeito: "tremor", texto: "Ela avança antes que ele termine de falar. Segura o pulso da mão do canivete e torce. O Shinji grita. O canivete cai no chão.", proxima: "c6_8c_2" },
    c6_8c_2: { tipo: "narracao", texto: "Mas ela não vê o segundo garoto vindo pelo lado. O ombro dele acerta as costelas dela e os dois batem na grade. O ar some dos pulmões dela.", proxima: "c6_8c_3" },
    c6_8c_3: { tipo: "narracao", flags: ["SN_costela_machucada"], texto: "Quando ela levanta a cabeça, o Shinji já pegou o canivete de volta. E agora está com raiva de verdade.", proxima: "c6_22" },

    // (todas as opções continuam aqui)
    c6_22: { tipo: "narracao", texto: "O Shinji vem para cima. A lâmina sobe. A SN levanta os braços.", proxima: "c6_23" },
    c6_23: { tipo: "narracao", texto: "E uma voz, calma e educada, como a de um professor chamando a atenção de um aluno, enche o beco.", proxima: "c6_24" },
    c6_24: { quem: "desconhecido", rotulo: "???", sprite: null, efeito: "eco", texto: "Shinji. Eu pedi um recado. Não um corte.", proxima: "c7_01" },

    /* =================== CENA 7 — JIN =================== */
    // Cenário: o mesmo beco. Música: para tudo. Só o zumbido da lâmpada.
    c7_01: { tipo: "narracao", transicao: "tempo", legenda: "Cena 7 — Jin", sprite: null, texto: "O Shinji congela com o canivete no ar. Os dois garotos de cinza dão um passo para trás, como se o chão tivesse ficado quente.", proxima: "c7_02" },
    c7_02: { tipo: "narracao", sprite: "jin", texto: "Na entrada do beco, contra a luz do poste, está um homem. Não um garoto. Um homem. Uns vinte e poucos anos. Casaco preto longo. Cabelo loiro. Um anel prateado no dedo mindinho.", proxima: "c7_03" },
    c7_03: { tipo: "narracao", texto: "Atrás dele, estacionado na rua com o motor ligado e o farol apagado, um carro preto.", proxima: "c7_04" },
    c7_04: { tipo: "pensamento", texto: "O carro da frente da minha casa.", proxima: "c7_05" },
    c7_05: { tipo: "pensamento", texto: "O homem da foto.", proxima: "c7_06" },
    // Jin: troque quem por "jin" quando criar o personagem.
    c7_06: { quem: "jin", texto: "Guarda isso, Shinji. Você parece uma criança com brinquedo novo.", proxima: "c7_07" },
    c7_07: { tipo: "narracao", texto: "O Shinji fecha o canivete. As mãos dele estão tremendo. A SN nunca imaginou que veria o Shinji com medo.", proxima: "c7_08" },
    c7_08: { quem: "jin", texto: "Vão pro carro. Os três.", proxima: "c7_09" },
    c7_09: { tipo: "narracao", sprite: "jin", texto: "Eles vão. Sem discutir. O beco fica vazio, só a SN encostada na grade e o homem de casaco preto parado na entrada, com as mãos nos bolsos.", proxima: "c7_10" },
    c7_10: { tipo: "narracao", texto: "Ele não se aproxima. Fica exatamente onde está, como se soubesse que chegar perto seria um erro.", proxima: "c7_11" },
    c7_11: { quem: "jin", texto: "Desculpa por isso. O Shinji é útil, mas não é muito inteligente. Meu nome é Jin. Mas acho que você já sabe.", proxima: "c7_12" },
    c7_12: { quem: "eu", texto: "Foi você que mandou a mensagem. “Quem te contou sobre o mercado?”", proxima: "c7_13" },
    c7_13: { quem: "jin", texto: "Fui eu que mudei o lugar da briga, também. Do galpão para o mercado. Eu queria ver quem ia aparecer.", proxima: "c7_14" },
    c7_14: { quem: "jin", texto: "E apareceu você. Uma garota que nunca tinha se metido em nada. Correndo direto para um lugar que só cinco pessoas conheciam.", proxima: "c7_15" },
    c7_15: { tipo: "narracao", texto: "Ele inclina a cabeça, estudando o rosto dela com uma curiosidade quase gentil. É pior do que raiva.", proxima: "c7_16" },
    c7_16: { quem: "jin", texto: "Então eu me pergunto: quem te contou?", proxima: "c7_17" },
    c7_17: { quem: "jin", texto: "A sua mãe faz ovos toda manhã, né? Às seis e meia. Dá pra ver pela janela da cozinha.", proxima: "c7_18" },
    c7_18: { tipo: "narracao", texto: "O sangue da SN vira gelo.", proxima: "c7_19" },
    c7_19: { quem: "jin", texto: "Eu não quero machucar ninguém, SN. Eu sou um homem de negócios. Eu só quero a foto. Todas as cópias. E quero saber como você sabia.", proxima: "c7_20" },
    c7_20: { quem: "jin", texto: "Me dá isso, e o Takeo volta a ser só um garoto magrelo que perde as coisas. E sua mãe continua fazendo ovos em paz.", proxima: "c7_esc9" },

    // ▶ ESCOLHA 9 — Responder ao Jin
    c7_esc9: { escolhas: [
      { texto: "A. Olhar nos olhos dele: “Se você chegar perto da minha mãe, você vai descobrir o que eu escondo nesse braço.”", proxima: "c7_9a_1", pontos: { desvio: 2 }, flags: ["Ameacou_Jin"] },
      { texto: "B. Mentir com calma: “A foto não existe mais. Eu apaguei.”", proxima: "c7_9b_1", pontos: { desvio: 1 }, flags: ["Mentiu_Jin"] },
      { texto: "C. Ficar em silêncio. Só observar ele. Cada detalhe.", proxima: "c7_9c_1", pontos: { desvio: 1 }, flags: ["Observou_Jin"] }
    ]},
    c7_9a_1: { tipo: "narracao", texto: "O Jin fica em silêncio. Depois ri. Baixo, quase encantado.", proxima: "c7_9a_2" },
    c7_9a_2: { quem: "jin", texto: "Então é verdade. O Shinji não estava inventando. A Fantasma que arranca portão.", proxima: "c7_9a_3" },
    c7_9a_3: { quem: "jin", texto: "Você acabou de me contar uma coisa que eu não sabia, SN. Obrigado.", proxima: "c7_9a_4" },
    c7_9a_4: { tipo: "pensamento", texto: "Droga. Eu dei pra ele exatamente o que ele queria. Um segredo.", proxima: "c7_21" },

    c7_9b_1: { quem: "jin", texto: "Apagou.", proxima: "c7_9b_2" },
    c7_9b_2: { quem: "eu", texto: "Apaguei.", proxima: "c7_9b_3" },
    c7_9b_3: { tipo: "narracao", texto: "Ele sorri, educado, como quem escuta uma criança contando que não comeu o doce com chocolate na boca.", proxima: "c7_9b_4" },
    c7_9b_4: { quem: "jin", texto: "Você mente melhor que o Takeo. Mas ainda mente olhando pro lado esquerdo. Treina mais.", proxima: "c7_21" },

    c7_9c_1: { tipo: "narracao", texto: "Ela não responde. Ela olha. O anel no mindinho. Uma cicatriz pequena, branca, no queixo. O sapato caro, mas sujo de barro vermelho. O sotaque leve, de outra cidade.", proxima: "c7_9c_2" },
    c7_9c_2: { tipo: "narracao", texto: "O Jin percebe que está sendo estudado. O sorriso dele diminui um pouco.", proxima: "c7_9c_3" },
    c7_9c_3: { quem: "jin", texto: "Você me olha como se já soubesse como isso termina.", proxima: "c7_9c_4" },
    c7_9c_4: { tipo: "pensamento", texto: "Eu não sei. Eu nunca te vi, da primeira vez. Você não existia na minha história.", proxima: "c7_9c_5" },
    c7_9c_5: { tipo: "pensamento", texto: "Ou existia, e eu nunca olhei.", proxima: "c7_21" },

    // (todas as opções continuam aqui)
    c7_21: { tipo: "narracao", texto: "O Jin tira um cartão do bolso do casaco. Branco, sem nome. Só um número de telefone escrito à mão. Ele coloca em cima de uma caixa de papelão na entrada do beco.", proxima: "c7_22" },
    c7_22: { quem: "jin", texto: "Você tem até segunda-feira para pensar. Depois disso, eu paro de ser educado.", proxima: "c7_23" },
    c7_23: { tipo: "narracao", texto: "Ele vira para ir embora. Para. Fala de costas, sem olhar para ela.", proxima: "c7_24" },
    c7_24: { quem: "jin", efeito: "eco", texto: "Ah. E você fala como alguém que já viu o final, SN. Isso é muito interessante. Eu conheci outra pessoa que falava assim.", proxima: "c7_25" },
    c7_25: { tipo: "narracao", sprite: null, texto: "O carro preto liga o farol e vai embora devagar, sem pressa nenhuma.", proxima: "c7_26" },
    c7_26: { tipo: "pensamento", texto: "Outra pessoa?", proxima: "c7_27" },
    c7_27: { tipo: "narracao", texto: "As pernas dela finalmente cedem. Ela escorrega pela grade até sentar no chão sujo do beco, abraçando os joelhos, tremendo inteira.", proxima: "c7_28" },
    c7_28: { tipo: "narracao", texto: "Passos correndo na rua. Alguém gritando o nome dela.", proxima: "c7_cam1" },

    // Quem chega depende da Escolha 7 (localização)
    c7_cam1: { caminhos: [
      { flag: "Chamou_Takeo", proxima: "c7_takeo_01" },
      { flag: "Chamou_Kaito", proxima: "c7_kaito_01" },
      { flag: "Chamou_Blake", proxima: "c7_blake_01" },
      { flag: "Chamou_Ryuji", proxima: "c7_ryuji_01" }
    ], proxima: "c7_takeo_01" },

    /* ---------- Chegada — Takeo ---------- */
    c7_takeo_01: { tipo: "narracao", sprite: "takeo", texto: "O Takeo entra no beco sem fôlego, de pijama e tênis desamarrado, com a jaqueta da gangue vestida por cima, ao contrário.", proxima: "c7_takeo_02" },
    c7_takeo_02: { quem: "takeo", texto: "SN! SN, você está... você está machucada? Quem foi? Foi o Shinji? Eu vi a localização e saí correndo, eu nem...", proxima: "c7_takeo_03" },
    c7_takeo_03: { tipo: "narracao", texto: "Ele se ajoelha na frente dela. As mãos dele tremem mais que as dela. Mesmo assim, ele tira a jaqueta e coloca nos ombros dela.", proxima: "c7_takeo_04" },
    c7_takeo_04: { quem: "takeo", texto: "Isso é culpa minha. A foto. Eu não devia ter te dado. Eu sou um idiota, eu...", proxima: "c7_takeo_esc" },
    c7_takeo_esc: { escolhas: [
      { texto: "A. Abraçar ele. Sem dizer nada.", proxima: "c7_takeo_a", pontos: { takeo: 3 }, flags: ["Abraco_beco_Takeo"] },
      { texto: "B. “Você veio. De pijama. Isso não é coisa de idiota.”", proxima: "c7_takeo_b", pontos: { takeo: 2 } }
    ]},
    c7_takeo_a: { tipo: "narracao", texto: "Ela abraça ele. Forte. O Takeo fica rígido por um segundo. Depois os braços dele, finos e tremendo, fecham em volta dela.", proxima: "c7_takeo_a2" },
    c7_takeo_a2: { quem: "takeo", texto: "Eu estou aqui. Eu estou aqui.", proxima: "c7_takeo_a3" },
    c7_takeo_a3: { tipo: "pensamento", texto: "Dez anos atrás, eu não estava lá quando ele precisou. Hoje, ele veio correndo de pijama.", proxima: "c7_fim" },
    c7_takeo_b: { tipo: "narracao", texto: "O Takeo olha para a própria roupa. O pijama tem estampa de foguetinho. Ele fica vermelho até as orelhas.", proxima: "c7_takeo_b2" },
    c7_takeo_b2: { quem: "takeo", texto: "...Não conta pra ninguém.", proxima: "c7_takeo_b3" },
    c7_takeo_b3: { tipo: "narracao", texto: "Ela ri. Um riso fraco, molhado. Mas é um riso. E ele sorri de volta, aliviado, como se tivesse salvado o mundo.", proxima: "c7_fim" },

    /* ---------- Chegada — Kaito ---------- */
    c7_kaito_01: { tipo: "narracao", sprite: "kaito", texto: "O Kaito entra no beco como uma tempestade, olhando para todos os lados, punhos fechados, procurando alguém para bater. Não tem ninguém.", proxima: "c7_kaito_02" },
    c7_kaito_02: { quem: "kaito", texto: "Onde eles estão? Quem foi? Fala!", proxima: "c7_kaito_03" },
    c7_kaito_03: { tipo: "narracao", texto: "Aí ele vê a SN sentada no chão. Toda a raiva some do rosto dele de uma vez. Ele se agacha devagar, como quem se aproxima de um bicho assustado.", proxima: "c7_kaito_04" },
    c7_kaito_04: { quem: "kaito", texto: "Ei. Ei. Sou eu. Você tá bem?", proxima: "c7_kaito_05" },
    c7_kaito_05: { quem: "kaito", texto: "Eu falei pra você não andar sozinha. Eu falei “por favor”. Eu nunca falo “por favor”.", proxima: "c7_kaito_esc" },
    c7_kaito_esc: { escolhas: [
      { texto: "A. “Eu sei. Desculpa. Fica aqui comigo um pouco?”", proxima: "c7_kaito_a", pontos: { kaito: 3 }, flags: ["Kaito_ficou"] },
      { texto: "B. “Se você me der bronca agora, eu ganho a revanche aqui mesmo.”", proxima: "c7_kaito_b", pontos: { kaito: 2 } }
    ]},
    c7_kaito_a: { tipo: "narracao", texto: "O Kaito senta do lado dela no chão sujo do beco, sem se importar com a calça. Encosta o ombro no dela. Fica.", proxima: "c7_kaito_a2" },
    c7_kaito_a2: { quem: "kaito", texto: "Onze anos querendo ganhar de você. E agora eu só quero que ninguém mais encoste em você.", proxima: "c7_kaito_a3" },
    c7_kaito_a3: { quem: "kaito", texto: "Isso é muito irritante, sabia?", proxima: "c7_fim" },
    c7_kaito_b: { tipo: "narracao", texto: "O Kaito fica um segundo sem reação. Depois solta uma risada que é metade alívio, metade desespero.", proxima: "c7_kaito_b2" },
    c7_kaito_b2: { quem: "kaito", texto: "Você quase foi esfaqueada e está me ameaçando.", proxima: "c7_kaito_b3" },
    c7_kaito_b3: { quem: "eu", texto: "Funcionou?", proxima: "c7_kaito_b4" },
    c7_kaito_b4: { quem: "kaito", texto: "...Funcionou. Levanta. Eu te levo pra casa. E não aceito não.", proxima: "c7_fim" },

    /* ---------- Chegada — Blake ---------- */
    c7_blake_01: { tipo: "narracao", sprite: "blake", texto: "O Blake não corre para dentro do beco. Ele para na entrada, olha para a rua, para os dois lados, para o chão, para as marcas de pneu. Só depois entra.", proxima: "c7_blake_02" },
    c7_blake_02: { quem: "blake", texto: "Carro preto. Saiu faz menos de dois minutos.", proxima: "c7_blake_03" },
    c7_blake_03: { tipo: "narracao", texto: "Ele se agacha na frente dela. Olha para as mãos dela, para os braços, para o rosto. Procurando ferimento, como ela faria.", proxima: "c7_blake_04" },
    c7_blake_04: { quem: "blake", texto: "Você me avisou. Antes. Como a gente combinou.", proxima: "c7_blake_05" },
    c7_blake_05: { quem: "blake", texto: "Mas eu cheguei depois.", proxima: "c7_blake_esc" },
    c7_blake_esc: { escolhas: [
      { texto: "A. “Você chegou. Isso é o que importa.” E segurar a mão dele.", proxima: "c7_blake_a", pontos: { blake: 3 }, flags: ["Mao_Blake"] },
      { texto: "B. “Você deixou alguém segurar um pedaço, Blake. Agora deixa eu segurar esse.”", proxima: "c7_blake_b", pontos: { blake: 2 } }
    ]},
    c7_blake_a: { tipo: "narracao", texto: "A mão dele é enorme. Cheia de calos. E está fria, como se ele tivesse corrido com ela fechada o caminho inteiro.", proxima: "c7_blake_a2" },
    c7_blake_a2: { tipo: "narracao", texto: "Ele não solta. Ele não diz nada. Mas também não solta.", proxima: "c7_blake_a3" },
    c7_blake_a3: { quem: "blake", texto: "...Da próxima vez, manda a localização antes de sair do karaokê.", proxima: "c7_fim" },
    c7_blake_b: { tipo: "narracao", texto: "O Blake fica parado. Depois, pela primeira vez desde que ela o conhece, ele abaixa a cabeça e solta o ar, longo, cansado, como se estivesse segurando aquilo há anos.", proxima: "c7_blake_b2" },
    c7_blake_b2: { quem: "blake", texto: "Você é teimosa demais.", proxima: "c7_blake_b3" },
    c7_blake_b3: { quem: "eu", texto: "Você também.", proxima: "c7_blake_b4" },
    c7_blake_b4: { quem: "blake", texto: "...É. Por isso que funciona.", proxima: "c7_fim" },

    /* ---------- Chegada — Ryuji ---------- */
    c7_ryuji_01: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji chega de bicicleta. Uma bicicleta rosa, pequena demais, com rodinhas laterais arrancadas e uma cestinha de flores. Ele derrapa na entrada do beco e quase cai.", proxima: "c7_ryuji_02" },
    c7_ryuji_02: { quem: "ryuji", texto: "Princesa! Cadê eles? Eu vou...", proxima: "c7_ryuji_03" },
    c7_ryuji_03: { tipo: "narracao", texto: "Ele vê a SN no chão e para de falar. Larga a bicicleta. Senta na frente dela, de pernas cruzadas, sem tocar nela, só olhando.", proxima: "c7_ryuji_04" },
    c7_ryuji_04: { quem: "ryuji", texto: "A bicicleta é da minha irmã. Era a única coisa rápida em casa. Se você rir, eu entendo. Mas espera eu ver se você está bem primeiro.", proxima: "c7_ryuji_05" },
    c7_ryuji_05: { quem: "ryuji", texto: "...Você está bem?", proxima: "c7_ryuji_esc" },
    c7_ryuji_esc: { escolhas: [
      { texto: "A. “Não. Não estou.” Dizer a verdade, pela primeira vez.", proxima: "c7_ryuji_a", pontos: { ryuji: 3 }, flags: ["Verdade_Ryuji_beco"] },
      { texto: "B. “Adrenalina.”", proxima: "c7_ryuji_b", pontos: { ryuji: 2 } }
    ]},
    c7_ryuji_a: { tipo: "narracao", texto: "O Ryuji fica quieto. Nenhuma piada. Nenhuma provocação.", proxima: "c7_ryuji_a2" },
    c7_ryuji_a2: { quem: "ryuji", texto: "Tá. Então a gente fica aqui até você estar.", proxima: "c7_ryuji_a3" },
    c7_ryuji_a3: { quem: "ryuji", texto: "Você não mentiu pra mim. Obrigado.", proxima: "c7_ryuji_a4" },
    c7_ryuji_a4: { tipo: "pensamento", texto: "“Eu odeio que mintam pra mim.” Ele lembrou. E eu também.", proxima: "c7_fim" },
    c7_ryuji_b: { tipo: "narracao", texto: "O Ryuji olha para ela. Depois para a bicicleta rosa. Depois para ela de novo. E começa a rir, um riso nervoso, aliviado, que vira quase choro no final.", proxima: "c7_ryuji_b2" },
    c7_ryuji_b2: { quem: "ryuji", texto: "Eu odeio você. Sobe na garupa. Cuidado com a cestinha.", proxima: "c7_fim" },

    // (todas as chegadas continuam aqui)
    c7_fim: { tipo: "narracao", sprite: null, texto: "Na entrada do beco, em cima da caixa de papelão, o cartão branco do Jin continua lá. A SN se levanta, devagar, e pega o cartão. Ela não sabe por quê.", proxima: "ep_01" },

    /* =================== EPÍLOGO — O QUE EU SEI (3) =================== */
    // Cenário: quarto da SN, madrugada. Música: piano do prólogo, mais grave.
    ep_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Epílogo — O que eu sei", sprite: null, texto: "Em casa, a SN passa pela cozinha antes de subir. Olha pela janela. A rua está vazia. Ela fecha a cortina mesmo assim. Depois volta e confere se a porta está trancada. Duas vezes.", proxima: "ep_02" },
    ep_02: { tipo: "narracao", texto: "No quarto, ela abre o caderno azul. A mão ainda treme um pouco.", proxima: "ep_03" },
    ep_03: { tipo: "narracao", texto: "11. O Jin mudou o lugar da briga. O Jin mandou a mensagem. O Jin sabe onde eu moro.", proxima: "ep_04" },
    ep_04: { tipo: "narracao", texto: "12. A Akane, braço direito da Reina, pega dinheiro do Jin.", proxima: "ep_05" },
    ep_05: { tipo: "narracao", texto: "13. Eu derrubei o Kaito num parquinho aos seis anos. Ele lembrou por onze. Eu esqueci por vinte e dois.", proxima: "ep_06" },
    ep_06: { tipo: "narracao", texto: "14. A Mio gosta do Blake. O Blake pergunta da Mio. E o Blake me olha de um jeito que...", proxima: "ep_07" },
    ep_07: { tipo: "narracao", texto: "Ela risca o fim da linha 14.", proxima: "ep_08" },
    ep_08: { tipo: "narracao", texto: "15. A Hana canta como se abrisse uma janela.", proxima: "ep_09" },
    ep_09: { tipo: "narracao", texto: "16. Prazo: segunda-feira.", proxima: "ep_10" },
    ep_10: { tipo: "narracao", texto: "Ela para. Escreve a última linha bem devagar.", proxima: "ep_11" },
    ep_11: { tipo: "narracao", efeito: "eco", texto: "17. “Eu conheci outra pessoa que falava assim.”", proxima: "ep_12" },
    ep_12: { tipo: "pensamento", texto: "Outra pessoa que falava como quem já viu o final.", proxima: "ep_13" },
    ep_13: { tipo: "pensamento", texto: "E se eu não for a única que voltou?", proxima: "ep_14" },
    ep_14: { tipo: "narracao", texto: "O pensamento é tão grande que ela fecha o caderno de uma vez, como se pudesse prender ele lá dentro.", proxima: "ep_15" },
    ep_15: { tipo: "narracao", texto: "Ela tira do bolso o cartão branco do Jin. Fica olhando para o número escrito à mão.", proxima: "ep_16" },
    ep_16: { tipo: "narracao", texto: "E então percebe uma coisa que não percebeu no beco, com a luz amarela piscando.", proxima: "ep_17" },
    ep_17: { tipo: "narracao", texto: "A letra do número. Os setes cortados com um tracinho no meio. O quatro aberto em cima.", proxima: "ep_18" },
    ep_18: { tipo: "narracao", efeito: "flashback", texto: "Ela já viu essa letra antes. Não aqui. Não aos dezesseis.", proxima: "ep_19" },
    ep_19: { tipo: "narracao", efeito: "flashback", texto: "Aos vinte e oito. Num cartão de condolências, sem assinatura, que chegou na casa dela uma semana depois do enterro do Takeo.", proxima: "ep_20" },
    ep_20: { tipo: "pensamento", texto: "Não pode ser.", proxima: "ep_21" },
    ep_21: { tipo: "pensamento", texto: "Ou pode?", proxima: "ep_22" },
    ep_22: { tipo: "narracao", texto: "Lá fora, um carro passa devagar pela rua. A SN não abre a cortina para ver de que cor ele é.", proxima: "ep_23" },
    ep_23: { tipo: "pensamento", texto: "Regra número 2. Não abaixar a cabeça.", proxima: "ep_24" },
    ep_24: { tipo: "pensamento", texto: "Segunda-feira, Jin. Eu vou estar pronta.", proxima: "ep_fim" },

    // Fim do Capítulo 3 (crie a entrada "capitulo3" em dados/capitulos.js)
    ep_fim: { fim: "capitulo3" }
  }
});

/*
 * GANCHO PARA O CAPÍTULO 4 (anotações do roteiro)
 *  • Segunda-feira: o prazo do Jin. O que a SN vai fazer com a foto?
 *  • Quem era a “outra pessoa que falava como quem já viu o final”? Existe outro viajante no tempo?
 *  • Por que a letra do Jin é a mesma do cartão de condolências do futuro?
 *  • A Reina vai confrontar a Akane? (Reina_viu_foto / Acordo_Reina)
 *  • Mio, Blake e SN: o triângulo começou (Mio_magoada_Blake, SN_empurrou_Blake_Mio, SN_provocou_Blake).
 *  • A revanche do Kaito (Revanche_marcada).
 *  • A Sayuri ainda não fez nada. Ainda.
 *
 * ESCOLHAS DO CAPÍTULO (9 + 1 de chegada)
 *  1 Takeo (prova) · 2 Kaito (revanche) · 3 Blake (Mio) · 4 Karaokê · 5 Rodada da verdade
 *  6 Reina (pendrive) · 7 Localização (quem chega) · 8 Shinji · 9 Jin · + resposta a quem chegou
 *
 * FLAGS NOVAS
 *  Estudar_com_Takeo · Revanche_marcada · Kaito_ouviu_gosto · Kaito_pediu_desculpa
 *  SN_empurrou_Blake_Mio · SN_provocou_Blake · Blake_desabafou · SN_cantou_sozinha
 *  Dueto_Hana · Trio_karaoke · Verdade_Takeo/Kaito/Blake/Ryuji · Mio_magoada_Blake
 *  Reina_viu_foto · Alianca_Reina · Mentiu_Reina · Acordo_Reina
 *  Chamou_Takeo/Kaito/Blake/Ryuji · SN_ganhou_tempo · SN_escudo · SN_atacou_Shinji
 *  SN_costela_machucada · Ameacou_Jin · Mentiu_Jin · Observou_Jin
 *  Abraco_beco_Takeo · Kaito_ficou · Mao_Blake · Verdade_Ryuji_beco
 */