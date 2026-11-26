/*
 * =====================================================================
 *  CAPÍTULO 11 — Água parada
 *  Quarta-feira, o dia seguinte ao Capítulo 10.
 *  Mesmo formato dos capítulos anteriores: cada linha é uma cena.
 * =====================================================================
 *
 *  O QUE ACONTECE
 *    • O dia da água de peixe: a Sayuri “tropeça” com um balde de água podre do aquário do
 *      laboratório e joga tudo na SN, na frente de todo mundo. Finge que foi acidente.
 *    • A SN fica com um cheiro horrível. Ganha apelidos cruéis. O bullying não vem só da Sayuri
 *      e das amigas: vem de muita gente da escola, que entra na onda e espalha o vídeo.
 *    • A SN lembra do passado e fica insegura. A força não ajuda em nada contra isso.
 *    • Ela vai para casa mal. À noite, sai para andar e desestressar. Uns caras idiotas mexem
 *      com ela na rua. O Kaito aparece e espanta eles. A SN NÃO usa a força nessa cena.
 *    • A visita à casa do Takeo (com a Reina indo junto) fica para o Capítulo 12.
 *
 *  REGRAS QUE ESTE CAPÍTULO SEGUE
 *    • Assunto de gangue fica fora da escola. O Ren não aparece.
 *    • A SN não fala o apelido antigo dela, nem repete os apelidos novos.
 *    • A Mio nunca brinca com apelido nenhum.
 *    • Romance devagar. O Kaito não fala do que sente.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Sayuri e as duas amigas, Coordenador, Professora (de química), Victor,
 *    Caras na rua (sem nome, quem: "desconhecido").
 *
 *  CENÁRIOS
 *    Corredor do laboratório → "corredor" · Vestiário → "vestiario"
 *    Rua à noite → "rua-noite" · Loja de conveniência → "loja-conveniencia"
 *    Pracinha do balanço à noite → "parquinho-noite"
 *
 *  FLAGS DOS CAPÍTULOS ANTERIORES USADAS AQUI (com caminhos)
 *    SN_cobrou_Blake.
 *
 *  Título, capa e gancho ficam em dados/capitulos.js: crie a entrada "capitulo11".
 */
