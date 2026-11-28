/*
 * =====================================================================
 *  CAPÍTULO 45 — Material de licitação
 *  Quarta-feira, logo depois do Capítulo 44.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Cenas com todos os meninos em todas as rotas. Bloco de rota à noite.
 *
 *  CONTEXTO (Cap. 44)
 *    • Terça: 4h na lan (mouse e fone quebrados), a foto postada, o banco, a parede. O Ren assumiu a parede.
 *    • O Kaito ficou parado do outro lado da rua na saída, com o capacete.
 *
 *  O QUE ACONTECE
 *    • Terça à noite (contado por ele): o Kaito passou na lan. O dono comentou do mouse e do fone. Ele sabe onde
 *      ela passou a madrugada, e como.
 *    • Quarta, 7h: o Takeo não vem (o médico marcou o gesso pra cedo). O Kaito aparece no hall.
 *      Conversa sincera dos dois lados. Nada se resolve. Ela ainda está chateada. Ele ainda se sente mal.
 *    • Durante o dia eles voltam a trocar mensagem: ela manda, ele responde.
 *    • A Serena continua.
 *    • Dia normal na escola. Ela ainda quebra as coisas, mas é engraçado: ninguém desconfia, a escola culpa o
 *      "material de licitação". O Takeo chega tarde, sem gesso.
 *    • Bloco de rota à noite.
 *
 *  REGRAS
 *    • Sala da SN: Takeo, Mio, Hana, Reina, Ren, Akane. Kaito, Blake, Ryuji, Victor e Serena são de outras salas.
 *    • Sem xadrez no Ren. O Ren não manda mensagem. Fala pouco. Sem narrar roupa. Sem flashback.
 *    • A Serena não explica plano. O Kaito não dá um basta de vez.
 *
 *  PERSONAGENS
 *    Mio, Hana, Reina, Akane, Kaito, Takeo, Victor, Blake, Ryuji, Ren, Serena.
 *    Sem sprite / rótulo: Victor, Ren, Akane, Professora, Professor de educação física, Inspetor geral.
 *
 *  CENÁRIOS
 *    quarto-sn · apartamento (hall) · saida-colegio · sala-de-aula · corredor · patio-fundos · vestiario
 *
 *  Crie a entrada "capitulo45" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo45", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — 6H30 =================== */
    c1_01: { roupa: "escolar", tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Quarta, 6h30 — Cena 1", sprite: null, texto: "Quarta-feira. Dessa vez ela dorme. Pouco, mas dorme, e acorda com o despertador, como uma pessoa normal, com o rosto marcado de travesseiro e a mão fechada em volta de nada.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "Ela desliga o despertador com cuidado. Com um dedo. O despertador sobrevive. Ela considera isso uma vitória.", proxima: "c1_03" },
    c1_03: { tipo: "narracao", texto: "O celular rachado vibra em cima da mesinha.", proxima: "c1_04" },
    c1_04: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Desculpa desculpa desculpa. O médico ligou agora. Mudaram o horário do gesso pra sete e meia. A minha avó já está na porta com a bolsa. Eu não vou conseguir passar aí. Eu chego atrasado na escola. Desculpa. Eu ia com dois braços.", proxima: "c1_05" },
    c1_05: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Anda devagar. Olha pros dois lados. A minha avó mandou falar isso também.", proxima: "c1_06" },
    c1_06: { tipo: "narracao", texto: "Ela sorri. Pequeno. É a primeira vez que ela sorri antes das sete da manhã em uma semana.", proxima: "c1_07" },
    c1_07: { tipo: "pensamento", texto: "Então hoje é a pé. Sozinha. Tudo bem. Eu já sei fazer isso.", proxima: "c1_08" },
    c1_08: { tipo: "narracao", texto: "Ela se arruma. Fecha a porta de casa com dois dedos, por causa da maçaneta nova que o síndico colocou ontem à noite, resmungando sobre a qualidade dos parafusos de hoje em dia.", proxima: "c1_09" },
    c1_09: { tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", legenda: "Quarta, 7h", texto: "Ela desce a escada. E, no alto dos três degraus da fita preta, para.", proxima: "c1_10" },
    c1_10: { tipo: "narracao", sprite: "kaito", texto: "Ele está lá. Encostado na parede, no lugar de sempre. Com o capacete vermelho no braço. Os olhos de quem dormiu tão pouco quanto ela.", proxima: "c1_11" },
    c1_11: { tipo: "narracao", texto: "Ele não manda “embaixo”. Ele não manda nada. Quando ela aparece no degrau, ele desencosta da parede devagar, como quem tem medo de assustar um gato.", proxima: "c1_12" },
    c1_12: { quem: "kaito", texto: "Oi.", proxima: "c1_13" },
    c1_13: { quem: "eu", texto: "...Oi.", proxima: "c1_14" },
    c1_14: { tipo: "narracao", texto: "Ela fica no degrau de cima. Ele fica embaixo. Os três degraus no meio, como um rio pequeno.", proxima: "c1_15" },
    c1_15: { quem: "kaito", texto: "O Takeo não vem, né. Ele mandou no grupo. O gesso.", proxima: "c1_16" },
    c1_16: { quem: "eu", texto: "Você veio porque o Takeo não vem?", proxima: "c1_17" },
    c1_17: { quem: "kaito", texto: "Não. Eu vinha de qualquer jeito. Eu falei que vinha. Eu vou parar de falar coisa que eu não faço.", proxima: "c2_01" },

    /* =================== CENA 2 — O HALL =================== */
    c2_01: { tipo: "narracao", transicao: "tempo", legenda: "Cena 2", sprite: "kaito", texto: "Ele olha para o capacete no braço. Mexe na fivela sem perceber, abrindo e fechando, clique, clique.", proxima: "c2_02" },
    c2_02: { quem: "kaito", texto: "Ontem à noite eu passei na lan.", proxima: "c2_03" },
    c2_03: { tipo: "narracao", texto: "Ela fica parada. Ele não olha para ela. Ele olha para a fivela.", proxima: "c2_04" },
    c2_04: { caminhos: [
      { flag: "Contou_lan", proxima: "c2_04a" }
    ], proxima: "c2_04b" },
    c2_04a: { quem: "kaito", texto: "Não pra ver se era verdade. Eu sabia que era verdade. Eu fui porque eu queria ver onde você foi, quando não queria ficar perto de mim.", proxima: "c2_05" },
    c2_04b: { quem: "kaito", texto: "Você não me falou onde estava. Eu não ia perguntar de novo. Mas a lan era o único lugar que eu pensei. Eu fui ver.", proxima: "c2_05" },
    c2_05: { quem: "kaito", texto: "O dono me reconheceu. Do torneio. Ele falou que você chegou às quatro e meia. Que você jogou sozinha até quase sete. Que ganhou quase todas.", proxima: "c2_06" },
    c2_06: { quem: "kaito", texto: "E que quebrou um mouse e um fone. Ele estava rindo quando falou. Ele disse que nunca viu ninguém jogar com tanta raiva.", proxima: "c2_07" },
    c2_07: { tipo: "pensamento", texto: "Ótimo. O dono da lan virou a rede de fofoca da madrugada.", proxima: "c2_08" },
    c2_08: { quem: "kaito", texto: "Eu paguei. O mouse e o fone. Antes que você fale alguma coisa. Eu paguei porque a raiva era minha. Você só jogou ela no mouse.", proxima: "c2_09" },
    c2_09: { tipo: "narracao", texto: "Ela abre a boca para brigar com ele por ter pagado. E não sai. Porque ele não falou isso para ser bonzinho. Ele falou como quem está pagando uma dívida que sabe que tem.", proxima: "c2_10" },
    c2_10: { quem: "kaito", texto: "Eu vou falar tudo agora. Tá? Uma vez. Se eu parar no meio, eu não vou conseguir falar de novo.", proxima: "c2_11" },
    c2_11: { tipo: "narracao", texto: "Ela não responde. Ela senta no degrau de cima. Ele entende isso como um sim.", proxima: "c2_12" },
    c2_12: { quem: "kaito", texto: "Na quinta, a Serena me mandou a foto. Eu vi você e o Victor, daquele jeito. E eu fiquei pensando que eu era burro. Que você trata todo mundo bem, e eu achei que era especial, e era só... você sendo você. Com todo mundo.", proxima: "c2_13" },
    c2_13: { quem: "kaito", texto: "Ela já tinha falado isso antes. Que você anda com todos. Que eu era só mais um. Eu não acreditei. Aí veio a foto e eu acreditei. Rápido. Eu acreditei rápido demais.", proxima: "c2_14" },
    c2_14: { quem: "kaito", texto: "Eu não te perguntei porque eu tive medo da resposta. Se eu perguntasse e você falasse que sim, que era o Victor, eu ia ter que ouvir. Então eu não perguntei. Eu fiquei longe. Parece que é mais fácil. Não é.", proxima: "c2_15" },
    c2_15: { quem: "kaito", texto: "Na chuva, ela pediu. Eu olhei pra você e pensei: ela nem vai ligar. E eu queria que você ligasse. Isso é a coisa mais idiota que eu já fiz. Eu levei ela pra ver se você ligava.", proxima: "c2_16" },
    c2_16: { quem: "kaito", texto: "E na segunda ela me ligou chorando e eu não consegui dizer não. Eu nunca consigo dizer não quando alguém chora. Eu achei que dava tempo. Não deu. Eu sei o que eu fiz. Eu sei que você ficou esperando no hall.", proxima: "c2_17" },
    c2_17: { tipo: "narracao", texto: "Ele para. Respira. Fecha a fivela do capacete com um clique.", proxima: "c2_18" },
    c2_18: { quem: "kaito", texto: "Eu não estou com ela. Eu não quero nada com ela. Mas eu também não sei como fazer ela parar sem parecer que eu sou um monstro. Ela chora, e todo mundo olha pra mim.", proxima: "c2_19" },
    c2_19: { quem: "kaito", texto: "Pronto. É isso. Agora você.", proxima: "c2_20" },
    c2_20: { tipo: "narracao", texto: "Ela fica muito tempo em silêncio. Olhando para ele, lá embaixo, no pé dos degraus, com o capacete fechado nas mãos e a cara de quem acabou de carregar uma caixa muito pesada até o terceiro andar.", proxima: "c2_esc1" },

    // ▶ ESCOLHA 1 — A vez dela
    c2_esc1: { escolhas: [
      { texto: "A. Falar do hall. Do relógio da cozinha. De esperar.", proxima: "c2_1a_1", pontos: { kaito: 3 }, flags: ["Sincera_hall"] },
      { texto: "B. Falar da foto. Da tinta. Do que doeu de verdade: ele não ter perguntado.", proxima: "c2_1b_1", pontos: { kaito: 3 }, flags: ["Sincera_foto"] },
      { texto: "C. Falar da raiva. Que ela não sabe o que fazer com ela.", proxima: "c2_1c_1", pontos: { kaito: 3 }, flags: ["Sincera_raiva"] }
    ]},
    c2_1a_1: { quem: "eu", texto: "Na segunda, eu fiquei na sala olhando pro relógio da cozinha. Sete horas. Sete e cinco. Sete e dez. Aí eu desci e o seu pedaço de parede estava vazio. E eu fiquei olhando pra ele. Pra uma parede.", proxima: "c2_1a_2" },
    c2_1a_2: { quem: "eu", texto: "Eu nunca me senti tão boba. Eu tenho... eu me sinto muito mais velha do que eu sou, Kaito. E eu fiquei olhando pra uma parede como uma menina de doze anos.", proxima: "c2_21" },
    c2_1b_1: { quem: "eu", texto: "Era tinta. Azul. Ele tirou. Foi um segundo, e o Caramelo latiu, e acabou. Se você tivesse perguntado, eu teria te contado em dez segundos.", proxima: "c2_1b_2" },
    c2_1b_2: { quem: "eu", texto: "Não foi a foto que doeu. Foi você ter decidido sozinho o que eu sou. Sem me perguntar. Você ouviu ela e não me ouviu.", proxima: "c2_21" },
    c2_1c_1: { quem: "eu", texto: "Eu estou com raiva. Muita. De você, dela, de mim. E eu não sei o que fazer com ela. Ela sai pelas mãos. Eu quebro as coisas. Não é jeito de falar. Eu quebro mesmo.", proxima: "c2_1c_2" },
    c2_1c_2: { quem: "kaito", texto: "...O mouse.", proxima: "c2_1c_3" },
    c2_1c_3: { quem: "eu", texto: "O mouse. O fone. O meu celular. Um caixote de laranja. Uma maçaneta. E aí ontem o banco. Na frente de todo mundo. Eu não queria. Eu nunca quero.", proxima: "c2_1c_4" },
    c2_1c_4: { tipo: "narracao", texto: "Ele não pergunta como. Ele só olha para as mãos dela, apoiadas nos joelhos, e depois para o rosto dela, e não tem medo nenhum na cara dele. Tem outra coisa. Uma coisa que parece com culpa.", proxima: "c2_21" },

    // (todas as opções continuam aqui)
    c2_21: { quem: "eu", texto: "Eu ainda estou chateada, Kaito. Eu não vou fingir que não estou só porque você falou tudo bonito.", proxima: "c2_22" },
    c2_22: { quem: "kaito", texto: "Eu não falei bonito. Eu falei mal. Mas foi verdade.", proxima: "c2_23" },
    c2_23: { quem: "kaito", texto: "E eu ainda estou me sentindo um lixo. Então a gente está empatado.", proxima: "c2_24" },
    c2_24: { tipo: "narracao", texto: "Ela quase ri. Quase. Ele vê o quase e não força. Ele só levanta o capacete vermelho, devagar, e segura no ar, entre os dois.", proxima: "c2_25" },
    c2_25: { quem: "kaito", texto: "Eu não vou fingir que está tudo bem também. Mas eu posso te levar? Hoje. Só hoje. Você não precisa falar nada no caminho.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — O capacete
    c2_esc2: { escolhas: [
      { texto: "A. Descer os três degraus. Pegar o capacete. Deixar ele fechar a fivela.", proxima: "c2_2a_1", pontos: { kaito: 3 }, flags: ["Deixou_fivela"] },
      { texto: "B. “Eu vou a pé. Mas você pode ir do meu lado, empurrando a moto.”", proxima: "c2_2b_1", pontos: { kaito: 3 }, flags: ["Empurrando_moto"] },
      { texto: "C. “Hoje não. Amanhã... talvez.”", proxima: "c2_2c_1", pontos: { kaito: 1 }, flags: ["Amanha_talvez"] }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "Ela desce os três degraus. Um. Dois. Três. Pega o capacete. Coloca. E não fecha a fivela. Ela espera.", proxima: "c2_2a_2" },
    c2_2a_2: { quem: "kaito", texto: "...Posso?", proxima: "c2_2a_3" },
    c2_2a_3: { tipo: "narracao", texto: "Ele pergunta. Ele nunca perguntou antes. Ela faz que sim. Ele fecha a fivela embaixo do queixo dela, devagar, com os dedos tremendo um pouco, encostando no pescoço dela. Clique. Ele tira a mão rápido, como quem encostou em coisa quente.", proxima: "c2_2a_4" },
    c2_2a_4: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", texto: "No caminho, ela segura na camisa dele. Não na cintura. Ainda não. No primeiro sinal vermelho, ele não coloca a mão em cima da dela. Mas ela vê a mão dele parada no joelho, aberta, pensando nisso.", proxima: "c3_01" },
    c2_2b_1: { quem: "eu", texto: "Eu vou a pé. Mas você pode ir do meu lado. Empurrando a moto.", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "kaito", texto: "Empurrando? São vinte minutos. Ela pesa cento e cinquenta quilos.", proxima: "c2_2b_3" },
    c2_2b_3: { quem: "eu", texto: "Então é bom você começar agora.", proxima: "c2_2b_4" },
    c2_2b_4: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", texto: "Ele empurra. Vinte e cinco minutos, na verdade, porque na subida da padaria ele quase morre. Ela não ajuda. Ela anda do lado, com as mãos no bolso, e ele não reclama uma vez, só respira alto. Eles chegam atrasados. Os dois. Juntos. A rede de fofoca não sabe o que fazer com essa informação.", proxima: "c3_01" },
    c2_2c_1: { quem: "eu", texto: "Hoje não. Amanhã... talvez.", proxima: "c2_2c_2" },
    c2_2c_2: { tipo: "narracao", texto: "Ele faz que sim. Não insiste. Abaixa o capacete. E, quando ela passa do lado dele, ele fala baixo.", proxima: "c2_2c_3" },
    c2_2c_3: { quem: "kaito", texto: "“Talvez” é melhor do que eu achei que ia ouvir.", proxima: "c2_2c_4" },
    c2_2c_4: { tipo: "narracao", cenario: "rua", transicao: "tempo", texto: "Ela vai a pé. Na metade do caminho, ela olha para trás, só uma vez. A moto está parada na esquina do prédio. Ele não seguiu. Ele respeitou. E isso, de algum jeito, é pior e melhor ao mesmo tempo.", proxima: "c3_01" },

    /* =================== CENA 3 — A SALA (licitação) =================== */
    c3_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Primeira aula — Cena 3", sprite: "mio", texto: "Na sala, a Mio olha para a cara dela como quem lê um termômetro.", proxima: "c3_02" },
    c3_02: { quem: "mio", texto: "Você está... menos pior. Trinta por cento menos pior. O que aconteceu?", proxima: "c3_03" },
    c3_03: { quem: "eu", texto: "Ele foi no hall. A gente conversou. Não resolveu nada.", proxima: "c3_04" },
    c3_04: { quem: "mio", texto: "Não resolveu nada e você está trinta por cento menos pior. Entendi. Eu vou anotar isso como avanço.", proxima: "c3_05" },
    c3_05: { tipo: "narracao", sprite: "hana", texto: "A Hana, do lado, já está anotando. Na prancheta, embaixo de “Terça — protocolo de contenção, versão 2”, ela escreve “Quarta: diálogo realizado. Status: inconclusivo. Humor: +30%”.", proxima: "c3_06" },
    c3_06: { tipo: "narracao", sprite: null, texto: "A professora de português entra, pede silêncio e chama alguém para escrever as respostas do exercício no quadro. Chama ela.", proxima: "c3_07" },
    c3_07: { tipo: "narracao", texto: "Ela vai até o quadro. Pega o giz. Escreve a primeira palavra. O giz quebra. Normal. Giz quebra. Ela pega outro. Escreve meia palavra. Quebra. Pega outro.", proxima: "c3_08" },
    c3_08: { tipo: "narracao", texto: "O quarto giz não quebra. O quarto giz vira pó. Inteiro. Na mão dela. Uma nuvenzinha branca sobe na frente do quadro como fumaça de mágico.", proxima: "c3_09" },
    c3_09: { quem: "desconhecido", rotulo: "Professora", texto: "...Esse giz é o da licitação. Eu falei pra diretoria. Eu falei que esse giz não presta. Senta, querida, senta, não é culpa sua. Akane, vem você, escreve com caneta no caderno que eu passo depois.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", texto: "Ela volta para a carteira com a mão branca de pó até o pulso, como se tivesse afundado a mão num saco de farinha. A Mio olha para a mão dela. Olha para o quadro. Olha para ela.", proxima: "c3_11" },
    c3_11: { quem: "mio", texto: "Quatro gizes.", proxima: "c3_12" },
    c3_12: { quem: "eu", texto: "Licitação, Mio.", proxima: "c3_13" },
    c3_13: { quem: "mio", texto: "Licitação.", proxima: "c3_14" },
    c3_14: { tipo: "narracao", texto: "A Mio fala “licitação” do jeito que se fala “claro, aham”. Mas não pergunta mais.", proxima: "c3_15" },
    c3_15: { sprite: "ren", tipo: "narracao", texto: "Na carteira perto da porta, o Ren voltou. Com um papel dobrado em cima da mesa, que ela tem certeza que é uma advertência. Ele não olha para ela quando ela passa. Mas, quando ela senta, uma folha de papel toalha aparece em cima da carteira dela. Do nada. Dobrada.", proxima: "c3_16" },
    c3_16: { tipo: "narracao", texto: "Ela olha para a porta. O Ren está lendo. A página não vira. Ela limpa a mão no papel toalha.", proxima: "c3_17" },
    c3_17: { sprite: null, tipo: "pensamento", texto: "Eu ainda não sei o que fazer com o Ren. Mas o papel toalha foi útil.", proxima: "c3_18" },
    c3_18: { tipo: "narracao", texto: "O celular vibra no bolso, embaixo da carteira. Ela olha escondido.", proxima: "c3_19" },
    c3_19: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Chegou?", proxima: "c3_20" },
    c3_20: { tipo: "pensamento", texto: "Ele sabe que eu cheguei. Ele mandou mesmo assim.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — Mensagem
    c3_esc3: { escolhas: [
      { texto: "A. “Cheguei. Quebrei quatro gizes.”", proxima: "c3_3a_1", pontos: { kaito: 2 }, flags: ["Quatro_gizes"] },
      { texto: "B. “Cheguei.” Só isso.", proxima: "c3_3b_1", pontos: { kaito: 1 }, flags: ["Cheguei_seco"] },
      { texto: "C. “Você está mandando mensagem na aula de química?”", proxima: "c3_3c_1", pontos: { kaito: 2 }, flags: ["Aula_quimica"] }
    ]},
    c3_3a_1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Cheguei. Quebrei quatro gizes.", proxima: "c3_3a_2" },
    c3_3a_2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Quatro? A professora brigou?", proxima: "c3_3a_3" },
    c3_3a_3: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Ela culpou a licitação.", proxima: "c3_3a_4" },
    c3_3a_4: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "A licitação está me salvando muito ultimamente. Eu vou mandar um bolo pra licitação.", proxima: "c3_21" },
    c3_3b_1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Cheguei.", proxima: "c3_3b_2" },
    c3_3b_2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Tá. Bom. Desculpa mandar. Eu só queria saber.", proxima: "c3_3b_3" },
    c3_3b_3: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "(Eu sei que você chegou. Eu sei. Eu mandei mesmo assim.)", proxima: "c3_21" },
    c3_3c_1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Você está mandando mensagem na aula de química?", proxima: "c3_3c_2" },
    c3_3c_2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "O professor está de costas. Ele está escrevendo a tabela periódica inteira. Eu tenho uns quarenta elementos de tempo.", proxima: "c3_3c_3" },
    c3_3c_3: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Ele virou. Tchau.", proxima: "c3_21" },

    // (todas as opções continuam aqui)
    c3_21: { tipo: "narracao", texto: "Ela guarda o celular. A Mio está olhando para ela de lado, com a sobrancelha levantada até o cabelo.", proxima: "c3_22" },
    c3_22: { quem: "mio", texto: "Você sorriu pro celular. Eu vi. Trinta e cinco por cento.", proxima: "c4_01" },

    /* =================== CENA 4 — O TAKEO SEM GESSO =================== */
    c4_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Segunda aula — Cena 4", sprite: "takeo:escolar", texto: "No meio da segunda aula, a porta abre. O Takeo. Atrasado, ofegante, com um papel do hospital na mão para mostrar para a professora. E sem gesso.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "O braço dele, sem o gesso, é outro braço. Mais fino que o outro, mais branco, com a pele meio descascando, como um braço que passou semanas dentro de uma caverna.", proxima: "c4_03" },
    c4_03: { quem: "takeo", sprite: "takeo:escolar", texto: "Desculpa, professora. O raio-x. Tirei. Ficou bom. Ficou feio, mas ficou bom.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", texto: "Ele senta atrás dela. E, assim que a professora vira para o quadro, ele estica o braço novo por cima do ombro dela, para ela ver, como um troféu de feira.", proxima: "c4_05" },
    c4_05: { quem: "takeo", sprite: "takeo:escolar", texto: "Olha. Braço de frango. A minha avó chorou. Ela disse que parece que eu fiquei doente. Eu falei que eu fiquei curado. Ela chorou mais.", proxima: "c4_06" },
    c4_06: { quem: "takeo", sprite: "takeo:escolar", texto: "Desculpa por hoje de manhã. Eu ia com dois braços. Eu cheguei com dois braços. Só que atrasado. E um deles é de frango.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — O braço novo
    c4_esc4: { escolhas: [
      { texto: "A. Dar um “toca aqui” no braço novo. Com muito, muito cuidado.", proxima: "c4_4a_1", pontos: { takeo: 3 }, flags: ["Toca_aqui_frango"] },
      { texto: "B. “Ficou lindo, Takeo. O braço de frango mais bonito que eu já vi.”", proxima: "c4_4b_1", pontos: { takeo: 3 }, flags: ["Frango_lindo"] },
      { texto: "C. “O Kaito foi no hall hoje.” Contar pra ele.", proxima: "c4_4c_1", pontos: { takeo: 2 }, flags: ["Contou_Takeo_hall"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "Ela levanta a mão. Devagar. Muito devagar. Ele levanta a dele. E ela encosta a palma na palma dele com a delicadeza de quem encosta numa bolha de sabão. Um “toca aqui” em câmera lenta, sem barulho nenhum.", proxima: "c4_4a_2" },
    c4_4a_2: { quem: "takeo", sprite: "takeo:escolar", texto: "...Isso foi o “toca aqui” mais triste da história. Pode bater de verdade. O médico disse que colou.", proxima: "c4_4a_3" },
    c4_4a_3: { quem: "eu", texto: "Não. Hoje não. Hoje é o dia da licitação.", proxima: "c4_4a_4" },
    c4_4a_4: { tipo: "narracao", texto: "Ele não entende. Mas ri mesmo assim, porque ela riu primeiro.", proxima: "c4_07" },
    c4_4b_1: { quem: "eu", texto: "Ficou lindo, Takeo. O braço de frango mais bonito que eu já vi.", proxima: "c4_4b_2" },
    c4_4b_2: { tipo: "narracao", texto: "Ele fica vermelho até a orelha. Recolhe o braço e fica olhando para ele, como se nunca tivesse visto, com a cara de quem está começando a achar o próprio braço bonito também.", proxima: "c4_07" },
    c4_4c_1: { quem: "eu", texto: "O Kaito foi no hall hoje. No lugar de você.", proxima: "c4_4c_2" },
    c4_4c_2: { tipo: "narracao", texto: "O Takeo fica quieto um segundo. Depois puxa o braço de volta, devagar.", proxima: "c4_4c_3" },
    c4_4c_3: { quem: "takeo", sprite: "takeo:escolar", texto: "No lugar de mim não. No lugar dele. Ele estava devendo esse lugar.", proxima: "c4_07" },

    // (todas as opções continuam aqui)
    c4_07: { tipo: "narracao", sprite: null, texto: "Na hora de apontar o lápis, ela gira o apontador uma vez. O apontador fica em duas partes na mão dela, a lâmina de um lado e o plástico do outro. Ela olha para os pedaços. Olha para o Takeo. O Takeo olha para os pedaços.", proxima: "c4_08" },
    c4_08: { quem: "takeo", sprite: "takeo:escolar", texto: "...Licitação?", proxima: "c4_09" },
    c4_09: { quem: "eu", texto: "Licitação.", proxima: "c4_10" },
    c4_10: { tipo: "narracao", texto: "Ele faz que sim, sério, e passa o apontador dele para frente, sem falar mais nada. Na capa do caderno dele, embaixo de “Quarta. A pé.” riscado, ele escreve “Comprar apontador de metal pra ela”.", proxima: "c5_01" },

    /* =================== CENA 5 — O BEBEDOURO =================== */
    c5_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Intervalo — Cena 5", sprite: null, texto: "No intervalo, o banco da árvore torta continua sem o encosto. O inspetor colocou uma placa de papelão escrita à mão: “BANCO INTERDITADO — MATERIAL DE LICITAÇÃO”. Alguém desenhou uma carinha triste do lado.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", texto: "Ela vai para o muro do bebedouro. A Mio, a Hana, a Reina. O Blake já sentado, com a lancheira aberta. O Ryuji no chão. E, encostado na árvore torta, com o pirulito na boca, o Victor, que não senta, porque parece que está esperando permissão.", proxima: "c5_03" },
    c5_03: { sprite: "victor", quem: "victor", texto: "Eu posso sentar? Depois de ontem? Se não puder, eu fico aqui na árvore. Eu gosto da árvore. A árvore não me julga.", proxima: "c5_04" },
    c5_04: { quem: "eu", texto: "Senta, Victor.", proxima: "c5_05" },
    c5_05: { tipo: "narracao", texto: "Ele senta. Na ponta. Tão na ponta que metade dele está no ar.", proxima: "c5_06" },
    c5_06: { quem: "victor", texto: "A conta da foto foi apagada hoje de manhã. Às seis. Eu fiquei a noite inteira tentando descobrir quem era e ela simplesmente sumiu. Igual fantasma. Fantasma covarde.", proxima: "c5_07" },
    c5_07: { tipo: "narracao", texto: "Ela fica com sede de repente. Levanta e vai até o bebedouro. Aperta o botão. Nada sai. Ela aperta de novo, um pouco mais forte.", proxima: "c5_08" },
    c5_08: { tipo: "narracao", efeito: "tremor", texto: "O botão afunda até o fundo, faz um barulho de cano estourando, e o bebedouro solta um jato de água para cima, como um gêiser, alto, reto, bonito, durante uns cinco segundos inteiros.", proxima: "c5_09" },
    c5_09: { tipo: "narracao", sprite: "ryuji", texto: "Bem em cima do Ryuji. Que estava sentado no chão. Com a coxinha na mão.", proxima: "c5_10" },
    c5_10: { quem: "ryuji", texto: "...", proxima: "c5_11" },
    c5_11: { tipo: "narracao", texto: "O Ryuji fica sentado, encharcado, com a água pingando do cabelo, olhando para a coxinha molhada na mão dele. O pátio inteiro está em silêncio.", proxima: "c5_12" },
    c5_12: { quem: "ryuji", texto: "...Isso foi a coisa mais incrível que já aconteceu comigo. Faz de novo.", proxima: "c5_13" },
    c5_13: { tipo: "narracao", texto: "O pátio explode em risada. O Victor cai do muro de verdade, porque estava sentado no ar. O Blake fala “licitação” com a cara mais séria do mundo, e a Reina engasga com o suco. A Mio esconde o rosto na prancheta da Hana. A Hana tenta salvar a prancheta.", proxima: "c5_14" },
    c5_14: { quem: "desconhecido", rotulo: "Inspetor geral", texto: "Quem estragou o bebedouro?! Ninguém mexe! É o encanamento! Esse prédio inteiro é da licitação de 2009! Tudo cai, tudo racha, tudo vaza!", proxima: "c5_15" },
    c5_15: { tipo: "narracao", sprite: null, texto: "O inspetor passa correndo com um balde. Ninguém olha para ela. Ninguém desconfia. É uma menina de um metro e sessenta, com cara de quem não mata uma barata. E o prédio é da licitação de 2009.", proxima: "c5_16" },
    c5_16: { tipo: "pensamento", texto: "Eu deveria estar desesperada. Eu estou desesperada. Mas o Ryuji está pedindo bis.", proxima: "c5_17" },
    c5_17: { tipo: "narracao", sprite: "serena", texto: "Do outro lado do pátio, a Serena aparece, mancando de leve, com uma marmita nas mãos. Ela vai até o banco interditado. Olha a placa. Olha em volta. Procura o Kaito.", proxima: "c5_18" },
    c5_18: { tipo: "narracao", texto: "O Kaito está encostado na grade da quadra, com o Blake, que levantou do muro para ir falar com ele. A Serena vai até lá. Estende a marmita. Fala alguma coisa doce. O Kaito olha para a marmita.", proxima: "c5_19" },
    c5_19: { tipo: "narracao", texto: "Ele não pega. Mas também não fala nada. Ele só coloca as mãos no bolso. A Serena fica com a marmita no ar, sorrindo, até o Blake, do lado, pegar a marmita da mão dela e abrir.", proxima: "c5_20" },
    c5_20: { quem: "blake", sprite: "blake", texto: "Obrigado. Eu estava com fome.", proxima: "c5_21" },
    c5_21: { tipo: "narracao", sprite: null, texto: "A Serena fica parada, com a mão vazia, olhando o Blake comer a marmita que ela fez para o Kaito, devagar, com hashi, mastigando muito. Ela sorri. O sorriso dela não chega no olho.", proxima: "c5_22" },
    c5_22: { tipo: "narracao", texto: "A SN não vê o Kaito rir. Mas vê ele virar o rosto para a quadra, rápido, como quem está segurando uma risada que não pode soltar.", proxima: "c5_23" },
    c5_23: { tipo: "narracao", texto: "O celular vibra no bolso molhado dela. Respingos do gêiser na tela rachada.", proxima: "c5_24" },
    c5_24: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "O bebedouro foi você?", proxima: "c5_esc5" },

    // ▶ ESCOLHA 5 — O bebedouro
    c5_esc5: { escolhas: [
      { texto: "A. “Licitação de 2009.”", proxima: "c5_5a_1", pontos: { kaito: 2 }, flags: ["Licitacao_2009"] },
      { texto: "B. “Foi. O Ryuji pediu bis.”", proxima: "c5_5b_1", pontos: { kaito: 2, ryuji: 1 }, flags: ["Ryuji_bis"] },
      { texto: "C. “A marmita do Blake estava boa?”", proxima: "c5_5c_1", pontos: { kaito: 2, blake: 1 }, flags: ["Marmita_Blake"] }
    ]},
    c5_5a_1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Licitação de 2009.", proxima: "c5_5a_2" },
    c5_5a_2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Claro. Licitação. Eu acredito em você.", proxima: "c5_5a_3" },
    c5_5a_3: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Dessa vez eu acredito de verdade. Mesmo sendo mentira.", proxima: "c5_25" },
    c5_5b_1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Foi. O Ryuji pediu bis.", proxima: "c5_5b_2" },
    c5_5b_2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu vi. Ele está contando pra quadra inteira que foi batizado.", proxima: "c5_25" },
    c5_5c_1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "A marmita do Blake estava boa?", proxima: "c5_5c_2" },
    c5_5c_2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Ele falou que estava sem sal. Ele comeu tudo. Eu nunca gostei tanto do Blake.", proxima: "c5_25" },

    // (todas as opções continuam aqui)
    c5_25: { tipo: "narracao", texto: "Ela olha para a grade. Ele está olhando para o muro. Os dois com o celular na mão, um de cada lado do pátio. Ele não sorri. Ela não sorri. Mas ninguém desvia primeiro.", proxima: "c5_26" },
    c5_26: { tipo: "narracao", sprite: "serena", texto: "E, do lado dele, a Serena percebe. Ela pega o próprio celular. Digita rápido. E, um segundo depois, o celular do Kaito vibra de novo. Ele olha a tela. A cara dele muda um pouco. Ele digita uma resposta curta. Guarda o celular.", proxima: "c5_27" },
    c5_27: { tipo: "pensamento", texto: "Ele respondeu. Ele responde ela também. Claro que responde. Ele é o Kaito. Ele responde todo mundo.", proxima: "c5_28" },
    c5_28: { tipo: "pensamento", texto: "Tudo bem. Hoje está tudo bem. Trinta e cinco por cento.", proxima: "c6_01" },

    /* =================== CENA 6 — EDUCAÇÃO FÍSICA =================== */
    c6_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Educação física — Cena 6", sprite: null, texto: "Última aula. Educação física, junto com a turma do bloco C. Hoje não é vôlei. O professor decidiu que é dia de cabo de guerra, porque “une a turma”.", proxima: "c6_02" },
    c6_02: { quem: "desconhecido", rotulo: "Professor de educação física", texto: "Duas equipes! Sala A contra bloco C! Quem perder recolhe os cones!", proxima: "c6_03" },
    c6_03: { tipo: "pensamento", texto: "Não. Não, não, não. Cabo de guerra. Hoje. Por que hoje.", proxima: "c6_04" },
    c6_04: { tipo: "narracao", texto: "Do lado da sala A: ela, a Mio, a Hana, a Reina, a Akane, o Takeo com o braço de frango, e o Ren, no fim da corda, com cara de quem preferia estar em qualquer outro lugar do mundo. Do lado do bloco C: o Blake na frente, o Kaito, o Victor, o Ryuji ainda molhado, e mais dez pessoas.", proxima: "c6_05" },
    c6_05: { quem: "ryuji", sprite: "ryuji", texto: "Vocês vão perder! A gente tem o Blake! O Blake é basicamente uma parede com cabelo!", proxima: "c6_06" },
    c6_06: { quem: "akane", sprite: "akane", texto: "A gente tem o braço de frango do Takeo. Estamos mortos.", proxima: "c6_07" },
    c6_07: { sprite: null, tipo: "narracao", texto: "Ela pega a corda no meio da fila. Com cuidado. Com a pontinha dos dedos.", proxima: "c6_08" },
    c6_08: { tipo: "pensamento", texto: "Segura fraco. Segura fraco. Puxa igual uma menina normal. Perde bonito. Recolhe os cones. Ninguém nunca morreu recolhendo cone.", proxima: "c6_09" },
    c6_09: { quem: "desconhecido", rotulo: "Professor de educação física", texto: "Um... dois... TRÊS!", proxima: "c6_10" },
    c6_10: { tipo: "narracao", texto: "O bloco C puxa. A sala A escorrega. A Mio grita. A Hana grita uma porcentagem. O Takeo puxa com o braço bom e com o braço de frango e faz uma careta de dor. Eles estão perdendo. Rápido. Os pés da Reina já estão quase na linha.", proxima: "c6_11" },
    c6_11: { tipo: "narracao", texto: "Do outro lado, o Blake puxando com uma cara tranquila. O Kaito do lado dele, olhando para ela por cima da corda. E, atrás deles, na arquibancada, a Serena, sentada com o tornozelo enfaixado, rindo alto, gritando “vai, Kaito!”.", proxima: "c6_12" },
    c6_12: { tipo: "narracao", texto: "“Vai, Kaito.” Ela ouve. E a mão dela fecha na corda. Só um pouco. Só um pouquinho.", proxima: "c6_13" },
    c6_13: { tipo: "narracao", efeito: "tremor", texto: "A corda para. De repente. Como se tivesse sido amarrada num poste. O bloco C inteiro puxa, e a corda não anda um centímetro. O Blake franze a testa. Puxa mais forte. Nada.", proxima: "c6_14" },
    c6_14: { quem: "blake", sprite: "blake", texto: "...O que está acontecendo.", proxima: "c6_15" },
    c6_15: { tipo: "pensamento", texto: "Solta. Solta um pouco. Deixa eles ganharem. Solta, SN.", proxima: "c6_16" },
    c6_16: { tipo: "narracao", sprite: null, texto: "Ela tenta soltar. Mas aí a Serena grita de novo, “VAI, KAITO, PUXA!”, com a voz doce mais alta do mundo. E a mão dela não obedece. A mão dela dá um puxão.", proxima: "c6_17" },
    c6_17: { tipo: "narracao", efeito: "tremor", texto: "Um puxão só. O bloco C inteiro voa para frente. Quinze pessoas. O Blake tropeça pela primeira vez na vida. O Kaito cai em cima do Blake. O Victor cai em cima do Kaito. O Ryuji, ainda molhado, escorrega por baixo de todo mundo como um pinguim e para exatamente na linha do meio, de barriga.", proxima: "c6_18" },
    c6_18: { tipo: "narracao", texto: "Silêncio na quadra.", proxima: "c6_19" },
    c6_19: { quem: "desconhecido", rotulo: "Professor de educação física", texto: "...Sala A ganha?", proxima: "c6_20" },
    c6_20: { tipo: "narracao", texto: "A sala A explode. A Mio pula na Hana. A Reina grita. A Akane levanta os dois braços. O Takeo olha para o próprio braço de frango, impressionado, achando que foi ele.", proxima: "c6_21" },
    c6_21: { quem: "takeo", sprite: "takeo:escolar", texto: "Eu... eu sou forte? O médico falou que ia ficar fraco. Eu sou forte!", proxima: "c6_22" },
    c6_22: { tipo: "narracao", sprite: null, texto: "No fim da corda, o Ren solta a ponta. Olha para ela, no meio da fila, com as mãos ainda fechadas na corda. Ele não fala nada. Ele só levanta uma sobrancelha. Uma. Milímetros. E vai embora para o vestiário.", proxima: "c6_23" },
    c6_23: { tipo: "narracao", texto: "Do outro lado, no bolo de gente no chão, o Kaito tira o pé do Victor da própria cara. Senta. E olha para ela. Ele não está com raiva. Ele não está com medo. Ele está tentando muito não rir.", proxima: "c6_24" },
    c6_24: { quem: "kaito", sprite: "kaito", texto: "...Licitação?", proxima: "c6_25" },
    c6_25: { quem: "eu", texto: "Corda de 2009.", proxima: "c6_26" },
    c6_26: { tipo: "narracao", sprite: null, texto: "E ele ri. Alto. Sentado no chão da quadra, com o Victor ainda em cima das pernas dele, ele ri de verdade, pela primeira vez em uma semana. E ela, do outro lado, sem querer, ri também.", proxima: "c6_27" },
    c6_27: { tipo: "narracao", sprite: "serena", texto: "Na arquibancada, a Serena para de gritar. Ela fica sentada, com a mão ainda levantada no ar, olhando o Kaito rir no chão para a menina do outro lado da corda.", proxima: "c6_28" },
    c6_28: { tipo: "narracao", texto: "E aí ela levanta. Desce os degraus. Devagar. E, no último degrau, o tornozelo dela vira de novo. Com um gritinho.", proxima: "c6_29" },
    c6_29: { tipo: "narracao", sprite: null, texto: "Ninguém olha. O Ryuji ainda está deitado na linha, de barriga, e metade da quadra está tirando foto dele. O Victor está tentando levantar e escorregando no Ryuji. O professor está apitando sem motivo.", proxima: "c6_30" },
    c6_30: { tipo: "narracao", texto: "A Serena fica sentada no último degrau, com a mão no tornozelo, esperando. O Kaito olha para ela. Um segundo. Depois olha para a corda, para o Ryuji, para a SN. E não levanta.", proxima: "c6_31" },
    c6_31: { tipo: "narracao", sprite: "blake", texto: "Quem vai até a Serena é o Blake. Ele estende a mão. Levanta ela do degrau como quem levanta uma mochila. E fala, alto o suficiente para ela ouvir, com a voz mais tranquila do mundo.", proxima: "c6_32" },
    c6_32: { quem: "blake", texto: "Esse degrau também é da licitação. Cuidado.", proxima: "c7_01" },

    /* =================== CENA 7 — A SAÍDA =================== */
    c7_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Saída — Cena 7", sprite: null, texto: "Na saída, o sol está quente. A barra do portão ainda está torta, com a fita zebrada. Ela passa com a Mio e para na calçada.", proxima: "c7_02" },
    c7_02: { tipo: "narracao", sprite: "kaito", texto: "Do outro lado da rua, o Kaito, do lado da moto. Com o capacete vermelho na mão. E, do lado dele, de novo, a Serena, com a mão no braço dele, falando baixinho, olhando para o tornozelo.", proxima: "c7_03" },
    c7_03: { tipo: "pensamento", texto: "De novo. Ela vai pedir de novo. E ele não sabe dizer não quando alguém chora. Ele mesmo falou.", proxima: "c7_04" },
    c7_04: { tipo: "narracao", texto: "O Kaito escuta. Faz que sim, devagar. E aí vira a cabeça e grita, para o portão.", proxima: "c7_05" },
    c7_05: { quem: "kaito", texto: "RYUJI! Você passa perto da rua dela, não passa?", proxima: "c7_06" },
    c7_06: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji, ainda úmido, empurrando a Relâmpago pelo portão, para. Olha para o Kaito. Olha para a Serena. Olha para a garupa da Relâmpago, que é uma grade de ferro enferrujada amarrada com elástico.", proxima: "c7_07" },
    c7_07: { quem: "ryuji", texto: "...Passo?", proxima: "c7_08" },
    c7_08: { quem: "kaito", texto: "Passa. A Serena está com o pé ruim. Leva ela. Devagar.", proxima: "c7_09" },
    c7_09: { tipo: "narracao", sprite: "serena", texto: "A Serena olha para a Relâmpago. Para a grade enferrujada. Para o elástico. Para o Ryuji, que está sorrindo para ela com toda a boa vontade do universo, já tirando um pano molhado da garupa para ela sentar.", proxima: "c7_10" },
    c7_10: { quem: "ryuji", texto: "Sobe! A Relâmpago é muito segura! Ela só caiu três vezes esse mês! Duas foi culpa minha!", proxima: "c7_11" },
    c7_11: { tipo: "narracao", texto: "A Serena sorri. O sorriso mais duro que a SN já viu. E sobe na garupa da Relâmpago, porque não existe jeito de recusar sem deixar de ser a coitadinha do tornozelo na frente do portão inteiro.", proxima: "c7_12" },
    c7_12: { tipo: "narracao", sprite: null, texto: "O Ryuji pedala. A Relâmpago range. A Serena segura no banco com as duas mãos, de olho fechado, enquanto eles somem pela rua, o Ryuji cantando alto uma música sobre bebedouros.", proxima: "c7_13" },
    c7_13: { tipo: "pensamento", texto: "Ele não disse não. Ele nunca diz não. Mas ele também não levou ela. Ele mandou o Ryuji. Na Relâmpago.", proxima: "c7_14" },
    c7_14: { tipo: "pensamento", texto: "Isso não é um basta. É meio basta. É um basta de bicicleta enferrujada.", proxima: "c7_15" },
    c7_15: { tipo: "narracao", sprite: "kaito", texto: "Do outro lado da rua, o Kaito olha para ela. Levanta o capacete vermelho, só um pouco, como uma pergunta. Não fala nada. Não atravessa. Só pergunta, com o capacete.", proxima: "c7_esc6" },

    // ▶ ESCOLHA 6 — A saída
    c7_esc6: { escolhas: [
      { texto: "A. Atravessar a rua. Pegar o capacete. “Só hoje.”", proxima: "c7_6a_1", pontos: { kaito: 3 }, flags: ["Volta_moto_quarta"] },
      { texto: "B. Balançar a cabeça. Não. Mas sorrir, pequeno, antes de virar.", proxima: "c7_6b_1", pontos: { kaito: 2 }, flags: ["Nao_sorriso"] },
      { texto: "C. Mandar mensagem em vez de responder: “Amanhã. Sete horas.”", proxima: "c7_6c_1", pontos: { kaito: 3 }, flags: ["Amanha_sete"] }
    ]},
    c7_6a_1: { tipo: "narracao", texto: "Ela atravessa a rua. Pega o capacete. Coloca. Ele pergunta “posso?” de novo, baixinho. Ela faz que sim. Clique.", proxima: "c7_6a_2" },
    c7_6a_2: { quem: "eu", texto: "Só hoje. Eu ainda estou chateada.", proxima: "c7_6a_3" },
    c7_6a_3: { quem: "kaito", texto: "Eu sei. Eu também ainda estou me sentindo um lixo. Sobe.", proxima: "r_cam" },
    c7_6b_1: { tipo: "narracao", texto: "Ela balança a cabeça. Não. E, antes de virar, sorri. Pequeno. Ele vê. Abaixa o capacete, devagar, e sorri de volta, menor ainda.", proxima: "c7_6b_2" },
    c7_6b_2: { tipo: "narracao", sprite: null, texto: "Ela vai embora a pé com a Mio. A Mio não fala nada por meio quarteirão. Depois fala “quarenta por cento”, e ela empurra a Mio com o ombro, devagar, com muito cuidado.", proxima: "r_cam" },
    c7_6c_1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Amanhã. Sete horas.", proxima: "c7_6c_2" },
    c7_6c_2: { tipo: "narracao", texto: "Do outro lado da rua, ela vê ele pegar o celular. Ler. E ficar parado. Depois ele digita, com o capacete ainda pendurado no braço.", proxima: "c7_6c_3" },
    c7_6c_3: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Seis e cinquenta e cinco. Eu chego antes.", proxima: "r_cam" },

    /* =================== ROTA — QUARTA À NOITE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quarta, 22h", sprite: null, texto: "Dez da noite. Ela está deitada com o celular rachado em cima da barriga. E, pela primeira vez em uma semana, é ela que manda primeiro.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. “Você riu hoje. Na quadra.”", proxima: "rk_a1", pontos: { kaito: 3 }, flags: ["Voce_riu"] },
      { texto: "B. “A Serena mandou mensagem pra você no intervalo. Você respondeu o quê?”", proxima: "rk_b1", pontos: { kaito: 2 }, flags: ["Respondeu_o_que"] },
      { texto: "C. “Obrigada por ter pagado o mouse. Eu ainda estou brava por isso também.”", proxima: "rk_c1", pontos: { kaito: 3 }, flags: ["Obrigada_mouse"] }
    ]},
    rk_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Você riu hoje. Na quadra.", proxima: "rk_a2" },
    rk_a2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "O Victor estava em cima da minha cara. E você derrubou quinze pessoas com uma mão. Eu não tinha como não rir.", proxima: "rk_a3" },
    rk_a3: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Fazia tempo que eu não ria. Eu senti falta. De rir perto de você.", proxima: "r_fim" },
    rk_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "A Serena mandou mensagem pra você no intervalo. Você respondeu o quê?", proxima: "rk_b2" },
    rk_b2: { tipo: "narracao", texto: "Digitando. Para. Digitando. E aí chega um print. A conversa dele com a Serena. Ela: “vocês voltaram a se falar? 🥺 cuidado com ela, ela quebrou um banco ontem, eu fiquei com medo de verdade”. Ele: “Ela não me assusta.”", proxima: "rk_b3" },
    rk_b3: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Foi isso. Eu não sei responder melhor. Mas foi isso.", proxima: "r_fim" },
    rk_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Obrigada por ter pagado o mouse. Eu ainda estou brava por isso também.", proxima: "rk_c2" },
    rk_c2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu sei. Pode ficar brava. Eu deixei pago mais um, adiantado. Pra próxima vez que você precisar quebrar alguma coisa que não seja eu.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quarta, 20h", sprite: null, texto: "Às oito, uma foto do Takeo. O balanço do caquizeiro, com uma corda nova. Embaixo, a mão dele, a do braço de frango, segurando a corda com um nó meio torto.", proxima: "rt_02" },
    rt_02: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Eu tentei dar o nó sozinho. Ficou torto. Eu devia ter esperado você segurar a corda. Eu estava ansioso.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. “Desfaz. Sábado eu seguro. A gente faz direito.”", proxima: "rt_a1", pontos: { takeo: 4 }, flags: ["Sabado_no"] },
      { texto: "B. “O nó torto ficou bonito. Deixa.”", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["No_torto"] },
      { texto: "C. “Takeo. Na corda hoje, você achou que foi você?”", proxima: "rt_c1", pontos: { takeo: 3 }, flags: ["Achou_que_foi"] }
    ]},
    rt_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Desfaz. Sábado eu seguro. A gente faz direito.", proxima: "rt_a2" },
    rt_a2: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Já desfiz. Eu desfiz antes de você terminar de digitar. A minha avó está perguntando por que eu estou rindo sozinho no quintal.", proxima: "r_fim" },
    rt_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "O nó torto ficou bonito. Deixa.", proxima: "rt_b2" },
    rt_b2: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Então ele fica. É o nó do primeiro dia do braço novo. Ele vai ter história.", proxima: "r_fim" },
    rt_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Takeo. Na corda hoje, você achou que foi você?", proxima: "rt_c2" },
    rt_c2: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Não. Eu vi a sua mão. Mas eu quis achar que foi um pouco eu. Deixa eu ter isso.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quarta, 21h", sprite: null, texto: "Às nove, uma mensagem do Blake.", proxima: "rb_02" },
    rb_02: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu nunca perdi um cabo de guerra. Nunca. Desde os oito anos.", proxima: "rb_03" },
    rb_03: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu não vou perguntar. Mas eu quero revanche.", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. “Revanche aceita. Mas eu vou perder de propósito.”", proxima: "rb_a1", pontos: { blake: 3 }, flags: ["Revanche_Blake"] },
      { texto: "B. “Obrigada pela marmita. A da Serena. Você salvou o dia.”", proxima: "rb_b1", pontos: { blake: 3 }, flags: ["Marmita_salvou"] },
      { texto: "C. “Você estava sem sal mesmo?”", proxima: "rb_c1", pontos: { blake: 2 }, flags: ["Sem_sal"] }
    ]},
    rb_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Revanche aceita. Mas eu vou perder de propósito.", proxima: "rb_a2" },
    rb_a2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Não vale. Eu vou saber. Eu sempre sei quando alguém está segurando.", proxima: "r_fim" },
    rb_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Obrigada pela marmita. A da Serena. Você salvou o dia.", proxima: "rb_b2" },
    rb_b2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu estava com fome. E ela estava esperando ele pegar. Alguém tinha que comer.", proxima: "r_fim" },
    rb_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Você estava sem sal mesmo?", proxima: "rb_c2" },
    rb_c2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Estava ótima. Eu menti. Primeira vez no ano.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quarta, 20h30", sprite: null, texto: "Às oito e meia, o Ryuji liga. Ela atende. Ele está sem fôlego, como sempre.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", texto: "Relatório! Eu levei a Serena! Ela não falou nenhuma palavra o caminho inteiro! Nenhuma! Eu cantei sete músicas! Ela desceu duas quadras antes da casa dela e foi andando! SEM MANCAR!", proxima: "rr_03" },
    rr_03: { quem: "ryuji", texto: "Eu acho que a Relâmpago cura tornozelo. Eu vou abrir uma clínica.", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. Rir até doer a barriga.", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Riu_Ryuji_clinica"] },
      { texto: "B. “Desculpa pelo gêiser, Ryuji.”", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Desculpa_geiser"] },
      { texto: "C. “Você é o melhor, sabia?”", proxima: "rr_c1", pontos: { ryuji: 4 }, flags: ["Melhor_Ryuji"] }
    ]},
    rr_a1: { tipo: "narracao", texto: "Ela ri até doer a barriga, deitada na cama, com o celular no ouvido. Do outro lado, ele ri também, porque ela está rindo, e os dois ficam rindo sem motivo por um minuto inteiro.", proxima: "r_fim" },
    rr_b1: { quem: "eu", texto: "Desculpa pelo gêiser, Ryuji.", proxima: "rr_b2" },
    rr_b2: { quem: "ryuji", texto: "Desculpa?! Foi o melhor batismo da minha vida! Eu nunca me senti tão limpo espiritualmente! Faz de novo amanhã!", proxima: "r_fim" },
    rr_c1: { quem: "eu", texto: "Você é o melhor, sabia?", proxima: "rr_c2" },
    rr_c2: { tipo: "narracao", texto: "Silêncio do outro lado. O Ryuji, em silêncio, pela segunda vez na semana. Depois uma voz pequena, sem nenhum ponto de exclamação: “...sabia não. Agora eu sei.”", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quarta, 21h", sprite: null, texto: "Às nove, o Victor manda um vídeo. Doze segundos. O cabo de guerra, filmado de lado por alguém da arquibancada. O bloco C inteiro voando para frente como dominó, e ele mesmo, no meio, caindo em cima do Kaito com os braços abertos.", proxima: "rv_02" },
    rv_02: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Eu assisti quarenta vezes. O Ryuji parecendo um pinguim. O Blake tropeçando. Eu acho que eu nunca fui tão feliz de perder.", proxima: "rv_03" },
    rv_03: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "A minha mãe viu e perguntou quem era a menina que puxou. Eu falei que é a menina da placa. Ela falou “claro que é”.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. “Fala pra sua mãe que a licitação ajudou.”", proxima: "rv_a1", pontos: { victor: 3 }, flags: ["Licitacao_mae"] },
      { texto: "B. “Apaga esse vídeo, Victor.” E rir.", proxima: "rv_b1", pontos: { victor: 3 }, flags: ["Apaga_video"] },
      { texto: "C. “Você caiu de braço aberto. Por quê?”", proxima: "rv_c1", pontos: { victor: 4 }, flags: ["Braco_aberto"] }
    ]},
    rv_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Fala pra sua mãe que a licitação ajudou.", proxima: "rv_a2" },
    rv_a2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Ela não sabe o que é licitação. Ela vai achar que é o seu nome do meio. Eu não vou corrigir.", proxima: "r_fim" },
    rv_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Apaga esse vídeo, Victor.", proxima: "rv_b2" },
    rv_b2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Nunca. Esse vídeo vai passar no meu casamento. Não falei com quem. Boa noite.", proxima: "r_fim" },
    rv_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Você caiu de braço aberto. Por quê?", proxima: "rv_c2" },
    rv_c2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Porque eu vi que você estava rindo do outro lado. Eu quis cair bonito. Pra você.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quarta, 23h", sprite: null, texto: "Onze da noite. Ela faz a lista de hoje, de cabeça, no escuro, como quem conta carneirinho.", proxima: "f_02" },
    f_02: { tipo: "pensamento", texto: "Quatro gizes. Um apontador. Um bebedouro. Um Ryuji molhado. Um cabo de guerra. Quinze pessoas no chão.", proxima: "f_03" },
    f_03: { tipo: "pensamento", texto: "E ninguém se machucou. Ninguém ficou com medo. O inspetor culpou 2009. O Ryuji pediu bis. O Kaito riu.", proxima: "f_04" },
    f_04: { tipo: "pensamento", texto: "Eu ainda estou chateada. Ele ainda está se sentindo mal. A Serena ainda está lá, mandando mensagem pra ele, segurando o braço dele, torcendo o tornozelo de mentira em todo degrau da escola.", proxima: "f_05" },
    f_05: { tipo: "pensamento", texto: "Nada se resolveu.", proxima: "f_06" },
    f_06: { tipo: "pensamento", texto: "Mas hoje ele perguntou “posso?”. E hoje eu mandei mensagem, e ele respondeu. E hoje eu ri.", proxima: "f_07" },
    f_07: { tipo: "narracao", texto: "Ela desliga o celular com um dedo. Com cuidado. O celular sobrevive. Ela considera isso a segunda vitória do dia.", proxima: "ep_fim" },

    // Fim do Capítulo 45 (crie a entrada "capitulo45" em dados/capitulos.js).
    ep_fim: { fim: "capitulo45" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 46 (anotações do roteiro)
 *  • Terça à noite: o Kaito passou na lan. O dono contou (4h30, sozinha, quase sete, mouse e fone). O Kaito PAGOU.
 *    (Rota Kaito, opção C: deixou mais um mouse pago adiantado.)
 *  • Quarta, 7h: o Takeo não veio (gesso às 7h30). O Kaito no hall. CONVERSA SINCERA:
 *    ele: a foto da Serena; acreditou "rápido demais"; não perguntou por medo da resposta; levou a Serena na chuva
 *    "pra ver se você ligava"; não sabe dizer não quando alguém chora; "Eu não estou com ela. Não quero nada com ela."
 *    ela: o hall vazio / a tinta e "você decidiu sozinho o que eu sou" / a raiva que sai pelas mãos.
 *    "Eu ainda estou chateada." / "Eu ainda estou me sentindo um lixo. A gente está empatado." NADA RESOLVIDO.
 *    Ele perguntou "Posso?" antes de fechar a fivela (se ela aceitou).
 *  • Voltaram a trocar mensagem: "Chegou?", "O bebedouro foi você?", rota à noite (ela manda primeiro).
 *  • A FORÇA (engraçada): 4 gizes (o quarto virou pó), apontador, BEBEDOURO-GÊISER em cima do Ryuji ("Faz de novo"),
 *    CABO DE GUERRA (sala A x bloco C: um puxão, 15 pessoas no chão, Ryuji de barriga na linha como pinguim).
 *    A escola culpa a "licitação de 2009". Virou piada interna: "Licitação?" / "Corda de 2009." O Kaito riu.
 *    O Ren deu papel toalha e levantou uma sobrancelha. O Takeo achou que foi o braço de frango dele.
 *  • A SERENA CONTINUA: marmita pro Kaito (o Blake comeu: "Obrigado. Eu estava com fome."); mensagens pra ele (ele responde);
 *    "torceu" o tornozelo de novo no degrau, ninguém olhou, o Blake levantou ela ("Esse degrau também é da licitação").
 *    Na saída, pediu carona: o Kaito mandou o RYUJI levar ela na Relâmpago. "Um basta de bicicleta enferrujada."
 *    Ela desceu duas quadras antes e foi andando sem mancar (rota Ryuji).
 *  • A conta da foto foi apagada às 6h (Victor investigando). O Ren voltou com uma advertência.
 *  • Takeo: braço sem gesso ("braço de frango"); nó do balanço; "Comprar apontador de metal pra ela".
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 A vez dela (hall) · 2 O capacete · 3 Mensagem · 4 O braço novo · 5 O bebedouro · 6 A saída · Rota (1 por rota)
 *
 * FLAGS NOVAS
 *  Sincera_hall · Sincera_foto · Sincera_raiva · Deixou_fivela · Empurrando_moto · Amanha_talvez
 *  Quatro_gizes · Cheguei_seco · Aula_quimica · Toca_aqui_frango · Frango_lindo · Contou_Takeo_hall
 *  Licitacao_2009 · Ryuji_bis · Marmita_Blake · Volta_moto_quarta · Nao_sorriso · Amanha_sete
 *  Voce_riu · Respondeu_o_que · Obrigada_mouse · Sabado_no · No_torto · Achou_que_foi
 *  Revanche_Blake · Marmita_salvou · Sem_sal · Riu_Ryuji_clinica · Desculpa_geiser · Melhor_Ryuji
 *  Licitacao_mae · Apaga_video · Braco_aberto
 */