'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AboutSection({ onNavigate }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          x: -50,
          duration: 0.75,
          ease: 'power3.out',
        });
      }

      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 30,
          stagger: 0.08,
          duration: 0.65,
          ease: 'power2.out',
        });
      }

      if (servicesRef.current) {
        gsap.from(servicesRef.current.querySelectorAll('.service-item'), {
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 40,
          stagger: 0.07,
          duration: 0.6,
          ease: 'power2.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      id: 1,
      title: 'Web Development',
      icon: 'bx bx-code-alt',
      desc: 'Building responsive, scalable, and high-performance web applications using modern frameworks like React, Next.js, and Node.js.',
    },
    {
      id: 2,
      title: 'Agentic AI Development',
      icon: 'bx bx-bot',
      desc: 'Designing and deploying autonomous Agentic AI systems, multi-agent architectures, and LLM integrations that solve complex problems.',
    },
    {
      id: 3,
      title: 'Workflow & Automations',
      icon: 'bx bx-sync',
      desc: 'Streamlining business operations with custom automations, webhook integrations, and smart API pipelines that eliminate repetitive manual work.',
    },
    {
      id: 4,
      title: 'Web Design',
      icon: 'bx bx-palette',
      desc: 'Crafting modern, accessible, and intuitive user experiences with clean visual hierarchy, responsive layouts, and smooth animations.',
    },
    {
      id: 5,
      title: 'MERN Stack Development',
      icon: 'bx bx-layer',
      desc: 'End-to-end full stack engineering using MongoDB, Express.js, React, and Node.js for robust, secure data-driven platforms.',
    },
    {
      id: 6,
      title: 'API & Cloud Architecture',
      icon: 'bx bx-server',
      desc: 'Designing clean RESTful and GraphQL APIs with optimized database queries, secure authentication, and seamless cloud deployment.',
    },
  ];

  const handleLetsTalk = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('contact');
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="wrapper active" id="about" ref={sectionRef}>
      {/* Start About */}
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-title">
                <h1>About</h1>
                <h2>My Intro</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row g-5">
                <div className="col-lg-4">
                  <div className="sec-image" ref={imageRef}>
                    <img src="/assets/img/about.png" alt="Muhammad Talha" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="sec-content" ref={contentRef}>
                    <h3>I'm Muhammad Talha</h3>
                    <p>
                      A passionate Full Stack Developer and Agentic AI Developer with over 2+ years
                      of hands-on industry experience building scalable web applications, dynamic interfaces,
                      and intelligent autonomous systems.
                    </p>
                    <p>
                      Specializing in React, Next.js, Python, Node.js, and Agentic AI systems. Dedicated to
                      writing clean, maintainable code that turns ambitious ideas into high-impact digital products.
                    </p>
                    <div className="row detail">
                      <div className="col-lg-6">
                        <ul>
                          <li><span>Name</span><span>Muhammad Talha</span></li>
                          <li><span>Birthday</span><span>23 March 2002</span></li>
                          <li><span>Address</span><span>Ali Housing Colony, Faisalabad</span></li>
                          <li><span>Experience</span><span>2+ Years</span></li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul>
                          <li><span>Email</span><span><a href="mailto:shykhtalha33@gmail.com">shykhtalha33@gmail.com</a></span></li>
                          <li><span>Phone</span><span><a href="tel:+923187019892">+92 318 7019892</a></span></li>
                          <li>
                            <span>LinkedIn</span>
                            <span>
                              <a
                                href="https://www.linkedin.com/in/muhammad-talha-772085392/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                muhammad-talha-772085392
                              </a>
                            </span>
                          </li>
                          <li><span>Freelance</span><span>Available</span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="button-box">
                      <a href="/Muhammad_TALHA_CV.pdf" download="Muhammad_TALHA_CV.pdf" className="button">
                        Download CV
                      </a>
                      <a href="#contact" className="button" onClick={handleLetsTalk}>
                        Let's Talk
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About */}

      {/* Start Services */}
      <section className="services" id="services">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-title">
                <h1>Services</h1>
                <h2>My Services</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="sec-content">
                <div className="service-container" ref={servicesRef}>
                  <div className="row g-4">
                    {services.map((service) => (
                      <div key={service.id} className="col-12 col-md-6 col-lg-4">
                        <div className="service-item">
                          <div className="service-card">
                            <i className={service.icon}></i>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <div className="card-border">
                              <span className="top"></span>
                              <span className="right"></span>
                              <span className="bottom"></span>
                              <span className="left"></span>
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
      </section>
      {/* End Services */}
    </div>
  );
}
