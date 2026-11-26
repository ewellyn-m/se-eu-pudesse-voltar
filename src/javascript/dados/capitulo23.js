/*
 * =====================================================================
 *  CAPÍTULO 23 — Bate na janela
 *  Terça e quarta-feira, depois do Capítulo 22.
 * =====================================================================
 *
 *  O QUE ACONTECE
 *    • Terça: o Kaito busca a SN às sete, de moto, como disse. Na escola, o Takeo depois do balanço:
 *      normal, direto, sem drama.
 *    • Quarta à noite: o Kaito está nas entregas da lojinha. A SN desce sozinha para comprar pão.
 *      O carro preto está lá. Ela não foge. Ela vai até ele e bate na janela.
 *    • Dentro: dois valentões de terno, estilo dorama, só ligam pra dinheiro. O patrão não tem nome.
 *      Ela deixa claro que isso acabou. Eles vão embora.
 *    • Ela ouve um pedaço da ligação: "Ela veio sozinha. Não, senhor. Ela não teve medo."
 *      No painel do carro, um peão preto de plástico.
 *    • Quinta de manhã: contar ou não para o Kaito.
 *
 *  TOM
 *    • Nada de nhenhenhém. A SN é direta, firme, um pouco debochada. Não se lamenta.
 *    • O Ren não aparece. Só capangas.
 *    • Nada de gangue dentro da escola. Ninguém fala o apelido antigo.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Kaito, Takeo, Mio, Hana. Sem nome: Homem de terno (o motorista), Outro homem de terno,
 *    Moço da padaria.
 *
 *  CENÁRIOS
 *    Rua do prédio da SN → "frente-casa-sn" (à noite: "frente-casa-sn-noite") · Padaria → "rua-padaria-noite" · Sala de aula → "sala-de-aula"
 *    Quarto da SN → "quarto-sn" (à noite: "quarto-sn-noite")
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Takeo_tempo, Takeo_eu_sei, Beijo_bochecha_Takeo, Anotou_placa, Foi_junto_carro.
 *
 *  Crie a entrada "capitulo23" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo23", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — SETE EM PONTO =================== */
    // Cenário: rua do prédio da SN, terça, 7h (usa "saida-colegio"). Música: rock leve.
    c1_01: { roupa: null, tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", legenda: "Terça, 6h59 — Cena 1", sprite: null, texto: "Terça. Seis e cinquenta e nove. Ela desce com o capacete vermelho-escuro embaixo do braço, achando que vai ter que esperar.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", sprite: "kaito", texto: "Não vai. O Kaito já está lá. Encostado na moto, comendo um pão de queijo. Pelo número de migalhas no banco, ele chegou faz uns quinze minutos.", proxima: "c1_03" },
    c1_03: { quem: "eu", texto: "Você disse sete.", proxima: "c1_04" },
    c1_04: { quem: "kaito", texto: "Eu disse que te buscava às sete. Não disse que chegava às sete.", proxima: "c1_05" },
    c1_05: { tipo: "narracao", texto: "Ele olha para o fim da rua. Para o lugar onde o carro estava ontem. Vazio. Depois olha para ela. Estende um pão de queijo. Ela pega.", proxima: "c1_06" },
    c1_06: { quem: "kaito", texto: "Passei aqui ontem à noite de novo. Duas vezes. Nada.", proxima: "c1_07" },
    c1_07: { quem: "eu", texto: "Você vai virar segurança do meu prédio?", proxima: "c1_08" },
    c1_08: { quem: "kaito", texto: "Se precisar.", proxima: "c1_09" },
    c1_09: { quem: "eu", texto: "Não precisa. Mas o pão de queijo pode continuar.", proxima: "c1_10" },
    c1_10: { tipo: "narracao", sprite: null, texto: "Ele ri pelo nariz. Ela sobe na garupa. A moto ronca. A rua inteira acorda.", proxima: "c2_01" },

    /* =================== CENA 2 — DEPOIS DO BALANÇO =================== */
    // Cenário: sala de aula, terça. Música: violão leve.
    c2_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Cena 2 — Depois do balanço", sprite: "takeo", texto: "Na sala, o Takeo já está sentado. A carteira dele continua colada na dela. Quando ela senta, ele empurra um caderno para o lado dela. A matéria de ontem. Copiada duas vezes. A primeira ficou feia.", proxima: "c2_cam1" },
    c2_cam1: { caminhos: [
      { flag: "Beijo_bochecha_Takeo", proxima: "c2_beijo" },
      { flag: "Takeo_eu_sei", proxima: "c2_eusei" }
    ], proxima: "c2_tempo" },
    c2_beijo: { quem: "takeo", texto: "Bom dia. Eu não vou falar da bochecha. Eu prometi pra mim mesmo que não ia falar da bochecha. ...Bom dia.", proxima: "c2_02" },
    c2_eusei: { quem: "takeo", texto: "Bom dia. Hoje eu estou de uma cor só. Conferi no espelho.", proxima: "c2_02" },
    c2_tempo: { quem: "takeo", texto: "Bom dia. Não é pressão. É só bom dia. Um bom dia normal, de amigo, sem nenhum significado escondido.", proxima: "c2_02" },
    c2_02: { quem: "eu", texto: "Bom dia, Takeo.", proxima: "c2_03" },
    c2_03: { tipo: "narracao", texto: "Ele sorri. E volta a copiar a matéria. Sem olhar para ela a cada cinco segundos. Sem esperar nada. Ele falou o que tinha pra falar e agora está tranquilo. É a pessoa mais tranquila da sala.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", sprite: "mio", texto: "No intervalo, a Mio se joga na cadeira da frente, virada ao contrário.", proxima: "c2_05" },
    c2_05: { quem: "mio", texto: "Você chegou de moto. COM O KAITO. A escola inteira viu. Tem uma menina do segundo ano que chorou no banheiro.", proxima: "c2_06" },
    c2_06: { quem: "eu", texto: "Ninguém chorou no banheiro.", proxima: "c2_07" },
    c2_07: { quem: "hana", sprite: "hana", texto: "Uma chorou. Mas eu acho que foi por causa da prova de química.", proxima: "c2_08" },
    c2_08: { quem: "mio", sprite: "mio", texto: "E ontem você estava no balanço com o Takeo. Eu sei. A avó dele contou pra minha mãe na feira. Você está vivendo uma novela e não me conta os capítulos.", proxima: "c2_esc1" },

    // ▶ ESCOLHA 1 — A Mio quer saber
    c2_esc1: { escolhas: [
      { texto: "A. “O Kaito me dá carona porque é caminho.”", proxima: "c2_1a_1", pontos: { mio: 1 }, flags: ["Mio_caminho"] },
      { texto: "B. “Sábado eu te conto tudo. Hoje não.”", proxima: "c2_1b_1", pontos: { mio: 2 }, flags: ["Mio_sabado_conta"] },
      { texto: "C. “E você? Vai falar com o Blake ou vai esperar ele adivinhar?”", proxima: "c2_1c_1", pontos: { mio: 2 }, flags: ["Mio_Blake_falar"] }
    ]},
    c2_1a_1: { quem: "hana", sprite: "hana", texto: "A sua casa fica na direção oposta da casa dele. Eu fiz o mapa.", proxima: "c2_1a_2" },
    c2_1a_2: { quem: "eu", texto: "Hana, por que você fez um mapa?", proxima: "c2_1a_3" },
    c2_1a_3: { quem: "hana", texto: "Pra esse momento.", proxima: "c2_09" },
    c2_1b_1: { quem: "mio", sprite: "mio", texto: "Sábado. Com detalhes. Com gestos. Se você pular uma parte, eu percebo.", proxima: "c2_09" },
    c2_1c_1: { tipo: "narracao", sprite: "mio", texto: "A Mio abre a boca. Fecha. Fica vermelha.", proxima: "c2_1c_2" },
    c2_1c_2: { quem: "mio", texto: "...Isso foi golpe baixo.", proxima: "c2_1c_3" },
    c2_1c_3: { quem: "eu", texto: "Foi. Pensa nisso.", proxima: "c2_1c_4" },
    c2_1c_4: { tipo: "narracao", texto: "A Mio não responde. Mas, pelo resto do intervalo, ela fica olhando pela janela, para o banco onde o Blake está sentado com o Kaito.", proxima: "c2_09" },

    // (todas as opções continuam aqui)
    c2_09: { tipo: "narracao", sprite: null, texto: "O dia passa normal. Prova de química. Chuva fina no fim da tarde. O Kaito leva ela em casa de moto. Na rua do prédio, nenhum carro preto.", proxima: "c3_01" },

    /* =================== CENA 3 — PÃO DAS NOVE =================== */
    // Cenário: rua do prédio da SN, quarta à noite (usa "saida-colegio"). Música: baixo grave, tenso.
    c3_01: { tipo: "narracao", cenario: "frente-casa-sn-noite", transicao: "tempo", legenda: "Quarta, 21h04 — Cena 3", sprite: null, texto: "Quarta. Nove da noite. A mãe está de plantão. O Kaito está nas entregas da lojinha até as onze. A geladeira tem meio limão e um pote de geleia. Ela pega a carteira e desce para comprar pão.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "Na porta do prédio, ela para.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", texto: "Do outro lado da rua, embaixo da árvore, onde a luz do poste não chega direito. O carro preto. Motor desligado. Vidros escuros. Parado.", proxima: "c3_cam1" },
    c3_cam1: { caminhos: [
      { flag: "Anotou_placa", proxima: "c3_placa" }
    ], proxima: "c3_04" },
    c3_placa: { tipo: "narracao", texto: "Ela tira o celular do bolso. Confere a placa anotada na praça. Três letras, quatro números. Igual.", proxima: "c3_04" },
    c3_04: { tipo: "pensamento", texto: "Uma vez na praça. Uma vez aqui com o Kaito. E agora de novo. Com ele longe.", proxima: "c3_05" },
    c3_05: { tipo: "pensamento", texto: "Não. Chega. Isso acabou hoje.", proxima: "c3_06" },
    c3_06: { tipo: "narracao", texto: "Ela guarda o celular. Atravessa a rua. Sem pressa e sem desviar. Chinelo, moletom, carteira na mão. Como quem vai comprar pão.", proxima: "c3_esc2" },

    // ▶ ESCOLHA 2 — Chegando no carro
    c3_esc2: { escolhas: [
      { texto: "A. Bater no vidro do motorista. Três vezes. Educada.", proxima: "c3_2a_1", flags: ["Bateu_vidro"] },
      { texto: "B. Abrir a porta do motorista ela mesma. Está trancada. Ela abre mesmo assim.", proxima: "c3_2b_1", flags: ["Abriu_porta_carro"], pontos: { desvio: 1 } },
      { texto: "C. Parar na frente do carro, encostada no capô, de braços cruzados. E esperar.", proxima: "c3_2c_1", flags: ["Capo_carro"] }
    ]},
    c3_2a_1: { tipo: "narracao", texto: "Toc. Toc. Toc. Nada. Ela bate de novo. Mais forte. O vidro range. Ela vê, pelo reflexo, a própria mão quase rachando o vidro. Ela para a tempo.", proxima: "c3_2a_2" },
    c3_2a_2: { tipo: "narracao", texto: "O vidro desce. Até a metade.", proxima: "c3_07" },
    c3_2b_1: { tipo: "narracao", texto: "Ela puxa a maçaneta. Trancada. Ela puxa de novo. Um estalo de metal. A trava solta por dentro. A porta abre.", proxima: "c3_2b_2" },
    c3_2b_2: { tipo: "narracao", texto: "O homem no banco do motorista se encolhe contra o banco do passageiro como se a porta tivesse aberto sozinha. Ele olha para a maçaneta. Ela está torta.", proxima: "c3_07" },
    c3_2c_1: { tipo: "narracao", texto: "Ela encosta no capô. Cruza os braços. Fica olhando para o para-brisa escuro. Um minuto. Dois.", proxima: "c3_2c_2" },
    c3_2c_2: { tipo: "narracao", texto: "O motor liga. O farol acende na cara dela. Ela não se mexe. O carro anda dez centímetros. Encosta na perna dela. Ela não se mexe. O carro para. O motor desliga. O vidro do motorista desce.", proxima: "c3_07" },

    // (todas as opções continuam aqui)
    c3_07: { tipo: "narracao", texto: "Dois homens. Terno preto apertado demais, cabelo lambido de gel, corrente de ouro aparecendo na gola. O do volante tem uma cicatriz na sobrancelha e masca chiclete de boca aberta. O do lado tem um anel em cada dedo e já está rindo.", proxima: "c3_08" },
    c3_08: { quem: "desconhecido", rotulo: "Homem de terno", texto: "Olha só. A princesinha veio entregar a janela pessoalmente.", proxima: "c3_09" },
    c3_09: { quem: "eu", texto: "Boa noite. Vocês vão querer pão? Eu estou indo na padaria. Já que vocês moram aqui na minha rua agora.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", texto: "O do anel ri alto, batendo no painel. O da cicatriz não ri. Só masca o chiclete mais devagar, olhando ela de cima a baixo.", proxima: "c3_11" },
    c3_11: { quem: "desconhecido", rotulo: "Homem de terno", texto: "Volta pra casa, princesinha. Vai comprar seu pãozinho. A gente está trabalhando.", proxima: "c3_12" },
    c3_12: { quem: "eu", texto: "Trabalhando de quê? Olhando a minha janela?", proxima: "c3_13" },
    c3_13: { quem: "desconhecido", rotulo: "Homem de terno", texto: "A gente olha, anota e recebe no fim do mês. Simples. Ninguém paga a gente pra bater papo com criança.", proxima: "c3_14" },
    c3_14: { quem: "eu", texto: "Ordem de quem?", proxima: "c3_15" },
    c3_15: { quem: "desconhecido", rotulo: "Homem de terno", texto: "Do patrão. Que paga bem. Muito bem.", proxima: "c3_16" },
    c3_16: { quem: "eu", texto: "E o patrão tem nome?", proxima: "c3_17" },
    c3_17: { quem: "desconhecido", rotulo: "Outro homem de terno", texto: "Tem. Mas nome custa mais caro. Você tem dinheiro, princesinha? Não tem, né? Então tchau.", proxima: "c3_18" },
    c3_18: { tipo: "narracao", texto: "Ele estala os dedos cheios de anel, um por um. Os dois se acham os donos da rua. Do bairro. Do mundo.", proxima: "c3_19" },
    c3_19: { quem: "eu", texto: "É o mesmo patrão que empresta dinheiro pro pai de uma menina da minha escola? A do laço rosa?", proxima: "c3_20" },
    c3_20: { tipo: "narracao", texto: "O sorriso do anel some. Por meio segundo. O da cicatriz para de mascar.", proxima: "c3_21" },
    c3_21: { tipo: "pensamento", texto: "Acertei.", proxima: "c3_22" },
    c3_22: { quem: "desconhecido", rotulo: "Homem de terno", texto: "Escuta aqui. Você não sabe com quem está mexendo. Volta pra casa agora, antes que a gente desça desse carro.", proxima: "c3_22b" },
    c3_22b: { tipo: "narracao", texto: "Ela não se mexe. Ele cospe o chiclete pela janela. Abre a porta. Desce. É grande. Bem maior que ela. Para na frente dela estalando o pescoço, igual valentão de novela. O do anel desce do outro lado e dá a volta no carro, rindo.", proxima: "c3_23" },
    c3_23: { quem: "eu", texto: "Desce. Eu espero.", proxima: "c3_23b" },
    // ▶ ESCOLHA 3 — O recado
    c3_23b: { tipo: "narracao", texto: "O da cicatriz encosta o dedo no ombro dela. E empurra. Como quem empurra uma criança pra fora do caminho.", proxima: "c3_23c" },
    c3_23c: { tipo: "narracao", texto: "O ombro dela não vai para trás. Nem um centímetro. O dedo dele é que dobra.", proxima: "c3_23d" },
    c3_23d: { tipo: "narracao", texto: "Ele olha para o próprio dedo. Empurra de novo. Com a mão inteira. Mesma coisa. É como empurrar um poste.", proxima: "c3_esc3" },
    c3_esc3: { escolhas: [
      { texto: "A. Apoiar a mão no teto do carro. Até o teto afundar um pouco. “Fala pro seu patrão que se ele quiser alguma coisa, vem pedir pessoalmente.”", proxima: "c3_3a_1", pontos: { desvio: 2 }, flags: ["Amassou_teto"] },
      { texto: "B. Segurar o pulso dele, que ainda está no ombro dela. E apertar. Só um pouco.", proxima: "c3_3b_1", pontos: { desvio: 2 }, flags: ["Apertou_pulso_capanga"] },
      { texto: "C. Segurar o retrovisor. E dobrar ele pra dentro, devagar, até encostar no vidro. “Esse aqui não precisa mais olhar pra minha janela.”", proxima: "c3_3c_1", pontos: { desvio: 2 }, flags: ["Dobrou_retrovisor"] }
    ]},
    c3_3a_1: { tipo: "narracao", efeito: "tremor", texto: "Ela vira as costas para ele como se ele não existisse. Apoia a mão no teto do carro. Só apoia. O metal faz um barulho fundo. Uma marca da palma dela fica no teto, afundada, com os cinco dedos.", proxima: "c3_3a_2" },
    c3_3a_2: { tipo: "narracao", texto: "O do anel para de rir. Olha para a marca. Olha para ela. Dá um passo para trás e bate as costas no poste. O da cicatriz fica pálido embaixo do gel.", proxima: "c3_3a_3" },
    c3_3a_3: { quem: "eu", texto: "Fala pro seu patrão que se ele quiser alguma coisa, ele vem pedir. Pessoalmente. Sem carro, sem terno, sem menina de laço rosa no meio.", proxima: "c3_24" },
    c3_3b_1: { tipo: "narracao", efeito: "tremor", texto: "Ela segura o pulso dele. Devagar. E aperta. Os ossos estalam. Não quebram. Só estalam. O homem cai de joelhos na calçada, com a boca aberta, sem conseguir gritar.", proxima: "c3_3b_2" },
    c3_3b_2: { quem: "eu", texto: "Isso é eu apertando pouco.", proxima: "c3_3b_3" },
    c3_3b_3: { quem: "desconhecido", rotulo: "Outro homem de terno", texto: "Larga ele! Larga ele, sua...!", proxima: "c3_3b_4" },
    c3_3b_4: { tipo: "narracao", texto: "Ela olha para o do anel. Só olha. Ele para no meio da frase. E no meio do passo.", proxima: "c3_3b_5" },
    c3_3b_5: { tipo: "narracao", texto: "Ela solta. O da cicatriz segura o próprio pulso contra o peito, ainda de joelhos, olhando para ela como quem viu um bicho que não existe.", proxima: "c3_24" },
    c3_3c_1: { tipo: "narracao", texto: "Ela passa por ele como se ele fosse uma placa. Segura o retrovisor do lado do motorista. E dobra. Devagar. O plástico estala. O metal geme. O espelho encosta no vidro, virado para dentro.", proxima: "c3_3c_2" },
    c3_3c_2: { quem: "eu", texto: "Esse aqui não precisa mais olhar pra minha janela. Agora ele olha pra você.", proxima: "c3_3c_3" },
    c3_3c_3: { tipo: "narracao", texto: "O da cicatriz olha para o retrovisor torto. Para as próprias mãos. Para ela. Ele dá um passo para trás sem perceber. Depois outro.", proxima: "c3_24" },
    // (todas as opções continuam aqui)
    c3_24: { tipo: "narracao", texto: "Os dois correm para o carro. Não andam. Correm. O do anel pula no banco do passageiro sem fechar a porta direito. O da cicatriz erra a chave duas vezes antes de acertar.", proxima: "c3_25" },
    c3_25: { quem: "desconhecido", rotulo: "Homem de terno", texto: "Isso não está no contrato. Ninguém falou que ela era... isso.", proxima: "c3_26" },
    c3_26: { quem: "eu", texto: "Agora você sabe. Fala pro seu patrão. E fala que, se ele quiser alguma coisa, vem pedir pessoalmente.", proxima: "c3_27" },
    c3_27: { tipo: "narracao", texto: "Ela se afasta do carro. Um passo. O vidro começa a subir. E, antes de fechar, ela ouve o mais novo no celular, falando baixo, rápido.", proxima: "c3_28" },
    c3_28: { quem: "desconhecido", rotulo: "Outro homem de terno", texto: "...ela veio sozinha. Não, senhor. Ela não teve medo. A gente que teve. ...Não, senhor, não é pelo dinheiro. Não tem dinheiro que pague isso.", proxima: "c3_29" },
    c3_29: { tipo: "narracao", texto: "O vidro fecha. Mas, no último segundo, a luz do poste bate no painel do carro. E ela vê. Encaixado na saída do ar-condicionado, como enfeite, um peão preto de plástico. Com uma lasca na base.", proxima: "c3_30" },
    c3_30: { tipo: "pensamento", texto: "Igual ao da minha gaveta.", proxima: "c3_31" },
    c3_31: { tipo: "narracao", texto: "O carro sai cantando pneu. Sobe a calçada na esquina. Some.", proxima: "c3_32" },
    c3_32: { tipo: "narracao", cenario: "rua-padaria-noite", transicao: "tempo", texto: "Ela fica parada no meio da rua. Respira uma vez. Depois atravessa para a calçada e vai para a padaria. Porque ainda não tem pão em casa.", proxima: "c3_33" },
    c3_33: { quem: "desconhecido", rotulo: "Moço da padaria", texto: "Seis pãezinhos? A essa hora? Você está bem? Tá com uma cara de quem acabou de brigar com alguém.", proxima: "c3_34" },
    c3_34: { quem: "eu", texto: "Brigar não. Conversar. Oito pãezinhos, por favor. Fiquei com fome.", proxima: "c4_01" },

    /* =================== CENA 4 — CONTAR OU NÃO =================== */
    // Cenário: quarto da SN (noite) e rua do prédio (quinta, 6h55). Música: piano, depois rock leve.
    c4_01: { tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quarta, 22h", sprite: null, texto: "No quarto, ela abre a gaveta da escrivaninha. Tira o peão preto que o Ren deixou cair na poça da fábrica. Lasca na base. Igual ao do carro.", proxima: "c4_02" },
    c4_02: { tipo: "pensamento", texto: "Ele não estava lá. Ele nunca está. Ele manda o carro, manda o terno, manda a Sayuri. E coloca uma peça no painel pra quem souber olhar.", proxima: "c4_03" },
    c4_03: { tipo: "pensamento", texto: "Ótimo. Agora ele sabe que eu sei olhar. E sabe que eu não corro.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", texto: "Ela coloca o peão em cima da escrivaninha. Em pé. Virado para a janela. E vai dormir. Dorme bem.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", legenda: "Quinta, 6h55", sprite: "kaito", texto: "Quinta. O Kaito está na frente do prédio. Pão de queijo na mão. Ele está olhando para o chão, embaixo da árvore. Para as marcas de pneu na terra molhada. Ele sabe ler marca de pneu.", proxima: "c4_06" },
    c4_06: { quem: "kaito", texto: "Teve carro parado aqui ontem.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", texto: "Não é pergunta. Ele levanta os olhos para ela.", proxima: "c4_cam1" },
    c4_cam1: { caminhos: [
      { flag: "Foi_junto_carro", proxima: "c4_junto" }
    ], proxima: "c4_esc4" },
    c4_junto: { quem: "kaito", texto: "Segunda você foi junto comigo até o carro. Eu achei que você ia fazer isso de novo. Sozinha. Você fez, né?", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — Contar para o Kaito?
    c4_esc4: { escolhas: [
      { texto: "A. Contar tudo. O carro, os dois de terno, o patrão, o peão no painel.", proxima: "c4_4a_1", pontos: { kaito: 3 }, flags: ["Contou_carro_Kaito"] },
      { texto: "B. “Teve. Eu fui lá falar com eles. Eles foram embora. Não vão voltar tão cedo.” Só isso.", proxima: "c4_4b_1", pontos: { kaito: 2 }, flags: ["Contou_meio_Kaito"] },
      { texto: "C. “Teve? Eu não vi nada. Eu estava dormindo.”", proxima: "c4_4c_1", flags: ["Escondeu_carro_Kaito"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "Ela conta. Tudo. Do jeito que aconteceu, sem enfeite. O Kaito ouve sem interromper. O pão de queijo esfria na mão dele.", proxima: "c4_4a_2" },
    c4_4a_2: { tipo: "narracao", texto: "Quando ela fala do peão, ele para de respirar por um segundo. Ele estava na fábrica. Ele viu o Ren em cima do caminhão antes do cimento. Ele ouviu o Ren mandar recuar.", proxima: "c4_4a_3" },
    c4_4a_3: { quem: "kaito", texto: "...Ren.", proxima: "c4_4a_4" },
    c4_4a_4: { quem: "eu", texto: "Eu não tenho certeza.", proxima: "c4_4a_5" },
    c4_4a_5: { quem: "kaito", texto: "Eu tenho.", proxima: "c4_4a_6" },
    c4_4a_6: { tipo: "narracao", texto: "Ele não grita. Não xinga. Ele só fecha a mão em volta do pão de queijo até o pão de queijo virar uma bolinha. Depois respira. E olha para ela.", proxima: "c4_4a_7" },
    c4_4a_7: { quem: "kaito", texto: "Você foi sozinha até o carro. Sem me chamar. Eu falei pra você me chamar antes.", proxima: "c4_4a_8" },
    c4_4a_8: { quem: "eu", texto: "Você estava nas entregas. E eu só fui conversar.", proxima: "c4_4a_9" },
    c4_4a_9: { quem: "kaito", texto: "Você amassou alguma coisa conversando?", proxima: "c4_4a_10" },
    c4_4a_10: { quem: "eu", texto: "...Um pouco.", proxima: "c4_4a_11" },
    c4_4a_11: { tipo: "narracao", texto: "Ele olha para ela. E ri. Não consegue não rir. Passa a mão no rosto.", proxima: "c4_4a_12" },
    c4_4a_12: { quem: "kaito", texto: "Da próxima vez, me chama. Não pra me proteger. Eu quero ver a cara deles.", proxima: "c4_08" },
    c4_4b_1: { quem: "kaito", texto: "Você foi lá falar com eles.", proxima: "c4_4b_2" },
    c4_4b_2: { quem: "eu", texto: "Fui.", proxima: "c4_4b_3" },
    c4_4b_3: { quem: "kaito", texto: "Sozinha. De noite. Com um carro cheio de cara de terno.", proxima: "c4_4b_4" },
    c4_4b_4: { quem: "eu", texto: "E de chinelo. Eu estava indo comprar pão.", proxima: "c4_4b_5" },
    c4_4b_5: { tipo: "narracao", texto: "Ele fica olhando para ela. Ela segura o olhar. Ele sabe que tem mais. Ela sabe que ele sabe. Ele não pergunta. Ele sabe que ela conta quando quiser.", proxima: "c4_4b_6" },
    c4_4b_6: { quem: "kaito", texto: "Tá. Mas a partir de hoje eu passo aqui à noite também. Não discute.", proxima: "c4_4b_7" },
    c4_4b_7: { quem: "eu", texto: "Eu não ia discutir.", proxima: "c4_4b_8" },
    c4_4b_8: { quem: "kaito", texto: "Você sempre discute.", proxima: "c4_08" },
    c4_4c_1: { tipo: "narracao", texto: "O Kaito olha para as marcas de pneu. Para ela. Para os oito pãezinhos que ela está segurando num saco, embaixo do braço, porque sobrou de ontem.", proxima: "c4_4c_2" },
    c4_4c_2: { quem: "kaito", texto: "...Tá.", proxima: "c4_4c_3" },
    c4_4c_3: { tipo: "narracao", texto: "Ele não acredita. Ele não insiste. Mas, quando ela sobe na garupa, ele fala sem virar a cabeça.", proxima: "c4_4c_4" },
    c4_4c_4: { quem: "kaito", texto: "Quando você quiser contar, eu estou aqui. Às sete. Todo dia.", proxima: "c4_08" },

    // (todas as opções continuam aqui)
    c4_08: { tipo: "narracao", sprite: null, texto: "Ela sobe na garupa. A moto ronca. Na esquina, onde o carro preto costumava virar, o Kaito diminui. Olha para os dois lados. Depois acelera.", proxima: "c4_09" },
    c4_09: { tipo: "pensamento", texto: "Ele tem muitas peças. Eu sei. Mas peça nenhuma dele nunca bateu na janela de volta.", proxima: "c4_10" },
    c4_10: { tipo: "pensamento", texto: "Agora bateu.", proxima: "ep_fim" },

    // Fim do Capítulo 23 (crie a entrada "capitulo23" em dados/capitulos.js).
    ep_fim: { fim: "capitulo23" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 24 (anotações do roteiro)
 *  • A SN confrontou os capangas do carro preto. "Ela não teve medo. Nenhum." — o patrão recebeu o recado.
 *  • O mesmo patrão empresta dinheiro ao pai da Sayuri (os capangas confirmaram sem falar).
 *  • Peão preto no painel, igual ao da gaveta. A SN tem quase certeza que é o Ren.
 *  • O Kaito: sabe de tudo (Contou_carro_Kaito → ele disse "Ren"), sabe metade (Contou_meio_Kaito)
 *    ou desconfia (Escondeu_carro_Kaito). Ele passa a buscar ela de manhã e passar à noite.
 *  • A SN pode ter apertado o pulso de um capanga (Apertou_pulso_capanga), amassado o teto (Amassou_teto)
 *    ou dobrado o retrovisor (Dobrou_retrovisor).
 *  • O Ren ainda não aparece. Quando aparecer, vai ser porque decidiu responder.
 *
 * ESCOLHAS DO CAPÍTULO (4)
 *  1 A Mio quer saber · 2 Chegando no carro · 3 O recado · 4 Contar para o Kaito?
 *
 * FLAGS NOVAS
 *  Mio_caminho · Mio_sabado_conta · Mio_Blake_falar · Bateu_vidro · Abriu_porta_carro · Capo_carro
 *  Amassou_teto · Apertou_pulso_capanga · Dobrou_retrovisor · Contou_carro_Kaito · Contou_meio_Kaito
 *  Escondeu_carro_Kaito
 */