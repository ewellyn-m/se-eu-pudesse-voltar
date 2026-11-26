/*
 * =====================================================================
 *  CAPÍTULO 24 — Chuva de sexta
 *  Quinta (continua do fim do Capítulo 23) até sábado de manhã.
 * =====================================================================
 *
 *  O QUE ACONTECE
 *    • Quinta e sexta na escola: o Ren finge que nada. A SN deixa um pãozinho em cima do caderno dele.
 *      A Sayuri conta que os homens do pai estão com medo. O Victor lembra do sorvete.
 *    • Sexta à noite: último pedido do dia na lojinha: um lámen para o endereço da SN, que ela não pediu.
 *    • O Kaito chega de moto. Na porta, a chuva desaba. Ela chama ele para entrar.
 *    • A mãe da SN está em casa. Ela já conhece o Kaito: costurou o supercílio dele no
 *      pronto-socorro, dois anos atrás. Ele não chorou.
 *    • Chá, lámen dividido em três, perguntas da mãe. O Kaito educado como nunca. Nervoso como nunca.
 *    • Alagamento na avenida, luz acaba. A mãe manda ele dormir no sofá. "Minha porta fica aberta."
 *    • No escuro, a SN e o Kaito conversam baixo na sala. Perto. Ninguém atravessa a linha.
 *    • Sábado de manhã: cobertor dobrado, louça lavada. A mãe aprova, do jeito dela.
 *
 *  TOM
 *    • Agradável e tenso. Humor. Sem nhenhenhém. Romance devagar: muito perto, nada acontece.
 *    • A mãe aparece porque o capítulo pede. Ela não se mete na força nem nas brigas.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Kaito, Mãe. Blake e Ryuji só por mensagem.
 *
 *  CENÁRIOS
 *    Escola → "saida-colegio" / "sala-de-aula" / "patio-fundos" / "corredor" · Porta do prédio → "frente-casa-sn-noite" / "frente-casa-sn-chuva" / "frente-casa-sn" · Cozinha → "cozinha-sn-chuva" / "cozinha" · Sala → "sala-sn-chuva" / "sala-sn-escuro"
 *    Quarto da SN → "quarto-sn-noite"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Contou_carro_Kaito, Lan_todo_sabado, Colocou_bone_Kaito.
 *
 *  Crie a entrada "capitulo24" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo24", {
  inicio: "c0_01",
  cenas: {

    /* =================== CENA 0 — QUINTA E SEXTA NA ESCOLA =================== */
    // Cenário: frente da escola, sala, pátio. Continua direto do fim do Capítulo 23 (quinta, 7h).
    c0_01: { roupa: null, tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Quinta, 7h12 — Cena 0", sprite: "kaito", texto: "A moto preta para do outro lado da rua da escola. Ela desce da garupa, tira o capacete vermelho-escuro, ajeita o cabelo. Três meninas do primeiro ano no portão param de conversar para olhar.", proxima: "c0_02" },
    c0_02: { quem: "kaito", sprite: "kaito", texto: "Segunda aula eu tenho educação física. Se precisar de alguma coisa, eu estou na quadra.", proxima: "c0_03" },
    c0_03: { quem: "eu", texto: "Eu não vou precisar de nada. É quinta-feira. A coisa mais perigosa hoje é a prova de inglês.", proxima: "c0_04" },
    c0_04: { quem: "kaito", sprite: "kaito", texto: "Então eu estou na quadra se a prova de inglês te atacar.", proxima: "c0_05" },
    c0_05: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", sprite: null, texto: "Na sala, tudo normal. O Takeo copia a matéria com a letra torta. A Mio cochila na aula de história. A Hana tira dez em inglês e reclama que a prova era fácil demais.", proxima: "c0_06" },
    c0_06: { tipo: "narracao", sprite: "ren", texto: "E, na carteira perto da porta, o Ren. Educado. Responde a chamada. Copia a matéria. Empresta uma caneta para o menino do lado. Ele não olha para ela. Nem uma vez.", proxima: "c0_07" },
    c0_07: { tipo: "pensamento", texto: "Ele já sabe da quarta à noite. Os dois de terno contaram. Ele sabe que eu bati na janela. E ele está ali, copiando matéria de química, como se nada.", proxima: "c0_08" },
    c0_08: { tipo: "pensamento", texto: "Pode fingir. Eu também sei fingir. E eu finjo melhor.", proxima: "c0_09" },
    c0_09: { tipo: "narracao", sprite: null, texto: "No fim da aula, ela passa pela carteira dele para entregar a prova na mesa do professor. Ela não diminui o passo. Não olha. Mas deixa cair, em cima do caderno dele, uma coisa pequena.", proxima: "c0_10" },
    c0_10: { tipo: "narracao", texto: "Um pãozinho da padaria da esquina dela. Dos oito da quarta à noite. Embrulhado no papel com o nome da padaria.", proxima: "c0_11" },
    c0_11: { tipo: "narracao", texto: "Ela não vira para ver a cara dele. Mas, quando chega na porta, ouve atrás dela um barulho que nunca ouviu na sala: a caneta do Ren caindo no chão.", proxima: "c0_esc0" },

    // ▶ ESCOLHA 0 — Depois do pãozinho
    c0_esc0: { escolhas: [
      { texto: "A. Sair da sala sem olhar pra trás. Ele que fique com o pão.", proxima: "c0_0a_1", pontos: { desvio: 1 }, flags: ["Pao_Ren_saiu"] },
      { texto: "B. Olhar pra trás. Só uma vez. Sorrir igual ele sorri.", proxima: "c0_0b_1", pontos: { desvio: 1 }, flags: ["Pao_Ren_sorriu"] },
      { texto: "C. Ir direto pra quadra contar pro Kaito o que acabou de fazer.", proxima: "c0_0c_1", pontos: { kaito: 2 }, flags: ["Pao_Ren_Kaito"] }
    ]},
    c0_0a_1: { tipo: "narracao", texto: "Ela sai. O corredor está cheio, barulhento, normal. Ela compra um suco na cantina e toma inteiro, devagar. Está com sede. Não está nervosa. Só com sede.", proxima: "c0_12" },
    c0_0b_1: { tipo: "narracao", texto: "Ela olha. O Ren está abaixado, pegando a caneta. Ele levanta os olhos. Ela sorri. O sorriso educado de primeiro dia de aula. O dele.", proxima: "c0_0b_2" },
    c0_0b_2: { tipo: "narracao", texto: "Por meio segundo, o rosto dele não faz nada. Nada. Nenhum sorriso. Nenhuma máscara. Só olhos parados. Depois o sorriso volta. Mas ela viu o meio segundo.", proxima: "c0_12" },
    c0_0c_1: { tipo: "narracao", cenario: "patio-fundos", sprite: "kaito", texto: "Ela vai até a quadra. O Kaito está no banco, amarrando o tênis. Ela conta. Do pão. Do papel da padaria. Da caneta caindo.", proxima: "c0_0c_2" },
    c0_0c_2: { tipo: "narracao", texto: "Ele fica olhando para ela. Depois começa a rir. Baixo, pelo nariz, sem parar. O professor de educação física apita para ele levantar e ele não consegue.", proxima: "c0_0c_3" },
    c0_0c_3: { quem: "kaito", sprite: "kaito", texto: "Você deu um pão pra ele. Você deu um pão. Pro Ren.", proxima: "c0_0c_4" },
    c0_0c_4: { quem: "eu", texto: "Ele gosta de mandar recado. Eu também mandei.", proxima: "c0_12" },

    // (todas as opções continuam aqui)
    c0_12: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", sprite: null, texto: "No intervalo, o pátio está barulhento. O Blake e o Kaito no banco de sempre, dividindo um onigiri. A Mio olhando para o Blake de longe e fingindo que está olhando a árvore. O Ryuji consertando o farol da moto amarela do outro lado da grade, com um parafuso que alguém deu para ele.", proxima: "c0_13" },
    c0_13: { tipo: "narracao", sprite: "sayuri", texto: "A Sayuri passa pelo pátio. Sozinha. Com o laço rosa e a manga puxada. Quando passa pela SN, ela não para. Mas fala, sem virar a cabeça, rápido.", proxima: "c0_14" },
    c0_14: { quem: "sayuri", sprite: "sayuri", texto: "Ontem à noite meu pai chegou em casa pálido. Disse que os homens dele estavam com medo de alguma coisa. Eu nunca vi aqueles homens com medo.", proxima: "c0_15" },
    c0_15: { tipo: "narracao", sprite: null, texto: "Ela continua andando. Não espera resposta. Some no corredor.", proxima: "c0_16" },
    c0_16: { tipo: "pensamento", texto: "Ótimo. O recado chegou até no lugar certo.", proxima: "c0_17" },
    c0_17: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Sexta-feira", sprite: "victor", texto: "Sexta passa rápido. Prova de matemática de manhã. O céu fica roxo depois do almoço, com cheiro de terra antes da chuva. Na saída, no banco da coordenação, o Victor está deitado de comprido, com o braço tapando os olhos.", proxima: "c0_18" },
    c0_18: { quem: "victor", sprite: "victor", texto: "Gatinha. Não esquece. Eu ainda te devo um sorvete. Domingo eu pago. Dívida de honra. Eu mando mensagem.", proxima: "c0_19" },
    c0_19: { quem: "eu", texto: "Você está deitado no banco do castigo de novo?", proxima: "c0_20" },
    c0_20: { quem: "victor", sprite: "victor", texto: "Não. Hoje eu só estou descansando. O banco é confortável. Virou meu.", proxima: "c0_21" },
    c0_21: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", sprite: "kaito", texto: "No portão, o Kaito entrega o capacete para ela. Leva ela em casa. Na porta do prédio, ele olha para o céu.", proxima: "c0_22" },
    c0_22: { quem: "kaito", sprite: "kaito", texto: "Hoje eu fico na lojinha até tarde. Sexta tem muito pedido. Se chover, dobra.", proxima: "c0_23" },
    c0_23: { quem: "eu", texto: "Vai chover.", proxima: "c0_24" },
    c0_24: { quem: "kaito", sprite: "kaito", texto: "Eu sei. Eu vou estar ensopado às onze.", proxima: "c0_25" },
    c0_25: { tipo: "narracao", sprite: null, texto: "Ele vai embora. O ronco some na esquina. Ela sobe. A mãe já está em casa, de folga, lendo na cozinha.", proxima: "c1_01" },

    /* =================== CENA 1 — ÚLTIMO PEDIDO =================== */
    // Cenário: quarto da SN, depois a porta do prédio (sexta, 22h40). Música: piano, depois chuva.
    c1_01: { roupa: "fora", tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Sexta, 22h31 — Cena 1", sprite: null, texto: "Sexta à noite. O céu está roxo desde as seis, com aquele cheiro de terra que vem antes da chuva grande. A SN está deitada na cama, lendo, quando o celular vibra.", proxima: "c1_02" },
    c1_02: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Último pedido do dia. Um missô. Pro seu endereço.", proxima: "c1_03" },
    c1_03: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu não pedi nada.", proxima: "c1_04" },
    c1_04: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu sei. Sobrou caldo. O tio mandou eu levar pra alguém. Eu escolhi.", proxima: "c1_05" },
    c1_05: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Dez minutos.", proxima: "c1_06" },
    c1_06: { tipo: "narracao", texto: "Ela olha para o pijama. Camiseta velha, gigante, de uma banda que ela nem ouve. Short de bolinha. Ela troca. Depois acha que trocar foi exagero. Troca de novo. Fica com um moletom por cima do pijama. Pronto. Normal. Casual.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", cenario: "frente-casa-sn-noite", transicao: "tempo", texto: "Dez minutos depois, ela está na porta do prédio quando o ronco grave dobra a esquina. A moto preta para na frente dela. O Kaito tira o capacete com a sacola de papel pendurada no guidão.", proxima: "c1_08" },
    c1_08: { quem: "kaito", sprite: "kaito", texto: "Entrega.", proxima: "c1_09" },
    c1_09: { quem: "eu", texto: "Cortesia?", proxima: "c1_10" },
    c1_10: { quem: "kaito", sprite: "kaito", texto: "Cortesia.", proxima: "c1_cam1" },
    c1_cam1: { caminhos: [
      { flag: "Contou_carro_Kaito", proxima: "c1_carro" }
    ], proxima: "c1_11" },
    c1_carro: { quem: "kaito", sprite: "kaito", texto: "Passei na rua de trás antes. Nenhum carro preto. Nem na quarta, nem ontem. Acho que o seu recado chegou.", proxima: "c1_11" },
    c1_11: { tipo: "narracao", texto: "Ela pega a sacola. Está quente. E, nessa hora, uma gota grossa cai no capacete dele. Plic. Depois outra. Depois o céu inteiro.", proxima: "c1_12" },
    c1_12: { tipo: "narracao", cenario: "frente-casa-sn-chuva", efeito: "tremor", texto: "Não é chuva. É uma parede. Em dois segundos, a rua vira um rio. O Kaito, na calçada, fica ensopado da cabeça aos pés. A moto some atrás de uma cortina de água.", proxima: "c1_13" },
    c1_13: { quem: "kaito", sprite: "kaito", texto: "...Tá. Eu vou indo.", proxima: "c1_14" },
    c1_14: { quem: "eu", texto: "Indo pra onde? Você não está vendo nem a sua moto!", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — Na porta, na chuva
    c1_esc1: { escolhas: [
      { texto: "A. “Entra. Espera a chuva passar.”", proxima: "c1_1a_1", pontos: { kaito: 2 }, flags: ["Chamou_entrar"] },
      { texto: "B. Segurar a jaqueta dele e puxar pra dentro. Sem perguntar.", proxima: "c1_1b_1", pontos: { kaito: 3 }, flags: ["Puxou_Kaito_dentro"] },
      { texto: "C. “Se você sair nessa chuva e morrer, eu nunca mais te deixo ganhar no jogo.”", proxima: "c1_1c_1", pontos: { kaito: 2 }, flags: ["Chantagem_jogo"] }
    ]},
    c1_1a_1: { quem: "kaito", sprite: "kaito", texto: "Não precisa. É só água.", proxima: "c1_1a_2" },
    c1_1a_2: { tipo: "narracao", efeito: "tremor", texto: "Um trovão estoura em cima do prédio. Tão perto que o alarme de um carro dispara. O Kaito olha para o céu. Olha para ela.", proxima: "c1_1a_3" },
    c1_1a_3: { quem: "kaito", sprite: "kaito", texto: "...Só até passar.", proxima: "c1_15" },
    c1_1b_1: { tipo: "narracao", texto: "Ela segura a gola da jaqueta molhada e puxa. Ele vem. Não tem como não vir. Ele tropeça no degrau e para dentro do hall, pingando, com cara de quem foi atropelado por uma menina de um e sessenta.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "kaito", sprite: "kaito", texto: "Você podia ter só pedido.", proxima: "c1_1b_3" },
    c1_1b_3: { quem: "eu", texto: "Você ia dizer não.", proxima: "c1_1b_4" },
    c1_1b_4: { quem: "kaito", sprite: "kaito", texto: "...Ia.", proxima: "c1_15" },
    c1_1c_1: { quem: "kaito", sprite: "kaito", texto: "Você nunca me deixou ganhar.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "eu", texto: "Exatamente. Imagina se eu nunca mais deixar de não deixar.", proxima: "c1_1c_3" },
    c1_1c_3: { tipo: "narracao", texto: "Ele para. Tenta entender a frase. Desiste. Entra.", proxima: "c1_15" },

    // (todas as opções continuam aqui)
    c1_15: { tipo: "narracao", texto: "No elevador, os dois ficam lado a lado em silêncio. Ele pinga no chão. Faz uma poça. O elevador demora mais do que nunca.", proxima: "c1_16" },
    c1_16: { tipo: "pensamento", texto: "Minha mãe está em casa. Ela chegou às oito. Ela está de folga amanhã.", proxima: "c1_17" },
    c1_17: { tipo: "pensamento", texto: "Ótimo. Excelente. Perfeito.", proxima: "c2_01" },

    /* =================== CENA 2 — A SENHORA =================== */
    // Cenário: cozinha do apartamento. Música: piano leve com chuva forte lá fora.
    c2_01: { roupa: "fora", tipo: "narracao", cenario: "cozinha-sn-chuva", transicao: "tempo", legenda: "Cena 2 — A senhora", sprite: null, texto: "A porta abre. A cozinha está com a luz acesa. Na mesa, de pijama de flanela e óculos de leitura, com uma xícara de chá e um livro grosso de enfermagem, a mãe dela.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", sprite: "mae", texto: "Ela levanta os olhos do livro. Vê a filha. Vê o garoto atrás da filha. Encharcado. Um metro e oitenta de jaqueta escura pingando no tapete da entrada.", proxima: "c2_03" },
    c2_03: { tipo: "narracao", texto: "Ela tira os óculos. Devagar.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", sprite: "kaito", texto: "O Kaito faz uma reverência. Funda. A mais funda que a SN já viu ele fazer na vida. A água escorre do cabelo dele direto para o chão.", proxima: "c2_05" },
    c2_05: { quem: "kaito", sprite: "kaito", texto: "Boa noite, senhora. Desculpa o horário. Eu vim entregar um lámen. Começou a chover. Eu já vou embora.", proxima: "c2_06" },
    c2_06: { tipo: "pensamento", texto: "Ele falou “senhora”. Ele nunca fala “senhora”. Ele chama a professora de matemática de “ela”.", proxima: "c2_07" },
    c2_07: { tipo: "narracao", texto: "A mãe fica olhando para ele. Muito tempo. Os olhos param no supercílio dele. Na cicatriz pequena, branca, em cima do corte mais novo, que ainda está fechando.", proxima: "c2_08" },
    c2_08: { quem: "mae", sprite: "mae", texto: "Eu costurei esse supercílio.", proxima: "c2_09" },
    c2_09: { tipo: "narracao", texto: "Silêncio. Só a chuva.", proxima: "c2_10" },
    c2_10: { quem: "mae", sprite: "mae", texto: "Pronto-socorro do hospital central. Dois anos atrás. Três da manhã. Você chegou sozinho, de moto, com sangue escorrendo no olho. Seis pontos. Você não chorou. Não reclamou. E quando eu perguntei o que tinha acontecido, você disse que tinha caído.", proxima: "c2_11" },
    c2_11: { quem: "kaito", sprite: "kaito", texto: "...Eu tinha caído.", proxima: "c2_12" },
    c2_12: { quem: "mae", sprite: "mae", texto: "Em cima do punho de alguém, eu imagino.", proxima: "c2_13" },
    c2_13: { tipo: "narracao", texto: "O Kaito não responde. A SN nunca viu o Kaito sem resposta. Ele está parado no tapete, pingando, com as orelhas vermelhas e a postura de quem está na sala do diretor.", proxima: "c2_14" },
    c2_14: { tipo: "narracao", texto: "A mãe levanta. Vai até o armário do corredor. Volta com uma toalha. Joga para ele. Ele pega no ar.", proxima: "c2_15" },
    c2_15: { quem: "mae", sprite: "mae", texto: "Seca o cabelo. Tira a jaqueta. Senta. Ninguém sai dessa casa nessa chuva.", proxima: "c2_16" },
    c2_16: { quem: "kaito", sprite: "kaito", texto: "Sim, senhora.", proxima: "c2_17" },
    c2_17: { tipo: "narracao", sprite: null, transicao: "tempo", texto: "Cinco minutos depois, os três estão na mesa da cozinha. O Kaito, com uma camiseta velha do avô da SN que ficou curta nos braços. A jaqueta pendurada no varal da área, pingando. O lámen dividido em três tigelas. Ele trouxe um. Não dá para três. Dá mesmo assim.", proxima: "c2_18" },
    c2_18: { quem: "mae", sprite: "mae", texto: "Então. Você é o da lojinha de lámen. O sobrinho.", proxima: "c2_19" },
    c2_19: { quem: "kaito", sprite: "kaito", texto: "Sim, senhora.", proxima: "c2_20" },
    c2_20: { quem: "mae", sprite: "mae", texto: "O que traz pão de queijo às sete da manhã e acha que eu não vejo da janela.", proxima: "c2_21" },
    c2_21: { tipo: "narracao", texto: "O Kaito engasga com o macarrão. A SN dá tapinhas nas costas dele sem olhar, olhando para a mãe, de olhos arregalados.", proxima: "c2_22" },
    c2_22: { quem: "eu", texto: "Mãe!", proxima: "c2_23" },
    c2_23: { quem: "mae", sprite: "mae", texto: "Eu trabalho de noite. De manhã eu chego e vou dormir. Mas eu passo pela janela. Toda manhã tem uma moto preta e um pão de queijo.", proxima: "c2_24" },
    c2_24: { quem: "mae", sprite: "mae", texto: "E esse corte novo no mesmo supercílio? Caiu de novo?", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — A mãe pressionando o Kaito
    c2_esc2: { escolhas: [
      { texto: "A. Salvar ele. “Mãe, o Kaito montou a moto inteira com peça de ferro-velho. Com o tio. Conta pra ela, Kaito.”", proxima: "c2_2a_1", pontos: { kaito: 3 }, flags: ["Salvou_Kaito_mae"] },
      { texto: "B. Deixar a mãe interrogar. Comer o lámen e assistir.", proxima: "c2_2b_1", pontos: { kaito: 1 }, flags: ["Deixou_mae_interrogar"] },
      { texto: "C. “Mãe, ele caiu. Igual a senhora caía na idade dele. A vó me contou.”", proxima: "c2_2c_1", pontos: { kaito: 2 }, flags: ["Devolveu_mae"] }
    ]},
    c2_2a_1: { tipo: "narracao", sprite: "kaito", texto: "O Kaito olha para ela com gratidão de náufrago. Depois para a mãe. E começa a falar. Da embreagem. Do ferro-velho. Da peça que eles acharam num caminhão de lixo. Do tio, que fica sem dormir quando a moto não liga.", proxima: "c2_2a_2" },
    c2_2a_2: { tipo: "narracao", texto: "Ele fala mais em cinco minutos do que a SN já ouviu ele falar em uma semana. A mãe escuta. Faz pergunta. Pergunta de enfermeira: que peça, quanto pesa, como ele carregou sozinho.", proxima: "c2_2a_3" },
    c2_2a_3: { quem: "mae", sprite: "mae", texto: "Você e o seu tio. Só os dois?", proxima: "c2_2a_4" },
    c2_2a_4: { quem: "kaito", sprite: "kaito", texto: "Só os dois. Desde os onze.", proxima: "c2_2a_5" },
    c2_2a_5: { tipo: "narracao", texto: "A mãe não pergunta por quê. Ela olha para ele um tempo. E coloca o último pedaço de carne da tigela dela na tigela dele. Sem falar nada.", proxima: "c2_25" },
    c2_2b_1: { quem: "kaito", sprite: "kaito", texto: "Caí da moto.", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "mae", sprite: "mae", texto: "A moto que estava no conserto?", proxima: "c2_2b_3" },
    c2_2b_3: { tipo: "narracao", texto: "O Kaito congela com o hashi no ar. A SN quase cospe o caldo.", proxima: "c2_2b_4" },
    c2_2b_4: { quem: "kaito", sprite: "kaito", texto: "...Como a senhora sabe que estava no conserto?", proxima: "c2_2b_5" },
    c2_2b_5: { quem: "mae", sprite: "mae", texto: "Porque durante três semanas era uma bicicleta de entrega com caixa térmica. Eu tenho janela. Eu já falei.", proxima: "c2_2b_6" },
    c2_2b_6: { quem: "kaito", sprite: "kaito", texto: "...Eu caí. De algum lugar. Com certeza.", proxima: "c2_2b_7" },
    c2_2b_7: { quem: "mae", sprite: "mae", texto: "Hm. Todo mundo cai. Só não caiam juntos.", proxima: "c2_2b_8" },
    c2_2b_8: { tipo: "pensamento", texto: "Ela olhou pra mim quando disse isso. Só um segundo. Ela não sabe da fábrica. Mas ela sabe de alguma coisa. Ela sempre sabe de alguma coisa.", proxima: "c2_25" },
    c2_2c_1: { tipo: "narracao", texto: "A mãe para. A colher no meio do caminho. Olha para a filha por cima dos óculos.", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "mae", sprite: "mae", texto: "A sua avó fala demais.", proxima: "c2_2c_3" },
    c2_2c_3: { quem: "eu", texto: "Fala. E a senhora caía muito, pelo que ela conta.", proxima: "c2_2c_4" },
    c2_2c_4: { tipo: "narracao", texto: "O Kaito olha de uma para a outra, sem entender, mas sentindo que acabou de ser salvo de alguma coisa. A mãe solta o ar pelo nariz. Quase um riso. Igual ao dele.", proxima: "c2_2c_5" },
    c2_2c_5: { quem: "mae", sprite: "mae", texto: "Tá bom. Ninguém aqui cai. Come o lámen, menino.", proxima: "c2_25" },

    // (todas as opções continuam aqui)
    c2_25: { tipo: "narracao", sprite: null, texto: "Lá fora, a chuva não diminui. Aumenta. A janela da cozinha treme. Na televisão da sala, ligada sem som, aparece uma faixa vermelha: ALAGAMENTO NA AVENIDA DO VIADUTO. TRÂNSITO INTERROMPIDO.", proxima: "c3_01" },

    /* =================== CENA 3 — SEM LUZ =================== */
    // Cenário: sala do apartamento. Música: chuva, trovão, depois silêncio.
    c3_01: { roupa: "fora", tipo: "narracao", cenario: "sala-sn-chuva", transicao: "tempo", legenda: "Cena 3 — Sem luz", texto: "Onze e quarenta. O Kaito olha para a televisão. Para a janela. Para o relógio. Levanta.", proxima: "c3_02" },
    c3_02: { quem: "kaito", sprite: "kaito", texto: "Obrigado pelo chá, senhora. Eu vou indo. Eu vou devagar. Pela rua de cima.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", cenario: "sala-sn-escuro", efeito: "tremor", texto: "Um trovão. A luz pisca. Pisca de novo. E apaga. O prédio inteiro. A rua inteira. Escuro total, só o clarão dos relâmpagos entrando pela janela.", proxima: "c3_04" },
    c3_04: { quem: "mae", sprite: "mae", texto: "Senta.", proxima: "c3_05" },
    c3_05: { tipo: "narracao", texto: "Ela fala isso no escuro, sem levantar a voz. Do jeito que fala com paciente que quer ir embora do hospital antes da alta.", proxima: "c3_06" },
    c3_06: { quem: "mae", sprite: "mae", texto: "Eu costuro gente que sai de moto na chuva. Toda semana. Eu não vou costurar você de novo. Você dorme no sofá.", proxima: "c3_07" },
    c3_07: { quem: "kaito", sprite: "kaito", texto: "Senhora, eu não posso...", proxima: "c3_08" },
    c3_08: { quem: "mae", sprite: "mae", texto: "Pode. Liga pro seu tio e avisa. Eu falo com ele se precisar.", proxima: "c3_09" },
    c3_09: { tipo: "narracao", texto: "A SN acende a lanterna do celular. O Kaito está parado no meio da sala, com a camiseta curta do avô, sem saber o que fazer com as mãos. Ele liga para o tio. Fala baixo. A SN ouve a voz do tio do outro lado, rindo.", proxima: "c3_10" },
    c3_10: { quem: "kaito", sprite: "kaito", texto: "...Ele disse que já estava pra me ligar dizendo pra eu não voltar. E disse pra eu agradecer a senhora. E pra não quebrar nada.", proxima: "c3_11" },
    c3_11: { tipo: "narracao", sprite: null, texto: "A mãe acende duas velas na mesa de centro. Traz um travesseiro e um cobertor do armário. Coloca no sofá. E para na porta do corredor, com uma vela na mão.", proxima: "c3_12" },
    c3_12: { quem: "mae", sprite: "mae", texto: "Eu vou dormir. A porta do meu quarto fica aberta. Eu tenho sono leve. Muito leve.", proxima: "c3_13" },
    c3_13: { quem: "kaito", sprite: "kaito", texto: "Sim, senhora.", proxima: "c3_14" },
    c3_14: { quem: "mae", sprite: "mae", texto: "Boa noite, Kaito.", proxima: "c3_15" },
    c3_15: { tipo: "narracao", texto: "É a primeira vez que ela fala o nome dele. Ele percebe. Ele faz outra reverência, para o corredor escuro, mesmo depois que ela já virou.", proxima: "c4_01" },

    /* =================== CENA 4 — VELA =================== */
    // Cenário: sala do apartamento, à luz de vela. Música: chuva baixa, piano muito baixo.
    c4_01: { roupa: "fora", tipo: "narracao", cenario: "sala-sn-escuro", transicao: "tempo", legenda: "Meia-noite — Cena 4", texto: "Meia-noite. A SN vai até o quarto, troca de roupa, volta para a sala para pegar a garrafa de água. Só para pegar a garrafa de água.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", sprite: "kaito", texto: "O Kaito está sentado no sofá. Não deitado. Sentado, duro, com o cobertor dobrado no colo, olhando a vela. Como quem não sabe se tem permissão para deitar.", proxima: "c4_03" },
    c4_03: { quem: "eu", texto: "Você pode deitar. O sofá não morde.", proxima: "c4_04" },
    c4_04: { quem: "kaito", sprite: "kaito", texto: "A sua mãe morde.", proxima: "c4_05" },
    c4_05: { quem: "eu", texto: "Ela gostou de você.", proxima: "c4_06" },
    c4_06: { quem: "kaito", sprite: "kaito", texto: "Ela me deu a carne dela. Ou me chamou de mentiroso. Eu não sei qual dos dois. Talvez os dois.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", texto: "Ela senta na outra ponta do sofá. Longe. Educada. A vela no meio da mesa. A chuva batendo na janela. Os dois em silêncio.", proxima: "c4_08" },
    c4_08: { quem: "kaito", sprite: "kaito", texto: "Faz tempo que eu não durmo numa casa com... uma mãe dentro.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "Ele fala isso olhando para a vela. Sem drama. Como quem fala que faz tempo que não come pizza.", proxima: "c4_10" },
    c4_10: { quem: "kaito", sprite: "kaito", texto: "O tio é ótimo. Mas ele dorme no banquinho da cozinha da lojinha, de boné, com a televisão ligada. Aqui tem cortina. Tem cheiro de sabonete. Tem alguém dizendo “senta” e você senta.", proxima: "c4_11" },
    c4_11: { quem: "eu", texto: "Ela fala “senta” pra todo mundo. Até pro carteiro.", proxima: "c4_12" },
    c4_12: { quem: "kaito", sprite: "kaito", texto: "O carteiro sentou?", proxima: "c4_13" },
    c4_13: { quem: "eu", texto: "Sentou. Tomou chá. Contou da separação dele. Ficou uma hora.", proxima: "c4_14" },
    c4_14: { tipo: "narracao", texto: "Ele ri. Baixo, para não acordar a mãe. Os ombros tremem. O cobertor escorrega do colo. Os dois esticam a mão para pegar ao mesmo tempo.", proxima: "c4_15" },
    c4_15: { tipo: "narracao", texto: "As mãos encostam. Em cima do cobertor. No meio do sofá. Nenhum dos dois puxa.", proxima: "c4_16" },
    c4_16: { tipo: "narracao", efeito: "tremor", texto: "Um trovão estoura bem em cima do prédio. A vela treme. A luz do relâmpago ilumina a sala inteira por meio segundo. O rosto dele, muito perto. Mais perto do que ela lembrava.", proxima: "c4_17" },
    c4_17: { tipo: "narracao", texto: "Do corredor, a voz da mãe. Sonolenta. Perfeitamente acordada.", proxima: "c4_18" },
    c4_18: { quem: "mae", sprite: "mae", texto: "Tudo bem aí? O trovão foi forte.", proxima: "c4_19" },
    c4_19: { tipo: "narracao", texto: "As duas mãos voltam cada uma para o seu lado do sofá na velocidade da luz.", proxima: "c4_20" },
    c4_20: { quem: "eu", texto: "Tudo bem, mãe!", proxima: "c4_21" },
    c4_21: { quem: "kaito", sprite: "kaito", texto: "Tudo bem, senhora!", proxima: "c4_22" },
    c4_22: { tipo: "narracao", texto: "Silêncio no corredor. Depois um “hm”. Depois nada.", proxima: "c4_23" },
    c4_23: { tipo: "narracao", texto: "Os dois se olham à luz da vela. E começam a rir. Sem som. Com a mão na boca. Ela dobrada no sofá. Ele com a cara enfiada no travesseiro.", proxima: "c4_24" },
    c4_24: { quem: "kaito", sprite: "kaito", texto: "Sono leve. Muito leve. Ela não estava brincando.", proxima: "c4_25" },
    c4_25: { quem: "eu", texto: "Ela nunca brinca.", proxima: "c4_26" },
    c4_26: { tipo: "narracao", texto: "Quando a risada passa, fica outra coisa. Um silêncio diferente. Mais quente. Ele olha para ela. Ela olha para a vela.", proxima: "c4_27" },
    c4_27: { quem: "kaito", sprite: "kaito", texto: "Posso perguntar uma coisa? Sem você fingir que não sabe do que eu estou falando.", proxima: "c4_28" },
    c4_28: { quem: "eu", texto: "Depende da coisa.", proxima: "c4_29" },
    c4_29: { quem: "kaito", sprite: "kaito", texto: "Você tem medo? De alguma coisa? Eu vi você na frente da barra. Você foi sozinha até um carro cheio de valentão, de chinelo. Você não tem medo de nada.", proxima: "c4_esc3" },

    // ▶ ESCOLHA 3 — No escuro, com o Kaito
    c4_esc3: { escolhas: [
      { texto: "A. “Tenho. De chegar atrasada. Eu já cheguei atrasada demais uma vez.”", proxima: "c4_3a_1", pontos: { kaito: 3 }, flags: ["Medo_atrasada"] },
      { texto: "B. “Tenho. Da minha mãe quando ela fala “hm”.”", proxima: "c4_3b_1", pontos: { kaito: 2 }, flags: ["Medo_hm"] },
      { texto: "C. “E você? Do que você tem medo?”", proxima: "c4_3c_1", pontos: { kaito: 3 }, flags: ["Perguntou_medo_Kaito"] }
    ]},
    c4_3a_1: { tipo: "narracao", texto: "Ele não pergunta de quando. Ele fica olhando para ela, sério, como se tivesse entendido mais do que ela disse.", proxima: "c4_3a_2" },
    c4_3a_2: { quem: "kaito", sprite: "kaito", texto: "Então eu chego antes. Sempre. Pra você não ter que chegar atrasada em nada.", proxima: "c4_3a_3" },
    c4_3a_3: { quem: "eu", texto: "Você já chega quinze minutos antes todo dia.", proxima: "c4_3a_4" },
    c4_3a_4: { quem: "kaito", sprite: "kaito", texto: "Agora você sabe por quê.", proxima: "c4_30" },
    c4_3b_1: { tipo: "narracao", texto: "Ele ri de novo. Abafado. Olhando para o corredor escuro com cara de pânico.", proxima: "c4_3b_2" },
    c4_3b_2: { quem: "kaito", sprite: "kaito", texto: "Eu também. Eu tenho pavor desse “hm”. Eu enfrento a Midorata inteira, mas esse “hm”...", proxima: "c4_3b_3" },
    c4_3b_3: { quem: "mae", sprite: "mae", texto: "Hm.", proxima: "c4_3b_4" },
    c4_3b_4: { tipo: "narracao", texto: "Os dois congelam. Ninguém respira por dez segundos. Depois ela joga o travesseiro dela na cara dele, e ele segura o riso tanto que fica vermelho no escuro.", proxima: "c4_30" },
    c4_3c_1: { tipo: "narracao", texto: "Ele não responde rápido. Ele olha para a vela. A chama treme.", proxima: "c4_3c_2" },
    c4_3c_2: { quem: "kaito", sprite: "kaito", texto: "De ficar de costas. Você me pediu na janela, lembra? Eu fiquei. E alguém pagou por mim.", proxima: "c4_3c_3" },
    c4_3c_3: { quem: "kaito", sprite: "kaito", texto: "Eu não tenho medo de apanhar. Eu tenho medo de alguém apanhar no meu lugar. Principalmente...", proxima: "c4_3c_4" },
    c4_3c_4: { tipo: "narracao", texto: "Ele para. Não termina. Ele olha para ela. Ela sabe o resto da frase. Ele sabe que ela sabe.", proxima: "c4_3c_5" },
    c4_3c_5: { quem: "eu", texto: "Ninguém pagou nada. Ninguém nem ficou roxo.", proxima: "c4_3c_6" },
    c4_3c_6: { quem: "kaito", sprite: "kaito", texto: "Eu sei. Por isso eu ainda consigo dormir.", proxima: "c4_30" },

    // (todas as opções continuam aqui)
    c4_30: { tipo: "narracao", texto: "Ela levanta. Pega a garrafa de água, que era o motivo de ter vindo até a sala. Para do lado do sofá.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — Boa noite
    c4_esc4: { escolhas: [
      { texto: "A. Abrir o cobertor e colocar em cima dele. “Deita. É uma ordem da casa.”", proxima: "c4_4a_1", pontos: { kaito: 3 }, flags: ["Cobriu_Kaito"] },
      { texto: "B. “Boa noite, Kaito.” E ir para o quarto, sem olhar pra trás. Sorrindo.", proxima: "c4_4b_1", pontos: { kaito: 2 }, flags: ["Boa_noite_sala"] },
      { texto: "C. Sentar na poltrona do lado e ficar até ele dormir. Ele não dorme fácil em casa dos outros.", proxima: "c4_4c_1", pontos: { kaito: 3 }, flags: ["Ficou_poltrona"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "Ela abre o cobertor. Joga em cima dele. Ele fica ali, sentado, coberto até o queixo, olhando para ela.", proxima: "c4_4a_2" },
    c4_4a_2: { quem: "kaito", sprite: "kaito", texto: "Ordem da casa?", proxima: "c4_4a_3" },
    c4_4a_3: { quem: "eu", texto: "Aqui todo mundo obedece. Até o carteiro.", proxima: "c4_4a_4" },
    c4_4a_4: { tipo: "narracao", texto: "Ele deita. Devagar. Como quem pede licença para o sofá. E fica olhando para ela, de baixo, com o cobertor no queixo, até ela apagar a vela.", proxima: "c5_01" },
    c4_4b_1: { tipo: "narracao", texto: "Ela vai. No corredor, para um segundo. Atrás dela, ouve a voz dele. Baixinha.", proxima: "c4_4b_2" },
    c4_4b_2: { quem: "kaito", sprite: "kaito", texto: "Boa noite.", proxima: "c4_4b_3" },
    c4_4b_3: { tipo: "narracao", texto: "Ela não vira. Mas sorri a noite inteira para o teto do quarto.", proxima: "c5_01" },
    c4_4c_1: { tipo: "narracao", texto: "Ela senta na poltrona. Puxa as pernas. Não fala nada. Ele olha para ela. Entende. Deita.", proxima: "c4_4c_2" },
    c4_4c_2: { tipo: "narracao", texto: "Demora. Muito. Ele fica de olho aberto, ouvindo a chuva. Ela também. Depois de um tempo, a respiração dele fica lenta. Ele dorme. Abraçado no capacete.", proxima: "c4_4c_3" },
    c4_4c_3: { tipo: "narracao", texto: "Ela dorme também. Na poltrona. E, de madrugada, alguém cobre ela com um segundo cobertor. Ela não sabe se foi ele ou a mãe. Ela nunca pergunta.", proxima: "c5_01" },

    /* =================== CENA 5 — SÁBADO, 7H =================== */
    // Cenário: cozinha do apartamento. Música: violão leve, manhã clara.
    c5_01: { roupa: "fora", tipo: "narracao", cenario: "cozinha", transicao: "tempo", legenda: "Sábado, 7h — Cena 5", sprite: null, texto: "Sábado. A chuva parou. A luz voltou às cinco. A cidade está lavada, com poça em toda esquina e céu azul demais.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", texto: "Quando a SN chega na cozinha, o cobertor está dobrado em cima do sofá. Dobrado em quadrado perfeito, com as pontas alinhadas, igual de hotel. O travesseiro em cima. A louça da noite, lavada e secando no escorredor.", proxima: "c5_03" },
    c5_03: { tipo: "narracao", sprite: "kaito", texto: "O Kaito está na área, tirando a jaqueta do varal. Já de calça seca. A camiseta curta do avô dobrada em cima da máquina de lavar.", proxima: "c5_04" },
    c5_04: { tipo: "narracao", texto: "Na mesa, a mãe toma café. Olhando para o cobertor dobrado. Para a louça lavada. Para o garoto na área.", proxima: "c5_05" },
    c5_05: { quem: "mae", sprite: "mae", texto: "Ele lavou a louça às seis da manhã. Sem fazer barulho. Eu ouvi mesmo assim.", proxima: "c5_06" },
    c5_06: { quem: "eu", texto: "Sono leve.", proxima: "c5_07" },
    c5_07: { quem: "mae", sprite: "mae", texto: "Muito leve.", proxima: "c5_08" },
    c5_08: { tipo: "narracao", texto: "O Kaito volta da área. Faz a reverência. Ela já perdeu a conta de quantas ele fez nessa casa.", proxima: "c5_09" },
    c5_09: { quem: "kaito", sprite: "kaito", texto: "Obrigado, senhora. Pelo sofá. E pelo chá. E por não me costurar.", proxima: "c5_10" },
    c5_10: { quem: "mae", sprite: "mae", texto: "Senta. Toma café.", proxima: "c5_11" },
    c5_11: { tipo: "narracao", texto: "Ele senta. Ela serve café com leite numa caneca de bolinha. Ele toma. Os três em silêncio. É um silêncio bom. A SN não sabia que a mãe dela sabia fazer silêncio bom.", proxima: "c5_cam1" },
    c5_cam1: { caminhos: [
      { flag: "Lan_todo_sabado", proxima: "c5_lan" }
    ], proxima: "c5_12" },
    c5_lan: { tipo: "narracao", texto: "O celular dele vibra na mesa. Ele olha. Vira a tela para a SN, sem a mãe ver.", proxima: "c5_lan2" },
    c5_lan2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Lan 10h. Onde você dormiu? A moto não está na lojinha.", proxima: "c5_lan3" },
    c5_lan3: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "O BLAKE ME CONTOU QUE A MOTO NÃO ESTÁ NA LOJINHA. LÍDER. ONDE VOCÊ DORMIU. LÍDER.", proxima: "c5_lan4" },
    c5_lan4: { tipo: "narracao", texto: "O Kaito vira o celular para baixo. Rápido. A mãe levanta uma sobrancelha. Não pergunta.", proxima: "c5_12" },
    c5_12: { tipo: "narracao", sprite: null, cenario: "frente-casa-sn", transicao: "tempo", texto: "Na porta do prédio, a moto preta está molhada mas inteira. Ele passa a manga da jaqueta no banco para secar. Coloca o capacete.", proxima: "c5_13" },
    c5_13: { quem: "kaito", sprite: "kaito", texto: "Sua mãe me odeia?", proxima: "c5_14" },
    c5_14: { quem: "eu", texto: "Ela te deu café na caneca de bolinha. A caneca de bolinha é a dela.", proxima: "c5_15" },
    c5_15: { quem: "kaito", sprite: "kaito", texto: "...Isso é bom?", proxima: "c5_16" },
    c5_16: { quem: "eu", texto: "É o máximo que ela dá pra alguém.", proxima: "c5_17" },
    c5_17: { tipo: "narracao", texto: "Ele não sorri. Mas abaixa a cabeça, ajeitando a fivela do capacete por um tempo bem maior do que precisa.", proxima: "c5_18" },
    c5_18: { quem: "kaito", sprite: "kaito", texto: "Lan às dez. Eu passo aqui às nove e meia.", proxima: "c5_19" },
    c5_19: { quem: "eu", texto: "É caminho?", proxima: "c5_20" },
    c5_20: { quem: "kaito", sprite: "kaito", texto: "Agora é.", proxima: "c5_21" },
    c5_21: { tipo: "narracao", sprite: null, cenario: "cozinha", transicao: "tempo", texto: "A moto ronca. Some na esquina. Ela sobe. Na cozinha, a mãe está lavando a caneca de bolinha. Sem olhar para ela.", proxima: "c5_22" },
    c5_22: { quem: "mae", sprite: "mae", texto: "Ele dormiu abraçado no capacete.", proxima: "c5_23" },
    c5_23: { quem: "eu", texto: "Eu vi.", proxima: "c5_24" },
    c5_24: { quem: "mae", sprite: "mae", texto: "Quem dorme abraçado em capacete nunca dormiu num lugar onde se sentia seguro.", proxima: "c5_25" },
    c5_25: { tipo: "narracao", texto: "Ela seca a caneca. Coloca no armário. Na frente das outras. No lugar onde fica a caneca que ela usa todo dia.", proxima: "c5_26" },
    c5_26: { quem: "mae", sprite: "mae", texto: "Ele pode voltar. De dia. Pela porta. E nunca mais depois das onze.", proxima: "c5_27" },
    c5_27: { quem: "eu", texto: "Sim, senhora.", proxima: "c5_28" },
    c5_28: { tipo: "narracao", texto: "A mãe olha para ela por cima do ombro. E, pela primeira vez em muito tempo, ri. Um riso curto, pelo nariz. Igual ao do Kaito.", proxima: "ep_fim" },

    // Fim do Capítulo 24 (crie a entrada "capitulo24" em dados/capitulos.js).
    ep_fim: { fim: "capitulo24" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 25 (anotações do roteiro)
 *  • A mãe da SN conhece o Kaito desde o pronto-socorro (seis pontos no supercílio, dois anos atrás).
 *    Ela aprovou: caneca de bolinha. "Pode voltar. De dia. Pela porta."
 *  • O Kaito mora só com o tio desde os onze anos.
 *  • O Kaito quase disse "principalmente você" (Perguntou_medo_Kaito).
 *  • O Blake e o Ryuji sabem que a moto não dormiu na lojinha. Lan às dez: interrogatório garantido.
 *
 * ESCOLHAS DO CAPÍTULO (4)
 *  1 Na porta, na chuva · 2 A mãe pressionando o Kaito · 3 No escuro, com o Kaito · 4 Boa noite
 *
 * FLAGS NOVAS
 *  Pao_Ren_saiu · Pao_Ren_sorriu · Pao_Ren_Kaito · Chamou_entrar · Puxou_Kaito_dentro · Chantagem_jogo · Salvou_Kaito_mae · Deixou_mae_interrogar
 *  Devolveu_mae · Medo_atrasada · Medo_hm · Perguntou_medo_Kaito · Cobriu_Kaito · Boa_noite_sala
 *  Ficou_poltrona
 */