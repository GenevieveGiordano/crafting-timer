import ItemCard from './ItemCard';
import '../styles.css';

const ItemGroup = ({ groupName, items, activeTimers, toggleTimer, getTimeLeft }) => {
  return (
    <div className="item-group">
      <h2 className="group-name">{groupName}</h2>
      <div className="items-list">
        {items.map(item => (
          <ItemCard
            key={item.id}
            item={item}
            isActive={!!activeTimers[item.id]}
            timeLeft={getTimeLeft(activeTimers[item.id])}
            onClick={() => toggleTimer(item.id, item.duration)}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemGroup;
