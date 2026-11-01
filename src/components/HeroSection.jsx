'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Typed from 'typed.js';
import ParticlesBackground from './ParticlesBackground';

export default function HeroSection() {
  const heroContentRef = useRef(null);
  const logoRef = useRef(null);
  const socialRef = useRef(null);
  const typedElRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroContentRef.current) {
        gsap.fromTo(
          heroContentRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.15,
            ease: 'power3.out',
            delay: 0.2,
          }
        );
      }

      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.5)', delay: 0.1 }
        );
      }

      if (socialRef.current) {
        gsap.fromTo(
          socialRef.current.children,
          { opacity: 0, x: 25 },
          { opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', delay: 0.4 }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Initialize Typed.js with authentic typewriter effect
  useEffect(() => {
    const typed = new Typed(typedElRef.current, {
      strings: [
        'Full Stack Developer',
        'Agentic AI Developer',
        'MERN Stack Developer',
      ],
      typeSpeed: 60,
      backSpeed: 38,
      backDelay: 1600,
      startDelay: 400,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="wrapper active" id="hero">
      <section className="hero">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-12" ref={heroContentRef}>
              <h1>Muhammad Talha</h1>
              <h2 style={{ fontSize: '32px', fontWeight: 500, marginTop: '20px' }}>
                <span>I’m a </span>
                <span
                  ref={typedElRef}
                  style={{
                    color: '#ffffff',
                    fontWeight: 600,
                    display: 'inline-block',
                  }}
                ></span>
              </h2>
            </div>
          </div>
        </div>

        <ParticlesBackground />

        <a href="#hero" className="logo" ref={logoRef}>
          <img src="/assets/img/logo.png" alt="Logo" className="img-fluid" />
        </a>

        <div className="social-icons" ref={socialRef}>
          <a
            href="https://www.linkedin.com/in/muhammad-talha-772085392/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="mailto:shykhtalha33@gmail.com"
            title="Email"
          >
            <i className="bx bx-envelope"></i>
          </a>
          <a
            href="https://wa.me/923187019892"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a
            href="https://github.com/shkTalha33"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
