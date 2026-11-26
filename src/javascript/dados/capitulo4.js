/*
 * =====================================================================
 *  CAPÍTULO 4 — Dois dias até segunda
 *  Sábado e domingo depois do Capítulo 3, e a manhã de segunda-feira.
 *  Mesmo formato dos capítulos anteriores: cada linha é uma cena.
 * =====================================================================
 *
 *  PERSONAGENS SEM FICHA NO JOGO (falam com quem: "desconhecido" + rotulo)
 *    Mãe, Jin, Sayuri, Tio do Kaito, Momo (irmã do Ryuji, 8 anos),
 *    Avó do Takeo, Noah e Theo (irmãos gêmeos do Blake, 6 anos).
 *    Quando criar esses personagens em dados/personagens.js, troque o quem.
 *
 *  CENÁRIOS (todos já existem; troque se criar fundos próprios)
 *    Cozinha da casa da SN → "quarto-sn"
 *    Lojinha de lámen do tio do Kaito → "clube-leitura"
 *    Biblioteca do bairro (encontro com o Takeo) → "clube-leitura"
 *    Ginásio velho (encontro com o Kaito) → "vestiario"
 *    Pracinha (encontro com o Blake) → "saida-colegio"
 *    Auditório da escola primária (encontro com o Ryuji) → "sala-de-aula"
 *
 *  FLAGS DOS CAPÍTULOS ANTERIORES USADAS AQUI (com caminhos)
 *    SN_costela_machucada, Ameacou_Jin, Alianca_Reina, Mentiu_Reina,
 *    Mio_magoada_Blake, SN_empurrou_Blake_Mio, Hana_suspeita,
 *    Amigas_sabem_bullying, Revanche_marcada, Estudar_com_Takeo.
 *
 *  Título, capa e gancho ficam em dados/capitulos.js: crie a entrada "capitulo4".
 */
