/*
 * =====================================================================
 *  CAPÍTULO 41 — Inocente
 *  Quinta-feira, depois do feriado (logo depois do Capítulo 40).
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Cenas com todos os meninos em todas as rotas, com mais Victor e Takeo. Bloco de rota à noite.
 *
 *  O QUE ACONTECE
 *    • O feriado passa. Quinta, volta às aulas.
 *    • O Kaito e a SN não estão namorando, mas tem alguma coisa. Ele busca ela de moto, como sempre.
 *    • A SERENA NÃO DESISTE: pede desculpa em público pela "cena" da festa, toda madura e doce. O Kaito aceita
 *      ("tudo bem"). Ela pede ajuda pra carregar as caixas da comissão de formatura e ele ajuda. Ela comenta com o
 *      Kaito, como quem não quer nada, que viu o Ren saindo da varanda na festa. Ela NUNCA explica nada pra SN:
 *      só sorri, finge inocência e manipula pelos lados. O Kaito não dá um basta de vez.
 *    • Takeo: trabalho de história em trio (SN, Takeo, Reina), gesso, biblioteca.
 *    • Victor: imita a Serena no banco, avisa a SN que conhece esse tipo, e chama ela pra pintar a placa da
 *      oficina à tarde. O Takeo vai junto.
 *    • Bloco de rota à noite.
 *    • Gancho: a Serena posta uma foto com o Kaito carregando as caixas: "obrigada por sempre estar lá".
 *
 *  REGRAS
 *    • Sala da SN: Takeo, Mio, Hana, Reina, Ren, Akane. Kaito, Blake, Ryuji, Victor e Serena são de outras salas.
 *    • Sem xadrez no Ren. O Ren não manda mensagem. Sem narrar roupa.
 *    • Sem flashback de passado / infância neste capítulo.
 *    • A Serena não conta os planos dela pra SN. Ela age.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Mio, Hana, Reina, Akane, Kaito, Takeo, Victor, Blake, Ryuji, Ren, Serena, Mãe do Victor, Caramelo.
 *    Sem nome / rótulo: Professor de história, Amiga da Serena.
 *
 *  CENÁRIOS
 *    Hall → "apartamento" · Escola: saida-colegio, sala-de-aula, corredor, patio-fundos
 *    Biblioteca → "clube-leitura" · Oficina do Victor / rua → "beco-mercado" · Quarto → "quarto-sn"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Rota_*, Beijo_Kaito, Escondeu_Ren_varanda, Contou_Ren_viu.
 *
 *  Crie a entrada "capitulo41" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo41", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — TEM ALGUMA COISA =================== */
    c1_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Quinta, 6h50 — Cena 1", sprite: null, texto: "O feriado passa num piscar. Quarta é pizza fria no café da manhã da casa da Reina, todo mundo de olho inchado, o Ryuji acordando na espreguiçadeira sem saber onde está, e depois um dia inteiro de sono em casa. E aí é quinta. Escola de novo.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "Sete horas. O celular vibra. “Tô embaixo, desce.” As mesmas três palavras de sempre. Mas ela lê a mensagem duas vezes, como se pudesse ter alguma coisa escondida no meio delas.", proxima: "c1_cam" },
    c1_cam: { caminhos: [
      { flag: "Beijo_Kaito", proxima: "c1_bk" }
    ], proxima: "c1_03" },
    c1_bk: { tipo: "pensamento", texto: "A gente se beijou no jardim da Reina. Mais de uma vez. E ele dormiu com a minha cabeça no peito dele. E agora ele manda “tô embaixo, desce”, igual sempre. A gente não falou o que a gente é. Ninguém falou nada.", proxima: "c1_03" },
    c1_03: { roupa: "escolar", tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", sprite: "kaito", texto: "No hall, no pé dos três degraus com a fita preta, ele está lá, no lugar de sempre, com o capacete vermelho no braço. Ele olha para ela descendo. E sorri antes de ela chegar no último degrau. Ele nunca sorria antes.", proxima: "c1_04" },
    c1_04: { quem: "kaito", texto: "Bom dia.", proxima: "c1_05" },
    c1_05: { quem: "eu", texto: "Bom dia.", proxima: "c1_06" },
    c1_06: { tipo: "narracao", texto: "Ele fecha a fivela do capacete embaixo do queixo dela. Os dedos ficam um segundo a mais no pescoço. Depois ele não tira a mão. Fica com a mão no lado do rosto dela, por baixo do capacete, olhando para ela.", proxima: "c1_07" },
    c1_07: { quem: "kaito", texto: "Você dormiu?", proxima: "c1_08" },
    c1_08: { quem: "eu", texto: "Dormi o feriado inteiro. Eu acho que eu ainda estou dormindo.", proxima: "c1_09" },
    c1_09: { quem: "kaito", texto: "Eu não dormi. Eu fiquei pensando.", proxima: "c1_10" },
    c1_10: { quem: "eu", texto: "Em quê?", proxima: "c1_11" },
    c1_11: { tipo: "narracao", texto: "Ele não responde. Tira a mão do rosto dela, devagar, e passa o polegar uma vez no queixo dela antes de soltar. Isso é a resposta.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — No hall
    c1_esc1: { escolhas: [
      { texto: "A. “Kaito. O que a gente é?”", proxima: "c1_1a_1", pontos: { kaito: 2 }, flags: ["O_que_a_gente_e"] },
      { texto: "B. Não perguntar nada. Segurar a mão dele um segundo antes de subir na moto.", proxima: "c1_1b_1", pontos: { kaito: 3 }, flags: ["Mao_antes_moto"] },
      { texto: "C. “Pensando no café no sal de novo?”", proxima: "c1_1c_1", pontos: { kaito: 2 }, flags: ["Cafe_sal_41"] }
    ]},
    c1_1a_1: { quem: "eu", texto: "Kaito. O que a gente é?", proxima: "c1_1a_2" },
    c1_1a_2: { tipo: "narracao", texto: "Ele para com o capacete dele na mão, a meio caminho da cabeça. Fica olhando para ela. Muito tempo. Ela vê ele procurar a palavra e não achar.", proxima: "c1_1a_3" },
    c1_1a_3: { quem: "kaito", texto: "...Eu não sei o nome. Eu sei que é alguma coisa. Me dá um tempo pra saber o nome.", proxima: "c1_12" },
    c1_1b_1: { tipo: "narracao", texto: "Ela não pergunta. Ela pega a mão dele, um segundo, antes de subir na moto. Aperta. Solta. Ele fica olhando para a própria mão como quem confere se ainda está lá.", proxima: "c1_12" },
    c1_1c_1: { quem: "eu", texto: "Pensando no café no sal de novo?", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "kaito", texto: "Eu coloquei leite no suco de laranja hoje. O tio não falou nada. Ele só ficou olhando.", proxima: "c1_12" },

    // (todas as opções continuam aqui)
    c1_12: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", sprite: null, texto: "Na garupa, ela segura na cintura dele, direto, sem passar pela camisa. No primeiro sinal, ele coloca a mão em cima da mão dela, na cintura, e deixa lá até o sinal abrir. No segundo sinal, faz de novo.", proxima: "c1_13" },
    c1_13: { tipo: "narracao", texto: "Na frente da escola, no meio-fio do portão, como sempre. E, no muro, como sempre, a Serena.", proxima: "c2_01" },

    /* =================== CENA 2 — O PEDIDO DE DESCULPAS =================== */
    c2_01: { tipo: "narracao", transicao: "tempo", legenda: "7h20 — Cena 2", sprite: "serena", texto: "Só que hoje a Serena não está encostada com cara de quem vai atacar. Ela está em pé, sozinha, sem as amigas, com as mãos juntas na frente do corpo, e um sorriso pequeno, tímido. A cara de alguém que passou o feriado inteiro arrependida.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", texto: "Ela espera o Kaito tirar o capacete. Depois vem andando até a moto. Devagar. Sem chaveiro balançando. O portão inteiro vira para olhar, porque a rede de fofoca contou da festa para quem não foi.", proxima: "c2_03" },
    c2_03: { quem: "serena", texto: "Kaito. Desculpa. Pela festa. Pela cena. Eu exagerei. Eu tinha bebido, eu nunca bebo, e eu fiquei muito... eu não sou assim. Eu tô com vergonha.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", texto: "Ela fala alto o suficiente para o portão ouvir. Baixo o suficiente para parecer que não quer que ninguém ouça. A SN conhece esse volume.", proxima: "c2_05" },
    c2_05: { quem: "serena", texto: "Eu não quero que fique esquisito entre a gente. Eu só queria pedir desculpa. Só isso.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", sprite: "kaito", texto: "O Kaito olha para ela. Ela não pediu desculpa para a SN. Ela não citou a SN. Ela não falou do ponche. Ela falou “a cena”, como se a cena tivesse sido de todo mundo.", proxima: "c2_07" },
    c2_07: { quem: "kaito", texto: "...Tudo bem.", proxima: "c2_08" },
    c2_08: { quem: "serena", sprite: "serena", texto: "Sério? Obrigada. Você é muito bom, Kaito. De verdade.", proxima: "c2_09" },
    c2_09: { tipo: "narracao", texto: "Ela sorri, com os olhos um pouco brilhantes, e vai embora para o portão. Não olha para a SN. Nem uma vez. Como se a SN fosse parte do muro.", proxima: "c2_10" },
    c2_10: { tipo: "narracao", sprite: null, texto: "Em volta, o portão murmura. Ela ouve. “Que fofa, pediu desculpa.” “Ela é madura.” “E a outra nem pediu desculpa pelo ponche.”", proxima: "c2_11" },
    c2_11: { tipo: "pensamento", texto: "Ela pediu desculpa por uma coisa que ela inventou. Pra ele. Não pra mim. E agora ela é a madura, e eu sou a que não pediu desculpa por ponche que eu não joguei.", proxima: "c2_12" },
    c2_12: { tipo: "pensamento", texto: "Ela é boa. Ela é muito, muito boa.", proxima: "c2_13" },
    c2_13: { quem: "kaito", sprite: "kaito", texto: "Ela pediu desculpa.", proxima: "c2_14" },
    c2_14: { tipo: "narracao", texto: "Ele fala isso como quem acha que resolveu alguma coisa. Ele não percebe. O Kaito não percebe essas coisas.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — "Ela pediu desculpa."
    c2_esc2: { escolhas: [
      { texto: "A. “Pra você. Não pra mim.”", proxima: "c2_2a_1", pontos: { kaito: 1 }, flags: ["Pra_voce_nao_pra_mim"] },
      { texto: "B. “Pediu.” E não falar mais nada. Ele vai entender sozinho. Ou não.", proxima: "c2_2b_1", pontos: {}, flags: ["Pediu_seco"] },
      { texto: "C. “Kaito. Ela pediu desculpa pela cena. Não pelo ponche. Ela nunca vai falar do ponche.”", proxima: "c2_2c_1", pontos: { kaito: 2 }, flags: ["Nao_pelo_ponche"] }
    ]},
    c2_2a_1: { quem: "eu", texto: "Pra você. Não pra mim.", proxima: "c2_2a_2" },
    c2_2a_2: { tipo: "narracao", texto: "Ele pisca. Fica parado com o capacete na mão. Ela vê a frase entrar nele devagar. Ele abre a boca para responder, e não responde.", proxima: "c2_15" },
    c2_2b_1: { quem: "eu", texto: "Pediu.", proxima: "c2_2b_2" },
    c2_2b_2: { tipo: "narracao", texto: "Ele olha para ela. Percebe o tom. Não entende o tom. Fica com cara de quem ouviu uma panela fazendo barulho estranho e não sabe qual é.", proxima: "c2_15" },
    c2_2c_1: { quem: "eu", texto: "Kaito. Ela pediu desculpa pela cena. Não pelo ponche. Ela nunca vai falar do ponche. Porque falar do ponche é falar que ela mentiu.", proxima: "c2_2c_2" },
    c2_2c_2: { tipo: "narracao", texto: "Ele fica quieto muito tempo. Depois faz que sim, devagar. Mas não fala nada sobre a Serena. E não vai atrás dela para dizer que não está tudo bem. Ele fica no meio. É isso que dá raiva.", proxima: "c2_15" },

    // (todas as opções continuam aqui)
    c2_15: { tipo: "narracao", sprite: "victor", texto: "Do lado do portão, encostado no poste, o Victor viu tudo, com o pirulito parado na boca. Quando a SN passa por ele, ele fala sem tirar o pirulito.", proxima: "c2_16" },
    c2_16: { quem: "victor", texto: "Eu conheço esse tipo. Pedido de desculpa com plateia. Intervalo. Banco. A gente precisa conversar.", proxima: "c3_01" },

    /* =================== CENA 3 — O TRIO (Takeo e Reina) =================== */
    c3_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "História — Cena 3", sprite: null, texto: "Na sala, o professor de história anuncia trabalho em trio, para a semana que vem. Tema: revoluções. Ele sorteia os grupos tirando papelzinho de um pote de sorvete vazio.", proxima: "c3_02" },
    c3_02: { quem: "desconhecido", rotulo: "Professor de história", texto: "SN, Takeo e Reina. Revolução industrial. Vocês três já estavam conversando de máquina a vapor semana passada, então agora vão conversar com nota.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", sprite: "takeo:escolar", texto: "O Takeo, atrás dela, fica vermelho na hora. A Reina, na frente, vira na cadeira e olha para os dois com o queixo alto, como quem acabou de ganhar uma reunião de diretoria.", proxima: "c3_04" },
    c3_04: { quem: "reina", sprite: "reina", texto: "Ótimo. Eu tenho a biblioteca inteira da minha avó. E uma impressora colorida. E um motorista. Esse trabalho vai ser o melhor trabalho da história da história.", proxima: "c3_05" },
    c3_05: { quem: "takeo", sprite: "takeo:escolar", texto: "Eu sei onde ficam os livros de revolução industrial na biblioteca da escola. Prateleira sete, terceira fileira. Eu sou do plantão.", proxima: "c3_06" },
    c3_06: { tipo: "narracao", sprite: null, texto: "Os dois falam ao mesmo tempo e depois se olham. A SN fica no meio, literalmente, entre a carteira da frente e a de trás.", proxima: "c3_cam_rt" },
    c3_cam_rt: { caminhos: [
      { flag: "Rota_Kaito", proxima: "c3_rt_k" }
    ], proxima: "c3_07" },
    c3_rt_k: { tipo: "narracao", texto: "Mas ela percebe uma coisa. A Reina não briga com o Takeo. Ela não fala “briga limpa”. Ela olha para ele, um segundo, de um jeito mais quieto que o normal, e ele olha de volta, e os dois desviam ao mesmo tempo. Alguma coisa aconteceu naquela varanda dos fundos da festa. Ela não sabe o quê. Ela não pergunta.", proxima: "c3_07" },
    c3_07: { tipo: "narracao", sprite: "takeo:escolar", texto: "No meio da aula, o Takeo cutuca o ombro dela com a mão boa. Ela vira. Ele está com o gesso apoiado na carteira, e o gesso tem agora mais três assinaturas, uma pizza, um caqui, e uma coroa de papelão desenhada pela Mio.", proxima: "c3_08" },
    c3_08: { quem: "takeo", sprite: "takeo:escolar", texto: "Uma semana e meia. Eu contei. Dez dias pra tirar o gesso. Eu tô riscando no calendário da cozinha. A minha avó tá riscando junto.", proxima: "c3_09" },
    c3_09: { quem: "takeo", sprite: "takeo:escolar", texto: "E depois eu vou poder escrever com as duas mãos. E carregar mochila nos dois ombros. E levantar o braço pra responder pergunta. Eu nunca levantei o braço pra responder pergunta, mas agora eu quero, só porque eu posso.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — O gesso
    c3_esc3: { escolhas: [
      { texto: "A. “No dia que você tirar, você levanta o braço na aula e eu bato palma.”", proxima: "c3_3a_1", pontos: { takeo: 2 }, flags: ["Palma_braco"] },
      { texto: "B. “O que você vai fazer primeiro com as duas mãos?”", proxima: "c3_3b_1", pontos: { takeo: 3 }, flags: ["Duas_maos_primeiro"] },
      { texto: "C. Passar o dedo no caqui desenhado no gesso. “Esse vai sumir quando você tirar.”", proxima: "c3_3c_1", pontos: { takeo: 3 }, flags: ["Caqui_some"] }
    ]},
    c3_3a_1: { quem: "eu", texto: "No dia que você tirar, você levanta o braço na aula e eu bato palma.", proxima: "c3_3a_2" },
    c3_3a_2: { quem: "takeo", sprite: "takeo:escolar", texto: "Sozinha? No meio da aula? Vai ser muito constrangedor.", proxima: "c3_3a_3" },
    c3_3a_3: { quem: "eu", texto: "Muito. Eu vou bater de pé.", proxima: "c3_3a_4" },
    c3_3a_4: { tipo: "narracao", texto: "Ele ri, baixinho, com a mão boa na boca, e a Reina vira para trás para olhar o que é tão engraçado, e ele para de rir na hora, e fica vermelho de novo.", proxima: "c3_10" },
    c3_3b_1: { quem: "eu", texto: "O que você vai fazer primeiro com as duas mãos?", proxima: "c3_3b_2" },
    c3_3b_2: { tipo: "narracao", texto: "Ele pensa. Muito. Com aquela cara de quem pesquisa a resposta numa biblioteca dentro da cabeça.", proxima: "c3_3b_3" },
    c3_3b_3: { quem: "takeo", sprite: "takeo:escolar", texto: "Prender o balanço de corda direito no caquizeiro. Ele está torto desde que eu quebrei o braço. Com uma mão só eu não consigo dar o nó.", proxima: "c3_3b_4" },
    c3_3b_4: { quem: "eu", texto: "Eu te ajudo a dar o nó.", proxima: "c3_3b_5" },
    c3_3b_5: { quem: "takeo", sprite: "takeo:escolar", texto: "...Tá. Mas o nó é meu. Você só segura a corda.", proxima: "c3_10" },
    c3_3c_1: { tipo: "narracao", texto: "Ela passa a ponta do dedo no caqui pequenininho desenhado no gesso. O Takeo fica parado, olhando para o dedo dela no braço dele, por cima do gesso.", proxima: "c3_3c_2" },
    c3_3c_2: { quem: "eu", texto: "Esse vai sumir quando você tirar.", proxima: "c3_3c_3" },
    c3_3c_3: { quem: "takeo", sprite: "takeo:escolar", texto: "Eu vou guardar o gesso. A minha avó disse que é nojento. Eu vou guardar mesmo assim. No armário. Do lado das coisas importantes.", proxima: "c3_10" },

    // (todas as opções continuam aqui)
    c3_10: { tipo: "narracao", sprite: "ren", texto: "Na carteira perto da porta, o Ren lê. Ele não olha para ela. Ela não olha para ele. A sala está normal. Ela prefere assim.", proxima: "c4_01" },

    /* =================== CENA 4 — AS CAIXAS (Serena e Kaito) =================== */
    c4_01: {  tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Intervalo — Cena 4", sprite: null, texto: "No intervalo, a SN desce a escada do bloco A com a Mio. Na metade da escada, ela vê, lá embaixo, perto da sala da coordenação, uma pilha de caixas de papelão grandes encostadas na parede. E, do lado delas, a Serena.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", sprite: "serena", texto: "Ela está tentando levantar uma caixa sozinha. A caixa é do tamanho dela. Ela levanta, cambaleia, coloca no chão de novo, passa a mão na testa, como quem está muito cansada. Ela está fazendo isso bem no caminho do pátio. Bem na hora do intervalo.", proxima: "c4_03" },
    c4_03: { tipo: "narracao", sprite: "kaito", texto: "E bem na hora em que o Kaito passa, vindo do bloco C.", proxima: "c4_04" },
    c4_04: { quem: "serena", sprite: "serena", texto: "Ai, Kaito, desculpa, eu tô no caminho. São as caixas da comissão de formatura. Eu sou da comissão. Tem que levar tudo pro depósito do bloco D até o fim do intervalo, e as meninas me deixaram sozinha. Mas tudo bem. Eu consigo.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "Ela levanta a caixa de novo. Cambaleia de novo. Com cuidado, para não cair de verdade, só o suficiente para parecer que vai cair.", proxima: "c4_06" },
    c4_06: { tipo: "narracao", sprite: "kaito", texto: "O Kaito pega a caixa da mão dela. É o que o Kaito faz. Ele sempre pega a caixa. Ele pegaria a caixa de qualquer pessoa.", proxima: "c4_07" },
    c4_07: { quem: "kaito", texto: "Bloco D?", proxima: "c4_08" },
    c4_08: { quem: "serena", sprite: "serena", texto: "Bloco D. São sete caixas. Mas você não precisa, sério. Eu não quero atrapalhar o seu intervalo.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", sprite: null, texto: "Ele já está andando com a caixa. Ela vai atrás, com a caixa menor, a mais leve, falando alguma coisa baixinho para ele, rindo. Na escada, a Mio aperta o braço da SN.", proxima: "c4_10" },
    c4_10: { quem: "mio", sprite: "mio", texto: "Sete caixas. O intervalo tem vinte minutos. O bloco D é do outro lado da escola. Ela calculou. Ela calculou tudo.", proxima: "c4_11" },
    c4_11: { tipo: "pensamento", texto: "Ele vai passar o intervalo inteiro carregando caixa pra ela. Sozinho com ela. E ela não precisou pedir. Ela só ficou no caminho.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — As caixas
    c4_esc4: { escolhas: [
      { texto: "A. Descer, pegar duas caixas de uma vez, uma em cada mão, e ir atrás. “Eu ajudo. Assim acaba mais rápido.”", proxima: "c4_4a_1", pontos: { kaito: 2, desvio: 1 }, flags: ["Duas_caixas"] },
      { texto: "B. Não descer. Deixar ele ir. “Ele vai perceber sozinho. Ou não. Não é meu trabalho.”", proxima: "c4_4b_1", pontos: {}, flags: ["Deixou_caixas"] },
      { texto: "C. Chamar o Blake e o Ryuji, que estão no pátio. “Comissão de formatura precisa de ajuda. Bloco D.”", proxima: "c4_4c_1", pontos: { blake: 1, ryuji: 1, kaito: 1 }, flags: ["Chamou_reforcos"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "Ela desce a escada. Pega duas caixas da pilha. Uma em cada mão. Com o mesmo esforço de quem carrega duas sacolas de pão. A Mio, da escada, abre a boca.", proxima: "c4_4a_2" },
    c4_4a_2: { tipo: "narracao", sprite: "serena", texto: "Quando ela chega no corredor do bloco D, a Serena para de rir. Olha para as duas caixas. Olha para a SN. E sorri, doce, para o Kaito.", proxima: "c4_4a_3" },
    c4_4a_3: { quem: "serena", texto: "Nossa. Que forte. Eu nunca conseguiria. Eu sou tão fraquinha pra essas coisas, né, Kaito?", proxima: "c4_4a_4" },
    c4_4a_4: { tipo: "pensamento", texto: "E agora eu sou a menina estranha que carrega duas caixas como se fosse nada, e ela é a menina delicada. Ela transformou até isso.", proxima: "c4_12" },
    c4_4b_1: { tipo: "narracao", texto: "Ela não desce. Ela termina de descer a escada com a Mio, vai para o pátio, senta no muro do bebedouro. Não olha para o corredor. Não olha para o bloco D.", proxima: "c4_4b_2" },
    c4_4b_2: { tipo: "pensamento", texto: "Ele carrega caixa pra qualquer pessoa. Eu sei disso. Ele carregou as mesas da festa do caldo. Ele carregou o Takeo. Ele não é meu pra eu impedir de carregar caixa.", proxima: "c4_4b_3" },
    c4_4b_3: { tipo: "pensamento", texto: "Mas ela sabe disso também. É por isso que ela ficou no caminho.", proxima: "c4_12" },
    c4_4c_1: { tipo: "narracao", texto: "Ela vai até a porta do pátio e assobia. O Blake e o Ryuji, no banco, levantam a cabeça.", proxima: "c4_4c_2" },
    c4_4c_2: { quem: "eu", texto: "Comissão de formatura precisa de ajuda! Bloco D! Sete caixas! O Kaito tá carregando sozinho!", proxima: "c4_4c_3" },
    c4_4c_3: { tipo: "narracao", texto: "O Ryuji sai correndo, gritando que é uma emergência logística. O Blake vai atrás, sem pressa, pega três caixas de uma vez. Em quatro minutos as sete caixas estão no depósito. A Serena fica parada no corredor do bloco D com a caixa mais leve, que ninguém deixou ela carregar, e um sorriso que não chega nos olhos.", proxima: "c4_12" },

    // (todas as opções continuam aqui)
    c4_12: { tipo: "narracao", sprite: null, texto: "No fim, quando o Kaito volta para o pátio, a Serena vem atrás e para do lado dele, perto, e agradece de novo. Toca o braço dele, de leve, na frente de todo mundo. E tira uma foto com o celular. Só das caixas no depósito, ela diz. Para mostrar para a comissão.", proxima: "c4_13" },
    c4_13: { tipo: "narracao", sprite: "kaito", texto: "O Kaito tira o braço, devagar. Mas não fala nada. Ele fala “de nada” e volta para o banco. Ele não dá um basta. Ele nunca dá um basta. Ele só se afasta um pouco e espera que a pessoa entenda.", proxima: "c4_14" },
    c4_14: { tipo: "pensamento", texto: "Ela nunca vai entender. Ela entende tudo. Ela só finge que não.", proxima: "c5_01" },

    /* =================== CENA 5 — O BANCO (Victor) =================== */
    c5_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Cena 5", sprite: "victor", texto: "No muro do bebedouro, o Victor senta do lado dela, de pernas cruzadas, com o pirulito, como quem senta para uma reunião de negócios. O Blake está no banco da árvore, com o Kaito. O Ryuji foi atrás de coxinha.", proxima: "c5_02" },
    c5_02: { quem: "victor", texto: "Reunião de emergência. Pauta: a Serena. Eu vou fazer uma demonstração.", proxima: "c5_03" },
    c5_03: { tipo: "narracao", texto: "Ele tira o pirulito da boca, junta as mãos na frente do corpo, abaixa os olhos, e faz uma voz fina, tremida, igualzinha.", proxima: "c5_04" },
    c5_04: { quem: "victor", texto: "“Ai, Kaito, desculpa, eu tô no caminho, eu sou tão fraquinha, mas tudo bem, eu consigo, você não precisa, sério, eu não quero atrapalhar.”", proxima: "c5_05" },
    c5_05: { tipo: "narracao", texto: "A SN ri tão alto que a Mio, do outro lado, vira para olhar. O Victor coloca o pirulito de volta na boca, com cara de ator que acabou de ganhar prêmio.", proxima: "c5_06" },
    c5_06: { quem: "victor", texto: "Eu conheço esse tipo. A minha prima é assim. Ela nunca pede nada. Ela fica no caminho. Ela faz você achar que foi ideia sua. A família inteira cai. Eu caí até os doze anos.", proxima: "c5_07" },
    c5_07: { quem: "victor", texto: "E o líder é a pessoa mais fácil do mundo de cair nisso. Porque ele é bom. Gente boa cai em gente assim. Eu sou ruim, então eu não caio.", proxima: "c5_08" },
    c5_08: { quem: "eu", texto: "Você não é ruim, Victor.", proxima: "c5_09" },
    c5_09: { quem: "victor", texto: "Eu sou um pouco ruim. Eu sou ruim o suficiente pra perceber quem é ruim. É um dom.", proxima: "c5_10" },
    c5_10: { tipo: "narracao", texto: "Ele fica quieto um segundo, mexendo o pirulito. Depois olha para ela de lado.", proxima: "c5_11" },
    c5_11: { quem: "victor", texto: "Você não precisa brigar com ela. Ela quer que você brigue. Se você brigar, você vira a vilã. Ela já está montando isso. Você vai ver.", proxima: "c5_12" },
    c5_12: { quem: "victor", texto: "Mudando de assunto, porque esse assunto me dá dor de barriga. Hoje à tarde, a placa. A placa da oficina. A de verdade. De madeira. Eu comprei a madeira com o dinheiro da doca. Eu preciso de alguém que tenha letra reta. A minha letra parece um eletrocardiograma. Não, essa é a do Ryuji. A minha parece um terremoto.", proxima: "c5_esc5" },

    // ▶ ESCOLHA 5 — Com o Victor
    c5_esc5: { escolhas: [
      { texto: "A. “Eu vou. E eu pinto o nome da sua mãe com a minha letra mais bonita.”", proxima: "c5_5a_1", pontos: { victor: 3 }, flags: ["Pinta_nome_mae"] },
      { texto: "B. “Obrigada, Victor. Pela demonstração. E pelo aviso.”", proxima: "c5_5b_1", pontos: { victor: 2 }, flags: ["Obrigada_aviso"] },
      { texto: "C. Imitar a Serena de volta, com a mesma voz: “Ai, Victor, eu não sei se eu consigo, eu sou tão fraquinha...”", proxima: "c5_5c_1", pontos: { victor: 3 }, flags: ["Imitou_Serena"] }
    ]},
    c5_5a_1: { quem: "eu", texto: "Eu vou. E eu pinto o nome da sua mãe com a minha letra mais bonita.", proxima: "c5_5a_2" },
    c5_5a_2: { tipo: "narracao", texto: "O Victor para de mexer o pirulito. Olha para ela. O sorriso torto diminui, e fica o outro, o pequeno, o quieto.", proxima: "c5_5a_3" },
    c5_5a_3: { quem: "victor", texto: "...A sua letra mais bonita. Tá. Combinado. Às três.", proxima: "c5_13" },
    c5_5b_1: { quem: "eu", texto: "Obrigada, Victor. Pela demonstração. E pelo aviso.", proxima: "c5_5b_2" },
    c5_5b_2: { quem: "victor", texto: "Serviço social. Pago em placa pintada. Às três. Na garagem.", proxima: "c5_13" },
    c5_5c_1: { quem: "eu", texto: "Ai, Victor, eu não sei se eu consigo, eu sou tão fraquinha, mas tudo bem, eu vou, você não precisa me esperar, sério...", proxima: "c5_5c_2" },
    c5_5c_2: { tipo: "narracao", texto: "O Victor engasga com o pirulito de tanto rir. Tosse. Ri mais. Bate no joelho. A Mio vem do outro lado para saber o que aconteceu e ele não consegue explicar.", proxima: "c5_5c_3" },
    c5_5c_3: { quem: "victor", texto: "Você é melhor que eu nisso. Você assustou até a mim. Três horas. Na garagem. Traz essa voz.", proxima: "c5_13" },

    // (todas as opções continuam aqui)
    c5_13: { tipo: "narracao", sprite: "takeo:escolar", texto: "O Takeo aparece do lado deles, mancando menos, com a mochila no ombro bom.", proxima: "c5_14" },
    c5_14: { quem: "takeo", sprite: "takeo:escolar", texto: "Placa? Eu ouvi placa. Eu sei fazer régua de letra com barbante e prego. Eu vi num vídeo. Eu posso ir? Eu tenho um braço, mas eu tenho opinião.", proxima: "c5_15" },
    c5_15: { quem: "victor", texto: "Um braço e opinião. Contratado. Três horas.", proxima: "c6_01" },

    /* =================== CENA 6 — A SAÍDA (Kaito e Serena) =================== */
    c6_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Saída — Cena 6", sprite: "kaito", texto: "Na saída, o Kaito está encostado na moto no meio-fio, com o capacete vermelho no braço. A Serena passa do lado dele no caminho do portão, para um segundo, e fala alguma coisa baixinho, perto do ouvido dele, como quem conta um segredo pequeno. Depois sorri, acena para ele, e vai embora com as amigas.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", texto: "Ela não olha para a SN. Ela nunca olha para a SN agora. É como se a SN fosse parte da calçada.", proxima: "c6_03" },
    c6_03: { tipo: "narracao", texto: "O Kaito fica parado, olhando para a moto, com uma cara estranha. Quando a SN chega, ele coloca o capacete nela, fecha a fivela. Mais rápido que de manhã. Os dedos não ficam no pescoço.", proxima: "c6_04" },
    c6_04: { tipo: "narracao", texto: "No primeiro sinal vermelho, ele não coloca a mão em cima da mão dela. No segundo, ele fala, sem virar a cabeça.", proxima: "c6_05" },
    c6_05: { quem: "kaito", texto: "A Serena disse uma coisa. Na saída.", proxima: "c6_06" },
    c6_06: { quem: "eu", texto: "O quê?", proxima: "c6_07" },
    c6_07: { quem: "kaito", texto: "Que ela viu o Ren saindo da varanda de cima, na festa. Pela escada dos fundos. Na hora que eu desci pra pegar água.", proxima: "c6_08" },
    c6_08: { tipo: "pensamento", texto: "Ela viu. Ou não viu, e alguém contou pra ela. E ela não usou isso comigo. Ela guardou. Ela esperou um dia. E colocou no ouvido dele, como quem não quer nada.", proxima: "c6_cam" },
    c6_cam: { caminhos: [
      { flag: "Contou_Ren_viu", proxima: "c6_sabia" },
      { flag: "Escondeu_Ren_varanda", proxima: "c6_escondeu" }
    ], proxima: "c6_escondeu" },

    // Se a SN contou do Ren na festa
    c6_sabia: { quem: "kaito", texto: "Eu falei pra ela que eu sabia. Que você me contou na hora. Ela ficou com uma cara.", proxima: "c6_sabia2" },
    c6_sabia2: { tipo: "narracao", texto: "Ele fala isso e, no sinal, coloca a mão em cima da mão dela, na cintura dele, finalmente. Aperta.", proxima: "c6_sabia3" },
    c6_sabia3: { quem: "kaito", texto: "Eu não entendo por que ela fez isso. Ela disse como se fosse um favor. Como se estivesse preocupada comigo.", proxima: "c6_sabia4" },
    c6_sabia4: { quem: "eu", texto: "Ela sempre fala como se fosse favor, Kaito.", proxima: "c6_sabia5" },
    c6_sabia5: { tipo: "narracao", texto: "Ele fica quieto. Ela sente ele pensar, pelas costas, pela respiração. Ele não fala mais nada. Mas não solta a mão dela até o próximo sinal abrir.", proxima: "c6_09" },

    // Se a SN escondeu o Ren na festa
    c6_escondeu: { quem: "kaito", texto: "Eu perguntei quem estava lá. Você falou “ninguém”.", proxima: "c6_esc2" },
    c6_esc2: { tipo: "narracao", texto: "Ele não fala com raiva. Ele fala baixo, olhando para o sinal vermelho, como quem coloca uma peça de quebra-cabeça e vê que não encaixa.", proxima: "c6_esc6" },
    c6_esc6: { escolhas: [
      { texto: "A. “Era o Ren. Ele viu o que ela fez com o ponche. Ele foi o único. Eu não quis falar porque eu não quero nada dele.”", proxima: "c6_6a_1", pontos: { kaito: 3 }, flags: ["Contou_Ren_depois"] },
      { texto: "B. “Eu não quis estragar a noite. Ele apareceu, eu mandei ele embora. Só isso.”", proxima: "c6_6b_1", pontos: { kaito: 1 }, flags: ["Meia_verdade_Ren"] },
      { texto: "C. “A Serena te contou isso no ouvido. Pensa por que ela esperou um dia pra contar.”", proxima: "c6_6c_1", pontos: { kaito: 2 }, flags: ["Pensa_por_que"] }
    ]},
    c6_6a_1: { quem: "eu", texto: "Era o Ren. Ele viu o que ela fez com o ponche. Ele foi o único que viu. Ele ofereceu contar pra todo mundo. Eu não quis. Eu não quero nada dele. E eu não falei porque eu queria que você acreditasse em mim sem ele.", proxima: "c6_6a_2" },
    c6_6a_2: { tipo: "narracao", texto: "Silêncio. O sinal abre. Ele não arranca. O carro de trás buzina. Ele não arranca.", proxima: "c6_6a_3" },
    c6_6a_3: { quem: "kaito", texto: "...Ele viu. E você não usou. Por mim.", proxima: "c6_6a_4" },
    c6_6a_4: { tipo: "narracao", texto: "Ele arranca, porque o carro de trás está quase subindo na moto. E, no próximo sinal, coloca a mão em cima da mão dela, na cintura. E aperta. Forte. A dúvida da festa, a pequena, no canto do olho dele, ela sente pela mão, diminui.", proxima: "c6_09" },
    c6_6b_1: { quem: "eu", texto: "Eu não quis estragar a noite. Ele apareceu, eu mandei ele embora. Só isso.", proxima: "c6_6b_2" },
    c6_6b_2: { quem: "kaito", texto: "...Tá.", proxima: "c6_6b_3" },
    c6_6b_3: { tipo: "narracao", texto: "O mesmo “tá” da festa. Ela ouve. Ele arranca. E não coloca a mão em cima da dela nos próximos três sinais. A Serena conseguiu de novo. Um pouquinho.", proxima: "c6_09" },
    c6_6c_1: { quem: "eu", texto: "A Serena te contou isso no ouvido. Um dia depois. Pensa por que ela esperou um dia, Kaito. E por que ela contou pra você e não pra mim.", proxima: "c6_6c_2" },
    c6_6c_2: { tipo: "narracao", texto: "Ele fica parado no sinal. Pensando. Ela sente pela respiração dele, pelas costas. O sinal abre.", proxima: "c6_6c_3" },
    c6_6c_3: { quem: "kaito", texto: "...Você não respondeu quem estava lá.", proxima: "c6_6c_4" },
    c6_6c_4: { quem: "eu", texto: "Era o Ren. Ele viu o ponche. Eu mandei ele embora. Eu não quero nada dele.", proxima: "c6_6c_5" },
    c6_6c_5: { tipo: "narracao", texto: "Ele faz que sim, devagar. Arranca. Não fala mais nada. Mas, dois sinais depois, a mão dele volta para cima da dela. Devagar. Como quem ainda está pensando, mas decidiu pensar do lado dela.", proxima: "c6_09" },

    // (todas as opções continuam aqui)
    c6_09: { tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", texto: "Na frente do prédio, ela desce. Devolve o capacete. Ele fica sentado na moto, olhando para ela.", proxima: "c6_10" },
    c6_10: { quem: "kaito", texto: "Hoje à tarde eu tenho que ajudar o tio. Na prefeitura de novo. Segunda tentativa do protocolo.", proxima: "c6_11" },
    c6_11: { quem: "eu", texto: "Eu vou na garagem do Victor pintar a placa da oficina. Com o Takeo.", proxima: "c6_12" },
    c6_12: { quem: "kaito", texto: "Pinta reto. O Victor não sabe pintar reto.", proxima: "c6_13" },
    c6_13: { tipo: "narracao", texto: "Ele quase vai embora. Depois desliga a moto. Desce. E dá um passo até ela, no pé dos três degraus, e fica parado, perto, sem fazer nada. Só olhando.", proxima: "c6_14" },
    c6_14: { quem: "kaito", texto: "...Amanhã. Sete horas.", proxima: "c6_15" },
    c6_15: { tipo: "narracao", texto: "Ele não beija ela. Ele não faz nada. Só fica ali um segundo, perto, e depois volta para a moto. Mas ela entende. Tem alguma coisa. Ainda não tem nome. Mas tem.", proxima: "c7_01" },

    /* =================== CENA 7 — A PLACA (Victor e Takeo) =================== */
    c7_01: { roupa: "fora", foto: "caramelo", tipo: "narracao", cenario: "quintal-victor", transicao: "tempo", legenda: "15h — Cena 7", sprite: null, texto: "Às três, a garagem do Victor. A porta de enrolar aberta, o rádio velho tocando, três motos desmontadas, o Caramelo dormindo em cima de um pneu. E, deitada em cima de dois cavaletes, no meio da garagem, uma tábua de madeira comprida, lixada, pintada de branco. A placa.", proxima: "c7_02" },
    c7_02: { sprite: "victor", quem: "victor", texto: "Damas e cavalheiro de um braço só. A placa.", proxima: "c7_03" },
    c7_03: { tipo: "narracao", sprite: "takeo:escolar", texto: "O Takeo chega mancando, com um rolo de barbante, uma caixinha de prego e uma régua de madeira, tudo dentro de uma sacola da avó. Ele estica o barbante de uma ponta da placa até a outra, com a mão boa, e prende com dois pregos. Uma linha reta perfeita.", proxima: "c7_04" },
    c7_04: { quem: "takeo", sprite: "takeo:escolar", texto: "Linha guia. Assim a letra não sobe. A letra do Victor sobe. Eu vi o caderno dele.", proxima: "c7_05" },
    c7_05: { quem: "victor", texto: "A minha letra tem ambição. Ela quer subir na vida.", proxima: "c7_06" },
    c7_06: { tipo: "narracao", texto: "A SN pega o pincel fino e a lata de tinta azul. O Victor fica do lado, segurando a lata, sem pirulito, olhando para a placa branca como quem olha para um bebê recém-nascido.", proxima: "c7_07" },
    c7_07: { quem: "victor", texto: "O nome dela em cima. Grande. Embaixo, “Oficina”. Menor. E embaixo de tudo, bem pequenininho, no canto, “e filho”. Ela não sabe do “e filho”. É surpresa.", proxima: "c7_08" },
    c7_08: { tipo: "narracao", texto: "Ela pinta. Devagar. Uma letra de cada vez, encostando no barbante do Takeo. O Takeo fica do outro lado, segurando a placa firme com a mão boa, para não balançar. O Victor fica no meio, segurando a lata, sem falar nada. O Victor sem falar nada por quarenta minutos.", proxima: "c7_09" },
    c7_09: { tipo: "narracao", texto: "Quando ela termina o nome da mãe dele, ela para. O Victor fica olhando. Ele não fala nada. Ele só passa a mão no rosto, rápido, e vira de costas, e finge que está procurando alguma coisa na prateleira de ferramenta.", proxima: "c7_10" },
    c7_10: { quem: "takeo", sprite: "takeo:escolar", texto: "...Victor, você está chorando?", proxima: "c7_11" },
    c7_11: { quem: "victor", texto: "É a tinta. Tinta azul tem um gás. Um gás que faz chorar. É científico.", proxima: "c7_12" },
    c7_12: { quem: "takeo", sprite: "takeo:escolar", texto: "Tinta à base de água não tem gás.", proxima: "c7_13" },
    c7_13: { quem: "victor", texto: "Takeo. Você está despedido.", proxima: "c7_esc6" },

    // ▶ ESCOLHA 6 — A placa
    c7_esc6: { escolhas: [
      { texto: "A. Abraçar o Victor por trás, de lado, rápido. “Ficou bonita. Ela vai chorar também.”", proxima: "c7_6a_1", pontos: { victor: 3 }, flags: ["Abraco_placa"] },
      { texto: "B. Pintar o “e filho” no canto, bem caprichado, com uma estrelinha do lado.", proxima: "c7_6b_1", pontos: { victor: 3 }, flags: ["E_filho_estrela"] },
      { texto: "C. Sujar a ponta do nariz do Takeo com tinta azul. “Agora você é da equipe de verdade.”", proxima: "c7_6c_1", pontos: { takeo: 3, victor: 1 }, flags: ["Nariz_azul_Takeo"] }
    ]},
    c7_6a_1: { tipo: "narracao", texto: "Ela abraça o Victor de lado, rápido, por trás, com o pincel ainda na mão. Ele fica completamente parado, de costas, com uma chave de fenda na mão, olhando para a prateleira.", proxima: "c7_6a_2" },
    c7_6a_2: { quem: "eu", texto: "Ficou bonita. Ela vai chorar também.", proxima: "c7_6a_3" },
    c7_6a_3: { quem: "victor", texto: "...Ela vai chorar muito. Ela chora com propaganda de margarina. Com isso ela vai inundar o bairro.", proxima: "c7_14" },
    c7_6b_1: { tipo: "narracao", texto: "Ela pinta o “e filho” no canto, bem pequenininho, caprichado, e do lado, uma estrelinha de cinco pontas. O Victor se agacha para ver. Fica agachado muito tempo.", proxima: "c7_6b_2" },
    c7_6b_2: { quem: "victor", texto: "Uma estrela. Por quê?", proxima: "c7_6b_3" },
    c7_6b_3: { quem: "eu", texto: "Porque o filho também brilha. Mesmo quando cai na piscina.", proxima: "c7_6b_4" },
    c7_6b_4: { tipo: "narracao", texto: "Ele levanta. Não faz piada. Pega o pirulito do bolso, olha para ele, e guarda de volta sem abrir.", proxima: "c7_14" },
    c7_6c_1: { tipo: "narracao", texto: "Ela molha a ponta do dedo na tinta azul e encosta no nariz do Takeo. Ele fica parado, vesgo, olhando para o próprio nariz azul.", proxima: "c7_6c_2" },
    c7_6c_2: { quem: "eu", texto: "Agora você é da equipe de verdade.", proxima: "c7_6c_3" },
    c7_6c_3: { quem: "takeo", sprite: "takeo:escolar", texto: "...Eu tenho que ir pra casa assim? A minha avó vai achar que eu fui atacado de novo.", proxima: "c7_6c_4" },
    c7_6c_4: { tipo: "narracao", texto: "O Victor ri tão alto que acorda o Caramelo, que pula do pneu e lambe o nariz azul do Takeo, e o Takeo grita, e cai sentado no chão da garagem, rindo, com o gesso para cima.", proxima: "c7_14" },

    // (todas as opções continuam aqui)
    c7_14: { tipo: "narracao", transicao: "tempo", legenda: "17h", texto: "Às cinco, a placa está pronta. Secando nos cavaletes. O nome da mãe do Victor em azul, reto, encostado no barbante do Takeo. “Oficina” embaixo. E, no canto, “e filho”.", proxima: "c7_15" },
    c7_15: { tipo: "narracao", texto: "Os três ficam sentados no chão da garagem, encostados na parede, olhando para a placa. O Caramelo no meio, dormindo de novo. O rádio velho tocando uma música antiga. Ninguém fala nada por um tempo. É bom.", proxima: "c7_16" },
    c7_16: { quem: "victor", texto: "Sábado eu penduro. Em cima da porta da garagem. A minha mãe chega do trabalho às sete. Vocês têm que estar aqui. Os dois. Isso não é convite, é intimação.", proxima: "c7_17" },
    c7_17: { quem: "takeo", sprite: "takeo:escolar", texto: "Eu venho. Eu trago a minha avó. Ela vai trazer bolo de caqui. Ela leva bolo de caqui pra tudo que é importante.", proxima: "c7_18" },
    c7_18: { tipo: "narracao", sprite: null, texto: "O Victor olha para o Takeo. Depois para a SN. E faz uma coisa que ela nunca viu ele fazer: fica tímido. O Victor, que chama o bairro inteiro de gatinha, tímido no chão da própria garagem.", proxima: "c7_19" },
    c7_19: { quem: "victor", texto: "...Ninguém nunca veio numa coisa minha. Nem aniversário. Eu não faço aniversário. Vai ser a primeira vez que tem gente.", proxima: "r_cam" },

    /* =================== ROTA — QUINTA À NOITE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { tipo: "narracao", cenario: "loja-lamen", transicao: "tempo", legenda: "Quinta, 19h", sprite: "kaito", texto: "Às sete, ela passa na lojinha. O Kaito está atrás do balcão, com o avental, cortando cebolinha. O aviso de despejo na parede agora diz “21”. Do lado, o protocolo, e um segundo protocolo, novo, carimbado hoje.", proxima: "rk_02" },
    rk_02: { quem: "kaito", texto: "Segunda tentativa. A moça disse que tem uma audiência. Daqui a duas semanas. O tio quase chorou no balcão da prefeitura. Eu fingi que não vi.", proxima: "rk_03" },
    rk_03: { tipo: "narracao", texto: "Ele para de cortar. Olha para ela. Depois pega um pano, limpa as mãos, e sai de trás do balcão. Para na frente dela, no meio da lojinha vazia.", proxima: "rk_04" },
    rk_04: { quem: "kaito", texto: "Hoje de manhã você perguntou o que a gente é. Ou não perguntou. Mas eu fiquei pensando como se você tivesse perguntado.", proxima: "rk_05" },
    rk_05: { quem: "kaito", texto: "Eu não sei o nome ainda. Mas eu sei que eu não quero carregar caixa pra ninguém se você estiver olhando com aquela cara. Eu vi a sua cara. Da escada.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. “Que cara?”", proxima: "rk_a1", pontos: { kaito: 2 }, flags: ["Que_cara"] },
      { texto: "B. “Então diz pra ela, Kaito. Claro. Igual você diz pra mim.”", proxima: "rk_b1", pontos: { kaito: 3 }, flags: ["Diz_pra_ela"] },
      { texto: "C. Chegar perto e dar um beijo nele, rápido, no meio da lojinha. “Isso é o nome por enquanto.”", proxima: "rk_c1", pontos: { kaito: 3 }, flags: ["Nome_por_enquanto"] }
    ]},
    rk_a1: { quem: "eu", texto: "Que cara?", proxima: "rk_a2" },
    rk_a2: { quem: "kaito", texto: "A de lápis quebrado.", proxima: "rk_a3" },
    rk_a3: { tipo: "narracao", texto: "Ela ri, sem querer. Ele também. E ele chega mais perto e encosta a testa na dela, no meio da lojinha, com o avental e o cheiro de cebolinha, até o tio tossir da cozinha.", proxima: "r_fim" },
    rk_b1: { quem: "eu", texto: "Então diz pra ela, Kaito. Claro. Igual você diz pra mim.", proxima: "rk_b2" },
    rk_b2: { tipo: "narracao", texto: "Ele fica parado. Ela vê ele não saber como. O Kaito nunca precisou falar claro com ninguém além dela.", proxima: "rk_b3" },
    rk_b3: { quem: "kaito", texto: "...Eu vou. Eu não sei como ainda. Mas eu vou.", proxima: "rk_b4" },
    rk_b4: { tipo: "pensamento", texto: "Ele vai tentar. E ela vai chorar. E ele vai se sentir o pior menino do mundo. E vai demorar mais uma semana pra tentar de novo. Eu sei. Mas ele disse “eu vou”.", proxima: "r_fim" },
    rk_c1: { tipo: "narracao", texto: "Ela chega perto, fica na ponta do pé, e dá um beijo nele, rápido, no meio da lojinha vazia, com o avental entre os dois. Ele fica parado, de olho arregalado, com o pano na mão.", proxima: "rk_c2" },
    rk_c2: { quem: "eu", texto: "Isso é o nome por enquanto.", proxima: "rk_c3" },
    rk_c3: { quem: "kaito", texto: "...Tá. Eu gosto desse nome.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { tipo: "narracao", cenario: "rua-padaria-noite", transicao: "tempo", legenda: "Quinta, 18h", sprite: "takeo:escolar", texto: "Saindo da garagem do Victor, ela leva o Takeo em casa, pela rua da padaria, que tem luz. Ele ainda está com a ponta do nariz azul, ou um pouco de tinta no gesso, ou só com a cara feliz de quem passou a tarde fazendo uma coisa boa.", proxima: "rt_02" },
    rt_02: { quem: "takeo", sprite: "takeo:escolar", texto: "O trabalho de história. Eu, você e a Reina. Eu fico nervoso. Eu fico nervoso com a Reina perto. E eu fico nervoso com você perto. E com as duas perto eu acho que eu vou desmaiar na biblioteca.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. “Então eu fico do seu lado. A Reina do outro. Você no meio. Você é bom em ficar no meio.”", proxima: "rt_a1", pontos: { takeo: 3 }, flags: ["Meio_trio"] },
      { texto: "B. “Por que você fica nervoso comigo, Takeo?”", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["Nervoso_comigo"] },
      { texto: "C. “A gente faz na sua casa. Embaixo do caquizeiro. A sua avó serve doce. Ninguém desmaia com doce.”", proxima: "rt_c1", pontos: { takeo: 2 }, flags: ["Trabalho_caquizeiro"] }
    ]},
    rt_a1: { quem: "eu", texto: "Então eu fico do seu lado. A Reina do outro. Você no meio. Você é bom em ficar no meio.", proxima: "rt_a2" },
    rt_a2: { quem: "takeo", sprite: "takeo:escolar", texto: "Eu sou bom em ficar no meio do caminho. No meio de duas pessoas eu nunca testei.", proxima: "r_fim" },
    rt_b1: { quem: "eu", texto: "Por que você fica nervoso comigo, Takeo?", proxima: "rt_b2" },
    rt_b2: { tipo: "narracao", texto: "Ele para no meio da calçada. Embaixo do poste. Fica vermelho até o gesso.", proxima: "rt_b3" },
    rt_b3: { quem: "takeo", sprite: "takeo:escolar", texto: "...Pelo mesmo motivo que eu ficava nervoso antes de você subir na escada comigo. Eu ainda estou pesquisando o motivo. Mas eu já sei a resposta.", proxima: "r_fim" },
    rt_c1: { quem: "eu", texto: "A gente faz na sua casa. Embaixo do caquizeiro. A sua avó serve doce. Ninguém desmaia com doce.", proxima: "rt_c2" },
    rt_c2: { quem: "takeo", sprite: "takeo:escolar", texto: "A Reina embaixo do meu caquizeiro. Você embaixo do meu caquizeiro. A minha avó vai achar que é casamento duplo.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { tipo: "narracao", cenario: "livraria-shopping", transicao: "tempo", legenda: "Quinta, 19h", sprite: "blake", texto: "Às sete, ela passa pela livraria do shopping. O Blake está atrás do balcão, de avental verde. Ele vê ela entrar e já estende uma bala de café, das que a dona deixa num pote no caixa.", proxima: "rb_02" },
    rb_02: { quem: "blake", texto: "As caixas. Hoje. Eu levei três. Eu vi a Serena tirar foto. Não era das caixas.", proxima: "rb_03" },
    rb_03: { quem: "eu", texto: "Era do quê?", proxima: "rb_04" },
    rb_04: { quem: "blake", texto: "Do braço dela no braço dele.", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. “Você sempre vê, Blake.”", proxima: "rb_a1", pontos: { blake: 3 }, flags: ["Sempre_ve_41"] },
      { texto: "B. “Por que você está me contando isso?”", proxima: "rb_b1", pontos: { blake: 3 }, flags: ["Por_que_conta"] },
      { texto: "C. Sentar na poltrona da nuvem. “Me conta outra coisa. Qualquer coisa. Que não seja ela.”", proxima: "rb_c1", pontos: { blake: 2 }, flags: ["Outra_coisa_Blake"] }
    ]},
    rb_a1: { quem: "eu", texto: "Você sempre vê, Blake.", proxima: "rb_a2" },
    rb_a2: { quem: "blake", texto: "Eu vejo você. O resto eu vejo porque está perto.", proxima: "r_fim" },
    rb_b1: { quem: "eu", texto: "Por que você está me contando isso?", proxima: "rb_b2" },
    rb_b2: { tipo: "narracao", texto: "Ele coloca um livro na estante. Ajeita. Não olha para ela.", proxima: "rb_b3" },
    rb_b3: { quem: "blake", texto: "Porque o Kaito não vai ver. Ele não vê essas coisas. Alguém tem que ver por ele. E por você.", proxima: "r_fim" },
    rb_c1: { tipo: "narracao", texto: "Ela senta na poltrona da nuvem. O Blake fica um tempo quieto. Depois conta que os gêmeos fizeram outro vulcão, agora na pia da cozinha, e a mãe dele ameaçou mudar de casa sem eles. Ela ri. Ele não ri, mas o canto da boca treme o tempo inteiro.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { tipo: "narracao", cenario: "frente-casa-sn-noite", transicao: "tempo", legenda: "Quinta, 19h", sprite: "ryuji", texto: "Às sete, a Relâmpago buzina duas vezes curtas na frente do prédio dela. O Ryuji, de uniforme laranja do curso de bombeiro, com a faixa nova na testa.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", texto: "Hoje a aula foi de primeiros socorros. A gente treinou num boneco. Eu dei nome pro boneco. Ele se chama Victor, porque ele cai muito.", proxima: "rr_03" },
    rr_03: { quem: "ryuji", texto: "E hoje no intervalo, quando você assobiou e gritou “emergência logística”, eu corri antes de pensar. Igual bombeiro. Eu nem sabia que era caixa. Eu achei que era incêndio.", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. “Você sempre corre quando eu chamo, Ryuji.”", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Sempre_corre"] },
      { texto: "B. “Me ensina o que você aprendeu hoje. No boneco. Comigo.”", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Ensina_socorro"] },
      { texto: "C. “Sobe. Vamos tomar um sorvete. Bombeiro merece sorvete.”", proxima: "rr_c1", pontos: { ryuji: 2 }, flags: ["Sorvete_Ryuji"] }
    ]},
    rr_a1: { quem: "eu", texto: "Você sempre corre quando eu chamo, Ryuji.", proxima: "rr_a2" },
    rr_a2: { quem: "ryuji", texto: "Eu corro quando qualquer um chama. Mas quando é você, eu corro mais rápido. Eu cronometrei. Não, mentira, eu não cronometrei. Mas eu sei.", proxima: "r_fim" },
    rr_b1: { quem: "eu", texto: "Me ensina o que você aprendeu hoje. No boneco. Comigo.", proxima: "rr_b2" },
    rr_b2: { tipo: "narracao", texto: "Ele fica vermelho. Explica posição lateral de segurança com ela deitada na calçada, ele virando ela com cuidado, devagar, as mãos no ombro e no joelho dela, a cara muito séria, muito técnica, as orelhas pegando fogo.", proxima: "rr_b3" },
    rr_b3: { quem: "ryuji", texto: "...Paciente estável. Paciente muito estável. Eu que não estou estável.", proxima: "r_fim" },
    rr_c1: { tipo: "narracao", texto: "Ela sobe na Relâmpago. Eles vão até a sorveteria da praça pela volta grande. No caminho, ele grita que a moto está dourada de novo, porque o sol está se pondo, e ela grita que está, e as pessoas na calçada olham para os dois gritando “dourada” numa moto amarela.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { tipo: "narracao", cenario: "quintal-victor", transicao: "tempo", legenda: "Quinta, 18h", sprite: "victor", texto: "Depois que o Takeo vai embora, ela fica mais um pouco na garagem. O Victor está sentado no chão na frente da placa, secando, abraçado nos joelhos, com o Caramelo no colo.", proxima: "rv_02" },
    rv_02: { quem: "victor", texto: "Hoje no banco eu falei que sou ruim. Pra perceber quem é ruim. Eu falei sério. Eu não sou bom igual o líder. Eu sou o cara que sabe quando alguém está fingindo, porque eu finjo o tempo todo.", proxima: "rv_03" },
    rv_03: { quem: "victor", texto: "O gatinha. As piadas. O pirulito. Eu finjo que eu não ligo pra nada. Você é a única que percebe.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. Sentar do lado dele no chão. “E agora? Você está fingindo?”", proxima: "rv_a1", pontos: { victor: 3 }, flags: ["Fingindo_agora"] },
      { texto: "B. “Você pintou o “e filho” na placa da sua mãe. Isso ninguém finge.”", proxima: "rv_b1", pontos: { victor: 3 }, flags: ["E_filho_nao_finge"] },
      { texto: "C. Roubar o pirulito do bolso dele. “Então hoje você fica sem a fantasia.”", proxima: "rv_c1", pontos: { victor: 2 }, flags: ["Sem_fantasia"] }
    ]},
    rv_a1: { tipo: "narracao", texto: "Ela senta do lado dele, no chão da garagem. O Caramelo muda de colo, do dele para o dela.", proxima: "rv_a2" },
    rv_a2: { quem: "eu", texto: "E agora? Você está fingindo?", proxima: "rv_a3" },
    rv_a3: { quem: "victor", texto: "...Não. Agora é a primeira vez no dia que eu não estou.", proxima: "r_fim" },
    rv_b1: { quem: "eu", texto: "Você colocou o “e filho” na placa da sua mãe. Isso ninguém finge.", proxima: "rv_b2" },
    rv_b2: { tipo: "narracao", texto: "Ele olha para a placa. Para o “e filho” no canto. E não fala nada. Só encosta o ombro no dela e deixa.", proxima: "r_fim" },
    rv_c1: { tipo: "narracao", texto: "Ela tira o pirulito do bolso da jaqueta dele. Ele não protesta. Ele fica olhando para ela segurando o pirulito dele, sem fazer piada nenhuma.", proxima: "rv_c2" },
    rv_c2: { quem: "eu", texto: "Então hoje você fica sem a fantasia.", proxima: "rv_c3" },
    rv_c3: { quem: "victor", texto: "...Tá. Mas só com você.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quinta, 23h", sprite: null, texto: "À noite, deitada no quarto, ela abre o celular. A Mio mandou uma mensagem com um print.", proxima: "f_02" },
    f_02: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "Não fica brava. Mas você tem que ver. A Serena postou.", proxima: "f_03" },
    f_03: { tipo: "narracao", texto: "É uma foto. As caixas da comissão de formatura empilhadas no depósito do bloco D. E, no canto da foto, cortado pela metade, sem rosto, um braço de jaqueta preta carregando a última caixa. Todo mundo da escola conhece aquela jaqueta.", proxima: "f_04" },
    f_04: { tipo: "narracao", efeito: "eco", texto: "Na legenda: “Obrigada por sempre estar lá quando eu preciso. Nem todo mundo entende, mas eu entendo. 🤍”", proxima: "f_05" },
    f_05: { tipo: "narracao", texto: "Embaixo, cento e quarenta curtidas. E comentários. “Que fofos.” “Finalmente!” “Sabia que vocês iam se acertar.” Um da amiga dela: “Depois de tudo que você passou essa semana, você merece.”", proxima: "f_06" },
    f_06: { tipo: "pensamento", texto: "“Depois de tudo que você passou essa semana.” O ponche que ela jogou nela mesma. A desculpa com plateia. As caixas no caminho. E agora ela é a menina que sofreu e foi recompensada.", proxima: "f_07" },
    f_07: { tipo: "pensamento", texto: "Ela não mentiu em nada. Ela não falou o nome dele. Ela não falou o meu. Ela só postou um braço e uma frase. E a escola inteira escreveu o resto.", proxima: "f_08" },
    f_08: { tipo: "narracao", texto: "O celular vibra de novo. Não é a Mio. É o Kaito.", proxima: "f_09" },
    f_09: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Alguém me marcou numa foto. Eu não entendi. Eu só carreguei caixa.", proxima: "f_10" },
    f_10: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu não pedi pra ela postar.", proxima: "f_esc" },

    // ▶ ESCOLHA FINAL — A foto
    f_esc: { escolhas: [
      { texto: "A. Responder: “Eu sei. Pede pra ela tirar.”", proxima: "f_a1", pontos: { kaito: 2 }, flags: ["Pede_tirar_foto"] },
      { texto: "B. Responder: “Eu sei que você só carregou caixa. Ela sabe também.”", proxima: "f_b1", pontos: { kaito: 2 }, flags: ["Ela_sabe_tambem"] },
      { texto: "C. Não responder hoje. Virar o celular pra baixo.", proxima: "f_c1", pontos: { desvio: 1 }, flags: ["Nao_respondeu_foto"] }
    ]},
    f_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu sei. Pede pra ela tirar.", proxima: "f_a2" },
    f_a2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Amanhã eu peço. Pessoalmente.", proxima: "f_a3" },
    f_a3: { tipo: "pensamento", texto: "Ele vai pedir. Educado. E ela vai chorar. E ele vai pedir desculpa por ter pedido. E a foto vai ficar lá. Eu conheço o Kaito. E eu já estou começando a conhecer ela.", proxima: "ep_fim" },
    f_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu sei que você só carregou caixa. Ela sabe também.", proxima: "f_b2" },
    f_b2: { tipo: "narracao", texto: "Visualizado. Digitando. Para. Digitando. Muito tempo.", proxima: "f_b3" },
    f_b3: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Amanhã. Sete horas. Eu vou chegar mais cedo.", proxima: "ep_fim" },
    f_c1: { tipo: "narracao", texto: "Ela vira o celular para baixo. Ele vibra mais uma vez contra a mesinha. Depois outra. Ela não olha. Ela fica olhando para o teto escuro.", proxima: "f_c2" },
    f_c2: { tipo: "pensamento", texto: "Amanhã ele vai estar no hall às sete. Ele sempre está. Mas hoje, pela primeira vez, eu não sei se eu quero descer.", proxima: "ep_fim" },

    // Fim do Capítulo 41 (crie a entrada "capitulo41" em dados/capitulos.js).
    ep_fim: { fim: "capitulo41" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 42 (anotações do roteiro)
 *  • KAITO E SN: não estão namorando, mas tem alguma coisa ("Eu não sei o nome. Eu sei que é alguma coisa").
 *    Ele sorri antes de ela chegar no último degrau, mão no rosto, mão em cima da mão dela no sinal.
 *    A lojinha: 21 dias. Segunda tentativa do protocolo: AUDIÊNCIA daqui a duas semanas.
 *  • SERENA, MANIPULADORA, NÃO DESISTE (e não explica nada pra SN, só age):
 *      – pediu desculpa pro Kaito em público pela "cena" (não pelo ponche, não pra SN). "Que madura."
 *      – ficou no caminho com as caixas da comissão de formatura no intervalo; o Kaito carregou.
 *      – colocou no ouvido do Kaito que viu o Ren saindo da varanda na festa (se a SN escondeu, gerou dúvida).
 *      – postou a foto das caixas com o braço da jaqueta do Kaito: "Obrigada por sempre estar lá quando eu preciso."
 *        140 curtidas. "Que fofos." "Finalmente!" O Kaito foi marcado. "Eu não pedi pra ela postar."
 *    O Kaito não dá um basta. Ele se afasta um pouco e espera ela entender. Ela nunca vai entender (finge).
 *  • VICTOR: imitou a Serena no banco; "eu conheço esse tipo; se você brigar, você vira a vilã".
 *    A placa da oficina pintada pela SN (nome da mãe, "Oficina", "e filho"). Sábado ele pendura, às 19h,
 *    quando a mãe chega. "Ninguém nunca veio numa coisa minha."
 *  • TAKEO: tira o gesso em 10 dias; trabalho de história em trio (SN, Takeo, Reina) sobre revolução industrial.
 *    ROTA KAITO: a Reina e o Takeo estão diferentes depois da festa (sem "briga limpa").
 *  • BLAKE: viu a foto ("não era das caixas, era do braço dela no braço dele").
 *  • RYUJI: correu primeiro quando ela chamou ("emergência logística").
 *  • O Ren: só na carteira, lendo. Sem mensagem, sem xadrez.
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 No hall · 2 "Ela pediu desculpa" · 3 O gesso (Takeo) · 4 As caixas · 5 Com o Victor · (O Ren na varanda)
 *  6 A placa · Rota (1 por rota) · Final: a foto
 *
 * FLAGS NOVAS
 *  O_que_a_gente_e · Mao_antes_moto · Cafe_sal_41 · Pra_voce_nao_pra_mim · Pediu_seco · Nao_pelo_ponche
 *  Palma_braco · Duas_maos_primeiro · Caqui_some · Duas_caixas · Deixou_caixas · Chamou_reforcos
 *  Pinta_nome_mae · Obrigada_aviso · Imitou_Serena · Contou_Ren_depois · Meia_verdade_Ren · Pensa_por_que
 *  Abraco_placa · E_filho_estrela · Nariz_azul_Takeo · Que_cara · Diz_pra_ela · Nome_por_enquanto
 *  Meio_trio · Nervoso_comigo · Trabalho_caquizeiro · Sempre_ve_41 · Por_que_conta · Outra_coisa_Blake
 *  Sempre_corre · Ensina_socorro · Sorvete_Ryuji · Fingindo_agora · E_filho_nao_finge · Sem_fantasia
 *  Pede_tirar_foto · Ela_sabe_tambem · Nao_respondeu_foto
 */