/*
 * =====================================================================
 *  CAPÍTULO 35 — Serena
 *  Quarta-feira, logo depois do Capítulo 34.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Cenas com os cinco meninos em TODAS as rotas. Bloco de rota à noite.
 *
 *  O QUE ACONTECE
 *    • Manhã: o Kaito busca a SN de moto, como todo dia. Os dois estão esquisitos por causa do "beijo"
 *      de um segundo no hall. Ninguém fala disso. Todo mundo percebe.
 *    • Escola: o Takeo (mesma sala) percebe que ela está no mundo da lua.
 *    • Intervalo: a Serena, a menina do segundo ano que encarou a SN no portão, vai falar com ela.
 *      Brava porque o Kaito só dá atenção para a SN. Intimidadora. A SN não abaixa a cabeça.
 *    • Depois: o Blake viu de longe. O Victor conta que levou dois foras da Serena. O Ryuji pede para ela
 *      ler os cartões do curso de bombeiro.
 *    • Saída: o Kaito espera a SN no portão, na frente da Serena. Ele quase fala do hall. Quase.
 *    • Noite: bloco de rota.
 *
 *  REGRAS
 *    • Sala da SN: Takeo, Mio, Hana, Reina, Ren, Akane. Kaito, Blake, Ryuji, Victor e Serena são de outras salas.
 *    • O Kaito busca a SN de moto todo dia e deixa ela na frente da escola.
 *    • Sem xadrez no Ren. O Ren não manda mensagem.
 *    • Gangue não entra na escola.
 *
 *  PERSONAGENS
 *    Mio, Hana, Reina, Akane, Kaito, Takeo, Victor, Blake, Ryuji, Ren, Tio do Kaito, Caramelo.
 *    NOVA (já tem imagem): Serena — segundo ano, outra sala, gosta do Kaito desde o primeiro ano.
 *    Sem nome / rótulo: Amiga da Serena.
 *
 *  CENÁRIOS
 *    Hall do prédio → "apartamento" · Escola: saida-colegio, sala-de-aula, corredor, patio-fundos, vestiario
 *    Lojinha / rua → "beco-mercado" · Quarto da SN → "quarto-sn"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Rota_*, Cilio_Kaito, Cintura_Kaito, Amorteceu_Kaito, Decimo_andar, Espirro_gatinho.
 *
 *  Crie a entrada "capitulo35" em dados/capitulos.js e o sprite "serena".
 */
