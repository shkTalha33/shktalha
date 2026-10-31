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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitted: true,
        message: 'Please fill in all required fields.',
        type: 'error',
      });
      return;
    }

    setStatus({
      submitted: true,
      message: 'Thank you! Your message has been sent successfully.',
      type: 'success',
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setTimeout(() => {
      setStatus({ submitted: false, message: '', type: '' });
    }, 5000);
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
                                placeholder="Name"
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
                                placeholder="Email"
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
                                placeholder="Your Message"
                                className="form-control"
                                required
                              ></textarea>
                            </div>
                          </div>
                          {status.submitted && (
                            <div className="col-lg-12">
                              <div className="form-group">
                                <span className={`form-message ${status.type}`}>
                                  {status.message}
                                </span>
                              </div>
                            </div>
                          )}
                          <div className="col-lg-8">
                            <div className="form-group">
                              <button type="submit" className="button">
                                Send Message <i className="bx bxs-paper-plane"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="detail" ref={detailRef}>
                      <h2>Don't hesitate to reach out</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptate obcaecati
                        iusto?
                      </p>
                      <ul>
                        <li>
                          <i className="bx bxs-map"></i>
                          <div className="text">
                            <h4>USA Address</h4>
                            <h5>132, My Street, Kingston, New York 12401.</h5>
                          </div>
                        </li>
                        <li>
                          <i className="bx bxs-phone-call"></i>
                          <div className="text">
                            <h4>Phone Number</h4>
                            <h5>
                              <a href="tel:555-555-1234">(555) 555-1234</a>
                            </h5>
                          </div>
                        </li>
                        <li>
                          <i className="bx bxs-envelope"></i>
                          <div className="text">
                            <h4>Email Us</h4>
                            <h5>
                              <a href="mailto:example@email.com">example@email.com</a>
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
