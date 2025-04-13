import { DifficultyLevel } from './puzzle';

export interface Suspect {
  id: number;
  name: string;
  isGuilty: boolean;
}

export interface DetectivePuzzle {
  id: number;
  title: string;
  scenario: string;
  suspects: Suspect[];
  clues: string[];
  explanation: string;
  difficulty: DifficultyLevel;
}

export interface UserDetectiveProgress {
  completedPuzzles: number[];
  currentPuzzle: number;
}
