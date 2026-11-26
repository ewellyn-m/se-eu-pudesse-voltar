/*
 * =====================================================================
 *  CAPÍTULO 29 — Peão de volta
 *  Sexta à noite (continua do fim do Capítulo 28) e sábado.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Um bloco de rota depois do último andar. Ninguém precisa entrar no estacionamento.
 *
 *  O QUE ACONTECE
 *    • O último andar. O Ren fala pouco. Não conta plano. Não ameaça em voz alta.
 *      Ele rasga a dívida do pai da Sayuri na frente das duas. "Acabou." A Sayuri agora
 *      não deve nada ao pai dele. Deve a ele. E as duas sabem disso.
 *    • Ele não quer briga. Ele só queria ver se a SN vinha. Ela veio.
 *    • Uma frase só, no fim, que gela a SN: ele sabe que ela come o bolinho de frango primeiro.
 *      (PISTA. Ele gosta dela desde criança. NÃO é revelado agora.)
 *    • Ele olha para o capacete dela/para a vida dela "com eles". (PISTA: ele quer derrubar a
 *      gangue do Kaito por causa dela. NÃO é dito agora.)
 *    • Depois: o elevador com a Sayuri. Bloco de rota: o menino da rota esperando ou aparecendo.
 *    • Sábado: a SN, a Hana (se sabia) e a Mio. O peão na gaveta agora tem dois.
 *
 *  REGRAS DO REN NESTE CAPÍTULO
 *    • Frases curtas. Ele não explica nada. Ele age.
 *    • Ele não toca na SN. Ele não levanta a voz. Quem tem medo é o de anel, não ela.
 *
 *  PERSONAGENS (nenhum novo com nome)
 *    Ren, Sayuri, Homem de terno (o de anel), Kaito, Takeo, Blake, Ryuji, Victor, Hana, Mio.
 *
 *  CENÁRIOS
 *    Último andar do estacionamento / elevador → "estacionamento-topo" · Saída do shopping → "frente-shopping"
 *    Calçada do shopping à noite → "frente-shopping" · Praça de alimentação → "praca-alimentacao"
 *    Quarto da SN → "quarto-sn-noite" (sábado: "quarto-sn")
 *
 *  FLAGS DE CAPÍTULOS ANTERIORES USADAS (com caminhos)
 *    Rota_*, Ultimo_andar_rota_fora, Contou_rota_quinta, Ultimo_andar_Hana_sabe, Mio_limao,
 *    Mio_sabe_Sayuri, Elastico_Sayuri.
 *
 *  Crie a entrada "capitulo29" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo29", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — ÚLTIMO ANDAR =================== */
    // Cenário: último andar do estacionamento, sexta, 19h. Música: só vento. Depois uma nota grave.
    c1_01: { roupa: "fora", tipo: "narracao", cenario: "estacionamento-topo", transicao: "tempo", legenda: "Sexta, 19h01 — Último andar", sprite: "ren", texto: "O vento passa pelo último andar sem teto. O Ren fica parado. As mãos nos bolsos. O peão preto entre os dedos de uma delas, aparecendo um pouco.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "Ele não fala mais nada depois do “boa noite”. Ele espera. Como no xadrez. Quem fala primeiro, mostra a jogada.", proxima: "c1_03" },
    c1_03: { tipo: "pensamento", texto: "Ele quer que eu fale. Que eu pergunte. Que eu grite. Ele trouxe a gente até aqui pra ver o que eu faço.", proxima: "c1_04" },
    c1_04: { tipo: "pensamento", texto: "Tudo bem. Eu também sei esperar.", proxima: "c1_esc1" },

    // ▶ ESCOLHA 1 — O primeiro movimento
    c1_esc1: { escolhas: [
      { texto: "A. Não falar nada. Ficar parada, olhando pra ele, até ele cansar.", proxima: "c1_1a_1", pontos: { desvio: 1 }, flags: ["Silencio_Ren"] },
      { texto: "B. “Você quer alguma coisa de mim. Fala o que é.”", proxima: "c1_1b_1", flags: ["Direta_Ren"] },
      { texto: "C. Andar até a grade, do lado dele. Olhar a cidade também. Como se ele não estivesse ali.", proxima: "c1_1c_1", pontos: { desvio: 1 }, flags: ["Grade_Ren"] }
    ]},
    c1_1a_1: { tipo: "narracao", texto: "Ela não fala. Ele não fala. A Sayuri, do lado, segura a manga do moletom com tanta força que a costura estala. O vento. Um carro buzinando lá embaixo, muito longe.", proxima: "c1_1a_2" },
    c1_1a_2: { tipo: "narracao", texto: "Um minuto inteiro. Dois. O de anel, encostado no carro, olha o relógio três vezes.", proxima: "c1_1a_3" },
    c1_1a_3: { tipo: "narracao", texto: "E é o Ren quem se mexe primeiro. Só um pouco. O canto da boca. Não é sorriso. É outra coisa. Quase satisfação.", proxima: "c1_05" },
    c1_1b_1: { tipo: "narracao", texto: "Ele inclina a cabeça. Devagar. Como quem ouve uma resposta certa numa prova.", proxima: "c1_1b_2" },
    c1_1b_2: { quem: "ren", sprite: "ren", texto: "Já tenho.", proxima: "c1_05" },
    c1_1c_1: { tipo: "narracao", texto: "Ela anda. Passa do lado dele. Encosta na grade, a um metro e meio. Olha a cidade. As luzes acendendo. O viaduto. Lá longe, a praça do lago.", proxima: "c1_1c_2" },
    c1_1c_2: { tipo: "narracao", texto: "Ele vira a cabeça para olhar para ela. Ela não vira para olhar para ele. Pela primeira vez, é ele quem está olhando e ela quem está ignorando.", proxima: "c1_05" },

    // (todas as opções continuam aqui)
    c1_05: { tipo: "narracao", texto: "Ele tira a mão do bolso. Não a do peão. A outra. Tem uma folha dobrada. Papel timbrado. Com um logotipo pequeno no canto: um rei de xadrez dentro de um quadrado.", proxima: "c1_06" },
    c1_06: { tipo: "narracao", texto: "Ele estende a folha. Não para a SN. Para a Sayuri.", proxima: "c1_07" },
    c1_07: { tipo: "narracao", sprite: "sayuri", texto: "A Sayuri não pega. Fica olhando. Lê o que dá para ler. O nome do pai dela. Um número com muitos zeros. Uma assinatura.", proxima: "c1_08" },
    c1_08: { tipo: "narracao", sprite: "ren", texto: "O Ren segura a folha com as duas mãos. E rasga. No meio. Depois no meio de novo. Devagar. Sem pressa. Depois em oito. Os pedaços vão embora com o vento, pela grade, para a cidade lá embaixo.", proxima: "c1_09" },
    c1_09: { quem: "ren", sprite: "ren", texto: "Acabou.", proxima: "c1_10" },
    c1_10: { tipo: "narracao", texto: "A Sayuri olha para os pedaços voando. Depois para ele. Ela não entende. A SN entende.", proxima: "c1_11" },
    c1_11: { tipo: "pensamento", texto: "Ele não perdoou a dívida. Ele trocou de dono. Até agora a Sayuri devia pro pai dele. A partir de agora ela deve pra ele. E não é dinheiro. É favor.", proxima: "c1_12" },
    c1_12: { tipo: "pensamento", texto: "E eu não posso mais usar a dívida pra ajudar ela. Não tem mais dívida. Ele tirou a minha peça do tabuleiro antes de eu mexer.", proxima: "c1_13" },
    c1_13: { quem: "sayuri", sprite: "sayuri", texto: "...Por quê?", proxima: "c1_14" },
    c1_14: { tipo: "narracao", texto: "O Ren não responde para ela. Ele não olha para ela. Ele olha para a SN.", proxima: "c1_15" },
    c1_15: { tipo: "narracao", texto: "E a Sayuri entende também. Que ela nunca foi a peça importante. Que o balde, a página, as fotos, o celular, a mochila da Hana, nada daquilo era sobre ela.", proxima: "c1_16" },
    c1_16: { tipo: "narracao", texto: "Ela dá um passo para o lado. Para mais perto da SN. Sem perceber. O ombro dela encosta no ombro da SN.", proxima: "c1_cam1" },
    c1_cam1: { caminhos: [
      { flag: "Elastico_Sayuri", proxima: "c1_elastico" }
    ], proxima: "c1_17" },
    c1_elastico: { tipo: "narracao", texto: "O Ren olha para o pulso da Sayuri. Para o elástico preto, por cima da manga. Um segundo. Ele reconhece o elástico. Ele sabe de quem é. Ele não fala nada.", proxima: "c1_17" },
    c1_17: { tipo: "narracao", texto: "O de anel, no carro, abre a porta de trás. O Ren olha para a porta aberta. Depois para as duas.", proxima: "c1_18" },
    c1_18: { quem: "ren", sprite: "ren", texto: "Eu só queria ver se você vinha.", proxima: "c1_19" },
    c1_19: { tipo: "narracao", texto: "Ele fala isso para a SN. Só para ela. Com a voz baixa. Sem sorriso. Do jeito de quem constata uma coisa.", proxima: "c1_20" },
    c1_20: { tipo: "pensamento", texto: "Só isso? A ameaça da Hana, o bilhete, o último andar. Pra ver se eu vinha?", proxima: "c1_21" },
    c1_21: { tipo: "pensamento", texto: "Não. Não é só isso. Nunca é só isso com ele. Mas é isso que ele quer que eu pense.", proxima: "c1_esc2" },

    // ▶ ESCOLHA 2 — Antes dele ir
    c1_esc2: { escolhas: [
      { texto: "A. Segurar a grade de ferro do lado dela. E dobrar. Devagar. Sem tirar os olhos dele.", proxima: "c1_2a_1", pontos: { desvio: 2 }, flags: ["Dobrou_grade_Ren"] },
      { texto: "B. “Se você encostar na Hana, na Sayuri, ou em qualquer pessoa perto de mim, eu venho de novo. E aí eu não venho pra ver.”", proxima: "c1_2b_1", pontos: { desvio: 1 }, flags: ["Ameacou_Ren"] },
      { texto: "C. Estender a mão aberta. “Me dá o peão.”", proxima: "c1_2c_1", pontos: { desvio: 1 }, flags: ["Pediu_peao_Ren"] }
    ]},
    c1_2a_1: { tipo: "narracao", efeito: "tremor", texto: "Ela segura a grade. O ferro range. Entorta. Um gomo inteiro da grade dobra para fora, na direção da cidade, devagar, como papel molhado. O de anel, no carro, dá um passo para dentro do carro.", proxima: "c1_2a_2" },
    c1_2a_2: { tipo: "narracao", texto: "O Ren olha para a grade dobrada. Olha para a mão dela. Não recua. Não pisca.", proxima: "c1_2a_3" },
    c1_2a_3: { quem: "ren", sprite: "ren", texto: "Eu sei.", proxima: "c1_22" },
    c1_2b_1: { tipo: "narracao", texto: "Ele escuta. Inteiro. Sem interromper. Quando ela termina, ele fica olhando para ela mais um segundo.", proxima: "c1_2b_2" },
    c1_2b_2: { quem: "ren", sprite: "ren", texto: "Então vem.", proxima: "c1_2b_3" },
    c1_2b_3: { tipo: "pensamento", texto: "Ele não disse “não vou encostar”. Ele disse “então vem”. Como quem quer que eu venha.", proxima: "c1_22" },
    c1_2c_1: { tipo: "narracao", texto: "Ele olha para a mão dela. Aberta. Estendida. Pela primeira vez, a expressão dele muda. Só um pouco. Como se ela tivesse feito uma jogada que ele não esperava.", proxima: "c1_2c_2" },
    c1_2c_2: { tipo: "narracao", texto: "Ele tira o peão do bolso. E coloca na mão dela. Os dedos não encostam. Ele tem cuidado para os dedos não encostarem.", proxima: "c1_2c_3" },
    c1_2c_3: { tipo: "pensamento", texto: "Ele deu. Sem discutir. Isso é pior do que se ele tivesse recusado.", proxima: "c1_22" },

    // (todas as opções continuam aqui)
    c1_22: { tipo: "narracao", texto: "Ele anda até o carro. Passa do lado dela. A um metro. Para.", proxima: "c1_23" },
    c1_23: { tipo: "narracao", texto: "Ele olha para o capacete vermelho-escuro embaixo do braço dela. Ou para a mochila. Ou para o celular no bolso, com as mensagens que ela não abriu. Ela não sabe para o quê. Mas ele olha muito tempo. E a boca dele fica reta. Fina.", proxima: "c1_24" },
    c1_24: { quem: "ren", sprite: "ren", texto: "Você anda com gente que fica de costas.", proxima: "c1_25" },
    c1_25: { tipo: "narracao", texto: "Ela não responde. Ele não espera resposta.", proxima: "c1_26" },
    c1_26: { tipo: "narracao", texto: "E, antes de entrar no carro, com a mão na porta, ele fala mais uma coisa. Bem baixo. Sem virar.", proxima: "c1_27" },
    c1_27: { quem: "ren", sprite: "ren", efeito: "eco", texto: "Você ainda come o de frango primeiro?", proxima: "c1_28" },
    c1_28: { tipo: "narracao", sprite: null, texto: "Ele entra. A porta fecha. O carro sai devagar, desce a rampa, e o barulho do motor vai sumindo, andar por andar, até não ter mais nada.", proxima: "c1_29" },
    c1_29: { tipo: "narracao", texto: "Ela fica parada no meio do último andar. O vento. A grade. A Sayuri do lado.", proxima: "c1_30" },
    c1_30: { tipo: "pensamento", texto: "O de frango primeiro. Quando tem três bolinhos, eu como o de frango primeiro. Desde criança. Só a avó do Takeo sabe disso. E o Takeo.", proxima: "c1_31" },
    c1_31: { tipo: "pensamento", texto: "E ele.", proxima: "c1_32" },
    c1_32: { tipo: "pensamento", texto: "Como ele sabe?", proxima: "c2_01" },

    /* =================== CENA 2 — O ELEVADOR =================== */
    // Cenário: elevador e saída do shopping. Música: piano baixo.
    c2_01: { tipo: "narracao", cenario: "estacionamento-topo", transicao: "tempo", legenda: "Cena 2 — O elevador", sprite: "sayuri", texto: "No elevador, a Sayuri encosta na parede de metal e escorrega até sentar no chão. Não chora. Só senta. Com as mãos no rosto.", proxima: "c2_02" },
    c2_02: { quem: "sayuri", sprite: "sayuri", texto: "Ele senta na carteira perto da porta. Ele me emprestou caneta uma vez. No começo do ano. Ele me deu “bom dia” todo dia. Todo dia.", proxima: "c2_03" },
    c2_03: { quem: "sayuri", sprite: "sayuri", texto: "E todo esse tempo era ele. O balde. O meu pai chorando na cozinha. O meu irmão perguntando por que eu não durmo.", proxima: "c2_04" },
    c2_04: { tipo: "narracao", texto: "A SN senta no chão do elevador do lado dela. O elevador desce. Sete. Seis. Cinco.", proxima: "c2_05" },
    c2_05: { quem: "sayuri", sprite: "sayuri", texto: "E acabou. A dívida. Ele rasgou. Eu devia estar feliz. Por que eu não estou feliz?", proxima: "c2_06" },
    c2_06: { quem: "eu", texto: "Porque não acabou. Você sabe.", proxima: "c2_07" },
    c2_07: { tipo: "narracao", texto: "A Sayuri tira as mãos do rosto. Olha para ela.", proxima: "c2_08" },
    c2_08: { quem: "sayuri", sprite: "sayuri", texto: "...Eu sei.", proxima: "c2_esc3" },

    // ▶ ESCOLHA 3 — No chão do elevador
    c2_esc3: { escolhas: [
      { texto: "A. “Se ele pedir qualquer coisa, você me conta antes de fazer. Qualquer coisa.”", proxima: "c2_3a_1", flags: ["Sayuri_conta_antes"] },
      { texto: "B. “Agora são duas contra ele. Ele errou uma coisa hoje: ele juntou a gente.”", proxima: "c2_3b_1", pontos: { desvio: 1 }, flags: ["Duas_contra_Ren"] },
      { texto: "C. Não falar nada. Ficar sentada do lado dela até o elevador chegar.", proxima: "c2_3c_1", flags: ["Silencio_elevador"] }
    ]},
    c2_3a_1: { quem: "sayuri", sprite: "sayuri", texto: "Antes. Tá. Eu nunca contei nada antes pra ninguém. Vai ser estranho.", proxima: "c2_3a_2" },
    c2_3a_2: { quem: "eu", texto: "Você se acostuma.", proxima: "c2_09" },
    c2_3b_1: { tipo: "narracao", texto: "A Sayuri olha para ela. Depois ri. Um riso curto, molhado, que ela não esperava dar.", proxima: "c2_3b_2" },
    c2_3b_2: { quem: "sayuri", sprite: "sayuri", texto: "Duas. Eu e você. A menina do balde e a menina que levou o balde. Que dupla horrível.", proxima: "c2_3b_3" },
    c2_3b_3: { quem: "eu", texto: "A pior.", proxima: "c2_09" },
    c2_3c_1: { tipo: "narracao", texto: "Ela fica. A Sayuri não fala também. O elevador desce. Quatro. Três. No dois, a Sayuri encosta a cabeça no ombro dela. Só até o térreo.", proxima: "c2_09" },

    // (todas as opções continuam aqui)
    c2_09: { tipo: "narracao", cenario: "frente-shopping", transicao: "tempo", texto: "Térreo. A porta abre. A Sayuri levanta primeiro. Arruma o cabelo. Endireita as costas. E sai sem olhar para trás. Na porta do shopping, ela para. Vira.", proxima: "c2_10" },
    c2_10: { quem: "sayuri", sprite: "sayuri", texto: "Obrigada por ter vindo. Ninguém nunca foi comigo a lugar nenhum.", proxima: "c2_11" },
    c2_11: { tipo: "narracao", sprite: null, texto: "E vai embora. Pela calçada. Com o elástico preto no pulso.", proxima: "c2_cam1" },
    c2_cam1: { caminhos: [
      { flag: "Ultimo_andar_Hana_sabe", proxima: "c2_hana" }
    ], proxima: "r_cam" },
    c2_hana: { tipo: "narracao", texto: "O celular vibra. Ela olha. Dezenove e vinte e um. A Hana.", proxima: "c2_hana2" },
    c2_hana2: { quem: "mensagem", rotulo: "Mensagem — Hana", texto: "Faltam nove minutos. Você está bem? Responde com um número de um a dez.", proxima: "c2_hana3" },
    c2_hana3: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "8.", proxima: "c2_hana4" },
    c2_hana4: { quem: "mensagem", rotulo: "Mensagem — Hana", texto: "8 é aceitável. Cronômetro desligado. Lista de emergência guardada. Mas não jogada fora.", proxima: "r_cam" },

    /* =================== ROTA — DEPOIS DO ÚLTIMO ANDAR =================== */
    r_cam: { roupa: "fora", caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_cam" },
      { flag: "Rota_Takeo", proxima: "rt_cam" },
      { flag: "Rota_Blake", proxima: "rb_cam" },
      { flag: "Rota_Ryuji", proxima: "rr_cam" },
      { flag: "Rota_Victor", proxima: "rv_cam" }
    ], proxima: "rk_cam" },

    // ---------- Rota Kaito ----------
    rk_cam: { caminhos: [
      { flag: "Ultimo_andar_rota_fora", proxima: "rk_esperando" },
      { flag: "Contou_rota_quinta", proxima: "rk_esperando" }
    ], proxima: "rk_chegou" },
    rk_esperando: { roupa: "fora", tipo: "narracao", cenario: "frente-shopping", sprite: "kaito", texto: "Na calçada, do lado da saída da rampa, a moto preta. O Kaito sentado nela, de capacete na mão. Quando ela aparece, ele olha o relógio. Onze minutos e quarenta segundos. Ele não entrou.", proxima: "rk_esperando2" },
    rk_esperando2: { quem: "kaito", sprite: "kaito", texto: "Vinte segundos. Faltavam vinte segundos. Eu já estava com o pé no chão.", proxima: "rk_01" },
    rk_chegou: { roupa: "fora", tipo: "narracao", cenario: "frente-shopping", sprite: "kaito", texto: "Na esquina do shopping, o ronco grave. A moto preta encosta na calçada. O Kaito. Ele não sabia de nada. Ele olha para ela, para o shopping, para ela.", proxima: "rk_chegou2" },
    rk_chegou2: { quem: "kaito", sprite: "kaito", texto: "A Mio disse que você tinha um compromisso às sete. Com a Sayuri. Eu passei. Por acaso. É caminho.", proxima: "rk_01" },
    rk_01: { tipo: "narracao", texto: "Ele vê o rosto dela. Para de falar. Desce da moto.", proxima: "rk_02" },
    rk_02: { quem: "kaito", sprite: "kaito", texto: "Ele estava lá.", proxima: "rk_03" },
    rk_03: { tipo: "narracao", texto: "Não é pergunta. Ela concorda com a cabeça. Ele fecha a mão. Abre. Respira. Ele não pergunta o que o Ren disse. Ele pergunta outra coisa.", proxima: "rk_04" },
    rk_04: { quem: "kaito", sprite: "kaito", texto: "Ele encostou em você?", proxima: "rk_05" },
    rk_05: { quem: "eu", texto: "Não. Ele nem chegou perto. Ele teve cuidado pra não chegar perto.", proxima: "rk_06" },
    rk_06: { tipo: "narracao", texto: "O Kaito não entende essa parte. Ela também não. Ele estende o capacete vermelho-escuro, mesmo ela já estando com ele embaixo do braço. Ela entrega o dela. Ele coloca o outro. É o mesmo capacete. Ele só queria fazer alguma coisa com as mãos.", proxima: "rk_07" },
    rk_07: { quem: "eu", texto: "Ele disse que eu ando com gente que fica de costas.", proxima: "rk_08" },
    rk_08: { tipo: "narracao", texto: "O Kaito fica muito quieto. O maxilar trava. Ele entendeu. É sobre ele. Sobre a fábrica.", proxima: "rk_esc" },

    // ▶ ESCOLHA — Rota Kaito
    rk_esc: { escolhas: [
      { texto: "A. “Eu ando com gente que fica de costas pra proteger os outros. Eu gosto dessa gente.”", proxima: "rk_a1", pontos: { kaito: 3 }, flags: ["Gosto_dessa_gente"] },
      { texto: "B. “Leva eu pra lojinha. Eu quero um lámen. Com dois ovos.”", proxima: "rk_b1", pontos: { kaito: 2 }, flags: ["Lamen_depois_Ren"] },
      { texto: "C. Encostar a testa no peito dele. Só um segundo.", proxima: "rk_c1", pontos: { kaito: 3 }, flags: ["Testa_peito_Kaito"] }
    ]},
    rk_a1: { tipo: "narracao", texto: "O Kaito olha para ela. Muito tempo. Na calçada, com as pessoas passando, com o shopping atrás.", proxima: "rk_a2" },
    rk_a2: { quem: "kaito", sprite: "kaito", texto: "...Da próxima vez eu não fico de costas. Nem pra proteger ninguém. Eu fico de frente. Do seu lado.", proxima: "r_fim" },
    rk_b1: { quem: "kaito", sprite: "kaito", texto: "Dois ovos. E caldo extra. E o tio vai perguntar por que você está com essa cara, e você vai mentir, e ele vai fingir que acredita.", proxima: "rk_b2" },
    rk_b2: { quem: "eu", texto: "Perfeito.", proxima: "r_fim" },
    rk_c1: { tipo: "narracao", texto: "Ela encosta a testa no peito dele. Na jaqueta. Que cheira a cebolinha e a vento. Ele fica completamente parado. As mãos no ar, sem saber onde colocar.", proxima: "rk_c2" },
    rk_c2: { tipo: "narracao", texto: "Depois, devagar, uma das mãos encosta nas costas dela. Leve. Ele não abraça. Ele só deixa a mão ali. Um segundo. Dois. Ela levanta a cabeça. Ele tira a mão. Nenhum dos dois fala nada.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_cam: { caminhos: [
      { flag: "Ultimo_andar_rota_fora", proxima: "rt_esperando" },
      { flag: "Contou_rota_quinta", proxima: "rt_esperando" }
    ], proxima: "rt_chegou" },
    rt_esperando: { roupa: "fora", tipo: "narracao", cenario: "praca-alimentacao", sprite: "takeo", texto: "Na praça de alimentação, perto da saída, o Takeo. Sentado numa mesa, com o celular na mão esquerda e a lixa na direita. O pedaço de madeira na frente dele está liso. Muito liso. Ele lixou demais.", proxima: "rt_esperando2" },
    rt_esperando2: { quem: "takeo", sprite: "takeo", texto: "Eu lixei tanto que agora é um espelho. Eu não liguei pra ninguém. Eu quase liguei. Três vezes.", proxima: "rt_01" },
    rt_chegou: { roupa: "fora", tipo: "narracao", cenario: "frente-shopping", sprite: "takeo", texto: "Na porta do shopping, o Takeo. Sem fôlego. Com a mochila nas costas e um pote de bolinho na mão. Ele não sabia de nada. Ele veio porque a Mio mandou mensagem: “Ela está com a Sayuri no shopping. Eu estou preocupada.”", proxima: "rt_01" },
    rt_01: { tipo: "narracao", texto: "Ele vê o rosto dela. Para. Não pergunta nada. Abre o pote. Três bolinhos. Ele estende.", proxima: "rt_02" },
    rt_02: { tipo: "narracao", texto: "Ela olha para os três bolinhos. E não pega o de frango primeiro. Ela fica parada, olhando.", proxima: "rt_03" },
    rt_03: { quem: "takeo", sprite: "takeo", texto: "...Você não pegou o de frango. Você sempre pega o de frango primeiro. Desde os seis anos.", proxima: "rt_04" },
    rt_04: { quem: "eu", texto: "Takeo. Quem mais sabe disso?", proxima: "rt_05" },
    rt_05: { quem: "takeo", sprite: "takeo", texto: "Eu. A vó. Sei lá. Quem brincava com a gente na praça, eu acho. Por quê?", proxima: "rt_06" },
    rt_06: { tipo: "pensamento", texto: "Quem brincava com a gente na praça.", proxima: "rt_esc" },

    // ▶ ESCOLHA — Rota Takeo
    rt_esc: { escolhas: [
      { texto: "A. Pegar o de frango. E dividir no meio com ele.", proxima: "rt_a1", pontos: { takeo: 3 }, flags: ["Frango_meio_Takeo"] },
      { texto: "B. “Quem brincava com a gente na praça? Você lembra de alguém?”", proxima: "rt_b1", pontos: { takeo: 2 }, flags: ["Praca_lembra_Takeo"] },
      { texto: "C. Abraçar ele. Com o pote no meio.", proxima: "rt_c1", pontos: { takeo: 3 }, flags: ["Abraco_pote_Takeo"] }
    ]},
    rt_a1: { tipo: "narracao", texto: "Ela pega o de frango. Parte no meio. Dá a metade maior para ele. Ele olha para a metade maior. Para ela.", proxima: "rt_a2" },
    rt_a2: { quem: "takeo", sprite: "takeo", texto: "Você me deu a metade maior. Você nunca me deu a metade maior. Alguma coisa muito séria aconteceu.", proxima: "rt_a3" },
    rt_a3: { quem: "eu", texto: "Come.", proxima: "r_fim" },
    rt_b1: { tipo: "narracao", texto: "O Takeo pensa. Com a testa enrugada.", proxima: "rt_b2" },
    rt_b2: { quem: "takeo", sprite: "takeo", texto: "Tinha um monte de criança. Mas a gente era meio sozinho, né? Eu e você. Às vezes tinha um menino que ficava no banco olhando. Sempre arrumado. Ele nunca brincava. Eu nem lembro da cara dele.", proxima: "rt_b3" },
    rt_b3: { tipo: "pensamento", texto: "Sempre arrumado. No banco. Olhando.", proxima: "r_fim" },
    rt_c1: { tipo: "narracao", texto: "Ela abraça. O pote de bolinho fica no meio, apertado. Ele ri, sem graça, no ombro dela. Depois abraça de volta. Com força. Mais força do que o Takeo costuma ter.", proxima: "rt_c2" },
    rt_c2: { quem: "takeo", sprite: "takeo", texto: "Tudo bem. Seja o que for, tudo bem. Você voltou. É isso que importa. Você sempre volta.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_cam: { caminhos: [
      { flag: "Ultimo_andar_rota_fora", proxima: "rb_esperando" },
      { flag: "Contou_rota_quinta", proxima: "rb_esperando" }
    ], proxima: "rb_chegou" },
    rb_esperando: { roupa: "fora", tipo: "narracao", cenario: "frente-shopping", sprite: "blake", texto: "Na porta da escada de incêndio do térreo, encostado na parede, o Blake. Com o celular na mão e o pé apoiado no primeiro degrau. Setenta e dois degraus. Ele não subiu nenhum.", proxima: "rb_esperando2" },
    rb_esperando2: { quem: "blake", sprite: "blake", texto: "Eu ouvi o carro descer a rampa. Eu contei os andares pelo barulho. Ele não parou no meio.", proxima: "rb_01" },
    rb_chegou: { roupa: "fora", tipo: "narracao", cenario: "frente-shopping", sprite: "blake", texto: "Na calçada, a moto preta fosca. O Blake, sentado nela, de braços cruzados. Ele não sabia de nada. Mas a Mio mandou mensagem no grupo: “Alguém sabe onde a SN está?” E ele veio. Sem falar com ninguém.", proxima: "rb_01" },
    rb_01: { tipo: "narracao", texto: "Ele vê ela sair. Olha para o rosto dela. Não pergunta nada. Ele só tira o casaco e coloca nos ombros dela. Ela não está com frio. Ele coloca mesmo assim.", proxima: "rb_02" },
    rb_02: { quem: "blake", sprite: "blake", texto: "Quem?", proxima: "rb_03" },
    rb_03: { quem: "eu", texto: "O Ren.", proxima: "rb_04" },
    rb_04: { tipo: "narracao", texto: "O Blake não se mexe. Mas ela vê a mão dele fechar dentro do bolso.", proxima: "rb_05" },
    rb_05: { quem: "eu", texto: "Ele disse que eu ando com gente que fica de costas.", proxima: "rb_06" },
    rb_06: { quem: "blake", sprite: "blake", texto: "...O Kaito ficou de costas pra proteger o Takeo. Eu fiquei a dez metros. Se alguém fica de costas, sou eu.", proxima: "rb_esc" },

    // ▶ ESCOLHA — Rota Blake
    rb_esc: { escolhas: [
      { texto: "A. “Você não fica de costas, Blake. Você fica atrás. É diferente. É onde ninguém olha e todo mundo precisa.”", proxima: "rb_a1", pontos: { blake: 3 }, flags: ["Blake_atras_nao_costas"] },
      { texto: "B. Segurar a manga dele. E não soltar.", proxima: "rb_b1", pontos: { blake: 3 }, flags: ["Manga_Blake"] },
      { texto: "C. “Me leva pra ver os gêmeos. Agora. Eu preciso de um dinossauro.”", proxima: "rb_c1", pontos: { blake: 2 }, flags: ["Ver_gemeos_agora"] }
    ]},
    rb_a1: { tipo: "narracao", texto: "Ele fica olhando para ela. Repete baixinho, quase sem som: “Atrás.” Como quem experimenta uma palavra nova.", proxima: "rb_a2" },
    rb_a2: { quem: "blake", sprite: "blake", texto: "Ninguém nunca falou desse jeito.", proxima: "r_fim" },
    rb_b1: { tipo: "narracao", texto: "Ela segura a manga dele. Igual a Mio segurou no corredor dos gatos, um dia. Ela sabe disso. Ele também sabe. Ele não fala nada. Ele não puxa o braço.", proxima: "rb_b2" },
    rb_b2: { tipo: "narracao", texto: "Eles ficam assim na calçada. Ela segurando a manga. Ele olhando a rua. Até ela soltar. Ele espera ela soltar. Ele não solta primeiro.", proxima: "r_fim" },
    rb_c1: { quem: "blake", sprite: "blake", texto: "São oito da noite. Eles estão de pijama.", proxima: "rb_c2" },
    rb_c2: { quem: "eu", texto: "Melhor ainda.", proxima: "rb_c3" },
    rb_c3: { tipo: "narracao", cenario: "casa-blake-noite", transicao: "tempo", texto: "Vinte minutos depois, ela está na sala do Blake, de casaco emprestado, com dois meninos de pijama de dinossauro pendurados nela. O Blake faz a voz de dinossauro. Ela ri. Ela esquece do último andar por meia hora.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_cam: { caminhos: [
      { flag: "Ultimo_andar_rota_fora", proxima: "rr_esperando" },
      { flag: "Contou_rota_quinta", proxima: "rr_esperando" }
    ], proxima: "rr_chegou" },
    rr_esperando: { roupa: "fora", tipo: "narracao", cenario: "frente-shopping", sprite: "ryuji", texto: "Na saída da rampa, a moto amarela, estacionada torta. O Ryuji em cima dela, com o walkie-talkie de porquinho colado na orelha. Quando ela aparece, ele fala no walkie-talkie, mesmo ela estando a cinco metros.", proxima: "rr_esperando2" },
    rr_esperando2: { quem: "ryuji", sprite: "ryuji", texto: "Câmbio. Ela saiu. Está inteira. Câmbio. Repito. Inteira. Ninguém precisa da minha mãe hoje. Câmbio.", proxima: "rr_01" },
    rr_chegou: { roupa: "fora", tipo: "narracao", cenario: "frente-shopping", sprite: "ryuji", texto: "Na porta do shopping, a moto amarela freia tão rápido que derrapa. O Ryuji pula. Ele não sabia de nada. Mas o jornal ouviu da Mio, que ouviu da Hana, que não falou nada mas fez uma cara.", proxima: "rr_01" },
    rr_01: { tipo: "narracao", texto: "Ele vê o rosto dela. A piada que ele ia fazer morre na boca. Ele fica parado na frente dela, com o walkie-talkie na mão.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", sprite: "ryuji", texto: "Fala uma coisa. Qualquer coisa. Pra eu saber que você está aqui.", proxima: "rr_03" },
    rr_03: { quem: "eu", texto: "Relâmpago.", proxima: "rr_04" },
    rr_04: { tipo: "narracao", texto: "Ele solta o ar de uma vez. Como quem estava segurando desde as sete. E ri. Um riso fraco, de alívio.", proxima: "rr_05" },
    rr_05: { quem: "ryuji", sprite: "ryuji", texto: "Isso não é engraçado. Essa palavra é pra emergência.", proxima: "rr_06" },
    rr_06: { quem: "eu", texto: "Foi uma emergência. Pequena.", proxima: "rr_esc" },

    // ▶ ESCOLHA — Rota Ryuji
    rr_esc: { escolhas: [
      { texto: "A. “Me faz rir. Agora. Por favor.”", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Rir_Ryuji"] },
      { texto: "B. “Não faz piada. Só fica aqui.”", proxima: "rr_b1", pontos: { ryuji: 3 }, flags: ["Sem_piada_Ryuji"] },
      { texto: "C. Subir na garupa da Relâmpago. “Me leva pra qualquer lugar que tenha sorvete.”", proxima: "rr_c1", pontos: { ryuji: 2 }, flags: ["Sorvete_Ryuji"] }
    ]},
    rr_a1: { tipo: "narracao", texto: "Ele pensa. Depois faz a pior imitação do mundo do Kaito, de braços cruzados, com a voz grave: “Caí. Da moto. Da bicicleta. Do saco de cimento.” Ela ri. Ele continua. Imita o Blake comendo batata frita em silêncio. Ela ri mais.", proxima: "rr_a2" },
    rr_a2: { quem: "ryuji", sprite: "ryuji", texto: "Viu? Piada com função. Funciona em situação de último andar.", proxima: "r_fim" },
    rr_b1: { tipo: "narracao", texto: "O Ryuji fecha a boca. Senta no meio-fio. Ela senta do lado. Ele não fala nada. O Ryuji. Calado. Por dez minutos inteiros. Com o ombro encostado no dela.", proxima: "rr_b2" },
    rr_b2: { tipo: "narracao", texto: "É a coisa mais difícil que ele já fez. Ela sabe. Ela vê ele mordendo a língua umas três vezes. Ele não fala. Ele fica.", proxima: "r_fim" },
    rr_c1: { quem: "ryuji", sprite: "ryuji", texto: "Qualquer lugar? Eu sei de um lugar que tem sorvete de chiclete com milho. O Victor jura que é bom. É horrível.", proxima: "rr_c2" },
    rr_c2: { tipo: "narracao", texto: "Ela segura na cintura dele. A Relâmpago sai fazendo um barulho amarelo pela rua. Ele canta no caminho. Ela não desce.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_cam: { caminhos: [
      { flag: "Ultimo_andar_rota_fora", proxima: "rv_esperando" },
      { flag: "Contou_rota_quinta", proxima: "rv_esperando" }
    ], proxima: "rv_chegou" },
    rv_esperando: { roupa: "fora", tipo: "narracao", cenario: "frente-shopping", sprite: "victor", texto: "Na saída da rampa, a moto cheia de adesivo. Ligada. Soltando estalo. Pá. O Victor em cima dela, sem pirulito. Ele mastigou o palito inteiro de nervoso.", proxima: "rv_esperando2" },
    rv_esperando2: { quem: "victor", sprite: "victor", texto: "O carro preto desceu. O de anel me viu. Ele fez o sinal da cruz. Juro. Ele fez o sinal da cruz.", proxima: "rv_01" },
    rv_chegou: { roupa: "fora", tipo: "narracao", cenario: "frente-shopping", sprite: "victor", texto: "Na esquina do shopping, um estalo. Pá. A moto cheia de adesivo. O Victor não sabia de nada. Mas estava descarregando batata quando viu o carro preto passar na avenida do shopping, e largou o caminhão no meio da doca.", proxima: "rv_01" },
    rv_01: { tipo: "narracao", texto: "Ele desce da moto. Anda até ela. Olha ela de cima a baixo. Procurando machucado. Não acha nenhum.", proxima: "rv_02" },
    rv_02: { quem: "victor", sprite: "victor", texto: "Fala que você bateu nele. Pelo menos um pouco. Fala que você dobrou alguma coisa.", proxima: "rv_cam2" },
    rv_cam2: { caminhos: [
      { flag: "Dobrou_grade_Ren", proxima: "rv_grade" }
    ], proxima: "rv_nada" },
    rv_grade: { quem: "eu", texto: "Eu dobrei a grade do último andar.", proxima: "rv_grade2" },
    rv_grade2: { quem: "victor", sprite: "victor", texto: "A GRADE? A grade do estacionamento? Isso é ferro de construção! Gatinha... digo, SN... Você é a coisa mais assustadora que eu já conheci. E eu conheço a minha mãe.", proxima: "rv_esc" },
    rv_nada: { quem: "eu", texto: "Eu não bati. Eu não dobrei nada. Ele não deixou nada pra dobrar.", proxima: "rv_nada2" },
    rv_nada2: { tipo: "narracao", texto: "O Victor fica quieto. Isso é pior, ele entende. Quando ela não dobra nada, é porque o Ren jogou melhor.", proxima: "rv_esc" },

    // ▶ ESCOLHA — Rota Victor
    rv_esc: { escolhas: [
      { texto: "A. “Me leva pra comer a feijoada. Com a sua mãe. Agora.”", proxima: "rv_a1", pontos: { victor: 3 }, flags: ["Feijoada_noite"] },
      { texto: "B. Levantar o mindinho. “Voltei. Inteira. Regra cumprida.”", proxima: "rv_b1", pontos: { victor: 3 }, flags: ["Mindinho_voltei"] },
      { texto: "C. “Victor. Você largou o caminhão no meio da doca? Volta lá. Eu vou junto. Eu carrego.”", proxima: "rv_c1", pontos: { victor: 2 }, flags: ["Caminhao_noite"] }
    ]},
    rv_a1: { tipo: "narracao", cenario: "quintal-victor-noite", transicao: "tempo", texto: "Quarenta minutos depois, ela está na mesa de plástico do quintal, com um prato de feijoada do tamanho de uma calota. A mãe do Victor do lado. Não perguntando nada. Só colocando mais farofa toda vez que o prato esvazia.", proxima: "rv_a2" },
    rv_a2: { quem: "desconhecido", rotulo: "Mãe do Victor", texto: "Come. Quem enfrenta gente ruim volta com fome. Eu sei. Eu já enfrentei muita gente ruim.", proxima: "r_fim" },
    rv_b1: { tipo: "narracao", texto: "Ele olha para o mindinho dela. Engata o dele. Aperta. Forte demais. Ela deixa.", proxima: "rv_b2" },
    rv_b2: { quem: "victor", sprite: "victor", texto: "Regra cumprida. Agora você tem direito a um pirulito. De morango. Eu comprei outro. Juros.", proxima: "r_fim" },
    rv_c1: { quem: "victor", sprite: "victor", texto: "Você quer carregar batata? Depois disso?", proxima: "rv_c2" },
    rv_c2: { quem: "eu", texto: "Eu quero carregar alguma coisa pesada. É bom.", proxima: "rv_c3" },
    rv_c3: { tipo: "narracao", cenario: "doca-mercado", transicao: "tempo", texto: "Às dez da noite, ela está na doca do mercado, carregando dois caixotes de batata de uma vez. O Victor carregando um, olhando para ela. O encarregado olhando para os dois, de boca aberta, sem coragem de falar nada.", proxima: "r_fim" },

    // (todas as rotas continuam aqui)
    r_fim: { tipo: "narracao", cenario: "frente-casa-sn-noite", transicao: "tempo", sprite: null, texto: "Mais tarde, ela chega em casa. A mãe está de plantão. A casa está quieta.", proxima: "c3_01" },

    /* =================== CENA 3 — DOIS PEÕES =================== */
    // Cenário: quarto da SN, sexta à noite e sábado de manhã. Música: piano baixo.
    c3_01: { tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Sexta, 23h40 — Cena 3", texto: "No quarto, ela abre a gaveta da escrivaninha. O peão da fábrica está lá. Com a lasca na base.", proxima: "c3_cam1" },
    c3_cam1: { caminhos: [
      { flag: "Pediu_peao_Ren", proxima: "c3_dois" }
    ], proxima: "c3_um" },
    c3_dois: { tipo: "narracao", texto: "Ela tira do bolso o segundo. O que ele colocou na mão dela, sem encostar os dedos. Coloca do lado do primeiro. Os dois iguais. Mas o segundo não tem lasca. É novo.", proxima: "c3_02" },
    c3_um: { tipo: "narracao", texto: "Ela fica olhando para ele. Um só. O outro ficou com o Ren, no bolso, entre os dedos, a noite inteira.", proxima: "c3_02" },
    c3_02: { tipo: "pensamento", texto: "“Eu só queria ver se você vinha.” Ele não queria a Hana. Nem a Sayuri. Nem o celular. Ele queria eu ir até ele. Por vontade minha.", proxima: "c3_03" },
    c3_03: { tipo: "pensamento", texto: "“Você anda com gente que fica de costas.” Ele não estava falando da fábrica. Ele estava falando do Kaito. Dos meninos. Ele odeia eles. Mas não do jeito que eu achava.", proxima: "c3_04" },
    c3_04: { tipo: "pensamento", texto: "E o de frango. Ninguém sabe disso. Só quem estava na praça do balanço quando eu tinha seis anos.", proxima: "c3_05" },
    c3_05: { tipo: "narracao", texto: "Ela fecha a gaveta. Não com força. Devagar.", proxima: "c3_06" },
    c3_06: { tipo: "pensamento", texto: "Eu não lembro. Eu não lembro de nenhum menino além do Takeo naquela praça. Mas ele lembra de mim. Muito.", proxima: "c3_07" },
    c3_07: { tipo: "pensamento", texto: "Isso devia me dar medo. Dá raiva. É melhor. Raiva eu sei usar.", proxima: "c3_08" },
    c3_08: { tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Sábado, 11h", texto: "Sábado de manhã, o celular acorda ela. O grupo das meninas. A Mio.", proxima: "c3_cam2" },
    c3_cam2: { caminhos: [
      { flag: "Mio_limao", proxima: "c3_limao" },
      { flag: "Mio_sabe_Sayuri", proxima: "c3_sayuri" }
    ], proxima: "c3_normal" },
    c3_limao: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "VOLTOU INTEIRA? Responde com foto. Eu preciso conferir. Eu dei o sorvete de limão. Eu tenho direito.", proxima: "c3_09" },
    c3_sayuri: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "E AÍ? A SAYURI FEZ ALGUMA COISA? Eu ainda tenho o sorvete derretido no congelador. Pronto pra usar.", proxima: "c3_09" },
    c3_normal: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "Bom dia. Como foi o compromisso misterioso? Segunda eu cobro. Com gestos.", proxima: "c3_09" },
    c3_09: { tipo: "narracao", texto: "Ela tira uma foto. De pijama, de cabelo bagunçado, fazendo um sinal de positivo. Manda.", proxima: "c3_10" },
    c3_10: { quem: "mensagem", rotulo: "Mensagem — Mio", texto: "Inteira. Aprovada. Cabelo horrível. Te amo. Segunda tem relatório.", proxima: "c3_11" },
    c3_11: { quem: "mensagem", rotulo: "Mensagem — Hana", texto: "Eu fiz uma tabela de “coisas que a gente sabe”. Tem três linhas. Segunda eu mostro. Vai precisar de mais linhas.", proxima: "c3_12" },
    c3_12: { tipo: "narracao", texto: "Ela sorri para o celular. E, embaixo das duas mensagens, chega uma terceira. Não do grupo. Direto. De um número sem foto.", proxima: "c3_13" },
    c3_13: { quem: "mensagem", rotulo: "Mensagem — S", texto: "Meu pai acordou hoje e chorou no café. De alívio. Eu não tive coragem de dizer pra ele que não acabou.", proxima: "c3_14" },
    c3_14: { quem: "mensagem", rotulo: "Mensagem — S", texto: "O de anel passou na frente da minha casa de manhã. Não parou. Só passou. Ele estava olhando pra frente. Igual alguém que recebeu uma ordem nova.", proxima: "c3_15" },
    c3_15: { tipo: "pensamento", texto: "Uma ordem nova. Que não é sobre a Sayuri. Nem sobre a Hana.", proxima: "c3_16" },
    c3_16: { tipo: "pensamento", texto: "Ele olhou pro meu capacete muito tempo. E disse que eu ando com gente que fica de costas.", proxima: "c3_17" },
    c3_17: { tipo: "pensamento", texto: "A próxima peça não sou eu. São eles.", proxima: "ep_fim" },

    // Fim do Capítulo 29 (crie a entrada "capitulo29" em dados/capitulos.js).
    ep_fim: { fim: "capitulo29" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 30 (anotações do roteiro)
 *  • O Ren rasgou a dívida do pai da Sayuri. Agora a Sayuri deve a ELE. Ela sabe que não acabou.
 *  • "Eu só queria ver se você vinha." Ela veio.
 *  • PISTA (não revelar ainda): o Ren gosta da SN desde criança. Ele sabe que ela come o bolinho de
 *    frango primeiro. Na rota Takeo, o Takeo lembra de "um menino arrumado no banco da praça que
 *    só olhava" (Praca_lembra_Takeo). A SN não lembra dele.
 *  • PISTA (não dizer ainda): ele quer derrubar a gangue do Kaito por causa dela.
 *    "Você anda com gente que fica de costas." O de anel recebeu uma ordem nova.
 *  • Ela pode ter o segundo peão (Pediu_peao_Ren), ter dobrado a grade (Dobrou_grade_Ren) ou
 *    ameaçado o Ren (Ameacou_Ren → "Então vem").
 *  • A Sayuri e a SN viraram dupla (Duas_contra_Ren) / ela conta antes (Sayuri_conta_antes).
 *  • ROTA: cada menino esperou ou apareceu depois. Ninguém entrou.
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 O primeiro movimento · 2 Antes dele ir · 3 No chão do elevador · Rota (1 escolha por rota)
 *
 * FLAGS NOVAS
 *  Silencio_Ren · Direta_Ren · Grade_Ren · Dobrou_grade_Ren · Ameacou_Ren · Pediu_peao_Ren
 *  Sayuri_conta_antes · Duas_contra_Ren · Silencio_elevador · Gosto_dessa_gente · Lamen_depois_Ren
 *  Testa_peito_Kaito · Frango_meio_Takeo · Praca_lembra_Takeo · Abraco_pote_Takeo
 *  Blake_atras_nao_costas · Manga_Blake · Ver_gemeos_agora · Rir_Ryuji · Sem_piada_Ryuji
 *  Sorvete_Ryuji · Feijoada_noite · Mindinho_voltei · Caminhao_noite
 */