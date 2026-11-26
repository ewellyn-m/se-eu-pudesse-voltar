/*
 * =====================================================================
 *  CAPÍTULO 28 — Último andar
 *  Quinta e sexta-feira, depois do Capítulo 27.
 * =====================================================================
 *
 *  ROTAS: este capítulo usa a flag escolhida no Cap. 27
 *    (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Tem DOIS blocos de rota: "Rota — quinta" e "Rota — sexta". Só o menino da rota aparece neles.
 *    O resto do capítulo é igual para todo mundo.
 *
 *  O QUE ACONTECE
 *    • Quinta de manhã: a escola normal. Bloco de rota (quinta): um momento com o menino da rota.
 *      Ele percebe que a SN está diferente.
 *    • Quinta, 19h: a entrega para a Sayuri na frente da farmácia. A nova ordem chega:
 *      “Sexta, 19h. Último andar do estacionamento do shopping. Leva ela. Sozinha.
 *       Se ela não for, quem paga é a do caderno de gatinho.”
 *    • Sexta: a SN e a Sayuri fingem na escola. A Mio sem saber de nada. A Hana sabendo ou não.
 *      Bloco de rota (sexta): o menino da rota, e o que ele faz com o que ela contou (ou não contou).
 *    • Sexta, 18h58: o último andar. O carro preto. O de anel. E, encostado na grade,
 *      de uniforme, o Ren. “Boa noite.” (A conversa é no Cap. 29.)
 *
 *  TOM
 *    • Firme, sem nhenhenhém. Tensão crescendo. Humor nos momentos de escola.
 *    • Nada de gangue dentro da escola. O Ren quase não fala.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Sayuri, Hana, Mio, Reina, Kaito, Takeo, Blake, Ryuji, Victor, Ren (só no fim).
 *    Sem nome / rótulo: Homem de terno (o de anel), Avó do Takeo (mensagem), Mãe do Victor (mensagem).
 *
 *  CENÁRIOS
 *    Portão → "saida-colegio" · Sala → "sala-de-aula" · Corredor/banco → "corredor" · Biblioteca → "clube-leitura"
 *    Pátio/quadra → "patio-fundos" · Farmácia/padaria → "rua-padaria-noite"
 *    Entrada do shopping → "frente-shopping" · Último andar do estacionamento → "estacionamento-topo" (provisório)
 *    Quarto da SN → "quarto-sn-noite"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Rota_*, Plano_so_duas, Plano_com_Hana, Plano_lugar_entrega, Nome_locutora_Mio,
 *    Assento_balanco, Termina_frase_Blake, Gritou_Ryuji, Outro_jeito_Victor, Chave_Kaito.
 *
 *  Crie a entrada "capitulo28" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo28", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — QUINTA DE MANHÃ =================== */
    // Cenário: portão e sala de aula. Música: piano leve, com uma nota grave por baixo.
    c1_01: { roupa: null, tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Quinta, 7h05 — Cena 1", sprite: null, texto: "Quinta. O céu está limpo, azul demais, do jeito que fica depois de uma semana de chuva. A rua da escola está cheia de poça pequena que reflete o portão.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "Ela atravessa o portão com o capacete vermelho-escuro embaixo do braço. Três alunos do primeiro ano olham. Ela não liga mais. Já virou paisagem.", proxima: "c1_03" },
    c1_03: { tipo: "pensamento", texto: "Hoje à noite a Sayuri recebe a ordem nova. “O filho do patrão quer ver de perto.” E eu passo a manhã inteira tendo que fingir que o meu maior problema é a prova de biologia.", proxima: "c1_04" },
    c1_04: { tipo: "pensamento", texto: "Tudo bem. Eu fingi doze anos que eu era normal. Uma manhã eu aguento.", proxima: "c1_05" },
    c1_05: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", sprite: "mio", texto: "Na sala, a Mio está com um fone de ouvido enorme, cor-de-rosa, segurando uma escova de cabelo como microfone. Falando sozinha, com voz grave.", proxima: "c1_06" },
    c1_06: { quem: "mio", sprite: "mio", texto: "“Boa noite, ouvintes da madrugada. Aqui quem fala é...” Não. Muito sério. “Fala, galera insone!” Não. Muito animado. Ai. Eu preciso de um nome.", proxima: "c1_cam1" },
    c1_cam1: { caminhos: [
      { flag: "Nome_locutora_Mio", proxima: "c1_nome" }
    ], proxima: "c1_07" },
    c1_nome: { quem: "mio", sprite: "mio", texto: "Eu sei. Eu sei que é “Mio da Madrugada”. Eu já decidi. Eu só estou treinando o jeito de falar. O nome é seu. O jeito é meu.", proxima: "c1_07" },
    c1_07: { quem: "eu", texto: "Você está ensaiando programa de rádio às sete da manhã?", proxima: "c1_08" },
    c1_08: { quem: "mio", sprite: "mio", texto: "Locutora de madrugada tem que treinar de manhã. É o contrário. Igual vampiro.", proxima: "c1_09" },
    c1_09: { tipo: "narracao", sprite: "hana", texto: "A Hana chega. Senta. Abre o caderno de gatinho. E olha para a SN um segundo a mais do que o normal.", proxima: "c1_cam2" },
    c1_cam2: { caminhos: [
      { flag: "Plano_com_Hana", proxima: "c1_hana_sabe" }
    ], proxima: "c1_hana_nao" },
    c1_hana_sabe: { tipo: "narracao", texto: "Ontem à noite, a SN contou para ela. Tudo. O celular. A mochila. A coordenação. A Hana não chorou. Não gritou. Ela fez três perguntas e uma planilha.", proxima: "c1_hana_sabe2" },
    c1_hana_sabe2: { quem: "hana", sprite: "hana", texto: "Eu trouxe a mochila velha. A do primeiro ano. Vazia. Se alguém colocar alguma coisa nela, vai estar no lugar errado. A de verdade está no armário da biblioteca. Trancada.", proxima: "c1_hana_sabe3" },
    c1_hana_sabe3: { quem: "eu", texto: "Hana. Você é assustadora.", proxima: "c1_hana_sabe4" },
    c1_hana_sabe4: { quem: "hana", sprite: "hana", texto: "Eu sou organizada. As pessoas confundem.", proxima: "c1_10" },
    c1_hana_nao: { quem: "hana", sprite: "hana", texto: "Você está com cara de quem dormiu três horas e pensou muito. Na prova de biologia, se precisar, a resposta da questão quatro é “mitocôndria”. Todas as provas têm mitocôndria.", proxima: "c1_10" },
    c1_10: { tipo: "narracao", sprite: "ren", texto: "Na carteira perto da porta, o Ren. Uniforme impecável. Ele faz a prova de biologia em doze minutos. Entrega. Volta para a carteira. Abre um livro de xadrez. Não olha para ninguém.", proxima: "c1_11" },
    c1_11: { tipo: "pensamento", texto: "Quer ver de perto. Ele está a três carteiras de distância. Ele vê de perto todo dia. Então não é isso que ele quer. Ele quer outra coisa. Ele quer que eu vá até ele.", proxima: "c1_12" },
    c1_12: { tipo: "narracao", sprite: "sayuri", texto: "Do outro lado da sala, a Sayuri. Com o laço rosa. Ela faz a prova devagar. Na questão quatro, ela levanta os olhos. Olha para a SN. E escreve. Mitocôndria.", proxima: "c1_13" },
    c1_13: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", sprite: null, texto: "No intervalo, o pátio enche. E, no meio do barulho, a SN vê o {ROTA} antes que ele veja ela.", proxima: "r1_cam" },

    /* =================== ROTA — QUINTA =================== */
    r1_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "r1k_01" },
      { flag: "Rota_Takeo", proxima: "r1t_01" },
      { flag: "Rota_Blake", proxima: "r1b_01" },
      { flag: "Rota_Ryuji", proxima: "r1r_01" },
      { flag: "Rota_Victor", proxima: "r1v_01" }
    ], proxima: "r1k_01" },

    // ---------- Rota Kaito (quinta) ----------
    r1k_01: { tipo: "narracao", cenario: "corredor", sprite: "kaito", texto: "O Kaito está na janela do corredor. Igual à semana do balde. Encostado no parapeito, de braços cruzados. Quando ela passa, ele não olha. Mas fala.", proxima: "r1k_02" },
    r1k_02: { quem: "kaito", sprite: "kaito", texto: "Você está pensando alto.", proxima: "r1k_03" },
    r1k_03: { quem: "eu", texto: "Ninguém pensa alto.", proxima: "r1k_04" },
    r1k_04: { quem: "kaito", sprite: "kaito", texto: "Você pensa. Você mexe a boca. Você fez isso a manhã inteira na garupa. E agora no corredor. E você olhou pra Sayuri três vezes na prova.", proxima: "r1k_05" },
    r1k_05: { tipo: "narracao", texto: "Ela para do lado dele no parapeito. Ele chega para o lado, para ela caber. Igual sempre.", proxima: "r1k_06" },
    r1k_06: { quem: "kaito", sprite: "kaito", texto: "Eu não vou perguntar. Você sabe. Mas eu vou falar uma coisa.", proxima: "r1k_07" },
    r1k_07: { tipo: "narracao", texto: "Ele tira alguma coisa do bolso. Uma chave. Pequena, gasta, com um chaveiro de cebolinha de borracha. Coloca no parapeito, do lado da mão dela.", proxima: "r1k_08" },
    r1k_08: { quem: "kaito", sprite: "kaito", texto: "Cópia. Da moto. Você sabe pilotar agora. Se um dia você precisar sair rápido de algum lugar, ela está na frente da lojinha toda noite até as onze.", proxima: "r1k_cam" },
    r1k_cam: { caminhos: [
      { flag: "Chave_Kaito", proxima: "r1k_chave" }
    ], proxima: "r1k_09" },
    r1k_chave: { quem: "kaito", sprite: "kaito", texto: "Você me devolveu a chave no estacionamento. Fechou a minha mão nela. Agora eu estou te dando uma. É diferente. Essa é sua.", proxima: "r1k_09" },
    r1k_09: { tipo: "narracao", texto: "Ela olha para a chave. Para o chaveiro de cebolinha. Ele comprou um chaveiro de cebolinha. Em algum lugar existe uma loja que vende chaveiro de cebolinha, e o Kaito entrou nela.", proxima: "r1k_esc" },

    // ▶ ESCOLHA — Rota Kaito (quinta)
    r1k_esc: { escolhas: [
      { texto: "A. Pegar a chave. E contar pra ele da Sayuri. Tudo.", proxima: "r1k_a1", pontos: { kaito: 3 }, flags: ["Contou_rota_quinta"] },
      { texto: "B. Pegar a chave. “Obrigada. Um dia eu te conto.”", proxima: "r1k_b1", pontos: { kaito: 2 }, flags: ["Guardou_rota_quinta"] },
      { texto: "C. Pegar a chave. “Onde se compra um chaveiro de cebolinha?”", proxima: "r1k_c1", pontos: { kaito: 2 }, flags: ["Guardou_rota_quinta", "Chaveiro_cebolinha"] }
    ]},
    r1k_a1: { tipo: "narracao", texto: "Ela conta. O celular. A mochila da Hana. O “filho do patrão quer ver de perto”. Ele escuta sem interromper, olhando para o pátio. O maxilar dele trava na parte da Hana.", proxima: "r1k_a2" },
    r1k_a2: { quem: "kaito", sprite: "kaito", texto: "Quando você souber o lugar, você me fala. Eu não entro. Eu fico perto. Do lado de fora. Se você não aparecer em dez minutos, eu entro.", proxima: "r1k_a3" },
    r1k_a3: { quem: "eu", texto: "Quinze.", proxima: "r1k_a4" },
    r1k_a4: { quem: "kaito", sprite: "kaito", texto: "Dez.", proxima: "r1k_a5" },
    r1k_a5: { quem: "eu", texto: "Doze.", proxima: "r1k_a6" },
    r1k_a6: { quem: "kaito", sprite: "kaito", texto: "...Doze. E nenhum segundo a mais.", proxima: "c2_01" },
    r1k_b1: { quem: "kaito", sprite: "kaito", texto: "Um dia. Tá.", proxima: "r1k_b2" },
    r1k_b2: { tipo: "narracao", texto: "Ele não insiste. Ele nunca insiste. Mas, quando o sinal toca, ele não sai da janela. Fica lá, olhando ela ir até a sala, até ela virar a porta.", proxima: "c2_01" },
    r1k_c1: { tipo: "narracao", texto: "Ele vira o rosto para o pátio. Rápido. A orelha vermelha.", proxima: "r1k_c2" },
    r1k_c2: { quem: "kaito", sprite: "kaito", texto: "Na loja de um real da galeria. Tinha de cenoura também. A de cenoura era feia.", proxima: "r1k_c3" },
    r1k_c3: { quem: "eu", texto: "Você escolheu entre cebolinha e cenoura.", proxima: "r1k_c4" },
    r1k_c4: { quem: "kaito", sprite: "kaito", texto: "Demorei dez minutos. Não conta pro Ryuji.", proxima: "c2_01" },

    // ---------- Rota Takeo (quinta) ----------
    r1t_01: { tipo: "narracao", cenario: "clube-leitura", sprite: "takeo", texto: "O Takeo está na biblioteca. Plantão de intervalo. Sentado atrás do balcão de empréstimo, com uma folha de papel quadriculado e uma régua, desenhando alguma coisa com muita concentração.", proxima: "r1t_02" },
    r1t_02: { quem: "takeo", sprite: "takeo", texto: "O assento. Do balanço. Eu fiz as medidas. Quarenta por vinte. Madeira de pinho. Dois furos de cada lado. O furo é onde eu sempre erro.", proxima: "r1t_cam" },
    r1t_cam: { caminhos: [
      { flag: "Assento_balanco", proxima: "r1t_serrote" }
    ], proxima: "r1t_03" },
    r1t_serrote: { quem: "takeo", sprite: "takeo", texto: "Você serra. Eu lixo. Lembra? Eu comprei uma lixa. Três. De grossuras diferentes. A moça da loja me explicou por vinte minutos.", proxima: "r1t_03" },
    r1t_03: { tipo: "narracao", texto: "Ela debruça no balcão para ver o desenho. Ele para de desenhar. Fica olhando para ela de perto. A testa enrugada, igual a avó descreveu.", proxima: "r1t_04" },
    r1t_04: { quem: "takeo", sprite: "takeo", texto: "Você está escondendo alguma coisa.", proxima: "r1t_05" },
    r1t_05: { quem: "eu", texto: "O quê?", proxima: "r1t_06" },
    r1t_06: { quem: "takeo", sprite: "takeo", texto: "Você mexe no cabelo do lado esquerdo quando está escondendo alguma coisa. Desde os seis anos. Você fazia isso quando quebrava o vaso da vó e dizia que foi o gato. A gente não tinha gato.", proxima: "r1t_07" },
    r1t_07: { tipo: "narracao", texto: "Ela para a mão no meio do cabelo. Do lado esquerdo. Ele vê. Ela vê ele vendo.", proxima: "r1t_08" },
    r1t_08: { quem: "takeo", sprite: "takeo", texto: "Eu não vou perguntar o quê. Mas você prometeu, lá na esquina. Que quando você fosse ficar na frente de alguém, você me chamava.", proxima: "r1t_09" },
    r1t_09: { tipo: "narracao", texto: "Ele fala isso direto. Sem gaguejar. Com o lápis parado em cima do desenho do assento do balanço.", proxima: "r1t_esc" },

    // ▶ ESCOLHA — Rota Takeo (quinta)
    r1t_esc: { escolhas: [
      { texto: "A. Contar pra ele da Sayuri. Tudo.", proxima: "r1t_a1", pontos: { takeo: 3 }, flags: ["Contou_rota_quinta"] },
      { texto: "B. “Quando eu precisar, eu chamo. Ainda não precisa.”", proxima: "r1t_b1", pontos: { takeo: 2 }, flags: ["Guardou_rota_quinta"] },
      { texto: "C. Tirar a mão do cabelo e colocar em cima da mão dele, no desenho. “Faz o furo direito dessa vez.”", proxima: "r1t_c1", pontos: { takeo: 3 }, flags: ["Guardou_rota_quinta", "Mao_desenho_Takeo"] }
    ]},
    r1t_a1: { tipo: "narracao", texto: "Ela conta. Ele escuta com o lápis na mão. Quando ela fala da Hana, ele aperta o lápis até a ponta quebrar. Quando ela fala do “filho do patrão”, ele fica branco.", proxima: "r1t_a2" },
    r1t_a2: { quem: "takeo", sprite: "takeo", texto: "Eu não sei brigar. Você sabe que eu não sei. Mas eu sei ficar parado num lugar e ligar pra todo mundo se você não voltar. Isso eu sei fazer muito bem.", proxima: "r1t_a3" },
    r1t_a3: { quem: "eu", texto: "Eu sei que sabe.", proxima: "r1t_a4" },
    r1t_a4: { quem: "takeo", sprite: "takeo", texto: "Então me deixa fazer isso. Eu fico do lado de fora. Com o celular. Com a mão no botão.", proxima: "c2_01" },
    r1t_b1: { quem: "takeo", sprite: "takeo", texto: "Tá. Mas eu vou ficar olhando você mexer no cabelo até você precisar.", proxima: "r1t_b2" },
    r1t_b2: { tipo: "narracao", texto: "Ela tira a mão do cabelo. Coloca no bolso. Ele sorri, pequeno, e volta a desenhar o furo. Erra o furo.", proxima: "c2_01" },
    r1t_c1: { tipo: "narracao", texto: "Ela coloca a mão em cima da dele. Em cima do lápis. Ele para de respirar. Ela guia a mão dele. Um círculo. Redondo. Perfeito.", proxima: "r1t_c2" },
    r1t_c2: { quem: "takeo", sprite: "takeo", texto: "...É a primeira vez que eu acerto o furo.", proxima: "r1t_c3" },
    r1t_c3: { tipo: "narracao", texto: "Ela tira a mão. Ele fica olhando para o círculo no papel como quem olha um troféu. Ele não pergunta mais nada. Mas, quando ela vai embora, ela vê pela janela da biblioteca: ele escreve alguma coisa no canto da folha, embaixo do assento. Ela não consegue ler.", proxima: "c2_01" },

    // ---------- Rota Blake (quinta) ----------
    r1b_01: { tipo: "narracao", cenario: "patio-fundos", sprite: "blake", texto: "O Blake está embaixo da arquibancada, no saco de pancada remendado. Sozinho. Sem o Kaito segurando. O saco balança tanto que a corrente range.", proxima: "r1b_02" },
    r1b_02: { tipo: "narracao", texto: "Ele vê ela. Para. Segura o saco com uma mão. Tira do bolso da bermuda uma folha dobrada, amassada de suor, e estende.", proxima: "r1b_03" },
    r1b_03: { quem: "blake", sprite: "blake", texto: "Dos gêmeos.", proxima: "r1b_04" },
    r1b_04: { tipo: "narracao", texto: "Ela abre. Um desenho de giz de cera. Uma menina de boné de papelão, de mão dada com um dinossauro verde enorme. Embaixo, em letra torta: “VOLTA LOGO. A GENTE DEIXA VOCÊ SER O DINOSSAURO.”", proxima: "r1b_05" },
    r1b_05: { quem: "blake", sprite: "blake", texto: "Eles perguntam de você todo dia. No café da manhã. No banho. Na hora de dormir. Eu não sei mais o que responder.", proxima: "r1b_06" },
    r1b_06: { quem: "eu", texto: "Responde que eu volto.", proxima: "r1b_07" },
    r1b_07: { tipo: "narracao", texto: "Ele concorda com a cabeça. Uma vez. Depois fica olhando para o outro lado do pátio. Para o banco onde a Sayuri está sentada sozinha.", proxima: "r1b_08" },
    r1b_08: { quem: "blake", sprite: "blake", texto: "A Sayuri está com aquela cara de novo. A do pai no portão. E ela olha pra você. O tempo todo. Desde terça.", proxima: "r1b_09" },
    r1b_09: { tipo: "narracao", texto: "Ele não pergunta. O Blake não pergunta. Mas ele percebeu. Ele sempre percebe. Ele só não fala.", proxima: "r1b_cam" },
    r1b_cam: { caminhos: [
      { flag: "Termina_frase_Blake", proxima: "r1b_festival" }
    ], proxima: "r1b_esc" },
    r1b_festival: { quem: "blake", sprite: "blake", texto: "Igual no festival. Você sabia de alguma coisa antes de acontecer. Eu não sei como. Eu não quero saber como. Mas você está com a mesma cara.", proxima: "r1b_esc" },

    // ▶ ESCOLHA — Rota Blake (quinta)
    r1b_esc: { escolhas: [
      { texto: "A. Contar pra ele da Sayuri. Tudo.", proxima: "r1b_a1", pontos: { blake: 3 }, flags: ["Contou_rota_quinta"] },
      { texto: "B. “Fica de olho nela. De longe. Igual você e o Kaito combinaram.”", proxima: "r1b_b1", pontos: { blake: 2 }, flags: ["Guardou_rota_quinta"] },
      { texto: "C. Segurar o saco de pancada pra ele. Sem falar nada.", proxima: "r1b_c1", pontos: { blake: 3 }, flags: ["Guardou_rota_quinta", "Saco_Blake"] }
    ]},
    r1b_a1: { tipo: "narracao", texto: "Ela conta. Ele escuta. Sem mexer um músculo. Quando ela fala do pai da Sayuri, ele fecha os olhos. Quando ela fala da Hana, ele abre.", proxima: "r1b_a2" },
    r1b_a2: { quem: "blake", sprite: "blake", texto: "Ela nunca contou isso pra mim. No primeiro ano. Eu achava que o pai gritava porque era bravo. Não era só isso.", proxima: "r1b_a3" },
    r1b_a3: { quem: "blake", sprite: "blake", texto: "Eu vou. Não pra brigar. Pra ficar. Do lado de fora. Se der errado, eu sou grande. Grande ajuda a abrir porta.", proxima: "c2_01" },
    r1b_b1: { quem: "blake", sprite: "blake", texto: "De longe. Tá.", proxima: "r1b_b2" },
    r1b_b2: { tipo: "narracao", texto: "Ele não fala mais nada. Mas, pelo resto do intervalo, ele treina no saco virado para o lado do banco da Sayuri. Olhando. De longe.", proxima: "c2_01" },
    r1b_c1: { tipo: "narracao", texto: "Ela vai para o outro lado do saco. Segura com o ombro. Igual o Kaito faz. Ele olha para ela. Ela faz sinal com a cabeça: bate.", proxima: "r1b_c2" },
    r1b_c2: { tipo: "narracao", texto: "Ele bate. Forte. O saco não se mexe. Nem um centímetro. Ele bate mais forte. Nada. Ele para, de boca aberta, olhando para ela por cima do saco.", proxima: "r1b_c3" },
    r1b_c3: { quem: "blake", sprite: "blake", texto: "...O Kaito recua meio passo quando eu bato assim.", proxima: "r1b_c4" },
    r1b_c4: { quem: "eu", texto: "Eu estava preparada.", proxima: "r1b_c5" },
    r1b_c5: { tipo: "narracao", texto: "Ele solta o ar pelo nariz. Quase um riso. E bate de novo. E de novo. Ela segura. Os dois não falam nada o intervalo inteiro. É a melhor conversa que eles já tiveram.", proxima: "c2_01" },

    // ---------- Rota Ryuji (quinta) ----------
    r1r_01: { tipo: "narracao", cenario: "patio-fundos", sprite: "ryuji", texto: "O Ryuji está na arquibancada, cercado de alunos do primeiro ano. Contando, com gestos enormes, a história do simulado dos bombeiros. Pela décima vez. Quando vê a SN, ele aponta.", proxima: "r1r_02" },
    r1r_02: { quem: "ryuji", sprite: "ryuji", texto: "ELA! Ela estava lá! Ela cronometrou! Três e cinquenta e oito! Pergunta pra ela!", proxima: "r1r_cam" },
    r1r_cam: { caminhos: [
      { flag: "Gritou_Ryuji", proxima: "r1r_grito" }
    ], proxima: "r1r_03" },
    r1r_grito: { quem: "ryuji", sprite: "ryuji", texto: "E ela gritou o meu nome tão alto que um cachorro do outro lado da rua uivou! Ela tem pulmão de bombeiro também!", proxima: "r1r_03" },
    r1r_03: { tipo: "narracao", texto: "Os alunos do primeiro ano olham para ela. Ela confirma com a cabeça. Eles gritam. O Ryuji levanta os braços como quem ganhou uma copa.", proxima: "r1r_04" },
    r1r_04: { tipo: "narracao", sprite: "ryuji", texto: "Quando os alunos vão embora, ele desce da arquibancada e para do lado dela. E o rosto dele muda. O Ryuji de jornal da escola some. Fica o outro. O da loja dos coelhos.", proxima: "r1r_05" },
    r1r_05: { quem: "ryuji", sprite: "ryuji", texto: "Eu preciso te contar uma coisa. Eu sou o jornal, lembra? Eu ouço tudo.", proxima: "r1r_06" },
    r1r_06: { quem: "ryuji", sprite: "ryuji", texto: "O primo de um menino do segundo ano viu um carro preto na rua da Sayuri ontem à noite. E um cara de anel em todos os dedos entrando na casa dela. E saindo dez minutos depois. A janela da casa ficou acesa até as três.", proxima: "r1r_07" },
    r1r_07: { quem: "ryuji", sprite: "ryuji", texto: "E a Sayuri olha pra você o tempo todo. E você olha pra ela. E vocês se odiavam até mês passado. O jornal percebe essas coisas.", proxima: "r1r_08" },
    r1r_08: { tipo: "narracao", texto: "Ele fala isso baixo. Sério. Sem uma piada. Com as mãos nos bolsos do moletom.", proxima: "r1r_09" },
    r1r_09: { quem: "ryuji", sprite: "ryuji", texto: "Eu não sei o que está acontecendo. Mas eu sou a cola, lembra? Se alguma coisa vai rachar, eu quero estar perto pra segurar.", proxima: "r1r_esc" },

    // ▶ ESCOLHA — Rota Ryuji (quinta)
    r1r_esc: { escolhas: [
      { texto: "A. Contar pra ele da Sayuri. Tudo.", proxima: "r1r_a1", pontos: { ryuji: 3 }, flags: ["Contou_rota_quinta"] },
      { texto: "B. “Para de espalhar essa história do carro. Por favor. Hoje não.”", proxima: "r1r_b1", pontos: { ryuji: 2 }, flags: ["Guardou_rota_quinta"] },
      { texto: "C. “Você é a cola. Então cola em mim amanhã à noite. Eu te falo onde.”", proxima: "r1r_c1", pontos: { ryuji: 3 }, flags: ["Contou_rota_quinta", "Cola_Ryuji"] }
    ]},
    r1r_a1: { tipo: "narracao", texto: "Ela conta. O Ryuji, que nunca fica quieto, fica quieto do começo ao fim. Na parte da mochila da Hana, ele aperta o punho no bolso.", proxima: "r1r_a2" },
    r1r_a2: { quem: "ryuji", sprite: "ryuji", texto: "A Hana. A minha arquivista. Eles iam mexer com a Hana.", proxima: "r1r_a3" },
    r1r_a3: { quem: "ryuji", sprite: "ryuji", texto: "Tá. Eu não sou o mais forte. Mas eu sou o mais rápido pra chamar todo mundo. Eu chamo o líder, o Blake, o Victor, a polícia, os bombeiros e a minha mãe em trinta segundos.", proxima: "r1r_a4" },
    r1r_a4: { quem: "eu", texto: "A sua mãe?", proxima: "r1r_a5" },
    r1r_a5: { quem: "ryuji", sprite: "ryuji", texto: "Você não conhece a minha mãe.", proxima: "c2_01" },
    r1r_b1: { tipo: "narracao", texto: "O Ryuji olha para ela. Entende mais do que ela falou.", proxima: "r1r_b2" },
    r1r_b2: { quem: "ryuji", sprite: "ryuji", texto: "...Tá. O jornal fecha hoje. Edição suspensa. Mas eu continuo ouvindo.", proxima: "c2_01" },
    r1r_c1: { tipo: "narracao", texto: "O Ryuji pisca. Depois tira a mão do bolso. Estende o punho fechado para ela.", proxima: "r1r_c2" },
    r1r_c2: { quem: "ryuji", sprite: "ryuji", texto: "Cola. Fechado. Eu não pergunto o quê. Eu só vou.", proxima: "r1r_c3" },
    r1r_c3: { tipo: "narracao", texto: "Ela bate o punho no dele. Ele aperta o punho dela por um segundo. Depois solta. E volta para a arquibancada gritando sobre bombeiro, como se nada.", proxima: "c2_01" },

    // ---------- Rota Victor (quinta) ----------
    r1v_01: { tipo: "narracao", cenario: "corredor", sprite: "victor", texto: "Quinta. O banco da coordenação. Toda quinta. O Victor já está lá, sentado direito, com a apostila de física aberta. E, em cima da apostila, um pote de plástico com tampa azul.", proxima: "r1v_02" },
    r1v_02: { quem: "victor", sprite: "victor", texto: "Gatinha. Física hoje. Mas antes: o pudim do vizinho. Não rachou. Eu guardei. A minha mãe disse que, se eu comesse, eu ia dormir no quintal.", proxima: "r1v_03" },
    r1v_03: { tipo: "narracao", texto: "Ela abre o pote. O pudim está perfeito. Liso. Sem uma rachadura. Ela come uma colherada. Ele fica olhando ela comer, com o queixo apoiado na mão.", proxima: "r1v_cam" },
    r1v_cam: { caminhos: [
      { flag: "Outro_jeito_Victor", proxima: "r1v_nome" }
    ], proxima: "r1v_04" },
    r1v_nome: { tipo: "narracao", texto: "Ele não chama ela de gatinha de novo pelo resto da tarde. Só pelo nome. Ela percebe toda vez.", proxima: "r1v_04" },
    r1v_04: { quem: "victor", sprite: "victor", texto: "Agora a parte estranha. Ontem de madrugada, na doca. O de anel de novo. Mas dessa vez ele não foi pro pai da Sayuri. Ele recebeu uma ligação. E falou o seu nome. O seu nome inteiro, gatinha.", proxima: "r1v_05" },
    r1v_05: { quem: "victor", sprite: "victor", texto: "E falou “sexta”. E “último andar”. Eu não ouvi mais nada. O caminhão de batata buzinou.", proxima: "r1v_06" },
    r1v_06: { tipo: "pensamento", texto: "Sexta. Último andar. Antes da Sayuri receber a ordem, o Victor já ouviu a metade dela. Na doca. Descarregando batata.", proxima: "r1v_07" },
    r1v_07: { tipo: "narracao", texto: "O Victor fecha a apostila. Pela primeira vez, sem estudar. Olha para ela. Sério.", proxima: "r1v_08" },
    r1v_08: { quem: "victor", sprite: "victor", texto: "Eu prometi de mindinho que eu voltava de tudo. Mas eu nunca prometi ficar de fora. Se tem sexta e último andar com o seu nome, eu quero saber onde.", proxima: "r1v_esc" },

    // ▶ ESCOLHA — Rota Victor (quinta)
    r1v_esc: { escolhas: [
      { texto: "A. Contar pra ele da Sayuri. Tudo.", proxima: "r1v_a1", pontos: { victor: 3 }, flags: ["Contou_rota_quinta"] },
      { texto: "B. “Quando eu souber onde, você é o primeiro a saber.”", proxima: "r1v_b1", pontos: { victor: 2 }, flags: ["Guardou_rota_quinta"] },
      { texto: "C. “Primeiro física. Depois sexta.”", proxima: "r1v_c1", pontos: { victor: 2 }, flags: ["Guardou_rota_quinta", "Fisica_antes_Victor"] }
    ]},
    r1v_a1: { tipo: "narracao", texto: "Ela conta. Ele escuta com a mão no pote de pudim. Quando ela termina, ele fica um tempo olhando a parede da coordenação.", proxima: "r1v_a2" },
    r1v_a2: { quem: "victor", sprite: "victor", texto: "Eu vou de moto. Fico na rampa do estacionamento, de motor ligado. Se você descer correndo, eu levo você embora antes de alguém falar “Sakuma”.", proxima: "r1v_a3" },
    r1v_a3: { quem: "eu", texto: "A sua moto solta tiro. Todo mundo vai ouvir você chegando.", proxima: "r1v_a4" },
    r1v_a4: { quem: "victor", sprite: "victor", texto: "Exatamente. Vão achar que é tiro e vão correr. Plano perfeito.", proxima: "c2_01" },
    r1v_b1: { quem: "victor", sprite: "victor", texto: "Primeiro. Na frente do líder. Na frente de todo mundo. Promete?", proxima: "r1v_b2" },
    r1v_b2: { tipo: "narracao", texto: "Ele levanta o mindinho. Ela engancha. Ele aperta. Forte demais. Ela deixa.", proxima: "c2_01" },
    r1v_c1: { tipo: "narracao", texto: "Ele olha para ela. Depois para a apostila. Abre de novo. Suspira.", proxima: "r1v_c2" },
    r1v_c2: { quem: "victor", sprite: "victor", texto: "Física é briga de força contra força, né? Eu entendi isso. Agora me explica por que o bloquinho desce a rampa.", proxima: "r1v_c3" },
    r1v_c3: { tipo: "narracao", texto: "Ela desenha um bloquinho de carinha triste. Ele desenha um do lado, de carinha brava, com pirulito na boca. Ela ri tanto que o coordenador abre a porta, vê os dois, e fecha de novo.", proxima: "c2_01" },

    /* =================== CENA 2 — FARMÁCIA, 19H =================== */
    // Cenário: ponto de ônibus em frente à farmácia (usa "saida-colegio"). Música: baixo grave.
    c2_01: { tipo: "narracao", cenario: "rua-padaria-noite", transicao: "tempo", legenda: "Quinta, 18h52 — Cena 2", sprite: null, texto: "Quinta. Seis e cinquenta e dois da noite. O letreiro verde da farmácia pisca. O ponto de ônibus da frente está vazio, só um banco de metal e um cartaz de vacina.", proxima: "c2_cam1" },
    c2_cam1: { caminhos: [
      { flag: "Plano_lugar_entrega", proxima: "c2_viu_01" }
    ], proxima: "c2_casa_01" },

    // ---- Ela sabia o lugar: vai olhar escondida ----
    c2_viu_01: { tipo: "narracao", texto: "Ela está do outro lado da rua. Dentro da padaria, do lado da vitrine, com um café com leite que ela não está tomando. Olhando pelo vidro.", proxima: "c2_viu_02" },
    c2_viu_02: { tipo: "narracao", texto: "Às sete em ponto, a Sayuri chega no ponto de ônibus. Laço rosa. Mochila. Senta no banco. Não olha para os lados.", proxima: "c2_viu_03" },
    c2_viu_03: { tipo: "narracao", texto: "Às sete e dois, o carro preto encosta. O vidro desce. O de anel. Ele estende um envelope pela janela. Pardo. Fino. A Sayuri pega. Ele fala alguma coisa. Ela concorda com a cabeça.", proxima: "c2_viu_04" },
    c2_viu_04: { tipo: "narracao", texto: "E então ele vira a cabeça. Para o outro lado da rua. Para a padaria. Para a vitrine.", proxima: "c2_viu_05" },
    c2_viu_05: { tipo: "narracao", texto: "Ela não abaixa. Ela não se esconde. Ela levanta o copo de café com leite. Um brinde. Pelo vidro.", proxima: "c2_viu_06" },
    c2_viu_06: { tipo: "narracao", texto: "O de anel fica pálido. O vidro sobe rápido. O carro sai sem dar seta.", proxima: "c2_viu_07" },
    c2_viu_07: { tipo: "pensamento", texto: "Ele lembra de mim. Ótimo. Que ele leve esse brinde pro patrão também.", proxima: "c2_02" },

    // ---- Ela não sabia o lugar: espera em casa ----
    c2_casa_01: { tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", texto: "Ela está em casa. Sentada na cama, com o celular na mão, desde as seis e meia. A mãe passou duas vezes no corredor. Na segunda, falou “hm”. Ela fingiu que não ouviu.", proxima: "c2_casa_02" },
    c2_casa_02: { tipo: "narracao", texto: "Às sete e onze, o celular vibra.", proxima: "c2_02" },

    // (os dois caminhos continuam aqui)
    c2_02: { quem: "mensagem", rotulo: "Mensagem — S", texto: "Peguei. Não é o celular. É um bilhete. Escrito à mão. Letra bonita. Foto abaixo.", proxima: "c2_03" },
    c2_03: { tipo: "narracao", texto: "A foto chega. Um papel creme, grosso, caro. Uma letra inclinada, caprichada, de caneta-tinteiro.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", efeito: "eco", texto: "“Sexta, 19h. Último andar do estacionamento do shopping. Traga ela. Sozinha. Se ela não for, quem paga é a do caderno de gatinho.”", proxima: "c2_05" },
    c2_05: { tipo: "narracao", texto: "Embaixo, no canto do papel, um desenho pequeno. Muito bem feito. Um peão.", proxima: "c2_06" },
    c2_06: { quem: "mensagem", rotulo: "Mensagem — S", texto: "Eu não sei quem escreveu. O de anel disse que foi “o filho”. Eu não sei de quem. Eu não vou te levar lá. Eu não vou.", proxima: "c2_07" },
    c2_07: { tipo: "pensamento", texto: "A do caderno de gatinho. A Hana. Ele sabe do caderno. Ele sabe dos gatinhos.", proxima: "c2_08" },
    c2_08: { tipo: "pensamento", texto: "Ele não quer o celular. Ele nunca quis. O celular era só pra ver se a Sayuri obedecia. Agora ele sabe que ela vai me contar. Então ele mandou o convite por ela. Pra mim.", proxima: "c2_09" },
    c2_09: { tipo: "pensamento", texto: "É um convite. Com ameaça. Do jeito educado dele.", proxima: "c2_10" },
    c2_10: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Leva. Você me leva. Eu vou.", proxima: "c2_11" },
    c2_11: { quem: "mensagem", rotulo: "Mensagem — S", texto: "Você está louca?", proxima: "c2_12" },
    c2_12: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Um pouco. Mas se eu não for, ele mexe com a Hana. Se eu for, ele mexe comigo. Comigo é melhor.", proxima: "c2_13" },
    c2_13: { tipo: "narracao", texto: "A resposta demora muito. Cinco minutos. Os três pontinhos aparecem e somem umas dez vezes.", proxima: "c2_14" },
    c2_14: { quem: "mensagem", rotulo: "Mensagem — S", texto: "...Tá. Eu te levo. Mas eu fico do seu lado. O tempo todo. Ele não vai falar com você sem eu ouvir.", proxima: "c2_15" },
    c2_15: { tipo: "pensamento", texto: "A Sayuri. Do meu lado. Quem diria.", proxima: "c2_esc1" },

    // ▶ ESCOLHA 1 — Como ir para o último andar
    c2_esc1: { escolhas: [
      { texto: "A. Sozinha com a Sayuri. Como ele pediu. Ninguém mais sabe.", proxima: "c2_1a_1", pontos: { desvio: 1 }, flags: ["Ultimo_andar_sozinha"] },
      { texto: "B. Com o {ROTA} esperando do lado de fora, no andar de baixo.", proxima: "c2_1b_1", flags: ["Ultimo_andar_rota_fora"] },
      { texto: "C. Mandar a foto do bilhete pra Hana. “Se eu não mandar mensagem até as 19h30, você sabe o que fazer.”", proxima: "c2_1c_1", pontos: { hana: 2 }, flags: ["Ultimo_andar_Hana_sabe"] }
    ]},
    c2_1a_1: { tipo: "pensamento", texto: "Ele pediu sozinha. Se eu levar alguém, ele vai saber. Ele sempre sabe. E aí ele não vai aparecer, e vai escolher outro dia. Um dia que eu não sei.", proxima: "c2_1a_2" },
    c2_1a_2: { tipo: "pensamento", texto: "Não. Amanhã. No dia que eu sei. Do jeito que ele pediu. E aí eu vejo a cara dele.", proxima: "c3_01" },
    c2_1b_1: { tipo: "pensamento", texto: "Sozinha lá em cima. Mas não sozinha no prédio. Ele não precisa saber que tem alguém três andares abaixo, de olho na rampa.", proxima: "c3_01" },
    c2_1c_1: { tipo: "narracao", texto: "Ela manda. A Hana responde em vinte segundos.", proxima: "c2_1c_2" },
    c2_1c_2: { quem: "mensagem", rotulo: "Mensagem — Hana", texto: "Recebido. 19h30. Se não tiver mensagem, eu ligo pra sua mãe, pro Kaito, pra polícia e pra direção do shopping. Nessa ordem. Já fiz a lista.", proxima: "c2_1c_3" },
    c2_1c_3: { quem: "mensagem", rotulo: "Mensagem — Hana", texto: "E obrigada por não deixar eles mexerem no meu caderno.", proxima: "c3_01" },

    /* =================== CENA 3 — SEXTA, O DIA MAIS NORMAL =================== */
    // Cenário: escola, sexta. Música: violão leve, com tensão por baixo.
    c3_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Sexta — Cena 3", sprite: null, texto: "Sexta. O dia mais normal do mundo. Prova de história de manhã. A professora dá a matéria da Revolução Industrial de novo. A SN quase ri.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", cenario: "patio-fundos", sprite: "mio", texto: "No intervalo, a Mio aparece com dois sorvetes de palito. Um de morango. Um de limão. Ela não sabe de nada. Ela não precisa saber.", proxima: "c3_03" },
    c3_03: { quem: "mio", sprite: "mio", texto: "Sexta à noite. Você está livre? A Reina chamou pra fazer pudim na casa dela. De novo. Ela fez cinco essa semana. Todos racharam. Ela está obcecada. A Akane está preocupada.", proxima: "c3_04" },
    c3_04: { quem: "eu", texto: "Hoje eu não posso. Tenho um compromisso às sete.", proxima: "c3_05" },
    c3_05: { quem: "mio", sprite: "mio", texto: "Compromisso. Com quem? Com o menino da moto? Do balanço? Da festa de dinossauro? Do bombeiro? Do pirulito? Eu sou sua melhor amiga, eu tenho direito de saber o nome do compromisso.", proxima: "c3_06" },
    c3_06: { tipo: "pensamento", texto: "Ela listou todos. A Mio lista todos. Ela é o jornal número dois.", proxima: "c3_esc2" },

    // ▶ ESCOLHA 2 — A Mio quer saber o compromisso
    c3_esc2: { escolhas: [
      { texto: "A. “Segunda eu te conto. Com gestos. Com detalhe. Prometo.”", proxima: "c3_2a_1", pontos: { mio: 2 }, flags: ["Mio_segunda_conta"] },
      { texto: "B. “É com a Sayuri.” E ver a cara dela.", proxima: "c3_2b_1", pontos: { mio: 1 }, flags: ["Mio_sabe_Sayuri"] },
      { texto: "C. Pegar o sorvete de limão. “Se você me der o de limão, eu prometo que volto inteira.”", proxima: "c3_2c_1", pontos: { mio: 2 }, flags: ["Mio_limao"] }
    ]},
    c3_2a_1: { quem: "mio", sprite: "mio", texto: "Segunda. Com gestos. Se não tiver gesto, não vale.", proxima: "c3_07" },
    c3_2b_1: { tipo: "narracao", texto: "A Mio deixa o sorvete de morango cair. Na grama. Ela não pega.", proxima: "c3_2b_2" },
    c3_2b_2: { quem: "mio", sprite: "mio", texto: "COM A SAYURI? A do balde? A que segurou a mão do Blake na enfermaria? SN, você bateu a cabeça?", proxima: "c3_2b_3" },
    c3_2b_3: { quem: "eu", texto: "É complicado. Confia em mim.", proxima: "c3_2b_4" },
    c3_2b_4: { tipo: "narracao", texto: "A Mio olha para ela muito tempo. A cara de quem quer brigar. Depois a cara de quem confia mesmo assim.", proxima: "c3_2b_5" },
    c3_2b_5: { quem: "mio", sprite: "mio", texto: "...Tá. Eu confio. Mas se ela fizer alguma coisa com você, eu jogo um balde nela. De sorvete derretido. Eu guardo esse aqui no congelador pra isso.", proxima: "c3_07" },
    c3_2c_1: { tipo: "narracao", texto: "A Mio olha para o sorvete de limão. Para ela. Entende alguma coisa sem entender nada.", proxima: "c3_2c_2" },
    c3_2c_2: { quem: "mio", sprite: "mio", texto: "...Toma. O de limão. Mas volta inteira. Inteira mesmo. Senão eu nunca mais te dou sorvete de limão. E eu nunca dou o de limão pra ninguém.", proxima: "c3_07" },

    // (todas as opções continuam aqui)
    c3_07: { tipo: "narracao", sprite: "sayuri", texto: "Do outro lado do pátio, a Sayuri passa. Para do lado da SN. Fala sem olhar, como sempre.", proxima: "c3_08" },
    c3_08: { quem: "sayuri", sprite: "sayuri", texto: "Seis e quarenta, na entrada do shopping. Do lado da loja de relógio. Onde ele me segurou pelo braço aquela vez.", proxima: "c3_09" },
    c3_09: { tipo: "narracao", texto: "Ela continua andando. A Mio fica olhando, de boca aberta, com o palito do sorvete na mão.", proxima: "c3_10" },
    c3_10: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", sprite: "reina", texto: "Na saída da última aula, a Reina passa pela carteira dela. Coloca um pote pequeno em cima da mesa. Pudim. Rachado no meio.", proxima: "c3_11" },
    c3_11: { quem: "reina", sprite: "reina", texto: "O sexto da semana. Rachou. Toma. Você está com cara de quem vai precisar de açúcar hoje. Eu conheço essa cara. É a minha cara antes de briga.", proxima: "c3_12" },
    c3_12: { quem: "eu", texto: "Obrigada, Reina.", proxima: "c3_13" },
    c3_13: { quem: "reina", sprite: "reina", texto: "Não agradece. Se você não voltar, eu fico sem rival. E aí eu ganho o Takeo sem graça nenhuma. Volta.", proxima: "r2_cam" },

    /* =================== ROTA — SEXTA =================== */
    r2_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "r2k_01" },
      { flag: "Rota_Takeo", proxima: "r2t_01" },
      { flag: "Rota_Blake", proxima: "r2b_01" },
      { flag: "Rota_Ryuji", proxima: "r2r_01" },
      { flag: "Rota_Victor", proxima: "r2v_01" }
    ], proxima: "r2k_01" },

    // ---------- Rota Kaito (sexta) ----------
    r2k_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", sprite: "kaito", texto: "No portão, o Kaito está encostado na moto. Com os dois capacetes. Quando ela chega, ele estende o vermelho-escuro.", proxima: "r2k_cam" },
    r2k_cam: { caminhos: [
      { flag: "Ultimo_andar_rota_fora", proxima: "r2k_fora_01" },
      { flag: "Contou_rota_quinta", proxima: "r2k_fora_01" }
    ], proxima: "r2k_nao_01" },
    r2k_fora_01: { quem: "kaito", sprite: "kaito", texto: "Shopping. Último andar. Eu sei. Você me contou. Eu fico no segundo andar do estacionamento, perto da rampa. Doze minutos.", proxima: "r2k_fora_02" },
    r2k_fora_02: { quem: "eu", texto: "Doze. Nem um segundo a mais.", proxima: "r2k_fora_03" },
    r2k_fora_03: { tipo: "narracao", texto: "Ele não sorri. Ele coloca o capacete nela. Ajeita a fivela embaixo do queixo com dois dedos. E, quando termina, a mão dele fica um segundo a mais encostada no capacete. Do lado do rosto dela.", proxima: "r2k_fora_04" },
    r2k_fora_04: { quem: "kaito", sprite: "kaito", texto: "Volta. Tá? Eu ainda tenho que perder pra você na lan.", proxima: "r2k_esc" },
    r2k_nao_01: { quem: "kaito", sprite: "kaito", texto: "Hoje é sexta. Eu tenho entrega até as onze. Mas a moto fica na frente da lojinha. Você tem a chave.", proxima: "r2k_nao_02" },
    r2k_nao_02: { tipo: "narracao", texto: "Ele não sabe de nada. Ela não contou. Mas, quando ele coloca o capacete nela, ele demora na fivela. Olha para ela. Ele sabe que tem alguma coisa. Ele não pergunta.", proxima: "r2k_esc" },

    // ▶ ESCOLHA — Rota Kaito (sexta)
    r2k_esc: { escolhas: [
      { texto: "A. Segurar a mão dele, a que está no capacete. Só um segundo.", proxima: "r2k_a1", pontos: { kaito: 3 }, flags: ["Mao_capacete_Kaito"] },
      { texto: "B. “Depois de hoje, eu te conto tudo. Até o que você ainda não sabe.”", proxima: "r2k_b1", pontos: { kaito: 3 }, flags: ["Promessa_contar_tudo_Kaito"] },
      { texto: "C. “Se eu não voltar, a moto é minha.”", proxima: "r2k_c1", pontos: { kaito: 2 }, flags: ["Moto_heranca"] }
    ]},
    r2k_a1: { tipo: "narracao", texto: "Ela segura. A mão dele está quente, mesmo com o vento. Ele não puxa. Ela solta primeiro. Ele fica com a mão parada no ar, perto do capacete dela, como quem esqueceu o que ia fazer.", proxima: "c4_01" },
    r2k_b1: { quem: "kaito", sprite: "kaito", texto: "Até o que eu não sei?", proxima: "r2k_b2" },
    r2k_b2: { quem: "eu", texto: "Principalmente o que você não sabe.", proxima: "r2k_b3" },
    r2k_b3: { tipo: "narracao", texto: "Ele fica olhando para ela. Ele sabe da barra. Ele sabe do boné. Ela está falando de outra coisa. Maior. Ele percebe. Ele só concorda com a cabeça.", proxima: "c4_01" },
    r2k_c1: { quem: "kaito", sprite: "kaito", texto: "Se você não voltar, eu vou atrás. E a moto vai junto. E o tio. E o Blake. E a sua mãe, que dá mais medo que todo mundo junto.", proxima: "r2k_c2" },
    r2k_c2: { tipo: "narracao", texto: "Ele fala isso sério. Ela ri. Ele não ri. Mas, quando ela sobe na garupa, ele espera ela segurar na jaqueta antes de ligar a moto. Ele sempre espera.", proxima: "c4_01" },

    // ---------- Rota Takeo (sexta) ----------
    r2t_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", sprite: "takeo", texto: "No portão, o Takeo espera. Com a mochila nas costas e uma sacola de papel da loja de material de construção na mão. Dentro, um pedaço de madeira de pinho, quarenta por vinte.", proxima: "r2t_cam" },
    r2t_cam: { caminhos: [
      { flag: "Ultimo_andar_rota_fora", proxima: "r2t_fora_01" },
      { flag: "Contou_rota_quinta", proxima: "r2t_fora_01" }
    ], proxima: "r2t_nao_01" },
    r2t_fora_01: { quem: "takeo", sprite: "takeo", texto: "Eu vou junto até o shopping. Eu fico na praça de alimentação. Com o celular na mão. Com o dedo no botão. Eu já liguei pra minha avó e disse que vou chegar tarde. Ela disse “vai com Deus e com a menina da viga”.", proxima: "r2t_fora_02" },
    r2t_fora_02: { quem: "eu", texto: "E a madeira?", proxima: "r2t_fora_03" },
    r2t_fora_03: { quem: "takeo", sprite: "takeo", texto: "A madeira vai comigo. Se você demorar, eu começo a lixar. Assim eu não fico louco.", proxima: "r2t_esc" },
    r2t_nao_01: { quem: "takeo", sprite: "takeo", texto: "Comprei a madeira. Do assento. Eu queria começar hoje. Com você. Mas você tem compromisso. A Mio contou.", proxima: "r2t_nao_02" },
    r2t_nao_02: { tipo: "narracao", texto: "Ele não pergunta qual compromisso. Ele olha para ela. Para a mão dela, do lado esquerdo do cabelo. Ela não percebeu que estava mexendo. Ele percebeu.", proxima: "r2t_nao_03" },
    r2t_nao_03: { quem: "takeo", sprite: "takeo", texto: "Amanhã, então. A madeira espera. Eu espero. A gente é bom nisso.", proxima: "r2t_esc" },

    // ▶ ESCOLHA — Rota Takeo (sexta)
    r2t_esc: { escolhas: [
      { texto: "A. Abraçar ele. Com a madeira no meio.", proxima: "r2t_a1", pontos: { takeo: 3 }, flags: ["Abraco_madeira"] },
      { texto: "B. “Escreve o nosso nome embaixo do assento. Enquanto espera.”", proxima: "r2t_b1", pontos: { takeo: 3 }, flags: ["Nome_assento"] },
      { texto: "C. “Se eu demorar, você não entra. Promete. Você liga. Não entra.”", proxima: "r2t_c1", pontos: { takeo: 2 }, flags: ["Takeo_nao_entra"] }
    ]},
    r2t_a1: { tipo: "narracao", texto: "Ela abraça. A madeira fica no meio, dura, apertada entre os dois. Ele ri, sem graça, com o rosto no ombro dela. Depois abraça de volta. Com a madeira e tudo.", proxima: "r2t_a2" },
    r2t_a2: { quem: "takeo", sprite: "takeo", texto: "Esse foi o abraço mais desconfortável da minha vida. Eu quero outro igual depois.", proxima: "c4_01" },
    r2t_b1: { tipo: "narracao", texto: "Ele olha para a madeira. Para ela. Fica vermelho.", proxima: "r2t_b2" },
    r2t_b2: { quem: "takeo", sprite: "takeo", texto: "Eu já escrevi. Ontem. No papel do desenho. Embaixo do furo. Era isso que eu estava escrevendo na biblioteca.", proxima: "r2t_b3" },
    r2t_b3: { tipo: "pensamento", texto: "Aquilo que eu não consegui ler pela janela. Era o meu nome. Do lado do dele.", proxima: "c4_01" },
    r2t_c1: { quem: "takeo", sprite: "takeo", texto: "...Prometo. Eu ligo. Eu não entro.", proxima: "r2t_c2" },
    r2t_c2: { tipo: "narracao", texto: "Ele fala isso olhando para o chão. Ela sabe que é mentira. Ele sabe que ela sabe. O Takeo nunca conseguiu não entrar em lugar nenhum onde alguém precisasse dele.", proxima: "c4_01" },

    // ---------- Rota Blake (sexta) ----------
    r2b_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", sprite: "blake", texto: "No portão, o Blake está encostado na moto preta fosca. Sozinho. Os outros já foram. Quando ela passa, ele levanta a cabeça.", proxima: "r2b_cam" },
    r2b_cam: { caminhos: [
      { flag: "Ultimo_andar_rota_fora", proxima: "r2b_fora_01" },
      { flag: "Contou_rota_quinta", proxima: "r2b_fora_01" }
    ], proxima: "r2b_nao_01" },
    r2b_fora_01: { quem: "blake", sprite: "blake", texto: "Eu levo você. E fico no terceiro andar. Perto da escada de incêndio.", proxima: "r2b_fora_02" },
    r2b_fora_02: { quem: "eu", texto: "Por que a escada de incêndio?", proxima: "r2b_fora_03" },
    r2b_fora_03: { quem: "blake", sprite: "blake", texto: "Porque ninguém olha pra escada de incêndio. E porque é o caminho mais rápido pro último andar. Eu fui lá ontem. Contei os degraus. Setenta e dois.", proxima: "r2b_fora_04" },
    r2b_fora_04: { tipo: "pensamento", texto: "Ele foi lá ontem. Contar degrau. Igual eu fiz na fábrica de cimento.", proxima: "r2b_esc" },
    r2b_nao_01: { quem: "blake", sprite: "blake", texto: "Os gêmeos mandaram outro desenho. Eu deixo segunda.", proxima: "r2b_nao_02" },
    r2b_nao_02: { tipo: "narracao", texto: "Ele não fala mais nada. Mas não liga a moto. Fica ali, parado, olhando para ela, até ela atravessar a rua. E, quando ela olha para trás na esquina, ele ainda está olhando.", proxima: "r2b_esc" },

    // ▶ ESCOLHA — Rota Blake (sexta)
    r2b_esc: { escolhas: [
      { texto: "A. “Blake. Desde o festival... eu também.” E não terminar.", proxima: "r2b_a1", pontos: { blake: 3 }, flags: ["Tambem_festival_Blake"] },
      { texto: "B. “Guarda o desenho dos gêmeos pra mim. Eu quero ver segunda.”", proxima: "r2b_b1", pontos: { blake: 2 }, flags: ["Desenho_segunda"] },
      { texto: "C. Bater no ombro dele, igual o Kaito faz. Ele não sai do lugar.", proxima: "r2b_c1", pontos: { blake: 2 }, flags: ["Ombro_Blake_portao"] }
    ]},
    r2b_a1: { tipo: "narracao", texto: "Ele fica completamente parado. O Blake, que já é parado, fica mais parado. Como estátua.", proxima: "r2b_a2" },
    r2b_a2: { quem: "blake", sprite: "blake", texto: "...Também o quê?", proxima: "r2b_a3" },
    r2b_a3: { quem: "eu", texto: "Eu termino quando você terminar a sua.", proxima: "r2b_a4" },
    r2b_a4: { tipo: "narracao", texto: "Ele olha para ela. Abre a boca. Fecha. E sorri. O sorriso raro. O que deixa tudo mais claro.", proxima: "r2b_a5" },
    r2b_a5: { quem: "blake", sprite: "blake", texto: "Então volta. Pra gente terminar.", proxima: "c4_01" },
    r2b_b1: { quem: "blake", sprite: "blake", texto: "Guardo. Eles desenharam você de capa. Voando.", proxima: "r2b_b2" },
    r2b_b2: { quem: "eu", texto: "Eu não voo.", proxima: "r2b_b3" },
    r2b_b3: { quem: "blake", sprite: "blake", texto: "Pra eles voa.", proxima: "c4_01" },
    r2b_c1: { tipo: "narracao", texto: "Ela bate no ombro dele. Ele não sai do lugar. Ele bate de volta, de leve, no ombro dela. Ela não sai do lugar. Eles se olham.", proxima: "r2b_c2" },
    r2b_c2: { quem: "blake", sprite: "blake", texto: "Um a um.", proxima: "r2b_c3" },
    r2b_c3: { quem: "eu", texto: "Isso não conta.", proxima: "r2b_c4" },
    r2b_c4: { quem: "blake", sprite: "blake", texto: "Pra mim conta.", proxima: "c4_01" },

    // ---------- Rota Ryuji (sexta) ----------
    r2r_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", sprite: "ryuji", texto: "No portão, a Relâmpago está estacionada torta, com o farol consertado. O Ryuji está sentado no banco dela, de faixa na testa, com um walkie-talkie de brinquedo em cada mão.", proxima: "r2r_cam" },
    r2r_cam: { caminhos: [
      { flag: "Ultimo_andar_rota_fora", proxima: "r2r_fora_01" },
      { flag: "Contou_rota_quinta", proxima: "r2r_fora_01" }
    ], proxima: "r2r_nao_01" },
    r2r_fora_01: { quem: "ryuji", sprite: "ryuji", texto: "Equipamento profissional. Da Momo. Pega um. Funciona até cem metros. O estacionamento tem oitenta. Eu medi no mapa.", proxima: "r2r_fora_02" },
    r2r_fora_02: { quem: "eu", texto: "Ryuji. É um walkie-talkie de brinquedo. De porquinho rosa.", proxima: "r2r_fora_03" },
    r2r_fora_03: { quem: "ryuji", sprite: "ryuji", texto: "É um walkie-talkie de porquinho que funciona. Você aperta o botão e fala “Relâmpago”. Se eu ouvir “Relâmpago”, eu chamo todo mundo em trinta segundos.", proxima: "r2r_esc" },
    r2r_nao_01: { quem: "ryuji", sprite: "ryuji", texto: "O jornal continua suspenso. Mas eu trouxe isso. Por via das dúvidas. Não pergunta.", proxima: "r2r_nao_02" },
    r2r_nao_02: { tipo: "narracao", texto: "Ele coloca o walkie-talkie de brinquedo na mão dela. Rosa. Com um desenho de porquinho. Ele não sabe de nada. Mas o jornal escuta tudo.", proxima: "r2r_esc" },

    // ▶ ESCOLHA — Rota Ryuji (sexta)
    r2r_esc: { escolhas: [
      { texto: "A. Apertar o botão e falar no walkie-talkie, do lado dele: “Relâmpago.” Só pra testar.", proxima: "r2r_a1", pontos: { ryuji: 3 }, flags: ["Teste_relampago"] },
      { texto: "B. “Quando eu estiver com medo lá em cima, eu vou pensar em você subindo a torre.”", proxima: "r2r_b1", pontos: { ryuji: 3 }, flags: ["Medo_torre_Ryuji"] },
      { texto: "C. Arrumar a faixa torta na testa dele.", proxima: "r2r_c1", pontos: { ryuji: 2 }, flags: ["Faixa_Ryuji"] }
    ]},
    r2r_a1: { tipo: "narracao", texto: "Ela aperta. Fala. O walkie-talkie da mão dele chia. “...Relâmpago.” Ele pula do banco da moto como se tivesse levado um choque.", proxima: "r2r_a2" },
    r2r_a2: { quem: "ryuji", sprite: "ryuji", texto: "ISSO É PRA EMERGÊNCIA! EU QUASE LIGUEI PRA MINHA MÃE!", proxima: "r2r_a3" },
    r2r_a3: { quem: "eu", texto: "Agora você sabe que funciona.", proxima: "r2r_a4" },
    r2r_a4: { quem: "ryuji", sprite: "ryuji", texto: "...Agora eu sei que funciona. E agora eu sei que você tem uma voz linda no walkie-talkie. Esquece que eu falei isso.", proxima: "c4_01" },
    r2r_b1: { tipo: "narracao", texto: "O Ryuji para de mexer no walkie-talkie. Fica olhando para ela.", proxima: "r2r_b2" },
    r2r_b2: { quem: "ryuji", sprite: "ryuji", texto: "Então pensa em mim vomitando na escada no primeiro ano. Que é mais engraçado. Medo não aguenta coisa engraçada.", proxima: "r2r_b3" },
    r2r_b3: { tipo: "narracao", texto: "Ele fala isso rindo. Mas a mão dele aperta o walkie-talkie com força. E ele não solta o olhar dela.", proxima: "c4_01" },
    r2r_c1: { tipo: "narracao", texto: "Ela arruma a faixa. Ele fica muito quieto. O Ryuji. Quieto. Com as orelhas vermelhas e o walkie-talkie de porquinho na mão.", proxima: "r2r_c2" },
    r2r_c2: { quem: "ryuji", sprite: "ryuji", texto: "...Ninguém arruma a minha faixa. Eu arrumo sozinho. Torto.", proxima: "r2r_c3" },
    r2r_c3: { quem: "eu", texto: "Agora está reta.", proxima: "r2r_c4" },
    r2r_c4: { quem: "ryuji", sprite: "ryuji", texto: "Agora está reta. Eu vou dormir com ela assim.", proxima: "c4_01" },

    // ---------- Rota Victor (sexta) ----------
    r2v_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", sprite: "victor", texto: "No portão, a moto cheia de adesivo está parada. Ligada. Soltando estalo. Pá. O Victor, sem capacete, de pirulito, com um pote de feijoada embrulhado em pano na garupa.", proxima: "r2v_cam" },
    r2v_cam: { caminhos: [
      { flag: "Ultimo_andar_rota_fora", proxima: "r2v_fora_01" },
      { flag: "Contou_rota_quinta", proxima: "r2v_fora_01" }
    ], proxima: "r2v_nao_01" },
    r2v_fora_01: { quem: "victor", sprite: "victor", texto: "Rampa. Motor ligado. Eu já disse. A minha mãe mandou feijoada pra depois. Ela disse “quem enfrenta Sakuma tem que comer feijão”.", proxima: "r2v_fora_02" },
    r2v_fora_02: { quem: "eu", texto: "Você contou pra sua mãe?", proxima: "r2v_fora_03" },
    r2v_fora_03: { quem: "victor", sprite: "victor", texto: "Eu não conto nada pra minha mãe. Ela descobre. Ela é pior que a Hana.", proxima: "r2v_esc" },
    r2v_nao_01: { quem: "victor", sprite: "victor", texto: "A minha mãe mandou feijoada. De novo. Ela disse que você está magra. De novo. Fica aqui na garupa até você pegar.", proxima: "r2v_nao_02" },
    r2v_nao_02: { tipo: "narracao", texto: "Ele não sabe de nada. Mas, quando ela pega o pote, ele segura o pulso dela por um segundo. Olha nos olhos dela. O Victor, que não para quieto, parado.", proxima: "r2v_nao_03" },
    r2v_nao_03: { quem: "victor", sprite: "victor", texto: "Sexta. Último andar. Eu não esqueci. Eu só não vou perguntar.", proxima: "r2v_esc" },

    // ▶ ESCOLHA — Rota Victor (sexta)
    r2v_esc: { escolhas: [
      { texto: "A. Tirar o pirulito da boca dele e colocar na própria. “Pra dar sorte.”", proxima: "r2v_a1", pontos: { victor: 3 }, flags: ["Pirulito_sorte"] },
      { texto: "B. “Guarda a feijoada. Eu como depois. Com você. E com a sua mãe.”", proxima: "r2v_b1", pontos: { victor: 3 }, flags: ["Feijoada_depois"] },
      { texto: "C. Engatar o mindinho no dele. Sem falar nada.", proxima: "r2v_c1", pontos: { victor: 2 }, flags: ["Mindinho_sexta"] }
    ]},
    r2v_a1: { tipo: "narracao", texto: "Ela tira o pirulito da boca dele. Coloca na dela. Ele fica de boca aberta. Literalmente. Sem pirulito, com a boca aberta, olhando para ela.", proxima: "r2v_a2" },
    r2v_a2: { quem: "victor", sprite: "victor", texto: "...Isso foi o beijo indireto mais violento da história dessa escola.", proxima: "r2v_a3" },
    r2v_a3: { quem: "eu", texto: "É de morango. Eu achei que era de uva.", proxima: "r2v_a4" },
    r2v_a4: { quem: "victor", sprite: "victor", texto: "Era o meu último de morango. Agora você me deve um. Juros.", proxima: "c4_01" },
    r2v_b1: { quem: "victor", sprite: "victor", texto: "Com a minha mãe? Ela vai fazer outra. Ela vai fazer duas. Ela vai convidar a rua inteira.", proxima: "r2v_b2" },
    r2v_b2: { quem: "eu", texto: "Então eu volto com fome.", proxima: "r2v_b3" },
    r2v_b3: { quem: "victor", sprite: "victor", texto: "Volta. Com fome ou sem fome. Mas volta.", proxima: "c4_01" },
    r2v_c1: { tipo: "narracao", texto: "Ela engata o mindinho no dele. Ele aperta. Não fala nada. Não faz piada. O estalo da moto continua. Pá. Pá.", proxima: "r2v_c2" },
    r2v_c2: { quem: "victor", sprite: "victor", texto: "Agora você também tem que voltar de tudo. É a regra do mindinho. Não tem exceção.", proxima: "c4_01" },

    /* =================== CENA 4 — ÚLTIMO ANDAR =================== */
    // Cenário: estacionamento do shopping, último andar, sexta, 18h58 (usa "beco-mercado"). Música: corta. Só vento.
    c4_01: { roupa: "fora", tipo: "narracao", cenario: "frente-shopping", transicao: "tempo", legenda: "Sexta, 18h40 — Cena 4", sprite: null, texto: "Seis e quarenta. A entrada do shopping. Do lado da loja de relógio, onde ela viu o homem de terno segurando o braço da Sayuri, semanas atrás.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", sprite: "sayuri", texto: "A Sayuri já está lá. Sem o laço rosa. Com o cabelo preso de qualquer jeito, um moletom grande demais e o elástico preto no pulso. Ela vê a SN chegar. Não sorri. Mas endireita as costas.", proxima: "c4_03" },
    c4_03: { quem: "sayuri", sprite: "sayuri", texto: "Você ainda pode ir embora.", proxima: "c4_04" },
    c4_04: { quem: "eu", texto: "Você também.", proxima: "c4_05" },
    c4_05: { quem: "sayuri", sprite: "sayuri", texto: "...Eu não vou.", proxima: "c4_06" },
    c4_06: { quem: "eu", texto: "Eu também não.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", cenario: "estacionamento-topo", transicao: "tempo", texto: "O elevador do estacionamento é velho. Cheira a ferrugem e a desinfetante. Os números vão acendendo. Dois. Três. Quatro. Cinco. As duas lado a lado, sem falar, olhando para a porta de metal.", proxima: "c4_cam1" },
    c4_cam1: { caminhos: [
      { flag: "Ultimo_andar_rota_fora", proxima: "c4_rota_fora" },
      { flag: "Ultimo_andar_Hana_sabe", proxima: "c4_hana" }
    ], proxima: "c4_08" },
    c4_rota_fora: { tipo: "pensamento", texto: "Três andares abaixo, alguém está esperando. Olhando a rampa. Contando os minutos. Eu não estou sozinha. Ele só não sabe disso.", proxima: "c4_08" },
    c4_hana: { tipo: "narracao", texto: "No celular, uma mensagem da Hana, de um minuto atrás: “18h58. Cronômetro ligado. 32 minutos.”", proxima: "c4_08" },
    c4_08: { tipo: "narracao", texto: "Sete. A porta abre.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "O último andar do estacionamento não tem teto. É só cimento, vento, e o céu roxo da hora em que o sol já foi e a noite ainda não chegou. As luzes dos postes estão acendendo uma por uma. Quase não tem carro.", proxima: "c4_10" },
    c4_10: { tipo: "narracao", sprite: null, texto: "No fundo, perto da grade que dá para a cidade, o carro preto. Parado. O retrovisor do lado do motorista ainda torto. Encostado nele, o de anel. Ele vê a SN sair do elevador. E dá um passo para trás. Contra o próprio carro.", proxima: "c4_11" },
    c4_11: { tipo: "narracao", texto: "Ela anda. A Sayuri anda do lado dela. O barulho dos tênis no cimento. O vento.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", texto: "E, na grade, de costas para elas, olhando a cidade lá embaixo, de uniforme da escola, com as mãos nos bolsos, alguém está esperando.", proxima: "c4_13" },
    c4_13: { tipo: "narracao", texto: "Ele não vira quando elas chegam. Ele espera elas pararem. A três metros. Aí ele vira. Devagar. Como quem tem todo o tempo do mundo.", proxima: "c4_14" },
    c4_14: { tipo: "narracao", sprite: "ren", texto: "O Ren. O mesmo uniforme impecável. O mesmo sorriso educado do primeiro dia de aula. Na mão, um peão preto de plástico. Com uma lasca na base.", proxima: "c4_15" },
    c4_15: { tipo: "narracao", texto: "Do lado da SN, a Sayuri para de respirar. Ela conhece esse rosto. Da sala de aula. Da carteira perto da porta. Ela nunca soube.", proxima: "c4_16" },
    c4_16: { quem: "sayuri", sprite: "sayuri", texto: "...Você?", proxima: "c4_17" },
    c4_17: { tipo: "narracao", texto: "O Ren não olha para a Sayuri. Nem um segundo. Ele olha para a SN.", proxima: "c4_18" },
    c4_18: { quem: "ren", sprite: "ren", efeito: "eco", texto: "Boa noite.", proxima: "c4_19" },
    c4_19: { tipo: "pensamento", texto: "Finalmente.", proxima: "ep_fim" },

    // Fim do Capítulo 28 (crie a entrada "capitulo28" em dados/capitulos.js). A conversa no último andar é no Capítulo 29.
    ep_fim: { fim: "capitulo28" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 29 (anotações do roteiro)
 *  • O ÚLTIMO ANDAR: o Ren em pessoa. A Sayuri descobre que o "filho do patrão" é o colega de sala.
 *    O de anel no carro. A conversa acontece no 29. (Lembrete: o Ren é vilão inteligente, fala pouco,
 *    não conta o plano. Ele quer alguma coisa da SN. Talvez ele goste dela, do jeito do Kisaki.)
 *  • Quem sabe onde ela está:
 *      Ultimo_andar_sozinha → ninguém (só a Sayuri).
 *      Ultimo_andar_rota_fora → o menino da rota, no andar de baixo.
 *      Ultimo_andar_Hana_sabe → a Hana, com cronômetro de 32 minutos.
 *    (Contou_rota_quinta também faz o menino da rota saber e ficar por perto.)
 *  • ROTA: cada menino teve um momento na quinta e um na sexta. No 29, o menino da rota deve aparecer
 *    depois do último andar (ou entrar, se ela demorar).
 *  • Bilhete em papel caro, letra de caneta-tinteiro. Desenho de peão. "A do caderno de gatinho."
 *  • A Mio sabe que é "com a Sayuri" (Mio_sabe_Sayuri) ou deu o sorvete de limão (Mio_limao).
 *  • A Reina deu o sexto pudim rachado. "Volta. Senão eu fico sem rival."
 *
 * ESCOLHAS DO CAPÍTULO
 *  Rota — quinta (1 escolha por rota) · 1 Como ir para o último andar · 2 A Mio quer saber
 *  Rota — sexta (1 escolha por rota)
 *
 * FLAGS NOVAS
 *  Contou_rota_quinta · Guardou_rota_quinta · Chaveiro_cebolinha · Mao_desenho_Takeo · Saco_Blake
 *  Cola_Ryuji · Fisica_antes_Victor · Ultimo_andar_sozinha · Ultimo_andar_rota_fora
 *  Ultimo_andar_Hana_sabe · Mio_segunda_conta · Mio_sabe_Sayuri · Mio_limao · Mao_capacete_Kaito
 *  Promessa_contar_tudo_Kaito · Moto_heranca · Abraco_madeira · Nome_assento · Takeo_nao_entra
 *  Tambem_festival_Blake · Desenho_segunda · Ombro_Blake_portao · Teste_relampago · Medo_torre_Ryuji
 *  Faixa_Ryuji · Pirulito_sorte · Feijoada_depois · Mindinho_sexta
 */