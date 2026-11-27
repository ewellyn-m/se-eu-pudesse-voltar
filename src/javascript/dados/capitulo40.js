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
 *    • A SERENA É VILÃ: gruda no Kaito de todo jeito, vira um copo de ponche vermelho em cima da SN de propósito
 *      e depois chora dizendo que foi empurrada. Na verdade ou desafio, desafia o Kaito a beijar ela. Joga o celular
 *      da SN na piscina. Faz cena de coitada pra todo mundo. Vai embora ameaçando: "Isso não acabou."
 *      A SN não passa a mão na cabeça dela.
 *    • O Ren aparece no canto, sai pela porta de vidro. A SN vai atrás até o portão e fala com ele.
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
    c1_05: { quem: "kaito", texto: "...Quando lembrar, me fala.", proxima: "c1_06" },
    c1_06: { tipo: "narracao", cenario: "patio-fundos", transicao: "tempo", legenda: "Intervalo", sprite: "reina", texto: "No intervalo, a Reina sobe em cima do muro do bebedouro. Literalmente. Em pé, com as mãos na cintura, como quem vai fazer discurso de presidente.", proxima: "c1_07" },
    c1_07: { quem: "reina", texto: "Atenção! A minha avó viajou hoje às seis da manhã com o grupo da terceira idade da igreja! Quatro dias de praia! Ela levou três chapéus! Amanhã é feriado! Festa hoje, oito da noite, na minha casa! Piscina aberta! Eu pago tudo!", proxima: "c1_08" },
    c1_08: { tipo: "narracao", sprite: null, texto: "O pátio explode. Gente correndo para contar para quem não ouviu. A Akane puxa a Reina pela barra da saia, dizendo que ela convidou umas trezentas pessoas, e a Reina responde, rindo, que a casa dela cabe quinhentas, que a casa dela é grande demais.", proxima: "c1_09" },
    c1_09: { tipo: "narracao", sprite: "kaito", texto: "No banco da árvore torta, o Kaito levanta os olhos, encontra os dela do outro lado do pátio, e levanta a sobrancelha uma vez. Você vai? Ela faz que sim. Ele faz que sim de volta, e as orelhas dele ficam vermelhas.", proxima: "c1_10" },
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
    c2_01: { roupa: "fora", tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Terça, 19h30 — Cena 2", sprite: null, texto: "Às sete e meia, a mãe sai para o plantão. Na porta do quarto, de uniforme de hospital, ela para com aquele olhar de enfermeira que já atendeu muito adolescente às três da manhã.", proxima: "c2_02" },
    c2_02: { sprite: "mae", quem: "mae", texto: "Festa. Vai ter bebida. Água entre cada copo. Não aceita copo aberto de ninguém. Não entra em carro de quem bebeu. E se alguém passar mal, deita de lado.", proxima: "c2_03" },
    c2_03: { quem: "eu", texto: "Eu sei, mãe.", proxima: "c2_04" },
    c2_04: { quem: "mae", texto: "Eu sei que você sabe. Você sempre soube coisa demais pra sua idade.", proxima: "c2_05" },
    c2_05: { roupa: "festa", sprite: null, tipo: "narracao", texto: "Ela dá um beijo na testa da filha e vai. Dez minutos depois, a campainha toca três vezes seguidas, do jeito da Mio, e as duas entram como uma enchente.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", sprite: "mio", texto: "A Mio com uma bolsa de maquiagem do tamanho de uma caixa de ferramentas e a coroa de papelão já na cabeça. A Hana atrás, com a prancheta.", proxima: "c2_07" },
    c2_07: { quem: "hana", sprite: "hana", texto: "Cronograma. Vinte horas: cabelo. Vinte e dez: maquiagem. Vinte e vinte: foto. Vinte e vinte e cinco: saída. Dez minutos de margem pra crise, porque a Mio sempre chora uma vez antes de festa.", proxima: "c2_08" },
    c2_08: { quem: "mio", sprite: "mio", texto: "Eu não choro! Eu me emociono!", proxima: "c2_09" },
    c2_09: { tipo: "narracao", texto: "A Mio senta a SN na cadeira da escrivaninha e faz o cabelo dela, solto, com ondas, e duas presilhas pequenas de estrela de um lado. Depois o rímel. Ela pisca na primeira. Pisca na segunda. Na terceira dá certo, e a Hana anota: “Rímel: 3 tentativas”.", proxima: "c2_10" },
    c2_10: { quem: "hana", sprite: "hana", texto: "Pergunta técnica, para a logística. Os cinco vão?", proxima: "c2_11" },
    c2_11: { tipo: "narracao", sprite: "mio", texto: "A Mio para com o pincel no ar. Fala mais baixo, sem olhar para ninguém.", proxima: "c2_12" },
    c2_12: { quem: "mio", texto: "...O Blake vai. Ele vai dirigir. Ele não vai beber.", proxima: "c2_13" },
    c2_13: { tipo: "pensamento", texto: "De todos os cinco, ela falou o Blake primeiro. Desde a Sayuri ela não falava o nome dele em voz alta.", proxima: "c2_14" },
    c2_14: { tipo: "narracao", sprite: null, texto: "Às oito e vinte, a foto das três no espelho do armário, a Mio de coroa, a Hana com a prancheta no peito como uma medalha. Às oito e vinte e cinco, exatamente no cronograma, as três saem de braço dado pela rua da padaria.", proxima: "c3_01" },

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
    c4_05: { tipo: "narracao", texto: "Ele tira o braço. Devagar, sem grosseria, mas tira. A Serena fica com a mão no ar um segundo. O sorriso não cai. Ela é boa nisso.", proxima: "c4_06" },
    c4_06: { quem: "serena", sprite: "serena", texto: "Tímido. Eu sei. Eu conheço você há dois anos. Vem, eu peguei ponche pra você. Eu peguei pra vocês dois, olha. Pra mostrar que não tem briga.", proxima: "c4_07" },
    c4_07: { tipo: "narracao", texto: "Ela pega dois copos de plástico vermelhos, cheios até a borda, de uma bandeja que uma das amigas está segurando. Estende um para o Kaito. E vira para a SN com o outro, sorrindo, chegando perto.", proxima: "c4_08" },
    c4_08: { tipo: "narracao", efeito: "tremor", texto: "No meio do caminho, o pulso dela vira. Não tropeça. Não escorrega. O pulso vira, reto, de propósito, e o copo inteiro de ponche vermelho cai na frente da SN, do pescoço até a cintura. Gelado. Grudento. Vermelho como sangue de filme.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "A música continua. Mas a roda em volta para. E a Serena, antes que alguém fale qualquer coisa, dá um passo para trás e coloca as duas mãos na boca, com os olhos enchendo de lágrima, como se tivesse sido ela que levou o ponche.", proxima: "c4_10" },
    c4_10: { quem: "serena", texto: "Ai, meu Deus! Ela me empurrou! Ela bateu no meu braço! Eu só queria fazer as pazes! Eu trouxe ponche pra ela e ela me empurrou!", proxima: "c4_11" },
    c4_11: { tipo: "narracao", texto: "As duas amigas dela correm para abraçar ela. Uma delas fala alto que viu, que a SN empurrou. Gente em volta começa a cochichar. A Serena chora de verdade, lágrima de verdade, com o rímel perfeito borrando só o suficiente para parecer sincero.", proxima: "c4_12" },
    c4_12: { quem: "serena", texto: "Por que todo mundo me trata assim? Eu só gosto dele. É crime gostar de alguém? Ela fica jogando na minha cara que ganhou, e eu ainda tento ser legal...", proxima: "c4_13" },
    c4_13: { tipo: "pensamento", texto: "Ela jogou ponche em mim e está chorando. Em público. Ela é boa. Ela é muito boa nisso. Na outra vida eu conheci umas assim. Elas sempre ganham a primeira rodada, porque ninguém acredita que alguém faria isso de propósito e depois choraria.", proxima: "c4_14" },
    c4_14: { quem: "kaito", sprite: "kaito", texto: "Eu vi.", proxima: "c4_15" },
    c4_15: { tipo: "narracao", texto: "A voz dele é baixa. A roda inteira escuta mesmo assim. A Serena para de chorar no meio de um soluço.", proxima: "c4_16" },
    c4_16: { quem: "kaito", texto: "Eu estava do lado. Ninguém te empurrou. Você virou o copo.", proxima: "c4_17" },
    c4_17: { quem: "serena", sprite: "serena", texto: "Kaito... você está do lado dela? Depois de dois anos? Você vai acreditar nela e não em mim? Eu nunca fiz nada pra você. Eu só fiz bolo, e bento, e...", proxima: "c4_18" },
    c4_18: { tipo: "narracao", texto: "Ela volta a chorar, mais alto, e as amigas apertam ela, e ela olha para a SN por cima do ombro da amiga. Um segundo só. E nesse segundo não tem lágrima nenhuma no olhar dela. Tem só uma coisa fria, satisfeita. Depois volta a chorar.", proxima: "c4_esc3" },

    // ▶ ESCOLHA 3 — O ponche
    c4_esc3: { escolhas: [
      { texto: "A. “Chora mais alto, Serena. Do fundo ainda não estão ouvindo.”", proxima: "c4_3a_1", pontos: { kaito: 1 }, flags: ["Chora_alto"] },
      { texto: "B. Pegar o outro copo de ponche da mão dela, cheio. Olhar pra ele. Olhar pra ela. E devolver pra bandeja, inteiro.", proxima: "c4_3b_1", pontos: { kaito: 2 }, flags: ["Devolveu_copo"] },
      { texto: "C. Não falar nada pra ela. Virar pro Kaito. “Me ajuda a achar uma camiseta?”", proxima: "c4_3c_1", pontos: { kaito: 3 }, flags: ["Ignorou_Serena_festa"] }
    ]},
    c4_3a_1: { quem: "eu", texto: "Chora mais alto, Serena. Do fundo ainda não estão ouvindo.", proxima: "c4_3a_2" },
    c4_3a_2: { tipo: "narracao", texto: "Alguém na roda ri. Depois outro. A Serena para de chorar de uma vez, com a boca aberta, porque o choro não funciona quando a plateia ri. Ela fica vermelha de raiva, não de vergonha.", proxima: "c4_19" },
    c4_3b_1: { tipo: "narracao", texto: "Ela pega o segundo copo da mão da Serena, ainda cheio. A Serena trava, com medo de levar de volta. A SN olha para o copo. Olha para ela. E coloca o copo inteiro de volta na bandeja da amiga, sem derramar uma gota.", proxima: "c4_3b_2" },
    c4_3b_2: { quem: "eu", texto: "Viu? Dá pra segurar um copo sem virar. É fácil. Treina.", proxima: "c4_19" },
    c4_3c_1: { tipo: "narracao", texto: "Ela não olha mais para a Serena. Nem um segundo. Ela vira para o Kaito, pingando ponche, como se a Serena fosse uma música chata tocando no fundo.", proxima: "c4_3c_2" },
    c4_3c_2: { quem: "eu", texto: "Me ajuda a achar uma camiseta?", proxima: "c4_3c_3" },
    c4_3c_3: { tipo: "narracao", texto: "A Serena fica parada no meio da roda, chorando para ninguém. Ninguém consegue chorar para quem não está olhando.", proxima: "c4_19" },

    // (todas as opções continuam aqui)
    c4_19: { tipo: "narracao", sprite: "kaito", texto: "O Kaito tira a jaqueta e coloca nos ombros dela, por cima do ponche, sem perguntar. Pega a mão dela. E leva ela para fora da roda, pela escada, para o andar de cima, passando do lado da Serena sem olhar.", proxima: "c4_20" },
    c4_20: { tipo: "narracao", sprite: "reina", texto: "No corredor de cima, a Reina já está esperando com uma camiseta dela na mão, porque a rede de fofoca chegou no andar de cima antes deles.", proxima: "c4_21" },
    c4_21: { quem: "reina", texto: "Banheiro do fim do corredor. E fala pra ela que se ela encostar em mais um copo na minha casa, eu chamo o motorista e mando ela pra casa de táxi com a amiga mentirosa junto.", proxima: "c5_01" },

    /* =================== CENA 5 — A VARANDA DE CIMA (Kaito) =================== */
    c5_01: { tipo: "narracao", cenario: "festa-reina", transicao: "tempo", legenda: "Cena 5", sprite: null, texto: "Ela troca no banheiro, joga água no pescoço, tira o grosso do ponche do cabelo. Quando sai, o Kaito está esperando no corredor, encostado na parede, com a jaqueta dobrada no braço. Ele aponta com o queixo para uma porta de vidro no fim do corredor. Uma varanda.", proxima: "c5_02" },
    c5_02: { cenario: "jardim-reina", transicao: "tempo", tipo: "narracao", texto: "A varanda de cima é pequena, com duas cadeiras de ferro e um vaso de planta. Lá embaixo, o jardim inteiro, as luzinhas, a piscina azul, a festa. Aqui em cima, a música chega abafada. Eles sentam no chão da varanda, encostados na parede, um do lado do outro.", proxima: "c5_03" },
    c5_03: { quem: "kaito", texto: "Você não chorou.", proxima: "c5_04" },
    c5_04: { quem: "eu", texto: "Ela chorou por nós duas.", proxima: "c5_05" },
    c5_05: { tipo: "narracao", texto: "Ele ri pelo nariz. Depois fica sério. Fica olhando para as mãos.", proxima: "c5_06" },
    c5_06: { quem: "kaito", texto: "Isso é culpa minha. Eu demorei dois anos pra perceber ela. E aí, quando eu percebi, ela já estava assim. Eu devia ter falado antes. Mais claro. Eu nunca falo claro.", proxima: "c5_07" },
    c5_07: { quem: "eu", texto: "Não é culpa sua ela virar ponche em cima de mim. Ela escolheu. Ninguém mandou ela virar o pulso.", proxima: "c5_08" },
    c5_08: { tipo: "narracao", texto: "Ele fica quieto. Depois estica a mão e tira, com o polegar, um resto de ponche do pescoço dela, perto da orelha. Devagar. O polegar fica lá um segundo a mais.", proxima: "c5_09" },
    c5_09: { quem: "kaito", texto: "Quando ela virou o copo, eu quase... eu quase virei a tigela inteira de ponche em cima dela. Eu nunca encostei em menina. Eu nunca nem pensei nisso. E eu pensei.", proxima: "c5_10" },
    c5_10: { quem: "eu", texto: "E não fez.", proxima: "c5_11" },
    c5_11: { quem: "kaito", texto: "Você estava do lado. Eu não faço besteira quando você está do lado.", proxima: "c5_12" },
    c5_12: { tipo: "narracao", texto: "Eles ficam um tempo em silêncio, olhando o jardim lá embaixo. Ele conta da lojinha, que agora são vinte e três dias, e que o tio não fala disso mas fica olhando a parede do aviso de noite. Ela conta, sem contar tudo, que tem um menino de óculos na cabeça dela, um menino de uma vida que ela não lembra direito.", proxima: "c5_13" },
    c5_13: { quem: "kaito", texto: "Menino de óculos?", proxima: "c5_14" },
    c5_14: { quem: "eu", texto: "Uma lembrança. De quando eu tinha uns cinco anos. Pedaços.", proxima: "c5_15" },
    c5_15: { tipo: "narracao", texto: "O Kaito fica parado. Muito parado. Ele abre a boca para falar alguma coisa e fecha. Ela vê. Ele também tem pedaços. Mas ele não fala dos dele.", proxima: "c5_16" },
    c5_16: { quem: "kaito", texto: "...Às vezes a gente lembra de quem a gente era antes. E às vezes é melhor não lembrar de tudo de uma vez.", proxima: "c5_17" },
    c5_17: { tipo: "narracao", texto: "Ele fala isso olhando para o jardim, e encosta o ombro no dela, e deixa. E é aí que ela vê, lá embaixo, no canto da sala, pela porta de vidro aberta, uma pessoa parada perto da parede, sem copo nenhum na mão, olhando para cima. Para a varanda. Para ela.", proxima: "c5_18" },
    c5_18: { tipo: "narracao", texto: "O Ren.", proxima: "c5_19" },
    c5_19: { tipo: "narracao", texto: "Quando ele percebe que ela viu, ele não desvia. Fica olhando para os dois, ombro com ombro na varanda. Depois vira e sai pela porta de vidro do jardim, em direção ao portão lateral.", proxima: "rn_01" },

    // --- A SN vai atrás do Ren (todas as rotas) ---
    rn_01: { quem: "eu", texto: "Me espera aqui. Dois minutos.", proxima: "rn_01b" },
    rn_01b: { quem: "kaito", sprite: "kaito", texto: "...Dois minutos. Eu conto.", proxima: "rn_02" },
    rn_02: { tipo: "narracao", cenario: "frente-casa-reina-noite", transicao: "tempo", sprite: null, texto: "Ela desce a escada, atravessa o jardim com as luzinhas, e alcança ele no portão lateral da casa, já na calçada, com as mãos nos bolsos, de costas para a festa.", proxima: "rn_03" },
    rn_03: { quem: "eu", texto: "Ren.", proxima: "rn_04" },
    rn_04: { sprite: "ren", tipo: "narracao", texto: "Ele para. Não vira logo. Fica um segundo parado, como quem não esperava ser seguido, e depois vira, devagar. Atrás dela, a música da festa chega abafada pelo jardim.", proxima: "rn_05" },
    rn_05: { quem: "eu", texto: "Você veio, ficou no canto, e está indo embora. De novo. Igual no prédio. Igual na sala. Você sempre vai embora primeiro.", proxima: "rn_06" },
    rn_06: { tipo: "narracao", texto: "Ele não responde. Ela respira fundo. E fala, devagar, olhando nos olhos dele, sem levantar a voz.", proxima: "rn_07" },
    rn_07: { quem: "eu", texto: "Você não é mais o menino de óculos que ficou trinta e um dias na chuva. Você não é o mesmo de antes, Ren.", proxima: "rn_08" },
    rn_08: { quem: "eu", texto: "Hoje você pode fazer amizade com quem você quiser. Pode entrar nessa festa e conversar com qualquer pessoa. Pode namorar com quem você quiser. Ninguém mais vai rir do seu tabuleiro.", proxima: "rn_09" },
    rn_09: { quem: "eu", texto: "Você não precisa mais ter medo de chegar perto das pessoas.", proxima: "rn_10" },
    rn_10: { tipo: "narracao", texto: "O rosto dele não muda. Mas a mão dele, dentro do bolso, aperta. Ela vê o tecido do casaco esticar.", proxima: "rn_11" },
    rn_11: { quem: "eu", texto: "Mas se você continuar agindo assim, comprando prédio, mandando gente no escuro, olhando de longe e indo embora, você só vai afastar todo mundo que está perto de você. Até não sobrar ninguém. E aí você vai estar sozinho de novo. Só que dessa vez a culpa vai ser sua.", proxima: "rn_12" },
    rn_12: { tipo: "narracao", texto: "Silêncio. Um carro passa na rua, devagar, com o farol batendo no rosto dele por um segundo.", proxima: "rn_13" },
    rn_13: { quem: "ren", texto: "Eu não tenho medo.", proxima: "rn_14" },
    rn_14: { quem: "eu", texto: "Então por que você fica sempre no canto?", proxima: "rn_15" },
    rn_15: { tipo: "narracao", texto: "Ele abre a boca. Fecha. Ele olha para a casa, para a varanda de cima, onde o Kaito está esperando, de pé agora, olhando para o portão. Depois para ela.", proxima: "rn_16" },
    rn_16: { quem: "ren", texto: "...Boa festa.", proxima: "rn_17" },
    rn_17: { sprite: null, tipo: "narracao", texto: "Ele vai embora pela calçada, com as mãos nos bolsos. Na esquina, antes de virar, ele para. Olha para trás. Para a casa cheia. Fica olhando um tempo, como quem olha para uma coisa que poderia ter sido dele. E vira a esquina.", proxima: "rn_18" },
    rn_18: { tipo: "narracao", cenario: "festa-reina", transicao: "tempo", sprite: "kaito", texto: "Quando ela sobe de volta, o Kaito está no começo da escada, no meio do caminho, como quem estava descendo.", proxima: "rn_19" },
    rn_19: { quem: "kaito", texto: "Um minuto e cinquenta. Eu ia descer no dois.", proxima: "rn_20" },
    rn_20: { tipo: "narracao", texto: "Ele não pergunta o que o Ren queria. Ele só pega a mão dela de novo. E não solta mais.", proxima: "c6_01" },

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
    c7_01: { tipo: "narracao", cenario: "festa-reina", transicao: "tempo", legenda: "Meia-noite — Cena 7", sprite: "mio", texto: "Meia-noite. Na sala, no tapete enorme da avó, uns quinze em roda, com uma garrafa vazia no meio. A Mio no comando, de coroa de papelão e microfone rosa. A regra: quem não cumprir pula na piscina.", proxima: "c7_02" },
    c7_02: { tipo: "narracao", sprite: null, texto: "A SN senta entre a Mio e o Kaito. Do outro lado da roda, entre as duas amigas, a Serena, com o rímel refeito, sorrindo como se nada tivesse acontecido.", proxima: "c7_03" },
    c7_03: { tipo: "narracao", texto: "A garrafa gira. Para na Serena, que pergunta. E no Kaito, que responde. A roda faz “uuuuh”. A Serena sorri devagar. Como quem estava esperando exatamente isso.", proxima: "c7_04" },
    c7_04: { quem: "serena", sprite: "serena", texto: "Kaito. Verdade ou desafio?", proxima: "c7_05" },
    c7_05: { quem: "kaito", sprite: "kaito", texto: "...Desafio.", proxima: "c7_06" },
    c7_06: { quem: "serena", sprite: "serena", texto: "Me beija. Aqui. Na frente de todo mundo. Só um. Pelos dois anos.", proxima: "c7_07" },
    c7_07: { tipo: "narracao", sprite: null, texto: "A roda inteira fica em silêncio. A Mio abaixa o microfone. A SN sente a mão do Kaito, do lado dela, no tapete, fechar.", proxima: "c7_08" },
    c7_08: { tipo: "narracao", sprite: "kaito", texto: "O Kaito levanta. Sem falar nada. A Serena levanta também, rápido, ajeitando o cabelo, já fechando os olhos. Ele passa do lado dela. Atravessa a sala. Abre a porta de vidro. Vai até a borda da piscina.", proxima: "c7_09" },
    c7_09: { cenario: "piscina-reina", transicao: "tempo", tipo: "narracao", efeito: "tremor", texto: "E pula. De roupa. Sem olhar para trás.", proxima: "c7_10" },
    c7_10: { tipo: "narracao", sprite: null, texto: "A sala inteira corre para a porta de vidro. Ele sobe na água, tira o cabelo do rosto, e fica parado, ensopado, olhando para a SN na porta. Só para ela. A Serena fica sozinha no meio do tapete, de olhos abertos agora, com a boca tremendo.", proxima: "c7_11" },
    c7_11: { quem: "serena", sprite: "serena", texto: "...Você prefere pular na piscina a me beijar?", proxima: "c7_12" },
    c7_12: { quem: "kaito", sprite: "kaito", texto: "Prefiro.", proxima: "c7_13" },
    c7_13: { tipo: "narracao", sprite: "serena", texto: "Alguém na roda ri. Depois outro. A Serena fica vermelha até o pescoço. E vira, devagar, para a SN, parada na porta de vidro. Os olhos dela não têm mais nenhuma lágrima falsa. Só ódio.", proxima: "c7_14" },
    c7_14: { tipo: "narracao", texto: "Em cima da mesinha de centro, o celular da SN, que ela deixou ali para não molhar. A Serena pega. Rápido. Antes que alguém entenda. Atravessa a sala, passa do lado da SN na porta, e joga o celular na piscina. Ele afunda devagar, com a tela acesa, até o fundo azul.", proxima: "c7_15" },
    c7_15: { quem: "serena", texto: "Ops. Sem querer de novo.", proxima: "c7_16" },
    c7_16: { tipo: "narracao", texto: "E, no mesmo segundo, ela começa a chorar alto, de novo, virando para as amigas, para a roda, para quem quiser ouvir.", proxima: "c7_17" },
    c7_17: { quem: "serena", texto: "Vocês viram o que ele fez comigo? Na frente de todo mundo? Ele me humilhou! Por causa dela! Ela virou ele contra mim! Eu não aguento mais essa escola, ninguém gosta de mim, todo mundo fica do lado dela!", proxima: "c7_esc4" },

    // ▶ ESCOLHA 4 — O celular
    c7_esc4: { escolhas: [
      { texto: "A. Pular na piscina, pegar o celular no fundo, sair, e passar pingando do lado dela. “Ele é à prova d'água. Igual eu.”", proxima: "c7_4a_1", pontos: { kaito: 2 }, flags: ["Prova_dagua"] },
      { texto: "B. “Hana. Anota. Meia-noite e dez. Celular na piscina. Testemunhas: a festa inteira.”", proxima: "c7_4b_1", pontos: { hana: 2, kaito: 1 }, flags: ["Hana_anota_Serena"] },
      { texto: "C. Chegar perto dela, baixo, só pra ela ouvir: “Você perdeu, Serena. Não pra mim. Pra você mesma.”", proxima: "c7_4c_1", pontos: { kaito: 1, desvio: 1 }, flags: ["Perdeu_pra_voce"] }
    ]},
    c7_4a_1: { tipo: "narracao", texto: "Ela pula. Desce até o fundo, pega o celular, e sobe do lado do Kaito, que ainda está na água. Sai pela escadinha. Passa pingando do lado da Serena.", proxima: "c7_4a_2" },
    c7_4a_2: { quem: "eu", texto: "Ele é à prova d'água. Igual eu.", proxima: "c7_18" },
    c7_4b_1: { quem: "eu", texto: "Hana. Anota. Meia-noite e dez. Celular na piscina. Testemunhas: a festa inteira.", proxima: "c7_4b_2" },
    c7_4b_2: { quem: "hana", sprite: "hana", texto: "Anotado. E o ponche das vinte e uma e trinta também. Com o nome das duas amigas que mentiram. Coluna “Emergências”, linha quatro e linha cinco.", proxima: "c7_18" },
    c7_4c_1: { tipo: "narracao", texto: "Ela chega perto da Serena. Baixo. Só para ela ouvir, por baixo do choro falso.", proxima: "c7_4c_2" },
    c7_4c_2: { quem: "eu", texto: "Você perdeu, Serena. Não pra mim. Pra você mesma. Ele estava educado com você ontem. Agora ele pulou numa piscina pra não chegar perto.", proxima: "c7_18" },

    // (todas as opções continuam aqui)
    c7_18: { cenario: "festa-reina", transicao: "tempo", tipo: "narracao", sprite: "reina", texto: "A Reina atravessa a sala. Para na frente da Serena, com os braços cruzados e o queixo alto, a dona da casa.", proxima: "c7_19" },
    c7_19: { quem: "reina", texto: "Táxi. Agora. Você e as suas duas testemunhas. Meu motorista paga. Na minha casa ninguém joga nada em ninguém.", proxima: "c7_20" },
    c7_20: { tipo: "narracao", sprite: "serena", texto: "A Serena para de chorar na hora. Olha para a Reina. Para a roda inteira, que ninguém mais está do lado dela. Para o Kaito, saindo da piscina e indo direto para o lado da SN, pingando. Ela pega a bolsa. Na porta, vira.", proxima: "c7_21" },
    c7_21: { quem: "serena", texto: "Isso não acabou. Vocês vão ver. Todo mundo vai ver quem você é de verdade.", proxima: "c7_22" },
    c7_22: { tipo: "narracao", sprite: null, texto: "A porta bate. Os chaveiros somem pela rua. A Mio levanta o microfone rosa, acende, e fala, muito séria: “E com isso, a vilã deixa o prédio.” A sala inteira aplaude.", proxima: "c7_23" },
    c7_23: { tipo: "narracao", sprite: "kaito", texto: "O Kaito para na frente da SN, ensopado, a água pingando do cabelo no chão da sala da avó da Reina.", proxima: "c7_24" },
    c7_24: { quem: "kaito", texto: "Eu falei que eu não falo claro. Isso foi claro?", proxima: "c7_25" },
    c7_25: { quem: "eu", texto: "Foi muito claro, Kaito. Foi claro e molhado.", proxima: "c7_26" },
    c7_26: { tipo: "narracao", texto: "Ele ri. Com os dentes. E ela ri também, e a roda volta a girar a garrafa, mas ninguém mais presta atenção nos dois, que estão encostados na parede do lado da porta de vidro, molhando o chão, rindo sem parar.", proxima: "r_cam" },

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
    rk_13: { tipo: "narracao", cenario: "jardim-reina", transicao: "tempo", legenda: "Jardim", texto: "Eles param no meio do jardim, embaixo das luzinhas. A roupa dele ainda está meio molhada da piscina. O cabelo dela ainda cheira um pouco a ponche. Nenhum dos dois liga.", proxima: "rk_14" },
    rk_14: { quem: "kaito", texto: "Não tem timer aqui. Não tem forno. O Ryuji está dormindo. Eu conferi duas vezes.", proxima: "rk_15" },
    rk_15: { quem: "eu", texto: "Você conferiu?", proxima: "rk_16" },
    rk_16: { quem: "kaito", texto: "Eu cutuquei ele. Ele disse “dourada de luz” e virou pro outro lado.", proxima: "rk_17" },
    rk_17: { tipo: "narracao", texto: "Ela ri. E ele para de rir antes dela. Ele fica olhando para ela, de perto, com as orelhas vermelhas e os olhos muito sérios, do jeito que ele olhou na frente do forno.", proxima: "rk_18" },
    rk_18: { quem: "kaito", texto: "Hoje ela me pediu um beijo na frente de todo mundo e eu pulei na piscina.", proxima: "rk_19" },
    rk_19: { quem: "kaito", texto: "Porque o único beijo que eu quero não é dela.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. Chegar o último centímetro. Ela mesma.", proxima: "rk_a1", pontos: { kaito: 5 }, flags: ["Beijo_Kaito"] },
      { texto: "B. “Então pede, Kaito. Claro. Igual na piscina.”", proxima: "rk_b1", pontos: { kaito: 5 }, flags: ["Beijo_Kaito"] }
    ]},
    rk_a1: { tipo: "narracao", texto: "Ela não espera ele terminar de ficar vermelho. Ela chega o último centímetro. Ela mesma. Fica na ponta do pé, porque ele é muito mais alto, e segura na camiseta dele, na frente, com as duas mãos, ainda úmida da piscina.", proxima: "rk_kiss1" },
    rk_b1: { quem: "eu", texto: "Então pede, Kaito. Claro. Igual na piscina.", proxima: "rk_b2" },
    rk_b2: { tipo: "narracao", texto: "Ele respira fundo. Uma vez. Duas. Como quem vai pular de um lugar alto.", proxima: "rk_b3" },
    rk_b3: { quem: "kaito", texto: "...Posso te beijar?", proxima: "rk_b4" },
    rk_b4: { tipo: "narracao", texto: "Ela não responde com palavra. Ela fica na ponta do pé e segura na camiseta dele, na frente, com as duas mãos. Isso é o sim. Ele entende.", proxima: "rk_kiss1" },

    // O beijo (as duas opções continuam aqui)
    rk_kiss1: { tipo: "narracao", texto: "Ele abaixa a cabeça. Devagar. Uma mão vai para o rosto dela, do lado, os dedos no cabelo atrás da orelha e o polegar no queixo, do jeito que ele fecha a fivela do capacete toda manhã. A outra mão encontra a cintura dela, no mesmo lugar onde segurou no hall.", proxima: "rk_kiss2" },
    rk_kiss2: { tipo: "narracao", texto: "Por um segundo, eles ficam assim, com a testa quase encostada, respirando o mesmo ar. Ela sente o cheiro dele, sabão e um resto de cloro e alguma coisa de cebolinha que nunca sai. Ela fecha os olhos.", proxima: "rk_kiss3" },
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
    rt_02: { quem: "takeo", sprite: "takeo", texto: "O Kaito pulou na piscina pra não beijar a Serena. A escola inteira vai falar disso por um ano. Eu queria ter essa coragem. A de pular sem pensar.", proxima: "rt_03" },
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
    rb_02: { quem: "blake", texto: "Você não chorou com o ponche. Nem com o celular. Ela queria que você chorasse.", proxima: "rb_03" },
    rb_03: { quem: "eu", texto: "Ela chorou por nós duas.", proxima: "rb_04" },
    rb_04: { quem: "blake", texto: "Eu vi o pulso dela. Eu ia falar que vi. O Kaito falou primeiro.", proxima: "rb_esc" },
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
    rr_02: { quem: "ryuji", texto: "Eu dormi. Eu perdi tudo? Eu perdi o Kaito pulando na piscina? A Mio gritou no meu ouvido, eu acho. Eu achei que era sonho.", proxima: "rr_03" },
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
    rv_02: { quem: "victor", texto: "Eu caí na piscina sóbrio. O líder pulou na piscina por você. A Serena jogou o seu celular na piscina. Essa piscina viu muita coisa hoje.", proxima: "rv_03" },
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
    f_o1: { tipo: "narracao", sprite: null, texto: "Ela fica com o sofá pequeno, do lado da janela. O Kaito pega o chão do lado, de costas para o sofá, com a jaqueta de travesseiro, ainda meio molhado da piscina. Antes de dormir, ele estica a mão para trás, sem virar, e ela pega. E os dois dormem assim, de mão dada por cima do braço do sofá.", proxima: "f_end" },
    f_end: { tipo: "narracao", sprite: null, texto: "O celular dela vibra no bolso, molhado, mas vivo. A mãe, saindo do plantão.", proxima: "f_m1" },
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
 *  • SERENA, VILÃ: agarrou o braço do Kaito ("veio por minha causa?" — "Não."), virou um copo de ponche vermelho
 *    em cima da SN DE PROPÓSITO e chorou dizendo que foi empurrada (as duas amigas mentiram junto).
 *    O Kaito: "Eu vi. Você virou o copo." Verdade ou desafio: "Me beija. Pelos dois anos." O Kaito pulou na
 *    piscina ("Prefiro."). Ela jogou o celular da SN na piscina ("Ops. Sem querer de novo.") e fez cena de coitada
 *    ("ninguém gosta de mim, ela virou ele contra mim"). A Reina expulsou de táxi. "Isso não acabou. Todo mundo vai
 *    ver quem você é de verdade." (A Hana anotou tudo na coluna "Emergências".)
 *  • KAITO: do lado da SN a festa inteira. Latas fechadas no bolso ("a sua mãe mandou eu cuidar de você").
 *    Varanda de cima: "Eu não faço besteira quando você está do lado." Ele também tem "pedaços" de antes e não falou.
 *    "Às vezes é melhor não lembrar de tudo de uma vez."
 *    ROTA KAITO: o Blake pediu a Mio pra dançar e beijou ela na escada da varanda (microfone aceso no chão).
 *    Depois, no jardim: O PRIMEIRO BEIJO DE VERDADE da SN e do Kaito. "Com querer." / "Eu esperei muito tempo pra
 *    isso." Ele nunca tinha beijado ninguém. Ficaram juntos; dormiram no sofá pequeno, ela no peito dele.
 *    "Amanhã eu ainda posso?" A Reina e o Takeo conversaram na varanda dos fundos (não mostrado).
 *  • O REN: no canto, olhando pra varanda de cima. A SN foi atrás no portão: "Você não é o mesmo de antes... pode
 *    fazer amizade e namorar com quem quiser... não precisa ter medo... mas se continuar assim, só vai afastar
 *    todo mundo." / "Eu não tenho medo." / "Então por que você fica sempre no canto?" / "...Boa festa."
 *  • Todo mundo dormiu na casa da Reina: Hana (quarto de hóspedes), Mio e Akane (sofá grande), Victor (tapete),
 *    Takeo (poltrona), Blake (chão, sentado na porta), Ryuji (espreguiçadeira da piscina), SN e Kaito (sofá pequeno).
 *  • Quarta é feriado. A lojinha: 23 dias.
 *  • SEGREDOS: o Ren matou o Takeo na primeira linha do tempo · a mulher com pressa era a MÃE (funeral da tia Sora)
 *    · a SN e o Kaito se conheceram quando crianças (ele lembra pedaços).
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 A provocação · 2 Na parede (Kaito) · 3 O ponche · 4 O celular · Rota (madrugada)
 *
 * FLAGS NOVAS
 *  Lembra_suco · Boa_sorte_Serena · Encarou_Serena · Meu_lado_balcao · Meio_junto · Veio_mesmo_assim
 *  Chora_alto · Devolveu_copo · Ignorou_Serena_festa · Prova_dagua · Hana_anota_Serena · Perdeu_pra_voce
 *  Beijo_Kaito · Voltei_longe_Takeo · Danca_sem_musica · Nao_pensa_Takeo · Ve_tudo_Blake · Descansa_Blake
 *  Pensando_Blake · Abraco_Ryuji_festa · Bochecha_Ryuji · Falou_sem_lata · Ja_pulou_Victor · Roupa_Blake_Victor
 *  Levo_a_serio
 */