/*
 * Lista de capítulos (aparece no menu "Capítulos" e na tela de fim).
 * Cada capítulo tem a sua página em src/html/ e o seu roteiro em src/javascript/dados/.
 * Para criar o capítulo 2: copie src/html/capitulo1.html para capitulo2.html, troque o
 * data-capitulo e o script do roteiro, e acrescente a entrada aqui.
 */
const Capitulos = [
  {
    id: "capitulo1",
    numero: 1,
    titulo: "Se eu pudesse voltar...",
    subtitulo: "",
    pagina: "src/html/capitulo1.html",
    capa: "src/imagens/capa/capa.png",
    descricao: "Aos 28 anos, SN encontra uma foto antiga e uma mensagem de voz do Takeo, o amigo que morreu dez anos atrás. Ela deseja voltar no tempo e acorda aos 16, na sala de aula, ao lado da melhor amiga, Mio. Naquela mesma tarde, o Takeo vai ser espancado pela gangue rival."
  }
  ,
  {
    id: "capitulo2",
    numero: 2,
    titulo: "Uma pessoa diferente",
    subtitulo: "",
    pagina: "src/html/capitulo2.html",
    capa: "src/imagens/cenarios/corredor.jpg",
    descricao: "Quinta-feira. A SN acorda e ainda está aqui. Com uma lista de regras no caderno azul, ela decide viver de outro jeito. Mas a escola guarda lembranças que ela tinha apagado, e dois irmãos de outro colégio marcam uma briga no galpão, às cinco."
  }
  ,
  {
    id: "capitulo3",
    numero: 3,
    titulo: "O microfone e a faca",
    subtitulo: "",
    pagina: "src/html/capitulo3.html",
    capa: "src/imagens/cenarios/sala-de-karaoke.png",
    descricao: "Sexta-feira: prova de física, karaokê com a Hana... e a Reina quer conversar. Sozinhas. Na volta para casa, alguém está seguindo a SN."
  }  ,
  {
    id: "capitulo4",
    numero: 4,
    titulo: "Dois dias até segunda",
    subtitulo: "",
    pagina: "src/html/capitulo4.html",
    capa: "src/imagens/cenarios/loja-lamen.png",
    descricao: "Sábado e domingo. A mãe guarda um segredo da família, o grupo se reúne numa lojinha de lámen, e quatro garotos querem passar a tarde com a SN. Mas o prazo do Jin chega na segunda."
  }
  ,
  {
    id: "capitulo5",
    numero: 5,
    titulo: "Dessa vez",
    subtitulo: "",
    pagina: "src/html/capitulo5.html",
    capa: "src/imagens/cenarios/Olaria.png",
    descricao: "Segunda-feira. O Takeo sumiu, e o Jin espera na olaria ao meio-dia. Desta vez, a SN não vai sozinha."
  }  ,
  {
    id: "capitulo6",
    numero: 6,
    titulo: "Força guardada",
    subtitulo: "",
    pagina: "src/html/capitulo6.html",
    capa: "src/imagens/cenarios/beira-do-rio.png",
    descricao: "A mãe finalmente conta quem era Sora. Na terça, um aluno novo senta na carteira do Takeo, sorrindo, e parece saber tudo sobre a SN."
  }
  ,
  {
    id: "capitulo7",
    numero: 7,
    titulo: "O festival",
    subtitulo: "",
    pagina: "src/html/capitulo7.html",
    capa: "src/imagens/cenarios/patio.jpg",
    descricao: "Quarta-feira. A turma escolhe a atração do festival, o Victor do terceiro ano chama a SN de gatinha, e o diário da Sora conta a verdade. O Ren não encosta em ninguém. E mesmo assim é o pior dia até agora."
  }
  ,
  {
    id: "capitulo8",
    numero: 8,
    titulo: "21h14",
    subtitulo: "",
    pagina: "src/html/capitulo8.html",
    capa: "src/imagens/cenarios/patio-gangue.png",
    descricao: "Uma semana depois, o Kaito e o Blake brigam por uma bobagem. Exatamente como na visão. Na noite do festival, a SN segue o Blake até atrás do palco."
  }
  ,
  {
    id: "capitulo9",
    numero: 9,
    titulo: "Sábado com o Caramelo",
    subtitulo: "",
    pagina: "src/html/capitulo9.html",
    capa: "src/imagens/cenarios/rua.png",
    descricao: "Fliperama, cachorro-quente na praça, um pet shop e o pôr do sol na estação. O Victor e o Caramelo. E, na volta, três quarteirões de silêncio com o Kaito."
  }
  ,
  {
    id: "capitulo10",
    numero: 10,
    titulo: "Fofoca",
    subtitulo: "",
    pagina: "src/html/capitulo10.html",
    capa: "src/imagens/cenarios/sala-de-aula.jpg",
    descricao: "A Reina e a Akane chegam na turma, e a Reina quer o Takeo. Uma página de confissões espalha fotos da SN pela escola inteira. E o Kaito pede para ela ficar longe."
  }
  ,
  {
    id: "capitulo11",
    numero: 11,
    titulo: "Água parada",
    subtitulo: "",
    pagina: "src/html/capitulo11.html",
    capa: "src/imagens/cenarios/Laboratório.png",
    descricao: "Um balde de água do aquário, vinte celulares filmando e uma escola inteira rindo. À noite, na rua, a força não aparece. Mas o Kaito aparece."
  }
  ,
  {
    id: "capitulo12",
    numero: 12,
    titulo: "A janela",
    subtitulo: "",
    pagina: "src/html/capitulo12.html",
    capa: "src/imagens/cenarios/corredor.jpg",
    descricao: "O Kaito passa a manhã inteira na janela do corredor. A Hana faz uma conta. A Sayuri diz que o balde não foi ideia dela. E, na sexta, a visita à casa do Takeo ganha uma convidada a mais."
  }
  ,
  {
    id: "capitulo13",
    numero: 13,
    titulo: "Você trouxe duas?",
    subtitulo: "",
    pagina: "src/html/capitulo13.html",
    capa: "src/imagens/cenarios/casa-takeo-sala.png",
    descricao: "Três tipos de bolinho, um pudim que rachou duas vezes e um álbum de fotos com uma menina de joelho ralado. No fim da noite, dois meninos no portão azul querendo levar a SN pra casa."
  }
  ,
  {
    id: "capitulo14",
    numero: 14,
    titulo: "Sábado de meninas",
    subtitulo: "",
    pagina: "src/html/capitulo14.html",
    capa: "src/imagens/cenarios/shopping.png",
    descricao: "Um grupo novo às sete da manhã, um vestido de babado, dois coelhos de pelúcia e a livraria do terceiro andar. E, na escada rolante, a Sayuri com alguém segurando o braço dela."
  }
  ,
  {
    id: "capitulo15",
    numero: 15,
    titulo: "Umas coisas sobre aquele menino",
    subtitulo: "",
    pagina: "src/html/capitulo15.html",
    capa: "src/imagens/cenarios/Terraço-Bloco-B.png",
    descricao: "Uma ligação que fez a Reina chorar de costas. E uma avó que quer contar umas coisas sobre aquele menino."
  }
  ,
  {
    id: "capitulo16",
    numero: 16,
    titulo: "A cadeira",
    subtitulo: "",
    pagina: "src/html/capitulo16.html",
    capa: "src/imagens/cenarios/rua-padaria.png",
    descricao: "Quatro marcas roxas num pulso, a Sayuri na cadeira do clube e uma noite no escuro na casa da Reina. Na sexta de manhã, do outro lado da rua, alguém passa e só olha."
  }
  ,
  {
    id: "capitulo17",
    numero: 17,
    titulo: "Meia palavra",
    subtitulo: "",
    pagina: "src/html/capitulo17.html",
    capa: "src/imagens/cenarios/galpao.png",
    descricao: "Uma placa com meia palavra, uma janela onde ninguém fica de costas e uma sexta em que os meninos somem depois do intervalo. Dessa vez ela chega antes da barra."
  }
  ,
  {
    id: "capitulo18",
    numero: 18,
    titulo: "A menina do boné",
    subtitulo: "",
    pagina: "src/html/capitulo18.html",
    capa: "src/imagens/cenarios/sala-de-estar.jpg",
    descricao: "Um cano estourado, uma avó no colchão do quarto e uma escola inteira falando da menina do boné. Ninguém sabe quem é. Quase ninguém."
  }
  ,
  {
    id: "capitulo19",
    numero: 19,
    titulo: "Caixote",
    subtitulo: "",
    pagina: "src/html/capitulo19.html",
    capa: "src/imagens/cenarios/patio.jpg",
    descricao: "Uma prova de recuperação, uma bola furada, duzentos caixotes de verdura e um lámen à meia-noite. E um carro preto que sabe o nome do Ryuji."
  }
  ,
  {
    id: "capitulo20",
    numero: 20,
    titulo: "Achados e perdidos",
    subtitulo: "",
    pagina: "src/html/capitulo20.html",
    capa: "src/imagens/cenarios/frente-casa-sn.png",
    descricao: "Um carro que passa devagar, uma cadeira que volta e um boné com uma cebolinha bordada. Ele sabe."
  }
  ,
  {
    id: "capitulo21",
    numero: 21,
    titulo: "Melhor de cinco",
    subtitulo: "",
    pagina: "src/html/capitulo21.html",
    capa: "src/imagens/cenarios/fliperama.png",
    descricao: "Sete horas de espera, uma lan house no beco do mercado e uma personagem que todo mundo acha fraca. Ninguém joga com ela. Ainda."
  }
  ,
  {
    id: "capitulo22",
    numero: 22,
    titulo: "Ronco",
    subtitulo: "",
    pagina: "src/html/capitulo22.html",
    capa: "src/imagens/cenarios/parquinho.png",
    descricao: "Um balanço às cinco, quatro motos do outro lado da rua e um capacete vermelho-escuro com a etiqueta ainda pendurada."
  }
  ,
  {
    id: "capitulo23",
    numero: 23,
    titulo: "Bate na janela",
    subtitulo: "",
    pagina: "src/html/capitulo23.html",
    capa: "src/imagens/cenarios/frente-casa-sn.png",
    descricao: "Pão de queijo às sete, oito pãezinhos às nove e um carro preto que, pela primeira vez, alguém foi lá bater na janela."
  }  ,
  {
    id: "capitulo24",
    numero: 24,
    titulo: "Chuva de sexta",
    subtitulo: "",
    pagina: "src/html/capitulo24.html",
    capa: "src/imagens/cenarios/sala-de-estar.jpg",
    descricao: "Um lámen que ela não pediu, uma parede de chuva e uma enfermeira que já costurou aquele supercílio. Sono leve. Muito leve."
  }  ,
  {
    id: "capitulo25",
    numero: 25,
    titulo: "Dívida de honra",
    subtitulo: "",
    pagina: "src/html/capitulo25.html",
    capa: "src/imagens/cenarios/praca-perto-da-estaçao.png",
    descricao: "Um interrogatório na lan, um cachorro contra um pato, um sorvete de chiclete com milho e um sobrenome que ninguém devia ter ouvido."
  }  ,
  {
    id: "capitulo26",
    numero: 26,
    titulo: "Cabine 4",
    subtitulo: "",
    pagina: "src/html/capitulo26.html",
    capa: "src/imagens/cenarios/sala-de-karaoke.png",
    descricao: "Uma trança na escada do corrimão solto, uma mesa de cinco, duas cabines que viram uma só. E uma mensagem com quatro palavras."
  }  ,
  {
    id: "capitulo27",
    numero: 27,
    titulo: "Cinco convites",
    subtitulo: "",
    pagina: "src/html/capitulo27.html",
    capa: "src/imagens/cenarios/Bicicletário-do-Hospital.png",
    descricao: "Um plano no bicicletário e cinco mensagens para a mesma tarde. Escolher é estar viva."
  }  ,
  {
    id: "capitulo28",
    numero: 28,
    titulo: "Último andar",
    subtitulo: "",
    pagina: "src/html/capitulo28.html",
    capa: "src/imagens/cenarios/Garagem.png",
    descricao: "Um bilhete em papel caro, uma ameaça educada e um último andar sem teto. Ele não vira. Ele espera."
  }  ,
  {
    id: "capitulo29",
    numero: 29,
    titulo: "Peão de volta",
    subtitulo: "",
    pagina: "src/html/capitulo29.html",
    capa: "src/imagens/cenarios/Garagem.png",
    descricao: "Uma dívida rasgada em oito pedaços, uma frase sobre quem fica de costas e uma pergunta que só alguém da praça do balanço saberia fazer."
  }  ,
  {
    id: "capitulo30",
    numero: 30,
    titulo: "Sem soco",
    subtitulo: "",
    pagina: "src/html/capitulo30.html",
    capa: "src/imagens/cenarios/loja-lamen.png",
    descricao: "Uma demissão, uma blitz, uma livraria fechada e um aviso de despejo. Ninguém levou um soco. E a gangue está caindo."
  },
  {
    id: "capitulo31",
    numero: 31,
    titulo: "Seja homem",
    subtitulo: "",
    pagina: "src/html/capitulo31.html",
    capa: "src/imagens/cenarios/fliperama.png",
    descricao: "O Takeo chega com o braço quebrado e diz que caiu da escada. Ela acha o fliperama da Midorata. E entra sozinha."
  },
  {
    id: "capitulo32",
    numero: 32,
    titulo: "Sábado do caldo",
    subtitulo: "",
    pagina: "src/html/capitulo32.html",
    capa: "src/imagens/cenarios/esquina-loja-de-lamen.png",
    descricao: "Se a lojinha está morrendo em silêncio, a gente faz barulho. Duzentas e oitenta e sete assinaturas. E um carro preto que não para."
  },
  {
    id: "capitulo33",
    numero: 33,
    titulo: "Por partes",
    subtitulo: "",
    pagina: "src/html/capitulo33.html",
    capa: "src/imagens/cenarios/Garagem.png",
    descricao: "Uma segunda normal. Até as nove da noite, quando chega uma mensagem com uma palavra só: \"Desce.\""
  },
  {
    id: "capitulo34",
    numero: 34,
    titulo: "Dia do inspetor",
    subtitulo: "",
    pagina: "src/html/capitulo34.html",
    capa: "src/imagens/cenarios/corredor.jpg",
    descricao: "Um inspetor geral, um cachorro fugido, um armário pequeno demais e um chão molhado. E cinco meninos no mesmo dia."
  },
  {
    id: "capitulo35",
    numero: 35,
    titulo: "Serena",
    subtitulo: "",
    pagina: "src/html/capitulo35.html",
    capa: "src/imagens/cenarios/portao-escola.png",
    descricao: "Um segundo no hall que ninguém comenta. E uma menina do segundo ano que quer saber o que você é dele."
  },
  {
    id: "capitulo36",
    numero: 36,
    titulo: "Bacia hidrográfica",
    subtitulo: "",
    pagina: "src/html/capitulo36.html",
    capa: "src/imagens/cenarios/clube-de-leitura.png",
    descricao: "Dez páginas para amanhã, um yakisoba sem cenoura e um lápis partido ao meio."
  },
  {
    id: "capitulo37",
    numero: 37,
    titulo: "Gotas de chocolate",
    subtitulo: "",
    pagina: "src/html/capitulo37.html",
    capa: "src/imagens/cenarios/cozinha.png",
    descricao: "Quatro e meia da manhã, farinha no teto e sete cookies tortos. São meus."
  },
  {
    id: "capitulo38",
    numero: 38,
    titulo: "Forno de verdade",
    subtitulo: "",
    pagina: "src/html/capitulo38.html",
    capa: "src/imagens/cenarios/loja-lamen.png",
    descricao: "Doze minutos na frente do forno, um timer, um Ryuji e um torneio na lan house."
  },
  {
    id: "capitulo39",
    numero: 39,
    titulo: "Um mês inteiro",
    subtitulo: "",
    pagina: "src/html/capitulo39.html",
    capa: "src/imagens/cenarios/sala-de-aula.jpg",
    descricao: "Um bento de três andares, suco de uva e trinta e um dias de chuva."
  },
  {
    id: "capitulo40",
    numero: 40,
    titulo: "Casa grande demais",
    subtitulo: "",
    pagina: "src/html/capitulo40.html",
    capa: "src/imagens/cenarios/sala-reina.png",
    descricao: "A avó viajou, a casa é da Reina, a Serena se molhou de ponche e ninguém dorme em quarto vazio."
  },
  {
    id: "capitulo41",
    numero: 41,
    titulo: "Inocente",
    subtitulo: "",
    pagina: "src/html/capitulo41.html",
    capa: "src/imagens/cenarios/portao-escola.png",
    descricao: "Um pedido de desculpas com plateia, sete caixas no caminho e uma foto com um braço de jaqueta preta."
  },
  {
    id: "capitulo42",
    numero: 42,
    titulo: "Capacete vermelho",
    subtitulo: "",
    pagina: "src/html/capitulo42.html",
    capa: "src/imagens/cenarios/portao-escola.png",
    descricao: "Uma palavra no celular, uma fivela que ninguém fecha e o capacete vermelho na cabeça errada."
  },
  {
    id: "capitulo43",
    numero: 43,
    titulo: "A pé",
    subtitulo: "",
    pagina: "src/html/capitulo43.html",
    capa: "src/imagens/cenarios/rua.png",
    descricao: "Uma placa descoberta, um hall vazio às sete e vinte minutos a pé. E as mãos que não obedecem mais."
  },
  {
    id: "capitulo44",
    numero: 44,
    titulo: "Quatro da manhã",
    subtitulo: "",
    pagina: "src/html/capitulo44.html",
    capa: "src/imagens/cenarios/lanhouse.png",
    descricao: "Um mouse, um fone, um banco, uma parede. E a foto que ela ainda não tinha visto."
  },
  {
    id: "capitulo45",
    numero: 45,
    titulo: "Material de licitação",
    subtitulo: "",
    pagina: "src/html/capitulo45.html",
    capa: "src/imagens/cenarios/sala-de-aula.jpg",
    descricao: "Uma conversa no hall, quatro gizes quebrados e um cabo de guerra que ninguém explica."
  },
  {
    id: "capitulo46",
    numero: 46,
    titulo: "Feira de talentos",
    subtitulo: "",
    pagina: "src/html/capitulo46.html",
    capa: "src/imagens/cenarios/patio.jpg",
    descricao: "Uma queda de braço, uma mesa de ferro e um dueto em que só um canta."
  },
  {
    id: "capitulo47",
    numero: 47,
    titulo: "Então decide",
    subtitulo: "",
    pagina: "src/html/capitulo47.html",
    capa: "src/imagens/cenarios/frente-casa-sn.png",
    descricao: "Um ultimato às sete, um armário torto e um pedido feito longe da escola."
  },
  {
    id: "capitulo48",
    numero: 48,
    titulo: "Arranhões",
    subtitulo: "",
    pagina: "src/html/capitulo48.html",
    capa: "src/imagens/cenarios/lanhouse.png",
    descricao: "Três meninos arranhados, um líder sem nenhum arranhão e uma calçada vazia."
  },
  {
    id: "capitulo49",
    numero: 49,
    titulo: "A resposta inteira",
    subtitulo: "",
    pagina: "src/html/capitulo49.html",
    capa: "src/imagens/cenarios/frente-casa-sn.png",
    descricao: "Um bolo de emergência, um balanço que range e uma resposta às sete da noite."
  },
  {
    id: "capitulo50",
    numero: 50,
    titulo: "Começar do zero",
    subtitulo: "",
    pagina: "src/html/capitulo50.html",
    capa: "src/imagens/cenarios/sala-de-aula.jpg",
    descricao: "Um “posso?”, um “parabéns” doce demais e um livro que não pode ser pulado."
  },
  {
    id: "capitulo51",
    numero: 51,
    titulo: "Vapor",
    subtitulo: "",
    pagina: "src/html/capitulo51.html",
    capa: "src/imagens/cenarios/loja-lamen.png",
    descricao: "Um cabelo penteado pela metade, um joelho encostado e uma cozinha pequena demais para dois."
  }
];

/* Próximo capítulo, ainda não escrito: aparece bloqueado */
const CapituloEmBreve = {
  numero: 52,
  titulo: "Capítulo 52",
  capa: "src/imagens/cenarios/sala-de-aula.jpg",
  descricao: "A carteira perto da porta continua vazia."
};

const capituloPorId = id => Capitulos.find(c => c.id === id);
