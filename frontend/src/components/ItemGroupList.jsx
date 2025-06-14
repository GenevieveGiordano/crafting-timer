import React, { useEffect, useState } from 'react';
import ItemGroup from './ItemGroup';

const ItemGroupList = ({
  itemGroups, // <-- updated to receive grouped data directly
  activeTimers,
  toggleTimer,
  getTimeLeft,
  openCustomTimer,
}) => {
  // No need to fetch or group items here anymore
  // This component simply renders grouped data passed as props

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
