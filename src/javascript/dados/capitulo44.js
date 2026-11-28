/*
 * =====================================================================
 *  CAPÍTULO 44 — Quatro da manhã
 *  Terça-feira, logo depois do Capítulo 43.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Cenas com todos os meninos em todas as rotas. Bloco de rota à noite.
 *
 *  CONTEXTO (Cap. 43)
 *    • Segunda: o Kaito não foi buscar a SN, foi buscar a Serena. A SN foi a pé. "Eu sou o quê?" / "O depois."
 *    • A força dela escapa com a raiva, sem controle (celular, caixote, portão, pia, maçaneta).
 *    • O Kaito disse que vai às sete. A SN não sabe se ele vai.
 *
 *  O QUE ACONTECE
 *    • 4h: ela não dorme mais. Deixa um bilhete pra mãe e vai pra lan house do bairro. Joga Arena dos Reinos sozinha
 *      até quase sete. Quebra o fone, o mouse. Vai direto pra escola. Não sabe se o Kaito foi.
 *    • O Kaito FOI. A mãe dela desceu e disse que ela saiu de madrugada. No portão: "Onde você estava?"
 *      A Serena, do lado, só faz perguntas inocentes. "Sozinha? Às quatro da manhã?"
 *    • A Serena, mais do que nunca: no intervalo, uma conta nova da rede de fofoca posta A FOTO (o polegar do Victor
 *      no rosto da SN, na garagem). A SN vê a foto pela primeira vez. Entende o Kaito. "Era isso?"
 *    • Ela quebra tudo. Corre. Desmorona atrás do depósito da educação física. Quem vai atrás é o REN. Só ele vê.
 *    • O Ren ajuda: não tem medo, não pergunta, dá o livro pra ela rasgar, e diz pro inspetor que foi ele.
 *    • Bloco de rota à noite.
 *
 *  REGRAS
 *    • Sala da SN: Takeo, Mio, Hana, Reina, Ren, Akane. Kaito, Blake, Ryuji, Victor e Serena são de outras salas.
 *    • Sem xadrez no Ren. O Ren não manda mensagem. Fala pouco. Sem narrar roupa. Sem flashback.
 *    • A Serena não explica plano. Ela pergunta, sorri e segura o braço do Kaito.
 *    • O Kaito: dúvida, não raiva da SN.
 *
 *  PERSONAGENS
 *    Mio, Hana, Reina, Kaito, Takeo, Victor, Blake, Ryuji, Ren, Serena.
 *    Sem sprite / rótulo: Victor, Ren, Mãe, Dono da lan house, Inspetor geral.
 *
 *  CENÁRIOS
 *    quarto-sn · beco-mercado (rua e lan house, como no Cap. 38) · saida-colegio · sala-de-aula · patio-fundos · corredor
 *
 *  Crie a entrada "capitulo44" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo44", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — QUATRO DA MANHÃ =================== */
    c1_01: { roupa: "escolar", tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Terça, 4h02 — Cena 1", sprite: null, texto: "Quatro e dois da manhã. Ela abre o olho no escuro e sabe, na mesma hora, que não vai dormir de novo. O corpo está cansado, mas a cabeça está acesa, como uma lâmpada que alguém esqueceu ligada.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "Ela fica deitada olhando para o teto. O celular rachado na mesinha. A maçaneta solta em cima da mesa da sala, ela sabe que está lá, mesmo sem ver.", proxima: "c1_03" },
    c1_03: { tipo: "pensamento", texto: "Daqui a três horas ele vai estar lá embaixo. Ou não vai. E eu vou ficar aqui, parada na sala, olhando pro relógio da cozinha de novo, igual ontem, igual uma boba.", proxima: "c1_04" },
    c1_04: { tipo: "pensamento", texto: "Não. Eu não vou ficar esperando pra descobrir.", proxima: "c1_05" },
    c1_05: { tipo: "narracao", texto: "Ela levanta. Pega a mochila, já arrumada desde a noite anterior. Na cozinha, no escuro, escreve um bilhete na folha do bloquinho do mercado e prende na geladeira com o ímã de abacaxi.", proxima: "c1_06" },
    c1_06: { quem: "mensagem", rotulo: "Bilhete na geladeira", texto: "Mãe, saí cedo. Vou direto pra escola. Tô bem. Não precisa ligar.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", texto: "Ela olha para o “tô bem” um tempo. Depois deixa assim mesmo. Fecha a porta de casa com dois dedos, devagar, por causa da maçaneta que não existe mais.", proxima: "c2_01" },

    /* =================== CENA 2 — A LAN =================== */
    c2_01: { tipo: "narracao", cenario: "lan-house", transicao: "tempo", legenda: "Lan house, 4h25 — Cena 2", sprite: null, texto: "A rua está vazia e azul, aquele azul de antes do sol. A lan house do bairro fica aberta a noite inteira, com a porta de vidro meio embaçada e a luz verde do letreiro piscando o “N” que já queimou faz meses.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", texto: "Lá dentro, só três pessoas. Dois meninos mais velhos jogando de fone, quietos como estátua. E o dono, atrás do balcão, enrolado num cobertor, com um copo de café do tamanho de um balde.", proxima: "c2_03" },
    c2_03: { quem: "desconhecido", rotulo: "Dono da lan house", texto: "Ué. A menina do torneio. Às quatro e meia da manhã. Terça-feira. Eu não vou perguntar. Máquina do fundo?", proxima: "c2_04" },
    c2_04: { quem: "eu", texto: "Máquina do fundo. Até as sete.", proxima: "c2_05" },
    c2_05: { tipo: "narracao", texto: "Ela senta na cadeira do fundo, a mesma do torneio, onde o time inteiro estava pulando no bolo de abraço. Coloca o fone. Abre Arena dos Reinos. Loga.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", texto: "E, na mesma hora, igual no torneio, alguma coisa muda nos ombros dela. Só que dessa vez ninguém do lado chega a cadeira para longe. Não tem ninguém do lado.", proxima: "c2_07" },
    c2_07: { tipo: "narracao", texto: "Partida ranqueada. Sozinha, sem time, com quatro desconhecidos. Ela não fala no chat. Ela não escreve “gg”. Ela só joga.", proxima: "c2_08" },
    c2_08: { tipo: "narracao", texto: "Primeira partida, ela ganha. Segunda, ela ganha. Na terceira, um jogador do outro time escreve no chat “volta pra cozinha” e ela passa os quinze minutos seguintes caçando só ele, pelo mapa inteiro, até ele sair do jogo antes de acabar.", proxima: "c2_09" },
    c2_09: { tipo: "pensamento", texto: "Isso aqui eu controlo. Clique, tecla, tela. Ninguém liga chorando às seis e vinte. Ninguém coloca capacete em ninguém. Só tem quem é melhor e quem é pior. E eu sou melhor.", proxima: "c2_10" },
    c2_10: { tipo: "narracao", texto: "Quinta partida. Final apertado. Os dois times empatados, a base deles piscando vermelho. Ela segura o mouse para o último clique, o clique que decide tudo.", proxima: "c2_11" },
    c2_11: { tipo: "narracao", efeito: "tremor", texto: "O mouse estala na mão dela. A carcaça de plástico abre no meio, como uma noz. O clique sai. A tela fica dourada: “VITÓRIA”. E ela fica olhando para os pedaços de mouse na palma da mão.", proxima: "c2_12" },
    c2_12: { tipo: "narracao", texto: "Um dos meninos de fone olha para ela por cima do monitor. Ela esconde a mão embaixo da mesa. Ele volta para o jogo.", proxima: "c2_13" },
    c2_13: { quem: "desconhecido", rotulo: "Dono da lan house", texto: "Tudo bem aí no fundo?", proxima: "c2_14" },
    c2_14: { quem: "eu", texto: "O mouse... quebrou. Sozinho. Eu pago.", proxima: "c2_15" },
    c2_15: { tipo: "narracao", texto: "O dono traz outro mouse, sem levantar do cobertor direito, arrastando os pés. Olha para o mouse quebrado. Olha para ela. Faz uma anotação num caderninho.", proxima: "c2_16" },
    c2_16: { quem: "desconhecido", rotulo: "Dono da lan house", texto: "Vai pra sua conta. Do jeito que você joga, eu devia era cobrar dos outros.", proxima: "c2_17" },
    c2_17: { tipo: "narracao", texto: "Sexta partida. Sétima. Oitava. O céu do lado de fora vai ficando cinza, depois branco, depois amarelo. Ela não percebe. Na nona, ela perde, por um erro bobo dela, e aperta o fone dos dois lados da cabeça com raiva.", proxima: "c2_18" },
    c2_18: { tipo: "narracao", texto: "O arco do fone partiu em dois. As duas metades ficam penduradas nos ouvidos dela, uma de cada lado, ligadas só pelo fio.", proxima: "c2_19" },
    c2_19: { tipo: "pensamento", texto: "Dois. Dois em duas horas. E eu nem estou com tanta raiva assim. Estou? Eu achei que não estava.", proxima: "c2_20" },
    c2_20: { tipo: "narracao", texto: "Ela olha para o relógio no canto da tela. Seis e cinquenta e dois.", proxima: "c2_21" },
    c2_21: { tipo: "pensamento", texto: "Oito minutos. Daqui a oito minutos ele vai estar no hall. Ou não vai. E eu não vou estar lá pra saber.", proxima: "c2_22" },
    c2_22: { tipo: "narracao", texto: "Ela desloga. Vai até o balcão. O dono soma no caderninho, mouse, fone e duas horas e meia, e vira o caderno para ela ver. Ela faz uma careta.", proxima: "c2_esc1" },

    // ▶ ESCOLHA 1 — No balcão
    c2_esc1: { escolhas: [
      { texto: "A. Pagar o que tem e prometer o resto. “Eu volto. Eu sempre volto.”", proxima: "c2_1a_1", pontos: {}, flags: ["Divida_lan"] },
      { texto: "B. “Posso pagar jogando? Eu treino alguém. Qualquer um.”", proxima: "c2_1b_1", pontos: {}, flags: ["Treinar_lan"] },
      { texto: "C. Ficar olhando o caderninho em silêncio, sem conseguir falar nada.", proxima: "c2_1c_1", pontos: {}, flags: ["Silencio_lan"] }
    ]},
    c2_1a_1: { quem: "eu", texto: "Eu pago metade agora. O resto eu volto e pago. Eu sempre volto.", proxima: "c2_1a_2" },
    c2_1a_2: { quem: "desconhecido", rotulo: "Dono da lan house", texto: "Eu sei que volta. Ninguém joga assim e não volta.", proxima: "c2_23" },
    c2_1b_1: { quem: "eu", texto: "Posso pagar jogando? Eu treino alguém. Qualquer um. O seu sobrinho. Os meninos de fone.", proxima: "c2_1b_2" },
    c2_1b_2: { quem: "desconhecido", rotulo: "Dono da lan house", texto: "Sábado. Duas horas. Eu tenho três moleques que não sabem nem andar no mapa. Se eles ganharem uma, a gente fica quite.", proxima: "c2_23" },
    c2_1c_1: { tipo: "narracao", texto: "Ela fica olhando o caderninho. As letras tortas. “Mouse”. “Fone”. Não consegue falar nada. O dono olha para a cara dela por um tempo, depois fecha o caderno.", proxima: "c2_1c_2" },
    c2_1c_2: { quem: "desconhecido", rotulo: "Dono da lan house", texto: "Depois a gente vê isso. Vai pra escola. E come alguma coisa no caminho, que você está com cara de quem não comeu.", proxima: "c2_23" },

    // (todas as opções continuam aqui)
    c2_23: { cenario: "rua", transicao: "tempo", tipo: "narracao", texto: "Ela sai da lan com o sol na cara, a mochila nas costas, os olhos ardendo de tela. E vai direto para a escola, a pé, sem passar em casa, sem olhar para a rua do prédio quando passa pela esquina.", proxima: "c2_24" },
    c2_24: { tipo: "pensamento", texto: "Se ele foi, ele achou o hall vazio. Igual eu achei ontem. Se ele não foi... então não faz diferença nenhuma onde eu estava.", proxima: "c3_01" },

    /* =================== CENA 3 — O PORTÃO =================== */
    c3_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Terça, 7h22 — Cena 3", sprite: null, texto: "Na frente da escola, a barra do portão continua torta, com a tinta verde descascada no lugar dos dedos dela. Alguém amarrou uma fita zebrada em volta, como se fosse perigoso. Ela passa longe.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "Ela não vê a moto do outro lado da rua. O lugar de sempre está vazio.", proxima: "c3_03" },
    c3_03: { tipo: "pensamento", texto: "Ótimo. Então ele não foi em lugar nenhum. Ou foi na casa dela de novo e ainda não chegou.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", texto: "E aí o ronco. Alto, rápido, chegando na rua mais acelerado do que ele costuma andar. A moto para em cima do meio-fio, torta. O Kaito desce sem nem tirar o capacete direito, com o vermelho pendurado no braço, e atravessa a rua quase correndo.", proxima: "c3_05" },
    c3_05: { tipo: "narracao", sprite: "kaito", texto: "Ele para na frente dela. Tira o capacete. O cabelo amassado, os olhos de quem não dormiu também.", proxima: "c3_06" },
    c3_06: { quem: "kaito", texto: "Eu fui. Sete horas. Eu fiquei dez minutos no hall. Aí eu toquei o interfone. A sua mãe desceu de roupão.", proxima: "c3_07" },
    c3_07: { quem: "kaito", texto: "Ela disse que você saiu de madrugada. Que deixou um bilhete. Que não era pra ligar.", proxima: "c3_08" },
    c3_08: { tipo: "narracao", texto: "Ele respira. Ela vê ele tentando falar baixo e não conseguindo.", proxima: "c3_09" },
    c3_09: { quem: "kaito", texto: "Onde você estava?", proxima: "c3_10" },
    c3_10: { tipo: "pensamento", texto: "Ele foi. Ele foi mesmo. Dez minutos no hall. E eu estava apertando um mouse até ele abrir.", proxima: "c3_11" },
    c3_11: { tipo: "narracao", sprite: "serena", texto: "Antes que ela responda, uma voz doce do lado. A Serena. Ela chegou do muro sem ninguém perceber, com o tornozelo enfaixado e uma garrafinha de água na mão, e para do lado do Kaito, perto, olhando para a SN com os olhos arregalados de preocupação.", proxima: "c3_12" },
    c3_12: { quem: "serena", texto: "Ai, SN, você não dormiu em casa? A gente ficou preocupado. Você está com uma cara...", proxima: "c3_13" },
    c3_13: { tipo: "narracao", texto: "“A gente”. Ela fala “a gente” como se os dois tivessem passado a manhã juntos procurando a SN.", proxima: "c3_esc2" },

    // ▶ ESCOLHA 2 — No portão
    c3_esc2: { escolhas: [
      { texto: "A. A verdade. “Na lan. Joguei até as sete.”", proxima: "c3_2a_1", pontos: { kaito: 1 }, flags: ["Contou_lan"] },
      { texto: "B. “Não te interessa, Kaito. Você não me deve satisfação, eu também não te devo.”", proxima: "c3_2b_1", pontos: {}, flags: ["Nao_interessa"] },
      { texto: "C. Olhar só para a Serena. “A gente quem?”", proxima: "c3_2c_1", pontos: {}, flags: ["A_gente_quem"] }
    ]},
    c3_2a_1: { quem: "eu", texto: "Na lan. Joguei até as sete.", proxima: "c3_2a_2" },
    c3_2a_2: { quem: "serena", texto: "Na lan? Sozinha? Às quatro da manhã?", proxima: "c3_2a_3" },
    c3_2a_3: { tipo: "narracao", texto: "Ela não acusa nada. Ela só pergunta, com a voz mais inocente do mundo, cada palavra separada, para que cada uma caia sozinha no ouvido do Kaito. Sozinha. Quatro. Da manhã.", proxima: "c3_2a_4" },
    c3_2a_4: { quem: "kaito", texto: "...Sozinha?", proxima: "c3_2a_5" },
    c3_2a_5: { tipo: "narracao", texto: "Ele não fala “com quem”. Mas ela ouve o “com quem” escondido atrás do “sozinha”. E odeia ouvir.", proxima: "c3_14" },
    c3_2b_1: { quem: "eu", texto: "Não te interessa, Kaito. Você não me deve satisfação, eu também não te devo.", proxima: "c3_2b_2" },
    c3_2b_2: { tipo: "narracao", texto: "Ele fica parado, com o capacete na mão. A Serena coloca a mão no braço dele, de leve, como quem consola.", proxima: "c3_2b_3" },
    c3_2b_3: { quem: "serena", texto: "Deixa, Kaito. Ela deve ter tido uma noite... difícil. Não insiste.", proxima: "c3_2b_4" },
    c3_2b_4: { tipo: "narracao", texto: "“Uma noite difícil”. Dita do jeito certo, com a pausa certa, para parecer outra coisa. Ela vê o Kaito pensando na pausa.", proxima: "c3_14" },
    c3_2c_1: { quem: "eu", texto: "A gente quem, Serena?", proxima: "c3_2c_2" },
    c3_2c_2: { quem: "serena", texto: "Ué... eu e o Kaito. Ele me contou que foi na sua casa e você não estava. Ele ficou muito preocupado. Eu também, claro.", proxima: "c3_2c_3" },
    c3_2c_3: { tipo: "pensamento", texto: "Ele contou pra ela. Antes de chegar aqui. Ele parou em algum lugar e contou pra ela.", proxima: "c3_2c_4" },
    c3_2c_4: { tipo: "narracao", texto: "O Kaito olha para a Serena, rápido, como quem não lembra de ter contado nada. Abre a boca. A Serena aperta o braço dele de leve. Ele fecha.", proxima: "c3_14" },

    // (todas as opções continuam aqui)
    c3_14: { tipo: "narracao", sprite: null, efeito: "tremor", texto: "A alça da mochila arrebenta no ombro dela. Um estalo de costura abrindo. A mochila escorrega até o cotovelo e fica pendurada pela outra alça.", proxima: "c3_15" },
    c3_15: { tipo: "pensamento", texto: "Três. Em três horas.", proxima: "c3_16" },
    c3_16: { tipo: "narracao", texto: "Ela segura a mochila pela alça que sobrou e entra, sem falar mais nada. Atrás dela, a Serena fala alguma coisa baixinho. O Kaito não vai atrás.", proxima: "c4_01" },

    /* =================== CENA 4 — A SALA =================== */
    c4_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Primeira aula — Cena 4", sprite: "mio", texto: "Na sala, a Mio levanta assim que ela entra. Olha a alça arrebentada. Olha os olhos vermelhos de tela. Olha tudo.", proxima: "c4_02" },
    c4_02: { quem: "mio", texto: "A sua mãe me ligou às sete e quinze. Ela queria saber se você estava aqui. Eu falei que estava. Eu menti. Onde você estava?", proxima: "c4_03" },
    c4_03: { quem: "eu", texto: "Na lan. Sozinha. Juro.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", texto: "A Mio não pergunta mais nada. Ela tira da mochila um grampeador e grampeia a alça arrebentada de volta, cinco grampos, com cara de cirurgiã. Depois tira um pão de queijo embrulhado num guardanapo e coloca na mão dela.", proxima: "c4_05" },
    c4_05: { quem: "mio", texto: "Come. Liga pra sua mãe no intervalo. E não me assusta mais assim.", proxima: "c4_06" },
    c4_06: { tipo: "narracao", sprite: "hana", texto: "A Hana, da carteira do lado, já está com a prancheta. Ela não fala nada. Só escreve, numa folha em branco, “Terça — protocolo de contenção, versão 2”, e sublinha duas vezes.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", sprite: "takeo:escolar", texto: "O Takeo, atrás dela, inclina o corpo para frente e fala baixinho, perto do ombro dela.", proxima: "c4_08" },
    c4_08: { quem: "takeo", sprite: "takeo:escolar", texto: "Amanhã eu tiro o gesso. Seis e quarenta, de manhã, eu passo no seu prédio. Se você não estiver, eu espero. Se você estiver na lan, eu vou na lan. Eu jogo mal, mas eu jogo.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "Ela não responde. Ela não confia na própria voz. Só faz que sim, sem virar.", proxima: "c4_10" },
    c4_10: { tipo: "narracao", sprite: null, texto: "No meio da aula de matemática, ela apoia os braços na carteira para escrever. E a tampa da carteira afunda um pouco embaixo dos cotovelos, com um rangido de madeira velha.", proxima: "c4_11" },
    c4_11: { tipo: "narracao", texto: "Ela levanta os braços rápido. A tampa fica com duas marcas redondas, rasas, no formato dos cotovelos dela. Ela cobre as marcas com o caderno.", proxima: "c4_12" },
    c4_12: { sprite: "ren", tipo: "narracao", texto: "Na carteira perto da porta, o Ren tirou os olhos do livro. Ele está olhando para o caderno em cima da carteira dela. Não para ela. Para o caderno. Como se soubesse o que tem embaixo.", proxima: "c4_13" },
    c4_13: { tipo: "pensamento", texto: "Ele não viu. Ele não pode ter visto. Para de me olhar, Ren.", proxima: "c4_14" },
    c4_14: { sprite: null, tipo: "narracao", texto: "Ele volta para o livro. Mas não vira a página o resto da aula inteira.", proxima: "c5_01" },

    /* =================== CENA 5 — A FOTO =================== */
    c5_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Intervalo — Cena 5", sprite: null, texto: "No intervalo, ela vai para o muro do bebedouro de novo, com a Mio, a Hana e a Reina. O Blake já está lá, sentado, com a lancheira azul aberta, como se o muro fosse o lugar dele desde sempre.", proxima: "c5_02" },
    c5_02: { quem: "blake", sprite: "blake", texto: "Frango. Metade. Eu falei que ia separar.", proxima: "c5_03" },
    c5_03: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji senta no chão na frente do muro, com as coxinhas, e começa a contar uma história comprida sobre um pombo que entrou no ônibus dele. Ela não está ouvindo direito. Mas o barulho da voz dele ajuda.", proxima: "c5_04" },
    c5_04: { tipo: "narracao", sprite: null, texto: "No banco da árvore torta, do outro lado do pátio, o Kaito. Do lado dele, a Serena, com uma marmita aberta no colo, com dois hashis. Ela pega um pedaço de alguma coisa e estende para ele. Ele não pega. Ela deixa o hashi no ar um tempo. Depois come ela mesma, rindo, como se fosse brincadeira.", proxima: "c5_05" },
    c5_05: { tipo: "narracao", texto: "E aí os celulares começam a vibrar. Primeiro um, na mão da Reina. Depois o da Hana. Depois três, quatro, no pátio inteiro, um atrás do outro, como grilo à noite. A rede de fofoca acordou.", proxima: "c5_06" },
    c5_06: { tipo: "narracao", sprite: "reina", texto: "A Reina olha para a tela. A cara dela muda. Ela vira o celular para baixo, rápido, em cima da coxa.", proxima: "c5_07" },
    c5_07: { quem: "reina", texto: "Não é nada. Spam. Vamos falar de outra coisa. Hana, a prancheta, o protocolo, fala do protocolo.", proxima: "c5_08" },
    c5_08: { quem: "eu", texto: "Reina. Me mostra.", proxima: "c5_09" },
    c5_09: { tipo: "narracao", texto: "A Reina não mostra. A Mio pega o próprio celular, olha, e fica branca. Ela também vira para baixo.", proxima: "c5_10" },
    c5_10: { tipo: "narracao", texto: "Ela pega o dela. O rachado. A teia de vidro atravessando a tela. E abre.", proxima: "c5_11" },
    c5_11: { tipo: "narracao", efeito: "eco", texto: "Uma conta nova, sem foto de perfil, criada ontem, com zero publicações até cinco minutos atrás. Uma publicação só.", proxima: "c5_12" },
    c5_12: { tipo: "narracao", texto: "A foto foi tirada de longe, do outro lado da rua, de um ângulo de quem estava atrás do muro da padaria. A garagem do Victor. A porta de enrolar meio aberta. E, lá dentro, ela e o Victor, a um palmo de distância, ele com o polegar na bochecha dela, olhando para a boca dela. Ela de olho meio fechado.", proxima: "c5_13" },
    c5_13: { tipo: "narracao", texto: "Na legenda: “a menina do capacete vermelho não perde tempo 👀”.", proxima: "c5_14" },
    c5_14: { tipo: "pensamento", texto: "A tinta. Era tinta azul. Ele tirou a tinta do meu rosto. Foi um segundo. Foi um segundo e o Caramelo latiu.", proxima: "c5_15" },
    c5_15: { tipo: "pensamento", texto: "Mas na foto não tem tinta. Na foto não tem Caramelo. Na foto tem só um segundo, parado, pra sempre.", proxima: "c5_16" },
    c5_16: { tipo: "pensamento", texto: "“Ele fala da foto das caixas. Ele não fala da outra.” Quinta. A esquina da padaria. Ele virou o celular pra baixo. Ele já tinha visto. Desde quinta, ele já tinha visto isso.", proxima: "c5_17" },
    c5_17: { tipo: "pensamento", texto: "Era isso. A fivela. O “embaixo”. O “você trata todo mundo igual”. O capacete na cabeça dela. Era isso.", proxima: "c5_18" },
    c5_18: { tipo: "narracao", sprite: "kaito", texto: "Ela levanta os olhos da tela. Do outro lado do pátio, o Kaito está olhando para ela. Ele não está com o celular na mão. Ele não precisa. Ele está olhando para ela do jeito de quem já sabia o que ela ia ver, e estava esperando a cara dela quando visse.", proxima: "c5_19" },
    c5_19: { tipo: "narracao", texto: "Ela atravessa o pátio. Ninguém segura ela. A Mio levanta para ir atrás e a Hana segura a Mio pelo pulso. Ela para na frente do banco.", proxima: "c5_20" },
    c5_20: { quem: "eu", texto: "Era isso?", proxima: "c5_21" },
    c5_21: { tipo: "narracao", texto: "Ela vira o celular rachado para ele. Ele nem olha para a tela. Ele olha para ela.", proxima: "c5_22" },
    c5_22: { quem: "kaito", texto: "...Eu recebi. Na quinta.", proxima: "c5_23" },
    c5_23: { quem: "eu", texto: "E você não me perguntou. Você viu uma foto e resolveu sozinho o que ela era. E depois foi buscar ela de moto.", proxima: "c5_24" },
    c5_24: { tipo: "narracao", sprite: "serena", texto: "A Serena levanta do banco. Devagar. Com a marmita na mão, a cara de quem vai chorar por solidariedade.", proxima: "c5_25" },
    c5_25: { quem: "serena", texto: "SN, eu sei que você está nervosa, mas não é culpa dele. Ninguém sabe quem postou isso. Coitado do Kaito, ele está sofrendo tanto com isso desde quinta...", proxima: "c5_26" },
    c5_26: { tipo: "pensamento", texto: "“Desde quinta.” Como ela sabe que é desde quinta?", proxima: "c5_27" },
    c5_27: { tipo: "narracao", texto: "Ela olha para a Serena. A Serena olha de volta, com os olhos molhados, perfeitos. E, por um segundo, tão rápido que ninguém mais no pátio vê, o canto da boca dela sobe.", proxima: "c5_esc3" },

    // ▶ ESCOLHA 3 — No banco
    c5_esc3: { escolhas: [
      { texto: "A. “Como você sabe que foi na quinta, Serena?”", proxima: "c5_3a_1", pontos: { kaito: 1 }, flags: ["Como_sabe_quinta"] },
      { texto: "B. Ignorar a Serena. Só para o Kaito: “Era tinta, Kaito. Tinta azul. Você podia ter perguntado.”", proxima: "c5_3b_1", pontos: { kaito: 2 }, flags: ["Era_tinta"] },
      { texto: "C. Não falar nada. Não dá. Se ela abrir a boca, ela vai quebrar alguma coisa.", proxima: "c5_3c_1", pontos: {}, flags: ["Calou_banco"] }
    ]},
    c5_3a_1: { quem: "eu", texto: "Como você sabe que foi na quinta, Serena?", proxima: "c5_3a_2" },
    c5_3a_2: { tipo: "narracao", texto: "Meio segundo de silêncio. Só meio. A Serena pisca.", proxima: "c5_3a_3" },
    c5_3a_3: { quem: "serena", texto: "Ué... ele me contou. Ele estava tão mal. Não foi, Kaito?", proxima: "c5_3a_4" },
    c5_3a_4: { tipo: "narracao", texto: "O Kaito olha para ela. Ele não lembra de ter contado. Ela vê ele não lembrando. E vê ele decidindo que deve ter contado, porque a Serena falou com tanta certeza.", proxima: "c5_28" },
    c5_3b_1: { quem: "eu", texto: "Era tinta, Kaito. Tinta azul. Na minha bochecha. Ele tirou. Você podia ter me perguntado. Uma pergunta. Você não sabe nem perguntar.", proxima: "c5_3b_2" },
    c5_3b_2: { tipo: "narracao", texto: "Ele fica parado. Ela vê a palavra “tinta” entrando nele, devagar. Ele quer acreditar. Ela vê que ele quer. E vê, do lado dele, a Serena colocando a mão no ombro dele, de leve, e a vontade de acreditar ficando pela metade.", proxima: "c5_28" },
    c5_3c_1: { tipo: "narracao", texto: "Ela não fala nada. Ela aperta os dentes. A mão livre fecha do lado do corpo, e ela sente a força subindo pelo braço como água fervendo.", proxima: "c5_28" },

    // (todas as opções continuam aqui)
    c5_28: { tipo: "narracao", sprite: null, efeito: "tremor", texto: "Ela segura no encosto do banco da árvore torta, só para não cair, só para ter onde colocar a mão. E a madeira do encosto quebra. Um estalo alto, de tábua velha, que faz o pátio inteiro virar.", proxima: "c5_29" },
    c5_29: { tipo: "narracao", texto: "A tábua do encosto fica na mão dela. Um pedaço de madeira, com pregos enferrujados pendurados na ponta. A Serena dá um gritinho e se esconde atrás do Kaito. O Kaito olha para a tábua na mão dela. Para ela.", proxima: "c5_30" },
    c5_30: { tipo: "narracao", texto: "Todo mundo está olhando. O pátio inteiro. A rede de fofoca inteira, com o celular na mão.", proxima: "c5_31" },
    c5_31: { tipo: "pensamento", texto: "Não. Não aqui. Não na frente de todo mundo.", proxima: "c5_32" },
    c5_32: { quem: "serena", texto: "Kaito... ela está me assustando...", proxima: "c5_33" },
    c5_33: { tipo: "narracao", texto: "Ela solta a tábua. A tábua cai no chão do pátio com um barulho oco. E ela corre.", proxima: "c5_34" },
    c5_34: { tipo: "narracao", sprite: "kaito", texto: "O Kaito dá um passo. Um só. A Serena segura o braço dele com as duas mãos.", proxima: "c5_35" },
    c5_35: { quem: "serena", texto: "Não vai, Kaito. Deixa ela. Ela precisa de espaço. Você vai piorar.", proxima: "c5_36" },
    c5_36: { tipo: "narracao", sprite: null, texto: "Ele fica. Com a Serena pendurada no braço dele, olhando para o lugar onde ela sumiu, entre a quadra e o prédio. Ele fica.", proxima: "c5_37" },
    c5_37: { tipo: "narracao", texto: "No muro do bebedouro, a Mio já está em pé, e o Blake já está em pé, e o Ryuji já está em pé. Mas o sinal toca. E o inspetor aparece na porta do pátio batendo palma, mandando todo mundo subir. E a Mio olha para o Blake, e o Blake olha para o lugar onde ela sumiu, e os dois sobem, porque o inspetor está olhando para eles.", proxima: "c5_38" },
    c5_38: { tipo: "narracao", texto: "Na escada, ninguém percebe que um menino da sala dela desce, em vez de subir.", proxima: "c6_01" },

    /* =================== CENA 6 — ATRÁS DO DEPÓSITO =================== */
    c6_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Atrás do depósito — Cena 6", sprite: null, texto: "Atrás do depósito de material de educação física, tem um corredor estreito entre a parede do depósito e o muro da escola, onde ninguém vai. Só tem mato, uma bola de vôlei murcha, e o cheiro de terra úmida.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", texto: "Ela para ali. Encosta as duas mãos na parede do depósito, com a cabeça baixa, respirando rápido, rápido demais.", proxima: "c6_03" },
    c6_03: { tipo: "pensamento", texto: "Um mouse. Um fone. Uma alça. Uma carteira. Um banco. Na frente de todo mundo. Na frente dele.", proxima: "c6_04" },
    c6_04: { tipo: "pensamento", texto: "“Ela está me assustando.” E ele ficou. Ela segurou o braço dele, e ele ficou.", proxima: "c6_05" },
    c6_05: { tipo: "narracao", efeito: "tremor", texto: "O punho dela bate na parede. Ela não decidiu bater. O braço foi sozinho. O reboco racha em volta da mão dela, numa estrela, e um pedaço de cimento cai no mato.", proxima: "c6_06" },
    c6_06: { tipo: "narracao", efeito: "tremor", texto: "E de novo. E de novo. A parede vai abrindo em volta dos punhos dela, rachadura em cima de rachadura, poeira branca caindo no cabelo. Ela não consegue parar. Ela não sabe parar. É como se o corpo dela fosse de outra pessoa e ela só estivesse dentro, assistindo.", proxima: "c6_07" },
    c6_07: { tipo: "narracao", texto: "Até que as pernas param de segurar. Ela escorrega pela parede rachada até sentar no chão, no meio do mato e da poeira, com as mãos abertas no colo, os nós dos dedos brancos de cimento.", proxima: "c6_08" },
    c6_08: { tipo: "narracao", texto: "E chora. Não do jeito bonito. Do jeito que sai tudo de uma vez, o capacete, a fivela, o “embaixo”, o hall vazio, a foto, a tábua, o “ela está me assustando”, tudo junto, com soluço, com o nariz escorrendo, com a boca aberta, sem som nenhum no começo, e depois com som.", proxima: "c6_09" },
    c6_09: { tipo: "pensamento", texto: "Eu tenho vinte e oito anos. Eu tenho vinte e oito anos e eu estou chorando atrás de um depósito de bola. Eu voltei no tempo pra consertar as coisas e eu não consigo nem segurar um banco sem quebrar.", proxima: "c6_10" },
    c6_10: { tipo: "narracao", texto: "Passos no mato. Devagar. Parando a alguns metros.", proxima: "c6_11" },
    c6_11: { tipo: "narracao", texto: "Ela levanta a cabeça, com o rosto molhado e cheio de poeira. Esperando a Mio. Esperando o Kaito. Esperando qualquer pessoa.", proxima: "c6_12" },
    c6_12: { sprite: "ren", tipo: "narracao", texto: "É o Ren.", proxima: "c6_13" },
    c6_13: { tipo: "narracao", texto: "Ele está parado na entrada do corredor estreito, com as mãos nos bolsos. Olhando para ela. Olhando para a parede. Para a estrela de rachaduras em cima da cabeça dela, do tamanho de uma janela.", proxima: "c6_14" },
    c6_14: { quem: "eu", texto: "Sai daqui.", proxima: "c6_15" },
    c6_15: { tipo: "narracao", texto: "Ele não sai. Ele também não chega perto. Ele senta no chão, ali mesmo, na entrada do corredor, longe dela, encostado no muro do outro lado. E fica.", proxima: "c6_16" },
    c6_16: { quem: "eu", texto: "Sai daqui, Ren. Eu estou falando sério. Eu não quero você aqui. Você é a última pessoa que eu quero ver.", proxima: "c6_17" },
    c6_17: { quem: "ren", texto: "Eu sei.", proxima: "c6_18" },
    c6_18: { tipo: "narracao", texto: "Ele não levanta. Ela chora mais, de raiva agora, de raiva dele estar ali, de raiva de ninguém mais estar ali.", proxima: "c6_19" },
    c6_19: { quem: "eu", texto: "Por que você? Por que justo você?", proxima: "c6_20" },
    c6_20: { quem: "ren", texto: "Porque ninguém mais veio.", proxima: "c6_21" },
    c6_21: { tipo: "narracao", texto: "Ele não fala isso para machucar. Ele fala como quem fala que está chovendo. E é por isso que machuca.", proxima: "c6_22" },
    c6_22: { tipo: "narracao", texto: "Muito tempo. Ela chorando. Ele sentado do outro lado, olhando para o mato, sem olhar para ela, como quem dá privacidade sem ir embora.", proxima: "c6_23" },
    c6_23: { quem: "ren", texto: "O portão. Ontem. Foi você.", proxima: "c6_24" },
    c6_24: { tipo: "narracao", texto: "Ela para de respirar. Olha para ele. Ele continua olhando para o mato.", proxima: "c6_25" },
    c6_25: { quem: "ren", texto: "A carteira hoje também. Eu vi as marcas.", proxima: "c6_26" },
    c6_26: { quem: "eu", texto: "Você vai contar.", proxima: "c6_27" },
    c6_27: { quem: "ren", texto: "Não.", proxima: "c6_28" },
    c6_28: { tipo: "narracao", texto: "Ele não pergunta como. Ele não pergunta o que ela é. Ele não olha para as mãos dela com medo, do jeito que a Serena fingiu ter medo. Ele só olha para a parede rachada como quem olha para o tempo, e fica.", proxima: "c6_29" },
    c6_29: { tipo: "narracao", texto: "Depois ele tira um livro do bolso de dentro do casaco. Velho, de capa mole, com a lombada rachada. Ele estica o braço e coloca o livro no chão, no meio do caminho entre os dois. E volta para o lugar dele.", proxima: "c6_30" },
    c6_30: { quem: "ren", texto: "Rasga.", proxima: "c6_31" },
    c6_31: { quem: "eu", texto: "O quê?", proxima: "c6_32" },
    c6_32: { quem: "ren", texto: "Papel não machuca ninguém. Eu já li. Rasga.", proxima: "c6_esc4" },

    // ▶ ESCOLHA 4 — O livro
    c6_esc4: { escolhas: [
      { texto: "A. Pegar o livro. E rasgar. Página por página.", proxima: "c6_4a_1", pontos: {}, flags: ["Rasgou_livro"] },
      { texto: "B. “Eu não quero nada seu, Ren.” E não pegar.", proxima: "c6_4b_1", pontos: {}, flags: ["Recusou_livro"] },
      { texto: "C. Pegar o livro e só segurar, apertando, sem rasgar.", proxima: "c6_4c_1", pontos: {}, flags: ["Segurou_livro"] }
    ]},
    c6_4a_1: { tipo: "narracao", texto: "Ela pega o livro. Arranca a primeira página. O barulho do papel rasgando é bom. É pequeno, seco, e não quebra nada que não deveria. Ela arranca a segunda. A terceira. Rasga cada uma em quatro, em oito, em pedaços tão pequenos que parecem neve.", proxima: "c6_4a_2" },
    c6_4a_2: { tipo: "narracao", texto: "Ela rasga o livro inteiro. O Ren não olha. Quando acaba, tem papel picado no colo dela, no mato, no cabelo, misturado com a poeira da parede. E as mãos dela, pela primeira vez desde as quatro da manhã, estão paradas.", proxima: "c6_33" },
    c6_4b_1: { quem: "eu", texto: "Eu não quero nada seu, Ren.", proxima: "c6_4b_2" },
    c6_4b_2: { tipo: "narracao", texto: "Ele não fala nada. Ele não pega o livro de volta. O livro fica ali, no chão, no meio do caminho. E, depois de muito tempo, sem perceber, a mão dela vai até ele. Ela arranca uma página. Só uma. Rasga devagar. E a raiva desce um pouco, como água escorrendo de um copo.", proxima: "c6_33" },
    c6_4c_1: { tipo: "narracao", texto: "Ela pega o livro e aperta contra o peito, com as duas mãos. A capa mole amassa. A lombada estala. Mas é só papel. Papel não quebra igual madeira, não racha igual parede. Ela aperta até as mãos pararem de tremer.", proxima: "c6_33" },

    // (todas as opções continuam aqui)
    c6_33: { quem: "eu", texto: "Por que você está fazendo isso?", proxima: "c6_34" },
    c6_34: { tipo: "narracao", texto: "Ele demora. O Ren sempre demora. Ele olha para as próprias mãos, como se a resposta estivesse escrita nelas.", proxima: "c6_35" },
    c6_35: { quem: "ren", texto: "Você disse que eu escolho quem eu quero ser.", proxima: "c6_36" },
    c6_36: { tipo: "narracao", texto: "É só isso que ele fala. Ela fica olhando para ele, com o rosto sujo de poeira e lágrima e papel picado, e não sabe o que fazer com aquilo.", proxima: "c6_37" },
    c6_37: { tipo: "pensamento", texto: "Eu odeio ele. Eu odeio o que ele fez com o Kaito, com a loja, com as fotos, com o Takeo. Eu odeio ele ter sido o único que veio. Eu odeio não conseguir odiar ele direito agora.", proxima: "c6_38" },
    c6_38: { tipo: "narracao", texto: "Passos rápidos, do lado do pátio. Uma voz grossa. O inspetor geral, com o apito no pescoço, chegando pela lateral da quadra.", proxima: "c6_39" },
    c6_39: { sprite: null, quem: "desconhecido", rotulo: "Inspetor geral", texto: "Quem está aí atrás? O sinal tocou faz vinte minutos! Que barulho foi aquele de...", proxima: "c6_40" },
    c6_40: { tipo: "narracao", texto: "Ele para na entrada do corredor. Vê a parede rachada, a estrela de cimento aberta do tamanho de uma janela. Vê a SN sentada no chão, chorando, cheia de poeira. Vê o Ren sentado do outro lado.", proxima: "c6_41" },
    c6_41: { quem: "desconhecido", rotulo: "Inspetor geral", texto: "...O que aconteceu com essa parede?", proxima: "c6_42" },
    c6_42: { tipo: "narracao", texto: "Ela abre a boca. Não sai nada. Ela não tem mentira nenhuma pronta. Não existe mentira que explique uma parede.", proxima: "c6_43" },
    c6_43: { sprite: "ren", tipo: "narracao", texto: "O Ren levanta. Devagar. Bate a poeira da calça. E coloca as mãos nos bolsos, de novo, do jeito dele, com aquela cara que faz os meninos do primeiro ano mudarem de corredor.", proxima: "c6_44" },
    c6_44: { quem: "ren", texto: "Fui eu.", proxima: "c6_45" },
    c6_45: { quem: "desconhecido", rotulo: "Inspetor geral", texto: "Você? Com o quê? Isso aqui parece que passou um trator.", proxima: "c6_46" },
    c6_46: { quem: "ren", texto: "Com um pedaço de ferro. Joguei no mato. Ela veio ver o barulho. Eu assustei ela.", proxima: "c6_47" },
    c6_47: { tipo: "narracao", texto: "O inspetor olha para o Ren. Para a parede. Para a SN, chorando no chão. E escolhe acreditar na versão que faz sentido para ele, a do menino problema da sala, com a cara fechada, que todo mundo da escola sabe que anda com gente estranha.", proxima: "c6_48" },
    c6_48: { quem: "desconhecido", rotulo: "Inspetor geral", texto: "Diretoria. Agora. E você, menina, vai lavar esse rosto e sobe pra aula. Você não viu nada, entendeu? Não precisa ter medo dele.", proxima: "c6_49" },
    c6_49: { tipo: "narracao", texto: "O Ren passa do lado dela, acompanhando o inspetor. Não olha para ela. Na hora em que passa, sem diminuir o passo, ele fala baixo, tão baixo que só ela ouve.", proxima: "c6_50" },
    c6_50: { quem: "ren", texto: "Lava as mãos também.", proxima: "c6_51" },
    c6_51: { tipo: "narracao", texto: "E vai. Ela fica sozinha atrás do depósito, no meio do papel picado, olhando para os nós dos dedos brancos de cimento. Do lado dela, no mato, a capa mole do livro dele. Ela olha o título. Não é o livro da página cento e doze. É outro. Ela guarda a capa na mochila sem saber por quê.", proxima: "c7_01" },

    /* =================== CENA 7 — DEPOIS =================== */
    c7_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Terceira aula — Cena 7", sprite: null, texto: "Ela lava o rosto e as mãos no banheiro do corredor, esfregando até o cimento sair de baixo das unhas. Quando volta para a sala, a professora não pergunta nada. A rede de fofoca já sabe. O Ren foi para a diretoria por quebrar a parede do depósito.", proxima: "c7_02" },
    c7_02: { tipo: "narracao", sprite: "mio", texto: "A Mio puxa ela pela mão assim que ela senta. Olha o rosto lavado, os olhos inchados, as mãos vermelhas.", proxima: "c7_03" },
    c7_03: { quem: "mio", texto: "O inspetor não deixou a gente descer. Eu tentei. O Blake tentou. A Hana chegou a inventar uma crise de asma. Desculpa. Desculpa, desculpa.", proxima: "c7_04" },
    c7_04: { quem: "mio", texto: "...Foi o Ren mesmo? A parede? Ele te fez alguma coisa?", proxima: "c7_05" },
    c7_05: { tipo: "pensamento", texto: "Se eu falar que não, ela vai perguntar quem foi. Se eu falar que sim, eu jogo em cima do Ren uma coisa que ele não fez. Ele já pegou pra ele. Por mim.", proxima: "c7_06" },
    c7_06: { quem: "eu", texto: "Ele não me fez nada, Mio. Ele só... ficou lá.", proxima: "c7_07" },
    c7_07: { tipo: "narracao", texto: "A Mio olha para ela, sem entender. Ela também não entende. Elas ficam as duas sem entender juntas.", proxima: "c7_08" },
    c7_08: { tipo: "narracao", sprite: null, texto: "No celular rachado, uma mensagem do Victor. Mandada às dez e quarenta, logo depois do intervalo.", proxima: "c7_09" },
    c7_09: { quem: "mensagem", rotulo: "Mensagem — Victor", texto: "Eu vi a foto. Eu juro que eu não sabia que alguém estava lá. Me desculpa. A culpa é minha. Eu não devia ter tirado a tinta. Eu vou descobrir quem é essa conta. Eu juro.", proxima: "c7_10" },
    c7_10: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Eu vi a foto e vi o banco. Não precisa responder. Amanhã, 6h40. Com dois braços.", proxima: "c7_11" },
    c7_11: { tipo: "narracao", texto: "Nada do Kaito.", proxima: "c7_12" },
    c7_12: { tipo: "narracao", texto: "Na última aula, a carteira perto da porta continua vazia. O Ren não volta da diretoria.", proxima: "c8_01" },

    /* =================== CENA 8 — A SAÍDA =================== */
    c8_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Saída — Cena 8", sprite: null, texto: "Na saída, ela sai com a Mio de um lado e a Hana do outro, como guarda-costas. A barra torta do portão com a fita zebrada. A moto do outro lado da rua.", proxima: "c8_02" },
    c8_02: { tipo: "narracao", sprite: "kaito", texto: "O Kaito está do lado da moto. Sozinho. Sem a Serena. Com o capacete vermelho na mão. Ele dá um passo quando vê ela. Depois para. Ele não atravessa.", proxima: "c8_03" },
    c8_03: { tipo: "narracao", texto: "Ele fica parado do outro lado da rua, com o capacete na mão, olhando para ela como quem quer atravessar um rio e não sabe nadar.", proxima: "c8_04" },
    c8_04: { tipo: "pensamento", texto: "Hoje de manhã ele correu pela rua. Agora ele não atravessa. Depois da tábua. Depois do “ela está me assustando”. Ele está com medo de mim? Ou com medo de errar de novo?", proxima: "c8_05" },
    c8_05: { tipo: "narracao", texto: "Ela não sabe. E, pela primeira vez, ela não quer descobrir hoje. Ela vira para a direita, com a Mio e a Hana, e vai embora a pé.", proxima: "c8_06" },
    c8_06: { tipo: "narracao", sprite: null, texto: "Ela não olha para trás. Mas a Mio olha. E a Mio fala, baixinho, depois de meio quarteirão.", proxima: "c8_07" },
    c8_07: { quem: "mio", sprite: "mio", texto: "Ele ainda está lá. Parado. Com o capacete.", proxima: "r_cam" },

    /* =================== ROTA — TERÇA À NOITE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Terça, 22h", sprite: null, texto: "Dez da noite. O celular rachado vibra. Uma mensagem do Kaito. Depois de um dia inteiro sem nada.", proxima: "rk_02" },
    rk_02: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Tinta?", proxima: "rk_03" },
    rk_03: { tipo: "narracao", texto: "Uma palavra. Com um ponto de interrogação. A primeira pergunta que ele faz para ela desde quinta.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. “Tinta. Azul. Na bochecha. Foi um segundo, Kaito.”", proxima: "rk_a1", pontos: { kaito: 3 }, flags: ["Explicou_tinta"] },
      { texto: "B. “Agora você pergunta? Cinco dias depois?”", proxima: "rk_b1", pontos: { kaito: 2 }, flags: ["Cinco_dias"] },
      { texto: "C. Não responder. Ainda não.", proxima: "rk_c1", pontos: {}, flags: ["Nao_respondeu_tinta"] }
    ]},
    rk_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Tinta. Azul. Na bochecha. Foi um segundo, Kaito. O Caramelo latiu logo depois.", proxima: "rk_a2" },
    rk_a2: { tipo: "narracao", texto: "Digitando. Para. Digitando. Para. Muito tempo.", proxima: "rk_a3" },
    rk_a3: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu sou burro.", proxima: "rk_a4" },
    rk_a4: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Amanhã. Sete. Eu sei que você não vai descer. Eu vou mesmo assim.", proxima: "r_fim" },
    rk_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Agora você pergunta? Cinco dias depois? Depois do capacete, do hall vazio, do banco?", proxima: "rk_b2" },
    rk_b2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu sei. Eu demorei. Eu vi a sua cara hoje no banco e eu entendi que eu demorei demais.", proxima: "rk_b3" },
    rk_b3: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu não estava com medo de você. Hoje, na saída. Eu estava com medo de atravessar e você ir embora mesmo assim.", proxima: "r_fim" },
    rk_c1: { tipo: "narracao", texto: "Ela não responde. Ela deixa a mensagem lida, com a palavra sozinha brilhando na tela rachada. Uma hora depois, chega outra.", proxima: "rk_c2" },
    rk_c2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Tudo bem. Eu espero. Eu devia ter esperado antes de achar coisa.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Terça, 21h", sprite: null, texto: "Às nove, o Takeo liga. Ela atende sem falar nada. Ele também não fala nada no começo. Só respira, do outro lado.", proxima: "rt_02" },
    rt_02: { quem: "takeo", sprite: "takeo:escolar", texto: "Eu vi o banco. A tábua. Eu estava no corredor de cima, na janela.", proxima: "rt_03" },
    rt_03: { quem: "takeo", sprite: "takeo:escolar", texto: "Eu não vou perguntar nada. Eu só queria dizer que amanhã, quando eu tirar o gesso, a primeira coisa que eu vou fazer com o braço novo é segurar a sua mão. Se você deixar. E eu não tenho medo de quebrar.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. “Eu tenho medo de quebrar você, Takeo.”", proxima: "rt_a1", pontos: { takeo: 3 }, flags: ["Medo_quebrar_Takeo"] },
      { texto: "B. “Eu deixo.”", proxima: "rt_b1", pontos: { takeo: 4 }, flags: ["Deixo_Takeo"] },
      { texto: "C. Só chorar no telefone. Ele fica.", proxima: "rt_c1", pontos: { takeo: 3 }, flags: ["Chorou_Takeo"] }
    ]},
    rt_a1: { quem: "eu", texto: "Eu tenho medo de quebrar você, Takeo.", proxima: "rt_a2" },
    rt_a2: { quem: "takeo", sprite: "takeo:escolar", texto: "Eu já estou quebrado. Só falta tirar o gesso. Eu sou o mais seguro de todos.", proxima: "r_fim" },
    rt_b1: { quem: "eu", texto: "Eu deixo.", proxima: "rt_b2" },
    rt_b2: { tipo: "narracao", texto: "Do outro lado da linha, um barulho de alguma coisa caindo. Depois a voz da avó dele, longe, perguntando o que foi. Depois a voz dele, rouca: “nada, vó, nada, caiu o celular”.", proxima: "r_fim" },
    rt_c1: { tipo: "narracao", texto: "Ela chora no telefone. Ele não fala nada. Ele fica. Quarenta minutos. Quando ela para, ele fala só “seis e quarenta”, e ela fala “tá”, e os dois desligam ao mesmo tempo.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Terça, 21h", sprite: null, texto: "Às nove, uma mensagem do Blake.", proxima: "rb_02" },
    rb_02: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "A conta da foto. Foi criada ontem às 23h. Segue três pessoas. As três são da sala C.", proxima: "rb_03" },
    rb_03: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu não vou falar o nome de ninguém sem prova. Mas eu vou achar a prova. E hoje eu não consegui descer. Isso não vai acontecer de novo.", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. “Não precisa provar nada, Blake. Eu sei quem foi.”", proxima: "rb_a1", pontos: { blake: 2 }, flags: ["Sei_quem_Blake"] },
      { texto: "B. “Obrigada por querer descer.”", proxima: "rb_b1", pontos: { blake: 3 }, flags: ["Querer_descer_Blake"] },
      { texto: "C. “Blake. Amanhã, no intervalo, senta do meu lado de novo?”", proxima: "rb_c1", pontos: { blake: 3 }, flags: ["Senta_amanha_Blake"] }
    ]},
    rb_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Não precisa provar nada, Blake. Eu sei quem foi.", proxima: "rb_a2" },
    rb_a2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu também sei. Mas ele não sabe. E ele só acredita no que vê.", proxima: "r_fim" },
    rb_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Obrigada por querer descer.", proxima: "rb_b2" },
    rb_b2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Querer não ajudou ninguém hoje. Amanhã eu desço.", proxima: "r_fim" },
    rb_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Blake. Amanhã, no intervalo, senta do meu lado de novo?", proxima: "rb_c2" },
    rb_c2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu já estava indo sentar. Mas agora é convite. É melhor.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Terça, 20h30", sprite: null, texto: "Às oito e meia, a Relâmpago buzina lá embaixo. Ela não vai até a janela. A buzina para. Depois de um tempo, o celular vibra.", proxima: "rr_02" },
    rr_02: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Tudo bem não descer. Eu deixei uma coisa no degrau do hall. Em cima da fita preta. Boa noite. O Ryuji continua aqui. Não fisicamente. Fisicamente eu já fui. Mas você entendeu.", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. Descer e ver o que é.", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Degrau_presente"] },
      { texto: "B. Responder: “Volta. Eu desço.”", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Volta_Ryuji"] },
      { texto: "C. Responder: “Entendi.”", proxima: "rr_c1", pontos: { ryuji: 2 }, flags: ["Entendi_Ryuji"] }
    ]},
    rr_a1: { tipo: "narracao", cenario: "frente-casa-sn-noite", texto: "No degrau do hall, em cima da fita preta, uma bola de borracha vermelha, dessas de apertar, com uma carinha feliz desenhada de caneta. E um bilhete preso com fita: “Aperta essa. Ela aguenta. Eu testei com o Blake.”", proxima: "rr_a2" },
    rr_a2: { tipo: "narracao", texto: "Ela aperta. A bola amassa inteira. E volta. Ela aperta de novo. Volta. Ela fica sentada no degrau apertando a bola até a carinha feliz ficar meio torta, e não quebra.", proxima: "r_fim" },
    rr_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Volta. Eu desço.", proxima: "rr_b2" },
    rr_b2: { tipo: "narracao", texto: "Três minutos depois, a Relâmpago buzina de novo, ofegante, como se tivesse voltado correndo. Ela desce. Ele está no degrau, vermelho, com a respiração curta, segurando uma bola de borracha vermelha com uma carinha feliz. Ele entrega sem falar nada. Pela primeira vez, o Ryuji sem falar nada.", proxima: "r_fim" },
    rr_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Entendi.", proxima: "rr_c2" },
    rr_c2: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Ufa. Eu achei que tinha ficado confuso. Ficou confuso. Mas você entendeu. Boa noite.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Terça, 21h", sprite: null, texto: "Às nove, o Victor liga. Ela atende. Ele começa a falar antes de ela dizer alô.", proxima: "rv_02" },
    rv_02: { quem: "victor", texto: "Desculpa. Desculpa. Eu sei que eu já mandei mensagem. A foto é minha culpa. Se eu não tivesse encostado no seu rosto, não ia ter foto nenhuma. O líder não ia ter visto nada. Você não ia ter quebrado o banco. Eu estraguei tudo.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. “Victor. Para. A culpa é de quem tirou a foto.”", proxima: "rv_a1", pontos: { victor: 3 }, flags: ["Culpa_quem_tirou"] },
      { texto: "B. “Você não estragou nada. Aquele foi o melhor dia da minha semana também.”", proxima: "rv_b1", pontos: { victor: 4 }, flags: ["Melhor_dia_tambem"] },
      { texto: "C. “Você se arrepende? De ter encostado?”", proxima: "rv_c1", pontos: { victor: 4 }, flags: ["Se_arrepende"] }
    ]},
    rv_a1: { quem: "eu", texto: "Victor. Para. A culpa é de quem tirou a foto. Não é sua.", proxima: "rv_a2" },
    rv_a2: { quem: "victor", texto: "...Tá. Então eu vou descobrir quem tirou. E aí a culpa vai ter nome.", proxima: "r_fim" },
    rv_b1: { quem: "eu", texto: "Você não estragou nada. Aquele foi o melhor dia da minha semana também.", proxima: "rv_b2" },
    rv_b2: { tipo: "narracao", texto: "Silêncio do outro lado. Um silêncio comprido de Victor, que é o mais raro de todos. Depois um barulho que ela demora a entender. Ele está rindo. Baixinho, aliviado, quase chorando.", proxima: "r_fim" },
    rv_c1: { quem: "eu", texto: "Você se arrepende? De ter encostado?", proxima: "rv_c2" },
    rv_c2: { tipo: "narracao", texto: "Silêncio. Muito silêncio.", proxima: "rv_c3" },
    rv_c3: { quem: "victor", texto: "...Não. Eu me arrependo de ter tido gente olhando. Só disso.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Terça, 23h40", sprite: null, texto: "Quase meia-noite. Ela está deitada no escuro. A mãe passou no quarto duas vezes, depois da briga sobre o bilhete, e deixou um copo de leite morno na mesinha. Ela não tomou.", proxima: "f_02" },
    f_02: { tipo: "narracao", texto: "Em cima da mesinha, do lado do leite, a capa mole do livro do Ren. Só a capa. O resto ficou atrás do depósito, em pedaços, ou no colo dela, ou no fundo da mochila.", proxima: "f_03" },
    f_03: { tipo: "pensamento", texto: "Um mouse. Um fone. Uma alça. Uma carteira. Um banco. Uma parede.", proxima: "f_04" },
    f_04: { tipo: "pensamento", texto: "E a Serena, gritando que eu estava assustando ela. Na frente de todo mundo. Na frente dele. Agora todo mundo viu a menina da foto quebrar um banco. Ela não precisou fazer nada. Ela só segurou o braço dele.", proxima: "f_05" },
    f_05: { tipo: "pensamento", texto: "E quem viu tudo, a parede, as mãos, o choro, foi o Ren. Só ele. E ele foi pra diretoria no meu lugar.", proxima: "f_06" },
    f_06: { tipo: "pensamento", texto: "Eu não sei o que fazer com isso. Eu não quero dever nada pro Ren.", proxima: "f_07" },
    f_07: { tipo: "narracao", texto: "Ela vira de lado. Olha a capa do livro no escuro. E, antes de dormir, pela primeira vez, ela pensa no menino de óculos gigantes sem raiva nenhuma. Só um pouco. Só um segundo.", proxima: "ep_fim" },

    // Fim do Capítulo 44 (crie a entrada "capitulo44" em dados/capitulos.js).
    ep_fim: { fim: "capitulo44" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 45 (anotações do roteiro)
 *  • 4h: bilhete na geladeira ("Tô bem. Não precisa ligar."). Lan house do bairro até 6h52. Arena dos Reinos sozinha.
 *    Quebrou o MOUSE e o FONE. Dívida no caderninho do dono (ou treinar 3 moleques no sábado, flag Treinar_lan).
 *  • O KAITO FOI às 7h. Ficou 10 min no hall, tocou o interfone, a mãe desceu de roupão. "Onde você estava?"
 *    A Mio mentiu pra mãe da SN que ela estava na escola. A mãe brigou por causa do bilhete à noite.
 *  • SERENA MAIS DO QUE NUNCA: "a gente ficou preocupado"; "Sozinha? Às quatro da manhã?"; "uma noite... difícil".
 *    No intervalo, uma conta nova (criada segunda 23h, segue 3 pessoas da sala C) postou A FOTO da garagem
 *    ("a menina do capacete vermelho não perde tempo 👀"). A SN VIU A FOTO pela primeira vez. "Era isso?"
 *    O Kaito: "Eu recebi. Na quinta." A Serena deixou escapar "desde quinta". Sorriso de meio segundo.
 *  • A FORÇA: mouse, fone, alça da mochila (a Mio grampeou), tampa da carteira (marca dos cotovelos), ENCOSTO DO BANCO
 *    DA ÁRVORE TORTA (na frente do pátio inteiro; a Serena: "ela está me assustando"), PAREDE DO DEPÓSITO (estrela
 *    de rachaduras do tamanho de uma janela).
 *  • O Kaito deu um passo pra ir atrás; a Serena segurou o braço dele ("ela precisa de espaço"). Ele ficou.
 *  • O REN foi atrás. Só ele viu o desmoronamento. "Porque ninguém mais veio." Sabe do portão e da carteira, não vai
 *    contar, não perguntou como. Deu o livro pra ela rasgar ("Papel não machuca ninguém"). "Você disse que eu escolho
 *    quem eu quero ser." Disse pro inspetor que foi ele (pedaço de ferro). Foi pra diretoria. Não voltou pra aula.
 *    "Lava as mãos também." A SN guardou a capa do livro.
 *  • Saída: o Kaito sozinho do outro lado da rua, com o capacete. Não atravessou. "Ele ainda está lá."
 *  • Rotas: Kaito ("Tinta?" — a primeira pergunta dele); Takeo (tira o gesso amanhã, 6h40, segurar a mão);
 *    Blake (a conta segue 3 da sala C); Ryuji (bola de apertar que não quebra); Victor (culpa; "me arrependo de ter
 *    tido gente olhando").
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 No balcão (lan) · 2 No portão · 3 No banco (a foto) · 4 O livro (Ren) · Rota (1 por rota)
 *
 * FLAGS NOVAS
 *  Divida_lan · Treinar_lan · Silencio_lan · Contou_lan · Nao_interessa · A_gente_quem
 *  Como_sabe_quinta · Era_tinta · Calou_banco · Rasgou_livro · Recusou_livro · Segurou_livro
 *  Explicou_tinta · Cinco_dias · Nao_respondeu_tinta · Medo_quebrar_Takeo · Deixo_Takeo · Chorou_Takeo
 *  Sei_quem_Blake · Querer_descer_Blake · Senta_amanha_Blake · Degrau_presente · Volta_Ryuji · Entendi_Ryuji
 *  Culpa_quem_tirou · Melhor_dia_tambem · Se_arrepende
 */