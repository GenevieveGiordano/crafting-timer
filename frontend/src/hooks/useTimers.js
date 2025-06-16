import { useState, useEffect, useRef } from 'react';

export default function useTimers() {
  const [activeTimers, setActiveTimers] = useState(() => {
    const saved = localStorage.getItem('activeTimers');
    if (!saved) return {};

    const parsed = JSON.parse(saved);
    const now = Date.now();
    const restored = {};

    for (const [id, val] of Object.entries(parsed)) {
      if (val === 'ready') {
        restored[id] = 'ready';
      } else if (typeof val === 'number') {
        if (val <= now) {
          restored[id] = 'ready';
        } else {
          restored[id] = val;
        }
      }
    }
    return restored;
  });

  const timersRef = useRef({}); // store interval IDs
  const audioRef = useRef(null);

  // Save to localStorage on activeTimers change
  useEffect(() => {
    localStorage.setItem('activeTimers', JSON.stringify(activeTimers));
  }, [activeTimers]);

  // Setup intervals for running timers on mount and when activeTimers change
  useEffect(() => {
    // Clear all existing intervals first
    Object.values(timersRef.current).forEach(clearInterval);
    timersRef.current = {};

    const now = Date.now();

    Object.entries(activeTimers).forEach(([id, val]) => {
      if (typeof val === 'number' && val > now) {
        timersRef.current[id] = setInterval(() => {
          setActiveTimers(prev => {
            const updated = { ...prev };
            if (Date.now() >= val) {
              clearInterval(timersRef.current[id]);
              delete timersRef.current[id];
              updated[id] = 'ready';
              if (audioRef.current) {
                audioRef.current.play().catch(() => {});
              }
            }
            return updated;
          });
        }, 1000);
      }
    });

    return () => {
      Object.values(timersRef.current).forEach(clearInterval);
      timersRef.current = {};
    };
  }, [activeTimers]);

const toggleTimer = (id, duration) => {
  setActiveTimers(prev => {
    const updated = { ...prev };
    const val = updated[id];

    if (val && val !== 'ready') {
      // Timer running: cancel it
      if (timersRef.current[id]) {
        clearInterval(timersRef.current[id]);
        delete timersRef.current[id];
      }
      delete updated[id];
    } else if (val === 'ready') {
      // Timer is ready: reset to neutral (remove)
      delete updated[id];
    } else {
      // No timer: start new timer
      const endTime = Date.now() + duration * 1000;
      updated[id] = endTime;
    }

    return updated;
  });
};

  const getTimeLeft = (val) => {
    if (!val) return '';
    if (val === 'ready') return 'Ready!';

    const diff = val - Date.now();
    if (diff <= 0) return 'Ready!';

    const totalSeconds = Math.ceil(diff / 1000);
    if (totalSeconds < 60) return `${totalSeconds}s`;

    const totalMinutes = Math.floor(totalSeconds / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;

    if (days > 0) return `${days}d ${remainingHours}h ${minutes}m`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  const clearAllTimers = () => {
    // Clear all intervals too
    Object.values(timersRef.current).forEach(clearInterval);
    timersRef.current = {};
    setActiveTimers({});
  };

  const clearReadyTimers = () => {
    setActiveTimers(prev => {
      const updated = {};
      for (const [id, val] of Object.entries(prev)) {
        if (val !== 'ready') updated[id] = val;
      }
      return updated;
    });
  };

  const clearUnreadyTimers = () => {
    // Clear intervals for unready timers to avoid memory leaks
    Object.entries(activeTimers).forEach(([id, val]) => {
      if (val !== 'ready' && timersRef.current[id]) {
        clearInterval(timersRef.current[id]);
        delete timersRef.current[id];
      }
    });
    setActiveTimers(prev => {
      const updated = {};
      for (const [id, val] of Object.entries(prev)) {
        if (val === 'ready') updated[id] = val;
      }
      return updated;
    });
  };

  return {
    activeTimers,
    toggleTimer,
    getTimeLeft,
    audioRef,
    clearAllTimers,
    clearReadyTimers,
    clearUnreadyTimers,
  };
}
