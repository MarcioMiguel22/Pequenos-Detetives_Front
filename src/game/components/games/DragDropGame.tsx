import { useState, useEffect, useMemo } from 'react';
import { MiniGameConfig } from '../../../context/GameContext';

interface DragDropGameProps {
  config: MiniGameConfig;
  onComplete: () => void;
}

const DragDropGame = ({ config, onComplete }: DragDropGameProps) => {
  const [items, setItems] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  
  // Use useMemo for derived state to avoid dependency issues
  const itemsArray = useMemo(() => config.items || [], [config.items]);
  const correctOrder = useMemo(() => config.correctOrder || [], [config.correctOrder]);

  useEffect(() => {
    if (itemsArray.length > 0) {
      // Shuffle items
      const shuffled = [...itemsArray].sort(() => Math.random() - 0.5);
      setItems(shuffled);
      setSelectedItems([]);
    }
  }, [itemsArray]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: string) => {
    setDraggedItem(item);
    e.dataTransfer.setData('text/plain', item);
    e.currentTarget.classList.add('dragging');
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove('dragging');
    setDraggedItem(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove('drag-over');
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    
    if (draggedItem) {
      // Add item to selected items
      const newSelected = [...selectedItems, draggedItem];
      setSelectedItems(newSelected);
      
      // Remove item from available items
      const newItems = items.filter(item => item !== draggedItem);
      setItems(newItems);
      
      // Check if game is completed
      if (newItems.length === 0) {
        // Convert selected items back to their original indices
        const selectedIndices = newSelected.map(item => itemsArray.indexOf(item));
        const isCorrect = selectedIndices.every(
          (itemIndex, idx) => itemIndex === correctOrder[idx]
        );
        
        if (isCorrect) {
          setCompleted(true);
          setTimeout(onComplete, 1000);
        } else {
          // Reset if incorrect
          setTimeout(() => {
            setItems([...itemsArray].sort(() => Math.random() - 0.5));
            setSelectedItems([]);
          }, 1500);
        }
      }
    }
  };

  return (
    <div className="drag-drop-game">
      <div className="available-items">
        <h4>Ingredientes Disponíveis</h4>
        <div className="items-container">
          {items.map((item, index) => (
            <div 
              key={`item-${index}`}
              className="draggable-item"
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              onDragEnd={handleDragEnd}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      
      <div 
        className="drop-zone"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <h4>Arrasta para aqui na ordem correta</h4>
        <div className="selected-items">
          {selectedItems.map((item, index) => (
            <div 
              key={`selected-${index}`}
              className="selected-item"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      
      {completed && (
        <div className="game-completed">
          <p>Fórmula correta! Desafio completo!</p>
        </div>
      )}
    </div>
  );
};

export default DragDropGame;
