/*
 * =====================================================================
 *  CAPÍTULO 5 — Dessa vez
 *  Segunda-feira, logo depois do fim do Capítulo 4.
 *  Mesmo formato dos capítulos anteriores: cada linha é uma cena.
 * =====================================================================
 *
 *  PERSONAGENS SEM FICHA NO JOGO (falam com quem: "desconhecido" + rotulo)
 *    Jin, Shinji, Goro, Akane (braço direito da Reina), Mãe, Enfermeira.
 *    Quando criar esses personagens em dados/personagens.js, troque o quem.
 *
 *  CENÁRIOS (todos já existem; troque se criar fundos próprios)
 *    Portão da escola e a ponte do rio → "saida-colegio"
 *    A olaria velha → "beco-mercado"
 *    Corredor do pronto-socorro → "corredor"
 *    Beira do rio, no fim da tarde → "saida-colegio"
 *
 *  ROMANCE: depois do resgate, cada um dos quatro garotos tem uma cena com a SN
 *  (Cena 5). No fim, ela escolhe quem a leva para casa (Escolha 10): é a cena
 *  mais romântica do capítulo até agora.
 *
 *  FLAGS DOS CAPÍTULOS ANTERIORES USADAS AQUI (com caminhos)
 *    Alianca_Reina, Grupo_viu_forca, Hana_sabe_tudo, Hana_sabe_viagem,
 *    Mio_vai_falar_Blake, SN_abriu_mao_Blake, Revanche_marcada,
 *    Momo_gosta_SN, Takeo_mao_biblioteca, Mae_sabe_Jin.
 *
 *  Título, capa e gancho ficam em dados/capitulos.js: crie a entrada "capitulo5".
 */
