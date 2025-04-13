// Types for the Mystery Detective Game

export type MiniGameType = 'memory' | 'dragdrop' | 'differences' | 'puzzle';

export interface Clue {
  id: number;
  text: string;
  found: boolean;
  image?: string;
  relatedObjectId?: string;
}

export interface InteractiveObject {
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  image: string;
  clueId?: number;
  miniGameId?: number;
  discovered: boolean;
  zoomable: boolean;
  description?: string;
}

export interface MiniGame {
  id: number;
  type: MiniGameType;
  title: string;
  description: string;
  completed: boolean;
  unlockClueId?: number;
  data: MiniGameData;
}

// Type for mini game data to replace 'any'
export interface MiniGameData {
  [key: string]: unknown;
  pairs?: Array<{id: number, image: string}>;
  items?: Array<{id: number, text: string, image?: string}>;
  correctOrder?: number[];
  image1?: string;
  image2?: string;
  differences?: Array<{x1: number, y1: number, radius: number}>;
}

export interface MysteryCase {
  id: number;
  title: string;
  description: string;
  difficulty: 'fácil' | 'médio' | 'difícil';
  backgroundImage: string;
  objects: InteractiveObject[];
  clues: Clue[];
  miniGames: MiniGame[];
  solution: string;
  completed: boolean;
  hint?: string;
}

export interface GameProgress {
  currentCaseId: number | null;
  solvedCases: number[];
  discoveredClues: Record<number, number[]>; // caseId -> clueIds[]
}
