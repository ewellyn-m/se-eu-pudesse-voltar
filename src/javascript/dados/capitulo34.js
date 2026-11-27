/*
 * =====================================================================
 *  CAPÍTULO 34 — Dia do inspetor
 *  Terça-feira, logo depois do Capítulo 33.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    As cenas com os cinco meninos acontecem em TODAS as rotas (paqueras, flerte leve, momentos tímidos).
 *    Bloco de rota à noite, depois do caldo de terça.
 *
 *  O QUE ACONTECE
 *    • Manhã: o Kaito vai buscar a SN de moto. Conversa à toa no hall. Ela tropeça no último degrau,
 *      cai em cima dele, os dois no chão, a centímetros de se beijar.
 *    • Escola: o Takeo, de gesso e mancando, precisa subir três andares. Ela ajuda. Contato, timidez.
 *    • Hoje é dia do inspetor geral na escola. Tudo tem que estar perfeito.
 *      O Victor trouxe o Caramelo escondido de novo. No intervalo, o cachorro foge.
 *    • A busca: o Blake ajuda na biblioteca (prateleira alta, ela presa entre ele e a estante).
 *      A SN e o Victor acham o Caramelo e se escondem no armário do material de educação física,
 *      apertados, com o cachorro, enquanto o inspetor passa do lado de fora.
 *    • Quando eles saem do armário, o Ren está no corredor. Ele vê. Passa com raiva, sem falar nada.
 *    • Depois do intervalo: o chão molhado do bebedouro, a SN escorrega, o Ryuji segura ela no colo.
 *    • Noite: o caldo de terça na lojinha, com todo mundo. Bloco de rota.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Mio, Hana, Reina, Akane, Kaito, Takeo, Victor, Blake, Ryuji, Ren, Tio do Kaito, Caramelo (cachorro).
 *    Sem nome / rótulo: Inspetor geral, Diretora, Bibliotecária, Faxineira.
 *
 *  CENÁRIOS
 *    Hall do prédio / rua → "apartamento" e "saida-colegio" · Escola: sala-de-aula, corredor, patio-fundos,
 *    vestiario (armário do material) · Biblioteca → "clube-leitura" · Lojinha → "beco-mercado"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Rota_*, Bilhete_capacete, Caqui_gesso, Carrega_primeiro, Ultimo_pirulito.
 *
 *  Crie a entrada "capitulo34" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo34", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — O HALL =================== */
    // Cenário: quarto e hall do prédio da SN, terça cedo. Música: leve, manhã.
    c1_01: { roupa: "escolar", tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Terça, 6h40 — Cena 1", sprite: null, texto: "Terça-feira. Ela acordou com o barulho da mãe chegando do plantão e não conseguiu mais dormir, então está pronta às seis e quarenta, de uniforme, com o cabelo preso e a cabeça ainda no oitavo andar daquele prédio sem parede.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "O celular vibra. Não é o número das fotos. É o Kaito.", proxima: "c1_03" },
    c1_03: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Tô embaixo. Trouxe a moto. Desce que eu te levo, o tio mandou um pão de queijo e ele esfria rápido.", proxima: "c1_04" },
    c1_04: { tipo: "pensamento", texto: "Ele nunca vem de moto me buscar pra escola. Ele vem a pé, quando vem. Alguém mandou ele vir. Ou ninguém mandou, e isso é pior pro meu coração.", proxima: "c1_05" },
    c1_05: { tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", sprite: "kaito", texto: "No hall do prédio, ele está encostado na parede do lado da caixa de correio, de jaqueta por cima do uniforme, com o capacete vermelho dela pendurado no braço e um saquinho de papel na mão, ainda com fumacinha saindo.", proxima: "c1_06" },
    c1_06: { quem: "kaito", texto: "Bom dia.", proxima: "c1_07" },
    c1_07: { quem: "eu", texto: "Bom dia. Você veio de moto pra me levar pra escola, que fica a dez minutos a pé.", proxima: "c1_08" },
    c1_08: { quem: "kaito", texto: "A moto precisava andar. Ela fica triste parada.", proxima: "c1_09" },
    c1_09: { quem: "eu", texto: "Essa desculpa é do Ryuji.", proxima: "c1_10" },
    c1_10: { quem: "kaito", texto: "Eu peguei emprestada. Ele não vai cobrar.", proxima: "c1_11" },
    c1_11: { tipo: "narracao", texto: "Ele entrega o pão de queijo. Ela come ali mesmo, em pé, no hall, enquanto ele fica olhando para a escada, para a caixa de correio, para qualquer lugar que não seja ela comendo.", proxima: "c1_12" },
    c1_12: { quem: "kaito", texto: "Você dormiu? Você está com cara de quem não dormiu.", proxima: "c1_13" },
    c1_13: { quem: "eu", texto: "Dormi umas quatro horas. Fiquei pensando em umas coisas.", proxima: "c1_14" },
    c1_14: { quem: "kaito", texto: "Que coisas?", proxima: "c1_15" },
    c1_15: { quem: "eu", texto: "Em revolução industrial. Na máquina a vapor. Coisas muito importantes.", proxima: "c1_16" },
    c1_16: { tipo: "narracao", texto: "Ele ri pelo nariz e não insiste, porque sabe quando ela não vai contar. Ele pega o capacete do braço e estende para ela.", proxima: "c1_cam_cap" },
    c1_cam_cap: { caminhos: [
      { flag: "Bilhete_capacete", proxima: "c1_capdes" }
    ], proxima: "c1_17" },
    c1_capdes: { quem: "kaito", texto: "Eu colei um adesivo nele. Atrás. Não olha agora. É o desenho que você fez no bilhete de ontem, eu copiei. Ficou pior que o seu.", proxima: "c1_17" },
    c1_17: { tipo: "narracao", texto: "O hall do prédio tem três degraus de granito que levam até a porta da rua. Ela sobe o primeiro de costas, ainda falando com ele, pegando o capacete, rindo de alguma coisa.", proxima: "c1_18" },
    c1_18: { tipo: "narracao", efeito: "tremor", texto: "E aí o pé dela pega a borda do degrau do jeito errado. O tênis escorrega no granito encerado. O mundo vira de lado.", proxima: "c1_19" },
    c1_19: { tipo: "narracao", texto: "Ela vai para frente, em cima dele. O Kaito tenta segurar, mas ele estava encostado e o peso dela vem todo de uma vez, e os dois vão para o chão do hall, ele de costas, ela por cima, o capacete rolando para longe com um barulho oco.", proxima: "c1_20" },
    c1_20: { tipo: "narracao", texto: "Silêncio. As mãos dela estão no peito dele. As mãos dele estão na cintura dela, onde ele tentou segurar. O rosto dela está em cima do rosto dele, tão perto que dá para sentir o ar quando ele respira.", proxima: "c1_21" },
    c1_21: { tipo: "narracao", texto: "Centímetros. Dois, talvez três. Ela vê, de muito perto, a cicatriz pequena no supercílio dele, que a mãe dela costurou. Vê que ele tem um cílio caído na bochecha. Vê que ele parou de respirar.", proxima: "c1_22" },
    c1_22: { tipo: "pensamento", texto: "Eu levanto. Eu tenho que levantar. Por que eu não estou levantando?", proxima: "c1_23" },
    c1_23: { quem: "kaito", texto: "...Você está bem?", proxima: "c1_24" },
    c1_24: { tipo: "narracao", texto: "Ele fala isso quase sem voz, olhando para ela de baixo, sem tirar as mãos da cintura dela. Os olhos dele vão da testa dela para a boca dela e voltam, rápido, como se ele tivesse se pegado fazendo uma coisa proibida.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — No chão do hall
    c1_esc1: { escolhas: [
      { texto: "A. “Você amorteceu bem. Nota dez.” E levantar rindo, vermelha até a orelha.", proxima: "c1_1a_1", pontos: { kaito: 2 }, flags: ["Amorteceu_Kaito"] },
      { texto: "B. Não falar nada. Tirar o cílio da bochecha dele com a ponta do dedo. Depois levantar.", proxima: "c1_1b_1", pontos: { kaito: 3 }, flags: ["Cilio_Kaito"] },
      { texto: "C. “Estou. E você está segurando a minha cintura.”", proxima: "c1_1c_1", pontos: { kaito: 2 }, flags: ["Cintura_Kaito"] }
    ]},
    c1_1a_1: { quem: "eu", texto: "Você amorteceu bem. Nota dez.", proxima: "c1_1a_2" },
    c1_1a_2: { tipo: "narracao", texto: "Ela levanta rápido, rindo alto demais, e vai buscar o capacete do outro lado do hall só para ter alguma coisa para fazer com as mãos. Quando ela volta, ele ainda está sentado no chão, com a mão no peito, no lugar onde a mão dela estava.", proxima: "c1_1a_3" },
    c1_1a_3: { quem: "kaito", texto: "Dez. Tá. Eu aceito o dez.", proxima: "c1_25" },
    c1_1b_1: { tipo: "narracao", texto: "Ela tira a mão do peito dele, devagar, e com a ponta do dedo tira o cílio caído da bochecha dele. Ele fecha os olhos quando o dedo dela encosta. Fica de olho fechado um segundo a mais do que precisa.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "eu", texto: "Tinha um cílio. Faz um pedido.", proxima: "c1_1b_3" },
    c1_1b_3: { quem: "kaito", texto: "...Já fiz.", proxima: "c1_1b_4" },
    c1_1b_4: { tipo: "narracao", texto: "Ela levanta, e o coração dela está batendo tão forte que ela tem certeza de que ele ouviu. Ele levanta também, sacode a jaqueta, e não olha para ela por uns bons trinta segundos.", proxima: "c1_25" },
    c1_1c_1: { tipo: "narracao", texto: "O Kaito tira as mãos da cintura dela tão rápido que parece que encostou numa panela quente. As duas mãos sobem para o ar, como quem se rende para a polícia.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "kaito", texto: "Foi pra segurar. Foi só pra segurar. Eu não... foi o reflexo.", proxima: "c1_1c_3" },
    c1_1c_3: { quem: "eu", texto: "O seu reflexo segurou firme.", proxima: "c1_1c_4" },
    c1_1c_4: { tipo: "narracao", texto: "Ela levanta, rindo, e ele fica no chão com as mãos ainda no ar, vermelho do pescoço até a testa. O Kaito, que encara a Midorata inteira sem piscar, completamente derrotado por um degrau de granito.", proxima: "c1_25" },

    // (todas as opções continuam aqui)
    c1_25: { tipo: "narracao", cenario: "rua", transicao: "tempo", sprite: null, texto: "No caminho, na garupa, ela segura na jaqueta dele, e não na cintura. Ele percebe. Ela percebe que ele percebeu. Nenhum dos dois fala nada os dez minutos inteiros, e o pão de queijo do saquinho esfria esquecido no bolso dela.", proxima: "c1_26" },
    c1_26: { tipo: "narracao", sprite: "kaito", texto: "Ele para a moto duas quadras antes da escola, numa rua lateral, como sempre. Ela desce, tira o capacete, devolve. Os dedos dos dois se encostam no capacete e se separam rápido.", proxima: "c1_27" },
    c1_27: { quem: "kaito", texto: "O degrau. Eu vou falar com o síndico. Ele está muito liso.", proxima: "c1_28" },
    c1_28: { quem: "eu", texto: "O degrau está ótimo.", proxima: "c1_29" },
    c1_29: { tipo: "narracao", texto: "Ele olha para ela. Ela já está andando para a escola. Ela sente que ele fica parado na esquina, com o capacete vermelho na mão, até ela virar o portão.", proxima: "c2_01" },

    /* =================== CENA 2 — A ESCADA =================== */
    // Cenário: escada do bloco B (usa "corredor"). Música: violão tímido.
    c2_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "7h10 — Cena 2", sprite: null, texto: "No pátio de entrada, tem uma faixa nova pendurada, com letra de computador: “BEM-VINDO, SENHOR INSPETOR GERAL”. Os faxineiros estão passando pano em tudo, o porteiro está de gravata, e a diretora está andando de um lado para o outro com uma prancheta, como uma general antes da guerra.", proxima: "c2_02" },
    c2_02: { quem: "desconhecido", rotulo: "Diretora", texto: "Hoje é tudo perfeito. Uniforme perfeito. Fila perfeita. Ninguém corre, ninguém grita, ninguém come no corredor. Ele chega às dez e fica até a saída. Entenderam?", proxima: "c2_03" },
    c2_03: { tipo: "narracao", texto: "Lá no fim do corredor, o elevador do bloco B tem uma folha colada na porta: “EM MANUTENÇÃO”. E, parado na frente dele, olhando para a folha como quem olha para uma sentença de morte, o Takeo.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", sprite: "takeo:machucado", texto: "Gesso no braço, o pé ainda inchado no tênis desamarrado, a mochila pendurada no ombro bom. A sala deles é no terceiro andar.", proxima: "c2_05" },
    c2_05: { quem: "takeo", sprite: "takeo:machucado", texto: "Logo hoje. Dia do inspetor. Se eu chegar atrasado, eu vou ser o atraso perfeito.", proxima: "c2_06" },
    c2_06: { quem: "eu", texto: "Vem. Eu te ajudo.", proxima: "c2_07" },
    c2_07: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu consigo sozinho. Eu já subi ontem. Demorei só uns...", proxima: "c2_08" },
    c2_08: { quem: "eu", texto: "Quantos minutos, Takeo?", proxima: "c2_09" },
    c2_09: { quem: "takeo", sprite: "takeo:machucado", texto: "...Doze.", proxima: "c2_10" },
    c2_10: { tipo: "narracao", texto: "Ela pega a mochila dele e coloca no ombro dela. Depois passa o braço dele, o bom, por cima dos ombros dela, e coloca o próprio braço em volta da cintura dele, para ele apoiar o peso.", proxima: "c2_11" },
    c2_11: { tipo: "narracao", texto: "O Takeo fica duro como uma tábua. Ela sente o corpo inteiro dele travar do lado do dela.", proxima: "c2_12" },
    c2_12: { quem: "takeo", sprite: "takeo:machucado", texto: "Isso... isso é bastante contato.", proxima: "c2_13" },
    c2_13: { quem: "eu", texto: "É escada. Escada exige contato.", proxima: "c2_14" },
    c2_14: { tipo: "narracao", texto: "Eles sobem. Um degrau de cada vez. Ele pisa com o pé bom, ela segura o peso quando ele pisa com o pé machucado. Ele é mais alto, então ela fica com o rosto na altura do ombro dele, e sente o cheiro do sabonete de erva-doce que a avó dele compra.", proxima: "c2_15" },
    c2_15: { tipo: "narracao", texto: "No primeiro andar, ele já parou de ficar duro. No segundo, ele está apoiando de verdade, e o braço dele em volta dos ombros dela está menos pesado e mais firme, como quem já se acostumou.", proxima: "c2_16" },
    c2_16: { quem: "takeo", sprite: "takeo:machucado", texto: "Você não está nem cansada.", proxima: "c2_17" },
    c2_17: { quem: "eu", texto: "Você não pesa nada.", proxima: "c2_18" },
    c2_18: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu peso sessenta e oito quilos. Com gesso, setenta. Eu me pesei na farmácia ontem, de tristeza.", proxima: "c2_19" },
    c2_19: { tipo: "narracao", texto: "No patamar entre o segundo e o terceiro andar, ele pisa errado com o pé machucado e perde o equilíbrio. Ela segura. Rápido, firme, com as duas mãos, e ele vai para frente e fica de frente para ela, encostado no corrimão, com ela segurando ele pela cintura.", proxima: "c2_20" },
    c2_20: { tipo: "narracao", texto: "Os dois ficam parados. Ele com a mão boa no ombro dela. Ela com as duas mãos na cintura dele. Ele olhando para baixo, para ela, com os olhos muito abertos e o rosto ficando vermelho do pescoço para cima, devagar, como um termômetro.", proxima: "c2_21" },
    c2_21: { quem: "takeo", sprite: "takeo:machucado", texto: "...Obrigado.", proxima: "c2_cam_caqui" },
    c2_cam_caqui: { caminhos: [
      { flag: "Caqui_gesso", proxima: "c2_caqui" }
    ], proxima: "c2_esc2" },
    c2_caqui: { tipo: "narracao", texto: "Do lado dela, encostado no corrimão, o gesso com o caqui pequenininho que ela desenhou ontem. A folhinha torta. Ele está olhando para o desenho também, sem perceber que ela viu.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — No patamar
    c2_esc2: { escolhas: [
      { texto: "A. Não soltar logo. “Você está bem? Pode respirar. Eu seguro.”", proxima: "c2_2a_1", pontos: { takeo: 3 }, flags: ["Segurou_patamar"] },
      { texto: "B. Soltar rápido, vermelha também. “O degrau. É o degrau. Hoje os degraus estão contra mim.”", proxima: "c2_2b_1", pontos: { takeo: 2 }, flags: ["Degraus_contra"] },
      { texto: "C. “Sessenta e oito quilos. Confirmado. Você estava certo.”", proxima: "c2_2c_1", pontos: { takeo: 2 }, flags: ["Confirmou_peso"] }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "Ela não solta. Ele respira. Uma vez, duas, olhando para ela de cima, sem graça e sem desviar.", proxima: "c2_2a_2" },
    c2_2a_2: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu estou respirando. Só que está difícil por outro motivo agora.", proxima: "c2_2a_3" },
    c2_2a_3: { tipo: "narracao", texto: "Ele fala e na hora percebe o que falou, e fecha os olhos de vergonha. Ela ri, baixinho, com a testa quase encostando no peito dele, e os dois sobem o último lance assim, sem soltar, rindo e sem olhar um para o outro.", proxima: "c2_22" },
    c2_2b_1: { tipo: "narracao", texto: "Ela solta rápido e dá um passo para trás, e quase cai do degrau de baixo. Agora é ele que segura ela, pelo pulso, com a mão boa.", proxima: "c2_2b_2" },
    c2_2b_2: { quem: "takeo", sprite: "takeo:machucado", texto: "Tá vendo? Agora quem precisa de ajuda é você.", proxima: "c2_2b_3" },
    c2_2b_3: { quem: "eu", texto: "Os degraus estão contra mim hoje, Takeo, é sério. Eu já caí em cima de alguém de manhã.", proxima: "c2_2b_4" },
    c2_2b_4: { tipo: "narracao", texto: "Ele levanta a sobrancelha. Ela percebe o que falou. Agora são os dois vermelhos, no patamar, no meio da escada, sem saber para onde olhar.", proxima: "c2_2b_5" },
    c2_2b_5: { quem: "takeo", sprite: "takeo:machucado", texto: "...Em cima de quem?", proxima: "c2_2b_6" },
    c2_2b_6: { quem: "eu", texto: "Sobe, Takeo.", proxima: "c2_22" },
    c2_2c_1: { quem: "eu", texto: "Sessenta e oito quilos. Confirmado. Você estava certo.", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "takeo", sprite: "takeo:machucado", texto: "Você não precisava confirmar com essa cara de quem está carregando uma sacola de feira.", proxima: "c2_2c_3" },
    c2_2c_3: { tipo: "narracao", texto: "Ele ri, e de rir perde a vergonha, e o resto da escada eles sobem discutindo se ele é uma sacola de feira ou uma caixa de mudança. Ela vence: ele é uma melancia.", proxima: "c2_22" },

    // (todas as opções continuam aqui)
    c2_22: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", texto: "Eles chegam na sala às sete e vinte e oito, dois minutos antes do sinal. A Reina, que está sentada na frente, olha para os dois entrando juntos, com a mochila dele no ombro dela, e levanta uma sobrancelha só, muito alta.", proxima: "c2_23" },
    c2_23: { quem: "reina", sprite: "reina", texto: "Briga limpa, SN. Briga limpa.", proxima: "c2_24" },
    c2_24: { quem: "eu", texto: "Foi escada, Reina.", proxima: "c2_25" },
    c2_25: { quem: "reina", sprite: "reina", texto: "Eu sei. Eu também queria ter sido escada.", proxima: "c3_01" },

    /* =================== CENA 3 — O CARAMELO =================== */
    // Cenário: sala de aula, segunda aula. Música: suspense cômico.
    c3_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Segunda aula — Cena 3", sprite: null, texto: "Na segunda aula, o Victor chega atrasado, o que é normal. O que não é normal é que ele está andando devagar, de lado, com a jaqueta fechada até o pescoço, com os dois braços cruzados na frente da barriga, como quem carrega um segredo vivo.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "Ele senta do lado da SN. A jaqueta dele se mexe sozinha. Faz um barulho baixinho, de fungada.", proxima: "c3_03" },
    c3_03: { tipo: "pensamento", texto: "Não. Não, não, não. Hoje não.", proxima: "c3_04" },
    c3_04: { foto: "caramelo", tipo: "narracao", texto: "Uma cabecinha cor de caramelo aparece pela gola da jaqueta, com as orelhas para trás, o focinho molhado, e olha para ela com aquela cara de cachorro que já fez isso antes e gostou.", proxima: "c3_05" },
    c3_05: { quem: "eu", texto: "Victor. De novo? Hoje? Dia do inspetor geral?", proxima: "c3_06" },
    c3_06: { sprite: "victor", quem: "victor", texto: "Eu não tive escolha, gatinha... SN. A minha mãe pegou plantão dobrado, o vizinho que fica com ele viajou, e o Caramelo, se fica sozinho, come o sofá. Já comeu metade. A gente senta só do lado bom agora.", proxima: "c3_07" },
    c3_07: { quem: "victor", texto: "Ele vai ficar quietinho. Ele é um profissional. Ele já veio da outra vez e ninguém percebeu.", proxima: "c3_08" },
    c3_08: { quem: "eu", texto: "Da outra vez ele quase foi pego.", proxima: "c3_09" },
    c3_09: { quem: "victor", texto: "Quase. Quase não é pego. Profissional.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", texto: "O Caramelo boceja dentro da jaqueta, apoia o queixo no braço do Victor e dorme. E, por duas aulas inteiras, ele realmente fica quietinho, um profissional, e a SN quase acredita que vai dar certo.", proxima: "c3_11" },
    c3_11: { tipo: "narracao", transicao: "tempo", legenda: "Intervalo", texto: "O sinal do intervalo toca. A turma inteira levanta ao mesmo tempo, barulhenta. O Victor levanta também, esquece completamente que tem um cachorro dentro da jaqueta, e abre o zíper para tirar o pirulito do bolso de dentro.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", efeito: "tremor", texto: "O Caramelo pula. Cai no chão, sacode o corpo inteiro, olha para a porta aberta, para o corredor cheio de gente, para o mundo inteiro cheirando a lanche, e sai correndo.", proxima: "c3_13" },
    c3_13: { quem: "victor", texto: "CARAMELO!", proxima: "c3_14" },
    c3_14: { tipo: "narracao", texto: "Pelo corredor, as pessoas gritam, riem, abrem caminho. Uma menina do primeiro ano solta um “que fofo!”. O Caramelo passa entre as pernas de todo mundo, vira a esquina da escada e some.", proxima: "c3_15" },
    c3_15: { tipo: "narracao", texto: "E, pela janela do corredor, lá embaixo no pátio de entrada, um carro preto oficial estaciona. Desce um homem de terno cinza, careca, com uma pasta de couro. A diretora corre até ele com a prancheta, sorrindo com todos os dentes.", proxima: "c3_16" },
    c3_16: { quem: "victor", texto: "...Ele chegou adiantado. Ela disse dez horas. São nove e quarenta. Que tipo de inspetor chega adiantado?", proxima: "c3_17" },
    c3_17: { quem: "eu", texto: "Um inspetor geral. Vem. A gente acha ele antes do inspetor achar.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — Por onde começar
    c3_esc3: { escolhas: [
      { texto: "A. “Cantina. Ele vai atrás do cheiro de coxinha.”", proxima: "c3_3a_1", pontos: { victor: 1 }, flags: ["Busca_cantina"] },
      { texto: "B. “Biblioteca. Ele adora subir escada.”", proxima: "c3_3b_1", pontos: { victor: 1 }, flags: ["Busca_biblioteca"] },
      { texto: "C. “Separa. Você vai pela cantina, eu vou pela biblioteca, a gente se encontra no bloco C.”", proxima: "c3_3c_1", pontos: { victor: 1 }, flags: ["Busca_separada"] }
    ]},
    c3_3a_1: { tipo: "narracao", texto: "Eles descem correndo, sem correr, porque ninguém pode correr no dia do inspetor. Na cantina, a moça do caixa jura que viu um cachorro cor de caramelo roubar uma coxinha e subir a escada do bloco C. E que ele estava indo para a biblioteca.", proxima: "c4_01" },
    c3_3b_1: { tipo: "narracao", texto: "Eles sobem a escada do bloco C, andando rápido, sem correr. No caminho, uma trilha de farelo de coxinha, como migalha de pão em conto de fadas, vai na direção da biblioteca.", proxima: "c4_01" },
    c3_3c_1: { tipo: "narracao", texto: "O Victor vai pela cantina, ela vai pelo bloco C. Na escada, ela encontra um farelo de coxinha. Depois outro. A trilha vai direto para a biblioteca.", proxima: "c4_01" },

    /* =================== CENA 4 — A ESTANTE (Blake) =================== */
    // Cenário: biblioteca (usa "clube-leitura"). Música: silêncio de biblioteca.
    c4_01: { tipo: "narracao", cenario: "clube-leitura", transicao: "tempo", legenda: "Biblioteca — Cena 4", sprite: "blake", texto: "Na biblioteca, quase ninguém, porque é intervalo. Só a bibliotecária na mesa da frente, lendo de óculos na ponta do nariz, e, numa das mesas do fundo, o Blake, sozinho, com o caderno de química aberto e a cara de quem está escrevendo a segunda frase do relatório há vinte minutos.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "Ele levanta a cabeça quando vê ela entrar quase correndo. Fecha o caderno.", proxima: "c4_03" },
    c4_03: { quem: "eu", texto: "Blake. Cachorro. Caramelo. Viu?", proxima: "c4_04" },
    c4_04: { tipo: "narracao", texto: "Ele não pergunta nada. Ele só aponta, com o queixo, para o fundo da biblioteca, para a última estante, a de enciclopédia velha que ninguém usa. Lá em cima, na prateleira mais alta, quase no teto, tem uma coisa pendurada para fora. Uma ponta de rabo cor de caramelo. Balançando.", proxima: "c4_05" },
    c4_05: { quem: "blake", texto: "Ele subiu pela escadinha de rodinha e pulou lá pra cima. Eu ia avisar alguém. Aí eu pensei que se eu avisasse alguém ia ser problema pro Victor. Então eu fiquei olhando ele.", proxima: "c4_06" },
    c4_06: { quem: "eu", texto: "Você ficou vigiando um cachorro em cima de uma estante por quanto tempo?", proxima: "c4_07" },
    c4_07: { quem: "blake", texto: "Dez minutos. Ele está comendo uma coxinha. Ele parece feliz.", proxima: "c4_08" },
    c4_08: { tipo: "narracao", texto: "A escadinha de rodinha está do lado da estante. Ela sobe. Sobe até o último degrau, estica o braço, fica na ponta do pé, e mesmo assim falta. Um metro e sessenta não chega na última prateleira.", proxima: "c4_09" },
    c4_09: { quem: "eu", texto: "Caramelo. Vem. Vem com a tia.", proxima: "c4_10" },
    c4_10: { tipo: "narracao", texto: "O Caramelo olha para ela lá de cima, com a coxinha na boca, e vai mais para o fundo da prateleira.", proxima: "c4_11" },
    c4_11: { tipo: "narracao", texto: "Ela sente a escadinha balançar. Atrás dela, o Blake subiu no degrau de baixo e esticou o braço por cima do ombro dela, até a prateleira, com a mão enorme aberta. Ele alcança fácil.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", texto: "Só que agora ela está presa. Entre a estante, na frente, e o Blake, atrás, com o braço dele passando por cima do ombro dela e o peito dele encostado nas costas dela. A escadinha é estreita. Não tem para onde ir.", proxima: "c4_13" },
    c4_13: { tipo: "narracao", texto: "Ela sente o coração dele batendo nas costas. Rápido. Muito mais rápido do que deveria bater o coração de um cara que está só pegando um cachorro numa estante.", proxima: "c4_14" },
    c4_14: { quem: "blake", texto: "...Peguei.", proxima: "c4_15" },
    c4_15: { tipo: "narracao", texto: "A voz dele sai em cima da cabeça dela, baixa, e ela sente a palavra no cabelo. Ele puxa o Caramelo pela coleira, devagar, e o cachorro vem, com a coxinha e tudo. Mas o Blake não desce da escadinha. Ele fica ali, um segundo, com o cachorro numa mão e a outra apoiada na estante, do lado da cabeça dela.", proxima: "c4_16" },
    c4_16: { tipo: "narracao", texto: "Ela vira o rosto, devagar, para olhar para ele por cima do ombro. Ele está olhando para baixo, para ela. Os dois muito perto. As orelhas dele vermelhas como ela nunca viu.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — Na escadinha
    c4_esc4: { escolhas: [
      { texto: "A. “Você pode descer agora, Blake.” Baixinho, sem pressa nenhuma de que ele desça.", proxima: "c4_4a_1", pontos: { blake: 3 }, flags: ["Desce_Blake"] },
      { texto: "B. “Seu coração está batendo muito rápido.”", proxima: "c4_4b_1", pontos: { blake: 3 }, flags: ["Coracao_Blake"] },
      { texto: "C. “Obrigada. Você é muito útil pra estante alta.” E virar de volta pra frente, rindo.", proxima: "c4_4c_1", pontos: { blake: 2 }, flags: ["Estante_alta"] }
    ]},
    c4_4a_1: { quem: "eu", texto: "Você pode descer agora, Blake.", proxima: "c4_4a_2" },
    c4_4a_2: { tipo: "narracao", texto: "Ele não desce logo. Ele fica mais um segundo, olhando para ela, e alguma coisa no rosto dele muda, como uma porta que abre um pouquinho e fecha de novo.", proxima: "c4_4a_3" },
    c4_4a_3: { quem: "blake", texto: "...Tá.", proxima: "c4_4a_4" },
    c4_4a_4: { tipo: "narracao", texto: "Ele desce. Fica parado do lado da escadinha, com o Caramelo no colo, olhando para o chão. Quando ela desce, ele estende a mão para ajudar, sem olhar para ela. Ela pega. A mão dele está quente e um pouco úmida.", proxima: "c4_17" },
    c4_4b_1: { quem: "eu", texto: "Seu coração está batendo muito rápido.", proxima: "c4_4b_2" },
    c4_4b_2: { tipo: "narracao", texto: "O Blake fica completamente parado. Depois desce da escadinha tão rápido que quase derruba a estante, com o Caramelo apertado no peito, e fica de costas para ela, olhando para uma enciclopédia de 1987.", proxima: "c4_4b_3" },
    c4_4b_3: { quem: "blake", texto: "É o cachorro. Ele é pesado.", proxima: "c4_4b_4" },
    c4_4b_4: { quem: "eu", texto: "Ele tem seis quilos.", proxima: "c4_4b_5" },
    c4_4b_5: { quem: "blake", texto: "É uma escada muito alta.", proxima: "c4_4b_6" },
    c4_4b_6: { tipo: "narracao", texto: "Ela ri. Ele não vira. Mas ela vê, pelo reflexo do vidro da janela, que ele está sorrindo, de cabeça baixa, para o cachorro.", proxima: "c4_17" },
    c4_4c_1: { quem: "eu", texto: "Obrigada. Você é muito útil pra estante alta.", proxima: "c4_4c_2" },
    c4_4c_2: { quem: "blake", texto: "Eu sirvo pra isso. Estante alta. Saco de pancada. Mesa dobrável.", proxima: "c4_4c_3" },
    c4_4c_3: { quem: "eu", texto: "E relatório de química.", proxima: "c4_4c_4" },
    c4_4c_4: { quem: "blake", texto: "Esse ainda não. A segunda frase está me vencendo.", proxima: "c4_17" },

    // (todas as opções continuam aqui)
    c4_17: { quem: "desconhecido", rotulo: "Bibliotecária", texto: "Silêncio aí no fundo! E... isso é um cachorro?", proxima: "c4_18" },
    c4_18: { tipo: "narracao", texto: "A bibliotecária levanta da mesa. No mesmo segundo, a porta da biblioteca abre e o Victor entra, sem fôlego, com farelo de coxinha na camisa.", proxima: "c4_19" },
    c4_19: { quem: "victor", texto: "Caramelo! Meu filho!", proxima: "c4_20" },
    c4_20: { tipo: "narracao", texto: "Ele pega o cachorro do colo do Blake e enfia de volta dentro da jaqueta. O Blake olha para a bibliotecária, que está vindo, e depois para a SN e o Victor.", proxima: "c4_21" },
    c4_21: { quem: "blake", texto: "Vão. Eu distraio ela. Eu pergunto sobre ácido acético.", proxima: "c4_22" },
    c4_22: { tipo: "narracao", texto: "E ele vai até a bibliotecária com o caderno aberto e a cara mais séria do mundo, perguntando se ela tem algum livro sobre reações químicas com espuma. A SN e o Victor saem pela porta dos fundos.", proxima: "c5_01" },

    /* =================== CENA 5 — O ARMÁRIO (Victor) =================== */
    // Cenário: corredor do bloco C e armário do material de educação física (usa "vestiario"). Música: suspense.
    c5_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Corredor do bloco C — Cena 5", sprite: null, texto: "No corredor do bloco C, eles andam rápido para a escada. E, da escada, sobem vozes. A voz da diretora, alta e simpática demais. E outra voz, grave, de homem, que pergunta sobre a manutenção dos extintores.", proxima: "c5_02" },
    c5_02: { sprite: "victor", quem: "victor", texto: "Ele está subindo. Ele está subindo pra cá. O Caramelo vai latir. O Caramelo sempre late pra homem careca.", proxima: "c5_03" },
    c5_03: { tipo: "narracao", texto: "O corredor é comprido, sem saída do outro lado. Tem só uma porta, no meio, de metal, com uma plaquinha: “MATERIAL DE EDUCAÇÃO FÍSICA”. A SN gira a maçaneta. Está aberta.", proxima: "c5_04" },
    c5_04: { tipo: "narracao", cenario: "vestiario", texto: "Lá dentro, é um armário. Um armário mesmo, de um metro por um metro, com prateleira de bola, saco de cone, rede de vôlei enrolada, colchonete encostado na parede e um cheiro forte de borracha e poeira. Ela puxa o Victor para dentro e fecha a porta.", proxima: "c5_05" },
    c5_05: { tipo: "narracao", texto: "Escuro. Só uma linha fina de luz por baixo da porta. E é muito pequeno. Ela fica de costas para a prateleira de bola, o Victor fica de frente para ela, encostado na rede de vôlei, e não tem espaço entre os dois. Nenhum. O Caramelo, dentro da jaqueta, fica espremido no meio.", proxima: "c5_06" },
    c5_06: { tipo: "narracao", texto: "O nariz dela está quase no queixo dele. Ele está segurando a respiração. Ela sente o cheiro do pirulito de morango e de coxinha e de alguma coisa que é só dele, um cheiro de graxa limpa.", proxima: "c5_07" },
    c5_07: { quem: "victor", texto: "...Gatinha. SN. Isso é muito pequeno.", proxima: "c5_08" },
    c5_08: { quem: "eu", texto: "Shh.", proxima: "c5_09" },
    c5_09: { tipo: "narracao", texto: "As vozes chegam no corredor. Passos. A diretora explicando a reforma do telhado. O inspetor fazendo “hm” do jeito que só inspetor faz. Os passos param bem na frente da porta.", proxima: "c5_10" },
    c5_10: { quem: "desconhecido", rotulo: "Inspetor geral", texto: "E aqui?", proxima: "c5_11" },
    c5_11: { quem: "desconhecido", rotulo: "Diretora", texto: "Ah, isso é só o material de educação física. Bola, cone. Nada de interessante.", proxima: "c5_12" },
    c5_12: { tipo: "narracao", texto: "Dentro da jaqueta, o Caramelo se mexe. Começa a fazer aquele barulhinho de cachorro que vai latir, um ronco no fundo da garganta. O Victor arregala os olhos no escuro.", proxima: "c5_13" },
    c5_13: { tipo: "narracao", texto: "Sem pensar, a SN coloca a mão dentro da jaqueta dele, no focinho do Caramelo, e segura de leve, fazendo carinho com o polegar. O cachorro para. Fica quieto. Lambe a mão dela.", proxima: "c5_14" },
    c5_14: { tipo: "narracao", texto: "Só que a mão dela está dentro da jaqueta do Victor. Encostada no peito dele, por cima da camisa. Ela sente o coração dele disparar embaixo da palma.", proxima: "c5_15" },
    c5_15: { tipo: "narracao", texto: "O Victor não respira. Ele olha para ela, no escuro, com a cara que ela nunca viu: sem piada, sem sorriso torto, sem gatinha. Só olhando.", proxima: "c5_16" },
    c5_16: { quem: "desconhecido", rotulo: "Inspetor geral", texto: "Hm. Vamos ver a quadra.", proxima: "c5_17" },
    c5_17: { tipo: "narracao", texto: "Os passos vão embora. Devagar. Descendo a escada. As vozes somem. O corredor fica em silêncio. E os dois continuam lá dentro, no escuro, sem se mexer, mais tempo do que precisa.", proxima: "c5_esc5" },

    // ▶ ESCOLHA 5 — No armário
    c5_esc5: { escolhas: [
      { texto: "A. Tirar a mão devagar. “Seu coração está mais escandaloso que o cachorro.”", proxima: "c5_5a_1", pontos: { victor: 3 }, flags: ["Coracao_Victor"] },
      { texto: "B. Não tirar a mão. “Você ficou quieto. Você nunca fica quieto.”", proxima: "c5_5b_1", pontos: { victor: 3 }, flags: ["Quieto_Victor"] },
      { texto: "C. Abrir a porta rápido. “Saiu. Vamos.” E sair sem olhar pra trás, com o rosto pegando fogo.", proxima: "c5_5c_1", pontos: { victor: 2 }, flags: ["Fugiu_armario"] }
    ]},
    c5_5a_1: { tipo: "narracao", texto: "Ela tira a mão da jaqueta, devagar. O Victor solta a respiração de uma vez, um barulho comprido, como um pneu esvaziando.", proxima: "c5_5a_2" },
    c5_5a_2: { quem: "eu", texto: "Seu coração está mais escandaloso que o cachorro.", proxima: "c5_5a_3" },
    c5_5a_3: { quem: "victor", texto: "É que... é armário. Eu tenho claustrofobia. Desde agora. Eu acabei de descobrir.", proxima: "c5_5a_4" },
    c5_5a_4: { tipo: "narracao", texto: "Ele ri, mas o riso sai torto, e ele passa a mão no cabelo, e não consegue olhar para ela direito. O Victor, que chama todo mundo de gatinha, desmontado por um armário de bola.", proxima: "c5_18" },
    c5_5b_1: { quem: "eu", texto: "Você ficou quieto. Você nunca fica quieto.", proxima: "c5_5b_2" },
    c5_5b_2: { quem: "victor", texto: "...Às vezes eu fico.", proxima: "c5_5b_3" },
    c5_5b_3: { tipo: "narracao", texto: "Ele fala isso baixo, no escuro, e é a voz mais séria que ela já ouviu sair dele. O Caramelo lambe a mão dela de novo, entre os dois, e quebra o momento, e os dois riem baixinho, ao mesmo tempo, com a testa quase encostando.", proxima: "c5_18" },
    c5_5c_1: { tipo: "narracao", texto: "Ela gira a maçaneta e sai do armário tão rápido que tropeça no colchonete. Lá dentro, o Victor fica parado mais um segundo, sozinho, com a mão no peito, no lugar onde a mão dela estava.", proxima: "c5_5c_2" },
    c5_5c_2: { quem: "victor", texto: "...Tá. Tá bom. Eu estou ótimo. Eu e o Caramelo estamos ótimos.", proxima: "c5_18" },

    // (todas as opções continuam aqui)
    c5_18: { tipo: "narracao", cenario: "corredor", transicao: "tempo", texto: "Eles saem do armário. A SN primeiro, ajeitando o cabelo que soltou do elástico. O Victor atrás, com a jaqueta torta, a camisa amassada, o Caramelo com a cabeça para fora da gola.", proxima: "c5_19" },
    c5_19: { tipo: "narracao", sprite: "ren", texto: "E, no meio do corredor, parado, com um livro de xadrez embaixo do braço, o Ren.", proxima: "c5_20" },
    c5_20: { tipo: "narracao", texto: "Ele estava indo para algum lugar. Parou. Está olhando para os dois. Para a porta do armário. Para o cabelo dela solto. Para a camisa amassada do Victor. Uma coisa de cada vez, como quem anota.", proxima: "c5_21" },
    c5_21: { tipo: "narracao", texto: "O maxilar dele trava. Ela vê. Os dedos dele apertam o livro de xadrez até os nós ficarem brancos. Os olhos dele, que nunca mudam, ficam escuros de um jeito que ela só viu quando ela falou o nome do Takeo.", proxima: "c5_22" },
    c5_22: { tipo: "narracao", texto: "Ele não fala nada. Ele passa. Do lado deles, perto, sem olhar para o Victor, sem olhar para ela, com o ombro quase encostando no ombro dela, andando rápido demais para quem nunca anda rápido. Vira a esquina e some.", proxima: "c5_23" },
    c5_23: { sprite: "victor", quem: "victor", texto: "...O Ren do xadrez. Ele ficou com uma cara. Que cara foi aquela? Ele vai contar pra diretora?", proxima: "c5_24" },
    c5_24: { tipo: "pensamento", texto: "Ele não vai contar pra ninguém. Ele não conta nada pra ninguém.", proxima: "c5_25" },
    c5_25: { tipo: "pensamento", texto: "Mas eu vi aquela cara. Eu já sei o que acontece com quem encosta em mim.", proxima: "c5_26" },
    c5_26: { tipo: "pensamento", texto: "Ninguém encosta no Victor. Nunca. Eu não deixo.", proxima: "c6_01" },

    /* =================== CENA 6 — O CHÃO MOLHADO (Ryuji) =================== */
    // Cenário: corredor do bebedouro, fim do intervalo. Música: leve de novo.
    c6_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Fim do intervalo — Cena 6", sprite: null, texto: "O Victor leva o Caramelo para esconder no vestiário masculino, dentro da bolsa de academia do Blake, que está vazia porque o Blake carrega as coisas nos bolsos. A SN volta sozinha para a sala, pelo corredor do bebedouro.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", texto: "O chão do corredor do bebedouro está brilhando. Molhado. A faxineira acabou de passar o pano, no dia do inspetor, com tanta cera que dá para ver o reflexo do teto.", proxima: "c6_03" },
    c6_03: { quem: "desconhecido", rotulo: "Faxineira", texto: "Cuidado aí, menina, que está molhado!", proxima: "c6_04" },
    c6_04: { tipo: "narracao", sprite: "ryuji", texto: "Do outro lado do corredor, vindo de frente, o Ryuji, com a faixa na testa e a mochila nas costas, acenando para ela com o braço inteiro, do jeito dele.", proxima: "c6_05" },
    c6_05: { quem: "ryuji", texto: "SN! Eu passei na prova surpresa de biologia! Eu acho! Eu escrevi muito, isso conta!", proxima: "c6_06" },
    c6_06: { tipo: "narracao", efeito: "tremor", texto: "Ela dá um passo na direção dele. O tênis desliza na cera. Pela segunda vez no mesmo dia, o mundo vira de lado.", proxima: "c6_07" },
    c6_07: { tipo: "pensamento", texto: "De novo? Sério? Eu levanto viga, eu quebro barra de ferro, e hoje eu não consigo ficar de pé num chão.", proxima: "c6_08" },
    c6_08: { tipo: "narracao", texto: "Antes de ela encostar no chão, o Ryuji já está lá. Ele largou a mochila, deu dois passos largos e pegou ela no ar, um braço embaixo das costas e outro embaixo dos joelhos, do jeito exato que os bombeiros fazem nos vídeos de treinamento.", proxima: "c6_09" },
    c6_09: { tipo: "narracao", texto: "Ele escorrega também, com ela no colo. Derrapa uns dois metros na cera, de tênis, girando os braços sem soltar ela, e para encostado na parede do bebedouro, de pé, ofegante, com ela inteira no colo dele.", proxima: "c6_10" },
    c6_10: { tipo: "narracao", texto: "O rosto dele está a um palmo do dela. A faixa da testa caiu um pouco em cima do olho. Ele está vermelho, sem fôlego, e com uma cara de quem não acredita no que acabou de fazer.", proxima: "c6_cam_carrega" },
    c6_cam_carrega: { caminhos: [
      { flag: "Carrega_primeiro", proxima: "c6_cert" }
    ], proxima: "c6_11" },
    c6_cert: { quem: "ryuji", texto: "...Primeira carregada oficial. Antes de passar na prova. Isso vale? Eu acho que vale. Eu vou fazer o certificado hoje.", proxima: "c6_12" },
    c6_11: { quem: "ryuji", texto: "...Eu peguei. Eu peguei de verdade. Igual no treinamento. Você viu? Eu nem pensei.", proxima: "c6_12" },
    c6_12: { quem: "eu", texto: "Ryuji. Você pode me colocar no chão agora.", proxima: "c6_13" },
    c6_13: { quem: "ryuji", texto: "O chão está molhado. Se eu te colocar no chão, você vai cair de novo. Protocolo de segurança. Eu tenho que te levar até a área seca.", proxima: "c6_14" },
    c6_14: { quem: "eu", texto: "A área seca é logo ali. A três metros.", proxima: "c6_15" },
    c6_15: { quem: "ryuji", texto: "Três metros de risco. Eu não posso.", proxima: "c6_esc6" },

    // ▶ ESCOLHA 6 — No colo do Ryuji
    c6_esc6: { escolhas: [
      { texto: "A. Passar os braços em volta do pescoço dele. “Então anda, bombeiro. Com cuidado.”", proxima: "c6_6a_1", pontos: { ryuji: 3 }, flags: ["Pescoco_Ryuji"] },
      { texto: "B. Ajeitar a faixa caída da testa dele, ali mesmo, no colo.", proxima: "c6_6b_1", pontos: { ryuji: 3 }, flags: ["Faixa_Ryuji"] },
      { texto: "C. “Eu peso mais do que pareço, você vai se arrepender.”", proxima: "c6_6c_1", pontos: { ryuji: 2 }, flags: ["Pesa_mais"] }
    ]},
    c6_6a_1: { tipo: "narracao", texto: "Ela passa os braços em volta do pescoço dele. O Ryuji para de respirar no meio do passo. Depois respira, fundo, e anda os três metros mais devagar que alguém já andou três metros.", proxima: "c6_6a_2" },
    c6_6a_2: { tipo: "narracao", texto: "Na área seca, ele coloca ela no chão com tanto cuidado que parece que ela é de vidro. Ele não solta logo. As mãos dele ficam um segundo na cintura dela, para ver se ela está firme.", proxima: "c6_6a_3" },
    c6_6a_3: { quem: "ryuji", texto: "...Estável. Vítima estável. Resgate concluído.", proxima: "c6_16" },
    c6_6b_1: { tipo: "narracao", texto: "Ela levanta a mão e puxa a faixa dele de volta para o lugar, na testa, afastando o cabelo do olho. Ele fica completamente imóvel, com ela no colo, deixando.", proxima: "c6_6b_2" },
    c6_6b_2: { quem: "eu", texto: "Pronto. Agora você está com cara de bombeiro, e não de pirata.", proxima: "c6_6b_3" },
    c6_6b_3: { tipo: "narracao", texto: "O Ryuji abre a boca para responder. Nada sai. É a primeira vez que ela vê o Ryuji sem palavra nenhuma. Ele anda os três metros em silêncio absoluto, e quando coloca ela no chão, sai andando para a sala de costas, quase batendo na porta.", proxima: "c6_16" },
    c6_6c_1: { quem: "eu", texto: "Eu peso mais do que pareço, você vai se arrepender.", proxima: "c6_6c_2" },
    c6_6c_2: { quem: "ryuji", texto: "Você pesa igual uma mochila de material. Uma mochila boa. Com estojo.", proxima: "c6_6c_3" },
    c6_6c_3: { quem: "eu", texto: "Isso é um elogio?", proxima: "c6_6c_4" },
    c6_6c_4: { quem: "ryuji", texto: "É o maior elogio que um bombeiro pode fazer. Pergunta pra qualquer um.", proxima: "c6_6c_5" },
    c6_6c_5: { tipo: "narracao", texto: "Ele anda os três metros rindo, e ela ri também, no colo dele, e a faxineira olha para os dois do fundo do corredor com o pano na mão, balançando a cabeça, como quem já viu de tudo nessa escola.", proxima: "c6_16" },

    // (todas as opções continuam aqui)
    c6_16: { tipo: "narracao", sprite: null, texto: "Ela volta para a sala com o rosto quente e senta na carteira. A Mio, do lado, olha para ela de cima a baixo, com os olhos apertados.", proxima: "c6_17" },
    c6_17: { quem: "mio", sprite: "mio", texto: "Você saiu no intervalo com cara de normal e voltou com cara de novela. O que aconteceu em vinte minutos?", proxima: "c6_18" },
    c6_18: { quem: "eu", texto: "Um cachorro, uma estante, um armário e um chão molhado.", proxima: "c6_19" },
    c6_19: { quem: "mio", sprite: "mio", texto: "Isso não é resposta. Isso é o título de um livro.", proxima: "c6_20" },
    c6_20: { tipo: "narracao", sprite: null, texto: "Na carteira perto da porta, o Ren está lendo o livro de xadrez. Ele não vira as páginas a aula inteira. A mesma página, por cinquenta minutos. Ele não olha para ela nenhuma vez.", proxima: "c6_21" },
    c6_21: { tipo: "pensamento", texto: "Ele está com raiva. E ele não sabe o que fazer com a raiva quando não tem ninguém pra comprar.", proxima: "c7_01" },

    /* =================== CENA 7 — CALDO DE TERÇA =================== */
    // Cenário: lojinha do tio, terça à noite (usa "beco-mercado"). Música: alegre, de casa.
    c7_01: { roupa: "fora", tipo: "narracao", cenario: "loja-lamen", transicao: "tempo", legenda: "Terça, 19h — Cena 7", sprite: "kaito", texto: "À noite, a lojinha. O caldo de terça, a receita nova do tio. O aviso de despejo na parede agora está escrito “27”, e do lado dele o protocolo da prefeitura, colado na mesma altura, como duas pessoas brigando.", proxima: "c7_02" },
    c7_02: { tipo: "narracao", texto: "Todo mundo apareceu, sem ninguém combinar direito. O Kaito atrás do balcão. O Blake ocupando dois banquinhos. O Ryuji contando a história do resgate do chão molhado pela terceira vez. O Takeo com o gesso apoiado no balcão. O Victor com o Caramelo no colo, que entrou na lojinha como se fosse sócio.", proxima: "c7_03" },
    c7_03: { quem: "ryuji", sprite: "ryuji", texto: "E aí eu derrapei dois metros, com ela no colo, e não soltei! Dois metros! Na cera!", proxima: "c7_04" },
    c7_04: { quem: "victor", texto: "Grande coisa. Eu fiquei preso num armário com ela e um cachorro e o inspetor geral do lado de fora.", proxima: "c7_05" },
    c7_05: { quem: "blake", sprite: "blake", texto: "Eu peguei o cachorro na estante.", proxima: "c7_06" },
    c7_06: { quem: "takeo", sprite: "takeo:machucado", texto: "Ela me subiu três andares no colo. Quer dizer, no ombro. Quer dizer, do lado. Ela me subiu do lado.", proxima: "c7_07" },
    c7_07: { tipo: "narracao", sprite: "kaito", texto: "Todo mundo olha para o Kaito, que está mexendo o caldo, de costas. Ele não fala nada. Ele só continua mexendo, e as orelhas dele ficam vermelhas, muito vermelhas, de um jeito que todo mundo percebe.", proxima: "c7_08" },
    c7_08: { quem: "ryuji", sprite: "ryuji", texto: "...Kaito? E você? O que você fez com ela hoje?", proxima: "c7_09" },
    c7_09: { quem: "kaito", sprite: "kaito", texto: "Eu fiz caldo.", proxima: "c7_10" },
    c7_10: { tipo: "narracao", sprite: null, texto: "Ele vira e coloca a primeira tigela na frente dela, com cebolinha demais, sem olhar para ninguém. A lojinha inteira começa a gritar ao mesmo tempo, e o tio, lá da cozinha, grita mais alto que todo mundo que a receita nova está ótima e que ninguém está prestando atenção nela.", proxima: "c7_11" },
    c7_11: { quem: "tio_kaito", texto: "Eu passei vinte e dois anos fazendo esse caldo e hoje é a primeira vez que ninguém fala do caldo!", proxima: "c7_12" },
    c7_12: { tipo: "pensamento", texto: "Cinco meninos. Uma lojinha. Um cachorro. E hoje eu caí em cima de um, subi a escada abraçada com outro, fiquei presa entre uma estante e um, num armário com outro, e no colo de outro.", proxima: "c7_13" },
    c7_13: { tipo: "pensamento", texto: "Eu tenho vinte e oito anos por dentro. Eu devia ter mais controle sobre a minha vida do que uma comédia romântica.", proxima: "c7_14" },
    c7_14: { tipo: "narracao", texto: "Ela toma o caldo. A receita nova está ótima mesmo. Ninguém fala do caldo.", proxima: "r_cam" },

    /* =================== ROTA — TERÇA À NOITE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { roupa: "fora", tipo: "narracao", cenario: "frente-casa-sn-noite", transicao: "tempo", sprite: "kaito", texto: "Depois do caldo, o Kaito leva ela em casa de moto. Na frente do prédio, ela desce, tira o capacete, e os dois ficam olhando para a porta do hall. Para os três degraus de granito.", proxima: "rk_02" },
    rk_02: { quem: "kaito", texto: "Eu falei com o síndico. Ele disse que vai colocar uma fita antiderrapante.", proxima: "rk_03" },
    rk_03: { quem: "eu", texto: "Você falou mesmo com o síndico?", proxima: "rk_04" },
    rk_04: { quem: "kaito", texto: "Falei. Ele me perguntou se eu era o namorado. Eu disse que era o cara que caiu.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. “O cara que caiu. Bom título.”", proxima: "rk_a1", pontos: { kaito: 2 }, flags: ["Cara_que_caiu"] },
      { texto: "B. “E você queria ter dito o quê?”", proxima: "rk_b1", pontos: { kaito: 3 }, flags: ["Queria_dizer_Kaito"] },
      { texto: "C. Subir os três degraus devagar, de frente pra ele, um por um, sem tropeçar. “Viu? Aprendi.”", proxima: "rk_c1", pontos: { kaito: 3 }, flags: ["Degraus_Kaito"] }
    ]},
    rk_a1: { quem: "eu", texto: "O cara que caiu. Bom título.", proxima: "rk_a2" },
    rk_a2: { quem: "kaito", texto: "Eu não caí. Você que caiu. Eu só estava embaixo.", proxima: "rk_a3" },
    rk_a3: { tipo: "narracao", texto: "Ele fala isso e percebe como soou, e coloca o capacete na cabeça tão rápido que bate a viseira no nariz.", proxima: "r_fim" },
    rk_b1: { tipo: "narracao", texto: "O Kaito fica parado, com o capacete na mão. Olha para ela. Depois para os degraus. Depois para ela de novo.", proxima: "rk_b2" },
    rk_b2: { quem: "kaito", texto: "...Quando for, eu falo.", proxima: "rk_b3" },
    rk_b3: { quem: "eu", texto: "Você sempre fala isso.", proxima: "rk_b4" },
    rk_b4: { quem: "kaito", texto: "Porque ainda não foi.", proxima: "rk_b5" },
    rk_b5: { tipo: "narracao", texto: "Ele coloca o capacete, liga a moto. E antes de arrancar, levanta a viseira e olha para ela mais uma vez, por um segundo, de um jeito que fala tudo que ele ainda não falou.", proxima: "r_fim" },
    rk_c1: { tipo: "narracao", texto: "Ela sobe os três degraus de costas, devagar, olhando para ele, um de cada vez, com os braços abertos como uma equilibrista. No último, ela para e faz uma reverência.", proxima: "rk_c2" },
    rk_c2: { quem: "eu", texto: "Viu? Aprendi.", proxima: "rk_c3" },
    rk_c3: { quem: "kaito", texto: "Pena.", proxima: "rk_c4" },
    rk_c4: { tipo: "narracao", texto: "Ele fala isso baixo, quase sem querer, e ela ouve. Os dois ficam se olhando, ela no alto do degrau, ele lá embaixo na moto. Ele é o primeiro a desviar.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { roupa: "fora", tipo: "narracao", cenario: "rua-padaria-noite", transicao: "tempo", sprite: "takeo:machucado", texto: "Depois do caldo, ela leva o Takeo em casa, pela rua da padaria, que tem luz. Ele vai apoiado no braço dela, sem precisar mais, porque o pé já melhorou. Ele não fala que melhorou. Ela não pergunta.", proxima: "rt_02" },
    rt_02: { quem: "takeo", sprite: "takeo:machucado", texto: "Na escada hoje de manhã. Eu fiquei pensando nisso a aula inteira. Eu não ouvi nada de matemática.", proxima: "rt_03" },
    rt_03: { quem: "eu", texto: "Pensando no quê?", proxima: "rt_04" },
    rt_04: { quem: "takeo", sprite: "takeo:machucado", texto: "Que eu queria que o terceiro andar fosse o décimo.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. “Amanhã o elevador ainda vai estar quebrado. Eu já perguntei.”", proxima: "rt_a1", pontos: { takeo: 3 }, flags: ["Elevador_quebrado"] },
      { texto: "B. Parar no meio da calçada e abraçar ele pela cintura, igual na escada. “Décimo andar.”", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["Decimo_andar"] },
      { texto: "C. “Você está apoiando no meu braço e o seu pé já está bom, Takeo.”", proxima: "rt_c1", pontos: { takeo: 2 }, flags: ["Pe_bom_Takeo"] }
    ]},
    rt_a1: { tipo: "narracao", texto: "O Takeo para de andar. Olha para ela. Começa a rir, baixo, com a mão boa no rosto.", proxima: "rt_a2" },
    rt_a2: { quem: "takeo", sprite: "takeo:machucado", texto: "Você perguntou pro porteiro se o elevador ia continuar quebrado?", proxima: "rt_a3" },
    rt_a3: { quem: "eu", texto: "Por motivos de logística.", proxima: "rt_a4" },
    rt_a4: { quem: "takeo", sprite: "takeo:machucado", texto: "Que logística maravilhosa.", proxima: "r_fim" },
    rt_b1: { tipo: "narracao", texto: "Ela para no meio da calçada, embaixo de um poste, e passa o braço pela cintura dele, igual na escada, e encosta a cabeça no ombro dele. Ele fica parado. Depois o braço bom dele vem por cima dos ombros dela.", proxima: "rt_b2" },
    rt_b2: { quem: "eu", texto: "Décimo andar.", proxima: "rt_b3" },
    rt_b3: { tipo: "narracao", texto: "Eles andam o resto do caminho assim, devagar, como se ainda estivessem subindo, e quando chegam no portão verde descascado, ele demora muito para tirar o braço.", proxima: "r_fim" },
    rt_c1: { tipo: "narracao", texto: "O Takeo fica muito vermelho. Ele olha para o pé, que está andando perfeitamente, e depois para a mão dele no braço dela.", proxima: "rt_c2" },
    rt_c2: { quem: "takeo", sprite: "takeo:machucado", texto: "...É apoio emocional.", proxima: "rt_c3" },
    rt_c3: { quem: "eu", texto: "Ah, emocional.", proxima: "rt_c4" },
    rt_c4: { quem: "takeo", sprite: "takeo:machucado", texto: "Totalmente emocional. Eu não vou soltar.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: "fora", tipo: "narracao", cenario: "frente-lamen-noite", transicao: "tempo", sprite: "blake", texto: "Depois do caldo, o Blake fica esperando ela na calçada, encostado na moto preta, com o caderno de química embaixo do braço.", proxima: "rb_02" },
    rb_02: { quem: "blake", texto: "Eu escrevi a segunda frase. Na lojinha. Enquanto o Ryuji contava do chão molhado pela terceira vez.", proxima: "rb_03" },
    rb_03: { tipo: "narracao", texto: "Ele abre o caderno embaixo do poste e mostra. A segunda frase do relatório. Embaixo dela, numa letra menor, apagada com borracha mas ainda dá para ler, ele tinha escrito outra coisa e apagado: “Eu não queria descer da escada.”", proxima: "rb_04" },
    rb_04: { tipo: "narracao", texto: "Ela lê a frase apagada. Ele percebe que ela leu. Ele fecha o caderno de uma vez.", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. Fingir que não viu. “A segunda frase está ótima, Blake.”", proxima: "rb_a1", pontos: { blake: 2 }, flags: ["Fingiu_nao_ver"] },
      { texto: "B. “Você apagou uma coisa aí embaixo.”", proxima: "rb_b1", pontos: { blake: 3 }, flags: ["Viu_apagado"] },
      { texto: "C. Pegar o caderno, abrir de novo, e escrever embaixo da frase apagada: “Eu também não.”", proxima: "rb_c1", pontos: { blake: 3 }, flags: ["O_seu_tambem"] }
    ]},
    rb_a1: { quem: "eu", texto: "A segunda frase está ótima, Blake.", proxima: "rb_a2" },
    rb_a2: { tipo: "narracao", texto: "Ele olha para ela com alívio e com outra coisa também, uma coisa que parece decepção pequena, e guarda o caderno na mochila.", proxima: "rb_a3" },
    rb_a3: { quem: "blake", texto: "...Valeu.", proxima: "r_fim" },
    rb_b1: { quem: "eu", texto: "Você apagou uma coisa aí embaixo.", proxima: "rb_b2" },
    rb_b2: { quem: "blake", texto: "Era rascunho.", proxima: "rb_b3" },
    rb_b3: { quem: "eu", texto: "De relatório de química?", proxima: "rb_b4" },
    rb_b4: { tipo: "narracao", texto: "O Blake fica parado. Não responde. Ele coloca o capacete na cabeça e fica olhando para ela pela viseira, e ela não consegue ver o rosto dele, só os olhos, que não desviam.", proxima: "rb_b5" },
    rb_b5: { quem: "blake", texto: "...Eu penso devagar. Mas eu penso.", proxima: "r_fim" },
    rb_c1: { tipo: "narracao", texto: "Ela pega o caderno da mão dele, abre na página, e embaixo da frase apagada, com a caneta dela, escreve: “Eu também não.” Fecha. Devolve.", proxima: "rb_c2" },
    rb_c2: { tipo: "narracao", texto: "O Blake abre. Lê. Fica olhando para a página tanto tempo que ela começa a achar que ele não vai fazer nada. Depois ele fecha o caderno devagar, guarda dentro da jaqueta, e não na mochila.", proxima: "rb_c3" },
    rb_c3: { quem: "blake", texto: "...Eu vou tirar dez nesse relatório.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { roupa: "fora", tipo: "narracao", cenario: "frente-casa-sn-noite", transicao: "tempo", sprite: "ryuji", texto: "Depois do caldo, o Ryuji leva ela em casa na Relâmpago. Na frente do prédio, ele não desliga a moto. Ele fica sentado, de capacete, com as mãos no guidão.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", texto: "Eu fiquei pensando. Na hora do chão molhado. Eu não pensei. Eu só fui. Igual no simulado, quando eu peguei o boneco.", proxima: "rr_03" },
    rr_03: { quem: "ryuji", texto: "Só que no simulado eu fiquei com medo depois. Hoje eu não fiquei com medo depois. Eu fiquei com outra coisa.", proxima: "rr_04" },
    rr_04: { quem: "eu", texto: "Que coisa?", proxima: "rr_05" },
    rr_05: { quem: "ryuji", texto: "Eu não sei o nome. Bombeiro não aprende o nome disso no curso.", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. Tirar o capacete dele, devagar. “Fala sem capacete.”", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Sem_capacete_Ryuji"] },
      { texto: "B. “Quando você descobrir o nome, me conta primeiro.”", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Conta_primeiro_Ryuji"] },
      { texto: "C. “Talvez o nome seja cera. Você escorregou na cera, Ryuji.”", proxima: "rr_c1", pontos: { ryuji: 2 }, flags: ["Nome_cera"] }
    ]},
    rr_a1: { tipo: "narracao", texto: "Ela solta a fivela do capacete dele e tira, devagar. O cabelo dele sai todo amassado, a faixa torta de novo. Ele fica olhando para ela, sem a viseira no meio, e sem nenhuma piada pronta.", proxima: "rr_a2" },
    rr_a2: { quem: "eu", texto: "Fala sem capacete.", proxima: "rr_a3" },
    rr_a3: { quem: "ryuji", texto: "...Sem capacete fica mais difícil.", proxima: "rr_a4" },
    rr_a4: { tipo: "narracao", texto: "Ele não fala. Mas ele também não pega o capacete de volta. Os dois ficam ali, ela segurando o capacete dele no colo, ele sentado na moto ligada, se olhando, até a luz da escada do prédio apagar sozinha.", proxima: "r_fim" },
    rr_b1: { quem: "eu", texto: "Quando você descobrir o nome, me conta primeiro.", proxima: "rr_b2" },
    rr_b2: { quem: "ryuji", texto: "Primeiro? Antes do Victor?", proxima: "rr_b3" },
    rr_b3: { quem: "eu", texto: "Antes de todo mundo.", proxima: "rr_b4" },
    rr_b4: { tipo: "narracao", texto: "O Ryuji fica quieto. Depois acelera a moto, uma vez, alto, no meio da rua vazia, como quem grita sem abrir a boca, e vai embora buzinando até a esquina.", proxima: "r_fim" },
    rr_c1: { quem: "eu", texto: "Talvez o nome seja cera. Você escorregou na cera, Ryuji.", proxima: "rr_c2" },
    rr_c2: { quem: "ryuji", texto: "Cera. Tá. Pode ser cera. Uma cera muito forte. Que dura o dia inteiro.", proxima: "rr_c3" },
    rr_c3: { tipo: "narracao", texto: "Ele ri, e ela ri, e ele vai embora rindo. Mas na esquina ele buzina duas vezes, e ela sabe que a segunda buzina não é de piada.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: "fora", tipo: "narracao", cenario: "rua-noite", transicao: "tempo", sprite: "victor", texto: "Depois do caldo, o Victor leva ela até em casa a pé, com o Caramelo na coleira, dormindo em pé de tanto que comeu. Ele está quieto. O Victor quieto, de novo, pela segunda vez no mesmo dia.", proxima: "rv_02" },
    rv_02: { quem: "victor", texto: "O armário. Hoje. Eu fiquei pensando.", proxima: "rv_03" },
    rv_03: { quem: "eu", texto: "No quê?", proxima: "rv_04" },
    rv_04: { quem: "victor", texto: "Que eu chamo todo mundo de gatinha porque é fácil. É serviço social. Não custa nada. E hoje, no escuro, eu não consegui chamar você de nada.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. “Então me chama pelo nome. Só pelo nome.”", proxima: "rv_a1", pontos: { victor: 3 }, flags: ["Pelo_nome_Victor"] },
      { texto: "B. “Gatinha é bonito também. Mas eu gostei do silêncio.”", proxima: "rv_b1", pontos: { victor: 3 }, flags: ["Gostou_silencio"] },
      { texto: "C. Pegar a coleira do Caramelo da mão dele. “O Caramelo me chama de tia. Isso já é muito.”", proxima: "rv_c1", pontos: { victor: 2 }, flags: ["Tia_Caramelo"] }
    ]},
    rv_a1: { quem: "eu", texto: "Então me chama pelo nome. Só pelo nome.", proxima: "rv_a2" },
    rv_a2: { tipo: "narracao", texto: "O Victor para na calçada. Abre a boca. Fecha. Respira. E fala o nome dela, devagar, inteiro, sem gatinha antes e sem piada depois.", proxima: "rv_a3" },
    rv_a3: { quem: "victor", texto: "...É estranho. Parece que eu estou falando uma coisa importante.", proxima: "rv_a4" },
    rv_a4: { quem: "eu", texto: "Você está.", proxima: "r_fim" },
    rv_b1: { quem: "eu", texto: "Gatinha é bonito também. Mas eu gostei do silêncio.", proxima: "rv_b2" },
    rv_b2: { tipo: "narracao", texto: "O Victor olha para ela de lado. Depois para o chão. Depois tira um pirulito do bolso, olha para ele, e guarda de volta, sem abrir.", proxima: "rv_b3" },
    rv_b3: { quem: "victor", texto: "Então eu vou ficar em silêncio mais vezes. Perto de você. Só perto de você.", proxima: "r_fim" },
    rv_c1: { tipo: "narracao", texto: "Ela pega a coleira. O Caramelo acorda, olha para ela, e encosta a cabeça na perna dela, satisfeito.", proxima: "rv_c2" },
    rv_c2: { quem: "eu", texto: "O Caramelo me chama de tia. Isso já é muito.", proxima: "rv_c3" },
    rv_c3: { quem: "victor", texto: "Se você é tia dele... e eu sou o pai dele...", proxima: "rv_c4" },
    rv_c4: { tipo: "narracao", texto: "Ele para de falar no meio, percebendo onde a frase ia chegar, e fica vermelho até a raiz do cabelo. Ela ri tanto que o Caramelo late, e o Victor fica vermelho o resto do caminho inteiro.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Terça, 22h30", sprite: null, texto: "Em casa, no quarto, ela deita de costas na cama, ainda de uniforme, e fica olhando para o teto, com a mão no peito, sentindo o coração.", proxima: "f_02" },
    f_02: { tipo: "pensamento", texto: "Que dia. Que dia ridículo.", proxima: "f_03" },
    f_03: { tipo: "narracao", texto: "O celular vibra em cima da mesinha. Ela olha. É o número das fotos. Ela abre.", proxima: "f_04" },
    f_04: { tipo: "narracao", texto: "Não tem mensagem. Não tem foto. Só a conversa aberta, e embaixo do nome do contato, a palavrinha: “digitando...”.", proxima: "f_05" },
    f_05: { tipo: "narracao", texto: "Ela fica olhando. Digitando. Para. Digitando de novo. Para. Um minuto inteiro. Dois.", proxima: "f_06" },
    f_06: { tipo: "narracao", texto: "Depois, nada. A palavra some. Ele não manda nada.", proxima: "f_07" },
    f_07: { tipo: "pensamento", texto: "Ele viu o armário. E agora ele não consegue escrever.", proxima: "f_08" },
    f_08: { tipo: "pensamento", texto: "Ótimo. Que não consiga. Ninguém encosta em ninguém por minha causa. Nem o Victor, nem o Blake, nem o Ryuji, nem o Takeo, nem o Kaito.", proxima: "f_09" },
    f_09: { tipo: "pensamento", texto: "Se ele tentar, ele vai ter que passar por mim primeiro.", proxima: "ep_fim" },

    // Fim do Capítulo 34 (crie a entrada "capitulo34" em dados/capitulos.js).
    ep_fim: { fim: "capitulo34" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 35 (anotações do roteiro)
 *  • O Ren viu a SN e o Victor saindo do armário (cabelo solto, camisa amassada). Ficou com raiva, não falou
 *    nada, não virou a página do livro a aula inteira. À noite, ficou "digitando..." dois minutos e não mandou.
 *    PERIGO: o Victor pode virar alvo. A SN decidiu proteger.
 *  • Os cinco tiveram um momento físico com ela no mesmo dia:
 *      Kaito (caiu em cima dele no hall, o cílio, "Já fiz") · Takeo (escada do bloco B, "décimo andar")
 *      Blake (estante da biblioteca, o coração; a frase apagada no caderno) · Victor (armário, a mão no peito)
 *      Ryuji (chão molhado, carregada no colo, "primeira carregada oficial").
 *    Na lojinha, todos contaram as suas histórias, menos o Kaito ("Eu fiz caldo"), que ficou vermelho.
 *  • O elevador do bloco B continua quebrado. O síndico vai colocar fita antiderrapante (Kaito falou com ele).
 *  • A lojinha: 27 dias. O protocolo da prefeitura colado do lado do aviso.
 *  • SEGREDOS: o Ren matou o Takeo na primeira linha do tempo · a infância (a SN tinha uns 5 anos) · a tia.
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 No chão do hall (Kaito) · 2 No patamar (Takeo) · 3 Por onde começar (Caramelo) · 4 Na escadinha (Blake)
 *  5 No armário (Victor) · 6 No colo do Ryuji · Rota (1 por rota)
 *
 * FLAGS NOVAS
 *  Amorteceu_Kaito · Cilio_Kaito · Cintura_Kaito · Segurou_patamar · Degraus_contra · Confirmou_peso
 *  Busca_cantina · Busca_biblioteca · Busca_separada · Desce_Blake · Coracao_Blake · Estante_alta
 *  Coracao_Victor · Quieto_Victor · Fugiu_armario · Pescoco_Ryuji · Faixa_Ryuji · Pesa_mais
 *  Cara_que_caiu · Queria_dizer_Kaito · Degraus_Kaito · Elevador_quebrado · Decimo_andar · Pe_bom_Takeo
 *  Fingiu_nao_ver · Viu_apagado · O_seu_tambem · Sem_capacete_Ryuji · Conta_primeiro_Ryuji · Nome_cera
 *  Pelo_nome_Victor · Gostou_silencio · Tia_Caramelo
 */