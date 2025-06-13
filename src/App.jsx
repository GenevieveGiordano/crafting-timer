import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import ItemGroupList from './components/ItemGroupList';
import Footer from './components/Footer';
import './styles.css';


function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(null);
  const [customMinutes, setCustomMinutes] = useState('');
  const [customSeconds, setCustomSeconds] = useState('');

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

// Modal Opener
const openCustomTimer = (item) => {
  setCurrentItemId(item.id);
  setModalOpen(true);
};

// Sets Custom Timer
const setCustomTimer = () => {
  const minutes = parseInt(customMinutes, 10) || 0;
  const seconds = parseInt(customSeconds, 10) || 0;
  const totalSeconds = minutes * 60 + seconds;

  if (currentItemId && totalSeconds > 0) {
    setActiveTimers(prev => ({
      ...prev,
      [currentItemId]: Date.now() + totalSeconds * 1000
    }));
  }

  // Clear and close
  setModalOpen(false);
  setCurrentItemId(null);
  setCustomMinutes('');
  setCustomSeconds('');
};



return (

  
  <div className='container'>

    <Header />
    <div className='core-page'>
      <SideBar />
      <div className='main-content'>
        <audio ref={audioRef} src="/done.mp3" preload="auto" />
        <ItemGroupList
          activeTimers={activeTimers}
          toggleTimer={toggleTimer}
          getTimeLeft={getTimeLeft}
          openCustomTimer={openCustomTimer}
        />
      </div>
    </div>
    <Footer />

    {/* Modal goes h4ere */}
    
{modalOpen && (
  <div
    className="modal-backdrop"
    onClick={() => setModalOpen(false)}
    style={{ 
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999
    }}
  >
    <div
      className="modal"
      onClick={e => e.stopPropagation()}
      style={{ 
        backgroundColor: 'white', padding: '20px', borderRadius: '8px', maxWidth: '400px', width: '90%' 
      }}
    >
      <h3>Set Custom Timer</h3>
      <div className="modal-inputs">
        <input
          type="number"
          placeholder="Minutes"
          value={customMinutes}
          onChange={e => setCustomMinutes(e.target.value)}
          style={{ marginRight: '8px', width: '100px' }}
        />
        <h1>DEBUG??</h1>
        <input
          type="number"
          placeholder="Seconds"
          value={customSeconds}
          onChange={e => setCustomSeconds(e.target.value)}
          style={{ width: '100px' }}
        />
      </div>
      <div className="modal-buttons" style={{ marginTop: '12px' }}>
        <button onClick={setCustomTimer} style={{ marginRight: '8px' }}>Start</button>
        <button onClick={() => setModalOpen(false)}>Cancel</button>
      </div>
    </div>
  </div>
)}



  </div>
);

}

export default App;
