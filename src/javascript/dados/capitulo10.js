/*
 * =====================================================================
 *  CAPÍTULO 10 — Fofoca
 *  Segunda e terça-feira, depois do sábado do Capítulo 9.
 *  Mesmo formato dos capítulos anteriores: cada linha é uma cena.
 * =====================================================================
 *
 *  O QUE ACONTECE
 *    • A Reina pede transferência para a turma da SN e chega com a Akane (ainda com as marcas
 *      do Capítulo 6, mais quieta). A Reina dá em cima do Takeo abertamente. Finge que não
 *      gosta da SN, mas se aproxima do jeito dela. A SN sente ciúme.
 *    • A Sayuri começa um bullying escondido: fofocas espalhadas pela escola numa página de
 *      confissões. A SN começa a ficar insegura.
 *    • Assuntos de gangue ficam fora da escola. A SN não dedura ninguém.
 *    • O Ren some deste capítulo de propósito. Ele está quieto, preparando uma coisa grande
 *      (nível Kisaki): manipulação em várias camadas, sem deixar rastro, usando os outros.
 *    • A Sayuri já foi amiga da gangue e teve alguma coisa com o Blake. Por isso os garotos
 *      hesitam em cortar ela de vez.
 *    • O Kaito se afasta mais, com medo de a SN se machucar por estar perto dele.
 *    • O dia da água de peixe é no Capítulo 11. Aqui só fica a pista.
 *
 *  PERSONALIDADES (combinadas)
 *    Blake reservado e dividido entre Mio e SN · Kaito frio por fora, com medo de machucar a SN ·
 *    Takeo tímido mas direto, romântico, acolhe quem está sozinho · Victor galinha, com o Caramelo ·
 *    Ryuji provocador e leal · A SN não fala o apelido antigo dela.
 *
 *  PERSONAGENS (nenhum novo)
 *    Reina, Akane, Sayuri, Victor, Coordenador, Professora (de química).
 *
 *  CENÁRIOS
 *    Banheiro feminino → "banheiro" · Terraço do bloco B → "terraco"
 *    Padaria à noite → "rua-padaria-noite" · Lembrança do aviso no laboratório → "laboratorio"
 *
 *  FLAGS DOS CAPÍTULOS ANTERIORES USADAS AQUI (com caminhos)
 *    Bilhete_no_bolso.
 *
 *  Título, capa e gancho ficam em dados/capitulos.js: crie a entrada "capitulo10".
 */