Roteiro.registrar("capitulo5", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — O PORTÃO =================== */
    // Cenário: portão da escola, segunda de manhã, chuva fina. Música: tensão baixa.
    c1_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Cena 1 — O portão", sprite: null, texto: "Sete e vinte. A SN chega ao portão da escola correndo, com a caixinha de leite de morango ainda na mão e o cartão do Jin amassado dentro do punho.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "Eles já estão todos lá. O Kaito andando de um lado para o outro como um bicho preso. O Blake parado, de braços cruzados, olhando para a rua. O Ryuji sentado no muro, batendo o calcanhar na parede sem parar. A Mio e a Hana debaixo do mesmo guarda-chuva.", proxima: "c1_03" },
    c1_03: { tipo: "narracao", texto: "Quando veem a cara dela, todo mundo para.", proxima: "c1_04" },
    c1_04: { tipo: "narracao", texto: "Ela não consegue falar. Ela só estende o cartão.", proxima: "c1_05" },
    c1_05: { tipo: "narracao", sprite: "kaito", texto: "O Kaito lê primeiro. O rosto dele vai ficando duro, pedra por pedra.", proxima: "c1_06" },
    c1_06: { quem: "kaito", texto: "Eu vou chamar todo mundo. Os vinte. Agora. A gente vai pra olaria e põe aquele lugar abaixo.", proxima: "c1_07" },
    c1_07: { quem: "blake", sprite: "blake", texto: "Não.", proxima: "c1_08" },
    c1_08: { quem: "kaito", sprite: "kaito", texto: "Como assim não?", proxima: "c1_09" },
    c1_09: { quem: "blake", sprite: "blake", texto: "Se a gente aparecer com vinte, o Jin some com o Takeo antes da gente chegar na ponte. Ele pediu ela sozinha porque ele quer controle. Se ele perder o controle, quem paga é o Takeo.", proxima: "c1_10" },
    c1_10: { quem: "ryuji", sprite: "ryuji", texto: "Então o quê? A gente fica aqui na chuva fazendo plano enquanto aquele loiro de casaco faz sei lá o quê com o magrelo?", proxima: "c1_11" },
    c1_11: { quem: "kaito", sprite: "kaito", texto: "Pela primeira vez na vida, eu concordo com o Ryuji.", proxima: "c1_12" },
    c1_12: { quem: "ryuji", sprite: "ryuji", texto: "Anota esse dia.", proxima: "c1_13" },
    c1_13: { tipo: "narracao", sprite: null, texto: "Eles começam a discutir. Os três ao mesmo tempo. A voz do Kaito subindo, a do Ryuji subindo mais, a do Blake ficando cada vez mais baixa e mais perigosa.", proxima: "c1_14" },
    c1_14: { tipo: "narracao", texto: "A SN olha para a caixinha de leite na mão. Ainda gelada. Ele comprou às seis e meia. Ele queria chegar mais cedo. Para esperar ela.", proxima: "c1_15" },
    c1_15: { tipo: "pensamento", texto: "“Ele morreu protegendo alguém.”", proxima: "c1_16" },
    c1_16: { tipo: "pensamento", texto: "Não. Não hoje. Não com leite de morango na mão.", proxima: "c1_17" },
    c1_17: { quem: "eu", efeito: "grito", texto: "PAREM.", proxima: "c1_18" },
    c1_18: { tipo: "narracao", texto: "Os três param. A Mio e a Hana também. Ninguém nunca ouviu a SN gritar.", proxima: "c1_19" },
    c1_19: { quem: "eu", texto: "Eu vou. Eu tenho que ir. Ele pediu eu. E eu sou a única que ele não vai ver chegando como ameaça.", proxima: "c1_20" },
    c1_20: { quem: "eu", texto: "Mas eu não vou sozinha. Eu nunca mais vou fazer nada sozinha.", proxima: "c1_cam1" },

    // A Reina aparece se a SN confiou nela
    c1_cam1: { caminhos: [
      { flag: "Alianca_Reina", proxima: "c1_r_alianca" }
    ], proxima: "c1_r_sem" },
    c1_r_alianca: { tipo: "narracao", sprite: "reina", texto: "Um carro para na frente do portão. Não é preto. É vermelho, velho, com um lírio desenhado no vidro de trás. A Reina desce de jaqueta de couro, sem guarda-chuva, o cabelo grudado no rosto.", proxima: "c1_r_alianca2" },
    c1_r_alianca2: { quem: "reina", texto: "Eu soube. Uma das minhas viu o carro preto saindo da rua do Takeo às seis e quarenta. Eu sei onde fica cada porta da olaria. Eu cresci do outro lado do rio.", proxima: "c1_r_alianca3" },
    c1_r_alianca3: { quem: "reina", texto: "E a Akane está lá. Eu tenho certeza. Isso é problema meu também.", proxima: "c1_21" },
    c1_r_sem: { tipo: "narracao", sprite: "hana", texto: "A Hana tira o caderno de gatinhos da mochila e abre numa página que ela claramente desenhou ontem à noite. Um mapa. A olaria vista de cima. Três portas. Uma janela quebrada nos fundos.", proxima: "c1_r_sem2" },
    c1_r_sem2: { quem: "hana", texto: "Eu fui lá ontem. Eu não entrei. Mas eu desenhei o que vi. Tem uma porta nos fundos que dá pro rio. Ninguém vigia o rio.", proxima: "c1_21" },

    c1_21: { tipo: "narracao", sprite: "blake", texto: "O Blake olha para o mapa. Depois para a SN. E aquele quase sorriso aparece.", proxima: "c1_22" },
    c1_22: { quem: "blake", texto: "Tá. Então: ela entra pela frente, sozinha, como ele pediu. A gente entra pelos fundos, pelo rio. Quando ela der o sinal.", proxima: "c1_23" },
    c1_23: { quem: "kaito", sprite: "kaito", texto: "Que sinal?", proxima: "c1_24" },
    c1_24: { tipo: "narracao", texto: "A SN pensa por um segundo. Depois tira o elástico do pulso, aquele que ela usava para prender o cabelo apertado quando era a Fantasma.", proxima: "c1_25" },
    c1_25: { quem: "eu", texto: "Quando eu soltar o cabelo.", proxima: "c1_26" },
    c1_26: { tipo: "narracao", texto: "Ela prende o cabelo de novo, bem preso, do jeito antigo. A Mio aperta a mão dela.", proxima: "c1_27" },
    c1_27: { quem: "mio", sprite: "mio", texto: "Eu vou junto até a ponte. Não discute.", proxima: "c1_28" },
    c1_28: { quem: "eu", texto: "Mio...", proxima: "c1_29" },
    c1_29: { quem: "mio", texto: "Desde os seis anos, quando alguém mexe com você, eu fico na frente. Não vou parar agora.", proxima: "c1_30" },
    c1_30: { tipo: "narracao", sprite: null, texto: "A Mio vai. Mas a ponte é longa, e o plano diz que só uma pessoa pode ir com a SN até o último poste antes da olaria. Para ninguém da janela ver um grupo chegando.", proxima: "c1_31" },
    c1_31: { tipo: "narracao", texto: "Os três garotos olham para ela. Ninguém diz nada. Mas todos querem ser essa pessoa.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — Quem caminha com ela até o fim da ponte?
    c1_esc1: { sugerir: true, escolhas: [
      { texto: "A. O Kaito.", proxima: "p_k_01", personagem: "kaito", pontos: { kaito: 2 }, flags: ["Ponte_Kaito"] },
      { texto: "B. O Blake.", proxima: "p_b_01", personagem: "blake", pontos: { blake: 2 }, flags: ["Ponte_Blake"] },
      { texto: "C. O Ryuji.", proxima: "p_r_01", personagem: "ryuji", pontos: { ryuji: 2 }, flags: ["Ponte_Ryuji"] }
    ]},

    /* =================== CENA 2 — A PONTE =================== */
    // Cenário: ponte de ferro sobre o rio, chuva fina (usa "saida-colegio"). Música: piano, lento.

    /* ---------- Ponte — Kaito ---------- */
    p_k_01: { tipo: "narracao", cenario: "ponte", transicao: "tempo", legenda: "Cena 2 — A ponte", sprite: "kaito", texto: "A ponte de ferro é velha, enferrujada, e range a cada carro que passa. O rio lá embaixo está marrom e rápido por causa da chuva. O Kaito anda do lado dela sem falar nada. Isso, por si só, é estranho.", proxima: "p_k_02" },
    p_k_02: { tipo: "narracao", texto: "No meio da ponte, ele tira a jaqueta da gangue e coloca nos ombros dela. É enorme. Cheira a chuva e a lámen.", proxima: "p_k_03" },
    p_k_03: { quem: "eu", texto: "Kaito, é a jaqueta da gangue. Se o Jin vir...", proxima: "p_k_04" },
    p_k_04: { quem: "kaito", texto: "Se o Jin vir, ele vai saber que, se encostar em você, tem vinte pessoas querendo arrancar a cabeça dele. Esse é o ponto.", proxima: "p_k_05" },
    p_k_05: { quem: "kaito", texto: "E porque está chovendo. Também.", proxima: "p_k_06" },
    p_k_06: { tipo: "narracao", texto: "No último poste antes do fim da ponte, ele para. Ela para também. A olaria aparece do outro lado, uma chaminé alta e preta contra o céu cinza.", proxima: "p_k_07" },
    p_k_07: { quem: "kaito", texto: "Sabe o que eu pensei a noite inteira? Que eu passei onze anos querendo uma revanche. E agora eu só quero que você volte inteira pra eu poder perder de novo.", proxima: "p_k_esc" },
    p_k_esc: { escolhas: [
      { texto: "A. “Então espera por mim. Do lado de lá. Eu volto.”", proxima: "p_k_a1", pontos: { kaito: 2 }, flags: ["Kaito_espera"] },
      { texto: "B. Ficar na ponta dos pés e dar um beijo rápido na bochecha dele.", proxima: "p_k_b1", pontos: { kaito: 3, desvio: 1 }, flags: ["Beijo_bochecha_Kaito"] }
    ]},
    p_k_a1: { tipo: "narracao", texto: "O Kaito concorda com a cabeça. Ele não sorri. Ele só fica olhando para ela, como quem tenta guardar um rosto na memória.", proxima: "p_k_a2" },
    p_k_a2: { quem: "kaito", texto: "Eu espero. Eu sou bom em esperar você. Pelo visto.", proxima: "c3_01" },
    p_k_b1: { tipo: "narracao", texto: "Ela fica na ponta dos pés. É rápido. Um segundo. A bochecha dele está fria da chuva.", proxima: "p_k_b2" },
    p_k_b2: { tipo: "narracao", texto: "O Kaito fica completamente imóvel. O líder da gangue, o garoto que ninguém consegue derrubar, parado no meio da ponte, com a mão encostada na bochecha, como se tivesse levado um soco.", proxima: "p_k_b3" },
    p_k_b3: { quem: "kaito", texto: "...Isso foi trapaça.", proxima: "p_k_b4" },
    p_k_b4: { quem: "eu", texto: "Eu sei.", proxima: "p_k_b5" },
    p_k_b5: { quem: "kaito", texto: "Volta. Você tem que voltar. Agora você me deve uma explicação disso também.", proxima: "c3_01" },

    /* ---------- Ponte — Blake ---------- */
    p_b_01: { tipo: "narracao", cenario: "ponte", transicao: "tempo", legenda: "Cena 2 — A ponte", sprite: "blake", texto: "A ponte de ferro é velha e range a cada carro. O rio está marrom e rápido. O Blake anda do lado de fora, entre ela e os carros, sem comentar.", proxima: "p_b_02" },
    p_b_02: { tipo: "narracao", texto: "No meio do caminho, ele tira o relógio do pulso. Um relógio digital barato, de plástico preto, com a pulseira remendada.", proxima: "p_b_03" },
    p_b_03: { quem: "blake", texto: "Tem cronômetro. Eu vou ligar o meu agora. Se em quinze minutos você não soltar o cabelo, a gente entra de qualquer jeito.", proxima: "p_b_04" },
    p_b_04: { tipo: "narracao", texto: "Ele coloca o relógio no pulso dela. Fica largo. Ele aperta a pulseira com cuidado, no último furo, com os dedos enormes tentando ser delicados.", proxima: "p_b_05" },
    p_b_05: { quem: "blake", texto: "Era do meu pai. Foi a única coisa que ele deixou. Eu nunca tirei.", proxima: "p_b_06" },
    p_b_06: { quem: "eu", texto: "Blake, eu não posso...", proxima: "p_b_07" },
    p_b_07: { quem: "blake", texto: "Pode. Você vai me devolver. Daqui a quinze minutos. É por isso que eu estou te dando.", proxima: "p_b_08" },
    p_b_08: { tipo: "narracao", texto: "No último poste, ele para. Olha para a olaria do outro lado. Depois para ela.", proxima: "p_b_09" },
    p_b_09: { quem: "blake", texto: "Eu não falo muito. Você sabe. Então eu vou falar uma vez só. Eu não confio em quase ninguém. Eu confio em você. Mais do que eu devia.", proxima: "p_b_esc" },
    p_b_esc: { escolhas: [
      { texto: "A. Segurar a mão dele, a que está machucada: “Quinze minutos. Eu prometo.”", proxima: "p_b_a1", pontos: { blake: 2 }, flags: ["Blake_promessa_relogio"] },
      { texto: "B. “Mais do que devia? Por quê?”", proxima: "p_b_b1", pontos: { blake: 3, desvio: 1 }, flags: ["Blake_quase_confessou"] }
    ]},
    p_b_a1: { tipo: "narracao", texto: "O Blake olha para a mão dela em cima da dele. Não diz nada. Mas aperta de volta, devagar, sem força nenhuma.", proxima: "p_b_a2" },
    p_b_a2: { quem: "blake", texto: "Quinze minutos.", proxima: "c3_01" },
    p_b_b1: { tipo: "narracao", texto: "O Blake abre a boca. A chuva escorre pelo rosto dele. Ele fecha a boca.", proxima: "p_b_b2" },
    p_b_b2: { quem: "blake", texto: "Porque quando você está perto, eu paro de pensar no que pode dar errado. E eu nunca paro de pensar nisso.", proxima: "p_b_b3" },
    p_b_b3: { quem: "blake", texto: "Isso é perigoso. Pra alguém como eu.", proxima: "p_b_b4" },
    p_b_b4: { tipo: "pensamento", texto: "E a Mio? O que a Mio ia sentir se ouvisse isso?", proxima: "p_b_b5" },
    p_b_b5: { tipo: "pensamento", texto: "E o que eu estou sentindo agora, que eu não sei o nome?", proxima: "c3_01" },

    /* ---------- Ponte — Ryuji ---------- */
    p_r_01: { tipo: "narracao", cenario: "ponte", transicao: "tempo", legenda: "Cena 2 — A ponte", sprite: "ryuji", texto: "A ponte de ferro range a cada carro. O rio está marrom e rápido. O Ryuji anda do lado dela com as mãos no bolso, chutando pedrinhas, assobiando uma música que não existe.", proxima: "p_r_02" },
    p_r_02: { quem: "eu", texto: "Você está nervoso.", proxima: "p_r_03" },
    p_r_03: { quem: "ryuji", texto: "Eu? Eu nunca fico nervoso. Eu sou o Ryuji. Eu já levei três suspensões esse ano. Nada me deixa nervoso.", proxima: "p_r_04" },
    p_r_04: { tipo: "narracao", texto: "Ele chuta uma pedrinha tão forte que ela voa por cima da grade e cai no rio.", proxima: "p_r_05" },
    p_r_05: { quem: "ryuji", texto: "...Tá. Eu estou morrendo de medo. Satisfeita?", proxima: "p_r_06" },
    p_r_06: { tipo: "narracao", texto: "No meio da ponte, ele para. Tira alguma coisa do bolso da jaqueta. Um elástico de cabelo. Rosa, com um coelhinho de plástico.", proxima: "p_r_07" },
    p_r_07: { quem: "ryuji", texto: "É da Momo. Ela me deu hoje de manhã, quando eu falei que ia ajudar uma amiga. Ela disse que dá sorte. Ela usou no balé.", proxima: "p_r_08" },
    p_r_08: { quem: "ryuji", texto: "Usa no lugar desse seu elástico. Quando você soltar o cabelo, solta esse. Assim a Momo ajuda também.", proxima: "p_r_09" },
    p_r_09: { tipo: "narracao", texto: "Ele estende o elástico. A mão dele está tremendo. A SN troca o elástico ali mesmo, na chuva, e prende o cabelo com o coelhinho.", proxima: "p_r_10" },
    p_r_10: { tipo: "narracao", texto: "No último poste, ele para e fica olhando para a olaria. A provocação some da cara dele.", proxima: "p_r_11" },
    p_r_11: { quem: "ryuji", texto: "Princesa. Se você não voltar, eu vou ter que explicar pra Momo. E eu não sei mentir pra ela. Então volta.", proxima: "p_r_esc" },
    p_r_esc: { escolhas: [
      { texto: "A. “Eu volto. E aí você me leva pra tomar sorvete com a Momo.”", proxima: "p_r_a1", pontos: { ryuji: 2 }, flags: ["Sorvete_Momo"] },
      { texto: "B. Dar um abraço rápido nele, sem dizer nada.", proxima: "p_r_b1", pontos: { ryuji: 3, desvio: 1 }, flags: ["Abraco_ponte_Ryuji"] }
    ]},
    p_r_a1: { tipo: "narracao", texto: "O Ryuji ri. Um riso curto, nervoso, aliviado.", proxima: "p_r_a2" },
    p_r_a2: { quem: "ryuji", texto: "Fechado. Mas eu escolho o sabor. E você paga. Você me deve uma, lembra?", proxima: "c3_01" },
    p_r_b1: { tipo: "narracao", texto: "Ela abraça ele. O Ryuji fica rígido, com as mãos ainda no ar, sem saber onde colocar.", proxima: "p_r_b2" },
    p_r_b2: { tipo: "narracao", texto: "Depois, devagar, ele abraça de volta. Forte. Com o queixo apoiado em cima da cabeça dela, em cima do coelhinho.", proxima: "p_r_b3" },
    p_r_b3: { quem: "ryuji", texto: "...Isso não conta como eu tendo sentimentos. Só pra constar.", proxima: "p_r_b4" },
    p_r_b4: { quem: "eu", texto: "Claro que não.", proxima: "c3_01" },

    /* =================== CENA 3 — A OLARIA =================== */
    // Cenário: interior da olaria velha (usa "beco-mercado"). Fornos apagados, pó vermelho, goteiras. Música: silêncio, só a chuva.
    c3_01: { tipo: "narracao", cenario: "olaria", transicao: "tempo", legenda: "Cena 3 — A olaria", sprite: null, texto: "Meio-dia em ponto. A porta da frente da olaria está aberta. Lá dentro, tudo é vermelho. O chão, as paredes, o ar. Um pó fino de barro que gruda na pele e no cabelo.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "Fornos enormes, apagados há anos, enfileirados como bocas abertas. Goteiras pingando do telhado. E, nas paredes, a frase. Em tinta branca. Dezenas de vezes.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", efeito: "eco", texto: "DESSA VEZ NINGUÉM MORRE. DESSA VEZ NINGUÉM MORRE. DESSA VEZ NINGUÉM MORRE.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", sprite: "takeo", texto: "No meio do galpão, numa cadeira de plástico, está o Takeo. Mãos amarradas atrás das costas com fita. O lábio cortado. Um olho inchado. Mas, quando ele vê a SN, a primeira coisa que ele faz é tentar sorrir.", proxima: "c3_05" },
    c3_05: { quem: "takeo", texto: "SN, não... você não devia ter vindo... vai embora...", proxima: "c3_06" },
    c3_06: { tipo: "pensamento", texto: "Ele está vivo. Machucado, mas vivo.", proxima: "c3_07" },
    c3_07: { tipo: "pensamento", texto: "E ele está mandando eu ir embora. Claro que está.", proxima: "c3_08" },
    c3_08: { tipo: "narracao", sprite: "goro", texto: "Atrás da cadeira, o Goro, enorme, de braços cruzados. Encostado num forno, o Shinji, girando a corrente. E, num canto, encolhida, uma garota de jaqueta com um lírio bordado. Pálida. Olhando para o chão.", proxima: "c3_09" },
    c3_09: { tipo: "pensamento", sprite: "akane", texto: "Akane.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", sprite: "jin", texto: "Passos no segundo andar. Uma escada de ferro rangendo. O Jin desce devagar, casaco preto, cabelo loiro penteado para trás, o anel prateado brilhando na luz cinza.", proxima: "c3_11" },
    c3_11: { quem: "jin", texto: "Pontual. Sozinha. Eu sabia que você ia cumprir.", proxima: "c3_12" },
    c3_12: { caminhos: [
      { flag: "Ponte_Kaito", proxima: "c3_12_kaito" },
      { flag: "Ponte_Blake", proxima: "c3_12_blake" },
      { flag: "Ponte_Ryuji", proxima: "c3_12_ryuji" }
    ], proxima: "c3_12_kaito" },
    // A fala do Jin muda conforme quem foi com ela até o fim da ponte (Escolha 1)
    c3_12_kaito: { quem: "jin", texto: "E com a jaqueta dos Black Dragons nos ombros. Grande demais pra você. Você tem muita gente que se importa com você para quem era uma fantasma semana passada.", proxima: "c3_13" },
    c3_12_blake: { quem: "jin", texto: "E com um relógio de homem no pulso, largo demais, apertado no último furo. Você tem muita gente que se importa com você para quem era uma fantasma semana passada.", proxima: "c3_13" },
    c3_12_ryuji: { quem: "jin", texto: "E com um elástico de coelhinho no cabelo. Rosa. De criança. Você tem muita gente que se importa com você para quem era uma fantasma semana passada.", proxima: "c3_13" },
    c3_13: { tipo: "pensamento", texto: "Ele sabe. Ele sempre sabe de tudo.", proxima: "c3_14" },
    c3_14: { quem: "eu", texto: "Solta ele.", proxima: "c3_15" },
    c3_15: { quem: "jin", texto: "Daqui a pouco. Primeiro, a foto. Depois, uma resposta.", proxima: "c3_16" },
    c3_16: { tipo: "narracao", texto: "Ele aponta para as paredes. Para a frase repetida.", proxima: "c3_17" },
    c3_17: { quem: "jin", texto: "Você reconhece, não reconhece? Eu vi seu rosto quando a sua amiguinha tirou foto do muro ontem. Eu estava lá em cima.", proxima: "c3_18" },
    c3_18: { quem: "jin", texto: "Dez anos atrás, uma pessoa me disse essa frase. Exatamente essa. Com exatamente esse olhar que você tem. Como quem já viu o final de tudo e voltou pra tentar mudar.", proxima: "c3_19" },
    c3_19: { quem: "jin", texto: "Ela também sabia coisas que não devia saber. Ela também era muito mais forte do que parecia.", proxima: "c3_20" },
    c3_20: { quem: "jin", texto: "E ela morreu mesmo assim.", proxima: "c3_21" },
    c3_21: { tipo: "narracao", texto: "Por um segundo, só um, a máscara educada do Jin escorrega. E, por baixo, a SN vê uma coisa que ela não esperava ver no rosto dele. Luto.", proxima: "c3_22" },
    c3_22: { quem: "jin", texto: "Então eu vou perguntar só uma vez. Quem é você? E como você sabia?", proxima: "c3_esc2" },

    // ▶ ESCOLHA 2 — O que dizer ao Jin?
    c3_esc2: { escolhas: [
      { texto: "A. A verdade: “Eu vim do futuro. Eu já vi o final. E eu voltei pra ninguém morrer.”", proxima: "c3_2a_1", pontos: { desvio: 3 }, flags: ["Jin_sabe_viagem"] },
      { texto: "B. Uma pergunta: “Quem era ela, Jin?”", proxima: "c3_2b_1", pontos: { desvio: 1 }, flags: ["Perguntou_quem_era"] },
      { texto: "C. Nada. Entregar o pendrive e repetir: “Solta ele.”", proxima: "c3_2c_1", pontos: { takeo: 1 }, flags: ["Entregou_pendrive"] }
    ]},
    c3_2a_1: { tipo: "narracao", texto: "Silêncio. O Shinji para de girar a corrente. O Goro olha para o Jin. Até o Takeo, na cadeira, vira a cabeça para ela.", proxima: "c3_2a_2" },
    c3_2a_2: { tipo: "narracao", texto: "O Jin não ri. O Jin não duvida. Ele fecha os olhos, como quem ouve uma música que conhece.", proxima: "c3_2a_3" },
    c3_2a_3: { quem: "jin", texto: "Foi exatamente o que ela disse.", proxima: "c3_2a_4" },
    c3_2a_4: { quem: "jin", texto: "E eu não acreditei nela. Eu ri. E ela morreu uma semana depois.", proxima: "c3_2a_5" },
    c3_2a_5: { quem: "jin", texto: "Dessa vez eu acredito. É por isso que eu tenho tanto medo de você.", proxima: "c3_23" },
    c3_2b_1: { tipo: "narracao", texto: "O Jin fica em silêncio por um tempo longo. A chuva bate no telhado de zinco.", proxima: "c3_2b_2" },
    c3_2b_2: { quem: "jin", texto: "Minha irmã. Mais velha. Ela me criou. Um dia ela acordou diferente, falando de coisas que ainda não tinham acontecido. Dizendo que ia salvar alguém.", proxima: "c3_2b_3" },
    c3_2b_3: { quem: "jin", texto: "Ela salvou. E quem pagou foi ela.", proxima: "c3_2b_4" },
    c3_2b_4: { tipo: "pensamento", texto: "“Toda vez que eu salvo alguém, outra pessoa se machuca.”", proxima: "c3_2b_5" },
    c3_2b_5: { tipo: "pensamento", texto: "E se a outra pessoa for eu?", proxima: "c3_23" },
    c3_2c_1: { tipo: "narracao", texto: "Ela tira o pendrive do bolso e joga. O Jin pega no ar sem nem olhar.", proxima: "c3_2c_2" },
    c3_2c_2: { quem: "jin", texto: "Leal. Ela também era leal. Até o fim.", proxima: "c3_2c_3" },
    c3_2c_3: { tipo: "narracao", texto: "Ele guarda o pendrive no bolso do casaco, mas não se mexe para soltar o Takeo.", proxima: "c3_23" },

    // (todas as opções continuam aqui)
    c3_23: { quem: "jin", texto: "Goro. Solta o garoto.", proxima: "c3_24" },
    c3_24: { tipo: "narracao", sprite: "goro", texto: "O Goro não se mexe.", proxima: "c3_25" },
    c3_25: { quem: "goro", texto: "Não. Você pagou pela foto. O Shinji e eu queremos outra coisa. A Fantasma humilhou a gente. Duas vezes. Ela não sai daqui andando.", proxima: "c3_26" },
    c3_26: { quem: "jin", texto: "Goro. Eu não vou repetir.", proxima: "c3_27" },
    c3_27: { quem: "shinji", texto: "E você vai fazer o quê, chefe? Você nunca suja a mão.", proxima: "c3_28" },
    c3_28: { tipo: "narracao", sprite: "jin", texto: "O Jin olha para os dois irmãos. E, pela primeira vez, ele parece não ter o controle de nada.", proxima: "c3_29" },
    c3_29: { tipo: "pensamento", texto: "Agora.", proxima: "c3_30" },
    c3_30: { tipo: "narracao", efeito: "tremor", texto: "A SN puxa o elástico. O cabelo cai sobre os ombros.", proxima: "c4_01" },

    /* =================== CENA 4 — DESSA VEZ =================== */
    // Cenário: a olaria. Música: tema de tensão no máximo.
    c4_01: { tipo: "narracao", transicao: "tempo", legenda: "Cena 4 — Dessa vez", sprite: "kaito", texto: "A porta dos fundos explode para dentro. O Kaito entra primeiro, depois o Blake, depois o Ryuji, encharcados de rio e de chuva, sem gritar nada.", proxima: "c4_cam1" },
    c4_cam1: { caminhos: [
      { flag: "Alianca_Reina", proxima: "c4_reina" }
    ], proxima: "c4_02" },
    c4_reina: { tipo: "narracao", sprite: "reina", texto: "Pela janela quebrada, a Reina pula para dentro com três garotas do Lírio atrás dela. Ela olha direto para a Akane, encolhida no canto. A Akane começa a chorar.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", sprite: null, texto: "Tudo acontece ao mesmo tempo. O Shinji gira a corrente para o Ryuji. O Kaito vai para cima do Goro. O Blake atravessa o galpão direto para a cadeira do Takeo.", proxima: "c4_03" },
    c4_03: { tipo: "narracao", texto: "E o Jin, no meio de tudo, recua para a escada de ferro, devagar, sem tirar os olhos da SN.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", sprite: "takeo", texto: "A SN corre para o Takeo. Ela arranca a fita dos pulsos dele com uma mão só. Ele cai da cadeira, fraco, e ela segura antes de ele bater no chão.", proxima: "c4_05" },
    c4_05: { quem: "takeo", texto: "Você soltou o cabelo.", proxima: "c4_06" },
    c4_06: { quem: "eu", texto: "Era o sinal.", proxima: "c4_07" },
    c4_07: { quem: "takeo", texto: "Fica bonito assim.", proxima: "c4_08" },
    c4_08: { quem: "eu", texto: "Takeo. Agora não.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", sprite: "goro", texto: "Atrás deles, o Goro se solta do Kaito. Ele arranca uma viga de madeira podre de um dos fornos e vem para cima da SN, com a viga erguida acima da cabeça.", proxima: "c4_10" },
    c4_10: { tipo: "narracao", texto: "Ela está de costas. Ela não vê.", proxima: "c4_11" },
    c4_11: { tipo: "narracao", sprite: "takeo", texto: "O Takeo vê.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", texto: "Machucado, fraco, com um olho fechado, o Takeo se joga na frente dela. Os braços abertos. Sem pensar. Sem hesitar. Do mesmo jeito que sempre fez.", proxima: "c4_13" },
    c4_13: { tipo: "narracao", efeito: "flashback", texto: "E a SN entende.", proxima: "c4_14" },
    c4_14: { tipo: "narracao", efeito: "flashback", texto: "“Ele morreu protegendo alguém. Ninguém nunca me contou quem.”", proxima: "c4_15" },
    c4_15: { tipo: "pensamento", efeito: "eco", texto: "Era eu.", proxima: "c4_16" },
    c4_16: { tipo: "pensamento", efeito: "eco", texto: "Da outra vez, de algum jeito, era eu.", proxima: "c4_17" },
    c4_17: { tipo: "narracao", texto: "A viga desce.", proxima: "c4_18" },
    c4_18: { tipo: "narracao", efeito: "tremor", texto: "E para no ar. A um palmo da cabeça do Takeo. Segurada pela mão pequena da garota que, até semana passada, todo mundo chamava de Fantasma.", proxima: "c4_19" },
    c4_19: { tipo: "narracao", texto: "A madeira range. Racha. O Goro empurra com todo o peso. Ela não se mexe.", proxima: "c4_20" },
    c4_20: { quem: "eu", texto: "Dessa vez...", proxima: "c4_21" },
    c4_21: { tipo: "narracao", efeito: "tremor", texto: "Ela fecha a mão. A viga quebra ao meio. O Goro perde o equilíbrio e cai de costas no pó vermelho.", proxima: "c4_22" },
    c4_22: { quem: "eu", efeito: "eco", texto: "...ninguém morre.", proxima: "c4_23" },
    c4_23: { tipo: "narracao", texto: "Silêncio. A briga inteira para. O Shinji com a corrente parada no ar. O Kaito com o punho erguido. O Ryuji com o lábio sangrando. O Blake no meio do galpão. Todos olhando para ela.", proxima: "c4_24" },
    c4_24: { tipo: "narracao", texto: "E o Takeo, de joelhos na frente dela, olhando para cima, para a mão dela ainda segurando metade da viga.", proxima: "c4_25" },
    c4_25: { tipo: "narracao", sprite: "jin", texto: "Lá no alto da escada de ferro, o Jin para. Olha para ela. E, pela primeira vez, ele sorri de verdade. Um sorriso triste.", proxima: "c4_26" },
    c4_26: { quem: "jin", efeito: "eco", texto: "Ela não conseguiu. Você conseguiu.", proxima: "c4_27" },
    c4_27: { tipo: "narracao", texto: "Ele some pela porta do segundo andar. Lá fora, um motor de carro liga e vai embora. Sirenes começam a soar longe, cada vez mais perto.", proxima: "c4_28" },
    c4_28: { tipo: "narracao", sprite: "akane", texto: "O Shinji e o Goro olham um para o outro e correm para o rio. A Akane não corre. Ela se ajoelha no chão e coloca as mãos na cabeça. A Reina se ajoelha na frente dela.", proxima: "c4_29" },
    c4_29: { tipo: "narracao", sprite: "takeo", texto: "A SN larga a viga. As mãos dela estão tremendo. As pernas também. Ela cai sentada no pó vermelho, do lado do Takeo.", proxima: "c4_30" },
    c4_30: { quem: "takeo", texto: "Você me salvou.", proxima: "c4_31" },
    c4_31: { quem: "eu", texto: "Você se jogou na minha frente. Seu idiota. Você se jogou na minha frente.", proxima: "c4_32" },
    c4_32: { quem: "takeo", texto: "Eu sempre vou me jogar. Você sabe disso.", proxima: "c4_33" },
    c4_33: { tipo: "narracao", texto: "Ela começa a chorar. Não um choro bonito. Um choro feio, de dez anos guardado, com soluço e nariz escorrendo e pó vermelho grudando no rosto molhado.", proxima: "c4_34" },
    c4_34: { tipo: "narracao", texto: "O Takeo não entende por que ela chora tanto. Mas ele abraça ela mesmo assim. E ela deixa.", proxima: "c4_esc3" },

    // ▶ ESCOLHA 3 — No chão da olaria, com o Takeo
    c4_esc3: { escolhas: [
      { texto: "A. “Promete que você nunca mais vai morrer por mim.”", proxima: "c4_3a_1", pontos: { takeo: 3 }, flags: ["Takeo_promessa_viver"] },
      { texto: "B. Não dizer nada. Só ficar abraçada com ele até as sirenes chegarem.", proxima: "c4_3b_1", pontos: { takeo: 2 }, flags: ["Abraco_olaria"] },
      { texto: "C. “Takeo. Eu também sempre vou me jogar na sua frente. Pode ir se acostumando.”", proxima: "c4_3c_1", pontos: { takeo: 3, desvio: 1 }, flags: ["SN_protege_Takeo"] }
    ]},
    c4_3a_1: { quem: "takeo", texto: "Morrer? Eu não ia morrer. Era só uma viga.", proxima: "c4_3a_2" },
    c4_3a_2: { quem: "eu", texto: "Promete.", proxima: "c4_3a_3" },
    c4_3a_3: { tipo: "narracao", texto: "Ele olha para o rosto dela. Para o tamanho do medo que tem ali. E o sorriso dele some.", proxima: "c4_3a_4" },
    c4_3a_4: { quem: "takeo", texto: "...Prometo. Eu não sei por que é tão importante. Mas eu prometo.", proxima: "c4_35" },
    c4_3b_1: { tipo: "narracao", texto: "Eles ficam ali. Ela com o rosto no ombro dele. Ele com a mão no cabelo solto dela, sem saber direito o que fazer, mas sem tirar.", proxima: "c4_3b_2" },
    c4_3b_2: { tipo: "pensamento", texto: "O coração dele está batendo. Rápido. Forte. Eu consigo sentir.", proxima: "c4_3b_3" },
    c4_3b_3: { tipo: "pensamento", texto: "Batendo.", proxima: "c4_35" },
    c4_3c_1: { tipo: "narracao", texto: "O Takeo ri. Ri e faz careta de dor ao mesmo tempo, segurando as costelas.", proxima: "c4_3c_2" },
    c4_3c_2: { quem: "takeo", texto: "Você segurou uma viga com uma mão. Eu acho que você ganha essa.", proxima: "c4_3c_3" },
    c4_3c_3: { quem: "eu", texto: "Eu ganho todas.", proxima: "c4_3c_4" },
    c4_3c_4: { quem: "takeo", texto: "...Eu não ligo de perder pra você. Nunca liguei.", proxima: "c4_35" },

    // (todas as opções continuam aqui)
    c4_35: { tipo: "narracao", sprite: null, texto: "As sirenes chegam. Luzes vermelhas e azuis entram pelas janelas quebradas e pintam a frase na parede de outras cores.", proxima: "c4_36" },
    c4_36: { tipo: "narracao", texto: "DESSA VEZ NINGUÉM MORRE.", proxima: "c4_37" },
    c4_37: { tipo: "pensamento", texto: "Dessa vez. Ninguém.", proxima: "c5_01" },

    /* =================== CENA 5 — A SALA DE ESPERA =================== */
    // Cenário: corredor do pronto-socorro, fim da tarde (usa "corredor"). Música: piano, calmo, quente.
    c5_01: { tipo: "narracao", cenario: "corredor-hospital", transicao: "tempo", legenda: "Cena 5 — A sala de espera", sprite: null, texto: "O corredor do pronto-socorro tem cadeiras de plástico azul, uma máquina de café que só devolve moeda e um relógio que anda devagar demais.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", texto: "O Takeo está lá dentro, com a avó, fazendo raio-x. Duas costelas trincadas, um olho roxo, nada quebrado de verdade. Ele vai ficar bem.", proxima: "c5_03" },
    c5_03: { tipo: "narracao", sprite: "mae", texto: "A mãe da SN chegou de uniforme de enfermeira, abraçou a filha por dez minutos inteiros sem dizer nada e depois sumiu no corredor para “falar com umas pessoas”. A SN tem certeza de que essas pessoas são da polícia.", proxima: "c5_04" },
    c5_04: { tipo: "narracao", sprite: null, texto: "A Mio e a Hana foram comprar comida. O resto está ali. Esperando. Cada um num canto, sujo de barro vermelho, como se tivessem saído de uma guerra.", proxima: "c5_05" },
    c5_05: { tipo: "pensamento", texto: "Eles vieram. Todos eles. Pelo rio, na chuva.", proxima: "c5_06" },
    c5_06: { tipo: "pensamento", texto: "Eu passei vinte e oito anos achando que ninguém viria por mim.", proxima: "c5_07" },

    /* ---------- Sala de espera — Ryuji ---------- */
    c5_07: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji é o primeiro a sentar do lado dela. Ele tem um corte no lábio e um curativo torto na testa, que ele mesmo fez no banheiro.", proxima: "c5_08" },
    c5_08: { quem: "ryuji", texto: "Sua mão.", proxima: "c5_09" },
    c5_09: { tipo: "narracao", texto: "Ela olha. A palma está cheia de farpas da viga, algumas pequenas, outras nem tanto. Ela nem tinha percebido.", proxima: "c5_10" },
    c5_10: { tipo: "narracao", texto: "O Ryuji tira do bolso uma pinça. Uma pinça de sobrancelha, rosa, com brilhinho.", proxima: "c5_11" },
    c5_11: { quem: "ryuji", texto: "Da Momo. Ela esconde na minha jaqueta pra minha mãe não achar. Não pergunta.", proxima: "c5_12" },
    c5_12: { tipo: "narracao", texto: "Ele segura a mão dela e começa a tirar as farpas, uma por uma. Concentrado, de língua para fora, exatamente como a irmã no balé. Ela não diz nada. Ele não diz nada.", proxima: "c5_13" },
    c5_13: { quem: "ryuji", texto: "Sabe o que eu pensei quando você segurou aquela viga?", proxima: "c5_14" },
    c5_14: { quem: "eu", texto: "Que eu sou um monstrinho de um metro e sessenta?", proxima: "c5_15" },
    c5_15: { quem: "ryuji", texto: "Que eu queria ser alguém que você não precisasse proteger. Que eu queria ser forte o bastante pra ficar do seu lado, não atrás.", proxima: "c5_16" },
    c5_16: { quem: "ryuji", texto: "Isso é muito idiota de falar em voz alta.", proxima: "c5_esc4" },
    c5_esc4: { escolhas: [
      { texto: "A. “Você não estava atrás. Você entrou pelo rio. Na chuva. Isso é estar do lado.”", proxima: "c5_4a_1", pontos: { ryuji: 2 } },
      { texto: "B. Apertar a mão dele de volta, com as farpas e tudo: “Não é idiota.”", proxima: "c5_4b_1", pontos: { ryuji: 3 }, flags: ["Ryuji_mao_hospital"] }
    ]},
    c5_4a_1: { tipo: "narracao", texto: "O Ryuji para de tirar as farpas por um segundo. Depois continua, mais devagar.", proxima: "c5_4a_2" },
    c5_4a_2: { quem: "ryuji", texto: "...Você tem que parar de falar essas coisas, princesa. Eu tenho uma reputação.", proxima: "c5_17" },
    c5_4b_1: { tipo: "narracao", texto: "Ela aperta a mão dele. Ele faz uma careta, porque ela esqueceu de controlar a força, e depois ri, com o lábio cortado.", proxima: "c5_4b_2" },
    c5_4b_2: { quem: "ryuji", texto: "Ai. Tá. Não é idiota. Mas solta antes de quebrar meus dedos.", proxima: "c5_4b_3" },
    c5_4b_3: { tipo: "narracao", texto: "Ela solta. Ele não solta. Ele fica segurando a mão dela, frouxo, até a última farpa sair.", proxima: "c5_17" },
    c5_17: { tipo: "narracao", sprite: null, texto: "Depois ele levanta, enfia a pinça rosa no bolso e vai buscar café na máquina que só devolve moeda.", proxima: "c5_18" },

    /* ---------- Sala de espera — Kaito ---------- */
    c5_18: { tipo: "narracao", sprite: "kaito", texto: "O Kaito não senta. Ele fica de pé na frente dela, encostado na parede, com os braços cruzados e um saco de gelo apertado contra o olho.", proxima: "c5_cam_k" },
    c5_cam_k: { caminhos: [
      { flag: "Beijo_bochecha_Kaito", proxima: "c5_k_beijo" }
    ], proxima: "c5_19" },
    c5_k_beijo: { quem: "kaito", texto: "Eu ainda estou esperando a explicação daquilo na ponte. Só pra você saber. Eu não esqueci.", proxima: "c5_k_beijo2" },
    c5_k_beijo2: { quem: "eu", texto: "Eu sei que não esqueceu. Você é bom em lembrar das coisas por onze anos.", proxima: "c5_19" },
    c5_19: { quem: "kaito", texto: "Quando você segurou aquela viga, todo mundo parou. Eu também. E eu pensei: ela não precisa da gente. Ela nunca precisou.", proxima: "c5_20" },
    c5_20: { quem: "kaito", texto: "Mas aí você caiu sentada e começou a chorar. E eu pensei: não. Ela precisa. Só não do jeito que todo mundo acha.", proxima: "c5_21" },
    c5_21: { tipo: "narracao", texto: "Ele se agacha na frente dela. Fica na altura dos olhos dela.", proxima: "c5_22" },
    c5_22: { quem: "kaito", texto: "Eu quero ser isso. O jeito que você precisa. Não sei ainda o que é. Mas eu quero descobrir.", proxima: "c5_esc5" },
    c5_esc5: { escolhas: [
      { texto: "A. “Você já está sendo. Você veio.”", proxima: "c5_5a_1", pontos: { kaito: 2 } },
      { texto: "B. Tirar o saco de gelo da mão dele e segurar ela mesma contra o olho dele: “Começa deixando alguém cuidar de você.”", proxima: "c5_5b_1", pontos: { kaito: 3 }, flags: ["SN_cuidou_Kaito"] }
    ]},
    c5_5a_1: { tipo: "narracao", texto: "O Kaito fica olhando para ela. O olho que não está inchado brilha um pouco.", proxima: "c5_5a_2" },
    c5_5a_2: { quem: "kaito", texto: "...Você fala as coisas como se fossem fáceis.", proxima: "c5_5a_3" },
    c5_5a_3: { quem: "eu", texto: "Às vezes elas são.", proxima: "c5_23" },
    c5_5b_1: { tipo: "narracao", texto: "Ela segura o gelo contra o rosto dele. O Kaito fica imóvel, como um gato que não sabe se gosta de carinho.", proxima: "c5_5b_2" },
    c5_5b_2: { quem: "kaito", texto: "Ninguém faz isso comigo.", proxima: "c5_5b_3" },
    c5_5b_3: { quem: "eu", texto: "Agora alguém faz.", proxima: "c5_5b_4" },
    c5_5b_4: { tipo: "narracao", texto: "Ele fecha os olhos. Fica assim, agachado na frente dela no corredor do hospital, deixando ela segurar o gelo, por muito mais tempo do que qualquer olho inchado precisaria.", proxima: "c5_23" },
    c5_23: { tipo: "narracao", sprite: null, texto: "Uma enfermeira passa e manda ele sentar numa cadeira “como gente”. Ele senta. Do lado dela.", proxima: "c5_24" },

    /* ---------- Sala de espera — Blake e Mio ---------- */
    c5_24: { tipo: "narracao", sprite: "mio", texto: "A Mio e a Hana voltam com sacolas de pão de queijo e suco. A Mio para na entrada do corredor quando vê o Blake sentado sozinho, no fim da fila de cadeiras, olhando para a mão enfaixada.", proxima: "c5_cam_m" },
    c5_cam_m: { caminhos: [
      { flag: "Mio_vai_falar_Blake", proxima: "c5_m_fala" },
      { flag: "SN_abriu_mao_Blake", proxima: "c5_m_fala" }
    ], proxima: "c5_m_hesita" },
    c5_m_fala: { tipo: "narracao", sprite: "mio", texto: "A Mio olha para a SN. A SN faz que sim com a cabeça, bem de leve. A Mio respira fundo, como quem vai pular de um prédio, e vai até o Blake com um pão de queijo na mão.", proxima: "c5_m_fala2" },
    c5_m_fala2: { tipo: "narracao", texto: "A SN não ouve o que ela diz. Só vê. A Mio falando rápido, gesticulando, ficando vermelha. O Blake ouvindo, imóvel. A Mio parando de falar. Um silêncio longo.", proxima: "c5_m_fala3" },
    c5_m_fala3: { tipo: "narracao", flags: ["Mio_confessou_Blake"], texto: "E então o Blake pega o pão de queijo da mão dela. E diz alguma coisa curta. E a Mio cobre o rosto com as duas mãos.", proxima: "c5_m_fala4" },
    c5_m_fala4: { tipo: "pensamento", texto: "Eu não sei o que ele respondeu. Mas a Mio não está chorando. Ela está escondendo um sorriso.", proxima: "c5_m_fala5" },
    c5_m_fala5: { tipo: "pensamento", texto: "E eu estou feliz por ela. Eu estou. Então por que tem um pedacinho de mim que dói?", proxima: "c5_25" },
    c5_m_hesita: { tipo: "narracao", sprite: "mio", texto: "A Mio fica parada. Olha para o Blake. Olha para a SN. Depois entrega a sacola para a Hana e senta do lado da SN, longe dele, falando alto sobre o recheio do pão de queijo.", proxima: "c5_m_hesita2" },
    c5_m_hesita2: { tipo: "pensamento", texto: "Ela ainda não teve coragem. E o Blake ainda não sabe.", proxima: "c5_25" },

    c5_25: { tipo: "narracao", sprite: "blake", texto: "Mais tarde, quando a Mio vai ao banheiro, o Blake levanta e vem até a SN. Ele estende a mão. A palma para cima.", proxima: "c5_26" },
    c5_26: { quem: "blake", texto: "Meu relógio.", proxima: "c5_cam_b" },
    c5_cam_b: { caminhos: [
      { flag: "Ponte_Blake", proxima: "c5_b_relogio" }
    ], proxima: "c5_b_sem" },
    c5_b_relogio: { tipo: "narracao", texto: "Ela tira o relógio do pai dele do pulso e coloca na mão dele. O cronômetro ainda está correndo. Quarenta e três minutos.", proxima: "c5_b_relogio2" },
    c5_b_relogio2: { quem: "blake", texto: "Eram quinze. Você atrasou vinte e oito minutos. Foram os vinte e oito minutos mais longos da minha vida.", proxima: "c5_27" },
    c5_b_sem: { tipo: "narracao", texto: "Ela pisca, confusa. Ele não deu relógio nenhum para ela.", proxima: "c5_b_sem2" },
    c5_b_sem2: { quem: "blake", texto: "Brincadeira. Eu só queria ver sua cara. O Ryuji disse que eu não sei fazer piada.", proxima: "c5_b_sem3" },
    c5_b_sem3: { quem: "eu", texto: "Você não sabe mesmo.", proxima: "c5_b_sem4" },
    c5_b_sem4: { quem: "blake", texto: "...É. Eu sei.", proxima: "c5_27" },
    c5_27: { quem: "blake", texto: "A Mio falou comigo. Ou tentou. Ou vai tentar. Eu não sei o que fazer com isso, SN. Eu nunca soube o que fazer com nada que não dá pra resolver com força.", proxima: "c5_28" },
    c5_28: { quem: "blake", texto: "E você também está na minha cabeça. Desde a física. E isso não é justo com ninguém.", proxima: "c5_esc6" },
    c5_esc6: { escolhas: [
      { texto: "A. “Então não decide hoje. Ninguém precisa decidir nada hoje, Blake.”", proxima: "c5_6a_1", pontos: { blake: 2, mio: 1 }, flags: ["Blake_tempo"] },
      { texto: "B. “A Mio te ama há muito tempo. Olha pra ela primeiro.”", proxima: "c5_6b_1", pontos: { mio: 3, blake: 1 }, flags: ["SN_apoiou_Mio"] },
      { texto: "C. “Eu também penso em você. Mas a Mio é minha melhor amiga. Eu não sei o que fazer também.”", proxima: "c5_6c_1", pontos: { blake: 3 }, flags: ["SN_admitiu_Blake"] }
    ]},
    c5_6a_1: { tipo: "narracao", texto: "O Blake solta o ar, como se estivesse segurando desde a ponte.", proxima: "c5_6a_2" },
    c5_6a_2: { quem: "blake", texto: "Tá. Hoje não. Hoje todo mundo está vivo. Isso basta.", proxima: "c5_29" },
    c5_6b_1: { tipo: "narracao", texto: "O Blake olha para a porta do banheiro, por onde a Mio vai sair a qualquer momento. Depois para a SN.", proxima: "c5_6b_2" },
    c5_6b_2: { quem: "blake", texto: "Você gosta muito dela.", proxima: "c5_6b_3" },
    c5_6b_3: { quem: "eu", texto: "Ela é minha primeira amiga. Desde os seis anos.", proxima: "c5_6b_4" },
    c5_6b_4: { quem: "blake", texto: "...Tá. Eu vou olhar. De verdade. Prometo.", proxima: "c5_29" },
    c5_6c_1: { tipo: "narracao", texto: "O Blake fica completamente imóvel. Depois senta do lado dela, devagar, como se o chão pudesse sumir.", proxima: "c5_6c_2" },
    c5_6c_2: { quem: "blake", texto: "Então a gente tem o mesmo problema.", proxima: "c5_6c_3" },
    c5_6c_3: { quem: "eu", texto: "Parece que sim.", proxima: "c5_6c_4" },
    c5_6c_4: { quem: "blake", texto: "...Pelo menos dessa vez eu não estou sozinho nele.", proxima: "c5_29" },

    /* ---------- Sala de espera — Takeo ---------- */
    c5_29: { tipo: "narracao", sprite: "takeo", texto: "A porta da sala de raio-x abre. O Takeo sai devagar, com o tronco enfaixado por baixo da camisa e a avó segurando o braço dele. Uma senhora pequenininha, de cabelo branco, que chega na altura do ombro dele.", proxima: "c5_30" },
    c5_30: { tipo: "narracao", sprite: "avo_takeo", texto: "A SN reconhece na hora. A senhora da primeira fila. A que segurava a jaqueta grande demais no colo.", proxima: "c5_31" },
    c5_31: { tipo: "narracao", texto: "A avó do Takeo olha para a SN. Solta o braço do neto. Atravessa o corredor e segura as duas mãos dela, com os dedos finos e enrugados.", proxima: "c5_32" },
    c5_32: { quem: "avo_takeo", texto: "Foi você. Ele me contou. Você segurou o pedaço de pau que ia cair na cabeça dele.", proxima: "c5_33" },
    c5_33: { quem: "avo_takeo", texto: "Obrigada, menina. Eu só tenho ele.", proxima: "c5_34" },
    c5_34: { tipo: "narracao", texto: "A SN não consegue responder. Ela só aperta as mãos da senhora de volta, com todo o cuidado do mundo, para não machucar.", proxima: "c5_35" },
    c5_35: { tipo: "pensamento", texto: "Dessa vez, ela não vai sentar na primeira fila. Dessa vez, ela vai fazer oitenta anos com ele do lado.", proxima: "c5_36" },
    c5_36: { tipo: "narracao", sprite: "takeo", texto: "Quando a avó vai assinar os papéis da alta, o Takeo senta do lado da SN, com cuidado por causa das costelas. Ele tira um papel dobrado do bolso. Amassado, sujo de barro vermelho.", proxima: "c5_37" },
    c5_37: { quem: "takeo", texto: "Eu escrevi isso na olaria. Com a mão amarrada, atrás das costas. Eu achei que... sei lá. Que eu não ia sair de lá. E eu queria que você soubesse.", proxima: "c5_38" },
    c5_38: { tipo: "narracao", texto: "Ela abre o papel. A letra está quase ilegível, torta, escrita sem ver. Só uma linha.", proxima: "c5_39" },
    c5_39: { tipo: "narracao", efeito: "eco", texto: "“SN, eu gosto de você desde sempre.”", proxima: "c5_40" },
    c5_40: { tipo: "pensamento", texto: "“Eu preciso te contar uma coisa.”", proxima: "c5_41" },
    c5_41: { tipo: "pensamento", texto: "Dez anos atrás, era isso também? Além da Reina, além da foto. Era isso?", proxima: "c5_42" },
    c5_42: { quem: "takeo", texto: "Você não precisa responder. Sério. Eu só não queria que ficasse sem você saber. Eu tenho medo de coisas que ficam sem a pessoa saber.", proxima: "c5_esc7" },
    c5_esc7: { escolhas: [
      { texto: "A. Dobrar o papel com cuidado e guardar no bolso, junto da carta da avó: “Eu vou guardar pra sempre.”", proxima: "c5_7a_1", pontos: { takeo: 3 }, flags: ["Guardou_bilhete_Takeo"] },
      { texto: "B. Encostar a testa na dele: “Eu sei. Eu demorei muito pra saber. Mas agora eu sei.”", proxima: "c5_7b_1", pontos: { takeo: 3, desvio: 1 }, flags: ["Testa_Takeo"] },
      { texto: "C. “Me dá um tempo pra responder do jeito certo? Eu quero responder do jeito certo.”", proxima: "c5_7c_1", pontos: { takeo: 2 }, flags: ["Takeo_espera_resposta"] }
    ]},
    c5_7a_1: { tipo: "narracao", texto: "Ela dobra o papel em quatro, devagar, como quem dobra uma coisa frágil. Guarda no bolso de dentro do casaco, junto da carta da avó.", proxima: "c5_7a_2" },
    c5_7a_2: { tipo: "narracao", texto: "O Takeo olha para o bolso dela. Depois para ela. O rosto dele, com o olho roxo e o lábio cortado, se abre no maior sorriso que ela já viu nele.", proxima: "c5_43" },
    c5_7b_1: { tipo: "narracao", texto: "Ela encosta a testa na dele. Os dois ficam assim, de olhos fechados, no corredor do pronto-socorro, cheirando a barro e a antisséptico.", proxima: "c5_7b_2" },
    c5_7b_2: { quem: "takeo", texto: "Isso foi um sim?", proxima: "c5_7b_3" },
    c5_7b_3: { quem: "eu", texto: "Isso foi um “eu estou aqui”.", proxima: "c5_7b_4" },
    c5_7b_4: { quem: "takeo", texto: "...Eu aceito. Por enquanto, eu aceito muito.", proxima: "c5_43" },
    c5_7c_1: { tipo: "narracao", texto: "O Takeo concorda com a cabeça, sem nenhuma decepção no rosto.", proxima: "c5_7c_2" },
    c5_7c_2: { quem: "takeo", texto: "Eu esperei dez anos sem falar. Eu espero mais um pouco agora que falei. É bem mais fácil.", proxima: "c5_43" },
    c5_43: { tipo: "narracao", sprite: null, texto: "Do fim do corredor, a Hana está olhando para eles. Quando a SN percebe, a Hana sorri e vira a página do caderno de gatinhos, fingindo que estava lendo.", proxima: "c5_44" },
    c5_44: { tipo: "narracao", sprite: "hana", texto: "Mais tarde, ela senta do lado da SN e fala baixinho, só para ela ouvir.", proxima: "c5_cam_h" },
    c5_cam_h: { caminhos: [
      { flag: "Hana_sabe_tudo", proxima: "c5_h_sabe" },
      { flag: "Hana_sabe_viagem", proxima: "c5_h_sabe" }
    ], proxima: "c5_h_nao" },
    c5_h_sabe: { quem: "hana", texto: "Da outra vez, ele não saiu daquela olaria, não foi? Não precisa responder. Eu vi sua cara quando a viga desceu.", proxima: "c5_h_sabe2" },
    c5_h_sabe2: { quem: "hana", texto: "Você mudou o final. Você mudou de verdade.", proxima: "c5_45" },
    c5_h_nao: { quem: "hana", texto: "Eu não sei o que você é, SN. Mas eu sei que hoje você impediu uma coisa muito ruim. Dava pra ver na sua cara.", proxima: "c5_h_nao2" },
    c5_h_nao2: { quem: "hana", texto: "Quando quiser me contar, eu ainda estou aqui.", proxima: "c5_45" },
    c5_45: { tipo: "narracao", sprite: null, texto: "Lá fora, a chuva para. Pela janela do corredor, o céu começa a abrir, laranja e rosa, por cima dos prédios.", proxima: "c6_01" },

    /* =================== CENA 6 — DEPOIS DA CHUVA =================== */
    // Cenário: beira do rio, pôr do sol (usa "saida-colegio"). Música: tema romântico, violão e piano.
    c6_01: { tipo: "narracao", cenario: "beira-rio", transicao: "tempo", legenda: "Cena 6 — Depois da chuva", sprite: null, texto: "Quando eles saem do pronto-socorro, já é quase noite. O céu está pintado de laranja. As poças da rua refletem as nuvens.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", texto: "A mãe dela ainda está lá dentro, conversando com a polícia sobre um homem loiro de casaco preto e um carro sem placa. Ela mandou a SN ir para casa e prometeu chegar logo.", proxima: "c6_03" },
    c6_03: { quem: "mio", sprite: "mio", texto: "Ninguém sozinho. Regra do líder. Então... quem leva a SN?", proxima: "c6_04" },
    c6_04: { tipo: "narracao", sprite: null, texto: "A Mio já está sorrindo, como quem sabe exatamente o que está fazendo. A Hana esconde o rosto atrás do caderno. E os quatro garotos se olham, cada um sujo de barro e machucado de um jeito diferente.", proxima: "c6_05" },
    c6_05: { tipo: "pensamento", texto: "Uma semana atrás, eu não tinha ninguém pra me levar pra casa.", proxima: "c6_06" },
    c6_06: { tipo: "pensamento", texto: "Hoje, eu tenho que escolher.", proxima: "c6_esc8" },

    // ▶ ESCOLHA 8 — Quem a leva para casa? (a cena mais romântica até agora)
    c6_esc8: { sugerir: true, escolhas: [
      { texto: "A. O Takeo. Devagar, por causa das costelas.", proxima: "f_t_01", personagem: "takeo", pontos: { takeo: 3 }, flags: ["Casa_Takeo"] },
      { texto: "B. O Kaito. Ele está com a jaqueta molhada no braço, esperando.", proxima: "f_k_01", personagem: "kaito", pontos: { kaito: 3 }, flags: ["Casa_Kaito"] },
      { texto: "C. O Blake. Ele já está olhando para a rua, calculando o caminho mais seguro.", proxima: "f_b_01", personagem: "blake", pontos: { blake: 3 }, flags: ["Casa_Blake"] },
      { texto: "D. O Ryuji. Com a bicicleta rosa da Momo.", proxima: "f_r_01", personagem: "ryuji", pontos: { ryuji: 3 }, flags: ["Casa_Ryuji"] }
    ]},

    /* ---------- Casa — Takeo ---------- */
    f_t_01: { tipo: "narracao", cenario: "beira-rio", sprite: "takeo", texto: "Eles andam pela beira do rio. Devagar. O Takeo para a cada poucos passos para respirar, segurando as costelas. Ela não reclama. Ela queria que o caminho fosse mais longo.", proxima: "f_t_02" },
    f_t_02: { tipo: "narracao", texto: "Num banco de madeira, de frente para o rio, ele senta. O sol está se pondo atrás da ponte de ferro, deixando tudo dourado.", proxima: "f_t_03" },
    f_t_03: { quem: "takeo", texto: "Sabe o que eu pensei, amarrado naquela cadeira? Que eu nunca tinha visto um pôr do sol com você.", proxima: "f_t_04" },
    f_t_04: { quem: "takeo", texto: "Dez anos te conhecendo. Nenhum pôr do sol.", proxima: "f_t_05" },
    f_t_05: { tipo: "pensamento", texto: "Dez anos. Pra ele são dez anos de escola. Pra mim são vinte e dois. E eu também nunca vi.", proxima: "f_t_06" },
    f_t_06: { tipo: "narracao", texto: "Ela senta do lado dele. Os ombros se encostam. Nenhum dos dois se afasta.", proxima: "f_t_07" },
    f_t_07: { tipo: "narracao", texto: "O sol desce. O rio fica laranja, depois rosa, depois roxo. O Takeo vai inclinando a cabeça devagar até apoiar no ombro dela.", proxima: "f_t_08" },
    f_t_08: { quem: "takeo", texto: "Isso é muito melhor do que eu imaginava. E eu imaginava muito.", proxima: "f_t_esc" },
    f_t_esc: { escolhas: [
      { texto: "A. Dar um beijo no topo da cabeça dele.", proxima: "f_t_a1", pontos: { takeo: 3 }, flags: ["Beijo_cabeca_Takeo"] },
      { texto: "B. Segurar a mão dele e ficar assim até o céu escurecer.", proxima: "f_t_b1", pontos: { takeo: 2 }, flags: ["Por_do_sol_Takeo"] }
    ]},
    f_t_a1: { tipo: "narracao", texto: "Ela beija o topo da cabeça dele, no meio do cabelo bagunçado e ainda sujo de pó vermelho. O Takeo para de respirar.", proxima: "f_t_a2" },
    f_t_a2: { quem: "takeo", texto: "...Minhas costelas doeram. Mas eu acho que foi o coração.", proxima: "f_t_a3" },
    f_t_a3: { quem: "eu", texto: "Isso foi a coisa mais brega que eu já ouvi.", proxima: "f_t_a4" },
    f_t_a4: { quem: "takeo", texto: "Eu sei. Eu ensaiei.", proxima: "ep_01" },
    f_t_b1: { tipo: "narracao", texto: "Ela segura a mão dele. Ele vira a mão para os dedos se encaixarem, igual na biblioteca. Igual parece que sempre deviam ter encaixado.", proxima: "f_t_b2" },
    f_t_b2: { tipo: "narracao", texto: "Eles ficam ali até as luzes da ponte acenderem uma por uma. Ninguém diz nada. Não precisa.", proxima: "ep_01" },

    /* ---------- Casa — Kaito ---------- */
    f_k_01: { tipo: "narracao", sprite: "kaito", texto: "O Kaito anda do lado dela com as mãos no bolso, chutando poças de propósito. Ele está mais quieto do que ela jamais viu.", proxima: "f_k_02" },
    f_k_02: { tipo: "narracao", cenario: "parquinho", texto: "Na frente do parquinho do bairro, ele para. Ela para também. O mesmo parquinho. O mesmo banco. A mesma caixa de areia, agora cheia de água da chuva.", proxima: "f_k_03" },
    f_k_03: { quem: "kaito", texto: "Foi aqui. Exatamente aqui. Você estava sentada nesse banco.", proxima: "f_k_04" },
    f_k_04: { tipo: "narracao", texto: "Ele senta no banco. Molhado. Ele não liga. Ela senta do lado.", proxima: "f_k_05" },
    f_k_05: { quem: "kaito", texto: "Onze anos atrás, eu caí ali. E eu jurei que nunca mais ia perder pra ninguém.", proxima: "f_k_06" },
    f_k_06: { quem: "kaito", texto: "Hoje, quando você segurou a viga, eu percebi uma coisa. Eu não quero mais ganhar de você.", proxima: "f_k_07" },
    f_k_07: { quem: "eu", texto: "Desistiu da revanche?", proxima: "f_k_08" },
    f_k_08: { quem: "kaito", texto: "Não. Eu só quero outra coisa mais do que a revanche agora. E isso me assusta mais do que o Goro.", proxima: "f_k_09" },
    f_k_09: { tipo: "narracao", texto: "Ele vira para ela. O olho roxo, o corte na sobrancelha, o cabelo molhado grudado na testa. Ele parece um garoto. Só um garoto de dezessete anos sentado num banco de parquinho.", proxima: "f_k_esc" },
    f_k_esc: { escolhas: [
      { texto: "A. “E o que você quer mais?”", proxima: "f_k_a1", pontos: { kaito: 3 }, flags: ["Kaito_quase_beijo"] },
      { texto: "B. Pegar a mão dele e desenhar um gato na palma, com o dedo: “Pra você lembrar.”", proxima: "f_k_b1", pontos: { kaito: 2 }, flags: ["Gato_mao_Kaito"] }
    ]},
    f_k_a1: { tipo: "narracao", texto: "O Kaito não responde. Ele se aproxima. Devagar. Dando tempo para ela se afastar, se quiser.", proxima: "f_k_a2" },
    f_k_a2: { tipo: "narracao", texto: "Ela não se afasta.", proxima: "f_k_a3" },
    f_k_a3: { tipo: "narracao", texto: "Os narizes quase se encostam. Ela consegue sentir a respiração dele, quente, no meio da noite fria.", proxima: "f_k_a4" },
    f_k_a4: { tipo: "narracao", efeito: "grito", texto: "E o celular dele toca. Alto. Com um toque de música de luta de videogame.", proxima: "f_k_a5" },
    f_k_a5: { quem: "tio_kaito", rotulo: "Tio do Kaito (no viva-voz, que ele apertou sem querer)", sprite: null, texto: "KAITO! CADÊ VOCÊ? A LOJA ESTÁ CHEIA E O GATO COMEU O CALDO!", proxima: "f_k_a6" },
    f_k_a6: { tipo: "narracao", sprite: "kaito", texto: "O Kaito fecha os olhos. Encosta a testa no ombro dela. E solta o gemido mais sofrido da história da humanidade.", proxima: "f_k_a7" },
    f_k_a7: { quem: "kaito", texto: "Onze anos. Eu espero onze anos e o gato come o caldo.", proxima: "ep_01" },
    f_k_b1: { tipo: "narracao", texto: "Ela pega a mão dele, vira a palma para cima e desenha com a ponta do dedo. Orelhas. Bigodes. Um rabo.", proxima: "f_k_b2" },
    f_k_b2: { tipo: "narracao", texto: "O Kaito fica olhando para a própria mão como se ela tivesse tatuado alguma coisa lá. E, de um jeito, tatuou.", proxima: "f_k_b3" },
    f_k_b3: { quem: "kaito", texto: "Eu vou tatuar isso de verdade um dia. Do lado da outra.", proxima: "f_k_b4" },
    f_k_b4: { quem: "eu", texto: "Não vai, não.", proxima: "f_k_b5" },
    f_k_b5: { quem: "kaito", texto: "Vou sim. E vou falar pra todo mundo que foi a única pessoa que me derrubou que desenhou.", proxima: "ep_01" },

    /* ---------- Casa — Blake ---------- */
    f_b_01: { tipo: "narracao", cenario: "rua-noite", sprite: "blake", texto: "O Blake escolhe o caminho mais iluminado, mais movimentado e mais longo. Ele anda do lado de fora da calçada. Ele olha para cada carro que passa.", proxima: "f_b_02" },
    f_b_02: { quem: "eu", texto: "Blake. O Jin foi embora. Os Oda fugiram. Está tudo bem.", proxima: "f_b_03" },
    f_b_03: { quem: "blake", texto: "Eu sei. Eu só não consigo parar.", proxima: "f_b_04" },
    f_b_04: { tipo: "narracao", texto: "Na frente da casa dela, ele para. Mas não vai embora. Ele fica parado no portão, com as mãos nos bolsos, olhando para o chão.", proxima: "f_b_05" },
    f_b_05: { quem: "blake", texto: "Na olaria, quando o Goro levantou a viga, eu estava do outro lado do galpão. Eu corri. E eu sabia que não ia chegar a tempo.", proxima: "f_b_06" },
    f_b_06: { quem: "blake", texto: "Eu nunca senti aquilo. Saber que não ia chegar. Eu sempre chego.", proxima: "f_b_07" },
    f_b_07: { tipo: "narracao", texto: "A voz dele falha no fim. O Blake, que nunca deixa a voz falhar.", proxima: "f_b_esc" },
    f_b_esc: { escolhas: [
      { texto: "A. Abraçar ele. Mesmo tendo que ficar na ponta dos pés.", proxima: "f_b_a1", pontos: { blake: 3 }, flags: ["Abraco_portao_Blake"] },
      { texto: "B. “Você não precisa chegar sempre, Blake. Às vezes é minha vez de chegar.”", proxima: "f_b_b1", pontos: { blake: 2 }, flags: ["SN_chega_Blake"] }
    ]},
    f_b_a1: { tipo: "narracao", texto: "Ela abraça ele. Ela chega mais ou menos no peito dele. O Blake fica completamente rígido por três segundos inteiros.", proxima: "f_b_a2" },
    f_b_a2: { tipo: "narracao", texto: "Depois, devagar, os braços enormes dele se fecham em volta dela. Com cuidado. Como quem segura uma coisa que pode quebrar, mesmo sabendo que ela é a pessoa mais difícil de quebrar que ele conhece.", proxima: "f_b_a3" },
    f_b_a3: { quem: "blake", texto: "...Você cheira a barro.", proxima: "f_b_a4" },
    f_b_a4: { quem: "eu", texto: "Você também.", proxima: "f_b_a5" },
    f_b_a5: { quem: "blake", texto: "É. Eu sei.", proxima: "f_b_a6" },
    f_b_a6: { tipo: "narracao", texto: "Ele não solta. Ela também não. Do outro lado da rua, um vizinho para de regar as plantas para olhar.", proxima: "ep_01" },
    f_b_b1: { tipo: "narracao", texto: "O Blake levanta os olhos. Olha para ela por um tempo longo.", proxima: "f_b_b2" },
    f_b_b2: { quem: "blake", texto: "Ninguém nunca chegou por mim.", proxima: "f_b_b3" },
    f_b_b3: { quem: "eu", texto: "Então eu vou ser a primeira.", proxima: "f_b_b4" },
    f_b_b4: { tipo: "narracao", texto: "Ele sorri. Um sorriso inteiro, de verdade, com os dentes aparecendo. A SN nem sabia que o Blake tinha covinha.", proxima: "ep_01" },

    /* ---------- Casa — Ryuji ---------- */
    f_r_01: { tipo: "narracao", cenario: "beira-rio", sprite: "ryuji", texto: "A bicicleta rosa da Momo está acorrentada no poste do hospital. O Ryuji solta a corrente, sobe e bate na garupa minúscula, cheia de adesivo de coração.", proxima: "f_r_02" },
    f_r_02: { quem: "ryuji", texto: "Sobe. E segura em mim. Essa bicicleta não foi feita pra dois. Nem pra um de um metro e oitenta.", proxima: "f_r_03" },
    f_r_03: { tipo: "narracao", texto: "Ela sobe. Segura na cintura dele. Ele pedala pela beira do rio, rápido demais, desviando das poças e falhando em quase todas.", proxima: "f_r_04" },
    f_r_04: { tipo: "narracao", texto: "Na descida perto da ponte, ele solta o pedal e abre os braços, gritando como um idiota. Ela grita junto. A bicicleta rosa voa pela descida com os dois gritando e a cestinha de flores balançando.", proxima: "f_r_05" },
    f_r_05: { tipo: "pensamento", texto: "Eu nunca fiz isso. Nem aos dezesseis, nem aos vinte e oito. Eu nunca gritei numa bicicleta.", proxima: "f_r_06" },
    f_r_06: { tipo: "narracao", texto: "Na frente da casa dela, ele freia. A bicicleta derrapa. Os dois quase caem e riem tanto que ficam sem ar.", proxima: "f_r_07" },
    f_r_07: { tipo: "narracao", texto: "Ela desce. Ele fica na bicicleta, segurando o guidão, olhando para ela debaixo do poste.", proxima: "f_r_08" },
    f_r_08: { caminhos: [
      { flag: "Abraco_ponte_Ryuji", proxima: "f_r_08_abraco" },
      { flag: "Ponte_Ryuji", proxima: "f_r_08_elastico" }
    ], proxima: "f_r_08_nada" },
    // A fala do Ryuji lembra só o que aconteceu de verdade (ponte: Escolha 1; hospital: Escolha 4)
    f_r_08_abraco: { caminhos: [ { flag: "Ryuji_mao_hospital", proxima: "f_r_08_abraco_mao" } ], proxima: "f_r_08_abraco_farpas" },
    f_r_08_elastico: { caminhos: [ { flag: "Ryuji_mao_hospital", proxima: "f_r_08_elastico_mao" } ], proxima: "f_r_08_elastico_farpas" },
    f_r_08_nada: { caminhos: [ { flag: "Ryuji_mao_hospital", proxima: "f_r_08_nada_mao" } ], proxima: "f_r_08_nada_farpas" },
    f_r_08_abraco_mao: { quem: "ryuji", texto: "Princesa. Na ponte você me abraçou. No hospital você segurou minha mão. Hoje você gritou na garupa da bicicleta da minha irmã.", proxima: "f_r_09" },
    f_r_08_abraco_farpas: { quem: "ryuji", texto: "Princesa. Na ponte você me abraçou. No hospital você deixou eu tirar as farpas da sua mão. Hoje você gritou na garupa da bicicleta da minha irmã.", proxima: "f_r_09" },
    f_r_08_elastico_mao: { quem: "ryuji", texto: "Princesa. Na ponte você trocou seu elástico pelo da Momo. No hospital você segurou minha mão. Hoje você gritou na garupa da bicicleta da minha irmã.", proxima: "f_r_09" },
    f_r_08_elastico_farpas: { quem: "ryuji", texto: "Princesa. Na ponte você trocou seu elástico pelo da Momo. No hospital você deixou eu tirar as farpas da sua mão. Hoje você gritou na garupa da bicicleta da minha irmã.", proxima: "f_r_09" },
    f_r_08_nada_mao: { quem: "ryuji", texto: "Princesa. No hospital você segurou minha mão. Hoje você gritou na garupa da bicicleta da minha irmã.", proxima: "f_r_09" },
    f_r_08_nada_farpas: { quem: "ryuji", texto: "Princesa. No hospital você deixou eu tirar as farpas da sua mão. Hoje você gritou na garupa da bicicleta da minha irmã.", proxima: "f_r_09" },
    f_r_09: { quem: "ryuji", texto: "Eu sou burro pra muita coisa. Mas não sou burro pra isso. Eu só preciso saber se eu estou imaginando.", proxima: "f_r_esc" },
    f_r_esc: { escolhas: [
      { texto: "A. “Você não está imaginando.”", proxima: "f_r_a1", pontos: { ryuji: 3 }, flags: ["Ryuji_nao_imagina"] },
      { texto: "B. Tirar o elástico do próprio cabelo e prender no pulso dele: “Pra dar sorte. Da próxima vez é você que vai precisar.”", proxima: "f_r_b1", pontos: { ryuji: 2 }, flags: ["Elastico_Ryuji"] }
    ]},
    f_r_a1: { tipo: "narracao", texto: "O Ryuji fica parado. Muito parado. A bicicleta tomba devagar para o lado e ele nem percebe, até cair junto, de lado, na calçada.", proxima: "f_r_a2" },
    f_r_a2: { quem: "ryuji", texto: "Tô bem! Tô ótimo! Foi a bicicleta!", proxima: "f_r_a3" },
    f_r_a3: { tipo: "narracao", texto: "Ele fica deitado na calçada, olhando para o céu, rindo sozinho, com a bicicleta rosa em cima das pernas.", proxima: "f_r_a4" },
    f_r_a4: { quem: "ryuji", texto: "Não estou imaginando. Tá. Tá bom. Eu vou precisar de uns três dias pra processar isso.", proxima: "ep_01" },
    f_r_b1: { tipo: "narracao", texto: "Ela prende o elástico no pulso dele. O Ryuji fica olhando para aquele elástico simples, preto, como se fosse uma medalha.", proxima: "f_r_b2" },
    f_r_b2: { quem: "ryuji", texto: "Isso não respondeu minha pergunta.", proxima: "f_r_b3" },
    f_r_b3: { quem: "eu", texto: "Eu sei.", proxima: "f_r_b4" },
    f_r_b4: { quem: "ryuji", texto: "...Mas eu gostei da resposta mesmo assim.", proxima: "ep_01" },

    /* =================== EPÍLOGO — O QUE EU SEI (5) =================== */
    // Cenário: quarto da SN, noite. Música: piano do prólogo, inteiro, pela primeira vez sem interrupção.
    ep_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Epílogo — O que eu sei", sprite: null, texto: "No quarto, a SN toma um banho tão longo que a água esquenta e esfria duas vezes. O barro vermelho escorre pelo ralo. Os machucados aparecem. As farpas que o Ryuji tirou. A marca da viga na palma.", proxima: "ep_02" },
    ep_02: { tipo: "narracao", texto: "Depois, de pijama, ela abre o caderno azul na página das regras.", proxima: "ep_03" },
    ep_03: { tipo: "narracao", texto: "Na regra número 4, “Ninguém morre. Ninguém.”, ela faz um pequeno tique ao lado. Só por hoje.", proxima: "ep_04" },
    ep_04: { tipo: "narracao", texto: "Na regra número 5, “Viver”, ela fica um tempo parada. Depois escreve, embaixo, com a letra redonda: “Hoje eu vivi.”", proxima: "ep_05" },
    ep_05: { tipo: "narracao", texto: "Ela vira para a lista do que sabe. E escreve devagar:", proxima: "ep_06" },
    ep_06: { tipo: "narracao", texto: "18. Da outra vez, o Takeo morreu me protegendo. Eu não sei como. Eu não sei onde. Mas era eu.", proxima: "ep_07" },
    ep_07: { tipo: "narracao", texto: "19. Dessa vez, eu segurei.", proxima: "ep_08" },
    ep_08: { tipo: "narracao", texto: "20. O Jin tinha uma irmã. Ela também voltou. Ela também tinha força. Ela também tentou salvar alguém. E ela morreu.", proxima: "ep_09" },
    ep_09: { tipo: "narracao", texto: "Ela para na linha vinte. Fica olhando para ela por muito tempo.", proxima: "ep_10" },
    ep_10: { tipo: "pensamento", texto: "A irmã dele também tinha força. Como a mamãe. Como a vovó. Como eu.", proxima: "ep_11" },
    ep_11: { tipo: "pensamento", texto: "Ela era da minha família?", proxima: "ep_12" },
    ep_12: { tipo: "narracao", texto: "Ela tenta lembrar da data em que o Takeo morreu no futuro. A estação do ano. O dia da semana. O que ela estava fazendo quando recebeu a notícia.", proxima: "ep_13" },
    ep_13: { tipo: "narracao", efeito: "eco", texto: "Nada. Branco total. Como se aquela parte da memória tivesse sido apagada com borracha.", proxima: "ep_14" },
    ep_14: { tipo: "pensamento", texto: "Acho que é porque aquilo não vai mais acontecer.", proxima: "ep_15" },
    ep_15: { tipo: "pensamento", texto: "Ou porque vai acontecer de outro jeito. E eu não posso mais saber.", proxima: "ep_16" },
    ep_16: { tipo: "narracao", texto: "O celular vibra. Uma mensagem. Do número do cartão branco.", proxima: "ep_17" },
    ep_17: { quem: "mensagem", rotulo: "Jin", efeito: "eco", texto: "Você ganhou essa. Eu não vou mais encostar no garoto. Nem na sua mãe. Eu dou minha palavra.", proxima: "ep_18" },
    ep_18: { quem: "mensagem", rotulo: "Jin", texto: "Mas eu preciso te contar uma coisa que ela me contou, antes de morrer. Ela disse que quem volta não muda o final. Só muda quem paga por ele.", proxima: "ep_19" },
    ep_19: { quem: "mensagem", rotulo: "Jin", texto: "O nome dela era Sora. Pergunta pra sua mãe se ela conhece esse nome.", proxima: "ep_20" },
    ep_20: { tipo: "narracao", texto: "A SN fica olhando para a tela até ela apagar.", proxima: "ep_21" },
    ep_21: { tipo: "narracao", texto: "Lá embaixo, a porta da frente abre. A mãe chegou. A SN ouve os passos dela na escada, cansados, devagar.", proxima: "ep_22" },
    ep_22: { tipo: "narracao", sprite: "mae", texto: "A mãe abre a porta do quarto, vê a filha acordada e sorri, aliviada. Senta na beira da cama, de uniforme ainda, e passa a mão no cabelo dela.", proxima: "ep_23" },
    ep_23: { quem: "mae", texto: "Acabou, filha. A polícia vai atrás dele. Você está segura. Todo mundo está.", proxima: "ep_24" },
    ep_24: { tipo: "narracao", texto: "A SN olha para a mãe. Para a mão que acabou de passar no cabelo dela. A mão que levanta geladeiras.", proxima: "ep_25" },
    ep_25: { quem: "eu", texto: "Mãe. Quem é Sora?", proxima: "ep_26" },
    ep_26: { tipo: "narracao", texto: "A mão da mãe para no meio do cabelo dela.", proxima: "ep_27" },
    ep_27: { tipo: "narracao", texto: "Ela não responde. O rosto dela fica branco. Muito branco. A SN nunca viu a mãe com medo. Nem uma vez. Em vinte e oito anos.", proxima: "ep_28" },
    ep_28: { quem: "mae", efeito: "eco", texto: "...Onde você ouviu esse nome?", proxima: "ep_fim" },

    // Fim do Capítulo 5 (crie a entrada "capitulo5" em dados/capitulos.js)
    ep_fim: { fim: "capitulo5" }
  }
});

