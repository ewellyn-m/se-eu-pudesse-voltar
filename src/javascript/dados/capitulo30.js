/*
 * =====================================================================
 *  CAPÍTULO 30 — Sem soco
 *  Segunda a quinta-feira, depois do Capítulo 29.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Um bloco de rota grande depois da reunião na lojinha.
 *
 *  O QUE ACONTECE
 *    • Segunda: a escola. Relatório para a Mio. A tabela da Hana. O Ren dá "bom dia" pra Sayuri.
 *    • De segunda a quarta, a gangue do Kaito começa a cair. Sem uma briga. Sem um soco.
 *        – Victor: demitido da doca do mercado. "Ordem de cima."
 *        – Ryuji: a Relâmpago apreendida numa blitz que estava exatamente no caminho dele.
 *        – Blake: o prédio da livraria foi vendido. A dona vai fechar.
 *        – Kaito: aviso de despejo da lojinha do tio. Trinta dias. O novo dono do prédio tem um
 *          logotipo: um rei de xadrez dentro de um quadrado. O mesmo do papel do último andar.
 *    • Quarta à noite: reunião na lojinha (fora da escola). Ninguém tem em quem bater.
 *      "Isso não é briga. É xadrez." A SN conta o que sabe do Sakuma.
 *    • Bloco de rota: o menino da rota depois da reunião.
 *    • Quinta: um tabuleiro na carteira do Ren. Quatro peças brancas derrubadas. A rainha branca
 *      ele não derruba. Ele coloca do lado dele do tabuleiro.
 *      (PISTA: ele quer derrubar a gangue por causa dela. NÃO é dito.)
 *
 *  TOM
 *    • Firme, sem nhenhenhém. A gangue com raiva, a SN com a cabeça fria.
 *    • Nada de gangue dentro da escola. O Ren quase não fala.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Mio, Hana, Sayuri, Ren, Kaito, Blake, Ryuji, Victor, Takeo, Tio do Kaito.
 *    Sem nome / rótulo: Dona da livraria (citada), Encarregado do mercado (citado), Policial da blitz (citado).
 *
 *  CENÁRIOS
 *    Escola: saida-colegio, sala-de-aula, corredor, patio-fundos
 *    Lojinha do tio → "loja-lamen" (de luz apagada: "loja-lamen-noite") · Calçada da lojinha → "frente-lamen-noite"
 *    Prédio da SN → "frente-casa-sn" / "frente-casa-sn-noite" · Quarto da SN → "quarto-sn-noite"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Rota_*, Mio_segunda_conta, Mio_sabe_Sayuri, Duas_contra_Ren, Dobrou_grade_Ren, Pediu_peao_Ren,
 *    Praca_lembra_Takeo, Contou_carro_Kaito, Victor_conta_Kaito.
 *
 *  Crie a entrada "capitulo30" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo30", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — RELATÓRIO =================== */
    // Cenário: escada do bloco A, segunda no intervalo (usa "corredor"). Música: violão leve.
    c1_01: { roupa: null, tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Segunda — Cena 1", sprite: "ren", texto: "Segunda. Na sala, o Ren chega antes de todo mundo. Senta na carteira perto da porta. Abre o livro de xadrez. Igual sempre.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", sprite: "sayuri", texto: "A Sayuri entra. O laço rosa de volta. O queixo alto. Quando ela passa pela carteira dele, ele levanta os olhos do livro.", proxima: "c1_03" },
    c1_03: { quem: "ren", sprite: "ren", texto: "Bom dia.", proxima: "c1_04" },
    c1_04: { tipo: "narracao", sprite: "sayuri", texto: "A sala inteira continua conversando. Ninguém percebe. A SN percebe. A Sayuri para. Um segundo. A mão dela aperta a alça da mochila.", proxima: "c1_05" },
    c1_05: { quem: "sayuri", sprite: "sayuri", texto: "...Bom dia.", proxima: "c1_06" },
    c1_06: { tipo: "narracao", texto: "Ela continua andando. Senta. Não olha para trás. Mas, do outro lado da sala, levanta os olhos para a SN. Um olhar só. Firme. Sem medo. Ou com medo, mas guardado direitinho.", proxima: "c1_cam1" },
    c1_cam1: { caminhos: [
      { flag: "Duas_contra_Ren", proxima: "c1_dupla" }
    ], proxima: "c1_07" },
    c1_dupla: { tipo: "pensamento", texto: "A pior dupla da escola. Ela respondeu o bom dia dele sem tremer a voz. Eu vi.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", cenario: "corredor", transicao: "tempo", sprite: "mio", texto: "No intervalo, a escada do bloco A. A Mio sentada um degrau acima, de braços cruzados. A Hana do lado, com o caderno de gatinho aberto numa página com uma tabela desenhada à régua.", proxima: "c1_08" },
    c1_08: { quem: "mio", sprite: "mio", texto: "Relatório. Com gestos. Você prometeu.", proxima: "c1_cam2" },
    c1_cam2: { caminhos: [
      { flag: "Mio_sabe_Sayuri", proxima: "c1_sabe" }
    ], proxima: "c1_09" },
    c1_sabe: { quem: "mio", sprite: "mio", texto: "E eu sei que foi com a Sayuri. Então não inventa que foi com a sua tia.", proxima: "c1_09" },
    c1_09: { tipo: "narracao", sprite: "hana", texto: "A Hana vira o caderno. A tabela tem três colunas: “O que a gente sabe”, “O que a gente acha” e “O que a gente precisa descobrir”. Na primeira coluna, três linhas.", proxima: "c1_10" },
    c1_10: { quem: "hana", sprite: "hana", texto: "Linha um: alguém mandou a Sayuri fazer coisas ruins. Linha dois: esse alguém sabe do meu caderno. Linha três: a SN foi num estacionamento sexta à noite e voltou com cara de quem viu um fantasma.", proxima: "c1_11" },
    c1_11: { quem: "hana", sprite: "hana", texto: "Eu preciso de mais linhas.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — O que contar para a Mio e a Hana
    c1_esc1: { escolhas: [
      { texto: "A. Contar tudo. O Ren. O Sakuma. A dívida rasgada. O bolinho de frango.", proxima: "c1_1a_1", pontos: { mio: 2, hana: 2 }, flags: ["Contou_Ren_amigas"] },
      { texto: "B. Contar o nome. Só o nome. “É o Ren. O resto eu ainda estou entendendo.”", proxima: "c1_1b_1", pontos: { mio: 1, hana: 2 }, flags: ["Nome_Ren_amigas"] },
      { texto: "C. “É perigoso. Eu conto quando for menos perigoso.” E abraçar as duas.", proxima: "c1_1c_1", pontos: { mio: 2, hana: 1 }, flags: ["Protegeu_amigas"] }
    ]},
    c1_1a_1: { tipo: "narracao", texto: "Ela conta. Do jeito dela: sem drama, rápido, com os fatos na ordem. A Mio vai ficando branca. A Hana vai escrevendo. Na parte do “você ainda come o de frango primeiro?”, a Mio segura o braço dela.", proxima: "c1_1a_2" },
    c1_1a_2: { quem: "mio", sprite: "mio", texto: "Isso é muito, muito esquisito. Ele te conhece de onde? Ele sabe do frango?", proxima: "c1_1a_3" },
    c1_1a_3: { quem: "eu", texto: "Eu não sei. Eu não lembro dele.", proxima: "c1_1a_4" },
    c1_1a_4: { quem: "hana", sprite: "hana", texto: "Nova coluna. “O que ele sabe e a gente não.” Primeira linha: o frango.", proxima: "c1_12" },
    c1_1b_1: { tipo: "narracao", texto: "A Mio abre a boca. Fecha. Olha para a porta do bloco A, como se o Ren fosse aparecer ali.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "mio", sprite: "mio", texto: "O Ren. O do xadrez. Que empresta caneta. Que dá bom dia. O Ren?", proxima: "c1_1b_3" },
    c1_1b_3: { quem: "hana", sprite: "hana", texto: "Faz sentido. Ele tira dez em tudo e ninguém nunca viu ele estudar. Pessoas assim têm tempo livre demais.", proxima: "c1_12" },
    c1_1c_1: { tipo: "narracao", texto: "Ela abraça as duas. A Mio protesta. A Hana fica dura e depois desiste.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "mio", sprite: "mio", texto: "Isso não é relatório. Isso é suborno com abraço.", proxima: "c1_1c_3" },
    c1_1c_3: { quem: "eu", texto: "Funciona?", proxima: "c1_1c_4" },
    c1_1c_4: { quem: "mio", sprite: "mio", texto: "...Funciona. Mas eu continuo cobrando.", proxima: "c1_12" },

    // (todas as opções continuam aqui)
    c1_12: { quem: "hana", sprite: "hana", texto: "Uma coisa. Se essa pessoa não pode mais usar a Sayuri contra você, ela vai usar outra coisa. Pessoas organizadas sempre têm um plano B. Eu tenho plano B pra tudo.", proxima: "c1_13" },
    c1_13: { tipo: "pensamento", texto: "A Hana. Ela não sabe da fábrica, nem da viagem, nem da força. Ela chegou na mesma conclusão que eu com uma tabela de três linhas.", proxima: "c2_01" },

    /* =================== CENA 2 — UM POR UM =================== */
    // Cenário: vários (segunda a quarta). Música: baixo grave, um toque a cada notícia.
    c2_01: { tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Segunda, 22h14 — Cena 2", sprite: null, texto: "Segunda à noite. Ela está no quarto quando o celular vibra. O Victor. Ele nunca manda mensagem depois das dez. Às dez ele está na doca.", proxima: "c2_02" },
    c2_02: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Fui demitido. Da doca. Agora. No meio do turno. O encarregado disse “ordem de cima”. Eu perguntei de quem. Ele disse que não podia falar. Ele estava com vergonha. Eu vi.", proxima: "c2_03" },
    c2_03: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Dois anos. Nunca faltei. Nunca quebrei um tomate. Nem quando eu dormia em pé.", proxima: "c2_04" },
    c2_04: { tipo: "pensamento", texto: "Ordem de cima. Um dia depois do último andar.", proxima: "c2_05" },
    c2_05: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Terça, 7h20", texto: "Terça. Sete e vinte. A SN está no portão quando o Ryuji chega. A pé. Correndo. Sem moto. Sem capacete. Com a faixa na testa torta e a cara vermelha de raiva.", proxima: "c2_06" },
    c2_06: { quem: "ryuji", sprite: "ryuji", texto: "Levaram a Relâmpago. Blitz. Na rua da padaria. Às seis e cinquenta. A rua da padaria nunca tem blitz. Nunca. Eu passo lá todo dia há um ano.", proxima: "c2_07" },
    c2_07: { quem: "ryuji", sprite: "ryuji", texto: "O policial nem olhou pros outros carros. Ele foi direto em mim. Ele sabia o meu nome. Ele sabia que o documento estava atrasado.", proxima: "c2_08" },
    c2_08: { tipo: "narracao", texto: "Ele chuta o poste do portão. Machuca o pé. Não reclama. O Ryuji sempre reclama.", proxima: "c2_09" },
    c2_09: { tipo: "pensamento", texto: "Alguém avisou a blitz onde ele passa. E quando. Alguém que sabe que ele corre todo dia às seis. Que mandou um carro preto ficar olhando ele correr.", proxima: "c2_10" },
    c2_10: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Terça, 17h", sprite: "blake", texto: "Terça à tarde. O Blake não aparece no treino da arquibancada. O Kaito manda mensagem no grupo da gangue, que o Ryuji encaminha para ela sem pedir licença: uma foto. A porta da livraria do shopping. Com uma folha colada no vidro.", proxima: "c2_11" },
    c2_11: { tipo: "narracao", efeito: "eco", texto: "“Encerramento das atividades. O imóvel foi vendido. Agradecemos os anos de leitura.”", proxima: "c2_12" },
    c2_12: { quem: "mensagem", rotulo: "Mensagem — Blake (no grupo)", texto: "A dona chorou. Ela disse que não queria vender. Disseram que, se ela não vendesse, aumentavam o aluguel em quatro vezes. Ela tem setenta e um anos.", proxima: "c2_13" },
    c2_13: { quem: "mensagem", rotulo: "Mensagem — Blake (no grupo)", texto: "Ela me deu a poltrona. A velha. Do canto. Disse que eu era o único que sentava nela direito.", proxima: "c2_14" },
    c2_14: { tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", legenda: "Quarta, 7h", sprite: "kaito", texto: "Quarta. Sete horas. O Kaito está na frente do prédio dela. Como todo dia. Sem pão de queijo. Com uma folha de papel na mão, dobrada em quatro, apertada.", proxima: "c2_15" },
    c2_15: { tipo: "narracao", texto: "Ele não fala bom dia. Ele estende a folha.", proxima: "c2_16" },
    c2_16: { tipo: "narracao", texto: "É um aviso. De despejo. A lojinha do tio. O prédio da esquina, onde a lojinha está há vinte e dois anos, foi comprado. O novo dono quer o imóvel vazio em trinta dias.", proxima: "c2_17" },
    c2_17: { tipo: "narracao", texto: "No canto de cima da folha, um logotipo pequeno. Um rei de xadrez dentro de um quadrado.", proxima: "c2_18" },
    c2_18: { tipo: "pensamento", texto: "O mesmo. O mesmo do papel que ele rasgou no último andar. A dívida do pai da Sayuri tinha esse rei no canto.", proxima: "c2_19" },
    c2_19: { quem: "kaito", sprite: "kaito", texto: "O tio não dormiu. Ele ficou sentado no banquinho da cozinha a noite inteira. Olhando pra panela de caldo. Ele faz esse caldo desde antes de eu nascer.", proxima: "c2_20" },
    c2_20: { quem: "kaito", sprite: "kaito", texto: "Victor. Ryuji. Blake. Eu. Em três dias. Ninguém levou um soco. Ninguém brigou com ninguém. E a gente está caindo.", proxima: "c2_21" },
    c2_21: { tipo: "narracao", texto: "Ele fala isso baixo. Do jeito que fala quando está com tanta raiva que a raiva fica quieta.", proxima: "c2_cam1" },
    c2_cam1: { caminhos: [
      { flag: "Contou_carro_Kaito", proxima: "c2_sabe_ren" },
      { flag: "Victor_conta_Kaito", proxima: "c2_sabe_ren" }
    ], proxima: "c2_nao_sabe" },
    c2_sabe_ren: { quem: "kaito", sprite: "kaito", texto: "Sakuma. O Victor me falou do nome. Você me falou do carro. É ele. É o Ren. Ele não está brigando com a gente. Ele está comprando a gente.", proxima: "c2_22" },
    c2_nao_sabe: { quem: "kaito", sprite: "kaito", texto: "Eu não sei quem é. Mas é a mesma pessoa. Tem que ser. Ninguém tem tanto azar em três dias.", proxima: "c2_nao_sabe2" },
    c2_nao_sabe2: { tipo: "narracao", texto: "Ela olha para o logotipo. Ela sabe quem é. Ele não sabe que ela sabe.", proxima: "c2_22" },
    c2_22: { quem: "kaito", sprite: "kaito", texto: "Hoje à noite. Lojinha. Todo mundo. Você também.", proxima: "c2_23" },
    c2_23: { tipo: "narracao", texto: "Ele não pergunta se ela quer ir. Ele fala como quem já contou com ela. Ela percebe. Ele nunca tinha contado com ela pra nada de gangue. Ele sempre deixou ela de fora.", proxima: "c2_24" },
    c2_24: { quem: "eu", texto: "Eu vou.", proxima: "c3_01" },

    /* =================== CENA 3 — A REUNIÃO =================== */
    // Cenário: lojinha de lámen do tio, quarta à noite, depois de fechar (usa "beco-mercado"). FORA da escola.
    // Música: baixo lento, depois silêncio.
    c3_01: { roupa: "fora", tipo: "narracao", cenario: "loja-lamen", transicao: "tempo", legenda: "Quarta, 22h — Cena 3", sprite: null, texto: "A lojinha está com a placa de “fechado”. A luz de dentro acesa. O balcão de madeira. A panela de caldo no fogo baixo, porque o tio não consegue desligar. Em cima do balcão, o aviso de despejo, aberto, com um copo de água em cima para não voar.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "Nos banquinhos: o Victor, sem pirulito, de braços cruzados. O Ryuji, de faixa, batendo o pé no chão sem parar. O Blake, ocupando dois banquinhos, quieto. E, atrás do balcão, o Kaito, de avental, mexendo uma panela que não precisa ser mexida.", proxima: "c3_cam_rota" },
    c3_cam_rota: { caminhos: [
      { flag: "Rota_Takeo", proxima: "c3_takeo_vem" }
    ], proxima: "c3_03" },
    c3_takeo_vem: { tipo: "narracao", sprite: "takeo", texto: "E, do lado dela, o Takeo. Ele veio junto. Ele é da gangue, mas anda sumido faz semanas, e ninguém cobrou. Hoje ele apareceu. Ele disse “eu não sei brigar, mas eu sei pesquisar” e enfiou na mochila uma pasta de plástico cheia de folhas impressas da biblioteca.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", sprite: "tio_kaito", texto: "O tio do Kaito está sentado no banquinho da cozinha, de boné, com um cigarro apagado na boca. Ele olha para a SN quando ela entra. Faz um aceno de cabeça. Como quem cumprimenta alguém da casa.", proxima: "c3_04" },
    c3_04: { quem: "victor", sprite: "victor", texto: "Eu digo pra gente ir atrás da Midorata. Agora. Hoje. Quebrar tudo.", proxima: "c3_05" },
    c3_05: { quem: "ryuji", sprite: "ryuji", texto: "E quebrar o quê, Victor? A Midorata não demitiu você. A Midorata não levou a minha moto. Foi um policial. Com papel. Com carimbo.", proxima: "c3_06" },
    c3_06: { quem: "victor", sprite: "victor", texto: "Então eu quebro o carimbo!", proxima: "c3_07" },
    c3_07: { quem: "blake", sprite: "blake", texto: "Não tem em quem bater.", proxima: "c3_08" },
    c3_08: { tipo: "narracao", texto: "O Blake fala isso e a lojinha fica em silêncio. Porque é verdade. Porque ele quase nunca fala. Porque quando ele fala, é a coisa que todo mundo estava pensando.", proxima: "c3_09" },
    c3_09: { quem: "kaito", sprite: "kaito", texto: "Isso não é briga. É xadrez.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", sprite: null, texto: "Todos olham para o Kaito. E o Kaito olha para ela.", proxima: "c3_11" },
    c3_11: { tipo: "pensamento", texto: "Eles não sabem do último andar. Não todos. Não tudo. Eles estão perdidos porque estão jogando um jogo que ninguém explicou as regras.", proxima: "c3_12" },
    c3_12: { tipo: "pensamento", texto: "Eu sei as regras. Ou parte delas. Se eu contar, eles entram de vez no jogo dele. Se eu não contar, eles perdem sem saber pra quem.", proxima: "c3_esc2" },

    // ▶ ESCOLHA 2 — Contar para a gangue?
    c3_esc2: { escolhas: [
      { texto: "A. Contar tudo o que sabe do Sakuma. O pai que empresta. O filho que manda. O último andar. O logotipo.", proxima: "c3_2a_1", pontos: { kaito: 1, blake: 1, ryuji: 1, victor: 1 }, flags: ["Contou_Sakuma_gangue"] },
      { texto: "B. Contar o nome e o logotipo. Guardar o último andar. “Eu tenho meus motivos.”", proxima: "c3_2b_1", pontos: { desvio: 1 }, flags: ["Meio_Sakuma_gangue"] },
      { texto: "C. “Antes de qualquer coisa: ninguém bate em ninguém. Prometam. Ele quer que vocês batam.”", proxima: "c3_2c_1", pontos: { kaito: 2 }, flags: ["Ninguem_bate"] }
    ]},
    c3_2a_1: { tipo: "narracao", texto: "Ela conta. Em pé, do lado do balcão. Sem enfeite. O pai que empresta dinheiro. O filho que usa os homens do pai. A Sayuri. O balde. O carro. O último andar. A dívida rasgada. O logotipo.", proxima: "c3_2a_2" },
    c3_2a_2: { tipo: "narracao", texto: "Ela não conta da viagem no tempo. Nem do bolinho de frango. Isso é dela.", proxima: "c3_2a_3" },
    c3_2a_3: { quem: "ryuji", sprite: "ryuji", texto: "Você foi num estacionamento. Sozinha. Encontrar o Ren. Na sexta. E não falou nada pra ninguém?", proxima: "c3_2a_4" },
    c3_2a_4: { quem: "eu", texto: "Eu fui com a Sayuri.", proxima: "c3_2a_5" },
    c3_2a_5: { quem: "victor", sprite: "victor", texto: "Com a Sayuri. A do balde. Isso é pior.", proxima: "c3_2a_6" },
    c3_2a_6: { tipo: "narracao", sprite: "kaito", texto: "O Kaito não fala nada. Ele já sabia de uma parte. Agora sabe de tudo. Ele fica olhando para o logotipo do rei no aviso de despejo. Muito tempo.", proxima: "c3_13" },
    c3_2b_1: { tipo: "narracao", texto: "Ela pega o aviso de despejo. Aponta para o logotipo.", proxima: "c3_2b_2" },
    c3_2b_2: { quem: "eu", texto: "Sakuma. O pai do Ren. Ele empresta dinheiro. Ele compra prédio. Ele compra gente. O Ren usa tudo que o pai tem como se fosse peça dele.", proxima: "c3_2b_3" },
    c3_2b_3: { quem: "blake", sprite: "blake", texto: "Como você sabe?", proxima: "c3_2b_4" },
    c3_2b_4: { quem: "eu", texto: "Eu tenho meus motivos.", proxima: "c3_2b_5" },
    c3_2b_5: { tipo: "narracao", texto: "O Blake olha para ela. Depois para o Kaito. O Kaito faz que sim com a cabeça, só um pouco. Como quem diz: confia. O Blake confia.", proxima: "c3_13" },
    c3_2c_1: { tipo: "narracao", texto: "Silêncio. O Victor abre a boca para protestar. O Ryuji olha para o Kaito.", proxima: "c3_2c_2" },
    c3_2c_2: { quem: "eu", texto: "Ele quer que vocês percam a cabeça. Que vocês batam em alguém da Midorata, numa rua com câmera. Aí vem polícia, vem escola, vem expulsão. Ele não precisa encostar em vocês. Vocês fazem o trabalho por ele.", proxima: "c3_2c_3" },
    c3_2c_3: { quem: "kaito", sprite: "kaito", texto: "...Ela tem razão. Ninguém bate em ninguém. Até eu dizer.", proxima: "c3_2c_4" },
    c3_2c_4: { quem: "victor", sprite: "victor", texto: "Isso é muito difícil pra mim, líder.", proxima: "c3_2c_5" },
    c3_2c_5: { quem: "kaito", sprite: "kaito", texto: "Eu sei. Você tem hobby.", proxima: "c3_13" },

    // (todas as opções continuam aqui)
    c3_13: { tipo: "narracao", sprite: "tio_kaito", texto: "O tio do Kaito tira o cigarro apagado da boca. Pela primeira vez na noite, fala.", proxima: "c3_14" },
    c3_14: { quem: "tio_kaito", sprite: "tio_kaito", texto: "Quando eu era novo, um homem desses quis comprar a minha primeira barraca. Na feira. Eu disse não. Ele comprou a feira inteira. Eu fiquei sem feira.", proxima: "c3_15" },
    c3_15: { quem: "tio_kaito", sprite: "tio_kaito", texto: "Homem desses não ganha porque é forte. Ganha porque a gente briga sozinho. Cada um no seu canto. Com vergonha de pedir ajuda.", proxima: "c3_16" },
    c3_16: { tipo: "narracao", texto: "Ele coloca o cigarro apagado de volta. Olha para o sobrinho.", proxima: "c3_17" },
    c3_17: { quem: "tio_kaito", sprite: "tio_kaito", texto: "Você nunca pede ajuda. Nem pra mim. Talvez seja a hora.", proxima: "c3_18" },
    c3_18: { tipo: "narracao", sprite: "kaito", texto: "O Kaito fica parado atrás do balcão. Com a colher de pau na mão. O líder que nunca pede ajuda. Ele olha para o Victor. Para o Ryuji. Para o Blake. Para ela.", proxima: "c3_19" },
    c3_19: { quem: "kaito", sprite: "kaito", texto: "...Eu não sei fazer isso.", proxima: "c3_20" },
    c3_20: { quem: "blake", sprite: "blake", texto: "A gente sabe. Você só fala o que precisa. A gente faz.", proxima: "c3_21" },
    c3_21: { tipo: "narracao", sprite: null, texto: "Eles dividem. Sem gritar. Pela primeira vez, a gangue do Kaito senta em volta de um balcão e faz um plano que não tem soco.", proxima: "c3_22" },
    c3_22: { tipo: "narracao", texto: "O Ryuji vai atrás de um advogado de graça da faculdade de direito, porque a mãe dele conhece uma professora. O Victor vai falar com os outros trabalhadores da doca, porque ninguém foi demitido além dele. O Blake vai ajudar a dona da livraria a ler o contrato, palavra por palavra. O Kaito vai com o tio na prefeitura.", proxima: "c3_23" },
    c3_23: { quem: "ryuji", sprite: "ryuji", texto: "E a SN?", proxima: "c3_24" },
    c3_24: { tipo: "narracao", sprite: null, texto: "Todos olham para ela.", proxima: "c3_25" },
    c3_25: { tipo: "pensamento", texto: "Eu. Eu vou descobrir por quê. Por que agora. Por que eles. O Ren não faz nada sem motivo. E o motivo... eu acho que o motivo sou eu.", proxima: "c3_26" },
    c3_26: { tipo: "pensamento", texto: "“Você anda com gente que fica de costas.” Ele não está derrubando a gangue do Kaito por causa de território. Nem de briga. É outra coisa. É pessoal. Comigo no meio.", proxima: "c3_27" },
    c3_27: { quem: "eu", texto: "Eu descubro o porquê.", proxima: "c3_28" },
    c3_28: { tipo: "narracao", texto: "Ninguém pergunta como. Eles já aprenderam que ela faz as coisas do jeito dela.", proxima: "r_cam" },

    /* =================== ROTA — DEPOIS DA REUNIÃO =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { roupa: "fora", tipo: "narracao", cenario: "loja-lamen-noite", transicao: "tempo", sprite: "kaito", texto: "Depois que todo mundo vai embora, ela fica. O tio vai dormir no banquinho da cozinha. O Kaito apaga a luz do salão. Fica só a luz amarela de cima do fogão.", proxima: "rk_02" },
    rk_02: { tipo: "narracao", texto: "Ele senta no chão, encostado no balcão. Ela senta do lado. O cheiro de caldo. A panela fazendo barulho baixinho.", proxima: "rk_03" },
    rk_03: { quem: "kaito", sprite: "kaito", texto: "Eu cresci aqui. Eu fiz lição de casa nesse balcão. Eu dormi embaixo dele quando tinha pesadelo. Eu aprendi a cortar cebolinha antes de aprender a andar de bicicleta.", proxima: "rk_04" },
    rk_04: { quem: "kaito", sprite: "kaito", texto: "Trinta dias. E ele vai virar uma loja de celular. Ou um estacionamento. Ou nada.", proxima: "rk_05" },
    rk_05: { tipo: "narracao", texto: "Ele não chora. O Kaito não chora. Ela sabe. Ela viu ele com o supercílio aberto. Ele não chora. Mas ele fica olhando para o fogão como quem quer gravar.", proxima: "rk_06" },
    rk_06: { quem: "kaito", sprite: "kaito", texto: "Por que eu? Por que a gente? A gente nunca mexeu com o Ren. Nem na fábrica. Ele que mandou.", proxima: "rk_07" },
    rk_07: { tipo: "pensamento", texto: "Por minha causa. Eu acho. Eu não tenho certeza. Mas eu acho.", proxima: "rk_esc" },

    // ▶ ESCOLHA — Rota Kaito
    rk_esc: { escolhas: [
      { texto: "A. “Eu acho que é por minha causa, Kaito.”", proxima: "rk_a1", pontos: { kaito: 3 }, flags: ["Culpa_SN_Kaito"] },
      { texto: "B. “Essa lojinha não vai virar nada. Eu prometo.”", proxima: "rk_b1", pontos: { kaito: 3 }, flags: ["Promessa_lojinha"] },
      { texto: "C. Não falar nada. Levantar, pegar duas tigelas, servir caldo pros dois. Sentar de novo.", proxima: "rk_c1", pontos: { kaito: 3 }, flags: ["Caldo_chao"] }
    ]},
    rk_a1: { tipo: "narracao", texto: "Ele vira a cabeça. Olha para ela. Na luz amarela do fogão.", proxima: "rk_a2" },
    rk_a2: { quem: "kaito", sprite: "kaito", texto: "Por sua causa?", proxima: "rk_a3" },
    rk_a3: { quem: "eu", texto: "Ele olhou pro meu capacete. Muito tempo. E disse que eu ando com gente que fica de costas. Uma semana depois, vocês começam a cair.", proxima: "rk_a4" },
    rk_a4: { tipo: "narracao", texto: "O Kaito fica muito quieto. Ela vê ele entender alguma coisa. Uma coisa que ele não fala.", proxima: "rk_a5" },
    rk_a5: { quem: "kaito", sprite: "kaito", texto: "Então ele vai ter que derrubar a lojinha inteira. Tijolo por tijolo. Porque você não sai daqui.", proxima: "rk_a6" },
    rk_a6: { tipo: "narracao", texto: "Ele fala isso olhando para o fogão. Não para ela. Mas a mão dele, no chão, encosta na mão dela. E fica.", proxima: "r_fim" },
    rk_b1: { quem: "kaito", sprite: "kaito", texto: "Você não pode prometer isso.", proxima: "rk_b2" },
    rk_b2: { quem: "eu", texto: "Posso. Eu já segurei coisa mais pesada que um prédio.", proxima: "rk_b3" },
    rk_b3: { tipo: "narracao", texto: "Ele olha para ela. Ele sabe da barra. Ele sabe do boné. Ele ri. Pelo nariz. Cansado. Mas ri.", proxima: "rk_b4" },
    rk_b4: { quem: "kaito", sprite: "kaito", texto: "Se você segurar o prédio, eu seguro o caldo. Fechado.", proxima: "r_fim" },
    rk_c1: { tipo: "narracao", texto: "Ela levanta. Pega duas tigelas do escorredor. Serve o caldo da panela que o tio não consegue desligar. Coloca cebolinha. Muita cebolinha. Senta de novo. Entrega uma.", proxima: "rk_c2" },
    rk_c2: { tipo: "narracao", texto: "Ele olha para a tigela. Para a cebolinha. Para ela. E toma. Os dois tomando caldo no chão da lojinha, no escuro, sem falar nada.", proxima: "rk_c3" },
    rk_c3: { quem: "kaito", sprite: "kaito", texto: "...Você colocou cebolinha demais.", proxima: "rk_c4" },
    rk_c4: { quem: "eu", texto: "Você gosta de cebolinha demais.", proxima: "rk_c5" },
    rk_c5: { quem: "kaito", sprite: "kaito", texto: "Eu gosto.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { roupa: "fora", tipo: "narracao", cenario: "frente-casa-sn-noite", transicao: "tempo", sprite: "takeo", texto: "Na volta, o Takeo leva ela até o prédio. A pé. Com a pasta de plástico embaixo do braço. Ele não mostrou na reunião. Ele esperou.", proxima: "rt_02" },
    rt_02: { quem: "takeo", sprite: "takeo", texto: "Eu passei a tarde inteira na biblioteca. Na parte de jornal velho. A moça da biblioteca me ajudou. Eu disse que era trabalho de escola. Não era.", proxima: "rt_03" },
    rt_03: { tipo: "narracao", texto: "Ele abre a pasta embaixo do poste. Folhas impressas. Notícias velhas. Uma empresa: Sakuma Participações. Prédios comprados. Feiras compradas. Uma galeria inteira comprada há dez anos.", proxima: "rt_04" },
    rt_04: { quem: "takeo", sprite: "takeo", texto: "Eles fazem isso faz tempo. Compram tudo em volta de uma pessoa, até a pessoa não ter onde ficar. Aí ela vende barato ou vai embora.", proxima: "rt_05" },
    rt_05: { tipo: "narracao", texto: "Na última folha, uma foto pequena, de jornal de bairro, de doze anos atrás. A inauguração da praça do balanço, reformada. Um homem de terno cortando a fita. E, do lado dele, de mão dada, um menino de uns seis anos. Arrumado demais para uma praça.", proxima: "rt_cam" },
    rt_cam: { caminhos: [
      { flag: "Praca_lembra_Takeo", proxima: "rt_lembra" }
    ], proxima: "rt_06" },
    rt_lembra: { quem: "takeo", sprite: "takeo", texto: "...Esse é o menino do banco. O que só olhava. Eu falei dele na sexta. Eu acho que é ele.", proxima: "rt_06" },
    rt_06: { tipo: "pensamento", texto: "A praça do balanço. A nossa praça. O pai dele reformou. Ele estava lá.", proxima: "rt_07" },
    rt_07: { quem: "takeo", sprite: "takeo", texto: "Eu não sei brigar. Mas eu sei achar as coisas. Se ele está fazendo isso com vocês por algum motivo, o motivo está escrito em algum lugar. Tudo está escrito em algum lugar.", proxima: "rt_esc" },

    // ▶ ESCOLHA — Rota Takeo
    rt_esc: { escolhas: [
      { texto: "A. “Você é a pessoa mais corajosa que eu conheço. E você nem bate em ninguém.”", proxima: "rt_a1", pontos: { takeo: 3 }, flags: ["Corajoso_Takeo"] },
      { texto: "B. Pegar a foto da praça. “Me empresta essa. Eu preciso lembrar de uma coisa.”", proxima: "rt_b1", pontos: { takeo: 2 }, flags: ["Foto_praca_SN"] },
      { texto: "C. Segurar a mão dele, que está segurando a pasta. “A gente procura junto.”", proxima: "rt_c1", pontos: { takeo: 3 }, flags: ["Procura_junto_Takeo"] }
    ]},
    rt_a1: { tipo: "narracao", texto: "O Takeo fica vermelho. Embaixo do poste, com a pasta na mão.", proxima: "rt_a2" },
    rt_a2: { quem: "takeo", sprite: "takeo", texto: "Coragem de pesquisar jornal velho. Que coragem gigante.", proxima: "rt_a3" },
    rt_a3: { quem: "eu", texto: "É a que ninguém mais teve hoje.", proxima: "rt_a4" },
    rt_a4: { tipo: "narracao", texto: "Ele olha para ela. Para de achar graça. E fica com aquela cara. A de quando alguém coloca uma coisa no lugar certo.", proxima: "r_fim" },
    rt_b1: { tipo: "narracao", texto: "Ele entrega. Ela segura a foto embaixo do poste. O menino arrumado. A mão dada com o pai. Os olhos parados. Mesmo com seis anos, os olhos parados.", proxima: "rt_b2" },
    rt_b2: { tipo: "pensamento", texto: "Eu não lembro. Eu não lembro desse menino. Mas eu conheço esses olhos. Da carteira perto da porta.", proxima: "r_fim" },
    rt_c1: { tipo: "narracao", texto: "Ela segura a mão dele. Por cima da pasta. Ele para de respirar. Depois respira. E aperta de volta.", proxima: "rt_c2" },
    rt_c2: { quem: "takeo", sprite: "takeo", texto: "Junto. Amanhã. Na biblioteca. Eu reservo a mesa do canto. A que tem tomada.", proxima: "rt_c3" },
    rt_c3: { quem: "eu", texto: "Você reserva mesa na biblioteca?", proxima: "rt_c4" },
    rt_c4: { quem: "takeo", sprite: "takeo", texto: "Eu sou do plantão. Eu tenho poder.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: "fora", tipo: "narracao", cenario: "frente-lamen-noite", transicao: "tempo", sprite: "blake", texto: "Na saída da lojinha, o Blake está do lado da moto preta fosca. Na garupa, amarrada com três cordas de elástico, uma poltrona velha de veludo marrom. A poltrona da livraria.", proxima: "rb_02" },
    rb_02: { quem: "eu", texto: "Você trouxe a poltrona pra reunião?", proxima: "rb_03" },
    rb_03: { quem: "blake", sprite: "blake", texto: "Eu não tinha onde deixar. Ela não cabe no meu quarto. Os gêmeos querem que ela fique na sala. A minha mãe quer que ela fique na rua.", proxima: "rb_04" },
    rb_04: { tipo: "narracao", texto: "Ele passa a mão no braço da poltrona. Gasto. Com um rasgo pequeno que alguém costurou com linha de outra cor.", proxima: "rb_05" },
    rb_05: { quem: "blake", sprite: "blake", texto: "Eu ia ter uma livraria. Lembra? Pequena. Com poltrona velha e gato. Eu ia trabalhar lá até ter dinheiro pra ter a minha. A dona disse que me vendia barato quando se aposentasse.", proxima: "rb_06" },
    rb_06: { quem: "blake", sprite: "blake", texto: "Agora eu tenho a poltrona. Só a poltrona.", proxima: "rb_07" },
    rb_07: { tipo: "narracao", texto: "Ele fala isso sem drama. Do jeito dele. Mas ela vê. O Blake perdeu o sonho em uma tarde. E veio para a reunião carregando o que sobrou.", proxima: "rb_esc" },

    // ▶ ESCOLHA — Rota Blake
    rb_esc: { escolhas: [
      { texto: "A. Sentar na poltrona. Ali mesmo, na garupa da moto. “Começa daqui.”", proxima: "rb_a1", pontos: { blake: 3 }, flags: ["Sentou_poltrona"] },
      { texto: "B. “A dona assinou alguma coisa? Lê o contrato comigo amanhã. Palavra por palavra.”", proxima: "rb_b1", pontos: { blake: 2 }, flags: ["Contrato_Blake"] },
      { texto: "C. “Se a sua mãe quer na rua, coloca no meu quarto. Até você ter a livraria.”", proxima: "rb_c1", pontos: { blake: 3 }, flags: ["Poltrona_quarto_SN"] }
    ]},
    rb_a1: { tipo: "narracao", texto: "Ela sobe na moto. Senta na poltrona amarrada na garupa. Fica lá em cima, de pernas cruzadas, como uma rainha num trono ridículo.", proxima: "rb_a2" },
    rb_a2: { quem: "eu", texto: "Começa daqui. A primeira poltrona da livraria. Agora só faltam os livros. E o gato. E as paredes.", proxima: "rb_a3" },
    rb_a3: { tipo: "narracao", texto: "O Blake olha para ela lá em cima. E ri. O riso grave. Alto. Tão alto que o tio do Kaito abre a janela da lojinha para ver o que aconteceu.", proxima: "rb_a4" },
    rb_a4: { quem: "blake", sprite: "blake", texto: "O gato vai ter nome de coisa de física. Você escolhe.", proxima: "r_fim" },
    rb_b1: { quem: "blake", sprite: "blake", texto: "Contrato tem palavra difícil.", proxima: "rb_b2" },
    rb_b2: { quem: "eu", texto: "Você entende na terceira vez. Eu explico três vezes.", proxima: "rb_b3" },
    rb_b3: { tipo: "narracao", texto: "Ele fica olhando para ela. Ela lembra da tarde antes do festival. Uma vez só. Ele também lembra.", proxima: "rb_b4" },
    rb_b4: { quem: "blake", sprite: "blake", texto: "...Amanhã. Depois da aula. Eu levo o contrato. Você leva a paciência.", proxima: "r_fim" },
    rb_c1: { tipo: "narracao", texto: "Ele para. Olha para ela. Para a poltrona. Para ela.", proxima: "rb_c2" },
    rb_c2: { quem: "blake", sprite: "blake", texto: "No seu quarto. A minha poltrona.", proxima: "rb_c3" },
    rb_c3: { quem: "eu", texto: "A sua mãe ia colocar na rua.", proxima: "rb_c4" },
    rb_c4: { tipo: "narracao", cenario: "frente-casa-sn-noite", transicao: "tempo", sprite: "mae", texto: "Ele não responde. Mas, uma hora depois, ele está subindo a escada do prédio dela com uma poltrona de veludo nas costas. A mãe dela abre a porta, de pijama. Olha para ele. Para a poltrona.", proxima: "rb_c5" },
    rb_c5: { quem: "mae", sprite: "mae", texto: "...Hm.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { roupa: "fora", tipo: "narracao", cenario: "frente-lamen-noite", transicao: "tempo", sprite: "ryuji", texto: "Na saída da lojinha, o Ryuji está parado na calçada, olhando para o lugar vazio onde a Relâmpago costumava ficar estacionada torta.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", sprite: "ryuji", texto: "Eu economizei dois anos pra comprar ela. Dois anos de mesada. De entregar panfleto no sinal. De lavar carro do vizinho. Ela era amarela porque era a mais barata. Ninguém queria uma moto amarela.", proxima: "rr_03" },
    rr_03: { quem: "ryuji", sprite: "ryuji", texto: "Eu inventei que era dourada pra não ficar triste.", proxima: "rr_04" },
    rr_04: { tipo: "narracao", texto: "Ele fala isso sem piada. A segunda vez na vida que ela ouve o Ryuji sem piada. A primeira foi no quartel, no simulado.", proxima: "rr_05" },
    rr_05: { quem: "ryuji", sprite: "ryuji", texto: "E agora eu não tenho moto pra ir pro curso preparatório de bombeiro, que começa mês que vem. Do outro lado da cidade. Às seis da manhã.", proxima: "rr_06" },
    rr_06: { quem: "ryuji", sprite: "ryuji", texto: "Ele sabia disso também, né? Ele sabe tudo. Ele escolheu a coisa que mais doía.", proxima: "rr_esc" },

    // ▶ ESCOLHA — Rota Ryuji
    rr_esc: { escolhas: [
      { texto: "A. “Ela é dourada. Ela sempre foi dourada. A gente vai buscar ela.”", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Dourada_Ryuji"] },
      { texto: "B. “Até a moto voltar, eu corro com você até o curso. Às seis. Todo dia.”", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Correr_curso"] },
      { texto: "C. “Faz uma piada. Uma ruim. Pra eu saber que ele não levou isso também.”", proxima: "rr_c1", pontos: { ryuji: 2 }, flags: ["Piada_ruim_Ryuji"] }
    ]},
    rr_a1: { tipo: "narracao", texto: "O Ryuji olha para ela. Os olhos brilham. Ele vira o rosto rápido, para a rua.", proxima: "rr_a2" },
    rr_a2: { quem: "ryuji", sprite: "ryuji", texto: "...Dourada de luz.", proxima: "rr_a3" },
    rr_a3: { quem: "eu", texto: "Dourada de luz.", proxima: "rr_a4" },
    rr_a4: { quem: "ryuji", sprite: "ryuji", texto: "Se você falar isso perto do Victor, eu nego tudo.", proxima: "r_fim" },
    rr_b1: { quem: "ryuji", sprite: "ryuji", texto: "O curso é a quatorze quilômetros.", proxima: "rr_b2" },
    rr_b2: { quem: "eu", texto: "Eu sei.", proxima: "rr_b3" },
    rr_b3: { quem: "ryuji", sprite: "ryuji", texto: "Você vai correr quatorze quilômetros às seis da manhã comigo?", proxima: "rr_b4" },
    rr_b4: { quem: "eu", texto: "Eu vou chegar antes e te esperar na porta.", proxima: "rr_b5" },
    rr_b5: { tipo: "narracao", texto: "Ele ri. Depois para de rir. Ele olha para ela como olhou no quartel, sentado no chão embaixo do boneco.", proxima: "rr_b6" },
    rr_b6: { quem: "ryuji", sprite: "ryuji", texto: "Você é a coisa mais estranha que já aconteceu comigo. E eu tenho uma irmã de nove anos.", proxima: "r_fim" },
    rr_c1: { tipo: "narracao", texto: "Ele pensa. Muito. A cara séria. Depois respira fundo.", proxima: "rr_c2" },
    rr_c2: { quem: "ryuji", sprite: "ryuji", texto: "Por que a moto amarela foi presa? Porque ela não tinha documento. Mas ela tinha personalidade. E isso a polícia não aceita.", proxima: "rr_c3" },
    rr_c3: { tipo: "narracao", texto: "É uma piada horrível. Ela ri. Ele ri também. Os dois rindo na calçada, do lado do lugar vazio onde a moto ficava. Ele levou a moto. Não levou isso.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: "fora", tipo: "narracao", cenario: "frente-lamen-noite", transicao: "tempo", sprite: "victor", texto: "Na saída da lojinha, o Victor senta no meio-fio. Sem pirulito. Ele tira do bolso um pacote fechado de pirulito de morango. Fica olhando. Não abre.", proxima: "rv_02" },
    rv_02: { quem: "victor", sprite: "victor", texto: "Sem doca, não tem dinheiro pra peça. Sem peça, não tem oficina. Sem oficina, não tem placa com o nome da minha mãe.", proxima: "rv_03" },
    rv_03: { quem: "victor", sprite: "victor", texto: "E sem doca, a minha mãe volta a trabalhar em três lugares. Ela vai voltar a chorar quando ver o boletim. Só que dessa vez não vai ser por causa da nota.", proxima: "rv_04" },
    rv_04: { tipo: "narracao", texto: "Ele fala isso olhando para a rua. Ela senta do lado dele no meio-fio. O Victor sem piada. O Victor sem pirulito. É assustador.", proxima: "rv_05" },
    rv_05: { quem: "victor", sprite: "victor", texto: "Eu nunca fiz nada pro Ren. Eu nem falo com ele. Eu chamei ele de gatinho uma vez. No primeiro ano. Será que foi isso?", proxima: "rv_esc" },

    // ▶ ESCOLHA — Rota Victor
    rv_esc: { escolhas: [
      { texto: "A. Abrir o pacote de pirulito. Tirar um. Colocar na boca dele. “Agora você está pronto pra brigar.”", proxima: "rv_a1", pontos: { victor: 3 }, flags: ["Pirulito_meiofio"] },
      { texto: "B. “A oficina não precisa da doca. Precisa de cliente. E eu conheço uma gangue inteira de moto.”", proxima: "rv_b1", pontos: { victor: 3 }, flags: ["Clientes_oficina"] },
      { texto: "C. “Não foi por nada que você fez, Victor. Foi por mim. Eu acho.”", proxima: "rv_c1", pontos: { victor: 2 }, flags: ["Culpa_SN_Victor"] }
    ]},
    rv_a1: { tipo: "narracao", texto: "Ela abre o pacote. Tira um pirulito de morango. Desembrulha. Coloca na boca dele. Ele fica parado, de olho arregalado, com o pirulito na boca.", proxima: "rv_a2" },
    rv_a2: { quem: "victor", sprite: "victor", texto: "...Agora eu estou pronto. Pronto pra quê, eu não sei. Mas eu estou pronto.", proxima: "rv_a3" },
    rv_a3: { tipo: "narracao", texto: "O sorriso torto volta. Devagar. Igual um motor velho que liga na terceira tentativa.", proxima: "r_fim" },
    rv_b1: { tipo: "narracao", texto: "O Victor tira os olhos da rua. Olha para ela.", proxima: "rv_b2" },
    rv_b2: { quem: "eu", texto: "O Blake tem vibração no pedal direito faz dois meses. O farol do Ryuji vai cair. E o Kaito montou a dele com peça de ferro-velho. Isso é cliente pra um ano.", proxima: "rv_b3" },
    rv_b3: { quem: "victor", sprite: "victor", texto: "...Gatinha. SN. Você acabou de inventar uma empresa no meio-fio.", proxima: "rv_b4" },
    rv_b4: { quem: "eu", texto: "Gerente de marketing. Salário: sorvete. Você mesmo disse.", proxima: "r_fim" },
    rv_c1: { quem: "victor", sprite: "victor", texto: "Por você?", proxima: "rv_c2" },
    rv_c2: { tipo: "narracao", texto: "Ele pensa. Depois ri. Pela primeira vez na noite.", proxima: "rv_c3" },
    rv_c3: { quem: "victor", sprite: "victor", texto: "Então ótimo. Se é por você, eu perdi o emprego por um motivo bom. Melhor do que perder por chamar alguém de gatinho no primeiro ano.", proxima: "rv_c4" },
    rv_c4: { tipo: "narracao", texto: "Ele abre o pacote de pirulito. Tira dois. Um para ele. Um para ela.", proxima: "r_fim" },

    // (todas as rotas continuam aqui)
    r_fim: { tipo: "narracao", cenario: "quarto-sn-noite", sprite: null, transicao: "tempo", texto: "Mais tarde, em casa, ela demora para dormir. A cabeça girando. Uma lista. Victor, Ryuji, Blake, Kaito. Em três dias.", proxima: "c4_01" },

    /* =================== CENA 4 — O TABULEIRO =================== */
    // Cenário: sala de aula, quinta de manhã. Música: silêncio, depois uma nota grave.
    c4_01: { roupa: null, tipo: "narracao", cenario: "sala-de-aula", sprite: null, transicao: "tempo", legenda: "Quinta, 7h25 — Cena 4", texto: "Quinta. Ela chega na sala antes de todo mundo. Pela primeira vez no ano. Ela não sabe por quê. Ou sabe.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "A sala está vazia. As carteiras em fila. O quadro apagado. E, em cima da carteira perto da porta, um tabuleiro de xadrez de bolso. Aberto. No meio de uma partida.", proxima: "c4_03" },
    c4_03: { tipo: "narracao", texto: "O Ren não está. A mochila dele está pendurada na cadeira. Ele saiu. Ele deixou o tabuleiro ali. Aberto. Para quem chegasse primeiro.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", texto: "Ela chega perto. As peças pretas todas no lugar. As brancas não. Quatro peças brancas estão deitadas do lado do tabuleiro. Fora do jogo. Um cavalo. Uma torre. Um bispo. Outra torre.", proxima: "c4_05" },
    c4_05: { tipo: "pensamento", texto: "Quatro. Victor. Ryuji. Blake. Kaito. Uma pra cada um.", proxima: "c4_06" },
    c4_06: { tipo: "narracao", texto: "No tabuleiro, o rei branco ainda está de pé. Sozinho. Cercado por peões pretos. E a rainha branca não está do lado branco.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", texto: "Ela está do lado preto do tabuleiro. Em pé. Na casa do lado do rei preto. Como se fosse dele.", proxima: "c4_08" },
    c4_08: { tipo: "narracao", texto: "Ela fica olhando para a rainha branca no lado errado do tabuleiro. Muito tempo.", proxima: "c4_09" },
    c4_09: { tipo: "pensamento", texto: "Ele não derrubou a rainha. Ele trouxe ela pro lado dele.", proxima: "c4_10" },
    c4_10: { tipo: "pensamento", texto: "Não. Ele acha que trouxe.", proxima: "c4_esc3" },

    // ▶ ESCOLHA 3 — O tabuleiro
    c4_esc3: { escolhas: [
      { texto: "A. Pegar a rainha branca e colocar de volta do lado branco. Do lado do rei branco.", proxima: "c4_3a_1", pontos: { desvio: 1 }, flags: ["Rainha_de_volta"] },
      { texto: "B. Pegar as quatro peças brancas derrubadas e colocar de pé. Todas. De volta no tabuleiro.", proxima: "c4_3b_1", pontos: { desvio: 1 }, flags: ["Pecas_de_pe"] },
      { texto: "C. Não mexer em nada. Deixar o peão preto do bolso em cima do tabuleiro. Do lado do rei preto.", proxima: "c4_3c_1", pontos: { desvio: 2 }, flags: ["Peao_no_tabuleiro"] }
    ]},
    c4_3a_1: { tipo: "narracao", texto: "Ela pega a rainha branca. Atravessa o tabuleiro inteiro com ela. Coloca do lado do rei branco. Encostada. Firme.", proxima: "c4_11" },
    c4_3b_1: { tipo: "narracao", texto: "Ela pega as quatro. Uma por uma. O cavalo. A torre. O bispo. A outra torre. Coloca de pé no tabuleiro. Em volta do rei branco. Uma muralha pequena de madeira.", proxima: "c4_11" },
    c4_3c_1: { tipo: "narracao", texto: "Ela não mexe em nenhuma peça. Ela tira do bolso o peão preto da fábrica, o da lasca na base. E coloca em cima do tabuleiro. Bem na frente do rei preto. Devolvendo.", proxima: "c4_3c_cam" },
    c4_3c_cam: { caminhos: [
      { flag: "Pediu_peao_Ren", proxima: "c4_3c_dois" }
    ], proxima: "c4_11" },
    c4_3c_dois: { tipo: "narracao", texto: "Depois tira o segundo. O que ele deu no último andar. E coloca do lado do primeiro. Dois peões pretos na frente do rei preto. Os dois que ele usou contra ela.", proxima: "c4_11" },

    // (todas as opções continuam aqui)
    c4_11: { tipo: "narracao", texto: "Passos no corredor. Ela volta para a carteira dela. Senta. Abre o caderno.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", sprite: "ren", texto: "O Ren entra. Com um copo de café da cantina. Ele vai até a carteira dele. Para. Olha o tabuleiro.", proxima: "c4_13" },
    c4_13: { tipo: "narracao", texto: "Ele fica parado olhando muito tempo. O café na mão. Ele não olha para ela. Ele sabe que foi ela. Só tem ela na sala.", proxima: "c4_14" },
    c4_14: { tipo: "narracao", texto: "E então ele faz uma coisa que ela nunca viu ele fazer. Ele ri. Baixo. Sozinho. Um riso curto, de verdade. Não o sorriso educado. Outra coisa. Uma coisa que parece quase feliz.", proxima: "c4_15" },
    c4_15: { tipo: "narracao", texto: "Ele fecha o tabuleiro. Sem desfazer o que ela fez. Guarda no bolso do uniforme. Senta. Abre o livro de xadrez. Toma o café.", proxima: "c4_16" },
    c4_16: { tipo: "narracao", sprite: null, texto: "Não fala nada. A sala vai enchendo. A Mio chega gritando alguma coisa sobre rádio. A Hana chega com o caderno. A Sayuri chega com o laço rosa. Tudo normal.", proxima: "c4_17" },
    c4_17: { tipo: "pensamento", texto: "Ele riu. Ele gostou. Ele queria que eu respondesse.", proxima: "c4_18" },
    c4_18: { tipo: "pensamento", texto: "Ótimo. Eu respondi. Agora o jogo é dos dois lados.", proxima: "ep_fim" },

    // Fim do Capítulo 30 (crie a entrada "capitulo30" em dados/capitulos.js).
    ep_fim: { fim: "capitulo30" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 31 (anotações do roteiro)
 *  • A GANGUE CAINDO SEM SOCO (empresa Sakuma Participações, logotipo do rei no quadrado):
 *      Victor demitido da doca · Relâmpago do Ryuji apreendida (curso de bombeiro começa mês que vem)
 *      Livraria do Blake fechada (ele ficou com a poltrona) · Lojinha do tio do Kaito: 30 dias de despejo.
 *  • O plano sem soco: Ryuji → advogado da faculdade · Victor → trabalhadores da doca ·
 *    Blake → contrato da livraria · Kaito → prefeitura com o tio · SN → descobrir o porquê.
 *  • PISTA (não revelar ainda): o Ren quer derrubar a gangue do Kaito por causa da SN.
 *    Ele colocou a rainha branca do lado preto. Ele riu quando ela mexeu no tabuleiro.
 *  • PISTA de infância: a foto da inauguração da praça do balanço, com o pai do Ren e um menino
 *    de seis anos (Rota Takeo / Foto_praca_SN). A SN ainda não lembra.
 *  • A Mio e a Hana sabem do Ren (Contou_Ren_amigas / Nome_Ren_amigas). A Hana tem uma tabela nova.
 *  • O tio do Kaito: "Homem desses ganha porque a gente briga sozinho."
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 O que contar para a Mio e a Hana · 2 Contar para a gangue? · Rota (1 escolha por rota)
 *  3 O tabuleiro
 *
 * FLAGS NOVAS
 *  Contou_Ren_amigas · Nome_Ren_amigas · Protegeu_amigas · Contou_Sakuma_gangue · Meio_Sakuma_gangue
 *  Ninguem_bate · Culpa_SN_Kaito · Promessa_lojinha · Caldo_chao · Corajoso_Takeo · Foto_praca_SN
 *  Procura_junto_Takeo · Sentou_poltrona · Contrato_Blake · Poltrona_quarto_SN · Dourada_Ryuji
 *  Correr_curso · Piada_ruim_Ryuji · Pirulito_meiofio · Clientes_oficina · Culpa_SN_Victor
 *  Rainha_de_volta · Pecas_de_pe · Peao_no_tabuleiro
 */