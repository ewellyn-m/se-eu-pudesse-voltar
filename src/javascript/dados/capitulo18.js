/*
 * =====================================================================
 *  CAPÍTULO 18 — A menina do boné
 *  De segunda a quinta, depois da fábrica (Capítulo 17).
 * =====================================================================
 *
 *  O QUE ACONTECE
 *    • O cano do apartamento da avó estoura. Ela vem passar uns dias com a SN e a mãe.
 *      Cenas com a avó durante a semana, até ela ir embora na quinta. Sem nada demais.
 *    • A escola inteira fala da "menina do boné" que quebrou uma barra de ferro.
 *      Ninguém sabe quem é. Ninguém desconfia da SN. Os meninos não falam disso na escola.
 *    • O Ren volta para a carteira perto da porta. Educado. Quieto. Não olha para a SN.
 *    • Na lojinha do tio, os meninos tentam descobrir quem é a menina. Teorias absurdas.
 *    • O Takeo, de rosto roxo, e um momento só dos dois.
 *    • A Sayuri leva o Blake na enfermaria. A Mio vê. Conversa da SN com a Mio.
 *      O Blake e a SN no portão, esperando o Kaito.
 *    • A avó da Reina recebe alta.
 *    • Gancho: a Sayuri com uma marca nova no pulso, depois de ser vista com o Blake.
 *
 *  REGRAS QUE ESTE CAPÍTULO SEGUE
 *    • NINGUÉM sabe que a SN é a menina do boné. Ninguém desconfia.
 *    • A mãe e a avó não se metem nas brigas da SN. A avó não fala de força.
 *    • Nada de gangue dentro da escola: os alunos comentam, os meninos não.
 *    • O Ren quase não fala. Ninguém fala o apelido antigo.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Avó (da SN), Mãe, Mio, Hana, Kaito, Blake, Ryuji, Victor, Takeo, Reina, Sayuri, Ren.
 *    Sem nome: alunos no corredor, enfermeira da escola.
 *
 *  CENÁRIOS
 *    Apartamento da SN → "apartamento" · Quarto → "quarto-sn"
 *    Escola: sala-de-aula, corredor, clube-leitura, saida-colegio · Enfermaria → "corredor"
 *    Lojinha de lámen do tio → "beco-mercado" (troque por "loja-lamen" se criar)
 *    Ponto de ônibus → "saida-colegio"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Levantou_Takeo_fabrica, Agua_olhos_Kaito, Admitiu_Takeo_Reina, Contou_lamen_avo.
 *
 *  Crie a entrada "capitulo18" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo18", {
  inicio: "c0_01",
  cenas: {

    /* =================== ABERTURA — A MALA =================== */
    // Cenário: apartamento da SN, segunda cedo. Música: piano leve.
    c0_01: { tipo: "narracao", cenario: "sala-sn", transicao: "tempo", legenda: "Segunda, 6h50", sprite: null, texto: "Segunda-feira. Antes das sete da manhã, a campainha toca. A SN abre a porta de pijama, com a escova de dente na boca.", proxima: "c0_02" },
    c0_02: { sprite: "avo", tipo: "narracao", texto: "A avó. Com uma mala de rodinha, duas sacolas de pano e a plantinha da caneca rachada debaixo do braço.", proxima: "c0_03" },
    c0_03: { quem: "avo", texto: "Estourou o cano da cozinha. Às quatro da manhã. A água chegou na sala. O síndico disse que conserta até quinta. Eu vou ficar aqui. Já avisei a sua mãe. Ela disse “mãe, são seis e cinquenta”. Eu disse “eu sei ver as horas”.", proxima: "c0_04" },
    c0_04: { tipo: "narracao", texto: "Ela entra sem esperar resposta. Coloca a plantinha na janela da cozinha, do lado da outra. Olha as duas. Satisfeita.", proxima: "c0_05" },
    c0_05: { quem: "avo", texto: "Pronto. Agora elas têm companhia. Planta sozinha fica triste.", proxima: "c0_06" },
    c0_06: { tipo: "narracao", sprite: null, texto: "A mãe aparece na porta do quarto, de cabelo em pé, com cara de quem dormiu três horas. Olha para a mala. Para a avó. Suspira.", proxima: "c0_07" },
    c0_07: { quem: "mae", texto: "Ela dorme no seu quarto. No colchão. Eu tenho plantão de noite a semana inteira.", proxima: "c0_08" },
    c0_08: { tipo: "pensamento", texto: "Na outra vida, eu nunca dormi no mesmo quarto que ela. Eu tinha vergonha do meu quarto. Eu tinha vergonha de tudo.", proxima: "c0_09" },
    c0_09: { tipo: "pensamento", texto: "Hoje eu só tenho vergonha de não ter arrumado a cama.", proxima: "c1_01" },

    /* =================== CENA 1 — A LENDA =================== */
    // Cenário: corredor e sala de aula, segunda. Música: pop leve, com burburinho.
    c1_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Cena 1 — A lenda", sprite: null, texto: "Na escola, ninguém fala de outra coisa.", proxima: "c1_02" },
    c1_02: { quem: "desconhecido", rotulo: "Aluna do 1º ano", texto: "...ela levou a barrada e nem piscou! E aí partiu no meio! Com a mão!", proxima: "c1_03" },
    c1_03: { quem: "desconhecido", rotulo: "Aluno do 2º ano", texto: "Meu primo disse que ela jogou metade no rio. Tipo, longe. Tipo, Olimpíadas.", proxima: "c1_04" },
    c1_04: { quem: "desconhecido", rotulo: "Outra aluna", texto: "Eu ouvi que ela é de outra cidade. Que veio só pra isso. Que é tipo uma lutadora de verdade.", proxima: "c1_05" },
    c1_05: { tipo: "narracao", texto: "Na frente do bebedouro, um grupo em volta de um celular. Um vídeo tremido, filmado de longe, atrás de uma cerca. Só dá para ver pontinhos se mexendo num pátio cinza. E, por meio segundo, um boné preto.", proxima: "c1_06" },
    c1_06: { quem: "desconhecido", rotulo: "Aluno do 2º ano", texto: "Olha! Ali! A menina do boné!", proxima: "c1_07" },
    c1_07: { tipo: "narracao", texto: "A SN passa pelo grupo. Ninguém olha para ela. Ninguém nunca olha para ela no corredor. Hoje, pela primeira vez, ela agradece isso.", proxima: "c1_08" },
    c1_08: { tipo: "narracao", cenario: "sala-de-aula", sprite: "mio", texto: "Na sala, a Mio está em pé na cadeira. Literalmente. Contando a história para quem quiser ouvir.", proxima: "c1_09" },
    c1_09: { quem: "mio", texto: "...e aí ela SUMIU. Assim. Ninguém viu o rosto. Ninguém sabe o nome. É a coisa mais legal que já aconteceu nessa cidade. Eu quero ser amiga dela. Eu quero que ela me ensine a quebrar coisas.", proxima: "c1_10" },
    c1_10: { quem: "hana", sprite: "hana", texto: "Uma barra de ferro maciço de um metro e meio, com uns dois centímetros de diâmetro, quebrada com as mãos. Isso não é humanamente possível. Deve ser montagem. Ou a barra já estava podre de ferrugem.", proxima: "c1_11" },
    c1_11: { quem: "mio", sprite: "mio", texto: "Hana, deixa eu ter uma heroína!", proxima: "c1_12" },
    c1_12: { quem: "hana", sprite: "hana", texto: "Pode ter. Mas ela está usando física errada.", proxima: "c1_13" },
    c1_13: { tipo: "narracao", sprite: null, texto: "A SN senta. Abre o caderno. Não consegue escrever nada.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — A heroína da Mio
    c1_esc1: { escolhas: [
      { texto: "A. “Talvez ela só estivesse no lugar certo.”", proxima: "c1_1a_1", pontos: { mio: 1 }, flags: ["Lugar_certo_mascara"] },
      { texto: "B. “Talvez ela não queira ser achada, Mio.”", proxima: "c1_1b_1", pontos: { hana: 1 }, flags: ["Nao_quer_ser_achada"] },
      { texto: "C. Não falar nada. Só sorrir para o caderno.", proxima: "c1_1c_1", flags: ["Sorriu_caderno"] }
    ]},
    c1_1a_1: { quem: "mio", sprite: "mio", texto: "No lugar certo? Ela estava no lugar MAIS errado do mundo. E fez a coisa certa. Isso é ser heroína.", proxima: "c1_14" },
    c1_1b_1: { tipo: "narracao", sprite: "mio", texto: "A Mio para. Pensa. Desce da cadeira, devagar.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "mio", texto: "...É. Se eu fosse forte assim, eu também ia esconder. Imagina todo mundo te pedindo pra abrir pote de pepino.", proxima: "c1_14" },
    c1_1c_1: { tipo: "narracao", texto: "Ela sorri para o caderno. A Hana repara. Mas a Hana repara em tudo, e acha que é porque a SN está achando a Mio engraçada.", proxima: "c1_14" },

    // (todas as opções continuam aqui)
    c1_14: { tipo: "narracao", sprite: null, texto: "A porta da sala abre. E alguém entra que não entrava há três semanas.", proxima: "c1_15" },
    c1_15: { sprite: "ren", tipo: "narracao", texto: "O Ren. Uniforme passado. Cabelo arrumado. Um livro de xadrez embaixo do braço. Ele cumprimenta o professor com uma reverência pequena.", proxima: "c1_16" },
    c1_16: { quem: "ren", texto: "Desculpa a demora. Eu estava doente.", proxima: "c1_17" },
    c1_17: { tipo: "narracao", texto: "Ele senta na carteira perto da porta. Abre o caderno. Copia a matéria do quadro. Responde a primeira pergunta do professor. Certo.", proxima: "c1_18" },
    c1_18: { tipo: "narracao", texto: "Ele não olha para ela. Nenhuma vez. Durante a aula inteira. Ela sente, mesmo assim, como quem sente um ventilador ligado nas costas.", proxima: "c1_19" },
    c1_19: { tipo: "pensamento", texto: "Ninguém nessa escola sabe quem era a menina do boné. Só ele.", proxima: "c1_20" },
    c1_20: { sprite: null, tipo: "pensamento", texto: "E ele não vai contar. Ele nunca conta nada. Ele guarda.", proxima: "c2_01" },

    /* =================== CENA 2 — O COLCHÃO =================== */
    // Cenário: quarto da SN, segunda à noite. Música: piano baixo, quente.
    c2_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Segunda, 22h", sprite: null, texto: "À noite, a mãe sai para o plantão. A avó deita no colchão do lado da cama da SN. Com rolinhos no cabelo. E uma camisola de flor que ela tem desde antes da SN nascer.", proxima: "c2_02" },
    c2_02: { quem: "avo", texto: "Apaga a luz. Mas deixa a da rua. Eu não durmo no escuro total. Fico achando que morri.", proxima: "c2_03" },
    c2_03: { tipo: "narracao", texto: "A SN apaga. A luz amarela do poste entra pela cortina. A avó fica olhando para o teto.", proxima: "c2_04" },
    c2_04: { quem: "avo", texto: "Esse quarto é bom. Pequeno, mas bom. Seu avô e eu moramos dez anos num quarto menor que esse. Com a sua mãe e a sua tia dormindo numa cama só.", proxima: "c2_05" },
    c2_05: { tipo: "pensamento", texto: "A minha tia. Ela falou da Sora sem perceber. Como quem fala de alguém que só mudou de cidade.", proxima: "c2_06" },
    c2_06: { quem: "eu", texto: "Como era?", proxima: "c2_07" },
    c2_07: { quem: "avo", texto: "Barulhento. A sua mãe falava dormindo. A sua tia chutava. Seu avô roncava. Eu era a única que dormia direito. Por isso eu acordava primeiro e comia o pão mais quente.", proxima: "c2_08" },
    c2_08: { tipo: "narracao", texto: "Ela ri sozinha no escuro. A SN ri também.", proxima: "c2_09" },
    c2_09: { quem: "avo", texto: "E você? Tem alguém que te faz ficar acordada de noite? Não me olha assim. Eu ouvi o celular vibrar quatro vezes enquanto você escovava o dente.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — No escuro com a avó
    c2_esc2: { escolhas: [
      { texto: "A. “Tem. Mas eu ainda não sei qual.”", proxima: "c2_2a_1", flags: ["Avo_nao_sabe_qual"] },
      { texto: "B. “Não tem ninguém, vó.”", proxima: "c2_2b_1", flags: ["Avo_ninguem"] },
      { texto: "C. “Como a senhora soube que era o vô?”", proxima: "c2_2c_1", flags: ["Avo_historia_avo"] }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "A avó vira de lado no colchão. Apoia a cabeça na mão. Os rolinhos fazem barulho no travesseiro.", proxima: "c2_2a_2" },
    c2_2a_2: { quem: "avo", texto: "“Qual.” Então tem mais de um. Que coisa boa. Na sua idade eu tinha dois também. Um tocava violão. O outro trazia pão.", proxima: "c2_2a_3" },
    c2_2a_3: { quem: "eu", texto: "E a senhora escolheu o do pão.", proxima: "c2_2a_4" },
    c2_2a_4: { quem: "avo", texto: "Escolhi. Violão bonito não enche barriga. Mas não escolhe pelo que eu escolhi. Escolhe por quem te deixa dormir tranquila. Esse é o certo.", proxima: "c2_10" },
    c2_2b_1: { quem: "avo", texto: "Hm. Ninguém vibra quatro vezes, então.", proxima: "c2_2b_2" },
    c2_2b_2: { tipo: "narracao", texto: "O celular vibra de novo, em cima da mesa de cabeceira. A avó não fala nada. Só dá uma risadinha pelo nariz e vira para o outro lado.", proxima: "c2_10" },
    c2_2c_1: { quem: "avo", texto: "Eu fiquei doente uma vez. Gripe forte. Uma semana de cama. E todo dia, às sete da manhã, tinha um pão quente pendurado na maçaneta da porta. Num saquinho de papel. Sem bilhete.", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "avo", texto: "No oitavo dia eu levantei cedo e fiquei esperando atrás da porta. Ele chegou. Pendurou o pão. E quando eu abri, ele ficou tão vermelho que o pão caiu no chão.", proxima: "c2_2c_3" },
    c2_2c_3: { quem: "avo", texto: "Aí eu soube. Não foi o pão. Foi que ele achou que ninguém ia ver. E fez mesmo assim.", proxima: "c2_10" },

    // (todas as opções continuam aqui)
    c2_10: { tipo: "narracao", texto: "Depois de um tempo, a respiração da avó fica lenta. Ela dorme. Ronca um pouquinho. Igual ela disse que o avô roncava.", proxima: "c2_11" },
    c2_11: { tipo: "pensamento", texto: "Na sexta eu quebrei uma barra de ferro no meio. Hoje eu estou deitada no escuro ouvindo a minha avó roncar. As duas coisas são eu.", proxima: "c3_01" },

    /* =================== CENA 3 — TEORIAS =================== */
    // Cenário: lojinha de lámen do tio do Kaito, terça à tarde (usa "beco-mercado"). FORA da escola.
    // Música: tema da gangue, versão engraçada.
    c3_01: { tipo: "narracao", cenario: "loja-lamen", transicao: "tempo", legenda: "Terça — Cena 3 — Teorias", sprite: null, texto: "Terça, depois da aula. A avó pediu lámen. “Daquele lugar que você falou.” A SN vai até a lojinha do tio do Kaito com uma marmita de vidro dentro da sacola.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "No balcão, os quatro. O Kaito atrás, de avental, mexendo uma panela. O Blake, o Ryuji e o Victor sentados nos banquinhos, cada um com uma tigela. O Caramelo dormindo embaixo do banquinho do Victor.", proxima: "c3_03" },
    c3_03: { quem: "ryuji", sprite: "ryuji", texto: "...e eu estou dizendo, ela é uma lutadora profissional. Da Coreia. Disfarçada de estudante. Uma espiã.", proxima: "c3_04" },
    c3_04: { quem: "victor", texto: "Ela é a minha futura esposa. Eu já decidi. Uma mulher que quebra ferro é uma mulher que protege o lar.", proxima: "c3_05" },
    c3_05: { quem: "blake", sprite: "blake", texto: "Você nem viu o rosto dela.", proxima: "c3_06" },
    c3_06: { quem: "victor", texto: "Eu vi o boné. O boné era lindo.", proxima: "c3_07" },
    c3_07: { tipo: "narracao", sprite: "kaito", texto: "O Kaito levanta os olhos da panela. Vê a SN na porta. Para de mexer.", proxima: "c3_08" },
    c3_08: { quem: "kaito", texto: "...Oi.", proxima: "c3_09" },
    c3_09: { quem: "eu", texto: "Um lámen de missô pra viagem. Pra minha avó. Ela está passando uns dias lá em casa.", proxima: "c3_10" },
    c3_10: { quem: "ryuji", sprite: "ryuji", texto: "SN! Você chegou na hora certa! Ajuda a gente! Quem você acha que é a menina do boné?", proxima: "c3_11" },
    c3_11: { tipo: "narracao", texto: "Os quatro olham para ela. O Kaito também, por cima da panela. Esperando. Nenhum deles desconfia de nada. Eles estão perguntando como quem pergunta de um filme.", proxima: "c3_12" },
    c3_12: { quem: "kaito", sprite: "kaito", texto: "Eu vou achar ela. Ela salvou a minha vida. Eu tenho que agradecer. Eu estava cego, cheio de cimento, de costas. Se não fosse ela...", proxima: "c3_cam1" },
    c3_cam1: { caminhos: [
      { flag: "Agua_olhos_Kaito", proxima: "c3_agua" }
    ], proxima: "c3_13" },
    c3_agua: { quem: "kaito", texto: "Ela até jogou água no meu olho. Sem falar nada. Quem faz isso no meio de uma briga? Ela é estranha. Estranha de um jeito bom.", proxima: "c3_13" },
    c3_13: { quem: "blake", sprite: "blake", texto: "Eu cheguei perto. Ela correu antes. Pelo buraco da cerca. Ela corria igual vento. Eu nunca vi ninguém correr daquele jeito.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — A opinião da SN
    c3_esc3: { escolhas: [
      { texto: "A. “Vai ver ela não quer agradecimento. Vai ver ela só não queria que vocês se machucassem.”", proxima: "c3_3a_1", pontos: { kaito: 2 }, flags: ["Sem_agradecimento"] },
      { texto: "B. “Eu acho que é uma espiã da Coreia.”", proxima: "c3_3b_1", pontos: { ryuji: 2 }, flags: ["Espia_Coreia"] },
      { texto: "C. “Vocês foram brigar no meio da aula? E não me falaram nada?”", proxima: "c3_3c_1", pontos: { kaito: 1, blake: 1 }, flags: ["Cobrou_briga_meninos"] }
    ]},
    c3_3a_1: { tipo: "narracao", sprite: "kaito", texto: "O Kaito fica quieto. Volta a mexer a panela. Devagar.", proxima: "c3_3a_2" },
    c3_3a_2: { quem: "kaito", texto: "...Então ela é igual a gente. A gente também não quer que ninguém se machuque.", proxima: "c3_3a_3" },
    c3_3a_3: { quem: "eu", texto: "É. Igual vocês.", proxima: "c3_14" },
    c3_3b_1: { quem: "ryuji", sprite: "ryuji", texto: "EU SABIA! Viu? A SN concorda! Somos dois! Isso é ciência!", proxima: "c3_3b_2" },
    c3_3b_2: { quem: "blake", sprite: "blake", texto: "Isso não é ciência.", proxima: "c3_3b_3" },
    c3_3b_3: { quem: "victor", texto: "Espiã ou não, ela continua sendo a minha futura esposa.", proxima: "c3_3b_4" },
    c3_3b_4: { tipo: "narracao", sprite: "kaito", texto: "O Kaito joga um pedaço de cebolinha na cabeça do Victor. Sem tirar os olhos da panela. Ele não sabe por que fez isso. Ninguém pergunta.", proxima: "c3_14" },
    c3_3c_1: { tipo: "narracao", texto: "Silêncio. Os quatro se olham.", proxima: "c3_3c_2" },
    c3_3c_2: { quem: "kaito", sprite: "kaito", texto: "Não era pra você saber.", proxima: "c3_3c_3" },
    c3_3c_3: { quem: "eu", texto: "A escola inteira sabe, Kaito. Tem vídeo.", proxima: "c3_3c_4" },
    c3_3c_4: { quem: "kaito", texto: "...O vídeo é borrado.", proxima: "c3_3c_5" },
    c3_3c_5: { quem: "eu", texto: "Esse não é o ponto.", proxima: "c3_3c_6" },
    c3_3c_6: { tipo: "narracao", texto: "Ele abaixa a cabeça. Mexe a panela. O Ryuji assobia, olhando para o teto. O Blake come o lámen muito devagar.", proxima: "c3_3c_7" },
    c3_3c_7: { quem: "kaito", texto: "Eu não conto porque não quero você perto. Já falei isso uma vez. Isso não mudou. Só isso.", proxima: "c3_14" },

    // (todas as opções continuam aqui)
    c3_14: { tipo: "narracao", sprite: "kaito", texto: "Ele enche a marmita de vidro até a borda. Coloca dois ovos em vez de um. Fecha a tampa. Entrega.", proxima: "c3_15" },
    c3_15: { quem: "kaito", texto: "Fala pra sua avó que é cortesia.", proxima: "c3_cam2" },
    c3_cam2: { caminhos: [
      { flag: "Contou_lamen_avo", proxima: "c3_avo_lamen" }
    ], proxima: "c3_16" },
    c3_avo_lamen: { tipo: "pensamento", texto: "“Lámen sem pedir. Na minha época era flor.” Se eu contar pra ela que ele deu dois ovos, ela vai querer conhecer ele.", proxima: "c3_16" },
    c3_16: { cenario: "cozinha", tipo: "narracao", sprite: null, texto: "Em casa, a avó come o lámen inteiro na mesa da cozinha. Toma o caldo direto da marmita, segurando com as duas mãos.", proxima: "c3_17" },
    c3_17: { quem: "avo", texto: "Dois ovos. Hm. Quem coloca dois ovos sem cobrar está querendo agradar alguém. E não sou eu, porque ele nunca me viu.", proxima: "c4_01" },

    /* =================== CENA 4 — ROXO =================== */
    // Cenário: sala de aula, quarta de manhã. Música: violão leve.
    c4_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Quarta — Cena 4 — Roxo", sprite: "takeo", texto: "Quarta. O rosto do Takeo está de três cores. Roxo no olho esquerdo. Verde na bochecha. Amarelo no queixo. Ele diz para os professores que caiu da escada.", proxima: "c4_02" },
    c4_02: { quem: "takeo", texto: "É sério. Eu caí. De uma escada. Muito alta. Várias vezes.", proxima: "c4_03" },
    c4_03: { tipo: "narracao", texto: "No intervalo, a SN tira da mochila um saquinho de ervilha congelada que ela pegou do congelador de casa de manhã, enrolado num pano de prato. Coloca na mesa dele.", proxima: "c4_04" },
    c4_04: { quem: "takeo", texto: "...Você trouxe ervilha pra escola?", proxima: "c4_05" },
    c4_05: { quem: "eu", texto: "Minha avó disse que é o melhor pra olho roxo. Ela está lá em casa essa semana.", proxima: "c4_06" },
    c4_06: { quem: "takeo", texto: "A sua avó? A do balanço? Que gritava da janela quando a gente ia alto demais?", proxima: "c4_07" },
    c4_07: { quem: "eu", texto: "Essa.", proxima: "c4_08" },
    c4_08: { tipo: "narracao", texto: "Ele coloca a ervilha no olho. Faz uma careta. Fica assim, com meio rosto escondido, olhando para ela com o olho bom.", proxima: "c4_09" },
    c4_09: { quem: "takeo", texto: "Na sexta... eu achei que eu ia morrer. Numa poça. De cimento. Que jeito idiota de morrer.", proxima: "c4_10" },
    c4_10: { quem: "takeo", texto: "E eu pensei numa coisa só. Que eu não tinha te falado...", proxima: "c4_11" },
    c4_11: { tipo: "narracao", texto: "Ele para. Ela espera. Ele abaixa a ervilha. Olha para ela. Fica vermelho embaixo do roxo, o que deixa o rosto dele de quatro cores.", proxima: "c4_12" },
    c4_12: { quem: "takeo", texto: "...que o bolinho de frango é o meu preferido também. Eu sempre dava pra você porque você gostava mais. Mas é o meu preferido. Pronto. Eu precisava falar isso antes de morrer.", proxima: "c4_13" },
    c4_13: { tipo: "pensamento", texto: "Não era isso. Não era isso que ele ia falar. Eu vi a cara dele.", proxima: "c4_cam1" },
    c4_cam1: { caminhos: [
      { flag: "Levantou_Takeo_fabrica", proxima: "c4_levantou" }
    ], proxima: "c4_esc4" },
    c4_levantou: { quem: "takeo", texto: "E a menina do boné me levantou da poça. E eu nem agradeci direito. Eu falei “seja quem for”. Que coisa mais sem educação.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — O bolinho de frango
    c4_esc4: { escolhas: [
      { texto: "A. “Então a partir de agora a gente divide. Metade pra cada.”", proxima: "c4_4a_1", pontos: { takeo: 3 }, flags: ["Divide_frango_Takeo"] },
      { texto: "B. “Não era isso que você ia falar, Takeo.”", proxima: "c4_4b_1", pontos: { takeo: 2 }, flags: ["Nao_era_isso_Takeo"] },
      { texto: "C. Pegar a ervilha e segurar ela no olho dele. Com cuidado.", proxima: "c4_4c_1", pontos: { takeo: 3 }, flags: ["Ervilha_Takeo"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "O Takeo sorri. Dói. Ele sorri mesmo assim.", proxima: "c4_4a_2" },
    c4_4a_2: { quem: "takeo", texto: "Metade. Tá. Mas eu escolho a metade. Porque eu esperei dez anos.", proxima: "c4_14" },
    c4_4b_1: { tipo: "narracao", texto: "Ele fica olhando para ela. O olho bom muito aberto. O roxo muito roxo.", proxima: "c4_4b_2" },
    c4_4b_2: { quem: "takeo", texto: "...Não era. Mas a outra coisa eu quero falar sem ervilha na cara. Num lugar mais bonito. Um dia.", proxima: "c4_4b_3" },
    c4_4b_3: { tipo: "pensamento", texto: "O Takeo tímido é também o Takeo mais direto do mundo. Ele não vai demorar dez anos dessa vez.", proxima: "c4_14" },
    c4_4c_1: { tipo: "narracao", texto: "Ela pega a ervilha. Segura no olho dele. Com a outra mão, afasta o cabelo da testa para não molhar. Ele fica muito parado. Muito.", proxima: "c4_4c_2" },
    c4_4c_2: { quem: "takeo", texto: "...Assim eu não consigo copiar a matéria.", proxima: "c4_4c_3" },
    c4_4c_3: { quem: "eu", texto: "Eu copio pra você. Duas vezes. A primeira fica feia.", proxima: "c4_4c_4" },
    c4_4c_4: { tipo: "narracao", texto: "Ele ri. A ervilha treme. Ela continua segurando.", proxima: "c4_14" },

    // (todas as opções continuam aqui)
    c4_14: { tipo: "narracao", sprite: "reina", texto: "Do outro lado da sala, a Reina está olhando para os dois. Ela não está com cara de briga. Está com cara de quem está esperando o celular tocar. Ele toca.", proxima: "c4_15" },
    c4_15: { tipo: "narracao", texto: "Ela lê. E fica de pé. E dá um grito. Um grito de felicidade, no meio da sala, que faz o professor de química derrubar o giz.", proxima: "c4_16" },
    c4_16: { quem: "reina", texto: "Ela recebeu alta! A minha avó! Vai pra casa amanhã!", proxima: "c4_17" },
    c4_17: { tipo: "narracao", texto: "A Akane abraça ela. A Reina, que nunca deixa ninguém abraçar ela em público, deixa. Depois vira para a SN, ainda com a Akane pendurada no pescoço.", proxima: "c4_18" },
    c4_18: { quem: "reina", texto: "Sábado. Pudim. Na minha casa. Com ela. Você vem. E não quebra nenhum travesseiro.", proxima: "c4_cam2" },
    c4_cam2: { caminhos: [
      { flag: "Admitiu_Takeo_Reina", proxima: "c4_reina_briga" }
    ], proxima: "c5_01" },
    c4_reina_briga: { quem: "reina", texto: "E pode trazer o Takeo. Briga limpa. Eu vou ser legal com ele na frente da minha avó. Isso é estratégia, não é trapaça.", proxima: "c5_01" },

    /* =================== CENA 5 — A ENFERMARIA =================== */
    // Cenário: corredor da enfermaria, quarta à tarde (usa "corredor"). Música: violino baixo.
    c5_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Cena 5 — A enfermaria", sprite: null, texto: "Depois do almoço, a SN passa pelo corredor da enfermaria. A porta está aberta.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", sprite: "blake", texto: "Lá dentro, o Blake está sentado na maca, com a mão direita enfaixada pela metade. Os nós dos dedos em carne viva, da sexta. E a Sayuri, sentada do lado, terminando de enrolar a faixa.", proxima: "c5_03" },
    c5_03: { quem: "sayuri", texto: "Você nunca cuida dessa mão. Desde o primeiro ano. Você bate em parede quando fica nervoso e depois esconde no bolso.", proxima: "c5_04" },
    c5_04: { tipo: "narracao", texto: "O Blake não responde. Mas deixa ela enrolar. E, quando ela termina, ela não solta a mão dele logo. Fica segurando um pouco.", proxima: "c5_05" },
    c5_05: { tipo: "narracao", texto: "A SN dá um passo para trás. E esbarra em alguém.", proxima: "c5_06" },
    c5_06: { tipo: "narracao", sprite: "mio", texto: "A Mio. Com um band-aid de gatinho na mão, que ela trouxe da mochila. Para o Blake.", proxima: "c5_07" },
    c5_07: { tipo: "narracao", texto: "Ela olha para dentro da enfermaria. Para a mão do Blake na mão da Sayuri. Para o band-aid de gatinho na própria mão.", proxima: "c5_08" },
    c5_08: { tipo: "narracao", texto: "Ela guarda o band-aid no bolso. Vira. E anda. Rápido. Sem correr, porque correr ia chamar atenção.", proxima: "c5_09" },
    c5_09: { tipo: "narracao", cenario: "corredor", sprite: null, texto: "A SN alcança a Mio no fim do corredor, perto da escada do terraço. A Mio está sentada no degrau, com os joelhos dobrados. Não está chorando. Está com a cara de quem está fazendo muita força para não chorar.", proxima: "c5_10" },
    c5_10: { quem: "mio", sprite: "mio", texto: "Eu sou muito idiota. Eu trouxe band-aid de gatinho. Pra um cara de um metro e noventa que briga com gangue.", proxima: "c5_11" },
    c5_11: { quem: "mio", texto: "Ela jogou água podre em você, SN. E ele deixa ela segurar a mão dele. Como se nada. Como se ela fosse...", proxima: "c5_12" },
    c5_12: { tipo: "narracao", texto: "Ela não termina.", proxima: "c5_13" },
    c5_13: { tipo: "pensamento", texto: "Eu sei que o balde foi mandado. Não é meu pra contar. E, mesmo se fosse, não muda o que a Mio viu. A Sayuri está segurando a mão dele porque quer.", proxima: "c5_14" },
    c5_14: { tipo: "pensamento", texto: "E eu? Eu também vi. E também senti alguma coisa. E eu não posso falar isso pra Mio. Não agora. Talvez nunca.", proxima: "c5_esc5" },

    // ▶ ESCOLHA 5 — No degrau, com a Mio
    c5_esc5: { escolhas: [
      { texto: "A. Sentar do lado dela. Pegar o band-aid de gatinho do bolso dela e colar no próprio dedo.", proxima: "c5_5a_1", pontos: { mio: 3 }, flags: ["Bandaid_Mio"] },
      { texto: "B. “Fala com ele, Mio. Não comigo. Com ele.”", proxima: "c5_5b_1", pontos: { mio: 2 }, flags: ["Mio_fala_Blake"] },
      { texto: "C. “Eu também fiquei mal. Quando ela segurou a mão dele.”", proxima: "c5_5c_1", pontos: { mio: 1, blake: 1 }, flags: ["Admitiu_Mio_ciume"] }
    ]},
    c5_5a_1: { tipo: "narracao", texto: "Ela senta. Pega o band-aid. Abre. Cola no dedo indicador, onde não tem machucado nenhum.", proxima: "c5_5a_2" },
    c5_5a_2: { quem: "mio", texto: "...Você não está machucada.", proxima: "c5_5a_3" },
    c5_5a_3: { quem: "eu", texto: "Agora estou. Tem um gatinho no meu dedo. É grave.", proxima: "c5_5a_4" },
    c5_5a_4: { tipo: "narracao", texto: "A Mio ri. Um riso molhado. E encosta a cabeça no ombro da SN.", proxima: "c5_15" },
    c5_5b_1: { quem: "mio", texto: "E falar o quê? “Para de deixar a menina que eu odeio segurar a sua mão”?", proxima: "c5_5b_2" },
    c5_5b_2: { quem: "eu", texto: "Pode ser. Ou só “eu trouxe um band-aid pra você e fiquei triste”. É verdade. Ele sabe ouvir verdade.", proxima: "c5_5b_3" },
    c5_5b_3: { tipo: "narracao", texto: "A Mio fica olhando para o band-aid. Depois guarda de novo no bolso. Com cuidado. Como quem guarda para depois.", proxima: "c5_15" },
    c5_5c_1: { tipo: "narracao", texto: "A Mio vira para ela. Devagar. Os olhos ainda molhados.", proxima: "c5_5c_2" },
    c5_5c_2: { quem: "mio", texto: "Você... também?", proxima: "c5_5c_3" },
    c5_5c_3: { quem: "eu", texto: "Quando ela segurou a mão dele, eu também fiquei mal. Não sei se do mesmo jeito que você. Um pouco. Só isso.", proxima: "c5_5c_4" },
    c5_5c_4: { tipo: "narracao", texto: "A Mio fica quieta muito tempo. Depois segura a mão da SN. Forte.", proxima: "c5_5c_5" },
    c5_5c_5: { quem: "mio", texto: "Então a gente fica mal junto. É melhor do que separado. E se um dia for você... eu vou ficar triste. Mas vou ficar do seu lado. Promete que faz igual?", proxima: "c5_5c_6" },
    c5_5c_6: { quem: "eu", texto: "Prometo.", proxima: "c5_15" },

    // (todas as opções continuam aqui)
    c5_15: { tipo: "narracao", sprite: null, texto: "O sinal toca. As duas descem a escada juntas. No caminho, passam pela porta da enfermaria. A Sayuri já foi embora. O Blake está sozinho na maca, olhando para a faixa na mão.", proxima: "c5_16" },
    c5_16: { tipo: "narracao", texto: "Ele levanta os olhos. Vê as duas. Vê a Mio. A boca dele abre. A Mio passa reto. A boca dele fecha.", proxima: "c6_01" },

    /* =================== CENA 6 — DEZ METROS =================== */
    // Cenário: portão da escola, quarta depois da aula (usa "saida-colegio"). Música: violão calmo.
    c6_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Cena 6 — Dez metros", sprite: "blake", texto: "Depois da aula, no portão, o Blake está encostado no muro. A mão enfaixada no bolso. Esperando o Kaito, que sempre demora porque fica ajudando o zelador a fechar as janelas do segundo andar.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", texto: "A SN para do lado dele para esperar a Mio. Os dois ficam ali. Em silêncio. O silêncio do Blake não é desconfortável. É só grande.", proxima: "c6_03" },
    c6_03: { tipo: "narracao", texto: "Depois de um tempo, sem falar nada, ele tira o celular do bolso e vira a tela para ela.", proxima: "c6_04" },
    c6_04: { tipo: "narracao", texto: "Uma foto de um desenho preso na geladeira com fita. Giz de cera. Uma menina de boné preto quebrando uma barra no meio. Do lado, um dinossauro verde.", proxima: "c6_05" },
    c6_05: { quem: "blake", texto: "O Noah fez a menina. O Theo fez o dinossauro.", proxima: "c6_06" },
    c6_06: { quem: "eu", texto: "Por que o dinossauro?", proxima: "c6_07" },
    c6_07: { quem: "blake", texto: "Ele disse que ela precisa de alguém pra ir junto.", proxima: "c6_08" },
    c6_08: { tipo: "narracao", texto: "Ele guarda o celular. O canto da boca dele sobe. Quase nada. Depois volta ao normal.", proxima: "c6_09" },
    c6_09: { quem: "blake", texto: "Eu estava a dez metros.", proxima: "c6_10" },
    c6_10: { tipo: "narracao", texto: "Ela não entende. Ele continua olhando para a rua.", proxima: "c6_11" },
    c6_11: { quem: "blake", texto: "Na sexta. Quando jogaram cimento no Kaito. Eu estava segurando dois contra o muro. Eu vi a barra subir. Eu não cheguei.", proxima: "c6_12" },
    c6_12: { quem: "blake", texto: "Desde os sete anos eu brigo com ele. Nunca ganhei. Ele é o único cara que eu respeito. E na única vez que ele precisou de alguém nas costas, não fui eu.", proxima: "c6_13" },
    c6_13: { tipo: "narracao", texto: "Ele fala sem drama. Mas a mão enfaixada, dentro do bolso, está fechada.", proxima: "c6_14" },
    c6_14: { tipo: "pensamento", texto: "Ele não sabe que fui eu. Eu não posso contar. Mas eu vi os dois que ele estava segurando. Se ele soltasse, seriam quatro em volta do Kaito, não dois.", proxima: "c6_esc6" },

    // ▶ ESCOLHA 6 — No portão com o Blake
    c6_esc6: { escolhas: [
      { texto: "A. “Você segurou dois pra ele não ficar cercado. Isso também é estar nas costas dele.”", proxima: "c6_6a_1", pontos: { blake: 3 }, flags: ["Blake_dez_metros"] },
      { texto: "B. “Ele não pensa isso de você. Nem um pouco.”", proxima: "c6_6b_1", pontos: { blake: 2, kaito: 1 }, flags: ["Blake_Kaito_respeito"] },
      { texto: "C. Não falar nada. Ficar do lado dele no muro até o Kaito chegar.", proxima: "c6_6c_1", pontos: { blake: 2 }, flags: ["Blake_silencio_muro"] }
    ]},
    c6_6a_1: { tipo: "narracao", texto: "Ele vira a cabeça. Olha para ela. Pela primeira vez na conversa.", proxima: "c6_6a_2" },
    c6_6a_2: { quem: "blake", texto: "...Eu não tinha pensado assim.", proxima: "c6_6a_3" },
    c6_6a_3: { tipo: "narracao", texto: "Ele não agradece. Mas a mão no bolso abre.", proxima: "c6_15" },
    c6_6b_1: { quem: "blake", texto: "Como você sabe?", proxima: "c6_6b_2" },
    c6_6b_2: { quem: "eu", texto: "Porque ele fala de você igual você fala dele.", proxima: "c6_6b_3" },
    c6_6b_3: { tipo: "narracao", texto: "O Blake solta o ar pelo nariz. Quase um riso.", proxima: "c6_6b_4" },
    c6_6b_4: { quem: "blake", texto: "Ele não fala de mim.", proxima: "c6_6b_5" },
    c6_6b_5: { quem: "eu", texto: "Fala. Pouco. Mas fala.", proxima: "c6_15" },
    c6_6c_1: { tipo: "narracao", texto: "Ela não fala nada. Ele também não. Os dois ficam encostados no muro, olhando a rua.", proxima: "c6_6c_2" },
    c6_6c_2: { tipo: "narracao", texto: "Em algum momento, sem olhar para ela, ele dá um passo para o lado. Para a sombra da árvore cobrir ela também.", proxima: "c6_15" },
    c6_15: { tipo: "narracao", sprite: "kaito", texto: "O Kaito aparece correndo pela escada. Vê os dois no muro. Diminui o passo.", proxima: "c6_16" },
    c6_16: { quem: "kaito", texto: "Desculpa. O zelador não achava a chave.", proxima: "c6_17" },
    c6_17: { tipo: "narracao", texto: "O Blake desencosta do muro. Dá um empurrão no ombro do Kaito, sem motivo. O Kaito não sai do lugar. Empurra de volta. O Blake dá um passo para trás.", proxima: "c6_18" },
    c6_18: { sprite: null, quem: "kaito", texto: "Quatrocentos e treze.", proxima: "c6_19" },
    c6_19: { quem: "blake", sprite: "blake", texto: "Empurrão não conta.", proxima: "c6_20" },
    c6_20: { tipo: "narracao", sprite: null, texto: "Os dois vão embora juntos, discutindo se empurrão conta. No meio da rua, o Blake olha para trás. Uma vez. Rápido. E vira de novo antes que o Kaito perceba.", proxima: "c7_01" },

    /* =================== CENA 7 — A NOVELA =================== */
    // Cenário: apartamento da SN, quarta à noite. Música: tema de novela, baixinho.
    c7_01: { tipo: "narracao", cenario: "sala-sn-noite", transicao: "tempo", legenda: "Quarta, 21h", sprite: null, texto: "À noite, a avó e a SN assistem novela no sofá. A avó com os pés numa bacia de água morna com sal grosso. A SN com o pote de geleia de laranja e uma colher.", proxima: "c7_02" },
    c7_02: { quem: "avo", texto: "Esse aí é o vilão. Olha a sobrancelha. Todo vilão tem essa sobrancelha. Arrumadinha demais.", proxima: "c7_03" },
    c7_03: { tipo: "pensamento", texto: "O Ren tem a sobrancelha arrumadinha demais.", proxima: "c7_04" },
    c7_04: { quem: "avo", texto: "E essa moça vai escolher o errado. Eu sei. Ela vai escolher o do carro bonito. O certo é o do caminhão de gás. Ele leva o botijão até lá em cima sem cobrar a escada.", proxima: "c7_05" },
    c7_05: { quem: "eu", texto: "Como a senhora sabe?", proxima: "c7_06" },
    c7_06: { quem: "avo", texto: "Quarenta anos de novela, minha filha. Eles sempre mostram o certo carregando alguma coisa pesada sem reclamar.", proxima: "c7_07" },
    c7_07: { tipo: "narracao", texto: "A SN ri tão de repente que derruba geleia no sofá. A avó limpa com o dedo. E come.", proxima: "c7_08" },
    c7_08: { quem: "avo", texto: "Amanhã eu vou embora. O síndico ligou. O cano está novo.", proxima: "c7_09" },
    c7_09: { tipo: "narracao", texto: "Ela fala isso olhando para a televisão. Como quem fala do tempo.", proxima: "c7_10" },
    c7_10: { tipo: "pensamento", texto: "Quatro dias. Passou tão rápido. Na outra vida, eu deixava passar anos sem ver ela. Agora quatro dias parecem pouco.", proxima: "c7_esc7" },

    // ▶ ESCOLHA 7 — A última noite da avó
    c7_esc7: { escolhas: [
      { texto: "A. “Fica mais um dia. A senhora nem viu o final da novela.”", proxima: "c7_7a_1", flags: ["Pediu_avo_ficar"] },
      { texto: "B. Encostar a cabeça no ombro dela e assistir o resto do capítulo assim.", proxima: "c7_7b_1", flags: ["Ombro_avo"] },
      { texto: "C. “Me ensina a fazer essa geleia antes de ir?”", proxima: "c7_7c_1", flags: ["Receita_geleia_avo"] }
    ]},
    c7_7a_1: { quem: "avo", texto: "O final eu já sei. Ela casa com o do gás. Demora seis meses, mas casa.", proxima: "c7_7a_2" },
    c7_7a_2: { quem: "avo", texto: "E não precisa de cano estourado pra eu vir, sabia? Me chama num domingo. Eu venho. Eu trago geleia.", proxima: "c7_11" },
    c7_7b_1: { tipo: "narracao", texto: "Ela encosta a cabeça no ombro da avó. O ombro é pequeno, ossudo, e cheira a sabonete de glicerina e a sal grosso.", proxima: "c7_7b_2" },
    c7_7b_2: { tipo: "narracao", texto: "A avó não fala nada. Só coloca a mão no cabelo dela. E fica fazendo carinho com dois dedos, devagar, durante o capítulo inteiro. Do jeito que fazia quando ela tinha seis anos e não conseguia dormir.", proxima: "c7_11" },
    c7_7c_1: { quem: "avo", texto: "Agora? São nove da noite.", proxima: "c7_7c_2" },
    c7_7c_2: { quem: "eu", texto: "A gente tem laranja. Eu comprei semana passada.", proxima: "c7_7c_3" },
    c7_7c_3: { cenario: "cozinha", tipo: "narracao", texto: "A avó tira os pés da bacia. Seca com a toalha. E, dez minutos depois, as duas estão na cozinha, descascando laranja, com a novela tocando sozinha na sala.", proxima: "c7_7c_4" },
    c7_7c_4: { quem: "avo", texto: "A casca fina, não grossa. Grossa amarga. E açúcar só depois que ferver. Quem coloca açúcar antes não tem paciência. E geleia é paciência.", proxima: "c7_11" },

    // (todas as opções continuam aqui)
    c7_11: { tipo: "narracao", texto: "Na novela, a moça escolhe o do carro bonito. A avó bate na própria perna.", proxima: "c7_12" },
    c7_12: { quem: "avo", texto: "Eu falei! Seis meses! Agora são seis meses de sofrimento!", proxima: "c8_01" },

    /* =================== CENA 8 — O PONTO DE ÔNIBUS =================== */
    // Cenário: ponto de ônibus, quinta cedo (usa "saida-colegio"). Música: piano baixo.
    c8_01: { tipo: "narracao", cenario: "rua", transicao: "tempo", legenda: "Quinta, 6h40", sprite: null, texto: "Quinta de manhã. A SN leva a avó até o ponto de ônibus antes da escola. Puxando a mala de rodinha, que tem uma roda que trava. A avó leva as duas plantas no colo. Ela decidiu levar as duas.", proxima: "c8_02" },
    c8_02: { quem: "avo", texto: "A sua mãe não ia regar. Ela ia afogar. Igual os cactos.", proxima: "c8_03" },
    c8_03: { tipo: "narracao", texto: "Elas esperam. O ônibus atrasa. A avó conta das vizinhas. Do síndico. Do moço da padaria que dá pão de ontem de graça para ela porque ela lembra o nome da mãe dele.", proxima: "c8_04" },
    c8_04: { tipo: "narracao", texto: "Quando o ônibus aparece na esquina, a avó coloca as plantas no banco do ponto. E abraça a SN. Forte. Mais forte do que uma senhora daquele tamanho devia conseguir.", proxima: "c8_05" },
    c8_05: { quem: "avo", texto: "Você está bem. Dá pra ver. Continua assim.", proxima: "c8_06" },
    c8_06: { tipo: "narracao", texto: "Ela tira do cabelo um grampo antigo, de metal, com uma florzinha de esmalte descascado na ponta. Coloca no cabelo da SN. Torto.", proxima: "c8_07" },
    c8_07: { quem: "avo", texto: "Era da minha mãe. Depois foi meu. Agora fica com você. Não é nada demais. É só um grampo. Mas segura bem.", proxima: "c8_08" },
    c8_08: { tipo: "narracao", texto: "Ela pega as plantas. Sobe no ônibus. Senta na janela. Acena com a mão que não está segurando vaso.", proxima: "c8_09" },
    c8_09: { tipo: "narracao", texto: "A SN fica no ponto até o ônibus virar a esquina. Depois mais um pouco. Com a mão no grampo torto.", proxima: "c8_10" },
    c8_10: { tipo: "pensamento", texto: "Na outra vida, a última vez que eu vi ela foi num hospital. Eu cheguei atrasada. Eu sempre chegava atrasada.", proxima: "c8_11" },
    c8_11: { tipo: "pensamento", texto: "Dessa vez, eu vou chamar ela num domingo. Sem cano estourado. Só porque sim.", proxima: "c9_01" },

    /* =================== CENA 9 — OUTRA MARCA =================== */
    // Cenário: corredor da escola, quinta. Gancho. Música: silêncio, depois corda grave.
    c9_01: { tipo: "narracao", cenario: "banheiro", transicao: "tempo", legenda: "Quinta-feira", sprite: null, texto: "Na escola, na troca da segunda aula, a SN entra no banheiro do segundo andar para arrumar o grampo, que escorregou.", proxima: "c9_02" },
    c9_02: { tipo: "narracao", texto: "A Sayuri está lá. Sozinha. Na pia do canto. Com a manga do casaco puxada até o cotovelo, passando água fria no braço.", proxima: "c9_03" },
    c9_03: { tipo: "narracao", texto: "Não é mais só o pulso. Agora são marcas no antebraço também. Mais escuras. Mais novas. De ontem.", proxima: "c9_04" },
    c9_04: { tipo: "narracao", texto: "A Sayuri vê a SN pelo espelho. Puxa a manga. Rápido. Fecha a torneira.", proxima: "c9_05" },
    c9_05: { quem: "sayuri", texto: "Não fala nada.", proxima: "c9_06" },
    c9_06: { quem: "eu", texto: "Eu não ia falar.", proxima: "c9_07" },
    c9_07: { tipo: "narracao", texto: "A Sayuri seca as mãos no papel. Devagar. Muito devagar. Como quem está decidindo se fala.", proxima: "c9_08" },
    c9_08: { quem: "sayuri", texto: "Ontem à noite o homem de terno foi lá em casa. Ele sabia que eu tinha ido na enfermaria com o Blake. Ele sabia que eu segurei a mão dele.", proxima: "c9_09" },
    c9_09: { quem: "sayuri", texto: "Ele disse que eu não devia andar com aquele grupo. Que não era pra mim. Que tinha gente que não gostava disso.", proxima: "c9_10" },
    c9_10: { quem: "sayuri", texto: "Por que alguém que empresta dinheiro pro meu pai se importa com quem segura a minha mão?", proxima: "c9_11" },
    c9_11: { tipo: "narracao", texto: "Ela não espera resposta. Joga o papel no lixo. Sai do banheiro sem olhar para trás.", proxima: "c9_12" },
    c9_12: { tipo: "narracao", texto: "A SN fica sozinha na frente do espelho. Com o grampo da avó na mão.", proxima: "c9_13" },
    c9_13: { tipo: "pensamento", texto: "Quem empresta dinheiro não se importa com mão. Quem se importa com mão é outra pessoa.", proxima: "c9_14" },
    c9_14: { tipo: "pensamento", texto: "Alguém que sabe quem estava na enfermaria. Alguém que senta na carteira perto da porta. E que não olhou pra mim nenhuma vez essa semana.", proxima: "c9_15" },
    c9_15: { tipo: "narracao", texto: "Ela prende o grampo no cabelo. Direito, dessa vez. Ele segura bem. Igual a avó disse.", proxima: "c9_16" },
    c9_16: { tipo: "pensamento", texto: "Ele está mexendo as peças de novo. Devagar. Sem ninguém ver.", proxima: "c9_17" },
    c9_17: { tipo: "pensamento", texto: "Eu vi.", proxima: "ep_fim" },

    // Fim do Capítulo 18 (crie a entrada "capitulo18" em dados/capitulos.js).
    ep_fim: { fim: "capitulo18" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 19 (anotações do roteiro)
 *  • A Sayuri tem marcas novas. O homem de terno não quer ela perto do Blake / do grupo do Kaito.
 *    A Sayuri não sabe que é o Ren. A SN desconfia que é o Ren.
 *  • Ninguém sabe que a SN é a menina do boné. Os meninos continuam procurando.
 *  • O Takeo quase falou alguma coisa e trocou por "bolinho de frango". Ele quer falar "num lugar mais bonito".
 *  • Blake: acha que falhou com o Kaito na fábrica ("eu estava a dez metros"). A Mio passou reto na enfermaria.
 *  • Sábado: pudim na casa da Reina, com a avó dela que recebeu alta.
 *  • A SN ganhou o grampo da avó.
 *
 * ESCOLHAS DO CAPÍTULO (7)
 *  1 A heroína da Mio · 2 No escuro com a avó · 3 A opinião da SN · 4 O bolinho de frango
 *  5 No degrau, com a Mio · 6 No portão com o Blake · 7 A última noite da avó
 *
 * FLAGS NOVAS
 *  Lugar_certo_mascara · Nao_quer_ser_achada · Sorriu_caderno · Avo_nao_sabe_qual · Avo_ninguem
 *  Avo_historia_avo · Sem_agradecimento · Espia_Coreia · Cobrou_briga_meninos · Divide_frango_Takeo
 *  Nao_era_isso_Takeo · Ervilha_Takeo · Bandaid_Mio · Mio_fala_Blake · Admitiu_Mio_ciume
 *  Blake_dez_metros · Blake_Kaito_respeito · Blake_silencio_muro · Pediu_avo_ficar · Ombro_avo
 *  Receita_geleia_avo
 */