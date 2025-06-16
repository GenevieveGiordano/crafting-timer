import React, { useRef } from 'react';
import Tooltip from './Tooltip';
import '../styles.css';

const ItemCard = ({ item, isActive, onClick, timeLeft, onHold }) => {
  const holdTimeout = useRef(null);
  const didHold = useRef(false);

  const handleMouseDown = () => {
    didHold.current = false;
    holdTimeout.current = setTimeout(() => {
      didHold.current = true;
      onHold(item);
    }, 800);
  };

  const handleMouseUp = () => {
    clearTimeout(holdTimeout.current);
  };

  const handleClick = () => {
    if (!didHold.current) {
      onClick();
    }
  };

  const isReady = timeLeft === 'Ready!';
  const cardClasses = `item-card ${isReady ? 'ready' : isActive ? 'active' : ''}`;


  const backendUrl = 'https://crafting-timer.onrender.com';

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

      {/* Insert Tooltip */}
      <Tooltip content={
        <div className='item-list'>
          <strong>{item.name}</strong><br />
          <div className="item-card">
            <img src={`${backendUrl}${item.image}`} alt={item.name} style={{ width: '60px', height: '60px' }} />
          </div>
          Recipe: {item.recipe}<br />
          Cost: {item.price}<br />
          
          Vendor: {item.vendor}<br />
          Location: {item.location}<br />
        </div>
      }>
              <img src={`${backendUrl}${item.image}`} alt={item.name} style={{ width: '60px', height: '60px' }} />
      </Tooltip>
      {/* End Tooltip */}

      {isActive && <div className="item-card-overlay">{timeLeft}</div>}
    </div>



  );
};

export default ItemCard;
