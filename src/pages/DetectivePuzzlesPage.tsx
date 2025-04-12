import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { detectivePuzzles } from '../data/detective-puzzles';
import { DifficultyLevel } from '../types/puzzle';
import DifficultySelector from '../components/DifficultySelector';
import '../styles/PuzzlesPage.css';
import DetectivePuzzleCard from '../components/DetectivePuzzleCard';


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
    // Add the current puzzle to completed array if not already there
    if (!completedPuzzles.includes(currentPuzzleId)) {
      const updatedCompletedPuzzles = [...completedPuzzles, currentPuzzleId];
      setCompletedPuzzles(updatedCompletedPuzzles);
      
      // Save immediately to localStorage
      localStorage.setItem('detectivePuzzleProgress', JSON.stringify({
        completed: updatedCompletedPuzzles,
        current: currentPuzzleId
      }));
    }
  };

  const handleNextPuzzle = () => {
    // If all puzzles are completed, go to result page
    if (completedPuzzles.length >= detectivePuzzles.length) {
      navigate('/result?type=detective');
      return;
    }
    
    // Find next puzzle
    const nextPuzzleId = detectivePuzzles.find(p => !completedPuzzles.includes(p.id) && p.id !== currentPuzzleId)?.id;
    if (nextPuzzleId) {
      navigate(`/detective/${nextPuzzleId}`);
      setCurrentPuzzleId(nextPuzzleId);
    }
  };
  
  const selectPuzzle = (id: number) => {
    navigate(`/detective/${id}`);
    setCurrentPuzzleId(id);
  };
  
  if (!currentPuzzle) {
    return <div className="loading">Carregando enigma...</div>;
  }
  
  return (
    <div className="puzzles-page">
      <div className="puzzles-container">
        <div className="puzzle-selection">
          <h2>Escolhe um Enigma de Detetive</h2>
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
              >
                <span className="puzzle-number">{puzzle.id}</span>
                <span className="puzzle-title">{puzzle.title}</span>
                {completedPuzzles.includes(puzzle.id) && <span className="completed-badge">✓</span>}
              </div>
            ))}
          </div>
        </div>
        
        <div className="current-puzzle">
          {completedPuzzles.includes(currentPuzzleId) && (
            <div className="retry-banner">
              Já resolveste este enigma! Queres tentar novamente?
            </div>
          )}
          {currentPuzzle && (
            <DetectivePuzzleCard 
              puzzle={currentPuzzle} 
              onCorrectAnswer={handleCorrectAnswer}
              onNextPuzzle={handleNextPuzzle}
              isRetry={completedPuzzles.includes(currentPuzzleId)}
            />
          )}
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
        <p>{completedPuzzles.length} de {detectivePuzzles.length} enigmas resolvidos</p>
      </div>
    </div>
  );
}
