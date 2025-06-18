import ItemGroup from './ItemGroup';
import ItemGroupListStyles from '../styles/ItemGroupList.module.scss';

const ItemGroupList = ({
  itemGroups,
  activeTimers,
  toggleTimer,
  getTimeLeft,
  openCustomTimer,
}) => {
  const isStarforged = (str) => {
    if (!str) return false;
    return str.toLowerCase().includes('starforged');
  };

  const getTierNumber = (label) => {
    const match = label.match(/^T(\d)$/i);
    return match ? parseInt(match[1], 10) : null;
  };

  // Custom group sort orders
  const customGroupOrders = {
    Resources: ['Iron', 'Silver', 'Gold', 'Unob', 'Frost', 'Coral', 'Salt', 'Marble', 'Soul'],
    Gems: ['Sapphire', 'Onyx', 'Amethyst', 'Ruby', 'Emerald', 'Diamond'],
  };

  const sortTiers = (a, b) => {
    const [nameA] = a;
    const [nameB] = b;

    const tierA = getTierNumber(nameA);
    const tierB = getTierNumber(nameB);

    const isTierA = tierA !== null;
    const isTierB = tierB !== null;

    if (isTierA && isTierB) return tierA - tierB;
    if (isTierA) return -1;
    if (isTierB) return 1;

    return nameA.localeCompare(nameB);
  };

  const sortGroups = (a, b, category) => {
    const [groupNameA, itemsA] = a;
    const [groupNameB, itemsB] = b;

    const aIsStarforged = isStarforged(groupNameA);
    const bIsStarforged = isStarforged(groupNameB);

    if (aIsStarforged && !bIsStarforged) return -1;
    if (!aIsStarforged && bIsStarforged) return 1;

    const tierNumA = getTierNumber(groupNameA);
    const tierNumB = getTierNumber(groupNameB);
    const isTierA = tierNumA !== null;
    const isTierB = tierNumB !== null;

    if (isTierA && isTierB) return tierNumA - tierNumB;
    if (isTierA) return -1;
    if (isTierB) return 1;

    const customOrder = customGroupOrders[category];
    if (customOrder) {
      const indexA = customOrder.indexOf(groupNameA);
      const indexB = customOrder.indexOf(groupNameB);
      const inOrderA = indexA !== -1;
      const inOrderB = indexB !== -1;

      if (inOrderA && inOrderB) return indexA - indexB;
      if (inOrderA) return -1;
      if (inOrderB) return 1;
    }

    return (itemsA[0]?.order ?? 0) - (itemsB[0]?.order ?? 0);
  };

  return (
    <div className={ItemGroupListStyles['all-groups']}>
      {Object.entries(itemGroups)
        .sort(sortTiers)
        .map(([categoryName, categoryData]) => (
          <div key={categoryName} className={ItemGroupListStyles['tier-section']}>
            <h1 className={ItemGroupListStyles['tier-title']}>{categoryName}</h1>
            <div className={ItemGroupListStyles['groups-row']}>
              {typeof categoryData === 'object' && !Array.isArray(categoryData) ? (
                Object.entries(categoryData)
                  .sort((a, b) => sortGroups(a, b, categoryName))
                  .map(([groupName, items]) => (
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
                  groupName={categoryName}
                  items={categoryData}
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