Roteiro.registrar("capitulo11", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — QUARTA-FEIRA =================== */
    // Cenário: sala de aula, primeira aula. Música: tema leve, mais baixo que o normal.
    c1_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Cena 1 — Quarta-feira", sprite: null, texto: "Quarta-feira. A SN dormiu mal. Sonhou com o banheiro do segundo andar e com uma porta de cabine que não abria.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "A página de fofoca foi derrubada durante a noite. Alguém denunciou centenas de vezes. Mas as fotos continuam circulando. Gente que salvou. Gente que mandou para o grupo da turma de outra escola.", proxima: "c1_03" },
    c1_03: { tipo: "narracao", texto: "Quando ela entra na sala, algumas conversas param. Não todas. Só algumas. O suficiente.", proxima: "c1_04" },
    c1_04: { tipo: "narracao", sprite: "mio", texto: "A Mio já está sentada na carteira do lado da dela, de braços cruzados, olhando feio para qualquer pessoa que olhe para a SN. Parece um cão de guarda loiro.", proxima: "c1_05" },
    c1_05: { quem: "mio", texto: "Bom dia. Eu já decorei o nome de todo mundo que comentou nas fotos. Todo mundo. Eu tenho uma lista.", proxima: "c1_06" },
    c1_06: { quem: "hana", sprite: "hana", texto: "Na verdade, a lista é minha. Ela só decorou.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", texto: "A SN tenta sorrir. Sai um sorriso torto, cansado. Mas sai.", proxima: "c1_08" },
    c1_08: { tipo: "narracao", sprite: "takeo", texto: "Da terceira carteira da fileira da janela, o Takeo vira para trás e faz um joinha para ela. Exagerado. Com as duas mãos. A Reina, do lado dele, revira os olhos.", proxima: "c1_09" },
    c1_09: { tipo: "narracao", sprite: "sayuri", texto: "Na terceira fila, a Sayuri não olha para ninguém. Ela está estranha. Quieta. Mexendo no laço rosa sem parar. Ela não ri das piadas das amigas.", proxima: "c1_10" },
    c1_10: { quem: "professora", texto: "Lembrando: hoje no intervalo é a limpeza do aquário grande do laboratório. Obrigada à Sayuri e às meninas por se oferecerem. Cuidado com os baldes. Aquela água está parada há meses.", proxima: "c1_11" },
    c1_11: { tipo: "narracao", texto: "A Sayuri concorda com a cabeça. Sem levantar os olhos.", proxima: "c1_12" },
    c1_12: { tipo: "pensamento", texto: "Ela nunca se oferece pra nada. E agora ela não consegue nem olhar pra frente.", proxima: "c1_13" },
    c1_13: { tipo: "pensamento", texto: "Eu devia ter prestado mais atenção nisso.", proxima: "c2_01" },

    /* =================== CENA 2 — O BALDE =================== */
    // Cenário: corredor do laboratório de biologia, intervalo (usa "corredor"). Música: some de repente.
    c2_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Cena 2 — O balde", sprite: null, texto: "No intervalo, o corredor do térreo está cheio. Gente indo para a cantina. Gente voltando. Gente sentada no chão, comendo.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", texto: "A SN está voltando do bebedouro sozinha. A Mio foi comprar pão de queijo. A Hana foi devolver um livro. São três minutos. Só três minutos.", proxima: "c2_03" },
    c2_03: { tipo: "narracao", texto: "A porta do laboratório de biologia está aberta. De dentro, vem um cheiro. Doce e azedo ao mesmo tempo. Podre. O cheiro de água que ficou parada tempo demais, com coisas mortas dentro.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", sprite: "sayuri", texto: "A Sayuri sai da sala carregando um balde grande de plástico. As duas amigas vêm atrás, com outro balde cada uma. A água é verde-escura, quase preta. Tem alguma coisa boiando.", proxima: "c2_05" },
    c2_05: { tipo: "narracao", texto: "As três andam na direção dela. Devagar. Desviando das pessoas no corredor.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", texto: "A SN dá um passo para o lado, para deixar passar.", proxima: "c2_07" },
    c2_07: { tipo: "narracao", texto: "A Sayuri dá um passo para o mesmo lado.", proxima: "c2_08" },
    c2_08: { tipo: "narracao", efeito: "tremor", texto: "E tropeça. No nada. No chão liso do corredor.", proxima: "c2_09" },
    c2_09: { tipo: "narracao", efeito: "apagao", texto: "O balde inteiro vira em cima da SN.", proxima: "c2_10" },
    c2_10: { tipo: "narracao", texto: "Gelado. Grosso. Escorrendo pelo cabelo, pelo rosto, para dentro da gola do uniforme. Pedaços de alga presos no cabelo. O cheiro entrando no nariz, na boca, nos olhos.", proxima: "c2_11" },
    c2_11: { tipo: "narracao", texto: "Um segundo de silêncio no corredor inteiro.", proxima: "c2_12" },
    c2_12: { tipo: "narracao", texto: "Depois o segundo balde. Uma das amigas da Sayuri “escorrega” também. A água bate nas costas da SN.", proxima: "c2_13" },
    c2_13: { quem: "sayuri", texto: "Ai, meu Deus! Desculpa! Foi sem querer! O chão está molhado!", proxima: "c2_14" },
    c2_14: { tipo: "narracao", texto: "A voz dela está alta demais. Ensaiada demais. Mas as mãos dela, segurando o balde vazio, estão tremendo.", proxima: "c2_15" },
    c2_15: { tipo: "narracao", texto: "E então alguém ri. Um garoto do terceiro ano, sentado no chão do corredor. Depois outro. Depois um grupo inteiro.", proxima: "c2_16" },
    c2_16: { tipo: "narracao", texto: "Celulares levantados. Dez. Quinze. Vinte. Filmando. Alguém grita alguma coisa sobre peixe. Alguém tapa o nariz e faz barulho de vômito. Uma menina do primeiro ano, que a SN nunca viu, ri tanto que precisa se apoiar na parede.", proxima: "c2_17" },
    c2_17: { tipo: "narracao", texto: "A SN não se mexe.", proxima: "c2_18" },
    c2_18: { tipo: "narracao", efeito: "flashback", texto: "A piscina. O caderno boiando. As risadas do primeiro ano. O banheiro. Os pés em cima da tampa do vaso. As vozes do outro lado da porta.", proxima: "c2_19" },
    c2_19: { tipo: "pensamento", texto: "Eu já vivi isso.", proxima: "c2_20" },
    c2_20: { tipo: "pensamento", texto: "Eu voltei doze anos no tempo e estou vivendo isso de novo. Pior. Com plateia. Com celular.", proxima: "c2_21" },
    c2_21: { tipo: "narracao", texto: "Ela consegue segurar uma viga com uma mão. Ela consegue arrancar um portão. E não existe nada, nada no corpo dela, que consiga fazer vinte celulares abaixarem.", proxima: "c2_esc1" },

    // ▶ ESCOLHA 1 — No meio do corredor
    // Nenhuma opção “vence”. É um momento ruim, e todas mostram isso.
    c2_esc1: { escolhas: [
      { texto: "A. Ficar parada. Olhar para a Sayuri. Só olhar.", proxima: "c2_1a_1", flags: ["Olhou_Sayuri_balde"] },
      { texto: "B. Correr. Pra qualquer lugar. Pra longe dos celulares.", proxima: "c2_1b_1", flags: ["Correu_balde"] },
      { texto: "C. Abaixar e começar a tirar as algas do cabelo, uma por uma, ali mesmo, no chão.", proxima: "c2_1c_1", flags: ["Ficou_no_chao_balde"] }
    ]},
    c2_1a_1: { tipo: "narracao", texto: "Ela olha para a Sayuri. Molhada, pingando, com alga no cabelo. A Sayuri olha de volta. Por um segundo inteiro.", proxima: "c2_1a_2" },
    c2_1a_2: { tipo: "narracao", texto: "E a SN vê. A Sayuri não está rindo. Ela está pálida. Com os olhos cheios d'água. Como se fosse ela que tivesse levado o balde.", proxima: "c2_1a_3" },
    c2_1a_3: { tipo: "narracao", texto: "Depois a Sayuri vira o rosto e sai andando rápido, puxando as amigas, sem olhar para trás.", proxima: "c2_22" },
    c2_1b_1: { tipo: "narracao", texto: "Ela corre. Escorregando na própria água. As pessoas abrem caminho tampando o nariz, rindo, filmando ela passar.", proxima: "c2_1b_2" },
    c2_1b_2: { tipo: "narracao", texto: "Ela não sabe para onde está indo. As pernas só levam. Para longe. Longe. Longe.", proxima: "c2_22" },
    c2_1c_1: { tipo: "narracao", texto: "Ela se abaixa. No meio do corredor. E começa a tirar as algas do cabelo. Uma por uma. Devagar. Com as mãos tremendo.", proxima: "c2_1c_2" },
    c2_1c_2: { tipo: "narracao", texto: "As risadas continuam em volta. Os celulares continuam em volta. Ela não levanta a cabeça.", proxima: "c2_1c_3" },
    c2_1c_3: { tipo: "pensamento", texto: "Se eu não olhar pra cima, talvez eles não existam.", proxima: "c2_22" },

    // (todas as opções continuam aqui)
    c2_22: { tipo: "narracao", sprite: "mio", texto: "Um saco de pão de queijo cai no chão do corredor.", proxima: "c2_23" },
    c2_23: { quem: "mio", efeito: "grito", texto: "SAI DA FRENTE! SAI! ABAIXA ESSE CELULAR AGORA OU EU ENFIO ELE NA SUA GARGANTA!", proxima: "c2_24" },
    c2_24: { tipo: "narracao", texto: "A Mio atravessa o corredor como um caminhão. Arranca o celular da mão de um garoto do terceiro ano e joga no lixo. Empurra outro. Tira o próprio casaco e joga por cima da cabeça da SN, cobrindo tudo.", proxima: "c2_25" },
    c2_25: { tipo: "narracao", sprite: "hana", texto: "A Hana chega um segundo depois. Ela não grita. Ela só fica do outro lado da SN, de braços abertos, olhando para cada pessoa com um celular na mão. Uma por uma. Até elas abaixarem.", proxima: "c2_26" },
    c2_26: { quem: "hana", texto: "Eu sei o nome de todo mundo aqui. Todo mundo. E eu tenho uma caneta.", proxima: "c2_27" },
    c2_27: { tipo: "narracao", texto: "Alguns celulares abaixam. Não todos. Mas alguns.", proxima: "c2_28" },
    c2_28: { tipo: "narracao", sprite: "professora", texto: "A professora de química aparece no fim do corredor, correndo, com o avental do laboratório. Ela vê a água no chão. Os baldes vazios. A SN debaixo do casaco da Mio.", proxima: "c2_29" },
    c2_29: { quem: "professora", texto: "Meu Deus. O que aconteceu?", proxima: "c2_30" },
    c2_30: { quem: "amiga_sayuri", rotulo: "Uma das amigas da Sayuri", texto: "Foi acidente, professora! A Sayuri escorregou! O chão estava molhado!", proxima: "c2_31" },
    c2_31: { tipo: "narracao", sprite: "professora", texto: "A professora olha para o chão. Está molhado. Agora está. Ela olha para a SN. Depois para o corredor cheio de gente rindo baixinho.", proxima: "c2_32" },
    c2_32: { quem: "professora", texto: "...Vestiário. Agora. Toma banho. Eu vou falar com a coordenação.", proxima: "c3_01" },

    /* =================== CENA 3 — O VESTIÁRIO =================== */
    // Cenário: vestiário feminino. Música: só o barulho do chuveiro.
    c3_01: { tipo: "narracao", cenario: "vestiario", transicao: "tempo", legenda: "Cena 3 — O vestiário", sprite: null, texto: "O chuveiro do vestiário feminino só tem água fria. A SN fica debaixo dele de uniforme mesmo, porque não consegue tirar a roupa. As mãos não obedecem.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "A água verde escorre pelo ralo. Depois a água fica limpa. O cheiro não vai embora.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", sprite: "hana", texto: "A Hana tira um sabonete de lavanda da mochila. Pequeno, embrulhado num papel bonito. Ela abre o embrulho e entrega para a SN, sem dizer nada.", proxima: "c3_04" },
    c3_04: { quem: "hana", texto: "Era presente pra minha mãe. Ela tem outro.", proxima: "c3_05" },
    c3_05: { tipo: "narracao", texto: "A SN esfrega o cabelo até o couro cabeludo arder. Uma vez. Duas. Cinco. A Mio fica do lado de fora da cortina, sentada no banco, contando em voz alta para ela saber que tem alguém ali.", proxima: "c3_06" },
    c3_06: { quem: "mio", sprite: "mio", texto: "Eu vou matar ela. Eu vou matar a Sayuri. Eu vou esperar ela no portão e eu vou...", proxima: "c3_07" },
    c3_07: { quem: "eu", texto: "Não.", proxima: "c3_08" },
    c3_08: { tipo: "narracao", texto: "A voz sai rouca. Baixa. A Mio para de falar.", proxima: "c3_09" },
    c3_09: { quem: "eu", texto: "Não faz nada. Por favor. Se você fizer alguma coisa, você vai levar suspensão. E aí vai ter mais vídeo. E mais gente. E vai ser pior.", proxima: "c3_10" },
    c3_10: { quem: "mio", texto: "Mas ela...", proxima: "c3_11" },
    c3_11: { quem: "eu", texto: "Eu sei. Eu sei, Mio. Hoje não. Eu não aguento mais nada hoje.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", texto: "Do outro lado da cortina, silêncio. Depois um soluço. A Mio está chorando. A Mio, que nunca chora na frente de ninguém. De raiva.", proxima: "c3_13" },
    c3_13: { tipo: "narracao", texto: "A SN desliga o chuveiro. Fica ali, pingando, abraçando os próprios braços.", proxima: "c3_14" },
    c3_14: { tipo: "pensamento", texto: "Três semanas atrás, eu acordei aqui e prometi que ia ser outra pessoa.", proxima: "c3_15" },
    c3_15: { tipo: "pensamento", texto: "E bastou um balde.", proxima: "c3_16" },
    c3_16: { tipo: "narracao", sprite: "mio", texto: "Quando ela sai, a Mio enxuga o rosto com a manga, rápido, e estende o próprio moletom de educação física. Grande demais. Cheirando a amaciante e a pão de queijo.", proxima: "c3_17" },
    c3_17: { quem: "mio", texto: "Veste. É o mais quentinho que eu tenho.", proxima: "c3_esc2" },

    // ▶ ESCOLHA 2 — No vestiário, com a Mio e a Hana
    c3_esc2: { escolhas: [
      { texto: "A. Vestir o moletom e abraçar a Mio. Sem dizer nada.", proxima: "c3_2a_1", pontos: { mio: 3 }, flags: ["Abraco_Mio_vestiario"] },
      { texto: "B. “Eu ainda estou com cheiro? Fala a verdade.”", proxima: "c3_2b_1", pontos: { mio: 1, hana: 2 }, flags: ["Perguntou_cheiro"] },
      { texto: "C. “Eu quero ir pra casa.”", proxima: "c3_2c_1", pontos: { mio: 1, hana: 1 }, flags: ["Quis_ir_embora"] }
    ]},
    c3_2a_1: { tipo: "narracao", texto: "Ela veste o moletom e abraça a Mio. Forte. A Mio abraça de volta, ainda fungando.", proxima: "c3_2a_2" },
    c3_2a_2: { quem: "mio", texto: "Desde os seis anos. Lembra? Quando alguém mexe com você, eu fico na frente. Hoje eu cheguei atrasada. Três minutos. Eu nunca vou me perdoar por esses três minutos.", proxima: "c3_2a_3" },
    c3_2a_3: { quem: "eu", texto: "Não foi culpa sua.", proxima: "c3_2a_4" },
    c3_2a_4: { quem: "mio", texto: "Eu sei. Mas eu vou ficar brava comigo mesmo assim. Deixa.", proxima: "c3_18" },
    c3_2b_1: { tipo: "narracao", texto: "A Mio abre a boca para dizer que não. A Hana chega perto primeiro. Cheira o cabelo dela, devagar, sem nenhuma vergonha.", proxima: "c3_2b_2" },
    c3_2b_2: { quem: "hana", sprite: "hana", texto: "Um pouco. No cabelo. Vai sair com vinagre e limão. Minha avó fazia isso quando eu caía no lago do sítio.", proxima: "c3_2b_3" },
    c3_2b_3: { quem: "hana", texto: "Eu prefiro te falar a verdade. Assim você sabe que, quando eu disser que saiu, saiu mesmo.", proxima: "c3_2b_4" },
    c3_2b_4: { tipo: "pensamento", texto: "A Hana nunca mente pra mim. Nem quando seria mais fácil.", proxima: "c3_18" },
    c3_2c_1: { quem: "mio", texto: "Eu vou junto.", proxima: "c3_2c_2" },
    c3_2c_2: { quem: "eu", texto: "Você tem prova de inglês depois do intervalo.", proxima: "c3_2c_3" },
    c3_2c_3: { quem: "mio", texto: "Eu tiro zero. Não ligo.", proxima: "c3_2c_4" },
    c3_2c_4: { quem: "hana", sprite: "hana", texto: "Ela vai tirar zero de qualquer jeito. Ela não estudou.", proxima: "c3_2c_5" },
    c3_2c_5: { tipo: "narracao", texto: "A SN ri. Um riso fraco, molhado, que dura meio segundo. Mas é um riso.", proxima: "c3_18" },

    // (todas as opções continuam aqui)
    c3_18: { tipo: "narracao", sprite: null, texto: "O coordenador manda chamar a SN na sala dele. Ele ouve a história. Ouve a versão da Sayuri. Olha o chão molhado do corredor.", proxima: "c3_19" },
    c3_19: { quem: "coordenador", texto: "Eu não tenho como provar que não foi acidente. Ninguém que filmou quer me mostrar o vídeo. Todo mundo diz que não viu nada.", proxima: "c3_20" },
    c3_20: { quem: "coordenador", texto: "Vai pra casa. Descansa. Eu vou ficar de olho. É o que eu posso fazer por enquanto.", proxima: "c3_21" },
    c3_21: { tipo: "pensamento", texto: "Vinte celulares filmando. Ninguém viu nada.", proxima: "c4_01" },

    /* =================== CENA 4 — A SAÍDA =================== */
    // Cenário: corredor e portão da escola, antes do fim do intervalo. Música: piano grave.
    c4_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Cena 4 — A saída", sprite: null, texto: "Para sair da escola, ela precisa atravessar o corredor do segundo andar. Pegar a mochila na sala. Passar por todo mundo.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "Ela está de moletom de educação física, com o cabelo molhado e cheirando a lavanda e a alguma coisa por baixo da lavanda que não sai.", proxima: "c4_03" },
    c4_03: { tipo: "narracao", texto: "No corredor, alguém tapa o nariz quando ela passa. Alguém faz barulho de peixe. Um garoto que ela nunca viu grita um apelido novo. Outro grita outro. Gente rindo. Gente que nem estava no térreo. Gente que só viu o vídeo.", proxima: "c4_04" },
    c4_04: { tipo: "pensamento", texto: "Não é só a Sayuri. Nunca foi só a Sayuri.", proxima: "c4_05" },
    c4_05: { tipo: "pensamento", texto: "Ela só abre a porta. O resto entra sozinho.", proxima: "c4_06" },
    c4_06: { tipo: "narracao", texto: "Na sala, as carteiras perto da dela foram arrastadas para longe. Uma menina está borrifando desodorante no ar, olhando para ela. A turma ri.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", sprite: "takeo", texto: "O Takeo se levanta. Ele não fala nada. Ele pega a própria carteira, com as costelas ainda doendo, e arrasta até colar na dela. Senta. Abre o livro. Como se fosse a coisa mais normal do mundo.", proxima: "c4_08" },
    c4_08: { quem: "takeo", texto: "Eu trouxe sua mochila pra perto. Você não precisa passar por ninguém.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "A turma para de rir. Não porque ficou com vergonha. Porque ninguém sabe o que fazer com o Takeo.", proxima: "c4_10" },
    c4_10: { tipo: "narracao", sprite: "reina", texto: "Do outro lado da sala, a Reina se levanta. Vai até a menina do desodorante. Tira o frasco da mão dela, sem nenhuma pressa. E joga pela janela.", proxima: "c4_11" },
    c4_11: { quem: "reina", texto: "Que cheiro horrível esse seu desodorante. Me deu dor de cabeça.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", texto: "Ela volta para a carteira dela. Ajeita o cabelo. Não olha para a SN. Nem uma vez.", proxima: "c4_13" },
    c4_13: { tipo: "narracao", sprite: "ryuji", texto: "Na porta da sala, o Ryuji aparece, ofegante, com a jaqueta preta na mão. Alguém da turma dele mostrou o vídeo. Ele atravessa a sala, joga a jaqueta nos ombros da SN e fica de pé do lado dela, encarando a turma inteira.", proxima: "c4_14" },
    c4_14: { quem: "ryuji", texto: "Alguém aqui quer falar alguma coisa? Fala pra mim. Eu adoro conversar.", proxima: "c4_15" },
    c4_15: { tipo: "narracao", texto: "Ninguém fala. O Ryuji tem uma reputação. Ela funciona.", proxima: "c4_16" },
    c4_16: { tipo: "narracao", sprite: "blake", texto: "E, no corredor, pela porta aberta, a SN vê o Blake. Parado na frente da Sayuri, que está encostada na parede, com o laço torto.", proxima: "c4_17" },
    c4_17: { quem: "blake", texto: "Sayuri. Isso passou do limite.", proxima: "c4_18" },
    c4_18: { quem: "sayuri", texto: "Foi acidente, Blake. Eu juro. Você me conhece.", proxima: "c4_19" },
    c4_19: { tipo: "narracao", texto: "O Blake fica parado. Olhando para ela. Um segundo. Dois. Três.", proxima: "c4_20" },
    c4_20: { tipo: "narracao", texto: "E não fala mais nada. Ele só vira e vai embora.", proxima: "c4_21" },
    c4_21: { tipo: "pensamento", texto: "Ele hesitou.", proxima: "c4_22" },
    c4_22: { tipo: "pensamento", texto: "Eu entendo. Eu entendo por quê. E mesmo assim dói como se ele tivesse rido junto.", proxima: "c4_cam1" },
    c4_cam1: { caminhos: [
      { flag: "SN_cobrou_Blake", proxima: "c4_b_cobrou" }
    ], proxima: "c4_23" },
    c4_b_cobrou: { tipo: "pensamento", texto: "Ontem ele disse que devia ter visto. Hoje ele viu. E não conseguiu.", proxima: "c4_23" },

    c4_23: { tipo: "narracao", sprite: null, texto: "Na saída, perto do portão, alguém está sentado no muro baixo, de pernas balançando, com um pirulito na boca. Quando vê a SN, ele desce de um pulo.", proxima: "c4_24" },
    c4_24: { quem: "victor", texto: "Gatinha.", proxima: "c4_25" },
    c4_25: { tipo: "narracao", texto: "Ele não faz piada. Ele olha para o cabelo molhado dela, para o moletom grande demais, para a jaqueta do Ryuji nos ombros.", proxima: "c4_26" },
    c4_26: { quem: "victor", texto: "Me fala um nome. Só um. Eu levo três semanas de suspensão feliz.", proxima: "c4_esc3" },

    // ▶ ESCOLHA 3 — O Victor no portão
    c4_esc3: { escolhas: [
      { texto: "A. “Não, Victor. Por favor. Hoje não.”", proxima: "c4_3a_1", pontos: { victor: 2 }, flags: ["Victor_hoje_nao"] },
      { texto: "B. Não responder. Só passar por ele.", proxima: "c4_3b_1", pontos: { victor: 1 } },
      { texto: "C. “Me leva até a esquina? Só até a esquina.”", proxima: "c4_3c_1", pontos: { victor: 3 }, flags: ["Victor_esquina"] }
    ]},
    c4_3a_1: { tipo: "narracao", texto: "O Victor fica com o maxilar travado. Ele claramente quer discutir. Ele não discute.", proxima: "c4_3a_2" },
    c4_3a_2: { quem: "victor", texto: "Tá. Hoje não. Mas eu tenho memória boa, gatinha. Melhor do que as minhas notas.", proxima: "c4_27" },
    c4_3b_1: { tipo: "narracao", texto: "Ela passa por ele. Ele não segura o braço dela. Não chama de volta. Ele só fica olhando ela ir, com o pirulito parado na boca, sem nenhuma graça no rosto.", proxima: "c4_27" },
    c4_3c_1: { tipo: "narracao", texto: "Ele vai. Do lado dela. Calado. O Victor, calado, é uma coisa que a escola inteira pagaria para ver.", proxima: "c4_3c_2" },
    c4_3c_2: { tipo: "narracao", texto: "Na esquina, ele para. Tira um pirulito novo do bolso. De morango. E coloca na mão dela.", proxima: "c4_3c_3" },
    c4_3c_3: { quem: "victor", texto: "O Caramelo mandou. Ele disse que pirulito resolve quase tudo. O resto a gente resolve depois.", proxima: "c4_27" },

    // (todas as opções continuam aqui)
    c4_27: { tipo: "narracao", texto: "A Mio leva ela até em casa. A Hana fica na escola para fazer a prova de inglês e “anotar mais coisas”.", proxima: "c5_01" },

    /* =================== CENA 5 — EM CASA =================== */
    // Cenário: quarto da SN, à tarde e começo da noite. Música: piano lento, quase parando.
    c5_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Cena 5 — Em casa", sprite: null, texto: "A casa está vazia. A mãe está de plantão até a meia-noite. A Mio quer ficar. A SN diz que não precisa. A Mio fica até as cinco mesmo assim, deitada na cama dela, sem falar nada, só fazendo carinho no cabelo dela.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", texto: "Quando a Mio vai embora, a SN toma banho de novo. Com vinagre e limão, como a Hana disse. Depois toma banho de novo. E de novo.", proxima: "c5_03" },
    c5_03: { tipo: "narracao", texto: "O cheiro saiu. Ela sabe que saiu. Ela continua sentindo.", proxima: "c5_04" },
    c5_04: { tipo: "narracao", texto: "Ela para na frente do espelho do guarda-roupa. A franja torta. O rosto inchado de chorar. O cabelo preso apertado. Ela nem percebeu que prendeu.", proxima: "c5_05" },
    c5_05: { tipo: "pensamento", texto: "Igual antes. Exatamente igual antes.", proxima: "c5_06" },
    c5_06: { tipo: "pensamento", texto: "Eu achei que aquela menina tinha ficado no outro tempo. Que eu tinha deixado ela lá, no chão do apartamento, no meio das caixas.", proxima: "c5_07" },
    c5_07: { tipo: "pensamento", texto: "Ela não ficou. Ela estava aqui o tempo todo. Debaixo da pele. Esperando alguém jogar um balde pra ela aparecer de novo.", proxima: "c5_08" },
    c5_08: { tipo: "pensamento", texto: "E o pior é que eu tenho vinte e oito anos aqui dentro. Eu sei que isso vai passar. Eu sei que daqui a dez anos ninguém vai lembrar.", proxima: "c5_09" },
    c5_09: { tipo: "pensamento", texto: "Saber não ajuda nada. Saber nunca ajudou.", proxima: "c5_10" },
    c5_10: { tipo: "narracao", texto: "O celular está cheio de mensagens. Ela não abre a maioria. Abre só algumas.", proxima: "c5_11" },
    c5_11: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "oi. eu sei que hoje não dá pra ir lá em casa. minha avó perguntou de você. ela disse que guarda o bolinho pra sexta. se você quiser. sem pressão nenhuma. eu tô aqui. sempre.", proxima: "c5_12" },
    c5_12: { quem: "mensagem", rotulo: "Mensagem — Reina", texto: "Não é por você. Mas o vídeo foi derrubado de três perfis até agora. Eu tenho tempo livre. Não agradece.", proxima: "c5_13" },
    c5_13: { quem: "mensagem", rotulo: "Mensagem — Hana", texto: "Tirei 9 na prova de inglês. Anotei 41 nomes. Não vou fazer nada com eles ainda. Só queria que você soubesse que eu vi todos.", proxima: "c5_14" },
    c5_14: { tipo: "narracao", texto: "Nenhuma mensagem do Kaito. Nenhuma do Blake.", proxima: "c5_15" },
    c5_15: { tipo: "narracao", texto: "Às nove da noite, as paredes do quarto parecem mais perto do que de manhã. O teto mais baixo. O silêncio da casa vazia, alto demais.", proxima: "c5_16" },
    c5_16: { tipo: "pensamento", texto: "Eu preciso sair daqui. Só um pouco. Só respirar alguma coisa que não seja esse quarto.", proxima: "c5_17" },
    c5_17: { tipo: "narracao", texto: "Ela coloca um moletom com capuz. Fones de ouvido sem música nenhuma tocando. E sai pela porta da frente, sem avisar ninguém. Pela primeira vez em semanas, sem olhar para os dois lados da rua.", proxima: "c6_01" },

    /* =================== CENA 6 — A RUA =================== */
    // Cenário: rua do bairro à noite, perto de uma loja de conveniência (usa "saida-colegio"). Música: silêncio, só o barulho da rua.
    // Aqui a SN NÃO usa a força. Ela está mal demais para isso.
    c6_01: { tipo: "narracao", cenario: "rua-noite", transicao: "tempo", legenda: "Cena 6 — A rua", sprite: null, texto: "A rua está quase vazia. Os postes amarelos. Um gato atravessando. O barulho distante de uma televisão ligada em alguma janela.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", texto: "Ela anda sem rumo. Passa pela padaria, já fechada. Pela pracinha do balanço. Pela esquina onde o Takeo esperava. Cada lugar tem um pedaço das últimas três semanas. Ela não consegue sentir nenhum deles.", proxima: "c6_03" },
    c6_03: { tipo: "narracao", cenario: "loja-conveniencia", sprite: "valentoes", texto: "Na frente da loja de conveniência da avenida, três caras estão sentados no meio-fio, bebendo alguma coisa de latinha. Mais velhos. Uns vinte anos. Sem uniforme de escola nenhuma.", proxima: "c6_04" },
    c6_04: { tipo: "narracao", texto: "Ela abaixa a cabeça e tenta passar pelo outro lado da calçada.", proxima: "c6_05" },
    c6_05: { quem: "valentoes", rotulo: "Cara de boné", texto: "Ei. Ei, você. De capuz. Para aí.", proxima: "c6_06" },
    c6_06: { tipo: "narracao", texto: "Ela não para. Um deles levanta e atravessa a rua. Fica na frente dela, bloqueando a calçada.", proxima: "c6_07" },
    c6_07: { quem: "valentoes", rotulo: "Cara de boné", texto: "Calma, calma. Só quero ver uma coisa. Você não é a menina do vídeo? Do peixe? Meu primo estuda no seu colégio. Ele mandou no grupo.", proxima: "c6_08" },
    c6_08: { tipo: "narracao", texto: "Os outros dois riem. Levantam também. Chegam perto. Um deles puxa o capuz dela para trás.", proxima: "c6_09" },
    c6_09: { quem: "valentoes", rotulo: "Outro cara", texto: "É ela mesmo! Ô, sardinha! Tá cheirando a quê hoje?", proxima: "c6_10" },
    c6_10: { tipo: "narracao", texto: "Eles riem. Alto. Um deles pega o celular. Outro segura a alça da mochila dela e puxa, só para ver o que ela faz.", proxima: "c6_11" },
    c6_11: { tipo: "narracao", texto: "Ela não faz nada.", proxima: "c6_12" },
    c6_12: { tipo: "narracao", texto: "Ela poderia. O corpo dela sabe que poderia. Uma mão no pulso de cada um. Três segundos.", proxima: "c6_13" },
    c6_13: { tipo: "narracao", texto: "Mas os braços não obedecem. As pernas não obedecem. Ela fica parada no meio da calçada, de cabeça baixa, com o capuz caído, ouvindo as risadas, igual no corredor. Igual no banheiro. Igual aos quinze anos.", proxima: "c6_14" },
    c6_14: { tipo: "pensamento", texto: "Eu não consigo.", proxima: "c6_15" },
    c6_15: { tipo: "pensamento", texto: "Eu consigo segurar uma viga e não consigo levantar a cabeça.", proxima: "c6_16" },
    c6_16: { quem: "valentoes", rotulo: "Cara de boné", texto: "Fala alguma coisa, sardinha. Ou peixe não fala?", proxima: "c6_17" },
    c6_17: { tipo: "narracao", texto: "Uma bicicleta freia na calçada. Forte. O pneu arrastando no asfalto.", proxima: "c6_18" },
    c6_18: { quem: "kaito", sprite: "kaito", texto: "Solta a mochila dela.", proxima: "c6_19" },
    c6_19: { tipo: "narracao", texto: "O Kaito está em cima de uma bicicleta velha de entrega, com uma caixa térmica da lojinha de lámen do tio amarrada atrás. De avental ainda. Com o olho amarelado do festival.", proxima: "c6_20" },
    c6_20: { tipo: "narracao", texto: "Ele não grita. Ele não precisa. Ele desce da bicicleta, encosta ela no poste com calma e anda até eles. Devagar. Do jeito que ele anda no pátio dos fundos.", proxima: "c6_21" },
    c6_21: { quem: "valentoes", rotulo: "Cara de boné", texto: "E você é quem? O namoradinho? Cai fora, moleque.", proxima: "c6_22" },
    c6_22: { tipo: "narracao", texto: "O Kaito para na frente do cara do boné. Ele é mais novo. Mas é mais alto. E olha para o cara como se ele fosse uma coisa pequena, um inseto na calçada.", proxima: "c6_23" },
    c6_23: { quem: "kaito", texto: "Eu falei pra soltar a mochila. Não vou falar de novo.", proxima: "c6_24" },
    c6_24: { tipo: "narracao", texto: "O que está segurando a alça solta. O do boné não se mexe. Ele dá um empurrão no peito do Kaito. O Kaito não sai do lugar.", proxima: "c6_25" },
    c6_25: { tipo: "narracao", efeito: "tremor", texto: "Um movimento só. O Kaito segura o braço do cara, torce para trás das costas e empurra ele contra o vidro da loja de conveniência. O vidro treme. O cara grita.", proxima: "c6_26" },
    c6_26: { quem: "kaito", texto: "Vocês três vão pegar essas latinhas, vão atravessar a avenida e vão esquecer o caminho até essa rua. Entenderam?", proxima: "c6_27" },
    c6_27: { quem: "valentoes", rotulo: "Outro cara", texto: "Tá, tá, cara! Calma! A gente só estava brincando!", proxima: "c6_28" },
    c6_28: { quem: "kaito", texto: "Eu não estou.", proxima: "c6_29" },
    c6_29: { tipo: "narracao", sprite: null, texto: "Ele solta. Os três vão embora quase correndo, deixando as latinhas no meio-fio. O do boné segurando o braço, olhando para trás duas vezes.", proxima: "c6_30" },
    c6_30: { tipo: "narracao", sprite: "kaito", texto: "O Kaito fica olhando até eles virarem a esquina. Depois vira para ela.", proxima: "c6_31" },
    c6_31: { tipo: "narracao", texto: "E toda aquela calma some do rosto dele. Fica só preocupação. Uma preocupação crua, que ele não consegue esconder a tempo.", proxima: "c6_32" },
    c6_32: { quem: "kaito", texto: "Você está machucada?", proxima: "c6_33" },
    c6_33: { tipo: "narracao", texto: "Ela balança a cabeça. Não. Ela não está machucada. Ela não está nada. Ela só está ali, parada, com o capuz caído e a mochila torta no ombro.", proxima: "c6_34" },
    c6_34: { quem: "kaito", texto: "Por que você não... você podia ter...", proxima: "c6_35" },
    c6_35: { tipo: "narracao", texto: "Ele para no meio da frase. Olhando para ela. Para o jeito que ela está segurando a alça da mochila, com os dedos brancos. E entende alguma coisa. Não tudo. Mas alguma coisa.", proxima: "c6_36" },
    c6_36: { quem: "kaito", texto: "...Esquece. Não importa.", proxima: "c6_esc4" },

    // ▶ ESCOLHA 4 — Depois que eles vão embora
    c6_esc4: { escolhas: [
      { texto: "A. Começar a chorar. Ali mesmo. Sem conseguir parar.", proxima: "c6_4a_1", pontos: { kaito: 3 }, flags: ["Chorou_Kaito"] },
      { texto: "B. “Eu estou bem.” Mesmo não estando.", proxima: "c6_4b_1", pontos: { kaito: 2 }, flags: ["Fingiu_bem_Kaito"] },
      { texto: "C. “Você estava passando por acaso?”", proxima: "c6_4c_1", pontos: { kaito: 2 }, flags: ["Perguntou_acaso_Kaito"] }
    ]},
    c6_4a_1: { tipo: "narracao", texto: "Começa devagar. Um soluço. Depois outro. Depois ela não consegue mais segurar. Chora no meio da calçada, na frente da loja de conveniência, com as mãos no rosto.", proxima: "c6_4a_2" },
    c6_4a_2: { tipo: "narracao", texto: "O Kaito fica parado. Completamente parado. Ele claramente não sabe o que fazer. O líder da gangue, que resolve tudo, não sabe o que fazer com uma menina chorando.", proxima: "c6_4a_3" },
    c6_4a_3: { tipo: "narracao", texto: "Depois de um tempo, ele tira o avental da lojinha de lámen. Dobra. Depois desdobra. Depois desiste e só coloca a cabeça dela em seu ombro.", proxima: "c6_4a_4" },
    c6_4a_4: { quem: "kaito", texto: "Tá. Chora. Eu fico aqui.", proxima: "c6_37" },
    c6_4b_1: { quem: "kaito", texto: "Mentira.", proxima: "c6_4b_2" },
    c6_4b_2: { tipo: "narracao", texto: "Ele fala sem nenhuma maldade. Só constatando, como quem lê a temperatura.", proxima: "c6_4b_3" },
    c6_4b_3: { quem: "kaito", texto: "Você mente igual o Takeo. Olhando pro lado.", proxima: "c6_4b_4" },
    c6_4b_4: { tipo: "narracao", texto: "Ela não responde. Os olhos dela se enchem d'água sem permissão. O Kaito olha para o outro lado da rua, para dar privacidade, e não vai embora.", proxima: "c6_37" },
    c6_4c_1: { tipo: "narracao", texto: "O Kaito olha para a bicicleta. Para a caixa térmica. Para ela.", proxima: "c6_4c_2" },
    c6_4c_2: { quem: "kaito", texto: "Entrega. Do tio. A casa fica... pra lá.", proxima: "c6_4c_3" },
    c6_4c_3: { tipo: "narracao", texto: "Ele aponta para o lado oposto de onde veio. A caixa térmica está vazia. Ela consegue ver pela tampa aberta.", proxima: "c6_4c_4" },
    c6_4c_4: { tipo: "pensamento", texto: "Ele estava rodando o bairro. Desde que soube do vídeo, provavelmente.", proxima: "c6_37" },

    // (todas as opções continuam aqui)
    c6_37: { tipo: "narracao", sprite: null, texto: "Um carro passa na avenida. O vento traz cheiro de chuva. A SN puxa o capuz de volta para a cabeça, devagar.", proxima: "c7_01" },

    /* =================== CENA 7 — O MEIO-FIO =================== */
    // Cenário: pracinha do balanço, à noite (usa "saida-colegio"). Música: piano, devagar, quente.
    c7_01: { tipo: "narracao", cenario: "parquinho-noite", transicao: "tempo", legenda: "Cena 7 — O meio-fio", sprite: null, texto: "Eles não vão para lugar nenhum. Eles só andam até a pracinha do balanço e sentam no meio-fio. A bicicleta de entrega encostada no poste. O Kaito do lado dela. A um palmo de distância.", proxima: "c7_02" },
    c7_02: { tipo: "narracao", sprite: "kaito", texto: "Por muito tempo, ninguém fala. O Kaito arranca um pedaço de grama do canteiro e fica rasgando em pedacinhos.", proxima: "c7_03" },
    c7_03: { quem: "kaito", texto: "Eu vi o vídeo.", proxima: "c7_04" },
    c7_04: { tipo: "narracao", texto: "Ela fecha os olhos.", proxima: "c7_05" },
    c7_05: { quem: "kaito", texto: "Não inteiro.", proxima: "c7_06" },
    c7_06: { quem: "kaito", texto: "Eu não fui na escola depois. Eu sabia que, se eu fosse, eu ia fazer alguma coisa. E aí ia ser pior pra você. Mais vídeo. Mais gente falando. O “líder da gangue” brigando por causa da menina do peixe.", proxima: "c7_07" },
    c7_07: { quem: "kaito", texto: "Assunto da gangue fica fora da escola. É a única regra que eu nunca quebrei.", proxima: "c7_08" },
    c7_08: { quem: "kaito", texto: "Hoje foi a primeira vez que eu odiei essa regra.", proxima: "c7_09" },
    c7_09: { tipo: "narracao", texto: "A SN olha para ele. Ele não olha de volta. Ele continua rasgando a grama.", proxima: "c7_10" },
    c7_10: { quem: "eu", texto: "Eu não consegui fazer nada, Kaito. Nem no corredor. Nem agora, com eles. Eu fiquei parada. Igual antes.", proxima: "c7_11" },
    c7_11: { quem: "eu", texto: "Eu achei que tinha mudado. Eu achei que eu era forte.", proxima: "c7_12" },
    c7_12: { tipo: "narracao", texto: "O Kaito para de rasgar a grama.", proxima: "c7_13" },
    c7_13: { quem: "kaito", texto: "Você é forte.", proxima: "c7_14" },
    c7_14: { quem: "eu", texto: "Hoje eu não fui.", proxima: "c7_15" },
    c7_15: { quem: "kaito", texto: "Forte não é quem nunca trava. Eu travo. Eu travei hoje, quando vi o vídeo. Fiquei dez minutos olhando pra parede.", proxima: "c7_16" },
    c7_16: { quem: "kaito", texto: "Forte é quem levanta do meio-fio depois. Amanhã. Ou depois de amanhã. Quando der.", proxima: "c7_17" },
    c7_17: { tipo: "narracao", texto: "Ele fala isso olhando para a frente. Sem jeito. Como alguém que nunca disse uma coisa dessas em voz alta e está com medo de ter dito errado.", proxima: "c7_esc5" },

    // ▶ ESCOLHA 5 — No meio-fio, com o Kaito (romance devagar)
    c7_esc5: { escolhas: [
      { texto: "A. Encostar a cabeça no ombro dele. Só isso.", proxima: "c7_5a_1", pontos: { kaito: 3 }, flags: ["Ombro_Kaito_meiofio"] },
      { texto: "B. “Quem te ensinou isso?”", proxima: "c7_5b_1", pontos: { kaito: 2 }, flags: ["Perguntou_Kaito_quem"] },
      { texto: "C. “Você disse pra eu ficar longe de você. Ontem.”", proxima: "c7_5c_1", pontos: { kaito: 2 }, flags: ["Lembrou_longe_Kaito"] }
    ]},
    c7_5a_1: { tipo: "narracao", texto: "Ela encosta a cabeça no ombro dele. O Kaito fica rígido. Inteiro. Como uma estátua.", proxima: "c7_5a_2" },
    c7_5a_2: { tipo: "narracao", texto: "Depois, devagar, muito devagar, o ombro dele relaxa. Ele não abraça. Ele não fala nada. Ele só ajeita o próprio corpo um pouco, para o ombro ficar mais confortável para ela.", proxima: "c7_5a_3" },
    c7_5a_3: { tipo: "narracao", texto: "Eles ficam assim até a primeira gota de chuva cair.", proxima: "c7_18" },
    c7_5b_1: { tipo: "narracao", texto: "O Kaito fica um tempo em silêncio.", proxima: "c7_5b_2" },
    c7_5b_2: { quem: "kaito", texto: "Uma menina num parquinho. Que me derrubou na areia e depois voltou a pintar. Como se nada tivesse acontecido.", proxima: "c7_5b_3" },
    c7_5b_3: { quem: "kaito", texto: "Eu passei a vida achando que ela não tinha sentido nada. Que ela era forte demais pra sentir. Hoje eu vi que não. Ela sentia. Ela só levantava mesmo assim.", proxima: "c7_5b_4" },
    c7_5b_4: { tipo: "pensamento", texto: "Ele está falando de mim. Da menina de seis anos. Que eu nem lembro direito.", proxima: "c7_18" },
    c7_5c_1: { tipo: "narracao", texto: "O Kaito joga a grama no chão.", proxima: "c7_5c_2" },
    c7_5c_2: { quem: "kaito", texto: "Eu disse.", proxima: "c7_5c_3" },
    c7_5c_3: { quem: "eu", texto: "E aí?", proxima: "c7_5c_4" },
    c7_5c_4: { quem: "kaito", texto: "E aí que eu sou um idiota. Eu disse pra você ficar longe pra você não se machucar perto de mim. E você se machucou longe de mim. E eu não estava lá.", proxima: "c7_5c_5" },
    c7_5c_5: { tipo: "narracao", texto: "Ele não fala mais nada. Mas também não pede para ela ficar longe de novo.", proxima: "c7_18" },

    // (todas as opções continuam aqui)
    c7_18: { tipo: "narracao", texto: "A chuva começa fina. O Kaito tira a jaqueta e coloca por cima da cabeça dela, como um guarda-chuva. Ele fica na chuva sem nada.", proxima: "c7_19" },
    c7_19: { quem: "kaito", texto: "Vem. Sobe na garupa. Eu te levo. E não reclama, que a bicicleta do tio é horrível.", proxima: "c7_20" },
    c7_20: { tipo: "narracao", texto: "Ela sobe na garupa da bicicleta de entrega, entre a caixa térmica vazia e as costas dele. Segura na camiseta dele, molhada de chuva. Ele pedala devagar. Desviando de cada buraco.", proxima: "c7_21" },
    c7_21: { tipo: "narracao", texto: "Na frente do portão da casa dela, ele freia. Espera ela descer. Não olha para ela.", proxima: "c7_22" },
    c7_22: { quem: "kaito", texto: "Amanhã, se você for pra escola, eu vou estar no corredor do segundo andar. Na janela. A manhã inteira.", proxima: "c7_23" },
    c7_23: { quem: "kaito", texto: "Só... vou estar lá. Se alguém falar alguma coisa, você olha pra janela.", proxima: "c7_24" },
    c7_24: { quem: "eu", texto: "Por quê, Kaito?", proxima: "c7_25" },
    c7_25: { tipo: "narracao", texto: "Ele não responde. Ele vira a bicicleta, sobe e vai embora pedalando na chuva, sem a jaqueta, que ficou na cabeça dela.", proxima: "c7_26" },
    c7_26: { tipo: "narracao", texto: "Mas, na esquina, ele para. E fica ali, debaixo da chuva, até ela entrar. Ela vê pela fresta do portão.", proxima: "ep_01" },

    /* =================== EPÍLOGO — A JAQUETA =================== */
    // Cenário: quarto da SN, noite. Música: piano, calmo.
    ep_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Epílogo — A jaqueta", sprite: null, texto: "No quarto, ela pendura a jaqueta do Kaito no encosto da cadeira. Molhada. Cheirando a chuva e a caldo de lámen.", proxima: "ep_02" },
    ep_02: { tipo: "narracao", texto: "Ela não sente mais o cheiro de peixe. Pela primeira vez desde o intervalo.", proxima: "ep_03" },
    ep_03: { tipo: "narracao", texto: "Ela abre o caderno azul. Vai até a página das regras. Lê a regra número 2. Não abaixar a cabeça.", proxima: "ep_04" },
    ep_04: { tipo: "narracao", texto: "Hoje ela abaixou. No corredor. No banheiro. Na calçada. Três vezes.", proxima: "ep_05" },
    ep_05: { tipo: "narracao", texto: "Ela pega a caneta. Pensa em riscar a regra. Não risca. Escreve embaixo, pequeno:", proxima: "ep_06" },
    ep_06: { tipo: "narracao", texto: "“Hoje eu não consegui. Amanhã eu tento de novo. Ninguém disse que era pra conseguir de primeira.”", proxima: "ep_07" },
    ep_07: { tipo: "narracao", texto: "Depois ela vira a página e escreve na lista:", proxima: "ep_08" },
    ep_08: { tipo: "narracao", texto: "37. Força não serve pra tudo. Tem coisa que nem uma viga ajuda a segurar.", proxima: "ep_09" },
    ep_09: { tipo: "narracao", texto: "38. A Mio chorou de raiva. A Hana anotou 41 nomes. O Takeo arrastou a carteira. A Reina jogou um desodorante pela janela. O Ryuji emprestou a jaqueta. O Victor me deu um pirulito.", proxima: "ep_10" },
    ep_10: { tipo: "narracao", texto: "39. O Blake hesitou.", proxima: "ep_11" },
    ep_11: { tipo: "narracao", texto: "40. O Kaito rodou o bairro inteiro com uma caixa térmica vazia.", proxima: "ep_12" },
    ep_12: { tipo: "narracao", texto: "Ela para na linha 40. Fica olhando para ela por muito tempo.", proxima: "ep_13" },
    ep_13: { tipo: "pensamento", texto: "Na minha vida antiga, eu passei por isso sozinha. Toda vez. Ninguém arrastou carteira nenhuma.", proxima: "ep_14" },
    ep_14: { tipo: "pensamento", texto: "Hoje doeu igual. Mas eu não estava sozinha. Eu acho que é essa a diferença. Eu acho que é a única que importa.", proxima: "ep_15" },
    ep_15: { tipo: "narracao", texto: "Antes de dormir, ela pensa de novo no corredor. No balde. E lembra de uma coisa que, na hora, ela viu e não registrou.", proxima: "ep_16" },
    ep_16: { tipo: "narracao", texto: "As mãos da Sayuri. Tremendo no balde vazio. Os olhos dela cheios d'água. E, logo antes de ela tropeçar, o jeito que ela olhou para o fim do corredor. Como quem procura alguém. Como quem pede permissão.", proxima: "ep_17" },
    ep_17: { tipo: "pensamento", texto: "Ela estava com medo.", proxima: "ep_18" },
    ep_18: { tipo: "pensamento", texto: "De quê?", proxima: "ep_19" },
    ep_19: { tipo: "narracao", texto: "O celular vibra. Uma mensagem. Do Kaito.", proxima: "ep_20" },
    ep_20: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Dorme. Amanhã a janela.", proxima: "ep_fim" },

    // Fim do Capítulo 11 (crie a entrada "capitulo11" em dados/capitulos.js)
    ep_fim: { fim: "capitulo11" }
  }
});

