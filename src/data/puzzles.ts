import { Puzzle } from '../types/puzzle';

export const puzzles: Puzzle[] = [
  {
    id: 1,
    title: 'O Mistério da Fruta Desconhecida',
    question: 'Sou amarela por fora e branca por dentro. Sou doce, mas não sou banana. O que sou eu?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Maçã', isCorrect: false },
      { id: 2, text: 'Pêra', isCorrect: true },
      { id: 3, text: 'Laranja', isCorrect: false }
    ],
    hint: 'Tenho um formato que se parece com uma lâmpada'
  },
  {
    id: 2,
    title: 'O Animal Misterioso',
    question: 'Tenho quatro patas, rabo longo, e adoro caçar ratos. Quem sou eu?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Gato', isCorrect: true },
      { id: 2, text: 'Cachorro', isCorrect: false },
      { id: 3, text: 'Coelho', isCorrect: false }
    ],
    hint: 'Faço "miau"'
  },
  {
    id: 3,
    title: 'O Enigma dos Números',
    question: 'Qual é o número que vem depois do 7?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: '6', isCorrect: false },
      { id: 2, text: '9', isCorrect: false },
      { id: 3, text: '8', isCorrect: true }
    ],
    hint: 'Conte com os dedos: 1, 2, 3, 4, 5, 6, 7...'
  },
  {
    id: 4,
    title: 'O Caso das Cores Misturadas',
    question: 'Se misturarmos azul com amarelo, qual cor teremos?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Laranja', isCorrect: false },
      { id: 2, text: 'Verde', isCorrect: true },
      { id: 3, text: 'Roxo', isCorrect: false }
    ],
    hint: 'Essa cor está presente nas folhas das árvores'
  },
  {
    id: 5,
    title: 'A Casa Misteriosa',
    question: 'O que usamos para entrar em uma casa?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Chave', isCorrect: true },
      { id: 2, text: 'Colher', isCorrect: false },
      { id: 3, text: 'Lápis', isCorrect: false }
    ],
    hint: 'É de metal e gira na fechadura'
  },
  {
    id: 6,
    title: 'O Enigma do Tempo',
    question: 'Quantas horas têm um dia inteiro?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: '12 horas', isCorrect: false },
      { id: 2, text: '24 horas', isCorrect: true },
      { id: 3, text: '60 horas', isCorrect: false }
    ],
    hint: 'Pense em quantas vezes o relógio marca 12 horas em um dia completo'
  },
  {
    id: 7,
    title: 'O Mistério do Céu',
    question: 'O que fica no céu durante o dia e nos ilumina?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Lua', isCorrect: false },
      { id: 2, text: 'Estrelas', isCorrect: false },
      { id: 3, text: 'Sol', isCorrect: true }
    ],
    hint: 'É quente e amarelo'
  },
  {
    id: 8,
    title: 'A Mensagem Secreta',
    question: 'Se eu disser "BOLA" de trás para frente, como fica?',
    difficulty: 'difícil',
    answers: [
      { id: 1, text: 'LOBA', isCorrect: true },
      { id: 2, text: 'ALOB', isCorrect: false },
      { id: 3, text: 'LOAB', isCorrect: false }
    ],
    hint: 'Troque a ordem das letras completamente'
  },
  {
    id: 9,
    title: 'O Desafio da Matemática',
    question: 'Se tenho 5 balas e ganho mais 3, com quantas balas fico?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: '7 balas', isCorrect: false },
      { id: 2, text: '8 balas', isCorrect: true },
      { id: 3, text: '15 balas', isCorrect: false }
    ],
    hint: 'Use os dedos para contar: 5 + 3 = ?'
  },
  {
    id: 10,
    title: 'O Último Enigma',
    question: 'Qual destes não é um animal de estimação comum?',
    difficulty: 'difícil',
    answers: [
      { id: 1, text: 'Gato', isCorrect: false },
      { id: 2, text: 'Peixe', isCorrect: false },
      { id: 3, text: 'Leão', isCorrect: true }
    ],
    hint: 'Pense em qual animal seria perigoso ter em casa'
  }
];
