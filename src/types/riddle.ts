import { DifficultyLevel } from './puzzle';

export interface ContextualOption {
  text: string;
  isCorrect: boolean;
}

export interface Riddle {
  id: number;
  title: string; // Added title property
  question: string;
  answer: string;
  difficulty: DifficultyLevel;
  hint?: string;
  image?: string;
  contextualOptions?: ContextualOption[];
}
