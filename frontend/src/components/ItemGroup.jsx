import React from 'react';
import ItemCard from './ItemCard';
import ItemGroupStyles from '../styles/ItemGroup.module.scss';

const ItemGroup = ({ groupName, items, activeTimers, toggleTimer, getTimeLeft, openCustomTimer }) => {
  // Sort items by their order property before rendering
  const sortedItems = [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <div className={ItemGroupStyles['item-list']}>
      <h2 className={ItemGroupStyles['group-name']}>{groupName}</h2>
      {sortedItems.map(item => (
        <ItemCard
          key={item._id || item.id} // Use Mongo _id or fallback to id
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
