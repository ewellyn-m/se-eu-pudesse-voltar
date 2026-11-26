/*
 * =====================================================================
 *  CAPÍTULO 15 — Umas coisas sobre aquele menino
 *  Segunda e terça-feira, depois do sábado no shopping (Capítulo 14).
 * =====================================================================
 *
 *  O QUE ACONTECE
 *    • Segunda: a Reina chega abatida. Sem maquiagem, sem bolinho, sem provocar ninguém.
 *      Todo jogador vê isso. Quem voltou com o Takeo no Cap. 13 (Voltou_com_Takeo)
 *      lembra da ligação de sexta e ganha falas extras.
 *    • No terraço, a Reina conta: a avó dela está internada. Foi a avó que ensinou o pudim.
 *      Ela pede que a SN não conte para ninguém, principalmente para o Takeo. A SN não conta.
 *    • Um momento calmo com o Kaito na escada (fone de ouvido dividido).
 *    • Terça: a SN volta sozinha na casa do Takeo, como a avó pediu. A avó conta "umas coisas"
 *      sobre ele: o que o Takeo fez nos anos em que a SN sumiu.
 *    • O Takeo chega antes da hora e encontra as duas.
 *    • Gancho: a carteira da Sayuri vazia há dois dias. E uma mensagem da Reina à noite.
 *
 *  REGRAS QUE ESTE CAPÍTULO SEGUE
 *    • Nada de gangue na escola. O Ren não aparece. Ninguém fala o apelido antigo.
 *    • A SN não fica de fofoca: o segredo da Reina fica com ela.
 *    • Romance devagar.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Reina, Akane, Avó do Takeo, Takeo, Kaito, Mio, Hana, Ryuji, Blake.
 *    A avó da Reina só é citada, não aparece.
 *
 *  CENÁRIOS
 *    Terraço do bloco B → "patio-fundos" (mesmo mapeamento do Cap. 10)
 *    Escada → "corredor" · Casa do Takeo → "apartamento" (troque por "casa-takeo" se criar)
 *    Rua → "saida-colegio" · Quarto da SN → "quarto-sn"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Voltou_com_Takeo, Voltou_com_Kaito, Manda_carta_Blake, Blake_contou_Kaito,
 *    Abracou_avo, Provocou_Reina_visita, Incluiu_Reina_album.
 *
 *  Descrição sugerida em dados/capitulos.js:
 *    "Uma ligação que fez a Reina chorar de costas. E uma avó que quer contar umas coisas
 *     sobre aquele menino."
 */
