/*
 * =====================================================================
 *  CAPÍTULO 26 — Cabine 4
 *  Segunda-feira, depois do Capítulo 25.
 * =====================================================================
 *
 *  O QUE ACONTECE
 *    • Segunda na escola. A Mio cobra o relatório do fim de semana. Conversa de melhor amiga
 *      na escada: trança, segredos, o que cada uma quer da vida.
 *    • Almoço: a Reina e a Akane sentam com a SN, a Mio e a Hana. Briga limpa pelo Takeo.
 *      A avó da Reina está bem. A Reina chama todas para o karaokê depois da aula.
 *    • Karaokê: as cinco na cabine 4. A SN canta mal e com vontade. A Hana canta “Depois da Chuva”
 *      e ninguém consegue falar depois.
 *    • Na cabine do lado: os meninos, todos de uniforme. Kaito, Blake, Ryuji, Victor e Takeo.
 *      As cabines viram uma só.
 *    • Gancho: mensagem da Sayuri. O prazo do fim do mês. "Eu não vou fazer."
 *
 *  TOM
 *    • Leve, engraçado, de amizade. Sem nhenhenhém. Romance devagar.
 *    • Nada de gangue dentro da escola. O Ren não aparece.
 *    • As músicas são inventadas ou descritas (sem letra de música real).
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Mio, Hana, Reina, Akane, Kaito, Blake, Ryuji, Victor, Takeo.
 *    Sem nome: Atendente do karaokê.
 *
 *  CENÁRIOS
 *    Escola: saida-colegio, corredor, sala-de-aula, patio-fundos
 *    Karaokê → "sala-de-karaoke" · Calçada da galeria → "rua"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Mio_sabado_conta, Admitiu_Takeo_Reina, Beijo_bochecha_Takeo, Segredo_Sakuma_Victor.
 *
 *  Crie a entrada "capitulo26" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo26", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — A TRANÇA =================== */
    // Cenário: escada do bloco A, segunda no intervalo (usa "corredor"). Música: violão leve.
    c1_01: { roupa: "escolar", tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Segunda, 7h10 — Cena 1", sprite: "mio", texto: "Segunda. Ela desce da garupa do Kaito, tira o capacete, e antes que o capacete saia inteiro da cabeça, a Mio já está do lado dela. Segurando o braço dela com as duas mãos.", proxima: "c1_02" },
    c1_02: { quem: "mio", sprite: "mio", texto: "Bom dia. Intervalo. Escada do bloco A. Você e eu. Sem desculpa. Eu sei de coisas. Eu sei que choveu. Eu sei que a moto não dormiu na lojinha.", proxima: "c1_03" },
    c1_03: { quem: "eu", texto: "Como você sabe da moto?", proxima: "c1_04" },
    c1_04: { quem: "mio", sprite: "mio", texto: "O Ryuji contou pra Hana. A Hana contou pra mim. Com horário. Com mapa.", proxima: "c1_05" },
    c1_05: { tipo: "narracao", cenario: "corredor", transicao: "tempo", sprite: null, texto: "No intervalo, a escada do bloco A está vazia. Ninguém usa essa escada porque o corrimão solta. A Mio senta um degrau acima dela, puxa o elástico do cabelo dela, e começa a trançar.", proxima: "c1_06" },
    c1_06: { quem: "mio", sprite: "mio", texto: "Eu trancei o seu cabelo uma vez no primeiro dia que você sentou do meu lado. Lembra? Você ficou dura igual um poste. Agora você deixa.", proxima: "c1_07" },
    c1_07: { quem: "eu", texto: "Agora eu deixo.", proxima: "c1_08" },
    c1_08: { quem: "mio", sprite: "mio", texto: "Ótimo. Agora fala. Tudo. Desde sexta. Se você pular uma parte, eu puxo o cabelo.", proxima: "c1_cam1" },
    c1_cam1: { caminhos: [
      { flag: "Mio_sabado_conta", proxima: "c1_prometeu" }
    ], proxima: "c1_09" },
    c1_prometeu: { quem: "mio", sprite: "mio", texto: "E você prometeu, na terça. “Sábado eu te conto tudo.” Já passou sábado. Já passou domingo. Juros.", proxima: "c1_09" },
    c1_09: { tipo: "narracao", texto: "Ela conta. A chuva. O lámen dividido em três. A mãe dizendo “eu costurei esse supercílio”. O “sim, senhora”. A luz acabando. A mão no cobertor. O trovão. O “tudo bem aí?” do corredor.", proxima: "c1_10" },
    c1_10: { tipo: "narracao", texto: "A Mio para de trançar na parte do cobertor. Segura a trança no ar. Na parte do “tudo bem aí?”, ela solta um grito tão agudo que um pombo sai voando da janela da escada.", proxima: "c1_11" },
    c1_11: { quem: "mio", sprite: "mio", texto: "A SUA MÃE. NO CORREDOR. COM SONO LEVE. Isso é a melhor coisa que eu já ouvi. Isso é melhor que novela. Isso é a novela.", proxima: "c1_12" },
    c1_12: { quem: "eu", texto: "Não aconteceu nada.", proxima: "c1_13" },
    c1_13: { quem: "mio", sprite: "mio", texto: "Exatamente. Não aconteceu nada, e mesmo assim foi a coisa mais tensa da sua vida. Isso é que é romance, SN. O nada.", proxima: "c1_14" },
    c1_14: { tipo: "narracao", texto: "Ela volta a trançar. Mais devagar agora.", proxima: "c1_15" },
    c1_15: { quem: "mio", sprite: "mio", texto: "E o domingo? O Victor contou pro Ryuji que você mandou o Caramelo sentar e ele sentou junto.", proxima: "c1_16" },
    c1_16: { quem: "eu", texto: "Esse menino conta tudo pro Ryuji?", proxima: "c1_17" },
    c1_17: { quem: "mio", sprite: "mio", texto: "Todo mundo conta tudo pro Ryuji. O Ryuji é o jornal da escola. A Hana é o arquivo.", proxima: "c1_18" },
    c1_18: { tipo: "narracao", texto: "Silêncio. A trança vai ficando pronta. Lá embaixo, o barulho do pátio. Aqui em cima, só o vento na janela quebrada.", proxima: "c1_19" },
    c1_19: { quem: "eu", texto: "E você, Mio? O que você quer ser? Depois disso tudo.", proxima: "c1_20" },
    c1_20: { tipo: "narracao", texto: "A Mio para. Ninguém pergunta isso pra Mio. Todo mundo acha que ela não pensa em nada além de fofoca.", proxima: "c1_21" },
    c1_21: { quem: "mio", sprite: "mio", texto: "Locutora de rádio. De madrugada. Daquelas que conversam com quem está acordado sozinho, trabalhando, dirigindo caminhão. Que fala de tudo. Que põe música boa. Que faz a pessoa não se sentir sozinha às três da manhã.", proxima: "c1_22" },
    c1_22: { quem: "mio", sprite: "mio", texto: "Eu falo demais, né? Então eu pensei: alguém tem que me pagar por isso.", proxima: "c1_23" },
    c1_23: { tipo: "narracao", texto: "Ela ri. Mas, dessa vez, é um riso que espera resposta.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — O sonho da Mio
    c1_esc1: { escolhas: [
      { texto: "A. “Eu ia ouvir todo dia. Às três da manhã. Mesmo dormindo.”", proxima: "c1_1a_1", pontos: { mio: 3 }, flags: ["Ouvinte_Mio"] },
      { texto: "B. “Você vai precisar de um nome de locutora. Tipo “Mio da Madrugada”.”", proxima: "c1_1b_1", pontos: { mio: 3 }, flags: ["Nome_locutora_Mio"] },
      { texto: "C. “E o Blake ia ligar pra pedir música e não ia falar nada no telefone.”", proxima: "c1_1c_1", pontos: { mio: 2 }, flags: ["Blake_radio_Mio"] }
    ]},
    c1_1a_1: { quem: "mio", sprite: "mio", texto: "Mesmo dormindo não conta.", proxima: "c1_1a_2" },
    c1_1a_2: { quem: "eu", texto: "Conta. Você ia falar tanto que ia entrar no meu sonho.", proxima: "c1_1a_3" },
    c1_1a_3: { tipo: "narracao", texto: "A Mio abraça ela por trás, com a trança pela metade na mão. Forte. Rápido. Depois volta a trançar como se nada.", proxima: "c1_24" },
    c1_1b_1: { quem: "mio", sprite: "mio", texto: "“Mio da Madrugada”... Isso é horrível. Eu amei. Eu vou usar. Eu vou te dar crédito no primeiro programa.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "eu", texto: "“Essa música vai pra SN, que deu o meu nome.”", proxima: "c1_1b_3" },
    c1_1b_3: { quem: "mio", sprite: "mio", texto: "“E que ronca no sofá dos outros.”", proxima: "c1_1b_4" },
    c1_1b_4: { quem: "eu", texto: "Quem dormiu no sofá foi o Kaito!", proxima: "c1_24" },
    c1_1c_1: { tipo: "narracao", texto: "A Mio puxa a trança. Não forte. Mas puxa.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "mio", sprite: "mio", texto: "Ele ia ligar, ficar três minutos em silêncio, e desligar. E eu ia saber que era ele pelo barulho da respiração.", proxima: "c1_1c_3" },
    c1_1c_3: { tipo: "narracao", texto: "Ela fala isso rindo. Depois para de rir. Fica olhando para a trança.", proxima: "c1_1c_4" },
    c1_1c_4: { quem: "mio", sprite: "mio", texto: "...Ele saiu com a Sayuri porque ela falou. Eu não falei. Eu nunca falo a única coisa que importa. É engraçado, né? A pessoa que mais fala na escola.", proxima: "c1_1c_5" },
    c1_1c_5: { quem: "eu", texto: "Então treina. Comigo. Fala agora. Em voz alta. Pra escada.", proxima: "c1_1c_6" },
    c1_1c_6: { tipo: "narracao", texto: "A Mio olha para a escada vazia. Respira. Abre a boca. Fecha. E então fala, baixinho, para o corrimão solto: “Eu gosto de você, seu grandão calado.” E fica vermelha até as orelhas.", proxima: "c1_1c_7" },
    c1_1c_7: { quem: "mio", sprite: "mio", texto: "...Pronto. O corrimão sabe. É um começo.", proxima: "c1_24" },

    // (todas as opções continuam aqui)
    c1_24: { tipo: "narracao", texto: "A trança fica pronta. A Mio prende com o elástico de morango dela, não com o preto da SN.", proxima: "c1_25" },
    c1_25: { quem: "mio", sprite: "mio", texto: "Pronto. Agora você está com cara de quem tem uma melhor amiga.", proxima: "c1_26" },
    c1_26: { quem: "eu", texto: "Eu tenho.", proxima: "c1_27" },
    c1_27: { tipo: "narracao", texto: "A Mio não responde. Só bate o ombro no ombro dela. E as duas descem a escada do corrimão solto juntas, segurando na parede.", proxima: "c2_01" },

    /* =================== CENA 2 — A MESA DAS CINCO =================== */
    // Cenário: pátio, almoço (usa "patio-fundos"). Música: pop leve.
    c2_01: { roupa: "escolar", tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Cena 2 — A mesa", sprite: null, texto: "No almoço, a SN, a Mio e a Hana estão no banco de sempre. E duas bandejas aparecem do outro lado da mesa. Sem pedir licença.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", sprite: "reina", texto: "A Reina. Com o cabelo arrumado, o brilho no lábio, a gola passada. A Reina de antes, inteira de novo. E, do lado dela, a Akane, com um livro de partitura embaixo do braço.", proxima: "c2_03" },
    c2_03: { quem: "reina", sprite: "reina", texto: "A gente vai sentar aqui. A outra mesa tem sol demais. E eu estou de bom humor, então vocês têm sorte.", proxima: "c2_04" },
    c2_04: { quem: "mio", sprite: "mio", texto: "Você está de bom humor? Isso existe?", proxima: "c2_05" },
    c2_05: { quem: "reina", sprite: "reina", texto: "A minha avó está em casa. Está brava, mandando em todo mundo, reclamando da comida. Ela está ótima. Então sim. Existe.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", texto: "Ela fala isso rápido e dá uma garfada no arroz para disfarçar o sorriso. A SN vê o sorriso mesmo assim.", proxima: "c2_07" },
    c2_07: { quem: "hana", sprite: "hana", texto: "Estatisticamente, a sua avó vai viver mais vinte anos. Pessoas bravas vivem mais. Eu li um estudo.", proxima: "c2_08" },
    c2_08: { quem: "reina", sprite: "reina", texto: "...Hana, isso foi a coisa mais fofa que alguém me disse esse mês.", proxima: "c2_09" },
    c2_09: { quem: "hana", sprite: "hana", texto: "Não foi fofo. Foi ciência.", proxima: "c2_10" },
    c2_10: { tipo: "narracao", sprite: "reina", texto: "A Reina vira para a SN. Aponta o garfo para ela. O olhar de duelo.", proxima: "c2_11" },
    c2_11: { quem: "reina", sprite: "reina", texto: "E você. Sexta. Chuva. O Kaito na sua casa. Eu ouvi. Isso significa que você desistiu do Takeo?", proxima: "c2_cam1" },
    c2_cam1: { caminhos: [
      { flag: "Admitiu_Takeo_Reina", proxima: "c2_briga" }
    ], proxima: "c2_sem_briga" },
    c2_briga: { quem: "reina", sprite: "reina", texto: "Porque se desistiu, eu ganhei a briga limpa sem nem lutar. E isso é chato. Eu queria lutar.", proxima: "c2_12" },
    c2_sem_briga: { quem: "reina", sprite: "reina", texto: "Porque, se for isso, eu fico com o caminho livre. E caminho livre é sem graça. Eu gosto de obstáculo.", proxima: "c2_12" },
    c2_12: { tipo: "narracao", sprite: null, texto: "A Mio para de mastigar. A Hana para de anotar. A Akane levanta os olhos da partitura pela primeira vez.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — Resposta para a Reina
    c2_esc2: { escolhas: [
      { texto: "A. “Eu não desisti de nada. Eu só não decidi nada ainda.”", proxima: "c2_2a_1", pontos: { takeo: 1 }, flags: ["Reina_nada_decidido"] },
      { texto: "B. “Choveu, Reina. Ele dormiu no sofá. Minha mãe estava lá. Calma.”", proxima: "c2_2b_1", pontos: { kaito: 1 }, flags: ["Reina_choveu"] },
      { texto: "C. “E você? Vai continuar levando bolinho pro Takeo ou vai falar logo?”", proxima: "c2_2c_1", pontos: { takeo: 1 }, flags: ["Reina_fala_logo"] }
    ]},
    c2_2a_1: { quem: "reina", sprite: "reina", texto: "Ótimo. Então ainda é briga. Eu odeio que eu gostei de ouvir isso.", proxima: "c2_13" },
    c2_2b_1: { quem: "reina", sprite: "reina", texto: "A mãe estava lá? E ele sobreviveu?", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "eu", texto: "Ela deu café pra ele na caneca de bolinha.", proxima: "c2_2b_3" },
    c2_2b_3: { tipo: "narracao", texto: "A Reina não sabe o que é a caneca de bolinha. A Mio sabe. A Mio solta outro grito. Um pombo no telhado do pátio sai voando.", proxima: "c2_13" },
    c2_2c_1: { tipo: "narracao", sprite: "reina", texto: "A Reina fica vermelha. A Reina nunca fica vermelha na frente dos outros.", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "reina", sprite: "reina", texto: "...Eu falo quando eu quiser. E quando eu falar, vai ser com um pudim que não racha. Ainda não consegui fazer um que não racha.", proxima: "c2_2c_3" },
    c2_2c_3: { quem: "akane", sprite: "akane", texto: "Ela fez quatro ontem. Todos racharam.", proxima: "c2_2c_4" },
    c2_2c_4: { quem: "reina", sprite: "reina", texto: "AKANE.", proxima: "c2_13" },

    // (todas as opções continuam aqui)
    c2_13: { tipo: "narracao", sprite: null, texto: "A Akane volta para a partitura. A SN olha para o livro. É uma música de piano, com anotações em lápis em todas as margens. Coisas como “respira aqui” e “mais devagar, idiota”.", proxima: "c2_14" },
    c2_14: { quem: "eu", texto: "Você toca, Akane?", proxima: "c2_15" },
    c2_15: { quem: "akane", sprite: "akane", texto: "Toco. Piano. Desde os cinco anos. Cantar eu deixo pros outros.", proxima: "c2_16" },
    c2_16: { quem: "reina", sprite: "reina", texto: "“Toco.” Ela ganhou um concurso estadual de piano com doze anos. Ela não conta pra ninguém porque fica com vergonha.", proxima: "c2_17" },
    c2_17: { quem: "akane", sprite: "akane", texto: "Reina.", proxima: "c2_18" },
    c2_18: { quem: "reina", sprite: "reina", texto: "Você me entregou o pudim. Agora estamos quites.", proxima: "c2_19" },
    c2_19: { tipo: "narracao", texto: "A Reina bate a mão na mesa. Todo mundo olha.", proxima: "c2_20" },
    c2_20: { quem: "reina", sprite: "reina", texto: "Decidido. Hoje, depois da aula. Karaokê da galeria. As cinco. Pra comemorar a minha avó em casa e brava. Eu pago a primeira hora.", proxima: "c2_21" },
    c2_21: { quem: "hana", sprite: "hana", texto: "Eu canto. Mas só se tiver “Depois da Chuva” no catálogo.", proxima: "c2_21b" },
    c2_21b: { quem: "mio", sprite: "mio", texto: "Reina. Ela canta igual uma janela abrindo. Prepara o coração.", proxima: "c2_22" },
    c2_22: { quem: "reina", sprite: "reina", texto: "A Hana? A do caderno de gatinho? ...Tá. Agora eu preciso ver isso.", proxima: "c2_23" },
    c2_23: { tipo: "narracao", sprite: "hana", texto: "A Hana não responde. Abre o caderno de gatinho e começa uma página nova.", proxima: "c2_24" },
    c2_24: { quem: "hana", sprite: "hana", texto: "...Eu vou fazer uma tabela. De afinação. De vocês.", proxima: "c3_01" },

    /* =================== CENA 3 — CABINE 4 =================== */
    // Cenário: karaokê da galeria (usa "clube-leitura"). Música: pop animado, luzes coloridas.
    c3_01: { roupa: "escolar", tipo: "narracao", cenario: "sala-de-karaoke", transicao: "tempo", legenda: "Cena 3 — Cabine 4", sprite: null, texto: "O karaokê da galeria fica no segundo andar, em cima de uma loja de celular. Cabine 4. Um sofá de couro falso rasgado, uma mesa de vidro, dois microfones, uma bola de luz girando no teto e um cardápio de petisco plastificado.", proxima: "c3_02" },
    c3_02: { quem: "desconhecido", rotulo: "Atendente do karaokê", texto: "Cinco meninas de uniforme? Uma hora? Não pode subir em cima da mesa. Da última vez quebraram.", proxima: "c3_03" },
    c3_03: { quem: "mio", sprite: "mio", texto: "Não fui eu!", proxima: "c3_04" },
    c3_04: { quem: "desconhecido", rotulo: "Atendente do karaokê", texto: "Foi você.", proxima: "c3_05" },
    c3_05: { tipo: "narracao", sprite: null, transicao: "tempo", texto: "Primeira música: a Mio e a Reina. Ao mesmo tempo. Uma balada de novela, daquelas com muito vento e muito choro. As duas competem para ver quem segura a nota mais alta. Ninguém segura. As duas tossem.", proxima: "c3_06" },
    c3_06: { quem: "hana", sprite: "hana", texto: "A Mio desafinou onze vezes. A Reina, nove. Mas a Reina fez cara de quem acertou, então tecnicamente empata.", proxima: "c3_07" },
    c3_07: { quem: "reina", sprite: "reina", texto: "Isso se chama presença de palco.", proxima: "c3_08" },
    c3_08: { tipo: "narracao", sprite: null, texto: "Depois o microfone vem para a SN. Ela segura. Fica olhando para a tela com a lista de músicas.", proxima: "c3_09" },
    c3_09: { tipo: "pensamento", texto: "Da última vez que eu entrei numa cabine dessas, foi com a Mio e a Hana. Eu desafinei tudo e descobri que a Hana canta como se abrisse uma janela. Hoje somos cinco.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — O que a SN canta
    c3_esc3: { escolhas: [
      { texto: "A. A abertura de um anime antigo. Gritando. Em pé no sofá.", proxima: "c3_3a_1", pontos: { mio: 2 }, flags: ["Canta_anime"] },
      { texto: "B. Uma música lenta, sozinha. E cantar mal, mas inteira, sem parar.", proxima: "c3_3b_1", pontos: { hana: 1, mio: 1 }, flags: ["Canta_lenta"] },
      { texto: "C. Passar o microfone pra Hana. “Depois da Chuva. Tem no catálogo.”", proxima: "c3_3c_1", pontos: { hana: 2 }, flags: ["Microfone_Hana"] }
    ]},
    c3_3a_1: { tipo: "narracao", texto: "Ela escolhe a abertura de um anime de robô que passava de manhã quando ela tinha oito anos. Sobe no sofá. A Mio sobe junto. A Reina, depois de três segundos de dignidade, sobe também.", proxima: "c3_3a_2" },
    c3_3a_2: { tipo: "narracao", texto: "Ela canta igual ela joga. Gritando. Sem medo. Apontando para a tela como se a tela fosse um inimigo. No refrão, as três pulam juntas. O sofá geme.", proxima: "c3_3a_3" },
    c3_3a_3: { quem: "desconhecido", rotulo: "Atendente do karaokê", texto: "NÃO PODE SUBIR NO SOFÁ!", proxima: "c3_3a_4" },
    c3_3a_4: { tipo: "narracao", texto: "Elas descem. Rindo tanto que a Hana precisa abrir a porta para entrar ar.", proxima: "c3_10" },
    c3_3b_1: { tipo: "narracao", texto: "Ela escolhe uma música lenta. Uma que a avó cantava lavando louça. Ela canta mal. Muito mal. Erra o tom em todas as partes altas. E continua.", proxima: "c3_3b_2" },
    c3_3b_2: { tipo: "narracao", texto: "Ninguém ri. A Mio fica quieta, com o queixo na mão. A Reina para de mexer no celular. No final, a Hana anota alguma coisa no caderno.", proxima: "c3_3b_3" },
    c3_3b_3: { quem: "hana", sprite: "hana", texto: "Afinação: dois de dez. Coragem: dez de dez. Média: seis. Passou.", proxima: "c3_10" },
    c3_3c_1: { tipo: "narracao", sprite: "hana", texto: "Ela estende o microfone para a Hana. A Hana olha para o microfone. Para ela. E pega com as duas mãos, igual da primeira vez, como se fosse uma coisa que pudesse explodir.", proxima: "c3_10" },

    // (todas as opções continuam aqui)
    c3_10: { tipo: "narracao", sprite: "hana", texto: "A Hana procura no catálogo. Acha. “Depois da Chuva”. Fica de pé, de costas para elas, encarando a tela. Igual da primeira vez.", proxima: "c3_11" },
    c3_11: { tipo: "narracao", efeito: "eco", texto: "E a cabine 4 inteira para.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", texto: "A primeira frase, baixinho. A segunda, um pouco mais alto. E, no refrão, a voz dela abre como uma janela. Limpa, grande, maior do que ela. Enche a cabine e passa pela parede de espuma. A Reina está de boca aberta. A Akane larga a partitura no sofá. A Mio já sabia. E chora mesmo assim.", proxima: "c3_13" },
    c3_13: { tipo: "narracao", texto: "Quando ela termina, ninguém aplaude. Ninguém consegue. Dois segundos inteiros de silêncio.", proxima: "c3_14" },
    c3_14: { tipo: "narracao", texto: "E então, do outro lado da parede, da cabine 5, alguém aplaude. Alto. Muito alto. E grita.", proxima: "c3_15" },
    c3_15: { quem: "ryuji", sprite: "ryuji", texto: "QUEM CANTOU ISSO? QUEM CANTOU ISSO? EU QUERO CASAR COM ESSA VOZ!", proxima: "c3_16" },
    c3_16: { tipo: "narracao", texto: "As cinco se olham.", proxima: "c3_17" },
    c3_17: { quem: "mio", sprite: "mio", texto: "...Esse é o Ryuji.", proxima: "c4_01" },

    /* =================== CENA 4 — CABINE 5 =================== */
    // Cenário: karaokê (usa "clube-leitura"). Música: pop, bagunça.
    c4_01: { roupa: "escolar", tipo: "narracao", transicao: "tempo", legenda: "Cena 4 — Cabine 5", sprite: null, texto: "A porta da cabine 4 abre antes que alguém decida alguma coisa. O Ryuji está no corredor, de uniforme, gravata frouxa, com um microfone na mão que ele arrancou do fio sem querer.", proxima: "c4_02" },
    c4_02: { quem: "ryuji", sprite: "ryuji", texto: "...Vocês. Por que são vocês? Quem cantou? Foi a Hana? Fala que foi a Hana.", proxima: "c4_03" },
    c4_03: { quem: "hana", sprite: "hana", texto: "Fui eu.", proxima: "c4_03b" },
    c4_03b: { quem: "ryuji", sprite: "ryuji", texto: "...A Hana do caderno de gatinho? A Hana das placas? Eu passei um ano contando fofoca pra uma cantora.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", sprite: null, texto: "Atrás do Ryuji, pela porta aberta da cabine 5, a SN vê. Sentados no sofá de couro falso, todos de uniforme da escola. Mochila no chão. Gravata solta. Como cinco alunos normais numa segunda-feira.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", sprite: "kaito", texto: "O Kaito, com os braços cruzados, sem microfone, do jeito de quem foi arrastado. O Blake, ocupando metade do sofá, comendo batata frita. O Victor, em pé na mesa, que não pode subir. E, na ponta, segurando o outro microfone com as duas mãos, de óculos tortos, o Takeo.", proxima: "c4_06" },
    c4_06: { quem: "takeo", sprite: "takeo", texto: "Eles disseram que era estudo em grupo.", proxima: "c4_07" },
    c4_07: { quem: "victor", sprite: "victor", texto: "E é. A gente está estudando música.", proxima: "c4_08" },
    c4_08: { quem: "reina", sprite: "reina", texto: "Vocês trouxeram o Takeo pro karaokê numa segunda-feira?", proxima: "c4_09" },
    c4_09: { quem: "ryuji", sprite: "ryuji", texto: "Ele queria vir! Ele sabe todas as músicas de novela! Ele canta igual uma senhora de setenta anos! É lindo!", proxima: "c4_10" },
    c4_10: { quem: "desconhecido", rotulo: "Atendente do karaokê", texto: "Se vocês juntarem as cabines, eu cobro as duas. Se subirem na mesa, eu cobro a mesa.", proxima: "c4_11" },
    c4_11: { tipo: "narracao", texto: "Cinco minutos depois, as duas cabines são uma só. A porta entre elas aberta. Dez pessoas de uniforme, dois sofás, quatro microfones e um petisco de batata frita que o Blake protege com o braço.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", sprite: "victor", transicao: "tempo", texto: "O Victor canta uma música romântica olhando para a atendente pela janelinha da porta, de joelho no chão. Ela fecha a cortina da janelinha. Ele continua cantando para a cortina.", proxima: "c4_13" },
    c4_13: { tipo: "narracao", sprite: "takeo", texto: "O Takeo canta uma balada de novela antiga. Desafinado. Inteiro. Com uma mão no peito e os olhos fechados. Igual uma senhora de setenta anos. O Ryuji tinha razão. É lindo.", proxima: "c4_cam1" },
    c4_cam1: { caminhos: [
      { flag: "Beijo_bochecha_Takeo", proxima: "c4_takeo_bochecha" }
    ], proxima: "c4_14" },
    c4_takeo_bochecha: { tipo: "narracao", texto: "No refrão, ele abre um olho. Olha para a SN. Fecha de novo, rápido, vermelho até as orelhas. A Reina vê. A Reina estreita os olhos.", proxima: "c4_14" },
    c4_14: { tipo: "narracao", sprite: "reina", texto: "Quando o Takeo termina, a Reina pega o microfone dele. Escolhe uma música de dueto. Olha para a SN por cima da tela. Desafio.", proxima: "c4_15" },
    c4_15: { quem: "reina", sprite: "reina", texto: "Takeo. Dueto. Comigo. Agora.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — O dueto
    c4_esc4: { escolhas: [
      { texto: "A. Deixar. Briga limpa é briga limpa. Ela canta com ele.", proxima: "c4_4a_1", pontos: { takeo: 1 }, flags: ["Deixou_dueto_Reina"] },
      { texto: "B. Pegar o terceiro microfone e entrar no dueto. Vira trio.", proxima: "c4_4b_1", pontos: { takeo: 2 }, flags: ["Trio_Takeo"] },
      { texto: "C. Dar o terceiro microfone pro Kaito, que não cantou nada. “Sua vez.”", proxima: "c4_4c_1", pontos: { kaito: 3 }, flags: ["Microfone_Kaito"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "A Reina e o Takeo cantam. Ela canta bem e olha para ele. Ele canta mal e olha para a tela, apavorado. No final, ela encosta o ombro no dele. Ele fica tão vermelho que a luz da bola de luz muda de cor em cima dele.", proxima: "c4_4a_2" },
    c4_4a_2: { quem: "reina", sprite: "reina", texto: "Ponto pra mim.", proxima: "c4_4a_3" },
    c4_4a_3: { quem: "eu", texto: "Por enquanto.", proxima: "c4_16" },
    c4_4b_1: { tipo: "narracao", texto: "Ela pega o terceiro microfone. Entra no meio. A Reina olha para ela. Ela olha de volta. O Takeo, no meio das duas, segurando o dele, olha para a tela como quem olha para uma saída de emergência.", proxima: "c4_4b_2" },
    c4_4b_2: { tipo: "narracao", texto: "Elas cantam. Uma mais alto que a outra. A música vira uma competição de quem segura a nota mais tempo. O Takeo para de cantar no meio e só segura o microfone, assistindo, de boca aberta.", proxima: "c4_4b_3" },
    c4_4b_3: { quem: "takeo", sprite: "takeo", texto: "Eu... eu acho que eu não estou mais na música.", proxima: "c4_4b_4" },
    c4_4b_4: { quem: "hana", sprite: "hana", texto: "Não está. Empate. As duas desafinaram igual.", proxima: "c4_16" },
    c4_4c_1: { tipo: "narracao", sprite: "kaito", texto: "Ela estende o microfone para o Kaito. Ele olha para o microfone como quem olha para uma barra de ferro.", proxima: "c4_4c_2" },
    c4_4c_2: { quem: "kaito", sprite: "kaito", texto: "Não.", proxima: "c4_4c_3" },
    c4_4c_3: { quem: "eu", texto: "Uma frase. Só uma.", proxima: "c4_4c_4" },
    c4_4c_4: { quem: "ryuji", sprite: "ryuji", texto: "O líder não canta desde os doze anos! Ninguém nunca ouviu!", proxima: "c4_4c_5" },
    c4_4c_5: { tipo: "narracao", sprite: "kaito", texto: "O Kaito olha para o Ryuji. Para o microfone. Para ela. E pega. A cabine inteira fica em silêncio. Ele não escolhe música. Ele só canta, sem música, uma frase de uma música antiga. Lenta. A do violão desafinado. A do cara que canta sobre uma cidade que nunca visitou.", proxima: "c4_4c_6" },
    c4_4c_6: { tipo: "narracao", texto: "Ele canta desafinado. Igual o pai dele cantava. E para depois de uma frase. Devolve o microfone. Senta. Cruza os braços.", proxima: "c4_4c_7" },
    c4_4c_7: { quem: "victor", sprite: "victor", texto: "...Líder. Eu acho que eu vou chorar.", proxima: "c4_4c_8" },
    c4_4c_8: { quem: "kaito", sprite: "kaito", texto: "Chora em casa.", proxima: "c4_16" },

    // (todas as opções continuam aqui)
    c4_16: { tipo: "narracao", sprite: null, transicao: "tempo", texto: "No fim da segunda hora, alguém coloca uma música de anime que todo mundo conhece. As duas cabines se levantam. Os dez cantando juntos, de uniforme, gritando, desafinados.", proxima: "c4_17" },
    c4_17: { tipo: "narracao", sprite: "blake", texto: "No meio da bagunça, o Blake, que não tinha cantado nada, está do lado da Mio. Os dois espremidos contra a parede porque o Victor ocupou o meio. Eles dividem o mesmo microfone. Sem querer. Era o único que sobrou.", proxima: "c4_18" },
    c4_18: { tipo: "narracao", texto: "O Blake canta baixo. Muito baixo. Mas canta. A Mio olha para ele de lado, com o microfone entre os dois. Ela canta mais baixo também. Para ouvir ele.", proxima: "c4_19" },
    c4_19: { tipo: "pensamento", texto: "Ela não falou nada. Ele também não. Mas os dois estão segurando o mesmo microfone e nenhum dos dois soltou. Pra quem não fala, isso é quase um discurso.", proxima: "c4_20" },
    c4_20: { tipo: "narracao", sprite: "hana", texto: "A Hana, no canto, faz a segunda voz da música inteira sem ninguém pedir. Bonito demais para uma música de robô. O Ryuji fica olhando para ela, com o microfone desligado na mão, sem cantar. Ele esquece de cantar.", proxima: "c4_21" },
    c4_21: { quem: "desconhecido", rotulo: "Atendente do karaokê", texto: "ACABOU O TEMPO. E QUEM SUBIU NA MESA VAI PAGAR A MESA.", proxima: "c4_22" },
    c4_22: { quem: "victor", sprite: "victor", texto: "Eu não subi! Eu estava flutuando!", proxima: "c5_01" },

    /* =================== CENA 5 — A RUA DA GALERIA =================== */
    // Cenário: rua da galeria, fim de tarde (usa "saida-colegio"). Música: violão, depois baixo grave.
    c5_01: { roupa: "escolar", tipo: "narracao", cenario: "rua", transicao: "tempo", legenda: "Cena 5 — Na calçada", sprite: null, texto: "Na calçada, o sol já está baixo. As quatro motos estão estacionadas na frente da loja de celular. O Ryuji oferece carona para a Hana na Relâmpago. A Hana olha para a moto amarela por muito tempo.", proxima: "c5_02" },
    c5_02: { quem: "hana", sprite: "hana", texto: "Ela é amarela. Tecnicamente.", proxima: "c5_03" },
    c5_03: { quem: "ryuji", sprite: "ryuji", texto: "Ela é dourada de luz.", proxima: "c5_04" },
    c5_04: { quem: "hana", sprite: "hana", texto: "Tá. Eu vou. Mas se você cantar no caminho, eu anoto cada nota errada.", proxima: "c5_05" },
    c5_05: { tipo: "narracao", texto: "O Ryuji sobe na moto mais rápido do que a SN já viu ele fazer qualquer coisa. O Blake, sem falar nada, estende o capacete reserva dele para a Mio. A Mio olha para o capacete. Para ele. Pega.", proxima: "c5_06" },
    c5_06: { tipo: "narracao", texto: "A Reina pega o braço do Takeo. Ele vai de ônibus. Ela também, de repente. O Victor sobe na moto dele, que solta um estalo. Pá. A Akane vai junto com eles, com a partitura embaixo do braço.", proxima: "c5_07" },
    c5_07: { tipo: "narracao", sprite: "kaito", texto: "O Kaito estende o capacete vermelho-escuro. Ela pega. E, nessa hora, o celular dela vibra no bolso do uniforme.", proxima: "c5_08" },
    c5_08: { quem: "mensagem", rotulo: "Mensagem — Número desconhecido", texto: "É a Sayuri. Peguei seu número com a Hana. Não fala pra ninguém.", proxima: "c5_09" },
    c5_09: { quem: "mensagem", rotulo: "Mensagem — Sayuri", texto: "Eles me mandaram fazer outra coisa. Até o fim do mês. Com você. Ou com alguém perto de você.", proxima: "c5_10" },
    c5_10: { quem: "mensagem", rotulo: "Mensagem — Sayuri", texto: "Eu não vou fazer.", proxima: "c5_11" },
    c5_11: { tipo: "narracao", texto: "Ela fica olhando para a tela. A última mensagem. Quatro palavras. Sem ponto de exclamação. Sem emoji. Só aquilo.", proxima: "c5_cam1" },
    c5_cam1: { caminhos: [
      { flag: "Segredo_Sakuma_Victor", proxima: "c5_sakuma" }
    ], proxima: "c5_12" },
    c5_sakuma: { tipo: "pensamento", texto: "“Então a filha resolve, igual da outra vez.” O senhor Sakuma mandou lembrar do prazo. E a filha disse não.", proxima: "c5_12" },
    c5_12: { tipo: "pensamento", texto: "Ela disse não. Do jeito dela. Pra mim.", proxima: "c5_13" },
    c5_13: { quem: "kaito", sprite: "kaito", texto: "Tudo bem?", proxima: "c5_14" },
    c5_14: { tipo: "narracao", texto: "Ela guarda o celular. Coloca o capacete. Ajeita a trança que a Mio fez, que ainda está inteira, com o elástico de morango.", proxima: "c5_15" },
    c5_15: { quem: "eu", texto: "Tudo. Hoje foi um dia bom.", proxima: "c5_16" },
    c5_16: { quem: "kaito", sprite: "kaito", texto: "Foi.", proxima: "c5_17" },
    c5_17: { tipo: "narracao", texto: "Ele liga a moto. Ela sobe. As quatro motos saem juntas da frente da galeria, roncando, em fila, uma amarela, uma preta fosca, uma cheia de adesivo e uma com o tanque vermelho-escuro.", proxima: "c5_18" },
    c5_18: { tipo: "pensamento", texto: "Foi um dia bom. E amanhã eu respondo a Sayuri.", proxima: "c5_19" },
    c5_19: { tipo: "pensamento", texto: "Se ela disse não, ela não vai dizer não sozinha.", proxima: "ep_fim" },

    // Fim do Capítulo 26 (crie a entrada "capitulo26" em dados/capitulos.js).
    ep_fim: { fim: "capitulo26" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 27 (anotações do roteiro)
 *  • A Sayuri mandou mensagem: mandaram ela fazer "outra coisa" com a SN ou com alguém perto dela
 *    até o fim do mês. Ela disse "eu não vou fazer". O que acontece com quem diz não ao Sakuma?
 *  • A Mio quer ser locutora de rádio de madrugada. Falou "eu gosto de você" pro corrimão (Blake_radio_Mio).
 *    A Mio e o Blake dividiram o microfone. Ele emprestou o capacete reserva.
 *  • A Hana canta (Depois da Chuva, igual ao Cap. 3). O Ryuji esqueceu de cantar olhando pra ela. A Akane toca piano (concurso estadual aos 12).
 *  • A Reina: briga limpa pelo Takeo continua. Pudim que não racha ainda não saiu.
 *  • O Kaito cantou uma frase da música do pai (Microfone_Kaito).
 *
 * ESCOLHAS DO CAPÍTULO (4)
 *  1 O sonho da Mio · 2 Resposta para a Reina · 3 O que a SN canta · 4 O dueto
 *
 * FLAGS NOVAS
 *  Ouvinte_Mio · Nome_locutora_Mio · Blake_radio_Mio · Reina_nada_decidido · Reina_choveu
 *  Reina_fala_logo · Canta_anime · Canta_lenta · Microfone_Hana · Deixou_dueto_Reina · Trio_Takeo
 *  Microfone_Kaito
 */