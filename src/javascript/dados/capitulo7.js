/*
 * =====================================================================
 *  CAPÍTULO 7 — O festival
 *  Quarta-feira, depois do Capítulo 6. O festival é na sexta-feira da semana seguinte (Capítulo 8). Um capítulo mais calmo, focado na escola.
 *  Mesmo formato dos capítulos anteriores: cada linha é uma cena.
 * =====================================================================
 *
 *  O QUE ESTE CAPÍTULO DEFINE
 *    • Primeira visão do FUTURO ALTERADO (fim da Cena 6): não é lembrança da vida antiga,
 *      é um aviso do futuro novo que as mudanças da SN criaram. Use efeito "apagao" para entrar
 *      e "flashback" durante a visão. Pode se repetir nos próximos capítulos.
 *    • Personagem novo: Victor, 3º ano, repetente. Personalidade inspirada no Baji
 *      (Tokyo Revengers): selvagem, briguento, debochado, típico galinha. Chama todo mundo
 *      de “gatinha”. Por baixo, leal e com um lado mole por bicho de rua (o cachorro Caramelo).
 *    • O Ren continua infernizando, mas de um jeito sonso: não encosta em ninguém.
 *      Só manda fotos e finge que não sabe de nada.
 *    • A Sora NÃO voltou no tempo. “Eu voltei” queria dizer “voltei a ser eu”.
 *      O diário dela desmente o que o Jin, a mãe e a SN acreditavam.
 *    • A mãe quase não aparece.
 *
 *  PERSONAGENS SEM FICHA NO JOGO (falam com quem: "desconhecido" + rotulo)
 *    Victor, Ren, Sayuri, Yuto, Professora (de química, do Capítulo 1), Zelador.
 *    Quando criar o Victor e os outros em dados/personagens.js, troque o quem.
 *
 *  CENÁRIOS (todos já existem)
 *    Banco da coordenação → "corredor"
 *
 *  FLAGS DOS CAPÍTULOS ANTERIORES USADAS AQUI (com caminhos)
 *    Visita_Takeo_amanha, Salvou_Yuto, Hana_sabe_tudo, Hana_sabe_viagem,
 *    Mio_confessou_Blake, Alianca_gangues.
 *
 *  Título, capa e gancho ficam em dados/capitulos.js: crie a entrada "capitulo7".
 */
