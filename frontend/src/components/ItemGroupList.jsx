// import React, { useEffect, useState } from 'react';
import ItemGroup from './ItemGroup';
import ItemGroupListStyles from '../styles/ItemGroupList.module.scss';

const ItemGroupList = ({
  itemGroups, // grouped data passed in: { categoryName: { groupName: [items] } }
  activeTimers,
  toggleTimer,
  getTimeLeft,
  openCustomTimer,
}) => {

  // Check if groupName contains 'starforged' (case-insensitive)
  const isStarforged = (str) => {
    if (!str) return false;
    return str.toLowerCase().includes('starforged');
  };

  // Extract numeric tier from category string like "T1" -> 1, else null if not T1-T5
  const getCategoryNumber = (categoryName) => {
    const match = categoryName.match(/^T([1-5])$/i);
    return match ? parseInt(match[1], 10) : null;
  };

  // Sort groups inside each category:
  // starforged groups first, then by first item's order
  const sortGroups = (a, b) => {
    const [groupNameA, itemsA] = a;
    const [groupNameB, itemsB] = b;

    const aIsStarforged = isStarforged(groupNameA);
    const bIsStarforged = isStarforged(groupNameB);

    if (aIsStarforged && !bIsStarforged) return -1;
    if (!aIsStarforged && bIsStarforged) return 1;

    return (itemsA[0]?.order ?? 0) - (itemsB[0]?.order ?? 0);
  };

  // Sort categories:
  // - T1 to T5 numerically first (in order),
  // - then all others alphabetically after
  const sortCategories = (a, b) => {
    const [categoryA] = a;
    const [categoryB] = b;

    const numA = getCategoryNumber(categoryA);
    const numB = getCategoryNumber(categoryB);

    if (numA !== null && numB !== null) {
      // Both are T1-T5, sort numerically
      return numA - numB;
    }
    if (numA !== null) {
      // Only A is T1-T5, comes first
      return -1;
    }
    if (numB !== null) {
      // Only B is T1-T5, comes first
      return 1;
    }
    // Neither are T1-T5, sort alphabetically
    return categoryA.localeCompare(categoryB);
  };

  return (
    <div className={ItemGroupListStyles['all-groups']}>
      {/* Sort and map categories */}
      {Object.entries(itemGroups)
        .sort(sortCategories)
        .map(([categoryName, categoryData]) => (
          <div key={categoryName} className={ItemGroupListStyles['tier-section']}>
            <h1 className={ItemGroupListStyles['tier-title']}>{categoryName}</h1>
            <div className={ItemGroupListStyles['groups-row']}>
              {typeof categoryData === 'object' && !Array.isArray(categoryData) ? (
                Object.entries(categoryData)
                  .sort(sortGroups)
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
