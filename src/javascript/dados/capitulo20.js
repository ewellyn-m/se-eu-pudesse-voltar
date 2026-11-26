/*
 * =====================================================================
 *  CAPÍTULO 20 — Achados e perdidos
 *  Domingo até sexta, depois do Capítulo 19.
 * =====================================================================
 *
 *  O QUE ACONTECE
 *    • Domingo cedo: a praça do balanço. O Ryuji corre. Um carro preto passa devagar. Não para.
 *    • Segunda: a Sayuri se afasta do Blake de repente (por medo do homem de terno).
 *      O Blake não entende. A Mio e o Blake, finalmente, uma conversa curta.
 *    • Quinta: o banco da coordenação com o Victor.
 *    • O KAITO SABE. No domingo do Cap. 17, a SN disse "você estava protegendo o Takeo" — e
 *      ninguém tinha contado isso para ela. Ele percebeu. Ele não conta para ninguém.
 *      Ele dá um presente para ela, "por ter protegido ele". Ela se faz de desentendida. Eles riem.
 *    • Gancho: o Takeo marca "aquela coisa" para sábado, no balanço.
 *
 *  REGRAS QUE ESTE CAPÍTULO SEGUE
 *    • SÓ o Kaito sabe que a SN é a menina do boné. Ele guarda segredo. Os outros não sabem.
 *    • Nada de gangue dentro da escola. O Ren quase não aparece.
 *    • Romance devagar. Ninguém fala o apelido antigo.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Kaito, Ryuji, Victor, Blake, Mio, Hana, Takeo, Sayuri, Ren (só aparece).
 *
 *  CENÁRIOS
 *    Praça do balanço → "saida-colegio" · Escola: sala-de-aula, corredor, clube-leitura
 *    Banco da coordenação → "corredor" · Lojinha do tio → "beco-mercado"
 *    Rua do prédio da SN → "saida-colegio" · Quarto da SN → "quarto-sn"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Correr_com_Ryuji, Ryuji_conta_Kaito, Mio_fala_Blake, Bandaid_Mio, Victor_toda_quinta,
 *    Victor_volta, Nao_era_isso_Takeo.
 *
 *  Crie a entrada "capitulo20" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo20", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — SEIS DA MANHÃ =================== */
    // Cenário: praça do balanço, domingo cedo (usa "saida-colegio"). Música: violão leve, um pouco tenso.
    c1_01: { roupa: "fora", tipo: "narracao", cenario: "parquinho", transicao: "tempo", legenda: "Domingo, 6h02 — Cena 1", sprite: null, texto: "Domingo. Seis e dois da manhã. A praça do balanço está vazia, molhada de orvalho. O balanço de ferro range sozinho com o vento.", proxima: "c1_cam1" },
    c1_cam1: { caminhos: [
      { flag: "Correr_com_Ryuji", proxima: "c1_r01" },
      { flag: "Ryuji_conta_Kaito", proxima: "c1_k01" }
    ], proxima: "c1_n01" },

    // ---- Ela foi correr com o Ryuji ----
    c1_r01: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji chega correndo. De bermuda, tênis velho e uma faixa na testa que ninguém usa desde os anos oitenta. Ele para na frente dela, pulando no lugar.", proxima: "c1_r02" },
    c1_r02: { quem: "ryuji", texto: "Você veio. Eu achei que você ia desistir. Eu teria desistido.", proxima: "c1_r03" },
    c1_r03: { quem: "ryuji", texto: "Regras: três voltas na praça, depois a ladeira da igreja, depois volta. Se você passar na minha frente, eu finjo que deixei.", proxima: "c1_r04" },
    c1_r04: { tipo: "narracao", texto: "Eles correm. Ela segura o passo. Muito. Fica sempre um pouco atrás dele, de propósito. Ele percebe na segunda volta.", proxima: "c1_r05" },
    c1_r05: { quem: "ryuji", texto: "Você está correndo devagar de propósito! Eu sei! Você nem está suando!", proxima: "c1_r06" },
    c1_r06: { quem: "eu", texto: "Eu estou suando por dentro.", proxima: "c1_r07" },
    c1_r07: { quem: "ryuji", texto: "Isso não existe! Ninguém sua por dentro!", proxima: "c1_02" },

    // ---- O Ryuji contou para o Kaito ----
    c1_k01: { tipo: "narracao", sprite: "ryuji", texto: "Ela foi até a praça porque não conseguiu dormir. E lá está o Ryuji, de bermuda e faixa na testa, correndo. E, sentado no balanço, de moletom e boné, de braços cruzados, o Kaito. Vigiando.", proxima: "c1_k02" },
    c1_k02: { quem: "ryuji", texto: "Ele veio às cinco e meia. Na minha porta. Ele disse “eu corro com você”. Ele não está correndo. Ele está sentado no balanço há meia hora.", proxima: "c1_k03" },
    c1_k03: { quem: "kaito", sprite: "kaito", texto: "Eu estou vigiando. É diferente.", proxima: "c1_k04" },
    c1_k04: { tipo: "narracao", texto: "Ele vê a SN. Fica olhando para ela um segundo mais do que precisa. Ela não sabe por quê.", proxima: "c1_02" },

    // ---- Nenhum dos dois ----
    c1_n01: { tipo: "narracao", texto: "Ela veio até a praça porque não conseguiu dormir. Porque é o caminho da corrida do Ryuji. Ela senta no balanço. Espera.", proxima: "c1_n02" },
    c1_n02: { tipo: "narracao", sprite: "ryuji", texto: "Às seis e dez, ele aparece. De bermuda e faixa na testa. Vê ela no balanço. Para de correr.", proxima: "c1_n03" },
    c1_n03: { quem: "ryuji", texto: "Você veio me vigiar? Às seis da manhã? Num domingo? Você é muito estranha. Obrigado.", proxima: "c1_02" },

    // (todos os caminhos continuam aqui)
    c1_02: { tipo: "narracao", sprite: null, texto: "Na terceira volta, um carro preto vira a esquina da praça. Devagar. Muito devagar. Os vidros escuros.", proxima: "c1_03" },
    c1_03: { tipo: "narracao", texto: "A SN para de correr. Fica parada no meio da calçada, do lado do Ryuji. Olhando para o carro.", proxima: "c1_04" },
    c1_04: { tipo: "narracao", texto: "O carro não para. Passa do lado dos dois. Bem devagar. E, quando passa, o vidro de trás desce dois dedos. Só dois. E sobe de novo.", proxima: "c1_05" },
    c1_05: { tipo: "narracao", texto: "Depois acelera. E some na ladeira da igreja.", proxima: "c1_06" },
    c1_06: { quem: "ryuji", sprite: "ryuji", texto: "...Era esse. O carro de ontem. Era esse.", proxima: "c1_07" },
    c1_07: { tipo: "pensamento", texto: "Ele não parou. Ele só passou. Pra gente saber que ele sabe onde a gente está.", proxima: "c1_08" },
    c1_08: { tipo: "pensamento", texto: "É o jeito do Ren. Ele nunca faz nada. Ele só mostra que pode.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — Depois do carro preto
    c1_esc1: { escolhas: [
      { texto: "A. “Vem. Eu te levo até em casa. Pelo caminho mais longo.”", proxima: "c1_1a_1", pontos: { ryuji: 2 }, flags: ["Levou_Ryuji_casa"] },
      { texto: "B. “Faz uma piada. Agora. Por favor.”", proxima: "c1_1b_1", pontos: { ryuji: 3 }, flags: ["Piada_carro_Ryuji"] },
      { texto: "C. Anotar a placa no celular. Sem falar nada.", proxima: "c1_1c_1", pontos: { desvio: 1 }, flags: ["Anotou_placa"] }
    ]},
    c1_1a_1: { quem: "ryuji", sprite: "ryuji", texto: "Você vai me levar? Eu sou o homem da situação. Eu que devia te levar.", proxima: "c1_1a_2" },
    c1_1a_2: { quem: "eu", texto: "Você pode me levar da sua casa até a minha depois.", proxima: "c1_1a_3" },
    c1_1a_3: { quem: "ryuji", texto: "...Isso não faz sentido nenhum. Vamos.", proxima: "c1_09" },
    c1_1b_1: { tipo: "narracao", texto: "O Ryuji olha para ela. Pisca. E então entende.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "ryuji", texto: "Por que o carro preto não para nunca? Porque ele tem medo de pagar estacionamento.", proxima: "c1_1b_3" },
    c1_1b_3: { tipo: "narracao", texto: "É uma piada horrível. Ela ri mesmo assim. Ele ri também. E os ombros dele, que estavam lá em cima, perto das orelhas, descem.", proxima: "c1_1b_4" },
    c1_1b_4: { quem: "ryuji", texto: "Tá vendo? Grito com função. Piada com função.", proxima: "c1_09" },
    c1_1c_1: { tipo: "narracao", texto: "Ela anota. Três letras e quatro números. O Ryuji vê. Não pergunta. Só fica do lado dela, quieto, enquanto ela digita.", proxima: "c1_1c_2" },
    c1_1c_2: { tipo: "pensamento", texto: "Eu não sei o que vou fazer com isso. Mas é melhor saber do que não saber.", proxima: "c1_09" },

    // (todas as opções continuam aqui)
    c1_09: { tipo: "narracao", sprite: null, texto: "O resto da manhã é normal. Pão na padaria. O Ryuji pede sonho de creme e come três. Ninguém fala mais do carro. Mas os dois olham para a rua toda vez que um motor passa.", proxima: "c2_01" },

    /* =================== CENA 2 — A CADEIRA VOLTA =================== */
    // Cenário: clube de leitura / corredor, segunda. Música: violino calmo.
    c2_01: { roupa: null, tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Segunda — Cena 2", sprite: null, texto: "Segunda-feira. Na hora do almoço, a Sayuri não está no banco do pátio com o Blake. Ela está sentada sozinha, do outro lado, com a manga puxada até os dedos. Sem pote de morango. Sem nada.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", sprite: "blake", texto: "O Blake está no banco de sempre. Olhando para ela. Ele levanta. Vai até lá. Fala alguma coisa. A Sayuri balança a cabeça sem olhar para ele. Levanta. E vai embora para dentro.", proxima: "c2_03" },
    c2_03: { tipo: "narracao", texto: "O Blake fica parado no meio do pátio, com o sanduíche de três andares na mão. Sem entender nada.", proxima: "c2_04" },
    c2_04: { tipo: "pensamento", texto: "O homem de terno disse pra ela não andar com aquele grupo. E ela obedeceu. Ela sempre obedece. Ela não tem como não obedecer.", proxima: "c2_05" },
    c2_05: { tipo: "pensamento", texto: "Eu não posso contar pro Blake. Não é meu pra contar. Mas dá pra ver na cara dele: ele acha que fez alguma coisa errada.", proxima: "c2_cam1" },
    c2_cam1: { caminhos: [
      { flag: "Mio_fala_Blake", proxima: "c2_mio_fala" },
      { flag: "Bandaid_Mio", proxima: "c2_mio_bandaid" }
    ], proxima: "c2_mio_longe" },
    c2_mio_fala: { tipo: "narracao", sprite: "mio", texto: "E então a Mio levanta do banco do lado da SN. Respira fundo. E vai. Atravessa o pátio inteiro. Para na frente do Blake.", proxima: "c2_mio_fala2" },
    c2_mio_fala2: { tipo: "narracao", texto: "Ela tira do bolso o band-aid de gatinho. O mesmo da quarta. Amassado. Cola na mão enfaixada dele, por cima da faixa, onde não serve para nada.", proxima: "c2_mio_fala3" },
    c2_mio_fala3: { tipo: "narracao", texto: "Ela fala alguma coisa. Curta. Daqui não dá para ouvir. O Blake olha para o band-aid. Para ela. E fala alguma coisa de volta. Mais curta ainda.", proxima: "c2_mio_fala4" },
    c2_mio_fala4: { tipo: "narracao", texto: "A Mio volta para o banco. Senta do lado da SN. Vermelha. Os olhos molhados. Mas sorrindo.", proxima: "c2_mio_fala5" },
    c2_mio_fala5: { quem: "mio", texto: "Eu falei: “Eu trouxe pra você na quarta e fiquei triste.” Ele falou: “Eu sei. Desculpa.” Só isso. Mas ele falou desculpa. O Blake nunca fala desculpa.", proxima: "c2_06" },
    c2_mio_bandaid: { tipo: "narracao", sprite: "mio", texto: "Do lado da SN, a Mio olha para o Blake parado no pátio. Depois olha para o dedo da SN. Ainda com o band-aid de gatinho da quarta. A SN não tirou.", proxima: "c2_mio_bandaid2" },
    c2_mio_bandaid2: { quem: "mio", texto: "Ele está com cara de cachorro que caiu da mudança. Eu odeio que eu fico com dó.", proxima: "c2_06" },
    c2_mio_longe: { tipo: "narracao", sprite: "mio", texto: "Do lado da SN, a Mio está olhando também. Ela não levanta. Ela não vai até lá. Mas também não vira o rosto.", proxima: "c2_mio_longe2" },
    c2_mio_longe2: { quem: "mio", texto: "...Ela largou ele. Ótimo. Não é da minha conta. Não é. Para de me olhar assim.", proxima: "c2_06" },

    // (todos os caminhos continuam aqui)
    c2_06: { tipo: "narracao", cenario: "patio-fundos", sprite: "kaito", texto: "Do outro lado do pátio, o Kaito levanta do banco dele. Atravessa até onde o Blake está parado. Não fala nada. Senta num banco vazio. Bate a mão no lugar do lado.", proxima: "c2_07" },
    c2_07: { tipo: "narracao", sprite: "blake", texto: "O Blake senta.", proxima: "c2_08" },
    c2_08: { tipo: "narracao", texto: "O Kaito tira o onigiri da marmita. Parte no meio. Dá metade para o Blake. Os dois comem olhando para a frente. Sem falar.", proxima: "c2_09" },
    c2_09: { tipo: "narracao", texto: "Do banco da SN, dá para ouvir um pedaço. O pátio está quieto nessa ponta.", proxima: "c2_10" },
    c2_10: { quem: "blake", texto: "Ela disse que não pode mais falar comigo. Que é melhor assim.", proxima: "c2_10b" },
    c2_10b: { quem: "kaito", sprite: "kaito", texto: "Hm.", proxima: "c2_10c" },
    c2_10c: { quem: "blake", sprite: "blake", texto: "Eu nem sei se eu gostava. Ela pediu. Eu fui.", proxima: "c2_10d" },
    c2_10d: { quem: "kaito", sprite: "kaito", texto: "Eu sei.", proxima: "c2_10e" },
    c2_10e: { quem: "blake", sprite: "blake", texto: "Ela estava com medo. Eu conheço a cara de medo dela. É a mesma do primeiro ano, quando o pai dela gritava no portão.", proxima: "c2_10f" },
    c2_10f: { tipo: "narracao", sprite: "kaito", texto: "O Kaito para de mastigar. Olha para o Blake. Depois para a porta por onde a Sayuri entrou.", proxima: "c2_10g" },
    c2_10g: { quem: "kaito", texto: "Então a gente fica de olho. De longe.", proxima: "c2_10h" },
    c2_10h: { tipo: "narracao", sprite: null, texto: "O Blake concorda com a cabeça. Só isso. É assim que eles resolvem as coisas há dez anos.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — Os dois no banco
    c2_esc2: { escolhas: [
      { texto: "A. Levar a Mio até o banco deles e sentar do lado, sem falar nada.", proxima: "c2_2a_1", pontos: { blake: 1, mio: 2 }, flags: ["Banco_quatro"] },
      { texto: "B. Deixar os dois sozinhos. Isso é deles.", proxima: "c2_2b_1", pontos: { kaito: 1, blake: 1 }, flags: ["Deixou_dois_banco"] },
      { texto: "C. Jogar a caixinha de suco que sobrou para o Blake, de longe.", proxima: "c2_2c_1", pontos: { blake: 2 }, flags: ["Suco_Blake"] }
    ]},
    c2_2a_1: { tipo: "narracao", sprite: "mio", texto: "A Mio hesita. Depois vai. As duas sentam do lado dos meninos. Ninguém fala nada. O Kaito chega para o lado. O Blake, sem olhar, chega também. A Mio fica do lado dele.", proxima: "c2_2a_2" },
    c2_2a_2: { tipo: "narracao", texto: "Ela não olha para ele. Ele não olha para ela. Mas, quando o sinal toca, ele espera ela levantar primeiro.", proxima: "c2_11" },
    c2_2b_1: { tipo: "pensamento", texto: "Tem coisa que só um amigo de dez anos resolve. Com metade de um onigiri e uma palavra.", proxima: "c2_11" },
    c2_2c_1: { tipo: "narracao", sprite: "blake", texto: "A caixinha voa por cima do pátio. O Blake pega com a mão boa, sem levantar do banco. Olha de onde veio. Vê ela.", proxima: "c2_2c_2" },
    c2_2c_2: { tipo: "narracao", texto: "Ele levanta a caixinha. Um obrigado sem palavra. O Kaito, do lado, olha para ele, olha para ela, e olha para o céu, como quem pede paciência.", proxima: "c2_11" },
    c2_11: { tipo: "narracao", sprite: null, texto: "O sinal toca. Os dois levantam juntos. O Kaito dá um tapa nas costas do Blake. Os dois tentam passar pela porta ao mesmo tempo. Não passam. Nunca passam.", proxima: "c3_01" },

    /* =================== CENA 3 — QUINTA NO BANCO =================== */
    // Cenário: banco da coordenação, quinta à tarde (usa "corredor"). Música: violão malandro.
    c3_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Quinta — Cena 3", sprite: null, texto: "Quinta-feira. Depois da aula, a SN passa pela coordenação. No banco de madeira, sentado direito pela primeira vez na vida, com a apostila de geografia aberta e uma caneta atrás da orelha, o Victor.", proxima: "c3_cam1" },
    c3_cam1: { caminhos: [
      { flag: "Victor_toda_quinta", proxima: "c3_combinado" }
    ], proxima: "c3_sem_combinado" },
    c3_combinado: { quem: "victor", texto: "Quinta. Banco. Combinado é combinado. Eu nem estou de castigo hoje. Eu vim por vontade própria. O coordenador quase chamou a enfermeira.", proxima: "c3_02" },
    c3_sem_combinado: { quem: "victor", texto: "Gatinha! Eu vim aqui sem estar de castigo. Por vontade própria. Pra ver se dá sorte. Semana que vem tem prova de geografia. Me ajuda? Eu pago em sorvete.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "Ela senta. Geografia vira briga de território entre gangues. Rio vira fronteira. Montanha vira muro. O Victor anota tudo com a letra enorme, cheia de setas.", proxima: "c3_03" },
    c3_03: { quem: "victor", texto: "Sabe o que a minha mãe fez? Ela comprou um ímã novo pra prender a prova de história. Um ímã de abacaxi. Ela disse que o de banana era pra conta de luz e que a prova merecia um ímã só dela.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", texto: "Ele fala isso rindo. Mas com os olhos brilhando de um jeito que não é de piada.", proxima: "c3_05" },
    c3_05: { quem: "victor", texto: "E sabe o que mais? Ela perguntou quem me ajudou. Eu falei de você. Ela quer te conhecer. Ela quer fazer feijoada pra você. Eu falei que você é pequenininha e forte e ela disse “então ela come duas vezes”.", proxima: "c3_cam2" },
    c3_cam2: { caminhos: [
      { flag: "Victor_volta", proxima: "c3_mindinho" }
    ], proxima: "c3_06" },
    c3_mindinho: { tipo: "narracao", texto: "Ele levanta o mindinho. Mostra para ela. Reto.", proxima: "c3_mindinho2" },
    c3_mindinho2: { quem: "victor", texto: "Olha. Reto ainda. Promessa cumprida até agora. Eu voltei de tudo essa semana.", proxima: "c3_06" },
    c3_06: { tipo: "narracao", texto: "No fim, quando ele fecha a apostila, o Kaito passa pelo corredor. Vê os dois no banco. Para. O Victor acena.", proxima: "c3_07" },
    c3_07: { quem: "victor", texto: "Líder! A SN está me ensinando geografia de gangue! Rio é fronteira!", proxima: "c3_08" },
    c3_08: { tipo: "narracao", sprite: "kaito", texto: "O Kaito olha para o Victor. Para a SN. Para o Victor de novo. A cara dele não muda. Mas a mão dele aperta a alça da mochila.", proxima: "c3_09" },
    c3_09: { quem: "kaito", texto: "...Bom. Estuda.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", texto: "E vai embora. Pisando um pouco mais forte do que precisa.", proxima: "c3_11" },
    c3_11: { quem: "victor", texto: "Ele está com ciúme. Eu conheço ele há quatro anos. Isso é ciúme. Isso é cem por cento ciúme. Que delícia.", proxima: "c3_12" },
    c3_12: { quem: "eu", texto: "Não é ciúme, Victor.", proxima: "c3_13" },
    c3_13: { quem: "victor", texto: "Gatinha. Ele pisou forte. O Kaito não pisa forte. O Kaito anda igual gato. Isso foi um elefante com ciúme.", proxima: "c4_01" },

    /* =================== CENA 4 — ACHADOS E PERDIDOS =================== */
    // Cenário: rua do prédio da SN, sexta à tarde (usa "saida-colegio"). Música: tema do Kaito, versão leve.
    c4_01: { roupa: "fora", tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", legenda: "Sexta — Cena 4 — Achados e perdidos", sprite: null, texto: "Sexta, fim da tarde. Na frente do prédio da SN, encostada no poste, a bicicleta de entrega. E, encostado na bicicleta, o Kaito. Com uma sacola de papel na mão. Ele está ali há um tempo. Dá para ver pelas três cascas de semente de girassol no chão.", proxima: "c4_02" },
    c4_02: { quem: "eu", texto: "É caminho?", proxima: "c4_03" },
    c4_03: { quem: "kaito", sprite: "kaito", texto: "Não. Dessa vez não é caminho. Eu vim aqui.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", texto: "Ela para. É a primeira vez que ele admite.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "Ele estende a sacola de papel. Sem olhar direito para ela. Olhando para o poste.", proxima: "c4_06" },
    c4_06: { quem: "kaito", texto: "Toma.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", texto: "Ela abre. Dentro, um boné. Preto. Novo, com a etiqueta ainda pendurada. E, bordado do lado, bem pequeno, quase invisível, um raminho de cebolinha. O tipo de coisa que só se borda à mão.", proxima: "c4_08" },
    c4_08: { quem: "eu", texto: "...Um boné?", proxima: "c4_09" },
    c4_09: { quem: "kaito", texto: "É de agradecimento. Por ter me protegido.", proxima: "c4_10" },
    c4_10: { tipo: "narracao", efeito: "eco", texto: "Silêncio.", proxima: "c4_11" },
    c4_11: { tipo: "pensamento", texto: "Ele sabe.", proxima: "c4_12" },
    c4_12: { tipo: "pensamento", texto: "Como ele sabe? Ninguém viu o meu rosto. Ele estava cego de cimento. Eu não falei nada. Eu...", proxima: "c4_cam_s" },
    c4_cam_s: { caminhos: [
      { flag: "Kaito_prometeu_costas", proxima: "c4_13" }
    ], proxima: "c4_13b" },
    c4_13b: { tipo: "pensamento", texto: "O boné. Eu devolvi o boné na caixa de achados e perdidos na segunda de manhã, antes de todo mundo chegar. Ninguém viu. Ninguém...", proxima: "c4_15" },
    c4_13: { tipo: "narracao", efeito: "flashback", texto: "Domingo. A porta de casa. “Eu tinha prometido pra você. Não ficar de costas. Eu fiquei. Desculpa.” E a própria voz dela, sem pensar: “Você estava protegendo o Takeo. Está desculpado.”", proxima: "c4_14" },
    c4_14: { tipo: "pensamento", texto: "Ninguém tinha me contado que ele estava protegendo o Takeo. Ninguém. Eu falei sozinha. Que idiota. Que idiota que eu sou.", proxima: "c4_15" },
    c4_15: { tipo: "narracao", texto: "Ela olha para o boné. Para o Kaito. O Kaito continua olhando para o poste. Mas o canto da boca dele está tremendo.", proxima: "c4_16" },
    c4_16: { quem: "eu", texto: "Te protegido? Eu? De quê?", proxima: "c4_17" },
    c4_17: { quem: "kaito", texto: "De nada. De uma barra de ferro. De um saco de cimento. Coisa pouca.", proxima: "c4_18" },
    c4_18: { quem: "eu", texto: "Eu não sei do que você está falando. Eu estava na aula de história. Revolução Industrial.", proxima: "c4_19" },
    c4_19: { quem: "kaito", texto: "Claro. Revolução Industrial. Fábricas. Fábrica de cimento, por exemplo.", proxima: "c4_20" },
    c4_20: { quem: "eu", texto: "Não sei o que é isso. Nunca ouvi falar de cimento.", proxima: "c4_21" },
    c4_21: { tipo: "narracao", texto: "Ele vira para ela. E não aguenta. Ri. Primeiro pelo nariz. Depois de verdade. Alto. Com a mão na barriga, encostado na bicicleta, que quase cai.", proxima: "c4_22" },
    c4_22: { tipo: "narracao", texto: "Ela tenta ficar séria. Dura dois segundos. Depois ri também. Os dois rindo na calçada, sem conseguir parar, enquanto uma senhora passa com um cachorro e olha feio.", proxima: "c4_23" },
    c4_23: { quem: "kaito", texto: "“Nunca ouvi falar de cimento.” Essa foi a pior mentira que eu já ouvi na vida.", proxima: "c4_24" },
    c4_24: { quem: "eu", texto: "Foi boa. Você que não sabe reconhecer talento.", proxima: "c4_25" },
    c4_25: { tipo: "narracao", texto: "Quando os dois param de rir, ele fica quieto. O sorriso diminui. Mas não vai embora.", proxima: "c4_26" },
    c4_26: { quem: "kaito", texto: "O outro boné. O dos achados e perdidos. Eu achei na portaria. Tinha um fio de cabelo comprido preso na aba. E cheiro de sabonete de erva-doce. Eu devolvi pra caixa.", proxima: "c4_27" },
    c4_27: { quem: "kaito", texto: "Esse aqui é seu. Pra próxima vez você não precisar roubar boné de ninguém.", proxima: "c4_28" },
    c4_28: { quem: "eu", texto: "Próxima vez?", proxima: "c4_29" },
    c4_29: { quem: "kaito", texto: "Eu não sou burro. Eu sei que vai ter próxima vez. Você é igual a gente.", proxima: "c4_30" },
    c4_30: { tipo: "narracao", texto: "Ele fala isso sério. Sem raiva. Ele disse que ia brigar muito com ela. Ele não briga. Ele só fica olhando para ela, como se estivesse vendo ela pela primeira vez. E não desvia.", proxima: "c4_31" },
    c4_31: { quem: "kaito", texto: "Ninguém sabe. Eu não contei pra ninguém. Nem pro Blake. Nem pro Ryuji. E não vou contar.", proxima: "c4_esc3" },

    // ▶ ESCOLHA 3 — O boné
    c4_esc3: { escolhas: [
      { texto: "A. Colocar o boné na cabeça. Na frente dele. “Ficou bom?”", proxima: "c4_3a_1", pontos: { kaito: 3 }, flags: ["Colocou_bone_Kaito"] },
      { texto: "B. Continuar se fazendo de desentendida: “Eu ainda não sei do que você está falando. Mas obrigada pelo boné.”", proxima: "c4_3b_1", pontos: { kaito: 2 }, flags: ["Desentendida_Kaito"] },
      { texto: "C. “Por que cebolinha?”", proxima: "c4_3c_1", pontos: { kaito: 3 }, flags: ["Cebolinha_Kaito"] }
    ]},
    c4_3a_1: { tipo: "narracao", texto: "Ela coloca. Ajeita a aba. Olha para ele.", proxima: "c4_3a_2" },
    c4_3a_2: { tipo: "narracao", texto: "Ele fica olhando. Um segundo. Dois. A orelha dele fica vermelha. Igual sempre.", proxima: "c4_3a_3" },
    c4_3a_3: { quem: "kaito", texto: "...Ficou. Ficou bom. Ficou muito... Ficou bom.", proxima: "c4_3a_4" },
    c4_3a_4: { tipo: "narracao", texto: "Ele vira o rosto para o poste de novo. Rápido. Mas agora ela já sabe o que a orelha vermelha quer dizer.", proxima: "c4_32" },
    c4_3b_1: { quem: "kaito", texto: "De nada. Por nada. Pelo nada que você não fez.", proxima: "c4_3b_2" },
    c4_3b_2: { quem: "eu", texto: "Exatamente. Pelo nada.", proxima: "c4_3b_3" },
    c4_3b_3: { tipo: "narracao", texto: "Os dois riem de novo. Mais baixo dessa vez. Um riso de quem tem um segredo junto.", proxima: "c4_32" },
    c4_3c_1: { tipo: "narracao", texto: "Ele coça a nuca. Olha para o chão.", proxima: "c4_3c_2" },
    c4_3c_2: { quem: "kaito", texto: "Eu bordei. Ontem à noite. Na lojinha, depois de fechar. Com a linha que o tio usa pra costurar o avental. Eu não sei bordar flor. Eu só sei bordar cebolinha. Eu treinei a vida inteira no avental.", proxima: "c4_3c_3" },
    c4_3c_3: { quem: "eu", texto: "Você bordou isso? Você?", proxima: "c4_3c_4" },
    c4_3c_4: { quem: "kaito", texto: "Se você contar pra alguém, eu conto da fábrica.", proxima: "c4_3c_5" },
    c4_3c_5: { quem: "eu", texto: "Que fábrica?", proxima: "c4_3c_6" },
    c4_3c_6: { tipo: "narracao", texto: "Ele ri de novo. Ela também. É o melhor acordo que ela já fez na vida.", proxima: "c4_32" },

    // (todas as opções continuam aqui)
    c4_32: { tipo: "narracao", texto: "Ele sobe na bicicleta. Antes de ir, fala sem olhar.", proxima: "c4_33" },
    c4_33: { quem: "kaito", texto: "Da próxima vez, me chama antes. Eu prefiro brigar do seu lado do que ser salvo por você de costas.", proxima: "c4_34" },
    c4_34: { quem: "eu", texto: "Eu não sei do que você está falando.", proxima: "c4_35" },
    c4_35: { quem: "kaito", texto: "Eu sei que não sabe.", proxima: "c4_36" },
    c4_36: { tipo: "narracao", sprite: null, texto: "Ele pedala. Para o outro lado do bairro. Na esquina, sem olhar para trás, levanta a mão. Ela levanta a dela também. Segurando o boné.", proxima: "c5_01" },

    /* =================== CENA 5 — SÁBADO, CINCO HORAS =================== */
    // Cenário: quarto da SN, sexta à noite. Gancho. Música: piano.
    c5_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Sexta, 22h", sprite: null, texto: "À noite, ela pendura o boné no gancho atrás da porta. Fica olhando para ele da cama. A cebolinha bordada torta. A etiqueta, que ela ainda não teve coragem de tirar.", proxima: "c5_02" },
    c5_02: { tipo: "pensamento", texto: "Ele sabe. O Kaito sabe. E ele não ficou com medo de mim. Ele riu. Ele bordou cebolinha.", proxima: "c5_03" },
    c5_03: { tipo: "pensamento", texto: "Na outra vida, eu passei doze anos escondendo isso de todo mundo. Achando que, se alguém soubesse, ia sair correndo.", proxima: "c5_04" },
    c5_04: { tipo: "pensamento", texto: "Ninguém saiu correndo. Ele só disse: “Você é igual a gente.”", proxima: "c5_05" },
    c5_05: { tipo: "narracao", texto: "O celular vibra. Ela acha que é o Kaito. Não é.", proxima: "c5_06" },
    c5_06: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Oi. Desculpa a hora. Eu estou acordado desde as dez tentando escrever essa mensagem.", proxima: "c5_07" },
    c5_07: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Lembra que eu falei que tinha uma coisa que eu queria te falar? Num lugar mais bonito? Sem ervilha na cara?", proxima: "c5_cam1" },
    c5_cam1: { caminhos: [
      { flag: "Nao_era_isso_Takeo", proxima: "c5_nao_era" }
    ], proxima: "c5_08" },
    c5_nao_era: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Você disse que não era isso que eu ia falar. Você tinha razão. Não era o bolinho de frango.", proxima: "c5_08" },
    c5_08: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Amanhã. Cinco horas. No balanço da praça. O nosso. Se você não puder, tudo bem. Eu entendo. Eu espero outro dia. Eu sou bom em esperar.", proxima: "c5_09" },
    c5_09: { tipo: "narracao", texto: "Ela fica olhando para a tela. Para o boné no gancho. Para a tela de novo.", proxima: "c5_10" },
    c5_10: { tipo: "pensamento", texto: "O Kaito no portão. O Takeo no balanço. O Blake no banco com o Kaito. O Victor com o mindinho reto. O Ryuji com a bola murcha.", proxima: "c5_11" },
    c5_11: { tipo: "pensamento", texto: "Na outra vida, ninguém nunca me mandou mensagem às dez da noite. Ninguém nunca esperou por mim num balanço.", proxima: "c5_esc4" },

    // ▶ ESCOLHA 4 — Resposta para o Takeo
    c5_esc4: { escolhas: [
      { texto: "A. “Eu vou. Cinco horas. No nosso balanço.”", proxima: "c5_4a_1", pontos: { takeo: 3 }, flags: ["Vai_balanco_Takeo"] },
      { texto: "B. “Eu vou. Mas eu chego antes, pra você não ficar esperando.”", proxima: "c5_4b_1", pontos: { takeo: 3 }, flags: ["Vai_balanco_Takeo", "Chega_antes_Takeo"] },
      { texto: "C. “Eu vou. Leva bolinho de frango. Metade pra cada.”", proxima: "c5_4c_1", pontos: { takeo: 2 }, flags: ["Vai_balanco_Takeo", "Bolinho_balanco"] }
    ]},
    c5_4a_1: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Tá. Tá bom. Ótimo. Eu vou dormir agora. Não vou. Mas vou tentar.", proxima: "c5_12" },
    c5_4b_1: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Você não precisa chegar antes. Mas eu fiquei muito feliz que você falou isso. Muito. Eu estou sorrindo pro celular igual um idiota.", proxima: "c5_12" },
    c5_4c_1: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Metade pra cada. Mas eu escolho a metade. Eu esperei dez anos, lembra?", proxima: "c5_12" },

    // (todas as opções continuam aqui)
    c5_12: { tipo: "narracao", texto: "Ela apaga a luz. A luz do poste entra pela cortina. Bate no boné pendurado na porta. A cebolinha bordada brilha um pouquinho.", proxima: "c5_13" },
    c5_13: { tipo: "pensamento", texto: "Amanhã, cinco horas. No balanço.", proxima: "c5_14" },
    c5_14: { tipo: "pensamento", texto: "Eu não sei o que ele vai falar. Eu acho que eu sei. E eu não sei o que eu vou responder.", proxima: "ep_fim" },

    // Fim do Capítulo 20 (crie a entrada "capitulo20" em dados/capitulos.js).
    ep_fim: { fim: "capitulo20" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 21 (anotações do roteiro)
 *  • SÓ O KAITO SABE que a SN era a menina do boné. Ele percebeu pelo "você estava protegendo o Takeo"
 *    no domingo do Cap. 17 (ninguém tinha contado para ela) e pelo boné dos achados e perdidos
 *    (fio de cabelo comprido, cheiro de sabonete de erva-doce). Ele deu um boné novo com uma
 *    cebolinha bordada. Guarda segredo. "Da próxima vez, me chama antes."
 *  • O Takeo marcou "aquela coisa" para sábado, cinco horas, no balanço da praça.
 *  • O carro preto passou devagar pela praça. A SN pode ter anotado a placa (Anotou_placa).
 *  • A Sayuri se afastou do Blake por medo. O Blake não sabe por quê. A Mio e o Blake: um "desculpa".
 *  • A mãe do Victor quer fazer feijoada para a SN. O Kaito ficou com ciúme no banco.
 *
 * ESCOLHAS DO CAPÍTULO (4)
 *  1 Depois do carro preto · 2 Os dois no banco · 3 O boné · 4 Resposta para o Takeo
 *
 * FLAGS NOVAS
 *  Levou_Ryuji_casa · Piada_carro_Ryuji · Anotou_placa · Banco_quatro · Deixou_dois_banco · Suco_Blake
 *  Colocou_bone_Kaito · Desentendida_Kaito · Cebolinha_Kaito · Vai_balanco_Takeo · Chega_antes_Takeo
 *  Bolinho_balanco
 */