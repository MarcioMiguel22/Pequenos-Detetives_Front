import { useState, useEffect } from 'react';
import { MiniGameConfig } from '../../../context/GameContext';

interface DifferencesGameProps {
  config: MiniGameConfig;
  onComplete: () => void;
}

const DifferencesGame = ({ config, onComplete }: DifferencesGameProps) => {
  const [foundDifferences, setFoundDifferences] = useState<number[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [hintTimeout, setHintTimeout] = useState<NodeJS.Timeout | null>(null);
  
  // Safely access the differences array to avoid TypeScript errors
  const differences = config.differences || [];
  const totalDifferences = differences.length;

  useEffect(() => {
    return () => {
      // Clear timeout when component unmounts
      if (hintTimeout) {
        clearTimeout(hintTimeout);
      }
    };
  }, [hintTimeout]);

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (foundDifferences.length === totalDifferences) return;
    
    // Get click coordinates relative to the image
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Check if click is near any difference
    const diffIndex = differences.findIndex((diff, index) => {
      if (foundDifferences.includes(index)) return false;
      
      const distance = Math.sqrt(
        Math.pow(x - diff.x, 2) + Math.pow(y - diff.y, 2)
      );
      
      return distance <= diff.radius;
    });
    
    if (diffIndex !== -1 && !foundDifferences.includes(diffIndex)) {
      // Found a difference
      const newFound = [...foundDifferences, diffIndex];
      setFoundDifferences(newFound);
      
      // Show visual feedback
      const feedback = document.createElement('div');
      feedback.className = 'difference-feedback';
      feedback.style.left = `${differences[diffIndex].x}px`;
      feedback.style.top = `${differences[diffIndex].y}px`;
      e.currentTarget.appendChild(feedback);
      
      setTimeout(() => {
        if (feedback.parentNode) {
          feedback.parentNode.removeChild(feedback);
        }
      }, 1000);
      
      // Check if all differences are found
      if (newFound.length === totalDifferences) {
        setTimeout(onComplete, 1000);
      }
    } else {
      // Wrong click, show hint briefly
      setShowHint(true);
      if (hintTimeout) {
        clearTimeout(hintTimeout);
      }
      const timeout = setTimeout(() => {
        setShowHint(false);
      }, 2000);
      setHintTimeout(timeout);
    }
  };

  return (
    <div className="differences-game">
      <div className="images-container">
        <div 
          className="difference-image"
          onClick={handleImageClick}
          style={{ position: 'relative' }}
        >
          <img src={config.image1} alt="Spot the difference 1" />
          {foundDifferences.map((index) => (
            <div 
              key={`circle-1-${index}`}
              className="difference-circle"
              style={{
                left: `${differences[index].x - differences[index].radius}px`,
                top: `${differences[index].y - differences[index].radius}px`,
                width: `${differences[index].radius * 2}px`,
                height: `${differences[index].radius * 2}px`,
              }}
            />
          ))}
        </div>
        
        <div 
          className="difference-image"
          onClick={handleImageClick}
          style={{ position: 'relative' }}
        >
          <img src={config.image2} alt="Spot the difference 2" />
          {foundDifferences.map((index) => (
            <div 
              key={`circle-2-${index}`}
              className="difference-circle"
              style={{
                left: `${differences[index].x - differences[index].radius}px`,
                top: `${differences[index].y - differences[index].radius}px`,
                width: `${differences[index].radius * 2}px`,
                height: `${differences[index].radius * 2}px`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="differences-progress">
        <p>Encontraste {foundDifferences.length} de {totalDifferences} diferenças</p>
      </div>
      
      {showHint && (
        <div className="hint-message">
          <p>Tenta outra vez! Procura com atenção as diferenças entre as imagens.</p>
        </div>
      )}
    </div>
  );
};

export default DifferencesGame;
