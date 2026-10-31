'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TestimonialSlider from './TestimonialSlider';

export default function AboutSection({ onNavigate }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // About intro entrance
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

      // Services staggered entrance
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

      // Testimonial entrance
      if (testimonialRef.current) {
        gsap.from(testimonialRef.current, {
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 30,
          duration: 0.7,
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
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, molestiae in aperiam quo minima atque?',
    },
    {
      id: 2,
      title: 'Graphic Design',
      icon: 'bx bx-pen',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, molestiae in aperiam quo minima atque?',
    },
    {
      id: 3,
      title: 'Photography',
      icon: 'bx bx-camera',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, molestiae in aperiam quo minima atque?',
    },
    {
      id: 4,
      title: 'Mobile Development',
      icon: 'bx bx-mobile-alt',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, molestiae in aperiam quo minima atque?',
    },
    {
      id: 5,
      title: 'Video Editing',
      icon: 'bx bx-movie-play',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, molestiae in aperiam quo minima atque?',
    },
    {
      id: 6,
      title: 'Business Analysis',
      icon: 'bx bx-bar-chart-alt-2',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, molestiae in aperiam quo minima atque?',
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
                    <img src="/assets/img/about.png" alt="About" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="sec-content" ref={contentRef}>
                    <h3>I'm James Smith</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis saepe, nam, nesciunt
                      distinctio, officia dignissimos aliquam repellendus dolor modi officiis odit nisi libero
                      similique enim nemo deleniti culpa animi incidunt a maxime tenetur velit expedita.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quis totam eum fugit
                      architecto, quas dolorum. Rerum assumenda quaerat nihil?
                    </p>
                    <div className="row detail">
                      <div className="col-lg-6">
                        <ul>
                          <li><span>Name</span><span>James Smith</span></li>
                          <li><span>Birthday</span><span>May 24 2002</span></li>
                          <li><span>Address</span><span>California, USA</span></li>
                          <li><span>Experience</span><span>6 Years</span></li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul>
                          <li><span>Email</span><span>email@domain.com</span></li>
                          <li><span>Phone</span><span>+012-3456-7891</span></li>
                          <li><span>Skype</span><span>yourskipe</span></li>
                          <li><span>Freelance</span><span>Available</span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="button-box">
                      <a href="/cv.txt" download className="button">
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

      {/* Start Testimonial */}
      <section className="testimonial" id="testimonial" ref={testimonialRef}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-title">
                <h1>Testimonial</h1>
                <h2>My Testimonials</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="sec-content">
                <TestimonialSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonial */}
    </div>
  );
}
