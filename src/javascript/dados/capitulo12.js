/*
 * =====================================================================
 *  CAPÍTULO 12 — A janela
 *  Quinta e sexta-feira, depois do dia da água de peixe (Capítulo 11).
 *  Mesmo formato dos capítulos anteriores: cada linha é uma cena.
 * =====================================================================
 *
 *  O QUE ACONTECE
 *    • Quinta: a SN volta para a escola. O Kaito cumpre a promessa e passa a manhã inteira na
 *      janela do corredor. O bullying continua, mas menor.
 *    • A Hana transforma os 41 nomes em outra coisa.
 *    • O Blake pede desculpa em poucas palavras, no saco de pancada com o Kaito (amigos desde os sete anos).
 *    • O Kaito entra na sala com um onigiri e, no fim da tarde, leva a SN até em casa.
 *      Ele retira o “fica longe de mim” do Capítulo 10.
 *    • Uma cena leve com o Ryuji, o Kaito e o Victor (o celular quebrado do Ryuji).
 *    • Sexta: a SN encontra a Sayuri sozinha. A Sayuri diz que “não foi ideia dela”, mas não
 *      explica. A SN não sai contando isso para ninguém.
 *    • Fim do capítulo: a visita à casa do Takeo. Na saída, a Reina se oferece para ir junto,
 *      e o Takeo fica sem jeito de negar. O capítulo termina na porta da casa dele.
 *
 *  REGRAS QUE ESTE CAPÍTULO SEGUE
 *    • Assunto de gangue fica fora da escola. O Ren não aparece.
 *    • A SN não fala o apelido antigo dela, nem repete os apelidos novos.
 *    • Romance devagar.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Victor, Reina, Akane, Sayuri, Avó do Takeo.
 *
 *  CENÁRIOS (todos já existem)
 *    Banheiro feminino → "corredor" · Rua até a casa da SN → "saida-colegio" · Rua até a casa do Takeo → "saida-colegio"
 *    Porta da casa do Takeo → "saida-colegio" (troque se criar "casa-takeo")
 *
 *  FLAGS DOS CAPÍTULOS ANTERIORES USADAS AQUI (com caminhos)
 *    Ombro_Kaito_meiofio, Chorou_Kaito, Olhou_Sayuri_balde, Mio_confessou_Blake,
 *    Blake_atras_Mio, Victor_esquina, SN_admitiu_ciume_Takeo.
 *
 *  Título, capa e gancho ficam em dados/capitulos.js: crie a entrada "capitulo12".
 */
