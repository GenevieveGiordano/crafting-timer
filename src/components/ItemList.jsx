// fetches your item groups from the backend API,
// manages timers per item,
// passes down props to your existing ItemGroup and ItemCard,
// includes simple toggle timer logic,
// calculates time left,
// handles opening a custom timer on long press (just a placeholder function for now).
import React, { useState, useEffect, useRef } from 'react';
import ItemGroup from './ItemGroup';

const ItemList = () => {
  const [itemGroups, setItemGroups] = useState({});
  const [activeTimers, setActiveTimers] = useState({}); // { itemId: endTimestamp }
  const timersRef = useRef({}); // To hold interval IDs so we can clear them

  // Fetch items from backend on mount
  useEffect(() => {
    fetch('http://localhost:5000/items') // adjust your backend URL
      .then(res => res.json())
      .then(data => setItemGroups(data))
      .catch(console.error);
  }, []);

  // Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      Object.values(timersRef.current).forEach(clearInterval);
    };
  }, []);

  // Toggle timer for an item by id and duration (seconds)
  const toggleTimer = (id, duration) => {
    if (activeTimers[id]) {
      // Timer running — stop it
      clearInterval(timersRef.current[id]);
      timersRef.current[id] = null;

      setActiveTimers(prev => {
        const newTimers = { ...prev };
        delete newTimers[id];
        return newTimers;
      });
    } else {
      // Start timer — end time is now + duration * 1000ms
      const endTime = Date.now() + duration * 1000;

      // Setup interval to update every second
      timersRef.current[id] = setInterval(() => {
        setActiveTimers(prev => {
          // If timer expired, remove it
          if (Date.now() >= endTime) {
            clearInterval(timersRef.current[id]);
            timersRef.current[id] = null;

            const updated = { ...prev };
            delete updated[id];
            return updated;
          }
          return prev;
        });
      }, 1000);

      setActiveTimers(prev => ({ ...prev, [id]: endTime }));
    }
  };

  // Calculate time left string for timer (or 'Ready!' if none)
  const getTimeLeft = (endTimestamp) => {
    if (!endTimestamp) return 'Ready!';

    const secondsLeft = Math.max(0, Math.floor((endTimestamp - Date.now()) / 1000));
    if (secondsLeft <= 0) return 'Ready!';

    const mins = Math.floor(secondsLeft / 60);
    const secs = secondsLeft % 60;

    return `${mins}m ${secs}s`;
  };

  // Placeholder for long press action
  const openCustomTimer = (item) => {
    alert(`Open custom timer modal for ${item.name}`);
  };

  return (
    <div className="item-list">
      {Object.entries(itemGroups).map(([groupName, items]) => (
        <ItemGroup
          key={groupName}
          groupName={groupName}
          items={items}
          activeTimers={activeTimers}
          toggleTimer={toggleTimer}
          getTimeLeft={getTimeLeft}
          openCustomTimer={openCustomTimer}
        />
      ))}
    </div>
  );
};

export default ItemList;
