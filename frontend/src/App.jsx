// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import CraftingPage from './components/CraftingPage';
import AdminPage from './components/AdminPage';
import Footer from './components/Footer';
import Form from './components/Form';
import Modal from './components/Modal';

import useTimers from './hooks/useTimers';
import useItems from './hooks/useItems';


function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const [customDays, setCustomDays] = useState('');
  const [customHours, setCustomHours] = useState('');
  const [customMinutes, setCustomMinutes] = useState('');
  const [customSeconds, setCustomSeconds] = useState('');

  const { activeTimers, toggleTimer, getTimeLeft, audioRef } = useTimers();
  const { itemGroups, loading } = useItems();

  const openCustomTimer = (item) => {
    setCurrentItemId(item._id);
    setCurrentItem(item);
    setCustomDays('');
    setCustomHours('');
    setCustomMinutes('');
    setCustomSeconds('');
    setModalOpen(true);
  };

  const setCustomTimer = () => {
    const days = parseInt(customDays, 10) || 0;
    const hours = parseInt(customHours, 10) || 0;
    const minutes = parseInt(customMinutes, 10) || 0;
    const seconds = parseInt(customSeconds, 10) || 0;

    const totalSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;

    if (currentItemId && totalSeconds > 0) {
      toggleTimer(currentItemId, totalSeconds);
      closeModal();
    } else {
      alert('Please enter a valid custom duration.');
    }
  };

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
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <CraftingPage
              itemGroups={itemGroups}
              loading={loading}
              activeTimers={activeTimers}
              toggleTimer={toggleTimer}
              getTimeLeft={getTimeLeft}
              openCustomTimer={openCustomTimer}
              audioRef={audioRef}
            />
          }
        />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />

      <Modal isOpen={modalOpen} onClose={closeModal}>
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
      </Modal>
    </Router>
  );
}

export default App;