Roteiro.registrar("capitulo12", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — A JANELA =================== */
    // Cenário: corredor do segundo andar, quinta de manhã. Música: piano baixo que vai esquentando.
    c1_01: { roupa: "escolar", tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Cena 1 — A janela", sprite: null, texto: "Quinta-feira. A SN fica parada no portão da escola por quatro minutos inteiros. A mochila no ombro. O cabelo solto, porque ela soltou de propósito na frente do espelho, mesmo com a mão tremendo.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "A Mio está do lado dela. Não fala nada. Não apressa. Só espera.", proxima: "c1_03" },
    c1_03: { tipo: "pensamento", texto: "Na minha vida antiga, depois de um dia desses, eu faltava. Uma semana. Às vezes duas. Eu dizia pra minha mãe que estava com dor de barriga.", proxima: "c1_04" },
    c1_04: { tipo: "pensamento", texto: "E toda vez que eu voltava, era pior. Porque eu voltava sozinha, e eles já tinham esquecido o motivo, mas não tinham esquecido de mim.", proxima: "c1_05" },
    c1_05: { tipo: "narracao", texto: "Ela entra.", proxima: "c1_06" },
    c1_06: { tipo: "narracao", texto: "Na escada, alguém tapa o nariz quando ela passa. Um garoto do primeiro ano faz um barulho de bolha com a boca. Os amigos dele riem. Ela segura a alça da mochila mais forte.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", texto: "No corredor do segundo andar, ela levanta os olhos. Para a janela.", proxima: "c1_08" },
    c1_08: { tipo: "narracao", sprite: "kaito", texto: "Ele está lá. Encostado no parapeito, de braços cruzados, com o olho ainda amarelado. Sem a gangue em volta. Sozinho. Como se estivesse esperando o ônibus.", proxima: "c1_09" },
    c1_09: { tipo: "narracao", texto: "Ele não olha para ela. Ele olha para o corredor. Para cada pessoa que passa. Uma por uma.", proxima: "c1_10" },
    c1_10: { tipo: "narracao", texto: "O garoto do primeiro ano, o das bolhas, sobe a escada atrás dela e começa a fazer o barulho de novo. Para no meio. Ele viu o Kaito na janela.", proxima: "c1_11" },
    c1_11: { tipo: "narracao", texto: "O Kaito não fala nada. Não se mexe. Só vira a cabeça e olha para o garoto. Um olhar só. Calmo. Demorado.", proxima: "c1_12" },
    c1_12: { tipo: "narracao", texto: "O garoto engole o resto do barulho. Dá meia-volta e desce a escada de novo, mesmo indo para o segundo andar.", proxima: "c1_13" },
    c1_13: { tipo: "pensamento", texto: "Assunto de gangue fica fora da escola. Ele não fez nada. Ele só está parado numa janela.", proxima: "c1_14" },
    c1_14: { tipo: "pensamento", texto: "É a coisa mais gentil que alguém já fez por mim nesse corredor.", proxima: "c1_cam1" },
    c1_cam1: { caminhos: [
      { flag: "Ombro_Kaito_meiofio", proxima: "c1_k_ombro" },
      { flag: "Chorou_Kaito", proxima: "c1_k_chorou" }
    ], proxima: "c1_esc1" },
    c1_k_ombro: { tipo: "pensamento", texto: "Ontem eu encostei a cabeça no ombro dele no meio-fio. Hoje ele não me olha. E mesmo assim eu sei que ele está ali por minha causa.", proxima: "c1_esc1" },
    c1_k_chorou: { tipo: "pensamento", texto: "Ontem ele me viu chorando na calçada e não foi embora. Hoje ele não me olha. Ele não precisa.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — Passando pela janela
    c1_esc1: { escolhas: [
      { texto: "A. Passar por ele e falar baixinho, sem parar: “Obrigada.”", proxima: "c1_1a_1", pontos: { kaito: 2 }, flags: ["Agradeceu_janela"] },
      { texto: "B. Parar do lado dele na janela. Encostar no parapeito também. Sem dizer nada.", proxima: "c1_1b_1", pontos: { kaito: 3 }, flags: ["Ficou_na_janela"] },
      { texto: "C. Devolver a jaqueta dele, dobrada, em cima do parapeito.", proxima: "c1_1c_1", pontos: { kaito: 2 }, flags: ["Devolveu_jaqueta_Kaito"] }
    ]},
    c1_1a_1: { tipo: "narracao", texto: "Ela passa. Fala só com o canto da boca. O Kaito não responde. Não muda de posição. Mas, quando ela já está na porta da sala, ela olha para trás e vê. A orelha dele está vermelha.", proxima: "c1_15" },
    c1_1b_1: { tipo: "narracao", texto: "Ela para do lado dele. Encosta no parapeito. Os dois ficam olhando para o pátio lá embaixo. Ninguém fala nada.", proxima: "c1_1b_2" },
    c1_1b_2: { tipo: "narracao", texto: "As pessoas passam pelo corredor. Olham para os dois. Ninguém faz barulho de peixe. Ninguém tapa o nariz.", proxima: "c1_1b_3" },
    c1_1b_3: { quem: "kaito", texto: "...Você vai se atrasar.", proxima: "c1_1b_4" },
    c1_1b_4: { quem: "eu", texto: "Você também.", proxima: "c1_1b_5" },
    c1_1b_5: { quem: "kaito", texto: "Eu sou o líder. Eu posso me atrasar.", proxima: "c1_1b_6" },
    c1_1b_6: { tipo: "narracao", texto: "Ele fala isso com a cara séria. Ela ri. Pela primeira vez desde o balde. Ele não olha para ela. Mas o canto da boca dele sobe um pouquinho.", proxima: "c1_15" },
    c1_1c_1: { tipo: "narracao", texto: "Ela tira a jaqueta da mochila. Seca, dobrada, cheirando a amaciante. Coloca em cima do parapeito, do lado do braço dele.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "kaito", texto: "Você lavou.", proxima: "c1_1c_3" },
    c1_1c_3: { quem: "eu", texto: "Estava com cheiro de chuva e de lámen.", proxima: "c1_1c_4" },
    c1_1c_4: { quem: "kaito", texto: "Esse é o cheiro dela. Agora ela está com cheiro de... flor.", proxima: "c1_1c_5" },
    c1_1c_5: { tipo: "narracao", texto: "Ele pega a jaqueta e cheira, desconfiado. Faz uma careta. Mas veste. Na hora.", proxima: "c1_15" },

    // (todas as opções continuam aqui)
    c1_15: { tipo: "narracao", sprite: null, texto: "O Kaito fica na janela a manhã inteira. Na troca de aula. No intervalo. Na troca de aula de novo. O professor de matemática passa por ele três vezes e, na terceira, desiste de mandar ele para a sala.", proxima: "c1_16" },

    // O Kaito entra na sala pela primeira vez. Gentil, do jeito dele.
    c1_16: { tipo: "narracao", sprite: "kaito", texto: "Na troca da segunda para a terceira aula, a sala fica meio vazia. E ele entra. Pela primeira vez desde que ela voltou para os dezesseis, o Kaito entra na sala dela.", proxima: "c1_17" },
    c1_17: { tipo: "narracao", texto: "Ele senta na cadeira da frente, virada ao contrário, com os braços apoiados no encosto. Coloca em cima da mesa dela um onigiri embrulhado no papel da lojinha do tio.", proxima: "c1_18" },
    c1_18: { quem: "kaito", texto: "Você passou direto pela cantina hoje de manhã. Não comeu nada.", proxima: "c1_19" },
    c1_19: { quem: "eu", texto: "Você estava me vigiando?", proxima: "c1_20" },
    c1_20: { quem: "kaito", texto: "Eu estava vigiando o corredor. Você estava no corredor. É diferente.", proxima: "c1_21" },
    c1_21: { tipo: "narracao", texto: "Ela abre o papel. É de frango. O preferido dela.", proxima: "c1_22" },
    c1_22: { quem: "eu", texto: "Como você sabe que eu gosto de frango?", proxima: "c1_23" },
    c1_23: { quem: "kaito", texto: "Você pediu esse duas vezes no lámen do tio. E deixou o de salmão pela metade.", proxima: "c1_24" },
    c1_24: { tipo: "pensamento", texto: "Ele presta atenção. Em tudo. Ele só finge que não.", proxima: "c1_25" },
    c1_25: { tipo: "narracao", texto: "Ela come. Ele fica olhando pela janela da sala, como se tivesse vindo só para ver a vista. Depois de um tempo, ele fala. Mais baixo que o normal.", proxima: "c1_26" },
    c1_26: { quem: "kaito", texto: "Dormiu?", proxima: "c1_27" },
    c1_27: { quem: "eu", texto: "Pouco.", proxima: "c1_28" },
    c1_28: { quem: "kaito", texto: "Eu também não. Fiquei pensando se você ia vir hoje.", proxima: "c1_29" },
    c1_29: { tipo: "narracao", texto: "Ele fala olhando para o onigiri, não para ela. E então, quase sem som:", proxima: "c1_30" },
    c1_30: { quem: "kaito", texto: "...Que bom que veio.", proxima: "c1_31" },
    c1_31: { tipo: "narracao", texto: "O sinal toca. Ele levanta, bate duas vezes na mesa dela com os nós dos dedos, devagar, como quem bate numa porta, e volta para a janela do corredor.", proxima: "c1_32" },
    c1_32: { quem: "kaito", texto: "Come tudo. Eu vou saber se sobrar.", proxima: "c2_01" },

    /* =================== CENA 2 — OS 41 NOMES =================== */
    // Cenário: sala de aula, intervalo. Música: violão leve.
    c2_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Cena 2 — Os 41 nomes", sprite: null, texto: "Na sala, a carteira do Takeo continua colada na dela. Ele não arrastou de volta. Ninguém pediu. Quando ela senta, ele já está sentado, com o livro aberto e um caderno extra em cima da mesa dela.", proxima: "c2_02" },
    c2_02: { quem: "takeo", sprite: "takeo", texto: "Copiei a matéria de ontem pra você. Duas vezes. A primeira ficou feia.", proxima: "c2_03" },
    c2_03: { tipo: "narracao", texto: "Ela abre o caderno. A letra dele é torta, apertada, cheia de setas. Em todas as margens, ele desenhou polias. Pequenas. Com carinha.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", texto: "Algumas carteiras ainda estão longe da dela. Algumas pessoas ainda cochicham. Mas não todas. Uma menina que estava no corredor ontem, rindo, passa pela mesa dela sem olhar e deixa um bilhete dobrado em cima do caderno.", proxima: "c2_05" },
    c2_05: { tipo: "narracao", texto: "“Desculpa por ontem. Eu ri porque todo mundo riu. Foi horrível. Não vou fazer de novo.” Sem nome.", proxima: "c2_06" },
    c2_06: { tipo: "pensamento", texto: "Uma pessoa. Só uma. Mas uma.", proxima: "c2_07" },
    c2_07: { tipo: "narracao", sprite: "hana", texto: "No intervalo, a Hana puxa a cadeira para perto e abre o caderno de gatinhos. Na página, uma lista. Quarenta e um nomes, em letra caprichada.", proxima: "c2_08" },
    c2_08: { quem: "hana", texto: "Eu não vou entregar isso pra ninguém. Eu prometi pra mim mesma ontem à noite.", proxima: "c2_09" },
    c2_09: { quem: "eu", texto: "Então pra que você anotou?", proxima: "c2_10" },
    c2_10: { tipo: "narracao", texto: "A Hana vira a página. Embaixo da lista, ela fez uma conta. Do jeito dela. Com um gatinho no canto.", proxima: "c2_11" },
    c2_11: { quem: "hana", texto: "A escola tem seiscentos e doze alunos. Eu contei na lista da secretaria. Quarenta e um riram, filmaram ou fizeram barulho.", proxima: "c2_12" },
    c2_12: { quem: "hana", texto: "Quinhentos e setenta e um não fizeram nada disso.", proxima: "c2_13" },
    c2_13: { tipo: "narracao", texto: "A SN fica olhando para o número. Quinhentos e setenta e um. Escrito com caneta azul, sublinhado duas vezes.", proxima: "c2_14" },
    c2_14: { quem: "hana", texto: "Ontem você achou que a escola inteira estava rindo. Eu também achei, por um tempo. Mas não era a escola inteira. Eram quarenta e um. Faz diferença. Pra mim, faz.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — Com a Hana e a conta dela
    c2_esc2: { escolhas: [
      { texto: "A. Arrancar a página da lista dos 41 e guardar só a página da conta.", proxima: "c2_2a_1", pontos: { hana: 3 }, flags: ["Guardou_conta_Hana"] },
      { texto: "B. Abraçar a Hana. Ela não gosta muito de abraço. Abraçar mesmo assim.", proxima: "c2_2b_1", pontos: { hana: 2 }, flags: ["Abraco_Hana"] },
      { texto: "C. “Quinhentos e setenta e dois. Você esqueceu de você.”", proxima: "c2_2c_1", pontos: { hana: 3 }, flags: ["Contou_Hana"] }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "Ela arranca a página dos nomes, devagar, e entrega para a Hana. Fica com a da conta. Dobra em quatro e guarda no bolso, junto com o bilhete da olaria e a carta da avó.", proxima: "c2_2a_2" },
    c2_2a_2: { quem: "hana", texto: "O que eu faço com essa?", proxima: "c2_2a_3" },
    c2_2a_3: { quem: "eu", texto: "Joga fora. Eu não preciso saber quem foi. Eu preciso saber quantos não foram.", proxima: "c2_2a_4" },
    c2_2a_4: { tipo: "narracao", texto: "A Hana olha para a página dos nomes. Depois rasga em pedaços bem pequenos e joga no lixo da sala, um por um.", proxima: "c2_15" },
    c2_2b_1: { tipo: "narracao", texto: "Ela abraça a Hana. A Hana fica rígida, com os braços para baixo, como um poste. Depois, muito devagar, levanta um braço e dá dois tapinhas nas costas da SN.", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "hana", texto: "...Tá bom. Só dessa vez. Porque foi um dia ruim.", proxima: "c2_2b_3" },
    c2_2b_3: { tipo: "narracao", texto: "Ela não solta primeiro. A SN percebe.", proxima: "c2_15" },
    c2_2c_1: { tipo: "narracao", texto: "A Hana pisca. Olha para a conta. Pega a caneta. Risca o 571 e escreve 572 em cima, devagar.", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "hana", texto: "E a Mio. E o Takeo. E a Reina, mesmo fingindo que não. Eu vou ter que refazer a conta inteira.", proxima: "c2_2c_3" },
    c2_2c_3: { quem: "eu", texto: "Faz com calma. Eu espero.", proxima: "c2_15" },

    // (todas as opções continuam aqui)
    c2_15: { tipo: "narracao", sprite: "reina", texto: "Do outro lado da sala, a Reina está sentada do lado do Takeo, oferecendo outro bolinho de arroz. Hoje é de atum. Ela fala alto o suficiente para a sala inteira ouvir.", proxima: "c2_16" },
    c2_16: { quem: "reina", texto: "Takeo, o meu de ontem ou o da sua avó? Fala a verdade. Eu aguento.", proxima: "c2_17" },
    c2_17: { quem: "takeo", sprite: "takeo", texto: "Ah... os dois são... muito bons. De jeitos diferentes. O seu é mais... salgado.", proxima: "c2_18" },
    c2_18: { quem: "reina", sprite: "reina", texto: "Mais salgado. Que diplomático. Você daria um ótimo político.", proxima: "c2_19" },
    c2_19: { tipo: "narracao", texto: "Ela ri. Ele fica vermelho. A SN fica olhando para o caderno com as polias de carinha, fingindo que está lendo.", proxima: "c2_20" },
    c2_20: { tipo: "pensamento", texto: "Ontem eu estava com cheiro de peixe e ela jogou um desodorante pela janela por mim. Hoje eu quero jogar o bolinho de atum dela pela mesma janela.", proxima: "c2_21" },
    c2_21: { tipo: "pensamento", texto: "Eu sou uma pessoa horrível. Ou só uma pessoa com ciúme. Talvez seja a mesma coisa.", proxima: "c3_01" },

    /* =================== CENA 3 — SACO DE PANCADA =================== */
    // Cenário: pátio dos fundos, quinta no intervalo. Música: baixo lento.
    c3_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Cena 3 — Saco de pancada", sprite: null, texto: "No intervalo, a SN corta caminho pelo pátio dos fundos. Ela ouve antes de ver. Tum. Tum. Tum. Um barulho grave, cadenciado, de alguém batendo em alguma coisa pesada.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", sprite: "blake", texto: "Embaixo da arquibancada, pendurado numa corrente, um saco de pancada velho, remendado com fita. O Blake batendo. O Kaito segurando o saco do outro lado, com o ombro.", proxima: "c3_03" },
    c3_03: { quem: "kaito", sprite: "kaito", texto: "Mais forte. Você está batendo igual quem pede desculpa.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", texto: "O Blake bate mais forte. O saco empurra o Kaito meio passo para trás. O Kaito não solta.", proxima: "c3_05" },
    c3_05: { quem: "kaito", texto: "Agora sim.", proxima: "c3_06" },
    c3_06: { tipo: "narracao", sprite: "blake", texto: "O Blake vê a SN parada no canto da arquibancada. Para no meio do soco. O saco balança sozinho.", proxima: "c3_07" },
    c3_07: { tipo: "narracao", texto: "Ele não fala nada por um tempo. Seca o rosto com a barra da camiseta. Depois anda até ela. Para a dois passos.", proxima: "c3_08" },
    c3_08: { quem: "blake", texto: "Ontem. No corredor. Eu travei.", proxima: "c3_09" },
    c3_09: { tipo: "narracao", texto: "Só isso. Ele não explica. Ele não pede nada.", proxima: "c3_10" },
    c3_10: { quem: "kaito", sprite: "kaito", texto: "Ele travou por causa da Sayuri. Eles tiveram uma coisa no primeiro ano.", proxima: "c3_11" },
    c3_11: { tipo: "narracao", sprite: "blake", texto: "O Blake vira a cabeça devagar e olha para o Kaito. Um olhar que faria qualquer outra pessoa recuar. O Kaito só levanta as sobrancelhas.", proxima: "c3_12" },
    c3_12: { quem: "kaito", sprite: "kaito", texto: "Que foi? É verdade.", proxima: "c3_13" },
    c3_13: { quem: "blake", sprite: "blake", texto: "...É.", proxima: "c3_14" },
    c3_14: { tipo: "pensamento", texto: "Eles se conhecem desde pequenos. Dá pra ver. O Kaito fala por ele, e ele deixa. Ninguém mais no mundo pode fazer isso com o Blake.", proxima: "c3_cam1" },
    c3_cam1: { caminhos: [
      { flag: "Blake_atras_Mio", proxima: "c3_b_mio" },
      { flag: "Mio_confessou_Blake", proxima: "c3_b_mio" }
    ], proxima: "c3_esc3" },
    c3_b_mio: { quem: "kaito", sprite: "kaito", texto: "E a Mio viu. Ela não olhou pra ele hoje o dia inteiro.", proxima: "c3_b_mio2" },
    c3_b_mio2: { tipo: "narracao", sprite: "blake", texto: "O Blake abaixa os olhos. Não fala nada. Mas os nós dos dedos, ainda vermelhos do saco, fecham.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — O Blake no pátio
    c3_esc3: { escolhas: [
      { texto: "A. “Tudo bem. Só não trava da próxima vez.”", proxima: "c3_3a_1", pontos: { blake: 1 }, flags: ["Aceitou_desculpa_Blake"] },
      { texto: "B. “Doeu, Blake. Mais do que a água.”", proxima: "c3_3b_1", pontos: { blake: 1 }, flags: ["Tempo_Blake"] },
      { texto: "C. “Não é comigo que você precisa falar. É com a Mio.”", proxima: "c3_3c_1", pontos: { blake: 1, mio: 3 }, flags: ["Mandou_Blake_Mio"] }
    ]},
    c3_3a_1: { tipo: "narracao", texto: "Ele concorda com a cabeça. Uma vez.", proxima: "c3_3a_2" },
    c3_3a_2: { quem: "blake", texto: "Não travo.", proxima: "c3_3a_3" },
    c3_3a_3: { tipo: "narracao", texto: "E volta para o saco. Sem mais nada. O Kaito olha para ela por cima do ombro dele e dá de ombros, como quem diz: ele é assim.", proxima: "c3_15" },
    c3_3b_1: { tipo: "narracao", texto: "Ele não discute. Fica olhando para ela. Depois para o chão.", proxima: "c3_3b_2" },
    c3_3b_2: { quem: "blake", texto: "Eu sei.", proxima: "c3_3b_3" },
    c3_3b_3: { tipo: "narracao", texto: "Ele volta para o saco. Bate uma vez. Tão forte que a corrente range e o Kaito precisa firmar os pés.", proxima: "c3_15" },
    c3_3c_1: { tipo: "narracao", texto: "O Blake olha para o banco do pátio. A Mio está lá, sozinha, comendo pão de queijo com muita força.", proxima: "c3_3c_2" },
    c3_3c_2: { quem: "blake", texto: "Ela não quer falar comigo.", proxima: "c3_3c_3" },
    c3_3c_3: { quem: "kaito", sprite: "kaito", texto: "Então vai lá e senta do lado dela sem falar. Você é ótimo nisso.", proxima: "c3_3c_4" },
    c3_3c_4: { tipo: "narracao", sprite: "blake", texto: "O Blake hesita. Depois vai. Devagar. Senta na outra ponta do banco da Mio. Não fala nada. Ela também não. Mas ela não vai embora.", proxima: "c3_15" },
    c3_15: { tipo: "narracao", sprite: "kaito", texto: "O Kaito larga o saco. Senta na arquibancada.", proxima: "c3_16" },
    c3_16: { quem: "kaito", texto: "A gente briga desde os sete anos. Toda semana. Ele nunca ganhou.", proxima: "c3_17" },
    c3_17: { quem: "eu", texto: "Por que vocês brigam?", proxima: "c3_18" },
    c3_18: { quem: "kaito", texto: "Porque ele é teimoso. E porque é o único jeito que ele sabe de dizer que gosta de alguém.", proxima: "c3_19" },
    c3_19: { tipo: "narracao", sprite: null, texto: "Do outro lado do pátio, o Blake olha para eles. Não para o Kaito. Para ela. Um segundo. E vira o rosto.", proxima: "c3_20" },
    c3_20: { tipo: "narracao", texto: "O Kaito percebe. Ela não. Ele não fala nada.", proxima: "c4_01" },

    /* =================== CENA 4 — O CELULAR DO RYUJI =================== */
    // Cenário: pátio dos fundos, fim da tarde. Música: tema da gangue, versão engraçada.
    c4_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Cena 4 — O celular do Ryuji", sprite: null, texto: "Na saída, a SN passa pelo pátio dos fundos e ouve gritaria. Não de briga. De discussão. O tipo de discussão que só acontece entre gente que se conhece há muito tempo.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji está em pé na arquibancada, segurando um celular com a tela em mil pedaços, como quem segura um animal morto.", proxima: "c4_03" },
    c4_03: { quem: "ryuji", texto: "OLHA ISSO. OLHA O QUE VOCÊ FEZ. EU TINHA FOTOS DA MOMO DE BAILARINA AQUI.", proxima: "c4_04" },
    c4_04: { quem: "kaito", sprite: "kaito", texto: "Você tem backup.", proxima: "c4_05" },
    c4_05: { quem: "ryuji", sprite: "ryuji", texto: "EU NÃO SEI O QUE É BACKUP, KAITO.", proxima: "c4_06" },
    c4_06: { tipo: "narracao", sprite: "kaito", texto: "O Kaito tira do bolso um maço de papelzinhos coloridos e estende para o Ryuji.", proxima: "c4_07" },
    c4_07: { quem: "kaito", texto: "Vale-lámen. Da lojinha do tio. Vinte. Dá um celular novo.", proxima: "c4_08" },
    c4_08: { quem: "ryuji", sprite: "ryuji", texto: "Vinte vale-lámen não dá um celular novo! Dá uma gastrite!", proxima: "c4_09" },
    c4_09: { tipo: "narracao", sprite: "victor", texto: "Do muro do pátio, alguém pula para dentro. Com um pirulito na boca e uma mochila que se mexe.", proxima: "c4_10" },
    c4_10: { quem: "victor", texto: "Ouvi falar em celular quebrado. Eu tenho um usado. Funciona. Mais ou menos. Liga, mas só fala com quem quer.", proxima: "c4_11" },
    c4_11: { quem: "ryuji", sprite: "ryuji", texto: "Quanto?", proxima: "c4_12" },
    c4_12: { quem: "victor", texto: "Vinte vale-lámen.", proxima: "c4_13" },
    c4_13: { tipo: "narracao", texto: "O Kaito e o Ryuji olham para o Victor. O Victor olha de volta, mastigando o pirulito, com a maior cara de pau do mundo. A mochila dele late.", proxima: "c4_14" },
    c4_14: { quem: "kaito", sprite: "kaito", texto: "Victor. Você está com o cachorro dentro da mochila de novo?", proxima: "c4_15" },
    c4_15: { quem: "victor", texto: "Ele tem trauma de abandono, líder. Você não entenderia. Você não tem coração.", proxima: "c4_16" },
    c4_16: { tipo: "narracao", texto: "A cabeça do Caramelo sai da mochila. Ele vê a SN no meio do pátio. Pula. Corre até ela. Abana o rabo tão forte que o corpo inteiro dele balança.", proxima: "c4_17" },
    c4_17: { tipo: "narracao", texto: "E a SN ri. Alto. Sem conseguir parar. Agachada no meio do pátio, com um cachorro caramelo lambendo o rosto dela e três garotos discutindo por vale-lámen na arquibancada.", proxima: "c4_18" },
    c4_18: { tipo: "narracao", sprite: "kaito", texto: "O Kaito para de discutir. Ele olha para ela rindo. Um segundo. Dois. Depois vira o rosto, rápido, para o Ryuji. Como se tivesse visto alguma coisa que não devia.", proxima: "c4_19" },
    c4_19: { quem: "ryuji", sprite: "ryuji", texto: "Que foi, líder? Ficou vermelho por quê?", proxima: "c4_20" },
    c4_20: { quem: "kaito", sprite: "kaito", texto: "Pega os vinte vale-lámen e cala a boca.", proxima: "c4_cam1" },
    c4_cam1: { caminhos: [
      { flag: "Victor_esquina", proxima: "c4_v_esquina" }
    ], proxima: "c4_21" },
    c4_v_esquina: { quem: "victor", texto: "Funcionou o pirulito de ontem, gatinha? O Caramelo quer saber. Ele está preocupado. Ele não dormiu.", proxima: "c4_v_esquina2" },
    c4_v_esquina2: { quem: "eu", texto: "Funcionou. Fala pra ele que eu agradeci.", proxima: "c4_21" },
    c4_21: { tipo: "pensamento", texto: "Ontem eu achei que nunca mais ia rir nessa escola.", proxima: "c4_22" },
    c4_22: { tipo: "pensamento", texto: "Hoje um cachorro numa mochila e vinte vale-lámen me fizeram rir no meio do pátio.", proxima: "c4k_01" },

    /* =================== CENA 4.5 — O MESMO LADO =================== */
    // Cenário: rua, quinta ao entardecer (usa "saida-colegio"). Música: piano baixo, quente.
    // O Kaito leva a SN até em casa. Romance devagar, mas ele já não está mais longe.
    c4k_01: { roupa: "fora", tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Cena 4.5 — O mesmo lado", sprite: "kaito", texto: "Quando ela sai do pátio, o sol já está baixo. O Kaito está no portão, empurrando a bicicleta de entrega do tio, como se estivesse ali por acaso.", proxima: "c4k_02" },
    c4k_02: { quem: "kaito", texto: "Eu vou pro mesmo lado.", proxima: "c4k_03" },
    c4k_03: { tipo: "pensamento", texto: "A lojinha do tio fica do outro lado do bairro. Eu sei disso. Ele sabe que eu sei.", proxima: "c4k_04" },
    c4k_04: { tipo: "narracao", texto: "Ela não fala nada. Eles começam a andar. A corrente da bicicleta faz tic, tic, tic.", proxima: "c4k_05" },
    c4k_05: { quem: "kaito", texto: "Depois do almoço eu não estava na janela. Mexeram com você?", proxima: "c4k_06" },
    c4k_06: { quem: "eu", texto: "Um menino fez barulho de peixe. Aí ele viu a Hana anotando o nome dele no caderno de gatinho e parou na hora.", proxima: "c4k_07" },
    c4k_07: { tipo: "narracao", texto: "O Kaito ri. Baixo, pelo nariz, mas ri. Um riso curto, de criança, que ele esconde rápido atrás da mão.", proxima: "c4k_08" },
    c4k_08: { quem: "kaito", texto: "A Hana dá mais medo que eu.", proxima: "c4k_09" },
    c4k_09: { quem: "eu", texto: "Muito mais.", proxima: "c4k_10" },
    c4k_10: { quem: "kaito", texto: "Não precisava concordar tão rápido.", proxima: "c4k_11" },
    c4k_11: { tipo: "narracao", texto: "Na esquina da padaria, ela diminui o passo sem perceber. Foi ali. Ontem à noite. Os três caras. Ela não fala nada.", proxima: "c4k_12" },
    c4k_12: { tipo: "narracao", texto: "Mas o Kaito percebe. Ele não pergunta. Só passa a bicicleta para o outro lado, devagar, e começa a andar entre ela e a rua.", proxima: "c4k_13" },
    c4k_13: { tipo: "pensamento", texto: "Ele não perguntou nada. Ele só trocou de lado.", proxima: "c4k_14" },
    c4k_14: { tipo: "pensamento", texto: "Na minha outra vida, ninguém nunca trocou de lado por mim.", proxima: "c4k_15" },
    c4k_15: { quem: "kaito", texto: "Semana passada eu falei pra você ficar longe de mim. Lembra?", proxima: "c4k_16" },
    c4k_16: { quem: "eu", texto: "Lembro.", proxima: "c4k_17" },
    c4k_17: { quem: "kaito", texto: "Eu achava que, se você ficasse longe, ninguém ia te machucar por minha causa.", proxima: "c4k_18" },
    c4k_18: { quem: "kaito", texto: "Aí te machucaram do mesmo jeito. E eu não estava perto.", proxima: "c4k_19" },
    c4k_19: { tipo: "narracao", texto: "Ele para de andar. Fica olhando para o guidão. Fala rápido, de uma vez, como quem arranca um curativo.", proxima: "c4k_20" },
    c4k_20: { quem: "kaito", texto: "Então esquece o que eu falei. Não precisa ficar longe.", proxima: "c4k_esc" },

    // ▶ ESCOLHA 4 — No caminho com o Kaito
    c4k_esc: { escolhas: [
      { texto: "A. “Eu nunca fiquei longe. Você que não percebeu.”", proxima: "c4k_a1", pontos: { kaito: 3 }, flags: ["Nunca_ficou_longe_Kaito"] },
      { texto: "B. Segurar no guidão da bicicleta, do lado da mão dele. Sem encostar.", proxima: "c4k_b1", pontos: { kaito: 3 }, flags: ["Mao_guidao_Kaito"] },
      { texto: "C. “Então amanhã você me espera no portão de novo?”", proxima: "c4k_c1", pontos: { kaito: 2 }, flags: ["Pediu_Kaito_esperar"] }
    ]},
    c4k_a1: { tipo: "narracao", texto: "Ele olha para ela. Pela primeira vez no dia inteiro, olha direto. E não desvia.", proxima: "c4k_a2" },
    c4k_a2: { quem: "kaito", texto: "...Eu percebi.", proxima: "c4k_a3" },
    c4k_a3: { tipo: "narracao", texto: "Ele volta a empurrar a bicicleta. Mas agora anda mais devagar. Bem mais devagar. Como quem não quer chegar.", proxima: "c4k_21" },
    c4k_b1: { tipo: "narracao", texto: "Ela segura no guidão. A mão dela fica do lado da dele. Um dedo de distância. Ele não tira a mão.", proxima: "c4k_b2" },
    c4k_b2: { tipo: "narracao", texto: "Eles andam assim a rua inteira. No meio do caminho, a bicicleta passa num buraco, e o dedo mindinho dele encosta no dela. Ele não tira. Ela também não.", proxima: "c4k_b3" },
    c4k_b3: { tipo: "pensamento", texto: "É só um dedo. Eu tenho vinte e oito anos por dentro. É só um dedo. Por que meu coração está assim?", proxima: "c4k_21" },
    c4k_c1: { quem: "kaito", texto: "Amanhã é sexta. Você vai na casa do Takeo.", proxima: "c4k_c2" },
    c4k_c2: { tipo: "narracao", texto: "Ele fala isso num tom neutro. Neutro demais. A mão dele aperta o guidão.", proxima: "c4k_c3" },
    c4k_c3: { quem: "kaito", texto: "...Mas de manhã eu espero. No portão. Se você quiser.", proxima: "c4k_c4" },
    c4k_c4: { quem: "eu", texto: "Eu quero.", proxima: "c4k_c5" },
    c4k_c5: { tipo: "narracao", texto: "Ele faz que sim com a cabeça. Só isso. Mas o resto do caminho ele vai assobiando baixinho, desafinado, e acha que ela não está ouvindo.", proxima: "c4k_21" },

    // (todas as opções continuam aqui)
    c4k_21: { tipo: "narracao", sprite: null, texto: "Na frente do prédio dela, ele para.", proxima: "c4k_22" },
    c4k_22: { quem: "kaito", sprite: "kaito", texto: "Entra. Eu espero a luz acender.", proxima: "c4k_23" },
    c4k_23: { tipo: "narracao", cenario: "quarto-sn", sprite: null, texto: "Ela sobe. Acende a luz do quarto. Vai até a janela. Lá embaixo, ele ainda está parado, olhando para cima.", proxima: "c4k_24" },
    c4k_24: { tipo: "narracao", texto: "Ele levanta a mão. Uma vez. Depois sobe na bicicleta e vai embora pedalando. Para o outro lado do bairro.", proxima: "c4k_25" },
    c4k_25: { tipo: "pensamento", texto: "“O mesmo lado.” Mentiroso.", proxima: "c4k_26" },
    c4k_26: { tipo: "pensamento", texto: "Ela fica na janela até a bicicleta virar a esquina. Depois mais um pouco.", proxima: "c5_01" },

    /* =================== CENA 5 — SAYURI =================== */
    // Cenário: banheiro feminino, sexta de manhã (usa "corredor"). Música: silêncio. Só a torneira.
    // A SN não sai contando isso para ninguém.
    c5_01: { roupa: "escolar", tipo: "narracao", cenario: "banheiro", transicao: "tempo", legenda: "Cena 5 — Sayuri", sprite: null, texto: "Sexta-feira. Antes da primeira aula, a SN entra no banheiro feminino do segundo andar para lavar o rosto. E para na porta.", proxima: "c5_02" },
    c5_02: { roupa: "semlaco", sprite: "sayuri", tipo: "narracao", texto: "A Sayuri está na frente do espelho. Sozinha. Sem as amigas. Sem o laço rosa. O cabelo solto, bagunçado. Os olhos vermelhos e inchados de quem chorou a noite inteira.", proxima: "c5_03" },
    c5_03: { tipo: "narracao", texto: "Ela vê a SN pelo espelho. As duas ficam paradas.", proxima: "c5_04" },
    c5_04: { tipo: "narracao", texto: "A SN poderia ir embora. Ela poderia virar as costas e ir para outro banheiro. Ela quer muito fazer isso.", proxima: "c5_05" },
    c5_05: { tipo: "narracao", texto: "Ela não vai.", proxima: "c5_06" },
    c5_06: { tipo: "narracao", texto: "Ela anda até a pia do lado da Sayuri. Abre a torneira. Lava o rosto. Devagar. Como se a Sayuri não estivesse ali.", proxima: "c5_07" },
    c5_07: { quem: "sayuri", texto: "...Você não vai falar nada?", proxima: "c5_08" },
    c5_08: { quem: "eu", texto: "O que você quer que eu fale?", proxima: "c5_09" },
    c5_09: { tipo: "narracao", texto: "A Sayuri abre a boca. Fecha. Aperta a borda da pia com as duas mãos.", proxima: "c5_10" },
    c5_10: { quem: "sayuri", texto: "Não foi ideia minha.", proxima: "c5_11" },
    c5_11: { tipo: "narracao", texto: "Ela fala tão baixo que quase se perde no barulho da torneira.", proxima: "c5_12" },
    c5_12: { quem: "sayuri", texto: "O balde. Não foi ideia minha. Eu nunca... a página, as fotos, isso fui eu, tá? Eu admito. Mas o balde não. Eu nunca ia pensar numa coisa dessas.", proxima: "c5_13" },
    c5_13: { quem: "eu", texto: "Então de quem foi?", proxima: "c5_14" },
    c5_14: { tipo: "narracao", texto: "A Sayuri olha para a porta do banheiro. Para o teto. Para qualquer lugar. Ela parece uma pessoa encurralada num lugar onde não tem ninguém.", proxima: "c5_15" },
    c5_15: { quem: "sayuri", texto: "Não importa. Se eu não fizesse, ia ser pior. Pra mim. Pra minha família.", proxima: "c5_16" },
    c5_16: { quem: "sayuri", texto: "Você acha que eu sou uma pessoa horrível. Eu sei que acha. E você tem razão. Mas você não sabe o que é ter alguém dizendo o que você tem que fazer, todo dia, e você não ter como dizer não.", proxima: "c5_17" },
    c5_17: { tipo: "pensamento", texto: "Ela está com medo. Igual no corredor. Igual quando olhou pro fim do corredor antes de tropeçar.", proxima: "c5_18" },
    c5_18: { tipo: "pensamento", texto: "Três anos ela me fez sentir que eu não valia nada. E agora ela está chorando na minha frente, com medo de alguém.", proxima: "c5_19" },
    c5_19: { tipo: "pensamento", texto: "Eu não sei o que fazer com isso.", proxima: "c5_esc4" },

    // ▶ ESCOLHA 5 — No banheiro com a Sayuri
    c5_esc4: { escolhas: [
      { texto: "A. “Eu não vou contar isso pra ninguém. Mas se um dia você quiser dizer não, eu ajudo.”", proxima: "c5_4a_1", flags: ["Ofereceu_ajuda_Sayuri"], pontos: { desvio: 1 } },
      { texto: "B. “Isso não apaga três anos, Sayuri.”", proxima: "c5_4b_1", flags: ["Cobrou_Sayuri"] },
      { texto: "C. Desligar a torneira e sair, sem dizer nada.", proxima: "c5_4c_1", flags: ["Saiu_sem_falar_Sayuri"] }
    ]},
    c5_4a_1: { tipo: "narracao", texto: "A Sayuri fica olhando para ela pelo espelho. Como se ela tivesse falado em outra língua.", proxima: "c5_4a_2" },
    c5_4a_2: { quem: "sayuri", texto: "Por quê? Depois de tudo?", proxima: "c5_4a_3" },
    c5_4a_3: { quem: "eu", texto: "Porque eu sei como é ter medo nesse banheiro.", proxima: "c5_4a_4" },
    c5_4a_4: { tipo: "narracao", texto: "A Sayuri não responde. Ela pega a bolsa e sai correndo do banheiro, com a mão na boca, como se estivesse segurando um choro.", proxima: "c5_20" },
    c5_4b_1: { tipo: "narracao", texto: "A Sayuri fecha os olhos. Concorda com a cabeça. Devagar.", proxima: "c5_4b_2" },
    c5_4b_2: { quem: "sayuri", texto: "Eu sei. Não apaga nada. Eu não estou pedindo desculpa. Eu só... queria que alguém soubesse que o balde não fui eu.", proxima: "c5_4b_3" },
    c5_4b_3: { roupa: "escolar", sprite: "sayuri", tipo: "narracao", texto: "Ela prende o cabelo de novo. Coloca o laço rosa. Olha para o espelho. E, em três segundos, ela vira a Sayuri de sempre. O rosto fechado. O queixo alto. Sai do banheiro sem olhar para trás.", proxima: "c5_20" },
    c5_4c_1: { tipo: "narracao", texto: "Ela desliga a torneira. Seca o rosto na manga. E sai. Sem olhar para a Sayuri. Sem falar nada.", proxima: "c5_4c_2" },
    c5_4c_2: { tipo: "narracao", texto: "Atrás dela, antes da porta fechar, ela ouve um barulho baixo. Um soluço. Ela não volta.", proxima: "c5_20" },

    // (todas as opções continuam aqui)
    c5_20: { roupa: "escolar", tipo: "narracao", sprite: null, texto: "No corredor, a SN encosta na parede. Respira.", proxima: "c5_21" },
    c5_21: { tipo: "pensamento", texto: "Alguém mandou ela fazer isso. Alguém que ela tem mais medo do que de mim, do que do Kaito, do que da coordenação.", proxima: "c5_22" },
    c5_22: { tipo: "pensamento", texto: "Eu prometi que não ia contar pra ninguém. Ou nem prometi, mas não vou. Isso é entre mim e ela.", proxima: "c5_23" },
    c5_23: { tipo: "pensamento", texto: "Mas eu vou descobrir quem é.", proxima: "c6_01" },

    /* =================== CENA 6 — SEXTA À TARDE =================== */
    // Cenário: portão da escola, sexta, saída (usa "saida-colegio"). Música: violão leve, depois piano.
    c6_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Cena 6 — Sexta à tarde", sprite: null, texto: "No último sinal de sexta, o Takeo já está com a mochila nas costas antes do professor terminar de falar. Ele atravessa a sala até a carteira dela, quase tropeçando na própria cadeira.", proxima: "c6_02" },
    c6_02: { quem: "takeo", sprite: "takeo", texto: "Hoje é sexta. Lembra? Minha avó acordou às seis da manhã pra fazer bolinho. Ela fez três tipos. Ela arrumou a sala. Ela tirou o álbum de fotos de bebê da caixa. Eu tentei esconder de novo. Ela achou de novo.", proxima: "c6_03" },
    c6_03: { quem: "takeo", texto: "Se você não quiser ir, tudo bem. Sério. Depois dessa semana... eu entendo. Eu explico pra ela.", proxima: "c6_04" },
    c6_04: { tipo: "narracao", texto: "Ele fala isso rápido, olhando para o chão, como quem já preparou o “tudo bem” para não doer quando ela dissesse não.", proxima: "c6_05" },
    c6_05: { quem: "eu", texto: "Eu quero ir.", proxima: "c6_06" },
    c6_06: { tipo: "narracao", texto: "O rosto dele se ilumina inteiro. Do jeito que só o rosto do Takeo consegue. Como alguém que abriu a janela num quarto escuro.", proxima: "c6_07" },
    c6_07: { quem: "takeo", texto: "Sério? Tá. Tá bom. Ótimo. Eu vou mandar mensagem pra ela agora. Ela vai gritar. Ela grita quando fica feliz.", proxima: "c6_08" },
    c6_08: { tipo: "narracao", sprite: "reina", texto: "Na carteira do lado, a Reina está guardando o estojo bem devagar. Devagar demais. Ela ouviu tudo.", proxima: "c6_09" },
    c6_09: { quem: "reina", texto: "Bolinho? Três tipos? Que coincidência. Eu adoro bolinho. E eu nunca conheci a sua avó, Takeo. Que vergonha. Duas semanas sentando do seu lado.", proxima: "c6_10" },
    c6_10: { tipo: "narracao", texto: "Ela fecha a mochila. Joga o cabelo para trás. Sorri. Aquele sorriso de capa de revista.", proxima: "c6_11" },
    c6_11: { quem: "reina", texto: "Eu vou junto. Posso, né? Eu levo sobremesa. Sua avó gosta de pudim?", proxima: "c6_12" },
    c6_12: { tipo: "narracao", sprite: "takeo", texto: "O Takeo congela. Ele olha para a Reina. Olha para a SN. Olha para a Reina de novo. Dá para ver as engrenagens funcionando atrás dos olhos dele, todas travando ao mesmo tempo.", proxima: "c6_13" },
    c6_13: { quem: "takeo", texto: "Ah... é... minha avó... ela ama pudim. Ela ama. Muito. Ela... é.", proxima: "c6_14" },
    c6_14: { tipo: "narracao", texto: "Ele não consegue dizer não. Ele nunca consegue dizer não para ninguém. É uma das coisas mais bonitas e mais irritantes nele.", proxima: "c6_15" },
    c6_15: { quem: "reina", sprite: "reina", texto: "Perfeito. Então somos três.", proxima: "c6_16" },
    c6_16: { tipo: "narracao", texto: "Ela vira para a SN. Com uma sobrancelha levantada. Um desafio. Bem educado. Bem calmo. Bem claro.", proxima: "c6_17" },
    c6_17: { quem: "reina", texto: "Você não se importa, né? Afinal, a gente é amiga. Mais ou menos.", proxima: "c6_esc5" },

    // ▶ ESCOLHA 6 — A Reina se convidou
    c6_esc5: { escolhas: [
      { texto: "A. “Claro que não. Quanto mais gente, mais bolinho some.”", proxima: "c6_5a_1", pontos: { takeo: 1 }, flags: ["Aceitou_Reina_visita"] },
      { texto: "B. “Me importo um pouco. Mas a casa não é minha. Quem decide é o Takeo.”", proxima: "c6_5b_1", pontos: { takeo: 2 }, flags: ["Admitiu_Reina_visita"] },
      { texto: "C. Sorrir de volta, igual a Reina: “Leva pudim de leite. A avó dele odeia o de chocolate.”", proxima: "c6_5c_1", pontos: { takeo: 1, desvio: 1 }, flags: ["Provocou_Reina_visita"] }
    ]},
    c6_5a_1: { tipo: "narracao", texto: "A Reina estreita os olhos. Ela esperava uma briga. A SN não deu.", proxima: "c6_5a_2" },
    c6_5a_2: { quem: "reina", texto: "Que madura. Isso me irrita.", proxima: "c6_5a_3" },
    c6_5a_3: { tipo: "pensamento", texto: "Eu não sou madura. Eu só sei esconder melhor do que ela. Por dentro eu estou fervendo.", proxima: "c6_18" },
    c6_5b_1: { tipo: "narracao", texto: "Silêncio. A Reina olha para ela, surpresa com a honestidade. O Takeo fica vermelho até as orelhas.", proxima: "c6_5b_2" },
    c6_5b_2: { quem: "takeo", sprite: "takeo", texto: "Eu... decido? Eu não sei decidir nada. Eu demorei quinze minutos pra escolher um leite de morango.", proxima: "c6_5b_3" },
    c6_5b_3: { quem: "reina", sprite: "reina", texto: "Então eu decido por você. Eu vou. Pronto. Decidido.", proxima: "c6_5b_4" },
    c6_5b_4: { tipo: "narracao", texto: "Mas, por um segundo, a Reina olha para a SN de outro jeito. Quase com respeito. Como quem percebe que o adversário não está fingindo.", proxima: "c6_18" },
    c6_5c_1: { tipo: "narracao", texto: "A Reina pisca. Depois sorri, devagar. Um sorriso diferente. Quase divertido.", proxima: "c6_5c_2" },
    c6_5c_2: { quem: "reina", texto: "Ah, é assim? Você vai me dar dica errada pra eu passar vergonha?", proxima: "c6_5c_3" },
    c6_5c_3: { quem: "eu", texto: "Eu? Nunca.", proxima: "c6_5c_4" },
    c6_5c_4: { quem: "takeo", sprite: "takeo", texto: "Ela ama o de chocolate! Ela ama! Não escuta a SN!", proxima: "c6_5c_5" },
    c6_5c_5: { tipo: "narracao", texto: "A Reina ri. De verdade. A SN também. Por um segundo, as duas riem juntas, e o Takeo fica no meio, sem entender nada, em pânico.", proxima: "c6_18" },

    // (todas as opções continuam aqui)
    c6_18: { cenario: "saida-colegio", tipo: "narracao", sprite: "akane", texto: "No portão, a Akane está esperando a Reina. Ela sempre espera. A Reina para na frente dela e, pela primeira vez, hesita.", proxima: "c6_19" },
    c6_19: { quem: "reina", sprite: "reina", texto: "Akane... hoje eu vou numa casa. Você... quer vir?", proxima: "c6_20" },
    c6_20: { tipo: "narracao", texto: "A Akane olha para o Takeo. Para a SN. Para a Reina. E balança a cabeça, devagar. Quase sorrindo.", proxima: "c6_21" },
    c6_21: { quem: "akane", texto: "Não. Vai você. A Mio disse que me leva pra casa. Ela mora perto.", proxima: "c6_22" },
    c6_22: { tipo: "narracao", sprite: "mio", texto: "A Mio aparece do lado da Akane, de braço enganchado com ela, como se fossem amigas há anos. Ela pisca para a SN. Um piscar enorme, nada discreto.", proxima: "c6_23" },
    c6_23: { quem: "mio", texto: "Vai, vai. Depois me conta TUDO. Principalmente as fotos de bebê.", proxima: "c6_k1" },

    c6_k1: { tipo: "narracao", texto: "Quando os três saem pelo portão, o celular dela vibra no bolso.", proxima: "c6_k2" },
    c6_k2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Se a avó dele te der bolinho demais, me avisa. Eu levo sal de frutas.", proxima: "c6_k3" },
    c6_k3: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "E se quiser sair de lá mais cedo, também. Eu estou na loja do tio até as dez.", proxima: "c6_k4" },
    c6_k4: { roupa: "fora", sprite: "kaito", tipo: "narracao", texto: "Ela levanta os olhos. Do outro lado da rua, encostado na bicicleta, o Kaito guarda o celular no bolso e vira o rosto rápido. Como se estivesse olhando um poste muito interessante.", proxima: "c6_k5" },
    c6_k5: { tipo: "pensamento", texto: "Ele viu a Reina se convidar. Ele nunca vai admitir que ficou com ciúme. Mas mandou mensagem dois minutos depois.", proxima: "c6_k6" },
    c6_k6: { tipo: "narracao", texto: "Ela digita “combinado” e manda. Do outro lado da rua, ele lê, e o canto da boca dele sobe. Só um pouquinho.", proxima: "c6_24" },
    c6_24: { roupa: "escolar", tipo: "narracao", cenario: "rua", sprite: null, texto: "Os três andam pela rua. O Takeo no meio. A SN de um lado. A Reina do outro.", proxima: "c6_25" },
    c6_25: { tipo: "narracao", texto: "Na primeira esquina, a Reina engancha o braço no braço do Takeo. Como quem faz isso todo dia. O Takeo fica rígido como um cabo de vassoura.", proxima: "c6_26" },
    c6_26: { tipo: "narracao", texto: "Na segunda esquina, ela pede para ele carregar a bolsa dela, porque “o pudim pesa”. O pudim está numa sacola pequena. Pesa uns duzentos gramas.", proxima: "c6_27" },
    c6_27: { tipo: "narracao", texto: "Na terceira esquina, ela conta uma história engraçada sobre o primeiro ano e ri, encostando a cabeça no ombro dele por um segundo.", proxima: "c6_28" },
    c6_28: { tipo: "pensamento", texto: "Ela é boa nisso. Ela é muito boa nisso.", proxima: "c6_29" },
    c6_29: { tipo: "pensamento", texto: "Eu passei dez anos do lado dele sem nunca enganchar o braço. Ela fez isso em três esquinas.", proxima: "c6_cam1" },
    c6_cam1: { caminhos: [
      { flag: "SN_admitiu_ciume_Takeo", proxima: "c6_t_ciume" }
    ], proxima: "c6_30" },
    c6_t_ciume: { tipo: "narracao", sprite: "takeo", texto: "O Takeo olha para trás, por cima do ombro da Reina, para a SN. E faz uma careta pequena. De socorro. E depois, mais rápido, outra coisa: um sorriso torto, como quem lembra de uma conversa de terça-feira sobre ciúme.", proxima: "c6_t_ciume2" },
    c6_t_ciume2: { tipo: "pensamento", texto: "Ele lembrou. Ele sabe que eu estou com ciúme. E ele... gostou?", proxima: "c6_30" },
    c6_30: { cenario: "casa-takeo", tipo: "narracao", texto: "Na quarta esquina, numa rua estreita, cheia de casinhas antigas com vasos de planta na frente, o Takeo para. Na frente de uma casa pequena, de portão azul descascado, com um varal de roupa na janela.", proxima: "c6_esc6" },

    // ▶ ESCOLHA 7 — Na frente da casa do Takeo
    c6_esc6: { escolhas: [
      { texto: "A. Passar na frente da Reina e tocar a campainha primeiro.", proxima: "c6_6a_1", pontos: { takeo: 2, desvio: 1 }, flags: ["Tocou_campainha"] },
      { texto: "B. Ficar um passo atrás e deixar o Takeo abrir. É a casa dele.", proxima: "c6_6b_1", pontos: { takeo: 1 }, flags: ["Esperou_Takeo_abrir"] },
      { texto: "C. Ajeitar o cabelo no reflexo da janela, nervosa, sem que ninguém veja.", proxima: "c6_6c_1", pontos: { takeo: 1 }, flags: ["Nervosa_casa_Takeo"] }
    ]},
    c6_6a_1: { tipo: "narracao", texto: "Ela passa na frente. Toca a campainha. A Reina levanta as duas sobrancelhas, impressionada contra a vontade.", proxima: "c6_31" },
    c6_6b_1: { tipo: "narracao", texto: "Ela fica um passo atrás. O Takeo procura a chave no bolso, deixa cair, pega, deixa cair de novo. A Reina segura o riso. A SN também.", proxima: "c6_31" },
    c6_6c_1: { tipo: "narracao", texto: "Ela ajeita o cabelo no vidro da janela. Rápido. E, quando vira, vê a Reina fazendo exatamente a mesma coisa no vidro da outra janela. As duas se olham. Fingem que não viram.", proxima: "c6_31" },

    // (todas as opções continuam aqui)
    c6_31: { tipo: "narracao", texto: "Antes que alguém consiga abrir, o portão azul se abre sozinho. Por dentro.", proxima: "c6_32" },
    c6_32: { sprite: "avo_takeo", tipo: "narracao", texto: "Uma senhora pequenininha, de cabelo branco preso num coque, avental florido e óculos redondos, aparece na porta. Ela segura uma bandeja de bolinho de arroz com as duas mãos. Ela está sorrindo como quem esperou o dia inteiro por isso.", proxima: "c6_33" },
    c6_33: { quem: "avo_takeo", texto: "A menina da viga! Finalmente! Entra, entra, minha filha, eu fiz três tipos...", proxima: "c6_34" },
    c6_34: { tipo: "narracao", texto: "Ela para no meio da frase. Olha para a SN. Depois para a Reina, de braço enganchado no neto. Depois para o Takeo, que está ficando de uma cor que não existe na natureza.", proxima: "c6_35" },
    c6_35: { tipo: "narracao", texto: "A avó do Takeo ajeita os óculos no nariz. Devagar.", proxima: "c6_36" },
    c6_36: { quem: "avo_takeo", efeito: "eco", texto: "...Takeo. Você trouxe duas?", proxima: "ep_fim" },

    // Fim do Capítulo 12 (crie a entrada "capitulo12" em dados/capitulos.js). A visita continua no Capítulo 13.
    ep_fim: { fim: "capitulo12" }
  }
});

/*
 * GANCHO PARA O CAPÍTULO 13 (anotações do roteiro)
 *  • A visita na casa do Takeo: a avó, os três tipos de bolinho, o pudim da Reina,
 *    o álbum de fotos de bebê, a física. A Reina e a SN na mesma sala, disputando sem disputar.
 *  • A avó já tem uma preferida (“a menina da viga”). A Reina vai perceber.
 *  • A Sayuri disse que o balde não foi ideia dela. Quem mandou? (A SN não conta para ninguém.)
 *  • Blake e Mio: ela não fala com ele desde o corredor. (Mandou_Blake_Mio / Aceitou_desculpa_Blake)
 *  • O Kaito na janela. Ele não falou nada. Mas ficou a manhã inteira.
 *  • O Ren continua sumido.
 *
 * ESCOLHAS DO CAPÍTULO (7)
 *  1 Kaito na janela · 2 Hana e os 41 nomes · 3 Desculpa do Blake · 4 No caminho com o Kaito
 *  5 Sayuri no banheiro · 6 A Reina se convidou · 7 Na frente da casa do Takeo
 *
 * FLAGS NOVAS
 *  Nunca_ficou_longe_Kaito · Mao_guidao_Kaito · Pediu_Kaito_esperar
 *  Agradeceu_janela · Ficou_na_janela · Devolveu_jaqueta_Kaito · Guardou_conta_Hana · Abraco_Hana
 *  Contou_Hana · Aceitou_desculpa_Blake · Tempo_Blake · Mandou_Blake_Mio · Ofereceu_ajuda_Sayuri
 *  Cobrou_Sayuri · Saiu_sem_falar_Sayuri · Aceitou_Reina_visita · Admitiu_Reina_visita
 *  Provocou_Reina_visita · Tocou_campainha · Esperou_Takeo_abrir · Nervosa_casa_Takeo
 */