Roteiro.registrar("capitulo4", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — O QUE A MÃE SABE =================== */
    // Cenário: cozinha da casa da SN, sábado de manhã (usa "quarto-sn"). Música: piano leve.
    c1_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Cena 1 — O que a mãe sabe", sprite: null, texto: "Sábado. A SN acorda às nove, depois de dormir quatro horas mal dormidas. Antes de abrir os olhos, ela já sabe onde está. As estrelinhas da colcha. O cheiro de café vindo lá de baixo.", proxima: "c1_02" },
    c1_02: { tipo: "pensamento", texto: "Ainda aqui. Terceiro dia.", proxima: "c1_03" },
    c1_03: { tipo: "pensamento", texto: "Engraçado. Ontem eu tinha medo de acordar aos vinte e oito. Hoje eu tenho medo de não acordar aqui.", proxima: "c1_04" },
    c1_04: { tipo: "narracao", cenario: "cozinha", sprite: "mae", texto: "Na cozinha, a mãe está de folga. Ainda de pijama, cabelo preso num coque torto, lendo o jornal com uma xícara na mão. Ela não levanta os olhos quando a SN entra.", proxima: "c1_05" },
    c1_05: { quem: "mae", texto: "Senta.", proxima: "c1_06" },
    c1_06: { tipo: "narracao", texto: "A SN conhece esse tom. É o mesmo tom que a avó usava. É o tom de “a gente precisa conversar”.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", texto: "Ela senta. A mãe dobra o jornal devagar e coloca em cima da mesa. Na primeira página, uma foto pequena: um portão de ferro arrancado das dobradiças, caído no mato atrás de uma escola.", proxima: "c1_08" },
    c1_08: { quem: "mae", texto: "“Vandalismo em terreno abandonado.” Eles acham que foi com um carro.", proxima: "c1_09" },
    c1_09: { quem: "mae", texto: "Eu sei que não foi com um carro.", proxima: "c1_cam1" },

    c1_cam1: { caminhos: [
      { flag: "SN_costela_machucada", proxima: "c1_m_costela" }
    ], proxima: "c1_10" },
    c1_m_costela: { tipo: "narracao", texto: "A mãe estende a mão e encosta dois dedos, de leve, nas costelas da SN, por cima da camiseta. A SN não consegue esconder a careta.", proxima: "c1_m_costela2" },
    c1_m_costela2: { quem: "mae", texto: "Você andou meio torta ontem à noite. Enfermeira, lembra? Eu percebo essas coisas.", proxima: "c1_10" },

    c1_10: { quem: "mae", texto: "Eu não vou gritar. Eu também tive dezesseis anos. Eu também já quebrei coisas sem querer.", proxima: "c1_11" },
    c1_11: { quem: "mae", texto: "Mas um portão, filha? Na frente dos outros?", proxima: "c1_12" },
    c1_12: { tipo: "pensamento", texto: "Aos dezesseis, eu teria inventado uma mentira. Aos vinte e oito, eu já sei que ela sempre percebe.", proxima: "c1_13" },
    c1_13: { tipo: "pensamento", texto: "E eu sei outra coisa. Que daqui a alguns anos ela vai ficar doente, e eu vou estar longe, e a gente vai conversar só por telefone, sobre nada.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — O quanto contar para a mãe?
    c1_esc1: { escolhas: [
      { texto: "A. Contar a verdade sobre o portão: “Eu usei a força pra proteger um amigo.”", proxima: "c1_1a_1", pontos: { desvio: 1 }, flags: ["Mae_sabe_portao"] },
      { texto: "B. Contar sobre o Jin e a ameaça. Tudo.", proxima: "c1_1b_1", pontos: { desvio: 2 }, flags: ["Mae_sabe_Jin"] },
      { texto: "C. “Não fui eu.” E sustentar a mentira.", proxima: "c1_1c_1", flags: ["Mentiu_Mae"] }
    ]},
    c1_1a_1: { tipo: "narracao", texto: "A mãe fica um tempo em silêncio. Depois concorda com a cabeça, devagar.", proxima: "c1_1a_2" },
    c1_1a_2: { quem: "mae", texto: "Pra proteger. Então você seguiu a regra.", proxima: "c1_1a_3" },
    c1_1a_3: { quem: "mae", texto: "Só que a regra tem uma segunda parte que a sua avó nunca te contou. Ela achava que você era nova demais.", proxima: "c1_14" },

    c1_1b_1: { tipo: "narracao", texto: "A SN conta. O Takeo. A foto. O beco. O canivete. O homem de casaco preto que sabe a que horas a mãe dela faz ovos.", proxima: "c1_1b_2" },
    c1_1b_2: { tipo: "narracao", texto: "A mãe não interrompe nem uma vez. Mas, quando a SN fala da janela da cozinha, a xícara na mão dela racha. Uma rachadura fina, de cima a baixo. Sem barulho.", proxima: "c1_1b_3" },
    c1_1b_3: { quem: "mae", texto: "Ele falou da cozinha.", proxima: "c1_1b_4" },
    c1_1b_4: { quem: "eu", texto: "Falou.", proxima: "c1_1b_5" },
    c1_1b_5: { tipo: "narracao", texto: "A mãe coloca a xícara rachada na mesa com muito cuidado. A voz dela continua calma. Mas é uma calma que a SN reconhece, porque é a mesma dela.", proxima: "c1_1b_6" },
    c1_1b_6: { quem: "mae", texto: "Tá. A gente vai resolver isso. Juntas. E, a partir de hoje, você não sai à noite sem me avisar onde está. Isso não é bronca. É acordo.", proxima: "c1_1b_7" },
    c1_1b_7: { quem: "mae", texto: "E tem uma coisa que você precisa saber. Que a sua avó nunca te contou.", proxima: "c1_14" },

    c1_1c_1: { tipo: "narracao", texto: "A mãe olha para ela por um tempo longo. Depois abre o jornal de novo.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "mae", texto: "Tá. Não foi você.", proxima: "c1_1c_3" },
    c1_1c_3: { tipo: "pensamento", texto: "Ela não acreditou. Ela só decidiu não brigar. Isso dói mais.", proxima: "c1_1c_4" },
    c1_1c_4: { quem: "mae", texto: "Só uma coisa. Que a sua avó nunca te contou. E que você vai precisar saber, seja lá o que você não fez.", proxima: "c1_14" },

    // (todas as opções continuam aqui)
    c1_14: { tipo: "narracao", texto: "A mãe se levanta, abre a geladeira e, sem esforço nenhum, levanta a geladeira inteira com uma mão só, alguns centímetros do chão. Embaixo, grudado no piso, um envelope de papel pardo, amarelado de velho.", proxima: "c1_15" },
    c1_15: { quem: "eu", texto: "...Esse tempo todo tinha um envelope embaixo da geladeira?", proxima: "c1_16" },
    c1_16: { quem: "mae", texto: "Lugar mais seguro da casa. Ninguém levanta geladeira.", proxima: "c1_17" },
    c1_17: { tipo: "narracao", texto: "Ela coloca a geladeira de volta no lugar, sem barulho, e entrega o envelope. Dentro, uma folha dobrada, escrita com a letra apertada da avó.", proxima: "c1_18" },
    c1_18: { tipo: "narracao", texto: "“Nossa força não existe para ferir. Existe para proteger. Mas lembre: a força protege o corpo. Não protege o coração. Para o coração, você vai precisar de gente.”", proxima: "c1_19" },
    c1_19: { quem: "mae", texto: "Sua avó achava que a nossa família tinha um defeito. A gente é tão forte que acha que precisa carregar tudo sozinha.", proxima: "c1_20" },
    c1_20: { quem: "mae", texto: "Ela carregou. Eu carreguei. E eu vejo você tentando carregar agora. Com essa cara de quem fez uma conta e deu errado.", proxima: "c1_21" },
    c1_21: { tipo: "pensamento", texto: "O Blake falou a mesma coisa. A mesma frase.", proxima: "c1_22" },
    c1_22: { quem: "mae", texto: "Você tem amigos agora, não tem? Eu ouvi você rindo no telefone ontem. Fazia anos que eu não ouvia isso.", proxima: "c1_23" },
    c1_23: { quem: "mae", texto: "Deixa eles te ajudarem.", proxima: "c1_24" },
    c1_24: { tipo: "narracao", texto: "A SN dobra a carta da avó e guarda no bolso. Depois, sem pensar, abraça a mãe. Forte. Do jeito que só as mulheres da família conseguem abraçar sem machucar.", proxima: "c1_25" },
    c1_25: { tipo: "pensamento", texto: "Da primeira vez, eu nunca tive essa conversa. Eu nunca perguntei nada. Ela nunca contou.", proxima: "c1_26" },
    c1_26: { tipo: "pensamento", texto: "Quanta coisa a gente perde por achar que tem tempo.", proxima: "c2_01" },

    /* =================== CENA 2 — A REUNIÃO =================== */
    // Cenário: lojinha de lámen do tio do Kaito, fechada para o público (usa "clube-leitura"). Música: tema da gangue, baixo.
    c2_01: { tipo: "narracao", cenario: "loja-lamen", transicao: "tempo", legenda: "Cena 2 — A reunião", sprite: null, texto: "À tarde, uma mensagem do Kaito chega no celular de todo mundo ao mesmo tempo. Só um endereço e uma hora. A lojinha de lámen do tio dele, que fecha aos sábados.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", texto: "A lojinha é minúscula. Seis banquinhos no balcão, duas mesas, um gato gordo e laranja dormindo em cima da caixa registradora. Cheira a caldo de porco e incenso.", proxima: "c2_03" },
    c2_03: { tipo: "narracao", sprite: "kaito", texto: "O Kaito está atrás do balcão, de avental, mexendo uma panela enorme. É tão estranho de ver que a SN para na porta.", proxima: "c2_04" },
    c2_04: { quem: "kaito", texto: "Não fala nada. Meu tio me obriga. Senta.", proxima: "c2_05" },
    c2_05: { quem: "tio_kaito", rotulo: "Tio do Kaito (lá dos fundos)", sprite: null, texto: "E sorri pros clientes, Kaito!", proxima: "c2_06" },
    c2_06: { quem: "kaito", texto: "ELES NÃO SÃO CLIENTES, TIO!", proxima: "c2_07" },
    c2_07: { tipo: "narracao", texto: "Aos poucos, todo mundo chega. O Blake, que ocupa duas cadeiras sozinho. O Takeo, com um curativo novo. O Ryuji, que entra sem bater e já pega uma tigela. A Mio e a Hana, juntas.", proxima: "c2_08" },
    c2_08: { tipo: "narracao", texto: "A Mio senta o mais longe possível do Blake. O Blake percebe. Os dois fingem que não perceberam que o outro percebeu.", proxima: "c2_09" },
    c2_09: { tipo: "narracao", texto: "O Kaito serve sete tigelas de lámen, tira o avental e se encosta no balcão. O sorriso some.", proxima: "c2_10" },
    c2_10: { quem: "kaito", texto: "Tá. Ontem à noite, um cara chamado Jin encurralou a SN num beco com um dos Oda e um canivete. Eu quero saber tudo. Agora. De todo mundo.", proxima: "c2_11" },
    c2_11: { tipo: "narracao", texto: "Silêncio. Só o gato ronronando e o caldo borbulhando na panela.", proxima: "c2_12" },
    c2_12: { tipo: "narracao", sprite: "takeo", texto: "O Takeo é o primeiro a falar. Ele conta da foto. Do estacionamento. Do envelope. Da Akane. Com a voz cada vez mais baixa.", proxima: "c2_13" },
    c2_13: { quem: "takeo", texto: "É tudo culpa minha. Se eu não tivesse tirado aquela foto, ninguém tinha se machucado. A Mio, o joelho. O Ryuji, o olho. A SN...", proxima: "c2_14" },
    c2_14: { quem: "ryuji", sprite: "ryuji", texto: "Magrelo, se você falar “culpa minha” mais uma vez, eu jogo esse lámen na sua cabeça.", proxima: "c2_15" },
    c2_15: { quem: "kaito", sprite: "kaito", texto: "Ryuji.", proxima: "c2_16" },
    c2_16: { quem: "ryuji", sprite: "ryuji", texto: "Que foi? Alguém tem que falar. Você ia fazer um discurso de líder. Eu poupei todo mundo.", proxima: "c2_17" },
    c2_17: { quem: "kaito", sprite: "kaito", texto: "Eu ia falar uma coisa importante.", proxima: "c2_18" },
    c2_18: { quem: "ryuji", sprite: "ryuji", texto: "Você ia falar “ninguém vai a lugar nenhum sozinho até isso acabar”. Eu te conheço. Você fala isso desde o sexto ano.", proxima: "c2_19" },
    c2_19: { tipo: "narracao", texto: "O Kaito fecha a boca. Abre. Fecha de novo. O Blake esconde um sorriso atrás da tigela.", proxima: "c2_20" },
    c2_20: { quem: "kaito", sprite: "kaito", texto: "...Ninguém vai a lugar nenhum sozinho até isso acabar.", proxima: "c2_21" },
    c2_21: { quem: "ryuji", sprite: "ryuji", texto: "Viu?", proxima: "c2_22" },
    c2_22: { tipo: "narracao", sprite: "blake", texto: "O Blake coloca os hashis na mesa. Quando ele fala, todo mundo para.", proxima: "c2_23" },
    c2_23: { quem: "blake", texto: "O Jin não é de escola. Ele é de fora. E ele sabe coisas que ninguém devia saber. A SN sabe coisas que ninguém devia saber também.", proxima: "c2_24" },
    c2_24: { tipo: "narracao", texto: "Todos olham para ela. Sete pares de olhos. Até o gato.", proxima: "c2_25" },
    c2_25: { quem: "blake", texto: "Eu não estou acusando. Eu só acho que, se a gente vai enfrentar isso junto, a gente precisa saber o que você sabe.", proxima: "c2_26" },
    c2_26: { tipo: "pensamento", texto: "“Para o coração, você vai precisar de gente.”", proxima: "c2_27" },
    c2_27: { tipo: "pensamento", texto: "Mas como eu conto pra eles que eu sei porque eu já vivi isso? Que um deles morre?", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — O que contar para o grupo?
    c2_esc2: { escolhas: [
      { texto: "A. Contar tudo o que sabe do Jin e do beco, mas esconder a viagem no tempo.", proxima: "c2_2a_1", pontos: { kaito: 1, blake: 1 }, flags: ["Grupo_sabe_Jin"] },
      { texto: "B. “Eu tenho pressentimentos. Às vezes eu sei o que vai acontecer. Não me perguntem como.”", proxima: "c2_2b_1", pontos: { blake: 2, desvio: 2 }, flags: ["Grupo_sabe_pressentimento"] },
      { texto: "C. Mostrar a força. Levantar o balcão inteiro, com a panela em cima, sem derramar uma gota.", proxima: "c2_2c_1", pontos: { kaito: 1, ryuji: 2, desvio: 2 }, flags: ["Grupo_viu_forca"] }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "A SN conta do beco. Das palavras exatas do Jin. Do cartão branco. Da janela da cozinha. Do prazo. Ela não conta como sabia do mercado.", proxima: "c2_2a_2" },
    c2_2a_2: { tipo: "narracao", texto: "O Blake percebe que tem um buraco na história. Ela vê nos olhos dele. Mas ele não pergunta. Só concorda com a cabeça.", proxima: "c2_2a_3" },
    c2_2a_3: { quem: "blake", texto: "Já é muito. Obrigado.", proxima: "c2_28" },

    c2_2b_1: { tipo: "narracao", texto: "Silêncio total. O Ryuji para de comer no meio de um fio de macarrão.", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "ryuji", sprite: "ryuji", texto: "Tipo... vidente?", proxima: "c2_2b_3" },
    c2_2b_3: { quem: "eu", texto: "Tipo alguém que presta muita atenção e às vezes acerta.", proxima: "c2_2b_4" },
    c2_2b_4: { quem: "mio", sprite: "mio", texto: "Ela sempre foi assim. Desde pequena. Ela sabia que ia chover antes de todo mundo.", proxima: "c2_2b_5" },
    c2_2b_5: { tipo: "pensamento", texto: "Isso é mentira. Ela está me defendendo.", proxima: "c2_2b_6" },
    c2_2b_6: { quem: "blake", sprite: "blake", texto: "Eu já acreditei nisso ontem. Continuo acreditando.", proxima: "c2_28" },

    c2_2c_1: { tipo: "narracao", texto: "A SN se levanta, segura a borda do balcão de madeira maciça com as duas mãos e levanta. O balcão inteiro. A panela de caldo em cima. As sete tigelas. O gato.", proxima: "c2_2c_2" },
    c2_2c_2: { tipo: "narracao", texto: "O gato abre um olho, olha para ela com desprezo e volta a dormir.", proxima: "c2_2c_3" },
    c2_2c_3: { tipo: "narracao", texto: "Ela coloca o balcão de volta. Sem barulho. Nenhuma gota de caldo no chão.", proxima: "c2_2c_4" },
    c2_2c_4: { quem: "ryuji", sprite: "ryuji", texto: "EU FALEI! EU FALEI QUE ADRENALINA NÃO FAZ ISSO!", proxima: "c2_2c_5" },
    c2_2c_5: { quem: "kaito", sprite: "kaito", texto: "É por isso que eu perdi no parquinho. Eu não estou mais com vergonha. Eu estou com medo.", proxima: "c2_2c_6" },
    c2_2c_6: { quem: "eu", texto: "Ninguém pode saber. Nunca. É um segredo de família. Eu estou confiando em vocês.", proxima: "c2_28" },

    // (todas as opções continuam aqui)
    c2_28: { tipo: "narracao", sprite: "hana", texto: "A Hana, que não disse uma palavra até agora, tira um caderno da bolsa. Um caderno pequeno, cheio de anotações e gatinhos.", proxima: "c2_29" },
    c2_29: { quem: "hana", texto: "Eu fiz uma lista ontem. De tudo que a gente sabe do Jin. O carro, o anel, o sotaque. O barro vermelho no sapato, que a SN viu.", proxima: "c2_30" },
    c2_30: { quem: "hana", texto: "Barro vermelho só tem perto da olaria velha, do outro lado do rio. Perto do Colégio Técnico. Onde estudam os Oda.", proxima: "c2_31" },
    c2_31: { tipo: "narracao", texto: "Todo mundo olha para a Hana como quem vê um fantasma. A Hana fica vermelha e esconde o rosto atrás do caderno.", proxima: "c2_32" },
    c2_32: { quem: "kaito", sprite: "kaito", texto: "...Hana. Você quer entrar pra gangue?", proxima: "c2_33" },
    c2_33: { quem: "hana", sprite: "hana", texto: "Não. Obrigada. Eu tenho clube de leitura.", proxima: "c2_34" },
    c2_34: { tipo: "narracao", sprite: null, texto: "Pela primeira vez desde o beco, todo mundo ri. Até o Takeo. Até o tio do Kaito, lá dos fundos.", proxima: "c2_35" },
    c2_35: { tipo: "narracao", texto: "O plano é simples, e o Kaito escreve num guardanapo: ninguém sozinho até segunda. A SN nunca volta para casa sem alguém. Segunda de manhã, todos se encontram no portão.", proxima: "c2_36" },
    c2_36: { tipo: "narracao", texto: "Quando a reunião acaba e todos começam a se levantar, quatro vozes falam quase ao mesmo tempo.", proxima: "c2_37" },
    c2_37: { quem: "takeo", sprite: "takeo", texto: "SN, eu posso te levar em casa? Ou... a gente podia estudar física na biblioteca? Se você quiser. Já que é sábado.", proxima: "c2_38" },
    c2_38: { quem: "kaito", sprite: "kaito", texto: "Ela vem comigo. A gente tem uma revanche pra treinar.", proxima: "c2_39" },
    c2_39: { quem: "blake", sprite: "blake", texto: "Eu preciso levar meus irmãos na praça. Ela pode vir. É seguro. Tem muita gente.", proxima: "c2_40" },
    c2_40: { quem: "ryuji", sprite: "ryuji", texto: "Que pena, rapazes. A princesa vai comigo. Minha irmã tem apresentação de balé hoje e eu preciso de alguém pra me impedir de chorar em público.", proxima: "c2_41" },
    c2_41: { tipo: "narracao", sprite: null, texto: "Os quatro se olham. Depois olham para ela. A Mio cobre a boca com as duas mãos, com os olhos brilhando. A Hana anota alguma coisa no caderno.", proxima: "c2_42" },
    c2_42: { tipo: "pensamento", texto: "Aos dezesseis, eu passei três anos sem ninguém me chamar pra nada.", proxima: "c2_43" },
    c2_43: { tipo: "pensamento", texto: "Agora são quatro. Ao mesmo tempo. Numa lojinha de lámen.", proxima: "c2_44" },
    c2_44: { tipo: "pensamento", texto: "Regra número 5. Viver. Ninguém falou que viver seria fácil assim.", proxima: "c2_esc3" },

    // ▶ ESCOLHA 3 — Com quem passar a tarde de sábado? (encontro)
    c2_esc3: { sugerir: true, escolhas: [
      { texto: "A. Estudar física com o Takeo na biblioteca do bairro.", proxima: "e_t_01", personagem: "takeo", pontos: { takeo: 3 }, flags: ["Encontro_Takeo"] },
      { texto: "B. Treinar a revanche com o Kaito no ginásio velho.", proxima: "e_k_01", personagem: "kaito", pontos: { kaito: 3 }, flags: ["Encontro_Kaito"] },
      { texto: "C. Ir à praça com o Blake e os irmãos dele.", proxima: "e_b_01", personagem: "blake", pontos: { blake: 3 }, flags: ["Encontro_Blake"] },
      { texto: "D. Ir ao balé da irmã do Ryuji.", proxima: "e_r_01", personagem: "ryuji", pontos: { ryuji: 3 }, flags: ["Encontro_Ryuji"] }
    ]},

    /* =================== ENCONTRO — TAKEO: A BIBLIOTECA =================== */
    // Cenário: biblioteca do bairro (usa "clube-leitura"). Música: violão suave.
    e_t_01: { tipo: "narracao", cenario: "clube-leitura", transicao: "tempo", legenda: "Sábado à tarde — A biblioteca", sprite: "takeo", texto: "A biblioteca do bairro é velha, silenciosa e quase vazia. Só a bibliotecária cochilando e um senhor lendo jornal. O Takeo escolhe a mesa do canto, perto da janela.", proxima: "e_t_02" },
    e_t_02: { tipo: "narracao", texto: "Ele abre o livro de física, o caderno, o estojo, uma régua, um transferidor, uma calculadora e um pacote de biscoitos. Arruma tudo em fila. Depois arruma de novo.", proxima: "e_t_03" },
    e_t_03: { quem: "eu", texto: "Takeo. Você está nervoso.", proxima: "e_t_04" },
    e_t_04: { quem: "takeo", texto: "Eu? Não. Por que eu estaria nervoso? É só física. Com você. Num sábado. Sozinhos.", proxima: "e_t_05" },
    e_t_05: { quem: "takeo", texto: "...Tá, eu estou nervoso.", proxima: "e_t_06" },
    e_t_06: { tipo: "narracao", texto: "Eles estudam. Ou tentam. O Takeo entende a polia em dez minutos, mas finge que não entendeu por mais vinte, só para ela explicar de novo. Ela percebe. Não fala nada.", proxima: "e_t_07" },
    e_t_07: { tipo: "narracao", texto: "Lá pelas tantas, ele para de escrever e fica olhando pela janela. Lá fora, uma senhora passa empurrando um carrinho de feira.", proxima: "e_t_08" },
    e_t_08: { quem: "takeo", texto: "Minha avó vai fazer oitenta anos mês que vem. Ela cuida de mim desde que eu tinha cinco. Meus pais... foram embora pra trabalhar fora e nunca mais voltaram.", proxima: "e_t_09" },
    e_t_09: { quem: "takeo", texto: "Às vezes eu penso que, se acontecer alguma coisa comigo, ela fica sozinha. E aí eu fico com tanto medo que não consigo dormir.", proxima: "e_t_10" },
    e_t_10: { tipo: "pensamento", texto: "A avó dele. Eu nem lembrava que ele morava com a avó.", proxima: "e_t_11" },
    e_t_11: { tipo: "pensamento", texto: "No enterro, tinha uma senhora pequenininha, de cabelo branco, sentada na primeira fila. Ela não chorou. Ela só segurava uma jaqueta grande demais no colo.", proxima: "e_t_12" },
    e_t_12: { tipo: "narracao", texto: "A SN sente o peito fechar. Ela olha para a janela também, para não ter que olhar para ele.", proxima: "e_t_esc" },
    e_t_esc: { escolhas: [
      { texto: "A. Segurar a mão dele em cima da mesa: “Não vai acontecer nada com você. Eu não vou deixar.”", proxima: "e_t_a1", pontos: { takeo: 3 }, flags: ["Takeo_mao_biblioteca"] },
      { texto: "B. “Me leva pra conhecer sua avó. Quero dar parabéns pessoalmente, mês que vem.”", proxima: "e_t_b1", pontos: { takeo: 2 }, flags: ["Aniversario_avo_Takeo"] },
      { texto: "C. “E se você saísse da gangue? Por ela?”", proxima: "e_t_c1", pontos: { takeo: 1, desvio: 1 }, flags: ["Pediu_Takeo_sair"] }
    ]},
    e_t_a1: { tipo: "narracao", texto: "O Takeo olha para a mão dela em cima da dele. Fica muito tempo olhando. Depois vira a mão, devagar, para os dedos se encaixarem.", proxima: "e_t_a2" },
    e_t_a2: { quem: "takeo", texto: "Você fala isso como se pudesse impedir.", proxima: "e_t_a3" },
    e_t_a3: { quem: "eu", texto: "Eu posso.", proxima: "e_t_a4" },
    e_t_a4: { quem: "takeo", texto: "...Eu acredito em você. Não sei por quê. Mas eu acredito.", proxima: "e_t_a5" },
    e_t_a5: { tipo: "narracao", texto: "Eles ficam assim, de mãos dadas em cima do livro de física, até a bibliotecária acordar e tossir alto de propósito.", proxima: "e_t_fim" },
    e_t_b1: { tipo: "narracao", texto: "O rosto do Takeo se ilumina inteiro, como uma criança que ganhou um presente.", proxima: "e_t_b2" },
    e_t_b2: { quem: "takeo", texto: "Sério? Ela vai amar. Ela vai fazer bolinho de arroz. Ela vai te mostrar minhas fotos de bebê. Ah, não. Ela vai te mostrar minhas fotos de bebê.", proxima: "e_t_b3" },
    e_t_b3: { quem: "eu", texto: "Agora eu faço questão.", proxima: "e_t_b4" },
    e_t_b4: { tipo: "pensamento", texto: "Mês que vem. Eu estou fazendo planos pro mês que vem. Com ele vivo.", proxima: "e_t_fim" },
    e_t_c1: { tipo: "narracao", texto: "O Takeo fica quieto. Ele fecha o livro devagar.", proxima: "e_t_c2" },
    e_t_c2: { quem: "takeo", texto: "Você não é a primeira pessoa que me pede isso. A minha avó pede toda semana.", proxima: "e_t_c3" },
    e_t_c3: { quem: "takeo", texto: "Eu penso nisso. Toda noite. Mas o Kaito e o Blake são minha família também. Eu não sei abandonar família.", proxima: "e_t_c4" },
    e_t_c4: { tipo: "pensamento", texto: "“Ele nunca abandona alguém que ama.” É a coisa mais bonita nele. E é o que vai matar ele.", proxima: "e_t_fim" },
    e_t_fim: { tipo: "narracao", sprite: "takeo", texto: "Na saída, o Takeo tira do bolso um papelzinho dobrado e entrega para ela. Um desenho. Malfeito, cheio de linhas tortas: os dois na biblioteca, com uma polia entre eles e um coração pequeno escondido no canto.", proxima: "e_t_fim2" },
    e_t_fim2: { quem: "takeo", texto: "Eu desenho mal. Mas você gostava de desenho. Quando era pequena.", proxima: "e_t_fim3" },
    e_t_fim3: { tipo: "pensamento", texto: "Como ele sabe disso?", proxima: "c3_01" },

    /* =================== ENCONTRO — KAITO: O GINÁSIO =================== */
    // Cenário: ginásio de boxe velho do bairro (usa "vestiario"). Música: batida de treino.
    e_k_01: { tipo: "narracao", cenario: "ginasio-boxe", transicao: "tempo", legenda: "Sábado à tarde — O ginásio", sprite: "kaito", texto: "O ginásio fica no segundo andar de um prédio velho, em cima de uma loja de pneus. Sacos de pancada remendados com fita, um ringue com a corda frouxa, cheiro de suor e borracha.", proxima: "e_k_02" },
    e_k_02: { quem: "kaito", texto: "Aqui eu treino desde os sete anos. Desde o parquinho. Bem-vinda ao lugar que você criou sem saber.", proxima: "e_k_03" },
    e_k_03: { tipo: "narracao", texto: "Ele joga um par de luvas para ela. Ela pega com uma mão. Ele sorri, meio de lado.", proxima: "e_k_04" },
    e_k_04: { quem: "kaito", texto: "Regra: sem força. Você me derruba com força, eu sei. Eu quero saber se você sabe lutar. Técnica.", proxima: "e_k_05" },
    e_k_05: { quem: "eu", texto: "Eu não sei lutar.", proxima: "e_k_06" },
    e_k_06: { quem: "kaito", texto: "Então eu te ensino. Quem sabe assim a revanche fica justa.", proxima: "e_k_07" },
    e_k_07: { tipo: "narracao", texto: "Ele ensina. Paciente, surpreendentemente paciente. Como fechar a guarda. Como mexer os pés. Como desviar. Ele segura os ombros dela para corrigir a postura e solta rápido, como se tivesse encostado em fogo.", proxima: "e_k_08" },
    e_k_08: { tipo: "narracao", texto: "Depois de uma hora, os dois estão sentados no chão do ringue, encharcados de suor, dividindo uma garrafa d'água.", proxima: "e_k_09" },
    e_k_09: { quem: "kaito", texto: "Sabe por que eu virei líder? Não foi porque eu brigo bem.", proxima: "e_k_10" },
    e_k_10: { quem: "kaito", texto: "Foi porque, no primeiro ano, uns caras do terceiro pegaram o Takeo. E o Blake e eu entramos na frente. E aí veio outro menino pedir proteção. E outro. E de repente eu tinha vinte pessoas olhando pra mim esperando eu saber o que fazer.", proxima: "e_k_11" },
    e_k_11: { quem: "kaito", texto: "Eu nunca sei o que fazer. Eu só finjo muito bem.", proxima: "e_k_12" },
    e_k_12: { tipo: "narracao", texto: "Ele joga a cabeça para trás, apoiando na corda do ringue, e fecha os olhos.", proxima: "e_k_13" },
    e_k_13: { quem: "kaito", texto: "Se acontecer alguma coisa com o Takeo por causa desse Jin, a culpa é minha. Eu sou o líder. Eu devia ter percebido.", proxima: "e_k_esc" },
    e_k_esc: { escolhas: [
      { texto: "A. “Você não precisa saber o que fazer sozinho. É pra isso que serve um grupo.”", proxima: "e_k_a1", pontos: { kaito: 2 }, flags: ["Kaito_aliviado"] },
      { texto: "B. Dar um soco leve no ombro dele: “Líder não fica de mimimi. Levanta. Mais um round.”", proxima: "e_k_b1", pontos: { kaito: 3 }, flags: ["Kaito_round_extra"] },
      { texto: "C. “Você fingiu muito bem. Mas comigo não precisa fingir.”", proxima: "e_k_c1", pontos: { kaito: 3 }, flags: ["Kaito_sem_mascara"] }
    ]},
    e_k_a1: { tipo: "narracao", texto: "O Kaito abre um olho e olha para ela.", proxima: "e_k_a2" },
    e_k_a2: { quem: "kaito", texto: "Você parece minha mãe falando. E a do Blake. E a do Takeo.", proxima: "e_k_a3" },
    e_k_a3: { quem: "eu", texto: "Talvez todas elas tenham razão.", proxima: "e_k_a4" },
    e_k_a4: { quem: "kaito", texto: "...Talvez. Não conta pra elas que eu disse isso.", proxima: "e_k_fim" },
    e_k_b1: { tipo: "narracao", texto: "O Kaito fica um segundo chocado. Depois explode numa gargalhada e pula de pé.", proxima: "e_k_b2" },
    e_k_b2: { quem: "kaito", texto: "Mimimi?! Você chamou o líder da gangue de mimimi?! Luva. Agora.", proxima: "e_k_b3" },
    e_k_b3: { tipo: "narracao", texto: "Eles treinam mais meia hora. Ele não ganha. Ela não usa força. Mas, no fim, ela consegue desviar de um jab dele pela primeira vez, e ele comemora mais do que se ele mesmo tivesse acertado.", proxima: "e_k_fim" },
    e_k_c1: { tipo: "narracao", texto: "O Kaito não responde. Mas, devagar, o ombro dele encosta no dela.", proxima: "e_k_c2" },
    e_k_c2: { quem: "kaito", texto: "Você é a única pessoa que já me derrubou. Acho que por isso eu não consigo fingir com você. Você já me viu no chão.", proxima: "e_k_c3" },
    e_k_c3: { tipo: "narracao", texto: "Ele vira o rosto para ela. Muito perto. Os dois ainda ofegantes do treino. Por um segundo, ninguém se mexe.", proxima: "e_k_c4" },
    e_k_c4: { tipo: "narracao", texto: "Lá embaixo, alguém buzina na loja de pneus. O Kaito pisca, se afasta, coça a nuca.", proxima: "e_k_c5" },
    e_k_c5: { quem: "kaito", texto: "...Água. Acabou a água. Eu vou buscar água.", proxima: "e_k_fim" },
    e_k_fim: { tipo: "narracao", sprite: "kaito", texto: "Na saída, ele entrega para ela um par de luvas vermelhas, pequenas, gastas.", proxima: "e_k_fim2" },
    e_k_fim2: { quem: "kaito", texto: "Foram minhas primeiras. Do tamanho que eu tinha quando você me derrubou. Fica com elas. Pra lembrar que eu treino por sua causa.", proxima: "c3_01" },

    /* =================== ENCONTRO — BLAKE: A PRACINHA =================== */
    // Cenário: pracinha do bairro (usa "saida-colegio"). Música: violão leve, alegre.
    e_b_01: { tipo: "narracao", cenario: "parquinho", transicao: "tempo", legenda: "Sábado à tarde — A pracinha", sprite: "blake", texto: "Os irmãos do Blake são gêmeos, têm seis anos e o mesmo cabelo loiro dele, só que espetado para todos os lados. Eles correm na frente pela praça gritando como duas sirenes.", proxima: "e_b_02" },
    e_b_02: { quem: "noah", sprite: "noah", texto: "BLAKE! É SUA NAMORADA?", proxima: "e_b_03" },
    e_b_03: { quem: "blake", texto: "Não.", proxima: "e_b_04" },
    e_b_04: { quem: "theo", texto: "ENTÃO POR QUE VOCÊ PENTEOU O CABELO?", proxima: "e_b_05" },
    e_b_05: { tipo: "narracao", sprite: "blake", texto: "O Blake fecha os olhos e respira fundo. A SN morde o lábio para não rir.", proxima: "e_b_06" },
    e_b_06: { tipo: "narracao", texto: "Durante uma hora, a SN vê um Blake que ninguém na escola conhece. Ele empurra os dois no balanço. Faz curativo num joelho ralado com um cuidado que ninguém imaginaria naquelas mãos. Divide um picolé no meio, com exatidão matemática, para ninguém brigar.", proxima: "e_b_07" },
    e_b_07: { tipo: "narracao", texto: "Quando os gêmeos se distraem no escorregador, ele senta no banco ao lado dela. O banco range.", proxima: "e_b_08" },
    e_b_08: { quem: "blake", texto: "A Mio está brava comigo. Desde ontem. Ela não olhou pra mim na reunião nem uma vez.", proxima: "e_b_09" },
    e_b_09: { quem: "blake", texto: "Eu não sei o que eu fiz. E eu não sei perguntar pra ela. Ela faz piada de tudo e eu nunca sei quando é sério.", proxima: "e_b_10" },
    e_b_10: { tipo: "pensamento", texto: "Ele não sabe. Ele realmente não sabe que ela gosta dele.", proxima: "e_b_11" },
    e_b_11: { tipo: "pensamento", texto: "E ele está me contando isso. Num banco de praça. Num sábado. Depois de pentear o cabelo.", proxima: "e_b_12" },
    e_b_12: { tipo: "pensamento", texto: "Eu não sei o que eu quero que ele sinta. E isso me assusta.", proxima: "e_b_esc" },
    e_b_esc: { escolhas: [
      { texto: "A. “Ela não está brava. Ela está com medo. Pergunta pra ela. Ela merece ouvir de você.”", proxima: "e_b_a1", pontos: { blake: 1, mio: 3 }, flags: ["SN_ajudou_Mio_Blake"] },
      { texto: "B. “E você, Blake? O que você quer que ela sinta?”", proxima: "e_b_b1", pontos: { blake: 2 }, flags: ["Blake_confuso"] },
      { texto: "C. “Você penteou o cabelo pra vir com a Mio ou comigo?”", proxima: "e_b_c1", pontos: { blake: 3, desvio: 1 }, flags: ["Blake_cabelo_SN"] }
    ]},
    e_b_a1: { tipo: "narracao", texto: "O Blake olha para ela por muito tempo. Depois concorda, uma vez.", proxima: "e_b_a2" },
    e_b_a2: { quem: "blake", texto: "Medo de quê?", proxima: "e_b_a3" },
    e_b_a3: { quem: "eu", texto: "Isso ela tem que te contar.", proxima: "e_b_a4" },
    e_b_a4: { tipo: "pensamento", texto: "Eu fiz a coisa certa. Pela Mio. Então por que eu estou com vontade de chorar?", proxima: "e_b_fim" },
    e_b_b1: { tipo: "narracao", texto: "O Blake abre a boca. Fecha. Fica olhando os gêmeos no escorregador.", proxima: "e_b_b2" },
    e_b_b2: { quem: "blake", texto: "Eu não sei. Eu nunca pensei nisso. Eu nunca tive tempo de pensar no que eu quero.", proxima: "e_b_b3" },
    e_b_b3: { quem: "blake", texto: "...Mas eu penso em você estudando polia comigo. Isso conta?", proxima: "e_b_b4" },
    e_b_b4: { tipo: "pensamento", texto: "Conta. Infelizmente, conta muito.", proxima: "e_b_fim" },
    e_b_c1: { tipo: "narracao", texto: "O Blake vira para ela devagar. As orelhas vão ficando vermelhas, de baixo para cima.", proxima: "e_b_c2" },
    e_b_c2: { quem: "blake", texto: "...Eu não penteei o cabelo.", proxima: "e_b_c3" },
    e_b_c3: { quem: "noah", rotulo: "Noah (do escorregador)", texto: "PENTEOU SIM! ELE FICOU DEZ MINUTOS NO ESPELHO!", proxima: "e_b_c4" },
    e_b_c4: { quem: "theo", rotulo: "Theo (do escorregador)", texto: "E PERGUNTOU SE A CAMISETA PRETA ERA MELHOR QUE A OUTRA CAMISETA PRETA!", proxima: "e_b_c5" },
    e_b_c5: { tipo: "narracao", sprite: "blake", texto: "O Blake cobre o rosto com a mão. Pela primeira vez, a SN vê o gigante da escola completamente derrotado. Por duas crianças de seis anos.", proxima: "e_b_fim" },
    e_b_fim: { tipo: "narracao", sprite: "blake", texto: "Quando o sol começa a se pôr, os gêmeos dormem um em cada braço do Blake. Ele acompanha a SN até a esquina da casa dela, carregando os dois sem esforço.", proxima: "e_b_fim2" },
    e_b_fim2: { quem: "blake", texto: "Obrigado. Por hoje. Fazia tempo que eu não sentava num banco sem pensar em nada.", proxima: "c3_01" },

    /* =================== ENCONTRO — RYUJI: O BALÉ =================== */
    // Cenário: auditório da escola primária (usa "sala-de-aula"). Música: piano de balé, delicado.
    e_r_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Sábado à tarde — O balé", sprite: "ryuji", texto: "O auditório da escola primária está lotado de pais com celulares levantados. No meio deles, de camisa social amassada e jaqueta preta por cima, está o Ryuji, com um buquê de flores de plástico na mão.", proxima: "e_r_02" },
    e_r_02: { quem: "ryuji", texto: "Não ri. As de verdade eram caras. E essas duram pra sempre.", proxima: "e_r_03" },
    e_r_03: { quem: "eu", texto: "Eu não ia rir.", proxima: "e_r_04" },
    e_r_04: { quem: "ryuji", texto: "Você está rindo com os olhos.", proxima: "e_r_05" },
    e_r_05: { tipo: "narracao", texto: "As luzes apagam. A música começa. Uma fila de meninas de oito anos de tutu rosa entra no palco, cada uma girando para um lado diferente.", proxima: "e_r_06" },
    e_r_06: { tipo: "narracao", texto: "A terceira da fila tem o cabelo ruivo preso num coque apertado e a língua para fora de concentração. Ela erra o passo, tropeça e quase cai. E continua.", proxima: "e_r_07" },
    e_r_07: { quem: "ryuji", texto: "Essa é a Momo. Ela treinou isso a semana inteira na sala. Quebrou um vaso.", proxima: "e_r_08" },
    e_r_08: { tipo: "narracao", texto: "A voz dele está estranha. A SN olha para o lado. O Ryuji, o encrenqueiro, o das advertências, está com os olhos cheios d'água.", proxima: "e_r_09" },
    e_r_09: { quem: "ryuji", texto: "Não olha pra mim.", proxima: "e_r_10" },
    e_r_10: { quem: "eu", texto: "Não estou olhando.", proxima: "e_r_11" },
    e_r_11: { tipo: "narracao", texto: "Ela está olhando. E, sem pensar, tira um lenço da bolsa e coloca na mão dele. Ele aperta o lenço sem dizer nada.", proxima: "e_r_12" },
    e_r_12: { tipo: "narracao", texto: "Depois da apresentação, a Momo corre pelo corredor do auditório, de tutu e coque desfeito, e pula no pescoço do irmão.", proxima: "e_r_13" },
    e_r_13: { quem: "momo", texto: "Mano! Você viu? Eu errei mas eu não parei! A professora disse que o importante é não parar!", proxima: "e_r_14" },
    e_r_14: { tipo: "narracao", sprite: "momo", texto: "Depois ela vê a SN. Arregala os olhos.", proxima: "e_r_15" },
    e_r_15: { quem: "momo", texto: "É ELA? É a princesa? Você fala dela todo dia no jantar!", proxima: "e_r_16" },
    e_r_16: { tipo: "narracao", texto: "Silêncio absoluto. O Ryuji fica da cor do cabelo dele. Depois de uma cor ainda mais forte, que a SN nem sabia que existia.", proxima: "e_r_17" },
    e_r_17: { quem: "ryuji", sprite: "ryuji", texto: "Momo. A gente conversou sobre isso.", proxima: "e_r_18" },
    e_r_18: { quem: "momo", texto: "Você disse que ela segura cadeira com uma mão!", proxima: "e_r_19" },
    e_r_19: { quem: "ryuji", texto: "MOMO.", proxima: "e_r_esc" },
    e_r_esc: { escolhas: [
      { texto: "A. Abaixar até a altura da Momo: “Ele fala de mim todo dia? O que ele fala?”", proxima: "e_r_a1", pontos: { ryuji: 2 }, flags: ["Momo_contou"] },
      { texto: "B. “Momo, o importante é não parar. Você foi a melhor bailarina do palco.”", proxima: "e_r_b1", pontos: { ryuji: 3 }, flags: ["Momo_gosta_SN"] },
      { texto: "C. Olhar para o Ryuji: “Todo dia? Sério?”", proxima: "e_r_c1", pontos: { ryuji: 3 }, flags: ["Ryuji_admitiu"] }
    ]},
    e_r_a1: { quem: "momo", texto: "Que você é a garota mais estranha da escola! E que ele não consegue parar de pensar em por que você é tão estranha!", proxima: "e_r_a2" },
    e_r_a2: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji tampa a boca da irmã com a mão. A Momo morde a mão dele. Ele grita. As outras famílias olham.", proxima: "e_r_fim" },
    e_r_b1: { tipo: "narracao", texto: "A Momo fica completamente imóvel. Depois abraça a perna da SN com toda a força de uma criança de oito anos.", proxima: "e_r_b2" },
    e_r_b2: { quem: "momo", texto: "Você pode ser minha cunhada.", proxima: "e_r_b3" },
    e_r_b3: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji se senta numa cadeira do auditório e olha para o teto, como alguém que desistiu da vida.", proxima: "e_r_fim" },
    e_r_c1: { tipo: "narracao", texto: "O Ryuji olha para ela. Olha para a irmã. Olha para o teto. Respira fundo.", proxima: "e_r_c2" },
    e_r_c2: { quem: "ryuji", texto: "Tá. Todo dia. Satisfeita? Você entrou na minha cabeça e não sai. É irritante. Eu odeio. Eu gosto. Não sei.", proxima: "e_r_c3" },
    e_r_c3: { quem: "ryuji", texto: "Agora finge que eu não disse isso, que eu tenho uma reputação.", proxima: "e_r_c4" },
    e_r_c4: { tipo: "pensamento", texto: "Ninguém nunca me disse uma coisa dessas. Nem aos dezesseis. Nem aos vinte e oito.", proxima: "e_r_fim" },
    e_r_fim: { tipo: "narracao", sprite: "ryuji", texto: "Na saída, a Momo insiste em dar uma das flores de plástico do buquê para a SN. Uma rosa vermelha, meio torta.", proxima: "e_r_fim2" },
    e_r_fim2: { quem: "ryuji", texto: "Ela nunca dá as flores dela pra ninguém. Nem pra mim. Guarda bem. É praticamente um contrato.", proxima: "c3_01" },

    /* =================== CENA 3 — MIO =================== */
    // Cenário: quarto da SN, domingo de manhã. Música: violão, nostálgico.
    c3_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Cena 3 — Mio", sprite: null, texto: "Domingo de manhã. A campainha toca às oito e meia. A SN ainda está de pijama quando a mãe abre a porta do quarto e a Mio entra com duas sacolas de pão de queijo.", proxima: "c3_02" },
    c3_02: { quem: "mio", sprite: "mio", texto: "Ninguém sozinho até segunda. Ordem do líder. Eu vim cumprir.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", texto: "Ela se joga na cama, como fazia aos dez anos, aos doze, aos quinze. Fica olhando para o teto, para as estrelinhas que brilham no escuro, já apagadas de dia.", proxima: "c3_04" },
    c3_04: { quem: "mio", texto: "Lembra quando a gente colou essas estrelinhas? Você queria fazer a constelação certinha, com livro e tudo. Eu colei de qualquer jeito. Você ficou brava três dias.", proxima: "c3_05" },
    c3_05: { quem: "eu", texto: "Você colou uma em cima da lâmpada.", proxima: "c3_06" },
    c3_06: { quem: "mio", texto: "Ficou lindo!", proxima: "c3_07" },
    c3_07: { tipo: "narracao", texto: "As duas riem. Depois o riso vai acabando, e fica só o silêncio de domingo. Um passarinho na janela. A televisão da mãe lá embaixo.", proxima: "c3_08" },
    c3_08: { quem: "mio", texto: "SN. Posso perguntar uma coisa e você responde sério?", proxima: "c3_09" },
    c3_09: { quem: "eu", texto: "Pode.", proxima: "c3_cam1" },

    // A pergunta da Mio depende do Capítulo 3
    // A fala da Mio muda conforme com quem a SN saiu no sábado (Escolha 3)
    c3_cam1: { caminhos: [
      { flag: "Encontro_Blake", proxima: "c3_m_praca" },
      { flag: "Mio_magoada_Blake", proxima: "c3_m_magoada" },
      { flag: "Encontro_Kaito", proxima: "c3_m_kaito" },
      { flag: "Encontro_Takeo", proxima: "c3_m_takeo" },
      { flag: "Encontro_Ryuji", proxima: "c3_m_ryuji" }
    ], proxima: "c3_m_normal" },
    c3_m_kaito: { quem: "mio", texto: "Ontem você foi treinar com o Kaito. O Ryuji já espalhou pro grupo inteiro. Mas não é isso que eu quero perguntar. Na sexta, no clube, você e o Blake... Você gosta dele?", proxima: "c3_10" },
    c3_m_takeo: { quem: "mio", texto: "Ontem você passou a tarde na biblioteca com o Takeo. Eu vi ele saindo de lá sorrindo igual bobo. Mas não é isso que eu quero perguntar. Na sexta, no clube, você e o Blake... Você gosta dele?", proxima: "c3_10" },
    c3_m_ryuji: { quem: "mio", texto: "Ontem você foi no balé da irmã do Ryuji. Do RYUJI. Depois a gente fala disso. Mas não é isso que eu quero perguntar. Na sexta, no clube, você e o Blake... Você gosta dele?", proxima: "c3_10" },
    c3_m_magoada: { quem: "mio", texto: "No karaokê, você disse que escolheria o Blake. Você gosta dele de verdade?", proxima: "c3_10" },
    c3_m_praca: { quem: "mio", texto: "Ontem você foi na praça com o Blake. O Theo me mandou mensagem pelo celular da mãe dele, com quinze emojis de coração. Você gosta dele?", proxima: "c3_10" },
    c3_m_normal: { quem: "mio", texto: "Quando eu falei do menino sério, no karaokê... você sabia de quem eu estava falando, né? E na sexta você estudou com ele, no clube. Você gosta do Blake?", proxima: "c3_10" },

    c3_10: { tipo: "narracao", texto: "A Mio continua olhando para o teto. A voz dela está leve. Leve demais. As mãos estão apertando a colcha com força.", proxima: "c3_11" },
    c3_11: { quem: "mio", texto: "Porque se você gostar, tudo bem. Sério. Eu juro. Você é mais importante. Eu tiro da cabeça. Eu sou boa em tirar coisas da cabeça.", proxima: "c3_12" },
    c3_12: { tipo: "pensamento", texto: "Ela não é boa nisso. Ela é boa em esconder. É diferente.", proxima: "c3_13" },
    c3_13: { tipo: "pensamento", texto: "Da primeira vez, a gente nunca teve essa conversa. A gente nunca teve conversa nenhuma sobre isso. E um dia a gente simplesmente parou de se falar.", proxima: "c3_14" },
    c3_14: { tipo: "pensamento", texto: "Eu não sei se foi por isso. Eu nunca vou saber. Mas eu não quero descobrir do jeito difícil.", proxima: "c3_esc4" },

    // ▶ ESCOLHA 4 — A conversa com a Mio
    c3_esc4: { escolhas: [
      { texto: "A. “Não. O Blake é seu. Eu nunca ia ficar entre vocês.”", proxima: "c3_4a_1", pontos: { mio: 3, blake: -1 }, flags: ["SN_abriu_mao_Blake"] },
      { texto: "B. “Eu não sei, Mio. É verdade. Mas eu sei que eu não quero te perder por causa de menino nenhum.”", proxima: "c3_4b_1", pontos: { mio: 2 }, flags: ["SN_honesta_Mio"] },
      { texto: "C. “Você não tem que tirar nada da cabeça. Você tem que falar com ele.”", proxima: "c3_4c_1", pontos: { mio: 2 }, flags: ["Mio_vai_falar_Blake"] }
    ]},
    c3_4a_1: { tipo: "narracao", texto: "A Mio vira de lado e olha para ela. Os olhos estão vermelhos.", proxima: "c3_4a_2" },
    c3_4a_2: { quem: "mio", texto: "Ele não é meu. Ele nem sabe que eu existo desse jeito.", proxima: "c3_4a_3" },
    c3_4a_3: { quem: "eu", texto: "Então a gente vai fazer ele saber.", proxima: "c3_4a_4" },
    c3_4a_4: { tipo: "narracao", texto: "A Mio ri, molhado, e abraça a SN pelo pescoço tão forte que as duas caem da cama.", proxima: "c3_15" },
    c3_4b_1: { tipo: "narracao", texto: "A Mio fica em silêncio. Por muito tempo.", proxima: "c3_4b_2" },
    c3_4b_2: { quem: "mio", texto: "Isso foi a resposta mais honesta que você já me deu. Em dez anos.", proxima: "c3_4b_3" },
    c3_4b_3: { quem: "mio", texto: "Tá. A gente não sabe. Nenhuma das duas. Mas a gente promete uma coisa: aconteça o que acontecer, a gente conta uma pra outra. Primeiro. Antes de qualquer menino.", proxima: "c3_4b_4" },
    c3_4b_4: { tipo: "narracao", texto: "Ela estende o mindinho. A SN engancha o dela sem hesitar.", proxima: "c3_15" },
    c3_4c_1: { quem: "mio", texto: "Falar? Com o Blake? Eu? Você está louca? Eu enfrento gangue, eu enfrento professor, eu enfrento a Sayuri, mas falar com o Blake...", proxima: "c3_4c_2" },
    c3_4c_2: { quem: "eu", texto: "Você é a pessoa mais corajosa que eu conheço, Mio. Desde os seis anos.", proxima: "c3_4c_3" },
    c3_4c_3: { tipo: "narracao", texto: "A Mio olha para ela. Respira fundo. Concorda com a cabeça, bem devagar, como quem aceita um desafio.", proxima: "c3_4c_4" },
    c3_4c_4: { quem: "mio", texto: "Tá. Segunda-feira. Depois que essa história do Jin acabar. Eu falo. Se eu desmaiar, você me segura.", proxima: "c3_15" },

    // (todas as opções continuam aqui)
    c3_15: { tipo: "narracao", texto: "Depois, as duas comem pão de queijo sentadas no chão do quarto, de costas para a cama, como faziam quando eram pequenas.", proxima: "c3_16" },
    c3_16: { quem: "mio", texto: "Sabe o que eu mais gosto dessa semana? Você está me chamando pras coisas. Você nunca me chamava. Era sempre eu.", proxima: "c3_17" },
    c3_17: { quem: "mio", texto: "Às vezes eu achava que, se eu parasse de te chamar, a gente ia parar de ser amiga. E eu tinha muito medo disso.", proxima: "c3_18" },
    c3_18: { tipo: "pensamento", texto: "Ela tinha razão. Foi exatamente isso que aconteceu. Ela parou de chamar. Eu nunca chamei. E a gente acabou.", proxima: "c3_19" },
    c3_19: { quem: "eu", texto: "A partir de agora, eu chamo. Todo dia, se precisar.", proxima: "c3_20" },
    c3_20: { quem: "mio", texto: "Até quando a gente for velha e estiver brigando por causa de novela?", proxima: "c3_21" },
    c3_21: { quem: "eu", texto: "Principalmente aí.", proxima: "c4_01" },

    /* =================== CENA 4 — O QUE A HANA DESCOBRIU =================== */
    // Cenário: sala do clube de leitura, domingo à tarde (o clube abre aos domingos para estudo). Música: violino suave.
    c4_01: { tipo: "narracao", cenario: "clube-leitura", transicao: "tempo", legenda: "Cena 4 — O que a Hana descobriu", sprite: "hana", texto: "À tarde, a Hana pede para a SN encontrar com ela no clube de leitura. Sozinha. A Mio leva as duas até a porta da escola e fica esperando do lado de fora, como uma guarda-costas loira e mastigando chiclete.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "A Hana está sentada na mesa de sempre, com o caderno pequeno de gatinhos aberto na frente dela. Ela não levanta os olhos quando a SN entra.", proxima: "c4_03" },
    c4_03: { quem: "hana", texto: "Senta, por favor.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", texto: "A SN senta. A Hana vira o caderno para ela. Uma lista. Com datas. Com a letra caprichada de sempre.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "Quarta: dormiu na aula e acordou como se não soubesse onde estava. Perguntou que dia era. Olhou para o Takeo como se ele tivesse voltado de algum lugar.", proxima: "c4_06" },
    c4_06: { tipo: "narracao", texto: "Quarta: sabia da briga antes de todo mundo. Ficou com medo quando ouviu a palavra “mercado”, porque esperava ouvir outra.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", texto: "Quinta: sabia que os Oda iam aparecer? Não. Ficou com medo porque NÃO sabia. Como quem lê um livro e encontra uma página que não estava lá antes.", proxima: "c4_08" },
    c4_08: { tipo: "narracao", texto: "Sexta: resolveu a questão de química como gente grande. Fala de trabalho, de planilha, de rótulo de remédio. Disse “acabei de chegar” como se fosse verdade.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "Embaixo de tudo, sublinhado duas vezes, com um ponto de interrogação tímido no final: “Ela veio de outro lugar? De outro... tempo?”", proxima: "c4_10" },
    c4_10: { tipo: "narracao", texto: "O coração da SN para por um segundo.", proxima: "c4_11" },
    c4_11: { quem: "hana", texto: "Eu sei que parece maluquice. Eu leio muito livro. Eu sei. Mas eu juntei tudo, e não tem outra resposta que faça sentido.", proxima: "c4_12" },
    c4_12: { quem: "hana", texto: "Eu não vou contar pra ninguém. Eu só... eu queria que você soubesse que você não precisa carregar isso sozinha. Seja o que for.", proxima: "c4_13" },
    c4_13: { tipo: "pensamento", texto: "“Para o coração, você vai precisar de gente.”", proxima: "c4_14" },
    c4_14: { tipo: "pensamento", texto: "A carta da vovó. A Hana. As duas falando a mesma coisa no mesmo fim de semana.", proxima: "c4_esc5" },

    // ▶ ESCOLHA 5 — Contar a verdade para a Hana?
    c4_esc5: { escolhas: [
      { texto: "A. Contar tudo. Os vinte e oito anos. O desejo. O Takeo no futuro.", proxima: "c4_5a_1", pontos: { hana: 3, desvio: 3 }, flags: ["Hana_sabe_tudo"] },
      { texto: "B. Contar só que veio do futuro. Não contar o que acontece com o Takeo.", proxima: "c4_5b_1", pontos: { hana: 2, desvio: 2 }, flags: ["Hana_sabe_viagem"] },
      { texto: "C. “É uma teoria muito bonita, Hana. Você devia escrever um livro.”", proxima: "c4_5c_1", pontos: { hana: -1 }, flags: ["Negou_para_Hana"] }
    ]},
    c4_5a_1: { tipo: "narracao", texto: "A SN conta. Desde o apartamento cheio de caixas. A foto. A mensagem de voz que corta no meio. O trovão. O sinal da escola.", proxima: "c4_5a_2" },
    c4_5a_2: { tipo: "narracao", texto: "Quando ela chega na parte do enterro, a voz falha. A Hana não fala nada. Ela só estica a mão por cima da mesa e segura a mão da SN. E não solta mais.", proxima: "c4_5a_3" },
    c4_5a_3: { quem: "hana", texto: "Então é por isso. A sua cara quando ele entrou na sala. Era uma despedida mesmo.", proxima: "c4_5a_4" },
    c4_5a_4: { quem: "eu", texto: "Era um reencontro. A despedida eu já tinha feito.", proxima: "c4_5a_5" },
    c4_5a_5: { tipo: "narracao", texto: "A Hana chora em silêncio. A SN também. Lá fora, a Mio bate no vidro da porta, preocupada. As duas fazem sinal de que está tudo bem, ao mesmo tempo, e riem no meio do choro.", proxima: "c4_15" },
    c4_5b_1: { tipo: "narracao", texto: "A SN conta do apartamento, das caixas, do trovão. Dos vinte e oito anos. Mas, quando chega na parte do Takeo, ela para.", proxima: "c4_5b_2" },
    c4_5b_2: { quem: "eu", texto: "Tem uma coisa que eu não posso contar ainda. Desculpa. Não é que eu não confie em você.", proxima: "c4_5b_3" },
    c4_5b_3: { quem: "hana", texto: "É uma coisa ruim.", proxima: "c4_5b_4" },
    c4_5b_4: { quem: "eu", texto: "É.", proxima: "c4_5b_5" },
    c4_5b_5: { quem: "hana", texto: "Então eu espero. Quando você estiver pronta. Eu sou boa em esperar.", proxima: "c4_15" },
    c4_5c_1: { tipo: "narracao", texto: "A Hana fecha o caderno devagar. Ela não parece brava. Parece triste.", proxima: "c4_5c_2" },
    c4_5c_2: { quem: "hana", texto: "Tá. Desculpa. Eu leio livro demais mesmo.", proxima: "c4_5c_3" },
    c4_5c_3: { tipo: "pensamento", texto: "Ela sabe que eu menti. Ela sempre sabe. E agora ela acha que eu não confio nela.", proxima: "c4_5c_4" },
    c4_5c_4: { tipo: "pensamento", texto: "Regra número 1. Nada de “um dia”. E eu acabei de dizer “um dia eu conto” sem dizer.", proxima: "c4_15" },

    // (todas as opções continuam aqui)
    c4_15: { tipo: "narracao", texto: "Antes de saírem, a Hana vira mais uma página do caderno. Tem uma última anotação, escrita com uma letra mais apressada.", proxima: "c4_16" },
    c4_16: { quem: "hana", texto: "Tem uma coisa que eu não entendi. Ontem eu fui na olaria velha, do outro lado do rio. Por causa do barro vermelho. Sozinha. Desculpa, eu sei que não devia.", proxima: "c4_17" },
    c4_17: { quem: "eu", texto: "Hana!", proxima: "c4_18" },
    c4_18: { quem: "hana", texto: "Eu não entrei. Eu só olhei de longe. O carro preto estava lá. E, no muro da olaria, alguém pintou uma coisa. Com tinta branca. Várias vezes.", proxima: "c4_19" },
    c4_19: { tipo: "narracao", texto: "Ela mostra a foto no celular. Um muro de tijolo vermelho. E, pintada nele, repetida dezenas de vezes, a mesma frase, com a mesma letra dos setes cortados.", proxima: "c4_20" },
    c4_20: { tipo: "narracao", efeito: "eco", texto: "“DESSA VEZ NINGUÉM MORRE.”", proxima: "c4_21" },
    c4_21: { tipo: "narracao", texto: "A SN fica gelada da cabeça aos pés.", proxima: "c4_22" },
    c4_22: { tipo: "pensamento", texto: "É a minha frase. É a frase que eu escrevi no caderno. É a regra número 4.", proxima: "c4_23" },
    c4_23: { tipo: "pensamento", texto: "Por que o Jin escreveu a minha frase num muro?", proxima: "c5_01" },

    /* =================== CENA 5 — A VINGANÇA DA SAYURI =================== */
    // Cenário: quarto da SN, domingo à noite. Música: tensão leve.
    c5_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Cena 5 — A vingança da Sayuri", sprite: null, texto: "Domingo à noite. A SN está deitada, olhando para a foto do muro no celular, quando o grupo da turma começa a apitar sem parar.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", texto: "Trinta mensagens. Cinquenta. Cem. Ela abre o grupo.", proxima: "c5_03" },
    c5_03: { tipo: "narracao", texto: "Alguém postou uma foto tirada de longe, escura, tremida. A SN sentada no chão de um beco, abraçando os joelhos, na sexta à noite. E, embaixo, uma legenda escrita em rosa, cheia de emojis.", proxima: "c5_04" },
    c5_04: { tipo: "narracao", texto: "“A Fantasma agora anda com gangue. Olha onde ela foi parar na sexta. Será que é namorada de quem?”", proxima: "c5_05" },
    c5_05: { tipo: "narracao", texto: "As respostas não param. Risadas. Apostas. Nomes. Kaito. Ryuji. Até o nome do Takeo, com uma piada cruel do lado.", proxima: "c5_06" },
    c5_06: { tipo: "pensamento", sprite: "sayuri", texto: "Sayuri.", proxima: "c5_07" },
    c5_07: { tipo: "pensamento", sprite: null, texto: "Como ela tirou essa foto? Ela estava lá? Ela me seguiu?", proxima: "c5_08" },
    c5_08: { tipo: "pensamento", texto: "Ou alguém deu essa foto pra ela?", proxima: "c5_09" },
    c5_09: { tipo: "narracao", texto: "Aos dezesseis, a SN teria desligado o celular, chorado no travesseiro e faltado na escola no dia seguinte, e no outro, e no outro.", proxima: "c5_10" },
    c5_10: { tipo: "narracao", texto: "A mão dela começa a fazer exatamente isso. O dedo vai para o botão de desligar.", proxima: "c5_11" },
    c5_11: { tipo: "narracao", texto: "E para.", proxima: "c5_esc6" },

    // ▶ ESCOLHA 6 — Responder a Sayuri
    c5_esc6: { escolhas: [
      { texto: "A. Responder no grupo, calma: “Na sexta, um homem me ameaçou com uma faca naquele beco. Quem tirou essa foto viu e não chamou ninguém.”", proxima: "c5_6a_1", pontos: { desvio: 2 }, flags: ["SN_expos_Sayuri"] },
      { texto: "B. Não responder no grupo. Mandar mensagem só para a Sayuri: “Quem te deu essa foto?”", proxima: "c5_6b_1", pontos: { desvio: 1 }, flags: ["SN_perguntou_Sayuri"] },
      { texto: "C. Sair do grupo. E não deixar isso estragar a noite.", proxima: "c5_6c_1", pontos: { mio: 1 }, flags: ["SN_saiu_grupo"] }
    ]},
    c5_6a_1: { tipo: "narracao", texto: "Ela escreve. Manda. E o grupo, que estava explodindo de mensagem, para. Completamente.", proxima: "c5_6a_2" },
    c5_6a_2: { tipo: "narracao", texto: "Um minuto. Dois. Cinco. Ninguém escreve nada.", proxima: "c5_6a_3" },
    c5_6a_3: { tipo: "narracao", texto: "Depois, uma mensagem da Mio: “é verdade. eu tava lá depois. e quem riu disso vai ter que falar comigo amanhã.” E outra do Kaito: “Concordo.” E outra do Ryuji, só com um emoji de faca e uma caveira.", proxima: "c5_6a_4" },
    c5_6a_4: { tipo: "narracao", texto: "A foto é apagada em menos de dez minutos.", proxima: "c5_12" },
    c5_6b_1: { tipo: "narracao", texto: "Os dois risquinhos azuis aparecem quase na hora. A Sayuri leu. Ela não responde.", proxima: "c5_6b_2" },
    c5_6b_2: { tipo: "narracao", texto: "Dez minutos depois, quando a SN já desistiu de esperar, chega uma mensagem curta. Sem emoji. Sem caneta rosa.", proxima: "c5_6b_3" },
    c5_6b_3: { quem: "mensagem", rotulo: "Mensagem — Sayuri", texto: "um cara loiro me mandou. eu não sei quem é. ele disse que você ia entender.", proxima: "c5_6b_4" },
    c5_6b_4: { tipo: "pensamento", texto: "Loiro.", proxima: "c5_12" },
    c5_6c_1: { tipo: "narracao", texto: "Ela sai do grupo. Coloca o celular virado para baixo na escrivaninha. Respira.", proxima: "c5_6c_2" },
    c5_6c_2: { tipo: "narracao", texto: "Trinta segundos depois, o celular vibra. Não é o grupo. É uma mensagem da Mio: “eu vi. eu tô indo aí. não discute.”", proxima: "c5_6c_3" },
    c5_6c_3: { tipo: "pensamento", texto: "Ninguém sozinho até segunda. Eles levaram isso a sério.", proxima: "c5_12" },

    // (todas as opções continuam aqui)
    c5_12: { tipo: "narracao", texto: "Antes de dormir, ela abre a foto do beco de novo. Agora com calma. Prestando atenção.", proxima: "c5_13" },
    c5_13: { tipo: "narracao", texto: "Ela não foi tirada da rua. Foi tirada de cima. De uma janela. Do segundo andar do prédio em frente ao beco.", proxima: "c5_14" },
    c5_14: { tipo: "narracao", texto: "E, no reflexo de uma poça no chão do beco, quase invisível, tem uma pessoa parada na entrada. Não é o Jin. É alguém menor. De jaqueta com um lírio bordado nas costas.", proxima: "c5_15" },
    c5_15: { tipo: "pensamento", texto: "Akane.", proxima: "c5_16" },
    c5_16: { tipo: "pensamento", texto: "Ou a Reina?", proxima: "c5_cam1" },

    c5_cam1: { caminhos: [
      { flag: "Alianca_Reina", proxima: "c5_r_alianca" },
      { flag: "Mentiu_Reina", proxima: "c5_r_mentiu" }
    ], proxima: "c5_r_alianca" },
    c5_r_alianca: { tipo: "pensamento", texto: "Eu mostrei a foto pra Reina. Eu confiei nela. Se ela me traiu, eu entreguei tudo na mão dela.", proxima: "c5_17" },
    c5_r_mentiu: { tipo: "pensamento", texto: "Eu menti pra Reina. Ela disse que eu ia ficar sozinha nisso. Será que ela quis dizer exatamente isso?", proxima: "c5_17" },

    c5_17: { tipo: "narracao", texto: "O celular vibra de novo. Uma mensagem. Da Reina.", proxima: "c5_18" },
    c5_18: { quem: "mensagem", rotulo: "Mensagem — Reina", texto: "A Akane sumiu desde sexta. Não está em casa. Não atende. Não confia em ninguém do Lírio amanhã. Nem em mim, se eu estiver estranha.", proxima: "c5_19" },
    c5_19: { tipo: "pensamento", texto: "“Nem em mim, se eu estiver estranha.”", proxima: "c5_20" },
    c5_20: { tipo: "pensamento", texto: "Que tipo de pessoa manda uma mensagem dessas?", proxima: "c5_21" },
    c5_21: { tipo: "pensamento", texto: "Alguém com muito medo.", proxima: "ep_01" },

    /* =================== EPÍLOGO — SEGUNDA-FEIRA =================== */
    // Cenário: a esquina perto da casa da SN, segunda de manhã (usa "saida-colegio"). Música: piano do prólogo, interrompido.
    ep_01: { tipo: "narracao", cenario: "rua", transicao: "tempo", legenda: "Epílogo — Segunda-feira", sprite: null, texto: "Segunda-feira. Sete e dez da manhã. O céu está cinza e baixo, como se fosse chover a qualquer momento.", proxima: "ep_02" },
    ep_02: { tipo: "narracao", texto: "A SN sai de casa com a carta da avó no bolso, o pendrive escondido no estojo e o cartão branco do Jin dentro da capinha do celular. A mãe fica na porta, olhando até ela virar a esquina.", proxima: "ep_03" },
    ep_03: { tipo: "narracao", texto: "Na esquina da padaria, ela para.", proxima: "ep_04" },
    ep_04: { tipo: "narracao", texto: "O poste está lá. A padaria está lá. O cachorro que late para todo mundo está lá, latindo.", proxima: "ep_05" },
    ep_05: { tipo: "narracao", texto: "O Takeo não está.", proxima: "ep_06" },
    ep_06: { tipo: "pensamento", texto: "Ele está atrasado. Ele dormiu demais. Ele está doente.", proxima: "ep_07" },
    ep_07: { tipo: "narracao", texto: "Ela liga. Cai direto na caixa postal. Liga de novo. Caixa postal.", proxima: "ep_08" },
    ep_08: { tipo: "narracao", texto: "Ela manda mensagem para o grupo que o Kaito criou no sábado. “Alguém viu o Takeo?”", proxima: "ep_09" },
    ep_09: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "não. ele devia ter me mandado mensagem às 7h. ele sempre manda.", proxima: "ep_10" },
    ep_10: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Passei na casa dele agora. A avó disse que ele saiu às seis e meia. Disse que ia te esperar mais cedo.", proxima: "ep_11" },
    ep_11: { tipo: "narracao", texto: "O chão parece sumir debaixo dos pés dela.", proxima: "ep_12" },
    ep_12: { tipo: "narracao", texto: "No pé do poste, encostado no meio-fio, ela vê uma coisa pequena e branca. Uma caixinha de leite de morango. Fechada. Ainda gelada.", proxima: "ep_13" },
    ep_13: { tipo: "narracao", texto: "E, presa na caixinha com um elástico, um cartão branco. Sem nome. Com uma letra que ela já conhece. Os setes cortados no meio.", proxima: "ep_14" },
    ep_14: { quem: "mensagem", rotulo: "Cartão", efeito: "eco", texto: "“Bom dia. Segunda-feira chegou. Olaria, ao meio-dia. Traz a foto. Vem sozinha. Dessa vez, ninguém precisa morrer.”", proxima: "ep_15" },
    ep_15: { tipo: "narracao", texto: "A SN fica parada na esquina, com a caixinha de leite gelada na mão, enquanto a primeira gota de chuva cai no cartão e borra a palavra “morrer”.", proxima: "ep_16" },
    ep_16: { tipo: "pensamento", texto: "Regra número 4.", proxima: "ep_17" },
    ep_17: { tipo: "pensamento", texto: "Ninguém morre.", proxima: "ep_18" },
    ep_18: { tipo: "pensamento", efeito: "eco", texto: "Ninguém.", proxima: "ep_fim" },

    // Fim do Capítulo 4 (crie a entrada "capitulo4" em dados/capitulos.js)
    ep_fim: { fim: "capitulo4" }
  }
});

/*
 * GANCHO PARA O CAPÍTULO 5 (anotações do roteiro)
 *  • O Jin levou o Takeo. Olaria, ao meio-dia. “Vem sozinha.” Ela vai sozinha? Ou chama o grupo?
 *  • Por que o Jin pintou “DESSA VEZ NINGUÉM MORRE” no muro? É a frase da SN.
 *  • A Akane sumiu. Ela tirou a foto do beco? A Reina é confiável?
 *  • Quem viu a SN no encontro de sábado (Encontro_Takeo/Kaito/Blake/Ryuji) é quem
 *    pode reagir primeiro ao sumiço do Takeo.
 *  • A Mio prometeu falar com o Blake “depois que essa história do Jin acabar”.
 *  • A Hana sabe da viagem no tempo? (Hana_sabe_tudo / Hana_sabe_viagem / Negou_para_Hana)
 *
 * ESCOLHAS DO CAPÍTULO (6 + 1 no encontro)
 *  1 Mãe · 2 O que contar ao grupo · 3 Encontro de sábado (Takeo, Kaito, Blake ou Ryuji)
 *  + escolha dentro do encontro · 4 Mio · 5 Hana · 6 Sayuri
 *
 * FLAGS NOVAS
 *  Mae_sabe_portao · Mae_sabe_Jin · Mentiu_Mae · Grupo_sabe_Jin · Grupo_sabe_pressentimento
 *  Grupo_viu_forca · Encontro_Takeo/Kaito/Blake/Ryuji · Takeo_mao_biblioteca
 *  Aniversario_avo_Takeo · Pediu_Takeo_sair · Kaito_aliviado · Kaito_round_extra
 *  Kaito_sem_mascara · SN_ajudou_Mio_Blake · Blake_confuso · Blake_cabelo_SN
 *  Momo_contou · Momo_gosta_SN · Ryuji_admitiu · SN_abriu_mao_Blake · SN_honesta_Mio
 *  Mio_vai_falar_Blake · Hana_sabe_tudo · Hana_sabe_viagem · Negou_para_Hana
 *  SN_expos_Sayuri · SN_perguntou_Sayuri · SN_saiu_grupo
 */