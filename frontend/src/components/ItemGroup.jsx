import React from 'react';
import ItemCard from './ItemCard';
import ItemGroupStyles from '../styles/ItemGroup.module.scss';

const ItemGroup = ({ groupName, items, activeTimers, toggleTimer, getTimeLeft, openCustomTimer }) => {
  return (

      <div className={ItemGroupStyles['item-list']}>
        <h2 className={ItemGroupStyles['group-name']}>{groupName}</h2>
        {items.map(item => (
          <ItemCard
            key={item._id || item.id} // MongoDB _id or fallback to id
            item={item}
            isActive={!!activeTimers[item._id || item.id]}
            timeLeft={getTimeLeft(activeTimers[item._id || item.id])}
            onClick={() => toggleTimer(item._id || item.id, item.duration)}
            onHold={openCustomTimer}
          />
        ))}
      </div>
      
  );
};

export default ItemGroup;
