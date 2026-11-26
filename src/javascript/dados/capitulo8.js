/*
 * =====================================================================
 *  CAPÍTULO 8 — 21h14
 *  Começa uma semana depois do Capítulo 7, com um resumo rápido da semana.
 *  Depois: quinta-feira, sexta-feira (o festival, do fim da tarde até a noite) e sábado de manhã.
 *  Mesmo formato dos capítulos anteriores: cada linha é uma cena.
 * =====================================================================
 *
 *  O QUE ACONTECE
 *    • Abertura: uma semana se passou desde o Capítulo 7. O festival é nesta sexta. O fliperama
 *      do Victor foi adiado por causa da chuva para o sábado depois do festival.
 *    • Quarta à noite (fora de cena), o Blake e o Kaito brigaram. A SN descobre na quinta,
 *      na escola, e percebe que a visão do Capítulo 7 está começando a acontecer.
 *    • Motivo da briga (uma bobagem): o Blake inscreveu a gangue para fazer a segurança do
 *      festival sem perguntar ao Kaito. O Kaito disse que quem decide é o líder. O Blake
 *      respondeu que o Kaito só está de birra por causa do Victor. Aí a briga ficou feia.
 *    • O Kaito está com ciúme do Victor, mas não demonstra.
 *    • O Ren conversa com a SN: “Não é ódio. Eu só me divirto.” Ela tem vontade de matar ele.
 *    • Na sexta, a SN segue o Blake escondida o dia inteiro, até na rua. Ele percebe, pergunta
 *      por quê, e ela inventa desculpas.
 *    • No festival, a briga da visão acontece. O Blake fica sozinho atrás do palco.
 *      A Midorata ataca. A SN salva ele.
 *    • REVELAÇÃO: o Ren aparece, os membros da Midorata se curvam para ele. Ele é o líder.
 *      Ele é muito forte e enfrenta o Kaito de igual para igual.
 *    • Sábado de manhã: está tudo certo. O Victor chega para buscar a SN. O encontro em si
 *      fica para o Capítulo 9.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Victor, Ren, Coordenador, Membros da Midorata (sem nome, quem: "desconhecido").
 *
 *  CENÁRIOS (todos já existem; troque se criar fundos próprios)
 *    Festival à noite → "festival" · Atrás do palco → "atras-palco"
 *    Rua até a estação → "saida-colegio"
 *
 *  FLAGS DOS CAPÍTULOS ANTERIORES USADAS AQUI (com caminhos)
 *    Festival_karaoke / Festival_casa_assombrada / Festival_cafe, Victor_sabado_sim,
 *    Victor_sabado_nao, Mio_confessou_Blake, Blake_promessa_relogio.
 *
 *  Título, capa e gancho ficam em dados/capitulos.js: crie a entrada "capitulo8".
 */
