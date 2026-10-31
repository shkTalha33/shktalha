"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ParticlesBackground from "./ParticlesBackground";

export default function HeroSection() {
  const words = ["Web Developer", "AI Engineer", "Freelancer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const heroContentRef = useRef(null);
  const logoRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animations
      if (heroContentRef.current) {
        gsap.fromTo(
          heroContentRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2,
          },
        );
      }

      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.5)",
            delay: 0.1,
          },
        );
      }

      if (socialRef.current) {
        gsap.fromTo(
          socialRef.current.children,
          { opacity: 0, x: 25 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.4,
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Text rotating interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    }, 2800);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="wrapper active" id="hero">
      <section className="hero">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-12" ref={heroContentRef}>
              <h1>Muhammad Talha</h1>
              <h2 className="cd-headline clip is-full-width">
                <span>I’m a&nbsp;</span>
                <span
                  className="cd-words-wrapper"
                  style={{
                    display: "inline-block",
                    overflow: "hidden",
                    verticalAlign: "top",
                    width: isAnimating ? "0px" : "auto",
                    minWidth: "180px",
                    transition: "width 0.45s ease-in-out",
                  }}
                >
                  {words.map((word, index) => (
                    <b
                      key={word}
                      className={
                        index === currentWordIndex ? "is-visible" : "is-hidden"
                      }
                      style={{
                        display:
                          index === currentWordIndex ? "inline-block" : "none",
                      }}
                    >
                      {word}
                    </b>
                  ))}
                </span>
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
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
