/*
 * =====================================================================
 *  CAPÍTULO 33 — Por partes
 *  Segunda-feira, logo depois do Capítulo 32.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Bloco de rota na segunda à tarde, depois da aula e antes da noite.
 *
 *  O QUE ACONTECE
 *    • Segunda na escola, um dia normal: aula, intervalo, educação física.
 *      Várias conversas com o Blake, sem envolver a Mio nem a Sayuri (dupla no laboratório,
 *      banco do intervalo, a corrida da educação física).
 *    • Cenas com TODOS os meninos (qualquer rota): Takeo e o pedaço do gesso guardado · Ryuji e os cartões
 *      do curso de bombeiro no corredor · Kaito e o bilhete na aula de história · o portão na saída com todos.
 *    • Bloco de rota à tarde.
 *    • À noite, a mãe sai para o plantão. O Ren está embaixo do prédio dela. "Desce."
 *    • Ela desce e vai com ele até um prédio abandonado, um esqueleto de concreto que nunca terminaram.
 *    • Lá em cima, ele conta por partes:
 *        – que eles já se conheceram quando eram crianças, e ela não lembra;
 *        – que ele usava óculos grandes, andava com um tabuleiro e apanhava na escola e em casa;
 *        – que ela sentou do lado dele um dia, mexeu nas peças errado e riu, sem julgar;
 *        – que depois ela sumiu;
 *        – que o pai dele só olha para quem ganha.
 *      Ele DEIXA DE FORA: onde foi, por que ela sumiu (a tia), o Takeo, por que ele derruba a gangue do Kaito.
 *    • Ela avisa: se ele continuar, ela derruba tudo.
 *    • Gancho: em casa, um pedaço de lembrança volta. Um menino de óculos grandes e uma voz de mulher
 *      chamando o nome dela. Ela não sabe de quem é a voz.
 *
 *  SEGREDOS (NÃO REVELAR)
 *    • O Ren matou o Takeo na primeira linha do tempo. • A tia (Sora) e o motivo de a SN ter sumido.
 *    • A praça do balanço como o lugar onde se conheceram. • O motivo de ele atacar a gangue do Kaito.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Mio, Hana, Reina, Akane, Takeo, Kaito, Blake, Ryuji, Victor, Ren, Mãe.
 *    Sem nome / rótulo: Professora de química, Professor de educação física, Tio do Kaito.
 *
 *  CENÁRIOS
 *    Escola: sala-de-aula, corredor, patio-fundos, vestiario, saida-colegio
 *    Casa da SN → "apartamento" / "quarto-sn" · Prédio abandonado e rua → "beco-mercado"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Rota_*, Salvou_Rei, Respondeu_300, Cliente_12, Contou_capacete_amigas.
 *
 *  Crie a entrada "capitulo33" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo33", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — SEGUNDA NORMAL =================== */
    // Cenário: portão e sala de aula, segunda de manhã. Música: leve, de dia comum.
    c1_01: { roupa: "escolar", tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Segunda, 7h05 — Cena 1", sprite: null, texto: "Segunda-feira. O céu está cinza e baixo, com cara de que vai chover e desistiu no meio do caminho. A SN chega no portão com o celular virado para baixo no bolso, porque não quer olhar para ele.", proxima: "c1_02" },
    c1_02: { tipo: "pensamento", texto: "Hoje é um dia normal. Eu decidi. Hoje eu vou ter um dia de escola, com prova, com fila da cantina e com a Mio falando de rádio, e ninguém vai comprar prédio nenhum.", proxima: "c1_03" },
    c1_03: { tipo: "narracao", sprite: "mio", texto: "A Mio chega correndo, com a mochila aberta e o elástico de morango na mão, porque não deu tempo de prender o cabelo.", proxima: "c1_04" },
    c1_04: { quem: "mio", texto: "Prende pra mim? Eu acordei atrasada porque fiquei ouvindo a gravação da festa. Eu falei “ouvintes da calçada” onze vezes, SN, onze, eu contei.", proxima: "c1_05" },
    c1_05: { tipo: "narracao", texto: "A SN prende o cabelo dela no portão, enquanto a Mio narra os próprios erros de locução como se fosse comentarista de futebol.", proxima: "c1_06" },
    c1_06: { tipo: "narracao", sprite: "takeo:machucado", texto: "O Takeo passa com o gesso, que agora tem a flor da avó, o “melhoras” torto e mais umas doze assinaturas, uma delas escrita só “R.” com letra bonita demais.", proxima: "c1_07" },
    c1_07: { quem: "takeo", sprite: "takeo:machucado", texto: "Foi a Reina. Ela disse que só ia colocar a inicial porque nome inteiro é muito compromisso.", proxima: "tk_01" },
    // --- Takeo no portão (todas as rotas) ---
    tk_01: { tipo: "narracao", sprite: "takeo:machucado", texto: "Ele estica o braço engessado na direção dela, meio sem jeito, e aponta com o queixo para um espaço em branco perto do cotovelo, do lado da flor da avó.", proxima: "tk_02" },
    tk_02: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu guardei esse pedaço. Não deixei ninguém escrever aí. O Victor tentou desenhar uma moto e eu fugi correndo, mancando, foi muito humilhante.", proxima: "tk_03" },
    tk_03: { quem: "eu", texto: "Você guardou um pedaço do gesso pra mim?", proxima: "tk_04" },
    tk_04: { quem: "takeo", sprite: "takeo:machucado", texto: "Guardei. Quer dizer, guardei pra quem pedisse primeiro, e você ia pedir, então dá no mesmo.", proxima: "tk_esc" },
    tk_esc: { escolhas: [
      { texto: "A. Desenhar um caqui pequenininho, com folhinha e tudo.", proxima: "tk_a1", pontos: { takeo: 2 }, flags: ["Caqui_gesso"] },
      { texto: "B. Escrever “Propriedade do plantão. Devolver inteiro.”", proxima: "tk_b1", pontos: { takeo: 2 }, flags: ["Plantao_gesso"] },
      { texto: "C. “Eu assino no dia que tirar. Aí fica de lembrança, e não de machucado.”", proxima: "tk_c1", pontos: { takeo: 2 }, flags: ["Assina_depois"] }
    ]},
    tk_a1: { tipo: "narracao", texto: "Ela pega a caneta da mão dele e desenha um caqui redondo, com uma folhinha torta em cima. Ele fica olhando para o desenho com a cara mais séria do mundo, e depois sorri tanto que o corte do lábio repuxa.", proxima: "tk_a2" },
    tk_a2: { quem: "takeo", sprite: "takeo:machucado", texto: "A minha avó vai achar que você está me pedindo em casamento. Caqui lá em casa é coisa séria.", proxima: "c1_08" },
    tk_b1: { tipo: "narracao", texto: "Ela escreve em letra de forma, apertando a caneta no gesso. Ele lê de cabeça para baixo, mexendo a boca sem som.", proxima: "tk_b2" },
    tk_b2: { quem: "takeo", sprite: "takeo:machucado", texto: "Devolver inteiro. Então eu sou seu? Quer dizer, do plantão. É. Do plantão.", proxima: "c1_08" },
    tk_c1: { tipo: "narracao", texto: "O Takeo fica parado um segundo, com o braço ainda esticado, e depois puxa o gesso de volta para perto do peito, como quem guarda uma coisa.", proxima: "tk_c2" },
    tk_c2: { quem: "takeo", sprite: "takeo:machucado", texto: "Então eu vou cuidar dele direitinho até lá. Se alguém escrever nesse pedaço, eu passo a borracha. Gesso aceita borracha? Eu vou descobrir.", proxima: "c1_08" },
    c1_08: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", sprite: "ren", texto: "Na sala, o Ren já está sentado na carteira perto da porta, com o livro aberto e o café, exatamente como em todas as segundas. Ele não levanta os olhos quando ela entra, e ela também não olha para ele, e os dois fazem isso tão bem que parece combinado.", proxima: "c1_cam_cel" },
    c1_cam_cel: { caminhos: [
      { flag: "Salvou_Rei", proxima: "c1_rei" },
      { flag: "Respondeu_300", proxima: "c1_300" }
    ], proxima: "c1_09" },
    c1_rei: { tipo: "pensamento", texto: "Ele não sabe que eu salvei o número dele como “Rei”. Eu sei uma coisa que ele não sabe, e isso me deixa sentar com as costas retas.", proxima: "c1_09" },
    c1_300: { tipo: "pensamento", texto: "Trezentos até sexta. Eu escrevi isso pra ele ontem à noite, e ele leu na hora e não respondeu. Agora ele está a três metros de mim, tomando café, como se nada.", proxima: "c1_09" },
    c1_09: { tipo: "narracao", texto: "A primeira aula é de química. A professora entra com uma caixa de óculos de proteção e um sorriso que nunca é bom sinal.", proxima: "c1_10" },
    c1_10: { quem: "professora", texto: "Laboratório hoje, em duplas. E as duplas eu sorteio, porque se eu deixar vocês escolherem a Mio e a Hana ficam juntas e explodem alguma coisa de tanto conversar.", proxima: "c1_11" },
    c1_11: { quem: "mio", sprite: "mio", texto: "Isso aconteceu uma vez só!", proxima: "c1_12" },
    c1_12: { tipo: "narracao", sprite: null, texto: "Ela vai tirando os nomes de um saquinho de pano. A Mio cai com o Ryuji, que comemora como se tivesse ganhado na loteria, a Hana cai com a Akane, e o Takeo cai com o Victor, que fala que vai segurar o tubo de ensaio por ele porque “um braço é pouco pra ciência”.", proxima: "c1_13" },
    c1_13: { quem: "professora", texto: "SN... com o Blake.", proxima: "c1_14" },
    c1_14: { tipo: "narracao", sprite: "blake", texto: "Lá do fundo, o Blake levanta a cabeça devagar, como se tivesse ouvido o nome dele de muito longe, e faz que sim com um aceno pequeno.", proxima: "c2_01" },

    /* =================== CENA 2 — LABORATÓRIO =================== */
    // Cenário: laboratório de química (usa "sala-de-aula"). Música: tique-taque de relógio, bolhas.
    c2_01: { tipo: "narracao", cenario: "laboratorio", transicao: "tempo", legenda: "Laboratório — Cena 2", sprite: "blake", texto: "No laboratório, a bancada deles fica no canto, do lado da janela. O Blake veste o jaleco, que fica curto nos braços e apertado nos ombros, e coloca os óculos de proteção, que deixam ele com cara de soldador de desenho animado.", proxima: "c2_02" },
    c2_02: { quem: "eu", texto: "Você está parecendo um besouro gigante.", proxima: "c2_03" },
    c2_03: { quem: "blake", texto: "Você está parecendo um besouro pequeno.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", texto: "Ele fala isso sem sorrir, mas o canto da boca dele treme um pouco, e ela percebe que é a primeira piada que ele faz com ela. Ela ri, e ele volta a olhar para o roteiro da experiência como se não tivesse feito nada.", proxima: "c2_05" },
    c2_05: { quem: "blake", texto: "Passo um. Medir cinquenta mililitros de... eu não sei ler essa palavra.", proxima: "c2_06" },
    c2_06: { quem: "eu", texto: "Bicarbonato. É só bicarbonato, aquele de bolo.", proxima: "c2_07" },
    c2_07: { quem: "blake", texto: "Então por que eles escrevem desse jeito? Parece que querem que a gente erre.", proxima: "c2_08" },
    c2_08: { tipo: "narracao", texto: "Ele mede com cuidado exagerado, com a proveta na altura dos olhos, a língua um pouco para fora, a mão enorme segurando um tubinho de vidro como se fosse um passarinho.", proxima: "c2_09" },
    c2_09: { tipo: "pensamento", texto: "Ele é o maior da sala, ele derruba gente com um empurrão, e está medindo bicarbonato como quem desarma uma bomba.", proxima: "c2_10" },
    c2_10: { quem: "blake", texto: "Os gêmeos fazem isso em casa. Vulcão de bicarbonato. Eles fizeram um na sexta, na sala, em cima da poltrona.", proxima: "c2_11" },
    c2_11: { quem: "eu", texto: "Em cima da poltrona de veludo?", proxima: "c2_12" },
    c2_12: { quem: "blake", texto: "Em cima da poltrona de veludo. Ficou uma mancha em forma de nuvem. A minha mãe gritou tanto que o vizinho bateu na parede.", proxima: "c2_13" },
    c2_13: { quem: "blake", texto: "Eu não ligo. Agora ela tem uma nuvem. Poltrona velha fica melhor com história.", proxima: "c2_esc1" },

    // ▶ ESCOLHA 1 — No laboratório
    c2_esc1: { escolhas: [
      { texto: "A. “Então a nuvem fica. Quando você tiver a livraria, ela vai ser a atração.”", proxima: "c2_1a_1", pontos: { blake: 2 }, flags: ["Nuvem_poltrona"] },
      { texto: "B. “Deixa eu misturar. Você está segurando esse vidro com tanto medo que ele vai quebrar de nervoso.”", proxima: "c2_1b_1", pontos: { blake: 1 }, flags: ["Misturou_lab"] },
      { texto: "C. “Você fala dos gêmeos com uma cara que você não faz quando fala de mais nada.”", proxima: "c2_1c_1", pontos: { blake: 2 }, flags: ["Cara_gemeos"] }
    ]},
    c2_1a_1: { tipo: "narracao", texto: "O Blake para com a proveta no ar e fica olhando para ela por cima dos óculos de proteção.", proxima: "c2_1a_2" },
    c2_1a_2: { quem: "blake", texto: "A nuvem da livraria. Eu vou colocar uma plaquinha do lado, explicando.", proxima: "c2_1a_3" },
    c2_1a_3: { quem: "eu", texto: "“Vulcão de bicarbonato, sexta-feira, autores desconhecidos de sete anos.”", proxima: "c2_1a_4" },
    c2_1a_4: { tipo: "narracao", texto: "Ele ri pelo nariz, baixo, e quase derruba o bicarbonato. A professora olha feio para a bancada do canto, e os dois fingem que estavam muito concentrados na ciência.", proxima: "c2_14" },
    c2_1b_1: { tipo: "narracao", texto: "Ela pega o tubo da mão dele e mistura tudo de uma vez, com um movimento só, rápido e certo. O líquido sobe, borbulha e para bem na borda, sem derramar uma gota.", proxima: "c2_1b_2" },
    c2_1b_2: { quem: "blake", texto: "...Você fez isso como se já tivesse feito mil vezes.", proxima: "c2_1b_3" },
    c2_1b_3: { tipo: "pensamento", texto: "Eu já fiz isso muitas vezes, numa vida que ainda não aconteceu. Não dá pra falar isso pra ninguém.", proxima: "c2_1b_4" },
    c2_1b_4: { quem: "eu", texto: "Eu vejo muito vídeo.", proxima: "c2_14" },
    c2_1c_1: { tipo: "narracao", texto: "O Blake fica quieto um tempo, mexendo a solução com o bastão de vidro, mais devagar do que precisa.", proxima: "c2_1c_2" },
    c2_1c_2: { quem: "blake", texto: "Que cara?", proxima: "c2_1c_3" },
    c2_1c_3: { quem: "eu", texto: "Uma cara de gente grande. De quem cuida.", proxima: "c2_1c_4" },
    c2_1c_4: { quem: "blake", texto: "Eu cuido deles desde que eles nasceram. A minha mãe trabalha muito. Eu aprendi a trocar fralda antes de aprender divisão.", proxima: "c2_1c_5" },
    c2_1c_5: { tipo: "narracao", texto: "Ele fala isso como quem fala o tempo que vai fazer amanhã, sem pedir pena e sem esconder. Depois volta a mexer, e ela fica olhando para a mão grande dele no bastão de vidro, pensando em fralda.", proxima: "c2_14" },

    // (todas as opções continuam aqui)
    c2_14: { tipo: "narracao", texto: "No fim da aula, a professora passa de bancada em bancada conferindo o resultado. Na deles, ela anota alguma coisa e levanta a sobrancelha.", proxima: "c2_15" },
    c2_15: { quem: "professora", texto: "Muito bem. Blake, o relatório você escreve, porque eu quero ver você escrevendo alguma coisa esse bimestre.", proxima: "c2_16" },
    c2_16: { tipo: "narracao", texto: "O Blake olha para a SN com uma cara de desespero tão grande que ela tem que morder a bochecha por dentro para não rir.", proxima: "c2_17" },
    c2_17: { quem: "blake", texto: "Intervalo. No banco. Me ajuda com isso? Só com a primeira frase. A primeira frase é a pior.", proxima: "c2_18" },
    c2_18: { quem: "eu", texto: "Só a primeira frase.", proxima: "ry_01" },

    /* =================== CENA 2.5 — O CORREDOR (Ryuji) =================== */
    ry_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", sprite: "ryuji", texto: "No corredor, saindo do laboratório, o Ryuji aparece do lado dela com o jaleco ainda vestido, os óculos de proteção na testa e uma mancha azul na bochecha.", proxima: "ry_02" },
    ry_02: { quem: "ryuji", texto: "A gente não explodiu nada. A Mio só ficou muito animada e a solução ficou azul. A professora disse que não era pra ficar azul. Eu achei bonito.", proxima: "ry_03" },
    ry_03: { tipo: "narracao", texto: "Ele tira do bolso do jaleco um monte de cartõezinhos amassados, presos com um elástico, cheios de perguntas escritas à mão com a letra dele, que parece um eletrocardiograma.", proxima: "ry_04" },
    ry_04: { quem: "ryuji", texto: "Teoria do curso de bombeiro. A prova tem parte escrita. Eu decorei tudo, mas eu só decoro se alguém me pergunta. Sozinho eu esqueço no meio. Me pergunta? Até a escada?", proxima: "ry_esc" },
    ry_esc: { escolhas: [
      { texto: "A. Pegar os cartões e perguntar, andando. Fazer cara de juíza séria.", proxima: "ry_a1", pontos: { ryuji: 2 }, flags: ["Quiz_Ryuji"] },
      { texto: "B. “Só se, quando você passar, eu for a primeira que você carrega no colo. Pra treinar.”", proxima: "ry_b1", pontos: { ryuji: 3 }, flags: ["Carrega_primeiro"] },
      { texto: "C. Tirar a mancha azul da bochecha dele com a manga. “Bombeiro não pode ter cara de experimento.”", proxima: "ry_c1", pontos: { ryuji: 2 }, flags: ["Mancha_azul"] }
    ]},
    ry_a1: { tipo: "narracao", texto: "Ela pega os cartões e lê o primeiro com voz de apresentadora de programa de televisão.", proxima: "ry_a2" },
    ry_a2: { quem: "eu", texto: "Pergunta número um, valendo um pirulito do Victor: qual é a primeira coisa a fazer ao chegar num incêndio?", proxima: "ry_a3" },
    ry_a3: { quem: "ryuji", texto: "Avaliar a cena! Ver se tem gente, ver por onde sai, ver se o prédio vai cair. E não sair correndo pra dentro igual herói de filme, que herói de filme morre no segundo ato.", proxima: "ry_a4" },
    ry_a4: { tipo: "narracao", texto: "Ele acerta as onze perguntas até a escada, comemorando cada uma com um soquinho no ar, e na décima segunda ele erra de propósito só para ela ler de novo, mais devagar. Ela percebe e lê de novo assim mesmo.", proxima: "c3_01" },
    ry_b1: { tipo: "narracao", texto: "O Ryuji para no meio do corredor. Os cartões quase caem da mão dele.", proxima: "ry_b2" },
    ry_b2: { quem: "ryuji", texto: "No colo? Tipo, resgate? Com você? Você é pequena, eu carrego você e mais duas Mios.", proxima: "ry_b3" },
    ry_b3: { quem: "eu", texto: "Eu peso mais do que pareço.", proxima: "ry_b4" },
    ry_b4: { quem: "ryuji", texto: "Duvido. Fechado. Quando eu passar, primeira carregada oficial. Eu vou fazer certificado.", proxima: "ry_b5" },
    ry_b5: { tipo: "narracao", texto: "Ele fala isso rindo, mas fica vermelho até a faixa da testa, e no resto do caminho até a escada ele esquece de pedir para ela fazer as perguntas.", proxima: "c3_01" },
    ry_c1: { tipo: "narracao", texto: "Ela puxa a manga do moletom até a mão e esfrega a mancha azul da bochecha dele. Ele fica parado, de olho arregalado, deixando, sem respirar direito.", proxima: "ry_c2" },
    ry_c2: { quem: "ryuji", texto: "...Saiu?", proxima: "ry_c3" },
    ry_c3: { quem: "eu", texto: "Metade. Agora você está com cara de experimento que deu meio certo.", proxima: "ry_c4" },
    ry_c4: { quem: "ryuji", texto: "Eu vou ficar com essa metade. Vai ser o meu amuleto pra prova.", proxima: "c3_01" },

    /* =================== CENA 3 — O BANCO =================== */
    // Cenário: pátio dos fundos, intervalo. Música: violão leve.
    c3_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Intervalo — Cena 3", sprite: "blake", texto: "No intervalo, o banco de concreto do pátio dos fundos, do lado da árvore torta. O Blake chega com uma lancheira térmica azul, enorme, e abre como quem abre uma mala de viagem: três sanduíches, duas bananas, um pote de arroz e um ovo cozido.", proxima: "c3_02" },
    c3_02: { quem: "eu", texto: "Isso é o lanche ou é a mudança?", proxima: "c3_03" },
    c3_03: { quem: "blake", texto: "Eu treino depois da aula. Se eu não comer, eu desmaio no saco de pancada.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", texto: "Ele estende um dos sanduíches para ela sem perguntar se ela quer. É de frango desfiado, com maionese e cenoura ralada.", proxima: "c3_05" },
    c3_05: { quem: "blake", texto: "O Kaito falou que você gosta de frango. Ele fala isso de tudo mundo, mas de você ele falou duas vezes.", proxima: "c3_06" },
    c3_06: { tipo: "narracao", texto: "Ela pega o sanduíche, e ele não fala mais nada sobre isso. Ele abre o caderno no colo, numa página em branco, e escreve no alto: “Relatório”. Depois fica olhando para a palavra como se ela fosse fugir.", proxima: "c3_07" },
    c3_07: { quem: "eu", texto: "Começa com o que a gente fez. Não com o que a gente aprendeu. O que a gente fez é mais fácil.", proxima: "c3_08" },
    c3_08: { quem: "blake", texto: "A gente misturou bicarbonato com vinagre e subiu espuma.", proxima: "c3_09" },
    c3_09: { quem: "eu", texto: "Isso. Só que com cara de quem estudou.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", texto: "Ele pensa muito, com a caneta parada no ar. Depois escreve, devagar, com a letra grande e torta dele, uma frase inteira, e vira o caderno para ela ler.", proxima: "c3_11" },
    c3_11: { tipo: "narracao", efeito: "eco", texto: "“No experimento, foi observada a reação entre o bicarbonato de sódio e o ácido acético, que liberou gás e formou espuma.”", proxima: "c3_12" },
    c3_12: { quem: "eu", texto: "Blake, isso está perfeito.", proxima: "c3_13" },
    c3_13: { quem: "blake", texto: "Eu copiei do livro. Mentira. Eu escrevi.", proxima: "c3_14" },
    c3_14: { tipo: "pensamento", texto: "Ele fez outra piada. Duas no mesmo dia. Alguém precisa avisar o Kaito.", proxima: "c3_15" },
    c3_15: { tipo: "narracao", texto: "Do outro lado do pátio, o Kaito e o Ryuji estão disputando a última coxinha da cantina. O Kaito ganha, como sempre, e o Ryuji grita que foi roubado.", proxima: "c3_16" },
    c3_16: { quem: "blake", texto: "Quatrocentos e treze.", proxima: "c3_17" },
    c3_17: { quem: "eu", texto: "Ele contou a coxinha?", proxima: "c3_18" },
    c3_18: { quem: "blake", texto: "Não. Eu que contei. É o número de vezes que ele me ganhou desde os sete anos. Eu conto tudo que ele ganha. É mania.", proxima: "c3_19" },
    c3_19: { tipo: "narracao", texto: "Ele fala isso olhando para o Kaito lá longe, sem raiva nenhuma, do jeito que alguém olha para uma montanha que vê da janela todo dia.", proxima: "c3_20" },
    c3_20: { quem: "blake", texto: "Quando a gente era pequeno, eu chorava toda vez que perdia. Ele nunca riu de mim. Ele sentava do lado e esperava eu parar. Depois falava “de novo”. E a gente brigava de novo.", proxima: "c3_21" },
    c3_21: { quem: "blake", texto: "Ele é o único que nunca me tratou como se eu fosse burro.", proxima: "c3_esc2" },

    // ▶ ESCOLHA 2 — No banco
    c3_esc2: { escolhas: [
      { texto: "A. “Você não é burro. Você é devagar e certo. É diferente. É melhor.”", proxima: "c3_2a_1", pontos: { blake: 3 }, flags: ["Devagar_certo"] },
      { texto: "B. “Você já ganhou dele alguma vez?”", proxima: "c3_2b_1", pontos: { blake: 1, kaito: 1 }, flags: ["Ganhou_Kaito"] },
      { texto: "C. Dividir o sanduíche de frango no meio e devolver metade. “Você vai desmaiar no saco de pancada.”", proxima: "c3_2c_1", pontos: { blake: 2 }, flags: ["Metade_sanduiche"] }
    ]},
    c3_2a_1: { tipo: "narracao", texto: "O Blake vira a cabeça e fica olhando para ela, muito sério, por um tempo que parece longo demais para um banco de pátio.", proxima: "c3_2a_2" },
    c3_2a_2: { quem: "blake", texto: "Devagar e certo.", proxima: "c3_2a_3" },
    c3_2a_3: { quem: "eu", texto: "Você entendeu física na terceira vez, mas entendeu de verdade. Tem gente que entende na primeira e esquece na semana seguinte.", proxima: "c3_2a_4" },
    c3_2a_4: { tipo: "narracao", texto: "Ele não responde. Ele olha para o caderno, para a frase perfeita do relatório, e passa o dedo devagar embaixo dela, como quem confere se ainda está ali.", proxima: "c3_22" },
    c3_2b_1: { quem: "blake", texto: "Uma vez. Aos doze. Ele estava com febre de trinta e nove e não me contou.", proxima: "c3_2b_2" },
    c3_2b_2: { quem: "blake", texto: "Quando eu descobri, eu não contei a vitória. Não vale. Então são quatrocentos e treze a zero.", proxima: "c3_2b_3" },
    c3_2b_3: { quem: "eu", texto: "Você é a pessoa mais honesta que eu conheço.", proxima: "c3_2b_4" },
    c3_2b_4: { quem: "blake", texto: "Eu sou só ruim de mentir. Fico vermelho.", proxima: "c3_22" },
    c3_2c_1: { tipo: "narracao", texto: "Ela parte o sanduíche no meio, com cuidado para a cenoura não cair, e devolve uma metade para ele.", proxima: "c3_2c_2" },
    c3_2c_2: { quem: "blake", texto: "Eu tenho mais dois.", proxima: "c3_2c_3" },
    c3_2c_3: { quem: "eu", texto: "Agora você tem dois e meio. Matemática.", proxima: "c3_2c_4" },
    c3_2c_4: { tipo: "narracao", texto: "Ele pega a metade e come em duas mordidas. Os dois ficam ali comendo frango no banco de concreto, sem falar nada, e é um silêncio bom, desses que não precisam ser preenchidos.", proxima: "c3_22" },

    // (todas as opções continuam aqui)
    c3_22: { tipo: "narracao", sprite: null, texto: "O sinal toca. O Blake guarda a lancheira, o caderno e as duas bananas que sobraram, e levanta.", proxima: "c3_23" },
    c3_23: { quem: "blake", texto: "A segunda frase eu faço sozinho. Se ficar ruim, você não fala nada.", proxima: "c3_24" },
    c3_24: { quem: "eu", texto: "Combinado.", proxima: "ka_01" },

    /* =================== CENA 3.5 — O BILHETE (Kaito) =================== */
    ka_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Aula de história", sprite: null, texto: "Na aula de história, o professor fala da revolução industrial com a empolgação de quem está lendo uma bula de remédio. No meio da explicação, um papel dobrado em quatro cai em cima do caderno dela, vindo da carteira de trás.", proxima: "ka_02" },
    ka_02: { tipo: "narracao", texto: "Ela olha para trás. O Kaito está com o queixo apoiado na mão, olhando para o quadro com a cara mais inocente do mundo, como se nunca tivesse jogado nada em ninguém.", proxima: "ka_03" },
    ka_03: { tipo: "narracao", texto: "Ela abre. Tem um desenho torto de uma tigela fumegando, com tanta cebolinha em cima que parece um arbusto, e embaixo, com a letra dele, apertada:", proxima: "ka_04" },
    ka_04: { tipo: "narracao", efeito: "eco", texto: "“O tio quer saber se você vem provar o caldo de terça. Ele mudou a receita. Eu acho que ficou pior. Preciso de uma segunda opinião.”", proxima: "ka_esc" },
    ka_esc: { escolhas: [
      { texto: "A. Escrever embaixo: “Só se tiver cebolinha demais.” E jogar de volta por cima do ombro.", proxima: "ka_a1", pontos: { kaito: 2 }, flags: ["Bilhete_cebolinha"] },
      { texto: "B. Desenhar do lado da tigela um capacete vermelho pequeno, com um sorriso. Devolver sem escrever nada.", proxima: "ka_b1", pontos: { kaito: 3 }, flags: ["Bilhete_capacete"] },
      { texto: "C. Escrever “Presta atenção na aula, Kaito.” E devolver com cara séria.", proxima: "ka_c1", pontos: { kaito: 2 }, flags: ["Bilhete_aula"] }
    ]},
    ka_a1: { tipo: "narracao", texto: "Ela escreve, dobra e joga por cima do ombro sem olhar. Escuta o papel abrir lá atrás, e depois um barulho que parece uma risada engolida, daquelas que saem pelo nariz.", proxima: "ka_a2" },
    ka_a2: { tipo: "narracao", texto: "Dois minutos depois, o papel volta. Embaixo da frase dela, ele escreveu só: “Fechado. Terça. Eu corto.”", proxima: "c4_01" },
    ka_b1: { tipo: "narracao", texto: "Ela desenha o capacete com cuidado, com o sorrisinho torto, e devolve sem escrever nada. Lá atrás, o papel abre, e depois fica um silêncio muito comprido.", proxima: "ka_b2" },
    ka_b2: { tipo: "narracao", texto: "Quando ela vira um pouco a cabeça, de lado, vê o Kaito guardando o bilhete dentro da capa do caderno, com muito cuidado, e não do jeito que se guarda papel de aula. Ele não devolve mais nada a aula inteira.", proxima: "c4_01" },
    ka_c1: { tipo: "narracao", texto: "Ela escreve, dobra e devolve. Lá atrás, o papel abre. O Kaito solta uma risada alta, de verdade, no meio do silêncio da revolução industrial.", proxima: "ka_c2" },
    ka_c2: { quem: "desconhecido", rotulo: "Professor de história", texto: "Algum problema com a máquina a vapor, senhor Kaito?", proxima: "ka_c3" },
    ka_c3: { quem: "kaito", sprite: "kaito", texto: "Nenhum, professor. A máquina a vapor é ótima.", proxima: "ka_c4" },
    ka_c4: { tipo: "narracao", sprite: null, texto: "Ele olha para a nuca dela pelo resto da aula. Ela sente. Ela não vira nem uma vez, e passa a aula inteira tentando não rir.", proxima: "c4_01" },

    /* =================== CENA 4 — EDUCAÇÃO FÍSICA =================== */
    // Cenário: quadra e vestiário, terceira e quarta aula (usa "patio-fundos" e "vestiario").
    c4_01: { tipo: "narracao", cenario: "patio", transicao: "tempo", legenda: "Educação física — Cena 4", sprite: null, texto: "Educação física, na quadra. O professor anuncia corrida de resistência, doze voltas, e a turma inteira solta um gemido coletivo que dá para ouvir da diretoria.", proxima: "c4_02" },
    c4_02: { quem: "desconhecido", rotulo: "Professor de educação física", texto: "Quem andar leva zero. Quem correr de verdade e chegar vivo leva dez. Takeo, você está dispensado, vai marcar o tempo.", proxima: "c4_03" },
    c4_03: { quem: "takeo", sprite: "takeo:machucado", texto: "O melhor dia da minha vida.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", sprite: null, texto: "O Ryuji sai disparado na frente, como sempre, e o Victor corre do lado da Akane falando sem parar, o que é a única forma de exercício que ele leva a sério. A Mio e a Hana correm juntas, devagar, discutindo alguma coisa sobre o horário de verão.", proxima: "c4_05" },
    c4_05: { tipo: "pensamento", texto: "Eu podia dar essas doze voltas em dois minutos. Não posso, então eu corro no meio do grupo, com a respiração de quem está cansada, e é mais difícil fingir que correr.", proxima: "c4_06" },
    c4_06: { tipo: "narracao", sprite: "blake", texto: "Na sexta volta, o Blake aparece do lado dela, no mesmo ritmo. Ele não corre rápido, mas também não para, com passadas pesadas e regulares que parecem um relógio.", proxima: "c4_07" },
    c4_07: { quem: "blake", texto: "Você está fingindo.", proxima: "c4_08" },
    c4_08: { quem: "eu", texto: "Fingindo o quê?", proxima: "c4_09" },
    c4_09: { quem: "blake", texto: "Que está cansada. Você respira igual quem está cansado, mas você não está suando.", proxima: "c4_10" },
    c4_10: { tipo: "narracao", texto: "Ela olha para ele de lado. Ele não está olhando para ela, está olhando para a frente, para o Ryuji, que já está uma volta inteira na frente de todo mundo.", proxima: "c4_11" },
    c4_11: { quem: "blake", texto: "Eu não vou perguntar. Eu só reparei. Eu reparo nas coisas, só demoro pra falar.", proxima: "c4_esc3" },

    // ▶ ESCOLHA 3 — Na corrida
    c4_esc3: { escolhas: [
      { texto: "A. “Eu tenho muito fôlego. Herança de família.”", proxima: "c4_3a_1", pontos: { blake: 1 }, flags: ["Folego_familia"] },
      { texto: "B. Não responder. Acelerar um pouco, só um pouco, e deixar ele pra trás. Depois esperar na curva.", proxima: "c4_3b_1", pontos: { blake: 2 }, flags: ["Esperou_curva"] },
      { texto: "C. “Você também está fingindo. Você está correndo devagar pra ficar do meu lado.”", proxima: "c4_3c_1", pontos: { blake: 2 }, flags: ["Fingindo_Blake"] }
    ]},
    c4_3a_1: { quem: "blake", texto: "Herança de família.", proxima: "c4_3a_2" },
    c4_3a_2: { quem: "eu", texto: "A minha avó sobe ladeira carregando sacola de feira sem parar uma vez.", proxima: "c4_3a_3" },
    c4_3a_3: { tipo: "narracao", texto: "Ele faz que sim com a cabeça, como quem guarda uma informação numa gaveta para abrir depois. Não fala mais nada, mas também não sai do lado dela até a última volta.", proxima: "c4_12" },
    c4_3b_1: { tipo: "narracao", texto: "Ela acelera. Só um pouco, o suficiente para abrir uns dez metros, e depois diminui na curva do gol e fica esperando, correndo no lugar.", proxima: "c4_3b_2" },
    c4_3b_2: { tipo: "narracao", texto: "O Blake chega, no mesmo ritmo de relógio, e passa por ela sem parar. Quando ela volta para o lado dele, ele está quase rindo.", proxima: "c4_3b_3" },
    c4_3b_3: { quem: "blake", texto: "Isso foi pior que responder.", proxima: "c4_12" },
    c4_3c_1: { tipo: "narracao", texto: "O Blake fica vermelho. Começa pelas orelhas e desce pelo pescoço, e ele não pode esconder porque está correndo.", proxima: "c4_3c_2" },
    c4_3c_2: { quem: "blake", texto: "Eu sou devagar.", proxima: "c4_3c_3" },
    c4_3c_3: { quem: "eu", texto: "Você correu a cinco por quilômetro na semana passada, eu vi o Takeo anotando.", proxima: "c4_3c_4" },
    c4_3c_4: { tipo: "narracao", texto: "Ele não responde. Ele continua do lado dela, vermelho até a nuca, até a última volta, e não acelera nem uma vez.", proxima: "c4_12" },

    // (todas as opções continuam aqui)
    c4_12: { tipo: "narracao", sprite: "takeo:machucado", texto: "Na linha de chegada, o Takeo anota os tempos com a mão boa, numa prancheta emprestada da Hana. O Ryuji chega primeiro e deita no chão da quadra como se tivesse morrido.", proxima: "c4_13" },
    c4_13: { quem: "ryuji", sprite: "ryuji", texto: "Eu vi a luz. A luz era amarela. A luz era a Relâmpago.", proxima: "c4_14" },
    c4_14: { tipo: "narracao", cenario: "vestiario", transicao: "tempo", sprite: null, texto: "No vestiário, depois, a Reina passa protetor de rosto na frente do espelho, a Akane prende o cabelo com um lápis, e a Hana anota o próprio tempo no caderno de gatinho, numa tabela nova chamada “Evolução física (ruim)”.", proxima: "c4_15" },
    c4_15: { quem: "reina", sprite: "reina", texto: "SN, você nem suou. Que ódio. Eu pareço uma esponja e você parece que acabou de sair do banho.", proxima: "c4_16" },
    c4_16: { quem: "eu", texto: "Eu suo por dentro.", proxima: "c4_17" },
    c4_17: { quem: "reina", sprite: "reina", texto: "Isso não existe. Mas se existir, eu quero.", proxima: "sd_01" },

    /* =================== CENA 4.5 — O PORTÃO (todos) =================== */
    sd_01: { roupa: "escolar", tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Saída", sprite: null, texto: "Na saída, o portão vira aquela bagunça de segunda-feira. O Victor está encostado no muro com o pirulito de sempre, o Ryuji está tentando ligar a Relâmpago, que tossiu duas vezes e se recusou, o Takeo está brigando com a alça da mochila com uma mão só, e o Blake está parado do lado, quieto, como um poste com mochila.", proxima: "sd_02" },
    sd_02: { quem: "victor", texto: "Gatinha... SN. Aceita um pirulito? É de morango. É o último. Eu estou abrindo mão do último pirulito de morango por você. Isso nunca aconteceu na história da humanidade.", proxima: "sd_03" },
    sd_03: { quem: "ryuji", sprite: "ryuji", texto: "SN! Foto! Eu preciso de uma foto com a Relâmpago no portão da escola, pra provar pra ela que ela tem amigos e voltar a funcionar!", proxima: "sd_04" },
    sd_04: { quem: "takeo", sprite: "takeo:machucado", texto: "Alguém fecha o zíper da minha mochila? É só isso. Eu não quero ajuda. Eu quero que alguém feche o zíper.", proxima: "sd_05" },
    sd_05: { tipo: "narracao", sprite: "blake", texto: "O Blake não pede nada. Ele só olha para ela, e depois para os três, e levanta a sobrancelha, como quem pergunta “e agora?”.", proxima: "sd_esc" },
    sd_esc: { escolhas: [
      { texto: "A. Aceitar o último pirulito do Victor. “Eu vou guardar o palito. Prova histórica.”", proxima: "sd_a1", pontos: { victor: 2 }, flags: ["Ultimo_pirulito"] },
      { texto: "B. Tirar a foto com o Ryuji em cima da Relâmpago, fazendo pose de piloto.", proxima: "sd_b1", pontos: { ryuji: 2 }, flags: ["Foto_Relampago"] },
      { texto: "C. Fechar o zíper da mochila do Takeo e arrumar a alça no ombro bom dele.", proxima: "sd_c1", pontos: { takeo: 2 }, flags: ["Ziper_Takeo"] },
      { texto: "D. Ficar do lado do Blake, cruzar os braços igual ele e assistir a bagunça.", proxima: "sd_d1", pontos: { blake: 2 }, flags: ["Poste_Blake"] }
    ]},
    sd_a1: { tipo: "narracao", sprite: null, texto: "Ela pega o pirulito. O Victor põe a mão no peito, faz uma reverência e finge que vai desmaiar de emoção no meio do portão, e dois alunos do primeiro ano param para olhar.", proxima: "sd_a2" },
    sd_a2: { quem: "victor", texto: "Guardar o palito. Ela vai guardar o palito. Alguém anota a data. Eu vou contar isso pros meus netos.", proxima: "sd_06" },
    sd_b1: { tipo: "narracao", sprite: "ryuji", texto: "Ela sobe na garupa da Relâmpago parada, coloca os óculos escuros que o Ryuji tira do bolso e faz pose de piloto de corrida. O Takeo tira a foto com uma mão, torta, e o Ryuji coloca de fundo de tela na mesma hora.", proxima: "sd_b2" },
    sd_b2: { quem: "ryuji", texto: "Ficou perfeita. A Relâmpago está sorrindo. Olha. Ela está sorrindo.", proxima: "sd_b3" },
    sd_b3: { tipo: "narracao", texto: "Ele vira a chave de novo, e a moto liga na primeira, roncando alto. O Ryuji grita que foi a foto. Ninguém tem coragem de discordar.", proxima: "sd_06" },
    sd_c1: { tipo: "narracao", sprite: "takeo:machucado", texto: "Ela fecha o zíper, ajeita a alça no ombro bom dele e dá um tapinha na mochila, do jeito que a mãe dela faz. O Takeo fica parado, olhando para baixo, com as orelhas vermelhas.", proxima: "sd_c2" },
    sd_c2: { quem: "takeo", sprite: "takeo:machucado", texto: "Obrigado. Eu ia conseguir sozinho. Em uns quarenta minutos.", proxima: "sd_06" },
    sd_d1: { tipo: "narracao", sprite: "blake", texto: "Ela para do lado do Blake, cruza os braços igualzinho ele, e os dois ficam assistindo o Victor, o Ryuji e o Takeo como quem assiste a um programa de televisão ruim.", proxima: "sd_d2" },
    sd_d2: { quem: "blake", texto: "Eles fazem isso todo dia.", proxima: "sd_d3" },
    sd_d3: { quem: "eu", texto: "E você fica olhando todo dia?", proxima: "sd_d4" },
    sd_d4: { quem: "blake", texto: "Todo dia. Hoje tem companhia. É melhor.", proxima: "sd_06" },
    sd_06: { tipo: "narracao", sprite: "kaito", texto: "O Kaito sai por último, com a mochila num ombro só, passa pelo grupo e para do lado dela só o tempo de falar baixo, sem parar de andar.", proxima: "sd_07" },
    sd_07: { quem: "kaito", texto: "Terça. Caldo. Não esquece.", proxima: "sd_08" },
    sd_08: { tipo: "narracao", sprite: null, texto: "E segue em frente sem olhar para trás, como se não tivesse dito nada, e o Victor fica olhando dele para ela com o pirulito parado no meio da boca.", proxima: "r_cam" },

    /* =================== ROTA — SEGUNDA À TARDE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { roupa: "fora", tipo: "narracao", cenario: "loja-lamen", transicao: "tempo", legenda: "Segunda, 16h", sprite: "kaito", texto: "Depois da aula, a lojinha. O Kaito acabou de voltar da prefeitura com o tio, e os dois estão sentados no balcão com um papel carimbado entre eles, olhando para o carimbo como se fosse uma obra de arte.", proxima: "rk_02" },
    rk_02: { quem: "kaito", texto: "Protocolo. Duzentas e oitenta e sete assinaturas, entregues às onze e quinze. A moça do balcão disse que nunca viu um abaixo-assinado com coluna de prato favorito.", proxima: "rk_03" },
    rk_03: { quem: "tio_kaito", texto: "Ela leu a coluna inteira. Ela riu no “caldo sem cebolinha, não existe”. Eu vi.", proxima: "rk_04" },
    rk_04: { tipo: "narracao", texto: "O tio levanta, dá um tapinha na cabeça da SN como quem cumprimenta uma sobrinha, e vai para a cozinha. O Kaito fica no balcão, girando o papel do protocolo com o dedo.", proxima: "rk_05" },
    rk_05: { quem: "kaito", texto: "Não resolve. Eu sei que não resolve. Mas é a primeira vez que alguém da prefeitura carimbou alguma coisa nossa.", proxima: "rk_06" },
    rk_06: { quem: "kaito", texto: "Você está esquisita hoje.", proxima: "rk_07" },
    rk_07: { quem: "eu", texto: "Eu passei o dia inteiro fingindo que era um dia normal.", proxima: "rk_08" },
    rk_08: { quem: "kaito", texto: "E deu certo?", proxima: "rk_09" },
    rk_09: { quem: "eu", texto: "Deu. Até agora.", proxima: "rk_esc" },

    // ▶ ESCOLHA — Rota Kaito
    rk_esc: { escolhas: [
      { texto: "A. “Me deixa ficar aqui até escurecer. Só sentada. Sem fazer nada.”", proxima: "rk_a1", pontos: { kaito: 3 }, flags: ["Ficou_lojinha_tarde"] },
      { texto: "B. “Me ensina a fazer o caldo. Desde o começo. Do osso.”", proxima: "rk_b1", pontos: { kaito: 3 }, flags: ["Aula_caldo"] },
      { texto: "C. Pegar o papel do protocolo e colar na parede, do lado do aviso de despejo. “Agora tem dois papéis. Um de cada lado.”", proxima: "rk_c1", pontos: { kaito: 2 }, flags: ["Protocolo_parede"] }
    ]},
    rk_a1: { tipo: "narracao", texto: "O Kaito não pergunta por quê. Ele puxa o banquinho do canto para perto do balcão e ela senta. Ele volta a cortar cebolinha, ela fica olhando, e a lojinha vai escurecendo devagar, com o cheiro do caldo e o barulho da faca.", proxima: "rk_a2" },
    rk_a2: { tipo: "narracao", texto: "De vez em quando ele levanta os olhos, só para ver se ela continua ali. Ela continua.", proxima: "r_fim" },
    rk_b1: { quem: "kaito", texto: "Do osso demora seis horas.", proxima: "rk_b2" },
    rk_b2: { quem: "eu", texto: "Então me ensina a primeira hora.", proxima: "rk_b3" },
    rk_b3: { tipo: "narracao", texto: "Ele dá um avental para ela, que fica comprido até o joelho, e mostra como lavar o osso, como tirar a espuma, como saber pelo cheiro quando está na hora. Ele explica devagar, com a voz baixa, chegando perto para mostrar a concha.", proxima: "rk_b4" },
    rk_b4: { quem: "kaito", texto: "O segredo é não ter pressa. Caldo com pressa fica com gosto de pressa.", proxima: "r_fim" },
    rk_c1: { tipo: "narracao", texto: "Ela pega o protocolo e um pedaço de fita do caixa e cola o papel na parede, bem do lado do aviso de despejo, na mesma altura.", proxima: "rk_c2" },
    rk_c2: { tipo: "narracao", texto: "O Kaito fica olhando os dois papéis lado a lado. O que manda eles saírem e o que diz que duzentas e oitenta e sete pessoas querem que eles fiquem.", proxima: "rk_c3" },
    rk_c3: { quem: "kaito", texto: "...Fica melhor assim. Parece uma briga.", proxima: "rk_c4" },
    rk_c4: { quem: "eu", texto: "É uma briga. Só que de papel.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { tipo: "narracao", cenario: "clube-leitura", transicao: "tempo", legenda: "Segunda, 16h", sprite: "takeo:machucado", texto: "Depois da aula, a biblioteca da escola, na mesa do canto, a que tem tomada. O Takeo reservou com um papelzinho escrito “ocupada pelo plantão”, e ninguém teve coragem de tirar.", proxima: "rt_02" },
    rt_02: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu não vim pesquisar nada hoje. Eu juro. Eu só queria sentar aqui com você sem ter ninguém apanhando, sem prédio, sem carro preto.", proxima: "rt_03" },
    rt_03: { tipo: "narracao", texto: "Ele tira da mochila, com a mão boa, um livro de quadrinhos velho, com a capa remendada com fita, e dois pirulitos de uva.", proxima: "rt_04" },
    rt_04: { quem: "takeo", sprite: "takeo:machucado", texto: "É o meu favorito desde os dez anos. Eu nunca emprestei pra ninguém. A minha avó tentou ler uma vez e disse que tinha muita explosão.", proxima: "rt_esc" },

    // ▶ ESCOLHA — Rota Takeo
    rt_esc: { escolhas: [
      { texto: "A. Ler junto com ele, lado a lado, a mesma página, esperando ele virar.", proxima: "rt_a1", pontos: { takeo: 3 }, flags: ["Leram_juntos"] },
      { texto: "B. “Lê pra mim. Com as vozes.”", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["Vozes_Takeo"] },
      { texto: "C. “Me empresta até sexta. Eu devolvo com uma página marcada. A minha favorita.”", proxima: "rt_c1", pontos: { takeo: 2 }, flags: ["Emprestou_quadrinho"] }
    ]},
    rt_a1: { tipo: "narracao", texto: "Ela puxa a cadeira para perto da dele, ombro com ombro, e os dois leem a mesma página. Ele vira quando ela termina, ela percebe que ele espera, e passa a esperar ele também.", proxima: "rt_a2" },
    rt_a2: { tipo: "narracao", texto: "Na página trinta e dois, tem uma explosão de página inteira, e os dois riem ao mesmo tempo, e a bibliotecária manda os dois fazerem silêncio, e eles riem mais baixo.", proxima: "r_fim" },
    rt_b1: { quem: "takeo", sprite: "takeo:machucado", texto: "Com as vozes? Aqui? Na biblioteca?", proxima: "rt_b2" },
    rt_b2: { quem: "eu", texto: "Baixinho.", proxima: "rt_b3" },
    rt_b3: { tipo: "narracao", texto: "Ele lê. Baixinho, com uma voz grossa para o vilão, uma voz fina para o robô e uma voz que parece muito a dele mesmo para o herói. Ela fica olhando para ele ler, e não para o livro.", proxima: "rt_b4" },
    rt_b4: { quem: "takeo", sprite: "takeo:machucado", texto: "...Você não está olhando a página.", proxima: "rt_b5" },
    rt_b5: { quem: "eu", texto: "Eu estou ouvindo. É melhor.", proxima: "r_fim" },
    rt_c1: { tipo: "narracao", texto: "O Takeo segura o livro um segundo a mais, como quem se despede, e depois entrega.", proxima: "rt_c2" },
    rt_c2: { quem: "takeo", sprite: "takeo:machucado", texto: "Se você dobrar a ponta de alguma página, a gente termina.", proxima: "rt_c3" },
    rt_c3: { quem: "eu", texto: "Eu vou marcar com um pirulito.", proxima: "rt_c4" },
    rt_c4: { quem: "takeo", sprite: "takeo:machucado", texto: "Isso é pior. Isso gruda.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: "fora", tipo: "narracao", cenario: "ginasio-boxe", transicao: "tempo", legenda: "Segunda, 16h30", sprite: "blake", texto: "Depois da aula, o Blake pergunta, do jeito dele, se ela quer ver onde ele treina. Ele pergunta olhando para a mochila e não para ela, e ela diz que sim antes que ele desista de ter perguntado.", proxima: "rb_02" },
    rb_02: { tipo: "narracao", texto: "A academia fica em cima de uma loja de pneus, com escada estreita e cheiro de borracha. Lá dentro, tem três sacos de pancada, um ringue pequeno com a lona remendada e um rádio velho tocando música antiga.", proxima: "rb_03" },
    rb_03: { quem: "blake", texto: "Eu pago com o dinheiro da livraria. Quarenta por mês. O dono me deixa vir todo dia porque eu limpo o chão no fim.", proxima: "rb_04" },
    rb_04: { tipo: "narracao", texto: "Ele enrola as faixas nas mãos, devagar, com cuidado, e começa a bater no saco. Cada soco faz o saco balançar inteiro e a corrente ranger no teto.", proxima: "rb_05" },
    rb_05: { quem: "blake", texto: "Quer tentar? Eu seguro.", proxima: "rb_esc" },

    // ▶ ESCOLHA — Rota Blake
    rb_esc: { escolhas: [
      { texto: "A. Bater no saco com cuidado. Bem fraco. Com muito, muito cuidado.", proxima: "rb_a1", pontos: { blake: 2 }, flags: ["Soco_fraco"] },
      { texto: "B. “Me ensina a enrolar a faixa primeiro. Do jeito certo.”", proxima: "rb_b1", pontos: { blake: 3 }, flags: ["Faixa_Blake"] },
      { texto: "C. “Prefiro ver você.” E sentar na beira do ringue.", proxima: "rb_c1", pontos: { blake: 3 }, flags: ["Ver_Blake"] }
    ]},
    rb_a1: { tipo: "narracao", texto: "Ela bate no saco com a força de quem empurra uma porta de vidro. Mesmo assim, o saco sobe, bate no teto e volta, e o Blake, que estava segurando, dá dois passos para trás.", proxima: "rb_a2" },
    rb_a2: { tipo: "narracao", texto: "O dono da academia para de varrer. O Blake fica olhando para o saco ainda balançando, depois para ela, e de novo para o saco.", proxima: "rb_a3" },
    rb_a3: { quem: "blake", texto: "...Esse foi o fraco?", proxima: "rb_a4" },
    rb_a4: { quem: "eu", texto: "O saco é velho. Deve estar vazio por dentro.", proxima: "rb_a5" },
    rb_a5: { tipo: "narracao", texto: "Ele não responde. Ele segura o saco de novo, mas agora fica do lado, e não atrás. E sorri, um sorriso que ela nunca tinha visto nele, meio de criança.", proxima: "r_fim" },
    rb_b1: { tipo: "narracao", texto: "Ele pega as mãos dela e começa a enrolar a faixa, começando pelo pulso, passando entre os dedos, voltando pelo dorso. As mãos dele são enormes e muito quentes, e ele trabalha devagar, olhando só para a faixa.", proxima: "rb_b2" },
    rb_b2: { quem: "blake", texto: "Tem que ficar firme, mas não pode apertar demais, senão o sangue não passa.", proxima: "rb_b3" },
    rb_b3: { tipo: "narracao", texto: "Quando ele termina a segunda mão, fica um segundo segurando as duas, como quem confere o trabalho. Depois solta rápido, vira de costas e vai ajeitar o saco que não precisa ser ajeitado.", proxima: "r_fim" },
    rb_c1: { tipo: "narracao", texto: "Ela senta na beira do ringue, com as pernas balançando, e fica olhando ele treinar. Ele fica vermelho no primeiro minuto, mas depois esquece que ela está ali e bate do jeito que bate sozinho.", proxima: "rb_c2" },
    rb_c2: { tipo: "narracao", texto: "Ela nunca tinha visto o Blake assim. Sem pressa, sem raiva, só ele, o saco e a música antiga do rádio. Ele é bonito quando não está tentando ser nada.", proxima: "rb_c3" },
    rb_c3: { quem: "blake", texto: "Você ficou olhando o tempo todo.", proxima: "rb_c4" },
    rb_c4: { quem: "eu", texto: "Eu falei que preferia ver você.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Segunda, 16h", sprite: "ryuji", texto: "Depois da aula, o Ryuji espera ela no portão com dois capacetes e uma folha impressa na mão, que ele balança como se fosse uma bandeira.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", texto: "Inscrição do curso de bombeiro. Saiu hoje. Eu preciso entregar até as cinco, do outro lado da cidade, e eu não quero ir sozinho, porque se eu for sozinho eu vou desistir na porta.", proxima: "rr_03" },
    rr_03: { tipo: "narracao", texto: "Eles vão na Relâmpago. No caminho, ele conta a lista de documentos três vezes, em voz alta, por cima do barulho do motor, como quem reza.", proxima: "rr_04" },
    rr_04: { tipo: "narracao", cenario: "patio-fundos", texto: "Na porta do quartel, ele para. Desliga a moto. Fica sentado com a folha na mão.", proxima: "rr_05" },
    rr_05: { quem: "ryuji", texto: "E se eu não passar? Todo mundo sabe que eu vou ser bombeiro. Se eu não passar, eu vou ser só o cara da moto amarela que falava que ia ser bombeiro.", proxima: "rr_esc" },

    // ▶ ESCOLHA — Rota Ryuji
    rr_esc: { escolhas: [
      { texto: "A. Tirar a folha da mão dele e entrar no quartel. “Então eu entrego. Você vem atrás.”", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Entregou_inscricao"] },
      { texto: "B. “Três minutos e cinquenta e oito. Você lembra? Você já é.”", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Lembra_358"] },
      { texto: "C. “Se você não passar, você tenta de novo, e eu venho de novo. Quantas vezes precisar.”", proxima: "rr_c1", pontos: { ryuji: 3 }, flags: ["Tenta_de_novo"] }
    ]},
    rr_a1: { tipo: "narracao", texto: "Ela tira a folha da mão dele e entra no quartel sem olhar para trás. Ele grita alguma coisa, desce da moto atropelando o próprio pé e corre atrás dela.", proxima: "rr_a2" },
    rr_a2: { tipo: "narracao", texto: "Na mesa da recepção, ela entrega a folha para o bombeiro de plantão e aponta para o Ryuji, que chega sem fôlego.", proxima: "rr_a3" },
    rr_a3: { quem: "eu", texto: "É dele. Ele vai passar.", proxima: "rr_a4" },
    rr_a4: { quem: "ryuji", texto: "Eu vou passar! Ela que falou! Ela não erra!", proxima: "r_fim" },
    rr_b1: { tipo: "narracao", texto: "O Ryuji olha para ela. Ele lembra. A simulação, o boneco nas costas, os três minutos e cinquenta e oito.", proxima: "rr_b2" },
    rr_b2: { quem: "ryuji", texto: "...Eu já sou.", proxima: "rr_b3" },
    rr_b3: { tipo: "narracao", texto: "Ele desce da moto. Endireita a faixa na testa, respira fundo e entra no quartel com a folha na mão, sem ela, sozinho, de costas retas.", proxima: "r_fim" },
    rr_c1: { tipo: "narracao", texto: "O Ryuji fica olhando para ela com a boca um pouco aberta, como se ela tivesse falado uma língua que ele conhece e esqueceu.", proxima: "rr_c2" },
    rr_c2: { quem: "ryuji", texto: "Quantas vezes precisar.", proxima: "rr_c3" },
    rr_c3: { quem: "eu", texto: "Eu sou muito chata. Eu venho até você passar.", proxima: "rr_c4" },
    rr_c4: { tipo: "narracao", texto: "Ele ri, aquele riso alto que vira tosse no meio. Depois desce da moto e entra, e da porta ele olha para trás uma vez, só para ver se ela continua lá. Ela continua.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: "fora", tipo: "narracao", cenario: "frente-casa-sn-tarde", transicao: "tempo", legenda: "Segunda, 17h", sprite: "victor", texto: "Às cinco da tarde, a campainha toca. É o Victor, com uma caixa de ferramentas enferrujada numa mão e um pirulito na boca, parado na porta do apartamento dela como se tivesse sido convidado para um baile.", proxima: "rv_cam" },
    rv_cam: { caminhos: [
      { flag: "Cliente_12", proxima: "rv_c12" }
    ], proxima: "rv_sem" },
    rv_c12: { quem: "victor", texto: "Cliente número doze. Bicicleta da mãe, pneu furado faz dois anos. Primeiro serviço oficial, de graça, porque é regra. Eu vim antes da doca porque a doca começa às dez e a sua bicicleta merece luz do dia.", proxima: "rv_02" },
    rv_sem: { quem: "victor", texto: "Eu passei na frente do seu prédio e vi uma bicicleta com o pneu murcho no hall. Murcho faz anos, pela cara. Isso é um crime contra a mecânica. Eu vim resolver.", proxima: "rv_02" },
    rv_02: { tipo: "narracao", texto: "Eles descem até o hall. O Victor senta no chão com a bicicleta de cabeça para baixo, tira o pneu em dois minutos e mergulha a câmara de ar num balde de água, procurando o furo pelas bolhas.", proxima: "rv_03" },
    rv_03: { quem: "victor", texto: "Achei. Olha. Um prego pequenininho. Dois anos sem ninguém achar um prego desse tamanho. A gente vive num mundo sem atenção.", proxima: "rv_04" },
    rv_04: { tipo: "narracao", texto: "Ele trabalha cantarolando, com as mãos pretas de graxa e a língua para fora, e de vez em quando explica o que está fazendo para ela, como um professor muito orgulhoso de uma matéria que ninguém pediu.", proxima: "rv_esc" },

    // ▶ ESCOLHA — Rota Victor
    rv_esc: { escolhas: [
      { texto: "A. Sentar no chão do lado dele e pedir pra aprender a remendar.", proxima: "rv_a1", pontos: { victor: 3 }, flags: ["Aprendeu_remendo"] },
      { texto: "B. Subir e descer com dois copos de suco e um bolinho de frango. “Pagamento.”", proxima: "rv_b1", pontos: { victor: 2 }, flags: ["Pagou_suco"] },
      { texto: "C. “Você fica diferente quando conserta coisa. Fica quieto. Fica bonito.”", proxima: "rv_c1", pontos: { victor: 3 }, flags: ["Bonito_consertando"] }
    ]},
    rv_a1: { tipo: "narracao", texto: "Ele ensina. Lixa em volta do furo, passa a cola, espera secar soprando, coloca o remendo e aperta com o polegar. Ele faz ela apertar também, por cima do dedo dele, para sentir a força certa.", proxima: "rv_a2" },
    rv_a2: { quem: "victor", texto: "Força de quem segura passarinho. Nem mais, nem menos.", proxima: "rv_a3" },
    rv_a3: { tipo: "pensamento", texto: "Força de quem segura passarinho. Se ele soubesse quanta força eu tenho, ele não ia confiar o remendo na minha mão.", proxima: "r_fim" },
    rv_b1: { tipo: "narracao", texto: "Ela sobe e volta com dois copos de suco de laranja e um bolinho de frango embrulhado num guardanapo. O Victor lava as mãos no balde, mal, e come o bolinho em três mordidas.", proxima: "rv_b2" },
    rv_b2: { quem: "victor", texto: "Isso é melhor que dinheiro. Eu vou colocar no caderno. “Cliente pagou em bolinho.” Vai ser a minha moeda oficial.", proxima: "r_fim" },
    rv_c1: { tipo: "narracao", texto: "O Victor para com a chave na mão. Ele abre a boca para fazer uma piada, e a piada não vem. Ele fecha a boca de novo.", proxima: "rv_c2" },
    rv_c2: { quem: "victor", texto: "...Ninguém nunca me chamou de bonito sem eu pedir.", proxima: "rv_c3" },
    rv_c3: { quem: "eu", texto: "Eu não falei pra você. Eu falei pra bicicleta.", proxima: "rv_c4" },
    rv_c4: { tipo: "narracao", texto: "Ele ri alto, de verdade, e o pirulito cai da boca dele dentro do balde. Ele termina o conserto inteiro sem pirulito e sem falar, e ela vê que as orelhas dele ficaram vermelhas até o fim.", proxima: "r_fim" },

    /* =================== CENA 5 — DESCE =================== */
    // (todas as rotas continuam aqui)
    // Cenário: casa da SN, segunda à noite. Música: silêncio, depois um baixo bem grave.
    r_fim: { roupa: null, tipo: "narracao", cenario: "cozinha-sn-noite", transicao: "tempo", legenda: "Segunda, 21h10 — Cena 5", sprite: null, texto: "Às nove, a mãe sai para o plantão. Ela dá um beijo na testa da filha, avisa que tem sopa na panela, e deixa um bilhete na porta da geladeira, preso com o ímã de abacaxi.", proxima: "c5_01" },
    c5_01: { tipo: "narracao", efeito: "eco", texto: "“Bilhete pequeno, porque eu sei que você não vai fazer besteira. Né? Né?? Te amo.”", proxima: "c5_02" },
    c5_02: { tipo: "narracao", cenario: "quarto-sn-noite", texto: "Ela toma a sopa, lava a louça e vai para o quarto. Está deitada com o livro de história aberto em cima da barriga, sem ler, quando o celular vibra.", proxima: "c5_03" },
    c5_03: { tipo: "narracao", texto: "É o número das fotos. Uma palavra só.", proxima: "c5_04" },
    c5_04: { quem: "mensagem", rotulo: "Mensagem — Ren", texto: "Desce.", proxima: "c5_05" },
    c5_05: { tipo: "narracao", texto: "Ela levanta, vai até a janela e afasta a cortina com um dedo. Lá embaixo, na calçada da frente, embaixo do poste, está o Ren. Sem carro preto, sem homem de terno, sem ninguém. Só ele, de casaco escuro, com as mãos nos bolsos, olhando para cima, para a janela dela.", proxima: "c5_06" },
    c5_06: { tipo: "pensamento", texto: "Ele veio sozinho. Pela primeira vez, ele veio sozinho até mim.", proxima: "c5_07" },
    c5_07: { tipo: "pensamento", texto: "Foi o que eu pedi no fliperama. Seja homem e fala direto comigo. E agora ele está ali embaixo, na frente do meu prédio, às nove e meia da noite.", proxima: "c5_esc4" },

    // ▶ ESCOLHA 4 — Descer?
    c5_esc4: { escolhas: [
      { texto: "A. Descer. Do jeito que está, de moletom e tênis.", proxima: "c5_4a_1", pontos: { desvio: 1 }, flags: ["Desceu_moletom"] },
      { texto: "B. Responder primeiro: “Cinco minutos.” E fazer ele esperar os cinco inteiros.", proxima: "c5_4b_1", pontos: { desvio: 1 }, flags: ["Cinco_minutos"] },
      { texto: "C. Deixar um bilhete maior na geladeira, embaixo do da mãe, antes de descer.", proxima: "c5_4c_1", pontos: {}, flags: ["Bilhete_maior"] }
    ]},
    c5_4a_1: { tipo: "narracao", texto: "Ela calça o tênis, pega a chave, e desce as escadas de dois em dois degraus, de moletom cinza, com o cabelo meio solto. Não arruma nada, porque arrumar seria dar importância.", proxima: "c5_08" },
    c5_4b_1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Cinco minutos.", proxima: "c5_4b_2" },
    c5_4b_2: { tipo: "narracao", texto: "Lá embaixo, ele olha para o celular, depois para a janela, e não se mexe. Ela espera os cinco minutos inteiros, contando no relógio da cozinha, e ele espera também, parado embaixo do poste, sem olhar para o celular nem uma vez.", proxima: "c5_4b_3" },
    c5_4b_3: { tipo: "pensamento", texto: "Ele espera. Ele sabe esperar muito bem. Isso devia me dar mais medo do que dá.", proxima: "c5_08" },
    c5_4c_1: { tipo: "narracao", texto: "Ela pega uma caneta e escreve, embaixo do bilhete da mãe, em letra grande:", proxima: "c5_4c_2" },
    c5_4c_2: { tipo: "narracao", efeito: "eco", texto: "“Saí pra conversar com um colega da escola. Volto antes da meia-noite. Não é besteira. É só conversa.”", proxima: "c5_4c_3" },
    c5_4c_3: { tipo: "pensamento", texto: "É verdade. Ele é um colega da escola. Ele também é o garoto que comprou um prédio pra despejar o tio do Kaito, mas isso não cabe no bilhete.", proxima: "c5_08" },

    // (todas as opções continuam aqui)
    c5_08: { tipo: "narracao", cenario: "frente-casa-sn-noite", roupa: "fora", sprite: "ren", transicao: "tempo", texto: "Na calçada, ela para a uns quatro metros dele, a mesma distância que ele sempre deixa. Ele olha para ela, para o moletom, para o tênis, e por um segundo parece que vai dizer alguma coisa sobre isso. Não diz.", proxima: "c5_09" },
    c5_09: { quem: "ren", texto: "Vem.", proxima: "c5_10" },
    c5_10: { quem: "eu", texto: "Pra onde?", proxima: "c5_11" },
    c5_11: { tipo: "narracao", texto: "Ele não responde. Ele vira e começa a andar, devagar, sem olhar para trás, como quem tem certeza de que vai ser seguido.", proxima: "c5_12" },
    c5_12: { tipo: "pensamento", texto: "Eu odeio isso. Eu odeio que ele tenha certeza. E eu vou atrás mesmo assim, porque eu quero saber.", proxima: "c5_13" },
    c5_13: { tipo: "narracao", cenario: "rua-noite", transicao: "tempo", sprite: null, texto: "Eles andam uns quinze minutos, sem falar, ele sempre uns passos na frente. Passam pela padaria fechada, pela praça, pela avenida, e entram numa rua sem saída, atrás do viaduto, onde os postes estão quebrados.", proxima: "c5_14" },
    c5_14: { tipo: "narracao", cenario: "predio-abandonado", texto: "No fim da rua, tem um prédio que nunca terminaram. Um esqueleto de concreto de oito andares, sem janela, sem parede em metade dos andares, com ferro enferrujado saindo das colunas como ossos. Um tapume de madeira em volta, todo pichado, com uma parte arrancada.", proxima: "c5_15" },
    c5_15: { tipo: "narracao", sprite: "ren", texto: "O Ren passa pelo buraco do tapume como quem passa pela porta da própria casa.", proxima: "c5_16" },
    c5_16: { quem: "ren", texto: "Meu pai ia construir aqui. Desistiu no quinto andar. Ninguém vem.", proxima: "c5_17" },
    c5_17: { tipo: "narracao", texto: "São as maiores frases que ele já falou para ela, e ele fala sem parar de andar, subindo a escada de concreto sem corrimão, no escuro, sem lanterna, porque sabe de cor onde fica cada degrau.", proxima: "c6_01" },

    /* =================== CENA 6 — POR PARTES =================== */
    // Cenário: último andar do prédio abandonado, céu aberto (usa "beco-mercado"). Música: vento, depois piano baixo.
    c6_01: { tipo: "narracao", cenario: "predio-abandonado-topo", sprite: null, transicao: "tempo", legenda: "Cena 6", texto: "No oitavo andar, não tem teto. É só uma laje de concreto aberta para o céu, com a cidade inteira lá embaixo, acesa. O vento bate forte e joga o cabelo dela no rosto.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", texto: "Num canto, tem uma cadeira de escritório velha, com o estofado rasgado, e do lado dela, em cima de um bloco de concreto, um tabuleiro de xadrez. Um de verdade, de madeira, grande, com as peças arrumadas para começar.", proxima: "c6_03" },
    c6_03: { tipo: "pensamento", texto: "Ele vem aqui. Sozinho. Ele sobe oito andares no escuro pra jogar xadrez contra ninguém.", proxima: "c6_04" },
    c6_04: { tipo: "narracao", sprite: "ren", texto: "O Ren para na beira da laje, onde não tem parede nenhuma, só o vazio e as luzes. Ele fica de costas para ela. É a primeira vez que ela vê ele de costas para alguém.", proxima: "c6_05" },
    c6_05: { quem: "eu", texto: "Você me trouxe aqui pra quê? Pra me mostrar a vista?", proxima: "c6_06" },
    c6_06: { quem: "ren", texto: "Você pediu.", proxima: "c6_07" },
    c6_07: { quem: "eu", texto: "Eu pedi pra você parar de derrubar os outros. Você parou com três. A lojinha continua com aviso na parede.", proxima: "c6_08" },
    c6_08: { quem: "ren", texto: "Você pediu pra eu falar direto com você.", proxima: "c6_09" },
    c6_09: { tipo: "narracao", texto: "Ele vira. Agora está de frente para ela, com a cidade atrás, e a luz de baixo deixa o rosto dele meio laranja, meio escuro.", proxima: "c6_10" },
    c6_10: { quem: "ren", texto: "Então eu vou falar. Uma parte.", proxima: "c6_11" },
    c6_11: { quem: "eu", texto: "Uma parte?", proxima: "c6_12" },
    c6_12: { quem: "ren", texto: "O resto você não ia aguentar ouvir. Ou eu não ia aguentar falar. Ainda não sei qual dos dois.", proxima: "c6_13" },
    c6_13: { tipo: "narracao", texto: "Ele senta na cadeira de escritório velha. Ela continua em pé. Ele olha para o tabuleiro e mexe um peão branco duas casas para frente, sem pensar, como quem respira.", proxima: "c6_14" },
    c6_14: { quem: "ren", texto: "A gente já se conheceu.", proxima: "c6_15" },
    c6_15: { quem: "eu", texto: "Na escola. Eu sei. Você senta perto da porta.", proxima: "c6_16" },
    c6_16: { quem: "ren", texto: "Antes. Quando a gente era criança.", proxima: "c6_17" },
    c6_17: { tipo: "narracao", texto: "O vento para um pouco. Ela fica olhando para ele, procurando no rosto dele um rosto mais novo, e não acha nada.", proxima: "c6_18" },
    c6_18: { quem: "eu", texto: "Eu não lembro de você.", proxima: "c6_19" },
    c6_19: { quem: "ren", texto: "Eu sei. Eu lembro pelos dois.", proxima: "c6_20" },
    c6_20: { tipo: "narracao", texto: "Ele fala isso sem tristeza e sem raiva, como quem informa um resultado de prova. Depois fica quieto muito tempo, mexendo no peão branco com a ponta do dedo, para frente e para trás, sem tirar do lugar.", proxima: "c6_21" },
    c6_21: { quem: "ren", texto: "Eu usava óculos. Grandes. Pesados, de armação marrom, que escorregavam no nariz. Eu andava com um tabuleiro dobrado embaixo do braço, pra todo lugar.", proxima: "m1_01" },
    m1_01: { tipo: "narracao", efeito: "flashback", texto: "Um clarão, rápido, sem aviso. Uma lente grossa e redonda, tão grande que parece um aquário, e atrás dela um olho piscando devagar. Tudo visto de baixo, do tamanho de quem ainda não alcança o balcão da padaria.", proxima: "m1_02" },
    m1_02: { tipo: "pensamento", texto: "Some antes que eu consiga segurar. Eu devia ter uns cinco anos. Eu não sei como eu sei disso, mas eu sei.", proxima: "c6_22" },
    c6_22: { quem: "ren", texto: "Na escola, me batiam por causa do tabuleiro. Em casa, me batiam porque eu apanhava na escola.", proxima: "c6_23" },
    c6_23: { tipo: "narracao", texto: "A SN não fala nada. O Ren também não olha para ela agora, olha para o tabuleiro, e a voz dele continua igual, baixa, sem subir nem descer, como se estivesse contando a história de outra pessoa.", proxima: "c6_24" },
    c6_24: { quem: "ren", texto: "Um dia, você sentou do meu lado. Ninguém sentava. Você pegou as peças e mexeu tudo errado. O cavalo andando reto. A torre pulando.", proxima: "c6_25" },
    c6_25: { quem: "ren", texto: "Eu falei que estava errado. Você riu e falou que era o seu jeito de jogar. Que o seu cavalo era especial.", proxima: "m2_01" },
    m2_01: { tipo: "narracao", efeito: "flashback", texto: "Outro pedaço, mais borrado ainda. A sensação de madeira lisa na palma da mão, uma peça pequena, branca, com uma crina esculpida. E a própria voz, fininha, de criança, rindo e dizendo alguma coisa que ela não consegue ouvir inteira.", proxima: "m2_02" },
    m2_02: { tipo: "narracao", efeito: "eco", texto: "“...ele pode, porque ele é especial...”", proxima: "m2_03" },
    m2_03: { tipo: "narracao", texto: "Ela pisca. O vento do oitavo andar volta, frio, e o Ren continua falando sem perceber nada, olhando para o tabuleiro.", proxima: "c6_26" },
    c6_26: { quem: "ren", texto: "Você não perguntou por que eu estava sozinho. Não perguntou do machucado no meu braço. Não perguntou dos óculos. Você só jogou comigo. Errado. A tarde inteira.", proxima: "c6_27" },
    c6_27: { tipo: "narracao", texto: "Ele para. Tira o dedo do peão. Fica olhando para a mão por um momento, como se estivesse surpreso de ter falado tanto.", proxima: "c6_28" },
    c6_28: { tipo: "pensamento", texto: "Eu não lembro dele. Eu não lembro de rosto, nem de lugar, nem de tarde inteira. Mas eu lembro de uma lente enorme e de uma peça de madeira na minha mão. E o cavalo especial era meu. Eu sei que era meu.", proxima: "c6_esc5" },

    // ▶ ESCOLHA 5 — O que perguntar
    c6_esc5: { escolhas: [
      { texto: "A. “Onde foi isso?”", proxima: "c6_5a_1", pontos: {}, flags: ["Perguntou_onde"] },
      { texto: "B. “E depois?”", proxima: "c6_5b_1", pontos: {}, flags: ["Perguntou_depois"] },
      { texto: "C. “Quem batia em você em casa?”", proxima: "c6_5c_1", pontos: { desvio: 1 }, flags: ["Perguntou_casa"] }
    ]},
    c6_5a_1: { quem: "eu", texto: "Onde foi isso?", proxima: "c6_5a_2" },
    c6_5a_2: { tipo: "narracao", texto: "O Ren olha para ela, e alguma coisa no rosto dele fecha, rápido, como uma gaveta que alguém empurra com o quadril.", proxima: "c6_5a_3" },
    c6_5a_3: { quem: "ren", texto: "Isso fica pra depois.", proxima: "c6_29" },
    c6_5b_1: { quem: "eu", texto: "E depois?", proxima: "c6_5b_2" },
    c6_5b_2: { quem: "ren", texto: "Depois você voltou mais umas vezes. Sempre no mesmo lugar. Sempre mexendo errado.", proxima: "c6_5b_3" },
    c6_5b_3: { quem: "ren", texto: "E aí você sumiu.", proxima: "c6_5b_4" },
    c6_5b_4: { quem: "eu", texto: "Sumi por quê?", proxima: "c6_5b_5" },
    c6_5b_5: { tipo: "narracao", texto: "Ele não responde. Ele pega o cavalo branco do tabuleiro e fica segurando na mão fechada, apertado, e não devolve para o lugar.", proxima: "c6_29" },
    c6_5c_1: { quem: "eu", texto: "Quem batia em você em casa?", proxima: "c6_5c_2" },
    c6_5c_2: { tipo: "narracao", texto: "O Ren fica parado. O vento passa entre os ferros enferrujados das colunas e faz um barulho baixo, de assobio.", proxima: "c6_5c_3" },
    c6_5c_3: { quem: "ren", texto: "Meu pai não bate em quem ganha.", proxima: "c6_5c_4" },
    c6_5c_4: { tipo: "pensamento", texto: "Ele não respondeu. Ou respondeu tudo. O pai dele bate em quem perde. E ele aprendeu a nunca mais perder.", proxima: "c6_29" },

    // (todas as opções continuam aqui)
    c6_29: { quem: "ren", texto: "Meu pai só olha pra quem ganha. Ele não olhava pra mim. Agora olha.", proxima: "c6_30" },
    c6_30: { tipo: "narracao", texto: "Ele fala isso olhando para a cidade lá embaixo, para as luzes, como quem olha para uma coisa que comprou.", proxima: "c6_31" },
    c6_31: { quem: "eu", texto: "E é por isso? Você compra prédio, demite o Victor, prende a moto do Ryuji, quebra o braço do Takeo, tudo pro seu pai olhar pra você?", proxima: "c6_32" },
    c6_32: { tipo: "narracao", texto: "Quando ela fala o nome do Takeo, a cara dele faz de novo aquilo do fliperama. A janela fechando por dentro. Um frio que não combina com a voz baixa.", proxima: "c6_33" },
    c6_33: { quem: "ren", texto: "Não.", proxima: "c6_34" },
    c6_34: { quem: "eu", texto: "Então por quê?", proxima: "c6_35" },
    c6_35: { tipo: "narracao", texto: "Silêncio. Ele coloca o cavalo branco de volta no tabuleiro, fora da casa dele, torto, de lado. Depois levanta da cadeira.", proxima: "c6_36" },
    c6_36: { quem: "ren", texto: "Essa parte não.", proxima: "c6_37" },
    c6_37: { tipo: "pensamento", texto: "Ele me trouxe até o oitavo andar de um prédio abandonado pra me contar que me conhece desde criança, que apanhava, que o pai não olhava pra ele. E deixou de fora tudo que importa. Onde. Por que eu sumi. Por que o Kaito. Por que o Takeo.", proxima: "c6_38" },
    c6_38: { tipo: "pensamento", texto: "Ele me deu as peças de canto. Guardou o rei.", proxima: "c6_39" },
    c6_39: { tipo: "narracao", texto: "Ela anda até ele. Para do lado do tabuleiro, a menos de um metro, mais perto do que ele já deixou alguém chegar, e ele não recua.", proxima: "c6_40" },
    c6_40: { quem: "eu", texto: "Sabe o que dizem, Ren? Que o sonho do oprimido é ser o opressor.", proxima: "c6_40b" },
    c6_40b: { tipo: "narracao", texto: "E o Ren sorri. Não é o sorriso educado da sala de aula, nem o riso curto do tabuleiro, é um sorriso lento, de canto, de quem ouviu uma coisa que já sabia e gostou de ouvir dita em voz alta.", proxima: "c6_40c" },
    c6_40c: { tipo: "pensamento", texto: "Ele sorriu. Eu falei a pior coisa que dava pra falar dele, e ele sorriu como se eu tivesse acertado a resposta de uma prova.", proxima: "c6_40d" },
    c6_40d: { quem: "eu", texto: "Eu sinto muito por aquele menino de óculos, de verdade. Ninguém devia apanhar na escola e depois apanhar de novo em casa.", proxima: "c6_40e" },
    c6_40e: { quem: "eu", texto: "Mas ele não existe mais. Quem existe é você.", proxima: "c6_40f" },
    c6_40f: { tipo: "narracao", texto: "O sorriso dele some, devagar, como uma luz que alguém vai abaixando.", proxima: "c6_40g" },
    c6_40g: { quem: "eu", texto: "E é você que escolhe quem você quer ser. Não o seu pai, não os meninos que te batiam, não aquele menino de óculos. Você.", proxima: "c6_41" },
    c6_41: { quem: "eu", texto: "E até agora você escolheu ser o cara que manda doze pra cercar uma menina num fliperama e depois quebra a mão de um deles porque encostou nela.", proxima: "c6_42" },
    c6_42: { tipo: "narracao", texto: "Os olhos dele mexem um pouco quando ela fala da mão. Só isso. Ele não nega.", proxima: "c6_43" },
    c6_43: { quem: "eu", texto: "Então presta atenção, porque eu só vou falar uma vez.", proxima: "c6_esc6" },

    // ▶ ESCOLHA 6 — O aviso
    c6_esc6: { escolhas: [
      { texto: "A. “Se você continuar, eu derrubo tudo. Você, a Sakuma, a Midorata, o prédio. Tijolo por tijolo.”", proxima: "c6_6a_1", pontos: { desvio: 2 }, flags: ["Derrubo_tudo"] },
      { texto: "B. Pegar o rei preto do tabuleiro e fechar a mão. “Se você continuar, eu derrubo tudo. Começando por esse.”", proxima: "c6_6b_1", pontos: { desvio: 2 }, flags: ["Rei_na_mao"] },
      { texto: "C. Colocar a mão numa coluna de concreto e apertar até rachar. “Se você continuar, eu derrubo tudo. E eu não estou falando de xadrez.”", proxima: "c6_6c_1", pontos: { desvio: 3 }, flags: ["Coluna_rachada"] }
    ]},
    c6_6a_1: { quem: "eu", texto: "Se você continuar, eu derrubo tudo. Você, a Sakuma, a Midorata, esse prédio. Tijolo por tijolo. Do jeito que você fez com eles, só que mais rápido.", proxima: "c6_6a_2" },
    c6_6a_2: { tipo: "narracao", texto: "Ela fala isso devagar, com a voz baixa, sem levantar, olhando nos olhos dele. O Ren fica imóvel, e ela não consegue saber se ele está com medo ou se está gostando.", proxima: "c6_44" },
    c6_6b_1: { tipo: "narracao", texto: "Ela pega o rei preto do tabuleiro. Fecha a mão em volta dele, devagar, e aperta. A madeira estala e racha, e quando ela abre a mão, o rei está partido em dois, certinho, de cima a baixo.", proxima: "c6_6b_2" },
    c6_6b_2: { quem: "eu", texto: "Se você continuar, eu derrubo tudo. Começando por esse.", proxima: "c6_6b_3" },
    c6_6b_3: { tipo: "narracao", texto: "Ela coloca as duas metades do rei no tabuleiro, uma de cada lado. O Ren olha para as metades muito tempo, e não toca nelas.", proxima: "c6_44" },
    c6_6c_1: { tipo: "narracao", efeito: "tremor", texto: "Ela coloca a mão aberta numa das colunas de concreto, do lado dela, e empurra. Uma rachadura sobe pela coluna, do lugar da mão até o teto que não existe, e um pouco de pó cai no chão entre os dois.", proxima: "c6_6c_2" },
    c6_6c_2: { quem: "eu", texto: "Se você continuar, eu derrubo tudo. E eu não estou falando de xadrez.", proxima: "c6_6c_3" },
    c6_6c_3: { tipo: "narracao", texto: "O Ren olha para a rachadura. Depois para a mão dela, limpa, sem um arranhão. Ele não dá um passo para trás. Ele já viu a barra quebrar na fábrica, ele já viu a bola virar pó. Mas é a primeira vez que ele vê o prédio do pai dele rachar.", proxima: "c6_44" },

    // (todas as opções continuam aqui)
    c6_44: { quem: "ren", texto: "Eu sei.", proxima: "c6_45" },
    c6_45: { quem: "eu", texto: "Sabe o quê?", proxima: "c6_46" },
    c6_46: { quem: "ren", texto: "Que você derruba.", proxima: "c6_47" },
    c6_47: { tipo: "narracao", texto: "Ele fala isso sem medo nenhum, e é pior do que se tivesse medo. É como se fosse exatamente a resposta que ele queria ouvir. Como se ela tivesse feito a jogada que ele esperava.", proxima: "c6_48" },
    c6_48: { quem: "ren", texto: "Vai pra casa. Eu fico.", proxima: "c6_49" },
    c6_49: { tipo: "narracao", texto: "Ele senta de novo na cadeira velha, de frente para o tabuleiro, e começa a arrumar as peças, uma por uma, como se ela já tivesse ido embora. Não olha mais para ela.", proxima: "c6_50" },
    c6_50: { tipo: "narracao", texto: "Ela desce os oito andares no escuro, segurando na parede, contando os degraus. Lá embaixo, quando passa pelo buraco do tapume, olha para cima uma vez. No último andar, contra o céu, tem a silhueta de alguém sentado, imóvel, olhando para baixo.", proxima: "c7_01" },

    /* =================== CENA 7 — O CAVALO ESPECIAL =================== */
    // Cenário: quarto da SN, segunda, quase meia-noite. Música: caixinha de música, distorcida.
    c7_01: { tipo: "narracao", cenario: "quarto-sn-noite", roupa: null, sprite: null, transicao: "tempo", legenda: "Segunda, 23h40 — Cena 7", texto: "Em casa, ela tranca a porta, apaga a luz e deita sem trocar de roupa, de moletom e tênis, em cima da coberta.", proxima: "c7_02" },
    c7_02: { tipo: "pensamento", texto: "Óculos grandes, de armação marrom. Um tabuleiro dobrado embaixo do braço. Um menino sozinho, com um machucado no braço, que ninguém perguntava de onde vinha.", proxima: "c7_03" },
    c7_03: { tipo: "pensamento", texto: "E uma menina que mexia as peças errado e dizia que o cavalo dela era especial.", proxima: "c7_04" },
    c7_04: { tipo: "pensamento", texto: "Só pedaços. Eu tinha uns cinco anos. Eu tenho vinte e oito por dentro, eu lembro do nome da minha professora do pré, do cheiro do sabonete da minha avó. Por que disso eu só tenho pedaços?", proxima: "c7_05" },
    c7_05: { tipo: "narracao", texto: "Ela fecha os olhos. O cansaço pesa. E, no meio do escuro, quase dormindo, uma coisa vem.", proxima: "c7_06" },
    c7_06: { tipo: "narracao", efeito: "flashback", texto: "Um pedaço. Pequeno, desfocado, como uma foto molhada. Um par de óculos enormes, de armação marrom, refletindo o sol. Uma mão pequena, a dela, segurando um cavalo de madeira branco e fazendo ele andar reto, pulando, rindo.", proxima: "c7_07" },
    c7_07: { tipo: "narracao", efeito: "flashback", texto: "E uma voz de mulher, de longe, chamando o nome dela. Uma voz que ela conhece e não consegue saber de onde. Uma voz com pressa.", proxima: "c7_08" },
    c7_08: { tipo: "narracao", efeito: "eco", texto: "“Vem, a gente tem que ir. Agora. Larga isso aí.”", proxima: "c7_09" },
    c7_09: { tipo: "narracao", texto: "Some. Ela abre os olhos no escuro, com o coração batendo rápido. O teto do quarto. O barulho da geladeira na cozinha.", proxima: "c7_10" },
    c7_10: { tipo: "pensamento", texto: "Uma mulher. Com pressa. Me tirando de lá.", proxima: "c7_11" },
    c7_11: { tipo: "pensamento", texto: "Quem era?", proxima: "c7_12" },
    c7_12: { tipo: "narracao", texto: "O celular vibra em cima da mesinha. Ela pega, com a mão tremendo um pouco. É o número das fotos.", proxima: "c7_13" },
    c7_13: { quem: "mensagem", rotulo: "Mensagem — Ren", texto: "Chegou?", proxima: "c7_14" },
    c7_14: { tipo: "pensamento", texto: "Ele quer saber se eu cheguei em casa. O cara que me cercou com doze num fliperama quer saber se eu cheguei bem.", proxima: "c7_esc7" },

    // ▶ ESCOLHA 7 — Responder?
    c7_esc7: { escolhas: [
      { texto: "A. Responder: “Cheguei.” E mais nada.", proxima: "c7_7a_1", pontos: { desvio: 1 }, flags: ["Respondeu_cheguei"] },
      { texto: "B. Responder: “O meu cavalo ainda é especial.”", proxima: "c7_7b_1", pontos: { desvio: 2 }, flags: ["Cavalo_especial"] },
      { texto: "C. Não responder. Virar o celular para baixo e dormir.", proxima: "c7_7c_1", pontos: {}, flags: ["Nao_respondeu_chegou"] }
    ]},
    c7_7a_1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Cheguei.", proxima: "c7_7a_2" },
    c7_7a_2: { tipo: "narracao", texto: "Visualizado na hora. Ele não responde. Mas ela imagina ele lá no oitavo andar, no escuro, olhando para essa palavra na tela, e não consegue parar de imaginar.", proxima: "c7_15" },
    c7_7b_1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "O meu cavalo ainda é especial.", proxima: "c7_7b_2" },
    c7_7b_2: { tipo: "narracao", texto: "Visualizado na hora. Os três pontinhos aparecem, somem, aparecem de novo, e ficam lá por quase um minuto inteiro. Depois somem. Ele não manda nada.", proxima: "c7_7b_3" },
    c7_7b_3: { tipo: "pensamento", texto: "Ele escreveu alguma coisa e apagou. O Ren, que nunca fala nada além do necessário, escreveu um minuto inteiro e apagou.", proxima: "c7_15" },
    c7_7c_1: { tipo: "narracao", texto: "Ela vira o celular para baixo. A tela acende mais uma vez contra a mesinha, fazendo um risco de luz na madeira, e depois apaga para sempre.", proxima: "c7_7c_2" },
    c7_7c_2: { tipo: "pensamento", texto: "Ele vai ficar sem resposta. Igual eu fiquei sem resposta lá em cima.", proxima: "c7_15" },

    // (todas as opções continuam aqui)
    c7_15: { tipo: "narracao", texto: "Ela vira para o lado, de frente para a parede. Fecha os olhos de novo, tentando voltar para aquele pedaço de lembrança, para os óculos, para a voz da mulher. Não volta.", proxima: "c7_16" },
    c7_16: { tipo: "pensamento", texto: "Ele me contou uma parte. Eu vou descobrir o resto sozinha.", proxima: "c7_17" },
    c7_17: { tipo: "pensamento", texto: "E quando eu descobrir, ele vai ter que me explicar a parte que ele guardou.", proxima: "ep_fim" },

    // Fim do Capítulo 33 (crie a entrada "capitulo33" em dados/capitulos.js).
    ep_fim: { fim: "capitulo33" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 34 (anotações do roteiro)
 *  • O Ren contou POR PARTES, no oitavo andar do prédio abandonado do pai (desistiram no quinto andar):
 *      – eles se conheceram quando crianças, ela não lembra ("Eu lembro pelos dois");
 *      – óculos grandes de armação marrom, tabuleiro dobrado embaixo do braço;
 *      – apanhava na escola e em casa ("Meu pai não bate em quem ganha");
 *      – ela sentou do lado dele, mexeu nas peças errado ("o meu cavalo é especial"), não julgou;
 *      – ela voltou mais umas vezes, sempre no mesmo lugar, e depois sumiu;
 *      – "Meu pai só olha pra quem ganha. Agora olha."
 *    DEIXOU DE FORA: onde foi (praça do balanço), por que ela sumiu (a tia Sora), por que o Kaito, o Takeo.
 *  • A SN avisou: se ele continuar, ela derruba tudo (Derrubo_tudo / Rei_na_mao / Coluna_rachada).
 *    O Ren: "Eu sei. Que você derruba." Como se fosse a jogada que ele esperava.
 *  • FLASH: óculos marrons, cavalo branco andando reto, e uma voz de mulher com pressa:
 *    "Vem, a gente tem que ir. Agora. Larga isso aí." (É a tia. NÃO revelar ainda.)
 *  • Blake: duas piadas no mesmo dia; relatório de química (a primeira frase perfeita); "Quatrocentos e treze";
 *    a febre de 39 do Kaito aos doze; ele reparou que ela finge cansaço na corrida.
 *  • SEGREDOS: o Ren matou o Takeo na primeira linha do tempo · a tia · o motivo de ele atacar a gangue do Kaito.
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 No laboratório · 2 No banco · 3 Na corrida · Rota (1 por rota) · 4 Descer? · 5 O que perguntar
 *  6 O aviso · 7 Responder?
 *
 * FLAGS NOVAS
 *  Nuvem_poltrona · Misturou_lab · Cara_gemeos · Devagar_certo · Ganhou_Kaito · Metade_sanduiche
 *  Folego_familia · Esperou_curva · Fingindo_Blake · Ficou_lojinha_tarde · Aula_caldo · Protocolo_parede
 *  Leram_juntos · Vozes_Takeo · Emprestou_quadrinho · Soco_fraco · Faixa_Blake · Ver_Blake
 *  Entregou_inscricao · Lembra_358 · Tenta_de_novo · Aprendeu_remendo · Pagou_suco · Bonito_consertando
 *  Desceu_moletom · Cinco_minutos · Bilhete_maior · Perguntou_onde · Perguntou_depois · Perguntou_casa
 *  Derrubo_tudo · Rei_na_mao · Coluna_rachada · Respondeu_cheguei · Cavalo_especial · Nao_respondeu_chegou
 */