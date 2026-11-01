"use client";

import { useState, useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll spy to highlight active section in the navigation menu
  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "resume",
      "portfolio",
      "testimonial",
      "contact",
    ];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3 },
      );

      observer.observe(el);
      observers.push({ observer, el });
    });

    return () => {
      observers.forEach(({ observer, el }) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <main>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Preloader */}
      <Preloader />

      {/* Navigation & Transitions */}
      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Full Continuous Page Sections */}
      <HeroSection />

      <AboutSection onNavigate={setActiveSection} />

      <ResumeSection />

      <PortfolioSection />

      {/* <TestimonialSection /> */}

      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Scroll to Top with Dynamic Circular Fill */}
      <ScrollToTop />
    </main>
  );
}