Roteiro.registrar("capitulo10", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — O CLANDESTINO =================== */
    // Cenário: corredor em frente à coordenação, segunda de manhã. Música: tema leve e engraçado.
    // Assuntos de gangue ficam fora da escola. Aqui é só escola.
    c1_01: { tipo: "narracao", cenario: "corredor", roupa: "escolar", transicao: "tempo", legenda: "Cena 1 — O clandestino", sprite: null, texto: "Segunda-feira. Sete e meia da manhã. O corredor do segundo andar ainda está meio vazio quando a SN ouve um latido. Um latido. Dentro da escola.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", sprite: "victor", texto: "Na frente da coordenação, sentado no banco de madeira, está o Victor. Com uma mochila aberta no colo. E, saindo da mochila, uma cabeça caramelo de orelha caída, abanando o rabo tão forte que a mochila inteira balança.", proxima: "c1_03" },
    c1_03: { quem: "victor", texto: "Shhh. Shhh, Caramelo. A gente combinou. Você é uma mochila. Mochila não late.", proxima: "c1_04" },
    c1_04: { quem: "eu", texto: "Você trouxe o Caramelo pra escola?", proxima: "c1_05" },
    c1_05: { quem: "victor", texto: "Ele não pode ficar sozinho em casa no primeiro dia. Ele chorou a madrugada inteira quando eu fui no banheiro. Ele tem trauma de abandono. Igual a mim.", proxima: "c1_06" },
    c1_06: { tipo: "narracao", texto: "Ele fala isso rindo. Mas olha para ela quando fala. Só por um segundo.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", texto: "O Caramelo vê a SN. Pula da mochila. Corre pelo corredor com as unhas escorregando no piso e a plaquinha nova balançando, e se joga nas pernas dela.", proxima: "c1_08" },
    c1_08: { tipo: "narracao", sprite: "kaito", texto: "Bem nessa hora, a gangue sobe a escada. O Kaito na frente, com o olho já amarelo-esverdeado do festival. O Blake com os pontos no supercílio. O Ryuji com o curativo “por solidariedade”, que ele não tirou o fim de semana inteiro.", proxima: "c1_09" },
    c1_09: { quem: "ryuji", sprite: "ryuji", texto: "Isso é um cachorro? Dentro da escola? Victor, você é meu herói.", proxima: "c1_10" },
    c1_10: { quem: "victor", texto: "Obrigado, ruivo. Bom dia pra você também, líder. O olho ficou bonito. Combina com seu humor.", proxima: "c1_11" },
    c1_11: { quem: "kaito", sprite: "kaito", texto: "Fala mais uma coisa e eu combino o seu também.", proxima: "c1_12" },
    c1_12: { tipo: "narracao", sprite: null, texto: "A maçaneta da porta da coordenação gira. Do outro lado, a voz do coordenador, falando no telefone, cada vez mais perto.", proxima: "c1_13" },
    c1_13: { quem: "victor", texto: "Ih. Gatinha. Socorro. Se ele vir o Caramelo, eu levo suspensão e o Caramelo vai pra rua de novo.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — O cachorro clandestino
    c1_esc1: { escolhas: [
      { texto: "A. Pegar o Caramelo no colo e correr com ele pra sala do clube de leitura.", proxima: "c1_1a_1", pontos: { victor: 2 }, flags: ["Escondeu_Caramelo"] },
      { texto: "B. Ficar na frente da porta e dizer pro coordenador que o cachorro é seu.", proxima: "c1_1b_1", pontos: { victor: 3 }, flags: ["Assumiu_Caramelo"] },
      { texto: "C. Devolver o Caramelo pra mochila e deixar o Victor se virar sozinho.", proxima: "c1_1c_1", pontos: { victor: 1 } }
    ]},
    c1_1a_1: { tipo: "narracao", texto: "Ela pega o Caramelo no colo, como se fosse uma sacola de compras, e sai correndo pelo corredor. O Caramelo acha que é brincadeira e lambe a orelha dela o caminho inteiro.", proxima: "c1_1a_2" },
    c1_1a_2: { tipo: "narracao", texto: "Atrás dela, ela ouve o coordenador abrindo a porta e o Victor dizendo, com a maior cara de pau do mundo, que o latido era ele treinando para a peça de teatro.", proxima: "c1_1a_3" },
    c1_1a_3: { tipo: "narracao", texto: "No clube de leitura, ela tranca a porta e senta no chão, rindo sozinha, com um cachorro caramelo no colo e o coração batendo forte. Não de medo. De bagunça.", proxima: "c1_14" },
    c1_1b_1: { tipo: "narracao", texto: "O coordenador abre a porta. Olha para a SN. Para o cachorro sentado no pé dela. Para o Victor fingindo amarrar o tênis.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "eu", texto: "É meu. Ele me seguiu de casa. Eu já ia levar ele embora.", proxima: "c1_1b_3" },
    c1_1b_3: { tipo: "narracao", texto: "O coordenador se abaixa. Lê a plaquinha da coleira. Levanta devagar. Olha para o Victor. O Victor olha para o teto.", proxima: "c1_1b_4" },
    c1_1b_4: { quem: "coordenador", texto: "Que coincidência. A plaquinha do seu cachorro tem o telefone do Victor.", proxima: "c1_1b_5" },
    c1_1b_5: { tipo: "narracao", texto: "Silêncio. O Ryuji tapa a boca. O Coordenador respira fundo, muito fundo, e fecha os olhos.", proxima: "c1_1b_6" },
    c1_1b_6: { quem: "coordenador", texto: "Eu não vi nada. Eu não ouvi nada. Em cinco minutos, esse cachorro está fora da escola. Victor. Você me deve. De novo.", proxima: "c1_1b_7" },
    c1_1b_7: { tipo: "narracao", texto: "Quando a porta fecha, o Victor fica olhando para ela de um jeito novo. Sem deboche.", proxima: "c1_1b_8" },
    c1_1b_8: { quem: "victor", texto: "Você mentiu pra coordenação. Por mim. E pelo Caramelo. Você mente muito mal, gatinha. Foi a coisa mais bonita que eu já vi.", proxima: "c1_14" },
    c1_1c_1: { tipo: "narracao", texto: "Ela coloca o Caramelo de volta na mochila e fecha o zíper até o pescoço dele. O Caramelo olha para ela com o olho bom, ofendido.", proxima: "c1_1c_2" },
    c1_1c_2: { tipo: "narracao", texto: "O coordenador abre a porta. O Victor está sentado no banco, abraçando uma mochila que respira.", proxima: "c1_1c_3" },
    c1_1c_3: { quem: "coordenador", texto: "Victor. Por que sua mochila está abanando?", proxima: "c1_1c_4" },
    c1_1c_4: { quem: "victor", texto: "...Vento, professor.", proxima: "c1_14" },

    // (todas as opções continuam aqui)
    c1_14: { tipo: "narracao", sprite: "kaito", texto: "Quando a confusão acaba, o Caramelo vai embora no colo do Victor, que ganhou permissão para levar ele em casa antes da primeira aula. A gangue entra na sala. O Kaito passa do lado dela sem parar. Sem olhar.", proxima: "c1_15" },
    c1_15: { tipo: "narracao", texto: "Mas, quando ela senta, tem um pelo caramelo a menos no ombro dela. Ela não viu ninguém tirar.", proxima: "c2_01" },

    /* =================== CENA 2 — A TRANSFERIDA =================== */
    // Cenário: sala de aula. Música: tema da Reina, violino elegante.
    c2_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Cena 2 — A transferida", sprite: null, texto: "Na primeira aula, a professora de química entra com duas alunas atrás dela. A sala inteira para de falar ao mesmo tempo.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", sprite: "reina", texto: "A primeira é a Reina. Uniforme impecável, cabelo longo solto, um sorriso de capa de revista. Ninguém diria que, fora da escola, ela manda numa das gangues mais perigosas da cidade.", proxima: "c2_03" },
    c2_03: { tipo: "narracao", sprite: "akane", texto: "A segunda é a Akane. Mais baixa. Cabelo preto curto. Uma cicatriz fina ainda rosada na testa, e as duas mãos escondidas dentro das mangas compridas do uniforme. Ninguém na escola sabe de onde veio a cicatriz. Ninguém pergunta. Ela anda um passo atrás da Reina. Olhando para o chão.", proxima: "c2_04" },
    c2_04: { quem: "professora", texto: "A Reina e a Akane pediram transferência de turma. A partir de hoje, elas estudam com vocês. Sejam gentis.", proxima: "c2_05" },
    c2_05: { quem: "reina", texto: "Obrigada, professora. Eu sempre quis estudar nessa turma. Tem pessoas aqui que me interessam muito.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", texto: "Ela fala isso olhando para a terceira carteira da fileira da janela. Para o Takeo. Que fica vermelho até as orelhas sem entender por quê.", proxima: "c2_07" },
    c2_07: { tipo: "narracao", texto: "A professora aponta duas carteiras vazias. Uma no fundo, sozinha. Outra bem do lado do Takeo. A Reina vai direto para a do lado do Takeo, sem esperar ninguém dizer nada.", proxima: "c2_08" },
    c2_08: { quem: "reina", texto: "Oi, Takeo. Que bom que seu rosto melhorou. Eu fiquei muito preocupada com você no fim de semana.", proxima: "c2_09" },
    c2_09: { quem: "takeo", sprite: "takeo", texto: "Ah... oi, Reina. Obrigado. Eu... estou bem. Quer dizer. As costelas ainda doem. Mas estou bem.", proxima: "c2_10" },
    c2_10: { tipo: "narracao", sprite: "reina", texto: "A Reina coloca uma caixinha embrulhada num pano bordado em cima da carteira dele.", proxima: "c2_11" },
    c2_11: { quem: "reina", texto: "Eu fiz pra você. Bolinho de arroz. Eu sei que sua avó faz, mas o meu tem recheio de salmão. Prova no intervalo e me fala qual é melhor.", proxima: "c2_12" },
    c2_12: { tipo: "narracao", texto: "A sala inteira está olhando. A Sayuri, na terceira fila, cochicha alguma coisa para a amiga. As duas riem. A Mio, do lado da SN, solta um “uuuuh” baixinho.", proxima: "c2_13" },
    c2_13: { tipo: "narracao", texto: "A SN fica olhando para a caixinha bordada na carteira do Takeo. Alguma coisa aperta no peito dela. Uma coisa pequena, quente e muito chata.", proxima: "c2_14" },
    c2_14: { tipo: "pensamento", texto: "Ela gosta dele há anos. Ela tem todo o direito. Ela foi minha aliada contra o Ren. Ela chorou no meu ombro no hospital.", proxima: "c2_15" },
    c2_15: { tipo: "pensamento", texto: "Então por que eu quero jogar essa caixinha pela janela?", proxima: "c2_16" },
    c2_16: { tipo: "narracao", sprite: "akane", texto: "Enquanto isso, a Akane anda sozinha até a carteira do fundo. Senta. Coloca as mãos escondidas em cima da mesa e fica olhando para elas. Ninguém fala com ela.", proxima: "c2_17" },
    c2_17: { tipo: "narracao", sprite: "takeo", texto: "O Takeo percebe. Ele sempre percebe. Ele olha para a Akane sozinha lá no fundo, depois para a carteira vazia do lado dela.", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — A caixinha da Reina
    c2_esc2: { escolhas: [
      { texto: "A. Fingir que não ligou. Abrir o livro e olhar para a lousa.", proxima: "c2_2a_1", pontos: { takeo: 1 }, flags: ["SN_fingiu_ciume"] },
      { texto: "B. Olhar direto para a Reina, sem sorrir, até ela perceber.", proxima: "c2_2b_1", pontos: { desvio: 1 }, flags: ["SN_encarou_Reina"] },
      { texto: "C. Sorrir para o Takeo e fazer sinal de “vai lá” com a cabeça, apontando para a Akane sozinha.", proxima: "c2_2c_1", pontos: { takeo: 2 }, flags: ["SN_apontou_Akane"] }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "Ela abre o livro de química. Lê a mesma linha seis vezes. Não entende nenhuma.", proxima: "c2_2a_2" },
    c2_2a_2: { tipo: "narracao", texto: "Do lado dela, a Mio cutuca o braço dela com a caneta.", proxima: "c2_2a_3" },
    c2_2a_3: { quem: "mio", sprite: "mio", texto: "Você está lendo o livro de cabeça pra baixo de novo.", proxima: "c2_18" },
    c2_2b_1: { tipo: "narracao", sprite: "reina", texto: "A Reina sente o olhar. Vira devagar. Encontra os olhos da SN do outro lado da sala.", proxima: "c2_2b_2" },
    c2_2b_2: { tipo: "narracao", texto: "Por um segundo, as duas só se olham. Depois a Reina levanta uma sobrancelha, sorri de canto e faz uma coisa que a SN não esperava. Pisca para ela.", proxima: "c2_2b_3" },
    c2_2b_3: { tipo: "pensamento", texto: "Ela está me provocando. E está se divertindo com isso.", proxima: "c2_18" },
    c2_2c_1: { tipo: "narracao", texto: "O Takeo vê o sinal dela. Olha para a Akane. Olha para a SN de novo. E sorri, aquele sorriso de quem não precisava de incentivo, mas ficou feliz de receber.", proxima: "c2_18" },

    // (todas as opções continuam aqui)
    c2_18: { tipo: "narracao", sprite: "takeo", texto: "No intervalo, o Takeo pega a caixinha da Reina, agradece, e atravessa a sala inteira até a carteira do fundo. Senta do lado da Akane.", proxima: "c2_19" },
    c2_19: { quem: "takeo", texto: "Oi. Eu sou o Takeo. Você quer dividir? A Reina fez bolinho pra um exército. Eu não vou conseguir comer tudo.", proxima: "c2_20" },
    c2_20: { tipo: "narracao", sprite: "akane", texto: "A Akane olha para ele como se ninguém tivesse falado com ela em semanas. Talvez ninguém tenha.", proxima: "c2_21" },
    c2_21: { quem: "akane", texto: "...Você é o Takeo. Eu sei quem você é. Eu... te devo uma desculpa. Por uma coisa de fora daqui.", proxima: "c2_22" },
    c2_22: { quem: "takeo", texto: "Aqui dentro é só escola. Lá fora a gente resolve lá fora. Come o de salmão, que é o melhor.", proxima: "c2_23" },
    c2_23: { tipo: "narracao", texto: "A Akane pega um bolinho. Devagar. Com a mão saindo da manga pela primeira vez. Os dedos dela ainda têm marcas roxas, quase sumindo.", proxima: "c2_24" },
    c2_24: { tipo: "narracao", sprite: "reina", texto: "Da carteira dela, a Reina assiste à cena com uma expressão que a SN não consegue ler. Não é ciúme. É outra coisa. Parece alívio. Parece dor também.", proxima: "c2_25" },
    c2_25: { tipo: "pensamento", texto: "Ele faz isso com todo mundo. Senta do lado de quem está sozinho. Ele fez isso comigo, a vida inteira. Eu só nunca tinha visto de fora.", proxima: "c2_26" },
    c2_26: { tipo: "pensamento", texto: "Não admira que a Reina goste dele.", proxima: "c3_01" },

    /* =================== CENA 3 — O QUE ESTÃO DIZENDO =================== */
    // Cenário: corredor e banheiro feminino, depois do almoço (usa "corredor"). Música: some aos poucos.
    c3_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Cena 3 — O que estão dizendo", sprite: null, texto: "Depois do almoço, alguma coisa mudou no corredor. A SN percebe antes de entender.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "Duas meninas do primeiro ano param de conversar quando ela passa. Um grupo do terceiro ano olha para ela e ri, cobrindo a boca. Um garoto que ela nunca viu assobia.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", cenario: "banheiro", texto: "Ela entra no banheiro feminino. Fecha a porta da última cabine. E, do lado de fora, ouve duas vozes que acabaram de entrar.", proxima: "c3_04" },
    c3_04: { quem: "desconhecido", rotulo: "Voz no banheiro", texto: "Você viu a página de confissões da escola? Postaram umas fotos. Ela no fliperama com o Victor. Ela no portão com o Kaito, de noite. Ela andando com o Blake na rua.", proxima: "c3_05" },
    c3_05: { quem: "desconhecido", rotulo: "Outra voz", texto: "E uma dela almoçando na arquibancada com o ruivo. E com o Takeo na esquina. Ela passou de invisível pra isso em três semanas.", proxima: "c3_06" },
    c3_06: { quem: "desconhecido", rotulo: "Voz no banheiro", texto: "Dizem que ela anda com os garotos do fundão pra ninguém mexer com ela. Que ela fica com um diferente por semana.", proxima: "c3_07" },
    c3_07: { quem: "desconhecido", rotulo: "Outra voz", texto: "Coitado do Takeo. Ele é o único que não percebe.", proxima: "c3_08" },
    c3_08: { tipo: "narracao", texto: "Risadas. A torneira abre e fecha. A porta bate. Silêncio.", proxima: "c3_09" },
    c3_09: { tipo: "narracao", texto: "A SN fica sentada na tampa do vaso, com os pés em cima, para ninguém ver por baixo da porta. Exatamente do jeito que ela fazia antes.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", texto: "Ela só percebe depois de um tempo. Os pés em cima da tampa. A mochila no colo. O almoço, que ela não comeu, dentro da mochila.", proxima: "c3_11" },
    c3_11: { tipo: "pensamento", texto: "Eu estou fazendo de novo.", proxima: "c3_12" },
    c3_12: { tipo: "pensamento", texto: "Três semanas. Eu segurei uma viga. Eu segurei uma faca. E bastou duas vozes num banheiro pra eu voltar pra cá.", proxima: "c3_13" },
    c3_13: { tipo: "narracao", texto: "Ela abre o celular. A página de confissões da escola. As fotos estão lá. Tiradas de longe, de dentro da escola, do portão, da esquina. Todas com legendas.", proxima: "c3_14" },
    c3_14: { tipo: "narracao", texto: "Nenhuma assinatura. Nenhum perfil. Só uma conta nova, criada no domingo, com uma foto de perfil de um laço rosa.", proxima: "c3_15" },
    c3_15: { tipo: "pensamento", texto: "Laço rosa. Não precisa de assinatura.", proxima: "c3_16" },
    c3_16: { tipo: "pensamento", texto: "Ela não precisa encostar em mim. Ela só precisa que a escola inteira olhe pra mim do jeito que olhava antes.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — Na cabine do banheiro
    c3_esc3: { escolhas: [
      { texto: "A. Tirar os pés da tampa do vaso, abrir a porta e sair andando pelo corredor de cabeça erguida.", proxima: "c3_3a_1", pontos: { desvio: 1 }, flags: ["Saiu_do_banheiro"] },
      { texto: "B. Mandar mensagem para a Mio e a Hana: “Banheiro do segundo andar. Última cabine.”", proxima: "c3_3b_1", pontos: { mio: 2, hana: 2 }, flags: ["Chamou_amigas_banheiro"] },
      { texto: "C. Ficar ali até o sinal tocar. Só mais um pouco.", proxima: "c3_3c_1", flags: ["Ficou_no_banheiro"] }
    ]},
    c3_3a_1: { tipo: "narracao", texto: "Ela coloca os pés no chão. Um de cada vez. Abre a porta da cabine. Lava o rosto na pia, sem olhar muito para o espelho.", proxima: "c3_3a_2" },
    c3_3a_2: { tipo: "narracao", texto: "No corredor, as pessoas olham. Algumas cochicham. Ela olha de volta. Uma por uma. Até elas desviarem primeiro.", proxima: "c3_3a_3" },
    c3_3a_3: { tipo: "pensamento", texto: "As pernas estão tremendo. Ninguém precisa saber disso.", proxima: "c4_01" },
    c3_3b_1: { tipo: "narracao", texto: "Em menos de dois minutos, alguém bate na porta da cabine. Duas batidas rápidas, uma lenta. A Mio inventou essa batida no terceiro ano do fundamental.", proxima: "c3_3b_2" },
    c3_3b_2: { tipo: "narracao", texto: "Ela abre. A Mio entra na cabine apertada sem pedir licença. A Hana fica do lado de fora, encostada na porta, de guarda, com o caderno de gatinhos aberto.", proxima: "c3_3b_3" },
    c3_3b_3: { quem: "mio", sprite: "mio", texto: "Eu vi a página. Eu já denunciei todas as fotos. Quarenta vezes. Do meu celular, do celular da minha mãe e do celular do meu primo.", proxima: "c3_3b_4" },
    c3_3b_4: { quem: "hana", sprite: "hana", texto: "Eu anotei o horário de cada post. Todos depois das onze da noite. A Sayuri dorme às dez, ela vive reclamando disso. Alguém postou por ela.", proxima: "c3_3b_5" },
    c3_3b_5: { tipo: "narracao", texto: "A Mio abraça ela na cabine apertada. Os cotovelos batem na parede. Ninguém liga.", proxima: "c3_3b_6" },
    c3_3b_6: { quem: "mio", sprite: "mio", texto: "Você nunca mais almoça aqui. Ouviu? Nunca mais.", proxima: "c4_01" },
    c3_3c_1: { tipo: "narracao", texto: "Ela fica. Os pés em cima da tampa. O celular desligado no colo. O barulho do corredor do lado de fora, chegando abafado.", proxima: "c3_3c_2" },
    c3_3c_2: { tipo: "narracao", texto: "Quando o sinal toca, ela não levanta na hora. Fica mais um minuto. Depois mais um. Ela sabe o que está fazendo. Ela sabe que já fez isso mil vezes, aos quinze, aos dezesseis.", proxima: "c3_3c_3" },
    c3_3c_3: { tipo: "pensamento", texto: "Eu achei que essa parte de mim tinha ficado no outro tempo. Não ficou. Ela só estava esperando.", proxima: "c4_01" },

    /* =================== CENA 4 — O PASSADO DA SAYURI =================== */
    // Cenário: pátio dos fundos, à tarde, desmontagem do festival. Música: violão baixo, melancólico.
    c4_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Cena 4 — O passado da Sayuri", sprite: null, texto: "À tarde, o castigo continua: agora é desmontar o festival. As bandeirinhas descem. As barracas viram tábuas de novo. A placa do V ao contrário fica encostada no muro.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "A SN está tirando pregos de uma tábua quando vê. Do outro lado do pátio, perto do portão, a Sayuri está conversando com o Blake.", proxima: "c4_03" },
    c4_03: { tipo: "narracao", sprite: "sayuri", texto: "Não é uma conversa de inimigos. A Sayuri está com as mãos nos bolsos do casaco, olhando para o chão. O Blake está ouvindo, com aquela cara séria de sempre. Mas ele não vai embora.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", sprite: "blake", texto: "Depois de um tempo, ela fala alguma coisa e ri. Uma risada diferente da que ela usa nos corredores. Mais baixa. Quase tímida. E o Blake, por meio segundo, quase sorri de volta.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "A SN derruba o martelo. Do lado dela, a Mio também está olhando. Com a bandeirinha parada na mão. Com uma cara que a SN nunca viu nela.", proxima: "c4_06" },
    c4_06: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji senta na pilha de tábuas do lado delas. Olha para o portão. Suspira.", proxima: "c4_07" },
    c4_07: { quem: "ryuji", texto: "Vocês não sabiam, né?", proxima: "c4_08" },
    c4_08: { quem: "mio", sprite: "mio", texto: "Sabia do quê?", proxima: "c4_09" },
    c4_09: { quem: "ryuji", sprite: "ryuji", texto: "No primeiro ano, a Sayuri andava com a gente. Ela era da turma. Ia pra lojinha de lámen. Torcia nas brigas. Era amiga do Takeo, inclusive.", proxima: "c4_10" },
    c4_10: { quem: "ryuji", texto: "E ela e o Blake... tiveram um negócio. Uns meses. Ninguém nunca falou disso direito. Acabou do nada. Ela parou de andar com a gente. E virou... isso aí.", proxima: "c4_11" },
    c4_11: { quem: "ryuji", texto: "Por isso que ninguém corta ela de vez. O Kaito espanta ela quando ela passa do limite. O Blake não consegue nem isso. A gente lembra de como ela era.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", texto: "A Mio solta a bandeirinha. Ela cai no chão de terra. A Mio não pega.", proxima: "c4_13" },
    c4_13: { quem: "mio", texto: "Eu vou buscar água.", proxima: "c4_14" },
    c4_14: { tipo: "narracao", sprite: null, texto: "Ela vai embora rápido demais. Na direção oposta do portão. A SN olha para ela indo. Depois para o Blake e a Sayuri. Depois para as próprias mãos, sujas de prego.", proxima: "c4_15" },
    c4_15: { tipo: "pensamento", texto: "A pessoa que espalhou fotos minhas pela escola inteira hoje de manhã está rindo com o Blake no portão.", proxima: "c4_16" },
    c4_16: { tipo: "pensamento", texto: "E ele está deixando.", proxima: "c4_17" },
    c4_17: { tipo: "narracao", sprite: "blake", texto: "Quando a Sayuri vai embora, o Blake volta para as tábuas. Ele vê a SN olhando. Para. Fica um tempo em silêncio, como se soubesse exatamente o que ela está pensando.", proxima: "c4_18" },
    c4_18: { quem: "blake", texto: "Ela veio pedir desculpa. Pelas fotos. Ela disse que não foi ela que postou. Que alguém pegou do celular dela.", proxima: "c4_19" },
    c4_19: { quem: "blake", texto: "Eu não sei se acredito. Mas eu conheci ela antes. Ela não era assim.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — Com o Blake, sobre a Sayuri
    c4_esc4: { escolhas: [
      { texto: "A. “Eu não conheci ela antes. Eu conheci ela depois. Todo dia, por três anos.”", proxima: "c4_4a_1", pontos: { blake: 2 }, flags: ["SN_cobrou_Blake"] },
      { texto: "B. “A Mio viu vocês dois. Ela foi embora. Vai atrás dela.”", proxima: "c4_4b_1", pontos: { blake: 1, mio: 3 }, flags: ["Blake_atras_Mio"] },
      { texto: "C. “O que aconteceu com ela, Blake? Por que ela mudou?”", proxima: "c4_4c_1", pontos: { blake: 2 }, flags: ["Perguntou_passado_Sayuri"] },
      { texto: "D. “Ela tinha que pedir desculpa pra mim. Não pra você.”", proxima: "c4_4d_1", pontos: { blake: 2 }, flags: ["SN_desculpa_pra_mim"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "O Blake fica parado. A frase dela bate nele de um jeito que ela vê no rosto dele.", proxima: "c4_4a_2" },
    c4_4a_2: { quem: "blake", texto: "...Por três anos?", proxima: "c4_4a_3" },
    c4_4a_3: { quem: "eu", texto: "Desde o primeiro dia. Você só não via. Ninguém via.", proxima: "c4_4a_4" },
    c4_4a_4: { tipo: "narracao", texto: "Ele não responde. Ele olha para o portão, por onde a Sayuri saiu. Depois para ela. E, pela primeira vez, parece envergonhado.", proxima: "c4_4a_5" },
    c4_4a_5: { quem: "blake", texto: "Eu devia ter visto.", proxima: "c4_20" },
    c4_4b_1: { tipo: "narracao", texto: "O Blake olha na direção que a Mio foi. Vê a bandeirinha caída no chão. Entende.", proxima: "c4_4b_2" },
    c4_4b_2: { quem: "blake", texto: "Ela achou que...", proxima: "c4_4b_3" },
    c4_4b_3: { quem: "eu", texto: "Achou.", proxima: "c4_4b_4" },
    c4_4b_4: { tipo: "narracao", texto: "Ele larga a tábua e vai. Rápido. A SN fica sozinha com os pregos. Feliz pela Mio. E com aquela coisa pequena e chata apertando no peito de novo, que ela já desistiu de nomear.", proxima: "c4_20" },
    c4_4c_1: { tipo: "narracao", texto: "O Blake senta numa tábua. Fica olhando para as próprias mãos enormes, cheias de calo.", proxima: "c4_4c_2" },
    c4_4c_2: { quem: "blake", texto: "Eu não sei direito. Um dia ela apareceu diferente. Disse que a gente era uma gangue de perdedores. Que ela tinha amigos melhores agora. Amigos que iam fazer ela ser alguém.", proxima: "c4_4c_3" },
    c4_4c_3: { quem: "blake", texto: "Foi no começo do ano. Ela nunca explicou. A gente nunca perguntou direito. Talvez essa tenha sido a pior parte.", proxima: "c4_4c_4" },
    c4_4c_4: { tipo: "pensamento", texto: "Ninguém muda assim do nada. Alguma coisa aconteceu com ela.", proxima: "c4_4c_5" },
    c4_4c_5: { tipo: "pensamento", texto: "Isso não muda o que ela faz comigo. Mas muda um pouco o jeito que eu olho pra ela.", proxima: "c4_20" },
    c4_4d_1: { tipo: "narracao", texto: "O Blake fica parado, com a tábua na mão. Abre a boca. Fecha.", proxima: "c4_4d_2" },
    c4_4d_2: { quem: "blake", texto: "...Ela disse que não foi ela.", proxima: "c4_4d_3" },
    c4_4d_3: { quem: "eu", texto: "Então ela tinha que vir me dizer isso. Olhando pra mim. Não pra você, no portão, rindo.", proxima: "c4_4d_4" },
    c4_4d_4: { tipo: "narracao", texto: "Ele abaixa a tábua devagar. Olha para o portão vazio. Depois para ela.", proxima: "c4_4d_5" },
    c4_4d_5: { quem: "blake", texto: "Você tem razão. Ela pediu desculpa pra quem ia perdoar.", proxima: "c4_4d_6" },
    c4_4d_6: { tipo: "pensamento", texto: "E ele ia perdoar. Eu vi no rosto dele.", proxima: "c4_20" },

    // (todas as opções continuam aqui)
    c4_20: { tipo: "narracao", sprite: null, texto: "No fim da tarde, quando todo mundo vai embora junto, como o coordenador mandou, a Reina passa do lado da SN no portão. Sem parar.", proxima: "c4_21" },
    c4_21: { quem: "reina", sprite: "reina", texto: "Amanhã, no intervalo. Terraço do bloco B. Sozinha. Não é convite. É aviso.", proxima: "c4_22" },
    c4_22: { tipo: "narracao", texto: "E segue andando, alcançando o Takeo, que está esperando a avó na esquina, e enganchando o braço no dele como se fosse a coisa mais natural do mundo.", proxima: "c4_23" },
    c4_23: { tipo: "narracao", sprite: "takeo", texto: "O Takeo fica completamente rígido. Olha para o braço enganchado. Olha para trás, para a SN. Faz uma cara de socorro.", proxima: "c4_24" },
    c4_24: { tipo: "pensamento", texto: "Eu não vou ficar com ciúme. Eu não vou ficar com ciúme.", proxima: "c4_25" },
    c4_25: { tipo: "pensamento", texto: "Eu estou com ciúme.", proxima: "c5_01" },

    /* =================== CENA 5 — O TERRAÇO =================== */
    // Cenário: terraço do bloco B, terça no intervalo (usa "patio-fundos"). Vento, céu nublado. Música: violino tenso.
    c5_01: { tipo: "narracao", cenario: "terraco", transicao: "tempo", legenda: "Cena 5 — O terraço", sprite: null, texto: "Terça-feira. O terraço do bloco B é proibido para alunos. Tem uma corrente na porta. A corrente está aberta, pendurada, com o cadeado solto.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", sprite: "reina", texto: "A Reina está sentada no muro baixo do terraço, de costas para a cidade, com o vento bagunçando o cabelo perfeito. A Akane não está com ela.", proxima: "c5_03" },
    c5_03: { quem: "reina", texto: "Fecha a porta.", proxima: "c5_04" },
    c5_04: { tipo: "narracao", texto: "A SN fecha. A Reina não desce do muro. Ela fica olhando para a SN de cima a baixo, devagar, como se estivesse avaliando uma roupa numa vitrine.", proxima: "c5_05" },
    c5_05: { quem: "reina", texto: "Você está horrível. Dormiu mal. Leu a página de confissões a noite inteira, aposto.", proxima: "c5_06" },
    c5_06: { quem: "eu", texto: "Você me chamou aqui pra isso?", proxima: "c5_07" },
    c5_07: { quem: "reina", texto: "Não. Eu te chamei aqui porque eu não gosto de você. E, mesmo assim, ninguém vai fazer isso com você enquanto eu estiver nessa turma.", proxima: "c5_08" },
    c5_08: { tipo: "narracao", texto: "Ela tira o celular do bolso da jaqueta e vira a tela para a SN. Uma foto. Tirada da porta da biblioteca. A Sayuri sozinha num dos computadores, no domingo, com a página de confissões aberta na tela.", proxima: "c5_09" },
    c5_09: { quem: "reina", texto: "Domingo. Biblioteca do bairro. Eu fui devolver um livro e dei sorte. Ou azar. Depende de que lado você está.", proxima: "c5_10" },
    c5_10: { quem: "reina", texto: "Eu não vou entregar isso pra diretoria. Não é assim que eu resolvo as coisas. E você também não vai. Mas agora você sabe. Saber é metade da briga.", proxima: "c5_11" },
    c5_11: { tipo: "narracao", texto: "Ela guarda o celular. Desce do muro.", proxima: "c5_12" },
    c5_12: { quem: "reina", texto: "Eu estou te contando isso porque o Takeo ficou triste ontem. Ele leu as legendas. A parte de “coitado do Takeo, o único que não percebe”.", proxima: "c5_13" },
    c5_13: { quem: "reina", texto: "Ninguém deixa o Takeo triste. Nem a Sayuri. Nem você.", proxima: "c5_14" },
    c5_14: { tipo: "pensamento", texto: "Ela está fazendo isso por mim. E dizendo que é por ele. E acho que um pouco é por ele mesmo.", proxima: "c5_15" },
    c5_15: { quem: "reina", texto: "E, já que a gente está sendo sincera. Eu vou chamar o Takeo pra sair. Essa semana.", proxima: "c5_16" },
    c5_16: { tipo: "narracao", texto: "Ela fala isso olhando direto nos olhos da SN. Sem sorrir. Como quem coloca uma carta em cima da mesa.", proxima: "c5_17" },
    c5_17: { quem: "reina", texto: "Você teve dez anos pra dizer alguma coisa pra ele. Eu tive dois. Eu não vou esperar mais. Se você quiser disputar, disputa. Mas disputa direito.", proxima: "c5_esc5" },

    // ▶ ESCOLHA 5 — No terraço com a Reina
    c5_esc5: { escolhas: [
      { texto: "A. “Então chama. Ele é quem escolhe.”", proxima: "c5_5a_1", pontos: { takeo: 1 }, flags: ["SN_deixou_Reina"] },
      { texto: "B. “Eu não estou disputando nada. Mas eu também não vou sair do lado dele.”", proxima: "c5_5b_1", pontos: { takeo: 2 }, flags: ["SN_firme_Takeo"] },
      { texto: "C. “Obrigada pela foto, Reina. De verdade.” E ignorar o resto.", proxima: "c5_5c_1", pontos: { desvio: 1 }, flags: ["SN_agradeceu_Reina"] }
    ]},
    c5_5a_1: { tipo: "narracao", texto: "A Reina estreita os olhos. Procurando o blefe.", proxima: "c5_5a_2" },
    c5_5a_2: { quem: "reina", texto: "Você fala isso com uma calma que me irrita. Você acha que ele vai escolher você.", proxima: "c5_5a_3" },
    c5_5a_3: { quem: "eu", texto: "Eu acho que ele merece escolher.", proxima: "c5_5a_4" },
    c5_5a_4: { tipo: "narracao", texto: "A Reina fica em silêncio. Depois solta uma risada curta, contra a vontade.", proxima: "c5_5a_5" },
    c5_5a_5: { quem: "reina", texto: "Que ódio. Até sua resposta é bonita.", proxima: "c5_18" },
    c5_5b_1: { tipo: "narracao", texto: "A Reina sorri. Um sorriso de quem finalmente achou um adversário à altura.", proxima: "c5_5b_2" },
    c5_5b_2: { quem: "reina", texto: "Ótimo. Eu também não. Vai ser divertido.", proxima: "c5_5b_3" },
    c5_5b_3: { quem: "reina", texto: "Só não chora quando eu ganhar.", proxima: "c5_5b_4" },
    c5_5b_4: { quem: "eu", texto: "Você que não chora.", proxima: "c5_5b_5" },
    c5_5b_5: { quem: "reina", texto: "Eu não choro. Eu chorei uma vez. No hospital. E você nunca vai falar disso.", proxima: "c5_18" },
    c5_5c_1: { tipo: "narracao", texto: "A Reina pisca, surpresa. Ela claramente esperava uma briga.", proxima: "c5_5c_2" },
    c5_5c_2: { quem: "reina", texto: "...Não precisa agradecer. Eu não fiz por você.", proxima: "c5_5c_3" },
    c5_5c_3: { quem: "eu", texto: "Eu sei.", proxima: "c5_5c_4" },
    c5_5c_4: { quem: "reina", texto: "Para de falar “eu sei” desse jeito. Como se soubesse mesmo.", proxima: "c5_18" },

    // (todas as opções continuam aqui)
    c5_18: { tipo: "narracao", texto: "A Reina abre a porta do terraço. Antes de descer, ela para e fala de costas.", proxima: "c5_19" },
    c5_19: { quem: "reina", texto: "A Akane não sai mais de perto de mim. Nem para ir ao banheiro. Ela tem medo de ficar sozinha num lugar onde ele possa achar ela.", proxima: "c5_20" },
    c5_20: { quem: "reina", texto: "Ontem, o Takeo sentou do lado dela. Foi a primeira vez em duas semanas que ela comeu alguma coisa inteira.", proxima: "c5_21" },
    c5_21: { quem: "reina", texto: "É por isso. É por isso que eu gosto dele. Caso você estivesse se perguntando.", proxima: "c5_22" },
    c5_22: { tipo: "narracao", sprite: null, texto: "A porta fecha. A SN fica sozinha no terraço, com o vento.", proxima: "c5_23" },
    c5_23: { tipo: "pensamento", texto: "Ela gosta dele pelos mesmos motivos que eu.", proxima: "c5_24" },
    c5_24: { tipo: "pensamento", texto: "Isso devia me deixar com menos ciúme. Deixou com mais.", proxima: "c6_01" },

    /* =================== CENA 6 — O CAMINHO COM O TAKEO =================== */
    // Cenário: rua até a casa da SN, terça à tarde (usa "saida-colegio"). Música: violão, quente.
    c6_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Cena 6 — O caminho com o Takeo", sprite: null, texto: "Na saída, a Reina está esperando o Takeo no portão. A avó do Takeo também. As duas se olham. A avó ganha. Ela pega o braço do neto e anuncia que ele vai levar a SN em casa, porque ela é a “menina da viga”.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", sprite: "takeo", texto: "A Reina fica parada no portão, de boca aberta. Pela primeira vez, alguém ganhou dela sem nem tentar. A SN tem que morder o lábio para não rir.", proxima: "c6_03" },
    c6_03: { tipo: "narracao", texto: "Eles andam devagar. Por causa das costelas dele. Por causa da vontade dela de que o caminho seja longo. O Takeo está quieto demais. Ele chuta uma pedrinha. Depois outra.", proxima: "c6_04" },
    c6_04: { quem: "takeo", texto: "Eu li a página. As legendas.", proxima: "c6_05" },
    c6_05: { quem: "eu", texto: "Eu sei. A Reina me contou.", proxima: "c6_06" },
    c6_06: { quem: "takeo", texto: "Não é verdade. Nada daquilo. Eu sei que não é.", proxima: "c6_07" },
    c6_07: { quem: "takeo", texto: "Eu conheço você desde os seis anos. Você nunca fez nada pra ninguém gostar de você. Você só é. As pessoas chegam perto porque você é boa. É só isso.", proxima: "c6_08" },
    c6_08: { tipo: "narracao", texto: "Ele para de andar. Vira para ela. Vermelho até as orelhas, como sempre. Mas olhando direto, sem desviar.", proxima: "c6_09" },
    c6_09: { quem: "takeo", texto: "E eu não sou o único que não percebe. Eu sou o único que percebeu primeiro.", proxima: "c6_10" },
    c6_10: { tipo: "narracao", texto: "Silêncio. Um carro passa. Um cachorro late longe.", proxima: "c6_11" },
    c6_11: { tipo: "pensamento", texto: "Ele é tímido. Ele fica vermelho com qualquer coisa. E mesmo assim ele sempre fala o que sente, olhando no olho, sem rodeio.", proxima: "c6_12" },
    c6_12: { tipo: "pensamento", texto: "Eu passei dez anos sem conseguir fazer isso uma vez.", proxima: "c6_cam1" },
    c6_cam1: { caminhos: [
      { flag: "Bilhete_no_bolso", proxima: "c6_t_bilhete" }
    ], proxima: "c6_13" },
    c6_t_bilhete: { tipo: "narracao", texto: "A mão dela vai sozinha até o bolso do casaco. O bilhete da olaria ainda está lá. Dobrado em quatro. Já mole de tanto ela pegar.", proxima: "c6_13" },
    c6_13: { quem: "takeo", texto: "A Reina... ela me deu bolinho. E enganchou o braço no meu. E disse que ia me chamar pra sair.", proxima: "c6_14" },
    c6_14: { quem: "takeo", texto: "Ela é legal. Ela é muito bonita. Ela gosta de mim faz tempo, eu acho. Eu nunca tinha percebido isso também.", proxima: "c6_15" },
    c6_15: { tipo: "narracao", texto: "Ele fala isso olhando para ela. Esperando alguma coisa. Ela não sabe o quê.", proxima: "c6_16" },
    c6_16: { quem: "takeo", texto: "Você ficou com ciúme? Ontem? Quando ela enganchou o braço?", proxima: "c6_esc6" },

    // ▶ ESCOLHA 6 — “Você ficou com ciúme?”
    c6_esc6: { escolhas: [
      { texto: "A. “...Fiquei.”", proxima: "c6_6a_1", pontos: { takeo: 3 }, flags: ["SN_admitiu_ciume_Takeo"] },
      { texto: "B. “Não. Calor.”", proxima: "c6_6b_1", pontos: { takeo: 2 }, flags: ["SN_negou_ciume_Takeo"] },
      { texto: "C. “Por que você quer saber?”", proxima: "c6_6c_1", pontos: { takeo: 2 }, flags: ["SN_devolveu_Takeo"] }
    ]},
    c6_6a_1: { tipo: "narracao", texto: "O Takeo fica completamente parado. Os olhos arregalados. Depois cobre o rosto com as duas mãos.", proxima: "c6_6a_2" },
    c6_6a_2: { quem: "takeo", texto: "Desculpa. Eu não esperava que você fosse falar sim. Eu tinha preparado uma resposta pro não.", proxima: "c6_6a_3" },
    c6_6a_3: { quem: "eu", texto: "Qual era?", proxima: "c6_6a_4" },
    c6_6a_4: { quem: "takeo", texto: "“Tudo bem, eu fico com ciúme por nós dois.”", proxima: "c6_6a_5" },
    c6_6a_5: { tipo: "narracao", texto: "Ela ri. Ele ri também, por trás das mãos. E, quando os dois voltam a andar, os dedos dele encostam nos dela. Ele não segura. Mas também não tira.", proxima: "c6_17" },
    c6_6b_1: { quem: "takeo", texto: "Está catorze graus, SN.", proxima: "c6_6b_2" },
    c6_6b_2: { quem: "eu", texto: "Eu sinto calor fácil.", proxima: "c6_6b_3" },
    c6_6b_3: { tipo: "narracao", texto: "Ele olha para ela. Ela está vermelha. Ele percebe. Ele sorri, devagar, sem dizer nada. Ele não precisa.", proxima: "c6_17" },
    c6_6c_1: { quem: "takeo", texto: "Porque eu fiquei. Quando o Victor te levou pro fliperama. Eu fiquei o sábado inteiro com ciúme. Eu pintei uma placa inteira de raiva. Ficou bonita, inclusive.", proxima: "c6_6c_2" },
    c6_6c_2: { quem: "takeo", texto: "Então eu queria saber se era só eu.", proxima: "c6_6c_3" },
    c6_6c_3: { tipo: "narracao", texto: "Ela não responde. Ele não insiste. Mas ela também não diz que era só ele.", proxima: "c6_17" },

    // (todas as opções continuam aqui)
    c6_17: { tipo: "narracao", sprite: null, texto: "No portão da casa dela, ele para. Fica um tempo mexendo na alça da mochila.", proxima: "c6_18" },
    c6_18: { quem: "takeo", sprite: "takeo", texto: "Se a Reina me chamar pra sair, eu vou dizer que não posso. Que eu tenho física. Com você. Mesmo que não seja verdade.", proxima: "c6_19" },
    c6_19: { quem: "eu", texto: "Takeo, você não precisa...", proxima: "c6_20" },
    c6_20: { quem: "takeo", texto: "Eu sei que não preciso. Eu quero.", proxima: "c6_21" },
    c6_21: { tipo: "narracao", texto: "Ele vai embora antes que ela consiga responder. Andando de costas, acenando, até quase bater num poste.", proxima: "c7_01" },

    /* =================== CENA 7 — LONGE =================== */
    // Cenário: rua do bairro, noite (usa "saida-colegio"). Música: piano baixo, frio.
    c7_01: { tipo: "narracao", cenario: "rua-padaria-noite", transicao: "tempo", legenda: "Cena 7 — Longe", sprite: null, texto: "À noite, a SN desce até a padaria da esquina para comprar pão. A mãe pediu por mensagem, do plantão. Ela olha para os dois lados da rua antes de sair do portão.", proxima: "c7_02" },
    c7_02: { tipo: "narracao", sprite: "kaito", texto: "Na frente da padaria, encostado no poste, de jaqueta e capuz, está o Kaito. Como se estivesse esperando alguém. Como se não estivesse esperando ninguém.", proxima: "c7_03" },
    c7_03: { quem: "eu", texto: "Você está vigiando minha rua?", proxima: "c7_04" },
    c7_04: { quem: "kaito", texto: "Eu estou comprando pão.", proxima: "c7_05" },
    c7_05: { quem: "eu", texto: "Sem nada na mão?", proxima: "c7_06" },
    c7_06: { quem: "kaito", texto: "Eu ainda não comprei. Estou decidindo qual.", proxima: "c7_07" },
    c7_07: { tipo: "narracao", texto: "Ela entra na padaria. Ele entra atrás. Ela compra o pão. Ele compra um sonho de creme, olhando para o sonho como se tivesse sido obrigado.", proxima: "c7_08" },
    c7_08: { tipo: "narracao", texto: "Na calçada, ele fica um tempo em silêncio. Depois fala, olhando para o sonho.", proxima: "c7_09" },
    c7_09: { quem: "kaito", texto: "Eu vi a página.", proxima: "c7_10" },
    c7_10: { quem: "kaito", texto: "Tem uma foto sua comigo. No seu portão. De noite. A legenda diz que você vai ser “a próxima namorada do líder da gangue que vai sair machucada”.", proxima: "c7_11" },
    c7_11: { tipo: "narracao", texto: "A voz dele não muda. Mas a mão que segura o saquinho do sonho está tremendo um pouco.", proxima: "c7_12" },
    c7_12: { quem: "kaito", texto: "Quem escreveu isso sabe o que está fazendo. Todo mundo que chega perto da gangue acaba machucado. O Takeo. A Mio. A Akane. Você, atrás do palco.", proxima: "c7_13" },
    c7_13: { quem: "kaito", texto: "Então é melhor você ficar longe. Da gangue. De mim.", proxima: "c7_14" },
    c7_14: { tipo: "narracao", texto: "Ele fala isso sem olhar para ela. Como quem lê uma frase que ensaiou muitas vezes no espelho.", proxima: "c7_15" },
    c7_15: { tipo: "pensamento", texto: "Ele não está bravo. Ele está com medo.", proxima: "c7_16" },
    c7_16: { tipo: "pensamento", texto: "O líder que não pede ajuda pra ninguém, que carrega todo mundo nas costas, está com medo de que eu me machuque só por estar perto dele.", proxima: "c7_esc7" },

    // ▶ ESCOLHA 7 — “Fica longe de mim.”
    c7_esc7: { escolhas: [
      { texto: "A. “Não.” E ficar ali, na frente dele, sem se mexer.", proxima: "c7_7a_1", pontos: { kaito: 3 }, flags: ["SN_ficou_Kaito"] },
      { texto: "B. “Quem decide de quem eu fico perto sou eu, Kaito. Não você. Não uma página de fofoca.”", proxima: "c7_7b_1", pontos: { kaito: 2, desvio: 1 }, flags: ["SN_decide_Kaito"] },
      { texto: "C. “Tá bom.” E ir embora, magoada, sem olhar pra trás.", proxima: "c7_7c_1", pontos: { kaito: 1 }, flags: ["SN_magoada_Kaito"] }
    ]},
    c7_7a_1: { tipo: "narracao", texto: "Ele levanta os olhos. Pela primeira vez na conversa. Ela continua ali, parada, segurando o pão.", proxima: "c7_7a_2" },
    c7_7a_2: { quem: "kaito", texto: "SN...", proxima: "c7_7a_3" },
    c7_7a_3: { quem: "eu", texto: "Eu segurei uma viga por um garoto da gangue. Eu segurei uma faca por outro. Eu não vou sair correndo por causa de uma legenda.", proxima: "c7_7a_4" },
    c7_7a_4: { tipo: "narracao", texto: "O Kaito fica olhando para ela por muito tempo. Depois olha para o chão. E dá uma risada curta, cansada, sem nenhuma graça.", proxima: "c7_7a_5" },
    c7_7a_5: { quem: "kaito", texto: "Você é a pessoa mais teimosa que eu já conheci.", proxima: "c7_7a_6" },
    c7_7a_6: { quem: "eu", texto: "Você lembrou de mim por onze anos. Você já sabia.", proxima: "c7_17" },
    c7_7b_1: { quem: "kaito", texto: "Você não entende. Quem quer acertar a gente não vai atrás da gente. Vai atrás de quem está perto. Eu já vi isso acontecer.", proxima: "c7_7b_2" },
    c7_7b_2: { quem: "eu", texto: "Eu entendo melhor do que você imagina. E eu não vou deixar ninguém decidir quem fica do meu lado. Nem eles. Nem você.", proxima: "c7_7b_3" },
    c7_7b_3: { tipo: "narracao", texto: "O Kaito abre a boca. Fecha. Não tem resposta para isso.", proxima: "c7_17" },
    c7_7c_1: { tipo: "narracao", texto: "Ela vira e vai embora. Três passos. Quatro. Ela não olha para trás.", proxima: "c7_7c_2" },
    c7_7c_2: { tipo: "narracao", texto: "Por isso não vê o Kaito dar um passo atrás dela. E parar. E ficar parado na calçada, com o sonho de creme na mão, até ela entrar no portão de casa.", proxima: "c7_7c_3" },
    c7_7c_3: { tipo: "narracao", texto: "Ele não vai embora. Ele fica ali mais uns dez minutos. Só olhando para a janela dela, até a luz do quarto acender.", proxima: "c7_17" },

    // (todas as opções continuam aqui)
    c7_17: { tipo: "narracao", sprite: "kaito", texto: "Antes de ir, o Kaito estende o saquinho com o sonho de creme. Sem olhar.", proxima: "c7_18" },
    c7_18: { quem: "kaito", texto: "Toma. Eu não gosto de sonho.", proxima: "c7_19" },
    c7_19: { quem: "eu", texto: "Então por que você comprou?", proxima: "c7_20" },
    c7_20: { tipo: "narracao", texto: "Ele não responde. Coloca o saquinho na mão dela, enfia as mãos nos bolsos da jaqueta e vai embora.", proxima: "c7_21" },
    c7_21: { tipo: "pensamento", texto: "Sonho de creme. O que eu comia toda sexta no intervalo, no primeiro ano. Sozinha. No fundo da cantina.", proxima: "c7_22" },
    c7_22: { tipo: "pensamento", texto: "Como ele sabe disso?", proxima: "ep_01" },

    /* =================== EPÍLOGO — A PISTA =================== */
    // Cenário: quarto da SN, noite. Música: piano grave.
    ep_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Epílogo — A pista", sprite: null, texto: "No quarto, ela come o sonho de creme sentada na cama, com o caderno azul aberto do lado. Está gostoso. Ela não admitiria isso para ele nem sob tortura.", proxima: "ep_02" },
    ep_02: { tipo: "narracao", texto: "O celular vibra. Uma foto do Caramelo de óculos escuros, deitado na caminha nova, com uma legenda.", proxima: "ep_03" },
    ep_03: { quem: "mensagem", rotulo: "Victor 😏", texto: "ouvi falar da página. quem foi? eu e o caramelo vamos quebrar o nariz de alguém. ele morde, eu soco. trabalho em equipe", proxima: "ep_04" },
    ep_04: { tipo: "narracao", texto: "Ela ri. Pela primeira vez no dia. Responde que ainda não é hora de quebrar nariz nenhum. O Victor manda um áudio do Caramelo latindo, indignado.", proxima: "ep_05" },
    ep_05: { tipo: "narracao", texto: "Depois ela abre o caderno.", proxima: "ep_06" },
    ep_06: { tipo: "narracao", texto: "33. A Reina e a Akane estão na nossa turma. A Reina vai chamar o Takeo pra sair. Eu estou com ciúme. Pronto. Escrevi.", proxima: "ep_07" },
    ep_07: { tipo: "narracao", texto: "34. A Sayuri já foi amiga da gangue. Ela e o Blake tiveram alguma coisa. Ela mudou no começo do ano. Ninguém sabe por quê.", proxima: "ep_08" },
    ep_08: { tipo: "narracao", texto: "35. A Sayuri tira as fotos. A Sayuri posta. A escola inteira acredita.", proxima: "ep_09" },
    ep_09: { tipo: "narracao", texto: "36. O Kaito me mandou ficar longe. E depois me deu um sonho de creme.", proxima: "ep_10" },
    ep_10: { tipo: "narracao", texto: "Ela para. Olha para a linha 35 de novo.", proxima: "ep_11" },
    ep_11: { tipo: "pensamento", texto: "Hoje, no banheiro, eu coloquei os pés em cima da tampa do vaso sem nem perceber. Como se meu corpo tivesse lembrado sozinho.", proxima: "ep_12" },
    ep_12: { tipo: "pensamento", texto: "Eu posso segurar uma viga. Mas eu não sei segurar a escola inteira olhando pra mim.", proxima: "ep_13" },
    ep_13: { tipo: "narracao", texto: "Ela fecha o caderno. Lembra de uma coisa que viu no fim da tarde, sem prestar atenção, e que só agora volta para a cabeça.", proxima: "ep_14" },
    ep_14: { tipo: "narracao", cenario: "laboratorio", efeito: "flashback", texto: "Na porta do laboratório de biologia, a professora pregou um aviso: “Limpeza do aquário grande na quarta-feira. Precisamos de voluntários para carregar os baldes.” Embaixo, uma lista com um nome só, escrito com caneta rosa, letra cheia de bolinhas.", proxima: "ep_15" },
    ep_15: { tipo: "pensamento", texto: "A Sayuri nunca se ofereceu pra nada na vida. Muito menos pra carregar balde de água suja.", proxima: "ep_16" },
    ep_16: { tipo: "narracao", cenario: "quarto-sn", texto: "Ela tenta entender. Não consegue. Tenta de novo. Não consegue de novo.", proxima: "ep_17" },
    ep_17: { tipo: "narracao", texto: "Nenhuma visão vem. Nenhum aviso. Só a lembrança daquele nome em caneta rosa.", proxima: "ep_18" },
    ep_18: { tipo: "pensamento", texto: "A única visão que eu tive foi de alguém morrendo. Hoje não veio nenhuma.", proxima: "ep_19" },
    ep_19: { tipo: "pensamento", texto: "Então talvez ninguém se machuque amanhã. Não do jeito que dá pra ver.", proxima: "ep_20" },
    ep_20: { tipo: "pensamento", texto: "Tem coisas que machucam sem deixar marca nenhuma.", proxima: "ep_fim" },

    // Fim do Capítulo 10 (crie a entrada "capitulo10" em dados/capitulos.js)
    ep_fim: { fim: "capitulo10" }
  }
});

/*
 * GANCHO PARA O CAPÍTULO 11 (anotações do roteiro)
 *  • Quarta-feira: o dia da água de peixe podre. A água do aquário do laboratório de biologia
 *    é jogada na SN. Ela fica com um cheiro horrível. Ganha apelidos cruéis. E o bullying não
 *    vem só da Sayuri e das amigas: vem de muita gente da escola, que entra na onda.
 *    A SN lembra do passado e fica insegura. A força não ajuda contra isso.
 *  • A SN não fala o apelido antigo. Só os vilões e a escola usam apelidos contra ela.
 *  • A Reina vai chamar o Takeo pra sair (o Takeo disse que vai dizer que tem física com a SN).
 *  • Por que a Sayuri mudou no começo do ano? (Mais tarde: ligação com o Ren.)
 *  • O Ren está sumido. Quando voltar, volta com um plano grande, no nível do Kisaki.
 *  • O Kaito pediu pra SN ficar longe, por medo. Como ele sabe do sonho de creme?
 *  • Blake: foi atrás da Mio? (Blake_atras_Mio) Ou ficou sabendo de quem a SN realmente é (SN_cobrou_Blake)?
 *
 * ESCOLHAS DO CAPÍTULO (7)
 *  1 O Caramelo na escola · 2 A caixinha da Reina · 3 Banheiro · 4 Blake e a Sayuri
 *  5 Reina no terraço · 6 Takeo (“ficou com ciúme?”) · 7 Kaito (“fica longe de mim”)
 *
 * FLAGS NOVAS
 *  Escondeu_Caramelo · Assumiu_Caramelo · SN_fingiu_ciume
 *  SN_encarou_Reina · SN_apontou_Akane · Saiu_do_banheiro · Chamou_amigas_banheiro
 *  Ficou_no_banheiro · SN_cobrou_Blake · Blake_atras_Mio · Perguntou_passado_Sayuri · SN_desculpa_pra_mim
 *  SN_deixou_Reina · SN_firme_Takeo · SN_agradeceu_Reina · SN_admitiu_ciume_Takeo
 *  SN_negou_ciume_Takeo · SN_devolveu_Takeo · SN_ficou_Kaito · SN_decide_Kaito · SN_magoada_Kaito
 */