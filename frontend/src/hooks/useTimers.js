import { useState, useEffect, useRef } from 'react';

export default function useTimers() {
  const [activeTimers, setActiveTimers] = useState(() => {
    const saved = localStorage.getItem('activeTimers');
    if (!saved) return {};
    const parsed = JSON.parse(saved);
    const now = Date.now();
    const validTimers = {};
    for (const [id, endTime] of Object.entries(parsed)) {
      if (endTime > now) validTimers[id] = endTime;
    }
    return validTimers;
  });

  const audioRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('activeTimers', JSON.stringify(activeTimers));
  }, [activeTimers]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimers((prev) => {
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

  const toggleTimer = (id, duration) => {
    setActiveTimers((prev) => {
      const updated = { ...prev };
      if (updated[id]) {
        delete updated[id];
      } else {
        updated[id] = Date.now() + duration * 1000;
      }
      return updated;
    });
  };

  const getTimeLeft = (endTime) => {
    if (!endTime) return '';
    if (endTime === 'ready') return 'Ready!';

    const diff = endTime - Date.now();
    if (diff <= 0) return 'Done';

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

  return { activeTimers, toggleTimer, getTimeLeft, audioRef };
}
