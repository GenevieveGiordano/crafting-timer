import React, { useState, useRef, useEffect } from 'react';
import TooltipStyle from '../styles/Tooltip.module.scss';

const Tooltip = ({ children, content }) => {
  const [visible, setVisible] = useState(false);
  const [style, setStyle] = useState({});
  const containerRef = useRef(null);
  const tooltipRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setVisible(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  useEffect(() => {
    if (visible && containerRef.current && tooltipRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let top = containerRect.top - tooltipRect.height - 8; // default above
      let left = containerRect.left + (containerRect.width / 2) - (tooltipRect.width / 2);

      // Adjust horizontal
      if (left < 8) left = 8;
      else if (left + tooltipRect.width > viewportWidth) left = viewportWidth - tooltipRect.width - 8;

      // Adjust vertical
      if (top < 8) top = containerRect.bottom + 8;
      if (top + tooltipRect.height > viewportHeight) top = viewportHeight - tooltipRect.height - 8;

      setStyle({
        position: 'fixed',
        top: `${top}px`,
        left: `${left}px`,
        pointerEvents: 'none',
        zIndex: 1000,
        whiteSpace: 'nowrap',
      });
    }
  }, [visible]);

  return (
    <div
      ref={containerRef}
      className={TooltipStyle['tooltip-container']}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && (
        <div ref={tooltipRef} className={TooltipStyle['tooltip-box']} style={style}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
