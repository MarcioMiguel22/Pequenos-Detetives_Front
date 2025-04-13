import { useState, useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import MiniGameContainer from './MiniGameContainer';


interface ObjectModalProps {
  objectId: number;
  onClose: () => void;
}

const ObjectModal = ({ objectId, onClose }: ObjectModalProps) => {
  const { currentCase, interactWithObject } = useContext(GameContext);
  const [showMiniGame, setShowMiniGame] = useState(false);
  const [miniGameId, setMiniGameId] = useState<number | null>(null);

  if (!currentCase) return null;

  const object = currentCase.objects.find(obj => obj.id === objectId);
  if (!object) return null;

  // Find linked clue if any
  const linkedClue = object.linkedClue 
    ? currentCase.clues.find(clue => clue.id === object.linkedClue) 
    : null;

  // Find linked mini-game if any
  const linkedMiniGame = object.linkedMiniGame
    ? currentCase.miniGames.find(game => game.id === object.linkedMiniGame)
    : null;

  const handleInteract = () => {
    interactWithObject(objectId);
  };

  const handleStartMiniGame = () => {
    if (object.linkedMiniGame) {
      setMiniGameId(object.linkedMiniGame);
      setShowMiniGame(true);
    }
  };

  const handleMiniGameComplete = () => {
    if (miniGameId && currentCase) {
      setShowMiniGame(false);
      // The actual complete action is handled by the MiniGameContainer
    }
  };

  return (
    <div className="object-modal-overlay" onClick={onClose}>
      <div className="object-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <h3>{object.name}</h3>
        <p className="object-description">{object.description}</p>
        
        {linkedClue && !linkedClue.found && (
          <button 
            className="examine-button" 
            onClick={handleInteract}
          >
            Examinar de Perto
          </button>
        )}
        
        {linkedClue && linkedClue.found && (
          <div className="found-clue">
            <h4>Pista Encontrada!</h4>
            <p>{linkedClue.description}</p>
          </div>
        )}
        
        {linkedMiniGame && !linkedMiniGame.completed && (
          <button 
            className="mini-game-button"
            onClick={handleStartMiniGame}
          >
            Interagir
          </button>
        )}
        
        {linkedMiniGame && linkedMiniGame.completed && (
          <div className="completed-game">
            <h4>Desafio Completado!</h4>
            <p>Já resolveste o desafio associado a este objeto.</p>
          </div>
        )}
        
        {showMiniGame && miniGameId && (
          <MiniGameContainer 
            miniGameId={miniGameId} 
            caseId={currentCase.id} 
            onComplete={handleMiniGameComplete} 
            onClose={() => setShowMiniGame(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ObjectModal;
