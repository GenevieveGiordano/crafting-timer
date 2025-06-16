// useHold.js
import { useRef } from 'react';

export default function useHold(onHold, delay = 400) {
  const holdTimeout = useRef(null);
  const didHold = useRef(false);

  const handleMouseDown = (item) => {
    didHold.current = false;
    holdTimeout.current = setTimeout(() => {
      didHold.current = true;
      onHold(item);
    }, delay);
  };

  const handleMouseUp = () => clearTimeout(holdTimeout.current);

  return { handleMouseDown, handleMouseUp, didHold };
}
