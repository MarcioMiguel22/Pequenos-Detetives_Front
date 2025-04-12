import { DifficultyLevel } from './puzzle';

export interface Clue {
  id: number;
  text: string;
  image?: string;
}

export interface Suspect {
  id: number;
  name: string;
  description: string;
  image?: string;
  isGuilty: boolean;
}

export interface DetectivePuzzle {
  id: number;
  title: string;
  story: string;
  difficulty: DifficultyLevel;
  clues: Clue[];
  suspects: Suspect[];
  hint?: string;
  solution: string;
}
