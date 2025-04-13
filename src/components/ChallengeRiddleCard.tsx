import { useState, useEffect } from 'react';
import { ChallengeRiddle } from '../types/challenge-riddle';
import '../styles/ChallengeRiddleCard.css';

interface ChallengeRiddleCardProps {
  riddle: ChallengeRiddle;
  onCorrectAnswer: () => void;
  isRetry?: boolean;
}

export default function ChallengeRiddleCard({ 
  riddle, 
  onCorrectAnswer, 
  isRetry = false 
}: ChallengeRiddleCardProps) {
  const [answer, setAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [revealedHints, setRevealedHints] = useState<number[]>([]);
  const [showSolution, setShowSolution] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Reset component state when the riddle changes
  useEffect(() => {
    setAnswer('');
    setShowResult(false);
    setIsCorrectAnswer(false);
    setRevealedHints([]);
    setShowSolution(false);
  }, [riddle.id]);
  
  const handleSubmit = () => {
    if (!answer.trim()) return;
    
    // Verificar se a resposta está correta (ignorando maiúsculas/minúsculas e acentos)
    const normalizedSubmittedAnswer = answer.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const normalizedCorrectAnswer = riddle.answer.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    const isCorrect = normalizedSubmittedAnswer === normalizedCorrectAnswer;
    
    if (isCorrect) {
      setIsCorrectAnswer(true);
      setShowResult(true);
      onCorrectAnswer();
    } else {
      setShowResult(true);
      setTimeout(() => {
        setShowResult(false);
      }, 3000);
    }
  };
  
  const revealHint = (index: number) => {
    if (!revealedHints.includes(index)) {
      setRevealedHints([...revealedHints, index]);
    }
  };
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'fácil': return 'green';
      case 'médio': return 'orange';
      case 'difícil': return 'red';
      default: return 'gray';
    }
  };
  
  const readText = (text: string) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = text;
      speech.lang = 'pt-PT'; // Português de Portugal
      speech.rate = 0.9; // ligeiramente mais lento para crianças
      speech.pitch = 1.1; 
      
      speech.onstart = () => setIsPlaying(true);
      speech.onend = () => setIsPlaying(false);
      
      window.speechSynthesis.cancel(); 
      window.speechSynthesis.speak(speech);
    }
  };
  
  return (
    <div className="challenge-riddle-card">
      <div className="riddle-header">
        <h2>{riddle.title}</h2>
        <span 
          className="difficulty-badge" 
          style={{ backgroundColor: getDifficultyColor(riddle.difficulty) }}
        >
          {riddle.difficulty}
        </span>
      </div>
      
      <div className="question-container">
        <p className="riddle-question">{riddle.question}</p>
        <button 
          className={`audio-button ${isPlaying ? 'playing' : ''}`} 
          onClick={() => readText(riddle.question)}
          aria-label={isPlaying ? "Parar leitura" : "Ouvir a advinha"}
        >
          {isPlaying ? '🔊' : '🔈'}
        </button>
      </div>
      
      <div className="hints-section">
        <h3>Dicas Disponíveis</h3>
        <div className="hints-container">
          {riddle.hints.map((hint, index) => (
            <div key={index} className="hint-item">
              {revealedHints.includes(index) ? (
                <div className="revealed-hint">
                  <p>{hint}</p>
                  <button 
                    className="hint-audio-button"
                    onClick={() => readText(hint)}
                  >
                    🔈
                  </button>
                </div>
              ) : (
                <button 
                  className="reveal-hint-button"
                  onClick={() => revealHint(index)}
                >
                  Revelar Dica {index + 1}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="answer-section">
        <div className="answer-input-container">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Escreve a tua resposta aqui..."
            className="answer-input"
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
          />
          <button 
            className="submit-answer-button"
            onClick={handleSubmit}
            disabled={!answer.trim()}
          >
            Verificar
          </button>
        </div>
        
        {showResult && (
          <div className={`result-message ${isCorrectAnswer ? 'success' : 'error'}`}>
            {isCorrectAnswer 
              ? isRetry 
                ? '🎉 Excelente! Conseguiste resolver esta advinha desafiante novamente!' 
                : '🎉 Brilhante! A tua resposta está correta!' 
              : '❌ Hmm, não está correto. Tenta novamente ou revela mais dicas!'}
          </div>
        )}
        
        {isCorrectAnswer && riddle.explanation && (
          <div className="explanation-container">
            <h3>Explicação:</h3>
            <p>{riddle.explanation}</p>
          </div>
        )}
        
        {!isCorrectAnswer && (
          <div className="solution-section">
            <button 
              className="show-solution-button"
              onClick={() => setShowSolution(!showSolution)}
            >
              {showSolution ? 'Esconder Solução' : 'Mostrar Solução'}
            </button>
            
            {showSolution && (
              <div className="solution-container">
                <p>A resposta é: <strong>{riddle.answer}</strong></p>
                {riddle.explanation && (
                  <p className="solution-explanation">{riddle.explanation}</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      
      {isCorrectAnswer && (
        <button 
          className="next-button"
          onClick={onCorrectAnswer}
        >
          Próxima Advinha →
        </button>
      )}
    </div>
  );
}
