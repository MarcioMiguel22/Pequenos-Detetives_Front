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
      
      <p className="puzzle-question">{puzzle.question}</p>
      
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
            {answer.text}
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
          {showHint && <p className="hint-text">💡 {puzzle.hint}</p>}
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
            ? '🎉 Parabéns! Você acertou!' 
            : '😢 Tente novamente!'}
        </div>
      )}
    </div>
  );
}
