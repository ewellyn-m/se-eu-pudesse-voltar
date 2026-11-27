/*
 * =====================================================================
 *  CAPÍTULO 38 — Forno de verdade
 *  Sábado, logo depois do Capítulo 37.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Cenas com os cinco meninos em TODAS as rotas. Bloco de rota à noite.
 *
 *  O QUE ACONTECE
 *    • Manhã: o Kaito busca a SN de moto às nove e quarenta. Ela leva a farinha fechada e uma tesoura.
 *    • Lojinha: o Kaito ensina a fazer cookie com o forno de verdade. Mão em cima da mão, farinha no nariz,
 *      os dois sentados no chão na frente do forno esperando. Ele quase fala do hall. O Ryuji entra gritando.
 *    • Tarde: lan house. Torneio de Arena dos Reinos. Time: SN, Kaito, Blake, Ryuji e Victor.
 *      O Takeo, com o braço engessado, é o técnico. A SN vira outro ser humano jogando.
 *      Os cookies feitos com o Kaito: "Esses ela fez comigo. Esses pode."
 *    • Bloco de rota à noite.
 *
 *  REGRAS
 *    • O Kaito busca a SN de moto todo dia. Gangue não entra na escola (hoje é sábado, sem escola).
 *    • Sem xadrez no Ren. O Ren não manda mensagem. (Ele não aparece neste capítulo.)
 *    • Arena dos Reinos: jogo fictício. A SN joga xingando de jeito criativo, sem palavrão pesado.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Kaito, Tio do Kaito, Ryuji, Blake, Victor, Takeo, Mio (mensagem), Mãe.
 *    Sem nome / rótulo: Dono da lan house, Jogador adversário (nick no chat).
 *
 *  CENÁRIOS
 *    Quarto / hall → "quarto-sn" e "apartamento" · Lojinha e lan house → "beco-mercado"
 *    Rua → "saida-colegio"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Rota_*, Farelo_Kaito, Faco_de_novo, Teto_Kaito, Subiu_atras, Silencio_mae.
 *
 *  Crie a entrada "capitulo38" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo38", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — SÁBADO =================== */
    // Cenário: quarto da SN e hall, sábado de manhã. Música: leve, de fim de semana.
    c1_01: { roupa: "fora", tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Sábado, 8h30 — Cena 1", sprite: null, texto: "Sábado. Ela acordou às oito e meia, o que para um sábado é cedo e para uma sexta seria um milagre. Dormiu bem pela primeira vez na semana inteira. Sem sonho de hall. Sem sonho de prédio sem parede. Só um sonho esquisito em que o Caramelo era o inspetor geral.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "Em cima da cômoda, desde ontem à noite, separados como equipamento de missão: um pacote de farinha fechado, uma tesoura, um elástico de cabelo extra, e o pote de tampa azul, vazio, lavado pelo Kaito no banheiro masculino com o Ryuji segurando o sabão.", proxima: "c1_03" },
    c1_03: { tipo: "pensamento", texto: "Hoje eu não vou explodir nada. Hoje eu vou abrir a farinha com tesoura, quebrar o ovo com faca, e não vou dormir na frente do forno.", proxima: "c1_04" },
    c1_04: { tipo: "pensamento", texto: "E eu vou passar a manhã inteira na lojinha com o Kaito. Do lado dele. Na frente de um forno quente. Sem a Serena. Sem a escola. Sem ninguém.", proxima: "c1_05" },
    c1_05: { tipo: "pensamento", texto: "...Eu vou explodir alguma coisa. Eu sinto.", proxima: "c1_06" },
    c1_06: { sprite: "mae", tipo: "narracao", cenario: "cozinha", transicao: "tempo", legenda: "9h40", texto: "Na cozinha, a mãe está de folga, de pijama, tomando café na caneca de bolinha, com o jornal do bairro aberto. Ela olha para a filha passando com a farinha embaixo do braço e a tesoura na mão.", proxima: "c1_07" },
    c1_07: { quem: "mae", texto: "Vai cozinhar de novo?", proxima: "c1_08" },
    c1_08: { quem: "eu", texto: "Vou aprender. Na lojinha. O forno é de verdade.", proxima: "c1_09" },
    c1_09: { quem: "mae", texto: "Com o Kaito.", proxima: "c1_10" },
    c1_10: { quem: "eu", texto: "Com o tio do Kaito. E com o Kaito. Mas principalmente com o forno.", proxima: "c1_cam_mae" },
    c1_cam_mae: { caminhos: [
      { flag: "Silencio_mae", proxima: "c1_mae_ouviu" },
      { flag: "Teto_Kaito", proxima: "c1_mae_teto" }
    ], proxima: "c1_11" },
    c1_mae_ouviu: { quem: "mae", texto: "Hm. Ontem ele limpou o teto muito bem. E fez muito silêncio. Muito, muito silêncio. Eu ouvi o silêncio.", proxima: "c1_11" },
    c1_mae_teto: { quem: "mae", texto: "Hm. Ontem ele limpou o teto muito bem. Melhor que você. Diz pra ele que ele está liberado de lavar louça aqui pro resto da vida.", proxima: "c1_11" },
    c1_11: { quem: "mae", texto: "Leva um casaco. E não deixa ele te ensinar a cortar cebola. Você vai cortar o dedo.", proxima: "c1_12" },
    c1_12: { cenario: "frente-casa-sn", transicao: "tempo", sprite: null, tipo: "narracao", texto: "O celular vibra. “Tô embaixo, desce.” Ela desce os três degraus do hall devagar, pisando em cima da fita preta, com a farinha abraçada no peito.", proxima: "c1_13" },
    c1_13: { tipo: "narracao", sprite: "kaito", texto: "Hoje ele não está de uniforme. Está de jaqueta preta, camiseta branca e calça jeans, com o cabelo meio molhado, como quem saiu do banho com pressa. Ela nunca viu ele sem uniforme num dia de sol. Ela fica parada no último degrau um segundo a mais do que precisa.", proxima: "c1_14" },
    c1_14: { quem: "kaito", texto: "...Você trouxe farinha.", proxima: "c1_15" },
    c1_15: { quem: "eu", texto: "Fechada. E uma tesoura. Pra abrir.", proxima: "c1_16" },
    c1_16: { tipo: "narracao", texto: "Ele olha para a tesoura na mão dela. Depois para ela. E ri, de verdade, com os dentes, do jeito que ele quase nunca ri.", proxima: "c1_17" },
    c1_17: { quem: "kaito", texto: "Tá. Hoje a gente não explode nada.", proxima: "c2_01" },

    /* =================== CENA 2 — A LOJINHA =================== */
    // Cenário: lojinha do tio, sábado 10h (usa "beco-mercado"). Música: violão, rádio velho do tio.
    c2_01: { tipo: "narracao", cenario: "loja-lamen", transicao: "tempo", legenda: "Lojinha, 10h — Cena 2", sprite: null, texto: "A lojinha ainda está fechada para o público, com a placa virada. Lá dentro, o rádio velho do tio toca uma música antiga, o caldo já está no fogo baixo para o almoço, e o aviso de despejo na parede agora diz “24”. Do lado, o protocolo da prefeitura.", proxima: "c2_02" },
    c2_02: { sprite: "tio_kaito", tipo: "narracao", texto: "O tio está sentado no banquinho da cozinha, de boné, com o cigarro apagado na boca. Ele vê ela entrar com a farinha e a tesoura e tira o cigarro da boca.", proxima: "c2_03" },
    c2_03: { quem: "tio_kaito", texto: "Então você é a menina dos cookies verdes.", proxima: "c2_04" },
    c2_04: { quem: "eu", texto: "Quem contou?", proxima: "c2_05" },
    c2_05: { quem: "tio_kaito", texto: "O Ryuji. O Victor. O Blake, com três palavras. O Takeo, com uma página inteira. Esse aqui não contou nada. Esse aqui chegou em casa ontem e ficou sentado olhando pro forno uma hora.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", sprite: "kaito", texto: "O Kaito, atrás do balcão, colocando um avental, fica com as orelhas vermelhas e finge que não ouviu. O tio ri, rouco, e levanta do banquinho.", proxima: "c2_07" },
    c2_07: { quem: "tio_kaito", texto: "Eu vou no mercado. Demoro umas duas horas. O forno é de vocês. Não quebrem a minha colher de pau. Ela é mais velha que ele.", proxima: "c2_08" },
    c2_08: { tipo: "narracao", sprite: null, texto: "Ele sai, devagar, de boné, e na porta para e olha para ela de novo. Aquele olhar da festa do caldo. Como quem procura uma coisa num rosto. Depois balança a cabeça, como quem desiste, e vai.", proxima: "c2_09" },
    c2_09: { tipo: "narracao", sprite: "kaito", texto: "Agora são só os dois. A lojinha vazia, o rádio, o cheiro de caldo. O Kaito estende um avental para ela. É do tio. É enorme. Fica até a canela dela.", proxima: "c2_10" },
    c2_10: { quem: "kaito", texto: "Vira.", proxima: "c2_11" },
    c2_11: { tipo: "narracao", texto: "Ela vira de costas. Ele pega as duas pontas da fita do avental e amarra atrás, na cintura dela, dando duas voltas porque sobra muito pano. Os dedos dele encostam na cintura dela, por cima da camiseta, enquanto ele faz o laço. Ele demora para fazer o laço. Muito.", proxima: "c2_12" },
    c2_12: { quem: "eu", texto: "...Kaito. É um laço.", proxima: "c2_13" },
    c2_13: { quem: "kaito", texto: "É um laço difícil. O avental é grande.", proxima: "c2_14" },
    c2_14: { tipo: "narracao", texto: "Ele termina. Dá um passo para trás. Ela vira. Os dois ficam se olhando um segundo, ela de avental até a canela, ele de avental do tamanho certo, no meio da cozinha da lojinha.", proxima: "c2_15" },
    c2_15: { quem: "kaito", texto: "Primeiro, a farinha. Com a tesoura.", proxima: "c2_16" },
    c2_16: { tipo: "narracao", texto: "Ela corta o pacote com a tesoura. Devagar. Com muito cuidado. A farinha não explode. Ela levanta os braços, vitoriosa, como quem ganhou uma partida, e ele bate palma duas vezes, sério, como juiz.", proxima: "c2_17" },
    c2_17: { quem: "kaito", texto: "Agora, a manteiga. Ela tem que estar mole. A sua estava dura de geladeira. Por isso a colher quebrou.", proxima: "c2_18" },
    c2_18: { tipo: "pensamento", texto: "A colher quebrou porque eu tenho a força de uma família inteira de mulheres que levantam viga. Mas tudo bem. Manteiga dura. Vamos com essa versão.", proxima: "c2_19" },
    c2_19: { tipo: "narracao", texto: "Ela pega a colher de pau do tio, a mais velha que o Kaito. Começa a misturar a manteiga com o açúcar. Com cuidado. Força de passarinho. A colher range.", proxima: "c2_20" },
    c2_20: { quem: "kaito", texto: "Espera. Você está segurando errado.", proxima: "c2_21" },
    c2_21: { tipo: "narracao", texto: "Ele chega por trás dela. Coloca a mão dele em cima da mão dela, na colher. A outra mão dele segura a tigela, do outro lado, e os braços dele ficam um de cada lado dela. Ela fica presa entre a bancada e ele. O peito dele encostado nas costas dela.", proxima: "c2_22" },
    c2_22: { quem: "kaito", texto: "Assim. Devagar. Em círculo. Deixa o pulso solto. A força é do braço, não da mão.", proxima: "c2_23" },
    c2_23: { tipo: "narracao", texto: "A voz dele sai em cima da cabeça dela, baixa. A mão dele guia a mão dela, em círculos, devagar. Ela não está olhando para a massa. Ela está olhando para a mão dele em cima da dela. Os dedos dele cobrem os dela inteiros.", proxima: "c2_24" },
    c2_24: { tipo: "pensamento", texto: "Ele está muito perto. Ele está muito, muito perto. Ele está respirando no meu cabelo. Eu não lembro o que é manteiga.", proxima: "c2_25" },
    c2_25: { quem: "kaito", texto: "Está vendo? Ficou cremoso.", proxima: "c2_26" },
    c2_26: { quem: "eu", texto: "...Ficou.", proxima: "c2_27" },
    c2_27: { tipo: "narracao", texto: "Ele não solta. A massa já está cremosa. Os dois sabem. A mão dele continua em cima da dela, parada, na colher parada. O rádio velho do tio toca uma música lenta, de violino. Ninguém mexe nada.", proxima: "c2_esc1" },

    // ▶ ESCOLHA 1 — A mão na colher
    c2_esc1: { escolhas: [
      { texto: "A. Virar a mão por baixo da dele. Devagar. Até as palmas ficarem encostadas.", proxima: "c2_1a_1", pontos: { kaito: 3 }, flags: ["Palmas_Kaito"] },
      { texto: "B. “E agora, professor? Ovo?” Com a voz tremendo um pouco.", proxima: "c2_1b_1", pontos: { kaito: 2 }, flags: ["Professor_Kaito"] },
      { texto: "C. Encostar as costas no peito dele. Só um pouco. Só para descansar.", proxima: "c2_1c_1", pontos: { kaito: 3 }, flags: ["Encostou_Kaito"] }
    ]},
    c2_1a_1: { tipo: "narracao", texto: "Ela solta a colher. Vira a mão, devagar, por baixo da dele, até a palma dela ficar encostada na palma dele. Os dedos dela entre os dedos dele. A colher fica sozinha, em pé, na massa.", proxima: "c2_1a_2" },
    c2_1a_2: { tipo: "narracao", texto: "Ele fica completamente parado. Atrás dela, ela sente ele parar de respirar. Depois, bem devagar, os dedos dele fecham em volta dos dela. Seguram. Não soltam.", proxima: "c2_1a_3" },
    c2_1a_3: { tipo: "narracao", texto: "Nenhum dos dois fala nada. O violino do rádio termina. Começa uma propaganda de colchão. Os dois começam a rir ao mesmo tempo, baixinho, mas ele não solta a mão.", proxima: "c2_28" },
    c2_1b_1: { quem: "eu", texto: "E agora, professor? Ovo?", proxima: "c2_1b_2" },
    c2_1b_2: { tipo: "narracao", texto: "A voz dela sai tremendo. Ele ouve. Ela sente que ele ouve, porque a mão dele aperta a dela um pouco, uma vez, antes de soltar.", proxima: "c2_1b_3" },
    c2_1b_3: { quem: "kaito", texto: "...Ovo. Com a faca. De longe. Como quem desarma uma bomba.", proxima: "c2_1b_4" },
    c2_1b_4: { quem: "eu", texto: "Como você sabe que eu quebrei com a faca ontem?", proxima: "c2_1b_5" },
    c2_1b_5: { quem: "kaito", texto: "A sua mãe me mandou uma foto. Ela tem uma pasta no celular. Chama “Desastres da SN”.", proxima: "c2_28" },
    c2_1c_1: { tipo: "narracao", texto: "Ela encosta as costas no peito dele. Só um pouco. Como quem cansa. Ele fica duro como uma porta. Depois relaxa, devagar, e o queixo dele quase encosta no topo da cabeça dela.", proxima: "c2_1c_2" },
    c2_1c_2: { tipo: "narracao", texto: "Eles ficam assim. Ela encostada nele, ele segurando a mão dela na colher. A massa cremosa esperando. O caldo no fogo baixo. A lojinha inteira quieta, só o rádio.", proxima: "c2_1c_3" },
    c2_1c_3: { quem: "kaito", texto: "...A massa vai ficar boa.", proxima: "c2_1c_4" },
    c2_1c_4: { quem: "eu", texto: "Vai.", proxima: "c2_28" },

    // (todas as opções continuam aqui)
    c2_28: { tipo: "narracao", sprite: null, transicao: "tempo", texto: "O resto da massa vai mais rápido. Ovo com a faca, de longe. Farinha peneirada, que ele ensina a peneirar batendo de leve na borda, e ela bate de leve demais e nada cai, e depois forte demais e cai tudo, e uma nuvem pequena sobe e pousa no nariz dela.", proxima: "c2_29" },
    c2_29: { tipo: "narracao", sprite: "kaito", texto: "Ele olha para o nariz dela, branco de farinha. Ri. E sem pensar, estica a mão e tira com o polegar. Devagar. O polegar dele passa pela ponta do nariz dela, e para.", proxima: "c2_cam_far" },
    c2_cam_far: { caminhos: [
      { flag: "Farelo_Kaito", proxima: "c2_far" }
    ], proxima: "c2_30" },
    c2_far: { quem: "kaito", texto: "Agora a gente está quite. Ontem você tirou o farelo da minha boca. Na frente da escola inteira.", proxima: "c2_far2" },
    c2_far2: { tipo: "narracao", texto: "Ela lembra. O polegar no lábio dele. O “oooh” do pátio. Ela fica vermelha até a orelha, e ele também, e os dois voltam para a massa muito rápido.", proxima: "c2_30" },
    c2_30: { tipo: "narracao", sprite: null, texto: "Gotas de chocolate. Ela despeja o pacote inteiro. Ele pega um punhado e come. Ela pega outro punhado e come. Os dois olham um para o outro com a boca cheia e entendem que nenhum dos dois vai julgar o outro.", proxima: "c2_31" },
    c2_31: { tipo: "narracao", texto: "Ele mostra como fazer as bolinhas, todas do mesmo tamanho, com uma colher de sorvete. As dela saem tortas. As dele saem perfeitas. Na forma, as bolinhas dele ficam numa fileira reta, e as dela numa fileira que parece uma serpente bêbada.", proxima: "c2_32" },
    c2_32: { quem: "eu", texto: "As suas são perfeitas. As minhas parecem batata.", proxima: "c2_33" },
    c2_33: { quem: "kaito", texto: "As suas têm personalidade.", proxima: "c2_34" },
    c2_34: { tipo: "narracao", texto: "Ele coloca a forma no forno. Cento e oitenta graus. Liga o cronômetro do fogão, um timer de ponteiro, velho, que faz tique-taque. Doze minutos.", proxima: "c2_35" },
    c2_35: { quem: "kaito", texto: "E agora a gente espera. Em pé. Olhando. Sem sentar no chão.", proxima: "c2_36" },
    c2_36: { quem: "eu", texto: "A minha mãe te contou isso também?", proxima: "c2_37" },
    c2_37: { quem: "kaito", texto: "A pasta “Desastres da SN” tem foto de você dormindo sentada no chão da cozinha às seis da manhã.", proxima: "c3_01" },

    /* =================== CENA 3 — DOZE MINUTOS =================== */
    // Cenário: cozinha da lojinha, na frente do forno. Música: tique-taque, depois só o forno.
    c3_01: { tipo: "narracao", transicao: "tempo", legenda: "Doze minutos — Cena 3", texto: "Eles ficam em pé na frente do forno por dois minutos. Depois o Kaito senta no chão, encostado no armário, e ela olha para ele de sobrancelha levantada.", proxima: "c3_02" },
    c3_02: { quem: "kaito", texto: "Eu posso sentar. Eu não durmo na frente do forno.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", texto: "Ela senta do lado dele, no chão, encostada no mesmo armário. Os ombros se encostam. Pela portinha do forno, dá para ver as bolinhas, as dele e as dela, começando a derreter e a virar cookie, devagar, todas juntas.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", texto: "O tique-taque do timer. O cheiro de chocolate começando a subir. O rádio velho tocando outra música lenta. Os dois em silêncio, olhando para o forno como quem assiste televisão.", proxima: "c3_05" },
    c3_05: { quem: "kaito", texto: "Eu sentava aqui quando era pequeno. Nesse lugar. Quando o tio fazia pão de queijo pra vender. Eu ficava olhando o forno até ele me mandar ir pra escola.", proxima: "c3_06" },
    c3_06: { quem: "eu", texto: "Sozinho?", proxima: "c3_07" },
    c3_07: { tipo: "narracao", texto: "Ele não responde logo. Fica olhando para o forno, para as bolinhas derretendo.", proxima: "c3_08" },
    c3_08: { quem: "kaito", texto: "...Quase sempre.", proxima: "c3_09" },
    c3_09: { tipo: "pensamento", texto: "Quase sempre. Não sempre. Ele falou quase. O tio falou de uma menina pequenininha que sentava no banquinho do canto. Que vinha com alguém. Eu não lembro.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", texto: "Ela sente o peso do dia. Acordou às quatro e meia ontem. Dormiu bem hoje, mas não o suficiente para compensar uma semana inteira de hall, Serena, bacia hidrográfica e cookie verde. O calor do forno. O tique-taque. O ombro dele.", proxima: "c3_11" },
    c3_11: { tipo: "narracao", texto: "Ela não percebe quando a cabeça dela escorrega. Só percebe quando já está encostada no ombro dele. Ela vai levantar. Ela vai levantar agora. Ela não levanta.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", texto: "Ele não se mexe. Ela sente ele ficar parado, completamente parado, como quem tem um passarinho pousado no ombro e tem medo de espantar.", proxima: "c3_13" },
    c3_13: { quem: "kaito", texto: "...Você vai dormir na frente do forno de novo.", proxima: "c3_14" },
    c3_14: { quem: "eu", texto: "Não vou. Eu estou só descansando o pescoço.", proxima: "c3_15" },
    c3_15: { quem: "kaito", texto: "Tá.", proxima: "c3_16" },
    c3_16: { tipo: "narracao", texto: "Silêncio. Tique-taque. Ela sente, lá em cima da cabeça dela, ele respirar fundo. Uma vez. Duas. Como quem toma coragem para pular de um lugar alto.", proxima: "c3_17" },
    c3_17: { quem: "kaito", texto: "Sobre terça. No hall.", proxima: "c3_18" },
    c3_18: { tipo: "narracao", texto: "Ela abre os olhos. Não levanta a cabeça. Fica olhando para o forno, com o coração batendo tão forte que ela tem certeza de que ele sente pelo ombro.", proxima: "c3_19" },
    c3_19: { quem: "kaito", texto: "Foi sem querer. Eu sei que foi sem querer. Qualquer um diria que foi sem querer. Mas eu...", proxima: "c3_20" },
    c3_20: { tipo: "narracao", texto: "Ele para. Ela espera. O timer faz tique-taque. Ele respira de novo.", proxima: "c3_21" },
    c3_21: { quem: "kaito", texto: "Eu não quero que tenha sido só sem querer.", proxima: "c3_22" },
    c3_22: { tipo: "narracao", efeito: "eco", texto: "...", proxima: "c3_23" },
    c3_23: { tipo: "pensamento", texto: "Ele falou. Ele falou. O Kaito, que desvia pra fita preta, que desvia pro pão de queijo, que coloca café no sal. Ele falou.", proxima: "c3_24" },
    c3_24: { tipo: "narracao", texto: "Ela levanta a cabeça do ombro dele. Devagar. Vira o rosto. Ele está olhando para ela, de perto, muito de perto, com as orelhas vermelhas e os olhos muito sérios, esperando.", proxima: "c3_esc2" },

    // ▶ ESCOLHA 2 — Na frente do forno
    c3_esc2: { escolhas: [
      { texto: "A. “Eu também não quero.”", proxima: "c3_2a_1", pontos: { kaito: 3 }, flags: ["Tambem_nao_quero"] },
      { texto: "B. Não falar nada. Chegar um pouco mais perto. Só um pouco.", proxima: "c3_2b_1", pontos: { kaito: 3 }, flags: ["Chegou_perto"] },
      { texto: "C. “Eu queria mais uns segundos.” E na hora, morrer de vergonha.", proxima: "c3_2c_1", pontos: { kaito: 3 }, flags: ["Mais_segundos"] }
    ]},
    c3_2a_1: { quem: "eu", texto: "Eu também não quero.", proxima: "c3_2a_2" },
    c3_2a_2: { tipo: "narracao", texto: "Ele fica parado. Ela vê a frase entrar nele devagar, como água. Os olhos dele vão para a boca dela. Ficam. Ele chega mais perto. Ela não se afasta.", proxima: "c3_25" },
    c3_2b_1: { tipo: "narracao", texto: "Ela não fala nada. Ela chega mais perto. Só um pouco. O suficiente para ele entender. Ele entende. Os olhos dele vão para a boca dela, e voltam para os olhos, como quem pede licença.", proxima: "c3_2b_2" },
    c3_2b_2: { tipo: "narracao", texto: "Ela não diz não. Ele chega mais perto também.", proxima: "c3_25" },
    c3_2c_1: { quem: "eu", texto: "Eu queria mais uns segundos.", proxima: "c3_2c_2" },
    c3_2c_2: { tipo: "narracao", texto: "Ela fala e, na mesma hora, cobre o rosto com as duas mãos, de vergonha. Ele fica parado. Depois ri, baixo, pelo nariz. E estica a mão, devagar, e tira as mãos dela do rosto, uma de cada vez, segurando pelos pulsos.", proxima: "c3_2c_3" },
    c3_2c_3: { quem: "kaito", texto: "...Quantos?", proxima: "c3_2c_4" },
    c3_2c_4: { tipo: "narracao", texto: "Ela não consegue responder. Ele não espera resposta. Ele chega mais perto.", proxima: "c3_25" },

    // (todas as opções continuam aqui)
    c3_25: { tipo: "narracao", texto: "Centímetros. Dois. Um. Ela sente a respiração dele. Fecha os olhos.", proxima: "c3_26" },
    c3_26: { tipo: "narracao", efeito: "tremor", texto: "TRIIIIIM. O timer do forno dispara. Alto, metálico, desesperado, no meio da cozinha, como um alarme de incêndio.", proxima: "c3_27" },
    c3_27: { tipo: "narracao", texto: "Os dois pulam ao mesmo tempo. Ela bate a cabeça no armário. Ele bate o cotovelo no fogão. E no exato mesmo segundo, a porta da frente da lojinha abre com um estrondo.", proxima: "c3_28" },
    c3_28: { quem: "ryuji", sprite: "ryuji", texto: "LAN HOUSE! TORNEIO! UMA HORA DA TARDE! FALTOU UM DO TIME DO CARA DO PRIMEIRO ANO E ELE ACEITOU A GENTE NO LUGAR! O PRÊMIO É UMA PIZZA GIGANTE E UM MÊS DE HORA GRÁTIS!", proxima: "c3_29" },
    c3_29: { tipo: "narracao", sprite: null, texto: "Ele entra correndo até a cozinha, com o capacete amarelo debaixo do braço, e para. Vê os dois no chão. Ela segurando a cabeça. O Kaito segurando o cotovelo. Os dois vermelhos até o pescoço. O timer ainda tocando.", proxima: "c3_30" },
    c3_30: { quem: "ryuji", sprite: "ryuji", texto: "...Por que vocês estão no chão?", proxima: "c3_31" },
    c3_31: { quem: "kaito", sprite: "kaito", texto: "O forno.", proxima: "c3_32" },
    c3_32: { quem: "ryuji", sprite: "ryuji", texto: "O forno derrubou vocês?", proxima: "c3_33" },
    c3_33: { quem: "kaito", sprite: "kaito", texto: "Ryuji. Desliga o timer.", proxima: "c3_34" },
    c3_34: { tipo: "narracao", sprite: null, texto: "O Ryuji desliga. O silêncio volta, enorme. O Kaito levanta, abre o forno, tira a forma com o pano, muito rápido, sem olhar para ninguém.", proxima: "c3_35" },
    c3_35: { tipo: "narracao", texto: "Os cookies estão perfeitos. Dourados. Os dele, redondos, em fileira. Os dela, tortos, em serpente, mas dourados também, cheirando a chocolate, sem nenhum preto, sem nenhum verde.", proxima: "c3_36" },
    c3_36: { quem: "ryuji", sprite: "ryuji", texto: "...Eles não estão verdes. Eles estão... bonitos. SN, você evoluiu. Em um dia. Isso é treinamento de bombeiro.", proxima: "c3_37" },
    c3_37: { tipo: "pensamento", texto: "Um centímetro. Faltou um centímetro. E um timer. E um Ryuji.", proxima: "c3_38" },
    c3_38: { tipo: "pensamento", texto: "Ele falou “eu não quero que tenha sido só sem querer”. Isso ninguém tira de mim. Nem o timer. Nem o Ryuji.", proxima: "c3_39" },
    c3_39: { tipo: "narracao", sprite: "kaito", texto: "O Kaito coloca os cookies num prato. Pega o maior dela, o mais torto, o que parece uma batata, e come primeiro. Mastiga. Olha para ela. E faz uma cara que não é de quem está sendo gentil. É de quem gostou de verdade.", proxima: "c3_40" },
    c3_40: { quem: "kaito", texto: "Esse ficou bom.", proxima: "c3_41" },
    c3_41: { quem: "eu", texto: "Esse você que fez.", proxima: "c3_42" },
    c3_42: { quem: "kaito", texto: "A gente fez.", proxima: "c4_01" },

    /* =================== CENA 4 — A LAN HOUSE =================== */
    // Cenário: lan house do bairro, sábado à tarde (usa "beco-mercado"). Música: eletrônica, de jogo.
    c4_01: { tipo: "narracao", cenario: "lan-house", transicao: "tempo", legenda: "Lan house, 13h — Cena 4", sprite: null, texto: "A lan house do bairro está mais cheia do que ela já viu. Torneio de sábado. Na parede, um cartaz feito à mão: “TORNEIO ARENA DOS REINOS — PRÊMIO: PIZZA GIGANTE + 1 MÊS DE HORA GRÁTIS”. Embaixo, alguém desenhou uma pizza com cara de choro.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "O time deles está na fileira do fundo, cinco computadores lado a lado. O Ryuji já está sentado, com o fone no pescoço, dando soquinho no ar. O Blake ocupa uma cadeira e meia, com a lancheira térmica azul no colo. O Victor chegou de camisa social, como se fosse uma final de campeonato mundial.", proxima: "c4_03" },
    c4_03: { sprite: "victor", quem: "victor", texto: "Hoje eu vim com roupa de vitória. Gatinha... SN. Você vai jogar do meu lado. Eu preciso de proteção. Eu sou muito ruim. Eu sou muito, muito ruim.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", sprite: "takeo:machucado", texto: "E na ponta, numa cadeira sem computador, com o braço engessado apoiado na mesa e uma prancheta emprestada da Hana no colo, o Takeo. De boné virado para trás. Com um apito pendurado no pescoço.", proxima: "c4_05" },
    c4_05: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu não posso jogar com um braço. Então eu sou o técnico. Eu assisti quarenta vídeos de estratégia ontem à noite. Eu tenho um apito.", proxima: "c4_06" },
    c4_06: { quem: "eu", texto: "Takeo, pra que o apito?", proxima: "c4_07" },
    c4_07: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu não sei. Mas técnico tem apito.", proxima: "c4_08" },
    c4_08: { tipo: "narracao", sprite: null, texto: "O Kaito coloca o pote de tampa azul em cima da mesa, no meio dos cinco computadores. Cheio. Os cookies da manhã. Os dele e os dela, misturados.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "O Victor olha para o pote. O Ryuji olha para o pote. O Blake olha para o pote. Ninguém estica a mão. Todo mundo olha para o Kaito.", proxima: "c4_10" },
    c4_10: { sprite: "victor", quem: "victor", texto: "...Líder. São seus. Você disse ontem. Ninguém come.", proxima: "c4_11" },
    c4_11: { quem: "kaito", sprite: "kaito", texto: "Esses ela fez comigo. Esses pode.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", sprite: null, texto: "Quatro mãos entram no pote ao mesmo tempo. O Ryuji morde, para, e faz uma cara de espanto tão grande que quase cai da cadeira.", proxima: "c4_13" },
    c4_13: { quem: "ryuji", sprite: "ryuji", texto: "Ele não quebra o dente. Ele é macio. Ele é macio por dentro. SN. O que aconteceu? Você foi pra um retiro espiritual de cookie?", proxima: "c4_14" },
    c4_14: { quem: "blake", sprite: "blake", texto: "A terceira está melhor que a segunda.", proxima: "c4_15" },
    c4_15: { tipo: "narracao", sprite: null, texto: "O Blake fala isso sério, comendo o segundo, e o time inteiro ri, e ela ri, e ele olha para ela com a cara que parece muito com carinho, e depois desvia para a tela.", proxima: "c4_16" },
    c4_16: { quem: "desconhecido", rotulo: "Dono da lan house", texto: "Time do fundo! Vocês são os próximos! Contra o time do Lucas do terceiro ano! Escolham os personagens!", proxima: "c4_17" },
    c4_17: { tipo: "narracao", texto: "A SN coloca o fone. Abre o jogo. Loga na conta dela. E, na mesma hora, alguma coisa muda nos ombros dela. Na postura. No olhar. O Kaito, do lado, percebe. Ele já viu isso uma vez, na lan, semanas atrás. Ele chega a cadeira um pouco para longe, por precaução.", proxima: "c4_18" },
    c4_18: { quem: "eu", texto: "Tá. Escuta todo mundo. Ryuji, você vai de lutador, no topo, e se você morrer antes do minuto cinco eu desligo o seu computador da tomada. Victor, suporte. Você fica do meu lado e cura. Só cura. Não pensa. Cura.", proxima: "c4_19" },
    c4_19: { sprite: "victor", quem: "victor", texto: "Sim, senhora.", proxima: "c4_20" },
    c4_20: { quem: "eu", texto: "Blake, tanque. No meio. Você é uma parede. Você não anda pra trás. Kaito, caçador. Você some na floresta e aparece onde eu mandar. Eu vou de atiradora. Na parte de baixo. Eu carrego.", proxima: "c4_21" },
    c4_21: { tipo: "narracao", texto: "Silêncio no time. O Takeo, na ponta, apita uma vez, sem saber por quê. O Blake faz que sim com a cabeça, muito sério. O Kaito olha para ela de lado, com o canto da boca subindo.", proxima: "c4_22" },
    c4_22: { quem: "kaito", sprite: "kaito", texto: "Sim, capitã.", proxima: "c5_01" },

    /* =================== CENA 5 — A PARTIDA =================== */
    // Cenário: lan house. Música: épica, de batalha.
    c5_01: { tipo: "narracao", transicao: "tempo", legenda: "Partida — Cena 5", sprite: null, texto: "A partida começa. Minuto um, tudo calmo. Minuto dois, o Ryuji morre. Sozinho. Sem ninguém do outro time perto. Ele andou para dentro da torre inimiga para ver como era por dentro.", proxima: "c5_02" },
    c5_02: { quem: "ryuji", sprite: "ryuji", texto: "EU QUERIA VER COMO ERA! TEM UMA LUZ AZUL BONITA LÁ DENTRO!", proxima: "c5_03" },
    c5_03: { quem: "eu", texto: "RYUJI, A LUZ AZUL É A TORRE TE MATANDO. É ASSIM QUE ELA MATA. COM LUZ AZUL BONITA.", proxima: "c5_04" },
    c5_04: { tipo: "narracao", texto: "No chat do jogo, alguém do time adversário escreve. O nick é “LucasDestruidor3000”.", proxima: "c5_05" },
    c5_05: { quem: "mensagem", rotulo: "Chat — LucasDestruidor3000", texto: "kkkkk o cara entrou na torre sozinho. time de iniciante. vai ser fácil. a atiradora de vcs nem saiu da base ainda", proxima: "c5_06" },
    c5_06: { tipo: "narracao", efeito: "tremor", texto: "A SN para. As mãos dela param em cima do teclado. O Kaito, do lado, vê os olhos dela estreitarem. Ele afasta a cadeira mais um pouco.", proxima: "c5_esc3" },

    // ▶ ESCOLHA 3 — O chat
    c5_esc3: { escolhas: [
      { texto: "A. Responder no chat: “Aproveita esses dois minutos de felicidade, LucasDestruidor. São os últimos da sua vida.”", proxima: "c5_3a_1", pontos: { kaito: 1, ryuji: 1 }, flags: ["Ultimos_minutos"] },
      { texto: "B. Não responder. Só jogar. Em silêncio. O silêncio mais assustador da lan house.", proxima: "c5_3b_1", pontos: { blake: 1, kaito: 1 }, flags: ["Silencio_jogo"] },
      { texto: "C. Falar alto, pra lan inteira ouvir: “LUCAS. LUCAS DO TERCEIRO ANO. EU VOU TE MANDAR DE VOLTA PRO PRIMEIRO.”", proxima: "c5_3c_1", pontos: { victor: 1, ryuji: 1 }, flags: ["Volta_primeiro"] }
    ]},
    c5_3a_1: { quem: "mensagem", rotulo: "Chat — SN", texto: "Aproveita esses dois minutos de felicidade, LucasDestruidor. São os últimos da sua vida. Escreve uma carta pra sua mãe.", proxima: "c5_3a_2" },
    c5_3a_2: { tipo: "narracao", texto: "Do outro lado da lan house, alguém do time adversário lê em voz alta e o grupo inteiro solta um “uuuuh”. O Victor, do lado dela, solta um “uuuuh” também, sem querer, e ela olha para ele, e ele cura ela imediatamente, com medo.", proxima: "c5_07" },
    c5_3b_1: { tipo: "narracao", texto: "Ela não responde. Ela não fala nada. Ela só joga. Rápido, preciso, sem uma palavra, com a cara completamente parada, só os dedos se mexendo no teclado como se fosse piano.", proxima: "c5_3b_2" },
    c5_3b_2: { quem: "blake", sprite: "blake", texto: "...Ela parou de falar.", proxima: "c5_3b_3" },
    c5_3b_3: { quem: "kaito", sprite: "kaito", texto: "É pior quando ela para de falar.", proxima: "c5_07" },
    c5_3c_1: { quem: "eu", texto: "LUCAS. LUCAS DO TERCEIRO ANO. EU VOU TE MANDAR DE VOLTA PRO PRIMEIRO.", proxima: "c5_3c_2" },
    c5_3c_2: { tipo: "narracao", texto: "A lan house inteira vira para ela. Uma menina de um metro e sessenta, com farinha ainda no cabelo, de fone, em pé na cadeira, apontando para a outra ponta da sala. Do outro lado, um menino magro de óculos fica pálido. É o Lucas.", proxima: "c5_3c_3" },
    c5_3c_3: { quem: "desconhecido", rotulo: "Dono da lan house", texto: "Ninguém em pé na cadeira!", proxima: "c5_07" },

    // (todas as opções continuam aqui)
    c5_07: { tipo: "narracao", sprite: null, transicao: "tempo", legenda: "Minuto oito", texto: "Minuto oito. Ela sai da base. E o jogo muda.", proxima: "c5_08" },
    c5_08: { quem: "eu", texto: "Victor, cura. CURA. Você está curando a árvore. Por que você está curando a árvore?!", proxima: "c5_09" },
    c5_09: { sprite: "victor", quem: "victor", texto: "Eu achei que a árvore era você!", proxima: "c5_10" },
    c5_10: { quem: "eu", texto: "A árvore é verde! Eu sou roxa! Eu tenho um arco! Árvore não tem arco!", proxima: "c5_11" },
    c5_11: { tipo: "narracao", texto: "Ela mata dois sozinha. Depois três. O LucasDestruidor3000 vem para cima dela, e ela desvia de uma habilidade, de outra, de outra, e atira três vezes, e ele cai. No chat, ela escreve.", proxima: "c5_12" },
    c5_12: { quem: "mensagem", rotulo: "Chat — SN", texto: "isso foi pela torre do ryuji. a luz azul era bonita sim, seu cretino de terceira categoria", proxima: "c5_13" },
    c5_13: { quem: "eu", texto: "KAITO! FLORESTA! AGORA! ATRÁS DO DRAGÃO!", proxima: "c5_14" },
    c5_14: { tipo: "narracao", sprite: "kaito", texto: "O Kaito aparece atrás do dragão, do nada, como se tivesse brotado do mato. Mata o caçador deles. Ela nem olha para a tela dele. Ela sabia exatamente onde ele estava.", proxima: "c5_15" },
    c5_15: { quem: "kaito", texto: "Como você sabia que eu estava lá?", proxima: "c5_16" },
    c5_16: { quem: "eu", texto: "Porque eu te mandei ir pra lá há trinta segundos e você sempre faz o que eu mando.", proxima: "c5_17" },
    c5_17: { tipo: "narracao", texto: "O Kaito não responde. Mas o Ryuji, renascido, ri tão alto que o time adversário inteiro ouve do outro lado da sala.", proxima: "c5_18" },
    c5_18: { quem: "ryuji", sprite: "ryuji", texto: "ELE SEMPRE FAZ O QUE ELA MANDA! TODO MUNDO OUVIU!", proxima: "c5_19" },
    c5_19: { quem: "kaito", sprite: "kaito", texto: "Ryuji. Foco.", proxima: "c5_20" },
    c5_20: { tipo: "narracao", sprite: "blake", texto: "No meio do mapa, o Blake é uma parede. Ele não anda para trás uma vez. Ele toma o dano de três inimigos ao mesmo tempo, com a vida quase acabando, e fica parado, protegendo ela, enquanto ela atira por trás dele.", proxima: "c5_21" },
    c5_21: { quem: "eu", texto: "BLAKE! Você vai morrer! Sai daí!", proxima: "c5_22" },
    c5_22: { quem: "blake", texto: "Não. Você está atrás de mim.", proxima: "c5_23" },
    c5_23: { tipo: "narracao", texto: "Ele fala isso sem tirar os olhos da tela, com a voz mais calma do mundo. Ele morre. Mas ela mata os três que estavam batendo nele. Um, dois, três. A tela pisca “TRIPLE KILL”. A lan house inteira grita.", proxima: "c5_24" },
    c5_24: { tipo: "pensamento", texto: "“Você está atrás de mim.” Ele morreu no jogo pra eu não morrer. Ele falou isso como se fosse a coisa mais óbvia do mundo.", proxima: "c5_25" },
    c5_25: { tipo: "narracao", sprite: "takeo:machucado", texto: "Na ponta, o Takeo apita três vezes, de pé, com a prancheta no ar. Ele anotou cada morte, cada desvio, cada tiro, com a mão boa, em letra torta.", proxima: "c5_26" },
    c5_26: { quem: "takeo", sprite: "takeo:machucado", texto: "Isso! Isso! Isso foi a jogada do vídeo trinta e dois! A atiradora protegida pelo tanque! Eu tenho ela desenhada aqui! SN, você é a melhor jogadora que eu já vi! E eu vi quarenta vídeos!", proxima: "c5_27" },
    c5_27: { tipo: "narracao", sprite: null, transicao: "tempo", legenda: "Minuto vinte e dois", texto: "Minuto vinte e dois. A base deles está caindo. O time do Lucas está desesperado. O chat está cheio de mensagens deles brigando entre eles. No último ataque, o Ryuji, que morreu nove vezes, entra correndo na base inimiga com o lutador dele e destrói a última torre sozinho.", proxima: "c5_28" },
    c5_28: { quem: "ryuji", sprite: "ryuji", texto: "A LUZ AZUL! EU FIZ A LUZ AZUL APAGAR! EU VINGUEI A MIM MESMO!", proxima: "c5_29" },
    c5_29: { tipo: "narracao", sprite: null, efeito: "tremor", texto: "A tela inteira fica dourada. “VITÓRIA”. A lan house explode. O Victor levanta e abraça o Blake, que fica parado sem saber o que fazer com os braços. O Ryuji pula em cima da cadeira e o dono grita de novo. O Takeo apita até ficar sem ar.", proxima: "c5_30" },
    c5_30: { tipo: "narracao", texto: "A SN tira o fone. Respira. E volta a ser ela mesma, de uma vez, como quem acorda. Ela olha para o lado. O Kaito está olhando para ela. Não para a tela. Para ela. Com uma cara que ela não consegue descrever.", proxima: "c5_31" },
    c5_31: { quem: "kaito", sprite: "kaito", texto: "...Você chamou ele de cretino de terceira categoria.", proxima: "c5_32" },
    c5_32: { quem: "eu", texto: "Ele mereceu.", proxima: "c5_33" },
    c5_33: { quem: "kaito", sprite: "kaito", texto: "Mereceu.", proxima: "c5_esc4" },

    // ▶ ESCOLHA 4 — Depois da vitória
    c5_esc4: { escolhas: [
      { texto: "A. Abraçar o time inteiro. Todo mundo junto. Até o Takeo, com cuidado com o gesso.", proxima: "c5_4a_1", pontos: { kaito: 1, takeo: 1, blake: 1, ryuji: 1, victor: 1 }, flags: ["Abraco_time"] },
      { texto: "B. Virar pro Blake. “Você morreu por mim.” Ele fica vermelho.", proxima: "c5_4b_1", pontos: { blake: 3 }, flags: ["Morreu_por_mim"] },
      { texto: "C. Bater a mão na mão do Kaito, um “toca aqui”. E não soltar logo.", proxima: "c5_4c_1", pontos: { kaito: 3 }, flags: ["Toca_aqui_Kaito"] }
    ]},
    c5_4a_1: { tipo: "narracao", texto: "Ela levanta e abraça o primeiro que vê, que é o Victor, e o Victor puxa o Ryuji, e o Ryuji puxa o Kaito, e o Kaito puxa o Blake, que vem sem reclamar, e o Takeo chega mancando e se enfia no meio pelo lado do braço bom, e os seis ficam num bolo de abraço no fundo da lan house, pulando, gritando, o apito do Takeo sendo esmagado no meio.", proxima: "c5_34" },
    c5_4b_1: { quem: "eu", texto: "Blake. Você morreu por mim.", proxima: "c5_4b_2" },
    c5_4b_2: { tipo: "narracao", texto: "O Blake fica vermelho. Das orelhas até o pescoço. Ele olha para a tela, onde o personagem dele está renascendo na base, e depois para ela.", proxima: "c5_4b_3" },
    c5_4b_3: { quem: "blake", texto: "É o trabalho do tanque.", proxima: "c5_4b_4" },
    c5_4b_4: { quem: "eu", texto: "Você não andou pra trás nem uma vez.", proxima: "c5_4b_5" },
    c5_4b_5: { quem: "blake", texto: "Você falou pra eu não andar.", proxima: "c5_4b_6" },
    c5_4b_6: { tipo: "narracao", texto: "Ele fala isso baixo, e ela vê o Kaito, do outro lado, ouvir, e olhar para o Blake, um segundo, de um jeito diferente. Depois desviar.", proxima: "c5_34" },
    c5_4c_1: { tipo: "narracao", texto: "Ela levanta a mão. Ele levanta a dele. As duas mãos batem no ar, um “toca aqui” alto. E não se separam. Os dedos se fecham, um em volta do outro, e ficam, no meio da lan house barulhenta.", proxima: "c5_4c_2" },
    c5_4c_2: { tipo: "narracao", texto: "Ninguém vê, porque todo mundo está olhando para a tela dourada. Só o Takeo, na ponta, com a prancheta. Ele vê. Ele abaixa a prancheta devagar. E depois volta a apitar, mais baixo.", proxima: "c5_34" },

    // (todas as opções continuam aqui)
    c5_34: { tipo: "narracao", transicao: "tempo", texto: "A pizza gigante chega às quatro. É do tamanho de uma roda de bicicleta. Eles comem em pé, em volta dos computadores, contando a partida de novo, cada um a sua versão. Na versão do Ryuji, ele ganhou sozinho. Na versão do Victor, a árvore era um personagem secreto.", proxima: "c5_35" },
    c5_35: { tipo: "narracao", texto: "O celular dela vibra. A Mio.", proxima: "c5_36" },
    c5_36: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "A REDE DE FOFOCA DISSE QUE UMA MENINA DE UM METRO E SESSENTA SUBIU NA CADEIRA DA LAN HOUSE E HUMILHOU O LUCAS DO TERCEIRO ANO. ERA VOCÊ. EU SEI QUE ERA VOCÊ. E O COOKIE? ME CONTA DO COOKIE. COMO FOI O FORNO?", proxima: "c5_37" },
    c5_37: { tipo: "pensamento", texto: "Como foi o forno. Um centímetro. Um timer. Um Ryuji. E “eu não quero que tenha sido só sem querer”.", proxima: "c5_38" },
    c5_38: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Depois eu te conto. Pessoalmente. Precisa de gestos.", proxima: "r_cam" },

    /* =================== ROTA — SÁBADO À NOITE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { tipo: "narracao", cenario: "beco-mercado", transicao: "tempo", legenda: "Sábado, 19h", sprite: "kaito", texto: "O Kaito leva ela em casa de moto. Mas não vai direto. Ele vira à esquerda onde devia virar à direita, e para numa rua alta do bairro, onde dá para ver a cidade inteira acendendo, com o céu ainda meio laranja.", proxima: "rk_02" },
    rk_02: { tipo: "narracao", texto: "Ele desliga a moto. Tira o capacete. Ela tira o dela. Os dois ficam sentados na moto parada, ela atrás, ele na frente, olhando as luzes.", proxima: "rk_03" },
    rk_03: { quem: "kaito", texto: "O timer.", proxima: "rk_04" },
    rk_04: { quem: "eu", texto: "O timer. E o Ryuji.", proxima: "rk_05" },
    rk_05: { quem: "kaito", texto: "Eu vou jogar aquele timer fora. O tio vai ter que comprar outro.", proxima: "rk_06" },
    rk_06: { tipo: "narracao", texto: "Ele vira para trás, na moto. Fica de lado, com uma perna de cada lado, olhando para ela. Agora não tem forno. Não tem timer. Não tem Ryuji. Tem uma rua alta e a cidade acendendo.", proxima: "rk_07" },
    rk_07: { quem: "kaito", texto: "O que eu falei hoje. Na frente do forno. Eu falei sério.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. “Eu sei.” E encostar a testa na dele.", proxima: "rk_a1", pontos: { kaito: 3 }, flags: ["Testa_Kaito"] },
      { texto: "B. “Então fala de novo. Sem timer.”", proxima: "rk_b1", pontos: { kaito: 3 }, flags: ["Fala_de_novo"] },
      { texto: "C. “Ainda falta um centímetro, Kaito.”", proxima: "rk_c1", pontos: { kaito: 3 }, flags: ["Falta_centimetro"] }
    ]},
    rk_a1: { quem: "eu", texto: "Eu sei.", proxima: "rk_a2" },
    rk_a2: { tipo: "narracao", texto: "Ela encosta a testa na dele. Ele fecha os olhos. Os dois ficam assim, testa com testa, na moto parada, com a cidade acesa lá embaixo, sem falar nada. Ninguém chega o centímetro. Ainda não. Mas ninguém se afasta.", proxima: "r_fim" },
    rk_b1: { quem: "eu", texto: "Então fala de novo. Sem timer.", proxima: "rk_b2" },
    rk_b2: { tipo: "narracao", texto: "Ele olha para ela. Respira fundo. Não desvia. Pela primeira vez, ele não desvia para fita preta, nem pão de queijo, nem café no sal.", proxima: "rk_b3" },
    rk_b3: { quem: "kaito", texto: "Eu não quero que tenha sido só sem querer. Eu quero que tenha mais. Com querer.", proxima: "rk_b4" },
    rk_b4: { tipo: "narracao", texto: "Ela não responde com palavra nenhuma. Ela só segura a jaqueta dele, na frente, com as duas mãos. E ele entende. E nenhum dos dois chega o centímetro, porque um carro passa buzinando lá embaixo, e os dois riem, e o momento fica guardado para outro dia. Mas fica.", proxima: "r_fim" },
    rk_c1: { quem: "eu", texto: "Ainda falta um centímetro, Kaito.", proxima: "rk_c2" },
    rk_c2: { tipo: "narracao", texto: "Ele ri, baixo, pelo nariz. Depois para de rir. Olha para a boca dela. Olha para os olhos dela.", proxima: "rk_c3" },
    rk_c3: { quem: "kaito", texto: "...Eu sei. Eu estou contando. Eu conto tudo. É o Blake que me ensinou.", proxima: "rk_c4" },
    rk_c4: { tipo: "narracao", texto: "Ele coloca o capacete de volta nela. Fecha a fivela embaixo do queixo dela. Devagar. E, antes de abaixar a viseira, encosta o polegar no queixo dela. Um segundo. Depois liga a moto.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { tipo: "narracao", cenario: "rua-noite", transicao: "tempo", legenda: "Sábado, 19h", sprite: "takeo:machucado", texto: "Na saída da lan, o Takeo pede para ela ir com ele até o ponto de ônibus, a pé. Ele tem que voltar para casa, e o Kaito ia levar ele, mas ele disse que preferia andar. Ele olha para ela quando diz isso.", proxima: "rt_02" },
    rt_02: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu vi. Na lan. Depois da vitória. O Kaito olhando pra você, e não pra tela. Eu não sei o que eu vi. Eu vi uma coisa.", proxima: "rt_03" },
    rt_03: { tipo: "narracao", texto: "Ele fala isso olhando para o chão, mancando devagar, com a prancheta da Hana embaixo do braço bom.", proxima: "rt_04" },
    rt_04: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu não vou perguntar. Eu só queria dizer que hoje foi o melhor sábado da minha vida. E eu nem joguei. Eu só fiquei olhando você jogar.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. “Você foi o melhor técnico do mundo. Com apito e tudo.”", proxima: "rt_a1", pontos: { takeo: 2 }, flags: ["Melhor_tecnico"] },
      { texto: "B. “E o que você viu, Takeo?”", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["O_que_viu"] },
      { texto: "C. Pegar o braço bom dele no ponto de ônibus. “Quando tirar o gesso, você joga do meu lado.”", proxima: "rt_c1", pontos: { takeo: 3 }, flags: ["Joga_do_lado"] }
    ]},
    rt_a1: { quem: "eu", texto: "Você foi o melhor técnico do mundo. Com apito e tudo.", proxima: "rt_a2" },
    rt_a2: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu apitei setenta e duas vezes. Eu contei. A Hana vai ficar orgulhosa.", proxima: "rt_a3" },
    rt_a3: { tipo: "narracao", texto: "Ele ri. O ônibus chega. Ele sobe, e pela janela acena com o braço bom e com o apito na boca, apitando uma última vez, e a motorista olha feio para ele.", proxima: "r_fim" },
    rt_b1: { quem: "eu", texto: "E o que você viu, Takeo?", proxima: "rt_b2" },
    rt_b2: { tipo: "narracao", texto: "Ele para no meio da calçada. Olha para ela. Muito tempo.", proxima: "rt_b3" },
    rt_b3: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu vi que você é feliz perto dele. E eu vi que você é feliz perto de mim também. Eu não sei se é o mesmo feliz. Eu estou pesquisando.", proxima: "rt_b4" },
    rt_b4: { tipo: "pensamento", texto: "Ele estudou quarenta vídeos de estratégia. Agora ele está estudando isso. O Takeo sempre pesquisa as coisas que doem.", proxima: "r_fim" },
    rt_c1: { tipo: "narracao", texto: "No ponto de ônibus, ela pega o braço bom dele, pela mão. Ele olha para a mão dela.", proxima: "rt_c2" },
    rt_c2: { quem: "eu", texto: "Quando tirar o gesso, você joga do meu lado. Suporte. Você cura melhor que o Victor.", proxima: "rt_c3" },
    rt_c3: { quem: "takeo", sprite: "takeo:machucado", texto: "Todo mundo cura melhor que o Victor. Ele curou uma árvore.", proxima: "rt_c4" },
    rt_c4: { tipo: "narracao", texto: "Ele não solta a mão dela até o ônibus chegar. E quando o ônibus chega, ele demora para subir, segurando a mão dela mais um segundo, como quem deixa um livro aberto na página certa.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { tipo: "narracao", cenario: "rua-noite", transicao: "tempo", legenda: "Sábado, 19h", sprite: "blake", texto: "Na saída da lan, o Blake está encostado na moto preta fosca, com a lancheira térmica vazia no braço. Ele espera os outros irem embora. Espera o Kaito ir com o Ryuji levar o Takeo no ponto. Fica.", proxima: "rb_02" },
    rb_02: { quem: "blake", texto: "Eu levo você. Se quiser.", proxima: "rb_03" },
    rb_03: { tipo: "narracao", texto: "Na garupa da moto dele, ela segura na jaqueta. A moto dele é mais alta que a do Kaito, e mais barulhenta, e ele dirige devagar, muito devagar, como quem carrega uma coisa que não pode cair.", proxima: "rb_04" },
    rb_04: { cenario: "frente-casa-sn-noite", transicao: "tempo", tipo: "narracao", texto: "Na frente do prédio dela, ele desliga. Não tira o capacete. Fala de dentro dele.", proxima: "rb_05" },
    rb_05: { quem: "blake", texto: "Hoje no jogo. “Você está atrás de mim.” Eu falei sem pensar.", proxima: "rb_06" },
    rb_06: { quem: "blake", texto: "Eu penso devagar. Mas aquilo eu não precisei pensar.", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. Tirar o capacete dele, devagar. “Fala de novo. Sem capacete.”", proxima: "rb_a1", pontos: { blake: 3 }, flags: ["Sem_capacete_Blake"] },
      { texto: "B. “Eu fico atrás de você no jogo. E na escada você fica atrás de mim. Tá certo assim.”", proxima: "rb_b1", pontos: { blake: 3 }, flags: ["Atras_Blake"] },
      { texto: "C. “Blake. Você está pensando em quê?”", proxima: "rb_c1", pontos: { blake: 2 }, flags: ["Pensando_Blake"] }
    ]},
    rb_a1: { tipo: "narracao", texto: "Ela solta a fivela do capacete dele e tira, devagar. Ele deixa. O cabelo dele sai amassado. Os olhos dele estão sérios, e um pouco assustados, como os de quem não esperava ser visto.", proxima: "rb_a2" },
    rb_a2: { quem: "eu", texto: "Fala de novo. Sem capacete.", proxima: "rb_a3" },
    rb_a3: { quem: "blake", texto: "...Você está atrás de mim.", proxima: "rb_a4" },
    rb_a4: { tipo: "narracao", texto: "Ele fala olhando para ela, e não é sobre jogo. Os dois sabem que não é sobre jogo. Ela devolve o capacete. Ele demora para colocar.", proxima: "r_fim" },
    rb_b1: { quem: "eu", texto: "Eu fico atrás de você no jogo. E na escada você fica atrás de mim. Tá certo assim.", proxima: "rb_b2" },
    rb_b2: { tipo: "narracao", texto: "O Blake fica parado. Depois levanta a viseira, só um pouco, só o suficiente para ela ver os olhos dele.", proxima: "rb_b3" },
    rb_b3: { quem: "blake", texto: "Tá certo assim.", proxima: "r_fim" },
    rb_c1: { quem: "eu", texto: "Blake. Você está pensando em quê?", proxima: "rb_c2" },
    rb_c2: { quem: "blake", texto: "Em quatrocentos e treze.", proxima: "rb_c3" },
    rb_c3: { quem: "eu", texto: "As vezes que o Kaito te ganhou?", proxima: "rb_c4" },
    rb_c4: { quem: "blake", texto: "É. Eu estou pensando se eu quero que vire quatrocentos e quatorze.", proxima: "rb_c5" },
    rb_c5: { tipo: "narracao", texto: "Ele fala isso, liga a moto, e vai embora antes que ela consiga entender. Ela fica na calçada, olhando a moto preta virar a esquina, entendendo devagar, do jeito dele.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { tipo: "narracao", cenario: "rua-noite", transicao: "tempo", legenda: "Sábado, 19h", sprite: "ryuji", texto: "Na saída da lan, o Ryuji espera ela na Relâmpago, com o capacete amarelo extra no braço. Ele ganhou o mês de hora grátis e está com a cara de quem ganhou na loteria.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", texto: "Um mês. Grátis. Eu vou jogar todo dia. Você vai jogar comigo todo dia. É o meu prêmio, eu decido.", proxima: "rr_03" },
    rr_03: { tipo: "narracao", texto: "No caminho, ele vai pela volta grande de novo. No sinal vermelho, na frente da floricultura fechada, ele desliga a moto. Fica parado.", proxima: "rr_04" },
    rr_04: { quem: "ryuji", texto: "Hoje de manhã. Na lojinha. Eu entrei e vocês estavam no chão. Vermelhos. E o timer tocando.", proxima: "rr_05" },
    rr_05: { quem: "ryuji", texto: "Eu não sou burro. Eu sou bem burro, mas não pra isso. Eu entrei na hora errada. Eu sempre entro na hora errada. Igual na torre.", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. “Você entrou na hora errada. Mas a luz azul era bonita.”", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Luz_azul_Ryuji"] },
      { texto: "B. “Ryuji, você está bem?”", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Esta_bem_Ryuji"] },
      { texto: "C. Encostar a testa do capacete nas costas dele. Até o sinal abrir. E fechar. E abrir.", proxima: "rr_c1", pontos: { ryuji: 3 }, flags: ["Testa_Ryuji_38"] }
    ]},
    rr_a1: { quem: "eu", texto: "Você entrou na hora errada. Mas a luz azul era bonita.", proxima: "rr_a2" },
    rr_a2: { tipo: "narracao", texto: "O Ryuji ri. Alto. Depois para. E fica com aquele sorriso menor, mais quieto, que ele só faz para ela.", proxima: "rr_a3" },
    rr_a3: { quem: "ryuji", texto: "Era bonita. Valeu morrer por ela.", proxima: "r_fim" },
    rr_b1: { quem: "eu", texto: "Ryuji, você está bem?", proxima: "rr_b2" },
    rr_b2: { quem: "ryuji", texto: "Estou. Estou ótimo. Eu ganhei um mês de hora grátis.", proxima: "rr_b3" },
    rr_b3: { tipo: "narracao", texto: "Ele fala rápido demais. Depois fica quieto. O sinal abre. Ele não liga a moto.", proxima: "rr_b4" },
    rr_b4: { quem: "ryuji", texto: "...Não muito. Mas vou ficar. Bombeiro fica. Bombeiro sempre fica, mesmo quando o prédio é de outra pessoa.", proxima: "r_fim" },
    rr_c1: { tipo: "narracao", texto: "Ela encosta a testa do capacete nas costas dele. Ele fica parado. O sinal abre. Ele não arranca. O sinal fecha. Abre de novo. Ninguém passa na rua.", proxima: "rr_c2" },
    rr_c2: { tipo: "narracao", texto: "Na terceira vez que o sinal abre, ele liga a moto, devagar, e vai, e não fala nada o caminho inteiro. Mas na frente do prédio dela, quando ela desce, ele buzina duas vezes curtas, e ela sabe que a segunda não é piada.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { tipo: "narracao", cenario: "rua-noite", transicao: "tempo", legenda: "Sábado, 19h", sprite: "victor", texto: "Na saída da lan, o Victor aparece do lado dela com dois pirulitos de morango, um em cada mão, e a camisa social com mais dois botões a menos do que de manhã.", proxima: "rv_02" },
    rv_02: { quem: "victor", texto: "Eu curei uma árvore. Na frente da lan house inteira. Isso vai me perseguir pra sempre. Eu preciso de apoio emocional. E de um sorvete. Eu pago. Eu juro que eu pago dessa vez.", proxima: "rv_03" },
    rv_03: { tipo: "narracao", texto: "Eles vão a pé até a sorveteria da praça. Ele paga. De verdade. Com moeda, contando uma por uma no balcão. Dois sorvetes de chocolate. Eles sentam no banco da praça, e ele fica olhando para o sorvete dele derreter sem comer.", proxima: "rv_04" },
    rv_04: { quem: "victor", texto: "Hoje, na lan. Depois da vitória. O líder ficou olhando pra você, e não pra tela. Eu vi. Eu sempre vejo. É o meu dom.", proxima: "rv_05" },
    rv_05: { quem: "victor", texto: "E eu fiquei feliz por ele. De verdade. Ele merece. E eu fiquei um pouco... eu fiquei curando a árvore de novo. Por dentro.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. “Victor, a árvore não precisa de cura. Ela é uma árvore.”", proxima: "rv_a1", pontos: { victor: 2 }, flags: ["Arvore_Victor"] },
      { texto: "B. “Você pagou o sorvete. Finalmente. Isso é um marco histórico.”", proxima: "rv_b1", pontos: { victor: 3 }, flags: ["Pagou_sorvete"] },
      { texto: "C. Pegar a mão dele que está segurando o sorvete derretendo. “Come antes que derreta. Eu fico aqui.”", proxima: "rv_c1", pontos: { victor: 3 }, flags: ["Fico_aqui_Victor"] }
    ]},
    rv_a1: { quem: "eu", texto: "Victor, a árvore não precisa de cura. Ela é uma árvore.", proxima: "rv_a2" },
    rv_a2: { quem: "victor", texto: "Toda árvore precisa de um pouco de cura. Você não sabe o que ela passou.", proxima: "rv_a3" },
    rv_a3: { tipo: "narracao", texto: "Ele fala isso sério, e ela ri, e ele ri também, e o sorvete dele cai no chão inteiro, e os dois riem mais ainda, e ela divide o dela com ele, metade para cada um.", proxima: "r_fim" },
    rv_b1: { quem: "eu", texto: "Você pagou o sorvete. Finalmente. Isso é um marco histórico.", proxima: "rv_b2" },
    rv_b2: { quem: "victor", texto: "Eu vou escrever no caderno da oficina. “Dívida paga.” Do lado do nome da minha mãe. É o segundo nome mais importante do caderno.", proxima: "rv_b3" },
    rv_b3: { quem: "eu", texto: "Qual é o primeiro?", proxima: "rv_b4" },
    rv_b4: { tipo: "narracao", texto: "Ele olha para ela. Abre a boca. Fecha. Coloca o pirulito na boca, por cima do sorvete, e não responde. Mas as orelhas dele respondem por ele.", proxima: "r_fim" },
    rv_c1: { tipo: "narracao", texto: "Ela pega a mão dele, a que está segurando o sorvete derretendo, e leva até a boca dele.", proxima: "rv_c2" },
    rv_c2: { quem: "eu", texto: "Come antes que derreta. Eu fico aqui.", proxima: "rv_c3" },
    rv_c3: { tipo: "narracao", texto: "Ele come. Devagar. Olhando para ela. Ela fica. Os dois no banco da praça, de noite, com o sorvete pingando nos dedos, sem falar nada, e o Victor sem piada pela terceira vez na semana.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Sábado, 23h", sprite: null, texto: "À noite, no quarto, ela deita de costas na cama, com o pote de tampa azul vazio em cima da barriga, e fica olhando para o teto.", proxima: "f_02" },
    f_02: { tipo: "pensamento", texto: "Hoje eu abri a farinha com tesoura. Eu não explodi nada. Eu fiz cookie dourado. Eu humilhei o Lucas do terceiro ano. Eu ganhei uma pizza do tamanho de uma roda.", proxima: "f_03" },
    f_03: { tipo: "pensamento", texto: "E na frente de um forno, sentada no chão, com a cabeça no ombro dele, ele falou: “Eu não quero que tenha sido só sem querer.”", proxima: "f_04" },
    f_04: { tipo: "pensamento", texto: "Faltou um centímetro. Um timer e um Ryuji.", proxima: "f_05" },
    f_05: { tipo: "pensamento", texto: "Mas um centímetro é muito pouco. Um centímetro se resolve.", proxima: "f_06" },
    f_06: { tipo: "narracao", texto: "Ela vira para o lado, abraçando o pote de tampa azul, e dorme sem perceber, sorrindo, com um pouco de farinha ainda atrás da orelha.", proxima: "ep_fim" },

    // Fim do Capítulo 38 (crie a entrada "capitulo38" em dados/capitulos.js).
    ep_fim: { fim: "capitulo38" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 39 (anotações do roteiro)
 *  • KAITO: na frente do forno da lojinha: "Eu não quero que tenha sido só sem querer." Quase beijo, faltou um
 *    centímetro: o timer disparou e o Ryuji entrou gritando. O laço do avental. A mão em cima da mão na colher.
 *    "A gente fez." Na lan: "Esses ela fez comigo. Esses pode." / "Sim, capitã." / "você sempre faz o que eu mando".
 *  • O tio: "a menina dos cookies verdes"; olhou para ela de novo daquele jeito, como quem procura um rosto.
 *    O Kaito: "Eu sentava aqui quando era pequeno... Quase sempre (sozinho)." PISTA (não revelar).
 *  • A mãe tem uma pasta no celular: "Desastres da SN". Ela manda foto pro Kaito.
 *  • LAN: torneio de Arena dos Reinos, vitória. Pizza gigante e um mês de hora grátis (Ryuji).
 *    Ryuji morreu nove vezes (luz azul da torre) e destruiu a última torre. Victor curou uma árvore.
 *    Blake: "Não. Você está atrás de mim." (morreu protegendo ela). Takeo técnico com apito (72 apitos).
 *    LucasDestruidor3000, do terceiro ano: "cretino de terceira categoria".
 *  • A lojinha: 24 dias.
 *  • SEGREDOS: o Ren matou o Takeo na primeira linha do tempo · a infância (a SN tinha uns 5 anos) · a tia ·
 *    a SN e o Kaito se conheceram quando crianças (ela não lembra).
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 A mão na colher · 2 Na frente do forno · 3 O chat · 4 Depois da vitória · Rota (1 por rota)
 *
 * FLAGS NOVAS
 *  Palmas_Kaito · Professor_Kaito · Encostou_Kaito · Tambem_nao_quero · Chegou_perto · Mais_segundos
 *  Ultimos_minutos · Silencio_jogo · Volta_primeiro · Abraco_time · Morreu_por_mim · Toca_aqui_Kaito
 *  Testa_Kaito · Fala_de_novo · Falta_centimetro · Melhor_tecnico · O_que_viu · Joga_do_lado
 *  Sem_capacete_Blake · Atras_Blake · Pensando_Blake · Luz_azul_Ryuji · Esta_bem_Ryuji · Testa_Ryuji_38
 *  Arvore_Victor · Pagou_sorvete · Fico_aqui_Victor
 */