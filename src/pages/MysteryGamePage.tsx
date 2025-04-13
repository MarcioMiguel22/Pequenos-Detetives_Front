import { useContext, useState } from 'react';
import { GameContext } from '../context/GameContext';
import { GameProvider } from '../context/GameProvider';
import CaseSelector from '../game/components/CaseSelector';
import InteractiveScene from '../game/components/InteractiveScene';
import CluesPanel from '../game/components/CluesPanel';
import '../styles/MysteryGame.css';

const MysteryGameContent = () => {
  const { currentCase, resetCase, solveCase } = useContext(GameContext);
  const [showSolutionModal, setShowSolutionModal] = useState(false);
  
  if (!currentCase) {
    return <CaseSelector />;
  }
  
  const foundClues = currentCase.clues.filter(clue => clue.found);
  const totalClues = currentCase.clues.length;
  const completedMiniGames = currentCase.miniGames.filter(game => game.completed);
  const totalMiniGames = currentCase.miniGames.length;
  
  const handleBackToSelector = () => {
    resetCase(currentCase.id);
  };
  
  const handleSolveCase = () => {
    setShowSolutionModal(true);
    solveCase(currentCase.id);
  };
  
  return (
    <div className="mystery-game-container">
      <div className="game-header">
        <button className="back-button" onClick={handleBackToSelector}>
          ← Voltar aos Casos
        </button>
        <h2>{currentCase.title}</h2>
        <div className="game-stats">
          <span>Pistas: {foundClues.length}/{totalClues}</span>
          <span>Mini-jogos: {completedMiniGames.length}/{totalMiniGames}</span>
        </div>
      </div>
      
      <div className="game-content">
        <div className="scene-section">
          <InteractiveScene />
        </div>
        
        <div className="clues-section">
          <CluesPanel />
          
          {foundClues.length >= Math.ceil(totalClues * 0.7) && (
            <div className="solve-case-container">
              <button 
                className="solve-case-button"
                onClick={handleSolveCase}
                disabled={currentCase.completed}
              >
                {currentCase.completed 
                  ? 'Caso Resolvido!' 
                  : 'Resolver o Mistério'
                }
              </button>
              
              {currentCase.hint && (
                <div className="case-hint">
                  <p><strong>Dica:</strong> {currentCase.hint}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {showSolutionModal && (
        <div className="solution-modal-overlay" onClick={() => setShowSolutionModal(false)}>
          <div className="solution-modal" onClick={e => e.stopPropagation()}>
            <h3>Caso Resolvido! 🎉</h3>
            <p className="solution-text">{currentCase.solution}</p>
            <button 
              className="close-solution-button"
              onClick={() => setShowSolutionModal(false)}
            >
              Fechar
            </button>
            <button 
              className="back-to-cases-button"
              onClick={handleBackToSelector}
            >
              Voltar aos Casos
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Wrapper component with the GameProvider
const MysteryGamePage = () => {
  return (
    <GameProvider>
      <div className="mystery-game-page">
        <MysteryGameContent />
      </div>
    </GameProvider>
  );
};

export default MysteryGamePage;
