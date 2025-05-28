import React from 'react';
import './experience.css';

function Experience() {
  const experiences = [
    {
      title: 'Front End Developer | Apple Project',
      duration: '08-05-2023 – 02-08-2023',
      technologies: 'HTML, CSS, JavaScript, Bootstrap, SaaS, NodeJS (Basics)',
      responsibilities: [
        'Comprehensive training on front-end technologies.',
        'Contributed to the Apple e-commerce website.',
        'Performed CSS modifications to enhance UI/UX.',
      ],
    },
    {
      title: 'React Frontend Developer | Pfizer Project',
      duration: '18-08-2023 – 02-02-2024',
      technologies: 'React, Unit Testing, Regression Testing',
      responsibilities: [
        'Worked on unit and regression testing.',
        'Developed proof of concept (POC) screens using React.',
        'Identified critical bugs and performed retesting.',
      ],
    },
    {
      title: 'React Developer | Deloitte Internal Project',
      duration: '06-05-2024 – 06-09-2024',
      technologies: 'React, FIGMA',
      responsibilities: [
        'Developed screens based on FIGMA design specifications.',
        'Collaborated with design and development teams.',
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.title}</h3>
          <p><strong>Duration:</strong> {exp.duration}</p>
          <p><strong>Technologies:</strong> {exp.technologies}</p>
          <ul>
            {exp.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;