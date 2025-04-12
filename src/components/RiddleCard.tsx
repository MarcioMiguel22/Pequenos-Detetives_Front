import { useState, useEffect, useCallback } from 'react';
import { Riddle } from '../types/riddle';
import '../styles/PuzzleCard.css';

interface RiddleCardProps {
  riddle: Riddle;
  onCorrectAnswer: () => void;
}

export default function RiddleCard({ riddle, onCorrectAnswer }: RiddleCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [answerOptions, setAnswerOptions] = useState<Array<{text: string, original: string, isCorrect: boolean}>>([]);
  
  // Fisher-Yates shuffle algorithm
  const shuffleArray = useCallback(<T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }, []);
  
  // Function to scramble letters in a word
  const scrambleWord = useCallback((word: string) => {
    // For short words, just scramble the letters
    if (word.length <= 5) {
      const letters = word.split('');
      return shuffleArray(letters).join('');
    }
    
    // For longer words or phrases, use a mix of techniques
    const words = word.split(' ');
    
    return words.map(w => {
      // 50% chance to use each technique
      if (Math.random() > 0.5) {
        // Scramble middle letters, keep first and last in place
        if (w.length > 3) {
          const first = w.charAt(0);
          const last = w.charAt(w.length - 1);
          const middle = w.substring(1, w.length - 1);
          const scrambledMiddle = shuffleArray(middle.split('')).join('');
          return first + scrambledMiddle + last;
        } else {
          return shuffleArray(w.split('')).join('');
        }
      } else {
        // Replace some letters with underscores
        const letters = w.split('');
        return letters.map(letter => 
          Math.random() > 0.3 ? letter : '_'
        ).join('');
      }
    }).join(' ');
  }, [shuffleArray]);
  
  // Function to generate fake answers
  const generateFakeAnswers = useCallback((correctAnswer: string) => {
    // List of common words for fake answers
    const commonAnswers = [
      "sol", "lua", "céu", "água", "terra", "fogo", "vento", 
      "livro", "caneta", "papel", "mesa", "cadeira", "porta", 
      "janela", "carro", "bicicleta", "chapéu", "óculos", "relógio",
      "telefone", "computador", "árvore", "planta", "flor", "animal",
      "pássaro", "peixe", "gato", "cachorro", "leão", "tigre", "urso"
    ];
    
    // Make sure fake answers are different from correct answer and each other
    const result: string[] = [];
    
    // Try to use words with similar length to the correct answer
    const correctLength = correctAnswer.length;
    
    for (let i = 0; i < 2; i++) {
      let fake = "";
      
      if (i === 0 && correctAnswer.length > 3) {
        // First fake: try to use a word with similar letters
        const letters = correctAnswer.split('');
        const shuffled = shuffleArray([...letters]);
        fake = shuffled.join('');
        
        // Make sure it's different enough
        if (fake === correctAnswer) {
          // Swap two characters
          if (fake.length > 3) {
            const arr = fake.split('');
            const temp = arr[1];
            arr[1] = arr[2];
            arr[2] = temp;
            fake = arr.join('');
          } else {
            fake = commonAnswers[Math.floor(Math.random() * commonAnswers.length)];
          }
        }
      } else {
        // Use a common word with similar length
        const similarLengthWords = commonAnswers.filter(word => 
          Math.abs(word.length - correctLength) <= 2
        );
        
        if (similarLengthWords.length > 0) {
          fake = similarLengthWords[Math.floor(Math.random() * similarLengthWords.length)];
        } else {
          fake = commonAnswers[Math.floor(Math.random() * commonAnswers.length)];
        }
      }
      
      // Ensure it's different from correct answer and already chosen fakes
      if (fake !== correctAnswer && !result.includes(fake)) {
        result.push(fake);
      } else {
        // If we can't find a unique one, just add a random common word
        while (true) {
          const randomWord = commonAnswers[Math.floor(Math.random() * commonAnswers.length)];
          if (randomWord !== correctAnswer && !result.includes(randomWord)) {
            result.push(randomWord);
            break;
          }
        }
      }
    }
    
    return result;
  }, [shuffleArray]);
  
  // Memoize generateOptions with all dependencies included
  const generateOptions = useCallback((correctAnswer: string) => {
    // Create array with the correct answer
    const options = [
      { 
        text: scrambleWord(correctAnswer), 
        original: correctAnswer, 
        isCorrect: true 
      }
    ];
    
    // Generate 2 fake answers
    const fakeAnswers = generateFakeAnswers(correctAnswer);
    
    // Add fake answers to options
    fakeAnswers.forEach(answer => {
      options.push({
        text: scrambleWord(answer),
        original: answer,
        isCorrect: false
      });
    });
    
    // Shuffle the options
    return shuffleArray(options);
  }, [scrambleWord, generateFakeAnswers, shuffleArray]);
  
  // Generate answer options when riddle changes
  useEffect(() => {
    const options = generateOptions(riddle.answer);
    setAnswerOptions(options);
  }, [riddle, generateOptions]);
  
  const handleAnswerSelect = (answer: string) => {
    if (!isCorrectAnswer) {
      setSelectedAnswer(answer);
    }
  };
  
  const handleSubmit = () => {
    if (!selectedAnswer) return;
    
    const selectedOption = answerOptions.find(option => option.text === selectedAnswer);
    const isCorrect = selectedOption?.isCorrect || false;
    
    if (isCorrect) {
      setIsCorrectAnswer(true);
      setShowResult(true);
    } else {
      setShowResult(true);
      
      // After 2 seconds, allow trying again
      setTimeout(() => {
        setShowResult(false);
        setSelectedAnswer(null);
      }, 2000);
    }
  };
  
  const handleTryAgain = () => {
    setShowResult(false);
    setSelectedAnswer(null);
  };
  
  const handleNextRiddle = () => {
    onCorrectAnswer();
  };
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'fácil': return 'green';
      case 'médio': return 'orange';
      case 'difícil': return 'red';
      default: return 'gray';
    }
  };

  // Function to read text using the Web Speech API
  const readText = () => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = riddle.question;
      speech.lang = 'pt-PT'; // Português de Portugal
      speech.rate = 0.9; // ligeiramente mais lento para crianças
      speech.pitch = 1.1; // tom ligeiramente mais alto
      
      speech.onstart = () => setIsPlaying(true);
      speech.onend = () => setIsPlaying(false);
      
      window.speechSynthesis.cancel(); // Cancelar qualquer discurso em andamento
      window.speechSynthesis.speak(speech);
    }
  };
  
  return (
    <div className="puzzle-card">
      <div className="puzzle-header">
        <h2>Adivinha #{riddle.id}</h2>
        <span 
          className="difficulty-badge" 
          style={{ backgroundColor: getDifficultyColor(riddle.difficulty) }}
        >
          {riddle.difficulty}
        </span>
      </div>
      
      <div className="question-container">
        <p className="puzzle-question">{riddle.question}</p>
        <button 
          className={`audio-button ${isPlaying ? 'playing' : ''}`} 
          onClick={readText}
          aria-label={isPlaying ? "Parar leitura" : "Ouvir pergunta"}
        >
          {isPlaying ? '🔊' : '🔈'}
        </button>
      </div>
      
      {riddle.image && (
        <div className="puzzle-image">
          <img src={riddle.image} alt="Imagem da adivinha" />
        </div>
      )}
      
      <div className="puzzle-answers">
        {answerOptions.map((option) => (
          <div 
            key={option.text}
            className={`answer-option 
              ${selectedAnswer === option.text ? 'selected' : ''} 
              ${showResult && selectedAnswer === option.text && option.isCorrect ? 'correct' : ''} 
              ${showResult && selectedAnswer === option.text && !option.isCorrect ? 'incorrect' : ''}`}
            onClick={() => !showResult && handleAnswerSelect(option.text)}
          >
            <span className="answer-text">{option.text}</span>
            <button 
              className="answer-audio-button"
              onClick={(e) => {
                e.stopPropagation();
                if ('speechSynthesis' in window) {
                  const speech = new SpeechSynthesisUtterance(option.original);
                  speech.lang = 'pt-PT';
                  speech.rate = 0.9;
                  window.speechSynthesis.speak(speech);
                }
              }}
              aria-label={`Ouvir opção`}
            >
              🔈
            </button>
          </div>
        ))}
      </div>
      
      {riddle.hint && (
        <div className="hint-section">
          <button 
            className="hint-button" 
            onClick={() => setShowHint(!showHint)}
          >
            {showHint ? 'Esconder Dica' : 'Mostrar Dica'}
          </button>
          {showHint && (
            <div className="hint-text-container">
              <p className="hint-text">💡 {riddle.hint}</p>
              <button 
                className="hint-audio-button"
                onClick={() => {
                  if ('speechSynthesis' in window && riddle.hint) {
                    const speech = new SpeechSynthesisUtterance(riddle.hint);
                    speech.lang = 'pt-PT';
                    speech.rate = 0.9;
                    window.speechSynthesis.speak(speech);
                  }
                }}
                aria-label="Ouvir dica"
              >
                🔈
              </button>
            </div>
          )}
        </div>
      )}
      
      <div className="action-buttons">
        {!isCorrectAnswer && !showResult && (
          <button 
            className="submit-button" 
            disabled={!selectedAnswer}
            onClick={handleSubmit}
          >
            Verificar Resposta
          </button>
        )}
        
        {showResult && !isCorrectAnswer && (
          <button 
            className="try-again-button"
            onClick={handleTryAgain}
          >
            Tentar Novamente
          </button>
        )}
        
        {isCorrectAnswer && (
          <button 
            className="next-button"
            onClick={handleNextRiddle}
          >
            Próxima Adivinha →
          </button>
        )}
      </div>
      
      {showResult && (
        <div className={`result-message ${isCorrectAnswer ? 'success' : 'error'}`}>
          {isCorrectAnswer 
            ? `🎉 Parabéns! Acertaste! A resposta correta é: ${riddle.answer}` 
            : '😢 Tenta novamente!'}
        </div>
      )}
    </div>
  );
}
