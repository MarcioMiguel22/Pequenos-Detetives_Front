import { createContext } from 'react';

// Types
export interface Clue {
  id: number;
  title: string;
  description: string;
  found: boolean;
  linkedToObject?: number;
}

export interface GameObject {
  id: number;
  name: string;
  description: string;
  image?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  linkedClue?: number;
  linkedMiniGame?: number;
}

export interface MiniGameConfig {
  imageSrc?: string;
  pieces?: number;
  items?: string[];
  correctOrder?: number[];
  image1?: string;
  image2?: string;
  differences?: Array<{ x: number; y: number; radius: number }>;
}

export interface MiniGame {
  id: number;
  type: 'dragdrop' | 'differences' | 'puzzle';
  title: string;
  description: string;
  completed: boolean;
  config: MiniGameConfig;
}

export interface MysteryCase {
  id: number;
  title: string;
  description: string;
  difficulty: 'fácil' | 'médio' | 'difícil';
  backgroundImage: string;
  objects: GameObject[];
  clues: Clue[];
  miniGames: MiniGame[];
  solution: string;
  hint?: string;
  completed: boolean;
}

export interface GameProgress {
  solvedCases: number[];
  caseProgress: Record<number, {
    discoveredClues: number[];
    completedMiniGames: number[];
  }>;
}

export interface GameContextType {
  currentCase: MysteryCase | null;
  cases: MysteryCase[];
  progress: GameProgress;
  selectCase: (caseId: number) => void;
  resetCase: (caseId: number) => void;
  solveCase: (caseId: number) => void;
  findClue: (caseId: number, clueId: number) => void;
  interactWithObject: (objectId: number) => void;
  completeMiniGame: (caseId: number, miniGameId: number) => void;
  resetProgress: () => void;
}

// Create context with a default value
export const GameContext = createContext<GameContextType>({
  currentCase: null,
  cases: [],
  progress: { solvedCases: [], caseProgress: {} },
  selectCase: () => {},
  resetCase: () => {},
  solveCase: () => {},
  findClue: () => {},
  interactWithObject: () => {},
  completeMiniGame: () => {},
  resetProgress: () => {},
});
