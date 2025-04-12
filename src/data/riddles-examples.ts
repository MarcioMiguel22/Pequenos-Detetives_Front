import { Riddle } from '../types/riddle';

// Exemplos de advinhas com opções contextuais
export const riddleExamples: Riddle[] = [
  {
    id: 1,
    question: "O que tem dentes mas não morde?",
    answer: "Pente",
    difficulty: "fácil",
    hint: "Usamos para arrumar o cabelo",
    contextualOptions: [
      { text: "Usamos todos os dias para nos arranjarmos", isCorrect: true },
      { text: "Encontra-se na casa de banho", isCorrect: false },
      { text: "É feito de plástico ou madeira", isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "O que nasce grande e morre pequeno?",
    answer: "Vela",
    difficulty: "fácil",
    hint: "Ilumina quando há escuridão",
    contextualOptions: [
      { text: "Usamos em festas de aniversário", isCorrect: true },
      { text: "Derrete quando está acesa", isCorrect: false },
      { text: "Produz uma luz suave", isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "O que vai e volta mas nunca se move?",
    answer: "Porta",
    difficulty: "fácil",
    hint: "Abre e fecha sem sair do lugar",
    contextualOptions: [
      { text: "Está em todas as divisões da casa", isCorrect: true },
      { text: "Às vezes tem uma fechadura", isCorrect: false },
      { text: "Separa um espaço de outro", isCorrect: false }
    ]
  },
  {
    id: 4,
    question: "Tem coroa mas não é rei, tem espinhos mas não é rosa. O que é?",
    answer: "Abacaxi",
    difficulty: "médio",
    hint: "É uma fruta tropical",
    contextualOptions: [
      { text: "É uma fruta doce e ácida", isCorrect: true },
      { text: "Tem uma casca dura e áspera", isCorrect: false },
      { text: "Vem de países quentes", isCorrect: false }
    ]
  },
  {
    id: 5,
    question: "Feito para andar, mas não anda?",
    answer: "Rua",
    difficulty: "médio",
    hint: "Os carros passam por cima",
    contextualOptions: [
      { text: "Conecta casas e edifícios", isCorrect: true },
      { text: "Os carros circulam nela", isCorrect: false },
      { text: "Pode ser de asfalto ou paralelepípedos", isCorrect: false }
    ]
  }
];
