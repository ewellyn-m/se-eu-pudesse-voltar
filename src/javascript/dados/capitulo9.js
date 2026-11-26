/*
 * =====================================================================
 *  CAPÍTULO 9 — Sábado com o Caramelo
 *  Sábado, o dia seguinte ao festival (continua do fim do Capítulo 8).
 *  Mesmo formato dos capítulos anteriores: cada linha é uma cena.
 * =====================================================================
 *
 *  O QUE ACONTECE
 *    • O encontro com o Victor: fliperama, lanche, pet shop e o fim de tarde na estação.
 *    • Um dia leve e divertido. O Victor continua galinha, mas com a SN ele é diferente.
 *    • No fim do dia, o Victor decide adotar o Caramelo.
 *    • Na volta para casa, a SN encontra o Kaito. Ele fica com ciúme, mas não fala nada.
 *
 *  PERSONALIDADES (combinadas)
 *    • Victor: galinha, debochado, selvagem, leal, lado mole por bicho de rua.
 *    • Kaito: parece frio, não demonstra o que sente, não dá o braço a torcer.
 *    • A SN não fala o apelido antigo dela.
 *
 *  PERSONAGENS (nenhum novo)
 *    Victor, Kaito, Mio (mensagem), Ren (mensagem).
 *
 *  CENÁRIOS (todos já existem; troque se criar fundos próprios)
 *    Esquina → "rua-padaria" · Fliperama → "fliperama" · Praça → "praca-estacao"
 *    Pet shop → "pet-shop" · Estação no pôr do sol → "estacao-por-do-sol"
 *    Rua à noite → "rua-noite" · Frente da lojinha de lámen → "frente-lamen"
 *    Quarto da SN → "quarto-sn"
 *
 *  FLAGS DOS CAPÍTULOS ANTERIORES USADAS AQUI (com caminhos)
 *    Victor_sabado_nao, Espetinho_Kaito, Ombro_Blake_festival.
 *
 *  Roupas: Victor e Kaito usam as imagens "-cap9" no capítulo inteiro (roupa: "cap9" na primeira cena).
 *
 *  Título, capa e gancho ficam em dados/capitulos.js: crie a entrada "capitulo9".
 */
