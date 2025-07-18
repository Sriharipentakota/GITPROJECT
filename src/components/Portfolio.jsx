import React from 'react';
import Header from './portfolio/Header';
import Hero from './portfolio/Hero';
import About from './portfolio/About';
import Skills from './portfolio/Skills';
import Projects from './portfolio/Projects';
import Experience from './portfolio/Experience';
import Contact from './portfolio/Contact';
import Footer from './portfolio/Footer';

const Portfolio = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLogout={onLogout} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;