import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { puzzles } from '../data/puzzles';
import '../styles/ResultPage.css';

export default function ResultPage() {
  const [completedCount, setCompletedCount] = useState(0);
  
  useEffect(() => {
    const savedProgress = localStorage.getItem('puzzleProgress');
    if (savedProgress) {
      const { completed } = JSON.parse(savedProgress);
      setCompletedCount(completed.length);
    }
  }, []);
  
  const resetProgress = () => {
    localStorage.removeItem('puzzleProgress');
    setCompletedCount(0);
  };
  
  return (
    <div className="result-page">
      <div className="result-container">
        <h1>🎉 Parabéns, Pequeno Detetive! 🎉</h1>
        
        <div className="result-content">
          <div className="trophy">🏆</div>
          
          <h2>Completaste {completedCount} de {puzzles.length} enigmas!</h2>
          
          <p className="result-message">
            Mostraste ser um verdadeiro detetive! A tua inteligência e dedicação 
            levaram-te até aqui. Continua a explorar e a aprender!
          </p>
          
          <div className="result-stats">
            <div className="stat-item">
              <span className="stat-label">Enigmas Resolvidos:</span>
              <span className="stat-value">{completedCount}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Nível de Detetive:</span>
              <span className="stat-value">
                {completedCount === puzzles.length 
                  ? 'Detetive Mestre' 
                  : completedCount >= puzzles.length / 2 
                    ? 'Detetive Júnior' 
                    : 'Detetive Iniciante'}
              </span>
            </div>
          </div>
          
          <div className="result-actions">
            <Link to="/puzzles" className="action-button primary">
              Jogar Novamente
            </Link>
            <button className="action-button secondary" onClick={resetProgress}>
              Reiniciar Progresso
            </button>
            <Link to="/" className="action-button">
              Voltar ao Início
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
