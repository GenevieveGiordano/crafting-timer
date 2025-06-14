import React, { useRef } from 'react';
import '../styles.css';

const ItemCard = ({ item, isActive, onClick, timeLeft, onHold }) => {
  const holdTimeout = useRef(null);
  const didHold = useRef(false); // NEW: flag to track long press

  const handleMouseDown = () => {
    didHold.current = false;
    holdTimeout.current = setTimeout(() => {
      didHold.current = true;
      onHold(item); // Open custom timer modal
    }, 800); // Long press duration
  };

  const handleMouseUp = () => {
    clearTimeout(holdTimeout.current);
  };

  const handleClick = () => {
    if (!didHold.current) {
      onClick(); // Only run if it wasn't a long press
    }
  };

  const isReady = timeLeft === 'Ready!';
  const cardClasses = `item-card ${isReady ? 'ready' : isActive ? 'active' : ''}`;

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={() => {
        handleMouseUp();
        handleClick();
      }}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={() => {
        handleMouseUp();
        handleClick();
      }}
      className={cardClasses}
    >
      <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px' }} />
      {isActive && <div className="item-card-overlay">{timeLeft}</div>}
    </div>
  );
};

export default ItemCard;
