/*
 * =====================================================================
 *  CAPÍTULO 32 — Sábado do caldo
 *  Sábado e domingo, logo depois do Capítulo 31.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Bloco de rota grande no sábado à noite, depois da festa.
 *
 *  O QUE ACONTECE
 *    • Sábado de manhã: a Mio tem uma ideia. "Se a lojinha está morrendo, a gente faz barulho."
 *      Festa do caldo na calçada + abaixo-assinado para a prefeitura. A Hana faz a planilha.
 *    • A tarde inteira na lojinha: as meninas e os meninos juntos. A Reina quer pagar tudo e o Kaito
 *      não aceita. A Akane traz um teclado. A Hana canta. O Blake chega com a Sayuri. A Mio aguenta.
 *    • A vizinhança aparece. Cliente de vinte anos. O tio se emociona.
 *    • PISTA: o tio olha para a SN e acha que já viu ela pequena, ali, há muito tempo. Ela não lembra.
 *      O Kaito ouve. Não fala nada. (Eles se conheceram quando crianças. Ela não lembra. NÃO revelar.)
 *    • Um carro preto passa devagar. Não para.
 *    • Bloco de rota: o menino da rota depois da festa.
 *    • Domingo: na casa da Hana, contando assinaturas. A Hana descobre que as compras da Sakuma
 *      começaram todas depois de uma mesma semana: a do capacete vermelho.
 *    • Gancho: mensagem do mesmo número das fotos de antes. "287. Bonito."
 *
 *  REGRA DE CONTINUIDADE
 *    • Da outra vida, dos meninos, a SN só conheceu o Takeo. O Kaito ela conheceu só quando criança,
 *      e não lembra. Nada de "na outra vida o Kaito...".
 *
 *  SEGREDOS (NÃO REVELAR)
 *    • O Ren matou o Takeo na primeira linha do tempo. • A infância do Ren com a SN. • Por que ele faz isso.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Mio, Hana, Reina, Akane, Sayuri, Kaito, Blake, Ryuji, Victor, Takeo, Tio do Kaito, Mãe, Mãe do Victor.
 *    Sem nome / rótulo: Senhora do bairro, Senhor do bairro.
 *
 *  CENÁRIOS
 *    Quarto da SN → "quarto-sn" · Cozinha da SN → "apartamento" · Lojinha / calçada → "beco-mercado"
 *    Casa da Hana → "apartamento" · Rua → "saida-colegio"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Rota_*, Aviso_lojinha_grupo, Contou_fliperama_Kaito, Feijoada_dupla, Leva_Takeo_casa, Mio_sabe_Sayuri.
 *
 *  Crie a entrada "capitulo32" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo32", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — FAZER BARULHO =================== */
    // Cenário: cozinha da SN, sábado de manhã (usa "apartamento"). Música: rádio baixinho.
    c1_01: { roupa: "fora", tipo: "narracao", cenario: "cozinha", transicao: "tempo", legenda: "Sábado, 8h20 — Cena 1", sprite: "mae", texto: "Sábado. A mãe chegou do plantão às sete. Está de pijama de hospital ainda, sentada na cozinha, com a caneca de bolinha, olhando para o nada do jeito de quem trabalhou doze horas.", proxima: "c1_02" },
    c1_02: { quem: "mae", texto: "Você comeu o bolinho?", proxima: "c1_03" },
    c1_03: { quem: "eu", texto: "Comi. Em pé. Na frente da geladeira.", proxima: "c1_04" },
    c1_04: { quem: "mae", texto: "Que bom. Eu como assim também. Bolinho de frango em pé é outra coisa.", proxima: "c1_05" },
    c1_05: { tipo: "narracao", texto: "Ela toma um gole de café. Olha para a filha por cima da caneca. Olhar de enfermeira. Daqueles que acham febre sem termômetro.", proxima: "c1_06" },
    c1_06: { quem: "mae", texto: "Você está com cara de quem resolveu uma coisa e criou outra.", proxima: "c1_07" },
    c1_07: { quem: "eu", texto: "...Mais ou menos isso.", proxima: "c1_08" },
    c1_08: { quem: "mae", texto: "Tá. Eu vou dormir até as três. Se for pra sair, deixa bilhete. Se for pra fazer besteira, deixa bilhete maior.", proxima: "c1_09" },
    c1_09: { tipo: "narracao", texto: "Ela dá um beijo na cabeça da filha e vai para o quarto arrastando o chinelo. A SN fica sozinha na cozinha. O celular vibra. Muitas vezes. O grupo das meninas.", proxima: "c1_10" },
    c1_10: { quem: "mensagem", rotulo: "Mensagem — Mio (no grupo das meninas)", texto: "REUNIÃO DE EMERGÊNCIA. Eu não dormi. Eu tive uma ideia às quatro da manhã. Ideia de madrugada é a melhor ideia. Eu sou a Mio da Madrugada. É oficial agora.", proxima: "c1_11" },
    c1_11: { quem: "mensagem", rotulo: "Mensagem — Mio (no grupo das meninas)", texto: "A lojinha do tio do Kaito. Vinte e dois anos. Vai fechar em vinte e nove dias. Ninguém fala nada. Ninguém sabe. Se a lojinha está morrendo em silêncio, a gente faz barulho.", proxima: "c1_12" },
    c1_12: { quem: "mensagem", rotulo: "Mensagem — Hana (no grupo das meninas)", texto: "Barulho de que tipo. Eu preciso saber o tipo para fazer a planilha.", proxima: "c1_13" },
    c1_13: { quem: "mensagem", rotulo: "Mensagem — Reina (no grupo das meninas)", texto: "Eu posso pagar o aluguel. Eu tenho cartão. Meus pais nem olham a fatura.", proxima: "c1_14" },
    c1_14: { quem: "mensagem", rotulo: "Mensagem — Akane (no grupo das meninas)", texto: "Reina, não é aluguel, é despejo. O prédio foi vendido. Não tem pra quem pagar.", proxima: "c1_15" },
    c1_15: { quem: "mensagem", rotulo: "Mensagem — Reina (no grupo das meninas)", texto: "Então eu compro o prédio.", proxima: "c1_16" },
    c1_16: { quem: "mensagem", rotulo: "Mensagem — Akane (no grupo das meninas)", texto: "REINA.", proxima: "c1_17" },
    c1_17: { tipo: "pensamento", texto: "Elas estão acordadas às oito da manhã de sábado. Por uma lojinha de lámen que a Reina e a Akane nem conhecem direito. Por causa do Kaito. Por minha causa.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — Que barulho fazer
    c1_esc1: { escolhas: [
      { texto: "A. “Festa do caldo. Hoje. Na calçada. Todo mundo que já comeu lá vem comer de novo.”", proxima: "c1_1a_1", pontos: { mio: 1, kaito: 1 }, flags: ["Ideia_festa"] },
      { texto: "B. “Abaixo-assinado. Pra prefeitura. Com nome, endereço e quantos anos a pessoa come lá.”", proxima: "c1_1b_1", pontos: { hana: 2 }, flags: ["Ideia_abaixo"] },
      { texto: "C. “As duas coisas. Festa pra trazer gente. Abaixo-assinado pra gente que vier.”", proxima: "c1_1c_1", pontos: { mio: 1, hana: 1 }, flags: ["Ideia_duas"] }
    ]},
    c1_1a_1: { quem: "mensagem", rotulo: "Mensagem — Mio (no grupo das meninas)", texto: "FESTA DO CALDO. Eu amei. Eu vou narrar a festa inteira como se fosse rádio.", proxima: "c1_1a_2" },
    c1_1a_2: { quem: "mensagem", rotulo: "Mensagem — Hana (no grupo das meninas)", texto: "Festa sem registro é só gente comendo. Eu vou levar uma prancheta. Quem comer, assina.", proxima: "c1_18" },
    c1_1b_1: { quem: "mensagem", rotulo: "Mensagem — Hana (no grupo das meninas)", texto: "Eu estou emocionada. Abaixo-assinado é uma planilha que anda.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "mensagem", rotulo: "Mensagem — Mio (no grupo das meninas)", texto: "E pra ter gente pra assinar, precisa de gente. E pra ter gente precisa de comida. Então é festa. Decidido.", proxima: "c1_18" },
    c1_1c_1: { quem: "mensagem", rotulo: "Mensagem — Akane (no grupo das meninas)", texto: "Isso. Festa traz gente, prancheta segura gente. Eu levo o teclado.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "mensagem", rotulo: "Mensagem — Mio (no grupo das meninas)", texto: "A SN pensou igual uma diretora de rádio. Promovida.", proxima: "c1_18" },

    // (todas as opções continuam aqui)
    c1_18: { quem: "mensagem", rotulo: "Mensagem — Reina (no grupo das meninas)", texto: "Então eu pago a festa. Isso pode? Pagar a festa pode?", proxima: "c1_19" },
    c1_19: { quem: "mensagem", rotulo: "Mensagem — Akane (no grupo das meninas)", texto: "Pergunta pro Kaito. Ele vai dizer não.", proxima: "c1_20" },
    c1_20: { tipo: "narracao", texto: "A SN abre o outro grupo. O da gangue, onde o Ryuji enfiou ela sem perguntar.", proxima: "c1_cam1" },
    c1_cam1: { caminhos: [
      { flag: "Contou_fliperama_Kaito", proxima: "c1_21" },
      { flag: "Aviso_lojinha_grupo", proxima: "c1_como" }
    ], proxima: "c1_21" },
    c1_como: { tipo: "narracao", texto: "Lá em cima, a última mensagem de ontem. A do Kaito. “...Como você sabe?” Sem resposta. Pendurada ali desde as sete da manhã de sexta.", proxima: "c1_como2" },
    c1_como2: { tipo: "pensamento", texto: "Eu não vou responder isso por mensagem. Nem hoje. Hoje é dia de fazer barulho.", proxima: "c1_21" },
    c1_21: { quem: "mensagem", rotulo: "Mensagem — SN (no grupo da gangue)", texto: "Hoje, quatro da tarde. Festa do caldo na calçada da lojinha. As meninas estão vindo. Ninguém pergunta, ninguém reclama. Tio, prepara a panela grande.", proxima: "c1_22" },
    c1_22: { tipo: "narracao", texto: "Silêncio de dois minutos. Depois, uma enxurrada.", proxima: "c1_23" },
    c1_23: { quem: "mensagem", rotulo: "Mensagem — Ryuji (no grupo da gangue)", texto: "FESTA. Eu levo a Relâmpago. Ela vai ser a atração. As pessoas vão tirar foto. Uma moto que saiu da prisão.", proxima: "c1_24" },
    c1_24: { quem: "mensagem", rotulo: "Mensagem — Victor (no grupo da gangue)", texto: "Meninas vindo. Eu vou de camisa social. Serviço social exige roupa social.", proxima: "c1_cam_feij" },
    c1_cam_feij: { caminhos: [
      { flag: "Feijoada_dupla", proxima: "c1_feij" }
    ], proxima: "c1_25" },
    c1_feij: { quem: "mensagem", rotulo: "Mensagem — Victor (no grupo da gangue)", texto: "E a minha mãe disse que a feijoada de aniversário da doca vai ser na festa. Ela fez uma panela do tamanho de uma criança. SN, você é a convidada de honra duas vezes.", proxima: "c1_25" },
    c1_25: { quem: "mensagem", rotulo: "Mensagem — Blake (no grupo da gangue)", texto: "Levo mesas.", proxima: "c1_26" },
    c1_26: { quem: "mensagem", rotulo: "Mensagem — Takeo (no grupo da gangue)", texto: "Eu só tenho um braço, mas eu entrego panfleto com ele. A minha avó vai fazer os panfletos. Ela tem impressora.", proxima: "c1_27" },
    c1_27: { tipo: "narracao", texto: "E por último, depois de cinco minutos inteiros.", proxima: "c1_28" },
    c1_28: { quem: "mensagem", rotulo: "Mensagem — Kaito (no grupo da gangue)", texto: "O tio está chorando na frente da panela grande. Ele mandou dizer que não está chorando. Quatro horas.", proxima: "c2_01" },

    /* =================== CENA 2 — MONTANDO =================== */
    // Cenário: calçada da lojinha, sábado à tarde (usa "beco-mercado"). Música: alegre, bagunçada.
    c2_01: { roupa: "fora", tipo: "narracao", cenario: "frente-lamen", transicao: "tempo", legenda: "Sábado, 14h — Cena 2", sprite: null, texto: "Duas da tarde. A calçada da lojinha. O Blake chega primeiro, com três mesas dobráveis nas costas. Ele não fala nada. Ele monta as três em fila, reta, perfeita, e senta no meio-fio esperando ordem.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", texto: "A Hana chega em segundo. Com uma prancheta, quatro canetas, um rolo de durex e uma pasta com folhas impressas. Na primeira folha, em letra grande: “ABAIXO-ASSINADO PELA PERMANÊNCIA DA LOJINHA DE LÁMEN DA ESQUINA (22 ANOS)”.", proxima: "c2_03" },
    c2_03: { quem: "hana", sprite: "hana", texto: "Colunas: nome, endereço, telefone, há quantos anos come aqui, prato favorito. O prato favorito não serve pra prefeitura. Serve pra mim.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", sprite: "takeo:machucado", texto: "O Takeo chega com o braço na tipoia e uma sacola cheia de panfletos. Feitos pela avó dele. Cada um tem uma tigela desenhada com fumacinha. São uns duzentos. Todos diferentes.", proxima: "c2_05" },
    c2_05: { quem: "takeo", sprite: "takeo:machucado", texto: "Ela fez a noite inteira. Ela disse que se o neto dela apanhou por causa dessa turma, essa turma vai ter panfleto bonito.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", sprite: "reina", texto: "A Reina chega de carro. De motorista. Ela desce com quatro sacolas de supermercado de cada lado: copo descartável, guardanapo, colher, toalha de mesa xadrez, um varal de bandeirinhas e um balão de hélio em forma de estrela que ninguém pediu.", proxima: "c2_07" },
    c2_07: { quem: "reina", texto: "Eu não paguei nada. Isso tudo eu já tinha em casa.", proxima: "c2_08" },
    c2_08: { quem: "akane", texto: "Você tinha um balão de estrela em casa.", proxima: "c2_09" },
    c2_09: { quem: "reina", texto: "Eu tenho muitas coisas em casa, Akane.", proxima: "c2_10" },
    c2_10: { tipo: "narracao", sprite: "kaito", texto: "O Kaito sai da lojinha de avental. Vê as sacolas. Vê o balão. Vê o motorista da Reina parado do lado do carro. Fecha a cara.", proxima: "c2_11" },
    c2_11: { quem: "kaito", texto: "A gente não precisa de esmola.", proxima: "c2_12" },
    c2_12: { tipo: "narracao", texto: "A Reina fica vermelha. Do pescoço até a testa. Ela abre a boca. Fecha. A calçada inteira fica em silêncio. Até o Blake para de olhar para o nada.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — Kaito e Reina
    c2_esc2: { escolhas: [
      { texto: "A. “Não é esmola. É uma amiga que trouxe toalha. Pega a toalha, Kaito.”", proxima: "c2_2a_1", pontos: { kaito: 1 }, flags: ["Toalha_Kaito"] },
      { texto: "B. Puxar o Kaito pelo avental pra dentro da lojinha. Falar baixo. Lá dentro.", proxima: "c2_2b_1", pontos: { kaito: 2 }, flags: ["Avental_Kaito"] },
      { texto: "C. “Reina, ele tem razão numa coisa: o balão é demais.” E soltar o balão pro céu.", proxima: "c2_2c_1", pontos: {}, flags: ["Soltou_balao"] }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "O Kaito olha para ela. Depois para a Reina, vermelha, segurando as sacolas como se estivesse com vergonha de ter mãos.", proxima: "c2_2a_2" },
    c2_2a_2: { tipo: "narracao", texto: "Ele estende a mão. A Reina entrega a toalha xadrez. Ele fica segurando a toalha um tempo.", proxima: "c2_2a_3" },
    c2_2a_3: { quem: "kaito", texto: "...Obrigado. A toalha é bonita.", proxima: "c2_2a_4" },
    c2_2a_4: { quem: "reina", texto: "Eu sei. Eu tenho bom gosto. Isso eu não comprei, isso é de nascença.", proxima: "c2_13" },
    c2_2b_1: { tipo: "narracao", texto: "Ela pega o avental dele pelo nó das costas e puxa. Ele vai. Ele sempre vai quando ela puxa. Lá dentro, do lado da panela grande.", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "eu", texto: "Ela não sabe fazer as coisas de outro jeito. Ela tem dinheiro e não tem pai nem mãe por perto. Ela aprendeu que gostar é trazer sacola.", proxima: "c2_2b_3" },
    c2_2b_3: { tipo: "narracao", texto: "O Kaito fica quieto. Olha pela porta. A Reina lá fora, arrumando as bandeirinhas sozinha, com o queixo alto, os olhos brilhando.", proxima: "c2_2b_4" },
    c2_2b_4: { quem: "kaito", texto: "...Eu falei igual o meu pai falava. Quando alguém ajudava a gente.", proxima: "c2_2b_5" },
    c2_2b_5: { tipo: "narracao", texto: "Ele sai. Vai até a Reina. Pega a outra ponta do varal de bandeirinhas. Os dois prendem juntos, sem falar nada. É o jeito dele de pedir desculpa.", proxima: "c2_13" },
    c2_2c_1: { tipo: "narracao", texto: "Ela pega a fita do balão de estrela. Olha para a Reina. Olha para o Kaito. E solta.", proxima: "c2_2c_2" },
    c2_2c_2: { tipo: "narracao", texto: "A estrela sobe. Devagar. Todo mundo para e fica olhando. A Reina com a boca aberta. O Kaito com a boca aberta. A estrela passa pelo fio do poste, quase engancha, desvia, e vai embora pro céu de sábado.", proxima: "c2_2c_3" },
    c2_2c_3: { quem: "reina", texto: "...Esse balão custou...", proxima: "c2_2c_4" },
    c2_2c_4: { quem: "eu", texto: "Você disse que já tinha em casa.", proxima: "c2_2c_5" },
    c2_2c_5: { tipo: "narracao", texto: "A Reina começa a rir. Aquele riso que ela tenta segurar e não consegue. O Kaito ri também, pelo nariz. A briga acabou. Foi pro céu com a estrela.", proxima: "c2_13" },

    // (todas as opções continuam aqui)
    c2_13: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji chega na Relâmpago, buzinando desde a esquina. Ele estaciona torto bem na frente da lojinha. Cola uma folha no tanque: “EU FUI PRESA INJUSTAMENTE. TIRE FOTO COMIGO. R$ 0,00.”", proxima: "c2_14" },
    c2_14: { tipo: "narracao", sprite: "victor", texto: "O Victor chega de camisa social branca. Amassada. Com dois botões a menos. Com a manga dobrada. E um pirulito.", proxima: "c2_15" },
    c2_15: { quem: "victor", texto: "Boa tarde, senhoritas. Akane, gatinha. Hana, gatinha. Reina, gatinha cara. Mio...", proxima: "c2_16" },
    c2_16: { tipo: "narracao", texto: "A Mio ainda não chegou. O Victor olha em volta. Depois olha para a SN. Faz uma reverência de garçom.", proxima: "c2_17" },
    c2_17: { quem: "victor", texto: "E a convidada de honra.", proxima: "c2_18" },
    c2_18: { tipo: "narracao", sprite: "mio", texto: "A Mio chega às três e meia. Com o rabo de cavalo com o elástico de morango, uma caixinha de som pendurada no pescoço e um microfone de brinquedo, rosa, que acende quando a pessoa fala.", proxima: "c2_19" },
    c2_19: { quem: "mio", texto: "Boa tarde, ouvintes da calçada! Aqui é a Mio da Madrugada, só que de tarde, porque a lojinha fecha às dez.", proxima: "c2_20" },
    c2_20: { tipo: "narracao", texto: "Ela para de falar. O microfone apaga. Ela está olhando para a esquina.", proxima: "c2_21" },
    c2_21: { tipo: "narracao", sprite: "blake", texto: "O Blake está na esquina. Ele foi buscar mais cadeiras. Ele está voltando com duas cadeiras de plástico numa mão. E, do lado dele, segurando a outra mão, a Sayuri.", proxima: "c2_22" },
    c2_22: { tipo: "pensamento", texto: "A Sayuri. Na festa da lojinha do Kaito. De mão dada com o Blake.", proxima: "c2_23" },
    c2_23: { tipo: "narracao", sprite: "mio", texto: "A Mio não fala nada. Ela fica parada com o microfone de brinquedo apagado na mão. Depois aperta o botão. Acende.", proxima: "c2_24" },
    c2_24: { quem: "mio", texto: "...E chegam mais convidados. Que bom. Quanto mais gente, mais assinatura.", proxima: "c2_25" },
    c2_25: { tipo: "narracao", texto: "A voz dela sai igualzinha. Só a SN percebe que tremeu no “bom”.", proxima: "c2_26" },
    c2_26: { tipo: "narracao", sprite: "sayuri", texto: "A Sayuri passa pela SN. Para. Fala baixo, sem olhar para ela.", proxima: "c2_27" },
    c2_27: { quem: "sayuri", texto: "Eu sei o que isso aqui é. Eu sei de quem é o prédio. Eu vim assinar. É o mínimo.", proxima: "c2_28" },
    c2_28: { tipo: "pensamento", texto: "Ela veio assinar. Contra o homem que compra o pai dela. Na frente de todo mundo. A pior dupla da escola tem coragem de um jeito esquisito.", proxima: "c2_29" },
    c2_29: { tipo: "pensamento", texto: "E ela veio de mão dada com o Blake. Na frente da Mio. Isso também é coragem de um jeito esquisito. Do jeito ruim.", proxima: "c2_esc3" },

    // ▶ ESCOLHA 3 — A Mio
    c2_esc3: { escolhas: [
      { texto: "A. Ir até a Mio. Pegar o microfone de brinquedo. “Agora, um momento musical. Hana, Akane, vem.” Tirar a atenção dela.", proxima: "c2_3a_1", pontos: { mio: 2, hana: 1 }, flags: ["Momento_musical"] },
      { texto: "B. Puxar a Mio pra cozinha da lojinha. Dar uma tigela de caldo e uma colher. Ficar do lado. Não falar do Blake.", proxima: "c2_3b_1", pontos: { mio: 3 }, flags: ["Caldo_Mio"] },
      { texto: "C. Ir até o Blake. Baixo. “Você sabe o que está fazendo?”", proxima: "c2_3c_1", pontos: { mio: 1, blake: 1 }, flags: ["Cobrou_Blake"] }
    ]},
    c2_3a_1: { tipo: "narracao", texto: "Ela pega o microfone de brinquedo da mão da Mio. Aperta. Acende.", proxima: "c2_3a_2" },
    c2_3a_2: { quem: "eu", texto: "Atenção, calçada. Agora, um momento musical oferecido pela Rádio Mio da Madrugada. Hana. Akane. Vem.", proxima: "c2_3a_3" },
    c2_3a_3: { tipo: "narracao", texto: "A Akane abre o teclado em cima de uma das mesas do Blake. A Hana fica vermelha, abraça a prancheta, olha para a SN com ódio puro. E canta.", proxima: "c2_3a_4" },
    c2_3a_4: { tipo: "narracao", texto: "“Depois da Chuva.” A mesma do karaokê. A calçada para. O tio sai de dentro da lojinha com a concha na mão. Duas senhoras que passavam param e ficam. A Mio, do lado da SN, respira fundo pela primeira vez desde a esquina.", proxima: "c2_3a_5" },
    c2_3a_5: { quem: "mio", sprite: "mio", texto: "...Você roubou o meu microfone pra me salvar.", proxima: "c2_3a_6" },
    c2_3a_6: { quem: "eu", texto: "Eu roubei o seu microfone porque ele acende. Salvar foi consequência.", proxima: "c2_30" },
    c2_3b_1: { tipo: "narracao", cenario: "loja-lamen", texto: "Ela pega a Mio pelo pulso e leva pra cozinha. Senta ela no banquinho do tio. Serve uma tigela de caldo. Coloca a colher na mão dela.", proxima: "c2_3b_2" },
    c2_3b_2: { tipo: "narracao", texto: "A Mio fica olhando para o caldo. Não chora. Toma uma colherada. Depois outra.", proxima: "c2_3b_3" },
    c2_3b_3: { quem: "mio", sprite: "mio", texto: "Tá muito bom. Que ódio. Eu queria que tivesse ruim pra eu ter motivo pra chorar.", proxima: "c2_3b_4" },
    c2_3b_4: { quem: "eu", texto: "Pode chorar sem motivo. Eu seguro a tigela.", proxima: "c2_3b_5" },
    c2_3b_5: { tipo: "narracao", texto: "A Mio ri. Um riso molhado. Ela não chora. Ela termina a tigela inteira. O tio passa, vê, enche de novo sem perguntar.", proxima: "c2_30" },
    c2_3c_1: { tipo: "narracao", sprite: "blake", texto: "Ela vai até o Blake, que está desdobrando as cadeiras de plástico. A Sayuri foi assinar com a Hana.", proxima: "c2_3c_2" },
    c2_3c_2: { quem: "eu", texto: "Você sabe o que está fazendo?", proxima: "c2_3c_3" },
    c2_3c_3: { tipo: "narracao", texto: "O Blake para. Uma cadeira meio aberta na mão. Ele olha para ela. Depois para a Mio, lá do outro lado, com o microfone apagado.", proxima: "c2_3c_4" },
    c2_3c_4: { quem: "blake", texto: "...Não.", proxima: "c2_3c_5" },
    c2_3c_5: { tipo: "narracao", texto: "Ele abre a cadeira. Coloca no chão. Não fala mais nada. Mas, pelo resto da tarde, ele não segura mais a mão da Sayuri.", proxima: "c2_30" },

    // (todas as opções continuam aqui)
    c2_30: { tipo: "narracao", cenario: "frente-lamen", sprite: null, texto: "Quatro horas. O tio coloca a panela grande no fogareiro da calçada. O cheiro sobe. E as pessoas começam a chegar.", proxima: "c3_01" },

    /* =================== CENA 3 — A FESTA =================== */
    // Cenário: calçada da lojinha, sábado, 16h às 20h (usa "beco-mercado"). Música: teclado da Akane.
    c3_01: { roupa: "fora", tipo: "narracao", transicao: "tempo", legenda: "Sábado, 16h — Cena 3", texto: "Primeiro, os vizinhos de porta. Depois os do quarteirão. Depois gente que ninguém conhece, que viu o panfleto da avó do Takeo grudado no poste da padaria.", proxima: "c3_02" },
    c3_02: { quem: "desconhecido", rotulo: "Senhora do bairro", texto: "Eu como aqui desde que abriu. Eu estava grávida do meu primeiro. Ele tem vinte e um anos agora. Ele cresceu nesse caldo.", proxima: "c3_03" },
    c3_03: { quem: "desconhecido", rotulo: "Senhor do bairro", texto: "O tio me deu fiado no ano que eu fiquei desempregado. Um ano inteiro. Ele nunca cobrou. Eu vou assinar com letra grande.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", sprite: "hana", texto: "A prancheta da Hana vai enchendo. Uma folha. Duas. Cinco. A coluna do prato favorito diz caldo, caldo, caldo, caldo com ovo, caldo sem cebolinha (riscado pelo tio, com uma observação: “não existe”).", proxima: "c3_05" },
    c3_05: { tipo: "narracao", sprite: "mio", texto: "A Mio narra tudo no microfone de brinquedo. Ela entrevista a senhora grávida de vinte e um anos atrás. Entrevista o Ryuji, que conta a história da prisão da Relâmpago como se fosse um filme de guerra. Entrevista um cachorro que passa.", proxima: "c3_06" },
    c3_06: { tipo: "narracao", sprite: "takeo:machucado", texto: "O Takeo entrega panfleto com uma mão só. Quando acaba a sacola, ele senta numa das cadeiras e a Reina aparece do lado com uma tigela de caldo e uma colher.", proxima: "c3_07" },
    c3_07: { quem: "reina", sprite: "reina", texto: "Você não consegue segurar a tigela e a colher ao mesmo tempo.", proxima: "c3_08" },
    c3_08: { quem: "takeo", sprite: "takeo:machucado", texto: "Consigo, sim. Eu apoio a tigela no gesso.", proxima: "c3_09" },
    c3_09: { quem: "reina", sprite: "reina", texto: "O gesso não é mesa, Takeo.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", texto: "Ela segura a tigela para ele. Ele come. Os dois brigando sobre a função do gesso. A briga limpa da Reina continua limpa. Ela não faz nada além de segurar a tigela.", proxima: "c3_cam_feij" },
    c3_cam_feij: { caminhos: [
      { flag: "Feijoada_dupla", proxima: "c3_feij" }
    ], proxima: "c3_11" },
    c3_feij: { tipo: "narracao", sprite: null, texto: "Às cinco, a mãe do Victor chega com a panela de feijoada do tamanho de uma criança. O Victor e o Blake carregam juntos. A calçada inteira vira uma festa de duas panelas.", proxima: "c3_feij2" },
    c3_feij2: { quem: "desconhecido", rotulo: "Mãe do Victor", texto: "Cadê a convidada de honra? A menina que fez o meu filho tirar sete em história?", proxima: "c3_feij3" },
    c3_feij3: { tipo: "narracao", texto: "Ela dá um prato pra SN, cheio até a borda. Com uma laranja em cima. E um beijo na bochecha que deixa marca de batom.", proxima: "c3_11" },
    c3_11: { tipo: "narracao", sprite: "tio_kaito", texto: "Às seis, o tio sai de trás da panela pela primeira vez. Ele anda pela calçada. Olha as mesas cheias. As pessoas assinando. A Akane tocando. A Hana conferindo endereço. A Mio narrando. Os meninos servindo.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", texto: "Ele tira o cigarro apagado da boca. Fica segurando entre os dedos. Não fala nada. Mas os olhos dele estão molhados.", proxima: "c3_13" },
    c3_13: { tipo: "narracao", texto: "E aí ele vê a SN. Ela está pegando tigela suja numa das mesas. Ele para na frente dela. Olha para ela. Diferente de antes. Como quem procura uma coisa num rosto.", proxima: "c3_14" },
    c3_14: { quem: "tio_kaito", texto: "Você... você já veio aqui antes? Pequena?", proxima: "c3_15" },
    c3_15: { quem: "eu", texto: "Aqui? Não. Acho que não. A primeira vez foi esse ano.", proxima: "c3_16" },
    c3_16: { quem: "tio_kaito", texto: "Hm. Eu tinha uma cliente pequenininha. Faz muito tempo. Ela vinha com alguém. Sentava ali no banquinho do canto e balançava as pernas porque não alcançava o chão.", proxima: "c3_17" },
    c3_17: { quem: "tio_kaito", texto: "Deve ser coisa de velho. Todo mundo baixinho parece aquela menina.", proxima: "c3_18" },
    c3_18: { tipo: "narracao", texto: "Ele ri. Volta para a panela. A SN fica parada com as tigelas sujas na mão.", proxima: "c3_19" },
    c3_19: { tipo: "pensamento", texto: "Eu não lembro. Eu não lembro dessa lojinha antes desse ano. Eu não lembro de banquinho.", proxima: "c3_20" },
    c3_20: { tipo: "narracao", sprite: "kaito", texto: "Atrás dela, na porta da lojinha, o Kaito. Ele ouviu. Ele está parado com uma pilha de tigelas limpas. Olhando para ela. Com uma cara que ela não sabe ler.", proxima: "c3_21" },
    c3_21: { tipo: "narracao", texto: "Ele não fala nada. Ele entrega as tigelas limpas para ela. Pega as sujas. Volta para dentro.", proxima: "c3_22" },
    c3_22: { tipo: "pensamento", texto: "Ele também ficou com cara de quem procura alguma coisa. Mas ele não procurou no meu rosto. Ele procurou no chão.", proxima: "c3_23" },

    // O carro
    c3_23: { tipo: "narracao", cenario: "frente-lamen-noite", sprite: null, transicao: "tempo", legenda: "Sábado, 19h40", texto: "Quase oito da noite. A festa ainda cheia. As bandeirinhas da Reina balançando. A Hana conta em voz alta: duzentas e oitenta e sete assinaturas.", proxima: "c3_24" },
    c3_24: { tipo: "narracao", texto: "Um carro preto vira a esquina. Devagar. Muito devagar. Vidro escuro. Ele passa na frente da lojinha a dez por hora.", proxima: "c3_25" },
    c3_25: { tipo: "narracao", texto: "Ninguém da festa percebe. A Akane tocando. A Mio rindo no microfone. O Ryuji tirando foto com uma criança em cima da Relâmpago.", proxima: "c3_26" },
    c3_26: { tipo: "narracao", texto: "A SN percebe. O Kaito, na porta, percebe. O Blake, do lado do fogareiro, percebe e endireita as costas.", proxima: "c3_27" },
    c3_27: { tipo: "narracao", texto: "O carro não para. O vidro não abaixa. Ele passa. Vira a outra esquina. Some.", proxima: "c3_28" },
    c3_28: { tipo: "pensamento", texto: "Ele está vendo. Ele viu as bandeirinhas. A prancheta. O tio com o olho molhado. Duzentas e oitenta e sete pessoas.", proxima: "c3_29" },
    c3_29: { tipo: "pensamento", texto: "Ótimo. Que veja. Foi pra isso que a gente fez barulho.", proxima: "c3_esc4" },

    // ▶ ESCOLHA 4 — Depois do carro
    c3_esc4: { escolhas: [
      { texto: "A. Pegar o microfone da Mio. “Mais uma rodada de caldo! Por conta da casa!” Alto. Pra rua inteira ouvir.", proxima: "c3_4a_1", pontos: { kaito: 1, mio: 1 }, flags: ["Rodada_caldo"] },
      { texto: "B. Ir até a esquina onde o carro sumiu. Ficar parada lá. De braços cruzados. Olhando.", proxima: "c3_4b_1", pontos: { desvio: 1 }, flags: ["Esquina_carro"] },
      { texto: "C. Não fazer nada. Voltar a recolher tigela. Ele quer que eu reaja. Eu não reajo.", proxima: "c3_4c_1", pontos: {}, flags: ["Nao_reagiu_carro"] }
    ]},
    c3_4a_1: { tipo: "narracao", texto: "Ela pega o microfone de brinquedo da Mio. Acende.", proxima: "c3_4a_2" },
    c3_4a_2: { quem: "eu", texto: "MAIS UMA RODADA DE CALDO! POR CONTA DA CASA!", proxima: "c3_4a_3" },
    c3_4a_3: { tipo: "narracao", texto: "A calçada grita junto. O tio, lá atrás, grita “Quem disse?”. A calçada grita mais. O tio serve. O barulho vai até a outra esquina. Até onde o carro sumiu.", proxima: "c3_30" },
    c3_4b_1: { tipo: "narracao", texto: "Ela vai até a esquina. Para no meio-fio. Cruza os braços. A rua vazia. As luzes de freio do carro preto lá longe, já duas quadras pra frente. Elas acendem. Uma vez. Como se ele tivesse visto ela no retrovisor.", proxima: "c3_4b_2" },
    c3_4b_2: { tipo: "narracao", texto: "Depois apagam. E o carro vai embora.", proxima: "c3_30" },
    c3_4c_1: { tipo: "narracao", texto: "Ela volta a recolher tigela. Uma. Duas. Empilha. Leva pra dentro. Lava. Não olha para a esquina nenhuma vez.", proxima: "c3_4c_2" },
    c3_4c_2: { tipo: "pensamento", texto: "Você quer que eu olhe. Eu não olho. Isso também é jogada.", proxima: "c3_30" },

    // (todas as opções continuam aqui)
    c3_30: { tipo: "narracao", transicao: "tempo", legenda: "Sábado, 21h", texto: "Nove da noite. A panela grande vazia. As bandeirinhas tortas. As meninas indo embora em grupo, a Reina oferecendo carona com o motorista pra todo mundo. A Mio vai junto. Antes de entrar no carro, ela abraça a SN. Forte. Por um tempo.", proxima: "c3_31" },
    c3_31: { quem: "mio", sprite: "mio", texto: "Foi a melhor transmissão da história da Rádio Mio da Madrugada. Mesmo com aquilo da esquina.", proxima: "c3_32" },
    c3_32: { tipo: "pensamento", texto: "Aquilo da esquina. Ela está falando do Blake e da Sayuri. Ela nem viu o carro.", proxima: "r_cam" },

    /* =================== ROTA — SÁBADO À NOITE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { roupa: "fora", tipo: "narracao", cenario: "loja-lamen-noite", transicao: "tempo", sprite: "kaito", texto: "Ela fica pra ajudar a fechar. O tio vai dormir cedo, cansado e feliz. O Kaito lava a panela grande no tanque dos fundos. Ela seca.", proxima: "rk_02" },
    rk_02: { quem: "kaito", texto: "Duzentas e oitenta e sete.", proxima: "rk_03" },
    rk_03: { quem: "eu", texto: "Duzentas e oitenta e sete.", proxima: "rk_04" },
    rk_04: { quem: "kaito", texto: "O tio nunca soube que tinha tanta gente. Ele achava que a lojinha era só ele, eu e a panela.", proxima: "rk_05" },
    rk_05: { tipo: "narracao", texto: "Ele para de esfregar. A água correndo. Ele olha para a parede dos fundos, onde tem uma foto velha, amarelada, presa com fita. O tio mais novo, de avental, na frente da lojinha. O Kaito pequeno do lado. Uns sete anos. Com a cara emburrada de sempre.", proxima: "rk_06" },
    rk_06: { quem: "kaito", texto: "O tio falou de uma menina hoje. Que sentava no banquinho do canto.", proxima: "rk_07" },
    rk_07: { quem: "eu", texto: "Eu ouvi. Ele confundiu. Eu nunca vim aqui pequena.", proxima: "rk_08" },
    rk_08: { tipo: "narracao", texto: "O Kaito não responde. Ele fecha a torneira. Fica olhando para a foto um tempo.", proxima: "rk_09" },
    rk_09: { quem: "kaito", texto: "...É. Ele confunde.", proxima: "rk_10" },
    rk_10: { tipo: "pensamento", texto: "Ele não acredita nisso. Eu ouvi na voz dele. Mas ele também não vai falar. Ele guarda as coisas. Igual guardou o boné.", proxima: "rk_esc" },

    // ▶ ESCOLHA — Rota Kaito
    rk_esc: { escolhas: [
      { texto: "A. “Você lembra de alguma coisa que eu não lembro, Kaito?”", proxima: "rk_a1", pontos: { kaito: 3 }, flags: ["Perguntou_lembranca_Kaito"] },
      { texto: "B. Responder a mensagem de ontem. Em voz alta. “Eu sei porque eu fui falar com ele.”", proxima: "rk_b1", pontos: { kaito: 3 }, flags: ["Respondeu_como_Kaito"] },
      { texto: "C. Sentar no banquinho do canto. Balançar as pernas. “Eu alcanço o chão. Viu? Não sou ela.”", proxima: "rk_c1", pontos: { kaito: 3 }, flags: ["Banquinho_canto"] }
    ]},
    rk_a1: { tipo: "narracao", texto: "Ele vira para ela. Devagar. O pano de prato no ombro. A luz amarela.", proxima: "rk_a2" },
    rk_a2: { quem: "kaito", texto: "Eu lembro de muita coisa. Eu tenho memória boa. É um problema.", proxima: "rk_a3" },
    rk_a3: { quem: "eu", texto: "Isso não é resposta.", proxima: "rk_a4" },
    rk_a4: { quem: "kaito", texto: "Não é. Quando for, eu falo.", proxima: "rk_a5" },
    rk_a5: { tipo: "narracao", texto: "Ele pega o pano do ombro dele e coloca no ombro dela. Pra ela secar. Os dedos dele ficam um segundo a mais no ombro. Depois ele volta pra panela.", proxima: "r_fim" },
    rk_b1: { tipo: "narracao", texto: "O Kaito para. A panela na mão. A água pingando.", proxima: "rk_b2" },
    rk_b2: { quem: "eu", texto: "Quinta à noite. Eu fui falar com o Ren. Sozinha. Eu pedi pra parar. Ele parou com três. Com o seu, não.", proxima: "rk_b3" },
    rk_b3: { tipo: "narracao", texto: "Ele coloca a panela no tanque. Seca a mão no avental. Bem devagar. Ela vê o maxilar dele travar. Destravar.", proxima: "rk_b4" },
    rk_b4: { quem: "kaito", texto: "Você foi sozinha. De novo.", proxima: "rk_b5" },
    rk_b5: { quem: "eu", texto: "Fui. E vou de novo, se precisar.", proxima: "rk_b6" },
    rk_b6: { quem: "kaito", texto: "Eu sei que vai. Então, da próxima vez, eu fico lá fora. De costas pra porta. Não pra você. Pra porta.", proxima: "rk_b7" },
    rk_b7: { tipo: "narracao", texto: "Ele não fica bravo. Ele fica perto. Do lado dela no tanque. O braço dele encostado no dela enquanto ela seca a panela. O resto da noite.", proxima: "r_fim" },
    rk_c1: { tipo: "narracao", texto: "Ela vai até o banquinho do canto. Senta. Balança as pernas. O pé encosta no chão.", proxima: "rk_c2" },
    rk_c2: { quem: "eu", texto: "Viu? Eu alcanço o chão. Não sou ela.", proxima: "rk_c3" },
    rk_c3: { tipo: "narracao", texto: "O Kaito olha para ela sentada no banquinho do canto. E alguma coisa no rosto dele derrete. Só um pouco. Ele ri. De verdade. Com os dentes.", proxima: "rk_c4" },
    rk_c4: { quem: "kaito", texto: "Por pouco. Você alcança o chão por pouco.", proxima: "rk_c5" },
    rk_c5: { quem: "eu", texto: "Um metro e sessenta é muito.", proxima: "rk_c6" },
    rk_c6: { quem: "kaito", texto: "É. É muito.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { roupa: "fora", tipo: "narracao", cenario: "rua-padaria-noite", transicao: "tempo", sprite: "takeo:machucado", texto: "Depois da festa, ela leva o Takeo em casa. A pé. Pela rua da padaria, que tem luz.", proxima: "rt_cam" },
    rt_cam: { caminhos: [
      { flag: "Leva_Takeo_casa", proxima: "rt_leva" }
    ], proxima: "rt_02" },
    rt_leva: { quem: "takeo", sprite: "takeo:machucado", texto: "A eficiente me levando em casa. A minha reputação na gangue acabou oficialmente.", proxima: "rt_02" },
    rt_02: { tipo: "narracao", texto: "Ele anda mais devagar que ela. Por causa do pé. Ela anda mais devagar ainda. Pra ele não perceber que ela está esperando.", proxima: "rt_03" },
    rt_03: { quem: "takeo", sprite: "takeo:machucado", texto: "A Reina segurou a minha tigela a tarde inteira. Ela não falou nada. Só segurou. Eu não sei o que fazer com isso.", proxima: "rt_04" },
    rt_04: { quem: "eu", texto: "Agradece. E come.", proxima: "rt_05" },
    rt_05: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu agradeci. E comi. Ela disse “de nada” como se estivesse brigando comigo.", proxima: "rt_06" },
    rt_06: { tipo: "narracao", cenario: "casa-takeo-noite", texto: "Eles chegam no portão da casa dele. O caquizeiro aparecendo por cima do muro. O balanço de corda balançando sozinho com o vento.", proxima: "rt_07" },
    rt_07: { tipo: "pensamento", texto: "Na outra vida, eu nunca vim até esse portão. Não deu tempo.", proxima: "rt_08" },
    rt_08: { tipo: "pensamento", texto: "Agora eu conheço o caquizeiro. O balanço.", proxima: "rt_09" },
    rt_09: { quem: "takeo", sprite: "takeo:machucado", texto: "Ei. De novo essa cara. A da sexta.", proxima: "rt_esc" },

    // ▶ ESCOLHA — Rota Takeo
    rt_esc: { escolhas: [
      { texto: "A. “É que eu gosto desse portão. Eu gosto de estar aqui.”", proxima: "rt_a1", pontos: { takeo: 3 }, flags: ["Gosta_portao"] },
      { texto: "B. Dar um abraço de lado. Com cuidado. Do lado do braço bom.", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["Abraco_lado_Takeo"] },
      { texto: "C. “Promete que nunca mais volta sozinho no escuro. Nunca.”", proxima: "rt_c1", pontos: { takeo: 2 }, flags: ["Promessa_escuro"] }
    ]},
    rt_a1: { tipo: "narracao", texto: "O Takeo olha para o portão. Um portão de ferro pintado de verde, com a tinta descascando. Depois olha para ela.", proxima: "rt_a2" },
    rt_a2: { quem: "takeo", sprite: "takeo:machucado", texto: "É um portão bem feio.", proxima: "rt_a3" },
    rt_a3: { quem: "eu", texto: "É o melhor portão da cidade.", proxima: "rt_a4" },
    rt_a4: { tipo: "narracao", texto: "Ele fica vermelho. Embaixo do poste. Ele abre o portão. Não entra. Fica segurando aberto.", proxima: "rt_a5" },
    rt_a5: { quem: "takeo", sprite: "takeo:machucado", texto: "Então entra amanhã. Pela porta da frente. A avó faz bolo de caqui no domingo.", proxima: "r_fim" },
    rt_b1: { tipo: "narracao", texto: "Ela abraça ele de lado. Pelo braço bom. Com cuidado, como quem abraça um vaso. Ele fica parado. Depois o braço bom dele passa pelas costas dela e aperta.", proxima: "rt_b2" },
    rt_b2: { quem: "takeo", sprite: "takeo:machucado", texto: "Você abraça igual a minha avó. Como se eu fosse quebrar.", proxima: "rt_b3" },
    rt_b3: { quem: "eu", texto: "Você quebrou. Literalmente.", proxima: "rt_b4" },
    rt_b4: { quem: "takeo", sprite: "takeo:machucado", texto: "Um braço. O resto está inteiro. Pode abraçar mais forte.", proxima: "rt_b5" },
    rt_b5: { tipo: "narracao", texto: "Ela abraça mais forte. Só um pouco. Com a força de uma menina de um metro e sessenta. Só isso.", proxima: "r_fim" },
    rt_c1: { tipo: "narracao", texto: "O Takeo fica sério. Ele olha para ela muito tempo. Ela está falando sério demais para uma promessa de portão.", proxima: "rt_c2" },
    rt_c2: { quem: "takeo", sprite: "takeo:machucado", texto: "Prometo. Mas você também. Você também anda sozinha no escuro. Eu sei que anda.", proxima: "rt_c3" },
    rt_c3: { tipo: "pensamento", texto: "Ele sabe. Ele não sabe de nada, e sabe.", proxima: "rt_c4" },
    rt_c4: { quem: "eu", texto: "...Prometo.", proxima: "rt_c5" },
    rt_c5: { tipo: "narracao", texto: "Os dois sabem que ela está mentindo. Ele aceita assim mesmo. Ele entra. Acende a luz da varanda. E fica na janela até ela virar a esquina.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: "fora", tipo: "narracao", cenario: "frente-lamen-noite", transicao: "tempo", sprite: "blake", texto: "Depois da festa, o Blake desmonta as mesas. Sozinho. A Sayuri foi embora com a Reina. Ela não se despediu dele. Ele não pediu.", proxima: "rb_02" },
    rb_02: { tipo: "narracao", texto: "A SN pega uma ponta da mesa. Ele pega a outra. Eles dobram juntos. Sem falar nada. Uma. Duas. Três.", proxima: "rb_03" },
    rb_03: { quem: "blake", texto: "Ela me chamou pra vir junto. Eu disse sim.", proxima: "rb_04" },
    rb_04: { quem: "eu", texto: "Você diz sim pra tudo que ela pede.", proxima: "rb_05" },
    rb_05: { quem: "blake", texto: "Ela pede. Os outros não pedem.", proxima: "rb_06" },
    rb_06: { tipo: "narracao", texto: "Ele coloca as mesas nas costas. Fica parado. Olhando para o lugar onde a Mio ficou a tarde inteira com o microfone de brinquedo.", proxima: "rb_07" },
    rb_07: { quem: "blake", texto: "A Mio não olhou pra mim nenhuma vez. Ela olhou pra todo mundo. Até pro cachorro.", proxima: "rb_esc" },

    // ▶ ESCOLHA — Rota Blake
    rb_esc: { escolhas: [
      { texto: "A. “Então pede você. Pra quem você quiser. Para de esperar alguém pedir.”", proxima: "rb_a1", pontos: { blake: 3 }, flags: ["Pede_voce_Blake"] },
      { texto: "B. “Você reparou que ela não olhou. Quem não liga não repara.”", proxima: "rb_b1", pontos: { blake: 2, mio: 1 }, flags: ["Reparou_Blake"] },
      { texto: "C. Pegar uma das mesas das costas dele. “Eu levo essa. Você leva o resto. E o resto inclui pensar.”", proxima: "rb_c1", pontos: { blake: 3 }, flags: ["Mesa_Blake"] }
    ]},
    rb_a1: { tipo: "narracao", texto: "O Blake olha para ela. Muito tempo. O peso das três mesas nas costas como se fosse nada.", proxima: "rb_a2" },
    rb_a2: { quem: "blake", texto: "Pedir pra quem eu quiser.", proxima: "rb_a3" },
    rb_a3: { quem: "eu", texto: "É assim que funciona.", proxima: "rb_a4" },
    rb_a4: { tipo: "narracao", texto: "Ele abre a boca. Fecha. Olha para ela de um jeito que ela não conhece. Rápido. Depois desvia.", proxima: "rb_a5" },
    rb_a5: { quem: "blake", texto: "...Eu vou pensar. Eu penso devagar. Você sabe.", proxima: "r_fim" },
    rb_b1: { tipo: "narracao", texto: "O Blake fica parado. Ele não tinha pensado nisso. Ela vê ele pensar. Devagar. Do jeito dele.", proxima: "rb_b2" },
    rb_b2: { quem: "blake", texto: "Quem não liga não repara.", proxima: "rb_b3" },
    rb_b3: { quem: "eu", texto: "Ela reparou tanto que olhou pro cachorro.", proxima: "rb_b4" },
    rb_b4: { tipo: "narracao", texto: "O Blake ri. O riso grave. Curto. Depois para. E fica com uma cara de quem tem uma coisa difícil pra resolver e sabe que vai demorar.", proxima: "r_fim" },
    rb_c1: { tipo: "narracao", texto: "Ela tira uma mesa das costas dele. Levanta com uma mão. Coloca no ombro. Ele fica olhando para a mão dela.", proxima: "rb_c2" },
    rb_c2: { quem: "blake", texto: "Você levantou com uma mão.", proxima: "rb_c3" },
    rb_c3: { quem: "eu", texto: "É de plástico.", proxima: "rb_c4" },
    rb_c4: { quem: "blake", texto: "Tem ferro embaixo.", proxima: "rb_c5" },
    rb_c5: { tipo: "narracao", cenario: "casa-blake-noite", texto: "Ela não responde. Ele não pergunta mais. Eles andam os dois com as mesas até a casa dele, sete quarteirões. Os gêmeos abrem a porta de pijama. Olham para ela com a mesa no ombro. Olham para o irmão.", proxima: "rb_c6" },
    rb_c6: { quem: "desconhecido", rotulo: "Gêmeos", texto: "Ela é mais forte que você?", proxima: "rb_c7" },
    rb_c7: { quem: "blake", texto: "...Vai dormir.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { roupa: "fora", tipo: "narracao", cenario: "rua-padaria-noite", transicao: "tempo", sprite: "ryuji", texto: "Depois da festa, o Ryuji oferece carona na Relâmpago. Ela aceita. Ele dá uma volta no quarteirão antes de ir pra casa dela. Depois outra. Depois outra.", proxima: "rr_02" },
    rr_02: { quem: "eu", texto: "Ryuji. A gente está passando pela padaria pela quarta vez.", proxima: "rr_03" },
    rr_03: { quem: "ryuji", texto: "Ela ficou três dias presa. Ela precisa andar. É terapia.", proxima: "rr_04" },
    rr_04: { tipo: "narracao", texto: "Na quinta volta, ele para no sinal. A rua vazia. Ele não arranca quando fica verde. Ele fica parado, de capacete, olhando pra frente.", proxima: "rr_05" },
    rr_05: { quem: "ryuji", texto: "Eu tirei foto com quarenta e três pessoas hoje. Com a moto. Contando a história da prisão. Todo mundo riu.", proxima: "rr_06" },
    rr_06: { quem: "ryuji", texto: "E o tempo todo eu fiquei pensando: alguém escolheu levar ela. Alguém sabia que era a coisa que mais doía. E alguém devolveu. Igual quem devolve brinquedo pra criança.", proxima: "rr_07" },
    rr_07: { quem: "ryuji", texto: "Eu odeio isso. Eu prefiro apanhar.", proxima: "rr_esc" },

    // ▶ ESCOLHA — Rota Ryuji
    rr_esc: { escolhas: [
      { texto: "A. “Então não deixa ele achar que é dono do brinquedo. Leva a Relâmpago no curso. Passa todo mundo.”", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Passa_todo_mundo"] },
      { texto: "B. Encostar a testa do capacete nas costas dele. Ficar assim até o sinal fechar de novo.", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Testa_costas_Ryuji"] },
      { texto: "C. “Você prefere apanhar porque apanhar você entende. Isso aqui ninguém entende. Nem eu.”", proxima: "rr_c1", pontos: { ryuji: 2 }, flags: ["Ninguem_entende"] }
    ]},
    rr_a1: { quem: "ryuji", texto: "Passar todo mundo.", proxima: "rr_a2" },
    rr_a2: { quem: "eu", texto: "Em primeiro lugar. Com moto amarela. Na frente de todo mundo que tem moto preta.", proxima: "rr_a3" },
    rr_a3: { tipo: "narracao", texto: "O sinal fica verde de novo. O Ryuji arranca. Rápido. A Relâmpago ronca. Ele grita alguma coisa que o vento leva. Ela acha que é “dourada”. Ela não pergunta.", proxima: "r_fim" },
    rr_b1: { tipo: "narracao", texto: "Ela encosta a testa do capacete nas costas dele. O Ryuji fica duro. Depois relaxa. Os ombros descem.", proxima: "rr_b2" },
    rr_b2: { tipo: "narracao", texto: "O sinal fica vermelho. Verde. Vermelho de novo. Nenhum carro passa. Eles ficam ali. Ele não fala nenhuma piada. Ela não fala nada.", proxima: "rr_b3" },
    rr_b3: { quem: "ryuji", texto: "...Tá. Agora eu posso ir pra casa.", proxima: "r_fim" },
    rr_c1: { tipo: "narracao", texto: "O Ryuji vira a cabeça. O capacete faz barulho no dela.", proxima: "rr_c2" },
    rr_c2: { quem: "ryuji", texto: "Nem você? Você entende tudo. Você é a pessoa que mais entende coisa que eu conheço.", proxima: "rr_c3" },
    rr_c3: { quem: "eu", texto: "Isso eu não entendo. Ainda.", proxima: "rr_c4" },
    rr_c4: { quem: "ryuji", texto: "Então quando você entender, me explica. Devagar. Eu sou de bombeiro, não de xadrez.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: "fora", tipo: "narracao", cenario: "frente-lamen-noite", transicao: "tempo", sprite: "victor", texto: "Depois da festa, o Victor senta no meio-fio na frente da lojinha. A camisa social com mais um botão a menos. Uma mancha de caldo e uma de feijão. Ele está feliz.", proxima: "rv_02" },
    rv_02: { quem: "victor", texto: "Senta aqui, gatinha... SN. Senta aqui. O meio-fio é meu escritório.", proxima: "rv_03" },
    rv_03: { tipo: "narracao", texto: "Ela senta. Ele tira do bolso um caderno pequeno, de capa de couro falso, com a ponta dobrada. Abre. Dentro, uma lista. Com a letra torta dele.", proxima: "rv_04" },
    rv_04: { quem: "victor", texto: "Clientes da oficina. Eu fui anotando na festa. Moto do Blake: vibração no pedal. Farol do Ryuji. Moto do Kaito, que é Frankenstein. O motorista da Reina tem um carro que faz um barulho esquisito. A senhora grávida de vinte e um anos atrás tem uma lambreta.", proxima: "rv_05" },
    rv_05: { quem: "victor", texto: "Onze clientes. Numa tarde. Sem oficina. Sem placa. Sem nada.", proxima: "rv_06" },
    rv_06: { tipo: "narracao", texto: "Ele fica olhando a lista. O pirulito parado na boca.", proxima: "rv_07" },
    rv_07: { quem: "victor", texto: "Uma semana atrás eu achei que eu ia perder tudo. Hoje eu tenho onze clientes num caderno de couro falso. A vida é muito esquisita.", proxima: "rv_esc" },

    // ▶ ESCOLHA — Rota Victor
    rv_esc: { escolhas: [
      { texto: "A. Pegar a caneta dele. Escrever no caderno: “12. SN. Bicicleta da mãe. Pneu furado faz dois anos.”", proxima: "rv_a1", pontos: { victor: 3 }, flags: ["Cliente_12"] },
      { texto: "B. “Escreve o nome da sua mãe na primeira página. Em letra grande. Igual vai ser na placa.”", proxima: "rv_b1", pontos: { victor: 3 }, flags: ["Nome_mae_caderno"] },
      { texto: "C. “A vida é esquisita. Mas você é mais.” E roubar o pirulito.", proxima: "rv_c1", pontos: { victor: 2 }, flags: ["Roubou_pirulito"] }
    ]},
    rv_a1: { tipo: "narracao", texto: "Ela pega a caneta. Escreve devagar, na linha doze, com a letra dela, reta.", proxima: "rv_a2" },
    rv_a2: { quem: "victor", texto: "Doze. A bicicleta da sua mãe. Pneu furado faz dois anos.", proxima: "rv_a3" },
    rv_a3: { quem: "eu", texto: "Ela vai de ônibus pro hospital. Ela diz que um dia conserta.", proxima: "rv_a4" },
    rv_a4: { quem: "victor", texto: "Segunda. Depois da doca. Eu passo lá. Primeiro serviço oficial. De graça. Porque a primeira cliente oficial a gente não cobra. É regra.", proxima: "rv_a5" },
    rv_a5: { quem: "eu", texto: "Que regra?", proxima: "rv_a6" },
    rv_a6: { quem: "victor", texto: "A que eu acabei de inventar.", proxima: "r_fim" },
    rv_b1: { tipo: "narracao", texto: "O Victor fica parado. Ele vira o caderno. A primeira página está em branco.", proxima: "rv_b2" },
    rv_b2: { tipo: "narracao", texto: "Ele escreve. Devagar. Em letra de forma. Com cuidado, pela primeira vez na vida. O nome da mãe dele. Embaixo: “Oficina”. Ele fica olhando.", proxima: "rv_b3" },
    rv_b3: { quem: "victor", texto: "...Fica bonito escrito.", proxima: "rv_b4" },
    rv_b4: { quem: "eu", texto: "Vai ficar mais bonito em cima de uma porta.", proxima: "rv_b5" },
    rv_b5: { tipo: "narracao", texto: "Ele não faz piada. Ele fecha o caderno. Guarda no bolso de dentro da camisa social. Do lado do coração. Ela vê que não foi sem querer.", proxima: "r_fim" },
    rv_c1: { tipo: "narracao", texto: "Ela tira o pirulito da boca dele. Coloca na dela. Ele fica de boca aberta.", proxima: "rv_c2" },
    rv_c2: { quem: "victor", texto: "Isso é... isso é roubo. Isso é roubo com... com saliva.", proxima: "rv_c3" },
    rv_c3: { quem: "eu", texto: "É cobrança. Você ainda me deve um sorvete.", proxima: "rv_c4" },
    rv_c4: { tipo: "narracao", texto: "O Victor fica vermelho. O Victor. Que chama todo mundo de gatinha. Vermelho até a orelha. Ele tira outro pirulito do bolso, abre, coloca na boca, e não fala mais nada por um minuto inteiro. Um recorde.", proxima: "r_fim" },

    /* =================== CENA 4 — DOMINGO, A PLANILHA =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: "fora", tipo: "narracao", cenario: "quarto-hana", transicao: "tempo", legenda: "Domingo, 15h — Cena 4", sprite: "hana", texto: "Domingo à tarde. A casa da Hana. O quarto dela tem uma estante só de pasta, todas com etiqueta. Em cima da cama, as folhas do abaixo-assinado, separadas em montinhos de vinte.", proxima: "c4_01" },
    c4_01: { tipo: "narracao", texto: "A Mio está deitada no chão com os pés na parede. A SN está sentada na escrivaninha. A Hana está no meio da cama, de pernas cruzadas, com o notebook aberto e a cara de quem vai anunciar uma descoberta científica.", proxima: "c4_02" },
    c4_02: { quem: "hana", texto: "Duzentas e oitenta e sete. Confirmado. Sete endereços repetidos, mas são famílias diferentes na mesma casa, então vale.", proxima: "c4_03" },
    c4_03: { quem: "mio", sprite: "mio", texto: "Hana, isso é muita assinatura pra uma lojinha.", proxima: "c4_04" },
    c4_04: { quem: "hana", sprite: "hana", texto: "Não é sobre a lojinha. Eu fiz outra coisa.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "Ela vira o notebook. Uma planilha. Com cores. Muitas cores.", proxima: "c4_06" },
    c4_06: { quem: "hana", texto: "Eu peguei os nomes que a SN me falou. A empresa. Sakuma Participações. E entrei no site da prefeitura. Tem uma parte onde aparece quem comprou o quê. É público. Ninguém olha porque é chato. Eu adoro coisa chata.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", texto: "Na planilha, quatro linhas. O prédio da doca do mercado. A empresa de reboque que leva as motos apreendidas para o pátio. O prédio da livraria. O prédio da lojinha.", proxima: "c4_08" },
    c4_08: { quem: "hana", texto: "Agora olha a coluna da data.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "A SN olha. As datas. Todas na mesma semana. Todas no intervalo de cinco dias. Faz pouco mais de um mês.", proxima: "c4_10" },
    c4_10: { quem: "hana", texto: "Eles compraram tudo antes. Bem antes. E esperaram. E aí, semana passada, usaram tudo ao mesmo tempo.", proxima: "c4_11" },
    c4_11: { quem: "mio", sprite: "mio", texto: "Que semana foi essa? A das compras?", proxima: "c4_12" },
    c4_12: { tipo: "narracao", sprite: null, texto: "A SN conta os dias de cabeça. Para trás. Uma semana. Duas. Três. Quatro.", proxima: "c4_13" },
    c4_13: { tipo: "pensamento", texto: "A semana do balanço. A semana em que as motos chegaram roncando na praça. A semana em que o Kaito me deu o capacete vermelho. E eu subi na garupa dele na frente de todo mundo.", proxima: "c4_14" },
    c4_14: { tipo: "pensamento", texto: "E naquela noite tinha um carro preto na frente do meu prédio.", proxima: "c4_15" },
    c4_15: { tipo: "narracao", texto: "Ela não fala nada. A Hana e a Mio estão olhando para ela.", proxima: "c4_esc5" },

    // ▶ ESCOLHA 5 — Contar a data para as amigas?
    c4_esc5: { escolhas: [
      { texto: "A. “Foi a semana que eu ganhei o capacete.” E deixar elas entenderem sozinhas.", proxima: "c4_5a_1", pontos: { mio: 2, hana: 2 }, flags: ["Contou_capacete_amigas"] },
      { texto: "B. “Eu não sei. Hana, guarda isso. Isso vale ouro.”", proxima: "c4_5b_1", pontos: { hana: 2 }, flags: ["Guarda_planilha"] },
      { texto: "C. Fechar o notebook. “Chega de Ren por hoje. Arena dos Reinos. Agora. Eu carrego as duas.”", proxima: "c4_5c_1", pontos: { mio: 2, hana: 1 }, flags: ["Arena_domingo"] }
    ]},
    c4_5a_1: { quem: "eu", texto: "Foi a semana que eu ganhei o capacete.", proxima: "c4_5a_2" },
    c4_5a_2: { tipo: "narracao", sprite: "mio", texto: "A Mio tira os pés da parede. Senta. Ela olha para a Hana. A Hana olha para a planilha. As duas chegam no mesmo lugar ao mesmo tempo. Dá pra ver.", proxima: "c4_5a_3" },
    c4_5a_3: { quem: "mio", texto: "...Ele começou a derrubar todo mundo quando você subiu na moto do Kaito.", proxima: "c4_5a_4" },
    c4_5a_4: { quem: "hana", sprite: "hana", texto: "Nova coluna. “Motivo.” Primeira linha: ...eu não sei como escrever isso sem ficar esquisito.", proxima: "c4_5a_5" },
    c4_5a_5: { quem: "eu", texto: "Então não escreve.", proxima: "c4_16" },
    c4_5b_1: { tipo: "narracao", sprite: "hana", texto: "A Hana salva a planilha. Três vezes. Num pendrive. Num e-mail. Imprime uma cópia e coloca numa pasta nova. Etiqueta: “Coisas chatas importantes”.", proxima: "c4_5b_2" },
    c4_5b_2: { quem: "hana", texto: "Vale ouro mesmo. Ninguém nunca me disse que uma planilha minha vale ouro.", proxima: "c4_5b_3" },
    c4_5b_3: { quem: "mio", sprite: "mio", texto: "Eu digo isso toda semana!", proxima: "c4_5b_4" },
    c4_5b_4: { quem: "hana", sprite: "hana", texto: "Você diz que as minhas planilhas são “fofas”. É diferente.", proxima: "c4_16" },
    c4_5c_1: { tipo: "narracao", texto: "Ela fecha o notebook da Hana com um clique. Pega o celular. Abre o Arena dos Reinos.", proxima: "c4_5c_2" },
    c4_5c_2: { quem: "eu", texto: "Chega de Ren por hoje. Vocês duas, comigo. Eu carrego.", proxima: "c4_5c_3" },
    c4_5c_3: { tipo: "narracao", texto: "Vinte minutos depois, a Mio está gritando, a Hana está anotando os tempos de recarga num papel, e a SN está xingando um jogador do time adversário que se chama “ReiDoMapa99” com uma criatividade que faz a mãe da Hana bater na porta pra perguntar se está tudo bem.", proxima: "c4_5c_4" },
    c4_5c_4: { quem: "mio", sprite: "mio", texto: "Ela vira outra pessoa! A Hana precisa colocar isso numa planilha!", proxima: "c4_5c_5" },
    c4_5c_5: { quem: "hana", sprite: "hana", texto: "Já coloquei. Coluna “palavrões por minuto”.", proxima: "c4_16" },

    // (todas as opções continuam aqui)
    c4_16: { tipo: "narracao", cenario: "quarto-sn-noite", sprite: null, transicao: "tempo", legenda: "Domingo, 22h", texto: "Domingo à noite. O quarto dela. O uniforme passado em cima da cadeira. A mãe dormindo antes do plantão de segunda. A casa quieta.", proxima: "c4_17" },
    c4_17: { tipo: "narracao", texto: "Ela está deitada, olhando para o teto. Pensando no banquinho do canto. Numa menina pequenininha que balançava as pernas. Que ela não lembra de ter sido.", proxima: "c4_18" },
    c4_18: { tipo: "narracao", texto: "O celular vibra em cima do peito dela.", proxima: "c4_19" },
    c4_19: { tipo: "narracao", texto: "Um número que não está salvo. Mas ela conhece. É o mesmo número das fotos. As que chegaram antes, sem nome, pra ameaçar. Ela nunca salvou. Nunca bloqueou. Uma mensagem só.", proxima: "c4_20" },
    c4_20: { quem: "mensagem", rotulo: "Mensagem — Número desconhecido", texto: "287. Bonito.", proxima: "c4_21" },
    c4_21: { tipo: "narracao", efeito: "eco", texto: "Ela senta na cama. Sobe a conversa. As fotos de antes, todas ali, uma embaixo da outra. Sem uma palavra. E agora, embaixo delas, duas.", proxima: "c4_22" },
    c4_22: { tipo: "pensamento", texto: "“Seja homem e fala direto comigo.”", proxima: "c4_23" },
    c4_23: { tipo: "pensamento", texto: "Antes ele mandava foto. Pra eu saber que ele estava olhando. Agora ele escreveu. Pra eu saber que ele ouviu.", proxima: "c4_24" },
    c4_24: { tipo: "pensamento", texto: "Duzentas e oitenta e sete. Ele contou. Ou alguém contou pra ele. Do carro preto, na esquina.", proxima: "c4_esc6" },

    // ▶ ESCOLHA 6 — Responder?
    c4_esc6: { escolhas: [
      { texto: "A. Responder: “300 até sexta.”", proxima: "c4_6a_1", pontos: { desvio: 1 }, flags: ["Respondeu_300"] },
      { texto: "B. Responder: “Isso é você falando direto comigo? Duas palavras?”", proxima: "c4_6b_1", pontos: { desvio: 1 }, flags: ["Duas_palavras"] },
      { texto: "C. Não responder. Salvar o número. Nome do contato: “Rei”.", proxima: "c4_6c_1", pontos: { desvio: 2 }, flags: ["Salvou_Rei"] }
    ]},
    c4_6a_1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "300 até sexta.", proxima: "c4_6a_2" },
    c4_6a_2: { tipo: "narracao", texto: "Visualizado. Na hora. Ele estava olhando para a tela. Esperando. Ele não responde. Mas os três pontinhos aparecem. Somem. Aparecem. Somem. Ficam sumidos.", proxima: "c4_25" },
    c4_6b_1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Isso é você falando direto comigo? Duas palavras?", proxima: "c4_6b_2" },
    c4_6b_2: { tipo: "narracao", texto: "Visualizado. Na hora. Nenhuma resposta. Nenhum pontinho. Só o “visto” embaixo da pergunta dela. Embaixo das fotos. Ele leu. E escolheu não responder. Isso também é resposta.", proxima: "c4_25" },
    c4_6c_1: { tipo: "narracao", texto: "Ela não responde. Depois de todas aquelas fotos, ela finalmente salva o número. Digita o nome do contato devagar. “Rei.” Salva.", proxima: "c4_6c_2" },
    c4_6c_2: { tipo: "pensamento", texto: "Ele vê quando eu fico online. Ele vê que eu li. Ele não vê que eu salvei. Agora eu também sei de uma coisa que ele não sabe.", proxima: "c4_25" },

    // (todas as opções continuam aqui)
    c4_25: { tipo: "narracao", texto: "Ela coloca o celular virado para baixo na mesinha. Apaga a luz. Fica deitada no escuro.", proxima: "c4_26" },
    c4_26: { tipo: "pensamento", texto: "Vinte e oito dias. A lojinha. O rei não se devolve.", proxima: "c4_27" },
    c4_27: { tipo: "pensamento", texto: "Então eu tomo.", proxima: "ep_fim" },

    // Fim do Capítulo 32 (crie a entrada "capitulo32" em dados/capitulos.js).
    ep_fim: { fim: "capitulo32" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 33 (anotações do roteiro)
 *  • ABAIXO-ASSINADO: 287 assinaturas (planilha da Hana). Vai para a prefeitura (Kaito e o tio).
 *    A lojinha: 28 dias no domingo à noite.
 *  • PLANILHA DA HANA: a Sakuma Participações comprou a doca, a empresa de reboque, o prédio da livraria e o
 *    da lojinha na mesma semana — a semana do balanço e do capacete vermelho (Cap. 22). Esperou e usou tudo junto.
 *  • O Ren mandou mensagem do MESMO número das fotos de antes: "287. Bonito." Primeira vez com palavras. Respostas: Respondeu_300 /
 *    Duas_palavras / Salvou_Rei.
 *  • PISTA (NÃO REVELAR): o tio do Kaito lembra de uma "cliente pequenininha" que sentava no banquinho do canto
 *    e vinha com alguém. A SN não lembra. O Kaito ouviu e guardou. (Eles se conheceram quando crianças.)
 *  • Blake e Sayuri: ela veio de mão dada; a Mio aguentou; o Blake "não sabe o que está fazendo".
 *  • Victor: caderno de clientes (11 ou 12), com o nome da mãe na primeira página (Nome_mae_caderno).
 *  • CONTINUIDADE: da vida passada, dos meninos, a SN só conheceu o Takeo.
 *  • SEGREDOS: o Ren matou o Takeo na primeira linha do tempo · infância do Ren (xadrez, óculos, bullying,
 *    a SN brincou com ele, ele descobriu quem era a tia dela, ela sumiu) · o motivo dele.
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 Que barulho fazer · 2 Kaito e Reina · 3 A Mio · 4 Depois do carro · Rota (1 por rota)
 *  5 Contar a data para as amigas? · 6 Responder?
 *
 * FLAGS NOVAS
 *  Ideia_festa · Ideia_abaixo · Ideia_duas · Toalha_Kaito · Avental_Kaito · Soltou_balao · Momento_musical
 *  Caldo_Mio · Cobrou_Blake · Rodada_caldo · Esquina_carro · Nao_reagiu_carro · Perguntou_lembranca_Kaito
 *  Respondeu_como_Kaito · Banquinho_canto · Gosta_portao · Abraco_lado_Takeo · Promessa_escuro · Pede_voce_Blake
 *  Reparou_Blake · Mesa_Blake · Passa_todo_mundo · Testa_costas_Ryuji · Ninguem_entende · Cliente_12
 *  Nome_mae_caderno · Roubou_pirulito · Contou_capacete_amigas · Guarda_planilha · Arena_domingo
 *  Respondeu_300 · Duas_palavras · Salvou_Rei
 */