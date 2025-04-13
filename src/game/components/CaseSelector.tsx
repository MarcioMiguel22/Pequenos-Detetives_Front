import { useContext } from 'react';
import { GameContext, MysteryCase } from '../../context/GameContext';

const CaseSelector = () => {
  const { cases, progress, selectCase } = useContext(GameContext);

  const handleCaseSelect = (mysteryCase: MysteryCase) => {
    selectCase(mysteryCase.id);
  };

  return (
    <div className="case-selector">
      <h2>Escolhe um Caso para Investigar</h2>
      
      <div className="cases-grid">
        {cases.map(mysteryCase => {
          const caseProgress = progress.caseProgress[mysteryCase.id] || {
            discoveredClues: [],
            completedMiniGames: []
          };
          
          const totalClues = mysteryCase.clues.length;
          const foundClues = caseProgress.discoveredClues.length;
          const percentComplete = totalClues > 0 
            ? Math.round((foundClues / totalClues) * 100) 
            : 0;
          
          const isSolved = progress.solvedCases.includes(mysteryCase.id);
          
          return (
            <div 
              key={mysteryCase.id}
              className={`case-card ${isSolved ? 'solved' : ''}`}
              onClick={() => handleCaseSelect(mysteryCase)}
            >
              <div 
                className="case-image"
                style={{ backgroundImage: `url(${mysteryCase.backgroundImage})` }}
              >
                {isSolved && (
                  <div className="solved-badge">
                    <span>✓</span>
                  </div>
                )}
              </div>
              
              <div className="case-info">
                <h3>{mysteryCase.title}</h3>
                <span className={`difficulty ${mysteryCase.difficulty}`}>
                  {mysteryCase.difficulty}
                </span>
                
                <p className="case-description">{mysteryCase.description}</p>
                
                <div className="case-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${percentComplete}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">
                    {foundClues} de {totalClues} pistas encontradas
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseSelector;
