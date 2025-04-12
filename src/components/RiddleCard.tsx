import { useState, useEffect, useCallback } from 'react';
import { Riddle } from '../types/riddle';
import '../styles/PuzzleCard.css';

interface RiddleCardProps {
  riddle: Riddle;
  onCorrectAnswer: () => void;
  isRetry?: boolean;
}

export default function RiddleCard({ riddle, onCorrectAnswer, isRetry = false }: RiddleCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [contextualOptions, setContextualOptions] = useState<Array<{text: string, isCorrect: boolean}>>([]);
  const [showFirstLetter, setShowFirstLetter] = useState(false);
  
  // Fisher-Yates shuffle algorithm
  const shuffleArray = useCallback(<T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }, []);
  
  // Generate contextual options based on the riddle
  useEffect(() => {
    // Base contextual options for the riddle
    let options = [];
    
    // Default options if not specifically defined
    if (!riddle.contextualOptions) {
      // Create default contextual options
      options = [
        { 
          text: `Usamos ${riddle.answer.toLowerCase().endsWith('a') ? 'a' : 'o'} ${riddle.answer.toLowerCase()} todos os dias!`, 
          isCorrect: true 
        },
        { 
          text: `Podemos encontrar n${riddle.answer.toLowerCase().endsWith('a') ? 'a' : 'o'} casa de banho.`, 
          isCorrect: false 
        },
        { 
          text: `É algo que temos n${riddle.answer.toLowerCase().endsWith('a') ? 'a' : 'o'} cozinha.`, 
          isCorrect: false 
        }
      ];
    } else {
      // Use predefined contextual options
      options = riddle.contextualOptions.map(opt => ({
        text: opt.text,
        isCorrect: opt.isCorrect
      }));
    }
    
    // Shuffle options
    setContextualOptions(shuffleArray(options));
  }, [riddle, shuffleArray]);

  // Reset component state when the riddle changes
  useEffect(() => {
    setSelectedAnswer(null);
    setShowResult(false);
    setIsCorrectAnswer(false);
    setShowHint(false);
    setShowFirstLetter(false);
  }, [riddle.id]);
  
  const handleAnswerSelect = (answer: string) => {
    // Reset any previous results when selecting a new answer
    if (showResult || isCorrectAnswer) {
      setShowResult(false);
      setIsCorrectAnswer(false);
    }
    setSelectedAnswer(answer);
  };
  
  const handleSubmit = () => {
    if (!selectedAnswer) return;
    
    const selectedOption = contextualOptions.find(option => option.text === selectedAnswer);
    const isCorrect = selectedOption?.isCorrect || false;
    
    if (isCorrect) {
      setIsCorrectAnswer(true);
      setShowResult(true);
      if (isRetry) {
        console.log("Riddle retry successfully solved!");
      }
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
      speech.lang = 'pt-PT'; 
      speech.rate = 0.9; 
      speech.pitch = 1.1;
      
      speech.onstart = () => setIsPlaying(true);
      speech.onend = () => setIsPlaying(false);
      
      window.speechSynthesis.cancel(); 
      window.speechSynthesis.speak(speech);
    }
  };

  // Get the first letter of the answer
  const getFirstLetter = () => {
    if (!riddle.answer) return '';
    return riddle.answer.charAt(0).toUpperCase();
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
      
      <div className="first-letter-hint">
        <button 
          className="first-letter-button"
          onClick={() => setShowFirstLetter(!showFirstLetter)}
        >
          {showFirstLetter ? 'Esconder letra inicial' : 'Ver letra inicial'}
        </button>
        
        {showFirstLetter && (
          <p className="first-letter-text">
            A resposta começa com a letra: <strong>{getFirstLetter()}</strong>
          </p>
        )}
      </div>
      
      {riddle.image && (
        <div className="puzzle-image">
          <img src={riddle.image} alt="Imagem da adivinha" />
        </div>
      )}
      
      <div className="puzzle-answers">
        {contextualOptions.map((option) => (
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
                  const speech = new SpeechSynthesisUtterance(option.text);
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
      
      {showResult && isCorrectAnswer && (
        <div className="correct-answer-reveal">
          <p>A resposta correta é: <strong>{riddle.answer}</strong></p>
        </div>
      )}
      
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
            Tentar Outra Vez
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
            ? isRetry 
              ? `🎉 Boa memória! Resolveste novamente!` 
              : `🎉 Parabéns! Acertaste!` 
            : '😢 Tenta outra vez!'}
        </div>
      )}
    </div>
  );
}
