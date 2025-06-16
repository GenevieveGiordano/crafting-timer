// components/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
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
      <div
        onClick={(e) => e.stopPropagation()}

        //Idk what this is doing
        // style={{
        //   backgroundColor: 'white',
        //   padding: '20px',
        //   borderRadius: '8px',
        //   maxWidth: '90vw',
        //   maxHeight: '90vh',
        //   overflowY: 'auto',
        // }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