Roteiro.registrar("capitulo35", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — UM SEGUNDO =================== */
    // Cenário: quarto da SN e hall do prédio, quarta cedo. Música: leve, meio nervosa.
    c1_01: { roupa: "escolar", tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Quarta, 6h30 — Cena 1", sprite: null, texto: "Quarta-feira. Ela acordou antes do despertador, e não foi por causa do Ren, nem da lojinha, nem de nada importante. Foi por causa de um segundo. Um segundo no chão do hall, que ela repassou umas quarenta vezes na cabeça antes de dormir e mais umas vinte agora, olhando para o teto.", proxima: "c1_02" },
    c1_02: { tipo: "pensamento", texto: "Foi sem querer. Foi a queda. Bocas encostam em quedas. É física. A Hana deve ter uma tabela sobre isso.", proxima: "c1_03" },
    c1_03: { tipo: "pensamento", texto: "Eu tenho vinte e oito anos por dentro. Eu já beijei gente. De verdade, de propósito. E nenhum desses beijos me deixou acordada às seis e meia da manhã por causa de um segundo.", proxima: "c1_04" },
    c1_04: { tipo: "narracao", texto: "Às sete em ponto, o celular vibra. Não precisa nem olhar. Ela olha mesmo assim.", proxima: "c1_05" },
    c1_05: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Tô embaixo.", proxima: "c1_06" },
    c1_06: { tipo: "pensamento", texto: "Duas palavras. Todo dia ele manda “Tô embaixo, desce”, ou “Tô embaixo, o tio mandou pão”. Hoje é só “Tô embaixo”. Ele também está esquisito.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", sprite: "kaito", texto: "No hall, ele está no mesmo lugar de sempre, no pé dos três degraus de granito, do lado da caixa de correio, com o capacete vermelho dela no braço. Só que hoje ele está olhando fixo para a caixa de correio, como se ela fosse muito interessante.", proxima: "c1_08" },
    c1_08: { tipo: "narracao", texto: "Nos degraus, tem uma fita preta nova, antiderrapante, colada em cada borda. Novinha. Brilhando.", proxima: "c1_09" },
    c1_09: { quem: "eu", texto: "O síndico colocou a fita.", proxima: "c1_10" },
    c1_10: { quem: "kaito", texto: "Colocou.", proxima: "c1_11" },
    c1_11: { quem: "eu", texto: "Rápido, né.", proxima: "c1_12" },
    c1_12: { quem: "kaito", texto: "Eu levei a fita pra ele ontem à noite. Depois do caldo. Ele colou na hora porque eu fiquei esperando.", proxima: "c1_13" },
    c1_13: { tipo: "narracao", texto: "Ele fala isso para a caixa de correio. Ela desce os três degraus devagar, pisando bem em cima da fita preta, um por um, e ele acompanha cada passo com o canto do olho, com o corpo meio virado, pronto para segurar.", proxima: "c1_14" },
    c1_14: { tipo: "narracao", texto: "Ela chega embaixo sem tropeçar. Os dois ficam parados, um na frente do outro, no mesmo lugar exato do chão onde ontem os dois estavam deitados. Os dois olham para o chão ao mesmo tempo. Os dois percebem que estão olhando para o chão ao mesmo tempo.", proxima: "c1_15" },
    c1_15: { quem: "kaito", texto: "...Capacete.", proxima: "c1_16" },
    c1_16: { tipo: "narracao", texto: "Ele estende o capacete. Ela pega. Os dedos encostam. Ele solta tão rápido que o capacete quase cai, e os dois tentam pegar ao mesmo tempo, e as mãos se batem no ar, e o capacete cai mesmo assim, quicando no granito com um barulho oco.", proxima: "c1_17" },
    c1_17: { quem: "eu", texto: "A gente é muito ruim com esse hall.", proxima: "c1_18" },
    c1_18: { tipo: "narracao", texto: "O Kaito ri. Pelo nariz, curto, sem querer. E aí olha para ela, de verdade, pela primeira vez na manhã, e para de rir no meio, e desvia de novo.", proxima: "c1_cam_ont" },
    c1_cam_ont: { caminhos: [
      { flag: "Cilio_Kaito", proxima: "c1_cilio" },
      { flag: "Cintura_Kaito", proxima: "c1_cintura" }
    ], proxima: "c1_19" },
    c1_cilio: { tipo: "pensamento", texto: "Ontem ele fechou os olhos quando eu tirei o cílio. Ele disse que já tinha feito o pedido. Eu fiquei a noite inteira pensando no que ele pediu.", proxima: "c1_19" },
    c1_cintura: { tipo: "pensamento", texto: "Ontem ele tirou as mãos da minha cintura como quem se rende. Hoje ele está guardando as mãos nos bolsos da jaqueta, como se elas fossem fazer alguma coisa sozinhas.", proxima: "c1_19" },
    c1_19: { tipo: "narracao", cenario: "rua", transicao: "tempo", sprite: null, texto: "No caminho, na garupa, ela segura na camisa dele, como sempre. Não na cintura, como ontem. No primeiro sinal vermelho, ele fala alguma coisa, mas o capacete abafa.", proxima: "c1_20" },
    c1_20: { quem: "eu", texto: "O quê?", proxima: "c1_21" },
    c1_21: { quem: "kaito", texto: "Nada. Eu falei que o sinal está vermelho.", proxima: "c1_22" },
    c1_22: { tipo: "pensamento", texto: "Ele não falou que o sinal está vermelho. Eu ouvi um pedaço. Eu ouvi “ontem”.", proxima: "c1_23" },
    c1_23: { tipo: "narracao", cenario: "saida-colegio", sprite: "serena", texto: "Na frente da escola, ele para no meio-fio do portão, como sempre. O portão está cheio. E, encostada no muro, no mesmo lugar de ontem, com o cabelo comprido e a mochila cheia de chaveiro, está a menina. Ela não está olhando para o Kaito. Está olhando para a SN. De novo.", proxima: "c1_24" },
    c1_24: { tipo: "narracao", texto: "Só que hoje, quando a SN desce da moto, a menina desencosta do muro. Fala alguma coisa para a amiga do lado. E sorri. Um sorriso que não tem nada de simpático.", proxima: "c1_25" },
    c1_25: { tipo: "pensamento", texto: "Ah, não. Ela vai fazer alguma coisa.", proxima: "c1_26" },
    c1_26: { sprite: "kaito", quem: "kaito", texto: "Bom dia de aula.", proxima: "c1_27" },
    c1_27: { quem: "eu", texto: "“Bom dia de aula”? Kaito, quem fala “bom dia de aula”?", proxima: "c1_28" },
    c1_28: { quem: "kaito", texto: "...Eu. Hoje. Eu falo.", proxima: "c1_29" },
    c1_29: { tipo: "narracao", texto: "Ele coloca o capacete de volta tão rápido que bate a viseira no nariz, e vai estacionar a moto do outro lado da rua como quem foge de um incêndio.", proxima: "c2_01" },

    /* =================== CENA 2 — NO MUNDO DA LUA (Takeo) =================== */
    // Cenário: sala de aula, primeiras aulas. Música: leve.
    c2_01: { tipo: "narracao", cenario: "sala-de-aula", transicao: "tempo", legenda: "Primeira aula — Cena 2", sprite: null, texto: "Na sala, a aula de português é sobre figuras de linguagem. A professora escreve no quadro “hipérbole” e dá exemplos. A SN copia tudo no caderno, e quando olha para a página no fim da aula, vê que escreveu “hipérbole” três vezes e, embaixo, sem perceber, desenhou um degrau.", proxima: "c2_02" },
    c2_02: { tipo: "narracao", sprite: "takeo:machucado", texto: "Da carteira de trás, o Takeo cutuca o ombro dela com a mão boa.", proxima: "c2_03" },
    c2_03: { quem: "takeo", sprite: "takeo:machucado", texto: "A professora te chamou duas vezes. Você respondeu “fita preta”.", proxima: "c2_04" },
    c2_04: { quem: "eu", texto: "Eu respondi o quê?", proxima: "c2_05" },
    c2_05: { quem: "takeo", sprite: "takeo:machucado", texto: "“Fita preta.” A pergunta era qual era o exemplo de metáfora. A Reina quase caiu da cadeira de rir.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", texto: "Na frente, a Reina vira e faz um sinal de positivo para ela, com uma cara de deboche tão perfeita que deve ter sido treinada no espelho.", proxima: "c2_07" },
    c2_07: { quem: "takeo", sprite: "takeo:machucado", texto: "Você está no mundo da lua desde que entrou. Você está bem? Você não bateu a cabeça em algum lugar, né?", proxima: "c2_08" },
    c2_08: { tipo: "pensamento", texto: "Bater, eu não bati. Mas teve um hall, um degrau e um segundo. Isso não dá pra explicar pro Takeo.", proxima: "c2_09" },
    c2_09: { quem: "takeo", sprite: "takeo:machucado", texto: "Porque se você bateu a cabeça, você tem que observar por vinte e quatro horas. A minha avó me observou a noite inteira depois que eu apanhei. Ela sentou do lado da cama com uma lanterna.", proxima: "c2_esc1" },

    // ▶ ESCOLHA 1 — Com o Takeo
    c2_esc1: { escolhas: [
      { texto: "A. “Eu não bati a cabeça. Eu só estou pensando em uma coisa idiota.”", proxima: "c2_1a_1", pontos: { takeo: 2 }, flags: ["Coisa_idiota"] },
      { texto: "B. “Então me observa você. Vinte e quatro horas. Sem lanterna.”", proxima: "c2_1b_1", pontos: { takeo: 3 }, flags: ["Observa_Takeo"] },
      { texto: "C. Virar pra trás e dar um peteleco na testa dele, de leve. “Viu? Reflexo perfeito.”", proxima: "c2_1c_1", pontos: { takeo: 2 }, flags: ["Peteleco_Takeo"] }
    ]},
    c2_1a_1: { quem: "eu", texto: "Eu não bati a cabeça. Eu só estou pensando em uma coisa idiota.", proxima: "c2_1a_2" },
    c2_1a_2: { quem: "takeo", sprite: "takeo:machucado", texto: "Coisa idiota de que tipo? Tipo prova? Tipo cachorro no armário?", proxima: "c2_1a_3" },
    c2_1a_3: { quem: "eu", texto: "Tipo coisa idiota.", proxima: "c2_1a_4" },
    c2_1a_4: { tipo: "narracao", texto: "O Takeo olha para ela um tempo, com aquela cara de quem pesquisa jornal velho na biblioteca. Depois não pergunta mais. Mas, pelo resto da aula, ela sente que ele olha para a nuca dela de vez em quando, como quem tenta ler um livro fechado.", proxima: "c2_10" },
    c2_1b_1: { quem: "eu", texto: "Então me observa você. Vinte e quatro horas. Sem lanterna.", proxima: "c2_1b_2" },
    c2_1b_2: { tipo: "narracao", texto: "O Takeo abre a boca e não sai nada. Ele fica vermelho do pescoço até a faixa da cabeça, que ainda está lá, um pouco mais fina.", proxima: "c2_1b_3" },
    c2_1b_3: { quem: "takeo", sprite: "takeo:machucado", texto: "Vinte e quatro horas é muito tempo. Eu durmo. Eu tenho que dormir. Eu vou dormir te observando? Isso não...", proxima: "c2_1b_4" },
    c2_1b_4: { quem: "eu", texto: "Takeo. Foi piada.", proxima: "c2_1b_5" },
    c2_1b_5: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu sei. Eu sei que foi piada. Eu estou só... calculando a logística.", proxima: "c2_10" },
    c2_1c_1: { tipo: "narracao", texto: "Ela vira e dá um peteleco na testa dele, bem de leve, do lado do curativo. Ele pisca, assustado, e depois começa a rir, baixinho, com a mão na testa.", proxima: "c2_1c_2" },
    c2_1c_2: { quem: "eu", texto: "Viu? Reflexo perfeito. Cabeça ótima.", proxima: "c2_1c_3" },
    c2_1c_3: { quem: "takeo", sprite: "takeo:machucado", texto: "Isso prova que a minha cabeça está ótima, não a sua.", proxima: "c2_1c_4" },
    c2_1c_4: { quem: "eu", texto: "Detalhes.", proxima: "c2_10" },

    // (todas as opções continuam aqui)
    c2_10: { tipo: "narracao", sprite: "ren", texto: "Na carteira perto da porta, o Ren está lendo. Ele não olhou para ela quando ela entrou. Ela também não olhou para ele. Mas, quando o Takeo riu, ela viu, pelo canto do olho, a página do livro dele parar de virar.", proxima: "c2_11" },
    c2_11: { tipo: "pensamento", texto: "Ele escuta tudo. Ele escuta até quando finge que não está escutando.", proxima: "c3_01" },

    /* =================== CENA 3 — SERENA =================== */
    // Cenário: corredor do bloco A, intervalo. Música: baixo, tenso, mas com humor.
    c3_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Intervalo — Cena 3", sprite: null, texto: "No intervalo, ela vai sozinha até o banheiro do segundo andar, porque a Mio ficou na sala terminando um exercício e a Hana foi devolver um livro. O corredor do bloco A está quase vazio, só uns alunos do primeiro ano passando correndo.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "Ela está quase chegando na porta do banheiro quando três meninas aparecem do outro lado do corredor, andando juntas, devagar, ocupando a largura inteira. Uma no meio, duas do lado.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", sprite: "serena", texto: "A do meio é ela. A do muro. Cabelo comprido, liso, brilhando como em propaganda de xampu. Uniforme ajustado do jeito que a diretora proíbe e ninguém tem coragem de reclamar. Unhas feitas. A mochila cheia de chaveiro balançando. E a cara de quem nunca perdeu uma briga na vida.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", texto: "Elas param na frente da SN. A do meio dá mais um passo, sozinha, e fica perto, perto demais, olhando para ela de cima, porque é bem mais alta.", proxima: "c3_05" },
    c3_05: { quem: "serena", texto: "Oi. A gente não se conhece. Eu sou a Serena. Segundo ano, sala C.", proxima: "c3_06" },
    c3_06: { quem: "eu", texto: "Oi. Eu sou...", proxima: "c3_07" },
    c3_07: { quem: "serena", texto: "Eu sei quem você é. Todo mundo sabe quem você é agora. Você é a menina que chega na garupa do Kaito.", proxima: "c3_08" },
    c3_08: { tipo: "narracao", texto: "Ela fala isso sorrindo. O sorriso é bonito, perfeito, e não chega nem perto dos olhos.", proxima: "c3_09" },
    c3_09: { quem: "serena", texto: "Eu só quero entender uma coisa. Eu conheço o Kaito desde o primeiro ano. Desde o primeiro dia de aula. Ele nunca deu carona pra ninguém. Ele nunca olhou pra ninguém. Ele nunca nem lembrou o nome de ninguém.", proxima: "c3_10" },
    c3_10: { quem: "serena", texto: "Eu levei bolo de aniversário pra ele no primeiro ano. Ele agradeceu e deu pro Ryuji. Eu sentei do lado dele no ônibus da excursão. Ele dormiu a viagem inteira. Eu mandei mensagem no aniversário dele dois anos seguidos. Ele respondeu “valeu” nos dois.", proxima: "c3_11" },
    c3_11: { quem: "serena", texto: "E aí, do nada, esse ano, aparece você. Baixinha. Que ninguém conhecia. E ele busca você em casa todo dia. Todo dia. Ele leva você na frente da escola, na frente de todo mundo. Ontem ele olhou pra trás pra ver você entrar.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", texto: "A voz dela vai ficando mais baixa e mais dura a cada frase. As duas amigas atrás dela cruzam os braços. Uma delas mexe no celular, como se estivesse pronta para gravar.", proxima: "c3_13" },
    c3_13: { quem: "serena", texto: "Então eu vou perguntar uma vez só, e eu quero uma resposta de verdade. O que você é dele?", proxima: "c3_14" },
    c3_14: { tipo: "pensamento", texto: "Eu sou uma mulher de vinte e oito anos dentro de um corpo de dezesseis, sendo encurralada no corredor por uma menina de dezesseis por causa de um menino de dezesseis. Em algum lugar, a minha versão de vinte e oito está rindo muito disso.", proxima: "c3_15" },
    c3_15: { tipo: "pensamento", texto: "Mas ela também gosta dele de verdade. Desde o primeiro ano. Bolo de aniversário. Dois “valeu”. Isso não é pouca coisa.", proxima: "c3_esc2" },

    // ▶ ESCOLHA 2 — Com a Serena
    c3_esc2: { escolhas: [
      { texto: "A. Olhar pra cima, nos olhos dela, sem dar um passo pra trás. “Pergunta pra ele.”", proxima: "c3_2a_1", pontos: { kaito: 1 }, flags: ["Pergunta_pra_ele"] },
      { texto: "B. “A gente é amigo. Mas se você está esperando eu sair do caminho, pode sentar, que vai cansar em pé.”", proxima: "c3_2b_1", pontos: { kaito: 2 }, flags: ["Nao_sai_caminho"] },
      { texto: "C. “Bolo de aniversário no primeiro ano. Isso é bonito. De verdade. Ele é burro de não ter percebido.”", proxima: "c3_2c_1", pontos: {}, flags: ["Respeitou_Serena"] }
    ]},
    c3_2a_1: { tipo: "narracao", texto: "Ela não dá um passo para trás. Ela levanta o queixo e olha para a Serena, lá de baixo, sem piscar.", proxima: "c3_2a_2" },
    c3_2a_2: { quem: "eu", texto: "Pergunta pra ele.", proxima: "c3_2a_3" },
    c3_2a_3: { quem: "serena", texto: "Eu estou perguntando pra você.", proxima: "c3_2a_4" },
    c3_2a_4: { quem: "eu", texto: "E eu estou dizendo que quem sabe o que eu sou dele é ele. Eu não respondo pelo Kaito. Ninguém responde pelo Kaito. Você conhece ele desde o primeiro ano, você devia saber disso melhor que eu.", proxima: "c3_2a_5" },
    c3_2a_5: { tipo: "narracao", texto: "A Serena fica parada. Pela primeira vez, o sorriso dela vacila, só um pouquinho, no canto. Ela não esperava resposta. Esperava choro, ou desculpa, ou alguém abaixando a cabeça.", proxima: "c3_16" },
    c3_2b_1: { quem: "eu", texto: "A gente é amigo.", proxima: "c3_2b_2" },
    c3_2b_2: { quem: "serena", texto: "Amigo. Tá.", proxima: "c3_2b_3" },
    c3_2b_3: { quem: "eu", texto: "Mas se você está esperando eu sair do caminho pra você passar, pode sentar, porque vai cansar em pé.", proxima: "c3_2b_4" },
    c3_2b_4: { tipo: "narracao", texto: "Uma das amigas da Serena solta um “uuuh” baixinho, sem querer, e tapa a boca. A Serena vira a cabeça devagar para ela, e a amiga para de respirar.", proxima: "c3_2b_5" },
    c3_2b_5: { tipo: "narracao", texto: "Quando a Serena vira de volta, o sorriso sumiu. Agora é só a cara. Bonita, dura, com os olhos apertados, medindo a SN de cima a baixo como se fosse pela primeira vez.", proxima: "c3_16" },
    c3_2c_1: { quem: "eu", texto: "Bolo de aniversário no primeiro ano. Isso é bonito. De verdade.", proxima: "c3_2c_2" },
    c3_2c_2: { quem: "eu", texto: "Ele é burro de não ter percebido. O Kaito é burro pra essas coisas. Ele não percebe nada que não seja panela ou briga.", proxima: "c3_2c_3" },
    c3_2c_3: { tipo: "narracao", texto: "A Serena pisca. Abre a boca. Fecha. Ela veio preparada para uma guerra e alguém acabou de oferecer um guarda-chuva.", proxima: "c3_2c_4" },
    c3_2c_4: { quem: "serena", texto: "...Não fala dele assim. Você nem conhece ele direito.", proxima: "c3_2c_5" },
    c3_2c_5: { tipo: "narracao", texto: "Ela fala isso mais baixo, e por um segundo a SN vê embaixo da Serena intimidadora uma menina que levou um bolo e viu ele ir parar na mão do Ryuji. Depois some. A Serena endireita as costas de novo.", proxima: "c3_16" },

    // (todas as opções continuam aqui)
    c3_16: { quem: "serena", texto: "Escuta aqui. Eu não sei de onde você saiu. Eu não sei o que você fez pra ele. Mas eu estou de olho em você. Todo dia. No portão. No intervalo. Na saída.", proxima: "c3_17" },
    c3_17: { tipo: "narracao", texto: "Ela dá mais um passo. Agora está tão perto que a SN sente o perfume dela, doce, caro, e vê que o rímel dela está perfeito, sem nenhum borrão.", proxima: "c3_18" },
    c3_18: { quem: "serena", texto: "E se você machucar ele, de qualquer jeito, eu fico sabendo. Eu sempre fico sabendo.", proxima: "c3_19" },
    c3_19: { tipo: "pensamento", texto: "“Se você machucar ele.” Ela veio me ameaçar e, no meio da ameaça, está protegendo ele. Que menina esquisita. Eu quase gosto dela.", proxima: "c3_20" },
    c3_20: { quem: "eu", texto: "Eu não vou machucar ele.", proxima: "c3_21" },
    c3_21: { quem: "serena", texto: "Ótimo. Então a gente vai se dar muito bem. Ou muito mal. Depende de você.", proxima: "c3_22" },
    c3_22: { tipo: "narracao", texto: "Ela vira, joga o cabelo comprido por cima do ombro, e o cabelo passa a dois centímetros do rosto da SN. As amigas vão atrás. As três somem pela escada, os chaveiros da mochila balançando, e o corredor fica em silêncio.", proxima: "c3_23" },
    c3_23: { tipo: "narracao", sprite: null, texto: "A SN fica parada na porta do banheiro. Respira fundo uma vez.", proxima: "c3_24" },
    c3_24: { tipo: "pensamento", texto: "Eu encarei doze da Midorata num fliperama. Eu encarei o Ren no oitavo andar de um prédio sem parede. E o meu coração está batendo mais rápido agora do que em qualquer um desses.", proxima: "c3_25" },
    c3_25: { tipo: "pensamento", texto: "Não é medo dela. É a parte do “ele nunca olhou pra ninguém”.", proxima: "c4_01" },

    /* =================== CENA 4 — O BANCO (Blake e Victor) =================== */
    // Cenário: pátio dos fundos, resto do intervalo. Música: violão.
    c4_01: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Cena 4", sprite: "blake", texto: "Ela desce para o pátio dos fundos. No banco de concreto do lado da árvore torta, o Blake está sentado com a lancheira térmica azul aberta no colo, comendo o segundo sanduíche. Ele levanta os olhos quando ela chega e chega para o lado, abrindo espaço, sem falar nada.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", texto: "Ela senta. Ele estende metade de um sanduíche de frango para ela, sem perguntar. Ela pega.", proxima: "c4_03" },
    c4_03: { quem: "blake", texto: "Serena.", proxima: "c4_04" },
    c4_04: { quem: "eu", texto: "Você viu?", proxima: "c4_05" },
    c4_05: { quem: "blake", texto: "Da escada. Eu ia subir. Eu vi as três paradas na sua frente e fiquei esperando. Se ela encostasse em você, eu subia.", proxima: "c4_06" },
    c4_06: { quem: "eu", texto: "E se eu encostasse nela?", proxima: "c4_07" },
    c4_07: { quem: "blake", texto: "Aí eu subia pra salvar ela.", proxima: "c4_08" },
    c4_08: { tipo: "narracao", texto: "Ele fala isso sério, e ela ri com o sanduíche na boca, e ele quase ri também, com o canto da boca, do jeito novo dele.", proxima: "c4_09" },
    c4_09: { quem: "blake", texto: "Ela é assim com todo mundo que chega perto dele. No primeiro ano, uma menina do terceiro emprestou um caderno pro Kaito. Na semana seguinte, a menina pediu transferência de turno.", proxima: "c4_10" },
    c4_10: { quem: "eu", texto: "Por causa da Serena?", proxima: "c4_11" },
    c4_11: { quem: "blake", texto: "Ninguém sabe. Ninguém pergunta. É mais seguro.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", texto: "Ele come o resto do sanduíche em duas mordidas, olhando para a árvore torta. Depois fala, mais baixo, sem virar para ela.", proxima: "c4_13" },
    c4_13: { quem: "blake", texto: "O Kaito está esquisito desde ontem. Ele colocou sal no café hoje de manhã. Ele não colocou sal no café, ele colocou o café no sal. Eu não sei explicar. O tio teve que limpar.", proxima: "c4_14" },
    c4_14: { tipo: "narracao", texto: "Ele não pergunta por que o Kaito está esquisito. Mas olha para ela de lado, um segundo, do jeito de quem sabe que a resposta está sentada no banco do lado dele.", proxima: "c4_esc3" },

    // ▶ ESCOLHA 3 — Com o Blake
    c4_esc3: { escolhas: [
      { texto: "A. “Eu não sei do que você está falando.” E comer o sanduíche muito concentrada.", proxima: "c4_3a_1", pontos: { blake: 1 }, flags: ["Nao_sei_Blake"] },
      { texto: "B. “Obrigada por ter ficado esperando na escada.”", proxima: "c4_3b_1", pontos: { blake: 3 }, flags: ["Obrigada_escada"] },
      { texto: "C. “E você, Blake? Você está esquisito desde quando?”", proxima: "c4_3c_1", pontos: { blake: 2 }, flags: ["Esquisito_Blake"] }
    ]},
    c4_3a_1: { quem: "eu", texto: "Eu não sei do que você está falando.", proxima: "c4_3a_2" },
    c4_3a_2: { quem: "blake", texto: "Tá.", proxima: "c4_3a_3" },
    c4_3a_3: { tipo: "narracao", texto: "Ele não insiste. Mas ela está comendo o sanduíche com uma concentração tão absurda que o Blake, do lado, começa a rir em silêncio, sacudindo os ombros, sem fazer barulho nenhum.", proxima: "c4_15" },
    c4_3b_1: { quem: "eu", texto: "Obrigada por ter ficado esperando na escada.", proxima: "c4_3b_2" },
    c4_3b_2: { tipo: "narracao", texto: "O Blake para de mastigar. Fica olhando para a árvore. As orelhas dele começam a ficar vermelhas, devagar, de baixo para cima.", proxima: "c4_3b_3" },
    c4_3b_3: { quem: "blake", texto: "...Eu fico sempre. Na escada. Você só não vê.", proxima: "c4_3b_4" },
    c4_3b_4: { tipo: "narracao", texto: "Ele fala isso tão baixo que ela quase não ouve. Depois fecha a lancheira, levanta, e vai embora antes do sinal tocar, sem olhar para trás, com as orelhas vermelhas até o pátio acabar.", proxima: "c4_15" },
    c4_3c_1: { quem: "eu", texto: "E você, Blake? Você está esquisito desde quando?", proxima: "c4_3c_2" },
    c4_3c_2: { tipo: "narracao", texto: "O Blake vira a cabeça para ela. Devagar. Fica olhando muito tempo, sério, com aquela cara de quem lê uma frase difícil três vezes.", proxima: "c4_3c_3" },
    c4_3c_3: { quem: "blake", texto: "Eu não estou esquisito. Eu sou assim.", proxima: "c4_3c_4" },
    c4_3c_4: { quem: "eu", texto: "Você fez três piadas essa semana.", proxima: "c4_3c_5" },
    c4_3c_5: { tipo: "narracao", texto: "Ele não responde. Mas o canto da boca dele treme, e ele vira para a árvore de novo, e não nega.", proxima: "c4_15" },

    // (todas as opções continuam aqui)
    c4_15: { tipo: "narracao", sprite: "victor", texto: "Do outro lado do pátio, o Victor aparece, com o pirulito na boca e uma cara de fofoqueiro profissional. Ele senta do outro lado dela no banco, apertando ela entre ele e o lugar onde o Blake estava.", proxima: "c4_16" },
    c4_16: { quem: "victor", texto: "Gatinha... SN. Eu soube. A escola inteira soube. A Serena da sala C te encurralou no corredor do bloco A. Uma menina do primeiro ano viu e contou pra outra, que contou pra outra, que contou pra mim, que estava na cantina.", proxima: "c4_17" },
    c4_17: { quem: "eu", texto: "A escola inteira em quinze minutos?", proxima: "c4_18" },
    c4_18: { quem: "victor", texto: "A rede de fofoca dessa escola é mais rápida que a internet. É a única coisa que funciona aqui.", proxima: "c4_19" },
    c4_19: { quem: "victor", texto: "E eu tenho experiência com a Serena. Ela me deu dois foras. No primeiro ano. Duas vezes. No mesmo dia.", proxima: "c4_20" },
    c4_20: { quem: "eu", texto: "Dois foras no mesmo dia?", proxima: "c4_21" },
    c4_21: { quem: "victor", texto: "Eu chamei ela de gatinha de manhã, ela disse “não”. Eu achei que ela não tinha ouvido e chamei de novo na saída. Ela disse “eu ouvi da primeira vez”. Foi o fora mais educado da minha vida. Eu respeito muito ela desde então.", proxima: "c4_22" },
    c4_22: { tipo: "narracao", texto: "Ele tira o pirulito da boca e olha para ela de lado, com o sorriso torto diminuindo um pouco, como ontem, no armário.", proxima: "c4_cam_esp" },
    c4_cam_esp: { caminhos: [
      { flag: "Espirro_gatinho", proxima: "c4_esp" }
    ], proxima: "c4_23" },
    c4_esp: { quem: "victor", texto: "Aliás. O inspetor geral foi embora ontem com o nariz vermelho. Eu vi da janela. Ele espirrou no carro. Fininho. Eu ri sozinho na aula de matemática e levei advertência. Valeu a pena.", proxima: "c4_23" },
    c4_23: { quem: "victor", texto: "Se ela te incomodar de novo, me avisa. Eu não bato em menina. Mas eu sei ser muito, muito chato. Eu fico do lado dela no intervalo contando a história do Caramelo comendo o sofá. Ninguém aguenta.", proxima: "c4_24" },
    c4_24: { quem: "eu", texto: "Isso é uma ameaça muito séria, Victor.", proxima: "c4_25" },
    c4_25: { quem: "victor", texto: "É a minha arma mais perigosa.", proxima: "c4_26" },
    c4_26: { tipo: "narracao", texto: "Ele coloca o pirulito de volta na boca e dá um tapinha no ombro dela com o dele, de leve, como quem diz “estou aqui” sem precisar dizer. Depois levanta e vai embora antes que ela consiga responder.", proxima: "c5_01" },

    /* =================== CENA 5 — OS CARTÕES (Ryuji) =================== */
    // Cenário: corredor, troca de aula. Música: animada.
    c5_01: { tipo: "narracao", cenario: "corredor", transicao: "tempo", legenda: "Troca de aula — Cena 5", sprite: "ryuji", texto: "Na troca de aula, o Ryuji aparece no corredor do bloco A, na frente da sala dela, com os cartões do curso de bombeiro na mão, presos com o elástico, e a faixa da testa torta como sempre.", proxima: "c5_02" },
    c5_02: { quem: "ryuji", texto: "Três minutos. Eu tenho três minutos até a minha aula de física. Me pergunta três? Um por minuto? Eu prometo que não erro de propósito.", proxima: "c5_03" },
    c5_03: { tipo: "narracao", texto: "Ela pega os cartões. O Ryuji fica parado na frente dela, balançando nos calcanhares, com uma ansiedade de cachorro esperando bolinha.", proxima: "c5_04" },
    c5_04: { quem: "eu", texto: "Pergunta um. Qual é a classe de incêndio de equipamento elétrico?", proxima: "c5_05" },
    c5_05: { quem: "ryuji", texto: "Classe C! Nunca usa água! Nunca! Quem usa água em incêndio elétrico vira churrasco!", proxima: "c5_06" },
    c5_06: { quem: "eu", texto: "Pergunta dois. Qual é o primeiro procedimento numa vítima inconsciente?", proxima: "c5_07" },
    c5_07: { quem: "ryuji", texto: "Verificar a respiração! Ver, ouvir, sentir! Encostar o rosto perto do rosto da vítima, olhando pro peito, pra ver se...", proxima: "c5_08" },
    c5_08: { tipo: "narracao", texto: "Ele para de falar no meio. Fica olhando para ela. Fica vermelho. Ela não sabe por que ele ficou vermelho, até que ele pigarreia e continua, muito rápido, olhando para o teto.", proxima: "c5_09" },
    c5_09: { quem: "ryuji", texto: "...pra ver se o peito está subindo. É isso. É técnico. É totalmente técnico.", proxima: "c5_10" },
    c5_10: { quem: "eu", texto: "Por que você ficou vermelho na pergunta dois?", proxima: "c5_11" },
    c5_11: { quem: "ryuji", texto: "Eu não fiquei vermelho. Está calor. É o corredor. O corredor do bloco A é muito quente.", proxima: "c5_12" },
    c5_12: { quem: "eu", texto: "Ryuji, está ventando.", proxima: "c5_13" },
    c5_13: { quem: "ryuji", texto: "Vento quente!", proxima: "c5_14" },
    c5_14: { tipo: "narracao", texto: "Ela vira o terceiro cartão. Lê. Olha para ele. Ele está balançando nos calcanhares de novo, com o rosto ainda rosa.", proxima: "c5_esc4" },

    // ▶ ESCOLHA 4 — A terceira pergunta
    c5_esc4: { escolhas: [
      { texto: "A. Ler a pergunta do cartão, com voz de apresentadora: “Pergunta três, valendo a vida: o que é rescaldo?”", proxima: "c5_4a_1", pontos: { ryuji: 2 }, flags: ["Rescaldo_Ryuji"] },
      { texto: "B. Inventar uma pergunta: “Pergunta três: por que você vem toda troca de aula na frente da minha sala?”", proxima: "c5_4b_1", pontos: { ryuji: 3 }, flags: ["Pergunta_inventada"] },
      { texto: "C. Ajeitar a faixa torta da testa dele. “Pergunta três: por que bombeiro anda com faixa torta?”", proxima: "c5_4c_1", pontos: { ryuji: 3 }, flags: ["Faixa_torta"] }
    ]},
    c5_4a_1: { quem: "eu", texto: "Pergunta três, valendo a vida: o que é rescaldo?", proxima: "c5_4a_2" },
    c5_4a_2: { quem: "ryuji", texto: "É quando o fogo já apagou, mas ainda tem brasa escondida. A gente tem que procurar tudo e apagar uma por uma, senão volta a pegar fogo do nada, horas depois.", proxima: "c5_4a_3" },
    c5_4a_3: { tipo: "narracao", texto: "Ele fala isso olhando para ela, sério, sem piada, e de repente parece que não está falando só de incêndio. Depois o sinal toca, e ele pega os cartões de volta e sai correndo para a aula de física, gritando “três de três!” no meio do corredor.", proxima: "c5_15" },
    c5_4b_1: { quem: "eu", texto: "Pergunta três: por que você vem toda troca de aula na frente da minha sala?", proxima: "c5_4b_2" },
    c5_4b_2: { tipo: "narracao", texto: "O Ryuji para de balançar. Fica parado com a boca aberta, olhando para o cartão na mão dela, como se a pergunta estivesse escrita lá mesmo.", proxima: "c5_4b_3" },
    c5_4b_3: { quem: "ryuji", texto: "...Isso não está no cartão.", proxima: "c5_4b_4" },
    c5_4b_4: { quem: "eu", texto: "É uma pergunta bônus.", proxima: "c5_4b_5" },
    c5_4b_5: { quem: "ryuji", texto: "Eu... passo. Eu passo essa. Posso passar? Bombeiro pode passar uma pergunta?", proxima: "c5_4b_6" },
    c5_4b_6: { tipo: "narracao", texto: "O sinal toca e salva ele. Ele pega os cartões da mão dela e sai correndo, de costas, quase batendo num professor, vermelho como a Relâmpago nunca vai ser.", proxima: "c5_15" },
    c5_4c_1: { tipo: "narracao", texto: "Ela levanta a mão e puxa a faixa dele de volta para o lugar, afastando o cabelo do olho. Ele fica completamente imóvel, deixando, com os cartões apertados no peito.", proxima: "c5_4c_2" },
    c5_4c_2: { quem: "eu", texto: "Pergunta três: por que bombeiro anda com faixa torta?", proxima: "c5_4c_3" },
    c5_4c_3: { quem: "ryuji", texto: "...Pra alguém arrumar.", proxima: "c5_4c_4" },
    c5_4c_4: { tipo: "narracao", texto: "Ele fala sem pensar, e ouve o que falou, e arregala os olhos. O sinal toca. Ele sai correndo sem se despedir, e ela fica no corredor segurando um cartão que ele esqueceu na mão dela, escrito “rescaldo”.", proxima: "c5_15" },

    // (todas as opções continuam aqui)
    c5_15: { tipo: "narracao", sprite: "mio", texto: "A Mio sai da sala e encontra ela parada no corredor. Olha para a SN, para o Ryuji correndo lá no fim, para a SN de novo.", proxima: "c5_16" },
    c5_16: { quem: "mio", texto: "Você foi encurralada pela Serena, almoçou com o Blake, foi visitada pelo Victor, e agora o Ryuji saiu correndo vermelho. Tudo em um intervalo. Eu vou abrir uma coluna na rádio só pra você. “O intervalo da SN.”", proxima: "c5_17" },
    c5_17: { quem: "eu", texto: "Ninguém vai ouvir isso.", proxima: "c5_18" },
    c5_18: { quem: "mio", texto: "A escola inteira vai ouvir isso. A rede de fofoca já está em todos os andares.", proxima: "c6_01" },

    /* =================== CENA 6 — A SAÍDA (Kaito e Serena) =================== */
    // Cenário: portão, saída. Música: tensão leve, depois silêncio.
    c6_01: { tipo: "narracao", cenario: "saida-colegio", transicao: "tempo", legenda: "Saída — Cena 6", sprite: null, texto: "Na saída, o portão está mais cheio do que o normal. A SN entende por quê quando vê: a rede de fofoca trabalhou bem. Tem gente parada sem motivo. Tem gente olhando para o meio-fio onde o Kaito sempre estaciona.", proxima: "c6_02" },
    c6_02: { tipo: "narracao", sprite: "serena", texto: "E, encostada no muro, no lugar de sempre, com as duas amigas, a Serena. De braços cruzados. Olhando para a moto preta com tanque vermelho estacionada no meio-fio.", proxima: "c6_03" },
    c6_03: { tipo: "narracao", sprite: "kaito", texto: "O Kaito está encostado na moto, com o capacete vermelho no braço, mexendo no celular. Ele levanta a cabeça quando ela sai pelo portão. E não abaixa mais.", proxima: "c6_04" },
    c6_04: { tipo: "narracao", texto: "Ele vê a multidão. Vê a Serena no muro. Vê todo mundo olhando. E franze a testa, sem entender nada, do jeito que o Kaito franze a testa para tudo que não é panela ou briga.", proxima: "c6_05" },
    c6_05: { quem: "kaito", texto: "Por que tem tanta gente aqui?", proxima: "c6_06" },
    c6_06: { quem: "eu", texto: "Longa história. Envolve a Serena.", proxima: "c6_07" },
    c6_07: { quem: "kaito", texto: "Quem é Serena?", proxima: "c6_08" },
    c6_08: { tipo: "narracao", texto: "Lá no muro, a Serena ouve. Ela não estava perto, mas ouve, porque o portão inteiro ficou em silêncio para ouvir. A SN vê o rosto dela mudar. Não fica com raiva. Fica pior. Fica triste, e esconde a tristeza em menos de um segundo, e vira o rosto para a amiga.", proxima: "c6_09" },
    c6_09: { tipo: "pensamento", texto: "“Quem é Serena?” Ele não lembra. Bolo de aniversário, ônibus da excursão, dois anos de mensagem. E ele não lembra o nome dela.", proxima: "c6_10" },
    c6_10: { tipo: "pensamento", texto: "E ela tinha razão. Ele nunca olhou pra ninguém. Ninguém. Até...", proxima: "c6_11" },
    c6_11: { quem: "eu", texto: "Kaito. A menina do muro. Cabelo comprido. Sala C. Ela te deu um bolo no primeiro ano.", proxima: "c6_12" },
    c6_12: { quem: "kaito", texto: "...Ah. O bolo de cenoura. Eu dei pro Ryuji porque eu não gosto de cenoura.", proxima: "c6_13" },
    c6_13: { quem: "eu", texto: "Kaito.", proxima: "c6_14" },
    c6_14: { quem: "kaito", texto: "O quê? Eu agradeci.", proxima: "c6_esc5" },

    // ▶ ESCOLHA 5 — Sobre a Serena
    c6_esc5: { escolhas: [
      { texto: "A. “Fala com ela. Um oi. Só um oi. Pelo nome.”", proxima: "c6_5a_1", pontos: { kaito: 1 }, flags: ["Oi_Serena"] },
      { texto: "B. “Esquece. Vamos.” E subir na moto, na frente de todo mundo.", proxima: "c6_5b_1", pontos: { kaito: 2, desvio: 1 }, flags: ["Subiu_frente_todos"] },
      { texto: "C. “Você nunca percebe ninguém, né?”", proxima: "c6_5c_1", pontos: { kaito: 2 }, flags: ["Nunca_percebe"] }
    ]},
    c6_5a_1: { quem: "eu", texto: "Fala com ela. Um oi. Só um oi. Pelo nome.", proxima: "c6_5a_2" },
    c6_5a_2: { tipo: "narracao", texto: "O Kaito olha para ela como se ela tivesse pedido para ele dançar no meio do portão. Depois olha para o muro. Respira. E levanta a mão, meio sem jeito, na direção da Serena.", proxima: "c6_5a_3" },
    c6_5a_3: { quem: "kaito", texto: "...Oi, Serena.", proxima: "c6_5a_4" },
    c6_5a_4: { tipo: "narracao", sprite: "serena", texto: "A Serena congela. As amigas dela congelam. O portão inteiro congela. Depois ela levanta a mão também, devagar, sem conseguir disfarçar, e fica vermelha até o pescoço. Ela olha para a SN por cima do ombro do Kaito, com uma cara que a SN não consegue ler. Não é obrigado. Não é ódio. É uma coisa no meio.", proxima: "c6_15" },
    c6_5b_1: { quem: "eu", texto: "Esquece. Vamos.", proxima: "c6_5b_2" },
    c6_5b_2: { tipo: "narracao", texto: "Ela pega o capacete da mão dele, coloca, e sobe na garupa. Na frente do portão inteiro. Na frente da Serena. O portão faz um barulho coletivo, um “oooh” baixo, como plateia de novela.", proxima: "c6_5b_3" },
    c6_5b_3: { tipo: "pensamento", texto: "Pronto. Agora eu fiz de propósito. Eu sei que fiz. A minha versão de vinte e oito anos está balançando a cabeça de vergonha. A minha versão de dezesseis está muito satisfeita.", proxima: "c6_15" },
    c6_5c_1: { quem: "eu", texto: "Você nunca percebe ninguém, né?", proxima: "c6_5c_2" },
    c6_5c_2: { tipo: "narracao", texto: "O Kaito para. Olha para ela. Muito tempo, no meio do portão cheio, como se não tivesse mais ninguém lá.", proxima: "c6_5c_3" },
    c6_5c_3: { quem: "kaito", texto: "Eu percebo.", proxima: "c6_5c_4" },
    c6_5c_4: { tipo: "narracao", texto: "Ele não fala o que percebe. Ele não precisa. Ele estende o capacete para ela, e não tira os olhos dela, e ela sente o rosto inteiro esquentar na frente da escola inteira.", proxima: "c6_15" },

    // (todas as opções continuam aqui)
    c6_15: { tipo: "narracao", cenario: "rua", sprite: null, texto: "Na moto, saindo da frente da escola, ela segura na camisa dele, como sempre. No primeiro sinal vermelho, ele não fala nada. No segundo, também não. No terceiro, ele levanta a viseira, só um pouco, sem virar a cabeça.", proxima: "c6_16" },
    c6_16: { quem: "kaito", texto: "Ontem. No hall.", proxima: "c6_17" },
    c6_17: { tipo: "narracao", texto: "Ela para de respirar. A mão dela aperta a jaqueta dele sem querer. Ele sente, porque os ombros dele ficam duros.", proxima: "c6_18" },
    c6_18: { quem: "kaito", texto: "...A fita preta ficou boa, né?", proxima: "c6_19" },
    c6_19: { tipo: "pensamento", texto: "A fita preta. Ele ia falar. Ele começou a falar. E desviou pra fita preta. O Kaito, que encara qualquer um sem piscar, fugindo de mim num sinal vermelho.", proxima: "c6_esc6" },

    // ▶ ESCOLHA 6 — No sinal vermelho
    c6_esc6: { escolhas: [
      { texto: "A. “A fita ficou ótima.” E deixar ele fugir dessa vez.", proxima: "c6_6a_1", pontos: { kaito: 1 }, flags: ["Deixou_fugir"] },
      { texto: "B. “Você não ia falar da fita, Kaito.”", proxima: "c6_6b_1", pontos: { kaito: 3 }, flags: ["Nao_era_fita"] },
      { texto: "C. Encostar a testa do capacete nas costas dele. Não falar nada até o sinal abrir.", proxima: "c6_6c_1", pontos: { kaito: 3 }, flags: ["Testa_costas_Kaito"] }
    ]},
    c6_6a_1: { quem: "eu", texto: "A fita ficou ótima.", proxima: "c6_6a_2" },
    c6_6a_2: { tipo: "narracao", texto: "Ele abaixa a viseira. O sinal abre. Ela sente os ombros dele relaxarem, só um pouco, aliviados e decepcionados ao mesmo tempo, se é que ombros conseguem ser as duas coisas.", proxima: "c6_20" },
    c6_6b_1: { quem: "eu", texto: "Você não ia falar da fita, Kaito.", proxima: "c6_6b_2" },
    c6_6b_2: { tipo: "narracao", texto: "Silêncio. O sinal continua vermelho. Um carro buzina atrás, porque o sinal abriu, e o Kaito não se mexe. A buzina de novo. Ele não se mexe.", proxima: "c6_6b_3" },
    c6_6b_3: { quem: "kaito", texto: "...Não. Não ia.", proxima: "c6_6b_4" },
    c6_6b_4: { tipo: "narracao", texto: "Ele arranca, porque o carro de trás está quase subindo na moto. E não fala mais nada o caminho inteiro. Mas ele não precisava falar mais nada. O “não ia” ficou no ar, entre o capacete dele e o dela, até a frente do prédio.", proxima: "c6_20" },
    c6_6c_1: { tipo: "narracao", texto: "Ela encosta a testa do capacete nas costas dele. Ele fica completamente imóvel. O sinal fica verde. Ele não arranca logo. Fica mais um segundo parado, sentindo o peso da cabeça dela nas costas.", proxima: "c6_6c_2" },
    c6_6c_2: { tipo: "narracao", texto: "Depois arranca, devagar, mais devagar do que nunca, como quem carrega uma coisa que não pode derramar.", proxima: "c6_20" },

    // (todas as opções continuam aqui)
    c6_20: { tipo: "narracao", cenario: "frente-casa-sn-tarde", sprite: "kaito", transicao: "tempo", texto: "Na frente do prédio, ela desce, devolve o capacete. Ele fica sentado na moto, olhando para os três degraus de granito com a fita preta nova.", proxima: "c6_21" },
    c6_21: { quem: "kaito", texto: "Amanhã. Sete horas.", proxima: "c6_22" },
    c6_22: { quem: "eu", texto: "Como sempre.", proxima: "c6_23" },
    c6_23: { quem: "kaito", texto: "Como sempre.", proxima: "c6_24" },
    c6_24: { tipo: "narracao", texto: "Ele vai embora. Ela sobe os três degraus, pisando em cima da fita preta. No último, ela para e olha para o chão do hall, para o lugar exato.", proxima: "c6_25" },
    c6_25: { tipo: "pensamento", texto: "Um segundo. Ainda.", proxima: "r_cam" },

    /* =================== ROTA — QUARTA À NOITE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quarta, 22h", sprite: null, texto: "À noite, no quarto. Ela está com o livro de história aberto, lendo a mesma frase sobre a máquina a vapor pela sexta vez, quando o celular vibra.", proxima: "rk_02" },
    rk_02: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Tá acordada?", proxima: "rk_03" },
    rk_03: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Tô.", proxima: "rk_04" },
    rk_04: { tipo: "narracao", texto: "Digitando. Para. Digitando. Para. Digitando. Ela fica olhando para a tela com o coração na boca, por quase dois minutos.", proxima: "rk_05" },
    rk_05: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Foi sem querer. No hall.", proxima: "rk_06" },
    rk_06: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu sei que foi sem querer. Eu só queria que você soubesse que eu sei.", proxima: "rk_07" },
    rk_07: { tipo: "narracao", texto: "Ela fica olhando para as duas mensagens. Digitando de novo, do lado dele. Para. Mais nada vem.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. Responder: “Eu sei também.”", proxima: "rk_a1", pontos: { kaito: 2 }, flags: ["Sei_tambem"] },
      { texto: "B. Responder: “Foi sem querer. Mas eu não esqueci.”", proxima: "rk_b1", pontos: { kaito: 3 }, flags: ["Nao_esqueci"] },
      { texto: "C. Responder: “E você? Esqueceu?”", proxima: "rk_c1", pontos: { kaito: 3 }, flags: ["Voce_esqueceu"] }
    ]},
    rk_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu sei também.", proxima: "rk_a2" },
    rk_a2: { tipo: "narracao", texto: "Visualizado. Ele não responde mais nada. Mas, um minuto depois, chega uma foto. A fita preta do hall, tirada de baixo, de noite, com a luz do poste. Sem legenda.", proxima: "r_fim" },
    rk_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Foi sem querer. Mas eu não esqueci.", proxima: "rk_b2" },
    rk_b2: { tipo: "narracao", texto: "Visualizado na hora. Nada. Um minuto inteiro de nada. Dois. Ela vira o celular para baixo, com o rosto pegando fogo, achando que falou demais.", proxima: "rk_b3" },
    rk_b3: { tipo: "narracao", texto: "Aí o celular vibra embaixo da mão dela.", proxima: "rk_b4" },
    rk_b4: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu também não.", proxima: "r_fim" },
    rk_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "E você? Esqueceu?", proxima: "rk_c2" },
    rk_c2: { tipo: "narracao", texto: "Digitando. Para. Digitando. Para. Muito tempo. Ela quase desiste de esperar.", proxima: "rk_c3" },
    rk_c3: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu coloquei o café no sal hoje de manhã.", proxima: "rk_c4" },
    rk_c4: { tipo: "narracao", texto: "Ela lê a mensagem três vezes. Depois começa a rir sozinha no quarto, com a mão na boca, de felicidade, porque entendeu exatamente o que ele quis dizer.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { roupa: "fora", tipo: "narracao", cenario: "frente-casa-sn-tarde", transicao: "tempo", legenda: "Quarta, 18h", sprite: "takeo:machucado", texto: "No fim da tarde, o Takeo aparece na frente do prédio dela, a pé, com um pote de vidro na mão boa, embrulhado num pano de prato florido.", proxima: "rt_02" },
    rt_02: { quem: "takeo", sprite: "takeo:machucado", texto: "Doce de caqui. A minha avó mandou. Ela disse que você estava com cara de mundo da lua hoje e que doce de caqui traz a pessoa de volta pra terra.", proxima: "rt_03" },
    rt_03: { quem: "eu", texto: "A sua avó nem me viu hoje.", proxima: "rt_04" },
    rt_04: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu contei pra ela. Do “fita preta”. Ela riu tanto que precisou sentar.", proxima: "rt_05" },
    rt_05: { tipo: "narracao", texto: "Eles sentam no degrau da calçada, na frente do prédio. Ele abre o pote com a mão boa e o joelho, e ela come o doce de caqui com a colher que ele trouxe no bolso, porque o Takeo sempre pensa em tudo.", proxima: "rt_06" },
    rt_06: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu vi a Serena hoje. Saindo do corredor do bloco A. Eu ia subir pra ver se você estava bem, mas o Blake estava na escada e fez assim com a mão, tipo “deixa”.", proxima: "rt_07" },
    rt_07: { quem: "takeo", sprite: "takeo:machucado", texto: "Eu quase subi mesmo assim. Com um braço só. Eu ia fazer o quê, eu não sei. Mas eu ia subir.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. “Você ia subir com um braço quebrado pra brigar com a Serena?”", proxima: "rt_a1", pontos: { takeo: 2 }, flags: ["Brigar_Serena"] },
      { texto: "B. Encostar o ombro no ombro dele, no degrau. “Você sempre sobe. Com um braço, sem braço.”", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["Sempre_sobe"] },
      { texto: "C. Dar uma colher de doce de caqui pra ele, na boca. “Volta pra terra você também.”", proxima: "rt_c1", pontos: { takeo: 3 }, flags: ["Colher_caqui"] }
    ]},
    rt_a1: { quem: "eu", texto: "Você ia subir com um braço quebrado pra brigar com a Serena?", proxima: "rt_a2" },
    rt_a2: { quem: "takeo", sprite: "takeo:machucado", texto: "Brigar não. Eu ia ficar do seu lado. Parado. Com cara de quem tem dois braços.", proxima: "rt_a3" },
    rt_a3: { tipo: "narracao", texto: "Ela ri tanto que derruba um pouco de doce no uniforme. Ele limpa com o pano de prato florido, todo concentrado, e só depois percebe que está limpando a perna dela, e fica vermelho até a faixa.", proxima: "r_fim" },
    rt_b1: { tipo: "narracao", texto: "Ela encosta o ombro no dele. Ele para de mexer no pote.", proxima: "rt_b2" },
    rt_b2: { quem: "eu", texto: "Você sempre sobe. Com um braço, sem braço.", proxima: "rt_b3" },
    rt_b3: { tipo: "narracao", texto: "O Takeo não responde. Ele fica olhando para a rua, com o pote no colo, e encosta o ombro de volta, mais firme, e os dois ficam assim até o poste acender sozinho em cima deles.", proxima: "r_fim" },
    rt_c1: { tipo: "narracao", texto: "Ela pega uma colherada de doce e leva até a boca dele. Ele fica parado olhando para a colher, depois para ela, depois para a colher de novo.", proxima: "rt_c2" },
    rt_c2: { quem: "eu", texto: "Volta pra terra você também.", proxima: "rt_c3" },
    rt_c3: { tipo: "narracao", texto: "Ele abre a boca e come. Mastiga devagar. Engole. E fica com aquela cara, a de quando alguém coloca uma coisa no lugar certo.", proxima: "rt_c4" },
    rt_c4: { quem: "takeo", sprite: "takeo:machucado", texto: "...Eu acho que eu fui pra lua agora. O contrário do que a minha avó queria.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: "fora", tipo: "narracao", cenario: "livraria-shopping", transicao: "tempo", legenda: "Quarta, 18h", sprite: "blake", texto: "No fim da tarde, ela passa pela livraria do shopping. O Blake está atrás do balcão, de avental verde, organizando uma pilha de livros por cor, porque a dona disse que fica mais bonito na vitrine.", proxima: "rb_02" },
    rb_02: { quem: "blake", texto: "Você veio.", proxima: "rb_03" },
    rb_03: { quem: "eu", texto: "Eu estava passando.", proxima: "rb_04" },
    rb_04: { quem: "blake", texto: "Ninguém passa pelo terceiro andar do shopping. Só tem a livraria e o banheiro.", proxima: "rb_05" },
    rb_05: { tipo: "narracao", texto: "Ele fala isso sem sorrir, mas o canto da boca treme. Ele aponta com o queixo para a poltrona de veludo no canto, a da nuvem, e ela senta. Ele continua organizando os livros, e de vez em quando olha para ela.", proxima: "rb_06" },
    rb_06: { quem: "blake", texto: "Hoje, no banco. Eu falei que fiquei na escada esperando. Eu não devia ter falado.", proxima: "rb_07" },
    rb_07: { quem: "eu", texto: "Por quê?", proxima: "rb_08" },
    rb_08: { quem: "blake", texto: "Porque agora você vai olhar pra escada.", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. “Eu já olhava.”", proxima: "rb_a1", pontos: { blake: 3 }, flags: ["Ja_olhava"] },
      { texto: "B. “Então eu vou acenar pra escada. Todo dia. Pra você saber que eu vi.”", proxima: "rb_b1", pontos: { blake: 3 }, flags: ["Aceno_escada"] },
      { texto: "C. “Por que você fica, Blake?”", proxima: "rb_c1", pontos: { blake: 2 }, flags: ["Por_que_fica"] }
    ]},
    rb_a1: { quem: "eu", texto: "Eu já olhava.", proxima: "rb_a2" },
    rb_a2: { tipo: "narracao", texto: "O Blake derruba a pilha de livros inteira. Todos os livros azuis caem no chão, misturados com os verdes. Ele fica parado olhando para a bagunça, depois para ela, sem falar nada, com as orelhas vermelhas.", proxima: "rb_a3" },
    rb_a3: { quem: "blake", texto: "...Agora eu tenho que organizar tudo de novo.", proxima: "rb_a4" },
    rb_a4: { quem: "eu", texto: "Eu te ajudo.", proxima: "r_fim" },
    rb_b1: { quem: "eu", texto: "Então eu vou acenar pra escada. Todo dia. Pra você saber que eu vi.", proxima: "rb_b2" },
    rb_b2: { tipo: "narracao", texto: "Ele para com um livro na mão. Olha para ela. Ela vê ele imaginar a cena, devagar, do jeito que ele imagina as coisas.", proxima: "rb_b3" },
    rb_b3: { quem: "blake", texto: "Os outros vão perguntar pra quem você está acenando.", proxima: "rb_b4" },
    rb_b4: { quem: "eu", texto: "Eu falo que é pra escada. Eu gosto muito de escada.", proxima: "rb_b5" },
    rb_b5: { tipo: "narracao", texto: "Ele ri. O riso grave, de verdade, alto, que ela ouviu poucas vezes. A dona da livraria, lá no fundo, aparece na porta do estoque para ver o que aconteceu.", proxima: "r_fim" },
    rb_c1: { quem: "eu", texto: "Por que você fica, Blake?", proxima: "rb_c2" },
    rb_c2: { tipo: "narracao", texto: "Ele coloca o livro na pilha. Ajeita. Ajeita de novo. Não olha para ela.", proxima: "rb_c3" },
    rb_c3: { quem: "blake", texto: "Eu penso devagar. Você sabe. Eu vou te responder isso. Mas eu ainda estou pensando.", proxima: "rb_c4" },
    rb_c4: { quem: "eu", texto: "Quanto tempo você vai pensar?", proxima: "rb_c5" },
    rb_c5: { quem: "blake", texto: "Desde o festival eu estou pensando. Mais um pouco.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { roupa: "fora", tipo: "narracao", cenario: "frente-casa-sn-tarde", transicao: "tempo", legenda: "Quarta, 18h", sprite: "ryuji", texto: "No fim da tarde, o Ryuji aparece na frente do prédio dela na Relâmpago, buzinando duas vezes, curtas, do jeito que ele começou a buzinar só para ela.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", texto: "Eu vim buscar uma coisa. Eu acho que deixei um cartão do curso com você hoje. Eu não sei onde está.", proxima: "rr_03" },
    rr_03: { tipo: "narracao", texto: "Ela procura na mochila inteira. Caderno de português, apostila de química, estojo. Nenhum cartão.", proxima: "rr_04" },
    rr_04: { tipo: "narracao", texto: "Ela levanta os olhos. Ele não parece nem um pouco surpreso. Está olhando para a mochila dela com uma cara de culpa enorme.", proxima: "rr_05" },
    rr_05: { quem: "ryuji", texto: "Na verdade eu não perdi cartão nenhum. Eu sei todos de cor. Eu só queria uma desculpa pra vir aqui.", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. “Você não precisa de desculpa pra vir aqui.”", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Sem_desculpa_Ryuji"] },
      { texto: "B. “Então me dá um cartão de verdade. Eu fico com ele. Aí você sempre tem desculpa.”", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Guardou_cartao"] },
      { texto: "C. “Você é um péssimo mentiroso, Ryuji.”", proxima: "rr_c1", pontos: { ryuji: 2 }, flags: ["Pessimo_mentiroso"] }
    ]},
    rr_a1: { quem: "eu", texto: "Você não precisa de desculpa pra vir aqui.", proxima: "rr_a2" },
    rr_a2: { tipo: "narracao", texto: "O Ryuji fica parado na moto. Depois tira o capacete devagar, e o cabelo sai amassado, e ele nem tenta arrumar.", proxima: "rr_a3" },
    rr_a3: { quem: "ryuji", texto: "Então eu vou vir sem desculpa. Muitas vezes. Você vai se arrepender.", proxima: "rr_a4" },
    rr_a4: { quem: "eu", texto: "Duvido.", proxima: "r_fim" },
    rr_b1: { tipo: "narracao", texto: "O Ryuji tira os cartões do bolso, escolhe um, e entrega. Ela guarda no bolso da frente da mochila e fecha o zíper.", proxima: "rr_b2" },
    rr_b2: { quem: "eu", texto: "Então eu fico com ele. Aí você sempre tem desculpa.", proxima: "rr_b3" },
    rr_b3: { tipo: "narracao", texto: "O Ryuji olha para o zíper fechado. Depois para ela. E sorri, um sorriso diferente do normal, menor, mais quieto.", proxima: "rr_b4" },
    rr_b4: { quem: "ryuji", texto: "Rescaldo. A brasa escondida que acende de novo do nada. Fica com ele, então. Combina com você.", proxima: "r_fim" },
    rr_c1: { quem: "eu", texto: "Você é um péssimo mentiroso, Ryuji.", proxima: "rr_c2" },
    rr_c2: { quem: "ryuji", texto: "Eu sei! Eu sou o pior! Eu contei a verdade em dez segundos! Eu nem aguentei!", proxima: "rr_c3" },
    rr_c3: { tipo: "narracao", texto: "Ele ri, alto, e ela ri, e ele fica na frente do prédio por mais uma hora, sentado na moto desligada, contando histórias do quartel, até a mãe dela abrir a janela e perguntar se o menino da moto amarela vai jantar ou não.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: "fora", tipo: "narracao", cenario: "quintal-victor", transicao: "tempo", legenda: "Quarta, 18h", sprite: "victor", texto: "No fim da tarde, o Victor manda uma mensagem: “Oficina. Agora. Emergência.” A oficina é a garagem da casa dele, com a porta de enrolar aberta, três motos desmontadas e o Caramelo dormindo em cima de um pneu.", proxima: "rv_02" },
    rv_02: { quem: "victor", texto: "A emergência é que eu queria que você visse isso.", proxima: "rv_03" },
    rv_03: { tipo: "narracao", texto: "Ele aponta para a parede do fundo. Lá, pintado à mão, em letra torta e tinta azul, ainda molhada, o nome da mãe dele. Embaixo: “Oficina”. A tinta escorreu um pouco no “O”.", proxima: "rv_04" },
    rv_04: { quem: "victor", texto: "Não é a placa ainda. É só a parede. Mas eu precisava ver escrito em algum lugar maior que um caderno.", proxima: "rv_05" },
    rv_05: { quem: "victor", texto: "Você é a primeira pessoa que vê. Nem a minha mãe viu ainda. Ela chega às nove.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. “O O escorreu.” E rir. “Ficou perfeito.”", proxima: "rv_a1", pontos: { victor: 2 }, flags: ["O_escorreu"] },
      { texto: "B. “Por que eu primeiro?”", proxima: "rv_b1", pontos: { victor: 3 }, flags: ["Por_que_primeiro"] },
      { texto: "C. Pegar o pincel e escrever, bem pequenininho, no cantinho da parede: “Gerente de marketing.”", proxima: "rv_c1", pontos: { victor: 3 }, flags: ["Gerente_parede"] }
    ]},
    rv_a1: { quem: "eu", texto: "O “O” escorreu.", proxima: "rv_a2" },
    rv_a2: { quem: "victor", texto: "Escorreu! Eu vi! Eu tentei consertar e piorou!", proxima: "rv_a3" },
    rv_a3: { quem: "eu", texto: "Ficou perfeito. Parece que a parede está chorando de emoção.", proxima: "rv_a4" },
    rv_a4: { tipo: "narracao", texto: "O Victor olha para o “O” escorrido. Depois começa a rir. Depois para de rir e fica só olhando, com os olhos brilhando, e ela finge que não vê.", proxima: "r_fim" },
    rv_b1: { quem: "eu", texto: "Por que eu primeiro?", proxima: "rv_b2" },
    rv_b2: { tipo: "narracao", texto: "O Victor abre a boca para fazer uma piada. Ela vê a piada chegar. E vê ele desistir dela no meio do caminho.", proxima: "rv_b3" },
    rv_b3: { quem: "victor", texto: "...Porque você foi a primeira que levou a sério. O resto do mundo acha que é piada. Você nunca achou.", proxima: "r_fim" },
    rv_c1: { tipo: "narracao", texto: "Ela pega o pincel do balde de tinta azul e escreve, no cantinho de baixo da parede, em letra pequenininha: “Gerente de marketing.” E desenha um sorvete do lado.", proxima: "rv_c2" },
    rv_c2: { tipo: "narracao", texto: "O Victor se agacha para ler. Fica agachado muito tempo. Depois levanta, devagar, e não fala nada. Ele só pega o pincel da mão dela, com cuidado, e os dedos ficam um segundo em cima dos dela, sujos de tinta azul.", proxima: "rv_c3" },
    rv_c3: { quem: "victor", texto: "...Agora tem dois nomes na parede. Ficou melhor.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Quarta, 23h", sprite: null, texto: "Mais tarde, no escuro do quarto, ela pensa na Serena. No bolo de cenoura que foi parar na mão do Ryuji. Em dois anos de “valeu”. No “Quem é Serena?” no meio do portão.", proxima: "f_02" },
    f_02: { tipo: "pensamento", texto: "Ela vai ficar de olho em mim. No portão, no intervalo, na saída. Ela disse.", proxima: "f_03" },
    f_03: { tipo: "pensamento", texto: "Tudo bem. Eu já tenho alguém de olho em mim que é muito, muito pior que ela. Uma menina com rímel perfeito e chaveiro na mochila não me assusta.", proxima: "f_04" },
    f_04: { tipo: "pensamento", texto: "O que me assusta é que, por um segundo, no portão, eu entendi ela. Ele nunca olhou pra ninguém. E agora ele olha.", proxima: "f_05" },
    f_05: { tipo: "pensamento", texto: "Um segundo. Ainda.", proxima: "ep_fim" },

    // Fim do Capítulo 35 (crie a entrada "capitulo35" em dados/capitulos.js).
    ep_fim: { fim: "capitulo35" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 36 (anotações do roteiro)
 *  • SERENA (nova, já tem imagem): segundo ano, sala C. Gosta do Kaito desde o primeiro ano (bolo de cenoura
 *    que ele deu pro Ryuji, ônibus da excursão, dois "valeu" de aniversário). Encurralou a SN no corredor do
 *    bloco A com duas amigas: "Eu estou de olho em você." / "Se você machucar ele, eu fico sabendo."
 *    O Kaito, no portão: "Quem é Serena?" (ou, se a SN pediu, "Oi, Serena").
 *    Rumor: uma menina do terceiro ano pediu transferência de turno depois de emprestar caderno pro Kaito.
 *  • KAITO E SN: os dois ainda pensando no "beijo" de um segundo. A fita preta antiderrapante no hall (ele levou
 *    a fita pro síndico). "Bom dia de aula." O café no sal. No sinal vermelho: "Ontem. No hall... a fita preta
 *    ficou boa, né?". Rota Kaito: mensagens à noite ("Eu também não" / "Eu coloquei o café no sal").
 *  • TAKEO: "fita preta" como resposta de metáfora na aula; a avó e o doce de caqui (rota).
 *  • BLAKE: "Eu fico sempre. Na escada. Você só não vê." (se escolhido). Desde o festival pensando (rota).
 *  • RYUJI: os cartões; a pergunta da respiração; "rescaldo".
 *  • VICTOR: dois foras da Serena no mesmo dia, no primeiro ano. O nome da mãe pintado na parede (rota).
 *  • O Ren: escuta tudo, a página para de virar quando o Takeo ri. Sem mensagem, sem xadrez.
 *  • A lojinha: 26 dias.
 *  • SEGREDOS: o Ren matou o Takeo na primeira linha do tempo · a infância (a SN tinha uns 5 anos) · a tia.
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 Com o Takeo · 2 Com a Serena · 3 Com o Blake · 4 A terceira pergunta (Ryuji) · 5 Sobre a Serena (Kaito)
 *  6 No sinal vermelho (Kaito) · Rota (1 por rota)
 *
 * FLAGS NOVAS
 *  Coisa_idiota · Observa_Takeo · Peteleco_Takeo · Pergunta_pra_ele · Nao_sai_caminho · Respeitou_Serena
 *  Nao_sei_Blake · Obrigada_escada · Esquisito_Blake · Rescaldo_Ryuji · Pergunta_inventada · Faixa_torta
 *  Oi_Serena · Subiu_frente_todos · Nunca_percebe · Deixou_fugir · Nao_era_fita · Testa_costas_Kaito
 *  Sei_tambem · Nao_esqueci · Voce_esqueceu · Brigar_Serena · Sempre_sobe · Colher_caqui · Ja_olhava
 *  Aceno_escada · Por_que_fica · Sem_desculpa_Ryuji · Guardou_cartao · Pessimo_mentiroso · O_escorreu
 *  Por_que_primeiro · Gerente_parede
 */