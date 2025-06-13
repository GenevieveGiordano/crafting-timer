import React, { useRef } from 'react';
import '../styles.css';

const ItemCard = ({ item, isActive, onClick, timeLeft, onHold }) => {
  const holdTimeout = useRef(null);

  const handleMouseDown = () => {
    holdTimeout.current = setTimeout(() => {
      onHold(item); // trigger modal
    }, 800);
  };

  const handleMouseUp = () => {
    clearTimeout(holdTimeout.current);
  };

  const handleClick = () => {
    if (holdTimeout.current) {
      onClick(); // only toggle if not long-pressed
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
      className={cardClasses}
    >
      <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px' }} />
      {isActive && <div className="item-card-overlay">{timeLeft}</div>}
    </div>
  );
};

export default ItemCard;
