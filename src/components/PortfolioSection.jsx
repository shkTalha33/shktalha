'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function PortfolioSection() {
  const [filter, setFilter] = useState('*');
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    lines: 0,
  });

  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const countersRef = useRef(null);
  const [hasCounted, setHasCounted] = useState(false);

  const portfolioItems = [
    {
      id: 1,
      title: 'Valix — UK Accounting Platform',
      category: 'development',
      desc: 'UK accounting SaaS platform for firms & businesses: HMRC submissions, payroll RTI, and VAT returns.',
      image: '/assets/img/portfolio/valix.png',
      link: 'https://valix.co.uk/',
    },
    {
      id: 2,
      title: 'Noorāni Botanics — Luxury E-Commerce',
      category: 'web-design',
      desc: 'Luxury botanical skincare, hair rituals, and artisanal fragrance e-commerce web platform.',
      image: '/assets/img/portfolio/noorani.png',
      link: 'https://noorani-botanic.vercel.app/',
    },
    {
      id: 3,
      title: 'Fortune Destinations — Travel & Tourism',
      category: 'development',
      desc: 'Dubai & UAE premier tour booking portal featuring desert safaris, city excursions, and experiences.',
      image: '/assets/img/portfolio/fortune.png',
      link: 'https://fortunedestinations.com/',
    },
    {
      id: 4,
      title: 'Butterfly Sanctuary — Holistic Wellness',
      category: 'web-design',
      desc: 'Holistic health, on-demand Pilates workouts, strength training, and wellness coaching platform.',
      image: '/assets/img/portfolio/butterfly.png',
      link: 'https://www.butterflysanctuaryja.com/',
    },
    {
      id: 5,
      title: 'Autonomous Agentic AI Platform',
      category: 'agentic-ai',
      desc: 'Autonomous multi-step Agentic AI system streamlining inquiries and intelligent task execution.',
      image: '/assets/img/portfolio/2.png',
      link: '#',
    },
    {
      id: 6,
      title: 'Agentic AI Assistant',
      category: 'agentic-ai',
      desc: 'Intelligent AI assistant integrating LLM tooling, function calling, and structured reasoning.',
      image: '/assets/img/portfolio/5.png',
      link: '#',
    },
  ];

  const filteredItems =
    filter === '*'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.from(gridRef.current.querySelectorAll('.portfolio-item'), {
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 35,
          scale: 0.95,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power2.out',
        });
      }

      if (countersRef.current) {
        ScrollTrigger.create({
          trigger: countersRef.current,
          start: 'top 85%',
          onEnter: () => {
            if (!hasCounted) {
              setHasCounted(true);
              let startTime = null;
              const duration = 1800;
              const targetCounts = {
                projects: 20,
                clients: 18,
                satisfaction: 100,
                lines: 100,
              };

              const animateCount = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3);

                setCounts({
                  projects: Math.floor(ease * targetCounts.projects),
                  clients: Math.floor(ease * targetCounts.clients),
                  satisfaction: Math.floor(ease * targetCounts.satisfaction),
                  lines: Math.floor(ease * targetCounts.lines),
                });

                if (progress < 1) {
                  requestAnimationFrame(animateCount);
                }
              };

              requestAnimationFrame(animateCount);
            }
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [hasCounted]);

  return (
    <div className="wrapper active" id="portfolio" ref={sectionRef}>
      {/* Start Portfolio */}
      <section className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-title">
                <h1>Portfolio</h1>
                <h2>My Portfolio</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="sec-content">
                <div className="row">
                  <div className="col-12">
                    <ul className="filter-list">
                      <li
                        className={`filter ${filter === '*' ? 'active' : ''}`}
                        onClick={() => setFilter('*')}
                      >
                        All
                      </li>
                      <li
                        className={`filter ${filter === 'development' ? 'active' : ''}`}
                        onClick={() => setFilter('development')}
                      >
                        Development & AI
                      </li>
                      <li
                        className={`filter ${filter === 'web-design' ? 'active' : ''}`}
                        onClick={() => setFilter('web-design')}
                      >
                        Web Design
                      </li>
                      <li
                        className={`filter ${filter === 'agentic-ai' ? 'active' : ''}`}
                        onClick={() => setFilter('agentic-ai')}
                      >
                        Agentic AI
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="portfolio-container" ref={gridRef}>
                      {filteredItems.map((item) => (
                        <div
                          key={item.id}
                          className="portfolio-item"
                          style={{
                            animation: 'fadeIn 0.35s ease-in-out',
                          }}
                        >
                          <div className="portfolio-card">
                            <img src={item.image} alt={item.title} className="img-fluid" />
                            <div className="overlay">
                              <div className="text">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <a
                                  href={item.link && item.link !== '#' ? item.link : item.image}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title="View Project"
                                >
                                  <i className="bx bx-link-external"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Portfolio */}

      {/* Start Counters */}
      <section className="counters" ref={countersRef}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-title">
                <h1>Stats</h1>
                <h2>My Stats</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="sec-content">
                <div className="row g-4">
                  <div className="col-md-6 col-xl-3">
                    <div className="counter-card">
                      <i className="bx bx-briefcase-alt-2"></i>
                      <div className="text">
                        <h3>
                          <span className="counter">{counts.projects}</span>+
                        </h3>
                        <h5>Projects Done</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-xl-3">
                    <div className="counter-card">
                      <i className="bx bx-happy"></i>
                      <div className="text">
                        <h3>
                          <span className="counter">{counts.clients}</span>+
                        </h3>
                        <h5>Happy Clients</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-xl-3">
                    <div className="counter-card">
                      <i className="bx bx-check-shield"></i>
                      <div className="text">
                        <h3>
                          <span className="counter">{counts.satisfaction}</span>%
                        </h3>
                        <h5>Client Satisfaction</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-xl-3">
                    <div className="counter-card">
                      <i className="bx bx-code-alt"></i>
                      <div className="text">
                        <h3>
                          <span className="counter">{counts.lines}k</span>+
                        </h3>
                        <h5>Lines of Code</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Counters */}
    </div>
  );
}
