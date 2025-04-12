import { Riddle } from '../types/riddle';

export const riddles: Riddle[] = [
  {
    id: 1,
    title: 'O Objeto com Dentes',
    question: "O que tem dentes mas não morde?",
    answer: "Pente",
    difficulty: "fácil",
    hint: "Usamos para arrumar o cabelo",
    contextualOptions: [
      { text: "Podemos encontrar na casa de banho para arrumar o cabelo", isCorrect: true },
      { text: "Não está na cozinha e não serve para cortar alimentos", isCorrect: false },
      { text: "Não usamos para escrever nem para desenhar", isCorrect: false }
    ]
  },
  {
    id: 2,
    title: 'O Enigma do Tempo',
    question: "O que nasce grande e morre pequeno?",
    answer: "Vela",
    difficulty: "fácil",
    hint: "Ilumina quando há escuridão",
    contextualOptions: [
      { text: "Encontramos nos aniversários para fazer um pedido", isCorrect: true },
      { text: "Não é usado no quarto nem serve para descansar", isCorrect: false },
      { text: "Não levamos para a escola nem é um material escolar", isCorrect: false }
    ]
  },
  {
    id: 3,
    title: 'O Mistério do Vai e Vem',
    question: "O que vai e volta mas nunca se move?",
    answer: "Porta",
    difficulty: "fácil",
    hint: "Abre e fecha sem sair do lugar",
    contextualOptions: [
      { text: "Está em todas as divisões da casa para entrar e sair", isCorrect: true },
      { text: "Não está no jardim nem serve para brincar", isCorrect: false },
      { text: "Não levamos connosco quando saímos", isCorrect: false }
    ]
  },
  {
    id: 4,
    title: 'O Enigma da Falsa Realeza',
    question: "Tem coroa mas não é rei, tem espinhos mas não é rosa. O que é?",
    answer: "Abacaxi",
    difficulty: "médio",
    hint: "É uma fruta tropical",
    contextualOptions: [
      { text: "Encontramos na frutaria ou no supermercado", isCorrect: true },
      { text: "Usamos para decorar a cabeça em festas", isCorrect: false },
      { text: "É uma planta que cresce no jardim", isCorrect: false }
    ]
  },
  {
    id: 5,
    title: 'O Paradoxo do Caminho',
    question: "Feito para andar, mas não anda?",
    answer: "Rua",
    difficulty: "médio",
    hint: "Os carros passam por cima",
    contextualOptions: [
      { text: "Está lá fora onde passam os carros e as pessoas", isCorrect: true },
      { text: "É um caminho que leva a diferentes lugares", isCorrect: false },
      { text: "Pode ser feito de pedra ou asfalto", isCorrect: false }
    ]
  },
  {
    id: 6,
    title: 'O Segredo do Movimento Imóvel',
    question: "Sobe e desce mas fica sempre no mesmo lugar?",
    answer: "Escada",
    difficulty: "fácil", 
    hint: "Usamos para subir e descer",
    contextualOptions: [
      { text: "Encontramos em casas com vários andares para subir e descer", isCorrect: true },
      { text: "Não está na cozinha nem serve para fazer comida", isCorrect: false },
      { text: "Não levamos na mochila para a escola", isCorrect: false }
    ]
  },
  {
    id: 7,
    title: 'O Tesouro de Folhas',
    question: "Tem capa mas não é herói, tem folhas mas não é árvore?",
    answer: "Livro",
    difficulty: "médio",
    hint: "Podemos ler histórias nele",
    contextualOptions: [
      { text: "Encontramos na escola ou biblioteca para ler histórias", isCorrect: true },
      { text: "É usado para guardar conhecimento", isCorrect: false },
      { text: "Pode ser feito de papel reciclado", isCorrect: false }
    ]
  },
  {
    id: 8,
    title: 'O Intruso Invisível',
    question: "Enche uma casa, mas não ocupa espaço?",
    answer: "Luz",
    difficulty: "médio",
    hint: "Vem de lâmpadas ou do sol",
    contextualOptions: [
      { text: "Acendemos em todas as divisões da casa quando fica escuro", isCorrect: true },
      { text: "É essencial para a visão humana", isCorrect: false },
      { text: "Pode ser natural ou artificial", isCorrect: false }
    ]
  },
  {
    id: 9,
    title: 'O Andarilho da Cabeça',
    question: "O que é que anda com os pés na cabeça?",
    answer: "Piolho",
    difficulty: "médio",
    hint: "É um inseto muito pequeno",
    contextualOptions: [
      { text: "Podemos encontrar no cabelo e causa comichão", isCorrect: true },
      { text: "É um parasita que vive em humanos", isCorrect: false },
      { text: "Pode ser eliminado com produtos específicos", isCorrect: false }
    ]
  },
  {
    id: 10,
    title: 'O Mistério Sem Cabeça',
    question: "O que é que tem pescoço mas não tem cabeça?",
    answer: "Garrafa",
    difficulty: "médio",
    hint: "Usamos para guardar líquidos",
    contextualOptions: [
      { text: "Encontramos na cozinha para guardar água ou sumo", isCorrect: true },
      { text: "Pode ser feita de vidro ou plástico", isCorrect: false },
      { text: "É usada para armazenar bebidas", isCorrect: false }
    ]
  },
  {
    id: 11,
    title: 'A Fruta Colorida',
    question: "Sou verde por fora e vermelho por dentro. O que sou?",
    answer: "Melancia",
    difficulty: "fácil",
    hint: "Sou uma fruta grande e refrescante",
    contextualOptions: [
      { text: "Encontras-me no supermercado durante o verão", isCorrect: true },
      { text: "Não sou um objeto que usas para escrever", isCorrect: false },
      { text: "Não estou na casa de banho nem serve para te lavares", isCorrect: false }
    ]
  },
  {
    id: 12,
    title: 'O Inimigo da Luz',
    question: "O que é que quanto mais cresce, menos se vê?",
    answer: "Escuridão",
    difficulty: "difícil",
    hint: "Acontece quando não há luz",
    contextualOptions: [
      { text: "Aparece sempre à noite quando as luzes se apagam", isCorrect: true },
      { text: "É um fenómeno natural relacionado com o tempo", isCorrect: false },
      { text: "Pode ser medido com instrumentos especiais", isCorrect: false }
    ]
  },
  {
    id: 13,
    title: 'O Paradoxo do Calor',
    question: "Quanto mais quente, mais fresco?",
    answer: "Pão",
    difficulty: "difícil",
    hint: "Sai quentinho do forno",
    contextualOptions: [
      { text: "Encontramos na padaria acabado de fazer", isCorrect: true },
      { text: "É um alimento básico em muitas culturas", isCorrect: false },
      { text: "Pode ser feito com diferentes tipos de farinha", isCorrect: false }
    ]
  },
  {
    id: 14,
    title: 'A Letra Escondida',
    question: "O que é que está sempre no meio do mar?",
    answer: "A letra 'a'",
    difficulty: "difícil",
    hint: "É uma letra do alfabeto",
    contextualOptions: [
      { text: "É algo que aprendemos quando começamos a ler e escrever", isCorrect: true },
      { text: "É uma parte essencial da linguagem escrita", isCorrect: false },
      { text: "Pode ser encontrada em muitas palavras", isCorrect: false }
    ]
  },
  {
    id: 15,
    title: 'O Objeto Flutuante',
    question: "Quando está cheio pesa menos?",
    answer: "Balão",
    difficulty: "médio",
    hint: "Enche-se com ar e flutua",
    contextualOptions: [
      { text: "Utilizamos em festas de aniversário para decorar", isCorrect: true },
      { text: "Pode ser feito de borracha ou plástico", isCorrect: false },
      { text: "É usado para criar ambientes festivos", isCorrect: false }
    ]
  },
  {
    id: 16,
    title: 'O Protetor da Mão',
    question: "Tenho quatro dedos e um polegar, mas não sou uma mão?",
    answer: "Luva",
    difficulty: "médio",
    hint: "Protege as mãos do frio",
    contextualOptions: [
      { text: "Usamos no inverno para aquecer as mãos", isCorrect: true },
      { text: "Pode ser feita de lã ou couro", isCorrect: false },
      { text: "É usada para proteger as mãos em diversas atividades", isCorrect: false }
    ]
  },
  {
    id: 17,
    title: 'O Enigma do Crescimento',
    question: "Qual é a coisa que quanto mais se tira, maior fica?",
    answer: "Buraco",
    difficulty: "médio",
    hint: "Uma abertura que cresce quando removemos mais",
    contextualOptions: [
      { text: "Forma-se quando escavamos na terra ou na parede", isCorrect: true },
      { text: "Pode ser encontrado em diferentes superfícies", isCorrect: false },
      { text: "É usado para criar passagens ou esconder objetos", isCorrect: false }
    ]
  },
  {
    id: 18,
    title: 'O Auxiliar da Refeição',
    question: "Não se come, mas é bom para se comer com?",
    answer: "Talher",
    difficulty: "fácil",
    hint: "Usamos para comer a comida",
    contextualOptions: [
      { text: "Encontras ao lado do prato na mesa de refeições", isCorrect: true },
      { text: "Não é um móvel onde guardamos as roupas", isCorrect: false },
      { text: "Não usamos para nos sentarmos", isCorrect: false }
    ]
  },
  {
    id: 19,
    title: 'O Movimento Celestial',
    question: "Cai de pé e corre deitado?",
    answer: "Chuva",
    difficulty: "médio",
    hint: "Vem do céu quando o tempo está nublado",
    contextualOptions: [
      { text: "Molha-nos quando saímos sem guarda-chuva", isCorrect: true },
      { text: "É essencial para a vida na Terra", isCorrect: false },
      { text: "Pode ser acompanhada por trovões e relâmpagos", isCorrect: false }
    ]
  },
  {
    id: 20,
    title: 'O Guardião do Tempo',
    question: "Dá voltas e voltas mas não sai do lugar?",
    answer: "Relógio",
    difficulty: "fácil",
    hint: "Marca as horas",
    contextualOptions: [
      { text: "Está na parede ou no pulso para ver as horas", isCorrect: true },
      { text: "Não é um brinquedo que roda", isCorrect: false },
      { text: "Não usamos na cozinha para preparar alimentos", isCorrect: false }
    ]
  },
  {
    id: 21,
    title: 'O Objeto Pontudo',
    question: "O que tem cabeça mas não tem corpo?",
    answer: "Alfinete",
    difficulty: "médio",
    hint: "Usado para prender tecidos",
    contextualOptions: [
      { text: "Encontramos na caixa de costura para prender roupa", isCorrect: true },
      { text: "É usado em trabalhos de artesanato", isCorrect: false },
      { text: "Pode ser feito de metal ou plástico", isCorrect: false }
    ]
  },
  {
    id: 22,
    title: 'O Segredo da Palavra',
    question: "Sem mim, Paris seria Pais. Quem sou eu?",
    answer: "A letra 'r'",
    difficulty: "difícil",
    hint: "É uma letra que faz o som 'rrr'",
    contextualOptions: [
      { text: "Aprendemos quando começamos a ler na escola", isCorrect: true },
      { text: "É uma parte essencial da linguagem escrita", isCorrect: false },
      { text: "Pode ser encontrada em muitas palavras", isCorrect: false }
    ]
  },
  {
    id: 23,
    title: 'O Adoçante Branco',
    question: "Branco como a neve, doce como o mel?",
    answer: "Açúcar",
    difficulty: "fácil",
    hint: "Adoça os alimentos",
    contextualOptions: [
      { text: "Encontramos na cozinha para adoçar bolos e bebidas", isCorrect: true },
      { text: "Não é um brinquedo para as crianças", isCorrect: false },
      { text: "Não usamos para limpar a casa", isCorrect: false }
    ]
  },
  {
    id: 24,
    title: 'O Absolvente Molhado',
    question: "O que fica molhado quanto mais seca?",
    answer: "Toalha",
    difficulty: "médio",
    hint: "Usamos depois do banho",
    contextualOptions: [
      { text: "Encontramos na casa de banho para nos secarmos", isCorrect: true },
      { text: "É feita de tecido absorvente", isCorrect: false },
      { text: "Pode ser usada em diferentes tamanhos e cores", isCorrect: false }
    ]
  },
  {
    id: 25,
    title: 'O Cogumelo Peculiar',
    question: "Tem chapéu, mas não tem cabeça?",
    answer: "Cogumelo",
    difficulty: "médio",
    hint: "Cresce na floresta",
    contextualOptions: [
      { text: "Algumas espécies podem ser comidas em saladas ou sopas", isCorrect: true },
      { text: "É um fungo que cresce em ambientes úmidos", isCorrect: false },
      { text: "Pode ser encontrado em diferentes formas e tamanhos", isCorrect: false }
    ]
  },
  {
    id: 26,
    title: 'O Inaudível Quebrado',
    question: "Sempre quebra quando se fala?",
    answer: "Silêncio",
    difficulty: "difícil",
    hint: "Acontece quando ninguém está falando",
    contextualOptions: [
      { text: "É necessário em bibliotecas e salas de aula concentradas", isCorrect: true },
      { text: "É uma condição que promove a concentração", isCorrect: false },
      { text: "Pode ser interrompido por ruídos inesperados", isCorrect: false }
    ]
  },
  {
    id: 27,
    title: 'O Enigma do Dente',
    question: "Tem raiz mas não é planta?",
    answer: "Dente",
    difficulty: "médio",
    hint: "Temos na boca",
    contextualOptions: [
      { text: "Precisamos para mastigar os alimentos", isCorrect: true },
      { text: "É uma parte essencial do sistema digestivo", isCorrect: false },
      { text: "Pode ser cuidado por dentistas", isCorrect: false }
    ]
  },
  {
    id: 28,
    title: 'O Órgão Engelhado',
    question: "Quanto mais rugas, mais valioso é?",
    answer: "Cérebro",
    difficulty: "difícil",
    hint: "Está dentro da cabeça",
    contextualOptions: [
      { text: "Usamos para pensar e resolver problemas", isCorrect: true },
      { text: "É responsável por controlar o corpo", isCorrect: false },
      { text: "Pode ser estudado em neurociência", isCorrect: false }
    ]
  },
  {
    id: 29,
    title: 'O Seguidor Seco',
    question: "Anda na chuva mas não se molha?",
    answer: "Sombra",
    difficulty: "médio",
    hint: "Segue-te para todo lado quando há luz",
    contextualOptions: [
      { text: "Aparece no chão quando o sol brilha", isCorrect: true },
      { text: "É uma projeção causada pela luz", isCorrect: false },
      { text: "Pode mudar de forma dependendo da posição da luz", isCorrect: false }
    ]
  },
  {
    id: 30,
    title: 'A Fruta Vestida',
    question: "Não visto roupas, mas tenho mangas. O que sou?",
    answer: "Fruta (como manga)",
    difficulty: "médio",
    hint: "É algo que podemos comer",
    contextualOptions: [
      { text: "Encontramos na frutaria, tem casca e é doce", isCorrect: true },
      { text: "É uma fruta tropical muito apreciada", isCorrect: false },
      { text: "Pode ser usada em sobremesas e sucos", isCorrect: false }
    ]
  },
  {
    id: 31,
    title: 'O Objeto Sem Corpo',
    question: "O que tem cabeça e uma última ponta, mas não tem corpo?",
    answer: "Fósforo",
    difficulty: "médio",
    hint: "Usado para acender fogo",
    contextualOptions: [
      { text: "Encontramos em caixas na cozinha para acender o fogão", isCorrect: true },
      { text: "É feito de madeira ou papel", isCorrect: false },
      { text: "Pode ser usado em acampamentos e emergências", isCorrect: false }
    ]
  },
  {
    id: 32,
    title: 'O Contador Imóvel',
    question: "O que está sempre em movimento, mas nunca sai do lugar?",
    answer: "Relógio",
    difficulty: "fácil",
    hint: "Marca o tempo",
    contextualOptions: [
      { text: "Está na parede ou no pulso e tem ponteiros que giram", isCorrect: true },
      { text: "Não é um tipo de veículo", isCorrect: false },
      { text: "Não usamos para nos sentarmos", isCorrect: false }
    ]
  },
  {
    id: 33,
    title: 'A Lágrima Voadora',
    question: "O que é que voa sem ter asas e chora sem ter olhos?",
    answer: "Nuvem",
    difficulty: "difícil",
    hint: "Está no céu e traz chuva",
    contextualOptions: [
      { text: "Pode ser branca num dia de sol ou cinzenta antes de chover", isCorrect: true },
      { text: "É formada por partículas de água suspensas", isCorrect: false },
      { text: "Pode ser vista em diferentes formas e tamanhos", isCorrect: false }
    ]
  },
  {
    id: 34,
    title: 'O Invisível Viajante',
    question: "O que passa diante do sol sem fazer sombra?",
    answer: "Vento",
    difficulty: "difícil",
    hint: "Não podemos ver, mas podemos sentir",
    contextualOptions: [
      { text: "Sentimos na cara quando está forte e pode abanar as árvores", isCorrect: true },
      { text: "É causado por diferenças de pressão atmosférica", isCorrect: false },
      { text: "Pode ser usado para gerar energia renovável", isCorrect: false }
    ]
  },
  {
    id: 35,
    title: 'O Princípio Irreversível',
    question: "O que pode ser aberto mas nunca fechado?",
    answer: "Ovo",
    difficulty: "médio",
    hint: "As galinhas põem",
    contextualOptions: [
      { text: "Usamos para fazer bolos e encontramos no supermercado", isCorrect: true },
      { text: "É uma fonte de proteína na alimentação", isCorrect: false },
      { text: "Pode ser cozido ou frito", isCorrect: false }
    ]
  },
  {
    id: 36,
    title: 'O Mal Contagioso',
    question: "O que se pode apanhar mas não se pode atirar?",
    answer: "Constipação",
    difficulty: "médio",
    hint: "Acontece quando ficamos doentes",
    contextualOptions: [
      { text: "Faz-nos espirrar e ter tosse quando estamos doentes", isCorrect: true },
      { text: "É causada por vírus ou mudanças de temperatura", isCorrect: false },
      { text: "Pode ser tratada com repouso e medicamentos", isCorrect: false }
    ]
  },
  {
    id: 37,
    title: 'O Instrumento com Chaves',
    question: "O que tem chave mas não tem porta?",
    answer: "Piano",
    difficulty: "médio",
    hint: "É um instrumento musical",
    contextualOptions: [
      { text: "Encontramos em salas de música e tem teclas pretas e brancas", isCorrect: true },
      { text: "É usado para criar melodias e harmonias", isCorrect: false },
      { text: "Pode ser acústico ou digital", isCorrect: false }
    ]
  },
  {
    id: 38,
    title: 'O Enigma da Coroa',
    question: "Tem coroa mas não é rei, tem raiz mas não é planta?",
    answer: "Dente",
    difficulty: "médio",
    hint: "Usamos para mastigar",
    contextualOptions: [
      { text: "Está dentro da boca e podemos perder quando somos pequenos", isCorrect: true },
      { text: "É uma parte essencial do sistema digestivo", isCorrect: false },
      { text: "Pode ser cuidado por dentistas", isCorrect: false }
    ]
  },
  {
    id: 39,
    title: 'A Garrafa Festiva',
    question: "Qual é a coisa que ganha vida ao cortar-lhe a cabeça?",
    answer: "Champanhe",
    difficulty: "difícil",
    hint: "Uma bebida especial para momentos especiais",
    contextualOptions: [
      { text: "Abrimos em festas e celebrações importantes", isCorrect: true },
      { text: "É uma bebida gaseificada e alcoólica", isCorrect: false },
      { text: "Pode ser encontrada em diferentes marcas e sabores", isCorrect: false }
    ]
  },
  {
    id: 40,
    title: 'O Vegetal Observador',
    question: "Tem olhos, mas não vê?",
    answer: "Batata",
    difficulty: "fácil",
    hint: "É um vegetal que cresce debaixo da terra",
    contextualOptions: [
      { text: "Usamos para fazer puré ou batatas fritas", isCorrect: true },
      { text: "Não é um dispositivo eletrónico", isCorrect: false },
      { text: "Não encontramos na sala para decoração", isCorrect: false }
    ]
  },
  {
    id: 41,
    title: 'O Enigma do Aumento',
    question: "O que fica maior quando se tira um pedaço?",
    answer: "Buraco",
    difficulty: "médio",
    hint: "Uma abertura no chão ou parede",
    contextualOptions: [
      { text: "Quanto mais escavamos, maior se torna", isCorrect: true },
      { text: "Pode ser encontrado em diferentes superfícies", isCorrect: false },
      { text: "É usado para criar passagens ou esconder objetos", isCorrect: false }
    ]
  },
  {
    id: 42,
    title: 'O Seguidor Diurno',
    question: "Vai atrás de ti o dia todo, desaparece à noite?",
    answer: "Sombra",
    difficulty: "fácil",
    hint: "Fica escura no chão quando o sol brilha",
    contextualOptions: [
      { text: "Aparece no chão quando estamos ao sol", isCorrect: true },
      { text: "Não é um animal doméstico", isCorrect: false },
      { text: "Não usamos para nos vestir", isCorrect: false }
    ]
  },
  {
    id: 43,
    title: 'O Guardião de Histórias',
    question: "Tem capa mas não é super-herói?",
    answer: "Livro",
    difficulty: "fácil",
    hint: "Tem páginas cheias de histórias",
    contextualOptions: [
      { text: "Encontramos nas bibliotecas cheios de palavras e histórias", isCorrect: true },
      { text: "Não é um tipo de roupa", isCorrect: false },
      { text: "Não usamos para nos proteger da chuva", isCorrect: false }
    ]
  },
  {
    id: 44,
    title: 'O Tesouro Pessoal',
    question: "O que te pertence, mas os outros usam mais do que tu?",
    answer: "Teu nome",
    difficulty: "difícil",
    hint: "É como as pessoas te chamam",
    contextualOptions: [
      { text: "É o que dizem quando querem chamar a tua atenção", isCorrect: true },
      { text: "É uma parte essencial da identidade pessoal", isCorrect: false },
      { text: "Pode ser usado em documentos oficiais", isCorrect: false }
    ]
  },
  {
    id: 45,
    title: 'O Enigma da Mobilidade',
    question: "Qual a coisa que não tem pés, mas anda?",
    answer: "Relógio",
    difficulty: "fácil",
    hint: "Tic-tac, tic-tac",
    contextualOptions: [
      { text: "Está na parede ou no pulso e marca as horas", isCorrect: true },
      { text: "Não é um tipo de veículo", isCorrect: false },
      { text: "Não usamos para transportar objetos", isCorrect: false }
    ]
  },
  {
    id: 46,
    title: 'O Nadador Seco',
    question: "O que se mete na água e não se molha?",
    answer: "Sombra",
    difficulty: "médio",
    hint: "É escura e segue-te quando há luz",
    contextualOptions: [
      { text: "Segue-te quando caminhas ao sol, mesmo sobre a água", isCorrect: true },
      { text: "É uma projeção causada pela luz", isCorrect: false },
      { text: "Pode mudar de forma dependendo da posição da luz", isCorrect: false }
    ]
  },
  {
    id: 47,
    title: 'O Lugar sem Saltos',
    question: "Em que lugar a bola não quica?",
    answer: "Na água",
    difficulty: "médio",
    hint: "É um líquido que bebemos",
    contextualOptions: [
      { text: "Encontramos nas praias, rios, lagos e sai das torneiras", isCorrect: true },
      { text: "É essencial para a vida na Terra", isCorrect: false },
      { text: "Pode ser usada para diferentes atividades", isCorrect: false }
    ]
  },
  {
    id: 48,
    title: 'O Enigma do Médico',
    question: "Um pai e um filho estão num acidente de carro. O pai morre e o filho é levado às pressas para o hospital. Lá, o médico olha para o menino e diz: Eu não posso operá-lo, ele é meu filho! Como isso é possível?",
    answer: "O médico é a mãe",
    difficulty: "difícil",
    hint: "Pense em quem mais poderia ser um dos pais do menino",
    contextualOptions: [
      { text: "É uma pessoa que pode ter filhos e também uma profissão", isCorrect: true },
      { text: "É uma questão de lógica e não de magia", isCorrect: false },
      { text: "Pode ser entendido ao considerar diferentes relações familiares", isCorrect: false }
    ]
  },
  {
    id: 49,
    title: 'O Mais Leve do Mundo',
    question: "Qual é a coisa mais leve do mundo?",
    answer: "Pensamento",
    difficulty: "difícil",
    hint: "Está dentro da nossa cabeça",
    contextualOptions: [
      { text: "Acontece na nossa mente quando temos ideias", isCorrect: true },
      { text: "É uma atividade cerebral que gera criatividade", isCorrect: false },
      { text: "Pode ser influenciado por emoções e experiências", isCorrect: false }
    ]
  },
  {
    id: 50,
    title: 'O Tempero com Dentes',
    question: "Tenho cabeça e não tenho cérebro, tenho dentes mas não como. O que sou eu?",
    answer: "Alho",
    difficulty: "médio",
    hint: "Sou um tempero muito usado na cozinha",
    contextualOptions: [
      { text: "Encontra-se na cozinha para dar sabor às refeições", isCorrect: true },
      { text: "É usado em diversas receitas culinárias", isCorrect: false },
      { text: "Pode ser encontrado em diferentes formas e tamanhos", isCorrect: false }
    ]
  }
];
