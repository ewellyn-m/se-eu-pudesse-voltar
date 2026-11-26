/*
 * =====================================================================
 *  CAPÍTULO 17 — Meia palavra
 *  Do fim de semana depois do Capítulo 16 até o domingo seguinte.
 * =====================================================================
 *
 *  O QUE ACONTECE
 *    • A SN procura o lugar da visão. Acha no mapa uma fábrica de cimento abandonada perto do rio
 *      ("Cimentos", com meia palavra caída). Vai lá sozinha. É igual. Mas ela não sabe QUANDO.
 *    • Segunda: a Sayuri e o Blake juntos. A Mio magoada. O Blake e o Kaito treinando (412 a 0).
 *    • Quarta: na janela, a SN pede para o Kaito nunca ficar de costas. Ele ri: ninguém chega perto.
 *    • Sexta: depois do intervalo, os meninos somem. No fim da aula, a SN ouve alunos comentando:
 *      a gangue do Kaito está brigando com a gangue do Ren AGORA, na fábrica de cimento.
 *      Ela corre. Máscara e boné. Ninguém vê o rosto dela.
 *    • A briga: o Kaito é um monstro, ninguém encosta nele. Só um golpe baixo: pó de cimento nos
 *      olhos, e a barra de ferro por trás enquanto ele protege o Takeo caído.
 *      A SN se joga na frente. Leva a barrada. Não mexe um músculo. Quebra a barra no meio e
 *      arremessa longe. O Ren só diz "Recua".
 *    • Domingo: o Kaito aparece. "Não pode ter sido você. Ninguém aguenta aquilo."
 *      À tarde, a avó da SN vem almoçar. Um domingo normal.
 *
 *  REGRAS QUE ESTE CAPÍTULO SEGUE
 *    • A briga é só da gangue do Kaito contra a gangue do Ren. A Reina não tem nada com isso.
 *    • A mãe e a avó não se metem nas brigas da SN.
 *    • Nada de gangue dentro da escola: os alunos comentam, os meninos não.
 *    • Os meninos não acham que a SN tem poder. Ninguém viu o rosto da menina de máscara.
 *    • O Ren quase não fala. Ninguém fala o apelido antigo.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Kaito, Takeo, Blake, Ryuji, Mio, Hana, Sayuri, Victor, Ren (rótulo "desconhecido"),
 *    Mãe, Avó (da SN). Sem nome: alunos na saída, Membro da Midorata, Garoto do olho amarelo.
 *
 *  CENÁRIOS
 *    Fábrica de cimento → "beco-mercado" (troque por "fabrica-cimento" se criar)
 *    Escola: corredor, sala-de-aula, clube-leitura, saida-colegio
 *    Apartamento da SN → "apartamento" · Quarto → "quarto-sn"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Takeo_chama_primeiro, Contou_Kaito_Reina.
 *
 *  Crie a entrada "capitulo17" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo17", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — MEIA PALAVRA =================== */
    // Cenário: quarto da SN, sábado; depois a fábrica, domingo (usa "beco-mercado"). Música: grave, baixa.
    c1_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Sábado", sprite: null, texto: "Sábado. Ela passa a tarde inteira no chão do quarto, com o celular na mão, procurando uma palavra pela metade.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "“Fábrica de cimento abandonada.” “Cimentos rio.” “Galpão sem teto perto do rio.” Fotos de lugares que não são o lugar. Galpões errados. Rios errados.", proxima: "c1_03" },
    c1_03: { tipo: "pensamento", texto: "Na outra vida, eu passei anos sem procurar nada. Eu só deixava as coisas acontecerem. Nessa, eu vou procurar até o celular descarregar.", proxima: "c1_04" },
    c1_04: { tipo: "narracao", texto: "Às sete da noite, num mapa de satélite, na beira do rio, quarenta minutos de ônibus da escola: um terreno cinza. Um galpão com o teto aberto. E, no portão, uma placa tão pequena que quase não aparece na foto.", proxima: "c1_05" },
    c1_05: { tipo: "narracao", texto: "Ela aumenta a imagem até ficar só pixel. Mas dá para ler. “CIMENTOS”. A outra metade da palavra não está mais lá.", proxima: "c1_06" },
    c1_06: { tipo: "narracao", cenario: "galpao", transicao: "tempo", legenda: "Domingo", texto: "No domingo, ela vai. Sozinha. Dois ônibus e uma caminhada por uma rua de terra. O portão de ferro está aberto, pendurado numa dobradiça só.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", texto: "O pátio rachado. As poças. O galpão sem teto. A cerca torta. O rio passando escuro atrás. E, encostado no muro do fundo, um caminhão velho, sem pneu, com a carroceria enferrujada.", proxima: "c1_08" },
    c1_08: { tipo: "narracao", texto: "Igual. Tudo igual. Ela anda pelo pátio contando os passos. Do portão até o meio: quarenta e dois. Do meio até o caminhão: trinta. O caminho mais curto para a rua: pelo buraco da cerca, do lado do galpão.", proxima: "c1_09" },
    c1_09: { tipo: "narracao", texto: "Ela para no lugar exato onde a poça estava. Agora é só uma poça de chuva. Clara. Com uma folha boiando.", proxima: "c1_10" },
    c1_10: { tipo: "pensamento", texto: "Eu sei onde. Eu não sei quando. Eu não sei quem.", proxima: "c1_11" },
    c1_11: { tipo: "pensamento", texto: "E se eu perguntar pra eles, eles vão dizer que não tem briga nenhuma. Eles nunca contam pra mim. Eles acham que estão me protegendo.", proxima: "c1_12" },
    c1_12: { tipo: "pensamento", texto: "Então eu vou ficar de olho. Em todos. Todo dia. Até acontecer.", proxima: "c1b_01" },

    /* =================== CENA 1.5 — SEGUNDA =================== */
    // Cenário: corredor (janela para o pátio), depois pátio dos fundos. Sem assunto de gangue na escola.
    c1b_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Segunda-feira", sprite: "sayuri", texto: "Segunda-feira. No intervalo, pela janela do corredor, dá para ver o banco do pátio. A Sayuri e o Blake. Sentados juntos. Ela dividindo um pote de morango com ele. Ele comendo, sem jeito, um por um.", proxima: "c1b_02" },
    c1b_02: { tipo: "narracao", sprite: "mio", texto: "A Mio está do lado da SN, na janela. Ela não fala nada. Só fica olhando. Depois de um tempo, ela solta a cortina, que estava segurando com força demais.", proxima: "c1b_03" },
    c1b_03: { quem: "mio", texto: "Ele odeia morango. Ele me disse. No festival, ele me deu o espetinho de morango e ficou com o de banana.", proxima: "c1b_04" },
    c1b_04: { quem: "mio", texto: "Eu vou no banheiro. Não vem atrás. É sério. Hoje eu não quero ninguém atrás.", proxima: "c1b_05" },
    c1b_05: { tipo: "narracao", sprite: null, texto: "Ela vai. A Hana olha para a SN. A SN faz que sim. A Hana vai atrás mesmo assim, de longe, sem a Mio ver.", proxima: "c1b_06" },
    c1b_06: { tipo: "pensamento", texto: "Na outra vida, o Blake morreu sem falar nada pra Mio. Nessa, ele está vivo. Comendo morango que ele odeia, do lado da Sayuri.", proxima: "c1b_07" },
    c1b_07: { tipo: "pensamento", texto: "Vivo é melhor. Vivo sempre é melhor. Mas dói igual.", proxima: "c1b_10" },
    c1b_10: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", sprite: "kaito", texto: "Depois da aula, a SN passa pelo pátio dos fundos. Desde a visão, ela passa por todo lugar onde eles estão. O Kaito e o Blake estão embaixo da arquibancada. Não no saco de pancada. Um contra o outro.", proxima: "c1b_11" },
    c1b_11: { tipo: "narracao", texto: "Não é briga. É treino. Ou é briga do jeito deles, que é a mesma coisa. O Blake avança. O Kaito desvia. O Blake avança de novo. O Kaito pega o braço dele, gira, e o Blake cai de costas na areia.", proxima: "c1b_12" },
    c1b_12: { quem: "kaito", texto: "Quatrocentos e doze.", proxima: "c1b_13" },
    c1b_13: { quem: "blake", sprite: "blake", texto: "Você não conta.", proxima: "c1b_14" },
    c1b_14: { quem: "kaito", sprite: "kaito", texto: "Eu conto desde os sete anos.", proxima: "c1b_15" },
    c1b_15: { tipo: "narracao", sprite: "blake", texto: "O Blake fica deitado na areia, olhando para o céu. E ri. Pelo nariz. Curto. O Kaito estende a mão. O Blake segura e levanta.", proxima: "c1b_16" },
    c1b_16: { tipo: "narracao", sprite: null, texto: "Eles veem a SN na beirada da arquibancada. O Kaito joga uma garrafa de água para o Blake. O Blake pega sem olhar.", proxima: "c1b_17" },
    c1b_17: { quem: "kaito", sprite: "kaito", texto: "Ele saiu com a Sayuri no sábado.", proxima: "c1b_18" },
    c1b_18: { quem: "blake", sprite: "blake", texto: "Sorvete.", proxima: "c1b_19" },
    c1b_19: { quem: "kaito", sprite: "kaito", texto: "E aí?", proxima: "c1b_20" },
    c1b_20: { quem: "blake", sprite: "blake", texto: "Ela falou do primeiro ano o tempo todo.", proxima: "c1b_20b" },
    c1b_20b: { quem: "kaito", sprite: "kaito", texto: "E você?", proxima: "c1b_20c" },
    c1b_20c: { quem: "blake", sprite: "blake", texto: "Eu comi o sorvete.", proxima: "c1b_20d" },
    c1b_20d: { tipo: "narracao", sprite: null, texto: "O Kaito balança a cabeça, devagar, como quem desiste de alguém que ama muito.", proxima: "c1b_esc" },

    // ▶ ESCOLHA 1 — Embaixo da arquibancada
    c1b_esc: { escolhas: [
      { texto: "A. “E a Mio, Blake?”", proxima: "c1b_a1", pontos: { blake: 1, mio: 2 }, flags: ["Perguntou_Mio_arquibancada"] },
      { texto: "B. “Você gosta dela? Da Sayuri?”", proxima: "c1b_b1", pontos: { blake: 1 }, flags: ["Perguntou_Sayuri_arquibancada"] },
      { texto: "C. Não falar nada. Jogar a própria toalha pra ele, que está cheio de areia.", proxima: "c1b_c1", pontos: { blake: 2 }, flags: ["Toalha_Blake"] }
    ]},
    c1b_a1: { tipo: "narracao", sprite: "blake", texto: "Ele para com a garrafa na boca. Abaixa devagar.", proxima: "c1b_a2" },
    c1b_a2: { quem: "blake", texto: "A Mio nunca falou nada.", proxima: "c1b_a3" },
    c1b_a3: { quem: "kaito", sprite: "kaito", texto: "Você também não.", proxima: "c1b_a4" },
    c1b_a4: { tipo: "narracao", sprite: "blake", texto: "O Blake olha para o Kaito. Muito tempo. E não discute. Ele nunca discute com o Kaito quando o Kaito tem razão.", proxima: "c1b_a5" },
    c1b_a5: { quem: "blake", texto: "...Eu também não.", proxima: "c1b_21" },
    c1b_b1: { tipo: "narracao", sprite: "blake", texto: "Ele pensa. Do jeito dele. Devagar.", proxima: "c1b_b2" },
    c1b_b2: { quem: "blake", texto: "Eu gostava. No primeiro ano.", proxima: "c1b_b3" },
    c1b_b3: { quem: "eu", texto: "E agora?", proxima: "c1b_b4" },
    c1b_b4: { quem: "blake", texto: "Agora ela pediu.", proxima: "c1b_b5" },
    c1b_b5: { tipo: "narracao", texto: "Como se isso fosse uma resposta. Pra ele, talvez seja.", proxima: "c1b_21" },
    c1b_c1: { tipo: "narracao", sprite: "blake", texto: "Ela joga a toalha. Ele pega no ar. Fica olhando para ela, para a toalha, para ela de novo. Um segundo a mais do que precisa.", proxima: "c1b_c2" },
    c1b_c2: { quem: "blake", texto: "...Valeu.", proxima: "c1b_c3" },
    c1b_c3: { tipo: "narracao", sprite: "kaito", texto: "O Kaito vê esse segundo a mais. Não fala nada. Só levanta uma sobrancelha para o Blake. O Blake joga a toalha na cara dele.", proxima: "c1b_21" },
    c1b_21: { cenario: "saida-colegio", tipo: "narracao", sprite: "sayuri", texto: "Na saída, a Sayuri está no portão. Esperando. O Blake pega a mochila, olha para o Kaito, e vai.", proxima: "c1b_22" },
    c1b_22: { tipo: "narracao", sprite: "kaito", texto: "O Kaito fica parado do lado da SN, olhando o amigo ir embora.", proxima: "c1b_23" },
    c1b_23: { quem: "kaito", texto: "Ele faz isso desde pequeno. Quando alguém pede, ele vai. Mesmo quando não quer.", proxima: "c1b_24" },
    c1b_24: { tipo: "pensamento", texto: "E eu continuo sem saber quando vai ser. Cada dia que passa sem nada acontecer é um dia mais perto.", proxima: "c2_01" },

    /* =================== CENA 2 — DE COSTAS =================== */
    // Cenário: corredor do segundo andar, janela, quarta no intervalo. Música: piano baixo.
    c2_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Quarta-feira", sprite: null, texto: "Quarta. Três dias olhando para eles o tempo todo. Ela conta os meninos na entrada. Conta no intervalo. Conta na saída. Todos estão lá. Todo dia. Nada acontece.", proxima: "c2_02" },
    c2_02: { tipo: "pensamento", texto: "Nada acontecer é pior. Toda vez que alguém demora pra voltar do banheiro, meu coração para.", proxima: "c2_03" },
    c2_03: { tipo: "narracao", sprite: "kaito", texto: "No intervalo, o Kaito está na janela do corredor. Igual à semana do balde. Encostado no parapeito, de braços cruzados. Quando ela para do lado, ele não olha. Mas chega um pouco para o lado, para ela caber.", proxima: "c2_04" },
    c2_04: { quem: "kaito", texto: "Você está com cara de quem não dorme.", proxima: "c2_05" },
    c2_05: { quem: "eu", texto: "Eu tive um sonho ruim. Faz uns dias. Ele não sai da minha cabeça.", proxima: "c2_06" },
    c2_06: { quem: "kaito", texto: "Que sonho?", proxima: "c2_07" },
    c2_07: { tipo: "narracao", texto: "Ela olha para o pátio. Para as costas dele, refletidas no vidro da janela.", proxima: "c2_08" },
    c2_08: { quem: "eu", texto: "Promete uma coisa. Sem perguntar por quê.", proxima: "c2_09" },
    c2_09: { quem: "kaito", texto: "Depende.", proxima: "c2_10" },
    c2_10: { quem: "eu", texto: "Nunca fica de costas pra ninguém. Nunca. Nem quando você estiver protegendo alguém.", proxima: "c2_11" },
    c2_11: { tipo: "narracao", texto: "Ele vira a cabeça. Olha para ela. E ri. Pelo nariz. Curto. Não é deboche. É sincero, e isso é pior.", proxima: "c2_12" },
    c2_12: { quem: "kaito", texto: "Ninguém chega perto o bastante pra isso. Nunca chegou.", proxima: "c2_13" },
    c2_13: { tipo: "pensamento", texto: "É verdade. Eu vi ele brigar. No festival, ele e o Ren ficaram de igual pra igual. Ninguém mais aguenta o Kaito. Ninguém.", proxima: "c2_14" },
    c2_14: { tipo: "pensamento", texto: "Ninguém, de frente.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — Na janela com o Kaito
    c2_esc2: { escolhas: [
      { texto: "A. “Promete mesmo assim. Por mim.”", proxima: "c2_2a_1", pontos: { kaito: 3 }, flags: ["Kaito_prometeu_costas"] },
      { texto: "B. “E se alguém chegar de um jeito sujo?”", proxima: "c2_2b_1", pontos: { kaito: 2 }, flags: ["Kaito_jeito_sujo"] },
      { texto: "C. Encostar o ombro no dele, sem falar mais nada.", proxima: "c2_2c_1", pontos: { kaito: 2 }, flags: ["Ombro_janela_Kaito"] }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "O sorriso dele some. Ele fica olhando para ela um tempo. Depois para o pátio.", proxima: "c2_2a_2" },
    c2_2a_2: { quem: "kaito", texto: "...Tá. Prometo. Por você.", proxima: "c2_2a_3" },
    c2_2a_3: { tipo: "narracao", texto: "Ele fala isso sério. Rápido. Como quem assina um papel sem ler, porque confia em quem entregou.", proxima: "c2_15" },
    c2_2b_1: { tipo: "narracao", texto: "Ele para. Pensa. Pela primeira vez, ele leva a pergunta a sério.", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "kaito", texto: "Aí eu levanto. Eu sempre levanto.", proxima: "c2_2b_3" },
    c2_2b_3: { tipo: "pensamento", texto: "Na poça, ele não levantou.", proxima: "c2_15" },
    c2_2c_1: { tipo: "narracao", texto: "Ela encosta o ombro no dele. Ele fica rígido. Depois, devagar, encosta de volta. Os dois ficam ali até o sinal. Ele não pergunta mais do sonho.", proxima: "c2_15" },

    // (todas as opções continuam aqui)
    c2_15: { tipo: "narracao", sprite: null, texto: "O sinal toca. Ele desencosta da janela. Antes de ir, bate duas vezes no parapeito do lado da mão dela. Como quem bate numa porta.", proxima: "c3_01" },

    /* =================== CENA 3 — DEPOIS DO INTERVALO =================== */
    // Cenário: sala de aula, sexta. Música: relógio, depois silêncio.
    c3_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Sexta-feira", sprite: null, texto: "Sexta-feira. De manhã, tudo normal. O Takeo copia a matéria do lado dela com a letra torta. No intervalo, o Kaito está na janela. O Ryuji passa gritando alguma coisa sobre a Momo. O Blake come no banco do pátio. Sozinho, hoje.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "O sinal do fim do intervalo toca. Ela volta para a sala. Senta. Abre o caderno.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", texto: "A carteira do lado dela fica vazia.", proxima: "c3_04" },
    c3_04: { tipo: "pensamento", texto: "O Takeo foi no banheiro. Ou na enfermaria. Ele sempre come rápido demais e passa mal.", proxima: "c3_05" },
    c3_05: { tipo: "narracao", texto: "Uma aula passa. A carteira continua vazia. A mochila dele também não está mais pendurada na cadeira. Ela não viu quando ele levou.", proxima: "c3_06" },
    c3_06: { tipo: "narracao", texto: "Na troca de aula, ela olha pela porta. A janela do corredor está vazia.", proxima: "c3_07" },
    c3_07: { tipo: "pensamento", texto: "Ele deve ter ido pra sala dele. Ele não fica na janela depois do intervalo. Não é estranho. Não é estranho.", proxima: "c3_08" },
    c3_08: { tipo: "narracao", texto: "A última aula é de história. A professora fala da Revolução Industrial. Fábricas. Fumaça. Ela não ouve nada.", proxima: "c3_09" },
    c3_09: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", texto: "O último sinal. Ela sai com a turma, no meio do empurra-empurra da escada. No portão, um grupo de garotos do segundo ano está em volta de um celular. Falando alto.", proxima: "c3_10" },
    c3_10: { quem: "desconhecido", rotulo: "Aluno do 2º ano", texto: "Olha isso! Meu primo mandou agora! Tá rolando lá na fábrica de cimento velha, na beira do rio!", proxima: "c3_11" },
    c3_11: { quem: "desconhecido", rotulo: "Outro aluno", texto: "Isso é a gangue do Kaito? Contra quem?", proxima: "c3_12" },
    c3_12: { quem: "desconhecido", rotulo: "Aluno do 2º ano", texto: "Contra a do Ren! Eles saíram depois do intervalo. Pularam o muro do fundo. Meu primo disse que começou faz meia hora e que a do Ren levou ferro.", proxima: "c3_13" },
    c3_13: { tipo: "narracao", efeito: "eco", texto: "Depois do intervalo.", proxima: "c3_14" },
    c3_14: { tipo: "pensamento", texto: "A carteira do Takeo. A janela vazia. O Blake sozinho no banco, comendo rápido. O Ryuji gritando no pátio, alto demais, como quem quer parecer normal.", proxima: "c3_15" },
    c3_15: { tipo: "pensamento", texto: "Eu não vejo eles desde o intervalo. Nenhum deles. Faz duas horas e meia.", proxima: "c3_16" },
    c3_16: { tipo: "pensamento", texto: "Fim de tarde. Céu cinza. Igual na visão.", proxima: "c3_17" },
    c3_17: { tipo: "narracao", texto: "Ela corre.", proxima: "c3_18" },
    c3_18: { tipo: "narracao", texto: "No meio do caminho até o portão de trás, sem parar, ela tira da mochila a máscara preta que carrega desde o dia do balde, para os dias em que não quer que ninguém veja a cara dela. Coloca.", proxima: "c3_19" },
    c3_19: { tipo: "narracao", texto: "Na caixa de achados e perdidos da portaria, um boné preto qualquer, sem nome. Ela pega sem diminuir o passo. Prende o cabelo dentro. Abaixa a aba.", proxima: "c3_20" },
    c3_20: { tipo: "pensamento", texto: "Ônibus demora. Dois ônibus demoram mais ainda. São quarenta minutos de ônibus.", proxima: "c3_21" },
    c3_21: { tipo: "pensamento", texto: "Correndo, eu não sei. Eu nunca corri de verdade. Eu sempre tive medo de descobrir o quanto eu consigo.", proxima: "c3_22" },
    c3_22: { tipo: "narracao", efeito: "tremor", texto: "Hoje ela descobre.", proxima: "c4_01" },

    /* =================== CENA 4 — O MONSTRO =================== */
    // Cenário: fábrica de cimento, fim de tarde (usa "beco-mercado"). Céu cinza. Música: tambores.
    c4_01: { tipo: "narracao", cenario: "fabrica-cimento", transicao: "tempo", legenda: "Fábrica de cimento — 17h21", sprite: null, texto: "O portão de ferro pendurado numa dobradiça só. O barulho chega antes. Gritos. Tênis na água. Metal batendo em cimento.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "Ela para no buraco da cerca, do lado do galpão. O lugar que ela marcou no domingo. Respirando pela máscara. As pernas queimando. Ninguém olha para ela. Ninguém tem tempo.", proxima: "c4_03" },
    c4_03: { tipo: "narracao", texto: "No pátio, trinta, quarenta garotos. Jaquetas verdes de um lado. A gangue do Kaito do outro, em menor número. O Blake segurando dois contra o muro. O Ryuji rolando no chão com um maior que ele. O Victor rindo, de pirulito na boca, desviando de um cano.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", sprite: "kaito", texto: "E, no meio, o Kaito.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "Ela já viu ele brigar. Mas não assim. Não com raiva de verdade. Em volta dele, no chão, tem seis garotos da Midorata. Ninguém mais tenta chegar de frente. Eles cercam, rodam, esperam. Nenhum entra.", proxima: "c4_06" },
    c4_06: { tipo: "narracao", texto: "Um tenta com um cano. O Kaito pega o cano no ar, puxa, e o garoto vem junto. Um soco só. O garoto não levanta. O Kaito joga o cano longe, sem olhar para onde.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", efeito: "grito", texto: "Ele não leva ferro. Ele disse que não ia levar ferro. Ele não precisa.", proxima: "c4_08" },
    c4_08: { tipo: "pensamento", texto: "Ele é um monstro. Eu achava que conhecia o Kaito. Eu conheço o Kaito da janela. Esse aqui eu nunca tinha visto.", proxima: "c4_cam1" },
    c4_cam1: { caminhos: [
      { flag: "Contou_Kaito_Reina", proxima: "c4_reina_aviso" }
    ], proxima: "c4_09" },
    c4_reina_aviso: { tipo: "pensamento", texto: "“Ele é do tipo que protege tanto que esquece de dizer.” A Reina tinha razão. Ele não disse nada pra ninguém. Ele só veio.", proxima: "c4_09" },
    c4_09: { sprite: "ren", tipo: "narracao", texto: "Em cima do caminhão velho, no fundo, sentado na carroceria enferrujada com as pernas balançando, o Ren. Sem um arranhão. Assistindo. Igual na visão.", proxima: "c4_10" },
    c4_10: { tipo: "narracao", sprite: "takeo", texto: "E, perto do caminhão, de óculos tortos e boca sangrando, o Takeo. Ele não sabe brigar. Ele está na frente de um garoto da gangue que caiu, com os braços abertos, levando soco no lugar dele.", proxima: "c4_11" },
    c4_11: { tipo: "narracao", texto: "Leva um. Leva outro. Cai de joelhos numa poça. Tenta levantar.", proxima: "c4_cam2" },
    c4_cam2: { caminhos: [
      { flag: "Takeo_chama_primeiro", proxima: "c4_takeo_chama" }
    ], proxima: "c4_12" },
    c4_takeo_chama: { quem: "takeo", efeito: "grito", texto: "KAITO!", proxima: "c4_takeo_chama2" },
    c4_takeo_chama2: { tipo: "pensamento", texto: "Ele chamou. Ele prometeu que ia chamar alguém antes de ficar na frente sozinho. Ele chamou o Kaito.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", sprite: "kaito", texto: "O Kaito vê. Larga o garoto que estava segurando. Atravessa o pátio em quatro passos. Para na frente do Takeo caído. Abre os braços. De frente para os três da Midorata.", proxima: "c4_13" },
    c4_13: { tipo: "narracao", texto: "Os três recuam. Nenhum tem coragem de chegar de frente.", proxima: "c4_14" },
    c4_14: { tipo: "narracao", texto: "E então um deles abaixa. Enfia a mão num saco rasgado de cimento velho, encostado no galpão. E joga. Um punhado de pó cinza. Direto na cara do Kaito.", proxima: "c4_15" },
    c4_15: { tipo: "narracao", efeito: "tremor", texto: "O Kaito vira o rosto. Tarde demais. Ele leva a mão aos olhos. Cambaleia um passo. Continua de pé. Continua na frente do Takeo. Mas não enxerga nada.", proxima: "c4_16" },
    c4_16: { tipo: "narracao", texto: "Por trás dele, saindo da sombra do caminhão, um garoto de jaqueta verde com um olho amarelo pintado nas costas. Na mão, colada na perna, uma barra de ferro comprida. Enferrujada na ponta.", proxima: "c4_17" },
    c4_17: { tipo: "narracao", efeito: "eco", texto: "Golpe baixo. Ninguém aguenta o Kaito de frente. Então ninguém vai de frente.", proxima: "c4_18" },
    c4_18: { tipo: "narracao", texto: "A barra sobe.", proxima: "c4_19" },
    c4_19: { tipo: "pensamento", texto: "Quarenta e dois passos do portão até o meio. Eu estou a trinta. Eu contei no domingo.", proxima: "c4_20" },
    c4_20: { tipo: "narracao", efeito: "tremor", texto: "Ela não corre. Ela some de um lugar e aparece no outro.", proxima: "c4_21" },
    c4_21: { tipo: "narracao", texto: "Ela se joga entre a barra e as costas do Kaito.", proxima: "c4_22" },
    c4_22: { tipo: "narracao", efeito: "eco", texto: "A barra desce. Acerta o ombro dela. Com toda a força. O barulho é seco. Pesado. O mesmo barulho da visão.", proxima: "c4_23" },
    c4_23: { tipo: "narracao", texto: "Ela não se mexe.", proxima: "c4_24" },
    c4_24: { tipo: "narracao", texto: "Não dobra o joelho. Não vira o rosto. Não pisca. O ombro não desce um centímetro. A barra para em cima dela como se tivesse batido num muro.", proxima: "c4_25" },
    c4_25: { tipo: "narracao", texto: "O garoto do olho amarelo fica parado, segurando a barra, olhando para a menina de máscara e boné. A mão dele treme. A barra vibra ainda, com o golpe que não deu em nada.", proxima: "c4_26" },
    c4_26: { tipo: "pensamento", texto: "Isso foi tudo? Isso era a poça? Isso era o som que eu nunca ia esquecer?", proxima: "c4_27" },
    c4_27: { tipo: "pensamento", texto: "Não doeu. Não doeu nada.", proxima: "c4_28" },
    c4_28: { tipo: "narracao", texto: "Ela levanta a mão. Fecha em volta da barra, em cima do ombro. E puxa. O garoto solta sem querer, como quem solta uma panela quente.", proxima: "c4_29" },
    c4_29: { tipo: "narracao", efeito: "tremor", texto: "Ela segura a barra com as duas mãos. E quebra. No meio. O ferro estala. Igual um galho seco.", proxima: "c4_30" },
    c4_30: { tipo: "narracao", texto: "Ela joga a metade da ponta por cima da cerca. A barra gira no ar, longe, muito longe, e cai no rio com um barulho fundo. A outra metade, ela joga para o outro lado do pátio. Bate no muro do galpão e fica cravada no reboco.", proxima: "c4_31" },
    c4_31: { tipo: "narracao", texto: "Silêncio.", proxima: "c4_32" },
    c4_32: { tipo: "narracao", texto: "Não silêncio de verdade. Mas, num raio de dez metros, ninguém se mexe. Nem a Midorata. Nem a gangue do Kaito. Todo mundo olhando para a menina de máscara preta e boné, parada atrás do Kaito, com as mãos vazias.", proxima: "c4_33" },
    c4_33: { tipo: "narracao", texto: "O garoto do olho amarelo dá um passo para trás. Outro. Depois corre. Escorregando na lama, sem olhar para trás.", proxima: "c4_34" },
    c4_34: { tipo: "narracao", sprite: "kaito", texto: "O Kaito se vira. Com os olhos fechados, vermelhos, cheios de pó, lacrimejando. Ele não enxerga. Ele estende a mão para onde ouviu o barulho.", proxima: "c4_35" },
    c4_35: { quem: "kaito", texto: "...Quem tá aí? Quem é?", proxima: "c4_36" },
    c4_36: { tipo: "pensamento", texto: "Se eu falar, ele reconhece a minha voz.", proxima: "c4_esc3" },

    // ▶ ESCOLHA 3 — Atrás do Kaito
    c4_esc3: { escolhas: [
      { texto: "A. Tirar a garrafa de água da mochila e jogar nos olhos dele. Sem falar nada.", proxima: "c4_3a_1", pontos: { kaito: 3 }, flags: ["Agua_olhos_Kaito"] },
      { texto: "B. Levantar o Takeo da poça e colocar ele de pé, do lado do Kaito. Sem falar nada.", proxima: "c4_3b_1", pontos: { takeo: 3 }, flags: ["Levantou_Takeo_fabrica"] },
      { texto: "C. Recuar devagar. Sem falar nada. Antes que alguém chegue perto.", proxima: "c4_3c_1", flags: ["Recuou_fabrica"] }
    ]},
    c4_3a_1: { tipo: "narracao", texto: "Ela pega a mão dele, a que está estendida no ar, e vira para cima. Coloca a garrafa aberta na palma. Depois, com a outra mão, inclina a garrafa sobre os olhos dele.", proxima: "c4_3a_2" },
    c4_3a_2: { tipo: "narracao", texto: "A água escorre. Leva o pó. Ele pisca. Pisca de novo. A primeira coisa que ele vê, borrada, é uma aba de boné preto e um par de olhos por cima de uma máscara. Indo embora.", proxima: "c4_37" },
    c4_3b_1: { tipo: "narracao", sprite: "takeo", texto: "Ela segura o Takeo pelo braço e levanta. Ele vem fácil, leve, como se não pesasse nada. Ele fica de pé, tonto, segurando os óculos tortos.", proxima: "c4_3b_2" },
    c4_3b_2: { quem: "takeo", texto: "...Obrigado. Seja quem for.", proxima: "c4_3b_3" },
    c4_3b_3: { tipo: "narracao", texto: "Ela solta. E, por um segundo, ele fica olhando para a mão dela, como se tivesse sentido alguma coisa conhecida no jeito de segurar.", proxima: "c4_37" },
    c4_3c_1: { tipo: "narracao", texto: "Ela dá um passo para trás. Outro. A mão do Kaito procura no ar. Não acha nada.", proxima: "c4_37" },

    // (todas as opções continuam aqui)
    c4_37: { tipo: "narracao", sprite: null, texto: "No caminhão, o Ren se levanta. Devagar. Pela primeira vez na tarde inteira, ele não está olhando para a briga. Está olhando para ela.", proxima: "c4_38" },
    c4_38: { quem: "ren", texto: "Recua.", proxima: "c4_39" },
    c4_39: { tipo: "narracao", texto: "Uma palavra. Sem gritar. E a Midorata inteira para. Pega os caídos. Sai pelo portão, um por um. Ninguém da gangue do Kaito vai atrás. Ninguém entende direito o que aconteceu.", proxima: "c4_40" },
    c4_40: { tipo: "narracao", texto: "O Ren desce do caminhão por último. Passa pelo pátio sem pressa. Passa a dois metros dela. Não para. Não olha. Não fala nada.", proxima: "c4_41" },
    c4_41: { tipo: "narracao", texto: "Mas, quando passa, abre a mão. Uma coisa pequena cai na poça do lado do tênis dela. Um peão preto.", proxima: "c4_42" },
    c4_42: { tipo: "narracao", texto: "E ela vai embora. Pelo buraco da cerca. Antes que o Blake, que já está atravessando o pátio na direção dela, chegue perto. Antes que alguém pergunte qualquer coisa.", proxima: "c4_43" },
    c4_43: { sprite: null, cenario: "beira-rio", tipo: "narracao", texto: "Na beira do rio, atrás do galpão, ela tira a máscara. Respira. Toca o ombro onde a barra bateu. Nada. Nem roxo. Nem dor.", proxima: "c4_44" },
    c4_44: { tipo: "pensamento", texto: "Eu passei a vida inteira com medo dessa força. Escondendo. Hoje ela segurou uma barra de ferro e eu nem senti.", proxima: "c4_45" },
    c4_45: { tipo: "pensamento", texto: "O Kaito está de pé. O Takeo está de pé. A poça continua de água de chuva.", proxima: "c4_46" },
    c4_46: { tipo: "pensamento", texto: "E o Ren deixou um peão do lado do meu pé. Sem uma palavra. Ele viu tudo. Ele viu quanto eu aguento.", proxima: "c5_01" },

    /* =================== CENA 5 — DOMINGO =================== */
    // Cenário: apartamento da SN, domingo de manhã. Música: piano baixo, quente.
    c5_01: { roupa: "fora", tipo: "narracao", cenario: "cozinha", transicao: "tempo", legenda: "Domingo, 9h40", sprite: null, texto: "Domingo de manhã. A mãe está dormindo depois do plantão. A SN está na cozinha, cortando legume para o almoço, porque a avó vem. A campainha toca cedo demais para ser a avó.", proxima: "c5_02" },
    c5_02: { cenario: "frente-casa-sn", tipo: "narracao", sprite: "kaito", texto: "O Kaito. Sem boné. Os olhos ainda vermelhos, irritados. Um curativo no supercílio. Uma sacola da lojinha do tio na mão.", proxima: "c5_03" },
    c5_03: { quem: "kaito", texto: "Bom dia. Eu estava passando.", proxima: "c5_04" },
    c5_04: { quem: "eu", texto: "Domingo, nove e quarenta. Do outro lado do bairro.", proxima: "c5_05" },
    c5_05: { quem: "kaito", texto: "É caminho.", proxima: "c5_06" },
    c5_06: { tipo: "narracao", texto: "Ele entrega a sacola. Dois onigiri de frango. Ela pega. Ele fica olhando para ela. Para o rosto. Para os braços. Para o ombro. Ele está procurando alguma coisa.", proxima: "c5_07" },
    c5_07: { quem: "eu", texto: "Que foi?", proxima: "c5_08" },
    c5_08: { quem: "kaito", texto: "Nada.", proxima: "c5_09" },
    c5_09: { tipo: "narracao", texto: "Ele encosta no batente da porta. Fica um tempo quieto. Depois fala, olhando para o corredor.", proxima: "c5_10" },
    c5_10: { quem: "kaito", texto: "Sexta, alguém ficou atrás de mim. Eu estava sem enxergar nada. Jogaram cimento na minha cara. Eu ouvi o barulho de uma barra batendo em alguém. Em alguém que não era eu.", proxima: "c5_11" },
    c5_11: { quem: "kaito", texto: "O Blake disse que era uma menina. De máscara. De boné. Que levou a barra no ombro e nem se mexeu. Que quebrou a barra no meio. Com a mão.", proxima: "c5_12" },
    c5_12: { quem: "kaito", texto: "A metade ficou enfiada na parede do galpão. O Ryuji tentou tirar. Não conseguiu.", proxima: "c5_13" },
    c5_13: { tipo: "narracao", texto: "Ele olha para ela de novo. Demora. E então ri, curto, pelo nariz. Balança a cabeça.", proxima: "c5_14" },
    c5_14: { quem: "kaito", texto: "Por um segundo eu achei... Não. Não pode ter sido você. Você é forte, eu sei. Mas aquilo... ninguém aguenta aquilo. Nem eu.", proxima: "c5_15" },
    c5_15: { tipo: "pensamento", texto: "Ele não acredita. Porque é impossível. Porque ninguém aguenta uma barrada daquelas sem cair. E eu não caí.", proxima: "c5_esc4" },

    // ▶ ESCOLHA 4 — Na porta, com o Kaito
    c5_esc4: { escolhas: [
      { texto: "A. “Claro que não fui eu. Eu estava na aula de história.”", proxima: "c5_4a_1", flags: ["Negou_fabrica_Kaito"] },
      { texto: "B. “E se fosse?”", proxima: "c5_4b_1", pontos: { kaito: 2 }, flags: ["E_se_fosse_Kaito"] },
      { texto: "C. “Entra. Seus olhos estão horríveis. Minha mãe tem colírio.”", proxima: "c5_4c_1", pontos: { kaito: 3 }, flags: ["Colirio_Kaito"] }
    ]},
    c5_4a_1: { quem: "kaito", texto: "Eu sei. A Hana me disse. Ela disse que você saiu correndo no último sinal. Pra pegar o ônibus.", proxima: "c5_4a_2" },
    c5_4a_2: { quem: "eu", texto: "Eu estava atrasada.", proxima: "c5_4a_3" },
    c5_4a_3: { tipo: "narracao", texto: "Ele concorda com a cabeça. Ele não desconfia. É impossível demais para desconfiar.", proxima: "c5_16" },
    c5_4b_1: { tipo: "narracao", texto: "Ele para. Olha para ela. Ela segura o olhar. Um segundo. Dois.", proxima: "c5_4b_2" },
    c5_4b_2: { quem: "kaito", texto: "Se fosse... eu ia brigar com você até o fim do ano. Por ter entrado numa briga do Ren.", proxima: "c5_4b_3" },
    c5_4b_3: { quem: "kaito", texto: "Depois eu ia agradecer. E depois eu ia brigar de novo.", proxima: "c5_4b_4" },
    c5_4b_4: { tipo: "narracao", texto: "Ele ri de novo. Ele acha que é piada. Ela deixa ele achar.", proxima: "c5_16" },
    c5_4c_1: { cenario: "cozinha", tipo: "narracao", sprite: null, texto: "Ele hesita na porta. Depois entra. Senta no banquinho da cozinha, alto demais para ele. Inclina a cabeça para trás. Ela pinga o colírio. Uma gota em cada olho.", proxima: "c5_4c_2" },
    c5_4c_2: { quem: "kaito", texto: "Arde.", proxima: "c5_4c_3" },
    c5_4c_3: { quem: "eu", texto: "Não pisca.", proxima: "c5_4c_4" },
    c5_4c_4: { quem: "kaito", texto: "Eu não estou piscando. Eu estou... é o colírio.", proxima: "c5_4c_5" },
    c5_4c_5: { tipo: "narracao", texto: "Ele fica de olho fechado, com a cabeça encostada na parede, e ela fica de pé na frente dele, segurando o vidrinho. De muito perto. Ele não abre o olho. Mas o canto da boca dele sobe.", proxima: "c5_16" },

    // (todas as opções continuam aqui)
    c5_16: { tipo: "narracao", sprite: "kaito", texto: "Na porta, antes de ir, ele para.", proxima: "c5_17" },
    c5_17: { quem: "kaito", texto: "Eu vou descobrir quem é. E vou agradecer direito. Ela salvou a minha vida.", proxima: "c5_cam1" },
    c5_cam1: { caminhos: [
      { flag: "Kaito_prometeu_costas", proxima: "c5_prom" }
    ], proxima: "c5_18" },
    c5_prom: { quem: "kaito", texto: "E... eu tinha prometido pra você. Não ficar de costas. Eu fiquei. Desculpa.", proxima: "c5_prom2" },
    c5_prom2: { quem: "eu", texto: "Você estava protegendo o Takeo. Está desculpado.", proxima: "c5_18" },
    c5_18: { cenario: "cozinha", tipo: "narracao", sprite: null, texto: "Ele vai. Ela fecha a porta. Encosta as costas nela. O ombro não dói. Nunca doeu.", proxima: "c5_19" },
    c5_19: { tipo: "pensamento", texto: "Ele não sabe. Ele acha impossível. E, enquanto ele achar impossível, eu estou segura.", proxima: "c5_20" },

    // Almoço de domingo com a avó. Sem nada demais.
    c5_20: { tipo: "narracao", transicao: "tempo", legenda: "Domingo, 12h30", texto: "Meio-dia e meia, a avó chega. Com uma sacola de pano cheia de pote e uma planta pequena num vaso de margarina, “pra essa casa ter alguma coisa verde”.", proxima: "c5_20a" },
    c5_20a: { tipo: "narracao", sprite: "avo", texto: "Quem vê a avó na porta não diz que ela é avó de ninguém. O cabelo escuro preso num coque, sem um fio branco. A pele lisa. O casaco cor de vinho, a calça de alfaiataria, o salto. O moço da padaria ainda chama ela de “moça”.", proxima: "c5_20b" },
    c5_20b: { tipo: "pensamento", texto: "Ela já passou dos sessenta. Na outra vida, eu achava que era sorte. Ou creme caro. Ela nunca comprou creme caro.", proxima: "c5_20c" },
    c5_20c: { quem: "avo", texto: "Que cara é essa? Nunca viu avó, menina?", proxima: "c5_20d" },
    c5_20d: { quem: "eu", texto: "A senhora não parece avó, vó.", proxima: "c5_20e" },
    c5_20e: { quem: "avo", texto: "Claro que não. As mulheres da nossa família são assim. Além da força, a gente herdou isso também: o rosto não acompanha a idade. A minha mãe tinha oitenta anos e ninguém dava cinquenta pra ela.", proxima: "c5_20f" },
    c5_20f: { quem: "avo", texto: "Você vai ver. Daqui a quarenta anos vão te pedir documento na farmácia. É uma maldição muito boa.", proxima: "c5_20g" },
    c5_20g: { tipo: "pensamento", texto: "“Além da força.” Ela fala disso como quem fala da cor do olho. Sem baixar a voz. Sem perguntar nada da sexta. Ela sabe. Ela sempre soube.", proxima: "c5_21" },
    c5_21: { quem: "avo", texto: "Olha só você! Cortou legume sozinha? Do tamanho certo? Quem te ensinou?", proxima: "c5_22" },
    c5_22: { quem: "eu", texto: "A senhora. Quando eu tinha oito anos.", proxima: "c5_23" },
    c5_23: { quem: "avo", texto: "Ah, é verdade. Eu sou uma ótima professora.", proxima: "c5_24" },
    c5_24: { tipo: "narracao", texto: "A mãe acorda com o cheiro da comida. As três almoçam na mesa pequena da cozinha. A avó fala da vizinha que cria galinha no apartamento. Da novela. Do preço do tomate.", proxima: "c5_25" },
    c5_25: { quem: "avo", texto: "E a escola? Tem amiga lá?", proxima: "c5_esc5" },

    // ▶ ESCOLHA 5 — Almoço com a avó
    c5_esc5: { escolhas: [
      { texto: "A. “Tenho. A Mio e a Hana. A Mio é barulhenta. A Hana faz roteiro até pra ir no shopping.”", proxima: "c5_5a_1", pontos: { mio: 1, hana: 1 }, flags: ["Contou_amigas_avo"] },
      { texto: "B. “Tenho. E uns amigos também. Um deles traz lámen sem ninguém pedir.”", proxima: "c5_5b_1", pontos: { kaito: 1 }, flags: ["Contou_lamen_avo"] },
      { texto: "C. “O Takeo voltou a ser meu amigo, vó. Lembra dele? Do balanço?”", proxima: "c5_5c_1", pontos: { takeo: 1 }, flags: ["Contou_Takeo_avo"] }
    ]},
    c5_5a_1: { quem: "avo", texto: "Roteiro pra ir no shopping! Essa menina é das minhas. Traz ela aqui um dia. A barulhenta também.", proxima: "c5_26" },
    c5_5b_1: { tipo: "narracao", texto: "A avó levanta uma sobrancelha. A mãe olha para o prato, segurando um sorriso.", proxima: "c5_5b_2" },
    c5_5b_2: { quem: "avo", texto: "Lámen sem pedir. Hm. Na minha época era flor. Mas lámen também serve. Alimenta mais.", proxima: "c5_26" },
    c5_5c_1: { quem: "avo", texto: "O menino redondinho dos óculos? Que chorava quando o balanço parava? Claro que lembro! Ele ainda chora?", proxima: "c5_5c_2" },
    c5_5c_2: { quem: "eu", texto: "Às vezes. Por causa de pombo.", proxima: "c5_5c_3" },
    c5_5c_3: { quem: "avo", texto: "Então ele continua o mesmo. Que bom. Gente boa não devia mudar muito.", proxima: "c5_26" },

    // (todas as opções continuam aqui)
    c5_26: { tipo: "narracao", texto: "Depois do almoço, a avó cochila no sofá com a televisão ligada baixinho. A mãe lava a louça. A SN seca. Ninguém fala de nada importante. É o domingo mais normal do mundo.", proxima: "c5_27" },
    c5_27: { tipo: "narracao", texto: "Quando vai embora, a avó dá um abraço apertado na porta. E deixa a plantinha no vaso de margarina em cima da janela da cozinha.", proxima: "c5_28" },
    c5_28: { quem: "avo", texto: "Rega duas vezes por semana. Não mais. Planta afogada morre igual planta seca.", proxima: "c5_29" },
    c5_29: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Domingo, 22h", sprite: null, texto: "À noite, no quarto, ela tira do bolso do moletom uma coisa pequena. Ela não lembra de ter pegado. Pegou. Da poça, antes de ir embora.", proxima: "c5_30" },
    c5_30: { tipo: "narracao", texto: "Um peão preto. De plástico. Com uma lasca na base.", proxima: "c5_31" },
    c5_31: { tipo: "pensamento", texto: "Ele perdeu uma peça. Ele não ligou. Ele largou a peça do meu lado como quem diz: essa eu não preciso.", proxima: "c5_32" },
    c5_32: { tipo: "pensamento", texto: "Ele tem muitas. E agora ele sabe uma coisa que nem o Kaito sabe.", proxima: "c5_33" },
    c5_33: { tipo: "narracao", texto: "Ela coloca o peão na gaveta da escrivaninha. Embaixo da carta da avó. Fecha.", proxima: "c5_34" },
    c5_34: { tipo: "pensamento", texto: "Na outra vida, ninguém salvou ninguém. Nessa, já foram duas vezes. O festival. A fábrica.", proxima: "c5_35" },
    c5_35: { tipo: "pensamento", texto: "Eu não sei quantas vezes ainda vão ser. Mas eu sei que eu aguento.", proxima: "ep_fim" },

    // Fim do Capítulo 17 (crie a entrada "capitulo17" em dados/capitulos.js).
    ep_fim: { fim: "capitulo17" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 18 (anotações do roteiro)
 *  • Todo mundo fala da "menina de máscara" que quebrou a barra. Ninguém sabe quem é.
 *    O Kaito acha impossível ter sido a SN. O Blake chegou perto antes dela fugir.
 *    O Takeo sentiu alguma coisa conhecida no jeito dela segurar (Levantou_Takeo_fabrica).
 *  • A metade da barra ficou cravada na parede do galpão.
 *  • O Ren viu tudo. Deixou cair um peão preto do lado dela. Ele sabe quanto ela aguenta.
 *  • Blake e Sayuri continuam saindo. A Mio continua magoada. Não vai dar em nada.
 *  • A Sayuri não sabe que o Ren está por trás de quem ameaça a família dela.
 *
 * ESCOLHAS DO CAPÍTULO (5)
 *  1 Embaixo da arquibancada · 2 Na janela com o Kaito · 3 Atrás do Kaito
 *  4 Na porta, com o Kaito · 5 Almoço com a avó
 *
 * FLAGS NOVAS
 *  Perguntou_Mio_arquibancada · Perguntou_Sayuri_arquibancada · Toalha_Blake · Kaito_prometeu_costas · Kaito_jeito_sujo
 *  Ombro_janela_Kaito · Agua_olhos_Kaito · Levantou_Takeo_fabrica · Recuou_fabrica
 *  Negou_fabrica_Kaito · E_se_fosse_Kaito · Colirio_Kaito · Contou_amigas_avo · Contou_lamen_avo
 *  Contou_Takeo_avo
 */