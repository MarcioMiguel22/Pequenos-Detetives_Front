import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { challengeRiddles } from '../data/challenge-riddles';
import { DifficultyLevel } from '../types/puzzle';
import ChallengeRiddleCard from '../components/ChallengeRiddleCard';
import DifficultySelector from '../components/DifficultySelector';
import '../styles/ChallengeRiddlesPage.css';

export default function ChallengeRiddlesPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentRiddleId, setCurrentRiddleId] = useState<number>(Number(id) || 1);
  const [completedRiddles, setCompletedRiddles] = useState<number[]>([]);
  const [filterDifficulty, setFilterDifficulty] = useState<DifficultyLevel | 'todos'>('todos');
  
  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('challengeRiddleProgress');
    if (savedProgress) {
      const { completed } = JSON.parse(savedProgress);
      setCompletedRiddles(completed);
    }
  }, []);
  
  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('challengeRiddleProgress', JSON.stringify({
      completed: completedRiddles,
      current: currentRiddleId
    }));
  }, [completedRiddles, currentRiddleId]);
  
  const currentRiddle = challengeRiddles.find(r => r.id === currentRiddleId);
  
  const filteredRiddles = challengeRiddles.filter(riddle => 
    filterDifficulty === 'todos' || riddle.difficulty === filterDifficulty
  );
  
  const handleCorrectAnswer = () => {
    if (!completedRiddles.includes(currentRiddleId)) {
      setCompletedRiddles([...completedRiddles, currentRiddleId]);
    }
    
    // Find next riddle - prioritize unsolved riddles
    const unsolvedRiddles = challengeRiddles.filter(r => !completedRiddles.includes(r.id) && r.id !== currentRiddleId);
    
    if (unsolvedRiddles.length > 0) {
      // If there are unsolved riddles, go to the first one
      const nextRiddleId = unsolvedRiddles[0].id;
      navigate(`/challenge-riddles/${nextRiddleId}`);
      setCurrentRiddleId(nextRiddleId);
    } else {
      // If all riddles are solved, go to the next one in sequence or back to the first
      const currentIndex = challengeRiddles.findIndex(r => r.id === currentRiddleId);
      const nextIndex = (currentIndex + 1) % challengeRiddles.length;
      const nextRiddleId = challengeRiddles[nextIndex].id;
      navigate(`/challenge-riddles/${nextRiddleId}`);
      setCurrentRiddleId(nextRiddleId);
    }
  };
  
  const selectRiddle = (id: number) => {
    navigate(`/challenge-riddles/${id}`);
    setCurrentRiddleId(id);
  };
  
  if (!currentRiddle) {
    return <div className="loading">Carregando advinha...</div>;
  }
  
  return (
    <div className="challenge-riddles-page">
      <div className="riddles-container">
        <div className="riddle-selection">
          <h2>Advinhas Super Desafiantes</h2>
          <DifficultySelector 
            selectedDifficulty={filterDifficulty}
            onSelectDifficulty={setFilterDifficulty}
          />
          
          <div className="riddle-list">
            {filteredRiddles.map(riddle => (
              <div 
                key={riddle.id}
                className={`riddle-item ${riddle.id === currentRiddleId ? 'active' : ''} ${
                  completedRiddles.includes(riddle.id) ? 'completed' : ''
                }`}
                onClick={() => selectRiddle(riddle.id)}
                title={completedRiddles.includes(riddle.id) ? "Já resolveste este desafio!" : "Ainda não resolveste este desafio"}
              >
                <span className="riddle-number">{riddle.id}</span>
                <span className="riddle-title">{riddle.title}</span>
                {completedRiddles.includes(riddle.id) && <span className="completed-badge" title="Já resolveste">✓</span>}
              </div>
            ))}
          </div>
        </div>
        
        <div className="current-riddle">
          {completedRiddles.includes(currentRiddleId) && (
            <div className="retry-banner">
              Já resolveste esta advinha! Queres tentar novamente?
            </div>
          )}
          <ChallengeRiddleCard 
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
            style={{ width: `${(completedRiddles.length / challengeRiddles.length) * 100}%` }}
          ></div>
        </div>
        <p>{completedRiddles.length} de {challengeRiddles.length} advinhas resolvidas</p>
      </div>
    </div>
  );
}
