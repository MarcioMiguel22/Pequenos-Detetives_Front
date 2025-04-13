import { useState, useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import ObjectModal from './ObjectModal';

const InteractiveScene = () => {
  const { currentCase } = useContext(GameContext);
  const [selectedObject, setSelectedObject] = useState<number | null>(null);
  const [showObjectModal, setShowObjectModal] = useState(false);

  if (!currentCase) {
    return <div className="empty-scene">Nenhum caso selecionado</div>;
  }

  const handleObjectClick = (objectId: number) => {
    setSelectedObject(objectId);
    setShowObjectModal(true);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only trigger if clicking directly on the background, not on an object
    if (e.currentTarget === e.target) {
      setShowObjectModal(false);
      setSelectedObject(null);
    }
  };

  const closeModal = () => {
    setShowObjectModal(false);
    setSelectedObject(null);
  };

  return (
    <div 
      className="interactive-scene"
      style={{ backgroundImage: `url(${currentCase.backgroundImage})` }}
      onClick={handleBackgroundClick}
    >
      {currentCase.objects.map(obj => (
        <div
          key={obj.id}
          className="interactive-object"
          style={{
            left: `${obj.x}px`,
            top: `${obj.y}px`,
            width: `${obj.width}px`,
            height: `${obj.height}px`,
            cursor: 'pointer'
          }}
          onClick={() => handleObjectClick(obj.id)}
        >
          <div className="object-highlight"></div>
        </div>
      ))}

      {showObjectModal && selectedObject && (
        <ObjectModal 
          objectId={selectedObject}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default InteractiveScene;
