/*
 * =====================================================================
 *  CAPÍTULO 14 — Sábado de meninas
 *  Sábado, o dia seguinte à visita na casa do Takeo (Capítulo 13).
 * =====================================================================
 *
 *  O QUE ACONTECE
 *    • A Mio chama a SN e a Hana para passar o sábado no shopping.
 *    • Relatório das fotos de bebê, o provador, a primeira vez da SN num sábado com amigas.
 *    • Encontram o Ryuji na loja de brinquedos, comprando presente para a irmãzinha.
 *      Conversa séria com ele: por que ele é sempre o palhaço.
 *    • O Ryuji leva as meninas "sem querer" até a livraria onde o Blake trabalha aos sábados.
 *      A Mio e o Blake se encontram depois de dias sem se falar. A SN conversa com o Blake.
 *    • Cabine de fotos. Gancho: a Sayuri no shopping, com alguém segurando o braço dela.
 *
 *  REGRAS QUE ESTE CAPÍTULO SEGUE
 *    • Nada de gangue. O Ren não aparece. Ninguém fala o apelido antigo.
 *    • Romance devagar. O Blake é calado: dá e não dá bola para a Mio.
 *
 *  PERSONAGENS
 *    Mio, Hana, Ryuji, Blake. Sem sprite: Momo (irmã do Ryuji, já citada no Cap. 12),
 *    Sayuri, Homem de terno (sem nome, só aparece de longe).
 *
 *  CENÁRIOS
 *    Shopping (corredores, lojas, livraria) → "corredor" (troque por "shopping" se criar)
 *    Entrada do shopping → "saida-colegio" · Quarto da SN → "quarto-sn"
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Voltou_com_Kaito, Voltou_com_Takeo, Mandou_Blake_Mio, Aceitou_desculpa_Blake,
 *    Contou_Hana, Ofereceu_ajuda_Sayuri.
 *
 *  Crie a entrada "capitulo14" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo14", {
  inicio: "c0_01",
  cenas: {

    /* =================== ABERTURA — O GRUPO =================== */
    // Cenário: quarto da SN, sábado de manhã. Música: piano leve.
    c0_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Sábado, 9h12", sprite: null, texto: "Ela acorda com o celular vibrando sem parar em cima do travesseiro. Onze mensagens. Todas da Mio. Num grupo novo, criado às sete da manhã, chamado “SÁBADO DE MENINAS 🛍️🛍️🛍️”.", proxima: "c0_02" },
    c0_02: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "BOM DIA. Shopping. Hoje. Eu, você e a Hana. Uma da tarde na entrada principal. Não aceito não como resposta.", proxima: "c0_03" },
    c0_03: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "E você vai me contar TUDO das fotos de bebê. Ao vivo. Com gestos.", proxima: "c0_04" },
    c0_04: { quem: "mensagem", rotulo: "Mensagem — Hana", texto: "Eu já fiz um roteiro. Treze lojas. Quatro horas e meia. Pausa para lanche às 15h40. Vou mandar em PDF.", proxima: "c0_05" },
    c0_05: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "HANA NÃO É UMA EXCURSÃO DA ESCOLA.", proxima: "c0_06" },
    c0_06: { quem: "mensagem", rotulo: "Mensagem — Hana", texto: "Tudo é uma excursão se você planejar direito.", proxima: "c0_07" },
    c0_07: { tipo: "narracao", texto: "A SN fica olhando para a tela. Para o nome do grupo. Para os três sacolinhas de emoji.", proxima: "c0_08" },
    c0_08: { tipo: "pensamento", texto: "Na outra vida, eu nunca fui num shopping com amigas. Nenhuma vez. Aos dezesseis, eu ia sozinha, de capuz, comprar o que precisava e sair rápido. Aos vinte e oito, eu nem ia mais.", proxima: "c0_09" },
    c0_09: { tipo: "pensamento", texto: "Eu sempre achei que isso era coisa de filme. Três amigas rindo com sacola na mão.", proxima: "c0_10" },
    c0_10: { tipo: "narracao", texto: "Ela digita. Apaga. Digita de novo.", proxima: "c0_11" },
    c0_11: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu vou.", proxima: "c0_12" },
    c0_12: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "AAAAAAAAAAA", proxima: "c0_13" },
    c0_13: { quem: "mensagem", rotulo: "Mensagem — Hana", texto: "Anotado. Três pessoas. Vou recalcular o tempo de fila do sorvete.", proxima: "c1_01" },

    /* =================== CENA 1 — O RELATÓRIO =================== */
    // Cenário: entrada do shopping (usa "saida-colegio"). Música: pop leve, animado.
    c1_01: { roupa: "shopping", tipo: "narracao", cenario: "shopping", transicao: "tempo", legenda: "Cena 1 — O relatório", sprite: "mio", texto: "Uma da tarde. A Mio já está na entrada, pulando no lugar, com um vestido amarelo e uma bolsa em forma de morango. Quando vê a SN, ela corre e abraça com tanta força que as duas quase caem.", proxima: "c1_02" },
    c1_02: { quem: "mio", texto: "VOCÊ VEIO. Eu achei que você ia inventar uma dor de barriga.", proxima: "c1_03" },
    c1_03: { tipo: "pensamento", texto: "Na outra vida eu teria inventado. Eu era ótima em dor de barriga.", proxima: "c1_04" },
    c1_04: { tipo: "narracao", sprite: "hana", texto: "A Hana chega um minuto depois. Exatamente uma da tarde e um minuto. Com uma pasta de plástico na mão. Dentro, o roteiro impresso. Três cópias.", proxima: "c1_05" },
    c1_05: { quem: "hana", texto: "Eu sei que ninguém vai seguir. Mas eu me sinto melhor com ele na mão.", proxima: "c1_06" },
    c1_06: { quem: "mio", sprite: "mio", texto: "Tá. Antes de qualquer loja. Relatório. Agora. As fotos de bebê. Como ele era?", proxima: "c1_07" },
    c1_07: { quem: "eu", texto: "Redondo. Careca. Com cara de ofendido. Quatro quilos e oitocentos.", proxima: "c1_08" },
    c1_08: { quem: "mio", texto: "EU SABIA. Eu sabia que ele era um bebê bolinho. Tem foto dele chorando?", proxima: "c1_09" },
    c1_09: { quem: "eu", texto: "Tem uma chorando porque um pombo roubou o pão dele.", proxima: "c1_10" },
    c1_10: { tipo: "narracao", texto: "A Mio dá um grito tão alto que um segurança olha para elas. A Hana anota alguma coisa no canto do roteiro.", proxima: "c1_11" },
    c1_11: { quem: "hana", sprite: "hana", texto: "E a Reina? Ela foi mesmo junto?", proxima: "c1_12" },
    c1_12: { quem: "eu", texto: "Foi. Com pudim. A avó dele chamou ela de menina do pudim.", proxima: "c1_13" },
    c1_13: { quem: "mio", sprite: "mio", texto: "E você? Ela te chamou de quê?", proxima: "c1_14" },
    c1_14: { quem: "eu", texto: "...De menina da viga.", proxima: "c1_15" },
    c1_15: { tipo: "narracao", texto: "A Mio e a Hana se olham. Um daqueles olhares de amiga que decidem uma coisa sem precisar falar.", proxima: "c1_16" },
    c1_16: { quem: "hana", texto: "Ela te deu apelido primeiro. A ordem importa.", proxima: "c1_17" },
    c1_17: { quem: "mio", texto: "E como você voltou pra casa? Alguém te levou? FALA.", proxima: "c1_cam1" },
    c1_cam1: { caminhos: [
      { flag: "Voltou_com_Kaito", proxima: "c1_k1" },
      { flag: "Voltou_com_Takeo", proxima: "c1_t1" }
    ], proxima: "c1_esc1" },
    c1_k1: { quem: "eu", texto: "O Kaito apareceu. Com dois lámen que ninguém pediu. Ele me levou de bicicleta.", proxima: "c1_k2" },
    c1_k2: { quem: "mio", texto: "O KAITO? O Kaito apareceu na casa do Takeo? Do NADA? Com LÁMEN?", proxima: "c1_k3" },
    c1_k3: { quem: "hana", texto: "A lojinha do tio dele fica a quarenta minutos da casa do Takeo. Eu já calculei uma vez. Não existe entrega nessa distância.", proxima: "c1_k4" },
    c1_k4: { tipo: "narracao", texto: "As duas ficam olhando para ela. A SN sente o rosto esquentar inteiro.", proxima: "c1_esc1" },
    c1_t1: { quem: "eu", texto: "O Takeo. E a Reina foi junto. E o Kaito apareceu antes. Com lámen.", proxima: "c1_t2" },
    c1_t2: { quem: "mio", texto: "Espera. Espera. O Kaito APARECEU? E você foi com o TAKEO? E a REINA foi junto? Isso é uma novela. Eu estou assistindo uma novela.", proxima: "c1_t3" },
    c1_t3: { quem: "hana", texto: "Isso explica por que o Kaito postou uma foto de um céu nublado às dez da noite. Sem legenda. Ele nunca posta nada.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — O que contar para as amigas
    c1_esc1: { escolhas: [
      { texto: "A. Contar tudo. Até a parte que fez o coração disparar.", proxima: "c1_1a_1", pontos: { mio: 2, hana: 2 }, flags: ["Contou_tudo_amigas"] },
      { texto: "B. “Não aconteceu nada demais.” E mudar de assunto rápido.", proxima: "c1_1b_1", pontos: { hana: 1 }, flags: ["Escondeu_amigas"] },
      { texto: "C. “E você, Mio? Falou com o Blake?”", proxima: "c1_1c_1", pontos: { mio: 2 }, flags: ["Perguntou_Mio_Blake"] }
    ]},
    c1_1a_1: { tipo: "narracao", texto: "Ela conta. Devagar, do jeito que lembra. A Mio grita em três partes diferentes. A Hana não grita nenhuma vez, mas no final pega o roteiro e escreve, bem pequenininho, no canto: “Ela está feliz.”", proxima: "c1_1a_2" },
    c1_1a_2: { tipo: "pensamento", texto: "Eu nunca tive pra quem contar essas coisas. Nunca. Falar em voz alta deixa tudo mais de verdade.", proxima: "c1_18" },
    c1_1b_1: { quem: "mio", texto: "Mentira. Sua orelha está vermelha. Igual à do Kaito.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "eu", texto: "Minha orelha não está vermelha.", proxima: "c1_1b_3" },
    c1_1b_3: { quem: "hana", texto: "Está um pouco. Mas a gente pode fingir que não. Até a pausa do lanche. Às 15h40 você conta.", proxima: "c1_18" },
    c1_1c_1: { tipo: "narracao", texto: "O sorriso da Mio fica parado no rosto. Ela não para de sorrir, mas o sorriso fica duro, como uma foto.", proxima: "c1_1c_2" },
    c1_1c_2: { quem: "mio", texto: "Não. E nem vou. Hoje é sábado de meninas. Blake não entra no sábado de meninas.", proxima: "c1_1c_3" },
    c1_1c_3: { tipo: "narracao", texto: "Ela engancha um braço na SN e o outro na Hana e puxa as duas para dentro do shopping. Rápido. Antes que alguém pergunte mais.", proxima: "c1_18" },

    // (todas as opções continuam aqui)
    c1_18: { tipo: "narracao", sprite: null, texto: "As portas automáticas abrem. O ar-condicionado gelado. O cheiro de pipoca doce e de perfume de loja. A música de fundo. Gente andando com sacolas.", proxima: "c1_19" },
    c1_19: { tipo: "pensamento", texto: "Eu estou aqui. Com elas. Num sábado. Como se fosse normal.", proxima: "c2_01" },

    /* =================== CENA 2 — O PROVADOR =================== */
    // Cenário: loja de roupa (usa "corredor"). Música: pop leve.
    c2_01: { tipo: "narracao", cenario: "shopping", transicao: "tempo", legenda: "Cena 2 — O provador", sprite: "mio", texto: "Primeira loja do roteiro. A Mio entra como quem entra num campo de batalha. Em cinco minutos, ela tem oito peças de roupa penduradas no braço. Nenhuma é para ela.", proxima: "c2_02" },
    c2_02: { quem: "mio", texto: "Prova. Todas. Eu escolhi pensando em você.", proxima: "c2_03" },
    c2_03: { quem: "eu", texto: "Mio, isso é um vestido com babado.", proxima: "c2_04" },
    c2_04: { quem: "mio", texto: "É um vestido com babado LINDO. Prova.", proxima: "c2_05" },
    c2_05: { tipo: "narracao", sprite: null, texto: "No provador, ela tira o casaco. Fica parada na frente do espelho comprido, com a luz branca batendo de cima.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", texto: "Na quarta-feira, ela ficou na frente de outro espelho. No vestiário. Molhada. Com cheiro de água de aquário. Ouvindo os apelidos pela porta.", proxima: "c2_07" },
    c2_07: { tipo: "pensamento", texto: "Eu passei a semana inteira com medo de cheirar mal. Eu lavei o cabelo quatro vezes ontem. Eu cheiro o meu pulso no meio da aula, escondida.", proxima: "c2_08" },
    c2_08: { tipo: "pensamento", texto: "Ninguém percebe. Mas eu faço.", proxima: "c2_09" },
    c2_09: { tipo: "narracao", texto: "Ela veste o vestido. É azul-claro, de babado na barra. Fica olhando para o espelho por muito tempo. Não sabe se está bonita. Não lembra a última vez que se olhou para saber isso.", proxima: "c2_10" },
    c2_10: { quem: "mio", sprite: "mio", texto: "E AÍ? Abre a cortina!", proxima: "c2_esc2" },

    // ▶ ESCOLHA 2 — No provador
    c2_esc2: { escolhas: [
      { texto: "A. Abrir a cortina de uma vez e girar. Do jeito que a Mio faria.", proxima: "c2_2a_1", pontos: { mio: 3 }, flags: ["Girou_provador"] },
      { texto: "B. Abrir só um pouquinho. “...Não sei se ficou bom.”", proxima: "c2_2b_1", pontos: { mio: 2, hana: 2 }, flags: ["Insegura_provador"] },
      { texto: "C. “Só se vocês provarem um também.”", proxima: "c2_2c_1", pontos: { mio: 2, hana: 2 }, flags: ["Provador_das_tres"] }
    ]},
    c2_2a_1: { tipo: "narracao", texto: "Ela abre a cortina e gira. O vestido abre na barra. Ela quase bate o cotovelo na parede do provador.", proxima: "c2_2a_2" },
    c2_2a_2: { tipo: "narracao", texto: "A Mio fica um segundo em silêncio. Depois começa a bater palmas, sozinha, no meio da loja. A vendedora bate também, sem saber por quê.", proxima: "c2_2a_3" },
    c2_2a_3: { quem: "mio", texto: "Você está parecendo protagonista de novela. Você está parecendo a capa de um livro que eu ia comprar.", proxima: "c2_20" },
    c2_2b_1: { tipo: "narracao", texto: "A Mio para de sorrir. Ela entende rápido. Ela sempre entende rápido, mesmo parecendo que não presta atenção em nada.", proxima: "c2_2b_2" },
    c2_2b_2: { tipo: "narracao", sprite: "hana", texto: "A Hana se aproxima. Fala baixo. Só para ela.", proxima: "c2_2b_3" },
    c2_2b_3: { quem: "hana", texto: "Se você está pensando no cheiro: não tem nenhum. Eu verifiquei quando você me abraçou na entrada. Cheiro de sabonete de erva-doce. Só isso.", proxima: "c2_2b_4" },
    c2_2b_4: { quem: "eu", texto: "Você... verificou?", proxima: "c2_2b_5" },
    c2_2b_5: { quem: "hana", texto: "Eu achei que você ia perguntar. Eu queria ter a resposta certa.", proxima: "c2_2b_6" },
    c2_2b_6: { tipo: "narracao", texto: "A SN abre a cortina inteira. A Mio não grita. Só sorri, do jeito pequeno, e arruma o babado do ombro dela com cuidado.", proxima: "c2_20" },
    c2_2c_1: { tipo: "narracao", sprite: "mio", texto: "A Mio aceita na hora. A Hana olha para as roupas como se fossem uma prova surpresa.", proxima: "c2_2c_2" },
    c2_2c_2: { tipo: "narracao", texto: "Dez minutos depois, as três estão na frente do espelho grande. A SN de vestido azul. A Mio com uma jaqueta de couro que fica enorme nela. A Hana com um chapéu de palha que ela segura com as duas mãos, como se fosse voar.", proxima: "c2_2c_3" },
    c2_2c_3: { quem: "hana", sprite: "hana", texto: "Isso não está no roteiro.", proxima: "c2_2c_4" },
    c2_2c_4: { quem: "mio", sprite: "mio", texto: "É por isso que está divertido!", proxima: "c2_2c_5" },
    c2_2c_5: { tipo: "narracao", texto: "A Hana olha para o próprio reflexo de chapéu. E dá uma risada curta, surpresa, que ela tenta engolir e não consegue.", proxima: "c2_20" },

    // (todas as opções continuam aqui)
    c2_20: { tipo: "narracao", sprite: null, texto: "Ela não compra o vestido. Custa três semanas de mesada. Mas a Mio tira uma foto dela com ele, e manda no grupo, com a legenda “PROVA DE QUE ELA É LINDA, NÃO ACEITO CONTESTAÇÃO”.", proxima: "c2_21" },
    c2_21: { tipo: "pensamento", texto: "Eu vou salvar essa foto. E vou olhar pra ela nos dias em que eu cheirar o pulso no meio da aula.", proxima: "c3_01" },

    /* =================== CENA 3 — O COELHO DE PELÚCIA =================== */
    // Cenário: loja de brinquedos (usa "corredor"). Música: tema do Ryuji, leve.
    c3_01: { tipo: "narracao", cenario: "shopping", transicao: "tempo", legenda: "Cena 3 — O coelho de pelúcia", sprite: null, texto: "Loja número seis do roteiro: papelaria. Mas no caminho tem uma loja de brinquedos, e na vitrine da loja de brinquedos tem uma pessoa conhecida. De joelhos no chão. Discutindo com um coelho de pelúcia.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji. Com uma jaqueta de moletom, o cabelo preso de qualquer jeito, segurando dois coelhos de pelúcia, um em cada mão. Um rosa. Um branco.", proxima: "c3_03" },
    c3_03: { quem: "ryuji", texto: "...o rosa tem a orelha mais bonita, mas o branco tem a cara mais simpática. Qual dos dois a Momo ia gostar? Fala alguma coisa, coelho.", proxima: "c3_04" },
    c3_04: { quem: "mio", sprite: "mio", texto: "RYUJI?", proxima: "c3_05" },
    c3_05: { tipo: "narracao", sprite: "ryuji", texto: "Ele dá um pulo tão grande que joga os dois coelhos para cima. Pega um. O outro cai na cabeça da Hana.", proxima: "c3_06" },
    c3_06: { quem: "ryuji", texto: "Eu não estava falando com um coelho.", proxima: "c3_07" },
    c3_07: { quem: "hana", sprite: "hana", texto: "Você perguntou pro coelho qual dos dois a Momo ia gostar.", proxima: "c3_08" },
    c3_08: { quem: "ryuji", sprite: "ryuji", texto: "...É uma técnica. De decisão. Muito avançada.", proxima: "c3_09" },
    c3_09: { tipo: "narracao", texto: "Ele levanta, bate a poeira do joelho e finge que nada aconteceu. Depois desiste de fingir.", proxima: "c3_10" },
    c3_10: { quem: "ryuji", texto: "Tá. O aniversário da Momo é amanhã. Ela faz nove anos. E ela me disse, e eu cito, “se você não acertar o presente, você não é mais meu irmão”.", proxima: "c3_11" },
    c3_11: { quem: "ryuji", texto: "Eu estou aqui faz uma hora e quarenta minutos. Me ajudem. Por favor. Eu imploro. Eu faço a lição de matemática de vocês.", proxima: "c3_12" },
    c3_12: { quem: "hana", texto: "Você tira quatro em matemática, Ryuji.", proxima: "c3_13" },
    c3_13: { quem: "ryuji", texto: "Então eu faço a lição de outra coisa!", proxima: "c3_14" },
    c3_14: { tipo: "narracao", sprite: null, texto: "A Mio e a Hana entram na loja com ele, discutindo cor de pelúcia. A SN fica um pouco atrás. E, quando as duas vão para o corredor das bonecas, o Ryuji para do lado dela, na frente da prateleira dos coelhos.", proxima: "c3_15" },
    c3_15: { tipo: "narracao", sprite: "ryuji", texto: "Ele não faz piada. Ele fica olhando para os coelhos. E pergunta, baixo, sem olhar para ela:", proxima: "c3_16" },
    c3_16: { quem: "ryuji", texto: "Você está bem? Da quarta-feira.", proxima: "c3_17" },
    c3_17: { tipo: "narracao", texto: "Ela não esperava. Não do Ryuji. Não ali, no meio de uma loja de brinquedos.", proxima: "c3_18" },
    c3_18: { quem: "eu", texto: "Estou melhorando.", proxima: "c3_19" },
    c3_19: { quem: "ryuji", texto: "É. Melhorando é bom. Melhorando é o máximo que dá, às vezes.", proxima: "c3_20" },
    c3_20: { tipo: "narracao", texto: "Ele pega o coelho branco. Mexe na orelha dele.", proxima: "c3_21" },
    c3_21: { quem: "ryuji", texto: "No fundamental, eu era o menor da sala. Não o mais fraco, só o menor. Eu só fui crescer no oitavo ano. Tinha um grupo que me colocava dentro do armário de vassoura toda sexta. Toda sexta. Virou tradição.", proxima: "c3_22" },
    c3_22: { quem: "ryuji", texto: "Aí um dia eu descobri que, se eu fizesse eles rirem antes, eles esqueciam do armário. Então eu comecei a fazer piada. De tudo. De mim. Da minha cara. Do meu tamanho.", proxima: "c3_23" },
    c3_23: { quem: "ryuji", texto: "Funcionou. Eles pararam. E eu nunca mais parei de fazer piada.", proxima: "c3_24" },
    c3_24: { tipo: "narracao", texto: "Ele dá de ombros. Um sorriso torto. Não é o sorriso de sempre.", proxima: "c3_25" },
    c3_25: { quem: "ryuji", texto: "Na quarta, quando todo mundo estava rindo de você, eu fiquei pensando que eu podia ter feito uma piada. Pra desviar. Pra eles rirem de mim no seu lugar. É o que eu sei fazer.", proxima: "c3_26" },
    c3_26: { quem: "ryuji", texto: "Mas eu não consegui pensar em nada engraçado. Pela primeira vez na vida. Eu fiquei com raiva demais pra ser engraçado.", proxima: "c3_27" },
    c3_27: { tipo: "pensamento", texto: "Na outra vida, eu achava que o Ryuji era só o garoto barulhento da gangue. Que ria de tudo. Eu nunca perguntei por quê.", proxima: "c3_28" },
    c3_28: { tipo: "pensamento", texto: "Eu nunca perguntei nada pra ninguém.", proxima: "c3_esc3" },

    // ▶ ESCOLHA 3 — O Ryuji sem piada
    c3_esc3: { escolhas: [
      { texto: "A. “Você não precisa ser engraçado comigo. Pode ser só você.”", proxima: "c3_3a_1", pontos: { ryuji: 3 }, flags: ["Ryuji_sem_piada"] },
      { texto: "B. “Eles nunca mais te colocaram no armário. E hoje você é quem tira as pessoas do armário.”", proxima: "c3_3b_1", pontos: { ryuji: 3 }, flags: ["Ryuji_armario"] },
      { texto: "C. Pegar o coelho rosa da prateleira: “A Momo vai querer os dois. Um pra ela, um pra você.”", proxima: "c3_3c_1", pontos: { ryuji: 2 }, flags: ["Ryuji_dois_coelhos"] }
    ]},
    c3_3a_1: { tipo: "narracao", texto: "O Ryuji fica quieto. Por um bom tempo. O que, para o Ryuji, é muito estranho.", proxima: "c3_3a_2" },
    c3_3a_2: { quem: "ryuji", texto: "...Você sabe que isso é muito perigoso de falar pra mim, né? Agora eu vou ficar sério perto de você o tempo todo. Vai ser chato. Você vai se arrepender.", proxima: "c3_3a_3" },
    c3_3a_3: { quem: "eu", texto: "Eu duvido.", proxima: "c3_3a_4" },
    c3_3a_4: { tipo: "narracao", texto: "Ele ri. Baixinho. Um riso diferente do que ele usa na escola. Mais curto. Mais dele.", proxima: "c3_29" },
    c3_3b_1: { tipo: "narracao", texto: "O Ryuji pisca. Ele abre a boca para fazer uma piada. Fecha. Abre de novo.", proxima: "c3_3b_2" },
    c3_3b_2: { quem: "ryuji", texto: "...Eu nunca tinha pensado assim.", proxima: "c3_3b_3" },
    c3_3b_3: { tipo: "narracao", texto: "Ele olha para o coelho na mão. Para ela.", proxima: "c3_3b_4" },
    c3_3b_4: { quem: "ryuji", texto: "Você também, sabia? Você tirou o Takeo de baixo de uma viga. Isso é tipo um armário bem grande.", proxima: "c3_29" },
    c3_3c_1: { quem: "ryuji", texto: "Os dois? Um pra mim?", proxima: "c3_3c_2" },
    c3_3c_2: { quem: "eu", texto: "Ela tem nove anos. Ela vai querer que o irmão tenha um igual. Pra brincar com ela.", proxima: "c3_3c_3" },
    c3_3c_3: { tipo: "narracao", texto: "O Ryuji olha para os dois coelhos. Um em cada mão. E a cara dele muda inteira, como quem acabou de resolver um problema de matemática pela primeira vez.", proxima: "c3_3c_4" },
    c3_3c_4: { quem: "ryuji", texto: "Você é um gênio. Você é um gênio dos coelhos. Eu te devo minha vida. Eu te devo minha irmandade.", proxima: "c3_29" },

    // (todas as opções continuam aqui)
    c3_29: { tipo: "narracao", sprite: "ryuji", texto: "Ele leva os coelhos para o caixa. A Mio e a Hana voltam do corredor das bonecas com uma coroa de plástico que ninguém pediu.", proxima: "c3_30" },
    c3_30: { quem: "ryuji", texto: "Vocês estão almoçando? Eu pago o sorvete. Por causa do coelho. E porque eu não quero voltar pra casa e ficar sozinho embrulhando presente.", proxima: "c3_31" },
    c3_31: { quem: "hana", sprite: "hana", texto: "O sorvete está no roteiro às 15h40. São 14h50.", proxima: "c3_32" },
    c3_32: { quem: "ryuji", sprite: "ryuji", texto: "Hana. Eu vou te ensinar uma coisa importante sobre a vida. O sorvete não tem horário.", proxima: "c4_01" },

    /* =================== CENA 4 — PRAÇA DE ALIMENTAÇÃO =================== */
    // Cenário: praça de alimentação (usa "corredor"). Música: pop leve, conversa.
    c4_01: { tipo: "narracao", cenario: "praca-alimentacao", transicao: "tempo", legenda: "Cena 4 — Praça de alimentação", sprite: null, texto: "Os quatro sentam numa mesa da praça de alimentação. Quatro sorvetes. A Hana pediu de baunilha, sem cobertura. A Mio pediu de três sabores com tudo que tinha. O Ryuji pediu de chocolate e roubou a cobertura da Mio.", proxima: "c4_02" },
    c4_02: { quem: "ryuji", sprite: "ryuji", texto: "E aí. Ouvi dizer que alguém foi na casa do Takeo ontem.", proxima: "c4_03" },
    c4_03: { quem: "eu", texto: "Como você ouviu isso?", proxima: "c4_04" },
    c4_04: { quem: "ryuji", texto: "O Takeo me mandou mensagem às onze da noite. Dizendo “foi bom”. Só isso. “Foi bom.” O Takeo nunca manda mensagem às onze da noite. Ele dorme às dez e meia. Ele tem uma rotina de senhor.", proxima: "c4_05" },
    c4_05: { tipo: "narracao", texto: "A Mio se engasga com o sorvete. A Hana dá tapinhas nas costas dela, metodicamente.", proxima: "c4_06" },
    c4_06: { quem: "ryuji", texto: "E o líder ficou estranho a manhã inteira. Ele foi no pátio e ficou batendo no saco de pancada assobiando. Assobiando. O Kaito não assobia. Eu tenho medo.", proxima: "c4_07" },
    c4_07: { tipo: "pensamento", texto: "Ele assobiou. De novo. Desafinado, eu aposto.", proxima: "c4_08" },
    c4_08: { tipo: "narracao", sprite: "mio", texto: "A Mio mexe no sorvete com a colher, sem comer. Faz um buraco no meio, depois tapa, depois faz de novo.", proxima: "c4_09" },
    c4_09: { quem: "mio", texto: "...E o Blake? Ficou estranho também?", proxima: "c4_10" },
    c4_10: { tipo: "narracao", texto: "Ela fala isso olhando para o sorvete. Bem rápido. Como se a pergunta tivesse escapado.", proxima: "c4_11" },
    c4_11: { quem: "ryuji", sprite: "ryuji", texto: "O Blake? O Blake sempre é estranho. Mas essa semana ele está estranho em silêncio. É diferente. Ele bateu no saco de pancada até rasgar. O líder teve que remendar com fita de novo.", proxima: "c4_12" },
    c4_12: { quem: "mio", sprite: "mio", texto: "Rasgar?", proxima: "c4_13" },
    c4_13: { quem: "ryuji", sprite: "ryuji", texto: "Rasgar. E aí ele sentou do lado do saco e ficou uma hora olhando pro celular. Sem mandar nada pra ninguém. Quem será que ele não teve coragem de mandar mensagem, hein?", proxima: "c4_14" },
    c4_14: { tipo: "narracao", texto: "A Mio fica vermelha até o pescoço. Ela larga a colher. Pega de novo.", proxima: "c4_15" },
    c4_15: { quem: "mio", texto: "Isso não tem nada a ver comigo. Nada. Eu não estou falando com ele.", proxima: "c4_cam1" },
    c4_cam1: { caminhos: [
      { flag: "Mandou_Blake_Mio", proxima: "c4_mio_mandou" }
    ], proxima: "c4_16" },
    c4_mio_mandou: { quem: "mio", texto: "Ele tentou falar comigo na quinta. No pátio. Eu fingi que estava no telefone. Eu estava sem bateria. Ele viu que a tela estava preta.", proxima: "c4_mio_mandou2" },
    c4_mio_mandou2: { tipo: "pensamento", texto: "Eu mandei ele atrás dela. Ele foi. E ela fugiu.", proxima: "c4_16" },
    c4_16: { quem: "ryuji", sprite: "ryuji", texto: "Tá bom. Então vocês não querem saber que ele trabalha na livraria do terceiro andar todo sábado, das dez às seis. E que agora são três e dez.", proxima: "c4_17" },
    c4_17: { tipo: "narracao", texto: "Silêncio na mesa.", proxima: "c4_18" },
    c4_18: { quem: "hana", sprite: "hana", texto: "Livraria do terceiro andar. É a loja número onze do meu roteiro.", proxima: "c4_19" },
    c4_19: { quem: "mio", sprite: "mio", texto: "Pula a onze.", proxima: "c4_20" },
    c4_20: { quem: "hana", sprite: "hana", texto: "Eu não pulo loja do roteiro.", proxima: "c4_21" },
    c4_21: { quem: "mio", sprite: "mio", texto: "HANA.", proxima: "c4_22" },
    c4_22: { tipo: "narracao", sprite: null, texto: "A Mio olha para a SN. Pedindo socorro. Ou pedindo outra coisa. É difícil saber.", proxima: "c4_esc4" },

    // ▶ ESCOLHA 4 — A loja número onze
    c4_esc4: { escolhas: [
      { texto: "A. “A gente vai junto. Se ficar ruim, a gente sai. Eu prometo.”", proxima: "c4_4a_1", pontos: { mio: 3 }, flags: ["Levou_Mio_livraria"] },
      { texto: "B. “Hoje é sábado de meninas. Você decide, Mio.”", proxima: "c4_4b_1", pontos: { mio: 2 }, flags: ["Mio_decidiu_livraria"] },
      { texto: "C. “Eu preciso de um livro mesmo. Vou sozinha. Vocês ficam aqui.”", proxima: "c4_4c_1", pontos: { blake: 1 }, flags: ["Foi_sozinha_livraria"] }
    ]},
    c4_4a_1: { tipo: "narracao", texto: "A Mio respira fundo. Uma, duas, três vezes. A Hana conta junto, em voz baixa, sem perceber.", proxima: "c4_4a_2" },
    c4_4a_2: { quem: "mio", sprite: "mio", texto: "Tá. Mas se eu fizer uma cara estranha, vocês me tiram de lá. Arrastando, se precisar.", proxima: "c4_4a_3" },
    c4_4a_3: { quem: "ryuji", sprite: "ryuji", texto: "Eu arrasto. Eu sou ótimo em arrastar.", proxima: "c4_23" },
    c4_4b_1: { tipo: "narracao", texto: "A Mio fica olhando para o sorvete derretido. Por muito tempo.", proxima: "c4_4b_2" },
    c4_4b_2: { quem: "mio", sprite: "mio", texto: "...A gente passa na frente. Só passa. Não entra. Só olha pela vitrine.", proxima: "c4_4b_3" },
    c4_4b_3: { quem: "hana", sprite: "hana", texto: "Isso é entrar com mais passos.", proxima: "c4_23" },
    c4_4c_1: { tipo: "narracao", texto: "A Mio abre a boca para protestar. Depois fecha. Ela entende. A SN vai sozinha para ela não precisar ir.", proxima: "c4_4c_2" },
    c4_4c_2: { quem: "mio", sprite: "mio", texto: "...Se ele perguntar de mim, você diz que eu estou ótima. Super ótima. Que eu estou me divertindo muito sem ele.", proxima: "c4_4c_3" },
    c4_4c_3: { tipo: "pensamento", texto: "Ela vai ficar aqui sentada esperando eu voltar pra perguntar o que ele disse. Eu sei.", proxima: "c4_23" },

    // (todas as opções continuam aqui)
    c4_23: { tipo: "narracao", sprite: "ryuji", texto: "O Ryuji levanta, pega a sacola dos coelhos e se despede com uma saudação militar.", proxima: "c4_24" },
    c4_24: { quem: "ryuji", texto: "Eu vou embrulhar presente. Se vocês precisarem de reforço, me liguem. Eu chego em quarenta minutos. Ou em uma hora. Eu me perco no shopping.", proxima: "c4_25" },
    c4_25: { tipo: "narracao", texto: "Antes de ir, ele para do lado da SN e fala baixo, só para ela.", proxima: "c4_26" },
    c4_26: { quem: "ryuji", texto: "Valeu. Pelo coelho. E pelo resto.", proxima: "c5_01" },

    /* =================== CENA 5 — A LIVRARIA =================== */
    // Cenário: livraria do terceiro andar (usa "corredor"). Música: violino calmo.
    c5_01: { tipo: "narracao", cenario: "livraria-shopping", transicao: "tempo", legenda: "Cena 5 — A livraria", sprite: null, texto: "A livraria do terceiro andar é pequena e silenciosa. Cheira a papel novo e a café. Tem uma poltrona velha no canto e um gato de porcelana na vitrine.", proxima: "c5_02" },
    c5_02: { tipo: "narracao", sprite: "blake", texto: "O Blake está atrás do balcão. De avental verde. Com um crachá escrito “Blake — pode perguntar”. Ele está arrumando uma pilha de livros por ordem de cor, devagar, com muito cuidado.", proxima: "c5_03" },
    c5_03: { tipo: "pensamento", texto: "Eu nunca soube que ele trabalhava aqui. Na outra vida, eu nunca soube nada dele, além do tamanho e do silêncio.", proxima: "c5_cam1" },
    c5_cam1: { caminhos: [
      { flag: "Foi_sozinha_livraria", proxima: "c5_sozinha" }
    ], proxima: "c5_mio_01" },

    // ---- Com a Mio junto ----
    c5_mio_01: { tipo: "narracao", texto: "Ele levanta os olhos quando a porta faz o barulhinho de sino. Vê a SN. Vê a Hana. Vê a Mio, meio escondida atrás das duas.", proxima: "c5_mio_02" },
    c5_mio_02: { tipo: "narracao", texto: "O livro que ele está segurando cai no chão. Ele não pega.", proxima: "c5_mio_03" },
    c5_mio_03: { quem: "blake", texto: "...Mio.", proxima: "c5_mio_04" },
    c5_mio_04: { quem: "mio", sprite: "mio", texto: "Oi. A gente... a gente está fazendo um roteiro. A Hana fez. A livraria é a loja número onze. Não é por sua causa. É por causa do roteiro.", proxima: "c5_mio_05" },
    c5_mio_05: { quem: "hana", sprite: "hana", texto: "É verdade. Está escrito aqui. Loja onze.", proxima: "c5_mio_06" },
    c5_mio_06: { tipo: "narracao", sprite: "blake", texto: "O Blake concorda com a cabeça, sério. Abaixa. Pega o livro do chão. Coloca de volta na pilha, na cor errada.", proxima: "c5_mio_07" },
    c5_mio_07: { tipo: "narracao", texto: "A Mio pega um livro qualquer da prateleira mais próxima. Abre. Finge ler. Está de cabeça para baixo.", proxima: "c5_mio_08" },
    c5_mio_08: { quem: "hana", sprite: "hana", texto: "Mio, vem comigo no corredor de livros de gato. Agora. É urgente. Tem um lançamento.", proxima: "c5_mio_09" },
    c5_mio_09: { tipo: "narracao", sprite: null, texto: "A Hana puxa a Mio pela mão para o fundo da loja. Antes de sumir entre as estantes, a Hana olha para a SN e faz um sinal pequeno com a cabeça. Para o balcão.", proxima: "c5_02b" },

    // ---- Sozinha ----
    c5_sozinha: { tipo: "narracao", texto: "Ele levanta os olhos quando a porta faz o barulhinho de sino. Vê a SN. Sozinha. Olha para trás dela, rápido. Procurando alguém.", proxima: "c5_sozinha2" },
    c5_sozinha2: { tipo: "narracao", texto: "Não encontra. Os ombros dele descem um pouquinho.", proxima: "c5_sozinha3" },
    c5_sozinha3: { quem: "blake", texto: "...Ela não veio.", proxima: "c5_sozinha4" },
    c5_sozinha4: { quem: "eu", texto: "Ela está lá embaixo. Na praça de alimentação. Ela mandou dizer que está ótima. Super ótima.", proxima: "c5_sozinha5" },
    c5_sozinha5: { tipo: "narracao", texto: "O Blake quase sorri. Quase.", proxima: "c5_sozinha6" },
    c5_sozinha6: { quem: "blake", texto: "“Super ótima.” Ela fala isso quando está péssima.", proxima: "c5_02b" },

    // (os dois caminhos continuam aqui)
    c5_02b: { tipo: "narracao", sprite: "blake", texto: "A SN encosta no balcão. O Blake continua arrumando os livros. Por cor. Sem olhar para ela.", proxima: "c5_10" },
    c5_10: { quem: "eu", texto: "Eu não sabia que você trabalhava aqui.", proxima: "c5_11" },
    c5_11: { quem: "blake", texto: "Sábado. Dez às seis.", proxima: "c5_12" },
    c5_12: { tipo: "narracao", texto: "Só isso. Ele volta para a pilha. Vermelho, laranja, amarelo.", proxima: "c5_13" },
    c5_13: { quem: "eu", texto: "Pra quê? Você nem gosta de gente.", proxima: "c5_14" },
    c5_14: { quem: "blake", texto: "Academia. É cara.", proxima: "c5_15" },
    c5_15: { quem: "eu", texto: "Você já é enorme.", proxima: "c5_16" },
    c5_16: { quem: "blake", texto: "O Kaito é menor que eu. E ganha de mim desde os sete anos.", proxima: "c5_17" },
    c5_17: { tipo: "narracao", texto: "Ele fala isso sem raiva. Coloca um livro verde na pilha errada. Percebe. Troca.", proxima: "c5_18" },
    c5_18: { quem: "blake", texto: "A primeira vez foi na praça. Ele pegou a minha bola. Eu fui buscar. Ele me derrubou. Eu levantei. Ele me derrubou de novo. Onze vezes.", proxima: "c5_19" },
    c5_19: { quem: "eu", texto: "E aí?", proxima: "c5_20" },
    c5_20: { quem: "blake", texto: "Aí ele devolveu a bola e disse: você é teimoso. Desde aquele dia a gente anda junto. E briga toda semana. Eu nunca ganhei.", proxima: "c5_21" },
    c5_21: { tipo: "narracao", texto: "O canto da boca dele sobe. Quase nada. É o mais perto de um sorriso que ela já viu nele.", proxima: "c5_22" },
    c5_22: { quem: "blake", texto: "Um dia eu ganho.", proxima: "c5_cam_m" },
    c5_cam_m: { caminhos: [ { flag: "Foi_sozinha_livraria", proxima: "c5_29c" } ], proxima: "c5_23" },
    c5_23: { tipo: "narracao", sprite: "mio", texto: "Do fundo da loja, a Mio aparece com um livro de capa vermelha na mão. Um suspense. Ela olha para o Blake e finge que não olhou.", proxima: "c5_24" },
    c5_24: { tipo: "narracao", sprite: "blake", texto: "O Blake vê o livro. Abaixa atrás do balcão. Volta com outro. Mesmo título, volume dois. Coloca na frente dela. Sem falar nada.", proxima: "c5_25" },
    c5_25: { quem: "mio", sprite: "mio", texto: "...Como você sabe que eu li o um?", proxima: "c5_26" },
    c5_26: { quem: "blake", sprite: "blake", texto: "Você falou. Na lojinha do tio. Em março.", proxima: "c5_27" },
    c5_27: { tipo: "narracao", texto: "A Mio fica vermelha até as orelhas. Abre a boca. E o Blake já voltou a arrumar os livros, como se não tivesse acontecido nada.", proxima: "c5_28" },
    c5_28: { quem: "blake", texto: "Tô trabalhando.", proxima: "c5_29" },
    c5_29: { tipo: "narracao", sprite: null, texto: "A Mio fica parada com os dois livros no braço. Sem saber se ganhou ou perdeu alguma coisa.", proxima: "c5_29b" },
    c5_29b: { tipo: "pensamento", texto: "Ele faz isso. Lembra de uma coisa que ela falou em março. E depois finge que não se importa. A Mio vive no meio dessas duas coisas.", proxima: "c5_29c" },
    c5_29c: { tipo: "pensamento", texto: "Na outra vida, o Blake morreu atrás do palco, às nove e catorze. Sem a Mio nunca dizer nada. Sem ele nunca dizer nada.", proxima: "c5_29d" },
    c5_29d: { tipo: "narracao", efeito: "flashback", texto: "Uma garota de cabelo curto, aos vinte e poucos, numa lanchonete. Rindo alto de alguma coisa, sozinha, de um jeito que não chega nos olhos. Uma pulseira de miçanga no pulso, com a letra B.", proxima: "c5_29e" },
    c5_29e: { tipo: "pensamento", texto: "A Mio. Na outra vida. Eu cruzei com ela uma vez, anos depois. Ela usava a pulseira. Eu nunca soube por quê. Agora eu sei.", proxima: "c5_esc5" },

    // ▶ ESCOLHA 5 — No balcão com o Blake
    c5_esc5: { escolhas: [
      { texto: "A. “Fala com a Mio, Blake. Ela não vai falar primeiro.”", proxima: "c5_5a_1", pontos: { blake: 1, mio: 2 }, flags: ["Manda_carta_Blake"] },
      { texto: "B. “Onze vezes? E você levantou todas?”", proxima: "c5_5b_1", pontos: { blake: 2 }, flags: ["Blake_contou_Kaito"] },
      { texto: "C. Pegar metade da pilha e ajudar a arrumar por cor, em silêncio.", proxima: "c5_5c_1", pontos: { blake: 2 }, flags: ["Arrumou_livros_Blake"] }
    ]},
    c5_5a_1: { tipo: "narracao", texto: "Ele para. A mão em cima de um livro azul.", proxima: "c5_5a_2" },
    c5_5a_2: { quem: "blake", texto: "Falar o quê?", proxima: "c5_5a_3" },
    c5_5a_3: { quem: "eu", texto: "Qualquer coisa. Mais do que “tô trabalhando”.", proxima: "c5_5a_4" },
    c5_5a_4: { tipo: "narracao", texto: "Ele demora. Depois tira o avental verde. Dobra em cima do balcão. Coloca a plaquinha de “volto em 5 minutos”.", proxima: "c5_5a_cam" },
    c5_5a_cam: { caminhos: [ { flag: "Foi_sozinha_livraria", proxima: "c5_5a_desce" } ], proxima: "c5_5a_5" },
    c5_5a_desce: { tipo: "narracao", texto: "E sai da livraria. Desce a escada rolante na direção da praça de alimentação. A SN fica no balcão, sozinha, com a pilha de livros pela metade.", proxima: "c5_30" },
    c5_5a_5: { tipo: "narracao", texto: "E vai para o fundo da loja. Para onde a Mio está. A SN não segue.", proxima: "c5_30" },
    c5_5b_1: { quem: "blake", texto: "Todas.", proxima: "c5_5b_2" },
    c5_5b_2: { quem: "blake", texto: "Ele é o único cara que eu respeito. Ele nunca bateu em ninguém mais fraco. Nem em mim, quando eu era.", proxima: "c5_5b_3" },
    c5_5b_3: { tipo: "narracao", texto: "Ele fala isso olhando para a pilha. É a frase mais longa que ele falou o dia inteiro. Talvez a semana.", proxima: "c5_30" },
    c5_5c_1: { tipo: "narracao", texto: "Ela pega metade dos livros. Começa a separar. Ele olha. Não fala nada. Arruma a outra metade.", proxima: "c5_5c_2" },
    c5_5c_2: { tipo: "narracao", texto: "Dez minutos. Nenhuma palavra. Quando termina, a pilha está perfeita, do vermelho até o roxo.", proxima: "c5_5c_3" },
    c5_5c_3: { quem: "blake", texto: "...Valeu.", proxima: "c5_5c_4" },
    c5_5c_4: { tipo: "narracao", texto: "Só isso. Ele volta para o caixa. Ela não sabe se ele gostou da ajuda ou se só queria que ela fosse embora. Com o Blake, as duas coisas parecem iguais.", proxima: "c5_30" },

    // (todas as opções continuam aqui)
    c5_30: { cenario: "shopping", tipo: "narracao", sprite: null, texto: "Quando as três se encontram de novo no corredor, a Mio está com o rosto vermelho e os olhos um pouco molhados. Mas não é choro triste. Ela não conta nada. Ainda não.", proxima: "c5_cam2" },
    c5_cam2: { caminhos: [
      { flag: "Manda_carta_Blake", proxima: "c5_mio_falou" }
    ], proxima: "c5_31" },
    c5_mio_falou: { tipo: "narracao", sprite: "hana", texto: "A Hana caminha do lado da SN e fala baixinho, sem mexer muito a boca, como uma espiã.", proxima: "c5_mio_falou2" },
    c5_mio_falou2: { quem: "hana", texto: "Ele foi até ela. Ficou na frente dela. Falou umas quatro frases. Eu não ouvi. Mas eu vi ela segurando a manga da camiseta dele no final. E não soltando.", proxima: "c5_mio_falou3" },
    c5_mio_falou3: { quem: "hana", texto: "Eu vou anotar isso. Num caderno separado. Esse é importante demais pro caderno de gatinho.", proxima: "c5_31" },
    c5_31: { tipo: "narracao", sprite: "mio", texto: "A Mio engancha o braço nas duas de novo. Forte. E fala, olhando para frente:", proxima: "c5_32" },
    c5_32: { quem: "mio", texto: "Cabine de foto. Agora. Antes que eu comece a chorar no meio do shopping e estrague o sábado de meninas.", proxima: "c6_01" },

    /* =================== CENA 6 — A CABINE =================== */
    // Cenário: corredor do shopping, cabine de fotos (usa "corredor"). Música: pop animado, depois tenso no fim.
    c6_01: { tipo: "narracao", cenario: "cabine-fotos", transicao: "tempo", legenda: "Cena 6 — A cabine", sprite: null, texto: "A cabine de fotos fica perto da escada rolante. É pequena demais para três pessoas. As três entram mesmo assim. A Hana fica espremida no canto, segurando a pasta do roteiro na frente do peito como um escudo.", proxima: "c6_02" },
    c6_02: { quem: "mio", sprite: "mio", texto: "Quatro fotos! Primeira: normal. Segunda: careta. Terceira: fofa. Quarta: livre!", proxima: "c6_03" },
    c6_03: { tipo: "narracao", texto: "Flash. Normal: a Hana de olho fechado. Flash. Careta: a Mio de língua para fora, a SN de bochecha estufada, a Hana ainda de olho fechado. Flash. Fofa: as três fazendo coração com a mão, a Hana finalmente de olho aberto.", proxima: "c6_04" },
    c6_04: { quem: "mio", texto: "Última! Livre! Faz o que você quiser!", proxima: "c6_esc6" },

    // ▶ ESCOLHA 6 — A quarta foto
    c6_esc6: { escolhas: [
      { texto: "A. Abraçar as duas ao mesmo tempo, apertado.", proxima: "c6_6a_1", pontos: { mio: 2, hana: 2 }, flags: ["Foto_abraco_amigas"] },
      { texto: "B. Rir de verdade. Sem pose. Só rir.", proxima: "c6_6b_1", pontos: { mio: 2, hana: 2 }, flags: ["Foto_riso"] },
      { texto: "C. Colocar a coroa de plástico da loja de brinquedos na cabeça da Hana.", proxima: "c6_6c_1", pontos: { hana: 3 }, flags: ["Foto_coroa_Hana"] }
    ]},
    c6_6a_1: { tipo: "narracao", texto: "Ela abraça as duas. A Mio grita. A Hana fica dura e depois desiste e abraça de volta. Flash. Na foto, as três estão borradas, uma por cima da outra, como uma pessoa só.", proxima: "c6_05" },
    c6_6b_1: { tipo: "narracao", texto: "Ela ri. De verdade. Do Ryuji falando com o coelho, do Kaito assobiando, da Hana verificando o cheiro dela. Flash. Na foto, ela está de olho fechado, de boca aberta, rindo. Nada bonita. A foto mais bonita que já tiraram dela.", proxima: "c6_05" },
    c6_6c_1: { tipo: "narracao", texto: "Ela tira a coroa da sacola e coloca na cabeça da Hana. A Hana arregala os olhos. A Mio se curva, como se fosse uma rainha. Flash. Na foto, a Hana está de coroa, séria, digna, e com o canto da boca escapando num sorriso.", proxima: "c6_6c_2" },
    c6_6c_2: { quem: "hana", sprite: "hana", texto: "Eu vou colar essa no caderno. Na primeira página. Antes da tabela periódica.", proxima: "c6_05" },

    // (todas as opções continuam aqui)
    c6_05: { tipo: "narracao", sprite: null, texto: "As fotos saem pela fenda. Três tiras. Uma para cada. A Mio fica com a dela na mão, olhando, e fala baixinho, do nada:", proxima: "c6_06" },
    c6_06: { quem: "mio", sprite: "mio", texto: "Eu nunca tive um sábado assim também, sabia? Eu sempre ia no shopping com a minha mãe. Ou sozinha. Eu sou barulhenta, mas eu não tinha amiga pra ir.", proxima: "c6_07" },
    c6_07: { tipo: "pensamento", texto: "A Mio. Que fala com todo mundo. Que abraça todo mundo. Também não tinha.", proxima: "c6_08" },
    c6_08: { tipo: "pensamento", texto: "Na outra vida, a gente nunca foi amiga. Ela sentava duas carteiras na minha frente. A gente podia ter feito isso aos dezesseis. As duas sozinhas, a duas carteiras de distância.", proxima: "c6_09" },
    c6_09: { tipo: "narracao", texto: "Ela guarda a tira de fotos no bolso. Junto com a foto da avó do Takeo. Ela vai mesmo precisar de uma caixa maior.", proxima: "c6_10" },

    // Gancho: a Sayuri no shopping. A SN não interfere em público e não conta para ninguém.
    c6_10: { sprite: null, cenario: "shopping", tipo: "narracao", texto: "Na escada rolante, descendo, a SN olha para o andar de baixo. E para de sorrir.", proxima: "c6_11" },
    c6_11: { tipo: "narracao", texto: "Perto da saída, na frente de uma loja de relógios, está a Sayuri. Sem o laço rosa. De roupa escura, arrumada demais para um sábado.", proxima: "c6_12" },
    c6_12: { tipo: "narracao", texto: "Do lado dela, um homem de terno escuro. Alto. Ela só vê as costas dele. Ele está segurando o braço da Sayuri. Não como quem segura a mão de alguém. Como quem segura uma coisa para ela não fugir.", proxima: "c6_13" },
    c6_13: { tipo: "narracao", texto: "Ele fala alguma coisa perto do ouvido dela. A Sayuri faz que sim com a cabeça. Uma vez. Duas. Três. Olhando para o chão.", proxima: "c6_14" },
    c6_14: { tipo: "pensamento", texto: "“Você não sabe o que é ter alguém dizendo o que você tem que fazer, todo dia.”", proxima: "c6_15" },
    c6_15: { tipo: "narracao", texto: "A escada rolante continua descendo. Devagar. A SN segura no corrimão com força. Com força demais. O plástico estala embaixo da mão dela.", proxima: "c6_16" },
    c6_16: { tipo: "narracao", texto: "E então a Sayuri levanta os olhos. Vê a SN na escada. As duas se olham por cima da multidão.", proxima: "c6_17" },
    c6_17: { tipo: "narracao", texto: "A Sayuri balança a cabeça. Bem pequeno. Quase nada. Um “não” silencioso.", proxima: "c6_cam1" },
    c6_cam1: { caminhos: [
      { flag: "Ofereceu_ajuda_Sayuri", proxima: "c6_s_ajuda" }
    ], proxima: "c6_18" },
    c6_s_ajuda: { tipo: "pensamento", texto: "Eu disse que ajudava se um dia ela quisesse dizer não. Ela está dizendo não pra mim. Não agora. Não aqui.", proxima: "c6_18" },
    c6_18: { tipo: "narracao", texto: "O homem de terno puxa o braço dela. Os dois saem pela porta de vidro. Somem no estacionamento.", proxima: "c6_19" },
    c6_19: { quem: "mio", sprite: "mio", texto: "SN? Tudo bem? Você ficou branca.", proxima: "c6_20" },
    c6_20: { quem: "eu", texto: "Tudo bem. Achei que tinha visto alguém. Não era.", proxima: "c6_21" },
    c6_21: { tipo: "pensamento", texto: "Isso é entre mim e ela. Eu não vou estragar o sábado delas com isso.", proxima: "c6_22" },
    c6_22: { tipo: "pensamento", texto: "Mas agora eu sei uma coisa. Quem mandou o balde não estava na escola. Usava terno.", proxima: "fim_01" },

    /* =================== FIM — SÁBADO À NOITE =================== */
    // Cenário: quarto da SN. Música: piano baixo.
    fim_01: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Sábado, 21h30", sprite: null, texto: "No quarto, ela cola a tira de fotos na parede, do lado do espelho. Bem na altura dos olhos. Para ver todo dia antes de sair.", proxima: "fim_02" },
    fim_02: { tipo: "narracao", texto: "O celular vibra. O grupo. Fotos da Hana com a coroa, da Mio de língua para fora. E uma mensagem nova.", proxima: "fim_03" },
    fim_03: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "Próximo sábado de meninas: daqui a duas semanas. Já reservei. Hana faz o roteiro. Eu escolho o sorvete. SN escolhe a cabine.", proxima: "fim_04" },
    fim_04: { quem: "mensagem", rotulo: "Mensagem — Hana", texto: "Roteiro 2.0 em produção. Vou incluir a loja dos coelhos. E a número onze. Pra Mio.", proxima: "fim_05" },
    fim_05: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "HANA.", proxima: "fim_06" },
    fim_06: { tipo: "narracao", texto: "E, logo depois, outra notificação. Uma foto, mandada direto para ela. Uma menina de nove anos, banguela, abraçando dois coelhos de pelúcia ao mesmo tempo. Um rosa, um branco.", proxima: "fim_07" },
    fim_07: { quem: "mensagem", rotulo: "Mensagem — Ryuji", texto: "Ela abriu o presente hoje porque não aguentou esperar amanhã. Ela gritou. Ela disse que eu sou o melhor irmão do universo. Do UNIVERSO. Eu te devo uma.", proxima: "fim_08" },
    fim_08: { tipo: "pensamento", texto: "Hoje eu descobri que o Ryuji faz piada pra não entrar no armário. Que o Blake trabalha aos sábados pra um dia ganhar do Kaito. Que a Mio também não tinha com quem ir no shopping.", proxima: "fim_09" },
    fim_09: { tipo: "pensamento", texto: "Na outra vida eu achava que todo mundo à minha volta era inteiro. Que só eu era quebrada.", proxima: "fim_10" },
    fim_10: { tipo: "pensamento", texto: "Ninguém é inteiro. A gente só está aprendendo a andar junto.", proxima: "fim_11" },
    fim_11: { tipo: "narracao", texto: "Ela apaga a luz. E, antes de dormir, lembra do homem de terno. Da mão no braço da Sayuri. Do “não” silencioso.", proxima: "fim_12" },
    fim_12: { tipo: "pensamento", texto: "Eu vou descobrir quem é. Do meu jeito. Sem colocar ninguém em perigo.", proxima: "ep_fim" },

    // Fim do Capítulo 14 (crie a entrada "capitulo14" em dados/capitulos.js).
    ep_fim: { fim: "capitulo14" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 15 (anotações do roteiro)
 *  • O homem de terno com a Sayuri: é quem mandou o balde? A família dela? (A SN não conta para ninguém.)
 *    Não é o Ren. Fica em aberto.
 *  • Blake e Mio: depende da Escolha 5. Se ele falou com ela, a Mio segurou a manga do avental.
 *  • Blake e Kaito: amigos desde os sete anos. O Blake nunca ganhou uma briga dele.
 *  • O Ryuji confiou a história do armário. Ele "deve uma" para a SN.
 *  • Próximo sábado de meninas: daqui a duas semanas.
 *
 * ESCOLHAS DO CAPÍTULO (6)
 *  1 O que contar para as amigas · 2 No provador · 3 O Ryuji sem piada
 *  4 A loja número onze · 5 No balcão com o Blake · 6 A quarta foto
 *
 * FLAGS NOVAS
 *  Contou_tudo_amigas · Escondeu_amigas · Perguntou_Mio_Blake · Girou_provador · Insegura_provador
 *  Provador_das_tres · Ryuji_sem_piada · Ryuji_armario · Ryuji_dois_coelhos · Levou_Mio_livraria
 *  Mio_decidiu_livraria · Foi_sozinha_livraria · Manda_carta_Blake · Blake_contou_Kaito
 *  Arrumou_livros_Blake · Foto_abraco_amigas · Foto_riso · Foto_coroa_Hana
 */