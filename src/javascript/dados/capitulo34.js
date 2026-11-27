/*
 * =====================================================================
 *  CAPÍTULO 34 — Dia do inspetor
 *  Terça-feira, logo depois do Capítulo 33.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    As cenas com os cinco meninos acontecem em TODAS as rotas (paqueras, flerte leve, momentos tímidos).
 *    Bloco de rota à noite, depois do caldo de terça.
 *
 *  O QUE ACONTECE
 *    • Manhã: o Kaito vai buscar a SN de moto, como todo dia. Ela tropeça descendo os degraus do hall,
 *      cai em cima dele, e na queda os lábios se encostam por um segundo. Depois, centímetros.
 *    • Ele deixa ela na frente da escola, como sempre. Uma menina do segundo ano olha para a SN com ódio
 *      mortal (muita gente tem uma quedinha pelo Kaito; ele nunca percebe).
 *    • Escola: o Takeo (mesma sala) precisa subir três andares. Ela ajuda. Contato, timidez.
 *    • Dia do inspetor geral. O Victor (OUTRA sala) trouxe o Caramelo escondido de novo. No intervalo,
 *      o cachorro foge e o Victor procura a SN. Eles acham o Caramelo e se escondem num ARMÁRIO DE LIMPEZA,
 *      lado a lado, o cachorro no meio, tapando a boca para não rir do espirro de gatinho do inspetor.
 *    • Quando eles saem, o Ren está no corredor. Passa com raiva, sem falar nada. NADA de xadrez.
 *    • Noite: o caldo de terça na lojinha, com todo mundo. Bloco de rota.
 *    • O Ren NÃO manda mensagem.
 *
 *  SALA DA SN: Takeo, Mio, Hana, Reina, Ren e Akane. Kaito, Blake, Ryuji e Victor são de outras salas.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Mio, Hana, Reina, Akane, Kaito, Takeo, Victor, Blake, Ryuji, Ren, Tio do Kaito, Caramelo (cachorro).
 *    Sem nome / rótulo: Inspetor geral, Diretora, Bibliotecária, Faxineira.
 *
 *  CENÁRIOS
 *    Hall do prédio / rua → "apartamento" e "saida-colegio" · Escola: sala-de-aula, corredor, patio-fundos,
 *    vestiario (armário do material) · Biblioteca → "clube-leitura" · Lojinha → "beco-mercado"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Rota_*, Bilhete_capacete, Caqui_gesso.
 *
 *  Crie a entrada "capitulo34" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo34", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — O HALL =================== */
    // Cenário: quarto e hall do prédio da SN, terça cedo. Música: leve, manhã.
    c1_01: { roupa: "escolar", tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Terça, 6h40 — Cena 1", sprite: null, texto: "Terça-feira. Ela acordou com o barulho da mãe chegando do plantão e não conseguiu mais dormir, então está pronta às seis e quarenta, de uniforme, com o cabelo solto e a cabeça ainda no oitavo andar daquele prédio sem parede.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "O celular vibra. É o Kaito.", proxima: "c1_03" },
    c1_03: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Tô embaixo. Trouxe a moto. Desce que eu te levo, o tio mandou um pão de queijo e ele esfria rápido.", proxima: "c1_04" },
    c1_04: { tipo: "pensamento", texto: "Seis e cinquenta. Dez minutos antes, como todo dia. O Kaito sempre chega dez minutos antes, como um relógio de capacete.", proxima: "c1_05" },
    c1_05: { tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", sprite: "kaito", texto: "Ela desce as escadas do prédio e chega no hall. Do hall até a porta da rua, tem três degraus de granito, e lá embaixo, no pé deles, ele está encostado na parede do lado da caixa de correio, de jaqueta por cima do uniforme, com o capacete vermelho dela pendurado no braço, como em todas as manhãs, e um saquinho de papel na mão, ainda com fumacinha saindo.", proxima: "c1_06" },
    c1_06: { quem: "kaito", texto: "Bom dia.", proxima: "c1_07" },
    c1_07: { quem: "eu", texto: "Bom dia. Dez minutos antes de novo.", proxima: "c1_08" },
    c1_08: { quem: "kaito", texto: "O pão de queijo esfria. É culpa do pão de queijo.", proxima: "c1_09" },
    c1_09: { quem: "eu", texto: "Você chega dez minutos antes todo dia. Todo dia é culpa do pão de queijo?", proxima: "c1_10" },
    c1_10: { quem: "kaito", texto: "Hoje é. É um pão de queijo muito importante. O tio fez com queijo de verdade.", proxima: "c1_11" },
    c1_11: { tipo: "narracao", texto: "Ele entrega o pão de queijo. Ela come ali mesmo, em pé, no hall, enquanto ele fica olhando para a escada, para a caixa de correio, para qualquer lugar que não seja ela comendo.", proxima: "c1_12" },
    c1_12: { quem: "kaito", texto: "Você dormiu? Você está com cara de quem não dormiu.", proxima: "c1_13" },
    c1_13: { quem: "eu", texto: "Dormi umas quatro horas. Fiquei pensando em umas coisas.", proxima: "c1_14" },
    c1_14: { quem: "kaito", texto: "Que coisas?", proxima: "c1_15" },
    c1_15: { quem: "eu", texto: "Em revolução industrial. Na máquina a vapor. Coisas muito importantes.", proxima: "c1_16" },
    c1_16: { tipo: "narracao", texto: "Ele ri pelo nariz e não insiste, porque sabe quando ela não vai contar. Ele pega o capacete do braço e estende para ela.", proxima: "c1_cam_cap" },
    c1_cam_cap: { caminhos: [
      { flag: "Bilhete_capacete", proxima: "c1_capdes" }
    ], proxima: "c1_17" },
    c1_capdes: { quem: "kaito", texto: "Eu colei um adesivo nele. Atrás. Não olha agora. É o desenho que você fez no bilhete de ontem, eu copiei. Ficou pior que o seu.", proxima: "c1_17" },
    c1_17: { tipo: "narracao", texto: "Ela começa a descer os três degraus para pegar o capacete da mão dele, ainda falando, rindo de alguma coisa, olhando para ele e não para o chão.", proxima: "c1_18" },
    c1_18: { tipo: "narracao", efeito: "tremor", texto: "E aí o pé dela pega a borda do degrau do jeito errado. O tênis escorrega no granito encerado. O mundo vira de lado.", proxima: "c1_19" },
    c1_19: { tipo: "narracao", texto: "Ela vai para frente, degrau abaixo, direto em cima dele, que está parado no pé da escada. O Kaito tenta segurar, mas ele estava encostado e o peso dela vem todo de uma vez, de cima, e os dois vão para o chão do hall, ele de costas, ela por cima, o capacete rolando para longe com um barulho oco.", proxima: "c1_20" },
    c1_20: { foto: "kaito-sn-34", sprite: null, tipo: "narracao", texto: "No tranco da queda, a boca dela encosta na dele. De leve. Um segundo, talvez nem isso. Quente, rápido, sem querer, e ao mesmo tempo tão inteiro que o mundo inteiro para em cima daquele segundo.", proxima: "c1_21" },
    c1_21: { foto: "kaito-sn-34", sprite: null, tipo: "narracao", texto: "Ela levanta o rosto, só um pouco. Agora são centímetros. Dois, talvez três. As mãos dela estão no peito dele, as mãos dele estão na cintura dela, onde ele tentou segurar. Ela vê, de muito perto, a cicatriz pequena no supercílio dele, que a mãe dela costurou. Vê que ele tem um cílio caído na bochecha. Vê que ele parou de respirar.", proxima: "c1_22" },
    c1_22: { foto: "kaito-sn-34", sprite: null, tipo: "pensamento", texto: "Eu levanto. Eu tenho que levantar. Por que eu não estou levantando?", proxima: "c1_23" },
    c1_23: { sprite: "kaito", quem: "kaito", texto: "...Você está bem?", proxima: "c1_24" },
    c1_24: { tipo: "narracao", texto: "Ele fala isso quase sem voz, olhando para ela de baixo, sem tirar as mãos da cintura dela. Os olhos dele vão para a boca dela e voltam, rápido, como se ele estivesse confirmando que aquele segundo aconteceu mesmo.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — No chão do hall
    c1_esc1: { escolhas: [
      { texto: "A. “Você amorteceu bem. Nota dez.” E levantar rindo, vermelha até a orelha.", proxima: "c1_1a_1", pontos: { kaito: 2 }, flags: ["Amorteceu_Kaito"] },
      { texto: "B. Não falar nada. Tirar o cílio da bochecha dele com a ponta do dedo. Depois levantar.", proxima: "c1_1b_1", pontos: { kaito: 3 }, flags: ["Cilio_Kaito"] },
      { texto: "C. “Estou. E você está segurando a minha cintura.”", proxima: "c1_1c_1", pontos: { kaito: 2 }, flags: ["Cintura_Kaito"] }
    ]},
    c1_1a_1: { quem: "eu", texto: "Você amorteceu bem. Nota dez.", proxima: "c1_1a_2" },
    c1_1a_2: { tipo: "narracao", texto: "Ela levanta rápido, rindo alto demais, e vai buscar o capacete do outro lado do hall só para ter alguma coisa para fazer com as mãos. Quando ela volta, ele ainda está sentado no chão, com a mão no peito, no lugar onde a mão dela estava.", proxima: "c1_1a_3" },
    c1_1a_3: { quem: "kaito", texto: "Dez. Tá. Eu aceito o dez.", proxima: "c1_25" },
    c1_1b_1: { tipo: "narracao", texto: "Ela tira a mão do peito dele, devagar, e com a ponta do dedo tira o cílio caído da bochecha dele. Ele fecha os olhos quando o dedo dela encosta. Fica de olho fechado um segundo a mais do que precisa.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "eu", texto: "Tinha um cílio. Faz um pedido.", proxima: "c1_1b_3" },
    c1_1b_3: { quem: "kaito", texto: "...Já fiz.", proxima: "c1_1b_4" },
    c1_1b_4: { tipo: "narracao", texto: "Ela levanta, e o coração dela está batendo tão forte que ela tem certeza de que ele ouviu. Ele levanta também, sacode a jaqueta, e não olha para ela por uns bons trinta segundos.", proxima: "c1_25" },
    c1_1c_1: { tipo: "narracao", texto: "O Kaito tira as mãos da cintura dela tão rápido que parece que encostou numa panela quente. As duas mãos sobem para o ar, como quem se rende para a polícia.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "kaito", texto: "Foi pra segurar. Foi só pra segurar. Eu não... foi o reflexo.", proxima: "c1_1c_3" },
    c1_1c_3: { quem: "eu", texto: "O seu reflexo segurou firme.", proxima: "c1_1c_4" },
    c1_1c_4: { tipo: "narracao", texto: "Ela levanta, rindo, e ele fica no chão com as mãos ainda no ar, vermelho do pescoço até a testa. O Kaito, que encara a Midorata inteira sem piscar, completamente derrotado por um degrau de granito.", proxima: "c1_25" },

    // (todas as opções continuam aqui)
    c1_25: { tipo: "narracao", cenario: "rua", transicao: "tempo", sprite: null, texto: "No caminho, na garupa, ela segura na jaqueta dele, e não na cintura. Ele percebe. Ela percebe que ele percebeu. Nenhum dos dois fala nada os dez minutos inteiros, e o pão de queijo do saquinho esfria esquecido no bolso dela.", proxima: "c1_26" },
    c1_26: { tipo: "narracao", cenario: "saida-colegio", sprite: "kaito", texto: "Ele para a moto na frente da escola, no meio-fio do portão, como sempre. Ela desce, tira o capacete, devolve. Os dedos dos dois se encostam no capacete e se separam rápido.", proxima: "c1_26a" },
    c1_26a: { tipo: "narracao", texto: "O portão está cheio de gente, como em toda manhã. E, como em toda manhã, metade das meninas do segundo ano para de conversar quando o Kaito tira o capacete e passa a mão no cabelo. O Kaito não percebe. O Kaito nunca percebe.", proxima: "c1_26b" },
    c1_26b: { tipo: "narracao", sprite: null, texto: "Uma delas, encostada no muro, com o cabelo comprido e a mochila cheia de chaveiro, não está olhando para o Kaito. Está olhando para a SN. Com um ódio tão puro, tão mortal, tão concentrado, que se olhar matasse, a SN já estaria sendo velada no pátio.", proxima: "c1_26c" },
    c1_26c: { tipo: "pensamento", texto: "Eu levantei uma viga, eu quebrei uma barra de ferro, eu encarei doze num fliperama. E essa menina do segundo ano está me dando mais medo que todos eles.", proxima: "c1_26d" },
    c1_26d: { tipo: "pensamento", texto: "Ninguém me avisou que andar na garupa do Kaito vinha com um fã-clube que quer a minha cabeça.", proxima: "c1_27" },
    c1_27: { sprite: "kaito", quem: "kaito", texto: "O degrau. Eu vou falar com o síndico. Ele está muito liso.", proxima: "c1_28" },
    c1_28: { quem: "eu", texto: "O degrau está ótimo.", proxima: "c1_29" },
    c1_29: { tipo: "narracao", texto: "Ele olha para ela. Ela já está entrando pelo portão, passando pela menina do muro, que vira a cara com tanta força que o rabo de cavalo bate no ombro da amiga. O Kaito vai para o bloco dele sem entender nada, e ela sente que ele olha para trás uma vez, antes de virar a escada.", proxima: "c2_01" },

    /* =================== CENA 2 — A ESCADA =================== */
    // Cenário: escada do bloco B (usa "corredor"). Música: violão tímido.
    c2_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "7h10 — Cena 2", sprite: null, texto: "No pátio de entrada, tem uma faixa nova pendurada, com letra de computador: “BEM-VINDO, SENHOR INSPETOR GERAL”. Os faxineiros estão passando pano em tudo, o porteiro está de gravata, e a diretora está andando de um lado para o outro com uma prancheta, como uma general antes da guerra.", proxima: "c2_02" },
    c2_02: { quem: "diretora", texto: "Hoje é tudo perfeito. Uniforme perfeito. Fila perfeita. Ninguém corre, ninguém grita, ninguém come no corredor. Ele chega às dez e fica até a saída. Entenderam?", proxima: "c2_03" },
    c2_03: { tipo: "narracao", texto: "Lá no fim do corredor, o elevador do bloco B tem uma folha colada na porta: “EM MANUTENÇÃO”. E, parado na frente dele, olhando para a folha como quem olha para uma sentença de morte, o Takeo.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", sprite: "takeo:machucado", texto: "Gesso no braço, o pé ainda inchado no tênis desamarrado, a mochila pendurada no ombro bom. A sala deles é no terceiro andar.", proxima: "c2_05" },
    c2_05: { quem: "takeo", sprite: "takeo:machucado", texto: "Logo hoje. Dia do inspetor. Se eu chegar atrasado, eu vou ser o atraso perfeito.", proxima: "c2_06" },
    c2_06: { quem: "eu", texto: "Vem. Eu te ajudo.", proxima: "c2_07" },
    c2_07: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu consigo sozinho. Eu já subi ontem. Demorei só uns...", proxima: "c2_08" },
    c2_08: { quem: "eu", texto: "Quantos minutos, Takeo?", proxima: "c2_09" },
    c2_09: { quem: "takeo", sprite: "takeo:machucado", texto: "...Doze.", proxima: "c2_10" },
    c2_10: { tipo: "narracao", cenario: "escadaria-escola", texto: "Ela pega a mochila dele e coloca no ombro dela. Depois passa o braço dele, o bom, por cima dos ombros dela, e coloca o próprio braço em volta da cintura dele, para ele apoiar o peso.", proxima: "c2_11" },
    c2_11: { tipo: "narracao", texto: "O Takeo fica duro como uma tábua. Ela sente o corpo inteiro dele travar do lado do dela.", proxima: "c2_12" },
    c2_12: { quem: "takeo", sprite: "takeo:machucado", texto: "Isso... isso é bastante contato.", proxima: "c2_13" },
    c2_13: { quem: "eu", texto: "É escada. Escada exige contato.", proxima: "c2_14" },
    c2_14: { tipo: "narracao", texto: "Eles sobem. Um degrau de cada vez. Ele pisa com o pé bom, ela segura o peso quando ele pisa com o pé machucado. Ele é mais alto, então ela fica com o rosto na altura do ombro dele, e sente o cheiro do sabonete de erva-doce que a avó dele compra.", proxima: "c2_15" },
    c2_15: { tipo: "narracao", texto: "No primeiro andar, ele já parou de ficar duro. No segundo, ele está apoiando de verdade, e o braço dele em volta dos ombros dela está menos pesado e mais firme, como quem já se acostumou.", proxima: "c2_16" },
    c2_16: { quem: "takeo", sprite: "takeo:machucado", texto: "Você não está nem cansada.", proxima: "c2_17" },
    c2_17: { quem: "eu", texto: "Você não pesa nada.", proxima: "c2_18" },
    c2_18: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu peso sessenta e oito quilos. Com gesso, setenta. Eu me pesei na farmácia ontem, de tristeza.", proxima: "c2_19" },
    c2_19: { tipo: "narracao", texto: "No patamar entre o segundo e o terceiro andar, ele pisa errado com o pé machucado e perde o equilíbrio. Ela segura. Rápido, firme, com as duas mãos, e ele vai para frente e fica de frente para ela, encostado no corrimão, com ela segurando ele pela cintura.", proxima: "c2_20" },
    c2_20: { foto: "takeo-sn-34", sprite: null, tipo: "narracao", texto: "Os dois ficam parados. Ele com a mão boa no ombro dela. Ela com as duas mãos na cintura dele. Ele olhando para baixo, para ela, com os olhos muito abertos e o rosto ficando vermelho do pescoço para cima, devagar, como um termômetro.", proxima: "c2_21" },
    c2_21: { foto: "takeo-sn-34", sprite: null, quem: "takeo", texto: "...Obrigado.", proxima: "c2_cam_caqui" },
    c2_cam_caqui: { caminhos: [
      { flag: "Caqui_gesso", proxima: "c2_caqui" }
    ], proxima: "c2_esc2" },
    c2_caqui: { tipo: "narracao", texto: "Do lado dela, encostado no corrimão, o gesso com o caqui pequenininho que ela desenhou ontem. A folhinha torta. Ele está olhando para o desenho também, sem perceber que ela viu.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — No patamar
    c2_esc2: { sprite: "takeo:machucado", escolhas: [
      { texto: "A. Não soltar logo. “Você está bem? Pode respirar. Eu seguro.”", proxima: "c2_2a_1", pontos: { takeo: 3 }, flags: ["Segurou_patamar"] },
      { texto: "B. Soltar rápido, vermelha também. “O degrau. É o degrau. Hoje os degraus estão contra mim.”", proxima: "c2_2b_1", pontos: { takeo: 2 }, flags: ["Degraus_contra"] },
      { texto: "C. “Sessenta e oito quilos. Confirmado. Você estava certo.”", proxima: "c2_2c_1", pontos: { takeo: 2 }, flags: ["Confirmou_peso"] }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "Ela não solta. Ele respira. Uma vez, duas, olhando para ela de cima, sem graça e sem desviar.", proxima: "c2_2a_2" },
    c2_2a_2: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu estou respirando. Só que está difícil por outro motivo agora.", proxima: "c2_2a_3" },
    c2_2a_3: { tipo: "narracao", texto: "Ele fala e na hora percebe o que falou, e fecha os olhos de vergonha. Ela ri, baixinho, com a testa quase encostando no peito dele, e os dois sobem o último lance assim, sem soltar, rindo e sem olhar um para o outro.", proxima: "c2_22" },
    c2_2b_1: { tipo: "narracao", texto: "Ela solta rápido e dá um passo para trás, e quase cai do degrau de baixo. Agora é ele que segura ela, pelo pulso, com a mão boa.", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "takeo", sprite: "takeo:machucado", texto: "Tá vendo? Agora quem precisa de ajuda é você.", proxima: "c2_2b_3" },
    c2_2b_3: { quem: "eu", texto: "Os degraus estão contra mim hoje, Takeo, é sério. Eu já caí em cima de alguém de manhã.", proxima: "c2_2b_4" },
    c2_2b_4: { tipo: "narracao", texto: "Ele levanta a sobrancelha. Ela percebe o que falou. Agora são os dois vermelhos, no patamar, no meio da escada, sem saber para onde olhar.", proxima: "c2_2b_5" },
    c2_2b_5: { quem: "takeo", sprite: "takeo:machucado", texto: "...Em cima de quem?", proxima: "c2_2b_6" },
    c2_2b_6: { quem: "eu", texto: "Sobe, Takeo.", proxima: "c2_22" },
    c2_2c_1: { quem: "eu", texto: "Sessenta e oito quilos. Confirmado. Você estava certo.", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "takeo", sprite: "takeo:machucado", texto: "Você não precisava confirmar com essa cara de quem está carregando uma sacola de feira.", proxima: "c2_2c_3" },
    c2_2c_3: { tipo: "narracao", texto: "Ele ri, e de rir perde a vergonha, e o resto da escada eles sobem discutindo se ele é uma sacola de feira ou uma caixa de mudança. Ela vence: ele é uma melancia.", proxima: "c2_22" },

    // (todas as opções continuam aqui)
    c2_22: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", texto: "Eles chegam na sala às sete e vinte e oito, dois minutos antes do sinal. A Reina, que está sentada na frente, olha para os dois entrando juntos, com a mochila dele no ombro dela, e levanta uma sobrancelha só, muito alta.", proxima: "c2_23" },
    c2_23: { quem: "reina", sprite: "reina", texto: "Briga limpa, SN. Briga limpa.", proxima: "c2_24" },
    c2_24: { quem: "eu", texto: "Foi escada, Reina.", proxima: "c2_25" },
    c2_25: { quem: "reina", sprite: "reina", texto: "Eu sei. Eu também queria ter sido escada.", proxima: "c3_01" },

    /* =================== CENA 3 — O CARAMELO =================== */
    // Cenário: sala de aula e pátio, manhã e intervalo. Música: suspense cômico.
    c3_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Manhã — Cena 3", sprite: null, texto: "As primeiras aulas passam com a sala inteira sentada reta, de uniforme impecável, como se o inspetor pudesse estar escondido dentro do armário de livros. A Hana fez uma tabela de “comportamento perfeito” e colou na carteira, a Mio está falando baixinho pela primeira vez na vida, e a Akane passou a aula inteira tocando piano imaginário na mesa, de nervoso.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", sprite: "ren", texto: "Na carteira perto da porta, o Ren lê um livro de capa escura, igual em todas as manhãs. Ele não olha para ninguém, e ninguém olha para ele.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Intervalo", texto: "O sinal do intervalo toca. A SN desce com a Mio para a fila da cantina, e as duas estão discutindo se coxinha conta como comportamento perfeito quando alguém aparece correndo do bloco C, sem correr, do jeito que só dá para fazer no dia do inspetor: andando muito rápido, com os braços duros e a cara desesperada.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", sprite: "victor", texto: "É o Victor. Da outra sala. Com a jaqueta aberta, a mochila pendurada num ombro só, a mochila aberta e vazia, e um pirulito esquecido na boca.", proxima: "c3_05" },
    c3_05: { quem: "victor", texto: "SN. Emergência. Emergência nível máximo. Eu preciso de você e eu preciso agora.", proxima: "c3_06" },
    c3_06: { quem: "eu", texto: "O que você fez?", proxima: "c3_07" },
    c3_07: { quem: "victor", texto: "Por que você acha que eu fiz alguma coisa?", proxima: "c3_08" },
    c3_08: { tipo: "narracao", texto: "Ela olha para a mochila aberta e vazia. Ele olha para a mochila aberta e vazia. A Mio olha para os dois.", proxima: "c3_09" },
    c3_09: { quem: "victor", texto: "...O Caramelo. Eu trouxe ele de novo. A minha mãe pegou plantão dobrado, o vizinho que fica com ele viajou, e se ele fica sozinho ele come o sofá. Ele ficou quietinho na mochila duas aulas inteiras. Profissional.", proxima: "c3_10" },
    c3_10: { quem: "victor", texto: "Aí tocou o sinal, eu abri a mochila pra pegar o pirulito e esqueci que ele estava dentro. Ele pulou. Ele saiu pela porta. Ele sumiu.", proxima: "c3_11" },
    c3_11: { quem: "mio", sprite: "mio", texto: "No dia do inspetor geral, Victor? No dia do INSPETOR GERAL?", proxima: "c3_12" },
    c3_12: { quem: "victor", texto: "Eu sei, Mio! Eu sei que dia é hoje! Eu vi a faixa!", proxima: "c3_13" },
    c3_13: { tipo: "narracao", sprite: null, texto: "E, no portão de entrada, lá do outro lado do pátio, um carro preto oficial estaciona. Desce um homem de terno cinza, careca, com uma pasta de couro. A diretora corre até ele com a prancheta, sorrindo com todos os dentes.", proxima: "c3_14" },
    c3_14: { quem: "victor", texto: "Ela disse dez horas. São nove e quarenta. Que tipo de inspetor chega adiantado?", proxima: "c3_15" },
    c3_15: { quem: "eu", texto: "Um inspetor geral. Mio, segura o meu lugar na fila. Victor, vem.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — Por onde começar
    c3_esc3: { escolhas: [
      { texto: "A. “Lixeira da cantina. Ele vai atrás do cheiro de coxinha.”", proxima: "c3_3a_1", pontos: { victor: 1 }, flags: ["Busca_cantina"] },
      { texto: "B. “Bloco C. Ele saiu da sua sala, ele não foi longe.”", proxima: "c3_3b_1", pontos: { victor: 1 }, flags: ["Busca_blocoC"] },
      { texto: "C. “Assobia. Ele vem quando você assobia?” “Ele vem quando eu abro um pacote de biscoito.” “Então abre um pacote de biscoito.”", proxima: "c3_3c_1", pontos: { victor: 2 }, flags: ["Busca_biscoito"] }
    ]},
    c3_3a_1: { tipo: "narracao", texto: "Atrás da cantina, do lado das lixeiras, tem um rastro de farelo e uma moça da cozinha jurando que um cachorro cor de caramelo roubou uma coxinha da bandeja e entrou correndo no corredor do bloco C.", proxima: "c3_16" },
    c3_3b_1: { tipo: "narracao", texto: "No corredor do bloco C, perto da sala do Victor, tem um rastro de farelo de coxinha no chão encerado, que vai até o fundo do corredor, como migalha de pão em conto de fadas.", proxima: "c3_16" },
    c3_3c_1: { tipo: "narracao", texto: "O Victor tira um pacote de biscoito de polvilho do bolso da jaqueta, porque o Victor sempre tem comida no bolso da jaqueta, e amassa o pacote alto. Do fundo do corredor do bloco C, vem um latido curto, animado.", proxima: "c3_16" },
    c3_16: { tipo: "narracao", foto: "caramelo", cenario: "corredor", transicao: "tempo", texto: "No fim do corredor do bloco C, embaixo do bebedouro, o Caramelo está deitado de barriga para cima, com farelo no focinho, com a cara mais feliz do mundo, abanando o rabo para os dois como se tivesse organizado tudo isso de propósito.", proxima: "c3_17" },
    c3_17: { sprite: "victor", quem: "victor", texto: "Caramelo. Meu filho. Você quer me matar.", proxima: "c3_18" },
    c3_18: { tipo: "narracao", texto: "Ele pega o cachorro no colo. No mesmo segundo, da escada do bloco C, sobem vozes. A voz da diretora, alta e simpática demais. E outra voz, grave, de homem, perguntando sobre a validade dos extintores.", proxima: "c3_19" },
    c3_19: { tipo: "narracao", texto: "O corredor não tem outra saída. Tem só uma porta estreita, do lado do bebedouro, com uma plaquinha meio descolada: “LIMPEZA”. A SN gira a maçaneta. Está aberta.", proxima: "c4_01" },

    /* =================== CENA 4 — O ARMÁRIO DE LIMPEZA =================== */
    // Cenário: armário de limpeza do bloco C (usa "vestiario"). Música: suspense, depois silêncio.
    c4_01: { tipo: "narracao", cenario: "armario", sprite: null, transicao: "tempo", legenda: "Cena 4", texto: "É um armário de limpeza, estreito e comprido, com vassoura, rodo, dois baldes empilhados, uma prateleira de produto e um cheiro tão forte de água sanitária que arde o nariz. Ela puxa o Victor para dentro e fecha a porta.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "Escuro. Só uma linha fina de luz por baixo da porta. Não cabe ninguém de frente para ninguém, então eles ficam lado a lado, encostados na parede do fundo, ombro colado com ombro, braço colado com braço, e o Caramelo no meio, no colo do Victor, com o focinho virado para ela.", proxima: "c4_03" },
    c4_03: { tipo: "narracao", texto: "O cabo da vassoura está encostado na cabeça dela. O balde está encostado no joelho dele. O Caramelo lambe o queixo dela uma vez, satisfeito, e ela tem que apertar os lábios para não fazer barulho.", proxima: "c4_04" },
    c4_04: { quem: "victor", texto: "...Gatinha. SN. Tem um rodo na minha orelha.", proxima: "c4_05" },
    c4_05: { quem: "eu", texto: "Shh.", proxima: "c4_06" },
    c4_06: { tipo: "narracao", texto: "Os passos chegam no corredor. Param na frente do bebedouro. Bem na frente da porta.", proxima: "c4_07" },
    c4_07: { quem: "diretora", texto: "E esse é o bloco C, senhor inspetor. Totalmente reformado. Ali é só o armário da limpeza, nada de interessante.", proxima: "c4_08" },
    c4_08: { quem: "desconhecido", rotulo: "Inspetor geral", texto: "Hm. Diretora, eu vou ser franco com a senhora. Eu tenho um dom. Eu sinto cheiro de irregularidade de longe. É o meu trabalho há trinta anos.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "Pausa. Dá para ouvir ele cheirando o ar, alto, pelo nariz, como um perdigueiro de terno.", proxima: "c4_10" },
    c4_10: { quem: "desconhecido", rotulo: "Inspetor geral", texto: "E esse corredor... esse corredor está com cheiro de coxinha.", proxima: "c4_11" },
    c4_11: { quem: "diretora", texto: "A cantina fica logo ali embaixo, senhor.", proxima: "c4_12" },
    c4_12: { quem: "desconhecido", rotulo: "Inspetor geral", texto: "Não é só coxinha. É coxinha com... cachorro. Eu sou alérgico. Se tiver um cachorro num raio de cem metros, eu...", proxima: "c4_13" },
    c4_13: { tipo: "narracao", efeito: "eco", texto: "“...atchim.”", proxima: "c4_14" },
    c4_14: { tipo: "narracao", texto: "O espirro dele é minúsculo. Agudo. Fininho. Totalmente diferente da voz grave. Parece o espirro de um filhote de gato. E aí vem outro. E outro. Três espirrinhos agudos, seguidos, no meio do corredor do bloco C.", proxima: "c4_15" },
    c4_15: { foto: "victor-sn-34", tipo: "narracao", texto: "Dentro do armário, a SN tapa a própria boca com as duas mãos. Do lado dela, o Victor tapa a boca com a mão livre, a outra segurando o Caramelo, e os dois começam a tremer inteiros, em silêncio, colados um no outro, segurando a risada com tanta força que os olhos enchem de lágrima.", proxima: "c4_16" },
    c4_16: { foto: "victor-sn-34", tipo: "narracao", texto: "O ombro dele treme contra o dela. Ela sente o riso preso dentro dele, como um motor ligado. Ele vira a cabeça para ela no escuro, de olho arregalado e molhado, com a mão na boca, e é pior, porque olhar para ele faz ela querer rir mais.", proxima: "c4_17" },
    c4_17: { sprite: null, quem: "desconhecido", rotulo: "Inspetor geral", texto: "Atchim! Diretora, eu preciso de um lenço. E eu vou anotar isso. Bloco C. Cheiro de cachorro.", proxima: "c4_18" },
    c4_18: { tipo: "narracao", texto: "A maçaneta da porta mexe. Só um pouco. Alguém encostou nela. A SN para de respirar. O Victor para de respirar. O Caramelo, no meio dos dois, levanta as orelhas.", proxima: "c4_19" },
    c4_19: { quem: "diretora", texto: "Tem lenço na minha sala, senhor! Vamos, vamos, por aqui, a minha sala tem ar-condicionado!", proxima: "c4_20" },
    c4_20: { tipo: "narracao", texto: "A maçaneta para. Os passos vão embora, rápidos, com mais um espirrinho agudo no meio do caminho. Descendo a escada. Sumindo.", proxima: "c4_21" },
    c4_21: { tipo: "narracao", texto: "Silêncio. E aí o Victor tira a mão da boca e solta uma risada que parece um balão estourando, e ela solta também, e os dois riem tanto, no escuro, encostados na parede, que a vassoura cai em cima dos dois e o Caramelo começa a latir junto.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — No armário
    c4_esc4: { escolhas: [
      { texto: "A. “O espirro dele... o espirro dele era um gatinho, Victor.”", proxima: "c4_4a_1", pontos: { victor: 2 }, flags: ["Espirro_gatinho"] },
      { texto: "B. Quando a risada passa, perceber que continua colada nele. E não se afastar.", proxima: "c4_4b_1", pontos: { victor: 3 }, flags: ["Colada_Victor"] },
      { texto: "C. Limpar a lágrima de riso do rosto dele com a manga. “Você chora rindo.”", proxima: "c4_4c_1", pontos: { victor: 3 }, flags: ["Lagrima_Victor"] }
    ]},
    c4_4a_1: { quem: "eu", texto: "O espirro dele... o espirro dele era um gatinho, Victor.", proxima: "c4_4a_2" },
    c4_4a_2: { quem: "victor", texto: "Era um gatinho! Ele é o homem mais assustador da cidade e espirra igual um gatinho! Eu vou chamar ele de gatinho! Eu vou chamar o inspetor geral de gatinho!", proxima: "c4_4a_3" },
    c4_4a_3: { quem: "eu", texto: "Você chama todo mundo de gatinha.", proxima: "c4_4a_4" },
    c4_4a_4: { quem: "victor", texto: "Agora eu tenho um gatinho oficial. Ele foi promovido.", proxima: "c4_22" },
    c4_4b_1: { tipo: "narracao", texto: "A risada vai passando. Devagar. E ela percebe que continua encostada nele, do ombro até o cotovelo, no escuro, com o Caramelo cochilando no meio. Ele percebe também. Ela sente quando ele percebe, porque ele fica parado.", proxima: "c4_4b_2" },
    c4_4b_2: { tipo: "narracao", texto: "Nenhum dos dois se afasta. Ficam assim, quietos, ouvindo o bebedouro fazer barulho do outro lado da porta.", proxima: "c4_4b_3" },
    c4_4b_3: { quem: "victor", texto: "...Esse armário é bom. Eu nunca reparei nesse armário.", proxima: "c4_22" },
    c4_4c_1: { tipo: "narracao", texto: "Ela puxa a manga do moletom até a mão e passa no rosto dele, no escuro, onde a lágrima de tanto rir escorreu. Ele fica parado, deixando, com o sorriso ainda no rosto, mas sem som nenhum.", proxima: "c4_4c_2" },
    c4_4c_2: { quem: "eu", texto: "Você chora rindo.", proxima: "c4_4c_3" },
    c4_4c_3: { quem: "victor", texto: "Só quando a risada é muito boa. A minha mãe diz que é defeito de fábrica.", proxima: "c4_4c_4" },
    c4_4c_4: { quem: "eu", texto: "Não é defeito.", proxima: "c4_4c_5" },
    c4_4c_5: { tipo: "narracao", texto: "Ele não responde. Ele só fica olhando para ela, no escuro, com a linha de luz de baixo da porta iluminando metade do rosto dele, sem piada nenhuma.", proxima: "c4_22" },

    // (todas as opções continuam aqui)
    c4_22: { tipo: "narracao", cenario: "corredor", transicao: "tempo", texto: "Eles saem do armário. A SN primeiro, com o cabelo meio solto do elástico, um pedaço de teia de aranha no ombro e a cara vermelha de tanto rir. O Victor atrás, com a jaqueta torta, o Caramelo com a cabeça para fora da gola, os dois ainda rindo baixinho.", proxima: "c4_23" },
    c4_23: { tipo: "narracao", sprite: "ren", texto: "E, no meio do corredor, parado, com as mãos nos bolsos, o Ren.", proxima: "c4_24" },
    c4_24: { tipo: "narracao", texto: "Ele estava indo para algum lugar. Parou. Está olhando para os dois saindo juntos de um armário de limpeza. Para o cabelo dela solto. Para a cara vermelha dela. Para o Victor rindo do lado dela. Uma coisa de cada vez.", proxima: "c4_25" },
    c4_25: { tipo: "narracao", texto: "O maxilar dele trava. Ela vê. As mãos dele, nos bolsos, fecham. Os olhos dele, que nunca mudam, ficam escuros de um jeito que ela só viu quando ela falou o nome do Takeo.", proxima: "c4_26" },
    c4_26: { tipo: "narracao", texto: "Ele não fala nada. Ele passa do lado deles, perto, sem olhar para o Victor, sem olhar para ela, andando rápido demais para quem nunca anda rápido, e vira a esquina da escada.", proxima: "c4_27" },
    c4_27: { sprite: "victor", quem: "victor", texto: "...O Ren da sua sala. Ele ficou com uma cara. Ele vai contar pra diretora?", proxima: "c4_28" },
    c4_28: { tipo: "pensamento", texto: "Ele não vai contar pra ninguém. Ele não conta nada pra ninguém.", proxima: "c4_29" },
    c4_29: { tipo: "pensamento", texto: "Mas eu vi aquela cara. Eu sei o que acontece com quem fica perto de mim.", proxima: "c4_30" },
    c4_30: { tipo: "pensamento", texto: "Ninguém encosta no Victor. Eu não deixo.", proxima: "c4_31" },
    c4_31: { tipo: "narracao", texto: "O Victor esconde o Caramelo no vestiário masculino até a saída, dentro de uma caixa de bola vazia, com o pacote de biscoito de polvilho. A SN volta para a fila da cantina. A Mio guardou o lugar dela e uma coxinha.", proxima: "c4_32" },
    c4_32: { quem: "mio", sprite: "mio", texto: "Você saiu com cara de normal e voltou com teia de aranha no ombro e cara de novela. O que aconteceu em quinze minutos?", proxima: "c4_33" },
    c4_33: { quem: "eu", texto: "Um cachorro, um armário e um inspetor que espirra igual um gatinho.", proxima: "c4_34" },
    c4_34: { quem: "mio", sprite: "mio", texto: "Isso não é resposta. Isso é o título de um livro que eu leria.", proxima: "c4_35" },
    c4_35: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", sprite: null, texto: "Na sala, depois do intervalo, o Ren está na carteira perto da porta, com o livro aberto. Ele não vira a página a aula inteira. A mesma página, por cinquenta minutos. Ele não olha para ela nenhuma vez.", proxima: "c4_36" },
    c4_36: { tipo: "pensamento", texto: "Ele está com raiva. E ele não sabe o que fazer com a raiva quando não tem ninguém pra comprar.", proxima: "c7_01" },

    /* =================== CENA 5 — CALDO DE TERÇA =================== */
    // Cenário: lojinha do tio, terça à noite (usa "beco-mercado"). Música: alegre, de casa.
    c7_01: { roupa: "fora", tipo: "narracao", cenario: "loja-lamen", transicao: "tempo", legenda: "Terça, 19h — Cena 5", sprite: "kaito", texto: "À noite, a lojinha. O caldo de terça, a receita nova do tio. O aviso de despejo na parede agora está escrito “27”, e do lado dele o protocolo da prefeitura, colado na mesma altura, como duas pessoas brigando.", proxima: "c7_02" },
    c7_02: { tipo: "narracao", texto: "Todo mundo apareceu, sem ninguém combinar direito. O Kaito atrás do balcão. O Blake ocupando dois banquinhos. O Ryuji com a faixa na testa. O Takeo com o gesso apoiado no balcão. O Victor com o Caramelo no colo, que entrou na lojinha como se fosse sócio.", proxima: "c7_03" },
    c7_03: { quem: "victor", texto: "E aí o inspetor geral, o homem mais assustador da cidade, careca, de terno, trinta anos de carreira, espirrou. E o espirro dele era assim: “atchim”. Fininho. Um gatinho.", proxima: "c7_04" },
    c7_04: { tipo: "narracao", texto: "Ele imita o espirro agudo, e a lojinha inteira explode de rir. O Ryuji cai do banquinho. O Takeo ri tanto que segura o gesso com a outra mão. Até o Blake ri, o riso grave, curto, com a mão na frente da boca.", proxima: "c7_05" },
    c7_05: { quem: "ryuji", sprite: "ryuji", texto: "Eu não acredito que eu perdi isso. Eu estava fazendo prova surpresa de biologia. Eu passei, aliás. Eu acho. Ninguém liga.", proxima: "c7_06" },
    c7_06: { quem: "blake", sprite: "blake", texto: "Eu ligo. Parabéns.", proxima: "c7_07" },
    c7_07: { quem: "ryuji", sprite: "ryuji", texto: "...Valeu, Blake. Você é o único.", proxima: "c7_08" },
    c7_08: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu também ligo. E ela me ajudou a subir três andares hoje. Do lado. Abraçada. Por causa do elevador. Logística.", proxima: "c7_09" },
    c7_09: { tipo: "narracao", sprite: "kaito", texto: "Todo mundo olha para o Kaito, que está mexendo o caldo, de costas, sem falar nada desde que eles chegaram. As orelhas dele estão vermelhas. Muito vermelhas.", proxima: "c7_10" },
    c7_10: { quem: "victor", texto: "...Líder? E você? Aconteceu alguma coisa com você hoje?", proxima: "c7_11" },
    c7_11: { quem: "kaito", sprite: "kaito", texto: "Eu fiz caldo.", proxima: "c7_12" },
    c7_12: { tipo: "narracao", sprite: null, texto: "Ele vira e coloca a primeira tigela na frente dela, com cebolinha demais, sem olhar para ela e sem olhar para ninguém. A SN olha para a tigela e sente o rosto esquentar inteiro, e o Victor olha de um para o outro com o pirulito parado no meio da boca.", proxima: "c7_13" },
    c7_13: { quem: "tio_kaito", texto: "Eu passei vinte e dois anos fazendo esse caldo e hoje é a primeira vez que ninguém fala do caldo!", proxima: "c7_14" },
    c7_14: { tipo: "pensamento", texto: "Hoje eu caí em cima de um, subi três andares abraçada com outro e fiquei presa num armário de limpeza com outro e um cachorro. E tinha uma menina no portão que queria me matar com os olhos.", proxima: "c7_15" },
    c7_15: { tipo: "pensamento", texto: "Eu tenho vinte e oito anos por dentro. Eu devia ter mais controle sobre a minha vida do que uma comédia romântica.", proxima: "c7_16" },
    c7_16: { tipo: "narracao", texto: "Ela toma o caldo. A receita nova está ótima mesmo. Ninguém fala do caldo.", proxima: "r_cam" },

    /* =================== ROTA — TERÇA À NOITE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { roupa: "fora", tipo: "narracao", cenario: "frente-casa-sn-noite", transicao: "tempo", sprite: "kaito", texto: "Depois do caldo, o Kaito leva ela em casa de moto. Na frente do prédio, ela desce, tira o capacete, e os dois ficam olhando para a porta do hall. Para os três degraus de granito.", proxima: "rk_02" },
    rk_02: { quem: "kaito", texto: "Eu falei com o síndico. Ele disse que vai colocar uma fita antiderrapante.", proxima: "rk_03" },
    rk_03: { quem: "eu", texto: "Você falou mesmo com o síndico?", proxima: "rk_04" },
    rk_04: { quem: "kaito", texto: "Falei. Ele me perguntou se eu era o namorado. Eu disse que era o cara que caiu.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. “O cara que caiu. Bom título.”", proxima: "rk_a1", pontos: { kaito: 2 }, flags: ["Cara_que_caiu"] },
      { texto: "B. “E você queria ter dito o quê?”", proxima: "rk_b1", pontos: { kaito: 3 }, flags: ["Queria_dizer_Kaito"] },
      { texto: "C. Subir os três degraus devagar, de frente pra ele, um por um, sem tropeçar. “Viu? Aprendi.”", proxima: "rk_c1", pontos: { kaito: 3 }, flags: ["Degraus_Kaito"] }
    ]},
    rk_a1: { quem: "eu", texto: "O cara que caiu. Bom título.", proxima: "rk_a2" },
    rk_a2: { quem: "kaito", texto: "Eu não caí. Você que caiu. Eu só estava embaixo.", proxima: "rk_a3" },
    rk_a3: { tipo: "narracao", texto: "Ele fala isso e percebe como soou, e coloca o capacete na cabeça tão rápido que bate a viseira no nariz.", proxima: "r_fim" },
    rk_b1: { tipo: "narracao", texto: "O Kaito fica parado, com o capacete na mão. Olha para ela. Depois para os degraus. Depois para ela de novo.", proxima: "rk_b2" },
    rk_b2: { quem: "kaito", texto: "...Quando for, eu falo.", proxima: "rk_b3" },
    rk_b3: { quem: "eu", texto: "Você sempre fala isso.", proxima: "rk_b4" },
    rk_b4: { quem: "kaito", texto: "Porque ainda não foi.", proxima: "rk_b5" },
    rk_b5: { tipo: "narracao", texto: "Ele coloca o capacete, liga a moto. E antes de arrancar, levanta a viseira e olha para ela mais uma vez, por um segundo, de um jeito que fala tudo que ele ainda não falou.", proxima: "r_fim" },
    rk_c1: { tipo: "narracao", texto: "Ela sobe os três degraus de costas, devagar, olhando para ele, um de cada vez, com os braços abertos como uma equilibrista. No último, ela para e faz uma reverência.", proxima: "rk_c2" },
    rk_c2: { quem: "eu", texto: "Viu? Aprendi.", proxima: "rk_c3" },
    rk_c3: { quem: "kaito", texto: "Pena.", proxima: "rk_c4" },
    rk_c4: { tipo: "narracao", texto: "Ele fala isso baixo, quase sem querer, e ela ouve. Os dois ficam se olhando, ela no alto do degrau, ele lá embaixo na moto. Ele é o primeiro a desviar.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { roupa: "fora", tipo: "narracao", cenario: "rua-padaria-noite", transicao: "tempo", sprite: "takeo:machucado", texto: "Depois do caldo, ela leva o Takeo em casa, pela rua da padaria, que tem luz. Ele vai apoiado no braço dela, sem precisar mais, porque o pé já melhorou. Ele não fala que melhorou. Ela não pergunta.", proxima: "rt_02" },
    rt_02: { quem: "takeo", sprite: "takeo:machucado", texto: "Na escada hoje de manhã. Eu fiquei pensando nisso a aula inteira. Eu não ouvi nada de matemática.", proxima: "rt_03" },
    rt_03: { quem: "eu", texto: "Pensando no quê?", proxima: "rt_04" },
    rt_04: { quem: "takeo", sprite: "takeo:machucado", texto: "Que eu queria que o terceiro andar fosse o décimo.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. “Amanhã o elevador ainda vai estar quebrado. Eu já perguntei.”", proxima: "rt_a1", pontos: { takeo: 3 }, flags: ["Elevador_quebrado"] },
      { texto: "B. Parar no meio da calçada e abraçar ele pela cintura, igual na escada. “Décimo andar.”", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["Decimo_andar"] },
      { texto: "C. “Você está apoiando no meu braço e o seu pé já está bom, Takeo.”", proxima: "rt_c1", pontos: { takeo: 2 }, flags: ["Pe_bom_Takeo"] }
    ]},
    rt_a1: { tipo: "narracao", texto: "O Takeo para de andar. Olha para ela. Começa a rir, baixo, com a mão boa no rosto.", proxima: "rt_a2" },
    rt_a2: { quem: "takeo", sprite: "takeo:machucado", texto: "Você perguntou pro porteiro se o elevador ia continuar quebrado?", proxima: "rt_a3" },
    rt_a3: { quem: "eu", texto: "Por motivos de logística.", proxima: "rt_a4" },
    rt_a4: { quem: "takeo", sprite: "takeo:machucado", texto: "Que logística maravilhosa.", proxima: "r_fim" },
    rt_b1: { tipo: "narracao", texto: "Ela para no meio da calçada, embaixo de um poste, e passa o braço pela cintura dele, igual na escada, e encosta a cabeça no ombro dele. Ele fica parado. Depois o braço bom dele vem por cima dos ombros dela.", proxima: "rt_b2" },
    rt_b2: { quem: "eu", texto: "Décimo andar.", proxima: "rt_b3" },
    rt_b3: { tipo: "narracao", texto: "Eles andam o resto do caminho assim, devagar, como se ainda estivessem subindo, e quando chegam no portão verde descascado, ele demora muito para tirar o braço.", proxima: "r_fim" },
    rt_c1: { tipo: "narracao", texto: "O Takeo fica muito vermelho. Ele olha para o pé, que está andando perfeitamente, e depois para a mão dele no braço dela.", proxima: "rt_c2" },
    rt_c2: { quem: "takeo", sprite: "takeo:machucado", texto: "...É apoio emocional.", proxima: "rt_c3" },
    rt_c3: { quem: "eu", texto: "Ah, emocional.", proxima: "rt_c4" },
    rt_c4: { quem: "takeo", sprite: "takeo:machucado", texto: "Totalmente emocional. Eu não vou soltar.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: "fora", tipo: "narracao", cenario: "frente-lamen-noite", transicao: "tempo", sprite: "blake", texto: "Depois do caldo, o Blake fica esperando ela na calçada, encostado na moto preta, com o caderno de química embaixo do braço.", proxima: "rb_02" },
    rb_02: { quem: "blake", texto: "Eu terminei o relatório. Na biblioteca, no intervalo. Eu estava lá enquanto vocês corriam atrás do cachorro. Eu perdi tudo.", proxima: "rb_03" },
    rb_03: { tipo: "narracao", texto: "Ele abre o caderno embaixo do poste e mostra. Duas páginas inteiras, com a letra grande e torta dele, sem nenhum risco. No final, embaixo da conclusão, uma linha a mais, que ninguém pediu: “Agradecimento: à SN, pela primeira frase.”", proxima: "rb_04" },
    rb_04: { quem: "eu", texto: "Relatório de química não tem agradecimento, Blake.", proxima: "rb_05" },
    rb_05: { quem: "blake", texto: "O meu tem.", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. “Então eu vou querer ver a nota. Eu sou coautora.”", proxima: "rb_a1", pontos: { blake: 2 }, flags: ["Coautora_Blake"] },
      { texto: "B. Ficar olhando pra linha do agradecimento sem falar nada. Depois olhar pra ele.", proxima: "rb_b1", pontos: { blake: 3 }, flags: ["Olhou_agradecimento"] },
      { texto: "C. “A segunda frase você fez sozinho. Tinha que ter um agradecimento pra você também.”", proxima: "rb_c1", pontos: { blake: 3 }, flags: ["Agradece_Blake"] }
    ]},
    rb_a1: { quem: "eu", texto: "Então eu vou querer ver a nota. Eu sou coautora.", proxima: "rb_a2" },
    rb_a2: { quem: "blake", texto: "Se for dez, metade é sua. Se for cinco, a culpa é sua.", proxima: "rb_a3" },
    rb_a3: { tipo: "narracao", texto: "Ele fala isso sério, e ela ri, e ele quase ri também, só com o canto da boca, do jeito que ele começou a fazer essa semana.", proxima: "r_fim" },
    rb_b1: { tipo: "narracao", texto: "Ela fica olhando para a linha. Depois para ele. Ele está olhando para o chão, com o caderno na mão, as orelhas ficando vermelhas devagar.", proxima: "rb_b2" },
    rb_b2: { quem: "blake", texto: "...Foi só uma linha.", proxima: "rb_b3" },
    rb_b3: { quem: "eu", texto: "Eu sei.", proxima: "rb_b4" },
    rb_b4: { tipo: "narracao", texto: "Ele fecha o caderno devagar e guarda dentro da jaqueta, e não na mochila. Coloca o capacete. E antes de abaixar a viseira, fica olhando para ela mais um segundo, sem falar nada.", proxima: "r_fim" },
    rb_c1: { quem: "eu", texto: "A segunda frase você fez sozinho. Tinha que ter um agradecimento pra você também.", proxima: "rb_c2" },
    rb_c2: { tipo: "narracao", texto: "O Blake fica parado. Ninguém nunca agradeceu ele por pensar devagar. Ela vê isso passar pelo rosto dele, rápido, e sumir.", proxima: "rb_c3" },
    rb_c3: { quem: "blake", texto: "Então eu escrevo. “Agradecimento: ao Blake, por não desistir da segunda frase.”", proxima: "rb_c4" },
    rb_c4: { quem: "eu", texto: "Perfeito.", proxima: "rb_c5" },
    rb_c5: { quem: "blake", texto: "A professora vai achar que eu fiquei maluco.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { roupa: "fora", tipo: "narracao", cenario: "frente-casa-sn-noite", transicao: "tempo", sprite: "ryuji", texto: "Depois do caldo, o Ryuji leva ela em casa na Relâmpago. Na frente do prédio, ele não desliga a moto. Ele fica sentado, de capacete, com as mãos no guidão.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", texto: "Hoje eu fiz a prova surpresa de biologia e pensei em você. Não, espera, não é isso. Eu pensei nos cartões. Em você no corredor ontem, segurando os meus cartões. Eu lembrei de tudo na prova por causa disso.", proxima: "rr_03" },
    rr_03: { quem: "ryuji", texto: "Eu decoro as coisas lembrando de você agora. Isso é muito esquisito? Fala a verdade.", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. “É esquisito. Mas eu gosto.”", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Gosta_voz_Ryuji"] },
      { texto: "B. “Então eu leio os cartões todo dia. Até a prova.”", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Cartoes_todo_dia"] },
      { texto: "C. Com voz de apresentadora: “Pergunta valendo um pirulito: qual é o nome dessa coisa esquisita?”", proxima: "rr_c1", pontos: { ryuji: 2 }, flags: ["Pergunta_pirulito"] }
    ]},
    rr_a1: { quem: "eu", texto: "É esquisito. Mas eu gosto.", proxima: "rr_a2" },
    rr_a2: { tipo: "narracao", texto: "O Ryuji fica parado. Depois levanta a viseira do capacete, só para olhar para ela sem nada no meio, e abaixa de novo, rápido, como quem esqueceu que estava sem armadura.", proxima: "rr_a3" },
    rr_a3: { quem: "ryuji", texto: "...Tá. Ótimo. Eu vou embora agora antes que eu fale mais coisa.", proxima: "r_fim" },
    rr_b1: { quem: "eu", texto: "Então eu leio os cartões todo dia. Até a prova.", proxima: "rr_b2" },
    rr_b2: { quem: "ryuji", texto: "Todo dia? Tipo, no intervalo? Na frente de todo mundo? Com a voz?", proxima: "rr_b3" },
    rr_b3: { quem: "eu", texto: "Com a voz.", proxima: "rr_b4" },
    rr_b4: { tipo: "narracao", texto: "Ele acelera a moto uma vez, alto, no meio da rua vazia, como quem grita sem abrir a boca, e vai embora buzinando até a esquina.", proxima: "r_fim" },
    rr_c1: { quem: "eu", texto: "Pergunta valendo um pirulito: qual é o nome dessa coisa esquisita?", proxima: "rr_c2" },
    rr_c2: { quem: "ryuji", texto: "...Passo. Eu passo essa. Essa não estava nos cartões.", proxima: "rr_c3" },
    rr_c3: { tipo: "narracao", texto: "Ele ri, e ela ri, e ele vai embora rindo. Mas na esquina ele buzina duas vezes, e ela sabe que a segunda buzina não é de piada.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: "fora", tipo: "narracao", cenario: "rua-noite", transicao: "tempo", sprite: "victor", texto: "Depois do caldo, o Victor leva ela até em casa a pé, com o Caramelo na coleira, dormindo em pé de tanto que comeu. Ele está quieto. O Victor quieto, de novo, pela segunda vez no mesmo dia.", proxima: "rv_02" },
    rv_02: { quem: "victor", texto: "O armário. Hoje. Eu fiquei pensando.", proxima: "rv_03" },
    rv_03: { quem: "eu", texto: "No quê?", proxima: "rv_04" },
    rv_04: { quem: "victor", texto: "Que eu chamo todo mundo de gatinha porque é fácil. É serviço social. Não custa nada. E hoje, no escuro, eu não consegui chamar você de nada.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. “Então me chama pelo nome. Só pelo nome.”", proxima: "rv_a1", pontos: { victor: 3 }, flags: ["Pelo_nome_Victor"] },
      { texto: "B. “Gatinha é bonito também. Mas eu gostei do silêncio.”", proxima: "rv_b1", pontos: { victor: 3 }, flags: ["Gostou_silencio"] },
      { texto: "C. Pegar a coleira do Caramelo da mão dele. “O Caramelo me chama de tia. Isso já é muito.”", proxima: "rv_c1", pontos: { victor: 2 }, flags: ["Tia_Caramelo"] }
    ]},
    rv_a1: { quem: "eu", texto: "Então me chama pelo nome. Só pelo nome.", proxima: "rv_a2" },
    rv_a2: { tipo: "narracao", texto: "O Victor para na calçada. Abre a boca. Fecha. Respira. E fala o nome dela, devagar, inteiro, sem gatinha antes e sem piada depois.", proxima: "rv_a3" },
    rv_a3: { quem: "victor", texto: "...É estranho. Parece que eu estou falando uma coisa importante.", proxima: "rv_a4" },
    rv_a4: { quem: "eu", texto: "Você está.", proxima: "r_fim" },
    rv_b1: { quem: "eu", texto: "Gatinha é bonito também. Mas eu gostei do silêncio.", proxima: "rv_b2" },
    rv_b2: { tipo: "narracao", texto: "O Victor olha para ela de lado. Depois para o chão. Depois tira um pirulito do bolso, olha para ele, e guarda de volta, sem abrir.", proxima: "rv_b3" },
    rv_b3: { quem: "victor", texto: "Então eu vou ficar em silêncio mais vezes. Perto de você. Só perto de você.", proxima: "r_fim" },
    rv_c1: { tipo: "narracao", texto: "Ela pega a coleira. O Caramelo acorda, olha para ela, e encosta a cabeça na perna dela, satisfeito.", proxima: "rv_c2" },
    rv_c2: { quem: "eu", texto: "O Caramelo me chama de tia. Isso já é muito.", proxima: "rv_c3" },
    rv_c3: { quem: "victor", texto: "Se você é tia dele... e eu sou o pai dele...", proxima: "rv_c4" },
    rv_c4: { tipo: "narracao", texto: "Ele para de falar no meio, percebendo onde a frase ia chegar, e fica vermelho até a raiz do cabelo. Ela ri tanto que o Caramelo late, e o Victor fica vermelho o resto do caminho inteiro.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Terça, 22h30", sprite: null, texto: "Em casa, no quarto, ela deita de costas na cama, ainda de uniforme, e fica olhando para o teto. Sem pensar, ela encosta a ponta dos dedos na boca.", proxima: "f_02" },
    f_02: { tipo: "pensamento", texto: "Um segundo. Foi um segundo, no chão do hall. Foi a queda. Foi sem querer. Ele também sabe que foi sem querer.", proxima: "f_03" },
    f_03: { tipo: "pensamento", texto: "Ele passou o dia inteiro sem olhar pra mim direito. Ele colocou cebolinha demais no meu caldo. Ele falou “eu fiz caldo” com as orelhas pegando fogo.", proxima: "f_04" },
    f_04: { tipo: "narracao", texto: "Ela vira para o lado. E aí lembra da outra cara do dia. A do corredor do bloco C. O maxilar travado, as mãos fechadas nos bolsos, os olhos escuros.", proxima: "f_05" },
    f_05: { tipo: "pensamento", texto: "Ninguém encosta em ninguém por minha causa. Nem no Victor, nem no Blake, nem no Ryuji, nem no Takeo, nem no Kaito.", proxima: "f_06" },
    f_06: { tipo: "pensamento", texto: "Se ele tentar, ele vai ter que passar por mim primeiro.", proxima: "ep_fim" },

    // Fim do Capítulo 34 (crie a entrada "capitulo34" em dados/capitulos.js).
    ep_fim: { fim: "capitulo34" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 35 (anotações do roteiro)
 *  • Kaito: os lábios se encostaram por um segundo na queda do hall. Ninguém falou disso. Na lojinha,
 *    "Eu fiz caldo", com as orelhas vermelhas. A menina do segundo ano que odeia a SN (fã do Kaito).
 *  • Takeo: a escada do bloco B (elevador quebrado), "décimo andar".
 *  • Victor: o armário de limpeza, o espirro de gatinho do inspetor, os dois rindo colados.
 *  • O Ren viu a SN e o Victor saindo do armário. Ficou com raiva, não falou nada, não virou a página
 *    do livro a aula inteira. NÃO mandou mensagem. PERIGO: o Victor pode virar alvo. A SN decidiu proteger.
 *  • A lojinha: 27 dias. O protocolo da prefeitura colado do lado do aviso.
 *  • REGRAS: sala da SN = Takeo, Mio, Hana, Reina, Ren, Akane · sem xadrez no Ren do presente.
 *  • SEGREDOS: o Ren matou o Takeo na primeira linha do tempo · a infância (a SN tinha uns 5 anos) · a tia.
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 No chão do hall (Kaito) · 2 No patamar (Takeo) · 3 Por onde começar (Caramelo)
 *  4 No armário de limpeza (Victor) · Rota (1 por rota)
 *
 * FLAGS NOVAS
 *  Amorteceu_Kaito · Cilio_Kaito · Cintura_Kaito · Segurou_patamar · Degraus_contra · Confirmou_peso
 *  Busca_cantina · Busca_blocoC · Busca_biscoito · Espirro_gatinho · Colada_Victor · Lagrima_Victor
 *  Cara_que_caiu · Queria_dizer_Kaito · Degraus_Kaito · Elevador_quebrado · Decimo_andar · Pe_bom_Takeo
 *  Coautora_Blake · Olhou_agradecimento · Agradece_Blake · Gosta_voz_Ryuji · Cartoes_todo_dia
 *  Pergunta_pirulito · Pelo_nome_Victor · Gostou_silencio · Tia_Caramelo
 */