import React, { useRef } from 'react';
import Tooltip from './Tooltip';
import ItemCardStyles from '../styles/ItemCard.module.scss';


const ItemCard = ({ item, isActive, onClick, timeLeft, onHold }) => {
  const holdTimeout = useRef(null);
  const didHold = useRef(false);

  const handleMouseDown = () => {
    didHold.current = false;
    holdTimeout.current = setTimeout(() => {
      didHold.current = true;
      onHold(item);
    }, 400);
  };

  const handleMouseUp = () => {
    clearTimeout(holdTimeout.current);
  };

  const handleClick = (event) => {
    // Only react to left click (button 0)
    if (event && event.button !== 0) return;

    if (!didHold.current) {
      onClick();
    }
  };

  const isReady = timeLeft === 'Ready!';

const cardClasses = [
  ItemCardStyles['item-card'],
  isReady ? ItemCardStyles['ready'] : isActive ? ItemCardStyles['active'] : ''
].join(' ');


  const backendUrl = 'https://crafting-timer.onrender.com';

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={(e) => {
        handleMouseUp();
        handleClick(e);
      }}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={() => {
        handleMouseUp();
        handleClick();
      
      }}
      onContextMenu={(e) => e.preventDefault()} //stops right click default menus like save image
      className={cardClasses}
    >

      {/* Insert Tooltip */}
      <Tooltip content={
        <div className={ItemCardStyles['item-list']}>

          <p className={ItemCardStyles['item-name']}>{item.name}</p>

          <div className={ItemCardStyles['item-card']}>
            <img src={`${backendUrl}${item.image}`} alt={item.name} style={{ width: '60px', height: '60px' }} />
          </div>

          <div className={ItemCardStyles['item-stats']}>
            <p className={ItemCardStyles['item-recipe']}>Recipe: {item.recipe}</p>
            <p className={ItemCardStyles['item-cost']}>Cost: {item.price}</p>
            <p className={ItemCardStyles['item-vendor']}>Vendor: {item.vendor}</p>
            <p className={ItemCardStyles['item-location']}>Location: {item.location}</p>
          </div>

        </div>
      }>
              <img src={`${backendUrl}${item.image}`} alt={item.name} style={{ width: '60px', height: '60px' }} />
      </Tooltip>
      {/* End Tooltip */}

      {isActive && <div className={ItemCardStyles['item-card-overlay']}>{timeLeft}</div>}
    </div>



  );
};

export default ItemCard;
