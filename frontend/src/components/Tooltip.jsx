import React, { useState, useRef } from 'react';
import '../styles.css'; // Make sure you create this CSS file

const Tooltip = ({ children, content }) => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setVisible(true);
    }, 1000); // second delay
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && (
        <div className="tooltip-box">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
