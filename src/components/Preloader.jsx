'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [preloaded, setPreloaded] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloaded(true);
      const removeTimer = setTimeout(() => {
        setRemoved(true);
      }, 800);
      return () => clearTimeout(removeTimer);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (removed) return null;

  return (
    <div
      className={`preloader ${preloaded ? 'preloaded' : ''}`}
      style={{
        opacity: preloaded ? 0 : 1,
        transition: 'opacity 0.8s ease-in-out',
        pointerEvents: preloaded ? 'none' : 'auto',
      }}
    >
      <div className="loader-line"></div>
    </div>
  );
}

