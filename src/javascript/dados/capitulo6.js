/*
 * =====================================================================
 *  CAPÍTULO 6 — Força guardada
 *  Domingo à noite (continuação do Capítulo 5) até terça-feira à noite.
 *  Mesmo formato dos capítulos anteriores: cada linha é uma cena.
 * =====================================================================
 *
 *  O QUE ESTE CAPÍTULO DEFINE
 *    • Sora é tia da SN: irmã mais nova da mãe. Brigou com a família na adolescência
 *      porque achava que a força devia proteger os mais fracos, não ficar escondida.
 *      Saiu de casa aos 17. Criou o Jin como irmão (ele não é parente de sangue).
 *      Morreu há dez anos, num incêndio na beira do rio.
 *    • Romance mais lento: ninguém se declara neste capítulo. O Kaito finge que não
 *      liga para a SN, para esconder o que sente.
 *    • Vilão novo: Ren Sakuma, líder da Matilha. Cruel de verdade, sem lado bom.
 *
 *  PERSONAGENS SEM FICHA NO JOGO (falam com quem: "desconhecido" + rotulo)
 *    Mãe, Ren Sakuma, Shinji, Sayuri, Akane, Yuto (o calouro das cadeiras do Cap. 1),
 *    Professor (de inglês), Jin (mensagem).
 *
 *  CENÁRIOS (todos já existem; troque se criar fundos próprios)
 *    Cozinha → "quarto-sn" · Fundos do ginásio → "vestiario"
 *    Corredor do hospital → "corredor" · Beira do rio → "saida-colegio"
 *
 *  FLAGS DOS CAPÍTULOS ANTERIORES USADAS AQUI (com caminhos)
 *    Mae_sabe_Jin, Casa_Takeo/Kaito/Blake/Ryuji, Kaito_quase_beijo,
 *    Beijo_bochecha_Kaito, Mio_confessou_Blake, Alianca_Reina, Grupo_viu_forca.
 *
 *  Título, capa e gancho ficam em dados/capitulos.js: crie a entrada "capitulo6".
 */
