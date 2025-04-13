import { DetectivePuzzle } from '../types/detective-puzzle';

export const detectivePuzzles: DetectivePuzzle[] = [
  {
    id: 1,
    title: 'O Mistério do Bolo Desaparecido',
    scenario: `A professora Cláudia preparou um bolo delicioso para a festa de aniversário da Escola de Azenhas do Mar. Ela deixou o bolo na sala dos professores enquanto ia buscar as velas. Quando voltou, o bolo tinha desaparecido!

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
    scenario: `Na Escola de Azenhas do Mar, o professor André descobriu que vários materiais de arte estavam a desaparecer do armário da sala. Faltavam lápis de cor novos, marcadores, e um kit de pintura.

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
    scenario: `Durante o intervalo, alguém desenhou com giz no muro recém-pintado da Escola de Azenhas do Mar. O diretor Ricardo está a investigar quem foi o responsável.

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
    title: 'O Mistério da Carteira Perdida',
    scenario: `No restaurante Buzio em Azenhas do Mar, o senhor Gonçalo perdeu a sua carteira durante o almoço. Ele só notou depois de sair do restaurante. Quando voltou, a carteira não estava no local onde ele tinha almoçado.

    Quatro funcionários estavam a trabalhar naquela zona do restaurante:
    
    Inês disse: "Eu estava a atender as mesas da varanda".
    Márcio disse: "Estava ocupado na cozinha a ajudar o chef".
    André disse: "Eu limpei aquela mesa após o senhor Gonçalo sair, mas não vi nenhuma carteira".
    Bia disse: "Eu estava na receção a atender telefonemas".
    
    O gerente verificou as câmaras e viu que alguém tinha guardado algo no bolso enquanto limpava a mesa do senhor Gonçalo.
    
    Quem apanhou a carteira?`,
    suspects: [
      { id: 1, name: 'Inês', isGuilty: false },
      { id: 2, name: 'Márcio', isGuilty: false },
      { id: 3, name: 'André', isGuilty: true },
      { id: 4, name: 'Bia', isGuilty: false }
    ],
    clues: [
      "O gerente viu nas câmaras alguém a guardar algo no bolso.",
      "André admitiu ter limpo a mesa depois do senhor Gonçalo sair.",
      "Márcio estava na cozinha durante o incidente.",
      "Inês estava a trabalhar na varanda, não na área principal do restaurante."
    ],
    explanation: "André foi quem apanhou a carteira. Ele foi o único que admitiu ter limpo a mesa do senhor Gonçalo, e o gerente viu nas câmaras que a pessoa que limpou a mesa guardou algo no bolso. André mentiu ao dizer que não viu a carteira.",
    difficulty: "fácil"
  },
  {
    id: 5,
    title: 'O Segredo da Praia das Azenhas do Mar',
    scenario: `Um barco de pesca foi danificado durante a noite enquanto estava atracado na Praia das Azenhas do Mar. O proprietário, Denis, encontrou o barco com um furo no casco e está a tentar perceber quem seria o responsável.

    Quatro pessoas foram vistas perto da praia na noite anterior:
    
    Ricardo disse: "Estive a pescar ao pôr-do-sol, mas fui para casa cedo porque começou a ficar frio".
    Marivania disse: "Fui dar um passeio pela praia depois do jantar no restaurante Nortada".
    Tiago disse: "Regressei a casa tarde porque estive no Bar Loureiro até à hora de fechar".
    Cláudia disse: "Estava a tirar fotografias ao luar, mas apenas na parte superior da falésia, nunca desci à praia".
    
    O dono do Bar Loureiro confirma que Tiago esteve lá até às 2h da manhã. Um banhista descobriu uma faca de pesca com as iniciais 'R.S.' perto do barco danificado.
    
    Quem danificou o barco?`,
    suspects: [
      { id: 1, name: 'Ricardo', isGuilty: true },
      { id: 2, name: 'Marivania', isGuilty: false },
      { id: 3, name: 'Tiago', isGuilty: false },
      { id: 4, name: 'Cláudia', isGuilty: false }
    ],
    clues: [
      "Uma faca de pesca com as iniciais 'R.S.' foi encontrada perto do barco.",
      "O dono do Bar Loureiro confirma o álibi de Tiago.",
      "Cláudia nunca desceu à praia, ficou apenas na falésia.",
      "Ricardo disse que foi para casa cedo devido ao frio."
    ],
    explanation: "Ricardo é o culpado. A faca encontrada com as iniciais 'R.S.' indica que ele esteve na praia, apesar de dizer que foi para casa cedo. Os outros suspeitos têm álibis melhores ou não teriam motivo para danificar o barco.",
    difficulty: "médio"
  },
  {
    id: 6,
    title: 'O Roubo no Café das Patrícias',
    scenario: `No Café das Patrícias em Azenhas do Mar, alguém entrou durante a manhã e roubou dinheiro da caixa registadora. A proprietária, Khauani, chegou às 8h e encontrou a caixa aberta, mas a porta não estava forçada.

    Quatro pessoas têm chaves do café:
    
    Hélio, o funcionário da manhã, disse: "Cheguei atrasado hoje, por volta das 8h15, e a Khauani já estava lá".
    Janine, a empregada de limpeza, disse: "Vim ontem à noite limpar, como sempre faço, e tranquei tudo antes de sair às 22h".
    Marivania, a pasteleira, disse: "Cheguei às 7h para fazer as primeiras fornadas, mas tive que sair rapidamente às 7h30 para buscar um ingrediente que faltava".
    Ricardo, o contabilista, disse: "Não vou ao café há três dias, estou a trabalhar a partir de casa".
    
    A câmara da rua mostra que alguém saiu do café às 7h45 com pressa e entrou num carro. Não se consegue identificar a pessoa, apenas que vestia um casaco escuro.
    
    Quem roubou o dinheiro?`,
    suspects: [
      { id: 1, name: 'Hélio', isGuilty: false },
      { id: 2, name: 'Janine', isGuilty: false },
      { id: 3, name: 'Marivania', isGuilty: true },
      { id: 4, name: 'Ricardo', isGuilty: false }
    ],
    clues: [
      "Uma pessoa saiu do café às 7h45 com pressa.",
      "Hélio só chegou depois da proprietária, às 8h15.",
      "Janine esteve no café na noite anterior, não de manhã.",
      "Marivania disse que saiu às 7h30 para buscar ingredientes."
    ],
    explanation: "Marivania é a culpada. Ela disse que saiu às 7h30, mas a câmara mostra alguém a sair às 7h45, o que contradiz a sua história. Ela teve acesso ao café cedo, quando ninguém estava lá, e inventou a desculpa de sair para buscar ingredientes.",
    difficulty: "médio"
  },
  {
    id: 7,
    title: 'O Mistério da Exposição de Arte',
    scenario: `Na exposição de arte da Escola de Azenhas do Mar, um dos quadros de valor sentimental para a professora Inês desapareceu. Era uma pintura feita por uma antiga aluna que agora é artista famosa.

    Quatro pessoas ajudaram a organizar a exposição:
    
    Carlota disse: "Estive a ajudar a colocar as etiquetas nas obras, mas nunca fiquei sozinha na sala".
    Lorena disse: "Eu só ajudei a trazer os cavaletes de manhã, depois fui para a aula de música".
    Gonçalo disse: "Estive a preparar o lanche para o evento, na cantina".
    Santiago disse: "Ajudei a montar a exposição e fui o último a sair da sala, mas tenho certeza que o quadro ainda estava lá".
    
    A funcionária de limpeza, Cláudia, confirma ter visto Santiago a sair da sala de exposições com algo escondido debaixo do casaco.
    
    Quem apanhou o quadro?`,
    suspects: [
      { id: 1, name: 'Carlota', isGuilty: false },
      { id: 2, name: 'Lorena', isGuilty: false },
      { id: 3, name: 'Gonçalo', isGuilty: false },
      { id: 4, name: 'Santiago', isGuilty: true }
    ],
    clues: [
      "Cláudia viu Santiago a sair com algo escondido debaixo do casaco.",
      "Santiago admitiu ser o último a sair da sala.",
      "Carlota nunca esteve sozinha na sala de exposições.",
      "Lorena e Gonçalo não estavam na sala quando o quadro desapareceu."
    ],
    explanation: "Santiago é o culpado. Ele foi o último a sair da sala e a funcionária de limpeza viu-o a esconder algo debaixo do casaco. A sua afirmação de que o quadro ainda estava lá quando saiu contradiz a evidência de Cláudia.",
    difficulty: "fácil"
  },
  {
    id: 8,
    title: 'O Desaparecimento na Praia Grande',
    scenario: `Durante um passeio escolar na Praia Grande, uma mochila com equipamentos desportivos desapareceu. A mochila pertencia à escola e continha bolas, raquetes e outros equipamentos para jogos na praia.

    Quatro professores estavam responsáveis pelos alunos:
    
    André disse: "Estive sempre com o grupo de natação, dentro de água".
    Márcio disse: "Fiquei na zona das toalhas a supervisionar os lanches".
    Tiago disse: "Fui buscar água para todos ao bar da praia e demorei apenas 10 minutos".
    Hélio disse: "Estive a acompanhar as crianças nos jogos de raquetes, longe das mochilas".
    
    Uma turista tirou uma fotografia da praia e, ao rever as imagens mais tarde, notou alguém com uma mochila igual à desaparecida a sair da zona do grupo escolar. A pessoa vestia uma t-shirt azul como a dos professores.
    
    Quem apanhou a mochila?`,
    suspects: [
      { id: 1, name: 'André', isGuilty: false },
      { id: 2, name: 'Márcio', isGuilty: true },
      { id: 3, name: 'Tiago', isGuilty: false },
      { id: 4, name: 'Hélio', isGuilty: false }
    ],
    clues: [
      "Uma fotografia mostra alguém de t-shirt azul a sair com a mochila.",
      "André esteve na água com o grupo de natação.",
      "Tiago esteve ausente por 10 minutos para buscar água.",
      "Márcio disse que ficou na zona das toalhas, onde estavam as mochilas."
    ],
    explanation: "Márcio é o culpado. Ele estava na zona das toalhas, onde ficavam as mochilas. A fotografia mostra alguém de t-shirt azul (como a dos professores) a sair com a mochila, e Márcio era o único que tinha acesso direto às mochilas o tempo todo.",
    difficulty: "médio"
  },
  {
    id: 9,
    title: 'O Caso da Bicicleta Danificada',
    scenario: `Na Escola de Azenhas do Mar, a bicicleta nova do Francisco foi encontrada com os pneus furados no parque de bicicletas. Francisco tinha mostrado a bicicleta aos amigos de manhã, e todos tinham admirado o presente de aniversário.

    Quatro colegas tinham pedido para experimentar a bicicleta, mas Francisco não deixou:
    
    Martim disse: "Passei o intervalo todo a jogar futebol no campo com os outros rapazes".
    Santiago disse: "Estive na biblioteca a terminar o trabalho de ciências".
    Alice disse: "Fiquei na sala de música a ensaiar para o concerto da próxima semana".
    Mariana disse: "Estava na cantina a almoçar com as minhas amigas".
    
    O funcionário Denis viu um dos rapazes perto do parque de bicicletas durante o intervalo, quando todos deveriam estar noutros locais. A professora Bia confirma que Alice esteve na sala de música durante todo o intervalo.
    
    Quem danificou a bicicleta?`,
    suspects: [
      { id: 1, name: 'Martim', isGuilty: false },
      { id: 2, name: 'Santiago', isGuilty: true },
      { id: 3, name: 'Alice', isGuilty: false },
      { id: 4, name: 'Mariana', isGuilty: false }
    ],
    clues: [
      "O funcionário Denis viu um rapaz perto do parque de bicicletas durante o intervalo.",
      "A professora Bia confirma o álibi de Alice.",
      "Martim estava a jogar futebol com outros rapazes, o que pode ser facilmente confirmado.",
      "Santiago disse que estava na biblioteca."
    ],
    explanation: "Santiago é o culpado. Ele mentiu sobre estar na biblioteca, e o funcionário Denis viu um rapaz perto do parque de bicicletas durante o intervalo. Os outros suspeitos têm álibis mais sólidos ou testemunhas que os apoiam.",
    difficulty: "fácil"
  },
  {
    id: 10,
    title: 'O Mistério do Restaurante Nortada',
    scenario: `No restaurante Nortada em Azenhas do Mar, um cliente reclamou que o seu relógio de luxo desapareceu durante o jantar. Ele lembra-se de o ter quando chegou, pois verificou as horas, mas quando foi pagar a conta, o relógio já não estava no seu pulso.

    Quatro funcionários atenderam a sua mesa:
    
    Cláudia, a empregada de mesa, disse: "Servi apenas as entradas e depois fui atender outras mesas".
    Ricardo, o segundo empregado, disse: "Levei o prato principal e mais tarde ajudei-o a escolher a sobremesa".
    Khauani, a gerente, disse: "Fui à mesa apenas uma vez para perguntar se estava tudo bem com a refeição".
    Janine, a responsável pela cobrança, disse: "Só me aproximei da mesa no final para trazer a conta".
    
    O cliente menciona ter tirado o relógio para mostrar a Ricardo quando este elogiou a peça durante o prato principal. Depois disso, o cliente não se lembra de o ter colocado de volta no pulso.
    
    Quem apanhou o relógio?`,
    suspects: [
      { id: 1, name: 'Cláudia', isGuilty: false },
      { id: 2, name: 'Ricardo', isGuilty: true },
      { id: 3, name: 'Khauani', isGuilty: false },
      { id: 4, name: 'Janine', isGuilty: false }
    ],
    clues: [
      "O cliente tirou o relógio para mostrar a Ricardo quando este o elogiou.",
      "Cláudia só serviu as entradas, antes do relógio ser mostrado.",
      "Khauani e Janine aproximaram-se da mesa depois do momento em que o relógio foi visto pela última vez.",
      "Ricardo foi quem demonstrou interesse pelo relógio."
    ],
    explanation: "Ricardo é o culpado. Ele elogiou propositadamente o relógio para fazer o cliente tirá-lo, e depois aproveitou um momento de distração para o apanhar. Os outros funcionários ou não estiveram presentes no momento crítico ou não tiveram a mesma oportunidade.",
    difficulty: "médio"
  },
  {
    id: 11,
    title: 'O Enigma do Livro Raro',
    scenario: `Na nova biblioteca da Escola de Azenhas do Mar, um livro raro sobre a história local desapareceu no dia da inauguração. O livro estava numa vitrine especial, mas quando o diretor Ricardo foi apresentá-lo aos convidados, já não estava lá.

    Quatro pessoas tiveram acesso à sala antes da cerimónia:
    
    Hélio, o bibliotecário, disse: "Verifiquei todos os livros pela manhã e coloquei-os nas respetivas vitrines".
    Tiago, o zelador, disse: "Entrei apenas para limpar as janelas, não me aproximei das vitrines".
    André, o professor de história, disse: "Passei pela sala para ver se tudo estava pronto, mas não mexi em nada".
    Marivania, a decoradora, disse: "Estive a colocar flores nas mesas, mas sempre acompanhada pelo Hélio".
    
    Uma aluna que estava a ajudar na organização viu alguém com um livro debaixo do braço a sair rapidamente da biblioteca, mas não conseguiu identificar quem era. Depois, descobriu-se que Hélio tinha sido visto a discutir com o diretor no dia anterior sobre o valor dos livros históricos.
    
    Quem apanhou o livro?`,
    suspects: [
      { id: 1, name: 'Hélio', isGuilty: true },
      { id: 2, name: 'Tiago', isGuilty: false },
      { id: 3, name: 'André', isGuilty: false },
      { id: 4, name: 'Marivania', isGuilty: false }
    ],
    clues: [
      "Uma aluna viu alguém a sair rapidamente com um livro debaixo do braço.",
      "Hélio foi visto a discutir com o diretor sobre o valor dos livros históricos.",
      "Marivania estava sempre acompanhada por Hélio, então não poderia ter agido sozinha.",
      "Tiago e André não demonstraram interesse especial pelos livros."
    ],
    explanation: "Hélio é o culpado. Ele teve acesso direto aos livros, conhecia o seu valor e tinha tido uma discussão com o diretor sobre o assunto. A aluna viu alguém a sair com um livro, e Hélio, como bibliotecário, não levantaria suspeitas por transportar livros pela escola.",
    difficulty: "médio"
  },
  {
    id: 12,
    title: 'O Desaparecimento na Praia das Maçãs',
    scenario: `Durante uma excursão à Praia das Maçãs, a máquina fotográfica da escola desapareceu. A professora Inês tinha-a utilizado para fotografar os alunos durante as atividades e deixou-a no saco da praia quando foi mergulhar.

    Quatro alunos ficaram responsáveis pelos pertences:
    
    Mariana disse: "Estive a ler um livro debaixo do guarda-sol, não vi nada estranho".
    Lorena disse: "Fui buscar gelados para todos e demorei cerca de 15 minutos".
    Gonçalo disse: "Estive a construir um castelo de areia perto do saco".
    Francisco disse: "Fiquei a ajudar a professora Cláudia com os equipamentos de natação, longe dos sacos".
    
    Um surfista que estava por perto tirou uma fotografia panorâmica da praia e, quando ampliada, vê-se uma das crianças a mexer no saco da professora.
    
    Quem apanhou a máquina fotográfica?`,
    suspects: [
      { id: 1, name: 'Mariana', isGuilty: false },
      { id: 2, name: 'Lorena', isGuilty: false },
      { id: 3, name: 'Gonçalo', isGuilty: true },
      { id: 4, name: 'Francisco', isGuilty: false }
    ],
    clues: [
      "A fotografia do surfista mostra alguém a mexer no saco da professora.",
      "Mariana disse que estava a ler, o que a colocaria em posição de ver o que acontecia.",
      "Lorena esteve ausente durante 15 minutos.",
      "Gonçalo disse que estava perto do saco, a construir um castelo de areia."
    ],
    explanation: "Gonçalo é o culpado. Ele estava perto dos sacos, supostamente a construir um castelo de areia, e a fotografia panorâmica mostra uma criança a mexer no saco da professora. Francisco estava longe dos sacos, Lorena estava ausente, e Mariana provavelmente teria visto algo se estivesse atenta.",
    difficulty: "fácil"
  },
  {
    id: 13,
    title: 'O Mistério do Restaurante Toca do Júlio',
    scenario: `No restaurante Toca do Júlio em Azenhas do Mar, o dono descobriu que alguém estava a alterar as reservas no sistema, fazendo com que clientes chegassem em horários errados e mesas ficassem vazias em horários de pico.

    Quatro funcionários têm acesso ao sistema de reservas:
    
    Márcio, o gerente, disse: "Tenho notado os problemas e estou a tentar encontrar o responsável".
    Bia, a anfitriã, disse: "Trabalho com as reservas todos os dias, mas nunca alterei nada sem autorização".
    Denis, o chefe de sala, disse: "O sistema deve ter algum erro, não creio que seja sabotagem".
    Janine, a nova empregada, disse: "Ainda estou a aprender a usar o sistema e às vezes peço ajuda à Bia".
    
    Depois de uma verificação no log do sistema, descobriu-se que as alterações eram feitas sempre depois do horário de fecho, quando quase ninguém estava no restaurante. Nas câmaras de segurança, vê-se alguém usando o computador da receção tarde da noite, mas não se consegue identificar a pessoa.
    
    Quem estava a alterar as reservas?`,
    suspects: [
      { id: 1, name: 'Márcio', isGuilty: true },
      { id: 2, name: 'Bia', isGuilty: false },
      { id: 3, name: 'Denis', isGuilty: false },
      { id: 4, name: 'Janine', isGuilty: false }
    ],
    clues: [
      "As alterações eram feitas depois do horário de fecho.",
      "Câmaras mostram alguém a usar o computador tarde da noite.",
      "Márcio, como gerente, ficava frequentemente até mais tarde para fechar o restaurante.",
      "Janine ainda está a aprender o sistema e não ficaria sozinha após o horário de fecho."
    ],
    explanation: "Márcio é o culpado. Como gerente, ele tem acesso total ao sistema e frequentemente ficava até tarde, sendo um dos poucos que estariam no restaurante depois do horário de fecho. Ele estava a sabotar o próprio restaurante, provavelmente para prejudicar o dono, com quem poderia ter algum conflito ou para mostrar que era indispensável ao resolver os 'problemas' que ele mesmo criava.",
    difficulty: "difícil"
  },
  {
    id: 14,
    title: 'O Caso das Mensagens Anónimas',
    scenario: `Na Escola de Azenhas do Mar, alguns professores começaram a receber mensagens anónimas desagradáveis por email. As mensagens continham informações que só alguém dentro da escola poderia saber.

    Quatro pessoas tinham acesso ao servidor de email da escola:
    
    Tiago, o técnico de informática, disse: "Fiz uma verificação e não encontrei nada suspeito no sistema".
    Cláudia, a secretária, disse: "Recebo emails de todos, mas nunca teria acesso às palavras-passe".
    Ricardo, o diretor adjunto, disse: "Também recebi algumas dessas mensagens, sou mais uma vítima".
    Marivania, a coordenadora, disse: "Estou a trabalhar com o Tiago para resolver este problema".
    
    Depois de uma investigação mais aprofundada, descobriu-se que as mensagens eram enviadas sempre à mesma hora, durante a reunião semanal de coordenação, quando a maioria dos funcionários estava ocupada. Ricardo mostrou as mensagens que recebeu, mas após análise, percebeu-se que o formato delas era diferente das recebidas pelos outros professores.
    
    Quem estava a enviar as mensagens?`,
    suspects: [
      { id: 1, name: 'Tiago', isGuilty: false },
      { id: 2, name: 'Cláudia', isGuilty: false },
      { id: 3, name: 'Ricardo', isGuilty: true },
      { id: 4, name: 'Marivania', isGuilty: false }
    ],
    clues: [
      "As mensagens eram enviadas durante a reunião semanal de coordenação.",
      "Ricardo afirmou ter recebido mensagens, mas o formato era diferente.",
      "Tiago estava a trabalhar ativamente para resolver o problema.",
      "Cláudia não teria acesso às palavras-passe."
    ],
    explanation: "Ricardo é o culpado. Ele falsificou as mensagens que supostamente recebeu (o formato diferente denuncia isso) para afastar suspeitas. Como diretor adjunto, ele teria acesso privilegiado ao sistema e poderia estar ausente da reunião de coordenação sem levantar suspeitas, aproveitando esse momento para enviar as mensagens anónimas.",
    difficulty: "difícil"
  },
  {
    id: 15,
    title: 'O Enigma da Pensão Sisudo',
    scenario: `Na Pensão Sisudo em Azenhas do Mar, um hóspede relatou que o seu quarto foi arrombado e alguns objetos de valor foram furtados. Não havia sinais de arrombamento na porta, o que sugere que foi usado uma chave.

    Quatro funcionários tinham acesso às chaves reserva:
    
    Khauani, a rececionista da manhã, disse: "Estive na receção o dia todo e ninguém pediu a chave reserva".
    Hélio, o rececionista da noite, disse: "Saí um pouco durante o meu turno para comprar um café, mas a chave esteve sempre no quadro".
    Inês, a governanta, disse: "Limpei o quarto pela manhã, enquanto o hóspede estava a tomar o pequeno-almoço".
    André, o gerente, disse: "Estive reunido no escritório a maior parte do dia".
    
    As câmaras de segurança do corredor mostram alguém com uniforme de funcionário entrando no quarto usando uma chave, mas não é possível identificar o rosto. No entanto, nota-se que a pessoa usa um relógio dourado no pulso direito.
    
    Quem entrou no quarto?`,
    suspects: [
      { id: 1, name: 'Khauani', isGuilty: false },
      { id: 2, name: 'Hélio', isGuilty: false },
      { id: 3, name: 'Inês', isGuilty: false },
      { id: 4, name: 'André', isGuilty: true }
    ],
    clues: [
      "A câmara mostra alguém com uniforme entrando no quarto com uma chave.",
      "A pessoa usava um relógio dourado no pulso direito.",
      "André é conhecido por usar um relógio dourado.",
      "André disse ter estado no escritório, mas não há confirmação disso."
    ],
    explanation: "André é o culpado. As câmaras mostram uma pessoa com uniforme e um relógio dourado no pulso direito, e André é conhecido por usar esse tipo de relógio. Ele teria acesso às chaves reserva como gerente e usou a desculpa de estar reunido no escritório, onde provavelmente não havia testemunhas para confirmar.",
    difficulty: "difícil"
  },
  {
    id: 16,
    title: 'O Mistério da Mercearia Local',
    scenario: `Na pequena mercearia perto da Escola de Azenhas do Mar, o dono Márcio notou que estava a faltar dinheiro da caixa regularmente. Não era muito de cada vez, mas somava uma quantia considerável ao fim do mês.

    Quatro pessoas trabalham na mercearia:
    
    Alice, a caixa de meio período, disse: "Só trabalho três horas por dia, depois das aulas".
    Denis, o repositor, disse: "Raramente mexo na caixa, só quando o Márcio me pede ajuda".
    Janine, a ajudante de fim de semana, disse: "Estou aqui apenas aos sábados e domingos".
    Tiago, o assistente, disse: "Trabalho o dia todo, mas sempre com o Márcio por perto".
    
    Márcio instalou uma câmara discreta e descobriu que o dinheiro desaparecia durante a semana, em pequenas quantias. A filmagem mostra uma mão a tirar notas da caixa quando não havia clientes, mas só se vê parte de uma manga de camisa xadrez.
    
    Quem estava a roubar o dinheiro?`,
    suspects: [
      { id: 1, name: 'Alice', isGuilty: false },
      { id: 2, name: 'Denis', isGuilty: true },
      { id: 3, name: 'Janine', isGuilty: false },
      { id: 4, name: 'Tiago', isGuilty: false }
    ],
    clues: [
      "O dinheiro desaparecia durante a semana, não aos fins de semana.",
      "A câmara mostrou uma mão com uma manga de camisa xadrez.",
      "Denis frequentemente usa camisas xadrez.",
      "Alice só trabalha três horas por dia e Tiago está sempre com Márcio."
    ],
    explanation: "Denis é o culpado. O dinheiro desaparecia durante a semana (eliminando Janine), e a câmara captou uma manga de camisa xadrez, que Denis costuma usar. Além disso, como repositor, ele normalmente não mexeria na caixa, o que poderia permitir que tirasse pequenas quantias sem levantar suspeitas imediatas, ao contrário de Alice e Tiago que lidam com a caixa regularmente.",
    difficulty: "médio"
  },
  {
    id: 17,
    title: 'O Caso do Restaurante O Crôa',
    scenario: `No restaurante O Crôa em Azenhas do Mar, o gerente Hélio descobriu que alguém alterou a receita do famoso prato de bacalhau, reduzindo a quantidade de ingredientes mas mantendo o preço. Os clientes começaram a reclamar que as porções estavam menores.

    Quatro pessoas têm acesso às receitas e aos ingredientes:
    
    André, o chef principal, disse: "Eu criei esta receita e nunca a alteraria sem avisar".
    Bia, a subchef, disse: "Sigo sempre as instruções do chef André".
    Ricardo, o responsável pelas compras, disse: "Adquiro exatamente o que me pedem, na quantidade solicitada".
    Marivania, a proprietária, disse: "Estive ausente nas últimas semanas a tratar de assuntos pessoais".
    
    Após uma verificação no sistema de pedidos, notou-se que a quantidade de bacalhau e azeite comprada diminuiu, mas o número de pratos vendidos continuou o mesmo. Um empregado mencionou ter visto alguém alterar o menu digital depois do horário de fecho.
    
    Quem alterou a receita?`,
    suspects: [
      { id: 1, name: 'André', isGuilty: false },
      { id: 2, name: 'Bia', isGuilty: false },
      { id: 3, name: 'Ricardo', isGuilty: true },
      { id: 4, name: 'Marivania', isGuilty: false }
    ],
    clues: [
      "A quantidade de ingredientes comprados diminuiu.",
      "Um empregado viu alguém a alterar o menu digital depois do fecho.",
      "André é o criador da receita e teria orgulho nela.",
      "Marivania esteve ausente nas últimas semanas."
    ],
    explanation: "Ricardo é o culpado. Como responsável pelas compras, ele podia facilmente reduzir a quantidade de ingredientes adquiridos e alterar a receita no sistema para corresponder às quantidades menores. Ele provavelmente estava a desviar o dinheiro economizado ou a aumentar artificialmente os lucros para impressionar a proprietária ausente.",
    difficulty: "difícil"
  },
  {
    id: 18,
    title: 'O Mistério da Praia das Azenhas do Mar',
    scenario: `Durante um evento comunitário de limpeza da Praia das Azenhas do Mar, o kit especial de análise da água, usado para monitorizar a qualidade ambiental, desapareceu. Era um equipamento valioso doado recentemente à associação local.

    Quatro voluntários estavam responsáveis pelos equipamentos:
    
    Martim disse: "Estive a recolher lixo na zona norte da praia toda a manhã".
    Carlota disse: "Fiquei no posto de informações a orientar os novos voluntários".
    Gonçalo disse: "Ajudei a distribuir luvas e sacos a todos os grupos".
    Santiago disse: "Estive a coordenar as equipas de crianças das escolas".
    
    Um fotógrafo que cobria o evento tem várias fotos que mostram todos os suspeitos em diferentes momentos. Numa das fotos, vê-se uma mochila aberta com algo que parece ser parte do kit de análise.
    
    Quem apanhou o kit de análise?`,
    suspects: [
      { id: 1, name: 'Martim', isGuilty: false },
      { id: 2, name: 'Carlota', isGuilty: false },
      { id: 3, name: 'Gonçalo', isGuilty: true },
      { id: 4, name: 'Santiago', isGuilty: false }
    ],
    clues: [
      "Uma foto mostra uma mochila aberta com parte do kit de análise.",
      "Carlota esteve sempre no posto de informações, que é um local público.",
      "Santiago estava com as crianças, sempre acompanhado por outros adultos.",
      "A mochila na foto pertence a Gonçalo."
    ],
    explanation: "Gonçalo é o culpado. A foto mostra uma mochila com parte do kit, e essa mochila pertence a Gonçalo. Como responsável pela distribuição de materiais, ele tinha acesso fácil ao kit de análise e poderia escondê-lo na sua mochila sem levantar suspeitas, enquanto os outros estavam em locais mais expostos ou acompanhados.",
    difficulty: "médio"
  },
  {
    id: 19,
    title: 'O Enigma do Bar Loureiro',
    scenario: `No Bar Loureiro em Azenhas do Mar, ocorreu um incidente durante uma noite movimentada. A coleção de rótulos antigos que decorava a parede principal foi danificada, com alguns itens raros desaparecidos. O dono, Denis, suspeita que foi um ato deliberado.

    Quatro pessoas estiveram no bar naquela noite:
    
    Tiago, um cliente regular, disse: "Estive sempre sentado ao balcão, qualquer pessoa pode confirmar".
    Cláudia, uma turista, disse: "Era a minha primeira vez no bar, vim apenas apreciar a decoração".
    Inês, uma ex-funcionária, disse: "Passei para cumprimentar os antigos colegas, fiquei por pouco tempo".
    Ricardo, um colecionador conhecido, disse: "Vim beber um copo, não reparei em nenhuma coleção de rótulos".
    
    As câmaras de segurança mostram todos os suspeitos, mas há um período de 3 minutos em que a câmara que filma a parede dos rótulos ficou offline devido a uma queda de energia. Encontrou-se um cartão de visita de um negócio de antiguidades junto ao local do roubo.
    
    Quem danificou e roubou os rótulos?`,
    suspects: [
      { id: 1, name: 'Tiago', isGuilty: false },
      { id: 2, name: 'Cláudia', isGuilty: false },
      { id: 3, name: 'Inês', isGuilty: false },
      { id: 4, name: 'Ricardo', isGuilty: true }
    ],
    clues: [
      "Um cartão de visita de um negócio de antiguidades foi encontrado no local.",
      "Ricardo é um colecionador conhecido.",
      "Ricardo mentiu ao dizer que não reparou na coleção de rótulos.",
      "A câmara ficou offline por 3 minutos, criando uma oportunidade."
    ],
    explanation: "Ricardo é o culpado. Como colecionador, ele teria interesse nos rótulos raros e conhecimento do seu valor. Mentiu ao dizer que não reparou na coleção, quando, sendo colecionador, seria o primeiro a notar. O cartão de visita de um negócio de antiguidades sugere uma conexão com o mercado de colecionáveis, e ele aproveitou a queda de energia que deixou a câmara offline para agir.",
    difficulty: "difícil"
  },
  {
    id: 20,
    title: 'O Mistério das Notas Trocadas',
    scenario: `Na Escola de Azenhas do Mar, alguém alterou as notas do exame final de matemática no sistema informático. Algumas notas foram aumentadas, outras diminuídas, causando confusão entre alunos e professores.

    Quatro pessoas tinham acesso ao sistema de notas:
    
    Márcio, o professor de informática, disse: "Ajudei a configurar o sistema, mas não tenho razão para alterar as notas".
    Khauani, a funcionária administrativa, disse: "Apenas insiro as notas que os professores me entregam".
    Hélio, o professor de matemática, disse: "Encontrei as discrepâncias ao conferir as notas impressas com as do sistema".
    Janine, a assistente de direção, disse: "Tenho acesso ao sistema, mas raramente o utilizo".
    
    Um registo do sistema mostra que as alterações foram feitas num domingo à tarde, quando a escola estava fechada. No entanto, houve uma reunião extraordinária nesse dia para discutir o orçamento do próximo ano letivo.
    
    Quem alterou as notas?`,
    suspects: [
      { id: 1, name: 'Márcio', isGuilty: true },
      { id: 2, name: 'Khauani', isGuilty: false },
      { id: 3, name: 'Hélio', isGuilty: false },
      { id: 4, name: 'Janine', isGuilty: false }
    ],
    clues: [
      "As alterações foram feitas num domingo durante uma reunião extraordinária.",
      "Márcio, como professor de informática, tinha conhecimento avançado do sistema.",
      "Hélio foi quem descobriu as discrepâncias, o que seria contraditório se fosse ele o culpado.",
      "Janine raramente utiliza o sistema, o que tornaria mais difícil manipulá-lo."
    ],
    explanation: "Márcio é o culpado. Como professor de informática que ajudou a configurar o sistema, ele teria o conhecimento técnico para alterar as notas sem deixar rastros óbvios. Aproveitou a reunião de domingo para ter um motivo legítimo para estar na escola quando normalmente estaria fechada, e poderia facilmente afastar-se por um momento para fazer as alterações.",
    difficulty: "difícil"
  },
  {
    id: 21,
    title: 'O Caso do Restaurante Adraga',
    scenario: `No restaurante Adraga em Azenhas do Mar, o dono descobriu que várias garrafas de vinho raro da sua adega privada foram substituídas por garrafas mais baratas com rótulos falsificados. O alarme da adega não foi acionado, o que indica que alguém tinha o código de acesso.

    Quatro pessoas conheciam o código:
    
    André, o sommelier, disse: "Entro na adega diariamente para selecionar os vinhos, mas sempre com autorização".
    Marivania, a gerente, disse: "Só entro na adega para inventário mensal, acompanhada pelo dono".
    Ricardo, o chef, disse: "Ocasionalmente preciso de vinho para cozinhar, mas sempre peço ao André".
    Cláudia, a contabilista, disse: "Nunca entrei na adega, só precisei do código para registar o sistema de alarme".
    
    Uma análise do registo de acessos da adega mostra entradas frequentes fora do horário normal de funcionamento. Um cliente menciona ter recebido, há algumas semanas, um vinho que não correspondia ao pedido, e o sommelier prontamente o substituiu, parecendo nervoso.
    
    Quem trocou as garrafas?`,
    suspects: [
      { id: 1, name: 'André', isGuilty: true },
      { id: 2, name: 'Marivania', isGuilty: false },
      { id: 3, name: 'Ricardo', isGuilty: false },
      { id: 4, name: 'Cláudia', isGuilty: false }
    ],
    clues: [
      "O registo mostra acessos fora do horário normal.",
      "Um cliente recebeu um vinho errado e André ficou nervoso ao substituí-lo.",
      "André é o único que entra na adega diariamente e conhece bem os vinhos.",
      "Marivania sempre está acompanhada pelo dono durante os inventários."
    ],
    explanation: "André é o culpado. Como sommelier, ele tinha conhecimento para identificar os vinhos raros e substituí-los convincentemente. Os registos mostram acessos fora do horário normal, e ele era o único com motivo legítimo para entrar na adega regularmente sem supervisão. O incidente com o cliente revela que ele já estava a servir vinhos trocados e ficou nervoso quando foi quase descoberto.",
    difficulty: "difícil"
  },
  {
    id: 22,
    title: 'O Mistério do Material Escolar',
    scenario: `Na papelaria perto da Escola de Azenhas do Mar, a dona Bia notou que estava a faltar uma quantidade significativa de material escolar premium, como canetas especiais e cadernos importados. As câmaras não mostravam clientes a levar itens sem pagar.

    Quatro pessoas trabalham na papelaria:
    
    Alice, a funcionária de meio período, disse: "Trabalho apenas de manhã, quando a loja está mais movimentada".
    Santiago, o funcionário da tarde, disse: "Geralmente atendo poucos clientes, principalmente depois das aulas".
    Mariana, a responsável pelo inventário, disse: "Faço a verificação do stock todas as sextas-feiras".
    Carlota, a nova estagiária, disse: "Ainda estou a aprender sobre todos os produtos".
    
    Um cliente regular mencionou ter visto um funcionário a colocar material escolar numa mochila pessoal ao final do dia. Os itens desaparecidos não aparecem como vendidos no sistema, mas também não constam como perdas no inventário.
    
    Quem estava a levar o material?`,
    suspects: [
      { id: 1, name: 'Alice', isGuilty: false },
      { id: 2, name: 'Santiago', isGuilty: false },
      { id: 3, name: 'Mariana', isGuilty: true },
      { id: 4, name: 'Carlota', isGuilty: false }
    ],
    clues: [
      "Um cliente viu um funcionário a guardar material numa mochila pessoal.",
      "Os itens não constam como perdas no inventário.",
      "Mariana é responsável pelo inventário todas as sextas-feiras.",
      "Alice trabalha durante o período mais movimentado, com mais testemunhas."
    ],
    explanation: "Mariana é a culpada. Como responsável pelo inventário, ela poderia facilmente omitir os itens roubados dos registos, explicando por que não apareciam como perdas. Ela aproveitava a sua posição de confiança para levar os itens premium e depois ocultava os furtos através da manipulação do inventário que ela mesma controlava.",
    difficulty: "médio"
  },
  {
    id: 23,
    title: 'O Enigma do Café das Patrícias',
    scenario: `O Café das Patrícias em Azenhas do Mar começou a receber críticas online negativas e falsas que afetaram gravemente o movimento de clientes. As críticas mencionavam problemas de higiene e mau atendimento que eram completamente fabricados.

    Quatro pessoas poderiam ter motivos para prejudicar o negócio:
    
    Tiago, o ex-funcionário, disse: "Saí do café há dois meses para estudar no estrangeiro".
    Inês, a dona do café concorrente, disse: "Não preciso prejudicar ninguém, o meu negócio vai bem".
    Hélio, o fornecedor de café cujo contrato não foi renovado, disse: "Tenho muitos outros clientes, um café a menos não me afeta".
    Denis, o vizinho que se queixava do barulho, disse: "Já resolvemos as nossas diferenças, agora fecham mais cedo à noite".
    
    Uma análise técnica descobriu que todas as críticas falsas foram publicadas a partir do mesmo IP, localizado em Azenhas do Mar. Nas redes sociais, uma das pessoas foi vista a comentar sobre a queda no movimento do Café das Patrícias, antes mesmo de isso se tornar público.
    
    Quem publicou as críticas falsas?`,
    suspects: [
      { id: 1, name: 'Tiago', isGuilty: false },
      { id: 2, name: 'Inês', isGuilty: true },
      { id: 3, name: 'Hélio', isGuilty: false },
      { id: 4, name: 'Denis', isGuilty: false }
    ],
    clues: [
      "As críticas vieram do mesmo IP localizado em Azenhas do Mar.",
      "Tiago está no estrangeiro, logo não poderia usar um IP local.",
      "Alguém comentou sobre a queda no movimento antes de se tornar público.",
      "Inês, como dona do café concorrente, beneficiaria diretamente com a situação."
    ],
    explanation: "Inês é a culpada. Embora tenha negado, como dona do café concorrente, ela beneficiaria diretamente com a queda no movimento do Café das Patrícias. O facto de as críticas virem de um IP em Azenhas do Mar elimina Tiago, que está no estrangeiro. Além disso, ela comentou sobre a queda no movimento antes de isso se tornar público, o que sugere que sabia exatamente o que estava a acontecer.",
    difficulty: "difícil"
  },
  {
    id: 24,
    title: 'O Mistério do Jogo de Futebol',
    scenario: `Durante um importante jogo de futebol das crianças de Azenhas do Mar, a taça que seria entregue à equipa vencedora desapareceu do gabinete do diretor da escola. A porta ficou destrancada durante o jogo, já que muitas pessoas entravam e saíam do edifício.

    Quatro pessoas foram vistas perto do gabinete:
    
    Gonçalo, o aluno cujo time perdeu o jogo anterior, disse: "Estava à procura da casa de banho, enganei-me no corredor".
    Francisco, o filho do árbitro, disse: "Fui buscar o kit de primeiros socorros para um colega que se magoou".
    Martim, o capitão da equipa adversária, disse: "Nunca entrei no edifício durante o jogo, estive sempre no campo".
    Lorena, a irmã de um jogador, disse: "Apenas passei pelo corredor para ir buscar água ao bebedouro".
    
    A funcionária Janine viu um jovem com uma mochila azul a sair apressadamente do gabinete. Durante o jogo, ocorreu uma discussão acalorada entre o árbitro e o treinador da equipa da escola.
    
    Quem apanhou a taça?`,
    suspects: [
      { id: 1, name: 'Gonçalo', isGuilty: false },
      { id: 2, name: 'Francisco', isGuilty: true },
      { id: 3, name: 'Martim', isGuilty: false },
      { id: 4, name: 'Lorena', isGuilty: false }
    ],
    clues: [
      "Janine viu um jovem com mochila azul a sair apressadamente do gabinete.",
      "Francisco usa uma mochila azul e admitiu ter entrado no edifício.",
      "Houve uma discussão entre o árbitro (pai de Francisco) e o treinador.",
      "Martim afirma nunca ter entrado no edifício durante o jogo."
    ],
    explanation: "Francisco é o culpado. Ele foi visto com uma mochila azul a sair apressadamente do gabinete do diretor. Como filho do árbitro, que teve uma discussão com o treinador da escola, ele poderia estar a vingar-se pelo pai. A sua desculpa de buscar o kit de primeiros socorros é suspeita, pois esses kits normalmente ficam no campo ou com os treinadores, não no gabinete do diretor.",
    difficulty: "médio"
  },
  {
    id: 25,
    title: 'O Caso da Pensão Desaparecida',
    scenario: `Na Pensão Sisudo em Azenhas do Mar, uma idosa hospedada, a Sra. Khauani, relatou que o envelope com a sua pensão mensal desapareceu do quarto. Ela lembra-se de o ter deixado na gaveta da mesa de cabeceira antes de sair para o pequeno-almoço.

    Quatro pessoas entraram no quarto naquela manhã:
    
    Cláudia, a empregada de limpeza, disse: "Fiz apenas a cama e limpei a casa de banho, não abri gavetas".
    Ricardo, o técnico de manutenção, disse: "Fui verificar uma torneira que pingava, terminei em cinco minutos".
    Marivania, a rececionista, disse: "Entrei para deixar o jornal diário, como a senhora pede sempre".
    Márcio, o novo funcionário, disse: "Levei toalhas limpas, mas a Sra. Khauani ainda estava no quarto quando entrei".
    
    A Sra. Khauani confirma que Márcio trouxe as toalhas enquanto ela ainda estava lá. Uma hóspede do quarto ao lado viu alguém a mexer nas gavetas do quarto quando passou pela porta entreaberta, mas não conseguiu ver quem era.
    
    Quem apanhou o envelope com o dinheiro?`,
    suspects: [
      { id: 1, name: 'Cláudia', isGuilty: false },
      { id: 2, name: 'Ricardo', isGuilty: true },
      { id: 3, name: 'Marivania', isGuilty: false },
      { id: 4, name: 'Márcio', isGuilty: false }
    ],
    clues: [
      "Uma hóspede viu alguém a mexer nas gavetas.",
      "Márcio esteve no quarto enquanto a Sra. Khauani ainda estava lá.",
      "Cláudia afirma não ter aberto gavetas.",
      "Ricardo foi consertar uma torneira, o que poderia ser uma desculpa para entrar no quarto."
    ],
    explanation: "Ricardo é o culpado. A sua tarefa de verificar uma torneira daria a ele poucos minutos sozinho no quarto. A hóspede do quarto ao lado viu alguém a mexer nas gavetas, o que contradiz a afirmação de Cláudia de que não abriu gavetas. Márcio esteve no quarto com a Sra. Khauani presente, e Marivania apenas deixou o jornal, uma tarefa rápida que dificilmente daria tempo para procurar nas gavetas.",
    difficulty: "médio"
  }
];
