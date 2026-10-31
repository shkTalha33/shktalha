'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ResumeSection() {
  const [animateBars, setAnimateBars] = useState(false);
  const sectionRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const skillsGridRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Timeline animations
      if (educationRef.current) {
        gsap.from(educationRef.current.children, {
          scrollTrigger: {
            trigger: educationRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          x: -35,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
        });
      }

      if (experienceRef.current) {
        gsap.from(experienceRef.current.children, {
          scrollTrigger: {
            trigger: experienceRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          x: 35,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
        });
      }

      // Skills trigger
      if (skillsRef.current) {
        ScrollTrigger.create({
          trigger: skillsRef.current,
          start: 'top 80%',
          onEnter: () => setAnimateBars(true),
        });
      }

      if (skillsGridRef.current) {
        gsap.from(skillsGridRef.current.querySelectorAll('.skill-card'), {
          scrollTrigger: {
            trigger: skillsGridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 25,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const education = [
    {
      period: '2011 - 2014',
      title: 'Computer Science',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium nostrum ex perspiciatis sequi pariatur? Minus facilis consectetur ab autem esse!',
    },
    {
      period: '2014 - 2016',
      title: 'Bachelor Degree',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium nostrum ex perspiciatis sequi pariatur? Minus facilis consectetur ab autem esse!',
    },
    {
      period: '2016 - 2018',
      title: 'Master Degree',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium nostrum ex perspiciatis sequi pariatur? Minus facilis consectetur ab autem esse!',
    },
  ];

  const experience = [
    {
      period: '2018 - 2020',
      title: 'UI/UX Designer',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium nostrum ex perspiciatis sequi pariatur? Minus facilis consectetur ab autem esse!',
    },
    {
      period: '2020 - 2022',
      title: 'Font End Developer',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium nostrum ex perspiciatis sequi pariatur? Minus facilis consectetur ab autem esse!',
    },
    {
      period: '2022 - 2024',
      title: 'Software Engineer',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium nostrum ex perspiciatis sequi pariatur? Minus facilis consectetur ab autem esse!',
    },
  ];

  const skillsCol1 = [
    { name: 'HTML', value: '99%' },
    { name: 'CSS', value: '98%' },
    { name: 'JS', value: '95%' },
    { name: 'Jquery', value: '93%' },
    { name: 'React', value: '94%' },
  ];

  const skillsCol2 = [
    { name: 'Photoshop', value: '93%' },
    { name: 'Illustrator', value: '90%' },
    { name: 'Figma', value: '95%' },
    { name: 'Premiere Pro', value: '86%' },
    { name: 'Blender', value: '78%' },
  ];

  return (
    <div className="wrapper active" id="resume" ref={sectionRef}>
      {/* Start Resume */}
      <section className="resume" id="resume-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-title">
                <h1>Resume</h1>
                <h2>My Resume</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="sec-content">
                <div className="row align-items-center g-5">
                  <div className="col-lg-6">
                    <h2>Education</h2>
                    <div className="timeline" ref={educationRef}>
                      {education.map((item, idx) => (
                        <div key={idx} className="timeline-item">
                          <div className="timeline-card">
                            <h5>{item.period}</h5>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <div className="card-border">
                              <span className="top"></span>
                              <span className="right"></span>
                              <span className="bottom"></span>
                              <span className="left"></span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <h2>Experience</h2>
                    <div className="timeline" ref={experienceRef}>
                      {experience.map((item, idx) => (
                        <div key={idx} className="timeline-item">
                          <div className="timeline-card">
                            <h5>{item.period}</h5>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <div className="card-border">
                              <span className="top"></span>
                              <span className="right"></span>
                              <span className="bottom"></span>
                              <span className="left"></span>
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
      {/* End Resume */}

      {/* Start Skills */}
      <section className="skills" ref={skillsRef}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-title">
                <h1>Skills</h1>
                <h2>My Skills</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="sec-content">
                <div className="row align-items-center gx-5" ref={skillsGridRef}>
                  <div className="col-lg-6">
                    {skillsCol1.map((skill, idx) => (
                      <div key={idx} className="skill-card">
                        <div className="info">
                          <span className="name">{skill.name}</span>
                          <span className="value">{skill.value}</span>
                        </div>
                        <div className="bar">
                          <span
                            style={{
                              width: animateBars ? skill.value : '0%',
                              transition: `width 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.1}s`,
                              display: 'block',
                            }}
                          ></span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="col-lg-6">
                    {skillsCol2.map((skill, idx) => (
                      <div key={idx} className="skill-card">
                        <div className="info">
                          <span className="name">{skill.name}</span>
                          <span className="value">{skill.value}</span>
                        </div>
                        <div className="bar">
                          <span
                            style={{
                              width: animateBars ? skill.value : '0%',
                              transition: `width 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.1}s`,
                              display: 'block',
                            }}
                          ></span>
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
      {/* End Skills */}
    </div>
  );
}
