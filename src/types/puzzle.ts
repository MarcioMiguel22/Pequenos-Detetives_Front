export type DifficultyLevel = 'fácil' | 'médio' | 'difícil';

export interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface Puzzle {
  id: number;
  title: string;
  question: string;
  image?: string;
  difficulty: DifficultyLevel;
  answers: Answer[];
  hint?: string;
}

export interface UserProgress {
  completedPuzzles: number[];
  currentPuzzle: number;
  score: number;
}
