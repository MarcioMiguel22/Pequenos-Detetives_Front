import { Riddle } from '../types/riddle';

export const riddles: Riddle[] = [
  {
    id: 1,
    question: "O que tem dentes mas não morde?",
    answer: "Pente",
    difficulty: "fácil",
    hint: "Usamos para arrumar o cabelo",
    contextualOptions: [
      { text: "Podemos encontrar na casa de banho para arrumar o cabelo", isCorrect: true },
      { text: "É algo que temos na cozinha para cortar alimentos", isCorrect: false },
      { text: "Usamos para escrever e desenhar todos os dias", isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "O que nasce grande e morre pequeno?",
    answer: "Vela",
    difficulty: "fácil",
    hint: "Ilumina quando há escuridão",
    contextualOptions: [
      { text: "Encontramos nos aniversários para fazer um pedido", isCorrect: true },
      { text: "Usamos no quarto para descansar à noite", isCorrect: false },
      { text: "É algo que levamos para a escola todos os dias", isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "O que vai e volta mas nunca se move?",
    answer: "Porta",
    difficulty: "fácil",
    hint: "Abre e fecha sem sair do lugar",
    contextualOptions: [
      { text: "Está em todas as divisões da casa para entrar e sair", isCorrect: true },
      { text: "Encontramos no jardim para brincar", isCorrect: false },
      { text: "Levamos connosco para todo lado quando saímos", isCorrect: false }
    ]
  },
  {
    id: 4,
    question: "Tem coroa mas não é rei, tem espinhos mas não é rosa. O que é?",
    answer: "Abacaxi",
    difficulty: "médio",
    hint: "É uma fruta tropical",
    contextualOptions: [
      { text: "Encontramos na frutaria ou no supermercado", isCorrect: true },
      { text: "Temos no quarto para nos proteger", isCorrect: false },
      { text: "Usamos na escola para estudar", isCorrect: false }
    ]
  },
  {
    id: 5,
    question: "Feito para andar, mas não anda?",
    answer: "Rua",
    difficulty: "médio",
    hint: "Os carros passam por cima",
    contextualOptions: [
      { text: "Está lá fora onde passam os carros e as pessoas", isCorrect: true },
      { text: "Podemos encontrar na cozinha para comer", isCorrect: false },
      { text: "Guardamos no armário do quarto", isCorrect: false }
    ]
  },
  {
    id: 6,
    question: "Sobe e desce mas fica sempre no mesmo lugar?",
    answer: "Escada",
    difficulty: "fácil", 
    hint: "Usamos para subir e descer",
    contextualOptions: [
      { text: "Encontramos em casas com vários andares para subir e descer", isCorrect: true },
      { text: "Guardamos na cozinha para fazer comida", isCorrect: false },
      { text: "Levamos na mochila para a escola", isCorrect: false }
    ]
  },
  {
    id: 7,
    question: "Tem capa mas não é herói, tem folhas mas não é árvore?",
    answer: "Livro",
    difficulty: "médio",
    hint: "Podemos ler histórias nele",
    contextualOptions: [
      { text: "Encontramos na escola ou biblioteca para ler histórias", isCorrect: true },
      { text: "Usamos na cozinha para cozinhar", isCorrect: false },
      { text: "Guardamos na casa de banho para tomar banho", isCorrect: false }
    ]
  },
  {
    id: 8,
    question: "Enche uma casa, mas não ocupa espaço?",
    answer: "Luz",
    difficulty: "médio",
    hint: "Vem de lâmpadas ou do sol",
    contextualOptions: [
      { text: "Acendemos em todas as divisões da casa quando fica escuro", isCorrect: true },
      { text: "Guardamos no frigorífico para mais tarde", isCorrect: false },
      { text: "Usamos nos pés quando saímos à rua", isCorrect: false }
    ]
  },
  {
    id: 9,
    question: "O que é que anda com os pés na cabeça?",
    answer: "Piolho",
    difficulty: "médio",
    hint: "É um inseto muito pequeno",
    contextualOptions: [
      { text: "Podemos encontrar no cabelo e causa comichão", isCorrect: true },
      { text: "Guardamos na mochila para ir à escola", isCorrect: false },
      { text: "Usamos na cozinha para fazer bolos", isCorrect: false }
    ]
  },
  {
    id: 10,
    question: "O que é que tem pescoço mas não tem cabeça?",
    answer: "Garrafa",
    difficulty: "médio",
    hint: "Usamos para guardar líquidos",
    contextualOptions: [
      { text: "Encontramos na cozinha para guardar água ou sumo", isCorrect: true },
      { text: "Usamos no quarto para dormir", isCorrect: false },
      { text: "Levamos para a escola para escrever", isCorrect: false }
    ]
  }
];
