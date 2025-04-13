import { useState, useEffect } from 'react';
import { MiniGameConfig } from '../../../context/GameContext';

interface PuzzleGameProps {
  config: MiniGameConfig;
  onComplete: () => void;
}

const PuzzleGame = ({ config, onComplete }: PuzzleGameProps) => {
  const [pieces, setPieces] = useState<number[]>([]);
  const [correctOrder, setCorrectOrder] = useState<number[]>([]);
  const [currentOrder, setCurrentOrder] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);
  
  // Safe access to config properties
  const piecesCount = config.pieces || 6;
  const imageSrc = config.imageSrc || '';

  useEffect(() => {
    // Create array of piece indices
    const indices = Array.from({ length: piecesCount }, (_, i) => i);
    setCorrectOrder([...indices]);
    
    // Shuffle pieces
    const shuffled = [...indices].sort(() => Math.random() - 0.5);
    setPieces(shuffled);
    setCurrentOrder([]);
  }, [piecesCount]);

  const handlePieceClick = (index: number) => {
    if (completed) return;
    
    // Add piece to current order
    const newOrder = [...currentOrder, pieces[index]];
    setCurrentOrder(newOrder);
    
    // Remove piece from available pieces
    const newPieces = [...pieces];
    newPieces.splice(index, 1);
    setPieces(newPieces);
    
    // Check if puzzle is completed
    if (newOrder.length === piecesCount) {
      const isCorrect = newOrder.every((piece, idx) => piece === correctOrder[idx]);
      if (isCorrect) {
        setCompleted(true);
        setTimeout(onComplete, 1000);
      } else {
        // Reset if incorrect
        setTimeout(() => {
          setPieces([...newOrder, ...newPieces].sort(() => Math.random() - 0.5));
          setCurrentOrder([]);
        }, 1500);
      }
    }
  };

  return (
    <div className="puzzle-game">
      <div className="puzzle-preview">
        <img 
          src={imageSrc} 
          alt="Puzzle preview" 
          style={{ opacity: 0.5, maxWidth: '100%' }} 
        />
      </div>
      
      <div className="puzzle-board">
        <div className="puzzle-pieces">
          {pieces.map((piece, index) => (
            <div 
              key={`piece-${piece}-${index}`}
              className="puzzle-piece"
              onClick={() => handlePieceClick(index)}
              style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundPosition: `${(piece % 3) * 50}% ${Math.floor(piece / 3) * 50}%`,
                width: '80px',
                height: '80px'
              }}
            />
          ))}
        </div>
        
        <div className="puzzle-solution">
          {currentOrder.map((piece, index) => (
            <div 
              key={`solution-${piece}-${index}`}
              className="puzzle-piece in-solution"
              style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundPosition: `${(piece % 3) * 50}% ${Math.floor(piece / 3) * 50}%`,
                width: '80px',
                height: '80px'
              }}
            />
          ))}
        </div>
      </div>
      
      {completed && (
        <div className="puzzle-completed">
          <p>Puzzle completo!</p>
        </div>
      )}
    </div>
  );
};

export default PuzzleGame;
