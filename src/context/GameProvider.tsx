import { useState, useEffect, ReactNode } from 'react';
import { GameContext, MysteryCase, GameProgress } from './GameContext';
import { mysteryCases } from '../data/mystery-cases';

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider = ({ children }: GameProviderProps) => {
  const [cases, setCases] = useState<MysteryCase[]>(mysteryCases);
  const [currentCase, setCurrentCase] = useState<MysteryCase | null>(null);
  const [progress, setProgress] = useState<GameProgress>(() => {
    const savedProgress = localStorage.getItem('mysteryGameProgress');
    return savedProgress 
      ? JSON.parse(savedProgress) 
      : { solvedCases: [], caseProgress: {} };
  });

  // Save progress to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('mysteryGameProgress', JSON.stringify(progress));
  }, [progress]);

  // Select a mystery case
  const selectCase = (caseId: number) => {
    const selectedCase = cases.find(c => c.id === caseId);
    if (selectedCase) {
      setCurrentCase(selectedCase);
    }
  };

  // Reset a specific case
  const resetCase = (caseId: number) => {
    setCases(prevCases => 
      prevCases.map(c => {
        if (c.id === caseId) {
          // Reset all clues and mini-games
          return {
            ...c,
            clues: c.clues.map(clue => ({ ...clue, found: false })),
            miniGames: c.miniGames.map(game => ({ ...game, completed: false })),
            completed: false
          };
        }
        return c;
      })
    );

    // Reset progress for this case
    setProgress(prev => ({
      ...prev,
      caseProgress: {
        ...prev.caseProgress,
        [caseId]: { discoveredClues: [], completedMiniGames: [] }
      },
      solvedCases: prev.solvedCases.filter(id => id !== caseId)
    }));

    // If current case is the one being reset, update it
    if (currentCase && currentCase.id === caseId) {
      const updatedCase = cases.find(c => c.id === caseId);
      if (updatedCase) {
        setCurrentCase({
          ...updatedCase,
          clues: updatedCase.clues.map(clue => ({ ...clue, found: false })),
          miniGames: updatedCase.miniGames.map(game => ({ ...game, completed: false })),
          completed: false
        });
      }
    }
  };

  // Mark a case as solved
  const solveCase = (caseId: number) => {
    setCases(prevCases => 
      prevCases.map(c => {
        if (c.id === caseId) {
          return { ...c, completed: true };
        }
        return c;
      })
    );

    setProgress(prev => ({
      ...prev,
      solvedCases: prev.solvedCases.includes(caseId) 
        ? prev.solvedCases 
        : [...prev.solvedCases, caseId]
    }));

    // Update current case if it's the one being solved
    if (currentCase && currentCase.id === caseId) {
      setCurrentCase(prev => prev ? { ...prev, completed: true } : null);
    }
  };

  // Find a clue
  const findClue = (caseId: number, clueId: number) => {
    setCases(prevCases => 
      prevCases.map(c => {
        if (c.id === caseId) {
          return {
            ...c,
            clues: c.clues.map(clue => 
              clue.id === clueId ? { ...clue, found: true } : clue
            )
          };
        }
        return c;
      })
    );

    // Update progress
    setProgress(prev => {
      const caseProgress = prev.caseProgress[caseId] || { discoveredClues: [], completedMiniGames: [] };
      return {
        ...prev,
        caseProgress: {
          ...prev.caseProgress,
          [caseId]: {
            ...caseProgress,
            discoveredClues: caseProgress.discoveredClues.includes(clueId)
              ? caseProgress.discoveredClues
              : [...caseProgress.discoveredClues, clueId]
          }
        }
      };
    });

    // Update current case if it's the one being modified
    if (currentCase && currentCase.id === caseId) {
      setCurrentCase(prev => {
        if (!prev) return null;
        return {
          ...prev,
          clues: prev.clues.map(clue => 
            clue.id === clueId ? { ...clue, found: true } : clue
          )
        };
      });
    }
  };

  // Interact with an object in the scene
  const interactWithObject = (objectId: number) => {
    if (!currentCase) return;
    
    // Find the object in the current case
    const obj = currentCase.objects.find(o => o.id === objectId);
    if (!obj) return;

    // If object is linked to a clue, find it
    if (obj.linkedClue) {
      findClue(currentCase.id, obj.linkedClue);
    }
  };

  // Complete a mini-game
  const completeMiniGame = (caseId: number, miniGameId: number) => {
    setCases(prevCases => 
      prevCases.map(c => {
        if (c.id === caseId) {
          return {
            ...c,
            miniGames: c.miniGames.map(game => 
              game.id === miniGameId ? { ...game, completed: true } : game
            )
          };
        }
        return c;
      })
    );

    // Update progress
    setProgress(prev => {
      const caseProgress = prev.caseProgress[caseId] || { discoveredClues: [], completedMiniGames: [] };
      return {
        ...prev,
        caseProgress: {
          ...prev.caseProgress,
          [caseId]: {
            ...caseProgress,
            completedMiniGames: caseProgress.completedMiniGames.includes(miniGameId)
              ? caseProgress.completedMiniGames
              : [...caseProgress.completedMiniGames, miniGameId]
          }
        }
      };
    });

    // Update current case if it's the one being modified
    if (currentCase && currentCase.id === caseId) {
      setCurrentCase(prev => {
        if (!prev) return null;
        return {
          ...prev,
          miniGames: prev.miniGames.map(game => 
            game.id === miniGameId ? { ...game, completed: true } : game
          )
        };
      });
    }
  };

  // Reset all progress
  const resetProgress = () => {
    setCases(mysteryCases);
    setCurrentCase(null);
    setProgress({ solvedCases: [], caseProgress: {} });
    localStorage.removeItem('mysteryGameProgress');
  };

  return (
    <GameContext.Provider value={{
      currentCase,
      cases,
      progress,
      selectCase,
      resetCase,
      solveCase,
      findClue,
      interactWithObject,
      completeMiniGame,
      resetProgress
    }}>
      {children}
    </GameContext.Provider>
  );
};
