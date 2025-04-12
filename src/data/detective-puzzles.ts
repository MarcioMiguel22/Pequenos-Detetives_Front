import { Puzzle } from '../types/puzzle';

export const detectivePuzzles: Puzzle[] = [
  {
    id: 1,
    title: 'O Caso do Brinquedo Desaparecido',
    question: 'A Ana não consegue encontrar o seu ursinho de pelúcia. Ela deixou-o na sala antes de ir tomar banho. Quem o pode ter levado?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'O cachorro da família', isCorrect: true },
      { id: 2, text: 'Um ladrão', isCorrect: false },
      { id: 3, text: 'A mãe da Ana', isCorrect: false }
    ],
    hint: 'O Rex gosta muito de brinquedos fofos para morder'
  },
  {
    id: 2,
    title: 'O Mistério do Chocolate Comido',
    question: 'O Pedro deixou um chocolate na mesa da cozinha e foi brincar. Quando voltou, o chocolate tinha desaparecido. Há manchas de chocolate no chão. Quem comeu o chocolate?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'A irmã do Pedro', isCorrect: false },
      { id: 2, text: 'O pai do Pedro', isCorrect: false },
      { id: 3, text: 'O Pedro esqueceu-se que já o comeu', isCorrect: true }
    ],
    hint: 'Olha para os dedos do Pedro!'
  },
  {
    id: 3,
    title: 'A Janela Aberta',
    question: 'Os pais da Mariana disseram-lhe para manter a janela do quarto fechada, mas de manhã estava aberta. Quem abriu a janela?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'A Mariana esqueceu-se de a fechar', isCorrect: true },
      { id: 2, text: 'Um pássaro', isCorrect: false },
      { id: 3, text: 'O vento', isCorrect: false }
    ],
    hint: 'Pensa no que a Mariana fez antes de dormir'
  },
  {
    id: 4,
    title: 'O Desaparecimento do Último Biscoito',
    question: 'Havia um último biscoito no frasco. A mãe, o pai, o irmão e a irmã dizem que não o comeram. Quem está a mentir?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'A mãe', isCorrect: false },
      { id: 2, text: 'O irmão', isCorrect: true },
      { id: 3, text: 'A irmã', isCorrect: false }
    ],
    hint: 'Só uma pessoa tem migalhas na camisola'
  },
  {
    id: 5,
    title: 'O Mistério do Livro Molhado',
    question: 'A professora encontrou um livro da biblioteca molhado. Três alunos estavam perto dele. Quem molhou o livro?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Uma aluna que derramou água', isCorrect: false },
      { id: 2, text: 'Um aluno que veio da chuva', isCorrect: true },
      { id: 3, text: 'O zelador que estava a limpar', isCorrect: false }
    ],
    hint: 'Olha pela janela! Como está o tempo?'
  },
  {
    id: 6,
    title: 'O Caso do Trabalho de Casa Perdido',
    question: 'O João diz que fez o trabalho de casa, mas não o consegue encontrar. O que aconteceu?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'O cão comeu o trabalho', isCorrect: false },
      { id: 2, text: 'Ele deixou-o em casa', isCorrect: true },
      { id: 3, text: 'Ele não fez o trabalho', isCorrect: false }
    ],
    hint: 'A mãe do João encontrou um papel importante na escrivaninha dele em casa'
  },
  {
    id: 7,
    title: 'O Desaparecimento do Giz',
    question: 'Todos os gizes da sala de aula desapareceram. Quem os levou?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Um aluno para fazer arte no recreio', isCorrect: true },
      { id: 2, text: 'A professora de outra turma', isCorrect: false },
      { id: 3, text: 'O zelador para limpar', isCorrect: false }
    ],
    hint: 'Há desenhos coloridos no pátio da escola'
  },
  {
    id: 8,
    title: 'O Mistério da Planta Murcha',
    question: 'A planta da sala de aula está murcha. Quem se esqueceu de regar?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'A professora', isCorrect: false },
      { id: 2, text: 'O aluno responsável pela planta esta semana', isCorrect: true },
      { id: 3, text: 'O diretor da escola', isCorrect: false }
    ],
    hint: 'Verifica a tabela de tarefas da sala'
  },
  {
    id: 9,
    title: 'A Bola Perdida',
    question: 'Durante o recreio, alguém chutou a bola para longe. Agora ninguém consegue encontrá-la. Onde está a bola?',
    difficulty: 'difícil',
    answers: [
      { id: 1, text: 'Ficou presa numa árvore', isCorrect: true },
      { id: 2, text: 'Alguém a levou para casa', isCorrect: false },
      { id: 3, text: 'Rolou para o estacionamento', isCorrect: false }
    ],
    hint: 'Olha para cima!'
  },
  {
    id: 10,
    title: 'O Caso do Lanche Trocado',
    question: 'A Maria e o António perceberam que os seus lanches foram trocados. Como aconteceu?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Têm lancheiras iguais e confundiram-se', isCorrect: true },
      { id: 2, text: 'Alguém trocou por brincadeira', isCorrect: false },
      { id: 3, text: 'As mães deles trocaram por engano', isCorrect: false }
    ],
    hint: 'A Maria e o António compraram as lancheiras na mesma loja'
  },
  {
    id: 11,
    title: 'O Mistério da Luz Acesa',
    question: 'Os pais do Carlos saíram de casa e disseram para ele desligar todas as luzes para poupar energia. Quando voltaram, uma luz estava acesa. Por quê?',
    difficulty: 'difícil',
    answers: [
      { id: 1, text: 'O Carlos esqueceu-se de a apagar', isCorrect: false },
      { id: 2, text: 'O Carlos teve medo do escuro', isCorrect: true },
      { id: 3, text: 'A energia voltou após um corte', isCorrect: false }
    ],
    hint: 'O Carlos tem apenas 5 anos'
  },
  {
    id: 12,
    title: 'O Caso do Desenho na Parede',
    question: 'Há um desenho novo na parede da sala. Os pais não sabem quem desenhou. Quem foi?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'A filha mais velha', isCorrect: false },
      { id: 2, text: 'O filho mais novo', isCorrect: true },
      { id: 3, text: 'O gato da família', isCorrect: false }
    ],
    hint: 'O desenho está muito baixo na parede'
  },
  {
    id: 13,
    title: 'O Mistério das Pegadas na Lama',
    question: 'Há pegadas de lama na entrada da casa. De quem são?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Do pai que voltou do trabalho no jardim', isCorrect: true },
      { id: 2, text: 'Do carteiro que entregou uma encomenda', isCorrect: false },
      { id: 3, text: 'Do cão que brincou lá fora', isCorrect: false }
    ],
    hint: 'As pegadas são grandes e têm o formato de botas de trabalho'
  },
  {
    id: 14,
    title: 'O Caso do Leite Derramado',
    question: 'Alguém derramou leite no chão da cozinha e não limpou. Quem foi?',
    difficulty: 'difícil',
    answers: [
      { id: 1, text: 'A mãe enquanto fazia o pequeno-almoço', isCorrect: false },
      { id: 2, text: 'O irmão mais velho ao preparar cereais', isCorrect: false },
      { id: 3, text: 'A irmã mais nova que não consegue alcançar o lava-loiça', isCorrect: true }
    ],
    hint: 'Há um banquinho próximo do frigorífico'
  },
  {
    id: 15,
    title: 'O Desaparecimento do Anel',
    question: 'A mãe não encontra o seu anel. Onde ele pode estar?',
    difficulty: 'difícil',
    answers: [
      { id: 1, text: 'Foi levado por um ladrão', isCorrect: false },
      { id: 2, text: 'Caiu pelo ralo enquanto ela lavava as mãos', isCorrect: true },
      { id: 3, text: 'O pai guardou-o num lugar seguro', isCorrect: false }
    ],
    hint: 'A mãe tirou o anel para lavar as mãos no banheiro'
  },
  {
    id: 16,
    title: 'O Enigma da Porta Aberta',
    question: 'A porta da frente estava aberta de manhã, mas todos dizem que a fecharam antes de dormir. O que aconteceu?',
    difficulty: 'difícil',
    answers: [
      { id: 1, text: 'Alguém saiu durante a noite', isCorrect: false },
      { id: 2, text: 'A fechadura está quebrada', isCorrect: true },
      { id: 3, text: 'Um ladrão tentou entrar', isCorrect: false }
    ],
    hint: 'O pai tentou consertar a fechadura há alguns dias'
  },
  {
    id: 17,
    title: 'O Mistério do Bolo Desaparecido',
    question: 'A mãe fez um bolo e deixou-o a arrefecer. Mais tarde, metade do bolo tinha desaparecido. Quem comeu?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'O pai, para provar se estava bom', isCorrect: false },
      { id: 2, text: 'A visita que chegou de surpresa', isCorrect: false },
      { id: 3, text: 'Os dois irmãos que dividiram entre si', isCorrect: true }
    ],
    hint: 'Há dois pratos sujos no quarto das crianças'
  },
  {
    id: 18,
    title: 'O Caso do Vidro Quebrado',
    question: 'A janela da sala está quebrada. O que aconteceu?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Um pássaro voou contra ela', isCorrect: false },
      { id: 2, text: 'Uma bola foi atirada por crianças jogando', isCorrect: true },
      { id: 3, text: 'A temperatura fez o vidro rachar', isCorrect: false }
    ],
    hint: 'Há uma bola de futebol perto dos cacos de vidro'
  },
  {
    id: 19,
    title: 'O Mistério da Tesoura Desaparecida',
    question: 'A professora não encontra a tesoura que estava na mesa dela. Quem a pegou?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Um aluno para o projeto de arte', isCorrect: true },
      { id: 2, text: 'A faxineira para guardar no armário', isCorrect: false },
      { id: 3, text: 'Outra professora para usar na sua sala', isCorrect: false }
    ],
    hint: 'Há um projeto de recortes sendo feito na sala'
  },
  {
    id: 20,
    title: 'O Enigma do Sapato Molhado',
    question: 'O José acordou e encontrou um de seus sapatos molhado. Como isso aconteceu?',
    difficulty: 'difícil',
    answers: [
      { id: 1, text: 'Ele pisou numa poça ontem', isCorrect: false },
      { id: 2, text: 'O cachorro bebeu água e babou no sapato', isCorrect: true },
      { id: 3, text: 'Alguém derramou água por acidente', isCorrect: false }
    ],
    hint: 'O sapato tem marcas de mordidas pequenas'
  },
  {
    id: 21,
    title: 'O Caso do Piquenique Arruinado',
    question: 'A família foi fazer um piquenique, mas quando abriram a cesta, a comida estava toda misturada. O que aconteceu?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'A cesta caiu do carro', isCorrect: false },
      { id: 2, text: 'Alguém se esqueceu de fechar bem os recipientes', isCorrect: true },
      { id: 3, text: 'Um animal mexeu na cesta', isCorrect: false }
    ],
    hint: 'A mãe estava com pressa enquanto preparava a cesta'
  },
  {
    id: 22,
    title: 'O Mistério da Mochila Pesada',
    question: 'A mochila do Bruno está muito mais pesada hoje. O que ele está carregando?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Um presente surpresa para a professora', isCorrect: false },
      { id: 2, text: 'Uma coleção de pedras que ele encontrou', isCorrect: true },
      { id: 3, text: 'Livros extras da biblioteca', isCorrect: false }
    ],
    hint: 'O Bruno disse que quer ser geólogo quando crescer'
  },
  {
    id: 23,
    title: 'O Caso da Escova de Dentes Azul',
    question: 'A escova de dentes do Ricardo, que era branca, agora está com manchas azuis. Como isso aconteceu?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Ele usou pasta de dentes azul', isCorrect: false },
      { id: 2, text: 'A escova caiu na tinta durante a aula de artes', isCorrect: false },
      { id: 3, text: 'Ele usou a escova para limpar tinta de um projeto', isCorrect: true }
    ],
    hint: 'O Ricardo estava fazendo um projeto de ciências sobre planetas'
  },
  {
    id: 24,
    title: 'O Enigma da Torrada Queimada',
    question: 'Há torradas queimadas no lixo. Quem as queimou?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'O pai, que estava distraído com o jornal', isCorrect: false },
      { id: 2, text: 'A filha, que está aprendendo a usar a torradeira', isCorrect: true },
      { id: 3, text: 'A mãe, que estava atendendo o telefone', isCorrect: false }
    ],
    hint: 'Há um banco pequeno em frente à torradeira'
  },
  {
    id: 25,
    title: 'O Mistério do Controle Remoto Perdido',
    question: 'O controle remoto da TV desapareceu. Onde pode estar?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Embaixo do sofá', isCorrect: true },
      { id: 2, text: 'Na cozinha', isCorrect: false },
      { id: 3, text: 'No quarto dos pais', isCorrect: false }
    ],
    hint: 'O bebê da família esteve brincando com ele antes de desaparecer'
  },
  {
    id: 26,
    title: 'O Caso do Almoço Trocado',
    question: 'No refeitório da escola, a Clara descobriu que sua lancheira tinha comida diferente da que a mãe preparou. O que aconteceu?',
    difficulty: 'difícil',
    answers: [
      { id: 1, text: 'Ela pegou a lancheira errada', isCorrect: true },
      { id: 2, text: 'A mãe mudou de ideia sobre o que preparar', isCorrect: false },
      { id: 3, text: 'Alguém trocou as comidas de propósito', isCorrect: false }
    ],
    hint: 'Há outra menina na escola com uma lancheira idêntica'
  },
  {
    id: 27,
    title: 'O Enigma do Trabalho de Arte',
    question: 'No mural da escola, o trabalho de arte do Tiago foi substituído por outro. Quem fez isso?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'A professora, para dar lugar a outros trabalhos', isCorrect: true },
      { id: 2, text: 'Um colega com inveja', isCorrect: false },
      { id: 3, text: 'O zelador, por engano durante a limpeza', isCorrect: false }
    ],
    hint: 'Todos os trabalhos foram trocados, não só o do Tiago'
  },
  {
    id: 28,
    title: 'O Mistério da Gaveta Bagunçada',
    question: 'A gaveta de meias da mãe, que estava organizada, agora está toda bagunçada. Quem mexeu nela?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'O pai, procurando suas próprias meias', isCorrect: false },
      { id: 2, text: 'A filha pequena, brincando de esconde-esconde', isCorrect: true },
      { id: 3, text: 'O gato da família', isCorrect: false }
    ],
    hint: 'Há pequenas pegadas no quarto dos pais'
  },
  {
    id: 29,
    title: 'O Caso do Dever de Casa Errado',
    question: 'A professora notou que o dever de casa da Júlia está correto, mas com uma letra diferente. O que aconteceu?',
    difficulty: 'difícil',
    answers: [
      { id: 1, text: 'Ela pediu para um colega copiar', isCorrect: false },
      { id: 2, text: 'Sua mãe escreveu para ela', isCorrect: true },
      { id: 3, text: 'Ela mudou sua letra para ficar mais bonita', isCorrect: false }
    ],
    hint: 'A Júlia quebrou o braço no fim de semana'
  },
  {
    id: 30,
    title: 'O Enigma do Barulho Noturno',
    question: 'Toda a família foi acordada por um barulho estranho durante a noite. O que causou o barulho?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Um vaso caiu na sala', isCorrect: false },
      { id: 2, text: 'O gato derrubou objetos na cozinha', isCorrect: true },
      { id: 3, text: 'Uma janela bateu com o vento', isCorrect: false }
    ],
    hint: 'Há comida de gato espalhada pelo chão da cozinha'
  },
  {
    id: 31,
    title: 'O Mistério da Roupa Rasgada',
    question: 'A camisa favorita do Rafael apareceu rasgada no cesto de roupa suja. Como rasgou?',
    difficulty: 'difícil',
    answers: [
      { id: 1, text: 'Ele rasgou enquanto jogava no parque', isCorrect: true },
      { id: 2, text: 'A máquina de lavar estragou a roupa', isCorrect: false },
      { id: 3, text: 'O cachorro mordeu enquanto brincava', isCorrect: false }
    ],
    hint: 'Rafael esteve escalando árvores no parque'
  },
  {
    id: 32,
    title: 'O Caso da Tarefa Incompleta',
    question: 'Sofia sempre completa suas tarefas, mas hoje deixou metade por fazer. Por quê?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Ela ficou doente durante a aula', isCorrect: true },
      { id: 2, text: 'Ela não entendeu as instruções', isCorrect: false },
      { id: 3, text: 'Ela se distraiu conversando', isCorrect: false }
    ],
    hint: 'A enfermeira da escola ligou para a mãe da Sofia'
  },
  {
    id: 33,
    title: 'O Enigma da Planta Quebrada',
    question: 'O vaso de planta da sala está quebrado. Quem o quebrou?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'O filho jogando bola dentro de casa', isCorrect: true },
      { id: 2, text: 'O vento forte pela janela aberta', isCorrect: false },
      { id: 3, text: 'O gato pulando na mesa', isCorrect: false }
    ],
    hint: 'Há uma bola escondida atrás do sofá'
  },
  {
    id: 34,
    title: 'O Mistério do Brinquedo Quebrado',
    question: 'O carrinho novo do Lucas está quebrado. Quem o quebrou?',
    difficulty: 'difícil',
    answers: [
      { id: 1, text: 'O próprio Lucas, por acidente', isCorrect: false },
      { id: 2, text: 'Seu irmão mais novo, por curiosidade', isCorrect: true },
      { id: 3, text: 'Sua irmã mais velha, por vingança', isCorrect: false }
    ],
    hint: 'O irmão mais novo tem apenas 2 anos'
  },
  {
    id: 35,
    title: 'O Caso do Diário Lido',
    question: 'A Ana sabe que alguém leu seu diário secreto. Quem foi?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Sua melhor amiga, por curiosidade', isCorrect: false },
      { id: 2, text: 'Sua mãe, preocupada com seu comportamento recente', isCorrect: true },
      { id: 3, text: 'Seu irmão, para descobrir segredos', isCorrect: false }
    ],
    hint: 'O diário estava em um lugar novo, dobrado de forma diferente'
  },
  {
    id: 36,
    title: 'O Enigma da Pia Entupida',
    question: 'A pia do banheiro está entupida. O que causou o entupimento?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Cabelos do pai ao fazer a barba', isCorrect: false },
      { id: 2, text: 'A criança jogou brinquedos pequenos', isCorrect: true },
      { id: 3, text: 'Acúmulo de sabonete', isCorrect: false }
    ],
    hint: 'Faltam algumas peças do jogo de miniaturas'
  },
  {
    id: 37,
    title: 'O Mistério da Agenda Molhada',
    question: 'A agenda escolar da Luisa está com algumas páginas molhadas. Como isso aconteceu?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Ela deixou a janela aberta durante a chuva', isCorrect: false },
      { id: 2, text: 'A garrafa de água vazou na mochila', isCorrect: true },
      { id: 3, text: 'Ela derramou suco na mesa', isCorrect: false }
    ],
    hint: 'A mochila dela também está úmida por dentro'
  },
  {
    id: 38,
    title: 'O Caso do Bolo Mal Decorado',
    question: 'A mãe fez um bolo de aniversário perfeito, mas de manhã a decoração estava mexida. O que aconteceu?',
    difficulty: 'difícil',
    answers: [
      { id: 1, text: 'O pai tentou melhorar a decoração durante a noite', isCorrect: false },
      { id: 2, text: 'O aniversariante não resistiu e provou um pouco', isCorrect: true },
      { id: 3, text: 'O calor derreteu parte da cobertura', isCorrect: false }
    ],
    hint: 'Há um garfo sujo de cobertura na pia'
  },
  {
    id: 39,
    title: 'O Enigma da Nota Baixa',
    question: 'O Pedro, que sempre tira notas altas, recebeu uma nota baixa no teste. Por quê?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Ele não estudou o conteúdo correto', isCorrect: true },
      { id: 2, text: 'A professora corrigiu errado', isCorrect: false },
      { id: 3, text: 'Ele estava doente no dia do teste', isCorrect: false }
    ],
    hint: 'A professora mudou o tema do teste na última hora'
  },
  {
    id: 40,
    title: 'O Mistério do Dentista',
    question: 'O dentista descobriu que alguém na família não está escovando os dentes direito. Quem é?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'O pai, que está sempre com pressa', isCorrect: false },
      { id: 2, text: 'A mãe, que esquece por cansaço', isCorrect: false },
      { id: 3, text: 'O filho, que diz que escova mas não escova', isCorrect: true }
    ],
    hint: 'A escova de dentes desta pessoa está sempre seca de manhã'
  }
];
