'use client';

import { useEffect, useRef } from 'react';

export default function ScrollToTop() {
  const btnRef = useRef(null);
  const circleRef = useRef(null);

  // SVG circular progress parameters
  const size = 48;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2; // 22.5
  const circumference = 2 * Math.PI * radius; // ~141.37

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      const progress = scrollHeight > 0 ? Math.min(1, Math.max(0, scrollTop / scrollHeight)) : 0;
      const offset = circumference - progress * circumference;

      // Direct DOM update for instant, buttery-smooth 60fps/120fps tracking
      if (circleRef.current) {
        circleRef.current.style.strokeDashoffset = `${offset}px`;
      }

      if (btnRef.current) {
        // Appears smoothly after minimal scroll (80px) so user sees early fill
        if (scrollTop > 80) {
          btnRef.current.style.opacity = '1';
          btnRef.current.style.transform = 'scale(1) translateY(0)';
          btnRef.current.style.pointerEvents = 'all';
        } else {
          btnRef.current.style.opacity = '0';
          btnRef.current.style.transform = 'scale(0.8) translateY(15px)';
          btnRef.current.style.pointerEvents = 'none';
        }
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [circumference]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      ref={btnRef}
      onClick={scrollToTop}
      role="button"
      aria-label="Back to top"
      title="Back to top"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: '#111111',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.65)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 999,
        opacity: 0,
        transform: 'scale(0.8) translateY(15px)',
        pointerEvents: 'none',
        transition: 'opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s',
      }}
      className="scroll-to-top-btn"
    >
      {/* Circular Progress SVG */}
      <svg
        width={size}
        height={size}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          transform: 'rotate(-90deg)',
          pointerEvents: 'none',
        }}
      >
        {/* Track circle (dim grey background) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth={strokeWidth}
        />
        {/* Dynamic progress circle (bright pure white line) */}
        <circle
          ref={circleRef}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#ffffff"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
        />
      </svg>

      {/* Up Arrow Icon */}
      <i
        className="bx bx-up-arrow-alt"
        style={{
          fontSize: '22px',
          color: '#ffffff',
          zIndex: 1,
          transition: 'transform 0.25s ease',
        }}
      ></i>

      <style jsx>{`
        .scroll-to-top-btn:hover {
          background-color: #222222 !important;
          transform: scale(1.08) translateY(-2px) !important;
          box-shadow: 0 10px 28px rgba(255, 255, 255, 0.2) !important;
        }
        .scroll-to-top-btn:hover i {
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}
