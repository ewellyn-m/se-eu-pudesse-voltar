/*
 * =====================================================================
 *  CAPÍTULO 51 — Vapor
 *  Terça-feira, logo depois do Capítulo 50.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Cenas com todos os meninos em todas as rotas. Bloco de rota à noite.
 *
 *  CONTEXTO (Cap. 50)
 *    • O Kaito está "mostrando": chega antes, pergunta "Posso?", escreveu uma lista. Nada de namoro (por enquanto).
 *    • A Serena de óculos escuros, a coitada da escola. "Parabéns."
 *    • O Ren: "Se eu faltar essa semana, não é nada."
 *    • Eles já se beijaram (rota Kaito, festa da Reina) e os lábios já se encostaram no tropeço da escada (todas as rotas).
 *
 *  O QUE ACONTECE
 *    • A SN para de ser durona. Ela provoca. Ela toma a iniciativa: "Hoje depois da aula, me leva na loja do seu tio?"
 *    • Manhã de moto: a mão dela na cintura dele. "Você pode parar de perguntar." O clima esquenta.
 *    • Escola: a carteira do Ren vazia. A Reina conta o que a avó soube: o Kaito não gritou. Quem gritou foi a Serena.
 *    • Intervalo: no banco, o joelho dela encostado no dele. Os meninos percebem.
 *    • Tarde: a loja de lámen. O tio sai pra comprar alho. Os dois sozinhos na cozinha pequena, com vapor e caldo.
 *      Quase-beijo. O tio volta.
 *    • Bloco de rota à noite (rota Kaito: o beijo).
 *    • Ainda NADA DE NAMORO oficial.
 *
 *  REGRAS
 *    • Sala da SN: Takeo, Mio, Hana, Reina, Ren, Akane. Kaito, Blake, Ryuji, Victor e Serena são de outras salas.
 *    • Sem xadrez no Ren. O Ren não manda mensagem. Sem narrar roupa. Sem flashback.
 *    • A Serena não explica plano.
 *    • Sem repetir as muletas dos capítulos anteriores (hall, fita preta, piada da escola).
 *
 *  PERSONAGENS
 *    Mio, Hana, Reina, Kaito, Takeo, Victor, Blake, Ryuji, Serena, Tio do Kaito.
 *    Sem sprite / rótulo: Victor, Tio do Kaito.
 *
 *  CENÁRIOS
 *    apartamento (entrada do prédio) · saida-colegio · sala-de-aula · patio-fundos · beco-mercado (loja de lámen) · quarto-sn
 *
 *  Crie a entrada "capitulo51" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo51", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — TERÇA DE MANHÃ =================== */
    c1_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Terça, 6h35 — Cena 1", sprite: null, texto: "Terça-feira. Ela acorda antes do despertador e, dessa vez, não fica olhando o teto. Fica olhando o celular. A lista dele. “6. Não subir em palco nenhum.” Ela ri sozinha no escuro.", proxima: "c1_02" },
    c1_02: { tipo: "pensamento", texto: "Chega de cara fechada. Ele decidiu. Ele foi na porta da casa dela, ele escreveu uma lista, ele pergunta “posso?” como se eu fosse de vidro. Eu não sou de vidro.", proxima: "c1_03" },
    c1_03: { tipo: "pensamento", texto: "Nada de namoro ainda. Mas também nada de fingir que eu não estou com vontade de ver ele.", proxima: "c1_04" },
    c1_04: { caminhos: [
      { flag: "Terca_Takeo", proxima: "c1_t01" }
    ], proxima: "c1_k01" },

    // ----- A pé com o Takeo (se combinou) -----
    c1_t01: { roupa: "escolar", tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", legenda: "Terça, 6h40", sprite: "takeo:escolar", texto: "Seis e quarenta. O Takeo na calçada, com o braço novo levantado. E, do lado dele, encostado na moto, o Kaito, com dois capacetes no braço. O vermelho e um preto, velho, emprestado.", proxima: "c1_t02" },
    c1_t02: { quem: "takeo", sprite: "takeo:escolar", texto: "Ele chegou antes de mim. Ele trouxe capacete pra mim também. Ele disse que dá pra ir os três. Eu disse que não cabe. Ele disse que cabe se eu for a pé do lado. Eu não entendi a lógica.", proxima: "c1_t03" },
    c1_t03: { quem: "kaito", sprite: "kaito", texto: "A lógica é que eu vou devagar. Do lado de vocês. Em primeira. O caminho inteiro.", proxima: "c1_t04" },
    c1_t04: { cenario: "rua", tipo: "narracao", sprite: null, texto: "E é isso que acontece. Ela e o Takeo a pé, na calçada. O Kaito na rua, do lado, em primeira, a moto roncando baixinho. O Takeo conta da avó. O Kaito ri das partes certas. No meio do caminho, sem combinar, os três estão conversando como se fosse normal. E é.", proxima: "c1_t05" },
    c1_t05: { cenario: "saida-colegio", sprite: "kaito", tipo: "narracao", texto: "Na esquina da escola, o Takeo entra na frente. O Kaito desliga a moto. Ela fica. Ele olha para ela, de cima da moto.", proxima: "c1_t06" },
    c1_t06: { quem: "kaito", sprite: "kaito", texto: "Amanhã eu levo vocês dois. Eu arrumo um sidecar. Eu não sei onde se compra sidecar. Mas eu arrumo.", proxima: "c1_10" },

    // ----- O Kaito vem buscar -----
    c1_k01: { roupa: "escolar", tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", legenda: "Terça, 6h50", sprite: "kaito", texto: "Quando ela sai do prédio, ele está encostado na moto, do outro lado da calçada, com o capacete vermelho no braço. Ele desencosta quando vê ela. E ela vê. Ele está com o cabelo arrumado. O Kaito, com o cabelo arrumado.", proxima: "c1_k02" },
    c1_k02: { quem: "eu", texto: "Você penteou o cabelo.", proxima: "c1_k03" },
    c1_k03: { quem: "kaito", texto: "...Não.", proxima: "c1_k04" },
    c1_k04: { quem: "eu", texto: "Penteou. Tem até o risquinho do pente.", proxima: "c1_k05" },
    c1_k05: { tipo: "narracao", texto: "Ele passa a mão no cabelo, rápido, para desmanchar. Fica pior. Fica metade arrumado e metade em pé. Ela ri alto, na calçada, às seis e cinquenta da manhã.", proxima: "c1_k06" },
    c1_k06: { quem: "kaito", texto: "Pronto. Estragou. Feliz?", proxima: "c1_k07" },
    c1_k07: { quem: "eu", texto: "Muito.", proxima: "c1_k08" },
    c1_k08: { tipo: "narracao", texto: "Ele estende o capacete. Ela pega. Coloca. E, quando ele abre a boca para perguntar, ela levanta a mão.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — A fivela
    c1_esc1: { escolhas: [
      { texto: "A. “Você pode parar de perguntar, Kaito. Fecha.”", proxima: "c1_1a_1", pontos: { kaito: 3 }, flags: ["Para_de_perguntar"] },
      { texto: "B. Segurar a mão dele e colocar ela na fivela, sem falar nada.", proxima: "c1_1b_1", pontos: { kaito: 3 }, flags: ["Mao_na_fivela"] },
      { texto: "C. “Hoje quem fecha a sua sou eu.” E pegar o capacete dele.", proxima: "c1_1c_1", pontos: { kaito: 3 }, flags: ["Fechou_a_dele"] }
    ]},
    c1_1a_1: { quem: "eu", texto: "Você pode parar de perguntar, Kaito. Fecha.", proxima: "c1_1a_2" },
    c1_1a_2: { tipo: "narracao", texto: "Ele fica parado um segundo. Depois fecha. Clique. Mas os dedos dele demoram embaixo do queixo dela. Um segundo a mais. Dois. Ela não fala nada. Ele tira a mão devagar, olhando para a boca dela, e depois para o chão, rápido.", proxima: "c1_k09" },
    c1_1b_1: { tipo: "narracao", texto: "Ela segura a mão dele. Ele congela. Ela coloca a mão dele na fivela, embaixo do queixo dela, e solta. Não fala nada. Ele fecha. Clique. E a mão dele fica ali, parada, com o polegar encostado no pescoço dela, sentindo o pulso. Ela sabe que ele sente. Está rápido.", proxima: "c1_k09" },
    c1_1c_1: { quem: "eu", texto: "Hoje quem fecha a sua sou eu.", proxima: "c1_1c_2" },
    c1_1c_2: { tipo: "narracao", texto: "Ela tira o capacete preto do guidão e coloca na cabeça dele. Ele abaixa para ela alcançar. Ela fecha a fivela embaixo do queixo dele, devagar, do jeito que ele faz. Clique. Ele fica parado, com o queixo levantado, sem respirar, olhando para ela por baixo da viseira aberta.", proxima: "c1_1c_3" },
    c1_1c_3: { quem: "kaito", texto: "...Agora eu entendi por que você ficava quieta.", proxima: "c1_k09" },

    c1_k09: { tipo: "narracao", cenario: "rua", transicao: "tempo", texto: "Na garupa, ela não segura na camisa. Ela passa os dois braços em volta da cintura dele. Os dois. E encosta o capacete nas costas dele. Ele fica duro como tábua na primeira esquina. Na segunda, ele relaxa. Na terceira, ele coloca a mão em cima das mãos dela, no sinal vermelho, e deixa lá até o verde.", proxima: "c1_k10" },
    c1_k10: { cenario: "saida-colegio", tipo: "narracao", texto: "Na frente da escola, ela desce. Tira o capacete. Devolve. Ele pega o capacete, mas não pega a mão dela. Ela segura a mão dele em cima do capacete, um segundo.", proxima: "c1_k11" },
    c1_k11: { quem: "eu", texto: "Hoje depois da aula. Me leva na loja do seu tio?", proxima: "c1_k12" },
    c1_k12: { tipo: "narracao", texto: "Ele pisca. Duas vezes. Como quem não acredita que ouviu direito.", proxima: "c1_k13" },
    c1_k13: { quem: "kaito", texto: "Você está me convidando?", proxima: "c1_k14" },
    c1_k14: { quem: "eu", texto: "Eu estou pedindo carona. Pra comer lámen. Não inventa.", proxima: "c1_k15" },
    c1_k15: { tipo: "narracao", texto: "Ela vira e entra no portão antes de ver a cara dele. Mas ouve, atrás dela, uma risada curta, que ele não conseguiu segurar.", proxima: "c1_10" },

    // (os dois caminhos continuam aqui)
    c1_10: { caminhos: [
      { flag: "Terca_Takeo", proxima: "c1_10t" }
    ], proxima: "c2_01" },
    c1_10t: { quem: "eu", texto: "Kaito. Hoje depois da aula. Me leva na loja do seu tio? Pra comer lámen. Não inventa.", proxima: "c1_10t2" },
    c1_10t2: { tipo: "narracao", texto: "Ele pisca duas vezes, de cima da moto. Ela entra no portão antes de ver a cara dele. Mas ouve a risada.", proxima: "c2_01" },

    /* =================== CENA 2 — A SALA =================== */
    c2_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Primeira aula — Cena 2", sprite: null, texto: "Na sala, ela olha para a carteira perto da porta antes de olhar para qualquer outra coisa. Vazia. O Ren não veio.", proxima: "c2_02" },
    c2_02: { tipo: "pensamento", texto: "“Se eu faltar essa semana, não é nada.” Não é nada. Ele disse que não é nada.", proxima: "c2_03" },
    c2_03: { tipo: "narracao", texto: "Ela tira o livro dele da mochila. O do homem do farol. Coloca em cima da carteira. Página doze. Ela leu até a página doze ontem à noite. Não vai pular.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", sprite: "reina", texto: "A Reina chega atrasada, o que nunca acontece, e senta na carteira da frente já virada para trás, com a cara de quem traz uma notícia urgente de guerra.", proxima: "c2_05" },
    c2_05: { quem: "reina", texto: "A minha avó. Ontem à noite. Ela foi tomar café na casa da vizinha da Serena. Ela fez um bolo de propósito pra ter desculpa.", proxima: "c2_06" },
    c2_06: { quem: "mio", sprite: "mio", texto: "Eu amo essa mulher.", proxima: "c2_07" },
    c2_07: { quem: "reina", sprite: "reina", texto: "A vizinha ouviu tudo. Pela janela. O Kaito falou alto, sim. Mas não gritou. Ele falou devagar, repetiu, e foi embora. Quem gritou foi a Serena. Depois que ele foi embora. Com a mãe dela. Gritou que a culpa era da mãe, que a mãe não ajudava, que ninguém ajudava.", proxima: "c2_08" },
    c2_08: { quem: "reina", texto: "E a mãe dela foi na casa da vizinha depois, pedir desculpa pelo barulho. Da Serena. Não do Kaito.", proxima: "c2_09" },
    c2_09: { tipo: "narracao", sprite: null, texto: "Silêncio. A Mio olha para a Hana. A Hana já está escrevendo na prancheta.", proxima: "c2_10" },
    c2_10: { quem: "hana", sprite: "hana", texto: "Então a versão da escola está invertida. Ele é o calmo. Ela é a que gritou.", proxima: "c2_11" },
    c2_11: { quem: "mio", sprite: "mio", texto: "Eu vou espalhar. Eu vou espalhar com cuidado. Eu vou espalhar como quem não quer nada. A metade do fingindo vai virar a metade inteira.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — A verdade da avó
    c2_esc2: { escolhas: [
      { texto: "A. “Espalha, Mio. Com cuidado. Mas espalha.”", proxima: "c2_2a_1", pontos: {}, flags: ["Espalha_Mio"] },
      { texto: "B. “Não precisa. Quem tem que saber já sabe.”", proxima: "c2_2b_1", pontos: { kaito: 1 }, flags: ["Ja_sabe"] },
      { texto: "C. “Deixa. Uma hora a máscara dela cai sozinha.”", proxima: "c2_2c_1", pontos: {}, flags: ["Mascara_cai"] }
    ]},
    c2_2a_1: { quem: "eu", texto: "Espalha, Mio. Com cuidado. Mas espalha. Ele não merece ser o monstro.", proxima: "c2_2a_2" },
    c2_2a_2: { tipo: "narracao", texto: "A Mio pega o celular com a seriedade de uma general. No intervalo, metade da escola já sabe que “a mãe da Serena pediu desculpa pra vizinha”. Ninguém sabe de onde veio. A Mio é muito boa.", proxima: "c2_12" },
    c2_2b_1: { quem: "eu", texto: "Não precisa. Quem tem que saber já sabe. Eu sei. Ele sabe.", proxima: "c2_2b_2" },
    c2_2b_2: { tipo: "narracao", texto: "A Mio guarda o celular, contrariada. Mas a Reina sorri. E ela sabe que a Reina vai contar para alguém mesmo assim. A Reina sempre conta para alguém.", proxima: "c2_12" },
    c2_2c_1: { quem: "eu", texto: "Deixa. Uma hora a máscara dela cai sozinha. Não precisa ser a gente que tira.", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "mio", texto: "Eu odeio quando você fala como uma senhora de setenta anos. Você tem razão. Eu odeio mesmo assim.", proxima: "c2_12" },

    // (todas as opções continuam aqui)
    c2_12: { tipo: "narracao", sprite: "takeo:escolar", texto: "Atrás dela, o Takeo bate no ombro. Ela vira. Ele está olhando para a carteira vazia do Ren.", proxima: "c2_13" },
    c2_13: { quem: "takeo", sprite: "takeo:escolar", texto: "Ele não faltou nenhum dia esse ano. Nem quando estava gripado. Ele veio com febre de trinta e nove em abril. A professora mandou ele pra casa e ele ficou no corredor.", proxima: "c2_14" },
    c2_14: { tipo: "pensamento", texto: "O Takeo percebeu também. Não sou só eu.", proxima: "c2_15" },
    c2_15: { quem: "takeo", sprite: "takeo:escolar", texto: "Não é da minha conta. Eu só percebi. Eu sou bom em perceber cadeira vazia. Eu fiquei muito tempo vendo a minha vazia, quando eu sumi.", proxima: "c2_16" },
    c2_16: { tipo: "narracao", sprite: null, texto: "Ela vira de volta para frente. Abre o livro do Ren. Página doze. O homem do farol subindo a escada em espiral, à noite, sozinho, para acender uma luz. Ela lê a mesma frase três vezes sem entender. Fecha o livro.", proxima: "c3_01" },

    /* =================== CENA 3 — O INTERVALO =================== */
    c3_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Intervalo — Cena 3", sprite: null, texto: "No intervalo, o banco da árvore torta. O Blake numa ponta, com dois sanduíches, como prometido. O Ryuji no chão. O Victor no braço do banco, com um potinho de bolinho de chuva no colo. E o Kaito no meio, com espaço sobrando do lado.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "Ela senta no espaço do lado dele. Não do lado do Blake. Do lado dele. E o banco é estreito, e o joelho dela encosta no dele. Ela não tira. Ele não tira. Ninguém tira.", proxima: "c3_03" },
    c3_03: { quem: "ryuji", sprite: "ryuji", texto: "...", proxima: "c3_04" },
    c3_04: { tipo: "narracao", sprite: null, texto: "O Ryuji está olhando para os dois joelhos. Encostados. Ele abre a boca. O Blake estica o pé sem olhar e encosta o tênis na canela do Ryuji. O Ryuji fecha a boca.", proxima: "c3_05" },
    c3_05: { sprite: "victor", quem: "victor", texto: "Bolinho de chuva! Da minha mãe! Ela mandou pra padroeira! Mas eu estou distribuindo pra todo mundo porque eu sou generoso e porque ela fez trinta!", proxima: "c3_06" },
    c3_06: { tipo: "narracao", texto: "Ele estica o potinho. Ela pega um. O Kaito pega um. O Blake pega dois, sem pedir. O Ryuji pega quatro e coloca dois no bolso.", proxima: "c3_07" },
    c3_07: { quem: "victor", texto: "Líder. Você está com o cabelo esquisito hoje. Metade arrumado, metade não. É tendência?", proxima: "c3_08" },
    c3_08: { quem: "kaito", sprite: "kaito", texto: "...Fica quieto, Victor.", proxima: "c3_09" },
    c3_09: { quem: "eu", texto: "Ele penteou. Aí eu falei. Aí ele estragou.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", sprite: null, texto: "O Victor olha para ela. Para o Kaito. Para os dois joelhos. E começa a rir. O Blake vira de costas para rir. O Ryuji não aguenta e explode.", proxima: "c3_11" },
    c3_11: { quem: "ryuji", sprite: "ryuji", texto: "ELE PENTEOU! O KAITO PENTEOU! PARA ELA! EU VOU CONTAR PRO MUNDO!", proxima: "c3_12" },
    c3_12: { tipo: "narracao", sprite: null, texto: "O Kaito fica vermelho até a orelha. Ela ri tanto que encosta a cabeça no ombro dele, sem pensar. E fica. Ele para de respirar um segundo. Depois respira. E não se mexe, para ela não sair.", proxima: "c3_13" },
    c3_13: { tipo: "narracao", sprite: "serena", texto: "Do outro lado do pátio, na grade, a Serena. Sem óculos escuros hoje. As amigas em volta dela estão menos coladas. Duas delas estão olhando para o celular, cochichando. A Mio trabalhou rápido.", proxima: "c3_14" },
    c3_14: { tipo: "narracao", texto: "A Serena está olhando para o banco. Para a cabeça da SN no ombro do Kaito. Ela não chora. Ela não faz cara de coitada. Pela primeira vez, a SN vê a cara dela sem nenhuma máscara. Fria. Parada. Como uma pessoa fazendo conta.", proxima: "c3_15" },
    c3_15: { tipo: "pensamento", texto: "Aí está você. A de verdade.", proxima: "c3_16" },
    c3_16: { tipo: "narracao", sprite: null, texto: "Ela não levanta a cabeça do ombro dele. Ela olha de volta para a Serena, sem pressa. E depois fecha os olhos. Como quem diz: “eu não tenho medo de você”.", proxima: "c3_17" },
    c3_17: { quem: "kaito", sprite: "kaito", texto: "Ela está olhando, né?", proxima: "c3_18" },
    c3_18: { quem: "eu", texto: "Está.", proxima: "c3_19" },
    c3_19: { quem: "kaito", texto: "Você quer que eu...", proxima: "c3_20" },
    c3_20: { quem: "eu", texto: "Eu quero que você fique parado. Você é um ótimo ombro quando fica parado.", proxima: "c3_21" },
    c3_21: { tipo: "narracao", sprite: null, texto: "Ele fica parado. Até o sinal. E, quando o sinal toca, ele demora meio minuto para levantar, como quem não quer que acabe.", proxima: "c3_22" },
    c3_22: { tipo: "narracao", sprite: "blake", texto: "O Blake, levantando, entrega o segundo sanduíche para ela, sem falar nada. Depois fala, baixo, só para ela, passando.", proxima: "c3_23" },
    c3_23: { quem: "blake", texto: "É bom ver você rindo de novo.", proxima: "c3_24" },
    c3_24: { tipo: "narracao", sprite: null, texto: "E vai, com a mão enfaixada no bolso, antes que ela responda.", proxima: "c4_01" },

    /* =================== CENA 4 — A LOJA DE LÁMEN =================== */
    c4_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Terça, 13h30 — Cena 4", sprite: "kaito", texto: "Na saída, ela vai direto para a moto. Não espera ele chamar. Coloca o capacete sozinha, mas deixa a fivela aberta, e olha para ele. Ele fecha sem perguntar. Clique. Ele aprendeu.", proxima: "c4_02" },
    c4_02: { cenario: "loja-lamen", transicao: "tempo", tipo: "narracao", texto: "A loja de lámen. A cortininha de pano balançando na porta. A calçada vazia, ainda. O sino toca quando eles entram. O cheiro de caldo é tão forte que ela sente no estômago.", proxima: "c4_03" },
    c4_03: { sprite: "tio_kaito", quem: "tio_kaito", texto: "A cliente pequenininha! E o meu sobrinho junto! No mesmo dia! Eu vou ter um infarto de alegria! Senta, senta!", proxima: "c4_04" },
    c4_04: { tipo: "narracao", texto: "O tio serve duas tigelas enormes antes de eles pedirem. Senta do outro lado do balcão. Fica olhando os dois comendo, com o queixo na mão, sorrindo, como quem assiste novela.", proxima: "c4_05" },
    c4_05: { quem: "tio_kaito", texto: "Ele nunca trouxe ninguém aqui. Nunca. Nem o Blake. O Blake vem sozinho.", proxima: "c4_06" },
    c4_06: { quem: "kaito", sprite: "kaito", texto: "Tio.", proxima: "c4_07" },
    c4_07: { sprite: "tio_kaito", quem: "tio_kaito", texto: "Que foi? É verdade! Ele ficou duas semanas sem comer direito. Agora está comendo a segunda tigela. Olha a velocidade.", proxima: "c4_08" },
    c4_08: { tipo: "narracao", texto: "O Kaito para de comer, com o hashi no ar. Ela olha para a tigela dele. Segunda. Ela nem viu ele terminar a primeira.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "O tio olha para o relógio na parede. Levanta, de repente, batendo na testa.", proxima: "c4_10" },
    c4_10: { quem: "tio_kaito", texto: "O alho! Acabou o alho! O caldo da noite não sai sem alho! Kaito, cuida do caldo grande. Mexe a cada cinco minutos. Não deixa grudar. Vinte minutos. Eu volto.", proxima: "c4_11" },
    c4_11: { sprite: null, tipo: "narracao", texto: "E sai. Vira a plaquinha da porta para “FECHADO”. O sino toca. E eles ficam sozinhos na loja.", proxima: "c4_12" },
    c4_12: { tipo: "pensamento", texto: "Ele fez isso de propósito. O tio. Não acabou alho nenhum. Eu vi uma réstia inteira pendurada atrás do balcão.", proxima: "c4_13" },
    c4_13: { sprite: "kaito", tipo: "narracao", texto: "O Kaito também viu. Ela vê ele olhando para a réstia de alho pendurada. Depois para ela. Depois para o caldo. A orelha dele ficando vermelha.", proxima: "c4_14" },
    c4_14: { quem: "kaito", texto: "...Eu tenho que mexer o caldo.", proxima: "c4_15" },
    c4_15: { quem: "eu", texto: "Eu ajudo.", proxima: "c4_16" },
    c4_16: { tipo: "narracao", texto: "A cozinha atrás do balcão é pequena. Muito pequena. Um fogão de quatro bocas, uma bancada de inox, uma panela enorme borbulhando e um corredor entre a bancada e o fogão onde cabe exatamente uma pessoa e meia.", proxima: "c4_17" },
    c4_17: { tipo: "narracao", texto: "Eles são duas pessoas. Inteiras.", proxima: "c4_18" },
    c4_18: { tipo: "narracao", texto: "Ele pega a colher de pau gigante e mexe o caldo. Ela fica do lado, encostada na bancada. O vapor sobe da panela, quente, com cheiro de osso e cebolinha, e embaça tudo. A janelinha. Os azulejos. O ar.", proxima: "c4_19" },
    c4_19: { quem: "eu", texto: "Deixa eu mexer.", proxima: "c4_20" },
    c4_20: { quem: "kaito", texto: "Você quebrou um mouse. Uma mesa de ferro. Eu tenho medo pela colher.", proxima: "c4_21" },
    c4_21: { quem: "eu", texto: "Hoje eu não quebrei nada. Nem ontem.", proxima: "c4_22" },
    c4_22: { tipo: "narracao", texto: "Ele olha para ela. Para as mãos dela. E entrega a colher.", proxima: "c4_23" },
    c4_23: { tipo: "narracao", texto: "Ela mexe. O caldo é pesado, grosso. Ela mexe devagar, com cuidado. Ele fica atrás dela, porque não tem outro lugar para ficar no corredor de uma pessoa e meia. Atrás dela. Perto. Ela sente o calor dele nas costas, diferente do calor do vapor.", proxima: "c4_24" },
    c4_24: { quem: "kaito", texto: "Mais devagar. Por baixo. Assim.", proxima: "c4_25" },
    c4_25: { tipo: "narracao", texto: "Ele coloca a mão em cima da mão dela, na colher. Por trás. O braço dele passando do lado do braço dela. E mexe junto. Devagar. Por baixo. O queixo dele quase encostando no ombro dela. Ela sente a respiração dele no pescoço.", proxima: "c4_26" },
    c4_26: { tipo: "pensamento", texto: "Eu não vou quebrar essa colher. Eu não vou quebrar essa colher. Eu não vou...", proxima: "c4_27" },
    c4_27: { tipo: "narracao", texto: "A colher aguenta. Ela percebe que não é raiva que está subindo no braço dela agora. É outra coisa. E a força não sobe junto. A força fica quieta, dentro, como um gato dormindo.", proxima: "c4_28" },
    c4_28: { quem: "kaito", texto: "...Você está tremendo.", proxima: "c4_29" },
    c4_29: { quem: "eu", texto: "É o vapor.", proxima: "c4_30" },
    c4_30: { quem: "kaito", texto: "O vapor é quente.", proxima: "c4_31" },
    c4_31: { quem: "eu", texto: "Então não é o vapor.", proxima: "c4_32" },
    c4_32: { tipo: "narracao", texto: "Ele para de mexer. A mão dele continua em cima da dela, na colher, parada. O caldo borbulha sozinho. Ela solta a colher. Ela vira.", proxima: "c4_33" },
    c4_33: { tipo: "narracao", texto: "E agora ela está de frente para ele. No corredor de uma pessoa e meia. Com a bancada nas costas e ele na frente. Tão perto que ela vê o vapor grudado nos cílios dele. A gotinha de suor na testa. O cabelo metade arrumado, metade em pé.", proxima: "c4_34" },
    c4_34: { tipo: "narracao", texto: "Ele não se mexe. Ela não se mexe. Ele olha para os olhos dela. Depois para a boca. Depois para os olhos de novo, como quem pede licença.", proxima: "c4_35" },
    c4_35: { caminhos: [
      { flag: "Rota_Kaito", proxima: "c4_35k" }
    ], proxima: "c4_35d" },
    c4_35k: { tipo: "pensamento", texto: "O jardim da Reina. A música lá dentro. A primeira vez. Eu lembro de tudo. Eu lembro do gosto. Eu quero lembrar de novo.", proxima: "c4_36" },
    c4_35d: { tipo: "pensamento", texto: "Um segundo, naquele tropeço da escada. A boca dele na minha, sem querer. Eu passei semanas pensando nesse segundo. Agora não seria sem querer.", proxima: "c4_36" },
    c4_36: { quem: "kaito", texto: "Eu não vou pedir. Eu prometi que não ia pedir nada.", proxima: "c4_37" },
    c4_37: { tipo: "narracao", texto: "A voz dele sai baixa. Rouca. Quase sem som, misturada com o borbulhar do caldo.", proxima: "c4_esc3" },

    // ▶ ESCOLHA 3 — Na cozinha
    c4_esc3: { escolhas: [
      { texto: "A. “Então não pede.” E chegar mais perto. Um centímetro.", proxima: "c4_3a_1", pontos: { kaito: 4 }, flags: ["Nao_pede"] },
      { texto: "B. Segurar a frente da camisa dele com as duas mãos. Puxar devagar.", proxima: "c4_3b_1", pontos: { kaito: 4 }, flags: ["Puxou_jaqueta"] },
      { texto: "C. Encostar a testa na dele. Só a testa. E ficar.", proxima: "c4_3c_1", pontos: { kaito: 3 }, flags: ["Testa_na_testa"] }
    ]},
    c4_3a_1: { quem: "eu", texto: "Então não pede.", proxima: "c4_3a_2" },
    c4_3a_2: { tipo: "narracao", texto: "Ela chega mais perto. Um centímetro. O nariz dela quase encosta no dele. Ela sente ele prender a respiração. Ele levanta a mão, devagar, e encosta os dedos no rosto dela, do lado, perto da orelha, como quem tira tinta azul de uma bochecha. Só que não tem tinta nenhuma.", proxima: "c4_38" },
    c4_3b_1: { tipo: "narracao", texto: "Ela segura a frente da camisa dele com as duas mãos. Com cuidado. Com muito cuidado. E puxa, devagar. Ele vem. Sem resistir. Até ficar tão perto que o vapor da panela passa entre os dois e some, porque não tem mais espaço para passar.", proxima: "c4_38" },
    c4_3c_1: { tipo: "narracao", texto: "Ela encosta a testa na dele. Só a testa. Ele fecha os olhos. Ela fecha também. Os dois ficam assim, no meio do vapor, testa com testa, respirando o mesmo ar quente. Ela sente a mão dele subir, devagar, até a nuca dela, e ficar ali, aberta.", proxima: "c4_38" },

    // (todas as opções continuam aqui)
    c4_38: { tipo: "narracao", texto: "Ele abaixa a cabeça. Devagar. Ela levanta a dela. A boca dele chega tão perto que ela sente o calor antes de sentir o toque. Um milímetro. Menos.", proxima: "c4_39" },
    c4_39: { tipo: "narracao", efeito: "tremor", texto: "O sino da porta toca.", proxima: "c4_40" },
    c4_40: { quem: "tio_kaito", texto: "VOLTEI! Achei alho! Era muito longe o mercado! Tinha uma fila! Muita fila! Eu demorei? Eu acho que eu demorei pouco! Vou fazer barulho na porta pra avisar que eu cheguei! BARULHO!", proxima: "c4_41" },
    c4_41: { tipo: "narracao", texto: "Ele grita tudo isso da porta, sem entrar na cozinha. Alto. Muito alto. Batendo a sacola na parede. Como quem dá tempo.", proxima: "c4_42" },
    c4_42: { tipo: "narracao", texto: "Os dois se separam de uma vez. Ela bate as costas na bancada. Ele bate o cotovelo na panela, solta um palavrão baixo e pega a colher de pau como se a vida dependesse dela. Mexe o caldo com uma concentração absurda. Ela fica parada, com as duas mãos na boca, tentando não rir. Não consegue.", proxima: "c4_43" },
    c4_43: { sprite: "tio_kaito", tipo: "narracao", texto: "O tio aparece na porta da cozinha com uma cabeça de alho na mão. Uma. Ele olha para o Kaito mexendo o caldo vermelho até o pescoço. Olha para ela rindo com as mãos na boca. Olha para o vapor.", proxima: "c4_44" },
    c4_44: { quem: "tio_kaito", texto: "...O caldo está ótimo. Muito bem mexido. Muito. Eu vou ali na frente contar o troco. Vai demorar. O troco é muito difícil hoje.", proxima: "c4_45" },
    c4_45: { tipo: "narracao", texto: "E volta para o balcão, cantarolando. Muito mal.", proxima: "c4_46" },
    c4_46: { quem: "kaito", sprite: "kaito", texto: "...Eu vou matar ele.", proxima: "c4_47" },
    c4_47: { quem: "eu", texto: "Ele trouxe uma cabeça de alho. Uma. Com tudo aquilo pendurado ali.", proxima: "c4_48" },
    c4_48: { quem: "kaito", texto: "Eu vou matar ele com carinho.", proxima: "c4_49" },
    c4_49: { tipo: "narracao", texto: "Ela ri. Ele ri. Os dois na cozinha pequena, com o vapor, rindo baixo para o tio não ouvir. Mas o tio ouve. Lá da frente, ele canta mais alto.", proxima: "c4_50" },
    c4_50: { tipo: "pensamento", texto: "Quase. De novo. A gente é especialista em quase.", proxima: "c4_51" },
    c4_51: { tipo: "pensamento", texto: "Mas não é mais o quase de antes. Não é o quase de quem tem medo. É o quase de quem sabe que vai acontecer. Só não sabe quando.", proxima: "c5_01" },

    /* =================== CENA 5 — A VOLTA =================== */
    c5_01: { tipo: "narracao", cenario: "rua", transicao: "tempo", legenda: "Terça, 17h — Cena 5", sprite: null, texto: "Na volta, ela abraça a cintura dele com os dois braços desde o primeiro metro. Ele não fica duro dessa vez. Ele coloca a mão em cima das dela em todos os sinais vermelhos. Em todos. Até em um que estava verde e ele parou de propósito.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", cenario: "frente-casa-sn-tarde", transicao: "tempo", texto: "Na frente do prédio, ela desce. Tira o capacete. Mas não devolve. Fica segurando. Ele espera.", proxima: "c5_03" },
    c5_03: { quem: "eu", texto: "Isso não é namoro.", proxima: "c5_04" },
    c5_04: { quem: "kaito", sprite: "kaito", texto: "Eu sei.", proxima: "c5_05" },
    c5_05: { quem: "eu", texto: "Mas também não é nada.", proxima: "c5_06" },
    c5_06: { tipo: "narracao", texto: "Ele olha para ela. O sorriso começa no canto da boca e vai devagar, devagar, até ocupar o rosto inteiro.", proxima: "c5_07" },
    c5_07: { quem: "kaito", texto: "Eu também sei.", proxima: "c5_08" },
    c5_08: { tipo: "narracao", texto: "Ela devolve o capacete. Os dedos se encostam. Ninguém tira.", proxima: "r_cam" },

    /* =================== ROTA — TERÇA À NOITE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito: o beijo ----------
    rk_01: { tipo: "narracao", cenario: "frente-casa-sn-tarde", transicao: "tempo", legenda: "Terça, 17h02", sprite: "kaito", texto: "Ela vira para entrar no prédio. Dá dois passos. E para. Fica de costas para ele, com a mão na porta.", proxima: "rk_02" },
    rk_02: { tipo: "pensamento", texto: "A gente é especialista em quase. Um sino. Um timer de forno. O Ryuji. Um tio com uma cabeça de alho.", proxima: "rk_03" },
    rk_03: { tipo: "pensamento", texto: "Agora não tem sino nenhum.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. Voltar. Os dois passos. E beijar ele.", proxima: "rk_a1", pontos: { kaito: 5 }, flags: ["Beijo_terca"] },
      { texto: "B. Chamar ele: “Kaito.” E esperar ele vir.", proxima: "rk_b1", pontos: { kaito: 5 }, flags: ["Chamou_Kaito"] },
      { texto: "C. Entrar. Hoje foi o suficiente. O quase é bom também.", proxima: "rk_c1", pontos: { kaito: 2 }, flags: ["Guardou_quase"] }
    ]},
    rk_a1: { tipo: "narracao", texto: "Ela volta. Os dois passos. Ele ainda está em pé do lado da moto, com o capacete na mão, olhando para ela. Ela não fala nada. Ela segura a gola da camisa dele, fica na ponta do pé, e beija ele.", proxima: "rk_k1" },
    rk_b1: { quem: "eu", texto: "Kaito.", proxima: "rk_b2" },
    rk_b2: { tipo: "narracao", texto: "Ela não vira. Ela ouve o capacete sendo colocado em cima do banco da moto. Os passos dele. Três. Ele para atrás dela. Ela vira. E ele já está ali, perto, com a mesma cara da cozinha. Ele não pede. Ela não espera ele pedir.", proxima: "rk_k1" },
    rk_k1: { tipo: "narracao", texto: "Não é como no jardim da Reina. No jardim, foi um susto bom, com a música lá dentro e o coração na boca. Esse não tem susto. Esse é devagar. É de quem esperou duas semanas inteiras, com parede vazia, chuva e capacete na cabeça errada, e agora não tem pressa nenhuma.", proxima: "rk_k2" },
    rk_k2: { tipo: "narracao", texto: "A mão dele vem para o rosto dela. Os dedos atrás da orelha, o polegar na bochecha. A outra mão na cintura, segurando de leve, como quem segura uma coisa que pode sair voando. Ela sobe as mãos da gola para a nuca dele, para o cabelo metade arrumado, e bagunça a outra metade.", proxima: "rk_k3" },
    rk_k3: { tipo: "narracao", texto: "Ele tem gosto de caldo e cebolinha. Ela ri dentro do beijo. Ele sente ela rir e sorri também, e os dois ficam se beijando e sorrindo ao mesmo tempo, o que não dá muito certo, e ninguém se importa.", proxima: "rk_k4" },
    rk_k4: { tipo: "narracao", texto: "A força não sobe. Nenhuma. As mãos dela estão no cabelo dele e não apertam, não quebram, não machucam. Só ficam. Ela percebe isso no meio do beijo e quase chora.", proxima: "rk_k5" },
    rk_k5: { tipo: "narracao", texto: "Quando eles se separam, ninguém se separa muito. A testa dele fica encostada na dela. Os dois respirando rápido. A moto atrás dele. A porta do prédio atrás dela. O porteiro, pelo vidro da portaria, lendo o jornal de cabeça para baixo.", proxima: "rk_k6" },
    rk_k6: { quem: "kaito", texto: "...Isso não é namoro.", proxima: "rk_k7" },
    rk_k7: { tipo: "narracao", texto: "Ele fala com a voz rouca, sem abrir os olhos, ainda com a testa na dela. Como quem repete uma regra para não esquecer.", proxima: "rk_k8" },
    rk_k8: { quem: "eu", texto: "Não é.", proxima: "rk_k9" },
    rk_k9: { quem: "kaito", texto: "Eu vou escrever na lista. Item oito. Beijar a SN na frente do prédio não é namoro.", proxima: "rk_k10" },
    rk_k10: { tipo: "narracao", texto: "Ela ri. Alto. Ele abre os olhos e fica olhando ela rir, de muito perto, como quem olha a melhor coisa que já viu.", proxima: "rk_k11" },
    rk_k11: { quem: "eu", texto: "Item nove. Não falar isso pro Ryuji.", proxima: "rk_k12" },
    rk_k12: { quem: "kaito", texto: "O Ryuji vai saber. O Ryuji sempre sabe. Ele vai saber pela minha cara amanhã.", proxima: "rk_k13" },
    rk_k13: { tipo: "narracao", texto: "Ela entra no prédio. Sobe a escada. No primeiro andar, ela para na janela do corredor e olha para baixo. Ele ainda está lá, do lado da moto, sem capacete, com a mão na boca, olhando para a porta, parado. Ele fica ali cinco minutos. Ela fica olhando os cinco minutos.", proxima: "r_fim" },
    rk_c1: { tipo: "narracao", texto: "Ela entra. Sobe a escada sorrindo. No primeiro andar, ela olha pela janela do corredor. Ele está do lado da moto, olhando para a porta, com a mão no peito. Ela guarda o quase. Ele também guarda. Os dois sabem que não vai ser quase por muito tempo.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Terça, 20h", sprite: null, texto: "Às oito, o Takeo liga. Ela atende.", proxima: "rt_02" },
    rt_02: { quem: "takeo", texto: "O Ryuji mandou no grupo que viu você e o Kaito na loja do tio. Pela janela. Ele estava passando. Por acaso. Ele disse que tinha muito vapor.", proxima: "rt_03" },
    rt_03: { quem: "takeo", texto: "Eu não liguei pra perguntar. Eu liguei pra dizer que a cadeira do Ren continua vazia e eu fiquei pensando nisso a tarde inteira. E que eu não sei com quem falar disso. Só com você.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. “Eu também fiquei pensando, Takeo.”", proxima: "rt_a1", pontos: { takeo: 4 }, flags: ["Pensou_Ren_Takeo"] },
      { texto: "B. “Por que você se importa com o Ren?”", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["Importa_Ren"] },
      { texto: "C. “Amanhã, se ele não vier, a gente pergunta pra professora. Juntos.”", proxima: "rt_c1", pontos: { takeo: 3 }, flags: ["Pergunta_juntos"] }
    ]},
    rt_a1: { quem: "eu", texto: "Eu também fiquei pensando, Takeo.", proxima: "rt_a2" },
    rt_a2: { quem: "takeo", texto: "Então a gente pensa junto. É menos pesado pensando junto.", proxima: "r_fim" },
    rt_b1: { quem: "eu", texto: "Por que você se importa com o Ren?", proxima: "rt_b2" },
    rt_b2: { quem: "takeo", texto: "Eu não sei se eu me importo. Eu só sei como é ter uma cadeira vazia e ninguém perguntar. Ninguém perguntou por mim quando eu sumi. Só você, depois.", proxima: "r_fim" },
    rt_c1: { quem: "eu", texto: "Amanhã, se ele não vier, a gente pergunta pra professora. Juntos.", proxima: "rt_c2" },
    rt_c2: { quem: "takeo", texto: "Juntos. Seis e quarenta. Eu passo aí. Mesmo se tiver sidecar.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Terça, 21h", sprite: null, texto: "Às nove, uma mensagem do Blake.", proxima: "rb_02" },
    rb_02: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu passei na loja do tio às seis. Ele estava cantando. Ele me deu lámen de graça e disse “hoje é dia de festa”. Eu não perguntei por quê. Eu acho que eu sei.", proxima: "rb_03" },
    rb_03: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu falei hoje que era bom ver você rindo. Eu queria falar mais coisa. Eu não sei falar mais coisa.", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. “Você não precisa falar mais nada, Blake.”", proxima: "rb_a1", pontos: { blake: 3 }, flags: ["Nao_precisa_Blake"] },
      { texto: "B. “Tenta. Eu escuto.”", proxima: "rb_b1", pontos: { blake: 4 }, flags: ["Tenta_Blake"] },
      { texto: "C. “O sanduíche de hoje estava melhor que o de ontem.”", proxima: "rb_c1", pontos: { blake: 2 }, flags: ["Sanduiche_melhor"] }
    ]},
    rb_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Você não precisa falar mais nada, Blake.", proxima: "rb_a2" },
    rb_a2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Tá. Então eu vou continuar trazendo sanduíche. É o que eu sei falar.", proxima: "r_fim" },
    rb_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Tenta. Eu escuto.", proxima: "rb_b2" },
    rb_b2: { tipo: "narracao", texto: "Digitando. Para. Digitando. Para. Dez minutos.", proxima: "rb_b3" },
    rb_b3: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Quando você ri, o pátio fica mais leve. Pronto. Foi isso. Eu vou dormir.", proxima: "r_fim" },
    rb_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "O sanduíche de hoje estava melhor que o de ontem.", proxima: "rb_c2" },
    rb_c2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu coloquei queijo. É o segredo. Não conta pro Ryuji.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Terça, 20h30", sprite: null, texto: "Às oito e meia, o Ryuji manda uma mensagem. Só uma. Sem exclamação nenhuma.", proxima: "rr_02" },
    rr_02: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Eu passei na frente da loja do tio hoje. Tinha muito vapor na janela. Eu fui embora antes de ver o que tinha atrás do vapor.", proxima: "rr_03" },
    rr_03: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "O esquisito. Eu descobri o que é. É que eu fico feliz por você e triste por mim ao mesmo tempo. Pronto. Falei. Eu não ia falar hoje, mas falei. Desculpa.", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. “Ryuji. Obrigada por falar.”", proxima: "rr_a1", pontos: { ryuji: 4 }, flags: ["Obrigada_falar_Ryuji"] },
      { texto: "B. Ligar pra ele.", proxima: "rr_b1", pontos: { ryuji: 4 }, flags: ["Ligou_Ryuji_51"] },
      { texto: "C. “Não pede desculpa por sentir coisa, Ryuji.”", proxima: "rr_c1", pontos: { ryuji: 3 }, flags: ["Sem_desculpa_Ryuji"] }
    ]},
    rr_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Ryuji. Obrigada por falar.", proxima: "rr_a2" },
    rr_a2: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "De nada!! Eu voltei a usar exclamação! Isso quer dizer que eu estou bem! Eu vou ficar bem! Boa noite!!", proxima: "r_fim" },
    rr_b1: { tipo: "narracao", texto: "Ela liga. Ele atende no primeiro toque. Não fala nada. Ela também não. Os dois ficam um minuto inteiro em silêncio no telefone. Depois ele fala, baixinho: “Eu vou ficar bem. Só me deixa ficar esquisito uns dias.” Ela deixa.", proxima: "r_fim" },
    rr_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Não pede desculpa por sentir coisa, Ryuji.", proxima: "rr_c2" },
    rr_c2: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Tá. Eu não peço. Eu só sinto. Amanhã eu levo coxinha. Coxinha cura tudo. Até isso.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Terça, 21h", sprite: null, texto: "Às nove, o Victor manda um áudio. Quarenta segundos. Ela aperta o play. É ele cantando. Muito mal. Uma música inventada sobre um homem que penteia metade do cabelo.", proxima: "rv_02" },
    rv_02: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "É uma homenagem ao líder. Eu vou cantar amanhã no pátio. Ou não. Depende de quanto você me paga pra não cantar.", proxima: "rv_03" },
    rv_03: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Hoje você encostou a cabeça no ombro dele no banco. Eu estava do lado. Foi bonito. Eu achei bonito de verdade. Eu estou falando sério. Eu sou capaz de falar sério duas vezes por semana.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. “Obrigada, Victor. Por achar bonito.”", proxima: "rv_a1", pontos: { victor: 3 }, flags: ["Achou_bonito"] },
      { texto: "B. “E você? Está bem?”", proxima: "rv_b1", pontos: { victor: 4 }, flags: ["Esta_bem_Victor"] },
      { texto: "C. “Eu pago dois bolinhos pra você não cantar.”", proxima: "rv_c1", pontos: { victor: 3 }, flags: ["Dois_bolinhos"] }
    ]},
    rv_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Obrigada, Victor. Por achar bonito.", proxima: "rv_a2" },
    rv_a2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "De nada. Agora eu vou voltar a ser bobo. Ser sério cansa. Boa noite, padroeira.", proxima: "r_fim" },
    rv_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "E você? Está bem?", proxima: "rv_b2" },
    rv_b2: { tipo: "narracao", texto: "Digitando. Para. Digitando. Para. Cinco minutos.", proxima: "rv_b3" },
    rv_b3: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Eu estou. Do jeito que o Caramelo fica quando alguém pega a bolinha dele e joga pra outro cachorro. Mas abanando o rabo. Sempre abanando.", proxima: "r_fim" },
    rv_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu pago dois bolinhos pra você não cantar.", proxima: "rv_c2" },
    rv_c2: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Fechado. Mas os bolinhos são da minha mãe. Então você me paga com os bolinhos que ela fez pra você. É o crime perfeito.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Terça, 23h", sprite: null, texto: "Onze da noite. Ela está deitada com o livro do Ren aberto em cima do peito. Página vinte. Ela não está lendo.", proxima: "f_02" },
    f_02: { tipo: "pensamento", texto: "Hoje eu não fui durona. Eu ri, eu encostei a cabeça no ombro dele, eu segurei a camisa dele na cozinha. E nada quebrou.", proxima: "f_03" },
    f_03: { tipo: "pensamento", texto: "Não é namoro. Mas também não é nada. Ele sabe. Eu sei.", proxima: "f_04" },
    f_04: { tipo: "pensamento", texto: "E a Serena olhou pra mim sem máscara hoje. Fria. Fazendo conta. Ela não vai chorar mais. Ela vai fazer outra coisa.", proxima: "f_05" },
    f_05: { tipo: "pensamento", texto: "E a carteira do Ren ficou vazia o dia inteiro.", proxima: "f_06" },
    f_06: { tipo: "narracao", texto: "Ela vira a página. Vinte e um. O homem do farol, numa noite de tempestade, acende a luz e espera. Nenhum barco aparece. Ele deixa a luz acesa mesmo assim, até de manhã.", proxima: "f_07" },
    f_07: { tipo: "pensamento", texto: "Amanhã ele volta. Ele tem que voltar. Eu ainda não cheguei na página cinquenta.", proxima: "ep_fim" },

    // Fim do Capítulo 51 (crie a entrada "capitulo51" em dados/capitulos.js).
    ep_fim: { fim: "capitulo51" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 52 (anotações do roteiro)
 *  • A SN SOLTOU: "Você penteou o cabelo." / "Você pode parar de perguntar" / mão dele na fivela / ela fechou a fivela dele.
 *    Os dois braços na cintura dele na garupa; a mão dele em cima das dela em todos os sinais.
 *    Ela convidou: "Me leva na loja do seu tio? Pra comer lámen. Não inventa."
 *  • REINA + AVÓ: a vizinha da Serena ouviu tudo. O Kaito NÃO gritou. Quem gritou foi a Serena, com a mãe, depois.
 *    A mãe da Serena pediu desculpa pra vizinha pelo barulho DA SERENA. (Mio espalhou, se escolhido.)
 *  • INTERVALO: joelho com joelho no banco; a cabeça dela no ombro dele ("você é um ótimo ombro quando fica parado").
 *    "ELE PENTEOU!" (Ryuji). A SERENA SEM MÁSCARA: fria, parada, "fazendo conta". As amigas menos coladas nela.
 *  • A LOJA DE LÁMEN: o tio "foi comprar alho" (com uma réstia pendurada) e virou a placa pra FECHADO. A cozinha de "uma pessoa
 *    e meia". Mexer o caldo juntos, a mão dele por cima, o vapor. "Você está tremendo." / "É o vapor." / "O vapor é quente." /
 *    "Então não é o vapor." QUASE-BEIJO. O tio voltou fazendo barulho de propósito, com UMA cabeça de alho.
 *    A FORÇA NÃO SUBIU: não é raiva que sobe, é outra coisa.
 *  • "Isso não é namoro." / "Eu sei." / "Mas também não é nada." / "Eu também sei."
 *  • ROTA KAITO: O BEIJO na frente do prédio (devagar, gosto de caldo e cebolinha, sorrindo, as mãos dela no cabelo dele sem
 *    apertar nada). "Item oito. Beijar a SN na frente do prédio não é namoro." "Item nove. Não falar isso pro Ryuji."
 *  • O REN FALTOU. O Takeo percebeu: "ele não faltou nenhum dia esse ano". Livro do farol: página 21.
 *  • ROTA RYUJI: ele contou o "esquisito": "feliz por você e triste por mim ao mesmo tempo".
 *  • Rota Takeo: a cadeira vazia do Ren; "amanhã, se ele não vier, a gente pergunta pra professora".
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 A fivela · 2 A verdade da avó · 3 Na cozinha · Rota (1 por rota)
 *
 * FLAGS NOVAS
 *  Para_de_perguntar · Mao_na_fivela · Fechou_a_dele · Espalha_Mio · Ja_sabe · Mascara_cai
 *  Nao_pede · Puxou_jaqueta · Testa_na_testa · Beijo_terca · Chamou_Kaito · Guardou_quase
 *  Pensou_Ren_Takeo · Importa_Ren · Pergunta_juntos · Nao_precisa_Blake · Tenta_Blake · Sanduiche_melhor
 *  Obrigada_falar_Ryuji · Ligou_Ryuji_51 · Sem_desculpa_Ryuji · Achou_bonito · Esta_bem_Victor · Dois_bolinhos
 */