import { createContext } from 'react';
import { MysteryCase, GameProgress } from '../types/mystery-game';

interface GameContextType {
  cases: MysteryCase[];
  currentCase: MysteryCase | null;
  progress: GameProgress;
  selectCase: (caseId: number) => void;
  discoverClue: (clueId: number) => void;
  discoverObject: (objectId: string) => void;
  completeMiniGame: (miniGameId: number) => void;
  solveCase: (caseId: number) => void;
  resetCase: (caseId: number) => void;
  resetProgress: () => void;
}

// Create the context with a default value
export const GameContext = createContext<GameContextType>({
  cases: [],
  currentCase: null,
  progress: {
    currentCaseId: null,
    solvedCases: [],
    discoveredClues: {},
  },
  selectCase: () => {},
  discoverClue: () => {},
  discoverObject: () => {},
  completeMiniGame: () => {},
  solveCase: () => {},
  resetCase: () => {},
  resetProgress: () => {},
});