Roteiro.registrar("capitulo9", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — A ESQUINA =================== */
    // Cenário: esquina da padaria, sábado de manhã (usa "saida-colegio"). Música: violão animado.
    c1_01: { tipo: "narracao", cenario: "rua-padaria", roupa: "cap9", transicao: "tempo", legenda: "Cena 1 — A esquina", sprite: null, texto: "A SN chega na esquina da padaria sem fôlego, com o cabelo meio preso, meio solto, e o tênis amarrado de qualquer jeito.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "O Caramelo vê ela primeiro. Ele levanta, abana o rabo inteiro, de um lado para o outro, com a orelha caída balançando junto, e vem cheirar os tênis dela como se ela fosse a pessoa mais importante do bairro.", proxima: "c1_03" },
    c1_03: { quem: "victor", texto: "Traidor. Eu dou comida pra você há um ano e você nunca abanou o rabo assim pra mim.", proxima: "c1_04" },
    c1_04: { tipo: "narracao", sprite: "victor", texto: "O Victor está encostado no poste, de camiseta preta, jaqueta jeans velha e o cabelo preso de qualquer jeito. Um pirulito na boca. Ele tira o pirulito e olha para ela de cima a baixo, devagar, sem nenhuma vergonha.", proxima: "c1_05" },
    c1_05: { quem: "victor", texto: "Hm. Você se arrumou.", proxima: "c1_06" },
    c1_06: { quem: "eu", texto: "Eu não me arrumei.", proxima: "c1_07" },
    c1_07: { quem: "victor", texto: "Seu tênis está desamarrado e o cabelo está metade preso. Isso é alguém que se arrumou com pressa. É o melhor tipo de arrumado.", proxima: "c1_08" },
    c1_08: { tipo: "narracao", texto: "O Caramelo senta em cima do pé dela. Ela abaixa para fazer carinho atrás da orelha boa dele. Ele fecha o olho que ainda enxerga e encosta a cabeça na perna dela.", proxima: "c1_cam1" },
    c1_cam1: { caminhos: [
      { flag: "Victor_sabado_nao", proxima: "c1_v_nao" }
    ], proxima: "c1_09" },
    c1_v_nao: { quem: "victor", texto: "Sabe que você disse “não” no banco da coordenação, né? Eu lembro. Eu lembro de todos os nãos. São tão poucos.", proxima: "c1_v_nao2" },
    c1_v_nao2: { quem: "eu", texto: "Eu vim pelo Caramelo.", proxima: "c1_v_nao3" },
    c1_v_nao3: { quem: "victor", texto: "Claro. Pelo Caramelo. Eu também vim pelo Caramelo. A gente tem tanto em comum.", proxima: "c1_09" },
    c1_09: { quem: "victor", texto: "Regras do dia. Um: eu pago. Dois: o Caramelo vai junto em tudo. Três: não vale se apaixonar.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — As regras do Victor
    c1_esc1: { escolhas: [
      { texto: "A. “Quatro: você não chama nenhuma outra menina de gatinha hoje.”", proxima: "c1_1a_1", pontos: { victor: 3 }, flags: ["Regra_sem_gatinha"] },
      { texto: "B. “Fechado. Mas a regra três vale pra você também.”", proxima: "c1_1b_1", pontos: { victor: 2 }, flags: ["Regra_tres_dele"] },
      { texto: "C. Ignorar as regras e falar só com o Caramelo: “Vamos, Caramelo. Ele fala demais.”", proxima: "c1_1c_1", pontos: { victor: 2 }, flags: ["Caramelo_primeiro"] }
    ]},
    c1_1a_1: { tipo: "narracao", texto: "O Victor fica com o pirulito parado no meio do caminho até a boca.", proxima: "c1_1a_2" },
    c1_1a_2: { quem: "victor", texto: "Nenhuma? O dia inteiro? Isso é contra a minha natureza.", proxima: "c1_1a_3" },
    c1_1a_3: { quem: "eu", texto: "É só um dia.", proxima: "c1_1a_4" },
    c1_1a_4: { tipo: "narracao", texto: "Ele pensa. Pensa de verdade, como se fosse uma decisão enorme. Depois estende a mão para apertar a dela, sério.", proxima: "c1_1a_5" },
    c1_1a_5: { quem: "victor", texto: "Fechado. Mas se eu escorregar, a culpa é da genética.", proxima: "c2_01" },
    c1_1b_1: { quem: "victor", texto: "Pra mim? Eu sou imune, gatinha. Eu já te falei. Tenho vacina.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "eu", texto: "Vacina vence.", proxima: "c1_1b_3" },
    c1_1b_3: { tipo: "narracao", texto: "Ele ri. Mas, por meio segundo, o sorriso dele vacila. Como se ela tivesse acertado alguma coisa que ele não queria que ninguém visse.", proxima: "c2_01" },
    c1_1c_1: { tipo: "narracao", texto: "Ela começa a andar. O Caramelo vai atrás dela, abanando o rabo, sem nem olhar para o Victor.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "victor", texto: "Ei! O encontro é comigo! Caramelo! Volta aqui! Eu sou o que paga!", proxima: "c1_1c_3" },
    c1_1c_3: { tipo: "narracao", texto: "O Caramelo não volta. O Victor corre atrás dos dois, reclamando e rindo ao mesmo tempo.", proxima: "c2_01" },

    /* =================== CENA 2 — O FLIPERAMA =================== */
    // Cenário: fliperama da estação (usa "clube-leitura"). Luzes coloridas, barulho de máquina. Música: eletrônica, animada.
    c2_01: { tipo: "narracao", cenario: "fliperama", transicao: "tempo", legenda: "Cena 2 — O fliperama", sprite: null, texto: "O fliperama da estação é escuro, barulhento e cheira a pipoca velha e a carpete. Máquinas piscando para todo lado. Música de videogame saindo de vinte lugares ao mesmo tempo.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", texto: "O dono, um senhor de bigode, olha para o Caramelo, olha para o Victor e suspira, como quem já teve essa discussão muitas vezes.", proxima: "c2_03" },
    c2_03: { quem: "victor", texto: "Ele é meu segurança pessoal, tio. Ele fica quietinho. Prometo.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", texto: "O Caramelo deita debaixo da máquina de corrida e dorme na mesma hora. O dono deixa.", proxima: "c2_05" },
    c2_05: { tipo: "pensamento", texto: "Eu nunca entrei num fliperama. Eu passava na frente desse aqui todo dia, voltando da escola. Eu achava que era lugar de gente barulhenta.", proxima: "c2_06" },
    c2_06: { tipo: "pensamento", texto: "Eu tinha razão. É lugar de gente barulhenta. E está muito divertido.", proxima: "c2_07" },
    c2_07: { tipo: "narracao", texto: "Eles jogam corrida. O Victor dirige como dirigiria na vida real: sem frear, sem olhar o mapa, batendo em tudo e gritando “SAI DA FRENTE” para carros que não existem. Ela ganha três vezes seguidas.", proxima: "c2_08" },
    c2_08: { quem: "victor", texto: "Isso é roubado. Você treinou. Você vem aqui escondida.", proxima: "c2_09" },
    c2_09: { quem: "eu", texto: "É a primeira vez que eu entro aqui.", proxima: "c2_10" },
    c2_10: { quem: "victor", texto: "Pior ainda!", proxima: "c2_11" },
    c2_11: { tipo: "narracao", texto: "Depois, a máquina de pegar bicho de pelúcia. O Victor tenta pegar um cachorro de pelúcia caramelo, com uma orelha caída, que ele jura que é a cara do Caramelo. Ele tenta doze vezes. Perde as doze.", proxima: "c2_12" },
    c2_12: { quem: "victor", texto: "Essa garra está viciada. Essa máquina é corrupta. Eu vou denunciar.", proxima: "c2_13" },
    c2_13: { tipo: "narracao", texto: "Ele coloca a última ficha. E então para. Olha para ela.", proxima: "c2_14" },
    c2_14: { quem: "victor", texto: "Tenta você. Se você ganhar, ele é seu. Se perder, a gente nunca mais fala disso.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — A máquina de pelúcia
    c2_esc2: { escolhas: [
      { texto: "A. Tentar com calma, esperando o momento certo.", proxima: "c2_2a_1", pontos: { victor: 2 }, flags: ["Ganhou_pelucia"] },
      { texto: "B. Fingir que vai jogar e devolver a ficha: “Tenta mais uma vez. Eu sei que você consegue.”", proxima: "c2_2b_1", pontos: { victor: 3 }, flags: ["Victor_ganhou_pelucia"] },
      { texto: "C. Desistir da máquina: “A pelúcia nunca vai ser igual ao Caramelo de verdade.”", proxima: "c2_2c_1", pontos: { victor: 1 } }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "Ela espera a garra parar exatamente em cima da cabeça do cachorro de pelúcia. Aperta o botão. A garra desce. Fecha. Sobe. Balança. O Victor prende a respiração.", proxima: "c2_2a_2" },
    c2_2a_2: { tipo: "narracao", texto: "A pelúcia cai no buraco.", proxima: "c2_2a_3" },
    c2_2a_3: { quem: "victor", efeito: "grito", texto: "MENTIRA! NA PRIMEIRA?! TIO, ESSA MÁQUINA ME ODEIA!", proxima: "c2_2a_4" },
    c2_2a_4: { tipo: "narracao", texto: "Ela tira a pelúcia e entrega para ele. Ele fica olhando para o cachorrinho de orelha caída nas mãos dele.", proxima: "c2_2a_5" },
    c2_2a_5: { quem: "eu", texto: "Pra você. Pra quando o Caramelo não estiver perto.", proxima: "c2_2a_6" },
    c2_2a_6: { tipo: "narracao", texto: "O Victor não responde. Ele só enfia a pelúcia dentro da jaqueta, com a cabeça para fora, como se fosse um bolso. E fica com ela assim o resto do dia.", proxima: "c2_15" },
    c2_2b_1: { tipo: "narracao", texto: "Ela coloca a ficha de volta na mão dele. Ele olha para a ficha. Olha para ela.", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "victor", texto: "Você está me dando a última ficha.", proxima: "c2_2b_3" },
    c2_2b_3: { quem: "eu", texto: "Você quer mais do que eu.", proxima: "c2_2b_4" },
    c2_2b_4: { tipo: "narracao", texto: "Ele joga. Concentrado. Língua para fora. A garra desce, fecha, sobe, balança. E a pelúcia cai.", proxima: "c2_2b_5" },
    c2_2b_5: { tipo: "narracao", texto: "O Victor grita tão alto que o Caramelo acorda debaixo da máquina de corrida. Ele pega a SN pela cintura e levanta ela do chão, girando, como se tivesse ganhado um campeonato mundial.", proxima: "c2_2b_6" },
    c2_2b_6: { tipo: "narracao", texto: "Depois percebe o que fez. Coloca ela no chão bem devagar. E, pela primeira vez desde que ela conhece ele, fica completamente sem saber o que dizer.", proxima: "c2_15" },
    c2_2c_1: { tipo: "narracao", texto: "O Victor olha para a pelúcia. Depois para o Caramelo, dormindo debaixo da máquina, roncando baixinho com a orelha caída por cima do focinho.", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "victor", texto: "...É. Ele é mais feio. Mas é melhor.", proxima: "c2_2c_3" },
    c2_2c_3: { tipo: "narracao", texto: "Ele guarda a última ficha no bolso. Ela vê ele guardando. Ela não pergunta por quê.", proxima: "c2_15" },

    // (todas as opções continuam aqui)
    c2_15: { tipo: "narracao", sprite: "amiga_victor", texto: "Quando estão saindo, duas meninas passam pela porta do fliperama. Uma delas acena para o Victor e grita o nome dele.", proxima: "c2_15b" },
    c2_15b: { tipo: "pensamento", texto: "Nossa. Olha ela. O cabelo, a roupa, o jeito de andar, como se o lugar inteiro fosse dela.", proxima: "c2_15c" },
    c2_15c: { tipo: "pensamento", texto: "E eu aqui, de tênis desamarrado e cabelo metade preso. Eu não chego nem aos pés dela.", proxima: "c2_16" },
    c2_16: { quem: "amiga_victor", texto: "Victor! Você sumiu! Não respondeu minha mensagem!", proxima: "c2_cam1" },
    c2_cam1: { caminhos: [
      { flag: "Regra_sem_gatinha", proxima: "c2_v_regra" }
    ], proxima: "c2_v_normal" },
    c2_v_regra: { tipo: "narracao", texto: "O Victor abre a boca. A SN vê a palavra se formando. “Gati...” Ele fecha a boca. Engole. Acena só com a mão.", proxima: "c2_v_regra2" },
    c2_v_regra2: { quem: "victor", texto: "Oi! Tô ocupado hoje. Tchau, moça!", proxima: "c2_v_regra3" },
    c2_v_regra3: { tipo: "narracao", texto: "“Moça.” A menina fica parada na porta, de boca aberta. O Victor sai do fliperama andando muito rápido, sem olhar para trás, e só fala quando eles já estão na calçada.", proxima: "c2_v_regra4" },
    c2_v_regra4: { quem: "victor", texto: "Isso foi a coisa mais difícil que eu já fiz na vida. Mais difícil que o terceiro ano. As duas vezes.", proxima: "c3_01" },
    c2_v_normal: { quem: "victor", texto: "Oi, gatinha! Desculpa, tô ocupado hoje!", proxima: "c2_v_normal2" },
    c2_v_normal2: { tipo: "narracao", texto: "A menina olha para a SN. Depois para o Victor. Faz uma careta e vai embora. O Victor dá de ombros.", proxima: "c2_v_normal3" },
    c2_v_normal3: { tipo: "pensamento", sprite: "victor", texto: "Ele chama todo mundo de gatinha. Eu sabia disso. Eu sempre soube.", proxima: "c2_v_normal4" },
    c2_v_normal4: { tipo: "pensamento", texto: "Então por que incomodou?", proxima: "c3_01" },

    /* =================== CENA 3 — O BANCO DA PRAÇA =================== */
    // Cenário: praça perto da estação, hora do almoço (usa "saida-colegio"). Música: violão calmo.
    c3_01: { tipo: "narracao", cenario: "praca-estacao", transicao: "tempo", legenda: "Cena 3 — O banco da praça", sprite: null, texto: "O almoço é cachorro-quente de carrinho, num banco de praça. O Victor compra três. Um para ele, um para ela e um só de salsicha, sem pão, para o Caramelo.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "O Caramelo come em quatro segundos e deita em cima dos pés dela de novo. Ela já não consegue sentir os dedos. Ela não se mexe.", proxima: "c3_03" },
    c3_03: { quem: "victor", texto: "Ele nunca deita em cima de ninguém. Só de mim. E agora de você. Isso é muito ofensivo.", proxima: "c3_04" },
    c3_04: { quem: "eu", texto: "Talvez ele saiba quem é legal.", proxima: "c3_05" },
    c3_05: { quem: "victor", texto: "Talvez ele saiba quem tem cheiro de padaria. Você tem cheiro de pão de queijo.", proxima: "c3_06" },
    c3_06: { tipo: "narracao", texto: "Ela ri. É a Mio. A Mio sempre tem pão de queijo. Deve ter ficado na blusa.", proxima: "c3_07" },
    c3_07: { tipo: "narracao", texto: "Por um tempo, os dois comem em silêncio. Pombos andando em volta. Um senhor jogando milho. Crianças correndo atrás de uma bola. O Victor, quieto, é uma coisa estranha de ver. Ele parece outra pessoa.", proxima: "c3_08" },
    c3_08: { quem: "eu", texto: "Por que você repetiu o terceiro ano? Duas vezes?", proxima: "c3_09" },
    c3_09: { tipo: "narracao", texto: "Ele para de mastigar. Olha para o cachorro-quente. Depois dá de ombros, com um sorriso torto.", proxima: "c3_10" },
    c3_10: { quem: "victor", texto: "Porque eu sou burro, gatinha. Todo mundo sabe.", proxima: "c3_11" },
    c3_11: { quem: "eu", texto: "Você não é burro. Você fez as contas de quantas meninas chamou de gatinha num dia, de cabeça.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", texto: "Ele ri. Mas a risada sai curta. Ele fica olhando para os pombos por um tempo.", proxima: "c3_13" },
    c3_13: { quem: "victor", texto: "Minha mãe tem dois empregos. Meu pai não trabalha em lugar nenhum, porque não está em lugar nenhum. Eu descarregava caminhão no mercado de madrugada. Das três às seis. Depois eu ia pra escola. Ou não ia.", proxima: "c3_14" },
    c3_14: { quem: "victor", texto: "Na maioria das vezes, eu não ia. Dormia no banco da estação. Do lado de um cachorro caramelo que também não tinha onde ir.", proxima: "c3_15" },
    c3_15: { tipo: "narracao", texto: "Ele joga o último pedaço do pão para os pombos. O Caramelo levanta a cabeça, ofendido, e deita de novo.", proxima: "c3_16" },
    c3_16: { quem: "victor", texto: "Não conta pra ninguém. Galinha não tem drama. Estraga a imagem.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — No banco da praça
    c3_esc3: { escolhas: [
      { texto: "A. “Não vou contar. Mas você não é burro. Repete comigo.”", proxima: "c3_3a_1", pontos: { victor: 2 }, flags: ["Victor_nao_burro"] },
      { texto: "B. Não dizer nada. Só encostar o ombro no dele.", proxima: "c3_3b_1", pontos: { victor: 3 }, flags: ["Ombro_Victor"] },
      { texto: "C. “Eu te ajudo a estudar. Pra você não repetir uma terceira vez.”", proxima: "c3_3c_1", pontos: { victor: 2 }, flags: ["Estudar_com_Victor"] }
    ]},
    c3_3a_1: { quem: "victor", texto: "Repetir com você? Eu sou o rei de repetir, gatinha. Três anos de experiência.", proxima: "c3_3a_2" },
    c3_3a_2: { quem: "eu", texto: "Repete. “Eu não sou burro.”", proxima: "c3_3a_3" },
    c3_3a_3: { tipo: "narracao", texto: "Ele revira os olhos. Respira fundo. E fala, baixinho, olhando para o lado.", proxima: "c3_3a_4" },
    c3_3a_4: { quem: "victor", texto: "...Eu não sou burro. Pronto. Satisfeita? Agora o Caramelo vai achar que eu sou sentimental.", proxima: "c4_01" },
    c3_3b_1: { tipo: "narracao", texto: "Ela encosta o ombro no dele. O Victor fica rígido. Ele claramente não sabe o que fazer com um ombro encostado no dele sem que ninguém esteja flertando.", proxima: "c3_3b_2" },
    c3_3b_2: { tipo: "narracao", texto: "Depois, devagar, ele relaxa. Os dois ficam olhando os pombos. O Caramelo ronca em cima dos pés dela.", proxima: "c3_3b_3" },
    c3_3b_3: { quem: "victor", texto: "Você não vai fazer nenhuma pergunta?", proxima: "c3_3b_4" },
    c3_3b_4: { quem: "eu", texto: "Não.", proxima: "c3_3b_5" },
    c3_3b_5: { quem: "victor", texto: "...Todo mundo faz pergunta. Ou pena. Você só ficou aqui.", proxima: "c4_01" },
    c3_3c_1: { tipo: "narracao", texto: "O Victor olha para ela como se ela tivesse falado em outra língua.", proxima: "c3_3c_2" },
    c3_3c_2: { quem: "victor", texto: "Estudar? Eu? Com você? Que tipo de encontro é esse?", proxima: "c3_3c_3" },
    c3_3c_3: { quem: "eu", texto: "Um que você vai querer repetir.", proxima: "c3_3c_4" },
    c3_3c_4: { tipo: "narracao", texto: "Ele abre a boca para fazer uma piada. Não sai nenhuma. Ele fecha a boca. Depois balança a cabeça, rindo sozinho.", proxima: "c3_3c_5" },
    c3_3c_5: { quem: "victor", texto: "Tá. Uma vez. Se eu dormir em cima do livro, a culpa é sua.", proxima: "c4_01" },

    /* =================== CENA 4 — O PET SHOP =================== */
    // Cenário: pet shop do bairro (usa "corredor"). Prateleiras coloridas, cheiro de ração. Música: leve e engraçada.
    c4_01: { tipo: "narracao", cenario: "pet-shop", transicao: "tempo", legenda: "Cena 4 — O pet shop", sprite: null, texto: "À tarde, o Caramelo espirra três vezes seguidas. Ainda é o resfriado da semana passada. O Victor fica pálido na hora.", proxima: "c4_02" },
    c4_02: { quem: "victor", texto: "Pet shop. Agora. Tem um aqui perto que vende remédio. A moça de lá me conhece.", proxima: "c4_03" },
    c4_03: { tipo: "pensamento", texto: "Claro que conhece.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", texto: "O pet shop é pequeno, apertado, com prateleiras até o teto. A atendente conhece o Victor mesmo. Mas não do jeito que a SN imaginou. Ela conhece ele como o garoto que vem toda semana comprar ração com moeda.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "Enquanto a atendente vê o remédio, o Victor anda pelos corredores. Ele para na frente de uma caminha de cachorro. Redonda, macia, marrom. Fica olhando para ela por muito tempo.", proxima: "c4_06" },
    c4_06: { tipo: "narracao", texto: "Depois na frente das coleiras. Depois dos potes de comida e água. Depois de um saco de ração grande, de vinte quilos, que ele nunca conseguiu comprar.", proxima: "c4_07" },
    c4_07: { quem: "eu", texto: "Você está olhando como se quisesse levar tudo.", proxima: "c4_08" },
    c4_08: { quem: "victor", texto: "Isso é coisa de cachorro com casa. O Caramelo não tem casa.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "Ele fala isso rindo. Mas a mão dele está segurando a borda da caminha marrom. E não solta.", proxima: "c4_10" },
    c4_10: { quem: "eu", texto: "Por que você nunca levou ele pra sua casa?", proxima: "c4_11" },
    c4_11: { quem: "victor", texto: "O prédio não deixa. A minha mãe nunca está. E eu... eu não sou o tipo de pessoa que fica. Eu não fico com ninguém. Você sabe disso. A escola inteira sabe.", proxima: "c4_12" },
    c4_12: { quem: "victor", texto: "Se eu levar ele pra casa, ele vai achar que eu vou ficar pra sempre. E se eu não ficar?", proxima: "c4_13" },
    c4_13: { tipo: "narracao", texto: "Lá do balcão, o Caramelo espirra de novo. A atendente ri. O Victor olha para o cachorro. O cachorro olha de volta, com o olho bom, abanando o rabo devagar.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — No pet shop
    c4_esc4: { escolhas: [
      { texto: "A. “Você fica com ele há um ano. Todo dia. Você já ficou, Victor.”", proxima: "c4_4a_1", pontos: { victor: 3 }, flags: ["Victor_ja_ficou"] },
      { texto: "B. “O prédio não deixa? Então a gente esconde ele. Cachorro pequeno cabe em qualquer lugar.”", proxima: "c4_4b_1", pontos: { victor: 2 }, flags: ["Plano_esconder_Caramelo"] },
      { texto: "C. Pegar a caminha marrom e colocar no balcão, sem perguntar nada.", proxima: "c4_4c_1", pontos: { victor: 2 }, flags: ["SN_pegou_caminha"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "O Victor fica parado. A frase dela parece bater nele em câmera lenta.", proxima: "c4_4a_2" },
    c4_4a_2: { quem: "victor", texto: "...Todo dia. Até no dia que eu fui suspenso. Eu pulei o muro da escola pra dar comida pra ele.", proxima: "c4_4a_3" },
    c4_4a_3: { quem: "eu", texto: "Isso não é alguém que vai embora.", proxima: "c4_14" },
    c4_4b_1: { quem: "victor", texto: "Esconder. Um cachorro. No meu apartamento. De um síndico que mede o barulho do chuveiro.", proxima: "c4_4b_2" },
    c4_4b_2: { quem: "eu", texto: "Você já fugiu da coordenação a vida inteira. Um síndico é fácil.", proxima: "c4_4b_3" },
    c4_4b_3: { tipo: "narracao", texto: "Ele começa a rir. Primeiro baixinho, depois alto, encostado na prateleira de brinquedos de borracha. Um pato de borracha cai e apita no chão.", proxima: "c4_14" },
    c4_4c_1: { tipo: "narracao", texto: "Ela pega a caminha marrom da prateleira e leva até o balcão. Coloca do lado do remédio. Não fala nada.", proxima: "c4_4c_2" },
    c4_4c_2: { tipo: "narracao", texto: "O Victor olha para a caminha no balcão. Olha para ela. Olha para o Caramelo, que imediatamente sobe na caminha, dá três voltas e deita dentro, como se fosse dele desde sempre.", proxima: "c4_4c_3" },
    c4_4c_3: { quem: "victor", texto: "...Agora eu não consigo tirar ele daí. Você fez isso de propósito.", proxima: "c4_14" },

    // (todas as opções continuam aqui)
    c4_14: { tipo: "narracao", texto: "O Victor fica em silêncio por um tempo. Depois tira a carteira do bolso. Uma carteira velha, de velcro. Ele conta o dinheiro em cima do balcão. Notas amassadas. Moedas. O dinheiro de várias madrugadas.", proxima: "c4_15" },
    c4_15: { quem: "victor", texto: "A caminha. O remédio. Um saco de ração. O pequeno, não o de vinte quilos. E uma coleira.", proxima: "c4_16" },
    c4_16: { tipo: "narracao", texto: "A atendente sorri para ele como quem esperava esse dia há muito tempo. Ela aponta para um potinho de plaquinhas de metal em cima do balcão.", proxima: "c4_17" },
    c4_17: { quem: "desconhecido", rotulo: "Atendente", texto: "Quer gravar o nome dele numa plaquinha? É de graça pra quem adota.", proxima: "c4_18" },
    c4_18: { tipo: "narracao", texto: "O Victor olha para a SN. Pela primeira vez no dia, ele parece não saber o que fazer.", proxima: "c4_19" },
    c4_19: { quem: "victor", texto: "Escreve você. Eu tenho letra de quem repetiu duas vezes.", proxima: "c4_esc5" },

    // ▶ ESCOLHA 5 — A plaquinha do Caramelo
    c4_esc5: { escolhas: [
      { texto: "A. “CARAMELO. Se achar, devolve pro Victor.” E o telefone dele embaixo.", proxima: "c4_5a_1", pontos: { victor: 2 }, flags: ["Plaquinha_Victor"] },
      { texto: "B. “CARAMELO. Ele tem casa.”", proxima: "c4_5b_1", pontos: { victor: 3 }, flags: ["Plaquinha_casa"] },
      { texto: "C. “CARAMELO. Segurança pessoal.”", proxima: "c4_5c_1", pontos: { victor: 2 }, flags: ["Plaquinha_seguranca"] }
    ]},
    c4_5a_1: { tipo: "narracao", texto: "A atendente grava. O Victor pega a plaquinha e lê em voz alta, devagar, como se não acreditasse.", proxima: "c4_5a_2" },
    c4_5a_2: { quem: "victor", texto: "“Devolve pro Victor.” Ninguém nunca escreveu meu nome em nada que não fosse advertência.", proxima: "c4_20" },
    c4_5b_1: { tipo: "narracao", texto: "A atendente grava. Quando o Victor lê, ele não diz nada. Ele só fecha a mão em volta da plaquinha e aperta, com força.", proxima: "c4_5b_2" },
    c4_5b_2: { tipo: "narracao", texto: "Ela vê os olhos dele ficarem molhados por meio segundo. Depois ele esfrega o rosto com a manga da jaqueta e diz que é alergia a ração.", proxima: "c4_20" },
    c4_5c_1: { tipo: "narracao", texto: "O Victor solta uma gargalhada que assusta um papagaio no fundo da loja.", proxima: "c4_5c_2" },
    c4_5c_2: { quem: "victor", texto: "Perfeito. Agora ele é oficial. Ninguém mais vai expulsar ele do fliperama.", proxima: "c4_20" },

    // (todas as opções continuam aqui)
    c4_20: { tipo: "narracao", texto: "O Victor se ajoelha no chão do pet shop. Tira a cordinha velha e encardida que o Caramelo usava no pescoço. Coloca a coleira nova, vermelha, com a plaquinha brilhando.", proxima: "c4_21" },
    c4_21: { tipo: "narracao", texto: "O Caramelo fica parado, sem entender. Depois lambe a mão do Victor. Uma vez. E fica ali, com a cabeça encostada no joelho dele.", proxima: "c4_22" },
    c4_22: { tipo: "pensamento", texto: "O garoto que diz pra todo mundo que não fica com ninguém acabou de gastar o dinheiro de um mês de madrugadas pra ficar com alguém pra sempre.", proxima: "c5_01" },

    /* =================== CENA 5 — A ESTAÇÃO =================== */
    // Cenário: frente da estação, pôr do sol (usa "saida-colegio"). Música: piano e violão, quente.
    c5_01: { tipo: "narracao", cenario: "estacao-por-do-sol", transicao: "tempo", legenda: "Cena 5 — A estação", sprite: null, texto: "No fim da tarde, eles voltam para a frente da estação. O sol está se pondo atrás dos trilhos, deixando tudo laranja.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", texto: "Num canto, entre a parede da estação e uma lixeira, tem um pedaço de papelão velho, dobrado, com um cobertor rasgado em cima. Era ali que o Caramelo dormia.", proxima: "c5_03" },
    c5_03: { tipo: "narracao", texto: "O Victor para na frente do papelão. Fica olhando. O Caramelo, de coleira nova, cheira o papelão, abana o rabo e depois volta para o lado do Victor.", proxima: "c5_04" },
    c5_04: { quem: "victor", texto: "Um ano. Eu sentava aqui com ele toda madrugada, depois do caminhão. Às vezes eu dormia aqui também.", proxima: "c5_05" },
    c5_05: { tipo: "narracao", texto: "Ele pega o papelão. Dobra. Coloca na lixeira. Depois pega o cobertor rasgado e guarda dentro da sacola do pet shop, junto com a caminha nova.", proxima: "c5_06" },
    c5_06: { quem: "eu", texto: "Você vai guardar o cobertor?", proxima: "c5_07" },
    c5_07: { quem: "victor", texto: "Tem o cheiro dele. E o meu. Não dá pra jogar fora uma coisa dessas.", proxima: "c5_08" },
    c5_08: { tipo: "narracao", texto: "Eles sentam no banco da estação. O mesmo banco onde ele dormia. O Caramelo deita entre os dois, metade em cima do pé dela, metade em cima do pé dele.", proxima: "c5_09" },
    c5_09: { tipo: "narracao", texto: "Um trem passa. O vento bagunça o cabelo dos dois. Ninguém fala nada por um bom tempo.", proxima: "c5_10" },
    c5_10: { quem: "victor", texto: "Sabe que eu falei aquela regra hoje de manhã? Não vale se apaixonar?", proxima: "c5_11" },
    c5_11: { quem: "eu", texto: "Lembro.", proxima: "c5_12" },
    c5_12: { quem: "victor", texto: "Eu falo isso pra todo mundo. Desde sempre. É tipo uma vacina.", proxima: "c5_13" },
    c5_13: { tipo: "narracao", texto: "Ele não termina. Fica olhando para os trilhos, com a mão no pescoço do Caramelo, mexendo na plaquinha nova.", proxima: "c5_14" },
    c5_14: { quem: "victor", texto: "Hoje foi um dia muito bom. Bom demais. Isso é perigoso pra alguém como eu.", proxima: "c5_esc6" },

    // ▶ ESCOLHA 6 — No banco da estação (o romance continua devagar)
    c5_esc6: { escolhas: [
      { texto: "A. “Então a gente faz outro dia bom. E vê se fica menos perigoso.”", proxima: "c5_6a_1", pontos: { victor: 3 }, flags: ["Outro_dia_Victor"] },
      { texto: "B. “Perigoso por quê?”", proxima: "c5_6b_1", pontos: { victor: 2 }, flags: ["Victor_perigoso"] },
      { texto: "C. Fazer carinho no Caramelo e não responder. Deixar o silêncio responder.", proxima: "c5_6c_1", pontos: { victor: 2 } }
    ]},
    c5_6a_1: { tipo: "narracao", texto: "O Victor vira para ela devagar. O sol bate no rosto dele. Ele não sorri do jeito debochado de sempre. Sorri pequeno.", proxima: "c5_6a_2" },
    c5_6a_2: { quem: "victor", texto: "Outro dia. Com o Caramelo.", proxima: "c5_6a_3" },
    c5_6a_3: { quem: "eu", texto: "Com o Caramelo.", proxima: "c5_6a_4" },
    c5_6a_4: { quem: "victor", texto: "Tá. Mas aí a regra três já era. Eu não respondo pelo que acontecer.", proxima: "c5_15" },
    c5_6b_1: { quem: "victor", texto: "Porque eu sei ir embora. Eu sou ótimo nisso. Uma menina por semana, nenhuma fica, ninguém sai machucado.", proxima: "c5_6b_2" },
    c5_6b_2: { quem: "victor", texto: "Mas hoje eu não quis ir embora nenhuma vez. Nem quando você ganhou de mim na corrida. Três vezes.", proxima: "c5_6b_3" },
    c5_6b_3: { tipo: "pensamento", texto: "Ele fala isso como quem confessa um crime.", proxima: "c5_15" },
    c5_6c_1: { tipo: "narracao", texto: "Ela faz carinho na orelha caída do Caramelo. O Victor faz carinho do outro lado. Os dedos dos dois se esbarram em cima do pelo do cachorro.", proxima: "c5_6c_2" },
    c5_6c_2: { tipo: "narracao", texto: "Nenhum dos dois tira a mão. Nenhum dos dois comenta. O Caramelo suspira, satisfeito, e fecha o olho bom.", proxima: "c5_15" },

    // (todas as opções continuam aqui)
    c5_15: { tipo: "narracao", texto: "Quando o céu fica roxo, o Victor se levanta e coloca a sacola do pet shop no ombro. O Caramelo levanta junto.", proxima: "c5_16" },
    c5_16: { quem: "victor", texto: "Eu moro do outro lado da linha do trem. Te levo até a metade do caminho? Eu preciso apresentar o Caramelo pro síndico antes que ele descubra sozinho.", proxima: "c5_17" },
    c5_17: { tipo: "narracao", texto: "Eles andam até a ponte da linha do trem. Na metade, o Victor para.", proxima: "c5_18" },
    c5_18: { quem: "victor", texto: "Daqui você conhece o caminho, né? Manda mensagem quando chegar. Senão eu vou até sua casa com o Caramelo e a gente late no seu portão.", proxima: "c5_19" },
    c5_19: { tipo: "narracao", texto: "Ele vai embora de costas, acenando com o pirulito. A ponta do cobertor velho aparece para fora da sacola do pet shop. O Caramelo olha para trás uma vez, para ela, antes de seguir o dono novo.", proxima: "c6_01" },

    /* =================== CENA 6 — A VOLTA =================== */
    // Cenário: rua do bairro, começo da noite (usa "saida-colegio"). Postes acendendo. Música: piano baixo.
    c6_01: { tipo: "narracao", cenario: "rua-noite", transicao: "tempo", legenda: "Cena 6 — A volta", sprite: null, texto: "A rua do bairro está quase vazia. Os postes vão acendendo um por um. A SN anda devagar. A blusa cheia de pelo caramelo. O tênis ainda desamarrado.", proxima: "c6_02" },
    c6_02: { tipo: "pensamento", texto: "Foi um dia bom. Um dia bom de verdade. Sem visão, sem faca, sem foto de ninguém.", proxima: "c6_03" },
    c6_03: { tipo: "pensamento", texto: "Eu esqueci de ter medo por algumas horas. Fazia tempo.", proxima: "c6_04" },
    c6_04: { tipo: "narracao", cenario: "frente-lamen", texto: "Na frente da lojinha de lámen do tio do Kaito, a luz ainda está acesa. A porta abre e alguém sai carregando dois sacos enormes de cebola, um em cada braço.", proxima: "c6_05" },
    c6_05: { tipo: "narracao", sprite: "kaito", texto: "É o Kaito. De avental, com o olho ainda roxo do festival, o cabelo preso para trás com uma faixa. Ele para quando vê ela.", proxima: "c6_06" },
    c6_06: { tipo: "narracao", texto: "Ele olha para ela. Para a blusa cheia de pelo. Para a sacola de papel do fliperama na mão dela. Para o rosto dela, que ainda está sorrindo de alguma coisa.", proxima: "c6_07" },
    c6_07: { tipo: "narracao", texto: "Por um segundo, alguma coisa passa pelo rosto dele. Rápido. Depois some, e fica só aquela cara de nada.", proxima: "c6_08" },
    c6_08: { quem: "kaito", texto: "Oi.", proxima: "c6_09" },
    c6_09: { quem: "eu", texto: "Oi. Você está trabalhando no sábado à noite?", proxima: "c6_10" },
    c6_10: { quem: "kaito", texto: "O tio torceu o pé. Alguém tem que carregar cebola.", proxima: "c6_11" },
    c6_11: { tipo: "narracao", texto: "Silêncio. Ele não pergunta nada. Ela sabe que ele sabe onde ela estava. O pátio inteiro ouviu o Victor falar do sábado.", proxima: "c6_12" },
    c6_12: { quem: "kaito", texto: "Divertiu?", proxima: "c6_13" },
    c6_13: { tipo: "narracao", texto: "Uma palavra só. Dita com a voz mais neutra do mundo. Olhando para os sacos de cebola.", proxima: "c6_esc7" },

    // ▶ ESCOLHA 7 — Com o Kaito, na frente da lojinha
    c6_esc7: { escolhas: [
      { texto: "A. “Muito. O Victor adotou o Caramelo.”", proxima: "c6_7a_1", pontos: { kaito: 1 }, flags: ["Contou_Kaito_Caramelo"] },
      { texto: "B. “Foi legal.” E mudar de assunto: “Quer ajuda com a cebola?”", proxima: "c6_7b_1", pontos: { kaito: 2 }, flags: ["Ajudou_Kaito_cebola"] },
      { texto: "C. “Por que você quer saber?”", proxima: "c6_7c_1", pontos: { kaito: 2 }, flags: ["Perguntou_Kaito_porque"] }
    ]},
    c6_7a_1: { tipo: "narracao", texto: "O Kaito fica um segundo parado.", proxima: "c6_7a_2" },
    c6_7a_2: { quem: "kaito", texto: "O cachorro da estação. O de uma orelha.", proxima: "c6_7a_3" },
    c6_7a_3: { quem: "eu", texto: "Esse.", proxima: "c6_7a_4" },
    c6_7a_4: { quem: "kaito", texto: "...Que bom. Aquele cachorro merecia.", proxima: "c6_7a_5" },
    c6_7a_5: { tipo: "narracao", texto: "Ele fala isso de verdade. Mas aperta os sacos de cebola com tanta força que um deles rasga no fundo, e três cebolas rolam pela calçada.", proxima: "c6_14" },
    c6_7b_1: { quem: "kaito", texto: "Não precisa. Eu dou conta.", proxima: "c6_7b_2" },
    c6_7b_2: { tipo: "narracao", texto: "Ela pega um dos sacos mesmo assim, sem perguntar. Ele solta, porque não tem como segurar contra ela. Os dois carregam as cebolas para dentro da lojinha em silêncio.", proxima: "c6_7b_3" },
    c6_7b_3: { tipo: "narracao", texto: "O gato laranja olha para os dois de cima do caixa. Lá dos fundos, o tio do Kaito grita que ela é a namorada mais forte que o Kaito já trouxe. O Kaito grita de volta que ela não é namorada de ninguém.", proxima: "c6_7b_4" },
    c6_7b_4: { tipo: "narracao", texto: "Rápido demais. Alto demais.", proxima: "c6_14" },
    c6_7c_1: { tipo: "narracao", texto: "O Kaito levanta os olhos dos sacos de cebola. Fica olhando para ela por um segundo inteiro.", proxima: "c6_7c_2" },
    c6_7c_2: { quem: "kaito", texto: "Não quero. Só perguntei. É educação.", proxima: "c6_7c_3" },
    c6_7c_3: { quem: "eu", texto: "Você nunca pergunta nada por educação, Kaito.", proxima: "c6_7c_4" },
    c6_7c_4: { tipo: "narracao", texto: "Ele não responde. Ele vira e entra na lojinha com as cebolas. Mas deixa a porta aberta. Atrás dele, ela escuta ele resmungando alguma coisa para o gato.", proxima: "c6_14" },

    // (todas as opções continuam aqui)
    c6_14: { tipo: "narracao", sprite: "kaito", texto: "O Kaito tira o avental, pendura no gancho da porta e pega a jaqueta.", proxima: "c6_15" },
    c6_15: { quem: "kaito", texto: "Eu te levo. Tá escuro.", proxima: "c6_16" },
    c6_16: { quem: "eu", texto: "Faltam três quarteirões.", proxima: "c6_17" },
    c6_17: { quem: "kaito", texto: "Três quarteirões escuros.", proxima: "c6_18" },
    c6_18: { tipo: "narracao", texto: "Eles andam lado a lado. Ele não fala nada. Ela também não. Os passos dos dois fazem o mesmo barulho na calçada.", proxima: "c6_19" },
    c6_19: { tipo: "narracao", texto: "Na metade do caminho, ele estica a mão e tira um pelo caramelo do ombro dela. Só um. Com dois dedos. Sem olhar para ela. Depois enfia a mão no bolso de novo, como se nada tivesse acontecido.", proxima: "c6_cam1" },
    c6_cam1: { caminhos: [
      { flag: "Espetinho_Kaito", proxima: "c6_k_espetinho" }
    ], proxima: "c6_20" },
    c6_k_espetinho: { quem: "kaito", texto: "O espetinho de ontem estava frio.", proxima: "c6_k_espetinho2" },
    c6_k_espetinho2: { quem: "eu", texto: "Você comeu até o fim.", proxima: "c6_k_espetinho3" },
    c6_k_espetinho3: { quem: "kaito", texto: "...Eu como tudo até o fim. É questão de princípio.", proxima: "c6_20" },
    c6_20: { tipo: "narracao", texto: "Na frente do portão da casa dela, ele para. Olha para a janela do quarto dela. Depois para a rua dos dois lados, procurando um carro preto, ou uma maçã em cima de um muro, ou qualquer coisa errada.", proxima: "c6_21" },
    c6_21: { quem: "kaito", texto: "Boa noite.", proxima: "c6_22" },
    c6_22: { tipo: "narracao", texto: "Ele vira e vai embora, com as mãos nos bolsos. Não olha para trás.", proxima: "c6_23" },
    c6_23: { tipo: "pensamento", texto: "Ele não perguntou nada do Victor. Nenhuma pergunta. Nem uma.", proxima: "c6_24" },
    c6_24: { tipo: "pensamento", texto: "Ele carregou três quarteirões de silêncio pra me trazer até aqui.", proxima: "ep_01" },

    /* =================== EPÍLOGO — DUAS MENSAGENS =================== */
    // Cenário: quarto da SN, noite. Música: piano leve.
    ep_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Epílogo — Mensagens", sprite: null, texto: "No quarto, ela tira a blusa cheia de pelo e joga no cesto. O cheiro de cachorro e de pipoca de fliperama fica no ar. Ela gosta.", proxima: "ep_02" },
    ep_02: { tipo: "narracao", texto: "O celular tem vinte e três mensagens da Mio. Todas em maiúscula.", proxima: "ep_03" },
    ep_03: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "E AÍ??? COMO FOI??? ELE TE BEIJOU??? VOCÊ BEIJOU ELE??? O CACHORRO ESTAVA JUNTO??? ME LIGA AGORA OU EU VOU AÍ", proxima: "ep_04" },
    ep_04: { tipo: "narracao", texto: "Ela ri sozinha e responde: “Ninguém beijou ninguém. Ele adotou o cachorro. Amanhã eu te conto.” A Mio manda quinze emojis de choro.", proxima: "ep_05" },
    ep_05: { tipo: "narracao", texto: "Depois, uma mensagem de um número desconhecido. Uma foto. Ela e o Victor no banco da estação, ao pôr do sol, com o Caramelo entre os dois. Tirada de longe. Do outro lado dos trilhos.", proxima: "ep_06" },
    ep_06: { quem: "mensagem", rotulo: "Número desconhecido", texto: "Que casal fofo 🙂", proxima: "ep_07" },
    ep_07: { tipo: "narracao", texto: "Ela fica olhando para a foto. O frio sobe pela nuca. Ela apaga a mensagem. Depois coloca o celular virado para baixo em cima da escrivaninha.", proxima: "ep_08" },
    ep_08: { tipo: "pensamento", texto: "Hoje não. Hoje ele não vai estragar.", proxima: "ep_09" },
    ep_09: { tipo: "narracao", texto: "O celular vibra de novo. Ela vira. Uma foto. Um cachorro caramelo de uma orelha caída, deitado numa caminha marrom nova, no meio de um quarto bagunçado, com um cobertor velho e rasgado embaixo da cabeça.", proxima: "ep_10" },
    ep_10: { quem: "mensagem", rotulo: "Victor 😏", texto: "o síndico descobriu em 4 minutos. eu falei que ele era um aspirador de pó. ele não acreditou. mas deixou. o caramelo já tomou minha cama. eu vou dormir na caminha dele. obrigado pelo dia, gatinha", proxima: "ep_11" },
    ep_11: { quem: "mensagem", rotulo: "Victor 😏", texto: "(foi o melhor dia do ano. não conta pra ninguém. estraga a imagem)", proxima: "ep_12" },
    ep_12: { tipo: "narracao", texto: "Ela sorri para a tela. Responde com uma foto da plaquinha que ela tirou no pet shop. E, logo depois, chega mais uma mensagem. De outro número. O de sempre.", proxima: "ep_13" },
    ep_13: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Chegou?", proxima: "ep_14" },
    ep_14: { tipo: "narracao", texto: "Ele deixou ela no portão há quinze minutos. Ele viu ela entrar.", proxima: "ep_15" },
    ep_15: { tipo: "narracao", texto: "Ela responde: “Você me deixou na porta, Kaito.” Os três pontinhos aparecem. Somem. Aparecem. Somem. Ficam muito tempo aparecendo e sumindo.", proxima: "ep_16" },
    ep_16: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu sei. Só pra confirmar.", proxima: "ep_17" },
    ep_17: { tipo: "narracao", texto: "Ela deita na cama, com o celular em cima do peito. Olha para as estrelinhas do teto, apagadas.", proxima: "ep_18" },
    ep_18: { tipo: "pensamento", texto: "Um cachorro com casa. Um galinha que gastou um mês de madrugadas numa caminha marrom. Um líder que carregou cebola e silêncio pra me trazer até a porta.", proxima: "ep_19" },
    ep_19: { tipo: "pensamento", texto: "E um monstro do outro lado dos trilhos, tirando foto.", proxima: "ep_20" },
    ep_20: { tipo: "pensamento", texto: "Amanhã eu penso no monstro. Hoje eu fico com o resto.", proxima: "ep_fim" },

    // Fim do Capítulo 9 (crie a entrada "capitulo9" em dados/capitulos.js)
    ep_fim: { fim: "capitulo9" }
  }
});

/*
 * GANCHO PARA O CAPÍTULO 10 (anotações do roteiro)
 *  • A Reina pede transferência para a turma da SN e chega com a Akane.
 *    Ela dá em cima do Takeo abertamente. Finge que não gosta da SN, mas se aproxima.
 *  • A Sayuri continua o bullying, agora escondido: fofocas com ajuda do Ren.
 *    Ela já foi amiga da gangue e teve alguma coisa com o Blake, por isso eles não cortam ela de vez.
 *  • (Capítulo 11: o dia da água de peixe podre.)
 *  • O Ren tirou foto da SN com o Victor na estação.
 *  • Romance: Victor (“foi o melhor dia do ano”), Kaito (três quarteirões de silêncio).
 *
 * ESCOLHAS DO CAPÍTULO (7)
 *  1 Regras do Victor · 2 Máquina de pelúcia · 3 Banco da praça · 4 Pet shop
 *  5 Plaquinha do Caramelo · 6 Banco da estação · 7 Kaito na frente da lojinha
 *
 * FLAGS NOVAS
 *  Regra_sem_gatinha · Regra_tres_dele · Caramelo_primeiro · Ganhou_pelucia
 *  Victor_ganhou_pelucia · Victor_nao_burro · Ombro_Victor · Estudar_com_Victor
 *  Victor_ja_ficou · Plano_esconder_Caramelo · SN_pegou_caminha · Plaquinha_Victor
 *  Plaquinha_casa · Plaquinha_seguranca · Outro_dia_Victor · Victor_perigoso
 *  Contou_Kaito_Caramelo · Ajudou_Kaito_cebola · Perguntou_Kaito_porque
 */