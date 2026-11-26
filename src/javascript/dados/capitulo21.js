/*
 * =====================================================================
 *  CAPÍTULO 21 — Melhor de cinco
 *  Sábado, de manhã até as cinco da tarde (antes do balanço com o Takeo).
 * =====================================================================
 *
 *  O QUE ACONTECE
 *    • A SN não consegue ficar em casa esperando as cinco horas. Vai para a lan house do mercado.
 *    • O jogo é "Arena dos Reinos" (MOBA fictício, estilo League of Legends). Na outra vida,
 *      dos 20 aos 28, era o único lugar onde ela era forte sem esconder. E ela sabe estratégias
 *      que, nesse tempo, ainda não existem.
 *    • No jogo ela vira outra pessoa: xinga o adversário de volta, grita com o próprio time,
 *      dança de vitória. Fora do jogo, volta a ser quieta. A lan inteira para pra ver.
 *    • O Kaito e o Blake chegam (a livraria fechou pra dedetização). Eles se juntam a ela.
 *      O Kaito é péssimo perdedor. O Blake é calado e bom. Os três jogam juntos.
 *    • 1 contra 1 com o Kaito: "melhor de três"... "melhor de cinco".
 *    • Partida final, os três no mesmo time. Virada.
 *    • Coxinha de frango na calçada. 16h40: ela lembra do balanço e sai correndo.
 *
 *  REGRAS QUE ESTE CAPÍTULO SEGUE
 *    • Clima leve. Sem gangue. O Ren não aparece. Ninguém fala o apelido antigo.
 *    • Romance devagar: ninguém fica dando em cima da SN. É amizade, provocação e jogo.
 *    • Só o Kaito sabe que a SN era a menina do boné (Cap. 20). O Blake não sabe.
 *    • O Blake é calado, amigo de infância do Kaito, e não flerta com a SN.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Kaito, Blake. Sem nome: Dono da lan house, garotos da lan.
 *    Mensagens de chat usam quem: "mensagem" com rótulo.
 *
 *  CENÁRIOS
 *    Lan house → "lan-house" · Calçada do beco do mercado → "beco-mercado"
 *    Quarto da SN → "quarto-sn" · Rua → "rua" · Praça do balanço → "parquinho"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Colocou_bone_Kaito, Chega_antes_Takeo.
 *
 *  Crie a entrada "capitulo21" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo21", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — SETE HORAS DE ESPERA =================== */
    // Cenário: quarto da SN, sábado de manhã. Música: piano leve, ansioso.
    c1_01: { roupa: "fora", tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Sábado, 9h50", sprite: null, texto: "Sábado. Ela acordou às seis. Arrumou o quarto. Arrumou de novo. Trocou de roupa três vezes. Ainda são nove e cinquenta. Faltam sete horas para as cinco.", proxima: "c1_02" },
    c1_02: { tipo: "pensamento", texto: "Se eu ficar aqui, eu vou trocar de roupa mais quarenta vezes. E vou ensaiar respostas pra uma pergunta que ele ainda nem fez.", proxima: "c1_03" },
    c1_03: { tipo: "narracao", texto: "Ela pega a mochila, umas moedas do pote da cozinha e sai. Sem saber direito para onde. Os pés escolhem por ela.", proxima: "c1_04" },
    c1_04: { tipo: "narracao", cenario: "lan-house", transicao: "tempo", texto: "No beco do mercado, entre a loja de chaveiro e a de pastel, tem uma porta de vidro com um adesivo descascado: “LAN HOUSE — 1 HORA R$3”. Lá dentro, ar-condicionado barulhento, cheiro de salgadinho e o brilho azul de vinte computadores.", proxima: "c1_05" },
    c1_05: { tipo: "pensamento", texto: "Na outra vida, dos vinte aos vinte e oito, eu passava as noites num lugar igualzinho a esse. Depois do trabalho. Até de madrugada.", proxima: "c1_06" },
    c1_06: { tipo: "pensamento", texto: "Arena dos Reinos. Era o único lugar do mundo onde eu era forte sem precisar esconder. Ninguém via o meu rosto. Ninguém sabia o meu nome. Eu só ganhava.", proxima: "c1_07" },
    c1_07: { tipo: "pensamento", texto: "E aqui o jogo acabou de sair. Faz o quê, um ano? Ninguém sabe jogar direito ainda. Eu sei tudo que vai ser descoberto nos próximos dez anos.", proxima: "c1_08" },
    c1_08: { quem: "desconhecido", rotulo: "Dono da lan house", texto: "Duas horas? Máquina doze. A cadeira da doze range, mas é a que tem o melhor mouse. Não derrama refrigerante no teclado.", proxima: "c1_09" },
    c1_09: { tipo: "narracao", texto: "Ela senta. A cadeira range. O jogo abre com a musiquinha de trombeta que ela ouviu mil vezes. Criar conta. Escolha o seu nome de invocador.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — O nome no jogo
    c1_esc1: { escolhas: [
      { texto: "A. “Raposa” — a fantasia do festival de verão, aos seis anos.", proxima: "c1_1a_1", flags: ["Nick_Raposa"] },
      { texto: "B. “FrangoFrito” — porque está com fome e não pensou em nada.", proxima: "c1_1b_1", flags: ["Nick_Frango"] },
      { texto: "C. “Segunda_Chance”.", proxima: "c1_1c_1", flags: ["Nick_Segunda_Chance"], pontos: { desvio: 1 } }
    ]},
    c1_1a_1: { tipo: "pensamento", texto: "Raposa. O Takeo ia de bolinho de arroz. Ele não precisa saber que eu escolhi isso hoje.", proxima: "c1_10" },
    c1_1b_1: { tipo: "pensamento", texto: "FrangoFrito. É ridículo. É perfeito. Ninguém vai ter medo de um FrangoFrito. Até perder pra ele.", proxima: "c1_10" },
    c1_1c_1: { tipo: "pensamento", texto: "Segunda chance. Ninguém nessa lan vai entender. Eu entendo.", proxima: "c1_10" },
    c1_10: { tipo: "narracao", texto: "Ela escolhe a personagem de sempre. A Raposa de Cinzas: uma assassina pequena, rápida, de vida baixa, que todo mundo nesse tempo acha que é fraca. Ninguém joga com ela. Ainda.", proxima: "c2_01" },

    /* =================== CENA 2 — A LAN PARA =================== */
    // Cenário: lan house (usa "beco-mercado"). Música: eletrônica animada.
    c2_01: { roupa: "fora", tipo: "narracao", transicao: "tempo", legenda: "Cena 2 — A lan para", texto: "Primeira partida. Lane do meio. Do outro lado, um cara com nome cheio de caveira e o boneco mais forte do jogo. Ele digita no chat antes do minuto um.", proxima: "c2_02" },
    c2_02: { quem: "mensagem", rotulo: "Chat — Inimigo", texto: "raposa kkkkk vc vai morrer em 3 min", proxima: "c2_02a" },
    c2_02a: { tipo: "narracao", texto: "A SN olha para a tela. Estala o pescoço. Estala os dedos. Alguma coisa muda no rosto dela. A menina que pede desculpa pra cadeira quando esbarra some.", proxima: "c2_02b" },
    c2_02b: { quem: "mensagem", rotulo: "Chat — SN", texto: "em 3 min vc vai estar chorando no chat, caveirinha", proxima: "c2_02c" },
    c2_02c: { tipo: "narracao", texto: "Ela digita rápido. Muito rápido. O garoto da máquina treze, que estava passando com um copo de refrigerante, para atrás dela e lê.", proxima: "c2_02d" },
    c2_02d: { quem: "mensagem", rotulo: "Chat — Inimigo", texto: "kkkkk quem joga de raposa é pq nao sabe jogar com outro boneco", proxima: "c2_02e" },
    c2_02e: { quem: "mensagem", rotulo: "Chat — SN", texto: "seu boneco tem mais vida do que você tem neurônio. aproveita enquanto dura. tchau", proxima: "c2_02f" },
    c2_02f: { quem: "eu", texto: "Ai, coitado. Ele acha que sabe digitar.", proxima: "c2_03" },
    c2_03: { tipo: "narracao", texto: "Ela não espera. Último golpe em cada minion. No minuto três, ele avança, confiante. Ela some atrás do arbusto, volta pelo outro lado, e ele cai antes de entender de onde veio.", proxima: "c2_03a" },
    c2_03a: { quem: "eu", texto: "TCHAAAU! VOLTA PRA BASE, VOLTA! VAI COMPRAR UM CÉREBRO NA LOJINHA!", proxima: "c2_03b" },
    c2_03b: { tipo: "narracao", texto: "Ela fala isso em voz alta. Na lan inteira. O garoto da treze derrama o refrigerante no próprio tênis.", proxima: "c2_03c" },
    c2_03c: { quem: "mensagem", rotulo: "Chat — Inimigo", texto: "foi sorte", proxima: "c2_03d" },
    c2_03d: { quem: "mensagem", rotulo: "Chat — SN", texto: "sorte é você ainda ter internet. dá ff, filhote", proxima: "c2_04" },
    c2_04: { quem: "mensagem", rotulo: "Chat — Inimigo", texto: "???", proxima: "c2_05" },
    c2_05: { tipo: "narracao", texto: "No minuto sete, ela mata ele de novo. No nove, mais duas vezes. No doze, ela está na lane de baixo, no rio, na selva, em todo lugar ao mesmo tempo. O placar dela: catorze abates, zero mortes.", proxima: "c2_05a" },
    c2_05a: { tipo: "narracao", texto: "No minuto quinze, o próprio aliado dela, um cara da lane de baixo, morre pela terceira vez seguida e escreve “raposa não ajuda”.", proxima: "c2_05b" },
    c2_05b: { tipo: "narracao", texto: "Ela tira a mão do mouse. Vira a cadeira devagar na direção da tela, como quem vira para uma pessoa. A cadeira range.", proxima: "c2_05c" },
    c2_05c: { quem: "eu", texto: "Eu não ajudo? EU NÃO AJUDO? Você correu pra torre deles sozinho, com dez por cento de vida, de costas, CANTANDO, que eu tenho certeza que você estava cantando!", proxima: "c2_05d" },
    c2_05d: { quem: "eu", texto: "Fica no arbusto! Fica no arbusto, pelo amor de Deus! O arbusto é seu amigo! O arbusto te ama!", proxima: "c2_05e" },
    c2_05e: { tipo: "narracao", texto: "Na lan, ninguém mais está jogando. Todo mundo está olhando para a máquina doze. O dono da lan saiu do balcão. Ele não sabe se chama a atenção dela ou se puxa uma cadeira.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", texto: "Na máquina treze, um garoto de uns doze anos para de jogar. Vira a cadeira. Olha a tela dela. Cutuca o amigo da catorze. O amigo cutuca o da quinze.", proxima: "c2_07" },
    c2_07: { quem: "desconhecido", rotulo: "Garoto da máquina 13", texto: "Moça. Moça. Como você fez aquilo? Você usou o salto ANTES da ultimate? Isso dá?", proxima: "c2_08" },
    c2_08: { quem: "eu", texto: "Dá. Ninguém descobriu ainda.", proxima: "c2_09" },
    c2_09: { tipo: "narracao", texto: "Vinte minutos depois, tem seis pessoas em pé atrás da cadeira dela. O dono da lan saiu do balcão com o pano de prato no ombro. A partida termina. Vitória. Vinte e um abates. Uma morte, porque ela se distraiu olhando o relógio. Quatro e meia ainda está longe.", proxima: "c2_10" },
    c2_10: { quem: "mensagem", rotulo: "Chat — Inimigo", texto: "vc é smurf ne. confessa. vc é profissional", proxima: "c2_11" },
    c2_11: { quem: "desconhecido", rotulo: "Dono da lan house", texto: "Doze anos de lan house e eu nunca vi ninguém jogar de Raposa de Cinzas e ganhar. Ela é a pior do jogo.", proxima: "c2_12" },
    c2_12: { quem: "eu", texto: "Ela não é a pior. Todo mundo só joga ela errado.", proxima: "c2_13" },
    c2_13: { tipo: "narracao", texto: "A porta de vidro abre. O sininho toca. E, bem nessa hora, a SN dá um tapa na mesa.", proxima: "c2_13a" },
    c2_13a: { quem: "eu", texto: "É ISSO! CHORA! CHORA NO CHAT QUE EU TÔ OUVINDO DAQUI!", proxima: "c2_13b" },
    c2_13b: { tipo: "narracao", texto: "Silêncio na porta. Duas pessoas paradas. Uma de moletom. Outra abaixando a cabeça para não bater no batente.", proxima: "c2_14" },
    c2_14: { roupa: "fora", quem: "kaito", sprite: "kaito", texto: "...Essa é a SN?", proxima: "c2_15" },
    c2_15: { tipo: "narracao", sprite: "kaito", texto: "O Kaito. De moletom, sem boné. E, atrás dele, o Blake. Os dois olhando para a menina da máquina doze, que agora está batendo o mouse na mesa no ritmo de uma música que só existe na cabeça dela.", proxima: "c2_cam1" },
    c2_cam1: { caminhos: [
      { flag: "Colocou_bone_Kaito", proxima: "c2_bone" }
    ], proxima: "c2_16" },
    c2_bone: { tipo: "pensamento", texto: "Eu estou com o boné da cebolinha. Ele vai ver. Ele está vendo.", proxima: "c2_bone2" },
    c2_bone2: { tipo: "narracao", texto: "Ele vê. O olho dele vai direto no bordado. E volta para o rosto dela com a cara mais séria do mundo. Que dura um segundo.", proxima: "c2_16" },
    c2_16: { tipo: "narracao", texto: "Os seis garotos abrem caminho. O Kaito olha para a tela. O placar ainda está lá. Vinte e um, um, nove.", proxima: "c2_17" },
    c2_17: { quem: "kaito", texto: "...Isso é seu? Esse grito também é seu?", proxima: "c2_18" },
    c2_18: { quem: "eu", texto: "Que grito? Eu estou jogando em silêncio.", proxima: "c2_19" },
    c2_19: { quem: "desconhecido", rotulo: "Garoto da máquina 13", texto: "Ela mandou um cara comprar um cérebro na lojinha. E mandou o próprio time amar um arbusto.", proxima: "c2_19b" },
    c2_19b: { quem: "blake", sprite: "blake", texto: "Raposa de Cinzas.", proxima: "c2_20" },
    c2_20: { tipo: "narracao", texto: "O Blake fala só isso. Olhando para a tela. Com a voz de quem acabou de ver alguém levantar um carro.", proxima: "c2_21" },
    c2_21: { quem: "kaito", sprite: "kaito", texto: "A gente vem aqui todo sábado de manhã. Desde os doze anos. Hoje a livraria dele fechou pra dedetização, então a gente veio cedo. E você está na nossa lan. Na máquina doze. Que é a do melhor mouse.", proxima: "c2_22" },
    c2_22: { quem: "eu", texto: "Eu cheguei primeiro.", proxima: "c2_23" },
    c2_23: { tipo: "narracao", texto: "O Kaito puxa a cadeira da onze. Senta. O Blake puxa a da dez. Senta. Os três de frente para três telas.", proxima: "c2_24" },
    c2_24: { quem: "kaito", texto: "Joga com a gente.", proxima: "c3_01" },

    /* =================== CENA 3 — TRÊS NA MESMA LANE =================== */
    // Cenário: lan house. Música: eletrônica, ritmo de partida.
    c3_01: { roupa: "fora", tipo: "narracao", transicao: "tempo", legenda: "Cena 3 — Três no mesmo time", texto: "Eles entram na fila juntos. Os três mais dois desconhecidos. O Kaito escolhe o Golem de Pedra, um tanque enorme. O Blake escolhe o Monge da Névoa, um suporte que cura. Ninguém precisa perguntar por quê. Faz sentido demais.", proxima: "c3_02" },
    c3_02: { quem: "kaito", sprite: "kaito", texto: "Eu vou na frente. Vocês ficam atrás de mim. Eu protejo.", proxima: "c3_03" },
    c3_03: { tipo: "pensamento", texto: "Até no jogo.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", texto: "No minuto quatro, o Kaito entra sozinho no meio de três inimigos. Ele aguenta. Muito. Mas aguenta sozinho. E cai.", proxima: "c3_05" },
    c3_05: { quem: "eu", texto: "KAITO! O QUE VOCÊ ESTÁ FAZENDO? VOCÊ É UM GOLEM, NÃO UM KAMIKAZE! VOLTA, SEU ANIMAL!", proxima: "c3_05a" },
    c3_05a: { quem: "kaito", texto: "...Lag.", proxima: "c3_06" },
    c3_06: { quem: "blake", sprite: "blake", texto: "Não teve lag.", proxima: "c3_07" },
    c3_07: { quem: "kaito", sprite: "kaito", texto: "Teve lag no meu coração.", proxima: "c3_08" },
    c3_08: { tipo: "narracao", texto: "O Kaito vira para ela. Ninguém nunca chamou o Kaito de animal. Pelo menos não na cara dele. O Blake está com o rosto virado para a parede, tremendo. Ele está rindo sem som. Ele joga assim também: sem falar nada, sempre no lugar certo. Toda vez que a vida da SN fica vermelha, um brilho verde aparece em volta dela.", proxima: "c3_08a" },
    c3_08a: { quem: "eu", texto: "MONGE! CURA! CURA AGORA! ISSO! ISSO, MONGE LINDO! EU TE AMO, MONGE!", proxima: "c3_08b" },
    c3_08b: { quem: "blake", sprite: "blake", texto: "...Ela me ama.", proxima: "c3_08c" },
    c3_08c: { quem: "kaito", sprite: "kaito", texto: "Ela ama o boneco. Não você. Joga.", proxima: "c3_09" },
    c3_09: { tipo: "pensamento", texto: "Ele joga igual ele é. Fica atrás. Ninguém percebe. Sem ele, tudo desmorona.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", texto: "No minuto onze, o Kaito entra no meio de três inimigos de novo. Igual. Do mesmo jeito. E dessa vez ela vê os três se virando para ele.", proxima: "c3_esc2" },

    // ▶ ESCOLHA 2 — O Kaito sozinho no meio de três
    c3_esc2: { escolhas: [
      { texto: "A. Entrar junto. Pular nos três ao mesmo tempo que ele.", proxima: "c3_2a_1", pontos: { kaito: 2 }, flags: ["Entrou_junto_Kaito_jogo"] },
      { texto: "B. Esperar ele cair e limpar os três depois. É o mais inteligente.", proxima: "c3_2b_1", pontos: { kaito: 1 }, flags: ["Esperou_Kaito_cair"] },
      { texto: "C. “Blake, cura ele. Eu entro pelo lado.”", proxima: "c3_2c_1", pontos: { blake: 2, kaito: 1 }, flags: ["Combo_tres_jogo"] }
    ]},
    c3_2a_1: { tipo: "narracao", texto: "Ela pula. A Raposa cai no meio dos três, em cima do Golem. O Kaito vê. Usa o escudo nela, sem pensar. Os dois aguentam juntos. Os três inimigos caem um por um.", proxima: "c3_2a_2" },
    c3_2a_2: { quem: "kaito", sprite: "kaito", texto: "...Eu falei pra você ficar atrás.", proxima: "c3_2a_3" },
    c3_2a_3: { quem: "eu", texto: "Você também não fica atrás de ninguém.", proxima: "c3_2a_4" },
    c3_2a_4: { tipo: "narracao", texto: "Ele não responde. Continua olhando para a tela. Mas para de mexer o mouse por um segundo.", proxima: "c3_11" },
    c3_2b_1: { tipo: "narracao", texto: "Ela espera. O Golem cai. Os três inimigos, machucados, se viram para ir embora. Ela aparece atrás deles. Um, dois, três.", proxima: "c3_2b_2" },
    c3_2b_2: { quem: "kaito", sprite: "kaito", texto: "VOCÊ ME DEIXOU MORRER.", proxima: "c3_2b_3" },
    c3_2b_3: { quem: "eu", texto: "Você morreu muito bem. Foi uma morte útil.", proxima: "c3_2b_4" },
    c3_2b_4: { quem: "blake", sprite: "blake", texto: "Foi.", proxima: "c3_2b_5" },
    c3_2b_5: { quem: "kaito", sprite: "kaito", texto: "Você está do lado dela agora?", proxima: "c3_2b_6" },
    c3_2b_6: { quem: "blake", sprite: "blake", texto: "Eu estou do lado de quem ganha.", proxima: "c3_11" },
    c3_2c_1: { tipo: "narracao", texto: "O Blake não responde. Mas o brilho verde aparece em volta do Golem antes dela terminar a frase. Ela entra pelo lado. O Kaito, curado, vira na hora certa. Os três juntos. Quatro inimigos no chão.", proxima: "c3_2c_2" },
    c3_2c_2: { tipo: "narracao", texto: "Na máquina treze, o garoto de doze anos grita. Os três se olham. Ninguém fala nada. O Blake digita a primeira coisa no chat da partida inteira.", proxima: "c3_2c_3" },
    c3_2c_3: { quem: "mensagem", rotulo: "Chat — Monge da Névoa", texto: "gg", proxima: "c3_2c_4" },
    c3_2c_4: { quem: "kaito", sprite: "kaito", texto: "Ainda não acabou a partida.", proxima: "c3_2c_5" },
    c3_2c_5: { quem: "blake", sprite: "blake", texto: "Acabou.", proxima: "c3_11" },

    // (todas as opções continuam aqui)
    c3_11: { tipo: "narracao", sprite: null, texto: "Eles ganham. Depois ganham de novo. Na terceira partida, a lan inteira está assistindo. O dono trouxe uma cadeira de plástico pra ele mesmo e sentou atrás deles.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", sprite: "kaito", texto: "Entre uma partida e outra, enquanto o Blake vai buscar refrigerante, o Kaito se inclina um pouco para o lado. Fala baixo. Só pra ela.", proxima: "c3_13" },
    c3_13: { quem: "kaito", texto: "Você quebra barra de ferro e ainda joga assim? Tem alguma coisa que você não faz?", proxima: "c3_14" },
    c3_14: { quem: "eu", texto: "Eu não sei do que você está falando. Que barra?", proxima: "c3_15" },
    c3_15: { tipo: "narracao", texto: "Ele solta o ar pelo nariz. Volta a olhar para a tela. O Blake volta com três latas. Ninguém percebe nada.", proxima: "c4_01" },

    /* =================== CENA 4 — MELHOR DE CINCO =================== */
    // Cenário: lan house. Música: tema do Kaito, versão competitiva e engraçada.
    c4_01: { roupa: "fora", tipo: "narracao", transicao: "tempo", legenda: "Cena 4 — Melhor de cinco", sprite: "kaito", texto: "Meio-dia. O Kaito estala os dedos. Vira a cadeira para ela.", proxima: "c4_02" },
    c4_02: { quem: "kaito", texto: "Um contra um. Eu e você. Lane do meio. Quem perder paga a coxinha.", proxima: "c4_03" },
    c4_03: { quem: "blake", sprite: "blake", texto: "Não faz isso.", proxima: "c4_04" },
    c4_04: { quem: "kaito", sprite: "kaito", texto: "Por quê?", proxima: "c4_05" },
    c4_05: { quem: "blake", sprite: "blake", texto: "Pedra, papel e tesoura. A máquina de bebida. Eu sei tudo. O Ryuji conta tudo.", proxima: "c4_06" },
    c4_06: { tipo: "narracao", sprite: null, texto: "O Kaito ignora. Primeira partida. Ele escolhe o personagem mais forte do jogo. Ela continua de Raposa. Ela ganha em quatro minutos.", proxima: "c4_07" },
    c4_07: { quem: "kaito", sprite: "kaito", texto: "Melhor de três.", proxima: "c4_08" },
    c4_08: { tipo: "narracao", texto: "Ela ganha em três minutos. E, quando ganha, levanta da cadeira, aponta para a tela dele e faz a dancinha da Raposa. Com o corpo. Na vida real.", proxima: "c4_08a" },
    c4_08a: { quem: "eu", texto: "DOIS A ZERO! DOIS! ZERO! Quer que eu jogue de olho fechado? Quer que eu jogue só com a mão esquerda? Fala, Kaito! Fala comigo!", proxima: "c4_08b" },
    c4_08b: { quem: "kaito", sprite: "kaito", texto: "Senta.", proxima: "c4_08c" },
    c4_08c: { quem: "eu", texto: "Não sento. Eu vou ficar em pé de vitória.", proxima: "c4_09" },
    c4_09: { quem: "kaito", texto: "Melhor de cinco.", proxima: "c4_10" },
    c4_10: { quem: "blake", sprite: "blake", texto: "Lá vem.", proxima: "c4_11" },
    c4_11: { tipo: "narracao", sprite: null, texto: "Terceira partida. O Kaito joga com uma concentração que ela só viu nele na fábrica. Sem piscar. O nariz quase encostando no monitor. Ele está melhorando. Rápido. Ele aprende enquanto perde.", proxima: "c4_12" },
    c4_12: { tipo: "pensamento", texto: "Ele é igual na briga. Ele perde uma vez. Na segunda já entendeu. Na terceira ele já é perigoso.", proxima: "c4_13" },
    c4_13: { tipo: "narracao", texto: "Minuto seis. Os dois com a vida no fim. Ela tem a ultimate pronta. Ele não. Um golpe e acaba.", proxima: "c4_esc3" },

    // ▶ ESCOLHA 3 — O último golpe
    c4_esc3: { escolhas: [
      { texto: "A. Acabar com ele. Três a zero. Sem dó.", proxima: "c4_3a_1", pontos: { kaito: 1 }, flags: ["Ganhou_tres_zero"] },
      { texto: "B. Errar de propósito. Deixar ele ganhar uma.", proxima: "c4_3b_1", pontos: { kaito: 1 }, flags: ["Deixou_Kaito_ganhar"] },
      { texto: "C. Parar a Raposa no meio da lane. E dançar. Com o emote de dança.", proxima: "c4_3c_1", pontos: { kaito: 2 }, flags: ["Danca_Raposa"] }
    ]},
    c4_3a_1: { tipo: "narracao", texto: "Ela aperta. A tela dele fica cinza. Três a zero.", proxima: "c4_3a_2" },
    c4_3a_2: { tipo: "narracao", texto: "O Kaito encosta na cadeira. Olha para o teto da lan. Fica assim um tempo.", proxima: "c4_3a_3" },
    c4_3a_3: { quem: "kaito", sprite: "kaito", texto: "...Ninguém nunca ganhou de mim três vezes seguidas. Em nada.", proxima: "c4_3a_4" },
    c4_3a_4: { quem: "blake", sprite: "blake", texto: "Eu já perdi quatrocentas e treze pra você. Bem-vindo.", proxima: "c4_3a_5" },
    c4_3a_5: { tipo: "narracao", texto: "O Kaito olha para o Blake. O Blake olha de volta. E os dois começam a rir ao mesmo tempo. Do mesmo jeito. Como quem tem dez anos de piada guardada.", proxima: "c4_14" },
    c4_3b_1: { tipo: "narracao", texto: "Ela erra. Bem pouco. O suficiente. A Raposa cai. Na tela dele: VITÓRIA.", proxima: "c4_3b_2" },
    c4_3b_2: { quem: "kaito", sprite: "kaito", texto: "GANHEI! EU GANHEI! Blake! Você viu?", proxima: "c4_3b_3" },
    c4_3b_3: { quem: "blake", sprite: "blake", texto: "Vi. Ela errou de propósito.", proxima: "c4_3b_4" },
    c4_3b_4: { quem: "kaito", sprite: "kaito", texto: "...Errou?", proxima: "c4_3b_5" },
    c4_3b_5: { tipo: "narracao", texto: "Ele vira para ela. Ela olha para o teto. Ele aponta para ela, depois para a tela, depois para ela de novo.", proxima: "c4_3b_6" },
    c4_3b_6: { quem: "kaito", texto: "De novo. Agora sem errar. Eu quero ganhar de verdade.", proxima: "c4_3b_7" },
    c4_3b_7: { tipo: "narracao", texto: "Ele não ganha de verdade. Mas, na quinta, ele chega muito perto. E sorri quando perde, pela primeira vez no dia.", proxima: "c4_14" },
    c4_3c_1: { tipo: "narracao", texto: "A Raposa de Cinzas para no meio da lane. E dança. Uma dancinha ridícula, de rabo balançando.", proxima: "c4_3c_2" },
    c4_3c_2: { tipo: "narracao", texto: "O Kaito fica parado. O Golem dele também. Os dois personagens, com a vida no fim, parados no meio da lane, um dançando, o outro olhando.", proxima: "c4_3c_3" },
    c4_3c_3: { quem: "kaito", sprite: "kaito", texto: "Você está... me provocando?", proxima: "c4_3c_4" },
    c4_3c_4: { quem: "eu", texto: "Eu estou dançando. É diferente.", proxima: "c4_3c_5" },
    c4_3c_5: { tipo: "narracao", texto: "E então o Golem dele dança também. Duro. Desajeitado. Os dois dançando no meio da lane enquanto os minions passam batendo neles. Os dois morrem pros minions. Empate. A lan inteira chora de rir.", proxima: "c4_3c_6" },
    c4_3c_6: { quem: "blake", sprite: "blake", texto: "Isso foi a coisa mais idiota que eu já vi vocês fazerem. E eu vi muita coisa.", proxima: "c4_14" },

    // (todas as opções continuam aqui)
    c4_14: { tipo: "narracao", sprite: null, texto: "O garoto da máquina treze pede para tirar uma foto com a “moça da Raposa”. Ela tira. O Kaito aparece no canto da foto, sem querer, fazendo careta. O Blake aparece atrás, sério, com a lata de refrigerante.", proxima: "c5_01" },

    /* =================== CENA 5 — A VIRADA =================== */
    // Cenário: lan house, começo da tarde. Música: épica, crescendo.
    c5_01: { roupa: "fora", tipo: "narracao", transicao: "tempo", legenda: "Cena 5 — A virada", texto: "Duas e meia. A última partida do dia, juntos. Eles caem contra um time de cinco amigos de outra lan, que jogam juntos há meses. Em vinte minutos, eles estão perdendo feio. Três torres a menos. Os dois desconhecidos do time já desistiram.", proxima: "c5_02" },
    c5_02: { quem: "mensagem", rotulo: "Chat — Aliado", texto: "ff 20. acabou. vamos render", proxima: "c5_02a" },
    c5_02a: { quem: "mensagem", rotulo: "Chat — SN", texto: "se você der ff eu descubro onde você mora", proxima: "c5_02b" },
    c5_02b: { quem: "mensagem", rotulo: "Chat — Aliado", texto: "???? calma moça", proxima: "c5_02c" },
    c5_02c: { quem: "mensagem", rotulo: "Chat — SN", texto: "não tem calma. tem ARBUSTO. vai pro arbusto e fica lá", proxima: "c5_03" },
    c5_03: { quem: "kaito", sprite: "kaito", texto: "Não. Ninguém se rende.", proxima: "c5_04" },
    c5_04: { tipo: "narracao", texto: "Ele fala isso em voz alta, para a tela, como se o jogo pudesse ouvir. O Blake não fala nada. Mas, no chat, ele digita a segunda palavra do dia.", proxima: "c5_05" },
    c5_05: { quem: "mensagem", rotulo: "Chat — Monge da Névoa", texto: "não", proxima: "c5_06" },
    c5_06: { tipo: "pensamento", texto: "Na outra vida, eu jogava sozinha. Sempre. Quando o time desistia, eu desistia junto. Pra que ficar, se ninguém ficava?", proxima: "c5_07" },
    c5_07: { tipo: "pensamento", texto: "Hoje tem dois aqui do meu lado que não sabem desistir de nada. Nem de um jogo perdido.", proxima: "c5_08" },
    c5_08: { tipo: "narracao", texto: "Minuto vinte e oito. Os cinco inimigos descem juntos para a base deles. Última luta. Se perderem, acabou.", proxima: "c5_esc4" },

    // ▶ ESCOLHA 4 — A última luta
    c5_esc4: { escolhas: [
      { texto: "A. “Kaito, entra. Agora você pode entrar na frente. Eu vou logo atrás.”", proxima: "c5_4a_1", pontos: { kaito: 3 }, flags: ["Kaito_entra_frente"] },
      { texto: "B. “Blake, guarda a cura pra mim. Eu vou atrás do curandeiro deles.”", proxima: "c5_4b_1", pontos: { blake: 3 }, flags: ["Blake_guarda_cura"] },
      { texto: "C. Ignorar a luta. Correr sozinha pela selva até a base inimiga. Enquanto eles seguram.", proxima: "c5_4c_1", pontos: { kaito: 1, blake: 1, desvio: 1 }, flags: ["Backdoor_Raposa"] }
    ]},
    c5_4a_1: { tipo: "narracao", texto: "O Kaito entra. O Golem bate no chão e os cinco inimigos voam para o alto. Ela entra logo atrás. Na hora exata. Um. Dois. Três. O Monge cura os dois ao mesmo tempo. Quatro. Cinco.", proxima: "c5_4a_2" },
    c5_4a_2: { quem: "kaito", sprite: "kaito", texto: "EU ENTREI NA FRENTE E DEU CERTO!", proxima: "c5_4a_3" },
    c5_4a_3: { quem: "eu", texto: "Porque dessa vez tinha alguém atrás.", proxima: "c5_4a_4" },
    c5_4a_4: { tipo: "narracao", texto: "Ele para de comemorar. Olha para ela. Só um segundo. E volta para a tela, com a orelha vermelha.", proxima: "c5_09" },
    c5_4b_1: { tipo: "narracao", texto: "O Blake guarda. Ela atravessa a luta inteira, desviando de tudo, e chega no curandeiro inimigo. Ele cai. Ela fica com a vida no fim. E o brilho verde aparece. Na hora exata. Nem um segundo antes.", proxima: "c5_4b_2" },
    c5_4b_2: { tipo: "narracao", texto: "Sem o curandeiro, o time inimigo desmorona. O Golem do Kaito segura os outros quatro até ela voltar.", proxima: "c5_4b_3" },
    c5_4b_3: { quem: "blake", sprite: "blake", texto: "Boa.", proxima: "c5_4b_4" },
    c5_4b_4: { tipo: "narracao", texto: "Uma palavra. Do Blake, é praticamente um discurso. O Kaito olha para o amigo com cara de quem viu um milagre.", proxima: "c5_09" },
    c5_4c_1: { tipo: "narracao", texto: "Ela some. O Kaito e o Blake ficam sozinhos na frente da base, segurando cinco. Eles não perguntam para onde ela foi. Eles só seguram.", proxima: "c5_4c_2" },
    c5_4c_2: { quem: "kaito", sprite: "kaito", texto: "ONDE ELA FOI? Blake! Ela fugiu?", proxima: "c5_4c_3" },
    c5_4c_3: { quem: "blake", sprite: "blake", texto: "Segura.", proxima: "c5_4c_4" },
    c5_4c_4: { tipo: "narracao", texto: "Eles seguram. Trinta segundos. O Golem cai. O Monge cai. E, do outro lado do mapa, o cristal inimigo explode. Ela estava lá o tempo todo, batendo sozinha.", proxima: "c5_4c_5" },
    c5_4c_5: { quem: "kaito", sprite: "kaito", texto: "...Você deixou a gente morrer pra ganhar.", proxima: "c5_4c_6" },
    c5_4c_6: { quem: "eu", texto: "Vocês seguraram. Eu sabia que vocês iam segurar.", proxima: "c5_09" },

    // (todas as opções continuam aqui)
    c5_09: { tipo: "narracao", sprite: null, efeito: "tremor", texto: "VITÓRIA. A palavra enorme na tela. A lan inteira grita. O garoto da treze pula em cima da cadeira. O dono bate o pano de prato no balcão.", proxima: "c5_10" },
    c5_10: { quem: "mensagem", rotulo: "Chat — Inimigo", texto: "como vcs viraram isso. quem é essa raposa. adiciona eu", proxima: "c5_10a" },
    c5_10a: { quem: "mensagem", rotulo: "Chat — SN", texto: "não. treina mais. volta daqui a um ano. com um cérebro", proxima: "c5_10b" },
    c5_10b: { quem: "desconhecido", rotulo: "Dono da lan house", texto: "Moça. Eu preciso que você saiba que eu nunca vi ninguém humilhar alguém com tanto carinho.", proxima: "c5_11" },
    c5_11: { tipo: "narracao", texto: "O Kaito levanta a mão. Aberta. Para ela. Ela bate. Do outro lado, o Blake levanta a dele também. Para o Kaito. O Kaito bate. Depois o Blake olha para a SN. Hesita. E levanta a mão de novo, mais baixo. Ela bate também.", proxima: "c6_01" },

    /* =================== CENA 6 — COXINHA NA CALÇADA =================== */
    // Cenário: calçada do beco do mercado (usa "beco-mercado"). Música: violão leve.
    c6_01: { roupa: "fora", tipo: "narracao", cenario: "beco-mercado", transicao: "tempo", legenda: "Cena 6 — Coxinha", texto: "Quatro da tarde. Os três sentados no meio-fio, na frente da loja de pastel. Três coxinhas de frango. O Kaito pagou todas, mesmo que ninguém tenha lembrado da aposta.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", texto: "Lá fora, longe da tela, ela é outra pessoa de novo. A de antes. Come a coxinha em mordidas pequenas, com guardanapo, quieta. Os dois ficam olhando para ela como quem olha um fenômeno.", proxima: "c6_02a" },
    c6_02a: { quem: "kaito", sprite: "kaito", texto: "Você me chamou de animal.", proxima: "c6_02b" },
    c6_02b: { quem: "eu", texto: "Eu? Nunca. Eu não falo assim.", proxima: "c6_02c" },
    c6_02c: { quem: "blake", sprite: "blake", texto: "Você mandou o cara comprar um cérebro. E disse que ia descobrir onde o outro morava.", proxima: "c6_02d" },
    c6_02d: { quem: "eu", texto: "Eu fico um pouco animada quando jogo.", proxima: "c6_02e" },
    c6_02e: { quem: "kaito", sprite: "kaito", texto: "Um pouco. A lan inteira parou pra te ouvir.", proxima: "c6_02f" },
    c6_02f: { quem: "blake", sprite: "blake", texto: "Você disse que me amava.", proxima: "c6_02g" },
    c6_02g: { quem: "eu", texto: "Eu disse que amava o MONGE. Você que estava dentro dele.", proxima: "c6_02h" },
    c6_02h: { tipo: "narracao", texto: "O Blake engasga com a coxinha. O Kaito dá tapas nas costas dele, rindo, sem ajudar nada.", proxima: "c6_02i" },
    c6_02i: { quem: "kaito", sprite: "kaito", texto: "Onde você aprendeu a jogar daquele jeito? E a gritar daquele jeito?", proxima: "c6_03" },
    c6_03: { tipo: "pensamento", texto: "Oito anos de madrugada. Sozinha. Numa lan igual a essa. Fugindo de uma vida em que eu não fazia nada.", proxima: "c6_04" },
    c6_04: { quem: "eu", texto: "Eu jogo faz tempo. O grito vem de brinde.", proxima: "c6_05" },
    c6_05: { quem: "blake", sprite: "blake", texto: "Joga com a gente sábado que vem.", proxima: "c6_06" },
    c6_06: { tipo: "narracao", texto: "O Blake fala isso olhando para a coxinha. Sem pergunta. Do jeito dele, que não sabe perguntar. O Kaito olha para o amigo, surpreso.", proxima: "c6_07" },
    c6_07: { quem: "kaito", texto: "Ele nunca chamou ninguém. Dez anos. Nem o Ryuji. O Ryuji se convidou sozinho.", proxima: "c6_08" },
    c6_08: { quem: "blake", texto: "Ela ganha. E grita com quem merece. A gente precisa disso.", proxima: "c6_09" },
    c6_09: { tipo: "narracao", texto: "Ele fala isso sério. E dá a última mordida na coxinha. O assunto, pra ele, acabou.", proxima: "c6_esc5" },

    // ▶ ESCOLHA 5 — Sábado que vem
    c6_esc5: { escolhas: [
      { texto: "A. “Eu venho. Mas eu fico com a máquina doze.”", proxima: "c6_5a_1", pontos: { kaito: 1, blake: 1 }, flags: ["Lan_todo_sabado"] },
      { texto: "B. “Eu venho. Se o Kaito parar de pedir melhor de cinco.”", proxima: "c6_5b_1", pontos: { kaito: 2 }, flags: ["Lan_todo_sabado", "Sem_melhor_de_cinco"] },
      { texto: "C. “Eu venho. E vou ensinar vocês a jogar de Raposa.”", proxima: "c6_5c_1", pontos: { blake: 2 }, flags: ["Lan_todo_sabado", "Ensina_Raposa"] }
    ]},
    c6_5a_1: { quem: "kaito", sprite: "kaito", texto: "A doze é minha desde os doze anos.", proxima: "c6_5a_2" },
    c6_5a_2: { quem: "eu", texto: "Agora é minha. Você perdeu três a zero.", proxima: "c6_5a_3" },
    c6_5a_3: { quem: "blake", sprite: "blake", texto: "Ela tem razão.", proxima: "c6_10" },
    c6_5b_1: { quem: "kaito", sprite: "kaito", texto: "Isso é impossível. Você está pedindo uma coisa impossível.", proxima: "c6_5b_2" },
    c6_5b_2: { quem: "blake", sprite: "blake", texto: "É mesmo.", proxima: "c6_10" },
    c6_5c_1: { quem: "blake", sprite: "blake", texto: "...Ensina.", proxima: "c6_5c_2" },
    c6_5c_2: { tipo: "narracao", texto: "O Kaito olha para o Blake. O Blake nunca pede para ninguém ensinar nada. Ele aprende sozinho, ou não aprende. O Kaito fica calado. Mas fica olhando para o amigo um tempo.", proxima: "c6_10" },

    // (todas as opções continuam aqui)
    c6_10: { tipo: "narracao", texto: "O celular dela vibra no bolso. Um lembrete. Ela mesma colocou, ontem à noite, para não esquecer. Como se ela pudesse esquecer.", proxima: "c6_11" },
    c6_11: { quem: "mensagem", rotulo: "Lembrete", texto: "16h40 — Balanço. 17h.", proxima: "c6_12" },
    c6_12: { tipo: "narracao", texto: "Ela levanta de uma vez. A coxinha quase cai. Os dois olham para ela.", proxima: "c6_13" },
    c6_13: { quem: "kaito", sprite: "kaito", texto: "Vai pra onde com essa pressa?", proxima: "c6_14" },
    c6_14: { quem: "eu", texto: "Praça. Eu combinei uma coisa.", proxima: "c6_15" },
    c6_15: { tipo: "narracao", texto: "O Kaito não pergunta mais nada. Ele nunca pergunta mais nada. Mas, por um segundo, ele olha para a direção da praça do balanço. E depois para o chão.", proxima: "c6_16" },
    c6_16: { quem: "kaito", texto: "Vai. Corre.", proxima: "c6_17" },
    c6_17: { tipo: "narracao", sprite: "blake", texto: "Quando ela vira a esquina, o Blake dá um empurrão leve no ombro do Kaito. Sem motivo. O Kaito não sai do lugar. Os dois ficam sentados no meio-fio, sem falar nada, olhando para a esquina vazia.", proxima: "c6_18" },
    c6_18: { tipo: "narracao", cenario: "rua", transicao: "tempo", sprite: null, texto: "Ela corre. Pelo mercado, pela rua da padaria, pela ladeira da igreja. Sem segurar o passo. Sem medo de descobrir o quanto consegue.", proxima: "c6_cam1" },
    c6_cam1: { caminhos: [
      { flag: "Chega_antes_Takeo", proxima: "c6_antes" }
    ], proxima: "c6_19" },
    c6_antes: { tipo: "pensamento", texto: "Eu prometi que ia chegar antes. Pra ele não ficar esperando. Eu prometi.", proxima: "c6_19" },
    c6_19: { tipo: "narracao", cenario: "parquinho", texto: "Quatro e cinquenta e dois. A praça do balanço aparece no fim da rua. O sol está baixo, laranja, batendo nas correntes de ferro.", proxima: "c6_20" },
    c6_20: { tipo: "narracao", sprite: "takeo", texto: "E, sentado no balanço da esquerda, o dela, o de sempre, com um pote de bolinho de frango no colo e as mãos apertando a corrente, o Takeo. Ele já está lá. Faz tempo. Dá para ver pelo jeito que ele balança, devagar, só com a ponta do pé.", proxima: "c6_21" },
    c6_21: { tipo: "narracao", texto: "Ele vê ela no fim da rua. E para de balançar.", proxima: "c6_22" },
    c6_22: { tipo: "pensamento", texto: "Na outra vida, eu nunca voltei pra esse balanço. Nunca.", proxima: "c6_23" },
    c6_23: { tipo: "pensamento", texto: "Hoje eu voltei correndo.", proxima: "ep_fim" },

    // Fim do Capítulo 21 (crie a entrada "capitulo21" em dados/capitulos.js). O balanço continua no Capítulo 22.
    ep_fim: { fim: "capitulo21" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 22 (anotações do roteiro)
 *  • O balanço: o Takeo vai falar "aquela coisa". Ele chegou antes dela.
 *  • Lan house todo sábado com o Kaito e o Blake (Lan_todo_sabado). O Blake nunca tinha chamado ninguém.
 *  • O Kaito olhou para a direção da praça quando ela saiu correndo. Ele não perguntou.
 *  • O nome dela no jogo: Nick_Raposa / Nick_Frango / Nick_Segunda_Chance.
 *
 * ESCOLHAS DO CAPÍTULO (5)
 *  1 O nome no jogo · 2 O Kaito sozinho no meio de três · 3 O último golpe
 *  4 A última luta · 5 Sábado que vem
 *
 * FLAGS NOVAS
 *  Nick_Raposa · Nick_Frango · Nick_Segunda_Chance · Entrou_junto_Kaito_jogo · Esperou_Kaito_cair
 *  Combo_tres_jogo · Ganhou_tres_zero · Deixou_Kaito_ganhar · Danca_Raposa · Kaito_entra_frente
 *  Blake_guarda_cura · Backdoor_Raposa · Lan_todo_sabado · Sem_melhor_de_cinco · Ensina_Raposa
 */