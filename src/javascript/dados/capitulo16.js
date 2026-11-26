/*
 * =====================================================================
 *  CAPÍTULO 16 — Ela falou
 *  Quarta, quinta e sexta de manhã, depois do Capítulo 15.
 * =====================================================================
 *
 *  O QUE ACONTECE
 *    • Quarta: a Sayuri volta para a escola, com uma marca escondida no pulso.
 *      No bicicletário, ela avisa a SN: o homem de terno "trabalha pra alguém",
 *      e esse alguém pergunta da SN. Ela não diz quem. A SN não conta para ninguém.
 *    • A Reina chama a SN para dormir na casa dela na quinta. A casa está vazia desde
 *      que a avó foi internada.
 *    • Quinta à noite, na casa da Reina: o pudim que racha, o quarto da avó, a conversa
 *      no escuro sobre o Takeo e sobre ficar sozinha.
 *    • Quarta: o Blake mostra a prova de física (7,5) para a SN e vai embora com o Kaito.
 *    • Quinta: no pátio, a Sayuri diz na frente de todos que ainda gosta do Blake e chama ele pra sair.
 *      Ele diz "tá": "ninguém mais falou". A Mio, que nunca falou, fica arrasada.
 *    • Sexta de manhã: O REN VOLTA. Ele só passa na rua da Reina e olha para a SN. Não fala nada.
 *    • A VISÃO: no meio da briga, alguém acerta uma barra de ferro em alguém importante. Sangue.
 *      A SN não consegue ver o rosto. Ela decide impedir — por dentro. (Capítulo 17.)
 *
 *  REGRAS QUE ESTE CAPÍTULO SEGUE
 *    • Nada de gangue dentro da escola: o Ren só aparece fora, no fim.
 *    • A SN não fica de fofoca: Sayuri e Reina ficam com ela.
 *    • Ninguém fala o apelido antigo.
 *    • Romance devagar.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Sayuri, Reina, Blake, Ren (só passa, sem fala), Kaito e Mãe (só mensagem), Mio, Hana.
 *    A avó da Reina só é citada.
 *
 *  CENÁRIOS
 *    Bicicletário → "saida-colegio" · Hospital → "corredor"
 *    Casa e quarto da Reina → "apartamento" (troque por "casa-reina" se criar)
 *    Rua em frente à casa da Reina → "saida-colegio"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Ofereceu_ajuda_Sayuri, Ofereceu_hospital_Reina, Pudim_com_Reina, Voltou_com_Takeo,
 *    Prometeu_avo_Takeo, Takeo_chama_primeiro.
 *
 *  Crie a entrada "capitulo16" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo16", {
  inicio: "c0_01",
  cenas: {

    /* =================== ABERTURA — DUAS CARTEIRAS =================== */
    // Cenário: sala de aula, quarta de manhã. Música: piano baixo.
    c0_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Quarta-feira", sprite: null, texto: "Quarta-feira. A Sayuri voltou.", proxima: "c0_02" },
    c0_02: { tipo: "narracao", texto: "Ela está na carteira de sempre, perto da janela. O laço rosa no cabelo. O uniforme passado. O queixo alto. Igual a antes. Quase.", proxima: "c0_03" },
    c0_03: { tipo: "narracao", texto: "A diferença está nas mangas. Ela puxa a manga do casaco sobre a mão esquerda o tempo todo. Mesmo quando escreve. Mesmo com o sol batendo na janela.", proxima: "c0_04" },
    c0_04: { tipo: "pensamento", texto: "Na outra vida, eu fazia isso. Puxar a manga. Pra esconder o roxo do braço que alguém apertou no corredor.", proxima: "c0_05" },
    c0_05: { tipo: "narracao", texto: "As amigas dela chegam, sentam em volta, falam alto sobre um vídeo. A Sayuri ri na hora certa. Ninguém pergunta onde ela esteve. Ninguém pergunta nada.", proxima: "c0_06" },
    c0_06: { tipo: "narracao", texto: "E, duas fileiras para trás, tem outra carteira vazia. Há duas semanas. A que fica perto da porta.", proxima: "c0_07" },
    c0_07: { tipo: "pensamento", texto: "A carteira do Ren. Ele não aparece desde o festival. A secretaria diz que ele está “com atestado”. Ninguém sente falta.", proxima: "c0_08" },
    c0_08: { tipo: "pensamento", texto: "Eu sinto. Não falta. Outra coisa. Um silêncio desses nunca é descanso. É alguém mexendo as peças sem a gente ver.", proxima: "c0b_01" },
    /* =================== CENA 0.5 — SETE E MEIO =================== */
    // Cenário: corredor, quarta no intervalo. Música: violão calmo.
    c0b_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Cena 0.5 — Sete e meio", sprite: null, texto: "No intervalo, a SN está no corredor quando alguém para do lado dela. Grande demais para não perceber.", proxima: "c0b_02" },
    c0b_02: { tipo: "narracao", sprite: "blake", texto: "O Blake. Ele não fala oi. Só estende uma folha dobrada. A prova de recuperação de física. No canto, em caneta vermelha: 7,5.", proxima: "c0b_03" },
    c0b_03: { quem: "blake", texto: "A de plano inclinado eu acertei.", proxima: "c0b_04" },
    c0b_04: { tipo: "pensamento", texto: "Aquela única tarde no clube, antes do festival. Uma hora de plano inclinado. Ele não fez nenhuma pergunta. Só anotou tudo.", proxima: "c0b_05" },
    c0b_05: { quem: "blake", texto: "Valeu.", proxima: "c0b_esc0" },

    // ▶ ESCOLHA 1 — A prova do Blake
    c0b_esc0: { escolhas: [
      { texto: "A. “Eu falei que você conseguia.”", proxima: "c0b_0a_1", pontos: { blake: 1 }, flags: ["Blake_prova_falei"] },
      { texto: "B. “Sete e meio, Blake! Isso merece lámen.”", proxima: "c0b_0b_1", pontos: { blake: 1 }, flags: ["Blake_prova_lamen"] },
      { texto: "C. Devolver a prova e só fazer um sinal de positivo.", proxima: "c0b_0c_1", pontos: { blake: 2 }, flags: ["Blake_prova_sinal"] }
    ]},
    c0b_0a_1: { tipo: "narracao", texto: "Ele dá de ombros. Mas não discorda.", proxima: "c0b_06" },
    c0b_0b_1: { quem: "blake", texto: "O Kaito paga.", proxima: "c0b_0b_2" },
    c0b_0b_2: { quem: "kaito", sprite: "kaito", texto: "Eu ouvi isso.", proxima: "c0b_06" },
    c0b_0c_1: { tipo: "narracao", texto: "Ele olha para o polegar dela. Faz o mesmo sinal de volta. Pequeno. Quase escondido na altura da cintura.", proxima: "c0b_06" },
    c0b_06: { tipo: "narracao", sprite: "kaito", texto: "No fim do corredor, o Kaito espera, encostado na janela. O Blake guarda a prova no bolso e vai até ele. O Kaito dá um tapa na nuca dele. O Blake empurra o ombro do Kaito. O Kaito não sai do lugar.", proxima: "c0b_07" },
    c0b_07: { tipo: "narracao", sprite: null, texto: "Os dois descem a escada juntos, empurrando um ao outro, sem falar nada. Como fazem desde os sete anos.", proxima: "c1_01" },

    /* =================== CENA 1 — O BICICLETÁRIO =================== */
    // Cenário: bicicletário atrás da escola, quarta à tarde (usa "saida-colegio"). Música: silêncio, vento.
    c1_01: { tipo: "narracao", cenario: "bicicletario", transicao: "tempo", legenda: "Cena 1 — O bicicletário", sprite: null, texto: "No fim da aula, a SN vai pelo caminho de trás, pelo bicicletário. É mais longo. Ela gosta de ir por ali quando quer pensar.", proxima: "c1_02" },
    c1_02: { sprite: "sayuri", tipo: "narracao", texto: "A Sayuri está lá. Sozinha. Agachada do lado de uma bicicleta rosa, tentando abrir um cadeado com a mão direita. A esquerda continua escondida na manga.", proxima: "c1_03" },
    c1_03: { tipo: "narracao", texto: "O cadeado não abre. Ela tenta de novo. E de novo. Ela dá um tapa no cadeado, com raiva, e o casaco escorrega do pulso.", proxima: "c1_04" },
    c1_04: { tipo: "narracao", texto: "Quatro marcas roxas. Em volta do pulso. Do formato de dedos.", proxima: "c1_05" },
    c1_05: { tipo: "narracao", texto: "A Sayuri puxa a manga de volta. Rápido. Mas ela sabe que a SN viu.", proxima: "c1_06" },
    c1_06: { quem: "sayuri", texto: "...Você sempre aparece nos piores lugares, sabia?", proxima: "c1_07" },
    c1_07: { quem: "eu", texto: "Quer ajuda com o cadeado?", proxima: "c1_08" },
    c1_08: { tipo: "narracao", texto: "A Sayuri olha para ela como se ela tivesse falado em outra língua. De novo.", proxima: "c1_09" },
    c1_09: { quem: "sayuri", texto: "O segredo é 0-3-1-4. Ele trava. Você tem que puxar enquanto gira.", proxima: "c1_10" },
    c1_10: { tipo: "narracao", texto: "A SN agacha. Gira. Puxa. Com cuidado, para não arrancar o cadeado inteiro. Abre.", proxima: "c1_11" },
    c1_11: { tipo: "narracao", texto: "A Sayuri fica olhando para o cadeado aberto. Não pega a bicicleta. Fica agachada ali, do lado da SN, as duas no chão do bicicletário.", proxima: "c1_12" },
    c1_12: { quem: "sayuri", texto: "Você me viu no shopping.", proxima: "c1_13" },
    c1_13: { quem: "eu", texto: "Vi.", proxima: "c1_14" },
    c1_14: { quem: "sayuri", texto: "Ele também te viu. Na escada rolante. Ele perguntou quem era. Eu disse que não sabia. Ele não acreditou.", proxima: "c1_15" },
    c1_15: { tipo: "narracao", texto: "Ela aperta o pulso escondido com a outra mão. Sem perceber.", proxima: "c1_16" },
    c1_16: { quem: "eu", texto: "Ele é da sua família?", proxima: "c1_17" },
    c1_17: { quem: "sayuri", texto: "Não. Ele trabalha pra uma pessoa. Meu pai deve dinheiro pra essa pessoa. Muito dinheiro. E enquanto ele deve, eu faço o que mandam.", proxima: "c1_18" },
    c1_18: { quem: "sayuri", texto: "A página. As fotos. O balde. Tudo foi mandado. Eu só fui a mão.", proxima: "c1_19" },
    c1_19: { tipo: "narracao", texto: "Ela fala isso olhando para a roda da bicicleta. Sem chorar. Do jeito de quem já repetiu essa frase muitas vezes, sozinha, no escuro.", proxima: "c1_20" },
    c1_20: { quem: "eu", texto: "Quem é essa pessoa?", proxima: "c1_21" },
    c1_21: { quem: "sayuri", texto: "Eu não posso. Eu não posso, SN. Se eu falar, não sou eu que pago. É o meu irmão pequeno.", proxima: "c1_22" },
    c1_22: { quem: "sayuri", texto: "Mas eu vim te falar uma coisa. Por isso eu fiquei aqui com esse cadeado idiota, esperando você passar. Você sempre passa por aqui na quarta.", proxima: "c1_23" },
    c1_23: { tipo: "pensamento", texto: "Ela sabe por onde eu passo. Ela sabe que dia.", proxima: "c1_24" },
    c1_24: { quem: "sayuri", texto: "Essa pessoa pergunta de você. Não de mim. De você. Quem você é. Com quem você anda. Onde você mora. Eu não respondi nada que importa. Mas ele não precisa de mim pra descobrir.", proxima: "c1_25" },
    c1_25: { quem: "sayuri", texto: "Toma cuidado. Só isso. Eu te devo pelo menos isso.", proxima: "c1_cam1" },
    c1_cam1: { caminhos: [
      { flag: "Ofereceu_ajuda_Sayuri", proxima: "c1_ajuda" }
    ], proxima: "c1_esc1" },
    c1_ajuda: { quem: "sayuri", texto: "E sobre aquilo que você disse no banheiro. De me ajudar a dizer não. Eu pensei nisso todo dia. Ainda não dá. Mas eu pensei.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 2 — No bicicletário com a Sayuri
    c1_esc1: { escolhas: [
      { texto: "A. Tirar o próprio elástico de cabelo e amarrar no pulso dela, por cima das marcas. “Pra você lembrar que alguém sabe.”", proxima: "c1_1a_1", flags: ["Elastico_Sayuri"], pontos: { desvio: 1 } },
      { texto: "B. “Seu irmão. Quantos anos ele tem?”", proxima: "c1_1b_1", flags: ["Perguntou_irmao_Sayuri"] },
      { texto: "C. “Obrigada pelo aviso.” E deixar ela ir, sem perguntar mais nada.", proxima: "c1_1c_1", flags: ["Deixou_Sayuri_ir"] }
    ]},
    c1_1a_1: { tipo: "narracao", texto: "Ela tira o elástico preto do cabelo. Pega o pulso da Sayuri, devagar, por cima da manga. A Sayuri fica rígida. Não puxa.", proxima: "c1_1a_2" },
    c1_1a_2: { tipo: "narracao", texto: "A SN amarra o elástico por cima do casaco. Bem em cima de onde estão as marcas.", proxima: "c1_1a_3" },
    c1_1a_3: { quem: "sayuri", texto: "...Isso é ridículo. É um elástico.", proxima: "c1_1a_4" },
    c1_1a_4: { tipo: "narracao", texto: "Ela fala isso. Mas não tira.", proxima: "c1_26" },
    c1_1b_1: { tipo: "narracao", texto: "A Sayuri pisca. Ninguém nunca perguntou isso.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "sayuri", texto: "Oito. Ele gosta de dinossauro. Ele acha que eu sou a pessoa mais legal do mundo.", proxima: "c1_1b_3" },
    c1_1b_3: { tipo: "narracao", texto: "E, pela primeira vez, a Sayuri sorri. Não o sorriso de corredor. Um sorriso pequeno, torto, que parece de outra pessoa.", proxima: "c1_1b_4" },
    c1_1b_4: { quem: "sayuri", texto: "Ele não sabe de nada. E não vai saber.", proxima: "c1_26" },
    c1_1c_1: { tipo: "narracao", texto: "A Sayuri concorda com a cabeça. Pega a bicicleta. Sobe.", proxima: "c1_1c_2" },
    c1_1c_2: { tipo: "narracao", texto: "Antes de pedalar, ela fala, sem olhar para trás:", proxima: "c1_1c_3" },
    c1_1c_3: { quem: "sayuri", texto: "Você é a única pessoa dessa escola que não me pergunta nada quando eu não quero responder. Isso é pior do que se você me odiasse.", proxima: "c1_26" },

    // (todas as opções continuam aqui)
    c1_26: { tipo: "narracao", sprite: null, texto: "A Sayuri vai embora pedalando. O cadeado aberto fica pendurado no suporte de ferro, balançando.", proxima: "c1_27" },
    c1_27: { tipo: "pensamento", texto: "Alguém que empresta dinheiro. Que manda um homem de terno. Que usa uma menina de dezesseis anos como mão. Que pergunta de mim.", proxima: "c1_28" },
    c1_28: { tipo: "pensamento", texto: "Eu não vou contar pra ninguém. Não é meu pra contar. E se eu contar pro Kaito, ele vai atrás. E aí não é a Sayuri que paga. É ele.", proxima: "c2_01" },

    /* =================== CENA 2 — A CASA ESTÁ QUIETA =================== */
    // Cenário: hospital (usa "corredor") OU saída da escola. Música: piano baixo.
    c2_01: { caminhos: [
      { flag: "Ofereceu_hospital_Reina", proxima: "c2_h01" },
      { flag: "Pudim_com_Reina", proxima: "c2_p01" }
    ], proxima: "c2_n01" },

    // ---- Caminho: hospital (a SN prometeu ir junto) ----
    c2_h01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Cena 2 — O hospital", sprite: "reina", texto: "A Reina não desistiu. Ela está esperando no portão da escola com a mochila nas costas e um buquê pequeno de margaridas da banca da esquina.", proxima: "c2_h02" },
    c2_h02: { cenario: "corredor-hospital", tipo: "narracao", texto: "O hospital cheira a álcool e a sopa. No quarto 214, uma senhora pequena dorme com a boca entreaberta, cheia de fios no braço. A Reina troca as margaridas da semana passada por essas. Ajeita o cobertor. Ajeita de novo.", proxima: "c2_h03" },
    c2_h03: { quem: "reina", texto: "Vó. Essa é a SN. Aquela que eu falei. A irritante.", proxima: "c2_h04" },
    c2_h04: { tipo: "narracao", texto: "A avó não acorda. Mas a mão dela, em cima do cobertor, mexe um pouco. Os dedos se abrem. A Reina coloca a mão dela ali dentro. E fica.", proxima: "c2_h05" },
    c2_h05: { tipo: "narracao", texto: "Na saída, no corredor branco, a Reina fala sem olhar para ela.", proxima: "c2_h06" },
    c2_h06: { quem: "reina", texto: "A casa está quieta demais. Eu não durmo desde sexta. Eu fico ouvindo o relógio da cozinha. Amanhã... dorme lá em casa? Uma noite. Só uma.", proxima: "c2_conv" },

    // ---- Caminho: pudim combinado para quinta ----
    c2_p01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Cena 2 — A casa está quieta", sprite: "reina", texto: "Na saída, a Reina alcança a SN no portão. Ela tem uma sacola de supermercado na mão. Leite condensado. Ovos. Uma barra de chocolate grande.", proxima: "c2_p02" },
    c2_p02: { quem: "reina", texto: "Amanhã. O pudim. Não esqueci. Comprei tudo.", proxima: "c2_p03" },
    c2_p03: { tipo: "narracao", texto: "Ela para. Morde o lábio. Parece que vai dizer outra coisa e desiste. Depois diz.", proxima: "c2_p04" },
    c2_p04: { quem: "reina", texto: "O pudim tem que ficar na geladeira a noite inteira. Então... você podia dormir lá. Pra ver se rachou de manhã. A casa está quieta demais. Eu não durmo desde sexta.", proxima: "c2_conv" },

    // ---- Caminho: sem combinado ----
    c2_n01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Cena 2 — A casa está quieta", sprite: "reina", texto: "Na saída, a Reina alcança a SN no portão. Sem a Akane. Sozinha. Ela fica andando do lado sem falar nada durante um quarteirão inteiro.", proxima: "c2_n02" },
    c2_n02: { quem: "reina", texto: "Minha avó está melhor. Ela comeu gelatina hoje. Os médicos disseram que ela fica mais uma semana.", proxima: "c2_n03" },
    c2_n03: { quem: "reina", texto: "A casa está quieta demais. Eu não durmo desde sexta. Eu fico ouvindo o relógio da cozinha.", proxima: "c2_n04" },
    c2_n04: { quem: "reina", texto: "A Akane não pode, a mãe dela não deixa dormir fora no meio da semana. E eu não vou pedir pra Mio, ela ia transformar isso numa festa. Então... você. Amanhã. Uma noite. Não é convite. É... é um convite.", proxima: "c2_conv" },

    // (os caminhos continuam aqui)
    c2_conv: { tipo: "pensamento", texto: "A Reina está me pedindo pra não deixar ela sozinha. Do jeito dela. Que é brigando.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 3 — O convite da Reina
    c2_esc2: { escolhas: [
      { texto: "A. “Eu levo o meu travesseiro. O seu deve ser muito chique.”", proxima: "c2_2a_1", flags: ["Aceitou_dormir_Reina"] },
      { texto: "B. “Eu vou. E eu ronco. Você foi avisada.”", proxima: "c2_2b_1", flags: ["Aceitou_dormir_Reina", "Ronco_Reina"] },
      { texto: "C. “Só se você me deixar ver as suas fotos de bebê. Agora estamos quites com o Takeo.”", proxima: "c2_2c_1", flags: ["Aceitou_dormir_Reina", "Fotos_bebe_Reina"] }
    ]},
    c2_2a_1: { quem: "reina", texto: "É de pena de ganso. É mesmo. Você vai dormir no chão com um de espuma.", proxima: "c2_2a_2" },
    c2_2a_2: { tipo: "narracao", texto: "Mas ela sorri. Um sorriso inteiro, pela primeira vez desde segunda.", proxima: "c2_10" },
    c2_2b_1: { quem: "reina", texto: "Eu durmo de fone. Com barulho de chuva. Desde os doze anos.", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "eu", texto: "Por quê?", proxima: "c2_2b_3" },
    c2_2b_3: { quem: "reina", texto: "...Amanhã eu conto.", proxima: "c2_10" },
    c2_2c_1: { tipo: "narracao", texto: "A Reina para no meio da calçada. Horrorizada.", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "reina", texto: "Eu não tenho foto de bebê. Eu nasci assim. Linda. De franja.", proxima: "c2_2c_3" },
    c2_2c_3: { quem: "eu", texto: "Sua avó deve ter um álbum.", proxima: "c2_2c_4" },
    c2_2c_4: { tipo: "narracao", texto: "A Reina abre a boca. Fecha. Ela sabe que tem. Ela sabe exatamente em qual gaveta.", proxima: "c2_2c_5" },
    c2_2c_5: { quem: "reina", texto: "...Uma foto. Uma. E se você rir, eu te expulso de madrugada.", proxima: "c2_10" },

    // (todas as opções continuam aqui)
    c2_10: { cenario: "quarto-sn", tipo: "narracao", sprite: null, texto: "À noite, ela manda mensagem para a mãe. A resposta vem em dois minutos.", proxima: "c2_11" },
    c2_11: { quem: "mensagem", rotulo: "Mensagem — Mãe", texto: "Pode. Leva escova de dente. Me manda o endereço. E manda mensagem antes de dormir.", proxima: "c2_12" },
    c2_12: { tipo: "pensamento", texto: "Na outra vida, ninguém nunca me chamou pra dormir na casa de ninguém. Minha mãe nunca precisou mandar essa mensagem.", proxima: "c2b_10" },
    /* =================== CENA 2.5 — ELA FALOU =================== */
    // Cenário: pátio, quinta no almoço (usa "patio-fundos"). Música: violão, depois silêncio.
    c2b_10: { roupa: "semlaco", tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Quinta-feira", sprite: null, texto: "Quinta. No almoço, o pátio está cheio. A SN e a Mio estão no banco de sempre, dividindo um pão de queijo. Do outro lado, perto da arquibancada, o Kaito, o Ryuji e o Blake.", proxima: "c2b_11" },
    c2b_11: { tipo: "narracao", texto: "O Ryuji está contando alguma coisa com os braços. O Kaito come. O Blake só está ali. Grande e quieto, como sempre.", proxima: "c2b_12" },
    c2b_12: { tipo: "narracao", sprite: "mio", texto: "A Mio não está olhando para ele. Ela está olhando para o pão de queijo com muita concentração. Toda vez que ele se mexe, ela para de mastigar.", proxima: "c2b_13" },
    c2b_13: { tipo: "narracao", sprite: null, texto: "E então a Sayuri atravessa o pátio. Sozinha. Sem as amigas. Com o laço rosa e a manga puxada sobre a mão esquerda. Ela para na frente do banco dos meninos.", proxima: "c2b_14" },
    c2b_14: { tipo: "narracao", texto: "O Ryuji para no meio da história. O Kaito para de comer. De repente, o pátio inteiro está prestando atenção.", proxima: "c2b_15" },
    c2b_15: { quem: "sayuri", texto: "Blake.", proxima: "c2b_16" },
    c2b_16: { tipo: "narracao", sprite: "blake", texto: "Ele levanta os olhos. Devagar.", proxima: "c2b_17" },
    c2b_17: { quem: "sayuri", texto: "Eu ainda gosto de você. Desde o primeiro ano. Nunca parei.", proxima: "c2b_18" },
    c2b_18: { quem: "sayuri", texto: "Sai comigo no sábado. Sorvete. Só isso.", proxima: "c2b_19" },
    c2b_19: { tipo: "narracao", texto: "Ela fala assim. Direto. Na frente de todo mundo. Sem rir, sem desviar. É a coisa mais corajosa que a SN já viu a Sayuri fazer.", proxima: "c2b_20" },
    c2b_20: { tipo: "narracao", texto: "Do lado da SN, a Mio parou de respirar.", proxima: "c2b_21" },
    c2b_21: { tipo: "narracao", texto: "O Blake fica quieto. Muito tempo. O Kaito olha para ele. O Ryuji olha para a Mio, e depois para o chão.", proxima: "c2b_22" },
    c2b_22: { quem: "blake", texto: "...Tá.", proxima: "c2b_23" },
    c2b_23: { tipo: "narracao", sprite: null, texto: "A Sayuri sorri. Um sorriso pequeno, de verdade, que não é de corredor. Vira e vai embora. O pátio volta a fazer barulho aos poucos, como se alguém aumentasse o volume.", proxima: "c2b_24" },
    c2b_24: { tipo: "narracao", sprite: "kaito", texto: "No banco, o Kaito fala baixo com o Blake. A SN só ouve porque está perto da lixeira, jogando fora o papel do pão de queijo.", proxima: "c2b_25" },
    c2b_25: { sprite: "mio", quem: "kaito", texto: "Você tem certeza?", proxima: "c2b_26" },
    c2b_26: { quem: "blake", sprite: "blake", texto: "Ela falou.", proxima: "c2b_27" },
    c2b_27: { quem: "kaito", sprite: "kaito", texto: "E daí?", proxima: "c2b_28" },
    c2b_28: { quem: "blake", sprite: "blake", texto: "Ninguém mais falou.", proxima: "c2b_29" },
    c2b_29: { tipo: "narracao", sprite: null, texto: "O Kaito não responde. Olha para o banco da Mio. Depois para o Blake. E volta a comer, sem vontade nenhuma.", proxima: "c2b_30" },
    c2b_30: { tipo: "pensamento", texto: "“Ninguém mais falou.” A Mio passa o dia inteiro em volta dele. Leva band-aid. Lembra do sabor de sorvete que ele gosta. Mas nunca falou. E ele, que nunca vai falar primeiro, estava esperando alguém falar.", proxima: "c2b_31" },
    c2b_31: { tipo: "pensamento", texto: "A Sayuri falou.", proxima: "c2b_32" },
    c2b_32: { tipo: "narracao", sprite: "mio", texto: "A Mio está com o pão de queijo parado na mão. O sorriso dela continua no rosto. Mas fica parado, como uma foto.", proxima: "c2b_cam1" },
    c2b_cam1: { caminhos: [
      { flag: "Manda_carta_Blake", proxima: "c2b_mio_livraria" }
    ], proxima: "c2b_mio_normal" },
    c2b_mio_livraria: { quem: "mio", texto: "Sábado ele largou o balcão e veio falar comigo. Quatro frases. Quatro! O Blake! Eu achei que...", proxima: "c2b_33" },
    c2b_mio_normal: { quem: "mio", texto: "Eu achei que ele sabia. Que não precisava falar. Que ele... sei lá. Eu achei que...", proxima: "c2b_33" },
    c2b_33: { tipo: "narracao", texto: "Ela não termina. Ela ri. Um riso agudo, rápido, errado.", proxima: "c2b_34" },
    c2b_34: { quem: "mio", texto: "Tá tudo bem. Ele não é meu namorado. Eu nunca falei nada pra ele. Nunca. Então ele não me deve nada. Tá tudo bem.", proxima: "c2b_35" },
    c2b_35: { tipo: "narracao", texto: "A voz dela quebra no último “bem”.", proxima: "c2b_esc1" },

    // ▶ ESCOLHA 4 — A Mio no banco
    c2b_esc1: { escolhas: [
      { texto: "A. Segurar a mão dela, sem falar nada.", proxima: "c2b_1a_1", pontos: { mio: 3 }, flags: ["Segurou_Mio_patio"] },
      { texto: "B. “Ainda dá tempo de falar, Mio.”", proxima: "c2b_1b_1", pontos: { mio: 2 }, flags: ["Ainda_da_tempo_Mio"] },
      { texto: "C. “Vem. A gente sai daqui.”", proxima: "c2b_1c_1", pontos: { mio: 2 }, flags: ["Tirou_Mio_patio"] }
    ]},
    c2b_1a_1: { tipo: "narracao", texto: "Ela segura. A Mio não olha para ela. Mas aperta de volta, forte, até os dedos ficarem brancos.", proxima: "c2b_36" },
    c2b_1b_1: { quem: "mio", texto: "Tempo? Ele disse sim. Na frente da escola inteira.", proxima: "c2b_1b_2" },
    c2b_1b_2: { quem: "eu", texto: "Ele disse sim pra um sorvete. Não pra vida inteira.", proxima: "c2b_1b_3" },
    c2b_1b_3: { tipo: "narracao", texto: "A Mio olha para ela. Os olhos molhados. Por um segundo, alguma coisa acende lá dentro. Depois apaga de novo.", proxima: "c2b_1b_4" },
    c2b_1b_4: { quem: "mio", texto: "...Eu não sei falar essas coisas. Eu falo tudo. Menos isso.", proxima: "c2b_36" },
    c2b_1c_1: { tipo: "narracao", texto: "A Mio levanta rápido. Rápido demais. As duas saem do pátio pelo corredor lateral. No caminho, a Hana aparece do nada e vai junto, sem perguntar nada.", proxima: "c2b_36" },
    c2b_36: { tipo: "pensamento", texto: "Eu não posso contar pra Mio que o balde foi mandado. Não é meu pra contar. E isso não muda o que aconteceu hoje. A Sayuri falou porque quis.", proxima: "c2b_37" },
    c2b_37: { tipo: "pensamento", texto: "E eu? Eu não sei por que aquele “tá” me incomodou também. Um pouco. Só um pouco.", proxima: "c3_01" },

    /* =================== CENA 3 — O PUDIM QUE RACHA =================== */
    // Cenário: casa da Reina, quinta à noite (usa "apartamento"). Música: violão leve, calmo.
    c3_01: { roupa: null, tipo: "narracao", cenario: "casa-reina", transicao: "tempo", legenda: "Cena 3 — O pudim que racha", sprite: null, texto: "Quinta-feira, sete da noite. A casa da Reina fica no bairro alto, numa rua com árvore dos dois lados e câmera em todo portão. É enorme. Dois andares, um jardim com uma fonte desligada, uma cozinha do tamanho do apartamento inteiro da SN.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "A sala é grande, branca e cinza, com tudo no lugar. Nenhuma almofada torta. Só uma parede é diferente: a de fotos. Muitas. Todas com as mesmas duas pessoas. Uma menina de franja, crescendo foto por foto. E uma senhora de cabelo curto, ficando mais pequena foto por foto.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", texto: "Nenhuma foto com mais ninguém.", proxima: "c3_04" },
    c3_04: { tipo: "pensamento", texto: "Ela fala como quem mora numa casa assim. E mora. Mas uma casa desse tamanho, com uma pessoa só dentro, deve fazer muito barulho de relógio à noite.", proxima: "c3_05" },
    c3_05: { tipo: "narracao", sprite: "reina", texto: "A Reina para no meio da sala. Olha para as fotos. Para a SN olhando as fotos.", proxima: "c3_06" },
    c3_06: { quem: "reina", texto: "É só a gente. Desde os seis. A casa é dos meus pais. Eles pagam tudo. De longe. Não pergunta do resto, que hoje eu não tenho vontade de contar.", proxima: "c3_07" },
    c3_07: { quem: "eu", texto: "Não vou perguntar.", proxima: "c3_08" },
    c3_08: { quem: "reina", texto: "Eu sei. Por isso eu te chamei.", proxima: "c3_cam0" },
    c3_cam0: { caminhos: [ { flag: "Fotos_bebe_Reina", proxima: "c3_foto1" } ], proxima: "c3_09" },
    c3_foto1: { tipo: "narracao", texto: "Ela abre a gaveta do rack. Sem procurar. Tira uma foto só e entrega virada para baixo.", proxima: "c3_foto2" },
    c3_foto2: { tipo: "narracao", texto: "Uma bebê de franja já. Franja de verdade, cortada torta, com um laço enorme na cabeça. Chorando. Segurando uma colher de pau maior do que ela.", proxima: "c3_foto3" },
    c3_foto3: { quem: "reina", texto: "A franja foi ela. Eu tinha um ano. Ela disse que eu já nasci com cara de quem precisava de franja.", proxima: "c3_foto4" },
    c3_foto4: { tipo: "narracao", texto: "A SN não ri. Ela promete que não vai rir. Ela segura por sete segundos. No oitavo, as duas riem juntas.", proxima: "c3_09" },
    c3_09: { cenario: "cozinha-reina", tipo: "narracao", sprite: null, texto: "Na cozinha, em cima de um gancho, um avental florido. Gasto. Com uma mancha de calda antiga no bolso. A Reina pega. Fica segurando um tempo. Depois veste.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", sprite: "reina", texto: "Fica enorme nela. Ela dá duas voltas com o laço.", proxima: "c3_11" },
    c3_11: { quem: "reina", texto: "Leite condensado, leite, ovos. Bate. Caramelo na forma. Banho-maria. Uma hora. Ela falava isso igual a uma reza. Eu sei de cor.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", texto: "Ela mede tudo com uma lata vazia de leite condensado. Sem balança. Do jeito que aprendeu em pé numa cadeira. A SN quebra os ovos. Quebra um com força demais e a gema escorre pelo balcão.", proxima: "c3_13" },
    c3_13: { quem: "reina", texto: "Você quebra ovo igual quem quebra porta.", proxima: "c3_14" },
    c3_14: { quem: "eu", texto: "Eu nunca quebrei uma porta.", proxima: "c3_15" },
    c3_15: { quem: "reina", texto: "Você segurou uma viga. Eu tenho minhas dúvidas.", proxima: "c3_16" },
    c3_16: { tipo: "narracao", texto: "O caramelo queima na primeira vez. A cozinha inteira fica com cheiro de açúcar queimado. A Reina abre a janela, tossindo, e ri. Na segunda vez, dá certo.", proxima: "c3_17" },
    c3_17: { tipo: "narracao", texto: "Quando o pudim vai para o forno, as duas sentam no chão da cozinha, encostadas no armário, esperando. O relógio da parede faz tic, tic, tic.", proxima: "c3_18" },
    c3_18: { quem: "reina", texto: "É esse relógio. Que eu fico ouvindo. Tic, tic, tic. A noite inteira. Com ela aqui, eu nunca ouvia.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 5 — Esperando o pudim
    c3_esc3: { escolhas: [
      { texto: "A. Tirar o relógio da parede e colocar dentro da gaveta de panos de prato.", proxima: "c3_3a_1", flags: ["Escondeu_relogio_Reina"] },
      { texto: "B. Começar a cantar baixinho uma música qualquer. Desafinada. Para o relógio sumir.", proxima: "c3_3b_1", flags: ["Cantou_Reina"] },
      { texto: "C. “Me conta uma coisa da sua avó. Qualquer coisa. Uma por tic.”", proxima: "c3_3c_1", flags: ["Historias_avo_Reina"] }
    ]},
    c3_3a_1: { tipo: "narracao", texto: "Ela levanta. Tira o relógio do prego. Abre a gaveta. Coloca lá dentro, embaixo de três panos de prato. Fecha.", proxima: "c3_3a_2" },
    c3_3a_2: { tipo: "narracao", texto: "O tic fica abafado. Quase nada. A Reina fica olhando para a gaveta, de boca aberta.", proxima: "c3_3a_3" },
    c3_3a_3: { quem: "reina", texto: "...Eu não tinha pensado nisso. Seis dias. Eu não pensei em tirar da parede.", proxima: "c3_3a_4" },
    c3_3a_4: { quem: "eu", texto: "Às vezes a gente precisa de alguém de fora pra ver.", proxima: "c3_19" },
    c3_3b_1: { tipo: "narracao", texto: "Ela canta. A música da escada. A da cidade que o cara nunca visitou. Ela não lembra a letra inteira, então inventa a metade.", proxima: "c3_3b_2" },
    c3_3b_2: { quem: "reina", texto: "Você canta horrível.", proxima: "c3_3b_3" },
    c3_3b_3: { quem: "eu", texto: "Eu sei.", proxima: "c3_3b_4" },
    c3_3b_4: { quem: "reina", texto: "Não para.", proxima: "c3_3b_5" },
    c3_3b_5: { tipo: "narracao", texto: "Ela não para. E, no segundo refrão, a Reina encosta a cabeça no armário e fecha os olhos. Pela primeira vez em seis dias, ela não está ouvindo o relógio.", proxima: "c3_19" },
    c3_3c_1: { tipo: "narracao", texto: "A Reina pensa. Tic.", proxima: "c3_3c_2" },
    c3_3c_2: { quem: "reina", texto: "Ela odeia pombo.", proxima: "c3_3c_3" },
    c3_3c_3: { tipo: "narracao", texto: "Tic.", proxima: "c3_3c_4" },
    c3_3c_4: { quem: "reina", texto: "Ela ganhou um concurso de dança em 1979. Ela tem o troféu no armário do quarto. Ela fala dele toda semana.", proxima: "c3_3c_5" },
    c3_3c_5: { tipo: "narracao", texto: "Tic.", proxima: "c3_3c_6" },
    c3_3c_6: { quem: "reina", texto: "Quando eu tinha doze anos, eu tinha pesadelo toda noite. Ela colocava um rádio do lado da minha cama, no chiado. Ela dizia que era barulho de chuva. Por isso eu durmo de fone até hoje.", proxima: "c3_3c_7" },
    c3_3c_7: { tipo: "narracao", texto: "Ela continua. Uma história por tic. A SN para de contar os tics. A Reina não para de contar as histórias até o forno apitar.", proxima: "c3_19" },

    // (todas as opções continuam aqui)
    c3_19: { tipo: "narracao", sprite: null, texto: "Uma hora depois, o pudim sai do forno. Vai para a geladeira, ainda quente, coberto com um pano.", proxima: "c3_20" },
    c3_20: { quem: "reina", sprite: "reina", texto: "Amanhã de manhã a gente desenforma. Se rachar, a culpa é sua. Você quebrou o ovo igual porta.", proxima: "c4_01" },

    /* =================== CENA 4 — NO ESCURO =================== */
    // Cenário: quarto da Reina (usa "apartamento"), luz apagada. Música: piano muito baixo.
    c4_01: { roupa: "pijama", tipo: "narracao", cenario: "quarto-reina", transicao: "tempo", legenda: "Cena 4 — No escuro", sprite: null, texto: "Onze da noite. O quarto da Reina é do tamanho da sala da SN. Cama enorme, pôster de banda, uma escrivaninha arrumada demais e um armário com uma jaqueta preta pendurada na porta. Com um lírio bordado nas costas.", proxima: "c4_02" },
    c4_02: { foto: "sn-pijama", tipo: "narracao", texto: "A casa tem três quartos de hóspede. A Reina mandou colocar um colchão no chão do quarto dela mesmo assim. “Os outros são longe demais.” A luz apagada. Só o brilho do jardim pela persiana.", proxima: "c4_03" },
    c4_03: { quem: "reina", texto: "Tá acordada?", proxima: "c4_04" },
    c4_04: { quem: "eu", texto: "Tô.", proxima: "c4_05" },
    c4_05: { quem: "reina", texto: "Posso te contar uma coisa? No escuro não conta. Amanhã a gente finge que eu não falei.", proxima: "c4_06" },
    c4_06: { quem: "eu", texto: "Pode.", proxima: "c4_07" },
    c4_07: { quem: "reina", texto: "Eu gosto do Takeo. Isso você já sabe. Mas você não sabe desde quando.", proxima: "c4_08" },
    c4_08: { quem: "reina", texto: "Eu tinha treze anos. Foi o dia em que a minha avó foi parar no hospital pela primeira vez. Eu fiquei sentada no ponto de ônibus da frente, de uniforme de colégio particular, chorando igual uma idiota. Passaram três ônibus. Eu não subi em nenhum.", proxima: "c4_09" },
    c4_09: { quem: "reina", texto: "Aí um menino de óculos torto sentou do meu lado. Não falou nada. Não perguntou nada. Tirou da mochila uma caixinha de leite de morango, colocou no banco do meu lado. E ficou. Até escurecer. Até a minha avó sair andando pela porta.", proxima: "c4_09b" },
    c4_09b: { tipo: "narracao", texto: "No escuro, a SN para de respirar.", proxima: "c4_09c" },
    c4_09c: { quem: "reina", texto: "Eu odeio morango. Eu bebi tudo. E ele foi embora sem falar o nome. Eu passei dois anos procurando aquele óculos torto em todo lugar. Em todo ônibus. Em toda escola que eu passava na frente.", proxima: "c4_09d" },
    c4_09d: { quem: "reina", texto: "No começo do ano, eu vi uma foto de uma excursão no celular da Akane. Da sua escola. E lá atrás, no canto, meio cortado... o óculos torto.", proxima: "c4_09e" },
    c4_09e: { quem: "reina", texto: "Por que você acha que eu pedi transferência no meio do ano? Pela comida da cantina?", proxima: "c4_09f" },
    c4_09f: { quem: "reina", texto: "Ele não lembra de mim. Segunda ele me deu leite de morango de novo. Disse que era o único da máquina. Ele não lembra. Ele faz isso com todo mundo, né?", proxima: "c4_09g" },
    c4_09g: { tipo: "pensamento", texto: "Faz. Com todo mundo que está sozinho. A avó dele me contou. Ele começou a fazer isso por minha causa. Pra que, se eu voltasse sozinha, alguém sentasse do meu lado.", proxima: "c4_09h" },
    c4_09h: { tipo: "pensamento", texto: "E uma dessas pessoas foi a Reina. Num ponto de ônibus. Aos treze anos.", proxima: "c4_09i" },
    c4_09i: { tipo: "pensamento", texto: "Eu não vou contar isso pra ela. Se um dia ele lembrar, é ele quem conta.", proxima: "c4_09j" },
    c4_09j: { quem: "reina", texto: "Pronto. Falei. Agora você. De quem você gosta?", proxima: "c4_09k" },
    c4_09k: { quem: "reina", texto: "E não vale dizer “ninguém”. No escuro ninguém mente. Essa é a regra.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 6 — No escuro: de quem a SN gosta?
    c4_esc4: { sugerir: true, escolhas: [
      { texto: "A. “...Do Kaito.”", proxima: "c4_k1", pontos: { kaito: 2 }, flags: ["Contou_Kaito_Reina"], personagem: "kaito" },
      { texto: "B. “...Do Blake.”", proxima: "c4_b1", pontos: { blake: 2 }, flags: ["Contou_Blake_Reina"], personagem: "blake" },
      { texto: "C. “...Do Takeo.”", proxima: "c4_t1", pontos: { takeo: 2 }, flags: ["Contou_Takeo_Reina", "Admitiu_Takeo_Reina"], personagem: "takeo" },
      { texto: "D. “...Do Ryuji.”", proxima: "c4_r1", pontos: { ryuji: 2 }, flags: ["Contou_Ryuji_Reina"], personagem: "ryuji" },
      { texto: "E. “...Do Victor.”", proxima: "c4_v1", pontos: { victor: 2 }, flags: ["Contou_Victor_Reina"], personagem: "victor" }
    ]},

    // ---- Kaito ----
    c4_k1: { quem: "reina", texto: "O do lámen! Eu sabia. Ninguém aparece com dois lámen que ninguém pediu por acaso.", proxima: "c4_k2" },
    c4_k2: { quem: "reina", texto: "Mas ele é difícil, hein. Ele fala, sei lá, três palavras por dia.", proxima: "c4_k3" },
    c4_k3: { quem: "eu", texto: "Quatro. Quando está de bom humor.", proxima: "c4_k4" },
    c4_k4: { quem: "reina", texto: "E ele sabe?", proxima: "c4_k5" },
    c4_k5: { quem: "eu", texto: "Acho que não. Ou acha que não. Com ele nunca dá pra ter certeza.", proxima: "c4_k6" },
    c4_k6: { tipo: "narracao", texto: "A Reina fica quieta um tempo. Depois fala mais baixo. Sem provocar.", proxima: "c4_k7" },
    c4_k7: { quem: "reina", texto: "Toma cuidado. Ele é do tipo que protege tanto que esquece de dizer. E aí um dia você cansa de adivinhar.", proxima: "c4_k8" },
    c4_k8: { quem: "reina", texto: "...Mas é bom. É um bom gosto. Pelo menos não é o meu. Assim a gente não briga.", proxima: "c4_10" },

    // ---- Blake ----
    c4_b1: { tipo: "narracao", texto: "Silêncio. A Reina vira de lado na cama. A SN escuta o lençol.", proxima: "c4_b2" },
    c4_b2: { quem: "reina", texto: "O grandão calado? O que fala uma palavra por semana? O que disse “tá” pra Sayuri hoje no pátio, na frente da escola inteira?", proxima: "c4_b3" },
    c4_b3: { quem: "eu", texto: "Eu sei.", proxima: "c4_b4" },
    c4_b4: { quem: "reina", texto: "E a Mio. Que é sua melhor amiga. E que gosta dele desde sempre. Você gosta de complicação, hein.", proxima: "c4_b5" },
    c4_b5: { quem: "eu", texto: "Eu não sei se é gostar. Ele não fala nada. Mas ele faria qualquer coisa pelo Kaito. E ele lembra de tudo que a Mio fala. Ele só não diz.", proxima: "c4_b6" },
    c4_b6: { quem: "reina", texto: "Ele é do tipo que espera alguém falar primeiro. A Sayuri falou. Pronto. Quem demora perde a vez.", proxima: "c4_b7" },
    c4_b7: { quem: "reina", texto: "Mas sorvete não é casamento. Se não der em nada, a vez volta. E aí ninguém pode demorar.", proxima: "c4_10" },
    // ---- Takeo: briga besta e engraçada ----
    c4_t1: { tipo: "narracao", texto: "Silêncio. Um silêncio enorme. Depois, o barulho da Reina sentando na cama de uma vez.", proxima: "c4_t2" },
    c4_t2: { quem: "reina", texto: "EU SABIA. Eu SABIA. Você é muito cara de pau! Eu acabei de te contar a história do leite de morango!", proxima: "c4_t3" },
    c4_t3: { quem: "eu", texto: "Você perguntou! “No escuro ninguém mente”, foi você que falou!", proxima: "c4_t4" },
    c4_t4: { quem: "reina", texto: "Era pra você mentir por educação!", proxima: "c4_t5" },
    c4_t5: { quem: "eu", texto: "Eu conheço ele desde os seis anos! Eu tenho foto com ele embaixo de um cobertor de patinho!", proxima: "c4_t6" },
    c4_t6: { quem: "reina", texto: "E eu tenho um leite de morango num ponto de ônibus! É muito mais romântico que patinho!", proxima: "c4_t7" },
    c4_t7: { quem: "eu", texto: "Você odeia morango.", proxima: "c4_t8" },
    c4_t8: { quem: "reina", texto: "POR ISSO QUE É ROMÂNTICO!", proxima: "c4_t9" },
    c4_t9: { tipo: "narracao", texto: "Um travesseiro voa no escuro e acerta a SN na cara. O de pena de ganso. Ela pega. E joga de volta. Com um pouquinho de força demais.", proxima: "c4_t10" },
    c4_t10: { tipo: "narracao", efeito: "tremor", texto: "O travesseiro explode no ar. Pena para todo lado. No cabelo, na cama, no pôster da banda, na boca aberta da Reina.", proxima: "c4_t11" },
    c4_t11: { quem: "reina", texto: "...Era da Itália.", proxima: "c4_t12" },
    c4_t12: { quem: "eu", texto: "Desculpa.", proxima: "c4_t13" },
    c4_t13: { tipo: "narracao", texto: "A Reina olha para ela, coberta de pena. A SN olha de volta, coberta de pena. E as duas começam a rir. Tanto que a Reina cai da cama e continua rindo no chão, em cima do colchão de espuma.", proxima: "c4_t14" },
    c4_t14: { quem: "reina", texto: "Tá. Então é briga. Mas briga limpa. Nada de cobertor de patinho na frente da avó dele.", proxima: "c4_t15" },
    c4_t15: { quem: "eu", texto: "E nada de pudim de padaria.", proxima: "c4_t16" },
    c4_t16: { quem: "reina", texto: "...Golpe baixo. Mas tá. Briga limpa. E eu vou ganhar.", proxima: "c4_t17" },
    c4_t17: { quem: "eu", texto: "Vamos ver.", proxima: "c4_t18" },
    c4_t18: { tipo: "narracao", texto: "Elas passam meia hora catando pena no escuro. Não conseguem nem metade. A Reina dorme com uma pena presa na franja, e a SN não avisa.", proxima: "c4_10" },

    // ---- Ryuji ----
    c4_r1: { tipo: "narracao", texto: "Um segundo de silêncio. Depois, um barulho abafado. A Reina rindo com a cara enfiada no travesseiro.", proxima: "c4_r2" },
    c4_r2: { quem: "reina", texto: "O BARULHENTO? O que grita no pátio? O que perdeu o celular pra uma cadeira?", proxima: "c4_r3" },
    c4_r3: { quem: "eu", texto: "Ele não é só barulhento.", proxima: "c4_r4" },
    c4_r4: { quem: "eu", texto: "Ele passou duas horas numa loja de brinquedos escolhendo coelho pra irmã de nove anos. E, quando ninguém está olhando, ele é a pessoa mais gentil do mundo. Ele só finge que é palhaço.", proxima: "c4_r5" },
    c4_r5: { tipo: "narracao", texto: "A Reina para de rir.", proxima: "c4_r6" },
    c4_r6: { quem: "reina", texto: "...Isso foi bonito. Eu odeio quando você fala bonito. Me dá raiva.", proxima: "c4_r7" },
    c4_r7: { quem: "reina", texto: "Mas se vocês dois namorarem, eu não vou em festa nenhuma. Ele vai fazer discurso. Vai ser uma hora de discurso.", proxima: "c4_10" },

    // ---- Victor ----
    c4_v1: { quem: "reina", texto: "O DO CACHORRO NA MOCHILA?", proxima: "c4_v2" },
    c4_v2: { quem: "reina", texto: "Ele chama todo mundo de gatinha! Ele me chamou de gatinha na frente do portão na sexta passada! Na frente da Akane!", proxima: "c4_v3" },
    c4_v3: { quem: "eu", texto: "Ele adotou um cachorro que levou um chute na rua. Ele leva o cachorro pra aula escondido porque o cachorro tem medo de ficar sozinho.", proxima: "c4_v4" },
    c4_v4: { tipo: "narracao", texto: "A Reina abre a boca para responder. Fecha.", proxima: "c4_v5" },
    c4_v5: { quem: "reina", texto: "...Tá. Isso conta ponto. Muito ponto. Eu odeio que isso conte ponto.", proxima: "c4_v6" },
    c4_v6: { quem: "reina", texto: "Mas se ele te chamar de gatinha na minha frente, eu jogo um pudim nele. E não vai ser de padaria. Vai ser um caseiro. Que pesa mais.", proxima: "c4_10" },

    // (todas as opções continuam aqui)
    c4_10: { tipo: "narracao", texto: "O celular da SN vibra embaixo do travesseiro.", proxima: "c4_11" },
    c4_11: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "O Ryuji disse que a Mio disse que você está dormindo fora. Na casa da Reina.", proxima: "c4_12" },
    c4_12: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "O bairro dela é tranquilo. Mas a avenida do viaduto, no caminho pra sua casa, é ruim de manhã cedo. Não passa sozinha por lá.", proxima: "c4_13" },
    c4_13: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Se precisar, eu passo lá às sete. É caminho.", proxima: "c4_14" },
    c4_14: { tipo: "pensamento", texto: "Nunca é caminho. Nunca.", proxima: "c4_15" },
    c4_15: { quem: "reina", texto: "Quem é? Você está sorrindo no escuro. Dá pra ver a luz do celular na sua cara.", proxima: "c4_16" },
    c4_16: { quem: "eu", texto: "Ninguém.", proxima: "c4_17" },
    c4_17: { quem: "reina", texto: "Ninguém de lámen ou ninguém de livraria?", proxima: "c4_esc5" },

    // ▶ ESCOLHA 7 — Resposta para o Kaito
    c4_esc5: { escolhas: [
      { texto: "A. “Pode passar. Sete horas.”", proxima: "c4_5a_1", pontos: { kaito: 2 }, flags: ["Kaito_buscar_sete"] },
      { texto: "B. “Não precisa. Eu sei me cuidar. Mas obrigada.”", proxima: "c4_5b_1", pontos: { kaito: 1 }, flags: ["Recusou_Kaito_buscar"] },
      { texto: "C. “Boa noite, Kaito.” E nada mais.", proxima: "c4_5c_1", pontos: { kaito: 2 }, flags: ["Boa_noite_Kaito"] }
    ]},
    c4_5a_1: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Sete.", proxima: "c4_5a_2" },
    c4_5a_2: { tipo: "narracao", texto: "Só isso. Uma palavra. Ela fica olhando para ela por muito tempo.", proxima: "c4_18" },
    c4_5b_1: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu sei que sabe. Eu que não sei não me preocupar.", proxima: "c4_5b_2" },
    c4_5b_2: { tipo: "narracao", texto: "Ela lê três vezes. A Reina pergunta de novo quem é. Ela não responde.", proxima: "c4_18" },
    c4_5c_1: { tipo: "narracao", texto: "A resposta demora. Os três pontinhos aparecem. Somem. Aparecem de novo. Somem.", proxima: "c4_5c_2" },
    c4_5c_2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Boa noite.", proxima: "c4_5c_3" },
    c4_5c_3: { tipo: "pensamento", texto: "Ele escreveu e apagou alguma coisa três vezes antes de mandar só isso. Eu vi os pontinhos.", proxima: "c4_18" },

    // (todas as opções continuam aqui)
    c4_18: { tipo: "narracao", texto: "Meia-noite e pouco. A respiração da Reina fica lenta. Ela dormiu. Com o fone no ouvido, tocando chuva baixinho. E com a mão pendurada para fora da cama, perto do colchão da SN.", proxima: "c4_19" },
    c4_19: { tipo: "narracao", texto: "A SN fica olhando para aquela mão no escuro. Depois segura. Leve. A Reina não acorda. Mas os dedos dela fecham.", proxima: "c4_20" },
    c4_20: { tipo: "pensamento", texto: "Na outra vida, a Reina sumiu da escola no meio do segundo ano. Ninguém soube pra onde. Teve um boato de que ela tinha ido morar com uma tia em outra cidade. Teve outro boato pior.", proxima: "c4_21" },
    c4_21: { tipo: "pensamento", texto: "Eu nunca soube que ela tinha uma avó. Que fazia pudim. Que dormia ouvindo chuva.", proxima: "c4_22" },
    c4_22: { tipo: "pensamento", texto: "Ela vai ficar. Dessa vez ela vai ficar. Eu não sei como ainda. Mas ela vai.", proxima: "c5_01" },

    /* =================== CENA 5 — XEQUE =================== */
    // Cenário: rua em frente à casa da Reina, sexta, 6h40 (usa "saida-colegio"). Música: corta. Depois tema do Ren.
    c5_01: { tipo: "narracao", cenario: "cozinha-reina", transicao: "tempo", legenda: "Sexta-feira, 6h40", sprite: null, texto: "De manhã, o pudim rachou. No meio. Uma linha fina, de ponta a ponta. A Reina olhou para ele por um segundo inteiro. Depois riu. Riu tanto que precisou sentar no chão da cozinha.", proxima: "c5_02" },
    c5_02: { quem: "reina", sprite: "reina", texto: "Rachou igual ao dela! Exatamente igual! Eu vou levar pro hospital assim mesmo. Ela vai reconhecer.", proxima: "c5_03" },
    c5_03: { cenario: "frente-casa-reina", tipo: "narracao", sprite: null, texto: "A SN sai antes, para passar em casa e trocar de uniforme. A Reina fica arrumando o pudim num pote. A rua está vazia, cinza, molhada de sereno. Cheiro de pão da padaria da esquina.", proxima: "c5_04" },
    c5_04: { tipo: "narracao", texto: "Na esquina, ela para para amarrar o tênis. Quando levanta a cabeça, do outro lado da rua, alguém está passando.", proxima: "c5_05" },
    c5_05: { sprite: "ren", tipo: "narracao", texto: "O Ren. De uniforme. Fone de ouvido. Uma sacola de padaria numa mão. Andando sem pressa, como quem passa por ali todo dia.", proxima: "c5_06" },
    c5_06: { tipo: "pensamento", texto: "Duas semanas sem aparecer na escola. “Com atestado.” E ele está aqui. Às seis e quarenta da manhã. A uma quadra da casa da Reina. Ele mora do outro lado da cidade.", proxima: "c5_07" },
    c5_07: { tipo: "narracao", texto: "Ele não para. Não atravessa. Não fala nada.", proxima: "c5_08" },
    c5_08: { tipo: "narracao", texto: "Só vira a cabeça. Um segundo. E olha para ela. Do jeito que alguém olha para uma peça no tabuleiro só para conferir se ela continua na mesma casa.", proxima: "c5_09" },
    c5_09: { tipo: "narracao", texto: "Depois volta a olhar para a frente. E vira a esquina.", proxima: "c5_10" },
    c5_10: { sprite: null, tipo: "narracao", texto: "Ela fica agachada na calçada, com o cadarço na mão. Sem conseguir amarrar.", proxima: "c6_01" },

    /* =================== CENA 6 — A VISÃO =================== */
    // Visão do futuro alterado. Efeitos: flashback, eco, apagao. Música: grave, distorcida.
    c6_01: { tipo: "narracao", efeito: "apagao", transicao: "desmaio", sprite: null, texto: "O mundo escurece pelos cantos. A rua some. O cheiro de pão some. Fica só um barulho. Muito longe. Depois muito perto.", proxima: "c6_v01" },
    c6_v01: { cenario: "fabrica-cimento", tipo: "narracao", efeito: "flashback", texto: "Fim de tarde. Céu cinza, baixo. Um pátio de cimento rachado, cheio de poças. Um galpão sem teto. Um rio escuro passando atrás de uma cerca torta.", proxima: "c6_v02" },
    c6_v02: { tipo: "narracao", efeito: "flashback", texto: "Gente. Muita gente. Duas massas de corpos batendo uma contra a outra. Gritos. O barulho de tênis escorregando na água. De osso batendo em osso.", proxima: "c6_v03" },
    c6_v03: { tipo: "narracao", efeito: "flashback", texto: "Uma placa de metal enferrujada pendurada no portão. “Cimentos”. A outra metade da palavra caiu há muito tempo.", proxima: "c6_v04" },
    c6_v04: { tipo: "narracao", efeito: "eco", texto: "Alguém grita um nome. Ela não consegue ouvir qual. O barulho engole tudo.", proxima: "c6_v05" },
    c6_v05: { tipo: "narracao", efeito: "flashback", texto: "No meio da briga, um garoto de jaqueta escura está de costas, segurando alguém no chão, protegendo. Ele não vê o que vem por trás.", proxima: "c6_v06" },
    c6_v06: { tipo: "narracao", efeito: "flashback", texto: "Por trás, outro garoto. Sem rosto. Só o braço. E, no braço, uma barra de ferro. Comprida. Enferrujada na ponta.", proxima: "c6_v07" },
    c6_v07: { tipo: "narracao", efeito: "flashback", texto: "A barra sobe. Devagar. Tão devagar. Ela tenta gritar. Não sai nada.", proxima: "c6_v08" },
    c6_v08: { tipo: "narracao", efeito: "tremor", texto: "A barra desce.", proxima: "c6_v09" },
    c6_v09: { tipo: "narracao", efeito: "eco", texto: "Um som. Seco. Errado. Um som que ela nunca mais vai esquecer.", proxima: "c6_v10" },
    c6_v10: { tipo: "narracao", efeito: "flashback", texto: "O garoto de jaqueta escura cai. De lado. Numa poça. A água da poça fica escura. Depois vermelha. Vermelha demais. Espalhando.", proxima: "c6_v11" },
    c6_v11: { tipo: "narracao", efeito: "flashback", texto: "Ela tenta ver o rosto. O cabelo cobre. A água cobre. A briga continua em volta, como se nada tivesse acontecido. Ninguém para. Ninguém vê.", proxima: "c6_v12" },
    c6_v12: { tipo: "narracao", efeito: "flashback", texto: "Ninguém, menos uma pessoa. Em cima de um caminhão velho, longe da briga, sentado. Com um tabuleiro de bolso no joelho. Mexendo uma peça.", proxima: "c6_v13" },
    c6_v13: { tipo: "narracao", efeito: "eco", texto: "Ele olha para o garoto na poça. E derruba o rei branco com a ponta do dedo.", proxima: "c6_v14" },
    c6_v14: { tipo: "narracao", efeito: "apagao", texto: "Tudo fica preto.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", cenario: "frente-casa-reina", sprite: null, texto: "Ela está de joelhos na calçada. As mãos no chão molhado de sereno. Respirando como quem saiu de baixo d'água.", proxima: "c6_03" },
    c6_03: { tipo: "narracao", texto: "A rua está vazia. A esquina onde ele virou está vazia. Na padaria, um senhor abre a porta de ferro. O barulho faz ela pular.", proxima: "c6_04" },
    c6_04: { tipo: "pensamento", texto: "Alguém importante. Alguém que estava protegendo outra pessoa. Eu não vi o rosto. Eu não vi o rosto.", proxima: "c6_05" },
    c6_05: { tipo: "pensamento", texto: "O Kaito? O Blake? O Ryuji? O Victor? O Takeo, que sempre fica na frente de alguém?", proxima: "c6_cam1" },
    c6_cam1: { caminhos: [
      { flag: "Takeo_chama_primeiro", proxima: "c6_takeo_prom" }
    ], proxima: "c6_06" },
    c6_takeo_prom: { tipo: "pensamento", texto: "“Quando você ficar na frente de alguém, me chama primeiro.” Ele prometeu. Será que ele vai lembrar no meio de uma briga?", proxima: "c6_06" },
    c6_06: { tipo: "pensamento", texto: "No festival, eu sabia a hora. Nove e catorze. Eu sabia o lugar. Atrás do palco.", proxima: "c6_07" },
    c6_07: { tipo: "pensamento", texto: "Dessa vez eu não sei nada. Nem quem. Nem quando. Só uma placa enferrujada com meia palavra: “Cimentos”. E um rio.", proxima: "c6_08" },
    c6_08: { tipo: "pensamento", texto: "Se eu perguntar pros meninos, eles vão dizer que não tem briga nenhuma. Eles nunca contam. Principalmente pra mim.", proxima: "c6_09" },
    c6_09: { tipo: "pensamento", texto: "Eu preciso descobrir onde fica esse lugar. E ficar de olho neles. Em todos eles. Todo dia.", proxima: "c6_10" },
    c6_10: { tipo: "narracao", texto: "Ela levanta. Limpa as mãos na saia. As pernas ainda tremem. Ela anda mesmo assim.", proxima: "c6_cam2" },
    c6_cam2: { caminhos: [
      { flag: "Kaito_buscar_sete", proxima: "c6_kaito" }
    ], proxima: "c6_11" },
    c6_kaito: { tipo: "narracao", sprite: "kaito", texto: "Na esquina, uma bicicleta de entrega. Encostada no poste. O Kaito, de boné, comendo um pão. São seis e cinquenta e dois. Ele chegou oito minutos antes.", proxima: "c6_kaito2" },
    c6_kaito2: { quem: "kaito", texto: "Você está branca. O que aconteceu?", proxima: "c6_kaito3" },
    c6_kaito3: { tipo: "narracao", texto: "Ela olha para ele. Para o pão. Para a mão dele no guidão. Para o olho que ainda tem um restinho de amarelo.", proxima: "c6_kaito4" },
    c6_kaito4: { tipo: "pensamento", texto: "Uma jaqueta escura. Uma poça vermelha. Eu não vi o rosto. Eu não sei se era ele. Eu não sei se não era.", proxima: "c6_kaito5" },
    c6_kaito5: { quem: "eu", texto: "Nada. Dormi mal. A Reina ronca.", proxima: "c6_kaito6" },
    c6_kaito6: { tipo: "narracao", texto: "Ele não acredita. Ela vê que ele não acredita. Mas ele estende o outro pão para ela e não pergunta mais nada.", proxima: "c6_11" },
    c6_11: { tipo: "pensamento", texto: "Eu não sei quando vai ser. Pode ser amanhã. Pode ser daqui a um mês.", proxima: "c6_12" },
    c6_12: { tipo: "pensamento", texto: "No festival, eu fiquei escondida atrás do palco esperando acontecer. Dessa vez eu não vou ter nem isso. Dessa vez eu vou ter que estar perto o tempo todo.", proxima: "c6_13" },
    c6_13: { tipo: "narracao", efeito: "eco", texto: "Ele só passou. Não disse nada. Não precisava.", proxima: "c6_14" },
    c6_14: { tipo: "pensamento", texto: "Dessa vez eu chego antes. Eu não sei como. Mas chego.", proxima: "ep_fim" },
    // Fim do Capítulo 16 (crie a entrada "capitulo16" em dados/capitulos.js).
    ep_fim: { fim: "capitulo16" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 17 (anotações do roteiro)
 *  • A VISÃO: fim de tarde, pátio de uma fábrica de cimento abandonada perto do rio. Um garoto de
 *    jaqueta escura, de costas, protegendo alguém caído, leva uma barra de ferro por trás.
 *    O Ren assiste de cima de um caminhão. A SN não sabe quando vai ser, nem quem é.
 *  • O Ren passou na rua da Reina e só olhou. Não falou nada.
 *  • Quem ameaça a Sayuri trabalha pro Ren. O pai dela deve dinheiro ao pai do Ren.
 *    A Sayuri NÃO sabe que o Ren está envolvido.
 *  • A Sayuri começou a se aproximar do Blake (ela sempre gostou dele). A Mio está magoada.
 *    O Blake disse sim porque "ninguém mais falou". Não vai dar em nada.
 *
 * ESCOLHAS DO CAPÍTULO (7)
 *  1 A prova do Blake · 2 No bicicletário com a Sayuri · 3 O convite da Reina
 *  4 A Mio no banco · 5 Esperando o pudim · 6 No escuro: de quem a SN gosta? · 7 Resposta para o Kaito
 *
 * FLAGS NOVAS
 *  Blake_prova_falei · Blake_prova_lamen · Blake_prova_sinal · Elastico_Sayuri · Perguntou_irmao_Sayuri
 *  Deixou_Sayuri_ir · Aceitou_dormir_Reina · Ronco_Reina · Fotos_bebe_Reina · Segurou_Mio_patio
 *  Ainda_da_tempo_Mio · Tirou_Mio_patio · Escondeu_relogio_Reina · Cantou_Reina
 *  Historias_avo_Reina · Admitiu_Takeo_Reina · Contou_Kaito_Reina · Contou_Blake_Reina
 *  Contou_Takeo_Reina · Contou_Ryuji_Reina · Contou_Victor_Reina
 *  Kaito_buscar_sete · Recusou_Kaito_buscar · Boa_noite_Kaito
 */