'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ContactSection() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const detailRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    submitted: false,
    message: '',
    type: '',
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (formRef.current) {
        gsap.from(formRef.current, {
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          x: -45,
          duration: 0.7,
          ease: 'power3.out',
        });
      }

      if (detailRef.current) {
        gsap.from(detailRef.current, {
          scrollTrigger: {
            trigger: detailRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          x: 45,
          duration: 0.7,
          ease: 'power3.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitted: true,
        message: 'Please fill in all required fields.',
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ submitted: false, message: '', type: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          submitted: true,
          message: data.message || 'Thank you! Your message has been sent successfully.',
          type: 'success',
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus({
          submitted: true,
          message: data.error || 'Failed to deliver message. Please try again.',
          type: 'error',
        });
      }
    } catch (err) {
      console.error('Submission Error:', err);
      setStatus({
        submitted: true,
        message: 'Network error. Please try again or email directly to shykhtalha33@gmail.com',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 6000);
    }
  };

  return (
    <div className="wrapper active" id="contact" ref={sectionRef}>
      {/* Start Contact */}
      <section className="contact" id="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-title">
                <h1>Contact</h1>
                <h2>Get In Touch</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="sec-content">
                <div className="row g-5">
                  <div className="col-lg-7">
                    <div className="contact-form" ref={formRef}>
                      <form onSubmit={handleSubmit} id="contact-form">
                        <div className="row g-4">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name *"
                                className="form-control"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email *"
                                className="form-control"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <textarea
                                rows="7"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message *"
                                className="form-control"
                                required
                              ></textarea>
                            </div>
                          </div>
                          {status.submitted && (
                            <div className="col-lg-12">
                              <div className="form-group">
                                <span
                                  className={`form-message ${status.type}`}
                                  style={{
                                    display: 'block',
                                    padding: '12px 18px',
                                    borderRadius: '4px',
                                    fontSize: '14px',
                                    backgroundColor: status.type === 'success' ? '#19875422' : '#dc354522',
                                    border: `1px solid ${status.type === 'success' ? '#198754' : '#dc3545'}`,
                                    color: status.type === 'success' ? '#20c997' : '#ff6b6b',
                                  }}
                                >
                                  {status.message}
                                </span>
                              </div>
                            </div>
                          )}
                          <div className="col-lg-8">
                            <div className="form-group">
                              <button type="submit" className="button" disabled={isSubmitting}>
                                {isSubmitting ? (
                                  <>
                                    Sending... <i className="bx bx-loader-alt bx-spin"></i>
                                  </>
                                ) : (
                                  <>
                                    Send Message <i className="bx bxs-paper-plane"></i>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="detail" ref={detailRef}>
                      <h2>Let's build something exceptional together</h2>
                      <p>
                        Have a new web application idea, need Agentic AI solutions for your business,
                        or looking to expand your team with a dedicated Full Stack developer? Reach out anytime!
                      </p>
                      <ul>
                        <li>
                          <i className="bx bxs-map"></i>
                          <div className="text">
                            <h4>Address</h4>
                            <h5>Ali Housing Colony, Faisalabad, Pakistan</h5>
                          </div>
                        </li>
                        <li>
                          <i className="bx bxs-phone-call"></i>
                          <div className="text">
                            <h4>Phone / WhatsApp</h4>
                            <h5>
                              <a href="tel:+923187019892">+92 318 7019892</a>
                            </h5>
                          </div>
                        </li>
                        <li>
                          <i className="bx bxs-envelope"></i>
                          <div className="text">
                            <h4>Email Directly</h4>
                            <h5>
                              <a href="mailto:shykhtalha33@gmail.com">shykhtalha33@gmail.com</a>
                            </h5>
                          </div>
                        </li>
                        <li>
                          <i className="bx bxl-linkedin-square"></i>
                          <div className="text">
                            <h4>LinkedIn</h4>
                            <h5>
                              <a
                                href="https://www.linkedin.com/in/muhammad-talha-772085392/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                muhammad-talha-772085392
                              </a>
                            </h5>
                          </div>
                        </li>
                        <li>
                          <i className="bx bxl-github"></i>
                          <div className="text">
                            <h4>GitHub</h4>
                            <h5>
                              <a
                                href="https://github.com/shkTalha33"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                shkTalha33
                              </a>
                            </h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact */}
    </div>
  );
}
