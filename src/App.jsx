import React, { useState, useEffect, useRef } from 'react';
import ItemGroupList from './components/ItemGroupList';
import './styles.css';


function App() {
  const audioRef = useRef(null);

  // Load from localStorage on first render
  const [activeTimers, setActiveTimers] = useState(() => {
    const saved = localStorage.getItem('activeTimers');
    if (!saved) return {};
    const parsed = JSON.parse(saved);
    const now = Date.now();

    // Remove expired timers
    const validTimers = {};
    for (const [id, endTime] of Object.entries(parsed)) {
      if (endTime > now) {
        validTimers[id] = endTime;
      }
    }
    return validTimers;
  });

  // Save to localStorage whenever timers change
  useEffect(() => {
    localStorage.setItem('activeTimers', JSON.stringify(activeTimers));
  }, [activeTimers]);

  // Timer interval: update every second and play sound if done
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimers(prev => {
        const updated = { ...prev };
        const now = Date.now();

        for (const id in prev) {
          if (typeof prev[id] === 'number' && prev[id] <= now) {
            updated[id] = 'ready';
            if (audioRef.current) {
              audioRef.current.play().catch(() => {});
            }
          }
        }

        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Start or cancel a timer
  const toggleTimer = (id, duration) => {
    setActiveTimers(prev => {
      const updated = { ...prev };
      if (updated[id]) {
        delete updated[id];
      } else {
        updated[id] = Date.now() + duration * 1000;
      }
      return updated;
    });
  };

  // Get time left in seconds
  const getTimeLeft = (endTime) => {
    if (!endTime) return '';
    if (endTime === 'ready') return 'Ready!';

    const diff = endTime - Date.now();
    if (diff <= 0) return 'Done';

    const totalSeconds = Math.ceil(diff / 1000);
    if (totalSeconds < 60) {
      return `${totalSeconds}s`;
    }

    const totalMinutes = Math.floor(totalSeconds / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  return (
    <div style={{ padding: '20px' }}>
      <div className="web-title"> <h1>Fantasy Online 2 Crafting Timers</h1></div> 

      <audio ref={audioRef} src="/done.mp3" preload="auto" />

      <ItemGroupList
        activeTimers={activeTimers}
        toggleTimer={toggleTimer}
        getTimeLeft={getTimeLeft}
      />
      <footer footer class="static-footer">Made by MajorasMask Courtesy of Catacomb Saints</footer>
    </div>
    
  );
}

export default App;
