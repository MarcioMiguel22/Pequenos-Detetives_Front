import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { puzzles } from '../data/puzzles';
import { DifficultyLevel } from '../types/puzzle';
import PuzzleCard from '../components/PuzzleCard';
import DifficultySelector from '../components/DifficultySelector';
import '../styles/PuzzlesPage.css';

export default function PuzzlesPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentPuzzleId, setCurrentPuzzleId] = useState<number>(Number(id) || 1);
  const [completedPuzzles, setCompletedPuzzles] = useState<number[]>([]);
  const [filterDifficulty, setFilterDifficulty] = useState<DifficultyLevel | 'todos'>('todos');
  
  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('puzzleProgress');
    if (savedProgress) {
      const { completed } = JSON.parse(savedProgress);
      setCompletedPuzzles(completed);
    }
  }, []);
  
  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('puzzleProgress', JSON.stringify({
      completed: completedPuzzles,
      current: currentPuzzleId
    }));
  }, [completedPuzzles, currentPuzzleId]);
  
  const currentPuzzle = puzzles.find(p => p.id === currentPuzzleId);
  
  const filteredPuzzles = puzzles.filter(puzzle => 
    filterDifficulty === 'todos' || puzzle.difficulty === filterDifficulty
  );
  
  const handleCorrectAnswer = () => {
    if (!completedPuzzles.includes(currentPuzzleId)) {
      setCompletedPuzzles([...completedPuzzles, currentPuzzleId]);
    }
    
    // If all puzzles are completed, go to result page
    if (completedPuzzles.length === puzzles.length - 1) {
      navigate('/result');
      return;
    }
    
    // Find next puzzle
    const nextPuzzleId = puzzles.find(p => !completedPuzzles.includes(p.id) && p.id !== currentPuzzleId)?.id;
    if (nextPuzzleId) {
      navigate(`/puzzles/${nextPuzzleId}`);
      setCurrentPuzzleId(nextPuzzleId);
    }
  };
  
  const selectPuzzle = (id: number) => {
    navigate(`/puzzles/${id}`);
    setCurrentPuzzleId(id);
  };
  
  if (!currentPuzzle) {
    return <div className="loading">Carregando enigma...</div>;
  }
  
  return (
    <div className="puzzles-page">
      <div className="puzzles-container">
        <div className="puzzle-selection">
          <h2>Escolha um Enigma</h2>
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
          <PuzzleCard puzzle={currentPuzzle} onCorrectAnswer={handleCorrectAnswer} />
        </div>
      </div>
      
      <div className="progress-section">
        <h3>Seu Progresso</h3>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(completedPuzzles.length / puzzles.length) * 100}%` }}
          ></div>
        </div>
        <p>{completedPuzzles.length} de {puzzles.length} enigmas resolvidos</p>
      </div>
    </div>
  );
}
