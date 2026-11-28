/*
 * =====================================================================
 *  CAPÍTULO 54 — Plantão
 *  Quinta-feira, o dia seguinte ao Capítulo 53. Escola, e a noite com o Ren ainda no 407.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Cenas com todos os meninos. Bloco de rota curto no fim.
 *
 *  CONTEXTO
 *    • O Ren está dormindo no sofá do 407 desde quarta. A mãe da SN mandou ele ficar até conseguir voltar pra casa.
 *    • Os meninos da gangue do Kaito não sabem (o Kaito só sabe se Contou_Kaito_Ren / Contou_depois).
 *
 *  O KAITO (personalidade de volta ao normal)
 *    • Fala pouco. Frases curtas. Cara de tédio, meio sorriso de canto. Não faz discurso, não faz lista, não pede desculpa
 *      em parágrafo. Mostra com atitude. Seguro de si. As meninas olham, ele nem percebe.
 *
 *  O QUE ACONTECE
 *    • Manhã: o Kaito busca. Pouca conversa. Escola normal, todos os meninos.
 *    • Depois da aula: o Kaito dá um beijo nela (rota Kaito: beijo de verdade; outras rotas: um beijo rápido na testa).
 *    • Em casa: a mãe está de PLANTÃO a noite inteira. Só a SN e o Ren no 407.
 *      Eles conversam bastante. O Ren flerta disfarçado: elogio escondido, frase que parece sobre o livro e não é.
 *      A comida dela é uma atrocidade. Ele come tudo. A página cinquenta.
 *
 *  REGRAS
 *    • Sem xadrez no Ren. O Ren não manda mensagem. Sem narrar roupa. Sem flashback / passado.
 *    • Sem as muletas antigas (o nome do térreo, a fita, a piada da escola).
 *    • Os meninos não sabem do Ren.
 *
 *  PERSONAGENS
 *    Kaito, Takeo, Blake, Ryuji, Victor, Mio, Hana, Reina, Ren, Serena, Mãe (bilhete).
 *    Sem sprite / rótulo: Ren, Victor.
 *
 *  CENÁRIOS
 *    apartamento (frente do prédio / dentro do 407) · saida-colegio · sala-de-aula · patio-fundos · quarto-sn
 *
 *  Crie a entrada "capitulo54" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo54", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — MANHÃ =================== */
    c1_01: { roupa: null, tipo: "narracao", cenario: "sala-sn", transicao: "tempo", legenda: "Quinta, 6h40 — Cena 1", sprite: "ren", texto: "De manhã, a sala do 407 cheira a café. O Ren está sentado no sofá, com o cobertor dobrado do lado, do jeito que a mãe ensinou. O olho roxo está menos inchado. Ele já consegue abrir metade.", proxima: "c1_01c" },
    c1_01c: { caminhos: [
      { flag: "Contou_Kaito_Ren", proxima: "c1_01k" }
    ], proxima: "c1_02" },
    c1_01k: { tipo: "narracao", sprite: "kaito", texto: "No chão, do lado do sofá, o Kaito já dobrou o colchonete e o travesseiro, empilhados no canto, certinhos. Ele está sentado em cima da pilha, com o capacete vermelho no colo, esperando. Ele e o Ren não estão conversando. Mas também não estão se olhando torto.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "A mãe passa pela sala de bolsa no ombro, apressada, e para na frente dele.", proxima: "c1_03" },
    c1_03: { sprite: "mae", quem: "mae", texto: "Hoje eu tenho plantão. Saio às seis da tarde, volto amanhã de manhã. A nossa conversa fica pra depois do plantão. Você fica. Não discute. Fica até poder voltar pra casa. Tem comida na geladeira. E você, filha, não cozinha nada. Pelo amor de Deus.", proxima: "c1_04" },
    c1_04: { tipo: "narracao", texto: "A mãe sai. A porta fecha. O Ren olha para ela.", proxima: "c1_05" },
    c1_05: { sprite: "ren", quem: "ren", texto: "Por que você não pode cozinhar?", proxima: "c1_06" },
    c1_06: { quem: "eu", texto: "Longa história. Envolve cookie.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", texto: "Ele não pergunta mais. Mas o canto da boca dele sobe, do lado que não está cortado.", proxima: "c1_07c" },
    c1_07c: { caminhos: [
      { flag: "Contou_Kaito_Ren", proxima: "c1_08k" }
    ], proxima: "c1_08" },

    // ----- O Kaito dormiu no 407: os dois descem juntos -----
    c1_08k: { tipo: "narracao", sprite: "kaito", texto: "O Kaito levanta da pilha do colchonete. Passa pelo sofá. Para um segundo do lado do Ren, que levanta os olhos do livro.", proxima: "c1_08k2" },
    c1_08k2: { quem: "kaito", texto: "Toma o remédio.", proxima: "c1_08k3" },
    c1_08k3: { quem: "ren", sprite: "ren", texto: "...Vai logo.", proxima: "c1_08k4" },
    c1_08k4: { roupa: "escolar", tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", sprite: "kaito", texto: "Eles descem juntos a escada da frente. Na portaria, o porteiro olha para os dois saindo do mesmo apartamento às seis e quarenta, e volta para o jornal sem falar nada, com cara de quem vai contar para o prédio inteiro até o almoço.", proxima: "c1_08k5" },
    c1_08k5: { tipo: "narracao", texto: "Lá fora, a moto dormiu na calçada, embaixo do poste. Duas meninas do prédio da frente passam, olham para ele, cochicham. Ele não percebe. Ele pega o capacete vermelho do guidão e entrega para ela.", proxima: "c1_12" },

    c1_08: { roupa: "escolar", tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", sprite: "kaito", texto: "Na frente do prédio, o Kaito. Encostado na moto, braço cruzado, olhando o celular com cara de tédio. Duas meninas do prédio da frente passam, olham para ele, cochicham. Ele não levanta os olhos.", proxima: "c1_09" },
    c1_09: { tipo: "narracao", texto: "Quando ela sai, ele levanta. Guarda o celular. Joga o capacete vermelho para ela, de leve, por baixo. Ela pega no ar.", proxima: "c1_10" },
    c1_10: { quem: "kaito", texto: "Bom dia.", proxima: "c1_11" },
    c1_11: { caminhos: [
      { flag: "Contou_Kaito_Ren", proxima: "c1_11k" },
      { flag: "Contou_depois", proxima: "c1_11k" },
      { flag: "Conta_amanha", proxima: "c1_11c" }
    ], proxima: "c1_12" },
    c1_11c: { quem: "eu", texto: "Eu falei que ia contar pessoalmente. É o Ren. Ele está no meu sofá. O pai dele bateu nele por causa da loja do seu tio. Porque eu pedi. Não conta pros meninos.", proxima: "c1_11c2" },
    c1_11c2: { tipo: "narracao", texto: "Ele olha para a janela do quarto andar. O maxilar mexe uma vez. Ele demora.", proxima: "c1_11c3" },
    c1_11c3: { quem: "kaito", texto: "...Não conto.", proxima: "c1_11c4" },
    c1_11c4: { quem: "kaito", texto: "Não mente de novo.", proxima: "c1_11c5" },
    c1_11c5: { quem: "eu", texto: "Não minto.", proxima: "c1_12" },
    c1_11k: { tipo: "narracao", texto: "Ele olha uma vez para a janela do quarto andar. Rápido.", proxima: "c1_11k2" },
    c1_11k2: { quem: "kaito", texto: "Ainda tá aí?", proxima: "c1_11k3" },
    c1_11k3: { quem: "eu", texto: "A minha mãe mandou ele ficar.", proxima: "c1_11k4" },
    c1_11k4: { quem: "kaito", texto: "...Tá.", proxima: "c1_11k5" },
    c1_11k5: { tipo: "narracao", texto: "Só isso. Não faz cara. Não faz pergunta. Mas o maxilar dele mexe uma vez.", proxima: "c1_12" },
    c1_12: { tipo: "narracao", texto: "Ela coloca o capacete. Ele chega perto, fecha a fivela sem falar nada, com dois dedos, rápido, do jeito que fazia no começo. Dá dois tapinhas no topo do capacete.", proxima: "c1_13" },
    c1_13: { quem: "kaito", texto: "Sobe.", proxima: "c1_14" },
    c1_14: { tipo: "narracao", cenario: "rua", transicao: "tempo", texto: "Na garupa, os braços dela na cintura dele. Ele não fala nada o caminho inteiro. No sinal vermelho, a mão dele em cima das dela, sem olhar para trás. Na frente da escola, ela desce. Ele pega o capacete de volta, pendura no guidão.", proxima: "c1_15" },
    c1_15: { cenario: "saida-colegio", quem: "kaito", texto: "Depois da aula. Me espera.", proxima: "c1_16" },
    c1_16: { quem: "eu", texto: "Por quê?", proxima: "c1_17" },
    c1_17: { tipo: "narracao", texto: "Ele não responde. Só dá aquele meio sorriso de canto, o que ela não vê faz tempo, o de antes de tudo, e vai estacionar do outro lado da rua.", proxima: "c1_18" },
    c1_18: { tipo: "pensamento", texto: "Esse é o Kaito. Três palavras. Meio sorriso. E eu fico o dia inteiro pensando nas três palavras.", proxima: "c2_01" },

    /* =================== CENA 2 — A ESCOLA =================== */
    c2_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Primeira aula — Cena 2", sprite: "mio", texto: "Na sala, a Mio está esperando com a sobrancelha levantada.", proxima: "c2_02" },
    c2_02: { quem: "mio", texto: "Ontem você sumiu de novo. A sua mãe não me ligou. Isso quer dizer que a sua mãe sabe onde você estava. Isso me deixa mais nervosa, não menos.", proxima: "c2_03" },
    c2_03: { quem: "eu", texto: "Eu estava em casa, Mio. Juro.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", texto: "É verdade. A Mio percebe que é verdade. E fica mais confusa ainda.", proxima: "c2_05" },
    c2_05: { tipo: "narracao", sprite: "takeo:escolar", texto: "Atrás dela, o Takeo. Ele olha para a carteira vazia perto da porta. Depois para ela. Não fala nada do Ren. Ele estica o braço novo por cima do ombro dela e coloca, na carteira, uma bala de gengibre da avó.", proxima: "c2_06" },
    c2_06: { quem: "takeo", sprite: "takeo:escolar", texto: "Ela disse que você está com cara de quem dormiu pouco. Eu disse que ela nem te viu. Ela disse que não precisa ver.", proxima: "c2_07" },
    c2_07: { tipo: "narracao", sprite: null, texto: "A carteira do Ren continua vazia. Para a escola inteira, ele está com gripe. Só ela sabe que, nesse momento, ele está no sofá dela, provavelmente lendo, provavelmente com o saco de ervilha nas costelas.", proxima: "c2_08" },
    c2_08: { tipo: "pensamento", texto: "É estranho. Ter um segredo morando na minha sala.", proxima: "c3_01" },

    /* =================== CENA 3 — INTERVALO =================== */
    c3_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Intervalo — Cena 3", sprite: "blake", texto: "No intervalo, o banco. O Blake estende metade do sanduíche, como sempre. Mas olha para ela um segundo a mais do que sempre.", proxima: "c3_02" },
    c3_02: { quem: "blake", texto: "A sua mãe melhorou da costela?", proxima: "c3_03" },
    c3_03: { tipo: "narracao", texto: "Ele fala sem expressão nenhuma. Ela sente o rosto esquentar.", proxima: "c3_04" },
    c3_04: { quem: "eu", texto: "...Melhorou.", proxima: "c3_05" },
    c3_05: { quem: "blake", texto: "Bom.", proxima: "c3_06" },
    c3_06: { tipo: "narracao", texto: "E come o sanduíche. Não pergunta mais. O Blake sabe que não é a mãe. O Blake sabe que ela sabe que ele sabe. Ninguém fala nada.", proxima: "c3_07" },
    c3_07: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji senta no chão com quatro coxinhas e começa a explicar uma teoria sobre pombos serem espiões do governo. O Victor chega e senta no braço do banco, com o pirulito, e discorda da teoria só para irritar.", proxima: "c3_08" },
    c3_08: { quem: "victor", sprite: null, texto: "Pombo não é espião. Pombo é burro. Eu já vi um pombo bater numa janela três vezes seguidas. Espião não bate na janela.", proxima: "c3_09" },
    c3_09: { quem: "ryuji", sprite: "ryuji", texto: "É disfarce! Ele bate de propósito! Pra ninguém desconfiar!", proxima: "c3_10" },
    c3_10: { tipo: "narracao", sprite: "kaito", texto: "O Kaito, do lado dela, não participa. Come o onigiri, olhando a quadra. Quando o Ryuji grita “disfarce”, ele fala, sem tirar os olhos da quadra.", proxima: "c3_11" },
    c3_11: { quem: "kaito", texto: "Ryuji. Come.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", texto: "O Ryuji come. Na hora. O banco inteiro ri. O Kaito não ri. Só o canto da boca sobe. E o joelho dele, embaixo do banco, encosta no dela. Ele não olha. Fica.", proxima: "c3_13" },
    c3_13: { tipo: "narracao", sprite: "serena", texto: "Na grade, a Serena. Sozinha de novo. As amigas sumiram. Ela está olhando para o celular, mas a tela está apagada. Ela não está vendo nada. Ela está só segurando o celular, para ter onde colocar a mão.", proxima: "c3_14" },
    c3_14: { tipo: "pensamento", texto: "Ela está sozinha. Pela primeira vez. Sem amigas, sem plateia, sem tornozelo.", proxima: "c3_15" },
    c3_15: { tipo: "pensamento", texto: "Eu não vou sentir pena. Ela fez tudo isso. Mas eu também não vou fingir que não estou vendo.", proxima: "c3_16" },
    c3_16: { tipo: "narracao", sprite: null, texto: "A Serena levanta os olhos. Vê ela olhando. E, em vez de chorar ou sorrir, faz uma coisa nova. Vira as costas e vai embora para dentro do prédio. Sem mancar. Sem nada.", proxima: "c4_01" },

    /* =================== CENA 4 — DEPOIS DA AULA =================== */
    c4_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Saída — Cena 4", sprite: null, texto: "Na saída, a calçada está cheia. Ela passa pelo portão com a Mio e a Hana. Do outro lado da rua, a moto. O Kaito está sentado nela, de lado, com o capacete no colo, mexendo no celular.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "Ele levanta os olhos. Vê ela. Guarda o celular no bolso. Levanta. E atravessa a rua.", proxima: "c4_03" },
    c4_03: { quem: "mio", sprite: "mio", texto: "Ele está atravessando. Ele nunca atravessa. Ele sempre espera do outro lado. Hana. Ele está atravessando.", proxima: "c4_04" },
    c4_04: { quem: "hana", sprite: "hana", texto: "Estou vendo.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", sprite: "kaito", texto: "Ele para na frente dela. No meio da calçada. Na frente do portão. Na frente da escola inteira saindo. As meninas que sempre olham para ele param de andar.", proxima: "c4_06" },
    c4_06: { quem: "kaito", texto: "Esperou.", proxima: "c4_07" },
    c4_07: { quem: "eu", texto: "Você mandou.", proxima: "c4_08" },
    c4_08: { quem: "kaito", texto: "Eu pedi.", proxima: "c4_09" },
    c4_09: { quem: "eu", texto: "Você falou “me espera”. Isso é mandar, Kaito.", proxima: "c4_10" },
    c4_10: { tipo: "narracao", texto: "Ele não discute. Ele só olha para ela. Aquele olhar parado, sem pressa, que ele usa quando já decidiu alguma coisa e só está esperando o momento.", proxima: "c4_11" },
    c4_11: { caminhos: [
      { flag: "Rota_Kaito", proxima: "c4_k01" }
    ], proxima: "c4_d01" },

    // ----- Rota Kaito: o beijo de verdade -----
    c4_k01: { tipo: "narracao", texto: "E aí ele faz. Sem avisar. Sem perguntar. Ele levanta a mão, coloca atrás da nuca dela, e beija ela. Ali. Na calçada. Na frente do portão.", proxima: "c4_k02" },
    c4_k02: { tipo: "narracao", texto: "Não é devagar como na frente do prédio. É firme. Seguro. Do jeito que ele faz tudo quando já decidiu. A mão na nuca dela, a outra na cintura, puxando um pouco. Ela segura a camisa dele com as duas mãos, de susto, e depois não solta.", proxima: "c4_k03" },
    c4_k03: { tipo: "narracao", texto: "Em volta, a calçada inteira para. Ela ouve, de longe, como se estivesse embaixo d'água, a Mio soltar um grito agudo. Alguém derruba alguma coisa. Um celular? Uma mochila? Ela não sabe. Ela não liga.", proxima: "c4_k04" },
    c4_k04: { tipo: "narracao", texto: "Quando ele se afasta, é só um pouco. A testa quase na dela. Ele está com a cara de sempre. Tranquila. Meio entediada. Só os olhos não. Os olhos estão brilhando.", proxima: "c4_k05" },
    c4_k05: { quem: "kaito", texto: "Pronto.", proxima: "c4_k06" },
    c4_k06: { quem: "eu", texto: "...Pronto o quê?", proxima: "c4_k07" },
    c4_k07: { quem: "kaito", texto: "Agora todo mundo sabe.", proxima: "c4_k08" },
    c4_k08: { tipo: "narracao", texto: "E ele vira, atravessa a rua de volta, senta na moto e coloca o capacete, como se não tivesse acabado de beijar ela na frente da escola inteira. Ela fica parada na calçada, com a boca formigando e as pernas moles.", proxima: "c4_k09" },
    c4_k09: { tipo: "pensamento", texto: "“Agora todo mundo sabe.” Ninguém pediu namoro. Ninguém falou namoro. Mas agora todo mundo sabe.", proxima: "c4_20" },

    // ----- Outras rotas: o beijo rápido na testa -----
    c4_d01: { tipo: "narracao", texto: "E aí ele faz uma coisa que ela não espera. Ele se abaixa, rápido, e dá um beijo na testa dela. Um só. Leve. Na frente do portão.", proxima: "c4_d02" },
    c4_d02: { quem: "kaito", texto: "Por ter esperado.", proxima: "c4_d03" },
    c4_d03: { tipo: "narracao", texto: "E vira, atravessa a rua de volta, senta na moto e coloca o capacete, como se nada tivesse acontecido. Ela fica parada na calçada, com a mão na testa, sem saber direito o que foi aquilo.", proxima: "c4_d04" },
    c4_d04: { tipo: "pensamento", texto: "“Por ter esperado.” Hoje, no portão? Ou a semana inteira? Com o Kaito, três palavras sempre querem dizer dez.", proxima: "c4_20" },

    // (os dois caminhos continuam aqui)
    c4_20: { quem: "mio", sprite: "mio", texto: "Eu. Eu vou. Eu vou precisar sentar.", proxima: "c4_21" },
    c4_21: { quem: "hana", sprite: "hana", texto: "Senta no meio-fio. Eu seguro a sua mochila. Eu vou anotar isso depois. Agora eu não consigo segurar a caneta.", proxima: "c4_22" },
    c4_22: { tipo: "narracao", sprite: null, texto: "A Reina passa do lado, olha para ela, olha para o Kaito na moto do outro lado, e fala uma palavra só, sem parar de andar.", proxima: "c4_23" },
    c4_23: { quem: "reina", sprite: "reina", texto: "Finalmente.", proxima: "c4_24" },
    c4_24: { tipo: "narracao", sprite: "kaito", texto: "Do outro lado da rua, ele bate na garupa. Duas vezes. Sem falar nada. Ela atravessa.", proxima: "c4_25" },
    c4_25: { quem: "kaito", texto: "Pra casa?", proxima: "c4_26" },
    c4_26: { quem: "eu", texto: "Pra casa.", proxima: "c4_27" },
    c4_27: { caminhos: [
      { flag: "Contou_Kaito_Ren", proxima: "c4_27k" },
      { flag: "Contou_depois", proxima: "c4_27k" },
      { flag: "Conta_amanha", proxima: "c4_27k" }
    ], proxima: "c4_28" },
    c4_27k: { cenario: "frente-casa-sn-tarde", tipo: "narracao", texto: "Na frente do prédio, quando ela desce, ele olha para a janela do quarto andar de novo. E fala, sem olhar para ela.", proxima: "c4_27k2" },
    c4_27k2: { quem: "kaito", texto: "Qualquer coisa, liga.", proxima: "c4_27k3" },
    c4_27k3: { quem: "eu", texto: "Ele não vai fazer nada, Kaito.", proxima: "c4_27k4" },
    c4_27k4: { quem: "kaito", texto: "Eu sei. Liga mesmo assim.", proxima: "c4_28" },
    c4_28: { cenario: "frente-casa-sn-tarde", tipo: "narracao", sprite: null, texto: "Ele vai embora. Ela sobe a escada com a boca ainda formigando e a cabeça cheia de três palavras.", proxima: "c5_01" },

    /* =================== CENA 5 — O 407 =================== */
    c5_01: { tipo: "narracao", cenario: "sala-sn", transicao: "tempo", legenda: "407, fim de tarde — Cena 5", sprite: null, texto: "Quando ela abre a porta, a casa está em silêncio. Na mesa da cozinha, um bilhete da mãe, preso no açucareiro.", proxima: "c5_02" },
    c5_02: { quem: "mensagem", rotulo: "Bilhete da mãe", texto: "Fui pro plantão. Volto amanhã às 8h. Tem lasanha no congelador, 40 min no forno. NÃO INVENTA NADA. O menino tomou o remédio às 14h. Próximo às 22h. Juízo, os dois.", proxima: "c5_03" },
    c5_03: { tipo: "pensamento", texto: "“Juízo, os dois.” Os dois. Só os dois. A noite inteira.", proxima: "c5_04" },
    c5_04: { sprite: "ren", tipo: "narracao", texto: "Na sala, o Ren está sentado no chão, encostado no sofá, com o livro do farol aberto no colo. Ele levanta os olhos quando ela entra.", proxima: "c5_05" },
    c5_05: { quem: "ren", texto: "Você está vermelha.", proxima: "c5_06" },
    c5_06: { quem: "eu", texto: "Eu subi a escada correndo.", proxima: "c5_07" },
    c5_07: { quem: "ren", texto: "Quarto andar não deixa ninguém assim.", proxima: "c5_08" },
    c5_08: { tipo: "narracao", texto: "Ele volta a olhar para o livro. Ela sabe que ele não está lendo. Ela sabe que ele viu pela janela. A moto. Talvez o resto.", proxima: "c5_09" },
    c5_09: { tipo: "narracao", texto: "Ela larga a mochila e senta no chão também, do outro lado da mesinha de centro, encostada na poltrona. Os dois no chão. A mesinha no meio.", proxima: "c5_10" },
    c5_10: { quem: "eu", texto: "Como está a costela?", proxima: "c5_11" },
    c5_11: { quem: "ren", texto: "Melhor. A sua mãe me fez tomar o remédio olhando pra ela. Como criança.", proxima: "c5_12" },
    c5_12: { quem: "eu", texto: "Ela faz isso comigo também.", proxima: "c5_13" },
    c5_13: { quem: "ren", texto: "Eu sei. Ela falou. Ela falou muita coisa de você hoje de manhã. Antes de sair.", proxima: "c5_14" },
    c5_14: { quem: "eu", texto: "...O que ela falou?", proxima: "c5_15" },
    c5_15: { quem: "ren", texto: "Que você ronca.", proxima: "c5_16" },
    c5_16: { quem: "eu", texto: "Eu NÃO ronco.", proxima: "c5_17" },
    c5_17: { quem: "ren", texto: "Eu ouvi ontem. Pela porta. Bem baixinho. Parece gato.", proxima: "c5_18" },
    c5_18: { tipo: "narracao", texto: "Ele fala isso sem levantar os olhos do livro. Sério. E ela não sabe se é para ficar brava ou se tem alguma coisa escondida embaixo do “parece gato”. Ela fica as duas coisas.", proxima: "c5_esc1" },

    // ▶ ESCOLHA 1 — O ronco
    c5_esc1: { escolhas: [
      { texto: "A. Jogar a almofada da poltrona nele. Com cuidado. Por causa da costela.", proxima: "c5_1a_1", pontos: {}, flags: ["Almofada_Ren"] },
      { texto: "B. “Você ficou acordado ouvindo eu dormir?”", proxima: "c5_1b_1", pontos: {}, flags: ["Ouvindo_dormir"] },
      { texto: "C. “E você fala dormindo. Eu também ouvi.” (mentira)", proxima: "c5_1c_1", pontos: {}, flags: ["Fala_dormindo"] }
    ]},
    c5_1a_1: { tipo: "narracao", texto: "Ela joga a almofada. Devagar, por baixo, sem força nenhuma. Ela cai no colo dele, em cima do livro. Ele olha para a almofada. Depois para ela. E coloca a almofada atrás das costas, encostada no sofá, como quem aceita um presente.", proxima: "c5_1a_2" },
    c5_1a_2: { quem: "ren", texto: "Obrigado. Faltava uma.", proxima: "c5_19" },
    c5_1b_1: { quem: "eu", texto: "Você ficou acordado ouvindo eu dormir?", proxima: "c5_1b_2" },
    c5_1b_2: { tipo: "narracao", texto: "Ele para. A página do livro fica parada na mão dele. Um segundo. Dois.", proxima: "c5_1b_3" },
    c5_1b_3: { quem: "ren", texto: "Eu não durmo bem em lugar novo. Tinha que ouvir alguma coisa. Era você ou a geladeira. A geladeira é mais chata.", proxima: "c5_19" },
    c5_1c_1: { quem: "eu", texto: "E você fala dormindo. Eu também ouvi.", proxima: "c5_1c_2" },
    c5_1c_2: { tipo: "narracao", texto: "Ele fica pálido. De verdade. O Ren, pálido. Olha para ela rápido.", proxima: "c5_1c_3" },
    c5_1c_3: { quem: "ren", texto: "...O que eu falei?", proxima: "c5_1c_4" },
    c5_1c_4: { quem: "eu", texto: "Mentira. Eu não ouvi nada. Mas agora eu quero saber o que você tinha medo de ter falado.", proxima: "c5_1c_5" },
    c5_1c_5: { tipo: "narracao", texto: "Ele solta o ar. E volta para o livro. Mas ela vê a orelha dele ficar vermelha. Ele não responde.", proxima: "c5_19" },

    // (todas as opções continuam aqui)
    c5_19: { roupa: null, cenario: "cozinha-sn-noite", sprite: null, tipo: "narracao", transicao: "tempo", legenda: "407, 19h", texto: "Às sete, ela levanta para fazer a lasanha. A mãe mandou. Quarenta minutos no forno. É só colocar no forno.", proxima: "c5_20" },
    c5_20: { tipo: "pensamento", texto: "Eu consigo colocar uma coisa no forno. Eu sou uma pessoa adulta. Por dentro.", proxima: "c5_21" },
    c5_21: { tipo: "narracao", texto: "Ela tira a lasanha do congelador. Olha para ela. E pensa que lasanha sozinha é pouco para um menino que não comeu direito por quatro dias. Que podia ter um acompanhamento. Uma salada. Um arroz. Uma coisa feita por ela.", proxima: "c5_22" },
    c5_22: { tipo: "narracao", texto: "Meia hora depois, a lasanha está no forno, inteira e segura. E, na panela, tem uma coisa que começou como arroz, virou risoto sem querer, e terminou como uma massa grudenta, meio queimada embaixo, com um cheiro que ela não consegue identificar.", proxima: "c5_23" },
    c5_23: { sprite: "ren", tipo: "narracao", texto: "O Ren aparece na porta da cozinha, apoiado no batente, com a mão nas costelas. Olha para a panela. Olha para ela.", proxima: "c5_24" },
    c5_24: { quem: "ren", texto: "A história do cookie.", proxima: "c5_25" },
    c5_25: { quem: "eu", texto: "Não fala nada.", proxima: "c5_26" },
    c5_26: { tipo: "narracao", texto: "Ele não fala nada. Entra na cozinha devagar. Pega uma colher da gaveta. Mergulha na panela. E come.", proxima: "c5_27" },
    c5_27: { quem: "eu", texto: "Ren! Não come isso!", proxima: "c5_28" },
    c5_28: { tipo: "narracao", texto: "Ele mastiga. Muito tempo. A cara dele não muda. Engole. E pega outra colherada.", proxima: "c5_29" },
    c5_29: { quem: "ren", texto: "Está horrível.", proxima: "c5_30" },
    c5_30: { quem: "eu", texto: "Então para de comer!", proxima: "c5_31" },
    c5_31: { quem: "ren", texto: "Ninguém nunca fez comida pra mim. Horrível ou não. Eu vou comer tudo.", proxima: "c5_32" },
    c5_32: { tipo: "narracao", texto: "Ele fala isso olhando para a panela, não para ela. Do mesmo jeito sem emoção de sempre. E come mais uma colherada. Ela fica parada no meio da cozinha, com a luva de forno na mão, sem saber o que fazer com o peito.", proxima: "c5_33" },
    c5_33: { tipo: "pensamento", texto: "Ninguém nunca fez comida pra ele. E a primeira coisa é isso. Essa coisa grudenta.", proxima: "c5_esc2" },

    // ▶ ESCOLHA 2 — A panela
    c5_esc2: { escolhas: [
      { texto: "A. Pegar outra colher e comer junto. Na panela. Os dois.", proxima: "c5_2a_1", pontos: {}, flags: ["Comeu_panela"] },
      { texto: "B. Tirar a panela da mão dele. “A lasanha fica pronta em dez minutos. Espera.”", proxima: "c5_2b_1", pontos: {}, flags: ["Espera_lasanha"] },
      { texto: "C. “Da próxima vez eu faço uma coisa que preste. Prometo.”", proxima: "c5_2c_1", pontos: {}, flags: ["Proxima_vez"] }
    ]},
    c5_2a_1: { tipo: "narracao", texto: "Ela pega outra colher. Mergulha. Come. É pior do que parece. Muito pior. Ela faz uma careta. Ele vê a careta e o canto da boca dele sobe.", proxima: "c5_2a_2" },
    c5_2a_2: { quem: "ren", texto: "Agora você sabe o que eu sinto.", proxima: "c5_2a_3" },
    c5_2a_3: { quem: "eu", texto: "Está horrível.", proxima: "c5_2a_4" },
    c5_2a_4: { quem: "ren", texto: "Está. Mas é melhor comer horrível com alguém do que bom sozinho.", proxima: "c5_34" },
    c5_2b_1: { quem: "eu", texto: "A lasanha fica pronta em dez minutos. Espera.", proxima: "c5_2b_2" },
    c5_2b_2: { tipo: "narracao", texto: "Ela tira a panela da mão dele. Ele deixa. Mas segura a colher.", proxima: "c5_2b_3" },
    c5_2b_3: { quem: "ren", texto: "Depois da lasanha eu como o resto disso. Não joga fora.", proxima: "c5_34" },
    c5_2c_1: { quem: "eu", texto: "Da próxima vez eu faço uma coisa que preste. Prometo.", proxima: "c5_2c_2" },
    c5_2c_2: { quem: "ren", texto: "Próxima vez.", proxima: "c5_2c_3" },
    c5_2c_3: { tipo: "narracao", texto: "Ele repete as duas palavras devagar, como quem guarda uma coisa no bolso. Ela percebe o que falou. Próxima vez. Como se fosse ter outra. Ele percebe que ela percebeu. E não deixa ela voltar atrás.", proxima: "c5_2c_4" },
    c5_2c_4: { quem: "ren", texto: "Eu vou cobrar.", proxima: "c5_34" },

    // (todas as opções continuam aqui)
    c5_34: { cenario: "sala-sn-noite", tipo: "narracao", transicao: "tempo", legenda: "407, 20h30", texto: "Eles comem a lasanha no chão da sala, com os pratos em cima da mesinha de centro. A TV ligada sem som. Ele come devagar, do lado da boca que não está cortado. Ele come dois pedaços. E depois come o resto da coisa grudenta da panela, direto da panela, de propósito, olhando para ela.", proxima: "c5_35" },
    c5_35: { tipo: "narracao", texto: "E eles conversam. Muito. Mais do que ela já conversou com o Ren na vida inteira. Sobre a professora de geografia que sempre falta. Sobre o Takeo, que ela não sabia que ele achava “o único que não finge”. Sobre o livro.", proxima: "c5_36" },
    c5_36: { quem: "eu", texto: "Por que um homem ia morar sozinho numa ilha pra acender uma luz pra barco que ele nunca vê?", proxima: "c5_37" },
    c5_37: { quem: "ren", texto: "Porque alguém precisa saber onde fica a pedra. Senão bate.", proxima: "c5_38" },
    c5_38: { quem: "eu", texto: "Mas ele não ganha nada. Ninguém agradece.", proxima: "c5_39" },
    c5_39: { quem: "ren", texto: "Não precisa agradecer. Ele só precisa saber que o barco passou.", proxima: "c5_40" },
    c5_40: { tipo: "narracao", texto: "Ele fala do farol. Ela sabe que ele está falando do farol. Mas ele olha para ela quando fala “o barco passou”, só um segundo, e depois olha para a TV sem som.", proxima: "c5_41" },
    c5_41: { tipo: "pensamento", texto: "Ele não está falando do farol.", proxima: "c5_42" },
    c5_42: { quem: "eu", texto: "E você? Quem acende a luz pra você?", proxima: "c5_43" },
    c5_43: { tipo: "narracao", texto: "Ele demora. Pega o copo de água. Bebe. Coloca de volta na mesinha, exatamente no mesmo círculo molhado.", proxima: "c5_44" },
    c5_44: { quem: "ren", texto: "Ninguém. Eu sou o que fica na ilha.", proxima: "c5_45" },
    c5_45: { quem: "ren", texto: "...Mas essa semana alguém subiu seis andares sem corrimão pra ver se eu estava lá. Então talvez a ilha não seja tão longe.", proxima: "c5_46" },
    c5_46: { tipo: "narracao", texto: "Ele fala isso para a TV. Ela não consegue falar nada. O comercial muda. Uma propaganda de sabão em pó, sem som, com uma mulher sorrindo demais.", proxima: "c5_esc3" },

    // ▶ ESCOLHA 3 — A ilha
    c5_esc3: { escolhas: [
      { texto: "A. “Não é longe, Ren. Eu subo quantas vezes precisar.”", proxima: "c5_3a_1", pontos: {}, flags: ["Subo_quantas"] },
      { texto: "B. Não responder. Sentar do lado dele, encostada no sofá, ombro com ombro.", proxima: "c5_3b_1", pontos: {}, flags: ["Ombro_Ren"] },
      { texto: "C. “Você está flertando comigo, Ren?”", proxima: "c5_3c_1", pontos: {}, flags: ["Flertando_Ren"] }
    ]},
    c5_3a_1: { quem: "eu", texto: "Não é longe, Ren. Eu subo quantas vezes precisar.", proxima: "c5_3a_2" },
    c5_3a_2: { tipo: "narracao", texto: "Ele vira a cabeça. Olha para ela. Com o olho bom e o roxo. E fica olhando. Muito. Até ela desviar primeiro.", proxima: "c5_3a_3" },
    c5_3a_3: { quem: "ren", texto: "Cuidado com o que você promete. Eu lembro de tudo.", proxima: "c5_47" },
    c5_3b_1: { tipo: "narracao", texto: "Ela não responde. Ela levanta, dá a volta na mesinha e senta do lado dele, no chão, encostada no sofá. O ombro encosta no dele. Ele fica parado. Completamente parado. Ela sente ele prender a respiração e soltar devagar, por causa da costela.", proxima: "c5_3b_2" },
    c5_3b_2: { tipo: "narracao", texto: "Ninguém fala nada. A TV sem som. O relógio da cozinha. Depois de muito tempo, ele inclina a cabeça um centímetro. Não encosta. Só fica mais perto.", proxima: "c5_47" },
    c5_3c_1: { quem: "eu", texto: "Você está flertando comigo, Ren?", proxima: "c5_3c_2" },
    c5_3c_2: { tipo: "narracao", texto: "Ele não muda a cara. Nem um músculo. Continua olhando para a TV.", proxima: "c5_3c_3" },
    c5_3c_3: { quem: "ren", texto: "Eu estou falando de um livro.", proxima: "c5_3c_4" },
    c5_3c_4: { quem: "eu", texto: "Claro.", proxima: "c5_3c_5" },
    c5_3c_5: { quem: "ren", texto: "Se eu estivesse flertando, você ia saber. Eu não sou o tipo que fica na dúvida.", proxima: "c5_3c_6" },
    c5_3c_6: { tipo: "narracao", texto: "E aí ele olha para ela. Só um segundo. E o canto da boca sobe. E ela tem certeza absoluta de que ele está flertando.", proxima: "c5_47" },

    // (todas as opções continuam aqui)
    c5_47: { tipo: "narracao", transicao: "tempo", legenda: "407, 22h", texto: "Às dez, o despertador do celular dela toca. O remédio. Ela traz o comprimido e o copo de água. Ele toma olhando para ela, do jeito que a mãe mandou. Como criança. Com aquele meio sorriso torto.", proxima: "c5_48" },
    c5_48: { quem: "ren", texto: "Você faz igual ela. A cara de quem não vai sair dali até eu engolir.", proxima: "c5_49" },
    c5_49: { quem: "eu", texto: "Eu aprendi com a melhor.", proxima: "c5_50" },
    c5_50: { tipo: "narracao", texto: "Ele olha para ela um tempo. Depois para o livro no chão. Ele pega o livro. Abre numa página, perto do começo. A página que tem a orelha dobrada, onde ela parou ontem.", proxima: "c5_51" },
    c5_51: { quem: "ren", texto: "Você está na vinte e quatro.", proxima: "c5_52" },
    c5_52: { quem: "eu", texto: "Você disse pra não pular.", proxima: "c5_53" },
    c5_53: { quem: "ren", texto: "Eu disse. Mas hoje eu deixo. Uma vez.", proxima: "c5_54" },
    c5_54: { tipo: "narracao", texto: "Ele passa as páginas. Muitas. Para numa. Cinquenta. E entrega o livro aberto para ela, segurando com as duas mãos, como quem entrega uma coisa que pode quebrar.", proxima: "c5_55" },
    c5_55: { tipo: "narracao", texto: "Ela lê. Uma página só. O homem do farol, numa noite de tempestade, vê pela primeira vez um barco virar na direção da luz em vez de passar reto. Pela primeira vez, alguém vem até a ilha. E ele não sabe o que fazer. Ele nunca preparou nada para alguém chegar. Ele só preparou a luz.", proxima: "c5_56" },
    c5_56: { tipo: "narracao", texto: "Ela termina. Levanta os olhos. Ele está olhando para ela. Ele estava olhando o tempo todo enquanto ela lia.", proxima: "c5_57" },
    c5_57: { quem: "ren", texto: "É a minha favorita.", proxima: "c5_58" },
    c5_58: { tipo: "narracao", texto: "Só isso. Três palavras. E ele levanta, devagar, com a mão nas costelas, e vai para o banheiro escovar os dentes com a escova nova que a mãe dela deixou em cima da pia. Deixando ela sozinha na sala com a página cinquenta aberta no colo.", proxima: "c5_59" },
    c5_59: { tipo: "pensamento", texto: "Hoje o Kaito me beijou na frente da escola. Com três palavras e meio sorriso.", proxima: "c5_60" },
    c5_60: { tipo: "pensamento", texto: "E agora eu estou sentada no chão da minha sala, com o coração esquisito, por causa de uma página de um livro sobre um farol.", proxima: "c5_61" },
    c5_61: { tipo: "pensamento", texto: "Juízo, os dois. A minha mãe sabia.", proxima: "r_cam" },

    /* =================== ROTA — NOITE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "23h", sprite: null, texto: "No quarto, de luz apagada, o celular vibra.", proxima: "rk_02" },
    rk_02: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Dormindo?", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. “Não. Pensando no portão.”", proxima: "rk_a1", pontos: { kaito: 3 }, flags: ["Pensando_portao"] },
      { texto: "B. “Quase. Boa noite, Kaito.”", proxima: "rk_b1", pontos: { kaito: 2 }, flags: ["Quase_dormindo"] },
      { texto: "C. “Você disse que agora todo mundo sabe. Sabe o quê?”", proxima: "rk_c1", pontos: { kaito: 3 }, flags: ["Sabe_o_que"] }
    ]},
    rk_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Não. Pensando no portão.", proxima: "rk_a2" },
    rk_a2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu também.", proxima: "rk_a3" },
    rk_a3: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Amanhã de novo.", proxima: "r_fim" },
    rk_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Quase. Boa noite, Kaito.", proxima: "rk_b2" },
    rk_b2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Boa noite. Tranca a porta.", proxima: "r_fim" },
    rk_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Você disse que agora todo mundo sabe. Sabe o quê?", proxima: "rk_c2" },
    rk_c2: { tipo: "narracao", texto: "Lido. Digitando. Para. Digitando.", proxima: "rk_c3" },
    rk_c3: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Que é você.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "22h30", sprite: null, texto: "Às dez e meia, uma mensagem do Takeo.", proxima: "rt_02" },
    rt_02: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Eu vi na saída. O Kaito. Eu não vou falar nada. Eu só queria saber se você está bem. Do jeito que eu sempre pergunto.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. “Eu estou bem, Takeo. Obrigada por perguntar do seu jeito.”", proxima: "rt_a1", pontos: { takeo: 3 }, flags: ["Seu_jeito_Takeo"] },
      { texto: "B. “Foi na testa, Takeo. Só na testa.”", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["So_testa"] },
      { texto: "C. “Amanhã você me espera na esquina? A pé?”", proxima: "rt_c1", pontos: { takeo: 4 }, flags: ["Esquina_Takeo"] }
    ]},
    rt_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu estou bem, Takeo. Obrigada por perguntar do seu jeito.", proxima: "rt_a2" },
    rt_a2: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "É o único jeito que eu sei. Boa noite.", proxima: "r_fim" },
    rt_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Foi na testa, Takeo. Só na testa.", proxima: "rt_b2" },
    rt_b2: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Eu sei. Eu vi. Eu fiquei aliviado e depois fiquei com vergonha de ficar aliviado. Boa noite.", proxima: "r_fim" },
    rt_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Amanhã você me espera na esquina? A pé?", proxima: "rt_c2" },
    rt_c2: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Seis e quarenta. Na esquina. Com dois braços.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "22h30", sprite: null, texto: "Às dez e meia, uma mensagem do Blake.", proxima: "rb_02" },
    rb_02: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Ele te beijou na testa na frente da escola. O Kaito nunca fez isso com ninguém. Eu conheço ele há muito tempo.", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. “E você, Blake? O que você achou?”", proxima: "rb_a1", pontos: { blake: 3 }, flags: ["Achou_Blake"] },
      { texto: "B. “Foi só na testa.”", proxima: "rb_b1", pontos: { blake: 2 }, flags: ["Testa_Blake"] },
      { texto: "C. “Amanhã eu sento do seu lado. Pelo sanduíche.”", proxima: "rb_c1", pontos: { blake: 3 }, flags: ["Sanduiche_amanha"] }
    ]},
    rb_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "E você, Blake? O que você achou?", proxima: "rb_a2" },
    rb_a2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu achei que eu devia ter sentado mais longe no banco essa semana. Boa noite.", proxima: "r_fim" },
    rb_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Foi só na testa.", proxima: "rb_b2" },
    rb_b2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Com o Kaito, testa é muita coisa.", proxima: "r_fim" },
    rb_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Amanhã eu sento do seu lado. Pelo sanduíche.", proxima: "rb_c2" },
    rb_c2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Pelo sanduíche. Tá. Eu aceito o motivo.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "22h30", sprite: null, texto: "Às dez e meia, uma mensagem do Ryuji.", proxima: "rr_02" },
    rr_02: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Eu vi o da testa. Eu estou bem. Eu estou esquisito mas bem. Eu comi seis coxinhas. Isso é normal.", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. “Ryuji. Seis coxinhas não é normal.”", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Seis_coxinhas"] },
      { texto: "B. “Você continua sendo meu Ryuji. Isso não muda.”", proxima: "rr_b1", pontos: { ryuji: 4 }, flags: ["Meu_Ryuji"] },
      { texto: "C. Ligar pra ele.", proxima: "rr_c1", pontos: { ryuji: 3 }, flags: ["Ligou_Ryuji_55"] }
    ]},
    rr_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Ryuji. Seis coxinhas não é normal.", proxima: "rr_a2" },
    rr_a2: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Pra mim é! Eu sou especial! Boa noite!!", proxima: "r_fim" },
    rr_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Você continua sendo meu Ryuji. Isso não muda.", proxima: "rr_b2" },
    rr_b2: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "...“Meu Ryuji.” Eu vou dormir com isso. Boa noite.", proxima: "r_fim" },
    rr_c1: { tipo: "narracao", texto: "Ela liga baixinho, para o Ren não ouvir da sala. O Ryuji atende e fala sem parar por dez minutos sobre pombos espiões. Ela ri baixinho. Ele desliga dizendo “eu estou bem, eu juro”. Ela acredita um pouco.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "22h30", sprite: null, texto: "Às dez e meia, uma mensagem do Victor. Uma foto do Caramelo deitado de barriga pra cima, com a língua de fora.", proxima: "rv_02" },
    rv_02: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Combinado é combinado. Só Caramelo. Ele está assim desde que eu contei pra ele do beijo na testa. Em choque. Eu também.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. “Fala pro Caramelo que foi só na testa.”", proxima: "rv_a1", pontos: { victor: 3 }, flags: ["Fala_Caramelo"] },
      { texto: "B. “E você, Victor? Também em choque?”", proxima: "rv_b1", pontos: { victor: 4 }, flags: ["Choque_Victor"] },
      { texto: "C. Mandar uma foto do próprio pé de meia, pra ele ter alguma coisa de volta.", proxima: "rv_c1", pontos: { victor: 3 }, flags: ["Foto_meia"] }
    ]},
    rv_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Fala pro Caramelo que foi só na testa.", proxima: "rv_a2" },
    rv_a2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Eu falei. Ele virou de lado. Ele está processando. Boa noite.", proxima: "r_fim" },
    rv_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "E você, Victor? Também em choque?", proxima: "rv_b2" },
    rv_b2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Um pouco. Abanando o rabo mesmo assim. Sempre.", proxima: "r_fim" },
    rv_c1: { tipo: "narracao", texto: "Ela manda uma foto do próprio pé, de meia listrada, em cima do cobertor. Ele responde com sete pontos de interrogação. Depois: “essa é a foto mais estranha que eu já recebi e eu vou guardar pra sempre”.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Meia-noite", sprite: null, texto: "Meia-noite. Ela está deitada. A casa em silêncio. A mãe no plantão. A porta do quarto trancada, porque o Kaito mandou, e porque a mãe mandou, e porque ela mesma achou melhor.", proxima: "f_02" },
    f_02: { tipo: "narracao", texto: "Pela fresta da porta, a luz da sala ainda está acesa. Fraca. A luz do abajur do lado do sofá. Ele está acordado. Lendo, provavelmente. Ou só deixando a luz acesa.", proxima: "f_03" },
    f_03: { tipo: "pensamento", texto: "Alguém precisa saber onde fica a pedra. Senão bate.", proxima: "f_04" },
    f_04: { tipo: "narracao", texto: "Ela fecha os olhos. E dorme com a luz da sala entrando pela fresta. Acesa a noite inteira.", proxima: "ep_fim" },

    // Fim do Capítulo 54 (crie a entrada "capitulo54" em dados/capitulos.js).
    ep_fim: { fim: "capitulo54" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 55 (anotações do roteiro)
 *  • O KAITO VOLTOU AO NORMAL: poucas palavras ("Sobe." "Ryuji. Come." "Me espera." "Pronto." "Que é você."), meio sorriso,
 *    cara de tédio, age em vez de falar.
 *  • DEPOIS DA AULA: ele atravessou a rua (ele nunca atravessa).
 *    Rota Kaito: BEIJOU ela na calçada, na frente da escola inteira. "Pronto." / "Agora todo mundo sabe." (Rota: "Que é você.")
 *    Outras rotas: beijo rápido na TESTA. "Por ter esperado."
 *    Mio quase desmaiou; Hana não conseguiu segurar a caneta; Reina: "Finalmente."
 *    Se o Kaito sabe do Ren: "Ainda tá aí?" / "Qualquer coisa, liga." / "Tranca a porta."
 *  • O Blake: "A sua mãe melhorou da costela?" (ele sabe que não é a mãe). A Serena sozinha, sem amigas, sem máscara; foi embora.
 *  • A MÃE de PLANTÃO a noite inteira (volta 8h). "O menino tomou o remédio às 14h. Próximo às 22h. Juízo, os dois."
 *    O Ren fica até poder voltar pra casa (ordem da mãe).
 *  • A NOITE NO 407 (só os dois):
 *    "Você está vermelha." / "Quarto andar não deixa ninguém assim." / "Você ronca. Parece gato."
 *    A coisa grudenta (arroz → risoto → massa queimada): "Está horrível." / "Ninguém nunca fez comida pra mim. Eu vou comer tudo."
 *    (escolhas: comeram juntos na panela / "não joga fora" / "Próxima vez." "Eu vou cobrar.")
 *    O farol: "Alguém precisa saber onde fica a pedra." / "Ele só precisa saber que o barco passou." / "Eu sou o que fica na ilha.
 *    Mas essa semana alguém subiu seis andares sem corrimão... talvez a ilha não seja tão longe."
 *    ("Você está flertando comigo?" / "Eu estou falando de um livro." / "Se eu estivesse flertando, você ia saber.")
 *    PÁGINA CINQUENTA: um barco vira na direção da luz; alguém chega na ilha; o homem só preparou a luz. "É a minha favorita."
 *    O Ren deixou a luz da sala acesa a noite inteira.
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 O ronco · 2 A panela · 3 A ilha · Rota (1 por rota)
 *
 * FLAGS NOVAS
 *  Almofada_Ren · Ouvindo_dormir · Fala_dormindo · Comeu_panela · Espera_lasanha · Proxima_vez
 *  Subo_quantas · Ombro_Ren · Flertando_Ren · Pensando_portao · Quase_dormindo · Sabe_o_que
 *  Seu_jeito_Takeo · So_testa · Esquina_Takeo · Achou_Blake · Testa_Blake · Sanduiche_amanha
 *  Seis_coxinhas · Meu_Ryuji · Ligou_Ryuji_55 · Fala_Caramelo · Choque_Victor · Foto_meia
 */