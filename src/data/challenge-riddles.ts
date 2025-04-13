import { ChallengeRiddle } from '../types/challenge-riddle';

export const challengeRiddles: ChallengeRiddle[] = [
  {
    id: 1,
    title: 'O Paradoxo do Movimento',
    question: "O que vai para frente e para trás mas nunca sai do mesmo lugar?",
    answer: "Pêndulo",
    difficulty: "difícil",
    hints: [
      "Está relacionado com o tempo",
      "Balança de um lado para outro",
      "Pode ser encontrado em certos tipos de relógios"
    ],
    explanation: "Um pêndulo move-se constantemente para a frente e para trás, mas permanece sempre fixo no seu ponto de origem."
  },
  {
    id: 2,
    title: 'O Enigma das Dimensões',
    question: "O que tem mais de mil olhos, mas não consegue ver nada?",
    answer: "Ananás",
    difficulty: "difícil",
    hints: [
      "É uma fruta tropical",
      "Tem uma casca áspera com vários pequenos pontos",
      "Tem uma coroa de folhas no topo"
    ],
    explanation: "O ananás (ou abacaxi) tem uma casca com centenas de pequenos 'olhos', que são na verdade escamas modificadas."
  },
  {
    id: 3,
    title: 'O Paradoxo Linguístico',
    question: "Qual é a palavra que, mesmo pronunciada corretamente, estará sempre pronunciada incorretamente?",
    answer: "Incorretamente",
    difficulty: "difícil",
    hints: [
      "Pensa no sentido literal da palavra",
      "É um advérbio que descreve como algo é feito",
      "É o oposto de 'corretamente'"
    ],
    explanation: "A palavra 'incorretamente' refere-se a algo feito de maneira errada. Então, quando dizemos 'incorretamente', estamos sempre a referir-nos a algo que está incorreto."
  },
  {
    id: 4,
    title: 'O Enigma da Matemática',
    question: "Se três gatos matam três ratos em três minutos, quantos gatos são necessários para matar 100 ratos em 100 minutos?",
    answer: "Três gatos",
    difficulty: "difícil",
    hints: [
      "Pensa na proporção entre gatos, ratos e tempo",
      "Cada gato mata quantos ratos por minuto?",
      "A relação é proporcional"
    ],
    explanation: "Cada gato mata 1 rato em 3 minutos, ou seja, 1/3 de rato por minuto. Em 100 minutos, cada gato matará aproximadamente 33,3 ratos. Portanto, 3 gatos matarão 100 ratos em 100 minutos."
  },
  {
    id: 5,
    title: 'O Paradoxo da Fragilidade',
    question: "O que é tão frágil que apenas ao dizer o seu nome, já o quebras?",
    answer: "Silêncio",
    difficulty: "difícil",
    hints: [
      "Não é um objeto físico",
      "Está relacionado com som, ou a falta dele",
      "Quando o nomeias, ele deixa de existir"
    ],
    explanation: "O silêncio é quebrado assim que alguém fala, incluindo quando alguém diz a palavra 'silêncio'."
  }
]
