import { DetectivePuzzle } from '../types/detective-puzzle';

export const detectivePuzzles: DetectivePuzzle[] = [
  {
    id: 1,
    title: 'O Mistério do Livro Desaparecido',
    story: 'Na biblioteca da escola, a professora Ana descobriu que o seu livro favorito de histórias desapareceu durante o intervalo. Três alunos estavam na biblioteca nesse momento. Ajuda a professora a descobrir quem levou o livro.',
    difficulty: 'fácil',
    clues: [
      {
        id: 1,
        text: 'O livro é sobre dinossauros e tem uma capa verde brilhante.'
      },
      {
        id: 2,
        text: 'A Mariana disse que esteve a ler um livro sobre planetas durante todo o intervalo.'
      },
      {
        id: 3,
        text: 'O João tem um livro verde na mochila, mas diz que é o seu livro de ciências.'
      },
      {
        id: 4,
        text: 'A Rita tem um irmão mais novo que adora dinossauros e ela queria fazer-lhe uma surpresa.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Mariana',
        description: 'Gosta muito de astronomia e sempre traz livros sobre o espaço.',
        isGuilty: false
      },
      {
        id: 2,
        name: 'João',
        description: 'É muito aplicado e está sempre a estudar para as aulas de ciências.',
        isGuilty: false
      },
      {
        id: 3,
        name: 'Rita',
        description: 'Tem um irmão mais novo que adora dinossauros e gosta de lhe contar histórias.',
        isGuilty: true
      }
    ],
    hint: 'Pensa em quem poderia querer um livro sobre dinossauros e porquê.',
    solution: 'A Rita levou o livro porque queria fazer uma surpresa ao irmão mais novo que adora dinossauros. Ela não tinha más intenções, mas devia ter pedido autorização primeiro!'
  },
  {
    id: 2,
    title: 'O Caso do Lanche Misterioso',
    story: 'O Tiago trouxe um delicioso bolo de chocolate para o lanche, guardou-o no seu cacifo e quando voltou para lanchar, metade do bolo tinha desaparecido! Quem terá sido o guloso que não resistiu ao bolo?',
    difficulty: 'fácil',
    clues: [
      {
        id: 1,
        text: 'O cacifo do Tiago fica ao lado do cacifo do Pedro e da Joana.'
      },
      {
        id: 2,
        text: 'Quando o Tiago voltou, encontrou migalhas de chocolate perto do cacifo.'
      },
      {
        id: 3,
        text: 'O Pedro esteve a jogar futebol durante todo o intervalo, como confirmam vários colegas.'
      },
      {
        id: 4,
        text: 'A Joana tem no seu casaco pequenas manchas de chocolate.'
      },
      {
        id: 5,
        text: 'A Clara passou pelo corredor dos cacifos a caminho da biblioteca.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Pedro',
        description: 'Gosta muito de doces, mas esteve a jogar futebol durante todo o intervalo.',
        isGuilty: false
      },
      {
        id: 2,
        name: 'Joana',
        description: 'Tem o cacifo ao lado do Tiago e tem manchas de chocolate no casaco.',
        isGuilty: true
      },
      {
        id: 3,
        name: 'Clara',
        description: 'Passou pelo corredor dos cacifos a caminho da biblioteca.',
        isGuilty: false
      }
    ],
    hint: 'Procura por evidências físicas que possam ligar alguém ao crime.',
    solution: 'A Joana não resistiu ao delicioso bolo de chocolate. As manchas no seu casaco e o facto de o seu cacifo estar ao lado do Tiago são provas suficientes!'
  },
  {
    id: 3,
    title: 'O Enigma do Recreio',
    story: 'Alguém desenhou com giz no chão do recreio e a Diretora da escola quer saber quem foi, pois o desenho ocupa quase todo o espaço onde os alunos costumam jogar. Quem terá sido o artista?',
    difficulty: 'médio',
    clues: [
      {
        id: 1,
        text: 'O desenho tem vários planetas e naves espaciais, muito colorido e bem feito.'
      },
      {
        id: 2,
        text: 'Foram encontradas caixas de giz colorido no caixote do lixo perto do recreio.'
      },
      {
        id: 3,
        text: 'O Miguel tem as mãos limpas, mas o seu casaco tem várias manchas coloridas.'
      },
      {
        id: 4,
        text: 'A Ana é conhecida pelo seu talento para desenhar, especialmente planetas e naves espaciais.'
      },
      {
        id: 5,
        text: 'O Diogo foi visto a comprar giz colorido na papelaria da escola no dia anterior.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Miguel',
        description: 'Tem manchas coloridas no casaco, mas as mãos estão limpas.',
        isGuilty: false
      },
      {
        id: 2,
        name: 'Ana',
        description: 'É muito talentosa a desenhar, especialmente temas de espaço.',
        isGuilty: true
      },
      {
        id: 3,
        name: 'Diogo',
        description: 'Comprou giz colorido na papelaria da escola no dia anterior.',
        isGuilty: false
      }
    ],
    hint: 'Pensa no tipo de desenho e quem teria talento para fazê-lo.',
    solution: 'A Ana foi a artista do recreio. O estilo do desenho (planetas e naves) combina com o que ela gosta de desenhar, e ela tem o talento necessário para fazer um desenho grande e bem feito.'
  },
  {
    id: 4,
    title: 'O Mistério das Pegadas na Neve',
    story: 'Durante a noite, nevou muito na escola. De manhã, a professora Leonor descobriu que alguém entrou na sala de aula e deixou uma prenda misteriosa na sua secretária. Havia pegadas na neve que começavam no portão e iam até à sala. Quem terá sido o visitante secreto?',
    difficulty: 'médio',
    clues: [
      {
        id: 1,
        text: 'As pegadas eram pequenas, como as de uma criança.'
      },
      {
        id: 2,
        text: 'A prenda estava embrulhada em papel colorido e tinha um cartão que dizia "Para a melhor professora do mundo".'
      },
      {
        id: 3,
        text: 'Dentro da caixa estava um desenho feito à mão e uma maçã vermelha.'
      },
      {
        id: 4,
        text: 'O Tomás disse que chegou à escola muito cedo porque o pai o trouxe antes de ir trabalhar.'
      },
      {
        id: 5,
        text: 'A Sofia tem sempre maçãs vermelhas no lanche e adora desenhar.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Tomás',
        description: 'Um aluno que chega sempre muito cedo à escola porque o pai o deixa antes de ir trabalhar.',
        isGuilty: false
      },
      {
        id: 2,
        name: 'Sofia',
        description: 'Uma aluna que adora a professora Leonor e que sempre traz maçãs vermelhas para o lanche.',
        isGuilty: true
      },
      {
        id: 3,
        name: 'Funcionário António',
        description: 'O funcionário que abre a escola todas as manhãs.',
        isGuilty: false
      }
    ],
    hint: 'Pensa no que estava dentro da prenda e quem poderia ter esses objetos.',
    solution: 'A Sofia é a visitante misteriosa. Ela deixou a prenda porque adora a professora Leonor, e as pistas mostram que ela sempre traz maçãs vermelhas e gosta de desenhar. As pegadas pequenas também indicam que foi uma criança.'
  },
  {
    id: 5,
    title: 'O Caso do Bolo Desaparecido',
    story: 'A avó Matilde fez um delicioso bolo de chocolate para o lanche da família. Ela deixou-o a arrefecer na janela da cozinha enquanto foi ao quintal apanhar limões. Quando voltou, metade do bolo tinha desaparecido! Os únicos que estavam em casa eram o avô Alfredo, a prima Inês e o gato Bigodes.',
    difficulty: 'fácil',
    clues: [
      {
        id: 1,
        text: 'O avô Alfredo estava a dormir na sua poltrona e ressonava alto.'
      },
      {
        id: 2,
        text: 'A prima Inês diz que esteve no quarto a ler o seu livro novo.'
      },
      {
        id: 3,
        text: 'Há migalhas de chocolate no chão da cozinha até ao quarto da Inês.'
      },
      {
        id: 4,
        text: 'O gato Bigodes estava deitado ao sol no tapete da entrada.'
      },
      {
        id: 5,
        text: 'A Inês tem manchas de chocolate nos dedos e no seu livro novo.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Avô Alfredo',
        description: 'Estava a dormir na poltrona e ressonava alto.',
        isGuilty: false
      },
      {
        id: 2,
        name: 'Prima Inês',
        description: 'Diz que esteve no quarto a ler, mas tem manchas de chocolate nos dedos.',
        isGuilty: true
      },
      {
        id: 3,
        name: 'Gato Bigodes',
        description: 'Estava deitado ao sol no tapete da entrada.',
        isGuilty: false
      }
    ],
    hint: 'Repara nas migalhas no chão e nas manchas nos dedos da Inês.',
    solution: 'A prima Inês é a culpada. As migalhas de chocolate no chão formavam um caminho até ao seu quarto, e ela tinha manchas de chocolate nos dedos e no livro. Ela comeu o bolo enquanto lia o seu livro novo!'
  },
  {
    id: 6,
    title: 'O Enigma da Janela Partida',
    story: 'A janela da sala de música da escola foi partida durante o intervalo, e o diretor quer descobrir quem foi o responsável. Ninguém admite ter partido a janela, mas três alunos estavam perto do local na hora do incidente.',
    difficulty: 'médio',
    clues: [
      {
        id: 1,
        text: 'A janela foi partida por uma bola.'
      },
      {
        id: 2,
        text: 'O Daniel estava a jogar futebol com os amigos, mas diz que a sua bola nunca saiu do campo.'
      },
      {
        id: 3,
        text: 'A Maria diz que estava a saltar à corda perto da sala de música.'
      },
      {
        id: 4,
        text: 'O Lucas tinha acabado de sair da aula de basquetebol e levava a bola debaixo do braço.'
      },
      {
        id: 5,
        text: 'Foram encontrados restos de giz branco na bola que partiu a janela.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Daniel',
        description: 'Estava a jogar futebol no campo, longe da sala de música.',
        isGuilty: false
      },
      {
        id: 2,
        name: 'Maria',
        description: 'Estava a saltar à corda perto da sala de música.',
        isGuilty: true
      },
      {
        id: 3,
        name: 'Lucas',
        description: 'Tinha acabado de sair da aula de basquetebol.',
        isGuilty: false
      }
    ],
    hint: 'Pensa no giz branco e onde ele pode ser encontrado no recreio da escola.',
    solution: 'A Maria é a responsável. Ela estava a saltar à corda perto da sala de música, e as cordas de saltar muitas vezes têm as pontas cobertas de giz para não escorregarem das mãos. Ela provavelmente atirou a corda para cima e acidentalmente bateu na janela, partindo-a.'
  },
  {
    id: 7,
    title: 'A Caixa Misteriosa do Sótão',
    story: 'Durante a limpeza do sótão da escola, os alunos encontraram uma caixa antiga e trancada. Na tampa havia uma mensagem: "Só pode ser aberta por quem resolver o enigma." Dentro, diz a lenda, há um tesouro deixado por um antigo professor.',
    difficulty: 'difícil',
    clues: [
      {
        id: 1,
        text: 'O enigma escrito na caixa diz: "Sou um lugar onde histórias vivem, mas não tenho páginas nem palavras."'
      },
      {
        id: 2,
        text: 'A caixa tem o símbolo de um livro aberto e uma estrela.'
      },
      {
        id: 3,
        text: 'Nos arquivos da escola, descobriu-se que havia um professor muito querido que adorava contar histórias às crianças.'
      },
      {
        id: 4,
        text: 'Esse professor costumava levar os alunos a um lugar especial da escola para as sessões de contos.'
      },
      {
        id: 5,
        text: 'No teto desse lugar especial, há estrelas pintadas que brilham no escuro.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Biblioteca',
        description: 'Um lugar cheio de livros onde as histórias são guardadas.',
        isGuilty: false
      },
      {
        id: 2,
        name: 'Teatro da Escola',
        description: 'Um palco onde peças e espetáculos são apresentados.',
        isGuilty: true
      },
      {
        id: 3,
        name: 'Sala dos Professores',
        description: 'Onde os professores se reúnem e guardam seus materiais.',
        isGuilty: false
      }
    ],
    hint: 'Pensa num lugar onde as histórias ganham vida sem necessidade de páginas ou palavras escritas.',
    solution: 'O lugar correto é o Teatro da Escola. É um lugar onde as histórias ganham vida através das atuações (sem páginas nem palavras escritas). O símbolo da estrela representa as luzes do palco ou as estrelas pintadas no teto do teatro. O antigo professor era provavelmente um amante de teatro e histórias dramatizadas.'
  },
  {
    id: 8,
    title: 'O Desaparecimento da Mascote da Turma',
    story: 'Pinguim, o hamster mascote da turma 3ºA, desapareceu da sua gaiola durante o fim de semana. A gaiola estava fechada, mas vazia, e não havia sinais de como ele poderia ter saído. Três alunos tinham as chaves da sala.',
    difficulty: 'médio',
    clues: [
      {
        id: 1,
        text: 'O Pinguim estava na sua gaiola na sexta-feira quando o último aluno saiu da sala.'
      },
      {
        id: 2,
        text: 'O Rodrigo, o André e a Clara têm cópias da chave porque são os responsáveis por alimentar o hamster nos fins de semana.'
      },
      {
        id: 3,
        text: 'O Rodrigo disse que entrou na sala no sábado de manhã para dar comida ao Pinguim, e ele ainda estava lá.'
      },
      {
        id: 4,
        text: 'O André estava doente e não foi à escola no fim de semana.'
      },
      {
        id: 5,
        text: 'A Clara disse que não pôde ir à escola no fim de semana porque estava a visitar os avós noutra cidade.'
      },
      {
        id: 6,
        text: 'Foram encontrados pelos de hamster e um pouco de serradura no bolso do casaco do Rodrigo.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Rodrigo',
        description: 'Diz que viu o hamster no sábado, mas tem pelos de hamster no casaco.',
        isGuilty: true
      },
      {
        id: 2,
        name: 'André',
        description: 'Estava doente em casa durante todo o fim de semana.',
        isGuilty: false
      },
      {
        id: 3,
        name: 'Clara',
        description: 'Estava a visitar os avós noutra cidade durante o fim de semana.',
        isGuilty: false
      }
    ],
    hint: 'Procura pistas físicas que possam ligar alguém ao hamster.',
    solution: 'O Rodrigo levou o Pinguim para casa. Ele tinha pelos de hamster e serradura da gaiola no bolso do casaco, o que prova que ele manuseou o hamster. Ele provavelmente queria cuidar do Pinguim em casa durante o fim de semana e não contou a ninguém.'
  },
  {
    id: 9,
    title: 'O Mistério do Recreio Pintado',
    story: 'Os alunos chegaram à escola numa segunda-feira e descobriram que o muro do recreio estava todo pintado com desenhos coloridos. A diretora está a tentar descobrir quem são os artistas misteriosos antes de decidir se os vai aplaudir pela criatividade ou repreender pela falta de autorização.',
    difficulty: 'médio',
    clues: [
      {
        id: 1,
        text: 'Os desenhos no muro são muito bonitos e coloridos, mostrando cenas da natureza e animais.'
      },
      {
        id: 2,
        text: 'Foram encontradas várias latas de tinta spray vazias no caixote do lixo perto do muro.'
      },
      {
        id: 3,
        text: 'A Matilde tem as mãos manchadas com tinta azul e verde, mas diz que é da aula de pintura de sexta-feira.'
      },
      {
        id: 4,
        text: 'O Francisco e o Duarte são conhecidos por gostar muito de arte urbana e têm cadernos cheios de desenhos semelhantes aos do muro.'
      },
      {
        id: 5,
        text: 'O guarda noturno disse que viu três crianças no recreio no domingo à tarde, mas como estavam longe, não conseguiu identificá-las.'
      },
      {
        id: 6,
        text: 'Uma vizinha da escola tirou uma fotografia da sua janela que mostra três crianças perto do muro: duas com cabelo escuro e uma com cabelo loiro.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Matilde',
        description: 'Tem manchas de tinta nas mãos e cabelo loiro.',
        isGuilty: true
      },
      {
        id: 2,
        name: 'Francisco',
        description: 'Gosta de arte urbana e tem cabelo escuro.',
        isGuilty: true
      },
      {
        id: 3,
        name: 'Duarte',
        description: 'Amigo do Francisco, também tem cabelo escuro e adora desenhar.',
        isGuilty: true
      },
      {
        id: 4,
        name: 'Joana',
        description: 'Está sempre a organizar atividades artísticas na escola.',
        isGuilty: false
      }
    ],
    hint: 'O guarda viu três crianças, e a foto mostra duas com cabelo escuro e uma com cabelo loiro.',
    solution: 'Os responsáveis são a Matilde, o Francisco e o Duarte. As manchas de tinta nas mãos da Matilde não poderiam ser da sexta-feira (já teriam saído), e ela tem cabelo loiro. O Francisco e o Duarte têm cabelo escuro e conhecimentos de arte urbana, correspondendo à descrição das crianças vistas na foto da vizinha.'
  },
  {
    id: 10,
    title: 'O Segredo do Diário Perdido',
    story: 'Um diário foi encontrado na biblioteca da escola com histórias fantásticas sobre um tesouro escondido no parque da cidade. Ninguém sabe a quem pertence, mas as iniciais "M.S." estão escritas na capa. Quem será o autor destas fantásticas aventuras?',
    difficulty: 'fácil',
    clues: [
      {
        id: 1,
        text: 'As histórias no diário mencionam um cão chamado Rex e uma bicicleta vermelha.'
      },
      {
        id: 2,
        text: 'Há desenhos de mapas do parque da cidade com um X marcando um local específico perto do lago.'
      },
      {
        id: 3,
        text: 'A Mariana Silva tem um cão chamado Rex e costuma andar de bicicleta vermelha.'
      },
      {
        id: 4,
        text: 'O Martim Santos é conhecido por contar histórias de tesouros, mas não tem animais de estimação.'
      },
      {
        id: 5,
        text: 'A Marta Sequeira adora escrever, mas raramente vai ao parque porque tem alergia a pólenes.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Mariana Silva',
        description: 'Tem um cão chamado Rex e uma bicicleta vermelha.',
        isGuilty: true
      },
      {
        id: 2,
        name: 'Martim Santos',
        description: 'Gosta de inventar histórias de tesouros.',
        isGuilty: false
      },
      {
        id: 3,
        name: 'Marta Sequeira',
        description: 'Adora escrever, mas tem alergia a pólenes.',
        isGuilty: false
      }
    ],
    hint: 'Procura por pistas que correspondam às iniciais "M.S." e aos detalhes específicos mencionados no diário.',
    solution: 'O diário pertence à Mariana Silva. As iniciais "M.S." correspondem ao seu nome, ela tem um cão chamado Rex e uma bicicleta vermelha, exatamente como descrito nas histórias do diário. Além disso, ela frequenta o parque, onde o tesouro imaginário estaria escondido.'
  },
  {
    id: 11,
    title: 'O Misterioso Caso do Almoço Desaparecido',
    story: 'No refeitório da escola, o Miguel descobriu que o seu almoço desapareceu da sua lancheira. Tinha uma sandes especial que a sua mãe preparou com muito carinho. O Miguel suspeita de três colegas que estavam à sua volta antes do intervalo.',
    difficulty: 'fácil',
    clues: [
      {
        id: 1,
        text: 'A lancheira do Miguel estava no cabide ao lado da sala de aula antes do intervalo.'
      },
      {
        id: 2,
        text: 'O Pedro foi visto a passar pelos cabides a caminho da casa de banho.'
      },
      {
        id: 3,
        text: 'A Ana tem o seu próprio almoço, que inclui as suas comidas favoritas.'
      },
      {
        id: 4,
        text: 'O Gonçalo disse que não tinha almoço hoje porque se esqueceu em casa.'
      },
      {
        id: 5,
        text: 'A auxiliar viu alguém com altura parecida com a do Gonçalo perto dos cabides.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Pedro',
        description: 'Passou pelos cabides a caminho da casa de banho.',
        isGuilty: false
      },
      {
        id: 2,
        name: 'Ana',
        description: 'Trouxe o seu próprio almoço com as suas comidas favoritas.',
        isGuilty: false
      },
      {
        id: 3,
        name: 'Gonçalo',
        description: 'Disse que se esqueceu do almoço em casa.',
        isGuilty: true
      }
    ],
    hint: 'Pensa em quem teria motivos para tirar o almoço de outra pessoa.',
    solution: 'O Gonçalo foi o responsável. Ele mentiu sobre ter-se esquecido do almoço, foi visto por uma auxiliar perto dos cabides, e era o único que não tinha almoço próprio.'
  },
  {
    id: 12,
    title: 'O Mistério da Sala Desarrumada',
    story: 'A professora Margarida entrou na sala e encontrou a sua secretária toda desarrumada. Alguém tinha mexido nos seus livros e materiais. Isto aconteceu durante o intervalo grande, quando a sala estava vazia. Três alunos tinham permissão para entrar na sala durante o intervalo.',
    difficulty: 'médio',
    clues: [
      {
        id: 1,
        text: 'Foram encontradas migalhas de bolacha na secretária.'
      },
      {
        id: 2,
        text: 'O Bernardo ficou na sala a terminar um trabalho de matemática.'
      },
      {
        id: 3,
        text: 'A Mafalda entrou para buscar o seu estojo que tinha esquecido.'
      },
      {
        id: 4,
        text: 'O David entrou na sala para deixar um recado da diretora.'
      },
      {
        id: 5,
        text: 'Apenas as fichas de matemática foram reviradas na secretária.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Bernardo',
        description: 'Ficou na sala a terminar um trabalho de matemática.',
        isGuilty: true
      },
      {
        id: 2,
        name: 'Mafalda',
        description: 'Entrou para buscar o seu estojo que tinha esquecido.',
        isGuilty: false
      },
      {
        id: 3,
        name: 'David',
        description: 'Entrou na sala para deixar um recado da diretora.',
        isGuilty: false
      }
    ],
    hint: 'Presta atenção ao que foi mexido na secretária e quem teria interesse nisso.',
    solution: 'O Bernardo é o culpado. Ele estava a terminar um trabalho de matemática e aproveitou para procurar as respostas nas fichas da professora. As migalhas de bolacha também indicam que ele esteve a comer enquanto mexia nos papéis.'
  },
  {
    id: 13,
    title: 'O Caso do Boneco de Peluche Perdido',
    story: 'A Carolina perdeu o seu ursinho de peluche favorito durante uma visita de estudo ao Jardim Zoológico. Ela tem a certeza que o tinha quando chegaram, mas quando estavam a voltar para o autocarro, percebeu que já não estava com ela. Três locais foram visitados antes de voltarem.',
    difficulty: 'fácil',
    clues: [
      {
        id: 1,
        text: 'Quando visitaram a área dos macacos, a Carolina tirou uma fotografia com o ursinho.'
      },
      {
        id: 2,
        text: 'No recinto das girafas, as crianças comeram o lanche e muitas tiraram as mochilas.'
      },
      {
        id: 3,
        text: 'Depois de verem os leões, a Carolina disse que estava a chover e guardou algumas coisas na mochila.'
      },
      {
        id: 4,
        text: 'Um funcionário do zoo disse que não encontrou nenhum peluche perto dos macacos nem dos leões.'
      },
      {
        id: 5,
        text: 'Um colega lembra-se de ver a Carolina com o ursinho quando estavam a ver as girafas.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Zona dos Macacos',
        description: 'O primeiro local visitado na visita de estudo.',
        isGuilty: false
      },
      {
        id: 2,
        name: 'Recinto das Girafas',
        description: 'Onde as crianças pararam para lanchar.',
        isGuilty: true
      },
      {
        id: 3,
        name: 'Jaula dos Leões',
        description: 'O último local visitado antes de voltarem para o autocarro.',
        isGuilty: false
      }
    ],
    hint: 'Pensa em que momento a Carolina pode ter deixado cair o ursinho sem perceber.',
    solution: 'O ursinho foi perdido no recinto das girafas. Foi o único local onde confirmaram que a Carolina tinha o ursinho e onde as crianças tiraram as mochilas para comer. Provavelmente, quando guardou as coisas depois de lanchar, esqueceu-se do ursinho.'
  },
  {
    id: 14,
    title: 'O Enigma do Giz Colorido',
    story: 'A professora Beatriz deixou uma caixa nova de giz colorido na sala de aula na sexta-feira. Na segunda-feira, quando chegou, descobriu que alguém tinha usado todos os gizes vermelhos durante o fim de semana. Apenas três pessoas tinham chaves da sala nesse período.',
    difficulty: 'médio',
    clues: [
      {
        id: 1,
        text: 'O senhor António, o funcionário da limpeza, esteve na escola no sábado de manhã.'
      },
      {
        id: 2,
        text: 'A professora Sofia, de música, usou a sala no domingo para preparar uma apresentação.'
      },
      {
        id: 3,
        text: 'O diretor Paulo passou pela sala no domingo à tarde para verificar se estava tudo em ordem.'
      },
      {
        id: 4,
        text: 'No quadro, ainda havia restos de notas musicais desenhadas com giz.'
      },
      {
        id: 5,
        text: 'O funcionário da limpeza diz que limpou o quadro no sábado e estava completamente limpo.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'António',
        description: 'Funcionário da limpeza que esteve na escola no sábado.',
        isGuilty: false
      },
      {
        id: 2,
        name: 'Sofia',
        description: 'Professora de música que usou a sala no domingo.',
        isGuilty: true
      },
      {
        id: 3,
        name: 'Paulo',
        description: 'Diretor que passou pela sala no domingo à tarde.',
        isGuilty: false
      }
    ],
    hint: 'Pensa no que estava desenhado no quadro e quem poderia ter feito esses desenhos.',
    solution: 'A professora Sofia é a responsável. Ela usou a sala no domingo para preparar uma apresentação de música, e foram encontradas notas musicais ainda desenhadas no quadro. O quadro estava limpo no sábado, o que significa que os desenhos foram feitos depois disso.'
  },
  {
    id: 15,
    title: 'A Janela Partida do Ginásio',
    story: 'Durante a aula de educação física, uma das janelas do ginásio apareceu partida. O professor Rui não sabe quem foi o responsável, mas suspeita de três alunos que estavam a jogar perto da janela.',
    difficulty: 'médio',
    clues: [
      {
        id: 1,
        text: 'A janela foi partida por uma bola durante a aula de educação física.'
      },
      {
        id: 2,
        text: 'Três alunos estavam a jogar com bolas perto da janela: o Gustavo com uma bola de basquetebol, o Daniel com uma bola de futebol, e a Leonor com uma bola de voleibol.'
      },
      {
        id: 3,
        text: 'Foram encontrados pedaços de borracha preta no chão perto da janela partida.'
      },
      {
        id: 4,
        text: 'O Daniel foi visto a chutar a bola com muita força várias vezes durante a aula.'
      },
      {
        id: 5,
        text: 'A Leonor disse que viu uma bola a bater na janela, mas não conseguiu ver qual era.'
      },
      {
        id: 6,
        text: 'No vidro partido há uma marca redonda do tamanho de uma bola de basquetebol.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Gustavo',
        description: 'Estava a jogar com uma bola de basquetebol perto da janela.',
        isGuilty: true
      },
      {
        id: 2,
        name: 'Daniel',
        description: 'Estava a jogar com uma bola de futebol e a chutar com muita força.',
        isGuilty: false
      },
      {
        id: 3,
        name: 'Leonor',
        description: 'Estava a jogar com uma bola de voleibol e viu uma bola a bater na janela.',
        isGuilty: false
      }
    ],
    hint: 'Pensa no tamanho da marca no vidro e nas marcas encontradas no chão.',
    solution: 'O Gustavo partiu a janela com a bola de basquetebol. A marca no vidro tinha o tamanho de uma bola de basquetebol, e os pedaços de borracha preta no chão são consistentes com as marcas de uma bola de basquetebol, que geralmente é preta.'
  },
  {
    id: 16,
    title: 'O Mistério do Desenho Assinado',
    story: 'A professora de arte encontrou um desenho muito bonito na sala, mas sem nome. Ela quer descobrir quem foi o artista talentoso para elogiar o trabalho. Três alunos disseram que não foi nenhum deles, mas a professora tem certeza que foi um deles.',
    difficulty: 'fácil',
    clues: [
      {
        id: 1,
        text: 'O desenho mostra um castelo com muitos detalhes e cores vivas.'
      },
      {
        id: 2,
        text: 'O Ricardo diz que esteve a desenhar animais marinhos durante toda a aula.'
      },
      {
        id: 3,
        text: 'A cadeira onde o desenho foi encontrado estava onde a Rita se sentou na aula anterior.'
      },
      {
        id: 4,
        text: 'O Tiago teve de sair mais cedo da aula porque tinha consulta no médico.'
      },
      {
        id: 5,
        text: 'Na mochila da Rita, há lápis de cor iguais aos que foram usados no desenho.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Ricardo',
        description: 'Afirma que esteve a desenhar animais marinhos na aula.',
        isGuilty: false
      },
      {
        id: 2,
        name: 'Rita',
        description: 'Sentou-se na cadeira onde o desenho foi encontrado na aula anterior.',
        isGuilty: true
      },
      {
        id: 3,
        name: 'Tiago',
        description: 'Saiu mais cedo da aula para ir a uma consulta médica.',
        isGuilty: false
      }
    ],
    hint: 'Pensa em onde o desenho foi encontrado e que materiais foram usados.',
    solution: 'A Rita é a artista do desenho. O desenho foi encontrado na cadeira onde ela se sentou na aula anterior, e ela tem os mesmos lápis de cor que foram usados no desenho. Provavelmente esqueceu-se de assinar ou deixou o desenho para trás sem perceber.'
  },
  {
    id: 17,
    title: 'O Caso do Prémio Perdido',
    story: 'A escola organizou um concurso de talentos e o prémio (um vale-presente) foi colocado na secretária do diretor. No dia seguinte, o vale tinha desaparecido. O diretor reviu as câmaras de segurança e viu que três pessoas entraram no seu gabinete quando ele não estava.',
    difficulty: 'difícil',
    clues: [
      {
        id: 1,
        text: 'A secretária Maria entrou para deixar uns documentos importantes.'
      },
      {
        id: 2,
        text: 'O professor Joaquim entrou para verificar o calendário escolar.'
      },
      {
        id: 3,
        text: 'A funcionária Teresa entrou para limpar a sala.'
      },
      {
        id: 4,
        text: 'As câmaras mostram que a secretária Maria não se aproximou da mesa do diretor.'
      },
      {
        id: 5,
        text: 'O professor Joaquim esteve muito perto da mesa, mas as suas mãos estavam sempre visíveis.'
      },
      {
        id: 6,
        text: 'A Teresa levava um carrinho de limpeza e esteve a limpar a mesa do diretor.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Maria',
        description: 'Secretária que entrou para deixar documentos.',
        isGuilty: false
      },
      {
        id: 2,
        name: 'Joaquim',
        description: 'Professor que verificou o calendário escolar.',
        isGuilty: false
      },
      {
        id: 3,
        name: 'Teresa',
        description: 'Funcionária que limpou a sala.',
        isGuilty: true
      }
    ],
    hint: 'Pensa em quem teve acesso direto à mesa do diretor e poderia esconder algo facilmente.',
    solution: 'A funcionária Teresa é a responsável. Ela teve acesso direto à mesa do diretor enquanto a limpava e tinha um carrinho de limpeza onde poderia esconder facilmente o vale-presente. As outras pessoas ou não se aproximaram da mesa ou tinham as mãos sempre visíveis.'
  },
  {
    id: 18,
    title: 'O Enigma da Mochila Trocada',
    story: 'No fim das aulas, o André não encontrou a sua mochila azul no cabide onde a tinha deixado. Em vez disso, estava lá uma mochila verde muito parecida, mas com material escolar de outra pessoa. Ele precisa descobrir quem pegou a sua mochila por engano.',
    difficulty: 'fácil',
    clues: [
      {
        id: 1,
        text: 'A mochila verde tem o nome "Bruno" escrito no interior.'
      },
      {
        id: 2,
        text: 'O Bruno da turma 4ºB tem uma mochila azul hoje, mas normalmente usa uma verde.'
      },
      {
        id: 3,
        text: 'A Carla da turma 4ºA também tem uma mochila azul e o seu cabide é perto do André.'
      },
      {
        id: 4,
        text: 'O Diogo da turma 3ºC diz que viu alguém com uma mochila azul a sair apressadamente da escola.'
      },
      {
        id: 5,
        text: 'A auxiliar diz que o Bruno parecia confuso quando estava a buscar a sua mochila.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Bruno',
        description: 'Da turma 4ºB, hoje tem uma mochila azul mas normalmente usa uma verde.',
        isGuilty: true
      },
      {
        id: 2,
        name: 'Carla',
        description: 'Da turma 4ºA, tem uma mochila azul e o seu cabide é perto do André.',
        isGuilty: false
      },
      {
        id: 3,
        name: 'Diogo',
        description: 'Da turma 3ºC, viu alguém a sair com uma mochila azul.',
        isGuilty: false
      }
    ],
    hint: 'Pensa em quem tem uma mochila verde e pode ter confundido com uma azul.',
    solution: 'O Bruno trocou as mochilas por engano. A mochila verde tem o nome dele escrito no interior, ele normalmente usa uma mochila verde mas hoje tem uma azul, e a auxiliar viu-o confuso ao buscar a sua mochila. Ele deve ter confundido a mochila do André com a sua.'
  },
  {
    id: 19,
    title: 'O Mistério do Trabalho de Casa Molhado',
    story: 'A Professora Luísa recebeu o trabalho de casa do Filipe todo molhado e com as respostas borradas. O Filipe explicou que alguém deve ter derramado água na sua mesa quando ele saiu para o intervalo. Três colegas estavam sentados perto da sua mesa.',
    difficulty: 'médio',
    clues: [
      {
        id: 1,
        text: 'A mesa do Filipe fica ao lado da janela, que estava aberta durante o intervalo.'
      },
      {
        id: 2,
        text: 'A Beatriz esteve a beber água de uma garrafa perto da mesa do Filipe.'
      },
      {
        id: 3,
        text: 'O Eduardo passou a correr pelo corredor entre as mesas e tropeçou perto da mesa do Filipe.'
      },
      {
        id: 4,
        text: 'A Gabriela diz que viu água a pingar da janela devido à chuva que começou durante o intervalo.'
      },
      {
        id: 5,
        text: 'O chão perto da mesa do Filipe estava seco, sem sinais de água derramada.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Beatriz',
        description: 'Esteve a beber água de uma garrafa perto da mesa do Filipe.',
        isGuilty: false
      },
      {
        id: 2,
        name: 'Eduardo',
        description: 'Passou a correr pelo corredor e tropeçou perto da mesa do Filipe.',
        isGuilty: false
      },
      {
        id: 3,
        name: 'A Chuva',
        description: 'Começou durante o intervalo e água estava a pingar da janela aberta.',
        isGuilty: true
      }
    ],
    hint: 'Considera onde estava a mesa do Filipe e o que aconteceu durante o intervalo.',
    solution: 'A chuva foi a responsável pelo trabalho molhado. A mesa do Filipe ficava ao lado da janela aberta, começou a chover durante o intervalo, e a Gabriela viu água a pingar da janela. Não foi culpa de nenhum colega, mas sim do tempo.'
  },
  {
    id: 20,
    title: 'O Caso das Bolachas Desaparecidas',
    story: 'A Marta trouxe um pacote de bolachas especiais para partilhar com os amigos após o almoço. Deixou o pacote na sua mochila dentro da sala enquanto todos foram almoçar. Quando voltaram, o pacote estava vazio. Apenas três pessoas voltaram à sala durante o almoço.',
    difficulty: 'médio',
    clues: [
      {
        id: 1,
        text: 'O Samuel voltou para buscar o seu livro de leitura e ficou apenas alguns minutos.'
      },
      {
        id: 2,
        text: 'A Joana voltou para tomar o remédio que guarda na sua mochila.'
      },
      {
        id: 3,
        text: 'O professor Nuno entrou para deixar alguns livros novos.'
      },
      {
        id: 4,
        text: 'Foram encontradas migalhas de bolachas na mesa do Samuel.'
      },
      {
        id: 5,
        text: 'O Samuel tem doença celíaca e não pode comer bolachas normais.'
      },
      {
        id: 6,
        text: 'A Joana foi vista a escovar os dentes no banheiro logo após voltar da sala de aula.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Samuel',
        description: 'Voltou para buscar um livro e tem doença celíaca.',
        isGuilty: false
      },
      {
        id: 2,
        name: 'Joana',
        description: 'Voltou para tomar remédio e escovou os dentes depois.',
        isGuilty: true
      },
      {
        id: 3,
        name: 'Professor Nuno',
        description: 'Entrou para deixar livros novos.',
        isGuilty: false
      }
    ],
    hint: 'Pensa no que cada pessoa fez depois de sair da sala.',
    solution: 'A Joana comeu as bolachas. Ela voltou à sala supostamente para tomar remédio, mas depois foi vista a escovar os dentes, provavelmente para esconder as evidências de ter comido as bolachas. O Samuel não poderia comê-las devido à sua doença celíaca, apesar das migalhas na sua mesa (que a Joana pode ter deixado ao sentar-se lá).'
  },
  {
    id: 21,
    title: 'O Enigma do Quadro Apagado',
    story: 'A turma do 5º ano estava a preparar uma apresentação importante com informações escritas no quadro. Quando voltaram do intervalo, descobriram que alguém tinha apagado tudo. O professor quer descobrir quem foi o responsável entre os três alunos que ficaram perto da sala.',
    difficulty: 'médio',
    clues: [
      {
        id: 1,
        text: 'O Guilherme ficou na biblioteca, que fica no corredor oposto à sala de aula.'
      },
      {
        id: 2,
        text: 'A Inês ficou no recreio a jogar à bola com os amigos durante todo o intervalo.'
      },
      {
        id: 3,
        text: 'O Lucas diz que esteve na casa de banho durante o intervalo todo porque não se estava a sentir bem.'
      },
      {
        id: 4,
        text: 'A funcionária Dona Rosa viu o Lucas no corredor da sala de aula durante o intervalo.'
      },
      {
        id: 5,
        text: 'Foram encontradas marcas de pó de giz nas mãos do Lucas.'
      },
      {
        id: 6,
        text: 'A biblioteca tem registos de quem entra e sai, e o Guilherme esteve lá durante todo o intervalo.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Guilherme',
        description: 'Diz que esteve na biblioteca o tempo todo.',
        isGuilty: false
      },
      {
        id: 2,
        name: 'Inês',
        description: 'Esteve a jogar à bola no recreio com os amigos.',
        isGuilty: false
      },
      {
        id: 3,
        name: 'Lucas',
        description: 'Diz que esteve na casa de banho, mas foi visto no corredor.',
        isGuilty: true
      }
    ],
    hint: 'Pensa em quem foi visto perto da sala de aula e tem evidências físicas.',
    solution: 'O Lucas apagou o quadro. Ele mentiu sobre estar na casa de banho o tempo todo, foi visto pela funcionária no corredor da sala de aula, e tinha pó de giz nas mãos - prova de que mexeu no apagador do quadro.'
  },
  {
    id: 22,
    title: 'O Misterioso Caso das Flores Cortadas',
    story: 'As flores do jardim da escola, que estavam a ser cultivadas para um projeto de ciências, foram encontradas cortadas. A professora Isabel quer descobrir quem foi o responsável por este ato.',
    difficulty: 'difícil',
    clues: [
      {
        id: 1,
        text: 'As flores foram cortadas com uma tesoura, deixando cortes limpos e precisos.'
      },
      {
        id: 2,
        text: 'Três alunos foram vistos perto do jardim durante o intervalo.'
      },
      {
        id: 3,
        text: 'A Helena tinha uma tesoura na sua mochila para o projeto de artes.'
      },
      {
        id: 4,
        text: 'O Francisco entrou na sala com terra nos sapatos após o intervalo.'
      },
      {
        id: 5,
        text: 'A Raquel foi vista a apanhar algo do chão perto do jardim.'
      },
      {
        id: 6,
        text: 'Foi encontrado um pequeno ramo de flores escondido na mochila do Francisco.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Helena',
        description: 'Tinha uma tesoura na mochila para o projeto de artes.',
        isGuilty: false
      },
      {
        id: 2,
        name: 'Francisco',
        description: 'Entrou com terra nos sapatos e tinha flores na mochila.',
        isGuilty: true
      },
      {
        id: 3,
        name: 'Raquel',
        description: 'Foi vista a apanhar algo do chão perto do jardim.',
        isGuilty: false
      }
    ],
    hint: 'Procura por evidências diretas que liguem alguém às flores cortadas.',
    solution: 'O Francisco cortou as flores. Ele tinha terra nos sapatos depois de pisar o jardim e, mais importante, tinha um ramo das flores desaparecidas escondido na sua mochila. A Helena tinha uma tesoura, mas não há provas de que a usou no jardim, e a Raquel apenas apanhou algo do chão.'
  },
  {
    id: 23,
    title: 'O Mistério do Caderno Rasgado',
    story: 'A Clara encontrou o seu caderno de matemática com várias páginas rasgadas. Ela tem certeza que o caderno estava intacto quando o deixou na sala durante o almoço. Quem teria rasgado as páginas do seu caderno?',
    difficulty: 'fácil',
    clues: [
      {
        id: 1,
        text: 'As páginas rasgadas continham respostas para exercícios difíceis que a professora tinha mandado para casa.'
      },
      {
        id: 2,
        text: 'O Paulo senta-se ao lado da Clara e está a ter dificuldades em matemática.'
      },
      {
        id: 3,
        text: 'A Lara viu o Paulo mexer na mochila da Clara durante o almoço.'
      },
      {
        id: 4,
        text: 'O Manuel é o melhor amigo do Paulo e diz que esteve com ele durante todo o almoço.'
      },
      {
        id: 5,
        text: 'Foram encontrados pedaços de papel de caderno no caixote do lixo perto da mesa do Paulo.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Paulo',
        description: 'Senta-se ao lado da Clara e tem dificuldades em matemática.',
        isGuilty: true
      },
      {
        id: 2,
        name: 'Lara',
        description: 'Viu o Paulo mexer na mochila da Clara.',
        isGuilty: false
      },
      {
        id: 3,
        name: 'Manuel',
        description: 'Melhor amigo do Paulo, diz que esteve sempre com ele.',
        isGuilty: false
      }
    ],
    hint: 'Pensa em quem teria motivos para tirar as respostas dos exercícios de matemática.',
    solution: 'O Paulo rasgou as páginas do caderno. Ele tem dificuldades em matemática, foi visto a mexer na mochila da Clara durante o almoço, e foram encontrados pedaços de papel de caderno no caixote perto da sua mesa. Provavelmente queria copiar as respostas dos exercícios difíceis.'
  },
  {
    id: 24,
    title: 'O Caso do Relógio Desaparecido',
    story: 'Depois da aula de educação física, o Afonso descobriu que o seu relógio novo tinha desaparecido do seu pulso. Ele lembra-se de tê-lo tirado e colocado no banco antes de começar a jogar basquetebol. Quem poderá ter pegado o relógio?',
    difficulty: 'médio',
    clues: [
      {
        id: 1,
        text: 'O João saiu mais cedo da aula porque se sentiu mal.'
      },
      {
        id: 2,
        text: 'A Sofia esteve sentada no banco durante toda a aula porque estava lesionada.'
      },
      {
        id: 3,
        text: 'O Marco foi o último a sair do ginásio depois da aula.'
      },
      {
        id: 4,
        text: 'A Sofia tem um relógio muito parecido com o do Afonso.'
      },
      {
        id: 5,
        text: 'O professor viu alguém mexer nas coisas no banco, mas não conseguiu identificar quem foi.'
      },
      {
        id: 6,
        text: 'O João foi visto a usar um relógio igual ao do Afonso no dia seguinte.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'João',
        description: 'Saiu mais cedo da aula e foi visto com um relógio igual no dia seguinte.',
        isGuilty: true
      },
      {
        id: 2,
        name: 'Sofia',
        description: 'Esteve sentada no banco toda a aula e tem um relógio similar.',
        isGuilty: false
      },
      {
        id: 3,
        name: 'Marco',
        description: 'Foi o último a sair do ginásio depois da aula.',
        isGuilty: false
      }
    ],
    hint: 'Pensa em quem foi visto com um relógio igual depois do desaparecimento.',
    solution: 'O João pegou o relógio do Afonso. Ele saiu mais cedo da aula, o que lhe deu a oportunidade perfeita para pegar o relógio sem ser notado. A prova definitiva é que ele foi visto a usar um relógio igual ao do Afonso no dia seguinte.'
  },
  {
    id: 25,
    title: 'O Enigma da Pintura Alterada',
    story: 'Durante a aula de arte, a turma estava a fazer pinturas para uma exposição. Quando a professora voltou após uma breve ausência, descobriu que alguém tinha modificado a pintura da Diana, adicionando rabiscos que estragaram o trabalho. Quem será o responsável?',
    difficulty: 'difícil',
    clues: [
      {
        id: 1,
        text: 'Os rabiscos foram feitos com tinta verde, uma cor que não estava sendo usada pela Diana.'
      },
      {
        id: 2,
        text: 'A Vera estava sentada ao lado da Diana e as duas competiram pelo primeiro lugar no concurso de arte do mês passado.'
      },
      {
        id: 3,
        text: 'O Tomás estava usando tinta verde no seu projeto e tem manchas desta tinta nas mãos.'
      },
      {
        id: 4,
        text: 'A Catarina estava no outro lado da sala e não se levantou durante a ausência da professora.'
      },
      {
        id: 5,
        text: 'A Vera é a única que não tem álibi, pois foi ao lavatório lavar os pincéis durante a ausência da professora.'
      },
      {
        id: 6,
        text: 'O Tomás e a Diana são bons amigos e sempre se ajudam nas aulas de arte.'
      }
    ],
    suspects: [
      {
        id: 1,
        name: 'Vera',
        description: 'Estava sentada ao lado da Diana e foi ao lavatório lavar os pincéis.',
        isGuilty: true
      },
      {
        id: 2,
        name: 'Tomás',
        description: 'Estava usando tinta verde e tem manchas desta tinta nas mãos.',
        isGuilty: false
      },
      {
        id: 3,
        name: 'Catarina',
        description: 'Estava no outro lado da sala e não se levantou.',
        isGuilty: false
      }
    ],
    hint: 'Pensa em quem tinha motivo, oportunidade e não tem álibi verificável.',
    solution: 'A Vera é a responsável por estragar a pintura da Diana. Ela estava sentada ao lado da Diana, tinha uma rivalidade com ela devido ao concurso de arte anterior, e não tem álibi pois supostamente estava no lavatório. Ela aproveitou a ausência da professora para sabotar o trabalho da sua rival.'
  }
];
