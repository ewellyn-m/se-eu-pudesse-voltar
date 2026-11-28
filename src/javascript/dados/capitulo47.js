/*
 * =====================================================================
 *  CAPÍTULO 47 — Então decide
 *  Sexta-feira, logo depois do Capítulo 46 (versão alterada pela autora).
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Cenas com todos os meninos em todas as rotas. Bloco de rota à noite.
 *
 *  CONTEXTO (Cap. 46, versão da autora)
 *    • No intervalo, a SN puxou o Kaito pra trás da árvore, na frente da Serena: "Vira homem, Kaito." / "Se subir, sobe
 *      porque você quer. E não porque tem uma garotinha mandando no líder de uma gangue." / "...Eu sei decidir." /
 *      "Então decide."
 *    • ELE SUBIU NO PALCO. A Serena encostou a cabeça no ombro dele. A escola inteira gritou "casal".
 *    • Enquanto a Akane cantava, o Ren não olhava pro palco. Olhava pra SN.
 *
 *  O QUE ACONTECE
 *    • A SN NÃO ESTÁ "TUDO BEM". Ela está com raiva, e não esconde.
 *      Hall, 7h: "Só fala comigo quando você se decidir. E eu não vou esperar muito." Ela vai a pé.
 *    • Escola: a Serena com as fotos do dueto. A SN responde seca, sem cair no teatro. O Kaito tenta falar: "Decidiu?"
 *    • O REN É BOM COM ELA: traz um livro novo pra ela rasgar, cobre ela quando a força escapa, não pede nada.
 *    • Fora da escola (assunto de gangue não entra na escola): ela pede pro Ren parar de atormentar a loja de lámen
 *      do tio do Kaito. "Não é por ele. É pelo tio." O Ren: "Os meus param. O resto... eu tento."
 *    • Bloco de rota à noite.
 *
 *  REGRAS
 *    • Sala da SN: Takeo, Mio, Hana, Reina, Ren, Akane. Kaito, Blake, Ryuji, Victor e Serena são de outras salas.
 *    • Sem xadrez no Ren. O Ren não manda mensagem. Fala pouco. Sem narrar roupa. Sem flashback.
 *    • A Serena não explica plano. A SN não é vítima e não ajuda a Serena.
 *    • Nada de Akane x Ren.
 *
 *  PERSONAGENS
 *    Mio, Hana, Reina, Kaito, Takeo, Victor, Blake, Ryuji, Ren, Serena.
 *    Sem sprite / rótulo: Victor, Ren, Professora, Amiga da Serena.
 *
 *  CENÁRIOS
 *    apartamento (hall) · saida-colegio · sala-de-aula · corredor · patio-fundos · beco-mercado (rua) · quarto-sn
 *
 *  Crie a entrada "capitulo47" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo47", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — O HALL =================== */
    c1_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Sexta, 6h40 — Cena 1", sprite: null, texto: "Sexta-feira. Ela acorda com raiva. Não aquela raiva que chora, a de terça, atrás do depósito. Outra. Uma raiva fria, reta, que senta no peito e não sai, como um gato pesado.", proxima: "c1_02" },
    c1_02: { tipo: "pensamento", texto: "“Então decide.” Eu falei. Atrás da árvore, olhando na cara dele. E ele decidiu. Ele subiu.", proxima: "c1_03" },
    c1_03: { tipo: "pensamento", texto: "Ele subiu no palco com ela, depois de eu falar aquilo. Na frente da escola inteira. Ele ouviu, entendeu, e subiu mesmo assim.", proxima: "c1_04" },
    c1_04: { tipo: "pensamento", texto: "E ontem à noite eu fiquei deitada procurando desculpa pra ele. “Ele não cantou.” “Ele tirou ela do ombro.” Eu fiquei fazendo lista de desculpa. Como uma boba.", proxima: "c1_05" },
    c1_05: { tipo: "pensamento", texto: "Chega. Eu não vou ficar catando migalha...", proxima: "c1_06" },
    c1_06: { tipo: "narracao", texto: "Ela se arruma rápido. Desce às sete em ponto. Nem antes, nem depois. E ele está lá.", proxima: "c1_07" },
    c1_07: { roupa: "escolar", tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", legenda: "Sexta, 7h", sprite: "kaito", texto: "No pé dos três degraus, com o capacete vermelho no braço. Com cara de quem não dormiu. Com cara de quem ensaiou alguma coisa a noite inteira e vai errar na primeira frase.", proxima: "c1_08" },
    c1_08: { quem: "kaito", texto: "SN, ontem, eu...", proxima: "c1_09" },
    c1_09: { quem: "eu", texto: "Não.", proxima: "c1_10" },
    c1_10: { tipo: "narracao", texto: "Ela desce os três degraus. Para na frente dele. Perto. E fala olhando nos olhos, sem levantar a voz, porque não precisa.", proxima: "c1_11" },
    c1_11: { quem: "eu", texto: "Eu te falei “então decide”. E você decidiu. Você subiu.", proxima: "c1_12" },
    c1_12: { quem: "kaito", texto: "Eu não cantei, eu tirei ela do...", proxima: "c1_13" },
    c1_13: { quem: "eu", texto: "Eu não quero saber o que você não fez, Kaito. Eu quero saber o que você vai fazer. E você não sabe. Então a gente não tem o que conversar.", proxima: "c1_14" },
    c1_14: { tipo: "narracao", texto: "Ele fica parado. O capacete pendurado no braço. A boca meio aberta, a frase ensaiada morrendo dentro dela.", proxima: "c1_15" },
    c1_15: { quem: "eu", texto: "Só fala comigo quando você se decidir. E eu não vou esperar muito.", proxima: "c1_16" },
    c1_16: { tipo: "narracao", texto: "Ela não espera resposta. Passa do lado dele, abre a porta do prédio com dois dedos e sai.", proxima: "c1_17" },
    c1_17: { quem: "kaito", texto: "Quanto é muito?", proxima: "c1_18" },
    c1_18: { tipo: "narracao", texto: "A voz dele sai atrás dela, baixa, sem raiva. Uma pergunta de verdade. Ela para na calçada. Não vira.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — Quanto é muito
    c1_esc1: { escolhas: [
      { texto: "A. “Você vai saber quando eu parar de descer às sete.”", proxima: "c1_1a_1", pontos: { kaito: 2 }, flags: ["Parar_de_descer"] },
      { texto: "B. “Menos do que eu esperei no hall na segunda.”", proxima: "c1_1b_1", pontos: { kaito: 2 }, flags: ["Menos_que_segunda"] },
      { texto: "C. Não responder. Ir embora. Ele que conte.", proxima: "c1_1c_1", pontos: { kaito: 1 }, flags: ["Ele_que_conte"] }
    ]},
    c1_1a_1: { quem: "eu", texto: "Você vai saber quando eu parar de descer às sete.", proxima: "c1_19" },
    c1_1b_1: { quem: "eu", texto: "Menos do que eu esperei no hall na segunda.", proxima: "c1_19" },
    c1_1c_1: { tipo: "narracao", texto: "Ela não responde. Ela vai embora. Ele que conte.", proxima: "c1_19" },

    // (todas as opções continuam aqui)
    c1_19: { tipo: "narracao", cenario: "beco-mercado", transicao: "tempo", sprite: null, texto: "Ela vai a pé. Rápido. No meio do beco do mercado, o feirante das laranjas vê ela vindo e, sem falar nada, tira o caixote do caminho e coloca do outro lado da banca. Ela faz que sim para ele. Ele faz que sim de volta. Respeito mútuo.", proxima: "c1_20" },
    c1_20: { tipo: "pensamento", texto: "Ele não veio atrás. Bom. Que pense. Que pense muito.", proxima: "c1_21" },
    c1_21: { tipo: "pensamento", texto: "E se ele pensar e decidir errado de novo... então ele decidiu. E eu também.", proxima: "c2_01" },

    /* =================== CENA 2 — A SALA =================== */
    c2_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Primeira aula — Cena 2", sprite: "mio", texto: "Na sala, a Mio olha para a cara dela e fecha o caderno devagar, como quem fecha a janela antes da tempestade.", proxima: "c2_02" },
    c2_02: { quem: "mio", texto: "Ok. Hoje não é trinta por cento. Hoje é outra coisa. Hoje você está com cara de quem vai demitir alguém.", proxima: "c2_03" },
    c2_03: { quem: "eu", texto: "Eu demiti. No hall. Às sete.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", texto: "A Mio arregala os olhos. A Hana, do lado, para a caneta no meio da prancheta. A Reina vira na carteira da frente, devagar, como quem vira para ver um acidente.", proxima: "c2_05" },
    c2_05: { quem: "eu", texto: "Eu falei pra ele só falar comigo quando decidir. E que eu não vou esperar muito.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", texto: "Silêncio. A Mio olha para a Hana. A Hana olha para a Reina. A Reina olha para ela.", proxima: "c2_07" },
    c2_07: { quem: "reina", sprite: "reina", texto: "...Finalmente.", proxima: "c2_08" },
    c2_08: { quem: "mio", sprite: "mio", texto: "FINALMENTE. Eu estava esperando isso desde o capacete. Desde a chuva. Eu ia falar, mas eu não falei, porque amiga não fala, amiga espera. Eu esperei. Eu sou uma ótima amiga.", proxima: "c2_09" },
    c2_09: { tipo: "narracao", sprite: "hana", texto: "A Hana vira a página da prancheta. Folha nova. Ela escreve, com letra de forma, em cima: “Sexta — fim do protocolo de contenção”. E, embaixo, uma palavra só, sublinhada três vezes: “Ultimato”.", proxima: "c2_10" },
    c2_10: { quem: "hana", texto: "Isso muda todas as minhas estimativas. Pra melhor.", proxima: "c2_11" },
    c2_11: { tipo: "narracao", sprite: "takeo:escolar", texto: "Atrás dela, o Takeo bate no ombro dela com o dedo do braço de frango. Ela vira. Ele coloca em cima da carteira dela, sem falar nada, um apontador de metal. Pesado, prateado, com uma lâmina de aço.", proxima: "c2_12" },
    c2_12: { quem: "takeo", sprite: "takeo:escolar", texto: "É à prova de licitação. O moço da papelaria jurou.", proxima: "c2_13" },
    c2_13: { tipo: "narracao", texto: "Ela gira o apontador uma vez. Ele aguenta. Ela gira de novo. Aguenta. Ela olha para o Takeo, e pela primeira vez no dia, a raiva fria no peito dá um passinho para o lado e deixa um sorriso passar.", proxima: "c2_14" },
    c2_14: { quem: "eu", texto: "Obrigada, Takeo.", proxima: "c2_15" },
    c2_15: { quem: "takeo", sprite: "takeo:escolar", texto: "O Kaito subiu ontem. Eu vi. Eu demorei pra apertar o botão. Eu não vou falar mais nada dele. Só isso.", proxima: "c2_16" },
    c2_16: { tipo: "narracao", sprite: "ren", texto: "Na carteira perto da porta, o Ren. Ela sente o olhar antes de ver. Ela vira. Ele não desvia dessa vez. Ele olha para ela, para a cara de raiva fria, como quem reconhece um tempo que conhece bem.", proxima: "c2_17" },
    c2_17: { tipo: "narracao", texto: "Depois ele se levanta, no meio da explicação da professora, como se fosse apontar o lápis. Passa pela carteira dela. E deixa, em cima do caderno, sem parar, um livro de capa mole. Velho. Com a lombada já rachada.", proxima: "c2_18" },
    c2_18: { tipo: "narracao", texto: "Dentro, na primeira página, a letra pequena dele, a lápis: “Esse também pode.”", proxima: "c2_19" },
    c2_19: { tipo: "pensamento", texto: "Ele trouxe outro livro. Pra eu rasgar. Ele pensou nisso. Ele foi em casa, achou um livro velho, e pensou: ela vai precisar de outro.", proxima: "c2_20" },
    c2_20: { tipo: "narracao", texto: "Ela guarda o livro na mochila. Não olha para a porta. Mas, quando a professora vira para o quadro, ela levanta a mão, só a mão, por cima do ombro, para trás, por um segundo. Um aceno pequeno. Sem olhar.", proxima: "c2_21" },
    c2_21: { tipo: "pensamento", texto: "Eu ainda não gosto dele. Mas obrigada, Ren.", proxima: "c3_01" },

    /* =================== CENA 3 — AS FOTOS =================== */
    c3_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Troca de aula — Cena 3", sprite: "serena", texto: "Na troca de aula, o corredor está entupido de gente. E, no meio do corredor, encostada no armário dela, como se fosse dela, a Serena. Com as amigas da sala C em volta. Com o celular na mão, mostrando fotos.", proxima: "c3_02" },
    c3_02: { quem: "desconhecido", rotulo: "Amiga da Serena", texto: "Essa ficou perfeita! A sua cabeça no ombro dele! Você tem que colocar de foto de perfil!", proxima: "c3_03" },
    c3_03: { quem: "serena", sprite: "serena", texto: "Ai, para... ele vai ficar com vergonha. Ele é tão tímido. Ontem ele estava tão nervoso que nem conseguiu cantar, coitadinho.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", texto: "E aí ela vê a SN chegando no armário. E o rosto dela muda, de contente para preocupado, tão rápido e tão bem feito que chega a ser bonito.", proxima: "c3_05" },
    c3_05: { quem: "serena", texto: "Ai, SN. Bom dia. Você... viu as fotos? Eu fiquei com medo de você ficar chateada. Não foi nada demais, juro, foi só a música, eu fiquei emocionada...", proxima: "c3_06" },
    c3_06: { tipo: "narracao", texto: "As amigas olham para a SN. O corredor inteiro, na verdade, diminui o passo. Todo mundo esperando a menina da foto da garagem, a menina do banco quebrado, fazer uma cena.", proxima: "c3_07" },
    c3_07: { tipo: "pensamento", texto: "Ela quer que eu grite. Ela quer que eu quebre o armário na frente de todo mundo. Ela quer a cena.", proxima: "c3_08" },
    c3_08: { tipo: "pensamento", texto: "Ela não vai ter.", proxima: "c3_esc2" },

    // ▶ ESCOLHA 2 — No armário
    c3_esc2: { escolhas: [
      { texto: "A. “Vi. Ele tirou você do ombro em dois segundos. Tem foto dessa parte também?”", proxima: "c3_2a_1", pontos: {}, flags: ["Dois_segundos"] },
      { texto: "B. “Você está encostada no meu armário, Serena. Sai.”", proxima: "c3_2b_1", pontos: {}, flags: ["Sai_armario"] },
      { texto: "C. Olhar pra ela. Sorrir. E não falar nada. Esperar ela sair sozinha.", proxima: "c3_2c_1", pontos: {}, flags: ["Sorriso_frio"] }
    ]},
    c3_2a_1: { quem: "eu", texto: "Vi. Ele tirou você do ombro em dois segundos. Tem foto dessa parte também?", proxima: "c3_2a_2" },
    c3_2a_2: { tipo: "narracao", texto: "Uma das amigas da Serena solta um risinho, sem querer, e cobre a boca. A Serena pisca. O sorriso de coitada fica parado no rosto dela, sem saber para onde ir.", proxima: "c3_2a_3" },
    c3_2a_3: { quem: "serena", texto: "Ele... ele só estava com vergonha...", proxima: "c3_2a_4" },
    c3_2a_4: { quem: "eu", texto: "Claro. Licitação.", proxima: "c3_09" },
    c3_2b_1: { quem: "eu", texto: "Você está encostada no meu armário, Serena. Sai.", proxima: "c3_2b_2" },
    c3_2b_2: { tipo: "narracao", texto: "Ela não fala alto. Ela não fala bravo. Ela fala do jeito que se fala com alguém que está na frente da porta do elevador. A Serena fica parada um segundo. Depois desencosta. Devagar. Com a mão no peito.", proxima: "c3_2b_3" },
    c3_2b_3: { quem: "serena", texto: "Desculpa... eu não sabia que era o seu...", proxima: "c3_2b_4" },
    c3_2b_4: { quem: "eu", texto: "Sabia.", proxima: "c3_09" },
    c3_2c_1: { tipo: "narracao", texto: "Ela olha para a Serena. Sorri. Um sorriso calmo, educado, de quem olha uma vitrine. E não fala nada. Espera.", proxima: "c3_2c_2" },
    c3_2c_2: { tipo: "narracao", texto: "Cinco segundos. Dez. As amigas da Serena olham uma para a outra. A Serena abre a boca para falar alguma coisa doce, e não sai nada, porque não tem o que responder a um sorriso. Ela desencosta do armário. Sai, com as amigas atrás, sem mancar.", proxima: "c3_2c_3" },
    c3_2c_3: { tipo: "narracao", texto: "Na esquina do corredor, ela lembra de mancar. Começa de novo. O corredor inteiro vê.", proxima: "c3_09" },

    // (todas as opções continuam aqui)
    c3_09: { tipo: "narracao", sprite: null, texto: "Ela abre o armário. A porta sai da dobradiça de cima e fica pendurada pela de baixo, torta, balançando. Ela segura a porta. Olha para ela. Respira.", proxima: "c3_10" },
    c3_10: { tipo: "pensamento", texto: "Tá. Nem tudo é controle. Mas pelo menos foi depois que ela saiu.", proxima: "c3_11" },
    c3_11: { tipo: "narracao", texto: "Uma mão aparece do lado da dela, segurando a porta torta por cima. Uma mão com os nós dos dedos machucados. Ela vira.", proxima: "c3_12" },
    c3_12: { sprite: "ren", tipo: "narracao", texto: "O Ren. Ele empurra a porta de volta para o lugar com o ombro, encaixa a dobradiça de qualquer jeito, e bate na porta uma vez com a palma, como quem fala “fica”. A porta fica.", proxima: "c3_13" },
    c3_13: { quem: "ren", texto: "Licitação.", proxima: "c3_14" },
    c3_14: { tipo: "narracao", texto: "E vai embora. Ela fica parada na frente do armário, sem conseguir decidir se ri ou se fica brava por ele ter aprendido a piada.", proxima: "c4_01" },

    /* =================== CENA 4 — O INTERVALO =================== */
    c4_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Intervalo — Cena 4", sprite: null, texto: "No intervalo, o banco da árvore torta ganhou um encosto novo, de madeira clara, que ainda cheira a serragem. Ninguém senta nele. Todo mundo olha para ele com desconfiança, como quem olha um cachorro novo.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "Ela vai para o muro do bebedouro. O bebedouro tem uma placa: “NÃO APERTAR FORTE”. O Ryuji está sentado no chão na frente dele, olhando para o botão com saudade.", proxima: "c4_03" },
    c4_03: { quem: "ryuji", sprite: "ryuji", texto: "Eu estou esperando. Caso aconteça de novo. Eu trouxe toalha dessa vez. Eu estou preparado espiritualmente.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", sprite: "blake", texto: "O Blake senta do lado dela no muro, com a lancheira. Estende metade do sanduíche. Ela pega. Ele olha para a cara dela, e não pergunta nada, porque a Mio já mandou no grupo às sete e vinte: “ELA DEU ULTIMATO”.", proxima: "c4_05" },
    c4_05: { quem: "blake", texto: "Ele está na grade. Desde o sinal. Ele não comeu nada. A Serena foi lá duas vezes. Ele não falou com ela nenhuma das duas.", proxima: "c4_06" },
    c4_06: { quem: "eu", texto: "Não falar não é decidir, Blake.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", texto: "O Blake olha para ela. Faz que sim, devagar. E come o sanduíche dele em silêncio, do lado dela, o que é a forma Blake de dizer “concordo”.", proxima: "c4_08" },
    c4_08: { tipo: "narracao", sprite: "victor", texto: "O Victor chega com o pirulito, mas não senta na ponta dessa vez. Senta do outro lado dela, perto, e fala baixo, sem piada.", proxima: "c4_09" },
    c4_09: { quem: "victor", texto: "Eu ouvi do ultimato. Eu não vou falar nada do líder. Eu só queria dizer que eu acho que você está certa. E que isso não tem nada a ver comigo. Eu acharia isso mesmo se eu não... bom. Eu acharia.", proxima: "c4_10" },
    c4_10: { tipo: "narracao", texto: "Ele coloca o pirulito na boca rápido, antes de terminar alguma frase que não devia. Ela finge que não percebeu.", proxima: "c4_11" },
    c4_11: { tipo: "narracao", sprite: "kaito", texto: "E aí ele vem. O Kaito. Atravessando o pátio, da grade até o muro, com as mãos no bolso. Devagar. Todo mundo no muro fica quieto. O Ryuji para de olhar o bebedouro.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", texto: "Ele para na frente dela. Não senta. Olha para ela. Ela olha de volta, e não se mexe.", proxima: "c4_13" },
    c4_13: { quem: "eu", texto: "Decidiu?", proxima: "c4_14" },
    c4_14: { tipo: "narracao", texto: "Uma palavra. Ele abre a boca. E ela vê. Ela vê ele procurando uma frase bonita, uma desculpa, um “é complicado”. Ela vê ele não achar nada que seja um sim.", proxima: "c4_15" },
    c4_15: { quem: "kaito", texto: "Eu... eu estou...", proxima: "c4_16" },
    c4_16: { quem: "eu", texto: "Então não.", proxima: "c4_17" },
    c4_17: { tipo: "narracao", texto: "Ela vira para o Blake e pega o resto do sanduíche. O Kaito fica parado na frente do muro, com a frase pela metade. O muro inteiro em silêncio.", proxima: "c4_esc3" },

    // ▶ ESCOLHA 3 — No muro
    c4_esc3: { escolhas: [
      { texto: "A. Sem olhar pra ele: “Volta pra grade, Kaito. Quando tiver um sim ou um não, você volta.”", proxima: "c4_3a_1", pontos: { kaito: 1 }, flags: ["Volta_grade"] },
      { texto: "B. Olhar pra ele uma última vez. “Eu falei sério. Eu não vou esperar muito.”", proxima: "c4_3b_1", pontos: { kaito: 2 }, flags: ["Falei_serio"] },
      { texto: "C. Não falar mais nada. Ele já sabe o caminho de volta.", proxima: "c4_3c_1", pontos: {}, flags: ["Silencio_muro"] }
    ]},
    c4_3a_1: { quem: "eu", texto: "Volta pra grade, Kaito. Quando tiver um sim ou um não, você volta. Um “estou” não serve.", proxima: "c4_18" },
    c4_3b_1: { tipo: "narracao", texto: "Ela olha para ele. Uma última vez. Sem raiva na cara. Só cansaço. E uma coisa que parece com tristeza, mas está guardada atrás de uma porta trancada.", proxima: "c4_3b_2" },
    c4_3b_2: { quem: "eu", texto: "Eu falei sério. Eu não vou esperar muito.", proxima: "c4_18" },
    c4_3c_1: { tipo: "narracao", texto: "Ela não fala mais nada. Come o sanduíche. Olha para o bebedouro. Ele fica mais dez segundos parado. Ela conta.", proxima: "c4_18" },

    // (todas as opções continuam aqui)
    c4_18: { tipo: "narracao", texto: "Ele vai embora. De volta para a grade. Mas não encosta nela. Ele passa direto pela grade, pela quadra, e entra no prédio sozinho. A Serena, que estava esperando do lado da grade com um suco de pêssego na mão, fica com o suco no ar, olhando ele passar sem parar.", proxima: "c4_19" },
    c4_19: { quem: "ryuji", sprite: "ryuji", texto: "...Isso foi mais forte que o gêiser.", proxima: "c4_20" },
    c4_20: { tipo: "narracao", sprite: null, texto: "Ela não ri. Mas a raiva fria no peito, pela primeira vez no dia, não está mais sentada. Está em pé. Ela sabe o que quer. E isso é mais leve do que ela esperava.", proxima: "c4_21" },
    c4_21: { sprite: "ren", tipo: "narracao", texto: "Do outro lado do pátio, encostado na parede do prédio, longe de todo mundo, o Ren. Ele viu tudo. Ele não faz nada. Mas, quando ela olha para ele, ele faz que sim, uma vez. Como quem diz: “foi certo”.", proxima: "c5_01" },

    /* =================== CENA 5 — A SAÍDA (fora da escola) =================== */
    c5_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Saída — Cena 5", sprite: null, texto: "Na saída, a moto está do outro lado da rua. O Kaito está do lado dela, sem capacete na mão. Ele não acena. Ele não chama. Ele só fica, de longe. Ela não atravessa.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", texto: "Ela vai a pé. Sozinha, porque a Mio tem dentista e a Hana tem curso. Ela vira a esquina da escola. E ouve passos atrás dela. Devagar. Mantendo distância.", proxima: "c5_03" },
    c5_03: { tipo: "narracao", cenario: "beco-mercado", transicao: "tempo", texto: "Duas quadras depois, perto do beco do mercado, longe de qualquer uniforme, ela para e vira.", proxima: "c5_04" },
    c5_04: { sprite: "ren", tipo: "narracao", texto: "O Ren. A uns dez metros. Com as mãos nos bolsos. Ele para também.", proxima: "c5_05" },
    c5_05: { quem: "eu", texto: "Por que você está me seguindo?", proxima: "c5_06" },
    c5_06: { quem: "ren", texto: "Você saiu sozinha.", proxima: "c5_07" },
    c5_07: { quem: "eu", texto: "Eu sei andar sozinha. Eu ando sozinha a semana inteira.", proxima: "c5_08" },
    c5_08: { quem: "ren", texto: "Eu sei. Eu vi.", proxima: "c5_09" },
    c5_09: { tipo: "narracao", texto: "Ele não fala como ameaça. Ele fala como quem conta uma coisa que fez, sem achar que tem nada de errado. Ela fica olhando para ele, sem saber se é bonito ou assustador. Talvez seja os dois.", proxima: "c5_10" },
    c5_10: { quem: "ren", texto: "Na segunda eu fui atrás até o beco. Ontem até a esquina. Eu não chego perto. Eu só vejo se você chega.", proxima: "c5_11" },
    c5_11: { tipo: "pensamento", texto: "Ele me seguiu a semana inteira. Pra ver se eu chegava. E eu nunca percebi.", proxima: "c5_12" },
    c5_12: { quem: "eu", texto: "Isso é esquisito, Ren.", proxima: "c5_13" },
    c5_13: { quem: "ren", texto: "Eu sei. Eu paro, se você quiser.", proxima: "c5_14" },
    c5_14: { tipo: "narracao", texto: "Ela não responde. Ela olha para ele. Para os nós dos dedos machucados. Para a cara dele, que não pede nada. E pensa em outra coisa. Uma coisa que ela pediu uma vez, e ouviu “o rei, não”.", proxima: "c5_15" },
    c5_15: { tipo: "pensamento", texto: "Aqui fora. Longe da escola. Agora eu posso pedir.", proxima: "c5_16" },
    c5_16: { quem: "eu", texto: "Ren. A loja de lámen. A do tio do Kaito.", proxima: "c5_17" },
    c5_17: { tipo: "narracao", texto: "A cara dele muda. Pouco. Mas muda. Ele tira uma das mãos do bolso.", proxima: "c5_18" },
    c5_18: { quem: "eu", texto: "Para. Para de atormentar aquela loja. Os seus caras na porta, assustando cliente, o tio com medo atrás do balcão. Para.", proxima: "c5_19" },
    c5_19: { quem: "ren", texto: "Você está brava com ele.", proxima: "c5_20" },
    c5_20: { quem: "eu", texto: "Estou. Muito. E não é por ele que eu estou pedindo.", proxima: "c5_esc4" },

    // ▶ ESCOLHA 4 — Por quem
    c5_esc4: { escolhas: [
      { texto: "A. “É pelo tio. Ele me deu onigiri. Ele não fez nada pra ninguém.”", proxima: "c5_4a_1", pontos: {}, flags: ["Pelo_tio"] },
      { texto: "B. “É por você. Você disse que escolhe quem quer ser. Então escolhe.”", proxima: "c5_4b_1", pontos: {}, flags: ["Por_voce_Ren"] },
      { texto: "C. “Porque é covarde. Uma loja pequena, um senhor sozinho. Você é melhor que isso.”", proxima: "c5_4c_1", pontos: {}, flags: ["Covarde_Ren"] }
    ]},
    c5_4a_1: { quem: "eu", texto: "É pelo tio. Ele me deu onigiri. Ele acorda de madrugada pra fazer caldo. Ele não fez nada pra ninguém. Ele não tem culpa de quem o sobrinho dele é.", proxima: "c5_21" },
    c5_4b_1: { quem: "eu", texto: "É por você. Atrás do depósito, você disse que escolhe quem quer ser. Então escolhe. Isso aqui é escolher.", proxima: "c5_21" },
    c5_4c_1: { quem: "eu", texto: "Porque é covarde. Uma loja pequena. Um senhor sozinho no balcão. Você ficou do meu lado atrás do depósito, Ren. Você é melhor que isso.", proxima: "c5_21" },

    // (todas as opções continuam aqui)
    c5_21: { tipo: "narracao", texto: "Ele fica em silêncio muito tempo. Olha para a rua. Para os próprios pés. Para ela. Um carro passa. Um cachorro late longe.", proxima: "c5_22" },
    c5_22: { quem: "ren", texto: "Da outra vez eu falei “o rei, não”.", proxima: "c5_23" },
    c5_23: { quem: "eu", texto: "Eu lembro.", proxima: "c5_24" },
    c5_24: { quem: "ren", texto: "Ainda é verdade. A loja não é minha. A ordem não é minha.", proxima: "c5_25" },
    c5_25: { tipo: "narracao", texto: "Ela sente a raiva subindo de novo. Ela vai virar as costas. E ele fala de novo, antes de ela virar. Mais baixo.", proxima: "c5_26" },
    c5_26: { quem: "ren", texto: "Mas os que vão lá são meus. Os meus param. A partir de hoje.", proxima: "c5_27" },
    c5_27: { quem: "ren", texto: "O resto... eu tento.", proxima: "c5_28" },
    c5_28: { tipo: "narracao", texto: "Ele fala “eu tento” do jeito que alguém fala de uma coisa que vai custar caro. Ela não pergunta quanto. Ela vê na cara dele que é muito. Ela vê que ele vai pagar mesmo assim.", proxima: "c5_29" },
    c5_29: { quem: "eu", texto: "Por quê? Por que você vai fazer isso por mim?", proxima: "c5_30" },
    c5_30: { quem: "ren", texto: "Não é por você.", proxima: "c5_31" },
    c5_31: { tipo: "narracao", texto: "Ele coloca a mão de volta no bolso. Olha para ela, rápido, e depois para longe.", proxima: "c5_32" },
    c5_32: { quem: "ren", texto: "...É um pouco por você.", proxima: "c5_33" },
    c5_33: { tipo: "narracao", texto: "E aí, uma coisa que ela nunca viu. O canto da boca do Ren sobe. Não é o sorriso torto de quando ele ameaçava. Não é o sorriso de “o oprimido vira opressor”. É pequeno, sem graça, meio sem jeito, como o de um menino que não sabe sorrir direito porque nunca treinou.", proxima: "c5_34" },
    c5_34: { quem: "eu", texto: "...Obrigada, Ren.", proxima: "c5_35" },
    c5_35: { quem: "ren", texto: "Não agradece ainda. Agradece se der certo.", proxima: "c5_36" },
    c5_36: { quem: "eu", texto: "E a parte de me seguir?", proxima: "c5_37" },
    c5_37: { quem: "ren", texto: "Eu paro. Se você quiser.", proxima: "c5_esc5" },

    // ▶ ESCOLHA 5 — Seguir
    c5_esc5: { escolhas: [
      { texto: "A. “Para. Mas se quiser ir junto, anda do lado. Não atrás.”", proxima: "c5_5a_1", pontos: {}, flags: ["Anda_do_lado"] },
      { texto: "B. “Para. Eu não preciso de sombra, Ren.”", proxima: "c5_5b_1", pontos: {}, flags: ["Sem_sombra"] },
      { texto: "C. “...Só hoje. Até a esquina do prédio.”", proxima: "c5_5c_1", pontos: {}, flags: ["So_hoje_Ren"] }
    ]},
    c5_5a_1: { quem: "eu", texto: "Para. Mas se quiser ir junto, anda do lado. Não atrás. Atrás é esquisito.", proxima: "c5_5a_2" },
    c5_5a_2: { tipo: "narracao", texto: "Ele fica parado, como se ela tivesse falado em outra língua. Depois anda. Os dez metros. E para do lado dela, a um braço de distância. Eles andam assim, em silêncio, até a esquina do prédio. Ele não fala nada. Ela também não. Não é ruim.", proxima: "c5_38" },
    c5_5b_1: { quem: "eu", texto: "Para. Eu não preciso de sombra, Ren.", proxima: "c5_5b_2" },
    c5_5b_2: { tipo: "narracao", texto: "Ele faz que sim. Vira. E vai embora pelo outro lado da rua, sem olhar para trás. Ela fica parada olhando ele ir, e, sem saber por quê, fica com a sensação de que ele vai respeitar isso. Exatamente isso.", proxima: "c5_38" },
    c5_5c_1: { quem: "eu", texto: "...Só hoje. Até a esquina do prédio.", proxima: "c5_5c_2" },
    c5_5c_2: { tipo: "narracao", texto: "Ela vira e anda. Ele anda atrás, os mesmos dez metros. Na esquina do prédio, ela para e olha para trás. Ele já parou. Ele faz que sim, uma vez. E vai embora.", proxima: "c5_38" },

    // (todas as opções continuam aqui)
    c5_38: { tipo: "pensamento", texto: "O Ren. O menino das fotos, das ameaças, da loja. O menino que eu odeio. Ele veio atrás do depósito. Ele trouxe outro livro. Ele consertou o meu armário. E agora ele vai pagar alguma coisa cara pra deixar a loja do tio em paz.", proxima: "c5_39" },
    c5_39: { tipo: "pensamento", texto: "E o Kaito ficou parado do outro lado da rua, sem capacete na mão, sem saber o que decidir.", proxima: "c5_40" },
    c5_40: { tipo: "pensamento", texto: "Eu não quero comparar. Eu não vou comparar. Mas a comparação vem sozinha, igual a força. E eu não consigo segurar nenhuma das duas.", proxima: "r_cam" },

    /* =================== ROTA — SEXTA À NOITE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Sexta, 22h", sprite: null, texto: "Dez da noite. Nenhuma mensagem do Kaito. Nenhuma. Ela confere o celular rachado três vezes. Depois fica brava consigo mesma por conferir.", proxima: "rk_02" },
    rk_02: { tipo: "pensamento", texto: "Ótimo. Eu falei pra ele só falar quando decidir. Ele está obedecendo. Era isso que eu queria. Era.", proxima: "rk_03" },
    rk_03: { tipo: "narracao", texto: "Lá embaixo, o ronco da moto. Devagar. Ela vai até a janela. A moto passa na frente do prédio, bem devagar. Não para. Não buzina. Ele olha para cima, para a janela dela, por um segundo. E continua. Vira a esquina.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. Mandar uma mensagem: “Decidiu?”", proxima: "rk_a1", pontos: { kaito: 2 }, flags: ["Decidiu_mensagem"] },
      { texto: "B. Fechar a cortina. Ele sabe o que ela quer.", proxima: "rk_b1", pontos: { kaito: 1 }, flags: ["Cortina_sexta"] },
      { texto: "C. Ficar na janela até a moto voltar. Se voltar.", proxima: "rk_c1", pontos: { kaito: 2 }, flags: ["Esperou_janela"] }
    ]},
    rk_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Decidiu?", proxima: "rk_a2" },
    rk_a2: { tipo: "narracao", texto: "Lido. Ele lê na hora. Digitando. Para. Digitando. Para. Ela espera cinco minutos. Dez.", proxima: "rk_a3" },
    rk_a3: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Quase. Eu não vou mandar “quase” como resposta. Eu volto com a resposta inteira.", proxima: "r_fim" },
    rk_b1: { tipo: "narracao", texto: "Ela fecha a cortina. Volta para a cama. O celular fica em silêncio a noite inteira. É o que ela pediu. Ela odeia que seja o que ela pediu.", proxima: "r_fim" },
    rk_c1: { tipo: "narracao", texto: "Ela fica na janela. Vinte minutos. Meia hora. A moto volta. Passa de novo, devagar, do outro lado. Ele olha para cima. Vê ela na janela. E dessa vez ele para. No meio da rua. Um segundo. Ela não se mexe. Ele não desce. Ele levanta a mão, aberta. E vai embora.", proxima: "rk_c2" },
    rk_c2: { tipo: "pensamento", texto: "Uma mão aberta não é uma resposta, Kaito. Mas eu vi.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Sexta, 20h", sprite: null, texto: "Às oito, o Takeo manda uma foto. O balanço do caquizeiro, sem corda nenhuma. Só o galho, vazio.", proxima: "rt_02" },
    rt_02: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Eu tirei o nó torto. Amanhã é sábado. O galho está esperando. Eu também. Mas eu espero bem, eu tenho prática.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. “Amanhã. Dez horas. Eu seguro a corda.”", proxima: "rt_a1", pontos: { takeo: 4 }, flags: ["Corda_sabado"] },
      { texto: "B. “Takeo. Você é a pessoa mais decidida que eu conheço.”", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["Takeo_decidido"] },
      { texto: "C. “Hoje eu dei um ultimato. Você acha que eu fui dura?”", proxima: "rt_c1", pontos: { takeo: 3 }, flags: ["Fui_dura"] }
    ]},
    rt_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Amanhã. Dez horas. Eu seguro a corda.", proxima: "rt_a2" },
    rt_a2: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Dez horas. A minha avó vai fazer bolo. Ela vai errar de novo. Vai dar sorte de novo.", proxima: "r_fim" },
    rt_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Takeo. Você é a pessoa mais decidida que eu conheço.", proxima: "rt_b2" },
    rt_b2: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Eu decidi muita coisa faz tempo. É fácil ser decidido quando você já sabe o que quer.", proxima: "r_fim" },
    rt_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Hoje eu dei um ultimato. Você acha que eu fui dura?", proxima: "rt_c2" },
    rt_c2: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Eu acho que você foi justa. Dura é ficar esperando no hall olhando pra parede. Você já fez a parte dura.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Sexta, 21h", sprite: null, texto: "Às nove, uma mensagem do Blake.", proxima: "rb_02" },
    rb_02: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Ele foi no treino. Bateu no saco de pancada uma hora e meia. Depois sentou no chão e ficou olhando pro teto. Eu sentei do lado. Ele perguntou se você estava certa. Eu falei que sim.", proxima: "rb_03" },
    rb_03: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu não falei isso por ele. Eu falei porque é verdade.", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. “Obrigada por falar a verdade, Blake.”", proxima: "rb_a1", pontos: { blake: 3 }, flags: ["Verdade_Blake"] },
      { texto: "B. “E você, Blake? Você é decidido?”", proxima: "rb_b1", pontos: { blake: 4 }, flags: ["Blake_decidido"] },
      { texto: "C. “Amanhã você treina comigo? Eu preciso bater em alguma coisa que não seja licitação.”", proxima: "rb_c1", pontos: { blake: 3 }, flags: ["Treino_Blake"] }
    ]},
    rb_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Obrigada por falar a verdade, Blake.", proxima: "rb_a2" },
    rb_a2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu só sei falar verdade. Mentira cansa. Eu menti sobre a marmita e fiquei cansado o dia inteiro.", proxima: "r_fim" },
    rb_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "E você, Blake? Você é decidido?", proxima: "rb_b2" },
    rb_b2: { tipo: "narracao", texto: "Digitando. Para. Muito tempo.", proxima: "rb_b3" },
    rb_b3: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Sobre algumas coisas. Uma delas eu estou decidido faz um tempo. Eu só não falo porque ainda não é a hora.", proxima: "r_fim" },
    rb_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Amanhã você treina comigo? Eu preciso bater em alguma coisa que não seja licitação.", proxima: "rb_c2" },
    rb_c2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Saco de pancada de areia. Reforçado. Eu vou pedir pro tio trazer o mais pesado. Três horas.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Sexta, 20h30", sprite: null, texto: "Às oito e meia, o Ryuji liga. Ela atende. Ele não fala nada. Ela ouve um barulho estranho do outro lado. Uma colher batendo numa panela.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", texto: "É uma salva de palmas! Feita com panela! Porque palma de mão ia ser pouco! Pelo ultimato! A Mio contou! Toda a escola sabe! Você é a minha heroína!", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. Rir. “Para de bater na panela, Ryuji, a sua mãe vai te matar.”", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Panela_Ryuji"] },
      { texto: "B. “Ryuji. Você acha que eu fiz certo?”", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Fiz_certo_Ryuji"] },
      { texto: "C. “Obrigada, Ryuji. Eu precisava de uma panela hoje.”", proxima: "rr_c1", pontos: { ryuji: 4 }, flags: ["Precisava_panela"] }
    ]},
    rr_a1: { quem: "eu", texto: "Para de bater na panela, Ryuji, a sua mãe vai te matar.", proxima: "rr_a2" },
    rr_a2: { quem: "ryuji", texto: "Ela está batendo junto! Ela também acha que você está certa! MÃE, FALA OI! ...Ela falou oi. Ela está batendo a tampa.", proxima: "r_fim" },
    rr_b1: { quem: "eu", texto: "Ryuji. Você acha que eu fiz certo?", proxima: "rr_b2" },
    rr_b2: { tipo: "narracao", texto: "A panela para. Silêncio do outro lado.", proxima: "rr_b3" },
    rr_b3: { quem: "ryuji", texto: "Eu acho que quem deixa você esperando não sabe a sorte que tem. E quem sabe a sorte que tem não deixa você esperando. Pronto. Foi a coisa mais séria que eu já falei. Eu vou voltar a bater na panela.", proxima: "r_fim" },
    rr_c1: { quem: "eu", texto: "Obrigada, Ryuji. Eu precisava de uma panela hoje.", proxima: "rr_c2" },
    rr_c2: { quem: "ryuji", texto: "Eu sempre tenho uma panela pra você. Literalmente. Eu vou deixar uma no seu degrau amanhã.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Sexta, 21h", sprite: null, texto: "Às nove, o Victor manda uma mensagem. Uma só. Sem vídeo, sem áudio, sem foto do Caramelo.", proxima: "rv_02" },
    rv_02: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Eu vou falar uma coisa e depois eu vou ficar quieto o fim de semana inteiro, pra não atrapalhar. Hoje no muro, quando você falou “então não”, eu fiquei com orgulho de você. Não feliz. Orgulho. São coisas diferentes. Eu queria que você soubesse que eu sei a diferença.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. “Eu sei que você sabe, Victor.”", proxima: "rv_a1", pontos: { victor: 4 }, flags: ["Sei_que_sabe"] },
      { texto: "B. “Não precisa ficar quieto o fim de semana inteiro.”", proxima: "rv_b1", pontos: { victor: 4 }, flags: ["Nao_fica_quieto"] },
      { texto: "C. “Obrigada. Pelo orgulho. E pela diferença.”", proxima: "rv_c1", pontos: { victor: 3 }, flags: ["Orgulho_Victor"] }
    ]},
    rv_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu sei que você sabe, Victor.", proxima: "rv_a2" },
    rv_a2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Tá. Então eu vou ficar quieto sabendo que você sabe que eu sei. Isso ficou confuso. Boa noite.", proxima: "r_fim" },
    rv_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Não precisa ficar quieto o fim de semana inteiro.", proxima: "rv_b2" },
    rv_b2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "...Então domingo. A minha mãe quer te ver. Ela fez você virar padroeira da oficina. Tem uma foto sua na parede. Do lado da placa. Eu não consegui impedir.", proxima: "r_fim" },
    rv_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Obrigada. Pelo orgulho. E pela diferença.", proxima: "rv_c2" },
    rv_c2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "De nada. Eu vou voltar a ser bobo amanhã. Hoje eu fui sério. Foi cansativo. Boa noite.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Sexta, 23h30", sprite: null, texto: "Onze e meia. Ela está deitada. Em cima da mesinha, o celular rachado. Do lado, o livro novo do Ren, ainda inteiro. Ela não precisou rasgar nenhuma página hoje.", proxima: "f_02" },
    f_02: { tipo: "pensamento", texto: "Hoje eu não chorei. Hoje eu não esperei ninguém. Hoje eu falei o que eu queria, em voz alta, olhando na cara.", proxima: "f_03" },
    f_03: { tipo: "pensamento", texto: "“Só fala comigo quando você se decidir.” E ele ainda não decidiu. E eu ainda gosto dele. As duas coisas são verdade ao mesmo tempo. Uma não apaga a outra.", proxima: "f_04" },
    f_04: { tipo: "pensamento", texto: "Mas eu não sou mais a menina que fica no hall olhando pra parede. Eu falei “não vou esperar muito”. E eu não vou.", proxima: "f_05" },
    f_05: { tipo: "pensamento", texto: "E o Ren... “Os meus param. O resto, eu tento.” Eu não sei o que isso vai custar pra ele. Eu tenho medo de saber.", proxima: "f_06" },
    f_06: { tipo: "narracao", texto: "Ela vira de lado. Pega o livro do Ren da mesinha. Abre na primeira página, no escuro, só para ver a letra a lápis, mesmo sem conseguir ler. “Esse também pode.”", proxima: "f_07" },
    f_07: { tipo: "narracao", texto: "Ela fecha o livro sem rasgar. Coloca de volta na mesinha. E dorme com a mão em cima dele.", proxima: "ep_fim" },

    // Fim do Capítulo 47 (crie a entrada "capitulo47" em dados/capitulos.js).
    ep_fim: { fim: "capitulo47" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 48 (anotações do roteiro)
 *  • A SN NÃO ESTÁ "TUDO BEM": raiva fria. Hall, 7h: "Eu não quero saber o que você não fez. Eu quero saber o que você vai fazer."
 *    "SÓ FALA COMIGO QUANDO VOCÊ SE DECIDIR. E EU NÃO VOU ESPERAR MUITO." / "Quanto é muito?" (escolha).
 *    No muro: "Decidiu?" / "Eu... eu estou..." / "Então não." O Kaito passou direto pela Serena e pela grade e entrou sozinho.
 *    O grupo: "ELA DEU ULTIMATO" (Mio). Reina: "...Finalmente." Hana: "Ultimato" sublinhado três vezes.
 *  • SERENA: fotos do dueto no corredor, encostada no armário da SN. A SN não deu a cena: "Tem foto dessa parte também?" /
 *    "Sai." / "Sabia." / sorriso frio (ela esqueceu de mancar e lembrou na esquina).
 *  • REN BOM COM ELA: livro novo ("Esse também pode."); consertou a porta do armário ("Licitação."); fez que sim no muro
 *    ("foi certo"). Seguiu ela a semana inteira de longe "pra ver se você chega" — ela escolheu: do lado / para / só hoje.
 *  • A LOJA DE LÁMEN (fora da escola): "Para de atormentar aquela loja." Motivo: pelo tio / por você / porque é covarde.
 *    Ren: "Da outra vez eu falei 'o rei, não'. Ainda é verdade. A loja não é minha. A ordem não é minha. MAS OS QUE VÃO
 *    LÁ SÃO MEUS. OS MEUS PARAM. A PARTIR DE HOJE. O RESTO... EU TENTO." Vai custar caro pra ele.
 *    "Não é por você... É um pouco por você." Sorriso sem jeito, de menino que nunca treinou.
 *  • Takeo: apontador de metal "à prova de licitação". Blake: Kaito no treino, "ela está certa?" "Sim."
 *  • Rota Kaito: ele passa de moto devagar na frente do prédio sem parar. "Decidiu?" → "Quase. Eu volto com a resposta inteira."
 *  • Sábado: corda do balanço (rota Takeo, 10h), treino com o Blake (rota Blake, 15h), lan (Treinar_lan), domingo mãe do Victor.
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 Quanto é muito · 2 No armário (Serena) · 3 No muro (Kaito) · 4 Por quem (Ren) · 5 Seguir (Ren) · Rota (1 por rota)
 *
 * FLAGS NOVAS
 *  Parar_de_descer · Menos_que_segunda · Ele_que_conte · Dois_segundos · Sai_armario · Sorriso_frio
 *  Volta_grade · Falei_serio · Silencio_muro · Pelo_tio · Por_voce_Ren · Covarde_Ren
 *  Anda_do_lado · Sem_sombra · So_hoje_Ren · Decidiu_mensagem · Cortina_sexta · Esperou_janela
 *  Corda_sabado · Takeo_decidido · Fui_dura · Verdade_Blake · Blake_decidido · Treino_Blake
 *  Panela_Ryuji · Fiz_certo_Ryuji · Precisava_panela · Sei_que_sabe · Nao_fica_quieto · Orgulho_Victor
 */