/*
 * =====================================================================
 *  CAPÍTULO 40 — Casa grande demais
 *  Terça-feira (véspera de feriado), logo depois do Capítulo 39.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Cenas com os cinco meninos em TODAS as rotas. Bloco de rota no meio da festa (o jardim).
 *
 *  O QUE ACONTECE
 *    • Manhã: o Kaito busca a SN de moto. Ela ainda pensa no perfume de flor.
 *    • Na escola: a Reina anuncia. A avó viajou hoje cedo, com o grupo da terceira idade, quatro dias
 *      na praia. Amanhã é feriado. "Festa hoje. Na minha casa. Todo mundo."
 *    • A festa: casa grande, piscina, música alta, bebida (cerveja, ponche, uns do terceiro ano trazem coisa
 *      mais forte). A SN, com vinte e oito anos por dentro, bebe pouco e cuida dos outros.
 *        – O Ryuji bebe uma lata e vira um poeta dramático.
 *        – O Victor cai na piscina de roupa social. O Ryuji "resgata".
 *        – O Blake não bebe. Ele é quem leva todo mundo pra casa depois.
 *        – O Takeo, de gesso, dança com a Reina. Briga limpa.
 *        – A Akane toca piano. A Hana canta. A Mio narra tudo no microfone de brinquedo.
 *        – A Serena aparece. Bebe demais. A SN segura o cabelo dela no banheiro. Conversa de verdade.
 *        – O Ren aparece. Fica num canto, sem beber, sem falar, olhando. Vai embora cedo.
 *        – Verdade ou desafio na sala.
 *    • Bloco de rota: o jardim, de madrugada, com o menino da rota.
 *    • Fim: a Reina, sozinha na beira da piscina às três da manhã. "A casa é grande demais quando ela não está."
 *
 *  REGRAS
 *    • Sala da SN: Takeo, Mio, Hana, Reina, Ren, Akane. Sem xadrez no Ren. O Ren não manda mensagem.
 *    • Gangue não entra na escola. A festa é fora da escola.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Mio, Hana, Reina, Akane, Kaito, Takeo, Victor, Blake, Ryuji, Ren, Serena, Mãe (bilhete).
 *    Sem nome / rótulo: Avó da Reina (citada), Menino do terceiro ano, Amiga da Serena.
 *
 *  CENÁRIOS
 *    Hall → "apartamento" · Escola: saida-colegio, sala-de-aula, patio-fundos
 *    Casa da Reina (sala, cozinha, banheiro, piscina, jardim) → "apartamento" e "patio-fundos"
 *    Quarto → "quarto-sn"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Rota_*, Termina_frase, Falar_Serena, Nao_e_premio.
 *
 *  Crie a entrada "capitulo40" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo40", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — O ANÚNCIO =================== */
    // Cenário: hall e escola, terça. Música: leve, depois animada.
    c1_01: { roupa: "escolar", tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", legenda: "Terça, 7h — Cena 1", sprite: "kaito", texto: "Terça-feira. Sete horas. Ela desce os três degraus da fita preta, e ele está lá, e fecha a fivela do capacete embaixo do queixo dela, devagar, como agora faz todo dia.", proxima: "c1_02" },
    c1_02: { quem: "kaito", texto: "Você dormiu mal.", proxima: "c1_03" },
    c1_03: { quem: "eu", texto: "Eu sonhei com um cheiro.", proxima: "c1_04" },
    c1_04: { quem: "kaito", texto: "Cheiro de quê?", proxima: "c1_05" },
    c1_05: { quem: "eu", texto: "De flor. Um perfume. Eu conheço e não lembro de onde.", proxima: "c1_06" },
    c1_06: { tipo: "narracao", texto: "Ele fica olhando para ela, com os dedos ainda na fivela. Uma coisa passa pelo rosto dele, rápida, como uma lembrança que ele também não consegue segurar. Depois some.", proxima: "c1_07" },
    c1_07: { quem: "kaito", texto: "...Quando lembrar, me fala.", proxima: "c1_08" },
    c1_08: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Intervalo", sprite: "reina", texto: "No intervalo, no muro do bebedouro, a Reina sobe em cima do muro. Literalmente. De uniforme, com os sapatos caros, em pé, com as mãos na cintura, como quem vai fazer um discurso de presidente.", proxima: "c1_09" },
    c1_09: { quem: "reina", texto: "Atenção! A minha avó viajou hoje às seis da manhã! Com o grupo da terceira idade da igreja! Quatro dias! Praia! Ela levou três chapéus e um maiô de oncinha!", proxima: "c1_10" },
    c1_10: { quem: "reina", texto: "Amanhã é feriado! A casa é minha! Festa! Hoje! Oito da noite! Todo mundo! Piscina aberta! Eu pago tudo! Meus pais não olham a fatura!", proxima: "c1_11" },
    c1_11: { tipo: "narracao", sprite: null, texto: "O pátio inteiro explode. Gritos. Gente correndo para contar para quem não ouviu. A rede de fofoca vai ter trabalho dobrado hoje. A Akane puxa a Reina pela barra da saia.", proxima: "c1_12" },
    c1_12: { sprite: "akane", quem: "akane", texto: "Reina, você convidou o pátio inteiro. O pátio inteiro tem umas trezentas pessoas.", proxima: "c1_13" },
    c1_13: { quem: "reina", sprite: "reina", texto: "A minha casa cabe trezentas pessoas. A minha casa cabe quinhentas. A minha casa é grande demais.", proxima: "c1_14" },
    c1_14: { tipo: "narracao", texto: "Ela fala isso rindo, ainda em cima do muro. Mas a SN, do lado do bebedouro, ouve uma coisa diferente na última frase. Uma coisinha. Como uma corda desafinada no meio da música.", proxima: "c1_15" },
    c1_15: { tipo: "pensamento", texto: "“Grande demais.” Ela riu. Mas não era piada.", proxima: "c1_16" },
    c1_16: { tipo: "narracao", sprite: "hana", texto: "A Hana já está com o caderno de gatinho aberto, desenhando uma tabela nova: “Festa da Reina — Logística”. Colunas: quem vai, quem leva o quê, quem vai embora com quem, e uma coluna chamada “Emergências”.", proxima: "c1_17" },
    c1_17: { quem: "hana", texto: "Alguém tem que ser responsável. Eu vou ser responsável. Eu sempre sou.", proxima: "c1_18" },
    c1_18: { quem: "mio", sprite: "mio", texto: "Eu vou ser a locutora oficial. Eu vou levar o microfone rosa. Vai ser a maior transmissão da história da Rádio Mio da Madrugada. Vai ser literalmente de madrugada.", proxima: "c1_19" },
    c1_19: { tipo: "narracao", sprite: null, texto: "Do outro lado do pátio, no banco da árvore torta, os meninos já estão discutindo. O Ryuji quer levar a Relâmpago para mostrar na festa. O Victor quer levar o Caramelo. O Blake diz que vai dirigir. O Kaito não fala nada, mas olha para ela, do outro lado do pátio, e levanta a sobrancelha, uma vez: você vai?", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — Você vai?
    c1_esc1: { escolhas: [
      { texto: "A. Fazer que sim com a cabeça, do outro lado do pátio. E sorrir.", proxima: "c1_1a_1", pontos: { kaito: 2 }, flags: ["Vai_festa_sim"] },
      { texto: "B. Dar de ombros. “Talvez.” Só pra ele ficar pensando.", proxima: "c1_1b_1", pontos: { kaito: 1 }, flags: ["Talvez_festa"] },
      { texto: "C. Ir até o banco. “Eu vou. Mas eu vou cuidar de vocês. Ninguém faz besteira.”", proxima: "c1_1c_1", pontos: { kaito: 1, blake: 1, ryuji: 1, victor: 1 }, flags: ["Cuida_festa"] }
    ]},
    c1_1a_1: { tipo: "narracao", texto: "Ela faz que sim, do outro lado do pátio, e sorri. Ele sorri de volta, aquele sorriso de canto, e vira para o Ryuji como se nada tivesse acontecido. Mas as orelhas dele estão vermelhas.", proxima: "c1_20" },
    c1_1b_1: { tipo: "narracao", texto: "Ela dá de ombros. Talvez. Ele franze a testa, do outro lado do pátio. E passa o resto do intervalo olhando para ela de vez em quando, como quem tenta resolver uma conta.", proxima: "c1_20" },
    c1_1c_1: { tipo: "narracao", texto: "Ela vai até o banco. Para na frente dos quatro, de braços cruzados.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "eu", texto: "Eu vou. Mas eu vou cuidar de vocês. Ninguém faz besteira. Ninguém pula do telhado. Ninguém leva cachorro.", proxima: "c1_1c_3" },
    c1_1c_3: { sprite: "victor", quem: "victor", texto: "...O Caramelo é da família.", proxima: "c1_1c_4" },
    c1_1c_4: { quem: "eu", texto: "Ninguém leva cachorro, Victor.", proxima: "c1_20" },

    // (todas as opções continuam aqui)
    c1_20: { cenario: "escadaria-escola", transicao: "tempo", sprite: null, tipo: "narracao", texto: "No fim do intervalo, perto da escada, ela passa pela Serena. A Serena está encostada na parede, sozinha, com o celular na mão, olhando para a tela sem ler nada. Ela não está com a caixa de bento. Ela não está com as amigas. O rímel está perfeito, mas os olhos estão inchados.", proxima: "c1_cam_ser" },
    c1_cam_ser: { caminhos: [
      { flag: "Termina_frase", proxima: "c1_ser_k" },
      { flag: "Falar_Serena", proxima: "c1_ser_v" }
    ], proxima: "c1_21" },
    c1_ser_k: { tipo: "pensamento", texto: "Ontem o Kaito falou pra ela que gosta de outra pessoa. No portão. E ela chorou. E hoje ela está aqui, sozinha, com os olhos inchados.", proxima: "c1_21" },
    c1_ser_v: { tipo: "pensamento", texto: "Eu falei pro Victor que ia falar com ela. Não pra brigar. Só pra falar. Ela gostou dele primeiro.", proxima: "c1_21" },
    c1_21: { tipo: "narracao", sprite: "serena", texto: "A Serena levanta os olhos. Vê a SN. E o rosto dela endurece de novo, rápido, como uma porta batendo.", proxima: "c1_22" },
    c1_22: { quem: "serena", texto: "A Reina convidou o pátio inteiro. Eu sou do pátio. Eu vou.", proxima: "c1_23" },
    c1_23: { quem: "eu", texto: "Eu não falei nada.", proxima: "c1_24" },
    c1_24: { quem: "serena", texto: "Mas pensou.", proxima: "c1_25" },
    c1_25: { tipo: "narracao", sprite: null, texto: "Ela sobe a escada. A SN fica olhando ela ir, com os chaveiros fazendo menos barulho que o normal.", proxima: "c2_01" },

    /* =================== CENA 2 — A CASA =================== */
    // Cenário: casa da Reina, terça à noite (usa "apartamento"). Música: alta, de festa.
    c2_01: { roupa: "fora", tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Terça, 19h30 — Cena 2", sprite: null, texto: "Às sete e meia, a mãe sai para o plantão. Ela vê a filha na frente do espelho, se arrumando.", proxima: "c2_02" },
    c2_02: { sprite: "mae", quem: "mae", texto: "Festa?", proxima: "c2_03" },
    c2_03: { quem: "eu", texto: "Na casa da Reina. A avó dela viajou.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", texto: "A mãe fica parada na porta do quarto, de uniforme de hospital, com a bolsa no ombro. Olhar de enfermeira. Olhar de quem já atendeu muito adolescente às três da manhã.", proxima: "c2_05" },
    c2_05: { quem: "mae", texto: "Vai ter bebida.", proxima: "c2_06" },
    c2_06: { quem: "eu", texto: "Provavelmente.", proxima: "c2_07" },
    c2_07: { quem: "mae", texto: "Água entre cada copo. Não aceita copo aberto de ninguém. Não entra em carro de quem bebeu. E se alguém passar mal, deita de lado. De lado. Você sabe.", proxima: "c2_08" },
    c2_08: { quem: "eu", texto: "Eu sei, mãe.", proxima: "c2_09" },
    c2_09: { quem: "mae", texto: "Eu sei que você sabe. Você sempre soube coisa demais pra sua idade.", proxima: "c2_10" },
    c2_10: { tipo: "narracao", texto: "Ela fala isso sem perceber o que falou, e dá um beijo na testa da filha, e vai embora. A SN fica parada na frente do espelho.", proxima: "c2_11" },
    c2_11: { tipo: "pensamento", texto: "Eu sei coisa demais pra minha idade porque eu tenho vinte e oito. Eu já fui em festa assim. Muitas. Eu já fui a pessoa que passou mal e a pessoa que segurou o cabelo.", proxima: "c2_12" },
    c2_12: { tipo: "pensamento", texto: "Hoje eu vou ser a que segura o cabelo.", proxima: "mh_01" },
    // --- A Mio e a Hana se arrumam na casa da SN ---
    mh_01: { roupa: "festa", sprite: null, tipo: "narracao", transicao: "tempo", legenda: "19h40", texto: "Dez minutos depois que a mãe sai, a campainha toca. Três vezes seguidas, do jeito da Mio. Ela abre a porta e as duas entram como uma enchente.", proxima: "mh_02" },
    mh_02: { tipo: "narracao", sprite: "mio", texto: "A Mio, com uma mochila enorme nas costas, uma bolsa de maquiagem do tamanho de uma caixa de ferramentas e a coroa de papelão já na cabeça. A Hana, atrás, com a prancheta embaixo do braço.", proxima: "mh_03" },
    mh_03: { quem: "mio", texto: "Ninguém vai pra primeira festa grande do ano sem preparação. Isso é operação de guerra. Hana, lê o cronograma.", proxima: "mh_04" },
    mh_04: { quem: "hana", sprite: "hana", texto: "Dezenove e quarenta: chegada. Vinte horas: cabelo. Vinte e dez: maquiagem. Vinte e vinte: foto. Vinte e vinte e cinco: saída. Tem dez minutos de margem pra crise.", proxima: "mh_05" },
    mh_05: { quem: "eu", texto: "Margem pra crise?", proxima: "mh_06" },
    mh_06: { quem: "hana", texto: "Sempre tem uma crise. A Mio sempre chora uma vez antes de festa.", proxima: "mh_07" },
    mh_07: { quem: "mio", sprite: "mio", texto: "Eu não choro! Eu me emociono! É diferente!", proxima: "mh_08" },
    mh_08: { tipo: "narracao", sprite: null, cenario: "quarto-sn-noite", texto: "No quarto da SN, a Mio despeja a bolsa de maquiagem inteira em cima da cama. A Hana pendura a prancheta no puxador do armário, aberta no cronograma.", proxima: "mh_10" },
    mh_10: { tipo: "narracao", sprite: "mio", transicao: "tempo", legenda: "20h", texto: "Às oito em ponto, a Mio senta a SN na cadeira da escrivaninha e faz o cabelo dela. Solta, com umas ondas feitas com o babyliss que ela trouxe na mochila, e duas presilhas pequenas de estrela de um lado. A Hana segura o espelho e cronometra.", proxima: "mh_11" },
    mh_11: { quem: "mio", texto: "E agora, o momento histórico. Rímel. Você nunca passa. Hoje você passa. Fecha o olho. Não, abre. Olha pra cima. Não pisca. NÃO PISCA.", proxima: "mh_12" },
    mh_12: { tipo: "narracao", texto: "Ela pisca. A Mio xinga baixinho. Tenta de novo. Na terceira, dá certo. A Hana anota na prancheta: “Rímel: 3 tentativas”.", proxima: "mh_13" },
    mh_13: { quem: "hana", sprite: "hana", texto: "Agora uma pergunta técnica, para a logística. Quem vai estar lá. Exatamente. Para eu saber quem vai embora com quem.", proxima: "mh_14" },
    mh_14: { quem: "mio", sprite: "mio", texto: "O pátio inteiro, Hana. Trezentas pessoas.", proxima: "mh_15" },
    mh_15: { quem: "hana", sprite: "hana", texto: "Não. Quem importa. Os cinco. Eles vão?", proxima: "mh_16" },
    mh_16: { tipo: "narracao", sprite: "mio", texto: "A Mio para com o pincel de blush no ar. Fica quieta um segundo. Depois fala, mais baixo, sem olhar para ninguém, mexendo no pincel.", proxima: "mh_17" },
    mh_17: { quem: "mio", texto: "...O Blake vai. O Victor falou no grupo. Ele vai dirigir. Ele não vai beber.", proxima: "mh_18" },
    mh_18: { tipo: "pensamento", texto: "Ela falou o Blake primeiro. De todos os cinco, ela falou o Blake. Desde a Sayuri ela não fala o nome dele em voz alta.", proxima: "mh_19" },
    mh_19: { quem: "hana", sprite: "hana", texto: "Anotado. Blake: motorista. Isso é muito bom pra logística. E pra você, Mio?", proxima: "mh_20" },
    mh_20: { quem: "mio", sprite: "mio", texto: "Pra mim nada! Hana! Vai cuidar da sua prancheta!", proxima: "mh_21" },
    mh_21: { tipo: "narracao", sprite: null, transicao: "tempo", legenda: "20h20", texto: "Às oito e vinte, as três param na frente do espelho do armário para a foto. A SN no meio, de rímel e presilha de estrela. A Mio de um lado, com a coroa de papelão. A Hana do outro, com a prancheta na frente do peito, como uma medalha. A Mio tira a foto com o braço esticado.", proxima: "mh_22" },
    mh_22: { quem: "mio", texto: "Essa foto vai pro meu mural. Pra sempre. Primeira festa grande do ano. As três.", proxima: "mh_23" },
    mh_23: { tipo: "narracao", texto: "Às oito e vinte e cinco, exatamente como no cronograma, as três saem de casa a pé, de braço dado, pela rua da padaria, que tem luz, a Mio no meio cantando alto e a Hana conferindo o relógio.", proxima: "c2_13" },
    c2_13: { tipo: "narracao", cenario: "frente-casa-reina-noite", transicao: "tempo", legenda: "20h30", texto: "A casa da Reina. As três chegam de braço dado. Ela já tinha vindo dormir aqui, mas de noite, cheia de gente, é outra casa. Portão aberto. Música alta saindo de todas as janelas. Luzinhas penduradas no jardim inteiro. A piscina iluminada por baixo, azul. Umas cem pessoas. Talvez mais.", proxima: "c2_14" },
    c2_14: { tipo: "narracao", sprite: "reina", texto: "A Reina está na porta, com o cabelo solto, recebendo todo mundo como se fosse a dona de um hotel. Ela vê a SN e abre os braços.", proxima: "c2_15" },
    c2_15: { quem: "reina", texto: "Você veio! Entra! Tem ponche na cozinha, tem pizza na sala, tem piscina, tem o Takeo, que eu não convidei especialmente, ele veio porque todo mundo veio.", proxima: "c2_16" },
    c2_16: { quem: "eu", texto: "Claro. Todo mundo.", proxima: "c2_17" },
    c2_17: { quem: "reina", texto: "Todo mundo. Inclusive ele. Por acaso. Totalmente por acaso.", proxima: "c2_18" },
    c2_18: { cenario: "festa-reina", tipo: "narracao", sprite: null, texto: "Lá dentro, a sala enorme virou pista de dança. O piano de cauda da avó, no canto, tem uma placa feita à mão pela Hana: “NÃO COLOQUE COPO EM CIMA. É DA AVÓ.” Na cozinha, uma tigela gigante de ponche vermelho, e, do lado, uns meninos do terceiro ano abrindo garrafas que não são de suco.", proxima: "c2_19" },
    c2_19: { tipo: "narracao", sprite: "hana", texto: "A Hana já foi direto para a porta da cozinha com a prancheta, anotando quem entra e quem sai, e quem pegou o quê, como uma fiscal de aeroporto.", proxima: "c2_20" },
    c2_20: { quem: "hana", texto: "Você já bebeu água? Bebe água. Eu coloquei garrafa de água em todos os cômodos. Tem uma coluna na tabela só pra água.", proxima: "c2_21" },
    c2_21: { tipo: "narracao", sprite: "mio", texto: "A Mio, do lado dela, tira o microfone de brinquedo rosa da mochila, ajeita a coroa de papelão na cabeça e acende o microfone.", proxima: "c2_22" },
    c2_22: { quem: "mio", texto: "Boa noite, ouvintes da festa! Aqui é a Mio da Madrugada, ao vivo da casa da Reina! Acabou de chegar a SN, de rímel! De RÍMEL, gente! Isso nunca aconteceu!", proxima: "c2_23" },
    c2_23: { quem: "eu", texto: "Mio. Desliga isso.", proxima: "c2_24" },
    c2_24: { quem: "mio", texto: "Nunca. A transmissão vai até o sol nascer.", proxima: "c2_25" },
    c2_25: { tipo: "narracao", sprite: null, texto: "Um menino do terceiro ano, alto, com um copo de plástico vermelho na mão, passa e estende um copo cheio para ela, sorrindo.", proxima: "c2_26" },
    c2_26: { quem: "desconhecido", rotulo: "Menino do terceiro ano", texto: "Toma. Ponche especial. Fui eu que fiz.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — O copo
    c2_esc2: { escolhas: [
      { texto: "A. “Não, valeu.” Não aceita copo aberto de ninguém. A mãe falou.", proxima: "c2_2a_1", pontos: {}, flags: ["Recusou_copo"] },
      { texto: "B. Pegar uma lata fechada de refrigerante na geladeira. “Eu tô com essa.”", proxima: "c2_2b_1", pontos: {}, flags: ["Lata_fechada"] },
      { texto: "C. Pegar o copo e despejar na planta do canto. “A planta estava com sede.”", proxima: "c2_2c_1", pontos: { desvio: 1 }, flags: ["Planta_ponche"] }
    ]},
    c2_2a_1: { quem: "eu", texto: "Não, valeu.", proxima: "c2_2a_2" },
    c2_2a_2: { tipo: "narracao", texto: "O menino dá de ombros e vai oferecer para outra pessoa. A SN fica olhando ele ir, e anota mentalmente a cara dele, do jeito que a Hana anota tudo.", proxima: "c2_27" },
    c2_2b_1: { tipo: "narracao", texto: "Ela vai até a geladeira e pega uma lata de refrigerante fechada. Abre na frente dele. O menino ri, sem graça, e vai embora.", proxima: "c2_27" },
    c2_2c_1: { tipo: "narracao", texto: "Ela pega o copo da mão dele, sorri, e despeja o ponche inteiro no vaso da planta enorme do canto da sala. A planta faz um barulhinho.", proxima: "c2_2c_2" },
    c2_2c_2: { quem: "eu", texto: "A planta estava com sede.", proxima: "c2_2c_3" },
    c2_2c_3: { tipo: "narracao", texto: "O menino do terceiro ano fica parado, de boca aberta. A Hana, da porta da cozinha, anota alguma coisa na prancheta, com um sorriso pequeno. Coluna nova: “Plantas atingidas”.", proxima: "c2_27" },

    // (todas as opções continuam aqui)
    c2_27: { tipo: "narracao", texto: "E aí eles chegam. Os cinco. Ela ouve antes de ver, porque a Relâmpago buzina duas vezes na rua, e o Victor grita “CHEGUEI” do portão, e a casa inteira vira para a porta.", proxima: "c3_01" },

    /* =================== CENA 3 — OS CINCO =================== */
    // Cenário: sala e piscina da casa da Reina. Música: festa, alta.
    c3_01: { tipo: "narracao", cenario: "festa-reina", transicao: "tempo", legenda: "21h — Cena 3", sprite: "victor", texto: "O Victor entra primeiro, de camisa social de novo, com mais um botão a menos do que no sábado, de braços abertos, cumprimentando gente que ele não conhece como se fossem primos.", proxima: "c3_02" },
    c3_02: { quem: "victor", texto: "Boa noite, gatinhas! Boa noite, gatinhos! Boa noite, planta! A planta está bêbada? Por que a planta está cheirando a ponche?", proxima: "c3_03" },
    c3_03: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji entra atrás, com o capacete amarelo ainda na cabeça, porque esqueceu de tirar, e uma caixa de pizza extra que ninguém pediu.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", sprite: "blake", texto: "O Blake entra atrás dele, abaixando a cabeça para passar na porta, com a chave da moto na mão e um fardo de garrafa de água nas costas. Ele coloca o fardo no chão da cozinha sem falar nada. A Hana, da porta, olha para o fardo como quem vê um anjo.", proxima: "c3_05" },
    c3_05: { quem: "blake", texto: "Eu não vou beber. Eu dirijo. Eu levo quem precisar.", proxima: "c3_06" },
    c3_06: { quem: "hana", sprite: "hana", texto: "Blake. Você é a pessoa mais responsável que já existiu. Eu vou criar uma coluna com o seu nome.", proxima: "c3_07" },
    c3_07: { tipo: "narracao", sprite: "takeo", texto: "O Takeo já estava lá, sentado no sofá, com o gesso no colo e um copo de suco de laranja na mão, porque ele chegou às sete e meia, antes de todo mundo, para ajudar a Reina a pendurar as luzinhas no jardim.", proxima: "c3_08" },
    c3_08: { quem: "takeo", sprite: "takeo", texto: "A Reina me ligou às cinco. Ela disse que eu era o único que ela conhecia que sabia usar escada. Eu tenho um braço só. Eu pendurei as luzinhas com um braço só.", proxima: "c3_09" },
    c3_09: { tipo: "narracao", sprite: "kaito", texto: "E por último, o Kaito, com o cabelo meio molhado. Ele para na porta da sala. Olha em volta. A música, a gente, as luzes. Ele nunca gostou de festa. Ela sabe. Ele procura alguma coisa com os olhos, no meio da sala cheia.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", texto: "Acha ela. E para de procurar.", proxima: "c3_11" },
    c3_11: { tipo: "narracao", texto: "Ele atravessa a sala. No meio do caminho, três meninas do segundo ano param ele para falar alguma coisa. Ele responde com uma palavra cada uma, sem parar de andar, sem tirar os olhos dela. Chega.", proxima: "c3_12" },
    c3_12: { foto: "sn-festa", quem: "kaito", texto: "...Você passou rímel.", proxima: "c3_13" },
    c3_13: { quem: "eu", texto: "A Mio já anunciou no microfone.", proxima: "c3_14" },
    c3_14: { quem: "kaito", texto: "Eu ouvi. Do portão.", proxima: "c3_15" },
    c3_15: { tipo: "narracao", texto: "Ele fica parado na frente dela, olhando, sem falar mais nada. Ela fica parada também. A música alta em volta deles. Alguém esbarra no ombro dele e empurra ele um passo mais perto dela. Ele não volta o passo.", proxima: "c3_16" },
    c3_16: { tipo: "narracao", sprite: null, transicao: "tempo", legenda: "22h", texto: "Às dez da noite, a festa está no auge. A Akane senta no piano de cauda da avó, tira a placa da Hana, coloca do lado, e começa a tocar. Uma música animada, depois outra, depois uma lenta. A sala para para ouvir.", proxima: "c3_17" },
    c3_17: { tipo: "narracao", sprite: "hana", texto: "No meio da lenta, a Mio empurra a Hana para o lado do piano, com o microfone de brinquedo rosa na mão dela. A Hana fica vermelha, abraça a prancheta, olha para a Mio com ódio puro. E canta. “Depois da Chuva”. A mesma do karaokê. A casa inteira fica em silêncio.", proxima: "c3_18" },
    c3_18: { tipo: "narracao", sprite: null, texto: "No silêncio, a SN olha em volta. E vê, no canto da sala, perto da porta de vidro que dá para o jardim, encostado na parede, sozinho, sem copo na mão, o Ren.", proxima: "c3_19" },
    c3_19: { sprite: "ren", tipo: "narracao", texto: "Ele não está olhando para a Hana. Não está olhando para o piano. Está olhando para ela. E, quando percebe que ela viu, ele não desvia. Fica olhando. Depois olha para o Kaito, do lado dela. E depois olha para a porta.", proxima: "c3_20" },
    c3_20: { sprite: null, tipo: "narracao", texto: "Quando a Hana termina de cantar e a casa inteira aplaude, a SN olha de novo para o canto. Ele não está mais lá. A porta de vidro está aberta, balançando com o vento do jardim.", proxima: "rn_01" },
    // --- A SN vai atrás do Ren (todas as rotas) ---
    rn_01: { tipo: "pensamento", texto: "Não. Dessa vez ele não vai embora primeiro sem ouvir.", proxima: "rn_02" },
    rn_02: { tipo: "narracao", cenario: "frente-casa-reina-noite", transicao: "tempo", sprite: null, texto: "Ela sai pela porta de vidro, atravessa o jardim com as luzinhas, e alcança ele no portão lateral da casa, já na calçada, com as mãos nos bolsos, de costas para a festa.", proxima: "rn_03" },
    rn_03: { quem: "eu", texto: "Ren.", proxima: "rn_04" },
    rn_04: { sprite: "ren", tipo: "narracao", texto: "Ele para. Não vira logo. Fica um segundo parado, como quem não esperava ser seguido, e depois vira, devagar. Atrás dela, a música da festa chega abafada pelo jardim.", proxima: "rn_05" },
    rn_05: { quem: "eu", texto: "Você veio, ficou uma música no canto, e está indo embora. De novo. Igual no prédio. Igual na sala. Você sempre vai embora primeiro.", proxima: "rn_06" },
    rn_06: { tipo: "narracao", texto: "Ele não responde. Ela respira fundo. E fala, devagar, olhando nos olhos dele, sem levantar a voz.", proxima: "rn_07" },
    rn_07: { quem: "eu", texto: "Você não é mais o menino de óculos que ficou trinta e um dias na chuva. Você não é o mesmo de antes, Ren.", proxima: "rn_08" },
    rn_08: { quem: "eu", texto: "Hoje você pode fazer amizade com quem você quiser. Pode entrar nessa festa e conversar com qualquer pessoa. Pode namorar com quem você quiser. Ninguém mais vai rir do seu tabuleiro.", proxima: "rn_09" },
    rn_09: { quem: "eu", texto: "Você não precisa mais ter medo de chegar perto das pessoas. Ninguém vai te deixar sozinho numa praça por ser quem você é.", proxima: "rn_10" },
    rn_10: { tipo: "narracao", texto: "O rosto dele não muda. Mas a mão dele, dentro do bolso, aperta. Ela vê o tecido do casaco esticar.", proxima: "rn_11" },
    rn_11: { quem: "eu", texto: "Mas se você continuar agindo assim, comprando prédio, mandando gente no escuro, olhando de longe e indo embora, você só vai afastar todo mundo que está perto de você. Até não sobrar ninguém. E aí você vai estar sozinho de novo. Só que dessa vez a culpa vai ser sua.", proxima: "rn_12" },
    rn_12: { tipo: "narracao", texto: "Silêncio. Um carro passa na rua, devagar, com o farol batendo no rosto dele por um segundo. Lá dentro, a casa inteira aplaude alguma coisa.", proxima: "rn_13" },
    rn_13: { quem: "ren", texto: "Eu não tenho medo.", proxima: "rn_14" },
    rn_14: { quem: "eu", texto: "Então por que você fica sempre no canto?", proxima: "rn_15" },
    rn_15: { tipo: "narracao", texto: "Ele abre a boca. Fecha. É a segunda vez que ela vê o Ren sem resposta. Ele olha para a casa, para as janelas acesas, para as luzinhas tortas do jardim. Depois para ela.", proxima: "rn_16" },
    rn_16: { quem: "ren", texto: "...Boa festa.", proxima: "rn_17" },
    rn_17: { sprite: null, tipo: "narracao", texto: "Ele vira e vai embora pela calçada, devagar, com as mãos nos bolsos. Mas, dessa vez, na esquina, antes de virar, ele para. Olha para trás. Para a casa cheia. Fica olhando um tempo, como quem olha para uma coisa que poderia ter sido dele. E depois vira a esquina.", proxima: "rn_18" },
    rn_18: { tipo: "narracao", cenario: "festa-reina", transicao: "tempo", sprite: null, texto: "Ela volta para dentro pela porta de vidro. Ninguém percebeu que ela saiu, só o Kaito, que está no mesmo lugar, olhando para a porta, esperando.", proxima: "c3_cam_mb" },
    c3_cam_mb: { caminhos: [
      { flag: "Rota_Kaito", proxima: "mb_01" }
    ], proxima: "c3_21" },
    // --- Rota Kaito: a Mio e o Blake (parte 1) ---
    mb_01: { tipo: "narracao", sprite: "blake", texto: "Quando a Akane começa outra música lenta no piano, a SN vê o Blake atravessar a sala. Devagar. Abaixando a cabeça quando passa embaixo do lustre. Ele não está indo para a cozinha, nem para o fardo de água. Ele está indo para a Mio, que está na parede do canto, com a coroa de papelão e o microfone rosa desligado.", proxima: "mb_02" },
    mb_02: { tipo: "narracao", texto: "Ele para na frente dela. A Mio para de respirar. A SN vê de longe, porque a Mio fica completamente parada, como um cervo na estrada.", proxima: "mb_03" },
    mb_03: { quem: "blake", texto: "...Dança?", proxima: "mb_04" },
    mb_04: { tipo: "narracao", sprite: "mio", texto: "A Mio olha para ele. Olha para a mão dele, estendida. Olha em volta, como quem procura se ele está falando com outra pessoa. Não tem outra pessoa.", proxima: "mb_05" },
    mb_05: { quem: "mio", texto: "Comigo?", proxima: "mb_06" },
    mb_06: { quem: "blake", sprite: "blake", texto: "Eu pensei bastante. Eu penso devagar. Mas eu pensei. Eu quero pedir. Não esperar ninguém pedir.", proxima: "mb_07" },
    mb_07: { tipo: "narracao", sprite: null, texto: "A Mio coloca o microfone rosa no bolso. Pega a mão dele. E os dois dançam, no canto da sala, do lado do piano, ele enorme e duro como uma porta, ela com a coroa de papelão torta, sem saber o que fazer com os pés. Ele pisa no pé dela duas vezes. Ela ri as duas.", proxima: "mb_08" },
    mb_08: { tipo: "pensamento", texto: "O Blake pediu. Sozinho. Sem ninguém empurrar. Desde a Sayuri, desde a biblioteca, desde o bracelete com a letra B. Ele pediu.", proxima: "mb_09" },
    mb_09: { tipo: "narracao", sprite: "kaito", texto: "Do lado dela, o Kaito também está olhando. Ele fica um tempo quieto. Depois fala, baixo, só para ela.", proxima: "mb_10" },
    mb_10: { quem: "kaito", texto: "Quatrocentos e treze a zero. Hoje ele ganhou uma.", proxima: "c3_21" },
    c3_21: { tipo: "pensamento", texto: "Ele veio. Ele ficou uma música. Ele não bebeu, não falou com ninguém. Ele só veio olhar. E foi embora. Mas, na esquina, ele olhou pra trás.", proxima: "c3_22" },
    c3_22: { tipo: "pensamento", texto: "“Se eu falar, você vai embora de novo.” Mas é ele que sempre vai embora primeiro.", proxima: "c4_01" },

    /* =================== CENA 4 — A PISCINA (Ryuji e Victor) =================== */
    // Cenário: piscina da Reina (usa "patio-fundos"). Música: festa, depois cômica.
    c4_01: { tipo: "narracao", cenario: "piscina-reina", transicao: "tempo", legenda: "23h — Cena 4", sprite: "ryuji", texto: "Às onze, na beira da piscina iluminada, o Ryuji está sentado numa cadeira de praia com uma lata de cerveja na mão. Uma só. Ainda pela metade. E ele já está diferente. Muito diferente. Ele está olhando para a lua com os olhos molhados.", proxima: "c4_02" },
    c4_02: { quem: "ryuji", texto: "SN. SN, vem aqui. Senta. Olha a lua. Olha o que a lua está fazendo.", proxima: "c4_03" },
    c4_03: { quem: "eu", texto: "Ryuji. Quantas você bebeu?", proxima: "c4_04" },
    c4_04: { quem: "ryuji", texto: "Meia. Meia lata. Eu sou fraco. Eu sou fraco pra bebida. Eu sou forte pra escada de doze metros, mas eu sou fraco pra meia lata. A vida é assim. A vida é cheia de contradição.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "Ela senta do lado dele, na outra cadeira, e tira a lata da mão dele com cuidado, colocando uma garrafa de água no lugar. Ele nem percebe a troca.", proxima: "c4_06" },
    c4_06: { quem: "ryuji", texto: "A lua. A lua é igual a Relâmpago. Ninguém acha que ela é dourada. Todo mundo acha que ela é branca. Mas olha. Olha direito. Ela é dourada de luz.", proxima: "c4_07" },
    c4_07: { quem: "eu", texto: "Ela é dourada de luz, Ryuji.", proxima: "c4_08" },
    c4_08: { quem: "ryuji", texto: "VOCÊ ENTENDE. Você é a única que entende. Você é a lua. Não. Você é a Relâmpago. Não. Isso ficou errado. Eu estou falando que você é uma moto.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "Ele fala isso com uma seriedade de poeta e bebe a água achando que é cerveja. Ela tem que tapar a boca para não rir alto.", proxima: "c4_10" },
    c4_10: { quem: "ryuji", texto: "Eu vou te falar uma coisa. Uma coisa muito importante. Uma coisa que eu nunca falei. Eu vou falar porque eu estou corajoso. A meia lata me deu coragem.", proxima: "c4_esc3" },

    // ▶ ESCOLHA 3 — O Ryuji corajoso
    c4_esc3: { escolhas: [
      { texto: "A. “Não, Ryuji. Fala amanhã. Sem meia lata. Se ainda quiser falar.”", proxima: "c4_3a_1", pontos: { ryuji: 3 }, flags: ["Fala_amanha_Ryuji"] },
      { texto: "B. “Fala.” E ouvir.", proxima: "c4_3b_1", pontos: { ryuji: 2 }, flags: ["Fala_Ryuji_festa"] },
      { texto: "C. “Bebe mais água primeiro. Depois você fala.” E ficar do lado dele até ele dormir na cadeira.", proxima: "c4_3c_1", pontos: { ryuji: 3 }, flags: ["Agua_Ryuji"] }
    ]},
    c4_3a_1: { quem: "eu", texto: "Não, Ryuji. Fala amanhã. Sem meia lata. Se você ainda quiser falar.", proxima: "c4_3a_2" },
    c4_3a_2: { tipo: "narracao", texto: "Ele olha para ela, com os olhos molhados de lua. E, mesmo com meia lata, entende. Ele faz que sim com a cabeça, devagar.", proxima: "c4_3a_3" },
    c4_3a_3: { quem: "ryuji", texto: "...Você não quer que eu fale com coragem de lata. Você quer coragem de verdade. Você é... você é muito, muito legal. Eu vou lembrar disso amanhã. Eu vou escrever no braço.", proxima: "c4_3a_4" },
    c4_3a_4: { tipo: "narracao", texto: "E ele escreve, com uma caneta que tira do bolso, no próprio braço, em letra de eletrocardiograma: “FALAR AMANHÃ. SEM LATA.”", proxima: "c4_11" },
    c4_3b_1: { quem: "eu", texto: "Fala.", proxima: "c4_3b_2" },
    c4_3b_2: { tipo: "narracao", texto: "Ele respira fundo. Abre a boca. Olha para ela. Olha para a lua. Olha para ela de novo.", proxima: "c4_3b_3" },
    c4_3b_3: { quem: "ryuji", texto: "...Eu acho que o Takeo e a Reina estão dançando. Olha. Lá dentro. Pela janela.", proxima: "c4_3b_4" },
    c4_3b_4: { tipo: "narracao", texto: "Ele desviou. Ela percebe. Ele percebe que ela percebeu. E fica vermelho, com a garrafa de água no colo, olhando para a janela, onde o Takeo e a Reina realmente estão dançando.", proxima: "c4_11" },
    c4_3c_1: { quem: "eu", texto: "Bebe mais água primeiro. Depois você fala.", proxima: "c4_3c_2" },
    c4_3c_2: { tipo: "narracao", texto: "Ele bebe. A garrafa inteira. Depois outra, que ela pega do fardo do Blake. Ele vai ficando mais quieto, mais pesado, os olhos fechando. Ela fica do lado. E em cinco minutos, ele dorme na cadeira de praia, de boca aberta, com a faixa na testa, abraçado na garrafa de água como se fosse um ursinho.", proxima: "c4_3c_3" },
    c4_3c_3: { tipo: "narracao", texto: "Ela pega uma toalha de piscina e coloca em cima dele, como um cobertor. Ele resmunga, dormindo: “dourada de luz”.", proxima: "c4_11" },

    // (todas as opções continuam aqui)
    c4_11: { tipo: "narracao", sprite: null, texto: "E aí, do outro lado da piscina, ela ouve. A voz do Victor, alta, por cima da música.", proxima: "c4_12" },
    c4_12: { sprite: "victor", quem: "victor", texto: "Senhoras e senhores! Gatinhas e gatinhos! Planta bêbada! Eu vou agora fazer a manobra mais perigosa da noite! Eu vou atravessar a borda da piscina de olho fechado!", proxima: "c4_13" },
    c4_13: { tipo: "narracao", texto: "Ele está em pé na borda estreita da piscina, de camisa social, de braços abertos, com o pirulito na boca, de olho fechado. Ele não bebeu nada. Ela sabe que ele não bebeu nada. O Victor faz isso sóbrio.", proxima: "c4_14" },
    c4_14: { quem: "eu", texto: "Victor! Não!", proxima: "c4_15" },
    c4_15: { tipo: "narracao", efeito: "tremor", texto: "Três passos. Quatro. No quinto, o sapato social escorrega no azulejo molhado. Ele abre os olhos. Faz uma cara de surpresa absoluta. E cai na piscina. De costas. De roupa. Com o pirulito.", proxima: "c4_16" },
    c4_16: { tipo: "narracao", texto: "SPLASH. A água sobe. Metade da festa grita. A outra metade ri. E, da cadeira de praia, o Ryuji acorda de uma vez, se levanta, joga a toalha para o lado, e grita com uma voz de comandante.", proxima: "c4_17" },
    c4_17: { quem: "ryuji", sprite: "ryuji", texto: "VÍTIMA NA ÁGUA! PROTOCOLO DE RESGATE! EU VOU!", proxima: "c4_18" },
    c4_18: { tipo: "narracao", texto: "E pula. Também de roupa. Também de tênis. Com a faixa na testa. Na parte rasa.", proxima: "c4_19" },
    c4_19: { tipo: "narracao", texto: "A parte rasa tem um metro de profundidade. Os dois ficam em pé dentro da piscina, com a água na cintura, ensopados, o Ryuji segurando o Victor pelo colarinho como quem resgata alguém de um naufrágio.", proxima: "c4_20" },
    c4_20: { quem: "victor", texto: "...Ryuji. Eu estou em pé.", proxima: "c4_21" },
    c4_21: { quem: "ryuji", sprite: "ryuji", texto: "VOCÊ ESTÁ SALVO. NÃO AGRADEÇA. É O MEU TRABALHO.", proxima: "c4_22" },
    c4_22: { tipo: "narracao", sprite: null, texto: "A festa inteira explode de rir. A Mio narra tudo no microfone rosa, gritando, ao vivo. A Hana anota na prancheta, coluna “Emergências”: “23h14. Victor na piscina. Ryuji na piscina. Ninguém morreu. Ainda.”", proxima: "c4_23" },
    c4_23: { tipo: "narracao", texto: "O Victor sai da piscina pingando, com a camisa social grudada, o pirulito ainda na boca, intacto. Ele vem até a SN, que está na beira, segurando uma toalha.", proxima: "c4_24" },
    c4_24: { sprite: "victor", quem: "victor", texto: "Gatinha... SN. Você me avisou. Você gritou “não”. Eu ouvi. Eu fui mesmo assim. Essa é a história da minha vida.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — O Victor molhado
    c4_esc4: { escolhas: [
      { texto: "A. Jogar a toalha na cabeça dele e secar o cabelo dele com força, como quem seca um cachorro.", proxima: "c4_4a_1", pontos: { victor: 3 }, flags: ["Secou_Victor"] },
      { texto: "B. “Você fez isso sóbrio, Victor. Sóbrio.”", proxima: "c4_4b_1", pontos: { victor: 2 }, flags: ["Sobrio_Victor"] },
      { texto: "C. “O pirulito sobreviveu.” E rir até sentar no chão.", proxima: "c4_4c_1", pontos: { victor: 2 }, flags: ["Pirulito_sobreviveu"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "Ela joga a toalha na cabeça dele e esfrega com força, o cabelo, a nuca, as orelhas, como quem seca o Caramelo depois do banho. Ele fica parado, de olho fechado, deixando.", proxima: "c4_4a_2" },
    c4_4a_2: { quem: "victor", texto: "...Ninguém nunca me secou. Eu sempre me seco sozinho. Isso é muito bom. Faz de novo. Não. Para. Para, que eu vou chorar.", proxima: "c4_4a_3" },
    c4_4a_3: { tipo: "narracao", texto: "Ela para. Tira a toalha. Ele está com o cabelo todo arrepiado, e o rosto vermelho, e um sorriso que não é o torto. É outro. Menor. Mais quieto. Ela já viu ele uma vez, no armário.", proxima: "c4_25" },
    c4_4b_1: { quem: "eu", texto: "Você fez isso sóbrio, Victor. Sóbrio.", proxima: "c4_4b_2" },
    c4_4b_2: { quem: "victor", texto: "Eu não preciso de bebida pra fazer besteira. Eu sou natural. Eu sou orgânico. Eu sou cem por cento besteira sem conservante.", proxima: "c4_25" },
    c4_4c_1: { quem: "eu", texto: "O pirulito sobreviveu.", proxima: "c4_4c_2" },
    c4_4c_2: { tipo: "narracao", texto: "Ele tira o pirulito da boca. Olha. Molhado, mas inteiro. Ele coloca de volta na boca com cara de orgulho, e ela ri tanto que senta no chão da beira da piscina, e ele senta do lado, pingando, e ri também, e os dois ficam lá, molhando o chão, até a Hana trazer mais toalha.", proxima: "c4_25" },

    // (todas as opções continuam aqui)
    c4_25: { tipo: "narracao", sprite: "blake", texto: "O Blake chega com mais duas toalhas e uma muda de roupa seca para cada um, que ele trouxe na mochila porque, segundo ele, “o Victor sempre cai em alguma coisa”. Ele entrega sem falar nada, olha para a SN, e faz um sinal pequeno com a cabeça, para a sala.", proxima: "c4_26" },
    c4_26: { quem: "blake", texto: "A Serena. No banheiro de cima. Ela está trancada faz vinte minutos. Uma amiga dela está batendo na porta e chorando.", proxima: "c5_01" },

    /* =================== CENA 5 — O BANHEIRO (Serena) =================== */
    // Cenário: banheiro do andar de cima (usa "apartamento"). Música: abafada, de longe.
    c5_01: { tipo: "narracao", cenario: "festa-reina", transicao: "tempo", legenda: "23h40 — Cena 5", sprite: null, texto: "No andar de cima, o corredor está mais quieto. A música chega abafada, pelo chão. Na frente de uma porta branca, uma das amigas da Serena está sentada no chão, de maquiagem borrada, batendo na porta com a palma da mão, sem força.", proxima: "c5_02" },
    c5_02: { quem: "desconhecido", rotulo: "Amiga da Serena", texto: "Serena, abre. Abre, por favor. Ela bebeu três copos do ponche do terceiro ano. Ela nunca bebe. Ela não abre.", proxima: "c5_03" },
    c5_03: { tipo: "narracao", texto: "Do outro lado da porta, um barulho. Uma tosse. Depois um choro baixo. Depois outro barulho, que a SN, com vinte e oito anos por dentro, reconhece na hora.", proxima: "c5_04" },
    c5_04: { tipo: "pensamento", texto: "Ela está vomitando. Sozinha. Trancada. Bêbada pela primeira vez na vida. No banheiro da casa de outra pessoa. Na festa onde o menino que ela gosta está lá embaixo.", proxima: "c5_05" },
    c5_05: { tipo: "pensamento", texto: "Ela jogou suco em mim ontem. Ela me chamou de cookie verde. Ela me encurralou no corredor.", proxima: "c5_06" },
    c5_06: { tipo: "pensamento", texto: "Ela tem dezesseis anos e está sozinha num banheiro.", proxima: "c5_07" },
    c5_07: { tipo: "narracao", texto: "Ela bate na porta. Duas vezes. Firme.", proxima: "c5_08" },
    c5_08: { quem: "eu", texto: "Serena. Sou eu. A do cookie verde. Abre.", proxima: "c5_09" },
    c5_09: { tipo: "narracao", texto: "Silêncio do outro lado. Depois, uma voz rouca, embolada.", proxima: "c5_10" },
    c5_10: { quem: "serena", texto: "...Vai embora.", proxima: "c5_11" },
    c5_11: { quem: "eu", texto: "Não vou. Abre, ou eu abro.", proxima: "c5_12" },
    c5_12: { quem: "serena", texto: "Você não consegue abrir. Está trancada.", proxima: "c5_13" },
    c5_13: { tipo: "pensamento", texto: "Eu consigo abrir. Eu consigo abrir essa porta, o batente, a parede e o banheiro inteiro. Mas aí a Reina vai ter que explicar pra avó por que o banheiro de cima não tem mais porta.", proxima: "c5_esc5" },

    // ▶ ESCOLHA 5 — A porta
    c5_esc5: { escolhas: [
      { texto: "A. Girar a maçaneta com força. Só um pouco de força. O trinco cede sem quebrar nada.", proxima: "c5_5a_1", pontos: { desvio: 1 }, flags: ["Trinco_cedeu"] },
      { texto: "B. Sentar no chão, encostada na porta. “Então eu fico aqui. Até você abrir.”", proxima: "c5_5b_1", pontos: {}, flags: ["Ficou_porta"] },
      { texto: "C. “Serena, se você não abrir, eu vou buscar o Kaito.”", proxima: "c5_5c_1", pontos: {}, flags: ["Ameacou_Kaito"] }
    ]},
    c5_5a_1: { tipo: "narracao", texto: "Ela segura a maçaneta e gira. Com força. Só um pouco. O trinco faz um estalo seco, e a porta abre, inteira, sem quebrar nada. A amiga da Serena olha para ela de boca aberta.", proxima: "c5_5a_2" },
    c5_5a_2: { quem: "eu", texto: "Estava frouxo.", proxima: "c5_14" },
    c5_5b_1: { tipo: "narracao", texto: "Ela senta no chão, encostada na porta, de costas, com os joelhos dobrados. Faz um sinal para a amiga da Serena descer e buscar água. A amiga vai.", proxima: "c5_5b_2" },
    c5_5b_2: { quem: "eu", texto: "Então eu fico aqui. Até você abrir. Eu tenho a noite inteira. Amanhã é feriado.", proxima: "c5_5b_3" },
    c5_5b_3: { tipo: "narracao", texto: "Silêncio. Um minuto. Dois. Cinco. Depois, um barulho de trinco. A porta abre um pouco, devagar, atrás das costas dela.", proxima: "c5_14" },
    c5_5c_1: { quem: "eu", texto: "Serena, se você não abrir, eu vou buscar o Kaito. E ele vai ver você assim.", proxima: "c5_5c_2" },
    c5_5c_2: { tipo: "narracao", texto: "A porta abre em dois segundos. Com força. A Serena aparece, segurando no batente, com o rosto branco, o cabelo grudado na testa, o rímel escorrido até o queixo.", proxima: "c5_5c_3" },
    c5_5c_3: { quem: "serena", texto: "Não. Não, não, não. Ele não pode ver.", proxima: "c5_14" },

    // (todas as opções continuam aqui)
    c5_14: { cenario: "banheiro-reina", tipo: "narracao", sprite: "serena", texto: "Dentro do banheiro, a Serena está no chão, do lado do vaso, com o vestido manchado, o cabelo comprido caindo no rosto, tremendo. O rímel perfeito escorreu inteiro. Ela não parece a Serena do muro. Ela parece uma menina de dezesseis anos que bebeu três copos de uma coisa que não conhecia.", proxima: "c5_15" },
    c5_15: { tipo: "narracao", texto: "A SN entra. Fecha a porta. Ajoelha do lado dela. E faz a primeira coisa que alguém tinha que ter feito há vinte minutos.", proxima: "c5_16" },
    c5_16: { tipo: "narracao", texto: "Ela junta o cabelo comprido da Serena, todo, com as duas mãos, e segura atrás da cabeça dela. Firme. Longe do rosto.", proxima: "c5_17" },
    c5_17: { quem: "eu", texto: "Pronto. Pode.", proxima: "c5_18" },
    c5_18: { tipo: "narracao", texto: "A Serena olha para ela, de olhos vermelhos, sem entender. Depois vomita de novo. A SN segura o cabelo. Não solta. Não fala nada. Quando acaba, molha uma toalha na pia com a mão livre e passa no rosto dela, tirando o rímel escorrido, devagar, como a mãe dela faz.", proxima: "c5_19" },
    c5_19: { quem: "serena", texto: "...Por que você está fazendo isso?", proxima: "c5_20" },
    c5_20: { quem: "eu", texto: "Porque alguém tinha que segurar o seu cabelo. E eu estava aqui.", proxima: "c5_21" },
    c5_21: { quem: "serena", texto: "Eu joguei suco em você.", proxima: "c5_22" },
    c5_22: { quem: "eu", texto: "Jogou. E eu vou cobrar. Mas não hoje. Hoje você bebe água e deita de lado.", proxima: "c5_23" },
    c5_23: { tipo: "narracao", texto: "A amiga da Serena bate na porta com uma garrafa de água. A SN abre só um pouco, pega a garrafa, fecha. Dá para a Serena. A Serena bebe. Devagar. As mãos tremendo.", proxima: "c5_24" },
    c5_24: { tipo: "narracao", texto: "Depois de um tempo, a Serena encosta a cabeça na parede de azulejo. Fica olhando para o teto. A respiração vai ficando mais calma.", proxima: "c5_25" },
    c5_25: { quem: "serena", texto: "Ontem ele falou comigo. No portão. Ele disse que não precisava eu acordar às cinco. Que ele agradecia o bolo do primeiro ano. Que sentia muito não ter percebido antes.", proxima: "c5_26" },
    c5_26: { quem: "serena", texto: "Ele foi educado. Ele foi muito educado. Eu queria que ele tivesse sido grosso. Grosso eu aguentava. Grosso eu podia odiar.", proxima: "c5_27" },
    c5_27: { tipo: "narracao", texto: "Ela começa a chorar de novo. Não alto. Baixinho, com a cabeça encostada no azulejo, as lágrimas escorrendo sem maquiagem nenhuma agora.", proxima: "c5_28" },
    c5_28: { quem: "serena", texto: "Dois anos. Eu gostei dele dois anos. E ele nem sabia o meu nome até semana passada. Você que ensinou o meu nome pra ele. Você. Eu ouvi no portão.", proxima: "c5_29" },
    c5_29: { tipo: "pensamento", texto: "Eu ensinei. É verdade. “A menina do muro. Cabelo comprido. Sala C. Ela te deu um bolo.”", proxima: "c5_esc6" },

    // ▶ ESCOLHA 6 — Com a Serena no chão do banheiro
    c5_esc6: { escolhas: [
      { texto: "A. Sentar do lado dela, encostada no azulejo também. “Dois anos é muito tempo. Você foi corajosa.”", proxima: "c5_6a_1", pontos: {}, flags: ["Corajosa_Serena"] },
      { texto: "B. “Ele sabe o seu nome agora. E ele nunca vai esquecer o bolo de cenoura. Eu garanto.”", proxima: "c5_6b_1", pontos: {}, flags: ["Nunca_esquece_bolo"] },
      { texto: "C. “Você vai gostar de outra pessoa. Alguém que lembra do seu nome desde o primeiro dia.”", proxima: "c5_6c_1", pontos: {}, flags: ["Outra_pessoa_Serena"] }
    ]},
    c5_6a_1: { tipo: "narracao", texto: "Ela senta do lado da Serena, no chão do banheiro, encostada no azulejo frio. Ombro com ombro. As duas olhando para o teto.", proxima: "c5_6a_2" },
    c5_6a_2: { quem: "eu", texto: "Dois anos é muito tempo. Você levou bolo. Você fez bento. Você acordou às cinco. Você falou com ele no portão na frente de todo mundo. Isso é coragem, Serena. Muita.", proxima: "c5_6a_3" },
    c5_6a_3: { quem: "serena", texto: "...Coragem de quem perdeu.", proxima: "c5_6a_4" },
    c5_6a_4: { quem: "eu", texto: "Coragem não tem time. Coragem é coragem.", proxima: "c5_30" },
    c5_6b_1: { quem: "eu", texto: "Ele sabe o seu nome agora. E ele nunca vai esquecer o bolo de cenoura. Eu garanto. Ele lembrou na hora. Ele disse “o bolo de cenoura” sem eu precisar falar de cenoura.", proxima: "c5_6b_2" },
    c5_6b_2: { tipo: "narracao", texto: "A Serena ri. No meio do choro. Uma risada molhada, sem querer.", proxima: "c5_6b_3" },
    c5_6b_3: { quem: "serena", texto: "Ele não gosta de cenoura. Eu fiz um bolo de uma coisa que ele não gosta. Por dois anos eu achei que foi o bolo que deu errado.", proxima: "c5_6b_4" },
    c5_6b_4: { quem: "eu", texto: "Ele deu pro Ryuji. O Ryuji amou. O Ryuji ama qualquer coisa. Pelo menos alguém amou.", proxima: "c5_30" },
    c5_6c_1: { quem: "eu", texto: "Você vai gostar de outra pessoa. Alguém que lembra do seu nome desde o primeiro dia. Que lembra do bolo antes de você contar.", proxima: "c5_6c_2" },
    c5_6c_2: { quem: "serena", texto: "Você não sabe disso.", proxima: "c5_6c_3" },
    c5_6c_3: { quem: "eu", texto: "Eu sei. Eu sei mais coisa do que parece.", proxima: "c5_6c_4" },
    c5_6c_4: { tipo: "pensamento", texto: "Eu tenho vinte e oito anos por dentro. Eu já fui a menina no chão do banheiro. E eu sobrevivi. E gostei de outra pessoa depois. Várias vezes.", proxima: "c5_30" },

    // (todas as opções continuam aqui)
    c5_30: { tipo: "narracao", texto: "A Serena fica quieta. Depois, sem olhar para ela, encosta a cabeça no ombro da SN. Só um pouco. Como quem cansa. A SN deixa.", proxima: "c5_31" },
    c5_31: { quem: "serena", texto: "Isso não muda nada. Eu ainda acho que você é baixinha demais pra ele.", proxima: "c5_32" },
    c5_32: { quem: "eu", texto: "Eu sei.", proxima: "c5_33" },
    c5_33: { quem: "serena", texto: "E o cookie era horrível. Eu vi a foto. A Mio postou.", proxima: "c5_34" },
    c5_34: { quem: "eu", texto: "Era horrível.", proxima: "c5_35" },
    c5_35: { quem: "serena", texto: "...Obrigada por segurar o meu cabelo.", proxima: "c5_36" },
    c5_36: { tipo: "narracao", texto: "Ela fala isso tão baixo que quase não dá para ouvir. A SN não responde. Só fica ali, servindo de ombro, no chão do banheiro de cima da casa da Reina, com a música abafada vindo pelo chão.", proxima: "c5_37" },
    c5_37: { tipo: "narracao", sprite: "blake", texto: "Quinze minutos depois, alguém bate na porta. Três batidas, lentas. O Blake. Ele não entra. Fala pela porta.", proxima: "c5_38" },
    c5_38: { quem: "blake", texto: "Eu levo ela pra casa. A moto não. Eu chamei um táxi. A amiga dela vai junto. Eu pago.", proxima: "c5_39" },
    c5_39: { cenario: "frente-casa-reina-noite", tipo: "narracao", sprite: null, texto: "A SN ajuda a Serena a levantar. Desce a escada com ela, segurando pela cintura, pela porta dos fundos, para ninguém ver. O táxi está esperando no portão. O Blake abre a porta do carro, ajuda a Serena a sentar, coloca o cinto nela, e entrega uma garrafa de água.", proxima: "c5_40" },
    c5_40: { tipo: "narracao", texto: "Antes de a porta fechar, a Serena olha para a SN pela janela do táxi. Não fala nada. Mas faz um aceno pequeno com a cabeça. Um só. O táxi vai.", proxima: "c5_41" },
    c5_41: { quem: "blake", sprite: "blake", texto: "Você segurou o cabelo dela.", proxima: "c5_42" },
    c5_42: { quem: "eu", texto: "Alguém tinha que segurar.", proxima: "c5_43" },
    c5_43: { tipo: "narracao", texto: "O Blake fica olhando para ela, embaixo do poste do portão, muito tempo. Depois fala, baixo, como quem não queria falar.", proxima: "c5_44" },
    c5_44: { quem: "blake", texto: "É por isso. É por isso que todo mundo...", proxima: "c5_45" },
    c5_45: { tipo: "narracao", texto: "Ele não termina. Ele vira e volta para dentro da casa, sem terminar a frase, com as orelhas vermelhas até onde a luz do poste deixa ver.", proxima: "c6_01" },

    /* =================== CENA 6 — VERDADE OU DESAFIO =================== */
    // Cenário: sala da Reina, meia-noite. Música: mais baixa, de madrugada.
    c6_01: { tipo: "narracao", cenario: "festa-reina", transicao: "tempo", legenda: "Meia-noite — Cena 6", sprite: null, texto: "Meia-noite. A festa diminuiu. Metade das pessoas foi embora. Na sala, no tapete enorme da avó, uns quinze sentados em roda, com uma garrafa de refrigerante vazia no meio. A Mio no comando, de coroa de papelão, com o microfone rosa.", proxima: "c6_02" },
    c6_02: { quem: "mio", sprite: "mio", texto: "Verdade ou desafio! A garrafa escolhe quem pergunta e quem responde! Quem não responder, pula na piscina! O Victor e o Ryuji já estão molhados, então pra eles não vale!", proxima: "c6_03" },
    c6_03: { tipo: "narracao", sprite: null, texto: "Na roda: a Mio, a Hana, a Reina, a Akane, o Takeo, o Kaito, o Blake, o Ryuji enrolado numa toalha, o Victor de roupa seca do Blake, que fica enorme nele, e uns outros do segundo ano. A SN senta entre a Mio e o Kaito.", proxima: "c6_04" },
    c6_04: { tipo: "narracao", texto: "A garrafa gira. Para na Reina, que pergunta. E no Takeo, que responde. A sala inteira faz “uuuuh”.", proxima: "c6_05" },
    c6_05: { quem: "reina", sprite: "reina", texto: "Takeo. Verdade. Você veio na festa por causa de quem?", proxima: "c6_06" },
    c6_06: { tipo: "narracao", sprite: "takeo", texto: "O Takeo fica vermelho até o gesso. Olha para a Reina. Olha para a SN, do outro lado da roda. Olha para a Reina de novo.", proxima: "c6_07" },
    c6_07: { quem: "takeo", sprite: "takeo", texto: "...Porque você me ligou às cinco e disse que precisava de alguém que soubesse usar escada.", proxima: "c6_08" },
    c6_08: { quem: "reina", sprite: "reina", texto: "Isso não é verdade. Isso é logística.", proxima: "c6_09" },
    c6_09: { quem: "takeo", sprite: "takeo", texto: "É uma verdade logística.", proxima: "c6_10" },
    c6_10: { tipo: "narracao", sprite: null, texto: "A roda ri. A Reina joga uma almofada nele. Ele pega com a mão boa e abraça a almofada, rindo, e a Reina, ela vê, fica vermelha também, olhando para ele abraçado na almofada que ela jogou.", proxima: "c6_11" },
    c6_11: { tipo: "narracao", texto: "A garrafa gira. Para no Victor, que pergunta. E na SN, que responde.", proxima: "c6_12" },
    c6_12: { sprite: "victor", quem: "victor", texto: "Gatinha... SN. Verdade ou desafio?", proxima: "c6_esc7" },

    // ▶ ESCOLHA 7 — Verdade ou desafio
    c6_esc7: { escolhas: [
      { texto: "A. “Verdade.”", proxima: "c6_7a_1", pontos: {}, flags: ["Escolheu_verdade"] },
      { texto: "B. “Desafio.”", proxima: "c6_7b_1", pontos: {}, flags: ["Escolheu_desafio"] },
      { texto: "C. Levantar, ir até a beira da piscina, e pular. De roupa. “Nenhum dos dois.”", proxima: "c6_7c_1", pontos: { victor: 1, ryuji: 1 }, flags: ["Pulou_piscina"] }
    ]},
    c6_7a_1: { quem: "eu", texto: "Verdade.", proxima: "c6_7a_2" },
    c6_7a_2: { tipo: "narracao", texto: "O Victor sorri. Um sorriso de quem pensou nessa pergunta a noite inteira. A roda inteira chega mais perto.", proxima: "c6_7a_3" },
    c6_7a_3: { quem: "victor", texto: "De todo mundo nessa roda... quem você salvaria primeiro de um incêndio?", proxima: "c6_7a_4" },
    c6_7a_4: { tipo: "narracao", texto: "Silêncio. A roda inteira olha para ela. Ela sente o Kaito do lado dela parar de respirar. Sente o Takeo, do outro lado, apertar a almofada. O Blake fica imóvel. O Ryuji levanta a cabeça da toalha. O Victor fica parado, esperando, com o pirulito.", proxima: "c6_7a_5" },
    c6_7a_5: { tipo: "pensamento", texto: "Ele não perguntou de quem eu gosto. Ele perguntou quem eu salvaria. Ele é esperto. Ele é muito esperto.", proxima: "c6_7a_6" },
    c6_7a_6: { quem: "eu", texto: "Eu salvaria a Hana primeiro. Porque ela tem a prancheta com o nome de todo mundo. Aí eu sei quem falta.", proxima: "c6_7a_7" },
    c6_7a_7: { tipo: "narracao", texto: "A roda explode. Metade ri, metade reclama que é trapaça. A Hana levanta a prancheta, orgulhosa. O Victor bate palma devagar, como quem reconhece um mestre. E ela sente, do lado, o Kaito soltar o ar. E rir pelo nariz.", proxima: "c6_13" },
    c6_7b_1: { quem: "eu", texto: "Desafio.", proxima: "c6_7b_2" },
    c6_7b_2: { quem: "victor", texto: "Desafio. Tá. Fala no ouvido de uma pessoa dessa roda uma coisa que você nunca falou pra ela. Só ela ouve. Ninguém mais.", proxima: "c6_7b_3" },
    c6_7b_3: { tipo: "narracao", texto: "A roda inteira faz “uuuuh”. Ela levanta. Olha em volta. Para cada um. E escolhe.", proxima: "c6_cam_ouv" },
    c6_cam_ouv: { caminhos: [
      { flag: "Rota_Kaito", proxima: "c6_ouv_k" },
      { flag: "Rota_Takeo", proxima: "c6_ouv_t" },
      { flag: "Rota_Blake", proxima: "c6_ouv_b" },
      { flag: "Rota_Ryuji", proxima: "c6_ouv_r" },
      { flag: "Rota_Victor", proxima: "c6_ouv_v" }
    ], proxima: "c6_ouv_k" },
    c6_ouv_k: { tipo: "narracao", texto: "Ela se abaixa do lado do Kaito. Encosta a boca na orelha dele. Fala baixo, só para ele: “O cookie verde foi o terceiro que eu fiz pensando em você. Os dois primeiros eu queimei de nervoso.” Ele fica vermelho até o pescoço. Não consegue olhar para ninguém o resto da rodada.", proxima: "c6_13" },
    c6_ouv_t: { tipo: "narracao", texto: "Ela vai até o Takeo. Se abaixa. Fala baixo, só para ele: “Eu voltei de muito longe por sua causa. Um dia eu te conto.” Ele fica parado, de olho arregalado, sem entender, abraçado na almofada da Reina. Ele não pergunta. Mas guarda.", proxima: "c6_13" },
    c6_ouv_b: { tipo: "narracao", texto: "Ela vai até o Blake. Se abaixa. Fala baixo, só para ele: “Eu sei que você fica na escada. Eu olho pra escada toda vez.” Ele não se mexe. Nem um músculo. Mas as orelhas dele ficam vermelhas tão rápido que a Mio aponta e grita no microfone.", proxima: "c6_13" },
    c6_ouv_r: { tipo: "narracao", texto: "Ela vai até o Ryuji, enrolado na toalha. Se abaixa. Fala baixo, só para ele: “Amanhã, sem lata, eu vou te ouvir.” Ele olha para o próprio braço, onde está escrito “FALAR AMANHÃ”, ou não está, e depois para ela, e fica completamente sem palavras pela primeira vez na noite.", proxima: "c6_13" },
    c6_ouv_v: { tipo: "narracao", texto: "Ela vai até o Victor, que fez o desafio. Se abaixa do lado dele. Fala baixo, só para ele: “Você é a pessoa mais engraçada que eu conheço. E a mais sozinha. Eu sei.” O Victor tira o pirulito da boca. Não coloca de volta. Fica olhando para o chão.", proxima: "c6_13" },
    c6_7c_1: { cenario: "piscina-reina", transicao: "tempo", tipo: "narracao", texto: "Ela levanta. Atravessa a sala. Abre a porta de vidro. Vai até a beira da piscina. E pula. De roupa. De rímel.", proxima: "c6_7c_2" },
    c6_7c_2: { tipo: "narracao", texto: "Quando ela sobe, ensopada, a roda inteira está na porta de vidro, gritando. O Ryuji grita “VÍTIMA!” e pula de novo. O Victor pula atrás. O Kaito fica na beira, de braços cruzados, rindo de verdade, com os dentes, balançando a cabeça.", proxima: "c6_7c_3" },
    c6_7c_3: { quem: "kaito", sprite: "kaito", texto: "...Você pulou pra não responder.", proxima: "c6_7c_4" },
    c6_7c_4: { quem: "eu", texto: "Eu pulei porque estava calor.", proxima: "c6_13" },

    // (todas as opções continuam aqui)
    c6_13: { cenario: "festa-reina", tipo: "narracao", sprite: null, texto: "A garrafa gira mais umas vezes. A Akane confessa que tem medo de borboleta. A Hana confessa que tem uma tabela com o nome de todos os meninos da escola e uma nota de zero a dez para cada um, mas se recusa a mostrar. O Blake, quando é a vez dele, escolhe desafio só para não ter que falar, e é desafiado a cantar, e canta, com a voz grave, uma música de ninar que a mãe dele cantava para os gêmeos. A sala inteira fica em silêncio.", proxima: "c6_14" },
    c6_14: { tipo: "narracao", texto: "Às duas da manhã, a roda se desmancha. As pessoas vão indo embora. O Blake começa a levar gente de táxi, um grupo de cada vez. A Mio dorme no sofá com a coroa de papelão torta. A Hana revisa a prancheta. O jardim, lá fora, ainda tem as luzinhas acesas.", proxima: "c6_15" },
    c6_15: { tipo: "narracao", texto: "A SN sai para o jardim para respirar. E, quase na mesma hora, alguém sai também, atrás dela.", proxima: "r_cam" },

    /* =================== ROTA — O JARDIM, DE MADRUGADA =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { tipo: "narracao", cenario: "jardim-reina", transicao: "tempo", legenda: "2h — Jardim", sprite: "kaito", texto: "É o Kaito. Ele para do lado dela, no meio do jardim, embaixo das luzinhas que o Takeo pendurou com um braço só. O barulho da festa ficou lá dentro. Aqui fora, só grilo e o filtro da piscina.", proxima: "rk_02" },
    rk_02: { quem: "kaito", texto: "Eu não gosto de festa.", proxima: "rk_03" },
    rk_03: { quem: "eu", texto: "Eu sei.", proxima: "rk_04" },
    rk_04: { quem: "kaito", texto: "Eu vim porque você vinha.", proxima: "rk_05" },
    rk_05: { tipo: "narracao", texto: "Ele fala isso olhando para as luzinhas. Depois olha para ela. Não desvia. Ela está com o cabelo meio molhado, ou meio solto, e o rímel meio borrado de tanto rir, e ele fica olhando para ela como se ela fosse a única luzinha acesa no jardim.", proxima: "rk_06" },
    rk_06: { quem: "kaito", texto: "Não tem timer aqui. Não tem forno. O Ryuji está dormindo no sofá com a cabeça no pé da Mio.", proxima: "rk_07" },
    rk_07: { quem: "eu", texto: "Você conferiu?", proxima: "rk_08" },
    rk_08: { quem: "kaito", texto: "Eu conferi. Duas vezes.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. Chegar o último centímetro. Ela mesma.", proxima: "rk_a1", pontos: { kaito: 5 }, flags: ["Beijo_Kaito"] },
      { texto: "B. “Então chega você, Kaito. Eu espero.”", proxima: "rk_b1", pontos: { kaito: 5 }, flags: ["Beijo_Kaito"] },
      { texto: "C. “Não aqui. Não numa festa. Um dia que seja só nosso.”", proxima: "rk_c1", pontos: { kaito: 3 }, flags: ["Dia_so_nosso"] }
    ]},
    rk_a1: { tipo: "narracao", texto: "Ela chega o último centímetro. Ela mesma. Fica na ponta do pé, porque ele é muito mais alto, e segura na jaqueta dele, na frente, com as duas mãos, para não cair.", proxima: "rk_a2" },
    rk_a2: { tipo: "narracao", texto: "E beija ele. De verdade. Com querer. Não é um segundo. É muito mais que um segundo. É um tempo que ela não conta, porque parou de contar.", proxima: "rk_a3" },
    rk_a3: { tipo: "narracao", texto: "Ele fica parado no começo, de surpresa, com as mãos no ar. Depois as mãos descem, devagar, para a cintura dela, onde ficaram no hall. E seguram. E ele beija de volta.", proxima: "rk_a4" },
    rk_a4: { tipo: "narracao", texto: "Quando ela volta para o chão, sem ponta do pé, ele continua olhando para baixo, para ela, com a boca entreaberta e as orelhas pegando fogo, e não fala nada por um tempo muito longo.", proxima: "rk_a5" },
    rk_a5: { quem: "kaito", texto: "...Com querer.", proxima: "rk_a6" },
    rk_a6: { quem: "eu", texto: "Com querer.", proxima: "rk_fim" },
    rk_b1: { quem: "eu", texto: "Então chega você, Kaito. Eu espero.", proxima: "rk_b2" },
    rk_b2: { tipo: "narracao", texto: "Ele olha para ela. Respira fundo. Uma vez. Duas. Como no forno. Como quem pula de um lugar alto.", proxima: "rk_b3" },
    rk_b3: { tipo: "narracao", texto: "E chega. Devagar. Abaixa a cabeça, porque ela é muito mais baixa, e coloca uma mão no rosto dela, do lado, com o polegar no queixo, do jeito que ele fez na rua alta. E beija ela.", proxima: "rk_b4" },
    rk_b4: { tipo: "narracao", texto: "Não é sem querer. Não é um segundo. É devagar, e com cuidado, e um pouco desajeitado, como o laço do avental, como quem nunca fez isso direito e está tentando fazer certo.", proxima: "rk_b5" },
    rk_b5: { tipo: "narracao", texto: "Quando ele se afasta, só um pouco, a testa dele fica encostada na dela.", proxima: "rk_b6" },
    rk_b6: { quem: "kaito", texto: "...Eu esperei muito tempo pra isso.", proxima: "rk_b7" },
    rk_b7: { tipo: "pensamento", texto: "Muito tempo. Desde o hall? Desde o forno? Ou desde antes? Desde quando?", proxima: "rk_fim" },
    rk_c1: { quem: "eu", texto: "Não aqui. Não numa festa. Um dia que seja só nosso. Sem Ryuji. Sem timer. Sem a casa da Reina.", proxima: "rk_c2" },
    rk_c2: { tipo: "narracao", texto: "Ele fica parado. Depois sorri. Aquele sorriso de canto. E faz que sim com a cabeça.", proxima: "rk_c3" },
    rk_c3: { quem: "kaito", texto: "Um dia só nosso. Eu escolho o dia. Você escolhe o lugar.", proxima: "rk_c4" },
    rk_c4: { tipo: "narracao", texto: "Ele pega a mão dela. Entrelaça os dedos. E os dois ficam parados no meio do jardim, de mão dada, embaixo das luzinhas, até o Blake aparecer na porta de vidro e tossir, alto, de propósito.", proxima: "rk_fim" },
    rk_fim: { tipo: "narracao", sprite: null, texto: "Da porta de vidro, o Blake tosse. Ele vem avisar que o táxi chegou. Ele vê os dois. Fica parado um segundo. Depois vira, sem falar nada, e entra de novo.", proxima: "mb_11" },

    // --- Rota Kaito: a Mio e o Blake (parte 2) ---
    mb_11: { cenario: "frente-casa-reina-noite", tipo: "narracao", sprite: null, transicao: "tempo", legenda: "2h30", texto: "Meia hora depois, quando ela entra para pegar o casaco, passa pela varanda da frente. E para. Na escada da varanda, embaixo da luz amarela da porta, estão sentados o Blake e a Mio. Sozinhos.", proxima: "mb_12" },
    mb_12: { tipo: "narracao", sprite: "mio", texto: "A coroa de papelão está no colo do Blake. A cabeça da Mio está no ombro dele. Ele está falando alguma coisa, baixo, e ela está rindo, aquele riso de madrugada que a SN conhece desde sempre.", proxima: "mb_13" },
    mb_13: { tipo: "narracao", texto: "E aí a Mio levanta a cabeça do ombro dele. Olha para ele. Ele olha para ela. E ele se inclina, devagar, do jeito que ele faz tudo, como quem confere três vezes antes, e beija ela. A Mio deixa o microfone rosa cair da mão. Ele quica na escada e acende sozinho.", proxima: "mb_14" },
    mb_14: { tipo: "narracao", sprite: null, texto: "A SN dá dois passos para trás, sem fazer barulho, e volta para dentro antes que eles vejam. Encosta na parede do corredor. Tapa a boca com as duas mãos, para não gritar.", proxima: "mb_15" },
    mb_15: { tipo: "pensamento", texto: "A Mio. A Mio e o Blake. Na escada da varanda. Com o microfone aceso no chão, transmitindo pra ninguém.", proxima: "mb_16" },
    mb_16: { tipo: "pensamento", texto: "Ela gostou dele desde o primeiro ano. Ela viu ele com a Sayuri e não falou nada. Ela comeu caldo na cozinha da lojinha pra não chorar. E hoje ela usou coroa de papelão, e ele atravessou a sala pra pedir.", proxima: "mb_17" },
    mb_17: { tipo: "narracao", texto: "O celular vibra no bolso dela, dois minutos depois. É a Mio. Ela deve ter visto a SN indo embora. Ou não. A mensagem é só uma fileira de emojis: um coração, uma coroa, um microfone, e uns quinze pontos de exclamação.", proxima: "mb_18" },
    mb_18: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu vi. Amanhã. Com gestos.", proxima: "mb_19" },
    mb_19: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "COM MUITOS GESTOS.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { tipo: "narracao", cenario: "jardim-reina", transicao: "tempo", legenda: "2h — Jardim", sprite: "takeo", texto: "É o Takeo, mancando, com o gesso apoiado no peito. Ele para do lado dela, embaixo das luzinhas que ele mesmo pendurou.", proxima: "rt_02" },
    rt_02: { quem: "takeo", sprite: "takeo", texto: "Eu pendurei essas. Com um braço. A Reina segurou a escada. Ela segurou tão forte que os dedos dela ficaram brancos.", proxima: "rt_03" },
    rt_03: { quem: "takeo", sprite: "takeo", texto: "Na verdade ou desafio. Você falou no meu ouvido. Ou não falou. Eu não sei se você ia falar. Mas eu fiquei pensando a noite inteira no que você ia falar se fosse eu.", proxima: "rt_04" },
    rt_04: { tipo: "narracao", texto: "Ele fala isso olhando para as luzinhas, e não para ela. A Reina dançou com ele três músicas. Ela viu. Ele dançou como quem tem um braço só e não liga.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. Falar no ouvido dele agora. “Eu voltei de muito longe por sua causa.”", proxima: "rt_a1", pontos: { takeo: 4 }, flags: ["Voltei_longe_Takeo"] },
      { texto: "B. “Você dançou com a Reina três músicas.”", proxima: "rt_b1", pontos: { takeo: 2 }, flags: ["Dancou_Reina"] },
      { texto: "C. Pegar a mão boa dele. “Dança uma comigo. Aqui. Sem música.”", proxima: "rt_c1", pontos: { takeo: 4 }, flags: ["Danca_sem_musica"] }
    ]},
    rt_a1: { tipo: "narracao", texto: "Ela se aproxima. Fica na ponta do pé. Fala no ouvido dele, baixo: “Eu voltei de muito longe por sua causa. Um dia eu te conto como.”", proxima: "rt_a2" },
    rt_a2: { tipo: "narracao", texto: "O Takeo fica parado. Ela volta para o chão. Ele olha para ela com aquela cara de quem pesquisa jornal velho, de quem sabe que tem uma história escrita em algum lugar e ainda não achou.", proxima: "rt_a3" },
    rt_a3: { quem: "takeo", sprite: "takeo", texto: "...Eu vou esperar. Eu sou bom em esperar. E em pesquisar. Mas essa eu vou esperar você contar.", proxima: "r_fim" },
    rt_b1: { quem: "eu", texto: "Você dançou com a Reina três músicas.", proxima: "rt_b2" },
    rt_b2: { tipo: "narracao", texto: "O Takeo fica vermelho. Muito vermelho.", proxima: "rt_b3" },
    rt_b3: { quem: "takeo", sprite: "takeo", texto: "Ela pediu. Ela pediu três vezes. Ela disse que era briga limpa. Eu não sei o que é briga limpa. Eu acho que eu estou no meio de uma briga e ninguém me explicou as regras.", proxima: "rt_b4" },
    rt_b4: { quem: "eu", texto: "Você está no meio, Takeo. Bem no meio.", proxima: "rt_b5" },
    rt_b5: { quem: "takeo", sprite: "takeo", texto: "...Eu sou bom em ficar no meio do caminho. Mas não desse jeito.", proxima: "r_fim" },
    rt_c1: { tipo: "narracao", texto: "Ela pega a mão boa dele. Coloca a outra mão dela no ombro dele, do lado do gesso, com cuidado. E começa a balançar, devagar, sem música, no meio do jardim.", proxima: "rt_c2" },
    rt_c2: { tipo: "narracao", texto: "O Takeo fica duro no começo. Depois relaxa. Coloca a mão do gesso, desajeitada, nas costas dela. E os dois dançam assim, sem música, só com os grilos e o filtro da piscina, embaixo das luzinhas que ele pendurou com um braço só.", proxima: "rt_c3" },
    rt_c3: { quem: "takeo", sprite: "takeo", texto: "...Isso é melhor que as três com a Reina. Não conta pra ela.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { tipo: "narracao", cenario: "jardim-reina", transicao: "tempo", legenda: "2h — Jardim", sprite: "blake", texto: "É o Blake, com a chave da moto na mão e a camiseta molhada de suor de carregar gente para o táxi a noite inteira. Ele para do lado dela, embaixo das luzinhas.", proxima: "rb_02" },
    rb_02: { quem: "blake", texto: "Faltam dois táxis. Depois eu te levo. Na moto. Você não bebeu.", proxima: "rb_03" },
    rb_03: { quem: "eu", texto: "Você também não.", proxima: "rb_04" },
    rb_04: { quem: "blake", texto: "Eu nunca bebo. Alguém tem que levar todo mundo.", proxima: "rb_05" },
    rb_05: { tipo: "narracao", texto: "Ele fica quieto. Os dois olhando para a piscina azul. Depois ele fala, devagar, como quem termina uma frase que começou horas atrás.", proxima: "rb_06" },
    rb_06: { quem: "blake", texto: "No portão. Do táxi da Serena. Eu falei “é por isso que todo mundo” e não terminei.", proxima: "rb_07" },
    rb_07: { quem: "blake", texto: "É por isso que todo mundo gosta de você. Você segura o cabelo de quem jogou suco em você. Eu nunca vi ninguém fazer isso.", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. “Todo mundo, Blake? Ou você?”", proxima: "rb_a1", pontos: { blake: 4 }, flags: ["Todo_mundo_ou_voce"] },
      { texto: "B. “Você cantou a música de ninar dos gêmeos na roda. Isso foi mais corajoso que qualquer coisa.”", proxima: "rb_b1", pontos: { blake: 3 }, flags: ["Musica_ninar"] },
      { texto: "C. Encostar a cabeça no braço dele. “Você carregou gente a noite inteira. Descansa um minuto.”", proxima: "rb_c1", pontos: { blake: 4 }, flags: ["Descansa_Blake"] }
    ]},
    rb_a1: { quem: "eu", texto: "Todo mundo, Blake? Ou você?", proxima: "rb_a2" },
    rb_a2: { tipo: "narracao", texto: "O Blake para. A chave da moto para de balançar na mão dele. Ele olha para ela, muito tempo, embaixo das luzinhas.", proxima: "rb_a3" },
    rb_a3: { quem: "blake", texto: "...Desde o festival. Eu penso devagar. Mas eu pensei. Eu terminei de pensar.", proxima: "rb_a4" },
    rb_a4: { tipo: "narracao", texto: "Ele não fala mais nada. Ele não precisa. Ele só fica ali, do lado dela, com as orelhas vermelhas, sem desviar o olhar pela primeira vez desde que ela conhece ele.", proxima: "r_fim" },
    rb_b1: { quem: "eu", texto: "Você cantou a música de ninar dos gêmeos na roda. Na frente de todo mundo. Isso foi mais corajoso que qualquer coisa.", proxima: "rb_b2" },
    rb_b2: { quem: "blake", texto: "Era desafio.", proxima: "rb_b3" },
    rb_b3: { quem: "eu", texto: "Você podia ter cantado qualquer coisa. Você cantou a dos gêmeos.", proxima: "rb_b4" },
    rb_b4: { tipo: "narracao", texto: "Ele fica quieto. Depois, baixinho, quase sem voz, ele canta de novo. Só um pedaço. Só para ela. A voz grave, embaixo das luzinhas, com os grilos.", proxima: "r_fim" },
    rb_c1: { tipo: "narracao", texto: "Ela encosta a cabeça no braço dele. Ele é tão alto que a cabeça dela fica no meio do braço, entre o ombro e o cotovelo. Ele fica parado. Depois, devagar, coloca a mão em cima da cabeça dela. De leve.", proxima: "rb_c2" },
    rb_c2: { quem: "eu", texto: "Você carregou gente a noite inteira. Descansa um minuto.", proxima: "rb_c3" },
    rb_c3: { quem: "blake", texto: "...Um minuto.", proxima: "rb_c4" },
    rb_c4: { tipo: "narracao", texto: "Passa um minuto. Passam cinco. O táxi buzina no portão. Ele não sai. A buzina de novo. Ele não sai.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { tipo: "narracao", cenario: "jardim-reina", transicao: "tempo", legenda: "2h — Jardim", sprite: "ryuji", texto: "É o Ryuji. Enrolado na toalha, com o cabelo ainda molhado da piscina, os olhos vermelhos de sono, e completamente sóbrio agora, depois de quatro garrafas de água.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", texto: "A meia lata acabou. Eu estou sem lata. Totalmente sem lata. Eu bebi água até o meu rim pedir socorro.", proxima: "rr_03" },
    rr_03: { tipo: "narracao", texto: "Ele para na frente dela. Tira a toalha dos ombros. Fica só de camiseta molhada, embaixo das luzinhas. Respira fundo.", proxima: "rr_04" },
    rr_04: { quem: "ryuji", texto: "Sem lata. Sem capacete. Sem cartão. Eu treinei no espelho, na piscina, e no sofá, com a cabeça no pé da Mio.", proxima: "rr_05" },
    rr_05: { quem: "ryuji", texto: "Eu gosto de você. Não do jeito que eu gosto da Relâmpago. Mais. Muito mais. Do jeito que eu gosto de ser bombeiro. Do jeito que dá medo e eu vou mesmo assim.", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. Abraçar ele. Com a camiseta molhada e tudo.", proxima: "rr_a1", pontos: { ryuji: 4 }, flags: ["Abraco_Ryuji_festa"] },
      { texto: "B. “Você falou. Sem lata.”", proxima: "rr_b1", pontos: { ryuji: 4 }, flags: ["Falou_sem_lata"] },
      { texto: "C. Beijar a bochecha dele. Rápido. “Isso é pra coragem.”", proxima: "rr_c1", pontos: { ryuji: 4 }, flags: ["Bochecha_Ryuji"] }
    ]},
    rr_a1: { tipo: "narracao", texto: "Ela abraça ele. Com a camiseta molhada, com o cheiro de cloro, com a faixa torta na testa. Ele fica parado, de braços abertos no ar, sem saber o que fazer. Depois fecha os braços em volta dela. Devagar. Como quem segura uma coisa preciosa num resgate.", proxima: "rr_a2" },
    rr_a2: { quem: "ryuji", texto: "...Isso é um sim? Isso é um talvez? Isso é um “volta amanhã”? Eu não sei ler abraço. Não tem cartão de abraço.", proxima: "rr_a3" },
    rr_a3: { quem: "eu", texto: "Isso é um “eu ouvi”. E um “obrigada por falar”.", proxima: "rr_a4" },
    rr_a4: { quem: "ryuji", texto: "Eu aceito. Eu aceito muito.", proxima: "r_fim" },
    rr_b1: { quem: "eu", texto: "Você falou. Sem lata.", proxima: "rr_b2" },
    rr_b2: { quem: "ryuji", texto: "Eu falei. Eu falei! Eu não vomitei! Eu falei e não vomitei!", proxima: "rr_b3" },
    rr_b3: { tipo: "narracao", texto: "Ele levanta os braços para o céu, embaixo das luzinhas, comemorando como quem destruiu a última torre. Depois abaixa os braços. Fica olhando para ela, quieto.", proxima: "rr_b4" },
    rr_b4: { quem: "ryuji", texto: "...Você não precisa responder hoje. Bombeiro sabe esperar o fogo baixar.", proxima: "r_fim" },
    rr_c1: { tipo: "narracao", texto: "Ela fica na ponta do pé e dá um beijo rápido na bochecha dele, do lado da faixa. O Ryuji congela. Completamente. Como estátua.", proxima: "rr_c2" },
    rr_c2: { quem: "eu", texto: "Isso é pra coragem.", proxima: "rr_c3" },
    rr_c3: { tipo: "narracao", texto: "Ele não fala nada. Ele coloca a mão na bochecha, no lugar. E fica assim. Ela entra de volta na casa. Ele fica no jardim, sozinho, com a mão na bochecha, embaixo das luzinhas, por uns dez minutos inteiros.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { tipo: "narracao", cenario: "jardim-reina", transicao: "tempo", legenda: "2h — Jardim", sprite: "victor", texto: "É o Victor, com a roupa seca do Blake, que fica enorme nele, a camiseta até o meio da coxa e a calça dobrada três vezes. Sem pirulito. Sem gatinha.", proxima: "rv_02" },
    rv_02: { quem: "victor", texto: "Eu caí na piscina sóbrio. Eu fiz a pergunta mais esperta da noite na verdade ou desafio. E você respondeu de um jeito mais esperto que a minha pergunta.", proxima: "rv_03" },
    rv_03: { quem: "victor", texto: "Eu queria saber. De verdade. Quem você salvaria primeiro. Eu perguntei porque eu queria saber se ia ser eu. Eu sabia que não ia ser. Mas eu queria perguntar.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. “Victor. Você seria o primeiro que eu tirava da piscina. Toda vez.”", proxima: "rv_a1", pontos: { victor: 4 }, flags: ["Primeiro_piscina"] },
      { texto: "B. “Por que você acha que não ia ser você?”", proxima: "rv_b1", pontos: { victor: 4 }, flags: ["Por_que_nao_Victor"] },
      { texto: "C. Arrumar a gola da camiseta enorme do Blake nele. “Você fica bonito com roupa que não é sua.”", proxima: "rv_c1", pontos: { victor: 3 }, flags: ["Roupa_Blake_Victor"] }
    ]},
    rv_a1: { quem: "eu", texto: "Victor. Você seria o primeiro que eu tirava da piscina. Toda vez.", proxima: "rv_a2" },
    rv_a2: { tipo: "narracao", texto: "O Victor olha para ela. A piada não vem. Nenhuma. Ele fica parado, embaixo das luzinhas, com a roupa enorme, e os olhos dele brilham de um jeito que não é de rir.", proxima: "rv_a3" },
    rv_a3: { quem: "victor", texto: "...Tá. Então eu vou cair em mais piscina.", proxima: "r_fim" },
    rv_b1: { quem: "eu", texto: "Por que você acha que não ia ser você?", proxima: "rv_b2" },
    rv_b2: { quem: "victor", texto: "Porque eu sou o cara que chama todo mundo de gatinha. Ninguém leva a sério o cara que chama todo mundo de gatinha. É de propósito. Se ninguém leva a sério, ninguém pode me dar fora de verdade.", proxima: "rv_b3" },
    rv_b3: { quem: "eu", texto: "Eu levo a sério.", proxima: "rv_b4" },
    rv_b4: { tipo: "narracao", texto: "Ele fica em silêncio. Muito tempo. Depois senta na grama do jardim, de pernas cruzadas, com a roupa do Blake, e ela senta do lado. E ele não fala mais nada, mas encosta o ombro no dela, de leve, e deixa.", proxima: "r_fim" },
    rv_c1: { tipo: "narracao", texto: "Ela arruma a gola da camiseta enorme do Blake nele, que está torta, caindo de um ombro. Ele fica parado, olhando para as mãos dela na gola.", proxima: "rv_c2" },
    rv_c2: { quem: "eu", texto: "Você fica bonito com roupa que não é sua.", proxima: "rv_c3" },
    rv_c3: { quem: "victor", texto: "Eu fico bonito com qualquer roupa. É um fardo.", proxima: "rv_c4" },
    rv_c4: { tipo: "narracao", texto: "Ele faz a piada. Mas a voz sai baixa, e ele não pisca, e as mãos dela ainda estão na gola dele, e nenhum dos dois se mexe até a Hana gritar da porta de vidro que o último táxi chegou.", proxima: "r_fim" },

    /* =================== FIM — A BEIRA DA PISCINA =================== */
    // (todas as rotas continuam aqui)
    r_fim: { tipo: "narracao", cenario: "piscina-reina", transicao: "tempo", legenda: "3h", sprite: "reina", texto: "Três da manhã. Quase todo mundo foi embora. Antes de ir, a SN volta para o jardim para pegar o casaco que deixou numa cadeira. E encontra a Reina, sozinha, sentada na beira da piscina, com os pés dentro da água iluminada.", proxima: "f_02" },
    f_02: { tipo: "narracao", texto: "A casa está toda acesa atrás dela. Todas as janelas. Toda a música desligada. Só o filtro da piscina.", proxima: "f_03" },
    f_03: { quem: "reina", texto: "Senta.", proxima: "f_04" },
    f_04: { tipo: "narracao", texto: "A SN tira o tênis e senta do lado dela, com os pés na água também. A água está morna.", proxima: "f_05" },
    f_05: { quem: "reina", texto: "Foi a melhor festa da história da escola. A rede de fofoca vai falar dela até o fim do ano. A Mio transmitiu tudo. O Victor caiu na piscina. Você pulou. Ou não pulou. Alguém pulou.", proxima: "f_06" },
    f_06: { quem: "eu", texto: "Foi a melhor.", proxima: "f_07" },
    f_07: { tipo: "narracao", texto: "Silêncio. A Reina mexe os pés na água, devagar, fazendo onda.", proxima: "f_08" },
    f_08: { quem: "reina", texto: "Eu dou festa porque a casa é grande demais quando ela não está. Quando a minha avó não está, a casa fica com o barulho de quarenta quartos vazios. Meus pais mandam dinheiro. Não mandam eles.", proxima: "f_09" },
    f_09: { quem: "reina", texto: "E aí, quando todo mundo vai embora, fica pior. Porque agora eu sei como é a casa cheia.", proxima: "f_10" },
    f_10: { tipo: "narracao", texto: "Ela não chora. A Reina nunca chora de frente. Ela fica olhando para a água, com o queixo alto, como sempre, e é exatamente por isso que dói.", proxima: "f_esc" },

    // ▶ ESCOLHA FINAL — A Reina
    f_esc: { escolhas: [
      { texto: "A. “Então eu durmo aqui hoje. Amanhã é feriado. A gente faz café da manhã de festa.”", proxima: "f_a1", pontos: {}, flags: ["Dormiu_Reina"] },
      { texto: "B. Encostar o ombro no dela. Não falar nada. Ficar até o céu clarear.", proxima: "f_b1", pontos: {}, flags: ["Ficou_Reina"] },
      { texto: "C. “O Takeo pendurou as luzinhas com um braço só. Por você. Isso não é casa vazia.”", proxima: "f_c1", pontos: { takeo: 1 }, flags: ["Luzinhas_Reina"] }
    ]},
    f_a1: { quem: "eu", texto: "Então eu durmo aqui hoje. Amanhã é feriado. A gente faz café da manhã de festa. Com pizza fria.", proxima: "f_a2" },
    f_a2: { tipo: "narracao", texto: "A Reina vira a cabeça devagar. Olha para ela. E o queixo alto, pela primeira vez, abaixa. Só um pouco.", proxima: "f_a3" },
    f_a3: { quem: "reina", texto: "...A Mio já está dormindo no sofá. A Hana está dormindo no quarto de hóspedes com a prancheta. Você é a terceira. A casa vai ter três pessoas.", proxima: "f_a4" },
    f_a4: { quem: "eu", texto: "Três é bastante.", proxima: "f_11" },
    f_b1: { tipo: "narracao", texto: "Ela encosta o ombro no da Reina. Não fala nada. A Reina não fala nada. As duas ficam com os pés na água morna, ombro com ombro, olhando para a piscina azul, até o céu, lá em cima, começar a ficar cinza, depois rosa.", proxima: "f_b2" },
    f_b2: { quem: "reina", texto: "...Ninguém nunca ficou até o céu clarear.", proxima: "f_11" },
    f_c1: { quem: "eu", texto: "O Takeo pendurou as luzinhas com um braço só. Por você. Ele chegou às sete e meia. Isso não é casa vazia, Reina.", proxima: "f_c2" },
    f_c2: { tipo: "narracao", texto: "A Reina olha para as luzinhas no jardim. Ainda acesas. Tortas, porque foram penduradas com um braço só. Ela fica olhando muito tempo.", proxima: "f_c3" },
    f_c3: { quem: "reina", texto: "...Ele segurou a escada com o gesso pra eu subir na última parte. Eu nem pedi.", proxima: "f_c4" },
    f_c4: { quem: "eu", texto: "Ele nunca espera ninguém pedir.", proxima: "f_11" },

    // (todas as opções continuam aqui)
    f_11: { tipo: "narracao", sprite: null, texto: "O celular da SN vibra no bolso. É uma mensagem da mãe, saindo do plantão, às três e dez.", proxima: "f_12" },
    f_12: { quem: "mensagem", rotulo: "Mensagem — Mãe", texto: "Água entre cada copo? Deitou de lado quem passou mal? Não entrou em carro de quem bebeu?", proxima: "f_13" },
    f_13: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Sim. Sim. E o Blake não bebeu nada. Ele levou todo mundo.", proxima: "f_14" },
    f_14: { quem: "mensagem", rotulo: "Mensagem — Mãe", texto: "Gostei desse Blake. Quem passou mal?", proxima: "f_15" },
    f_15: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Uma menina. Eu segurei o cabelo.", proxima: "f_16" },
    f_16: { quem: "mensagem", rotulo: "Mensagem — Mãe", texto: "Essa é a minha filha. Te amo. Dorme.", proxima: "f_17" },
    f_17: { tipo: "pensamento", texto: "Uma festa. A primeira dessa vida. A Serena no chão do banheiro. A Reina com os pés na água. O Ren no canto, uma música só. E o jardim.", proxima: "f_18" },
    f_18: { tipo: "pensamento", texto: "Quarenta quartos vazios. Trinta e um dias na chuva. Dois anos de bolo de cenoura. Todo mundo nessa cidade está esperando alguém.", proxima: "f_19" },
    f_19: { tipo: "pensamento", texto: "E eu? Eu voltei doze anos. Eu também estou esperando alguém?", proxima: "ep_fim" },

    // Fim do Capítulo 40 (crie a entrada "capitulo40" em dados/capitulos.js).
    ep_fim: { fim: "capitulo40" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 41 (anotações do roteiro)
 *  • Quarta é feriado. A SN pode ter dormido na casa da Reina (Dormiu_Reina) com a Mio e a Hana.
 *  • A FESTA DA REINA: a avó viajou com o grupo da terceira idade (quatro dias, praia). Bebida na festa.
 *    A SN bebeu pouco/nada, cuidou dos outros. Copo do menino do terceiro ano recusado / na planta.
 *  • SERENA: bebeu três copos do ponche do terceiro ano, trancou no banheiro, vomitou. A SN segurou o cabelo,
 *    limpou o rosto, ficou. "Obrigada por segurar o meu cabelo." Ela contou que o Kaito foi educado no portão.
 *    O Blake chamou táxi e pagou. Trégua (não amizade ainda): "Eu ainda acho que você é baixinha demais pra ele."
 *  • O REN veio. Ficou no canto, sem copo, uma música (Hana cantando "Depois da Chuva"). Saiu pela porta de vidro.
 *    A SN foi atrás até o portão: "Você não é o mesmo de antes... pode fazer amizade e namorar com quem quiser...
 *    não precisa ter medo de chegar perto... mas se continuar assim, só vai afastar todo mundo." Ren: "Eu não tenho medo."
 *    / "Então por que você fica sempre no canto?" / "...Boa festa." Na esquina, ele olhou pra trás pra casa cheia.
 *  • RYUJI: meia lata, poeta da lua ("dourada de luz"). Pulou na piscina pra "resgatar" o Victor na parte rasa.
 *    Rota Ryuji: declarou "sem lata" no jardim.
 *  • VICTOR: caiu na piscina sóbrio. Verdade: "quem você salvaria primeiro de um incêndio?" (a SN: a Hana, por
 *    causa da prancheta). Roupa seca do Blake.
 *  • BLAKE: não bebeu, levou todo mundo de táxi, trouxe água e muda de roupa. Cantou a música de ninar dos gêmeos.
 *    "É por isso que todo mundo..." Rota Blake: "Desde o festival. Eu terminei de pensar."
 *  • TAKEO: chegou às 19h30, pendurou as luzinhas com um braço só. Dançou três músicas com a Reina.
 *    "Verdade logística." Rota Takeo: "Eu voltei de muito longe por sua causa."
 *  • KAITO: "Eu vim porque você vinha." ROTA KAITO: O PRIMEIRO BEIJO DE VERDADE no jardim (Beijo_Kaito), ou o
 *    "dia só nosso" (Dia_so_nosso). "Eu esperei muito tempo pra isso."
 *  • REINA: "A casa é grande demais quando ela não está... quarenta quartos vazios."
 *  • A mãe: "Gostei desse Blake."
 *  • SEGREDOS: o Ren matou o Takeo na primeira linha do tempo · a tia (o perfume de flor) · a SN e o Kaito
 *    se conheceram crianças.
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 Você vai? · 2 O copo · 3 O Ryuji corajoso · 4 O Victor molhado · 5 A porta (Serena)
 *  6 Com a Serena no banheiro · 7 Verdade ou desafio · Rota (o jardim) · Final (a Reina)
 *
 * FLAGS NOVAS
 *  Vai_festa_sim · Talvez_festa · Cuida_festa · Recusou_copo · Lata_fechada · Planta_ponche
 *  Fala_amanha_Ryuji · Fala_Ryuji_festa · Agua_Ryuji · Secou_Victor · Sobrio_Victor · Pirulito_sobreviveu
 *  Trinco_cedeu · Ficou_porta · Ameacou_Kaito · Corajosa_Serena · Nunca_esquece_bolo · Outra_pessoa_Serena
 *  Escolheu_verdade · Escolheu_desafio · Pulou_piscina · Beijo_Kaito · Dia_so_nosso · Voltei_longe_Takeo
 *  Dancou_Reina · Danca_sem_musica · Todo_mundo_ou_voce · Musica_ninar · Descansa_Blake · Abraco_Ryuji_festa
 *  Falou_sem_lata · Bochecha_Ryuji · Primeiro_piscina · Por_que_nao_Victor · Roupa_Blake_Victor
 *  Dormiu_Reina · Ficou_Reina · Luzinhas_Reina
 */