Roteiro.registrar("capitulo6", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — SORA =================== */
    // Cenário: cozinha da casa, madrugada (usa "quarto-sn"). Só a luz do fogão acesa. Música: piano grave.
    c1_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Cena 1 — Sora", sprite: null, texto: "A mãe não responde no quarto. Ela só se levanta, sai, e desce a escada devagar. A SN vai atrás.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", cenario: "cozinha", sprite: "mae", texto: "Na cozinha, a mãe acende só a luz em cima do fogão. Coloca água para ferver. Pega duas xícaras. A xícara rachada fica de lado.", proxima: "c1_03" },
    c1_03: { tipo: "narracao", texto: "Ela não fala nada até o chá ficar pronto. A SN espera. Ela aprendeu essa semana que algumas coisas precisam do tempo da água ferver.", proxima: "c1_04" },
    c1_04: { quem: "mae", texto: "Sora era minha irmã. Dois anos mais nova que eu.", proxima: "c1_05" },
    c1_05: { tipo: "narracao", texto: "Ela fala olhando para o chá, não para a filha.", proxima: "c1_06" },
    c1_06: { quem: "mae", texto: "Sua tia. Você nunca conheceu. Ou conheceu, mas era pequena demais pra lembrar.", proxima: "c1_07" },
    c1_07: { tipo: "pensamento", texto: "Tia.", proxima: "c1_08" },
    c1_08: { tipo: "pensamento", texto: "Vinte e oito anos. Eu nunca soube que eu tinha uma tia.", proxima: "c1_09" },
    c1_09: { quem: "mae", texto: "Ela tinha a força. Igual a nós. Mas ela nunca aceitou a regra da sua avó. A parte do “ninguém pode saber”.", proxima: "c1_10" },
    c1_10: { quem: "mae", texto: "Com quinze anos, ela levantou um carro na frente da escola. Um carro inteiro. Tinha um menino preso embaixo. A rua toda viu.", proxima: "c1_11" },
    c1_11: { quem: "mae", texto: "Sua avó ficou um mês sem falar com ela. E a Sora disse uma coisa que eu nunca esqueci.", proxima: "c1_12" },
    c1_12: { quem: "mae", efeito: "eco", texto: "“Força guardada não protege ninguém. Se Deus deu isso pra gente, não foi pra gente esconder embaixo da geladeira. Foi pra ficar na frente de quem não consegue se defender.”", proxima: "c1_13" },
    c1_13: { tipo: "narracao", texto: "A mãe solta um riso curto, sem alegria.", proxima: "c1_14" },
    c1_14: { quem: "mae", texto: "Ela falou isso olhando pra geladeira. Ela sabia do envelope. Ela sempre soube de tudo.", proxima: "c1_15" },
    c1_15: { quem: "mae", texto: "Ela começou a se meter em toda briga do bairro. Defendendo qualquer um que estivesse apanhando. As pessoas começaram a falar. A sua avó começou a ter medo de verdade.", proxima: "c1_16" },
    c1_16: { quem: "mae", texto: "Com dezessete, depois de uma briga horrível aqui nessa cozinha, ela fez uma mochila e foi embora. E eu... eu fiquei do lado da sua avó. Eu disse que ela era egoísta. Que ela ia destruir a família.", proxima: "c1_17" },
    c1_17: { tipo: "narracao", texto: "A voz da mãe falha. Ela segura a xícara com as duas mãos, com cuidado, para não rachar mais uma.", proxima: "c1_18" },
    c1_18: { quem: "mae", texto: "Foi a última coisa que eu disse pra minha irmã.", proxima: "c1_19" },
    c1_19: { tipo: "narracao", texto: "Ela se levanta. Abre a gaveta de talheres, tira a gaveta inteira do trilho e, do fundo do móvel, pega uma foto dobrada ao meio.", proxima: "c1_20" },
    c1_20: { tipo: "narracao", texto: "Duas meninas adolescentes, abraçadas na frente desta mesma casa. Uma é a mãe, jovem, séria. A outra tem o cabelo curto, bagunçado, e um sorriso enorme, de quem nunca teve medo de nada.", proxima: "c1_21" },
    c1_21: { tipo: "narracao", texto: "A SN olha para o rosto da menina de cabelo curto. E sente uma coisa estranha. Ela se parece com a SN. Com a SN de agora. Com o cabelo solto e a cabeça erguida.", proxima: "c1_22" },
    c1_22: { tipo: "narracao", texto: "Atrás da foto, uma frase escrita à mão. Os setes cortados com um tracinho no meio. O quatro aberto em cima.", proxima: "c1_23" },
    c1_23: { tipo: "narracao", efeito: "eco", texto: "“Pra minha irmã mais velha, que um dia vai entender. Com amor, da sua irmã chata. 17/04.”", proxima: "c1_24" },
    c1_24: { tipo: "pensamento", texto: "A letra do Jin.", proxima: "c1_25" },
    c1_25: { tipo: "pensamento", texto: "Não. A letra da Sora. O Jin aprendeu a escrever com ela.", proxima: "c1_26" },
    c1_26: { quem: "mae", texto: "Dez anos atrás, a polícia me ligou. Teve um incêndio num depósito na beira do rio. Encontraram ela lá. Disseram que ela entrou pra tirar umas crianças. Tirou todas. Ela não saiu.", proxima: "c1_27" },
    c1_27: { quem: "mae", texto: "Do lado dela, no enterro, só tinha um menino. Uns catorze anos. Loiro. Ele não chorou. Ele só ficou segurando a jaqueta dela.", proxima: "c1_28" },
    c1_28: { tipo: "pensamento", texto: "Uma jaqueta grande demais no colo. Uma pessoa sozinha no enterro.", proxima: "c1_29" },
    c1_29: { tipo: "pensamento", texto: "O Jin e eu. A gente já viveu a mesma cena. Só que eu ainda não tinha vivido a minha.", proxima: "c1_30" },
    c1_30: { quem: "mae", texto: "Tem mais uma coisa. Uma coisa que eu nunca contei pra ninguém. Nem pra sua avó.", proxima: "c1_31" },
    c1_31: { quem: "mae", texto: "Uma semana antes do incêndio, a Sora apareceu aqui. Depois de quinze anos sem dar notícia. No meio da noite. Ela estava diferente. Mais velha nos olhos.", proxima: "c1_32" },
    c1_32: { quem: "mae", texto: "Ela disse que tinha voltado. Que já tinha visto o fim de tudo. Que ia consertar. E repetiu, várias vezes: “dessa vez ninguém morre”.", proxima: "c1_33" },
    c1_33: { quem: "mae", texto: "Eu achei que ela estava doente. Eu fechei a porta na cara dela.", proxima: "c1_34" },
    c1_34: { tipo: "narracao", texto: "A mãe olha para a filha. Pela primeira vez na conversa, direto nos olhos.", proxima: "c1_35" },
    c1_35: { quem: "mae", texto: "E na quarta-feira passada, você desceu pra tomar café com os mesmos olhos dela.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — Contar a verdade para a mãe?
    c1_esc1: { escolhas: [
      { texto: "A. Contar tudo. Os vinte e oito anos. A volta. O Takeo.", proxima: "c1_1a_1", pontos: { desvio: 3 }, flags: ["Mae_sabe_viagem"] },
      { texto: "B. “Eu não sei explicar, mãe. Mas eu não vou fazer você fechar a porta.”", proxima: "c1_1b_1", pontos: { desvio: 1 }, flags: ["Mae_desconfia_viagem"] },
      { texto: "C. Abraçar a mãe e não dizer nada. Hoje, o assunto é a Sora.", proxima: "c1_1c_1", flags: ["Mae_luto_Sora"] }
    ]},
    c1_1a_1: { tipo: "narracao", texto: "A SN conta. A mãe escuta. Ela não fecha a porta. Ela não diz que é loucura. Quando a filha termina, ela só segura o rosto dela com as duas mãos.", proxima: "c1_1a_2" },
    c1_1a_2: { quem: "mae", texto: "Vinte e oito anos. Você está aí dentro com vinte e oito anos. E a gente quase não se falava.", proxima: "c1_1a_3" },
    c1_1a_3: { quem: "mae", texto: "Eu não vou errar duas vezes. Eu acredito em você.", proxima: "c1_36" },
    c1_1b_1: { tipo: "narracao", texto: "A mãe fecha os olhos. As lágrimas que ela segurou a conversa inteira finalmente caem.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "mae", texto: "Então não explica. Só não some. Ela sumiu.", proxima: "c1_36" },
    c1_1c_1: { tipo: "narracao", texto: "A SN abraça a mãe por trás da cadeira. A mãe segura o braço dela e chora em silêncio, pela irmã, pela primeira vez em dez anos.", proxima: "c1_36" },

    // (todas as opções continuam aqui)
    c1_36: { tipo: "narracao", texto: "Quando a mãe vai dormir, a SN fica sozinha na cozinha com a foto. A menina de cabelo curto continua sorrindo, sem medo de nada.", proxima: "c1_37" },
    c1_37: { tipo: "pensamento", texto: "“Quem volta não muda o final. Só muda quem paga por ele.”", proxima: "c1_38" },
    c1_38: { tipo: "pensamento", texto: "Você salvou alguém, tia. E pagou com você.", proxima: "c1_39" },
    c1_39: { tipo: "pensamento", texto: "Quem você foi salvar?", proxima: "c2_01" },

    /* =================== CENA 2 — TERÇA-FEIRA =================== */
    // Cenário: corredor da escola, terça de manhã. Música: tema leve do colégio, um pouco desafinado.
    c2_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Cena 2 — Terça-feira", sprite: null, texto: "A escola deu folga na segunda para quem estava na olaria, por causa da polícia. Na terça, tudo parece normal. Normal demais.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", texto: "O Takeo ficou em casa, de repouso, com duas costelas trincadas e uma avó que não deixa ele levantar nem para ir ao banheiro sem perguntar.", proxima: "c2_03" },
    c2_03: { tipo: "narracao", texto: "A SN chega no corredor do segundo andar. A gangue do Kaito está encostada na janela, como sempre. O Kaito no meio, de jaqueta, com o curativo na sobrancelha.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", texto: "Ela sorri. Levanta a mão para acenar.", proxima: "c2_05" },
    c2_05: { tipo: "narracao", sprite: "kaito", texto: "O Kaito olha para ela. Um segundo. E vira o rosto para a janela, como se ela fosse qualquer pessoa passando no corredor.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", texto: "A mão dela fica parada no ar. Ela abaixa devagar.", proxima: "c2_cam1" },
    c2_cam1: { caminhos: [
      { flag: "Kaito_quase_beijo", proxima: "c2_k_quase" },
      { flag: "Beijo_bochecha_Kaito", proxima: "c2_k_beijo" },
      { flag: "Casa_Kaito", proxima: "c2_k_casa" }
    ], proxima: "c2_k_normal" },
    c2_k_quase: { tipo: "pensamento", texto: "Domingo, no parquinho, ele estava a um centímetro do meu rosto. Hoje ele não me olha.", proxima: "c2_07" },
    c2_k_beijo: { tipo: "pensamento", texto: "Na ponte, eu dei um beijo na bochecha dele. Ele disse que eu devia uma explicação. Hoje ele não me olha.", proxima: "c2_07" },
    c2_k_casa: { tipo: "pensamento", texto: "Domingo, ele me levou pra casa. Ele sentou comigo no banco do parquinho. Hoje ele não me olha.", proxima: "c2_07" },
    c2_k_normal: { tipo: "pensamento", texto: "No hospital, ele deixou eu segurar o gelo. Ou quase deixou. Hoje ele não me olha.", proxima: "c2_07" },

    c2_07: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji, encostado do lado do Kaito, olha para o Kaito, depois para a SN, depois para o Kaito de novo. E dá uma cotovelada nas costelas dele.", proxima: "c2_08" },
    c2_08: { quem: "ryuji", texto: "Ei, líder. Sua amiga da viga está te dando oi.", proxima: "c2_09" },
    c2_09: { quem: "kaito", sprite: "kaito", texto: "Eu vi.", proxima: "c2_10" },
    c2_10: { quem: "ryuji", sprite: "ryuji", texto: "E?", proxima: "c2_11" },
    c2_11: { quem: "kaito", sprite: "kaito", texto: "E nada. Bom dia, SN.", proxima: "c2_12" },
    c2_12: { tipo: "narracao", texto: "Ele fala isso sem olhar. Com a mesma voz que usa para falar com o porteiro.", proxima: "c2_13" },
    c2_13: { tipo: "narracao", sprite: "blake", texto: "Do outro lado do Kaito, o Blake fecha os olhos por um segundo, como quem vê alguém pisando numa casca de banana em câmera lenta.", proxima: "c2_14" },
    c2_14: { tipo: "pensamento", texto: "Aos dezesseis, eu ia passar o dia inteiro achando que fiz alguma coisa errada.", proxima: "c2_15" },
    c2_15: { tipo: "pensamento", texto: "Aos vinte e oito... eu também vou. Mas pelo menos eu sei que estou fazendo isso.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — Como reagir ao Kaito?
    c2_esc2: { escolhas: [
      { texto: "A. “Bom dia, Kaito.” Na mesma voz fria que ele usou. E seguir andando.", proxima: "c2_2a_1", pontos: { kaito: 1 }, flags: ["SN_fria_Kaito"] },
      { texto: "B. Parar na frente dele: “Eu fiz alguma coisa?”", proxima: "c2_2b_1", pontos: { kaito: 2 }, flags: ["SN_perguntou_Kaito"] },
      { texto: "C. Não dizer nada. Só passar. Se ele quer distância, ele vai ter.", proxima: "c2_2c_1", flags: ["SN_ignorou_Kaito"] }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "Ela devolve o bom-dia no mesmo tom. Sem sorrir. E passa.", proxima: "c2_2a_2" },
    c2_2a_2: { tipo: "narracao", texto: "Ela não vê. Mas o Kaito vira a cabeça para olhar ela indo embora. E fica olhando até ela dobrar o corredor.", proxima: "c2_2a_3" },
    c2_2a_3: { quem: "ryuji", sprite: "ryuji", texto: "Líder. Você é o cara mais burro que eu conheço. E eu me conheço.", proxima: "c2_16" },
    c2_2b_1: { tipo: "narracao", texto: "Ela para bem na frente dele. A gangue inteira fica em silêncio. O Kaito é obrigado a olhar.", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "kaito", texto: "Não. Você não fez nada.", proxima: "c2_2b_3" },
    c2_2b_3: { quem: "eu", texto: "Então por que...", proxima: "c2_2b_4" },
    c2_2b_4: { quem: "kaito", texto: "Porque tem gente olhando. Eu sou o líder. Eu não fico de conversinha no corredor.", proxima: "c2_2b_5" },
    c2_2b_5: { tipo: "narracao", texto: "É uma desculpa ruim. Ele sabe. Ela sabe. A gangue inteira sabe. Mas ninguém diz nada.", proxima: "c2_2b_6" },
    c2_2b_6: { tipo: "pensamento", texto: "As orelhas dele estão vermelhas.", proxima: "c2_16" },
    c2_2c_1: { tipo: "narracao", texto: "Ela passa direto, olhando para a frente. Como passava aos dezesseis, só que de cabeça erguida.", proxima: "c2_2c_2" },
    c2_2c_2: { tipo: "narracao", texto: "Atrás dela, ela ouve o Blake falar baixo, quase sem mexer a boca: “Parabéns.” E o Kaito responder: “Cala a boca.”", proxima: "c2_16" },

    // (todas as opções continuam aqui)
    c2_16: { tipo: "narracao", sprite: null, texto: "Na sala, a Mio já está sentada na carteira da SN, esperando, com os olhos brilhando de fofoca.", proxima: "c2_17" },
    c2_17: { quem: "mio", sprite: "mio", texto: "Eu vi. O corredor inteiro viu. O Kaito te ignorou. O KAITO. Que pegou um rio inteiro pra te salvar.", proxima: "c2_18" },
    c2_18: { quem: "eu", texto: "Ele não me salvou. Ele salvou o Takeo.", proxima: "c2_19" },
    c2_19: { quem: "mio", texto: "Ah, claro. E foi por causa do Takeo que ele ficou com aquela cara de cachorro abandonado quando você passou.", proxima: "c2_20" },
    c2_20: { quem: "hana", sprite: "hana", texto: "Meninos de dezessete anos são muito previsíveis. Quando gostam, fingem que não gostam. Eu li isso num livro.", proxima: "c2_21" },
    c2_21: { quem: "mio", sprite: "mio", texto: "Que livro?", proxima: "c2_22" },
    c2_22: { quem: "hana", sprite: "hana", texto: "Vários. Todos.", proxima: "c2_cam2" },

    // A Mio e o Blake: como ficou?
    c2_cam2: { caminhos: [
      { flag: "Mio_confessou_Blake", proxima: "c2_m_conf" }
    ], proxima: "c2_m_nao" },
    c2_m_conf: { quem: "eu", texto: "E você? O que o Blake respondeu no hospital?", proxima: "c2_m_conf2" },
    c2_m_conf2: { tipo: "narracao", sprite: "mio", texto: "A Mio fica vermelha até a raiz do cabelo loiro.", proxima: "c2_m_conf3" },
    c2_m_conf3: { quem: "mio", texto: "Ele disse “obrigado por me contar”. E pegou o pão de queijo. E comeu. Inteiro. Na minha frente.", proxima: "c2_m_conf4" },
    c2_m_conf4: { quem: "mio", texto: "Eu não sei o que isso significa! Ninguém sabe! A Hana fez uma lista de significados e deu dezessete!", proxima: "c2_m_conf5" },
    c2_m_conf5: { quem: "hana", sprite: "hana", texto: "Dezoito. Eu achei mais um no ônibus.", proxima: "c2_23" },
    c2_m_nao: { quem: "eu", texto: "E você? Falou com o Blake?", proxima: "c2_m_nao2" },
    c2_m_nao2: { quem: "mio", sprite: "mio", texto: "Eu? Ainda não. Tinha muita gente no hospital. E ele estava machucado. E estava chovendo. E Mercúrio estava retrógrado.", proxima: "c2_m_nao3" },
    c2_m_nao3: { quem: "hana", sprite: "hana", texto: "Mercúrio não estava retrógrado.", proxima: "c2_m_nao4" },
    c2_m_nao4: { quem: "mio", sprite: "mio", texto: "Pra mim estava!", proxima: "c2_23" },

    c2_23: { tipo: "narracao", sprite: null, texto: "O professor de inglês entra. Mas não sozinho.", proxima: "c3_01" },

    /* =================== CENA 3 — O ALUNO NOVO =================== */
    // Cenário: sala de aula. Música: some de repente.
    c3_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Cena 3 — O aluno novo", sprite: "ren", texto: "Atrás do professor, entra um garoto. Alto, uniforme impecável, gravata no lugar certo, cabelo castanho-escuro arrumado como em foto de catálogo. Um relógio caro no pulso.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "Ele sorri para a turma. Um sorriso perfeito. Dentes perfeitos. Olhos cinza-claros, quase transparentes, que passam por cada rosto da sala como quem lê uma lista.", proxima: "c3_03" },
    c3_03: { quem: "professor", texto: "Turma, esse é o aluno transferido de que eu falei. Ele vem de um colégio particular da capital. Primeiro lugar no ranking nacional ano passado. Se apresenta, por favor.", proxima: "c3_04" },
    // Ren: troque quem por "ren" quando criar o personagem.
    c3_04: { quem: "ren", rotulo: "Aluno novo", texto: "Bom dia. Meu nome é Ren Sakuma. Eu tenho dezessete anos. Eu gosto de xadrez, de ler e de conhecer pessoas novas. Espero que a gente possa ser amigos.", proxima: "c3_05" },
    c3_05: { tipo: "narracao", texto: "Ele faz uma pequena reverência. As meninas da primeira fila suspiram. A Sayuri, na terceira fila, já está ajeitando o laço rosa.", proxima: "c3_06" },
    c3_06: { tipo: "narracao", texto: "A SN não suspira. A SN está gelada. Da cabeça aos pés. Como no beco, quando o canivete abriu.", proxima: "c3_07" },
    c3_07: { tipo: "pensamento", texto: "Eu conheço esse rosto.", proxima: "c3_08" },
    c3_08: { tipo: "pensamento", texto: "Não daqui. Não da escola. Da primeira vez, ele não estudou aqui. Eu teria lembrado.", proxima: "c3_09" },
    c3_09: { tipo: "narracao", efeito: "flashback", texto: "Uma televisão ligada num bar, aos vinte e cinco anos. O jornal da noite. Um homem jovem de terno cortando uma fita vermelha na beira do rio. “O empresário que transformou a orla abandonada no bairro mais caro da cidade.”", proxima: "c3_10" },
    c3_10: { tipo: "narracao", efeito: "flashback", texto: "O mesmo sorriso perfeito. Os mesmos olhos cinza.", proxima: "c3_11" },
    c3_11: { tipo: "pensamento", texto: "Ren Sakuma. Eu vi esse nome. Em algum lugar além da televisão. Eu sei que vi.", proxima: "c3_12" },
    c3_12: { tipo: "pensamento", texto: "Por que eu não consigo lembrar onde?", proxima: "c3_13" },
    c3_13: { tipo: "narracao", texto: "O professor indica a única carteira vazia. A do Takeo. A terceira da fileira da janela.", proxima: "c3_14" },
    c3_14: { quem: "professor", texto: "Pode sentar ali por enquanto. O aluno está afastado por alguns dias.", proxima: "c3_15" },
    c3_15: { tipo: "narracao", sprite: "ren", texto: "O Ren anda pelo corredor entre as carteiras. Quando passa pela mesa da SN, ele diminui o passo. Só um pouco. Só o suficiente.", proxima: "c3_16" },
    c3_16: { quem: "ren", texto: "Que mão bonita. Pena o machucado. Viga de madeira, imagino?", proxima: "c3_17" },
    c3_17: { tipo: "narracao", texto: "Ele fala baixo, sorrindo, olhando para a palma enfaixada dela. Ninguém mais ouve. Depois segue andando e senta na carteira do Takeo, como se ela sempre tivesse sido dele.", proxima: "c3_18" },
    c3_18: { tipo: "narracao", sprite: "hana", texto: "Do lado da SN, a Hana para de escrever. Ela não ouviu o que ele disse. Mas viu a cara da SN.", proxima: "c3_19" },
    c3_19: { quem: "hana", texto: "Você conhece ele.", proxima: "c3_20" },
    c3_20: { quem: "eu", texto: "Não. Mas acho que vou ter que conhecer.", proxima: "c4_01" },

    /* =================== CENA 4 — O ALMOÇO =================== */
    // Cenário: sala de aula, intervalo do almoço. Música: tema leve, com uma nota errada no fundo.
    c4_01: { tipo: "narracao", transicao: "tempo", legenda: "Cena 4 — O almoço", sprite: null, texto: "No almoço, a SN, a Mio e a Hana juntam as três carteiras como sempre. A Mio abre a marmita. A Hana abre um livro. A SN abre o almoço e não consegue comer.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "Uma quarta cadeira é puxada para a mesa. Sem pedir.", proxima: "c4_03" },
    c4_03: { quem: "ren", texto: "Posso? Eu não conheço ninguém ainda. E disseram que esta é a mesa mais interessante da sala.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", texto: "Ele senta antes de alguém responder. Coloca na mesa uma marmita preta, de laca, com o almoço arrumado como em restaurante.", proxima: "c4_05" },
    c4_05: { quem: "mio", sprite: "mio", texto: "Quem disse isso?", proxima: "c4_06" },
    c4_06: { quem: "ren", texto: "A Sayuri. Muito simpática. Ela me contou um monte de coisa sobre vocês. Principalmente sobre você, SN.", proxima: "c4_07" },
    c4_07: { quem: "ren", texto: "Ela te chama de Fantasma, sabia? Que apelido cruel. Eu jamais chamaria alguém assim.", proxima: "c4_08" },
    c4_08: { tipo: "narracao", texto: "Ele sorri. E a SN entende uma coisa. Ele não está defendendo ela. Ele está mostrando que sabe.", proxima: "c4_09" },
    c4_09: { quem: "ren", texto: "Eu adoro histórias de virada. A menina invisível que um dia acorda e começa a quebrar coisas. Portões. Vigas. Pessoas.", proxima: "c4_10" },
    c4_10: { quem: "ren", texto: "É muito inspirador. De verdade.", proxima: "c4_11" },
    c4_11: { tipo: "narracao", sprite: "hana", texto: "A Hana fecha o livro. Devagar. Ela está olhando para o Ren do mesmo jeito que olhou para o mapa da olaria.", proxima: "c4_12" },
    c4_12: { quem: "hana", texto: "Como você sabe da viga? A gente não contou pra ninguém. E não saiu no jornal.", proxima: "c4_13" },
    c4_13: { tipo: "narracao", texto: "Um segundo. Um segundo inteiro em que o sorriso do Ren não muda nada, mas os olhos ficam parados na Hana. Como quem anota um nome.", proxima: "c4_14" },
    c4_14: { quem: "ren", texto: "Você é a Hana, né? A do caderno de gatinhos. Muito observadora. Eu gosto de gente observadora.", proxima: "c4_15" },
    c4_15: { quem: "ren", texto: "Elas costumam perceber as coisas tarde demais, mas percebem.", proxima: "c4_16" },
    c4_16: { tipo: "narracao", texto: "A Hana fica pálida. A Mio coloca o hashi na mesa com força.", proxima: "c4_17" },
    c4_17: { quem: "mio", sprite: "mio", texto: "Ei. Garoto novo. Acho que você sentou na mesa errada.", proxima: "c4_18" },
    c4_18: { quem: "ren", texto: "Você é a Mio. A que conhece todo mundo. A que corre atrás de quem gosta. Ainda está mancando do joelho?", proxima: "c4_19" },
    c4_19: { tipo: "narracao", texto: "A Mio abre a boca. E fecha. Pela primeira vez na vida, a Mio não tem nada para responder.", proxima: "c4_20" },
    c4_20: { tipo: "pensamento", texto: "Ele sabe tudo. Igual ao Jin. Mas o Jin falava como quem tinha medo de mim.", proxima: "c4_21" },
    c4_21: { tipo: "pensamento", texto: "O Ren fala como quem está escolhendo onde morder primeiro.", proxima: "c4_esc3" },

    // ▶ ESCOLHA 3 — Enfrentar o Ren na mesa
    c4_esc3: { escolhas: [
      { texto: "A. Calma, sem desviar o olhar: “Elas estão comigo. Se você quer falar comigo, fala comigo.”", proxima: "c4_3a_1", pontos: { mio: 1, hana: 1, desvio: 1 }, flags: ["SN_enfrentou_Ren"] },
      { texto: "B. Levantar e puxar as amigas: “Vamos almoçar em outro lugar.”", proxima: "c4_3b_1", pontos: { mio: 1, hana: 1 }, flags: ["SN_saiu_Ren"] },
      { texto: "C. Ficar quieta e observar ele. Cada detalhe. Como fez com o Jin.", proxima: "c4_3c_1", pontos: { desvio: 1 }, flags: ["SN_observou_Ren"] }
    ]},
    c4_3a_1: { tipo: "narracao", texto: "O Ren inclina a cabeça, curioso, como uma criança que acabou de ver um inseto fazer uma coisa inesperada.", proxima: "c4_3a_2" },
    c4_3a_2: { quem: "ren", texto: "Que bonito. Protegendo os mais fracos. Igualzinha a ela.", proxima: "c4_3a_3" },
    c4_3a_3: { quem: "eu", texto: "A quem?", proxima: "c4_3a_4" },
    c4_3a_4: { tipo: "narracao", texto: "Ele não responde. Só sorri, se levanta, pega a marmita e vai embora. Mas deixa a cadeira ali, puxada para a mesa delas. Como um aviso.", proxima: "c4_22" },
    c4_3b_1: { tipo: "narracao", texto: "Ela se levanta. A Mio e a Hana levantam junto, na hora. As três pegam as marmitas e saem da sala.", proxima: "c4_3b_2" },
    c4_3b_2: { quem: "ren", rotulo: "Ren (atrás delas)", sprite: null, texto: "Fugir também é uma escolha, SN. A Sora nunca fugia. Mas olha onde ela foi parar.", proxima: "c4_3b_3" },
    c4_3b_3: { tipo: "narracao", texto: "A SN para no meio do corredor. As costas dela ficam rígidas. Ela não vira. Mas ela ouviu.", proxima: "c4_22" },
    c4_3c_1: { tipo: "narracao", texto: "Ela não responde. Ela olha. O relógio caro, ainda com a etiqueta de proteção no vidro. A unha do polegar roída até sangrar, a única coisa imperfeita nele. Um arranhão fino no pescoço, escondido pela gola.", proxima: "c4_3c_2" },
    c4_3c_2: { tipo: "narracao", texto: "E, no pulso, quando ele pega o hashi, uma marca. Pequena. Redonda. Antiga. Uma cicatriz de queimadura.", proxima: "c4_3c_3" },
    c4_3c_3: { tipo: "pensamento", texto: "Queimadura.", proxima: "c4_3c_4" },
    c4_3c_4: { tipo: "pensamento", texto: "“Teve um incêndio num depósito na beira do rio.”", proxima: "c4_3c_5" },
    c4_3c_5: { tipo: "narracao", texto: "O Ren percebe o olhar dela no pulso dele. Puxa a manga da camisa para baixo, sem pressa. E sorri.", proxima: "c4_3c_6" },
    c4_3c_6: { quem: "ren", texto: "Coisa de criança. Eu brincava muito com fogo. Hoje em dia eu só deixo outras pessoas brincarem.", proxima: "c4_22" },

    // (todas as opções continuam aqui)
    c4_22: { tipo: "narracao", sprite: null, texto: "No resto do almoço, a Mio não fala. A Hana não lê. E a SN não come.", proxima: "c4_23" },
    c4_23: { tipo: "pensamento", texto: "“Igualzinha a ela.” Ele conhecia a Sora.", proxima: "c4_24" },
    c4_24: { tipo: "pensamento", texto: "Como um garoto de dezessete anos conheceu uma mulher que morreu há dez?", proxima: "c4_25" },
    c4_25: { tipo: "pensamento", texto: "Ele tinha sete anos.", proxima: "c4_26" },
    c4_26: { tipo: "pensamento", texto: "Ele tinha sete anos e uma queimadura no pulso.", proxima: "c5_01" },

    /* =================== CENA 5 — PEQUENAS COISAS =================== */
    // Cenário: pátio dos fundos, arquibancada, à tarde. Música: tema calmo, violão.
    // Romance mais lento: ninguém se declara. São só pequenas coisas.
    c5_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Cena 5 — Pequenas coisas", sprite: null, texto: "Na aula vaga da tarde, a SN vai para a arquibancada dos fundos. Ela precisa pensar. E, de algum jeito, a arquibancada da gangue virou o lugar onde ela pensa melhor.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji já está lá. Claro. Deitado no degrau mais alto, matando aula, com o elástico preto ou o coelhinho no pulso, dependendo do dia.", proxima: "c5_03" },
    c5_03: { quem: "ryuji", texto: "Princesa. Veio se esconder do líder mal-humorado também?", proxima: "c5_04" },
    c5_04: { quem: "eu", texto: "Vim me esconder do aluno novo.", proxima: "c5_05" },
    c5_05: { tipo: "narracao", texto: "O Ryuji se senta na hora. A preguiça some da cara dele.", proxima: "c5_06" },
    c5_06: { quem: "ryuji", texto: "O Sakuma? O bonitinho de gravata? Ele passou no corredor do terceiro ano hoje de manhã e cumprimentou todo mundo pelo nome. Todo mundo. Ele chegou ontem.", proxima: "c5_07" },
    c5_07: { quem: "ryuji", texto: "E ele parou na frente do Shinji Oda no portão. Eu vi. O Shinji abaixou a cabeça pra ele. O Shinji não abaixa a cabeça nem pro irmão.", proxima: "c5_08" },
    c5_08: { tipo: "pensamento", texto: "Os Oda fugiram pelo rio no domingo. O Jin largou eles. E, dois dias depois, eles já têm um dono novo.", proxima: "c5_09" },
    c5_09: { tipo: "narracao", texto: "Ela senta dois degraus abaixo do Ryuji, como na primeira vez. Ele não fala nada por um tempo. Depois tira alguma coisa do bolso da jaqueta e joga no colo dela.", proxima: "c5_10" },
    c5_10: { tipo: "narracao", texto: "Um pacote de bolacha recheada. De morango. Amassado.", proxima: "c5_11" },
    c5_11: { quem: "ryuji", texto: "A Momo mandou. Ela disse que a princesa da viga precisa comer pra ficar forte.", proxima: "c5_12" },
    c5_12: { quem: "eu", texto: "A Momo mandou?", proxima: "c5_13" },
    c5_13: { quem: "ryuji", texto: "...A Momo mandou eu comprar. Dá no mesmo.", proxima: "c5_14" },
    c5_14: { tipo: "narracao", texto: "Ele vira o rosto para o outro lado. A SN abre o pacote e oferece metade. Ele pega sem olhar. Os dois comem em silêncio. É bom. É simples. É só isso.", proxima: "c5_esc4" },

    // ▶ ESCOLHA 4 — Uma pequena coisa com o Ryuji
    c5_esc4: { escolhas: [
      { texto: "A. “Fala pra Momo que eu agradeci. E que a princesa vai ficar muito forte.”", proxima: "c5_4a_1", pontos: { ryuji: 1 } },
      { texto: "B. “Fala pra Momo que eu sei que foi o irmão dela que escolheu o sabor.”", proxima: "c5_4b_1", pontos: { ryuji: 2 }, flags: ["Ryuji_bolacha"] }
    ]},
    c5_4a_1: { quem: "ryuji", texto: "Ela vai querer que você vá lá em casa mostrar. Prepara o braço.", proxima: "c5_15" },
    c5_4b_1: { tipo: "narracao", texto: "O Ryuji engasga com a bolacha.", proxima: "c5_4b_2" },
    c5_4b_2: { quem: "ryuji", texto: "Eu não... Ela... É o sabor que tinha!", proxima: "c5_4b_3" },
    c5_4b_3: { quem: "eu", texto: "Tinha chocolate do lado. Eu vi na cantina.", proxima: "c5_4b_4" },
    c5_4b_4: { quem: "ryuji", texto: "...Você presta atenção demais em tudo. Isso é muito irritante.", proxima: "c5_15" },

    // (todas as opções continuam aqui)
    c5_15: { tipo: "narracao", sprite: null, texto: "Passos na escada da arquibancada. A SN levanta os olhos.", proxima: "c5_16" },
    c5_16: { tipo: "narracao", sprite: "kaito", texto: "É o Kaito. Ele para no meio da escada quando vê os dois sentados juntos, dividindo a bolacha.", proxima: "c5_17" },
    c5_17: { tipo: "narracao", texto: "Um segundo. Alguma coisa passa pelo rosto dele, rápido demais para ter nome. Depois some.", proxima: "c5_18" },
    c5_18: { quem: "kaito", texto: "Ryuji. O Blake está te chamando. Agora.", proxima: "c5_19" },
    c5_19: { quem: "ryuji", sprite: "ryuji", texto: "O Blake? O Blake nunca chama ninguém. O Blake manda mensagem com uma palavra só.", proxima: "c5_20" },
    c5_20: { quem: "kaito", sprite: "kaito", texto: "Agora, Ryuji.", proxima: "c5_21" },
    c5_21: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji olha para o Kaito. Depois para a SN. Depois para o Kaito de novo. Ele se levanta devagar, com um sorriso torto, enorme.", proxima: "c5_22" },
    c5_22: { quem: "ryuji", texto: "Claro, líder. O Blake. Vou lá. Correndo. Não quero atrapalhar a reunião importante de vocês dois.", proxima: "c5_23" },
    c5_23: { tipo: "narracao", sprite: "kaito", texto: "Ele passa pelo Kaito e dá um tapinha no ombro dele. O Kaito não reage. Quando o Ryuji some, ele continua parado na escada. Não sobe. Não desce.", proxima: "c5_24" },
    c5_24: { quem: "eu", texto: "O Blake não chamou ele, né?", proxima: "c5_25" },
    c5_25: { quem: "kaito", texto: "...Não.", proxima: "c5_26" },
    c5_26: { tipo: "narracao", texto: "Ele sobe os degraus e senta. Não do lado dela. Dois degraus acima. Longe o suficiente para não encostar. Perto o suficiente para ela ouvir quando ele fala baixo.", proxima: "c5_27" },
    c5_27: { quem: "kaito", texto: "O aluno novo. O Sakuma. Fica longe dele.", proxima: "c5_28" },
    c5_28: { quem: "eu", texto: "Por quê? Você ainda nem falou comigo direito hoje. Por que se importa?", proxima: "c5_29" },
    c5_29: { tipo: "narracao", texto: "Silêncio. O Kaito olha para a quadra vazia lá embaixo.", proxima: "c5_30" },
    c5_30: { quem: "kaito", texto: "Porque eu sou o líder. Eu me importo com todo mundo que anda com a gangue. É meu trabalho.", proxima: "c5_31" },
    c5_31: { tipo: "pensamento", texto: "“Todo mundo.” Ele disse “todo mundo”.", proxima: "c5_32" },
    c5_32: { tipo: "pensamento", texto: "Na ponte, ele disse que só queria que eu voltasse inteira. No hospital, ele disse que queria ser o jeito que eu preciso. E agora eu sou “todo mundo”.", proxima: "c5_esc5" },

    // ▶ ESCOLHA 5 — O Kaito e o “todo mundo”
    c5_esc5: { escolhas: [
      { texto: "A. “Entendi. Então obrigada pelo aviso, líder.” E ir embora.", proxima: "c5_5a_1", pontos: { kaito: 1 }, flags: ["SN_chateada_Kaito"] },
      { texto: "B. “Você está mentindo. Você fica com as orelhas vermelhas quando mente.”", proxima: "c5_5b_1", pontos: { kaito: 2 }, flags: ["SN_pegou_Kaito"] },
      { texto: "C. Subir dois degraus e sentar do lado dele. Sem dizer nada.", proxima: "c5_5c_1", pontos: { kaito: 2 }, flags: ["SN_sentou_Kaito"] }
    ]},
    c5_5a_1: { tipo: "narracao", texto: "Ela desce a arquibancada. Ela não olha para trás. Por isso não vê o Kaito esfregando o rosto com as duas mãos, com força, como quem tenta apagar alguma coisa.", proxima: "c5_33" },
    c5_5b_1: { tipo: "narracao", texto: "O Kaito leva a mão às orelhas sem pensar. Depois percebe o que fez e abaixa a mão, rápido.", proxima: "c5_5b_2" },
    c5_5b_2: { quem: "kaito", texto: "Eu não estou mentindo.", proxima: "c5_5b_3" },
    c5_5b_3: { quem: "eu", texto: "Suas orelhas estão mais vermelhas agora.", proxima: "c5_5b_4" },
    c5_5b_4: { quem: "kaito", texto: "Está calor.", proxima: "c5_5b_5" },
    c5_5b_5: { quem: "eu", texto: "Está catorze graus, Kaito.", proxima: "c5_5b_6" },
    c5_5b_6: { tipo: "narracao", texto: "Ele levanta e desce a arquibancada sem responder. Mas, no último degrau, ela ouve ele rindo. Baixinho. Contra a vontade.", proxima: "c5_33" },
    c5_5c_1: { tipo: "narracao", texto: "Ela sobe e senta do lado dele. O Kaito fica rígido. Não se mexe. Não se afasta. Não se aproxima.", proxima: "c5_5c_2" },
    c5_5c_2: { tipo: "narracao", texto: "Eles ficam assim, lado a lado, olhando para a quadra vazia, sem falar nada, até o sinal tocar. O ombro dele a dois centímetros do dela. Nenhum dos dois diminui esses dois centímetros.", proxima: "c5_5c_3" },
    c5_5c_3: { tipo: "pensamento", texto: "Ele não foi embora. Isso já é alguma coisa.", proxima: "c5_33" },

    // (todas as opções continuam aqui)
    c5_33: { tipo: "narracao", cenario: "clube-leitura", sprite: "blake", texto: "Depois da aula, no clube de leitura, o Blake está esperando com o livro de física. A recuperação é na sexta. Ele não fala do Kaito. Ela não pergunta.", proxima: "c5_34" },
    c5_34: { tipo: "narracao", texto: "Eles estudam plano inclinado por quarenta minutos. Em algum momento, ele empurra o caderno para ela conferir uma conta, e os dedos dos dois esbarram em cima da página. Os dois tiram a mão rápido. Nenhum dos dois comenta.", proxima: "c5_35" },
    c5_35: { quem: "blake", texto: "O Kaito ficou acordado a noite inteira de domingo. Ele me ligou às três da manhã pra perguntar se “uma pessoa normal” manda mensagem pra alguém depois de um dia daqueles.", proxima: "c5_36" },
    c5_36: { quem: "blake", texto: "Eu disse que sim. Ele disse que ele não é uma pessoa normal, ele é o líder. E desligou.", proxima: "c5_37" },
    c5_37: { quem: "eu", texto: "Por que você está me contando isso?", proxima: "c5_38" },
    c5_38: { quem: "blake", texto: "Porque ele é meu melhor amigo. E ele está sendo idiota. E alguém tem que ser o balde de água.", proxima: "c5_39" },
    c5_39: { tipo: "narracao", texto: "Ele volta a olhar para o caderno. Mas a caneta fica parada.", proxima: "c5_40" },
    c5_40: { quem: "blake", texto: "Mesmo quando ser o balde de água não é o que eu queria ser.", proxima: "c5_41" },
    c5_41: { tipo: "pensamento", texto: "Eu não sei o que ele quis dizer com isso.", proxima: "c5_42" },
    c5_42: { tipo: "pensamento", texto: "Ou eu sei. E finjo que não. Igual o Kaito.", proxima: "c5_43" },
    c5_43: { tipo: "narracao", sprite: null, texto: "O celular vibra. Uma mensagem do Takeo.", proxima: "c5_44" },
    c5_44: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "minha avó tá me obrigando a tomar sopa de 2 em 2 horas. me salva. como foi a escola? sentiu falta da carteira vazia?", proxima: "c5_45" },
    c5_45: { tipo: "pensamento", texto: "A carteira não ficou vazia. O Ren sentou nela.", proxima: "c5_esc6" },

    // ▶ ESCOLHA 6 — Responder o Takeo
    c5_esc6: { escolhas: [
      { texto: "A. “Senti. Volta logo. A física está chata sem ninguém perguntando o que é polia.”", proxima: "c5_6a_1", pontos: { takeo: 2 } },
      { texto: "B. “Toma a sopa. Toda. Eu passo aí amanhã pra conferir.”", proxima: "c5_6b_1", pontos: { takeo: 2 }, flags: ["Visita_Takeo_amanha"] },
      { texto: "C. Não contar do Ren. Mandar só uma foto da bolacha de morango.", proxima: "c5_6c_1", pontos: { takeo: 1 } }
    ]},
    c5_6a_1: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "eu sei o que é polia agora!!! é a rodinha da bandeira!!! eu vou voltar e fazer a pergunta mais inteligente da sala", proxima: "c6_01" },
    c5_6b_1: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "vc vem aqui?? em casa?? minha avó vai fazer bolinho. ela vai mostrar as fotos de bebê. eu me arrependo. vem mesmo assim", proxima: "c6_01" },
    c5_6c_1: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "morango!!! vc lembrou!!! (eu sei que vc sempre lembrou, mas agora eu sei que vc sabe que eu sei)", proxima: "c6_01" },

    /* =================== CENA 6 — A MATILHA =================== */
    // Cenário: fundos do ginásio, fim da tarde (usa "vestiario"). Música: silêncio. Depois, uma batida grave.
    // Este é o vilão. Nada de lado bom. Nada de luto escondido. Ele faz porque gosta.
    c6_01: { tipo: "narracao", cenario: "fundos-ginasio", transicao: "tempo", legenda: "Cena 6 — A Matilha", sprite: null, texto: "Na saída, a SN pega o caminho dos fundos do ginásio. É mais curto até o portão de trás, onde a Mio está esperando.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", texto: "Ela ouve antes de ver. Um choro baixo. Abafado. De alguém tentando não fazer barulho.", proxima: "c6_03" },
    c6_03: { tipo: "narracao", sprite: "yuto", texto: "Atrás do ginásio, entre a parede e a caixa de força, tem um garoto do primeiro ano no chão. Óculos quebrados do lado. Ela reconhece. É o Yuto. O calouro das cadeiras. O que tropeçou no corredor na quarta-feira.", proxima: "c6_04" },
    c6_04: { tipo: "narracao", sprite: "shinji", texto: "O Shinji está segurando os braços dele para trás. O Goro está de pé, de braços cruzados, bloqueando a passagem. Mais três garotos do Colégio Técnico em volta. Todos com uma coisa nova: uma pulseira de couro preto, com um dente de metal pendurado.", proxima: "c6_05" },
    c6_05: { tipo: "narracao", sprite: "ren", texto: "E, sentado em cima da caixa de força, de pernas cruzadas, com o uniforme impecável e a gravata no lugar, está o Ren. Comendo uma maçã.", proxima: "c6_06" },
    c6_06: { quem: "ren", texto: "...e é por isso que hierarquia é importante, Yuto. Você é do primeiro ano. Você vê alguma coisa, você não fala. Simples assim.", proxima: "c6_07" },
    c6_07: { quem: "yuto", texto: "Eu não falei nada! Eu juro! Eu só vi o senhor conversando com o Shinji no portão, eu não...", proxima: "c6_08" },
    c6_08: { quem: "ren", texto: "Senhor. Que educado. Viu, Goro? Educação.", proxima: "c6_09" },
    c6_09: { tipo: "narracao", texto: "O Ren desce da caixa de força. Devagar. Para na frente do Yuto. Olha para os óculos quebrados no chão.", proxima: "c6_10" },
    c6_10: { tipo: "narracao", efeito: "tremor", texto: "E pisa na mão do garoto. Com o calcanhar. Sem pressa. Sem mudar a expressão. Mastigando a maçã.", proxima: "c6_11" },
    c6_11: { tipo: "narracao", texto: "O Yuto grita. O Shinji tapa a boca dele. O Ren continua pisando, inclinando o corpo, colocando mais peso, olhando para o rosto do garoto com uma curiosidade quase científica.", proxima: "c6_12" },
    c6_12: { quem: "ren", texto: "Agora você vai lembrar. Toda vez que segurar um lápis, vai lembrar de ficar quieto. Isso é um presente, Yuto. Estou te ensinando.", proxima: "c6_13" },
    c6_13: { quem: "eu", efeito: "grito", texto: "SAI DE CIMA DELE.", proxima: "c6_14" },
    c6_14: { tipo: "narracao", texto: "Todo mundo vira. O Shinji solta o Yuto. O Goro dá um passo para trás. Os três garotos do Colégio Técnico se olham, nervosos.", proxima: "c6_15" },
    c6_15: { tipo: "narracao", texto: "Só o Ren não se mexe. Ele continua com o pé em cima da mão do Yuto. E sorri para ela.", proxima: "c6_16" },
    c6_16: { quem: "ren", texto: "SN. Que timing. Eu estava esperando você. Eu sabia que você ia pegar esse caminho. Você sempre pega o caminho mais curto pra Mio.", proxima: "c6_17" },
    c6_17: { quem: "ren", texto: "Quer que eu saia de cima dele? Pede direito. Ou vem tirar.", proxima: "c6_18" },
    c6_18: { tipo: "narracao", texto: "A SN dá um passo. Depois outro. Os garotos do Colégio Técnico abrem caminho. O Goro, que levou a viga quebrada nas costas no domingo, abre caminho também.", proxima: "c6_19" },
    c6_19: { tipo: "narracao", texto: "Quando ela está a um braço de distância, o Ren tira o pé. Assim. Sem briga. E levanta as duas mãos, como quem se rende.", proxima: "c6_20" },
    c6_20: { quem: "ren", texto: "Pronto. Viu? Eu não brigo. Eu não preciso brigar. Eu tenho gente pra isso.", proxima: "c6_21" },
    c6_21: { tipo: "narracao", sprite: "yuto", texto: "A SN se ajoelha do lado do Yuto. A mão dele está inchada, os dedos tortos. Ele está chorando sem fazer barulho, de olhos fechados, do jeito que ela chorava aos dezesseis no banheiro.", proxima: "c6_22" },
    c6_22: { quem: "ren", texto: "Eu sei de tudo, SN. Eu sei do Jin. Eu sei da foto. Eu sei da viga. E eu sei da força. A mesma da Sora.", proxima: "c6_23" },
    c6_23: { quem: "eu", texto: "Como você conhece a minha tia?", proxima: "c6_24" },
    c6_24: { tipo: "narracao", texto: "O Ren ri. Um riso leve, gostoso, de quem ouviu uma piada boa.", proxima: "c6_25" },
    c6_25: { quem: "ren", texto: "Sua tia? Que família pequena é o mundo.", proxima: "c6_26" },
    c6_26: { quem: "ren", texto: "Eu tinha sete anos. Meu pai era dono de um depósito na beira do rio. Ele usava crianças da rua pra trabalhar lá. Sem salário. Trancadas.", proxima: "c6_27" },
    c6_27: { quem: "ren", texto: "Uma noite, uma mulher de cabelo curto arrombou a porta pra soltar todo mundo. Ela era forte. Muito forte. Meu pai ia perder tudo.", proxima: "c6_28" },
    c6_28: { quem: "ren", texto: "Então eu peguei o isqueiro dele. E coloquei fogo na escada.", proxima: "c6_29" },
    c6_29: { tipo: "narracao", sprite: "ren", texto: "Ele levanta a manga da camisa. A cicatriz redonda de queimadura no pulso.", proxima: "c6_30" },
    c6_30: { quem: "ren", texto: "Eu me queimei um pouquinho. Ela tirou as crianças. Uma por uma. Até eu. Ela me carregou pra fora. A última.", proxima: "c6_31" },
    c6_31: { quem: "ren", texto: "Depois ela voltou pra buscar o cachorro do depósito. E a escada caiu.", proxima: "c6_32" },
    c6_32: { tipo: "narracao", texto: "Ele fala isso sorrindo. Comendo a maçã. Como quem conta o que comeu no café da manhã.", proxima: "c6_33" },
    c6_33: { quem: "ren", texto: "Ela salvou a minha vida, SN. A pessoa que tentou matar ela. Não é a coisa mais engraçada que você já ouviu?", proxima: "c6_34" },
    c6_34: { tipo: "pensamento", texto: "“Ela salvou. E quem pagou foi ela.”", proxima: "c6_35" },
    c6_35: { tipo: "pensamento", texto: "Ela voltou no tempo pra salvar crianças de um depósito. E salvou o monstro junto.", proxima: "c6_36" },
    c6_36: { tipo: "narracao", texto: "A SN se levanta. Devagar. Os punhos dela estão fechados. O ar em volta dela parece mais pesado. Os garotos do Colégio Técnico recuam mais um passo.", proxima: "c6_37" },
    c6_37: { quem: "ren", texto: "Ah, olha. Você quer me bater. Que lindo. Bate.", proxima: "c6_38" },
    c6_38: { tipo: "narracao", texto: "Ele abre os braços. Oferece o rosto. Sorrindo.", proxima: "c6_39" },
    c6_39: { quem: "ren", texto: "Bate. Na frente de todo mundo. O aluno transferido, primeiro lugar no ranking nacional, filho de empresário, espancado pela Fantasma atrás do ginásio. Eu mesmo chamo a polícia. Eu mesmo chamo o jornal.", proxima: "c6_40" },
    c6_40: { quem: "ren", texto: "E aí todo mundo vai querer saber como uma garota de um metro e sessenta deixou um garoto daquele jeito. E vão olhar pra sua mãe. E pra sua família inteira. E pra geladeira de vocês.", proxima: "c6_41" },
    c6_41: { tipo: "narracao", texto: "Ele tira o celular do bolso. Mostra a tela. Uma foto, tirada há minutos. A Momo, de mochila de coelhinho, saindo da escola primária, segurando a mão de uma professora.", proxima: "c6_42" },
    c6_42: { tipo: "narracao", texto: "Ele passa para a próxima. A avó do Takeo, pequenininha, no mercado, escolhendo tomates.", proxima: "c6_43" },
    c6_43: { tipo: "narracao", texto: "A próxima. A Hana, sozinha, no ponto de ônibus, lendo.", proxima: "c6_44" },
    c6_44: { quem: "ren", texto: "Eu não vou encostar em você, SN. Você é forte. Isso seria burrice. Eu vou encostar neles. Um de cada vez. Toda vez que você me atrapalhar.", proxima: "c6_45" },
    c6_45: { quem: "ren", texto: "E você vai saber que foi por sua causa. Que nem o Yuto vai saber, toda vez que segurar um lápis.", proxima: "c6_46" },
    c6_46: { quem: "ren", texto: "Ou... você pode trabalhar pra mim. Uma força dessas. Desperdiçada protegendo calouro. Comigo, você mandaria nessa cidade em dois anos.", proxima: "c6_esc7" },

    // ▶ ESCOLHA 7 — Responder ao Ren
    c6_esc7: { escolhas: [
      { texto: "A. “Nunca.” E levantar o Yuto do chão, de costas pro Ren, como se ele não existisse.", proxima: "c6_7a_1", pontos: { desvio: 1 }, flags: ["Recusou_Ren", "Salvou_Yuto"] },
      { texto: "B. Segurar a gola dele. Sem bater. Só segurar, bem perto do rosto: “Se você encostar em qualquer um deles, eu esqueço a regra da minha família.”", proxima: "c6_7b_1", pontos: { desvio: 2 }, flags: ["Ameacou_Ren"] },
      { texto: "C. Engolir a raiva: “Eu vou pensar.” Para ganhar tempo e proteger os outros.", proxima: "c6_7c_1", pontos: { desvio: 2 }, flags: ["Fingiu_pensar_Ren"] }
    ]},
    c6_7a_1: { tipo: "narracao", texto: "Ela vira as costas para ele. Coloca o braço do Yuto em volta do próprio pescoço e levanta o garoto como se ele não pesasse nada.", proxima: "c6_7a_2" },
    c6_7a_2: { quem: "ren", texto: "Que pena. Eu ia gostar de você na minha equipe.", proxima: "c6_7a_3" },
    c6_7a_3: { quem: "ren", texto: "Shinji. Amanhã, a do caderno de gatinhos.", proxima: "c6_7a_4" },
    c6_7a_4: { tipo: "narracao", texto: "A SN para. O sangue dela gela inteiro. Ela vira. O Ren já está indo embora, de costas, jogando o miolo da maçã no chão.", proxima: "c6_7a_5" },
    c6_7a_5: { quem: "ren", texto: "Brincadeira. Ou não. Você vai passar a noite descobrindo.", proxima: "c6_48" },
    c6_7b_1: { tipo: "narracao", efeito: "tremor", texto: "Ela segura a gola da camisa dele. O tecido caro rasga um pouco. Os pés dele saem do chão. Só um pouco.", proxima: "c6_7b_2" },
    c6_7b_2: { tipo: "narracao", texto: "E o Ren ri. Pendurado pela gola, com os pés quase no ar, ele ri, de verdade, com os olhos cinza brilhando.", proxima: "c6_7b_3" },
    c6_7b_3: { quem: "ren", texto: "Isso. Isso. Era isso que eu queria ver. Ela também fazia essa cara. Logo antes de fazer uma besteira.", proxima: "c6_7b_4" },
    c6_7b_4: { tipo: "narracao", texto: "Atrás dela, um clique. O Shinji está filmando tudo com o celular.", proxima: "c6_7b_5" },
    c6_7b_5: { quem: "ren", texto: "Me põe no chão, SN. Com cuidado. Senão esse vídeo vai pra diretoria em dez minutos. E pra Sayuri em cinco.", proxima: "c6_7b_6" },
    c6_7b_6: { tipo: "narracao", texto: "Ela solta. O Ren ajeita a camisa rasgada, devagar, sem pressa nenhuma.", proxima: "c6_7b_7" },
    c6_7b_7: { quem: "ren", texto: "Obrigado. Agora eu tenho um vídeo seu. E você não tem nada meu. Isso que é estratégia.", proxima: "c6_48" },
    c6_7c_1: { tipo: "narracao", texto: "A SN engole. É a coisa mais difícil que ela já fez. Mais difícil que a viga.", proxima: "c6_7c_2" },
    c6_7c_2: { quem: "ren", texto: "Pensar. Que maduro. Parece até que você tem vinte e oito anos.", proxima: "c6_7c_3" },
    c6_7c_3: { tipo: "narracao", texto: "O coração dela para.", proxima: "c6_7c_4" },
    c6_7c_4: { quem: "ren", texto: "É uma expressão, SN. Relaxa. Você tem até o fim de semana pra pensar.", proxima: "c6_7c_5" },
    c6_7c_5: { tipo: "pensamento", texto: "Uma expressão. Ninguém fala “parece que você tem vinte e oito anos” como expressão.", proxima: "c6_48" },

    // (todas as opções continuam aqui)
    c6_48: { tipo: "narracao", sprite: null, texto: "O Ren vai embora com os cinco garotos atrás dele. No caminho, ele passa pelo Shinji. E, sem parar de andar, sem olhar, dá um tapa na nuca do Shinji. Forte. Como em um cachorro.", proxima: "c6_49" },
    c6_49: { quem: "ren", texto: "Você deixou o calouro gritar. Da próxima vez, você segura direito, ou eu arrumo outro Oda.", proxima: "c6_50" },
    c6_50: { tipo: "narracao", sprite: "shinji", texto: "O Shinji abaixa a cabeça. O Shinji, que girava corrente rindo no galpão. E segue atrás dele, em silêncio.", proxima: "c6_51" },
    c6_51: { tipo: "pensamento", texto: "O Jin pagava as pessoas. O Ren é dono delas.", proxima: "c6_52" },
    c6_52: { tipo: "narracao", sprite: "yuto", texto: "A SN leva o Yuto até a enfermaria. A enfermeira diz que dois dedos estão quebrados. O Yuto diz que caiu da escada. Ele não olha para ninguém enquanto fala.", proxima: "c6_53" },
    c6_53: { tipo: "pensamento", texto: "Ele não vai contar. Ninguém vai contar.", proxima: "c6_54" },
    c6_54: { tipo: "pensamento", texto: "É assim que ele funciona.", proxima: "c7_01" },

    /* =================== CENA 7 — AKANE =================== */
    // Cenário: corredor do hospital, noite (usa "corredor"). Música: tensão baixa, piano grave.
    c7_01: { tipo: "narracao", cenario: "corredor-hospital", transicao: "tempo", legenda: "Cena 7 — Akane", sprite: null, texto: "Às onze da noite, o celular da SN toca. É a Reina. A Reina nunca liga. A Reina manda mensagens curtas e assina com “R.”", proxima: "c7_02" },
    c7_02: { quem: "reina", rotulo: "Reina (ao telefone)", sprite: null, texto: "Pronto-socorro do bairro. Agora. Por favor.", proxima: "c7_03" },
    c7_03: { tipo: "narracao", texto: "A SN chega com a mãe, que insistiu em levar ela de carro e está de uniforme, porque estava de plantão do outro lado do hospital.", proxima: "c7_04" },
    c7_04: { tipo: "narracao", sprite: "reina", texto: "A Reina está sentada no chão do corredor. Não numa cadeira. No chão. De jaqueta de couro, com as mãos sujas de sangue que não é dela. O cabelo perfeito está desfeito. Ela não parece a garota mais popular da escola. Parece uma menina de dezesseis anos.", proxima: "c7_05" },
    c7_05: { quem: "reina", texto: "Acharam a Akane na beira do rio. Perto do depósito queimado. Duas horas atrás.", proxima: "c7_06" },
    c7_06: { quem: "reina", texto: "Ela tinha voltado. Ontem. Pra pedir desculpa. Eu perdoei. Eu disse que ela podia voltar pro Lírio. Que eu ia proteger ela.", proxima: "c7_07" },
    c7_07: { tipo: "narracao", texto: "A voz da Reina, sempre perfeita, sempre controlada, quebra no meio da frase.", proxima: "c7_08" },
    c7_08: { quem: "reina", texto: "Eu disse que ia proteger ela, SN.", proxima: "c7_09" },
    c7_09: { tipo: "narracao", sprite: "mae", texto: "A mãe da SN entra na sala onde a Akane está. Quando sai, ela olha para a filha e balança a cabeça devagar. Vai ficar bem. Mas vai demorar.", proxima: "c7_10" },
    c7_10: { quem: "mae", texto: "Ela está acordada. Ela quer falar com a líder dela. E com você.", proxima: "c7_11" },
    c7_11: { tipo: "narracao", sprite: "akane", texto: "No quarto, a Akane está deitada com o rosto inchado e os dois braços enfaixados. No pulso, alguém amarrou uma pulseira de couro preto com um dente de metal pendurado.", proxima: "c7_12" },
    c7_12: { quem: "akane", texto: "Ele estava lá. O garoto bonito. De gravata. Ele não encostou em mim nenhuma vez. Ele só ficou sentado numa pedra, olhando. Comendo alguma coisa.", proxima: "c7_13" },
    c7_13: { quem: "akane", texto: "Toda vez que eu pedia pra parar, ele sorria. Ele mandava continuar. Ele disse que eu era um recado.", proxima: "c7_14" },
    c7_14: { quem: "akane", texto: "Pra você, Reina. E pra ela.", proxima: "c7_15" },
    c7_15: { tipo: "narracao", texto: "Ela olha para a SN.", proxima: "c7_16" },
    c7_16: { quem: "akane", texto: "Ele disse: “Fala pra Fantasma que eu não minto. Eu disse um de cada vez.”", proxima: "c7_17" },
    c7_17: { tipo: "narracao", sprite: null, texto: "A SN sai do quarto. Ela anda até o fim do corredor. Encosta a testa na parede fria. As mãos dela tremem tanto que ela precisa enfiar nos bolsos.", proxima: "c7_18" },
    c7_18: { tipo: "pensamento", texto: "Eu recusei. Ou ameacei. Ou fingi que ia pensar. Não importou. Ele já tinha escolhido.", proxima: "c7_19" },
    c7_19: { tipo: "pensamento", texto: "A Akane traiu a Reina pro Jin. E, mesmo assim, ninguém merece isso.", proxima: "c7_20" },
    c7_20: { tipo: "narracao", sprite: "reina", texto: "A Reina para do lado dela. Encosta as costas na parede. As duas ficam ali, lado a lado, olhando para o mesmo ponto do chão.", proxima: "c7_21" },
    c7_21: { quem: "reina", texto: "Eu passei a vida inteira achando que eu era a pessoa mais perigosa dessa cidade.", proxima: "c7_22" },
    c7_22: { quem: "reina", texto: "Eu estava errada.", proxima: "c7_esc8" },

    // ▶ ESCOLHA 8 — Com a Reina, no corredor
    c7_esc8: { escolhas: [
      { texto: "A. “A gente vai parar ele. Juntas. Lírio Negro e a gangue do Kaito.”", proxima: "c7_8a_1", pontos: { desvio: 2 }, flags: ["Alianca_gangues"] },
      { texto: "B. Segurar a mão suja de sangue da Reina, sem dizer nada.", proxima: "c7_8b_1", pontos: { desvio: 1 }, flags: ["SN_Reina_amigas"] },
      { texto: "C. “Não foi culpa sua. Ele faz as pessoas acharem que é. É assim que ele vence.”", proxima: "c7_8c_1", pontos: { desvio: 1 }, flags: ["SN_consolou_Reina"] }
    ]},
    c7_8a_1: { tipo: "narracao", texto: "A Reina vira a cabeça para ela devagar.", proxima: "c7_8a_2" },
    c7_8a_2: { quem: "reina", texto: "O Lírio e a gangue do Kaito nunca lutaram do mesmo lado. Nunca. Em dez anos.", proxima: "c7_8a_3" },
    c7_8a_3: { quem: "eu", texto: "O Ren nunca esteve aqui em dez anos.", proxima: "c7_8a_4" },
    c7_8a_4: { tipo: "narracao", texto: "A Reina fica em silêncio. Depois tira o celular do bolso. Procura um contato que nunca usou. E aperta para ligar.", proxima: "c7_8a_5" },
    c7_8a_5: { quem: "reina", texto: "Kaito. É a Reina. Não desliga. A gente precisa conversar.", proxima: "c7_23" },
    c7_8b_1: { tipo: "narracao", texto: "A SN segura a mão dela. A Reina olha para as mãos juntas. Por um segundo, parece que ela vai puxar. Ela não puxa.", proxima: "c7_8b_2" },
    c7_8b_2: { quem: "reina", texto: "...Eu odeio que você seja assim. Eu queria muito te odiar. Seria tão mais fácil.", proxima: "c7_8b_3" },
    c7_8b_3: { quem: "eu", texto: "Eu sei.", proxima: "c7_8b_4" },
    c7_8b_4: { quem: "reina", texto: "Não conta pro Takeo que eu chorei. Nunca.", proxima: "c7_23" },
    c7_8c_1: { tipo: "narracao", texto: "A Reina fecha os olhos.", proxima: "c7_8c_2" },
    c7_8c_2: { quem: "reina", texto: "E como a gente vence alguém assim?", proxima: "c7_8c_3" },
    c7_8c_3: { quem: "eu", texto: "Parando de jogar o jogo dele.", proxima: "c7_8c_4" },
    c7_8c_4: { quem: "reina", texto: "Você fala como alguém que já perdeu muito.", proxima: "c7_8c_5" },
    c7_8c_5: { tipo: "pensamento", texto: "Você não faz ideia.", proxima: "c7_23" },

    // (todas as opções continuam aqui)
    c7_23: { tipo: "narracao", cenario: "rua-noite", sprite: null, texto: "Quando a SN sai do hospital, já é quase uma da manhã. No estacionamento, encostado na moto velha do tio, de jaqueta, com as mãos nos bolsos, está o Kaito.", proxima: "c7_24" },
    c7_24: { tipo: "narracao", sprite: "kaito", texto: "Ele não fala nada quando ela chega. Ela também não. A mãe dela olha para ele, depois para a filha, e entra no carro sozinha, fingindo procurar a chave.", proxima: "c7_25" },
    c7_25: { quem: "kaito", texto: "A Reina me ligou. Eu vim.", proxima: "c7_26" },
    c7_26: { quem: "eu", texto: "Por causa da Akane?", proxima: "c7_27" },
    c7_27: { quem: "kaito", texto: "...É. Por causa da Akane.", proxima: "c7_28" },
    c7_28: { tipo: "narracao", texto: "Ele não olha para ela. Ele olha para a porta do hospital. Mas, quando ela passa do lado dele para ir até o carro, ele fala baixo, tão baixo que quase se perde no vento.", proxima: "c7_29" },
    c7_29: { quem: "kaito", texto: "Manda mensagem quando chegar em casa.", proxima: "c7_30" },
    c7_30: { tipo: "pensamento", texto: "“Por causa da Akane.”", proxima: "c7_31" },
    c7_31: { tipo: "pensamento", texto: "A Akane está lá dentro há três horas. Ele ficou no estacionamento. Não entrou.", proxima: "c7_32" },
    c7_32: { tipo: "pensamento", texto: "Ele estava esperando eu sair.", proxima: "ep_01" },

    /* =================== EPÍLOGO — O QUE EU SEI (6) =================== */
    // Cenário: quarto da SN, madrugada. Música: piano do prólogo, mais grave que nunca.
    ep_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Epílogo — O que eu sei", sprite: null, texto: "Em casa, ela manda a mensagem. “Cheguei.” A resposta vem em menos de dez segundos. “Ok.” Só isso. Ela fica olhando para aquelas duas letras por muito tempo.", proxima: "ep_02" },
    ep_02: { tipo: "narracao", texto: "Depois, ela coloca a foto da Sora em cima da escrivaninha, encostada na luminária. A menina de cabelo curto sorri para o quarto.", proxima: "ep_03" },
    ep_03: { tipo: "narracao", texto: "Ela abre o caderno azul.", proxima: "ep_04" },
    ep_04: { tipo: "narracao", texto: "21. Sora era minha tia. Ela acreditava que a força era para proteger quem não consegue se defender. Ela foi embora por isso.", proxima: "ep_05" },
    ep_05: { tipo: "narracao", texto: "22. Ela também voltou. Ela salvou as crianças do depósito. E salvou o Ren junto.", proxima: "ep_06" },
    ep_06: { tipo: "narracao", texto: "23. O Ren colocou fogo na escada. Aos sete anos. E ri disso.", proxima: "ep_07" },
    ep_07: { tipo: "narracao", texto: "24. Yuto. Akane. Quem vai ser o próximo?", proxima: "ep_08" },
    ep_08: { tipo: "narracao", texto: "Ela para na linha 24. Pensa na Hana no ponto de ônibus. Na Momo saindo da escola. Na avó do Takeo escolhendo tomate.", proxima: "ep_09" },
    ep_09: { tipo: "narracao", texto: "E então ela lembra. De repente. Do nada. Como uma porta que estava emperrada há dias e finalmente abre.", proxima: "ep_10" },
    ep_10: { tipo: "narracao", efeito: "flashback", texto: "O enterro do Takeo. A primeira fila, com a avó segurando a jaqueta. E, na frente do caixão, a maior coroa de flores do velório. Brancas. Caras. Muito maiores que todas as outras.", proxima: "ep_11" },
    ep_11: { tipo: "narracao", efeito: "flashback", texto: "Na faixa da coroa, em letras douradas:", proxima: "ep_12" },
    ep_12: { tipo: "narracao", efeito: "eco", texto: "“Com os mais sinceros sentimentos. Ren Sakuma.”", proxima: "ep_13" },
    ep_13: { tipo: "pensamento", texto: "Ele estava lá.", proxima: "ep_14" },
    ep_14: { tipo: "pensamento", texto: "Da primeira vez, ele nunca estudou aqui. Mas ele estava lá. No fim. Mandando flores.", proxima: "ep_15" },
    ep_15: { tipo: "pensamento", texto: "Quem manda flores pro enterro de alguém que nunca conheceu?", proxima: "ep_16" },
    ep_16: { tipo: "pensamento", texto: "Alguém que conhecia. Alguém que estava esperando.", proxima: "ep_17" },
    ep_17: { tipo: "narracao", texto: "O celular vibra. O número do cartão branco. O Jin.", proxima: "ep_18" },
    ep_18: { quem: "mensagem", rotulo: "Jin", texto: "Eu soube da Akane. Eu soube do aluno novo.", proxima: "ep_19" },
    ep_19: { quem: "mensagem", rotulo: "Jin", texto: "Eu passei dez anos procurando o menino do isqueiro. O filho do dono do depósito. Ele sumiu da cidade depois do incêndio. Mudou de nome. Mudou de escola.", proxima: "ep_20" },
    ep_20: { quem: "mensagem", rotulo: "Jin", texto: "Eu me afastei, como prometi. Mas ele não vai se afastar, SN. Ele não sabe fazer isso. Ele só sabe tirar.", proxima: "ep_21" },
    ep_21: { quem: "mensagem", rotulo: "Jin", texto: "Quando você estiver pronta pra pedir ajuda, eu atendo. A Sora ia querer que eu atendesse.", proxima: "ep_22" },
    ep_22: { tipo: "narracao", texto: "A SN olha para a mensagem. Depois para a foto da tia, sorrindo em cima da escrivaninha.", proxima: "ep_23" },
    ep_23: { tipo: "pensamento", texto: "“Força guardada não protege ninguém.”", proxima: "ep_24" },
    ep_24: { tipo: "pensamento", texto: "Vovó dizia pra esconder. Mamãe obedeceu. Você não obedeceu, tia. E morreu.", proxima: "ep_25" },
    ep_25: { tipo: "pensamento", texto: "E eu? O que eu faço com essa força, agora que alguém está usando ela contra todo mundo que eu amo?", proxima: "ep_26" },
    ep_26: { tipo: "narracao", texto: "Lá fora, a rua está quieta. Nenhum carro preto. Nenhum carro nenhum.", proxima: "ep_27" },
    ep_27: { tipo: "narracao", texto: "Mas, em cima do muro do vizinho, bem na frente da janela dela, alguém deixou uma maçã. Mordida uma vez.", proxima: "ep_fim" },

    // Fim do Capítulo 6 (crie a entrada "capitulo6" em dados/capitulos.js)
    ep_fim: { fim: "capitulo6" }
  }
});