Roteiro.registrar("capitulo15", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — SEM BOLINHO =================== */
    // Cenário: sala de aula, segunda de manhã. Música: piano baixo, um pouco melancólico.
    c1_01: { roupa: "escolar", tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Cena 1 — Sem bolinho", sprite: null, texto: "Segunda-feira. A primeira coisa que a SN percebe quando entra na sala é o silêncio do lado da carteira do Takeo.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "Toda manhã, nas últimas duas semanas, a Reina chegou antes dele, com um bolinho embrulhado em papel de seda e um comentário pronto. Hoje ela está lá. Mas não tem bolinho. Não tem comentário.", proxima: "c1_03" },
    c1_03: { tipo: "narracao", sprite: "reina", texto: "Ela está de cabeça baixa em cima da carteira, apoiada nos braços. O cabelo preso de qualquer jeito. Sem o brilho no lábio. Sem o rímel. A gola da camisa amassada.", proxima: "c1_04" },
    c1_04: { tipo: "pensamento", texto: "A Reina nunca chega amassada. Ela passa a camisa até no dia de prova de educação física.", proxima: "c1_05" },
    c1_05: { tipo: "narracao", sprite: "takeo", texto: "O Takeo chega e para na porta. Ele também percebe. Ele senta devagar, como quem senta do lado de alguém dormindo, e coloca na mesa dela uma caixinha de leite de morango. Sem falar nada.", proxima: "c1_06" },
    c1_06: { tipo: "narracao", sprite: "reina", texto: "A Reina levanta a cabeça. Olha para a caixinha. Os olhos dela estão inchados, com uma sombra roxa embaixo.", proxima: "c1_07" },
    c1_07: { quem: "reina", texto: "...Eu não gosto de morango.", proxima: "c1_08" },
    c1_08: { quem: "takeo", sprite: "takeo", texto: "Eu sei. Você disse semana passada. Mas era o único que tinha na máquina. E você parecia... que precisava de alguma coisa.", proxima: "c1_09" },
    c1_09: { tipo: "narracao", sprite: "reina", texto: "A Reina fica olhando para ele um segundo. Depois pega a caixinha. Enfia o canudo. Bebe. Faz careta. Continua bebendo.", proxima: "c1_10" },
    c1_10: { quem: "reina", texto: "Horrível. Obrigada.", proxima: "c1_cam1" },
    c1_cam1: { caminhos: [
      { flag: "Voltou_com_Takeo", proxima: "c1_lig_1" }
    ], proxima: "c1_semlig_1" },

    // ---- Quem voltou com o Takeo viu a ligação ----
    c1_lig_1: { tipo: "pensamento", texto: "Sexta. A ligação na segunda esquina. “É da minha casa.” Ela voltou de olho vermelho e fingiu que nada tinha acontecido.", proxima: "c1_lig_2" },
    c1_lig_2: { tipo: "pensamento", texto: "Eu vi. E não perguntei. E agora ela passou o fim de semana inteiro assim.", proxima: "c1_lig_3" },
    c1_lig_3: { tipo: "narracao", sprite: "takeo", texto: "O Takeo vira para trás, para a SN. Os dois trocam um olhar. Ele também lembra. Ele estava lá.", proxima: "c1_11" },

    // ---- Quem voltou com o Kaito não viu ----
    c1_semlig_1: { tipo: "pensamento", texto: "Na sexta ela estava rindo do pombo do álbum. Cortando pudim em fatias perfeitas na cozinha. Enganchando o braço no dele em cada esquina.", proxima: "c1_semlig_2" },
    c1_semlig_2: { tipo: "pensamento", texto: "Alguma coisa aconteceu depois que eu fui embora com o Kaito. Alguma coisa grande.", proxima: "c1_11" },

    // (os dois caminhos continuam aqui)
    c1_11: { tipo: "narracao", sprite: "akane", texto: "No intervalo, a Akane para do lado da carteira da SN. Ela nunca para do lado da carteira da SN.", proxima: "c1_12" },
    c1_12: { quem: "akane", texto: "Ela não fala comigo desde sábado. Ela responde “tô bem” pra tudo. Ela nunca fala “tô bem”. Ela fala “óbvio que eu tô ótima, olha pra mim”.", proxima: "c1_13" },
    c1_13: { quem: "akane", texto: "Ela subiu pro terraço do bloco B. Sozinha. Eu não posso ir. Se eu for, ela vai fingir que está bem pra mim. Ela sempre finge pra mim.", proxima: "c1_14" },
    c1_14: { tipo: "narracao", texto: "A Akane fala isso olhando para o chão, apertando a alça da bolsa. Ela está com medo.", proxima: "c1_15" },
    c1_15: { quem: "akane", texto: "Com você ela não finge. Ela fica irritada. É diferente. Irritada é melhor que fingindo.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — Subir no terraço?
    c1_esc1: { escolhas: [
      { texto: "A. Subir agora. Sem pensar duas vezes.", proxima: "c1_1a_1", pontos: { takeo: 1 }, flags: ["Subiu_terraco_Reina"] },
      { texto: "B. Passar na cantina primeiro e comprar alguma coisa salgada. Ela não gosta de doce de máquina.", proxima: "c1_1b_1", pontos: { takeo: 1 }, flags: ["Levou_lanche_Reina"] },
      { texto: "C. “Vem comigo, Akane. Você fica na porta. Se ela precisar de você, você está ali.”", proxima: "c1_1c_1", pontos: { takeo: 1 }, flags: ["Levou_Akane_terraco"] }
    ]},
    c1_1a_1: { tipo: "narracao", texto: "Ela levanta. A Akane solta o ar, aliviada, e senta na carteira dela como quem guarda um lugar.", proxima: "c2_01" },
    c1_1b_1: { tipo: "narracao", texto: "Ela compra um pão de queijo e um suco de laranja. Na fila, ela lembra: a Reina pegou o bolinho de salmão na casa da avó do Takeo. Duas vezes. Ela troca o pão de queijo por um onigiri de salmão.", proxima: "c2_01" },
    c1_1c_1: { sprite: "akane", tipo: "narracao", texto: "A Akane hesita. Depois concorda. As duas sobem a escada juntas. Na frente da porta do terraço, a Akane para e encosta na parede.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "akane", texto: "Eu fico aqui. Se ela gritar, eu entro.", proxima: "c2_01" },

    /* =================== CENA 2 — O TERRAÇO =================== */
    // Cenário: terraço do bloco B (usa "patio-fundos"). Vento. Música: violino baixo.
    c2_01: { tipo: "narracao", cenario: "terraco", transicao: "tempo", legenda: "Cena 2 — O terraço", sprite: null, texto: "A corrente da porta está aberta de novo. Pendurada. O cadeado solto, igual da outra vez.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", sprite: "reina", texto: "A Reina está sentada no chão, encostada na grade, com os joelhos dobrados e o celular na mão. A tela acesa. Ela fica atualizando a mesma conversa sem parar.", proxima: "c2_03" },
    c2_03: { tipo: "narracao", texto: "Ela vê a SN. E o rosto dela fecha na hora. A máscara tenta voltar. Mas falta força. Ela fica pela metade.", proxima: "c2_04" },
    c2_04: { quem: "reina", texto: "Ah, ótimo. Era só o que faltava. Veio rir da minha cara sem maquiagem?", proxima: "c2_05" },
    c2_05: { quem: "eu", texto: "Vim sentar.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", texto: "Ela senta do lado da Reina. Não muito perto. Encostada na mesma grade. As duas olhando para o céu nublado em cima do pátio.", proxima: "c2_cam1" },
    c2_cam1: { caminhos: [
      { flag: "Levou_lanche_Reina", proxima: "c2_lanche" }
    ], proxima: "c2_07" },
    c2_lanche: { tipo: "narracao", texto: "Ela coloca o onigiri de salmão e o suco no chão, entre as duas. A Reina olha. Não pega. Mas também não empurra para longe.", proxima: "c2_07" },
    c2_07: { tipo: "narracao", texto: "Um minuto inteiro de silêncio. O vento faz a corrente da porta bater. Tlec. Tlec.", proxima: "c2_08" },
    c2_08: { quem: "reina", texto: "...Você não vai embora, né?", proxima: "c2_09" },
    c2_09: { quem: "eu", texto: "Não.", proxima: "c2_10" },
    c2_10: { quem: "reina", texto: "Você é muito irritante, sabia?", proxima: "c2_11" },
    c2_11: { quem: "eu", texto: "Eu sei.", proxima: "c2_12" },
    c2_12: { tipo: "narracao", texto: "A Reina ri. Pelo nariz. Um riso que quebra no meio e vira outra coisa. Ela abaixa a cabeça nos joelhos.", proxima: "c2_13" },
    c2_13: { quem: "reina", texto: "Minha avó caiu na sexta. No banheiro. Ela ficou lá no chão um tempão até a moça que trabalha lá em casa chegar.", proxima: "c2_14" },
    c2_14: { quem: "reina", texto: "Ela está no hospital desde então. Bateu a cabeça. Os médicos falam umas palavras que eu não entendo. Ela acorda e dorme. Acorda e não sabe onde está. Dorme de novo.", proxima: "c2_cam2" },
    c2_cam2: { caminhos: [
      { flag: "Voltou_com_Takeo", proxima: "c2_lig" }
    ], proxima: "c2_15" },
    c2_lig: { quem: "reina", texto: "Aquela ligação, na sexta. Na rua. Era a moça que trabalha lá em casa. Eu fiquei com o celular na orelha ouvindo a sirene da ambulância do outro lado. E aí eu voltei e falei “por que vocês estão com essa cara?”.", proxima: "c2_lig2" },
    c2_lig2: { quem: "reina", texto: "Eu sou muito boa em fingir. Você viu.", proxima: "c2_15" },
    c2_15: { tipo: "narracao", texto: "Ela levanta a cabeça. Não chora. Os olhos estão secos, de quem já chorou tudo que tinha no fim de semana.", proxima: "c2_16" },
    c2_16: { quem: "reina", texto: "Foi ela que me ensinou a fazer pudim. Quando eu tinha sete anos. Em pé numa cadeira, na cozinha dela. A gente fazia todo domingo.", proxima: "c2_17" },
    c2_17: { quem: "reina", texto: "Faz um ano que ela não consegue mais. As mãos tremem. E eu parei de fazer também. Sozinha não tinha graça. Por isso aquele de sexta era de padaria.", proxima: "c2_cam3" },
    c2_cam3: { caminhos: [
      { flag: "Provocou_Reina_visita", proxima: "c2_choc" }
    ], proxima: "c2_leite" },
    c2_choc: { quem: "reina", texto: "E eu escolhi o de chocolate porque é o preferido dela. Da minha avó. Eu não caí na sua dica porque eu só pensei nela na hora de escolher.", proxima: "c2_18" },
    c2_leite: { quem: "reina", texto: "Eu peguei o de leite porque era o mais bonito da vitrine. Igual ao que ela fazia. Liso. Sem rachar. Eu nunca consegui fazer sem rachar.", proxima: "c2_18" },
    c2_18: { quem: "reina", texto: "E aí a avó do Takeo me chamou de menina do pudim. Por causa de um pudim de padaria. E disse aquilo, que quem gosta da gente gosta de qualquer pudim. Até do que racha.", proxima: "c2_19" },
    c2_19: { quem: "reina", texto: "Eu fiquei a noite inteira de sexta, no corredor do hospital, pensando que faz um ano que eu não faço um pudim que racha.", proxima: "c2_20" },
    c2_20: { tipo: "narracao", texto: "A voz dela falha na palavra “racha”. Só um pouquinho. Ela finge que foi o vento.", proxima: "c2_21" },
    c2_21: { tipo: "pensamento", texto: "Eu achei que ela estava lá pra ganhar do Takeo de mim. Pra me provocar. Pra disputar.", proxima: "c2_22" },
    c2_22: { tipo: "pensamento", texto: "Ela estava lá porque, por umas horas, numa sala cheia de planta, ela teve uma avó que não estava no hospital.", proxima: "c2_23" },
    c2_23: { tipo: "pensamento", texto: "Na outra vida, eu nunca soube nada sobre a Reina. Só que ela era bonita, que era líder de alguma coisa e que um dia sumiu da escola. Eu nunca perguntei pra onde.", proxima: "c2_24" },
    c2_24: { quem: "reina", texto: "Não conta pra ninguém. Principalmente pro Takeo.", proxima: "c2_25" },
    c2_25: { quem: "eu", texto: "Por que não pro Takeo?", proxima: "c2_26" },
    c2_26: { quem: "reina", texto: "Porque ele vai fazer aquela cara. Aquela cara de quem quer carregar tudo. E eu não quero que ele fique comigo por pena. Se um dia ele... se um dia ele ficar comigo, eu quero que seja porque eu sou insuportável e ele gosta mesmo assim.", proxima: "c2_27" },
    c2_27: { tipo: "narracao", texto: "Ela fala isso olhando direto para a SN. Sem desafio. Só honesta. É a primeira vez que a Reina diz em voz alta que gosta do Takeo. Para ela. Logo para ela.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — O segredo da Reina
    c2_esc2: { escolhas: [
      { texto: "A. “Eu não vou contar. Pra ninguém. Isso é seu.”", proxima: "c2_2a_1", flags: ["Guardou_segredo_Reina"] },
      { texto: "B. “Eu vou com você no hospital. Se você quiser. Não precisa falar nada no caminho.”", proxima: "c2_2b_1", flags: ["Ofereceu_hospital_Reina"], pontos: { takeo: 1 } },
      { texto: "C. “Leva um pudim pra ela. De chocolate. Eu te ajudo a fazer, se rachar.”", proxima: "c2_2c_1", flags: ["Pudim_com_Reina"] }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "A Reina concorda com a cabeça. Devagar. Como quem assina um contrato.", proxima: "c2_2a_2" },
    c2_2a_2: { quem: "reina", texto: "Eu sei que você não vai. Você não conta nada pra ninguém. Nem da página da Sayuri você contou. Eu fiquei esperando você contar. Você não contou.", proxima: "c2_2a_3" },
    c2_2a_3: { quem: "reina", texto: "Isso é muito irritante também.", proxima: "c2_28" },
    c2_2b_1: { tipo: "narracao", texto: "A Reina pisca. Fica olhando para ela como se não tivesse entendido a frase.", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "reina", texto: "Você... iria? No hospital? Comigo?", proxima: "c2_2b_3" },
    c2_2b_3: { quem: "eu", texto: "Iria.", proxima: "c2_2b_4" },
    c2_2b_4: { quem: "reina", texto: "...A gente nem é amiga.", proxima: "c2_2b_5" },
    c2_2b_5: { quem: "eu", texto: "Você disse na sexta que a gente era amiga mais ou menos.", proxima: "c2_2b_6" },
    c2_2b_6: { tipo: "narracao", texto: "A Reina abre a boca. Fecha. E então, sem aviso, encosta a testa no ombro da SN. Só um segundo. Depois se afasta, rápido, e arruma o cabelo como se nada tivesse acontecido.", proxima: "c2_2b_7" },
    c2_2b_7: { quem: "reina", texto: "Quarta. Depois da aula. Se eu desistir, você não pode reclamar.", proxima: "c2_28" },
    c2_2c_1: { quem: "reina", texto: "Você sabe fazer pudim?", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "eu", texto: "Não. Mas eu sei segurar a forma quando está quente. Sem luva.", proxima: "c2_2c_3" },
    c2_2c_3: { tipo: "narracao", texto: "A Reina ri. Dessa vez o riso não quebra.", proxima: "c2_2c_4" },
    c2_2c_4: { quem: "reina", texto: "Você é a pessoa mais estranha que eu conheço. E eu conheço muita gente estranha.", proxima: "c2_2c_5" },
    c2_2c_5: { quem: "reina", texto: "...Tá. Mas se rachar, a culpa é sua.", proxima: "c2_28" },

    // (todas as opções continuam aqui)
    c2_28: { tipo: "narracao", sprite: "reina", texto: "A Reina pega o celular. Atualiza a conversa de novo. Nada novo. Ela guarda no bolso.", proxima: "c2_cam4" },
    c2_cam4: { caminhos: [
      { flag: "Levou_lanche_Reina", proxima: "c2_come" },
      { flag: "Levou_Akane_terraco", proxima: "c2_akane" }
    ], proxima: "c2_29" },
    c2_come: { tipo: "narracao", texto: "Depois ela pega o onigiri de salmão do chão. Abre. Come em silêncio. Inteiro. A SN não comenta. Ela também não come desde sábado, com certeza.", proxima: "c2_29" },
    c2_akane: { tipo: "narracao", texto: "Ela olha para a porta do terraço. Vê a ponta do sapato da Akane aparecendo pela fresta. Fica olhando um tempo.", proxima: "c2_akane2" },
    c2_akane2: { quem: "reina", texto: "...Akane. Vem cá. Para de se esconder atrás da porta, eu vejo o seu sapato.", proxima: "c2_akane3" },
    c2_akane3: { sprite: "akane", tipo: "narracao", texto: "A Akane entra. A Reina abre um braço sem levantar do chão. A Akane senta do outro lado dela. As três ficam ali, encostadas na grade, até o sinal tocar.", proxima: "c2_29" },
    c2_29: { quem: "reina", texto: "E arruma essa cara. Se alguém perguntar, a gente subiu aqui pra brigar. Eu tenho uma reputação.", proxima: "c3_01" },

    /* =================== CENA 3 — UM FONE SÓ =================== */
    // Cenário: escada do bloco A, fim do intervalo (usa "corredor"). Música: uma música baixinha, "vinda do fone".
    c3_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Cena 3 — Um fone só", sprite: null, texto: "Na volta do terraço, a SN desce a escada devagar. Sentada no último degrau, ela encontra uma pessoa de boné, encostada na parede, de fone de ouvido.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", sprite: "kaito", texto: "O Kaito. Ele vê o tênis dela antes de ver o rosto. Tira um dos fones.", proxima: "c3_03" },
    c3_03: { quem: "kaito", texto: "Você subiu no terraço com a Reina. Briga?", proxima: "c3_04" },
    c3_04: { quem: "eu", texto: "Briga.", proxima: "c3_05" },
    c3_05: { tipo: "narracao", texto: "Ele fica olhando para o rosto dela. Não tem marca. Não tem roupa amassada. Ela está com cara de quem ouviu uma coisa triste.", proxima: "c3_06" },
    c3_06: { quem: "kaito", texto: "...Tá. Briga.", proxima: "c3_07" },
    c3_07: { tipo: "pensamento", texto: "Ele não acreditou. E não perguntou. Ele sabe que, se eu não falei, é porque não é meu pra falar.", proxima: "c3_08" },
    c3_08: { tipo: "narracao", texto: "Ele chega um pouco para o lado no degrau. Abre espaço. Ela senta.", proxima: "c3_09" },
    c3_09: { tipo: "narracao", texto: "Ele estende o fone que tirou. Sem falar nada. Ela pega. Coloca no ouvido.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", texto: "É uma música antiga. Lenta. Com um violão desafinado e um cara cantando baixo sobre uma cidade que ele nunca visitou.", proxima: "c3_11" },
    c3_11: { quem: "eu", texto: "Eu não sabia que você ouvia esse tipo de música.", proxima: "c3_12" },
    c3_12: { quem: "kaito", texto: "Era do meu pai. Ele deixou um monte de CD na casa do tio. Eu passei tudo pro celular.", proxima: "c3_13" },
    c3_13: { tipo: "narracao", texto: "Ele fala isso rápido, como quem não queria ter falado. Olhando para os próprios tênis.", proxima: "c3_14" },
    c3_14: { quem: "kaito", texto: "Não conta pro Ryuji. Ele acha que eu só ouço coisa pesada.", proxima: "c3_15" },
    c3_15: { tipo: "pensamento", texto: "Hoje todo mundo está me pedindo pra não contar. E eu não vou contar nada de ninguém.", proxima: "c3_16" },
    c3_16: { tipo: "narracao", texto: "O fio do fone é curto. Os dois ficam muito perto para conseguir ouvir. Ombro com ombro. O braço dele encostado no dela.", proxima: "c3_cam1" },
    c3_cam1: { caminhos: [
      { flag: "Voltou_com_Kaito", proxima: "c3_bike" }
    ], proxima: "c3_esc3" },
    c3_bike: { quem: "kaito", texto: "A máquina de bebida da descida quebrou de vez. Passei lá no domingo. Tem uma placa escrito “em manutenção”. Eu acho que foi você.", proxima: "c3_bike2" },
    c3_bike2: { quem: "eu", texto: "Você que amoleceu ela.", proxima: "c3_bike3" },
    c3_bike3: { tipo: "narracao", texto: "O canto da boca dele sobe. Ele não discute.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — Na escada com o Kaito
    c3_esc3: { escolhas: [
      { texto: "A. Encostar a cabeça na parede e fechar os olhos. Só ouvir a música até o fim.", proxima: "c3_3a_1", pontos: { kaito: 3 }, flags: ["Ouviu_musica_Kaito"] },
      { texto: "B. “Como era o seu pai?”", proxima: "c3_3b_1", pontos: { kaito: 2 }, flags: ["Perguntou_pai_Kaito"] },
      { texto: "C. “Me passa essa música. Eu quero ouvir em casa.”", proxima: "c3_3c_1", pontos: { kaito: 2 }, flags: ["Pediu_musica_Kaito"] }
    ]},
    c3_3a_1: { tipo: "narracao", texto: "Ela fecha os olhos. A música continua. O violão desafinado. A cidade que o cara nunca visitou.", proxima: "c3_3a_2" },
    c3_3a_2: { tipo: "narracao", texto: "Quando a música acaba, ela abre os olhos. O Kaito não está olhando para a escada. Está olhando para ela. E não desvia rápido como sempre. Demora um segundo. Dois.", proxima: "c3_3a_3" },
    c3_3a_3: { quem: "kaito", texto: "...Você dorme fácil.", proxima: "c3_3a_4" },
    c3_3a_4: { quem: "eu", texto: "Eu não dormi.", proxima: "c3_3a_5" },
    c3_3a_5: { quem: "kaito", texto: "Eu sei. Eu só queria falar alguma coisa.", proxima: "c3_17" },
    c3_3b_1: { tipo: "narracao", texto: "O Kaito fica quieto. Por muito tempo. Ela acha que ele não vai responder.", proxima: "c3_3b_2" },
    c3_3b_2: { quem: "kaito", texto: "Ele cantava desafinado. Igual esse cara. Cantava no carro, alto, com a janela aberta. Eu tinha vergonha.", proxima: "c3_3b_3" },
    c3_3b_3: { quem: "kaito", texto: "Hoje eu dava qualquer coisa pra ter vergonha de novo.", proxima: "c3_3b_4" },
    c3_3b_4: { tipo: "narracao", texto: "Ele não fala mais nada. E ela não pergunta mais nada. Ela só encosta um pouco mais o ombro no dele. Ele deixa.", proxima: "c3_3b_5" },
    c3_3b_5: { tipo: "pensamento", texto: "Ele assobia desafinado. Agora eu sei de quem ele herdou.", proxima: "c3_17" },
    c3_3c_1: { quem: "kaito", texto: "Não. Essa é minha.", proxima: "c3_3c_2" },
    c3_3c_2: { tipo: "narracao", texto: "Ele fala sério. Depois pensa. Depois tira o celular do bolso, mexe um pouco, e o celular dela vibra.", proxima: "c3_3c_3" },
    c3_3c_3: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "[arquivo de áudio] cidade_que_eu_nunca_fui.mp3", proxima: "c3_3c_4" },
    c3_3c_4: { quem: "kaito", texto: "Empresto. Não é sua. É emprestada.", proxima: "c3_3c_5" },
    c3_3c_5: { quem: "eu", texto: "Como se empresta uma música?", proxima: "c3_3c_6" },
    c3_3c_6: { quem: "kaito", texto: "Você ouve e lembra que é minha. Pronto. Emprestada.", proxima: "c3_17" },

    // (todas as opções continuam aqui)
    c3_17: { tipo: "narracao", sprite: null, texto: "O sinal toca. Ele pega o fone de volta, devagar, com cuidado para não puxar o cabelo dela.", proxima: "c3_18" },
    c3_18: { quem: "kaito", sprite: "kaito", texto: "Amanhã eu fico na janela de novo. Só por garantia.", proxima: "c3_19" },
    c3_19: { quem: "eu", texto: "Ninguém mais está mexendo comigo, Kaito.", proxima: "c3_20" },
    c3_20: { quem: "kaito", texto: "Por isso. Garantia.", proxima: "c3_21" },

    // Momento rápido no corredor: Blake, Mio e Ryuji (sem gangue na escola).
    c3_21: { tipo: "narracao", texto: "No corredor, a caminho da sala, ela passa pela janela onde o Kaito costuma ficar. Lá embaixo, no pátio, dá para ver o Ryuji mostrando o celular novo-usado do Victor para um grupo de alunos do primeiro ano. Na tela, uma foto de uma menina banguela abraçando dois coelhos.", proxima: "c3_cam2" },
    c3_cam2: { caminhos: [
      { flag: "Manda_carta_Blake", proxima: "c3_bm_falou" },
      { flag: "Blake_contou_Kaito", proxima: "c3_bm_dividido" }
    ], proxima: "c3_bm_normal" },
    c3_bm_falou: { tipo: "narracao", texto: "Perto do bebedouro, a Mio e o Blake. Ela está falando sem parar. Ele está ouvindo. Quando ela termina, ele fala alguma coisa curta, e ela dá um tapa no braço dele e ri. Eles não estão de mãos dadas. Mas estão no mesmo lugar. De novo.", proxima: "c4_01" },
    c3_bm_dividido: { tipo: "narracao", texto: "Perto do bebedouro, o Blake e o Kaito. O Kaito fala alguma coisa. O Blake dá um soco no ombro dele. O Kaito nem balança. Quando a SN passa, o Blake faz um aceno pequeno com a cabeça. Só isso.", proxima: "c4_01" },
    c3_bm_normal: { tipo: "narracao", texto: "Perto do bebedouro, a Mio e o Blake se cruzam. Os dois param. A Mio fala “oi” primeiro. O Blake fala “oi” de volta. E os dois seguem cada um para um lado. É pouco. Mas é mais do que semana passada.", proxima: "c4_01" },

    /* =================== CENA 4 — A CASA, SOZINHA =================== */
    // Cenário: casa do Takeo, terça à tarde (usa "apartamento"). Música: piano suave, violão.
    c4_01: { tipo: "narracao", cenario: "casa-takeo", transicao: "tempo", legenda: "Cena 4 — Terça, 16h20", sprite: null, texto: "Terça-feira. O Takeo tem plantão na biblioteca até as seis. Ele contou isso na saída, sem saber por que ela perguntou.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "Ela está na frente do portão azul descascado. Sozinha. Com uma sacola de laranjas da feira na mão, porque não sabia o que levar e não queria chegar de mão vazia.", proxima: "c4_03" },
    c4_03: { tipo: "pensamento", texto: "“Volta sozinha da próxima vez. Que eu quero te contar umas coisas desse menino.”", proxima: "c4_04" },
    c4_04: { tipo: "narracao", texto: "Ela toca a campainha. Uma vez.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "A avó abre o portão como se estivesse esperando atrás dele. De avental. Com farinha até o cotovelo.", proxima: "c4_06" },
    c4_06: { quem: "avo_takeo", texto: "Eu sabia que você ia vir numa terça. A terça é o dia que ele fica na biblioteca. Você é esperta. Entra, entra.", proxima: "c4_cam1" },
    c4_cam1: { caminhos: [
      { flag: "Abracou_avo", proxima: "c4_abraco" }
    ], proxima: "c4_07" },
    c4_abraco: { tipo: "narracao", texto: "Antes de deixar ela entrar, a avó abraça a SN. Do mesmo jeito que a SN abraçou na sexta. Forte, sem perguntar nada.", proxima: "c4_abraco2" },
    c4_abraco2: { quem: "avo_takeo", texto: "Agora está pago. Abraço se devolve.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", cenario: "casa-takeo-sala", texto: "A sala está igual. As plantas. A mesinha. O calendário de farmácia. Na sexta da semana passada, ainda tem o círculo vermelho e os três pontos de exclamação. Ninguém apagou.", proxima: "c4_08" },
    c4_08: { tipo: "narracao", texto: "A avó serve chá de cevada em dois copos de vidro. Senta na almofada. Tira os óculos. Limpa no avental. Coloca de volta.", proxima: "c4_09" },
    c4_09: { quem: "avo_takeo", texto: "Quando você mudou de bairro, ele tinha seis anos. Você lembra disso?", proxima: "c4_10" },
    c4_10: { quem: "eu", texto: "Lembro um pouco. Foi tudo muito rápido.", proxima: "c4_11" },
    c4_11: { quem: "avo_takeo", texto: "Foi rápido pra você. Pra ele demorou uma semana inteira. Ele ficou sentado naquela janela ali, todo dia depois da escola, olhando pra rua. Esperando você passar pra buscar ele pro balanço.", proxima: "c4_12" },
    c4_12: { quem: "avo_takeo", texto: "Na sexta-feira, ele desceu da janela, veio até a cozinha e me perguntou: “Vó, por que ninguém ia brincar com ela antes de mim?”", proxima: "c4_13" },
    c4_13: { tipo: "narracao", texto: "A SN aperta o copo de chá. Está quente. Ela não solta.", proxima: "c4_14" },
    c4_14: { quem: "avo_takeo", texto: "Eu disse que às vezes as crianças não sabem chegar perto de quem é diferente. E ele ficou pensando. Do jeito que ele pensa, com aquela testa enrugada.", proxima: "c4_15" },
    c4_15: { quem: "avo_takeo", texto: "No dia seguinte, ele foi pra escola e sentou do lado do menino que comia sozinho. E no outro mês, do lado da menina que não falava. E no outro ano, do lado de um menino que gaguejava e que os outros imitavam.", proxima: "c4_16" },
    c4_16: { quem: "avo_takeo", texto: "Todo ano tinha um. Todo ano ele achava um. Ele dizia: “Vó, se a SN voltar e estiver sozinha, eu quero que alguém sente do lado dela. Então eu vou sentar do lado de todo mundo até ela voltar.”", proxima: "c4_17" },
    c4_17: { tipo: "narracao", texto: "A sala fica muito quieta. Só o barulho do relógio da cozinha.", proxima: "c4_18" },
    c4_18: { tipo: "pensamento", texto: "Todo menino sozinho. Toda menina que não falava. Ele sentou do lado deles por minha causa.", proxima: "c4_19" },
    c4_19: { tipo: "pensamento", texto: "Na outra vida, aos dezesseis, eu estava sozinha no banheiro, em cima da tampa da privada. E ele estava na mesma escola. Sentando do lado de todo mundo. E eu nunca deixei ele me achar.", proxima: "c4_20" },
    c4_20: { tipo: "pensamento", texto: "Eu passava por ele no corredor de capuz. Ele me cumprimentava. Eu fingia que não ouvia. Eu tinha vergonha de quem eu tinha virado.", proxima: "c4_21" },
    c4_21: { tipo: "narracao", efeito: "flashback", texto: "Um corredor cheio. Um garoto de óculos tortos acenando de longe, do outro lado da multidão. “SN! Ei! SN!” Uma menina de capuz que vira o rosto e entra no banheiro. O aceno dele fica no ar.", proxima: "c4_22" },
    c4_22: { tipo: "narracao", texto: "Ela pisca. O chá está ficando frio. A avó está olhando para ela, em silêncio, esperando.", proxima: "c4_23" },
    c4_23: { quem: "avo_takeo", texto: "Ele apanha muito, sabia? Desde pequeno. Porque ele sempre fica na frente de alguém. Chega em casa com o joelho ralado e diz que caiu da bicicleta. Ele não tem bicicleta.", proxima: "c4_24" },
    c4_24: { quem: "avo_takeo", texto: "Ele nunca desiste. Nunca. E eu tenho medo, minha filha. Eu sou velha. Eu tenho medo de que um dia ele fique na frente de alguém que bate forte demais.", proxima: "c4_25" },
    c4_25: { tipo: "narracao", texto: "A SN sente o estômago gelar. Inteiro.", proxima: "c4_26" },
    c4_26: { tipo: "pensamento", texto: "Ela não sabe. Ela não tem como saber. Mas ela está descrevendo exatamente o que aconteceu. Na outra vida. Com ele.", proxima: "c4_27" },
    c4_27: { quem: "avo_takeo", texto: "Aí, semana passada, ele chega em casa machucado, sujo de poeira, e diz que alguém segurou uma viga por ele. Pela primeira vez na vida, alguém ficou na frente dele.", proxima: "c4_28" },
    c4_28: { quem: "avo_takeo", texto: "Eu não estou te pedindo nada. Eu não tenho esse direito. Eu só queria que você soubesse quem ele é. Porque ele nunca vai te contar. Ele acha que é normal.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — O que dizer para a avó do Takeo
    c4_esc4: { escolhas: [
      { texto: "A. “Eu vou ficar na frente dele. Sempre que precisar. Eu prometo.”", proxima: "c4_4a_1", pontos: { takeo: 3, desvio: 1 }, flags: ["Prometeu_avo_Takeo"] },
      { texto: "B. “Eu não sabia de nada disso. Eu queria ter sabido antes.”", proxima: "c4_4b_1", pontos: { takeo: 2 }, flags: ["Queria_saber_antes"] },
      { texto: "C. Não conseguir falar nada. Só chorar, quieta, segurando o copo de chá.", proxima: "c4_4c_1", pontos: { takeo: 2 }, flags: ["Chorou_avo_Takeo"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "A avó fica olhando para ela por cima dos óculos. Muito tempo. Como quem lê alguma coisa escrita no rosto dela.", proxima: "c4_4a_2" },
    c4_4a_2: { quem: "avo_takeo", texto: "Você fala isso como quem já perdeu ele uma vez.", proxima: "c4_4a_3" },
    c4_4a_3: { tipo: "narracao", texto: "A SN não responde. Não tem como responder.", proxima: "c4_4a_4" },
    c4_4a_4: { quem: "avo_takeo", texto: "Tá bom. Eu acredito. Mas fica na frente dele sem se machucar também. Ele não ia aguentar se você se machucasse por ele. Ele é assim.", proxima: "c4_29" },
    c4_4b_1: { quem: "avo_takeo", texto: "Você sabe agora. Agora é antes também. Antes de tudo o que ainda vai acontecer.", proxima: "c4_4b_2" },
    c4_4b_2: { tipo: "pensamento", texto: "“Agora é antes também.” Ela não faz ideia do quanto isso é verdade pra mim.", proxima: "c4_4b_3" },
    c4_4b_3: { tipo: "pensamento", texto: "Eu voltei doze anos. Pra mim, tudo agora é antes.", proxima: "c4_29" },
    c4_4c_1: { tipo: "narracao", texto: "Ela não consegue falar. As lágrimas caem sozinhas, dentro do copo de chá. Ela não soluça. Só chora, parada, quieta.", proxima: "c4_4c_2" },
    c4_4c_2: { tipo: "narracao", texto: "A avó não fala nada. Ela levanta, devagar, apoiando na mesinha. Vai até a cozinha. Volta com um bolinho de frango num pratinho. Coloca na frente dela. Senta de novo.", proxima: "c4_4c_3" },
    c4_4c_3: { quem: "avo_takeo", texto: "Quando você tinha seis anos e chorava, era isso que resolvia. Vamos ver se ainda funciona.", proxima: "c4_4c_4" },
    c4_4c_4: { tipo: "narracao", texto: "Ainda funciona.", proxima: "c4_29" },

    // (todas as opções continuam aqui)
    c4_29: { tipo: "narracao", sprite: null, texto: "A avó levanta para buscar mais chá. Para no meio da sala. Fala sem virar.", proxima: "c4_30" },
    c4_30: { quem: "avo_takeo", texto: "E a menina do pudim? Ela está bem? Ela tinha olho de quem está cuidando de alguém doente. Eu conheço esse olho. Eu tive ele por muitos anos.", proxima: "c4_31" },
    c4_31: { tipo: "narracao", texto: "A SN prende a respiração. Ela prometeu.", proxima: "c4_32" },
    c4_32: { quem: "eu", texto: "...Não é meu pra contar, senhora.", proxima: "c4_33" },
    c4_33: { tipo: "narracao", texto: "A avó vira. E sorri. Um sorriso aprovando.", proxima: "c4_34" },
    c4_34: { quem: "avo_takeo", texto: "Boa menina. Então fala pra ela que a minha porta está aberta. Às sextas. Com ou sem pudim.", proxima: "c4_35" },

    /* =================== CENA 5 — ANTES DAS SEIS =================== */
    c4_35: { tipo: "narracao", transicao: "tempo", legenda: "Cena 5 — Antes das seis", texto: "Cinco e dez da tarde. O portão abre. Alguém entra correndo, tropeça no degrau, se segura no batente.", proxima: "c4_36" },
    c4_36: { tipo: "narracao", sprite: "takeo", texto: "O Takeo. Sem fôlego. Com a mochila aberta e um livro da biblioteca caindo pela metade.", proxima: "c4_37" },
    c4_37: { quem: "takeo", texto: "Vó, a moça da biblioteca disse que viu a SN passando com laranja... e eu pensei... eu saí mais cedo, eu deixei o plantão com o...", proxima: "c4_38" },
    c4_38: { tipo: "narracao", texto: "Ele vê a SN sentada na almofada. Com um copo de chá. Os olhos ainda um pouco vermelhos. Ele para de falar.", proxima: "c4_39" },
    c4_39: { quem: "takeo", texto: "...Vó. O que você contou pra ela?", proxima: "c4_40" },
    c4_40: { quem: "avo_takeo", texto: "Que você chorou porque um pombo roubou seu pão. Ela já sabia. Eu contei de novo.", proxima: "c4_41" },
    c4_41: { tipo: "narracao", texto: "Ele olha para a avó. Para a SN. Ele sabe que é mentira. Ele não insiste.", proxima: "c4_42" },
    c4_42: { tipo: "narracao", cenario: "rua", transicao: "tempo", sprite: "takeo", texto: "Ele leva a SN até a esquina. Os dois andam devagar. Ele com as mãos no bolso. Ela segurando a sacola vazia das laranjas, porque a avó ficou com todas.", proxima: "c4_43" },
    c4_43: { quem: "takeo", texto: "Você estava chorando.", proxima: "c4_44" },
    c4_44: { quem: "eu", texto: "Um pouco.", proxima: "c4_45" },
    c4_45: { quem: "takeo", texto: "Ela contou da janela, né? Da semana que eu fiquei esperando.", proxima: "c4_46" },
    c4_46: { tipo: "narracao", texto: "Ela para de andar. Ele para também.", proxima: "c4_47" },
    c4_47: { quem: "takeo", texto: "Ela conta isso pra todo mundo. Pro carteiro. Pra vizinha. Eu sempre fico com vergonha.", proxima: "c4_48" },
    c4_48: { quem: "takeo", texto: "Mas pra você... pra você eu não fico com vergonha. Eu fico feliz que você sabe. Porque é verdade. Eu esperei.", proxima: "c4_esc5" },

    // ▶ ESCOLHA 5 — Na esquina com o Takeo
    c4_esc5: { escolhas: [
      { texto: "A. “Obrigada por ter sentado do lado de todo mundo. Até eu voltar.”", proxima: "c4_5a_1", pontos: { takeo: 3 }, flags: ["Agradeceu_Takeo_esperar"] },
      { texto: "B. Abraçar ele. No meio da calçada. Sem dizer nada.", proxima: "c4_5b_1", pontos: { takeo: 3 }, flags: ["Abracou_Takeo_esquina"] },
      { texto: "C. “Promete uma coisa? Quando você ficar na frente de alguém, me chama primeiro.”", proxima: "c4_5c_1", pontos: { takeo: 2, desvio: 1 }, flags: ["Takeo_chama_primeiro"] }
    ]},
    c4_5a_1: { tipo: "narracao", texto: "O Takeo fica vermelho. As orelhas, o pescoço, tudo. Ele olha para o chão. Depois para ela. Direto.", proxima: "c4_5a_2" },
    c4_5a_2: { quem: "takeo", texto: "Você voltou. Então valeu a pena. Todos eles valeram.", proxima: "c4_49" },
    c4_5b_1: { tipo: "narracao", texto: "Ela abraça. Ele fica parado, os braços abertos no ar, sem saber onde colocar. Depois, devagar, fecha os braços em volta dela. Com cuidado. Como quem segura uma coisa que pode sumir de novo.", proxima: "c4_5b_2" },
    c4_5b_2: { quem: "takeo", texto: "...Você não vai mudar de bairro de novo, né?", proxima: "c4_5b_3" },
    c4_5b_3: { quem: "eu", texto: "Não. Nunca mais.", proxima: "c4_49" },
    c4_5c_1: { quem: "takeo", texto: "Chamar você? Pra quê?", proxima: "c4_5c_2" },
    c4_5c_2: { quem: "eu", texto: "Pra eu ficar do seu lado. Você não precisa ficar na frente sozinho.", proxima: "c4_5c_3" },
    c4_5c_3: { tipo: "narracao", texto: "Ele pensa. Do jeito dele. Com a testa enrugada, igualzinho a avó descreveu.", proxima: "c4_5c_4" },
    c4_5c_4: { quem: "takeo", texto: "Tá. Eu prometo. Mas só se você também me chamar. Quando for você na frente.", proxima: "c4_5c_5" },
    c4_5c_5: { tipo: "pensamento", texto: "Ele não sabe o que ele está pedindo. Mas eu prometo. E dessa vez eu vou cumprir.", proxima: "c4_49" },

    // (todas as opções continuam aqui)
    c4_49: { tipo: "narracao", sprite: null, texto: "Na esquina, ela vira para dar tchau. Ele já está acenando. Do mesmo jeito do corredor da outra vida. Com a mão bem alta, de longe.", proxima: "c4_50" },
    c4_50: { tipo: "narracao", texto: "Dessa vez, ela acena de volta.", proxima: "fim_01" },

    /* =================== FIM — TERÇA À NOITE =================== */
    // Cenário: quarto da SN. Música: piano baixo.
    fim_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Terça, 22h05", sprite: null, texto: "No quarto, ela olha a tira de fotos colada do lado do espelho. Depois a foto dos dois com o bolinho de frango. Depois o teto.", proxima: "fim_02" },
    fim_02: { tipo: "pensamento", texto: "Amanhã eu reparo numa coisa que eu reparei hoje e ontem e não falei. A carteira da Sayuri. Vazia. Dois dias seguidos.", proxima: "fim_03" },
    fim_03: { tipo: "pensamento", texto: "As amigas dela sentam do mesmo jeito. Riem do mesmo jeito. Ninguém pergunta onde ela está. Como se ela nunca tivesse existido.", proxima: "fim_04" },
    fim_04: { tipo: "pensamento", texto: "Desde o homem de terno no shopping.", proxima: "fim_05" },
    fim_05: { tipo: "narracao", texto: "O celular vibra. Um número que ela não tem salvo. Mas ela sabe de quem é antes de abrir.", proxima: "fim_cam1" },
    fim_cam1: { caminhos: [
      { flag: "Ofereceu_hospital_Reina", proxima: "fim_r_hosp" },
      { flag: "Pudim_com_Reina", proxima: "fim_r_pudim" }
    ], proxima: "fim_r_seg" },
    fim_r_hosp: { quem: "mensagem", rotulo: "Mensagem — Reina", texto: "Ela acordou hoje e perguntou meu nome certo. Amanhã depois da aula. Você prometeu. Se você desistir eu conto pra escola inteira que você chorou no terraço. (Você não chorou. Mas eu conto mesmo assim.)", proxima: "fim_06" },
    fim_r_pudim: { quem: "mensagem", rotulo: "Mensagem — Reina", texto: "Ela acordou hoje e perguntou meu nome certo. Comprei leite condensado. E chocolate. Quinta à noite, na minha casa. Traz suas mãos que não queimam.", proxima: "fim_06" },
    fim_r_seg: { quem: "mensagem", rotulo: "Mensagem — Reina", texto: "Ela acordou hoje e perguntou meu nome certo. Só isso. Não sei por que estou te mandando isso. Apaga essa mensagem.", proxima: "fim_06" },
    fim_06: { tipo: "narracao", texto: "Ela não apaga. Ela salva o número. Escreve “Reina” no contato. Depois apaga e escreve de novo, “Reina (mais ou menos)”.", proxima: "fim_07" },
    fim_07: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Que bom. Fala pra ela que a avó do Takeo mandou dizer que a porta está aberta. Às sextas. Com ou sem pudim.", proxima: "fim_08" },
    fim_08: { tipo: "narracao", texto: "A resposta demora quatro minutos.", proxima: "fim_09" },
    fim_09: { quem: "mensagem", rotulo: "Mensagem — Reina", texto: "Você contou pra ela???", proxima: "fim_10" },
    fim_10: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Não. Ela adivinhou. Ela conhece o olho.", proxima: "fim_11" },
    fim_11: { tipo: "narracao", texto: "Dessa vez a resposta demora mais. Muito mais. E quando chega, é só uma palavra.", proxima: "fim_12" },
    fim_12: { quem: "mensagem", rotulo: "Mensagem — Reina", texto: "Obrigada.", proxima: "fim_13" },
    fim_13: { tipo: "pensamento", texto: "Na outra vida, ela sumiu da escola e eu nunca perguntei pra onde. Nessa, eu vou saber. E, se eu puder, ela não vai sumir.", proxima: "ep_fim" },

    // Fim do Capítulo 15 (crie a entrada "capitulo15" em dados/capitulos.js).
    ep_fim: { fim: "capitulo15" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 16 (anotações do roteiro)
 *  • A Sayuri sumiu da escola há dois dias. Desde o homem de terno. Ninguém pergunta.
 *  • Reina: hospital na quarta (Ofereceu_hospital_Reina) ou pudim na quinta (Pudim_com_Reina).
 *    A avó do Takeo convidou a Reina para as sextas.
 *  • A avó do Takeo percebeu que a SN fala "como quem já perdeu ele uma vez" (Prometeu_avo_Takeo).
 *  • O Kaito contou do pai (Perguntou_pai_Kaito) / emprestou a música (Pediu_musica_Kaito).
 *  • Blake e Mio: depende das escolhas do Cap. 14.
 *  • Na outra vida, a Reina "sumiu da escola" — a SN quer impedir.
 *  • O Ren continua sumido.
 *
 * ESCOLHAS DO CAPÍTULO (5)
 *  1 Subir no terraço? · 2 O segredo da Reina · 3 Na escada com o Kaito
 *  4 O que dizer para a avó do Takeo · 5 Na esquina com o Takeo
 *
 * FLAGS NOVAS
 *  Subiu_terraco_Reina · Levou_lanche_Reina · Levou_Akane_terraco · Guardou_segredo_Reina
 *  Ofereceu_hospital_Reina · Pudim_com_Reina · Ouviu_musica_Kaito · Perguntou_pai_Kaito
 *  Pediu_musica_Kaito · Prometeu_avo_Takeo · Queria_saber_antes · Chorou_avo_Takeo
 *  Agradeceu_Takeo_esperar · Abracou_Takeo_esquina · Takeo_chama_primeiro
 */