'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const pointerRef = useRef(null);

  useEffect(() => {
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    if (isTouchDevice) {
      if (cursorRef.current) cursorRef.current.style.display = 'none';
      if (pointerRef.current) pointerRef.current.style.display = 'none';
      return;
    }

    const mouse = { x: -100, y: -100 };
    const cursor = { x: -100, y: -100 };
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (pointerRef.current) {
        pointerRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
      }
    };

    // Smooth physics lerp loop for the outer cursor ring
    const render = () => {
      cursor.x += (mouse.x - cursor.x) * 0.2;
      cursor.y += (mouse.y - cursor.y) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.classList.add('active');
      if (pointerRef.current) pointerRef.current.classList.add('active');
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.classList.remove('active');
      if (pointerRef.current) pointerRef.current.classList.remove('active');
    };

    window.addEventListener('mousemove', handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      '.sec-title, a, .menu-btn, .filter, button, input, textarea, .service-card, .timeline-card, .portfolio-card, .blog-card, .counter-card'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className="cursor"
        ref={cursorRef}
        style={{ top: 0, left: 0, willChange: 'transform' }}
      ></div>
      <div
        className="cursor-pointer"
        ref={pointerRef}
        style={{ top: 0, left: 0, willChange: 'transform' }}
      ></div>
    </>
  );
}
