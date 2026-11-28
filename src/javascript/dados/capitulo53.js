/*
 * =====================================================================
 *  CAPÍTULO 53 — 407
 *  Quarta-feira à noite, continuação direta do Capítulo 52.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Bloco de rota no fim da noite.
 *
 *  CONTEXTO (Cap. 52)
 *    • O Ren dormindo no sexto andar do prédio abandonado desde sábado. Olho roxo, costelas machucadas. O pai.
 *    • "Não conta pra eles." Os meninos da gangue do Kaito não gostam do Ren. Ninguém sabe.
 *    • O Kaito esperando o "cheguei".
 *
 *  O QUE ACONTECE
 *    • Ela leva o Ren pra casa. Na esquina, vê a moto do Kaito na frente do prédio. Manda o Ren entrar pela PORTA DE TRÁS
 *      (garagem, escada de serviço) e esperar na porta do 407 (o apartamento dela).
 *    • Na frente do prédio, o Kaito. ESCOLHA GRANDE:
 *        A) A VERDADE: conta que é o Ren, o pai, o prédio, a loja do tio ("ele mandou os caras pararem porque eu pedi").
 *           Pede segredo: "Não conta pros meninos." E: "Se quiser, pode ficar hoje também." → o Kaito fica.
 *        B) MENTIR: "Eu estava com a Mio." → o Kaito vai embora.
 *    • No 407: a mãe abre a porta e encontra o Ren. Ela cuida. O Ren fica parado quando vê a mãe dela.
 *      (Se o Kaito ficou: o Kaito e o Ren na mesma sala. "...Obrigado." / "Não foi por você." / "Eu sei.")
 *    • Sofá pro Ren, colchonete pro Kaito (se ficou). "Ninguém entra no quarto dela."
 *    • Bloco de rota.
 *
 *  FLAGS CRIADAS AQUI (usar depois)
 *    Contou_Kaito_Ren (= o Kaito sabe e dormiu no 407) · Mentiu_Kaito_Ren
 *
 *  REGRAS
 *    • Os meninos (Blake, Ryuji, Victor, Takeo) NÃO sabem. Segredo.
 *    • Sem xadrez no Ren. O Ren não manda mensagem. Fala pouco. Sem narrar roupa. Sem flashback.
 *    • Sem repetir as muletas antigas (o nome do térreo, a fita, a piada da escola).
 *
 *  PERSONAGENS
 *    Ren, Kaito, Mãe, Mio (mensagem), Takeo, Blake, Ryuji, Victor (mensagens / rota).
 *    Sem sprite / rótulo: Ren, Mãe, Porteiro.
 *
 *  CENÁRIOS
 *    beco-mercado (rua) · apartamento (frente do prédio / dentro do 407) · quarto-sn
 *
 *  Crie a entrada "capitulo53" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo53", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — DESCER =================== */
    c1_01: { tipo: "narracao", cenario: "predio-abandonado-topo", transicao: "tempo", legenda: "Quarta, 18h50 — Cena 1", sprite: "ren", texto: "O sexto andar está quase escuro. Só a luz da estação lá embaixo, laranja, subindo pelos buracos do concreto. O Ren está sentado no cobertor, com a mochila no colo, olhando para ela. Esperando ela desistir.", proxima: "c1_02" },
    c1_02: { quem: "eu", texto: "Levanta. Você vai dormir na minha casa hoje.", proxima: "c1_03" },
    c1_03: { tipo: "narracao", texto: "Ele não se mexe. O olho bom olhando para ela, o roxo fechado pela metade.", proxima: "c1_04" },
    c1_04: { quem: "ren", texto: "Na sua casa.", proxima: "c1_05" },
    c1_05: { quem: "eu", texto: "Na minha casa. No sofá. Com comida de verdade. E gelo nessa costela. E uma parede de cada lado. Quatro paredes, Ren. Eu contei.", proxima: "c1_06" },
    c1_06: { quem: "ren", texto: "A sua mãe.", proxima: "c1_07" },
    c1_07: { quem: "eu", texto: "A minha mãe dá um jeito. Ela sempre dá.", proxima: "c1_08" },
    c1_08: { tipo: "narracao", texto: "Ele fica muito tempo em silêncio. Lá embaixo, um trem passa. Os trilhos fazem barulho de metal comprido. Quando o barulho acaba, ele fala.", proxima: "c1_09" },
    c1_09: { quem: "ren", texto: "Só hoje.", proxima: "c1_10" },
    c1_10: { quem: "eu", texto: "Só hoje. Amanhã a gente vê.", proxima: "c1_11" },
    c1_11: { tipo: "narracao", texto: "Ele levanta. Devagar. Com a mão nas costelas. A careta escapa e ele não esconde. Ela pega a mochila dele antes que ele pegue. Ele abre a boca para reclamar. Ela olha para ele. Ele fecha a boca.", proxima: "c1_12" },
    c1_12: { tipo: "narracao", texto: "Na escada sem corrimão, ele desce na frente, apoiado na parede. Ela vai atrás, com a mochila e o cobertor dobrado embaixo do braço. Em cada andar, ele para para respirar. Ela não fala nada. Ela só para junto.", proxima: "c1_13" },
    c1_13: { cenario: "rua-noite", tipo: "narracao", texto: "Na rua, ele anda devagar. Mancando um pouco do lado direito. Ela anda do lado, a um braço de distância, pronta para segurar se ele tropeçar. Ele não tropeça. Ele não deixaria.", proxima: "c1_14" },
    c1_14: { tipo: "narracao", texto: "Trinta minutos de caminhada que viram cinquenta. Eles não conversam. Uma vez, numa esquina, ele para, encosta num poste e fecha os olhos. Ela espera. Ele abre. Continua.", proxima: "c1_15" },
    c1_15: { tipo: "pensamento", texto: "Ele não reclama. Nem uma vez. Ele deve estar acostumado a doer sem reclamar.", proxima: "c2_01" },

    /* =================== CENA 2 — A ESQUINA =================== */
    c2_01: { cenario: "frente-casa-sn-noite", tipo: "narracao", transicao: "tempo", legenda: "Quarta, 19h45 — Cena 2", sprite: null, texto: "Na esquina da rua dela, ela para. De repente. O Ren para junto.", proxima: "c2_02" },
    c2_02: { sprite: "kaito", tipo: "narracao", texto: "Na frente do prédio, embaixo do poste, a moto. E o Kaito, sentado nela, de braços cruzados, olhando para a porta do prédio. Com o capacete vermelho pendurado no guidão. Com uma xícara de café do porteiro equilibrada no tanque.", proxima: "c2_03" },
    c2_03: { tipo: "pensamento", texto: "Ele está esperando. Desde as seis e meia. Ele disse que ia esperar e esperou.", proxima: "c2_04" },
    c2_04: { sprite: "ren", tipo: "narracao", texto: "O Ren vê também. O corpo dele muda inteiro. Os ombros sobem. A mão sai das costelas e vai para o bolso. A cara fecha. O Ren de antes, por um segundo, aparece por cima do Ren de agora.", proxima: "c2_05" },
    c2_05: { quem: "ren", texto: "Eu volto pro prédio.", proxima: "c2_06" },
    c2_06: { quem: "eu", texto: "Não volta.", proxima: "c2_07" },
    c2_07: { cenario: "rua-padaria-noite", tipo: "narracao", texto: "Ela puxa ele para trás da parede da padaria da esquina, fora da luz do poste. Pensa rápido.", proxima: "c2_08" },
    c2_08: { quem: "eu", texto: "Escuta. Dá a volta no quarteirão. Na rua de trás, tem o portão da garagem do prédio. Fica sempre meio aberto, o porteiro nunca fecha. Entra por ali. Do lado do depósito do lixo tem uma porta de ferro. Escada de serviço.", proxima: "c2_09" },
    c2_09: { quem: "eu", texto: "Sobe até o quarto andar. Sete. Quatrocentos e sete. Espera na porta. Ninguém usa aquela escada. Ninguém vai te ver.", proxima: "c2_10" },
    c2_10: { quem: "ren", texto: "...407.", proxima: "c2_11" },
    c2_11: { quem: "eu", texto: "407. Se a minha mãe abrir a porta antes de eu chegar, fala que é da escola. Fala que é meu amigo.", proxima: "c2_12" },
    c2_12: { tipo: "narracao", texto: "Ele olha para ela quando ela fala “amigo”. Um segundo. Depois pega a mochila da mão dela, devagar, sem deixar ela segurar mais.", proxima: "c2_13" },
    c2_13: { quem: "ren", texto: "E você?", proxima: "c2_14" },
    c2_14: { quem: "eu", texto: "Eu vou pela frente. Ele está esperando eu chegar.", proxima: "c2_15" },
    c2_15: { sprite: null, tipo: "narracao", texto: "O Ren olha por cima do ombro dela, para a moto embaixo do poste. Para o Kaito. Depois para ela. E não fala nada. Vira e vai, mancando, pela calçada escura, até sumir na esquina de trás.", proxima: "c2_16" },
    c2_16: { tipo: "pensamento", texto: "Eu tenho uns dois minutos até ele chegar lá em cima. E eu não sei o que eu vou falar.", proxima: "c3_01" },

    /* =================== CENA 3 — O KAITO =================== */
    c3_01: { tipo: "narracao", cenario: "frente-casa-sn-noite", transicao: "tempo", legenda: "Cena 3", sprite: "kaito", texto: "Ela sai de trás da padaria e anda até o prédio. Ele vê ela antes de ela chegar na luz do poste. Levanta da moto tão rápido que a xícara de café do porteiro cai do tanque e quebra na calçada. Ele nem olha.", proxima: "c3_02" },
    c3_02: { quem: "eu", texto: "Cheguei.", proxima: "c3_03" },
    c3_03: { quem: "kaito", texto: "Eu estou vendo.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", texto: "Ele olha para ela. De cima a baixo. Do jeito que ele nunca olha, rápido, como quem confere se está tudo no lugar. A poeira de cimento no cabelo dela. A ferrugem laranja na palma da mão, do vergalhão. Os joelhos sujos de concreto.", proxima: "c3_05" },
    c3_05: { tipo: "narracao", texto: "Ele não pergunta onde ela estava. Ele prometeu. Ela vê ele segurar a pergunta dentro da boca, com força. Ele pergunta outra coisa.", proxima: "c3_06" },
    c3_06: { quem: "kaito", texto: "Você está machucada?", proxima: "c3_07" },
    c3_07: { quem: "eu", texto: "Não. Eu não.", proxima: "c3_08" },
    c3_08: { tipo: "narracao", texto: "“Eu não.” Ela ouve a própria frase. Ele ouve também. Ela vê a palavra “eu” entrando nele, e ele entendendo que tem outra pessoa na história.", proxima: "c3_09" },
    c3_09: { quem: "kaito", texto: "...Quem está?", proxima: "c3_10" },
    c3_10: { tipo: "narracao", texto: "Silêncio. O poste zumbe. Lá em cima, em algum lugar da escada de serviço, um menino com as costelas quebradas está subindo devagar até o quarto andar.", proxima: "c3_11" },
    c3_11: { tipo: "pensamento", texto: "Item cinco. Perguntar antes de achar. Ele perguntou. E eu fiz ele prometer que ia escutar antes.", proxima: "c3_12" },
    c3_12: { tipo: "pensamento", texto: "Se eu mentir, eu sou igual a ele na semana da foto. Decidindo sozinha o que o outro pode saber.", proxima: "c3_13" },
    c3_13: { tipo: "pensamento", texto: "Se eu contar, eu quebro a promessa que eu fiz pro Ren. E o Kaito odeia o Ren. Todos eles odeiam.", proxima: "c3_esc1" },

    // ▶ ESCOLHA 1 — A verdade ou a mentira
    c3_esc1: { escolhas: [
      { texto: "A. Contar a verdade. Tudo. E pedir segredo.", proxima: "v_01", pontos: { kaito: 4 }, flags: ["Contou_Kaito_Ren"] },
      { texto: "B. Mentir. “Ninguém. Eu estava com a Mio. Ela caiu de bicicleta.”", proxima: "m_01", pontos: { kaito: 1 }, flags: ["Mentiu_Kaito_Ren"] }
    ]},

    /* ----- A) A VERDADE ----- */
    v_01: { quem: "eu", texto: "O Ren.", proxima: "v_02" },
    v_02: { tipo: "narracao", texto: "A cara dele muda. Não de uma vez. Devagar, como uma nuvem passando na frente do sol. O maxilar fecha. Os ombros sobem. O Kaito de sexta, do posto, aparece por um segundo.", proxima: "v_03" },
    v_03: { quem: "kaito", texto: "O Ren.", proxima: "v_04" },
    v_04: { quem: "eu", texto: "Você prometeu que ia escutar antes. Escuta.", proxima: "v_05" },
    v_05: { tipo: "narracao", texto: "Ele fica parado. Os punhos fechados do lado do corpo. Mas fica. E escuta.", proxima: "v_06" },
    v_06: { quem: "eu", texto: "A loja do seu tio. Os caras na porta. Eles sumiram na sexta. O tio está cantando. Você me perguntou se eu sabia de alguma coisa.", proxima: "v_07" },
    v_07: { quem: "eu", texto: "Eu sabia. Eu pedi pro Ren. Na sexta, depois do ultimato. Eu pedi pra ele parar de atormentar a loja. E ele parou. Ele mandou os caras dele pararem. Sem nada em troca.", proxima: "v_08" },
    v_08: { tipo: "narracao", texto: "O Kaito pisca. Os punhos abrem um pouco.", proxima: "v_09" },
    v_09: { quem: "eu", texto: "E a ordem de ir na loja não era dele. Era do pai dele. E o pai dele não gostou. A marca no rosto, no sábado. Foi o pai. Na segunda, foi pior. Ele não pode ir pra casa. Ele estava dormindo num prédio abandonado, no sexto andar, sem parede, desde sábado. Com as costelas quebradas.", proxima: "v_10" },
    v_10: { quem: "eu", texto: "Por causa da loja do seu tio. Porque eu pedi.", proxima: "v_11" },
    v_11: { tipo: "narracao", texto: "Silêncio. Comprido. O Kaito olha para a calçada. Para os cacos da xícara do porteiro. Para a moto. Para ela. Ela vê ele fazendo a conta. A mesma conta que ele fez na corrida da educação física, quando falou “ninguém decide ser outra pessoa de graça”.", proxima: "v_12" },
    v_12: { quem: "kaito", texto: "...Ele apanhou do pai. Por causa do tio.", proxima: "v_13" },
    v_13: { quem: "eu", texto: "Por causa do tio.", proxima: "v_14" },
    v_14: { quem: "kaito", texto: "Onde ele está agora?", proxima: "v_15" },
    v_15: { quem: "eu", texto: "Subindo a escada de serviço. Pro 407. Eu mandei ele entrar por trás. Porque eu vi você aqui.", proxima: "v_16" },
    v_16: { tipo: "narracao", texto: "Ele olha para cima. Para o quarto andar. Para a janela da sala dela, com a luz acesa. Ele não fala nada por muito tempo.", proxima: "v_17" },
    v_17: { quem: "eu", texto: "Kaito. Não conta pros meninos. Pra nenhum. Nem pro Blake. Eles não vão entender. Eles vão achar que eu escolhi um lado.", proxima: "v_18" },
    v_18: { quem: "kaito", texto: "Você escolheu um lado?", proxima: "v_19" },
    v_19: { quem: "eu", texto: "Eu escolhi não deixar ninguém dormir num prédio sem parede. Esse é o meu lado.", proxima: "v_20" },
    v_20: { tipo: "narracao", texto: "Ele fecha os olhos. Respira fundo. Abre. E ela vê, na cara dele, que ele não gosta. Ele não gosta nem um pouco. Ele não gosta do Ren. E vê também que ele não vai deixar de gostar dela por causa disso.", proxima: "v_21" },
    v_21: { quem: "kaito", texto: "Eu não conto. Pra ninguém.", proxima: "v_22" },
    v_22: { tipo: "narracao", texto: "Ela solta o ar. E aí, antes de pensar, fala.", proxima: "v_23" },
    v_23: { quem: "eu", texto: "Se quiser... pode ficar hoje também.", proxima: "v_24" },
    v_24: { tipo: "narracao", texto: "Ele olha para ela. Surpreso. Ela também está surpresa. A frase saiu sozinha. Mas ela não retira.", proxima: "v_25" },
    v_25: { quem: "kaito", texto: "Na sua casa. Com o Ren.", proxima: "v_26" },
    v_26: { quem: "eu", texto: "Com o Ren. E com a minha mãe. E com o sofá e um colchonete. Você não precisa. Mas você disse que ia ficar a noite inteira aqui embaixo na moto. Lá em cima tem café que não quebra.", proxima: "v_27" },
    v_27: { tipo: "narracao", texto: "Ele quase ri. Olha para os cacos da xícara. Depois olha para a janela do quarto andar. E faz que sim, devagar.", proxima: "v_28" },
    v_28: { quem: "kaito", texto: "Eu fico. Não por ele. Eu não vou deixar você sozinha com o Ren numa casa. Mesmo com a sua mãe. Mesmo com ele quebrado.", proxima: "v_29" },
    v_29: { quem: "eu", texto: "Ele não vai fazer nada, Kaito.", proxima: "v_30" },
    v_30: { quem: "kaito", texto: "Eu sei. Eu acho que eu sei. É por isso que eu vou ficar. Pra ver.", proxima: "v_31" },
    v_31: { tipo: "narracao", texto: "Ele pega o capacete vermelho do guidão. Tranca a moto. Fala alguma coisa com o porteiro, que faz que sim e começa a varrer os cacos da xícara. E entra no prédio com ela, pela frente.", proxima: "c4_01" },

    /* ----- B) A MENTIRA ----- */
    m_01: { quem: "eu", texto: "Ninguém. Eu estava com a Mio. Ela caiu de bicicleta. Na rua de trás da estação. Machucou o joelho. Eu fiquei com ela até a mãe dela chegar.", proxima: "m_02" },
    m_02: { tipo: "narracao", texto: "A mentira sai inteira. Rápida. Com detalhes. Ela fica com medo de como sai fácil.", proxima: "m_03" },
    m_03: { tipo: "narracao", texto: "O Kaito olha para ela. Ela vê ele olhar para a ferrugem na mão dela. Bicicleta não deixa ferrugem na mão. Ele não fala isso.", proxima: "m_04" },
    m_04: { quem: "kaito", texto: "...Tá. A Mio está bem?", proxima: "m_05" },
    m_05: { quem: "eu", texto: "Está. Só o joelho.", proxima: "m_06" },
    m_06: { quem: "kaito", texto: "Que bom.", proxima: "m_07" },
    m_07: { tipo: "narracao", texto: "Ele pega o capacete vermelho do guidão. Fica olhando para ele, nas mãos. Depois pendura de volta.", proxima: "m_08" },
    m_08: { quem: "kaito", texto: "Eu vou indo, então. Você chegou. Era isso que eu precisava saber.", proxima: "m_09" },
    m_09: { tipo: "narracao", texto: "Ele sobe na moto. Coloca o capacete dele. Antes de ligar, ele vira a cabeça para ela.", proxima: "m_10" },
    m_10: { quem: "kaito", texto: "Amanhã. Seis e cinquenta. Se você quiser.", proxima: "m_11" },
    m_11: { tipo: "narracao", texto: "E vai. Devagar. Ela fica parada na calçada, olhando a moto virar a esquina. A mesma esquina onde, dois minutos atrás, o Ren sumiu mancando.", proxima: "m_12" },
    m_12: { tipo: "pensamento", texto: "Ele acreditou. Ou fingiu que acreditou. Com o Kaito, agora, eu não sei mais qual dos dois.", proxima: "m_13" },
    m_13: { tipo: "pensamento", texto: "Eu cobrei dele uma semana inteira por não me perguntar. E agora ele perguntou e eu menti.", proxima: "m_14" },
    m_14: { tipo: "narracao", texto: "Ela entra no prédio. Sobe a escada da frente, de dois em dois degraus.", proxima: "c4_01" },

    /* =================== CENA 4 — O 407 =================== */
    c4_01: { tipo: "narracao", cenario: "sala-sn-noite", transicao: "tempo", legenda: "407 — Cena 4", sprite: "ren", texto: "No quarto andar, a porta do 407 está aberta. A luz da sala acesa, saindo pelo corredor. E, na porta, a mãe dela, de avental, com um pano de prato no ombro. E, na frente da mãe dela, de pé, encostado na parede do corredor, com a mochila nas costas, o Ren.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "A mãe dela está olhando para o rosto dele. Para o olho roxo. Para a boca aberta. Para a mão dele nas costelas. Ela não fala nada. Ela só olha, com a mão parada no batente da porta.", proxima: "c4_03" },
    c4_03: { tipo: "narracao", texto: "E o Ren está olhando para a mãe dela. Parado. Muito parado. Do jeito que ele nunca fica parado. Como se tivesse visto um fantasma. O olho bom arregalado. A boca meio aberta.", proxima: "c4_04" },
    c4_04: { tipo: "pensamento", texto: "Por que ele está olhando assim pra minha mãe?", proxima: "c4_05" },
    c4_05: { sprite: "mae", quem: "mae", texto: "...Filha. Esse menino disse que é da sua escola. Que é seu amigo. Que você mandou ele esperar aqui.", proxima: "c4_06" },
    c4_06: { quem: "eu", texto: "Mandei, mãe. Ele é meu amigo. Ele não pode ir pra casa hoje.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", texto: "A mãe olha para ela. Depois para o Ren. Para o olho dele. Ela não pergunta por que ele não pode ir para casa. Ela sabe. Ela olha para aquele olho e sabe, do jeito que as mães sabem.", proxima: "c4_08" },
    c4_08: { quem: "mae", texto: "Entra. Entra, menino. Senta. Não, não senta no chão, senta no sofá. Eu vou pegar gelo. E você vai comer. Você comeu hoje? Não responde. Eu sei que não comeu.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "O Ren não se mexe. Ele continua olhando para ela. A mãe para no meio do caminho da cozinha e olha de volta.", proxima: "c4_10" },
    c4_10: { quem: "mae", texto: "O que foi, menino? Eu tenho cara de quem morde?", proxima: "c4_11" },
    c4_11: { sprite: "ren", quem: "ren", texto: "...Não, senhora. Desculpa.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", texto: "“Senhora.” O Ren falando “senhora”. Ele abaixa a cabeça e entra. Devagar. Senta na ponta do sofá, com a mochila no colo, como quem está numa sala de espera.", proxima: "c4_13" },
    c4_13: { caminhos: [
      { flag: "Contou_Kaito_Ren", proxima: "c4_k01" }
    ], proxima: "c4_20" },

    // ----- Se o Kaito ficou -----
    c4_k01: { tipo: "narracao", sprite: "kaito", texto: "E aí a mãe vê o Kaito, atrás dela, no corredor, com o capacete vermelho na mão.", proxima: "c4_k02" },
    c4_k02: { sprite: "mae", quem: "mae", texto: "O menino da moto! Você também? Hoje é festa? Ninguém me avisou que era festa!", proxima: "c4_k03" },
    c4_k03: { sprite: "kaito", quem: "kaito", texto: "Boa noite, senhora. Desculpa o horário. Eu... ela me convidou. Se a senhora deixar.", proxima: "c4_k04" },
    c4_k04: { tipo: "narracao", texto: "A mãe olha para o Kaito. Para o Ren no sofá. Para a filha no meio dos dois, com poeira de cimento no cabelo. Ela solta um suspiro comprido de mãe.", proxima: "c4_k05" },
    c4_k05: { sprite: "mae", quem: "mae", texto: "Dois. Dois meninos. Numa quarta-feira. Tá. Tá bom. Entra. Tira o tênis. O sofá é dele, que está machucado. Você fica no colchonete. E ninguém, NINGUÉM, entra no quarto dela. Entendido?", proxima: "c4_k06" },
    c4_k06: { quem: "kaito", texto: "Entendido, senhora.", proxima: "c4_k07" },
    c4_k07: { sprite: "kaito", tipo: "narracao", texto: "O Kaito entra. Tira o tênis. E para no meio da sala. O Ren, no sofá, levanta os olhos. Os dois se olham.", proxima: "c4_k08" },
    c4_k08: { tipo: "narracao", sprite: null, texto: "O ar da sala muda. Ela sente. A mãe sente também, da cozinha, e para de abrir o congelador.", proxima: "c4_k09" },
    c4_k09: { quem: "kaito", sprite: "kaito", texto: "Ren.", proxima: "c4_k10" },
    c4_k10: { sprite: "ren", quem: "ren", texto: "Kaito.", proxima: "c4_k11" },
    c4_k11: { tipo: "narracao", texto: "Silêncio. O Kaito olha para o olho roxo do Ren. Para a mão nas costelas. O Ren olha para o Kaito sem abaixar o olho, do jeito que ele olha para todo mundo. Nenhum dos dois se mexe.", proxima: "c4_k12" },
    c4_k12: { sprite: "kaito", quem: "kaito", texto: "O meu tio está cantando.", proxima: "c4_k13" },
    c4_k13: { sprite: "ren", quem: "ren", texto: "Eu sei. Canta mal.", proxima: "c4_k14" },
    c4_k14: { quem: "kaito", texto: "Canta muito mal.", proxima: "c4_k15" },
    c4_k15: { tipo: "narracao", texto: "Silêncio de novo. O Kaito fecha a mão em volta do capacete. Abre. Fecha. E fala, olhando para o chão, como quem arranca uma coisa que estava presa.", proxima: "c4_k16" },
    c4_k16: { sprite: "kaito", quem: "kaito", texto: "...Obrigado.", proxima: "c4_k17" },
    c4_k17: { tipo: "narracao", texto: "O Ren fica parado. Ele não esperava. Ninguém esperava. Ela, encostada na porta da cozinha, para de respirar.", proxima: "c4_k18" },
    c4_k18: { sprite: "ren", quem: "ren", texto: "Não foi por você.", proxima: "c4_k19" },
    c4_k19: { quem: "kaito", texto: "Eu sei. Foi por ela. Obrigado mesmo assim.", proxima: "c4_k20" },
    c4_k20: { tipo: "narracao", texto: "O Ren olha para ele mais um segundo. Depois abaixa os olhos para a mochila no colo. Faz que sim. Uma vez. Pequeno.", proxima: "c4_k21" },
    c4_k21: { tipo: "narracao", texto: "Não é paz. Ela sabe que não é paz. O Kaito não gosta do Ren. O Ren não gosta do Kaito. Mas, por um segundo, na sala pequena do 407, com a mãe dela segurando um saco de gelo na porta da cozinha, os dois não estão brigando. E isso já é mais do que ela achou que ia ver na vida.", proxima: "c4_20" },

    // (os dois caminhos continuam aqui)
    c4_20: { tipo: "narracao", sprite: null, texto: "A mãe volta com um saco de ervilha congelada enrolado num pano de prato. Entrega para o Ren. Ele não sabe o que fazer com aquilo. Ela pega a mão dele e coloca o saco nas costelas dele, do lado certo, e segura a mão dele em cima.", proxima: "c4_21" },
    c4_21: { sprite: "mae", quem: "mae", texto: "Assim. Vinte minutos. Depois tira, espera, coloca de novo. Se doer pra respirar fundo, amanhã você vai no posto. Eu levo. Não discute.", proxima: "c4_22" },
    c4_22: { tipo: "narracao", texto: "O Ren olha para a mão dela em cima da dele. Fica olhando muito tempo. A mãe tira a mão e volta para a cozinha, falando sozinha sobre o arroz.", proxima: "c4_23" },
    c4_23: { tipo: "narracao", texto: "Ela senta na outra ponta do sofá. O Ren não olha para ela. Ele está olhando para a porta da cozinha, por onde a mãe saiu.", proxima: "c4_24" },
    c4_24: { sprite: "ren", quem: "eu", texto: "Por que você ficou olhando pra minha mãe daquele jeito?", proxima: "c4_25" },
    c4_25: { tipo: "narracao", texto: "Ele não responde na hora. A mão aperta o saco de ervilha. Ele demora tanto que ela acha que ele não vai responder.", proxima: "c4_26" },
    c4_26: { quem: "ren", texto: "Ela é... parecida com você.", proxima: "c4_27" },
    c4_27: { tipo: "narracao", texto: "É só isso que ele fala. E volta a olhar para a porta da cozinha. Ela sabe que não é só isso. Ela vê na cara dele que não é só isso. Mas ele já fechou a porta por dentro. Hoje ela não vai abrir.", proxima: "c4_esc2" },

    // ▶ ESCOLHA 2 — No sofá
    c4_esc2: { escolhas: [
      { texto: "A. Não insistir. “Ela é. Todo mundo fala.”", proxima: "c4_2a_1", pontos: {}, flags: ["Nao_insistiu_mae"] },
      { texto: "B. “Ren. Você conhece a minha mãe?”", proxima: "c4_2b_1", pontos: {}, flags: ["Conhece_mae"] },
      { texto: "C. Ligar a TV. Deixar ele descansar sem precisar falar nada.", proxima: "c4_2c_1", pontos: {}, flags: ["TV_Ren"] }
    ]},
    c4_2a_1: { quem: "eu", texto: "Ela é. Todo mundo fala.", proxima: "c4_2a_2" },
    c4_2a_2: { tipo: "narracao", texto: "Ele faz que sim. Os ombros descem um pouco. Ela percebe que ele estava esperando ela perguntar mais. E que ficou aliviado quando ela não perguntou.", proxima: "c4_30" },
    c4_2b_1: { quem: "eu", texto: "Ren. Você conhece a minha mãe?", proxima: "c4_2b_2" },
    c4_2b_2: { tipo: "narracao", texto: "Ele fica parado. Completamente. Até a respiração para. Depois ele olha para ela, com o olho bom, e ela vê ali uma coisa muito antiga, muito escondida, que ele não vai mostrar hoje.", proxima: "c4_2b_3" },
    c4_2b_3: { quem: "ren", texto: "Não hoje. Por favor.", proxima: "c4_2b_4" },
    c4_2b_4: { tipo: "narracao", texto: "“Por favor.” De novo. Ela fecha a boca. Não pergunta mais.", proxima: "c4_30" },
    c4_2c_1: { tipo: "narracao", texto: "Ela pega o controle e liga a TV. Um programa de culinária qualquer. Ela abaixa o volume. Não fala nada. Ele também não. Os dois ficam olhando uma mulher na TV fazendo bolo, e, depois de cinco minutos, ela vê os ombros dele descerem, um centímetro de cada vez.", proxima: "c4_30" },

    // (todas as opções continuam aqui)
    c4_30: { tipo: "narracao", transicao: "tempo", legenda: "407, 21h", texto: "O jantar é arroz, feijão, ovo frito e a sopa de ontem esquentada. A mãe coloca o prato do Ren em cima da mesinha da sala, para ele não precisar levantar do sofá. O Ren come devagar. Do lado da boca que não está cortado. Ele come tudo. Ele come o segundo prato que a mãe coloca sem perguntar.", proxima: "c4_31" },
    c4_31: { caminhos: [
      { flag: "Contou_Kaito_Ren", proxima: "c4_31k" }
    ], proxima: "c4_32" },
    c4_31k: { tipo: "narracao", sprite: "kaito", texto: "O Kaito come na mesa da cozinha, com ela e a mãe. A mãe pergunta da moto, do tio, da loja. Ele responde tudo educado, com “sim, senhora” e “não, senhora”. A mãe fica encantada. Ela finge que não percebe a mãe piscando para ela por cima do prato.", proxima: "c4_31k2" },
    c4_31k2: { tipo: "narracao", sprite: null, texto: "Da mesa da cozinha, dá para ver o sofá. O Kaito olha para lá às vezes. Para o Ren comendo. Não com raiva. Com uma cara que ela não conhece. A cara de quem está vendo uma coisa que não queria ver, e não consegue parar de ver.", proxima: "c4_32" },
    c4_32: { tipo: "narracao", sprite: null, texto: "Às dez, a mãe arruma o sofá com lençol, travesseiro e o cobertor bom, não o velho que o Ren trouxe. O Ren fica olhando o cobertor bom como quem olha um presente.", proxima: "c4_33" },
    c4_33: { caminhos: [
      { flag: "Contou_Kaito_Ren", proxima: "c4_33k" }
    ], proxima: "c4_34" },
    c4_33k: { tipo: "narracao", texto: "No chão, do lado do sofá, a mãe estende um colchonete fino de academia e um travesseiro. O Kaito senta no colchonete. Fica a meio metro do Ren. Os dois olhando para o teto. A mãe olha para os dois, de braços cruzados.", proxima: "c4_33k2" },
    c4_33k2: { sprite: "mae", quem: "mae", texto: "Eu tenho o sono leve. Muito leve. Eu ouço até pensamento. Boa noite, meninos.", proxima: "c4_34" },
    c4_34: { quem: "mae", texto: "E você, filha. Cama. Amanhã a gente conversa. Sobre tudo.", proxima: "c4_35" },
    c4_35: { tipo: "narracao", texto: "“Sobre tudo.” A mãe fala olhando para ela, e depois para o Ren no sofá. Ela sabe o que “tudo” quer dizer. A mãe vai querer saber quem fez aquilo no rosto dele. E ela vai ter que decidir quanto contar.", proxima: "c5_01" },

    /* =================== CENA 5 — A NOITE =================== */
    c5_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "407, 23h — Cena 5", sprite: null, texto: "No quarto, de luz apagada, ela não dorme. Fica deitada ouvindo a casa. A geladeira. O relógio da cozinha. A respiração da mãe, do outro quarto, que não é a respiração de quem está dormindo. A mãe também está acordada.", proxima: "c5_02" },
    c5_02: { caminhos: [
      { flag: "Contou_Kaito_Ren", proxima: "c5_k01" }
    ], proxima: "c5_m01" },

    // ----- Com o Kaito na sala -----
    c5_k01: { tipo: "narracao", texto: "E da sala, pela fresta da porta, um silêncio. Dois meninos que se odeiam, a meio metro um do outro, no escuro. Ela fica esperando alguma coisa acontecer. Um barulho. Uma briga. Qualquer coisa.", proxima: "c5_k02" },
    c5_k02: { tipo: "narracao", texto: "Meia hora. Nada. Depois, uma voz. Baixa. O Kaito.", proxima: "c5_k03" },
    c5_k03: { quem: "kaito", texto: "...A costela. Dói muito?", proxima: "c5_k04" },
    c5_k04: { tipo: "narracao", texto: "Silêncio. Muito silêncio. Ela acha que o Ren não vai responder.", proxima: "c5_k05" },
    c5_k05: { quem: "ren", texto: "Só quando respira.", proxima: "c5_k06" },
    c5_k06: { quem: "kaito", texto: "Então não respira.", proxima: "c5_k07" },
    c5_k07: { tipo: "narracao", texto: "E aí ela ouve uma coisa que nunca achou que fosse ouvir. Um barulho curto, abafado, do sofá. O Ren rindo. Baixinho. E depois um “ai”, porque doeu rir. E depois, do colchonete, uma risada mais curta ainda. O Kaito.", proxima: "c5_k08" },
    c5_k08: { tipo: "narracao", texto: "Ninguém fala mais nada. Mas ela fica ouvindo o silêncio da sala até dormir, e não é um silêncio de briga. É só silêncio. De dois meninos cansados.", proxima: "r_cam" },

    // ----- Sem o Kaito -----
    c5_m01: { tipo: "narracao", texto: "Da sala, pela fresta da porta, ela ouve o Ren se mexendo no sofá. Devagar, por causa das costelas. Depois para. Depois mexe de novo. Ele não consegue dormir também.", proxima: "c5_m02" },
    c5_m02: { tipo: "narracao", texto: "O celular vibra em cima da mesinha. Ela pega. Uma mensagem. Do Kaito.", proxima: "c5_m03" },
    c5_m03: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "A Mio postou um story agora. Dançando na sala dela. Com os dois joelhos.", proxima: "c5_m04" },
    c5_m04: { tipo: "narracao", texto: "O coração dela para. Ela lê de novo. Ele não pergunta nada. Ele não acusa nada. Ele só manda isso. E fica digitando. Para. Digitando.", proxima: "c5_m05" },
    c5_m05: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu não vou perguntar. Você me pediu pra escutar antes. Eu vou esperar você querer contar. Mas eu queria que você soubesse que eu sei que não foi a Mio.", proxima: "c5_esc3" },

    // ▶ ESCOLHA 3 — A mensagem do Kaito
    c5_esc3: { escolhas: [
      { texto: "A. Contar a verdade agora, por mensagem. “É o Ren. Ele está no meu sofá. Não conta pra ninguém.”", proxima: "c5_3a_1", pontos: { kaito: 3 }, flags: ["Contou_depois"] },
      { texto: "B. “Desculpa. Amanhã eu te conto. Pessoalmente.”", proxima: "c5_3b_1", pontos: { kaito: 2 }, flags: ["Conta_amanha"] },
      { texto: "C. Não responder.", proxima: "c5_3c_1", pontos: {}, flags: ["Nao_respondeu_Mio"] }
    ]},
    c5_3a_1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "É o Ren. Ele está no meu sofá. O pai dele bateu nele. Por causa da loja do seu tio. Porque eu pedi. Não conta pra ninguém. Desculpa ter mentido.", proxima: "c5_3a_2" },
    c5_3a_2: { tipo: "narracao", texto: "Lido. Nenhuma resposta. Cinco minutos. Dez. Ela acha que ele foi dormir com raiva. Depois chega.", proxima: "c5_3a_3" },
    c5_3a_3: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu não conto. Obrigado por contar. Eu não gosto. Mas obrigado. Amanhã às seis e cinquenta eu estou aí. Eu quero ver ele. Só ver.", proxima: "r_cam" },
    c5_3b_1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Desculpa. Amanhã eu te conto. Pessoalmente.", proxima: "c5_3b_2" },
    c5_3b_2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Tá. Amanhã. Seis e cinquenta. Eu escuto antes.", proxima: "r_cam" },
    c5_3c_1: { tipo: "narracao", texto: "Ela não responde. Ela deixa a mensagem lida. E fica deitada no escuro, com o celular em cima do peito, sentindo o peso da mentira e o peso do menino no sofá da sala. Os dois pesando igual.", proxima: "r_cam" },

    /* =================== ROTA — QUARTA, MADRUGADA =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { caminhos: [
      { flag: "Kaito_dormiu_407", proxima: "rk_k01" },
      { flag: "Contou_Kaito_Ren", proxima: "rk_k01" }
    ], proxima: "rk_m01" },
    rk_k01: { roupa: null, tipo: "narracao", cenario: "cozinha-sn-noite", transicao: "tempo", legenda: "407, 2h10", sprite: "kaito", texto: "Duas da manhã. Ela levanta para tomar água. Na cozinha, no escuro, com a luz da geladeira aberta, o Kaito. Sentado no chão, de costas para a geladeira, com um copo de água na mão.", proxima: "rk_k02" },
    rk_k02: { quem: "kaito", texto: "Eu não consigo dormir com ele respirando do lado. Não é ele. Sou eu. Eu fico esperando ele fazer alguma coisa. Ele não faz nada. Ele só respira. Com dor.", proxima: "rk_k03" },
    rk_k03: { tipo: "narracao", texto: "Ela senta do lado dele no chão da cozinha. Encostada na geladeira. O ombro no ombro dele. A luz de dentro da geladeira iluminando os pés dos dois.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. “Obrigada por ter ficado, Kaito.”", proxima: "rk_a1", pontos: { kaito: 3 }, flags: ["Obrigada_ficou"] },
      { texto: "B. Pegar a mão dele no escuro. E não falar nada.", proxima: "rk_b1", pontos: { kaito: 4 }, flags: ["Mao_geladeira"] },
      { texto: "C. “Você falou obrigado pra ele. Eu nunca vou esquecer isso.”", proxima: "rk_c1", pontos: { kaito: 3 }, flags: ["Nunca_esquecer"] }
    ]},
    rk_a1: { quem: "eu", texto: "Obrigada por ter ficado, Kaito.", proxima: "rk_a2" },
    rk_a2: { quem: "kaito", texto: "Eu falei que ia te mostrar. Todo dia. Hoje foi assim que deu pra mostrar. Num colchonete. Do lado do Ren.", proxima: "r_fim" },
    rk_b1: { tipo: "narracao", texto: "Ela pega a mão dele no escuro. Ele vira a mão e entrelaça os dedos nos dela. Ninguém fala nada. A geladeira apita, reclamando da porta aberta. Ninguém fecha. Os dois ficam ali, de mão dada, até a geladeira desistir de apitar.", proxima: "r_fim" },
    rk_c1: { quem: "eu", texto: "Você falou obrigado pra ele. Eu nunca vou esquecer isso.", proxima: "rk_c2" },
    rk_c2: { quem: "kaito", texto: "Foi a palavra mais difícil que eu já falei. Mais difícil que o “não” na porta da Serena. Mas o tio está cantando. Então eu devia.", proxima: "r_fim" },
    rk_m01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quarta, 23h50", sprite: null, texto: "Quase meia-noite. O celular vibra de novo. O Kaito. Uma foto. A calçada na frente do prédio dela, vazia, embaixo do poste. Tirada agora.", proxima: "rk_m02" },
    rk_m02: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu voltei. Não vou subir. Eu só fiquei aqui um pouco. Pra saber que você está lá em cima. Seja lá com quem for. Boa noite.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quarta, 23h", sprite: null, texto: "Às onze, uma mensagem do Takeo.", proxima: "rt_02" },
    rt_02: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Você chegou? A Mio parou de gritar no grupo. Eu acho que isso quer dizer que você chegou. Amanhã seis e quarenta?", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. “Cheguei. Amanhã eu não sei, Takeo. Eu te aviso.”", proxima: "rt_a1", pontos: { takeo: 2 }, flags: ["Amanha_nao_sei"] },
      { texto: "B. “Cheguei. Seis e quarenta.”", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["Seis_quarenta_quinta"] },
      { texto: "C. “Takeo. Você já fez uma coisa certa que ninguém ia entender?”", proxima: "rt_c1", pontos: { takeo: 3 }, flags: ["Coisa_certa"] }
    ]},
    rt_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Cheguei. Amanhã eu não sei, Takeo. Eu te aviso.", proxima: "rt_a2" },
    rt_a2: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Tá. Eu fico pronto às seis e quarenta mesmo assim. Caso você avise que sim.", proxima: "r_fim" },
    rt_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Cheguei. Seis e quarenta.", proxima: "rt_b2" },
    rt_b2: { tipo: "narracao", texto: "Ela manda antes de pensar. Depois olha para a porta do quarto. Para a sala, onde o Ren está no sofá. Seis e quarenta. O Takeo na calçada. O Ren descendo pela escada de serviço. Ela vai ter que calcular tudo.", proxima: "r_fim" },
    rt_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Takeo. Você já fez uma coisa certa que ninguém ia entender?", proxima: "rt_c2" },
    rt_c2: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Já. Eu sumi um tempo. Ninguém entendeu. Eu não podia explicar. Quem gostava de mim esperou. Eu espero também, se for isso.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quarta, 23h", sprite: null, texto: "Às onze, uma mensagem do Blake.", proxima: "rb_02" },
    rb_02: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Passou uma hora. Passou mais de uma hora. Você chegou?", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. “Cheguei. Desculpa a demora.”", proxima: "rb_a1", pontos: { blake: 2 }, flags: ["Cheguei_Blake"] },
      { texto: "B. “Cheguei. E obrigada pela dica da costela.”", proxima: "rb_b1", pontos: { blake: 3 }, flags: ["Dica_costela"] },
      { texto: "C. “Blake. Se eu te pedir pra confiar em mim sem explicar, você confia?”", proxima: "rb_c1", pontos: { blake: 3 }, flags: ["Confia_Blake"] }
    ]},
    rb_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Cheguei. Desculpa a demora.", proxima: "rb_a2" },
    rb_a2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Tá. Eu vou dormir. Eu estava acordado só por isso.", proxima: "r_fim" },
    rb_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Cheguei. E obrigada pela dica da costela.", proxima: "rb_b2" },
    rb_b2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "De nada. Fala pra “sua mãe” não deitar do lado machucado.", proxima: "rb_b3" },
    rb_b3: { tipo: "narracao", texto: "As aspas. O Blake colocou aspas. Ela fica olhando para as aspas muito tempo.", proxima: "r_fim" },
    rb_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Blake. Se eu te pedir pra confiar em mim sem explicar, você confia?", proxima: "rb_c2" },
    rb_c2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Confio. Até eu descobrir. Aí eu decido se continuo.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quarta, 23h", sprite: null, texto: "Às onze, uma mensagem do Ryuji.", proxima: "rr_02" },
    rr_02: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Você chegou? Fala só “sim”. Igual antes. Eu gostei do “sim”.", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. “Sim.”", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Sim_Ryuji"] },
      { texto: "B. “Sim. Obrigada por não perguntar nada.”", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Obrigada_Ryuji_53"] },
      { texto: "C. Mandar um emoji de coxinha.", proxima: "rr_c1", pontos: { ryuji: 3 }, flags: ["Emoji_coxinha"] }
    ]},
    rr_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Sim.", proxima: "rr_a2" },
    rr_a2: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Ótimo! Boa noite! Eu vou dormir agora que eu sei!", proxima: "r_fim" },
    rr_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Sim. Obrigada por não perguntar nada.", proxima: "rr_b2" },
    rr_b2: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Eu sou surdo desde hoje à tarde. Eu falei. É sério. Surdo e mudo. Mas não cego. Boa noite.", proxima: "r_fim" },
    rr_c1: { tipo: "narracao", texto: "Ela manda um emoji de coxinha. Ele responde com vinte emojis de coxinha. Depois um de coração. Depois apaga o de coração. Depois manda de novo. Ela não comenta.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quarta, 23h", sprite: null, texto: "Às onze, uma mensagem do Victor.", proxima: "rv_02" },
    rv_02: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Você chegou? Eu prometi não fazer piada. Eu estou segurando dez piadas. Está difícil. Uma delas é sobre a Mio em caixa alta.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. “Cheguei. Pode fazer uma piada.”", proxima: "rv_a1", pontos: { victor: 3 }, flags: ["Uma_piada"] },
      { texto: "B. “Cheguei. A porta da sua mãe ainda está aberta?”", proxima: "rv_b1", pontos: { victor: 3 }, flags: ["Porta_aberta"] },
      { texto: "C. “Cheguei. Amanhã você não pergunta nada, combinado?”", proxima: "rv_c1", pontos: { victor: 3 }, flags: ["Combinado_Victor"] }
    ]},
    rv_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Cheguei. Pode fazer uma piada.", proxima: "rv_a2" },
    rv_a2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Qual a diferença entre a Mio preocupada e um alarme de incêndio? O alarme tem botão de desligar. Boa noite!", proxima: "r_fim" },
    rv_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Cheguei. A porta da sua mãe ainda está aberta?", proxima: "rv_b2" },
    rv_b2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Sempre. Ela nem tem chave mais. O Caramelo comeu.", proxima: "r_fim" },
    rv_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Cheguei. Amanhã você não pergunta nada, combinado?", proxima: "rv_c2" },
    rv_c2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Combinado. Amanhã eu só falo do Caramelo. O assunto mais seguro do mundo.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Madrugada", sprite: null, texto: "Ela volta para a cama. Deita. Fica olhando o teto, no escuro.", proxima: "f_02" },
    f_02: { tipo: "pensamento", texto: "O Ren está no meu sofá. Com o cobertor bom da minha mãe. Com ervilha congelada nas costelas. Com dois pratos de arroz na barriga.", proxima: "f_03" },
    f_03: { tipo: "pensamento", texto: "E ele olhou pra minha mãe como se tivesse visto um fantasma. “Ela é parecida com você.” Não era só isso.", proxima: "f_04" },
    f_04: { tipo: "pensamento", texto: "Amanhã a minha mãe vai querer saber tudo. Amanhã os meninos vão querer saber onde eu estava. Amanhã o Ren vai ter que sair daqui sem ninguém ver.", proxima: "f_05" },
    f_05: { tipo: "pensamento", texto: "Amanhã é muito. Hoje, ele está dormindo com quatro paredes.", proxima: "ep_fim" },

    // Fim do Capítulo 53 (crie a entrada "capitulo53" em dados/capitulos.js).
    ep_fim: { fim: "capitulo53" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 54 (anotações do roteiro)
 *  • O Ren aceitou "só hoje". Caminhada de 50 min, mancando, sem reclamar.
 *  • Na esquina: a moto do Kaito na frente do prédio (esperando o "cheguei" desde 18h30, café do porteiro).
 *    O Ren: "Eu volto pro prédio." / "Não volta." → PORTA DE TRÁS: portão da garagem (rua de trás, sempre meio aberto),
 *    porta de ferro do lado do depósito de lixo, escada de serviço, 4º andar, ESPERAR NO 407. "Fala que é meu amigo."
 *  • ESCOLHA GRANDE:
 *    A) Contou_Kaito_Ren: a verdade toda (a loja, o pai, o prédio, as costelas, "porque eu pedi"). "Não conta pros meninos."
 *       "Você escolheu um lado?" / "Eu escolhi não deixar ninguém dormir num prédio sem parede." "Eu não conto."
 *       "Se quiser... pode ficar hoje também." → Kaito fica ("pra ver"). Colchonete. Kaito e Ren: "O meu tio está cantando." /
 *       "Canta mal." / "...Obrigado." / "Não foi por você." / "Eu sei. Foi por ela. Obrigado mesmo assim."
 *       De noite: "A costela dói?" / "Só quando respira." / "Então não respira." — os dois riram.
 *       Rota Kaito: 2h da manhã, no chão da cozinha, luz da geladeira.
 *    B) Mentiu_Kaito_Ren: "Eu estava com a Mio, ela caiu de bicicleta." (a ferrugem na mão). Ele foi embora.
 *       À noite: "A Mio postou um story agora. Dançando. Com os dois joelhos." "Eu sei que não foi a Mio." → contar por
 *       mensagem / amanhã pessoalmente / não responder. Rota Kaito: ele voltou e ficou embaixo do poste.
 *  • A MÃE: abriu a porta e encontrou o Ren. Não perguntou por quê: sabe, "do jeito que as mães sabem". Ervilha congelada,
 *    dois pratos, cobertor bom. "Se doer pra respirar, amanhã você vai no posto. Eu levo." "Amanhã a gente conversa. Sobre tudo."
 *    Kaito: "Dois meninos numa quarta-feira." / "NINGUÉM entra no quarto dela."
 *  • O REN VIU A MÃE E PAROU "como se tivesse visto um fantasma". "Senhora." "Ela é... parecida com você." (Se B: "Não hoje.
 *    Por favor.") ← ele sabe quem ela é. A SN ainda não sabe que ele sabe.
 *  • Segredo mantido com Takeo, Blake (desconfiado: as ASPAS em "sua mãe"), Ryuji, Victor.
 *  • Amanhã: o Ren tem que sair sem ninguém ver; Takeo às 6h40 (se B na rota Takeo); Kaito às 6h50.
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 A verdade ou a mentira · 2 No sofá · 3 A mensagem do Kaito (só se mentiu) · Rota (1 por rota)
 *
 * FLAGS NOVAS
 *  Contou_Kaito_Ren · Mentiu_Kaito_Ren · Nao_insistiu_mae · Conhece_mae · TV_Ren
 *  Contou_depois · Conta_amanha · Nao_respondeu_Mio · Obrigada_ficou · Mao_geladeira · Nunca_esquecer
 *  Amanha_nao_sei · Seis_quarenta_quinta · Coisa_certa · Cheguei_Blake · Dica_costela · Confia_Blake
 *  Sim_Ryuji · Obrigada_Ryuji_53 · Emoji_coxinha · Uma_piada · Porta_aberta · Combinado_Victor
 *  (Kaito_dormiu_407 = mesmo caso de Contou_Kaito_Ren; use Contou_Kaito_Ren nos testes.)
 */