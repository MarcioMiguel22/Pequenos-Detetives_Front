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
  }
];
