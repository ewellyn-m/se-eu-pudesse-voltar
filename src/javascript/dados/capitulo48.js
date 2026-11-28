/*
 * =====================================================================
 *  CAPÍTULO 48 — Arranhões
 *  Sábado, logo depois do Capítulo 47.
 * =====================================================================
 *
 *  ROTAS: usa a flag do Cap. 27 (Rota_Kaito · Rota_Takeo · Rota_Blake · Rota_Ryuji · Rota_Victor).
 *    Cenas com todos os meninos em todas as rotas. Bloco de rota à noite.
 *
 *  CONTEXTO (Cap. 47)
 *    • Ultimato: "Só fala comigo quando você se decidir. E eu não vou esperar muito." O Kaito: "Quase."
 *    • O Ren: "Os meus param. A partir de hoje. O resto... eu tento." (a loja de lámen do tio do Kaito)
 *
 *  O QUE ACONTECE
 *    • Sábado, sem escola (assunto de gangue pode aparecer, fora da escola).
 *    • A SN vai na lan à tarde (o dono pediu pra ela ajudar três moleques que não sabem jogar).
 *    • Blake, Ryuji e Victor chegam na lan arranhados. Ontem à noite: briga da gangue do Kaito contra a do Taijo. A do Kaito ganhou.
 *      O BLAKE e o VICTOR se gabam de como derrotaram a gangue do Taijo. O Ryuji tem um curativo no nariz.
 *    • O Takeo não foi (braço recém-saído do gesso), ficou bravo de não ter sido chamado.
 *    • A gangue do KAITO ganhou. O KAITO estava na briga, derrubou o próprio Taijo e saiu SEM NENHUM ARRANHÃO ("ele nunca tem").
 *      O Ryuji: "ele brigou com raiva". Chega na lan depois. Respeita o ultimato: não fala com ela.
 *    • A SN não acha bonito: briga é briga. Ela faz curativo neles e chama de idiotas.
 *    • No fim da tarde, a loja de lámen sem ninguém na porta pela primeira vez. O REN do outro lado da rua, com a boca cortada.
 *    • Bloco de rota à noite.
 *
 *  REGRAS
 *    • Sem xadrez no Ren. O Ren não manda mensagem. Fala pouco. Sem narrar roupa. Sem flashback.
 *    • A Serena não explica plano (aparece só por story).
 *    • Nada de inventar ligação entre o Taijo e o Ren.
 *
 *  PERSONAGENS
 *    Kaito, Takeo, Victor, Blake, Ryuji, Ren, Mio, Serena (story).
 *    Sem sprite / rótulo: Victor, Ren, Dono da lan house, Tio do Kaito, Moleques da lan (Pipoca, Dentinho, Juninho).
 *    Mencionado: Taijo (líder de outra gangue, não aparece).
 *
 *  CENÁRIOS
 *    quarto-sn · beco-mercado (rua, lan house e loja de lámen, como nos capítulos anteriores) · apartamento (hall)
 *
 *  Crie a entrada "capitulo48" em dados/capitulos.js.
 */
