import ItemGroup from './ItemGroup';
import itemGroups from '../data/items'; // Adjust path if needed
import '../styles.css';

const ItemGroupList = ({ activeTimers, toggleTimer, getTimeLeft, openCustomTimer }) => {
  return (
<div className="all-groups">
  {Object.entries(itemGroups).map(([tierName, tierData]) => (
    <div key={tierName} className="tier-section">
      {/* Tier title spans full width above the groups */}
      <h1 className="tier-title">{tierName}</h1>

      {/* This container lays out groups in a horizontal row */}
      <div className="groups-row">
        {typeof tierData === 'object' && !Array.isArray(tierData) ? (
          Object.entries(tierData).map(([groupName, items]) => (
            <ItemGroup
              key={groupName}
              groupName={groupName}
              items={items}
              activeTimers={activeTimers}
              toggleTimer={toggleTimer}
              getTimeLeft={getTimeLeft}
              openCustomTimer={openCustomTimer}
            />
          ))
        ) : (
          <ItemGroup
            groupName={tierName}
            items={tierData}
            activeTimers={activeTimers}
            toggleTimer={toggleTimer}
            getTimeLeft={getTimeLeft}
            openCustomTimer={openCustomTimer}
          />
        )}
      </div>
    </div>
  ))}
</div>

  );
};

export default ItemGroupList;
