import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Form from './components/Form';
import ItemGroupList from './components/ItemGroupList';
import Footer from './components/Footer';
import './styles.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(null);
  const [currentItem, setCurrentItem] = useState(null); // <-- keep full item here
  const [customDays, setCustomDays] = useState('');
  const [customHours, setCustomHours] = useState('');
  const [customMinutes, setCustomMinutes] = useState('');
  const [customSeconds, setCustomSeconds] = useState('');

  // Backend data
  const [itemGroups, setItemGroups] = useState({});
  const [loading, setLoading] = useState(true);

  const audioRef = useRef(null);

  // Load timers from localStorage on first render, removing expired timers
  const [activeTimers, setActiveTimers] = useState(() => {
    const saved = localStorage.getItem('activeTimers');
    if (!saved) return {};
    const parsed = JSON.parse(saved);
    const now = Date.now();

    const validTimers = {};
    for (const [id, endTime] of Object.entries(parsed)) {
      if (endTime > now) {
        validTimers[id] = endTime;
      }
    }
    return validTimers;
  });

  // Save timers to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('activeTimers', JSON.stringify(activeTimers));
  }, [activeTimers]);

  // Fetch items from backend
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/items'); // Adjust URL if needed
        const data = await response.json();
        setItemGroups(data);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  // Timer interval: update every second and mark timers as 'ready' if done
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

  // Start or cancel a timer
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

  // Get time left string (supports days)
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
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;

    if (days > 0) return `${days}d ${remainingHours}h ${minutes}m`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  // Open modal and reset custom input fields on open
  const openCustomTimer = (item) => {
    console.log('Opening custom timer for:', item._id, item.name);
    setCurrentItemId(item._id);
    setCurrentItem(item);
    setCustomDays('');
    setCustomHours('');
    setCustomMinutes('');
    setCustomSeconds('');
    setModalOpen(true);
  };

  // Set custom timer from inputs
  const setCustomTimer = () => {
    const days = parseInt(customDays, 10) || 0;
    const hours = parseInt(customHours, 10) || 0;
    const minutes = parseInt(customMinutes, 10) || 0;
    const seconds = parseInt(customSeconds, 10) || 0;

    const totalSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;

    console.log('Setting custom timer for', currentItemId, 'duration (sec):', totalSeconds);

    if (currentItemId && totalSeconds > 0) {
      setActiveTimers((prev) => ({
        ...prev,
        [currentItemId]: Date.now() + totalSeconds * 1000,
      }));
      closeModal();
    } else {
      alert('Please enter a valid custom duration.');
    }
  };

  // Close modal and reset states
  const closeModal = () => {
    setModalOpen(false);
    setCurrentItemId(null);
    setCurrentItem(null);
    setCustomDays('');
    setCustomHours('');
    setCustomMinutes('');
    setCustomSeconds('');
  };

  return (
    <div className="container">
      <Header />

      <div className="core-page">
        {/* Hidden due to WIP */}
        {/* <SideBar /> */}

        <div className="main-content">
          <audio ref={audioRef} src="/done.mp3" preload="auto" />

          {loading ? (
            <p>Loading items...</p>
          ) : (
            <ItemGroupList
              itemGroups={itemGroups} // <- pass the fetched data
              activeTimers={activeTimers}
              toggleTimer={toggleTimer}
              getTimeLeft={getTimeLeft}
              openCustomTimer={openCustomTimer}
            />
          )}
        </div>
      </div>

      <Footer />

      {/* Modal */}
      {modalOpen && (
        <div
          className="modal-backdrop"
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Form
              item={currentItem}
              customDays={customDays}
              setCustomDays={setCustomDays}
              customHours={customHours}
              setCustomHours={setCustomHours}
              customMinutes={customMinutes}
              setCustomMinutes={setCustomMinutes}
              customSeconds={customSeconds}
              setCustomSeconds={setCustomSeconds}
              onSubmit={setCustomTimer}
              onCancel={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
