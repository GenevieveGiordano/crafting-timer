import React, { useEffect, useState } from 'react';
import ItemGroup from './ItemGroup';

const ItemGroupList = ({ activeTimers, toggleTimer, getTimeLeft, openCustomTimer }) => {
  const [itemGroups, setItemGroups] = useState({});

  // Helper function to group flat array by tier and group
  const groupItemsByTierAndGroup = (items) => {
    return items.reduce((acc, item) => {
      const tier = item.tier || 'defaultTier';
      const group = item.group || 'defaultGroup';

      if (!acc[tier]) acc[tier] = {};
      if (!acc[tier][group]) acc[tier][group] = [];

      acc[tier][group].push(item);
      return acc;
    }, {});
  };

useEffect(() => {
  const fetchItems = async () => {
    try {
      const response = await fetch('http://localhost:5000/items');
      const data = await response.json();
      console.log('Fetched data:', data);  // <-- add this
      const groupedData = groupItemsByTierAndGroup(data);
      console.log('Grouped data:', groupedData); // <-- and this
      setItemGroups(groupedData);
    } catch (error) {
      console.error('Error fetching item groups:', error);
    }
  };

  fetchItems();
}, []);

  return (
    <div className="all-groups">
      {Object.entries(itemGroups).map(([tierName, tierData]) => (
        <div key={tierName} className="tier-section">
          <h1 className="tier-title">{tierName}</h1>
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
