import { DifficultyLevel } from './puzzle';

export interface Riddle {
  id: number;
  question: string;
  answer: string;
  difficulty: DifficultyLevel;
  hint?: string;
  image?: string;
}
