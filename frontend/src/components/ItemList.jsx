import React, { useState, useEffect, useRef } from 'react';
import ItemGroup from './ItemGroup';
import ItemListStyle from '../styles/ItemList.module.scss';

const ItemList = () => {
  const [itemGroups, setItemGroups] = useState({});
  const [activeTimers, setActiveTimers] = useState({});
  const timersRef = useRef({});

  // Fetch items on mount
  useEffect(() => {
    fetch('http://localhost:5000/items')
      .then(res => res.json())
      .then(data => setItemGroups(data))
      .catch(console.error);
  }, []);

  // Restore timers on mount
  useEffect(() => {
    const saved = localStorage.getItem('activeTimers');
    if (!saved) return;

    const parsed = JSON.parse(saved);
    const now = Date.now();
    const restored = {};

    for (const [id, endTime] of Object.entries(parsed)) {
      if (endTime === 'Ready!') {
        restored[id] = 'Ready!';
      } else if (typeof endTime === 'number') {
        if (endTime <= now) {
          restored[id] = 'Ready!';
        } else {
          restored[id] = endTime;

          timersRef.current[id] = setInterval(() => {
            setActiveTimers(prev => {
              const updated = { ...prev };
              if (Date.now() >= endTime) {
                clearInterval(timersRef.current[id]);
                updated[id] = 'Ready!';
              }
              return updated;
            });
          }, 1000);
        }
      }
    }

    setActiveTimers(restored);
  }, []);

  // Save timers to localStorage on every change
  useEffect(() => {
    localStorage.setItem('activeTimers', JSON.stringify(activeTimers));
  }, [activeTimers]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      Object.values(timersRef.current).forEach(clearInterval);
    };
  }, []);

  const toggleTimer = (id, duration) => {
    if (activeTimers[id] && activeTimers[id] !== 'Ready!') {
      // Cancel running timer
      clearInterval(timersRef.current[id]);
      timersRef.current[id] = null;

      setActiveTimers(prev => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    } else {
      const endTime = Date.now() + duration * 1000;

      timersRef.current[id] = setInterval(() => {
        setActiveTimers(prev => {
          const updated = { ...prev };
          if (Date.now() >= endTime) {
            clearInterval(timersRef.current[id]);
            updated[id] = 'Ready!';
          }
          return updated;
        });
      }, 1000);

      setActiveTimers(prev => ({
        ...prev,
        [id]: endTime,
      }));
    }
  };

  const getTimeLeft = (endTimestamp) => {
    if (!endTimestamp || endTimestamp === 'Ready!') return 'Ready!';

    const secondsLeft = Math.max(0, Math.floor((endTimestamp - Date.now()) / 1000));
    if (secondsLeft <= 0) return 'Ready!';

    const mins = Math.floor(secondsLeft / 60);
    const secs = secondsLeft % 60;
    return `${mins}m ${secs}s`;
  };

  const openCustomTimer = (item) => {
    alert(`Open custom timer modal for ${item.name}`);
  };

  return (
    <div className={ItemListStyle['item-list']}>
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
