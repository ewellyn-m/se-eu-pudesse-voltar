/*
 * =====================================================================
 *  CAPÍTULO 46 — Feira de talentos
 *  Quinta-feira, logo depois do Capítulo 45.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Cenas com todos os meninos em todas as rotas. Bloco de rota à noite.
 *
 *  CONTEXTO (Cap. 45)
 *    • Conversa sincera no hall, nada resolvido. Voltaram a trocar mensagem. O Kaito pergunta "Posso?" antes da fivela.
 *    • A força continua escapando, mas virou piada: a escola culpa a "licitação de 2009".
 *    • O cabo de guerra: um puxão dela, quinze pessoas no chão. A rede de fofoca não esqueceu.
 *    • A Serena continua. O Kaito mandou o Ryuji levar ela na Relâmpago ("um basta de bicicleta enferrujada").
 *
 *  O QUE ACONTECE
 *    • Quinta: feira de talentos da escola, à tarde, na quadra (organização do grêmio, a Reina na comissão).
 *    • A rede de fofoca inscreveu a SN, sem ela saber, no "Desafio de queda de braço" (por causa do cabo de guerra).
 *      Ela precisa perder sem parecer que está perdendo. Não dá muito certo. Engraçado.
 *    • A Mio apresenta (voz da rádio). A Hana nos bastidores com a prancheta. O Ryuji faz mágica (com o Blake de
 *      assistente). O Victor faz imitações. O Takeo cuida do som. A Akane canta e ninguém sabia.
 *    • A SERENA inscreveu "Serena & Kaito — dueto" sem perguntar pra ele. Chamam o nome dele na frente da escola inteira.
 *      Ele sobe. Não canta. Fica do lado dela enquanto ela canta sozinha, olhando pra plateia. A escola acha que
 *      são um casal. A Serena ganha esse round.
 *    • Bloco de rota à noite.
 *
 *  REGRAS
 *    • Sala da SN: Takeo, Mio, Hana, Reina, Ren, Akane. Kaito, Blake, Ryuji, Victor e Serena são de outras salas.
 *    • Sem xadrez no Ren. O Ren não manda mensagem. Fala pouco. Sem narrar roupa. Sem flashback.
 *    • A Serena não explica plano. O Kaito não dá um basta de vez.
 *    • Nenhuma letra de música real: só "uma música romântica famosa".
 *
 *  PERSONAGENS
 *    Mio, Hana, Reina, Akane, Kaito, Takeo, Victor, Blake, Ryuji, Ren, Serena.
 *    Sem sprite / rótulo: Victor, Ren, Akane, Inspetor geral, Diretora, Menino do segundo ano.
 *
 *  CENÁRIOS
 *    apartamento (hall) · saida-colegio · sala-de-aula · corredor · patio-fundos (quadra / palco) · vestiario (bastidores)
 *    quarto-sn
 *
 *  Crie a entrada "capitulo46" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo46", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — 6H55 =================== */
    c1_01: { roupa: "escolar", tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", legenda: "Quinta, 6h55 — Cena 1", sprite: null, texto: "Quinta-feira. Ela desce os degraus às seis e cinquenta e cinco, porque acordou cedo e não aguentou ficar parada na sala. E ele já está lá.", proxima: "c1_02" },
    c1_02: { caminhos: [
      { flag: "Amanha_sete", proxima: "c1_02a" }
    ], proxima: "c1_02b" },
    c1_02a: { quem: "kaito", sprite: "kaito", texto: "Eu falei que chegava antes. Seis e cinquenta. Eu cheguei seis e quarenta. Eu fiquei contando os azulejos. São cento e doze.", proxima: "c1_03" },
    c1_02b: { quem: "kaito", sprite: "kaito", texto: "Bom dia. Eu cheguei cedo. Eu fiquei contando os azulejos. São cento e doze.", proxima: "c1_03" },
    c1_03: { tipo: "narracao", texto: "Ele está com o capacete vermelho no braço e a cara um pouco menos cansada que ontem. Não muito. Um pouco. Trinta por cento, a Mio diria.", proxima: "c1_04" },
    c1_04: { quem: "kaito", texto: "Você viu o mural? A feira é hoje. À tarde. Na quadra. Eles cancelaram as duas últimas aulas.", proxima: "c1_05" },
    c1_05: { quem: "eu", texto: "Que feira?", proxima: "c1_06" },
    c1_06: { quem: "kaito", texto: "De talentos. O cartaz está no mural faz três semanas. Do lado da porta da cantina. Com um microfone desenhado.", proxima: "c1_07" },
    c1_07: { tipo: "pensamento", texto: "Três semanas. Nas últimas três semanas eu tive uma festa, um ponche, um capacete, uma foto, um banco e uma parede. Eu não vi microfone desenhado nenhum.", proxima: "c1_08" },
    c1_08: { quem: "kaito", texto: "Eu não vou me inscrever em nada. Eu não tenho talento. Eu só vou assistir. E comer pipoca.", proxima: "c1_09" },
    c1_09: { tipo: "narracao", texto: "Ele estende o capacete. Ela olha para o capacete. Ele espera. Não empurra.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — O hall
    c1_esc1: { escolhas: [
      { texto: "A. Pegar o capacete. “Posso?” dessa vez é ela que fala, e entrega a fivela pra ele.", proxima: "c1_1a_1", pontos: { kaito: 3 }, flags: ["Ela_disse_posso"] },
      { texto: "B. Pegar o capacete e fechar a fivela sozinha. Mas subir na moto.", proxima: "c1_1b_1", pontos: { kaito: 2 }, flags: ["Fivela_sozinha_quinta"] },
      { texto: "C. “A pé hoje. Mas você pode me contar dos azulejos no caminho.”", proxima: "c1_1c_1", pontos: { kaito: 2 }, flags: ["Azulejos_a_pe"] }
    ]},
    c1_1a_1: { quem: "eu", texto: "...Posso?", proxima: "c1_1a_2" },
    c1_1a_2: { tipo: "narracao", texto: "Ela segura a fivela aberta na frente dele. Ele fica parado um segundo, como se ela tivesse falado em outra língua. Depois fecha. Devagar. Clique. A mão dele demora um pouquinho mais do que precisava embaixo do queixo dela.", proxima: "c1_10" },
    c1_1b_1: { tipo: "narracao", texto: "Ela fecha a fivela sozinha. Ele não fala nada. Mas, quando ela sobe na garupa, ela segura na cintura dele, não na camisa. Só com uma mão. Ele fica duro como uma tábua o caminho inteiro.", proxima: "c1_10" },
    c1_1c_1: { quem: "eu", texto: "A pé hoje. Mas você pode me contar dos azulejos no caminho.", proxima: "c1_1c_2" },
    c1_1c_2: { tipo: "narracao", texto: "Ele empurra a moto do lado dela. Vinte e cinco minutos. Ele conta dos azulejos: cento e doze, sete rachados, um com um desenho de flor que ninguém sabe de onde veio. Ela não fala quase nada. Mas ouve tudo.", proxima: "c1_10" },

    // (todas as opções continuam aqui)
    c1_10: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", texto: "Na frente da escola, o mural do lado da cantina está coberto de papel colorido. “FEIRA DE TALENTOS — HOJE, 14H, QUADRA”. E, embaixo, a lista de inscritos, impressa, colada com fita.", proxima: "c1_11" },
    c1_11: { tipo: "narracao", texto: "Tem um grupo de gente olhando a lista. Quando ela chega, o grupo abre. E fica olhando para ela. Alguém ri baixinho.", proxima: "c1_12" },
    c1_12: { tipo: "narracao", texto: "Ela chega perto. Lê. Número sete.", proxima: "c1_13" },
    c1_13: { quem: "mensagem", rotulo: "Lista de inscritos — nº 7", texto: "DESAFIO DE QUEDA DE BRAÇO — “A Menina do Cabo de Guerra” (SN, sala A) contra quem tiver coragem. Inscrição feita pela galera.", proxima: "c1_14" },
    c1_14: { tipo: "pensamento", texto: "Não.", proxima: "c1_15" },
    c1_15: { tipo: "pensamento", texto: "Não, não, não, não. Queda de braço. Comigo. Na frente da escola inteira. Eu vou arrancar o braço de alguém. Eu vou arrancar o braço de alguém ao vivo.", proxima: "c1_16" },
    c1_16: { tipo: "narracao", sprite: "kaito", texto: "Do lado dela, o Kaito lê também. E faz um barulho pelo nariz que ela tem certeza que é uma risada tentando escapar.", proxima: "c1_17" },
    c1_17: { quem: "kaito", texto: "...“Quem tiver coragem.”", proxima: "c1_18" },
    c1_18: { quem: "eu", texto: "Não ri.", proxima: "c1_19" },
    c1_19: { quem: "kaito", texto: "Eu não estou rindo. Eu estou com medo. Por quem for.", proxima: "c1_20" },
    c1_20: { tipo: "narracao", texto: "Ela vai ler o resto da lista para ver se dá para apagar o nome dela com a unha. E para. Número doze. Ela lê duas vezes.", proxima: "c1_21" },
    c1_21: { quem: "mensagem", rotulo: "Lista de inscritos — nº 12", texto: "DUETO — Serena (sala C) & Kaito (bloco C). Música romântica.", proxima: "c1_22" },
    c1_22: { tipo: "narracao", texto: "Do lado dela, o Kaito para de rir. Ele lê. Lê de novo. A cara dele vai ficando branca devagar, de cima para baixo, como uma parede sendo pintada.", proxima: "c1_23" },
    c1_23: { quem: "kaito", texto: "Eu não me inscrevi nisso.", proxima: "c1_24" },
    c1_24: { quem: "eu", texto: "Eu sei.", proxima: "c1_25" },
    c1_25: { tipo: "narracao", texto: "Ela sabe. Ela sabe exatamente quem inscreveu. Ela não fala o nome. Ele também não. Os dois ficam olhando para o número doze em silêncio, até o sinal tocar.", proxima: "c2_01" },

    /* =================== CENA 2 — A SALA =================== */
    c2_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Primeira aula — Cena 2", sprite: "mio", texto: "Na sala, a Mio está em pé em cima da cadeira, com um microfone de verdade na mão, desligado, treinando a voz da rádio para uma plateia de carteiras vazias.", proxima: "c2_02" },
    c2_02: { quem: "mio", texto: "Boa tarde, Colégio! Sejam bem-vindos à Feira de Talentos! Eu sou a Mio e eu vou ser a sua apresentadora, porque ninguém mais quis e eu sou incrível!", proxima: "c2_03" },
    c2_03: { quem: "eu", texto: "Mio. Quem me inscreveu na queda de braço?", proxima: "c2_04" },
    c2_04: { tipo: "narracao", texto: "A Mio desce da cadeira muito devagar. Muito. Com a cara de quem acabou de ser pega comendo o bolo de aniversário antes da festa.", proxima: "c2_05" },
    c2_05: { quem: "mio", texto: "Não fui eu. Juro. Foi a rede. A rede inteira. Depois do cabo de guerra, alguém falou “essa menina tem que fazer queda de braço” e aí surgiu um formulário e aí tinha sessenta assinaturas e aí a Reina falou que o grêmio é democrático.", proxima: "c2_06" },
    c2_06: { quem: "mio", texto: "...Eu assinei. Uma vez. Por solidariedade. Desculpa.", proxima: "c2_07" },
    c2_07: { tipo: "narracao", sprite: "reina", texto: "A Reina, da carteira da frente, vira com uma pasta da comissão no colo e a cara mais profissional do mundo.", proxima: "c2_08" },
    c2_08: { quem: "reina", texto: "O grêmio é democrático. Sessenta e três assinaturas. Você é a atração mais esperada da tarde. Mais que o mágico. Eu já vendi a pipoca contando com você.", proxima: "c2_09" },
    c2_09: { quem: "eu", texto: "E se eu desistir?", proxima: "c2_10" },
    c2_10: { quem: "reina", texto: "Aí eu devolvo o dinheiro de sessenta e três pipocas. E eu nunca mais te convido pra uma festa.", proxima: "c2_11" },
    c2_11: { tipo: "narracao", sprite: "hana", texto: "A Hana levanta a prancheta. Nela, uma folha nova: “Feira — ordem das apresentações”. E, do lado do número sete, escrito à mão, com uma seta: “Atenção: risco estrutural da mesa”.", proxima: "c2_12" },
    c2_12: { quem: "hana", texto: "Eu mandei trazer a mesa de ferro do refeitório. A de madeira não ia aguentar. Eu fiz as contas.", proxima: "c2_13" },
    c2_13: { tipo: "pensamento", texto: "A Hana fez as contas. A Hana sabe. Ou a Hana só faz contas de tudo. Com a Hana nunca dá pra saber.", proxima: "c2_14" },
    c2_14: { tipo: "narracao", sprite: "takeo:escolar", texto: "Atrás dela, o Takeo, com o braço de frango apoiado em cima da carteira como quem exibe uma joia, levanta a mão.", proxima: "c2_15" },
    c2_15: { quem: "takeo", sprite: "takeo:escolar", texto: "Eu vou cuidar do som. A Reina me chamou. Eu não sei mexer na mesa de som, mas ela disse que é só subir e descer os botões. Eu sou bom em subir e descer coisas.", proxima: "c2_16" },
    c2_16: { quem: "takeo", sprite: "takeo:escolar", texto: "Se você quiser, quando for a sua vez, eu toco uma música de luta. Bem alta. Tipo filme.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — A música de luta
    c2_esc2: { escolhas: [
      { texto: "A. “Toca a mais épica que você achar, Takeo.”", proxima: "c2_2a_1", pontos: { takeo: 3 }, flags: ["Musica_epica"] },
      { texto: "B. “Toca uma música calma. Bem calma. Pra eu não me empolgar.”", proxima: "c2_2b_1", pontos: { takeo: 3 }, flags: ["Musica_calma"] },
      { texto: "C. “Se eu arrancar o braço de alguém, você corta o som?”", proxima: "c2_2c_1", pontos: { takeo: 2 }, flags: ["Corta_som"] }
    ]},
    c2_2a_1: { quem: "eu", texto: "Toca a mais épica que você achar, Takeo.", proxima: "c2_2a_2" },
    c2_2a_2: { tipo: "narracao", texto: "Os olhos do Takeo brilham como quem recebeu uma missão sagrada. Ele passa o resto da aula com o fone no ouvido, escondido, procurando a música mais épica da internet, fazendo careta de concentração.", proxima: "c2_17" },
    c2_2b_1: { quem: "eu", texto: "Toca uma música calma. Bem calma. Pra eu não me empolgar.", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "takeo", sprite: "takeo:escolar", texto: "Calma tipo... música de elevador? A minha avó tem um CD de flauta. É tão calmo que o gato dela dorme.", proxima: "c2_2b_3" },
    c2_2b_3: { quem: "eu", texto: "Perfeito. A flauta.", proxima: "c2_17" },
    c2_2c_1: { quem: "eu", texto: "Se eu arrancar o braço de alguém, você corta o som?", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "takeo", sprite: "takeo:escolar", texto: "Eu corto o som e eu levo o braço pro hospital. Eu conheço o caminho. Eu fui lá ontem.", proxima: "c2_17" },

    // (todas as opções continuam aqui)
    c2_17: { tipo: "narracao", sprite: null, texto: "Perto da porta, a Akane está com o caderno aberto, mas não está escrevendo. Ela está mexendo a boca, sem som, como quem decora alguma coisa. Quando percebe que a SN está olhando, ela fecha o caderno rápido e fica vermelha.", proxima: "c2_18" },
    c2_18: { tipo: "narracao", texto: "Do lado dela, o Ren lê. Ele não está na lista. Ninguém esperava que estivesse.", proxima: "c3_01" },

    /* =================== CENA 3 — O INTERVALO =================== */
    c3_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Intervalo — Cena 3", sprite: null, texto: "No intervalo, o pátio só fala da feira. Alguém montou um bolão no muro: quem vai ter coragem de enfrentar a Menina do Cabo de Guerra. O nome mais votado, com doze apostas, é “ninguém”.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", sprite: "ryuji", texto: "No muro do bebedouro, o Ryuji está ensaiando. Ele tem uma cartola de papelão pintada de preto, uma varinha que é claramente um pedaço de cabo de vassoura, e um baralho com três cartas faltando.", proxima: "c3_03" },
    c3_03: { quem: "ryuji", texto: "O Grande Ryujini! Mágico! Ilusionista! Escolha uma carta! Qualquer carta! Não essa! Essa não! Escolhe outra!", proxima: "c3_04" },
    c3_04: { tipo: "narracao", sprite: "blake", texto: "Do lado dele, o Blake, sentado, com a lancheira no colo e um lenço vermelho amarrado no pescoço que ele claramente não escolheu.", proxima: "c3_05" },
    c3_05: { quem: "blake", texto: "Eu sou o assistente. Ele me fez assinar um contrato. Num guardanapo. Eu não li.", proxima: "c3_06" },
    c3_06: { quem: "ryuji", texto: "O grande final é eu fazer o Blake desaparecer! Dentro de uma caixa! A caixa é aquela de geladeira que eu achei na rua!", proxima: "c3_07" },
    c3_07: { quem: "blake", texto: "O Blake não cabe em caixa de geladeira.", proxima: "c3_08" },
    c3_08: { quem: "ryuji", texto: "Por isso que vai ser mágica!", proxima: "c3_09" },
    c3_09: { tipo: "narracao", sprite: null, texto: "Encostado na árvore, o Victor está falando sozinho, baixinho, mudando a voz a cada frase. Ela reconhece o inspetor. Depois a professora de português. Depois o tio da cantina. Depois, com a voz bem doce e a mão no peito, uma voz que ela reconhece na hora.", proxima: "c3_10" },
    c3_10: { sprite: "victor", quem: "victor", texto: "“Ai, gente, meu pé...” Não. Essa não. Essa eu já fiz semana passada. Essa dá briga.", proxima: "c3_11" },
    c3_11: { quem: "victor", texto: "Eu vou fazer imitações. Professores, inspetor, tio da cantina. E o Caramelo. O grande final é o Caramelo. Eu ensaiei a coceira da orelha a semana inteira.", proxima: "c3_12" },
    c3_12: { quem: "victor", texto: "...E eu vou torcer por você no número sete. Muito. Mas de longe. Bem de longe. Eu vi o cabo de guerra de perto. Eu ainda sinto o pé do Ryuji na minha costela.", proxima: "c3_13" },
    c3_13: { tipo: "narracao", sprite: "serena", texto: "Do outro lado do pátio, perto da grade, a Serena. Com um grupo de amigas da sala C em volta, falando alto, rindo. Ela está mostrando alguma coisa no celular. Um fone de ouvido rosa passa de mão em mão.", proxima: "c3_14" },
    c3_14: { quem: "desconhecido", rotulo: "Amiga da Serena", texto: "Ai, que lindo! É a música de vocês? Vocês vão cantar essa? Ele sabe a letra?", proxima: "c3_15" },
    c3_15: { quem: "serena", texto: "Ele vai saber. Ele é tímido, mas ele sempre faz o que eu peço. Né, Kaito?", proxima: "c3_16" },
    c3_16: { tipo: "narracao", sprite: "kaito", texto: "O Kaito está ali do lado, encostado na grade, com as mãos no bolso. Ele levanta os olhos do chão. Olha para a Serena. Para as amigas. Para o pátio inteiro, que está olhando.", proxima: "c3_17" },
    c3_17: { quem: "kaito", texto: "Serena. Eu não me inscrevi.", proxima: "c3_18" },
    c3_18: { quem: "serena", texto: "Eu sei! Foi surpresa! Eu inscrevi a gente porque você ficou tão triste essa semana... eu achei que ia te fazer bem. Você não vai me deixar sozinha no palco, vai? Na frente de todo mundo?", proxima: "c3_19" },
    c3_19: { tipo: "narracao", texto: "Ela fala baixinho, com os olhos já brilhando. As amigas fazem “aaawn”. Alguém do lado fala “que fofa”. O Kaito fica parado, com a boca meio aberta, procurando uma palavra que ele não tem.", proxima: "c3_20" },
    c3_20: { tipo: "pensamento", texto: "Ele não sabe dizer não quando alguém chora. Ele mesmo me falou. E ela sabe. Ela sabe exatamente onde apertar.", proxima: "c3_21" },
    c3_21: { tipo: "narracao", sprite: null, texto: "A mão dela está em cima do muro do bebedouro. Ela sente o cimento começando a esfarelar embaixo dos dedos. Ela tira a mão. Coloca no bolso. Respira.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — No muro
    c3_esc3: { escolhas: [
      { texto: "A. Não olhar. Virar pro Ryuji. “Me mostra a mágica da carta de novo.”", proxima: "c3_3a_1", pontos: { ryuji: 2 }, flags: ["Nao_olhou_dueto"] },
      { texto: "B. Olhar pro Kaito até ele olhar de volta. Não falar nada. Só olhar.", proxima: "c3_3b_1", pontos: { kaito: 2 }, flags: ["Olhou_Kaito_dueto"] },
      { texto: "C. Mandar mensagem: “Você não precisa subir.”", proxima: "c3_3c_1", pontos: { kaito: 3 }, flags: ["Nao_precisa_subir"] }
    ]},
    c3_3a_1: { quem: "eu", texto: "Ryuji. Me mostra a mágica da carta de novo.", proxima: "c3_3a_2" },
    c3_3a_2: { tipo: "narracao", texto: "O Ryuji se ilumina. Faz a mágica. Ela escolhe uma carta. Ele erra a carta. Erra de novo. Na terceira, ele tira a carta certa da orelha do Blake, e fica tão surpreso quanto todo mundo. Ela ri. Não olha para a grade nenhuma vez.", proxima: "c3_v01" },
    c3_3b_1: { tipo: "narracao", texto: "Ela olha para ele. Do muro até a grade, atravessando o pátio. Ele demora a perceber. Quando percebe, olha de volta. Ela não sorri. Não fala. Ele também não. Ele só balança a cabeça, bem de leve, uma vez, como quem diz “eu sei”. Ela não sabe o que ele sabe.", proxima: "c3_v01" },
    c3_3c_1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Você não precisa subir.", proxima: "c3_3c_2" },
    c3_3c_2: { tipo: "narracao", texto: "Na grade, ela vê ele pegar o celular. Ler. A Serena olha para a tela por cima do ombro dele, rápido. Ele bloqueia o celular. Digita outra coisa depois, sem ela ver o que.", proxima: "c3_3c_3" },
    c3_3c_3: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu sei. Eu não sei como não subir.", proxima: "c3_v01" },

    // A SN puxa o Kaito pro canto, na frente da Serena
    c3_v01: { tipo: "narracao", sprite: "serena", texto: "Faltam dois minutos para o sinal. Na grade, a Serena ainda está segurando a manga dele, falando da música, rindo com as amigas. E ela não aguenta mais.", proxima: "c3_v02" },
    c3_v02: { tipo: "narracao", sprite: "kaito", texto: "Ela atravessa o pátio. Passa pelo meio das amigas da Serena, que param de rir. E para na frente dele. Na frente dela.", proxima: "c3_v03" },
    c3_v03: { quem: "eu", texto: "Kaito. Vem cá. Um minuto.", proxima: "c3_v04" },
    c3_v04: { quem: "serena", sprite: "serena", texto: "Ai, SN... a gente tá conversando sobre a música. Pode ser depois?", proxima: "c3_v05" },
    c3_v05: { tipo: "narracao", sprite: "kaito", texto: "Ela não responde a Serena. Segura o pulso dele, com cuidado, muito cuidado, porque se apertar um pouco mais alguma coisa quebra. E puxa ele para o canto, atrás da árvore, longe da grade.", proxima: "c3_v06" },
    c3_v06: { tipo: "narracao", texto: "Ele vem. Não puxa o braço de volta. Lá da grade, a Serena fica olhando. Não pisca.", proxima: "c3_v07" },
    c3_v07: { quem: "eu", texto: "Vira homem, Kaito.", proxima: "c3_v08" },
    c3_v08: { quem: "eu", texto: "Se você subir nesse palco, é porque você não tem capacidade de tomar as próprias decisões. Esse seu lado eu não conhecia.", proxima: "c3_v09" },
    c3_v09: { tipo: "narracao", texto: "Ela abaixa a voz. Baixo o bastante para ninguém mais ouvir a parte seguinte.", proxima: "c3_v10" },
    c3_v10: { quem: "eu", texto: "Se subir, sobe porque você quer. E não porque tem uma garotinha mandando no líder de uma gangue.", proxima: "c3_v11" },
    c3_v11: { tipo: "narracao", texto: "Ele fica parado. A boca abre. Fecha. Pela primeira vez desde que ela conhece ele, o Kaito não tem nada para dizer. Nem piada, nem desculpa. Ele só olha para ela como se tivesse levado um tapa.", proxima: "c3_v12" },
    c3_v12: { quem: "kaito", texto: "...Eu sei decidir.", proxima: "c3_v13" },
    c3_v13: { quem: "eu", texto: "Então decide.", proxima: "c3_v14" },
    c3_v14: { tipo: "narracao", sprite: null, texto: "Ela solta o pulso dele. Vira as costas. E volta para o muro do bebedouro sem olhar para trás. Atrás dela, a Serena chama o nome dele, com a voz doce de sempre.", proxima: "c3_22" },

    // (todas as opções continuam aqui)
    c3_22: { tipo: "narracao", texto: "O sinal toca. A Serena dá o braço para o Kaito para voltar para dentro, com o tornozelo enfaixado. Ele não dá o braço. Mas também não tira o dele quando ela segura.", proxima: "c4_01" },

    /* =================== CENA 4 — A FEIRA =================== */
    c4_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Quinta, 14h — Cena 4", sprite: null, texto: "Duas horas. A quadra está lotada. Cadeiras de plástico na frente, a escola inteira em pé atrás, a arquibancada cheia até o último degrau. Um palco de madeira montado na ponta da quadra, com uma cortina de TNT vermelho presa com fita e um varal de lâmpadas que pisca sem ninguém mandar.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "Num canto, atrás de uma mesa com um monte de botões, o Takeo, de fone gigante, com o braço de frango em cima dos botões e a cara de quem está pilotando um avião.", proxima: "c4_03" },
    c4_03: { tipo: "narracao", sprite: "mio", texto: "A Mio sobe no palco. Pega o microfone. E, na hora em que ela fala, a voz dela sai pela quadra inteira, alta, confiante, perfeita. A voz da rádio.", proxima: "c4_04" },
    c4_04: { quem: "mio", texto: "BOA TARDE, COLÉGIO! Bem-vindos à Feira de Talentos! Hoje nós temos música, mágica, imitação, dança, uma menina que equilibra três colheres no nariz, e, no número sete, o momento que todos vocês estão esperando!", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "A quadra inteira grita. Alguém na arquibancada começa a bater o pé e a gritar “CA-BO-DE-GUER-RA”. Ela afunda na cadeira de plástico até o queixo.", proxima: "c4_06" },
    c4_06: { tipo: "narracao", sprite: null, texto: "Número um: um menino do segundo ano que faz beatbox. Número dois: a menina das três colheres no nariz, que consegue, e é ovacionada como uma heroína nacional. Número três: uma dança de quatro meninas do primeiro ano que esquecem a coreografia na metade e continuam mesmo assim, rindo.", proxima: "c4_07" },
    c4_07: { quem: "mio", texto: "Número quatro! O Grande! O Incrível! O Ryujini! E o seu assistente, o Blake, que não leu o contrato!", proxima: "c4_08" },
    c4_08: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji entra no palco correndo, de cartola de papelão, e tropeça na fita da cortina. Levanta. Faz uma reverência. A cartola cai. Ele pega. O Blake entra atrás, devagar, de lenço vermelho, empurrando uma caixa de geladeira pintada de azul com estrelas de papel alumínio.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "A mágica da carta erra duas vezes. Na terceira, ele tira a carta da orelha do Blake, de novo, e a quadra aplaude. A mágica da moeda funciona. A da varinha que vira flor não funciona, a varinha continua sendo um cabo de vassoura, mas ele joga confete e ninguém percebe.", proxima: "c4_10" },
    c4_10: { quem: "ryuji", texto: "E agora! O grande final! Eu vou fazer o Blake! DESAPARECER!", proxima: "c4_11" },
    c4_11: { tipo: "narracao", texto: "O Blake entra na caixa de geladeira. Não cabe. Ele entra de lado. Ainda não cabe. Ele se agacha. A cabeça dele fica para fora em cima, os pés para fora embaixo. O Ryuji fecha a tampa por cima da cabeça dele com força, e a caixa inteira fica com um formato de Blake.", proxima: "c4_12" },
    c4_12: { quem: "ryuji", texto: "Abracadabra! Pirlimpimpim! Licitação de dois mil e nove!", proxima: "c4_13" },
    c4_13: { tipo: "narracao", texto: "Ele gira a caixa. A caixa não gira, porque tem um Blake dentro. Ele abre a tampa. O Blake ainda está lá, agachado, de lenço vermelho, olhando para a plateia.", proxima: "c4_14" },
    c4_14: { quem: "blake", sprite: "blake", texto: "...Eu desapareci?", proxima: "c4_15" },
    c4_15: { tipo: "narracao", sprite: null, texto: "A quadra vem abaixo. O Ryuji faz uma reverência como se tivesse sido o plano desde o começo. O Blake sai da caixa e faz uma reverência pequena também, sério, e é aplaudido de pé. A Hana, nos bastidores, anota “sucesso não planejado” na prancheta.", proxima: "c4_16" },
    c4_16: { quem: "mio", texto: "Número cinco! Ele imita qualquer um! Até você! Cuidado! O Victor!", proxima: "c4_17" },
    c4_17: { sprite: "victor", tipo: "narracao", texto: "O Victor entra com o pirulito na boca, tira o pirulito, e vira o inspetor geral. A voz, o apito imaginário, o jeito de bater palma, a frase “tudo aqui é da licitação”. O inspetor de verdade, no canto da quadra, de braços cruzados, ri sem querer e depois finge que tossiu.", proxima: "c4_18" },
    c4_18: { tipo: "narracao", texto: "Depois a professora de português. Depois o tio da cantina contando o troco. Depois o Ryuji pedindo bis no bebedouro. A quadra chora de rir. E no final, o Caramelo. A coceira da orelha com o pé, a cabeça inclinada, o latido. Ela ri tão alto que a Reina, do lado, dá um tapa no braço dela.", proxima: "c4_19" },
    c4_19: { tipo: "narracao", texto: "Quando acaba, o Victor faz uma reverência e, antes de sair, procura alguém na plateia. Acha ela. E faz, só para ela, rápido, a cara do Caramelo tentando entender a placa. Ela cobre a boca.", proxima: "c4_20" },
    c4_20: { sprite: "mio", quem: "mio", texto: "Número seis! Ela é da minha sala! Ninguém sabia que ela ia se inscrever! Nem eu! A Akane!", proxima: "c4_21" },
    c4_21: { sprite: "akane", tipo: "narracao", texto: "A Akane sobe no palco. Pequena. Com as mãos tremendo no microfone. A quadra faz aquele silêncio educado de quem não espera muita coisa. O Takeo aperta um botão. Uma música lenta começa a tocar.", proxima: "c4_22" },
    c4_22: { tipo: "narracao", texto: "E a Akane canta. E a quadra inteira para.", proxima: "c4_23" },
    c4_23: { tipo: "narracao", texto: "A voz dela é limpa, grande, maior do que ela, como se viesse de uma pessoa muito mais alta. Ninguém conversa. Ninguém tira foto. A menina das colheres coloca a mão no peito. A Mio, no canto do palco, fica com a boca aberta. O Ren, na arquibancada, levanta os olhos do livro.", proxima: "c4_24" },
    c4_24: { tipo: "narracao", texto: "Quando ela acaba, tem um segundo de silêncio. E depois a quadra inteira levanta.", proxima: "c4_25" },
    c4_25: { tipo: "pensamento", texto: "A Akane. A Akane quieta, que senta do lado do Ren e nunca fala nada. Ela estava guardando isso esse tempo todo.", proxima: "c4_26" },
    c4_26: { sprite: "mio", quem: "mio", texto: "Eu... eu estou chorando no microfone, desculpa. Gente. GENTE. A Akane!", proxima: "c4_27" },
    c4_27: { tipo: "narracao", texto: "A Mio respira. Olha para a prancheta da Hana, que alguém passou para ela. Olha para a plateia. E sorri um sorriso que a SN conhece muito bem. O sorriso de quem vai fazer uma coisa terrível com uma amiga.", proxima: "c4_28" },
    c4_28: { quem: "mio", texto: "E AGORA! O NÚMERO SETE! O MOMENTO MAIS ESPERADO DA TARDE! A MENINA DO CABO DE GUERRA!", proxima: "c5_01" },

    /* =================== CENA 5 — QUEDA DE BRAÇO =================== */
    c5_01: { tipo: "narracao", transicao: "tempo", legenda: "Número sete — Cena 5", sprite: null, texto: "A quadra explode. A arquibancada bate o pé. “CA-BO-DE-GUER-RA. CA-BO-DE-GUER-RA.” Ela sobe no palco com a perna mole, com a sensação de quem está indo para a forca.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", texto: "No meio do palco, a mesa de ferro do refeitório que a Hana mandou trazer, com duas cadeiras. A Hana, do lado do palco, faz um sinal de positivo, com a cara mais séria do universo.", proxima: "c5_03" },
    c5_03: { caminhos: [
      { flag: "Musica_epica", proxima: "c5_03a" },
      { flag: "Musica_calma", proxima: "c5_03b" }
    ], proxima: "c5_03c" },
    c5_03a: { tipo: "narracao", texto: "O Takeo aperta um botão. Uma música épica, de filme de guerra, com coral e tambor, começa a tocar tão alto que as lâmpadas do varal piscam. A quadra vai à loucura. Ela quer morrer.", proxima: "c5_04" },
    c5_03b: { tipo: "narracao", texto: "O Takeo aperta um botão. Uma flauta. Calma. Muito calma. A música do CD da avó dele. A quadra inteira para de gritar, confusa. Alguém boceja. Ela sente os ombros descendo, um centímetro de cada vez.", proxima: "c5_04" },
    c5_03c: { tipo: "narracao", texto: "O Takeo, sem instrução nenhuma, aperta o primeiro botão que vê. Sai a música do elevador do hospital, que ele claramente gravou ontem. Ninguém entende nada. Ela agradece por dentro.", proxima: "c5_04" },
    c5_04: { quem: "mio", texto: "Quem tem coragem?! Quem vai enfrentar a Menina do Cabo de Guerra?! Levanta a mão!", proxima: "c5_05" },
    c5_05: { tipo: "narracao", texto: "Silêncio. A quadra inteira olhando em volta. Ninguém levanta a mão. O bolão no muro estava certo. Ninguém.", proxima: "c5_06" },
    c5_06: { tipo: "pensamento", texto: "Isso. Ninguém. Ninguém vai. Eu desço, a Mio faz uma piada, e acabou. Ninguém, por favor, ninguém.", proxima: "c5_07" },
    c5_07: { quem: "desconhecido", rotulo: "Menino do segundo ano", texto: "EU VOU!", proxima: "c5_08" },
    c5_08: { tipo: "narracao", texto: "Um menino do segundo ano, o maior do segundo ano, com o braço do tamanho da perna dela, levanta na terceira fila. A quadra grita. Ele sobe no palco batendo no peito, como lutador, e senta na cadeira da frente. Coloca o cotovelo na mesa de ferro. Abre a mão.", proxima: "c5_09" },
    c5_09: { tipo: "pensamento", texto: "Ok. Ok. Perde. Perde devagar. Faz força de mentira, faz careta de mentira, e deixa ele baixar o seu braço. Ele vai ficar feliz. Ninguém vai se machucar. Perde.", proxima: "c5_10" },
    c5_10: { tipo: "narracao", texto: "Ela senta. Coloca o cotovelo na mesa. Segura a mão dele. Com cuidado. Como quem segura um ovo.", proxima: "c5_11" },
    c5_11: { quem: "mio", texto: "Três... dois... um... JÁ!", proxima: "c5_12" },
    c5_12: { tipo: "narracao", texto: "Ele empurra. Com tudo. A cara dele fica vermelha. As veias do pescoço aparecem. Ele faz um barulho de esforço que a quadra inteira ouve.", proxima: "c5_13" },
    c5_13: { tipo: "narracao", texto: "O braço dela não se mexe. Nem um milímetro. Ela não está fazendo força. Ela está só segurando. E só segurar já é demais.", proxima: "c5_14" },
    c5_14: { tipo: "pensamento", texto: "Desce. Desce o braço. Deixa ele ganhar. Desce, braço. Por favor.", proxima: "c5_esc4" },

    // ▶ ESCOLHA 4 — A queda de braço
    c5_esc4: { escolhas: [
      { texto: "A. Fingir. Fazer uma careta enorme de esforço e deixar o braço cair devagar, muito teatral.", proxima: "c5_4a_1", pontos: { victor: 1 }, flags: ["Perdeu_teatral"] },
      { texto: "B. Relaxar a mão de uma vez. Simplesmente soltar.", proxima: "c5_4b_1", pontos: {}, flags: ["Soltou_braco"] },
      { texto: "C. Olhar pro Kaito na plateia pra se distrair.", proxima: "c5_4c_1", pontos: { kaito: 2 }, flags: ["Distraiu_Kaito"] }
    ]},
    c5_4a_1: { tipo: "narracao", texto: "Ela faz uma careta enorme. Morde o lábio. Faz um barulho de esforço que aprendeu vendo o Ryuji abrir pote de pepino. E deixa o braço descer, devagar, centímetro por centímetro, tremendo de mentira.", proxima: "c5_4a_2" },
    c5_4a_2: { tipo: "narracao", texto: "É a atuação mais exagerada da história da escola. Ela solta até um “aaaai” no final. As costas da mão dela encostam na mesa. O menino do segundo ano levanta os braços, vitorioso.", proxima: "c5_4a_3" },
    c5_4a_3: { tipo: "narracao", texto: "E, quando ele levanta os braços, ele tropeça para trás na cadeira, porque estava empurrando com tanta força que não esperava a vitória, e cai de bunda no palco, ainda com os braços para cima.", proxima: "c5_15" },
    c5_4b_1: { tipo: "narracao", texto: "Ela relaxa a mão de uma vez. Simplesmente solta. E o braço do menino, que estava empurrando com a força de um caminhão contra uma parede que de repente sumiu, vai com tudo para baixo.", proxima: "c5_4b_2" },
    c5_4b_2: { tipo: "narracao", texto: "Ele ganha. Ele ganha tão rápido e com tanta força que o corpo inteiro dele vai junto com o braço, por cima da mesa, e ele dá uma cambalhota completa por cima da mesa de ferro e cai sentado do outro lado, do lado dela, piscando.", proxima: "c5_4b_3" },
    c5_4b_3: { quem: "desconhecido", rotulo: "Menino do segundo ano", texto: "...Eu ganhei?", proxima: "c5_15" },
    c5_4c_1: { tipo: "narracao", texto: "Ela procura o Kaito na plateia para se distrair. Acha. Ele está em pé, no fundo, do lado da grade, com as mãos no bolso, olhando para ela. Sozinho. Sem a Serena do lado.", proxima: "c5_4c_2" },
    c5_4c_2: { tipo: "narracao", texto: "Ele levanta o polegar. Só isso. Um polegar para cima, pequeno, sem sorriso. E ela fica tão distraída com o polegar que esquece de segurar. O braço dela cai de uma vez na mesa. Clang.", proxima: "c5_4c_3" },
    c5_4c_3: { tipo: "narracao", texto: "O menino do segundo ano ganha sem entender como. Ele fica olhando para a própria mão, depois para a dela, depois para o fundo da quadra, procurando o que ela estava olhando.", proxima: "c5_15" },

    // (todas as opções continuam aqui)
    c5_15: { tipo: "narracao", texto: "A quadra explode de novo. O menino do segundo ano é carregado nos ombros pelos amigos, como campeão. A Mio grita “O DAVI VENCEU O GOLIAS!”, mesmo que ninguém tenha certeza de quem é quem.", proxima: "c5_16" },
    c5_16: { tipo: "narracao", texto: "Ela levanta da cadeira, aliviada, com as mãos tremendo. Apoia a mão na mesa de ferro para se equilibrar. Só um segundo.", proxima: "c5_17" },
    c5_17: { tipo: "narracao", efeito: "tremor", texto: "A mesa de ferro do refeitório faz um barulho de metal entortando. A perna do lado da mão dela dobra para dentro, devagar, como um joelho cansado. A mesa inteira inclina. Vai inclinando. E fica parada, torta, com uma perna dobrada, como um cachorro sentado.", proxima: "c5_18" },
    c5_18: { tipo: "narracao", texto: "A quadra fica em silêncio. Todo mundo olhando a mesa.", proxima: "c5_19" },
    c5_19: { tipo: "narracao", sprite: "hana", texto: "Do lado do palco, a Hana olha para a mesa. Olha para a prancheta. Risca alguma coisa. E levanta a voz, a única vez que a SN já ouviu a Hana levantar a voz.", proxima: "c5_20" },
    c5_20: { quem: "hana", texto: "A MESA ERA DA LICITAÇÃO! EU AVISEI NA REUNIÃO! ESTÁ NA ATA!", proxima: "c5_21" },
    c5_21: { quem: "desconhecido", rotulo: "Inspetor geral", sprite: null, texto: "Está na ata! Eu lembro! Eu falei pra diretora! Ninguém me escuta nessa escola!", proxima: "c5_22" },
    c5_22: { tipo: "narracao", texto: "A quadra ri. Aplaude a mesa. Alguém grita “LICITAÇÃO!” e a arquibancada inteira repete, como coro de estádio. “LI-CI-TA-ÇÃO. LI-CI-TA-ÇÃO.”", proxima: "c5_23" },
    c5_23: { tipo: "narracao", texto: "Ela desce do palco, vermelha até o pescoço, e passa do lado da Hana. A Hana não olha para ela. Só fala, baixinho, olhando a prancheta.", proxima: "c5_24" },
    c5_24: { quem: "hana", texto: "A ata não existe. Eu inventei agora. De nada.", proxima: "c5_25" },
    c5_25: { tipo: "pensamento", texto: "A Hana sabe. Ou a Hana não sabe e só é a Hana. Eu nunca vou descobrir qual dos dois. E eu amo ela por isso.", proxima: "c6_01" },

    /* =================== CENA 6 — O DUETO =================== */
    c6_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Número doze — Cena 6", sprite: null, texto: "Os números oito, nove, dez e onze passam como borrão. Um menino que toca violão. Uma dupla de dança. Um poema. Um menino que faz cubo mágico de olho fechado. Ela não vê nada. Ela está olhando para a lateral do palco.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", sprite: "serena", texto: "Lá, atrás da cortina de TNT, a Serena. Com o cabelo arrumado, um laço novo, as amigas em volta passando batom nela. E, do lado, o Kaito, encostado na parede, com as mãos no bolso, com a cara de quem está esperando para tirar sangue.", proxima: "c6_03" },
    c6_03: { quem: "mio", sprite: "mio", texto: "Número doze...", proxima: "c6_04" },
    c6_04: { tipo: "narracao", texto: "A Mio para. Olha a prancheta. Olha para a SN na plateia. A voz da rádio dela fica, pela primeira vez na tarde, um pouco menos animada.", proxima: "c6_05" },
    c6_05: { quem: "mio", texto: "...Um dueto. Serena e Kaito.", proxima: "c6_06" },
    c6_06: { tipo: "narracao", sprite: "serena", texto: "A quadra faz “uuuuuh”. A Serena sobe no palco sozinha, mancando de leve, com o microfone na mão, sorrindo, acenando para as amigas. Para no meio do palco. Vira para a lateral. Estende a mão.", proxima: "c6_07" },
    c6_07: { quem: "serena", texto: "Kaito? Vem? Eu não consigo sozinha...", proxima: "c6_08" },
    c6_08: { tipo: "narracao", sprite: null, texto: "A quadra inteira vira para a lateral do palco. Para o Kaito, encostado na parede. Alguém começa a gritar o nome dele. Depois mais gente. “KAI-TO. KAI-TO.” A arquibancada que, meia hora atrás, gritava cabo de guerra.", proxima: "c6_09" },
    c6_09: { tipo: "narracao", texto: "Ela fica sentada na cadeira de plástico, com as mãos embaixo das coxas, apertando as próprias pernas para não apertar mais nada.", proxima: "c6_10" },
    c6_10: { tipo: "pensamento", texto: "Ele não vai subir. Ele não sabe cantar. Ele falou que não se inscreveu. Na frente de todo mundo, ele falou. Ele não vai.", proxima: "c6_11" },
    c6_11: { tipo: "pensamento", texto: "“Eu não sei como não subir.”", proxima: "c6_11b" },
    c6_11b: { tipo: "pensamento", texto: "“Então decide.” Eu falei. Na frente dela. Agora ele vai decidir na frente da escola inteira.", proxima: "c6_12" },
    c6_12: { tipo: "narracao", sprite: "kaito", texto: "O Kaito desencosta da parede. Devagar. A quadra grita. Ele sobe os três degraus do palco, com as mãos ainda no bolso. Para do lado da Serena. Não pega o microfone que ela estende. Não pega a mão dela.", proxima: "c6_13" },
    c6_13: { tipo: "narracao", texto: "O Takeo, na mesa de som, olha para a SN. Olha para o botão. Demora. A Reina, do lado dele, cutuca o braço bom dele. Ele aperta, com a cara de quem está fazendo uma coisa errada.", proxima: "c6_14" },
    c6_14: { tipo: "narracao", sprite: "serena", texto: "Uma música romântica famosa, dessas que todo mundo conhece o refrão, começa a tocar. A Serena canta. A voz dela é bonita. Afinada, doce, ensaiada. Ela canta olhando para o Kaito, virada de lado, com a mão estendida na direção dele em todas as partes mais românticas.", proxima: "c6_15" },
    c6_15: { tipo: "narracao", sprite: "kaito", texto: "O Kaito não canta. Ele fica em pé do lado dela, parado, com as mãos no bolso. Na hora do refrão, ela estica o microfone para ele. Ele balança a cabeça. A quadra ri, achando fofo. “Ele é tímido!”, alguém grita. A Serena ri também, com a mão no peito, e canta o refrão sozinha, olhando para ele.", proxima: "c6_16" },
    c6_16: { tipo: "narracao", texto: "E ele não está olhando para ela. Ele está olhando para a plateia. Procurando. Ela sabe quem ele está procurando. E ela não deixa ele achar. Ela abaixa a cabeça.", proxima: "c6_17" },
    c6_17: { tipo: "narracao", sprite: null, texto: "A cadeira de plástico embaixo dela estala. Uma perna. Depois outra. Ela sente a cadeira afundando, devagar, como um elevador descendo um andar.", proxima: "c6_esc5" },

    // ▶ ESCOLHA 5 — A cadeira
    c6_esc5: { escolhas: [
      { texto: "A. Levantar antes da cadeira quebrar. Sair da quadra. Agora.", proxima: "c6_5a_1", pontos: {}, flags: ["Saiu_dueto"] },
      { texto: "B. Ficar. Sentada. Assistir até o fim. Ela não vai fugir da Serena.", proxima: "c6_5b_1", pontos: {}, flags: ["Ficou_dueto"] },
      { texto: "C. Levantar a cabeça. Deixar ele achar ela na plateia.", proxima: "c6_5c_1", pontos: { kaito: 3 }, flags: ["Deixou_achar"] }
    ]},
    c6_5a_1: { tipo: "narracao", texto: "Ela levanta. A cadeira termina de afundar sozinha atrás dela, as quatro pernas abrindo para os lados como uma estrela-do-mar, com um barulho de plástico que ninguém ouve por causa da música.", proxima: "c6_5a_2" },
    c6_5a_2: { tipo: "narracao", texto: "Ela sai da quadra pelo corredor lateral, de cabeça baixa. Quando ela passa pela porta, a música chega no último refrão. Ela não vê o fim. Ela não vê o Kaito virar a cabeça na direção da porta.", proxima: "c6_18" },
    c6_5b_1: { tipo: "narracao", texto: "Ela fica. A cadeira termina de afundar e ela termina sentada quase no chão, com as pernas da cadeira abertas em volta dela como uma estrela-do-mar. Ela não levanta. Ela assiste dali, de baixo, de braços cruzados, até o fim.", proxima: "c6_5b_2" },
    c6_5b_2: { tipo: "narracao", texto: "A Reina, do lado, olha para ela no chão. Não fala nada. Senta no chão também, do lado dela, de braços cruzados, de solidariedade. Depois a Mio desce do palco e senta do outro lado. As três no chão, assistindo, de cara fechada, como júri.", proxima: "c6_18" },
    c6_5c_1: { tipo: "narracao", texto: "Ela levanta a cabeça. Ele está procurando. Ele acha. No meio do refrão, no meio da plateia, com a Serena cantando para ele, ele acha ela, sentada numa cadeira que está quebrando.", proxima: "c6_5c_2" },
    c6_5c_2: { tipo: "narracao", texto: "E ele não desvia mais. A música inteira, até o fim, ele fica olhando para ela. A Serena canta para ele. Ele olha para a SN. E ninguém na quadra percebe, porque todo mundo está olhando para a Serena. Só ela percebe. E a Serena.", proxima: "c6_18" },

    // (todas as opções continuam aqui)
    c6_18: { tipo: "narracao", sprite: "serena", texto: "A música acaba. A Serena faz uma reverência. E, na hora de levantar, ela se apoia no braço do Kaito, como quem perdeu o equilíbrio por causa do tornozelo, e encosta a cabeça no ombro dele. Na frente da escola inteira. Um segundo. Dois.", proxima: "c6_19" },
    c6_19: { tipo: "narracao", sprite: null, texto: "A quadra explode. “AAAAWN.” Assobios. Alguém grita “CASAL!”. Outra pessoa grita “BEIJA!”. As amigas da Serena tiram foto atrás de foto. O flash pisca. O Kaito fica parado, com a Serena no ombro, com a cara de quem está sendo atropelado em câmera lenta.", proxima: "c6_20" },
    c6_20: { tipo: "narracao", texto: "Ele tira a Serena do ombro. Devagar. Sem empurrar. Só tira, segurando ela pelos dois braços e colocando ela em pé, como quem endireita uma placa. Fala alguma coisa baixo, que ninguém ouve. E desce do palco sozinho, pela lateral, sem olhar para ninguém.", proxima: "c6_21" },
    c6_21: { tipo: "narracao", texto: "A Serena fica no palco sozinha. Sorrindo. Acenando. Como se tivesse sido o plano desde o começo. E talvez tenha sido.", proxima: "c6_22" },
    c6_22: { tipo: "pensamento", texto: "Ele subiu. Ele não cantou. Ele não pegou a mão dela. Ele tirou ela do ombro. Ele desceu sozinho.", proxima: "c6_23" },
    c6_23: { tipo: "pensamento", texto: "Mas a escola inteira viu ele subir. E a escola inteira tem foto dela no ombro dele. Amanhã ninguém vai lembrar que ele não cantou. Só vão lembrar da foto.", proxima: "c6_24" },
    c6_24: { tipo: "pensamento", texto: "Ela ganhou essa. Sem falar uma palavra pra mim. Ela ganhou.", proxima: "c6_25" },
    c6_25: { quem: "mio", sprite: "mio", texto: "E... o vencedor da Feira de Talentos, pela votação dos professores... é a AKANE!", proxima: "c6_26" },
    c6_26: { tipo: "narracao", sprite: "akane", texto: "A quadra levanta de novo. A Akane sobe no palco tremendo, chorando, segurando um troféu de plástico dourado que alguém comprou na papelaria. Ela olha para a plateia, procurando alguém. Acha. A SN segue o olhar dela até a arquibancada.", proxima: "c6_27" },
    c6_27: { sprite: "ren", tipo: "narracao", texto: "O Ren. Em pé, na última fila da arquibancada, com o livro fechado debaixo do braço. Ele não está aplaudindo. Mas ele faz que sim, uma vez, devagar, para a Akane. E a Akane sorri para ele como se aquele sim valesse mais que o troféu.", proxima: "c6_28" },
    c6_28: { tipo: "pensamento", texto: "...Desde quando a Akane e o Ren?", proxima: "c6_29" },
    c6_29: { sprite: null, tipo: "narracao", texto: "Ela não tem tempo de pensar nisso. O celular vibra no bolso.", proxima: "c6_30" },
    c6_30: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu fui pro estacionamento. Eu não aguento a quadra agora.", proxima: "c6_31" },
    c6_31: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu falei pra ela que foi a última vez. No palco. Eu falei baixo. Eu não sei se ela ouviu.", proxima: "c6_32" },
    c6_32: { tipo: "pensamento", texto: "Ela ouviu. Ela sempre ouve. Ela só escolhe o que vai lembrar.", proxima: "c7_01" },

    /* =================== CENA 7 — DEPOIS DA FEIRA =================== */
    c7_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Saída — Cena 7", sprite: null, texto: "Na saída, todo mundo está falando de três coisas. A Akane. O Blake que não desapareceu. E o casal do dueto. Ela ouve “casal do dueto” sete vezes até chegar no portão. Ela conta.", proxima: "c7_02" },
    c7_02: { tipo: "narracao", texto: "Ninguém fala da mesa de ferro. A mesa de ferro já virou licitação.", proxima: "c7_03" },
    c7_03: { tipo: "narracao", sprite: "kaito", texto: "Do outro lado da rua, a moto. O Kaito sentado nela, sem capacete, olhando para o chão. Sozinho. A Serena não está em nenhum lugar. As amigas dela também não.", proxima: "c7_04" },
    c7_04: { tipo: "narracao", texto: "Ele levanta a cabeça quando ela sai. Não levanta da moto. Não estende o capacete. Ele só olha. Com a cara de quem perdeu alguma coisa e não sabe onde.", proxima: "c7_esc6" },

    // ▶ ESCOLHA 6 — Depois da feira
    c7_esc6: { escolhas: [
      { texto: "A. Atravessar. Sentar na garupa sem falar nada. Ele que leve.", proxima: "c7_6a_1", pontos: { kaito: 3 }, flags: ["Garupa_feira"] },
      { texto: "B. Atravessar. “Você subiu.” Esperar ele responder.", proxima: "c7_6b_1", pontos: { kaito: 2 }, flags: ["Voce_subiu"] },
      { texto: "C. Não atravessar. Ir a pé com a Mio. Hoje ela não consegue.", proxima: "c7_6c_1", pontos: {}, flags: ["Nao_atravessou_feira"] }
    ]},
    c7_6a_1: { tipo: "narracao", texto: "Ela atravessa a rua. Pega o capacete vermelho do guidão. Coloca. Fecha a fivela sozinha. E senta na garupa sem falar nada.", proxima: "c7_6a_2" },
    c7_6a_2: { tipo: "narracao", texto: "Ele fica parado um tempo, sem ligar a moto. Depois liga. No caminho, ela não segura na cintura nem na camisa. Segura no banco. Ele percebe. No primeiro sinal vermelho, ele fala, sem virar.", proxima: "c7_6a_3" },
    c7_6a_3: { quem: "kaito", texto: "Desculpa. Por ter subido.", proxima: "c7_6a_4" },
    c7_6a_4: { tipo: "narracao", texto: "Ela não responde. O sinal fica verde. Ele anda. Ela continua segurando no banco até o hall.", proxima: "r_cam" },
    c7_6b_1: { tipo: "narracao", texto: "Ela atravessa a rua. Para na frente da moto.", proxima: "c7_6b_2" },
    c7_6b_2: { quem: "eu", texto: "Você subiu.", proxima: "c7_6b_3" },
    c7_6b_3: { quem: "kaito", texto: "Eu subi. Eu fiquei com vergonha de deixar ela lá sozinha, na frente de todo mundo, chorando. E eu fiquei com mais vergonha ainda de subir. Eu fiquei com vergonha das duas coisas ao mesmo tempo, e escolhi a errada.", proxima: "c7_6b_4" },
    c7_6b_4: { quem: "kaito", texto: "Eu falei pra ela que foi a última vez. Eu vou ter que falar de novo. Mais alto. Eu sei.", proxima: "c7_6b_5" },
    c7_6b_5: { quem: "eu", texto: "Sabe, mas não fala.", proxima: "c7_6b_6" },
    c7_6b_6: { tipo: "narracao", texto: "Ele não responde. Porque é verdade. Ela vai embora a pé. Ele deixa.", proxima: "r_cam" },
    c7_6c_1: { tipo: "narracao", sprite: "mio", texto: "Ela não atravessa. A Mio segura o braço dela e as duas viram para a direita, a pé. Ela não olha para a moto. A Mio olha, e não fala nada sobre o que viu.", proxima: "c7_6c_2" },
    c7_6c_2: { quem: "mio", texto: "Eu vou falar uma coisa e depois eu nunca mais vou falar. A Serena canta bem. E ainda assim foi a pior apresentação da tarde. Pior que o menino do poema. E o poema rimava “escola” com “sacola”.", proxima: "r_cam" },

    /* =================== ROTA — QUINTA À NOITE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quinta, 22h", sprite: null, texto: "Dez da noite. A rede de fofoca está cheia de foto. A Serena com a cabeça no ombro dele. Em todos os ângulos. Ela não abre nenhuma. Mas vê as miniaturas passando, uma atrás da outra.", proxima: "rk_02" },
    rk_02: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu não sei cantar. Mas eu vou te falar uma coisa que eu ia cantar, se eu soubesse.", proxima: "rk_03" },
    rk_03: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "No palco, eu fiquei procurando você o tempo inteiro. Você estava numa cadeira quebrando. Foi a única coisa que eu vi a música inteira.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. “Eu vi você procurando.”", proxima: "rk_a1", pontos: { kaito: 3 }, flags: ["Vi_procurando"] },
      { texto: "B. “A escola inteira viu ela no seu ombro. Ninguém viu você procurando.”", proxima: "rk_b1", pontos: { kaito: 2 }, flags: ["Ninguem_viu"] },
      { texto: "C. “Fala mais alto da próxima vez, Kaito. Pra ela. Não pra mim.”", proxima: "rk_c1", pontos: { kaito: 3 }, flags: ["Fala_alto"] }
    ]},
    rk_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu vi você procurando.", proxima: "rk_a2" },
    rk_a2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Então valeu alguma coisa. Pelo menos uma pessoa viu o que aconteceu de verdade.", proxima: "r_fim" },
    rk_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "A escola inteira viu ela no seu ombro. Ninguém viu você procurando.", proxima: "rk_b2" },
    rk_b2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu sei. Eu fico deixando ela escrever a história, e eu só fico parado do lado. Eu tenho que parar de ficar parado.", proxima: "r_fim" },
    rk_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Fala mais alto da próxima vez, Kaito. Pra ela. Não pra mim.", proxima: "rk_c2" },
    rk_c2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Tá. Mais alto. Pra ela. Amanhã. Eu prometo. E eu estou parando de prometer coisa que eu não faço. Então dessa vez é sério.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quinta, 20h", sprite: null, texto: "Às oito, o Takeo manda uma mensagem.", proxima: "rt_02" },
    rt_02: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Eu demorei pra apertar o botão do dueto. A Reina me cutucou. Eu não queria apertar. Eu fiquei olhando pra você na plateia e eu não queria apertar.", proxima: "rt_03" },
    rt_03: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Desculpa ter apertado. E desculpa ter demorado. As duas coisas.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. “Você não tinha que pedir desculpa por nada, Takeo.”", proxima: "rt_a1", pontos: { takeo: 3 }, flags: ["Sem_desculpa_Takeo"] },
      { texto: "B. “Eu vi você demorando. Foi a coisa mais bonita da feira.”", proxima: "rt_b1", pontos: { takeo: 4 }, flags: ["Demora_bonita"] },
      { texto: "C. “A sua música da queda de braço salvou a minha vida.”", proxima: "rt_c1", pontos: { takeo: 3 }, flags: ["Musica_salvou"] }
    ]},
    rt_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Você não tinha que pedir desculpa por nada, Takeo.", proxima: "rt_a2" },
    rt_a2: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Eu sei. Eu peço mesmo assim. É de família. A minha avó pede desculpa pra cadeira quando bate o pé.", proxima: "r_fim" },
    rt_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu vi você demorando. Foi a coisa mais bonita da feira.", proxima: "rt_b2" },
    rt_b2: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Mais bonita que a Akane cantando?", proxima: "rt_b3" },
    rt_b3: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Mais bonita.", proxima: "rt_b4" },
    rt_b4: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "...Eu vou dormir agora antes que eu fale alguma besteira. Boa noite. Sábado. O nó.", proxima: "r_fim" },
    rt_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "A sua música da queda de braço salvou a minha vida.", proxima: "rt_c2" },
    rt_c2: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Eu sabia que ia salvar. Eu escolhi ela por quarenta minutos. Foi o melhor trabalho da minha vida.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quinta, 21h", sprite: null, texto: "Às nove, uma mensagem do Blake. Uma foto. Ele, de lenço vermelho, dentro da caixa de geladeira, com a cabeça para fora em cima. Embaixo, a mensagem.", proxima: "rb_02" },
    rb_02: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "O Ryuji imprimiu essa foto e colou na geladeira da casa dele. Com um ímã. Ele diz que é a primeira vez que ele faz alguém desaparecer.", proxima: "rb_03" },
    rb_03: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "A mesa de ferro. Eu estava do lado do palco. Eu vi a sua mão. Eu não vou falar nada. A Hana também viu. Ela também não vai falar.", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. “Obrigada, Blake. Por não falar.”", proxima: "rb_a1", pontos: { blake: 3 }, flags: ["Nao_falar_Blake"] },
      { texto: "B. “Você ficou lindo de lenço vermelho.”", proxima: "rb_b1", pontos: { blake: 4 }, flags: ["Lenco_Blake"] },
      { texto: "C. “Você desapareceu sim. Um pouco.”", proxima: "rb_c1", pontos: { blake: 3 }, flags: ["Desapareceu_pouco"] }
    ]},
    rb_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Obrigada, Blake. Por não falar.", proxima: "rb_a2" },
    rb_a2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Não tem o que falar. Você é forte. Eu também sou. A diferença é que eu não quebro mesa.", proxima: "r_fim" },
    rb_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Você ficou lindo de lenço vermelho.", proxima: "rb_b2" },
    rb_b2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu vou guardar o lenço.", proxima: "r_fim" },
    rb_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Você desapareceu sim. Um pouco.", proxima: "rb_c2" },
    rb_c2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Não fala isso pro Ryuji. Ele vai querer fazer de novo. Com uma caixa de fogão.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quinta, 20h30", sprite: null, texto: "Às oito e meia, a Relâmpago buzina lá embaixo. Ela vai até a janela. O Ryuji, de cartola de papelão, segurando a varinha de cabo de vassoura.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", sprite: "ryuji", texto: "O Grande Ryujini faz uma apresentação particular! Só pra você! Truque novo! Eu vou fazer a sua tristeza desaparecer! Desce!", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. Descer e assistir o truque.", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Truque_particular"] },
      { texto: "B. “E se não funcionar?”", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Se_nao_funcionar"] },
      { texto: "C. Gritar da janela: “Faz o Blake desaparecer de novo!”", proxima: "rr_c1", pontos: { ryuji: 2 }, flags: ["Blake_de_novo"] }
    ]},
    rr_a1: { tipo: "narracao", cenario: "frente-casa-sn-noite", texto: "Ela desce. Ele faz ela fechar os olhos. Fala “abracadabra, licitação”. Ela abre. Na mão dele, um pirulito de morango, que ele claramente roubou do Victor. Ela ri. Ele aponta para a cara dela, triunfante.", proxima: "rr_a2" },
    rr_a2: { quem: "ryuji", texto: "Viu?! Sumiu! A tristeza! Eu sou mágico de verdade! Funcionou duas vezes hoje! É um recorde!", proxima: "r_fim" },
    rr_b1: { quem: "eu", texto: "E se não funcionar?", proxima: "rr_b2" },
    rr_b2: { quem: "ryuji", texto: "Aí eu continuo tentando até funcionar! O Ryujini não desiste! O Ryujini tem a noite inteira e uma bicicleta!", proxima: "r_fim" },
    rr_c1: { quem: "eu", texto: "Faz o Blake desaparecer de novo!", proxima: "rr_c2" },
    rr_c2: { quem: "ryuji", texto: "Eu tentei! Ele não quer entrar na caixa de fogão! Ele diz que tem dignidade! Eu não sabia que o Blake tinha dignidade!", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quinta, 21h", sprite: null, texto: "Às nove, o Victor manda um áudio. Ela aperta o play. É a voz dela. Ou quase. A voz dela fazendo “aaaai” no final da queda de braço, imitada com perfeição assustadora.", proxima: "rv_02" },
    rv_02: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Eu ensaiei. Eu vou fazer na próxima feira. A Menina do Cabo de Guerra perdendo de mentira. É a melhor atuação que eu já vi.", proxima: "rv_03" },
    rv_03: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Eu fiz a cara do Caramelo pra você no palco. Você viu? Eu fiz só pra você. Ninguém mais sabia que era pra você.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. “Eu vi. Foi a melhor parte da tarde.”", proxima: "rv_a1", pontos: { victor: 4 }, flags: ["Melhor_parte_Victor"] },
      { texto: "B. “Se você imitar o meu “aaaai” eu quebro uma mesa em você.”", proxima: "rv_b1", pontos: { victor: 3 }, flags: ["Ameaca_mesa"] },
      { texto: "C. “Victor. Imita você mesmo. Como você é quando ninguém está olhando.”", proxima: "rv_c1", pontos: { victor: 4 }, flags: ["Imita_voce"] }
    ]},
    rv_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu vi. Foi a melhor parte da tarde.", proxima: "rv_a2" },
    rv_a2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Melhor que a Akane? Não responde. Eu prefiro não saber. Eu vou dormir achando que sim.", proxima: "r_fim" },
    rv_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Se você imitar o meu “aaaai” eu quebro uma mesa em você.", proxima: "rv_b2" },
    rv_b2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Licitação. Ninguém ia desconfiar. É o crime perfeito. Eu fico com medo e apaixonado ao mesmo tempo. Quer dizer. Com medo. Só com medo. Boa noite.", proxima: "r_fim" },
    rv_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Victor. Imita você mesmo. Como você é quando ninguém está olhando.", proxima: "rv_c2" },
    rv_c2: { tipo: "narracao", texto: "Digitando. Para. Digitando. Para. Cinco minutos. Depois um áudio de três segundos. Ela aperta o play. Silêncio. Só a respiração dele. E, no final, bem baixinho, um “...assim”.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quinta, 23h30", sprite: null, texto: "Quase meia-noite. Ela faz a lista de novo, no escuro.", proxima: "f_02" },
    f_02: { tipo: "pensamento", texto: "Uma mesa de ferro. Uma cadeira de plástico. Um pedaço do muro do bebedouro. Um menino do segundo ano com uma cambalhota, ou de bunda no chão, ou sem entender nada.", proxima: "f_03" },
    f_03: { tipo: "pensamento", texto: "A Akane canta. O Blake não desaparece. A Hana inventa uma ata. A Mio chora no microfone.", proxima: "f_04" },
    f_04: { tipo: "pensamento", texto: "E a Serena no palco, com a cabeça no ombro dele, e a escola inteira gritando “casal”. Ela não precisou me falar nada. Ela só subiu num palco e esperou ele não saber dizer não.", proxima: "f_05" },
    f_05: { tipo: "pensamento", texto: "Ele subiu. Ele não cantou. Ele procurou por mim. Ele tirou ela do ombro. Ele desceu sozinho.", proxima: "f_06" },
    f_06: { tipo: "pensamento", texto: "Eu não sei se isso conta como perder ou como ganhar. Eu acho que conta como ele ainda não ter decidido.", proxima: "f_07" },
    f_07: { tipo: "narracao", texto: "Ela vira de lado. Lembra da Akane procurando alguém na arquibancada. Lembra do Ren fazendo que sim, devagar, uma vez. E pensa, antes de dormir, que tem muita coisa acontecendo na escola que ela não está vendo.", proxima: "ep_fim" },

    // Fim do Capítulo 46 (crie a entrada "capitulo46" em dados/capitulos.js).
    ep_fim: { fim: "capitulo46" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 47 (anotações do roteiro)
 *  • FEIRA DE TALENTOS (quinta, 14h, quadra). Apresentadora: MIO (voz da rádio). Som: TAKEO. Comissão: REINA. Bastidores: HANA.
 *  • Nº 7 — QUEDA DE BRAÇO: a rede inscreveu a SN ("A Menina do Cabo de Guerra", 63 assinaturas; a Mio assinou uma vez).
 *    Desafiante: o maior menino do segundo ano. Ela perdeu de propósito (teatral / soltou e ele deu cambalhota / distraída
 *    com o polegar do Kaito). Depois, sem querer, entortou a perna da MESA DE FERRO. A Hana: "A MESA ERA DA LICITAÇÃO!
 *    ESTÁ NA ATA!" — "A ata não existe. Eu inventei agora. De nada." O Blake e a Hana viram a mão dela (rota Blake).
 *  • Nº 4 — RYUJINI (mágico) + BLAKE (assistente de lenço vermelho, "contrato num guardanapo"). Não desapareceu: "...Eu desapareci?"
 *  • Nº 5 — VICTOR: imitações (inspetor, professora, tio da cantina, Ryuji no bebedouro, Caramelo). Cara do Caramelo só pra ela.
 *  • Nº 6 — AKANE canta e VENCE. Ela procurou o REN na arquibancada; ele fez que sim. "Desde quando a Akane e o Ren?"
 *  • Nº 12 — DUETO: a SERENA inscreveu "Serena & Kaito" sem perguntar. "Eu não me inscrevi." / "Você não vai me deixar sozinha
 *    no palco, vai?" A quadra gritou o nome dele. ELE SUBIU. Não cantou, não pegou a mão dela, ficou procurando a SN na plateia.
 *    No fim, a Serena encostou a cabeça no ombro dele (fotos, "CASAL!", "BEIJA!"). Ele tirou ela do ombro, falou baixo que
 *    "foi a última vez" e desceu sozinho. A escola só lembra da foto. A SERENA GANHOU ESSE ROUND.
 *  • A força: muro do bebedouro esfarelando, mesa de ferro, cadeira de plástico (estrela-do-mar). Tudo "licitação".
 *  • Saída: o Kaito sozinho na moto. Garupa em silêncio ("Desculpa. Por ter subido.") / "Você subiu." / a pé com a Mio.
 *  • Rota Kaito: "Eu fiquei procurando você o tempo inteiro." Opção C: ele promete falar mais alto pra Serena amanhã.
 *  • Sábado: o nó do balanço do Takeo (rotas anteriores). A lan do sábado (se Treinar_lan).
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 O hall · 2 A música de luta · 3 No muro · 4 A queda de braço · 5 A cadeira · 6 Depois da feira · Rota (1 por rota)
 *
 * FLAGS NOVAS
 *  Ela_disse_posso · Fivela_sozinha_quinta · Azulejos_a_pe · Musica_epica · Musica_calma · Corta_som
 *  Nao_olhou_dueto · Olhou_Kaito_dueto · Nao_precisa_subir · Perdeu_teatral · Soltou_braco · Distraiu_Kaito
 *  Saiu_dueto · Ficou_dueto · Deixou_achar · Garupa_feira · Voce_subiu · Nao_atravessou_feira
 *  Vi_procurando · Ninguem_viu · Fala_alto · Sem_desculpa_Takeo · Demora_bonita · Musica_salvou
 *  Nao_falar_Blake · Lenco_Blake · Desapareceu_pouco · Truque_particular · Se_nao_funcionar · Blake_de_novo
 *  Melhor_parte_Victor · Ameaca_mesa · Imita_voce
 */