Roteiro.registrar("capitulo8", {
  inicio: "c0_01",
  cenas: {

    /* =================== ABERTURA — UMA SEMANA DEPOIS =================== */
    // Cenário: quarto da SN, quarta-feira à noite, uma semana depois do Capítulo 7. Música: piano leve.
    // Resumo rápido da semana que passou. O festival é nesta sexta.
    c0_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Uma semana depois", sprite: null, texto: "Uma semana passou desde aquela quarta-feira. A quarta-feira do diário da Sora, do banco da coordenação e da visão atrás do palco.", proxima: "c0_02" },
    c0_02: { tipo: "narracao", texto: "Foi uma semana estranhamente normal. Toda tarde, depois da aula, a gangue inteira montava o festival no pátio dos fundos. O Ryuji reclamava das bandeirinhas. O Takeo pintava placas com letras ao contrário. A Hana organizava tudo numa prancheta. A Mio cantava alto, desafinada, em cima das escadas.", proxima: "c0_03" },
    c0_03: { tipo: "narracao", texto: "O Ren continuou sentado no fundo da sala, simpático com todo mundo. Não encostou em ninguém. Só mandou fotos. Uma por dia. Sempre de manhã. Sempre com um “bom dia 🙂”.", proxima: "c0_04" },
    c0_04: { tipo: "narracao", texto: "O Victor continuou chamando a SN de gatinha em todo corredor. No sábado, choveu o dia inteiro, e ele mandou uma mensagem: “adiado. o caramelo pegou resfriado. sábado depois do festival. não foge 😏”.", proxima: "c0_05" },
    c0_05: { tipo: "narracao", texto: "O Kaito continuou fingindo que ela era “todo mundo”. E continuou mandando “chegou?” toda noite.", proxima: "c0_06" },
    c0_06: { tipo: "narracao", texto: "E o Blake continuou vivo. Rindo com a Mio. Estudando física. Carregando tábuas. Sem fazer ideia de que, toda vez que a SN olhava para ele, ela via o relógio do pai dele marcando 21h14.", proxima: "c0_07" },
    c0_07: { tipo: "pensamento", texto: "Nenhuma visão nova. Nenhum aviso. Só aquele. Repetindo na minha cabeça toda vez que eu fecho os olhos.", proxima: "c0_08" },
    c0_08: { tipo: "pensamento", texto: "Uma semana inteira olhando os dois juntos, rindo, jogando tampinha de garrafa um no outro. E eu quase comecei a acreditar que a visão estava errada.", proxima: "c0_09" },
    c0_09: { tipo: "narracao", texto: "Na quarta à noite, ela olha o calendário pregado na parede do quarto. Sexta-feira está circulada de vermelho. FESTIVAL. Daqui a dois dias.", proxima: "c0_10" },
    c0_10: { tipo: "narracao", texto: "Ela dorme mal. Sonha com lanternas de papel.", proxima: "c1_01" },

    /* =================== CENA 1 — QUINTA-FEIRA =================== */
    // Cenário: corredor do segundo andar, de manhã. Música: tema leve que para de repente.
    c1_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Cena 1 — Quinta-feira", sprite: null, texto: "Quinta-feira. Um dia antes do festival. A SN chega no corredor do segundo andar e sabe que tem alguma coisa errada antes mesmo de entender o quê.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "A gangue não está toda junta na janela. Está dividida. De um lado, o Kaito, encostado na parede, de braços cruzados, olhando para o nada. Do outro, no fim do corredor, o Blake, sozinho, mexendo no celular sem ler nada.", proxima: "c1_03" },
    c1_03: { tipo: "narracao", texto: "No meio, exatamente no meio, o Ryuji. Sentado no chão. Com cara de filho de pais divorciados.", proxima: "c1_04" },
    c1_04: { quem: "ryuji", sprite: "ryuji", texto: "Princesa. Graças a Deus. Me tira daqui. Eu não aguento mais. Eles não se falam desde ontem à noite e eu virei correio.", proxima: "c1_05" },
    c1_05: { quem: "eu", texto: "O que aconteceu?", proxima: "c1_06" },
    c1_06: { quem: "ryuji", texto: "O Blake inscreveu a gangue pra fazer a segurança do festival. Sem perguntar pro Kaito. Pra ninguém da escola reclamar que a gente só arruma confusão.", proxima: "c1_07" },
    c1_07: { quem: "ryuji", texto: "Aí o Kaito disse que quem decide as coisas é o líder. Aí o Blake disse que o Kaito só estava irritado com tudo porque o Victor anda chamando você de gatinha.", proxima: "c1_08" },
    c1_08: { quem: "ryuji", texto: "Aí o Kaito disse uma coisa feia. Aí o Blake disse uma coisa mais feia. E aí os dois foram embora pra lados diferentes. Eu fiquei na lojinha de lámen sozinho com o gato.", proxima: "c1_09" },
    c1_09: { tipo: "narracao", texto: "O chão do corredor parece inclinar um pouco.", proxima: "c1_10" },
    c1_10: { tipo: "narracao", efeito: "flashback", texto: "“Então vai sozinho! Você sempre acha que sabe de tudo!”", proxima: "c1_11" },
    c1_11: { tipo: "pensamento", texto: "Está começando.", proxima: "c1_12" },
    c1_12: { tipo: "pensamento", texto: "A visão não era um pesadelo. Era um calendário.", proxima: "c1_13" },
    c1_13: { tipo: "narracao", texto: "Ela olha para o Kaito. Ele está olhando para ela. Por um segundo. Depois vira o rosto para a janela, como sempre.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — Falar com quem primeiro?
    c1_esc1: { escolhas: [
      { texto: "A. Com o Kaito. Ele é o teimoso.", proxima: "c1_1a_1", pontos: { kaito: 1 }, flags: ["Falou_Kaito_primeiro"] },
      { texto: "B. Com o Blake. Ele é o que vai estar sozinho atrás do palco.", proxima: "c1_1b_1", pontos: { blake: 1 }, flags: ["Falou_Blake_primeiro"] },
      { texto: "C. Com os dois ao mesmo tempo. Puxar os dois pelo braço para o meio do corredor.", proxima: "c1_1c_1", pontos: { kaito: 1, blake: 1, desvio: 1 }, flags: ["Puxou_os_dois"] }
    ]},
    c1_1a_1: { tipo: "narracao", sprite: "kaito", texto: "Ela para na frente do Kaito. Ele não se mexe.", proxima: "c1_1a_2" },
    c1_1a_2: { quem: "eu", texto: "Fala com ele.", proxima: "c1_1a_3" },
    c1_1a_3: { quem: "kaito", texto: "Ele que fale comigo. Ele que passou por cima de mim.", proxima: "c1_1a_4" },
    c1_1a_4: { quem: "eu", texto: "Foi por causa de uma inscrição de segurança, Kaito.", proxima: "c1_1a_5" },
    c1_1a_5: { quem: "kaito", texto: "Não foi por causa disso.", proxima: "c1_1a_6" },
    c1_1a_6: { tipo: "narracao", texto: "Ele não explica por causa do quê. E ela também não pergunta, porque os dois já sabem. O nome do Victor fica pendurado no ar entre eles, como uma bandeirinha torta.", proxima: "c1_14" },
    c1_1b_1: { tipo: "narracao", sprite: "blake", texto: "Ela vai até o fim do corredor. O Blake levanta os olhos do celular.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "blake", texto: "O Ryuji te contou.", proxima: "c1_1b_3" },
    c1_1b_3: { quem: "eu", texto: "Contou. Fala com ele, Blake.", proxima: "c1_1b_4" },
    c1_1b_4: { quem: "blake", texto: "Eu falei a verdade. Ele está de birra. Se eu pedir desculpa por falar a verdade, ele aprende que pode fazer birra sempre.", proxima: "c1_1b_5" },
    c1_1b_5: { quem: "blake", texto: "Eu conheço ele desde os cinco anos. Ele volta. Ele sempre volta. Em dois ou três dias.", proxima: "c1_1b_6" },
    c1_1b_6: { tipo: "pensamento", texto: "Você não tem dois ou três dias. Você tem até sexta, 21h14.", proxima: "c1_14" },
    c1_1c_1: { tipo: "narracao", texto: "Ela pega o Kaito pelo pulso. Atravessa o corredor. Pega o Blake pelo outro pulso. E puxa os dois para o meio, onde o Ryuji está sentado. Ninguém consegue resistir. Literalmente.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "ryuji", sprite: "ryuji", texto: "Isso! Terapia de casal! Eu trouxe pipoca!", proxima: "c1_1c_3" },
    c1_1c_3: { tipo: "narracao", texto: "O Kaito e o Blake ficam um na frente do outro. Os dois olham para qualquer lugar, menos um para o outro. Trinta segundos de silêncio.", proxima: "c1_1c_4" },
    c1_1c_4: { quem: "kaito", sprite: "kaito", texto: "Me solta, SN.", proxima: "c1_1c_5" },
    c1_1c_5: { quem: "blake", sprite: "blake", texto: "Me solta também.", proxima: "c1_1c_6" },
    c1_1c_6: { tipo: "narracao", texto: "Pelo menos eles concordaram em alguma coisa. Ela solta. Os dois vão embora para lados opostos, de novo.", proxima: "c1_14" },

    // (todas as opções continuam aqui)
    c1_14: { tipo: "narracao", sprite: null, texto: "No fim do corredor, alguém assobia. Alto. O tipo de assobio que se dá para chamar um cachorro. Ou uma menina.", proxima: "c1_15" },
    c1_15: { quem: "victor", texto: "Bom dia, gatinha! Sábado, quatro horas! Não esquece!", proxima: "c1_16" },
    c1_16: { tipo: "narracao", texto: "Ele passa pelo corredor com a mochila pendurada num ombro, pirulito na boca, cumprimentando três meninas no caminho. Pisca para a SN e some na escada.", proxima: "c1_17" },
    c1_17: { tipo: "narracao", sprite: "kaito", texto: "O Kaito, encostado na parede, não diz nada. Mas o punho fechado dele bate uma vez na parede atrás das costas. Bem de leve. O suficiente para cair um pouco de reboco.", proxima: "c1_18" },
    c1_18: { quem: "ryuji", sprite: "ryuji", texto: "Líder. A parede não te fez nada.", proxima: "c1_19" },
    c1_19: { quem: "kaito", sprite: "kaito", texto: "Eu me apoiei.", proxima: "c1_20" },
    c1_20: { quem: "ryuji", sprite: "ryuji", texto: "Com o punho?", proxima: "c1_21" },
    c1_21: { quem: "kaito", sprite: "kaito", texto: "Eu me apoio com o punho. Sempre me apoiei com o punho. Cala a boca.", proxima: "c2_01" },

    /* =================== CENA 2 — DIVERSÃO =================== */
    // Cenário: escada do segundo andar, intervalo (usa "corredor"). Música: silêncio. Depois, uma nota grave.
    c2_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Cena 2 — Diversão", sprite: null, texto: "No intervalo, a SN vai para a escada do segundo andar pensar. Ela precisa de um plano. Ela sempre foi boa em planos. Sempre foi péssima em colocar eles em prática.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", texto: "Passos subindo a escada. Lentos. Educados. Ela sabe quem é antes de ver.", proxima: "c2_03" },
    c2_03: { quem: "ren", texto: "Ah, achei você! Que escada gostosa. Bem escondida. Dá pra entender por que você gosta.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", texto: "Ele senta três degraus abaixo dela. Com uma maçã na mão. Claro.", proxima: "c2_05" },
    c2_05: { quem: "ren", texto: "Ansiosa pro festival? Eu adoro festivais. Lanterna, música, todo mundo distraído olhando pra cima. Seria uma pena alguma coisa estragar uma noite tão bonita.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", texto: "Ele morde a maçã. Mastiga devagar. Sorrindo para o nada.", proxima: "c2_07" },
    c2_07: { tipo: "pensamento", texto: "Ele sempre aparece quando eu estou sozinha. Sempre sorrindo. Sempre com uma maçã.", proxima: "c2_08" },
    c2_08: { tipo: "narracao", texto: "Ela olha para ele. Para o uniforme impecável. Para a maçã. Para o sorriso que nunca muda. E faz a pergunta que está engasgada desde o beco atrás do ginásio.", proxima: "c2_09" },
    c2_09: { quem: "eu", texto: "Por que você me odeia tanto?", proxima: "c2_10" },
    c2_10: { tipo: "narracao", texto: "O Ren para de mastigar. Inclina a cabeça. E então ri. Um riso leve, sincero, quase carinhoso. Como quem ouve uma criança dizer uma coisa fofa.", proxima: "c2_11" },
    c2_11: { quem: "ren", texto: "Odeio? Eu não te odeio, SN. Ódio dá trabalho. Ódio cansa.", proxima: "c2_12" },
    c2_12: { quem: "ren", texto: "Eu só me divirto.", proxima: "c2_13" },
    c2_13: { quem: "ren", texto: "Sabe quando você é criança e acha um formigueiro? E coloca o dedo na frente da fila pra ver pra onde as formigas vão? Elas ficam doidas. Correm pra todo lado. É lindo.", proxima: "c2_14" },
    c2_14: { quem: "ren", texto: "Você é a formiga mais interessante que eu já encontrei. Você não corre. Você tenta empurrar o dedo.", proxima: "c2_15" },
    c2_15: { quem: "ren", texto: "Eu não quero que você suma. Isso acabaria com a graça. Eu quero ver até onde você aguenta.", proxima: "c2_16" },
    c2_16: { tipo: "narracao", texto: "Ele joga o miolo da maçã para cima e pega de volta. Se levanta. Ajeita a gravata.", proxima: "c2_17" },
    c2_17: { quem: "ren", texto: "Aproveita o festival, SN. Dizem que a vista atrás do palco é linda à noite.", proxima: "c2_18" },
    c2_18: { tipo: "narracao", texto: "Ele desce a escada assobiando.", proxima: "c2_19" },
    c2_19: { tipo: "narracao", texto: "A SN fica sentada. As mãos dela estão fechadas com tanta força que as unhas abrem a palma, bem em cima da marca da viga.", proxima: "c2_20" },
    c2_20: { tipo: "pensamento", texto: "Eu quero matar ele.", proxima: "c2_21" },
    c2_21: { tipo: "pensamento", texto: "Não é jeito de falar. Eu quero de verdade. Eu nunca quis isso. Nem com a Sayuri. Nem com o Jin, naquele beco.", proxima: "c2_22" },
    c2_22: { tipo: "pensamento", texto: "Eu consigo. É isso que me dá medo. Uma mão só, na garganta dele. Ninguém ia entender como uma menina de um metro e sessenta fez aquilo.", proxima: "c2_23" },
    c2_23: { tipo: "narracao", efeito: "eco", texto: "“Nossa força não existe para ferir.”", proxima: "c2_24" },
    c2_24: { tipo: "pensamento", texto: "A vovó nunca conheceu alguém como ele.", proxima: "c2_25" },
    c2_25: { tipo: "narracao", texto: "Ela abre as mãos devagar. Olha para as marcas das unhas. Respira. Uma vez. Duas. Três.", proxima: "c2_26" },
    c2_26: { tipo: "pensamento", texto: "É isso que ele quer. Que eu vire uma pessoa que machuca. Aí ele ganha de vez.", proxima: "c2_27" },
    c2_27: { tipo: "pensamento", texto: "“Atrás do palco.” Ele falou atrás do palco.", proxima: "c2_28" },
    c2_28: { tipo: "pensamento", texto: "Coincidência. Tem que ser coincidência.", proxima: "c2_29" },
    c2_29: { tipo: "pensamento", texto: "Com ele, nada é coincidência.", proxima: "c3_01" },

    /* =================== CENA 3 — A TENTATIVA =================== */
    // Cenário: pátio dos fundos, montagem do festival, quinta à tarde. Música: tema leve, desconfortável.
    c3_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Cena 3 — A tentativa", sprite: null, texto: "Na montagem da tarde, a tensão é tão grande que até o Victor percebe. E o Victor não percebe nada que não seja menina bonita ou cachorro na rua.", proxima: "c3_02" },
    c3_02: { quem: "victor", texto: "Que clima de enterro é esse? Alguém morreu?", proxima: "c3_03" },
    c3_03: { tipo: "narracao", texto: "A SN derruba o martelo no próprio pé. Ela nem sente.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", texto: "O Kaito carrega tábuas de um lado do pátio. O Blake carrega do outro. Quando os dois precisam pegar a mesma pilha, um espera o outro ir embora. Parece uma dança. Uma dança horrível.", proxima: "c3_05" },
    c3_05: { tipo: "narracao", sprite: "mio", texto: "A Mio chega perto da SN, fingindo pendurar bandeirinha.", proxima: "c3_06" },
    c3_06: { quem: "mio", texto: "Eu tentei com o Blake. A Hana tentou com o Kaito. O Takeo tentou com os dois e quase chorou. O Ryuji tentou dar uma cabeçada nos dois e o Blake segurou a cabeça dele no ar.", proxima: "c3_07" },
    c3_07: { quem: "mio", texto: "Eles são iguais. Dois cabeças-duras. Por isso que são melhores amigos.", proxima: "c3_08" },
    c3_08: { tipo: "pensamento", texto: "Eu tenho um dia. Um. Se eu não consigo fazer eles se falarem, eu preciso garantir que o Blake não fique sozinho nem um minuto amanhã.", proxima: "c3_esc2" },

    // ▶ ESCOLHA 2 — Última tentativa antes do festival
    c3_esc2: { escolhas: [
      { texto: "A. Contar pro Blake da visão, do jeito que der: “Eu tenho um pressentimento muito ruim sobre você amanhã.”", proxima: "c3_2a_1", pontos: { blake: 2, desvio: 1 }, flags: ["Avisou_Blake"] },
      { texto: "B. Ir até o Kaito: “Se acontecer alguma coisa com ele amanhã, você vai se arrepender pelo resto da vida.”", proxima: "c3_2b_1", pontos: { kaito: 2, desvio: 1 }, flags: ["Avisou_Kaito"] },
      { texto: "C. Não falar nada para ninguém. Só preparar o plano: amanhã, ela vai ser a sombra do Blake.", proxima: "c3_2c_1", flags: ["Plano_sombra"] }
    ]},
    c3_2a_1: { tipo: "narracao", sprite: "blake", texto: "O Blake para de carregar a tábua. Olha para ela. Do jeito que olhou no vestiário, quando ela disse que sabia de coisas ruins que iam acontecer.", proxima: "c3_2a_2" },
    c3_2a_2: { quem: "blake", texto: "Que tipo de pressentimento?", proxima: "c3_2a_3" },
    c3_2a_3: { quem: "eu", texto: "Do tipo que me faz querer que você não fique sozinho nem um segundo.", proxima: "c3_2a_4" },
    c3_2a_4: { quem: "blake", texto: "Eu sei me cuidar.", proxima: "c3_2a_5" },
    c3_2a_5: { quem: "eu", texto: "Eu também sabia. Até o beco.", proxima: "c3_2a_6" },
    c3_2a_6: { tipo: "narracao", texto: "Ele fica em silêncio. Depois concorda com a cabeça, devagar. Mas ela vê que ele não acredita totalmente. Ele acredita que ela acredita. Igual da outra vez. E isso não é suficiente.", proxima: "c3_09" },
    c3_2b_1: { tipo: "narracao", sprite: "kaito", texto: "O Kaito para de pregar. O martelo fica parado no ar.", proxima: "c3_2b_2" },
    c3_2b_2: { quem: "kaito", texto: "Por que ia acontecer alguma coisa com ele?", proxima: "c3_2b_3" },
    c3_2b_3: { quem: "eu", texto: "Eu não sei explicar. Só confia em mim.", proxima: "c3_2b_4" },
    c3_2b_4: { tipo: "narracao", texto: "Ele olha para o Blake, do outro lado do pátio. Por um segundo, a birra some do rosto dele. Fica só um menino preocupado com o melhor amigo.", proxima: "c3_2b_5" },
    c3_2b_5: { tipo: "narracao", texto: "Depois o Victor passa assobiando, chama a SN de gatinha, e a birra volta inteira.", proxima: "c3_2b_6" },
    c3_2b_6: { quem: "kaito", texto: "Ele é grande. Ele se vira. Ele sempre se vira.", proxima: "c3_09" },
    c3_2c_1: { tipo: "narracao", texto: "Ela não fala nada. Ela pega a prancheta e, no verso da lista de material, começa a desenhar um mapa do pátio. As barracas. O palco. O muro dos fundos. As saídas.", proxima: "c3_2c_2" },
    c3_2c_2: { tipo: "narracao", texto: "Atrás do palco, ela faz um X. E escreve do lado, pequeno: 21h14.", proxima: "c3_2c_3" },
    c3_2c_3: { tipo: "pensamento", texto: "Se ninguém acredita, eu não preciso que ninguém acredite. Eu só preciso estar lá.", proxima: "c3_09" },

    // (todas as opções continuam aqui)
    c3_09: { tipo: "narracao", sprite: "victor", texto: "No fim da tarde, quando todo mundo vai embora, o Victor fica pendurando a última lanterna de papel em cima do palco. Ele assobia para chamar a atenção dela.", proxima: "c3_10" },
    c3_10: { quem: "victor", texto: "Ô, gatinha. Você ficou estranha o dia inteiro. Quer que eu bata em alguém por você? É de graça. Promoção de quinta.", proxima: "c3_11" },
    c3_11: { quem: "eu", texto: "Não. Mas obrigada.", proxima: "c3_12" },
    c3_12: { quem: "victor", texto: "Se mudar de ideia, eu estou por aí. Sempre estou. Pergunta pra qualquer coordenador.", proxima: "c3_13" },
    c3_13: { tipo: "narracao", texto: "Ele pula do palco, pega a mochila e vai embora assobiando. Pela primeira vez, ele não chamou ela de gatinha na despedida. Ela percebe. Não sabe o que fazer com isso.", proxima: "c4_01" },

    /* =================== CENA 4 — A SOMBRA =================== */
    // Cenário: sexta-feira. Escola e depois a rua até a estação (usa "corredor" e "saida-colegio").
    // Música: tema de investigação, leve e engraçado.
    c4_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Cena 4 — A sombra", sprite: null, texto: "Sexta-feira. Dia do festival. As aulas acabam ao meio-dia para todo mundo se arrumar. O festival começa às cinco da tarde e vai até as dez da noite.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "A SN tem um plano. É simples. É ridículo. É o único que ela tem.", proxima: "c4_03" },
    c4_03: { tipo: "pensamento", texto: "Onde o Blake for, eu vou atrás. Sem ele perceber.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", texto: "Ao meio-dia, o Blake sai da sala. A SN espera cinco segundos e sai atrás. Ele vira o corredor. Ela vira o corredor. Ele entra no banheiro masculino. Ela para.", proxima: "c4_05" },
    c4_05: { tipo: "pensamento", texto: "...Esse foi um erro de planejamento.", proxima: "c4_06" },
    c4_06: { tipo: "narracao", texto: "Ela espera encostada na parede, fingindo ler um cartaz sobre escovação de dentes, por sete minutos inteiros. Quando ele sai, ela finge muito interesse no cartaz.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", cenario: "saida-colegio", texto: "O Blake sai da escola. Vai a pé até o mercado. A SN vai atrás, a uns vinte metros. Atrás de postes. Atrás de uma senhora com carrinho de feira. Atrás de uma banca de jornal.", proxima: "c4_08" },
    c4_08: { tipo: "narracao", texto: "No meio da rua, o Blake para. Ela se esconde atrás de uma lixeira. Ele vira devagar. Olha direto para a lixeira.", proxima: "c4_09" },
    c4_09: { quem: "blake", sprite: "blake", texto: "SN.", proxima: "c4_10" },
    c4_10: { tipo: "narracao", texto: "Ela sai de trás da lixeira, tentando parecer casual. Não consegue.", proxima: "c4_11" },
    c4_11: { quem: "blake", texto: "Você está me seguindo desde o banheiro.", proxima: "c4_esc3" },

    // ▶ ESCOLHA 3 — A primeira desculpa
    c4_esc3: { escolhas: [
      { texto: "A. “Eu moro pra esse lado.”", proxima: "c4_3a_1", pontos: { blake: 1 }, flags: ["Desculpa_mora"] },
      { texto: "B. “Eu preciso comprar fita adesiva pro festival. Você parecia saber onde fica.”", proxima: "c4_3b_1", pontos: { blake: 2 }, flags: ["Desculpa_fita"] },
      { texto: "C. “Eu estava treinando pra ser detetive.”", proxima: "c4_3c_1", pontos: { blake: 2 }, flags: ["Desculpa_detetive"] }
    ]},
    c4_3a_1: { quem: "blake", texto: "Você mora do outro lado. Eu já te levei em casa.", proxima: "c4_3a_2" },
    c4_3a_2: { quem: "eu", texto: "...Mudei de casa.", proxima: "c4_3a_3" },
    c4_3a_3: { quem: "blake", texto: "Hoje de manhã?", proxima: "c4_3a_4" },
    c4_3a_4: { quem: "eu", texto: "Foi uma mudança rápida.", proxima: "c4_12" },
    c4_3b_1: { tipo: "narracao", texto: "O Blake olha para ela. Depois para a loja de material de construção, bem na frente dos dois. Com uma placa enorme escrita FITA ADESIVA na vitrine.", proxima: "c4_3b_2" },
    c4_3b_2: { quem: "blake", texto: "Fica ali.", proxima: "c4_3b_3" },
    c4_3b_3: { quem: "eu", texto: "Ah. Que coincidência.", proxima: "c4_12" },
    c4_3c_1: { quem: "blake", texto: "Detetive.", proxima: "c4_3c_2" },
    c4_3c_2: { quem: "eu", texto: "É um hobby novo.", proxima: "c4_3c_3" },
    c4_3c_3: { quem: "blake", texto: "Você se escondeu atrás de uma lixeira do seu tamanho.", proxima: "c4_3c_4" },
    c4_3c_4: { quem: "eu", texto: "Eu estou começando.", proxima: "c4_12" },

    // (todas as opções continuam aqui)
    c4_12: { tipo: "narracao", texto: "O canto da boca do Blake se mexe. Ele quase ri. Quase. Depois balança a cabeça e volta a andar.", proxima: "c4_13" },
    c4_13: { quem: "blake", texto: "Vem, então. Do meu lado. Detetive que fica vinte metros atrás chama mais atenção.", proxima: "c4_14" },
    c4_14: { tipo: "narracao", texto: "Ela anda do lado dele. Ele vai buscar os gêmeos na escola primária, para levar para a casa da vizinha antes do festival. Os gêmeos pulam em cima dela gritando.", proxima: "c4_15" },
    c4_15: { tipo: "narracao", texto: "Depois ele passa na farmácia para comprar remédio para a mãe. Ela vai junto. Depois na padaria. Ela vai junto. Ele não pergunta mais nada. Mas, a cada lugar, ele olha para ela de lado, com a testa um pouco franzida.", proxima: "c4_16" },
    c4_16: { tipo: "narracao", texto: "Às três e meia, na frente do prédio dele, ele para.", proxima: "c4_17" },
    c4_17: { quem: "blake", texto: "Eu vou subir pra tomar banho e trocar de roupa. Você vai ficar aqui embaixo me esperando?", proxima: "c4_18" },
    c4_18: { quem: "eu", texto: "...Talvez.", proxima: "c4_19" },
    c4_19: { quem: "blake", texto: "Por quê, SN? De verdade. Isso tem a ver com o pressentimento?", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — A segunda desculpa (ou não)
    c4_esc4: { escolhas: [
      { texto: "A. “A Mio me pediu pra descobrir o seu perfume. Pra dar de presente.”", proxima: "c4_4a_1", pontos: { blake: 1, mio: 1 }, flags: ["Desculpa_perfume"] },
      { texto: "B. “Eu só gosto de ficar perto de você hoje.”", proxima: "c4_4b_1", pontos: { blake: 3 }, flags: ["Desculpa_perto"] },
      { texto: "C. “Tem. E eu vou continuar te seguindo até a meia-noite. Pode reclamar.”", proxima: "c4_4c_1", pontos: { blake: 2, desvio: 1 }, flags: ["Sem_desculpa"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "O Blake fica parado. Muito parado. As orelhas dele ficam vermelhas de baixo para cima.", proxima: "c4_4a_2" },
    c4_4a_2: { quem: "blake", texto: "...A Mio quer saber meu perfume?", proxima: "c4_4a_3" },
    c4_4a_3: { quem: "eu", texto: "Esquece que eu falei. Ela vai me matar.", proxima: "c4_4a_4" },
    c4_4a_4: { quem: "blake", texto: "Eu não uso perfume. Eu uso o sabonete da minha mãe. De erva-doce.", proxima: "c4_4a_5" },
    c4_4a_5: { tipo: "narracao", texto: "Ele sobe as escadas do prédio devagar, claramente pensando na Mio. A SN fica embaixo, com vontade de pedir desculpa para a melhor amiga por mentir em nome dela.", proxima: "c4_c1" },
    c4_4b_1: { tipo: "narracao", texto: "O Blake não responde na hora. Ele fica olhando para ela, com a mão parada na grade do portão.", proxima: "c4_4b_2" },
    c4_4b_2: { quem: "blake", texto: "...Isso não é uma desculpa.", proxima: "c4_4b_3" },
    c4_4b_3: { quem: "eu", texto: "Não. Não é.", proxima: "c4_4b_4" },
    c4_4b_4: { tipo: "narracao", texto: "Ele sobe as escadas sem dizer mais nada. Mas, quando chega no segundo andar, aparece na janela. Olha para baixo. Para ela. E fica um tempo ali antes de entrar.", proxima: "c4_c1" },
    c4_4c_1: { quem: "blake", texto: "Até a meia-noite.", proxima: "c4_4c_2" },
    c4_4c_2: { quem: "eu", texto: "No mínimo.", proxima: "c4_4c_3" },
    c4_4c_3: { tipo: "narracao", texto: "Ele fica um tempo olhando para ela. Depois olha para o uniforme dela, amassado e com terra no joelho de tanto se esconder atrás de lixeira.", proxima: "c4_4c_4" },
    c4_4c_4: { quem: "blake", texto: "Então vai se trocar. Você não vai pro festival com cheiro de lixeira. Às seis, no portão da escola. Eu espero.", proxima: "c4_c1" },

    // Ela não pode ficar esperando o Blake: precisa ir pra casa se trocar.
    c4_c1: { tipo: "narracao", sprite: null, texto: "Ela olha para o prédio. Para a janela dele. Para o relógio. Três e quarenta. Ela ainda está de uniforme, com terra no joelho e cheiro de lixeira.", proxima: "c4_c2" },
    c4_c2: { tipo: "pensamento", texto: "Eu preciso ir pra casa me trocar. Não dá pra ficar plantada aqui até as seis.", proxima: "c4_c3" },
    c4_c3: { tipo: "pensamento", texto: "São só duas horas. A visão é às 21h14. Atrás do palco. Não é aqui. Não é agora.", proxima: "c4_c4" },
    c4_c4: { tipo: "narracao", cenario: "quarto-sn", texto: "Ela corre o caminho inteiro até em casa. Sobe a escada de dois em dois degraus. Joga a mochila em cima da cama.", proxima: "c4_c5" },
    c4_c5: { tipo: "narracao", texto: "O kimono lilás que ela comprou com a Mio está pendurado atrás da porta. Ela se troca tão rápido que amarra o obi torto duas vezes.", proxima: "c4_c6" },
    c4_c6: { tipo: "pensamento", texto: "E se a visão mudou? E se, porque eu mexi em tudo, agora é mais cedo? Agora? No banho? Na escada do prédio dele?", proxima: "c4_c7" },
    c4_c7: { tipo: "narracao", texto: "Ela para no meio do quarto, com uma sandália no pé e a outra na mão. Pega o celular. Digita. Apaga. Digita de novo.", proxima: "c4_c8" },
    c4_c8: { quem: "mensagem", rotulo: "Você → Blake", texto: "tá tudo bem aí?", proxima: "c4_c9" },
    c4_c9: { tipo: "narracao", texto: "Um minuto. Dois. Três. Nenhuma resposta. Ela anda de um lado para o outro do quarto. Quatro minutos.", proxima: "c4_c10" },
    c4_c10: { quem: "mensagem", rotulo: "Blake", texto: "tava no banho. pq?", proxima: "c4_c11" },
    c4_c11: { tipo: "narracao", texto: "Ela senta na beira da cama. Só agora percebe que estava prendendo a respiração.", proxima: "c4_c12" },
    c4_c12: { tipo: "pensamento", texto: "Eu não posso ficar assim até as nove da noite. Eu vou enlouquecer antes.", proxima: "c4_20" },

    // (todas as opções continuam aqui)
    c4_20: { tipo: "narracao", sprite: null, texto: "Às quatro e meia, o celular dela vibra. Mensagem do Victor.", proxima: "c4_21" },
    c4_21: { quem: "mensagem", rotulo: "Victor 😏", texto: "gatinha cadê vc? a montagem final é agora. o coordenador tá me olhando como se eu tivesse roubado a escola. de novo", proxima: "c4_22" },
    c4_22: { tipo: "narracao", texto: "Logo depois, outra. Do Kaito. Não no grupo. Só para ela.", proxima: "c4_23" },
    c4_23: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Você sumiu com o Blake o dia inteiro.", proxima: "c4_24" },
    c4_24: { tipo: "narracao", texto: "Ela fica olhando para a mensagem. Três pontinhos aparecem. Somem. Aparecem. Somem. Nenhuma outra mensagem chega.", proxima: "c4_25" },
    c4_25: { tipo: "pensamento", texto: "Ele está com ciúme. Do Victor. E agora do Blake também. E nunca vai admitir.", proxima: "c4_26" },
    c4_26: { tipo: "pensamento", texto: "Se ele soubesse o motivo, ia querer estar no meu lugar.", proxima: "c4_27" },
    c4_27: { tipo: "narracao", texto: "Às cinco e quarenta, ela já está correndo de volta para a escola. De kimono. Com a sandália na mão.", proxima: "c5_01" },

    /* =================== CENA 5 — O FESTIVAL =================== */
    // Cenário: pátio da escola transformado, fim da tarde virando noite (usa "festival").
    // Lanternas de papel, barracas, música do palco. Música: tema do festival, alegre.
    c5_01: { tipo: "narracao", cenario: "festival", roupa: "festival", transicao: "tempo", legenda: "Cena 5 — O festival", sprite: null, texto: "Às seis da tarde, o céu está laranja e o pátio da escola está irreconhecível. Lanternas de papel penduradas entre as barracas. Cheiro de pipoca e de espetinho. Música saindo do palco. Gente de todas as turmas. Pais. Crianças. Vizinhos.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", texto: "Na entrada, a placa pintada pelo Takeo. FESTIVAL. Com o V ao contrário. Pendurada torta. Exatamente como na visão.", proxima: "c5_03" },
    c5_03: { tipo: "narracao", foto: "sn-festival", texto: "A SN fica parada na frente da placa por um segundo inteiro.", proxima: "c5_04" },
    c5_04: { tipo: "pensamento", texto: "Igual. Tudo igual até agora.", proxima: "c5_05" },
    c5_05: { tipo: "narracao", sprite: "blake", texto: "O Blake está de camiseta preta da segurança, com SEGURANÇA escrito em branco nas costas, em letra torta. Ele mesmo fez. Ela anda dois passos atrás dele. Ele não reclama mais. Ele só, às vezes, diminui o passo para ela alcançar.", proxima: "c5_cam1" },

    // A atração da turma
    c5_cam1: { caminhos: [
      { flag: "Festival_karaoke", proxima: "c5_a_karaoke" },
      { flag: "Festival_casa_assombrada", proxima: "c5_a_casa" }
    ], proxima: "c5_a_cafe" },
    c5_a_karaoke: { tipo: "narracao", sprite: "hana", texto: "Às oito, a barraca de karaokê da turma está lotada. A Hana sobe no palquinho tremendo inteira. Segura o microfone com as duas mãos. Fecha os olhos. E canta. A fila da barraca vira uma plateia. A plateia vira silêncio. O silêncio vira aplauso.", proxima: "c5_a_karaoke2" },
    c5_a_karaoke2: { tipo: "pensamento", texto: "Três anos dividindo a mesa com ela, e só agora a escola inteira ouviu a voz dela.", proxima: "c5_06" },
    c5_a_casa: { tipo: "narracao", sprite: "mio:fantasma", texto: "Às oito, a casa mal-assombrada da turma tem a maior fila do festival. Lá dentro, a Mio, enrolada num lençol, pula de trás de uma cortina gritando. Um aluno do terceiro ano sai correndo e chorando. A Mio sai atrás pedindo desculpa e rindo ao mesmo tempo.", proxima: "c5_a_casa2" },
    c5_a_casa2: { tipo: "narracao", sprite: "sayuri", texto: "No fim do corredor escuro, a Sayuri, de zumbi, sem fala e sem laço, olha para a SN com ódio puro. Ela não parece estar se divertindo.", proxima: "c5_06" },
    c5_a_cafe: { tipo: "narracao", texto: "Às oito, o café da turma está cheio. A Sayuri, de avental e laço rosa, serve chá com um sorriso tão forçado que parece que vai rachar. Toda vez que a SN passa, ela derruba alguma coisa.", proxima: "c5_a_cafe2" },
    c5_a_cafe2: { tipo: "narracao", sprite: "takeo", texto: "O Takeo, que se ofereceu para lavar xícaras por causa das costelas, quebra três. Ninguém fica bravo. Ele pede desculpa para cada xícara.", proxima: "c5_06" },

    c5_06: { tipo: "narracao", sprite: "victor", texto: "No meio da multidão, o Victor aparece do nada, segurando dois espetinhos.", proxima: "c5_07" },
    c5_07: { quem: "victor", texto: "Toma, gatinha. Comprei um pra mim e um pra você. Na verdade comprei quatro, mas comi dois no caminho.", proxima: "c5_08" },
    c5_08: { tipo: "narracao", texto: "Ele coloca o espetinho na mão dela. E fica do lado. Perto. Bem na hora em que o Kaito passa pela barraca, de camiseta de segurança, com o Ryuji.", proxima: "c5_09" },
    c5_09: { tipo: "narracao", sprite: "kaito", texto: "O Kaito vê os dois. Vê o espetinho. Vê o Victor perto demais. E continua andando, sem parar, sem mudar a cara. Mas o Ryuji, do lado dele, diz alguma coisa no ouvido dele, e o Kaito empurra o Ryuji com o ombro sem olhar.", proxima: "c5_esc5" },

    // ▶ ESCOLHA 5 — O espetinho do Victor
    c5_esc5: { escolhas: [
      { texto: "A. Aceitar o espetinho e comer com o Victor ali mesmo.", proxima: "c5_5a_1", pontos: { victor: 2 }, flags: ["Espetinho_Victor"] },
      { texto: "B. “Obrigada. Mas eu estou de olho em alguém hoje.” E voltar a seguir o Blake.", proxima: "c5_5b_1", pontos: { victor: 1, blake: 1 }, flags: ["Seguiu_Blake_festival"] },
      { texto: "C. Dar o espetinho pro Kaito quando ele passar de novo.", proxima: "c5_5c_1", pontos: { kaito: 2 }, flags: ["Espetinho_Kaito"] }
    ]},
    c5_5a_1: { tipo: "narracao", texto: "Ela come. O Victor fala de boca cheia sobre o Caramelo, que ganhou uma coleira nova. Ele ri alto. Ela ri também, sem querer. Mas os olhos dela continuam procurando a camiseta de segurança do Blake no meio da multidão.", proxima: "c5_5a_2" },
    c5_5a_2: { quem: "victor", texto: "Você está procurando alguém.", proxima: "c5_5a_3" },
    c5_5a_3: { quem: "eu", texto: "Estou.", proxima: "c5_5a_4" },
    c5_5a_4: { quem: "victor", texto: "Não sou eu. Tudo bem. Amanhã é minha vez.", proxima: "c5_10" },
    c5_5b_1: { tipo: "narracao", texto: "O Victor levanta as sobrancelhas. Depois sorri, mostrando os dentes, sem nenhuma ofensa.", proxima: "c5_5b_2" },
    c5_5b_2: { quem: "victor", texto: "De olho em alguém. Gostei. Só não esquece que amanhã você está de olho em mim.", proxima: "c5_5b_3" },
    c5_5b_3: { tipo: "narracao", texto: "Ele come o espetinho dela também e some na multidão, chamando outra menina de gatinha.", proxima: "c5_10" },
    c5_5c_1: { tipo: "narracao", texto: "Quando o Kaito passa de novo, cinco minutos depois, ela entra na frente dele e estende o espetinho.", proxima: "c5_5c_2" },
    c5_5c_2: { quem: "kaito", sprite: "kaito", texto: "Isso é do Victor.", proxima: "c5_5c_3" },
    c5_5c_3: { quem: "eu", texto: "Agora é seu.", proxima: "c5_5c_4" },
    c5_5c_4: { tipo: "narracao", texto: "Ele fica olhando para o espetinho. Depois pega. E come. Com raiva. Mastigando como se o espetinho tivesse ofendido a família dele.", proxima: "c5_5c_5" },
    c5_5c_5: { quem: "kaito", texto: "...Está frio.", proxima: "c5_5c_6" },
    c5_5c_6: { tipo: "narracao", texto: "Mas ele come até o fim.", proxima: "c5_10" },

    // (todas as opções continuam aqui)
    c5_10: { tipo: "narracao", sprite: null, texto: "Às 20h40, a SN encontra o Blake de novo, perto da barraca de pescaria. E vê o Kaito vindo na direção dele. Com a cara fechada.", proxima: "c5_11" },
    c5_11: { tipo: "narracao", texto: "Ela se esconde atrás de uma barraca de algodão-doce. O coração dela começa a bater tão alto que ela tem certeza que os dois vão ouvir.", proxima: "c5_12" },
    c5_12: { quem: "kaito", sprite: "kaito", texto: "Você deixou dois de nós no portão principal e ninguém nos fundos. Quem fez essa escala?", proxima: "c5_13" },
    c5_13: { quem: "blake", sprite: "blake", texto: "Eu fiz. Porque os fundos não têm entrada. Tem muro.", proxima: "c5_14" },
    c5_14: { quem: "kaito", sprite: "kaito", texto: "Você podia ter perguntado.", proxima: "c5_15" },
    c5_15: { quem: "blake", sprite: "blake", texto: "Eu podia. Você ia estar ocupado demais olhando o Victor dar espetinho pra ela.", proxima: "c5_16" },
    c5_16: { tipo: "narracao", texto: "Silêncio. O Kaito fica vermelho. Não de vergonha. De raiva. A pior raiva. A que vem de ouvir uma verdade em voz alta.", proxima: "c5_17" },
    c5_17: { quem: "kaito", sprite: "kaito", texto: "Você não sabe nada sobre mim.", proxima: "c5_18" },
    c5_18: { quem: "blake", sprite: "blake", texto: "Eu sei tudo sobre você. Esse é o seu problema comigo.", proxima: "c5_19" },
    c5_19: { tipo: "narracao", texto: "O Kaito dá um passo para trás. A voz dele sobe. Alta demais. Cheia de birra. As pessoas da barraca de pescaria olham.", proxima: "c5_20" },
    c5_20: { quem: "kaito", sprite: "kaito", efeito: "grito", texto: "Então vai sozinho! Você sempre acha que sabe de tudo!", proxima: "c5_21" },
    c5_21: { tipo: "narracao", efeito: "eco", texto: "A frase. Exatamente a frase. Palavra por palavra.", proxima: "c5_22" },
    c5_22: { tipo: "narracao", sprite: "blake", texto: "O Blake não responde. Ele só vira as costas. E anda na direção dos fundos. Na direção do palco. Sem a jaqueta, que ficou pendurada na barraca de pescaria.", proxima: "c5_23" },
    c5_23: { tipo: "narracao", sprite: null, texto: "A SN olha o celular. 20h58.", proxima: "c5_24" },
    c5_24: { tipo: "pensamento", texto: "Dezesseis minutos.", proxima: "c5_25" },
    c5_25: { tipo: "narracao", texto: "Ela sai de trás do algodão-doce e passa correndo pelo Kaito. Ele vê. Ele abre a boca para chamar. Ela não para.", proxima: "c5_26" },
    c5_26: { tipo: "narracao", texto: "Atrás dela, ela ouve a voz do Ryuji, que estava vindo com dois copos de refrigerante e viu tudo.", proxima: "c5_27" },
    c5_27: { quem: "ryuji", sprite: "ryuji", texto: "Líder. Você é um idiota completo. Vai atrás dele. Agora. Senão eu te jogo nessa piscina de peixinho.", proxima: "c6_01" },

    /* =================== CENA 6 — ATRÁS DO PALCO =================== */
    // Cenário: atrás do palco, perto do muro dos fundos, noite (usa "atras-palco").
    // Música do palco ao longe, alegre. Depois, só batida grave.
    c6_01: { tipo: "narracao", cenario: "atras-palco", transicao: "tempo", legenda: "Cena 6 — Atrás do palco", sprite: null, texto: "Atrás do palco, a música chega abafada. As lanternas de papel balançam no vento. O muro dos fundos é alto, escuro, cheio de pichação velha.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", sprite: "blake", texto: "O Blake está sentado num caixote de madeira, de cabeça baixa, com os cotovelos nos joelhos. O relógio do pai no pulso brilhando verde no escuro.", proxima: "c6_03" },
    c6_03: { tipo: "narracao", texto: "A SN fica escondida atrás de uma pilha de cadeiras dobráveis do palco. Ela não sabe por que está escondida. Talvez porque, se ela aparecer, ele vá embora. E aí ele vai estar sozinho em outro lugar, que ela não conhece.", proxima: "c6_04" },
    c6_04: { tipo: "narracao", texto: "21h09. O Blake não se mexe.", proxima: "c6_05" },
    c6_05: { tipo: "narracao", texto: "21h11. Um barulho do outro lado do muro. Tênis raspando em tijolo.", proxima: "c6_06" },
    c6_06: { tipo: "narracao", sprite: "midorata", texto: "21h12. Seis sombras aparecem em cima do muro. Seis jaquetas verde-escuras. Seis olhos amarelos bordados nas costas.", proxima: "c6_07" },
    c6_07: { quem: "midorata", efeito: "grito", texto: "MIDORATA!", proxima: "c6_08" },
    c6_08: { tipo: "narracao", efeito: "tremor", texto: "Eles pulam. O Blake se levanta de uma vez, chuta o caixote para longe e fica de pé, enorme, de punhos fechados.", proxima: "c6_09" },
    c6_09: { quem: "blake", texto: "Seis contra um? Que coragem.", proxima: "c6_10" },
    c6_10: { tipo: "narracao", texto: "Ele derruba o primeiro. O segundo. O Blake é o maior. O mais forte. Exatamente como na visão. E, exatamente como na visão, um terceiro está vindo pelas costas dele. Com alguma coisa brilhando na mão.", proxima: "c6_11" },
    c6_11: { tipo: "narracao", texto: "21h13.", proxima: "c6_12" },
    c6_12: { tipo: "pensamento", texto: "Agora.", proxima: "c6_13" },
    c6_13: { tipo: "narracao", efeito: "tremor", texto: "A pilha de cadeiras dobráveis voa para o lado. A SN atravessa o espaço atrás do palco em três passos. Mas o garoto é rápido demais. A faca entra na lateral do Blake um segundo antes de ela chegar.", proxima: "c6_13b" },
    c6_13b: { tipo: "narracao", texto: "O Blake solta o ar de uma vez. Não grita. Só dobra um pouco o corpo.", proxima: "c6_13c" },
    c6_13c: { tipo: "narracao", efeito: "tremor", texto: "A SN não pensa. O soco dela pega o garoto no meio do peito. Ele voa. Passa por cima de dois caixotes e bate no muro dos fundos, três metros longe. A faca sai junto com ele, antes de entrar fundo.", proxima: "c6_14" },
    c6_14: { tipo: "narracao", texto: "A faca cai no chão de terra, suja de vermelho. Ela pisa em cima dela.", proxima: "c6_14b" },
    c6_14b: { tipo: "narracao", texto: "O Blake leva a mão à lateral do corpo. Quando tira, a palma está vermelha. Ele olha para a mão. Depois para ela.", proxima: "c6_15" },
    c6_15: { quem: "blake", texto: "SN?!", proxima: "c6_16" },
    c6_16: { quem: "eu", texto: "Eu falei que ia te seguir até a meia-noite.", proxima: "c6_16b" },
    c6_16b: { tipo: "pensamento", texto: "Entrou. Mas foi de lado. Não fundo. Eu tirei ele de cima antes. Eu cheguei a tempo. Quase.", proxima: "c6_17" },
    c6_17: { tipo: "narracao", texto: "Os dois ficam de costas um para o outro. O Blake na frente, ela atrás. Os três garotos da Midorata que ainda estão de pé hesitam. Olham para a faca debaixo do tênis dela. Olham uns para os outros.", proxima: "c6_esc6" },

    // ▶ ESCOLHA 6 — Na briga atrás do palco
    c6_esc6: { escolhas: [
      { texto: "A. Ficar de costas com o Blake e lutar junto, sem esconder a força.", proxima: "c6_6a_1", pontos: { blake: 3, desvio: 2 }, flags: ["Lutou_com_Blake"] },
      { texto: "B. Pegar a faca do chão e jogar por cima do muro, longe de todo mundo.", proxima: "c6_6b_1", pontos: { blake: 2, desvio: 1 }, flags: ["Jogou_faca"] },
      { texto: "C. Gritar pra chamar a segurança: “BLAKE PRECISA DE AJUDA ATRÁS DO PALCO!”", proxima: "c6_6c_1", pontos: { blake: 1, kaito: 1 }, flags: ["Gritou_ajuda"] }
    ]},
    c6_6a_1: { tipo: "narracao", efeito: "tremor", texto: "Ela não esconde mais nada. Um garoto vem para cima dela. Ela segura o braço dele e joga. Ele voa por cima da pilha de cadeiras. O Blake derruba outro com um soco só.", proxima: "c6_6a_2" },
    c6_6a_2: { quem: "blake", texto: "Eu não vou perguntar.", proxima: "c6_6a_3" },
    c6_6a_3: { quem: "eu", texto: "Ótimo. Abaixa.", proxima: "c6_6a_4" },
    c6_6a_4: { tipo: "narracao", texto: "Ele abaixa. Ela pega um cavalete de madeira do palco e usa como escudo. Dois golpes batem nele. O cavalete racha. Ela não.", proxima: "c6_18" },
    c6_6b_1: { tipo: "narracao", texto: "Ela abaixa, pega a faca e, sem olhar, joga por cima do muro dos fundos. A faca some na escuridão do terreno do outro lado.", proxima: "c6_6b_2" },
    c6_6b_2: { tipo: "narracao", texto: "Um dos garotos da Midorata aproveita e vem para cima dela. O Blake entra na frente. Leva o soco no ombro. Devolve com um que derruba o garoto sentado.", proxima: "c6_6b_3" },
    c6_6b_3: { quem: "blake", texto: "Atrás de mim.", proxima: "c6_6b_4" },
    c6_6b_4: { quem: "eu", texto: "Do seu lado.", proxima: "c6_18" },
    c6_6c_1: { tipo: "narracao", efeito: "grito", texto: "Ela grita tão alto que a música do palco parece abaixar. Do outro lado da lona, alguém para. Vozes. Passos correndo.", proxima: "c6_6c_2" },
    c6_6c_2: { tipo: "narracao", texto: "Os garotos da Midorata se olham, nervosos. Um deles tenta acertar o Blake enquanto ele está distraído. A SN segura o punho do garoto no ar e empurra de volta.", proxima: "c6_18" },

    // (todas as opções continuam aqui)
    c6_18: { tipo: "narracao", texto: "O relógio do pai do Blake apita no pulso dele. Uma vez. Um bipe curto, de hora cheia que ele programou anos atrás e nunca desligou.", proxima: "c6_19" },
    c6_19: { tipo: "narracao", texto: "Ele olha. Ela olha também.", proxima: "c6_20" },
    c6_20: { tipo: "narracao", efeito: "eco", texto: "21h15.", proxima: "c6_21" },
    c6_21: { tipo: "narracao", texto: "O Blake está de pé. Com um corte no supercílio, a mão apertando a lateral do corpo, a camiseta de segurança rasgada e manchada de vermelho. De pé. Respirando. Olhando para ela.", proxima: "c6_22" },
    c6_22: { tipo: "pensamento", texto: "Passou.", proxima: "c6_23" },
    c6_23: { tipo: "pensamento", texto: "21h14 passou e ele está aqui.", proxima: "c6_24" },
    c6_24: { tipo: "narracao", texto: "Passos correndo atrás deles. A lona do palco é arrancada para o lado. O Kaito entra, sem fôlego, com o Ryuji logo atrás.", proxima: "c6_25" },
    c6_25: { quem: "kaito", sprite: "kaito", texto: "Blake!", proxima: "c6_26" },
    c6_26: { tipo: "narracao", texto: "O Kaito vê o Blake de pé, com a mão no lado ensanguentado, a SN do lado dele, os garotos de verde no chão. Ele para. Por um segundo, o rosto dele faz uma coisa que ela nunca viu. Desmancha. Todo o orgulho, toda a birra, tudo vai embora de uma vez.", proxima: "c6_27" },
    c6_27: { tipo: "narracao", texto: "E então, do alto do muro, uma voz educada.", proxima: "c6_28" },
    c6_28: { quem: "desconhecido", rotulo: "???", efeito: "eco", texto: "Que pena. Eu tinha marcado 21h14 na minha agenda.", proxima: "c7_01" },

    /* =================== CENA 7 — O LÍDER =================== */
    // Cenário: atrás do palco. Música: para. Só o vento e as lanternas.
    c7_01: { tipo: "narracao", transicao: "tempo", legenda: "Cena 7 — O líder", sprite: "ren", texto: "Sentado em cima do muro dos fundos, de pernas cruzadas, com uma jaqueta verde-escura jogada por cima do uniforme impecável, está o Ren. Comendo uma maçã.", proxima: "c7_02" },
    c7_02: { tipo: "narracao", sprite: "midorata", texto: "Os garotos da Midorata que ainda conseguem se mexer se levantam. Ficam em fila, de frente para o muro. E se curvam. Todos. Até o chão. Como se ele fosse um rei.", proxima: "c7_03" },
    c7_03: { quem: "midorata", rotulo: "Membros da Midorata", texto: "Chefe.", proxima: "c7_04" },
    c7_04: { tipo: "narracao", texto: "A SN sente o sangue inteiro do corpo descer para os pés.", proxima: "c7_05" },
    c7_05: { tipo: "pensamento", texto: "A Matilha era o que ele deixava a gente ver. Os Oda, as pulseiras, o calouro no chão. Pra todo mundo olhar pra lá.", proxima: "c7_06" },
    c7_06: { tipo: "pensamento", texto: "E a Midorata estava aqui, crescendo no escuro, sem nome dele em lugar nenhum.", proxima: "c7_07" },
    c7_07: { quem: "ren", texto: "Boa noite, Blake. Boa noite, Kaito. Ryuji. SN.", proxima: "c7_08" },
    c7_08: { quem: "ren", texto: "Sabe o que é engraçado? Eu calculei tudo. A briga de vocês dois. A escala de segurança sem ninguém nos fundos. O horário. Eu só precisei de uma frase no ouvido certo pra começar tudo. O resto, vocês fizeram sozinhos.", proxima: "c7_09" },
    c7_09: { quem: "ren", texto: "Só faltou uma variável. Ela.", proxima: "c7_10" },
    c7_10: { tipo: "narracao", texto: "Ele olha para a SN. Pela primeira vez, sem sorrir. Com uma curiosidade fria, de quem olha um quebra-cabeça que não fecha.", proxima: "c7_11" },
    c7_11: { quem: "ren", texto: "Como você sabia, SN? Você estava aqui antes deles pularem. Você estava escondida. Esperando.", proxima: "c7_12" },
    c7_12: { quem: "kaito", sprite: "kaito", texto: "Desce daí.", proxima: "c7_13" },
    c7_13: { tipo: "narracao", texto: "O Kaito dá um passo à frente. Ficando entre o muro e os outros. Os punhos fechados. A voz baixa. A voz que ele usa quando para de brincar.", proxima: "c7_14" },
    c7_14: { quem: "kaito", texto: "Desce daí, Sakuma.", proxima: "c7_15" },
    c7_15: { tipo: "narracao", texto: "O Ren olha para o Kaito. Joga a maçã para trás, por cima do muro. Tira a jaqueta verde dos ombros e dobra, com cuidado, em cima do muro.", proxima: "c7_16" },
    c7_16: { quem: "ren", texto: "Já que você pediu com educação.", proxima: "c7_17" },
    c7_17: { tipo: "narracao", texto: "Ele pula. Cai de pé, sem fazer barulho, como um gato. Dobra as mangas da camisa até o cotovelo. A cicatriz de queimadura aparece no pulso.", proxima: "c7_18" },
    c7_18: { tipo: "narracao", efeito: "tremor", texto: "O Kaito ataca primeiro. Um soco rápido, direto, o mesmo que derrubou o Goro no galpão. O Ren segura o punho dele no ar. Com uma mão. Sem recuar um centímetro.", proxima: "c7_19" },
    c7_19: { tipo: "narracao", texto: "Silêncio. O Ryuji para de respirar. O Blake dá um passo à frente e para.", proxima: "c7_20" },
    c7_20: { quem: "ren", texto: "Eu falei que não precisava brigar. Eu nunca falei que não sabia.", proxima: "c7_21" },
    c7_21: { tipo: "narracao", efeito: "tremor", texto: "Ele torce o braço do Kaito e acerta um joelho nas costelas dele. O Kaito dobra. Mas não cai. Ele gira, solta o braço e acerta o Ren no queixo com o cotovelo. O Ren dá dois passos para trás.", proxima: "c7_22" },
    c7_22: { tipo: "narracao", texto: "E ri. Com sangue no canto da boca. Ri de verdade, com os olhos cinza brilhando.", proxima: "c7_23" },
    c7_23: { quem: "ren", texto: "Isso. Finalmente alguém divertido.", proxima: "c7_24" },
    c7_24: { tipo: "narracao", efeito: "tremor", texto: "Eles vão de novo. É rápido, sujo, brutal. O Kaito é mais forte. O Ren é mais rápido. Nenhum dos dois cai. Nenhum dos dois para. Cada soco que um acerta, o outro devolve.", proxima: "c7_25" },
    c7_25: { tipo: "narracao", texto: "A SN dá um passo para entrar. O Ren fala sem tirar os olhos do Kaito, desviando de um soco.", proxima: "c7_26" },
    c7_26: { quem: "ren", texto: "Se você entrar, SN, tem mais quinze do outro lado do muro. E eles sabem onde fica a barraca de karaokê. E a casa mal-assombrada. E o café.", proxima: "c7_esc7" },

    // ▶ ESCOLHA 7 — Entrar ou não na briga do Kaito com o Ren?
    c7_esc7: { escolhas: [
      { texto: "A. Entrar mesmo assim. Ninguém fica sozinho hoje. Nem o Kaito.", proxima: "c7_7a_1", pontos: { kaito: 3, desvio: 2 }, flags: ["Entrou_briga_Ren"] },
      { texto: "B. Não entrar. Proteger o Blake e o Ryuji, e confiar no Kaito.", proxima: "c7_7b_1", pontos: { kaito: 2 }, flags: ["Confiou_Kaito"] },
      { texto: "C. Gritar pro Blake: “Vai ajudar ele! Vocês dois juntos!”", proxima: "c7_7c_1", pontos: { kaito: 2, blake: 2 }, flags: ["Blake_ajudou_Kaito"] }
    ]},
    c7_7a_1: { tipo: "narracao", efeito: "tremor", texto: "Ela entra. O Ren vira para ela no mesmo instante. Por um segundo, ele está de costas para o Kaito. É o suficiente. O Kaito acerta ele nas costas com tanta força que o Ren bate no muro.", proxima: "c7_7a_2" },
    c7_7a_2: { quem: "ren", texto: "...Dois contra um. Que feio.", proxima: "c7_7a_3" },
    c7_7a_3: { quem: "eu", texto: "Você trouxe vinte e um.", proxima: "c7_27" },
    c7_7b_1: { tipo: "narracao", texto: "Ela fica. Na frente do Blake machucado e do Ryuji. Olhando o Kaito lutar. Cada soco que o Ren acerta nele dói nela também.", proxima: "c7_7b_2" },
    c7_7b_2: { tipo: "narracao", texto: "O Kaito leva um soco no rosto. Cambaleia. Olha para trás. Vê ela ali, parada, protegendo os outros. Sem entrar. Esperando. Confiando que ele aguenta.", proxima: "c7_7b_2b" },
    c7_7b_2b: { tipo: "narracao", sprite: "kaito", texto: "E, no meio da briga, com sangue no canto da boca, o Kaito sorri. Rápido. Quase nada. Mas ela vê.", proxima: "c7_7b_2c" },
    c7_7b_2c: { quem: "kaito", texto: "...Ela confia em mim.", proxima: "c7_7b_3" },
    c7_7b_3: { tipo: "narracao", efeito: "tremor", texto: "Ele volta. Mais rápido do que antes. Acerta o Ren três vezes seguidas. O Ren cai sobre um joelho pela primeira vez.", proxima: "c7_27" },
    c7_7c_1: { tipo: "narracao", texto: "O Blake não pensa. Ele entra. Machucado, sangrando, com a mão na lateral do corpo. Ele para do lado do Kaito sem dizer uma palavra.", proxima: "c7_7c_2" },
    c7_7c_2: { tipo: "narracao", texto: "O Kaito olha para ele. O Blake olha de volta. Nenhum dos dois pede desculpa. Os dois só levantam a guarda ao mesmo tempo, do mesmo jeito, como faziam aos cinco anos.", proxima: "c7_7c_3" },
    c7_7c_3: { quem: "ren", texto: "Ah. A reconciliação. Que lindo. Que chato.", proxima: "c7_27" },

    // (todas as opções continuam aqui)
    c7_27: { tipo: "narracao", texto: "Lanternas de mão do outro lado da lona. Vozes de adulto. O coordenador gritando. Passos de muita gente.", proxima: "c7_28" },
    c7_28: { tipo: "narracao", texto: "O Ren limpa o sangue da boca com as costas da mão. Olha para o Kaito, depois para a SN. E sorri de novo, como se nada tivesse acontecido.", proxima: "c7_29" },
    c7_29: { quem: "ren", texto: "Empate, Kaito. Por hoje. Eu adoro empates. Eles sempre pedem revanche.", proxima: "c7_30" },
    c7_30: { tipo: "narracao", texto: "Ele sobe no muro em dois movimentos. Pega a jaqueta verde dobrada. Os garotos da Midorata pulam atrás dele, carregando os que não conseguem andar.", proxima: "c7_31" },
    c7_31: { quem: "ren", texto: "Bom fim de semana, colegas. Até segunda. Eu sento na terceira carteira da janela, lembram?", proxima: "c7_32" },
    c7_32: { tipo: "narracao", sprite: null, texto: "E some do outro lado do muro.", proxima: "c7_33" },
    c7_33: { tipo: "narracao", texto: "Quando o coordenador chega com a lanterna, só tem quatro alunos atrás do palco. Machucados, sujos de terra, ofegantes. E uma pilha de cadeiras dobráveis espalhada pelo chão.", proxima: "c7_34" },
    c7_34: { quem: "coordenador", texto: "O QUE ACONTECEU AQUI?", proxima: "c7_35" },
    c7_35: { quem: "ryuji", sprite: "ryuji", texto: "As cadeiras caíram, professor. Em cima da gente. Todas. Ao mesmo tempo.", proxima: "c7_36" },
    c7_36: { tipo: "narracao", texto: "O coordenador olha para o Ryuji. Para o Kaito com o olho fechando. Para o Blake com o supercílio aberto e a camiseta manchada de sangue. Para a SN com a terra no cabelo. Respira fundo, muito fundo.", proxima: "c7_37" },
    c7_37: { quem: "coordenador", texto: "Enfermaria. Os quatro. Agora. E segunda-feira a gente conversa sobre essas cadeiras.", proxima: "c8_01" },

    /* =================== CENA 8 — DEPOIS =================== */
    // Cenário: degrau da enfermaria, de fora, noite (usa "corredor"). A música do festival ainda toca ao longe.
    c8_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Cena 8 — Depois", sprite: null, texto: "Na enfermaria, a enfermeira da escola limpa o corte na lateral do Blake e fica um tempo em silêncio. Depois diz que ele teve sorte: a faca entrou de lado e saiu antes de chegar em qualquer lugar importante. Ela fecha com pontos, coloca mais três no supercílio e gelo no olho do Kaito. O Ryuji não tem nada, mas pede um curativo mesmo assim, “por solidariedade”.", proxima: "c8_01b" },
    c8_01b: { tipo: "pensamento", texto: "Sorte não. Um soco. Se eu chegasse um segundo depois, a faca ia até o fim.", proxima: "c8_02" },
    c8_02: { tipo: "narracao", texto: "Depois, os quatro sentam no degrau de fora da enfermaria. Lá longe, no pátio, o festival continua. Lanternas. Música. Gente rindo. Ninguém lá faz ideia.", proxima: "c8_03" },
    c8_03: { tipo: "narracao", sprite: "kaito", texto: "O Kaito e o Blake estão sentados lado a lado. Pela primeira vez desde quarta. Com um palmo de distância entre eles.", proxima: "c8_04" },
    c8_04: { quem: "kaito", texto: "...A escala estava certa. Os fundos não têm entrada.", proxima: "c8_05" },
    c8_05: { quem: "blake", sprite: "blake", texto: "Tinha. Pelo muro. Eu errei.", proxima: "c8_06" },
    c8_06: { quem: "kaito", sprite: "kaito", texto: "Eu falei aquilo. Pra você ir sozinho. Eu nunca quis...", proxima: "c8_07" },
    c8_07: { quem: "blake", sprite: "blake", texto: "Eu sei.", proxima: "c8_08" },
    c8_08: { quem: "kaito", sprite: "kaito", texto: "E aquilo do Victor. Você estava errado.", proxima: "c8_09" },
    c8_09: { quem: "blake", sprite: "blake", texto: "Não estava, não.", proxima: "c8_10" },
    c8_10: { quem: "kaito", sprite: "kaito", texto: "...Não estava, não.", proxima: "c8_11" },
    c8_11: { tipo: "narracao", texto: "O Blake encosta o ombro no do Kaito. O palmo de distância some. O Kaito não se afasta. O Ryuji, do outro lado, finge que está chorando e enxuga lágrimas que não existem.", proxima: "c8_12" },
    c8_12: { quem: "ryuji", sprite: "ryuji", texto: "Papai e papai fizeram as pazes. Eu vou poder voltar a ter uma infância normal.", proxima: "c8_13" },
    c8_13: { quem: "kaito", sprite: "kaito", texto: "Ryuji. Eu te amo, mas cala a boca.", proxima: "c8_14" },
    c8_14: { quem: "ryuji", sprite: "ryuji", texto: "Ele disse que me ama! Anota! Alguém anota!", proxima: "c8_15" },
    c8_15: { tipo: "narracao", sprite: "blake", texto: "Mais tarde, quando o Kaito e o Ryuji vão buscar água, o Blake vira para a SN. Ele olha para ela por muito tempo. Com o supercílio costurado, um curativo enorme na lateral do corpo e o relógio do pai no pulso, ainda funcionando.", proxima: "c8_16" },
    c8_16: { quem: "blake", texto: "Você me seguiu o dia inteiro. No banheiro. Na farmácia. Na padaria. Até aqui.", proxima: "c8_17" },
    c8_17: { quem: "blake", texto: "Você sabia que eles iam vir.", proxima: "c8_18" },
    c8_18: { quem: "blake", texto: "Eu não vou perguntar como. Eu prometi uma vez que, quando a coisa ruim fosse chegar, você ia me avisar antes. Você fez mais do que avisar.", proxima: "c8_esc8" },

    // ▶ ESCOLHA 8 — Com o Blake, no degrau da enfermaria
    c8_esc8: { escolhas: [
      { texto: "A. “Eu só não queria que você ficasse sozinho.”", proxima: "c8_8a_1", pontos: { blake: 2 } },
      { texto: "B. Encostar a cabeça no ombro machucado dele, devagar, com cuidado.", proxima: "c8_8b_1", pontos: { blake: 3 }, flags: ["Ombro_Blake_festival"] },
      { texto: "C. “Fala com a Mio hoje. Antes que alguma outra coisa aconteça.”", proxima: "c8_8c_1", pontos: { blake: 1, mio: 3 }, flags: ["Empurrou_Blake_Mio_festival"] }
    ]},
    c8_8a_1: { quem: "blake", texto: "Eu sempre fico sozinho. Eu nunca liguei.", proxima: "c8_8a_2" },
    c8_8a_2: { quem: "eu", texto: "Eu ligo.", proxima: "c8_8a_3" },
    c8_8a_3: { tipo: "narracao", texto: "Ele fica em silêncio. Depois balança a cabeça uma vez, devagar, como quem guarda uma coisa num lugar seguro.", proxima: "c8_19" },
    c8_8b_1: { tipo: "narracao", texto: "Ela encosta a cabeça no ombro dele. Com cuidado, do lado que não está machucado. O Blake prende a respiração.", proxima: "c8_8b_2" },
    c8_8b_2: { tipo: "narracao", texto: "Ele não fala nada. Ele não se mexe. Mas, depois de um tempo, ela sente a mão enorme dele encostando de leve no cabelo dela. Só por um segundo. Depois ele tira, como se tivesse encostado num lugar que não podia.", proxima: "c8_19" },
    c8_8c_1: { tipo: "narracao", sprite: "mio", texto: "O Blake olha para o pátio. Lá longe, no meio das lanternas, uma garota loira enrolada num lençol, ou de avental, ou segurando um microfone, está procurando alguém na multidão, ansiosa.", proxima: "c8_8c_2" },
    c8_8c_2: { quem: "blake", texto: "...Ela está me procurando.", proxima: "c8_8c_3" },
    c8_8c_3: { quem: "eu", texto: "Desde o primeiro ano.", proxima: "c8_8c_4" },
    c8_8c_4: { tipo: "narracao", texto: "Ele se levanta devagar, segurando a lateral do corpo, e anda na direção do pátio. A SN fica sentada no degrau, sozinha, olhando ele ir. Feliz por ela. E com um aperto estranho no peito, que ela decide não examinar agora.", proxima: "c8_19" },

    // (todas as opções continuam aqui)
    c8_19: { tipo: "narracao", sprite: "kaito", texto: "O Kaito volta com dois copos de água. Entrega um para ela sem olhar. Senta do lado dela, com o olho roxo começando a fechar.", proxima: "c8_20" },
    c8_20: { quem: "kaito", texto: "Amanhã você vai sair com o galinha.", proxima: "c8_21" },
    c8_21: { tipo: "narracao", texto: "Não é uma pergunta. É uma afirmação. Dita com a voz mais indiferente do mundo, olhando para o copo de água.", proxima: "c8_cam0" },
    c8_cam0: { caminhos: [
      { flag: "Confiou_Kaito", proxima: "c8_kc_1" }
    ], proxima: "c8_cam1" },
    c8_kc_1: { quem: "kaito", texto: "Você não entrou. Lá atrás.", proxima: "c8_kc_2" },
    c8_kc_2: { quem: "eu", texto: "Você não precisava de mim.", proxima: "c8_kc_3" },
    c8_kc_3: { tipo: "narracao", texto: "Ele fica olhando para o copo. O canto da boca dele sobe. Ele tenta esconder com a mão. Não consegue direito.", proxima: "c8_kc_4" },
    c8_kc_4: { quem: "kaito", texto: "...É. Não precisava.", proxima: "c8_cam1" },
    c8_cam1: { caminhos: [
      { flag: "Victor_sabado_nao", proxima: "c8_k_nao" }
    ], proxima: "c8_k_sim" },
    c8_k_sim: { quem: "eu", texto: "Vou.", proxima: "c8_k_sim2" },
    c8_k_sim2: { quem: "kaito", texto: "Legal. Ótimo. Que bom. Fliperama é legal.", proxima: "c8_k_sim3" },
    c8_k_sim3: { tipo: "narracao", texto: "Ele aperta o copo de plástico tão forte que a água transborda e molha a calça dele. Ele não percebe.", proxima: "c8_22" },
    c8_k_nao: { quem: "eu", texto: "Eu disse que não.", proxima: "c8_k_nao2" },
    c8_k_nao2: { quem: "kaito", texto: "Ele disse pro pátio inteiro que vocês vão.", proxima: "c8_k_nao3" },
    c8_k_nao3: { quem: "eu", texto: "Ele é insistente. Talvez eu vá só pra ele parar de perguntar.", proxima: "c8_k_nao4" },
    c8_k_nao4: { tipo: "narracao", texto: "O Kaito não responde. Mas aperta o copo de plástico tão forte que a água transborda e molha a calça dele. Ele não percebe.", proxima: "c8_22" },
    c8_22: { quem: "kaito", texto: "Hoje, quando eu vi você atrás do palco... do lado dele... eu achei que ia chegar tarde. Dos dois.", proxima: "c8_23" },
    c8_23: { quem: "kaito", texto: "Eu nunca corri tão rápido na minha vida.", proxima: "c8_24" },
    c8_24: { tipo: "narracao", texto: "Ele fala isso olhando para frente. Sem olhar para ela. Depois toma a água de uma vez, levanta e vai embora antes que ela consiga responder.", proxima: "c8_25" },
    c8_25: { tipo: "pensamento", texto: "Ele não vai admitir. Nunca. Mas ele correu.", proxima: "ep_01" },

    /* =================== EPÍLOGO — SÁBADO =================== */
    // Cenário: quarto da SN, sábado de manhã. Música: piano do prólogo, leve e claro pela primeira vez.
    ep_01: { tipo: "narracao", cenario: "quarto-sn", roupa: null, transicao: "tempo", legenda: "Epílogo — Sábado", sprite: null, texto: "Sábado. O sol entra pela janela do quarto. Lá fora, um passarinho canta em cima do muro do vizinho. Não tem maçã nenhuma.", proxima: "ep_02" },
    ep_02: { tipo: "narracao", texto: "O celular está cheio de mensagens. O grupo do Kaito virou uma bagunça de fotos do festival.", proxima: "ep_03" },
    ep_03: { tipo: "narracao", texto: "O Blake com o supercílio costurado, levantando a camiseta para mostrar o curativo como se fosse um troféu. O Kaito de olho roxo, de costas, tentando fugir da câmera. O Ryuji com o curativo “por solidariedade”. O Takeo segurando a placa do V ao contrário. A Hana e a Mio abraçadas debaixo das lanternas.", proxima: "ep_04" },
    ep_04: { tipo: "narracao", texto: "Todo mundo inteiro. Todo mundo vivo.", proxima: "ep_05" },
    ep_05: { tipo: "narracao", texto: "Ela abre o caderno azul. Na linha 28, onde estava escrito “21h14. Atrás do palco. O Blake”, ela passa um risco. Um só. E escreve do lado, pequeno: “Ele está vivo. Eu estava lá.”", proxima: "ep_06" },
    ep_06: { tipo: "narracao", texto: "30. A Midorata é do Ren. A Matilha era só a vitrine.", proxima: "ep_07" },
    ep_07: { tipo: "narracao", texto: "31. O Ren luta. E luta muito. Ele empatou com o Kaito.", proxima: "ep_08" },
    ep_08: { tipo: "narracao", texto: "32. Ele perguntou como eu sabia. Ele não sabe das visões. Ainda.", proxima: "ep_09" },
    ep_09: { tipo: "narracao", texto: "Ela para. Olha para a lista. Trinta e duas linhas. Pouco mais de duas semanas.", proxima: "ep_10" },
    ep_10: { tipo: "pensamento", texto: "Duas semanas atrás, eu acordei numa sala de aula achando que estava sonhando. Eu não conseguia nem olhar pra Mio sem chorar.", proxima: "ep_11" },
    ep_11: { tipo: "pensamento", texto: "Ontem eu dei um soco num garoto da Midorata com tanta força que ele voou até o muro. Na frente do Blake. E não pedi desculpa por isso.", proxima: "ep_12" },
    ep_12: { tipo: "pensamento", texto: "Eu não sei exatamente quem eu estou virando. Mas eu gosto mais dela do que de quem eu era.", proxima: "ep_13" },
    ep_13: { tipo: "narracao", texto: "O celular vibra. Uma mensagem nova.", proxima: "ep_14" },
    ep_14: { quem: "mensagem", rotulo: "Victor 😏", texto: "bom dia gatinha. soube que vc derrubou metade de uma gangue ontem atrás do palco. agora eu tô com medo de você. e mais interessado ainda", proxima: "ep_15" },
    ep_15: { quem: "mensagem", rotulo: "Victor 😏", texto: "tô na sua esquina. 15 minutos adiantado. não se acostuma 😏", proxima: "ep_16" },
    ep_16: { tipo: "narracao", sprite: "victor", texto: "Ela vai até a janela. Lá embaixo, na esquina da padaria, encostado no poste onde o Takeo costumava esperar, está o Victor. Com a camiseta preta, o cabelo preso de qualquer jeito, um pirulito na boca. E, sentado do lado dele, de coleira nova, um cachorro caramelo de uma orelha caída.", proxima: "ep_17" },
    ep_17: { tipo: "narracao", texto: "O Victor vê ela na janela. Tira o pirulito da boca. E acena com ele, como quem acena com uma bandeira.", proxima: "ep_18" },
    ep_18: { tipo: "pensamento", texto: "Ele trouxe o cachorro.", proxima: "ep_19" },
    ep_19: { tipo: "narracao", texto: "Ela pega a mochila. Prende o cabelo. Solta de novo. Olha no espelho uma vez. Só uma.", proxima: "ep_20" },
    ep_20: { tipo: "narracao", texto: "E desce a escada correndo.", proxima: "ep_fim" },

    // Fim do Capítulo 8 (crie a entrada "capitulo8" em dados/capitulos.js). O encontro com o Victor fica para o Capítulo 9.
    ep_fim: { fim: "capitulo8" }
  }
});

/*
 * GANCHO PARA O CAPÍTULO 9 (anotações do roteiro)
 *  • Sábado: o encontro com o Victor (e o Caramelo). Fliperama da estação.
 *  • O Ren agora sabe que a SN sabia do ataque antes. Ele vai querer descobrir como.
 *  • Segunda-feira: o Ren volta para a terceira carteira da janela como se nada tivesse acontecido.
 *    O coordenador quer “conversar sobre as cadeiras”.
 *  • Kaito e Blake fizeram as pazes. O Kaito admitiu (quase) o ciúme do Victor.
 *  • Mio e Blake: ele foi atrás dela no festival? (Empurrou_Blake_Mio_festival)
 *  • A SN pode ter novas visões do futuro alterado.
 *
 * ESCOLHAS DO CAPÍTULO (8)
 *  1 Kaito ou Blake na quinta · 2 Última tentativa · 3 Primeira desculpa · 4 Segunda desculpa
 *  5 Espetinho do Victor · 6 Briga atrás do palco · 7 Kaito contra o Ren · 8 Blake na enfermaria
 *
 * FLAGS NOVAS
 *  Falou_Kaito_primeiro · Falou_Blake_primeiro · Puxou_os_dois · Avisou_Blake · Avisou_Kaito
 *  Plano_sombra · Desculpa_mora · Desculpa_fita · Desculpa_detetive · Desculpa_perfume
 *  Desculpa_perto · Sem_desculpa · Espetinho_Victor · Seguiu_Blake_festival · Espetinho_Kaito
 *  Lutou_com_Blake · Jogou_faca · Gritou_ajuda · Entrou_briga_Ren · Confiou_Kaito
 *  Blake_ajudou_Kaito · Ombro_Blake_festival · Empurrou_Blake_Mio_festival
 */