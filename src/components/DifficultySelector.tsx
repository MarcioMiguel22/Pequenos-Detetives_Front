import { DifficultyLevel } from '../types/puzzle';
import '../styles/DifficultySelector.css';

interface DifficultySelectorProps {
  selectedDifficulty: DifficultyLevel | 'todos';
  onSelectDifficulty: (difficulty: DifficultyLevel | 'todos') => void;
}

export default function DifficultySelector({ 
  selectedDifficulty, 
  onSelectDifficulty 
}: DifficultySelectorProps) {
  return (
    <div className="difficulty-selector">
      <label htmlFor="difficulty-select">Filtrar por Dificuldade:</label>
      <select 
        id="difficulty-select"
        className="difficulty-select"
        value={selectedDifficulty}
        onChange={(e) => onSelectDifficulty(e.target.value as DifficultyLevel | 'todos')}
      >
        <option value="todos">Todos</option>
        <option value="fácil">Fácil</option>
        <option value="médio">Médio</option>
        <option value="difícil">Difícil</option>
      </select>
    </div>
  );
}
