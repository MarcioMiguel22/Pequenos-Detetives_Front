import { MysteryCase } from '../context/GameContext';

export const mysteryCases: MysteryCase[] = [
  {
    id: 1,
    title: 'O Mistério do Livro Desaparecido',
    description: 'Um livro muito valioso desapareceu da biblioteca da escola. Descobre quem o levou e onde o escondeu!',
    difficulty: 'fácil' as const,
    backgroundImage: '/assets/mystery/library-background.jpg',
    objects: [
      {
        id: 101,
        name: 'Estante',
        description: 'Uma estante com espaços vazios onde faltam alguns livros.',
        x: 20,
        y: 30,
        width: 150,
        height: 300,
        linkedClue: 1
      },
      {
        id: 102,
        name: 'Mesa',
        description: 'Mesa de estudo com alguns papéis e um lápis.',
        x: 200,
        y: 200,
        width: 180,
        height: 100,
        linkedClue: 2
      },
      {
        id: 103,
        name: 'Mochila',
        description: 'Uma mochila azul abandonada num canto.',
        x: 400,
        y: 320,
        width: 80,
        height: 120,
        linkedMiniGame: 1
      }
    ],
    clues: [
      {
        id: 1,
        title: 'Espaço vazio',
        description: 'Há um espaço vazio na estante onde deveria estar um livro grande.',
        found: false,
        linkedToObject: 101
      },
      {
        id: 2,
        title: 'Nota',
        description: 'Na mesa há uma nota com o nome "Maria" e uma lista de livros, incluindo "História de Portugal".',
        found: false,
        linkedToObject: 102
      },
      {
        id: 3,
        title: 'Marcador',
        description: 'Um marcador com o símbolo da biblioteca foi encontrado no chão perto da porta.',
        found: false
      }
    ],
    miniGames: [
      {
        id: 1,
        type: 'puzzle',
        title: 'Reconstruir a Pista',
        description: 'Monta o puzzle para descobrir o bilhete rasgado.',
        completed: false,
        config: {
          imageSrc: '/assets/mystery/note-puzzle.jpg',
          pieces: 6
        }
      }
    ],
    solution: 'A Maria pegou o livro para fazer um trabalho de casa e esqueceu-se de o registar no sistema da biblioteca. Encontras o livro na mochila azul que ela deixou quando foi ao recreio.',
    hint: 'Procura pistas relacionadas com os alunos que estiveram na biblioteca hoje.',
    completed: false
  },
  {
    id: 2,
    title: 'O Segredo do Laboratório',
    description: 'Algo estranho está a acontecer no laboratório da escola. Investiga os objetos misteriosos e descobre o que se passa!',
    difficulty: 'médio' as const,
    backgroundImage: '/assets/mystery/lab-background.jpg',
    objects: [
      {
        id: 201,
        name: 'Microscópio',
        description: 'Um microscópio com uma amostra preparada.',
        x: 150,
        y: 200,
        width: 100,
        height: 120,
        linkedClue: 4
      },
      {
        id: 202,
        name: 'Caderno',
        description: 'Um caderno com anotações científicas.',
        x: 300,
        y: 180,
        width: 80,
        height: 60,
        linkedClue: 5
      },
      {
        id: 203,
        name: 'Armário',
        description: 'Um armário de produtos químicos.',
        x: 50,
        y: 100,
        width: 120,
        height: 250,
        linkedMiniGame: 2
      }
    ],
    clues: [
      {
        id: 4,
        title: 'Amostra Estranha',
        description: 'A amostra no microscópio não parece ser do nosso planeta!',
        found: false,
        linkedToObject: 201
      },
      {
        id: 5,
        title: 'Anotações',
        description: 'O caderno tem anotações sobre vida extraterrestre e experiências secretas.',
        found: false,
        linkedToObject: 202
      },
      {
        id: 6,
        title: 'Substância Brilhante',
        description: 'Um frasco com uma substância brilhante foi encontrado escondido.',
        found: false
      }
    ],
    miniGames: [
      {
        id: 2,
        type: 'dragdrop',
        title: 'Formular a Mistura',
        description: 'Arrasta os ingredientes na ordem correta para revelar a fórmula secreta.',
        completed: false,
        config: {
          items: ['Água', 'Reagente Azul', 'Pó Brilhante', 'Ácido'],
          correctOrder: [0, 2, 1, 3]
        }
      }
    ],
    solution: 'O professor de ciências está a preparar uma experiência especial para a feira de ciências, usando materiais que imitam rochas espaciais. O brilho misterioso é apenas um corante fluorescente para a apresentação.',
    hint: 'Presta atenção às datas no calendário do laboratório.',
    completed: false
  },
  {
    id: 3,
    title: 'O Tesouro Perdido',
    description: 'Um antigo mapa do tesouro foi encontrado no sótão da escola. Segue as pistas para encontrar o tesouro escondido!',
    difficulty: 'difícil' as const,
    backgroundImage: '/assets/mystery/map-background.jpg',
    objects: [
      {
        id: 301,
        name: 'Mapa',
        description: 'Um mapa antigo com marcações misteriosas.',
        x: 100,
        y: 150,
        width: 200,
        height: 150,
        linkedClue: 7
      },
      {
        id: 302,
        name: 'Bússola',
        description: 'Uma bússola antiga que aponta numa direção estranha.',
        x: 350,
        y: 180,
        width: 60,
        height: 60,
        linkedClue: 8
      },
      {
        id: 303,
        name: 'Baú',
        description: 'Um baú velho com um cadeado complexo.',
        x: 200,
        y: 320,
        width: 150,
        height: 100,
        linkedMiniGame: 3
      }
    ],
    clues: [
      {
        id: 7,
        title: 'Símbolos',
        description: 'O mapa tem símbolos estranhos que parecem indicar um caminho.',
        found: false,
        linkedToObject: 301
      },
      {
        id: 8,
        title: 'Bússola Quebrada',
        description: 'A bússola parece estar quebrada, mas na verdade está a apontar para um metal escondido.',
        found: false,
        linkedToObject: 302
      },
      {
        id: 9,
        title: 'Inscrição',
        description: 'Uma inscrição na parede diz: "Onde a sombra encontra a luz, o tesouro espera por ti".',
        found: false
      }
    ],
    miniGames: [
      {
        id: 3,
        type: 'differences',
        title: 'Decifrar o Código',
        description: 'Encontra as diferenças entre as duas imagens para revelar o código do baú.',
        completed: false,
        config: {
          image1: '/assets/mystery/code-image1.jpg',
          image2: '/assets/mystery/code-image2.jpg',
          differences: [
            { x: 120, y: 50, radius: 20 },
            { x: 200, y: 150, radius: 15 },
            { x: 80, y: 200, radius: 25 }
          ]
        }
      }
    ],
    solution: 'O tesouro é na verdade uma cápsula do tempo enterrada pelos antigos alunos da escola há 50 anos, contendo fotos, cartas e objetos históricos que agora são valiosos para o museu da escola.',
    hint: 'A chave para entender o mapa está no símbolo que se repete.',
    completed: false
  }
];
