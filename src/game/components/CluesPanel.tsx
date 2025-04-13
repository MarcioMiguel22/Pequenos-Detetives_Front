import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

const CluesPanel = () => {
  const { currentCase } = useContext(GameContext);

  if (!currentCase) return null;

  const foundClues = currentCase.clues.filter(clue => clue.found);
  const totalClues = currentCase.clues.length;
  const percentFound = Math.round((foundClues.length / totalClues) * 100);

  return (
    <div className="clues-panel">
      <h3>Pistas Descobertas</h3>
      
      <div className="clues-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${percentFound}%` }}
          ></div>
        </div>
        <span className="progress-text">
          {foundClues.length} de {totalClues} pistas encontradas
        </span>
      </div>
      
      <div className="clues-list">
        {foundClues.length === 0 ? (
          <p className="no-clues">
            Ainda não encontraste nenhuma pista. Explora o cenário!
          </p>
        ) : (
          foundClues.map(clue => (
            <div key={clue.id} className="clue-item">
              <h4>{clue.title}</h4>
              <p>{clue.description}</p>
            </div>
          ))
        )}
      </div>
      
      {currentCase.hint && foundClues.length > 0 && foundClues.length < totalClues && (
        <div className="hint-section">
          <h4>Dica</h4>
          <p>{currentCase.hint}</p>
        </div>
      )}
    </div>
  );
};

export default CluesPanel;
