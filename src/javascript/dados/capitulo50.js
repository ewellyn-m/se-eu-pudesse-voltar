/*
 * =====================================================================
 *  CAPÍTULO 50 — Começar do zero
 *  Segunda-feira, logo depois do Capítulo 49.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Cenas com todos os meninos em todas as rotas. Bloco de rota à noite.
 *
 *  CONTEXTO (Cap. 49)
 *    • O Kaito veio decidido: falou com a Serena na porta da casa dela, na frente da mãe. "Eu escolho você."
 *      A SN: nada de namoro agora. Ele: "Eu sei. Eu não pedi." Ele vai mostrar, todo dia.
 *    • O Ren no balanço: "Pra saber se é pra ficar feliz por você. Ou não."
 *    • A Serena: "eu sei esperar 🤍".
 *
 *  O QUE ACONTECE
 *    • Segunda de manhã: o Kaito vem buscar (ou ela vai a pé com o Takeo, se combinou). Pequenas coisas, sem pressa.
 *    • A SERENA muda de jeito: chega de óculos escuros, quieta, e a escola começa a falar que "o Kaito humilhou ela na frente
 *      da mãe". As meninas que gostam do Kaito ficam do lado dela. Ela não fala nada com ninguém. Só passa pela SN e diz:
 *      "Parabéns." O Kaito não volta atrás.
 *    • Educação física com o bloco C: o Kaito vê a marca no rosto do Ren. "O tio falou que os caras da porta sumiram.
 *      Você sabe de alguma coisa?" A SN guarda o segredo do Ren.
 *    • Clube de leitura: o Ren. "Veio com a verdadeira?" / "Veio." / "Então eu posso ficar feliz." E um aviso: "Se eu
 *      faltar essa semana, não é nada."
 *    • A força: quase não escapa hoje. Ela percebe.
 *    • Bloco de rota à noite.
 *
 *  REGRAS
 *    • Sala da SN: Takeo, Mio, Hana, Reina, Ren, Akane. Kaito, Blake, Ryuji, Victor e Serena são de outras salas.
 *    • Sem xadrez no Ren. O Ren não manda mensagem. Fala pouco. Sem narrar roupa. Sem flashback.
 *    • A Serena não explica plano. Nada de namoro.
 *    • Sem repetir "hall", "fita preta" e a piada da escola dos capítulos anteriores.
 *
 *  PERSONAGENS
 *    Mio, Hana, Reina, Kaito, Takeo, Victor, Blake, Ryuji, Ren, Serena.
 *    Sem sprite / rótulo: Victor, Ren, Professor de educação física, Menina do terceiro ano.
 *
 *  CENÁRIOS
 *    apartamento (entrada do prédio) · saida-colegio · sala-de-aula · corredor · patio-fundos · clube-leitura · quarto-sn
 *
 *  Crie a entrada "capitulo50" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo50", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — SEGUNDA DE MANHÃ =================== */
    c1_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Segunda, 6h30 — Cena 1", sprite: null, texto: "Segunda-feira. O despertador toca às seis e meia e ela levanta na primeira vez. Não porque está ansiosa. Porque está com vontade. Faz tempo que ela não sente vontade de uma segunda-feira.", proxima: "c1_02" },
    c1_02: { caminhos: [
      { flag: "Terca_talvez", proxima: "c1_t01" }
    ], proxima: "c1_k01" },

    // ----- Ela combinou de ir a pé com o Takeo -----
    c1_t01: { roupa: "escolar", tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", legenda: "Segunda, 6h40", sprite: "takeo:escolar", texto: "Seis e quarenta. Na calçada do prédio, o Takeo, com a mochila nos dois ombros e o braço novo levantado, abanando, como quem chama um táxi.", proxima: "c1_t02" },
    c1_t02: { quem: "takeo", sprite: "takeo:escolar", texto: "Dois braços! Como prometido! Um deles ainda é de frango, mas funciona!", proxima: "c1_t03" },
    c1_t03: { tipo: "narracao", texto: "E, do outro lado da rua, parado na moto desligada, sem buzinar, o Kaito. Com o capacete vermelho no braço. Ele não atravessa. Ele só levanta a mão, um aceno pequeno, e faz que sim para o Takeo.", proxima: "c1_t04" },
    c1_t04: { quem: "takeo", sprite: "takeo:escolar", texto: "...Ele veio mesmo assim. Ele sabia que você ia comigo. Ele veio só pra dar bom dia?", proxima: "c1_t05" },
    c1_t05: { quem: "eu", texto: "Parece que sim.", proxima: "c1_t06" },
    c1_t06: { tipo: "narracao", sprite: null, texto: "Eles vão a pé. O Takeo conta da avó, do gato do vizinho, do bolo afundado que deu sorte. E, a uma quadra de distância, devagar, em primeira, a moto vai atrás. Não para perto. Não chama. Só vai. Até a frente da escola. Depois estaciona e o Kaito entra sozinho, sem esperar.", proxima: "c1_t07" },
    c1_t07: { tipo: "pensamento", texto: "Ele não pediu nada. Ele não reclamou. Ele só garantiu que eu cheguei.", proxima: "c1_20" },

    // ----- O Kaito vem buscar -----
    c1_k01: { roupa: "escolar", tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", legenda: "Segunda, 6h50", sprite: "kaito", texto: "Quando ela desce, ele já está lá, na entrada do prédio, do lado do porteiro, conversando sobre futebol. O porteiro está rindo. O porteiro nunca ri.", proxima: "c1_k02" },
    c1_k02: { tipo: "narracao", texto: "Ele vê ela e para de falar no meio da frase. O porteiro olha para ele, olha para ela, e volta para o jornal com um sorriso de quem entendeu tudo.", proxima: "c1_k03" },
    c1_k03: { quem: "kaito", texto: "Bom dia.", proxima: "c1_k04" },
    c1_k04: { quem: "eu", texto: "Bom dia.", proxima: "c1_k05" },
    c1_k05: { tipo: "narracao", texto: "Ele estende o capacete vermelho. Ela pega. Coloca. E espera. Ele não estica a mão. Ele olha para ela.", proxima: "c1_k06" },
    c1_k06: { quem: "kaito", texto: "Posso?", proxima: "c1_k07" },
    c1_k07: { tipo: "narracao", texto: "Ela faz que sim. Ele fecha a fivela. Clique. Devagar, sem pressa, sem demorar mais do que precisa. Ele está seguindo a regra. Ela vê ele seguindo a regra, e alguma coisa no peito dela afrouxa um pouco.", proxima: "c1_k08" },
    c1_k08: { quem: "kaito", texto: "O tio mandou isso. Ele disse que é pra cliente pequenininha. Eu não pedi. Ele que mandou. Eu só estou entregando.", proxima: "c1_k09" },
    c1_k09: { tipo: "narracao", texto: "Um onigiri, embrulhado em papel, com um desenho de carinha feito de caneta. A letra do tio, torta. Ela guarda na mochila.", proxima: "c1_k10" },
    c1_k10: { tipo: "narracao", cenario: "rua", transicao: "tempo", texto: "No caminho, ela segura na camisa dele. Não na cintura. Ainda não. No primeiro sinal vermelho, ele não coloca a mão em cima da dela. Ele fala, sem virar.", proxima: "c1_k11" },
    c1_k11: { quem: "kaito", texto: "Hoje vai ter falatório. Sobre ontem. Sobre a Serena. Eu vou ouvir. Eu não vou responder. Eu só queria que você soubesse antes.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — No sinal
    c1_esc1: { escolhas: [
      { texto: "A. “Eu sei. Eu também não vou responder.”", proxima: "c1_1a_1", pontos: { kaito: 2 }, flags: ["Nao_responde_junto"] },
      { texto: "B. “Se perguntarem pra mim, eu falo a verdade.”", proxima: "c1_1b_1", pontos: { kaito: 2 }, flags: ["Falo_verdade"] },
      { texto: "C. Não falar nada. Só apertar a camisa um pouco mais.", proxima: "c1_1c_1", pontos: { kaito: 3 }, flags: ["Apertou_jaqueta"] }
    ]},
    c1_1a_1: { quem: "eu", texto: "Eu sei. Eu também não vou responder.", proxima: "c1_1a_2" },
    c1_1a_2: { quem: "kaito", texto: "A gente não responde junto, então. Separado. Mas junto.", proxima: "c1_k12" },
    c1_1b_1: { quem: "eu", texto: "Se perguntarem pra mim, eu falo a verdade. Que você falou o que tinha que falar. Do jeito certo.", proxima: "c1_1b_2" },
    c1_1b_2: { tipo: "narracao", texto: "Ele não responde. Mas ela vê, pelo retrovisor, ele fechar os olhos um segundo, como quem respira depois de muito tempo embaixo d'água.", proxima: "c1_k12" },
    c1_1c_1: { tipo: "narracao", texto: "Ela não fala nada. Só aperta a camisa dele um pouco mais. Ele percebe. O sinal fica verde. Ele demora meio segundo para andar.", proxima: "c1_k12" },
    c1_k12: { cenario: "saida-colegio", tipo: "narracao", texto: "Na frente da escola, ele para no meio-fio. Ela desce. Tira o capacete. Devolve. Os dedos se encostam. Ninguém tira a mão rápido. Mas ninguém segura também. Do jeito certo.", proxima: "c1_20" },

    // (os dois caminhos continuam aqui)
    c1_20: { tipo: "narracao", cenario: "saida-colegio", sprite: null, texto: "No portão, as meninas que sempre olham para o Kaito estão olhando. Mas não do jeito de sempre. Elas estão olhando torto. Cochichando. Uma delas, do terceiro ano, faz uma cara de nojo quando ele passa.", proxima: "c1_21" },
    c1_21: { quem: "desconhecido", rotulo: "Menina do terceiro ano", texto: "Coitada da Serena. Ele gritou com ela na frente da mãe. Ela chorou o domingo inteiro. A irmã da minha prima viu.", proxima: "c1_22" },
    c1_22: { tipo: "pensamento", texto: "Ele não gritou. Ele falou alto. São coisas diferentes. Mas ninguém aqui estava lá. E a Serena sabe disso.", proxima: "c2_01" },

    /* =================== CENA 2 — A SERENA =================== */
    c2_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Antes da primeira aula — Cena 2", sprite: "serena", texto: "No corredor, a Serena. Chegando devagar, com óculos escuros. Dentro da escola. Sem mancar. Com as amigas da sala C em volta, como escudo, uma segurando a mochila dela, outra com a mão nas costas dela.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", texto: "Ela não fala com ninguém. Ela não sorri. Ela não olha para o Kaito, que está parado na porta da sala dele, do outro lado do corredor. Ela anda como quem está carregando uma tragédia, e o corredor inteiro abre caminho para a tragédia passar.", proxima: "c2_03" },
    c2_03: { tipo: "pensamento", texto: "Ela mudou de jeito. Ela não está mais correndo atrás dele. Agora ela é a coitada que ele magoou. E todo mundo vai cuidar dela. E todo mundo vai olhar torto pra ele.", proxima: "c2_04" },
    c2_04: { tipo: "pensamento", texto: "Ela não precisa mais do tornozelo. Agora ela tem o coração partido. Muito melhor.", proxima: "c2_05" },
    c2_05: { tipo: "narracao", texto: "Quando ela passa pela SN, ela diminui o passo. Só um pouco. Não tira os óculos. Não para. E fala, baixo, tão baixo que só a SN ouve, com a voz mais doce do mundo.", proxima: "c2_06" },
    c2_06: { quem: "serena", texto: "Parabéns.", proxima: "c2_07" },
    c2_07: { tipo: "narracao", sprite: null, texto: "E continua andando. As amigas atrás. Uma delas olha para a SN de cima a baixo, com desprezo, como se a SN tivesse feito alguma coisa.", proxima: "c2_08" },
    c2_08: { tipo: "pensamento", texto: "“Parabéns.” Uma palavra. Doce. E eu sinto ela entrar nas costas igual uma agulha fina.", proxima: "c2_09" },
    c2_09: { tipo: "pensamento", texto: "Ela quer que eu sinta culpa. Ela quer que eu pense que ganhei ele em cima das lágrimas dela. Ela quer que eu fique com vergonha de ter ganhado.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — Parabéns
    c2_esc2: { escolhas: [
      { texto: "A. Não fazer nada. Ela não vai ter reação nenhuma.", proxima: "c2_2a_1", pontos: {}, flags: ["Sem_reacao_parabens"] },
      { texto: "B. Falar alto, sem virar: “Obrigada, Serena.”", proxima: "c2_2b_1", pontos: {}, flags: ["Obrigada_Serena"] },
      { texto: "C. Ir até a porta da sala do Kaito e ficar do lado dele. Na frente de todo mundo.", proxima: "c2_2c_1", pontos: { kaito: 3 }, flags: ["Ficou_do_lado"] }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "Ela não faz nada. Ela entra na sala dela, senta, abre o caderno. A agulha fica nas costas. Ela não tira. Ela deixa doer e não mostra.", proxima: "c2_10" },
    c2_2b_1: { quem: "eu", texto: "Obrigada, Serena.", proxima: "c2_2b_2" },
    c2_2b_2: { tipo: "narracao", texto: "Ela fala alto. Normal. Educada. Sem virar. Como quem agradece alguém que segurou a porta. No fim do corredor, a Serena para de andar. Um segundo. As amigas param junto. E ela continua, um pouco mais rápido.", proxima: "c2_10" },
    c2_2c_1: { tipo: "narracao", texto: "Ela atravessa o corredor. Para do lado do Kaito, na porta da sala dele. Não fala nada. Não segura a mão dele. Só fica ali, do lado, olhando o corredor, enquanto o corredor inteiro olha para os dois.", proxima: "c2_2c_2" },
    c2_2c_2: { tipo: "narracao", texto: "O Kaito não olha para ela. Ele olha para frente. Mas o ombro dele relaxa. Ela vê. E a Serena, lá no fim do corredor, sem tirar os óculos, vira a cabeça e vê também.", proxima: "c2_10" },

    // (todas as opções continuam aqui)
    c2_10: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", sprite: "mio", texto: "Na sala, a Mio já sabe de tudo. A Mio sempre sabe de tudo antes de acontecer.", proxima: "c2_11" },
    c2_11: { quem: "mio", texto: "A rede está dividida. Metade acha que ele é um monstro. A outra metade acha que a Serena está fingindo. A metade do monstro é maior. A Serena tem muitas amigas.", proxima: "c2_12" },
    c2_12: { quem: "mio", texto: "Eu estou na metade do fingindo. Eu sou a presidente da metade do fingindo. A Hana é a tesoureira.", proxima: "c2_13" },
    c2_13: { quem: "hana", sprite: "hana", texto: "Eu não aceitei o cargo.", proxima: "c2_14" },
    c2_14: { quem: "mio", sprite: "mio", texto: "Você aceitou. Você só não sabe ainda.", proxima: "c2_15" },
    c2_15: { tipo: "narracao", sprite: "reina", texto: "A Reina vira na carteira da frente, com o celular na mão.", proxima: "c2_16" },
    c2_16: { quem: "reina", texto: "A mãe da Serena é amiga da minha avó. Eu vou descobrir o que aconteceu de verdade na porta. A minha avó sabe tudo do bairro. Ela é a Mio de sessenta anos.", proxima: "c2_17" },
    c2_17: { quem: "mio", sprite: "mio", texto: "Eu quero conhecer essa mulher.", proxima: "c2_18" },
    c2_18: { tipo: "narracao", sprite: "takeo:escolar", texto: "Atrás dela, o Takeo. Ele não fala da Serena. Ele não fala do Kaito. Ele inclina o corpo para frente e mostra, embaixo da carteira, o braço novo, fechando e abrindo a mão.", proxima: "c2_19" },
    c2_19: { quem: "takeo", sprite: "takeo:escolar", texto: "Olha. Já fecho inteira. O médico disse que ia demorar duas semanas. Demorou cinco dias. A minha avó disse que é por causa do bolo.", proxima: "c2_20" },
    c2_20: { tipo: "narracao", sprite: "ren", texto: "Na carteira perto da porta, o Ren. A marca na bochecha está quase sumindo. O corte na boca, uma linha fina. Ele está lendo. Quando ela senta, ele não levanta os olhos. Mas vira a página. Pela primeira vez, ela vê o Ren virar uma página.", proxima: "c3_01" },

    /* =================== CENA 3 — EDUCAÇÃO FÍSICA =================== */
    c3_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Educação física — Cena 3", sprite: null, texto: "Educação física com o bloco C. Hoje é corrida em volta da quadra. Vinte voltas. O professor apita e vai sentar na sombra com uma garrafa de água, como quem vai assistir a um filme.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "Ela corre devagar, de propósito, no meio da turma, nem na frente nem atrás. O Kaito alcança ela na terceira volta. Não passa. Corre do lado.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", sprite: "kaito", texto: "Na quinta volta, eles passam pelo Ren, que está correndo sozinho, do lado de dentro da pista, sem pressa. O Kaito olha para ele. Para a bochecha. Para a boca.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", texto: "Na sexta volta, o Kaito fala, baixo, sem parar de correr.", proxima: "c3_05" },
    c3_05: { quem: "kaito", texto: "O Ren está com a cara machucada.", proxima: "c3_06" },
    c3_06: { quem: "eu", texto: "Estou vendo.", proxima: "c3_07" },
    c3_07: { quem: "kaito", texto: "Não foi a gente. Na sexta, ele não estava no posto. Não foi o Taijo também, eu acho. Ele não briga com o Taijo.", proxima: "c3_08" },
    c3_08: { tipo: "narracao", texto: "Sétima volta. O Kaito fica quieto um tempo. Depois fala de novo.", proxima: "c3_09" },
    c3_09: { quem: "kaito", texto: "O tio falou que os caras da porta sumiram. Os do Ren. Desde sexta. Ninguém sabe por quê. O tio está cantando enquanto faz caldo. Ele canta muito mal.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", texto: "Oitava volta. Ele olha para ela.", proxima: "c3_11" },
    c3_11: { quem: "kaito", texto: "Você sabe de alguma coisa?", proxima: "c3_12" },
    c3_12: { tipo: "pensamento", texto: "“Não conta pra ele. Que fui eu.” Ele me pediu. Ele levou uma mão na cara e me pediu só isso.", proxima: "c3_13" },
    c3_13: { tipo: "pensamento", texto: "E o Kaito acabou de decidir não mentir mais pra mim. E agora sou eu que tenho uma coisa pra não contar.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — Você sabe de alguma coisa?
    c3_esc3: { escolhas: [
      { texto: "A. “Eu não posso falar, Kaito. Não é meu pra contar.”", proxima: "c3_3a_1", pontos: { kaito: 1 }, flags: ["Nao_e_meu"] },
      { texto: "B. “Talvez alguém tenha decidido ser outra pessoa.”", proxima: "c3_3b_1", pontos: {}, flags: ["Outra_pessoa"] },
      { texto: "C. “Não.” E correr mais rápido.", proxima: "c3_3c_1", pontos: {}, flags: ["Mentiu_Ren"] }
    ]},
    c3_3a_1: { quem: "eu", texto: "Eu não posso falar, Kaito. Não é meu pra contar.", proxima: "c3_3a_2" },
    c3_3a_2: { tipo: "narracao", texto: "Ele olha para ela. Ela espera ele insistir. Ele não insiste. Ele faz que sim, devagar, olhando para frente.", proxima: "c3_3a_3" },
    c3_3a_3: { quem: "kaito", texto: "Tá. Se não é seu, eu não pergunto mais. Mas se um dia for seu, você me conta.", proxima: "c3_14" },
    c3_3b_1: { quem: "eu", texto: "Talvez alguém tenha decidido ser outra pessoa.", proxima: "c3_3b_2" },
    c3_3b_2: { tipo: "narracao", texto: "O Kaito fica quieto. Nona volta. Décima. Ela vê ele olhando para o Ren de novo, do outro lado da quadra, com uma cara que não é de raiva. É de quem está fazendo uma conta e não está gostando do resultado.", proxima: "c3_3b_3" },
    c3_3b_3: { quem: "kaito", texto: "...Ninguém decide ser outra pessoa de graça.", proxima: "c3_14" },
    c3_3c_1: { quem: "eu", texto: "Não.", proxima: "c3_3c_2" },
    c3_3c_2: { tipo: "narracao", texto: "Ela corre mais rápido. Passa ele. Passa o bloco C inteiro. Ele não alcança. Ela sabe que ele não acreditou. E ela sabe que ele não vai perguntar de novo. As duas coisas pesam igual.", proxima: "c3_14" },

    // (todas as opções continuam aqui)
    c3_14: { tipo: "narracao", sprite: "ren", texto: "Na décima quinta volta, ela passa do lado do Ren. Ele está correndo devagar. Ele não olha para ela. Mas fala, quando ela passa, sem mudar o ritmo.", proxima: "c3_15" },
    c3_15: { quem: "ren", texto: "Obrigado.", proxima: "c3_16" },
    c3_16: { tipo: "pensamento", texto: "Ele ouviu. De onde ele estava, ele ouviu. Ou ele só leu a cara do Kaito. Com o Ren, nunca dá pra saber.", proxima: "c3_17" },
    c3_17: {  tipo: "narracao", sprite: "blake", texto: "Na última volta, o Blake passa os dois, sem esforço nenhum, de braço enfaixado, com a cara tranquila. O Ryuji vem atrás, vermelho, ofegante, gritando que está com câimbra na alma. O Victor está andando, não correndo, com o pirulito na boca, cumprimentando todo mundo como se fosse uma parada.", proxima: "c3_18" },
    c3_18: { quem: "ryuji", sprite: "ryuji", texto: "Professor! Eu acho que eu morri na volta doze! Eu estou correndo como fantasma! Conta como presença?!", proxima: "c3_19" },
    c3_19: { quem: "desconhecido", rotulo: "Professor de educação física", sprite: null, texto: "Conta. Fantasma também corre. Mais três voltas.", proxima: "c3_20" },
    c3_20: { tipo: "narracao", texto: "Ela termina as vinte voltas sem nenhum tropeço, sem nenhuma grade torta, sem nada. Quando para, apoia as mãos nos joelhos para respirar. E percebe. Hoje ela não quebrou nada. Nada. Desde que acordou.", proxima: "c3_21" },
    c3_21: { tipo: "pensamento", texto: "Hoje eu não estou com raiva. É só isso. Quando a raiva vai embora, a força volta pra dentro. Igual água que para de ferver.", proxima: "c3_22" },
    c3_22: { tipo: "pensamento", texto: "Então eu não preciso só segurar a força. Eu preciso segurar a raiva. Ou não deixar ela ficar tanto tempo.", proxima: "c4_01" },

    /* =================== CENA 4 — O INTERVALO =================== */
    c4_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Intervalo — Cena 4", sprite: null, texto: "No intervalo, o banco da árvore torta. O Blake está sentado lá, com a lancheira aberta, como antes. O Ryuji no chão. E, na ponta do banco, o Kaito, sentado, não na grade, não longe. No banco.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "Ela para no meio do pátio. A Mio do lado dela. A Mio olha para o banco. Olha para ela.", proxima: "c4_03" },
    c4_03: { quem: "mio", sprite: "mio", texto: "Vai. Eu vou junto. Se for estranho, eu falo de pombo e ninguém percebe.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", sprite: null, texto: "Elas vão. Ela senta no banco, do lado do Blake, não do lado do Kaito. O Blake estende metade do sanduíche, como sempre. O Kaito não fala nada. Ele tira o onigiri do tio da mochila. Ela tira o dela. Os dois comem ao mesmo tempo, sem olhar um para o outro, o mesmo onigiri, com a mesma carinha de caneta no papel.", proxima: "c4_05" },
    c4_05: { quem: "ryuji", sprite: "ryuji", texto: "...Vocês estão comendo onigiri igual. Isso é um código? Isso é um código de casal? Eu não sabia que tinha código!", proxima: "c4_06" },
    c4_06: { quem: "eu", texto: "Não é casal, Ryuji.", proxima: "c4_07" },
    c4_07: { quem: "kaito", sprite: "kaito", texto: "Não é casal.", proxima: "c4_08" },
    c4_08: { tipo: "narracao", sprite: null, texto: "Os dois falam ao mesmo tempo. O Blake para de mastigar. A Mio cobre a boca com as duas mãos. O Ryuji olha de um para o outro, com a coxinha no ar.", proxima: "c4_09" },
    c4_09: { quem: "ryuji", texto: "Vocês falaram igual também! Isso é PIOR!", proxima: "c4_10" },
    c4_10: { tipo: "narracao", texto: "Ela não ri. Ela tenta não rir. Ela olha para o Kaito sem querer. Ele está olhando para o onigiri, com a orelha vermelha, tentando também não rir. E aí os dois riem. Ao mesmo tempo. De novo.", proxima: "c4_11" },
    c4_11: { sprite: "victor", tipo: "narracao", texto: "O Victor chega com o pirulito, olha a cena, e senta no braço do banco do lado dela.", proxima: "c4_12" },
    c4_12: { quem: "victor", texto: "Eu perdi alguma coisa? Eu sinto que perdi alguma coisa. O Ryuji está com cara de quem viu um fantasma. De novo.", proxima: "c4_13" },
    c4_13: { quem: "ryuji", texto: "Eu vi um código, Victor! Um código!", proxima: "c4_14" },
    c4_14: { tipo: "narracao", texto: "Do outro lado do pátio, na grade, a Serena, de óculos escuros, com as amigas. Ela não está olhando para o banco. Ela está de costas para o banco. Mas uma das amigas está olhando. E falando no ouvido dela. Narrando.", proxima: "c4_15" },
    c4_15: { tipo: "pensamento", texto: "Ela não olha. Ela pede pra contarem. Ela não quer que ninguém veja ela olhando.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — No banco
    c4_esc4: { escolhas: [
      { texto: "A. Esquecer a grade. Prestar atenção no banco. No Ryuji. No riso.", proxima: "c4_4a_1", pontos: { ryuji: 1, blake: 1 }, flags: ["Esqueceu_grade"] },
      { texto: "B. Falar baixo pro Kaito: “Ela está ouvindo tudo. Pela amiga.”", proxima: "c4_4b_1", pontos: { kaito: 2 }, flags: ["Avisou_Kaito"] },
      { texto: "C. Perguntar pro Victor sobre a mãe dele. Bem alto. Mudar de assunto.", proxima: "c4_4c_1", pontos: { victor: 2 }, flags: ["Mae_Victor_alto"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "Ela esquece a grade. Presta atenção no banco. O Ryuji contando que viu um código. O Blake dizendo “não é código, é onigiri”. A Mio inventando um pombo que não existe. Ela ri três vezes antes do sinal. Não pensa na Serena nenhuma delas.", proxima: "c4_16" },
    c4_4b_1: { quem: "eu", texto: "Ela está ouvindo tudo. Pela amiga.", proxima: "c4_4b_2" },
    c4_4b_2: { tipo: "narracao", texto: "O Kaito não vira para a grade. Ele não precisa. Ele faz que sim. Depois, bem baixo, só para ela ouvir.", proxima: "c4_4b_3" },
    c4_4b_3: { quem: "kaito", texto: "Então deixa ela ouvir. Ouvir é tudo que ela vai ter.", proxima: "c4_16" },
    c4_4c_1: { quem: "eu", texto: "Victor! Como está a sua mãe? E a oficina?", proxima: "c4_4c_2" },
    c4_4c_2: { quem: "victor", texto: "A minha mãe? Ótima! A oficina está cheia! A placa trouxe cliente! Três carros essa semana! Ela diz que é milagre! Eu digo que é você!", proxima: "c4_4c_3" },
    c4_4c_3: { tipo: "narracao", texto: "Ele fala tão alto, tão animado, que metade do pátio vira para ouvir sobre a oficina. A amiga da Serena para de narrar. Não tem o que narrar. É só o Victor falando de carro.", proxima: "c4_16" },

    // (todas as opções continuam aqui)
    c4_16: { tipo: "narracao", texto: "O sinal toca. Todo mundo levanta. O Kaito levanta por último. Antes de ir, ele para do lado dela, um segundo.", proxima: "c4_17" },
    c4_17: { quem: "kaito", texto: "Na saída eu estou na moto. Se você quiser. Se não quiser, tudo bem.", proxima: "c4_18" },
    c4_18: { tipo: "narracao", texto: "E vai. Sem esperar resposta. Sem empurrar. Ela fica olhando ele ir, e pensa que é exatamente isso que ela pediu.", proxima: "c5_01" },

    /* =================== CENA 5 — O CLUBE DE LEITURA =================== */
    c5_01: { tipo: "narracao", cenario: "clube-leitura", transicao: "tempo", legenda: "Aula vaga — Cena 5", sprite: null, texto: "A professora de geografia falta. Aula vaga. A turma inteira vai para o pátio. Ela vai para o clube de leitura, a sala pequena no fim do corredor, com as estantes velhas e o cheiro de papel guardado.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", texto: "Ela não sabe por que vai. Mentira. Ela sabe. Ela viu o Ren saindo da sala com o livro debaixo do braço, para o lado do corredor do fim.", proxima: "c5_03" },
    c5_03: { sprite: "ren", tipo: "narracao", texto: "Ele está sentado na mesa do canto, perto da janela, lendo. Sozinho. A luz da tarde batendo de lado na cara dele, na marca quase sumida. Ele não levanta os olhos quando ela entra. Mas para de ler.", proxima: "c5_04" },
    c5_04: { tipo: "narracao", texto: "Ela senta do outro lado da mesa. Tira da mochila o livro que ele deu na sexta. “Esse também pode.” Inteiro. Coloca em cima da mesa, entre os dois.", proxima: "c5_05" },
    c5_05: { quem: "eu", texto: "Eu não rasguei.", proxima: "c5_06" },
    c5_06: { quem: "ren", texto: "Eu vi.", proxima: "c5_07" },
    c5_07: { quem: "eu", texto: "Eu vou ler. Se você deixar. Em vez de rasgar.", proxima: "c5_08" },
    c5_08: { tipo: "narracao", texto: "Ele olha para o livro. Depois para ela. Faz que sim, devagar.", proxima: "c5_09" },
    c5_09: { quem: "ren", texto: "A página cinquenta é a melhor. Não pula pra ela. Chega nela.", proxima: "c5_10" },
    c5_10: { tipo: "narracao", texto: "Silêncio. O relógio da parede fazendo tique. Lá fora, alguém grita no pátio. Ele volta a olhar para o livro dele. Ela fica olhando para ele.", proxima: "c5_11" },
    c5_11: { quem: "ren", texto: "Ele veio com a verdadeira?", proxima: "c5_12" },
    c5_12: { tipo: "narracao", texto: "Ele pergunta sem levantar os olhos do livro. Como quem pergunta se vai chover.", proxima: "c5_13" },
    c5_13: { quem: "eu", texto: "Veio.", proxima: "c5_14" },
    c5_14: { tipo: "narracao", texto: "Ele para. A mão dele, que ia virar a página, fica parada no canto do papel. Um segundo. Dois.", proxima: "c5_15" },
    c5_15: { quem: "ren", texto: "...Bom.", proxima: "c5_16" },
    c5_16: { tipo: "narracao", texto: "E aí ele sorri. O sorriso pequeno, sem jeito, de menino que nunca treinou. Mas dessa vez dura mais. Ele não esconde. Ele deixa ali, olhando para o livro, como quem deixa uma janela aberta.", proxima: "c5_17" },
    c5_17: { quem: "ren", texto: "Então eu posso ficar feliz.", proxima: "c5_esc5" },

    // ▶ ESCOLHA 5 — No clube de leitura
    c5_esc5: { escolhas: [
      { texto: "A. “Pode, Ren.”", proxima: "c5_5a_1", pontos: {}, flags: ["Pode_ficar_feliz"] },
      { texto: "B. “Você não precisava ficar feliz por mim. Depois de tudo.”", proxima: "c5_5b_1", pontos: {}, flags: ["Depois_de_tudo"] },
      { texto: "C. “E você, Ren? Quem fica feliz por você?”", proxima: "c5_5c_1", pontos: {}, flags: ["Quem_fica_feliz"] }
    ]},
    c5_5a_1: { quem: "eu", texto: "Pode, Ren.", proxima: "c5_5a_2" },
    c5_5a_2: { tipo: "narracao", texto: "Ele faz que sim. Vira a página. E ela vê, pelo canto do olho, que ele não está lendo. Ele está só olhando para a página, com o sorriso ainda ali, esquecido.", proxima: "c5_18" },
    c5_5b_1: { quem: "eu", texto: "Você não precisava ficar feliz por mim. Depois de tudo.", proxima: "c5_5b_2" },
    c5_5b_2: { quem: "ren", texto: "Depois de tudo foi eu. Não você. Você não me deve nada. Eu é que fico feliz porque quero.", proxima: "c5_18" },
    c5_5c_1: { quem: "eu", texto: "E você, Ren? Quem fica feliz por você?", proxima: "c5_5c_2" },
    c5_5c_2: { tipo: "narracao", texto: "Ele para. O sorriso fica parado também, sem saber se vai embora ou se fica. Ele demora muito. Mais do que ela já viu ele demorar.", proxima: "c5_5c_3" },
    c5_5c_3: { quem: "ren", texto: "...O tio do lámen sorriu. Isso conta?", proxima: "c5_5c_4" },
    c5_5c_4: { quem: "eu", texto: "Conta.", proxima: "c5_18" },

    // (todas as opções continuam aqui)
    c5_18: { tipo: "narracao", texto: "Ela abre o livro dele. Começa a ler. Página um. Ele lê o dele. Os dois ficam em silêncio, cada um do seu lado da mesa, com o relógio fazendo tique, até o sinal tocar.", proxima: "c5_19" },
    c5_19: { tipo: "narracao", texto: "Quando ela levanta para ir, ele fala. Sem olhar para ela. Baixo.", proxima: "c5_20" },
    c5_20: { quem: "ren", texto: "Se eu faltar essa semana, não é nada.", proxima: "c5_21" },
    c5_21: { quem: "eu", texto: "...Por que você faltaria?", proxima: "c5_22" },
    c5_22: { quem: "ren", texto: "Não é nada. Só lê o livro. Até a página cinquenta.", proxima: "c5_23" },
    c5_23: { tipo: "narracao", texto: "E volta a ler. Ela fica parada na porta um segundo. Depois sai. No corredor, com o livro dele apertado contra o peito, ela sente o estômago gelar, do mesmo jeito que gelou no sábado, quando ela viu a marca da mão.", proxima: "c5_24" },
    c5_24: { tipo: "pensamento", texto: "“Custou um pouco.” E agora “se eu faltar, não é nada”. Com o Ren, “nada” nunca é nada.", proxima: "c6_01" },

    /* =================== CENA 6 — A SAÍDA =================== */
    c6_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Saída — Cena 6", sprite: null, texto: "Na saída, a moto está do outro lado da rua. O Kaito sentado nela, sem capacete, esperando. Não olhando para o portão como quem procura. Só esperando, tranquilo, como quem sabe que vai esperar e não se importa.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", sprite: "serena", texto: "No muro, a Serena, de óculos escuros, com as amigas. Ela não vai até a moto. Ela não manca. Ela não pede carona. Ela só fica no muro, olhando para o celular, enquanto as amigas olham para a moto.", proxima: "c6_03" },
    c6_03: { tipo: "pensamento", texto: "Ela não vai mais pedir. Ela vai esperar. Ela disse que sabe esperar. Ela está mostrando que sabe.", proxima: "c6_04" },
    c6_04: { tipo: "narracao", sprite: null, texto: "Ela para na calçada. A Mio e a Hana do lado. O Takeo do outro. O Victor atrás, com o pirulito. O Ryuji empurrando a Relâmpago. O Blake encostado no muro. Todos olhando para ela. Esperando o que ela vai fazer.", proxima: "c6_esc6" },

    // ▶ ESCOLHA 6 — A saída
    c6_esc6: { escolhas: [
      { texto: "A. Atravessar. Subir na moto.", proxima: "c6_6a_1", pontos: { kaito: 3 }, flags: ["Moto_segunda"] },
      { texto: "B. Ir a pé com o Takeo e a Mio. Acenar pro Kaito de longe.", proxima: "c6_6b_1", pontos: { takeo: 2 }, flags: ["A_pe_segunda"] },
      { texto: "C. Chamar todo mundo pra tomar sorvete na esquina. O Kaito inclusive. Todo mundo junto.", proxima: "c6_6c_1", pontos: { kaito: 1, takeo: 1, blake: 1, ryuji: 1, victor: 1 }, flags: ["Sorvete_todos"] }
    ]},
    c6_6a_1: { tipo: "narracao", texto: "Ela atravessa. Ele levanta da moto quando ela chega. Estende o capacete. “Posso?” Clique. Na garupa, ela segura na camisa. No meio do caminho, sem perceber, a mão dela escorrega para a cintura dele. Só uma. Ela não tira. Ele não fala nada. Mas, no sinal vermelho, ele demora meio segundo a mais para arrancar.", proxima: "r_cam" },
    c6_6b_1: { tipo: "narracao", texto: "Ela vira para o Takeo e para a Mio. Os três vão a pé. Ela acena para o Kaito, de longe. Ele acena de volta. Não parece triste. Parece tranquilo. Liga a moto e vai embora pelo outro lado, sem segui-los. Ele confia que ela chega.", proxima: "r_cam" },
    c6_6c_1: { quem: "eu", texto: "Sorvete. Na esquina. Todo mundo. Kaito, você também.", proxima: "c6_6c_2" },
    c6_6c_2: { tipo: "narracao", texto: "Ele levanta da moto, surpreso. Atravessa. E os oito vão juntos até a sorveteria da esquina, falando alto, empurrando um ao outro. O Ryuji pede cinco bolas. O Blake pede uma de flocos e come em silêncio. O Victor imita a moça do caixa. A Mio e a Hana dividem uma de morango. O Takeo come com o braço novo, orgulhoso.", proxima: "c6_6c_3" },
    c6_6c_3: { tipo: "narracao", texto: "E o Kaito senta do lado dela, na calçada, com um sorvete de chocolate derretendo na mão. Não fala nada. Ela também não. Os dois só ficam ali, no meio do barulho dos outros, comendo sorvete. Do lado. Sem pressa.", proxima: "c6_6c_4" },
    c6_6c_4: { tipo: "narracao", texto: "No muro da escola, lá longe, a Serena tira os óculos escuros. Pela primeira vez no dia. E fica olhando para a esquina.", proxima: "r_cam" },

    /* =================== ROTA — SEGUNDA À NOITE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Segunda, 22h", sprite: null, texto: "Dez da noite. O celular vibra. Uma foto. Um papel dobrado em cima de uma mesa. A letra dele, apertada: uma lista. Ela amplia.", proxima: "rk_02" },
    rk_02: { quem: "mensagem", rotulo: "Lista — Kaito", texto: "Coisas que eu vou fazer: 1. Chegar antes. 2. Perguntar “posso?”. 3. Não deixar ninguém mais usar o capacete. 4. Falar alto quando precisar. 5. Perguntar antes de achar. 6. Não subir em palco nenhum.", proxima: "rk_03" },
    rk_03: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu escrevi pra não esquecer. Eu sou bom em esquecer as coisas importantes. O Blake disse que é melhor escrever.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. “Falta um item.”", proxima: "rk_a1", pontos: { kaito: 3 }, flags: ["Falta_item"] },
      { texto: "B. “O número seis é o meu favorito.”", proxima: "rk_b1", pontos: { kaito: 3 }, flags: ["Item_seis"] },
      { texto: "C. “Guarda essa lista. Eu vou cobrar.”", proxima: "rk_c1", pontos: { kaito: 2 }, flags: ["Vou_cobrar"] }
    ]},
    rk_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Falta um item.", proxima: "rk_a2" },
    rk_a2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Qual?", proxima: "rk_a3" },
    rk_a3: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "7. Não pedir namoro antes da hora.", proxima: "rk_a4" },
    rk_a4: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Escrevi. Em letra maior que as outras. Sublinhado.", proxima: "r_fim" },
    rk_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "O número seis é o meu favorito.", proxima: "rk_b2" },
    rk_b2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "O meu também. Eu nunca mais quero ver um microfone na minha frente.", proxima: "r_fim" },
    rk_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Guarda essa lista. Eu vou cobrar.", proxima: "rk_c2" },
    rk_c2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Pode cobrar. Eu colei na parede. Do lado do capacete.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Segunda, 20h", sprite: null, texto: "Às oito, o Takeo manda uma foto. A mão dele, fechada, com o polegar para cima. O braço novo. Embaixo, a mensagem.", proxima: "rt_02" },
    rt_02: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Primeira foto de positivo com o braço novo. Eu queria que fosse pra você. A minha avó queria que fosse pra ela. Eu fiz duas. A dela tem flash.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. Mandar uma foto do próprio polegar pra cima de volta.", proxima: "rt_a1", pontos: { takeo: 3 }, flags: ["Positivo_volta"] },
      { texto: "B. “Takeo. Amanhã você vai a pé comigo de novo?”", proxima: "rt_b1", pontos: { takeo: 4 }, flags: ["Terca_Takeo"] },
      { texto: "C. “A minha é mais bonita que a da sua avó?”", proxima: "rt_c1", pontos: { takeo: 3 }, flags: ["Mais_bonita"] }
    ]},
    rt_a1: { tipo: "narracao", texto: "Ela tira uma foto do próprio polegar para cima. Manda. Ele responde com sete pontos de exclamação seguidos e mais nada. É o Takeo mais animado que ela já viu por escrito.", proxima: "r_fim" },
    rt_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Takeo. Amanhã você vai a pé comigo de novo?", proxima: "rt_b2" },
    rt_b2: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Seis e quarenta. Eu vou até se chover. Até se o Kaito vier. Ele pode ir de moto do lado. Eu não ligo. Eu tenho dois braços agora.", proxima: "r_fim" },
    rt_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "A minha é mais bonita que a da sua avó?", proxima: "rt_c2" },
    rt_c2: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Não posso responder isso. Ela lê as minhas mensagens. Mas sim.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Segunda, 21h", sprite: null, texto: "Às nove, uma mensagem do Blake.", proxima: "rb_02" },
    rb_02: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Ele me pediu pra ajudar a fazer uma lista. De coisas pra não fazer mais. Eu ajudei. Eu coloquei “não ser burro” como item zero. Ele apagou.", proxima: "rb_03" },
    rb_03: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Hoje no banco você sentou do meu lado. Não do lado dele. Eu percebi.", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. “Do seu lado tem sanduíche.”", proxima: "rb_a1", pontos: { blake: 3 }, flags: ["Lado_sanduiche"] },
      { texto: "B. “Do seu lado é tranquilo, Blake.”", proxima: "rb_b1", pontos: { blake: 4 }, flags: ["Lado_tranquilo"] },
      { texto: "C. “Você percebe tudo, né?”", proxima: "rb_c1", pontos: { blake: 3 }, flags: ["Percebe_tudo"] }
    ]},
    rb_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Do seu lado tem sanduíche.", proxima: "rb_a2" },
    rb_a2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Amanhã eu trago dois. Pra garantir o lugar.", proxima: "r_fim" },
    rb_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Do seu lado é tranquilo, Blake.", proxima: "rb_b2" },
    rb_b2: { tipo: "narracao", texto: "Digitando. Para. Muito tempo. Depois uma mensagem só.", proxima: "rb_b3" },
    rb_b3: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu gosto que seja tranquilo pra você.", proxima: "r_fim" },
    rb_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Você percebe tudo, né?", proxima: "rb_c2" },
    rb_c2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Quase tudo. O que eu não percebo, a Mio me conta.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Segunda, 20h30", sprite: null, texto: "Às oito e meia, o Ryuji liga. Ela atende. Ele está sem fôlego.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", texto: "Eu descobri! Eu falei que ia descobrir e descobri! O esquisito de ontem! Eu sei o que é! Mas eu não vou falar! Eu só liguei pra dizer que descobri!", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. “Ryuji. Fala.”", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Fala_Ryuji"] },
      { texto: "B. “Tá bom. Guarda. Me conta quando quiser.”", proxima: "rr_b1", pontos: { ryuji: 4 }, flags: ["Guarda_Ryuji"] },
      { texto: "C. “É sobre o código do onigiri?”", proxima: "rr_c1", pontos: { ryuji: 2 }, flags: ["Codigo_onigiri"] }
    ]},
    rr_a1: { quem: "eu", texto: "Ryuji. Fala.", proxima: "rr_a2" },
    rr_a2: { tipo: "narracao", texto: "Silêncio. Ele respira do outro lado. Três vezes. Ela escuta ele abrir a boca e fechar.", proxima: "rr_a3" },
    rr_a3: { quem: "ryuji", texto: "...Não. Não hoje. Hoje você tem o Kaito voltando, e o sorvete, e eu não vou ser o cara que fala coisa no dia errado. Um dia eu falo. No dia certo. Boa noite!", proxima: "r_fim" },
    rr_b1: { quem: "eu", texto: "Tá bom. Guarda. Me conta quando quiser.", proxima: "rr_b2" },
    rr_b2: { quem: "ryuji", texto: "...Você é muito legal. Isso não ajuda. Isso piora. Boa noite.", proxima: "r_fim" },
    rr_c1: { quem: "eu", texto: "É sobre o código do onigiri?", proxima: "rr_c2" },
    rr_c2: { quem: "ryuji", texto: "NÃO. Quer dizer. Um pouco. Não. Esquece. Boa noite! Eu vou desligar antes de falar!", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Segunda, 21h", sprite: null, texto: "Às nove, o Victor manda uma foto. A oficina, de noite. Três carros dentro. A placa acesa embaixo da lâmpada amarela. E a mãe dele, de macacão, deitada embaixo de um dos carros, com só as pernas aparecendo.", proxima: "rv_02" },
    rv_02: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Ela não sai de baixo do carro desde as quatro. Ela está feliz. Eu nunca vi ela tão feliz trabalhando. Eu estou fazendo o jantar. Eu queimei o arroz. Ela disse que arroz queimado é o melhor.", proxima: "rv_03" },
    rv_03: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Hoje você perguntou da minha mãe no pátio, bem alto. Foi a primeira vez que alguém perguntou da minha mãe na escola. Eu fiquei falando de carro feito bobo.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. “Eu gosto de te ouvir falar de carro.”", proxima: "rv_a1", pontos: { victor: 4 }, flags: ["Ouvir_carro"] },
      { texto: "B. “Fala pra ela sair de baixo do carro e comer o arroz queimado.”", proxima: "rv_b1", pontos: { victor: 3 }, flags: ["Arroz_queimado"] },
      { texto: "C. “Victor. A placa trouxe cliente porque a oficina é boa. Não por milagre.”", proxima: "rv_c1", pontos: { victor: 4 }, flags: ["Oficina_boa"] }
    ]},
    rv_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu gosto de te ouvir falar de carro.", proxima: "rv_a2" },
    rv_a2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Então eu vou estudar carro. Mais. Muito. Eu vou saber tudo. Eu vou ser chato de tanto que eu vou saber.", proxima: "r_fim" },
    rv_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Fala pra ela sair de baixo do carro e comer o arroz queimado.", proxima: "rv_b2" },
    rv_b2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Eu falei. Ela disse “só se a padroeira mandar”. Eu mostrei a sua mensagem. Ela saiu. Você tem poderes.", proxima: "r_fim" },
    rv_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Victor. A placa trouxe cliente porque a oficina é boa. Não por milagre.", proxima: "rv_c2" },
    rv_c2: { tipo: "narracao", texto: "Digitando. Para. Muito tempo.", proxima: "rv_c3" },
    rv_c3: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Eu li isso em voz alta pra ela. Ela saiu de baixo do carro pra chorar. Agora a culpa é sua. Boa noite.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Segunda, 23h", sprite: null, texto: "Onze da noite. Ela abre o livro do Ren na cama. Página quatro. Ela lê devagar. É um livro estranho, sobre um homem que guarda faróis numa ilha.", proxima: "f_02" },
    f_02: { tipo: "pensamento", texto: "Hoje eu não quebrei nada. Nada. O dia inteiro. Nem quando ela falou “parabéns”.", proxima: "f_03" },
    f_03: { tipo: "pensamento", texto: "O Kaito perguntou “posso?”. Ele não empurrou. Ele não pediu nada. Ele escreveu uma lista.", proxima: "f_04" },
    f_04: { tipo: "pensamento", texto: "A Serena está de óculos escuros. Coitada pra escola inteira. Ela não vai mais pedir carona. Ela vai esperar alguém errar.", proxima: "f_05" },
    f_05: { tipo: "pensamento", texto: "E o Ren disse “então eu posso ficar feliz”. E depois disse “se eu faltar, não é nada”.", proxima: "f_06" },
    f_06: { tipo: "narracao", texto: "Ela vira a página. Página cinco. O homem do farol acende a luz, sozinho, no meio da noite, para barcos que ele nunca vai ver.", proxima: "f_07" },
    f_07: { tipo: "pensamento", texto: "Eu vou chegar na página cinquenta. Devagar. Sem pular. E eu espero que, quando eu chegar lá, ele esteja na carteira perto da porta.", proxima: "ep_fim" },

    // Fim do Capítulo 50 (crie a entrada "capitulo50" em dados/capitulos.js).
    ep_fim: { fim: "capitulo50" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 51 (anotações do roteiro)
 *  • Manhã: o Kaito buscou (porteiro rindo; "Posso?"; onigiri do tio com carinha) — ou, se Terca_talvez, ela foi a pé com o
 *    Takeo e o Kaito acompanhou de moto, de longe, só pra garantir que ela chegou.
 *  • SERENA, NOVO JEITO: óculos escuros, sem mancar, cercada das amigas. Rumor: "o Kaito gritou com ela na frente da mãe".
 *    A escola dividida (Mio: "presidente da metade do fingindo"). Pra SN, baixinho: "Parabéns." Ela não pede mais carona.
 *    Ela "sabe esperar": espera alguém errar. Na sorveteria (se escolhido), tirou os óculos pela primeira vez, olhando.
 *    Reina vai descobrir pela avó (amiga da mãe da Serena) o que aconteceu na porta.
 *  • Educação física: o Kaito viu a marca no Ren. "Não foi a gente. Não foi o Taijo." "O tio falou que os caras da porta
 *    sumiram." "Você sabe de alguma coisa?" A SN guardou o segredo (não é meu / outra pessoa / mentiu). O Ren: "Obrigado."
 *  • A FORÇA: hoje ela não quebrou NADA. Percebeu: é a raiva. Quando a raiva vai, a força volta pra dentro.
 *  • Banco: "Não é casal." (os dois ao mesmo tempo). O Ryuji: "código do onigiri".
 *  • CLUBE DE LEITURA: o livro do Ren (um homem que guarda farol numa ilha). "A página cinquenta é a melhor. Não pula pra ela.
 *    Chega nela." / "Ele veio com a verdadeira?" "Veio." "...Bom. Então eu posso ficar feliz."
 *    "SE EU FALTAR ESSA SEMANA, NÃO É NADA." ← gancho.
 *  • Rota Kaito: a lista ("1. Chegar antes. 2. Perguntar 'posso?' ... 6. Não subir em palco nenhum." + 7. se escolhido).
 *  • Rota Ryuji: ele "descobriu" o esquisito, não conta. Rota Victor: a oficina cheia (3 carros).
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 No sinal · 2 Parabéns · 3 Você sabe de alguma coisa? · 4 No banco · 5 No clube de leitura · 6 A saída · Rota
 *
 * FLAGS NOVAS
 *  Nao_responde_junto · Falo_verdade · Apertou_jaqueta · Sem_reacao_parabens · Obrigada_Serena · Ficou_do_lado
 *  Nao_e_meu · Outra_pessoa · Mentiu_Ren · Esqueceu_grade · Avisou_Kaito · Mae_Victor_alto
 *  Pode_ficar_feliz · Depois_de_tudo · Quem_fica_feliz · Moto_segunda · A_pe_segunda · Sorvete_todos
 *  Falta_item · Item_seis · Vou_cobrar · Positivo_volta · Terca_Takeo · Mais_bonita
 *  Lado_sanduiche · Lado_tranquilo · Percebe_tudo · Fala_Ryuji · Guarda_Ryuji · Codigo_onigiri
 *  Ouvir_carro · Arroz_queimado · Oficina_boa
 */