Roteiro.registrar("capitulo7", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — BOM DIA =================== */
    // Cenário: quarto da SN, quarta de manhã. Música: tema leve, um pouco desconfiado.
    c1_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Cena 1 — Bom dia", sprite: null, texto: "Quarta-feira. A maçã mordida não está mais no muro do vizinho. Alguém tirou durante a noite. Ou um passarinho comeu. A SN prefere acreditar no passarinho.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "O celular vibra em cima da escrivaninha. Um número que ela não tem salvo.", proxima: "c1_03" },
    c1_03: { tipo: "narracao", texto: "Uma foto. A Mio, ontem à tarde, sentada no ponto de ônibus, rindo de alguma coisa no celular. Embaixo, uma mensagem só.", proxima: "c1_04" },
    c1_04: { quem: "mensagem", rotulo: "Número desconhecido", texto: "Bom dia 🙂", proxima: "c1_05" },
    c1_05: { tipo: "narracao", texto: "Outra foto chega. A Hana, na biblioteca, de costas, alcançando um livro numa prateleira alta.", proxima: "c1_06" },
    c1_06: { quem: "mensagem", rotulo: "Número desconhecido", texto: "Que dia bonito, né?", proxima: "c1_07" },
    c1_07: { tipo: "narracao", texto: "Mais uma. O Takeo, na janela do quarto dele, de pijama de foguetinho, tomando sopa.", proxima: "c1_08" },
    c1_08: { quem: "mensagem", rotulo: "Número desconhecido", texto: "Tão fofo.", proxima: "c1_09" },
    c1_09: { tipo: "narracao", texto: "Nenhuma ameaça. Nenhum xingamento. Só fotos normais, de pessoas normais, fazendo coisas normais. E é exatamente isso que faz o estômago dela revirar.", proxima: "c1_10" },
    c1_10: { tipo: "pensamento", texto: "Ele não precisa ameaçar. Ele só precisa me mostrar que está olhando.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — O que fazer com as fotos?
    c1_esc1: { escolhas: [
      { texto: "A. Responder: “Eu sei que é você, Ren.”", proxima: "c1_1a_1", pontos: { desvio: 1 }, flags: ["Respondeu_fotos_Ren"] },
      { texto: "B. Não responder. Salvar todas as fotos numa pasta, como prova.", proxima: "c1_1b_1", flags: ["Guardou_fotos_Ren"] },
      { texto: "C. Mandar as fotos no grupo do Kaito: “Ele está seguindo todo mundo. Ninguém sozinho.”", proxima: "c1_1c_1", pontos: { kaito: 1, blake: 1 }, flags: ["Grupo_sabe_fotos"] }
    ]},
    c1_1a_1: { tipo: "narracao", texto: "Os dois risquinhos azuis aparecem na hora. Três pontinhos. Somem. Aparecem. Depois chega a resposta.", proxima: "c1_1a_2" },
    c1_1a_2: { quem: "mensagem", rotulo: "Número desconhecido", texto: "Quem é Ren? 🙂 Acho que você mandou pra pessoa errada. Tenha um ótimo dia!", proxima: "c1_1a_3" },
    c1_1a_3: { tipo: "pensamento", texto: "Ele está rindo. Eu consigo ouvir ele rindo daqui.", proxima: "c1_11" },
    c1_1b_1: { tipo: "narracao", texto: "Ela cria uma pasta nova no celular. Dá o nome de “Matilha”. Coloca as três fotos lá dentro. Anota a hora de cada uma no caderno azul.", proxima: "c1_1b_2" },
    c1_1b_2: { tipo: "pensamento", texto: "No meu antigo trabalho, eu aprendi uma coisa: quem guarda papel ganha a briga no final.", proxima: "c1_11" },
    c1_1c_1: { tipo: "narracao", texto: "Ela manda. Em menos de um minuto, chegam as respostas.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Vou buscar a Hana em casa. Mio, te pego no ponto.", proxima: "c1_1c_3" },
    c1_1c_3: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "esse cara tira foto pior que minha vó. a mio tá de olho fechado na dela", proxima: "c1_1c_4" },
    c1_1c_4: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Ninguém sozinho.", proxima: "c1_1c_5" },
    c1_1c_5: { tipo: "narracao", texto: "E, um minuto depois, uma mensagem do Kaito só para ela. Não no grupo.", proxima: "c1_1c_6" },
    c1_1c_6: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Inclusive você.", proxima: "c1_11" },

    // (todas as opções continuam aqui)
    c1_11: { tipo: "narracao", texto: "Lá embaixo, a mãe grita que o café está na mesa e que ela já está saindo para o plantão. A porta bate. A casa fica em silêncio.", proxima: "c2_01" },

    /* =================== CENA 2 — A REUNIÃO DA TURMA =================== */
    // Cenário: sala de aula. Música: tema leve do colégio, animado.
    c2_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Cena 2 — A reunião da turma", sprite: "ren", texto: "Na sala, o Ren já está sentado na carteira do Takeo. Ele levanta os olhos quando a SN entra, sorri e acena. Como um colega simpático qualquer.", proxima: "c2_02" },
    c2_02: { quem: "ren", texto: "Bom dia, SN! Dormiu bem? Você parece cansada.", proxima: "c2_03" },
    c2_03: { tipo: "narracao", texto: "Algumas meninas olham para ela com inveja. O aluno novo perfeito perguntando se ela dormiu bem.", proxima: "c2_04" },
    c2_04: { quem: "eu", texto: "Dormi ótimo. Recebi umas fotos bonitas de manhã.", proxima: "c2_05" },
    c2_05: { quem: "ren", texto: "Que legal! Eu adoro fotografia. É um hobby meu. Um dia eu te mostro as minhas.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", texto: "Ele volta a ler o livro. Inocente. Tranquilo. Nem um músculo do rosto fora do lugar.", proxima: "c2_07" },
    c2_07: { tipo: "narracao", texto: "A professora de química entra com uma pilha de papéis coloridos e um sorriso que ninguém vê nela desde o começo do ano.", proxima: "c2_08" },
    c2_08: { quem: "desconhecido", rotulo: "Professora", texto: "Atenção! O Festival Cultural é na sexta-feira da semana que vem, à noite. Cada turma precisa apresentar uma atração. Vocês têm vinte minutos para decidir. Boa sorte.", proxima: "c2_09" },
    c2_09: { tipo: "narracao", texto: "A sala explode.", proxima: "c2_10" },
    c2_10: { quem: "sayuri", texto: "Café com garçonetes! Todo mundo de avental e laço! A gente ganha dinheiro e fica fofa!", proxima: "c2_11" },
    c2_11: { quem: "mio", sprite: "mio", texto: "Casa mal-assombrada! Eu me fantasio de fantasma, apago a luz e assusto todo mundo! Eu nasci pra isso!", proxima: "c2_12" },
    c2_12: { quem: "sayuri", texto: "A gente já tem uma fantasma na sala. Não precisa de outra.", proxima: "c2_13" },
    c2_13: { tipo: "narracao", texto: "Algumas pessoas riem. Mas menos do que riam semana passada. Bem menos. E alguns olham para a SN, esperando para ver o que ela vai fazer.", proxima: "c2_14" },
    c2_14: { quem: "hana", sprite: "hana", texto: "A gente podia fazer uma apresentação de música. Tipo um karaokê ao vivo. Quem quiser sobe e canta.", proxima: "c2_15" },
    c2_15: { tipo: "narracao", texto: "A sala inteira vira para a Hana. A Hana, que nunca fala na frente da turma. Ela fica vermelha até as orelhas, mas não abaixa a cabeça.", proxima: "c2_16" },
    c2_16: { quem: "desconhecido", rotulo: "Professora", texto: "Três propostas. Café, casa mal-assombrada e karaokê. SN, você ainda não votou. Desempata.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — A atração da turma no festival
    c2_esc2: { escolhas: [
      { texto: "A. O karaokê da Hana.", proxima: "c2_2a_1", pontos: { hana: 2 }, flags: ["Festival_karaoke"] },
      { texto: "B. A casa mal-assombrada da Mio.", proxima: "c2_2b_1", pontos: { mio: 2 }, flags: ["Festival_casa_assombrada"] },
      { texto: "C. O café da Sayuri. Só pra ver a cara dela.", proxima: "c2_2c_1", pontos: { desvio: 1 }, flags: ["Festival_cafe"] }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "A Hana vira para a SN com os olhos arregalados. Depois esconde o rosto atrás do livro. Mas a SN vê o sorriso por cima da capa.", proxima: "c2_2a_2" },
    c2_2a_2: { quem: "hana", texto: "Agora eu vou ter que cantar na frente da escola inteira. Eu te odeio. Obrigada.", proxima: "c2_17" },
    c2_2b_1: { quem: "mio", sprite: "mio", efeito: "grito", texto: "ISSO! A FANTASMA VOTOU NA CASA MAL-ASSOMBRADA! QUE IRONIA PERFEITA!", proxima: "c2_2b_2" },
    c2_2b_2: { tipo: "narracao", texto: "Ela pula na carteira e aponta para a Sayuri.", proxima: "c2_2b_3" },
    c2_2b_3: { quem: "mio", texto: "E você vai ser o zumbi que fica no fundo do corredor. Sem fala. Sem laço.", proxima: "c2_17" },
    c2_2c_1: { tipo: "narracao", texto: "A Sayuri abre a boca para comemorar. Depois fecha. Ela olha para a SN, desconfiada, procurando a armadilha.", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "sayuri", texto: "...Por que você votou em mim?", proxima: "c2_2c_3" },
    c2_2c_3: { quem: "eu", texto: "Porque é a melhor ideia. E porque você vai ter que trabalhar do meu lado até o festival.", proxima: "c2_2c_4" },
    c2_2c_4: { tipo: "narracao", texto: "A Sayuri fica pálida. A Mio cobre a boca para não rir alto.", proxima: "c2_17" },

    // (todas as opções continuam aqui)
    c2_17: { quem: "desconhecido", rotulo: "Professora", texto: "Decidido. Agora preciso de alguém pra levar a proposta pra coordenação aprovar, hoje, no intervalo. SN, você desempatou. Você vai.", proxima: "c2_18" },
    c2_18: { quem: "mio", sprite: "mio", texto: "Ih. A coordenação. Cuidado com quem você encontra sentado na porta.", proxima: "c2_19" },
    c2_19: { quem: "eu", texto: "Por quê?", proxima: "c2_20" },
    c2_20: { quem: "mio", texto: "Porque o Victor do terceiro ano mora naquele banco. Ele repetiu o terceiro ano duas vezes. Já brigou com metade da cidade. E já ficou com metade da escola.", proxima: "c2_21" },
    c2_21: { quem: "hana", sprite: "hana", texto: "Mais da metade. Eu fiz as contas uma vez. Por curiosidade científica.", proxima: "c2_22" },
    c2_22: { tipo: "pensamento", texto: "Victor. Eu só conhecia esse nome dos corredores. Sempre junto com a palavra “briga”. Ou com o nome de alguma menina chorando no banheiro do lado do meu.", proxima: "c3_01" },

    /* =================== CENA 3 — O BANCO DA COORDENAÇÃO =================== */
    // Cenário: corredor em frente à coordenação (usa "corredor"). Música: guitarra rápida, debochada.
    // Victor: repetente, briguento, galinha. Chama todo mundo de “gatinha”. Por baixo, leal e com um lado mole por bicho de rua.
    c3_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Cena 3 — O banco da coordenação", sprite: null, texto: "Na frente da porta da coordenação tem um banco de madeira comprido. É o banco onde os alunos esperam para levar bronca. Normalmente cabem quatro pessoas.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "Hoje cabe uma. Deitada. De pernas abertas, ocupando tudo. Uniforme do terceiro ano aberto, uma camiseta preta por baixo, cabelo castanho bagunçado até o ombro, preso de qualquer jeito com um elástico. Curativo nos nós dos dedos. Um pirulito na boca.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", texto: "Duas meninas do primeiro ano passam pelo corredor. Ele tira o pirulito da boca e pisca para elas. As duas soltam um gritinho e saem correndo, rindo.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", sprite: "victor", texto: "Aí ele vê a SN. Levanta a cabeça. Olha de cima a baixo, sem nenhuma vergonha.", proxima: "c3_05" },
    c3_05: { quem: "victor", texto: "Opa. Mais uma pra fila da bronca? Senta aí, gatinha. Tem lugar.", proxima: "c3_06" },
    c3_06: { quem: "eu", texto: "Não tem lugar. Você está deitado no banco inteiro.", proxima: "c3_07" },
    c3_07: { tipo: "narracao", texto: "Ele ri. Alto, sem filtro, uma risada que ecoa pelo corredor inteiro. Depois senta de uma vez e bate a mão no espaço do lado.", proxima: "c3_08" },
    c3_08: { quem: "victor", texto: "Agora tem. Pra você eu abro espaço.", proxima: "c3_09" },
    c3_09: { quem: "victor", texto: "Engraçado. Eu nunca te vi. E eu conheço todas as meninas bonitas dessa escola. Todas.", proxima: "c3_10" },
    c3_10: { tipo: "pensamento", texto: "Ele fala isso no automático. Do mesmo jeito que piscou pras meninas do primeiro ano. Do mesmo jeito que deve falar pra todas.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — Responder ao Victor
    c3_esc3: { escolhas: [
      { texto: "A. “Eu não sou gatinha.”", proxima: "c3_3a_1", pontos: { victor: 2 }, flags: ["Victor_gatinha_nao"] },
      { texto: "B. “Quantas você já chamou de gatinha hoje?”", proxima: "c3_3b_1", pontos: { victor: 3 }, flags: ["Victor_contou"] },
      { texto: "C. Não responder. Ficar de pé, encostada na parede, esperando a coordenação abrir.", proxima: "c3_3c_1", pontos: { victor: 1 }, flags: ["Victor_ignorado"] }
    ]},
    c3_3a_1: { tipo: "narracao", texto: "Ele levanta as sobrancelhas. Depois sorri, devagar, mostrando os dentes, como um cachorro que acabou de achar um brinquedo novo.", proxima: "c3_3a_2" },
    c3_3a_2: { quem: "victor", texto: "Ih. Brava. Gostei. As bravas são as melhores.", proxima: "c3_3a_3" },
    c3_3a_3: { quem: "eu", texto: "Você fala isso pra todas também?", proxima: "c3_3a_4" },
    c3_3a_4: { quem: "victor", texto: "Falo. Mas é verdade toda vez.", proxima: "c3_11" },
    c3_3b_1: { tipo: "narracao", texto: "Ele conta nos dedos. De verdade. Sem vergonha nenhuma.", proxima: "c3_3b_2" },
    c3_3b_2: { quem: "victor", texto: "Duas no portão. Uma na cantina. Duas agora há pouco, você viu. Com você, seis.", proxima: "c3_3b_3" },
    c3_3b_3: { quem: "victor", texto: "Mas você é a primeira que perguntou. As outras só riem.", proxima: "c3_3b_4" },
    c3_3b_4: { tipo: "narracao", texto: "Ele joga o pirulito no lixo, de longe, e acerta. Depois fica olhando para ela, com a cabeça inclinada, como se tivesse descoberto um bicho diferente.", proxima: "c3_11" },
    c3_3c_1: { tipo: "narracao", texto: "Ela fica de pé, encostada na parede, olhando para a porta da coordenação. Ele espera ela sentar. Ela não senta.", proxima: "c3_3c_2" },
    c3_3c_2: { quem: "victor", texto: "...Sério? Nada? Nem um “sai daí, idiota”?", proxima: "c3_3c_3" },
    c3_3c_3: { tipo: "narracao", texto: "Ele levanta, encosta na parede do lado dela. Perto. Ela continua olhando para a porta. Ele começa a rir sozinho.", proxima: "c3_3c_4" },
    c3_3c_4: { quem: "victor", texto: "Faz tempo que ninguém me ignora. Eu tinha esquecido como é bom.", proxima: "c3_11" },

    // (todas as opções continuam aqui)
    c3_11: { tipo: "narracao", texto: "A porta da coordenação abre. O coordenador aparece, de braços cruzados, com a mesma cara que fez para o Ryuji na quarta-feira da primeira semana.", proxima: "c3_12" },
    c3_12: { quem: "coordenador", texto: "Victor. Entra. E você, mocinha, espera.", proxima: "c3_13" },
    c3_13: { tipo: "narracao", texto: "O Victor entra assobiando. A porta fecha. Mesmo assim, dá para ouvir tudo. A voz do coordenador subindo. A risada do Victor. A voz do coordenador subindo mais.", proxima: "c3_14" },
    c3_14: { tipo: "narracao", texto: "Cinco minutos depois, ele sai com uma folha de advertência na mão e o mesmo sorriso de antes. O coordenador sai atrás dele e pega a proposta da mão da SN.", proxima: "c3_15" },
    c3_15: { quem: "coordenador", texto: "Aprovado. Mas a montagem da atração de vocês vai ser junto com o Victor. Ele acabou de ganhar três semanas de castigo ajudando no festival.", proxima: "c3_16" },
    c3_16: { quem: "coordenador", texto: "Por quebrar o nariz de um aluno do Colégio Técnico. Na frente da estação. Ontem.", proxima: "c3_17" },
    c3_17: { quem: "victor", texto: "Ele quebrou o próprio nariz na minha mão. É um detalhe técnico, professor.", proxima: "c3_18" },
    c3_18: { tipo: "narracao", texto: "O coordenador fecha a porta na cara dele. O Victor dá de ombros, como se fosse a coisa mais normal do mundo.", proxima: "c3_19" },
    c3_19: { quem: "eu", texto: "Colégio Técnico. Ele tinha uma pulseira de couro preto? Com um dente de metal?", proxima: "c3_20" },
    c3_20: { tipo: "narracao", texto: "O sorriso do Victor some. Pela primeira vez. Ele olha para ela de outro jeito. Sério. Atento.", proxima: "c3_21" },
    c3_21: { quem: "victor", texto: "Tinha. Como você sabe?", proxima: "c3_22" },
    c3_22: { quem: "eu", texto: "Por que você bateu nele?", proxima: "c3_23" },
    c3_23: { tipo: "narracao", texto: "Ele coça a nuca. Olha para o chão. Fica claramente sem graça, o que parece ser uma coisa muito rara para ele.", proxima: "c3_24" },
    c3_24: { quem: "victor", foto: "caramelo", texto: "Tem um cachorro de rua que dorme na frente da estação. Caramelo, meio cego, uma orelha caída. Eu dou comida pra ele todo dia depois da aula.", proxima: "c3_25" },
    c3_25: { quem: "victor", texto: "O cara chutou ele. Por diversão. Rindo. Com os amigos filmando.", proxima: "c3_26" },
    c3_26: { quem: "victor", texto: "Aí eu quebrei o nariz dele. E faria de novo. E de novo. Pode contar pra quem quiser.", proxima: "c3_27" },
    c3_27: { tipo: "pensamento", texto: "O garoto que já ficou com metade da escola. Que pisca pra caloura. Que vive no banco da coordenação.", proxima: "c3_28" },
    c3_28: { tipo: "pensamento", texto: "Ele levou três semanas de castigo por um cachorro caramelo de uma orelha só.", proxima: "c3_29" },
    c3_29: { tipo: "narracao", texto: "Antes que ela perceba, ele pega o celular da mão dela. Rápido. Digita alguma coisa. Liga para o próprio número. O bolso da calça dele vibra. Ele devolve o celular.", proxima: "c3_30" },
    c3_30: { quem: "victor", texto: "Pronto. Agora você tem meu número e eu tenho o seu. Salvei como “Victor” com uma carinha. Você vai saber qual.", proxima: "c3_31" },
    c3_31: { quem: "victor", texto: "Sábado. Fliperama da estação, às quatro. Eu pago. A gente leva um lanche pro Caramelo depois.", proxima: "c3_32" },
    c3_32: { quem: "victor", texto: "Só uma regra: não vale se apaixonar. Eu não sou de uma só, gatinha. Todo mundo sabe.", proxima: "c3_esc4" },

    // ▶ ESCOLHA 4 — O convite do Victor
    c3_esc4: { escolhas: [
      { texto: "A. “Eu vou. Mas quem não vai se apaixonar é você.”", proxima: "c3_4a_1", pontos: { victor: 3 }, flags: ["Victor_sabado_sim"] },
      { texto: "B. “Não. Mas manda um beijo pro Caramelo.”", proxima: "c3_4b_1", pontos: { victor: 1 }, flags: ["Victor_sabado_nao"] },
      { texto: "C. “Você fala isso pra todas, né?”", proxima: "c3_4c_1", pontos: { victor: 2 }, flags: ["Victor_provocado"] }
    ]},
    c3_4a_1: { tipo: "narracao", texto: "O Victor para. Pisca. Depois explode numa gargalhada tão alta que o coordenador abre a porta de novo só para mandar ele calar a boca.", proxima: "c3_4a_2" },
    c3_4a_2: { quem: "victor", texto: "Eu? Me apaixonar? Gatinha, eu sou imune. Eu tenho vacina.", proxima: "c3_4a_3" },
    c3_4a_3: { tipo: "narracao", texto: "Ele vai embora andando de costas, apontando para ela. Mas, quando vira, ela vê. A orelha dele está um pouco vermelha.", proxima: "c3_33" },
    c3_4b_1: { tipo: "narracao", texto: "O Victor fica um segundo parado. Ninguém fala não pra ele. Dá para ver isso na cara dele.", proxima: "c3_4b_2" },
    c3_4b_2: { quem: "victor", texto: "Um beijo pro Caramelo. Tá. Ele vai preferir você a mim, aposto.", proxima: "c3_4b_3" },
    c3_4b_3: { quem: "victor", texto: "O convite fica de pé. Até você mudar de ideia. Eu sou paciente. Mentira. Eu não sou. Mas por você eu tento.", proxima: "c3_33" },
    c3_4c_1: { quem: "victor", texto: "Pra todas.", proxima: "c3_4c_2" },
    c3_4c_2: { tipo: "narracao", texto: "Ele se aproxima. Abaixa um pouco a cabeça, até ficar na altura dos olhos dela.", proxima: "c3_4c_3" },
    c3_4c_3: { quem: "victor", texto: "Mas pra você eu falei olhando no olho. Repara na diferença.", proxima: "c3_33" },

    // (todas as opções continuam aqui)
    c3_33: { tipo: "narracao", sprite: null, texto: "Ela volta para a sala com o coração batendo rápido. Não de medo. De outra coisa. Ela não gosta de não saber o nome dessa outra coisa.", proxima: "c3_34" },
    c3_34: { tipo: "pensamento", texto: "Ele é exatamente o tipo de garoto de quem eu passei três anos desviando. Barulhento. Galinha. Briguento.", proxima: "c3_35" },
    c3_35: { tipo: "pensamento", texto: "E ele dá comida pra um cachorro cego todo dia depois da aula.", proxima: "c3_36" },
    c3_36: { tipo: "narracao", texto: "Do outro lado do corredor, encostado na janela, o Ren está olhando para ela. Ele levanta o celular. Clique. E guarda no bolso, sorrindo, como quem tirou foto da paisagem.", proxima: "c4_01" },
    /* =================== CENA 4 — O TAKEO VOLTA =================== */
    // Cenário: sala de aula, depois do intervalo. Música: violão leve, quente.
    c4_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Cena 4 — O Takeo volta", sprite: null, texto: "Depois do intervalo, a porta da sala abre devagar.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", sprite: "takeo", texto: "É o Takeo. Andando meio torto, com a mão nas costelas, um olho ainda roxo-esverdeado, a jaqueta grande demais e uma marmita enorme que claramente foi feita pela avó.", proxima: "c4_03" },
    c4_03: { quem: "takeo", texto: "Eu fugi. Ela não sabe. Se ela ligar, eu estou dormindo.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", texto: "A turma inteira aplaude. O Takeo fica vermelho até a raiz do cabelo. Ele não sabia que alguém tinha sentido falta dele.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "Ele anda até a terceira carteira da fileira da janela. E para. O Ren está sentado nela.", proxima: "c4_06" },
    c4_06: { quem: "ren", texto: "Ah! Você deve ser o Takeo. Desculpa, me colocaram aqui enquanto você estava fora. Eu saio, claro.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", texto: "Ele se levanta, educado, sorridente. Puxa a cadeira para o Takeo sentar. E, quando o Takeo passa por ele, o Ren fala baixo. Só o Takeo e a SN ouvem.", proxima: "c4_08" },
    c4_08: { quem: "ren", texto: "Bem-vindo de volta. O pijama de foguetinho é muito fofo.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "O Takeo congela. O Ren já está andando para a carteira nova no fundo da sala, cumprimentando as pessoas pelo nome.", proxima: "c4_10" },
    c4_10: { quem: "takeo", texto: "SN... como ele sabe do meu pijama?", proxima: "c4_11" },
    c4_11: { quem: "eu", texto: "Depois eu te conto. Senta. Você está pálido.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", texto: "No almoço, o Takeo não deixa ela contar nada triste. Ele abre a marmita da avó na mesa delas e insiste que todo mundo coma. Tem bolinho de arroz para um exército.", proxima: "c4_13" },
    c4_13: { quem: "takeo", texto: "Ela fez a mais. Ela disse que é pra menina da viga. Ela fala de você o dia inteiro. Eu já não aguento mais.", proxima: "c4_cam1" },
    c4_cam1: { caminhos: [
      { flag: "Visita_Takeo_amanha", proxima: "c4_t_visita" }
    ], proxima: "c4_14" },
    c4_t_visita: { quem: "takeo", texto: "E você ia lá em casa hoje, né? Ela já separou o álbum de fotos de bebê. Eu tentei esconder. Ela achou.", proxima: "c4_t_visita2" },
    c4_t_visita2: { quem: "eu", texto: "Eu vou. Depois da montagem do festival.", proxima: "c4_t_visita3" },
    c4_t_visita3: { quem: "takeo", texto: "Ouvi dizer que você vai montar o festival junto com o Victor do terceiro ano. Ele é...", proxima: "c4_t_visita4" },
    c4_t_visita4: { quem: "takeo", texto: "...ele é bonito, né? E alto. E todas as meninas gostam dele. Todas. A escola inteira.", proxima: "c4_t_visita5" },
    c4_t_visita5: { tipo: "narracao", texto: "Ele enfia um bolinho de arroz inteiro na boca, para não ter que falar mais nada.", proxima: "c4_14" },
    c4_14: { tipo: "narracao", texto: "Depois do almoço, quando a Mio e a Hana vão devolver a marmita na cantina, o Takeo fica olhando para a própria mão em cima da mesa.", proxima: "c4_15" },
    c4_15: { quem: "takeo", texto: "Aquele bilhete. Da olaria. Eu sei que eu disse que você não precisava responder.", proxima: "c4_16" },
    c4_16: { quem: "takeo", texto: "E você não precisa. Sério. Eu só... queria saber se ficou estranho. Entre a gente.", proxima: "c4_esc5" },

    // ▶ ESCOLHA 5 — O bilhete do Takeo (o romance continua devagar)
    c4_esc5: { escolhas: [
      { texto: "A. “Não ficou estranho. Ficou mais bonito.”", proxima: "c4_5a_1", pontos: { takeo: 2 } },
      { texto: "B. “Eu ainda tenho o bilhete. No bolso. Todo dia.”", proxima: "c4_5b_1", pontos: { takeo: 3 }, flags: ["Bilhete_no_bolso"] },
      { texto: "C. Empurrar o último bolinho de arroz pra ele: “Come. Você precisa de força pra subir a bandeira na segunda.”", proxima: "c4_5c_1", pontos: { takeo: 1 } }
    ]},
    c4_5a_1: { tipo: "narracao", texto: "O Takeo levanta os olhos. Fica olhando para ela como quem tenta decorar a frase.", proxima: "c4_5a_2" },
    c4_5a_2: { quem: "takeo", texto: "...Tá. Ficou mais bonito. Eu vou repetir isso a noite inteira.", proxima: "c4_17" },
    c4_5b_1: { tipo: "narracao", texto: "Ela tira o papel do bolso. Dobrado em quatro. Já meio gasto nas bordas. O Takeo fica olhando para o papel na mão dela como se fosse a coisa mais incrível do mundo.", proxima: "c4_5b_2" },
    c4_5b_2: { quem: "takeo", texto: "Você... carrega isso?", proxima: "c4_5b_3" },
    c4_5b_3: { quem: "eu", texto: "Junto com a carta da minha avó.", proxima: "c4_5b_4" },
    c4_5b_4: { tipo: "narracao", texto: "O Takeo não responde. Ele só abaixa a cabeça e sorri para a mesa, com as orelhas pegando fogo.", proxima: "c4_17" },
    c4_5c_1: { tipo: "narracao", texto: "O Takeo ri e pega o bolinho. A tensão some.", proxima: "c4_5c_2" },
    c4_5c_2: { quem: "takeo", texto: "Você sempre muda de assunto quando eu fico nervoso. Eu percebi.", proxima: "c4_5c_3" },
    c4_5c_3: { quem: "takeo", texto: "Obrigado.", proxima: "c4_17" },

    // (todas as opções continuam aqui)
    c4_17: { tipo: "narracao", sprite: "yuto", texto: "No fim do almoço, o Yuto, o calouro, passa pela porta da sala. A mão esquerda engessada. Ele vê a SN, para por um segundo, faz uma reverência rápida e sai correndo, vermelho.", proxima: "c4_cam2" },
    c4_cam2: { caminhos: [
      { flag: "Salvou_Yuto", proxima: "c4_y_salvou" }
    ], proxima: "c5_01" },
    c4_y_salvou: { tipo: "narracao", sprite: null, texto: "Na carteira da SN, depois que ele sai, tem um papel dobrado. Uma letra torta, escrita com a mão errada: “Obrigado por me levantar. Eu não vou esquecer. — Yuto, 1º B.”", proxima: "c5_01" },

    /* =================== CENA 5 — O DIÁRIO DA SORA =================== */
    // Cenário: sala do clube de leitura, depois da aula. Música: piano lento, quente e triste.
    c5_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Cena 5 — O diário da Sora", sprite: null, texto: "Depois da aula, o zelador da escola para a SN no corredor. Ele entrega uma caixa de papelão pequena, fechada com fita.", proxima: "c5_02" },
    c5_02: { quem: "zelador", texto: "Um rapaz loiro deixou na portaria às sete da manhã. Disse que era pra você. Disse que você ia entender.", proxima: "c5_03" },
    c5_03: { tipo: "narracao", cenario: "clube-leitura", sprite: "hana", texto: "Ela abre a caixa no clube de leitura, com a Hana do lado. Dentro, embrulhado num lenço velho, tem um caderno de capa dura, verde, gasto, com as bordas queimadas.", proxima: "c5_04" },
    c5_04: { tipo: "narracao", texto: "Um bilhete do Jin, colado na capa. A mesma letra dos setes cortados.", proxima: "c5_05" },
    c5_05: { quem: "mensagem", rotulo: "Bilhete do Jin", texto: "Era dela. Eu tirei do depósito antes da escada cair. Eu nunca tive coragem de ler o final. Acho que isso é seu, não meu.", proxima: "c5_06" },
    c5_06: { tipo: "narracao", texto: "A SN abre o caderno. Na primeira página, uma menina de quinze anos escreveu, com a letra da foto: “Diário da Sora. Proibido para irmãs chatas.”", proxima: "c5_07" },
    c5_07: { tipo: "narracao", texto: "Ela vai lendo. Devagar. A Hana lê junto, sem falar nada, por cima do ombro dela.", proxima: "c5_08" },
    c5_08: { tipo: "narracao", texto: "As primeiras páginas são de uma adolescente qualquer. Uma briga com a mãe. Um menino bonito da padaria. Um carro levantado na frente da escola, e a mãe sem falar com ela por um mês.", proxima: "c5_09" },
    c5_09: { tipo: "narracao", texto: "Depois, as páginas mudam. A letra fica menor. Mais apertada.", proxima: "c5_10" },
    c5_10: { tipo: "narracao", efeito: "flashback", texto: "“Hoje a Lu morreu. Minha melhor amiga. Uns garotos mais velhos pegaram ela na saída do colégio. Eu estava do outro lado da rua. Eu vi. Eu podia ter parado tudo com uma mão. A mamãe sempre disse: ninguém pode saber. Eu fiquei parada. Eu obedeci.”", proxima: "c5_11" },
    c5_11: { tipo: "narracao", efeito: "flashback", texto: "“Ela bateu a cabeça no meio-fio. Eu obedeci e ela morreu.”", proxima: "c5_12" },
    c5_12: { tipo: "narracao", texto: "A Hana segura o braço da SN. A SN vira a página.", proxima: "c5_13" },
    c5_13: { tipo: "narracao", texto: "Anos de páginas soltas. A Sora saindo de casa. Trabalhando em restaurante. Morando em quarto alugado. Escondendo a força de novo, igual a família mandava, para conseguir emprego. Um menino loiro de oito anos que ela encontrou dormindo num ponto de ônibus e levou para casa.", proxima: "c5_14" },
    c5_14: { tipo: "narracao", texto: "E então, a última parte do diário. A letra de uma mulher de trinta e poucos anos. A data é de dez anos atrás.", proxima: "c5_15" },
    c5_15: { tipo: "narracao", efeito: "flashback", texto: "“Eu passei quinze anos fazendo o que a mamãe mandava. Escondendo. Fingindo que eu não podia. Eu virei outra pessoa. Uma pessoa que não para nem pra ver quem está apanhando.”", proxima: "c5_16" },
    c5_16: { tipo: "narracao", efeito: "flashback", texto: "“Hoje eu descobri o depósito do Sakuma. Tem criança trancada lá dentro. E eu me peguei virando a cara. De novo. Igual ao dia da Lu.”", proxima: "c5_17" },
    c5_17: { tipo: "narracao", efeito: "flashback", texto: "“Não. Chega. Eu voltei. Eu voltei a ser eu. A Sora de quinze anos, que levantou um carro sem pedir licença. Eu fui embora dela por tempo demais.”", proxima: "c5_18" },
    c5_18: { tipo: "narracao", efeito: "flashback", texto: "“Vou contar pra minha irmã. Ela vai achar que eu enlouqueci. Vou dizer que eu voltei. Ela não vai entender. Mas eu preciso que alguém saiba: dessa vez eu não vou ficar parada. Dessa vez ninguém morre. Não igual à Lu.”", proxima: "c5_19" },
    c5_19: { tipo: "narracao", texto: "A SN fecha o diário. Devagar. As mãos estão tremendo.", proxima: "c5_20" },
    c5_20: { tipo: "pensamento", texto: "Ela não voltou no tempo.", proxima: "c5_21" },
    c5_21: { tipo: "pensamento", texto: "Ela voltou a ser ela mesma. Depois de quinze anos escondida.", proxima: "c5_22" },
    c5_22: { tipo: "pensamento", texto: "O “dessa vez” era sobre a Lu. Uma amiga que morreu quando ela tinha quinze. Não sobre um futuro que ela tinha visto.", proxima: "c5_23" },
    c5_23: { tipo: "pensamento", texto: "A mãe achou que ela estava doente. O Jin achou que ela tinha visto o futuro. Eu achei que ela era como eu.", proxima: "c5_24" },
    c5_24: { tipo: "pensamento", texto: "Todo mundo ouviu “eu voltei” e entendeu o que queria entender.", proxima: "c5_25" },
    c5_25: { tipo: "pensamento", texto: "Eu sou a única.", proxima: "c5_26" },
    c5_26: { tipo: "narracao", texto: "Isso devia ser um alívio. Não é. É a coisa mais solitária que ela já sentiu.", proxima: "c5_r1" },
    // Reflexão: quem ela era e quem ela quer ser
    c5_r1: { tipo: "narracao", texto: "Ela abre o diário de novo na página da Lu. Passa o dedo pela frase. “Eu fiquei parada. Eu obedeci.”", proxima: "c5_r2" },
    c5_r2: { tipo: "pensamento", texto: "Eu também fiquei parada. Não numa calçada, vendo uma briga. A vida inteira.", proxima: "c5_r3" },
    c5_r3: { tipo: "pensamento", texto: "A Sora viu a amiga cair do outro lado da rua. Eu nunca vi nada, porque eu nunca olhava. Eu atravessava os corredores olhando pro chão, contando os azulejos.", proxima: "c5_r4" },
    c5_r4: { tipo: "pensamento", texto: "Eu achava que ser quieta era ser boazinha. Que não incomodar ninguém era o mesmo que não fazer mal a ninguém.", proxima: "c5_r5" },
    c5_r5: { tipo: "pensamento", texto: "Só que o Takeo morreu enquanto eu estudava em casa. A Mio foi sumindo e eu deixei. Eu nunca fiz nada de errado. Eu simplesmente nunca fiz nada.", proxima: "c5_r6" },
    c5_r6: { tipo: "pensamento", texto: "Fraca não é quem não tem força. Eu sempre tive. Fraca é quem guarda tudo embaixo da geladeira e chama isso de juízo.", proxima: "c5_r7" },
    c5_r7: { tipo: "pensamento", texto: "Eu não quero mais ser aquela menina. Não quero ter coragem só quando dá tempo de pensar. Quero ser a pessoa que levanta da carteira antes de decidir se é uma boa ideia.", proxima: "c5_r8" },
    c5_r8: { tipo: "pensamento", texto: "Se alguém tiver que ficar parado do outro lado da rua enquanto outra pessoa cai, não vai ser eu. Nunca mais.", proxima: "c5_cam1" },
    c5_cam1: { caminhos: [
      { flag: "Hana_sabe_tudo", proxima: "c5_h_sabe" },
      { flag: "Hana_sabe_viagem", proxima: "c5_h_sabe" }
    ], proxima: "c5_h_nao" },
    c5_h_sabe: { quem: "hana", texto: "Então ela não era como você.", proxima: "c5_h_sabe2" },
    c5_h_sabe2: { quem: "eu", texto: "Não. Eu sou a única que voltou de verdade.", proxima: "c5_h_sabe3" },
    c5_h_sabe3: { quem: "hana", texto: "Não. Você é a única que voltou no tempo. Mas ela também voltou. Do jeito dela. E foi tão corajoso quanto.", proxima: "c5_27" },
    c5_h_nao: { quem: "hana", texto: "Você parece aliviada e triste ao mesmo tempo. Igual a quem descobre que estava sozinha e, de algum jeito, já sabia.", proxima: "c5_h_nao2" },
    c5_h_nao2: { tipo: "pensamento", texto: "A Hana não sabe o que eu sou. Mesmo assim, ela entendeu exatamente o que eu estou sentindo.", proxima: "c5_27" },
    c5_27: { quem: "hana", texto: "SN. Posso falar uma coisa?", proxima: "c5_28" },
    c5_28: { quem: "hana", texto: "A sua tia ficou quinze anos sozinha porque achava que ninguém ia entender. Você não precisa fazer igual.", proxima: "c5_esc6" },

    // ▶ ESCOLHA 6 — Depois do diário
    c5_esc6: { escolhas: [
      { texto: "A. Encostar a cabeça no ombro da Hana: “Obrigada por estar aqui.”", proxima: "c5_6a_1", pontos: { hana: 2 } },
      { texto: "B. “Eu vou terminar o que ela começou. Do jeito certo. Sem morrer.”", proxima: "c5_6b_1", pontos: { hana: 1, desvio: 1 }, flags: ["Promessa_Sora"] },
      { texto: "C. Abrir o diário de novo na página da Lu e ler em voz alta, pra ela não ficar esquecida.", proxima: "c5_6c_1", pontos: { hana: 2 }, flags: ["Lembrou_Lu"] }
    ]},
    c5_6a_1: { tipo: "narracao", texto: "A Hana não diz nada. Ela só ajeita o ombro para a cabeça da SN encaixar melhor. Ficam assim até o sinal da saída tocar.", proxima: "c5_29" },
    c5_6b_1: { quem: "hana", texto: "Sem morrer. Essa parte é a mais importante. Promete essa parte.", proxima: "c5_6b_2" },
    c5_6b_2: { quem: "eu", texto: "Prometo.", proxima: "c5_29" },
    c5_6c_1: { tipo: "narracao", texto: "A SN lê a página da Lu em voz alta. Baixinho. A Hana ouve com os olhos fechados. Quando ela termina, a Hana escreve “Lu” no caderno de gatinhos, com um coração do lado.", proxima: "c5_6c_2" },
    c5_6c_2: { quem: "hana", texto: "Pronto. Agora tem mais gente lembrando dela.", proxima: "c5_29" },
    c5_29: { tipo: "narracao", sprite: null, texto: "O sinal toca. A SN guarda o diário da Sora na mochila, embrulhado no lenço velho, com cuidado.", proxima: "c5_30" },
    c5_30: { tipo: "pensamento", texto: "Ainda tem a montagem do festival hoje. Com a gangue inteira. E com o Victor. Ótimo.", proxima: "c6_01" },

    /* =================== CENA 6 — DETENÇÃO COLETIVA =================== */
    // Cenário: pátio dos fundos, fim da tarde. Música: tema da gangue, versão leve e engraçada.
    c6_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Cena 6 — Detenção coletiva", sprite: null, texto: "No fim da tarde, a SN descobre que a escola tem senso de humor.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", texto: "Como castigo pela confusão na olaria, a diretoria decidiu que todos os envolvidos vão ajudar a montar as estruturas do festival depois da aula. Todos os dias, até o festival. Junto com o Victor, que já estava de castigo por conta própria.", proxima: "c6_03" },
    c6_03: { tipo: "narracao", texto: "Então, às quatro da tarde, no pátio dos fundos: o Kaito, o Blake e o Ryuji carregando tábuas. O Takeo, proibido de carregar peso, pintando placas. A Mio pendurando bandeirinhas. A Hana com a lista de material. E a SN, responsável pela atração da turma, com uma prancheta na mão.", proxima: "c6_04" },
    c6_04: { quem: "ryuji", sprite: "ryuji", texto: "Isso é tortura. Eu enfrentei os Oda. Eu atravessei um rio na chuva. E agora eu estou pendurando bandeirinha de festa junina fora de época.", proxima: "c6_05" },
    c6_05: { quem: "mio", sprite: "mio", texto: "Não é festa junina! É bandeirinha de festival! É diferente!", proxima: "c6_06" },
    c6_06: { quem: "ryuji", sprite: "ryuji", texto: "Qual a diferença?", proxima: "c6_07" },
    c6_07: { quem: "mio", sprite: "mio", texto: "...Eu não sei. Mas é diferente.", proxima: "c6_cam1" },

    c6_cam1: { caminhos: [
      { flag: "Mio_confessou_Blake", proxima: "c6_m_conf" }
    ], proxima: "c6_m_nao" },
    c6_m_conf: { tipo: "narracao", sprite: "blake", texto: "O Blake passa carregando três tábuas de uma vez. Ele para do lado da Mio, sem falar nada, e segura a escada em que ela está subindo. A Mio fica muda pelo resto da tarde. Um recorde.", proxima: "c6_08" },
    c6_m_nao: { tipo: "narracao", sprite: "blake", texto: "O Blake passa carregando três tábuas de uma vez. A Mio para de falar no meio da frase quando ele passa. Depois começa a falar o dobro, para disfarçar.", proxima: "c6_08" },

    c6_08: { tipo: "narracao", sprite: "kaito", texto: "O Kaito carrega tábuas em silêncio, do outro lado do pátio. Longe da SN. Toda vez que ela olha, ele está olhando para outra coisa. Toda vez que ela não olha, a Mio cutuca ela e sussurra: “olha agora, olha agora”.", proxima: "c6_09" },
    c6_09: { tipo: "narracao", sprite: null, texto: "Às quatro e meia, alguém pula o muro dos fundos em vez de usar o portão. Cai agachado no mato, levanta, bate a poeira da calça e acena para todo mundo, com um pirulito novo na boca.", proxima: "c6_10" },
    c6_10: { quem: "victor", texto: "Cheguei, princesas! Ninguém começa a festa sem mim.", proxima: "c6_11" },
    c6_11: { tipo: "narracao", texto: "Ele atravessa o pátio distribuindo apelidos. Para na escada da Mio.", proxima: "c6_12" },
    c6_12: { quem: "victor", texto: "E aí, loirinha. Essa bandeirinha está torta. Igual meu coração quando te vejo.", proxima: "c6_13" },
    c6_13: { tipo: "narracao", texto: "A Mio fica vermelha. Não de vergonha. De raiva. E o Blake, do lado da escada, para de mexer na tábua e só olha para o Victor. Um olhar longo. Silencioso. Do tipo que faz garoto do Colégio Técnico mudar de calçada.", proxima: "c6_14" },
    c6_14: { quem: "victor", texto: "...Tá. Entendi. Território marcado. Respeito.", proxima: "c6_15" },
    c6_15: { tipo: "narracao", sprite: "hana", texto: "Ele passa pela Hana e abre a boca. A Hana levanta a prancheta na frente do rosto dele, sem tirar os olhos da lista. Ele fecha a boca e segue andando.", proxima: "c6_16" },
    c6_16: { tipo: "narracao", sprite: "kaito", texto: "Até que ele chega na frente do Kaito. E os dois param. Um de cada lado da mesma tábua.", proxima: "c6_17" },
    c6_17: { quem: "victor", texto: "Kaito. Ainda brincando de líder?", proxima: "c6_18" },
    c6_18: { quem: "kaito", texto: "Victor. Ainda brincando de galinha?", proxima: "c6_19" },
    c6_19: { tipo: "narracao", texto: "Silêncio no pátio. O Ryuji para de martelar. O Takeo para de pintar. Todo mundo sabe que esses dois já brigaram uma vez, no primeiro ano. E ninguém sabe quem ganhou. Nem eles.", proxima: "c6_20" },
    c6_20: { quem: "victor", texto: "Eu não brinco. Eu sou. Diferente de você, que finge que não liga pra ninguém e fica olhando de canto pra uma certa pessoa com prancheta.", proxima: "c6_21" },
    c6_21: { tipo: "narracao", texto: "O Kaito fica branco. Depois vermelho. O Ryuji, do outro lado do pátio, solta uma risada e depois tapa a boca.", proxima: "c6_22" },
    c6_22: { tipo: "narracao", texto: "O Victor se vira e anda até a SN. Para do lado dela. Perto demais. E fala alto. Alto o suficiente para o pátio inteiro ouvir.", proxima: "c6_23" },
    c6_23: { quem: "victor", texto: "E aí, gatinha. Sábado continua de pé? Fliperama, quatro horas. Eu já separei as fichas.", proxima: "c6_23b" },
    c6_23b: { tipo: "narracao", texto: "A Mio derruba um rolo de bandeirinhas. O Takeo para de pintar no meio de uma letra. E, do outro lado, o Kaito solta a tábua no chão com um barulho seco.", proxima: "c6_23c" },
    c6_23c: { quem: "kaito", sprite: "kaito", texto: "Escorregou.", proxima: "c6_24" },
    c6_24: { tipo: "narracao", texto: "Ninguém acredita. Nem o próprio Kaito. O Victor sorri, satisfeito, como quem acabou de ganhar uma aposta.", proxima: "c6_esc7" },

    // ▶ ESCOLHA 7 — No meio do pátio
    c6_esc7: { escolhas: [
      { texto: "A. “Continua de pé. Mas para de me chamar de gatinha.”", proxima: "c6_7a_1", pontos: { victor: 2 }, flags: ["Victor_sabado_confirmado"] },
      { texto: "B. Ignorar o Victor e atravessar o pátio até o Kaito: “Escorregou mesmo? Deixa eu ver sua mão.”", proxima: "c6_7b_1", pontos: { kaito: 3 }, flags: ["SN_foi_Kaito"] },
      { texto: "C. Entregar um martelo pro Victor: “Você está de castigo. Vai pregar tábua.”", proxima: "c6_7c_1", pontos: { victor: 1, kaito: 1 }, flags: ["SN_cortou_Victor"] }
    ]},
    c6_7a_1: { quem: "victor", texto: "Fechado. Mas, se eu não posso te chamar de gatinha, vou ter que te chamar pelo nome. E aí fica sério demais. Você aguenta?", proxima: "c6_7a_2" },
    c6_7a_2: { tipo: "narracao", texto: "Ele vai embora rindo. Do outro lado do pátio, o Kaito pega a tábua do chão, coloca no lugar e prega. Com tanta força que o prego atravessa a madeira e entra no chão.", proxima: "c6_25" },
    c6_7b_1: { tipo: "narracao", texto: "Ela atravessa o pátio inteiro, na frente de todo mundo, e para na frente do Kaito. Estende a mão.", proxima: "c6_7b_2" },
    c6_7b_2: { quem: "kaito", sprite: "kaito", texto: "Não precisa. Foi só a tábua.", proxima: "c6_7b_3" },
    c6_7b_3: { quem: "eu", texto: "A mão, Kaito.", proxima: "c6_7b_4" },
    c6_7b_4: { tipo: "narracao", texto: "Ele dá a mão. Tem uma farpa na palma, pequena. Ela tira com a unha, rápido. Ele não reclama. Ele fica olhando para ela enquanto ela faz isso. Ela não olha de volta. Mas sabe que ele está olhando.", proxima: "c6_7b_5" },
    c6_7b_5: { quem: "kaito", texto: "...Obrigado.", proxima: "c6_7b_6" },
    c6_7b_6: { quem: "eu", texto: "De nada, líder. Faz parte do meu trabalho. Eu me importo com todo mundo que anda com a gangue.", proxima: "c6_7b_7" },
    c6_7b_7: { tipo: "narracao", texto: "O Kaito fica parado. Ele reconhece a frase. A frase dele. Na arquibancada. As orelhas dele ficam vermelhas tão rápido que o Ryuji, do outro lado do pátio, aplaude. E o Victor assobia.", proxima: "c6_25" },
    c6_7c_1: { tipo: "narracao", texto: "O Victor olha para o martelo na mão dele. Depois para ela.", proxima: "c6_7c_2" },
    c6_7c_2: { quem: "victor", texto: "Você está me mandando trabalhar. Na frente de todo mundo.", proxima: "c6_7c_3" },
    c6_7c_3: { quem: "eu", texto: "Estou.", proxima: "c6_7c_4" },
    c6_7c_4: { quem: "victor", texto: "...Ninguém faz isso comigo. Eu estou começando a gostar demais de você. Isso é perigoso.", proxima: "c6_7c_5" },
    c6_7c_5: { tipo: "narracao", texto: "Ele vai pregar tábua. Assobiando. O Ryuji assobia de volta. O Takeo pinta a mesma letra da placa quatro vezes sem perceber. E o Kaito volta a martelar, mas mais devagar.", proxima: "c6_25" },

    // (todas as opções continuam aqui)
    c6_25: { tipo: "narracao", sprite: null, texto: "Quando o sol começa a se pôr, eles terminam a primeira estrutura. Uma barraca torta, cheia de bandeirinhas, com uma placa pintada pelo Takeo que diz “FESTIVAL” com o V ao contrário.", proxima: "c6_26" },
    c6_26: { tipo: "narracao", texto: "Todo mundo senta no chão do pátio, sujo de tinta e serragem, dividindo o refrigerante quente que a Mio trouxe. O Ryuji reclama da bandeirinha. O Takeo pede desculpa pelo V. A Hana anota tudo. O Blake não fala nada, mas está sentado do lado da Mio. E o Victor, que ninguém convidou, senta no meio da roda e rouba o refrigerante do Ryuji.", proxima: "c6_27" },
    c6_27: { tipo: "pensamento", texto: "É tão normal. Tão bobo. Tão escola.", proxima: "c6_28" },
    c6_28: { tipo: "pensamento", texto: "Eu nunca fui a um festival dessa escola. Nenhum dos três anos. Eu ficava em casa e achava que ninguém ia sentir falta.", proxima: "c6_29" },
    c6_29: { tipo: "pensamento", texto: "Eu estava errada. Mas também ninguém sabia que eu existia.", proxima: "c6_30" },
    c6_30: { tipo: "narracao", texto: "O Kaito, sentado do outro lado da roda, longe dela, levanta a lata de refrigerante na direção dela. Só um pouco. Sem sorrir. Um brinde silencioso. Ela levanta a dela de volta.", proxima: "c6_31" },
    c6_31: { tipo: "narracao", texto: "Ninguém vê. Ou todo mundo vê e finge que não. Com essa turma, é difícil saber.", proxima: "c6_v01" },

    // ▼ VISÃO DO FUTURO ALTERADO — a primeira. Não é lembrança: é um aviso do futuro novo.
    c6_v01: { tipo: "narracao", sprite: "blake", texto: "O Blake levanta para jogar as latas vazias fora. Quando passa atrás dela, apoia a mão de leve no ombro dela, só para se equilibrar no chão cheio de serragem.", proxima: "c6_v02" },
    c6_v02: { tipo: "narracao", sprite: null, efeito: "apagao", texto: "E o pátio some.", proxima: "c6_v03" },
    c6_v03: { tipo: "narracao", efeito: "flashback", texto: "Noite. Lanternas de papel penduradas entre as barracas. Música do palco ao longe. O festival. Este festival. A placa com o V ao contrário, pendurada torta na entrada.", proxima: "c6_v04" },
    c6_v04: { tipo: "narracao", efeito: "flashback", texto: "Atrás do palco, perto do muro dos fundos, o Blake está sozinho. Sem a jaqueta. A mão fechada. O rosto de quem acabou de ouvir uma coisa que doeu.", proxima: "c6_v05" },
    c6_v05: { tipo: "narracao", efeito: "flashback", texto: "Lá de longe, a voz do Kaito, alta demais, cheia de birra: “Então vai sozinho! Você sempre acha que sabe de tudo!”", proxima: "c6_v06" },
    c6_v06: { tipo: "narracao", efeito: "flashback", texto: "O Blake não responde. Só vira as costas. Os dois brigaram por alguma bobagem. Ela sabe que é bobagem. Mas não consegue ouvir o quê.", proxima: "c6_v07" },
    c6_v07: { tipo: "narracao", efeito: "flashback", texto: "Seis garotos pulam o muro. Jaquetas verde-escuras, com um olho amarelo bordado nas costas. Um deles grita o nome do grupo como se fosse um grito de guerra: “Midorata!”", proxima: "c6_v08" },
    c6_v08: { tipo: "narracao", efeito: "tremor", texto: "O Blake luta. Ele é o maior. O mais forte. Mas são seis, ele está sozinho, e um deles tem alguma coisa brilhando na mão.", proxima: "c6_v09" },
    c6_v09: { tipo: "narracao", efeito: "flashback", texto: "As lanternas balançam. A música do palco continua, alegre, como se nada estivesse acontecendo.", proxima: "c6_v10" },
    c6_v10: { tipo: "narracao", efeito: "eco", texto: "O Blake no chão, de costas, olhando para o céu. No pulso, o relógio digital barato do pai dele, ainda funcionando. 21h14.", proxima: "c6_v11" },
    c6_v11: { tipo: "narracao", texto: "E o pátio volta. A serragem. O refrigerante quente. A risada do Ryuji.", proxima: "c6_v12" },
    c6_v12: { quem: "blake", sprite: "blake", texto: "Ei. Você está bem? Ficou branca de repente.", proxima: "c6_v13" },
    c6_v13: { quem: "eu", texto: "...Estou. Levantei rápido demais.", proxima: "c6_v14" },
    c6_v14: { tipo: "narracao", texto: "Ela nem levantou. O Blake percebe. Ele não insiste. Joga as latas fora e volta a sentar do lado da Mio. Inteiro. Vivo. Rindo de alguma coisa que o Ryuji falou.", proxima: "c6_v15" },
    c6_v15: { tipo: "pensamento", texto: "Aquilo não foi uma lembrança.", proxima: "c6_v16" },
    c6_v16: { tipo: "pensamento", texto: "Na minha vida antiga, eu nem fui ao festival. E o Blake terminou o ano vivo. Disso eu tenho certeza.", proxima: "c6_v17" },
    c6_v17: { tipo: "pensamento", texto: "Era o futuro. O futuro novo. O que eu criei mexendo em tudo.", proxima: "c6_v18" },
    c6_v18: { tipo: "pensamento", texto: "21h14. Atrás do palco. Ele vai estar sozinho porque o Kaito vai mandar ele embora.", proxima: "c6_v19" },
    c6_v19: { tipo: "narracao", texto: "Do outro lado da roda, o Kaito joga uma tampinha de garrafa no Blake. O Blake joga de volta. Os dois quase sorriem. Nada no mundo parece mais longe de uma briga feia do que esses dois agora.", proxima: "c7_01" },

    /* =================== CENA 7 — A FOTO =================== */
    // Cenário: saída do colégio, noite começando. Música: tema calmo, que vai ficando frio.
    c7_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Cena 7 — A foto", sprite: null, texto: "No portão, todo mundo se divide para voltar junto. Ninguém sozinho. A SN vai com a Mio e a Hana até o ponto.", proxima: "c7_02" },
    c7_02: { tipo: "narracao", sprite: "ren", texto: "No caminho, uma figura de uniforme impecável cruza com elas na calçada. Andando na direção contrária. Sem pressa.", proxima: "c7_03" },
    c7_03: { quem: "ren", texto: "Boa noite, meninas! Que bonito ver vocês ajudando no festival. Espírito escolar.", proxima: "c7_04" },
    c7_04: { tipo: "narracao", texto: "Ele para. Tira um envelope branco do bolso do paletó e estende para a SN.", proxima: "c7_05" },
    c7_05: { quem: "ren", texto: "Você deixou cair na sala hoje. Eu guardei pra você.", proxima: "c7_06" },
    c7_06: { tipo: "narracao", texto: "Ela não deixou cair nada. Ela sabe que não deixou. Mesmo assim, a mão dela pega o envelope, sozinha.", proxima: "c7_07" },
    c7_07: { quem: "ren", texto: "Boa noite! Cuidado no caminho. A cidade está tão perigosa ultimamente.", proxima: "c7_08" },
    c7_08: { tipo: "narracao", texto: "Ele segue andando. Cumprimenta o pipoqueiro da esquina pelo nome. O pipoqueiro sorri de volta.", proxima: "c7_09" },
    c7_09: { tipo: "narracao", sprite: null, texto: "Dentro do envelope, seis fotos impressas. Papel de foto, brilhante, caro.", proxima: "c7_10" },
    c7_10: { tipo: "narracao", texto: "A SN no corredor, encostada na parede, saindo da coordenação. A SN e o Takeo dividindo bolinho de arroz. A SN e a Hana no clube, com o diário verde no colo. A SN no pátio, a poucos metros do Kaito. O Victor no banco da coordenação, inclinado na direção dela.", proxima: "c7_11" },
    c7_11: { tipo: "narracao", texto: "E a última. A SN, de costas, na frente do armário de sapatos. Hoje de manhã. Antes de qualquer pessoa chegar. Antes da Mio. Antes do zelador.", proxima: "c7_12" },
    c7_12: { tipo: "narracao", texto: "Atrás da última foto, escrito à mão, com uma letra caprichada e perfeita:", proxima: "c7_13" },
    c7_13: { quem: "mensagem", rotulo: "Atrás da foto", efeito: "eco", texto: "“Que dia bonito. Você sorriu muito hoje. Eu adoro ver você sorrindo. 🙂”", proxima: "c7_14" },
    c7_14: { tipo: "narracao", texto: "Nenhuma ameaça. Nenhuma palavra errada. Se ela mostrasse para a diretoria, ele diria que é um fã. Um colega tímido. Um fotógrafo amador.", proxima: "c7_15" },
    c7_15: { tipo: "pensamento", texto: "Ele não encostou em ninguém hoje. Não falou nada de errado. Foi simpático com todo mundo. Ajudou a professora com os papéis.", proxima: "c7_16" },
    c7_16: { tipo: "pensamento", texto: "E eu estou tremendo mais do que no beco com o canivete.", proxima: "c7_17" },
    c7_17: { quem: "mio", sprite: "mio", texto: "SN? O que tem aí?", proxima: "c7_esc8" },

    // ▶ ESCOLHA 8 — As fotos do Ren
    c7_esc8: { escolhas: [
      { texto: "A. Mostrar para a Mio e para a Hana. Todas as fotos.", proxima: "c7_8a_1", pontos: { mio: 2, hana: 2 }, flags: ["Amigas_viram_fotos"] },
      { texto: "B. “Nada. Uma propaganda.” E guardar o envelope na mochila.", proxima: "c7_8b_1", flags: ["Escondeu_fotos"] },
      { texto: "C. Rasgar todas as fotos ali mesmo e jogar no lixo da esquina.", proxima: "c7_8c_1", pontos: { desvio: 1 }, flags: ["Rasgou_fotos"] }
    ]},
    c7_8a_1: { tipo: "narracao", texto: "A Mio olha as fotos uma por uma. O rosto dela vai ficando vermelho, não de vergonha. De raiva.", proxima: "c7_8a_2" },
    c7_8a_2: { quem: "mio", texto: "Ele estava dentro da escola antes de abrir. Como ele entrou?", proxima: "c7_8a_3" },
    c7_8a_3: { quem: "hana", sprite: "hana", texto: "Ou alguém abriu pra ele.", proxima: "c7_8a_4" },
    c7_8a_4: { tipo: "narracao", texto: "As três se olham. Ninguém fala o nome. Mas as três pensam na mesma pessoa: alguém que sempre chega antes de todo mundo, por causa dos armários de sapato. Alguém de laço rosa.", proxima: "c7_18" },
    c7_8b_1: { tipo: "narracao", texto: "A Mio olha para ela por um segundo a mais. Ela conhece a SN desde os seis anos. Ela sabe quando é propaganda e quando não é.", proxima: "c7_8b_2" },
    c7_8b_2: { quem: "mio", texto: "Tá. Propaganda.", proxima: "c7_8b_3" },
    c7_8b_3: { tipo: "narracao", texto: "Mas, no ponto de ônibus, a Mio não sobe no ônibus dela. Ela fica esperando até a SN subir no dela. E fica olhando o ônibus ir embora.", proxima: "c7_18" },
    c7_8c_1: { tipo: "narracao", texto: "Ela rasga. Uma por uma. No meio, depois em quatro, depois em pedaços pequenos. Joga tudo na lixeira da esquina.", proxima: "c7_8c_2" },
    c7_8c_2: { tipo: "narracao", texto: "A Mio e a Hana ficam olhando, sem perguntar nada. Quando ela termina, a Hana fala baixinho.", proxima: "c7_8c_3" },
    c7_8c_3: { quem: "hana", sprite: "hana", texto: "Ele deve ter outras cópias.", proxima: "c7_8c_4" },
    c7_8c_4: { quem: "eu", texto: "Eu sei. Mas essas eu não precisava carregar.", proxima: "c7_18" },

    // (todas as opções continuam aqui)
    c7_18: { tipo: "narracao", sprite: null, texto: "No ônibus, o celular vibra. Uma mensagem do número desconhecido.", proxima: "c7_19" },
    c7_19: { quem: "mensagem", rotulo: "Número desconhecido", texto: "Gostou das fotos? Eu fiz com muito carinho. 🙂", proxima: "c7_20" },
    c7_20: { tipo: "narracao", texto: "Logo depois, outra mensagem chega. De um contato salvo como “Victor 😏”, que ela não salvou.", proxima: "c7_21" },
    c7_21: { quem: "mensagem", rotulo: "Victor 😏", texto: "chegou bem gatinha? amanhã tem tábua. sábado tem fliperama. o caramelo mandou um oi. não se apaixona 😏", proxima: "c7_22" },
    c7_22: { tipo: "narracao", texto: "A SN olha para as duas mensagens, uma em cima da outra, na mesma tela. Uma que dá frio. Outra que dá vontade de revirar os olhos e sorrir ao mesmo tempo. Ela não sabe qual das duas a deixa mais nervosa.", proxima: "ep_01" },

    /* =================== EPÍLOGO — O QUE EU SEI (7) =================== */
    // Cenário: quarto da SN, noite. Música: piano do prólogo, calmo.
    ep_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Epílogo — O que eu sei", sprite: null, texto: "No quarto, ela coloca o diário verde da Sora do lado da foto da tia, em cima da escrivaninha. A menina de cabelo curto e a mulher de trinta e poucos anos, juntas de novo.", proxima: "ep_02" },
    ep_02: { tipo: "narracao", texto: "Ela abre o caderno azul. Vai até a linha 22. “Ela também voltou.” Ela risca a linha inteira. E escreve embaixo, devagar:", proxima: "ep_03" },
    ep_03: { tipo: "narracao", texto: "22. Ela não voltou no tempo. Ela voltou a ser ela. Depois de quinze anos escondida. Por causa da Lu.", proxima: "ep_04" },
    ep_04: { tipo: "narracao", texto: "25. Eu sou a única que voltou no tempo.", proxima: "ep_05" },
    ep_05: { tipo: "narracao", texto: "26. Victor. Terceiro ano, repetente. Galinha. Chama todo mundo de gatinha. Quebrou o nariz de um garoto da Matilha por causa de um cachorro de rua.", proxima: "ep_06" },
    ep_06: { tipo: "narracao", texto: "27. O Ren não encostou em ninguém hoje. E foi o pior dia até agora.", proxima: "ep_06b" },
    ep_06b: { tipo: "narracao", texto: "28. Festival. Noite. 21h14. Atrás do palco. O Blake sozinho. Seis garotos de jaqueta verde com um olho amarelo nas costas. Midorata.", proxima: "ep_06c" },
    ep_06c: { tipo: "narracao", texto: "29. Nesse dia, o Blake e o Kaito vão estar brigados. Por uma bobagem. O Kaito vai mandar ele ir sozinho.", proxima: "ep_06d" },
    ep_06d: { tipo: "pensamento", texto: "Antes, eu tinha lembranças. Agora eu tenho avisos. Não sei qual dos dois é pior.", proxima: "ep_07" },
    ep_07: { tipo: "narracao", texto: "Ela para. Fica olhando para a linha 25 por muito tempo.", proxima: "ep_08" },
    ep_08: { tipo: "pensamento", texto: "Se a Sora não voltou no tempo, ninguém mais voltou. Então ninguém mais sabe.", proxima: "ep_09" },
    ep_09: { tipo: "pensamento", texto: "Mas o Ren disse: “parece até que você tem vinte e oito anos”.", proxima: "ep_10" },
    ep_10: { tipo: "pensamento", texto: "Uma expressão. Ele disse que era uma expressão.", proxima: "ep_11" },
    ep_11: { tipo: "pensamento", texto: "Ninguém fala “vinte e oito” como expressão. A gente fala “parece que tem trinta”. Parece que tem cinquenta. Vinte e oito é um número de quem sabe.", proxima: "ep_12" },
    ep_12: { tipo: "narracao", texto: "Ela abre as fotos no celular de novo. As da manhã, que chegaram por mensagem. Uma por uma. Com calma.", proxima: "ep_13" },
    ep_13: { tipo: "narracao", texto: "Todas tiradas de perto demais. De ângulos que só alguém dentro da escola, sem ser visto, conseguiria pegar.", proxima: "ep_14" },
    ep_14: { tipo: "narracao", texto: "E então ela lembra da foto impressa do armário de sapatos, que ainda está na cabeça dela, nítida. Na porta de metal do armário vizinho, tinha um reflexo. Pequeno. Borrado. Mas dá para ver.", proxima: "ep_15" },
    ep_15: { tipo: "narracao", texto: "Não é o Ren. É alguém de rabo de cavalo alto. Com um laço.", proxima: "ep_16" },
    ep_16: { tipo: "pensamento", sprite: "sayuri", texto: "Sayuri.", proxima: "ep_17" },
    ep_17: { tipo: "pensamento", texto: "Ela não está só fazendo bullying comigo. Ela está trabalhando pra ele.", proxima: "ep_18" },
    ep_18: { tipo: "pensamento", texto: "E ela não faz ideia de pra quem.", proxima: "ep_19" },
    ep_19: { tipo: "narracao", sprite: null, texto: "O celular vibra uma última vez. O Kaito. Não no grupo. Só pra ela.", proxima: "ep_20" },
    ep_20: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Chegou?", proxima: "ep_21" },
    ep_21: { tipo: "narracao", texto: "Ela responde: “Cheguei.” A resposta vem em menos de cinco segundos.", proxima: "ep_22" },
    ep_22: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Ok.", proxima: "ep_23" },
    ep_23: { tipo: "narracao", texto: "E então, trinta segundos depois, quando ela já tinha largado o celular:", proxima: "ep_24" },
    ep_24: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "O Victor é galinha.", proxima: "ep_25" },
    ep_25: { tipo: "narracao", texto: "Ela fica olhando para a mensagem. Depois ri sozinha no quarto, com a mão na boca, pela primeira vez no dia.", proxima: "ep_26" },
    ep_26: { tipo: "pensamento", texto: "“Escorregou.” Claro, Kaito.", proxima: "ep_27" },
    ep_27: { tipo: "narracao", texto: "O sorriso dura pouco. O caderno azul continua aberto em cima da escrivaninha, na linha 28.", proxima: "ep_28" },
    ep_28: { tipo: "pensamento", texto: "Faltam nove dias para o festival. Nove dias pra impedir dois teimosos de brigarem por nada. Ou pra estar atrás daquele palco antes das 21h14.", proxima: "ep_fim" },

    // Fim do Capítulo 7 (crie a entrada "capitulo7" em dados/capitulos.js)
    ep_fim: { fim: "capitulo7" }
  }
});

