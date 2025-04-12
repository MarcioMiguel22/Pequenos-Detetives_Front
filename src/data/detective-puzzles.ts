import { Puzzle } from '../types/puzzle';

export const detectivePuzzles: Puzzle[] = [
  {
    id: 1,
    title: 'O Mistério do Lanche Desaparecido',
    question: 'Na sala da turma do 3º ano, o lanche da Maria desapareceu da sua mochila durante o recreio. Maria deixou sua mochila na cadeira enquanto foi brincar lá fora. Quando voltou, seu sanduíche favorito havia sumido! Três colegas estavam na sala durante o recreio: João estava lendo um livro, Ana estava desenhando, e Pedro tinha ido ao banheiro por 5 minutos. Examinando a sala, o pequeno detetive notou migalhas de pão na mesa de Pedro e uma mancha de geleia na sua camiseta. Quem pegou o lanche da Maria?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'João', isCorrect: false },
      { id: 2, text: 'Ana', isCorrect: false },
      { id: 3, text: 'Pedro', isCorrect: true }
    ],
    hint: 'Preste atenção nas migalhas de pão e na mancha de geleia. Quais são as pistas físicas do caso?'
  },
  {
    id: 2,
    title: 'O Caso do Brinquedo Quebrado',
    question: 'O pequeno Luís chegou em casa e encontrou seu robô de brinquedo quebrado no quarto. Ele tinha três irmãos: Miguel (10 anos), Sofia (6 anos) e Tiago (4 anos). O papai perguntou quem quebrou o robô, e cada um disse: Miguel: "Eu não fui, estava jogando futebol no jardim." Sofia: "Eu não quebrei, estava assistindo desenhos na TV." Tiago: "Eu não quebrei, estava dormindo." O pai verificou e confirmou que o Miguel realmente estava jogando futebol, pois suas chuteiras estavam cheias de lama. O programa favorito da Sofia não passou na TV hoje. Quem quebrou o robô de Luís?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Miguel', isCorrect: false },
      { id: 2, text: 'Sofia', isCorrect: true },
      { id: 3, text: 'Tiago', isCorrect: false }
    ],
    hint: 'Verifique se alguma das histórias não confere com a realidade.'
  },
  {
    id: 3,
    title: 'O Enigma do Presente Misterioso',
    question: 'Era aniversário da professora Joana, e ela recebeu três presentes misteriosos na sua mesa: uma caixa vermelha, uma caixa azul e uma caixa verde. Cada caixa tinha um bilhete: Caixa vermelha: "O presente não está na caixa azul." Caixa azul: "O presente está nesta caixa." Caixa verde: "O presente não está aqui." A professora sabe que apenas um dos bilhetes diz a verdade. Em qual caixa está o presente?',
    difficulty: 'difícil',
    answers: [
      { id: 1, text: 'Caixa vermelha', isCorrect: true },
      { id: 2, text: 'Caixa azul', isCorrect: false },
      { id: 3, text: 'Caixa verde', isCorrect: false }
    ],
    hint: 'Tente cada possibilidade: se a caixa vermelha diz a verdade, onde está o presente? E se a azul diz a verdade? E a verde?'
  },
  {
    id: 4,
    title: 'O Código Secreto do Diário',
    question: 'Clara encontrou o diário da sua melhor amiga Beatriz trancado com um código de 3 dígitos. Beatriz deixou três pistas para ajudar Clara a descobrir o código: 1ª pista: "O primeiro número é o dia do meu aniversário." 2ª pista: "O segundo número é a quantidade de livros da série Harry Potter." 3ª pista: "O terceiro número é o número de cores do arco-íris." Clara sabe que Beatriz nasceu no dia 15 de abril. Qual é o código para abrir o diário?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: '157', isCorrect: true },
      { id: 2, text: '158', isCorrect: false },
      { id: 3, text: '756', isCorrect: false }
    ],
    hint: 'A série Harry Potter tem 7 livros e o arco-íris tem 7 cores.'
  },
  {
    id: 5,
    title: 'A Mensagem Inversa',
    question: 'O Clube dos Pequenos Detetives recebeu uma mensagem estranha que dizia: "ÊCOV UOHNAG MU OIÉMRP". Ninguém conseguiu entender, até que Mariana, a mais nova do grupo, notou algo especial. "É só ler de trás para frente!", ela disse. Qual é a mensagem correta?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'VOCÊ PERDEU TUDO', isCorrect: false },
      { id: 2, text: 'VOCÊ GANHOU UM PRÊMIO', isCorrect: true },
      { id: 3, text: 'VOCÊ ACHOU A CHAVE', isCorrect: false }
    ],
    hint: 'Escreva cada letra começando pelo final da mensagem.'
  },
  {
    id: 6,
    title: 'O Mistério da Torneira Gotejante',
    question: 'A família Silva notou que a conta de água estava muito alta. Eles suspeitaram que havia um vazamento em algum lugar da casa. O pai verificou todas as torneiras: a da cozinha estava bem fechada, a do banheiro dos pais também, mas a do banheiro das crianças tinha uma pequena gota caindo a cada 5 segundos. Cada filho disse algo: Rodrigo: "Eu sempre verifico se a torneira está fechada." Júlia: "Eu usei o banheiro por último ontem à noite." Eduardo: "Eu tomei um copo d\'água durante a noite." Sabendo que apenas um dos filhos está mentindo, quem deixou a torneira aberta?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Rodrigo', isCorrect: true },
      { id: 2, text: 'Júlia', isCorrect: false },
      { id: 3, text: 'Eduardo', isCorrect: false }
    ],
    hint: 'Se Rodrigo sempre verifica se a torneira está fechada, como ela poderia estar gotejando?'
  },
  {
    id: 7,
    title: 'O Sumiço do Último Biscoito',
    question: 'A mãe de Gabriela fez biscoitos de chocolate. Ela deixou o pote na cozinha com 3 biscoitos antes de sair para o trabalho. Quando voltou, só havia 2 biscoitos. Na casa estavam Gabriela e suas duas amigas, Patrícia e Renata, que tinham vindo estudar. Cada uma disse: Gabriela: "Eu não comi o biscoito, eu estava estudando matemática o tempo todo." Patrícia: "Eu não comi, acabei de chegar quando você entrou." Renata: "Eu não comi, eu sou alérgica a chocolate." A mãe notou que havia migalhas de chocolate no livro de matemática. Quem comeu o biscoito?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Gabriela', isCorrect: true },
      { id: 2, text: 'Patrícia', isCorrect: false },
      { id: 3, text: 'Renata', isCorrect: false }
    ],
    hint: 'Preste atenção às migalhas no livro de matemática. Como elas foram parar lá?'
  },
  {
    id: 8,
    title: 'O Animal de Estimação Perdido',
    question: 'O hamster da escola, Bolinha, desapareceu de sua gaiola durante o intervalo. Três alunos foram vistos perto da gaiola antes do desaparecimento: Fernando, Mariana e Lucas. A professora encontrou pelo de hamster nas seguintes situações: Na mochila de Fernando, um pouco de serragem da gaiola. No bolso do casaco de Mariana, que está pendurado no cabide. Nas mãos de Lucas, que acabaram de ser lavadas, mas ainda têm um pelo. Após investigar mais, a professora descobriu que Fernando sempre traz lanche de casa em uma caixinha que ele guarda na mochila. Lucas tem alergia a pelos de animais e sempre lava as mãos depois de tocá-los. Quem pegou o Bolinha?',
    difficulty: 'difícil',
    answers: [
      { id: 1, text: 'Fernando', isCorrect: false },
      { id: 2, text: 'Mariana', isCorrect: true },
      { id: 3, text: 'Lucas', isCorrect: false }
    ],
    hint: 'Pense sobre por que há pelos no casaco de Mariana e se alguém teria razões para não pegar o hamster.'
  },
  {
    id: 9,
    title: 'A Pegada Misteriosa',
    question: 'Após uma forte chuva, apareceu uma pegada estranha no jardim da escola. As crianças estavam curiosas para saber que animal tinha passado por ali. A pegada tinha 5 dedos e era do tamanho de uma mão de criança. Três alunos deram suas opiniões: Bianca: "Foi um cachorro, meu cachorro tem patas desse tamanho." Bruno: "Foi um gato, os gatos têm 5 dedos nas patas da frente." Tomás: "Foi um pássaro grande, como uma garça." A professora de ciências examinou e disse que apenas um aluno estava correto. De quem foi a pegada?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Um cachorro', isCorrect: false },
      { id: 2, text: 'Um gato', isCorrect: true },
      { id: 3, text: 'Um pássaro', isCorrect: false }
    ],
    hint: 'Quantos dedos têm cada animal? Os cães têm 4 dedos nas patas, os gatos têm 5 nas patas dianteiras, e os pássaros geralmente têm 3 ou 4.'
  },
  {
    id: 10,
    title: 'O Tesouro do Mapa Rasgado',
    question: 'As crianças encontraram um mapa do tesouro rasgado em três pedaços na biblioteca da escola. Em cada pedaço estava escrito: Pedaço 1: "O tesouro está enterrado sob a árvore mais antiga do pátio" Pedaço 2: "O tesouro está escondido atrás da estante de troféus" Pedaço 3: "O tesouro foi colocado dentro do armário de materiais esportivos" A bibliotecária disse às crianças: "Apenas um dos pedaços foi escrito pelo verdadeiro pirata. Os outros dois foram escritos por piratas falsos para confundir." Investigando, as crianças descobriram que o pedaço 1 estava escrito com tinta normal, o pedaço 2 com tinta muito nova, e o pedaço 3 com tinta envelhecida e amarelada. Onde está o tesouro?',
    difficulty: 'difícil',
    answers: [
      { id: 1, text: 'Sob a árvore mais antiga', isCorrect: false },
      { id: 2, text: 'Atrás da estante de troféus', isCorrect: false },
      { id: 3, text: 'No armário de materiais esportivos', isCorrect: true }
    ],
    hint: 'Se o mapa é realmente antigo, qual tipo de tinta seria mais provável de estar em um mapa de tesouro verdadeiro?'
  }
];
