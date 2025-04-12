import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { riddles } from '../data/riddles';
import { DifficultyLevel } from '../types/puzzle';

import DifficultySelector from '../components/DifficultySelector';
import '../styles/PuzzlesPage.css';
import RiddleCard from '../components/RiddleCard';

export default function RiddlesPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentRiddleId, setCurrentRiddleId] = useState<number>(Number(id) || 1);
  const [completedRiddles, setCompletedRiddles] = useState<number[]>([]);
  const [filterDifficulty, setFilterDifficulty] = useState<DifficultyLevel | 'todos'>('todos');
  
  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('riddleProgress');
    if (savedProgress) {
      const { completed } = JSON.parse(savedProgress);
      setCompletedRiddles(completed);
    }
  }, []);
  
  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('riddleProgress', JSON.stringify({
      completed: completedRiddles,
      current: currentRiddleId
    }));
  }, [completedRiddles, currentRiddleId]);
  
  const currentRiddle = riddles.find(p => p.id === currentRiddleId);
  
  const filteredRiddles = riddles.filter(riddle => 
    filterDifficulty === 'todos' || riddle.difficulty === filterDifficulty
  );
  
  const handleCorrectAnswer = () => {
    if (!completedRiddles.includes(currentRiddleId)) {
      setCompletedRiddles([...completedRiddles, currentRiddleId]);
    }
    
    // If all riddles are completed, go to result page
    if (completedRiddles.length === riddles.length - 1) {
      navigate('/result?type=riddles');
      return;
    }
    
    // Find next riddle
    const nextRiddleId = riddles.find(p => !completedRiddles.includes(p.id) && p.id !== currentRiddleId)?.id;
    if (nextRiddleId) {
      navigate(`/riddles/${nextRiddleId}`);
      setCurrentRiddleId(nextRiddleId);
    }
  };
  
  const selectRiddle = (id: number) => {
    navigate(`/riddles/${id}`);
    setCurrentRiddleId(id);
  };
  
  if (!currentRiddle) {
    return <div className="loading">A carregar adivinha...</div>;
  }
  
  return (
    <div className="puzzles-page">
      <div className="puzzles-container">
        <div className="puzzle-selection">
          <h2>Escolhe uma Adivinha</h2>
          <DifficultySelector 
            selectedDifficulty={filterDifficulty}
            onSelectDifficulty={setFilterDifficulty}
          />
          
          <div className="puzzle-list">
            {filteredRiddles.map(riddle => (
              <div 
                key={riddle.id}
                className={`puzzle-item ${riddle.id === currentRiddleId ? 'active' : ''} ${
                  completedRiddles.includes(riddle.id) ? 'completed' : ''
                }`}
                onClick={() => selectRiddle(riddle.id)}
              >
                <span className="puzzle-number">{riddle.id}</span>
                <span className="puzzle-title">Adivinha #{riddle.id}</span>
                {completedRiddles.includes(riddle.id) && <span className="completed-badge">✓</span>}
              </div>
            ))}
          </div>
        </div>
        
        <div className="current-puzzle">
          {completedRiddles.includes(currentRiddleId) && (
            <div className="retry-banner">
              Já resolveste esta adivinha! Queres tentar novamente?
            </div>
          )}
          <RiddleCard 
            riddle={currentRiddle} 
            onCorrectAnswer={handleCorrectAnswer} 
            isRetry={completedRiddles.includes(currentRiddleId)}
          />
        </div>
      </div>
      
      <div className="progress-section">
        <h3>O Teu Progresso</h3>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(completedRiddles.length / riddles.length) * 100}%` }}
          ></div>
        </div>
        <p>{completedRiddles.length} de {riddles.length} adivinhas resolvidas</p>
      </div>
    </div>
  );
}
