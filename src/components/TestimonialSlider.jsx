'use client';

import { useState, useEffect } from 'react';

export default function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      name: 'Emma Wilson',
      role: 'UI/UX Designer',
      image: '/assets/img/testimonial/1.png',
      quote:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus debitis deleniti fuga eum harum atque dicta ipsam quidem ea hic impedit minima et in laudantium sed aperiam vel dolores consectetur veniam quasi, mollitia tenetur ratione voluptatem.',
    },
    {
      id: 2,
      name: 'David Taylor',
      role: 'Software Engineer',
      image: '/assets/img/testimonial/2.png',
      quote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus veniam ratione reprehenderit, quidem quam natus ea iure delectus doloremque est? At enim vitae, laborum quam odio praesentium eligendi id beatae? Nulla mollitia impedit tenetur?',
    },
    {
      id: 3,
      name: 'Alexander Johnson',
      role: 'Graphic Designer',
      image: '/assets/img/testimonial/3.png',
      quote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facere, voluptatum aliquid, accusantium, aliquam tempora quo dolore similique quam beatae illum expedita? Maxime voluptatum amet minus explicabo provident!',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="testimonial-slider-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="row g-4">
        {testimonials.map((item, idx) => {
          // Display 2 items on larger screens or current item
          const isVisible =
            idx === currentIndex || idx === (currentIndex + 1) % testimonials.length;

          return (
            <div
              key={item.id}
              className="col-12 col-lg-6"
              style={{
                display: isVisible ? 'block' : 'none',
                transition: 'all 0.5s ease-in-out',
              }}
            >
              <div className="testimonial-item">
                <div className="testimonial-card">
                  <div className="d-flex justify-content-between">
                    <div className="profile">
                      <div className="image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="text">
                        <h3>{item.name}</h3>
                        <h5>{item.role}</h5>
                      </div>
                    </div>
                    <i className="bx bxs-quote-right"></i>
                  </div>
                  <p>{item.quote}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Owl Carousel Navigation Dots */}
      <div className="owl-dots" style={{ textAlign: 'center', marginTop: '25px' }}>
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`owl-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Slide ${idx + 1}`}
            style={{
              width: '12px',
              height: '12px',
              margin: '5px',
              borderRadius: '50%',
              display: 'inline-block',
              background: idx === currentIndex ? '#fff' : '#ffffff44',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            <span></span>
          </button>
        ))}
      </div>
    </div>
  );
}

