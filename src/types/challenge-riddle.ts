import { DifficultyLevel } from './puzzle';

export interface ChallengeRiddle {
  id: number;
  title: string;
  question: string;
  answer: string;
  difficulty: DifficultyLevel;
  hints: string[]; // Array de dicas que podem ser reveladas uma por uma
  explanation?: string; // Explicação opcional da resposta
}