/*
 * GANCHO PARA O CAPÍTULO 12 (anotações do roteiro)
 *  • Quinta: o Kaito na janela do corredor a manhã inteira. A SN volta para a escola?
 *  • Sexta: a visita à casa do Takeo (bolinho da avó, fotos de bebê, física).
 *    A Reina se oferece na saída para ir junto, e o Takeo fica sem jeito de negar.
 *  • Por que a Sayuri estava com medo? Para quem ela olhou no fim do corredor?
 *  • O Blake hesitou com a Sayuri. Isso vai pesar entre ele e a SN (e a Mio).
 *  • A Hana tem 41 nomes anotados.
 *  • O Ren continua sumido. (Quando voltar, volta grande.)
 *
 * ESCOLHAS DO CAPÍTULO (5)
 *  1 No meio do corredor · 2 No vestiário · 3 Victor no portão
 *  4 Depois dos caras na rua · 5 No meio-fio com o Kaito
 *
 * FLAGS NOVAS
 *  Olhou_Sayuri_balde · Correu_balde · Ficou_no_chao_balde · Abraco_Mio_vestiario
 *  Perguntou_cheiro · Quis_ir_embora · Victor_hoje_nao · Victor_esquina · Chorou_Kaito
 *  Fingiu_bem_Kaito · Perguntou_acaso_Kaito · Ombro_Kaito_meiofio · Perguntou_Kaito_quem
 *  Lembrou_longe_Kaito
 */