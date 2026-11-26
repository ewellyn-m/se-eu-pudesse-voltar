/*
 * =====================================================================
 *  CAPÍTULO 1 — Se eu pudesse voltar...
 *  Roteiro de @ewellyn (17/11/2026), passado para o formato do jogo.
 *  Revisão 18/11/2026: ritmo mais lento. A SN não entende de cara que voltou
 *  no tempo: primeiro acha que é sonho, depois que enlouqueceu, e só aos poucos
 *  junta as pistas. Mais tempo de conversa com Mio, Hana e Takeo.
 *  Edite à vontade: cada linha é uma cena (uma fala, um pensamento ou uma escolha).
 * =====================================================================
 *
 *  COMO ESCREVER UMA CENA
 *    quem:      quem fala — "eu" (a protagonista), "mio", "takeo", "hana", "kaito",
 *               "blake", "ryuji", "reina", "coordenador", "bone", "desconhecido" (???),
 *               "mensagem" (mensagem de celular). Ver dados/personagens.js.
 *    tipo:      "narracao" (texto do narrador) ou "pensamento" (pensamento da SN, em itálico)
 *    texto:     o que aparece na caixa. Escreva "SN": o jogo troca pelo nome do jogador.
 *    proxima:   id da próxima cena
 *    cenario:   troca o fundo (ver Cenarios em dados/personagens.js)
 *    transicao: "tempo" mostra um cartão com a "legenda" ("Cena 1 — Título" vira duas linhas)
 *               "desmaio" esmaece a tela (usado como "tela branca")
 *    efeito:    "tremor" | "grito" | "flashback" | "eco" | "apagao"
 *    sprite:    força um personagem em cena (ou null para tirar todo mundo)
 *    rotulo:    troca o nome mostrado na plaquinha (ex.: "Takeo (mensagem)")
 *
 *  ESCOLHAS
 *    escolhas: [{ texto: "A. ...", proxima: "...", pontos: { mio: 2, desvio: 1 }, flags: ["Mio_desconfiada"] }]
 *    pontos:   afinidade (kaito, blake, takeo, ryuji, mio, hana) e "desvio" (oculto)
 *    flags:    marcas guardadas no save para usar depois
 *    sugerir: true (na cena) + personagem: "takeo" (na opção) destaca a opção de maior afinidade
 *
 *  CAMINHOS (cena invisível que decide para onde ir)
 *    { caminhos: [{ flag: "Rota_Takeo", proxima: "..." }, ...], proxima: "padrão" }
 *
 *  Título, capa e descrição do capítulo ficam em dados/capitulos.js.
 *
 *  CENÁRIOS: o banheiro (cena 1) e a escada (cenas 4 e 6) usam o fundo "corredor".
 *  Se quiser fundos próprios, crie "banheiro" e "escada" em dados/personagens.js
 *  e troque o cenario nessas cenas.
 */
