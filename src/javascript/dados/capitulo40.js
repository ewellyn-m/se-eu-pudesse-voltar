/*
 * =====================================================================
 *  CAPÍTULO 40 — Casa grande demais
 *  Terça-feira (véspera de feriado), logo depois do Capítulo 39.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    O Kaito fica do lado da SN a festa inteira (trama principal). Bloco de rota de madrugada.
 *    ROTA KAITO: primeiro o beijo da Mio com o Blake, depois o beijo da SN com o Kaito. Eles ficam juntos.
 *
 *  O QUE ACONTECE
 *    • Manhã: o Kaito busca a SN de moto. Intervalo: a Reina anuncia a festa (a avó viajou, amanhã é feriado).
 *      A Serena ouve e já provoca a SN.
 *    • A Mio e a Hana vão se arrumar na casa da SN.
 *    • A festa. O Kaito chega e não sai do lado da SN. Conversas, mão na mão, cuidado.
 *    • A SERENA É VILÃ MANIPULADORA: gruda no Kaito. Quando ele está de costas com o Blake, joga o ponche NELA
 *      MESMA e grita que foi a SN. Ninguém viu. Metade da festa acredita nela. O Kaito, EM DÚVIDA (não com raiva):
 *      "Você jogou?" / "Não." / "...Tá." / "Eu não vi." Na verdade ou desafio: "Se você tivesse percebido antes, o que você faria?" O Kaito bebe
 *      em vez de responder. Ela faz cena de mártir e sai com pena de todo mundo. Baixinho: "Isso não acabou."
 *      A SN não passa a mão na cabeça dela.
 *    • O Ren, o ÚNICO que viu a Serena virar o copo nela mesma, vai até a SN na varanda. Ela odeia ele agora e manda
 *      ele sair. Ele oferece contar. Ela recusa. Só fala da lojinha. Depois o discurso (não é o mesmo de antes...).
 *    • O Ryuji bebe meia lata, vira poeta, e acaba dormindo jogado na espreguiçadeira da piscina.
 *      O Victor cai na piscina sóbrio. O Blake não bebe e cuida de todo mundo.
 *    • Bloco de rota de madrugada.
 *    • Fim: o grupinho dorme na casa da Reina (Mio, Hana, Akane, SN, Kaito, Blake, Ryuji, Victor, Takeo).
 *      ROTA KAITO: a Reina e o Takeo conversam sozinhos na varanda (não é mostrado, só visto de longe).
 *
 *  REGRAS
 *    • Sala da SN: Takeo, Mio, Hana, Reina, Ren, Akane. Sem xadrez no Ren. O Ren não manda mensagem.
 *    • Sem narrar roupa (só o que importa pra cena).
 *    • A mulher com pressa da infância era a MÃE da SN (funeral da tia Sora). Não revelar ainda.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Mio, Hana, Reina, Akane, Kaito, Takeo, Victor, Blake, Ryuji, Ren, Serena, Mãe.
 *    Sem nome / rótulo: Menino do terceiro ano, Amiga da Serena.
 *
 *  CENÁRIOS
 *    Hall / casa da Reina → "apartamento" · Escola → "patio-fundos" · Piscina e jardim → "patio-fundos"
 *    Quarto da SN → "quarto-sn"
 *
 *  Crie a entrada "capitulo40" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo40", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — O ANÚNCIO =================== */
    c1_01: { roupa: "escolar", tipo: "narracao", cenario: "frente-casa-sn", transicao: "tempo", legenda: "Terça, 7h — Cena 1", sprite: "kaito", texto: "Terça-feira. Sete horas. Ela desce os três degraus da fita preta, e ele está lá, e fecha a fivela do capacete embaixo do queixo dela, devagar, como agora faz todo dia.", proxima: "c1_02" },
    c1_02: { quem: "kaito", texto: "Você dormiu mal.", proxima: "c1_03" },
    c1_03: { quem: "eu", texto: "Eu sonhei com um cheiro. Um perfume de flor. Eu conheço e não lembro de onde.", proxima: "c1_04" },
    c1_04: { tipo: "narracao", texto: "Ele fica olhando para ela com os dedos ainda na fivela. Alguma coisa passa pelo rosto dele, rápida, como uma lembrança que ele também não consegue segurar. Depois some.", proxima: "c1_05" },
    c1_05: { quem: "kaito", texto: "...Quando lembrar, me fala.", proxima: "o1_08" },
    o1_08: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Intervalo", sprite: "reina", texto: "No intervalo, no muro do bebedouro, a Reina sobe em cima do muro. Literalmente. De uniforme, com os sapatos caros, em pé, com as mãos na cintura, como quem vai fazer um discurso de presidente.", proxima: "o1_09" },
    o1_09: { quem: "reina", texto: "Atenção! A minha avó viajou hoje às seis da manhã! Com o grupo da terceira idade da igreja! Quatro dias! Praia! Ela levou três chapéus e um maiô de oncinha!", proxima: "o1_10" },
    o1_10: { quem: "reina", texto: "Amanhã é feriado! A casa é minha! Festa! Hoje! Oito da noite! Todo mundo! Piscina aberta! Eu pago tudo! Meus pais não olham a fatura!", proxima: "o1_11" },
    o1_11: { tipo: "narracao", sprite: null, texto: "O pátio inteiro explode. Gritos. Gente correndo para contar para quem não ouviu. A rede de fofoca vai ter trabalho dobrado hoje. A Akane puxa a Reina pela barra da saia.", proxima: "o1_12" },
    o1_12: { sprite: "akane", quem: "akane", texto: "Reina, você convidou o pátio inteiro. O pátio inteiro tem umas trezentas pessoas.", proxima: "o1_13" },
    o1_13: { quem: "reina", sprite: "reina", texto: "A minha casa cabe trezentas pessoas. A minha casa cabe quinhentas. A minha casa é grande demais.", proxima: "o1_14" },
    o1_14: { tipo: "narracao", texto: "Ela fala isso rindo, ainda em cima do muro. Mas a SN, do lado do bebedouro, ouve uma coisa diferente na última frase. Uma coisinha. Como uma corda desafinada no meio da música.", proxima: "o1_15" },
    o1_15: { tipo: "pensamento", texto: "“Grande demais.” Ela riu. Mas não era piada.", proxima: "o1_16" },
    o1_16: { tipo: "narracao", sprite: "hana", texto: "A Hana já está com o caderno de gatinho aberto, desenhando uma tabela nova: “Festa da Reina — Logística”. Colunas: quem vai, quem leva o quê, quem vai embora com quem, e uma coluna chamada “Emergências”.", proxima: "o1_17" },
    o1_17: { quem: "hana", texto: "Alguém tem que ser responsável. Eu vou ser responsável. Eu sempre sou.", proxima: "o1_18" },
    o1_18: { quem: "mio", sprite: "mio", texto: "Eu vou ser a locutora oficial. Eu vou levar o microfone rosa. Vai ser a maior transmissão da história da Rádio Mio da Madrugada. Vai ser literalmente de madrugada.", proxima: "o1_19" },
    o1_19: { tipo: "narracao", sprite: null, texto: "Do outro lado do pátio, no banco da árvore torta, os meninos já estão discutindo. O Ryuji quer levar a Relâmpago para mostrar na festa. O Victor quer levar o Caramelo. O Blake diz que vai dirigir. O Kaito não fala nada, mas olha para ela, do outro lado do pátio, e levanta a sobrancelha, uma vez: você vai?", proxima: "o1_esc1" },

    // ▶ ESCOLHA 1 — Você vai?
    o1_esc1: { escolhas: [
      { texto: "A. Fazer que sim com a cabeça, do outro lado do pátio. E sorrir.", proxima: "o1_1a_1", pontos: { kaito: 2 }, flags: ["Vai_festa_sim"] },
      { texto: "B. Dar de ombros. “Talvez.” Só pra ele ficar pensando.", proxima: "o1_1b_1", pontos: { kaito: 1 }, flags: ["Talvez_festa"] },
      { texto: "C. Ir até o banco. “Eu vou. Mas eu vou cuidar de vocês. Ninguém faz besteira.”", proxima: "o1_1c_1", pontos: { kaito: 1, blake: 1, ryuji: 1, victor: 1 }, flags: ["Cuida_festa"] }
    ]},
    o1_1a_1: { tipo: "narracao", texto: "Ela faz que sim, do outro lado do pátio, e sorri. Ele sorri de volta, aquele sorriso de canto, e vira para o Ryuji como se nada tivesse acontecido. Mas as orelhas dele estão vermelhas.", proxima: "c1_10" },
    o1_1b_1: { tipo: "narracao", texto: "Ela dá de ombros. Talvez. Ele franze a testa, do outro lado do pátio. E passa o resto do intervalo olhando para ela de vez em quando, como quem tenta resolver uma conta.", proxima: "c1_10" },
    o1_1c_1: { tipo: "narracao", texto: "Ela vai até o banco. Para na frente dos quatro, de braços cruzados.", proxima: "o1_1c_2" },
    o1_1c_2: { quem: "eu", texto: "Eu vou. Mas eu vou cuidar de vocês. Ninguém faz besteira. Ninguém pula do telhado. Ninguém leva cachorro.", proxima: "o1_1c_3" },
    o1_1c_3: { sprite: "victor", quem: "victor", texto: "...O Caramelo é da família.", proxima: "o1_1c_4" },
    o1_1c_4: { quem: "eu", texto: "Ninguém leva cachorro, Victor.", proxima: "c1_10" },
    c1_10: { cenario: "escadaria-escola", transicao: "tempo", tipo: "narracao", sprite: "serena", texto: "No fim do intervalo, na escada, a Serena aparece do lado dela. Sozinha, com o sorriso perfeito no lugar, os chaveiros da mochila balançando.", proxima: "c1_11" },
    c1_11: { quem: "serena", texto: "Festa na casa da Reina. Que legal. Eu vou. E sabe o que é melhor? Festa não tem garupa. Não tem capacete. Não tem cookie verde. Lá é cada uma por si.", proxima: "c1_12" },
    c1_12: { quem: "serena", texto: "Hoje à noite ele vai lembrar quem chegou primeiro.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — A provocação
    c1_esc1: { escolhas: [
      { texto: "A. “Ele lembra, Serena. Ele lembra que você jogou suco em mim.”", proxima: "c1_1a_1", pontos: { kaito: 1 }, flags: ["Lembra_suco"] },
      { texto: "B. “Boa sorte.” Com o sorriso mais tranquilo do mundo. E subir a escada.", proxima: "c1_1b_1", pontos: { kaito: 1 }, flags: ["Boa_sorte_Serena"] },
      { texto: "C. Não responder nada. Só olhar pra ela até ela desviar primeiro.", proxima: "c1_1c_1", pontos: { desvio: 1 }, flags: ["Encarou_Serena"] }
    ]},
    c1_1a_1: { quem: "eu", texto: "Ele lembra, Serena. Ele lembra que você jogou suco em mim.", proxima: "c1_1a_2" },
    c1_1a_2: { quem: "serena", texto: "Eu? Foi sem querer. Todo mundo sabe que foi sem querer. Você que é grossa e saiu falando que foi de propósito. Coitada de mim, né.", proxima: "c1_13" },
    c1_1b_1: { quem: "eu", texto: "Boa sorte.", proxima: "c1_1b_2" },
    c1_1b_2: { tipo: "narracao", texto: "Ela sobe a escada com o sorriso tranquilo. Atrás dela, ela ouve a Serena bufar, e os chaveiros batendo com raiva.", proxima: "c1_13" },
    c1_1c_1: { tipo: "narracao", texto: "Ela não responde. Só olha. Sem piscar. A Serena aguenta três segundos. Depois desvia, ajeita o cabelo como se tivesse sido ideia dela, e vai embora.", proxima: "c1_13" },
    c1_13: { tipo: "pensamento", texto: "Ela vai fazer alguma coisa hoje. Eu sei. Tudo bem. Eu também vou estar lá.", proxima: "c2_01" },

    /* =================== CENA 2 — SE ARRUMANDO =================== */
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
    c2_11: { tipo: "pensamento", texto: "Eu sei coisa demais pra minha idade porque eu tenho vinte e oito. Mas festa assim eu nunca fui. Nem uma. Na outra vida eu só estudei. Enquanto todo mundo ia, eu ficava em casa com o livro aberto. Eu sei o que fazer porque eu li, não porque eu vivi.", proxima: "c2_12" },
    c2_12: { tipo: "pensamento", texto: "Hoje eu vou ser a que cuida de todo mundo. Dos meus.", proxima: "mh_01" },
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
    mh_12: { tipo: "narracao", texto: "Ela pisca. A Mio xinga baixinho. Tenta de novo. Na terceira, dá certo. A Hana anota na prancheta: “Rímel: 3 tentativas”.", proxima: "mh_12a" },
    mh_12a: { tipo: "narracao", sprite: "hana", texto: "Depois é a vez da Hana. Ela senta na cadeira dura como quem vai tomar vacina, de olho fechado, com a prancheta apertada no peito. A Mio passa o delineador com muito cuidado. Com cuidado demais. A Hana espirra no meio.", proxima: "mh_12b" },
    mh_12b: { tipo: "narracao", efeito: "tremor", texto: "O delineador escorrega. Um risco preto vai do canto do olho da Hana até quase a sobrancelha, torto, como um raio desenhado por criança.", proxima: "mh_12c" },
    mh_12c: { quem: "mio", sprite: "mio", texto: "...Não abre o olho. Não abre. Está ótimo. Está artístico. Está muito... moderno.", proxima: "mh_12d" },
    mh_12d: { tipo: "narracao", sprite: "hana", texto: "A Hana abre o olho. Olha no espelho. Fica em silêncio por cinco segundos inteiros. Depois pega a caneta, abre a prancheta, e escreve, sem mexer o rosto: “Vinte e dezoito. Crise. Causada pela Mio. Fora da margem.”", proxima: "mh_12e" },
    mh_12e: { quem: "hana", texto: "Isso é uma crise de nível dois. Eu nem tinha coluna pra nível dois.", proxima: "mh_12f" },
    mh_12f: { tipo: "narracao", sprite: null, texto: "A SN pega um algodão com demaquilante e limpa o risco, devagar, enquanto a Mio pede desculpa doze vezes seguidas e a Hana conta cada uma em voz alta. Na segunda tentativa, o olho fica perfeito. A Hana se olha no espelho de novo, e, sem querer, sorri.", proxima: "mh_12g" },
    mh_12g: { quem: "hana", sprite: "hana", texto: "...Ficou bonito. Não conta pra ninguém que eu falei isso. Vai na prancheta como “aceitável”.", proxima: "mh_13" },
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
    mh_23: { tipo: "narracao", texto: "Às oito e vinte e cinco, exatamente como no cronograma, as três saem de casa a pé, de braço dado, pela rua da padaria, que tem luz, a Mio no meio cantando alto e a Hana conferindo o relógio.", proxima: "c3_01" },
    /* =================== CENA 3 — DO LADO DELA (Kaito) =================== */
    c3_01: { tipo: "narracao", cenario: "frente-casa-reina-noite", transicao: "tempo", legenda: "20h40 — Cena 3", sprite: null, texto: "A casa da Reina de noite é outra casa. Portão aberto, música alta saindo de todas as janelas, luzinhas no jardim inteiro que o Takeo pendurou com um braço só, a piscina iluminada por baixo, azul. Umas cem pessoas. Na cozinha, uma tigela gigante de ponche vermelho, e uns meninos do terceiro ano abrindo garrafas que não são de suco.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", texto: "A Hana vai direto para a porta da cozinha com a prancheta, como fiscal de aeroporto. A Mio acende o microfone de brinquedo rosa e começa a transmissão. E o Victor grita “CHEGUEI” do portão, e a Relâmpago buzina duas vezes na rua, e eles entram.", proxima: "c3_03" },
    c3_03: { cenario: "festa-reina", transicao: "tempo", tipo: "narracao", sprite: "kaito", texto: "O Kaito entra por último, com o cabelo meio molhado. Para na porta da sala. Olha em volta, para a música, a gente, as luzes, com aquela cara de quem nunca gostou de festa. Ele procura alguma coisa com os olhos no meio da sala cheia. Acha ela. E para de procurar.", proxima: "c3_04" },
    c3_04: { tipo: "narracao", texto: "Ele atravessa a sala. No caminho, três meninas do segundo ano tentam falar com ele. Ele responde uma palavra para cada uma sem parar de andar, sem tirar os olhos dela. Chega.", proxima: "c3_05" },
    c3_05: { foto: "sn-festa", quem: "kaito", texto: "...Você passou rímel.", proxima: "c3_06" },
    c3_06: { quem: "eu", texto: "Três tentativas. A Hana anotou.", proxima: "c3_07" },
    c3_07: { quem: "kaito", texto: "Valeu as três.", proxima: "c3_08" },
    c3_08: { tipo: "narracao", texto: "Ele fala isso e fica vermelho do pescoço até a orelha, e ela também, e alguém esbarra no ombro dele e empurra ele um passo mais perto dela. Ele não volta o passo. Fica ali, do lado dela, encostado na mesma parede.", proxima: "c3_09" },
    c3_09: { tipo: "narracao", sprite: null, texto: "Um menino do terceiro ano passa e estende um copo cheio de ponche para ela, sorrindo. Antes que ela responda, a mão do Kaito pega o copo no ar.", proxima: "c3_10" },
    c3_10: { quem: "kaito", sprite: "kaito", texto: "Ela não quer.", proxima: "c3_11" },
    c3_11: { tipo: "narracao", texto: "Ele não fala alto. Não precisa. O menino olha para o Kaito, lembra de quem ele é, e vai embora sem o copo. O Kaito despeja o ponche na planta do canto e entrega para ela uma lata de refrigerante fechada que ele trouxe no bolso da jaqueta.", proxima: "c3_12" },
    c3_12: { quem: "eu", texto: "Você trouxe uma lata fechada no bolso.", proxima: "c3_13" },
    c3_13: { quem: "kaito", texto: "Duas. Uma pra você. Uma pra mim. O tio falou pra eu não aceitar copo de ninguém. A sua mãe também. Ela me mandou mensagem às sete e meia.", proxima: "c3_14" },
    c3_14: { quem: "eu", texto: "A minha mãe manda mensagem pra você?", proxima: "c3_15" },
    c3_15: { quem: "kaito", texto: "Ela disse: “Você vai? Então cuida dela. E cuida de você.” Eu respondi “sim, senhora”.", proxima: "c3_16" },
    c3_16: { tipo: "narracao", texto: "Eles ficam conversando encostados na parede, cada um com a sua lata. Ele conta que nunca foi numa festa dessas, que da última vez que foi numa casa cheia assim era aniversário de alguém do bairro, aos dez anos, e ele passou a festa inteira na cozinha ajudando a mãe do aniversariante a lavar copo.", proxima: "c3_17" },
    c3_17: { quem: "kaito", texto: "Eu não sei ficar no meio das pessoas. Eu sei ficar atrás do balcão.", proxima: "c3_esc2" },

    // ▶ ESCOLHA 2 — Na parede
    c3_esc2: { escolhas: [
      { texto: "A. “Então hoje o meu lado é o seu balcão.”", proxima: "c3_2a_1", pontos: { kaito: 3 }, flags: ["Meu_lado_balcao"] },
      { texto: "B. Pegar a mão dele. “Vem. A gente fica no meio junto. Se ficar ruim, a gente volta pra parede.”", proxima: "c3_2b_1", pontos: { kaito: 3 }, flags: ["Meio_junto"] },
      { texto: "C. “Você veio mesmo assim.”", proxima: "c3_2c_1", pontos: { kaito: 2 }, flags: ["Veio_mesmo_assim"] }
    ]},
    c3_2a_1: { quem: "eu", texto: "Então hoje o meu lado é o seu balcão.", proxima: "c3_2a_2" },
    c3_2a_2: { tipo: "narracao", texto: "Ele olha para ela. Ri pelo nariz. E chega mais perto, até os ombros encostarem, e fica assim, encostado nela, a lata na mão, olhando a festa como quem olha a rua de trás do balcão.", proxima: "c3_18" },
    c3_2b_1: { tipo: "narracao", texto: "Ela pega a mão dele e puxa para o meio da sala. Ele vai. Ele sempre vai quando ela puxa. No meio da música alta, ele fica parado, duro, sem saber o que fazer com o corpo. Ela começa a dançar, mal, de propósito, e ele ri, e no fim da música ele está balançando também, mal, e sem soltar a mão dela.", proxima: "c3_18" },
    c3_2c_1: { quem: "eu", texto: "Você veio mesmo assim.", proxima: "c3_2c_2" },
    c3_2c_2: { quem: "kaito", texto: "Você vinha.", proxima: "c3_2c_3" },
    c3_2c_3: { tipo: "narracao", texto: "Ele fala isso como quem explica a coisa mais simples do mundo. Ela não consegue responder. Ela fica olhando para a lata, e ele fica olhando para ela, e a música troca, e nenhum dos dois percebe.", proxima: "c3_18" },

    // (todas as opções continuam aqui)
    c3_18: { tipo: "narracao", sprite: null, texto: "E aí os chaveiros. Ela ouve antes de ver, por cima da música. A Serena chegou.", proxima: "c4_01" },

    /* =================== CENA 4 — O PONCHE (Serena) =================== */
    c4_01: { tipo: "narracao", transicao: "tempo", legenda: "21h30 — Cena 4", sprite: "serena", texto: "A Serena entra na sala como quem entra num palco. Com as duas amigas atrás, o cabelo comprido brilhando, o sorriso perfeito. Ela olha em volta uma vez só, acha o Kaito, e atravessa a sala direto, sem olhar para mais ninguém.", proxima: "c4_02" },
    c4_02: { quem: "serena", texto: "Kaito! Eu sabia que você ia estar aqui. Você nunca vem em festa. Você veio por minha causa?", proxima: "c4_03" },
    c4_03: { tipo: "narracao", texto: "Ela fala isso rindo, como piada, e encaixa o braço no braço dele, do lado oposto ao da SN, como se a SN não existisse. O Kaito olha para o braço dela no braço dele.", proxima: "c4_04" },
    c4_04: { quem: "kaito", sprite: "kaito", texto: "...Não.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "Ele tira o braço. Devagar, sem grosseria, mas tira. A Serena fica com a mão no ar um segundo. O sorriso não cai. Ela é boa nisso. Ela vai embora para o outro lado da sala, com as amigas, rindo alto de alguma coisa.", proxima: "c4_06" },
    c4_06: { tipo: "narracao", sprite: "blake", texto: "Um pouco depois, o Blake aparece do lado do Kaito, sério, e fala alguma coisa baixo no ouvido dele. O Kaito franze a testa. Os dois vão até a porta da cozinha, de costas para a sala, conversando. Alguma coisa da lojinha, ou da Relâmpago estacionada na rua, ela não ouve.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", sprite: "serena", texto: "E, no mesmo minuto em que o Kaito vira as costas, a Serena volta. Sozinha. Com um copo de plástico vermelho de ponche, cheio até a borda, numa mão.", proxima: "c4_08" },
    c4_08: { quem: "serena", texto: "Eu vim fazer as pazes. Sério. Toma, eu trouxe pra você.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "Ela estende o copo. A SN não pega. E aí a Serena faz uma coisa que a SN demora um segundo para entender. Ela vira o copo. Não em cima da SN. Nela mesma. O ponche vermelho inteiro escorre pela própria blusa dela, do pescoço até a cintura, devagar, de propósito.", proxima: "c4_10" },
    c4_10: { tipo: "narracao", efeito: "tremor", texto: "E grita.", proxima: "c4_11" },
    c4_11: { quem: "serena", texto: "AI! Ela jogou em mim! Ela jogou o ponche em mim! Eu vim fazer as pazes e ela jogou em mim!", proxima: "c4_12" },
    c4_12: { tipo: "narracao", sprite: null, texto: "A música continua, mas a sala inteira vira. E o que a sala vê é isso: a Serena encharcada de vermelho, com as mãos tremendo, e a SN parada na frente dela, perto, com a mão ainda meio levantada de quando não quis pegar o copo.", proxima: "c4_13" },
    c4_13: { tipo: "narracao", texto: "Ninguém viu. Ninguém viu o pulso dela virar para dentro. O Kaito estava de costas, na porta da cozinha, com o Blake. As amigas da Serena chegam correndo e abraçam ela. Uma delas grita que viu, que a SN jogou. Ela não viu nada. Ela estava do outro lado da sala.", proxima: "c4_14" },
    c4_14: { quem: "serena", sprite: "serena", texto: "Eu só gosto dele. É crime gostar de alguém? Ela fica jogando na minha cara que ganhou, e eu ainda venho tentar ser legal, e ela faz isso comigo na frente de todo mundo...", proxima: "c4_15" },
    c4_15: { tipo: "narracao", sprite: null, texto: "Ela chora. Lágrima de verdade, com o rímel borrando só o suficiente para parecer sincero. E a sala começa a cochichar. Ela ouve. “Foi a baixinha.” “A do cookie verde.” “Coitada da Serena.” Uma menina do segundo ano olha para a SN com nojo.", proxima: "c4_16" },
    c4_16: { tipo: "pensamento", texto: "Ela jogou nela mesma. Ela se molhou inteira de propósito pra parecer que fui eu. Ela é boa. Ela é muito boa nisso. Na outra vida eu conheci umas assim. Elas sempre ganham a primeira rodada, porque ninguém acredita que alguém faria isso consigo mesma.", proxima: "c4_17" },
    c4_17: { tipo: "narracao", sprite: "kaito", texto: "O Kaito chega correndo da porta da cozinha, com o Blake atrás. Olha para a Serena encharcada. Olha para a SN. Olha para a roda cochichando. Ele não viu. Ela vê na cara dele que ele não viu.", proxima: "c4_18" },
    c4_18: { tipo: "narracao", sprite: "serena", texto: "A Serena vira para ele, chorando, e por cima do ombro da amiga olha para a SN. Um segundo só. E nesse segundo não tem lágrima nenhuma no olhar dela. Só uma coisa fria, satisfeita. Depois volta a chorar, mais alto, para o Kaito ouvir.", proxima: "c4_esc3" },

    // ▶ ESCOLHA 3 — O ponche
    c4_esc3: { escolhas: [
      { texto: "A. “Eu não joguei nada. Ela virou o copo nela mesma.” Calma. Pra sala inteira ouvir.", proxima: "c4_3a_1", pontos: { kaito: 1 }, flags: ["Negou_ponche"] },
      { texto: "B. “Chora mais alto, Serena. Do fundo ainda não estão ouvindo.”", proxima: "c4_3b_1", pontos: { desvio: 1 }, flags: ["Chora_alto"] },
      { texto: "C. Não falar nada pra ela. Olhar só pro Kaito.", proxima: "c4_3c_1", pontos: { kaito: 2 }, flags: ["Olhou_Kaito_ponche"] }
    ]},
    c4_3a_1: { quem: "eu", texto: "Eu não joguei nada. Ela virou o copo nela mesma.", proxima: "c4_3a_2" },
    c4_3a_2: { quem: "serena", sprite: "serena", texto: "Agora eu me molhei sozinha? Vocês ouviram isso? Ela joga em mim e ainda diz que eu que fiz. É sempre assim. Ela sempre sai de boazinha.", proxima: "c4_3a_3" },
    c4_3a_3: { tipo: "narracao", sprite: null, texto: "A roda acredita na Serena. Ela vê. Ninguém acredita que alguém se molharia inteira de propósito. É exatamente por isso que funciona.", proxima: "c4_19" },
    c4_3b_1: { quem: "eu", texto: "Chora mais alto, Serena. Do fundo ainda não estão ouvindo.", proxima: "c4_3b_2" },
    c4_3b_2: { tipo: "narracao", sprite: "serena", texto: "Foi a resposta errada. A Serena solta um soluço enorme e cobre o rosto com as mãos, e as amigas apertam ela, e alguém da roda fala “nossa, que grossa”. A Serena, por trás das mãos, está sorrindo. Só a SN vê.", proxima: "c4_19" },
    c4_3c_1: { tipo: "narracao", texto: "Ela não fala nada para a Serena. Nem um segundo. Ela olha só para o Kaito, parado na frente dela, com o Blake atrás. Ela não se explica. Ela espera.", proxima: "c4_19" },

    // (todas as opções continuam aqui)
    c4_19: { quem: "kaito", sprite: "kaito", texto: "Você jogou?", proxima: "c4_20" },
    c4_20: { quem: "eu", texto: "Não.", proxima: "c4_21" },
    c4_21: { tipo: "narracao", texto: "Ele olha para ela. Depois para a Serena, encharcada de vermelho, chorando de verdade, as mãos tremendo. Depois para ela de novo. E pela primeira vez desde que ela conhece ele, ela vê o Kaito não ter certeza.", proxima: "c4_22" },
    c4_22: { quem: "kaito", texto: "...Tá.", proxima: "c4_23" },
    c4_23: { tipo: "narracao", sprite: "serena", texto: "Não é “então não jogou”. É “tá”. A Serena ouve a diferença. Todo mundo ouve. Ela solta um soluço e olha para ele, molhada, pingando ponche no chão da sala da avó da Reina.", proxima: "c4_24" },
    c4_24: { quem: "serena", texto: "Kaito, olha pra mim. Você acha que eu ia me molhar inteira sozinha? Na frente de todo mundo? Por quê? Pra quê? Eu não sou louca.", proxima: "c4_25" },
    c4_25: { quem: "kaito", sprite: "kaito", texto: "...Eu não vi.", proxima: "c4_26" },
    c4_26: { tipo: "narracao", sprite: null, texto: "Ele fala isso baixo, olhando para o chão, e não é defesa de ninguém. É só verdade. Depois pega a mão da SN, mais devagar do que costuma, e leva ela para fora da roda, pela escada, para o andar de cima. Atrás deles, a Serena chora mais alto, e a sala cochicha. Metade da festa vai passar a noite achando que a SN jogou ponche na Serena. E o Kaito não tem certeza. A Serena conseguiu isso.", proxima: "c4_27" },
    c4_27: { tipo: "narracao", sprite: "reina", texto: "No corredor de cima, a Reina vem encontrar os dois, com o celular na mão, porque a rede de fofoca chegou no andar de cima antes deles.", proxima: "c4_28" },
    c4_28: { quem: "reina", texto: "Eu não vi. Ninguém viu. Mas eu conheço você. E eu conheço ela. Se ela fizer mais uma cena na minha casa, eu mando ela embora de táxi, com testemunha ou sem testemunha.", proxima: "c5_01" },

    /* =================== CENA 5 — A VARANDA DE CIMA (Kaito) =================== */
    c5_01: { tipo: "narracao", cenario: "festa-reina", transicao: "tempo", legenda: "Cena 5", sprite: null, texto: "O Kaito aponta com o queixo para uma porta de vidro no fim do corredor de cima. Uma varanda. Longe da sala, longe dos cochichos.", proxima: "c5_02" },
    c5_02: { cenario: "jardim-reina", transicao: "tempo", tipo: "narracao", texto: "A varanda de cima é pequena, com duas cadeiras de ferro e um vaso de planta. Lá embaixo, o jardim inteiro, as luzinhas, a piscina azul, a festa. Aqui em cima, a música chega abafada. Eles sentam no chão da varanda, encostados na parede, um do lado do outro.", proxima: "c5_03" },
    c5_03: { quem: "kaito", texto: "Ela estava chorando de verdade. Eu conheço a Serena faz dois anos. Eu nunca vi ela chorar.", proxima: "c5_04" },
    c5_04: { quem: "eu", texto: "Eu vi. Ontem. No vestiário. Depois de jogar suco de uva em mim.", proxima: "c5_05" },
    c5_05: { tipo: "narracao", texto: "Ele fica quieto. Olha para as mãos. Lá embaixo, a música da festa chega abafada.", proxima: "c5_06" },
    c5_06: { quem: "kaito", texto: "Eu acredito em você. Eu... eu acho que acredito. Mas eu não vi. E eu não entendo por que alguém ia se molhar inteira de propósito. Isso não faz sentido na minha cabeça.", proxima: "c5_esc_d" },
    c5_esc_d: { escolhas: [
      { texto: "A. “Não faz sentido porque você não faria isso. Ela faria. Ela fez.”", proxima: "c5_da_1", pontos: { kaito: 2 }, flags: ["Ela_fez"] },
      { texto: "B. “Você não precisa acreditar hoje. Um dia você vai ver ela fazer de novo. E aí você vai lembrar.”", proxima: "c5_db_1", pontos: { kaito: 2 }, flags: ["Um_dia_vai_ver"] },
      { texto: "C. Levantar. “Se você acha que eu joguei, eu desço.” Firme, sem chorar.", proxima: "c5_dc_1", pontos: { kaito: 3 }, flags: ["Se_acha_desco"] }
    ]},
    c5_da_1: { quem: "eu", texto: "Não faz sentido porque você não faria isso. Ninguém que você conhece faria. Ela faria. Ela fez.", proxima: "c5_da_2" },
    c5_da_2: { tipo: "narracao", texto: "Ele olha para ela muito tempo. Ela vê ele pensar, ver de novo a cena na cabeça, a Serena molhada, as amigas, o choro. Ele faz que sim devagar. Não é certeza ainda. Mas é mais perto.", proxima: "c5_08" },
    c5_db_1: { quem: "eu", texto: "Você não precisa acreditar hoje. Um dia você vai ver ela fazer de novo. E aí você vai lembrar dessa varanda.", proxima: "c5_db_2" },
    c5_db_2: { tipo: "narracao", texto: "Ele não responde. Mas guarda. Ela vê ele guardar, do jeito que ele guarda tudo.", proxima: "c5_08" },
    c5_dc_1: { tipo: "narracao", texto: "Ela levanta. Não chora. Fica de pé na varanda, olhando para ele lá embaixo, no chão.", proxima: "c5_dc_2" },
    c5_dc_2: { quem: "eu", texto: "Se você acha que eu joguei, eu desço. Agora. E não volto.", proxima: "c5_dc_3" },
    c5_dc_3: { tipo: "narracao", texto: "Ele levanta tão rápido que bate a cabeça no vaso de planta. Segura a mão dela. Não deixa ela ir.", proxima: "c5_dc_4" },
    c5_dc_4: { quem: "kaito", texto: "Não. Fica. Eu não acho que você jogou. Eu acho que eu não entendo. É diferente. Fica.", proxima: "c5_08" },
    c5_08: { tipo: "narracao", texto: "Ele fica quieto muito tempo. Depois, devagar, estica a mão e tira uma mecha de cabelo que caiu no rosto dela, e coloca atrás da orelha. Como quem pede desculpa sem saber direito pelo quê.", proxima: "c5_09" },
    c5_09: { quem: "kaito", texto: "Eu odeio não ter visto. Eu sempre vejo tudo. Hoje eu estava de costas, e agora tem uma coisa na minha cabeça que eu não sei de onde veio.", proxima: "c5_10" },
    c5_10: { quem: "eu", texto: "Veio dela. Ela colocou aí.", proxima: "c5_11" },
    c5_11: { quem: "kaito", texto: "...Então eu vou tirar. Devagar. Mas eu vou.", proxima: "c5_12" },
    c5_12: { tipo: "narracao", texto: "Eles ficam um tempo em silêncio, olhando o jardim lá embaixo. Ele conta da lojinha, que agora são vinte e três dias, e que o tio não fala disso mas fica olhando a parede do aviso de noite. Ela conta, sem contar tudo, que tem um menino de óculos na cabeça dela, um menino de uma vida que ela não lembra direito.", proxima: "c5_13" },
    c5_13: { quem: "kaito", texto: "Menino de óculos?", proxima: "c5_14" },
    c5_14: { quem: "eu", texto: "Uma lembrança. De quando eu tinha uns cinco anos. Pedaços.", proxima: "c5_15" },
    c5_15: { tipo: "narracao", texto: "O Kaito fica parado. Muito parado. Ele abre a boca para falar alguma coisa e fecha. Ela vê. Ele também tem pedaços. Mas ele não fala dos dele.", proxima: "c5_16" },
    c5_16: { quem: "kaito", texto: "...Às vezes a gente lembra de quem a gente era antes. E às vezes é melhor não lembrar de tudo de uma vez.", proxima: "c5_17" },
    c5_17: { tipo: "narracao", texto: "Ele fala isso olhando para o jardim, e encosta o ombro no dela, e deixa. Depois de um tempo, ele levanta.", proxima: "c5_18" },
    c5_18: { quem: "kaito", texto: "Eu vou pegar água pra você. Da garrafa fechada do Blake. Não sai daqui.", proxima: "c5_19" },
    c5_19: { tipo: "narracao", sprite: null, texto: "Ele vai. Ela fica sozinha na varanda, sentada no chão, encostada na parede, olhando as luzinhas lá embaixo. Um minuto. E aí ela ouve a porta de vidro da varanda abrir atrás dela. Devagar. Sem barulho de chaveiro.", proxima: "rn_01" },

    // --- O Ren vai até ela (todas as rotas) ---
    rn_01: { sprite: "ren", tipo: "narracao", texto: "É o Ren. Parado na porta da varanda, com as mãos nos bolsos, sem copo, do jeito que esteve a festa inteira, no canto da sala, olhando.", proxima: "rn_02" },
    rn_02: { tipo: "pensamento", texto: "Não. Hoje não. Eu não tenho paciência pra ele hoje. Eu não quero ouvir a voz dele, nem ver ele parado na porta como se a casa fosse dele também.", proxima: "rn_03" },
    rn_03: { quem: "eu", texto: "Sai daqui, Ren.", proxima: "rn_04" },
    rn_04: { tipo: "narracao", texto: "Ele não sai. Ele também não chega perto. Fica na porta, a quatro metros, a distância de sempre.", proxima: "rn_05" },
    rn_05: { quem: "ren", texto: "Ela virou o copo nela mesma.", proxima: "rn_06" },
    rn_06: { tipo: "narracao", texto: "Ela vira a cabeça devagar para ele.", proxima: "rn_07" },
    rn_07: { quem: "ren", texto: "Eu vi. Do canto. O pulso dela virou pra dentro. As amigas estavam do outro lado da sala.", proxima: "rn_08" },
    rn_08: { tipo: "pensamento", texto: "Ele viu. O único que viu. No meio de cem pessoas, o único que estava olhando era ele. Porque ele sempre está olhando pra mim.", proxima: "rn_09" },
    rn_09: { quem: "ren", texto: "Se você quiser, eu falo. Pra sala. Pra ele.", proxima: "rn_esc" },

    // ▶ ESCOLHA — O Ren viu
    rn_esc: { escolhas: [
      { texto: "A. “Eu não preciso de você pra ele acreditar em mim.”", proxima: "rn_a1", pontos: { desvio: 1 }, flags: ["Nao_preciso_Ren"] },
      { texto: "B. “Não quero nada seu. Quer me ajudar? Devolve a lojinha do tio do Kaito.”", proxima: "rn_b1", pontos: { desvio: 1 }, flags: ["Lojinha_Ren"] },
      { texto: "C. “Você não vai falar nada. E você não vai fazer nada com ela. Nada.”", proxima: "rn_c1", pontos: { desvio: 1 }, flags: ["Nada_com_Serena"] }
    ]},
    rn_a1: { quem: "eu", texto: "Eu não preciso de você pra ele acreditar em mim. Se ele acreditar, vai ser porque ele me conhece. Não porque o Ren da carteira da porta mandou.", proxima: "rn_a2" },
    rn_a2: { tipo: "narracao", texto: "Ele fica parado. O rosto não muda. Mas ela vê, rápido, alguma coisa encolher dentro dele, como quem oferece a única coisa que tem e vê ela ser recusada.", proxima: "rn_10" },
    rn_b1: { quem: "eu", texto: "Eu não quero nada seu. Nem ajuda, nem testemunha. Quer me ajudar? Devolve a lojinha do tio do Kaito. Vinte e três dias, Ren. O tio fica olhando a parede do aviso de noite.", proxima: "rn_b2" },
    rn_b2: { quem: "ren", texto: "O rei, não.", proxima: "rn_b3" },
    rn_b3: { quem: "eu", texto: "Então não tem conversa. Sai.", proxima: "rn_10" },
    rn_c1: { quem: "eu", texto: "Você não vai falar nada. E você não vai fazer nada com ela. Nem com o pai dela, nem com a casa dela. Nada. Eu sei o que você faz com quem mexe comigo.", proxima: "rn_c2" },
    rn_c2: { quem: "ren", texto: "Ela mentiu sobre você. Na frente de todo mundo.", proxima: "rn_c3" },
    rn_c3: { quem: "eu", texto: "E eu resolvo. Sozinha. Igual o suco.", proxima: "rn_10" },

    // (todas as opções continuam aqui)
    rn_10: { tipo: "narracao", texto: "Ele não sai. Ela levanta. Fica de pé, de frente para ele, na varanda pequena, com as luzinhas do jardim atrás dela. Ela está cansada. Cansada da Serena, cansada da sala cochichando, cansada dele parado nas portas.", proxima: "rn_11" },
    rn_11: { quem: "eu", texto: "Escuta, Ren. Você não é mais o menino de óculos que ficou trinta e um dias na chuva. Você não é o mesmo de antes.", proxima: "rn_12" },
    rn_12: { quem: "eu", texto: "Hoje você pode fazer amizade com quem você quiser. Pode descer e conversar com qualquer pessoa nessa festa. Pode namorar com quem você quiser. Você não precisa mais ter medo de chegar perto das pessoas.", proxima: "rn_13" },
    rn_13: { quem: "eu", texto: "Mas se você continuar agindo assim, comprando prédio, mandando gente no escuro, olhando todo mundo de longe e aparecendo nas portas, você só vai afastar quem está perto de você. Até não sobrar ninguém. E dessa vez a culpa vai ser sua.", proxima: "rn_14" },
    rn_14: { tipo: "narracao", texto: "A mão dele, dentro do bolso, aperta. Ela vê o tecido do casaco esticar.", proxima: "rn_15" },
    rn_15: { quem: "ren", texto: "Eu não tenho medo.", proxima: "rn_16" },
    rn_16: { quem: "eu", texto: "Então por que você fica sempre no canto?", proxima: "rn_17" },
    rn_17: { tipo: "narracao", texto: "Ele abre a boca. Fecha. Lá dentro, no corredor, passos subindo a escada. O Kaito, voltando com a água. O Ren ouve também. Ele olha para o corredor. Depois para ela.", proxima: "rn_18" },
    rn_18: { quem: "ren", texto: "...Boa festa.", proxima: "rn_19" },
    rn_19: { sprite: null, tipo: "narracao", texto: "E ele vai. Pela outra ponta do corredor, pela escada dos fundos, antes de o Kaito aparecer. Um minuto depois, da varanda, ela vê ele atravessar o jardim lá embaixo, sozinho, e parar no portão. Ele olha para trás. Para a casa cheia. Fica olhando um tempo, como quem olha para uma coisa que poderia ter sido dele. E vai embora.", proxima: "rn_20" },
    rn_20: { tipo: "narracao", sprite: "kaito", texto: "O Kaito aparece na porta da varanda com duas garrafas de água fechadas. Olha para ela de pé, com a cara fechada. Olha para o corredor vazio.", proxima: "rn_21" },
    rn_21: { quem: "kaito", texto: "Quem estava aqui?", proxima: "rn_esc2" },
    rn_esc2: { escolhas: [
      { texto: "A. “Ninguém.”", proxima: "rn_2a", pontos: {}, flags: ["Escondeu_Ren_varanda"] },
      { texto: "B. “O Ren. Ele viu o que ela fez. Ele foi o único.”", proxima: "rn_2b", pontos: { kaito: 1 }, flags: ["Contou_Ren_viu"] }
    ]},
    rn_2a: { quem: "eu", texto: "Ninguém.", proxima: "rn_2a2" },
    rn_2a2: { tipo: "narracao", texto: "Ele olha para ela mais um segundo. Não insiste. Entrega a água. Mas a dúvida da sala, a pequena, no canto do olho dele, fica um pouco maior. Ela vê. E não sabe consertar sem falar do Ren.", proxima: "c6_01" },
    rn_2b: { quem: "eu", texto: "O Ren. Ele viu o que ela fez. Ele foi o único que viu. Ele ofereceu falar pra todo mundo. Eu disse não.", proxima: "rn_2b2" },
    rn_2b2: { tipo: "narracao", texto: "O Kaito fica parado com as duas garrafas na mão. O rosto dele faz uma coisa complicada: alívio, porque alguém viu, e raiva, porque foi o Ren. Ele entrega a água sem falar nada. Depois senta do lado dela de novo, encostado, mais perto que antes.", proxima: "rn_2b3" },
    rn_2b3: { quem: "kaito", texto: "...Você disse não pra ele por minha causa?", proxima: "rn_2b4" },
    rn_2b4: { quem: "eu", texto: "Eu disse não porque eu não quero nada dele. E porque eu queria que você acreditasse em mim sem ninguém mandar.", proxima: "rn_2b5" },
    rn_2b5: { tipo: "narracao", texto: "Ele não responde. Mas a mão dele procura a dela no chão da varanda, e segura. E fica.", proxima: "c6_01" },

    /* =================== CENA 6 — A PISCINA (Ryuji e Victor) =================== */
    c6_01: { tipo: "narracao", cenario: "piscina-reina", transicao: "tempo", legenda: "23h — Cena 6", sprite: "ryuji", texto: "Na beira da piscina, o Ryuji está numa espreguiçadeira com uma lata de cerveja pela metade. Uma só. E já está olhando para a lua com os olhos molhados.", proxima: "c6_02" },
    c6_02: { quem: "ryuji", texto: "SN! Kaito! Olha a lua! A lua é igual a Relâmpago! Ninguém acha que ela é dourada! Mas ela é dourada de luz! Eu sou fraco pra bebida. Eu subo escada de doze metros, mas eu sou fraco pra meia lata. A vida é cheia de contradição.", proxima: "c6_03" },
    c6_03: { tipo: "narracao", texto: "A SN tira a lata da mão dele e coloca uma garrafa de água do fardo do Blake no lugar. Ele nem percebe a troca. O Kaito senta na espreguiçadeira do lado e fica rindo, quieto, de mão dada com ela por baixo da toalha.", proxima: "c6_04" },
    c6_04: { sprite: "victor", quem: "victor", texto: "Senhoras e senhores! Planta bêbada! Agora eu vou atravessar a borda da piscina de olho fechado!", proxima: "c6_05" },
    c6_05: { tipo: "narracao", sprite: null, efeito: "tremor", texto: "O Victor, que não bebeu nada, que faz isso sóbrio, está em pé na borda estreita, de braços abertos, com o pirulito na boca. Três passos. No quarto, o sapato escorrega. Ele abre os olhos com cara de surpresa absoluta. E cai na piscina de costas, de roupa, com o pirulito.", proxima: "c6_06" },
    c6_06: { quem: "ryuji", sprite: "ryuji", texto: "VÍTIMA NA ÁGUA! PROTOCOLO DE RESGATE!", proxima: "c6_07" },
    c6_07: { tipo: "narracao", sprite: null, texto: "E o Ryuji pula atrás, de tênis, na parte rasa, que tem um metro. Os dois ficam em pé na água até a cintura, o Ryuji segurando o Victor pelo colarinho como quem resgata alguém de um naufrágio. O Victor avisa que está em pé. O Ryuji responde que ele está salvo e que não precisa agradecer.", proxima: "c6_08" },
    c6_08: { tipo: "narracao", sprite: "blake", texto: "O Blake aparece com duas toalhas e duas mudas de roupa seca que ele trouxe na mochila, porque, segundo ele, o Victor sempre cai em alguma coisa. Ele entrega sem falar nada. E fica olhando, por cima do ombro, para dentro da sala. Para a Mio, que está do lado do piano com a coroa de papelão.", proxima: "c6_09" },
    c6_09: { tipo: "narracao", sprite: null, texto: "O Ryuji sai da piscina, enrolado na toalha, deita de novo na espreguiçadeira, e em cinco minutos está dormindo, de boca aberta, com a faixa na testa, abraçado na garrafa de água como num ursinho. Ele resmunga dormindo: “dourada de luz”. Ninguém consegue acordar ele pelo resto da noite.", proxima: "c7_01" },

    /* =================== CENA 7 — VERDADE OU DESAFIO (Serena) =================== */
    c7_01: { tipo: "narracao", cenario: "festa-reina", transicao: "tempo", legenda: "Meia-noite — Cena 7", sprite: "mio", texto: "Meia-noite. Na sala, no tapete enorme da avó, uns quinze em roda, com uma garrafa vazia no meio. A Mio no comando, de coroa de papelão e microfone rosa. A regra: quem não responder ou não cumprir, bebe um copo.", proxima: "c7_02" },
    c7_02: { tipo: "narracao", sprite: null, texto: "A SN senta entre a Mio e o Kaito. Do outro lado da roda, entre as duas amigas, a Serena, de blusa trocada, emprestada de alguém, com o rímel refeito e os olhos ainda um pouco vermelhos, de propósito. Cada vez que alguém olha para ela, ela abaixa os olhos, como quem ainda está machucada.", proxima: "c7_03" },
    c7_03: { tipo: "narracao", texto: "A garrafa gira. Para na Serena, que pergunta. E no Kaito, que responde. A roda faz “uuuuh”. A Serena sorri devagar, pequeno, triste. Como quem estava esperando exatamente isso.", proxima: "c7_04" },
    c7_04: { quem: "serena", sprite: "serena", texto: "Kaito. Verdade ou desafio?", proxima: "c7_05" },
    c7_05: { quem: "kaito", sprite: "kaito", texto: "...Verdade.", proxima: "c7_06" },
    c7_06: { tipo: "narracao", sprite: "serena", texto: "A Serena fica um tempo em silêncio. Olha para as próprias mãos. Quando fala, a voz sai baixa, quebrada, feita para a roda inteira ouvir e sentir pena.", proxima: "c7_07" },
    c7_07: { quem: "serena", texto: "Se você tivesse percebido antes... no primeiro ano. Quando eu levei o bolo. Se você tivesse percebido antes de tudo isso... o que você faria?", proxima: "c7_08" },
    c7_08: { tipo: "narracao", sprite: null, texto: "A roda inteira fica em silêncio. A Mio abaixa o microfone. Todo mundo olha para o Kaito. Depois para a SN, do lado dele. Depois para a Serena, com os olhos cheios. É uma pergunta feita para não ter resposta boa.", proxima: "c7_09" },
    c7_09: { tipo: "pensamento", texto: "Se ele disser “nada”, ele é o cara cruel que humilhou a menina que levou bolo. Se ele disser qualquer outra coisa, ela ganha. Ela não fez uma pergunta. Ela armou uma armadilha.", proxima: "c7_10" },
    c7_10: { tipo: "narracao", sprite: "kaito", texto: "O Kaito não responde. Ele estica a mão até o meio da roda, pega um copo de plástico de ponche, cheio, e bebe. Inteiro. Sem parar. Sem tirar os olhos do copo. Ele não tinha bebido nada a noite inteira.", proxima: "c7_11" },
    c7_11: { tipo: "narracao", texto: "Ele coloca o copo vazio no tapete, de cabeça para baixo. Limpa a boca com as costas da mão. E não fala nada. A regra é clara: quem não responde, bebe. Ele bebeu.", proxima: "c7_12" },
    c7_12: { tipo: "narracao", sprite: "serena", texto: "A Serena fica parada. A boca dela treme. E ela faz a coisa que faz melhor. Ela deixa uma lágrima cair. Só uma. Bem devagar. E sorri, um sorriso pequeno, de mártir.", proxima: "c7_13" },
    c7_13: { quem: "serena", texto: "Tudo bem. Eu entendi. Desculpa ter perguntado. Eu não queria estragar a festa de ninguém. Eu sei que eu sou a chata aqui.", proxima: "c7_14" },
    c7_14: { tipo: "narracao", sprite: null, texto: "E a roda cai. Ela vê a roda cair. Uma menina abraça a Serena. Outra fala “não, você não é chata”. Um menino do terceiro ano olha para o Kaito com cara feia. E várias pessoas olham para a SN. Como se fosse culpa dela. Como se ela tivesse feito o Kaito beber.", proxima: "c7_15" },
    c7_15: { quem: "serena", sprite: "serena", texto: "Eu vou embora. Ninguém precisa se preocupar comigo. Eu sempre fico bem sozinha.", proxima: "c7_16" },
    c7_16: { tipo: "narracao", texto: "Ela levanta, devagar, e as amigas levantam junto, e ela atravessa a sala de cabeça baixa, com metade da festa olhando para ela com pena. Na porta, ela passa do lado da SN. E, sem mudar a cara triste, sem que ninguém mais ouça, ela fala baixinho.", proxima: "c7_17" },
    c7_17: { quem: "serena", texto: "Ele bebeu porque não teve coragem de dizer que não. Pensa nisso. Isso não acabou.", proxima: "c7_esc4" },

    // ▶ ESCOLHA 4 — A saída da Serena
    c7_esc4: { escolhas: [
      { texto: "A. Baixo, só pra ela: “Ele bebeu porque a resposta não era sobre você.”", proxima: "c7_4a_1", pontos: { kaito: 2 }, flags: ["Resposta_nao_e_voce"] },
      { texto: "B. Não responder. Deixar ela ir. Não dar a ela a cena que ela quer.", proxima: "c7_4b_1", pontos: { kaito: 1 }, flags: ["Nao_deu_cena"] },
      { texto: "C. “Tchau, Serena. Cuidado com o ponche no caminho.”", proxima: "c7_4c_1", pontos: { desvio: 1 }, flags: ["Cuidado_ponche"] }
    ]},
    c7_4a_1: { quem: "eu", texto: "Ele bebeu porque a resposta não era sobre você.", proxima: "c7_4a_2" },
    c7_4a_2: { tipo: "narracao", sprite: "serena", texto: "A Serena trava. Um segundo. O rosto de mártir racha, e por baixo aparece a raiva, pura, rápida. Depois ela ajeita o cabelo e sai, e o rosto de mártir volta antes de ela chegar no portão.", proxima: "c7_18" },
    c7_4b_1: { tipo: "narracao", texto: "Ela não responde. Ela fica parada, de cara tranquila, olhando a Serena ir. A Serena espera, na porta, um segundo a mais, esperando a resposta, a briga, alguma coisa para contar depois. Não vem nada. Ela vai embora sem a cena.", proxima: "c7_18" },
    c7_4c_1: { quem: "eu", texto: "Tchau, Serena. Cuidado com o ponche no caminho.", proxima: "c7_4c_2" },
    c7_4c_2: { tipo: "narracao", sprite: "serena", texto: "A Serena sorri. Ela gostou. Ela vira para as amigas e fala alto, chorando de novo: “Vocês ouviram? Até agora ela debocha de mim.” E sai com mais pena do que entrou.", proxima: "c7_18" },

    // (todas as opções continuam aqui)
    c7_18: { tipo: "narracao", sprite: null, texto: "A porta fecha. Os chaveiros somem pela rua. A roda fica num silêncio esquisito. A Mio acende o microfone rosa, olha para a SN, e desliga de novo sem falar nada, o que nunca aconteceu na história da rádio.", proxima: "c7_19" },
    c7_19: { tipo: "narracao", sprite: "reina", texto: "A Reina levanta, bate palma duas vezes, e manda a Akane voltar para o piano, e alguém aumentar a música. A festa volta, devagar. Mas a SN ainda sente os olhares.", proxima: "c7_20" },
    c7_20: { tipo: "narracao", sprite: "kaito", texto: "O Kaito levanta da roda e para do lado dela, na parede da porta de vidro. Ele está com o rosto um pouco vermelho do ponche, que ele não está acostumado a beber.", proxima: "c7_21" },
    c7_21: { quem: "eu", texto: "Você bebeu.", proxima: "c7_22" },
    c7_22: { quem: "kaito", texto: "Eu não ia responder aquilo. Não na frente de todo mundo. Não pra ela.", proxima: "c7_23" },
    c7_23: { quem: "eu", texto: "Ela disse que você bebeu porque não teve coragem de dizer não.", proxima: "c7_24" },
    c7_24: { tipo: "narracao", texto: "O Kaito olha para ela. Sério. O rosto vermelho do ponche, mas os olhos não.", proxima: "c7_25" },
    c7_25: { quem: "kaito", texto: "A resposta verdadeira era “nada”. Mas ela chorou. Duas vezes hoje. Uma eu não sei de quem foi a culpa. A segunda foi minha. Eu bebi e ela chorou. Eu fui cruel?", proxima: "c7_26" },
    c7_26: { quem: "eu", texto: "Você não foi cruel. Ela escolheu chorar na frente de todo mundo. Ela escolhe tudo, Kaito. Até quando parece que não escolheu.", proxima: "c7_27" },
    c7_27: { tipo: "narracao", texto: "Ele olha para ela. Faz que sim. Mas ela vê a dúvida ainda lá, pequena, no canto do olho dele. Não dúvida dela. Dúvida de tudo. A Serena plantou uma semente. Ela sabe disso. E sabe que vai ter que esperar a semente secar sozinha.", proxima: "c7_28" },
    c7_28: { quem: "kaito", texto: "Pra você eu falo. Tudo. Só me dá um tempo pra entender o que aconteceu hoje.", proxima: "r_cam" },

    /* =================== ROTA — MADRUGADA =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito: a Mio e o Blake, depois a SN e o Kaito ----------
    rk_01: { tipo: "narracao", cenario: "festa-reina", transicao: "tempo", legenda: "1h30", sprite: "blake", texto: "Uma e meia da manhã. A festa diminuiu. A Akane está tocando uma música lenta no piano da avó, devagar, só para quem sobrou. E a SN vê o Blake atravessar a sala. Abaixando a cabeça embaixo do lustre. Ele não está indo para o fardo de água. Está indo para a Mio, encostada no piano, com a coroa de papelão torta.", proxima: "rk_02" },
    rk_02: { tipo: "narracao", texto: "Ele para na frente dela. Ela fica completamente parada, como um cervo na estrada.", proxima: "rk_03" },
    rk_03: { quem: "blake", texto: "Dança?", proxima: "rk_04" },
    rk_04: { quem: "mio", sprite: "mio", texto: "...Comigo?", proxima: "rk_05" },
    rk_05: { quem: "blake", sprite: "blake", texto: "Eu pensei bastante. Eu penso devagar. Mas eu pensei. Eu quero pedir. Não esperar ninguém pedir.", proxima: "rk_06" },
    rk_06: { tipo: "narracao", sprite: null, texto: "A Mio guarda o microfone no bolso e pega a mão dele. Eles dançam do lado do piano, ele enorme e duro como uma porta, ela sem saber o que fazer com os pés. Ele pisa no pé dela duas vezes. Ela ri as duas. No fim da música, eles saem pela porta da frente, para a varanda. Sem falar nada.", proxima: "rk_07" },
    rk_07: { cenario: "frente-casa-reina-noite", transicao: "tempo", sprite: null, tipo: "narracao", texto: "Dez minutos depois, a SN vai até a porta da frente para pegar ar. E para. Na escada da varanda, embaixo da luz amarela, a Mio está sentada com a cabeça no ombro do Blake, e ele está falando alguma coisa baixo, e ela está rindo aquele riso de madrugada que a SN conhece desde sempre.", proxima: "rk_08" },
    rk_08: { tipo: "narracao", texto: "Aí a Mio levanta a cabeça. Olha para ele. E o Blake se inclina, devagar, do jeito que ele faz tudo, como quem confere três vezes antes, e beija ela. A Mio deixa o microfone cair da mão. Ele quica na escada e acende sozinho, transmitindo para ninguém.", proxima: "rk_09" },
    rk_09: { cenario: "festa-reina", transicao: "tempo", tipo: "narracao", texto: "A SN volta para dentro sem fazer barulho. Encosta na parede do corredor. Tapa a boca com as duas mãos para não gritar. Ela gostou dele desde o primeiro ano. Ela viu ele com a Sayuri e não falou nada. E hoje ele atravessou a sala pra pedir.", proxima: "rk_10" },
    rk_10: { tipo: "narracao", sprite: "kaito", texto: "O Kaito está no fim do corredor, olhando para ela com as mãos tapando a boca. Ele não pergunta. Ele olha pela janela, vê a escada da varanda, entende. E sorri, de canto.", proxima: "rk_11" },
    rk_11: { quem: "kaito", texto: "Quatrocentos e treze a zero. Hoje ele ganhou uma.", proxima: "rk_12" },
    rk_12: { tipo: "narracao", texto: "Ele estende a mão. Ela pega. E ele leva ela pelo corredor, pela cozinha, pela porta dos fundos, até o jardim, onde ninguém mais está. Só as luzinhas tortas do Takeo, os grilos, e o barulho do filtro da piscina. E o Ryuji, dormindo na espreguiçadeira lá longe, abraçado na garrafa de água.", proxima: "rk_13" },
    rk_13: { tipo: "narracao", cenario: "jardim-reina", transicao: "tempo", legenda: "Jardim", texto: "Eles param no meio do jardim, embaixo das luzinhas. Ela ainda sente os olhares da sala, mas aqui fora não tem ninguém para olhar.", proxima: "rk_14" },
    rk_14: { quem: "kaito", texto: "Não tem timer aqui. Não tem forno. O Ryuji está dormindo. Eu conferi duas vezes.", proxima: "rk_15" },
    rk_15: { quem: "eu", texto: "Você conferiu?", proxima: "rk_16" },
    rk_16: { quem: "kaito", texto: "Eu cutuquei ele. Ele disse “dourada de luz” e virou pro outro lado.", proxima: "rk_17" },
    rk_17: { tipo: "narracao", texto: "Ela ri. E ele para de rir antes dela. Ele fica olhando para ela, de perto, com as orelhas vermelhas e os olhos muito sérios, do jeito que ele olhou na frente do forno.", proxima: "rk_18" },
    rk_18: { quem: "kaito", texto: "Hoje, na sala, eu fiquei em dúvida. Um segundo. Eu falei “tá” em vez de “então não jogou”. Eu odeio isso. Eu fiquei a noite inteira odiando isso.", proxima: "rk_19" },
    rk_19: { quem: "kaito", texto: "Mas a resposta da pergunta dela era “nada”. Porque eu já estava esperando outra pessoa. Eu estava esperando você. A dúvida não muda isso. Nada muda isso.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. Chegar o último centímetro. Ela mesma.", proxima: "rk_a1", pontos: { kaito: 5 }, flags: ["Beijo_Kaito"] },
      { texto: "B. “Então pede, Kaito. Claro. Sem copo nenhum.”", proxima: "rk_b1", pontos: { kaito: 5 }, flags: ["Beijo_Kaito"] }
    ]},
    rk_a1: { tipo: "narracao", texto: "Ela não espera ele terminar de ficar vermelho. Ela chega o último centímetro. Ela mesma. Fica na ponta do pé, porque ele é muito mais alto, e segura na camiseta dele, na frente, com as duas mãos.", proxima: "rk_kiss1" },
    rk_b1: { quem: "eu", texto: "Então pede, Kaito. Claro. Sem copo nenhum.", proxima: "rk_b2" },
    rk_b2: { tipo: "narracao", texto: "Ele respira fundo. Uma vez. Duas. Como quem vai pular de um lugar alto.", proxima: "rk_b3" },
    rk_b3: { quem: "kaito", texto: "...Posso te beijar?", proxima: "rk_b4" },
    rk_b4: { tipo: "narracao", texto: "Ela não responde com palavra. Ela fica na ponta do pé e segura na camiseta dele, na frente, com as duas mãos. Isso é o sim. Ele entende.", proxima: "rk_kiss1" },

    // O beijo (as duas opções continuam aqui)
    rk_kiss1: { tipo: "narracao", texto: "Ele abaixa a cabeça. Devagar. Uma mão vai para o rosto dela, do lado, os dedos no cabelo atrás da orelha e o polegar no queixo, do jeito que ele fecha a fivela do capacete toda manhã. A outra mão encontra a cintura dela, no mesmo lugar onde segurou no hall.", proxima: "rk_kiss2" },
    rk_kiss2: { tipo: "narracao", texto: "Por um segundo, eles ficam assim, com a testa quase encostada, respirando o mesmo ar. Ela sente o cheiro dele, sabão, um restinho doce de ponche, e alguma coisa de cebolinha que nunca sai. Ela fecha os olhos.", proxima: "rk_kiss3" },
    rk_kiss3: { tipo: "narracao", texto: "E a boca dele encosta na dela. Não como no hall, sem querer, de queda. Devagar. Com cuidado. Como quem pergunta mais uma vez, mesmo já sabendo a resposta. A boca dele é quente, e um pouco insegura no começo, e treme. Ela sente ele tremer.", proxima: "rk_kiss4" },
    rk_kiss4: { tipo: "narracao", texto: "Ela puxa a camiseta dele, só um pouco, para mais perto. E ele para de tremer. A mão na cintura dela aperta, firme, e ele beija de volta, de verdade, mais fundo, com uma vontade que ela não sabia que cabia naquele menino que fala três palavras por vez.", proxima: "rk_kiss5" },
    rk_kiss5: { tipo: "narracao", texto: "O mundo some. As luzinhas, o grilo, o filtro da piscina, a música lenta do piano lá dentro. Ela não conta segundos. Ela parou de contar. Tem só a boca dele, a mão dele no rosto dela, o coração dele batendo tão forte que ela sente pela camiseta, embaixo das mãos dela.", proxima: "rk_kiss6" },
    rk_kiss6: { tipo: "pensamento", texto: "Eu tenho vinte e oito anos por dentro. Eu já beijei gente. E nenhum foi assim. Nenhum fez o mundo parar desse jeito. Nenhum tremeu no começo e segurou firme depois.", proxima: "rk_kiss7" },
    rk_kiss7: { tipo: "narracao", texto: "Quando eles se separam, é só um pouco. A testa dele fica encostada na dela. Os dois respirando rápido. Ela ainda na ponta do pé, segurando a camiseta dele, sem soltar. Ele ainda com a mão no rosto dela, o polegar passando devagar pela bochecha.", proxima: "rk_kiss8" },
    rk_kiss8: { quem: "kaito", texto: "...Com querer.", proxima: "rk_kiss9" },
    rk_kiss9: { quem: "eu", texto: "Com muito querer.", proxima: "rk_kiss10" },
    rk_kiss10: { tipo: "narracao", texto: "Ele ri, baixo, de olho fechado, com a testa ainda na dela, um riso que parece alívio. E beija ela de novo. Mais rápido dessa vez. Depois mais uma. Como quem descobriu que pode e não quer parar de conferir.", proxima: "rk_kiss11" },
    rk_kiss11: { quem: "kaito", texto: "Eu esperei muito tempo pra isso.", proxima: "rk_kiss12" },
    rk_kiss12: { tipo: "pensamento", texto: "Muito tempo. Desde o hall? Desde o forno? Ou desde antes? Desde quando, Kaito?", proxima: "rk_kiss13" },
    rk_kiss13: { tipo: "narracao", texto: "Ela não pergunta. Hoje não. Ele senta na grama, encostado no tronco da árvore do jardim, e puxa ela pela mão, e ela senta do lado, e depois encosta nele, e ele passa o braço pelos ombros dela. E eles ficam assim, juntos, embaixo das luzinhas tortas, falando baixo de tudo e de nada.", proxima: "rk_kiss14" },
    rk_kiss14: { tipo: "narracao", texto: "Ele conta que nunca beijou ninguém antes. Ela não conta que já. Ele pergunta se foi ruim. Ela responde beijando ele de novo. Ele ri contra a boca dela.", proxima: "rk_kiss15" },
    rk_kiss15: { tipo: "narracao", texto: "Lá de longe, da espreguiçadeira, o Ryuji resmunga dormindo: “dourada de luz”. Os dois riem tanto que têm que tapar a boca um do outro.", proxima: "rk_kiss16" },
    rk_kiss16: { tipo: "narracao", texto: "Mais tarde, quando eles voltam para dentro de mão dada, ela vê, pela janela da varanda dos fundos, a Reina e o Takeo sentados lado a lado no banco, conversando baixo. A Reina sem o queixo alto. O Takeo com o gesso no colo, olhando para ela. Ela não ouve o que eles falam. E não precisa.", proxima: "f_01" },

    // ---------- Rota Takeo ----------
    rt_01: { tipo: "narracao", cenario: "jardim-reina", transicao: "tempo", legenda: "1h30 — Jardim", sprite: "takeo", texto: "Uma e meia. Ela sai para o jardim para respirar. O Takeo vem atrás, mancando, com o gesso no peito, e para do lado dela, embaixo das luzinhas que ele mesmo pendurou.", proxima: "rt_02" },
    rt_02: { quem: "takeo", sprite: "takeo", texto: "O Kaito bebeu pra não responder a Serena. Metade da festa achou ele cruel. Eu achei corajoso. Eu queria ter essa coragem. A de fazer sem pensar.", proxima: "rt_03" },
    rt_03: { quem: "takeo", sprite: "takeo", texto: "Eu sempre penso antes. Eu penso tanto que a coisa passa.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. Falar no ouvido dele: “Eu voltei de muito longe por sua causa. Um dia eu te conto.”", proxima: "rt_a1", pontos: { takeo: 4 }, flags: ["Voltei_longe_Takeo"] },
      { texto: "B. Pegar a mão boa dele. “Dança uma comigo. Aqui. Sem música.”", proxima: "rt_b1", pontos: { takeo: 4 }, flags: ["Danca_sem_musica"] },
      { texto: "C. “Então não pensa agora, Takeo.”", proxima: "rt_c1", pontos: { takeo: 3 }, flags: ["Nao_pensa_Takeo"] }
    ]},
    rt_a1: { tipo: "narracao", texto: "Ela fica na ponta do pé e fala no ouvido dele, baixo. Ele fica parado. Quando ela volta para o chão, ele olha para ela com a cara de quem sabe que tem uma história escrita em algum lugar e ainda não achou.", proxima: "rt_a2" },
    rt_a2: { quem: "takeo", sprite: "takeo", texto: "Eu vou esperar você contar. Essa eu não vou pesquisar.", proxima: "f_01" },
    rt_b1: { tipo: "narracao", texto: "Ela pega a mão boa dele, põe a outra no ombro dele, do lado do gesso, e começa a balançar, devagar, sem música. Ele fica duro no começo. Depois coloca a mão do gesso, desajeitada, nas costas dela. Os dois dançam só com os grilos e o filtro da piscina.", proxima: "rt_b2" },
    rt_b2: { quem: "takeo", sprite: "takeo", texto: "...Isso é melhor que qualquer música.", proxima: "f_01" },
    rt_c1: { quem: "eu", texto: "Então não pensa agora, Takeo.", proxima: "rt_c2" },
    rt_c2: { tipo: "narracao", texto: "Ele olha para ela. E, pela primeira vez, ele não pensa. Ele abaixa a cabeça e dá um beijo na testa dela, rápido, embaixo das luzinhas. Depois fica vermelho até o gesso.", proxima: "rt_c3" },
    rt_c3: { quem: "takeo", sprite: "takeo", texto: "...Eu não pensei. Foi horrível. Foi ótimo. Eu vou pensar nisso por uma semana.", proxima: "f_01" },

    // ---------- Rota Blake ----------
    rb_01: { tipo: "narracao", cenario: "jardim-reina", transicao: "tempo", legenda: "1h30 — Jardim", sprite: "blake", texto: "Uma e meia. No jardim, o Blake está carregando o terceiro fardo de água do dia, de cara séria. Ele coloca o fardo no chão quando vê ela, e fica parado do lado dela, embaixo das luzinhas.", proxima: "rb_02" },
    rb_02: { quem: "blake", texto: "Eu estava de costas. Com o Kaito, na cozinha. Eu não vi o ponche. Eu sinto muito.", proxima: "rb_03" },
    rb_03: { quem: "eu", texto: "Ela chorou por nós duas.", proxima: "rb_04" },
    rb_04: { quem: "blake", texto: "Mas eu não preciso ter visto. Eu sei que não foi você. Você não joga nada em ninguém. Você segura.", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. “Você sempre vê, Blake. Você fica na escada e vê tudo.”", proxima: "rb_a1", pontos: { blake: 4 }, flags: ["Ve_tudo_Blake"] },
      { texto: "B. Encostar a cabeça no braço dele. “Você carregou água a noite inteira. Descansa um minuto.”", proxima: "rb_b1", pontos: { blake: 4 }, flags: ["Descansa_Blake"] },
      { texto: "C. “Blake. Você está pensando em quê?”", proxima: "rb_c1", pontos: { blake: 3 }, flags: ["Pensando_Blake"] }
    ]},
    rb_a1: { quem: "eu", texto: "Você sempre vê, Blake. Você fica na escada e vê tudo.", proxima: "rb_a2" },
    rb_a2: { quem: "blake", texto: "Eu vejo você. O resto eu vejo porque está do lado.", proxima: "rb_a3" },
    rb_a3: { tipo: "narracao", texto: "Ele fala isso e fica vermelho até a nuca, mas não desvia. Pela primeira vez, o Blake não desvia.", proxima: "f_01" },
    rb_b1: { tipo: "narracao", texto: "Ela encosta a cabeça no braço dele, entre o ombro e o cotovelo, porque ele é muito alto. Ele fica parado. Depois coloca a mão em cima da cabeça dela, de leve. Passa um minuto. Passam cinco. Ele não sai.", proxima: "f_01" },
    rb_c1: { quem: "eu", texto: "Blake. Você está pensando em quê?", proxima: "rb_c2" },
    rb_c2: { quem: "blake", texto: "Em quatrocentos e treze. Se eu quero que vire quatrocentos e quatorze. Ou se eu quero ganhar uma.", proxima: "f_01" },

    // ---------- Rota Ryuji ----------
    rr_01: { tipo: "narracao", cenario: "piscina-reina", transicao: "tempo", legenda: "1h30 — Jardim", sprite: "ryuji", texto: "Uma e meia. Ela vai até a espreguiçadeira da piscina para colocar mais uma toalha em cima do Ryuji. Ele abre um olho. Depois os dois. Está sóbrio agora, depois de quatro garrafas de água, com o cabelo amassado e a faixa torta.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", texto: "Eu dormi. Eu perdi tudo? Eu perdi o Kaito bebendo um copo inteiro na verdade ou desafio? A Mio gritou no meu ouvido, eu acho. Eu achei que era sonho.", proxima: "rr_03" },
    rr_03: { tipo: "narracao", texto: "Ele senta. Olha para ela, embaixo das luzinhas. Fica sério.", proxima: "rr_04" },
    rr_04: { quem: "ryuji", texto: "Sem lata agora. Eu gosto de você. Do jeito que eu gosto de ser bombeiro. Do jeito que dá medo e eu vou mesmo assim.", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. Abraçar ele, com a toalha e tudo.", proxima: "rr_a1", pontos: { ryuji: 4 }, flags: ["Abraco_Ryuji_festa"] },
      { texto: "B. Beijar a bochecha dele. Rápido. “Isso é pra coragem.”", proxima: "rr_b1", pontos: { ryuji: 4 }, flags: ["Bochecha_Ryuji"] },
      { texto: "C. “Você falou. Sem lata.”", proxima: "rr_c1", pontos: { ryuji: 3 }, flags: ["Falou_sem_lata"] }
    ]},
    rr_a1: { tipo: "narracao", texto: "Ela abraça ele com a toalha e tudo. Ele fica com os braços no ar, sem saber, e depois fecha em volta dela, devagar, como quem segura uma coisa preciosa num resgate.", proxima: "rr_a2" },
    rr_a2: { quem: "ryuji", texto: "Não tem cartão de abraço. Eu vou ter que aprender sozinho.", proxima: "f_01" },
    rr_b1: { tipo: "narracao", texto: "Ela dá um beijo rápido na bochecha dele, do lado da faixa. Ele congela. Coloca a mão no lugar. E deita de novo na espreguiçadeira, de olho aberto, com a mão na bochecha, olhando para a lua dourada.", proxima: "f_01" },
    rr_c1: { quem: "eu", texto: "Você falou. Sem lata.", proxima: "rr_c2" },
    rr_c2: { quem: "ryuji", texto: "Eu falei e não vomitei! Você não precisa responder hoje. Bombeiro sabe esperar o fogo baixar.", proxima: "f_01" },

    // ---------- Rota Victor ----------
    rv_01: { tipo: "narracao", cenario: "jardim-reina", transicao: "tempo", legenda: "1h30 — Jardim", sprite: "victor", texto: "Uma e meia. No jardim, o Victor está sentado na grama com a roupa seca do Blake, que fica enorme nele. Sem pirulito. Sem gatinha.", proxima: "rv_02" },
    rv_02: { quem: "victor", texto: "Eu caí na piscina sóbrio. A Serena se molhou de ponche sozinha e chorou. O líder bebeu pra não responder. Essa festa viu muita coisa hoje.", proxima: "rv_03" },
    rv_03: { quem: "victor", texto: "E eu fiquei pensando que eu também pularia. Por você. Mas eu já estava molhado, então não ia ter graça.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. Sentar do lado dele na grama. “Você já pulou, Victor. Sóbrio. De olho fechado.”", proxima: "rv_a1", pontos: { victor: 4 }, flags: ["Ja_pulou_Victor"] },
      { texto: "B. Arrumar a gola da camiseta enorme do Blake nele. “Você fica bonito com roupa que não é sua.”", proxima: "rv_b1", pontos: { victor: 3 }, flags: ["Roupa_Blake_Victor"] },
      { texto: "C. “Victor. Eu levo você a sério.”", proxima: "rv_c1", pontos: { victor: 4 }, flags: ["Levo_a_serio"] }
    ]},
    rv_a1: { tipo: "narracao", texto: "Ela senta do lado dele na grama. Ele olha para ela. O sorriso torto não vem. Vem outro, menor, mais quieto.", proxima: "rv_a2" },
    rv_a2: { quem: "victor", texto: "...É verdade. Eu já pulei. Faz tempo.", proxima: "f_01" },
    rv_b1: { tipo: "narracao", texto: "Ela arruma a gola. Ele faz a piada de que fica bonito com qualquer roupa, que é um fardo. Mas a voz sai baixa, e nenhum dos dois se mexe por um bom tempo.", proxima: "f_01" },
    rv_c1: { quem: "eu", texto: "Victor. Eu levo você a sério.", proxima: "rv_c2" },
    rv_c2: { tipo: "narracao", texto: "Ele fica em silêncio muito tempo. Depois encosta o ombro no dela, de leve, e deixa. O Victor sem piada. Por uma noite inteira.", proxima: "f_01" },

    /* =================== FIM — TODO MUNDO DORME NA REINA =================== */
    // (todas as rotas continuam aqui)
    f_01: { tipo: "narracao", cenario: "festa-reina", transicao: "tempo", legenda: "3h", sprite: "reina", texto: "Três da manhã. Os últimos táxis foram embora. O Blake fechou o portão. E a Reina, no meio da sala bagunçada, com copo de plástico em todo canto, olha para o grupinho que sobrou.", proxima: "f_02" },
    f_02: { quem: "reina", texto: "Ninguém vai embora. Amanhã é feriado. Tem quarenta quartos nessa casa e hoje eu não quero nenhum vazio.", proxima: "f_03" },
    f_03: { tipo: "narracao", sprite: null, texto: "Ninguém discute. A Hana vai para o quarto de hóspedes com a prancheta e dorme abraçada nela. A Mio e a Akane dividem o sofá grande, de pé com cabeça, a coroa de papelão caída no chão. O Victor dorme no tapete da avó, de bruços, abraçado numa almofada. O Takeo pega a poltrona, com o gesso apoiado no braço. O Blake senta no chão, encostado na parede do lado da porta, como quem vigia, e dorme sentado.", proxima: "f_04" },
    f_04: { tipo: "narracao", texto: "E o Ryuji continua lá fora, na espreguiçadeira da piscina, jogado, de boca aberta, com três toalhas em cima e a garrafa de água no colo. Ninguém tem coragem de acordar ele.", proxima: "f_cam" },
    f_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "f_k1" }
    ], proxima: "f_o1" },
    f_k1: { tipo: "narracao", sprite: "kaito", texto: "O Kaito e ela ficam com o sofá pequeno, do lado da janela. Não cabe os dois. Cabe mesmo assim. Ela deitada com a cabeça no peito dele, ele com o braço em volta dela, as pernas dos dois penduradas para fora do braço do sofá.", proxima: "f_k2" },
    f_k2: { tipo: "narracao", texto: "Ela ouve o coração dele embaixo da orelha. Bem mais devagar agora. Ele mexe no cabelo dela, nas presilhas de estrela, tirando uma por uma, com cuidado, e colocando em cima da mesinha.", proxima: "f_k3" },
    f_k3: { quem: "kaito", texto: "...Amanhã eu ainda posso?", proxima: "f_k4" },
    f_k4: { quem: "eu", texto: "Pode o quê?", proxima: "f_k5" },
    f_k5: { quem: "kaito", texto: "Isso. Tudo isso. Amanhã, quando não for festa.", proxima: "f_k6" },
    f_k6: { quem: "eu", texto: "Amanhã. E depois de amanhã. Kaito. Dorme.", proxima: "f_k7" },
    f_k7: { tipo: "narracao", texto: "Ele ri baixo, com o peito subindo embaixo da cabeça dela. E dorme primeiro. Ela fica acordada mais um pouco, ouvindo o coração dele, e a casa grande demais cheia de gente respirando, e lá da varanda dos fundos, bem baixinho, duas vozes ainda conversando. A Reina e o Takeo.", proxima: "f_end" },
    f_o1: { tipo: "narracao", sprite: null, texto: "Ela fica com o sofá pequeno, do lado da janela. O Kaito pega o chão do lado, de costas para o sofá, com a jaqueta de travesseiro. Antes de dormir, ele estica a mão para trás, sem virar, e ela pega. E os dois dormem assim, de mão dada por cima do braço do sofá.", proxima: "f_end" },
    f_end: { tipo: "narracao", sprite: null, texto: "O celular dela vibra no bolso. A mãe, saindo do plantão.", proxima: "f_m1" },
    f_m1: { quem: "mensagem", rotulo: "Mensagem — Mãe", texto: "Água entre cada copo? Ninguém entrou em carro de quem bebeu?", proxima: "f_m2" },
    f_m2: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Sim. Ninguém. Vou dormir na Reina. Todo mundo vai.", proxima: "f_m3" },
    f_m3: { quem: "mensagem", rotulo: "Mensagem — Mãe", texto: "Todo mundo quem?", proxima: "f_m4" },
    f_m4: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "A turma. O Kaito também. Ele cuidou de mim. Como a senhora mandou.", proxima: "f_m5" },
    f_m5: { quem: "mensagem", rotulo: "Mensagem — Mãe", texto: "Hm. Amanhã eu quero saber tudo. Te amo. Dorme.", proxima: "f_m6" },
    f_m6: { tipo: "pensamento", texto: "Quarenta quartos. E hoje nenhum está vazio.", proxima: "ep_fim" },

    // Fim do Capítulo 40 (crie a entrada "capitulo40" em dados/capitulos.js).
    ep_fim: { fim: "capitulo40" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 41 (anotações do roteiro)
 *  • SERENA, VILÃ MANIPULADORA: agarrou o braço do Kaito ("veio por minha causa?" — "Não."). Quando o Kaito estava
 *    de costas conversando com o Blake, ela virou o ponche nela mesma e gritou que a SN jogou. NINGUÉM VIU. As amigas
 *    mentiram. Metade da festa acredita que foi a SN ("coitada da Serena"). O Kaito ficou EM DÚVIDA (não com raiva da SN):
 *    "Você jogou?" / "Não." / "...Tá." / "Eu não vi." Na varanda: "Eu acredito em você. Eu acho que acredito."
 *    Depois do verdade ou desafio: "Eu fui cruel?" A semente da dúvida ficou. Rota Kaito: ele pede desculpa no jardim. A Reina: "Eu não vi. Mas eu conheço você. E conheço ela."
 *    Verdade ou desafio: "Se você tivesse percebido antes, o que você faria?" O Kaito BEBEU um copo inteiro em vez de
 *    responder (ele não tinha bebido nada). A Serena fez cena de mártir ("eu sei que eu sou a chata"), a roda ficou
 *    com pena dela e culpou a SN. Saiu por conta própria. Baixinho: "Ele bebeu porque não teve coragem de dizer
 *    que não. Isso não acabou." O Kaito pra SN: "A resposta verdadeira era 'nada'... Pra você eu falo."
 *  • KAITO: do lado da SN a festa inteira. Latas fechadas no bolso ("a sua mãe mandou eu cuidar de você").
 *    Varanda de cima: "Eu não faço besteira quando você está do lado." Ele também tem "pedaços" de antes e não falou.
 *    "Às vezes é melhor não lembrar de tudo de uma vez."
 *    ROTA KAITO: o Blake pediu a Mio pra dançar e beijou ela na escada da varanda (microfone aceso no chão).
 *    Depois, no jardim: O PRIMEIRO BEIJO DE VERDADE da SN e do Kaito. "Com querer." / "Eu esperei muito tempo pra
 *    isso." Ele nunca tinha beijado ninguém. Ficaram juntos; dormiram no sofá pequeno, ela no peito dele.
 *    "Amanhã eu ainda posso?" A Reina e o Takeo conversaram na varanda dos fundos (não mostrado).
 *  • O REN: o ÚNICO que viu a Serena virar o ponche nela mesma. Foi até a varanda quando o Kaito desceu pra pegar água.
 *    A SN odeia ele no momento ("Sai daqui, Ren"). "Se você quiser, eu falo. Pra sala. Pra ele." Ela recusou
 *    (Nao_preciso_Ren / Lojinha_Ren — "O rei, não." / Nada_com_Serena). Discurso: "Você não é o mesmo de antes...
 *    pode fazer amizade e namorar com quem quiser... não precisa ter medo... mas assim só vai afastar todo mundo."
 *    "Eu não tenho medo." / "Então por que você fica sempre no canto?" / "...Boa festa." Saiu antes do Kaito voltar.
 *    O Kaito: "Quem estava aqui?" (Escondeu_Ren_varanda aumenta a dúvida / Contou_Ren_viu: alívio e raiva).
 *  • Todo mundo dormiu na casa da Reina: Hana (quarto de hóspedes), Mio e Akane (sofá grande), Victor (tapete),
 *    Takeo (poltrona), Blake (chão, sentado na porta), Ryuji (espreguiçadeira da piscina), SN e Kaito (sofá pequeno).
 *  • Quarta é feriado. A lojinha: 23 dias.
 *  • SEGREDOS: o Ren matou o Takeo na primeira linha do tempo · a mulher com pressa era a MÃE (funeral da tia Sora)
 *    · a SN e o Kaito se conheceram quando crianças (ele lembra pedaços).
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 A provocação · 2 Na parede (Kaito) · 3 O ponche · 4 A saída da Serena · Rota (madrugada)
 *
 * FLAGS NOVAS
 *  Lembra_suco · Boa_sorte_Serena · Encarou_Serena · Meu_lado_balcao · Meio_junto · Veio_mesmo_assim
 *  Negou_ponche · Chora_alto · Olhou_Kaito_ponche · Resposta_nao_e_voce · Nao_deu_cena · Cuidado_ponche
 *  Beijo_Kaito · Voltei_longe_Takeo · Danca_sem_musica · Nao_pensa_Takeo · Ve_tudo_Blake · Descansa_Blake
 *  Pensando_Blake · Abraco_Ryuji_festa · Bochecha_Ryuji · Falou_sem_lata · Ja_pulou_Victor · Roupa_Blake_Victor
 *  Levo_a_serio
 */