/*
 * GANCHO PARA O CAPÍTULO 7 (anotações do roteiro)
 *  • Ren Sakuma e a Matilha (pulseira de couro preto com dente de metal). Quem é o próximo alvo?
 *    Ele falou da Hana (“a do caderno de gatinhos”). A ameaça é real?
 *  • O Ren disse “parece que você tem vinte e oito anos”. Ele sabe da volta no tempo? Como?
 *  • Da primeira vez, o Ren mandou flores para o enterro do Takeo. Ele estava por trás da morte dele?
 *  • O Jin ofereceu ajuda. A SN vai aceitar o homem que ameaçou a mãe dela?
 *  • Lírio Negro e a gangue do Kaito: aliança? (Alianca_gangues)
 *  • O vídeo do Shinji (Ameacou_Ren). O Ren vai usar?
 *  • Romance (bem devagar): o Kaito finge que não liga, mas esperou no estacionamento.
 *    O Blake “não queria ser o balde de água”. O Ryuji comprou bolacha de morango.
 *    O Takeo espera a visita (Visita_Takeo_amanha).
 *  • Sexta-feira: recuperação de física do Blake e do Takeo.
 *
 * ESCOLHAS DO CAPÍTULO (8)
 *  1 Mãe (verdade) · 2 Kaito no corredor · 3 Ren no almoço · 4 Ryuji (bolacha)
 *  5 Kaito na arquibancada · 6 Takeo (mensagem) · 7 Ren atrás do ginásio · 8 Reina
 *
 * FLAGS NOVAS
 *  Mae_sabe_viagem · Mae_desconfia_viagem · Mae_luto_Sora · SN_fria_Kaito
 *  SN_perguntou_Kaito · SN_ignorou_Kaito · SN_enfrentou_Ren · SN_saiu_Ren · SN_observou_Ren
 *  Ryuji_bolacha · SN_chateada_Kaito · SN_pegou_Kaito · SN_sentou_Kaito
 *  Visita_Takeo_amanha · Recusou_Ren · Salvou_Yuto · Ameacou_Ren · Fingiu_pensar_Ren
 *  Alianca_gangues · SN_Reina_amigas · SN_consolou_Reina
 */