Roteiro.registrar("capitulo48", {
  inicio: "c1_01",
  cenas: {

    /* =================== CENA 1 — SÁBADO =================== */
    c1_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn", transicao: "tempo", legenda: "Sábado, 9h — Cena 1", sprite: null, texto: "Sábado. Sem despertador. Sem hall. Sem sete horas. Ela acorda às nove com o sol batendo na cara e fica um tempo deitada, olhando o teto, sem pensar em nada. Depois pensa em tudo de uma vez.", proxima: "c1_02" },
    c1_02: { tipo: "narracao", texto: "O celular rachado. Ela pega. Nenhuma mensagem do Kaito. Ela sabia que não ia ter. Ela confere mesmo assim. Fica brava consigo mesma. Coloca o celular de volta, virado para baixo.", proxima: "c1_03" },
    c1_03: { tipo: "narracao", texto: "No grupo, a Mio mandou um story da Serena, sem comentário. Uma foto do pôr do sol, com a legenda “às vezes a gente espera porque sabe que vale a pena 🤍”. Ela fecha o grupo sem responder.", proxima: "c1_04" },
    c1_04: { tipo: "pensamento", texto: "Não vou pensar nela. Não vou pensar nele. Hoje eu tenho três moleques que não sabem andar no mapa.", proxima: "c1_05" },
    c1_05: { caminhos: [
      { flag: "Treinar_lan", proxima: "c1_05a" }
    ], proxima: "c1_05b" },
    c1_05a: { tipo: "pensamento", texto: "Eu combinei com o dono. Sábado, duas horas. Se eles ganharem uma, a gente fica quite. Mesmo o Kaito tendo pagado o mouse. Combinado é combinado.", proxima: "c1_06" },
    c1_05b: { tipo: "pensamento", texto: "O Kaito pagou o mouse e o fone. Mas o dono mandou mensagem ontem: “os três moleques do sábado estão perguntando da menina do torneio”. Eu falei que ia. Eu não sei falar não pra moleque.", proxima: "c1_06" },
    c1_06: { tipo: "narracao", texto: "Ela levanta. Toma café. A xícara sobrevive. Ela considera isso um bom sinal para o dia.", proxima: "c2_01" },

    /* =================== CENA 2 — A LAN =================== */
    c2_01: { roupa: "fora", tipo: "narracao", cenario: "lan-house", transicao: "tempo", legenda: "Lan house, 14h — Cena 2", sprite: null, texto: "Às duas da tarde, a lan house está cheia de criança. O dono, sem cobertor dessa vez, aponta para a fileira do fundo, onde três moleques de uns dez anos estão sentados, balançando as pernas, com cara de quem está esperando uma celebridade.", proxima: "c2_02" },
    c2_02: { quem: "desconhecido", rotulo: "Dono da lan house", texto: "Pipoca, Dentinho e Juninho. Os piores jogadores do bairro. Eles morrem pra parede. Literalmente. Eles andam pra parede e morrem.", proxima: "c2_03" },
    c2_03: { quem: "desconhecido", rotulo: "Pipoca", texto: "Você é a menina que quebrou o mouse?", proxima: "c2_04" },
    c2_04: { quem: "eu", texto: "...Quem te contou isso?", proxima: "c2_05" },
    c2_05: { quem: "desconhecido", rotulo: "Dentinho", texto: "O tio. Ele contou pra todo mundo. Ele disse que você é a pessoa mais brava que ele já viu jogar. A gente quer ser bravo igual.", proxima: "c2_06" },
    c2_06: { tipo: "narracao", texto: "Ela olha para o dono. O dono finge que está contando moeda.", proxima: "c2_07" },
    c2_07: { tipo: "narracao", texto: "Ela senta com eles. Uma hora inteira. Ensina onde fica a base, onde ficam os inimigos, por que não se anda para a parede. O Juninho morre para a parede duas vezes. Na terceira, ele desvia da parede e grita como se tivesse ganhado a copa do mundo.", proxima: "c2_08" },
    c2_08: { tipo: "narracao", texto: "É bom. É simples. Criança erra e tenta de novo. Ninguém fica parado do outro lado da rua sem saber o que quer. Ela ri de verdade duas vezes. O Pipoca anota as risadas dela numa folha, porque acha que é estratégia.", proxima: "c2_09" },
    c2_09: { tipo: "narracao", texto: "Às três e pouco, a porta de vidro da lan abre com tudo. E entram três meninos que ela conhece muito bem, falando alto, rindo, empurrando um ao outro.", proxima: "c3_01" },

    /* =================== CENA 3 — OS ARRANHÕES =================== */
    c3_01: { tipo: "narracao", transicao: "tempo", legenda: "Cena 3", sprite: "blake", texto: "O Blake primeiro. Com um arranhão comprido na bochecha, do olho até o queixo, e os nós dos dedos da mão direita enrolados numa faixa meio suja. Andando tranquilo, como sempre, mas com o peito um pouco mais estufado que o normal.", proxima: "c3_02" },
    c3_02: { tipo: "narracao", sprite: "victor", texto: "Atrás dele, o Victor, com o pirulito na boca, um corte pequeno em cima da sobrancelha e o cotovelo ralado, vermelho, sem curativo nenhum, como quem quer que todo mundo veja.", proxima: "c3_03" },
    c3_03: { tipo: "narracao", sprite: "ryuji", texto: "E, por último, o Ryuji, com um curativo enorme atravessado no nariz, daqueles de criança, com desenho de dinossauro, e um galo na testa do tamanho de uma ameixa.", proxima: "c3_04" },
    c3_04: { sprite: "victor", quem: "victor", texto: "...e aí eu falei “Taijo, meu querido, essa rua tem dono”, e ele veio pra cima, e eu fiz assim, ó, eu abaixei, e ele passou direto e bateu na grade do posto! A grade fez “blém”! Igual sino de igreja!", proxima: "c3_05" },
    c3_05: { quem: "blake", sprite: "blake", texto: "Você abaixou porque escorregou no óleo do posto.", proxima: "c3_06" },
    c3_06: { quem: "victor", texto: "Eu escorreguei com estilo! É técnica! Escorregar com estilo é uma técnica milenar!", proxima: "c3_07" },
    c3_07: { quem: "blake", texto: "Eu derrubei três. O grandão do Taijo, aquele que fica sempre na frente. Um soco só. Ele sentou no chão e ficou sentado. Depois levantou e foi embora sozinho. Não chamou ninguém.", proxima: "c3_08" },
    c3_08: { tipo: "narracao", texto: "O Blake fala isso com a voz tranquila de sempre, mas ela percebe. Ele está se gabando. O Blake. O Blake que fala três palavras por dia está contando história de briga com detalhe, com movimento de mão, com o queixo levantado.", proxima: "c3_09" },
    c3_09: { quem: "victor", texto: "Seis contra quatro! E a gente ganhou! A gangue do Taijo saiu correndo pela avenida igual barata quando acende a luz! Eu nunca vi o Taijo correr! Ele corre feio! Ele corre igual pato!", proxima: "c3_10" },
    c3_10: { tipo: "narracao", texto: "E o Victor imita o Taijo correndo. Com os braços para trás, o pescoço esticado, pelo corredor da lan inteira. Os três moleques morrem de rir. O dono da lan grita “ninguém correndo no corredor”.", proxima: "c3_11" },
    c3_11: { quem: "ryuji", sprite: "ryuji", texto: "Eu também ajudei! Eu segurei a porta do banheiro! E aí a porta bateu no meu nariz! E aí eu caí! E aí eu fiquei no chão e ninguém me bateu porque acharam que eu já tinha apanhado! Foi uma estratégia! Sem querer!", proxima: "c3_12" },
    c3_12: { tipo: "narracao", sprite: null, texto: "E aí os três olham para o fundo da lan. E veem ela. Sentada no meio de três moleques de dez anos, com o fone no pescoço, olhando para eles.", proxima: "c3_13" },
    c3_13: { tipo: "narracao", texto: "O Victor para no meio da imitação do pato. O Ryuji coloca a mão no curativo de dinossauro, como se pudesse esconder. O Blake abaixa a mão enfaixada, devagar, para trás do corpo.", proxima: "c3_14" },
    c3_14: { quem: "victor", texto: "...Oi. A gente não sabia que você estava aqui. A gente... a gente veio jogar. Só jogar. Normal.", proxima: "c3_15" },
    c3_15: { tipo: "narracao", texto: "Ela levanta. Vai até eles. Devagar. Para na frente dos três. Olha o arranhão do Blake. O corte do Victor. O galo do Ryuji.", proxima: "c3_16" },
    c3_16: { tipo: "pensamento", texto: "Eu tenho vinte e oito anos por dentro. Eu sei o que uma briga de rua é. Eu sei o que vem depois de uma briga de rua. Vem outra. Sempre vem outra.", proxima: "c3_17" },
    c3_17: { tipo: "pensamento", texto: "E eles estão rindo. Contando como se fosse jogo. Como se ninguém pudesse ter levado uma faca.", proxima: "c3_esc1" },

    // ▶ ESCOLHA 1 — Os arranhões
    c3_esc1: { escolhas: [
      { texto: "A. “Vocês são três idiotas.” E pedir pro dono da lan a caixa de primeiros socorros.", proxima: "c3_1a_1", pontos: { blake: 1, victor: 1, ryuji: 1 }, flags: ["Tres_idiotas"] },
      { texto: "B. “Quantos eram? Tinha faca?” Séria. Sem sorrir.", proxima: "c3_1b_1", pontos: { blake: 2 }, flags: ["Tinha_faca"] },
      { texto: "C. Segurar o queixo do Ryuji e olhar o galo. “Isso aqui você não ganhou de estratégia.”", proxima: "c3_1c_1", pontos: { ryuji: 2 }, flags: ["Galo_Ryuji"] }
    ]},
    c3_1a_1: { quem: "eu", texto: "Vocês são três idiotas.", proxima: "c3_1a_2" },
    c3_1a_2: { tipo: "narracao", texto: "Ela fala sem gritar. Os três ficam parados como cachorro que comeu o sofá. Ela vira para o balcão.", proxima: "c3_1a_3" },
    c3_1a_3: { quem: "eu", texto: "Moço, o senhor tem caixa de primeiros socorros?", proxima: "c3_1a_4" },
    c3_1a_4: { quem: "desconhecido", rotulo: "Dono da lan house", texto: "Tenho. Do lado da caixa de mouse reserva. Que eu comprei por sua causa.", proxima: "c3_18" },
    c3_1b_1: { quem: "eu", texto: "Quantos eram? Tinha faca?", proxima: "c3_1b_2" },
    c3_1b_2: { tipo: "narracao", texto: "O Victor abre a boca para fazer piada. Ela olha para ele. Ele fecha. O Blake responde, sério, pela primeira vez sem o queixo levantado.", proxima: "c3_1b_3" },
    c3_1b_3: { quem: "blake", texto: "Seis. Um tinha um canivete. Não chegou a abrir. Eu segurei o pulso dele antes.", proxima: "c3_1b_4" },
    c3_1b_4: { quem: "eu", texto: "Antes. E se não desse tempo de segurar antes, Blake?", proxima: "c3_1b_5" },
    c3_1b_5: { tipo: "narracao", texto: "O Blake não responde. Os três ficam quietos. Os três moleques da lan também, porque percebem que a brincadeira acabou.", proxima: "c3_18" },
    c3_1c_1: { tipo: "narracao", texto: "Ela segura o queixo do Ryuji com dois dedos, com muito cuidado, e vira a cabeça dele para a luz. O galo está roxo. Ele faz “ai” baixinho.", proxima: "c3_1c_2" },
    c3_1c_2: { quem: "eu", texto: "Isso aqui você não ganhou de estratégia, Ryuji.", proxima: "c3_1c_3" },
    c3_1c_3: { quem: "ryuji", texto: "...Não. Foi a porta. Mas a porta era minha. Então eu me derrotei sozinho. Ainda conta como vitória do time.", proxima: "c3_18" },

    // (todas as opções continuam aqui)
    c3_18: { tipo: "narracao", texto: "Ela senta os três nas cadeiras do fundo, um do lado do outro, como paciente de pronto-socorro. Os três moleques assistem, fascinados. Ela abre a caixa de primeiros socorros do dono da lan.", proxima: "c3_19" },
    c3_19: { tipo: "narracao", texto: "Pega o frasco de antisséptico. Aperta para sair um pouco no algodão. O frasco amassa inteiro na mão dela e o antisséptico espirra para cima, num jato fino, e acerta o Victor bem no meio da testa.", proxima: "c3_20" },
    c3_20: { quem: "victor", texto: "AI! Arde! Mas eu mereço! Eu mereço! Pode jogar mais!", proxima: "c3_21" },
    c3_21: { quem: "desconhecido", rotulo: "Juninho", texto: "Ela é brava mesmo...", proxima: "c3_22" },
    c3_22: { tipo: "narracao", texto: "Ela limpa o corte do Victor, que faz careta e fala sem parar sobre o Taijo correndo igual pato. Coloca um curativo. O curativo fica torto. Ele não deixa ela arrumar. Diz que torto é mais bonito.", proxima: "c3_23" },
    c3_23: { tipo: "narracao", texto: "Depois o Ryuji. Ela troca o curativo de dinossauro por um normal. Ele pede para ficar com o de dinossauro. Ela coloca os dois, um em cima do outro. Ele fica feliz.", proxima: "c3_24" },
    c3_24: { tipo: "narracao", sprite: "blake", texto: "Depois o Blake. Ela desenrola a faixa suja da mão dele. Os nós dos dedos estão abertos, vermelhos, inchados. Ela limpa devagar. Ele não faz careta nenhuma. Ele fica olhando para ela enquanto ela limpa.", proxima: "c3_25" },
    c3_25: { quem: "blake", texto: "Foi a primeira vez que a gente ganhou do Taijo. Em dois anos. Por isso que a gente estava... assim.", proxima: "c3_26" },
    c3_26: { quem: "eu", texto: "Eu sei. Eu vi. O Victor imitou um pato pela lan inteira.", proxima: "c3_27" },
    c3_27: { quem: "blake", texto: "Ele vai imitar o pato por um ano.", proxima: "c3_28" },
    c3_28: { tipo: "narracao", texto: "Ela enrola uma faixa nova na mão dele. Bem apertada, mas não demais. Com muito cuidado. É a mão que segurou o pulso do canivete antes de dar tempo de abrir.", proxima: "c3_29" },
    c3_29: { quem: "eu", texto: "E o Kaito?", proxima: "c3_30" },
    c3_30: { tipo: "narracao", texto: "Ela pergunta sem pensar. Os três se olham. O Victor tira o pirulito da boca, e os olhos dele brilham.", proxima: "c3_31" },
    c3_31: { quem: "victor", texto: "O líder? O líder acabou com o Taijo. O Taijo em pessoa. O Taijo não conseguiu acertar um soco nele. Nenhum. Ele desviava e desviava, e aí, pá. Um só. O Taijo foi pro chão e não levantou mais pra brigar, só pra correr.", proxima: "c3_32" },
    c3_32: { quem: "blake", texto: "Ele não tem um arranhão. Ele nunca tem.", proxima: "c3_33" },
    c3_33: { quem: "ryuji", texto: "Mas ele brigou com uma cara esquisita. Com raiva. O Kaito nunca briga com raiva. Ele briga com cara de tédio. Ontem ele estava com cara de quem estava batendo em outra coisa.", proxima: "c3_34" },
    c3_34: { tipo: "narracao", sprite: null, texto: "Ninguém fala mais nada. Os três olham para ela. Ela olha para a faixa na mão do Blake.", proxima: "c3_35" },
    c3_35: { quem: "mensagem", rotulo: "Mensagem — Takeo", texto: "Eles foram ontem sem me chamar. Por causa do braço. O Kaito decidiu. Eu estou bravo. Eu sei que ele está certo. Eu estou bravo mesmo assim. Fala pra eles que eu estou bravo.", proxima: "c3_36" },
    c3_36: { quem: "eu", texto: "O Takeo mandou dizer que está bravo.", proxima: "c3_37" },
    c3_37: { quem: "blake", sprite: "blake", texto: "Ele tirou o gesso quarta. Ele queria ir. O Kaito falou que não. Se ele fosse e o braço quebrasse de novo, a avó dele ia matar o Kaito. A gente tem mais medo da avó do Takeo que do Taijo.", proxima: "c4_01" },

    /* =================== CENA 4 — O KAITO =================== */
    c4_01: { tipo: "narracao", transicao: "tempo", legenda: "Cena 4", sprite: null, texto: "A porta de vidro abre de novo. Devagar, dessa vez. Ninguém empurrando ninguém.", proxima: "c4_02" },
    c4_02: { tipo: "narracao", sprite: "kaito", texto: "O Kaito. Sem um arranhão. Sem um roxo. Sem nada. Como se a briga de ontem tivesse acontecido com outra pessoa. Só os nós dos dedos da mão direita um pouco vermelhos, e a cara de quem não dormiu.", proxima: "c4_03" },
    c4_03: { tipo: "narracao", texto: "Ele para na porta. Vê os três sentados nas cadeiras do fundo, com curativo. Vê ela, de pé, com a caixa de primeiros socorros aberta na mão. Vê o curativo torto do Victor. A faixa nova do Blake. Os dois curativos do Ryuji.", proxima: "c4_04" },
    c4_04: { tipo: "narracao", texto: "Ele fica parado na porta, como quem entrou na sala errada.", proxima: "c4_05" },
    c4_05: { quem: "kaito", texto: "Eu falei pra vocês passarem na farmácia ontem.", proxima: "c4_06" },
    c4_06: { quem: "blake", sprite: "blake", texto: "A gente não passou. Ela fez.", proxima: "c4_07" },
    c4_07: { quem: "victor", sprite: "victor", texto: "Líder! Eu estava contando do Taijo! Da parte que você desviou três vezes e ele bateu a mão no poste! Conta você, você conta melhor! Não, você conta pior, você não conta nada, deixa que eu conto!", proxima: "c4_08" },
    c4_08: { quem: "kaito", sprite: "kaito", texto: "Para de contar, Victor.", proxima: "c4_09" },
    c4_09: { tipo: "narracao", texto: "Ele fala baixo. O Victor para. O Kaito olha para ela, e ela vê na cara dele que ele não queria que ela soubesse. Que ele não queria que ela visse os arranhões dos amigos, nem ouvisse a parte do poste.", proxima: "c4_10" },
    c4_10: { tipo: "pensamento", texto: "Ele brigou ontem com o Taijo. Ganhou. Sem um arranhão. Com raiva, disse o Ryuji. Batendo em outra coisa.", proxima: "c4_11" },
    c4_11: { tipo: "pensamento", texto: "E hoje ele entra aqui inteiro, e os amigos dele estão cheios de curativo. E eu não sei se a raiva era do Taijo. Ou era de mim. Ou era dele mesmo.", proxima: "c4_12" },
    c4_12: { tipo: "narracao", texto: "Ele abre a boca, olhando para ela. Ela vê ele quase falar com ela.", proxima: "c4_13" },
    c4_13: { tipo: "narracao", texto: "E ele fecha. Ele não fala. Ele só faz que sim para ela, pequeno, uma vez, e desvia os olhos.", proxima: "c4_14" },
    c4_14: { tipo: "pensamento", texto: "Ele não falou comigo. “Só fala comigo quando você se decidir.” Ele está obedecendo. Ele ainda não decidiu.", proxima: "c4_15" },
    c4_15: { tipo: "pensamento", texto: "Ele sabe brigar com seis caras no posto sem levar um arranhão. Mas não sabe falar uma frase comigo.", proxima: "c4_esc2" },

    // ▶ ESCOLHA 2 — O Kaito na lan
    c4_esc2: { escolhas: [
      { texto: "A. Não falar com ele. Voltar a enrolar a faixa do Blake. Ele que venha quando decidir.", proxima: "c4_2a_1", pontos: { blake: 1 }, flags: ["Ignorou_lan"] },
      { texto: "B. Falar com ele, mas sobre os amigos, não sobre ela: “Você sabe ganhar do Taijo. Então sabe decidir. Decide antes da próxima briga.”", proxima: "c4_2b_1", pontos: { kaito: 2 }, flags: ["Pensa_rapido"] },
      { texto: "C. Entregar a caixa de primeiros socorros na mão dele. “Termina você. Eles são seus.”", proxima: "c4_2c_1", pontos: { kaito: 2 }, flags: ["Termina_voce"] }
    ]},
    c4_2a_1: { tipo: "narracao", texto: "Ela não fala com ele. Volta para a faixa do Blake, que já estava pronta, e dá mais uma volta só para ter o que fazer com as mãos. O Kaito fica parado na porta um tempo. Depois vai até o balcão e paga as horas dos três, sem falar nada.", proxima: "c4_21" },
    c4_2b_1: { quem: "eu", texto: "Você sabe ganhar do Taijo, Kaito. Então você sabe decidir. Decide antes da próxima briga. Briga com raiva é briga que alguém sai machucado.", proxima: "c4_2b_2" },
    c4_2b_2: { tipo: "narracao", texto: "Ele levanta os olhos. A frase acerta. Ela vê. Ele faz que sim, devagar, sem responder, porque responder seria falar com ela. E ele ainda não pode.", proxima: "c4_21" },
    c4_2c_1: { quem: "eu", texto: "Termina você. Eles são seus.", proxima: "c4_2c_2" },
    c4_2c_2: { tipo: "narracao", texto: "Ela coloca a caixa de primeiros socorros na mão dele. Ele segura. Os dedos não se encostam. Ele vai até o Ryuji e começa a arrumar o curativo do nariz, que estava ótimo, só para ter o que fazer. O Ryuji deixa. O Ryuji entende.", proxima: "c4_21" },

    // (todas as opções continuam aqui)
    c4_21: { tipo: "narracao", texto: "Ela volta para os três moleques. O Pipoca está com a folha das risadas dela na mão.", proxima: "c4_22" },
    c4_22: { quem: "desconhecido", rotulo: "Pipoca", texto: "Ele é o seu namorado?", proxima: "c4_23" },
    c4_23: { tipo: "narracao", texto: "A lan inteira fica em silêncio. O Victor engasga com o pirulito. O Ryuji para de respirar. O Blake olha para o teto. O Kaito, do lado do Ryuji, fica com o curativo parado na mão.", proxima: "c4_24" },
    c4_24: { quem: "eu", texto: "Não, Pipoca. Ele ainda está decidindo o que ele é.", proxima: "c4_25" },
    c4_25: { quem: "desconhecido", rotulo: "Pipoca", texto: "Ah. O meu primo também. Ele está decidindo faz três anos. A minha tia diz que ele é lerdo.", proxima: "c4_26" },
    c4_26: { tipo: "narracao", texto: "O Victor cai da cadeira de rir. O Ryuji ri tanto que o curativo de dinossauro solta. O Blake vira de costas para ninguém ver ele rindo. E o Kaito... o Kaito fica vermelho até a orelha, olhando para o curativo na mão dele, sem rir, sem falar nada.", proxima: "c4_27" },
    c4_27: { tipo: "narracao", texto: "Ela volta a ensinar o Juninho a não andar para a parede. Na última partida da tarde, os três moleques ganham. Pela primeira vez na vida. A lan inteira aplaude. Até o Kaito, de longe, encostado no balcão.", proxima: "c4_28" },
    c4_28: { quem: "desconhecido", rotulo: "Dono da lan house", texto: "Ganharam! Estamos quites, menina do torneio. E pode voltar sábado que vem. Eles vão morrer de saudade.", proxima: "c5_01" },

    /* =================== CENA 5 — A LOJA DE LÁMEN =================== */
    c5_01: { tipo: "narracao", cenario: "beco-mercado", transicao: "tempo", legenda: "Sábado, 17h30 — Cena 5", sprite: null, texto: "No fim da tarde, ela volta para casa sozinha. Não foi de propósito. Os meninos ficaram na lan. O Kaito foi embora antes, sem falar com ninguém. Ela escolheu o caminho mais longo. O que passa pela rua da loja de lámen.", proxima: "c5_02" },
    c5_02: { tipo: "pensamento", texto: "Só pra ver. Só pra ver se o Ren falou sério.", proxima: "c5_03" },
    c5_03: { tipo: "narracao", texto: "A loja de lámen está aberta. A cortininha de pano na porta, balançando com o vento. O cheiro de caldo saindo pela janela. E, na calçada da frente, onde nas últimas semanas sempre tinha dois ou três meninos sentados no meio-fio, encostados no poste, olhando quem entrava... não tem ninguém.", proxima: "c5_04" },
    c5_04: { tipo: "narracao", texto: "Ninguém. A calçada vazia. Só uma senhora com sacola de feira entrando na loja, sem olhar para trás, sem medo.", proxima: "c5_05" },
    c5_05: { tipo: "narracao", texto: "Pela janela, ela vê o tio do Kaito atrás do balcão. Ele está servindo a senhora. E está sorrindo. Ela nunca viu ele sorrir assim, solto, com o rosto inteiro.", proxima: "c5_06" },
    c5_06: { tipo: "narracao", texto: "Ele levanta os olhos. Vê ela na calçada. E acena, com a concha na mão, chamando ela para entrar.", proxima: "c5_07" },
    c5_07: { cenario: "loja-lamen", sprite: "tio_kaito", tipo: "narracao", texto: "Ela entra. O sino da porta toca. O tio já está colocando um onigiri no balcão para ela antes de ela pedir.", proxima: "c5_08" },
    c5_08: { quem: "tio_kaito", texto: "A cliente pequenininha. Senta, senta. Hoje é por conta da casa. Hoje é dia bom.", proxima: "c5_09" },
    c5_09: { quem: "eu", texto: "Dia bom?", proxima: "c5_10" },
    c5_10: { quem: "tio_kaito", texto: "Os meninos da porta. Os que ficavam ali sentados, olhando feio pros clientes. Hoje não vieram. Ontem também não. Ninguém sabe por quê. Eu não pergunto. Eu só fiz caldo dobrado.", proxima: "c5_11" },
    c5_11: { quem: "tio_kaito", texto: "Tive mais cliente hoje do que no mês inteiro. A senhora do três já voltou duas vezes. Disse que estava com medo de vir.", proxima: "c5_12" },
    c5_12: { tipo: "pensamento", texto: "“Os meus param. A partir de hoje.” Ele falou sério.", proxima: "c5_13" },
    c5_13: { tipo: "narracao", texto: "Ela come o onigiri devagar. O tio fala do caldo, do preço do alho, do sobrinho que anda esquisito e não come direito. Ela não fala nada do sobrinho. Só ouve. Na saída, o tio coloca mais dois onigiri num saquinho para ela levar.", proxima: "c5_14" },
    c5_14: { quem: "tio_kaito", texto: "Um pra você. Um pra quem você quiser. Você sempre tem cara de quem conhece alguém que não comeu.", proxima: "c5_15" },
    c5_15: { cenario: "beco-mercado", tipo: "narracao", sprite: null, texto: "Ela sai. O sino toca. E, do outro lado da rua, sentado no muro baixo de uma casa abandonada, de costas para o sol, com as mãos nos bolsos, ela vê.", proxima: "c5_16" },
    c5_16: { sprite: "ren", tipo: "narracao", texto: "O Ren. Olhando para a loja. Para a calçada vazia. Para ela saindo com o saquinho de onigiri.", proxima: "c5_17" },
    c5_17: { tipo: "narracao", texto: "Ela atravessa a rua. Ele não levanta do muro. Quando ela chega perto, ela vê. O canto da boca dele está cortado, inchado, com uma crosta escura. E tem uma marca vermelha na bochecha, do lado esquerdo, do formato de uma mão aberta.", proxima: "c5_18" },
    c5_18: { quem: "eu", texto: "O que aconteceu com a sua boca?", proxima: "c5_19" },
    c5_19: { quem: "ren", texto: "Nada.", proxima: "c5_20" },
    c5_20: { quem: "eu", texto: "Isso não é nada, Ren. Isso é uma mão.", proxima: "c5_21" },
    c5_21: { tipo: "narracao", texto: "Ele olha para a loja. A cortininha balançando. O tio lá dentro, sorrindo para mais um cliente que entra.", proxima: "c5_22" },
    c5_22: { quem: "ren", texto: "Custou um pouco.", proxima: "c5_23" },
    c5_23: { tipo: "narracao", texto: "Ele não fala de quem é a mão. Ele não precisa. Ela lembra do “o rei, não”. Ela lembra de “a ordem não é minha”. E fica com o estômago gelado.", proxima: "c5_24" },
    c5_24: { quem: "ren", texto: "Valeu. Olha.", proxima: "c5_25" },
    c5_25: { tipo: "narracao", texto: "Ele faz um gesto pequeno com o queixo, na direção da loja. Da calçada vazia. Do tio sorrindo. Da senhora do três saindo com uma sacola de marmita.", proxima: "c5_26" },
    c5_26: { quem: "ren", texto: "Ele sorri desse jeito? Eu nunca tinha visto.", proxima: "c5_27" },
    c5_27: { quem: "eu", texto: "Eu também não.", proxima: "c5_esc3" },

    // ▶ ESCOLHA 3 — O Ren no muro
    c5_esc3: { escolhas: [
      { texto: "A. Abrir o saquinho e dar um dos onigiris pra ele. “O tio disse que é pra quem não comeu.”", proxima: "c5_3a_1", pontos: {}, flags: ["Onigiri_Ren"] },
      { texto: "B. Sentar no muro do lado dele. Sem falar nada.", proxima: "c5_3b_1", pontos: {}, flags: ["Sentou_muro_Ren"] },
      { texto: "C. “Quem fez isso com você, Ren?”", proxima: "c5_3c_1", pontos: {}, flags: ["Quem_fez_Ren"] }
    ]},
    c5_3a_1: { tipo: "narracao", texto: "Ela abre o saquinho. Tira um onigiri. Estende para ele.", proxima: "c5_3a_2" },
    c5_3a_2: { quem: "eu", texto: "O tio disse que é pra quem não comeu. Você tem cara de quem não comeu.", proxima: "c5_3a_3" },
    c5_3a_3: { tipo: "narracao", texto: "Ele olha para o onigiri. Para a loja. Para ela. Ele não pega na hora. Ela continua com a mão estendida. Ele pega. Segura com as duas mãos, como quem segura uma coisa que pode quebrar.", proxima: "c5_3a_4" },
    c5_3a_4: { quem: "ren", texto: "...Do tio dele.", proxima: "c5_3a_5" },
    c5_3a_5: { quem: "eu", texto: "Do tio dele. Por causa de você. Come.", proxima: "c5_3a_6" },
    c5_3a_6: { tipo: "narracao", texto: "Ele dá uma mordida. Do lado da boca que não está cortado. Mastiga devagar. E fica olhando para a loja enquanto come, sem falar nada, com uma cara que ela não sabe nomear.", proxima: "c5_28" },
    c5_3b_1: { tipo: "narracao", texto: "Ela senta no muro baixo, do lado dele. A um braço de distância. Ele não se mexe. Os dois ficam olhando a loja, a cortininha, a calçada vazia, o sol baixando por trás das casas.", proxima: "c5_3b_2" },
    c5_3b_2: { tipo: "narracao", texto: "Ninguém fala. Dez minutos. O tio aparece na janela uma vez, olha para o muro, vê os dois sentados. Não reconhece o menino. Acena para ela. Ela acena de volta. O Ren não acena. Mas abaixa a cabeça, pequeno, como quem cumprimenta.", proxima: "c5_28" },
    c5_3c_1: { quem: "eu", texto: "Quem fez isso com você, Ren?", proxima: "c5_3c_2" },
    c5_3c_2: { tipo: "narracao", texto: "Ele não responde. Ele tira a mão do bolso, devagar, e passa o polegar no canto da boca, em cima do corte, como quem confere se ainda está lá.", proxima: "c5_3c_3" },
    c5_3c_3: { quem: "ren", texto: "Você pediu uma coisa. Eu escolhi fazer. Isso aqui é a parte da escolha que vem junto.", proxima: "c5_3c_4" },
    c5_3c_4: { quem: "ren", texto: "Não pergunta mais. Por favor.", proxima: "c5_3c_5" },
    c5_3c_5: { tipo: "narracao", texto: "“Por favor.” O Ren falando “por favor”. Ela fecha a boca. Não pergunta mais.", proxima: "c5_28" },

    // (todas as opções continuam aqui)
    c5_28: { tipo: "pensamento", texto: "Ele levou uma mão na cara por causa de uma loja de lámen que nem é dele. Do tio de um menino que ele odeia. Porque eu pedi.", proxima: "c5_29" },
    c5_29: { tipo: "pensamento", texto: "E o Kaito ganhou do Taijo sem um arranhão. E ainda não sabe me dizer uma frase.", proxima: "c5_30" },
    c5_30: { tipo: "pensamento", texto: "Não. Não compara. Eu falei que não ia comparar.", proxima: "c5_31" },
    c5_31: { tipo: "narracao", texto: "O Ren levanta do muro. Bate a poeira. Olha para ela uma última vez.", proxima: "c5_32" },
    c5_32: { quem: "ren", texto: "Não conta pra ele. Que fui eu.", proxima: "c5_33" },
    c5_33: { quem: "eu", texto: "Por quê?", proxima: "c5_34" },
    c5_34: { quem: "ren", texto: "Porque ele vai achar que eu quero alguma coisa em troca.", proxima: "c5_35" },
    c5_35: { quem: "eu", texto: "E você quer?", proxima: "c5_36" },
    c5_36: { tipo: "narracao", texto: "Ele fica parado. O sol está atrás dele, e ela não consegue ver direito a cara dele. Só o contorno.", proxima: "c5_37" },
    c5_37: { quem: "ren", texto: "Eu queria que você.. Quer dizer, que aquele senhor sorrisse. Ele sorriu. Já tenho o que eu queria.", proxima: "c5_38" },
    c5_38: { tipo: "narracao", texto: "E vai embora pela rua, com as mãos nos bolsos, sem olhar para trás. Ela fica parada na calçada, com o saquinho de onigiri na mão, olhando ele ir até virar a esquina.", proxima: "c5_39" },
    c5_39: { tipo: "pensamento", texto: "Eu não sei se ele mentiu. Eu não sei se é só isso que ele quer. Mas o tio sorriu. Isso é verdade. Isso eu vi.", proxima: "r_cam" },

    /* =================== ROTA — SÁBADO À NOITE =================== */
    r_cam: { caminhos: [
      { flag: "Rota_Kaito", proxima: "rk_01" },
      { flag: "Rota_Takeo", proxima: "rt_01" },
      { flag: "Rota_Blake", proxima: "rb_01" },
      { flag: "Rota_Ryuji", proxima: "rr_01" },
      { flag: "Rota_Victor", proxima: "rv_01" }
    ], proxima: "rk_01" },

    // ---------- Rota Kaito ----------
    rk_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Sábado, 22h", sprite: null, texto: "Dez da noite. O celular vibra. Ela olha. O nome dele. Depois de dois dias sem nada.", proxima: "rk_02" },
    rk_02: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Eu sei que você falou pra eu só falar quando decidir. Isso não é falar. Isso é avisar.", proxima: "rk_03" },
    rk_03: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Hoje eu vi você fazendo curativo neles e eu entendi que não dá mais pra ficar parado sem saber o que fazer.", proxima: "rk_04" },
    rk_04: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Amanhã. Domingo. Sete da noite. No hall. Eu vou com a resposta inteira. Se você não descer, eu entendo.", proxima: "rk_esc" },
    rk_esc: { escolhas: [
      { texto: "A. Responder: “Eu desço.”", proxima: "rk_a1", pontos: { kaito: 3 }, flags: ["Desce_domingo"] },
      { texto: "B. Responder: “Traz a resposta. Eu decido se desço.”", proxima: "rk_b1", pontos: { kaito: 2 }, flags: ["Decide_se_desce"] },
      { texto: "C. Não responder. Ele disse que é aviso. Aviso não precisa de resposta.", proxima: "rk_c1", pontos: { kaito: 1 }, flags: ["Aviso_sem_resposta"] }
    ]},
    rk_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu desço.", proxima: "rk_a2" },
    rk_a2: { tipo: "narracao", texto: "Lido na hora. Ele não responde. Mas ela vê o “digitando” aparecer e sumir cinco vezes, como quem escreve uma coisa enorme e apaga tudo para não estragar.", proxima: "r_fim" },
    rk_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Traz a resposta. Eu decido se desço.", proxima: "rk_b2" },
    rk_b2: { quem: "mensagem", rotulo: "Mensagem — Kaito", texto: "Justo.", proxima: "r_fim" },
    rk_c1: { tipo: "narracao", texto: "Ela não responde. Deixa lido. Aviso não precisa de resposta. Mas ela fica olhando para a palavra “domingo” até a tela apagar sozinha.", proxima: "r_fim" },

    // ---------- Rota Takeo ----------
    rt_01: { tipo: "narracao", cenario: "casa-takeo", transicao: "tempo", legenda: "Sábado, 18h30", sprite: "takeo", texto: "Às seis e meia, ela passa no quintal do Takeo. O caquizeiro, o galho, a corda nova enrolada no chão. A avó dele na janela, fingindo que não está olhando. O Takeo esperando com a ponta da corda na mão.", proxima: "rt_02" },
    rt_02: { quem: "takeo", texto: "Eu ainda estou bravo com o Blake. Mas eu fico menos bravo se a gente fizer o nó agora. Segura aqui.", proxima: "rt_esc" },
    rt_esc: { escolhas: [
      { texto: "A. Segurar a corda com cuidado enquanto ele faz o nó com o braço novo.", proxima: "rt_a1", pontos: { takeo: 4 }, flags: ["No_feito"] },
      { texto: "B. “Takeo. Promete que não vai brigar com o Taijo quando o braço sarar.”", proxima: "rt_b1", pontos: { takeo: 3 }, flags: ["Promete_nao_brigar"] },
      { texto: "C. Sentar no balanço primeiro, quando o nó ficar pronto.", proxima: "rt_c1", pontos: { takeo: 3 }, flags: ["Primeira_balanco"] }
    ]},
    rt_a1: { tipo: "narracao", texto: "Ela segura a corda. Ele dá o nó com o braço de frango, devagar, com a língua para fora de concentração. Fica reto. Ele puxa duas vezes. Aguenta. Ele olha para ela como quem acabou de construir uma ponte.", proxima: "rt_a2" },
    rt_a2: { quem: "takeo", texto: "Reto. Viu? Com você segurando, fica reto.", proxima: "r_fim" },
    rt_b1: { quem: "eu", texto: "Takeo. Promete que não vai brigar com o Taijo quando o braço sarar.", proxima: "rt_b2" },
    rt_b2: { tipo: "narracao", texto: "Ele para com a corda na mão. Fica quieto. Olha para a janela, onde a avó finge que não está olhando.", proxima: "rt_b3" },
    rt_b3: { quem: "takeo", texto: "Eu prometo tentar. É a promessa mais honesta que eu sei fazer. Eu sou da gangue. Mas eu sou neto dela primeiro.", proxima: "r_fim" },
    rt_c1: { tipo: "narracao", texto: "Quando o nó fica pronto, ela senta no balanço primeiro. O galho range. Aguenta. O Takeo empurra devagar, com o braço bom. A avó, na janela, para de fingir e aplaude.", proxima: "r_fim" },

    // ---------- Rota Blake ----------
    rb_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Sábado, 21h", sprite: null, texto: "Às nove, uma mensagem do Blake. Uma foto da mão dele, com a faixa que ela enrolou. Ainda inteira.", proxima: "rb_02" },
    rb_02: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu não vou tirar até amanhã. A minha mãe quis trocar. Eu não deixei.", proxima: "rb_03" },
    rb_03: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Hoje eu me gabei. Na lan. Eu nunca me gabo. Eu acho que eu queria que você ouvisse. Isso é ridículo. Eu sei.", proxima: "rb_esc" },
    rb_esc: { escolhas: [
      { texto: "A. “Não é ridículo. Mas eu preferia você sem arranhão.”", proxima: "rb_a1", pontos: { blake: 4 }, flags: ["Sem_arranhao_Blake"] },
      { texto: "B. “Eu ouvi. O grandão sentou no chão.”", proxima: "rb_b1", pontos: { blake: 3 }, flags: ["Grandao_sentou"] },
      { texto: "C. “Blake. O canivete. Me promete que da próxima vez você não segura o pulso. Você corre.”", proxima: "rb_c1", pontos: { blake: 3 }, flags: ["Corre_Blake"] }
    ]},
    rb_a1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Não é ridículo. Mas eu preferia você sem arranhão.", proxima: "rb_a2" },
    rb_a2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu também preferia. Mas aí você não ia ter enrolado a faixa.", proxima: "r_fim" },
    rb_b1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Eu ouvi. O grandão sentou no chão.", proxima: "rb_b2" },
    rb_b2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "E ficou sentado. Eu vou lembrar disso por muito tempo. Mais do que da faixa. Não. Menos do que da faixa.", proxima: "r_fim" },
    rb_c1: { quem: "mensagem", rotulo: "Mensagem — SN", texto: "Blake. O canivete. Me promete que da próxima vez você não segura o pulso. Você corre.", proxima: "rb_c2" },
    rb_c2: { quem: "mensagem", rotulo: "Mensagem — Blake", texto: "Eu não sei correr deixando eles pra trás. Mas eu prometo olhar antes. Se for faca de verdade, eu olho antes.", proxima: "r_fim" },

    // ---------- Rota Ryuji ----------
    rr_01: { tipo: "narracao", cenario: "frente-casa-sn-noite", transicao: "tempo", legenda: "Sábado, 20h", sprite: "ryuji", texto: "Às oito, a Relâmpago buzina lá embaixo. Ela desce. O Ryuji está no degrau do hall, em cima da fita preta, com o curativo de dinossauro de volta no nariz, por cima do normal.", proxima: "rr_02" },
    rr_02: { quem: "ryuji", texto: "Eu vim mostrar que o galo diminuiu! Olha! Era uma ameixa, agora é uma uva! Amanhã é uma ervilha! É ciência!", proxima: "rr_esc" },
    rr_esc: { escolhas: [
      { texto: "A. Sentar do lado dele e conferir o galo de verdade, com cuidado.", proxima: "rr_a1", pontos: { ryuji: 3 }, flags: ["Conferiu_galo"] },
      { texto: "B. “Ryuji. Você ficou com medo ontem?”", proxima: "rr_b1", pontos: { ryuji: 4 }, flags: ["Medo_Ryuji"] },
      { texto: "C. Dar o último onigiri do tio pra ele.", proxima: "rr_c1", pontos: { ryuji: 3 }, flags: ["Onigiri_Ryuji"] }
    ]},
    rr_a1: { tipo: "narracao", texto: "Ela senta do lado dele e segura o rosto dele com as duas mãos, devagar, virando para a luz do hall. O galo está menor. Ele fica parado, sem falar nada, com os olhos arregalados, o rosto entre as mãos dela. O Ryuji sem falar nada pela terceira vez na semana.", proxima: "r_fim" },
    rr_b1: { quem: "eu", texto: "Ryuji. Você ficou com medo ontem?", proxima: "rr_b2" },
    rr_b2: { tipo: "narracao", texto: "Ele para de sorrir. Olha para o chão do hall. Mexe no curativo.", proxima: "rr_b3" },
    rr_b3: { quem: "ryuji", texto: "Muito. Eu fiquei no chão porque eu tive medo de levantar. Não foi estratégia. Eu menti na lan. Desculpa. Você é a primeira pessoa que eu conto.", proxima: "r_fim" },
    rr_c1: { tipo: "narracao", texto: "Ela tira o último onigiri do saquinho do tio e dá para ele. Ele come em três mordidas, de olho fechado, como quem come o melhor prato do mundo, e depois fala, de boca cheia: “isso é do tio do Kaito, eu conheço esse arroz”. Ela não fala mais nada.", proxima: "r_fim" },

    // ---------- Rota Victor ----------
    rv_01: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Sábado, 21h", sprite: null, texto: "Às nove, o Victor liga. Ela atende. Ele não fala do pato.", proxima: "rv_02" },
    rv_02: { quem: "victor", texto: "O corte na sobrancelha. Eu não ganhei escorregando. Um deles ia acertar o Ryuji por trás, com um cano. Eu entrei na frente. Eu não contei na lan porque ia parecer que eu estava me exibindo. Eu estava me exibindo com o pato pra não ter que contar isso.", proxima: "rv_esc" },
    rv_esc: { escolhas: [
      { texto: "A. “Você entrou na frente de um cano, Victor?”", proxima: "rv_a1", pontos: { victor: 3 }, flags: ["Cano_Victor"] },
      { texto: "B. “Você é bem mais corajoso do que finge ser.”", proxima: "rv_b1", pontos: { victor: 4 }, flags: ["Corajoso_Victor"] },
      { texto: "C. “Amanhã eu vou ver sua mãe. Ela vai brigar com você por causa da sobrancelha.”", proxima: "rv_c1", pontos: { victor: 3 }, flags: ["Domingo_mae_Victor"] }
    ]},
    rv_a1: { quem: "eu", texto: "Você entrou na frente de um cano, Victor?", proxima: "rv_a2" },
    rv_a2: { quem: "victor", texto: "Pegou de raspão. O Ryuji nem viu. Não conta pra ele. Ele ia chorar e me abraçar e eu não sei lidar com abraço do Ryuji, ele aperta demais.", proxima: "r_fim" },
    rv_b1: { quem: "eu", texto: "Você é bem mais corajoso do que finge ser.", proxima: "rv_b2" },
    rv_b2: { tipo: "narracao", texto: "Silêncio do outro lado. Muito silêncio. Depois uma risada pequena, sem graça.", proxima: "rv_b3" },
    rv_b3: { quem: "victor", texto: "Não espalha. Eu tenho uma reputação de bobo pra manter.", proxima: "r_fim" },
    rv_c1: { quem: "eu", texto: "Amanhã eu vou ver sua mãe. Ela vai brigar com você por causa da sobrancelha.", proxima: "rv_c2" },
    rv_c2: { quem: "victor", texto: "Ela já brigou. Duas vezes. Depois fez sopa. Ela sempre briga e depois faz sopa. Amanhã ela vai brigar de novo, só pra você ver. Ela gosta de plateia.", proxima: "r_fim" },

    /* =================== FIM =================== */
    // (todas as rotas continuam aqui)
    r_fim: { roupa: null, tipo: "narracao", cenario: "quarto-sn-noite", transicao: "tempo", legenda: "Sábado, 23h30", sprite: null, texto: "Onze e meia. Ela está deitada. Na mesinha, o livro do Ren, ainda inteiro. O saquinho vazio do tio do Kaito.", proxima: "f_02" },
    f_02: { tipo: "pensamento", texto: "Hoje três meninos chegaram arranhados, rindo de uma briga que podia ter tido faca. E o líder deles chegou inteiro, sem um arranhão, sem uma palavra pra mim.", proxima: "f_03" },
    f_03: { tipo: "pensamento", texto: "E um outro menino, um que eu odiava, levou uma mão na cara pra uma calçada ficar vazia. E pediu pra eu não contar.", proxima: "f_04" },
    f_04: { tipo: "pensamento", texto: "O tio sorriu com o rosto inteiro. A senhora do três voltou duas vezes. O Juninho desviou da parede.", proxima: "f_05" },
    f_05: { tipo: "pensamento", texto: "Hoje não quebrei quase nada. Um frasco de antisséptico. Na testa do Victor. Ele pediu mais.", proxima: "f_06" },
    f_06: { tipo: "narracao", texto: "Ela vira de lado. Olha a mão aberta no travesseiro. E pensa na marca vermelha na bochecha do Ren, do formato de outra mão, maior que a dela.", proxima: "f_07" },
    f_07: { tipo: "pensamento", texto: "“Custou um pouco.” Eu não sei quanto é um pouco, pra ele. Eu tenho medo de que um pouco, pra ele, seja muito.", proxima: "ep_fim" },

    // Fim do Capítulo 48 (crie a entrada "capitulo48" em dados/capitulos.js).
    ep_fim: { fim: "capitulo48" }
  }
});

