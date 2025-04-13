import { DetectivePuzzle } from '../types/detective-puzzle';

export const detectivePuzzles: DetectivePuzzle[] = [
  {
    id: 1,
    title: 'O Mistério do Bolo Desaparecido',
    scenario: `A professora Cláudia preparou um bolo delicioso para a festa de aniversário da escola. Ela deixou o bolo na sala dos professores enquanto ia buscar as velas. Quando voltou, o bolo tinha desaparecido!

    Havia quatro crianças perto da sala naquele momento:
    
    Martim disse: "Eu estava a jogar à bola no pátio com o Francisco".
    Alice disse: "Eu estava na biblioteca a ler um livro".
    Francisco disse: "Sim, eu estava a jogar com o Martim".
    Mariana disse: "Eu estava a ajudar a professora Inês a carregar materiais de arte".
    
    A professora Inês confirma que Mariana esteve com ela o tempo todo. O professor Hélio diz que viu duas crianças a jogar à bola no pátio, mas não se lembra quem eram.
    
    Quem apanhou o bolo?`,
    suspects: [
      { id: 1, name: 'Martim', isGuilty: false },
      { id: 2, name: 'Alice', isGuilty: true },
      { id: 3, name: 'Francisco', isGuilty: false },
      { id: 4, name: 'Mariana', isGuilty: false }
    ],
    clues: [
      "A professora Inês confirma o álibi de Mariana.",
      "O professor Hélio viu duas crianças a jogar à bola, o que confirma o álibi do Martim e do Francisco.",
      "Alice disse que estava na biblioteca, mas não há testemunhas."
    ],
    explanation: "Alice mentiu sobre estar na biblioteca. A bibliotecária Janine confirmou mais tarde que ninguém entrou na biblioteca naquele período. Alice não tinha álibi, enquanto todos os outros tinham.",
    difficulty: "fácil"
  },
  {
    id: 2,
    title: 'O Caso dos Materiais Desaparecidos',
    scenario: `Na Escola Básica de Santo António, o professor André descobriu que vários materiais de arte estavam a desaparecer do armário da sala. Faltavam lápis de cor novos, marcadores, e um kit de pintura.

    Quatro alunos tinham acesso ao armário:
    
    Carlota disse: "Eu só uso os materiais durante as aulas de arte".
    Santiago disse: "Os meus pais compraram-me um kit completo no início do ano, não preciso de mais".
    Gonçalo disse: "Eu nem gosto muito de arte, prefiro matemática".
    Lorena disse: "Talvez os materiais tenham sido guardados noutro armário por engano".
    
    A funcionária Bia notou que um dos alunos esteve a mexer no armário depois das aulas, quando achava que ninguém estava a ver.
    
    Quem apanhou os materiais?`,
    suspects: [
      { id: 1, name: 'Carlota', isGuilty: false },
      { id: 2, name: 'Santiago', isGuilty: false },
      { id: 3, name: 'Gonçalo', isGuilty: false },
      { id: 4, name: 'Lorena', isGuilty: true }
    ],
    clues: [
      "A funcionária Bia viu alguém no armário depois das aulas.",
      "Lorena tentou sugerir que os materiais poderiam estar noutro lugar.",
      "Santiago tem os seus próprios materiais.",
      "Gonçalo não mostra interesse em arte."
    ],
    explanation: "Lorena foi quem apanhou os materiais. Ela tentou desviar as suspeitas sugerindo que os materiais podiam ter sido guardados noutro lugar, enquanto a funcionária Bia confirma ter visto uma menina no armário depois das aulas.",
    difficulty: "médio"
  },
  {
    id: 3,
    title: 'O Enigma do Recreio',
    scenario: `Durante o intervalo, alguém desenhou com giz no muro recém-pintado da escola. O diretor Ricardo está a investigar quem foi o responsável.

    Quatro crianças estavam no recreio naquele momento:
    
    Francisco disse: "Eu estava a jogar às cartas com a Mariana na mesa de piquenique".
    Martim disse: "Eu estive na biblioteca a devolver um livro e depois fui comprar um lanche".
    Alice disse: "Eu não saí da cantina durante todo o intervalo".
    Mariana disse: "Sim, eu e o Francisco estivemos a jogar às cartas o tempo todo".
    
    A professora Marivania viu Martim a sair da biblioteca, mas não tem a certeza se ele foi para o recreio ou para a cantina. A funcionária Khauani confirma que vendeu um lanche a um menino, mas não se lembra quem era.
    
    Quem desenhou no muro?`,
    suspects: [
      { id: 1, name: 'Francisco', isGuilty: false },
      { id: 2, name: 'Martim', isGuilty: true },
      { id: 3, name: 'Alice', isGuilty: false },
      { id: 4, name: 'Mariana', isGuilty: false }
    ],
    clues: [
      "Francisco e Mariana confirmam o álibi um do outro.",
      "A professora Marivania viu Martim a sair da biblioteca.",
      "Alice diz que esteve na cantina o tempo todo.",
      "A funcionária Khauani vendeu um lanche a um menino."
    ],
    explanation: "Martim é o culpado. Ele mencionou ter ido à biblioteca e depois comprado um lanche, mas não explicou quando desenhou no muro. As outras crianças têm álibis mais consistentes. É provável que ele tenha desenhado no muro entre a saída da biblioteca e a ida à cantina.",
    difficulty: "médio"
  },
  {
    id: 4,
    title: 'O Mistério da Secretária do Professor',
    scenario: `O professor Tiago descobriu que alguém esteve a mexer na sua secretária e abriu a gaveta onde guarda os testes. Ele suspeita que alguém queria ver as perguntas do próximo teste de ciências.

    Quatro alunos ficaram na sala depois das aulas:
    
    Lorena disse: "Eu fiquei a limpar o quadro a pedido do professor".
    Martim disse: "Eu estive a terminar o meu trabalho de casa e não me levantei da minha cadeira".
    Carlota disse: "Eu precisava de usar a casa de banho e saí por alguns minutos".
    Santiago disse: "Eu estive a organizar os livros no fundo da sala".
    
    O professor Márcio confirma ter visto Lorena a limpar o quadro quando passou pela sala. A funcionária Bia viu um dos alunos a sair da sala e ir à casa de banho.
    
    Quem mexeu na secretária do professor?`,
    suspects: [
      { id: 1, name: 'Lorena', isGuilty: false },
      { id: 2, name: 'Martim', isGuilty: false },
      { id: 3, name: 'Carlota', isGuilty: true },
      { id: 4, name: 'Santiago', isGuilty: false }
    ],
    clues: [
      "O professor Márcio viu Lorena a limpar o quadro.",
      "Martim afirma não ter se levantado da cadeira.",
      "A funcionária Bia viu um dos alunos a sair da sala.",
      "Santiago esteve no fundo da sala, longe da secretária do professor."
    ],
    explanation: "Carlota é a culpada. Ela disse que foi à casa de banho, dando-lhe a oportunidade de mexer na secretária do professor sem ser vista. Embora a funcionária Bia confirme ter visto alguém sair, Carlota poderia ter mexido na secretária antes ou depois de ir à casa de banho, quando ninguém estava a prestar atenção.",
    difficulty: "difícil"
  },
  {
    id: 5,
    title: 'O Segredo do Lanche Perdido',
    scenario: `No campo de férias da escola, Francisco notou que o seu lanche especial desapareceu da mochila. Era uma sanduíche única que a sua mãe tinha preparado com ingredientes especiais.

    Quatro crianças estavam por perto:
    
    Mariana disse: "Eu estive a jogar às escondidas com a Carlota o tempo todo".
    Alice disse: "Eu não gosto do tipo de sanduíche que o Francisco trazia".
    Gonçalo disse: "Eu estive a ler um livro debaixo daquela árvore".
    Carlota disse: "Sim, eu e a Mariana estivemos a jogar juntas".
    
    O monitor Denis viu duas meninas a jogar às escondidas, confirmando essa parte da história. A monitora Inês estava perto da árvore onde Gonçalo disse estar a ler, mas não tem certeza se o viu lá o tempo todo.
    
    Quem apanhou o lanche?`,
    suspects: [
      { id: 1, name: 'Mariana', isGuilty: false },
      { id: 2, name: 'Alice', isGuilty: false },
      { id: 3, name: 'Gonçalo', isGuilty: true },
      { id: 4, name: 'Carlota', isGuilty: false }
    ],
    clues: [
      "O monitor Denis confirma ter visto Mariana e Carlota a jogar.",
      "Alice diz que não gosta do tipo de sanduíche de Francisco.",
      "A monitora Inês não tem certeza se viu Gonçalo durante todo o tempo.",
      "Mariana e Carlota confirmam o álibi uma da outra."
    ],
    explanation: "Gonçalo é o culpado. Ele disse que esteve a ler debaixo da árvore, mas a monitora Inês não tem certeza se o viu lá o tempo todo. Isso sugere que ele pode ter saído por tempo suficiente para apanhar o lanche de Francisco. Os álibi das outras crianças são mais sólidos.",
    difficulty: "médio"
  }
];
