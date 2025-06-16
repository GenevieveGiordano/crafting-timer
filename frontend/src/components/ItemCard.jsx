import React from 'react';
import useHold from '../hooks/useHold';
import Tooltip from './Tooltip';
import ItemCardStyles from '../styles/ItemCard.module.scss';

const ItemCard = ({ item, isActive, onClick, timeLeft, onHold }) => {

  const { handleMouseDown, handleMouseUp, didHold } = useHold(onHold);
  const isReady = timeLeft === 'Ready!';
  const backendUrl = 'https://crafting-timer.onrender.com';

  const handleClick = (event) => {
    if (event && event.button !== 0) return; // only left click
    if (!didHold.current) onClick();
  };

const getCardClass = () => {
  if (isReady) return ItemCardStyles['ready'];
  if (isActive) return ItemCardStyles['active'];
  return '';
};

const cardClasses = `${ItemCardStyles['item-card']} ${getCardClass()}`;


  return (
    <div
      onMouseDown={() => handleMouseDown(item)}
      onMouseUp={(e) => {
        handleMouseUp();
        handleClick(e);
      }}
      onMouseLeave={handleMouseUp}
      onTouchStart={() => handleMouseDown(item)}
      onTouchEnd={() => {
        handleMouseUp();
        handleClick();
      }}
      onContextMenu={(e) => e.preventDefault()}
      className={cardClasses}
    >
      {/* Tooltip with item details */}
      <Tooltip
        content={
          <div className={ItemCardStyles['item-list']}>
            <p className={ItemCardStyles['item-name']}>{item.name}</p>
            <div className={ItemCardStyles['item-card']}>
              <img
                src={`${backendUrl}${item.image}`}
                alt={item.name}
                style={{ width: '60px', height: '60px' }}
              />
            </div>
            <div className={ItemCardStyles['item-stats']}>
              <p className={ItemCardStyles['item-recipe']}>Recipe: {item.recipe}</p>
              <p className={ItemCardStyles['item-cost']}>Cost: {item.price}</p>
              <p className={ItemCardStyles['item-vendor']}>Vendor: {item.vendor}</p>
              <p className={ItemCardStyles['item-location']}>Location: {item.location}</p>
            </div>
          </div>
        }
      >
        <img
          src={`${backendUrl}${item.image}`}
          alt={item.name}
          style={{ width: '60px', height: '60px' }}
        />
      </Tooltip>

      {isActive && (
        <div className={ItemCardStyles['item-card-overlay']}>{timeLeft}</div>
      )}
    </div>
  );
};

export default ItemCard;
