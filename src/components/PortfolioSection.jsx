'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function PortfolioSection() {
  const [filter, setFilter] = useState('*');
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    awards: 0,
    lines: 0,
  });

  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const countersRef = useRef(null);
  const [hasCounted, setHasCounted] = useState(false);

  const portfolioItems = [
    {
      id: 1,
      title: 'Landing Page',
      category: 'web-design',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus odit tenetur id!',
      image: '/assets/img/portfolio/1.png',
    },
    {
      id: 2,
      title: 'Banner Ad',
      category: 'graphic-design',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus odit tenetur id!',
      image: '/assets/img/portfolio/2.png',
    },
    {
      id: 3,
      title: 'Music App',
      category: 'development',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus odit tenetur id!',
      image: '/assets/img/portfolio/3.png',
    },
    {
      id: 4,
      title: 'Web App',
      category: 'web-design',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus odit tenetur id!',
      image: '/assets/img/portfolio/4.png',
    },
    {
      id: 5,
      title: 'Product Mockup',
      category: 'graphic-design',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus odit tenetur id!',
      image: '/assets/img/portfolio/5.png',
    },
    {
      id: 6,
      title: 'Social Media App',
      category: 'development',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus odit tenetur id!',
      image: '/assets/img/portfolio/6.png',
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
                projects: 100,
                clients: 80,
                awards: 25,
                lines: 1500,
              };

              const animateCount = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3);

                setCounts({
                  projects: Math.floor(ease * targetCounts.projects),
                  clients: Math.floor(ease * targetCounts.clients),
                  awards: Math.floor(ease * targetCounts.awards),
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
                        className={`filter ${filter === 'web-design' ? 'active' : ''}`}
                        onClick={() => setFilter('web-design')}
                      >
                        Web Design
                      </li>
                      <li
                        className={`filter ${filter === 'graphic-design' ? 'active' : ''}`}
                        onClick={() => setFilter('graphic-design')}
                      >
                        Graphic Design
                      </li>
                      <li
                        className={`filter ${filter === 'development' ? 'active' : ''}`}
                        onClick={() => setFilter('development')}
                      >
                        Development
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
                                <a href={item.image} target="_blank" rel="noopener noreferrer">
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
                      <i className="bx bx-shopping-bag"></i>
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
                      <i className="bx bx-award"></i>
                      <div className="text">
                        <h3>
                          <span className="counter">{counts.awards}</span>+
                        </h3>
                        <h5>Awards Won</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-xl-3">
                    <div className="counter-card">
                      <i className="bx bx-code-alt"></i>
                      <div className="text">
                        <h3>
                          <span className="counter">{counts.lines}</span>+
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
