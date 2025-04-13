import { useContext, useState } from 'react';
import { GameContext } from '../../context/GameContext';
import DragDropGame from './games/DragDropGame';
import DifferencesGame from './games/DifferencesGame';
import PuzzleGame from './games/PuzzleGame';


interface MiniGameContainerProps {
  miniGameId: number;
  caseId: number;
  onComplete: () => void;
  onClose: () => void;
}

const MiniGameContainer = ({ miniGameId, caseId, onComplete, onClose }: MiniGameContainerProps) => {
  const { currentCase, completeMiniGame } = useContext(GameContext);
  const [completed, setCompleted] = useState(false);

  if (!currentCase) return null;

  const miniGame = currentCase.miniGames.find(game => game.id === miniGameId);
  if (!miniGame) return null;

  const handleGameComplete = () => {
    completeMiniGame(caseId, miniGameId);
    setCompleted(true);
    onComplete();
  };

  const renderGame = () => {
    switch (miniGame.type) {
      case 'dragdrop':
        return (
          <DragDropGame
            config={miniGame.config}
            onComplete={handleGameComplete}
          />
        );
      case 'differences':
        return (
          <DifferencesGame
            config={miniGame.config}
            onComplete={handleGameComplete}
          />
        );
      case 'puzzle':
        return (
          <PuzzleGame
            config={miniGame.config}
            onComplete={handleGameComplete}
          />
        );
      default:
        return <div>Tipo de jogo não suportado</div>;
    }
  };

  return (
    <div className="mini-game-container">
      <div className="mini-game-header">
        <h3>{miniGame.title}</h3>
        <button className="close-game-button" onClick={onClose}>×</button>
      </div>
      
      <p className="mini-game-description">{miniGame.description}</p>
      
      <div className="mini-game-content">
        {renderGame()}
      </div>
      
      {completed && (
        <div className="mini-game-success">
          <h4>Parabéns!</h4>
          <p>Completaste o desafio com sucesso!</p>
          <button onClick={onClose}>Continuar</button>
        </div>
      )}
    </div>
  );
};

export default MiniGameContainer;
