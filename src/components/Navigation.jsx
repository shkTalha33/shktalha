"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";

export default function Navigation({ activeSection, onSectionChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Only display the hamburger menu button when at the top of the page (< 90px)
      setIsAtTop(window.scrollY < 90);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    const targetEl = document.getElementById(sectionId);
    if (!targetEl) return;

    // Trigger signature GSAP overlay transition wipe
    gsap.fromTo(
      ".overlay-effect",
      { x: "-150%", y: "-30%" },
      {
        x: "0%",
        y: "-30%",
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          onSectionChange(sectionId);
          targetEl.scrollIntoView({ behavior: "smooth" });
          gsap.fromTo(
            ".overlay-effect",
            { x: "0%", y: "-30%" },
            {
              x: "150%",
              y: "-30%",
              duration: 0.6,
              ease: "power2.inOut",
            },
          );
        },
      },
    );

    setIsOpen(false);
  };

  return (
    <>
      {/* Menu Button - Displayed only at the top; hides when scrolling down */}
      <div
        className={`menu-btn ${isOpen ? "open" : ""} ${!isAtTop && !isOpen ? "nav-hidden" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Overlay Effect */}
      <div className="overlay-effect"></div>

      {/* Navigation */}
      <nav className={isOpen ? "open" : ""}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                href={`#${item.id}`}
                data-text={item.label}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
