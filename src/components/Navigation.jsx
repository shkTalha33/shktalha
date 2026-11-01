"use client";

import { useState } from "react";
import gsap from "gsap";

export default function Navigation({ activeSection, onSectionChange }) {
  const [isOpen, setIsOpen] = useState(false);

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
      {/* Menu Button */}
      <div className={`menu-btn ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
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