/*
 * GANCHOS PARA O CAPÍTULO 49 (anotações do roteiro)
 *  • SÁBADO NA LAN: a SN treinou Pipoca, Dentinho e Juninho (venceram a primeira da vida; "estamos quites").
 *  • A GANGUE DO TAIJO entrou no território na sexta à noite (posto da avenida). Seis contra quatro. A GANGUE DO KAITO GANHOU.
 *    BLAKE (arranhão na bochecha, nós dos dedos abertos — derrubou "o grandão do Taijo", segurou o pulso do canivete antes de abrir)
 *    e VICTOR (corte na sobrancelha, cotovelo ralado — "o Taijo corre igual pato") SE GABARAM. RYUJI: curativo de dinossauro no
 *    nariz e galo (a porta da Relâmpago). "Primeira vez que a gente ganhou do Taijo em dois anos."
 *    TAKEO não foi: o Kaito decidiu por causa do braço. Takeo bravo ("fala pra eles que eu estou bravo").
 *  • O KAITO BRIGOU E DERRUBOU O TAIJO (o Taijo não acertou um soco; "um só"). SEM NENHUM ARRANHÃO. Ryuji: "brigou com raiva,
 *    como quem bate em outra coisa". Na lan: "Para de contar, Victor." Ele respeitou o ultimato: não falou com ela.
 *    Foi ele que não deixou o Takeo ir. Pipoca: "Ele é o seu namorado?" / "Ele ainda está decidindo o que ele é."
 *  • A SN NÃO ACHOU BONITO: "três idiotas" / "tinha faca?" / curativos. O frasco de antisséptico espirrou na testa do Victor.
 *  • A LOJA DE LÁMEN: calçada vazia pela primeira vez. O tio sorrindo com o rosto inteiro, caldo dobrado, mais clientes.
 *    O REN no muro da casa abandonada em frente: canto da boca cortado + marca de mão aberta na bochecha. "Custou um pouco."
 *    "Valeu. Olha." / "Ele sorri desse jeito? Eu nunca tinha visto." / "Não conta pra ele. Que fui eu." /
 *    "Eu queria que aquele senhor sorrisse. Ele sorriu. Já tenho o que eu queria." (Onigiri do tio pro Ren, se escolhido.)
 *  • ROTA KAITO: "Amanhã. Domingo. Sete da noite. No hall. Eu vou com a resposta inteira."
 *  • Rotas: Takeo (o nó reto; "sou da gangue, mas sou neto dela primeiro"); Blake (não tira a faixa; "eu me gabei pra você
 *    ouvir"); Ryuji (confessa o medo); Victor (o corte foi entrando na frente de um cano pelo Ryuji). Domingo: mãe do Victor.
 *
 * ESCOLHAS DO CAPÍTULO
 *  1 Os arranhões · 2 O Kaito na lan · 3 O Ren no muro · Rota (1 por rota)
 *
 * FLAGS NOVAS
 *  Tres_idiotas · Tinha_faca · Galo_Ryuji · Ignorou_lan · Pensa_rapido · Termina_voce
 *  Onigiri_Ren · Sentou_muro_Ren · Quem_fez_Ren · Desce_domingo · Decide_se_desce · Aviso_sem_resposta
 *  No_feito · Promete_nao_brigar · Primeira_balanco · Sem_arranhao_Blake · Grandao_sentou · Corre_Blake
 *  Conferiu_galo · Medo_Ryuji · Onigiri_Ryuji · Cano_Victor · Corajoso_Victor · Domingo_mae_Victor
 */