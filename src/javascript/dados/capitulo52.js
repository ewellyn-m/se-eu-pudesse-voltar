/*
 * =====================================================================
 *  CAPÍTULO 52 — Fliperama
 *  Quarta-feira, logo depois do Capítulo 51.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Cenas com todos os meninos em todas as rotas. Bloco de rota à noite.
 *
 *  CONTEXTO (Cap. 51)
 *    • Com o Kaito: "Isso não é namoro." / "Mas também não é nada." (rota Kaito: o beijo na frente do prédio.)
 *    • O Ren faltou na terça. "Se eu faltar essa semana, não é nada." A marca de mão no rosto, no sábado: "Custou um pouco."
 *
 *  O QUE ACONTECE
 *    • Quarta: o Ren falta de novo. A SN pergunta pra professora sozinha: "a família ligou, ele está doente." Ela não acredita.
 *    • No intervalo, ela avisa o Kaito que vai resolver uma coisa sozinha depois da aula. Ele não pergunta o quê.
 *      "Me manda mensagem quando chegar em casa."
 *    • Depois da aula, sozinha, ela vai no FLIPERAMA ABANDONADO (o esconderijo da Midorata, Cap. 31) perguntar pelo Ren.
 *      Os caras do Ren: hostis no começo ("por sua causa..."), depois contam um pedaço: ele não aparece desde sábado; o velho
 *      ("o rei") não gostou de os meninos pararem na loja. Onde encontrar: o prédio abandonado.
 *    • No prédio abandonado, ela encontra o Ren. (Gancho.)
 *    • Bloco de rota à noite (mensagens, depois que ela volta).
 *
 *  REGRAS
 *    • Assunto de gangue não entra na escola: o fliperama e o prédio são depois da aula, fora.
 *    • Sem xadrez no Ren. O Ren não manda mensagem. Fala pouco. Sem narrar roupa. Sem flashback.
 *    • Não explicar o "rei" além do que o Ren já deixou escapar.
 *
 *  PERSONAGENS
 *    Mio, Hana, Reina, Kaito, Takeo, Victor, Blake, Ryuji, Ren, Serena.
 *    Sem sprite / rótulo: Victor, Ren, Professora, Menino de boné (Midorata), Menino da cicatriz (Midorata), Outros da Midorata.
 *
 *  CENÁRIOS
 *    apartamento (entrada do prédio) · saida-colegio · sala-de-aula · patio-fundos · beco-mercado (rua, fliperama, prédio
 *    abandonado) · quarto-sn
 *
 *  Crie a entrada "capitulo52" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo52", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — QUARTA DE MANHÃ =================== */
    c1_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Quarta, 6h40 — Cena 1", sprite: null, texto: "Quarta-feira. Ela acorda com o livro do Ren aberto em cima do peito, na página vinte e um, e o celular vibrando do lado.", proxima: "c1_02" },
    c1_02: { caminhos: [
      { flag: "Beijo_terca", proxima: "c1_02k" },
      { flag: "Chamou_Kaito", proxima: "c1_02k" }
    ], proxima: "c1_02d" },
    c1_02k: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Bom dia. Eu não dormi. Eu fiquei lembrando. Isso ainda não é namoro. Eu estou embaixo.", proxima: "c1_03" },
    c1_02d: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Bom dia. Eu estou embaixo. O tio mandou perguntar se você quer lámen de novo hoje. Eu disse que eu pergunto. Estou perguntando.", proxima: "c1_03" },
    c1_03: { roupa: "escolar", tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", sprite: "kaito", texto: "Na calçada, ele está encostado na moto. O cabelo não está penteado hoje. Está bagunçado de propósito, ela percebe. Ele bagunçou para ela não falar nada.", proxima: "c1_04" },
    c1_04: { quem: "eu", texto: "Você bagunçou de propósito.", proxima: "c1_05" },
    c1_05: { quem: "kaito", texto: "...Não tem jeito de ganhar de você.", proxima: "c1_06" },
    c1_06: { cenario: "rua", tipo: "narracao", texto: "Ela ri. Pega o capacete. Ele fecha a fivela sem perguntar. Os dedos dele demoram. Ela deixa demorar. Na garupa, os dois braços na cintura dele, a bochecha encostada nas costas. No primeiro sinal, a mão dele em cima das dela.", proxima: "c1_07" },
    c1_07: { tipo: "pensamento", texto: "Hoje ele vai estar lá. Na carteira perto da porta. Ele tem que estar.", proxima: "c2_01" },

    /* =================== CENA 2 — A CARTEIRA VAZIA =================== */
    c2_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Primeira aula — Cena 2", sprite: null, texto: "A carteira perto da porta está vazia.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", texto: "Ela fica parada na porta da sala um segundo a mais do que devia. A Mio olha para ela. Depois para a carteira. A Mio não fala nada, o que é raro.", proxima: "c2_03" },
    c2_03: { tipo: "narracao", sprite: null, texto: "Antes da aula começar, ela vai até a mesa da professora. Sozinha. Fala baixo, para a sala não ouvir.", proxima: "c2_04" },
    c2_04: { quem: "eu", texto: "Professora. Desculpa. O Ren. Ele faltou ontem e hoje. A senhora sabe se ele está bem?", proxima: "c2_05" },
    c2_05: { tipo: "narracao", texto: "A professora olha para ela. Depois para a carteira vazia. Ela tem cara de quem não esperava que alguém perguntasse do Ren. Nunca.", proxima: "c2_06" },
    c2_06: { quem: "desconhecido", rotulo: "Professora", texto: "A família ligou na secretaria. Disseram que ele está doente. Uma gripe forte. Deve voltar semana que vem.", proxima: "c2_07" },
    c2_07: { quem: "desconhecido", rotulo: "Professora", texto: "...Que bom que você perguntou. Ninguém pergunta dele.", proxima: "c2_08" },
    c2_08: { tipo: "narracao", sprite: "takeo:escolar", texto: "Quando ela volta para a carteira, o Takeo está olhando para ela. Ele ouviu. Ele inclina para frente, perto do ombro dela, e a voz dele não é a voz de sempre.", proxima: "c2_09" },
    c2_09: { quem: "takeo", sprite: "takeo:escolar", texto: "Por que você está perguntando do Ren? Ele é o Ren. Se ele sumiu, é um problema a menos. Pra todo mundo.", proxima: "c2_09b" },
    c2_09b: { tipo: "narracao", texto: "Ele não fala com raiva. Fala como quem fala uma coisa óbvia. Os meninos da gangue do Kaito não gostam do Ren. Nenhum deles. Nem o Takeo, que gosta de todo mundo.", proxima: "c2_09c" },
    c2_09c: { tipo: "pensamento", texto: "Se eu contar o que eu sei, ninguém aqui vai entender. Vão achar que eu estou do lado dele. Contra eles.", proxima: "c2_09d" },
    c2_09d: { quem: "eu", texto: "Curiosidade, Takeo. Só isso.", proxima: "c2_10" },
    c2_10: { tipo: "narracao", sprite: null, texto: "O Takeo não acredita. Mas não pergunta mais. Ele volta para o caderno.", proxima: "c2_11" },
    c2_11: { tipo: "pensamento", texto: "“A família ligou.” Que família? O velho? O dono da mão aberta?", proxima: "c2_12" },
    c2_12: { tipo: "pensamento", texto: "“Custou um pouco.” E agora ele não aparece. E a família diz que é gripe.", proxima: "c2_13" },
    c2_13: { tipo: "narracao", texto: "A mão dela fecha em cima do caderno. A capa amassa. Ela abre a mão rápido. A capa fica com a marca dos dedos. Ela coloca o livro do Ren em cima para esconder.", proxima: "c2_14" },
    c2_14: { tipo: "pensamento", texto: "Não. Não é raiva. É medo. Mas a força não sabe a diferença.", proxima: "c2_15" },
    c2_15: { tipo: "narracao", sprite: "mio", texto: "A Mio passa um bilhete por baixo da carteira. Letra apressada.", proxima: "c2_16" },
    c2_16: { quem: "mensagem", rotulo: "Bilhete da Mio", texto: "Você está com a cara de quem vai fazer uma coisa perigosa. Eu conheço essa cara. Me fala o que é ou eu conto pra Hana e ela faz uma planilha.", proxima: "c2_esc1" },

    // ▶ ESCOLHA 1 — O bilhete
    c2_esc1: { escolhas: [
      { texto: "A. Escrever de volta: “Não é perigoso. Eu só vou perguntar uma coisa pra umas pessoas.”", proxima: "c2_1a_1", pontos: {}, flags: ["So_perguntar"] },
      { texto: "B. Escrever: “Se eu não mandar mensagem até as sete, liga pra minha mãe.”", proxima: "c2_1b_1", pontos: {}, flags: ["Liga_mae"] },
      { texto: "C. Não responder. Guardar o bilhete no bolso.", proxima: "c2_1c_1", pontos: {}, flags: ["Guardou_bilhete"] }
    ]},
    c2_1a_1: { quem: "mensagem", rotulo: "Bilhete da SN", texto: "Não é perigoso. Eu só vou perguntar uma coisa pra umas pessoas.", proxima: "c2_1a_2" },
    c2_1a_2: { quem: "mensagem", rotulo: "Bilhete da Mio", texto: "“Umas pessoas” é a frase mais perigosa da língua portuguesa. Tá. Eu confio. Eu confio desconfiando.", proxima: "c3_01" },
    c2_1b_1: { quem: "mensagem", rotulo: "Bilhete da SN", texto: "Se eu não mandar mensagem até as sete, liga pra minha mãe.", proxima: "c2_1b_2" },
    c2_1b_2: { tipo: "narracao", texto: "A Mio lê. Fica branca. Escreve alguma coisa, risca, escreve de novo. Devolve.", proxima: "c2_1b_3" },
    c2_1b_3: { quem: "mensagem", rotulo: "Bilhete da Mio", texto: "Seis e meia. Não sete. Seis e meia eu ligo. Pra sua mãe e pro exército.", proxima: "c3_01" },
    c2_1c_1: { tipo: "narracao", texto: "Ela não responde. Guarda o bilhete no bolso. A Mio fica olhando para ela a aula inteira, com a cara de quem está fazendo uma lista de todos os lugares perigosos da cidade.", proxima: "c3_01" },

    /* =================== CENA 3 — O INTERVALO =================== */
    c3_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Intervalo — Cena 3", sprite: null, texto: "No intervalo, o banco. O Blake com dois sanduíches. O Ryuji com coxinha, mais quieto que o normal. O Victor no braço do banco, com o pirulito. E o Kaito no meio, com o espaço do lado vazio, esperando.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "Ela senta do lado dele. O joelho encosta. Ele percebe na hora que tem alguma coisa diferente. Ela não está rindo.", proxima: "c3_03" },
    c3_03: { quem: "kaito", sprite: "kaito", texto: "O que foi?", proxima: "c3_04" },
    c3_04: { tipo: "pensamento", texto: "Item cinco. Perguntar antes de achar. Ele está perguntando. E eu não posso responder. Se ele souber que é o Ren, ele não vai deixar. Nenhum deles vai deixar.", proxima: "c3_05" },
    c3_05: { quem: "eu", texto: "Depois da aula, eu vou resolver uma coisa. Sozinha. Hoje eu não vou na moto.", proxima: "c3_06" },
    c3_06: { tipo: "narracao", texto: "Ele fica quieto. Ela vê a pergunta subindo na garganta dele. “O quê?” “Onde?” “Com quem?” Ela vê ele engolir as três.", proxima: "c3_07" },
    c3_07: { quem: "kaito", texto: "...Tá.", proxima: "c3_08" },
    c3_08: { quem: "eu", texto: "Você não vai perguntar o quê?", proxima: "c3_09" },
    c3_09: { quem: "kaito", texto: "Eu quero perguntar. Muito. Mas você falou “sozinha” do jeito que você falou “nada de namoro”. Eu aprendi esse jeito.", proxima: "c3_10" },
    c3_10: { quem: "kaito", texto: "Me manda mensagem quando chegar em casa. Só isso. Uma palavra. “Cheguei.” Eu não pergunto mais nada.", proxima: "c3_esc2" },

    // ▶ ESCOLHA 2 — Sozinha
    c3_esc2: { escolhas: [
      { texto: "A. “Eu mando. Prometo.”", proxima: "c3_2a_1", pontos: { kaito: 2 }, flags: ["Promete_cheguei"] },
      { texto: "B. “Não é perigoso, Kaito.” E sentir a mentira na boca.", proxima: "c3_2b_1", pontos: { kaito: 1 }, flags: ["Nao_e_perigoso"] },
      { texto: "C. “Depois eu te conto. Tudo. Quando for meu pra contar.”", proxima: "c3_2c_1", pontos: { kaito: 3 }, flags: ["Depois_conto"] }
    ]},
    c3_2a_1: { quem: "eu", texto: "Eu mando. Prometo.", proxima: "c3_2a_2" },
    c3_2a_2: { quem: "kaito", texto: "Promessa é promessa. Eu estou tentando parar de quebrar as minhas. Não quebra a sua.", proxima: "c3_11" },
    c3_2b_1: { quem: "eu", texto: "Não é perigoso, Kaito.", proxima: "c3_2b_2" },
    c3_2b_2: { tipo: "narracao", texto: "Ele olha para ela. Ele não acredita. Ela vê que ele não acredita. E ele faz que sim mesmo assim, devagar, porque prometeu não perguntar.", proxima: "c3_2b_3" },
    c3_2b_3: { quem: "kaito", texto: "Tá. Não é perigoso. Então manda mensagem quando chegar em casa da coisa que não é perigosa.", proxima: "c3_11" },
    c3_2c_1: { quem: "eu", texto: "Depois eu te conto. Tudo. Quando for meu pra contar.", proxima: "c3_2c_2" },
    c3_2c_2: { tipo: "narracao", texto: "Ele lembra. Ela vê ele lembrar. A corrida da educação física. “Se um dia for seu, você me conta.” Ele faz que sim.", proxima: "c3_2c_3" },
    c3_2c_3: { quem: "kaito", texto: "Eu espero. Eu sou bom nisso agora.", proxima: "c3_11" },

    // (todas as opções continuam aqui)
    c3_11: { tipo: "narracao", sprite: null, texto: "Do outro lado do banco, o Blake está olhando para ela. Ele não ouviu a conversa toda. Mas ouviu “sozinha”. Ele olha para o Kaito. O Kaito balança a cabeça, pequeno: “deixa”. O Blake não deixa. Ele só não fala nada.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji estende uma coxinha para ela. Sem gritar nada. Sem exclamação. Só estende.", proxima: "c3_13" },
    c3_13: { quem: "ryuji", texto: "Coxinha. Cura tudo. Até isso que você está fazendo com a cara.", proxima: "c3_14" },
    c3_14: { tipo: "narracao", sprite: null, texto: "Ela pega. Come. Não cura. Mas ajuda.", proxima: "c3_15" },
    c3_15: { tipo: "narracao", sprite: "serena", texto: "Na grade, a Serena. Sozinha hoje. As amigas estão do outro lado do pátio, num grupo sem ela, cochichando, olhando para o celular. A Mio trabalhou bem ontem. A Serena está olhando para o banco, fria, sem máscara, do mesmo jeito de ontem.", proxima: "c3_16" },
    c3_16: { tipo: "pensamento", texto: "Hoje não, Serena. Hoje eu tenho outra coisa pra resolver.", proxima: "c4_01" },

    /* =================== CENA 4 — O FLIPERAMA =================== */
    c4_01: { tipo: "narracao", cenario: "beco-mercado", transicao: "tempo", legenda: "Quarta, 14h — Cena 4", sprite: null, texto: "Depois da aula, ela vai a pé. Sozinha. Sem passar em casa. O caminho ela lembra. Faz semanas, mas ela lembra: a rua da padaria, a avenida, a viela atrás do posto, e o galpão no fim, com a porta de ferro meio enferrujada.", proxima: "c4_02" },
    c4_02: { cenario: "frente-fliperama", tipo: "narracao", texto: "O fliperama abandonado. Na fachada, o letreiro velho, “FLIPER MUNDO”, com metade das letras faltando. Na porta, pichado em verde, o desenho que ela já viu antes. O da Midorata.", proxima: "c4_03" },
    c4_03: { tipo: "pensamento", texto: "A última vez que eu vim aqui, eu vim com raiva. Eu falei “seja homem e fala direto comigo”. E ele falou “fora”, pros caras dele. Ele me protegeu dos próprios caras dele.", proxima: "c4_04" },
    c4_04: { tipo: "pensamento", texto: "Hoje eu não vim com raiva. Eu vim com medo. É pior. Eu não sei o que a força faz com medo.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "Ela respira. E empurra a porta de ferro. Ela range. Abre.", proxima: "c4_06" },
    c4_06: { cenario: "fliperama-midorata", tipo: "narracao", texto: "Lá dentro, escuro, só a luz que entra pelas janelas altas, cheias de poeira. As máquinas de fliperama velhas, apagadas, enfileiradas como túmulos. Algumas ainda com a tela rachada. Um sofá rasgado no meio. Uma mesa de sinuca sem as bolas.", proxima: "c4_07" },
    c4_07: { sprite: "midorata", tipo: "narracao", texto: "E cinco meninos. Três no sofá, um encostado numa máquina, um sentado em cima da mesa de sinuca. Eles param de falar quando a porta abre. Viram. E veem ela.", proxima: "c4_08" },
    c4_08: { quem: "midorata", rotulo: "Menino de boné", texto: "...Ah, não. De novo, não.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "O de boné. Ela lembra dele. Foi ele que ficou mais perto dela da outra vez, que falou mais. Ele levanta do sofá. Os outros levantam também, devagar.", proxima: "c4_10" },
    c4_10: { quem: "midorata", rotulo: "Menino de boné", texto: "Você. A menina da loja. Você tem coragem de aparecer aqui. Depois do que você fez.", proxima: "c4_11" },
    c4_11: { quem: "eu", texto: "O que eu fiz?", proxima: "c4_12" },
    c4_12: { quem: "midorata", rotulo: "Menino da cicatriz", texto: "Por sua causa o Ren mandou a gente parar na loja do velho do lámen. Sexta de manhã. Do nada. “Ninguém vai mais lá.” Assim. Sem explicar.", proxima: "c4_13" },
    c4_13: { tipo: "narracao", texto: "O da cicatriz. Encostado na máquina de fliperama, com uma cicatriz atravessando a sobrancelha. Ele fala devagar, mais calmo que o de boné, mas com os olhos mais duros.", proxima: "c4_14" },
    c4_14: { quem: "midorata", rotulo: "Menino da cicatriz", texto: "A gente parou. Ele é o Ren. Ninguém discute com o Ren. Mas aí quem não gostou foi o velho dele.", proxima: "c4_15" },
    c4_15: { tipo: "pensamento", texto: "O velho. O rei.", proxima: "c4_16" },
    c4_16: { quem: "eu", texto: "Cadê ele? O Ren.", proxima: "c4_17" },
    c4_17: { tipo: "narracao", texto: "Silêncio. Os cinco se olham. O de boné ri, um riso curto, sem graça nenhuma.", proxima: "c4_18" },
    c4_18: { quem: "midorata", rotulo: "Menino de boné", texto: "E por que a gente ia te falar? Você é da gangue do Kaito. Todo mundo sabe. Você anda na garupa dele. Você é dele.", proxima: "c4_19" },
    c4_19: { quem: "eu", texto: "Eu não sou de ninguém.", proxima: "c4_20" },
    c4_20: { tipo: "narracao", texto: "Ela fala sem levantar a voz. O de boné dá um passo na direção dela. Os outros também. Ela não recua.", proxima: "c4_21" },
    c4_21: { tipo: "pensamento", texto: "Cinco. Eu poderia. Eu sei que eu poderia. Eu poderia derrubar a máquina de fliperama em cima dos cinco.", proxima: "c4_22" },
    c4_22: { tipo: "pensamento", texto: "Mas eu não vim brigar. Eu vim perguntar. E se eu bater nos caras do Ren, eu estou fazendo exatamente o que ele parou de fazer pra mim.", proxima: "c4_esc3" },

    // ▶ ESCOLHA 3 — No fliperama
    c4_esc3: { escolhas: [
      { texto: "A. Não recuar. Falar a verdade: “Eu vim porque ele está faltando. E ninguém aqui veio perguntar por ele também.”", proxima: "c4_3a_1", pontos: {}, flags: ["Ninguem_perguntou"] },
      { texto: "B. Colocar a mão na máquina de fliperama do lado. E apertar. Só um pouco. Só pra eles verem.", proxima: "c4_3b_1", pontos: {}, flags: ["Apertou_maquina"] },
      { texto: "C. “Ele levou uma mão na cara pra vocês não precisarem mais ficar sentados na porta de um senhor. Vocês sabem disso?”", proxima: "c4_3c_1", pontos: {}, flags: ["Mao_na_cara"] }
    ]},
    c4_3a_1: { quem: "eu", texto: "Eu vim porque ele está faltando. Dois dias. Ele nunca falta. E ninguém aqui veio perguntar por ele também, né? Vocês estão aqui sentados, jogando sinuca sem bola.", proxima: "c4_3a_2" },
    c4_3a_2: { tipo: "narracao", texto: "O de boné abre a boca para responder. Fecha. O da cicatriz olha para o chão. Um dos três do sofá, o menor, mexe no zíper da jaqueta, sem olhar para ninguém.", proxima: "c4_23" },
    c4_3b_1: { tipo: "narracao", texto: "Ela coloca a mão na lateral da máquina de fliperama do lado dela. Uma máquina velha, de metal, pesada. E aperta. Só um pouco. Controlado. Ela decide quanto.", proxima: "c4_3b_2" },
    c4_3b_2: { tipo: "narracao", efeito: "tremor", texto: "O metal afunda embaixo da mão dela. Uma marca funda, do formato dos cinco dedos, na lateral da máquina. O barulho de lata amassando enche o galpão inteiro.", proxima: "c4_3b_3" },
    c4_3b_3: { tipo: "narracao", texto: "Os cinco param. O de boné dá um passo para trás. O da cicatriz olha para a marca na máquina, depois para a mão dela, depois para o rosto dela, e alguma coisa muda na cara dele. Não é medo. É entendimento.", proxima: "c4_3b_4" },
    c4_3b_4: { quem: "eu", texto: "Eu não vim brigar. Eu vim perguntar. Eu só queria que vocês soubessem que eu poderia ter vindo brigar.", proxima: "c4_23" },
    c4_3c_1: { quem: "eu", texto: "Ele levou uma mão na cara pra vocês não precisarem mais ficar sentados na porta de um senhor de sessenta anos, assustando cliente. Vocês sabem disso? Vocês viram a cara dele no sábado?", proxima: "c4_3c_2" },
    c4_3c_2: { tipo: "narracao", texto: "Silêncio. Pesado. O menor, no sofá, levanta os olhos, rápido. O de boné não responde. O da cicatriz fecha os olhos um segundo.", proxima: "c4_3c_3" },
    c4_3c_3: { quem: "midorata", rotulo: "Menino da cicatriz", texto: "...A gente viu.", proxima: "c4_23" },

    // (todas as opções continuam aqui)
    c4_23: { tipo: "narracao", texto: "Silêncio. Um pombo bate as asas lá em cima, nas vigas do galpão. O de boné senta de volta no sofá, devagar, como quem desiste de uma briga que nem começou.", proxima: "c4_24" },
    c4_24: { quem: "midorata", rotulo: "Menino da cicatriz", texto: "Ele não aparece aqui desde sábado à noite. Ele veio no sábado, com a cara daquele jeito. Pegou umas coisas dele que ficavam ali no canto. Uma mochila. E foi embora. Não falou nada.", proxima: "c4_25" },
    c4_25: { quem: "midorata", rotulo: "Menino de boné", texto: "Ele não está em casa. A gente passou lá ontem. O carro do velho estava na porta. A gente não entrou. Ninguém entra na casa do velho.", proxima: "c4_26" },
    c4_26: { tipo: "pensamento", texto: "Uma mochila. As coisas dele. Ele pegou e foi. Ele não está em casa.", proxima: "c4_27" },
    c4_27: { tipo: "pensamento", texto: "Ele não pode ir pra casa.", proxima: "c4_28" },
    c4_28: { tipo: "narracao", texto: "O estômago dela gela. A mão fecha do lado do corpo. Ela abre, devagar, dedo por dedo.", proxima: "c4_29" },
    c4_29: { quem: "eu", texto: "Onde eu encontro ele?", proxima: "c4_30" },
    c4_30: { tipo: "narracao", texto: "Os cinco se olham de novo. Ninguém fala. E aí o menor, o do sofá, o que mexe no zíper, fala. Baixinho. Sem olhar para os outros.", proxima: "c4_31" },
    c4_31: { quem: "midorata", rotulo: "Menino do zíper", texto: "O prédio abandonado. Da rua de trás da estação. Ele vai lá quando não quer ver ninguém. Ele sobe até o último andar. A gente não sobe lá. Ele não deixa.", proxima: "c4_32" },
    c4_32: { quem: "midorata", rotulo: "Menino de boné", texto: "Cala a boca, moleque.", proxima: "c4_33" },
    c4_33: { quem: "midorata", rotulo: "Menino do zíper", texto: "Ela veio perguntar dele. Ninguém mais veio. Nem a gente foi.", proxima: "c4_34" },
    c4_34: { tipo: "narracao", texto: "O de boné não responde. O menor volta a mexer no zíper. O da cicatriz olha para ela.", proxima: "c4_35" },
    c4_35: { quem: "midorata", rotulo: "Menino da cicatriz", texto: "Vai. Se ele estiver lá, fala que a gente... deixa. Não fala nada. Só vai.", proxima: "c4_36" },
    c4_36: { tipo: "pensamento", texto: "O prédio abandonado. Eu já estive lá. De noite. Foi lá que ele me contou a história do menino de óculos. Por partes. Foi lá que eu falei que ele escolhe quem ele quer ser.", proxima: "c4_37" },
    c4_37: { tipo: "narracao", texto: "Ela vira para a porta. E, antes de sair, olha para o menor, o do zíper.", proxima: "c4_38" },
    c4_38: { quem: "eu", texto: "Obrigada.", proxima: "c4_39" },
    c4_39: { cenario: "frente-fliperama", sprite: null, tipo: "narracao", texto: "Ele faz que sim, sem levantar os olhos. Ela sai. A porta de ferro range atrás dela.", proxima: "c5_01" },

    /* =================== CENA 5 — O PRÉDIO ABANDONADO =================== */
    c5_01: { tipo: "narracao", cenario: "beco-mercado", transicao: "tempo", legenda: "Quarta, 15h20 — Cena 5", sprite: null, texto: "Ela anda rápido. Quase corre. A avenida, a estação, a rua de trás. O prédio está lá, do mesmo jeito: seis andares de concreto cinza, sem janela, sem porta, com as escadas por dentro aparecendo pelos buracos, como as costelas de um bicho muito grande.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", texto: "De dia é diferente de noite. De dia, dá para ver o mato crescendo nas lajes, as pichações antigas, os sacos de lixo no térreo. E, no chão da entrada, marcas de tênis na poeira. Recentes. Subindo.", proxima: "c5_03" },
    c5_03: { tipo: "narracao", texto: "Ela sobe. Primeiro andar. Segundo. A escada sem corrimão. O vento passando pelos buracos e assobiando. Terceiro. Quarto. Quinto. Ela não para.", proxima: "c5_04" },
    c5_04: { tipo: "pensamento", texto: "Se ele não estiver aqui, eu não sei onde mais procurar. Se ele não estiver aqui...", proxima: "c5_05" },
    c5_05: { cenario: "predio-abandonado-topo", tipo: "narracao", texto: "Sexto andar. O último. A laje aberta, sem paredes de um lado, com a cidade inteira lá embaixo, os prédios, a estação, os trilhos brilhando no sol da tarde.", proxima: "c5_06" },
    c5_06: { tipo: "narracao", texto: "No canto, encostada na única parede que sobrou inteira, uma mochila preta. Um cobertor velho, dobrado. Uma garrafa de água pela metade. Um saco de pão vazio. E um livro, de capa mole, aberto, virado para baixo no chão.", proxima: "c5_07" },
    c5_07: { tipo: "narracao", texto: "E ele.", proxima: "c5_08" },
    c5_08: { sprite: "ren", tipo: "narracao", texto: "Sentado na beira da laje, com as pernas para fora, no vazio, seis andares acima do chão. De costas para ela. Com as mãos apoiadas no concreto dos dois lados. Olhando a estação.", proxima: "c5_09" },
    c5_09: { tipo: "narracao", efeito: "eco", texto: "O coração dela para.", proxima: "c5_10" },
    c5_10: { tipo: "pensamento", texto: "Não. Não, não, não. Calma. Ele está sentado. Ele só está sentado. Ele sempre senta assim. Ele sentava assim da outra vez, de noite. Calma.", proxima: "c5_11" },
    c5_11: { quem: "eu", texto: "...Ren.", proxima: "c5_12" },
    c5_12: { tipo: "narracao", texto: "Ele não se assusta. Ele não vira rápido. Ele vira a cabeça devagar, por cima do ombro, como se já soubesse que alguém ia aparecer. Como se estivesse esperando.", proxima: "c5_13" },
    c5_13: { tipo: "narracao", texto: "O rosto dele. A marca da mão de sábado sumiu. Mas tem outra. Mais nova. Um roxo no olho esquerdo, inchado, fechando metade do olho. O canto da boca abriu de novo. E, quando ele vira o corpo para ela, ela vê ele fazer uma careta, rápida, e levar a mão às costelas, do lado direito.", proxima: "c5_14" },
    c5_14: { quem: "ren", texto: "...Eu falei que não era nada.", proxima: "c5_15" },
    c5_15: { tipo: "narracao", texto: "A voz dele sai rouca, como quem não fala com ninguém faz dias. Ele tenta sorrir. O sorriso pequeno, sem jeito. Dói. Ele para.", proxima: "c5_16" },
    c5_16: { tipo: "pensamento", texto: "Ele está dormindo aqui. Desde sábado. Num cobertor, no último andar de um prédio sem parede. Com o olho roxo e as costelas assim.", proxima: "c5_17" },
    c5_17: { tipo: "pensamento", texto: "“Custou um pouco.” “Se eu faltar, não é nada.” Ele estava mentindo pra mim desde sábado. Pra eu não me preocupar.", proxima: "c5_18" },
    c5_18: { tipo: "narracao", texto: "Ela sente a força subindo. Não pelo braço. Pelo peito inteiro. Uma raiva enorme, quente, que não é dele, que é de quem fez isso com ele. Do dono da mão. Do velho. Do rei.", proxima: "c5_19" },
    c5_19: { tipo: "narracao", efeito: "tremor", texto: "Do lado dela, um pedaço de ferro saindo da parede, um vergalhão velho, enferrujado. A mão dela fecha nele sem ela perceber. E o ferro dobra. Devagar. Como se fosse arame.", proxima: "c5_20" },
    c5_20: { tipo: "narracao", texto: "O Ren vê. O olho bom dele vai do ferro dobrado para a mão dela, e da mão para o rosto dela. Ele não se assusta. Ele nunca se assusta com ela.", proxima: "c5_21" },
    c5_21: { quem: "ren", texto: "Solta. Não é com o ferro que você está brava.", proxima: "c5_22" },
    c5_22: { tipo: "narracao", texto: "Ela solta. O ferro fica dobrado para o lado, torto, como um dedo apontando para a estação.", proxima: "c5_23" },
    c5_23: { quem: "ren", texto: "Quem te falou que eu estava aqui?", proxima: "c5_24" },
    c5_24: { quem: "eu", texto: "Eu fui no fliperama.", proxima: "c5_25" },
    c5_25: { tipo: "narracao", texto: "Ele fica parado. O olho bom arregalado, o roxo não deixando o outro abrir. Pela primeira vez desde que ela conhece ele, de verdade, o Ren parece surpreso.", proxima: "c5_26" },
    c5_26: { quem: "ren", texto: "...Você foi no fliperama. Sozinha. Atrás de mim.", proxima: "c5_27" },
    c5_27: { quem: "eu", texto: "Ninguém mais veio. Então eu vim.", proxima: "c5_28" },
    c5_28: { tipo: "narracao", texto: "É a frase dele. A de atrás do depósito. “Porque ninguém mais veio.” Ele reconhece. Ela vê ele reconhecer. Ele vira o rosto de volta para a estação, rápido, e ela vê o ombro dele tremer uma vez.", proxima: "c5_esc4" },

    // ▶ ESCOLHA 4 — No último andar
    c5_esc4: { escolhas: [
      { texto: "A. Ir até a beira da laje e sentar do lado dele. Com as pernas pra dentro.", proxima: "c5_4a_1", pontos: {}, flags: ["Sentou_laje"] },
      { texto: "B. “Sai da beira, Ren. Por favor. Senta aqui dentro, perto da parede.”", proxima: "c5_4b_1", pontos: {}, flags: ["Sai_da_beira"] },
      { texto: "C. Pegar a garrafa de água e o cobertor e ir até ele. Sem falar nada.", proxima: "c5_4c_1", pontos: {}, flags: ["Cobertor_Ren"] }
    ]},
    c5_4a_1: { tipo: "narracao", texto: "Ela vai até a beira. Devagar. Senta do lado dele, a um braço de distância, com as pernas para dentro, dobradas, as costas virada para o vazio. Ela não olha para baixo. Ela olha para ele.", proxima: "c5_4a_2" },
    c5_4a_2: { tipo: "narracao", texto: "Ele não fala nada. Mas, depois de um tempo, ele puxa as pernas para dentro também. Uma. Depois a outra. Com uma careta, por causa das costelas. E fica sentado igual a ela, de costas para a cidade.", proxima: "c5_29" },
    c5_4b_1: { quem: "eu", texto: "Sai da beira, Ren. Por favor. Senta aqui dentro. Perto da parede.", proxima: "c5_4b_2" },
    c5_4b_2: { tipo: "narracao", texto: "Ele olha para ela. Para o vazio. Para ela de novo. “Por favor.” A palavra dele, de sábado, devolvida.", proxima: "c5_4b_3" },
    c5_4b_3: { tipo: "narracao", texto: "Ele levanta. Devagar, com a mão nas costelas, com uma careta que ele não consegue esconder. Anda até a parede. Senta no cobertor dobrado, encostado na mochila. Ela solta o ar que não sabia que estava segurando.", proxima: "c5_29" },
    c5_4c_1: { tipo: "narracao", texto: "Ela pega a garrafa de água e o cobertor do canto. Vai até ele. Coloca o cobertor nos ombros dele, por trás, sem falar nada. Ele fica parado. Ela coloca a garrafa do lado da mão dele.", proxima: "c5_4c_2" },
    c5_4c_2: { tipo: "narracao", texto: "Ele olha para a garrafa. Para o cobertor nos ombros. E segura a ponta do cobertor com uma das mãos, fechando na frente do peito, como um menino que acordou com frio.", proxima: "c5_29" },

    // (todas as opções continuam aqui)
    c5_29: { quem: "eu", texto: "Foi ele? O seu pai?", proxima: "c5_30" },
    c5_30: { tipo: "narracao", texto: "Ele não responde. Ele olha para as mãos. Os nós dos dedos estão inteiros. Ele não bateu em ninguém. Ele só apanhou.", proxima: "c5_31" },
    c5_31: { quem: "ren", texto: "No sábado, foi aviso. No domingo, ele descobriu que eu fui na pracinha em vez de ir onde ele mandou. Segunda, ele descobriu que os meninos continuaram sem ir na loja. Porque eu mandei.", proxima: "c5_32" },
    c5_32: { quem: "ren", texto: "Aí não foi aviso.", proxima: "c5_33" },
    c5_33: { tipo: "narracao", texto: "Ele fala devagar, sem emoção nenhuma na voz, como quem lê a previsão do tempo. E é isso que faz o estômago dela virar.", proxima: "c5_34" },
    c5_34: { quem: "ren", texto: "Eu não volto lá. Não enquanto ele estiver com raiva. Ele esquece em uma semana. Ele sempre esquece. Depois ele finge que não aconteceu. Eu finjo também. Funciona assim.", proxima: "c5_35" },
    c5_35: { quem: "eu", texto: "Funciona assim?", proxima: "c5_36" },
    c5_36: { quem: "ren", texto: "Sempre funcionou.", proxima: "c5_37" },
    c5_37: { tipo: "narracao", texto: "Ela olha para ele. O olho roxo. A careta nas costelas. O cobertor velho. O saco de pão vazio. E pensa no menino de óculos gigantes. No menino que apanhava na escola e em casa. Ele não está mais de óculos. Mas ele ainda apanha em casa.", proxima: "c5_38" },
    c5_38: { tipo: "pensamento", texto: "“O sonho do oprimido é ser o opressor.” Ele tentou. Ele virou o Ren das fotos, das ameaças, da loja. E mesmo assim. Mesmo assim, ele ainda apanha em casa.", proxima: "c5_39" },
    c5_39: { tipo: "pensamento", texto: "E dessa vez ele apanhou por ter escolhido ser outra pessoa. Por minha causa. Porque eu pedi.", proxima: "c5_40" },
    c5_40: { quem: "ren", texto: "Não faz essa cara.", proxima: "c5_41" },
    c5_41: { quem: "eu", texto: "Que cara?", proxima: "c5_42" },
    c5_42: { quem: "ren", texto: "Essa. De culpa. Não é culpa sua. Eu escolhi. Você só perguntou. Eu podia ter dito não. Eu não quis dizer não.", proxima: "c5_43" },
    c5_43: { quem: "ren", texto: "O tio do lámen está cantando. Eu passei lá na frente segunda. Ele estava cantando. Muito mal.", proxima: "c5_44" },
    c5_44: { tipo: "narracao", texto: "E ele sorri. Com o canto da boca aberto, sangrando um pouco. Com o olho roxo. O sorriso de menino que nunca treinou. E não para de sorrir mesmo doendo.", proxima: "c5_45" },
    c5_45: { tipo: "pensamento", texto: "Ele está dormindo num prédio sem parede, com as costelas machucadas, e está sorrindo porque um senhor canta mal.", proxima: "c5_46" },
    c5_46: { tipo: "pensamento", texto: "Eu não vou deixar ele aqui.", proxima: "c5_47" },
    c5_47: { tipo: "narracao", texto: "O celular vibra no bolso dela. Ela olha. Seis e dez. A Mio. “VINTE MINUTOS.” Ela olha para o céu. O sol já está baixo, laranja, em cima da estação. Ela não viu o tempo passar.", proxima: "c5_48" },
    c5_48: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Tô bem. Tô com uma pessoa. Já já eu falo.", proxima: "c5_49" },
    c5_49: { tipo: "narracao", texto: "Ela guarda o celular. Olha para o Ren. Ele está olhando para ela, com o olho bom, esperando ela ir embora. Como quem já sabe que todo mundo vai embora.", proxima: "c5_50" },
    c5_50: { quem: "ren", texto: "Pode ir. Já está escurecendo. Eu estou bem aqui.", proxima: "c5_esc5" },

    // ▶ ESCOLHA 5 — Pode ir
    c5_esc5: { escolhas: [
      { texto: "A. “Não. Você vem comigo. Levanta.”", proxima: "c5_5a_1", pontos: {}, flags: ["Vem_comigo"] },
      { texto: "B. “Eu vou. E eu volto amanhã. Com comida. E com remédio pra essas costelas.”", proxima: "c5_5b_1", pontos: {}, flags: ["Volto_amanha"] },
      { texto: "C. “Ren. Eu não vou embora. Você não está bem aqui. Ninguém está bem aqui.”", proxima: "c5_5c_1", pontos: {}, flags: ["Nao_vou_embora"] }
    ]},
    c5_5a_1: { quem: "eu", texto: "Não. Você vem comigo. Levanta.", proxima: "c5_5a_2" },
    c5_5a_2: { quem: "ren", texto: "Pra onde? Eu não tenho pra onde ir.", proxima: "c5_5a_3" },
    c5_5a_3: { tipo: "narracao", texto: "Ela não tem resposta. Ela não pensou nisso. Ela só sabe que ele não vai ficar. Ela fica parada, de pé, na frente dele, com a mão estendida, sem saber para onde levar.", proxima: "c5_51" },
    c5_5b_1: { quem: "eu", texto: "Eu vou. E eu volto amanhã. Com comida. E com remédio pra essas costelas. E se você não estiver aqui, eu vou no fliperama de novo. E eu amasso todas as máquinas.", proxima: "c5_5b_2" },
    c5_5b_2: { tipo: "narracao", texto: "Ele olha para ela. E ri. Um riso curto, que dói nas costelas, e ele segura o lado com a mão e ri mais, mesmo doendo. É a primeira vez que ela ouve o Ren rir.", proxima: "c5_51" },
    c5_5c_1: { quem: "eu", texto: "Ren. Eu não vou embora. Você não está bem aqui. Ninguém está bem aqui. Isso aqui não tem parede.", proxima: "c5_5c_2" },
    c5_5c_2: { tipo: "narracao", texto: "Ele não responde. Ele olha para a laje aberta, para o vazio, para a estação lá embaixo. E, pela primeira vez, ela vê ele olhar para aquele lugar como ela está olhando. Como um lugar onde ninguém devia dormir.", proxima: "c5_51" },

    // (todas as opções continuam aqui)
    c5_51: { tipo: "narracao", texto: "O vento sobe pelos buracos do prédio, assobiando. Lá embaixo, um trem passa, comprido, e os trilhos brilham. A cidade começa a acender as luzes, uma por uma.", proxima: "c5_52" },
    c5_52: { tipo: "pensamento", texto: "Eu não sei o que fazer. Eu tenho vinte e oito anos por dentro e eu não sei o que fazer com um menino de dezesseis dormindo num prédio sem parede.", proxima: "c5_53" },
    c5_53: { tipo: "pensamento", texto: "Mas eu sei que eu não vou deixar ele sozinho hoje.", proxima: "c5_54" },
    c5_54: { quem: "ren", texto: "Não conta pra eles. Pros meninos do Kaito.", proxima: "c5_55" },
    c5_55: { quem: "eu", texto: "Eu não vou contar.", proxima: "c5_56" },
    c5_56: { tipo: "pensamento", texto: "Eles odeiam ele. Todos. O Kaito, o Blake, o Victor, o Ryuji. O Takeo. Se eles souberem que eu estou aqui, no sexto andar, com o Ren, eles não vão perguntar por quê. Eles vão achar que eu escolhi um lado.", proxima: "c5_57" },
    c5_57: { tipo: "pensamento", texto: "Então ninguém sabe. É só meu. Por enquanto.", proxima: "r_cam" },

    /* =================== ROTA — QUARTA À NOITE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { tipo: "narracao", sprite: null, texto: "Ainda no prédio, o celular vibra. O Kaito.", proxima: "rk_02" },
    rk_02: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Não é pra perguntar. Eu só estou vendo que já são seis e meia e ainda não chegou “cheguei”. Eu estou sentado na moto na frente do seu prédio. Não sobe. Eu só fico aqui.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. “Eu estou bem. Eu ainda não posso voltar. Fica aí. Por favor.”", proxima: "rk_a1", pontos: { kaito: 2 }, flags: ["Fica_ai_Kaito"] },
      { texto: "B. “Kaito. Se um dia eu fizer uma coisa que você não gosta, por um motivo bom, você me escuta antes?”", proxima: "rk_b1", pontos: { kaito: 3 }, flags: ["Me_escuta_antes"] },
      { texto: "C. Mentir: “Estou na casa da Mio. Esqueci de avisar.”", proxima: "rk_c1", pontos: { kaito: 1 }, flags: ["Mentiu_Mio"] }
    ]},
    rk_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu estou bem. Eu ainda não posso voltar. Fica aí. Por favor.", proxima: "rk_a2" },
    rk_a2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu fico. A noite inteira, se precisar. O porteiro está me trazendo café.", proxima: "r_fim" },
    rk_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Kaito. Se um dia eu fizer uma coisa que você não gosta, por um motivo bom, você me escuta antes?", proxima: "rk_b2" },
    rk_b2: { tipo: "narracao", texto: "Lido na hora. Digitando. Para. Digitando. Um minuto inteiro.", proxima: "rk_b3" },
    rk_b3: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Item cinco. Perguntar antes de achar. Eu escuto. Mas eu fico com medo da coisa que eu não vou gostar.", proxima: "r_fim" },
    rk_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Estou na casa da Mio. Esqueci de avisar.", proxima: "rk_c2" },
    rk_c2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Tá. Que bom. Fala oi pra Mio.", proxima: "rk_c3" },
    rk_c3: { tipo: "narracao", texto: "Ela fica olhando a mensagem. “Fala oi pra Mio.” Ele acreditou. Na primeira vez. Sem perguntar nada. E ela sente o estômago pesar, porque a Mio, nesse exato momento, está mandando “VINTE MINUTOS” em caixa alta.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { tipo: "narracao", sprite: null, texto: "Ainda no prédio, o celular vibra. O Takeo.", proxima: "rt_02" },
    rt_02: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "A Mio me ligou. Ela está com medo. Eu também. Onde você está?", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. “Eu estou bem, Takeo. Depois eu explico.”", proxima: "rt_a1", pontos: { takeo: 2 }, flags: ["Depois_explico_Takeo"] },
      { texto: "B. “Takeo. Você me perdoaria se eu fizesse uma coisa que você não gosta?”", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["Perdoaria_Takeo"] },
      { texto: "C. “Na casa de uma amiga.”", proxima: "rt_c1", pontos: { takeo: 1 }, flags: ["Amiga_Takeo"] }
    ]},
    rt_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu estou bem, Takeo. Depois eu explico.", proxima: "rt_a2" },
    rt_a2: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Tá. Eu espero a explicação. Eu sou bom em esperar.", proxima: "r_fim" },
    rt_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Takeo. Você me perdoaria se eu fizesse uma coisa que você não gosta?", proxima: "rt_b2" },
    rt_b2: { tipo: "narracao", texto: "Digitando. Para. Muito tempo.", proxima: "rt_b3" },
    rt_b3: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Depende. Se for alguma coisa com o Ren, eu não sei. Hoje de manhã você perguntou dele. Eu não gostei. Mas eu perdoo quase tudo. Quase.", proxima: "r_fim" },
    rt_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Na casa de uma amiga.", proxima: "rt_c2" },
    rt_c2: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Tá. Boa noite. Amanhã seis e quarenta.", proxima: "rt_c3" },
    rt_c3: { tipo: "narracao", texto: "Ele não pergunta qual amiga. O Takeo, que percebe tudo, não pergunta. Ela sabe que ele percebeu.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { tipo: "narracao", sprite: null, texto: "Ainda no prédio, o celular vibra. O Blake.", proxima: "rb_02" },
    rb_02: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Você falou “sozinha” no banco. Eu deixei. Agora são seis e meia. Onde você está?", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. “Eu estou bem, Blake. Eu estou com alguém que precisa de mim.”", proxima: "rb_a1", pontos: { blake: 2 }, flags: ["Alguem_precisa"] },
      { texto: "B. “Blake. Como se cuida de costela machucada? É... pra minha mãe.”", proxima: "rb_b1", pontos: { blake: 2 }, flags: ["Costela_mentira"] },
      { texto: "C. “Me dá uma hora. Depois eu falo que cheguei.”", proxima: "rb_c1", pontos: { blake: 3 }, flags: ["Uma_hora_Blake"] }
    ]},
    rb_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu estou bem, Blake. Eu estou com alguém que precisa de mim.", proxima: "rb_a2" },
    rb_a2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Quem?", proxima: "rb_a3" },
    rb_a3: { tipo: "narracao", texto: "Ela não responde. Cinco minutos depois, chega outra.", proxima: "rb_a4" },
    rb_a4: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Tá. Eu não vou perguntar de novo. Mas eu fico com o celular na mão até você chegar.", proxima: "r_fim" },
    rb_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Blake. Como se cuida de costela machucada? É... pra minha mãe.", proxima: "rb_b2" },
    rb_b2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Gelo. Faixa firme, não apertada demais. Não deixa deitar do lado machucado. Se doer pra respirar, hospital.", proxima: "rb_b3" },
    rb_b3: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "A sua mãe estava bem ontem. Eu vi ela na padaria.", proxima: "r_fim" },
    rb_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Me dá uma hora. Depois eu falo que cheguei.", proxima: "rb_c2" },
    rb_c2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Uma hora. Eu marquei no relógio.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { tipo: "narracao", sprite: null, texto: "Ainda no prédio, o celular vibra. O Ryuji. Ligação. Ela se afasta do Ren, até a escada, antes de atender.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", texto: "Você está bem? A Mio está gritando no grupo. Em caixa alta. Ela nunca grita em caixa alta no grupo dos meninos. Ela não devia nem estar no grupo dos meninos.", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. “Eu estou bem, Ryuji. Fala pra Mio que eu estou bem.”", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Fala_pra_Mio"] },
      { texto: "B. “Me conta qualquer coisa. Eu preciso ouvir uma voz normal.”", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Voz_normal"] },
      { texto: "C. “Ryuji. Não fala pra ninguém que eu liguei com essa voz.”", proxima: "rr_c1", pontos: { ryuji: 2 }, flags: ["Segredo_Ryuji"] }
    ]},
    rr_a1: { quem: "eu", texto: "Eu estou bem, Ryuji. Fala pra Mio que eu estou bem.", proxima: "rr_a2" },
    rr_a2: { quem: "ryuji", texto: "Eu falo! Em caixa alta também! Pra ela acreditar!", proxima: "r_fim" },
    rr_b1: { quem: "eu", texto: "Me conta qualquer coisa. Eu preciso ouvir uma voz normal.", proxima: "rr_b2" },
    rr_b2: { tipo: "narracao", texto: "Ele conta. Do pombo do ônibus. Do galo que virou ervilha. Da mãe dele batendo tampa de panela. Ela fica ouvindo, sentada no último degrau da escada sem corrimão, de costas para a laje onde o Ren está, e não conta nada.", proxima: "r_fim" },
    rr_c1: { quem: "eu", texto: "Ryuji. Não fala pra ninguém que eu liguei com essa voz.", proxima: "rr_c2" },
    rr_c2: { quem: "ryuji", texto: "Que voz? Eu não ouvi voz nenhuma. Eu sou surdo desde agora. Mas você está bem? Fala só “sim”.", proxima: "rr_c3" },
    rr_c3: { quem: "eu", texto: "Sim.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { tipo: "narracao", sprite: null, texto: "Ainda no prédio, o celular vibra. O Victor.", proxima: "rv_02" },
    rv_02: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Eu não vou fazer piada. Eu só quero saber se você está bem. A Mio está desesperada no grupo.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. “Eu estou bem. Obrigada por não fazer piada.”", proxima: "rv_a1", pontos: { victor: 3 }, flags: ["Sem_piada_Victor"] },
      { texto: "B. “Victor. Se alguém precisasse de um lugar pra dormir, a sua mãe... não. Esquece.”", proxima: "rv_b1", pontos: { victor: 3 }, flags: ["Esquece_Victor"] },
      { texto: "C. “Me faz um favor? Não pergunta nada amanhã.”", proxima: "rv_c1", pontos: { victor: 3 }, flags: ["Nao_pergunta_Victor"] }
    ]},
    rv_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu estou bem. Obrigada por não fazer piada.", proxima: "rv_a2" },
    rv_a2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Eu guardo as piadas pra quando você estiver em casa. Volta logo pra eu poder usar.", proxima: "r_fim" },
    rv_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Victor. Se alguém precisasse de um lugar pra dormir, a sua mãe... não. Esquece.", proxima: "rv_b2" },
    rv_b2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "A minha mãe nunca fecha a porta pra ninguém. Quem é? Não. Esquece. Eu esqueci. Mas a porta está aberta.", proxima: "r_fim" },
    rv_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Me faz um favor? Não pergunta nada amanhã.", proxima: "rv_c2" },
    rv_c2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Combinado. Amanhã eu só falo do Caramelo. O assunto mais seguro do mundo.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { tipo: "narracao", cenario: "predio-abandonado-topo", transicao: "tempo", legenda: "Quarta, 18h40", sprite: "ren", texto: "O sol some atrás da estação. O sexto andar fica azul, depois cinza. O Ren está sentado no cobertor, com a garrafa de água na mão, olhando para ela.", proxima: "f_02" },
    f_02: { quem: "ren", texto: "Você não vai embora, né?", proxima: "f_03" },
    f_03: { quem: "eu", texto: "Não sozinha.", proxima: "f_04" },
    f_04: { tipo: "narracao", texto: "Ele olha para ela muito tempo. Depois para o livro de capa mole, virado para baixo no chão. Ele pega o livro. Fecha. E coloca dentro da mochila.", proxima: "f_05" },
    f_05: { tipo: "narracao", texto: "Não é um sim. Mas é a primeira coisa que ele guarda.", proxima: "f_06" },
    f_06: { tipo: "pensamento", texto: "Eu vim perguntar onde ele estava. Agora eu sei. E agora eu não posso fingir que não sei.", proxima: "ep_fim" },

    // Fim do Capítulo 52 (crie a entrada "capitulo52" em dados/capitulos.js).
    ep_fim: { fim: "capitulo52" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 53 (anotações do roteiro)
 *  • O Ren faltou terça e quarta. Professora: "a família ligou, gripe". "Ninguém pergunta dele."
 *  • A SN avisou o Kaito: "vou resolver uma coisa sozinha". Ele não perguntou. "Me manda 'cheguei'."
 *    (A Mio: bilhete; se Liga_mae, ela liga às 18h30.)
 *  • O FLIPERAMA (Midorata, depois da aula): cinco meninos. Menino de boné (hostil, "você é do Kaito"/"Eu não sou de ninguém"),
 *    Menino da cicatriz (mais calmo; "quem não gostou foi o velho dele"), Menino do zíper (o menor, contou onde ele está).
 *    Se Apertou_maquina: marca de cinco dedos na lateral de uma máquina de fliperama. O da cicatriz "entendeu".
 *    O Ren pegou a mochila no sábado à noite e sumiu. Não está em casa (carro do velho na porta; "ninguém entra na casa do velho").
 *  • O PRÉDIO ABANDONADO (o do Cap. 33), sexto andar, laje aberta: o Ren DORMINDO LÁ desde sábado (cobertor, mochila, pão).
 *    Sentado na beira, pernas no vazio. Olho esquerdo roxo, boca aberta de novo, COSTELAS do lado direito machucadas.
 *    "Sábado foi aviso. Domingo, a pracinha em vez de onde ele mandou. Segunda, os meninos continuaram sem ir na loja.
 *    Aí não foi aviso." "Ele esquece em uma semana. Funciona assim."
 *    "Não faz essa cara. Não é culpa sua. Eu escolhi." O tio cantando: ele sorri mesmo doendo. Primeira vez que ri (se B).
 *    A força: o vergalhão dobrado. "Solta. Não é com o ferro que você está brava."
 *    "Ninguém mais veio. Então eu vim." (a frase dele devolvida).
 *  • Final: "Você não vai embora, né?" / "Não sozinha." Ele guardou o livro na mochila.
 *  • SEGREDO: os meninos da gangue do Kaito NÃO gostam do Ren (nenhum). O Takeo: "Se ele sumiu, é um problema a menos."
 *    A SN perguntou pra professora sozinha. O Ren: "Não conta pra eles." / "Eu não vou contar." Ninguém sabe.
 *    Rotas: o Kaito esperando na frente do prédio (ou ela MENTIU: "estou na casa da Mio"); Takeo: "se for alguma coisa com o Ren,
 *    eu não sei"; Blake desconfiado (costela "pra minha mãe"; "a sua mãe estava bem ontem"); Ryuji guarda; Victor: "a porta está aberta".
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 O bilhete · 2 Sozinha · 3 No fliperama · 4 No último andar · 5 Pode ir · Rota (1 por rota)
 *
 * FLAGS NOVAS
 *  So_perguntar · Liga_mae · Guardou_bilhete · Promete_cheguei · Nao_e_perigoso · Depois_conto
 *  Ninguem_perguntou · Apertou_maquina · Mao_na_cara · Sentou_laje · Sai_da_beira · Cobertor_Ren
 *  Vem_comigo · Volto_amanha · Nao_vou_embora · Fica_ai_Kaito · Me_escuta_antes · Mentiu_Mio · Depois_explico_Takeo · Perdoaria_Takeo · Amiga_Takeo · Alguem_precisa
 *  Costela_mentira · Uma_hora_Blake · Fala_pra_Mio · Voz_normal · Segredo_Ryuji · Sem_piada_Victor · Esquece_Victor · Nao_pergunta_Victor
 */