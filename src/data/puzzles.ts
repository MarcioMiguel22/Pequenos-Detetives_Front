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
  },
  {
    id: 11,
    title: 'O Enigma das Estações',
    question: 'Em qual estação do ano as folhas caem das árvores?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Primavera', isCorrect: false },
      { id: 2, text: 'Outono', isCorrect: true },
      { id: 3, text: 'Verão', isCorrect: false }
    ],
    hint: 'É a estação que vem depois do verão'
  },
  {
    id: 12,
    title: 'O Mistério dos Planetas',
    question: 'Qual é o planeta mais próximo do Sol?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Terra', isCorrect: false },
      { id: 2, text: 'Mercúrio', isCorrect: true },
      { id: 3, text: 'Júpiter', isCorrect: false }
    ],
    hint: 'É o primeiro planeta do nosso sistema solar'
  },
  {
    id: 13,
    title: 'O Enigma da Cozinha',
    question: 'O que usamos para cortar alimentos?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Faca', isCorrect: true },
      { id: 2, text: 'Garfo', isCorrect: false },
      { id: 3, text: 'Colher', isCorrect: false }
    ],
    hint: 'Tem uma lâmina afiada'
  },
  {
    id: 14,
    title: 'O Mistério das Formas',
    question: 'Qual destas formas tem três lados?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Círculo', isCorrect: false },
      { id: 2, text: 'Quadrado', isCorrect: false },
      { id: 3, text: 'Triângulo', isCorrect: true }
    ],
    hint: 'O nome começa com "tri", que significa três'
  },
  {
    id: 15,
    title: 'O Caso dos Sabores',
    question: 'Qual destes alimentos é doce?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Limão', isCorrect: false },
      { id: 2, text: 'Chocolate', isCorrect: true },
      { id: 3, text: 'Sal', isCorrect: false }
    ],
    hint: 'É feito com cacau e muitas crianças adoram'
  },
  {
    id: 16,
    title: 'O Enigma do Dinheiro',
    question: 'Para que serve o dinheiro?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Para comer', isCorrect: false },
      { id: 2, text: 'Para brincar', isCorrect: false },
      { id: 3, text: 'Para comprar coisas', isCorrect: true }
    ],
    hint: 'Usamos nas lojas para obter o que precisamos'
  },
  {
    id: 17,
    title: 'O Mistério das Estações',
    question: 'Em qual estação do ano faz mais calor?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Verão', isCorrect: true },
      { id: 2, text: 'Inverno', isCorrect: false },
      { id: 3, text: 'Outono', isCorrect: false }
    ],
    hint: 'É quando vamos à praia'
  },
  {
    id: 18,
    title: 'O Enigma da Música',
    question: 'Qual destes não é um instrumento musical?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Viola', isCorrect: false },
      { id: 2, text: 'Batata', isCorrect: true },
      { id: 3, text: 'Piano', isCorrect: false }
    ],
    hint: 'Pensa no que se pode comer'
  },
  {
    id: 19,
    title: 'O Caso dos Opostos',
    question: 'Qual é o oposto de "alto"?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Baixo', isCorrect: true },
      { id: 2, text: 'Feliz', isCorrect: false },
      { id: 3, text: 'Rápido', isCorrect: false }
    ],
    hint: 'Se não consegues alcançar algo, é porque estás muito...'
  },
  {
    id: 20,
    title: 'O Enigma do Zoo',
    question: 'Qual destes animais não vive na água?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Baleia', isCorrect: false },
      { id: 2, text: 'Golfinho', isCorrect: false },
      { id: 3, text: 'Girafa', isCorrect: true }
    ],
    hint: 'Tem um pescoço muito comprido'
  },
  {
    id: 21,
    title: 'O Mistério dos Continentes',
    question: 'Em que continente fica Portugal?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'América', isCorrect: false },
      { id: 2, text: 'Europa', isCorrect: true },
      { id: 3, text: 'África', isCorrect: false }
    ],
    hint: 'Portugal faz parte da União Europeia'
  },
  {
    id: 22,
    title: 'O Enigma dos Números',
    question: 'Quanto é 5 + 5?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: '10', isCorrect: true },
      { id: 2, text: '15', isCorrect: false },
      { id: 3, text: '55', isCorrect: false }
    ],
    hint: 'Conta com os dedos das duas mãos'
  },
  {
    id: 23,
    title: 'O Mistério do Transporte',
    question: 'Qual destes voa no céu?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Carro', isCorrect: false },
      { id: 2, text: 'Barco', isCorrect: false },
      { id: 3, text: 'Avião', isCorrect: true }
    ],
    hint: 'Tem asas e pode levar-te para outros países'
  },
  {
    id: 24,
    title: 'O Caso das Letras',
    question: 'Qual é a primeira letra do alfabeto?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Z', isCorrect: false },
      { id: 2, text: 'A', isCorrect: true },
      { id: 3, text: 'B', isCorrect: false }
    ],
    hint: 'É a primeira letra da palavra "amigo"'
  },
  {
    id: 25,
    title: 'O Enigma da Natureza',
    question: 'O que as plantas precisam para crescer?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Chocolate', isCorrect: false },
      { id: 2, text: 'Água', isCorrect: true },
      { id: 3, text: 'Televisão', isCorrect: false }
    ],
    hint: 'É também o que bebemos quando temos sede'
  },
  {
    id: 26,
    title: 'O Mistério do Corpo Humano',
    question: 'Quantos olhos temos normalmente?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: '1 olho', isCorrect: false },
      { id: 2, text: '2 olhos', isCorrect: true },
      { id: 3, text: '3 olhos', isCorrect: false }
    ],
    hint: 'Um de cada lado do nariz'
  },
  {
    id: 27,
    title: 'O Enigma da Semana',
    question: 'Quantos dias tem uma semana?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: '5 dias', isCorrect: false },
      { id: 2, text: '7 dias', isCorrect: true },
      { id: 3, text: '10 dias', isCorrect: false }
    ],
    hint: 'Segunda, terça, quarta, quinta, sexta, sábado e domingo'
  },
  {
    id: 28,
    title: 'O Caso das Cores',
    question: 'De que cor é o céu num dia ensolarado?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Verde', isCorrect: false },
      { id: 2, text: 'Azul', isCorrect: true },
      { id: 3, text: 'Vermelho', isCorrect: false }
    ],
    hint: 'É também a cor do mar'
  },
  {
    id: 29,
    title: 'O Enigma da Sala de Aula',
    question: 'Onde escrevemos com giz?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Quadro', isCorrect: true },
      { id: 2, text: 'Caderno', isCorrect: false },
      { id: 3, text: 'Livro', isCorrect: false }
    ],
    hint: 'Está na parede da sala de aula'
  },
  {
    id: 30,
    title: 'O Mistério dos Sentidos',
    question: 'Com qual parte do corpo ouvimos sons?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Nariz', isCorrect: false },
      { id: 2, text: 'Boca', isCorrect: false },
      { id: 3, text: 'Orelhas', isCorrect: true }
    ],
    hint: 'Temos duas, uma de cada lado da cabeça'
  },
  {
    id: 31,
    title: 'O Enigma dos Ofícios',
    question: 'Quem nos ensina na escola?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Médico', isCorrect: false },
      { id: 2, text: 'Professor', isCorrect: true },
      { id: 3, text: 'Bombeiro', isCorrect: false }
    ],
    hint: 'Está sempre na sala de aula connosco'
  },
  {
    id: 32,
    title: 'O Mistério do Clima',
    question: 'O que cai do céu quando chove?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Pedras', isCorrect: false },
      { id: 2, text: 'Água', isCorrect: true },
      { id: 3, text: 'Folhas', isCorrect: false }
    ],
    hint: 'Molha-nos quando estamos na rua'
  },
  {
    id: 33,
    title: 'O Caso dos Opostos',
    question: 'Qual é o oposto de "noite"?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Dia', isCorrect: true },
      { id: 2, text: 'Escuro', isCorrect: false },
      { id: 3, text: 'Tarde', isCorrect: false }
    ],
    hint: 'É quando o sol está no céu'
  },
  {
    id: 34,
    title: 'O Enigma da Cozinha',
    question: 'Onde guardamos comida fria?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Fogão', isCorrect: false },
      { id: 2, text: 'Frigorífico', isCorrect: true },
      { id: 3, text: 'Forno', isCorrect: false }
    ],
    hint: 'É um eletrodoméstico que mantém os alimentos frescos'
  },
  {
    id: 35,
    title: 'O Mistério dos Meios de Transporte',
    question: 'Qual destes anda sobre carris?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Bicicleta', isCorrect: false },
      { id: 2, text: 'Autocarro', isCorrect: false },
      { id: 3, text: 'Comboio', isCorrect: true }
    ],
    hint: 'Faz "chu-chu" e tem várias carruagens'
  },
  {
    id: 36,
    title: 'O Enigma das Profissões',
    question: 'Quem apaga o fogo?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Polícia', isCorrect: false },
      { id: 2, text: 'Bombeiro', isCorrect: true },
      { id: 3, text: 'Médico', isCorrect: false }
    ],
    hint: 'Usa um uniforme vermelho e uma mangueira com água'
  },
  {
    id: 37,
    title: 'O Caso dos Opostos',
    question: 'Qual é o oposto de "longe"?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Perto', isCorrect: true },
      { id: 2, text: 'Grande', isCorrect: false },
      { id: 3, text: 'Pequeno', isCorrect: false }
    ],
    hint: 'Se algo está ao teu lado, está...'
  },
  {
    id: 38,
    title: 'O Enigma das Direções',
    question: 'Se não é à direita, então é à...?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Frente', isCorrect: false },
      { id: 2, text: 'Esquerda', isCorrect: true },
      { id: 3, text: 'Atrás', isCorrect: false }
    ],
    hint: 'É o lado oposto da direita'
  },
  {
    id: 39,
    title: 'O Mistério dos Animais',
    question: 'Qual destes animais voa?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Coelho', isCorrect: false },
      { id: 2, text: 'Peixe', isCorrect: false },
      { id: 3, text: 'Pássaro', isCorrect: true }
    ],
    hint: 'Tem penas e asas'
  },
  {
    id: 40,
    title: 'O Enigma da Matemática',
    question: 'Quanto é 10 - 5?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: '5', isCorrect: true },
      { id: 2, text: '15', isCorrect: false },
      { id: 3, text: '2', isCorrect: false }
    ],
    hint: 'É metade de 10'
  },
  {
    id: 41,
    title: 'O Caso da Alimentação',
    question: 'Qual destes NÃO é um legume?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Cenoura', isCorrect: false },
      { id: 2, text: 'Maçã', isCorrect: true },
      { id: 3, text: 'Couve', isCorrect: false }
    ],
    hint: 'É uma fruta que cresce em árvores'
  },
  {
    id: 42,
    title: 'O Enigma da Geografia',
    question: 'Qual é a capital de Portugal?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Lisboa', isCorrect: true },
      { id: 2, text: 'Porto', isCorrect: false },
      { id: 3, text: 'Faro', isCorrect: false }
    ],
    hint: 'É onde fica o Castelo de São Jorge'
  },
  {
    id: 43,
    title: 'O Mistério das Refeições',
    question: 'Qual é a primeira refeição do dia?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Almoço', isCorrect: false },
      { id: 2, text: 'Jantar', isCorrect: false },
      { id: 3, text: 'Pequeno-almoço', isCorrect: true }
    ],
    hint: 'Comemos logo depois de acordar'
  },
  {
    id: 44,
    title: 'O Caso dos Sons',
    question: 'Qual animal faz "muu"?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Galinha', isCorrect: false },
      { id: 2, text: 'Vaca', isCorrect: true },
      { id: 3, text: 'Pato', isCorrect: false }
    ],
    hint: 'Dá-nos leite'
  },
  {
    id: 45,
    title: 'O Enigma das Cores',
    question: 'Que cor resulta da mistura de azul e amarelo?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Verde', isCorrect: true },
      { id: 2, text: 'Laranja', isCorrect: false },
      { id: 3, text: 'Roxo', isCorrect: false }
    ],
    hint: 'É a cor da relva e das folhas das árvores'
  },
  {
    id: 46,
    title: 'O Mistério do Desporto',
    question: 'Em que desporto se usa uma bola redonda e se marca golos?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Ténis', isCorrect: false },
      { id: 2, text: 'Futebol', isCorrect: true },
      { id: 3, text: 'Natação', isCorrect: false }
    ],
    hint: 'É o desporto mais popular em Portugal'
  },
  {
    id: 47,
    title: 'O Enigma do Tempo',
    question: 'Quantos meses tem um ano?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: '10 meses', isCorrect: false },
      { id: 2, text: '12 meses', isCorrect: true },
      { id: 3, text: '7 meses', isCorrect: false }
    ],
    hint: 'Janeiro, fevereiro, março... até dezembro'
  },
  {
    id: 48,
    title: 'O Caso dos Instrumentos',
    question: 'Qual destes é um instrumento de cordas?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Flauta', isCorrect: false },
      { id: 2, text: 'Tambor', isCorrect: false },
      { id: 3, text: 'Guitarra', isCorrect: true }
    ],
    hint: 'Tocas com os dedos nas cordas para fazer música'
  },
  {
    id: 49,
    title: 'O Enigma da Habitação',
    question: 'Onde dormimos à noite?',
    difficulty: 'fácil',
    answers: [
      { id: 1, text: 'Cama', isCorrect: true },
      { id: 2, text: 'Mesa', isCorrect: false },
      { id: 3, text: 'Cadeira', isCorrect: false }
    ],
    hint: 'É confortável e tem almofadas e lençóis'
  },
  {
    id: 50,
    title: 'O Mistério da Natureza',
    question: 'Qual destes NÃO é uma estação do ano?',
    difficulty: 'médio',
    answers: [
      { id: 1, text: 'Inverno', isCorrect: false },
      { id: 2, text: 'Lua', isCorrect: true },
      { id: 3, text: 'Primavera', isCorrect: false }
    ],
    hint: 'É o satélite natural da Terra'
  }
];
