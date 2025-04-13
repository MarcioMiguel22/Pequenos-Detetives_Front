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
  },
  {
    id: 6,
    title: 'O Mistério do Invisível',
    question: "O que fica mais molhado quanto mais seca?",
    answer: "Toalha",
    difficulty: "difícil",
    hints: [
      "É usado no banheiro",
      "Você usa após tomar banho",
      "Absorve líquidos"
    ],
    explanation: "Uma toalha é usada para secar coisas ou pessoas, e no processo de secar, ela fica mais molhada."
  },
  {
    id: 7,
    title: 'O Desafio Celestial',
    question: "Sobe e desce, mas permanece sempre no mesmo lugar. O que é?",
    answer: "Escada",
    difficulty: "médio",
    hints: [
      "Conecta diferentes níveis",
      "Tem degraus",
      "É usada para mudar de altura"
    ],
    explanation: "Uma escada permite que as pessoas subam e desçam, mas a escada em si permanece fixa no mesmo lugar."
  },
  {
    id: 8,
    title: 'O Enigma do Tempo',
    question: "Qual é a coisa que quanto mais cresce, menos se vê?",
    answer: "Escuridão",
    difficulty: "difícil",
    hints: [
      "Está relacionada com a ausência de luz",
      "Aparece todas as noites",
      "Torna difícil enxergar"
    ],
    explanation: "Quanto mais a escuridão cresce, menos conseguimos ver ao nosso redor."
  },
  {
    id: 9,
    title: 'O Paradoxo da Existência',
    question: "O que é que quanto mais tiramos, maior fica?",
    answer: "Buraco",
    difficulty: "médio",
    hints: [
      "É um espaço vazio",
      "Quanto mais escavamos, maior fica",
      "Pode ser feito na terra"
    ],
    explanation: "Quanto mais terra ou material removemos de um buraco, maior ele se torna."
  },
  {
    id: 10,
    title: 'O Mistério do Cotidiano',
    question: "O que tem olhos mas não vê, tem boca mas não fala, tem pés mas não anda?",
    answer: "Boneco",
    difficulty: "médio",
    hints: [
      "É um objeto inanimado",
      "Pode ser um brinquedo",
      "Parece humano mas não é"
    ],
    explanation: "Um boneco ou uma boneca possui elementos que parecem olhos, boca e pés, mas não têm a função real desses órgãos."
  },
  {
    id: 11,
    title: 'O Enigma Meteorológico',
    question: "O que cai mas nunca se machuca?",
    answer: "Chuva",
    difficulty: "fácil",
    hints: [
      "Vem do céu",
      "Está relacionado com o clima",
      "É formado por gotas"
    ],
    explanation: "A chuva cai do céu até o chão, mas como é líquida, não se machuca ao cair."
  },
  {
    id: 12,
    title: 'O Paradoxo da Nutrição',
    question: "O que tem raiz mas não é planta, tem folhas mas não é árvore, tem números mas não é matemática?",
    answer: "Livro",
    difficulty: "difícil",
    hints: [
      "Contém informações",
      "É feito de papel",
      "Pode ser lido"
    ],
    explanation: "Um livro tem raiz (palavra raiz), folhas (páginas) e números (nas páginas), mas não é uma planta, árvore ou matemática."
  },
  {
    id: 13,
    title: 'O Enigma Anatômico',
    question: "O que tem dentes mas não mastiga?",
    answer: "Pente",
    difficulty: "fácil",
    hints: [
      "É usado para cuidados pessoais",
      "Relacionado com o cabelo",
      "Tem várias pontas alinhadas"
    ],
    explanation: "Um pente tem dentes que são usados para pentear o cabelo, não para mastigar."
  },
  {
    id: 14,
    title: 'O Paradoxo da Velocidade',
    question: "O que fica mais rápido quanto mais lento vai?",
    answer: "Relógio",
    difficulty: "difícil",
    hints: [
      "Mede o tempo",
      "Tem ponteiros",
      "Quando funciona mal, adianta-se"
    ],
    explanation: "Quando um relógio funciona mais lentamente do que deveria, ele marca horas mais adiantadas, parecendo ir mais rápido em relação ao tempo real."
  },
  {
    id: 15,
    title: 'O Enigma da Transparência',
    question: "Quanto mais me usas, menos me vês. O que sou eu?",
    answer: "Óculos",
    difficulty: "médio",
    hints: [
      "Ajuda a ver melhor",
      "É usado no rosto",
      "Tem lentes"
    ],
    explanation: "Quando usamos óculos, não os vemos diretamente, pois estão na frente dos nossos olhos. Quanto mais os usamos, menos percebemos sua presença."
  },
  {
    id: 16,
    title: 'O Paradoxo da Comunicação',
    question: "O que pode escrever mas não pode ler?",
    answer: "Caneta",
    difficulty: "fácil",
    hints: [
      "É um objeto de escrita",
      "Contém tinta",
      "É usado para comunicação escrita"
    ],
    explanation: "Uma caneta pode escrever, mas não tem capacidade de ler o que foi escrito."
  },
  {
    id: 17,
    title: 'O Mistério do Lar',
    question: "O que tem chave mas não abre portas?",
    answer: "Piano",
    difficulty: "médio",
    hints: [
      "É um instrumento musical",
      "Tem teclas pretas e brancas",
      "Produz sons quando pressionado"
    ],
    explanation: "Um piano tem chaves (teclas), mas elas não são usadas para abrir portas, mas sim para produzir notas musicais."
  },
  {
    id: 18,
    title: 'O Enigma da Luz',
    question: "O que é que quanto mais se tira, mais se tem?",
    answer: "Fotografia",
    difficulty: "difícil",
    hints: [
      "Envolve uma câmera",
      "Captura momentos",
      "Relaciona-se com imagens"
    ],
    explanation: "Quanto mais fotografias tiramos, mais fotografias temos em nossa coleção."
  },
  {
    id: 19,
    title: 'O Paradoxo da Memória',
    question: "O que vai a todos os lugares e nunca sai do lugar?",
    answer: "Estrada",
    difficulty: "médio",
    hints: [
      "Conecta diferentes locais",
      "É usada para viajar",
      "Veículos passam por ela"
    ],
    explanation: "Uma estrada liga vários lugares e permite que as pessoas viajem, mas ela própria nunca se move do seu lugar."
  },
  {
    id: 20,
    title: 'O Enigma da Proteção',
    question: "O que tem coroa mas não é rei, tem raiz mas não é planta?",
    answer: "Dente",
    difficulty: "difícil",
    hints: [
      "Está na boca",
      "Usado para mastigar",
      "Tem diferentes partes anatômicas"
    ],
    explanation: "Um dente tem coroa (parte visível) e raiz (parte interna), mas não é um rei nem uma planta."
  },
  {
    id: 21,
    title: 'O Paradoxo do Silêncio',
    question: "O que é completamente negro, mas nunca está escuro?",
    answer: "Sombra",
    difficulty: "médio",
    hints: [
      "Segue você por todo lado",
      "Aparece quando há luz",
      "Muda de tamanho conforme o dia"
    ],
    explanation: "Uma sombra é escura/negra, mas só existe quando há luz, então nunca está completamente escuro quando ela está presente."
  },
  {
    id: 22,
    title: 'O Enigma das Estações',
    question: "O que pode correr mas nunca anda, tem boca mas nunca fala, tem cabeça mas nunca pensa, tem cama mas nunca dorme?",
    answer: "Rio",
    difficulty: "difícil",
    hints: [
      "É formado por água",
      "Flui pela natureza",
      "Desemboca no mar ou em outro rio"
    ],
    explanation: "Um rio corre (flui), tem boca (foz), tem cabeça (nascente) e leito (cama), mas não realiza nenhuma dessas ações como um ser vivo."
  },
  {
    id: 23,
    title: 'O Paradoxo da Natureza',
    question: "Tenho folhas, mas não sou árvore. Tenho capa, mas não sou super-herói. O que sou?",
    answer: "Livro",
    difficulty: "fácil",
    hints: [
      "Contém informações",
      "Pode ser lido",
      "Tem páginas numeradas"
    ],
    explanation: "Um livro tem folhas (páginas) e frequentemente uma capa, mas não é uma árvore nem um super-herói."
  },
  {
    id: 24,
    title: 'O Enigma do Conhecimento',
    question: "O que é que quanto mais você tira, maior fica?",
    answer: "Buraco",
    difficulty: "fácil",
    hints: [
      "É um espaço vazio",
      "Pode ser cavado",
      "Quanto mais se remove, maior ele se torna"
    ],
    explanation: "Quanto mais terra ou material você remove de um buraco, maior ele se torna."
  },
  {
    id: 25,
    title: 'O Paradoxo do Espaço',
    question: "O que é que quanto mais enche, menos pesa?",
    answer: "Balão",
    difficulty: "médio",
    hints: [
      "É inflável",
      "Pode voar",
      "É feito de material elástico"
    ],
    explanation: "Quando enchemos um balão com ar ou gás hélio, ele fica mais leve e pode flutuar, parecendo pesar menos quanto mais cheio está."
  },
  {
    id: 26,
    title: 'O Enigma da Percepção',
    question: "O que é invisível aos olhos, mas sentido pelo coração?",
    answer: "Amor",
    difficulty: "médio",
    hints: [
      "É um sentimento",
      "Conecta pessoas",
      "Motiva muitas ações humanas"
    ],
    explanation: "O amor não pode ser visto fisicamente, mas é sentido emocionalmente e influencia nossas ações e decisões."
  },
  {
    id: 27,
    title: 'O Paradoxo do Consumo',
    question: "O que é que quanto mais se alimenta, mais fome tem?",
    answer: "Fogo",
    difficulty: "médio",
    hints: [
      "Produz calor",
      "Consome materiais",
      "Pode ser apagado com água"
    ],
    explanation: "Quanto mais combustível fornecemos ao fogo, mais ele cresce e 'quer' consumir mais material."
  },
  {
    id: 28,
    title: 'O Enigma da Comunicação',
    question: "O que tem milhares de dentes mas não morde?",
    answer: "Pente",
    difficulty: "fácil",
    hints: [
      "É usado para arrumar o cabelo",
      "Tem vários dentes alinhados",
      "Pode ser feito de plástico ou madeira"
    ],
    explanation: "Um pente tem muitos dentes, mas eles servem para pentear o cabelo, não para morder."
  },
  {
    id: 29,
    title: 'O Paradoxo das Cores',
    question: "O que é branco quando sujo e preto quando limpo?",
    answer: "Quadro negro",
    difficulty: "difícil",
    hints: [
      "É usado em salas de aula",
      "Escreve-se nele com giz",
      "Fica branco quando cheio de anotações"
    ],
    explanation: "Um quadro negro (ou lousa) é preto quando está limpo, mas fica branco ou colorido quando escrevemos nele com giz, ou seja, quando o 'sujamos'."
  },
  {
    id: 30,
    title: 'O Enigma do Cotidiano',
    question: "O que tem chave mas não abre nenhuma porta?",
    answer: "Mapa",
    difficulty: "difícil",
    hints: [
      "Contém informações geográficas",
      "Ajuda a encontrar caminhos",
      "A 'chave' explica os símbolos"
    ],
    explanation: "Um mapa tem uma chave (legenda) que explica os símbolos, mas essa chave não abre portas físicas."
  },
  {
    id: 31,
    title: 'O Paradoxo da Visão',
    question: "O que é que quanto mais você olha, menos vê?",
    answer: "Escuridão",
    difficulty: "médio",
    hints: [
      "Está relacionada à ausência de luz",
      "À noite é mais intensa",
      "Dificulta a visão"
    ],
    explanation: "Quanto mais tempo olhamos para a escuridão, menos nossos olhos conseguem distinguir o que está à nossa volta."
  },
  {
    id: 32,
    title: 'O Enigma da Transformação',
    question: "O que nasce grande e morre pequeno?",
    answer: "Vela",
    difficulty: "médio",
    hints: [
      "Produz luz",
      "Derrete com o calor",
      "É feita de cera"
    ],
    explanation: "Uma vela começa grande quando nova e vai diminuindo à medida que queima, até ficar pequena e se extinguir."
  },
  {
    id: 33,
    title: 'O Paradoxo da Utilidade',
    question: "O que é que quanto mais se usa, menos serve?",
    answer: "Sabonete",
    difficulty: "fácil",
    hints: [
      "É usado para higiene",
      "Diminui com o uso",
      "Geralmente é sólido"
    ],
    explanation: "Um sabonete vai diminuindo à medida que é usado, até ficar tão pequeno que se torna difícil de utilizar."
  },
  {
    id: 34,
    title: 'O Enigma do Som',
    question: "O que é que mesmo sem asas, sempre está voando?",
    answer: "Tempo",
    difficulty: "difícil",
    hints: [
      "Nunca para",
      "Não pode ser tocado",
      "É medido por relógios"
    ],
    explanation: "O tempo está sempre 'voando' ou passando, mesmo sem ter asas ou qualquer forma física."
  },
  {
    id: 35,
    title: 'O Paradoxo da Natureza',
    question: "O que é que mesmo dentro de casa está sempre fora?",
    answer: "Botão",
    difficulty: "difícil",
    hints: [
      "Pode ser encontrado em roupas",
      "Serve para fechar algo",
      "Sua posição é externa"
    ],
    explanation: "Um botão está sempre do lado de fora da roupa, mesmo quando a roupa está dentro de casa."
  },
  {
    id: 36,
    title: 'O Enigma da Existência',
    question: "O que é que todos têm, mas ninguém pode perder?",
    answer: "Sombra",
    difficulty: "médio",
    hints: [
      "Segue você por todo lado",
      "Muda de tamanho durante o dia",
      "Desaparece na escuridão"
    ],
    explanation: "Todos têm uma sombra quando há luz, e não é possível perdê-la ou separar-se dela voluntariamente."
  },
  {
    id: 37,
    title: 'O Paradoxo do Conhecimento',
    question: "O que é que quanto mais você compartilha, mais você tem?",
    answer: "Conhecimento",
    difficulty: "médio",
    hints: [
      "Está relacionado com aprendizagem",
      "Pode ser ensinado",
      "Cresce ao ser transmitido"
    ],
    explanation: "Quando compartilhamos conhecimento, não o perdemos; pelo contrário, frequentemente aprendemos mais ao ensinar outros."
  },
  {
    id: 38,
    title: 'O Enigma da Agricultura',
    question: "O que cresce quando cai?",
    answer: "Idade",
    difficulty: "difícil",
    hints: [
      "Está relacionado com o tempo",
      "Todos nós temos",
      "Só aumenta, nunca diminui"
    ],
    explanation: "À medida que o tempo cai (passa), nossa idade aumenta constantemente."
  },
  {
    id: 39,
    title: 'O Paradoxo da Aparência',
    question: "O que tem face mas não tem corpo?",
    answer: "Moeda",
    difficulty: "fácil",
    hints: [
      "É usada como dinheiro",
      "Tem duas faces",
      "É feita de metal"
    ],
    explanation: "Uma moeda tem faces (cara e coroa), mas não tem um corpo no sentido anatômico."
  },
  {
    id: 40,
    title: 'O Enigma do Valor',
    question: "O que é que quanto mais você tira, mais você deixa para trás?",
    answer: "Pegadas",
    difficulty: "médio",
    hints: [
      "São marcas deixadas ao caminhar",
      "Mostram por onde você passou",
      "Podem ser vistas na areia ou na neve"
    ],
    explanation: "Quanto mais passos você dá (tira), mais pegadas deixa para trás no caminho."
  },
  {
    id: 41,
    title: 'O Paradoxo da Água',
    question: "O que fica cheio sem nada dentro e vazio com algo dentro?",
    answer: "Esponja",
    difficulty: "difícil",
    hints: [
      "Absorve líquidos",
      "É porosa",
      "Usada para limpeza"
    ],
    explanation: "Uma esponja fica 'cheia' quando absorve água (que ocupa os espaços vazios) e 'vazia' quando contém ar (algo) dentro de seus poros."
  },
  {
    id: 42,
    title: 'O Enigma da Visão',
    question: "O que pode ver tudo, mas não pode ser visto?",
    answer: "Imaginação",
    difficulty: "difícil",
    hints: [
      "É uma faculdade mental",
      "Cria imagens na mente",
      "Não tem forma física"
    ],
    explanation: "Nossa imaginação pode visualizar qualquer coisa, mas não pode ser vista fisicamente por ninguém, nem por nós mesmos."
  },
  {
    id: 43,
    title: 'O Paradoxo do Ambiente',
    question: "O que está sempre à sua frente, mas não pode ser visto?",
    answer: "Futuro",
    difficulty: "médio",
    hints: [
      "Ainda não aconteceu",
      "Está relacionado com o tempo",
      "Caminhamos em sua direção"
    ],
    explanation: "O futuro está sempre à nossa frente no tempo, mas não podemos vê-lo porque ainda não aconteceu."
  },
  {
    id: 44,
    title: 'O Enigma do Ciclo',
    question: "O que vem duas vezes na semana, uma vez no ano, mas nunca no dia?",
    answer: "A letra E",
    difficulty: "difícil",
    hints: [
      "É uma letra do alfabeto",
      "Aparece em certas palavras",
      "Olhe para a escrita das palavras mencionadas"
    ],
    explanation: "A letra 'E' aparece duas vezes na palavra 'semana', uma vez na palavra 'ano', e nenhuma vez na palavra 'dia'."
  },
  {
    id: 45,
    title: 'O Paradoxo da Iluminação',
    question: "O que sempre está chegando mas nunca chega?",
    answer: "Amanhã",
    difficulty: "médio",
    hints: [
      "Está relacionado com o tempo",
      "Vem após hoje",
      "É sempre futuro"
    ],
    explanation: "O amanhã está sempre chegando, mas quando chega, já se tornou 'hoje', nunca sendo realmente alcançado como 'amanhã'."
  },
  {
    id: 46,
    title: 'O Enigma da Presença',
    question: "O que você pode manter depois de dá-lo a alguém?",
    answer: "Palavra",
    difficulty: "difícil",
    hints: [
      "Está relacionado com promessas",
      "Envolve comunicação",
      "É algo imaterial"
    ],
    explanation: "Quando você dá sua palavra a alguém (faz uma promessa), ainda a mantém consigo, pois continua sendo responsável por cumpri-la."
  },
  {
    id: 47,
    title: 'O Paradoxo da Medição',
    question: "O que fica maior quanto mais se tira dele?",
    answer: "Buraco",
    difficulty: "fácil",
    hints: [
      "É um espaço vazio",
      "Criado por remoção",
      "Quanto mais se escava, maior fica"
    ],
    explanation: "Um buraco aumenta de tamanho quanto mais material removemos dele."
  },
  {
    id: 48,
    title: 'O Enigma da Clareza',
    question: "Tenho cidades sem casas, florestas sem árvores, mares sem água. O que sou eu?",
    answer: "Mapa",
    difficulty: "médio",
    hints: [
      "Representa lugares",
      "Ajuda na navegação",
      "É uma representação gráfica"
    ],
    explanation: "Um mapa mostra cidades, florestas e mares sem conter casas, árvores ou água reais, apenas símbolos que os representam."
  },
  {
    id: 49,
    title: 'O Paradoxo da Comunicação',
    question: "O que tem muitas teclas mas não abre nenhuma porta?",
    answer: "Piano",
    difficulty: "fácil",
    hints: [
      "É um instrumento musical",
      "Tem teclas pretas e brancas",
      "Produz sons"
    ],
    explanation: "Um piano tem muitas teclas, mas elas servem para produzir notas musicais, não para abrir portas."
  },
  {
    id: 50,
    title: 'O Enigma do Invisível',
    question: "O que você pode pegar mas não pode jogar?",
    answer: "Resfriado",
    difficulty: "médio",
    hints: [
      "É uma condição médica",
      "Causa espirros e tosse",
      "É contagioso"
    ],
    explanation: "Você pode 'pegar' um resfriado (ficar doente), mas não pode 'jogá-lo' como faria com uma bola."
  },
  {
    id: 51,
    title: 'O Paradoxo do Movimento',
    question: "O que tem pés mas não anda?",
    answer: "Mesa",
    difficulty: "fácil",
    hints: [
      "É um móvel",
      "Suporta objetos",
      "Geralmente tem quatro apoios"
    ],
    explanation: "Uma mesa tem pés (pernas), mas não pode andar ou se mover sozinha."
  },
  {
    id: 52,
    title: 'O Enigma das Sombras',
    question: "O que pode atravessar um rio sem se molhar?",
    answer: "Sombra",
    difficulty: "médio",
    hints: [
      "Não tem forma física",
      "Segue você",
      "É causada pela luz"
    ],
    explanation: "Uma sombra pode passar sobre a água de um rio sem se molhar, pois não tem substância física."
  },
  {
    id: 53,
    title: 'O Paradoxo da Leveza',
    question: "O que fica mais pesado quando está vazio?",
    answer: "Balão de ar quente",
    difficulty: "difícil",
    hints: [
      "Pode voar",
      "Usa calor para subir",
      "Quando 'vazio' de ar quente, desce"
    ],
    explanation: "Um balão de ar quente quando está 'vazio' (sem ar quente) é mais pesado relativamente e desce, enquanto quando está 'cheio' de ar quente, sobe por ser mais leve que o ar ao redor."
  },
  {
    id: 54,
    title: 'O Enigma do Círculo',
    question: "O que começa onde termina?",
    answer: "Círculo",
    difficulty: "médio",
    hints: [
      "É uma forma geométrica",
      "Não tem pontas",
      "É perfeitamente redondo"
    ],
    explanation: "Em um círculo, não existe um ponto de início ou fim definido; qualquer ponto pode ser considerado tanto o início quanto o fim."
  },
  {
    id: 55,
    title: 'O Paradoxo da Escuridão',
    question: "O que é que quanto mais escuro, mais visível se torna?",
    answer: "Estrelas",
    difficulty: "médio",
    hints: [
      "Estão no céu",
      "Brilham à noite",
      "São corpos celestes"
    ],
    explanation: "As estrelas se tornam mais visíveis quanto mais escuro está o céu, pois seu brilho contrasta com a escuridão."
  },
  {
    id: 56,
    title: 'O Enigma da Respiração',
    question: "O que você não consegue segurar por mais de alguns minutos, apesar de ser vital?",
    answer: "Respiração",
    difficulty: "fácil",
    hints: [
      "É automático",
      "Envolve ar",
      "É essencial para a vida"
    ],
    explanation: "Não podemos parar de respirar por muito tempo, pois é vital para nossa sobrevivência, mas podemos segurar a respiração por alguns instantes."
  },
  {
    id: 57,
    title: 'O Paradoxo da Simplicidade',
    question: "O que todo mundo tem, mas ninguém pode perder?",
    answer: "Nome",
    difficulty: "médio",
    hints: [
      "É parte da identidade",
      "É dado ao nascer",
      "É usado para identificação"
    ],
    explanation: "Todo mundo tem um nome, e mesmo que possa ser alterado, nunca se perde completamente, pois continua sendo parte da história da pessoa."
  },
  {
    id: 58,
    title: 'O Enigma da Presença',
    question: "O que está sempre na sua frente, mas você nunca consegue ver?",
    answer: "Futuro",
    difficulty: "médio",
    hints: [
      "Relaciona-se com o tempo",
      "Ainda não aconteceu",
      "Caminhamos em sua direção"
    ],
    explanation: "O futuro está sempre à nossa frente temporalmente, mas nunca podemos vê-lo diretamente, apenas antecipá-lo."
  },
  {
    id: 59,
    title: 'O Paradoxo da Inércia',
    question: "O que vai de Lisboa ao Porto sem se mover?",
    answer: "Estrada",
    difficulty: "médio",
    hints: [
      "Conecta cidades",
      "Permite viagens",
      "É construída no chão"
    ],
    explanation: "A estrada liga Lisboa ao Porto, mas permanece imóvel enquanto as pessoas e veículos se movem sobre ela."
  },
  {
    id: 60,
    title: 'O Enigma do Ciclo',
    question: "O que sempre vem, mas nunca chega?",
    answer: "Amanhã",
    difficulty: "fácil",
    hints: [
      "Relaciona-se com o tempo",
      "Segue o hoje",
      "É parte do futuro"
    ],
    explanation: "O amanhã está sempre vindo, mas quando chega, já se tornou hoje, nunca sendo realmente experimentado como amanhã."
  },
  {
    id: 61,
    title: 'O Paradoxo da Audição',
    question: "O que fala todas as línguas sem ter estudado nenhuma?",
    answer: "Eco",
    difficulty: "difícil",
    hints: [
      "É um fenômeno sonoro",
      "Repete o que ouve",
      "Ocorre em espaços grandes"
    ],
    explanation: "O eco repete qualquer som em qualquer língua sem 'conhecer' ou ter estudado nenhuma delas."
  },
  {
    id: 62,
    title: 'O Enigma da Vista',
    question: "O que você pode ver uma vez em um minuto, duas vezes em um momento, mas nunca em mil anos?",
    answer: "A letra M",
    difficulty: "difícil",
    hints: [
      "É uma letra do alfabeto",
      "Olhe para a escrita das palavras mencionadas",
      "Conte as ocorrências nas palavras"
    ],
    explanation: "A letra 'M' aparece uma vez na palavra 'minuto', duas vezes na palavra 'momento', e nenhuma vez na expressão 'mil anos'."
  },
  {
    id: 63,
    title: 'O Paradoxo do Tempo',
    question: "O que é tão frágil que apenas ao dizer o seu nome o quebras?",
    answer: "Silêncio",
    difficulty: "médio",
    hints: [
      "É a ausência de som",
      "É quebrado quando falamos",
      "Pode ser perturbador ou tranquilizador"
    ],
    explanation: "O silêncio é quebrado assim que alguém fala, inclusive quando alguém diz a palavra 'silêncio'."
  },
  {
    id: 64,
    title: 'O Enigma da Vida',
    question: "O que cresce sem estar vivo?",
    answer: "Montanha de lixo",
    difficulty: "fácil",
    hints: [
      "É resultado da atividade humana",
      "Aumenta com o descarte",
      "É prejudicial ao ambiente"
    ],
    explanation: "Uma montanha de lixo cresce à medida que mais resíduos são descartados, mas não é um organismo vivo."
  },
  {
    id: 65,
    title: 'O Paradoxo da Liberdade',
    question: "O que é que nunca faz perguntas, mas exige muitas respostas?",
    answer: "Exame",
    difficulty: "médio",
    hints: [
      "Está relacionado com avaliação",
      "Contém questões",
      "É usado para testar conhecimento"
    ],
    explanation: "Um exame não faz perguntas no sentido literal (é um objeto inanimado), mas contém questões que exigem respostas dos estudantes."
  }
]
