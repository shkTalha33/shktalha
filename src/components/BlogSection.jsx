'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function BlogSection() {
  const sectionRef = useRef(null);
  const blogGridRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (blogGridRef.current) {
        gsap.from(blogGridRef.current.children, {
          scrollTrigger: {
            trigger: blogGridRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 35,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power2.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const blogs = [
    {
      id: 1,
      image: '/assets/img/blog/1.png',
      date: 'Jan 12, 2024',
      title: 'Twitter Introduces New Feature to Combat Misinformation',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est vitae ut adipisci.',
    },
    {
      id: 2,
      image: '/assets/img/blog/2.png',
      date: 'Feb 16, 2024',
      title: "Tesla's Self-Driving Car Fleet Hits One Million Milestone",
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est vitae ut adipisci.',
    },
    {
      id: 3,
      image: '/assets/img/blog/3.png',
      date: 'May 02, 2024',
      title: 'Facebook Introduces Next-Gen Virtual Reality Social Platform',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est vitae ut adipisci.',
    },
    {
      id: 4,
      image: '/assets/img/blog/4.png',
      date: 'Dec 12, 2023',
      title: 'Global Markets Surge Amid Optimistic Economic Forecasts',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est vitae ut adipisci.',
    },
    {
      id: 5,
      image: '/assets/img/blog/5.png',
      date: 'Nov 20, 2023',
      title: 'New Breakthrough in Cancer Research Promises Hope',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est vitae ut adipisci.',
    },
    {
      id: 6,
      image: '/assets/img/blog/6.png',
      date: 'Oct 22, 2023',
      title: 'Historic Peace Agreement Signed in Middle East',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est vitae ut adipisci.',
    },
  ];

  return (
    <div className="wrapper active" id="blog" ref={sectionRef}>
      {/* Start Blog */}
      <section className="blog">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-title">
                <h1>Blog</h1>
                <h2>Latest News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="sec-content">
                <div className="blog-container">
                  <div className="row g-5" ref={blogGridRef}>
                    {blogs.map((blog) => (
                      <div key={blog.id} className="col-12 col-md-6 col-lg-4">
                        <div className="blog-item">
                          <div className="blog-card">
                            <div className="image">
                              <img src={blog.image} alt={blog.title} className="img-fluid" />
                            </div>
                            <div className="text">
                              <h6>
                                <i className="bx bxs-calendar"></i>
                                {blog.date}
                              </h6>
                              <h3>{blog.title}</h3>
                              <p>{blog.desc}</p>
                              <a href="#blog">
                                <span>Read More</span>
                                <i className="bx bx-right-arrow-alt"></i>
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
      </section>
      {/* End Blog */}
    </div>
  );
}
