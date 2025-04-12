import { useState } from 'react';
import { Puzzle } from '../types/puzzle';
import '../styles/PuzzleCard.css';

interface PuzzleCardProps {
  puzzle: Puzzle;
  onCorrectAnswer: () => void;
}

export default function PuzzleCard({ puzzle, onCorrectAnswer }: PuzzleCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handleAnswerSelect = (answerId: number) => {
    setSelectedAnswer(answerId);
  };
  
  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setShowResult(true);
    
    const isCorrect = puzzle.answers.find(a => a.id === selectedAnswer)?.isCorrect;
    if (isCorrect) {
      setTimeout(() => {
        onCorrectAnswer();
      }, 1500);
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
  
  // Function to read text using the Web Speech API
  const readText = () => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = puzzle.question;
      speech.lang = 'pt-PT'; // Português de Portugal
      speech.rate = 0.9; // ligeiramente mais lento para crianças
      speech.pitch = 1.1; // tom ligeiramente mais alto
      
      speech.onstart = () => setIsPlaying(true);
      speech.onend = () => setIsPlaying(false);
      
      // Ler as respostas também
      const allText = `${puzzle.question}. As opções são: ${puzzle.answers.map(a => a.text).join(', ')}`;
      speech.text = allText;
      
      window.speechSynthesis.cancel(); // Cancelar qualquer discurso em andamento
      window.speechSynthesis.speak(speech);
    }
  };
  
  return (
    <div className="puzzle-card">
      <div className="puzzle-header">
        <h2>{puzzle.title}</h2>
        <span 
          className="difficulty-badge" 
          style={{ backgroundColor: getDifficultyColor(puzzle.difficulty) }}
        >
          {puzzle.difficulty}
        </span>
      </div>
      
      <div className="question-container">
        <p className="puzzle-question">{puzzle.question}</p>
        <button 
          className={`audio-button ${isPlaying ? 'playing' : ''}`} 
          onClick={readText}
          aria-label={isPlaying ? "Parar leitura" : "Ouvir pergunta"}
        >
          {isPlaying ? '🔊' : '🔈'}
        </button>
      </div>
      
      {puzzle.image && (
        <div className="puzzle-image">
          <img src={puzzle.image} alt={puzzle.title} />
        </div>
      )}
      
      <div className="puzzle-answers">
        {puzzle.answers.map(answer => (
          <div 
            key={answer.id}
            className={`answer-option ${selectedAnswer === answer.id ? 'selected' : ''} ${
              showResult && answer.isCorrect ? 'correct' : ''
            } ${showResult && selectedAnswer === answer.id && !answer.isCorrect ? 'incorrect' : ''}`}
            onClick={() => !showResult && handleAnswerSelect(answer.id)}
          >
            <span className="answer-text">{answer.text}</span>
            <button 
              className="answer-audio-button"
              onClick={(e) => {
                e.stopPropagation();
                if ('speechSynthesis' in window) {
                  const speech = new SpeechSynthesisUtterance(answer.text);
                  speech.lang = 'pt-PT';
                  speech.rate = 0.9;
                  window.speechSynthesis.speak(speech);
                }
              }}
              aria-label={`Ouvir opção: ${answer.text}`}
            >
              🔈
            </button>
          </div>
        ))}
      </div>
      
      {puzzle.hint && (
        <div className="hint-section">
          <button 
            className="hint-button" 
            onClick={() => setShowHint(!showHint)}
          >
            {showHint ? 'Esconder Dica' : 'Mostrar Dica'}
          </button>
          {showHint && (
            <div className="hint-text-container">
              <p className="hint-text">💡 {puzzle.hint}</p>
              <button 
                className="hint-audio-button"
                onClick={() => {
                  if ('speechSynthesis' in window && puzzle.hint) {
                    const speech = new SpeechSynthesisUtterance(puzzle.hint);
                    speech.lang = 'pt-BR';
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
      
      <button 
        className="submit-button" 
        disabled={selectedAnswer === null || showResult}
        onClick={handleSubmit}
      >
        Verificar Resposta
      </button>
      
      {showResult && (
        <div className={`result-message ${
          puzzle.answers.find(a => a.id === selectedAnswer)?.isCorrect ? 'success' : 'error'
        }`}>
          {puzzle.answers.find(a => a.id === selectedAnswer)?.isCorrect 
            ? '🎉 Parabéns! Acertaste!' 
            : '😢 Tenta novamente!'}
        </div>
      )}
    </div>
  );
}