Roteiro.registrar("capitulo1", {
  inicio: "pro_01",
  cenas: {

    /* =================== PRÓLOGO — VINTE E OITO =================== */
    // Cenário: apartamento pequeno, noite de chuva. Caixas de mudança pela sala. Música: piano lento.
    pro_01: { tipo: "narracao", cenario: "apartamento", transicao: "tempo", legenda: "Prólogo — Vinte e oito", texto: "O relógio do micro-ondas marca 23h47.", proxima: "pro_02" },
    pro_02: { tipo: "narracao", texto: "SN está sentada no chão, cercada de caixas. Amanhã ela se muda de novo. Outra cidade, outro emprego, outro começo.", proxima: "pro_03" },
    pro_03: { tipo: "pensamento", texto: "Vinte e oito anos. E eu ainda não sei direito o que fiz com eles.", proxima: "pro_04" },
    pro_04: { tipo: "narracao", texto: "No fundo de uma caixa, ela encontra um envelope velho. Dentro, uma foto do colégio: a Mio fazendo careta, a SN escondida atrás de um livro e, no canto, um garoto magro sorrindo sem jeito, com um curativo na bochecha.", proxima: "pro_05" },
    pro_05: { tipo: "pensamento", texto: "Takeo.", proxima: "pro_06" },
    pro_06: { tipo: "narracao", texto: "O celular vibra. Uma notificação do grupo antigo da turma, que ninguém usa há anos.", proxima: "pro_07" },
    pro_07: { quem: "mensagem", texto: "Hoje faz dez anos. Alguém vai passar lá amanhã?", proxima: "pro_08" },
    pro_08: { tipo: "narracao", texto: "SN não responde. Ela nunca respondeu.", proxima: "pro_09" },
    pro_09: { tipo: "pensamento", texto: "Ele morreu protegendo alguém. Foi o que disseram. Ninguém nunca me contou quem.", proxima: "pro_10" },
    pro_10: { tipo: "narracao", texto: "Ela abre a caixa de mensagens de voz. Existe uma que ela nunca teve coragem de ouvir. Data: dez anos atrás. Remetente: Takeo.", proxima: "pro_11" },
    pro_11: { tipo: "narracao", texto: "Ela aperta o play.", proxima: "pro_12" },
    pro_12: { quem: "takeo", rotulo: "Takeo (mensagem)", sprite: null, efeito: "eco", texto: "SN... desculpa ligar tarde. Eu preciso te contar uma coisa. Não sobre mim. Sobre a—", proxima: "pro_13" },
    pro_13: { tipo: "narracao", efeito: "apagao", texto: "Chiado. A gravação corta.", proxima: "pro_14" },
    pro_14: { tipo: "narracao", texto: "SN fica olhando para a tela até ela apagar.", proxima: "pro_15" },
    pro_15: { tipo: "pensamento", texto: "Eu sempre dizia “um dia”. Um dia eu falo com ele. Um dia eu ligo pra Mio. Um dia eu vivo.", proxima: "pro_16" },
    pro_16: { tipo: "pensamento", texto: "O dia nunca chegou.", proxima: "pro_17" },
    pro_17: { tipo: "narracao", texto: "Ela aperta a foto contra o peito.", proxima: "pro_18" },
    pro_18: { quem: "eu", texto: "Se eu pudesse voltar...", proxima: "pro_19" },
    pro_19: { tipo: "narracao", efeito: "tremor", texto: "Um trovão. As luzes piscam. A foto esquenta entre os dedos dela.", proxima: "pro_20" },
    pro_20: { quem: "eu", efeito: "flashback", texto: "...eu faria tudo diferente.", proxima: "pro_21" },
    pro_21: { tipo: "narracao", transicao: "desmaio", efeito: "flashback", texto: "Tela branca. Som de sinal escolar ao longe.", proxima: "c1_01" },

    /* =================== CENA 1 — DEZESSEIS OUTRA VEZ =================== */
    // Cenário: sala de aula, intervalo da manhã. Sol entrando pela janela. Música: tema leve do colégio.
    // Aqui a SN NÃO entende o que aconteceu. Ela acha que está sonhando.
    c1_01: { quem: "desconhecido", cenario: "sala-de-aula", transicao: "tempo", legenda: "Cena 1 — Dezesseis outra vez", texto: "SN. Ei. SN! Acorda, você está babando no livro de química.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "SN abre os olhos devagar. A luz incomoda. Tem alguma coisa dura embaixo do rosto dela.", proxima: "c1_03" },
    c1_03: { tipo: "narracao", texto: "Um livro. De química. Com a capa rabiscada de caneta azul.", proxima: "c1_04" },
    c1_04: { tipo: "pensamento", texto: "...Química?", proxima: "c1_05" },
    c1_05: { tipo: "narracao", texto: "Ela levanta a cabeça. Carteiras de madeira. Lousa verde. Cheiro de giz e de bolacha recheada. O barulho de trinta pessoas falando ao mesmo tempo.", proxima: "c1_06" },
    c1_06: { tipo: "pensamento", texto: "Eu estava no chão da sala. No meio das caixas. Eu lembro do trovão.", proxima: "c1_07" },
    c1_07: { tipo: "pensamento", texto: "Isso não é a minha sala.", proxima: "c1_08" },
    c1_08: { tipo: "narracao", texto: "Ela olha para as próprias mãos. São menores. As unhas estão sem esmalte, roídas no canto, do jeito que ela roía quando ficava nervosa demais. A manga é a do uniforme do colégio.", proxima: "c1_09" },
    c1_09: { tipo: "pensamento", texto: "Não. Não pode ser.", proxima: "c1_10" },
    c1_10: { tipo: "narracao", sprite: "mio", texto: "Na frente dela, debruçada sobre a carteira, está uma garota alta e loira, com o laço do uniforme torto e um pão de queijo na boca.", proxima: "c1_11" },
    c1_11: { quem: "mio", texto: "Finalmente. Achei que você tinha morrido. Quer metade?", proxima: "c1_12" },
    c1_12: { tipo: "narracao", texto: "A SN não responde. Ela fica olhando para a garota na frente dela como quem olha para uma foto que, de repente, começou a falar.", proxima: "c1_13" },
    c1_13: { tipo: "pensamento", texto: "Mio?", proxima: "c1_14" },
    c1_14: { tipo: "pensamento", texto: "A Mio tem vinte e oito anos. Ela mora do outro lado do país. A última foto que eu vi dela tinha franja e um cachorro.", proxima: "c1_15" },
    c1_15: { tipo: "pensamento", texto: "Essa Mio tem dezesseis.", proxima: "c1_16" },
    c1_16: { quem: "mio", texto: "...SN? Por que você está me olhando com essa cara? Eu tenho pão de queijo no dente?", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — Como reagir à Mio?
    c1_esc1: { escolhas: [
      { texto: "A. Abraçar a Mio sem dizer nada.", proxima: "c1_1a_1", pontos: { mio: 2, desvio: 1 } },
      { texto: "B. “Tem. Do lado esquerdo.” (Fingir que está tudo normal.)", proxima: "c1_1b_1", pontos: { mio: 1 } },
      { texto: "C. “Eu senti sua falta.”", proxima: "c1_1c_1", pontos: { mio: 1, desvio: 2 }, flags: ["Mio_desconfiada"] }
    ]},
    c1_1a_1: { tipo: "narracao", texto: "A SN abraça a Mio sem pensar. Ela é quente. Cheira a amaciante e pão de queijo. É real demais.", proxima: "c1_1a_2" },
    c1_1a_2: { tipo: "narracao", texto: "A Mio congela no meio da mordida. Depois ri, sem jeito, e dá tapinhas nas costas da SN.", proxima: "c1_1a_3" },
    c1_1a_3: { quem: "mio", texto: "Tá, tá, eu também te amo. Mas a turma toda está olhando. Você teve pesadelo?", proxima: "c1_1a_4" },
    c1_1a_4: { quem: "eu", texto: "...Mais ou menos.", proxima: "c1_1a_5" },
    c1_1a_5: { tipo: "pensamento", texto: "Pesadelo. É isso. Eu estou sonhando. Só pode ser.", proxima: "c1_17" },

    c1_1b_1: { tipo: "narracao", texto: "A Mio passa a língua no dente, desconfiada, e dá um sorriso enorme.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "mio", texto: "Pronto? Linda de novo?", proxima: "c1_1b_3" },
    c1_1b_3: { quem: "eu", texto: "Sempre foi.", proxima: "c1_1b_4" },
    c1_1b_4: { quem: "mio", texto: "...Você está estranha hoje. Eu gostei.", proxima: "c1_1b_5" },
    c1_1b_5: { tipo: "pensamento", texto: "Se isso é um sonho, pelo menos é um sonho bom.", proxima: "c1_17" },

    c1_1c_1: { tipo: "narracao", texto: "A Mio pisca duas vezes.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "mio", texto: "Você dormiu vinte minutos, SN.", proxima: "c1_1c_3" },
    c1_1c_3: { quem: "eu", texto: "Pareceram mais.", proxima: "c1_1c_4" },
    c1_1c_4: { tipo: "narracao", texto: "A Mio não responde. Mas, pela primeira vez, ela para de mastigar e fica observando a amiga com atenção.", proxima: "c1_17" },

    // (todas as opções continuam aqui)
    c1_17: { tipo: "narracao", sprite: null, texto: "O sinal toca. A Mio volta para a carteira dela, duas fileiras atrás, ainda mastigando.", proxima: "c1_18" },
    c1_18: { tipo: "narracao", texto: "Antes que a professora entre, a SN se levanta e sai da sala quase correndo.", proxima: "c1_19" },
    // Banheiro feminino do segundo andar (usa o fundo "corredor"; troque por "banheiro" se criar um).
    c1_19: { tipo: "narracao", cenario: "banheiro", texto: "O banheiro feminino do segundo andar continua com a mesma torneira pingando. A mesma pichação na porta da última cabine.", proxima: "c1_20" },
    c1_20: { tipo: "narracao", texto: "Ela para na frente do espelho.", proxima: "c1_21" },
    c1_21: { tipo: "narracao", texto: "Uma garota de dezesseis anos olha de volta. Franja torta, cortada em casa. Olheiras de quem estudou até tarde. A espinha no queixo que ela tentava esconder com o cabelo.", proxima: "c1_22" },
    c1_22: { tipo: "pensamento", texto: "Sou eu.", proxima: "c1_23" },
    c1_23: { tipo: "pensamento", texto: "Sou eu com dezesseis anos.", proxima: "c1_24" },
    c1_24: { tipo: "narracao", texto: "Ela belisca o próprio braço. Dói. Belisca mais forte. Dói mais.", proxima: "c1_25" },
    c1_25: { tipo: "narracao", texto: "Ela abre a torneira e joga água gelada no rosto. Uma vez. Duas. Três.", proxima: "c1_26" },
    c1_26: { tipo: "narracao", texto: "Quando ela levanta a cabeça, a garota de dezesseis anos continua ali, pingando.", proxima: "c1_27" },
    c1_27: { tipo: "pensamento", texto: "Ok. Calma. Pensa.", proxima: "c1_28" },
    c1_28: { tipo: "pensamento", texto: "Eu bati a cabeça. Ou eu dormi no chão da sala e isso é um sonho muito, muito detalhado.", proxima: "c1_29" },
    c1_29: { tipo: "pensamento", texto: "Sonhos não têm cheiro de desinfetante barato.", proxima: "c1_30" },
    c1_30: { tipo: "pensamento", texto: "...Têm?", proxima: "c1_31" },
    c1_31: { tipo: "narracao", texto: "Alguém bate na porta do banheiro.", proxima: "c1_32" },
    c1_32: { quem: "mio", sprite: null, rotulo: "Mio (do lado de fora)", texto: "SN? A professora já chegou! Você vai levar falta!", proxima: "c1_33" },
    c1_33: { tipo: "pensamento", texto: "Se é um sonho, eu vou acordar a qualquer momento. Até lá, é só fingir que está tudo normal.", proxima: "c1_34" },
    c1_34: { tipo: "pensamento", texto: "Só fingir. Eu sou boa nisso. Eu fingi por doze anos.", proxima: "c2_01" },

    /* =================== CENA 2 — ISSO NÃO É UM SONHO =================== */
    // Cenário: sala de aula, aula de química. Música: tema leve, mais baixo.
    c2_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Cena 2 — Isso não é um sonho", sprite: null, texto: "A aula de química já começou quando a SN volta para a carteira.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", sprite: "hana", texto: "Na carteira ao lado está uma garota de cabelos castanhos e longos, presos de qualquer jeito com um lápis. Ela empurra o livro aberto para o meio da mesa sem dizer nada, já na página certa.", proxima: "c2_03" },
    c2_03: { tipo: "pensamento", texto: "Hana.", proxima: "c2_04" },
    c2_04: { tipo: "pensamento", texto: "A gente dividia essa mesa. Eu tinha esquecido. Como eu pude esquecer disso?", proxima: "c2_05" },
    c2_05: { quem: "hana", texto: "Página 84. Ela está corrigindo a lista de ontem.", proxima: "c2_06" },
    c2_06: { quem: "eu", texto: "...Obrigada.", proxima: "c2_07" },
    c2_07: { tipo: "narracao", texto: "A Hana olha para ela por um segundo a mais. Depois volta para o caderno.", proxima: "c2_08" },
    c2_08: { tipo: "narracao", texto: "A SN olha ao redor devagar, procurando alguma coisa errada. Um detalhe fora do lugar. Qualquer pista de que aquilo é um sonho.", proxima: "c2_09" },
    c2_09: { tipo: "narracao", texto: "Mas está tudo certo demais. O cartaz da feira de ciências descolando da parede. O garoto do fundo que dormia em todas as aulas, dormindo. A data escrita no canto da lousa, com a letra torta da professora.", proxima: "c2_10" },
    c2_10: { tipo: "pensamento", texto: "Essa data... eu não lembro dela. Deveria?", proxima: "c2_11" },
    c2_11: { quem: "desconhecido", rotulo: "Professora", sprite: null, texto: "SN. Já que você resolveu passear no meio da minha aula, me diga: qual é a resposta da questão sete?", proxima: "c2_12" },
    c2_12: { tipo: "narracao", texto: "A turma inteira se vira. A SN olha para o livro. Para a questão sete. Para a professora.", proxima: "c2_13" },
    c2_13: { tipo: "pensamento", texto: "Eu não faço uma conta de química há doze anos.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — A pergunta da professora
    c2_esc2: { escolhas: [
      { texto: "A. Tentar resolver com o que ainda lembra.", proxima: "c2_2a_1", pontos: { hana: 1, desvio: 1 } },
      { texto: "B. “Eu não sei, professora.”", proxima: "c2_2b_1", pontos: { hana: 2 } },
      { texto: "C. “Desculpa... que dia é hoje?”", proxima: "c2_2c_1", pontos: { mio: 1, desvio: 1 }, flags: ["Mio_desconfiada"] }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "A SN lê a questão. Para a surpresa dela, a resposta aparece. Não como fórmula de prova, mas como uma conta que ela já fez no trabalho, em alguma planilha.", proxima: "c2_2a_2" },
    c2_2a_2: { quem: "eu", texto: "Dá 0,25 mol. Mas, sinceramente, ninguém usa isso na vida. A não ser pra ler rótulo de remédio.", proxima: "c2_2a_3" },
    c2_2a_3: { tipo: "narracao", texto: "Silêncio. Alguém ri no fundo. A professora ajeita os óculos.", proxima: "c2_2a_4" },
    c2_2a_4: { quem: "desconhecido", rotulo: "Professora", texto: "...Está certo. A parte do rótulo eu vou fingir que não ouvi.", proxima: "c2_2a_5" },
    c2_2a_5: { tipo: "narracao", sprite: "hana", texto: "A Hana olha para a SN como se ela tivesse acabado de falar outra língua.", proxima: "c2_14" },

    c2_2b_1: { quem: "eu", texto: "Eu não sei, professora.", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "desconhecido", rotulo: "Professora", texto: "Pelo menos é honesta. Presta atenção, então.", proxima: "c2_2b_3" },
    c2_2b_3: { tipo: "narracao", sprite: "hana", texto: "Quando a professora vira de costas, a Hana desliza um papelzinho dobrado pela mesa. Dentro, com letra caprichada: “Também não entendi a sete. Depois a gente vê junto.” E o desenho de um gato dormindo.", proxima: "c2_2b_4" },
    c2_2b_4: { tipo: "pensamento", texto: "Os gatos da Hana. Ela desenhava gatinhos em tudo. Até na prova. Eu tinha esquecido disso também.", proxima: "c2_14" },

    c2_2c_1: { quem: "eu", texto: "Desculpa... que dia é hoje?", proxima: "c2_2c_2" },
    c2_2c_2: { tipo: "narracao", texto: "A turma explode em risada. A professora aponta, sem paciência, para o canto da lousa.", proxima: "c2_2c_3" },
    c2_2c_3: { quem: "desconhecido", rotulo: "Professora", texto: "Está escrito ali desde as sete da manhã, SN.", proxima: "c2_2c_4" },
    c2_2c_4: { tipo: "narracao", texto: "Duas fileiras atrás, a Mio para de rir antes de todo mundo.", proxima: "c2_14" },

    // (todas as opções continuam aqui)
    c2_14: { tipo: "narracao", sprite: null, texto: "A aula continua. A SN copia o que está na lousa sem entender nada, só para ter o que fazer com as mãos.", proxima: "c2_15" },
    c2_15: { tipo: "pensamento", texto: "Se é sonho, por que eu não consigo controlar nada? Por que eu não posso voar, ou acordar, ou simplesmente... sair daqui?", proxima: "c2_16" },
    c2_16: { tipo: "pensamento", texto: "E se não for sonho?", proxima: "c2_17" },
    c2_17: { tipo: "narracao", texto: "Ela não termina o pensamento. Ele é grande demais.", proxima: "c3_01" },

    /* =================== CENA 3 — ELE ESTÁ VIVO =================== */
    // Cenário: mesma sala, fim da aula. Música: some aos poucos até ficar só o barulho da turma.
    c3_01: { tipo: "narracao", transicao: "tempo", legenda: "Cena 3 — Ele está vivo", sprite: null, texto: "Perto do fim da aula, alguém bate de leve no batente da porta.", proxima: "c3_02" },
    c3_02: { quem: "desconhecido", texto: "Com licença... desculpa, professora. A SN está aí?", proxima: "c3_03" },
    c3_03: { tipo: "narracao", texto: "A SN levanta a cabeça devagar. Ela conhece essa voz. Ouviu ela ontem à noite, aos vinte e oito anos, numa gravação que cortou no meio.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", sprite: "takeo", texto: "Na porta está um garoto magro, de ombros estreitos, com a jaqueta da gangue grande demais para ele. Um curativo na bochecha. Um caderno azul nas mãos.", proxima: "c3_05" },
    c3_05: { tipo: "narracao", texto: "O ar some do peito dela.", proxima: "c3_06" },
    c3_06: { tipo: "pensamento", texto: "Não.", proxima: "c3_07" },
    c3_07: { tipo: "pensamento", texto: "Não, não, não. Isso não é justo. Pode ser um sonho com a Mio. Com a Hana. Com a escola inteira. Mas não com ele.", proxima: "c3_08" },
    c3_08: { tipo: "pensamento", texto: "Eu já sonhei com ele tantas vezes. Ele sempre estava de costas, indo embora. Nunca olhava pra mim.", proxima: "c3_09" },
    c3_09: { tipo: "pensamento", texto: "Esse está olhando.", proxima: "c3_10" },
    c3_10: { quem: "takeo", texto: "Oi. Você esqueceu isso na biblioteca ontem. Eu... achei que você fosse precisar pra prova.", proxima: "c3_11" },
    c3_11: { tipo: "narracao", texto: "Ele estende o caderno. O sorriso dele é exatamente o da foto. O curativo na bochecha também.", proxima: "c3_12" },
    c3_12: { tipo: "pensamento", texto: "O curativo da foto. Eu segurei aquela foto ontem à noite. Como ele pode estar usando o mesmo curativo?", proxima: "c3_13" },
    c3_13: { tipo: "narracao", texto: "Ao lado da SN, a Hana levanta os olhos do livro. Ela olha do Takeo para a SN, e da SN para o Takeo, sem dizer nada.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — O que fazer diante do Takeo?
    c3_esc3: { escolhas: [
      { texto: "A. Pegar o caderno e tocar de leve no curativo dele: “Quem fez isso com você?”", proxima: "c3_3a_1", pontos: { takeo: 2 } },
      { texto: "B. “Você está vivo...” (escapa sem querer)", proxima: "c3_3b_1", pontos: { takeo: 1, desvio: 2 }, flags: ["Takeo_intrigado"] },
      { texto: "C. Pegar o caderno, agradecer baixinho e segurar o choro.", proxima: "c3_3c_1", pontos: { takeo: 1, hana: 1 } }
    ]},
    c3_3a_1: { tipo: "narracao", texto: "O Takeo fica vermelho até as orelhas e dá um passo para trás.", proxima: "c3_3a_2" },
    c3_3a_2: { quem: "takeo", texto: "Ah, isso? Não foi nada. Eu tropecei.", proxima: "c3_3a_3" },
    c3_3a_3: { quem: "eu", texto: "Você tropeçou no punho de alguém.", proxima: "c3_3a_4" },
    c3_3a_4: { quem: "takeo", texto: "...Desde quando você fala assim?", proxima: "c3_3a_5" },
    c3_3a_5: { tipo: "narracao", texto: "Ele ri, nervoso. Mas não nega.", proxima: "c3_3a_6" },
    c3_3a_6: { tipo: "pensamento", texto: "A pele dele estava quente embaixo do curativo. Eu senti.", proxima: "c3_14" },

    c3_3b_1: { tipo: "narracao", texto: "O Takeo inclina a cabeça, confuso.", proxima: "c3_3b_2" },
    c3_3b_2: { quem: "takeo", texto: "Vivo? Ah, você quer dizer depois da prova de física? Quase não sobrevivi, verdade.", proxima: "c3_3b_3" },
    c3_3b_3: { quem: "eu", texto: "...É. Isso.", proxima: "c3_3b_4" },
    c3_3b_4: { tipo: "narracao", texto: "Ele sorri. Mas, antes de ir embora, olha para trás mais uma vez, como se quisesse perguntar alguma coisa e tivesse desistido.", proxima: "c3_3b_5" },
    c3_3b_5: { tipo: "pensamento", texto: "Por que eu disse isso? Claro que ele está vivo. Ele só vai morrer daqui a... daqui a...", proxima: "c3_3b_6" },
    c3_3b_6: { tipo: "pensamento", texto: "Eu não consigo terminar a conta.", proxima: "c3_14" },

    c3_3c_1: { tipo: "narracao", texto: "A SN pega o caderno e aperta contra o peito, do mesmo jeito que apertou a foto.", proxima: "c3_3c_2" },
    c3_3c_2: { quem: "eu", texto: "Obrigada, Takeo.", proxima: "c3_3c_3" },
    c3_3c_3: { quem: "takeo", texto: "N-não precisa agradecer. Era só um caderno.", proxima: "c3_3c_4" },
    c3_3c_4: { tipo: "narracao", texto: "Debaixo da mesa, sem dizer nada, a Hana empurra um lenço de papel para perto da mão da SN.", proxima: "c3_14" },

    // (todas as opções continuam aqui)
    c3_14: { tipo: "narracao", sprite: null, texto: "O Takeo pede desculpas para a professora e vai embora. Logo depois, o sinal do intervalo toca.", proxima: "c3_15" },
    c3_15: { tipo: "narracao", texto: "A SN continua sentada. As mãos dela estão tremendo em cima do caderno azul.", proxima: "c3_16" },
    c3_16: { tipo: "pensamento", texto: "Os dedos dele encostaram nos meus quando ele me entregou o caderno. Eram quentes.", proxima: "c3_17" },
    c3_17: { tipo: "pensamento", texto: "Nos meus sonhos, eu nunca consigo encostar nele.", proxima: "c3_18" },
    c3_18: { tipo: "narracao", sprite: "mio", texto: "A Mio aparece do lado da mesa, assobiando.", proxima: "c3_19" },
    c3_19: { quem: "mio", texto: "Olha só. O Takeo atravessou o colégio inteiro por causa de um caderno.", proxima: "c3_20" },
    c3_20: { quem: "eu", texto: "Ele só é gentil.", proxima: "c3_21" },
    c3_21: { quem: "mio", texto: "Ele é gentil com todo mundo. Mas ele não fica vermelho com todo mundo.", proxima: "c3_22" },
    c3_22: { tipo: "narracao", sprite: "hana", texto: "A Hana fecha o livro devagar.", proxima: "c3_23" },
    c3_23: { quem: "hana", texto: "Você está diferente hoje, SN.", proxima: "c3_24" },
    c3_24: { quem: "eu", texto: "Diferente como?", proxima: "c3_25" },
    c3_25: { quem: "hana", texto: "Não sei ainda. Mas você olhou pra ele como se estivesse se despedindo.", proxima: "c3_26" },
    c3_26: { tipo: "pensamento", texto: "A Hana sempre percebeu tudo. Eu tinha esquecido disso.", proxima: "c4_01" },

    /* =================== CENA 4 — O ENCRENQUEIRO DO CORREDOR =================== */
    // Cenário: escada e corredor do segundo andar, em frente à coordenação. Música: começa em silêncio; a guitarra entra com o Ryuji.
    c4_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Cena 4 — O encrenqueiro do corredor", sprite: null, texto: "No intervalo, a SN diz para a Mio que vai devolver um livro na biblioteca. É mentira. Ela só precisa ficar sozinha um pouco.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "Ela senta no último degrau da escada do segundo andar e abre o caderno azul numa página em branco.", proxima: "c4_03" },
    c4_03: { tipo: "narracao", texto: "Ela começa a escrever. A letra sai redonda e caprichada demais. É a letra dela aos dezesseis, não aos vinte e oito.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", texto: "O que pode estar acontecendo: 1. Sonho. 2. Eu bati a cabeça e estou num hospital. 3. Eu enlouqueci.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "Ela fica olhando para a lista. Depois, bem pequeno, escreve um quarto item.", proxima: "c4_06" },
    c4_06: { tipo: "narracao", efeito: "eco", texto: "4. Eu voltei.", proxima: "c4_07" },
    c4_07: { tipo: "pensamento", texto: "Isso é ridículo.", proxima: "c4_08" },
    c4_08: { tipo: "narracao", texto: "Ela risca o item quatro. Risca de novo, até o papel quase rasgar.", proxima: "c4_09" },
    c4_09: { tipo: "pensamento", texto: "Ninguém volta no tempo. Isso é coisa de filme. Dos livros que eu lia escondida nessa mesma escada.", proxima: "c4_10" },
    c4_10: { tipo: "narracao", texto: "Mas ela não arranca a página.", proxima: "c4_11" },
    c4_11: { tipo: "narracao", texto: "Lá embaixo, no corredor, a porta da coordenação se abre com força.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", sprite: "ryuji", texto: "Um garoto alto sai de lá com uma folha de advertência amassada na mão. Cabelo ruivo escuro, bagunçado. Jaqueta preta por cima do uniforme, que obviamente não deveria estar ali.", proxima: "c4_13" },
    c4_13: { quem: "coordenador", rotulo: "Coordenador (de dentro da sala)", sprite: "ryuji", texto: "E tira essa jaqueta, Ryuji!", proxima: "c4_14" },
    c4_14: { quem: "ryuji", texto: "Vou pensar no seu caso.", proxima: "c4_15" },
    c4_15: { tipo: "narracao", texto: "Ele fecha a porta com o pé. A SN desce a escada para ir embora e, no último degrau, ele percebe que ela está ali.", proxima: "c4_16" },
    c4_16: { tipo: "pensamento", texto: "Ryuji. Até ele está aqui, igualzinho. A jaqueta, o jeito de andar como se o corredor fosse dele. Eu passei três anos desviando desse corredor só pra não cruzar com ele.", proxima: "c4_17" },
    c4_17: { tipo: "narracao", texto: "Ele se encosta na parede e olha para ela de cima a baixo, com aquele sorriso de quem está prestes a fazer besteira.", proxima: "c4_18" },
    c4_18: { quem: "ryuji", texto: "Olha só. A nerd da primeira fila. Está perdida? A biblioteca é pro outro lado, princesa.", proxima: "c4_19" },
    c4_19: { quem: "eu", texto: "Eu sei onde fica a biblioteca.", proxima: "c4_20" },
    c4_20: { quem: "ryuji", texto: "Então por que parou? Ficou com medo de mim?", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — Responder ao Ryuji
    c4_esc4: { escolhas: [
      { texto: "A. “Você sempre fala assim ou é só quando quer chamar atenção?”", proxima: "c4_4a_1", pontos: { ryuji: 2 } },
      { texto: "B. Não responder. Passar por ele em silêncio.", proxima: "c4_4b_1", pontos: { ryuji: 1 } },
      { texto: "C. “Desculpa, eu já estou indo.”", proxima: "c4_4c_1", pontos: { desvio: -1 } } // a SN age como na primeira vez
    ]},
    c4_4a_1: { tipo: "narracao", texto: "Silêncio. O sorriso do Ryuji trava no rosto.", proxima: "c4_4a_2" },
    c4_4a_2: { quem: "ryuji", texto: "...Você acabou de me chamar de criança?", proxima: "c4_4a_3" },
    c4_4a_3: { quem: "eu", texto: "Eu fiz uma pergunta.", proxima: "c4_4a_4" },
    c4_4a_4: { quem: "ryuji", texto: "Você me chamou de criança.", proxima: "c4_4a_5" },
    c4_4a_5: { quem: "eu", texto: "Se você se identificou...", proxima: "c4_4a_6" },
    c4_4a_6: { tipo: "narracao", texto: "Ela passa por ele. Ele fica parado, com a boca meio aberta, até começar a rir sozinho no corredor.", proxima: "c4_4a_7" },
    c4_4a_7: { quem: "ryuji", texto: "Ei! Volta aqui, a gente não terminou!", proxima: "c4_4a_8" },
    c4_4a_8: { tipo: "pensamento", texto: "Aos dezesseis, eu nunca teria coragem de falar isso. Aos vinte e oito, eu já aguentei chefe pior que ele.", proxima: "c4_21" },

    c4_4b_1: { tipo: "narracao", texto: "A SN passa por ele como se ele fosse um extintor de incêndio. Ele espera ela se virar. Ela não se vira.", proxima: "c4_4b_2" },
    c4_4b_2: { quem: "ryuji", texto: "...Sério? Nem um “sai da frente”?", proxima: "c4_4b_3" },
    c4_4b_3: { tipo: "narracao", texto: "Ele fica olhando enquanto ela vai embora, com a testa franzida, como quem acabou de perder um jogo sem entender as regras.", proxima: "c4_21" },

    c4_4c_1: { quem: "ryuji", texto: "Isso. Corre.", proxima: "c4_4c_2" },
    c4_4c_2: { tipo: "narracao", texto: "Ele ri. Mas a risada sai curta, quase decepcionada.", proxima: "c4_4c_3" },
    c4_4c_3: { tipo: "pensamento", texto: "Eu disse exatamente a mesma coisa naquela época. E me arrependi por doze anos de ter abaixado a cabeça.", proxima: "c4_21" },

    // (todas as opções continuam aqui)
    c4_21: { tipo: "narracao", sprite: null, texto: "Na curva do corredor, um aluno do primeiro ano vem correndo, carregando uma pilha alta de cadeiras para o auditório. Ele tropeça. A pilha tomba direto na direção da cabeça da SN.", proxima: "c4_22" },
    c4_22: { tipo: "pensamento", texto: "Não dá tempo de pensar.", proxima: "c4_23" },
    c4_23: { tipo: "narracao", efeito: "tremor", texto: "Ela levanta um braço e segura a pilha inteira. Com uma mão só. Sem nem dobrar o cotovelo.", proxima: "c4_24" },
    c4_24: { tipo: "pensamento", texto: "Droga.", proxima: "c4_25" },
    c4_25: { tipo: "narracao", texto: "Devagar, ela finge que o peso é enorme, dobra os joelhos e solta um gemido bem ensaiado.", proxima: "c4_26" },
    c4_26: { quem: "eu", texto: "Nossa... que pesado... me ajuda aqui?", proxima: "c4_27" },
    c4_27: { tipo: "narracao", texto: "O calouro pega as cadeiras, pede desculpas mil vezes e some.", proxima: "c4_28" },
    c4_28: { tipo: "narracao", texto: "SN respira fundo e se vira.", proxima: "c4_29" },
    c4_29: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji está parado no fim do corredor. Ele viu. Ele está olhando para a mão dela, depois para o rosto dela, com uma expressão que não tem nada de provocação.", proxima: "c4_30" },
    c4_30: { quem: "ryuji", texto: "...Que diabos foi isso?", proxima: "c4_31" },
    c4_31: { quem: "eu", texto: "Adrenalina.", proxima: "c4_32" },
    c4_32: { quem: "ryuji", texto: "Adrenalina.", proxima: "c4_33" },
    c4_33: { quem: "eu", texto: "Pesquisa no Google.", proxima: "c4_34" },
    c4_34: { tipo: "narracao", sprite: null, flags: ["Ryuji_viu_a_forca"], texto: "Ela vai embora antes que ele consiga responder.", proxima: "c4_35" },
    c4_35: { tipo: "pensamento", efeito: "eco", texto: "“Nossa força não existe para ferir. Existe para proteger.” A vovó também dizia: “e ninguém pode saber”.", proxima: "c4_36" },
    c4_36: { tipo: "narracao", texto: "A palma da mão dela está vermelha e latejando, onde a quina de metal da cadeira apertou.", proxima: "c4_37" },
    c4_37: { tipo: "pensamento", texto: "Dói.", proxima: "c4_38" },
    c4_38: { tipo: "pensamento", texto: "Em sonho não dói assim.", proxima: "c4_39" },
    c4_39: { tipo: "pensamento", texto: "Nem sei onde eu estou de verdade, e já quebrei a regra da vovó.", proxima: "c5_01" },

    /* =================== CENA 5 — O TERRITÓRIO DA GANGUE =================== */
    // Cenário: pátio dos fundos, atrás da quadra, no almoço. Muro pichado, arquibancada velha. Música: tema da gangue.
    c5_01: { quem: "mio", cenario: "patio-fundos", transicao: "tempo", legenda: "Cena 5 — O território da gangue", sprite: "mio", texto: "Vem comigo. Eu preciso entregar uma coisa rapidinho.", proxima: "c5_02" },
    c5_02: { quem: "eu", texto: "Mio, esse é o pátio dos fundos.", proxima: "c5_03" },
    c5_03: { quem: "mio", texto: "E daí? Eles não mordem. Bom... quase nunca.", proxima: "c5_04" },
    c5_04: { tipo: "narracao", texto: "A Mio vai na frente, balançando uma sacola de papel. A SN segue dois passos atrás, como sempre seguiu.", proxima: "c5_05" },
    c5_05: { quem: "mio", texto: "Você está quieta demais. Até pra você.", proxima: "c5_06" },
    c5_06: { quem: "eu", texto: "Mio... se você acordasse um dia e tudo estivesse... fora do lugar, o que você faria?", proxima: "c5_07" },
    c5_07: { quem: "mio", texto: "Tomava café. Depois eu pensava.", proxima: "c5_08" },
    c5_08: { tipo: "narracao", texto: "Ela para de andar e olha para a SN de verdade, sem brincadeira.", proxima: "c5_09" },
    c5_09: { quem: "mio", texto: "...Por quê? Aconteceu alguma coisa na sua casa?", proxima: "c5_10" },
    c5_10: { quem: "eu", texto: "Não. Esquece. Foi uma pergunta boba.", proxima: "c5_11" },
    c5_11: { tipo: "narracao", texto: "A Mio não esquece. Dá pra ver no jeito que ela continua olhando de lado enquanto voltam a andar.", proxima: "c5_12" },
    c5_12: { tipo: "pensamento", texto: "Eu nunca pisei no pátio dos fundos. Nem uma vez, em três anos de escola.", proxima: "c5_13" },
    c5_13: { tipo: "pensamento", texto: "Então por que eu estou vendo cada pichação desse muro? Cada degrau quebrado da arquibancada? Meu cérebro não pode inventar um lugar que eu nunca vi... pode?", proxima: "c5_14" },
    c5_14: { tipo: "narracao", sprite: "kaito", texto: "Na arquibancada, meia dúzia de garotos com jaquetas iguais conversam alto. No centro, sentado no degrau mais alto como se fosse um trono, está um garoto de cabelo preto bagunçado, com uma tatuagem aparecendo por baixo da manga dobrada.", proxima: "c5_15" },
    c5_15: { tipo: "pensamento", texto: "Kaito. O líder. Todo mundo sabia o nome dele, até quem nunca falou com ele. Tipo eu.", proxima: "c5_16" },
    c5_16: { tipo: "narracao", sprite: "blake", texto: "Em pé ao lado dele, braços cruzados, está o maior aluno do colégio. Cabelo loiro, tatuagem no pescoço, cara de quem não sorri desde o fundamental. Blake.", proxima: "c5_17" },
    c5_17: { tipo: "narracao", texto: "A Mio sobe a arquibancada pulando os degraus de dois em dois e para bem na frente do Blake.", proxima: "c5_18" },
    c5_18: { quem: "mio", texto: "Entrega especial! Sua blusa, que você esqueceu no treino. Lavada e cheirosa. De nada.", proxima: "c5_19" },
    c5_19: { quem: "blake", texto: "Eu não pedi pra você lavar.", proxima: "c5_20" },
    c5_20: { quem: "mio", texto: "Eu sei. Eu sou incrível assim mesmo.", proxima: "c5_21" },
    c5_21: { tipo: "narracao", texto: "O Blake pega a blusa. A Mio sorri como se tivesse ganhado um campeonato.", proxima: "c5_22" },
    c5_22: { tipo: "pensamento", flags: ["SN_notou_Mio_e_Blake"], texto: "Eu nunca tinha percebido isso naquela época. O jeito que a Mio olha pra ele.", proxima: "c5_23" },
    c5_23: { tipo: "narracao", sprite: "kaito", texto: "O Kaito apoia os cotovelos nos joelhos e olha direto para a SN.", proxima: "c5_24" },
    c5_24: { quem: "kaito", texto: "E quem é essa? Sua amiga muda, Mio?", proxima: "c5_25" },
    c5_25: { tipo: "narracao", texto: "A SN sente uma coisa estranha. Uma pontada de familiaridade, como um cheiro que lembra a infância sem lembrar de onde.", proxima: "c5_26" },
    c5_26: { tipo: "pensamento", texto: "Eu já vi esse olhar antes. Mas não foi aqui.", proxima: "c5_esc5" },

    // ▶ ESCOLHA 5 — Responder ao Kaito
    c5_esc5: { escolhas: [
      { texto: "A. Sustentar o olhar: “Eu falo. Só não com quem não tem nada a dizer.”", proxima: "c5_5a_1", pontos: { kaito: 2 } },
      { texto: "B. “Muda não. Só não fiquei impressionada.”", proxima: "c5_5b_1", pontos: { kaito: 1, blake: 1 } },
      { texto: "C. “Eu sou a SN. Muito prazer.” (educada, sem medo)", proxima: "c5_5c_1", pontos: { kaito: 1 } }
    ]},
    c5_5a_1: { tipo: "narracao", texto: "A gangue inteira fica em silêncio. Alguém solta um “uuuh” baixinho. O Kaito sorri devagar.", proxima: "c5_5a_2" },
    c5_5a_2: { quem: "kaito", texto: "Que difícil. Gostei.", proxima: "c5_5a_3" },
    c5_5a_3: { quem: "eu", texto: "Não foi pra você gostar.", proxima: "c5_5a_4" },
    c5_5a_4: { quem: "kaito", texto: "É por isso que eu gostei.", proxima: "c5_27" },

    c5_5b_1: { tipo: "narracao", sprite: "blake", texto: "O Blake solta uma risada curta pelo nariz, a primeira que a SN já viu nele.", proxima: "c5_5b_2" },
    c5_5b_2: { quem: "blake", texto: "Ela te pegou.", proxima: "c5_5b_3" },
    c5_5b_3: { quem: "kaito", texto: "Cala a boca, Blake.", proxima: "c5_27" },

    c5_5c_1: { quem: "kaito", texto: "Educada. Que coisa rara por aqui.", proxima: "c5_5c_2" },
    c5_5c_2: { tipo: "narracao", texto: "Ele repete o nome dela baixinho, “SN”, como se estivesse procurando o nome numa gaveta antiga.", proxima: "c5_27" },

    // (todas as opções continuam aqui)
    c5_27: { tipo: "narracao", sprite: "kaito", texto: "O Kaito desce os degraus e para na frente dela. Ele é bem mais alto. Ele inclina a cabeça.", proxima: "c5_28" },
    c5_28: { quem: "kaito", texto: "Estranho. Eu tenho a impressão de que já te vi antes.", proxima: "c5_29" },
    c5_29: { quem: "eu", texto: "Eu estudo aqui há dois anos.", proxima: "c5_30" },
    c5_30: { quem: "kaito", texto: "Não é isso.", proxima: "c5_31" },
    c5_31: { tipo: "narracao", flags: ["Kaito_familiaridade"], texto: "Ele não explica. Ela também não pergunta.", proxima: "c5_32" },
    c5_32: { tipo: "narracao", sprite: "blake", texto: "Quando a Mio puxa a SN para ir embora, o Blake se coloca no caminho por um segundo. A voz dele é baixa, só para ela ouvir.", proxima: "c5_33" },
    c5_33: { quem: "blake", texto: "Esse lugar não é pra você. Hoje principalmente.", proxima: "c5_34" },
    c5_34: { tipo: "pensamento", texto: "Hoje.", proxima: "c5_35" },
    c5_35: { tipo: "pensamento", texto: "A palavra fica presa na minha cabeça como um anzol. Alguma coisa aconteceu hoje. Eu sei disso. Eu só não consigo lembrar o quê.", proxima: "c5_esc6" },

    // ▶ ESCOLHA 6 — Responder ao Blake
    c5_esc6: { escolhas: [
      { texto: "A. “Então por que você está se dando ao trabalho de me avisar?”", proxima: "c5_6a_1", pontos: { blake: 2 } },
      { texto: "B. “O que vai acontecer hoje?”", proxima: "c5_6b_1", pontos: { blake: 1, desvio: 1 } },
      { texto: "C. “Eu sei me cuidar.”", proxima: "c5_6c_1", pontos: { blake: 1, kaito: 1 } } // o Kaito ouviu
    ]},
    c5_6a_1: { tipo: "narracao", texto: "O Blake fica um tempo calado.", proxima: "c5_6a_2" },
    c5_6a_2: { quem: "blake", texto: "Porque você é amiga da Mio. E a Mio entra em qualquer confusão atrás de quem ela gosta.", proxima: "c5_6a_3" },
    c5_6a_3: { tipo: "pensamento", texto: "Então ele também se preocupa com ela.", proxima: "c5_36" },

    c5_6b_1: { tipo: "narracao", texto: "O olhar do Blake fica mais duro.", proxima: "c5_6b_2" },
    c5_6b_2: { quem: "blake", texto: "Nada que seja da sua conta.", proxima: "c5_6b_3" },
    c5_6b_3: { quem: "eu", texto: "...Tem a ver com o Takeo?", proxima: "c5_6b_4" },
    c5_6b_4: { tipo: "narracao", flags: ["Blake_desconfiado"], texto: "Ela não sabe de onde tirou isso. Saiu sozinho. O Blake estreita os olhos e não responde, e o silêncio dele é resposta suficiente.", proxima: "c5_6b_5" },
    c5_6b_5: { tipo: "pensamento", texto: "Por que eu falei o nome dele?", proxima: "c5_36" },

    c5_6c_1: { tipo: "narracao", texto: "Lá de trás, o Kaito ri alto.", proxima: "c5_6c_2" },
    c5_6c_2: { quem: "kaito", texto: "Ela sabe se cuidar, Blake. Deixa a moça.", proxima: "c5_6c_3" },
    c5_6c_3: { quem: "blake", texto: "...Vou lembrar disso quando ela precisar de ajuda.", proxima: "c5_36" },

    // (todas as opções continuam aqui)
    c5_36: { tipo: "narracao", sprite: null, texto: "A SN vai embora do pátio com a sensação de ter esquecido alguma coisa importante, como quando a gente sai de casa e não lembra se trancou a porta.", proxima: "c6_01" },

    /* =================== CENA 6 — A DATA =================== */
    // Cenário: escada do segundo andar, depois do almoço (usa o fundo "corredor"). Música: piano do prólogo, bem baixo.
    // Aqui a SN finalmente junta as pistas. Mesmo assim, ainda não tem certeza de nada.
    c6_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Cena 6 — A data", sprite: null, texto: "Depois do almoço, a SN volta para a escada do segundo andar. É o único lugar da escola onde ninguém aparece.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", texto: "Ninguém, menos a Mio.", proxima: "c6_03" },
    c6_03: { tipo: "narracao", sprite: "mio", texto: "Ela senta do lado da SN com duas caixinhas de suco de uva e estende uma, sem perguntar se ela quer.", proxima: "c6_04" },
    c6_04: { quem: "mio", texto: "Achei você. Você sumiu no almoço. Você nunca some. Você é previsível igual relógio.", proxima: "c6_05" },
    c6_05: { quem: "eu", texto: "Obrigada?", proxima: "c6_06" },
    c6_06: { quem: "mio", texto: "É um elogio. Mais ou menos.", proxima: "c6_07" },
    c6_07: { tipo: "narracao", texto: "Por um tempo, as duas só tomam suco em silêncio. Lá embaixo, alguém grita o nome de alguém na quadra.", proxima: "c6_08" },
    c6_08: { quem: "mio", texto: "SN. Fala sério comigo. Está acontecendo alguma coisa?", proxima: "c6_09" },
    c6_09: { tipo: "pensamento", texto: "Como eu explico pra ela que, pra mim, faz dez anos que a gente não conversa de verdade?", proxima: "c6_10" },
    c6_10: { quem: "eu", texto: "Mio... você acha que a gente vai continuar amiga? Depois da escola. Quando a gente for adulta.", proxima: "c6_11" },
    c6_11: { tipo: "narracao", texto: "A Mio ri tão alto que a risada ecoa na escada.", proxima: "c6_12" },
    c6_12: { quem: "mio", texto: "Que pergunta é essa? Claro. Eu vou ser a madrinha do seu casamento, a tia chata dos seus filhos, e quando a gente ficar velha a gente vai brigar por causa de novela.", proxima: "c6_13" },
    c6_13: { tipo: "pensamento", texto: "Ela fala com tanta certeza.", proxima: "c6_14" },
    c6_14: { tipo: "pensamento", texto: "Eu também tinha certeza.", proxima: "c6_esc7" },

    // ▶ ESCOLHA 7 — A promessa da Mio
    c6_esc7: { escolhas: [
      { texto: "A. “Promete? Mesmo se eu for embora pra outra cidade?”", proxima: "c6_7a_1", pontos: { mio: 2 }, flags: ["Promessa_Mio"] },
      { texto: "B. Rir junto: “Eu vou ganhar a briga da novela.”", proxima: "c6_7b_1", pontos: { mio: 1 } },
      { texto: "C. Não dizer nada e encostar a cabeça no ombro dela.", proxima: "c6_7c_1", pontos: { mio: 1 }, flags: ["Mio_desconfiada"] }
    ]},
    c6_7a_1: { tipo: "narracao", texto: "A Mio para de rir.", proxima: "c6_7a_2" },
    c6_7a_2: { quem: "mio", texto: "Por que você iria embora?", proxima: "c6_7a_3" },
    c6_7a_3: { quem: "eu", texto: "Sei lá. As pessoas vão.", proxima: "c6_7a_4" },
    c6_7a_4: { quem: "mio", texto: "Então eu vou atrás. Prometo. Você sabe que eu sou chata.", proxima: "c6_7a_5" },
    c6_7a_5: { tipo: "narracao", texto: "Ela estica o dedo mindinho, como faziam quando tinham seis anos. A SN demora um segundo para entender. Depois engancha o dedo no dela.", proxima: "c6_7a_6" },
    c6_7a_6: { tipo: "pensamento", texto: "Naquela época, ninguém prometeu nada. A gente só deixou acontecer.", proxima: "c6_15" },

    c6_7b_1: { quem: "mio", texto: "Nunca. Eu grito mais alto.", proxima: "c6_7b_2" },
    c6_7b_2: { tipo: "narracao", texto: "As duas riem até a moça da limpeza olhar feio lá de baixo.", proxima: "c6_7b_3" },
    c6_7b_3: { tipo: "pensamento", texto: "Fazia quanto tempo que eu não ria assim?", proxima: "c6_15" },

    c6_7c_1: { tipo: "narracao", texto: "A Mio fica quieta por um tempo. Depois apoia a bochecha em cima da cabeça da SN.", proxima: "c6_7c_2" },
    c6_7c_2: { quem: "mio", texto: "Tá. Não precisa falar. Mas eu tô aqui, viu?", proxima: "c6_7c_3" },
    c6_7c_3: { quem: "mio", texto: "...E se for coisa de menino, eu quero o nome completo.", proxima: "c6_7c_4" },
    c6_7c_4: { tipo: "pensamento", texto: "Ela está fazendo piada. Mas a voz dela está preocupada. A Mio sempre escondeu a preocupação atrás de uma piada.", proxima: "c6_15" },

    // (todas as opções continuam aqui)
    c6_15: { tipo: "narracao", texto: "O sinal toca. A Mio levanta, amassa a caixinha de suco e acerta o lixo de primeira.", proxima: "c6_16" },
    c6_16: { quem: "mio", texto: "Vem, senão a gente leva bronca.", proxima: "c6_17" },
    c6_17: { quem: "eu", texto: "Já vou. Só um minuto.", proxima: "c6_18" },
    c6_18: { tipo: "narracao", sprite: null, texto: "Sozinha, a SN pega o celular. Um modelo antigo, com a tela trincada no canto. Ela abre o calendário, sem saber direito o que está procurando.", proxima: "c6_19" },
    c6_19: { tipo: "narracao", texto: "Ali está a mesma data da lousa. E, dois dias depois, um lembrete escrito por ela mesma: “PROVA DE FÍSICA. ESTUDAR!!!”", proxima: "c6_20" },
    c6_20: { tipo: "pensamento", texto: "A prova de física.", proxima: "c6_21" },
    c6_21: { tipo: "pensamento", texto: "O Takeo falou da prova de física.", proxima: "c6_22" },
    c6_22: { tipo: "narracao", efeito: "flashback", texto: "Uma lembrança se acende devagar, como uma luz com defeito. Dia da prova de física. A sala em silêncio. A carteira do Takeo vazia.", proxima: "c6_23" },
    c6_23: { tipo: "narracao", efeito: "flashback", texto: "E, no dia seguinte, o Takeo entrando na escola com o braço engessado e o olho roxo. Todo mundo cochichando no corredor. “Pegaram ele atrás do galpão.”", proxima: "c6_24" },
    c6_24: { tipo: "pensamento", texto: "Foi nessa semana.", proxima: "c6_25" },
    c6_25: { tipo: "pensamento", texto: "Não. Foi hoje.", proxima: "c6_26" },
    c6_26: { tipo: "narracao", texto: "A caixinha de suco escorrega da mão dela e rola pela escada, degrau por degrau.", proxima: "c6_27" },
    c6_27: { tipo: "pensamento", texto: "Naquela tarde, eu fui pra casa estudar. Fiquei sabendo só no dia seguinte, junto com todo mundo.", proxima: "c6_28" },
    c6_28: { tipo: "pensamento", texto: "Depois daquela briga, as gangues nunca mais pararam. Foi uma coisa puxando a outra. E, no fim...", proxima: "c6_29" },
    c6_29: { tipo: "narracao", texto: "Ela não termina. Ela fecha os olhos com força.", proxima: "c6_30" },
    c6_30: { tipo: "pensamento", texto: "Isso não faz sentido. Nada disso faz sentido.", proxima: "c6_31" },
    c6_31: { tipo: "pensamento", texto: "Eu não sei se isso é sonho, se eu enlouqueci ou se é outra coisa que eu nem sei o nome.", proxima: "c6_32" },
    c6_32: { tipo: "narracao", texto: "Ela abre o caderno azul na página da lista. O item quatro está riscado tantas vezes que quase não dá para ler.", proxima: "c6_33" },
    c6_33: { tipo: "narracao", texto: "Ela olha para ele por muito tempo.", proxima: "c6_34" },
    c6_34: { tipo: "pensamento", texto: "Mas se existir qualquer chance, por menor que seja, de isso ser real...", proxima: "c6_35" },
    c6_35: { tipo: "pensamento", texto: "...então dessa vez eu não vou pra casa.", proxima: "c6_36" },
    c6_36: { tipo: "pensamento", efeito: "eco", texto: "Dessa vez, ninguém vai morrer.", proxima: "c7_01" },

    /* =================== CENA 7 — O CLUBE E A GAROTA PERFEITA =================== */
    // Cenário: sala do clube de leitura, última aula. Estantes, chá, ventilador barulhento. Música: violino suave.
    c7_01: { tipo: "narracao", cenario: "clube-leitura", transicao: "tempo", legenda: "Cena 7 — O clube e a garota perfeita", texto: "O clube de leitura tem quatro membros. Dois faltaram. Sobraram a SN e a Hana, sentadas lado a lado em silêncio, cada uma com um livro.", proxima: "c7_02" },
    c7_02: { tipo: "narracao", sprite: "hana", texto: "O silêncio com a Hana nunca foi constrangedor. A SN tinha esquecido o quanto sentia falta disso.", proxima: "c7_03" },
    c7_03: { tipo: "narracao", texto: "Mas, hoje, ela não consegue ler nada. Os olhos dela vão para o relógio da parede a cada minuto.", proxima: "c7_04" },
    c7_04: { quem: "hana", texto: "Você está lendo a mesma página há dez minutos.", proxima: "c7_05" },
    c7_05: { quem: "eu", texto: "Estou relendo.", proxima: "c7_06" },
    c7_06: { quem: "hana", texto: "De cabeça pra baixo?", proxima: "c7_07" },
    c7_07: { tipo: "narracao", texto: "A SN olha para o livro. Está de cabeça pra baixo. A Hana esconde um sorriso atrás da capa.", proxima: "c7_08" },
    c7_08: { quem: "hana", texto: "Se você quiser conversar, eu estou aqui. Se não quiser, eu também estou aqui.", proxima: "c7_esc8" },

    // ▶ ESCOLHA 8 — Abrir o coração para a Hana?
    c7_esc8: { escolhas: [
      { texto: "A. “Hana... e se você soubesse que uma coisa ruim vai acontecer?”", proxima: "c7_8a_1", pontos: { hana: 2, desvio: 1 }, flags: ["Hana_suspeita"] },
      { texto: "B. “Obrigada. Só fica aqui comigo um pouco.”", proxima: "c7_8b_1", pontos: { hana: 2 } },
      { texto: "C. “Está tudo bem, sério.”", proxima: "c7_8c_1" }
    ]},
    c7_8a_1: { tipo: "narracao", texto: "A Hana fecha o livro e pensa antes de responder, como sempre.", proxima: "c7_8a_2" },
    c7_8a_2: { quem: "hana", texto: "Eu tentaria impedir. Mas primeiro eu tentaria entender por que ela vai acontecer. Senão, ela acontece de outro jeito.", proxima: "c7_8a_3" },
    c7_8a_3: { tipo: "pensamento", texto: "Ela não faz ideia do quanto isso me assusta.", proxima: "c7_09" },

    c7_8b_1: { tipo: "narracao", texto: "A Hana só encosta o ombro no da SN. Ficam assim até o ventilador dar mais uma volta barulhenta.", proxima: "c7_09" },

    c7_8c_1: { quem: "hana", texto: "Tá bom.", proxima: "c7_8c_2" },
    c7_8c_2: { tipo: "narracao", texto: "Ela volta para o livro. Mas a SN percebe que ela não vira mais nenhuma página.", proxima: "c7_09" },

    // (todas as opções continuam aqui)
    c7_09: { tipo: "narracao", texto: "A Hana tira um papel dobrado do estojo e empurra pela mesa.", proxima: "c7_10" },
    c7_10: { quem: "hana", texto: "Abriu um karaokê novo perto da estação. Sexta-feira. Se você quiser ir... comigo.", proxima: "c7_11" },
    c7_11: { tipo: "pensamento", texto: "Karaokê? A Hana? Naquela época, ela nunca me convidou pra nada. Ou eu nunca dei espaço pra ela convidar.", proxima: "c7_12" },
    c7_12: { quem: "eu", texto: "Eu vou.", proxima: "c7_13" },
    c7_13: { tipo: "narracao", flags: ["Karaoke_sexta"], texto: "A Hana pisca, surpresa com a rapidez da resposta, e fica vermelha.", proxima: "c7_14" },
    c7_14: { tipo: "narracao", sprite: null, texto: "A porta do clube se abre.", proxima: "c7_15" },
    c7_15: { tipo: "narracao", sprite: "reina", texto: "Todo mundo no corredor vira a cabeça ao mesmo tempo. A garota que entra tem cabelos longos e brilhantes, uniforme impecável e um sorriso de capa de revista.", proxima: "c7_16" },
    c7_16: { tipo: "pensamento", texto: "Reina. A garota mais popular do colégio.", proxima: "c7_17" },
    c7_17: { quem: "reina", texto: "Desculpa interromper. Alguém viu o Takeo? Ele disse que ia devolver um caderno aqui no prédio.", proxima: "c7_18" },
    c7_18: { tipo: "narracao", texto: "O olhar dela para no caderno azul em cima da mesa da SN. O sorriso não some. Mas esfria.", proxima: "c7_19" },
    c7_19: { quem: "reina", texto: "Ah. Então era o seu caderno.", proxima: "c7_20" },
    c7_20: { quem: "eu", texto: "Era.", proxima: "c7_21" },
    c7_21: { quem: "reina", texto: "Engraçado. Ele nunca atravessa o colégio por mim.", proxima: "c7_22" },
    c7_22: { tipo: "narracao", texto: "Ela se aproxima, apoia uma mão na mesa e se inclina até ficar na altura dos olhos da SN.", proxima: "c7_23" },
    c7_23: { quem: "reina", texto: "Um conselho, já que você parece boazinha. O Takeo está metido em coisas que você não entende. Fica longe disso. Fica longe dele.", proxima: "c7_esc9" },

    // ▶ ESCOLHA 9 — Responder à Reina
    c7_esc9: { escolhas: [
      { texto: "A. “Eu não estou tentando tirar ele de ninguém. Eu só não quero que ele se machuque.”", proxima: "c7_9a_1", pontos: { takeo: 1 }, flags: ["Reina_curiosa"] },
      { texto: "B. Sem desviar o olhar, bem calma: “Obrigada pelo conselho. Não vou seguir.”", proxima: "c7_9b_1", pontos: { desvio: 1 }, flags: ["Reina_rivalidade_forte"] },
      { texto: "C. “Você também não quer que ele se machuque. Dá pra ver.”", proxima: "c7_9c_1", pontos: { desvio: 2 }, flags: ["Reina_desarmada"] }
    ]},
    c7_9a_1: { tipo: "narracao", texto: "A Reina estreita os olhos, procurando a mentira. Não encontra.", proxima: "c7_9a_2" },
    c7_9a_2: { quem: "reina", texto: "...Você é estranha.", proxima: "c7_24" },

    c7_9b_1: { tipo: "narracao", texto: "A sala parece ficar mais fria. A Reina se endireita devagar.", proxima: "c7_9b_2" },
    c7_9b_2: { quem: "reina", texto: "Que pena. Eu gostava mais de você quando você não falava.", proxima: "c7_24" },

    c7_9c_1: { tipo: "narracao", texto: "Por meio segundo, a máscara perfeita da Reina racha. Ela pisca, como se tivesse levado um tapa sem ninguém encostar nela.", proxima: "c7_9c_2" },
    c7_9c_2: { quem: "reina", texto: "Você não sabe nada sobre mim.", proxima: "c7_9c_3" },
    c7_9c_3: { tipo: "narracao", texto: "Ela sai rápido demais para quem não se importa.", proxima: "c7_24" },

    // (todas as opções continuam aqui)
    c7_24: { tipo: "narracao", sprite: null, texto: "Do corredor, a SN ainda ouve a Reina atender o celular. A voz dela muda completamente: mais grave, mais fria, a voz de alguém acostumada a dar ordens.", proxima: "c7_25" },
    c7_25: { quem: "reina", rotulo: "Reina (ao telefone)", sprite: null, texto: "Eu disse só um recado. Ninguém encosta nele. ...Mudou como? Atrás do mercado, às cinco? Quem mudou o lugar?", proxima: "c7_26" },
    c7_26: { tipo: "narracao", texto: "Passos se afastando. Silêncio.", proxima: "c7_27" },
    c7_27: { tipo: "narracao", texto: "A SN fica completamente imóvel.", proxima: "c7_28" },
    c7_28: { tipo: "pensamento", texto: "Atrás do mercado?", proxima: "c7_29" },
    c7_29: { tipo: "pensamento", texto: "Não. Foi atrás do galpão. Todo mundo falou isso no corredor. Eu lembro. Eu acabei de lembrar.", proxima: "c7_30" },
    c7_30: { tipo: "pensamento", efeito: "eco", texto: "Isso não aconteceu assim da primeira vez.", proxima: "c7_31" },
    c7_31: { tipo: "pensamento", texto: "Da primeira vez. Eu pensei “da primeira vez”. Como se esta fosse a segunda.", proxima: "c7_32" },
    c7_32: { quem: "hana", sprite: "hana", texto: "SN? Você ficou pálida.", proxima: "c7_33" },
    c7_33: { tipo: "pensamento", texto: "Se for sonho, minha memória está errada. Se não for... eu mudei alguma coisa. Uma conversa, um caderno, um olhar. E agora o que eu lembro já não vale.", proxima: "c7_34" },
    c7_34: { tipo: "narracao", sprite: null, texto: "O relógio da parede marca 16h32.", proxima: "c8_01" },

    /* =================== CENA 8 — CINCO HORAS, ATRÁS DO MERCADO =================== */
    // Cenário: saída do colégio, 16h40. Céu alaranjado. Música: tema de tensão.
    c8_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Cena 8 — Cinco horas, atrás do mercado", texto: "A SN desce a escada correndo, com a mochila batendo nas costas. O mercado fica a dez minutos a pé.", proxima: "c8_02" },
    c8_02: { tipo: "pensamento", texto: "Eu não sei quantos vão estar lá. Não sei se o Takeo já está indo. Não sei nem se isso tudo é real.", proxima: "c8_03" },
    c8_03: { tipo: "pensamento", texto: "Se eu for sozinha e errar, pode não ter segunda chance. Ou pode ter. Eu não sei nem isso.", proxima: "c8_04" },
    c8_04: { tipo: "narracao", texto: "Ela para no pátio. Três pessoas que talvez ajudem. Ou ela pode ir sozinha.", proxima: "c8_esc10" },

    // ▶ ESCOLHA 10 — A ESCOLHA DE ROTA (define o fim do capítulo)
    // "sugerir" destaca a opção do personagem com mais afinidade; as quatro continuam disponíveis.
    c8_esc10: { sugerir: true, escolhas: [
      { texto: "A. Correr sozinha até o mercado para chegar antes do Takeo.", proxima: "rA_01", personagem: "takeo", pontos: { takeo: 3 }, flags: ["Rota_Takeo"] },
      { texto: "B. Voltar ao pátio dos fundos e contar tudo ao Kaito.", proxima: "rB_01", personagem: "kaito", pontos: { kaito: 3 }, flags: ["Rota_Kaito"] },
      { texto: "C. Procurar o Blake, que já sabia da briga.", proxima: "rC_01", personagem: "blake", pontos: { blake: 3 }, flags: ["Rota_Blake"] },
      { texto: "D. Bater na janela da sala de castigo, onde o Ryuji está preso até as cinco.", proxima: "rD_01", personagem: "ryuji", pontos: { ryuji: 3 }, flags: ["Rota_Ryuji"] }
    ]},

    /* ---------- Rota A — Takeo: "Eu fico" ---------- */
    rA_01: { tipo: "narracao", cenario: "beco-mercado", transicao: "tempo", legenda: "Rota Takeo — Eu fico", texto: "A SN chega ao beco atrás do mercado sem fôlego. Ela chegou tarde.", proxima: "rA_02" },
    rA_02: { tipo: "narracao", sprite: "takeo", texto: "Três garotos com jaquetas da gangue rival cercam o Takeo contra a parede. Atrás do Takeo, encolhido, está um menino do primeiro ano chorando.", proxima: "rA_03" },
    rA_03: { tipo: "pensamento", texto: "Ele está protegendo alguém. De novo. Sempre.", proxima: "rA_04" },
    rA_04: { tipo: "narracao", texto: "O Takeo está tremendo. Mas não sai da frente.", proxima: "rA_05" },
    rA_05: { quem: "takeo", texto: "Ele não tem nada a ver com isso. Se o problema é comigo, resolve comigo.", proxima: "rA_06" },
    rA_06: { quem: "bone", texto: "Com prazer.", proxima: "rA_07" },
    rA_07: { tipo: "narracao", texto: "Ele levanta um cano de ferro.", proxima: "rA_08" },
    rA_08: { tipo: "narracao", efeito: "tremor", texto: "A SN não pensa. Ela atravessa o beco e segura o cano no ar, a dois palmos do rosto do Takeo. O metal para como se tivesse batido numa parede.", proxima: "rA_09" },
    rA_09: { tipo: "narracao", texto: "Silêncio.", proxima: "rA_10" },
    rA_10: { quem: "eu", texto: "Você pode falar o que quiser de mim. Mas não encosta nele.", proxima: "rA_11" },
    rA_11: { tipo: "narracao", texto: "Ela torce o pulso só um pouco. O cano cai no chão. O garoto de boné recua, segurando a própria mão, sem entender.", proxima: "rA_12" },
    rA_12: { tipo: "narracao", texto: "Uma sirene toca longe. Os três fogem.", proxima: "rA_13" },
    rA_13: { tipo: "narracao", sprite: "takeo", texto: "O Takeo escorrega pela parede até sentar no chão. Ele olha para a SN como se ela tivesse caído do céu.", proxima: "rA_14" },
    rA_14: { quem: "takeo", texto: "Você... segurou aquilo.", proxima: "rA_15" },
    rA_15: { quem: "eu", texto: "Ele estava fraco.", proxima: "rA_16" },
    rA_16: { quem: "takeo", texto: "SN, ele bateu no Kaito com aquele cano mês passado.", proxima: "rA_17" },
    rA_17: { tipo: "narracao", texto: "Ela não responde. A palma da mão dela está sangrando, cortada pela borda do metal.", proxima: "rA_18" },
    rA_18: { tipo: "narracao", texto: "O Takeo percebe antes dela. Ele arranca o curativo da própria bochecha, olha para ele, desiste, rasga um pedaço da barra da camisa e enrola na mão dela com todo o cuidado do mundo.", proxima: "rA_19" },
    rA_19: { quem: "takeo", texto: "Você não devia ter vindo.", proxima: "rA_20" },
    rA_20: { quem: "eu", texto: "Você também não.", proxima: "rA_21" },
    rA_21: { quem: "takeo", texto: "Eu precisava. Ele ia apanhar sozinho.", proxima: "rA_22" },
    rA_22: { quem: "eu", texto: "Então eu também precisava.", proxima: "rA_23" },
    rA_23: { tipo: "narracao", texto: "Ele segura a mão enfaixada dela um segundo a mais do que deveria.", proxima: "rA_24" },
    rA_24: { quem: "takeo", texto: "...Eu não vou contar pra ninguém. Sobre o cano.", proxima: "rA_25" },
    rA_25: { tipo: "pensamento", flags: ["Takeo_sabe_da_forca"], texto: "O preço: o Takeo sabe do meu segredo. E pela primeira vez ele me olhou não como a garota que ele protege, mas como alguém que o protegeu.", proxima: "tr_01" },

    /* ---------- Rota B — Kaito: "Não é isso" ---------- */
    rB_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Rota Kaito — Não é isso", sprite: "kaito", texto: "A SN volta correndo para a arquibancada. O Kaito ainda está lá, jogando uma bola de tênis contra o muro.", proxima: "rB_02" },
    rB_02: { quem: "eu", texto: "O Takeo vai ser emboscado atrás do mercado. Às cinco.", proxima: "rB_03" },
    rB_03: { tipo: "narracao", texto: "A bola para na mão dele.", proxima: "rB_04" },
    rB_04: { quem: "kaito", texto: "E como você sabe disso?", proxima: "rB_05" },
    rB_05: { quem: "eu", texto: "Faz diferença? Se eu estiver mentindo, você perde dez minutos. Se eu estiver falando a verdade e você não for, você vai se arrepender pelo resto da vida.", proxima: "rB_06" },
    rB_06: { tipo: "narracao", texto: "O Kaito fica olhando para ela. Depois assobia. Em trinta segundos, cinco garotos de jaqueta estão de pé.", proxima: "rB_07" },
    rB_07: { quem: "kaito", texto: "Vamos. E você fica aqui.", proxima: "rB_08" },
    rB_08: { quem: "eu", texto: "Não.", proxima: "rB_09" },
    rB_09: { quem: "kaito", texto: "...Você é sempre teimosa assim?", proxima: "rB_10" },
    rB_10: { tipo: "narracao", cenario: "beco-mercado", sprite: "kaito", texto: "No beco, a briga dura menos de um minuto. O Kaito luta como fala: confiante, rápido, quase rindo. Mas um dos rivais vem por trás dele com um cano.", proxima: "rB_11" },
    rB_11: { tipo: "narracao", efeito: "tremor", texto: "A SN segura o pulso do garoto. Só segura. Ele grita e larga o cano.", proxima: "rB_12" },
    rB_12: { tipo: "narracao", texto: "O Kaito se vira e vê a mão pequena da SN fechada no pulso do rival, o garoto de joelhos.", proxima: "rB_13" },
    rB_13: { tipo: "narracao", efeito: "flashback", texto: "Por um segundo, os olhos dele ficam distantes. Um parquinho. Uma menina menor do que ele. O chão de areia nas costas dele.", proxima: "rB_14" },
    rB_14: { quem: "kaito", texto: "...Eu já vi isso antes.", proxima: "rB_15" },
    rB_15: { quem: "eu", texto: "Viu onde?", proxima: "rB_16" },
    rB_16: { quem: "kaito", texto: "Não sei. Mas eu vou descobrir.", proxima: "rB_17" },
    rB_17: { tipo: "narracao", texto: "Depois, o Takeo está inteiro, só assustado. O Kaito bagunça o cabelo dele e olha para a SN por cima do ombro.", proxima: "rB_18" },
    rB_18: { quem: "kaito", texto: "Você me deve uma explicação, SN.", proxima: "rB_19" },
    rB_19: { quem: "eu", texto: "Você me deve um obrigado.", proxima: "rB_20" },
    rB_20: { tipo: "narracao", texto: "Ele ri. Mas não nega.", proxima: "rB_21" },
    rB_21: { tipo: "pensamento", flags: ["Kaito_lembranca_parquinho", "Guerra_antecipada"], texto: "O preço: a gangue do Kaito entrou oficialmente na briga. Naquela época, a guerra entre as gangues começou meses depois. Agora começou hoje.", proxima: "tr_01" },

    /* ---------- Rota C — Blake: "Balde de água" ---------- */
    rC_01: { tipo: "narracao", cenario: "vestiario", transicao: "tempo", legenda: "Rota Blake — Balde de água", sprite: "blake", texto: "O Blake está sozinho no vestiário, guardando as coisas. A SN para na porta.", proxima: "rC_02" },
    rC_02: { quem: "eu", texto: "Você disse que hoje não era um bom dia. Atrás do mercado, às cinco. O Takeo vai estar lá.", proxima: "rC_03" },
    rC_03: { tipo: "narracao", texto: "O Blake fecha o armário devagar.", proxima: "rC_04" },
    rC_04: { quem: "blake", texto: "Era pra ser no galpão.", proxima: "rC_05" },
    rC_05: { quem: "eu", texto: "Mudaram.", proxima: "rC_06" },
    rC_06: { quem: "blake", texto: "E você sabe disso por quê?", proxima: "rC_07" },
    rC_07: { quem: "eu", texto: "Porque eu presto atenção. Igual a você.", proxima: "rC_08" },
    rC_08: { tipo: "narracao", texto: "Ele pensa por dois segundos. Depois pega a jaqueta.", proxima: "rC_09" },
    rC_09: { quem: "blake", texto: "Você vai ficar aqui.", proxima: "rC_10" },
    rC_10: { quem: "eu", texto: "Você sabe que eu não vou.", proxima: "rC_11" },
    rC_11: { quem: "blake", texto: "...É. Eu sabia.", proxima: "rC_12" },
    rC_12: { tipo: "narracao", cenario: "beco-mercado", sprite: "blake", texto: "No beco, o Blake não grita. Ele só entra, para entre o Takeo e os três rivais e fica parado. O tamanho dele faz o resto.", proxima: "rC_13" },
    rC_13: { quem: "blake", texto: "Vai embora. Agora. E eu esqueço que vi vocês.", proxima: "rC_14" },
    rC_14: { tipo: "narracao", texto: "Dois recuam. O terceiro hesita, e a briga quase acaba ali.", proxima: "rC_15" },
    rC_15: { tipo: "narracao", texto: "Quase.", proxima: "rC_16" },
    rC_16: { quem: "mio", efeito: "grito", texto: "BLAKE! SN! Eu vi vocês saindo, o que está acontecendo?!", proxima: "rC_17" },
    rC_17: { tipo: "narracao", efeito: "tremor", texto: "A Mio entra no beco correndo. O terceiro rival, assustado, empurra a primeira pessoa que aparece na frente dele. A Mio cai e rala o joelho e o cotovelo no asfalto.", proxima: "rC_18" },
    rC_18: { tipo: "narracao", sprite: "blake", texto: "O Blake fica em silêncio. Aquele silêncio. Dez segundos depois, o rival está sentado no lixo e os outros dois correram.", proxima: "rC_19" },
    rC_19: { tipo: "narracao", texto: "O Blake se ajoelha ao lado da Mio.", proxima: "rC_20" },
    rC_20: { quem: "mio", texto: "Tô bem, tô bem! Foi só um arranhão, para de fazer essa cara.", proxima: "rC_21" },
    rC_21: { tipo: "narracao", texto: "Ele não responde. Ele só tira a própria blusa, a mesma que ela lavou, e amarra no joelho dela. A Mio fica muda pela primeira vez na vida.", proxima: "rC_22" },
    rC_22: { tipo: "narracao", sprite: "blake", texto: "Depois ele olha para a SN.", proxima: "rC_23" },
    rC_23: { quem: "blake", texto: "A Mio entra em qualquer confusão atrás de quem ela gosta. Eu te disse.", proxima: "rC_24" },
    rC_24: { quem: "eu", texto: "Eu sei. Desculpa.", proxima: "rC_25" },
    rC_25: { quem: "blake", texto: "...Você fez certo em me chamar. Só não faz isso sozinha da próxima vez.", proxima: "rC_26" },
    rC_26: { tipo: "pensamento", flags: ["Mio_ferida", "Blake_confia"], texto: "O preço: o Takeo não se machucou. A Mio, sim. Eu salvei um e feri outra.", proxima: "tr_01" },

    /* ---------- Rota D — Ryuji: "Adrenalina" ---------- */
    rD_01: { tipo: "narracao", cenario: "sala-castigo", transicao: "tempo", legenda: "Rota Ryuji — Adrenalina", sprite: "ryuji", texto: "A SN bate na janela da sala de castigo, no térreo. O Ryuji está sozinho, com os pés em cima da mesa.", proxima: "rD_02" },
    rD_02: { tipo: "narracao", texto: "Ele abre a janela com um sorriso enorme.", proxima: "rD_03" },
    rD_03: { quem: "ryuji", texto: "Olha quem veio me visitar. Veio me mostrar mais adrenalina?", proxima: "rD_04" },
    rD_04: { quem: "eu", texto: "O Takeo vai ser emboscado atrás do mercado. Agora. Preciso de alguém que saiba brigar.", proxima: "rD_05" },
    rD_05: { tipo: "narracao", texto: "O sorriso some na hora.", proxima: "rD_06" },
    rD_06: { quem: "ryuji", texto: "E por que você veio atrás logo de mim?", proxima: "rD_07" },
    rD_07: { quem: "eu", texto: "Porque você já viu o que eu consigo fazer. Não vou ter que fingir.", proxima: "rD_08" },
    rD_08: { tipo: "narracao", texto: "Ele fica olhando para ela um segundo. Depois pula a janela, sem pensar duas vezes.", proxima: "rD_09" },
    rD_09: { quem: "ryuji", texto: "O coordenador vai me matar.", proxima: "rD_10" },
    rD_10: { quem: "eu", texto: "Você vai sobreviver.", proxima: "rD_11" },
    rD_11: { quem: "ryuji", texto: "Você fala isso com uma confiança assustadora, sabia?", proxima: "rD_12" },
    rD_12: { tipo: "narracao", cenario: "beco-mercado", sprite: "ryuji", texto: "No beco, o Ryuji entra rindo, como se fosse uma festa.", proxima: "rD_13" },
    rD_13: { quem: "ryuji", texto: "Três contra um magrelo? Que coisa feia. Deixa eu equilibrar isso.", proxima: "rD_14" },
    rD_14: { tipo: "narracao", efeito: "tremor", texto: "Ele derruba o primeiro. O segundo tenta acertá-lo por trás. A SN estica o pé, e o rival voa de cara numa pilha de caixas de papelão.", proxima: "rD_15" },
    rD_15: { quem: "ryuji", texto: "Isso foi você?", proxima: "rD_16" },
    rD_16: { quem: "eu", texto: "Ele tropeçou.", proxima: "rD_17" },
    rD_17: { quem: "ryuji", texto: "Claro. Adrenalina dele, né?", proxima: "rD_18" },
    rD_18: { tipo: "narracao", texto: "Quando acaba, o Takeo está inteiro. O Ryuji tem o lábio cortado e o maior sorriso do dia.", proxima: "rD_19" },
    rD_19: { quem: "ryuji", texto: "Sabe o que é engraçado? Você é a pessoa mais estranha desse colégio.", proxima: "rD_20" },
    rD_20: { quem: "eu", texto: "Isso é um elogio?", proxima: "rD_21" },
    rD_21: { quem: "ryuji", texto: "Não sei ainda.", proxima: "rD_22" },
    rD_22: { tipo: "narracao", cenario: "saida-colegio", sprite: "ryuji", texto: "No caminho de volta, o coordenador está esperando no portão, de braços cruzados.", proxima: "rD_23" },
    rD_23: { quem: "coordenador", texto: "Ryuji. Sala de castigo vazia, janela aberta. Três dias de suspensão.", proxima: "rD_24" },
    rD_24: { tipo: "narracao", texto: "O Ryuji dá de ombros e pisca para a SN.", proxima: "rD_25" },
    rD_25: { quem: "ryuji", texto: "Valeu a pena. Mas agora você me deve uma, princesa.", proxima: "rD_26" },
    rD_26: { tipo: "pensamento", flags: ["Ryuji_suspenso", "SN_deve_favor_Ryuji"], texto: "O preço: ele foi suspenso por minha causa. E ele não reclamou nem um pouco.", proxima: "tr_01" },

    /* =================== TRONCO COMUM — DEPOIS DA BRIGA =================== */
    // Seja qual for a rota, antes de fugir, o garoto de boné grita do fim do beco.
    tr_01: { quem: "bone", rotulo: "Garoto de boné (do fim do beco)", efeito: "grito", texto: "Diz pro Takeo que ele sabe o que fez! E não foi a Reina que mandou a gente, não!", proxima: "tr_02" },
    tr_02: { tipo: "narracao", sprite: "takeo", texto: "O Takeo fica pálido.", proxima: "tr_03" },
    tr_03: { tipo: "pensamento", texto: "Não foi a Reina? Então quem mudou o lugar da briga?", proxima: "tr_04" },
    tr_04: { tipo: "pensamento", texto: "E o que o Takeo fez?", proxima: "ep_01" },

    /* =================== EPÍLOGO — O QUE EU SEI =================== */
    // Cenário: quarto da SN aos 16, noite. Pôsteres antigos, abajur aceso. Música: piano do prólogo, mais leve.
    ep_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Epílogo — O que eu sei", sprite: null, texto: "O quarto dela está exatamente como era. Os pôsteres desbotados. A pilha de livros do lado da cama. A colcha de estrelinhas que ela jurava que tinha jogado fora.", proxima: "ep_02" },
    ep_02: { tipo: "narracao", texto: "Ela passa um bom tempo só parada na porta, sem coragem de entrar.", proxima: "ep_03" },
    ep_03: { tipo: "narracao", texto: "Depois senta na escrivaninha, abre o caderno azul e escreve no topo de uma página nova: O que eu sei.", proxima: "ep_04" },
    ep_04: { tipo: "narracao", texto: "1. O Takeo morre daqui a alguns anos, protegendo alguém.", proxima: "ep_05" },
    ep_05: { tipo: "narracao", texto: "2. Hoje ele deveria ter apanhado atrás do galpão.", proxima: "ep_06" },
    ep_06: { tipo: "narracao", texto: "3. Hoje ele não apanhou.", proxima: "ep_07" },
    ep_07: { tipo: "narracao", texto: "4. A briga mudou de lugar. Não foi a Reina.", proxima: "ep_08" },
    ep_08: { tipo: "narracao", texto: "5. A Mio gosta do Blake.", proxima: "ep_09" },
    ep_09: { tipo: "narracao", texto: "Ela para. Volta uma página, até a lista de manhã. O item quatro, riscado tantas vezes que quase rasgou o papel.", proxima: "ep_10" },
    ep_10: { tipo: "narracao", texto: "Com cuidado, ela escreve por cima dos riscos, bem devagar: Eu voltei.", proxima: "ep_11" },
    ep_11: { tipo: "pensamento", texto: "Eu ainda não acredito. Mas eu não consigo mais fingir que não.", proxima: "ep_12" },
    ep_12: { tipo: "narracao", texto: "Ela volta para a página nova e tenta escrever a data em que o Takeo morreu.", proxima: "ep_13" },
    ep_13: { tipo: "narracao", texto: "A caneta fica parada no ar.", proxima: "ep_14" },
    ep_14: { tipo: "pensamento", efeito: "eco", texto: "Era inverno. Eu tenho certeza que era inverno. Ou era...?", proxima: "ep_15" },
    ep_15: { tipo: "narracao", texto: "A lembrança, que ontem era nítida como uma foto, agora parece um sonho que vai sumindo quanto mais ela tenta segurar.", proxima: "ep_16" },
    ep_16: { tipo: "pensamento", texto: "Quanto mais eu mudo, menos eu lembro. É esse o preço?", proxima: "ep_17" },
    ep_17: { tipo: "narracao", texto: "O celular vibra em cima da cama.", proxima: "ep_esc11" },

    // ▶ ESCOLHA 11 — A mensagem da noite (depende da rota escolhida na Escolha 10)
    ep_esc11: { caminhos: [
      { flag: "Rota_Takeo", proxima: "ep_11takeo" },
      { flag: "Rota_Kaito", proxima: "ep_11kaito" },
      { flag: "Rota_Blake", proxima: "ep_11blake" },
      { flag: "Rota_Ryuji", proxima: "ep_11ryuji" }
    ], proxima: "ep_11takeo" },

    ep_11takeo: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Sua mão está doendo? Eu não consigo dormir pensando nisso.", escolhas: [
      { texto: "A. “Está melhor. Obrigada por cuidar de mim.”", proxima: "ep_18", pontos: { takeo: 2 } },
      { texto: "B. “Dorme, Takeo. Eu estou bem.”", proxima: "ep_18", pontos: { takeo: 1 } }
    ]},
    ep_11kaito: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Ainda estou esperando aquela explicação.", escolhas: [
      { texto: "A. “E eu ainda estou esperando o obrigado.”", proxima: "ep_18", pontos: { kaito: 2 } },
      { texto: "B. “Amanhã. Talvez.”", proxima: "ep_18", pontos: { kaito: 1 } }
    ]},
    ep_11blake: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "A Mio está bem. Levei ela em casa. Você também chegou bem?", escolhas: [
      { texto: "A. “Cheguei. Obrigada por cuidar dela.”", proxima: "ep_18", pontos: { blake: 2, mio: 1 } },
      { texto: "B. “Cheguei. Desculpa por hoje.”", proxima: "ep_18", pontos: { blake: 1 } }
    ]},
    ep_11ryuji: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Três dias sem escola. Você vai me visitar ou vai fingir que não me deve nada?", escolhas: [
      { texto: "A. “Vou levar a lição. Toda ela.”", proxima: "ep_18", pontos: { ryuji: 2 } },
      { texto: "B. “Eu não te devo nada.”", proxima: "ep_18", pontos: { ryuji: 1 } }
    ]},

    ep_18: { tipo: "narracao", texto: "Logo depois, uma segunda mensagem chega. Número desconhecido.", proxima: "ep_19" },
    ep_19: { quem: "mensagem", rotulo: "Número desconhecido", efeito: "eco", texto: "Quem te contou sobre o mercado?", proxima: "ep_20" },
    ep_20: { tipo: "narracao", texto: "A SN fica olhando para a tela até ela apagar. Do mesmo jeito que fez aos 28 anos.", proxima: "ep_21" },
    ep_21: { tipo: "pensamento", texto: "Alguém mudou o lugar da briga. E agora esse alguém sabe que eu estava lá.", proxima: "ep_22" },
    ep_22: { tipo: "narracao", texto: "Ela apaga o abajur e deita, mas não fecha os olhos.", proxima: "ep_23" },
    ep_23: { tipo: "pensamento", texto: "E se eu dormir e acordar no chão do apartamento, no meio das caixas?", proxima: "ep_24" },
    ep_24: { tipo: "pensamento", texto: "E se eu dormir e acordar aqui de novo?", proxima: "ep_25" },
    ep_25: { tipo: "pensamento", texto: "Eu não sei qual das duas coisas me dá mais medo.", proxima: "ep_26" },
    ep_26: { tipo: "narracao", texto: "Ela fica acordada até as três da manhã, com o caderno azul em cima do peito, ouvindo a casa dormir.", proxima: "ep_27" },
    ep_27: { tipo: "pensamento", texto: "Pela primeira vez em doze anos, eu não sei o que vai acontecer amanhã.", proxima: "ep_fim" },

    // Fim do Capítulo 1 (a tela de fim mostra o gancho do capítulo 2, definido em dados/capitulos.js)
    ep_fim: { fim: "capitulo1" }
  }
});

/*
 * GANCHO PARA O CAPÍTULO 2 (anotações do roteiro)
 *  • A SN acorda aos 16 de novo? (Ela ainda não tem certeza de que isso é real.)
 *  • Quem mudou o lugar da briga, e quem mandou a mensagem?
 *  • O que o Takeo "fez" para a gangue rival querer pegá-lo?
 *  • O que o Takeo queria contar na mensagem de voz do futuro?
 *  • A Reina sabe que o próprio grupo agiu pelas costas dela?
 *  • Sexta-feira: karaokê com a Hana [Karaoke_sexta].
 *
 * ESCOLHAS DO CAPÍTULO (11)
 *  1 Mio (acordar) · 2 Professora (aula) · 3 Takeo · 4 Ryuji · 5 Kaito · 6 Blake
 *  7 Mio (escada) · 8 Hana · 9 Reina · 10 Rota · 11 Mensagem da noite
 *
 * FLAGS GUARDADAS (ficam no save; use no capítulo 2 com  caminhos: [{ flag: "...", proxima: "..." }])
 *  Mio_desconfiada (1C, 2C ou 7C) · Takeo_intrigado (3B) · Ryuji_viu_a_forca (cena 4)
 *  SN_notou_Mio_e_Blake (cena 5) · Kaito_familiaridade (cena 5) · Blake_desconfiado (6B)
 *  Promessa_Mio (7A) · Hana_suspeita (8A) · Karaoke_sexta (cena 7)
 *  Reina_curiosa / Reina_rivalidade_forte / Reina_desarmada (9) · Takeo_sabe_da_forca (rota A)
 *  Kaito_lembranca_parquinho / Guerra_antecipada (rota B) · Mio_ferida / Blake_confia (rota C)
 *  Ryuji_suspenso / SN_deve_favor_Ryuji (rota D) · Rota_Takeo / Rota_Kaito / Rota_Blake / Rota_Ryuji
 */