/*
 * GANCHO PARA O CAPÍTULO 6 (anotações do roteiro)
 *  • Quem é Sora? A irmã do Jin. Ela também voltou no tempo e tinha a força da família.
 *    Por que a mãe da SN ficou com medo do nome?
 *  • “Quem volta não muda o final. Só muda quem paga por ele.” Então quem vai pagar agora?
 *  • O Jin prometeu se afastar. Mas a polícia está atrás dele. E os irmãos Oda fugiram pelo rio.
 *  • A Akane se entregou para a Reina. O que acontece com o Lírio Negro?
 *  • A memória da morte do Takeo apagou completamente.
 *  • Romance: quem levou a SN pra casa (Casa_Takeo/Kaito/Blake/Ryuji) e os momentos da ponte
 *    e do hospital definem quem está mais perto do coração dela no Capítulo 6.
 *  • Mio e Blake: a Mio confessou? (Mio_confessou_Blake) O que o Blake respondeu?
 *
 * ESCOLHAS DO CAPÍTULO (8 + 1 dentro da ponte + 1 dentro da volta para casa)
 *  1 Ponte (Kaito, Blake ou Ryuji) + escolha na ponte · 2 Jin · 3 Takeo na olaria
 *  4 Ryuji (farpas) · 5 Kaito (gelo) · 6 Blake (Mio) · 7 Takeo (bilhete)
 *  8 Quem leva para casa + escolha no caminho
 *
 * FLAGS NOVAS
 *  Ponte_Kaito/Blake/Ryuji · Kaito_espera · Beijo_bochecha_Kaito · Blake_promessa_relogio
 *  Blake_quase_confessou · Sorvete_Momo · Abraco_ponte_Ryuji · Jin_sabe_viagem
 *  Perguntou_quem_era · Entregou_pendrive · Takeo_promessa_viver · Abraco_olaria
 *  SN_protege_Takeo · Ryuji_mao_hospital · SN_cuidou_Kaito · Mio_confessou_Blake
 *  Blake_tempo · SN_apoiou_Mio · SN_admitiu_Blake · Guardou_bilhete_Takeo · Testa_Takeo
 *  Takeo_espera_resposta · Casa_Takeo/Kaito/Blake/Ryuji · Beijo_cabeca_Takeo
 *  Por_do_sol_Takeo · Kaito_quase_beijo · Gato_mao_Kaito · Abraco_portao_Blake
 *  SN_chega_Blake · Ryuji_nao_imagina · Elastico_Ryuji
 */