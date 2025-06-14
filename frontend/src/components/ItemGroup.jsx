import React from 'react';
import ItemCard from './ItemCard';
import '../styles.css';

const ItemGroup = ({ groupName, items, activeTimers, toggleTimer, getTimeLeft, openCustomTimer }) => {
  return (
    <div className="item-group">
      <h2 className="group-name">{groupName}</h2>
      <div className="items-list">
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
    </div>
  );
};

export default ItemGroup;
