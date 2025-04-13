import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { detectivePuzzles } from '../data/detective-puzzles';
import { DifficultyLevel } from '../types/puzzle';
import DetectivePuzzleCard from '../components/DetectivePuzzleCard';
import DifficultySelector from '../components/DifficultySelector';
import '../styles/DetectivePuzzlesPage.css';

export default function DetectivePuzzlesPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentPuzzleId, setCurrentPuzzleId] = useState<number>(Number(id) || 1);
  const [completedPuzzles, setCompletedPuzzles] = useState<number[]>([]);
  const [filterDifficulty, setFilterDifficulty] = useState<DifficultyLevel | 'todos'>('todos');
  
  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('detectivePuzzleProgress');
    if (savedProgress) {
      const { completed } = JSON.parse(savedProgress);
      setCompletedPuzzles(completed);
    }
  }, []);
  
  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('detectivePuzzleProgress', JSON.stringify({
      completed: completedPuzzles,
      current: currentPuzzleId
    }));
  }, [completedPuzzles, currentPuzzleId]);
  
  const currentPuzzle = detectivePuzzles.find(p => p.id === currentPuzzleId);
  
  const filteredPuzzles = detectivePuzzles.filter(puzzle => 
    filterDifficulty === 'todos' || puzzle.difficulty === filterDifficulty
  );
  
  const handleCorrectAnswer = () => {
    if (!completedPuzzles.includes(currentPuzzleId)) {
      setCompletedPuzzles([...completedPuzzles, currentPuzzleId]);
    }
  };
  
  const handleNextPuzzle = () => {
    // Find the next puzzle - prioritize unsolved puzzles
    const unsolvedPuzzles = detectivePuzzles.filter(p => !completedPuzzles.includes(p.id) && p.id !== currentPuzzleId);
    
    if (unsolvedPuzzles.length > 0) {
      // If there are unsolved puzzles, go to the first one
      const nextPuzzleId = unsolvedPuzzles[0].id;
      navigate(`/detective/${nextPuzzleId}`);
      setCurrentPuzzleId(nextPuzzleId);
    } else {
      // If all puzzles are solved, go to the next one in sequence or back to the first
      const currentIndex = detectivePuzzles.findIndex(p => p.id === currentPuzzleId);
      const nextIndex = (currentIndex + 1) % detectivePuzzles.length;
      const nextPuzzleId = detectivePuzzles[nextIndex].id;
      navigate(`/detective/${nextPuzzleId}`);
      setCurrentPuzzleId(nextPuzzleId);
    }
  };
  
  const selectPuzzle = (id: number) => {
    navigate(`/detective/${id}`);
    setCurrentPuzzleId(id);
  };
  
  if (!currentPuzzle) {
    return <div className="loading">Carregando caso...</div>;
  }
  
  return (
    <div className="detective-puzzles-page">
      <div className="detective-puzzles-container">
        <div className="puzzle-selection">
          <h2>Casos de Detetive</h2>
          <DifficultySelector 
            selectedDifficulty={filterDifficulty}
            onSelectDifficulty={setFilterDifficulty}
          />
          
          <div className="puzzle-list">
            {filteredPuzzles.map(puzzle => (
              <div 
                key={puzzle.id}
                className={`puzzle-item ${puzzle.id === currentPuzzleId ? 'active' : ''} ${
                  completedPuzzles.includes(puzzle.id) ? 'completed' : ''
                }`}
                onClick={() => selectPuzzle(puzzle.id)}
                title={completedPuzzles.includes(puzzle.id) ? "Podes tentar novamente!" : "Ainda não resolveste"}
              >
                <span className="puzzle-number">{puzzle.id}</span>
                <span className="puzzle-title">{puzzle.title}</span>
                {completedPuzzles.includes(puzzle.id) && <span className="completed-badge" title="Já resolveste este caso">✓</span>}
              </div>
            ))}
          </div>
        </div>
        
        <div className="current-puzzle">
          {completedPuzzles.includes(currentPuzzleId) && (
            <div className="retry-banner">
              Já resolveste este caso! Queres tentar novamente?
            </div>
          )}
          <DetectivePuzzleCard 
            puzzle={currentPuzzle} 
            onCorrectAnswer={handleCorrectAnswer}
            onNextPuzzle={handleNextPuzzle}
            isRetry={completedPuzzles.includes(currentPuzzleId)}
          />
        </div>
      </div>
      
      <div className="progress-section">
        <h3>O Teu Progresso</h3>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(completedPuzzles.length / detectivePuzzles.length) * 100}%` }}
          ></div>
        </div>
        <p>{completedPuzzles.length} de {detectivePuzzles.length} casos resolvidos</p>
      </div>
    </div>
  );
}
