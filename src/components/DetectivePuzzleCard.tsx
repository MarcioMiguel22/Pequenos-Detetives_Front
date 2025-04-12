import { useState, useEffect } from 'react';
import { DetectivePuzzle } from '../types/detective-puzzle';
import '../styles/DetectivePuzzleCard.css';

interface DetectivePuzzleCardProps {
  puzzle: DetectivePuzzle;
  onCorrectAnswer: () => void;
  onNextPuzzle: () => void; // Add this new prop
  isRetry?: boolean;
}

export default function DetectivePuzzleCard({ 
  puzzle, 
  onCorrectAnswer, 
  onNextPuzzle, // Include in destructuring
  isRetry = false 
}: DetectivePuzzleCardProps) {
  const [selectedSuspect, setSelectedSuspect] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showClues, setShowClues] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  // Reset component state when the puzzle changes
  useEffect(() => {
    setSelectedSuspect(null);
    setShowResult(false);
    setIsCorrectAnswer(false);
    setShowHint(false);
    setShowClues([]);
  }, [puzzle.id]);

  const handleSuspectSelect = (suspectId: number) => {
    // Reset any previous results when selecting a new suspect
    if (showResult || isCorrectAnswer) {
      setShowResult(false);
      setIsCorrectAnswer(false);
    }
    setSelectedSuspect(suspectId);
  };

  const handleSubmit = () => {
    if (selectedSuspect === null) return;

    const isCorrect = puzzle.suspects.find(s => s.id === selectedSuspect)?.isGuilty;

    if (isCorrect) {
      setIsCorrectAnswer(true);
      setShowResult(true);
      
      // Call onCorrectAnswer immediately to update localStorage
      onCorrectAnswer();
      
      if (isRetry) {
        console.log("Detective puzzle retried successfully!");
      }
    } else {
      setShowResult(true);
    }
  };

  const handleTryAgain = () => {
    setShowResult(false);
    setSelectedSuspect(null);
  };

  const handleNextPuzzle = () => {
    // Use the onNextPuzzle prop instead of direct navigation
    onNextPuzzle();
  };

  const toggleClue = (clueId: number) => {
    if (showClues.includes(clueId)) {
      setShowClues(showClues.filter(id => id !== clueId));
    } else {
      setShowClues([...showClues, clueId]);
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

  // Read text using Web Speech API
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
    <div className="puzzle-card detective-puzzle">
      <div className="puzzle-header">
        <h2>{puzzle.title}</h2>
        <span 
          className="difficulty-badge" 
          style={{ backgroundColor: getDifficultyColor(puzzle.difficulty) }}
        >
          {puzzle.difficulty}
        </span>
      </div>

      <div className="story-container">
        <h3>O Caso</h3>
        <p className="detective-story">{puzzle.story}</p>
        <button 
          className={`audio-button ${isPlaying ? 'playing' : ''}`} 
          onClick={() => readText(puzzle.story)}
          aria-label={isPlaying ? "Parar leitura" : "Ouvir a história"}
        >
          {isPlaying ? '🔊' : '🔈'}
        </button>
      </div>

      <div className="clues-container">
        <h3>Pistas</h3>
        <div className="clues-list">
          {puzzle.clues.map(clue => (
            <div key={clue.id} className="clue-item">
              <button 
                className={`clue-toggle ${showClues.includes(clue.id) ? 'active' : ''}`}
                onClick={() => toggleClue(clue.id)}
              >
                Pista #{clue.id} {showClues.includes(clue.id) ? '👁️' : '👁️‍🗨️'}
              </button>
              
              {showClues.includes(clue.id) && (
                <div className="clue-content">
                  <p>{clue.text}</p>
                  {clue.image && <img src={clue.image} alt={`Pista ${clue.id}`} />}
                  <button 
                    className="clue-audio-button"
                    onClick={() => readText(clue.text)}
                  >
                    🔈
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="suspects-container">
        <h3>Suspeitos</h3>
        <div className="suspects-list">
          {puzzle.suspects.map(suspect => (
            <div 
              key={suspect.id}
              className={`suspect-item ${selectedSuspect === suspect.id ? 'selected' : ''} ${
                showResult && selectedSuspect === suspect.id && suspect.isGuilty ? 'correct' : ''
              } ${
                showResult && selectedSuspect === suspect.id && !suspect.isGuilty ? 'incorrect' : ''
              }`}
              onClick={() => !showResult && handleSuspectSelect(suspect.id)}
            >
              <div className="suspect-info">
                <h4>{suspect.name}</h4>
                <p>{suspect.description}</p>
              </div>
              {suspect.image && (
                <div className="suspect-image">
                  <img src={suspect.image} alt={suspect.name} />
                </div>
              )}
            </div>
          ))}
        </div>
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
                onClick={() => readText(puzzle.hint || '')}
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
            disabled={selectedSuspect === null}
            onClick={handleSubmit}
          >
            Resolver o Caso
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
            onClick={handleNextPuzzle}
          >
            Próximo Caso →
          </button>
        )}
      </div>

      {showResult && (
        <div className={`result-message ${isCorrectAnswer ? 'success' : 'error'}`}>
          {isCorrectAnswer ? (
            <div>
              <p>{isRetry 
                ? '🎉 Resolveste este caso novamente!' 
                : '🎉 Caso resolvido com sucesso!'}</p>
              <p className="solution-text">{puzzle.solution}</p>
            </div>
          ) : (
            <p>😢 Não é este o culpado! Continua a investigar!</p>
          )}
        </div>
      )}
    </div>
  );
}