/*
 * GANCHO PARA O CAPÍTULO 8 (anotações do roteiro)
 *  • A VISÃO: na noite do festival, às 21h14, atrás do palco, o Blake morre atacado pela
 *    gangue Midorata (jaqueta verde-escura com um olho amarelo bordado nas costas).
 *    Nesse dia ele e o Kaito estão brigados por uma bobagem; o Kaito está de birra e manda
 *    ele “ir sozinho”. O festival é à noite e acontece no Capítulo 8.
 *  • SEGREDO (não revelar ainda): a Midorata é do Ren. Ele é o líder escondido, por baixo
 *    dos panos. Na frente de todos, o Ren só aparece com a Matilha (pulseira com dente) e
 *    finge não ter nada a ver com a Midorata. Nem a SN nem o jogador sabem disso por enquanto.
 *  • Sábado: o fliperama com o Victor e o cachorro Caramelo (Victor_sabado_sim / Victor_sabado_nao).
 *  • O Victor quebrou o nariz de um garoto da Matilha. O Ren vai querer revanche?
 *  • A Sayuri está tirando fotos para o Ren. Ela sabe quem ele é de verdade?
 *  • O Ren disse “vinte e oito anos”. Se ninguém mais voltou no tempo, como ele sabe?
 *  • O festival é na sexta-feira da semana seguinte, do fim da tarde até a noite. A atração da turma (Festival_karaoke /
 *    Festival_casa_assombrada / Festival_cafe). A Hana vai cantar?
 *  • Romance (devagar): o Kaito está com ciúme e não admite. O Takeo carrega o bilhete
 *    no peito. O Victor é galinha, mas chamou ela olhando no olho. O Ryuji perdeu uma provocação pela primeira vez.
 *    O Blake segurou a escada da Mio.
 *
 * ESCOLHAS DO CAPÍTULO (8)
 *  1 Fotos da manhã · 2 Atração do festival · 3 Victor (banco da coordenação) · 4 Convite do Victor
 *  5 Takeo (bilhete) · 6 Diário da Sora · 7 Victor e Kaito no pátio · 8 Fotos do Ren
 *
 * PONTOS NOVOS: "victor" (afinidade do Victor). Adicione esse medidor no jogo.
 *
 * FLAGS NOVAS
 *  Respondeu_fotos_Ren · Guardou_fotos_Ren · Grupo_sabe_fotos · Festival_karaoke
 *  Festival_casa_assombrada · Festival_cafe · Victor_gatinha_nao · Victor_contou
 *  Victor_ignorado · Victor_sabado_sim · Victor_sabado_nao · Victor_provocado · Victor_sabado_confirmado
 *  Bilhete_no_bolso · Promessa_Sora · Lembrou_Lu · SN_foi_Kaito
 *  SN_cortou_Victor · Amigas_viram_fotos · Escondeu_fotos · Rasgou_fotos
 */