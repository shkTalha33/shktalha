'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TestimonialSlider from './TestimonialSlider';

export default function TestimonialSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(contentRef.current, {
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 35,
          duration: 0.65,
          ease: 'power2.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="wrapper active" id="testimonial" ref={sectionRef}>
      <section className="testimonial" id="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-title">
                <h1>Testimonial</h1>
                <h2>Client Feedback</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="sec-content" ref={contentRef}>
                <TestimonialSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

