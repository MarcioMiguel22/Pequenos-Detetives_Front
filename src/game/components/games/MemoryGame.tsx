import { useState, useEffect } from 'react';
import { MiniGame } from '../../../types/mystery-game';

interface MemoryGameProps {
  game: MiniGame;
  onComplete: () => void;
}

interface Card {
  id: number;
  image: string;
  pairId: number;
  flipped: boolean;
  matched: boolean;
}

const MemoryGame = ({ game, onComplete }: MemoryGameProps) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  
  // Initialize the game
  useEffect(() => {
    if (game.type !== 'memory' || !game.data.pairs) return;
    
    // Create cards from pairs, each pair consists of two cards with the same image
    const initialCards: Card[] = [];
    game.data.pairs.forEach((pair: {id: number, image: string}, index: number) => {
      // First card of the pair
      initialCards.push({
        id: index * 2,
        image: pair.image,
        pairId: pair.id,
        flipped: false,
        matched: false
      });
      
      // Second card of the pair
      initialCards.push({
        id: index * 2 + 1,
        image: pair.image,
        pairId: pair.id,
        flipped: false,
        matched: false
      });
    });
    
    // Shuffle the cards
    const shuffledCards = [...initialCards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, [game]);
  
  // Check for matches when two cards are flipped
  useEffect(() => {
    if (flippedCards.length < 2) return;
    
    const firstCard = cards.find(card => card.id === flippedCards[0]);
    const secondCard = cards.find(card => card.id === flippedCards[1]);
    
    if (firstCard && secondCard && firstCard.pairId === secondCard.pairId) {
      // Match found
      setMatchedPairs([...matchedPairs, firstCard.pairId]);
      
      // Update the matched status of the cards
      setCards(currentCards => 
        currentCards.map(card => 
          card.id === firstCard.id || card.id === secondCard.id
            ? { ...card, matched: true }
            : card
        )
      );
    }
    
    // Reset flipped cards after a delay
    setTimeout(() => {
      setFlippedCards([]);
      
      // If all pairs are matched, complete the game
      if (matchedPairs.length + 1 === (game.data.pairs?.length || 0)) {
        onComplete();
      }
    }, 1000);
    
  }, [flippedCards, cards, matchedPairs, game.data.pairs, onComplete]);
  
  const handleCardClick = (cardId: number) => {
    // Ignore if two cards are already flipped or if the card is already flipped/matched
    if (flippedCards.length >= 2) return;
    
    const clickedCard = cards.find(card => card.id === cardId);
    if (!clickedCard || clickedCard.flipped || clickedCard.matched) return;
    
    // Flip the card
    setCards(currentCards => 
      currentCards.map(card => 
        card.id === cardId ? { ...card, flipped: true } : card
      )
    );
    
    // Add to flipped cards
    setFlippedCards([...flippedCards, cardId]);
  };
  
  return (
    <div className="memory-game">
      <div className="cards-container">
        {cards.map(card => (
          <div 
            key={card.id} 
            className={`memory-card ${card.flipped || card.matched ? 'flipped' : ''} ${card.matched ? 'matched' : ''}`}
            onClick={() => handleCardClick(card.id)}
          >
            <div className="card-inner">
              <div className="card-front">
                <span>?</span>
              </div>
              <div className="card-back">
                <img src={card.image} alt="Card" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="game-stats">
        <p>Pares encontrados: {matchedPairs.length} / {game.data.pairs?.length || 0}</p>
      </div>
    </div>
  );
};

export default MemoryGame;
