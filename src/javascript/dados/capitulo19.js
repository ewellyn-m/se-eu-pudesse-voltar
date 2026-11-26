/*
 * =====================================================================
 *  CAPÍTULO 19 — Caixote
 *  Quinta à tarde até sábado, depois do Capítulo 18.
 * =====================================================================
 *
 *  O QUE ACONTECE
 *    • Quinta: o Victor está de castigo no banco da coordenação. Amanhã tem recuperação de
 *      história. A SN estuda com ele. Por que ele repetiu de ano.
 *    • Sexta: educação física. Vôlei. A SN fura a bola sem querer. O Ryuji na arquibancada:
 *      o sonho de ser bombeiro e o papel dele no grupo ("eu sou a cola").
 *    • O Victor passa na recuperação. Mas hoje ele tem que descarregar um caminhão sozinho.
 *      O Ryuji e a SN vão junto.
 *    • Sexta à noite, no mercado: caixotes, tomate no chão, pão no intervalo. O Victor conta
 *      por que entrou na gangue. O Kaito aparece no fim, "por acaso", com lámen.
 *    • Sábado: pudim na casa da Reina, com a avó dela que recebeu alta.
 *    • Gancho: um homem de terno para o Ryuji na rua e pergunta da SN.
 *
 *  REGRAS QUE ESTE CAPÍTULO SEGUE
 *    • Victor e Ryuji em foco, sem falar de cachorro nem de irmã.
 *    • Ninguém sabe que a SN é a menina do boné. Os meninos acham que ela é só forte.
 *    • Nada de gangue dentro da escola. O Ren não aparece.
 *    • Ninguém fala o apelido antigo. Romance devagar.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Victor (rótulo "desconhecido"), Ryuji, Kaito, Reina, Avó da Reina, Takeo, Mio, Hana.
 *    Sem nome: Professora de educação física, Encarregado do mercado.
 *
 *  CENÁRIOS
 *    Banco da coordenação → "corredor" · Quadra → "patio-fundos"
 *    Mercado / caminhão → "beco-mercado" · Casa da Reina → "apartamento"
 *    Rua → "saida-colegio" · Quarto da SN → "quarto-sn"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Ryuji_armario, Ryuji_sem_piada, Admitiu_Takeo_Reina, Espia_Coreia.
 *
 *  Crie a entrada "capitulo19" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo19", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — O BANCO DA COORDENAÇÃO =================== */
    // Cenário: corredor da coordenação, quinta à tarde. Música: violão leve, um pouco malandro.
    c1_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Quinta — Cena 1 — O banco", sprite: null, texto: "Quinta, depois da aula. A SN passa pela coordenação para devolver um livro da biblioteca. No banco de madeira do lado da porta, o banco dos castigos, tem alguém deitado. De comprido. Com o braço tapando os olhos.", proxima: "c1_02" },
    c1_02: { quem: "victor", texto: "Se for o coordenador, eu estou meditando. Se for qualquer outra pessoa, eu estou dormindo.", proxima: "c1_03" },
    c1_03: { quem: "eu", texto: "Sou eu.", proxima: "c1_04" },
    c1_04: { tipo: "narracao", texto: "Ele tira o braço do rosto. Abre um olho. Depois o outro. E sorri. Aquele sorriso torto, de dente da frente meio lascado.", proxima: "c1_05" },
    c1_05: { quem: "victor", texto: "Gatinha. Que honra. Veio me visitar na prisão?", proxima: "c1_06" },
    c1_06: { quem: "eu", texto: "O que você fez dessa vez?", proxima: "c1_07" },
    c1_07: { quem: "victor", texto: "Dormi na aula de história. De novo. A professora disse que se eu dormir mais uma vez eu não faço a recuperação amanhã. Aí eu falei que eu não dormi, eu fechei o olho pra pensar melhor. Ela não gostou.", proxima: "c1_08" },
    c1_08: { tipo: "narracao", texto: "Ele senta no banco. Do lado dele, uma apostila de história amassada, com a capa rasgada. Aberta na página um. Ele não passou da página um.", proxima: "c1_09" },
    c1_09: { quem: "victor", texto: "A prova é amanhã. Revolução Industrial e mais um monte de coisa. Se eu não tirar seis, eu repito de novo.", proxima: "c1_10" },
    c1_10: { tipo: "narracao", texto: "Ele fala isso rindo. Mas a mão dele está apertando a apostila. Com força.", proxima: "c1_11" },
    c1_11: { quem: "eu", texto: "Eu tive essa matéria ontem. Eu te ajudo.", proxima: "c1_12" },
    c1_12: { quem: "victor", texto: "...Sério? Você vai sentar no banco da vergonha comigo?", proxima: "c1_13" },
    c1_13: { quem: "eu", texto: "É só um banco.", proxima: "c1_14" },
    c1_14: { tipo: "narracao", texto: "Ela senta. Ele chega para o lado. Fica olhando para ela como se ela tivesse feito uma coisa muito estranha.", proxima: "c1_15" },
    c1_15: { quem: "victor", texto: "Nenhuma menina nunca sentou nesse banco comigo. Elas passam e riem. Ou passam e piscam. Sentar, nunca.", proxima: "c1_16" },
    c1_16: { tipo: "narracao", transicao: "tempo", texto: "Uma hora depois, a apostila está cheia de desenho. A SN descobriu que o Victor não lembra de data nenhuma, mas lembra de tudo que vira história. Então ela transformou a Revolução Industrial numa briga de gangue.", proxima: "c1_17" },
    c1_17: { quem: "eu", texto: "Então: os donos das fábricas são a gangue grande. Os operários são a gangue pequena. Eles trabalham dezesseis horas por dia, até criança. Aí a gangue pequena se junta e faz...", proxima: "c1_18" },
    c1_18: { quem: "victor", texto: "...greve! Sindicato! Eles param a máquina e falam “ou melhora ou ninguém trabalha”! Gatinha, isso é genial. Isso é a coisa mais genial que eu já ouvi. Por que a professora não fala assim?", proxima: "c1_19" },
    c1_19: { quem: "eu", texto: "Porque ela não sabe que você entende tudo quando é briga.", proxima: "c1_20" },
    c1_20: { tipo: "narracao", texto: "Ele ri. Alto. O coordenador abre a porta, olha os dois, fecha de novo sem falar nada.", proxima: "c1_21" },
    c1_21: { tipo: "narracao", texto: "Depois, quando a apostila está fechada, ele fica quieto um tempo. Coisa rara no Victor.", proxima: "c1_22" },
    c1_22: { quem: "victor", texto: "Sabe por que eu repeti? Não foi porque eu sou burro. Todo mundo acha que é. Eu deixo acharem.", proxima: "c1_23" },
    c1_23: { quem: "victor", texto: "Ano passado a minha mãe ficou três meses sem conseguir trabalhar. Problema na coluna. Eu peguei o turno da noite descarregando caminhão no mercado. Das dez às três. Aí eu chegava aqui às sete e dormia em cima da carteira.", proxima: "c1_24" },
    c1_24: { quem: "victor", texto: "Eu faltei quarenta e dois dias. Não tem nota que salve quarenta e dois dias.", proxima: "c1_25" },
    c1_25: { tipo: "narracao", texto: "Ele fala isso sem drama. Como quem fala do tempo. Mas não olha para ela enquanto fala.", proxima: "c1_26" },
    c1_26: { quem: "victor", texto: "Ela está boa agora. Trabalha em dois lugares de novo. Mas ela chora toda vez que vê o meu boletim. Eu quero passar esse ano. Só pra ela parar de chorar.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — No banco com o Victor
    c1_esc1: { escolhas: [
      { texto: "A. “Você não é burro, Victor. Você é cansado. É diferente.”", proxima: "c1_1a_1", pontos: { victor: 3 }, flags: ["Victor_cansado"] },
      { texto: "B. “Então amanhã você tira sete. Pra ela chorar de outro jeito.”", proxima: "c1_1b_1", pontos: { victor: 2 }, flags: ["Victor_tira_sete"] },
      { texto: "C. “Eu estudo com você até o fim do ano. Toda quinta. Nesse banco.”", proxima: "c1_1c_1", pontos: { victor: 3 }, flags: ["Victor_toda_quinta"] }
    ]},
    c1_1a_1: { tipo: "narracao", texto: "Ele vira a cabeça. Olha para ela. O sorriso torto some. Fica só o rosto dele, sério, muito mais novo do que parece quando está rindo.", proxima: "c1_1a_2" },
    c1_1a_2: { quem: "victor", texto: "...Ninguém nunca falou isso. Nem eu.", proxima: "c1_27" },
    c1_1b_1: { quem: "victor", texto: "Sete? Você está muito otimista, gatinha.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "eu", texto: "Greve. Sindicato. Dezesseis horas. Criança trabalhando. O que mais?", proxima: "c1_1b_3" },
    c1_1b_3: { quem: "victor", texto: "Máquina a vapor. Carvão. Inglaterra. Fumaça. Os operários fazendo a gangue pequena virar grande.", proxima: "c1_1b_4" },
    c1_1b_4: { tipo: "narracao", texto: "Ele para. Percebe que lembrou de tudo. Fica olhando para as próprias mãos como se elas tivessem feito mágica.", proxima: "c1_27" },
    c1_1c_1: { quem: "victor", texto: "Toda quinta? Nesse banco? Você vai virar a garota do banco da vergonha.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "eu", texto: "Eu já fui coisa pior nessa escola.", proxima: "c1_1c_3" },
    c1_1c_3: { tipo: "narracao", texto: "Ele não ri. Ele sabe do balde. Todo mundo sabe do balde. Ele estende a mão, fechada, para ela bater.", proxima: "c1_1c_4" },
    c1_1c_4: { quem: "victor", texto: "Fechado. Toda quinta. E se alguém rir de você no banco, o banco vira meu de novo. Pra sempre.", proxima: "c1_27" },

    // (todas as opções continuam aqui)
    c1_27: { tipo: "narracao", texto: "O coordenador abre a porta. Libera o Victor. Ele pega a apostila, enfia no bolso de trás da calça, e anda até a saída do lado dela.", proxima: "c1_28" },
    c1_28: { quem: "victor", texto: "Se eu passar amanhã, eu te pago um sorvete. Se eu não passar, você me paga. Pra eu chorar comendo.", proxima: "c2_01" },

    /* =================== CENA 2 — A BOLA =================== */
    // Cenário: quadra da escola, sexta de manhã (usa "patio-fundos"). Música: pop animado.
    c2_01: { tipo: "narracao", cenario: "patio", transicao: "tempo", legenda: "Sexta — Cena 2 — A bola", sprite: null, texto: "Sexta. Educação física. Vôlei misto. A professora sorteia os times. A SN cai no time do Ryuji, da Hana e de três meninos do primeiro ano que nunca seguraram uma bola.", proxima: "c2_02" },
    c2_02: { quem: "ryuji", sprite: "ryuji", texto: "Time! Escutem aqui! Eu sou o capitão! Ninguém me escolheu, mas eu sou! Hana, você fica atrás e calcula a trajetória.", proxima: "c2_03" },
    c2_03: { quem: "hana", sprite: "hana", texto: "Eu não vou calcular trajetória no meio do jogo.", proxima: "c2_04" },
    c2_04: { quem: "ryuji", sprite: "ryuji", texto: "Você calcula tudo! Calcula isso também!", proxima: "c2_05" },
    c2_05: { tipo: "narracao", sprite: null, texto: "Do outro lado da rede, o time da Mio. A Mio grita mais alto que todo mundo junto. O jogo é uma bagunça. Ninguém acerta nada. A bola cai no chão mais vezes do que passa a rede.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", texto: "No último ponto, a bola sobe alta, bem em cima da SN. O Ryuji grita.", proxima: "c2_07" },
    c2_07: { quem: "ryuji", sprite: "ryuji", texto: "CORTA! CORTA COM VONTADE!", proxima: "c2_08" },
    c2_08: { tipo: "pensamento", texto: "Com vontade. Não. Com cuidado. Com muito cuidado.", proxima: "c2_09" },
    c2_09: { tipo: "narracao", efeito: "tremor", texto: "Ela pula. Bate. Com cuidado. A bola atravessa a quadra como um tiro, bate no chão do outro lado, faz um barulho de estouro e murcha. Inteira. Igual um balão velho.", proxima: "c2_10" },
    c2_10: { tipo: "narracao", texto: "Silêncio na quadra. A professora olha para a bola murcha. Para a SN. Para a bola de novo.", proxima: "c2_11" },
    c2_11: { quem: "desconhecido", rotulo: "Professora de educação física", texto: "...Essa bola era velha. Estava com a válvula ruim. Alguém pega outra no armário.", proxima: "c2_12" },
    c2_12: { quem: "ryuji", sprite: "ryuji", texto: "VOCÊ MATOU A BOLA! SN! VOCÊ É UMA ASSASSINA DE BOLA! ISSO FOI A COISA MAIS LINDA QUE EU JÁ VI!", proxima: "c2_13" },
    c2_13: { tipo: "narracao", texto: "Ele pega a bola murcha do chão e levanta acima da cabeça, como um troféu. O time inteiro grita. Até os três do primeiro ano.", proxima: "c2_cam1" },
    c2_cam1: { caminhos: [
      { flag: "Espia_Coreia", proxima: "c2_espia" }
    ], proxima: "c2_14" },
    c2_espia: { quem: "ryuji", texto: "Quem sabe você não é a espiã da Coreia, hein? Hein? Brincadeira. Ela é muito mais alta que você. Eu acho.", proxima: "c2_14" },
    c2_14: { tipo: "pensamento", texto: "Ele acha que eu sou forte. Só forte. Uma menina forte que furou uma bola velha. Ninguém nunca vai pensar outra coisa.", proxima: "c2_15" },
    c2_15: { tipo: "narracao", transicao: "tempo", sprite: "ryuji", texto: "Depois da aula, o Ryuji senta do lado dela na arquibancada. Ainda com a bola murcha embaixo do braço. Ele pediu para a professora deixar ele ficar com ela.", proxima: "c2_16" },
    c2_16: { quem: "eu", texto: "Por que você quer uma bola furada?", proxima: "c2_17" },
    c2_17: { quem: "ryuji", texto: "Lembrança. Do dia em que eu fui capitão e ganhei. Eu nunca ganho nada. Eu sempre sou o engraçado do time que perde.", proxima: "c2_18" },
    c2_18: { tipo: "narracao", texto: "Ele mexe na válvula da bola. Ela solta um assobio fino. Ele ri.", proxima: "c2_19" },
    c2_19: { quem: "eu", texto: "Ryuji. O que você quer ser? Depois da escola.", proxima: "c2_20" },
    c2_20: { tipo: "narracao", texto: "Ele para de mexer na bola. Abre a boca para fazer piada. Ela vê a piada vindo. E vê ele desistir dela.", proxima: "c2_21" },
    c2_21: { quem: "ryuji", texto: "Bombeiro.", proxima: "c2_22" },
    c2_22: { quem: "ryuji", texto: "Não ri. Eu sei que é estranho. Eu sou desastrado. Eu tiro quatro em matemática. Mas eu já pesquisei. Tem concurso. Tem prova física. Eu corro todo dia de manhã, antes da escola, faz um ano. Ninguém sabe.", proxima: "c2_cam2" },
    c2_cam2: { caminhos: [
      { flag: "Ryuji_armario", proxima: "c2_armario" },
      { flag: "Ryuji_sem_piada", proxima: "c2_sem_piada" }
    ], proxima: "c2_23" },
    c2_armario: { quem: "ryuji", texto: "Foi você que me falou, lembra? Na loja. Que hoje eu sou quem tira as pessoas do armário. Eu fiquei pensando nisso a semana inteira. Bombeiro é isso. Tirar gente de onde ela ficou presa.", proxima: "c2_23" },
    c2_sem_piada: { quem: "ryuji", texto: "Você me falou na loja que eu não precisava ser engraçado com você. Então eu estou te contando sem piada. É a primeira vez que eu falo isso sem piada.", proxima: "c2_23" },
    c2_23: { quem: "ryuji", texto: "E tem outra coisa. Eu sou a cola, sabia? Do grupo. O Kaito não fala. O Blake fala menos ainda. O Victor só faz besteira. Quando o Kaito e o Blake brigaram, antes do festival, fui eu que fiquei ligando pros dois toda noite até eles voltarem a se falar.", proxima: "c2_24" },
    c2_24: { quem: "ryuji", texto: "Agora o Blake está estranho com a Mio. E com a Sayuri. Eu vejo. Eu vejo tudo. Eu só faço cara de quem não vê.", proxima: "c2_25" },
    c2_25: { tipo: "narracao", texto: "Ele olha para ela. Sem sorriso. Com aquela cara que ela só viu uma vez, na loja de brinquedos.", proxima: "c2_26" },
    c2_26: { quem: "ryuji", texto: "Você está bem? Com isso tudo?", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — Na arquibancada com o Ryuji
    c2_esc2: { escolhas: [
      { texto: "A. “Estou. Porque tem gente que fica ligando toda noite pra todo mundo ficar bem.”", proxima: "c2_2a_1", pontos: { ryuji: 3 }, flags: ["Ryuji_cola"] },
      { texto: "B. “Não muito. Mas obrigada por perguntar. Ninguém perguntou.”", proxima: "c2_2b_1", pontos: { ryuji: 3 }, flags: ["Ryuji_perguntou"] },
      { texto: "C. “Você vai ser um bombeiro incrível. Eu quero estar lá no dia da prova física.”", proxima: "c2_2c_1", pontos: { ryuji: 2 }, flags: ["Ryuji_prova_fisica"] }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "O Ryuji fica vermelho. Muito vermelho. O Ryuji nunca fica vermelho.", proxima: "c2_2a_2" },
    c2_2a_2: { quem: "ryuji", texto: "...Ninguém nunca percebe essa parte. Todo mundo acha que eu só grito.", proxima: "c2_2a_3" },
    c2_2a_3: { quem: "eu", texto: "Você grita muito também.", proxima: "c2_2a_4" },
    c2_2a_4: { quem: "ryuji", texto: "Grito. Mas é um grito com função.", proxima: "c2_27" },
    c2_2b_1: { tipo: "narracao", texto: "Ele fica quieto. Depois, sem falar nada, coloca a bola murcha no colo dela.", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "ryuji", texto: "Toma. Fica com ela. É a bola da vitória. Quando você estiver não muito bem, você olha pra ela e lembra que você matou uma bola com um tapa.", proxima: "c2_2b_3" },
    c2_2b_3: { quem: "eu", texto: "Você disse que era a sua lembrança.", proxima: "c2_2b_4" },
    c2_2b_4: { quem: "ryuji", texto: "Agora é nossa. Divide. Fica uma semana com você, uma semana comigo.", proxima: "c2_27" },
    c2_2c_1: { quem: "ryuji", texto: "Lá? Na prova? Pra me ver carregar boneco de oitenta quilos subindo escada?", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "eu", texto: "E pra gritar seu nome. Alto. Com função.", proxima: "c2_2c_3" },
    c2_2c_3: { tipo: "narracao", texto: "Ele ri. O riso dele, o de verdade, que é mais baixo e mais curto que o da escola.", proxima: "c2_2c_4" },
    c2_2c_4: { quem: "ryuji", texto: "Fechado. Mas se eu cair da escada, você finge que não viu.", proxima: "c2_27" },

    // (todas as opções continuam aqui)
    c2_27: { tipo: "narracao", sprite: null, texto: "Do outro lado da quadra, alguém vem correndo. Pulando por cima das cadeiras do corredor. Com uma folha de papel levantada acima da cabeça, como bandeira.", proxima: "c3_01" },

    /* =================== CENA 3 — SEIS E MEIO =================== */
    // Cenário: quadra / saída (usa "patio-fundos"). Música: pop animado.
    c3_01: { tipo: "narracao", cenario: "patio", transicao: "tempo", legenda: "Cena 3 — Seis e meio", sprite: null, texto: "O Victor. Sem fôlego. Com a camisa do uniforme para fora da calça e a prova de recuperação de história na mão. Ele chega na arquibancada e coloca a folha na cara da SN. Perto demais para ela conseguir ler.", proxima: "c3_02" },
    c3_02: { quem: "victor", texto: "SEIS E MEIO! SEIS E MEIO, GATINHA! EU PASSEI! A professora corrigiu na hora! Ela disse que eu escrevi “gangue dos operários” na prova mas que o conteúdo estava certo!", proxima: "c3_03" },
    c3_03: { tipo: "narracao", texto: "Ele levanta a SN da arquibancada pela cintura. Gira duas vezes. Ela é pequena, cabe fácil. Ele quase cai mesmo assim. Coloca ela no chão de novo, rindo, e dá um passo para trás.", proxima: "c3_04" },
    c3_04: { quem: "victor", texto: "Desculpa. Eu fiquei feliz. Eu não fico feliz assim faz tempo.", proxima: "c3_05" },
    c3_05: { quem: "ryuji", sprite: "ryuji", texto: "Ele levantou você? Ele não me levanta nem quando eu caio!", proxima: "c3_06" },
    c3_06: { quem: "victor", texto: "Você não estuda comigo no banco da vergonha, Ryuji.", proxima: "c3_07" },
    c3_07: { tipo: "narracao", texto: "O Victor olha para a prova de novo. Fica um tempo olhando. Depois guarda dobrada no bolso da frente da camisa. Do lado do coração. Sem perceber.", proxima: "c3_08" },
    c3_08: { quem: "victor", texto: "Valeu, SN.", proxima: "c3_09" },
    c3_09: { tipo: "pensamento", texto: "Ele falou meu nome. Não “gatinha”. Meu nome.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", texto: "E então o celular dele vibra. Ele lê. O sorriso diminui. Não some. Mas diminui.", proxima: "c3_11" },
    c3_11: { quem: "victor", texto: "Droga. O outro cara do turno faltou hoje. O encarregado do mercado disse que o caminhão de verdura chega às nove e tem que estar vazio até meia-noite. Eu vou ter que descarregar sozinho.", proxima: "c3_12" },
    c3_12: { quem: "victor", texto: "Sozinho dá até as três. Tchau, sorvete. Tchau, sábado.", proxima: "c3_13" },
    c3_13: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji olha para o Victor. Olha para a SN. Olha para a bola murcha. E levanta da arquibancada.", proxima: "c3_14" },
    c3_14: { quem: "ryuji", texto: "A gente vai junto.", proxima: "c3_15" },
    c3_15: { quem: "victor", texto: "Vocês? Ryuji, você carrega uma mochila e reclama.", proxima: "c3_16" },
    c3_16: { quem: "ryuji", texto: "Eu sou bombeiro em treinamento. Eu carrego coisa. É meu destino.", proxima: "c3_17" },
    c3_17: { tipo: "narracao", sprite: null, texto: "Os dois olham para ela.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — O caminhão do Victor
    c3_esc3: { escolhas: [
      { texto: "A. “Eu vou. Eu carrego bem.”", proxima: "c3_3a_1", pontos: { victor: 2, ryuji: 1 }, flags: ["Foi_caminhao"] },
      { texto: "B. “Eu vou. Mas o sorvete continua de pé. Depois.”", proxima: "c3_3b_1", pontos: { victor: 3 }, flags: ["Foi_caminhao", "Sorvete_Victor"] },
      { texto: "C. “Eu vou. Se o Ryuji não quebrar nenhum tomate.”", proxima: "c3_3c_1", pontos: { ryuji: 2, victor: 1 }, flags: ["Foi_caminhao", "Tomate_Ryuji"] }
    ]},
    c3_3a_1: { quem: "victor", texto: "Bem? Gatinha, são duzentos caixotes. Cada um pesa uns vinte quilos.", proxima: "c3_3a_2" },
    c3_3a_2: { quem: "ryuji", sprite: "ryuji", texto: "Ela matou uma bola com a mão hoje. Ela segurou uma viga. Ela vai carregar o caminhão inteiro e ainda vai sobrar tempo.", proxima: "c3_18" },
    c3_3b_1: { quem: "victor", texto: "Depois. Fechado. Depois do caminhão, o melhor sorvete que um descarregador de verdura pode pagar.", proxima: "c3_3b_2" },
    c3_3b_2: { quem: "eu", texto: "Que é?", proxima: "c3_3b_3" },
    c3_3b_3: { quem: "victor", texto: "O de casquinha da padaria. Com cobertura. Eu sou um homem generoso.", proxima: "c3_18" },
    c3_3c_1: { quem: "ryuji", sprite: "ryuji", texto: "Eu não vou quebrar nenhum tomate! Eu sou cuidadoso! Eu tenho mãos de cirurgião!", proxima: "c3_3c_2" },
    c3_3c_2: { quem: "victor", texto: "Você quebrou o celular sentando nele.", proxima: "c3_3c_3" },
    c3_3c_3: { quem: "ryuji", sprite: "ryuji", texto: "Isso foi o celular que estava no lugar errado!", proxima: "c3_18" },

    // (todas as opções continuam aqui)
    c3_18: { tipo: "narracao", sprite: null, texto: "Ela manda mensagem para a mãe. “Vou ajudar um amigo no trabalho dele hoje à noite. Volto antes de uma.” A resposta vem rápida: “Me manda foto do lugar. E come alguma coisa.”", proxima: "c4_01" },

    /* =================== CENA 4 — CAIXOTE =================== */
    // Cenário: doca do mercado, sexta à noite (usa "beco-mercado"). Música: violão, ritmo de trabalho.
    c4_01: { roupa: "fora", tipo: "narracao", cenario: "doca-mercado", transicao: "tempo", legenda: "Sexta, 21h05 — Cena 4 — Caixote", sprite: null, texto: "A doca do mercado, nos fundos, tem cheiro de terra molhada, de laranja passada e de óleo de motor. O caminhão de verdura já está de ré, com a porta de trás aberta. Lá dentro, caixote em cima de caixote, até o teto.", proxima: "c4_02" },
    c4_02: { quem: "desconhecido", rotulo: "Encarregado do mercado", texto: "Victor. Quem são esses?", proxima: "c4_03" },
    c4_03: { quem: "victor", texto: "Reforço. Não precisa pagar. Eles trabalham por amor.", proxima: "c4_04" },
    c4_04: { quem: "desconhecido", rotulo: "Encarregado do mercado", texto: "Se quebrar alguma coisa, sai do seu.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "Ele vai embora para dentro do mercado, mastigando um palito. O Victor tira a jaqueta. Por baixo, uma camiseta velha com o nome de um time de futebol de bairro. Ele sobe no caminhão num pulo.", proxima: "c4_06" },
    c4_06: { quem: "victor", texto: "Esquema. Eu passo do caminhão. Ryuji pega e põe no carrinho. SN leva o carrinho até a câmara fria. Tomate em cima, batata embaixo. Nunca o contrário.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", texto: "Aqui ele não é o Victor do banco da vergonha. Ele fala rápido, sabe onde fica cada coisa, sabe quanto pesa cada caixote só de olhar. Ele faz isso há um ano. De madrugada. Sozinho.", proxima: "c4_08" },
    c4_08: { tipo: "narracao", transicao: "tempo", texto: "Meia hora depois, eles têm um ritmo. O Victor joga. O Ryuji pega, reclama do peso, põe no carrinho. A SN empurra. O carrinho range. A câmara fria solta fumaça branca toda vez que abre.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "No caixote sessenta e três, o Ryuji escorrega numa folha de alface. O caixote de tomate voa. A SN pega no ar. Com uma mão. Sem derrubar nenhum.", proxima: "c4_10" },
    c4_10: { tipo: "narracao", texto: "O Ryuji fica sentado no chão, olhando para ela. O Victor fica parado na porta do caminhão, com outro caixote no ombro.", proxima: "c4_11" },
    c4_11: { quem: "victor", texto: "...Você é forte pra caramba, hein.", proxima: "c4_12" },
    c4_12: { quem: "ryuji", sprite: "ryuji", texto: "Eu falei! Eu falei que ela segurou uma viga! Ninguém acredita em mim!", proxima: "c4_13" },
    c4_13: { quem: "victor", texto: "Mulher forte é outra coisa. Minha mãe também é assim. Carrega o mundo e ainda pergunta se você comeu.", proxima: "c4_14" },
    c4_14: { tipo: "pensamento", texto: "Ele acha que eu sou forte. Igual a mãe dele. Ele não acha estranho. Ele acha bonito.", proxima: "c4_15" },
    c4_15: { tipo: "narracao", transicao: "tempo", texto: "Às onze, o caminhão está pela metade. O Victor desce, tira três pães e uma garrafa de café com leite de uma sacola, e senta num caixote virado. Intervalo.", proxima: "c4_16" },
    c4_16: { tipo: "narracao", texto: "Os três sentam em caixotes, em volta de outro caixote, que vira mesa. A luz da doca é amarela e pisca. Ao longe, um trem passa.", proxima: "c4_17" },
    c4_17: { quem: "ryuji", sprite: "ryuji", texto: "Victor. Por que você entrou na gangue? Eu nunca perguntei. Eu sei de todo mundo, menos de você.", proxima: "c4_18" },
    c4_18: { tipo: "narracao", texto: "O Victor mastiga o pão devagar. Olha para o trem.", proxima: "c4_19" },
    c4_19: { quem: "victor", texto: "Treze anos. Eu falei mal da mãe de um cara do terceiro ano. Ele chamou mais quatro. Me pegaram atrás do campinho. Eu estava no chão, com a boca cheia de terra, e achei que ia morrer.", proxima: "c4_20" },
    c4_20: { quem: "victor", texto: "Aí apareceu um moleque da minha idade. Magrelo. Cara fechada. Ele não falou nada. Ele só entrou no meio. Derrubou os cinco. Sozinho. E me estendeu a mão.", proxima: "c4_21" },
    c4_21: { quem: "ryuji", sprite: "ryuji", texto: "...O líder.", proxima: "c4_22" },
    c4_22: { quem: "victor", texto: "O líder. Eu perguntei por que ele fez aquilo. Ele disse: “Cinco contra um não é briga. É covardia.” E foi embora. Eu segui ele até a lojinha do tio. Ele me deu um lámen. Eu nunca mais saí de perto.", proxima: "c4_23" },
    c4_23: { quem: "victor", texto: "Eu repito de ano. Eu não repito de amigo. Se um dia o Kaito precisar, eu vou. Pra qualquer lugar. Contra qualquer um. Nem que eu não volte.", proxima: "c4_24" },
    c4_24: { tipo: "narracao", texto: "Ele fala isso rindo, com a boca cheia de pão. Mas não é piada. A SN conhece esse tipo de frase. Na outra vida, ela ouviu frases assim em velórios.", proxima: "c4_25" },
    c4_25: { tipo: "pensamento", texto: "“Nem que eu não volte.” Não. Ele vai voltar. Todos vão voltar. Eu não salvei dois pra perder um terceiro.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — Em volta do caixote
    c4_esc4: { escolhas: [
      { texto: "A. “Vai sim. Mas volta. Essa parte é obrigatória.”", proxima: "c4_4a_1", pontos: { victor: 3 }, flags: ["Victor_volta"] },
      { texto: "B. “E você, Ryuji? Por que você entrou?”", proxima: "c4_4b_1", pontos: { ryuji: 3 }, flags: ["Ryuji_porque_gangue"] },
      { texto: "C. Bater a garrafa de café com leite no copo dos dois. “Aos que voltam.”", proxima: "c4_4c_1", pontos: { victor: 2, ryuji: 2 }, flags: ["Brinde_caixote"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "O Victor para de mastigar. Olha para ela. Sério.", proxima: "c4_4a_2" },
    c4_4a_2: { quem: "victor", texto: "Obrigatória? Tipo prova de recuperação?", proxima: "c4_4a_3" },
    c4_4a_3: { quem: "eu", texto: "Pior. Sem segunda chance.", proxima: "c4_4a_4" },
    c4_4a_4: { tipo: "narracao", texto: "Ele estende o mindinho. Ela olha. Ele espera. Ela engancha o mindinho no dele. Ele aperta, bem forte.", proxima: "c4_4a_5" },
    c4_4a_5: { quem: "victor", texto: "Promessa de mindinho. Agora eu sou obrigado. Minha mãe diz que quem quebra promessa de mindinho fica com o dedo torto.", proxima: "c4_26" },
    c4_4b_1: { tipo: "narracao", texto: "O Ryuji fica olhando para o próprio pão. Depois ri. Baixo. Sem graça.", proxima: "c4_4b_2" },
    c4_4b_2: { quem: "ryuji", texto: "Eu? Eu entrei porque o Kaito precisava de alguém que falasse. Ele não fala. O Blake não fala. Alguém tinha que pedir o lámen.", proxima: "c4_4b_3" },
    c4_4b_3: { quem: "eu", texto: "Essa é a resposta de piada.", proxima: "c4_4b_4" },
    c4_4b_4: { tipo: "narracao", texto: "Ele para. Ela pegou.", proxima: "c4_4b_5" },
    c4_4b_5: { quem: "ryuji", texto: "...Eu entrei porque, quando eu estou com eles, ninguém me coloca em armário nenhum. Nunca mais. E porque eles me deixam ser barulhento sem achar que eu sou só isso.", proxima: "c4_4b_6" },
    c4_4b_6: { quem: "victor", texto: "Cara. Isso foi profundo. Eu vou chorar no tomate.", proxima: "c4_4b_7" },
    c4_4b_7: { quem: "ryuji", sprite: "ryuji", texto: "Não chora no tomate! Sai do seu salário!", proxima: "c4_26" },
    c4_4c_1: { tipo: "narracao", texto: "Ela levanta a garrafa. O Victor levanta o copo de plástico. O Ryuji levanta meio pão, porque é o que ele tem na mão.", proxima: "c4_4c_2" },
    c4_4c_2: { quem: "victor", texto: "Aos que voltam.", proxima: "c4_4c_3" },
    c4_4c_3: { quem: "ryuji", sprite: "ryuji", texto: "Aos que voltam! E ao pão! Que também volta, porque eu vou pegar outro.", proxima: "c4_4c_4" },
    c4_4c_4: { tipo: "narracao", texto: "Eles batem garrafa, copo e pão. O pão se desfaz. O Ryuji come do chão do caixote mesmo assim. O Victor ri tanto que deita de costas no caixote.", proxima: "c4_26" },

    // (todas as opções continuam aqui)
    c4_26: { tipo: "narracao", transicao: "tempo", sprite: null, texto: "Onze e cinquenta e oito. O último caixote entra na câmara fria. Batata embaixo. Tomate em cima. O Victor fecha a porta do caminhão e bate duas vezes na lata, como quem se despede de alguém.", proxima: "c4_27" },
    c4_27: { quem: "victor", texto: "Meia-noite. Eu nunca terminei antes das duas. Nunca.", proxima: "c4_28" },
    c4_28: { tipo: "narracao", texto: "Ele senta no chão da doca, encostado na roda do caminhão. O Ryuji deita do lado dele, de braços abertos, no cimento. A SN senta do outro lado. Os três sujos de terra até o cotovelo.", proxima: "c4_29" },
    c4_29: { tipo: "narracao", texto: "Um farol de bicicleta aparece no fim da rua. Para na frente da doca.", proxima: "c4_30" },
    c4_30: { tipo: "narracao", sprite: "kaito", texto: "O Kaito. Com a caixa térmica nas costas. Ele olha para os três no chão. Para a SN, sentada entre o Victor e o Ryuji, com terra no rosto.", proxima: "c4_31" },
    c4_31: { quem: "kaito", texto: "O Ryuji mandou foto no grupo. De vocês três com caixote. Às dez da noite.", proxima: "c4_32" },
    c4_32: { quem: "ryuji", sprite: "ryuji", texto: "Era pra mostrar que eu estava trabalhando!", proxima: "c4_33" },
    c4_33: { tipo: "narracao", sprite: "kaito", texto: "O Kaito abre a caixa térmica. Tira três lámen. Entrega um para cada. O da SN tem dois ovos.", proxima: "c4_34" },
    c4_34: { quem: "kaito", texto: "Estava passando.", proxima: "c4_35" },
    c4_35: { quem: "victor", texto: "Passando. Pelo mercado. À meia-noite. Do outro lado da cidade. Claro, líder.", proxima: "c4_36" },
    c4_36: { tipo: "narracao", texto: "O Kaito não responde. Senta no chão também. Do lado da SN. Do lado oposto ao do Victor. Sem falar nada. E fica.", proxima: "c4_37" },
    c4_37: { tipo: "narracao", sprite: null, texto: "Os quatro comem lámen no chão da doca, embaixo da luz amarela que pisca. Ninguém fala de gangue. Ninguém fala de briga. O Ryuji conta da bola murcha. O Victor mostra a prova de seis e meio, que ele tirou do bolso da camisa toda amassada. O Kaito lê inteira. Devagar.", proxima: "c4_38" },
    c4_38: { quem: "kaito", sprite: "kaito", texto: "“Gangue dos operários.”", proxima: "c4_39" },
    c4_39: { quem: "victor", texto: "Foi ela que me ensinou.", proxima: "c4_40" },
    c4_40: { tipo: "narracao", texto: "O Kaito olha para a SN. O canto da boca dele sobe. E ele devolve a prova para o Victor, dobrada com cuidado. Exatamente nas mesmas dobras.", proxima: "c5_00a" },

    /* =================== CENA 5 — PUDIM COM A AVÓ =================== */
    // Cenário: casa da Reina, sábado à tarde (usa "apartamento"). Música: piano leve.
    // Antes da casa da Reina: o sábado de manhã e o caminho até lá.
    c5_00a: { tipo: "narracao", cenario: "quarto-sn", roupa: null, transicao: "tempo", legenda: "Sábado — Cena 5 — Pudim", sprite: null, texto: "Sábado. Ela acorda às dez e meia, com o sol na cara e cheiro de tomate no cabelo. Os braços não doem. Duzentos caixotes e os braços não doem nada.", proxima: "c5_00b" },
    c5_00b: { tipo: "narracao", texto: "O celular está cheio. Fotos da doca no grupo do Ryuji. Um áudio do Victor cantando “gangue dos operários” com a melodia do hino. E, no meio de tudo, uma mensagem da Reina. Mandada às sete da manhã.", proxima: "c5_00c" },
    c5_00c: { quem: "mensagem", rotulo: "Mensagem — Reina", texto: "Hoje. Três horas. Ela chegou em casa ontem. Ela quer fazer o pudim junto. Ela quer conhecer “a irritante”. Palavras dela. Não minhas. Tá, minhas também.", proxima: "c5_00d" },
    c5_00d: { quem: "mensagem", rotulo: "Mensagem — Reina", texto: "Não traz travesseiro. Traz você. E toma banho, o Ryuji postou uma foto sua coberta de terra.", proxima: "c5_00e" },
    c5_00e: { tipo: "pensamento", texto: "A avó da Reina. Em casa. Na outra vida, eu nunca soube se ela voltou do hospital. Eu nunca soube nem que ela existia.", proxima: "c5_00f" },
    c5_00f: { tipo: "narracao", cenario: "frente-casa-reina", transicao: "tempo", texto: "Às três em ponto, ela está na frente do portão da casa do bairro alto. Com um vaso pequeno de margaridas da banca da esquina, porque a Reina leva margarida para o hospital, e ela achou que a avó ia gostar de ver uma que não fosse de hospital.", proxima: "c5_00g" },
    c5_00g: { tipo: "narracao", sprite: "reina", texto: "A porta abre antes da campainha. A Reina, de avental florido, o mesmo da quinta, com farinha na bochecha e o cabelo preso de qualquer jeito. Ela não arrumou o cabelo. A Reina sempre arruma o cabelo.", proxima: "c5_00h" },
    c5_00h: { quem: "reina", texto: "Você veio. Ótimo. Entra. Ela está acordada desde as seis perguntando que horas você chega. Ela mandou tirar a poltrona dela do quarto dos fundos. Mandou. Da cama.", proxima: "c5_00i" },
    c5_00i: { quem: "reina", texto: "Se ela te chamar de irritante, a culpa não é minha. Tá, é minha. Entra logo.", proxima: "c5_01" },
    c5_01: { tipo: "narracao", cenario: "casa-reina", sprite: null, texto: "Sábado à tarde. Na casa grande do bairro alto, a sala branca e cinza tem uma coisa nova: uma poltrona velha, de veludo marrom, trazida do quarto dos fundos e colocada bem no meio. E, sentada nela, uma senhora de cabelo curto, de óculos, com uma manta no colo.", proxima: "c5_02" },
    c5_02: { quem: "desconhecido", rotulo: "Avó da Reina", texto: "Então você é a irritante.", proxima: "c5_03" },
    c5_03: { quem: "reina", sprite: "reina", texto: "Vó!", proxima: "c5_04" },
    c5_04: { quem: "desconhecido", rotulo: "Avó da Reina", texto: "Foi você que me contou assim. “A irritante que me levou pra fazer pudim.” Eu sou velha, não sou surda.", proxima: "c5_05" },
    c5_05: { tipo: "narracao", sprite: null, texto: "A SN ri. A Reina fica vermelha. A avó da Reina estende a mão, pequena, cheia de mancha de sol. A SN segura. Com cuidado.", proxima: "c5_06" },
    c5_06: { quem: "desconhecido", rotulo: "Avó da Reina", texto: "Obrigada por não deixar ela sozinha nessa casa grande. Ela é brava. Mas ela tem medo de casa vazia desde pequena.", proxima: "c5_cam1" },
    c5_cam1: { caminhos: [
      { flag: "Admitiu_Takeo_Reina", proxima: "c5_takeo" }
    ], proxima: "c5_07" },
    c5_takeo: { tipo: "narracao", sprite: "takeo", texto: "A campainha toca. É o Takeo. Com um pote de bolinho de frango da avó dele e uma cara de quem não sabe por que foi convidado. A Reina corre para a porta antes de todo mundo.", proxima: "c5_takeo2" },
    c5_takeo2: { quem: "reina", sprite: "reina", texto: "Briga limpa, lembra? Eu chamei ele. Você não pode reclamar. É estratégia.", proxima: "c5_takeo3" },
    c5_takeo3: { tipo: "narracao", sprite: null, texto: "A avó da Reina olha para o Takeo. Para a Reina. Para a SN. E dá uma risadinha baixa, cobrindo a boca com a manta.", proxima: "c5_07" },
    c5_07: { tipo: "narracao", texto: "O pudim racha de novo quando sai da forma. Igual ao da semana passada. A Reina olha para a rachadura. A avó dela olha também. E as duas riem juntas, do mesmo jeito, com o mesmo som.", proxima: "c5_08" },
    c5_08: { quem: "desconhecido", rotulo: "Avó da Reina", texto: "Rachou igual ao meu. Agora é oficialmente da família.", proxima: "c5_09" },
    c5_09: { tipo: "pensamento", texto: "Na outra vida, a Reina sumiu da escola. Talvez tenha sido isso. Talvez a avó dela não tenha voltado pra essa poltrona.", proxima: "c5_10" },
    c5_10: { tipo: "pensamento", texto: "Nessa, ela está aqui. Rindo de um pudim rachado. Eu não fiz nada de especial. Eu só não deixei a Reina sozinha. Às vezes é só isso.", proxima: "c6_01" },

    /* =================== CENA 6 — A PERGUNTA =================== */
    // Cenário: quarto da SN, sábado à noite. Gancho. Música: piano, depois corda grave.
    c6_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Sábado, 22h40", sprite: null, texto: "À noite, no quarto, a SN olha as fotos do dia no celular. A poltrona de veludo. O pudim rachado. E uma foto de ontem: ela, o Victor e o Ryuji sujos de terra, sentados na doca, com o Kaito meio cortado no canto, comendo lámen.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", texto: "O celular vibra. Uma mensagem do Victor. Uma foto: a prova de seis e meio, presa com ímã de fruta na porta de uma geladeira velha.", proxima: "c6_03" },
    c6_03: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Ela chorou. Mas do outro jeito. Igual você falou. Toda quinta, no banco. Não esquece.", proxima: "c6_04" },
    c6_04: { tipo: "narracao", texto: "Ela sorri para a tela. Vai responder. E o celular vibra de novo. Outra conversa. Do Ryuji.", proxima: "c6_05" },
    c6_05: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Ei. Tá acordada?", proxima: "c6_06" },
    c6_06: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Hoje voltando da corrida, um carro preto parou do meu lado. Um cara de terno abriu o vidro. Muito educado. Perguntou se eu conhecia uma menina baixinha, de cabelo comprido, que estuda na minha sala.", proxima: "c6_07" },
    c6_07: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Ele falou o seu nome. Inteiro. E falou o meu também. Eu nunca vi esse cara na vida.", proxima: "c6_08" },
    c6_08: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Eu disse que não conhecia. Fiz cara de bobo. Eu sou ótimo em cara de bobo. Ele sorriu e foi embora.", proxima: "c6_09" },
    c6_09: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Eu não falei pro Kaito ainda. Você conhece esse cara?", proxima: "c6_10" },
    c6_10: { tipo: "narracao", texto: "Ela fica olhando para a tela. Muito tempo. A mão aperta o celular. Ela solta antes de rachar a tela.", proxima: "c6_11" },
    c6_11: { tipo: "pensamento", texto: "O homem de terno. O da Sayuri. O do shopping. Agora ele sabe o nome do Ryuji. E sabe onde o Ryuji corre de manhã.", proxima: "c6_12" },
    c6_12: { tipo: "pensamento", texto: "Ele não está atrás de mim. Ele está atrás das pessoas em volta de mim. Uma por uma.", proxima: "c6_esc6" },

    // ▶ ESCOLHA 5 — Resposta para o Ryuji
    c6_esc6: { escolhas: [
      { texto: "A. “Não conheço. Mas amanhã você não corre sozinho. Eu vou junto.”", proxima: "c6_6a_1", pontos: { ryuji: 3 }, flags: ["Correr_com_Ryuji"] },
      { texto: "B. “Conta pro Kaito. Agora. Não espera.”", proxima: "c6_6b_1", pontos: { ryuji: 1, kaito: 1 }, flags: ["Ryuji_conta_Kaito"] },
      { texto: "C. “Não conheço. Muda o caminho da corrida. E me manda mensagem quando chegar em casa. Todo dia.”", proxima: "c6_6c_1", pontos: { ryuji: 2 }, flags: ["Ryuji_muda_caminho"] }
    ]},
    c6_6a_1: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Você? Correr comigo? Às seis da manhã? Num domingo? Você vai me deixar pra trás e eu vou chorar.", proxima: "c6_6a_2" },
    c6_6a_2: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "...Tá. Seis horas. Na praça do balanço. Obrigado.", proxima: "c6_13" },
    c6_6b_1: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Tá. Vou contar. Ele vai ficar maluco. Ele vai querer dormir na minha porta.", proxima: "c6_6b_2" },
    c6_6b_2: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Pronto. Contei. Ele respondeu “onde”. Só isso. “Onde.” Eu estou com medo do líder agora, não do cara de terno.", proxima: "c6_13" },
    c6_6c_1: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Todo dia? Você vai virar minha mãe.", proxima: "c6_6c_2" },
    c6_6c_2: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "...Tá. Todo dia. Prometo. Você é estranha. Mas é estranha de um jeito que dá vontade de obedecer.", proxima: "c6_13" },

    // (todas as opções continuam aqui)
    c6_13: { tipo: "narracao", texto: "Ela deixa o celular na mesa de cabeceira. Em cima da gaveta onde está o peão preto. Ela não abre a gaveta.", proxima: "c6_14" },
    c6_14: { tipo: "pensamento", texto: "Ontem eu carreguei caixote com eles. Ri com eles. Comi lámen no chão com eles.", proxima: "c6_15" },
    c6_15: { tipo: "pensamento", texto: "E alguém estava olhando. Alguém sempre está olhando.", proxima: "ep_fim" },

    // Fim do Capítulo 19 (crie a entrada "capitulo19" em dados/capitulos.js).
    ep_fim: { fim: "capitulo19" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 20 (anotações do roteiro)
 *  • O homem de terno parou o Ryuji na rua e perguntou da SN pelo nome. Sabe o nome do Ryuji.
 *    Ele está cercando as pessoas em volta dela (Sayuri, Ryuji...). A SN acha que é coisa do Ren.
 *  • Victor: passou na recuperação (6,5). Estudo toda quinta no banco da coordenação (Victor_toda_quinta).
 *    Prometeu de mindinho que volta (Victor_volta). Entrou na gangue porque o Kaito o salvou aos 13.
 *  • Ryuji: quer ser bombeiro. Corre todo dia de manhã. É "a cola" do grupo.
 *    Pode correr com a SN no domingo (Correr_com_Ryuji) ou ter contado para o Kaito (Ryuji_conta_Kaito).
 *  • O Kaito apareceu na doca à meia-noite com lámen. Dois ovos para a SN. Sentou do lado dela.
 *  • A avó da Reina está em casa. Pudim rachado "oficialmente da família".
 *
 * ESCOLHAS DO CAPÍTULO (5)
 *  1 No banco com o Victor · 2 Na arquibancada com o Ryuji · 3 O caminhão do Victor
 *  4 Em volta do caixote · 5 Resposta para o Ryuji
 *
 * FLAGS NOVAS
 *  Victor_cansado · Victor_tira_sete · Victor_toda_quinta · Ryuji_cola · Ryuji_perguntou
 *  Ryuji_prova_fisica · Foi_caminhao · Sorvete_Victor · Tomate_Ryuji · Victor_volta
 *  Ryuji_porque_gangue · Brinde_caixote · Correr_com_Ryuji · Ryuji_conta_Kaito · Ryuji_muda_caminho
 */